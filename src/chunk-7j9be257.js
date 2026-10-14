// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E, W } from "./chunk-b0z4bv3v.js";

import { lo } from "./chunk-ddr690nj.js";

import { _, Y, se } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Tn, iD } from "./chunk-30n0xq4e.js";

import { a } from "./chunk-j016gcgm.js";

import { qBe } from "./chunk-1tdw23h1.js";

import { O } from "./chunk-1xnsr4dy.js";

import { createHash as K, randomBytes as x } from "crypto";

import { lstatSync as j, mkdirSync as z, readFileSync as V, rmSync as X, writeFileSync as H } from "fs";

import { chmod as b, lstat as l, mkdir as d, readdir as y, readFile as F, rm as R, utimes as G } from "fs/promises";

import { connect as J } from "net";

import { basename as q, dirname as I, join as i, resolve as Q } from "path";

import { readFile as k } from "fs/promises";

var m = 65534, M = new Set([ "/", "/dev", "/dev/shm", "/run", "/run/user", "/tmp", "/var", "/var/tmp", "/var/run", "/home", "/var/home", "/root", "/var/roothome", "/mnt", "/mnt/wslg" ]);

function J_s() {
  return M;
}

async function N() {
  try {
    return P(await k("/proc/self/uid_map", "utf8"));
  } catch {
    return;
  }
}

function P(e) {
  let t = [];
  for (let n of e.split(`\n`)) {
    if (n.trim() === "") continue;
    let r = n.trim().split(/\s+/), o = Number(r[0]), s = Number(r[1]), u = Number(r[2]);
    if (r.length !== 3 || !Number.isSafeInteger(o) || o < 0 || !Number.isSafeInteger(s) || s < 0 || !Number.isSafeInteger(u) || u <= 0) return;
    t.push({
      innerStart: o,
      hostStart: s,
      count: u
    });
  }
  return t;
}

function h(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}

async function S() {
  try {
    return D(await k("/proc/sys/kernel/overflowuid", "utf8"));
  } catch {
    return;
  }
}

function D(e) {
  let t = e.trim();
  if (!/^\d+$/.test(t)) return;
  let n = Number(t);
  return Number.isSafeInteger(n) ? n : void 0;
}

function A(e, t) {
  if (e.length === 0 || t === void 0) return;
  return e.some(r => t >= r.innerStart && t < r.innerStart + r.count) ? void 0 : t;
}

async function Q_s() {
  let e = process.getuid?.(), t = await N();
  if (t === void 0) {
    let n = await S() ?? m;
    return e === n ? {
      unmappedOwnerUid: void 0,
      uidCollapses: !0,
      rootUidAmbiguous: n === 0
    } : void 0;
  }
  if (h(t)) return;
  return B(t, e);
}

async function B(e, t) {
  let n = await S(), r = n ?? m;
  return {
    unmappedOwnerUid: A(e, n),
    uidCollapses: e.length === 0 || t !== void 0 && t === r,
    rootUidAmbiguous: n === 0
  };
}

async function hQt() {
  let e = process.getuid?.();
  if (e === void 0) return;
  let t = await N();
  if (t === void 0) return;
  if (h(t)) return e;
  let n = await S() ?? m;
  if (t.length === 0 || e === n) return;
  if ((s => t.some(u => s >= u.innerStart && s < u.innerStart + u.count))(n)) return e;
  let o = t.find(s => e >= s.innerStart && e < s.innerStart + s.count);
  return o === void 0 ? void 0 : o.hostStart + (e - o.innerStart);
}

function sbr() {
  return qBe.uidsCollapse ??= L(se()), qBe.uidsCollapse;
}

function L(e) {
  let t = process.getuid?.(), n;
  try {
    let s = e.readFileSync("/proc/self/uid_map", {
      encoding: "utf8"
    });
    n = P(s);
  } catch {
    n = void 0;
  }
  let r;
  try {
    let u = e.readFileSync("/proc/sys/kernel/overflowuid", {
      encoding: "utf8"
    });
    r = D(u);
  } catch {
    r = void 0;
  }
  let o = r ?? m;
  if (n === void 0) return t === o;
  if (h(n)) return !1;
  return n.length === 0 || t !== void 0 && t === o;
}

function c() {
  return i(Ee(), "daemon");
}

function Z() {
  return K("sha256").update(Q(Ee())).digest("hex").slice(0, 8);
}

function qRe() {
  let e = process.getuid?.() ?? 0, t = a.TERMUX_VERSION && a.PREFIX ? i(a.PREFIX, "tmp") : "/tmp";
  return i(t, `cc-daemon-${e}`, Z());
}

