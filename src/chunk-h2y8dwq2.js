// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { z } from "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { j, tb } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { nt } from "./chunk-5wbhf1bk.js";

import { i } from "./chunk-hedpgw9m.js";

import { zan, Ree, qve, JS, rq, nL, Qie } from "./chunk-9yajep3y.js";

import { dt } from "./chunk-dd98x6x7.js";

import { O_, m$e } from "./chunk-ccv68e56.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { WH, T2n, D8e, mve, $on, Fon, Uon, Bon, He } from "./chunk-f1zpf9me.js";

import { XUe } from "./chunk-xywp7esx.js";

import { sn } from "./chunk-642shbw5.js";

import { en } from "./chunk-0qwx38yy.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { yt } from "./chunk-9zhz923g.js";

var Kco = 15e4, u_r = 3e4;

function $Ye() {
  return T(dt().bashOutputMaxChars) ?? u_r;
}

function b7() {
  let e = T(dt().bashOutputMaxChars);
  if (e !== void 0) return e;
  return XUe("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, u_r, Kco).effective;
}

function T(e) {
  if (e === void 0) return;
  return Math.min(Math.max(e, T2n), D8e);
}

import { dirname as O } from "path";

function lue() {
  if (O_() !== void 0) return {
    dirs: [],
    paths: []
  };
  return {
    dirs: [ JS() ],
    paths: []
  };
}

function xJt(e, r) {
  if (!e) return;
  let n = O(r);
  if (!e.dirs.includes(n)) e.dirs.push(n);
  if (!e.paths.includes(r)) e.paths.push(r);
}

function eys(e, r) {
  if (!e) return;
  e.paths = e.paths.filter(n => n !== r);
}

function f_r(e, r, n, o) {
  let s = C(e.webFetchSavedFiles, r), a = s === e.webFetchSavedFiles ? e : {
    ...e,
    webFetchSavedFiles: s
  };
  return n ? a : o(a);
}

function C(e, r) {
  if (!r) return e;
  if (e && r.dirs.every(n => e.dirs.includes(n)) && r.paths.every(n => e.paths.includes(n))) return e;
  return {
    dirs: D([ ...e?.dirs ?? [], ...r.dirs ]),
    paths: D([ ...e?.paths ?? [], ...r.paths ])
  };
}

import { basename as _, dirname as B, join as b } from "path";

var S = Buffer.from("%PDF-");

function p_r(e) {
  return e.subarray(0, S.length).equals(S);
}

function bLn(e) {
  if (!e) return "bin";
  switch (nt(e, ";").trim().toLowerCase()) {
   case "application/pdf":
    return "pdf";

   case "application/json":
    return "json";

   case "text/csv":
    return "csv";

   case "text/plain":
    return "txt";

   case "text/html":
    return "html";

   case "text/markdown":
    return "md";

   case "application/zip":
    return "zip";

   case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    return "docx";

   case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    return "xlsx";

   case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    return "pptx";

   case "application/msword":
    return "doc";

   case "application/vnd.ms-excel":
    return "xls";

   case "audio/mpeg":
    return "mp3";

   case "audio/wav":
    return "wav";

   case "audio/ogg":
    return "ogg";

   case "video/mp4":
    return "mp4";

   case "video/webm":
    return "webm";

   case "image/png":
    return "png";

   case "image/jpeg":
    return "jpg";

   case "image/gif":
    return "gif";

   case "image/webp":
    return "webp";

   case "image/svg+xml":
    return "svg";

   case "image/x-icon":
   case "image/vnd.microsoft.icon":
    return "ico";

   case "text/css":
    return "css";

   case "text/javascript":
   case "application/javascript":
    return "js";

   case "application/xml":
   case "text/xml":
    return "xml";

   case "application/manifest+json":
    return "webmanifest";

   case "font/woff2":
   case "application/font-woff2":
    return "woff2";

   case "font/woff":
   case "application/font-woff":
    return "woff";

   case "font/ttf":
    return "ttf";

   case "font/otf":
    return "otf";

   case "application/wasm":
    return "wasm";

   default:
    return "bin";
  }
}

var FYe = zan;

async function Yk(e, r, n, o, s) {
  if (e.length > FYe) return {
    error: `content is ${e.length} bytes, over the ${FYe} byte persist limit`
  };
  let a = O_();
  if (a !== void 0) {
    let l = bLn(r), f = e.length > a.maxBytes ? null : await m$e(a, {
      leafName: `${n}.${l}`,
      data: e
    });
    if (f === null) return {
      error: "binary content was not saved"
    };
    return xJt(o, f.path), i("tengu_binary_content_persisted", {
      sizeBytes: e.length,
      ext: c(l)
    }), {
      filepath: f.path,
      size: e.length,
      ext: l
    };
  }
  let u = JS();
  if (z() && s !== void 0) {
    let l = await F(s, u, e, r, n, o);
    if (l !== void 0) return l;
  }
  await nL(u, s);
  let d = bLn(r), p = b(u, `${n}.${d}`);
  try {
    await Qie(p, e);
  } catch (l) {
    let f = j(l);
    return t(`Failed to persist binary content to ${p}: ${f.message}`, {
      level: "error"
    }), {
      error: f.message
    };
  }
  return xJt(o, p), i("tengu_binary_content_persisted", {
    sizeBytes: e.length,
    ext: c(d)
  }), {
    filepath: p,
    size: e.length,
    ext: d
  };
}

function UYe(e, r) {
  let n = o => o.replace(/[^\w-]/g, "");
  return `artifact-${n(e).slice(0, 8)}-${n(r)}`;
}

function tys(e) {
  return _(e).toLowerCase().startsWith("artifact-") && _(B(e)).toLowerCase() === qve;
}

async function F(e, r, n, o, s, a) {
  let u = bLn(o), d = `${s}.${u}`, p = rq(r, d);
  if (p === void 0) return;
  let l = b(r, d), f = await e.write(p, n, {
    mode: 438 & ~process.umask()
  });
  if (!f.ok) {
    let x = yt(f.error);
    return t(`Failed to persist binary content to ${l}: ${x}`, {
      level: "error"
    }), {
      error: `storage write failed (${x})`
    };
  }
  return xJt(a, l), i("tengu_binary_content_persisted", {
    sizeBytes: n.length,
    ext: c(u)
  }), {
    filepath: l,
    size: n.length,
    ext: u
  };
}

function goe(e, r, n, o) {
  return `${o}Binary content (${r || "unknown type"}, ${en(n)}) saved to ${e}`;
}

function SLn(e, r, n) {
  let o = O_();
  if (nt(r ?? "", ";").trim().toLowerCase() !== "application/pdf" || !p_r(e)) return;
  if (e.length > (o?.inlinePdfBytes?.(n) ?? 0)) return o?.servesTheModelsFiles?.(n) === !0 ? {
    type: "text",
    text: k(e.length)
  } : void 0;
  return {
    type: "document",
    source: {
      type: "base64",
      media_type: "application/pdf",
      data: e.toString("base64")
    }
  };
}

function k(e) {
  return `[This PDF (${en(e)}) cannot be shown whole in this session. Read it again with the pages parameter, for example pages: "1-5", at most ${Ree} pages per call.]`;
}

var M = "[Another PDF in this result was left out: only the first is shown.]";

function wLn(e) {
  if (!Array.isArray(e) || N(e, n => n.type === "document") < 2) return e;
  let r = !1;
  return e.map(n => {
    if (n.type !== "document" || !r) return r ||= n.type === "document", n;
    return {
      type: "text",
      text: M
    };
  });
}

function hoe(e, r) {
  let n = nt(e ?? "", ";").trim();
  return `[Binary content (${n.length <= 100 && /^[\w.+-]+\/[\w.+-]+$/.test(n) ? n : "application/octet-stream"}, ${en(r)}) was not kept: it could not be saved.]`;
}

var vLn = "[The portion truncated above was not kept: it could not be saved.]";

var U = 64;

function nys(e) {
  let {staged: r, chainPublishIds: n, chainPublishSlots: o} = ee().autoEditAttribution, s = {
    ...e,
    consumed: !1
  };
  if (r.set(e.slug, s), o.set(e.expectedToolUseId, s), n.add(e.expectedToolUseId), 
  n.size > U) {
    let a = n.values().next().value;
    if (a !== void 0) n.delete(a);
  }
  return s;
}

function mPt(e) {
  return e !== void 0 && ee().autoEditAttribution.chainPublishIds.has(e);
}

function A(e) {
  if (e === void 0) return;
  return ee().autoEditAttribution.chainPublishSlots.get(e);
}

function rys(e) {
  return A(e) !== void 0;
}

function oys(e) {
  let r = A(e), n = {
    storedProbe: r?.storedProbe,
    roundTrip: r?.roundTrip
  };
  if (r !== void 0) r.storedProbe = void 0, r.roundTrip = void 0;
  return n;
}

function qco(e, r) {
  let n = ee().autoEditAttribution.staged.get(e);
  if (n === void 0 || n.consumed || r === void 0 || n.expectedToolUseId !== r) return null;
  return n.baseVersion;
}

function sys(e, r, n) {
  let o = ee().autoEditAttribution.staged.get(e);
  if (o === void 0 || o.consumed || r === void 0 || o.expectedToolUseId !== r || o.slug !== e) return null;
  let s = Object.keys(n), a = Object.keys(o.input);
  if (s.length !== a.length || !a.every(u => n[u] === o.input[u])) return null;
  return {
    contentSha256: o.contentSha256
  };
}

function iys(e, r) {
  let n = ee().autoEditAttribution.staged.get(e);
  if (n === void 0 || n.consumed || r === void 0 || n.expectedToolUseId !== r) return null;
  return n.consumed = !0, {
    threadId: n.threadId,
    commentId: n.commentId,
    recordVersionEcho: o => {
      n.versionEcho = o;
    }
  };
}

function ays(e) {
  let {staged: r, chainPublishSlots: n} = ee().autoEditAttribution;
  if (r.get(e.slug) === e) r.delete(e.slug);
  if (n.get(e.expectedToolUseId) === e) n.delete(e.expectedToolUseId);
}

function lys(e) {
  let r = {
    ...e,
    consumed: !1
  };
  return ee().pipelineReplyOrigins.set(e.expectedToolUseId, r), r;
}

function dys(e, r, n) {
  let o = n === void 0 ? void 0 : ee().pipelineReplyOrigins.get(n);
  if (o === void 0 || o.consumed || o.slug !== e || o.threadId !== r) return !1;
  return o.consumed = !0, !0;
}

function P(e) {
  return e !== void 0 && ee().pipelineReplyOrigins.has(e);
}

function cys(e) {
  let r = ee().pipelineReplyOrigins;
  if (r.get(e.expectedToolUseId) === e) r.delete(e.expectedToolUseId);
}

var m = 3, L = 1024, H = new Set(Object.values(mve)), V = new Set([ `ec_${$on}`, Fon, `ec_${Uon}`, "policy_fetch_failed", "policy_route_missing", ...Object.values(Bon) ]);

function g(e) {
  return typeof e === "string" ? e.slice(0, L) : "";
}

function X(e) {
  if (typeof e !== "object" || e === null) return "publish\0\0\0";
  let r = "action" in e ? g(e.action) : "", n = "file_path" in e ? g(e.file_path) : "", o = "url" in e ? g(e.url) : "", s = "thread_id" in e ? g(e.thread_id) : "";
  return `${r || "publish"}\0${n}\0${o}\0${s}`;
}

function y(e, r, n) {
  let o = ee().rejectBreaker, s = X(e), a = o.get(s), u = a !== void 0 && a.reason === r && a.fingerprint === n ? a.count + 1 : 1;
  if (o.set(s, {
    count: u,
    reason: r,
    fingerprint: n
  }), u === m) i("tengu_artifact_reject_breaker", {
    reason: tb(r)
  });
  return u >= m;
}

var w = `IMPORTANT: Artifact calls for this target have now been rejected ${m} or more times in this session for the same reason.`, h = `${w} Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`, R = `${w} Stop calling Artifact for this target and tell the user the artifact could not be published and why \u2014 do not try to work around this refusal.`, Aat = Math.max(h.length, R.length) + 2;

function I(e) {
  return H.has(e) ? R : h;
}

function Cat(e) {
  for (let r of [ h, R ]) if (e.startsWith(`${r}\n\n`)) return e.slice(r.length + 2);
  return e;
}

var G = "live_edit_conflict";

function m_r(e, r, n) {
  let o = Cat(r), s = n === G ? sn(o + W(e, o)) : sn(o);
  return y(e, n, s) && !V.has(n) ? `${I(n)}\n\n${o}` : o;
}

function W(e, r) {
  if (typeof e !== "object" || e === null || !("action" in e) || e.action !== "live-edit" || !("ops" in e) || !Array.isArray(e.ops)) return "";
  let n = /\bops\[(\d+)\]/.exec(r), o = n === null ? e.ops : [ e.ops[Number.parseInt(n[1], 10)] ], s = new Set;
  for (let a of o) {
    if (typeof a !== "object" || a === null) continue;
    for (let u of [ "target", "before", "after", "parent" ]) if (u in a) {
      let d = g(a[u]);
      if (d !== "") s.add(d);
    }
  }
  return s.size === 0 ? "" : `\0${[ ...s ].sort().join("\0")}`;
}

var E = "schema";

function K(e) {
  if (e === void 0) return "";
  return e.issues.map(r => {
    let n = r.code === "unrecognized_keys" ? [ ...r.keys ].sort().join(",") : "";
    return `${r.code}:${r.path.map(String).join(".")}:${n}`;
  }).sort().join("|");
}

function v(e) {
  return P(e.toolUseId) || mPt(e.toolUseId);
}

function uys(e, r = {}) {
  let {validationErrorSteer: n, validateInput: o, call: s} = e, a = {
    validationErrorSteer: (u, d) => Y(u, d, r.schemaSteerOverride?.(u) ?? null, n?.(u, d) ?? null),
    ...o !== void 0 && {
      validateInput: Z(o, r.onValidateReject)
    },
    call: q(s)
  };
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(a));
}

