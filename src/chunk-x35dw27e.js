// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, he, ZS } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, Cn } from "./chunk-hwdwjvh8.js";

import { Ot, l, E, Tcn, zj } from "./chunk-b0z4bv3v.js";

import { nb } from "./chunk-nvtwm272.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { e6 } from "./chunk-y752zmas.js";

import { f } from "./chunk-3ykz5st8.js";

import { _, Y, se, t } from "./chunk-kawq2919.js";

import { Ja } from "./chunk-2msx6erf.js";

import { kv, Efe, dG } from "./chunk-hazy64h6.js";

import { Qh } from "./chunk-4dwgr3et.js";

import { it } from "./chunk-zscnwzv2.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { readFileSync as P } from "fs";

import { homedir as ie } from "os";

import { join as N } from "path";

var dd = Symbol("secureStorage.READ_FAILED");

import { AsyncLocalStorage as U } from "async_hooks";

import { join as H } from "path";

var A = new U, T = Promise.resolve();

async function lRo(e) {
  if (A.getStore()) return e();
  let r = T, n;
  T = new Promise(o => {
    n = o;
  });
  try {
    await r;
    let o = kv();
    await se().mkdir(o);
    let a = await Ja(H(o, ".storage-write"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1e3
      },
      stale: 15e3,
      onCompromised: s => t(`[secureStorage] write lock compromised: ${l(s)}`, {
        level: "warn"
      })
    });
    try {
      return await A.run(!0, e);
    } finally {
      await a().catch(s => t(`[secureStorage] write lock release failed: ${l(s)}`, {
        level: "warn"
      }));
    }
  } finally {
    n();
  }
}

async function h0s(e) {
  return A.run(!0, e);
}

function g(e, r, n) {
  return lRo(async () => {
    e.invalidateCache?.();
    let o = await (e.readAsyncStrict?.(n, {
      inaccessibleAs: "failureIfTransient"
    }) ?? e.readAsync(n));
    if (o === dd) return f("secure_storage_credentials_write", "read_failed_skip_write"), 
    {
      success: !1,
      transient: !0
    };
    let a = o ?? {}, s = r(a);
    return s === a ? {
      success: !0
    } : await e.update(s, n);
  });
}

var G = Symbol("secureStorage.fallbackLegs");

function dRo(e) {
  return e[G];
}

function y0s(e) {
  let r = e?.slackTag;
  if (typeof r !== "object" || r === null || !("lastBinding" in r)) return e;
  let {lastBinding: n, ...o} = r;
  return {
    ...e,
    slackTag: o
  };
}

var I = 2e3;

var q = 44;

async function _0s() {
  try {
    let {code: e} = await it("security", [ "find-generic-password", "-a", dG(), "-w", "-s", Efe() ], {
      useCwd: !1,
      preserveOutputOnError: !1,
      timeout: I
    });
    return e === q;
  } catch {
    return !1;
  }
}

var d;

function cRo() {
  if (d !== void 0) return d;
  return d = Promise.resolve(!1), d;
}

import { chmod as J } from "fs/promises";

import { join as Z } from "path";

function i() {
  let e = kv(), r = ".credentials.json";
  return {
    storageDir: e,
    storagePath: Z(e, ".credentials.json")
  };
}

var $Pr = "Warning: Storing credentials in plaintext.";

function Q(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return null;
  return dd;
}

function ee(e, r) {
  return e === "ENOENT" ? null : dd;
}

