// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lv } from "./chunk-zqby5cq4.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { ke, Ir, Kp, Qr, fc } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b } from "./chunk-hwdwjvh8.js";

import { Je, j, l } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Rf, bt, se, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { pr, Bs } from "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import { SQ, FB, aR, XD, bno, MCt, vCe, pV, ods, oMn } from "./chunk-84yp45y8.js";

import { S1 } from "./chunk-t70vnbgq.js";

import { D } from "./chunk-hmqkrrtz.js";

import * as k from "path";

var ae = 1e3, le = 500, ce = 300, ue = 2e3, X = 3e4, de = 6e4, U = "<skill-watcher-idle-wake>", Z = 1e4, fe = 2e3, K = !0;

async function he(o) {
  let s = await vCe(Ir(), o), n = ke(), w = n !== Ir() ? await vCe(n, o) : [], m = new Map;
  for (let g of [ ...s, ...w ]) m.set(g.name, g.type === "prompt" ? g.contentHash ?? "" : "");
  return m;
}

function me(o) {
  let s = o?.stabilityThreshold ?? ae, n = o?.pollInterval ?? le, w = o?.reloadDebounce ?? ce, m = o?.chokidarInterval ?? ue, g, _ = o?.getFingerprint ?? (() => he(g)), E = o?.now ?? Date.now, A = o?.lastInteractionTime ?? Kp, p = Me(), T = FB.subscribe(() => p.emit()), e = null, c = null, P = null, B = !1, v = [], L = 0, G = new Set, y = null, H = !1, S = !1, F = null, R = null, N;
  async function te(r, a) {
    if (H || S) return;
    if (H = !0, N = r, g = a, !F) F = ods(() => {
      aR(), p.emit();
    });
    let f = ++L, u = await V(a);
    if (S || f !== L) return;
    if (v = u, v.length === 0) return;
    if (y = await _().catch(() => null), S || f !== L) return;
    t(`Watching for changes in skill/command directories: ${v.join(", ")}...`), e = W(m);
    let C = e;
    if (await new Promise(h => C.once("ready", () => h())), K) P = setInterval(x, Z), 
    P.unref?.();
    R = bt(O);
  }
  function W(r) {
    let a = lv.watch(v, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 2,
      awaitWriteFinish: {
        stabilityThreshold: s,
        pollInterval: n
      },
      ignored: (f, u) => {
        if (u && !u.isFile() && !u.isDirectory() && !u.isSymbolicLink()) return !0;
        if (f.split(/[/\\]/).some(C => C === ".git")) return !0;
        if (u?.isFile()) return !f.endsWith(".md");
        return !1;
      },
      ignorePermissionErrors: !0,
      usePolling: K,
      interval: r,
      binaryInterval: r,
      atomic: !0
    });
    return a.on("add", Y), a.on("change", Y), a.on("unlink", Y), a.on("error", f => t(`[skills] watcher error: ${l(f)}`, {
      level: "warn"
    })), a;
  }
  function x() {
    if (S || !e) return;
    let r = E() - A() > de;
    if (r === B) return;
    B = r;
    let a = r ? X : m;
    if (t(`[skills] ${r ? "idle" : "active"} \u2014 switching poll interval to ${a}ms`), 
    e.close(), e = W(a), !r) q(U);
  }
  async function ne() {
    if (!H || S) return;
    let r = await V(g);
    if (S) return;
    let a = D([ ...v, ...r ]);
    if (a.length === v.length) return;
    let f = ++L;
    if (v = a, t(`[skills] session moved \u2014 watching skill/command directories: ${v.join(", ")}`), 
    e) e.close();
    e = W(B ? X : m);
    let u = e, C = new Promise(h => u.once("ready", () => h()));
    if (await Promise.race([ C, J(fe, void 0, {
      unref: !0
    }) ]), S || f !== L) return;
    if (K && P === null) P = setInterval(x, Z), P.unref?.();
    R ??= bt(O);
  }
  function O() {
    if (S = !0, R) R(), R = null;
    if (F) F(), F = null;
    if (P) clearInterval(P), P = null;
    let r = Promise.resolve();
    if (e) r = e.close(), e = null;
    if (c) clearTimeout(c), c = null;
    return G.clear(), T(), p.clear(), r;
  }
  function Y(r) {
    t(`Detected skill change: ${r}`), i("tengu_skill_file_changed", {
      source: b("chokidar")
    }), q(r);
  }
  function q(r) {
    if (G.add(r), c) clearTimeout(c);
    c = setTimeout(async () => {
      c = null;
      let a = [ ...G ];
      G.clear();
      let f = a.length === 1 && a[0] === U;
      if (!f) {
        let h = a.find(I => I !== U) ?? a[0];
        if (await ie(h)) {
          t(`ConfigChange hook blocked skill reload (${a.length} paths)`);
          return;
        }
      }
      pV();
      let u = await _().catch(() => null);
      if (u === null) {
        XD(), SQ(), Q();
        return;
      }
      let C = y !== null && u.size === y.size && [ ...y ].every(([h, I]) => u.get(h) === I);
      if (C && f) {
        SQ();
        return;
      }
      if (XD(), SQ(), await oMn().catch(h => t(`[skills] re-reading the moved directory's skills failed: ${l(h)}`, {
        level: "warn"
      })), C) t(`[skills] ${a.length} fs event(s) but skill list unchanged \u2014 skipping re-announce`); else {
        if (y !== null) {
          let h = [ ...y ].filter(([I, oe]) => u.get(I) !== oe).map(([I]) => I);
          if (h.length > 0) bno(h);
        }
        y = u;
      }
      Q();
    }, w);
  }
  function ie(r) {
    if (!N) return d(Error("skillChangeDetector: ConfigChange hook gate not wired")), 
    Promise.resolve(!0);
    return N("skills", r);
  }
  function Q() {
    try {
      p.emit();
    } catch (r) {
      for (let a of r instanceof AggregateError ? r.errors : [ r ]) d(Je(j(a), "skillChangeDetector: subscriber threw during reload"));
    }
  }
  function re() {
    if (S) return;
    T(), T = FB.subscribe(() => p.emit());
  }
  return {
    initialize: te,
    dispose: O,
    rehome: ne,
    [Symbol.asyncDispose]: O,
    subscribe: p.subscribe,
    rebridgeSkillsChanged: re,
    _checkIdleTransitionForTest: x
  };
}

