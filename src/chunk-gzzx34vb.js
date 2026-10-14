// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, ve } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { un } from "./chunk-y752zmas.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { UZ, sa, dU, In, k, z_, nxr } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { wh, Rp, _, t } from "./chunk-kawq2919.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { kt } from "./chunk-r2h53bm2.js";

import { Yn } from "./chunk-cjt10y7b.js";

import { Xn } from "./chunk-x35dw27e.js";

import { HRs, bTr, STr } from "./chunk-yk8mtyzg.js";

import { d3e } from "./chunk-584ft4bq.js";

import { Fl } from "./chunk-dc6j1jb5.js";

import { Qo } from "./chunk-eha3vdmz.js";

import { BOe } from "./chunk-1xnsr4dy.js";

import { hostname as q } from "os";

var s = "tengu_sessions_elevated_auth_enforcement", u = "require_trusted_devices", P = "tengu_sessions_elevated_auth_disable_proactive_enrollment", W = 3e5, j = 864e5;

class O {
  storedTokenRead=void 0;
  lastEnrollAttemptAtMs=0;
  automaticEnrollmentNoticePending=!1;
  automaticEnrollmentNoticeRaised=Me();
  signInEnrollmentsInFlight=0;
}

var v = new K(() => new O), Mtn = "This computer was enrolled as a trusted device for your account (you will also get an email). If you did not expect this, review your devices in claude.ai settings.";

function oTr() {
  let e = v.of(B().host), n = e.automaticEnrollmentNoticePending;
  return e.automaticEnrollmentNoticePending = !1, n;
}

function KSo(e) {
  return v.of(B().host).automaticEnrollmentNoticeRaised.subscribe(e);
}

function F6s() {
  if (oTr()) process.stderr.write(`${Mtn}\n`);
}

var lut = "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";

function Spe() {
  return k(P, !1);
}

function b() {
  return import.meta.require("./chunk-egjan19g.js");
}

function E() {
  return import.meta.require("./chunk-jj9t3stv.js");
}

function r9() {
  if (!k(s, !1)) return !1;
  return E().isPolicyAllowed(u);
}

function cwe() {
  if (!k(s, !1)) return !1;
  return E().isPolicyEnforced(u);
}

function qSo() {
  if (!Fl(s, {
    safe: !0
  })) return !1;
  let e = E();
  return e.isPolicyEnforcedOrHintedByRefusedCache(u) || e.isPolicyVerdictAbsent();
}

function U6s() {
  return a.CLAUDE_CODE_REMOTE === !0 && !a.CLAUDE_TRUSTED_DEVICE_TOKEN && cwe();
}

var N = "not reachable with this tool from a cloud session: that session requires a trusted device, and this cloud session has none to show", sTr = `${N}. Tell your user it was not sent; do not look for another tool to send it with`, z = /^(?:cse|session)_[0-9A-Za-z_-]{1,128}$/;

function B6s(e, n) {
  let r = `Nothing was sent: Remote Control session '${e}' is`;
  return n === void 0 || !z.test(n.sessionId) ? `${r} ${sTr}.` : `${r} ${N}. This target may be reachable with ${n.sendTool}, the session service's own tool, if your user has allowed this cloud session to reach that computer; that session's id there is "${n.sessionId}". A tool of that name on any other server is not it.`;
}

function uwe() {
  if (!Fl("tengu_bridge_attestation_enforce", {
    safe: !0
  })) return bTr;
  if (!Fl(s, {
    safe: !0
  }) || !E().isPolicyEnforcedOrHintedByRefusedCache(u)) return bTr;
  return Z();
}

var Y = "VERIFIED_KEYLESS_DEVICE", F = "tengu_bridge_attestation_enforce_config";

function Z() {
  try {
    let {value: e, source: n} = In(F, {});
    switch (n) {
     case "payload":
      return dU() ? S(e, h()) : STr(e);

     case "disk":
      return S(e, h());

     case "override":
      return S(e, I());

     default:
      return I();
    }
  } catch {
    return h();
  }
}

function I() {
  return sa() && !dU() ? STr(UZ()[F] ?? {}) : h();
}

function h() {
  return {
    enforce: !0,
    acceptLevel: Y,
    acceptStatuses: new Set
  };
}

function S(e, n) {
  return {
    ...n,
    acceptLevel: HRs(STr(e).acceptLevel, n.acceptLevel)
  };
}

function Htn() {
  let e = v.of(B().host);
  if (e.storedTokenRead !== void 0) return e.storedTokenRead;
  let n = J();
  return e.storedTokenRead = n, n;
}

async function J() {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await Xn().readAsync())?.trustedDeviceToken;
}