var ee = /^[a-f0-9]{16}$/;

function Mpo() {
  return i(c(), "pipe.key");
}

var te = lo(() => {
  let e = Mpo();
  for (let t = 0; t < 8; t++) {
    let n;
    try {
      let o = j(e);
      if (!o.isFile() || o.size > 4096) {
        try {
          X(e, {
            recursive: !0,
            force: !0
          });
        } catch {}
        n = "invalid";
      } else n = V(e, "utf8").trim();
    } catch (o) {
      if (!W(o)) throw o;
    }
    if (n !== void 0) {
      if (ee.test(n)) return n;
      if (n === "" && t < 3) continue;
      let o = x(8).toString("hex");
      return iD(e, o, 384), o;
    }
    let r = x(8).toString("hex");
    z(c(), {
      recursive: !0,
      mode: 448
    });
    try {
      return H(e, r, {
        flag: "wx",
        mode: 384
      }), r;
    } catch (o) {
      if (E(o) !== "EEXIST") throw o;
    }
  }
  throw Error("daemon pipe.key is not a valid nonce");
}, () => Ee());

function U(e) {
  return `\\\\.\\pipe\\cc-daemon-${te()}-${e}`;
}

function tk(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}

function WPt(e) {
  if (e instanceof Error) {
    if (e.message = tk(e.message), typeof e.stack === "string") e.stack = tk(e.stack);
  }
  return e;
}

function ONn() {
  return i(c(), "control.key");
}

