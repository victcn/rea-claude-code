// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, bEe } from "./chunk-3pqddg8f.js";

import { jxe, Tct, tUe, Act, Cct } from "./chunk-kq1bg4dg.js";

import { $N } from "./chunk-gmq0qwep.js";

import { X2, MKe, ETt, zAe, X4, xS } from "./chunk-84yp45y8.js";

import { BFn } from "./chunk-f4r8hspx.js";

import { I5e } from "./chunk-j99efqre.js";

import { X$ } from "./chunk-g8dhxbna.js";

import { ifn } from "./chunk-5vcyaz5h.js";

import { jge } from "./chunk-5t016srx.js";

import { LFe } from "./chunk-34fdkj05.js";

function UUt(e, o, t, i) {
  X$("conversation_reset"), $N("conversation_reset"), xS(X4), Act(), tUe(), jxe(), 
  Cct(), Tct(), I5e();
  let r = q();
  for (let s of LFe(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", s);
  t(), MKe(), e.markConversationRemote?.(), BFn(e.readFileState), X2(e.memorySelector), 
  bEe(), zAe(o), ifn(i, r, o.map(s => s.uuid)), e.applyMessageOp({
    type: "replace-all",
    messages: ETt(o)
  }), jge(!0);
}

export { UUt };
