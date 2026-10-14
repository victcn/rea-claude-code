// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { Jn, l, jt, Ex } from "./chunk-b0z4bv3v.js";

import { un } from "./chunk-y752zmas.js";

import { p } from "./chunk-jkzenvsk.js";

import { K, B, ke, he } from "./chunk-3pqddg8f.js";

import { Rf, Y, se, t } from "./chunk-kawq2919.js";

import { S$, a } from "./chunk-j016gcgm.js";

import { qCo } from "./chunk-8yperama.js";

import { gl } from "./chunk-46phtgr7.js";

import { cG, oI, TU, dmt, TRo, Bsn, ARo, cmt, QPr, $0s, g9e, RRo, Die, ILt, jsn, Afe, Wsn, BVn, F0s, zsn, YR, Wp } from "./chunk-dd98x6x7.js";

import { GH } from "./chunk-wwq0cyp6.js";

import { Bs } from "./chunk-9yajep3y.js";

import { bOe } from "./chunk-rgd61mm3.js";

import { WIe, Sin, R9e, f$ } from "./chunk-q6wab2jw.js";

import { jOr } from "./chunk-w4hwgefc.js";

import { d$ } from "./chunk-sa0qpffh.js";

import { o, oe, u, U, A } from "./chunk-cvcg6n1z.js";

import { Is } from "./chunk-p35rdtee.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { Zf } from "./chunk-9zhz923g.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var gLt = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;

function te(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e);
}

var st = {
  ")": "(",
  "]": "[",
  "}": "{"
};

function tee(e) {
  while (e.length > 0) {
    let n = e.at(-1);
    if (".,;:!?".includes(n)) {
      e = e.slice(0, -1);
      continue;
    }
    let r = st[n];
    if (!r) break;
    let i = 0, c = 0;
    for (let s of e) if (s === r) i++; else if (s === n) c++;
    if (c > i) e = e.slice(0, -1); else break;
  }
  return e;
}

function ICo(e) {
  for (let n of e.matchAll(gLt)) return tee(n[0]);
  return;
}

var ct = "tengu_lively_beaver";

class re {
  reader=null;
  register(e) {
    let n = this.reader;
    return this.reader = e, n;
  }
}

var ie = new re;

function kDs(e) {
  return ie.register(e);
}

function hLt() {
  let e = ie.reader;
  if (!e) return !1;
  try {
    return e(ct, !1) === !0;
  } catch {
    return !1;
  }
}

var Mft = "account_on_hold", yLt = "https://claude.ai/restricted", G = "Your account is on hold and can't use Claude Code. View details or appeal: ";

function OCo(e) {
  return `${G}${e}`;
}

function X2n(e) {
  return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`;
}

var Gt = OCo(yLt);

function MCo(e) {
  if (!hLt() || !e.startsWith(G)) return !1;
  let n = e.slice(G.length);
  return te(n) && QBe(n) === n;
}

var ne = 2048, lt = /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;

function ut(e) {
  try {
    return e === new URL(un().CLAUDE_AI_ORIGIN).origin;
  } catch {
    return !1;
  }
}

function QBe(e) {
  if (typeof e !== "string" || e.length > ne) return yLt;
  let n;
  try {
    n = new URL(e);
  } catch {
    return yLt;
  }
  if (n.protocol !== "https:" || n.username || n.password || n.port || n.hash) return yLt;
  let r = n.hostname;
  return (r === "claude.ai" || r.endsWith(".claude.ai") || r === "anthropic.com" || r.endsWith(".anthropic.com") || ut(n.origin)) && n.href.length <= ne && lt.test(n.href) ? n.href : yLt;
}

var dt = p(() => u({
  error: U([ "invalid_grant", "access_denied" ]),
  error_description: A(Mft),
  error_uri: oe().optional()
}));

function msn(e) {
  if (!hLt()) return null;
  let n = e;
  if (typeof n === "string") {
    if (!n.includes(Mft)) return null;
    try {
      n = Y(n);
    } catch {
      return null;
    }
  }
  let r = dt().safeParse(n);
  return r.success ? {
    url: QBe(r.data.error_uri)
  } : null;
}

class mfe extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError";
  }
}

class B9 extends Error {
  error;
  errorDescription;
  errorUri;
  displayMessage;
  constructor(e, n, r) {
    super("OAuth authorization was denied or failed");
    this.error = e;
    this.errorDescription = n;
    this.errorUri = r;
    this.name = "OAuthCallbackError", this.displayMessage = n ? `${e}: ${n}` : e;
  }
}

function J2n(e) {
  return e instanceof B9 && e.errorDescription === Mft;
}

var TDs = "urn:ietf:params:oauth:grant-type:jwt-bearer", ADs = "refresh_token", fPr = "/v1/oauth/token", Hft = "oauth-2025-04-20", CDs = "oidc-federation-2026-04-01", RDs = 120, Dft = 30, xDs = 5, ae = 1048576;

function mPr(e) {
  if (!e) return;
  let n;
  try {
    n = new URL(e);
  } catch (i) {
    throw new Ru(`Invalid token endpoint base URL "${e}": ${i}`);
  }
  if (n.protocol === "https:") return;
  let r = n.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (n.protocol === "http:" && (r === "localhost" || r === "127.0.0.1" || r === "::1")) return;
  throw new Ru(`Refusing to send credential over non-https token endpoint "${e}"`);
}

async function gPr(e, n) {
  let r = await ft(e), i;
  try {
    i = JSON.parse(r);
  } catch {
    throw new Ru(`Token endpoint returned non-JSON response (status ${e.status})`, e.status, Pie(r), n);
  }
  if (!i.access_token) throw new Ru(`Token endpoint response missing access_token: ${JSON.stringify(Pie(i))}`, e.status, Pie(i), n);
  if (i.token_type && i.token_type.toLowerCase() !== "bearer") throw new Ru(`Token endpoint response: unsupported token_type "${i.token_type}" (want Bearer)`, e.status, Pie(i), n);
  return i;
}

var M = 2e3, _t = new Set([ "error", "error_description", "error_uri" ]);

function Pie(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let n;
    try {
      n = JSON.parse(e);
    } catch {
      if (e.length <= M) return e;
      return e.slice(0, M) + `... <${e.length - M} more chars>`;
    }
    return JSON.stringify(Pie(n));
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let n = {};
    for (let [r, i] of Object.entries(e)) if (_t.has(r)) n[r] = i;
    return n;
  }
  return null;
}

async function gsn(e, n = r => console.warn(`anthropic-sdk: ${r}`)) {
  if (typeof process > "u") return;
  let {fs: r} = await import("./chunk-ak4abj51.js"), i = e, c;
  try {
    i = await r.promises.realpath(e), c = await r.promises.stat(i);
  } catch {
    return;
  }
  let s = c.mode & 511;
  if (s & 18) throw new Ru(`Credentials file at ${i} is group/world-writable (mode 0o${s.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${i}\`.`);
  if (s & 36) throw new Ru(`Credentials file at ${i} is group/world-readable (mode 0o${s.toString(8)}); run \`chmod 600 ${i}\` before retrying.`);
  if (typeof process.getuid === "function" && c.uid !== process.getuid()) n(`credentials file at ${i} is owned by uid ${c.uid} (current process uid ${process.getuid()}); verify this is intentional.`);
}

async function ZBe(e, n) {
  let {fs: r, path: i} = await import("./chunk-ak4abj51.js"), c = i.dirname(e);
  await r.promises.mkdir(c, {
    recursive: !0,
    mode: 448
  });
  let s = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let d = await r.promises.open(s, "w", 384);
    try {
      await d.writeFile(JSON.stringify(n, null, 2)), await d.sync();
    } finally {
      await d.close();
    }
    await r.promises.rename(s, e);
  } catch (d) {
    throw await r.promises.unlink(s).catch(() => {}), d;
  }
  try {
    let d = await r.promises.open(c, "r");
    try {
      await d.sync();
    } finally {
      await d.close();
    }
  } catch {}
}