async function nS() {
  if (!r9()) return;
  return Htn();
}

async function Tjn() {
  if (!cwe()) return !1;
  if (await Htn()) return !1;
  return !0;
}

async function Q() {
  if (!await Tjn()) return null;
  if (Spe()) return lut;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}

async function YSo(e) {
  return await z_(s), await iTr(e), Q();
}

function Ose(e, n) {
  t(`${e} untrusted_device read as ${n.kind}${"subReason" in n ? ` (sub_reason ${kt(n.subReason, 64)})` : ""}; not re-enrolling`);
}

function VN() {
  v.of(B().host).storedTokenRead = void 0;
}

async function ePe(e, n) {
  if (!r9()) return;
  VN();
  let r = await nS();
  if (!r || r === e) {
    let o = await yGs(r), A = v.of(B().host);
    if (o !== "none") t(o === "recent" ? "[trusted-device] The refused device token is one an earlier refusal enrolled; not enrolling again" : "[trusted-device] The stored time of the last enrollment after a refusal is unusable; not enrolling until a sign-in clears it"); else if (Date.now() - A.lastEnrollAttemptAtMs >= W) A.lastEnrollAttemptAtMs = Date.now(), 
    await Dtn({
      trigger: "server_denied",
      credentials: n
    }), r = await nS();
  }
  if (!r || r === e) return;
  return t("[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry"), 
  r;
}

async function yGs(e) {
  if (!e) return "none";
  let n = await Xn().readAsync(), r = n?.trustedDeviceEnrolledAfterRefusalAtMs;
  if (n?.trustedDeviceToken !== e || r === void 0) return "none";
  let o = Date.now();
  if (!Number.isSafeInteger(r) || r <= 0 || r > o) return "unusable";
  return o - r < j ? "recent" : "none";
}

async function pHt(e, n, r) {
  let o = await ePe(e, r);
  if (!o) return;
  return n(o);
}

function pwe(e) {
  if (e?.kind === "signature_wanted") return d3e;
  if (Spe()) return lut;
  return "this device is not enrolled as a trusted device; run /login to enroll";
}

async function iTr(e) {
  if (!cwe()) return;
  if (VN(), !await Tjn()) return;
  if (Spe()) return;
  t("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token"), 
  await Dtn({
    lazy: !0,
    credentials: e
  });
}

async function j6s(e) {
  if (!r9()) return Rp("trusted_devices_off");
  if (VN(), await Htn()) return wh(void 0);
  if (Spe()) return Rp("enrollment_paused");
  return t("[trusted-device] Not enrolled, enrolling for a device-bound session"), 
  await Dtn({
    trigger: "device_bind",
    credentials: e
  }), await nS() ? wh(void 0) : Rp("not_given");
}

function XSo() {
  let {isClaudeAISubscriber: e} = import.meta.require("./chunk-8rkfm3cn.js");
  if (!Yn() || !e()) {
    Ajn();
    return;
  }
  if (Spe()) {
    Ajn();
    return;
  }
  VN(), Xn().mutate(n => n.trustedDeviceToken || n.trustedDeviceEnrolledAfterRefusalAtMs !== void 0 ? {
    ...n,
    trustedDeviceToken: void 0,
    trustedDeviceEnrolledAfterRefusalAtMs: void 0
  } : n).catch(() => {});
}

async function Ajn() {
  let e = Xn();
  if ((await e.readAsync().catch(() => null))?.trustedDeviceEnrolledAfterRefusalAtMs === void 0) return;
  await e.mutate(r => r.trustedDeviceEnrolledAfterRefusalAtMs === void 0 ? r : {
    ...r,
    trustedDeviceEnrolledAfterRefusalAtMs: void 0
  }).catch(() => {});
}

function _Gs() {
  return x(k(s, !1));
}

async function W6s() {
  if (a.CLAUDE_CODE_REMOTE === !0) return "no_cloud_container";
  if (!w()) return "no";
  return await We((async () => {
    let n = await z_(s);
    if (!n) return nxr(s) ? "no_gate_off" : "no";
    await b().waitForPolicyLimitsToLoad();
    let r = x(n), o = E();
    return r === "no" && w() && !o.isPolicyEnforced(u) && (!o.isPolicyLimitsEligible() || o.isSessionVerdictFromServerFetch() && !o.isSessionVerdictDisowned()) ? "no_not_required" : r;
  })(), X).catch(() => {}) ?? _Gs();
}

var X = 5e3;

function x(e) {
  if (!e || !w() || !E().isPolicyEnforced(u)) return "no";
  return Spe() ? "paused" : "enrolls";
}

