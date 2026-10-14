// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pm, yq, Vdn, he } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { j, E, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { _, Y } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { k, Rr } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { X } from "./chunk-1zg3hbfq.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { Jf } from "./chunk-rgd61mm3.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { kp, FOe, DG, uq } from "./chunk-5brm0azz.js";

import { Ev, Ul } from "./chunk-znhtg8e4.js";

import { nes, akt, ZL, lkt, res, oes, HJr, lKe, Xnt, lir, ECn, E4, dir, cir, dde, cde, dKe, dkt, lQ, AW, ude, uir, pir, fir, ses, ckt, kCn, mir, DJr, TCn, M4t, ukt, ies, aes, d3, gir, pkt, Nir, X4t, J4t, $ir, Fir, art, Uir, Q4t, ZCn, Bir, jir, Wir, Rts, Lde, uxn, pxn, Wrs, r_e, fxn, Vrs, Krs, qrs, FB, ef, aR, r8t, pV, Too } from "./chunk-84yp45y8.js";

import { _H, Gwr, kdt, i6e, N8, kFe, LY, NY, d6e, ZV, c6e } from "./chunk-t70vnbgq.js";

import { gH, fOt } from "./chunk-67jt18z1.js";

import { v$e, _8, ZYe, iH, A$e } from "./chunk-2xhrgh8h.js";

import { Cfs, d0 } from "./chunk-wgsx43va.js";

import { M9t } from "./chunk-81rtbneg.js";

import { Ug, np, rpo, _Nn, O_s, M_s } from "./chunk-wbxkeemq.js";

import { djn, cjn } from "./chunk-2mq6q9dt.js";

import { oSo } from "./chunk-4dpx2qvt.js";

import { Y6r, xKt, sQo } from "./chunk-80em4nq3.js";

import { sK } from "./chunk-278xsh28.js";

import { Ta, qks } from "./chunk-pqzqmnjf.js";

import { hPe } from "./chunk-0f42zdcd.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { o, v, cI, oe, T, _t } from "./chunk-cvcg6n1z.js";

import { Q_ } from "./chunk-dgqa0xqf.js";

import { lstat as nn, lutimes as At, mkdir as Pt, readdir as qn, readFile as Nt, rename as Un, rm as re, rmdir as Kn, stat as Ae, writeFile as Ot } from "fs/promises";

import { basename as H, join as B, relative as $n, sep as xt } from "path";

var In = 10, St = In * 6e4, gt = 4, pt = "tengu_claudeai_skills_sync_interval_minutes", wt = 5, ht = 1440, Mt = "tengu_claudeai_skills_sync_shared_round", Rt = "tengu_claudeai_skills_sync_idle_intervals", bn = 4, Dt = 4, vt = 36e5, bt = 3e4, Et = 6e4, En = 18e4, ve = 45e3;

function se() {
  let e = k(pt, In);
  if (typeof e !== "number" || Number.isNaN(e) || e <= 0) return St;
  return Math.min(Math.max(e, wt), ht) * 6e4;
}

function Cn() {
  return k(Mt, !1) === !0;
}

function Fn() {
  let e = se();
  return be() > e && oSo(e) && !djn();
}

function be() {
  let e = k(Rt, bn), n = typeof e === "number" && !Number.isNaN(e) ? Math.min(Math.max(e, 1), Dt) : bn, r = se();
  return Math.max(r, Math.min(r * n, vt));
}

function An() {
  return bt + Math.floor(Math.random() * Et);
}

function Le(e) {
  let n = se();
  return Math.min(n * 2 ** Math.max(0, e - 1), n * gt);
}

function Pn(e) {
  let n = np();
  if (n.resyncTimer) return;
  n.resyncRunRound = e, _e(n, e, Le(n.consecutiveFailedRounds), "resync", !1);
}

function Je(e) {
  let n = np();
  if (!n.resyncTimer || !n.resyncRunRound) return;
  clearTimeout(n.resyncTimer), _e(n, n.resyncRunRound, e, "resync", !1);
}

function Nn() {
  let e = np();
  if (e.stopAwaitingActivity) return;
  let n = [ yq, cjn ].map(r => r(() => {
    if (e.stopAwaitingActivity?.(), e.syncPromise) e.syncPromise.catch(() => {}).then(() => Ln(e)); else Ln(e);
  }));
  e.stopAwaitingActivity = () => {
    e.stopAwaitingActivity = null;
    for (let r of n) r();
  };
}

function On() {
  return np().stopAwaitingActivity !== null;
}

function Qe() {
  np().stopAwaitingActivity?.();
}

function Ln(e) {
  try {
    let n = e.resyncArmed;
    if (!e.resyncTimer || !e.resyncRunRound || !n || n.trigger === "wake_settle") return;
    let r = Math.round(Date.now() - n.wallMs - (performance.now() - n.monotonicMs));
    if (r > ve && e.consecutiveFailedRounds === 0) {
      clearTimeout(e.resyncTimer), Bn(e, e.resyncRunRound, n.trigger, r, !0);
      return;
    }
    let t = e.consecutiveFailedRounds > 0 ? Le(e.consecutiveFailedRounds) : 0;
    if (n.wallMs + n.delayMs - Date.now() > t) clearTimeout(e.resyncTimer), _e(e, e.resyncRunRound, t, "resync", !0);
  } catch (n) {
    d(n);
  }
}

function xn() {
  Je(Le(np().consecutiveFailedRounds));
}

function _e(e, n, r, t, u) {
  let h = Date.now() + r;
  e.resyncArmed = {
    trigger: t,
    delayMs: r,
    wallMs: Date.now(),
    monotonicMs: performance.now()
  }, e.resyncTimer = setTimeout(Lt, r, e, n, h, t, u), e.resyncTimer.unref?.();
}

