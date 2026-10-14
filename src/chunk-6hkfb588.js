// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { lt, B, q, Ze, Qee, Kp, VG, jje, ve } from "./chunk-3pqddg8f.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { _, Do, t } from "./chunk-kawq2919.js";

import { dT, Gen, ee, DTs, v1n, LTs, NTs } from "./chunk-kq1bg4dg.js";

import { $G, d } from "./chunk-6ah1819r.js";

import { $t } from "./chunk-g6nh65r0.js";

import { s_, $0, eA, DH, gBe, Cc, k, hE } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { rn } from "./chunk-yxennhe9.js";

import { mt } from "./chunk-j90se18b.js";

import { p } from "./chunk-jkzenvsk.js";

import { Oo, FHs, UHs, BHs, jHs, oj, nr, F9, Hn, yE, mT } from "./chunk-f1zpf9me.js";

import { IP, R_o, D6e } from "./chunk-hk8p0fqv.js";

import { ycr, _cr, bcr, Scr, f6t, wcr, rl, xS } from "./chunk-84yp45y8.js";

import { $st, Kqe } from "./chunk-bkx9v5fh.js";

import { kNe, Sus } from "./chunk-e4tjnht7.js";

import { VE, UEt, Zqt, Qle, gsr, hsr, BVe, F2, ed, Zle, ede, tde, oQ } from "./chunk-69rr80fg.js";

import { PEt, A9r, lAn, tsr, Une, vW, MVe, HVe, Mqt, nsr, fAn, eR, G7o, y4, V7o } from "./chunk-exeqjnzg.js";

import { pnt } from "./chunk-cm3ke8xm.js";

import { Phe, Ole, jwt, i4, Jvn, Qvn, iy, ay, ftt, zy, u9o, K$, xTe, g9o, Ntr, b9o, S9o, w9o, R2, v9o, E9o, Ftr, k9o, Wwt, zwt, nEn, T9o, A9o, C9o, R9o, rYr, oYr, x9o, P9o, I9o, q$, Gtr, gtt, Gwt, H9o, D9o, L9o, F9o, ib, U9o, oEn, a4, B9o, W9o } from "./chunk-jtgrm34s.js";

import { Ohe, Mhe, Hhe } from "./chunk-cqnfahpy.js";

import { dtt, Atr, Ovn, CTe, $wt, Q2t, Z2t } from "./chunk-pc1n77re.js";

import { Fwt, Mvn, Rhe, u8o, D4r, Htr, f8o, g8o, R2e, R8o, oVt, df, I8o, Bvn, sVt, _De, Ple, M8o } from "./chunk-4et2k1s1.js";

import { X8o, t9o } from "./chunk-q1xb3dym.js";

import { ES } from "./chunk-es6vysyb.js";

import { j4r, W4r, G6, zvn, ctt, x2e, U8o } from "./chunk-56c5q77x.js";

import { aVt, Ltr } from "./chunk-w134pak1.js";

import { Y4r } from "./chunk-taqh33hd.js";

import { SEn } from "./chunk-f2w6pzz6.js";

import { d4 } from "./chunk-5egdactz.js";

import { Ri } from "./chunk-4b2xazcw.js";

import { _s } from "./chunk-1dj3skht.js";

import { o, v, M, oe, u } from "./chunk-cvcg6n1z.js";

class Cn {
  working=_s({
    working: !1
  });
  userPrompt=_s({
    waitingFor: void 0
  });
}

var Se = new lt(() => new Cn);

function ltt(e, n) {
  Se.of(e).working.setState(r => r.working === n ? r : {
    working: n
  });
}

function Avn(e) {
  return Se.of(e).working.getState().working;
}

function ptr(e, n) {
  return Se.of(e).working.subscribe(n);
}

function Cvn(e, n) {
  Se.of(e).userPrompt.setState(r => r.waitingFor === n ? r : {
    waitingFor: n
  });
}

function Rvn(e) {
  return f4r(e) !== void 0;
}

function f4r(e) {
  return Se.of(e).userPrompt.getState().waitingFor;
}

function i8o(e, n) {
  return Se.of(e).userPrompt.subscribe(n);
}

var Ot = 120, xn = `act:${Ot}`, oi = "act:0";

function Ln(e) {
  if (!e.activityOkReported) e.activityOkReported = !0, g("artifact_activity_emit");
}

function Wn(e, n, r) {
  n(r), Ln(e);
}

function In(e, n, r) {
  n(r), Ln(e);
}

function It(e, n) {
  for (let r of e.activitySenders.values()) Wn(e, r, n ? xn : oi);
  for (let r of e.agentActivitySinks.values()) In(e, r, n ? Ot : 0);
}

function On(e) {
  return e.activitySenders.size + e.agentActivitySinks.size;
}

function Mt(e) {
  if (On(e) === 0) return;
  if (e.activityRefreshTimer !== void 0) return;
  e.activityRefreshTimer = setInterval(n => It(n, !0), e.activityRefreshMs, e), e.activityRefreshTimer.unref?.();
}

function Mn(e) {
  if (On(e) === 0 && e.activityRefreshTimer !== void 0) clearInterval(e.activityRefreshTimer), 
  e.activityRefreshTimer = void 0;
}

function si(e, n) {
  if (n) {
    if (e.activityClearTimer !== void 0) {
      clearTimeout(e.activityClearTimer), e.activityClearTimer = void 0;
      return;
    }
    e.activityOnsetTimer ??= setTimeout(r => {
      r.activityOnsetTimer = void 0, It(r, !0), Mt(r);
    }, e.activityEdgeDebounceMs, e), e.activityOnsetTimer.unref?.();
  } else {
    if (e.activityOnsetTimer !== void 0) {
      clearTimeout(e.activityOnsetTimer), e.activityOnsetTimer = void 0;
      return;
    }
    e.activityClearTimer ??= setTimeout(r => {
      if (r.activityClearTimer = void 0, r.activityRefreshTimer !== void 0) clearInterval(r.activityRefreshTimer), 
      r.activityRefreshTimer = void 0;
      It(r, !1);
    }, e.activityEdgeDebounceMs, e), e.activityClearTimer.unref?.();
  }
}

function Pn() {
  return B();
}

function Dn(e) {
  if (e.activityUnsubscribe !== void 0) return;
  let n = Pn();
  e.activityUnsubscribe = ptr(n, () => {
    try {
      si(e, Avn(n));
    } catch (r) {
      d(r);
    }
  });
}

function Fn(e) {
  return Avn(Pn()) && e.activityOnsetTimer === void 0 || e.activityClearTimer !== void 0;
}

function Vn(e, n, r) {
  if (e.disposed) return;
  if (Dn(e), e.activitySenders.set(n, r), v9o(e, n), Fn(e)) Wn(e, r, xn), Mt(e);
}

function Nn(e, n, r) {
  if (e.activitySenders.get(n) === r) e.activitySenders.delete(n), E9o(e, n), Mn(e);
}

function Xe(e, n, r) {
  if (e.disposed) return;
  if (Dn(e), e.agentActivitySinks.set(n, r), Fn(e)) In(e, r, Ot), Mt(e);
}

function Qe(e, n, r) {
  if (e.agentActivitySinks.get(n) === r) e.agentActivitySinks.delete(n), Mn(e);
}

var et = "frame-sync.v1";

function Pe(e, n) {
  let r = new URL("/api/frame/sync", BHs());
  if (r.searchParams.set("slug", e), n?.commentHint === !0) r.searchParams.set("comment_hint", "1");
  if (n?.versionNotices === !0) r.searchParams.set("vn", PEt);
  return Atr(r);
}

var Pt = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;

function we(e) {
  if (!Pt.test(e)) return !1;
  let n = e.split(".", 4)[2];
  return n !== void 0 && ui(n).role.endsWith("_agent");
}

var ai = 28;

function ui(e) {
  let n = e.length - ai;
  if (n <= 0 || e.slice(n, n + 4) !== "_id_") return {
    role: e
  };
  let r = e.slice(n + 4);
  return pnt.test(r) ? {
    role: e.slice(0, n),
    id: r
  } : {
    role: ""
  };
}

function tt(e) {
  let n = e.split(".", 6)[4];
  if (n === void 0 || !/^[0-9]{1,12}$/.test(n)) return;
  let r = Number(n);
  return Number.isSafeInteger(r) && r > 0 ? r : void 0;
}

var ci = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function me(e) {
  let [n, r] = e.split(".", 3);
  if (n === void 0 || r === void 0 || r === "") return;
  let i = Buffer.from(n, "base64url").toString("utf8");
  if (!ci.test(i) || Buffer.from(i, "utf8").toString("base64url") !== n) return;
  return {
    accountUuid: i,
    organizationUuid: r
  };
}

var di = 6e4, Un = "boot_request_error", Dt = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED", $n = "JOIN_DENIED_REASON_DENIED", Kn = "JOIN_DENIED_REASON_CAP_INVALID", Bn = {
  on: "socket",
  detail: "4503",
  opened: !0,
  uptimeMs: 0,
  ageMs: 0
}, nt = p(() => u({
  kind: o(),
  slug: o().optional(),
  actor: o().optional(),
  payload: oe().optional()
})), Ft = p(() => u({
  cap: o(),
  exp: v()
})), De = p(() => u({
  reason: o()
}));

function Vt(e, n) {
  return _({
    kind: "activity",
    slug: e,
    payload: {
      busyS: n
    }
  });
}

function jn(e) {
  if (a.CLAUDE_CODE_REMOTE) return "remote";
  if (jHs()) return "cp_override";
  if (Z2t(Pe(e)) !== null) return "egress_denied";
  return null;
}

async function qn(e, n) {
  let r = e.storedCap;
  if (!e.rebootNeeded && r !== void 0 && r.exp * 1e3 - Date.now() > di) {
    let w = await hE(e.context.storageV5).catch(() => {});
    if (!n.isCurrent()) return {
      outcome: "stale"
    };
    if (s_(e.owner, w)) return {
      outcome: "token",
      token: r.cap,
      boot: void 0
    };
  }
  let i, l = Date.now();
  try {
    i = await eR({
      slug: e.slug,
      env: Oo()
    }, n.feature, e.abort.signal, {
      agentPeer: !0,
      ...e.bootedVersion !== void 0 && {
        lean: {
          version: e.bootedVersion,
          mustCarry: w => "syncToken" in w
        }
      },
      speculative: !0,
      credentials: e.context.credentials
    });
  } catch {
    i = {
      err: "boot threw",
      errorCode: Un
    };
  }
  if (!n.isCurrent()) return {
    outcome: "stale"
  };
  if (i.err !== null) {
    if (vW(i)) return {
      outcome: "other_org"
    };
    if (Une(i)) return {
      outcome: "not_found"
    };
    return {
      outcome: "boot_failed",
      status: i.status,
      noAnswer: i.errorCode === Un,
      elapsedMs: Date.now() - l
    };
  }
  if (i.assetToken === void 0) return {
    outcome: "public_outside_org"
  };
  let s = i.data.syncToken, h = typeof s === "string" && Pt.test(s) ? me(s) : void 0;
  if (e.owner !== void 0 && h !== void 0 && !s_(e.owner, h)) return {
    outcome: "owner_changed"
  };
  let b = typeof s === "string" && we(s) ? h : void 0;
  if (typeof s !== "string" || b === void 0) return {
    outcome: "not_admitted"
  };
  return e.owner = b, e.rebootNeeded = !1, e.bootedVersion = i.ver, zn(e, li(s)), 
  {
    outcome: "token",
    token: s,
    boot: i.data
  };
}

function li(e) {
  return {
    cap: e,
    exp: tt(e) ?? Math.floor((Date.now() + nEn) / 1e3)
  };
}

function zn(e, n) {
  let r = Date.now(), i = Math.min(r + nEn, Math.max(r + T9o, n.exp * 1e3));
  e.storedCap = {
    cap: n.cap,
    exp: Math.floor(i / 1e3)
  }, e.capStrikes = 0;
}

function Yn(e, n, r) {
  switch (n) {
   case "ctrl:token_refresh":
    {
      let i = Ft().safeParse(r);
      if (i.success && we(i.data.cap) && s_(e.owner, me(i.data.cap))) zn(e, {
        cap: i.data.cap,
        exp: i.data.exp
      });
      return !0;
    }

   case "ctrl:token_refresh_declined":
    {
      let i = De().safeParse(r);
      if (i.success && i.data.reason === Dt) e.rebootNeeded = !0, e.storedCap = void 0;
      return !0;
    }

   default:
    return !1;
  }
}

function fi(e, n, r) {
  if (n()) return;
  if (e.taskId !== void 0) try {
    ib(e.taskId, e.context.taskRegistry, {
      quiet: !0
    });
  } catch {}
  r("error");
}

function rt(e) {
  if (e.stopped = !0, e.storedCap = void 0, e.abort.abort(), e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer), 
  e.reconnectTimer = void 0;
  if (e.send = void 0, e.state = "closed", e.taskId !== void 0) {
    let n = e.taskId;
    e.taskId = void 0;
    try {
      ib(n, e.context.taskRegistry, {
        quiet: !0
      });
    } catch {}
  }
}

var pi = 404;

function mi(e) {
  let n = Number(e);
  return n === 1008 || n >= 4e3 && n <= 4999;
}

function Jn(e, n, r) {
  switch (n.on) {
   case "dial_error":
    return n.deterministic ? "refused" : "dropped";

   case "boot":
    if (y4(n.status)) return "unavailable";
    if (n.noAnswer) return n.elapsedMs >= r.stallThresholdMs ? "unavailable" : "dropped";
    return "refused";

   case "socket":
    {
      if (n.detail === zwt) return "revoked";
      if (n.opened) {
        if (n.uptimeMs >= r.stallThresholdMs) return "dropped";
        if (n.detail === Wwt && !e.rebootNeeded) return "unavailable";
        return mi(n.detail) ? "refused" : "dropped";
      }
      let i = CTe(n.detail);
      if (i !== null) return y4(i.status) || i.cfMitigated || i.status === pi ? "unavailable" : "refused";
      return n.detail === Ovn || n.ageMs >= r.stallThresholdMs ? "unavailable" : "dropped";
    }
  }
}

function Xn(e, n, r) {
  let i = Jn(e, n, r);
  return i === "refused" || i === "revoked";
}

function Qn(e, n, r) {
  let i = Jn(e, r, n);
  if (i === "revoked" || i === "refused") e.storedCap = void 0; else if (i === "dropped" && r.on !== "boot" && e.storedCap !== void 0) {
    let s = r.on === "socket" && r.opened && r.uptimeMs >= n.minUptimeMs;
    if (e.capStrikes = s ? 0 : e.capStrikes + 1, e.capStrikes >= A9o) e.storedCap = void 0;
  }
  if (i === "revoked") return {
    next: "end",
    reason: "revoked"
  };
  if (i === "unavailable") {
    let s = e.stalledSince === void 0;
    if (s) e.stalledSince = Date.now(), e.stalls = 0;
    let h = Math.min(n.stallMinMs * 2 ** e.stalls, n.stallMaxMs / 2), b = Math.min(h * 2, n.stallMaxMs);
    return e.stalls++, {
      next: "redial",
      delayMs: Math.round(h + Math.random() * (b - h)),
      stalled: !0,
      stallRunStarted: s
    };
  }
  if (e.stalledSince = void 0, i === "refused") {
    if (e.refusals++, e.refusals > n.maxConsecutiveRefusals) return {
      next: "end",
      reason: "refused"
    };
  }
  if (r.on === "socket" && r.opened) {
    if (r.uptimeMs >= n.stallThresholdMs) e.refusals = 0;
    if (r.uptimeMs >= n.minUptimeMs) e.backoff = 0;
  }
  let l = Math.min(n.capMs, n.baseMs * 2 ** Math.min(e.backoff, 5));
  return e.backoff++, {
    next: "redial",
    delayMs: Math.round(Math.random() * l),
    stalled: !1,
    stallRunStarted: !1
  };
}

function Nt(e, n, r) {
  if (e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer);
  e.state = "closed", e.reconnectTimer = setTimeout(hi, n, e, r), e.reconnectTimer.unref?.();
}

function hi(e, n) {
  e.reconnectTimer = void 0, n(e);
}

