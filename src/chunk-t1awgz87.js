// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { P0, $N, abo, lbo, tkr, lkr, BMt, I0, vse, rtn, WMt, ra, U_, Ese, Gct, qxe, zMt } from "./chunk-gmq0qwep.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, Oc } from "./chunk-3pqddg8f.js";

import { c, pe, vl } from "./chunk-hwdwjvh8.js";

import { j, Xp } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { p } from "./chunk-jkzenvsk.js";

import { zh, TZ, Kf, An, Cr, sS, Gt, k } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { JR } from "./chunk-q6wab2jw.js";

import { ie, ut, ox } from "./chunk-yxennhe9.js";

import { _c } from "./chunk-vps0k559.js";

import { tO, M3, IQ, ece, Uot, jis, aF, nh, JAe, kIn, Wis, tce, eur, Wt } from "./chunk-84yp45y8.js";

import { w } from "./chunk-9rj1xaxr.js";

import { HI, Nze, zv } from "./chunk-qvbrx5kg.js";

import { n, zt, Gi } from "./chunk-3vw306fv.js";

import { vo } from "./chunk-apnet8r0.js";

import { AM } from "./chunk-150qmpyg.js";

import { Pe } from "./chunk-7w995nyx.js";

import { zhe, X2e, H2, kvt, E5r, Q2e, X$, A5r, x5r, Ptt } from "./chunk-g8dhxbna.js";

import { Ip } from "./chunk-8xb6ca8t.js";

import { kze } from "./chunk-0wsrqm9k.js";

import { fze, LFr } from "./chunk-ek0drj29.js";

import { IL } from "./chunk-9x0yncgs.js";

import { Yj } from "./chunk-fhjr1kpc.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { rwt, o2e, QSn, s2e, Net } from "./chunk-fd9b00k8.js";

import { IDe } from "./chunk-v7mfmqmn.js";

import { ae, Ae, P, Z, y, xt, F } from "./chunk-cpyd3eya.js";

import { BT } from "./chunk-pzzygprt.js";

import { o, v, M, oe, T, u, ue, U } from "./chunk-cvcg6n1z.js";

import { ye } from "./chunk-ne9evs39.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

var DBt = "tengu_pewter_summit";

F();

function CA() {
  let [a, s] = y({
    ...ra()
  });
  return P(() => Ese(l => {
    s({
      ...l
    });
  }), []), a;
}

var lt = new K(() => ({
  messageKeys: new Set,
  footerOfferKeys: new Set
}));

function Kfn(a) {
  let s = a.rateLimitType;
  return {
    limit_type: s !== void 0 && Object.hasOwn(vse, s) ? c(s) : void 0,
    tier: c(s2e()),
    resets_at: a.resetsAt
  };
}

function Rjo(a, s, l) {
  if (s.resetsAt === void 0) return;
  let m = lt.of(a).messageKeys, b = `${s.resetsAt}:${l.shown}`;
  if (m.has(b)) return;
  m.add(b), i("tengu_rate_limit_message_shown", {
    ...Kfn(s),
    hint: c(l.kind),
    hint_shown: l.shown,
    wait_live: l.waitLive
  });
}

function kFr(a, s, l) {
  if (s.resetsAt === void 0) return;
  let m = lt.of(a).footerOfferKeys, b = `${s.resetsAt}:${l}`;
  if (m.has(b)) return;
  m.add(b), i("tengu_limit_footer_offer_shown", {
    ...Kfn(s),
    offer: c(l)
  });
}

F();

function LBt(a) {
  return M3.isEnabled() && (a === void 0 || a.includes("overage"));
}

function dt(a) {
  let s = Cr(), l = s === "team" || s === "enterprise";
  return LBt(a) && !l && !Ct() && TZ(zh()) === null;
}

F();

var Ln = 3e4;

function TFr(a, s, l) {
  let m = !1, b = () => {}, _ = () => {
    if (m) return;
    let h = a - Date.now();
    if (h <= 0) {
      l();
      return;
    }
    b = s(_, Math.min(h, Ln));
  };
  return _(), () => {
    m = !0, b();
  };
}

function i2(a) {
  let l = Ae(zv)?.setTimeout ?? HI, m = Z(() => {
    if (a === null) return Nze;
    return b => TFr(a, l, b);
  }, [ a, l ]);
  return xt(m, () => a !== null && Date.now() >= a);
}

var ct = 3e4, ge = "quota-auto-resume-cap", t8n = "quota-auto-resume-cancelled", n8n = "Automatic continue cancelled \xb7 /rate-limit-options to re-arm";

function fge() {
  return xt(E5r, zhe, zhe);
}

var xn = "tengu_functional_llama", mt = {
  waiting: "Continuing automatically {when} \xb7 esc to cancel",
  started: "Usage limit reached \xb7 continuing automatically {when} \xb7 esc to cancel",
  rearmed: "Usage limit reached again \xb7 continuing automatically {when} \xb7 esc to cancel",
  credits: "/usage-credits to continue now"
}, kt = 120, Rn = p(() => u({
  waiting: o().optional().catch(void 0),
  started: o().optional().catch(void 0),
  rearmed: o().optional().catch(void 0),
  credits: o().optional().catch(void 0)
}));

function he(a, s) {
  let l = Ip(s);
  if (l === void 0) return mt[a];
  if (a === "credits") return ut(l, kt);
  return l.includes("{when}") ? l : mt[a];
}

function kn(a) {
  let s = Rn().safeParse(a), l = s.success ? s.data : {};
  return {
    waiting: he("waiting", l.waiting),
    started: he("started", l.started),
    rearmed: he("rearmed", l.rearmed),
    credits: he("credits", l.credits)
  };
}

function ce() {
  return kn(k(xn, null));
}

function $e(a, s) {
  return ut(a.replace("{when}", s), kt);
}

function St(a, s) {
  let l = a.phase === "armed" ? a.resetsAtSeconds : 0, m = l * 1e3 > s ? ox(l) : void 0;
  return m ? `at ${m}` : "shortly";
}

function pt(a, s) {
  return $e(ce().started, St(a, s));
}

function ft(a, s) {
  return $e(ce().rearmed, St(a, s));
}

var Ce = "Usage limit reached";

function AFr(a) {
  let s = ox(a);
  return s ? `${Ce} \xb7 limit resets ${s}` : Ce;
}

function bt(a, s) {
  if (a.phase === "stale") return {
    status: "Your usage limit has reset",
    next: "Press enter to continue"
  };
  if (a.phase !== "armed") return null;
  let l = ox(a.resetsAtSeconds), m = AFr(a.resetsAtSeconds);
  if (s) return {
    status: m,
    next: "Continuing shortly \xb7 esc to cancel"
  };
  let b = $e(ce().waiting, l ? "at " + l : "when it resets");
  if (b.startsWith(`${Ce} \xb7 `)) b = b.slice(Ce.length + 3).replace(/^./u, _ => _.toUpperCase());
  return {
    status: m,
    next: b
  };
}

function _t(a, s, l) {
  return a.phase === "armed" && !s && l;
}

function gt() {
  return dt(ra().upgradePaths);
}

function Ge(a) {
  return i2(a.phase === "armed" ? Math.min(a.fireAtMs, a.resetsAtSeconds * 1e3) : null);
}