function Lt(e, n, r, t, u) {
  let h = e.resyncTimer, y = Math.max(0, Date.now() - r);
  if (y > ve) {
    Bn(e, n, t, y, !1);
    return;
  }
  n({
    trigger: t,
    tickLateMs: y,
    ...u && {
      woken: u
    }
  }).catch(() => {}).then(() => {
    if (e.resyncTimer !== h) return;
    _e(e, n, Le(e.consecutiveFailedRounds), "resync", !1);
  });
}

function Bn(e, n, r, t, u) {
  X("info", "skills_sync_resync_skipped_after_sleep", {
    late_ms: t,
    woken: u
  }), _e(e, n, En, "wake_settle", u);
  try {
    if (!he()) i("tengu_skills_sync_resync_skipped", {
      trigger: c(r),
      tick_late_ms: t,
      settle_ms: En,
      woken: u
    });
  } catch (h) {
    d(h);
  }
}

var It = 6e4;

function Ie() {
  return kp() ?? "none";
}

async function zn({syncedRoot: e, bucket: n, root: r, trigger: t, pinned: u, lastGeneration: h, holdsPlaceholders: y, idle: M}) {
  let L = !u && Cn() && n === fOt(), R = u ? void 0 : Tt(t, L, M);
  if (R === void 0) return {
    list: !0,
    shared: L
  };
  if (L && M) Nn();
  let S = await Bir(r, R);
  if (!S.reuse || !await d3(e, n)) return Qe(), {
    list: !0,
    shared: L
  };
  let A = await Uir(r), w = !1;
  if (L) {
    if (A === null || y || !A.listedFor.includes(Ie())) return Qe(), {
      list: !0,
      shared: L
    };
    let I = M && On();
    if (M && !I && S.ageMs >= se()) return {
      list: !0,
      shared: L
    };
    w = A.token !== h && t !== "startup";
    let D = I ? be() : se();
    if (S.ageMs < D) Je(D - S.ageMs + An());
  }
  return X("info", "skills_sync_round_reused", {
    age_ms: S.ageMs,
    within_ms: S.withinMs
  }), {
    list: !1,
    generation: A?.token ?? null,
    reload: w
  };
}

function Tt(e, n, r) {
  let t = e === "startup" ? Fir() : void 0;
  if (!n || e === "reload") return t;
  if (r) return be();
  let u = e === "startup" && (!uq() || FOe() && DG()) ? Math.min(It, se()) : se();
  return Math.max(u, t ?? 0);
}

var Ct = "tengu_jaunty_alpaca";

function Hn() {
  return Rr(Ct, !0) !== !1;
}

var Ft = "tengu_quizzical_wirth";

function Te() {
  return k(Ft, !0) !== !1;
}

var Ve = 15, Bt = Y6r + 6e4;

function zt() {
  let e = a.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
  return e && e > 0 ? e : 5e3;
}

function z2o() {
  let e = a.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
  return e && e > 0 ? e : 3e4;
}

function tn() {
  let e = np();
  if (!e.firstListDeferred) {
    let n, r = new Promise(t => {
      n = t;
    });
    e.firstListDeferred = {
      promise: r,
      resolve: n
    };
  }
  return e.firstListDeferred;
}

function Oke(e, n, r) {
  np().firstSyncPromise ??= Zn(e, n, r), Pn(t => ln(e, n, r, t));
}

function G2o(e, n, r, t) {
  if (!a.CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC || e.host.launchOptions.isInteractive() || !uxn(e) || t()) return !1;
  if (ZL(), !pxn(e) || !lkt() || oes()) return !1;
  return Oke(e, n, r), !0;
}

function V2o(e, n, r) {
  let t = tn();
  return np().firstSyncPromise ??= Zn(e, n, r), t.promise;
}

async function K2o(e, n) {
  let r = zt() - (performance.now() - n), t = await Promise.race([ e.then(() => "listed"), J(Math.max(0, r)).then(() => "timed_out") ]);
  if (t === "timed_out") i("tengu_skills_sync_wait_timeout", {});
  return t;
}

async function Chn(e, n, r) {
  return A$e.of(e).discardInflight(), await (np().syncPromise?.catch(() => {})), ln(e, n, r, {
    trigger: "reload"
  });
}

function Zn(e, n, r) {
  let t = np();
  return ln(e, n, r, {
    trigger: "startup"
  }).finally(() => {
    t.firstRoundSettled = !0;
  });
}

function sn() {
  let e = np();
  if (!e.firstRoundSettled) e.firstRoundEmitted = !0;
}

function ele() {
  sn(), pV(), FB.emit();
}

function Gn(e, n) {
  if (e === null) return;
  if (n !== null && e.token !== n.token) {
    ele();
    return;
  }
  np().bucketGeneration = e.token;
}

function V() {
  return B(Ee(), ZV);
}

function Jn(e) {
  return B(V(), e);
}

function Qn(e) {
  return Fe.userConfigDir("skills", $n(B(Ee(), "skills"), e).split(xt));
}

async function Vn(e) {
  let n = V();
  if (await AW(n, Ee(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: ZV
  }, {
    storageV5: e
  }).catch(() => null) !== "real") return null;
  let t;
  try {
    t = await qn(n, {
      withFileTypes: !0
    });
  } catch {
    return null;
  }
  let u = [], h = [];
  for (let y of t) if (y.isDirectory() && kFe(y.name) && await d3(n, y.name)) u.push(y.name); else if (!LY(y.name)) h.push(y.name);
  return {
    buckets: u,
    strays: h
  };
}