async function Zn(e, n, r, i) {
  let {slug: l} = e, {live: s} = ee(), h = !1, b = !1, w, S, R = () => b || !i(), x = Date.now(), G = () => h && e.openedAt > 0 ? Date.now() - e.openedAt : 0, L = y => {
    if (R()) return;
    b = !0;
    let T = G(), P = Date.now() - x;
    if (e.send === w) e.send = void 0, e.state = "closed", e.openedAt = 0;
    r.onEnded(y, {
      opened: h,
      uptimeMs: T,
      ageMs: P
    });
  };
  try {
    let y = await Q2t({
      ws: {
        url: Pe(l, {
          versionNotices: !0
        }),
        protocols: [ et, n ]
      },
      headers: {
        "User-Agent": $0()
      },
      description: r.description,
      timeout_ms: 0,
      persistent: !0,
      quietLifecycle: !0,
      ambient: !0,
      handshakeDeadlineMs: r.handshakeDeadlineMs,
      ...e.taskId !== void 0 && {
        reuseTaskId: e.taskId
      },
      transform: T => (r.onFrame(T), null),
      keepalive: r.keepalive,
      onSender: T => {
        if (R()) return;
        w = T, e.send = T, e.state = "open", S = P => T(Vt(l, P)), Xe(s, r.activitySinkKey, S);
      },
      onSenderClosed: () => {
        if (S !== void 0) Qe(s, r.activitySinkKey, S);
        if (w !== void 0 && e.send === w) {
          if (e.send = void 0, e.state === "open") e.state = "closed";
        }
        if (R()) return;
        let T = e.taskId, P = T === void 0 ? void 0 : e.context.taskRegistry.all()[T];
        if (T !== void 0 && P?.status !== "running") {
          L("task_ended");
          return;
        }
        setTimeout(fi, 0, e, R, L).unref?.();
      },
      onLifecycle: (T, P) => {
        if (R()) return;
        if (T === "open") {
          h = !0, e.everOpened = !0, e.openedAt = Date.now(), r.onOpen();
          return;
        }
        L(P);
      }
    }, e.context);
    if (e.taskId = y.data.taskId, !i()) return ib(y.data.taskId, e.context.taskRegistry, {
      quiet: !0
    }), {
      outcome: "stale"
    };
    return {
      outcome: "armed"
    };
  } catch (y) {
    return t(`[${r.label}] connect failed slug=${l}: ${y instanceof Error ? y.name : "error"}`), 
    {
      outcome: "error",
      error: y
    };
  }
}

var gi = "tengu_slate_lantern_hush", bi = [ 600, 86400 ], _i = [ 25, 600 ], Si = 50, vi = p(() => {
  let e = v().optional().catch(void 0);
  return u({
    idleAfterS: e,
    idleKeepaliveS: e
  });
});

function er(e, [n, r]) {
  return Math.min(Math.max(Math.round(e), n), r);
}

function wi() {
  let e = k(gi, null);
  if (typeof e === "string") e = mt(e, !1);
  let n = vi().safeParse(e), r = n.success ? n.data : {}, i = r.idleAfterS === void 0 || r.idleAfterS <= 0 ? 0 : er(r.idleAfterS, bi) * 1e3, l = (r.idleKeepaliveS === void 0 ? Si : er(r.idleKeepaliveS, _i)) * 1e3;
  return {
    idleAfterMs: i,
    idleKeepaliveMs: l
  };
}

function Ai(e, n) {
  if (kNe()) return 0;
  let r = Math.max(Sus(), Kp(), Qee() ?? 0, e.lastArtifactToolCallAt);
  return Math.max(0, n - r);
}

function it(e, n, r = Date.now()) {
  let i = wi();
  if (i.idleAfterMs <= 0) return n;
  return Ai(e, r) >= i.idleAfterMs ? Math.max(i.idleKeepaliveMs, n) : n;
}

var Ut = p(() => u({
  tag: o(),
  ver: o(),
  replay: M().optional()
})), Gt = "INVALIDATE_TAG_LIVE", Ht = "INVALIDATE_TAG_SHARED", rr = "INVALIDATE_TAG_HEAD", ir = p(() => u({
  commentsEmpty: M(),
  readAtMs: v().int().positive().max(864e13)
}));

function Kt(e) {
  return e * 3 + 5e3;
}

function yi() {
  return a.CLAUDE_CODE_ARTIFACT_PRESENCE ?? k("tengu_brass_plover", !1);
}

function ot(e) {
  if (!yi()) return "flag_off";
  return jn(e);
}

function Re() {
  return ee().presence;
}

function Fe(e) {
  return !e.stopped && Re().conns.get(e.slug) === e;
}

function or(e) {
  let {slug: n, url: r} = e;
  try {
    let i = ot(n);
    if (i !== null) {
      if (i !== "flag_off") t(`[artifactPresence] not arming slug=${n}: ${i}`);
      return;
    }
    let l = Re();
    if (l.declined.has(n)) return;
    let s = $wt(e.context);
    l.dispose = Wi, l.accountChanged = Ii, l.disposeSlug = Li, l.retireSlug = ur;
    let h = l.conns.get(n);
    if (h !== void 0 && !h.stopped) {
      if (h.url = r, h.stalledSince !== void 0 && h.reconnectTimer !== void 0) Nt(h, Math.round(Math.random() * l.timing.capMs), ar);
      return;
    }
    ki(l, n, r, s);
  } catch (i) {
    t(`[artifactPresence] arm threw slug=${n}: ${i instanceof Error ? i.name : "error"}`);
  }
}

function ki(e, n, r, i) {
  let l = {
    slug: n,
    url: r,
    context: i,
    send: void 0,
    state: "connecting",
    storedCap: void 0,
    capStrikes: 0,
    owner: void 0,
    rebootNeeded: !1,
    bootedVersion: void 0,
    backoff: 0,
    refusals: 0,
    stalledSince: void 0,
    stalls: 0,
    openedAt: 0,
    everOpened: !1,
    reconnectTimer: void 0,
    taskId: void 0,
    refusedAdmission: !1,
    stopped: !1,
    abort: new AbortController
  };
  e.conns.set(n, l), L9o(Ei), sr(l, "initial").catch(s => {
    t(`[artifactPresence] connect threw slug=${n}: ${s instanceof Error ? s.name : "error"}`), 
    Ae(l, {
      on: "dial_error",
      deterministic: !1
    });
  });
}

var Ei = {
  closeByTaskId: e => Ti(e)
};

function Ti(e) {
  let n = DTs();
  if (n === void 0) return !1;
  for (let r of n.conns.values()) {
    if (r.taskId !== e) continue;
    return r.taskId = void 0, n.declined.add(r.slug), re(r), !0;
  }
  return !1;
}

async function sr(e, n) {
  let r = ot(e.slug);
  if (r !== null) {
    t(`[artifactPresence] closing slug=${e.slug}: ${r}`), re(e);
    return;
  }
  e.state = "connecting";
  let i = await qn(e, {
    feature: "artifact_presence",
    isCurrent: () => Fe(e)
  });
  switch (i.outcome) {
   case "stale":
    return;

   case "not_found":
    re(e);
    return;

   case "other_org":
   case "public_outside_org":
    f("artifact_presence", i.outcome), re(e);
    return;

   case "boot_failed":
    {
      let l = {
        on: "boot",
        status: i.status,
        noAnswer: i.noAnswer,
        elapsedMs: i.elapsedMs
      };
      if (n === "initial" && Xn(e, l, Re().timing)) t(`[artifactPresence] boot failed for slug=${e.slug}; no presence connection`), 
      re(e); else Ae(e, l);
      return;
    }

   case "not_admitted":
    t(`[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`), 
    re(e);
    return;

   case "owner_changed":
    f("artifact_presence", "owner_changed"), re(e);
    return;

   case "token":
    await Ci(e, i.token);
    return;
  }
}

async function Ci(e, n) {
  let {timing: r} = Re(), {slug: i} = e, l = !e.everOpened;
  e.refusedAdmission = !1;
  let s = await Zn(e, n, {
    description: `presence on artifact ${e.url}`,
    keepalive: {
      openFrames: [],
      frame: _({
        kind: "ping",
        slug: i
      }),
      intervalMs: r.keepaliveMs,
      sendEveryMs: () => it(ee().live, r.keepaliveMs),
      deadlineMs: r.keepaliveDeadlineMs ?? Kt(r.keepaliveMs)
    },
    onFrame: b => xi(e, b),
    onOpen: () => {
      if (l) g("artifact_presence", {
        connected: !0
      });
    },
    onEnded: (b, w) => {
      let S = e.refusedAdmission;
      if (e.refusedAdmission = !1, S && b !== zwt) {
        Ae(e, Bn);
        return;
      }
      if (w.opened) {
        if (b !== Wwt && b !== zwt) f("artifact_presence", `closed_${b ?? "unknown"}`);
      } else {
        let R = CTe(b);
        m("artifact_presence", "connect_failed", R === null ? void 0 : {
          http_status: R.status,
          cf_mitigated: R.cfMitigated
        });
      }
      Ae(e, {
        on: "socket",
        detail: b,
        ...w
      });
    },
    handshakeDeadlineMs: r.handshakeDeadlineMs,
    activitySinkKey: `presence:${i}`,
    label: "artifactPresence"
  }, () => Fe(e));
  if (s.outcome !== "error") return;
  let h = s.error instanceof dtt && !s.error.message.startsWith("could not resolve");
  if (!Fe(e)) return;
  if (l && h) {
    m("artifact_presence", "ws_open_error"), re(e);
    return;
  }
  f("artifact_presence", "ws_open_error"), e.state = "closed", Ae(e, {
    on: "dial_error",
    deterministic: h
  });
}

function Ae(e, n) {
  if (!Fe(e)) return;
  let r = Qn(e, Re().timing, n);
  if (r.next === "end") {
    f("artifact_presence", r.reason === "revoked" ? "closed_4403" : "refused_gave_up"), 
    re(e);
    return;
  }
  if (r.stallRunStarted) {
    let i = n.on === "boot" ? n.status : n.on === "socket" ? CTe(n.detail)?.status : void 0;
    f("artifact_presence", "stall_run_started", {
      boot: n.on === "boot",
      ...i !== void 0 && {
        http_status: i
      }
    });
  }
  Nt(e, r.delayMs, ar);
}

function ar(e) {
  if (!Fe(e)) return;
  sr(e, "reconnect").catch(n => {
    t(`[artifactPresence] reconnect threw slug=${e.slug}: ${n instanceof Error ? n.name : "error"}`), 
    Ae(e, {
      on: "dial_error",
      deterministic: !1
    });
  });
}

function re(e) {
  rt(e);
  let n = Re();
  if (n.conns.get(e.slug) === e) n.conns.delete(e.slug);
}

function xi(e, n) {
  if (e.stopped || n.charCodeAt(0) !== 123) return;
  let r;
  try {
    r = Do(n);
  } catch {
    return;
  }
  let i = nt().safeParse(r);
  if (!i.success) return;
  let {kind: l, slug: s, actor: h, payload: b} = i.data;
  if (h !== void 0 || s !== void 0 && s !== e.slug) return;
  if (Yn(e, l, b)) return;
  switch (l) {
   case "join_denied":
    {
      let w = De().safeParse(b).data?.reason;
      if (w === $n) {
        m("artifact_presence", "join_denied"), re(e);
        return;
      }
      if (f("artifact_presence", "join_denied"), w === Kn) e.storedCap = void 0;
      if (e.refusedAdmission = !0, e.taskId !== void 0) try {
        ib(e.taskId, e.context.taskRegistry, {
          quiet: !0
        });
      } catch {}
      return;
    }

   case "ctrl:comment":
    tr(e.slug)?.comment();
    return;

   case "ctrl:invalidate":
    {
      let w = Ut().safeParse(b);
      if (w.success && (w.data.tag === Gt || w.data.tag === Ht)) tr(e.slug)?.ver(w.data.ver, "sync");
      return;
    }

   default:
    return;
  }
}

function tr(e) {
  let n = ee().live.supervisors.get(e);
  return n !== void 0 && !n.stopped ? n.wake : void 0;
}

function Li(e, n) {
  e.declined.delete(n), ur(e, n);
}

function ur(e, n) {
  let r = e.conns.get(n);
  if (r !== void 0) re(r);
}

function Wi(e) {
  e.declined.clear();
  for (let n of [ ...e.conns.values() ]) rt(n);
  e.conns.clear();
}

function Ii(e, n) {
  for (let r of [ ...e.conns.values() ]) {
    if (s_(r.owner, n)) continue;
    if (rt(r), e.conns.get(r.slug) === r) e.conns.delete(r.slug);
  }
}

function ftr(e, n) {
  return Bt(e, n) >= 0;
}

function Bt(e, n) {
  return jt(e, n).at(-1) ?? -1;
}

function jt(e, n) {
  let r = n.toLowerCase(), i = [];
  for (let l = 0; l < e.length; l++) {
    let s = e[l];
    try {
      let h = !eA(s) ? null : s.type === "user" ? lr(s.message?.content) : s.type === "attachment" && s.attachment.type === "queued_command" ? lr(s.attachment.prompt) : null;
      if (h !== null && Ui(h, r)) i.push(l);
    } catch {}
  }
  return i;
}

var cr = /^https?:\/\//i, Oi = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i, fr = "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000", Mi = new RegExp(`[${fr}]+`), Pi = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/, pr = "(<[{'\"`*_~", Di = new RegExp(`^[${pr}]+`), Fi = /[.,;:!?)\]}'">`*_~\u200b]+$/, Vi = new RegExp(`(?<=^|[${fr}])[${pr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`, "g"), Ni = "artifact-files";

function Ui(e, n) {
  for (let r of e.matchAll(Vi)) if (dr(r[1], n)) return !0;
  return e.split(Mi).some(r => dr(r.replace(Di, ""), n));
}

function dr(e, n) {
  let r = e.replace(Fi, "");
  if (Pi.test(r)) return !1;
  if (cr.test(r) || Oi.test(r)) {
    let l = cr.test(r) ? r : `https://${r}`;
    return F9(l)?.slug === n;
  }
  let i = r.toLowerCase().split(/[/\\]/);
  if (i.length > 1) return i.some((l, s) => l === n && i[s - 1] === Ni);
  return i[0] === n || oj(r) === n;
}

function lr(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let n = [];
  for (let r of e) if (typeof r === "object" && r !== null && "type" in r && r.type === "text" && "text" in r && typeof r.text === "string") n.push(r.text);
  return n.length > 0 ? n.join(`\n`) : null;
}

var Gi = "Could not register a durable wake subscription; publishing and reading still work.", $i = {
  invalid_slug: "That address is not an artifact this session can name, so nothing was registered; retrying with the same address will not help.",
  trigger_limit: "This session already holds the maximum number of webhook triggers (10); unwatch an artifact to free one.",
  no_originator: "This session currently has no linked human originator, so it cannot hold wake subscriptions. Common causes: the session was started by a background event, or the connection between the chat platform and the Claude account needs re-linking. After the user addresses that (re-link and/or restart the session) \u2014 or if the server-side policy changes \u2014 a deliberate watch retry will re-check; automatic retries while the session stays originator-less are answered locally without contacting the server.",
  client_policy: "This environment's network policy disables artifact subscriptions; no request was sent, and retrying will not help while the policy is active.",
  no_auth: "No credential is available for the artifact service, so the subscription could not be registered; retrying will not help until the session has credentials.",
  session_not_found: "The server no longer has an active record of this remote session, so it cannot hold a wake subscription; retrying in this session will not help.",
  unavailable_in_deployment: "Wake subscriptions are not provisioned in this deployment; retrying will not help.",
  no_wake_minter: "No wake-webhook minter is reachable (the session's own MCP mount was not found or did not connect), so the subscription could not be registered.",
  tool_not_offered: "The server does not offer wake subscriptions to this session, so none was registered; retrying will not help while that holds.",
  org_not_enabled: "Wake subscriptions are not enabled for the user's organization, so none was registered; retrying will not help while that holds.",
  relay_not_served: "This cloud session cannot register wake subscriptions, so none was registered; retrying will not help while that holds.",
  subscribe_forbidden: "The artifact service refuses wake subscriptions from this session, for any artifact until the session ends, so retrying will not help. Later publishes in this session are not armed; only an explicit watch re-checks with the service.",
  relay_unavailable: "This cloud session reaches the artifact service only through its session gateway, and the gateway refused to carry the wake subscription (commonly because wake subscriptions are not enabled there for the user's organization), so none was registered and retrying will not help while that holds. Later publishes in this session are not armed; only an explicit watch re-checks with the gateway.",
  session_device_bound: "This cloud session is bound to the desktop it was started from (Cowork or `claude --cloud`), and that device's trusted-device check means activity on the artifact can't wake it, so no wake subscription was registered. Publishing and reading still work; retrying won't help in this session.",
  aborted: "The request was cancelled before the registration finished (the turn was interrupted); nothing is wrong with the artifact or the session.",
  watch_trigger_release_failed: "The request was cancelled before the registration finished, and the webhook trigger minted for it could not be released \u2014 it counts against this session until the session ends."
}, Hi = new Map(Object.entries($i));