function CFr(a) {
  let L = w(30), {isLoading: s, transcript: l} = a, {addNotification: m, removeNotification: b} = vo(), {storageV5: _, credentials: h} = Pe(), E = AM(), A = fge(), C = Ge(A), x = xt(Ese, gt), R, N;
  if (L[0] !== _) R = () => {
    x5r(_);
  }, N = [ _ ], L[0] = _, L[1] = R, L[2] = N; else R = L[1], N = L[2];
  P(R, N);
  let X;
  if (L[3] !== l) X = (W, H) => l.apply({
    type: "append",
    messages: [ Wt(W, H) ]
  }), L[3] = l, L[4] = X; else X = L[4];
  let I = X, de;
  if (L[5] !== h || L[6] !== _ || L[7] !== E) de = (yn, Vr) => void IL({
    message: yn,
    notificationType: Vr
  }, E, {
    storageV5: _,
    credentials: h
  }), L[5] = h, L[6] = _, L[7] = E, L[8] = de; else de = L[8];
  let J = de, hn, En;
  if (L[9] !== m || L[10] !== I || L[11] !== J || L[12] !== b) hn = () => kvt(Qr => {
    switch (Qr) {
     case "armed":
     case "rearmed":
      {
        b(ge), b(t8n);
        return;
      }

     case "taken-over":
      {
        I(ft(zhe(), Date.now()), "notice");
        return;
      }

     case "cancelled":
      {
        I(n8n, "notice");
        return;
      }

     case "auto-armed":
      {
        I(pt(zhe(), Date.now()), "notice");
        return;
      }

     case "fired-now":
      {
        I("Usage limit available again \xb7 continuing now", "notice"), J("Usage limit available \u2014 Claude is continuing your task", "quota_auto_resume_fired");
        return;
      }

     case "stale":
      {
        I("Usage limit has reset \xb7 press enter to continue", "notice"), J("Usage limit reset \u2014 press enter to continue", "quota_auto_resume_stale");
        return;
      }

     case "disabled":
      {
        I(`Automatic continue was turned off \xb7 this task will not resume on its own${IDe() ? " (/rate-limit-options to wait anyway)" : ""}`, "warning"), 
        J("Automatic continue was turned off \u2014 the task will not resume on its own", "quota_auto_resume_disabled");
        return;
      }

     case "horizon-exceeded":
      {
        I("Automatic continue stopped \xb7 the usage limit now resets more than 24 hours out, so this task will not resume on its own (/rate-limit-options to wait anyway)", "warning"), 
        J("Automatic continue stopped \u2014 the usage limit now resets more than 24 hours out; the task will not resume on its own", "quota_auto_resume_disabled");
        return;
      }

     case "continuation-dropped":
      {
        I("Automatic continue did not run \xb7 the continuation was blocked before it reached the model, so this task did not resume on its own \xb7 send a prompt to continue", "warning"), 
        J("Automatic continue did not run \u2014 the continuation was blocked before it reached the model; send a prompt to continue", "quota_auto_resume_disabled");
        return;
      }

     case "cap-exhausted":
      {
        I("Automatic continue stopped after repeated usage-limit hits \xb7 this task will not resume on its own (/rate-limit-options to try again)", "warning"), 
        J("Automatic continue stopped after repeated usage-limit hits \u2014 the task will not resume on its own", "quota_auto_resume_disabled"), 
        m({
          key: ge,
          kind: "warning",
          text: "Automatic continue stopped after repeated usage-limit hits \xb7 /rate-limit-options to try again",
          color: "warning",
          priority: "high",
          timeoutMs: 2e4
        });
        return;
      }

     default:
    }
  }), En = [ m, b, I, J ], L[9] = m, L[10] = I, L[11] = J, L[12] = b, L[13] = hn, 
  L[14] = En; else hn = L[13], En = L[14];
  P(hn, En);
  let wn;
  if (L[15] !== I || L[16] !== s || L[17] !== J) wn = () => {
    if (A5r(Date.now(), s) === "fired") I("Usage limit reset \xb7 continuing automatically", "notice"), 
    J("Usage limit reset \u2014 Claude is continuing your task", "quota_auto_resume_fired");
  }, L[15] = I, L[16] = s, L[17] = J, L[18] = wn; else wn = L[18];
  Gi(wn, A.phase === "armed" ? ct : null);
  let Cn;
  if (L[19] !== A || L[20] !== C) Cn = bt(A, C), L[19] = A, L[20] = C, L[21] = Cn; else Cn = L[21];
  let Fe = Cn;
  if (Fe === null) {
    let se;
    if (L[22] === S) {
      let Tn = ra().resetsAt;
      se = Tn !== void 0 && X2e(Tn) ? {
        kind: "declined"
      } : null;
      L[22] = se;
    } else se = L[22];
    return se;
  }
  let se;
  if (L[23] !== A || L[24] !== x || L[25] !== C) se = _t(A, C, x) ? ce().credits : null, 
  L[23] = A, L[24] = x, L[25] = C, L[26] = se; else se = L[26];
  let vn;
  if (L[27] !== Fe || L[28] !== se) vn = {
    kind: "live",
    ...Fe,
    credits: se
  }, L[27] = Fe, L[28] = se, L[29] = vn; else vn = L[29];
  return vn;
}

import { randomUUID as Xn } from "crypto";

var Nn = "cedar_ember", Wn = 25e3, je = /^[a-z0-9_-]{1,40}$/, zn = /^[A-Za-z0-9_-]{1,64}$/, ve = [ "five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet", "seven_day_cowork", "seven_day_omelette", "seven_day_oauth_apps" ], It = [ "config_off", "tier", "seat", "mobile", "surface", "cli_version", "no_grant", "tenure", "other_experiment", "unavailable", "unknown" ], Fn = [ ...It, "paused", "expired", "unknown_grant", "not_next_grant", "grant_id_required", "not_limited", "already_used", "cooldown", "stamp_indeterminate", "reset_unconfirmed" ], Dn = p(() => u({
  surface: U([ "claude_ai", "claude_code_cli", "unknown" ]).catch("unknown"),
  tier: U([ "claude_pro", "claude_max_5x", "claude_max_20x", "claude_team", "unknown" ]).catch("unknown"),
  tenure_bucket: U([ "under_14", "14-29", "30-89", "90-364", "365+", "unknown" ]).catch("unknown"),
  billing_path: U([ "stripe", "apple", "google_play", "other", "unknown" ]).catch("unknown"),
  billing_period: U([ "monthly", "annual", "unknown" ]).catch("unknown"),
  extra_usage_state: U([ "not_configured", "disabled", "enabled", "unknown" ]).catch("unknown")
})), Te = p(() => T(oe()).catch([]).transform(a => a.filter(s => ve.some(l => l === s)))), Jn = p(() => u({
  id: o().regex(je),
  label: o().catch(""),
  resets_total: v().int().min(0).catch(0),
  resets_left: v().int().min(0),
  starts_at: o().nullable().optional().catch(null),
  ends_at: o().nullable().optional().catch(null),
  clears: Te(),
  paused: M().catch(!1),
  usable_now: M().catch(!1),
  use_requires_limit: M().catch(!0),
  percent_used: ue(o(), oe()).catch({}),
  blocking: Te()
}));

function Gn(a) {
  let s = {};
  for (let l of ve) {
    let m = a[l];
    if (typeof m === "number" && Number.isInteger(m) && m >= 0 && m <= 100) s[l] = m;
  }
  return s;
}

var $n = p(() => u({
  eligible: M(),
  ineligible_reason: U(It).catch("unknown").nullable().optional(),
  at_limit: M().optional().catch(void 0),
  exhausted: Te().optional(),
  grants: T(oe()).optional().catch(void 0),
  next_grant_id: o().regex(je).nullable().optional().catch(null),
  weekly_resets_at: o().nullable().optional().catch(null),
  cooldown_until: o().nullable().optional().catch(null),
  event_props: Dn().nullable().optional().catch(null)
})), jn = p(() => u({
  result: U([ "reset", "already_used", "not_limited", "cooldown", "ineligible", "unavailable" ]).catch("unavailable"),
  reason: U(Fn).catch("unknown").nullable().optional(),
  resets_left: v().int().min(0).nullable().optional().catch(null),
  cleared: Te().optional(),
  weekly_resets_at: o().nullable().optional().catch(null),
  cooldown_until: o().nullable().optional().catch(null)
}));

function Hn(a) {
  let s = Jn().safeParse(a);
  if (!s.success) return t(`[cedar-ember] ignoring a malformed grant: ${s.error.message}`), 
  null;
  let l = s.data;
  return {
    id: l.id,
    label: l.label,
    resetsTotal: l.resets_total,
    resetsLeft: l.resets_left,
    startsAt: l.starts_at ?? null,
    endsAt: l.ends_at ?? null,
    clears: l.clears,
    paused: l.paused,
    usableNow: l.usable_now,
    useRequiresLimit: l.use_requires_limit,
    percentUsed: Gn(l.percent_used),
    blocking: l.blocking
  };
}

function Kn(a) {
  if (a === void 0 || a === null) return null;
  let s = $n().safeParse(a);
  if (!s.success) return t(`[cedar-ember] ignoring a malformed status block: ${s.error.message}`), 
  null;
  let l = s.data, m = (l.grants ?? []).map(Hn).filter(h => h !== null), b = l.next_grant_id !== void 0 && l.next_grant_id !== null && m.some(h => h.id === l.next_grant_id) ? l.next_grant_id : null, _ = l.event_props;
  return {
    eligible: l.eligible,
    ineligibleReason: l.ineligible_reason ?? null,
    atLimit: l.at_limit ?? !1,
    exhausted: l.exhausted ?? [],
    grants: m,
    nextGrantId: b,
    weeklyResetsAt: l.weekly_resets_at ?? null,
    cooldownUntil: l.cooldown_until ?? null,
    eventProps: _ ? {
      surface: _.surface,
      tier: _.tier,
      tenureBucket: _.tenure_bucket,
      billingPath: _.billing_path,
      billingPeriod: _.billing_period,
      extraUsageState: _.extra_usage_state
    } : null
  };
}

async function He(a, {read: s = "at_wall"} = {}) {
  try {
    if (!Kf()) return {
      kind: "no_profile_scope"
    };
    let l = await I0(a, {
      read: s
    });
    if (!BMt(l)) return t("[cedar-ember] status fetch returned a fieldless or non-object body (in-band error)", {
      level: "warn"
    }), {
      kind: "failed"
    };
    return {
      kind: "answered",
      status: Kn(l?.cedar_ember)
    };
  } catch (l) {
    if (t(`[cedar-ember] status fetch failed: ${j(l).message}`, {
      level: "warn"
    }), lkr(l)) return {
      kind: "not_authorized"
    };
    return {
      kind: "failed"
    };
  }
}

var Q = {
  reason: null,
  resetsLeft: null,
  cleared: [],
  weeklyResetsAt: null
};