async function Z_s() {
  let e = ONn();
  try {
    let n = await l(e);
    if (n.isFile() && n.size <= 4096) {
      let r = (await F(e, "utf8")).trim();
      if (r) return r;
    } else await R(e, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  } catch (n) {
    if (!W(n)) throw n;
  }
  let t = x(16).toString("hex");
  return await d(c(), {
    recursive: !0,
    mode: 448
  }), await Tn(e, t, 384), t;
}

async function YRe() {
  try {
    let e = await l(ONn());
    if (!e.isFile() || e.size > 4096) return;
    return (await F(ONn(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}

async function ebs() {
  let e = c();
  if (O() === "windows") {
    await d(e, {
      recursive: !0
    }), await b(e, 448).catch(() => {});
    return;
  }
  await d(e, {
    recursive: !0,
    mode: 448
  }), v();
  let t = process.getuid?.(), n = await l(e);
  if (t !== void 0 && n.uid !== t) throw Error(`refusing to use daemon dir: ${e} is owned by uid ${n.uid}`);
  if ((n.mode & 511) !== 448) await b(e, 448);
}

async function yQt() {
  if (O() === "windows") return;
  let e = qRe();
  await d(e, {
    recursive: !0,
    mode: 448
  });
  let t = new Date;
  await G(e, t, t).catch(() => {}), await T([ I(e), e ]);
}

var ibr = "ENOTOWNED";

async function T(e) {
  let t = process.getuid?.();
  v();
  for (let n of e) {
    let r = await l(n);
    if (t !== void 0 && r.uid !== t) throw Object.assign(Error(`refusing to bind: ${n} is owned by uid ${r.uid}`), {
      code: ibr
    });
    if ((r.mode & 511) !== 448) await b(n, 448);
  }
}

var Hpo = "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";

function v() {
  if (sbr()) throw Object.assign(Error(Hpo), {
    code: ibr
  });
}

async function tbs(e) {
  if (O() === "windows") {
    await d(e, {
      recursive: !0
    }).catch(() => {});
    return;
  }
  await yQt();
  let t = [ llt(), abr() ];
  for (let n of t) await d(n, {
    recursive: !0,
    mode: 448
  });
  if (!t.includes(e)) {
    if (await d(e, {
      recursive: !0,
      mode: 448
    }).then(() => !0, () => !1)) t.push(e);
  }
  await T(t);
}

function nbs() {
  if (O() === "windows") return;
  let e = qRe(), t = I(e), n = q(e);
  y(t, {
    withFileTypes: !0
  }).then(async r => {
    for (let o of r) {
      if (!o.isDirectory() || o.name === n) continue;
      let s = i(t, o.name);
      if (!await ne(i(s, "control.sock"))) continue;
      let u = await l(s).catch(() => null);
      if (!u || Date.now() - u.mtimeMs < 1e4) continue;
      let p = await y(i(s, "rv")).catch(() => []), g = await y(i(s, "pty")).catch(() => []), w = await y(i(s, "spare")).catch(() => []);
      if (p.length || g.length || w.length) continue;
      await R(s, {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }).catch(() => {});
}

function Dpo(e) {
  return e === "ENOENT" || e === "ECONNREFUSED" || e === "ENOTSOCK";
}

function ne(e) {
  let t, n = new Promise(o => {
    t = o;
  }), r = J(e);
  return r.setTimeout(1e3, () => {
    r.destroy(), t(!1);
  }), r.on("error", o => {
    t(Dpo(E(o)));
  }), r.once("connect", () => {
    r.end(`{"op":"ping"}\n`), t(!1);
  }), n;
}

function mue() {
  return i(c(), "dispatch");
}

function Lpo() {
  return i(c(), "dispatch", "rejected");
}

function BV() {
  return i(c(), "roster.json");
}

var MNn = "attach-journal";

function gue() {
  return i(c(), MNn);
}

function abr() {
  return i(qRe(), "rv");
}

function slt() {
  return i(c(), "auth");
}

function ilt(e) {
  return i(slt(), `${e}.json`);
}

function _Qt() {
  return i(c(), "host-managed");
}

function rSe(e) {
  return i(_Qt(), e);
}

function alt(e) {
  return i(slt(), `${e}.tokens.json`);
}

function bQt(e) {
  if (O() === "windows") return U(`rv-${e}`);
  return i(abr(), `${e}.sock`);
}

function llt() {
  return i(qRe(), "pty");
}

function nk(e) {
  if (O() === "windows") return U(`pty-${e}`);
  return i(llt(), `${e}.sock`);
}

function Poe() {
  return i(qRe(), "spare");
}

function rbs(e) {
  return i(Poe(), `${e}.pty.sock`);
}

function obs(e) {
  return i(Poe(), `${e}.claim.sock`);
}

function s5e() {
  return i(c(), "pty-pids");
}

function hue(e) {
  return i(s5e(), `${e}.pid`);
}

function Jk(e) {
  return C(e, "err");
}

function lH(e) {
  return C(e, "late");
}

function C(e, t) {
  if (O() === "windows") return i(s5e(), `${e.split("\\").pop()}.${t}`);
  return `${e}.${t}`;
}

function w8(e) {
  if (O() === "windows") return i(s5e(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}

function jV() {
  if (O() === "windows") return U("control");
  return v(), i(qRe(), "control.sock");
}

var dlt = 0, HNn = 1, SQt = 262144, f = 5, wQt = 1048576, XRe = 1e4;

function vQt(e) {
  let t = typeof e === "string" ? Buffer.from(e, "utf8") : e, n = Buffer.allocUnsafe(f + t.length);
  return n.writeUInt32BE(t.length, 0), n.writeUInt8(dlt, 4), t.copy(n, f), n;
}

function kN(e) {
  let t = Buffer.from(_(e), "utf8"), n = Buffer.allocUnsafe(f + t.length);
  return n.writeUInt32BE(t.length, 0), n.writeUInt8(HNn, 4), t.copy(n, f), n;
}

function DNn(e, t) {
  let n = Buffer.alloc(0), r = !1;
  return o => {
    if (r) return;
    n = n.length === 0 ? o : Buffer.concat([ n, o ]);
    while (n.length >= f) {
      let s = n.readUInt32BE(0);
      if (s > wQt) {
        r = !0, t(`frame too large (${s} > ${wQt})`);
        return;
      }
      let u = f + s;
      if (n.length < u) return;
      let p = n.readUInt8(4), g = n.subarray(f, u);
      if (n = n.subarray(u), p === dlt) e({
        kind: dlt,
        payload: Buffer.from(g)
      }); else if (p === HNn) {
        let w;
        try {
          w = Y(g.toString("utf8"));
        } catch {
          r = !0, t("bad ctrl json");
          return;
        }
        e({
          kind: HNn,
          ctrl: w
        });
      } else {
        r = !0, t(`unknown frame kind ${p}`);
        return;
      }
    }
  };
}

export { J_s, Q_s, hQt, sbr, qRe, Mpo, tk, WPt, ONn, Z_s, YRe, ebs, yQt, ibr, Hpo, tbs, nbs, Dpo, mue, Lpo, BV, MNn, gue, abr, slt, ilt, _Qt, rSe, alt, bQt, llt, nk, Poe, rbs, obs, s5e, hue, Jk, lH, w8, jV, dlt, HNn, SQt, wQt, XRe, vQt, kN, DNn };