function xvn(e, n) {
  let r = Hi.get(e) ?? Gi;
  if (n === void 0) return r;
  let i = /[.!?]['")\]]*$/.test(n) ? "" : ".";
  return `${r} Server said: "${n}"${i}`;
}

function m4r(e) {
  if (e.status === void 0) return;
  if (e.relayed) return e.fromGateway ? `HTTP ${e.status} via the session gateway, not attributed to the artifact service` : `HTTP ${e.status} from the artifact service via the session gateway`;
  if (e.gatewayDeclined === void 0) return `HTTP ${e.status} from the artifact service`;
  return e.gatewayDeclined === 0 ? `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer` : `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}

var Ki = new Set([ "no_originator", "client_policy", "no_auth", "session_not_found", "unavailable_in_deployment", "tool_not_offered", "org_not_enabled", "relay_not_served", "subscribe_forbidden", "relay_unavailable", "session_device_bound", "invalid_slug" ]);

function mtr(e) {
  return Ki.has(e) ? null : bcr;
}

function a8o(e) {
  let {armsInFlight: n} = ee().durable;
  n.set(e, (n.get(e) ?? 0) + 1);
}

function l8o(e, n) {
  let r = ee().durable, i = (r.armsInFlight.get(e) ?? 1) - 1;
  if (i > 0) r.armsInFlight.set(e, i); else r.armsInFlight.delete(e);
  if (n?.outcome === "subscribed" || n?.outcome === "already_watching") return h4r(e), 
  {
    settled: "registered"
  };
  let l = n === void 0 ? "arm_threw" : n.reason;
  if (l === "stop_latched" || r.stopLatches.isStopped(e)) return {
    settled: "stopped"
  };
  let s = r.armOutcomes.get(e), h = n?.outcome === "failed" && n.latched && s?.reason === l ? s : void 0, b = (n?.outcome === "failed" ? m4r(n) : void 0) ?? h?.detail, w = (n?.outcome === "failed" ? n.serverMessage : void 0) ?? h?.serverMessage, S = {
    reason: l,
    ...b !== void 0 && {
      detail: b
    },
    ...w !== void 0 && {
      serverMessage: w
    }
  };
  return Scr(r.armOutcomes, e, {
    ...S,
    at: Date.now()
  }, ycr), i > 0 ? {
    settled: "pending",
    ...S
  } : {
    settled: "unregistered",
    ...S
  };
}

function g4r(e) {
  let n = ee().durable;
  for (let [r, i] of n.armOutcomes) if (i.reason === e) n.armOutcomes.delete(r);
  for (let r of n.announcedArmFailures) if (r.endsWith(`:${e}`)) n.announcedArmFailures.delete(r);
}

function h4r(e) {
  let n = ee().durable;
  n.armOutcomes.delete(e), wcr(n.announcedArmFailures, e);
}

function hr(e, n) {
  return f6t(ee().durable.announcedArmFailures, `${e}:${n}`, _cr);
}

function d8o(e) {
  let n = ee().durable, r = [], i = new Set;
  for (let l of n.armsInFlight.keys()) {
    if (!mr(n, l, e)) continue;
    r.push({
      slug: l,
      state: "arming"
    }), i.add(l);
  }
  for (let [l, s] of n.armOutcomes) {
    if (!mr(n, l, e) || i.has(l)) continue;
    r.push({
      slug: l,
      state: "failed",
      reason: s.reason,
      ...s.detail !== void 0 && {
        detail: s.detail
      },
      ...s.serverMessage !== void 0 && {
        serverMessage: s.serverMessage
      },
      at: s.at
    });
  }
  return r;
}

function mr(e, n, r) {
  return (r === void 0 || n === r) && !e.rows.has(n) && !e.stopLatches.isStopped(n);
}

var Bi = "frame-live.v1", ji = {
  enqueuePendingNotification: e => rl(e)
}, qi = 25e3;

function y4r() {
  ee().live.lastArtifactToolCallAt = Date.now();
}

var zi = 9e4, zt = "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, \u2715 the watch in the tasks list or use the kill-all-agents gesture.", Yi = "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";

function Ji(e, n, r) {
  let i = e.supervisors.get(n);
  if (i !== void 0) i.explicit = !1;
  for (let l of Object.values(r.all())) if (q$(l) && l.status === "running" && l.frameLive?.slug === n && l.frameLive.explicit) r.update(l.id, s => q$(s) && s.frameLive !== void 0 ? {
    ...s,
    description: Yt(Hn({
      slug: n,
      env: Oo()
    }), !1, s.frameLive.armedVia),
    frameLive: {
      ...s.frameLive,
      explicit: !1
    }
  } : s);
}

function Xi(e, n) {
  let r = ee().live, i = r.supervisors.get(e)?.context.storageV5 ?? W4r();
  Mvn(i);
  let l;
  if (n.taskStop) {
    if (ee().durable.stopLatches.confirmStop(e), !K$(e)) ctt(e, {
      storageV5: i
    }), import("./chunk-czqrrfqh.js").then(h => h.notifyTakenOverSlugStopped(e));
    let {wasWatching: s} = vr({
      slug: e,
      taskRegistry: n.taskRegistry,
      announce: !n.running,
      killRow: h => {
        if (h.id !== n.taskId) ib(h.id, n.taskRegistry, {
          userStop: !0
        });
      }
    });
    l = s;
  } else {
    if (!Qi(r, e, n)) return !1;
    te(r, e), l = !0;
  }
  if (n.modelOrigin !== !0) Ltr(e, i);
  return l;
}

function vr(e) {
  let {slug: n, taskRegistry: r} = e, i = ee().live, l = i.supervisors.get(n), s = l !== void 0 && !l.stopped || i.inFlightSubscribes.has(n);
  if (l?.autoReactWiring !== void 0) U9o(n);
  let h = Object.values(r.all()).filter(b => q$(b) && b.status === "running" && b.frameLive?.slug === n);
  if (e.announce && l !== void 0 && !l.stopped && h.length === 0 && (l.taskId !== void 0 || l.timer !== void 0)) ut(i, l, "watching this artifact was stopped just now"); else te(i, n);
  for (let b of h) s = !0, e.killRow(b);
  if (s && zy(n)) oEn(n);
  return D4r(n), {
    wasWatching: s
  };
}

function Qi(e, n, r) {
  let i = e.supervisors.get(n);
  if (i === void 0 || i.stopped) return !1;
  if (r.running) return i.taskId === void 0 || i.taskId === r.taskId;
  if (i.taskId === void 0 || i.taskId !== r.taskId) return !1;
  return i.timer !== void 0 || e.inFlightSubscribes.has(n);
}

function te(e, n) {
  let r = e.supervisors.get(n);
  if (r) Gen(r), e.supervisors.delete(n);
  lAn(n), v1n(n), Ve(n)?.sourceEnded();
}

function ye(e, n, r) {
  if (r) return {
    ...n,
    humanTurnSnapshot: !0
  };
  if (e === void 0) return n;
  let {humanTurnSnapshot: i, ...l} = n;
  return {
    ...l,
    context: e.context,
    publishTranscript: e.publishTranscript,
    ...e.humanTurnSnapshot && {
      humanTurnSnapshot: !0
    }
  };
}

function gr(e, n, r) {
  let i = e.supervisors.get(n)?.autoReactWiring;
  return i?.humanTurnSnapshot === !0 && (r?.humanTurnSnapshot !== !0 || i.context !== r.context);
}

function br(e, n) {
  let r = e.supervisors.get(n.slug);
  if (r && !r.stopped) {
    if (n.carriedVer !== void 0) r.carriedVer = n.carriedVer;
    let l = r.armedVia === "mcp_write";
    if (!n.machineArm) {
      if (r.lastActivityAt = Date.now(), r.timer !== void 0) clearTimeout(r.timer), r.timer = void 0;
      if (r.stalledSince = void 0, r.lastStalledAt = void 0, r.stallOutAfterMs = void 0, 
      r.taskId === void 0 && !e.inFlightSubscribes.has(n.slug) && Che(n.context, n.slug).length === 0) r.watchedSince = Date.now(), 
      r.armedVia = n.armedVia, Htr(n.slug); else if (n.armedVia === "publish") r.armedVia = "publish"; else if (r.armedVia === "mcp_write") r.armedVia = n.armedVia;
      if (l && r.armedVia !== "mcp_write") R2(e, n.slug);
    }
    if (r.explicit = r.explicit || n.explicit, n.autoReactWiring !== void 0) r.autoReactWiring = ye(r.autoReactWiring, n.autoReactWiring, n.humanTurnWiring === !0);
    return r;
  }
  let i = {
    slug: n.slug,
    url: n.url,
    getKnownVer: n.getKnownVer,
    ownPublishes: n.ownPublishes,
    context: n.context,
    abort: new AbortController,
    explicit: n.explicit,
    stopped: !1,
    watchedSince: Date.now(),
    lastActivityAt: Date.now(),
    armedVia: n.armedVia,
    consecutiveFailures: 0,
    ...n.carriedVer !== void 0 && {
      carriedVer: n.carriedVer
    },
    ...n.autoReactWiring !== void 0 && {
      autoReactWiring: ye(void 0, n.autoReactWiring, n.humanTurnWiring === !0)
    }
  };
  return e.supervisors.set(n.slug, i), Htr(n.slug, i.watchedSince), i;
}

function Zi(e, n, r, i) {
  if (e.supervisors.get(r) === n) n.taskId = i;
}

function eo(e, n) {
  let {rewatchTiming: r} = e;
  if (r.idleTtlMs <= 0) return !1;
  if (n.explicit || wr(e, n) || Date.now() - n.lastActivityAt < r.idleTtlMs) return !1;
  return !(n.autoReactWiring !== void 0 && df() && (!iy(n.slug) || zy(n.slug)));
}

function wr(e, n) {
  return n.slug === e.mostRecentPublishSlug && n.armedVia !== "mcp_write";
}

function Pvn(e, n) {
  return e ? "watch" : n === "watch" ? "watch_stopped" : n;
}

function gtr(e) {
  return I9o.find(n => n === e) ?? "publish";
}

function V2t(e) {
  switch (e) {
   case "publish":
    return {
      task: "auto-armed on publish",
      row: "armed by a publish",
      idle: "automatically when you published this artifact"
    };

   case "attach":
    return {
      task: "attached via /artifacts",
      row: "armed when the user attached it from /artifacts",
      idle: "automatically when you attached this artifact from /artifacts"
    };

   case "watch":
    return {
      task: "watch requested",
      row: "requested by you",
      idle: "when you asked to watch this artifact"
    };

   case "resume":
    return {
      task: "resume requested",
      row: "re-armed when the user asked to resume replies",
      idle: "when you asked to resume its comment auto-replies"
    };

   case "session_resume":
    return {
      task: "re-armed on session resume",
      row: "re-armed when this session was resumed",
      idle: "automatically when this session was resumed"
    };

   case "mcp_write":
    return {
      task: "presence while editing via MCP",
      row: "armed when this session edited the page through an MCP tool",
      idle: "automatically when this session edited this page through an MCP tool"
    };

   case "watch_stopped":
    return {
      task: "watch requested; auto-replies since stopped",
      row: "requested by you; its auto-replies since stopped by the user",
      idle: "when you asked to watch this artifact"
    };
  }
}

function to(e, n) {
  let r = V2t(n.armedVia).idle, i = n.armedVia === "watch" ? "(your watch request was later stopped; idle auto-armed watches are retired)" : "(idle auto-armed watches are retired)";
  return `it was armed ${r} and has seen no activity for over ${rn(e.rewatchTiming.idleTtlMs, {
    hideTrailingZeros: !0
  })} ${i}`;
}

function no(e, n, r) {
  return e === Ovn || n >= r.stallThresholdMs;
}

function ro(e) {
  let n = CTe(e);
  return n !== null && (y4(n.status) || n.cfMitigated);
}

function io(e) {
  return Math.max(e.stallMaxMs, e.longStallMaxMs) + 2 * nsr + e.handshakeDeadlineMs + 6e4;
}

function Xt(e, n, r) {
  let {uptimeMs: i, resumeNeverOpened: l = !1, stalled: s = !1} = r, {rewatchTiming: h} = e, b = e.supervisors.get(n);
  if (!b || b.stopped) return;
  if (ee().durable.stopLatches.isStopped(n)) {
    if (f("artifact_live_subscribe", "stop_latched"), l) he(e, b, "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed", "could not connect", {
      advice: "tell the user, and call resume_replies again only if they still want auto-replies resumed"
    }); else ut(e, b);
    return;
  }
  if (eo(e, b)) {
    g("artifact_live_subscribe", {
      idle_retired: !0
    }), he(e, b, to(e, b), "idle", {
      advice: Wo,
      passive: !0
    });
    return;
  }
  let w = !1, S = !1;
  if (s) {
    let y = Date.now();
    if (b.stalledSince === void 0 || b.lastStalledAt === void 0 || b.stallOutAfterMs === void 0 || y - b.lastStalledAt > io(h)) {
      b.stalledSince = y, b.stallOutAfterMs = h.maxStallMs + Math.round(Math.random() * h.stallOutJitterMs);
      let T = r.httpStatus ?? CTe(r.closeCode)?.status;
      f("artifact_live_subscribe", "stall_run_started", {
        boot: r.closeCode === void 0,
        ...T !== void 0 && {
          http_status: T
        }
      });
    } else S = !0;
    b.lastStalledAt = y, w = y - b.stalledSince >= b.stallOutAfterMs;
  } else if (b.stalledSince = void 0, b.lastStalledAt = void 0, b.stallOutAfterMs = void 0, 
  i >= h.minUptimeMs) b.consecutiveFailures = 0; else if (r.reuseRefused !== !0) b.consecutiveFailures++;
  if (b.consecutiveFailures > h.maxConsecutiveFailures || w) {
    if (w) f("artifact_live_subscribe", "rewatch_gave_up", {
      stalled: !0
    }); else f("artifact_live_subscribe", "rewatch_gave_up");
    he(e, b, "the live connection kept failing and reconnecting has stopped", Vr, {
      advice: ct,
      passive: !0
    });
    return;
  }
  let R = ede(), x = s && S && (CTe(r.closeCode)?.cfMitigated === !0 || !R || b.lease === void 0 || !oYr(b.lease, h, ee().accountEpoch, Date.now() + h.stallMinMs)), G = i > 0 && i >= h.minUptimeMs && r.closeCode !== void 0 && !(r.expired === !0 && b.transport !== "sync"), L = x9o({
    timing: h,
    consecutiveFailures: b.consecutiveFailures,
    leaseMode: R,
    stalled: s,
    longStall: x,
    spread: G
  });
  if (R && G && r.expired !== !0) b.spreadReconnect = !0;
  if (b.timer !== void 0) clearTimeout(b.timer);
  b.timer = setTimeout(Ar, L, e, n), b.timer.unref?.(), b.nextRewatchAt = Date.now() + L;
}

function he(e, n, r, i, {advice: l = "watch it again if you still need that", passive: s = !1} = {}) {
  if (e.supervisors.get(n.slug) === n) {
    if (te(e, n.slug), !ee().durable.stopLatches.isStopped(n.slug)) {
      if (Mr(e, n.slug, "ended", i), n.autoReactWiring !== void 0) import("./chunk-czqrrfqh.js").then(w => w.handBackTakenOverSlug(n.slug));
    }
  } else Gen(n);
  let h = n.resumeAnnounce;
  if (h !== void 0) n.resumeAnnounce = void 0, h.onGiveUp();
  if (n.armedVia === "mcp_write") return;
  let b = _De(() => n.autoReactWiring?.title, n.url);
  rl({
    value: Ri({
      taskType: $G,
      summary: $t(b9o(b, i)),
      body: `\n<event>${$t(`Watch on ${n.url} ended \u2014 ${r}. This session no longer keeps track of new versions of it; ${l}.`)}</event>`
    }),
    mode: "task-notification",
    ...s && {
      passive: !0
    },
    priority: "next",
    origin: {
      kind: "task-notification",
      source: $G,
      slug: n.slug,
      displayName: b,
      watchEnded: !0
    },
    agentId: Ze()
  });
}

function ut(e, n, r = "watching this artifact was stopped earlier in this session") {
  n.resumeAnnounce = void 0, he(e, n, r, "stopped", {
    advice: "do not watch it again unless the user asks you to"
  });
}

function X(e, n, r, i, l, {unavailable: s = !1, httpStatus: h} = {}) {
  return Qt(e, n, r, {
    unavailable: s,
    httpStatus: h
  }), To(e, n, r, i, l), {
    outcome: "skipped",
    reason: i,
    ...s && {
      unavailable: !0
    },
    ...s && h !== void 0 && {
      httpStatus: h
    }
  };
}

function Qt(e, n, r, {unavailable: i = !1, httpStatus: l} = {}) {
  if (r) return;
  let s = e.supervisors.get(n);
  if (s !== void 0 && !s.stopped && s.timer === void 0) Xt(e, n, {
    uptimeMs: 0,
    stalled: i,
    ...l !== void 0 && {
      httpStatus: l
    }
  });
}

async function Ar(e, n) {
  let r = e.supervisors.get(n);
  if (!r || r.stopped) return;
  if (r.timer = void 0, ee().durable.stopLatches.isStopped(n)) {
    f("artifact_live_subscribe", "stop_latched"), ut(e, r);
    return;
  }
  if (r.autoReactWiring !== void 0 && iy(n) && !zy(n)) delete r.autoReactWiring;
  g("artifact_live_subscribe", {
    rewatch_attempt: !0
  });
  let i = await pe(e, {
    slug: r.slug,
    url: r.url,
    getKnownVer: r.getKnownVer,
    ownPublishes: r.ownPublishes,
    context: r.context,
    signal: r.abort.signal,
    machineArm: !0,
    seedKnownVerFromBoot: !0,
    ...r.carriedVer !== void 0 && {
      seedSurfacedVer: r.carriedVer
    },
    ...r.autoReactWiring !== void 0 && {
      autoReactWiring: r.autoReactWiring
    }
  });
  if (i.outcome === "skipped" && i.reason === "stop_latched") return;
  if (r.stopped || e.supervisors.get(n) !== r) {
    if (i.outcome === "skipped") Qt(e, n, void 0, {
      unavailable: i.unavailable === !0,
      httpStatus: i.httpStatus
    });
    return;
  }
  if (i.outcome === "skipped") if (i.reason === "boot_failed" || i.reason === "ws_open_error" || i.reason === "sync_unavailable") r.lastFailure = i.reason, 
  Xt(e, n, {
    uptimeMs: 0,
    stalled: i.unavailable === !0,
    ...i.httpStatus !== void 0 && {
      httpStatus: i.httpStatus
    }
  }); else f("artifact_live_subscribe", `rewatch_stopped_${i.reason}`), he(e, r, hDe(i.reason) ?? i.reason, tn[i.reason] ?? Ur, Mo(i.reason));
}

async function oo(e, n) {
  let r = e.supervisors.get(n), i = r?.lease;
  if (!ede() || r === void 0 || r.stopped || i === void 0 || i.probed) return;
  i.probed = !0;
  let l;
  try {
    l = await fAn({
      slug: n,
      env: Oo()
    }, r.abort.signal, {
      agentPeer: at(n),
      syncLive: at(n),
      watchBoot: !0,
      credentials: r.context.credentials
    });
  } catch {
    return;
  }
  if (e.supervisors.get(n) !== r || r.stopped) return;
  let s = l.err === null ? l.assetToken === void 0 ? "public_outside_org" : void 0 : l.status === 404 ? "not_found" : vW(l) ? "other_org" : void 0;
  if (s !== void 0) {
    f("artifact_live_subscribe", `read_stopped_${s}`), he(e, r, hDe(s) ?? s, tn[s] ?? s, {
      advice: yDe(s)
    });
    for (let w of Object.values(r.context.taskRegistry.all())) if (q$(w) && w.status === "running" && w.frameLive?.slug === n) ib(w.id, r.context.taskRegistry, {
      quiet: !0
    });
    return;
  }
  if (l.err === null && tsr(l.data) !== void 0) {
    g("artifact_live_subscribe", {
      read_refused_boot_ok: !0
    });
    return;
  }
  let h = l.err === null ? "tokenless" : l.status ?? l.errorCode;
  if (f("artifact_live_subscribe", `read_refused_boot_${h}`), (h === "tokenless" || typeof h === "number" && h < 500 && h !== 408 && h !== 429) && r.lease === i) delete r.lease, 
  delete r.renewable;
}

function Rr(e) {
  return Atr(new URL(`/edge-api/frame-live/${e}/ws`, FHs()));
}

var so = 8;

function ao(e) {
  let {slug: n, url: r, ownPublishes: i, getKnownVer: l, autoReact: s, onSurfaced: h} = e, b = e.surfacedVers ?? [];
  function w(y) {
    if (b.push(y), b.length > so) b.shift();
  }
  if (e.seedSurfacedVer !== void 0 && !b.includes(e.seedSurfacedVer)) w(e.seedSurfacedVer);
  let S = Hhe(Ohe, Mhe), R = !1, x = !1;
  function G() {
    if (yr(n), f8o(n), s && df()) Ple({
      slug: n,
      url: r,
      env: s.env,
      tool: s.tool,
      context: s.context,
      ...s.publishTranscript !== void 0 && {
        publishTranscript: s.publishTranscript
      },
      ...s.getWiring !== void 0 && {
        getWiring: s.getWiring
      },
      abort: s.abort,
      notify: s.notify,
      ...s.getTitle !== void 0 && {
        getTitle: s.getTitle
      },
      ...s.onReadRefused !== void 0 && {
        onReadRefused: s.onReadRefused
      }
    });
  }
  function L(y, T) {
    if (!y || !VE.test(y)) return;
    if (e.presenceOnly?.()) return;
    if (A9r(n, y), b.includes(y)) return;
    let P = T === "sync" && {
      via_sync: !0
    };
    if (Zqt(i, n, y)) {
      g("artifact_live_subscribe", {
        ...R ? {
          suppressed_own: !0
        } : {
          suppressed_catch_up: !0
        },
        ...P
      }), R = !0;
      return;
    }
    if (y === l()) return;
    if (BVe(i, n)) {
      g("artifact_live_subscribe", {
        suppressed_in_flight: !0,
        ...P
      });
      return;
    }
    if (!S.tryConsume()) {
      if (!x) x = !0, f("artifact_live_subscribe", "ver_rate_suppressed", {
        ...P
      });
      return;
    }
    x = !1, w(y);
    try {
      h?.(y);
    } catch {}
    g("artifact_live_subscribe", {
      surfaced: !0,
      passive: PEt === "passive",
      ...P
    });
  }
  return {
    comment: G,
    ver: L
  };
}

function uo(e) {
  return n => {
    if (!n.startsWith("{")) return null;
    let r;
    try {
      r = Do(n);
    } catch {
      return null;
    }
    if (r.kind === "comment") return e.comment(), null;
    if (r.kind === "summon") return null;
    if (typeof r.ver === "string") e.ver(r.ver, "live");
    return null;
  };
}

var co = /^\d{1,15}$/;

function Ve(e) {
  return ee().liveDocWatch.headSinks.get(e);
}

function yr(e) {
  let n = ee().live, r = n.supervisors.get(e);
  if (r !== void 0 && !r.stopped && r.armedVia !== "mcp_write" && !n.inFlightSubscribes.has(e)) r.lastActivityAt = Date.now();
}

function lo(e, n, r) {
  return i => {
    if (i.charCodeAt(0) !== 123) return null;
    let l;
    try {
      l = Do(i);
    } catch {
      return null;
    }
    let s = nt().safeParse(l);
    if (!s.success) return null;
    let {kind: h, actor: b, payload: w} = s.data;
    if (b !== void 0 || s.data.slug !== void 0 && s.data.slug !== n) return null;
    switch (h) {
     case "ctrl:comment":
      return e.comment(), null;

     case "ctrl:invalidate":
      {
        let S = Ut().safeParse(w);
        if (!S.success) return null;
        if (S.data.tag === Gt || S.data.tag === Ht) e.ver(S.data.ver, "sync"); else if (S.data.tag === rr && co.test(S.data.ver)) yr(n), 
        Ve(n)?.seq(Number(S.data.ver));
        return null;
      }

     case "ctrl:token_refresh":
      {
        let S = Ft().safeParse(w);
        if (S.success && we(S.data.cap)) r.onTokenRefresh(S.data.cap, S.data.exp);
        return null;
      }

     case "ctrl:token_refresh_declined":
      {
        let S = De().safeParse(w);
        if (S.success && S.data.reason === Dt) r.onExpiryAnnounced();
        return null;
      }

     case "ctrl:comment_hint":
      {
        let S = ir().safeParse(w);
        if (S.success) r.onCommentHint(S.data.commentsEmpty, S.data.readAtMs);
        return null;
      }

     default:
      return null;
    }
  };
}

function kr(e, n, r, i, l, s) {
  if (!s(e, r)) return "dead";
  return i && (iy(n) ? l && (e.autoReactArmed !== !0 || !zy(n) || xTe(n)) : e.autoReactArmed !== !0) ? "replace" : "keep";
}

function fo(e, n) {
  return Gwt(e.id) && gtt(e, n);
}

function po(e, n, r, i) {
  let l = Date.now(), s = null;
  for (let h of Object.values(e.taskRegistry.all())) {
    if (!q$(h) || h.status !== "running" || h.frameLive?.slug !== n) continue;
    let b = kr(h, n, l, r, i, gtt);
    if (b !== "dead") {
      if (b === "replace") {
        ib(h.id, e.taskRegistry, {
          quiet: !0
        });
        continue;
      }
      s = h.id;
      continue;
    }
    ib(h.id, e.taskRegistry, {
      quiet: !0,
      connectionLost: !0
    });
  }
  return s;
}

function Er(e, n) {
  return Object.values(e.all()).some(r => q$(r) && r.status === "running" && r.frameLive?.slug === n);
}

function mo(e) {
  return Gtr(e, df, {
    includeStopLatched: !0
  });
}

function K2t(e) {
  return Gtr(e, df);
}

function Ahe(e, n) {
  Mvn(n?.storageV5), Ole(), jwt();
  let r = ee().live, i = n?.durable !== !1, l = 0, s = new Set;
  for (let h of Object.values(e.all())) if (mo(h)) {
    let b = h.autoReactSlug !== void 0 && iy(h.autoReactSlug) && (!zy(h.autoReactSlug) || K$(h.autoReactSlug));
    if (i) {
      if (ib(h.id, e, {
        quiet: !0,
        userStop: !0
      }), h.autoReactSlug !== void 0) sVt(h.autoReactSlug), s.add(h.autoReactSlug);
    } else if (h.autoReactSlug !== void 0) s.add(h.autoReactSlug);
    if (!b && !(h.autoReactSlug !== void 0 && !i && iy(h.autoReactSlug))) {
      if (l++, !i && h.autoReactSlug !== void 0) ftt(h.autoReactSlug), R2(r, h.autoReactSlug);
    }
  }
  for (let h of r.supervisors.values()) {
    if (h.autoReactWiring === void 0) continue;
    if (i) delete h.autoReactWiring;
    if (i && df() && (!iy(h.slug) || s.has(h.slug))) if (Er(e, h.slug) || r.inFlightSubscribes.has(h.slug)) Ji(r, h.slug, e); else te(r, h.slug), 
    Ltr(h.slug, h.context.storageV5);
    if (!s.has(h.slug) && df() && !iy(h.slug)) if (s.add(h.slug), l++, i) sVt(h.slug), 
    Jvn(h.slug); else ftt(h.slug);
  }
  if (i) Bvn({
    storageV5: n?.storageV5
  }); else if (l > 0) Rhe({
    flush: !0,
    storageV5: n?.storageV5
  });
  return l;
}

function Zt(e, n, r, i) {
  if (!zy(n) || xTe(n) || !df()) return null;
  let l = Tr(e, n);
  if (l === void 0) return null;
  i?.();
  let {live: s, wakes: h} = ee();
  Qvn(n), h.liftedAtScanGeneration.set(n, h.scanGeneration), R2(s, n);
  let b = Phe(n).lastWakeArgs;
  if (!Gwt(l.id) || b === null) return "cleared";
  return r?.(b), Ple({
    ...b,
    seed: !1,
    confirm: void 0,
    confirmBase: void 0,
    confirmAfter: void 0,
    reentry: void 0,
    idlePass: void 0,
    suppressSummonStatus: void 0
  }), "lifted";
}

function Tr(e, n) {
  return Object.values(e.all()).find(r => q$(r) && r.status === "running" && r.autoReactArmed === !0 && r.autoReactSlug === n && gtt(r));
}

function ho(e, n) {
  if (n.ownWords) {
    let r = B9o(i => I8o(i) || go(e, R_o(i)));
    if (r > 0) g("artifact_live_subscribe", {
      notice_latch_released: r
    });
  }
  return _o(e);
}

function go(e, n) {
  if (n === void 0) return !1;
  return Object.values(e.all()).some(r => r.startTime >= n && bo(r));
}

function bo(e) {
  let n = e.status === "running" || e.status === "pending";
  if (e.type === "local_bash" || $st(e)) return n;
  if (!Kqe.has(e.type) || e.type === "in_process_teammate") return !1;
  let r = e.status === "completed" && "keepaliveReasons" in e && e.keepaliveReasons instanceof Set && [ ...e.keepaliveReasons ].some(l => l !== "flag:idle-window"), i = "resuming" in e && e.resuming === !0;
  return n || r || i;
}

function _o(e) {
  let {wakes: n} = ee();
  n.humanTurnAtScanGeneration = n.scanGeneration;
  let r = 0;
  for (let i of [ ...n.sweptSlugs ]) if (Zt(e, i) !== null) r++;
  if (r > 0) g("artifact_live_subscribe", {
    unpaused_on_turn: r
  });
  return r;
}

function q2t() {
  return df() && Y4r();
}

function Che(e, n) {
  let r = [], i, l = () => i ??= df(), s = ee(), h = s.autoReact.userDisarmed;
  for (let b of Object.values(e.taskRegistry.all())) {
    if (!q$(b) || b.status !== "running" || b.frameLive === void 0 || n !== void 0 && b.frameLive.slug !== n) continue;
    let w = s.live.supervisors.get(b.frameLive.slug);
    r.push({
      slug: b.frameLive.slug,
      taskId: b.id,
      since: b.frameLive.watchedSince,
      explicit: w?.explicit ?? b.frameLive.explicit,
      connected: gtt(b),
      tokenExpiresAt: w?.lease?.expMs ?? b.frameLive.armedAt + (w?.transport === "sync" ? nEn : Ftr),
      armedVia: w?.armedVia ?? b.frameLive.armedVia,
      autoReply: b.autoReactArmed !== !0 ? ay(b.frameLive.slug) ? h ? "disarmed" : l() ? "stopped" : "none" : "none" : h ? "disarmed" : !l() ? "none" : b.autoReactSlug !== void 0 && ay(b.autoReactSlug) ? zy(b.autoReactSlug) ? K$(b.autoReactSlug) ? "yielded" : "paused" : "stopped" : So(b.frameLive.slug)
    });
  }
  return r.sort((b, w) => b.since - w.since);
}

function So(e) {
  let n = ee().autoReact.artifacts.get(e), r = n?.lastProbeDeniedBy ?? null;
  if (r !== null) return r === "denied_by_auto_mode" ? "declined" : "denied";
  return n?.lastReplyDeclinedByAutoMode === !0 ? "declined" : "armed";
}

function htr(e, n) {
  let {live: r, autoReact: i, wakes: l} = ee(), s = [], h, b = () => h ??= df();
  for (let w of l.stoppedSlugs) {
    if (n !== void 0 && w !== n) continue;
    if (Er(e.taskRegistry, w) || r.inFlightSubscribes.has(w) || !i.userDisarmed && !b()) continue;
    let S = r.supervisors.get(w), R = S !== void 0 && !S.stopped ? S : void 0;
    s.push({
      slug: w,
      ...R !== void 0 && {
        since: R.watchedSince,
        explicit: R.explicit,
        armedVia: R.armedVia
      },
      stopKind: zy(w) ? K$(w) ? "yielded" : "interrupt" : "user",
      autoReply: i.userDisarmed ? "disarmed" : "stopped"
    });
  }
  return s.sort((w, S) => (w.since ?? Number.POSITIVE_INFINITY) - (S.since ?? Number.POSITIVE_INFINITY));
}

function st(e, n, {forPublish: r = !1} = {}) {
  let {supervisors: i} = e, l = [];
  for (let s of Che(n)) {
    let h = i.get(s.slug), b = Lr(e, s, n);
    if (b === "explicit" || b === "most_recent_publish") continue;
    if (b === "auto_reply") {
      if (!r || R8o(s.slug)) continue;
      l.push({
        row: s,
        tier: 3
      });
      continue;
    }
    l.push({
      row: s,
      tier: h === void 0 || h.stopped ? 0 : h.armedVia === "mcp_write" ? 1 : 2
    });
  }
  return l.sort((s, h) => {
    if (s.tier !== h.tier) return s.tier - h.tier;
    let b = i.get(s.row.slug), w = i.get(h.row.slug), S = b && !b.stopped ? b.lastActivityAt : 0, R = w && !w.stopped ? w.lastActivityAt : 0;
    return S - R || s.row.since - h.row.since;
  }).map(s => s.row);
}

function Cr(e, n, r, i) {
  let l = e.supervisors.get(n.slug), s = Lr(e, n, r) === "auto_reply";
  if (ib(n.taskId, r.taskRegistry, {
    quiet: !0
  }), s && !K$(n.slug)) x2e(n.slug, {
    storageV5: l?.context.storageV5 ?? W4r()
  });
  if (l !== void 0 && !l.stopped) he(e, l, i?.why ?? `this session reached its limit of ${dT} artifact watches and made room to watch a newer one${s ? "; it was auto-replying to comments, and that stops until its next publish" : ""}`, i?.shortReason ?? "made room for a newer watch", i !== void 0 ? {
    advice: ct,
    passive: !0
  } : s ? {
    advice: "do not watch it again unless the user asks"
  } : void 0); else te(e, n.slug);
  g("artifact_live_subscribe", {
    evicted_least_active: !0,
    ...s && {
      evicted_autoreply: !0
    }
  });
}

function xr(e, n) {
  let r = e.supervisors.get(n);
  if (r === void 0 || r.stopped) return null;
  if (r.explicit) return "explicit";
  if (wr(e, r)) return "most_recent_publish";
  return r.autoReactWiring !== void 0 && df() && (!iy(n) || zy(n)) ? "auto_reply" : null;
}

function _r(e, n) {
  return xr(e, n) !== null;
}

function Lr(e, n, r) {
  let i = e.supervisors.get(n.slug);
  if (i !== void 0 && !i.stopped) return xr(e, n.slug);
  let l = r.taskRegistry.all()[n.taskId];
  return n.explicit ? "explicit" : K2t(l) ? "auto_reply" : null;
}

function vo(e, n) {
  let r = st(e, n);
  if (r.length === 0) return !1;
  return Cr(e, r[0], n, {
    why: `this session reached its limit of ${dT} artifact watches and made room for a protected watch to reconnect`,
    shortReason: en
  }), !0;
}

function _4r() {
  let e = ee().live;
  e.handoffGeneration += 1, e.bootingWiredArms.clear(), jje(aVt(VG())), Rhe({
    flush: !0
  }), u8o(), Ole(), jwt();
  for (let n of [ ...e.supervisors.keys() ]) te(e, n);
  e.armOutcomes.clear(), e.announcedArmFailures.clear(), W9o();
}

function wo(e) {
  let n = ee().live;
  n.handoffGeneration += 1, Ole(), jwt();
  let r = 0;
  for (let s of [ ...n.supervisors.values() ]) {
    if (!s.stopped) r++;
    if (s.autoReactWiring !== void 0) {
      let {slug: h} = s;
      import("./chunk-czqrrfqh.js").then(b => b.handBackTakenOverSlug(h));
    }
    delete s.autoReactWiring, te(n, s.slug);
    for (let h of Object.values(s.context.taskRegistry.all())) {
      if (!q$(h) || h.status !== "running" || h.frameLive?.slug !== s.slug) continue;
      ib(h.id, s.context.taskRegistry, {
        quiet: !0
      });
    }
  }
  if (n.armOutcomes.clear(), n.announcedArmFailures.clear(), r === 0) return r;
  let i = `${r} artifact ${r === 1 ? "watch" : "watches"}`, l = e === "signed_out" ? "Those watches were opened as the account that signed out: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks." : "Those watches were opened as the previous account: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
  return rl({
    value: Ri({
      taskType: $G,
      summary: $t(`Stopped watching ${i} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`),
      body: `\n<event>${$t(l)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: {
      kind: "task-notification",
      source: $G
    },
    agentId: Ze()
  }), r;
}

