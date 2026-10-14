// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E } from "./chunk-b0z4bv3v.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { e$, tA, c0t, Zz, k } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { pi } from "./chunk-s2t7g8m9.js";

import { tI, Yh, Cie } from "./chunk-3kb22va7.js";

import { ro } from "./chunk-n3526wzr.js";

import { YZ, qHs } from "./chunk-9nqgkt3n.js";

import { Ni } from "./chunk-tzmg667a.js";

import { Bg, jQt, x7, C8 } from "./chunk-7w62r1zx.js";

var M = 16, Y = 64;

function P(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "", i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid;
}

function L(e, n, s) {
  return n.filter(i => i.pid !== s && i.name !== void 0 && i.procStart !== void 0 && ro(i.name) === e);
}

function D(e) {
  return new Set(e.flatMap(n => n.name === void 0 ? [] : [ ro(n.name) ]));
}

function O(e, n, s = YZ) {
  let i = r => `${ne(e, tI - r.length - 1)}-${r}`;
  for (let r = 0; r < M; r++) {
    let o = i(s());
    if (!n.has(ro(o))) return o;
  }
  for (let r = 2; ;r++) {
    let o = i(`${s()}-${r}`);
    if (!n.has(ro(o))) return o;
  }
}

function F(e) {
  let {desiredName: n, self: s, live: i, moment: r, slug: o} = e, d = e.suffixBase ?? n, p = ro(n);
  if (!p) return {
    kind: "keep"
  };
  let c = L(p, i, s.pid), a = r === "rename" ? c : r === "startup" ? c.filter(u => P(u, s)) : c.filter(u => P({
    ...u,
    startedAt: u.nameSince ?? u.startedAt
  }, {
    ...s,
    startedAt: s.nameSince ?? s.startedAt
  }));
  if (a.length === 0) return {
    kind: "keep"
  };
  return {
    kind: "yield",
    newName: O(d, D(i), o),
    holders: a
  };
}

class b {
  correspondents=new Map;
  senderMode=null;
  userTypedName=void 0;
  hasAdopter=!1;
  lastYield=void 0;
  yielded=Me();
  pendingYield=void 0;
  noteCorrespondent(e, n, s) {
    if (!e || Yh(e).scheme !== "uds") return;
    if (this.correspondents.delete(e), this.correspondents.set(e, {
      pid: n,
      procStart: s
    }), this.correspondents.size > Y) {
      let i = this.correspondents.keys().next().value;
      if (i !== void 0) this.correspondents.delete(i);
    }
  }
  announceYield(e, n) {
    this.pendingYield = [ e, n ], this.yielded.emit(e, n);
  }
  reset() {
    this.correspondents.clear(), this.lastYield = void 0, this.yielded.clear(), this.pendingYield = void 0, 
    this.senderMode = null, this.userTypedName = void 0, this.hasAdopter = !1;
  }
}

var U = new K(() => new b);

function ZE() {
  return U.of(B().host);
}

function Uio() {
  let e = tA();
  return e !== void 0 && (e.source === "user" || e.source === "collision") && ZE().userTypedName === e.name ? e.name : void 0;
}

function Bio(e, n, s) {
  ZE().noteCorrespondent(e, n, s);
}

function Egr() {
  let e = ZE(), n = e.pendingYield;
  return e.pendingYield = void 0, n;
}

var v = {
  whenRegistered: c0t,
  listLive: x7
};

function x() {
  return k("tengu_session_name_uniqueness", !0);
}

async function G9t(e, n, s = v, i = e) {
  if (!x()) return {
    name: e,
    yielded: !1
  };
  if (i = N(i) ?? i, !await s.whenRegistered()) return {
    name: e,
    yielded: !1
  };
  try {
    let r = await s.listLive(), o = r.find(a => a.pid === process.pid);
    if (!o) return {
      name: e,
      yielded: !1
    };
    let d = F({
      desiredName: e,
      self: o,
      live: r,
      moment: n,
      slug: s.slug,
      suffixBase: i
    });
    if (d.kind === "keep") return {
      name: e,
      yielded: !1
    };
    let p = z(e, o), c = pi(p !== void 0 && ro(p) !== ro(e) ? p : d.newName) || d.newName;
    return t(`[session-name] "${e}" is held by live pid ${d.holders[0]?.pid}; this session takes "${c}"`, {
      level: "info"
    }), g("session_name_collision"), ZE().lastYield = {
      base: ro(i),
      name: c
    }, {
      name: c,
      yielded: !0
    };
  } catch (r) {
    return t(`[session-name] uniqueness check failed, keeping "${e}": ${l(r)}`, {
      level: "warn"
    }), m("session_name_collision", "check_failed"), {
      name: e,
      yielded: !1
    };
  }
}

function z(e, n) {
  let s = N4e(e, n.name);
  if (s !== void 0) return s;
  let i = n.name, r = i === void 0 ? void 0 : A(i);
  if (i === void 0 || r === void 0) return;
  let o = N(e) ?? e, d = ne(o, tI - r.suffix.length - 1);
  return r.base.toLowerCase() === d.toLowerCase() ? i : void 0;
}

