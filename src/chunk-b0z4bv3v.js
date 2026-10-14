// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, Cn } from "./chunk-hwdwjvh8.js";

function pMe(n) {
  return typeof n === "object" && n !== null && ("name" in n && n.name === "AbortError" || "message" in n && String(n.message).includes("FetchRequestCanceledException"));
}

var yFt = n => {
  if (n instanceof Error) return n;
  if (typeof n === "object" && n !== null) {
    try {
      let e = Object.prototype.toString.call(n);
      if (e === "[object Error]" || e === "[object DOMException]") {
        let t = Error(n.message, n.cause ? {
          cause: n.cause
        } : {});
        if (n.stack) t.stack = n.stack;
        if (n.cause && !t.cause) t.cause = n.cause;
        if (n.name) t.name = n.name;
        return t;
      }
    } catch {}
    try {
      return Error(JSON.stringify(n));
    } catch {}
  }
  return Error(n);
};

var Jn = (() => {
  class n extends Error {}
  return n;
})();

class Ot extends Jn {
  constructor(n, e, t, r, o) {
    super(`${Ot.makeMessage(n, e, t)}`);
    this.status = n, this.headers = r, this.requestID = r?.get("request-id"), this.workspaceID = r?.get("anthropic-workspace-id"), 
    this.error = e, this.type = o ?? null;
  }
  static makeMessage(n, e, t) {
    let r = e?.message ? typeof e.message === "string" ? e.message : JSON.stringify(e.message) : e ? JSON.stringify(e) : t;
    if (n && r) return `${n} ${r}`;
    if (n) return `${n} status code (no body)`;
    if (r) return r;
    return "(no status code or body)";
  }
  static generate(n, e, t, r) {
    if (!n || !r) return new Hu({
      message: t,
      cause: yFt(e)
    });
    let o = e, i = o?.error?.type;
    if (n === 400) return new _Ft(n, o, t, r, i);
    if (n === 401) return new iWe(n, o, t, r, i);
    if (n === 403) return new bFt(n, o, t, r, i);
    if (n === 404) return new aWe(n, o, t, r, i);
    if (n === 409) return new SFt(n, o, t, r, i);
    if (n === 422) return new wFt(n, o, t, r, i);
    if (n === 429) return new vFt(n, o, t, r, i);
    if (n >= 500) return new EFt(n, o, t, r, i);
    return new Ot(n, o, t, r, i);
  }
}

class yu extends Ot {
  constructor({message: n} = {}) {
    super(void 0, void 0, n || "Request was aborted.", void 0);
  }
}

class Hu extends Ot {
  constructor({message: n, cause: e}) {
    super(void 0, void 0, n || "Connection error.", void 0);
    if (e) this.cause = e;
  }
}

class TT extends Hu {
  constructor({message: n} = {}) {
    super({
      message: n ?? "Request timed out."
    });
  }
}

class kcn extends Jn {
  constructor(n, {cause: e} = {}) {
    super(n ?? "Retryable error.");
    if (e !== void 0) this.cause = e;
  }
}

class _Ft extends Ot {}

class iWe extends Ot {}

class bFt extends Ot {}

class aWe extends Ot {}

class SFt extends Ot {}

class wFt extends Ot {}

class vFt extends Ot {}

class EFt extends Ot {}

class fMe extends Error {
  constructor(n) {
    super(n);
    this.name = this.constructor.name;
  }
}

class AI extends Error {}

class Qg extends Error {
  name="CliUserError";
}

class Ye extends Error {
  constructor(n) {
    super(n);
    this.name = "AbortError";
  }
}

class pd extends Ye {}

function Ve(n) {
  try {
    return n instanceof Ye || n instanceof yu || n instanceof Error && (n.name === "AbortError" || "__CANCEL__" in n && Boolean(n.__CANCEL__));
  } catch {
    return !1;
  }
}

class wx extends Error {
  filePath;
  defaultConfig;
  constructor(n, e, t) {
    super(n);
    this.name = "ConfigParseError", this.filePath = e, this.defaultConfig = t;
  }
}

class t2 extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  constructor(n) {
    super("Shell command failed");
    this.name = "ShellError", this.stdout = n.stdout, this.stderr = n.stderr, this.code = n.code, 
    this.interrupted = n.interrupted, this.hadSandboxViolation = n.hadSandboxViolation ?? !1;
  }
}

class Xu extends Error {
  formattedMessage;
  constructor(n, e) {
    super(n);
    this.formattedMessage = e;
    this.name = "TeleportOperationError";
  }
}