function w() {
  let {isClaudeAISubscriber: e} = import.meta.require("./chunk-8rkfm3cn.js");
  return !(a.CLAUDE_CODE_REMOTE === !0 || a.DISABLE_LOGIN_COMMAND || !Yn() || !e() || process.env.CLAUDE_TRUSTED_DEVICE_TOKEN || Ct());
}

async function Dtn({trigger: e = "proactive", lazy: n = !1, credentials: r}) {
  let {isClaudeAISubscriber: o, isConsumerSubscriber: A, getClaudeAIOAuthTokens: U, checkAndRefreshOAuthTokenIfNeeded: M} = import.meta.require("./chunk-8rkfm3cn.js");
  if (!Yn() || !o()) return;
  if (a.CLAUDE_CODE_REMOTE === !0) {
    t("[trusted-device] In a cloud container, skipping enrollment");
    return;
  }
  let T = v.of(B().host), D = e === "proactive" && !n;
  if (D) T.signInEnrollmentsInFlight++;
  try {
    if (!await z_(s)) {
      t(`[trusted-device] Gate ${s} is off, skipping enrollment`);
      return;
    }
    if (Spe()) {
      t(`[trusted-device] Proactive enrollment disabled via ${P}, skipping`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      t("[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)");
      return;
    }
    await b().waitForPolicyLimitsToLoad();
    let y = E(), R = y.isPolicyEnforced(u), H = e === "server_denied" || e === "device_bind" && A();
    if (!(R || H && y.isPolicyAllowed(u))) {
      t(`[trusted-device] Org has not enabled ${u}, skipping enrollment`);
      return;
    }
    let p = {
      trigger: c(e),
      org_enforced: R
    };
    if (Ct()) {
      t("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    await M({
      credentials: r
    });
    let L = U()?.accessToken;
    if (!L) {
      t("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    let V = un().BASE_API_URL, f;
    try {
      f = await At.post(`${V}/api/auth/trusted_devices`, {
        display_name: `Claude Code on ${q()} \xb7 ${BOe("linux")}`
      }, {
        headers: {
          "User-Agent": Qo(),
          Authorization: `Bearer ${L}`,
          "Content-Type": "application/json"
        },
        timeout: 1e4,
        validateStatus: i => i < 500
      });
    } catch (i) {
      t(`[trusted-device] Enrollment request failed: ${l(i)}`), m("bridge_trusted_device_enroll", "request_failed", p);
      return;
    }
    if (f.status !== 200 && f.status !== 201) {
      t(`[trusted-device] Enrollment failed ${f.status}: ${_(f.data).slice(0, 200)}`), 
      m("bridge_trusted_device_enroll", "http_error", p);
      return;
    }
    let C = f.data?.device_token;
    if (!C || typeof C !== "string") {
      t("[trusted-device] Enrollment response missing device_token field"), m("bridge_trusted_device_enroll", "missing_token", p);
      return;
    }
    try {
      let i = await Xn().mutate(G => ({
        ...G,
        trustedDeviceToken: C,
        trustedDeviceEnrolledAfterRefusalAtMs: e === "server_denied" ? Date.now() : void 0
      }));
      if (!i.success) {
        t(`[trusted-device] Failed to persist token: ${i.warning ?? "unknown"}`), m("bridge_trusted_device_enroll", "storage_failed", p);
        return;
      }
      VN(), t(`[trusted-device] Enrolled device_id=${f.data.device_id ?? "unknown"}`), 
      g("bridge_trusted_device_enroll", p);
    } catch (i) {
      t(`[trusted-device] Storage write failed: ${l(i)}`), m("bridge_trusted_device_enroll", "storage_failed", p);
      return;
    }
    if (D || T.signInEnrollmentsInFlight > 0) return;
    try {
      if (ve()) {
        if (t(`[trusted-device] ${Mtn}`), process.stderr.isTTY) process.stderr.write(`${Mtn}\n`);
      } else T.automaticEnrollmentNoticePending = !0, T.automaticEnrollmentNoticeRaised.emit();
    } catch (i) {
      d(i);
    }
  } catch (y) {
    t(`[trusted-device] Enrollment error: ${l(y)}`), m("bridge_trusted_device_enroll", "unexpected_error", {
      trigger: c(e)
    });
  } finally {
    if (D) T.signInEnrollmentsInFlight--;
  }
}

export { Mtn, oTr, KSo, F6s, lut, Spe, r9, cwe, qSo, U6s, sTr, B6s, uwe, Htn, nS, Tjn, YSo, Ose, VN, ePe, yGs, pHt, pwe, iTr, j6s, XSo, Ajn, _Gs, W6s, Dtn };