function A(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !qHs(n[1].toLowerCase())) return;
  let s = e.slice(0, e.length - n[0].length);
  return s.length > 0 ? {
    base: s,
    suffix: n[0].slice(1)
  } : void 0;
}

function N4e(e, n) {
  if (!x()) return;
  let s = ZE().lastYield, i = N(e) ?? e;
  return s !== void 0 && n !== void 0 && ro(s.name) === ro(n) && s.base === ro(i) ? n : void 0;
}

function w(e) {
  let n = tA();
  return n !== void 0 && ro(n.name) === ro(e);
}

function N(e) {
  return A(e)?.base;
}

var I = 3e3;

function T(e) {
  setTimeout(e, I).unref();
}

async function jio(e) {
  let {sessionNameArg: n, interactive: s, writeName: i, onRenamed: r, deps: o} = e, d = e.scheduleRecheck ?? T;
  if (n && s) ZE().userTypedName = n;
  if (n) await i(n, e.sessionNameArgSource ?? "user");
  let p = tA();
  if (!s || !p || p.source === "derived") return;
  let c = async (a, u, S = a) => {
    if (u && !w(a)) return;
    let f = await G9t(a, u ? "recheck" : "startup", o, S);
    if (!w(a)) return;
    if (!f.yielded) {
      if (!u) d(() => void c(a, !0));
      return;
    }
    if (ZE().userTypedName === a) ZE().userTypedName = f.name;
    if (await i(f.name, "collision"), r?.(f.name, a), ZE().announceYield(f.name, a), 
    !u) d(() => void c(f.name, !0, a));
  };
  await c(p.name, !1);
}

function BHn(e) {
  let {name: n, onYield: s, deps: i} = e, r = e.suffixBase ?? n;
  (e.scheduleRecheck ?? T)(() => {
    (async () => {
      if (!w(n)) return;
      let d = await G9t(n, "recheck", i, r);
      if (!d.yielded || !w(n)) return;
      if (ZE().userTypedName === n) ZE().userTypedName = d.name;
      await s(d.name, n);
    })();
  });
}

function kgr(e, n, s) {
  let i = tA();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && N4e(e?.name ?? n, i.name) !== void 0) return;
  let r = ro(i.name);
  if (e !== void 0 && r === ro(e.name) || r === ro(n) || r === ro(s)) return;
  return i;
}

async function fbe(e, n, s = {}) {
  let i = s.deps ?? v, r = e ? pi(e) : "";
  if (!r) return;
  let o = e$(), d = o.adoptions, p = ++o.restores, c = () => o.adoptions === d && (!s.yieldToLaterRestore || o.restores === p);
  if (!await i.whenRegistered() || !c()) return;
  if (s.autoOnly) {
    await Zz(r, n, "auto");
    return;
  }
  let a = tA();
  if (a !== void 0 && a.source !== "auto" && a.source !== "derived" && ro(a.name) === ro(r)) return;
  let u = await G9t(r, "rename", i);
  if (!c() || kgr(a, r, u.name)) return;
  let S = async (f, h) => {
    await Zz(f, n, "collision"), ZE().announceYield(f, h);
  };
  if (!u.yielded) {
    await Zz(r, n, s.source), BHn({
      name: r,
      deps: i,
      onYield: S
    });
    return;
  }
  if (await Zz(u.name, n, "collision"), ZE().userTypedName === r) ZE().userTypedName = u.name;
  if (BHn({
    name: u.name,
    suffixBase: r,
    deps: i,
    onYield: S
  }), u.name === a?.name) return;
  ZE().announceYield(u.name, r);
}

async function Wio(e, n, s, i, r = jQt, o = v.listLive) {
  if (!x() || !Ni() || ZE().correspondents.size === 0) return;
  let d = C8(), [p, c, a] = [ e, n, s ].map(pi), u = `This session was renamed from "${p}" to "${c}" ("${a}" is held by another live session on this machine). Address this one as "${c}" from now on.`, S;
  try {
    S = new Map((await o(i)).map(f => [ f.pid, f.sock ]));
  } catch (f) {
    t(`[session-name] rename notice skipped: registry unreadable (${E(f) ?? l(f)})`);
    return;
  }
  await Promise.all([ ...ZE().correspondents ].map(async ([f, {pid: h, procStart: C}]) => {
    let {scheme: R, target: y} = Yh(f);
    if (R !== "uds" || !y || d !== void 0 && Cie(y, d) || S.get(h) !== y) return;
    try {
      await r(y, u, i, c, void 0, void 0, ZE().senderMode?.(), {
        trackReceipts: !1,
        expectPeerPid: h,
        ...C !== void 0 && {
          expectPeerProcStart: C
        }
      });
    } catch (_) {
      t(`[session-name] rename notice to ${Bg(f)} failed: ${E(_) ?? "send error"}`);
    }
  }));
}

export { ZE, Uio, Bio, Egr, G9t, N4e, jio, BHn, kgr, fbe, Wio };