async function Ke(a, s, l) {
  let m = An()?.organizationUuid;
  if (!m) return t("[cedar-ember] no OAuth organization; cannot claim"), {
    result: "auth_error",
    ...Q
  };
  if (!je.test(s) || !zn.test(l)) return d(Error("[cedar-ember] refusing to claim with a malformed grant or request id")), 
  {
    result: "error",
    ...Q
  };
  try {
    let b = await sS(() => Gt.post(`/api/organizations/${m}/reset_rate_limits`, {
      program: Nn,
      grant_id: s,
      request_id: l
    }, {
      auth: "async",
      headers: {
        "Content-Type": "application/json"
      },
      timeout: Wn,
      refreshOAuth: !0,
      credentials: a
    }), {
      credentials: a
    });
    if (!b.ok) return t(`[cedar-ember] claim not sent: ${b.reason === "no-auth" ? b.detail : b.reason}`, {
      level: "warn"
    }), {
      result: b.reason === "no-auth" ? "auth_error" : "error",
      ...Q
    };
    let _ = jn().safeParse(b.data);
    if (!_.success) return t(`[cedar-ember] unreadable claim response: ${_.error.message}`, {
      level: "error"
    }), d(Error("[cedar-ember] unreadable claim response")), {
      result: "error",
      ...Q
    };
    return {
      result: _.data.result,
      reason: _.data.reason ?? null,
      resetsLeft: _.data.resets_left ?? null,
      cleared: _.data.cleared ?? [],
      weeklyResetsAt: _.data.weekly_resets_at ?? null
    };
  } catch (b) {
    if (Xp(b)) t(`[cedar-ember] claim failed: ${j(b).message}`, {
      level: "warn"
    }); else d(j(b));
    if (_c(b)) switch (b.response?.status) {
     case 429:
      return {
        result: "rate_limited",
        ...Q
      };

     case 401:
     case 403:
      return {
        result: "auth_error",
        ...Q
      };

     default:
      break;
    }
    return {
      result: "error",
      ...Q
    };
  }
}

function Bn() {
  return {
    state: {
      phase: "idle"
    },
    shownOfferKey: null,
    wallRecordKey: null,
    pendingAsk: null,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimGrantId: null,
    unsettledClaimEpoch: null,
    unsettledClaimRequestId: null,
    unsettledClaimAtMs: null,
    sessionSwitchSubscribed: !1,
    changed: Me(),
    events: Me()
  };
}

var qn = new K(Bn);

function O() {
  return qn.of(B().host);
}

function rB() {
  return O().state;
}

function ee(a) {
  let s = O();
  s.state = a, s.changed.emit();
}

function cze(a) {
  return O().changed.subscribe(a);
}

function RFr(a) {
  return O().events.subscribe(a);
}

var Yn = 3, Nt = 12e3, Ft = 35e3, Vn = 6e5, Qn = 2e4;

function Qe(a) {
  if (!QSn(a) || a.rateLimitType === void 0 || a.resetsAt === void 0) return null;
  return {
    rateLimitType: a.rateLimitType,
    wallResetsAt: a.resetsAt,
    accountEpoch: U_()
  };
}

function Se(a, s) {
  return s.rateLimitType === a.rateLimitType && s.resetsAt === a.wallResetsAt && a.accountEpoch === U_();
}

function ne(a) {
  let s = rB();
  return s.phase === "answered" && Se(s.wall, a) ? s.status : void 0;
}

function Ze(a) {
  let s = rB();
  return s.phase === "failed" && Se(s.wall, a);
}

function q() {
  return Date.now();
}

function Dt(a, s, l, m) {
  if (a.final) return !1;
  let b = m - a.answeredAtMs, _ = A => b < 0 || b >= A;
  if (tke(s, m) !== void 0) return !1;
  let h = le(a.status?.cooldownUntil ?? null), E = b < 0 || b >= Qn && (h === void 0 || m >= Math.min(h, a.answeredAtMs + 15e4));
  switch (l) {
   case "wall":
    return _(Vn);

   case "command":
    return E;

   case "dialog":
    return E && (a.status === null || er(s));
  }
}

function fe(a, s) {
  return a.clears.some(l => l === s);
}

function tke(a, s = Date.now()) {
  let l = ne(a);
  if (!QSn(a) || l === void 0 || l === null || l.nextGrantId === null || a.rateLimitType === void 0 || a.resetsAt === void 0 || a.resetsAt * 1e3 <= s || P0() || !ece()) return;
  let m = Xt(l, s);
  if (m === void 0 || !fe(m.grant, a.rateLimitType) || et(m.grant, l)) return;
  let {grant: b, endsAtMs: _} = m;
  return {
    origin: "wall",
    grant: b,
    resetsLeft: Math.max(1, Ie(l)),
    weeklyResetsAt: l.weeklyResetsAt,
    endsAtMs: _,
    rateLimitType: a.rateLimitType
  };
}

function Ie(a) {
  return a.grants.reduce((s, l) => s + l.resetsLeft, 0);
}

function et(a, s) {
  return !a.useRequiresLimit && !a.clears.some(l => s.exhausted.includes(l));
}

function Zn(a, s) {
  if (!et(a, s)) return null;
  let l = null;
  for (let b of ve) {
    let _ = a.percentUsed[b];
    if (a.clears.includes(b) && _ !== void 0 && (l === null || _ > l.percentUsed)) l = {
      claimType: b,
      percentUsed: _
    };
  }
  if (l === null) return {
    kind: "unnumbered",
    percentUsedMax: null
  };
  let m = tt(l.claimType);
  if (m === null || l.percentUsed >= 100) return {
    kind: "unnumbered",
    percentUsedMax: l.percentUsed
  };
  return {
    kind: "numbered",
    percentLeft: 100 - l.percentUsed,
    claimType: l.claimType,
    limitName: m,
    percentUsedMax: l.percentUsed
  };
}

function tt(a) {
  switch (a) {
   case "five_hour":
   case "seven_day":
   case "seven_day_opus":
    return WMt(a);

   case "seven_day_sonnet":
    return rtn();

   case "seven_day_overage_included":
   case "seven_day_cowork":
   case "seven_day_omelette":
   case "seven_day_oauth_apps":
    return null;
  }
}

function xFr(a) {
  if (a.origin === "wall" || a.earlyUse === null) return;
  let s = aF();
  switch (a.earlyUse.kind) {
   case "numbered":
    return nh(s.earlyLine, ZX(a));

   case "unnumbered":
    return nh(s.earlyNoNumberLine, ZX(a));
  }
}

function mge() {
  let a = O();
  return a.claiming || a.unsettledClaimGrantId !== null && a.unsettledClaimEpoch === U_() && Ht(a);
}

function NBt(a, s = Date.now()) {
  return tke(a, s) !== void 0;
}

function MMe(a, s = Date.now()) {
  let l = ne(a);
  if (!QSn(a) || l === void 0 || l === null || !l.eligible || l.nextGrantId !== null || l.grants.length === 0 || l.grants.some(m => m.resetsLeft > 0) || a.resetsAt === void 0 || a.resetsAt * 1e3 <= s || !ece()) return;
  return nh(aF().spentLine, {
    left: 0
  });
}

function xjo(a, s = Date.now()) {
  let l = ne(a);
  return l !== void 0 && l !== null && l.eligible && l.grants.some(m => m.resetsLeft > 0 && !m.paused && (le(m.endsAt) ?? 1 / 0) > s);
}

function er(a) {
  let s = ne(a);
  return s !== void 0 && s !== null && s.eligible && s.nextGrantId === null && s.grants.some(l => l.resetsLeft > 0);
}

function ZX(a) {
  return {
    left: a.resetsLeft,
    date: Jt(a.grant.endsAt),
    deadline: Le(a.grant.endsAt),
    week: Le(a.weeklyResetsAt),
    limits: tr(a.grant.clears),
    ...a.origin === "anytime" && a.earlyUse?.kind === "numbered" && {
      percent: a.earlyUse.percentLeft,
      limit: a.earlyUse.limitName
    }
  };
}

function tr(a) {
  let s = new Set;
  for (let b of a) switch (b) {
   case "five_hour":
    s.add("session");
    break;

   case "seven_day":
   case "seven_day_overage_included":
    s.add("weekly");
    break;

   case "seven_day_opus":
    s.add(WMt(b).replace(/ limit$/, ""));
    break;

   case "seven_day_sonnet":
    s.add(rtn().replace(/ limit$/, ""));
    break;

   case "seven_day_cowork":
   case "seven_day_omelette":
   case "seven_day_oauth_apps":
    break;
  }
  let l = [ ...s ], m = l.pop();
  if (m === void 0) return "limits";
  return l.length === 0 ? `${m} limit` : `${l.join(", ")} and ${m} limits`;
}

function Jt(a) {
  let s = le(a);
  return s === void 0 ? void 0 : BT(Math.floor(s / 1e3), !1, !1, !0);
}

function Le(a) {
  let s = le(a);
  return s === void 0 ? void 0 : BT(Math.floor(s / 1e3), !1, !0, !0);
}

function le(a) {
  if (a === null) return;
  let s = Date.parse(a);
  return Number.isFinite(s) ? s : void 0;
}

function $t() {
  return ece() || LFr(k(fze, null));
}

