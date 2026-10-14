// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { En, t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { Ur, Oe, vf } from "./chunk-cjt10y7b.js";

import { DO, $pe, Qe, ZN, _9 } from "./chunk-xywp7esx.js";

import { _j } from "./chunk-nc0jxmkt.js";

import { on } from "./chunk-b47tzzqx.js";

import { oHt } from "./chunk-4dpx2qvt.js";

import { Ums, Bms, jms, ODn } from "./chunk-sqb9meyh.js";

import { QVt, w5r, KEn, vvt } from "./chunk-38c4jbk6.js";

import { qkn, Gvt } from "./chunk-19d60ej4.js";

import { On } from "./chunk-3kd8r7rn.js";

import { stripVTControlCharacters as S } from "util";

function f(e) {
  return `Error: --client-data-url: ${e}. Claude Code does not start without the configuration it was given; to start without it, remove the flag, or remove CLAUDE_CODE_CLIENT_DATA_URL from your environment or settings.`;
}

function m(e, {httpStatus: n, minClaudeCodeVersion: r, buildVersion: o} = {}) {
  switch (e) {
   case "invalid_url":
    return "the URL must be the https://downloads.claude.ai/ address Anthropic gave you, exactly as given";

   case "remote_session":
    return "it cannot be used in a cloud, remote-environment or ssh session, which runs Claude Code on another machine";

   case "third_party_provider":
    return "it only works when Claude Code talks to the Anthropic API directly, not through a cloud provider such as Bedrock, Vertex or Foundry, or a cloud gateway";

   case "policy_denied":
    return "your organization's policy does not allow it";

   case "not_found":
    return "there is nothing at that URL; it may have been withdrawn, so ask Anthropic for a new one";

   case "http_status":
   case "timeout":
   case "network":
   case "read_failed":
    return `Claude Code could not fetch the document from downloads.claude.ai (${e === "http_status" ? `HTTP ${n ?? "error"}` : e}); check that your network or proxy allows https://downloads.claude.ai`;

   case "too_large":
    return "the server returned something too large to be a configuration document; try again, and if it keeps happening ask Anthropic";

   case "unsigned":
   case "sidecar_invalid":
   case "bad_signature":
   case "parse_failed":
    return `the document or its signature is not valid (${e}); ask Anthropic for a new URL`;

   case "unknown_key":
   case "key_unusable":
   case "unsupported_schema":
    return `this version of Claude Code cannot read the document (${e}); update Claude Code`;

   case "replayed_version":
    return "the server returned an older document than one already accepted on this machine; a proxy on your network may be serving an old copy; if not, ask Anthropic for a new URL";

   case "below_minimum_version":
    return `the document requires Claude Code ${r} or newer and this build is ${o}; run claude update`;

   case "exception":
    return "Claude Code hit an internal error loading it; run with --debug for details";
  }
}

function v(e, n) {
  if (ODn(e, n) !== null) return;
  let r = w(e);
  return r === "" ? "the document covers no models; it has been switched off" : `the document covers models matching ${r}, and this session runs ${p(n)}; pass the matching --model`;
}

function A(e, n, r) {
  let o = ODn(e, n) === null ? `loaded, not applied to ${p(n)}: it covers models matching ${w(e)}` : `applied to ${p(n)} (document v${e.version})`;
  return r ? `${o}; base URL treated as the Anthropic API` : o;
}

function w(e) {
  return p(e.entries.map(n => n.pattern.source).join(", "));
}

function p(e) {
  return En(S(e));
}