function b4r(e, n, r) {
  let {wasWatching: i} = Wr(e, n);
  if (ee().live.nonEditorSlugs.delete(e), r !== void 0) {
    let l = ee().live.repliesConsent, s = l.outstanding.get(e);
    if (s !== void 0) {
      if (l.outstanding.delete(e), s.allowed !== !0) l.declined.set(e, {
        namingMessages: s.namingMessages
      });
    }
    l.approved.delete(e);
  }
  return g("artifact_live_subscribe", {
    unwatched: i
  }), {
    wasWatching: i
  };
}

function S4r(e, n) {
  Ltr(e, n.storageV5);
  let {wasWatching: r} = Wr(e, n);
  if (r) g("artifact_live_subscribe", {
    unwatched: !0,
    artifact_deleted: !0
  });
}

function Wr(e, n) {
  let r = ee().live;
  Mvn(n.storageV5), r.armOutcomes.delete(e), Jt(r, e), g8o(e);
  let i = r.supervisors.get(e)?.autoReactWiring !== void 0, {wasWatching: l} = vr({
    slug: e,
    taskRegistry: n.taskRegistry,
    announce: !1,
    killRow: s => {
      let h = s.autoReactArmed === !0;
      if (ib(s.id, n.taskRegistry, h ? {
        quiet: !0,
        userStop: !0,
        modelOrigin: !0
      } : {
        quiet: !0
      }), h && s.autoReactSlug !== void 0) sVt(s.autoReactSlug);
    }
  });
  if (i) sVt(e);
  return {
    wasWatching: l
  };
}