async function et(e, n) {
  let r = 0;
  for (let t of e) if (await Pe(B(V(), t), n)) r++;
  if (r > 0) X("info", "skills_sync_stray_entry_trashed", {
    count: r
  });
  return r;
}

async function Ht(e) {
  let n = await Vn(e);
  if (n === null || n.strays.length === 0) return !1;
  return await et(n.strays, e) > 0;
}

function Pe(e, n) {
  return ude({
    dir: e,
    trashRoot: Ne(),
    configHome: Ee(),
    failureEvent: "skills_sync_trash_move_failed",
    storageV5: n
  });
}

async function Rhn(e) {
  if (!HJr()) return !1;
  let n = await AW(V(), Ee(), {
    event: "skills_sync_root_refused",
    phase: "prune",
    rootLabel: ZV
  }, {
    storageV5: e
  });
  if (n !== "real" && n !== "absent") return !1;
  let r = null, t = n === "real" ? await Vn(e) : null;
  if (t !== null) {
    r = 0;
    for (let h of t.buckets) {
      let y = Jn(h);
      await re(art(y), {
        force: !0
      }).catch(() => {});
      let M = await Vt(y, e).catch(() => null);
      if (M !== null) r += M, await Kn(y).then(() => pkt(V(), h), () => {});
    }
    r += await et(t.strays, e), await Kn(V()).catch(() => {});
  }
  X("info", "skills_sync_pruned_for_closed_gate", {
    moved: r ?? 0
  });
  let u = r !== null && r > 0;
  if (u) aR(), pV(), FB.emit();
  return u;
}

function Ne() {
  return B(Ee(), c6e);
}

function Oe(e) {
  return B(e, _H);
}

var Wn = new Set, Yn = [], Ut = p(() => _t({
  lastUpdated: v().catch(0),
  skills: T(oe()),
  staleDirs: oe().optional(),
  pendingClaims: oe().optional()
})), Kt = p(() => _t({
  name: o(),
  skillId: o().catch(""),
  description: o().catch(""),
  source: o().catch(""),
  updatedAt: o().nullable().catch(null),
  userInvocable: cI().catch(void 0),
  disableModelInvocation: cI().catch(void 0)
}));

function nt(e) {
  return Qn(Oe(e));
}

async function ye(e, n) {
  let r = !n.manifestRead;
  n.manifestRead = !0;
  let t;
  if (e) try {
    let R = await e.read([ {
      key: nt(n.root),
      offset: 0,
      length: lKe + 1
    } ]);
    if (!R.ok) {
      if (r) X("warn", "skills_sync_manifest_unreadable", {
        code: "backend_read_failed"
      });
      return null;
    }
    let S = R.value.items[0];
    if (!S.found) return null;
    if (S.totalBytes > lKe || S.value.byteLength > lKe) {
      if (r) X("warn", "skills_sync_manifest_unreadable", {
        code: "parse_or_size"
      });
      return null;
    }
    t = Buffer.from(S.value).toString("utf8");
  } catch (R) {
    if (r) X("warn", "skills_sync_manifest_unreadable", {
      code: E(R) ?? "backend_read_failed"
    });
    return null;
  } else if (t = await dde(Oe(n.root), r ? "skills_sync_manifest_unreadable" : null), 
  t === null) return null;
  let u = cde(t, dkt(), r ? "skills_sync_manifest_unreadable" : null);
  if (u === null) return null;
  let {skills: h, staleDirs: y, pendingClaims: M, ...L} = u;
  return {
    ...L,
    skills: E4(dKe(), h),
    staleDirs: Xnt(y),
    pendingClaims: Xnt(M)
  };
}

async function en(e, n, r, t) {
  let u = t.guard.refusedReason();
  if (u !== null) throw pir(u);
  await rt(r, t.root);
  let h = await ye(r, t);
  if (h === null && n.onlyOverReadable) return;
  let y = lir(E4(dKe(), e.skills), h?.skills, L => L.skillId, n.removedSkillIds, E4(dKe(), n.deferredRows)), M = _({
    ...cir(h, [ "lastUpdated", "skills", "staleDirs", "pendingClaims" ]),
    ...e,
    skills: y,
    staleDirs: ECn(e.staleDirs, h?.staleDirs, n.staleDirs),
    pendingClaims: ECn(e.pendingClaims, h?.pendingClaims, n.pendingClaims)
  }, null, 2);
  if (r) {
    let L = await r.write(nt(t.root), M, {
      mode: 438 & ~process.umask(),
      publishDiscipline: "atomic"
    });
    if (!L.ok) throw X("error", "skills_sync_manifest_write_failed", {
      code: L.error.code
    }), Error("skillsSync: manifest write failed");
    return;
  }
  await Tn(Oe(t.root), M);
}

function rn(e) {
  return B(e, N8, String(process.pid));
}

function U(e, n) {
  return NY(n, e);
}

async function jn(e, n, r) {
  try {
    let t = U(e, n);
    if (r) {
      let y = await r.read([ {
        key: an(t),
        offset: 0,
        length: Ug + 1
      } ]), M = y.ok ? y.value.items[0] : void 0;
      if (!M?.found || M.totalBytes > Ug || M.value.byteLength > Ug) return null;
      return Buffer.from(M.value).toString("utf8");
    }
    let u = B(t, "SKILL.md"), h = await Ae(u);
    if (!h.isFile() || h.size > Ug) return null;
    return await Nt(u, "utf8");
  } catch {
    return null;
  }
}

function an(e) {
  return Qn(B(e, "SKILL.md"));
}

async function Xn(e, n, r) {
  try {
    let t = U(e, n);
    if (r) return (await r.statMeta(an(t))).ok;
    return (await Ae(B(t, "SKILL.md"))).isFile();
  } catch {
    return !1;
  }
}

