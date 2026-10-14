// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ree } from "./chunk-g6nh65r0.js";

import { mPo, MIr, HIr, gPo } from "./chunk-q6wab2jw.js";

var t = {
  marks: [ "claude", "anthropic", "anthropics" ],
  builtinLead: "cc-plugin",
  products: [ "claude-code", "claude-mods" ]
}, d = [ ...t.marks, t.builtinLead ], c = [ ...t.marks, ...t.products ], E = e => new Set(e.map(s => HIr(s).join(""))), l = E(d), p = E(c), _ = Math.max(...[ ...l, ...p ].map(e => e.length)), R = e => new Intl.ListFormat("en", {
  type: "disjunction"
}).format(e.map(s => `"${s}"`)), g = R(d.map(e => `${e}-`)), m = `A third party's plugin name cannot start with ${g}, be ${R(c)}, or put "official" beside "claude" or "anthropic".`, a = "Name it for what it does.", c4o = "If this is one of Anthropic's own plugins, validate the marketplace that lists it.";

function RGe(e) {
  let s = MIr.test(e), n = (s ? ree(e) : e).toLowerCase(), r = s ? `"${e}" (read as "${n}")` : `"${e}"`, i = HIr(n);
  if ([ ...gPo(n, _) ].some(({joined: o, isWhole: u}) => (u ? p : l).has(o)) || mPo.test(n) || mPo.test(i.join(""))) return {
    severity: "error",
    message: `Plugin name ${r} is reserved: it passes as one of Anthropic's own. ${m} ` + a
  };
  return t.marks.some(o => i.includes(o)) ? {
    severity: "warning",
    message: `Plugin name ${r} reads as one of Anthropic's own. ` + a
  } : void 0;
}

export { c4o, RGe };
