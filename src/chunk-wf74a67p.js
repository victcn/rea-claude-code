// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { Wje, xdn } from "./chunk-3pqddg8f.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { Y, t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { Q8e } from "./chunk-znhtg8e4.js";

import { p } from "./chunk-jkzenvsk.js";

import { WIe, RU, xU } from "./chunk-q6wab2jw.js";

import { Yn, gi } from "./chunk-cjt10y7b.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { me, yn, St, nI, Rm, VH } from "./chunk-dexzwy8h.js";

import { O } from "./chunk-1xnsr4dy.js";

import { open as A } from "fs/promises";

import { isAbsolute as S } from "path";

var d = new Set(RU), D = new Set([ ...xU, ...RU.filter(e => e !== "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL" && !e.startsWith("CLAUDE_CODE_ARTIFACT") && !WIe(e)), "ANTHROPIC_CUSTOM_HEADERS", "CLAUDE_CODE_SKIP_VERTEX_AUTH" ]), T = p(() => {
  let e = nI([ yn(), me() ]).pipe(VH.number());
  return St({
    env: Rm(me()),
    expiresAt: e.nullable().default(null),
    pid: yn().int(),
    procStart: e
  });
}), w = 2e3, u = null, E = new Set, c = null;

function dRt() {
  return a.CLAUDE_CODE_HOST_AUTH_ENV_VAR || "ANTHROPIC_AUTH_TOKEN";
}

function MCe() {
  let e = Wje();
  return !!e && (!(Yn() && gi()) || e === u);
}

async function m() {
  let e = a.CLAUDE_CODE_HOST_CREDS_FILE;
  if (!e || !S(e)) return null;
  let r;
  try {
    r = await A(e, "r");
    let n = await r.stat();
    if (n.size > 65536) return null;
    if (O() !== "windows") {
      if ((n.mode & 63) !== 0 || n.uid !== process.getuid?.()) return t("ignoring CLAUDE_CODE_HOST_CREDS_FILE with group/other-readable mode or wrong owner", {
        level: "warn"
      }), null;
    }
    let o = await r.readFile({
      encoding: "utf8"
    }), s = T().safeParse(Y(o));
    if (!s.success || !Number.isFinite(s.data.procStart)) return null;
    let i = s.data;
    if (!Aa(i.pid)) return null;
    let f = await Q8e(i.pid);
    if (f !== null && Math.abs(i.procStart - f) > w) return null;
    if (i.expiresAt !== null && i.expiresAt < Date.now()) return null;
    let _ = {};
    for (let [h, R] of Object.entries(i.env)) if (D.has(h)) _[h] = R;
    return {
      ...i,
      env: _
    };
  } catch (n) {
    if (!W(n)) t(`readHostCredsFile failed: ${l(n)}`, {
      level: "warn"
    });
    return null;
  } finally {
    await (r?.close().catch(() => {}));
  }
}

async function eHn() {
  if (Wje()) return;
  if (!a.CLAUDE_CODE_HOST_CREDS_FILE || !Le(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) return;
  let e = await m();
  if (e) {
    let r = new Map, n = {};
    for (let [o, s] of Object.entries(e.env)) if (d.has(o)) C(r, o, s); else n[o] = s;
    c = r, g(n);
  } else t(`CLAUDE_CODE_HOST_CREDS_FILE is set (${a.CLAUDE_CODE_HOST_CREDS_FILE}) but no usable host credentials were read`, {
    level: "warn"
  });
  u = async () => {
    let r = await m();
    if (!r) throw Error("host-creds file re-read failed (missing/stale/expired)");
    let n = {};
    for (let [s, i] of Object.entries(r.env)) if (!d.has(s)) n[s] = i; else if (c && c.get(s) !== i) throw t(`host-creds refresh rejected: endpoint changed (${s})`, {
      level: "warn"
    }), Error("host-creds refresh rejected: endpoint changed");
    let o = dRt();
    if (E.has(o) && !n[o]) throw Error("host-creds refresh dropped the bearer key");
    if (!c) {
      let s = new Map;
      for (let [i, f] of Object.entries(r.env)) if (d.has(i)) C(s, i, f);
      c = s;
    }
    return g(n), {
      authToken: n[o] ?? null
    };
  }, xdn(u);
}

function C(e, r, n) {
  let o = process.env[r];
  if (o && o !== n) {
    t(`host-creds seed: keeping the launch env's ${r}; the file names a different endpoint`, {
      level: "warn"
    }), e.set(r, o);
    return;
  }
  process.env[r] = n, e.set(r, n);
}

function g(e) {
  for (let r of E) if (!(r in e)) delete process.env[r];
  Object.assign(process.env, e), E = new Set(Object.keys(e));
}

export { dRt, MCe, eHn };
