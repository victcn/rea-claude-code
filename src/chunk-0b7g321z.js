// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ee } from "./chunk-kq1bg4dg.js";

import { Hn } from "./chunk-f1zpf9me.js";

import { Ss } from "./chunk-xywp7esx.js";

import { wt, HN, vd, TH, Km, DN } from "./chunk-hk8p0fqv.js";

import { jb, N7o } from "./chunk-exeqjnzg.js";

import { DM } from "./chunk-69rr80fg.js";

import { kg, Qb, Gdt, dh, de } from "./chunk-5ydr99q3.js";

import { iTs, Ew, dK, cMt, Y8, VT, uv, Nxe, x0, rpe, lC } from "./chunk-bdevabaf.js";

import { SB, V6, Y$, tvt, jJ, Lle } from "./chunk-rvrh1zgk.js";

import { QC, rnr, Ene, Xwt, snr } from "./chunk-g7amzwj1.js";

import { cr } from "./chunk-2kgjyw8x.js";

function PTe() {
  return ee().frozenMultiFile ?? DM();
}

function ND(t) {
  return VT() && dh(t);
}

function M2e() {
  return {
    behavior: "deny",
    message: "Reading a local file from outside this session's connected folders, or through a link, needs the approval card, and no one can answer it in this Cowork session. Use a plain file inside the connected folders; do not retry this file in this session.",
    decisionReason: {
      type: "safetyCheck",
      reason: "A local file that may sit outside the working folders requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  };
}

function SVt(t, e = "file_path") {
  return {
    behavior: "deny",
    message: `cannot read ${e} (${t}) \u2014 the file could not be examined, and no one can answer the approval card in this Cowork session. Check that the file exists as a plain file inside the connected folders, then retry with that path.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "A local file that could not be examined requires a live human consent surface in a Cowork-frame session",
      classifierApprovable: !1
    }
  };
}

function ITe(t, e, n) {
  if ($J(t, e.slug) || tvt(wt(e.slug), n)) return !0;
  if (!(rnr && de(t).mode === "plan")) {
    let o = wt(e.slug);
    if (x0(o)) return cMt("foreign_read", e.slug) || Y8(Gdt(t), "artifactAssetReadHumanConsentSlugs", e.slug);
    return n || TH(o) && Xwt(e) === !1 || (Nxe(n, e) ? cMt("foreign_read", e.slug) : dK("foreign_read", e.slug));
  }
  return Y8(Gdt(t), de(t).mode === "plan" || Nxe(n, e) ? "artifactAssetReadHumanConsentSlugs" : "artifactAssetReadConsentSlugs", e.slug);
}

function vne(t, e, n, s = "copy") {
  let o = wt(e.slug);
  if (s === "copy" && lC(o)) return snr(t, e.slug);
  let i = vd(o);
  return i && (!SB(o) || Y$(o)) && !(n === "files" && V6(o)) || ITe(t, e, i);
}

function $J(t, e) {
  return g(de(t).mode, e);
}

function g(t, e) {
  return t !== "plan" && f(e);
}

function f(t) {
  let e = wt(t);
  return TH(e) && !x0(e) && e?.lastProbeIssuedAt !== void 0 && !HN(e.lastProbeIssuedAt) && N7o(t);
}

function H2e(t, e) {
  return Ztr(de(t).mode, e);
}

function Ztr(t, e) {
  return t !== "plan" && fEn(e);
}

function fEn(t) {
  return p(t) && f(t);
}

function p(t) {
  let e = wt(t);
  return e !== void 0 && e.probeFailed !== !0 && e.mode === "org";
}

function m(t, e) {
  let n = wt(e);
  return de(t).mode !== "plan" && n?.probeFailed === !0 && n.probeGone === !0 && n.lastProbeIssuedAt !== void 0 && !HN(n.lastProbeIssuedAt) && jb(e) === "first_party_type";
}

function FJ(t, e, n = !1) {
  let s = QC("read", t, e);
  return (n ? H2e(e, t.slug) : $J(e, t.slug) || m(e, t.slug)) ? {
    ask: !1,
    foreignRead: !0,
    attested: !0
  } : Ew(s);
}

function mEn(t, e) {
  let n = wt(t.slug), s = lC(n) ? Ew({
    ...QC("read", t, e),
    owned: !1,
    outsideOrg: !0
  }) : FJ(t, e);
  return s.ask && s.about === "outside_org" ? {
    ...s,
    answeredBy: iTs,
    informedOnly: !0
  } : s;
}

function _Yr(t, e) {
  if (Qb(t) || ND(t)) return () => "none";
  let n = uv(e) || rpe(e.slug);
  if (!kg(t)) return a => n && !a ? "none" : "save";
  let s = de(t), o = s.mode === "auto", i = s.shouldAvoidPermissionPrompts === !0;
  return a => o && !(n && !a) ? "save" : i ? "none" : "ask";
}

function vYs(t, e, n) {
  if (!(Km(e.slug) && !Ss(t.agentContext))) return jJ("webfetch", t, e.slug, !1), 
  null;
  let o = n(), i = Hn(e);
  return ({forcedBy: a, personOnly: u}) => {
    let r = a ?? o;
    jJ("webfetch", t, e.slug, !0, r !== null);
    let l = `${u?.lead ?? `Claude wants to fetch the artifact at ${i}`} \u2014 prompted by the new-comments notification; its content enters this conversation`;
    if (r === null) {
      let c = Ene(t, "Nothing was fetched", l);
      if (c !== null) return c;
    }
    let d = r === null ? l : `${l} \u2014 your ${r.ruleValue.toolName} ask rule covers ${r.ruleValue.toolName !== cr && r.ruleValue.ruleContent?.startsWith("url:") ? "this url" : "artifact reads"}`;
    return {
      behavior: "ask",
      message: d,
      decisionReason: {
        type: "safetyCheck",
        reason: d,
        classifierApprovable: r === null && u === void 0
      },
      ...r !== null && {
        matchedAskRule: r
      },
      suppressAlwaysAllowRule: !0,
      localDisplayOnly: !0
    };
  };
}

function EYs(t, e) {
  if (Lle("webfetch", t, e.slug, !1) && !Ss(t.agentContext)) DN(e.slug);
}

export { PTe, ND, M2e, SVt, ITe, vne, $J, H2e, Ztr, fEn, FJ, mEn, _Yr, vYs, EYs };
