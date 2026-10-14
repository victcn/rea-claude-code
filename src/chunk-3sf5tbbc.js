// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _s } from "./chunk-1dj3skht.js";

import { lt } from "./chunk-3pqddg8f.js";

function p() {
  return _s({
    value: "",
    active: !1,
    launchWarning: null,
    linkSuppliedTexts: new Set,
    submittedLinkPrefill: null,
    vimMode: "INSERT",
    stash: null,
    cameBack: !1
  });
}

var a = new lt(() => p());

function LI(n) {
  return a.of(n);
}

function gyn(n) {
  return LI(n).getState().value;
}

function mHe(n, e) {
  n.setState(t => {
    if (t.value === e) return t;
    if (t.value !== "" && e === "") {
      let o = t.value.trim(), r = t.launchWarning?.type === "deep-link" && t.launchWarning.text === void 0 ? new Set(t.linkSuppliedTexts).add(o) : t.linkSuppliedTexts;
      return {
        ...t,
        value: e,
        launchWarning: null,
        linkSuppliedTexts: r,
        submittedLinkPrefill: r.has(o) ? t.value : null,
        cameBack: !1
      };
    }
    return {
      ...t,
      value: e
    };
  });
}

function SWr(n) {
  return LI(n).getState().submittedLinkPrefill;
}

function wWr(n, e, t) {
  LI(n).setState(o => {
    let r = t.trim();
    if (r === "" || o.linkSuppliedTexts.has(r) || !o.linkSuppliedTexts.has(e.trim())) return o;
    return {
      ...o,
      linkSuppliedTexts: new Set(o.linkSuppliedTexts).add(r)
    };
  });
}

function FVo(n, e) {
  mHe(LI(n), e);
}

function vWr(n, e) {
  n.setState(t => t.stash === e ? t : {
    ...t,
    stash: e
  });
}

function hyn(n, e) {
  n.setState(t => t.active === e ? t : {
    ...t,
    active: e
  });
}

function TJn(n, e) {
  hyn(LI(n), e);
}

function UVo(n, e) {
  n.setState(t => {
    let o = e && t.value !== "";
    return t.cameBack === o ? t : {
      ...t,
      cameBack: o
    };
  });
}

function Qjt(n, e) {
  LI(n).setState(t => t.vimMode === e ? t : {
    ...t,
    vimMode: e
  });
}

function AJn(n, e) {
  n.setState(t => {
    let o = e.type === "deep-link" ? e.text?.trim() : void 0, r = o === void 0 || t.linkSuppliedTexts.has(o) ? t.linkSuppliedTexts : new Set(t.linkSuppliedTexts).add(o), i = t.launchWarning?.type === e.type && t.launchWarning.prefillLength === e.prefillLength ? t.launchWarning : e;
    return i === t.launchWarning && r === t.linkSuppliedTexts ? t : {
      ...t,
      launchWarning: i,
      linkSuppliedTexts: r
    };
  });
}

function EWr(n, e) {
  AJn(LI(n), e);
}

export { LI, gyn, mHe, SWr, wWr, FVo, vWr, hyn, TJn, UVo, Qjt, AJn, EWr };