async function ft(e) {
  if (!e.body) return "";
  let n = e.body.getReader(), r = [], i = 0;
  for (;;) {
    let {done: s, value: d} = await n.read();
    if (s) break;
    if (i + d.length > ae) {
      let f = ae - i;
      if (f > 0) r.push(d.subarray(0, f));
      await n.cancel();
      break;
    }
    r.push(d), i += d.length;
  }
  let c;
  if (r.length === 1) c = r[0]; else {
    c = new Uint8Array(r.reduce((d, f) => d + f.length, 0));
    let s = 0;
    for (let d of r) c.set(d, s), s += d.length;
  }
  return new TextDecoder("utf-8").decode(c);
}

class Ru extends Jn {
  constructor(e, n = null, r = null, i = null) {
    super(e);
    this.statusCode = n, this.body = r, this.requestId = i;
  }
}

import { lstatSync as pt, readFileSync as Et, realpathSync as Ct } from "fs";

import { basename as ce, dirname as Ot, isAbsolute as de, join as g, parse as ht, relative as gt, resolve as y, sep as _e } from "path";

function Z8e(e) {
  if (!(e instanceof Ru) || e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403) return null;
  return msn(e.body);
}

function _Lt(e) {
  return e instanceof Ru && e.statusCode === null && e.message.includes("has expired and no refresh is available");
}

var At = [ "ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID" ];

class fe {
  precedenceSource={
    filled: !1
  };
  authType={
    filled: !1
  };
  profileBaseUrl={
    filled: !1
  };
  accountInfo={
    filled: !1
  };
  federationIdentity={
    filled: !1
  };
  profileStoreDenyPaths={
    filled: !1
  };
  settingsBearerRejected=!1;
  primedFiles=void 0;
}

var m = new K(() => new fe);

