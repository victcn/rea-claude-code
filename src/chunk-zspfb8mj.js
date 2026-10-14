// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _ye, EXr, kXr, TXr } from "./chunk-69rr80fg.js";

import { $Vr } from "./chunk-0n13shpa.js";

import { a6r } from "./chunk-7h2ztj4d.js";

import { bJo } from "./chunk-crwctjfx.js";

function wZn(t) {
  t(e => e.ultrareviewOverageConfirmed ? e : {
    ...e,
    ultrareviewOverageConfirmed: !0
  });
}

function s(t) {
  return e => t(o => ({
    ...o,
    pendingMemoryUpdates: [ ...o.pendingMemoryUpdates, e ]
  }));
}

function n(t) {
  t(e => e.prResolvedThisSession ? e : {
    ...e,
    prResolvedThisSession: !0
  });
}

function vZn(t) {
  let e = o => t(r => {
    let i = typeof o === "function" ? o(r.toolPermissionContext) : o;
    return r.toolPermissionContext === i ? r : {
      ...r,
      toolPermissionContext: i
    };
  });
  return {
    setToolPermissionContext: e,
    setSessionToolPermissionContext: e
  };
}

function Aet(t, e) {
  return {
    markPrResolvedThisSession: () => n(e),
    isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed,
    markUltrareviewOverageConfirmed: () => wZn(e),
    getAdvisorSetting: () => t().advisorModel,
    getMcp: () => t().mcp,
    getProactivityLevel: () => t().proactivityLevel,
    getWebBrowser: () => t().webBrowser,
    ...vZn(e),
    setWebBrowserSlice: a6r(e),
    setArtifactReadVersion: EXr(e),
    getArtifactReadObservation: _ye(t),
    artifactRegistries: $Vr(t, e),
    setArtifactContractTarget: kXr(e),
    getArtifactContractTarget: TXr(t),
    enqueuePendingMemoryUpdate: s(e),
    agentLifecycle: bJo(t, e)
  };
}

export { wZn, vZn, Aet };
