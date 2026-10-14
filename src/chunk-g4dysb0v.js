// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { D } from "./chunk-hmqkrrtz.js";

function VHs(n) {
  switch (n) {
   case "hipaa":
    return "HIPAA";

   case "zdr":
    return "ZDR (Zero Data Retention)";

   default:
    return t(`Unknown compliance_taint '${n}' from policyLimits`, {
      level: "warn"
    }), r;
  }
}

var r = "Organization policy", yft = "Per your organization's policy, some features are limited", H2n = "HIPAA configured", o = new Set([ "hipaa", "zdr" ]);

function Jon(n) {
  return o.has(n) || !1;
}

function Qon(n) {
  let e = D(n), i = e.filter(Jon);
  if (i.length === e.length) return i;
  return t(`Unknown compliance_taint values from policyLimits (${e.length - i.length})`, {
    level: "warn"
  }), [ ...i, r ];
}

var a = new Set([ "hipaa" ]);

function bve(n) {
  return D(n).filter(e => a.has(e));
}

export { VHs, yft, H2n, Jon, Qon, bve };