function Pjo(a, s) {
  if (!$t() || !QSn(a)) return;
  let l = O();
  if (Tr(l), l.continuableWallResetsAt = a.resetsAt ?? null, l.unsettledClaimEpoch !== U_()) D(l);
  te(a, s, "wall");
}

function te(a, s, l) {
  if (l === "wall" ? !$t() : !ece()) return Promise.resolve();
  let m = Qe(a);
  if (m === null) return Promise.resolve();
  let b = O(), _ = b.state, h = 0, E = null;
  if (_.phase !== "idle" && Se(_.wall, a)) switch (_.phase) {
   case "answered":
    if (!Dt(_, a, l, q())) return Promise.resolve();
    E = _;
    break;

   case "asking":
    return b.pendingAsk ?? Promise.resolve();

   case "failed":
    if (l === "wall" && _.failures >= Yn) return Promise.resolve();
    h = _.failures;
  }
  ee({
    phase: "asking",
    wall: m
  });
  let A = H2(), C = We(He(s), Nt).then(x => {
    if (Ot({
      wall: m,
      failures: h,
      previous: E,
      result: x ?? {
        kind: "failed"
      },
      autoArmed: A
    }), x !== void 0 && x.kind === "answered" && x.status?.ineligibleReason !== "unavailable") jt(b, x.status, s);
  }).catch(x => {
    d(j(x));
    try {
      Ot({
        wall: m,
        failures: h,
        previous: E,
        result: {
          kind: "failed"
        },
        autoArmed: A
      });
    } catch (L) {
      d(j(L));
    }
  }).finally(() => {
    if (b.pendingAsk === C) b.pendingAsk = null;
  });
  return b.pendingAsk = C, C;
}

function Ot({wall: a, failures: s, previous: l, result: m, autoArmed: b}) {
  let _ = rB();
  if (_.phase !== "asking" || _.wall.rateLimitType !== a.rateLimitType || _.wall.wallResetsAt !== a.wallResetsAt || _.wall.accountEpoch !== a.accountEpoch) return;
  let h = m.kind === "answered" ? m.status : null, E = m.kind === "failed" || h?.ineligibleReason === "unavailable";
  if (E && l !== null) ee({
    ...l,
    answeredAtMs: q()
  }); else if (E) ee({
    phase: "failed",
    wall: a,
    failures: s + 1
  }); else {
    let R = m.kind === "no_profile_scope" || m.kind === "not_authorized";
    ee(R ? {
      phase: "answered",
      wall: a,
      status: h,
      answeredAtMs: q(),
      final: R
    } : {
      phase: "answered",
      wall: a,
      status: h,
      answeredAtMs: q()
    });
  }
  if (!ece()) return;
  let A = Uot();
  if (i("tengu_cedar_ember_asked", {
    outcome: c(Kt(m)),
    at_wall: !0,
    attempt: s + 1,
    eligible: h?.eligible ?? !1,
    ineligible_reason: pe(h?.ineligibleReason),
    limit_type: c(a.rateLimitType),
    config_version: A
  }), E || h === null || !h.eligible) return;
  let C = O(), x = `${a.accountEpoch}:${a.rateLimitType}:${a.wallResetsAt}:${h.eligible}:${h.nextGrantId}`;
  if (C.wallRecordKey === x) return;
  C.wallRecordKey = x;
  let L = h.grants.find(R => R.id === h.nextGrantId);
  i("tengu_cedar_ember_wall", {
    eligible: h.eligible,
    at_limit: h.atLimit,
    usable: L !== void 0 && fe(L, a.rateLimitType) && !et(L, h),
    grant_id: ye(h.nextGrantId),
    resets_left: L?.resetsLeft ?? 0,
    resets_left_total: Ie(h),
    grants: h.grants.length,
    limit_type: c(a.rateLimitType),
    limit_types: vl(h.exhausted),
    tier: c(s2e()),
    auto_armed: b,
    low_priority_active: P0(),
    config_version: A,
    surface: pe(h.eventProps?.surface),
    server_tier: pe(h.eventProps?.tier),
    tenure_bucket: pe(h.eventProps?.tenureBucket),
    billing_path: pe(h.eventProps?.billingPath),
    billing_period: pe(h.eventProps?.billingPeriod),
    extra_usage_state: pe(h.eventProps?.extraUsageState)
  });
}

function jt(a, s, l) {
  if (a.unsettledClaimGrantId === null) return;
  if (a.unsettledClaimEpoch !== U_()) {
    D(a);
    return;
  }
  if (s?.nextGrantId === a.unsettledClaimGrantId) return;
  if (z(l), s !== null && !Oe(s)) D(a);
}

var nr = 6e5;

function Ht(a) {
  return a.unsettledClaimAtMs !== null && q() - a.unsettledClaimAtMs < nr;
}

function Kt(a) {
  return a.kind === "answered" ? a.status === null ? "absent" : "block" : a.kind;
}

function nt(a, s) {
  return a.unsettledClaimGrantId === s && a.unsettledClaimEpoch === U_() && Ht(a);
}

function D(a) {
  a.unsettledClaimGrantId = null, a.unsettledClaimRequestId = null, a.unsettledClaimEpoch = null, 
  a.unsettledClaimAtMs = null;
}

function Bt(a, s, l, m) {
  if (a.unsettledClaimRequestId !== l) a.unsettledClaimAtMs = q();
  a.unsettledClaimGrantId = s, a.unsettledClaimRequestId = l, a.unsettledClaimEpoch = m;
}

function qt(a, s) {
  return nt(a, s) && a.unsettledClaimRequestId !== null ? a.unsettledClaimRequestId : Xn();
}

function Xt(a, s) {
  if (a.nextGrantId === null) return;
  let l = a.grants.find(b => b.id === a.nextGrantId);
  if (l === void 0 || !l.usableNow || l.paused) return;
  let m = le(l.endsAt) ?? null;
  if (m !== null && m <= s) return;
  return {
    grant: l,
    endsAtMs: m
  };
}

function $Bt(a, s) {
  let l = tke(a);
  if (l === void 0 || a.resetsAt === void 0) return;
  let m = `${l.rateLimitType}:${a.resetsAt}:${l.grant.id}`, b = O();
  if (b.shownOfferKey === m) return;
  b.shownOfferKey = m, i("tengu_cedar_ember_shown", {
    surface: c(s),
    grant_id: ye(l.grant.id),
    resets_left: l.grant.resetsLeft,
    resets_left_total: l.resetsLeft,
    limit_type: c(l.rateLimitType),
    config_version: Uot()
  });
}

function qfn(a, s) {
  let l = rB();
  if (Ze(a) || l.phase === "answered" && Se(l.wall, a) && Dt(l, a, "dialog", q())) te(a, s, "dialog");
}

async function zyt(a, s) {
  try {
    return await rr(a, s);
  } catch (l) {
    return d(j(l)), {
      kind: "answer",
      result: {
        outcome: "unavailable",
        text: HMe
      }
    };
  }
}

async function Yt(a, s) {
  let m = O().pendingAsk !== null;
  if (await te(ra(), s, a), m && Ze(ra())) await te(ra(), s, a);
}

async function rr(a, s) {
  if (O().claiming) return {
    kind: "answer",
    result: {
      outcome: "unavailable",
      text: ln
    }
  };
  if (ra().status !== "rejected" && rwt() && ece()) {
    if (P0()) return {
      kind: "answer",
      result: {
        outcome: "not_offered",
        text: pr
      }
    };
    return ir(a, s);
  }
  await Yt(a, s);
  let m = ra(), b = tke(m);
  if (b === void 0) {
    let _ = ne(m);
    if (_ !== void 0 && _ !== null && (Oe(_) || Zt(_, m))) z(s);
    return {
      kind: "answer",
      result: Qt(m)
    };
  }
  return Vt(a, b), {
    kind: "confirm",
    offer: b
  };
}