class x extends Error {
  telemetryMessage;
  errorClass;
  constructor(n, e, t) {
    super(n);
    this.name = "TelemetrySafeError", this.telemetryMessage = e ?? n, this.errorClass = t;
  }
}

class Mr extends x {}

var Je = (n, e) => {
  try {
    if (n !== null && typeof n === "object" && !("telemetryMessage" in n) && Object.isExtensible(n)) Object.assign(n, {
      telemetryMessage: e
    });
  } catch {}
  return n;
}, n2 = (n, e) => {
  try {
    if (n !== null && typeof n === "object" && Object.isExtensible(n)) {
      let t = n, r = Object.entries(e).filter(([o, i]) => i !== void 0 && !(o in t));
      Object.assign(t, Object.fromEntries(r));
    }
  } catch {}
  return n;
}, s = Symbol("telemetryChildExitStatus"), E$o = (n, e) => {
  try {
    if (e !== void 0 && n !== null && typeof n === "object" && !Object.hasOwn(n, s) && Object.isExtensible(n)) Object.defineProperty(n, s, {
      value: e,
      enumerable: !1,
      writable: !1,
      configurable: !1
    });
  } catch {}
  return n;
};

function vq(n) {
  try {
    if (n !== null && typeof n === "object" && "telemetryMessage" in n && typeof n.telemetryMessage === "string") return n.telemetryMessage;
  } catch {}
  return;
}

function vx(n, e) {
  return n instanceof Error && n.message === e;
}

function j(n) {
  return n instanceof Error ? n : Error(String(n));
}

function l(n) {
  return n instanceof Error ? n.message : String(n);
}

function E(n) {
  if (n && typeof n === "object" && "code" in n && typeof n.code === "string") return n.code;
  return;
}

function zr(n) {
  return ME(E(n));
}

function ME(n) {
  return n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n) ? Cn(n) : void 0;
}

var f = -2147483648, d = 4294967295;

function k$o(n) {
  try {
    if (n === null || typeof n !== "object") return;
    let e = Object.getOwnPropertyDescriptor(n, s), t = e !== void 0 && Object.hasOwn(e, "value") ? e.value : void 0;
    return typeof t === "number" && Number.isInteger(t) && t >= f && t <= d ? t : void 0;
  } catch {
    return;
  }
}

var qJe = "did not become reachable within", YJe = "exited before it became reachable", Tcn = "The socket connection was closed unexpectedly";

function BYn(n) {
  return [ ...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g) ].filter(e => !"/\\".includes(n[e.index - 1] ?? ".")).map(e => e[0]);
}

function kh(n) {
  let e = n?.name;
  return typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e) ? Cn(e) : void 0;
}

function ug(n) {
  return zr(n) ?? kh(n);
}

function Eq(n) {
  return Cn(zr(n)?.toLowerCase() ?? "other");
}

function eB(n) {
  return kh(n);
}

function xae(n) {
  return n !== void 0 && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n) ? Cn(n) : void 0;
}

function jYn(n) {
  let e = xae(n);
  return e === void 0 ? void 0 : Cn(e.toLowerCase());
}

function yD(n) {
  return typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n) ? Cn(n) : void 0;
}

function Acn(n) {
  return typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n) ? Cn(n) : b("unparseable");
}

function tb(n) {
  return /^[a-z][a-z0-9_]{0,39}$/.test(n) ? Cn(n) : b("unparseable");
}

function IEe(n) {
  if (typeof n !== "string") return;
  return /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n) ? Cn(n) : b("nonconforming");
}

function T$o(n) {
  if (n === void 0) return;
  let e = n.indexOf(":"), t = e === -1 ? n : n.slice(0, e);
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) return b("unparseable");
  if (e === -1) return Cn(t);
  let r = n.slice(e + 1), o = ME(r) ?? yD(r) ?? (r === "string" || r === "non-error" ? r : "Error");
  return Cn(`${t}:${o}`);
}

function A$o(n) {
  return yD(n);
}

function Ccn(n) {
  let e = n?.constructor?.name;
  return typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e) ? Cn(e) : b("unparseable");
}

function c0r(n) {
  return p.test(n) ? Cn(n) : void 0;
}

var p = /^(?:<user-code>|(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2})$/, Gme = new Set([ "ENOSPC", "EDQUOT", "ENFILE", "EMFILE" ]), C$o = new Set([ "EACCES", "EPERM", "EROFS" ]);

function Ms(n) {
  return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number";
}

