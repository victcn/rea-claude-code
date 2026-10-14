// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, q, Oc, ve, kEe, he, AEe } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x, l, E, W, jt } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { jC, Yp } from "./chunk-ddr690nj.js";

import { Oy, Pf, se, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { d } from "./chunk-6ah1819r.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { qg } from "./chunk-9yajep3y.js";

import { dr } from "./chunk-y3nc3daq.js";

import { le } from "./chunk-cqgvwwgb.js";

import { i } from "./chunk-hedpgw9m.js";

import { a } from "./chunk-j016gcgm.js";

import { X } from "./chunk-1zg3hbfq.js";

import { dt } from "./chunk-dd98x6x7.js";

import { Qxr, D2n, YZ } from "./chunk-9nqgkt3n.js";

import { Tu } from "./chunk-dq67x9kz.js";

import { um, Qi } from "./chunk-ws55c9wv.js";

import { yt } from "./chunk-9zhz923g.js";

import { lstat as Pe, readdir as ye } from "fs/promises";

import { basename as k, dirname as D, join as m, resolve as M, sep as Y } from "path";

function T(n, e) {
  t(`Diskless session: skipped the ${n} write to ${e} because no storage backend could take it`, {
    level: "warn"
  }), i("tengu_diskless_write_skipped", {
    writer: c(n)
  });
}

import * as O from "fs/promises";

import { posix as ue } from "path";

var {dirname: G, isAbsolute: H, join: Q, normalize: fe, relative: de, sep: pe} = ue, nZt = "/mnt/user-data/uploads", Z5e = "/uploads", Bgo = "/uploads/cowork-folders/", ge = Q(G(nZt), "outputs"), me = "/home/claude", e6e = "/uploads/.home", uOt = "/outputs", E0 = ".stage-tmp.";

function rZt(n) {
  if (!n) return nZt;
  if (!H(n)) throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
  return fe(n);
}

function F7() {
  return rZt(a.CLAUDE_STAGE_FILE_ROOT);
}

function hxe() {
  return Q(G(F7()), "outputs");
}

function U7() {
  return me;
}

var vwr = [ nZt, ge ];

function jgo() {
  return vwr;
}

function oZt(n, e) {
  let r = de(n, e);
  return !(r === ".." || r.startsWith(".." + pe) || H(r));
}

function sZt() {
  let n = a.CLAUDE_CODE_ENVIRONMENT_KIND;
  if (n === "byoc" || n === "anthropic_cloud") return n;
  return null;
}

function RN(n, e) {
  return Boolean(n) && (!e || e === "anthropic_cloud");
}

async function Xws() {
  if (!RN(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) return;
  try {
    let n = [ F7(), hxe() ];
    await Promise.all(n.map(e => O.mkdir(e).catch(r => {
      let s = E(r);
      if (s !== "EEXIST" && s !== "ENOENT") X("warn", "user_data_roots_mkdir_failed", {
        code: s ?? "unknown"
      });
    })));
  } catch (n) {
    t(`uploads and outputs directories not created: ${l(n)}`, {
      level: "error"
    });
  }
}

var we = 10, L = 2e3, ke = 8;

class te {
  primedListing=null;
  slugMeta=new Map;
  planFileCache=null;
  planFileBackend=null;
  planFileWatches=new Map;
  primeInFlight=null;
  waitCapMs=L;
  stopReleasingOnSwitch=null;
  lastUnwatched=new Map;
  earlyObserved=new Map;
  earlyGeneration=0;
  lastSnapshottedWorkshopDoc=null;
  snapshotChain=Promise.resolve();
  planFileCacheKeyFor(n) {
    if (this.planFileCache === null) return null;
    let e = M(n);
    if (D(e) !== v()) return null;
    return k(e);
  }
  notePlanFileWritten(n, e) {
    if (this.planFileCache === null) {
      this.noteEarly(n, e);
      return;
    }
    let r = this.planFileCacheKeyFor(n);
    if (r !== null) {
      let s = this.planFileWatches.get(r);
      if (s !== void 0) s.generation++;
      if (this.planFileCache.set(r, e), this.primedListing !== null && this.primedListing.dir === v()) this.primedListing.listing.add(r);
    }
  }
  notePlanFileForgotten(n) {
    if (this.planFileCache === null) {
      this.noteEarly(n, void 0);
      return;
    }
    let e = this.planFileCacheKeyFor(n);
    if (e !== null) {
      let r = this.planFileWatches.get(e);
      if (r !== void 0) {
        this.dropToUnknown(e, r), this.refreshPlanFile(e, r);
        return;
      }
      this.planFileCache.delete(e);
    }
  }
  resetPlanFileCacheToUnknown() {
    if (this.planFileCache === null) return;
    for (let n of [ ...this.planFileCache.keys() ]) {
      let e = this.planFileWatches.get(n);
      if (e !== void 0) this.dropToUnknown(n, e), this.refreshPlanFile(n, e); else this.planFileCache.delete(n);
    }
  }
  activatePlanFileCache(n) {
    if (this.planFileCache ??= new Map, z() && n !== void 0 && this.planFileBackend === null) {
      this.planFileBackend = n, this.stopReleasingOnSwitch = Oc(() => this.releaseStaleWatches());
      for (let e of new Set(AEe().values())) this.watchSlug(e, !1);
      this.earlyObserved.clear();
    }
  }
  noteEarly(n, e) {
    if (!z()) return;
    let r = M(n);
    if (D(r) !== v()) return;
    if (this.earlyGeneration++, e === void 0) this.earlyObserved.delete(k(r)); else this.earlyObserved.set(k(r), e);
  }
  watchSlug(n, e) {
    this.releaseStaleWatches();
    for (let r of w(n)) this.watchPlanFile(n, r, e);
    this.lastUnwatched.clear();
  }
  releaseStaleWatches() {
    if (this.planFileWatches.size === 0) return;
    let n = new Set(AEe().values());
    for (let [e, r] of this.planFileWatches) if (!n.has(r.slug)) this.stopWatch(e, r);
  }
  watchPlanFile(n, e, r) {
    let s = this.planFileBackend;
    if (s === null || this.planFileCache === null || this.planFileWatches.has(e) || !P() || qg(F(b(e))) !== void 0) return;
    let o = {
      slug: n,
      generation: 0,
      seededAbsent: !1,
      subscription: void 0,
      refreshing: void 0,
      refreshAgain: !1,
      resubscribed: !1,
      stopped: !1
    };
    this.planFileWatches.set(e, o);
    let u = this.earlyObserved.has(e) ? this.earlyObserved.get(e) : this.lastUnwatched.get(e);
    if (this.earlyObserved.delete(e), this.lastUnwatched.delete(e), u !== void 0) this.planFileCache.set(e, u); else if (r && !this.planFileCache.has(e)) this.planFileCache.set(e, null), 
    o.seededAbsent = !0;
    this.subscribePlanFile(s, e, o);
  }
  observePlanFile(n) {
    let e = this.planFileWatches.get(n);
    return {
      watch: e,
      generation: e?.generation ?? this.earlyGeneration
    };
  }
  notePlanFileObserved(n, e, r) {
    let s = this.planFileWatches.get(n);
    if (s !== void 0) if (r.watch === s && s.generation === r.generation) this.installPlanFile(n, s, e); else this.refreshPlanFile(n, s); else if (this.planFileBackend === null && z() && r.watch === void 0 && this.earlyGeneration === r.generation) this.earlyObserved.set(n, e);
  }
  watchAgentPlanFile(n, e) {
    if (this.planFileBackend === null) return;
    let r = this.planFileWatches.get(e);
    if (r !== void 0) {
      this.planFileWatches.delete(e), this.planFileWatches.set(e, r);
      return;
    }
    let s = new Set(w(n)), o = [ ...this.planFileWatches ].filter(([u, p]) => p.slug === n && !s.has(u));
    for (let [u, p] of o.slice(0, Math.max(0, o.length - ke + 1))) {
      let h = this.planFileCache?.get(u);
      if (this.stopWatch(u, p), typeof h === "string") this.planFileCache?.set(u, h);
    }
    this.watchPlanFile(n, e, !1);
  }
  async subscribePlanFile(n, e, r) {
    let s = r.generation, o;
    try {
      let u = await n.subscribe({
        target: "key",
        key: F(b(e))
      }, p => this.onPlanFileEvent(e, r, s, p), {
        maxObservationLagMs: L
      });
      if (u.ok) {
        if (r.stopped) u.value.unsubscribe(); else r.subscription = u.value, t(`plans: watching ${e} through the storage interface (changes trail by at most ${u.value.observationLagMs} ms)`);
        return;
      }
      o = yt(u.error);
    } catch (u) {
      o = String(u);
    }
    if (r.stopped) return;
    if (t(`plans: watching ${e} through the storage interface failed (${o}); serving its last read and in-process writes`), 
    this.planFileCache?.has(e) !== !0) this.refreshPlanFile(e, r);
  }
  onPlanFileEvent(n, e, r, s) {
    if (e.stopped) return;
    if (!s.ok) {
      if (s.error.code === "Unavailable") {
        queueMicrotask(() => void this.refreshPlanFile(n, e));
        return;
      }
      if (e.subscription = void 0, Oy()) return;
      t(`plans: the watch on ${n} ended: ${yt(s.error)}`);
      let u = this.planFileBackend;
      if (u !== null && !e.resubscribed) e.resubscribed = !0, this.subscribePlanFile(u, n, e); else this.stopWatch(n, e);
      return;
    }
    let o = s.value;
    if (o.kind === "snapshot" && e.generation === r) {
      if (!("absent" in o)) {
        this.installPlanFile(n, e, Buffer.from(o.value).toString("utf-8"));
        return;
      }
      if (e.seededAbsent && e.generation === 0) {
        this.installPlanFile(n, e, null);
        return;
      }
    }
    queueMicrotask(() => void this.refreshPlanFile(n, e));
  }
  installPlanFile(n, e, r) {
    e.generation++, this.planFileCache?.set(n, r);
  }
  refreshPlanFile(n, e) {
    if (e.refreshing !== void 0) return e.refreshAgain = !0, e.refreshing;
    let r = this.planFileBackend;
    if (r === null) return Promise.resolve();
    let s = async () => {
      await Promise.resolve();
      try {
        do {
          e.refreshAgain = !1;
          let o = e.generation, u = await this.readPlanFileForWatch(r, n);
          if (e.stopped) return;
          if (u === void 0) {
            if (e.generation === o) e.generation++, this.planFileCache?.delete(n);
            continue;
          }
          if (e.generation === o) this.installPlanFile(n, e, u); else e.refreshAgain = !0;
        } while (e.refreshAgain && !e.stopped);
      } finally {
        e.refreshing = void 0;
      }
    };
    return e.refreshing = s(), e.refreshing;
  }
  async readPlanFileForWatch(n, e) {
    try {
      let r = await n.read([ F(b(e)) ]);
      if (r.ok) {
        let s = r.value.items[0];
        return s?.found ? Buffer.from(s.value).toString("utf-8") : null;
      }
      t(`plans: v5 read of ${e} failed: ${r.error.code}`);
    } catch (r) {
      t(`plans: v5 read of ${e} threw: ${r}`);
    }
    return;
  }
  async settlePlanFile(n) {
    let e = this.planFileWatches.get(n);
    if (e === void 0) return;
    let r = e.refreshing ?? (this.planFileCache?.has(n) !== !0 ? this.refreshPlanFile(n, e) : void 0);
    if (r !== void 0 && !await N(r, this.waitCapMs)) this.giveUpWaiting(n, e);
  }
  dropToUnknown(n, e) {
    if (e.stopped) return;
    e.generation++, this.planFileCache?.delete(n);
  }
  giveUpWaiting(n, e) {
    if (this.planFileCache?.has(n)) this.dropToUnknown(n, e);
  }
  unwatchSlug(n) {
    for (let [e, r] of this.planFileWatches) if (r.slug === n) this.stopWatch(e, r);
  }
  unwatchAllPlanFiles() {
    this.lastUnwatched.clear();
    for (let [n, e] of this.planFileWatches) {
      let r = this.planFileCache?.get(n);
      if (r !== void 0) this.lastUnwatched.set(n, r);
      this.stopWatch(n, e);
    }
  }
  stopWatch(n, e) {
    e.stopped = !0, e.subscription?.unsubscribe(), e.subscription = void 0, this.planFileWatches.delete(n), 
    this.planFileCache?.delete(n);
  }
  commitPlanListing(n, e) {
    let r = new Set(e);
    this.primedListing = {
      dir: n,
      listing: r
    };
    let s = AEe(), o = [ ...this.slugMeta ].filter(([, p]) => p.validatedDir !== n), u = new Set(o.map(([p]) => p));
    for (let [p, h] of s) if (!u.has(p)) for (let f of w(h)) r.add(f);
    for (let [p, h] of o) {
      let f = s.get(p);
      if (f === void 0) {
        this.slugMeta.delete(p);
        continue;
      }
      if (w(f).some(g => r.has(g))) {
        if (h.consumed) {
          t(`Plan slug collision for '${f}' in ${n} detected after the plan path was already in use \u2014 keeping the slug (the pre-existing plan file may be overwritten).`, {
            level: "warn"
          }), h.validatedDir = n;
          continue;
        }
        if (s.delete(p), this.slugMeta.delete(p), ![ ...s.values() ].includes(f)) this.unwatchSlug(f);
        this.getPlanSlug(p, h.seed);
      } else {
        for (let g of w(f)) r.add(g);
        h.validatedDir = n;
      }
    }
  }
  getPlanSlug(n, e) {
    let r = AEe(), s = r.get(n);
    if (!s) {
      let o = e ? D2n(e) : "", u = !0;
      for (let f = 0; f < we; f++) if (s = o ? `${o}-${YZ()}` : Qxr(), u = w(s).some(g => this.primedListing?.listing.has(g) === !0), 
      !u) break;
      let p = !ve() && !kEe();
      this.slugMeta.set(n, {
        validatedDir: p || this.primedListing === null ? null : this.primedListing.dir,
        consumed: !1,
        seed: e
      });
      let h = !u && this.primedListing !== null && this.primedListing.dir === v();
      if (this.primedListing !== null) for (let f of w(s)) this.primedListing.listing.add(f);
      r.set(n, s), this.lastUnwatched.clear(), this.watchSlug(s, h);
    }
    return s;
  }
  markPlanPathServed(n) {
    let e = this.slugMeta.get(n);
    if (e) e.consumed = !0;
  }
  exemptSlugFromRevalidation(n, e) {
    if (this.slugMeta.delete(n), this.primedListing !== null) for (let r of w(e)) this.primedListing.listing.add(r);
    this.watchSlug(e, !1);
  }
  clearAllPlanSlugs() {
    AEe().clear(), this.slugMeta.clear(), this.unwatchAllPlanFiles();
  }
  noteWorkshopDocSnapshotted(n, e) {
    this.lastSnapshottedWorkshopDoc = {
      sessionId: n,
      doc: e
    };
  }
  reset() {
    this.primedListing = null, this.slugMeta.clear(), this.unwatchAllPlanFiles(), this.lastUnwatched.clear(), 
    this.earlyObserved.clear(), this.primeInFlight = null, this.waitCapMs = L, this.stopReleasingOnSwitch?.(), 
    this.stopReleasingOnSwitch = null, this.planFileBackend = null, this.planFileCache = null, 
    this.lastSnapshottedWorkshopDoc = null, this.snapshotChain = Promise.resolve();
  }
}

var Se = new K(() => new te);

function U() {
  return B().host;
}

function hb() {
  return Se.of(U());
}

function HSe(n, e) {
  hb().notePlanFileWritten(n, e);
}

function hy(n) {
  hb().notePlanFileForgotten(n);
}

function iZt() {
  hb().resetPlanFileCacheToUnknown();
}

async function be(n) {
  let e = [];
  try {
    let r = await Qi(s => n.listEntries({
      namespace: "plan"
    }, {
      cursor: s,
      skipKeyStats: !0
    }), s => {
      for (let o of s) if (o.kind === "key" && o.key.namespace === "plan") e.push(`${o.key.name}.md`);
    });
    switch (r.status) {
     case "done":
      return e;

     case "error":
      return t(`primePlanSlugCollisions: v5 list failed: ${r.error.code}`), null;

     case "capped":
      return t(`primePlanSlugCollisions: v5 list exceeded ${um} pages; leaving the listing unprimed`), 
      null;
    }
  } catch (r) {
    return t(`primePlanSlugCollisions: v5 list threw: ${r}`), null;
  }
}

async function _e(n, e) {
  let r = await be(n);
  if (e !== R()) return;
  if (r !== null) hb().activatePlanFileCache(n), hb().commitPlanListing(e, r);
}

async function N(n, e) {
  let r = dr(), s = !1;
  return await Promise.race([ n.catch(() => {}).finally(() => {
    s = !0, r.abort();
  }), J(e, r.signal) ]), s;
}

async function Wgo() {
  let n = hb();
  if (n.primeInFlight !== null) await N(n.primeInFlight, n.waitCapMs);
}

async function LS(n) {
  let e = R();
  if (n && e === v()) {
    let r = hb(), s = _e(n, e);
    r.primeInFlight = s;
    try {
      await s;
    } finally {
      if (r.primeInFlight === s) r.primeInFlight = null;
    }
    return;
  }
  if (he()) {
    hb().commitPlanListing(e, []);
    return;
  }
  try {
    let r = await ye(e);
    if (e !== R()) return;
    hb().commitPlanListing(e, r);
  } catch (r) {
    if (!W(r) && !jt(r)) d(r);
    if (e !== R()) return;
    if (W(r)) hb().commitPlanListing(e, []);
  }
}

function R() {
  if (!ve() && !kEe()) return v();
  return Fd();
}

function v() {
  return m(Ee(), "plans");
}

function F(n) {
  return Fe.plan(n);
}

function b(n) {
  return n.endsWith(".md") ? n.slice(0, -3) : n;
}

var S = {
  publishDiscipline: "inPlace"
};

async function Z(n) {
  if (he()) return S;
  try {
    let e = await Pe(m(Fd(), `${n}.md`));
    return {
      ...S,
      mode: e.mode & 511
    };
  } catch {
    return S;
  }
}

function P() {
  return Fd() === v();
}

function w(n) {
  return [ `${n}.md`, `${n}.workshop.md` ];
}

function OY(n, e) {
  return hb().getPlanSlug(n ?? q(), e);
}

function DSe(n) {
  return AEe().get(n ?? q());
}

function Ewr(n, e) {
  AEe().set(n, e), hb().exemptSlugFromRevalidation(n, e);
}

function zgo() {
  hb().clearAllPlanSlugs();
}

class ne {
  #e=void 0;
  directory() {
    return this.#e ??= this.#t(), this.#e;
  }
  #t() {
    if (he()) return v();
    let e = dt().plansDirectory;
    if (e) {
      let r = le(), s = M(r, e);
      if ($e(s, r)) return s;
      t(`plansDirectory must be within project root, with no backslash in its path off Windows: ${e}`, {
        level: "error"
      });
    }
    return v();
  }
  reset() {
    this.#e = void 0;
  }
}

var V = new K(() => new ne), Fd = Object.assign(function() {
  return V.of(U()).directory();
}, {
  cache: {
    clear() {
      V.of(U()).reset();
    }
  }
});

function $e(n, e) {
  if (n !== e && !n.startsWith(e + Y)) return !1;
  if (jC(n)) return !1;
  if (Pf(se(), n) !== void 0) return !1;
  let r = Yp(e);
  if (r === null) return !1;
  let s = n;
  for (;;) {
    let o = Yp(s);
    if (o !== null) return o === r || o.startsWith(r + Y);
    let u = D(s);
    if (u === s) return !1;
    s = u;
  }
}

async function y(n) {
  let e = Fd();
  if (he()) return e;
  try {
    await gn().mkdir(e);
  } catch (r) {
    t(`Failed to create plans directory ${e}: ${r}`, {
      level: "error"
    });
  }
  return e;
}

async function t6e(n, e) {
  if (e && P()) {
    let s = `${Qxr()}-ultraplan`, o = m(await y(e), `${s}.md`), u = await e.write(F(s), n, S);
    if (!u.ok) throw new x(`saveRejectedUltraplan: v5 write failed: ${u.error.code}`, "saveRejectedUltraplan: v5 write failed");
    return o;
  }
  if (he()) throw T("rejected_ultraplan", Fd()), new x("Cannot save the plan: this session does not write to disk");
  let r = m(await y(), `${Qxr()}-ultraplan.md`);
  return await gn().write(r, n), r;
}

async function Ggo(n, e, r) {
  try {
    await y(r);
    let s = k(n, ".md"), o = r !== void 0 && P() && D(n) === Fd() && qg(F(s)) === void 0 ? F(s) : void 0;
    if (r !== void 0 && o !== void 0) {
      let u = await r.write(o, e, S);
      if (!u.ok) {
        ee(n, u.error.code);
        return;
      }
    } else if (he()) {
      T("plan_edit", n);
      return;
    } else await gn().write(n, e);
    HSe(n, e);
  } catch (s) {
    ee(n, s instanceof Error ? s.message : String(s));
  }
}

function ee(n, e) {
  hy(n), t(`Failed to persist plan to ${n}: ${e}`, {
    level: "error"
  });
}

function aE(n) {
  let e = q(), r = OY(e);
  if (hb().markPlanPathServed(e), !n) return m(Fd(), `${r}.md`);
  return m(Fd(), `${r}-agent-${n}.md`);
}

function hFe() {
  let n = OY(q());
  return m(Fd(), `${n}.workshop.md`);
}

async function j(n, e, r) {
  let s = await n.read([ F(e) ]);
  if (!s.ok) return t(`${r}: v5 read failed: ${s.error.code}`), null;
  let o = s.value.items[0];
  return o.found ? Buffer.from(o.value).toString("utf-8") : null;
}

async function Vgo(n) {
  if (n && P()) return j(n, `${OY(q())}.workshop`, "getPlanWorkshopDoc");
  if (he()) return null;
  let e = hFe();
  try {
    return await se().readFile(e, {
      encoding: "utf-8"
    });
  } catch (r) {
    if (W(r)) return null;
    if (jt(r)) return t(`getPlanWorkshopDoc: read failed for ${e}: ${r}`), null;
    return d(r), null;
  }
}

function XFn() {
  let n = hb().planFileCache;
  if (n !== null && P()) {
    let e = n.get(`${OY(q())}.workshop.md`);
    if (e !== void 0) return e !== null;
  }
  if (he()) return !1;
  try {
    return se().existsSync(hFe());
  } catch {
    return !1;
  }
}

async function Kgo(n) {
  if (n === void 0 || !P()) return XFn();
  let e = `${OY(q())}.workshop`;
  await hb().settlePlanFile(`${e}.md`);
  let r = hb().planFileCache?.get(`${e}.md`);
  if (r !== void 0) return r !== null;
  return (await n.statMeta(F(e))).ok;
}

function MY(n) {
  let e = aE(n), r = hb().planFileCache;
  if (r !== null && P()) {
    if (n) hb().watchAgentPlanFile(OY(q()), k(e));
    let s = r.get(k(e));
    if (s !== void 0) return s;
  }
  return re(e);
}

async function n6e(n, e) {
  if (e === void 0 || !P()) return MY(n);
  let r = ie(n);
  await hb().settlePlanFile(r);
  let s = hb().planFileCache?.get(r);
  if (s !== void 0) return s;
  return j(e, b(r), "getPlan");
}

function ie(n) {
  let e = k(aE(n)), r = hb();
  if (n && r.planFileCache !== null) r.watchAgentPlanFile(OY(q()), e);
  return e;
}

async function qgo(n, e) {
  if (e === void 0 || !P()) return MY(n) !== null;
  let r = ie(n);
  await hb().settlePlanFile(r);
  let s = hb().planFileCache?.get(r);
  if (s !== void 0) return s !== null;
  return (await e.statMeta(F(b(r)))).ok;
}

async function Ygo(n) {
  let e = aE();
  if (z() && n !== void 0 && P()) {
    let r = k(e), s = hb(), o = s.planFileWatches.get(r);
    if (o !== void 0) {
      if (!await N(s.refreshPlanFile(r, o), s.waitCapMs)) s.giveUpWaiting(r, o);
      let u = s.planFileCache?.get(r);
      if (u !== void 0) return u;
    }
    return j(n, b(r), "readPlanFileFresh");
  }
  return re(e);
}

function re(n) {
  if (he()) return null;
  try {
    return se().readFileSync(n, {
      encoding: "utf-8"
    });
  } catch (e) {
    if (W(e)) return null;
    if (jt(e)) return t(`getPlan: read failed for ${n}: ${e}`), null;
    return d(e), null;
  }
}

var Ce = /^[a-z0-9][a-z0-9-]{0,119}$/;

function oe(n) {
  let e = n.messages.find(r => r.slug)?.slug;
  if (e === void 0) return;
  if (!Ce.test(e)) {
    t(`getSlugFromLog: rejecting malformed transcript slug (${e.length} chars)`);
    return;
  }
  return e;
}

async function ae(n, e, r) {
  if (sZt() === null) return;
  if (r && P()) return Ae(r, n, e).catch(d);
  if (he()) return;
  let s = m(Fd(), `${e}.workshop.md`);
  try {
    await gn().read(s);
    return;
  } catch (u) {
    if (!W(u)) {
      if (jt(u)) t(`recoverWorkshopDocForResume: read failed for ${s}: ${u}`); else d(u);
      return;
    }
  }
  let o = I(n, "workshop");
  if (!o || o.content.length === 0 || o.content.length > aZt) return;
  try {
    await y(), await gn().write(s, o.content), t(`Workshop doc recovered from file snapshot, ${o.content.length} chars`, {
      level: "info"
    });
  } catch (u) {
    if (jt(u)) {
      t(`Workshop doc recovery write failed for ${s}: ${u}`);
      return;
    }
    d(u);
  } finally {
    hy(s);
  }
}

async function Ae(n, e, r) {
  let s = `${r}.workshop.md`, o = F(`${r}.workshop`), u = hb().observePlanFile(s), p = await n.read([ o ]);
  if (!p.ok) {
    t(`recoverWorkshopDocForResume: v5 read failed for ${r}: ${p.error.code}`);
    return;
  }
  let h = p.value.items[0];
  if (hb().notePlanFileObserved(s, h?.found ? Buffer.from(h.value).toString("utf-8") : null, u), 
  h?.found) return;
  let f = I(e, "workshop");
  if (!f || f.content.length === 0 || f.content.length > aZt) return;
  let g = m(Fd(), s), _ = !1;
  try {
    await y(n);
    let C = await n.write(o, f.content, S);
    if (!C.ok) {
      t(`Workshop doc recovery write failed for ${r}: ${C.error.code}`);
      return;
    }
    _ = !0, t(`Workshop doc recovered from file snapshot, ${f.content.length} chars`, {
      level: "info"
    });
  } finally {
    if (_) HSe(g, f.content); else hy(g);
  }
}

async function pOt(n, e, r) {
  let s = oe(n);
  if (!s) return !1;
  let o = e ?? q();
  if (Ewr(o, s), r && P()) return We(r, n, s).catch(p => (d(p), !1));
  let u = m(Fd(), `${s}.md`);
  if (await ae(n, s).catch(d), he()) return !1;
  try {
    return await gn().read(u), !0;
  } catch (p) {
    if (!W(p)) {
      if (jt(p)) return t(`copyPlanForResume: read failed for ${u}: ${p}`), !1;
      return d(p), !1;
    }
    if (sZt() === null) return !1;
    t(`Plan file missing during resume: ${u}. Attempting recovery.`);
    let h = I(n, "plan"), f = null;
    if (h && A(h.content)) f = h.content, t(`Plan recovered from file snapshot, ${f.length} chars`, {
      level: "info"
    }); else if (f = ce(n), f) t(`Plan recovered from message history, ${f.length} chars`, {
      level: "info"
    });
    if (f) try {
      return await y(), await gn().write(u, f), !0;
    } catch (g) {
      if (jt(g)) return t(`Plan recovery write failed for ${u}: ${g}`), !1;
      return d(g), !1;
    } finally {
      hy(u);
    }
    return t("Plan file recovery failed: no file snapshot or plan content found in message history"), 
    !1;
  }
}

async function Oe(n, e) {
  let r = `${e}.workshop.md`, s = hb();
  if (s.planFileWatches.has(r)) {
    await s.settlePlanFile(r);
    return;
  }
  if (s.planFileCache?.has(r)) return;
  let o = s.observePlanFile(r), u = await n.read([ F(`${e}.workshop`) ]);
  if (!u.ok) {
    t(`copyPlanForResume: v5 read failed for ${e}.workshop: ${u.error.code}`);
    return;
  }
  let p = u.value.items[0];
  s.notePlanFileObserved(r, p?.found ? Buffer.from(p.value).toString("utf-8") : null, o);
}

async function We(n, e, r) {
  await ae(e, r, n).catch(d);
  let s = `${r}.md`, o = hb().observePlanFile(s), u = await n.read([ F(r) ]);
  if (!u.ok) return t(`copyPlanForResume: v5 read failed for ${r}: ${u.error.code}`), 
  !1;
  let p = u.value.items[0];
  if (hb().notePlanFileObserved(s, p?.found ? Buffer.from(p.value).toString("utf-8") : null, o), 
  await Oe(n, r), p?.found) return !0;
  if (sZt() === null) return !1;
  t(`Plan file missing during resume: ${r}. Attempting recovery.`);
  let h = I(e, "plan"), f = null;
  if (h && A(h.content)) f = h.content, t(`Plan recovered from file snapshot, ${f.length} chars`, {
    level: "info"
  }); else if (f = ce(e), f) t(`Plan recovered from message history, ${f.length} chars`, {
    level: "info"
  });
  if (f) {
    let g = m(Fd(), s), _ = !1;
    try {
      await y(n);
      let C = await n.write(F(r), f, S);
      if (!C.ok) return t(`Plan recovery write failed for ${r}: ${C.error.code}`), !1;
      return _ = !0, !0;
    } finally {
      if (_) HSe(g, f); else hy(g);
    }
  }
  return t("Plan file recovery failed: no file snapshot or plan content found in message history"), 
  !1;
}

async function Xgo(n, e, r) {
  let s = oe(n);
  if (!s) return !1;
  let o = Fd(), u = m(o, `${s}.md`), p = OY(e), h = m(o, `${p}.md`);
  if (hb().exemptSlugFromRevalidation(e, p), r && P()) return Re(r, s, p).catch(f => (d(f), 
  !1));
  await y();
  try {
    if (!he()) await gn().copy(m(o, `${s}.workshop.md`), m(o, `${p}.workshop.md`));
  } catch (f) {
    if (!W(f)) if (jt(f)) t(`copyPlanForFork: workshop sibling copy failed: ${f}`); else d(f);
  } finally {
    hy(m(o, `${p}.workshop.md`));
  }
  try {
    if (he()) return !1;
    return await gn().copy(u, h), !0;
  } catch (f) {
    if (W(f)) return !1;
    if (jt(f)) return t(`copyPlanForFork: copy failed for ${u}: ${f}`), !1;
    return d(f), !1;
  } finally {
    hy(h);
  }
}

async function Re(n, e, r) {
  let s = m(Fd(), `${r}.workshop.md`), o;
  try {
    await y(n);
    let h = await n.read([ F(`${e}.workshop`) ]);
    if (!h.ok) t(`copyPlanForFork: v5 workshop sibling read failed: ${h.error.code}`); else if (h.value.items[0].found) {
      let f = h.value.items[0].value, g = await n.write(F(`${r}.workshop`), f, await Z(`${e}.workshop`));
      if (!g.ok) t(`copyPlanForFork: v5 workshop sibling copy failed: ${g.error.code}`); else o = Buffer.from(f).toString("utf-8");
    }
  } finally {
    if (o !== void 0) HSe(s, o); else hy(s);
  }
  let u = m(Fd(), `${r}.md`), p;
  try {
    let h = await n.read([ F(e) ]);
    if (!h.ok) return t(`copyPlanForFork: v5 read failed for ${e}: ${h.error.code}`), 
    !1;
    if (!h.value.items[0].found) return !1;
    let f = h.value.items[0].value, g = await n.write(F(r), f, await Z(e));
    if (!g.ok) return t(`copyPlanForFork: v5 write failed for ${r}: ${g.error.code}`), 
    !1;
    return p = Buffer.from(f).toString("utf-8"), !0;
  } finally {
    if (p !== void 0) HSe(u, p); else hy(u);
  }
}

function ce(n) {
  for (let e = n.messages.length - 1; e >= 0; e--) {
    let r = n.messages[e];
    if (typeof r !== "object" || r === null) continue;
    if (r.type === "assistant") {
      let s = r.message?.content;
      if (Array.isArray(s)) {
        for (let o of s) if (typeof o === "object" && o !== null && o.type === "tool_use" && o.name === Tu) {
          let u = o.input, p = typeof u === "object" && u !== null ? u.plan : void 0;
          if (A(p)) return p;
        }
      }
    }
    if (r.type === "user") {
      let s = r;
      if (A(s.planContent)) return s.planContent;
    }
    if (r.type === "attachment") {
      let s = r;
      if (s.attachment?.type === "plan_file_reference") {
        let o = s.attachment.planContent;
        if (A(o)) return o;
      }
    }
  }
  return null;
}

function I(n, e) {
  let r = [ ...n.messages, ...n.fileSnapshots ?? [] ];
  for (let s = r.length - 1; s >= 0; s--) {
    let o = r[s];
    if (o?.type === "system" && "subtype" in o && o.subtype === "file_snapshot" && "snapshotFiles" in o) {
      let u = o.snapshotFiles;
      if (!Array.isArray(u)) continue;
      let p = u.find(h => typeof h === "object" && h !== null && h.key === e && typeof h.path === "string" && typeof h.content === "string");
      if (p !== void 0) return p;
    }
  }
  return;
}

var aZt = 2e6, kwr = aZt;

function A(n) {
  return typeof n === "string" && n.length > 0 && n.length <= kwr;
}

export { nZt, Z5e, Bgo, e6e, uOt, E0, rZt, F7, hxe, U7, vwr, jgo, oZt, sZt, RN, Xws, hb, HSe, hy, iZt, Wgo, LS, OY, DSe, Ewr, zgo, Fd, t6e, Ggo, aE, hFe, Vgo, XFn, Kgo, MY, n6e, qgo, Ygo, pOt, Xgo, aZt, kwr };
