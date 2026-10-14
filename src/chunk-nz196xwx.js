// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q5r } from "./chunk-m0teq4gy.js";

import { t } from "./chunk-kawq2919.js";

import { ha } from "./chunk-h6xggfqh.js";

function y4s(e) {
  let r = ha(), d = r.lastSentPreferredDeviceId, i = r.browserHints !== void 0 && r.browserHints.preferredDeviceId === void 0 && d !== void 0 && e.preferredDeviceId === d;
  r.lastSentPreferredDeviceId = e.preferredDeviceId, r.browserHints = e.preferredDeviceId === void 0 && e.localDeviceIds.length === 0 ? void 0 : i ? {
    ...e,
    preferredDeviceId: void 0
  } : e, t(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0, 8) ?? "none"} local=${e.localDeviceIds.length}${i ? " (re-send; in-session pick stands)" : ""}`);
  let n = r.bridgeBinding;
  if (n && e.preferredDeviceId !== void 0 && e.preferredDeviceId !== d && n.socketClient.getSelectedDeviceId?.() !== e.preferredDeviceId) q5r(n.socketClient);
}

function W2r(e) {
  let r = ha(), d = r.browserHints;
  if (!d || d.preferredDeviceId === void 0 || d.preferredDeviceId === e) return;
  r.browserHints = {
    ...d,
    preferredDeviceId: void 0
  };
}

function z2r(e) {
  return ha().browserHints?.preferredDeviceId ?? e();
}

function G2r() {
  let e = ha().browserHints;
  if (!e) return;
  return new Map(e.localDeviceIds.map(r => [ r, "live" ]));
}

function V2r() {
  return ha().browserHints?.hostPlatform;
}

export { y4s, W2r, z2r, G2r, V2r };