var One = me();

async function V(o) {
  let s = se(), n = [], w = MCt("userSettings", "skills");
  if (w) try {
    await s.stat(w), n.push(w);
  } catch {}
  if (w) {
    let e = k.join(w, S1);
    try {
      await s.stat(e), n.push(e);
    } catch {}
  }
  let m = MCt("userSettings", "commands");
  if (m) try {
    await s.stat(m), n.push(m);
  } catch {}
  let g = MCt("projectSettings", "skills");
  if (g) try {
    let e = k.resolve(g);
    if (z() && o !== void 0) {
      if (await M(o, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {}
  let _ = pr(ke()), E = Bs(ke());
  if (Qr() === null && _ && E && _ !== E) {
    let e = k.join(_, ".claude", "skills"), c = k.join(E, ".claude", "skills");
    if (!n.includes(e) && !await ee(s, o, e) && await ee(s, o, c)) n.push(c);
  }
  let A = MCt("projectSettings", "commands");
  if (A) try {
    let e = k.resolve(A);
    if (z() && o !== void 0) {
      if (await M(o, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {}
  let p = MCt("userSettings", "agents");
  if (p) try {
    await s.stat(p), n.push(p);
  } catch {}
  let T = MCt("projectSettings", "agents");
  if (T) try {
    let e = k.resolve(T);
    if (z() && o !== void 0) {
      if (await M(o, e)) n.push(e);
    } else await s.stat(e), n.push(e);
  } catch {}
  for (let e of fc()) {
    let c = k.join(e, ".claude", "skills");
    try {
      if (z() && o !== void 0) {
        if (await M(o, k.resolve(c))) n.push(c);
      } else await s.stat(c), n.push(c);
    } catch {}
  }
  return n;
}

async function M(o, s) {
  let n = await o.hostFiles.stat(Rf.workspace(s));
  return n.ok && n.value.kind !== "absent";
}

async function ee(o, s, n) {
  try {
    if (z() && s !== void 0) return await M(s, n);
    return await o.stat(n), !0;
  } catch {
    return !1;
  }
}

export { One };