function _E() {
  let e = m.of(B().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let n = Tt();
  return e.precedenceSource = {
    filled: !0,
    value: n
  }, n;
}

function Tt() {
  let e = wU(), n = Ee();
  if (n) {
    if (e === null) return null;
    let r = j(e, n);
    return r === "oidc_federation" || r === "user_oauth" ? "profile-explicit" : null;
  }
  if (Ce()) return "env-quad";
  if (e !== null) {
    let r = j(e, vIe(e));
    if (r === "oidc_federation" || r === "user_oauth") return "profile-implicit";
  }
  return null;
}

function Q2n() {
  let e = m.of(B().host);
  e.precedenceSource = {
    filled: !1
  }, e.authType = {
    filled: !1
  }, e.profileBaseUrl = {
    filled: !1
  }, e.federationIdentity = {
    filled: !1
  }, e.profileStoreDenyPaths = {
    filled: !1
  }, e.settingsBearerRejected = !1, hsn();
}

function hsn() {
  m.of(B().host).accountInfo = {
    filled: !1
  };
}

function Z2n() {
  return _E() !== null;
}

function Lft() {
  let e = m.of(B().host);
  if (e.authType.filled) return e.authType.value;
  let n = St();
  return e.authType = {
    filled: !0,
    value: n
  }, n;
}

function St() {
  let e = _E();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let n = wU();
  if (n === null) return null;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : vIe(n), i = j(n, r);
  return i === "oidc_federation" || i === "user_oauth" ? i : null;
}

function e9e() {
  return _E() === "profile-implicit" && Lft() === "user_oauth";
}

function e1e() {
  let e = m.of(B().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let n = Rt();
  return e.accountInfo = {
    filled: !0,
    value: n
  }, n;
}

function Rt() {
  let e = _E();
  if (e === null || e === "env-quad") return;
  let n = wU();
  if (n === null) return;
  let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : vIe(n), i = L(V(n, r));
  if (i === null) return;
  try {
    let c = JSON.parse(i);
    return {
      organizationUuid: c.organization_uuid,
      organizationName: c.organization_name,
      accountEmail: c.account_email,
      workspaceId: c.workspace_id,
      workspaceName: c.workspace_name
    };
  } catch {
    return;
  }
}

function ysn() {
  let e = _E();
  if (e === "env-quad") {
    let n = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad \xb7 org ${W(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} \xb7 rule ${W(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${n ? ` \xb7 ws ${n.startsWith("wrkspc_") ? W(n) : n}` : ""}`;
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let n = wU(), r = n === null ? "default" : e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : vIe(n);
    return `credentials-file \xb7 ${Lft() ?? "unknown"} \xb7 profile ${r}`;
  }
  return "inactive";
}

function W(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`;
}

function Nft() {
  let e = m.of(B().host);
  if (e.profileBaseUrl.filled) return e.profileBaseUrl.value;
  let n = mt();
  return e.profileBaseUrl = {
    filled: !0,
    value: n
  }, n;
}

function mt() {
  let e = _E();
  if (e === null || e === "env-quad") return;
  let n = wU();
  if (n === null) return;
  try {
    let r = e === "profile-explicit" ? process.env.ANTHROPIC_PROFILE?.trim() ?? "default" : vIe(n), i = L(g(n, "configs", `${r}.json`));
    if (i === null) return;
    let c = JSON.parse(i);
    return typeof c.base_url === "string" && c.base_url.trim() ? c.base_url.trim() : void 0;
  } catch {
    return;
  }
}

var cn = p(() => u({
  organization_id: o().optional(),
  workspace_id: o().optional(),
  authentication: u({
    type: o().optional(),
    federation_rule_id: o().optional()
  }).loose().optional()
}).loose());

function PDs() {
  return m.of(B().host).settingsBearerRejected;
}

function IDs(e) {
  m.of(B().host).settingsBearerRejected = e;
}

function eVn() {
  let e = m.of(B().host);
  if (e.profileStoreDenyPaths.filled) return e.profileStoreDenyPaths.value;
  let {value: n, complete: r} = Dt();
  if (r) e.profileStoreDenyPaths = {
    filled: !0,
    value: n
  };
  return n;
}

function Dt() {
  let e = wU();
  if (e === null) return {
    value: null,
    complete: !0
  };
  let n = {
    dirs: [ e ],
    files: []
  };
  try {
    let r = y(e);
    n = le(r) ? {
      dirs: [ g(r, "configs"), g(r, "credentials") ],
      files: [ g(r, "active_config") ]
    } : {
      dirs: [ r ],
      files: []
    };
    let c = HCo(e), s = V(e, c);
    if (typeof s !== "string" || !s.trim()) return {
      value: n,
      complete: !0
    };
    let d = D(de(s) ? [ y(s) ] : [ y(r, s), y(s) ]).filter(f => !n.dirs.some(h => f === h || f.startsWith(h + _e)) && !n.files.includes(f) && !le(f));
    return {
      value: {
        dirs: n.dirs,
        files: [ ...n.files, ...d.filter(f => !It(f)) ]
      },
      complete: !0
    };
  } catch (r) {
    return t(`WIF profile store: could not resolve the active profile's credentials path (${l(r)}); denying the store root only`, {
      level: "warn"
    }), {
      value: n,
      complete: !1
    };
  }
}

function vIe(e) {
  return L(g(e, "active_config"))?.trim() || "default";
}

function HCo(e) {
  return process.env.ANTHROPIC_PROFILE?.trim() || vIe(e);
}

function j(e, n) {
  let r = L(g(e, "configs", `${n}.json`));
  if (r === null) return null;
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    return null;
  }
  let c = i?.authentication?.type ?? null;
  if (c === "user_oauth") {
    if (!L(V(e, n, i))?.trim()) return null;
  }
  return c;
}

function V(e, n, r) {
  if (r === void 0) {
    let i = L(g(e, "configs", `${n}.json`));
    if (i !== null) try {
      r = JSON.parse(i);
    } catch {}
  }
  return r?.authentication?.credentials_path ?? g(e, "credentials", `${n}.json`);
}

function wU() {
  return pe()?.dir ?? null;
}

function pe() {
  if (he()) return null;
  let e = process.env, n = e.ANTHROPIC_CONFIG_DIR?.trim();
  if (n) return {
    dir: n,
    space: "userNamed"
  };
  let r = e.XDG_CONFIG_HOME?.trim();
  if (r) return {
    dir: g(r, "anthropic"),
    space: "home"
  };
  let i = e.HOME?.trim();
  return i ? {
    dir: g(i, ".config", "anthropic"),
    space: "home"
  } : null;
}

function Ee() {
  return process.env.ANTHROPIC_PROFILE?.trim();
}

function Ce() {
  return At.every(e => process.env[e]?.trim());
}

function le(e) {
  let n = ue(e);
  if (n === ht(n).root) return !0;
  let r = gt(n, ue(se().cwd())), i = r.split(_e)[0];
  return r === "" || i !== ".." && !de(r);
}

function ue(e) {
  let n = y(e), r = "";
  for (;;) try {
    n = g(Ct.native(n), r);
    break;
  } catch {
    let i = Ot(n);
    if (i === n) {
      n = g(n, r);
      break;
    }
    r = r ? g(ce(n), r) : ce(n), n = i;
  }
  return n.toLowerCase();
}

function It(e) {
  try {
    return pt(e).isDirectory();
  } catch {
    return !1;
  }
}

function L(e) {
  let n = m.of(B().host).primedFiles;
  if (n !== void 0 && n.has(e)) return n.get(e) ?? null;
  try {
    return Et(e, "utf-8");
  } catch (r) {
    if (jt(r)) return null;
    throw r;
  }
}

async function ODs(e) {
  let n = m.of(B().host), r = pe();
  if (n.precedenceSource.filled || r === null) return;
  let {dir: i, space: c} = r, s = new Map, d = async E => {
    let S;
    try {
      S = await e.hostFiles.readText(Rf[c](E));
    } catch (P) {
      return t(`WIF profile read-ahead: the storage backend threw reading ${E}: ${l(P)}`, {
        level: "warn"
      }), null;
    }
    if (S.ok) {
      let P = S.value.found ? S.value.value : null;
      return s.set(E, P), P;
    }
    if (Ex(Zf(S.error))) s.set(E, null);
    return null;
  }, f = Ee();
  if (!f && Ce()) return;
  let h = f || (await d(g(i, "active_config")))?.trim() || "default";
  await d(g(i, "configs", `${h}.json`)), n.primedFiles = s;
  try {
    _E(), Lft();
  } catch (E) {
    t(`WIF profile read-ahead: left to the first reader: ${l(E)}`);
  } finally {
    n.primedFiles = void 0;
  }
}

var $ft = [ "CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE", "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER" ];

function MDs(e) {
  return {
    ...e.subscriptionType && {
      CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType
    },
    ...e.rateLimitTier && {
      CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier
    }
  };
}

function DCo() {
  if (a.CLAUDE_CODE_SESSION_KIND !== "bg") return {
    subscriptionType: void 0,
    rateLimitTier: void 0
  };
  return {
    subscriptionType: a.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: a.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0
  };
}

import { homedir as De } from "os";

import { dirname as z, posix as b } from "path";

import { resolve as Oe } from "path";

function t9e() {
  if (he()) return null;
  let e = a.CLAUDE_CODE_FEDERATION_CACHE_DIR;
  if (e) return Oe(e);
  let n = wU();
  return n === null ? null : Oe(n, "credentials", "federation");
}

var _sn = "ssh-placeholder";

function HDs(e) {
  let {CLAUDE_CODE_OAUTH_TOKEN: n, ANTHROPIC_API_KEY: r} = e;
  return !!e.ANTHROPIC_UNIX_SOCKET && !e.ANTHROPIC_AUTH_TOKEN && (n === "ssh-placeholder" && !r || r === "ssh-placeholder" && !n);
}

function tVn() {
  return Wp().map(e => e.sandbox?.bwrapPath).find(e => e != null);
}

function DDs() {
  return Wp().map(e => e.sandbox?.socatPath).find(e => e != null);
}

function H() {
  let e = tVn();
  if (e) return S$(e);
  return S$("bwrap");
}

var Pt = /[ \t\n\v\f\r'"]/, LCo = [ "YARN_HTTP_PROXY", "YARN_HTTPS_PROXY", "npm_config_proxy", "npm_config_https_proxy", "npm_config_noproxy", "GLOBAL_AGENT_HTTP_PROXY", "GLOBAL_AGENT_HTTPS_PROXY", "GLOBAL_AGENT_NO_PROXY", "DOCKER_HTTP_PROXY", "DOCKER_HTTPS_PROXY", "ELECTRON_GET_USE_PROXY", "CLOUDSDK_PROXY_TYPE", "CLOUDSDK_PROXY_ADDRESS", "CLOUDSDK_PROXY_PORT", "CLOUDSDK_PROXY_USERNAME", "CLOUDSDK_PROXY_PASSWORD", "FSSPEC_GCS", "JAVA_TOOL_OPTIONS" ];

function Ae(e) {
  let n = e.HTTP_PROXY || e.http_proxy || e.CLAUDE_CODE_HTTP_PROXY, r = e.HTTPS_PROXY || e.https_proxy || e.CLAUDE_CODE_HTTPS_PROXY, i = jOr(e);
  if (!n && !r) return {};
  let c = ge(n), s = ge(r);
  if (!s.host) s = c;
  let d = {}, f = (h, E) => {
    if (E && e[h] === void 0) d[h] = E;
  };
  if (f("YARN_HTTP_PROXY", n), f("YARN_HTTPS_PROXY", r), f("npm_config_proxy", n), 
  f("npm_config_https_proxy", r), f("npm_config_noproxy", i), f("GLOBAL_AGENT_HTTP_PROXY", n), 
  f("GLOBAL_AGENT_HTTPS_PROXY", r), f("GLOBAL_AGENT_NO_PROXY", i), f("ELECTRON_GET_USE_PROXY", "1"), 
  f("DOCKER_HTTP_PROXY", n), f("DOCKER_HTTPS_PROXY", r), s.host) f("CLOUDSDK_PROXY_TYPE", "http"), 
  f("CLOUDSDK_PROXY_ADDRESS", s.host), f("CLOUDSDK_PROXY_PORT", s.port), f("CLOUDSDK_PROXY_USERNAME", s.user), 
  f("CLOUDSDK_PROXY_PASSWORD", s.pass);
  if (f("FSSPEC_GCS", '{"session_kwargs": {"trust_env": true}}'), s.host) {
    let h = e.JAVA_TOOL_OPTIONS;
    if (!h?.includes("-Dhttps.proxyHost=")) {
      let E = Lt(c, s, i);
      d.JAVA_TOOL_OPTIONS = h ? `${h} ${E}` : E;
    }
  }
  return d;
}

function ge(e) {
  if (!e) return {
    host: "",
    port: "",
    user: "",
    pass: ""
  };
  try {
    let n = new URL(e);
    if (!n.hostname) return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
    return {
      host: n.hostname.startsWith("[") && n.hostname.endsWith("]") ? n.hostname.slice(1, -1) : n.hostname,
      port: n.port || (n.protocol === "https:" ? "443" : "80"),
      user: decodeURIComponent(n.username),
      pass: decodeURIComponent(n.password)
    };
  } catch {
    return {
      host: "",
      port: "",
      user: "",
      pass: ""
    };
  }
}

function Lt(e, n, r) {
  let i = [], c = (s, d) => {
    if (d && !Pt.test(d)) i.push(`-D${s}=${d}`);
  };
  if (c("http.proxyHost", e.host), c("http.proxyPort", e.port), c("https.proxyHost", n.host), 
  c("https.proxyPort", n.port), c("http.proxyUser", e.user), c("http.proxyPassword", e.pass), 
  c("https.proxyUser", n.user), c("https.proxyPassword", n.pass), r) c("http.nonProxyHosts", Ut(r));
  return i.push("-Djdk.http.auth.tunneling.disabledSchemes="), i.push("-Djdk.http.auth.proxying.disabledSchemes="), 
  i.join(" ");
}

function Ut(e) {
  return e.split(/[,\s]+/).map(n => n.trim()).filter(Boolean).flatMap(n => {
    if (n.startsWith(".")) return [ `*${n}` ];
    return Nt(n) ?? [ n ];
  }).join("|");
}

function Nt(e) {
  let n = e.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!n) return;
  let r = [ Number(n[1]), Number(n[2]), Number(n[3]), Number(n[4]) ], i = Number(n[5]);
  if (r.some(E => E > 255) || i < 8 || i > 24) return [ e ];
  let c = Math.floor(i / 8), s = i % 8;
  if (s === 0) return [ `${r.slice(0, c).join(".")}.*` ];
  let d = 2 ** (8 - s);
  if (d > 16) return [ e ];
  let f = r[c] - r[c] % d, h = [];
  for (let E = f; E < f + d; E++) h.push(`${[ ...r.slice(0, c), E ].join(".")}.*`);
  return h;
}

var n9e = [ "CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SOURCE", "CLAUDE_BG_ISOLATION", "CLAUDE_BG_BACKEND", "CLAUDE_CODE_SESSION_NAME", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN", "CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS", "CLAUDE_CODE_RESUME_PROMPT", "CLAUDE_CODE_RESUME_REASON", "CLAUDE_CODE_RESUME_SOURCE_ALIVE", "CLAUDE_BG_POST_CLEAR_RESPAWN", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_BG_MEMORY_TOGGLED_OFF", "CLAUDE_BG_AUTO_MEMORY_OFF", "CLAUDE_BG_WORKSPACE_TRUSTED", "CLAUDE_BG_CARRIED_PROMPTS_SHA256", "CLAUDE_CODE_RELAUNCH_HOME_TRUST", ...$ft ];

class Ie {
  scrubEnabledLatched=void 0;
  scrubSandboxAvailableLatched=void 0;
  scrubPathsLatched=void 0;
  scriptCallCounts=new Map;
  scriptCapsLatched=void 0;
  setScrubEnabledLatched(e) {
    this.scrubEnabledLatched = e;
  }
  setScrubSandboxAvailableLatched(e) {
    this.scrubSandboxAvailableLatched = e;
  }
  setScrubPathsLatched(e) {
    this.scrubPathsLatched = e;
  }
  setScriptCapsLatched(e) {
    this.scriptCapsLatched = e;
  }
  reset() {
    this.scrubEnabledLatched = void 0, this.scrubSandboxAvailableLatched = void 0, this.scrubPathsLatched = void 0, 
    this.scriptCallCounts.clear(), this.scriptCapsLatched = void 0;
  }
}

var T = Ue(new Ie, e => {
  e.reset(), $0s();
});

class Pe {
  getAgentProxyEnv=void 0;
  getGhStandinDir=void 0;
  settingsEnvForChildren={};
  hipaaTierNoticeGiven=!1;
}

var I = new K(() => new Pe);

function xc() {
  let e = T.scrubEnabledLatched;
  if (e !== void 0) return e;
  let n = Le(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB);
  return T.setScrubEnabledLatched(n), n;
}

function hPr() {
  if (xc()) return !0;
  if (ys(process.env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}

var J = [ ".env", ".env.local", ".env.development", ".env.development.local", ".env.test", ".env.test.local", ".env.production", ".env.production.local" ], Ne = [ "home", "root", "tmp", "var", "opt", "run", "mnt" ].map(e => `/${e}`), Te = ".";

function ye(e) {
  let n = new Set;
  for (let r of [ oI, Bs, cG ]) try {
    n.add(`${f$(e, r)}/.claude`);
  } catch {}
  return [ ...n ];
}

function j9() {
  if (T.scrubSandboxAvailableLatched !== void 0) return T.scrubSandboxAvailableLatched;
  return H() !== null;
}

async function NCo() {
  if (QPr(), !xc()) return;
  let e = De(), n = ke(), r = process.env.GITHUB_ENV ? z(process.env.GITHUB_ENV) : void 0, i = process.env.GITHUB_WORKSPACE;
  T.setScrubSandboxAvailableLatched(H() !== null);
  let c = (process.env.PATH ?? "").split(":").map(E => E ? b.normalize(E).replace(/\/+$/, "") : E).filter(E => E && Ne.some(S => E.startsWith(`${S}/`)));
  if (T.setScrubPathsLatched({
    home: e,
    originalCwd: n,
    claudeConfigDir: process.env.CLAUDE_CONFIG_DIR,
    federationCacheDir: t9e() ?? void 0,
    canonicalClaudeDirs: ye(n),
    runnerFileCommandsDir: r,
    workspace: i,
    GITHUB_ACTION_PATH: process.env.GITHUB_ACTION_PATH,
    GITHUB_EVENT_PATH: process.env.GITHUB_EVENT_PATH,
    pathDirs: c
  }), be(), H() === null) {
    let E = tVn();
    throw Error(E ? `sandbox.bwrapPath is set to ${E} but it is not an executable file. Fix the path in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation).` : "bubblewrap is required for subprocess env scrubbing and isolation. Install with: sudo apt-get install -y bubblewrap, set sandbox.bwrapPath in managed settings, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to disable (loses subprocess isolation).");
  }
  if (he()) return;
  let {appendFile: s, mkdir: d, open: f} = await import("fs/promises");
  try {
    bOe();
  } catch {}
  for (let E of [ `${e}/.gitconfig`, `${e}/.bash_profile`, `${e}/.bashrc`, `${e}/.bash_aliases`, `${e}/.profile`, `${e}/.zshrc`, `${e}/.bunfig.toml`, `${e}/.netrc`, `${e}/.npmrc`, `${e}/.yarnrc`, `${e}/.yarnrc.yml`, `${n}/.npmrc`, `${n}/.yarnrc`, `${n}/.yarnrc.yml`, `${n}/bunfig.toml`, `${n}/package.json`, `${n}/.gitmodules`, `${n}/package-lock.json`, `${n}/yarn.lock`, `${n}/pnpm-lock.yaml`, "/tmp/inline-comments-buffer.jsonl", ...J.map(S => `${n}/${S}`) ]) try {
    await d(z(E), {
      recursive: !0
    }), await (await f(E, "a")).close();
  } catch {}
  for (let E of [ `${e}/.config/gh`, `${e}/.config/glab-cli`, `${e}/.config/git`, `${e}/.config/pip`, `${e}/.pip`, `${n}/.claude/commands`, `${n}/.claude/agents`, `${n}/node_modules/.bin`, ...r ? [ r ] : [], ...c ]) try {
    await d(E, {
      recursive: !0
    });
  } catch {}
  if (i && b.resolve(i) !== b.resolve(n)) {
    await d(`${i}/.git/hooks`).catch(() => {}), await d(`${i}/.git/glab-cli`).catch(() => {}), 
    await d(`${i}/.git/modules`).catch(() => {}), await d(`${i}/.git/worktrees`).catch(() => {}), 
    await d(`${i}/.git/info`).catch(() => {}), await d(`${i}/.github`, {
      recursive: !0
    }).catch(() => {});
    for (let E of [ `${i}/.git/config`, `${i}/.git/config.worktree`, `${i}/.git/info/exclude`, `${i}/.gitmodules` ]) try {
      await (await f(E, "a")).close();
    } catch {}
    try {
      let E = await f(`${i}/.git/commondir`, "wx");
      await E.writeFile(Te), await E.close();
    } catch {}
  }
  let h = [ "bunfig.toml", "package.json", ".npmrc", ".yarnrc", ".yarnrc.yml", ".gitmodules", "package-lock.json", "yarn.lock", "pnpm-lock.yaml", ...J ];
  await d(`${n}/.git/info`).catch(() => {}), await d(`${n}/.git/modules`).catch(() => {}), 
  await d(`${n}/.git/worktrees`).catch(() => {}), await d(`${n}/.git/glab-cli`).catch(() => {});
  try {
    await (await f(`${n}/.git/config.worktree`, "a")).close();
  } catch {}
  try {
    let E = await f(`${n}/.git/commondir`, "wx");
    await E.writeFile(Te), await E.close();
  } catch {}
  try {
    await s(`${n}/.git/info/exclude`, `\n# claude-code scrub-mode stubs\n${h.map(E => `/${E}`).join(`\n`)}\n`);
  } catch {}
}

function be() {
  if (T.scriptCapsLatched !== void 0) return;
  let e = process.env.CLAUDE_CODE_SCRIPT_CAPS;
  if (!e) {
    T.setScriptCapsLatched(null);
    return;
  }
  try {
    let n = Y(e);
    if (n && typeof n === "object" && !Array.isArray(n)) {
      let r = Is(n, (i, c) => typeof i === "number" && Number.isFinite(i) && c.trim().length > 0);
      T.setScriptCapsLatched(Object.keys(r).length > 0 ? r : null);
    } else T.setScriptCapsLatched(null);
  } catch {
    T.setScriptCapsLatched(null);
  }
}

function $Co(e) {
  if (!xc()) return;
  if (be(), !T.scriptCapsLatched) return;
  let {scriptCapsLatched: n, scriptCallCounts: r} = T;
  for (let [i, c] of Object.entries(n)) {
    let s = e.split(i).length - 1;
    if (s > 0) {
      let d = (r.get(i) ?? 0) + s;
      if (r.set(i, d), d > c) throw Error(`Script call limit exceeded: ${i} has been called ${d} times (cap: ${c}). This limit prevents data exfiltration via repeated write operations in untrusted-input workflows.`);
    }
  }
}

function P8s(e) {
  I.of(B().host).getAgentProxyEnv = e;
}

function I8s(e) {
  I.of(B().host).getGhStandinDir = e;
}

function r9e() {
  return I.of(B().host).getAgentProxyEnv?.() ?? {};
}

function FCo() {
  return I.of(B().host).getGhStandinDir?.();
}

function yPr(e) {
  I.of(B().host).settingsEnvForChildren = e;
}

function UCo() {
  let {settingsEnvForChildren: e} = I.of(B().host);
  return e[t1e(e, "PATH")];
}

function bLt(e) {
  let {settingsEnvForChildren: n} = I.of(B().host);
  return n[t1e(n, e)] ?? process.env[e];
}

var yt = "3";

function _Pr() {
  return a.CLAUDE_BG_BACKEND === "daemon" && a.FORCE_COLOR === yt;
}

function bPr() {
  if (!_Pr()) return !1;
  let {settingsEnvForChildren: e} = I.of(B().host);
  return !Object.hasOwn(e, t1e(e, "FORCE_COLOR"));
}

function t1e(e, n) {
  if (O() !== "windows" || Object.hasOwn(e, n)) return n;
  let r = n.toUpperCase();
  return Object.keys(e).find(i => i.toUpperCase() === r) ?? n;
}

function SPr(e) {
  return e.startsWith("CLAUDE_CODE_ARTIFACT") && e.endsWith("_BASE_URL");
}

function wPr(e) {
  let n = e.toUpperCase();
  return !ILt(e) && Afe(e) && !F0s.has(n) && !BVn(n);
}

var bt = new Set(Sin.map(e => e.toUpperCase()));

function vPr() {
  if (!SLt()) return [];
  let e = I.of(B().host);
  if (!e.hipaaTierNoticeGiven) e.hipaaTierNoticeGiven = !0, t("HIPAA: withholding this CLI's Anthropic credentials from child processes and config ${VAR} expansion");
  return RRo;
}

function SLt() {
  return gl("hipaa");
}

var Se = new Set(RRo.map(e => e.toUpperCase()));

function n1e(e) {
  let n = e.replace(/^INPUT_/, "");
  return SPr(n) || WIe(n) || n.startsWith("OTEL_") || n === "CLAUDE_CODE_OTEL_DIAG_STDERR";
}

function EPr() {
  let e = process.env, n = i => e.ANTHROPIC_UNIX_SOCKET !== void 0 && (i === "CLAUDE_CODE_OAUTH_TOKEN" || i === "ANTHROPIC_API_KEY") && e[i] === _sn, r = i => !Object.keys(e).some(c => c !== i && c.toUpperCase() === i);
  return [ ...Sin.filter(i => !n(i)), ...Object.keys(e).filter(i => n1e(i.toUpperCase())), ...R9e(e), ...qCo(), ...vPr().filter(i => !(n(i) && r(i))), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_SKILL_ATTRIBUTION", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_MCP_SERVE_SETTINGS", "CLAUDE_CODE_REMOTE_TOOLS_FORWARD", ...n9e ];
}

var vt = new Set([ "BUN_GC_TIMER_INTERVAL", "BUN_GC_TIMER_DISABLE", "BUN_GC_RUNS_UNTIL_SKIP_RELEASE_ACCESS", "BUN_IDLE_GC_SECONDS" ]), wt = new Set([ "MIMALLOC_PURGE_HOLES_MIN_INTERVAL" ]);

function Re(e) {
  let n = e.toUpperCase();
  return n.startsWith("BUN_JSC_") || vt.has(n) || wt.has(n);
}

function gs() {
  let e = I.of(B().host), n = e.getAgentProxyEnv?.() ?? {}, r = Object.keys(n).length > 0, {settingsEnvForChildren: i} = e, c = Object.keys(i).length > 0, s = process.env;
  if (c) {
    s = {
      ...process.env
    };
    for (let [_, R] of Object.entries(i)) s[t1e(s, _)] = R;
  }
  let d = a.CLAUDE_CODE_REMOTE === !0, f = d ? Ae(r ? {
    ...s,
    ...n
  } : s) : {}, h = Object.keys(f).length > 0, E = hPr(), S = Object.keys(process.env).some(_ => bt.has(_.toUpperCase())) || Object.keys(process.env).some(_ => n1e(_.toUpperCase())) || process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE !== void 0 || process.env.CLAUDE_CODE_RATE_LIMIT_TIER !== void 0, P = R9e(process.env), ve = qCo(), q = SLt() && Object.keys(process.env).some(_ => Se.has(Die(_))), Q = !1;
  Q = n9e.some(_ => process.env[_] !== void 0);
  let we = Object.keys(process.env).some(_ => /^(INPUT_)?(OTEL_|CLAUDE_CODE_OTEL_DIAG_STDERR$)/i.test(_)), xe = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION !== void 0 || a.CLAUDE_CODE_SKILL_ATTRIBUTION !== void 0, He = a.CLAUDE_CODE_QUESTION_EXTENDED || a.CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS, $e = a.CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES, Fe = a.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH, Be = a.CLAUDE_CODE_SDK_READS_SESSION_STATE, Ge = TU(), Me = a.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED, We = Object.keys(s).some(_ => _.toUpperCase() === "CLAUDE_CODE_REMOTE_TOOLS_FORWARD"), je = a.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT || a.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT || a.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS, Ye = a.CLAUDE_CODE_CONFIG_PROBE, Ke = a.CLAUDE_CODE_MCP_STARTUP_WAIT_MS !== void 0, Ve = a.CLAUDE_CODE_REMOTE_MCP_CONFIG, Xe = a.CLAUDE_CODE_MCP_APPS_HOST, ze = a.CLAUDE_CODE_SLEEP_COMPACT || a.CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS !== void 0, Je = a.CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS !== void 0, qe = a.CLAUDE_CODE_ARTIFACT_SHARE !== void 0, Qe = a.CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST, Ze = Object.keys(s).some(_ => _.toUpperCase() === "CLAUDE_CODE_ARTIFACT_VERSIONS"), et = a.CLAUDE_CHROME_TAB_GROUP_KEY !== void 0, tt = a.CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD, nt = GH.CLAUDE_CODE_MCP_SERVE_SETTINGS !== void 0, k = !1;
  k = Object.keys(s).some(me);
  let Z = d && Object.keys(s).some(Re);
  if (!r && !h && !E && !Q && !S && !P.length && !ve.length && !q && !we && !c && !xe && !He && !$e && !Fe && !Be && !Ge && !Me && !We && !je && !Ye && !Ke && !Ve && !Xe && !ze && !Je && !qe && !Qe && !Ze && !et && !tt && !nt && !k && !Z) return process.env;
  let ee = {
    ...n,
    ...f
  }, C = {
    ...s
  };
  for (let _ of Object.keys(ee)) {
    let R = t1e(C, _);
    if (R !== _) delete C[R];
  }
  Object.assign(C, ee);
  let rt = new Set([ ...EPr(), "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_QUESTION_EXTENDED", "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS", "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_READS_SESSION_STATE", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_CONFIG_PROBE", "CLAUDE_CODE_MCP_STARTUP_WAIT_MS", "CLAUDE_CODE_REMOTE_MCP_CONFIG", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_SLEEP_COMPACT", "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS", "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS", "CLAUDE_CODE_ARTIFACT_SHARE", "CLAUDE_CODE_ARTIFACT_VERSIONS", "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST", "CLAUDE_CHROME_TAB_GROUP_KEY" ].map(_ => _.toUpperCase()));
  for (let _ of Object.keys(C)) if (rt.has(_.toUpperCase()) || n1e(_.toUpperCase()) || q && _.includes("-") && Se.has(Die(_))) delete C[_];
  for (let _ of n9e) delete C[_];
  if (bPr()) delete C[t1e(C, "FORCE_COLOR")];
  for (let _ of Object.keys(C)) if (_.startsWith("OTEL_")) delete C[_];
  if (delete C.CLAUDE_CODE_OTEL_DIAG_STDERR, delete C.CLAUDE_CODE_PLUGIN_ATTRIBUTION, 
  delete C.CLAUDE_CODE_SKILL_ATTRIBUTION, k) {
    for (let _ of Object.keys(C)) if (me(_)) delete C[_];
  }
  if (Z) {
    for (let _ of Object.keys(C)) if (Re(_)) delete C[_];
  }
  if (!E) return C;
  let ot = xt(), it = cmt().length > 0;
  for (let [_, R] of Object.entries(C)) {
    if (R === d$ && Object.hasOwn(n, _)) continue;
    if ((_ === "CLAUDE_CODE_OAUTH_TOKEN" || _ === "ANTHROPIC_API_KEY") && R === _sn && C.ANTHROPIC_UNIX_SOCKET !== void 0) continue;
    if (ot.has(Die(_)) || Wsn.test(_) || zsn(_) || it && wPr(_)) {
      delete C[_];
      continue;
    }
    if (R === void 0 || ILt(_)) continue;
    let N = typeof R === "string" ? R : String(R);
    if (dmt(_)) {
      let w = Bsn(_, N);
      if (w.value !== N) C[_] = w.value;
      if (w.cut) {
        let x = ARo(_, w.value);
        if (x !== void 0 && !TRo(C, x.name)) C[x.name] = x.value;
      }
      continue;
    }
    let v = jsn(_, N);
    if (v === void 0) {
      if (YR(N)) delete C[_];
    } else if (v !== N) if (v === "") delete C[_]; else C[_] = v;
  }
  return C;
}

function bsn() {
  let e = process.env.CLAUDE_CODE_MCP_ALLOWLIST_ENV;
  if (Le(e)) return !0;
  if (ys(e)) return !1;
  return process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent";
}

function BCo() {
  let e = T.scrubPathsLatched, n = e?.home ?? De(), r = e?.originalCwd ?? ke(), i = e?.GITHUB_ACTION_PATH ?? process.env.GITHUB_ACTION_PATH, c = e?.runnerFileCommandsDir ?? (process.env.GITHUB_ENV ? z(process.env.GITHUB_ENV) : void 0), s = e?.workspace ?? process.env.GITHUB_WORKSPACE, d = s && b.resolve(s) !== b.resolve(r) ? [ `${s}/.git/hooks`, `${s}/.git/config`, `${s}/.git/config.lock`, `${s}/.git/config.worktree`, `${s}/.git/config.worktree.lock`, `${s}/.git/commondir`, `${s}/.git/worktrees`, `${s}/.git/modules`, `${s}/.git/info/exclude`, `${s}/.git/glab-cli`, `${s}/.gitmodules`, `${s}/.github`, `${s}/.claude` ] : [];
  return {
    filesystem: {
      allowWrite: Ne,
      denyRead: [ "/run/docker.sock", "/run/containerd/containerd.sock", "/run/podman/podman.sock", "/run/buildkit/buildkitd.sock", "/run/dbus", "/run/user", e?.federationCacheDir ?? t9e() ].filter(f => !!f),
      denyWrite: [ `${n}/.bash_profile`, `${n}/.bashrc`, `${n}/.bash_aliases`, `${n}/.bash_login`, `${n}/.bash_logout`, `${n}/.profile`, `${n}/.zshrc`, `${n}/.zprofile`, `${n}/.zshenv`, `${n}/.zlogin`, `${n}/.zlogout`, `${n}/.claude`, `${n}/.claude.json`, e?.claudeConfigDir ?? process.env.CLAUDE_CONFIG_DIR, `${n}/.gitconfig`, `${n}/.config/git`, `${n}/.bunfig.toml`, `${r}/bunfig.toml`, `${r}/package.json`, ...J.map(f => `${r}/${f}`), `${n}/.npmrc`, `${r}/.npmrc`, `${n}/.yarnrc`, `${n}/.yarnrc.yml`, `${r}/.yarnrc`, `${r}/.yarnrc.yml`, `${n}/.config/pip`, `${n}/.pip`, `${r}/package-lock.json`, `${r}/yarn.lock`, `${r}/pnpm-lock.yaml`, `${r}/node_modules/.bin`, `${r}/.git/modules`, `${r}/scripts`, `${r}/.claude`, ...e?.canonicalClaudeDirs ?? ye(r), `${r}/.github`, `${n}/.local/bin`, `${n}/runners`, `${n}/actions-runner`, "/tmp/inline-comments-buffer.jsonl", ...e?.pathDirs ?? [], c, i, i && i.includes("/_actions/") ? i.slice(0, i.indexOf("/_actions/") + 9) : void 0, e?.GITHUB_EVENT_PATH ?? process.env.GITHUB_EVENT_PATH, `${n}/.config/gh`, `${n}/.config/glab-cli`, `${n}/.netrc`, `${n}/.ssh`, `${r}/.git/hooks`, `${r}/.git/config`, `${r}/.git/config.lock`, `${r}/.git/config.worktree`, `${r}/.git/config.worktree.lock`, `${r}/.git/commondir`, `${r}/.git/worktrees`, `${r}/.gitmodules`, `${r}/.git/info/exclude`, `${r}/.git/glab-cli`, ...d ].filter(f => !!f)
    }
  };
}

function me(e) {
  return e.startsWith("CLAUDE_CODE_RELAUNCH_PROACTIVITY_");
}

var X;

function xt() {
  let e = cmt(), n = e.length > 0;
  if (X?.armed !== n) X = {
    armed: n,
    names: new Set([ ...g9e, ...e ].map(r => r.toUpperCase()))
  };
  return X.names;
}

export { gLt, tee, ICo, kDs, hLt, Mft, yLt, OCo, X2n, MCo, QBe, msn, mfe, B9, J2n, TDs, ADs, fPr, Hft, CDs, RDs, Dft, xDs, mPr, gPr, Pie, gsn, ZBe, Ru, Z8e, _Lt, _E, Q2n, hsn, Z2n, Lft, e9e, e1e, ysn, Nft, PDs, IDs, eVn, vIe, HCo, wU, ODs, $ft, MDs, DCo, t9e, _sn, HDs, tVn, DDs, LCo, n9e, xc, hPr, j9, NCo, $Co, P8s, I8s, r9e, FCo, yPr, UCo, bLt, _Pr, bPr, t1e, SPr, wPr, vPr, SLt, n1e, EPr, gs, bsn, BCo };