var te = {
  async read() {
    let {storagePath: e} = i();
    try {
      let r = await se().readFile(e, {
        encoding: "utf8"
      });
      return Y(r);
    } catch {
      return null;
    }
  },
  async readStrict(e) {
    let {storagePath: r} = i(), n;
    try {
      n = await se().readFile(r, {
        encoding: "utf8"
      });
    } catch (o) {
      return (e ? ee : Q)(E(o), "linux");
    }
    try {
      return Y(n);
    } catch {
      if (e) return dd;
      return null;
    }
  },
  async write(e) {
    try {
      let {storageDir: r, storagePath: n} = i();
      return await se().mkdir(r), await Tn(n, _(e), 384), await J(n, 384), {
        success: !0,
        warning: $Pr
      };
    } catch {
      return {
        success: !1
      };
    } finally {
      if (z()) RIe();
    }
  },
  async remove() {
    let {storagePath: e} = i();
    try {
      return await se().unlink(e), !0;
    } catch (r) {
      if (E(r) === "ENOENT") return !0;
      return !1;
    } finally {
      if (z()) RIe();
    }
  }
}, re = {
  read: async () => null,
  readStrict: async () => null,
  write: async () => ({
    success: !1
  }),
  remove: async () => !0
};

function ne(e) {
  switch (e.state) {
   case "present":
    return e.data;

   case "absent":
   case "corrupt":
    return null;

   case "refused-symlink":
   case "read-failed":
    return dd;

   default:
    {
      let r = e;
      return dd;
    }
  }
}

function ae(e) {
  return {
    async read() {
      let {storagePath: r} = i(), n = S(), o = n.generation, a = await m(e.readCredentials(), n);
      return D(n, a, r, o), a.state === "present" ? a.data : null;
    },
    async readStrict(r) {
      let {storagePath: n} = i(), o = S(), a = o.generation, s = await m(r ? e.readCredentials() : e.readCredentialsStrict(), o);
      if (D(o, s, n, a), r) return s.state === "present" ? s.data : s.state === "absent" ? null : dd;
      return ne(s);
    },
    async write(r) {
      let {storagePath: n} = i(), o = S(), a = o.generation, s = await m(e.writeCredentials(r), o);
      if (s.state === "written" && a === o.generation) h(o, n, _(r)); else u(o);
      return s.state === "written" ? {
        success: !0,
        warning: $Pr
      } : {
        success: !1
      };
    },
    async remove() {
      let {storagePath: r} = i(), n = S(), o = n.generation, a = await m(e.deleteCredentials(), n);
      if (a.state === "deleted" && o === n.generation) h(n, r, null); else u(n);
      return a.state === "deleted";
    }
  };
}

async function m(e, r) {
  try {
    return await e;
  } catch (n) {
    throw u(r), n;
  }
}

class O {
  copy=void 0;
  generation=0;
}

var oe = new K(() => new O);

function S() {
  return oe.of(B().host);
}

function h(e, r, n) {
  e.copy = {
    storagePath: r,
    text: n
  }, e.generation++;
}

function D(e, r, n, o) {
  if (o !== e.generation) {
    u(e);
    return;
  }
  switch (r.state) {
   case "present":
    h(e, n, _(r.data));
    return;

   case "absent":
   case "corrupt":
   case "refused-symlink":
    h(e, n, null);
    return;

   case "read-failed":
    u(e);
    return;

   default:
    {
      let a = r;
      u(e);
    }
  }
}

function u(e) {
  e.copy = void 0, e.generation++;
}

function RIe() {
  u(S());
}

function p(e) {
  return z() && e !== void 0 ? ae(e) : he() ? re : te;
}

var C = {
  name: "plaintext",
  osGuarded: !1,
  read(e) {
    let {storagePath: r} = i();
    try {
      let n = z() && e?.fromStoreCopy === !0 ? S().copy : void 0;
      if (n !== void 0 && n.storagePath === r) {
        if (n.text === null) return null;
        return JSON.parse(n.text);
      }
      if (he()) return null;
      let o = se().readFileSync(r, {
        encoding: "utf8"
      });
      return Y(o);
    } catch {
      return null;
    }
  },
  invalidateCache() {
    RIe();
  },
  readAsync(e) {
    return p(e).read();
  },
  readAsyncStrict(e, r) {
    return p(e).readStrict(r?.unreadableFileAs === "failure");
  },
  mutate(e, r) {
    return g(C, e, r);
  },
  update(e, r) {
    return p(r).write(e);
  },
  delete(e) {
    return p(e).remove();
  }
};