function Y(e, r, n, o) {
  let s = (n !== null ? "override|" : "") + K(r), a = y(e, E, s);
  if (n !== null) return n;
  let d = [ a ? I(E) : null, o ].filter(p => p !== null).join(`\n\n`);
  return d === "" ? null : d;
}

function Z(e, r) {
  return async (n, o) => {
    let s = await e(n, o);
    if (s.result) return s;
    let a = v(o);
    try {
      r?.(n, {
        ...s
      }, {
        unattended: a
      });
    } catch (u) {
      t(`artifact reject observer threw: ${u instanceof Error ? u.message : typeof u}`, {
        level: "error"
      });
    }
    if (a) return s;
    return {
      ...s,
      message: m_r(n, s.message, `ec_${s.errorCode}`)
    };
  };
}

function q(e) {
  return async (r, n, ...o) => {
    if (v(n)) return e(r, n, ...o);
    let s;
    try {
      s = await e(r, n, ...o);
    } catch (a) {
      if (a instanceof He) a.message = m_r(r, a.message, a.reasonCode ?? "unknown");
      throw a;
    }
    return J(), s;
  };
}

function J() {
  ee().rejectBreaker.clear();
}

import { STATUS_CODES as Q } from "http";

var ELn = 1e5, PJt = WH - 2e3;

function S7(e) {
  return Q[e] ?? "Unknown Status";
}

export { Kco, u_r, $Ye, b7, p_r, lue, xJt, eys, f_r, bLn, FYe, Yk, UYe, tys, goe, SLn, wLn, hoe, vLn, nys, mPt, rys, oys, qco, sys, iys, ays, lys, dys, cys, Aat, Cat, m_r, uys, ELn, PJt, S7 };