async function Gt(e, n) {
  try {
    if (n) {
      let r = await n.statMeta(an(e));
      return !r.ok && r.error.code === "NotFound";
    }
    return await Ae(B(e, "SKILL.md")), !1;
  } catch (r) {
    return W(r) || E(r) === "ENOTDIR";
  }
}

function Wt(e) {
  return {
    skillId: e.id,
    name: e.directory || e.name || e.id,
    description: e.description,
    source: "session-refs",
    updatedAt: null,
    requestedVersion: e.version || void 0
  };
}

function tt(e, n) {
  return {
    ...e,
    backingPluginId: n.backingPluginId
  };
}

var Yt = {
  idOf: e => e.skillId,
  invalidNameTag: "skills_sync_invalid_name",
  collisionTag: "skills_sync_name_collision"
};

function jt(e, n, r) {
  return Wir(n, r, {
    ...Yt,
    dirFor: t => U(e, t),
    carry: tt,
    ...Hn() && {
      markCollisionLoser: Xt
    }
  });
}

function Xt(e) {
  return {
    ...e,
    updatedAt: v$e
  };
}

function qt(e, n, r) {
  let t = r8t({
    skillName: e,
    displayName: void 0,
    description: sK(n.description),
    hasUserSpecifiedDescription: !0,
    markdownContent: "",
    allowedTools: [],
    argumentHint: void 0,
    argumentNames: [],
    whenToUse: void 0,
    version: void 0,
    model: void 0,
    disableModelInvocation: n.disableModelInvocation ?? !1,
    userInvocable: n.userInvocable ?? !0,
    source: "userSettings",
    baseDir: r,
    serverAttribution: M9t(n.skillId, n.backingPluginId),
    loadedFrom: "syncedSkills",
    hooks: void 0,
    executionContext: void 0,
    agent: void 0,
    paths: void 0,
    effort: void 0,
    shell: void 0,
    skillFile: Cfs("was not read: this command was listed before its file was downloaded")
  });
  if (t?.type === "prompt") t.getPromptForCommand = async (u, h) => {
    let y = await r_e(e);
    if (y.ok) {
      let R = (await ef(pm(), h.storageV5)).find(S => S.loadedFrom === "syncedSkills" && d0(S) === d0(t) && S.name === t.name && S.type === "prompt" && S.getPromptForCommand !== t.getPromptForCommand);
      if (R && R.type === "prompt") return t.source = R.source, t.skillRoot = R.skillRoot, 
      t.skillFile = R.skillFile, t.contentLength = R.contentLength, t.progressMessage = R.progressMessage, 
      t.userInvocable = R.userInvocable, R.getPromptForCommand(u, h);
    }
    let M = y.ok ? "skill not found after download" : y.reason;
    return [ {
      type: "text",
      text: !y.ok && y.withheld ? `${fxn(t.name)} Proceed without it.` : `Skill ${e} could not be downloaded (${M}). Proceed without it.`
    } ];
  };
  return t;
}

function $t(e, n) {
  return fir({
    root: () => n,
    configHome: Ee,
    rootLabel: ZV,
    event: "skills_sync_root_refused",
    storageV5: e
  });
}

var it = mir("zip fetch failed"), Ce = kCn("skill archive unusable or landing obstructed");