class x {
  memo;
  handedIn;
  prime(e, r) {
    if (this.memo !== void 0) return;
    this.handedIn = {
      enabled: e,
      ...r()
    };
  }
  resolve(e, r) {
    if (this.memo !== void 0) return this.memo;
    try {
      let n = e(), o = this.handedIn;
      if (o !== void 0 && o.legacyPath === n.legacyPath && o.configPath === n.configPath) this.memo = o.enabled; else this.memo = r(n);
    } catch {
      this.memo = !1;
    }
    return this.memo;
  }
  reset() {
    this.memo = void 0, this.handedIn = void 0;
  }
}

var ce = new K(() => new x);

function L() {
  return ce.of(B().host);
}

function M() {
  return {
    legacyPath: N(Ee(), ".config.json"),
    configPath: N(process.env.CLAUDE_CONFIG_DIR || ie(), `.claude${e6()}.json`)
  };
}

function uRo() {
  if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") return !0;
  return L().resolve(M, ue);
}

function ue({legacyPath: e, configPath: r}) {
  let n = "";
  try {
    n = P(e, "utf8");
  } catch (a) {
    let s = E(a);
    if (s !== "ENOENT" && s !== "ENOTDIR" && s !== "EISDIR" && s !== "ELOOP") throw a;
  }
  if (n === "") n = P(r, "utf8");
  return JSON.parse(n).cachedGrowthBookFeatures?.tengu_windows_credman === !0;
}

function pRo(e) {
  L().prime(e, M);
}

var k;

function FPr() {
  return "file";
}

function Xn() {
  if (k) return k;
  return C;
}

import { STATUS_CODES as de } from "http";

var le = 500, fRo = .25;

function vU(e, r, n = 32e3, o = Math.random, a = le) {
  let s = Math.round(nb({
    attempt: e,
    baseMs: a,
    capMs: n,
    jitter: {
      kind: "proportional",
      ratio: fRo
    },
    random: o
  }));
  if (r) {
    let c = parseInt(r, 10);
    if (!isNaN(c)) return Math.max(c * 1e3, s);
  }
  return s;
}

var b0s = 6e5;

function UPr(e) {
  return e.escalated ? e.retryWindowMs : e.firstWindowMs;
}

class RLt extends Error {
  deadline;
  sleptMs;
  code="StreamNoResponse";
  constructor(e, r) {
    super("No response from API within the first-byte window");
    this.deadline = e;
    this.sleptMs = r;
    this.name = "StreamNoResponseError";
  }
}

function Hsn(e) {
  let r = zj(e, n => n instanceof RLt);
  return r instanceof RLt ? r : void 0;
}

var Al = "API Error", Jft = 1e3;

function Oie(e) {
  if (!(e instanceof Ot)) return !1;
  let r = e.message ?? "";
  return e.status === 403 && r.includes("OAuth token has been revoked") || e.status === 401 && r.includes("OAuth access token has been revoked");
}

function Qft(e) {
  if (!(e instanceof Ot) || e.status !== 403) return !1;
  let r = e.message ?? "";
  return (e.type === "permission_error" || r.includes('"type":"permission_error"')) && r.includes("model:");
}

function mRo(e) {
  return e.type === "not_found_error" || (e.message?.includes('"type":"not_found_error"') ?? !1);
}

function xIe(e) {
  if (!(e instanceof Ot) || e.status !== 404) return !1;
  return mRo(e) && (e.message ?? "").includes("model:");
}

function dj(e) {
  if (!(e instanceof Ot)) return !1;
  return e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? !1);
}

function F(e) {
  return e instanceof Ot && e.status === 503 && e.headers?.get("x-should-retry") === "false";
}

