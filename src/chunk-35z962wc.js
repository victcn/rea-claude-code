// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ne } from "./chunk-m8ez8fhk.js";

var e = Ne("./design-6m4nsdef.md");

var t = Ne("./designHowTo-p8zjfw0e.md");

var s = Ne("./designTwoSteps-g0bev2xr.md");

var a = Ne("./slides-zdpeg77q.md");

var i = Ne("./slidesHowTo-09m4dbj2.md");

var r = Ne("./slidesTwoSteps-1shjmnfb.md");

var x = new Map([ [ "design", e.trim() ], [ "slides", a.trim() ] ]), O = new Map([ [ "design", s.trim() ], [ "slides", r.trim() ] ]), T = "<the new Artifact's url>", _ = '"<the tokens.json path above>"', E = "   // only with a design system", F = " With a design system, the colours, type and spacing are the ones in the files you printed.", A = new Map([ [ "design", {
  text: t.trim(),
  whole: "design",
  parts: "boards"
} ], [ "slides", {
  text: i.trim(),
  whole: "deck",
  parts: "slides"
} ] ]);

export { A as REPL_ROUTE_HOW_TO_BY_TYPE_KEY, E as REPL_ROUTE_HOW_TO_SYSTEM_ROW_END, F as REPL_ROUTE_HOW_TO_SYSTEM_SENTENCE, _ as REPL_ROUTE_HOW_TO_TOKENS_WORDS, T as REPL_ROUTE_HOW_TO_URL_WORDS, x as REPL_ROUTE_SECTION_BY_TYPE_KEY, O as REPL_ROUTE_TWO_STEPS_BY_TYPE_KEY };
