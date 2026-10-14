// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { E } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import { se, t } from "./chunk-kawq2919.js";

import { bme, tJe } from "./chunk-j016gcgm.js";

import { zqn, ft } from "./chunk-zscnwzv2.js";

import { BU, yme, vX } from "./chunk-e6anp4gn.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Ne } from "./chunk-m8ez8fhk.js";

import { delimiter as d, join as y } from "path";

function bl(e, n) {
  if (n in e) return e[n];
  if (O() !== "windows") return;
  let r = Object.keys(e).find(i => i.toUpperCase() === n.toUpperCase());
  return r === void 0 ? void 0 : e[r];
}

var m = 4096, c;

function uPr() {
  if (c !== void 0) return c;
  if (O() !== "windows") return c = null, c;
  try {
    let e = Ne("bun:ffi");
    c = e.dlopen("kernel32.dll", {
      OpenProcess: {
        args: [ "u32", "i32", "u32" ],
        returns: "ptr"
      },
      GetProcessTimes: {
        args: [ "ptr", "ptr", "ptr", "ptr", "ptr" ],
        returns: "i32"
      },
      CreateToolhelp32Snapshot: {
        args: [ "u32", "u32" ],
        returns: "ptr"
      },
      Process32FirstW: {
        args: [ "ptr", "ptr" ],
        returns: "i32"
      },
      Process32NextW: {
        args: [ "ptr", "ptr" ],
        returns: "i32"
      },
      CloseHandle: {
        args: [ "ptr" ],
        returns: "i32"
      }
    }).symbols, t("[win32-kernel32] bun:ffi loaded");
  } catch (e) {
    t(`[win32-kernel32] bun:ffi unavailable, falling back to spawn: ${e instanceof Error ? e.message : String(e)}`), 
    c = null;
  }
  return c;
}

