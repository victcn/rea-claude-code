// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Hu, TT, l, E, W } from "./chunk-b0z4bv3v.js";

import { Ecn } from "./chunk-ddr690nj.js";

import { tg } from "./chunk-x35dw27e.js";

import { _, Ou, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { mM } from "./chunk-5wbhf1bk.js";

import { dje, li } from "./chunk-zvghq5er.js";

import { gn } from "./chunk-yxennhe9.js";

import { a } from "./chunk-j016gcgm.js";

import { XP, sIe } from "./chunk-s2t7g8m9.js";

import { p } from "./chunk-jkzenvsk.js";

import { mt } from "./chunk-j90se18b.js";

import { g3r, STn } from "./chunk-j5jvvqe4.js";

import { Txt } from "./chunk-sqb9meyh.js";

import { o, v, u, De, Kr, ue, A } from "./chunk-cvcg6n1z.js";

import { Zs } from "./chunk-rgd61mm3.js";

import { qXe } from "./chunk-zx69jgxc.js";

import { we } from "./chunk-m8ez8fhk.js";

import { createHash as re } from "crypto";

import { dirname as ie, join as K } from "path";

import { constants as Y } from "fs";

import { open as q } from "fs/promises";

import { join as O } from "path";

var J = 4194304, Z = 5, Q = [ "sso_account_id", "sso_role_name", "sso_session", "sso_start_url", "role_arn", "source_profile", "credential_source", "credential_process", "web_identity_token_file", "region" ], ee = [ "type", "client_email", "audience", "service_account_impersonation_url", "quota_project_id" ], te = p(() => {
  let e = o().optional().catch(void 0);
  return u({
    type: e,
    client_email: e,
    audience: e,
    service_account_impersonation_url: e,
    quota_project_id: e
  });
});

async function w(e) {
  try {
    let n = await q(e, Y.O_RDONLY | dje | Zs);
    try {
      let r = await n.stat();
      if (!r.isFile() || r.size > J) {
        t("[3p-model-memory] an AWS or gcloud identity file is over 4 MB or not a regular file, so start-up model checks will not reuse saved results");
        return;
      }
      let d = Buffer.alloc(r.size), s = 0;
      while (s < r.size) {
        let {bytesRead: i} = await n.read(d, s, r.size - s, s);
        if (i === 0) break;
        s += i;
      }
      return {
        text: d.subarray(0, s).toString("utf8"),
        mtimeMs: r.mtimeMs
      };
    } finally {
      await n.close();
    }
  } catch (n) {
    if (W(n)) return {
      text: ""
    };
    t(`[3p-model-memory] identity file unreadable: ${E(n) ?? "unknown"}`);
    return;
  }
}

var L = qXe(async () => {
  let {getHomeDir: e, loadSharedConfigFiles: n} = await import("./chunk-z98tmv9w.js").then(m => we(m.default, 1)), r = e(), d = Ecn(a.AWS_CONFIG_FILE || O(r, ".aws", "config"), r), s = Ecn(a.AWS_SHARED_CREDENTIALS_FILE || O(r, ".aws", "credentials"), r);
  if ((await Promise.all([ w(d), w(s) ])).includes(void 0)) return;
  try {
    let {configFile: c, credentialsFile: g} = await n({
      configFilepath: d,
      filepath: s,
      ignoreCache: !0
    }), f = [], m = a.AWS_PROFILE || "default";
    for (let S = 0; m && S <= Z; S++) {
      let b = {
        ...c[m],
        ...g[m]
      };
      f.push(`profile=${m}`);
      for (let h of Q) f.push(`${h}=${b[h] ?? ""}`);
      if (b.sso_session) {
        let h = c[`sso-session.${b.sso_session}`];
        f.push(`sso_session_start_url=${h?.sso_start_url ?? ""}`);
      }
      f.push(`aws_access_key_id=${b.aws_access_key_id ?? ""}`), m = b.source_profile && b.source_profile !== m ? b.source_profile : void 0;
    }
    return f.join(`\n`);
  } catch (c) {
    t(`[3p-model-memory] AWS config unreadable: ${E(c) ?? "unknown"}`);
    return;
  }
}, () => "aws");

function ne(e) {
  let n = !1, r = {};
  for (let d of e.split(/\r?\n/)) {
    let s = d.trim(), i = /^\[(.+)\]$/.exec(s);
    if (i) {
      n = i[1].trim() === "core";
      continue;
    }
    let c = /^(project|account)\s*=\s*(.*)$/.exec(s);
    if (n && c) r[c[1]] = c[2].trim();
  }
  return [ `project=${r.project ?? ""}`, `account=${r.account ?? ""}` ];
}

var j = qXe(async () => {
  let e = STn(), n = await w(O(e, "active_config"));
  if (n === void 0) return;
  let r = a.CLOUDSDK_ACTIVE_CONFIG_NAME || n.text.trim() || "default", d = a.GOOGLE_APPLICATION_CREDENTIALS || a.google_application_credentials || O(g3r(), "application_default_credentials.json"), [s, i] = await Promise.all([ w(O(e, "configurations", `config_${r}`)), w(d) ]);
  if (s === void 0 || i === void 0) return;
  let c = [ `config=${r}`, ...ne(s.text) ], g = i.text ? te().safeParse(mt(i.text, !1)) : void 0, f = g?.success ? g.data : {};
  for (let m of ee) c.push(`${m}=${f[m] ?? ""}`);
  if (f.type === "authorized_user") c.push(`adc_file=${i.mtimeMs}`);
  return c.join(`\n`);
}, () => "gcp");

var oe = 9e5, nye = 864e5, se = 6e5, ce = 6048e5, ae = "1", C = 1, z = 65536, de = 16, fe = 32, y = "[3p-model-memory]", le = 300, me = {
  refused: "the provider refuses this model for the account",
  denied: "an IAM or SCP policy denies the call",
  temporary: "nothing learned about the model",
  failed: "a failure this build cannot interpret"
}, pe = p(() => Kr("s", [ De({
  s: A("ok"),
  at: v()
}), De({
  s: A("refused"),
  at: v(),
  rc: v().optional()
}) ])), _e = p(() => De({
  version: A(C),
  entries: ue(o(), ue(o(), pe()))
})), ge = p(() => u({
  version: v()
})), D = Symbol("newer format");

function yTn() {
  return K(Ee(), "cache", "model-access.json");
}

function yQo() {
  return K(Ee(), "cache", "provider-probe-verdicts.json");
}

function be() {
  return Boolean(a.AWS_BEARER_TOKEN_BEDROCK) || Boolean(a.CLOUDSDK_AUTH_ACCESS_TOKEN) || Boolean(a.CLAUDE_CODE_SKIP_VERTEX_AUTH && a.ANTHROPIC_API_KEY) || XP() || sIe() !== void 0;
}

function Jtt() {
  let e = a.ANTHROPIC_CUSTOM_HEADERS;
  if (!e) return "";
  let n = [];
  for (let r of e.split(/\n|\r\n/)) {
    let d = r.indexOf(":");
    if (d !== -1) n.push(r.slice(0, d).trim().toLowerCase());
  }
  return n.filter(r => r !== "").sort().join(",");
}

async function Qtt(e, n, r = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
  try {
    if (a.CLAUDE_CODE_SKIP_MODEL_ACCESS_MEMORY || be()) return;
    let d = e === "vertex" ? await j() : await L();
    if (d === void 0) return;
    let s = await n();
    return re("sha256").update([ e, ae, r, ...s.map(i => i ?? ""), d ].join("\0")).digest("hex").slice(0, 24);
  } catch (d) {
    t(`${y} not used this start: ${E(d) ?? "unknown"}`);
    return;
  }
}

var R = qXe(async e => {
  let n = await H(e);
  return n === D ? {} : n;
}), N = qXe(async e => {});

async function H(e) {
  let n;
  try {
    let i = gn();
    if (li === 0) {
      let c = await i.lstat(e);
      if (c !== void 0 && !c.isFile) return {};
    }
    n = await i.readTail(e, z + 1, {
      noFollow: !0
    });
  } catch (i) {
    if (!W(i)) t(`${y} read failed: ${E(i) ?? "unknown"}`);
    return {};
  }
  if (n.length > z) return t(`${y} file over 64 KB; ignoring it`), {};
  let r = mt(n.toString("utf8"), !1), d = ge().safeParse(r);
  if (d.success && d.data.version > C) return D;
  let s = _e().safeParse(r);
  if (!s.success) return t(`${y} file not in this format; ignoring it`), {};
  return s.data.entries;
}

function M(e, n) {
  if (e === void 0 || e.at > n) return;
  if (e.s === "ok") return n - e.at <= oe ? {
    state: "ok",
    at: e.at
  } : void 0;
  if (n - e.at > nye) return;
  return {
    state: "refused",
    at: e.at,
    ...e.rc !== void 0 && e.rc <= n && {
      recheckClaimedAt: e.rc
    }
  };
}

async function zDe(e, n, r = Date.now()) {
  return M((await R(yTn()))[e]?.[n], r);
}

function V(e, n = Date.now()) {
  return e.state === "refused" && n - Math.max(e.at, e.recheckClaimedAt ?? 0) >= se;
}

function T(e, n, r, d) {
  let s = yTn(), c = N(s).then(async () => {
    let g = await H(s);
    if (g === D) return r(void 0);
    let f = B(g, e, n, r, d);
    try {
      let m = gn();
      await m.mkdir(ie(s)), await m.atomicWrite(s, _({
        version: C,
        entries: f
      }), 384);
    } catch (m) {
      t(`${y} write failed: ${E(m) ?? "unknown"}`);
    }
    return f[e]?.[n];
  }).catch(() => {});
  return N.cache.set(s, c.then(() => {})), c;
}

function F(e, n, r, d) {
  let s = yTn(), i = R(s);
  R.cache.set(s, i.then(c => B(c, e, n, () => r, d), () => ({})));
}

async function GDe(e, n, r, d = Date.now()) {
  let s = {
    s: r,
    at: d
  };
  F(e, n, s, d), await T(e, n, () => s, d);
}

async function Ae(e, n, r = Date.now()) {
  F(e, n, void 0, r), await T(e, n, () => {}, r);
}

async function he(e, n, r = Date.now()) {
  let d = !1, s = await T(e, n, c => {
    let g = M(c, r);
    if (g !== void 0 && V(g, r)) return d = !0, {
      s: "refused",
      at: g.at,
      rc: r
    };
    return c;
  }, r);
  if (F(e, n, s, r), d) return {
    claimed: !0
  };
  let i = M(s, r);
  return i === void 0 ? {
    claimed: !1
  } : {
    claimed: !1,
    current: i
  };
}

function B(e, n, r, d, s) {
  let i = {};
  for (let [f, m] of Object.entries(e)) {
    let S = {};
    for (let [b, h] of Object.entries(m)) {
      let P = h.s === "ok" ? ce : nye;
      if (h.at <= s + P && s - h.at <= P) S[b] = h;
    }
    i[f] = S;
  }
  let c = d(i[n]?.[r]), g = {
    ...i[n]
  };
  if (delete g[r], c !== void 0) g[r] = c;
  return i[n] = Object.fromEntries(Object.entries(g).sort(([, f], [, m]) => m.at - f.at).slice(0, fe)), 
  Object.fromEntries(Object.entries(i).filter(([, f]) => Object.keys(f).length > 0).sort(([, f], [, m]) => I(m) - I(f)).slice(0, de));
}

function I(e) {
  return Math.max(...Object.values(e).map(n => n.at));
}

function U(e) {
  if (typeof e !== "object" || e === null || !("status" in e)) return;
  return typeof e.status === "number" ? e.status : void 0;
}

function Se(e, n) {
  if (e === "refused" || e === "denied") return e;
  let r = U(n);
  return e === "credential" || r === void 0 || r === 408 || r === 429 || r >= 500 ? "temporary" : "failed";
}

async function _Tn(e, n, r, d, s) {
  let i = await ye(e, n, r, d, s);
  return s?.onVerdict?.(i.verdict, i.rememberedAt), i.verdict;
}

async function ye(e, n, r, d, s) {
  if (n !== void 0 && !s?.live) {
    let i = await zDe(n, r), c = !1;
    if (i !== void 0 && s?.isDefault && V(i)) {
      let f = await he(n, r);
      c = f.claimed, i = f.claimed ? void 0 : f.current;
    }
    if (i !== void 0) return t(`${y} ${e} ${r}: ${i.state} (remembered)`), {
      verdict: i.state === "ok" ? "accessible" : "refused",
      rememberedAt: i.at
    };
    let g = await k(e, n, r, d, s);
    if (c && g === "denied") return GDe(n, r, "refused"), {
      verdict: "refused"
    };
    return {
      verdict: g
    };
  }
  return {
    verdict: await k(e, n, r, d, s)
  };
}

async function k(e, n, r, d, s) {
  let i = await d(), c = i.accessible ? void 0 : Txt(e, i.error);
  if (c === "outdated") {
    let x = s?.versionTooOld === "unavailable", X = x ? "not switching to it" : "keeping it, so the first request shows the update message";
    if (t(`${y} ${e} ${r}: needs a newer Claude Code than ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION}; ${X} (not saved; any earlier answer cleared)`), n !== void 0) Ae(n, r);
    return x ? "failed" : "accessible";
  }
  if (n !== void 0 && (i.accessible || c === "refused")) GDe(n, r, i.accessible ? "ok" : "refused");
  if (i.accessible || c === void 0) return "accessible";
  let g = Se(c, i.error), f = U(i.error), m = f !== void 0 ? null : tg(i.error), S = i.error instanceof TT ? "timeout" : f !== void 0 ? `HTTP ${f}` : m !== null ? Ou(m.code) : i.error instanceof Hu ? "connection error" : "no HTTP status", b = m?.message ?? l(i.error), h = f !== void 0 ? `${f} ` : m !== null ? `${m.code}: ` : void 0, P = Ou(h !== void 0 && b.startsWith(h) ? b.slice(h.length) : b);
  return t(`${y} ${e} ${r}: check failed: ${me[g]} (${c === "credential" ? "a credential error, " : ""}${S}: ${mM(P, le)})`, {
    level: g === "refused" || g === "denied" ? "debug" : "error"
  }), g;
}

async function bTn(e, n, r, d) {
  let s = [];
  for (let c of e) {
    let g = await Promise.all(c.map(r)), f = await Promise.all(c.map(S => n(S, !1))), m = c.find((S, b) => f[b]);
    if (m !== void 0) return m;
    s.push(...c.filter((S, b) => g[b]));
  }
  if (s.length === 0 || Date.now() > d) return;
  let i = await Promise.all(s.map(c => n(c, !0)));
  return s.find((c, g) => i[g]);
}

export { nye, yTn, yQo, Jtt, Qtt, zDe, GDe, _Tn, bTn };
