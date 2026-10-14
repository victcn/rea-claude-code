// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var NVt = {};

Nr(NVt, {
  booleanOfInput: () => j2e,
  default: () => NVt,
  isHeldTrue: () => vnr,
  numberInputHint: () => DVt,
  numberOfInput: () => LVt
});

var j2e = n => Le(n) ? !0 : ys(n) ? !1 : void 0;

var vnr = n => n === !0 || n === "true";

function DVt(n) {
  return `It takes a number${n.min !== void 0 || n.max !== void 0 ? ` between ${n.min ?? "-\u221e"} and ${n.max ?? "\u221e"}` : ""}.`;
}

function LVt(n, e) {
  let r = n.trim(), t = Number(r);
  return r !== "" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) ? t : void 0;
}

export { j2e, vnr, DVt, LVt, NVt };