class p {
  #e=!1;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}

var D = new p;

function f() {
  return !1;
}

function CCo(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  let n = uPr();
  if (n == null) return;
  let r = n.OpenProcess(m, 0, e);
  if (!r) return;
  try {
    let i = new Uint8Array(8), s = new Uint8Array(8), o = new Uint8Array(8), u = new Uint8Array(8);
    if (n.GetProcessTimes(r, i, s, o, u) === 0) return;
    return new DataView(i.buffer).getBigUint64(0, !0);
  } catch {
    return;
  } finally {
    n.CloseHandle(r);
  }
}

async function pPr(e) {
  if (O() !== "linux" && O() !== "wsl") return;
  if (!pfe(e)) return;
  try {
    let n = await se().readFile(`/proc/${e}/stat`, {
      encoding: "utf8"
    });
    return yme(n);
  } catch {
    return;
  }
}

async function kve(e) {
  return vX(await pPr(e));
}

var _ = 2147483647;

function pfe(e) {
  return Number.isInteger(e) && e > 1 && e <= _;
}

function Xf(e) {
  if (!pfe(e)) return !1;
  try {
    return process.kill(e, 0), !1;
  } catch (n) {
    return E(n) === "ESRCH";
  }
}

var C = 16;

async function YBe() {
  let e = O();
  if (e !== "linux" && e !== "wsl") return !0;
  let n = se(), r = await n.readlink("/proc/self").catch(() => null);
  if (r === null || r !== String(process.pid)) return !1;
  let i = await n.readdir("/proc").catch(() => null);
  if (!i) return !1;
  return i.filter(o => /^\d+$/.test(o.name)).length >= C;
}

function Tve(e, n) {
  let r = e.filter(i => Math.abs(i) > 1);
  for (let i of r) {
    try {
      process.kill(i, "SIGTERM");
    } catch {
      continue;
    }
    return setTimeout((s, o, u) => {
      if (!Y2n(o, u)) return;
      try {
        process.kill(s, "SIGKILL");
      } catch {}
    }, 5e3, i, Math.abs(r[0]), n).unref(), !0;
  }
  return !1;
}

async function ffe(e, n, r = "SIGTERM") {
  if (!e || e <= 1 || n === void 0) return !1;
  if (await b(e, n) === "other") return !1;
  try {
    process.kill(-e, r);
  } catch {
    return !1;
  }
  if (r !== "SIGKILL") setTimeout((i, s) => {
    b(i, s).then(o => {
      if (o === "other") return;
      try {
        process.kill(-i, "SIGKILL");
      } catch {}
    });
  }, 5e3, e, n).unref();
  return !0;
}

async function b(e, n) {
  let r = await JBe(e);
  if (r !== void 0) return Cve(n, r) ? "same" : "other";
  try {
    return process.kill(e, 0), "other";
  } catch (i) {
    return E(i) === "ESRCH" ? "gone" : "other";
  }
}

function Ave(e) {
  try {
    let n = se().readFileSync(`/proc/${e}/stat`, {
      encoding: "utf8"
    }), r = BU(n);
    return r && r.length > 0 ? r : void 0;
  } catch {
    return;
  }
}

function RCo(e, n = 12) {
  let r = [], i = e;
  for (let s = 0; s < n; s++) {
    let o = 0;
    try {
      let u = se().readFileSync(`/proc/${i}/stat`, {
        encoding: "utf8"
      }), a = u.lastIndexOf(")"), l = u.slice(a + 2).split(" ");
      o = Number(l[1]);
    } catch {
      break;
    }
    if (!Number.isInteger(o) || o < 1) break;
    if (r.push(o), o === 1) break;
    i = o;
  }
  return r;
}

async function xCo(e, n = 10) {
  return (await q2n(e, n)).ancestors;
}

async function q2n(e, n = 10) {
  let r = `pid=${String(e)}; for i in $(seq 1 ${n}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`, i = await ft("sh", [ "-c", r ], {
    timeout: 3e3
  }), s = (i.stdout ?? "").trim().split(`\n`).filter(Boolean);
  return {
    ancestors: s.filter(o => o !== "END" && o !== "FAIL").map(o => parseInt(o, 10)).filter(o => !isNaN(o)),
    readFailed: i.code !== 0 || s.at(-1) === "FAIL",
    truncated: i.code === 0 && s.at(-1) !== "END" && s.at(-1) !== "FAIL"
  };
}

function PCo(e) {
  try {
    let r = `ps -o command= -p ${String(e)}`, i = zqn(r, {
      timeout: 1e3
    });
    return i ? i.trim() : null;
  } catch {
    return null;
  }
}

function XBe(e) {
  try {
    {
      let r = se().readFileSync(`/proc/${e}/stat`, {
        encoding: "utf8"
      });
      return BU(r);
    }
    let n = zqn(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, {
      timeout: 1e3
    });
    return n ? n.trim() : void 0;
  } catch {
    return;
  }
}

function Y2n(e, n) {
  if (n === void 0) return !0;
  return g(n, XBe(e));
}

function Cve(e, n) {
  if (n === e) return !0;
  return !1;
}

function g(e, n) {
  return n === void 0 || n === e || x(e, n);
}

function x(e, n) {
  if (!f()) return !1;
  let r = Number(e), i = Number(n);
  return Number.isFinite(r) && Number.isFinite(i) && r > 3e17 !== i > 3e17;
}

async function Ev(e, n) {
  if (n === void 0) return !0;
  return g(n, await Ul(e));
}

async function gh(e, n) {
  let r = await Ul(e, {
    skipCache: !0
  });
  return r === void 0 ? void 0 : Cve(n, r);
}

class w {
  #e=void 0;
  get token() {
    return this.#e;
  }
  set(e) {
    return this.#e = e, e;
  }
  reset() {
    this.#e = void 0;
  }
}

var Rie = new w;

class T {
  #e=new Map;
  get(e) {
    return this.#e.get(e);
  }
  set(e, n) {
    this.#e.set(e, n);
  }
}

var I = new K(() => new T);

function xie() {
  return Rie.token ?? Rie.set(XBe(process.pid));
}

var F = 1e3;

async function d_() {
  return Rie.token ?? await We(Ul(process.pid).then(e => Rie.token ?? Rie.set(e)), F);
}

function K0(e) {
  if (f()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}

function eee(e) {
  return f() ? {
    procStart: void 0,
    procStartFt: e
  } : {
    procStart: e,
    procStartFt: void 0
  };
}

var A = 6e4, N = 5e3;

async function Ul(e, n) {
  let r = Date.now(), i = I.of(B().host);
  if (n?.env !== void 0) return S(e, n.env);
  if (!n?.skipCache) {
    let a = i.get(e), l = a?.miss ? N : A;
    if (a && r - a.at < l) return a.p;
  }
  let s = S(e), o = {
    at: r,
    p: s
  };
  i.set(e, o);
  let u = await s;
  if (u === void 0 && i.get(e) === o) o.miss = !0, o.at = Date.now();
  return u;
}

var P = 250, h = 2500;

async function JBe(e) {
  let n = Date.now() + h, r = !1, i = await We(Ul(e, {
    skipCache: !0
  }).finally(() => {
    r = !0;
  }), h);
  if (i !== void 0 || !r) return i;
  let s = P + Math.floor(Math.random() * P), o = n - Date.now() - s;
  if (o <= 0) return;
  return await J(s), We(Ul(e, {
    skipCache: !0
  }), o);
}

function L(e) {
  let n = tJe(bl(e, "PATH") ?? "").split(d);
  return n.filter(i => /^\/bin\/*$/.test(i)).join(d);
}

async function S(e, n) {
  let r = n === void 0 ? {} : {
    env: n,
    extendEnv: !1
  };
  try {
    {
      let o = await se().readFile(`/proc/${e}/stat`, {
        encoding: "utf8"
      });
      return BU(o);
    }
    let i = n === void 0 ? "ps" : bme("ps", L(n));
    if (i === null) return;
    let s = await ft(i, [ "-o", "lstart=", "-p", String(e) ], {
      timeout: 1e3,
      ...r,
      env: {
        ...n ?? process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    return s.code === 0 && s.stdout ? s.stdout.trim() : void 0;
  } catch {
    return;
  }
}

async function Q8e(e) {
  try {
    {
      let i = await se().readFile(`/proc/${e}/stat`, {
        encoding: "utf8"
      }), s = Number(BU(i)), o = await se().readFile("/proc/stat", {
        encoding: "utf8"
      }), u = Number(/^btime (\d+)/m.exec(o)?.[1]);
      if (!Number.isFinite(s) || !Number.isFinite(u)) return null;
      return u * 1e3 + s / 100 * 1e3;
    }
    let n = await ft("ps", [ "-o", "lstart=", "-p", String(e) ], {
      timeout: 1e3,
      env: {
        ...process.env,
        LC_ALL: "C",
        TZ: "UTC"
      }
    });
    if (n.code !== 0 || !n.stdout?.trim()) return null;
    let r = Date.parse(`${n.stdout.trim()} UTC`);
    return Number.isFinite(r) ? r : null;
  } catch {
    return null;
  }
}

export { bl, uPr, CCo, pPr, kve, pfe, Xf, YBe, Tve, ffe, Ave, RCo, xCo, q2n, PCo, XBe, Y2n, Cve, Ev, gh, Rie, xie, d_, K0, eee, Ul, JBe, Q8e };