function BPr(e) {
  return F(e) ? b("headerless_decline") : b("headerless_retryable_503");
}

function jPr(e) {
  return F(e) ? 0 : vU(1);
}

function fe(e) {
  if (!(e instanceof Ot)) return !1;
  return e.status === 429 || (e.message?.includes('"type":"rate_limit_error"') ?? !1);
}

function WPr(e) {
  return e >= 400 && e < 500 && e !== 401 && e !== 408 && e !== 409 && e !== 429 && e !== 451;
}

var PIe = "dlp_request_denied";

function u9e(e) {
  return CVn(e) === PIe;
}

function S0s(e) {
  if (!(e instanceof Ot) || e.status !== 400 || !w(e)) return !1;
  return e.error?.error?.type === "policy_blocked";
}

var Zft = "claude_code_version_too_old";

function zPr(e) {
  return CVn(e) === Zft;
}

var Se = /\bClaude Code \S+ (?:does not support this model; version \S+ or newer is required|is older than the minimum version required by your organization's policy)/;

function w0s(e) {
  if (zPr(e)) return !0;
  if (!(e instanceof Ot) || e.status !== 400) return !1;
  return Se.test(R(e) ?? e.message);
}

var iee = "safety_monitor_blocked";

function l1e(e) {
  return !1;
}

function xLt(e) {
  return !1;
}

function CVn(e) {
  if (!(e instanceof Ot) || !w(e)) return;
  return e.error?.error?.details?.error_code;
}

var ge = /^[a-z][a-z0-9_]{0,63}$/;

function v0s(e) {
  let r = CVn(e);
  return typeof r === "string" && ge.test(r) ? r : void 0;
}

function RVn(e) {
  if (typeof e.status === "number") return e.status;
  if (dj(e)) return 529;
  if (fe(e)) return 429;
  return;
}

var wfe = new Set([ "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "CERT_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CERT_REVOKED", "CERT_REJECTED", "CERT_UNTRUSTED", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_CHAIN_TOO_LONG", "PATH_LENGTH_EXCEEDED", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH" ]), E0s = new Set([ "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN" ]), me = new Set([ ...wfe, "ERR_TLS_HANDSHAKE_TIMEOUT", "ERR_SSL_WRONG_VERSION_NUMBER", "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC" ]), EU = new Set([ "ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "ENETDOWN", "EHOSTUNREACH", "EHOSTDOWN", "EAI_AGAIN", "FailedToOpenSocket", "ERR_PROXY_TUNNEL" ]), lG = new Set([ "ECONNRESET", "EPIPE", "ConnectionClosed", "UND_ERR_SOCKET", "ETIMEDOUT", "ECONNABORTED", "ERR_SOCKET_CLOSED", "StreamSuspended", "StreamTruncated" ]);

function xVn(e) {
  return lG.has(e) || EU.has(e) ? Cn(e) : b("other");
}

function emt(e) {
  return EU.has(e) || lG.has(e) || wfe.has(e) ? Cn(e) : void 0;
}

function p9e(e, r) {
  let n = /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : "unknown";
  return Cn(`API error: type=${n} status=${typeof r === "number" ? r : "none"}`);
}

var v = "Failed to resolve AWS credentials from the credential provider chain.", PVn = "Failed to acquire Google OAuth credentials.";

function tg(e) {
  if (!e || typeof e !== "object") return null;
  let r = e, n = 5, o = 0;
  while (r && o < n) {
    if (r instanceof Error) {
      if ("code" in r && typeof r.code === "string") {
        let a = r.code, s = me.has(a);
        return {
          code: a,
          message: r.message,
          isSSLError: s
        };
      }
      if (r.message.startsWith(Tcn)) return {
        code: "ConnectionClosed",
        message: r.message,
        isSSLError: !1
      };
    }
    if (r instanceof Error && "cause" in r && r.cause !== r) r = r.cause, o++; else break;
  }
  return null;
}

function pe(e) {
  let r = tg(e);
  return r !== null && EU.has(r.code);
}

function Dsn(e) {
  return tg(e)?.code === "StreamSuspended";
}

function V9(e) {
  let r = tg(e);
  if (!r?.isSSLError) return null;
  return `SSL certificate error (${r.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run \`claude doctor\` for details.`;
}

function y(e) {
  if (e.includes("<!DOCTYPE html") || e.includes("<html")) {
    let r = e.match(/<title>([^<]+)<\/title>/);
    if (r && r[1]) return r[1].trim();
    return "";
  }
  return e;
}

function gRo(e) {
  let r = e.message;
  if (!r) return "";
  return y(r);
}

function w(e) {
  return typeof e === "object" && e !== null && "error" in e && typeof e.error === "object" && e.error !== null;
}

function R(e) {
  if (!w(e)) return null;
  let n = e.error, o = n?.error?.message;
  if (typeof o === "string" && o.length > 0) {
    let s = y(o);
    if (s.length > 0) return s;
  }
  let a = n?.message;
  if (typeof a === "string" && a.length > 0) {
    let s = y(a);
    if (s.length > 0) return s;
  }
  return null;
}

function vfe(e) {
  let r = tg(e);
  if (r) {
    let {code: a, isSSLError: s} = r;
    if (a === "StreamSuspended") return ZS() ? "Connection lost" : "Connection lost while your computer was asleep";
    if (a === "StreamTruncated") return "Connection closed before the response finished";
    if (a === "StreamNoResponse") return "No response from API";
    if (a === "BedrockUnexpectedContentType") return r.message;
    if (a === "ETIMEDOUT") return ZS() ? "Request timed out" : "Request timed out. Check your internet connection and proxy settings";
    if (s) {
      let c = `(${a}). The certificate comes from an authority Claude Code doesn't trust, usually a TLS-inspecting corporate proxy or a gateway signed by a private CA: set NODE_EXTRA_CA_CERTS to that CA bundle, or add it to the system certificate store \xb7 see https://code.claude.com/docs/en/network-config`;
      switch (a) {
       case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
       case "UNABLE_TO_GET_ISSUER_CERT":
       case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
        return `Unable to connect to API: SSL certificate verification failed ${c}`;

       case "CERT_HAS_EXPIRED":
        return "Unable to connect to API: SSL certificate has expired";

       case "CERT_REVOKED":
        return "Unable to connect to API: SSL certificate has been revoked";

       case "DEPTH_ZERO_SELF_SIGNED_CERT":
       case "SELF_SIGNED_CERT_IN_CHAIN":
        return `Unable to connect to API: Self-signed certificate detected ${c}`;

       case "ERR_TLS_CERT_ALTNAME_INVALID":
       case "HOSTNAME_MISMATCH":
        return "Unable to connect to API: SSL certificate hostname mismatch";

       case "CERT_NOT_YET_VALID":
        return "Unable to connect to API: SSL certificate is not yet valid";

       default:
        return `Unable to connect to API: SSL error (${a})`;
      }
    }
  }
  if (e.message === v || e.message === PVn) {
    let a = zj(e.cause, s => s.message.trim().length > 0 && s.message !== v && s.message !== PVn);
    if (a) {
      let s = y(a.message.trim());
      if (s.length > 0) return s;
    }
  }
  if (e.message === "Connection error.") {
    let a = r?.code;
    if (ZS()) return a === void 0 ? "Unable to connect to API" : `Unable to connect to API (${a})`;
    if (a === void 0) return "Unable to connect to API. Check your internet connection";
    switch (a) {
     case "ECONNRESET":
     case "EPIPE":
     case "ECONNABORTED":
     case "ConnectionClosed":
     case "ERR_SOCKET_CLOSED":
     case "UND_ERR_SOCKET":
      return `Connection dropped (${a})`;

     case "ECONNREFUSED":
     case "ConnectionRefused":
      return `Connection refused \u2014 a firewall or proxy may be blocking it (${a})`;

     case "ENOTFOUND":
     case "EAI_AGAIN":
     case "FailedToOpenSocket":
      return `Can't reach the API server \u2014 check your internet or DNS (${a})`;

     case "ENETUNREACH":
     case "ENETDOWN":
     case "EHOSTUNREACH":
     case "EHOSTDOWN":
      return `No internet route \u2014 check your connection or VPN (${a})`;

     case "ERR_PROXY_TUNNEL":
      return `Couldn't connect through your proxy (${a}) \u2014 the proxy refused the tunnel: check its credentials and that it allows this host`;

     default:
      return `Unable to connect to API (${a})`;
    }
  }
  if (!e.message) return R(e) ?? `API error (status ${e.status ?? "unknown"})`;
  if (e.message.includes('{"')) {
    let a = R(e);
    if (a) return e.status ? `${e.status} ${a}` : a;
  }
  let n = gRo(e), o = /^(\d+ )?\s*</.test(e.message);
  if (n.length === 0 && o) {
    if (!e.status) return "API error (status unknown)";
    let a = de[e.status];
    return a ? `${e.status} ${a}` : String(e.status);
  }
  if (n !== e.message && n.length > 0) {
    let a = e.status ? String(e.status) : void 0;
    return a && !n.match(/\d+/g)?.includes(a) ? `${a} ${n}` : n;
  }
  return e.message.trimEnd();
}

function IVn(e) {
  let r = c => e.headers?.get?.(c) ?? void 0, n = r("anthropic-ratelimit-unified-representative-claim"), o = r("anthropic-ratelimit-unified-reset"), a = r("anthropic-ratelimit-unified-overage-status"), s = Hsn(e);
  return {
    message: e.message,
    status: e.status,
    requestId: e.requestID ?? void 0,
    formatted: vfe(e),
    connection: tg(e),
    isNetworkDown: pe(e),
    rateLimits: n || a ? {
      ...n && {
        rateLimitType: n
      },
      ...o && {
        resetsAt: Math.round(Number(o))
      }
    } : null,
    noResponse: s ? {
      waitedMs: UPr(s.deadline),
      retryWaitMs: s.deadline.retryWindowMs
    } : null
  };
}

class Lsn extends Error {
  constructor() {
    super("Stream ended without receiving any events");
    this.name = "StreamNoEventsError";
  }
}

class aee extends Error {
  blockState;
  constructor(e) {
    super("Content block not found");
    if (this.name = "StreamMalformedEventError", this.blockState = e, e === "closed") this.message = "Content block already closed";
    if (e === "unreadable") this.message = "Stream event unreadable";
  }
}

class GPr extends Error {
  code="StreamTruncated";
  constructor() {
    super("Stream ended before the response was complete");
    this.name = "StreamTruncatedError";
  }
}

function k0s({connDetails: e, isStaleConnection: r, isContextHintSse: n, streamIdleAborted: o, noEvents: a, malformedStream: s}) {
  if (e?.code === "StreamSuspended") return "stream_suspended";
  if (e?.code === "StreamTruncated") return "stream_truncated";
  if (r) return "stale_connection";
  if (n) return "context_hint_sse";
  if (o) return "watchdog";
  if (a) return "no_events";
  if (s) return "malformed_stream";
  return "other";
}

export { dd, lRo, h0s, dRo, y0s, _0s, cRo, $Pr, RIe, uRo, pRo, FPr, Xn, fRo, vU, b0s, UPr, RLt, Hsn, Al, Jft, Oie, Qft, mRo, xIe, dj, BPr, jPr, WPr, PIe, u9e, S0s, Zft, zPr, w0s, iee, l1e, xLt, CVn, v0s, RVn, wfe, E0s, EU, lG, xVn, emt, p9e, PVn, tg, Dsn, V9, gRo, vfe, IVn, Lsn, aee, GPr, k0s };
