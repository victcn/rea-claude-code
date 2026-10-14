// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xvt } from "./chunk-ce64fmea.js";

import { nP } from "./chunk-84yp45y8.js";

import { OYe, Ki } from "./chunk-sqb9meyh.js";

import { Y6, O2, s5r, fvt } from "./chunk-kmph7cxf.js";

function V_t() {
  return xvt() || OYe("auto_mode_off") || fvt() || OYe("unattended_serving_off");
}

function K_t(n) {
  try {
    if (xvt()) return nP() === "settings" ? "settings" : "breaker";
    if (OYe("auto_mode_off")) return "settings";
    let e = OYe("unattended_serving_off");
    if (!fvt(n) && !e) return "none";
    if (O2() || e) return "consent_forced_off";
    let t = Y6();
    if (t === "declined") return "consent_declined";
    return t === "accepted" || s5r() ? "consent_unknown" : "consent_unset";
  } catch {
    return "consent_unknown";
  }
}

function y1r(n) {
  let e = K_t();
  if (e === "none") return;
  return {
    key: `served-auto-off-${e === "consent_unset" || e === "consent_declined" ? "consent" : e}`,
    text: Ki.auto_off_notice(n, Ki[`auto_off.reason.${e}`])
  };
}

export { V_t, K_t, y1r };
