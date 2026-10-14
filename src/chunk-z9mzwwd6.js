// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mr, Fe } from "./chunk-0cdqg49t.js";

import { E, W } from "./chunk-b0z4bv3v.js";

import { Uf, Zc } from "./chunk-am6xk4a3.js";

import { cn, ds } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { llt, nk, Poe, s5e, hue, Jk, lH, w8, kN } from "./chunk-7j9be257.js";

import { Xa } from "./chunk-3kb22va7.js";

import { i0, KQ, m4e } from "./chunk-z09tf6qf.js";

import { so } from "./chunk-3ykz5st8.js";

import { Tve, ffe, JBe } from "./chunk-znhtg8e4.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { O } from "./chunk-1xnsr4dy.js";

import { we } from "./chunk-m8ez8fhk.js";

var h = we(vy(), 1), T = [ "dev", "engine" ];

function ZQe(n) {
  return T.find(e => n.includes(`-${e}.`)) ?? null;
}

function xBt(n) {
  return ZQe(n) !== null;
}

function e7e(n, e) {
  if (!n) return !1;
  let r = ZQe(n), t = ZQe(e);
  return r !== null && t !== null && r !== t;
}

function t7e(n) {
  let e;
  for (let f of n.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g)) e = f;
  let r = e?.[1], t = e?.[2];
  if (!r || !t) return null;
  let o = Date.UTC(Number(r.slice(0, 4)), Number(r.slice(4, 6)) - 1, Number(r.slice(6, 8)), Number(t.slice(0, 2)), Number(t.slice(2, 4)), Number(t.slice(4, 6)));
  return new Date(o).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") === `${r}t${t}` ? o : null;
}

function ajo(n, e) {
  let r = t7e(n), t = t7e(e);
  return r !== null && t !== null && t < r;
}

function Nyt(n, e) {
  let r = t7e(n), t = t7e(e);
  if (r !== null && t !== null) {
    if (ZQe(n) !== ZQe(e)) return !1;
    return r > t;
  }
  if (xBt(n) || xBt(e)) return !1;
  return h.valid(n) !== null && h.valid(e) !== null && h.gt(n, e);
}

function B3n(n, e, r) {
  if (!n) return !1;
  if (n === r) return !0;
  let t = t7e(n);
  if (t !== null) return t >= e.commitMs;
  if (xBt(n)) return !1;
  return h.valid(n) !== null && h.gte(n, e.release);
}

var w = new Set([ 1e3, 1002, 1003, 1004, 1006, 2004, 2031 ]), B = /\x1b\[\?([\d;]+)([hl])/g;

function PBt() {
  let n = new Set, e = "";
  return {
    feed(r, t) {
      let o = e ? e + r : r, a = 0, c = !1;
      for (let m of o.matchAll(B)) {
        let k = m[2] === "h";
        for (let s of m[1].split(";")) {
          let i = Number(s);
          if (w.has(i) && n.has(i) !== k) {
            if (k) n.add(i), t?.(i); else n.delete(i);
            c = !0;
          }
        }
        a = m.index + m[0].length;
      }
      let f = o.slice(Math.max(a, o.length - 16)), y = f.lastIndexOf("\x1b");
      return e = y >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(y)) ? f.slice(y) : "", 
      c;
    },
    seed(r) {
      for (let t of r) if (w.has(t)) n.add(t);
    },
    snapshot() {
      return [ ...n ];
    }
  };
}

import { lstat as A, readdir as P, unlink as p } from "fs/promises";

import { connect as x } from "net";

import { basename as S, join as b } from "path";

async function j3n(n, e) {
  if (e.launch.mode !== "exec" || !n) return null;
  try {
    let r = await Xa(w8(n), 8192);
    if (r == null) return null;
    let t = JSON.parse(r);
    if (typeof t?.code !== "number") return null;
    let o = cn(typeof t.tail === "string" ? t.tail : "").replace(/\r\n?/g, `\n`).split(`\n`).findLast(y => y.trim())?.trim() ?? "", a = Zc(ds(o), Uf);
    if (t.code === 0) return {
      state: "done",
      detail: a || "(no output)",
      code: 0
    };
    let c = typeof t.signal === "string" ? t.signal : void 0;
    if (c === "SIGINT" || c === "SIGQUIT") return {
      state: "stopped",
      detail: "stopped",
      code: t.code
    };
    let f = c ? `${c} (${t.code})` : `exit ${t.code}`;
    return {
      state: "crashed",
      detail: a ? `${f} \u2014 ${a}` : f,
      signal: c,
      code: t.code
    };
  } catch {
    return null;
  }
}

