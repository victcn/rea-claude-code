// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { k, Ce, ce } from "./chunk-xywp7esx.js";

import { b, pe } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { rg } from "./chunk-jnzpsr0d.js";

import { fe, Rn } from "./chunk-dd98x6x7.js";

import { iW } from "./chunk-8sjcp0zp.js";

function VNr(u, {requireOnboarding: n = !0} = {}) {
  let o = ce();
  if (n && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !k("tengu_maple_pier", !0)) return null;
  let e = fe("userSettings")?.permissions?.defaultMode, t = [ "projectSettings", "localSettings", "flagSettings", "policySettings" ].some(r => fe(r)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && iW(u)) return e;
  return null;
}

function KNr(u, n, o) {
  if (ce().hasSeenAutoDefaultNudge) return;
  let e = rg(n.current_mode);
  if (u === "shown") {
    i("tengu_auto_default_nudge_shown", {
      current_mode: pe(e),
      surface: b("ide")
    });
    return;
  }
  let t = n.choice === "accept" ? "accept" : "decline";
  if (t === "accept") Rn("userSettings", {
    permissions: {
      defaultMode: "auto"
    }
  }, void 0, o);
  Ce(r => r.hasSeenAutoDefaultNudge ? r : {
    ...r,
    hasSeenAutoDefaultNudge: !0
  }, o), i("tengu_auto_default_nudge_resolved", {
    choice: b(t),
    outcome: t === "accept" ? b("switched") : b("declined"),
    current_mode: pe(e),
    surface: b("ide")
  });
}

export { VNr, KNr };