async function w4r(e) {
  let {slug: n, url: r, publishContext: i, getKnownVer: l, context: s, tool: h, commentVerbsInSchema: b} = e;
  if (!d4(i)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  let w = ee().live, S = h !== void 0 && b === !0 && df(), R = !S ? void 0 : !gBe(s.messages) ? "unattended_turn" : !ftr(s.messages, n) || !DH(s.messages) ? "not_named_by_user" : w.repliesConsent.declined.has(n) ? "declined" : w.nonEditorSlugs.has(n) ? "not_editor" : e.repliesApproved !== !0 ? "not_approved" : void 0, x = Ir({
    tool: S && R === void 0 ? h : void 0,
    commentVerbsInSchema: b,
    context: s
  }), G = x.autoReactWiring !== void 0, L = w.supervisors.get(n)?.autoReactWiring?.title, y = await pe(w, {
    slug: n,
    url: r,
    getKnownVer: l,
    ownPublishes: s.artifactRegistries.ownPublishes,
    ...ke(s),
    ...x,
    pickUpRecentSummons: G,
    ...x.autoReactWiring !== void 0 && {
      autoReactWiring: {
        ...x.autoReactWiring,
        title: L
      },
      editorGatedWiring: !0
    }
  });
  if (G && y.outcome === "armed" && y.degraded === void 0 && !(iy(n) && !zy(n)) && Ne()) zvn(n, {
    title: w.supervisors.get(n)?.autoReactWiring?.title ?? L,
    storageV5: s.storageV5
  });
  if (R !== void 0 && y.outcome === "armed") return {
    ...y,
    degraded: R
  };
  if (R !== void 0 && y.outcome === "already_watching") return {
    ...y,
    degraded: R
  };
  return y;
}

function v4r(e) {
  return ee().live.nonEditorSlugs.has(e);
}

function E4r(e, n, r, i) {
  let l = ee().live.repliesConsent, s = l.outstanding.get(n);
  if (e === void 0) return {
    declined: l.declined.has(n) || r !== void 0 && s !== void 0 && s.toolUseId !== r && s.allowed !== !0,
    approved: !1
  };
  if (r !== void 0 && s !== void 0 && s.toolUseId !== r) {
    if (l.outstanding.delete(n), s.allowed !== !0) l.declined.set(n, {
      namingMessages: s.namingMessages
    });
  }
  let h = l.declined.get(n), b = Ao(i, n);
  if (h !== void 0 && b !== null && !h.namingMessages.has(b)) l.declined.delete(n);
  return {
    declined: l.declined.has(n),
    approved: l.approved.has(n)
  };
}

function Ao(e, n) {
  let r = Bt(e, n);
  return r >= 0 ? e[r]?.uuid ?? null : null;
}

function ytr(e, n, r, i, l = !1) {
  if (e === void 0) return;
  ee().live.repliesConsent.outstanding.set(n, {
    toolUseId: r,
    ...l && {
      allowed: !0
    },
    namingMessages: new Set(jt(i, n).flatMap(s => i[s]?.uuid !== void 0 ? [ i[s].uuid ] : []))
  });
}

function k4r(e, n) {
  if (e === void 0 || n === void 0) return;
  let {outstanding: r} = ee().live.repliesConsent;
  for (let [i, l] of r) if (l.toolUseId === n) return r.delete(i), {
    slug: i
  };
  return;
}

function T4r(e, n, r, i) {
  let l = ee().live.repliesConsent;
  if (e === void 0) return !1;
  let s = n?.slug === r;
  if (s && i) l.approved.add(r), l.declined.delete(r);
  return s || l.approved.has(r);
}

function Y2t(e) {
  return ee().live.repliesConsent.declined.has(e);
}

function A4r(e) {
  let {declined: n, outstanding: r} = ee().live.repliesConsent, i = r.get(e);
  return n.has(e) || i !== void 0 && i.allowed !== !0;
}

function Ro(e, n) {
  let r = e.mcpWriteSlugs.get(n);
  if (r === void 0) r = {
    arming: !1
  }, e.mcpWriteSlugs.set(n, r);
  return r;
}

var yo = new Set([ "not_found", "no_subscription_token", "publish_context", "invalid_slug", "remote" ]), ko = 5e3;

function Sr(e, n) {
  gsr(e, n), setTimeout((r, i) => hsr(r, i), ko, e, n).unref?.();
}

async function _Ys(e, n, r) {
  try {
    if (!nr.test(e)) return;
    let i = ee(), l = i.live;
    if (l.disposed) return;
    let s = l.supervisors.get(e), h = n.artifactRegistries.ownPublishes;
    if (s !== void 0 && !s.stopped) {
      if (Sr(h, e), l.inFlightSubscribes.has(e)) return;
      if (s.lastActivityAt = Date.now(), s.timer !== void 0 && s.consecutiveFailures === 0 && s.stalledSince === void 0) clearTimeout(s.timer), 
      s.timer = void 0, s.nextRewatchAt = void 0, Ar(l, e);
      return;
    }
    let b = Ro(l, e);
    if (l.inFlightSubscribes.has(e)) {
      if (b.arming) Sr(h, e);
      return;
    }
    let {publishContext: w} = tde({
      agentId: n.agentId,
      agentType: n.agentContext?.agentType,
      isNonInteractiveSession: n.options.isNonInteractiveSession
    });
    if (!d4(w)) return;
    if (b.declinedEpoch === i.accountEpoch) return;
    let S = i.accountEpoch;
    b.arming = !0, await pe(l, {
      slug: e,
      url: Hn({
        slug: e,
        env: Oo()
      }),
      getKnownVer: r,
      ownPublishes: h,
      ...ke(n),
      seedKnownVerFromBoot: !0,
      mcpWrite: !0
    }).then(R => {
      if (b.arming = !1, R.outcome === "skipped" && yo.has(R.reason)) b.declinedEpoch = S;
    }, R => {
      b.arming = !1, d(R);
    });
  } catch (i) {
    d(i);
  }
}

async function C4r(e) {
  let {slug: n, url: r, publishContext: i, getKnownVer: l, context: s} = e;
  if (ee().autoReact.userDisarmed) return {
    outcome: "refused",
    reason: "session_disarmed"
  };
  if (!d4(i)) return {
    outcome: "skipped",
    reason: "publish_context"
  };
  if (!e.commentVerbsInSchema) return {
    outcome: "skipped",
    reason: "comments_off"
  };
  if (!iy(n)) return {
    outcome: "skipped",
    reason: "not_stopped"
  };
  if (!df()) return {
    outcome: "skipped",
    reason: "not_enabled"
  };
  let h = ee().live;
  if (s.abortController.signal.aborted) return {
    outcome: "skipped",
    reason: "cancelled"
  };
  let b = Tr(s.taskRegistry, n)?.id, w = Zt(s.taskRegistry, n, S => {
    IP(n), S.notify({
      summary: Ntr(_De(S.getTitle, r)),
      detail: `Auto-replies on artifact ${r} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop). ${zt}`
    });
  }, () => {
    let S = h.supervisors.get(n);
    if (S !== void 0 && !S.stopped) S.autoReactWiring = ye(S.autoReactWiring, {
      tool: e.tool,
      commentVerbsInSchema: e.commentVerbsInSchema,
      context: s,
      title: S.autoReactWiring?.title
    }, !0);
  });
  if (w !== null && b !== void 0) {
    if (g("artifact_live_subscribe", {
      resumed_in_place: !0
    }), w === "cleared") ee().wakes.pendingResumeDisclosure.add(n);
    return {
      outcome: "armed",
      taskId: b,
      inPlace: w === "lifted",
      ...w === "cleared" && {
        connecting: !0
      }
    };
  }
  return pe(h, {
    slug: n,
    url: r,
    getKnownVer: l,
    ownPublishes: s.artifactRegistries.ownPublishes,
    ...ke(s),
    seedKnownVerFromBoot: !0,
    autoReactWiring: {
      tool: e.tool,
      commentVerbsInSchema: e.commentVerbsInSchema,
      context: s,
      title: h.supervisors.get(n)?.autoReactWiring?.title
    },
    userResumeWiring: !0,
    approvedRelatchGen: e.approvedRelatchGen
  });
}

function _tr(e, n) {
  let {live: r} = ee();
  if (!r.inFlightSubscribes.has(e)) {
    n();
    return;
  }
  let i = r.armSettleWaiters.get(e) ?? [];
  i.push(n), r.armSettleWaiters.set(e, i);
}

function btr(e) {
  let n = ee().live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0;
}

async function R4r(e) {
  let {slug: n, url: r, getKnownVer: i, tool: l, commentVerbsInSchema: s, context: h} = e;
  if (l !== void 0 && Cc()) j4r().catch(() => {});
  let b = ee(), w = await pe(b.live, {
    slug: n,
    url: r,
    getKnownVer: i,
    ownPublishes: h.artifactRegistries.ownPublishes,
    ...ke(h),
    ...Ir({
      tool: l,
      commentVerbsInSchema: s,
      context: h
    })
  });
  if (l !== void 0 && s === !0 && w.outcome !== "skipped" && Ne()) zvn(n, {
    title: b.live.supervisors.get(n)?.autoReactWiring?.title,
    storageV5: h.storageV5
  });
  return w;
}

function Ir(e) {
  let {tool: n, commentVerbsInSchema: r, context: i} = e;
  return {
    seedKnownVerFromBoot: !0,
    explicit: !0,
    pickUpRecentSummons: !0,
    ...n !== void 0 && r === !0 && {
      autoReactWiring: {
        tool: n,
        commentVerbsInSchema: r,
        context: i
      }
    }
  };
}

async function gDe(e) {
  let {slug: n, url: r, version: i, publishContext: l, getKnownVer: s, tool: h, commentVerbsInSchema: b, title: w, context: S} = e;
  if (h !== void 0 && Cc()) j4r().catch(() => {});
  let R = S.artifactRegistries.ownPublishes, x = ee().live;
  if (i !== void 0) {
    UEt(R, n, i, {
      merged: !Qle(R, n, i)
    });
    let T = x.supervisors.get(n);
    if (T !== void 0 && !T.stopped) T.lastActivityAt = Date.now();
    if (d4(l)) x.mostRecentPublishSlug = n;
  }
  if (!d4(l)) return f("artifact_live_subscribe", "publish_context", {
    publish_context: c(l)
  }), {
    outcome: "skipped",
    reason: "publish_context"
  };
  let G = h !== void 0 && b === !0, L = e.carriedPublishConsent !== !0 && e.resumedPublishConsent !== !0 && e.chainPublish !== !0 && e.adoptedPublish !== !0 && gBe(S.messages), y = await pe(x, {
    slug: n,
    url: r,
    getKnownVer: s,
    ownPublishes: R,
    ...ke(S),
    ...e.onOpen !== void 0 && e.onGiveUp !== void 0 && {
      onOpen: e.onOpen,
      onGiveUp: e.onGiveUp
    },
    ...e.seedKnownVerFromBoot === !0 && {
      seedKnownVerFromBoot: !0
    },
    ...(e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0) && {
      requireEditor: !0
    },
    ...e.sessionResume === !0 && {
      sessionResume: !0
    },
    ...L && i !== void 0 && {
      freshPublish: !0
    },
    ...e.announceArmlessEnd === !0 && {
      announceArmlessEnd: !0
    },
    ...e.resumedPublishConsent === !0 && G && {
      pickUpRecentSummons: !0
    },
    ...G && {
      autoReactWiring: {
        tool: h,
        commentVerbsInSchema: b,
        context: S,
        title: w,
        ...e.publishTranscript !== void 0 && {
          publishTranscript: e.publishTranscript
        }
      },
      ...L && {
        freshPublishWiring: !0
      }
    }
  });
  if ((i !== void 0 || e.adoptedPublish === !0) && y.outcome !== "skipped") {
    let {autoReact: T, wakes: P} = ee(), ie = !G ? "bare_watch_comments_off" : T.userDisarmed ? "bare_watch_session_disarmed" : !oVt() ? "bare_watch_autoreact_off" : iy(n) && !L && !(zy(n) && !xTe(n) && P.humanTurnAtScanGeneration === P.scanGeneration) ? "bare_watch_slug_stopped" : void 0;
    if (ie !== void 0) f("artifact_live_subscribe", ie, {
      publish_context: c(l)
    });
  }
  if (G && y.outcome !== "skipped" && !(y.outcome === "already_watching" && (e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0)) && !(y.outcome === "armed" && y.degraded !== void 0) && Ne()) zvn(n, {
    title: x.supervisors.get(n)?.autoReactWiring?.title ?? w,
    storageV5: S.storageV5
  });
  return y;
}

function Ne() {
  return !ee().autoReact.userDisarmed && oVt();
}

function Yt(e, n, r) {
  return `live updates for artifact ${e} (${V2t(Pvn(n, r)).task})`;
}

function ke(e) {
  return {
    context: $wt(e),
    signal: e.abortController.signal
  };
}

function X2t(e, n) {
  return () => oQ(e(), n);
}

function Or(e) {
  if (!Zle()) return {
    reason: "flag_off"
  };
  if (a.CLAUDE_CODE_REMOTE) return {
    reason: "remote"
  };
  return Eo(Rr(e));
}

function at(e) {
  return Zle() && ot(e) === null && !NTs(e);
}

function Eo(e) {
  if (UHs()) return {
    reason: "cp_override"
  };
  let n = Z2t(e);
  if (n !== null) return {
    reason: "egress_denied",
    egressKind: n.kind
  };
  return null;
}

function x4r(e) {
  let {context: n, slug: r, wantWiring: i, canClearLatch: l} = e, s = Date.now();
  for (let h of Object.values(n.taskRegistry.all())) if (q$(h) && h.status === "running" && h.frameLive?.slug === r && kr(h, r, s, i, l, fo) === "keep") return !0;
  return !1;
}

function Str(e) {
  if (ee().durable.stopLatches.isStopped(e.slug)) return "stop_latched";
  if (!d4(e.publishContext)) return "publish_context";
  return Or(e.slug)?.reason ?? null;
}

var Nwt = "auto-replies armed", wtr = "auto-replies paused by the user's interrupt (Ctrl+C or Stop) \u2014 the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)", vtr = "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) \u2014 that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks \u2014 the user asking is not itself the take-back); no comment notifications arrive here meanwhile", Etr = "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread", ktr = "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";

function qt() {
  return ES() ? `; a comment on it sent to Claude reaches this session while this artifact's status row says ${Nwt}, and plain comments never notify \u2014 read them with ${ed('action "comments"', () => `the ${F2("comments")}`)} when asked` : "";
}

function hDe(e) {
  switch (e) {
   case "flag_off":
    return "the live-subscribe feature flag is off in this session's cached config, so this session does not keep track of new versions of this artifact published elsewhere";

   case "publish_context":
    return "only a main-loop session (interactive, SDK, or background) holds the watch, not a subagent, teammate, or print session";

   case "stop_latched":
    return "watching this artifact was stopped earlier in this session; do not retry on your own. If the user asks you to resume watching it, call the watch action (in permission modes that prompt, they confirm it there)";

   case "remote":
    return "remote sessions do not hold the watch";

   case "cp_override":
    return "the artifact control plane is overridden to a local stack, so the live edge is not reachable";

   case "egress_denied":
    return "network egress to the claude.ai edge is denied by policy, so this session does not keep track of new versions of this artifact published elsewhere";

   case "not_found":
    return "no such artifact for this account (it was deleted, or it has not been shared with the user)";

   case "other_org":
    return MVe;

   case "public_outside_org":
    return Mqt;

   case "not_editor":
    return "a restored publish decision does not carry for an artifact this account cannot publish to";

   case "no_subscription_token":
    return "the control plane minted no live-channel credential for this artifact";

   case "boot_failed":
    return "the artifact could not be read right now (network or auth); try again later";

   case "watch_cap":
    return `this session already holds its maximum of ${dT} artifact watches and none could make room (each is a watch you requested, the artifact you most recently published, or one auto-replying to comments: a new publish can displace an idle one, a watch request cannot; or watch slots are still connecting); unwatch one first`;

   case "watch_cap_reconnect":
    return `this session was already holding its maximum of ${dT} artifact watches when this one tried to reconnect, and none of the other watches could make room`;

   case "invalid_slug":
    return "that is not an artifact this session can name";

   case "cancelled":
    return "the request was cancelled before the connection opened";

   case "ws_open_error":
    return "the live connection could not be opened from this environment";

   case "sync_unavailable":
    return "the live channel is not available to this session right now";

   default:
    return null;
  }
}

function J2t(e) {
  switch (e) {
   case "arming":
    return `Live subscription: arming in the background \u2014 not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;

   case "connected":
    return `Live subscription: already connected from earlier in this session \u2014 this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;

   case "publish_adopted":
    return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally \u2014 that session then keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;

   case "publish_context":
    return "Live subscription: none \u2014 this is a print (-p), cloud, subagent, or teammate session, which does not keep track of new versions of this artifact published elsewhere (only the main conversation of a local interactive, background, or TypeScript/Python Agent SDK session does). Expected; not an error.";

   case "remote_unsupported":
    {
      let n = ES();
      return `Live subscription: not supported yet from remote sessions \u2014 nothing notifies this session of new versions${n ? " or of comments sent to Claude" : ""}; re-read the artifact${n ? " (and its comments)" : ""} when the user asks.`;
    }

   default:
    {
      let n = hDe(e);
      return n !== null ? `Live subscription: skipped \u2014 ${n}.` : `Live subscription: skipped (${mT(e, 64)}).`;
    }
  }
}

var P4r = "Live subscription: none in this kind of session (see the earlier publish result); not an error.";

async function Ttr(e) {
  let {slug: n, url: r, getKnownVer: i, context: l} = e;
  return pe(ee().live, {
    slug: n,
    url: r,
    getKnownVer: i,
    ownPublishes: l.artifactRegistries.ownPublishes,
    ...ke(l),
    seedKnownVerFromBoot: !0
  });
}

async function pe(e, n) {
  let {slug: r, url: i, getKnownVer: l, ownPublishes: s, context: h, seedKnownVerFromBoot: b, seedSurfacedVer: w, explicit: S = !1, signal: R} = n;
  Fwt();
  let x = e.supervisors.get(r)?.carriedVer;
  e.endAll ??= wo;
  let G = n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema, L = n.userResumeWiring === !0 ? "resume" : S ? "watch" : n.sessionResume === !0 ? "session_resume" : n.mcpWrite === !0 ? "mcp_write" : b ? "attach" : "publish";
  if (!nr.test(r)) return {
    outcome: "skipped",
    reason: "invalid_slug"
  };
  e.armOutcomes.delete(r);
  let y = ee().durable.stopLatches;
  G6({
    storageV5: h.storageV5
  });
  let T = n.userResumeWiring === !0 ? n.approvedRelatchGen : void 0, P = () => y.isStopped(r) && (T === void 0 || y.latchGeneration(r) !== T);
  if (P()) return f("artifact_live_subscribe", "stop_latched"), {
    outcome: "skipped",
    reason: "stop_latched"
  };
  let ie = Or(r);
  if (ie !== null) {
    if (ie.reason === "cp_override") f("artifact_live_subscribe", "cp_override_active"); else if (ie.reason === "egress_denied") f("artifact_live_subscribe", `egress_denied_${ie.egressKind === "sandbox-policy" ? "sandbox_policy" : ie.egressKind}`);
    return {
      outcome: "skipped",
      reason: ie.reason
    };
  }
  let $r = Rr(r), dt = at(r), Ee = (n.freshPublishWiring === !0 || n.userResumeWiring === !0) && !n.signal.aborted, ft = e.supervisors.get(r)?.autoReactWiring, ae = po(h, r, G, Ee);
  if (ae !== null || e.inFlightSubscribes.has(r)) {
    if (ae === null && T !== void 0 && y.isStopped(r)) return f("artifact_live_subscribe", "arm_in_flight"), 
    {
      outcome: "skipped",
      reason: "arm_in_flight"
    };
    if (!(L === "resume" && ae === null && !e.supervisors.has(r))) br(e, {
      slug: r,
      url: i,
      getKnownVer: l,
      ownPublishes: s,
      context: h,
      explicit: S,
      machineArm: n.machineArm,
      armedVia: L,
      ...n.requireEditor !== !0 && n.editorGatedWiring !== !0 && {
        autoReactWiring: n.autoReactWiring,
        humanTurnWiring: Ee
      }
    });
    if (ae !== null) {
      let C = e.supervisors.get(r);
      if (C !== void 0) {
        let J = Yt(i, C.explicit, C.armedVia);
        h.taskRegistry.update(ae, D => {
          if (!q$(D) || D.frameLive === void 0) return D;
          if (D.description === J && D.frameLive.explicit === C.explicit && D.frameLive.armedVia === C.armedVia) return D;
          return {
            ...D,
            description: J,
            frameLive: {
              ...D.frameLive,
              explicit: C.explicit,
              armedVia: C.armedVia
            }
          };
        });
      }
    }
    if (ae !== null && n.freshPublishWiring === !0 && !n.signal.aborted) Zt(h.taskRegistry, r);
    if (ae === null && n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema && n.requireEditor !== !0 && n.editorGatedWiring !== !0) {
      let C = e.pendingInFlightWiring.get(r), J = n.freshPublishWiring === !0 && !n.signal.aborted, D = J || C === void 0 ? {
        scanGeneration: ee().wakes.scanGeneration,
        stopGeneration: i4(r)
      } : {
        scanGeneration: C.scanGeneration,
        stopGeneration: C.stopGeneration
      };
      if (e.pendingInFlightWiring.set(r, {
        wiring: ye(C?.wiring, n.autoReactWiring, Ee),
        freshPublishWiring: J || C?.freshPublishWiring === !0,
        ...D
      }), e.inFlightWiredIntent.add(r), Ne()) U8o(r, {
        storageV5: h.storageV5
      });
      if (J && oVt()) e.bootingWiredArms.set(r, {
        title: n.autoReactWiring.title,
        freshPublish: !0,
        ...D
      });
    }
    return {
      outcome: "already_watching",
      ...ae !== null && {
        taskId: ae
      }
    };
  }
  let Y = {
    url: i,
    announce: n.announceArmlessEnd === !0 && !n.machineArm,
    handoffGen: e.handoffGeneration,
    getTitle: () => e.supervisors.get(r)?.autoReactWiring?.title ?? n.autoReactWiring?.title
  }, nn = Che(h).length + e.inFlightSubscribes.size;
  if (n.machineArm && Che(h).length >= dT) {
    if (!_r(e, r) || st(e, h).length === 0) return f("artifact_live_subscribe", "watch_cap_reconnect"), 
    {
      outcome: "skipped",
      reason: "watch_cap_reconnect"
    };
  }
  if (n.mcpWrite && nn >= dT) return f("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y);
  let on = !n.machineArm && n.freshPublish === !0;
  if (!n.machineArm && nn >= dT && st(e, h, {
    forPublish: on
  }).length === 0) return f("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y);
  let Te = ee().wakes.scanGeneration, Ue = i4(r), sn = n.machineArm ? e.supervisors.get(r)?.lastActivityAt : void 0, an = e.handoffGeneration;
  if (H9o(Xi), F9o(D4r), D9o(C => ho(h.taskRegistry, C)), e.inFlightSubscribes.add(r), 
  e.inFlightGenerations.set(r, an), n.autoReactWiring !== void 0) e.inFlightWiredIntent.add(r);
  let Ce, xe = !1;
  try {
    if (n.autoReactWiring?.commentVerbsInSchema === !0 && n.requireEditor !== !0 && n.machineArm !== !0 && n.userResumeWiring !== !0 && oVt()) e.bootingWiredArms.set(r, {
      title: n.autoReactWiring.title,
      freshPublish: n.freshPublishWiring === !0 && !n.signal.aborted,
      scanGeneration: Te,
      stopGeneration: Ue
    });
    let C = () => e.handoffGeneration !== an || e.retiredInFlightArms.has(r), J = ede();
    if (!J) {
      let A = e.supervisors.get(r);
      if (A !== void 0) delete A.lease, delete A.renewable;
    }
    let D = ee().accountEpoch, ge = J && n.machineArm === !0 ? e.supervisors.get(r)?.lease : void 0, F = ge !== void 0 && (ge.transport === "live" || dt) && oYr(ge, e.rewatchTiming, D) ? ge : void 0;
    if (F !== void 0 && F.transport === "sync") {
      let A = await hE(h.storageV5).catch(() => {});
      if (!s_(me(F.token), A)) F = void 0;
      if (R.aborted || C()) return X(e, r, n.machineArm, "cancelled", Y);
    }
    let W, pt = !1, un = 0;
    if (F !== void 0) W = {
      err: null,
      token: F.token,
      transport: F.transport,
      ver: F.ver,
      editor: void 0,
      tokenExp: void 0,
      renewable: !1
    }; else {
      let A = J && !dt && n.machineArm === !0 && e.supervisors.get(r)?.renewable === !0;
      try {
        let K;
        if (A) {
          let be = await V7o(r, R, h.credentials);
          if (be.err === null) K = be, pt = !0; else {
            f("artifact_live_subscribe", `renew_miss_${be.status ?? "no_response"}`);
            let ue = e.supervisors.get(r);
            if (ue !== void 0) delete ue.renewable;
            if (R.aborted || C()) return X(e, r, !0, "cancelled", Y);
          }
        }
        un = Date.now(), W = K ?? await G7o(r, R, h.credentials, {
          syncLive: dt,
          ...n.machineArm === !0 && {
            lean: e.supervisors.get(r)?.bootedVersion
          }
        });
      } catch {
        return X(e, r, n.machineArm, R.aborted || C() ? "cancelled" : "boot_failed", Y);
      }
    }
    let Hr = Date.now();
    if (C()) return X(e, r, n.machineArm, "cancelled", Y);
    if (W.err !== null) {
      let A = R.aborted ? "cancelled" : W.status === 404 ? "not_found" : vW(W) ? "other_org" : W.publicOutsideOrg === !0 ? "public_outside_org" : "boot_failed", K = A === "boot_failed" && (W.unavailable === !0 || W.noAnswer === !0 && Date.now() - un >= e.rewatchTiming.stallThresholdMs);
      return X(e, r, n.machineArm, A, Y, {
        unavailable: K,
        httpStatus: W.status
      });
    }
    let Ge = n.requireEditor === !0 && !W.editor, se = Ge || n.editorGatedWiring === !0 && n.autoReactWiring !== void 0 && W.editor !== !0, cn = Ge ? "restored_consent_not_editor" : "watch_not_editor";
    if (W.editor === !0) e.nonEditorSlugs.delete(r);
    if (se) {
      if (e.inFlightWiredIntent.delete(r), e.bootingWiredArms.delete(r), !Ge && ee().accountEpoch === D) e.nonEditorSlugs.add(r);
    }
    let dn = W.title === void 0 ? null : yE(W.title), le = se || n.autoReactWiring === void 0 ? void 0 : dn === null ? n.autoReactWiring : {
      ...n.autoReactWiring,
      title: dn
    }, ht = se ? void 0 : n.onOpen, ln = se ? void 0 : n.onGiveUp, H = W.transport;
    if (H === "sync" && (!at(r) || W.token === void 0 || !we(W.token))) return f("artifact_live_subscribe", "sync_unavailable"), 
    X(e, r, n.machineArm, "sync_unavailable", Y, {
      unavailable: !0
    });
    let Le = W.token;
    if (!Le) return f("artifact_live_subscribe", se ? cn : "no_subscription_token"), 
    X(e, r, n.machineArm, Ge ? "not_editor" : "no_subscription_token", Y);
    if (se) f("artifact_live_subscribe", cn);
    let $e = W.ver, Kr = b ? () => l() ?? $e : l, O = F ?? (J ? C9o({
      transport: H,
      token: Le,
      ver: $e,
      accountEpoch: D,
      expUnixSeconds: H === "sync" ? tt(Le) : W.tokenExp,
      receivedAtMs: Hr
    }) : void 0);
    if (R.aborted || C()) return X(e, r, n.machineArm, "cancelled", Y);
    let He = Che(h).length + e.inFlightSubscribes.size - 1, gt = e.supervisors.get(r), Br = n.machineArm === !0 && sn !== void 0 && gt !== void 0 && !gt.stopped && gt.lastActivityAt > sn, fn = Che(h).length + e.pendingRegistrations;
    if (n.machineArm && !Br && He >= dT) {
      if (fn >= dT) {
        if (!_r(e, r) || !vo(e, h)) return f("artifact_live_subscribe", "watch_cap_reconnect"), 
        {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
      }
    } else if (n.mcpWrite && He >= dT) return f("artifact_live_subscribe", "watch_cap"), 
    X(e, r, n.machineArm, "watch_cap", Y); else if (He >= dT) {
      let A = He - dT + 1, K = st(e, h, {
        forPublish: on
      });
      if (K.length < A) {
        if (n.machineArm) return f("artifact_live_subscribe", "watch_cap_reconnect"), {
          outcome: "skipped",
          reason: "watch_cap_reconnect"
        };
        return f("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y);
      }
      if (fn >= dT) Cr(e, K[0], h, n.machineArm ? {
        why: `this session reached its limit of ${dT} artifact watches and made room for an already-held watch to reconnect`,
        shortReason: en
      } : void 0);
    }
    e.pendingRegistrations++, xe = !0;
    let j = e.supervisors.get(r), jr = j !== void 0 && !j.stopped && j.explicit, bt = S || jr, _t = j !== void 0 && !j.stopped, pn = _t ? j.taskId : void 0, qr = j === void 0, zr = S && j !== void 0 && !j.explicit, mn = !n.machineArm && j !== void 0 && j.armedVia === "mcp_write" && L !== "publish" && L !== "mcp_write", hn = mn ? j.autoReactWiring : void 0, gn = le !== void 0 && !gr(e, r, ft), bn = n.userResumeWiring === !0 && gn && _t && j.autoReactWiring?.humanTurnSnapshot === !0, St = e.supervisors.get(r)?.carriedVer, vt = St !== void 0 && St !== x ? St : w, E = br(e, {
      slug: r,
      url: i,
      getKnownVer: l,
      ownPublishes: s,
      context: h,
      explicit: S,
      machineArm: n.machineArm,
      armedVia: L,
      carriedVer: vt ?? W.ver,
      ...gn && {
        autoReactWiring: le
      },
      humanTurnWiring: Ee && !bn
    });
    if (F === void 0 && E.armedVia !== "mcp_write") A9r(r, $e);
    if (F === void 0 && !pt) E.bootedVersion = $e;
    let Yr = E.autoReactWiring;
    if (O !== void 0 && O.accountEpoch === ee().accountEpoch) {
      if (E.lease = O, F === void 0 && W.renewable) E.renewable = !0; else if (F === void 0) delete E.renewable;
    } else delete E.lease, delete E.renewable;
    let Jr = E.lastActivityAt;
    if (ht !== void 0 && ln !== void 0) E.resumeAnnounce = {
      onOpen: ht,
      onGiveUp: ln,
      wired: le !== void 0
    };
    let wt = L === "resume" && E.armedVia !== "watch" && E.armedVia !== "resume" ? E.armedVia : void 0;
    if (wt !== void 0) E.armedVia = "resume";
    E.transport = H;
    let ne = !1, _n = q(), Sn = !1, At, Ke, vn = !1, We, Xr = new AbortController, Q = se ? void 0 : e.pendingInFlightWiring.get(r);
    if (!se) e.pendingInFlightWiring.delete(r);
    let fe = le ?? Q?.wiring, Qr = Q?.wiring.humanTurnSnapshot === !0 && (ft?.humanTurnSnapshot !== !0 || Q.wiring.context !== ft.context);
    if (Q !== void 0 && (le === void 0 || Qr) && Q.stopGeneration === i4(r)) {
      let A = e.supervisors.get(r);
      if (A !== void 0 && !A.stopped) A.autoReactWiring = ye(A.autoReactWiring, {
        ...Q.wiring,
        title: Q.wiring.title ?? A.autoReactWiring?.title
      }, Q.wiring.humanTurnSnapshot === !0);
    }
    let wn = n.freshPublishWiring === !0 || Q?.freshPublishWiring === !0;
    if (Q?.freshPublishWiring === !0) Te = Q.scanGeneration, Ue = Q.stopGeneration;
    let Z = n.userResumeWiring === !0, Zr = Ee || fe?.humanTurnSnapshot === !0, Rt = () => e.supervisors.get(r)?.autoReactWiring?.title ?? fe?.title, I = fe === void 0 || !fe.commentVerbsInSchema ? void 0 : {
      env: Oo(),
      tool: fe.tool,
      context: fe.context,
      ...fe.publishTranscript !== void 0 && {
        publishTranscript: fe.publishTranscript
      },
      getWiring: () => {
        let A = e.supervisors.get(r)?.autoReactWiring;
        return A?.humanTurnSnapshot === !0 || !Zr ? A : void 0;
      },
      abort: Xr,
      getTitle: Rt,
      onReadRefused: () => {
        oo(e, r);
      },
      notify: A => {
        if ("coalesce" in A) {
          w9o({
            queue: ji,
            slug: r,
            family: A.coalesce.family,
            artifactName: A.coalesce.artifactName,
            threadId: A.coalesce.threadId,
            detail: A.detail,
            mergeDetails: "append",
            ownGesture: A.ownGesture === !0
          });
          return;
        }
        rl({
          value: Ri({
            taskType: "artifact-auto-react",
            summary: $t(A.summary),
            body: `\n${$t(A.detail)}`
          }),
          mode: "task-notification",
          origin: {
            kind: "task-notification",
            source: "artifact-auto-react",
            slug: r,
            displayName: _De(Rt, i)
          },
          uuid: SEn(A.handOff, A.ownGesture === !0 ? r : void 0),
          ...A.handOff !== void 0 && {
            artifactCommentTurn: "handoff"
          },
          agentId: Ze()
        });
      }
    };
    E.surfacedVers ??= [];
    let An = E.wake, Be = ao({
      slug: r,
      url: i,
      ownPublishes: s,
      presenceOnly: () => e.supervisors.get(r)?.armedVia === "mcp_write",
      getKnownVer: Kr,
      surfacedVers: E.surfacedVers,
      ...vt !== void 0 && {
        seedSurfacedVer: vt
      },
      onSurfaced: A => {
        let K = e.supervisors.get(r);
        if (K && !K.stopped) K.carriedVer = A, K.lastActivityAt = Date.now();
      },
      autoReact: I
    });
    E.wake = Be;
    let yt = 0, kt, ei = F?.opened === !0 ? F : void 0;
    try {
      let A = await Q2t({
        ws: H === "sync" ? {
          url: Pe(r, {
            commentHint: I !== void 0 && df() && !iy(r),
            versionNotices: !0
          }),
          protocols: [ et, Le ]
        } : {
          url: $r,
          protocols: [ Bi, Le ]
        },
        ...H === "sync" && {
          headers: {
            "User-Agent": $0()
          }
        },
        description: Yt(i, bt, E.armedVia),
        timeout_ms: 0,
        persistent: !0,
        quietLifecycle: !0,
        ...pn !== void 0 && {
          reuseTaskId: pn
        },
        ambient: !0,
        handshakeDeadlineMs: e.rewatchTiming.handshakeDeadlineMs,
        autoReactArmed: I !== void 0,
        autoReactSlug: I !== void 0 ? r : void 0,
        frameLive: {
          slug: r,
          explicit: bt,
          watchedSince: E.watchedSince,
          armedVia: E.armedVia
        },
        transform: H === "sync" ? lo(Be, r, {
          onTokenRefresh: (U, V) => {
            if (O !== void 0 && s_(me(O.token), me(U))) R9o(O, {
              token: U,
              expUnixSeconds: V,
              receivedAtMs: Date.now()
            });
          },
          onExpiryAnnounced: () => {
            vn = !0;
          },
          onCommentHint: (U, V) => {
            let Ie = kt;
            kt = void 0;
            let _e = U && Ie !== void 0 && M8o(r, Ie, V);
            g("artifact_live_subscribe", {
              comment_hint: !0,
              comments_empty: U,
              seed_parked: Ie !== void 0,
              seed_skipped: _e,
              sync_transport: !0
            });
          }
        }) : uo(Be),
        keepalive: H === "sync" ? {
          openFrames: [],
          frame: _({
            kind: "ping",
            slug: r
          }),
          intervalMs: ee().presence.timing.keepaliveMs,
          sendEveryMs: () => it(e, ee().presence.timing.keepaliveMs),
          deadlineMs: ee().presence.timing.keepaliveDeadlineMs ?? Kt(ee().presence.timing.keepaliveMs)
        } : {
          openFrames: [ "ping", "hb" ],
          frame: "ping",
          intervalMs: qi
        },
        onSender: U => {
          if (H === "sync") {
            Ke = V => U(Vt(r, V)), Xe(e, `watch:${r}`, Ke);
            return;
          }
          At = U, Vn(e, r, U);
        },
        onSenderClosed: () => {
          if (Ke !== void 0) Qe(e, `watch:${r}`, Ke);
          if (At !== void 0) Nn(e, r, At);
        },
        onLifecycle: (U, V, Ie) => {
          if (U === "open") {
            ne = !0, E.lastFailure = void 0, We = {
              stalledSince: E.stalledSince,
              lastStalledAt: E.lastStalledAt,
              stallOutAfterMs: E.stallOutAfterMs
            }, E.stalledSince = void 0, E.lastStalledAt = void 0, E.stallOutAfterMs = void 0;
            let Oe = E.spreadReconnect === !0;
            if (E.spreadReconnect = void 0, yt = Date.now(), O !== void 0) O.opened = !0;
            if (T !== void 0 && R.aborted && y.isStopped(r) && E.taskId !== void 0) {
              ib(E.taskId, h.taskRegistry, {
                quiet: !0
              }), te(e, r), f("artifact_live_subscribe", "stop_latched");
              return;
            }
            let Me = e.supervisors.get(r);
            if (Me !== void 0 && !Me.stopped) if (H === "sync") LTs(r), Ve(r)?.reopened(); else or({
              slug: r,
              url: i,
              context: h
            }), Ve(r)?.sourceEnded();
            g("artifact_live_subscribe", {
              armed: !0,
              ...H === "sync" && {
                sync_transport: !0
              },
              ...bt && {
                explicit: !0
              },
              ...F !== void 0 && {
                token_reused: !0,
                lease_remaining_min: Math.max(0, Math.floor((F.expMs - yt) / 6e4))
              },
              ...pt && {
                token_renewed: !0
              }
            });
            let kn = I !== void 0 && ee().wakes.scanGeneration !== Te, ni = i4(r) !== Ue, {wakes: ce} = ee(), ri = ce.liftedAtScanGeneration.get(r) === ce.scanGeneration || ce.humanTurnAtScanGeneration === ce.scanGeneration;
            if (kn && !ri && !iy(r) && df()) ftt(r), a4(1, [], {
              catchUp: !1,
              nameChordGesture: !ve(),
              passive: !ve()
            }), Rhe({
              flush: !0
            });
            if (T !== void 0 && !R.aborted) y.clearByApprovedRewatch(r, T);
            if (I !== void 0) Phe(r).lastWakeArgs = {
              slug: r,
              url: i,
              ...I
            };
            let En = Z && P();
            if (Z && I !== void 0 && !R.aborted && !En && Ne()) {
              let N = e.supervisors.get(r)?.autoReactWiring;
              zvn(r, {
                title: N?.title,
                storageV5: N?.context.storageV5
              });
            }
            if (I !== void 0 && R.aborted) ; else if (I !== void 0) if (!Z && zy(r) && !xTe(r) && ce.humanTurnAtScanGeneration === ce.scanGeneration) Qvn(r), 
            ce.liftedAtScanGeneration.set(r, ce.scanGeneration), R2(e, r), Ple({
              slug: r,
              url: i,
              ...I,
              seed: !1
            }); else if (iy(r) && (kn || ni || En || !(wn || Z))) ; else if (iy(r)) {
              let N = zy(r), de = K$(r);
              if (df() && (Z || !N || de)) IP(r), D6e(r), I.notify({
                summary: (Z ? Ntr : g9o)(_De(I.getTitle, i)),
                detail: `Auto-replies on artifact ${i} were ${Z ? "resumed by a resume_replies request" : "re-enabled by this publish"} \u2014 they had been ${de ? "handed to another session of this conversation that resumed it or published there" : N ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${N && !de ? zt : Yi}`
              });
              if (!N || de) sVt(r);
              u9o(r), t9o(r), Qvn(r), R2(e, r), Ple({
                slug: r,
                url: i,
                ...I,
                seed: !0
              });
            } else {
              if (ce.pendingResumeDisclosure.delete(r)) IP(r), D6e(r), I.notify({
                summary: Ntr(_De(I.getTitle, i)),
                detail: `Auto-replies on artifact ${i} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${zt}`
              });
              if (Ple({
                slug: r,
                url: i,
                ...I,
                seed: !0,
                ...n.pickUpRecentSummons === !0 && n.machineArm !== !0 && {
                  pickUpRecentSummons: !0
                },
                ...n.machineArm === !0 && Oe && ede() && {
                  deferMs: P9o(e.rewatchTiming)
                }
              }), H === "sync") {
                let N = Phe(r);
                kt = {
                  kickCount: N.kickCount,
                  cancelGeneration: N.cancelGeneration
                };
              }
            }
            let qe = e.supervisors.get(r), Lt = qe?.resumeAnnounce;
            if (qe !== void 0 && Lt !== void 0) {
              qe.resumeAnnounce = void 0;
              let {autoReact: N} = ee(), de = I !== void 0 && !ay(r) && !N.userDisarmed && N.enabledMemo === !0;
              if (!R.aborted && !qe.stopped && !y.isStopped(r) && (de || !Lt.wired && I === void 0)) Lt.onOpen();
            }
            if (I !== void 0 && (wn || Z || S) && !Sn && !R.aborted && !y.isStopped(r) && !ay(r) && !ee().autoReact.userDisarmed && ee().autoReact.enabledMemo === !0) {
              Sn = !0;
              let N = X8o([ r ], Date.now());
              (async () => {
                let de = await import("./chunk-q864dhf3.js"), ze = await import("./chunk-17vm9e46.js"), Ye = await R2e({
                  records: await de.listRegisteredSessionRecords(),
                  sessionId: _n,
                  selfPid: process.pid,
                  isRunning: ze.isProcessRunning,
                  isSameProcess: ze.provenSameProcessAsync
                });
                if (Ye.verdict !== "live") {
                  N.end();
                  return;
                }
                let {requestReplyTakeover: ii} = await import("./chunk-czqrrfqh.js"), Wt = (await ii({
                  holders: [ Ye.holder, ...Ye.otherHolders ],
                  holdersIncomplete: Ye.unproven === !0,
                  conversationId: _n,
                  slugs: [ r ],
                  reason: "claim",
                  alreadyReplying: !0,
                  claim: N
                })).yielded.has(r), Tn = !Wt && N.lost.has(r), Je = _De(() => Rt(), i);
                rl({
                  value: Ri({
                    taskType: $G,
                    summary: $t(Wt ? `Another session of this conversation handed its replies on ${Je} to this one` : Tn ? `This session handed its replies on ${Je} to another session of this conversation` : `Another session of this conversation is open while replies are armed on ${Je}`),
                    body: `\n<event>${$t(Wt ? `Another live session of this same conversation was also armed to reply to comments on ${i}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : Tn ? `Another live session of this same conversation claimed the replies to comments on ${i} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do \u2014 a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${i}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>`
                  }),
                  mode: "task-notification",
                  passive: !0,
                  priority: "next",
                  origin: {
                    kind: "task-notification",
                    source: $G,
                    slug: r,
                    displayName: Je
                  },
                  agentId: Ze()
                });
              })().catch(() => {
                N.end();
              });
            }
            return;
          }
          let _e = ne ? Date.now() - yt : 0, Et = !ne && ro(V), Tt = H === "sync" ? V === Wwt && (vn || O !== void 0 && Date.now() >= O.expMs - zi) : V === k9o, je = H === "sync" && (ne && V === Wwt && !Tt || !ne && CTe(V)?.status === 404), Ct = je || !ne && (Et || no(V, Ie, e.rewatchTiming)), xt = ne || Ct ? void 0 : ei, z = e.supervisors.get(r);
          if (je && ne && _e < e.rewatchTiming.minUptimeMs && z !== void 0 && z.stalledSince === void 0 && We?.stalledSince !== void 0) z.stalledSince = We.stalledSince, 
          z.lastStalledAt = We.lastStalledAt, z.stallOutAfterMs = We.stallOutAfterMs;
          if (z !== void 0 && H === "sync" && V === zwt && O !== void 0 && z.lease === O) delete z.lease;
          if (O !== void 0 && z?.lease === O && (!ede() || !Et && !je && !rYr(O, {
            expired: Tt,
            refused: xt !== void 0,
            healthy: ne && _e >= e.rewatchTiming.minUptimeMs
          }))) {
            if (delete z.lease, !O.opened) delete z.renewable;
          }
          if (ne) f("artifact_live_subscribe", `socket_closed_${V ?? "unknown"}`, {
            chain_spared: ee().autoReact.artifacts.get(r)?.scanning === !0
          }); else if (xt !== void 0) f("artifact_live_subscribe", "reuse_connect_failed"); else {
            let Oe = CTe(V), Me = {
              ...Ct && {
                stalled: !0
              },
              ...Et && {
                shed: !0
              },
              ...Oe !== null && {
                http_status: Oe.status,
                cf_mitigated: Oe.cfMitigated
              }
            };
            if (Object.keys(Me).length > 0) m("artifact_live_subscribe", "connect_failed", Me); else m("artifact_live_subscribe", "connect_failed");
          }
          if (z !== void 0 && !z.stopped) z.lastFailure = _e < e.rewatchTiming.minUptimeMs ? V ?? "unknown" : void 0;
          Xt(e, r, {
            uptimeMs: je ? 0 : _e,
            ...V !== void 0 && {
              closeCode: V
            },
            resumeNeverOpened: Z && !ne,
            reuseRefused: xt !== void 0,
            stalled: Ct,
            expired: Tt
          });
        }
      }, h);
      if (Zi(e, E, r, A.data.taskId), xe) e.pendingRegistrations--, xe = !1;
      let K = e.supervisors.get(r);
      if (K === void 0 || K !== E) return ib(A.data.taskId, h.taskRegistry, {
        quiet: !0
      }), Qt(e, r, n.machineArm), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (C()) return ib(A.data.taskId, h.taskRegistry, {
        quiet: !0
      }), te(e, r), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (P()) {
        if (ib(A.data.taskId, h.taskRegistry, {
          quiet: !0
        }), f("artifact_live_subscribe", "stop_latched"), e.armOutcomes.delete(r), Jt(e, r), 
        _t || E.lastActivityAt !== Jr) ut(e, E); else te(e, r);
        return {
          outcome: "skipped",
          reason: "stop_latched"
        };
      }
      let be = Z && R.aborted;
      if (be && T !== void 0 && y.isStopped(r)) return ib(A.data.taskId, h.taskRegistry, {
        quiet: !0
      }), te(e, r), {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (e.armOutcomes.delete(r), Jt(e, r), be) return {
        outcome: "skipped",
        reason: "cancelled"
      };
      if (Z && (ee().wakes.scanGeneration !== Te || i4(r) !== Ue)) return {
        outcome: "skipped",
        reason: "stopped_again"
      };
      if (bn && le !== void 0) {
        let U = e.supervisors.get(r);
        if (U === E && !U.stopped && !gr(e, r, Yr)) U.autoReactWiring = ye(U.autoReactWiring, {
          ...le,
          title: U.autoReactWiring?.title ?? le.title
        }, !0);
      }
      let ue = se ? void 0 : e.pendingInFlightWiring.get(r), Rn = iy(r), ti = Rn || I !== void 0 && ee().wakes.scanGeneration !== Te, yn = ue !== void 0 && ue.freshPublishWiring && ue.scanGeneration === ee().wakes.scanGeneration && ue.stopGeneration === i4(r);
      if (ue === void 0 || R.aborted || !(I === void 0 ? !Rn || yn : !Z && ti && yn)) return {
        outcome: "armed",
        taskId: A.data.taskId,
        ...se && {
          degraded: "not_editor"
        }
      };
      e.pendingInFlightWiring.delete(r), Ce = ue, ib(A.data.taskId, h.taskRegistry, {
        quiet: !0
      });
    } catch {
      let A = e.supervisors.get(r);
      if (qr && A === E && !(A !== void 0 && A.explicit && !S)) te(e, r); else if (zr && A !== void 0 && A === j) A.explicit = !1;
      if (wt !== void 0 && A === E && A.armedVia === "resume") A.armedVia = wt; else if (mn && A === E && A.armedVia === L && !A.explicit) {
        if (A.armedVia = "mcp_write", hn === void 0) delete A.autoReactWiring; else A.autoReactWiring = hn;
        R2(e, r);
      }
      if (A !== void 0 && A === E && A.wake === Be) if (An === void 0) delete A.wake; else A.wake = An;
      if (A !== void 0 && ht !== void 0) A.resumeAnnounce = void 0;
      if (O !== void 0 && A?.lease === O && !rYr(O, {
        expired: !1,
        refused: !1,
        healthy: !1
      })) {
        if (delete A.lease, !O.opened) delete A.renewable;
      }
      return m("artifact_live_subscribe", F !== void 0 ? "reuse_ws_open_error" : "ws_open_error"), 
      X(e, r, n.machineArm, "ws_open_error", Y);
    }
  } finally {
    e.inFlightSubscribes.delete(r), e.inFlightWiredIntent.delete(r), e.retiredInFlightArms.delete(r), 
    e.inFlightGenerations.delete(r), e.bootingWiredArms.delete(r);
    let C = e.supervisors.get(r);
    if (C === void 0 || C.stopped) Ve(r)?.sourceEnded();
    let J = e.armSettleWaiters.get(r) ?? [];
    e.armSettleWaiters.delete(r);
    for (let D of J) try {
      D();
    } catch (ge) {
      d(ge);
    }
    if (e.pendingInFlightWiring.delete(r), xe) e.pendingRegistrations--, xe = !1;
  }
  if (Ce === void 0) throw Error("armLiveSubscription: late-park fall-through lost its park");
  return pe(e, {
    ...n,
    machineArm: void 0,
    userResumeWiring: void 0,
    approvedRelatchGen: void 0,
    sessionResume: void 0,
    pickUpRecentSummons: void 0,
    editorGatedWiring: void 0,
    autoReactWiring: Ce.wiring,
    freshPublishWiring: Ce.freshPublishWiring,
    freshPublish: n.freshPublish === !0 || Ce.freshPublishWiring
  });
}

function Mr(e, n, r, i) {
  Scr(e.armOutcomes, n, {
    outcome: r,
    reason: i,
    at: Date.now()
  }, ycr);
}

function To(e, n, r, i, l) {
  if (r || e.handoffGeneration !== l.handoffGen || e.retiredInFlightArms.has(n)) return;
  let s = e.supervisors.get(n);
  if (s !== void 0 && !s.stopped && s.timer !== void 0) {
    if (i !== "cancelled") s.lastFailure = i;
    return;
  }
  if (e.armOutcomes.has(n)) return;
  let h = ee().durable.stopLatches.isStopped(n);
  if (!h) Mr(e, n, "failed", i);
  if (l.announce && i !== "cancelled" && !h) Po(e, n, l, i);
}

var Pr = "artifact not found", Co = "there is nothing to retry unless the artifact is shared with the user again", Dr = "other organization", Fr = "public, outside your organization", xo = `there is nothing to retry until ${HVe}`, Lo = "there is nothing to retry: read it with the read action instead", ct = "it will not come back on its own \u2014 watch it again only if the user asks or your current task still depends on its republishes", Wo = "watch it again when you next work on this artifact", Io = "there is nothing to re-watch while live updates are switched off";

function Mo(e) {
  switch (e) {
   case "not_found":
   case "other_org":
   case "public_outside_org":
    return {
      advice: yDe(e)
    };

   case "flag_off":
    return {
      advice: Io,
      passive: !0
    };

   default:
    return {
      advice: ct,
      passive: !0
    };
  }
}

function yDe(e) {
  switch (e) {
   case "not_found":
   case Pr:
    return Co;

   case "other_org":
   case Dr:
    return xo;

   case "public_outside_org":
   case Fr:
    return Lo;

   case Vr:
   case Nr:
   case Ur:
   case en:
    return ct;

   default:
    return;
  }
}

var Vr = "connection lost", Nr = "no live credential", Ur = "could not reconnect", en = "made room for another watch", tn = {
  boot_failed: "could not connect",
  ws_open_error: "could not connect",
  sync_unavailable: "could not connect",
  not_found: Pr,
  other_org: Dr,
  public_outside_org: Fr,
  no_subscription_token: Nr,
  watch_cap: "watch limit reached"
};

function Jt(e, n) {
  wcr(e.announcedArmFailures, n), Ivn(n);
}

function Ivn(e) {
  xS(n => n.origin?.kind === "task-notification" && n.origin.source === $G && n.origin.slug === e && (n.origin.armFailed === !0 || n.origin.watchEnded === !0));
}

function Po(e, n, r, i) {
  if (!f6t(e.announcedArmFailures, `${n}:${i}`, _cr)) return;
  let l = hDe(i) ?? i, s = yDe(i) ?? bcr;
  Gr({
    slug: n,
    artifactName: _De(r.getTitle, r.url),
    shortReason: tn[i] ?? "not armed",
    event: `The live subscription for ${r.url} did not arm \u2014 ${l}. This session is NOT watching it and does not keep track of new versions of it; ${s}, and do not claim to be watching it meanwhile.`
  });
}

function Gr(e) {
  rl({
    value: Ri({
      taskType: $G,
      summary: $t(S9o(e.artifactName, e.shortReason)),
      body: `\n<event>${$t(e.event)}</event>`
    }),
    mode: "task-notification",
    priority: "next",
    origin: {
      kind: "task-notification",
      source: $G,
      slug: e.slug,
      displayName: e.artifactName,
      armFailed: !0
    },
    agentId: Ze()
  });
}

function I4r(e) {
  let {slug: n, url: r, liveDocLoss: i, settlement: l} = e;
  if (l.settled === "registered") {
    Ivn(n);
    return;
  }
  if (l.settled !== "unregistered" || !hr(n, l.reason)) return;
  let {reason: s, detail: h, serverMessage: b} = l, w = i ?? `This session will NOT be woken when ${ES() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`, S = mtr(s);
  Gr({
    slug: n,
    artifactName: _De(e.getTitle, r),
    shortReason: "wake subscription not registered",
    event: `The durable wake subscription for ${r} was not registered (${s}${h !== void 0 ? `: ${h}` : ""}) \u2014 ${xvn(s, b)} ${w}${S === null ? "" : `; ${S}`} \u2014 do not claim to be subscribed to it meanwhile.`
  });
}

function O4r(e) {
  return e.connected && !Gwt(e.taskId);
}

function M4r(e, n) {
  let r = ee().live, i = new Set;
  for (let S of Object.values(e.taskRegistry.all())) if (q$(S) && S.status === "running" && S.frameLive !== void 0) i.add(S.frameLive.slug);
  let l = ee().durable.stopLatches, s = S => (n === void 0 || S === n) && !i.has(S) && !l.isStopped(S), h = new Set(htr(e, n).map(S => S.slug)), b = [], w = new Set;
  for (let S of r.inFlightSubscribes) {
    if (!s(S) || (r.inFlightGenerations.get(S) ?? r.handoffGeneration) !== r.handoffGeneration || r.retiredInFlightArms.has(S)) continue;
    w.add(S);
    let R = r.supervisors.get(S), x = R !== void 0 && !R.stopped ? R : void 0;
    b.push({
      slug: S,
      state: "arming",
      reconnect: x?.taskId !== void 0,
      failures: x?.consecutiveFailures ?? 0,
      ...x?.lastFailure !== void 0 && {
        lastFailure: x.lastFailure
      }
    });
  }
  for (let S of r.supervisors.values()) {
    if (!s(S.slug) || w.has(S.slug) || S.stopped || S.timer === void 0) continue;
    if (w.add(S.slug), h.has(S.slug)) continue;
    b.push({
      slug: S.slug,
      state: "backing_off",
      failures: S.consecutiveFailures,
      maxFailures: r.rewatchTiming.maxConsecutiveFailures,
      nextAt: S.nextRewatchAt ?? Date.now(),
      ...S.lastFailure !== void 0 && {
        lastFailure: S.lastFailure
      }
    });
  }
  for (let [S, R] of r.armOutcomes) {
    if (!s(S) || w.has(S)) continue;
    b.push({
      slug: S,
      state: R.outcome,
      reason: R.reason,
      at: R.at
    });
  }
  return b;
}

export { ltt, Avn, ptr, Cvn, Rvn, f4r, i8o, ftr, xvn, m4r, mtr, a8o, l8o, g4r, h4r, d8o, y4r, Pvn, gtr, V2t, K2t, Ahe, q2t, Che, htr, _4r, b4r, S4r, w4r, v4r, E4r, ytr, k4r, T4r, Y2t, A4r, _Ys, C4r, _tr, btr, R4r, gDe, X2t, x4r, Str, Nwt, wtr, vtr, Etr, ktr, hDe, J2t, P4r, Ttr, yDe, Ivn, I4r, O4r, M4r };
