// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ve } from "./chunk-3pqddg8f.js";

import { Qe, Ke, k, Tl } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

function o() {
  let e = Tl()?.pewter_owl_model;
  if (typeof e === "string" && e !== "") return e;
  return k("tengu_pewter_owl_model", "");
}

function r(e) {
  if (a.CLAUDE_CODE_PEWTER_OWL !== void 0) return a.CLAUDE_CODE_PEWTER_OWL;
  if (ve()) return !1;
  let t = o();
  if (t !== "" && !Ke(Qe()).includes(t)) return !1;
  return k(`tengu_${e}`, !1) || Tl()?.[e] === !0;
}

function $Re() {
  if (a.CLAUDE_CODE_PEWTER_OWL_TOOL !== void 0) return a.CLAUDE_CODE_PEWTER_OWL_TOOL;
  return r("pewter_owl_tool");
}

function juo() {
  return r("pewter_owl_brief");
}

export { $Re, juo };