async function aFr(n = {}, e) {
  return so("daemon_bg_reap_all", async () => {
    let r = await i0({
      silent: !0
    }, e), t = new Map;
    for (let [s, i] of Object.entries(r.workers)) t.set(s, {
      pid: i.pid,
      procStart: i.procStart,
      ptySock: i.ptySock,
      dispatch: i.dispatch,
      replPid: i.replPid,
      replProcStart: i.replProcStart
    });
    let o = O() === "windows", [a, c] = o ? [ s5e(), ".pid" ] : [ llt(), ".sock" ], f = o && e ? await lFr(e) : await P(a).catch(() => []), y = new Set(f.filter(s => s.endsWith(c)));
    for (let s of f) {
      if (!s.endsWith(c)) {
        if (!o) {
          let l = [ ".err", ".late", ".exec-exit", ".err.read" ].find(g => s.endsWith(`.sock${g}`));
          if (l && !y.has(s.slice(0, -l.length))) {
            let g = s.slice(0, -`.sock${l}`.length);
            if (!(l === ".exec-exit" && t.has(g))) await p(b(a, s)).catch(() => {});
          }
        }
        continue;
      }
      let i = s.slice(0, -c.length);
      if (t.has(i)) continue;
      let u = o ? Number((e ? await dFr(e, i) : await Xa(hue(i), IBt)) ?? "0") : 0;
      t.set(i, {
        pid: u,
        ptySock: nk(i)
      });
    }
    if (!o) {
      let s = new Set;
      for (let u of t.values()) if (u.ptySock) s.add(u.ptySock);
      let i = await P(Poe()).catch(() => []);
      for (let u of i) {
        if (!u.endsWith(".pty.sock")) continue;
        let l = b(Poe(), u);
        if (s.has(l)) continue;
        t.set(`spare:${u}`, {
          pid: 0,
          ptySock: l
        });
      }
    }
    let m = 0, k = new Set;
    if (await Promise.all(Array.from(t.entries()).map(async ([s, i]) => {
      let u = i.dispatch ? await j3n(i.ptySock, i.dispatch) : null;
      if (i.ptySock && await aze(i.ptySock, e)) m++; else if (i.pid) {
        let l = await cFr(i.pid, i.procStart), g = l !== "unverified" && await ffe(i.replPid, i.replProcStart);
        switch (l) {
         case "killed":
          m++;
          break;

         case "unverified":
          k.add(s);
          return;

         case "gone":
         case "foreign":
          if (g) m++;
          break;

         default:
        }
      }
      if (!s.startsWith("spare:")) {
        let l = {
          state: "stopped",
          detail: "stopped"
        }, g = u?.state === "done" ? u : n.supervisorKilledAll ? l : u ?? l;
        if (await m4e(s, g.state, g.detail, void 0, e), o && e) await e.delete(Fe.daemon([ "pty-pids", S(w8(i.ptySock ?? nk(s))) ])).catch(() => {}); else await p(w8(i.ptySock ?? nk(s))).catch(() => {});
      }
      if (o) if (e) await N(e, s); else {
        await p(hue(s)).catch(() => {});
        let l = Jk(nk(s));
        await p(l).catch(() => {}), await p(`${l}.read`).catch(() => {}), await p(lH(nk(s))).catch(() => {});
      }
    })), t.size > 0) await KQ(s => {
      for (let i of t.keys()) if (!k.has(i)) delete s.workers[i];
    }, e).catch(d);
    return {
      reaped: m,
      kept: k.size
    };
  });
}

async function lFr(n) {
  let e = [], r;
  do {
    let t = await n.listEntries({
      namespace: "daemon",
      relPath: [ "pty-pids" ]
    }, {
      cursor: r,
      skipKeyStats: !0,
      skipScopeStats: !0
    }).catch(() => {});
    if (t === void 0 || !t.ok) return [];
    for (let o of t.value.items) if (o.kind === "key" && o.key.namespace === "daemon") {
      let a = o.key.relPath.at(-1);
      if (a !== void 0 && o.key.relPath.length === 2 && mr(a)) e.push(a);
    }
    r = t.value.cursor;
  } while (r !== void 0);
  return e;
}

var IBt = 4096;

async function C(n) {
  try {
    let e = await A(hue(n));
    return !e.isFile() || e.size > IBt;
  } catch (e) {
    return !W(e);
  }
}

async function dFr(n, e) {
  if (await C(e)) return null;
  let r = await n.readText([ {
    key: Fe.daemon([ "pty-pids", `${e}.pid` ]),
    offset: 0,
    length: IBt + 1
  } ]).catch(() => {});
  if (r === void 0 || !r.ok) return null;
  let t = r.value.items[0];
  if (!t.found || t.totalBytes > IBt) return null;
  return t.value;
}

async function N(n, e) {
  await n.delete(Fe.daemon([ "pty-pids", `${e}.pid` ])).catch(() => {}), await v(n, nk(e));
}

async function v(n, e) {
  let r = Jk(e);
  for (let t of [ S(r), `${S(r)}.read`, S(lH(e)) ]) await n.delete(Fe.daemon([ "pty-pids", t ])).catch(() => {});
}

function aze(n, e) {
  return new Promise(r => {
    let t = !1, o = c => {
      if (t) return;
      t = !0, r(c);
    }, a = x(n);
    a.unref(), a.setTimeout(2e3, () => {
      a.destroy(), o(!1);
    }), a.on("error", () => {
      p(n).catch(() => {});
      let c = Jk(n);
      if (e && O() === "windows") v(e, n).catch(() => {}); else p(c).catch(() => {}), 
      p(`${c}.read`).catch(() => {}), p(lH(n)).catch(() => {});
      o(!1);
    }), a.once("connect", () => {
      a.resume(), a.write(kN({
        t: "kill",
        sig: "SIGTERM"
      }));
    }), a.once("close", () => o(!0));
  });
}

function Bfn(n) {
  return new Promise(e => {
    let r = !1, t = a => {
      if (r) return;
      r = !0, e(a);
    }, o = x(n);
    o.unref(), o.setTimeout(250, () => {
      o.destroy(), t(!1);
    }), o.on("error", () => t(!1)), o.once("connect", () => {
      o.end(kN({
        t: "pong"
      })), t(!0);
    });
  });
}

async function cFr(n, e) {
  try {
    process.kill(n, 0);
  } catch (t) {
    if (E(t) !== "ESRCH") return "foreign";
    return Tve([ -n, n ], e) ? "killed" : "gone";
  }
  if (e === void 0) return "foreign";
  let r = await JBe(n);
  if (r === void 0) return "unverified";
  if (r !== e) return "foreign";
  return Tve([ -n, n ], e) ? "killed" : "gone";
}

export { ZQe, xBt, e7e, t7e, ajo, Nyt, B3n, PBt, j3n, aFr, lFr, IBt, dFr, aze, Bfn, cFr };