function Vt(a, s) {
  i("tengu_cedar_ember_selected", {
    entry: c(a),
    grant_id: ye(s.grant.id),
    resets_left: s.grant.resetsLeft,
    resets_left_total: s.resetsLeft,
    limit_type: pe(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: xe(s),
    auto_armed: H2(),
    config_version: Uot()
  });
}

async function ir(a, s) {
  let l = O(), m = await We(He(s, {
    read: "cedar_ember"
  }), Nt), b = m?.kind === "answered" ? m.status : null, _ = m === void 0 || m.kind === "failed" || b?.ineligibleReason === "unavailable";
  if (i("tengu_cedar_ember_asked", {
    outcome: c(Kt(m ?? {
      kind: "failed"
    })),
    at_wall: !1,
    asker: c(a),
    eligible: b?.eligible ?? !1,
    ineligible_reason: pe(b?.ineligibleReason),
    at_limit: b?.atLimit ?? !1,
    grants: b?.grants.length ?? 0,
    grant_id: ye(b?.nextGrantId ?? null),
    config_version: Uot()
  }), _) return {
    kind: "answer",
    result: {
      outcome: "unavailable",
      text: mge() ? nh(aF().unconfirmedAnytimeLine, {}) : HMe
    }
  };
  jt(l, b, s);
  let h = b === null ? void 0 : ar(b, q());
  if (h === void 0) return {
    kind: "answer",
    result: sr(b)
  };
  return Vt(a, h), {
    kind: "confirm",
    offer: h
  };
}

function ar(a, s) {
  let l = Xt(a, s);
  if (l === void 0) return;
  let {grant: m, endsAtMs: b} = l;
  return {
    origin: "anytime",
    grant: m,
    resetsLeft: Math.max(1, Ie(a)),
    weeklyResetsAt: a.weeklyResetsAt,
    endsAtMs: b,
    earlyUse: Zn(m, a),
    atLimit: a.atLimit
  };
}

function sr(a) {
  if (a === null || !a.eligible || a.grants.length === 0) return {
    outcome: "not_offered",
    text: `${Ye} \xb7 ${tn}`
  };
  let s = a.grants.filter(_ => _.resetsLeft > 0), l = {
    left: Ie(a),
    date: Jt(s[0]?.endsAt ?? null)
  };
  if (s.length === 0) return {
    outcome: "spent",
    text: nh(aF().spentLine, l)
  };
  let m = s.flatMap(_ => _.blocking).map(tt).find(_ => _ !== null) ?? null, b = m !== null ? nn(m) : s.every(_ => _.paused) ? `${qe} \xb7 it is paused` : Oe(a) ? `${qe} \xb7 try again in a minute` : s.every(_ => _.useRequiresLimit) ? mr : `${qe} \xb7 try again later`;
  return {
    outcome: "not_offered",
    text: nh(`${b} \xb7 {resets} left \xb7 use by {date}`, l)
  };
}

function Qt(a) {
  let s = MMe(a);
  if (s !== void 0) return {
    outcome: "spent",
    text: s
  };
  if (Ze(a)) return {
    outcome: "unavailable",
    text: mge() ? nh(aF().unconfirmedLine, {}) : HMe
  };
  let l = ne(a);
  if (l !== void 0 && l !== null && Zt(l, a)) return {
    outcome: "not_offered",
    text: cr
  };
  return {
    outcome: "not_offered",
    text: en(or(a), a)
  };
}

function Zt(a, s) {
  let l = s.rateLimitType;
  return l !== void 0 && a.nextGrantId !== null && !a.exhausted.some(m => m === l) && a.grants.some(m => m.id === a.nextGrantId && fe(m, l));
}

function Oe(a) {
  let s = le(a.cooldownUntil);
  return s !== void 0 && s > q();
}

function or(a) {
  let s = ne(a);
  if (s === void 0 || s === null || a.rateLimitType === void 0) return Ye;
  let l = a.rateLimitType, m = s.grants.filter(_ => _.resetsLeft > 0);
  if (m.length === 0) return Ye;
  if (!m.some(_ => fe(_, l))) return dr;
  let b = m.filter(_ => fe(_, l)).flatMap(_ => _.blocking).map(tt).find(_ => _ !== null) ?? null;
  if (b !== null) return nn(b);
  if (m.every(_ => _.paused)) return `${Be} \xb7 it is paused`;
  if (Oe(s)) return `${Be} \xb7 try again in a minute`;
  return Be;
}

function en(a, s) {
  let l = tO(s) ? BT(s.resetsAt) : void 0;
  return l !== void 0 ? `${a} \xb7 this limit resets ${l}` : `${a} \xb7 ${tn}`;
}

function PFr(a, s) {
  i("tengu_cedar_ember_confirmed", {
    confirmed: !1,
    entry: c(a),
    grant_id: ye(s.grant.id),
    limit_type: pe(s.origin === "wall" ? s.rateLimitType : void 0),
    at_limit: s.origin === "wall" || s.atLimit,
    early_use: xe(s),
    percent_used_max: Xe(s),
    config_version: Uot()
  });
  let l = aF();
  return {
    outcome: "kept",
    text: nh(s.grant.useRequiresLimit ? l.keptLine : l.keptAnytimeLine, ZX(s))
  };
}

async function IFr(a, s, l) {
  let m = O();
  if (m.claiming) return {
    outcome: "unavailable",
    text: ln
  };
  m.claiming = !0;
  try {
    return l.origin === "wall" || Qe(ra()) !== null ? await lr(a, s, l.grant.id) : await ur(a, s, l);
  } catch (b) {
    d(j(b));
    let _ = aF();
    return {
      outcome: "unavailable",
      text: nh(l.origin === "wall" ? _.unconfirmedLine : _.unconfirmedAnytimeLine, {})
    };
  } finally {
    m.claiming = !1;
  }
}

async function lr(a, s, l) {
  let m = O(), b = aF(), _ = Uot();
  await Yt(a, s);
  let h = ra(), E = Qe(h), A = tke(h);
  if (i("tengu_cedar_ember_confirmed", {
    confirmed: !0,
    entry: c(a),
    grant_id: ye(l),
    limit_type: pe(h.rateLimitType),
    still_offered: A !== void 0 && A.grant.id === l,
    at_limit: !0,
    early_use: !1,
    config_version: _
  }), A === void 0 || E === null) return Qt(h);
  if (A.grant.id !== l) return {
    outcome: "not_offered",
    text: br
  };
  let C = Date.now(), x = nt(m, l), L = qt(m, l), R = await We(Ke(s, l, L), Ft) ?? {
    result: "error",
    reason: null,
    resetsLeft: null,
    cleared: [],
    weeklyResetsAt: null
  };
  switch (i("tengu_cedar_ember_result", {
    result: c(R.result),
    reason: pe(R.reason),
    entry: c(a),
    grant_id: ye(l),
    resets_left: R.resetsLeft ?? void 0,
    cleared: vl(R.cleared),
    limit_type: c(E.rateLimitType),
    at_limit: !0,
    early_use: !1,
    latency_ms: Date.now() - C,
    config_version: _
  }), R.result) {
   case "reset":
   case "not_limited":
   case "cooldown":
   case "already_used":
   case "ineligible":
    g("cedar_ember");
    break;

   case "unavailable":
   case "rate_limited":
   case "auth_error":
   case "error":
    f("cedar_ember", R.result);
    break;
  }
  let N = A.resetsLeft - A.grant.resetsLeft, X = R.resetsLeft ?? (R.result === "already_used" ? 0 : Math.max(0, A.grant.resetsLeft - 1)), W = {
    ...ZX(A),
    left: N + X,
    week: Le(R.weeklyResetsAt ?? A.weeklyResetsAt)
  };
  switch (R.result) {
   case "reset":
    {
      D(m);
      let H = Ut(m, E);
      Mt(m, E, [ E.rateLimitType, ...ke(R.cleared).filter(de => de !== E.rateLimitType) ], a, H);
      let I = nh(b.successLine, W);
      return {
        outcome: "reset",
        text: H ? I : Pt(I)
      };
    }

   case "not_limited":
    {
      D(m);
      let H = Ut(m, E);
      Mt(m, E, [ E.rateLimitType ], a, H);
      let I = x ? gr : _r;
      return {
        outcome: "reset",
        text: H ? I : Pt(I)
      };
    }

   case "cooldown":
    {
      if (!x) D(m);
      return z(s), {
        outcome: "unavailable",
        text: x ? sn : yr
      };
    }

   case "already_used":
    {
      if (x) return D(m), me(E), z(s), {
        outcome: "spent",
        text: on
      };
      if (N > 0) return me(E), te(ra(), s, a), z(s), {
        outcome: "spent",
        text: nh(`${Re} \xb7 ${rn}`, W)
      };
      return Ar(E, l), z(s), {
        outcome: "spent",
        text: nh(Re, W)
      };
    }

   case "ineligible":
    {
      if (me(E), te(ra(), s, a), x) return D(m), z(s), {
        outcome: "not_offered",
        text: Ve
      };
      return {
        outcome: "not_offered",
        text: en(an, h)
      };
    }

   case "auth_error":
    return {
      outcome: "unavailable",
      text: un
    };

   case "rate_limited":
    return {
      outcome: "unavailable",
      text: nh(x ? b.unconfirmedLine : b.unavailableLine, W)
    };

   case "unavailable":
   case "error":
    {
      Bt(m, l, L, E.accountEpoch);
      let H = ke(R.cleared);
      if (H.length > 0) {
        if (Gct(H), H.includes(E.rateLimitType)) z(s);
      }
      return me(E), te(ra(), s, a), {
        outcome: "unavailable",
        text: nh(x ? b.stillUnconfirmedLine : b.unconfirmedLine, W)
      };
    }
  }
}

function Xe(a) {
  return a.origin === "anytime" ? a.earlyUse?.percentUsedMax ?? void 0 : void 0;
}

function xe(a) {
  return a.origin === "anytime" && a.earlyUse !== null;
}

async function ur(a, s, l) {
  let m = O(), b = aF(), _ = Uot(), h = l.grant.id, E = U_();
  i("tengu_cedar_ember_confirmed", {
    confirmed: !0,
    entry: c(a),
    grant_id: ye(h),
    at_limit: l.atLimit,
    early_use: xe(l),
    percent_used_max: Xe(l),
    config_version: _
  });
  let A = Date.now(), C = nt(m, h), x = qt(m, h), L = await We(Ke(s, h, x), Ft) ?? {
    result: "error",
    reason: null,
    resetsLeft: null,
    cleared: [],
    weeklyResetsAt: null
  };
  switch (i("tengu_cedar_ember_result", {
    result: c(L.result),
    reason: pe(L.reason),
    entry: c(a),
    grant_id: ye(h),
    resets_left: L.resetsLeft ?? void 0,
    cleared: vl(L.cleared),
    at_limit: l.atLimit,
    early_use: xe(l),
    percent_used_max: Xe(l),
    latency_ms: Date.now() - A,
    config_version: _
  }), L.result) {
   case "reset":
   case "not_limited":
   case "cooldown":
   case "already_used":
   case "ineligible":
    g("cedar_ember");
    break;

   case "unavailable":
   case "rate_limited":
   case "auth_error":
   case "error":
    f("cedar_ember", L.result);
    break;
  }
  let R = l.resetsLeft - l.grant.resetsLeft, N = L.resetsLeft ?? (L.result === "already_used" ? 0 : Math.max(0, l.grant.resetsLeft - 1)), X = {
    ...ZX(l),
    left: R + N,
    week: Le(L.weeklyResetsAt ?? l.weeklyResetsAt)
  };
  switch (L.result) {
   case "reset":
    {
      D(m);
      let W = ke(L.cleared);
      if (W.length > 0) Gct(W);
      return z(s), {
        outcome: "reset",
        text: nh(b.successLine, X)
      };
    }

   case "not_limited":
    if (D(m), C) return z(s), {
      outcome: "not_offered",
      text: Ve
    };
    return {
      outcome: "not_offered",
      text: fr
    };

   case "cooldown":
    if (!C) D(m);
    return z(s), {
      outcome: "unavailable",
      text: C ? sn : hr
    };

   case "already_used":
    if (C) return D(m), z(s), {
      outcome: "spent",
      text: on
    };
    return {
      outcome: "spent",
      text: nh(R > 0 ? `${Re} \xb7 ${rn}` : Re, X)
    };

   case "ineligible":
    if (C) return D(m), z(s), {
      outcome: "not_offered",
      text: Ve
    };
    return {
      outcome: "not_offered",
      text: an
    };

   case "auth_error":
    return {
      outcome: "unavailable",
      text: un
    };

   case "rate_limited":
    return {
      outcome: "unavailable",
      text: nh(C ? b.unconfirmedAnytimeLine : b.unavailableLine, X)
    };

   case "unavailable":
   case "error":
    {
      Bt(m, h, x, E);
      let W = ke(L.cleared);
      if (W.length > 0) Gct(W);
      if (W.length > 0 || C) z(s);
      return {
        outcome: "unavailable",
        text: nh(C ? b.stillUnconfirmedLine : b.unconfirmedAnytimeLine, X)
      };
    }
  }
}

var Ye = "No reset to use", tn = "you're not at a usage limit right now", Be = "Your reset can't be used for this limit right now", dr = "Your reset doesn't cover this limit", cr = `This limit may have lifted already \xb7 checking your limits now \xb7 run /${IQ} again in a moment to use your reset anyway`, mr = `You have a reset saved for when you reach a usage limit \xb7 run /${IQ} when you do`, qe = "Your reset can't be used right now", pr = `Resets can't be used while you continue at lower priority \xb7 run /${IQ} after that ends`, fr = "Your reset only works at a usage limit, and you're not at one now \xb7 nothing was used";

function nn(a) {
  return `Your reset doesn't refill your ${a}, so it can't be used until that resets`;
}

var HMe = "Couldn't check for a reset right now \xb7 try again in a moment", uze = "Checking for a reset\u2026", Re = "That reset was already used \xb7 nothing changed just now \xb7 {resets} left", rn = `run /${IQ} again to use one`, an = "This reset isn't available any more \xb7 nothing was used", br = `A different reset is on offer now \xb7 nothing was used \xb7 run /${IQ} again to see it`, _r = "Your limit had already reset on its own \xb7 nothing was used", gr = "Your limits are clear", yr = "Another reset was just started on your account \xb7 checking your limits now \xb7 if you're still at the limit in a minute, try again", sn = "Your earlier reset may still be going through \xb7 checking your limits now \xb7 try again in a minute if they aren't refilled", hr = "Another reset was just started on your account \xb7 this one wasn't used \xb7 try again in a minute", on = "Your earlier reset went through after all \xb7 checking your limits now", Ve = "This reset isn't available any more \xb7 your earlier try may have gone through \xb7 checking your limits now", Er = "send a message to continue", ln = "Your limits are already being reset \xb7 one moment", un = "Couldn't reset your limits with this login \xb7 run /login, then try again";

function Pt(a) {
  return `${a} \xb7 ${Er}`;
}

function Ut(a, s) {
  let l = jis() && a.continuableWallResetsAt === s.wallResetsAt;
  return a.continuableWallResetsAt = null, l;
}

function ke(a) {
  let s = [];
  for (let l of a) switch (l) {
   case "five_hour":
   case "seven_day":
   case "seven_day_overage_included":
   case "seven_day_opus":
   case "seven_day_sonnet":
    s.push(l);
    break;

   case "seven_day_cowork":
   case "seven_day_omelette":
   case "seven_day_oauth_apps":
    break;
  }
  return s;
}

function Mt(a, s, l, m, b) {
  let _ = [ () => X$("cedar_ember"), () => {
    $N("reset");
  }, () => wr(l), () => {
    me(s), a.wallRecordKey = null, a.shownOfferKey = null;
  }, () => {
    if (b) Net();
  }, () => a.events.emit({
    type: "reset",
    entry: m
  }) ];
  for (let h of _) try {
    h();
  } catch (E) {
    d(j(E));
  }
}

function wr(a) {
  if (a.length > 0) Gct(a);
  let s = ra();
  if (s.status !== "rejected" || s.rateLimitType === void 0 || !a.includes(s.rateLimitType)) return;
  qxe({
    ...s,
    status: "allowed",
    rateLimitType: void 0,
    resetsAt: void 0
  });
}

function z(a) {
  if (H2()) {
    Q2e();
    return;
  }
  zMt(a, void 0).catch(s => {
    d(j(s));
  });
}

function me(a) {
  let s = rB();
  if (s.phase !== "idle" && s.wall.wallResetsAt === a.wallResetsAt && s.wall.rateLimitType === a.rateLimitType) ee({
    phase: "idle"
  });
}

function Ar(a, s) {
  let l = rB();
  if (l.phase !== "answered" || l.wall.wallResetsAt !== a.wallResetsAt || l.wall.rateLimitType !== a.rateLimitType || l.status === null) return;
  ee({
    ...l,
    answeredAtMs: q(),
    status: {
      ...l.status,
      nextGrantId: l.status.nextGrantId === s ? null : l.status.nextGrantId,
      grants: l.status.grants.map(m => m.id === s ? {
        ...m,
        resetsLeft: 0,
        usableNow: !1
      } : m)
    }
  });
}

function Tr(a) {
  if (a.sessionSwitchSubscribed) return;
  a.sessionSwitchSubscribed = !0, Oc((s, l) => {
    if (Ptt(l)) a.continuableWallResetsAt = null;
  });
}

var vr = "juniper_tide", Lr = 25e3, xr = p(() => u({
  surface: U([ "claude_ai", "claude_code_cli", "unknown" ]).catch("unknown"),
  tier: U([ "claude_pro", "claude_max_5x", "claude_max_20x", "unknown" ]).catch("unknown"),
  tenure_bucket: U([ "under_14", "14-29", "30-89", "90-364", "365+", "unknown" ]).catch("unknown"),
  billing_path: U([ "stripe", "apple", "google_play", "other", "unknown" ]).catch("unknown"),
  billing_period: U([ "monthly", "annual", "unknown" ]).catch("unknown"),
  extra_usage_state: U([ "not_configured", "disabled", "enabled", "unknown" ]).catch("unknown")
})), Rr = p(() => u({
  eligible: M(),
  ineligible_reason: U([ "tier", "tenure", "surface", "mobile", "cli_version", "not_at_wall", "weekly_limit", "no_weekly_limit", "other_experiment", "extra_usage", "unavailable", "unknown" ]).catch("unknown").nullable().optional(),
  in_experiment: M().optional(),
  arm: U([ "control", "reset" ]).nullable().optional().catch(null),
  available: M().optional(),
  next_available_at: o().nullable().optional().catch(null),
  weekly_resets_at: o().nullable().optional().catch(null),
  resets_per_week: v().optional().catch(void 0),
  event_props: xr().nullable().optional().catch(null)
})), kr = p(() => u({
  result: U([ "reset", "already_used", "not_limited", "ineligible", "unavailable" ]).catch("unavailable"),
  next_available_at: o().nullable().optional().catch(null),
  weekly_resets_at: o().nullable().optional().catch(null)
}));

function Sr(a) {
  if (a === void 0 || a === null) return null;
  let s = Rr().safeParse(a);
  if (!s.success) return t(`[juniper-tide] ignoring a malformed status block: ${s.error.message}`), 
  null;
  let l = s.data, m = l.event_props;
  return {
    eligible: l.eligible,
    ineligibleReason: l.ineligible_reason ?? null,
    inExperiment: l.in_experiment ?? !1,
    arm: l.arm ?? null,
    available: l.available ?? !1,
    nextAvailableAt: l.next_available_at ?? null,
    weeklyResetsAt: l.weekly_resets_at ?? null,
    resetsPerWeek: l.resets_per_week ?? 1,
    eventProps: m ? {
      surface: m.surface,
      tier: m.tier,
      tenureBucket: m.tenure_bucket,
      billingPath: m.billing_path,
      billingPeriod: m.billing_period,
      extraUsageState: m.extra_usage_state
    } : null
  };
}

async function dn(a) {
  try {
    if (!Kf()) return {
      kind: "no_profile_scope"
    };
    let s = await I0(a, {
      read: "at_wall"
    });
    if (!BMt(s)) return t("[juniper-tide] status fetch returned a fieldless or non-object body (in-band error)", {
      level: "warn"
    }), {
      kind: "failed"
    };
    return {
      kind: "answered",
      status: Sr(s?.juniper_tide)
    };
  } catch (s) {
    if (t(`[juniper-tide] status fetch failed: ${j(s).message}`, {
      level: "warn"
    }), lkr(s)) return {
      kind: "answered",
      status: null
    };
    return {
      kind: "failed"
    };
  }
}

async function cn(a) {
  let s = An()?.organizationUuid;
  if (!s) return t("[juniper-tide] no OAuth organization; cannot claim"), {
    result: "auth_error",
    nextAvailableAt: null
  };
  try {
    let l = await sS(() => Gt.post(`/api/organizations/${s}/reset_rate_limits`, {
      program: vr
    }, {
      auth: "async",
      headers: {
        "Content-Type": "application/json"
      },
      timeout: Lr,
      refreshOAuth: !0,
      credentials: a
    }), {
      credentials: a
    });
    if (!l.ok) return t(`[juniper-tide] claim not sent: ${l.reason === "no-auth" ? l.detail : l.reason}`, {
      level: "warn"
    }), {
      result: l.reason === "no-auth" ? "auth_error" : "error",
      nextAvailableAt: null
    };
    let m = kr().safeParse(l.data);
    if (!m.success) return t(`[juniper-tide] unreadable claim response: ${m.error.message}`, {
      level: "error"
    }), d(Error("[juniper-tide] unreadable claim response")), {
      result: "error",
      nextAvailableAt: null
    };
    return {
      result: m.data.result,
      nextAvailableAt: m.data.next_available_at ?? null
    };
  } catch (l) {
    if (Xp(l)) t(`[juniper-tide] claim failed: ${j(l).message}`, {
      level: "warn"
    }); else d(j(l));
    if (_c(l)) switch (l.response?.status) {
     case 429:
      return {
        result: "rate_limited",
        nextAvailableAt: null
      };

     case 401:
     case 403:
      return {
        result: "auth_error",
        nextAvailableAt: null
      };

     default:
      break;
    }
    return {
      result: "error",
      nextAvailableAt: null
    };
  }
}

function Ir() {
  return {
    state: {
      phase: "idle"
    },
    shownWallResetsAt: null,
    pendingAsk: null,
    claiming: !1,
    continuableWallResetsAt: null,
    unsettledClaimWallResetsAt: null,
    sessionSwitchSubscribed: !1,
    changed: Me(),
    events: Me()
  };
}

var Or = new K(Ir);

function Y() {
  return Or.of(B().host);
}

function oB() {
  return Y().state;
}

function re(a) {
  let s = Y();
  s.state = a, s.changed.emit();
}

function pze(a) {
  return Y().changed.subscribe(a);
}

function OFr(a) {
  return Y().events.subscribe(a);
}

var Pr = 3, Ur = 12e3, Mr = 35e3;

function at(a, s) {
  return s.resetsAt === a.wallResetsAt && a.accountEpoch === U_();
}

function Ne(a) {
  let s = oB();
  return s.phase === "answered" && at(s, a) ? s.status : void 0;
}

function rt(a) {
  let s = oB();
  return s.phase === "failed" && at(s, a);
}

function Ite(a, s = Date.now()) {
  let l = Ne(a);
  return o2e(a) && l !== void 0 && l !== null && l.arm === "reset" && l.available && a.resetsAt !== void 0 && a.resetsAt * 1e3 > s && !P0() && JAe();
}

function DMe(a, s = Date.now()) {
  let l = Ne(a);
  if (!o2e(a) || l === void 0 || l === null || l.arm !== "reset" || l.available || l.nextAvailableAt === null || a.resetsAt === void 0 || a.resetsAt * 1e3 <= s || !JAe()) return;
  return eur(tce().spentLine, it(l.nextAvailableAt));
}

function it(a) {
  if (a === null) return;
  let s = Date.parse(a);
  return Number.isFinite(s) ? BT(Math.floor(s / 1e3), !1, !0, !0) : void 0;
}

function Ijo(a, s) {
  if (!JAe() || !o2e(a)) return;
  let l = Y();
  jr(l), l.continuableWallResetsAt = a.resetsAt ?? null, Ue(a, s, "wall");
}

function Ue(a, s, l) {
  if (!JAe() || !o2e(a)) return Promise.resolve();
  let m = a.resetsAt;
  if (m === void 0) return Promise.resolve();
  let b = Y(), _ = U_(), h = b.state, E = 0;
  if (h.phase !== "idle" && at(h, a)) switch (h.phase) {
   case "answered":
    return Promise.resolve();

   case "asking":
    return b.pendingAsk ?? Promise.resolve();

   case "failed":
    if (l === "wall" && h.failures >= Pr) return Promise.resolve();
    E = h.failures;
  }
  re({
    phase: "asking",
    wallResetsAt: m,
    accountEpoch: _
  });
  let A = H2(), C = We(dn(s), Ur).then(x => {
    mn({
      wallResetsAt: m,
      accountEpoch: _,
      failures: E,
      result: x ?? {
        kind: "failed"
      },
      autoArmed: A
    });
  }).catch(x => {
    d(j(x));
    try {
      mn({
        wallResetsAt: m,
        accountEpoch: _,
        failures: E,
        result: {
          kind: "failed"
        },
        autoArmed: A
      });
    } catch (L) {
      d(j(L));
    }
  }).finally(() => {
    if (b.pendingAsk === C) b.pendingAsk = null;
  });
  return b.pendingAsk = C, C;
}

function mn({wallResetsAt: a, accountEpoch: s, failures: l, result: m, autoArmed: b}) {
  let _ = oB();
  if (_.phase !== "asking" || _.wallResetsAt !== a || _.accountEpoch !== s) return;
  let h = m.kind === "answered" ? m.status : null;
  if (m.kind === "failed") re({
    phase: "failed",
    wallResetsAt: a,
    accountEpoch: s,
    failures: l + 1
  }); else re({
    phase: "answered",
    wallResetsAt: a,
    accountEpoch: s,
    status: h
  });
  if (i("tengu_juniper_tide_asked", {
    outcome: c(m.kind === "answered" ? h === null ? "absent" : "block" : m.kind),
    attempt: l + 1,
    eligible: h?.eligible ?? !1,
    ineligible_reason: pe(h?.ineligibleReason) ?? void 0,
    config_version: kIn()
  }), h === null || !h.eligible) return;
  i("tengu_juniper_tide_wall", {
    in_experiment: h.inExperiment,
    arm: pe(h.arm) ?? void 0,
    available: h.available,
    tier: c(s2e()),
    auto_armed: b,
    low_priority_active: P0(),
    config_version: kIn(),
    surface: pe(h.eventProps?.surface) ?? void 0,
    server_tier: pe(h.eventProps?.tier) ?? void 0,
    tenure_bucket: pe(h.eventProps?.tenureBucket) ?? void 0,
    billing_path: pe(h.eventProps?.billingPath) ?? void 0,
    billing_period: pe(h.eventProps?.billingPeriod) ?? void 0,
    extra_usage_state: pe(h.eventProps?.extraUsageState) ?? void 0
  });
}

function FBt(a, s) {
  let l = a.resetsAt ?? null, m = Y();
  if (l === null || m.shownWallResetsAt === l) return;
  m.shownWallResetsAt = l;
  let b = Ne(a);
  i("tengu_juniper_tide_shown", {
    arm: pe(b?.arm) ?? void 0,
    surface: c(s),
    config_version: kIn()
  });
}

function MFr(a, s) {
  if (rt(a)) Ue(a, s, "dialog");
}

async function a7e(a, s) {
  try {
    return await Nr(a, s);
  } catch (l) {
    return d(j(l)), {
      outcome: "unavailable",
      text: tce().unavailableLine
    };
  }
}

async function Nr(a, s) {
  let l = Y(), m = tce();
  if (Ne(ra()) === void 0) {
    let C = l.pendingAsk !== null;
    if (await Ue(ra(), s, a), C && rt(ra())) await Ue(ra(), s, a);
  }
  let b = ra();
  if (!Ite(b) || b.resetsAt === void 0) {
    let C = DMe(b);
    if (C !== void 0) return {
      outcome: "spent",
      text: C
    };
    return rt(b) ? {
      outcome: "unavailable",
      text: m.unavailableLine
    } : {
      outcome: "not_offered",
      text: pn
    };
  }
  if (l.claiming) return {
    outcome: "unavailable",
    text: Wr
  };
  let _ = b.resetsAt, h = kIn();
  i("tengu_juniper_tide_selected", {
    entry: c(a),
    auto_armed: H2(),
    config_version: h
  });
  let E = Date.now(), A;
  l.claiming = !0;
  try {
    A = await We(cn(s), Mr) ?? {
      result: "error",
      nextAvailableAt: null
    };
  } finally {
    l.claiming = !1;
  }
  switch (i("tengu_juniper_tide_result", {
    result: c(A.result),
    entry: c(a),
    latency_ms: Date.now() - E,
    config_version: h
  }), A.result) {
   case "reset":
   case "not_limited":
   case "already_used":
   case "ineligible":
    g("juniper_tide");
    break;

   case "unavailable":
   case "rate_limited":
   case "auth_error":
   case "error":
    f("juniper_tide", A.result);
    break;
  }
  switch (A.result) {
   case "reset":
   case "not_limited":
    {
      l.unsettledClaimWallResetsAt = null;
      let C = Wis() && l.continuableWallResetsAt === _;
      l.continuableWallResetsAt = null, Fr(l, _, a, C);
      let x = eur(m.successLine, A.result === "reset" ? it(A.nextAvailableAt) : void 0);
      return {
        outcome: "reset",
        text: C ? x : `${x} \xb7 send a message to continue`
      };
    }

   case "already_used":
    {
      if (Gr(_, A.nextAvailableAt), l.unsettledClaimWallResetsAt === _) l.unsettledClaimWallResetsAt = null, 
      Jr(s);
      return {
        outcome: "spent",
        text: eur(m.spentLine, it(A.nextAvailableAt))
      };
    }

   case "ineligible":
    return $r(_), {
      outcome: "not_offered",
      text: pn
    };

   case "auth_error":
    return {
      outcome: "unavailable",
      text: zr
    };

   case "unavailable":
   case "rate_limited":
   case "error":
    if (A.result === "error") l.unsettledClaimWallResetsAt = _;
    return {
      outcome: "unavailable",
      text: m.unavailableLine
    };
  }
}

var pn = "A session-limit reset isn't available right now.", Wr = "Your session limit is already being reset \xb7 one moment", zr = "Couldn't reset your session limit with this login \xb7 run /login, then try again";

function Fr(a, s, l, m) {
  let b = [ () => X$("juniper_tide"), () => {
    $N("reset");
  }, () => Dr(s), () => {
    let _ = oB();
    if (_.phase !== "idle" && _.wallResetsAt === s) re({
      phase: "idle"
    });
  }, () => {
    if (m) Net();
  }, () => a.events.emit({
    type: "reset",
    entry: l
  }) ];
  for (let _ of b) try {
    _();
  } catch (h) {
    d(j(h));
  }
}

function Dr(a) {
  let s = ra();
  if (s.status !== "rejected" || s.rateLimitType !== "five_hour" || s.resetsAt !== a) return;
  qxe({
    ...s,
    status: "allowed",
    rateLimitType: void 0,
    resetsAt: void 0
  });
}

function Jr(a) {
  if (H2()) {
    Q2e();
    return;
  }
  zMt(a, void 0).catch(s => {
    d(j(s));
  });
}

function Gr(a, s) {
  let l = oB();
  if (l.phase !== "answered" || l.wallResetsAt !== a || l.status === null) return;
  re({
    ...l,
    status: {
      ...l.status,
      available: !1,
      nextAvailableAt: s ?? l.status.nextAvailableAt
    }
  });
}

function $r(a) {
  let s = oB();
  if (s.phase !== "answered" || s.wallResetsAt !== a || s.status === null) return;
  re({
    ...s,
    status: {
      ...s.status,
      eligible: !1,
      available: !1
    }
  });
}

function jr(a) {
  if (a.sessionSwitchSubscribed) return;
  a.sessionSwitchSubscribed = !0, Oc((s, l) => {
    if (Ptt(l)) a.continuableWallResetsAt = null;
  });
}

var Yfn = "session running", UBt = "session waiting for a prompt", Hr = "session waiting", be = " \xb7 ", Kr = /^[0-9a-f]{8}$/, fn = 20;

function HFr(a) {
  let s = a.split(JR).map(b => b.trim()).filter(Boolean);
  if (s.length === 0) return;
  let [l, ...m] = s;
  return m.length === 0 ? l : `${l} ${JR} ${m.join(be)}`;
}

function Xfn(a) {
  if (!a.startsWith(Yfn) && !a.startsWith(UBt)) return null;
  if (a.includes(`\n`)) return null;
  let s = a.split(be), l = s[0];
  if (l !== Yfn && l !== UBt) return null;
  let m = s.findLastIndex(C => Kr.test(C)), b = m === -1 ? void 0 : s[m], _ = m === -1 ? s.length : m, h = s.slice(1, _), E = h.length > 0 ? h.join(be) : void 0, A = m === -1 ? [] : s.slice(m + 1);
  return {
    state: l,
    name: E,
    id: b,
    chips: A
  };
}

function DFr(a, s, l = !0) {
  let m = _ => ie(r8n(_)), b = {
    ...a,
    chips: [ ...a.chips ]
  };
  if (m(b) <= s) return b;
  if (b.state === UBt) {
    if (b = {
      ...b,
      state: Hr
    }, m(b) <= s) return b;
  }
  if (b.id !== void 0 && b.name !== void 0 && l) {
    if (b = {
      ...b,
      id: void 0
    }, m(b) <= s) return b;
  }
  if (b.name !== void 0) {
    let _ = m({
      ...b,
      name: void 0
    }), h = s - _ - ie(be), E = ie(b.name), A = E > fn ? Math.max(h, fn) : h;
    if (A >= 1 && A < E) b = {
      ...b,
      name: ut(b.name, A)
    };
  }
  return b;
}

function r8n(a) {
  return [ a.state, ...a.name ? [ a.name ] : [], ...a.id ? [ a.id ] : [], ...a.chips ].join(be);
}

function Yr(a) {
  let {index: yn} = a;
  return yn !== -1;
}

var bn = [ lbo, tkr, abo ].map(a => ({
  url: a,
  marker: `learn more: ${a}`
}));

function pge(a) {
  let _ = w(33), {children: s, color: l, bold: m} = a, b = kze(), h, E, A, C, x, L;
  if (_[0] !== m || _[1] !== s || _[2] !== l || _[3] !== b) {
    L = _n;
    H: {
      let R;
      if (_[10] !== s) R = N => {
        let {url: X, marker: W} = N;
        return {
          url: X,
          marker: W,
          index: s.indexOf(W)
        };
      }, _[10] = s, _[11] = R; else R = _[11];
      E = bn.map(R).find(Yr);
      if (!b || E === void 0) {
        let N;
        if (_[12] !== m || _[13] !== s || _[14] !== l) N = e(Yj, {
          color: l,
          bold: m,
          children: s
        }), _[12] = m, _[13] = s, _[14] = l, _[15] = N; else N = _[15];
        L = N;
        break H;
      }
      h = n;
      A = l;
      C = m;
      x = s.slice(0, E.index);
    }
    _[0] = m, _[1] = s, _[2] = l, _[3] = b, _[4] = h, _[5] = E, _[6] = A, _[7] = C, 
    _[8] = x, _[9] = L;
  } else h = _[4], E = _[5], A = _[6], C = _[7], x = _[8], L = _[9];
  if (L !== _n) return L;
  let R;
  if (_[16] !== m || _[17] !== l) R = e(n, {
    color: l,
    bold: m,
    underline: !0,
    children: "learn more"
  }), _[16] = m, _[17] = l, _[18] = R; else R = _[18];
  let N;
  if (_[19] !== E.url || _[20] !== R) N = e(zt, {
    url: E.url,
    children: R
  }), _[19] = E.url, _[20] = R, _[21] = N; else N = _[21];
  let I;
  if (_[22] !== s || _[23] !== E.index || _[24] !== E.marker.length) I = s.slice(E.index + E.marker.length), 
  _[22] = s, _[23] = E.index, _[24] = E.marker.length, _[25] = I; else I = _[25];
  let de;
  if (_[26] !== h || _[27] !== A || _[28] !== C || _[29] !== x || _[30] !== N || _[31] !== I) de = r(h, {
    color: A,
    bold: C,
    children: [ x, N, I ]
  }), _[26] = h, _[27] = A, _[28] = C, _[29] = x, _[30] = N, _[31] = I, _[32] = de; else de = _[32];
  return de;
}

export { pge, DBt, CA, Kfn, Rjo, kFr, LBt, TFr, i2, t8n, n8n, fge, AFr, CFr, rB, cze, RFr, tke, xFr, mge, NBt, MMe, xjo, ZX, Pjo, $Bt, qfn, zyt, PFr, IFr, HMe, uze, oB, pze, OFr, Ite, DMe, Ijo, FBt, MFr, a7e, Yfn, UBt, HFr, Xfn, DFr, r8n };
