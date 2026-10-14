// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { x } from "./chunk-b0z4bv3v.js";

import { Un } from "./chunk-ddr690nj.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { JOo, Ak, Kan } from "./chunk-9yajep3y.js";

import { pse, Q7, JBn, QBn } from "./chunk-efav7xct.js";

import { knt } from "./chunk-3x88yq7b.js";

import { AN } from "./chunk-cmtcv7k0.js";

import { o, v, T, u } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { randomUUID as O } from "crypto";

import { lstat as I, mkdir as R, readdir as k, stat as N, unlink as M, writeFile as H } from "fs/promises";

import { basename as b, dirname as B, isAbsolute as C, join as y, resolve as j } from "path";

var X = QBn * 24 * 60 * 60 * 1e3, U = "file-transfers";

function S(r) {
  t(`[peer-file-transfer] ${r}`);
}

function NVe(r) {
  let e = b(r).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment", n = e.lastIndexOf("."), a = n > 0 && e.length - n <= 16 ? e.slice(n) : "", s = a ? e.slice(0, n) : e, l = 200 - a.length;
  return (s.length > l ? s.slice(0, l) : s) + a;
}

function gAn(r, e) {
  return `[SendFile: "${NVe(r)}" was not delivered \u2014 ${e}]`;
}

function hAn(r) {
  return `[SendFile: ${r} additional attachment(s) were dropped \u2014 max ${Q7} per message]`;
}

function yAn(r, e) {
  if (typeof e.file_size === "number" && r.length !== e.file_size) return !1;
  return at(r) === e.sha256;
}

function isr(r, e, n) {
  if (i("tengu_send_file_received", {
    transport: c(r),
    file_count: e,
    verified_count: n
  }), n === e) g("peer_file_receive"); else if (n > 0) f("peer_file_receive", "partial_failed"); else m("peer_file_receive", "all_failed");
}

async function nQ(r, e) {
  try {
    let a = await N(r);
    if (!a.isFile() || a.size > e) return null;
  } catch {
    return null;
  }
  let n;
  try {
    n = await Kan(r);
  } catch {
    return null;
  }
  try {
    let a = await n.stat();
    if (!a.isFile() || a.size > e) return null;
    let s = await Ak(n, e, a.size);
    return s.overLimit ? null : s.bytes;
  } catch {
    return null;
  } finally {
    await n.close().catch(() => {});
  }
}

function asr(r, e) {
  if (!e) return r;
  let n = /^<cross-session-message\b[^>]*>\n?/.exec(r);
  return n ? n[0] + e + r.slice(n[0].length) : e + r;
}

function Bqt() {
  return y(Ee(), U);
}

function Y() {
  return AN();
}

var G = /^[0-9a-f]{64}$/, V = p(() => u({
  path: o(),
  file_name: o(),
  file_size: v().int().nonnegative(),
  sha256: o().regex(G),
  media_type: o().optional()
})), Z = p(() => T(V()));

async function U9r(r) {
  let e = await nQ(r, pse);
  if (e === null) throw new x(JBn, "peer file transfer: source unreadable or over the size limit");
  let n = at(e), a = Bqt();
  await R(a, {
    recursive: !0,
    mode: 448
  });
  let s = b(r), l = y(a, `${n.slice(0, 8)}-${O().slice(0, 8)}-${NVe(s)}`);
  return await H(l, e, {
    mode: 384
  }), {
    path: l,
    file_name: s,
    file_size: e.length,
    sha256: n,
    media_type: knt(s)
  };
}

async function B9r() {
  let r = Bqt();
  try {
    let e = await k(r), n = Date.now() - X;
    for (let a of e.slice(0, 200)) {
      let s = y(r, a);
      try {
        let l = await N(s);
        if (l.isFile() && l.mtimeMs < n) await M(s);
      } catch {}
    }
  } catch {}
}

var q = {
  prefix: "",
  received: 0,
  verified: 0
};

async function e5s(r) {
  let e = Z().safeParse(r);
  if (!e.success || e.data.length === 0) {
    if (!e.success) S(`ignoring malformed file_attachments: ${e.error.message}`);
    return q;
  }
  let n = [], a = e.data;
  if (a.length > Q7) n.push(hAn(a.length - Q7)), a = a.slice(0, Q7);
  let s = Y(), l = Bqt(), z = !1, D = [], L = 0;
  for (let d of a) {
    let h = F => {
      S(`${d.file_name}: ${F}`), n.push(gAn(d.file_name, F));
    };
    if (Un(d.path) || JOo(d.path) || !C(d.path)) {
      h("invalid transfer path");
      continue;
    }
    let _ = j(d.path), P = B(_);
    if (Un(_) || JOo(_) || b(P) !== U) {
      h("transfer path is outside the file-transfer spool");
      continue;
    }
    try {
      if (!(await I(P)).isDirectory() || !(await I(_)).isFile()) {
        h("the transfer copy is not a regular file");
        continue;
      }
    } catch {
      h("the transfer copy could not be read (it may have expired)");
      continue;
    }
    let w = await nQ(_, pse);
    if (w === null) {
      h("the transfer copy could not be read (it may have expired)");
      continue;
    }
    if (!yAn(w, d)) {
      h("it failed integrity verification");
      continue;
    }
    let E = y(s, `${d.sha256.slice(0, 8)}-${O().slice(0, 8)}-${NVe(d.file_name)}`);
    try {
      if (!z) await R(s, {
        recursive: !0,
        mode: 448
      }), z = !0;
      await H(E, w, {
        mode: 384,
        flag: "wx"
      });
    } catch (F) {
      h("it could not be written to the uploads directory"), S(`write ${E} failed: ${F}`);
      continue;
    }
    if (L++, D.push(`@"${E}"`), P === l) M(_).catch(() => {});
  }
  let A = [ ...D, ...n ];
  return {
    prefix: A.length > 0 ? A.join(" ") + " " : "",
    received: a.length,
    verified: L
  };
}

export { NVe, gAn, hAn, yAn, isr, nQ, asr, Bqt, U9r, B9r, e5s };