function g() {
  let e = a.CLAUDE_CODE_CLIENT_DATA_URL?.trim();
  if (!e) return {
    kind: "unset"
  };
  let n;
  try {
    n = new URL(e);
  } catch {
    return {
      kind: "invalid_url"
    };
  }
  if (n.protocol !== "https:" || n.username !== "" || n.password !== "" || n.port !== "" || !_j(n.hostname) || /[?#]/.test(e) || !Ums.test(n.pathname)) return {
    kind: "invalid_url"
  };
  return {
    kind: "ok",
    source: {
      url: n.toString(),
      signingContext: Bms(n.pathname),
      cacheKey: w5r(n.pathname),
      roots: QVt
    }
  };
}

function l() {
  return Ur().clientDataUrl;
}

function AXo({flagUrl: e, runsOnAnotherMachine: n = !1, buildVersion: r = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION} = {}) {
  try {
    if (e !== void 0) a.set("CLAUDE_CODE_CLIENT_DATA_URL", e);
    let o = g();
    if (o.kind === "unset" || !b() || U(o, n) !== void 0) return;
    let i = D(o, n, r);
    i.catch(() => {}), l().pending = {
      resolution: o,
      loaded: i
    };
  } catch (o) {
    d(o);
  }
}

async function CXo() {
  try {
    let e = l().pending;
    if (e === void 0) return !1;
    let n = await e.loaded;
    return "document" in n && R(n.document);
  } catch (e) {
    return d(e), !1;
  }
}

async function RXo({runsOnAnotherMachine: e = !1, buildVersion: n = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION} = {}) {
  try {
    let r = g(), o = l().pending;
    l().pending = void 0;
    let i = o !== void 0 && E(o.resolution, r) ? o : void 0;
    if (r.kind === "unset") {
      k();
      return;
    }
    let s = U(r, e);
    if (s !== void 0 || o !== void 0 && i === void 0) k();
    if (s === void 0 && i === void 0 && !on("allow_model_catalog")) return f(m("policy_denied"));
    let u = s !== void 0 ? {
      failure: s
    } : i !== void 0 ? await i.loaded : await D(r, e, n);
    if (i !== void 0 && "failure" in u && L.has(u.failure)) u = await D(r, e, n);
    if ("failure" in u) return f(m(u.failure, u));
    if (i !== void 0 && !on("allow_model_catalog")) return f(m("policy_denied"));
    if (R(u.document)) oHt();
    if (r.kind === "ok") await Gvt(r.source.cacheKey, u.document);
    l().document = u.document, t(`[clientDataUrl] loaded document v${u.document.version} covering ${u.document.entries.length} model pattern(s)`);
    return;
  } catch (r) {
    return d(r), f(m("exception"));
  }
}

function R(e) {
  if (l().assumesFirstPartyBaseUrl) return !1;
  let n = e.entries.find(r => r.clientData.assume_first_party_base_url === !0);
  if (n === void 0 || vf()) return !1;
  if (a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL !== void 0 || y()) return t(`[clientDataUrl] assume_first_party_base_url in the document not applied: ${y() ? "the host manages the provider" : "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL is already set"}`), 
  !1;
  return l().assumesFirstPartyBaseUrl = !0, ZN(), _9(), t(`[clientDataUrl] assume_first_party_base_url applied (entry ${n.pattern.source}): the base URL is treated as the Anthropic API from here on`), 
  !0;
}

function xXo() {
  let {document: e} = l();
  if (e === void 0) return;
  let n = v(e, On(Qe()));
  return n === void 0 ? void 0 : f(n);
}

function PXo(e, n) {
  let {document: r} = l();
  if (r === void 0) return e;
  let o = ODn(r, On(n ?? Qe()));
  return o === null ? e : {
    ...e,
    ...o
  };
}

function IXo() {
  let {document: e} = l();
  return e === void 0 ? void 0 : A(e, On(Qe()), l().assumesFirstPartyBaseUrl);
}

async function D(e, n, r) {
  let o = U(e, n);
  if (o !== void 0 || e.kind !== "ok") return {
    failure: o ?? "invalid_url"
  };
  let {source: i} = e, s = await KEn({
    kind: "hosted",
    url: i.url,
    trust: {
      kind: "compiled_roots",
      roots: i.roots
    },
    cacheKey: i.cacheKey
  }, {
    noCache: !0
  });
  if (s.status !== "ok") {
    let {httpStatus: c} = s;
    if (c === 404 || c === 410) return {
      failure: "not_found"
    };
    return {
      failure: s.status === "error" ? s.reason : "http_status",
      httpStatus: c
    };
  }
  if (!s.hasSidecar) {
    let {sidecarHttpStatus: c} = s;
    if (c === void 0 || c === 404 || c === 410) return {
      failure: "unsigned"
    };
    return c >= 200 && c < 300 ? {
      failure: "too_large"
    } : {
      failure: "http_status",
      httpStatus: c
    };
  }
  let u = await vvt({
    documentBytes: s.documentBytes,
    sidecar: s.sidecar,
    roots: i.roots,
    context: i.signingContext
  });
  if (!u.ok) return {
    failure: u.reason
  };
  let _ = jms(s.documentBytes);
  if (!_.ok) return {
    failure: _.reason
  };
  let {document: h} = _;
  if (h.version < await qkn(i.cacheKey)) return {
    failure: "replayed_version"
  };
  let {minClaudeCodeVersion: C} = h;
  if (C !== void 0 && DO($pe(r), C)) return {
    failure: "below_minimum_version",
    minClaudeCodeVersion: C,
    buildVersion: r
  };
  return {
    document: h
  };
}

function U(e, n) {
  if (e.kind === "invalid_url") return "invalid_url";
  if (n) return "remote_session";
  if (Oe() !== "firstParty") return "third_party_provider";
  return;
}

function y() {
  return a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || a.CLAUDE_CODE_HOST_AUTH_ENV_VAR !== void 0;
}

function b() {
  return Oe() === "firstParty" && !vf() && a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL === void 0 && !y();
}

var L = new Set([ "network", "http_status", "read_failed" ]);

function E(e, n) {
  return e.kind === "ok" ? n.kind === "ok" && e.source.url === n.source.url : n.kind === "invalid_url";
}

function k() {
  if (!l().assumesFirstPartyBaseUrl) return;
  l().assumesFirstPartyBaseUrl = !1, ZN(), _9(), t("[clientDataUrl] assume_first_party_base_url withdrawn: the launch does not use the document it came from");
}

export { AXo, CXo, RXo, xXo, PXo, IXo };