function zj(n, e, t = 5) {
  let r = n;
  for (let o = 0; o < t; o++) {
    if (!(r instanceof Error)) return;
    if (e(r)) return r;
    r = r.cause;
  }
  return;
}

function W(n) {
  return E(n) === "ENOENT";
}

function Zl(n) {
  let e = E(n);
  return e === "ENOENT" || e === "ENOTDIR";
}

function r2(n) {
  return E(n) === "EISDIR";
}

function R$o(n) {
  return E(n) === "E2BIG";
}

function x$o(n) {
  try {
    if (E(n) !== "ECONNRESET") return !1;
    let e = n instanceof Error ? n.stack : void 0;
    if (typeof e !== "string") return !1;
    let t = e.split(`\n`).find(r => r.trim().startsWith("at "));
    return t !== void 0 && t.includes("node:_http_server");
  } catch {
    return !1;
  }
}

function P$o(n) {
  if (n && typeof n === "object" && "path" in n && typeof n.path === "string") return n.path;
  return;
}

function kFt(n) {
  let e = n.message ? `${n.name}: ${n.message}` : n.name, t = n.stack;
  if (!t) return e;
  if (t.startsWith(e)) return t;
  let r = t.split(`\n`), o = r[0] ?? "", i = o === n.name || o.startsWith(`${n.name}:`) ? r.slice(1) : r;
  return [ e, ...i ].join(`\n`);
}

var u = new Set([ "ENOENT", "EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EROFS" ]);

function jt(n) {
  return Ex(E(n));
}

function Ex(n) {
  return n !== void 0 && u.has(n);
}

function SL(n) {
  let e = n instanceof Error ? n.cause : void 0;
  if (typeof e !== "object" || e === null || !("telemetryCode" in e)) return;
  return typeof e.telemetryCode === "string" ? e.telemetryCode : void 0;
}

var a = new Set([ "ENOSPC", "EDQUOT", "ENFILE", "EIO" ]);

function $y(n) {
  return u0r(E(n));
}

function u0r(n) {
  return n === "EDEADLK" || n === "EINTR" || n === "ENXIO" || n === "ENODEV" || n === "ECANCELED" || n === "ENEEDAUTH" || n === "ESTALE" || n === "EUNKNOWN" || n === "ENOMEM" || n !== void 0 && c(n);
}

function c(n) {
  return n === "UNKNOWN" || n.startsWith("Unknown system error");
}

function TFt(n, e = "linux") {
  if (e !== "win32") return !1;
  try {
    return Ms(n) && n.code === "EBADF" && n.syscall === "read";
  } catch {
    return !1;
  }
}

function Gj(n) {
  if (typeof n !== "string") return;
  return /^E[A-Z0-9]+$/.test(n) || c(n) ? n : void 0;
}

function I$o(n) {
  let e = E(n);
  return e !== void 0 && a.has(e);
}

function tm(n) {
  return AFt(E(n));
}

function AFt(n) {
  return n !== void 0 && (u.has(n) || n === "EISDIR" || a.has(n));
}

function Xp(n, e) {
  if (e?.(n)) return !0;
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return !1;
  let t = n.response?.status;
  return t === void 0 || t === 401 || t === 403 || t === 429;
}

function ute(n) {
  return n instanceof Error && /maxContentLength size of .* exceeded/.test(n.message);
}

function ci(n) {
  let e = l(n);
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return {
    kind: "other",
    message: e
  };
  let t = n, r = t.response?.status;
  if (r === 401 || r === 403) return {
    kind: "auth",
    status: r,
    message: e
  };
  if (t.code === "ECONNABORTED") return {
    kind: "timeout",
    status: r,
    message: e
  };
  if (t.code === "ECONNREFUSED" || t.code === "ENOTFOUND") return {
    kind: "network",
    status: r,
    message: e
  };
  return {
    kind: "http",
    status: r,
    message: e
  };
}

function XJe(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429;
}

export { pMe, yFt, Jn, Ot, yu, Hu, TT, kcn, _Ft, iWe, bFt, aWe, SFt, wFt, vFt, EFt, fMe, AI, Qg, Ye, pd, Ve, wx, t2, Xu, x, Mr, Je, n2, E$o, vq, vx, j, l, E, zr, ME, k$o, qJe, YJe, Tcn, BYn, kh, ug, Eq, eB, xae, jYn, yD, Acn, tb, IEe, T$o, A$o, Ccn, c0r, Gme, C$o, Ms, zj, W, Zl, r2, R$o, x$o, P$o, kFt, jt, Ex, SL, $y, u0r, TFt, Gj, I$o, tm, AFt, Xp, ute, ci, XJe };