async function on(e, {round: n, credentials: r, storageV5: t, replacesAttributedCopy: u, targetHeldSkillFile: h, classifyOccupant: y, markTargetDestroyed: M}, L) {
  let R = n.root, S = U(R, e.name), A = B(rn(R), $n(R, S)), w = B(Jf(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    if (n.guard.refused()) return ckt;
    if (L !== void 0) await Ot(w, L); else {
      if (!u && h && await y(H(S)) === "inFlight") return X("info", "skills_sync_target_in_flight_elsewhere"), 
      DJr;
      if (!await sQo(e.skillId, w, e.requestedVersion, {
        isBackground: !0,
        credentials: r
      })) return it;
    }
    if (!await n.guard.verify()) return ckt;
    await re(A, {
      recursive: !0,
      force: !0
    }), await Pt(rn(R), {
      recursive: !0
    }), await Nir(w, A, {
      skipEntry: O => O.split(/[\\/]/).some(q => LY(q))
    });
    let I = A, D = await qn(A, {
      withFileTypes: !0
    });
    if (!D.some(O => O.name === "SKILL.md") && D.length === 1 && D[0].isDirectory()) I = B(A, D[0].name);
    try {
      if (!(await Ae(B(I, "SKILL.md"))).isFile()) return X("warn", "skills_sync_extracted_zip_unusable"), 
      Ce;
    } catch {
      return X("warn", "skills_sync_extracted_zip_unusable"), Ce;
    }
    if (await $ir(I)) return X("warn", "skills_sync_extracted_zip_unusable"), Ce;
    if (!await n.guard.verify()) return ckt;
    if (u) await re(S, {
      recursive: !0,
      force: !0
    });
    try {
      await Un(I, S);
    } catch (O) {
      let q = E(O);
      if (u || !TCn(q)) {
        if (u) M();
        return X("warn", "skills_sync_promotion_failed", {
          code: q ?? "unknown"
        }), ukt(q);
      }
      let de = await y(H(S));
      if (de === "inFlight") return X("info", "skills_sync_target_in_flight_elsewhere"), 
      DJr;
      if (de === "landed") await re(S, {
        recursive: !0,
        force: !0
      }); else if (!await Pe(S, t)) return M4t;
      try {
        await Un(I, S);
      } catch (ke) {
        M();
        let N = E(ke);
        return X("warn", "skills_sync_promotion_failed", {
          code: N ?? "unknown"
        }), ukt(N);
      }
    }
    return ses;
  } finally {
    if (await re(w, {
      force: !0
    }).catch(() => {}), !n.guard.refused() && await AW(R, Ee(), {
      event: "skills_sync_root_refused",
      phase: "sweep",
      rootLabel: ZV
    }, {
      checkStagingLeaf: !0,
      storageV5: t
    }).catch(() => null) === "real") await re(A, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}

var Zt = 500;

async function Jt(e, n) {
  try {
    return await on(e, n, void 0);
  } catch {
    return X("warn", "skills_sync_extract_retry"), await J(Zt), on(e, n, void 0);
  }
}

async function Qt(e, n) {
  let {fromHostMount: r} = n;
  if (r !== void 0) {
    let t = await on(e, n, r.zip).catch(() => null);
    if (t?.ok) n.markLandedFromHostMount();
    if (t !== null && (t.ok || t.cause !== "extract")) return t;
    rpo(r.kind, {
      reason: t === null ? "landing_threw" : "zip_unusable"
    }, n.hostMountMissCounts);
  }
  return Jt(e, n);
}

async function ln(e, n, r, t) {
  let u = np();
  if (u.syncPromise) return u.syncPromise;
  return u.syncPromise = ei(e, n, r, t).finally(() => {
    u.syncPromise = null;
  }), u.syncPromise;
}

async function Vt(e, n) {
  let r = B(e, _H), t, u, h;
  try {
    u = (await Q_(r, lKe)).content, h = Y(u);
  } catch {
    return null;
  }
  let y = Ut().safeParse(h);
  if (y.success) {
    let {lastUpdated: w, skills: I, staleDirs: D, pendingClaims: O, ...q} = y.data;
    t = {
      ...q,
      lastUpdated: w,
      skills: E4(Kt(), I),
      staleDirs: Xnt(D),
      pendingClaims: Xnt(O)
    };
  } else return null;
  let M = [ ...t.skills.map(w => ({
    row: w,
    syntheticListName: null
  })), ...[ "staleDirs", "pendingClaims" ].flatMap(w => (t[w] ?? []).map(I => ({
    row: {
      name: w === "pendingClaims" ? kdt(I).name : I
    },
    syntheticListName: w,
    entry: I
  }))) ], L = 0, R = [], S = [], A = [];
  for (let w of M) {
    let I = w.row;
    if (w.syntheticListName === "pendingClaims" && await cn(w.entry)) {
      A.push(w.entry);
      continue;
    }
    try {
      let D = d6e(I.name, e);
      if (await X4t(D, V())) {
        X("info", "skills_sync_sibling_root_row_skipped");
        continue;
      }
      if (await X4t(D, Ne())) {
        X("info", "skills_sync_trash_root_row_skipped");
        continue;
      }
      if (await Pe(D, n)) L++; else if (w.syntheticListName === "staleDirs") S.push(w.entry); else if (w.syntheticListName === "pendingClaims") A.push(w.entry); else R.push(w.row);
    } catch (D) {
      if (D instanceof i6e) {
        if (w.syntheticListName === "staleDirs") S.push(w.entry); else if (w.syntheticListName === "pendingClaims") A.push(w.entry); else R.push(w.row);
        continue;
      }
    }
  }
  if (R.length > 0 || S.length > 0 || A.length > 0) {
    let w = _({
      ...t,
      skills: R,
      staleDirs: S.length > 0 ? S : void 0,
      pendingClaims: A.length > 0 ? A : void 0
    }, null, 2);
    if (w !== u) await Tn(r, w).catch(() => {});
  } else await re(r, {
    force: !0
  }).catch(() => {});
  return L;
}

async function ei(e, n, r, t) {
  let u = Date.now(), h = performance.now(), y = !1, M = !1, L = !1, R = !1, S = () => {
    let N = Date.now() - u;
    return {
      account_opt_in: L,
      idle: R,
      woken: "woken" in t,
      trigger: c(t.trigger),
      ..."tickLateMs" in t && {
        tick_late_ms: t.tickLateMs
      },
      duration_ms: N,
      suspended_ms: Math.max(0, Math.round(N - (performance.now() - h)))
    };
  }, A = new Map, w = !1, I = null, D = np(), O = !1, q = null, de = new Set, ke = !1;
  try {
    if (L = Vdn(), akt()) L = !0;
    if (!Lde(e) || !lkt()) {
      X("info", "skills_sync_gate_closed");
      let {placeholders: s, listedOwnerships: l} = np();
      if (l.clear(), s.size > 0) s.clear(), ele();
      f("skills_sync_round", "gate_closed", S());
      return;
    }
    if (res()) {
      X("info", "skills_sync_policy_verdict_pending"), f("skills_sync_round", "policy_verdict_pending", S());
      return;
    }
    let N = await gH(r);
    if (N === null) {
      X("info", "skills_sync_bucket_unresolved"), f("skills_sync_round", "bucket_unresolved", S());
      return;
    }
    let K = $t(n, Jn(N));
    I = K;
    let F = K.root;
    R = t.trigger === "resync" && !("woken" in t) && D.consecutiveFailedRounds === 0 && !uxn(e) && Fn();
    let ue = await zn({
      syncedRoot: V(),
      bucket: N,
      root: F,
      trigger: t.trigger,
      pinned: iH(e),
      lastGeneration: D.bucketGeneration,
      holdsPlaceholders: D.placeholders.size > 0,
      idle: R
    });
    if (!ue.list) {
      if (D.bucketGeneration = ue.generation, ue.reload) {
        let s = await ye(n, K);
        if (s) {
          let l = new Set;
          for (let b of s.skills) try {
            l.add(H(U(F, b.name)));
          } catch {}
          Too(l);
        }
        q = new Set, ele();
      }
      g("skills_sync_round", {
        ...S(),
        reused: !0,
        reloaded: ue.reload
      });
      return;
    }
    ke = !0, X("info", "skills_sync_starting");
    let x, Se = [], ot = performance.now();
    if (iH(e)) {
      let [s, l] = await Promise.all([ A$e.of(e).listEntries("skills", {
        startup: t.trigger === "startup"
      }), a.CLAUDE_CODE_SYNC_SKILLS ? xKt({
        isBackground: !0,
        credentials: r
      }) : null ]);
      if (!s.success) x = s; else if (Se = s.entries.map(Wt), l === null) x = {
        success: !0,
        skills: Se
      }; else if (!l.success) x = l; else x = {
        success: !0,
        skills: jir(Se, l.skills, b => b.skillId, (b, C) => ({
          ...tt(b, C),
          userInvocable: C.userInvocable,
          disableModelInvocation: C.disableModelInvocation
        }))
      };
    } else x = await xKt({
      isBackground: !0,
      credentials: r
    });
    let dn = Math.round(performance.now() - ot);
    if (O = !x.success && _8(x), O) X("warn", "skills_sync_list_refused"), D.listedOwnerships.clear(), 
    x = {
      success: !0,
      skills: Se
    };
    if (!x.success) {
      D.consecutiveFailedRounds++;
      let s = ZYe(x), l = {
        ...S(),
        ...s
      };
      if (X("warn", "skills_sync_list_failed", l), i("tengu_skills_sync_list_failed", l), 
      (x.kind === "timeout" || x.kind === "network" || x.kind === "http") && l.suspended_ms > ve) f("skills_sync_round", "suspended", l); else m("skills_sync_round", "list_failed", l);
      return;
    }
    if (D.consecutiveFailedRounds = O ? D.consecutiveFailedRounds + 1 : 0, !await d3(V(), N) && await nn(F).then(s => s.isDirectory(), () => !1) && await ude({
      dir: F,
      trashRoot: Ne(),
      configHome: Ee(),
      failureEvent: "skills_sync_trash_move_failed",
      storageV5: n
    }).catch(() => !1)) X("info", "skills_sync_unmarked_bucket_quarantined");
    await rt(n, F), await gir(V(), N), w = !0;
    let ge = await ZCn(F);
    if (ue.shared && ge !== null && D.bucketGeneration !== null && ge.token !== D.bucketGeneration) ele();
    await Ht(n);
    let ee = await ye(n, K), {toDownload: ne, toRemove: te, carryover: fe, liveDirs: xe, carryoverOwningLiveDir: at} = jt(F, x.skills, ee?.skills ?? []), lt = J4t(xe), Be = async s => {
      let l;
      try {
        l = d6e(s, F);
      } catch (C) {
        if (C instanceof i6e) return !1;
        return !0;
      }
      let b = await lt(l);
      if (b === "live") return !0;
      if (b === "indeterminate") return !1;
      return de.add(l), Pe(l, n);
    }, ze = new Set(Array.from(xe, s => H(s))), ct = Too(ze);
    if (qrs(ze) + ct > 0) aR(), sn(), FB.emit();
    q = xe;
    let dt = await Promise.all(fe.map(s => at.has(s.skillId) ? Xn(F, s.name, n) : null)), He = new Set;
    for (let [s, l] of fe.entries()) {
      let b = dt[s];
      if (b === null) continue;
      if (!b) {
        let P = x.skills.find(z => z.skillId === l.skillId);
        if (P) He.add(l.skillId), ne.push({
          item: P
        });
        continue;
      }
      let C = H(U(F, l.name));
      if (D.placeholders.delete(C)) D.pendingDownloads.get(C)?.resolve({
        ok: !0
      }), D.pendingDownloads.delete(C), pV(), aR(), M = !0, X("info", "skills_sync_materialized_elsewhere");
    }
    let ut = fe.filter(s => !He.has(s.skillId)), pe = new Map(fe.filter(s => He.has(s.skillId)).map(s => [ s.skillId, s ])), G = new Set(ee?.staleDirs ?? []), ae = new Set, Z = new Set, Ue = {
      pid: process.pid,
      procStart: await Ul(process.pid)
    }, Ke = [];
    if (ee?.pendingClaims) {
      let s = ee.pendingClaims, l = new Set;
      for (let b of s) if (await cn(b)) l.add(kdt(b).name); else Ke.push(b);
      for (let b of Ke) {
        let {name: C} = kdt(b);
        if (l.has(C) || ze.has(C)) continue;
        G.add(C), Z.add(b);
      }
    }
    for (let s of G) if (await Be(s)) G.delete(s), ae.add(s);
    if (ae.size > 0 || Z.size > 0) M = !0;
    let we = dir(ee?.skills ?? [], [ ...fe, ...ne.flatMap(({prev: s}) => s ?? []) ], s => s.skillId, (s, l) => s.backingPluginId === l.backingPluginId && s.updatedAt === v$e === (l.updatedAt === v$e));
    if (ne.length === 0 && te.length === 0) {
      if (M) ele();
      if ((ae.size > 0 || Z.size > 0 || we.attributionMoved) && ee) await en({
        lastUpdated: ee.lastUpdated,
        skills: we.rows,
        staleDirs: G.size > 0 ? Array.from(G) : void 0,
        pendingClaims: void 0
      }, {
        staleDirs: ae,
        pendingClaims: Z,
        removedSkillIds: Wn,
        deferredRows: Yn
      }, n, K);
      if (ee) {
        let b = new Date;
        await At(Oe(F), b, b).catch(() => {});
      }
      let s = M ? null : ge;
      Gn(await Q4t(F, "skills", G.size === 0 && !O && !iH(e), s, Ie()), s), X("info", "skills_sync_no_changes", {
        duration_ms: Date.now() - u,
        list_ms: dn,
        ...t.trigger === "startup" && {
          first_message_gate_open_ms: Math.round(performance.now() - h)
        }
      });
      let l = {
        ...S(),
        no_changes: !0
      };
      if (O) f("skills_sync_round", "not_entitled", l); else g("skills_sync_round", l);
      return;
    }
    let un = 0;
    for (let {item: s, prev: l} of ne) if (!l) {
      let b = U(F, s.name), C = qt(H(b), s, b);
      if (C === void 0) continue;
      Vrs(C), un++, A.set(s.skillId, Wrs(H(U(F, s.name))));
    }
    if (un > 0) aR(), sn(), FB.emit();
    let fn = !0;
    try {
      let s = [];
      for (let {item: l} of ne) try {
        s.push(Gwr(H(U(F, l.name)), Ue));
      } catch {}
      if (s.length > 0) await en({
        lastUpdated: ee?.lastUpdated ?? 0,
        skills: we.rows,
        staleDirs: G.size > 0 ? Array.from(G) : void 0,
        pendingClaims: s
      }, {
        staleDirs: ae,
        pendingClaims: Z,
        removedSkillIds: Wn,
        deferredRows: Yn
      }, n, K);
    } catch (s) {
      if (s instanceof lQ) throw s;
      fn = !1, X("warn", "skills_sync_pending_claims_write_failed");
    }
    tn().resolve();
    let ft = Math.round(performance.now() - h);
    if (!fn) {
      if (m("skills_sync_round", "pending_claims_write_failed", S()), M) ele();
      return;
    }
    let ie = [], Ge = [], mn = [], We = [], Me = 0, _n = 0, le = {}, yn = ({item: s, prev: l}) => l === void 0 && !pe.has(s.skillId) ? O_s(s) : void 0, kn = ne.flatMap(s => yn(s) ?? []), Sn = new Set(kn), Ye = new Map, gn = s => (X("warn", "skills_sync_host_mount_threw"), 
    d(j(s)), null), pn = Sn.size > 0 ? M_s(Sn, Ye).catch(gn) : null, Re = new Set, wn = new Map;
    await Promise.all(ne.map(Ta(Ve, async ({item: s}) => {
      wn.set(s, await jn(F, s.name, n));
    }))), await Promise.all(ne.map(qks(Ve, async s => {
      let l = yn(s);
      if (l === void 0) return;
      let C = await ((await pn)?.readZip(l, s.item).catch(gn));
      return C ? {
        kind: l,
        zip: C
      } : void 0;
    }, async ({item: s, prev: l}, b) => {
      let C = wn.get(s) ?? null, P = it;
      try {
        P = await Qt(s, {
          round: K,
          credentials: r,
          storageV5: n,
          classifyOccupant: z => ni(z, n, K),
          markTargetDestroyed: () => {
            y = !0;
          },
          replacesAttributedCopy: l !== void 0 && await st(F, l.name, s.name) || pe.has(s.skillId),
          targetHeldSkillFile: Te() && C !== null,
          fromHostMount: b,
          markLandedFromHostMount: () => {
            Re.add(s.skillId);
          },
          hostMountMissCounts: Ye
        });
      } catch {
        P = Ce, X("warn", "skills_sync_extract_failed");
      }
      if (P.ok) {
        ie.push(s);
        let z = l !== void 0 && l.name !== s.name;
        if (z || (C === null ? l !== void 0 || pe.has(s.skillId) : C !== await jn(F, s.name, n))) Ge.push(s);
        if (z) Ge.push(l);
        if (l && l.name !== s.name) {
          if (!await Be(l.name)) G.add(l.name);
        }
        Krs(H(U(F, s.name))), pV(), aR(), g("skills_sync_download", {
          landed_from_mount: Re.has(s.skillId)
        });
      } else {
        let z = ies(P.cause);
        if (z === null) Me++, X("info", "skills_sync_landing_deferred"); else le[z] = (le[z] ?? 0) + 1, 
        m("skills_sync_download", z);
        let ce = l ?? pe.get(s.skillId);
        if (ce && P.cause === "deferred") {
          if (We.push(ce), l && l.name !== s.name) G.add(l.name), _n++;
        } else if (ce) mn.push(ce); else try {
          let Q = U(F, s.name);
          if (await nn(Q).then(() => !1, kt => W(kt))) Z.add(Gwr(H(Q), Ue));
        } catch {}
      }
      A.get(s.skillId)?.(P.ok ? {
        ok: !0
      } : {
        ok: !1,
        reason: aes(P.cause)
      });
    })));
    let me = [];
    await Promise.all(te.map(Ta(Ve, async s => {
      if (!await Be(s.name)) me.push(s);
    })));
    let je = new Set(te.map(s => s.skillId));
    for (let s of me) je.delete(s.skillId);
    let Xe = ie.length > 0 || y || me.length < te.length || ae.size > 0 || Z.size > 0, mt = Xe || _n > 0 || we.attributionMoved, hn = te.filter(s => je.has(s.skillId)), yt = await Promise.all(hn.map(s => Xn(F, s.name, n))), Mn = [ ...Ge, ...hn.filter((s, l) => !yt[l]) ].flatMap(s => {
      try {
        return [ hPe(H(d6e(s.name, F))) ];
      } catch {
        return [];
      }
    });
    if (Rts(Mn), Mn.length > 0) aR();
    if (Xe || M) ele();
    let De = !1;
    if (mt) {
      let s = [ ...ut, ...ie, ...mn, ...me ], l = new Set;
      for (let P of [ ...s, ...We ]) try {
        l.add(H(U(F, P.name)));
      } catch {}
      for (let P of l) Z.add(Gwr(P, Ue));
      for (let P of Ke) if (l.has(kdt(P).name)) Z.add(P);
      let b = (P, z) => en({
        lastUpdated: Date.now(),
        skills: P,
        staleDirs: G.size > 0 ? Array.from(G) : void 0
      }, {
        staleDirs: ae,
        pendingClaims: Z,
        removedSkillIds: je,
        deferredRows: We,
        onlyOverReadable: z
      }, n, K);
      await b(s, !1);
      let C = ie.length > 0 && Te() ? 2 : 0;
      for (let P = 0; P < C; P++) {
        await J(D.lostRowsRecheckMs * (1 + Math.random()));
        let z = await ye(n, K), ce = new Set(z?.skills.map(Q => Q.skillId));
        if (De = !ie.every(Q => ce.has(Q.skillId)), !De) break;
        if (z === null) continue;
        X("info", "skills_sync_manifest_rows_lost");
        try {
          await b(ie, !0);
        } catch (Q) {
          if (Q instanceof lQ) throw Q;
          d(j(Q));
          break;
        }
      }
      if (De) X("warn", "skills_sync_manifest_rows_unconfirmed");
    }
    let qe = ne.length - ie.length - Me, Rn = await pn, $e = {
      downloaded: ie.length - Re.size,
      from_mount: Re.size,
      mount_eligible: kn.length,
      mount_read_ms: Rn?.spentMs() ?? 0,
      mount_wait_ms: Rn?.waitedMs() ?? 0,
      ..._Nn(Ye)
    };
    X("info", "skills_sync_complete", {
      ...$e,
      removed: te.length,
      duration_ms: Date.now() - u,
      list_ms: dn,
      ...t.trigger === "startup" && {
        first_message_gate_open_ms: ft
      }
    });
    let Dn = S();
    i("tengu_skills_sync_success", {
      ...Dn,
      ...$e,
      removed: te.length,
      total: x.skills.length
    });
    let vn = Xe || M ? null : ge;
    Gn(await Q4t(F, "skills", !O && qe === 0 && Me === 0 && !De && me.length === 0 && G.size === 0 && !iH(e), vn, Ie()), vn);
    let Ze = {
      ...Dn,
      ...$e,
      deferred: Me,
      removed: te.length,
      total: x.skills.length
    };
    if (qe > 0) f("skills_sync_round", "download_failed", {
      ...Ze,
      failed: qe,
      download_failed: le.download_failed ?? 0,
      extract_failed: le.extract_failed ?? 0,
      root_refused: le.root_refused ?? 0,
      local_failed: le.local_failed ?? 0
    }); else if (O) f("skills_sync_round", "not_entitled", Ze); else g("skills_sync_round", Ze);
  } catch (N) {
    if (M || y) ele();
    if (N instanceof lQ && w) X("warn", "skills_sync_late_root_refusal", {
      reason: N.reason,
      duration_ms: Date.now() - u
    }), f("skills_sync_round", "root_refused", S()), w = !1; else if (N instanceof lQ) X("warn", "skills_sync_root_refused_round", {
      reason: N.reason,
      duration_ms: Date.now() - u
    }), f("skills_sync_round", "root_refused", S()); else {
      if (!O) D.consecutiveFailedRounds++;
      X("error", "skills_sync_unexpected_error", {
        duration_ms: Date.now() - u
      });
      let K = S();
      i("tengu_skills_sync_error", K), m("skills_sync_round", "unexpected_error", K);
    }
  } finally {
    if (ke) xn();
    for (let N of A.values()) N({
      ok: !1,
      reason: "skills sync failed"
    });
    if (tn().resolve(), q !== null && I !== null) await nes({
      bucketRoot: I.root,
      listedDirs: q,
      removalTriedDirs: de,
      isSkillFileGone: N => Gt(N, n)
    }).catch(() => {
      X("warn", "skills_sync_hooks_removal_failed");
    });
    if (I === null || I.guard.refused()) w = !1;
    if (w && I !== null) {
      if (await AW(I.root, Ee(), {
        event: "skills_sync_root_refused",
        phase: "sweep",
        rootLabel: ZV
      }, {
        checkStagingLeaf: !0,
        storageV5: n
      }).catch(() => null) === "real") await re(rn(I.root), {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }
}

async function cn(e) {
  let {ownerPid: n, ownerProcStart: r} = kdt(e);
  return n !== void 0 && n !== process.pid && Aa(n) && await Ev(n, r);
}

async function ni(e, n, r) {
  let t = await ye(n, r);
  if (!t) return "unattributed";
  for (let u of t.skills) if (await st(r.root, u.name, e)) return "landed";
  for (let u of t.pendingClaims ?? []) if (kdt(u).name === e && await cn(u)) {
    if (!Te()) return "inFlight";
    let h = await nn(B(r.root, e)).then(y => Math.floor(y.ctimeMs), y => {
      if (W(y)) return -1 / 0;
      return X("warn", "skills_sync_occupant_unreadable", {
        code: E(y) ?? "unknown"
      }), 1 / 0;
    });
    if (!(Date.now() - h >= Bt)) return "inFlight";
    return X("info", "skills_sync_live_claim_timed_out"), "unattributed";
  }
  return "unattributed";
}

async function st(e, n, r) {
  try {
    let t = U(e, n), u = U(e, r);
    return H(t) === H(u) || await X4t(t, u);
  } catch {
    return !1;
  }
}

function rt(e, n) {
  return uir({
    root: n,
    trashRoot: Ne(),
    configHome: Ee(),
    events: {
      refused: "skills_sync_root_refused"
    },
    storageV5: e
  });
}

export { z2o, Oke, G2o, V2o, K2o, Chn, ele, Rhn };
