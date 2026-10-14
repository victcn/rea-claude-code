// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { FS } from "./chunk-dq67x9kz.js";

var Zk = "EnterPlanMode";

var Yo = "AskUserQuestion", cSs = 12, uIt = "The user asked for more questions", uSs = `${uIt} before answering; this is a request for another round, not an answer.`;

function Wfo(e) {
  if (typeof e !== "string") return "";
  return e.replace(/[\s\u0085]+/g, " ").trim().replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function C$n(e) {
  if (typeof e === "number" || typeof e === "boolean") return String(e);
  return Wfo(e);
}

var pSs = "Asks the user multiple choice questions to gather information, clarify ambiguity, understand preferences, make decisions or offer them choices.", fSs = {
  markdown: `\nPreview feature:\nUse the optional \`preview\` field on options when presenting concrete artifacts that users need to visually compare:\n- ASCII mockups of UI layouts or components\n- Code snippets showing different implementations\n- Diagram variations\n- Configuration examples\n\nPreview content is rendered as markdown in a monospace box. Multi-line text with newlines is supported. When any option has a preview, the UI switches to a side-by-side layout with a vertical option list on the left and preview on the right. Do not use previews for simple preference questions where labels and descriptions suffice. Note: previews are only supported for single-select questions (not multiSelect).\n`,
  html: `\nPreview feature:\nUse the optional \`preview\` field on options when presenting concrete artifacts that users need to visually compare:\n- HTML mockups of UI layouts or components\n- Formatted code snippets showing different implementations\n- Visual comparisons or diagrams\n\nPreview content must be a self-contained HTML fragment (no <html>/<body> wrapper, no <script> or <style> tags \u2014 use inline style attributes instead). Do not use previews for simple preference questions where labels and descriptions suffice. Note: previews are only supported for single-select questions (not multiSelect).\n`
}, zfo = `Use this tool only when you are blocked on a decision that is genuinely the user's to make: one you cannot resolve from the request, the code, or sensible defaults.\n\nUsage notes:\n- Users will always be able to select "Other" to provide custom text input\n- Use multiSelect: true to allow multiple answers to be selected for a question\n- If you recommend a specific option, make that the first option in the list and add "(Recommended)" at the end of the label\n`, mSs = `${zfo}\nPlan mode note: To switch into plan mode, use ${Zk} (not this tool). Once in plan mode, use this tool to clarify requirements or choose between approaches BEFORE finalizing your plan. Do NOT use this tool to ask "Is my plan ready?", "Should I proceed?", or otherwise reference "the plan" in questions \u2014 the user cannot see the plan until you call ${FS} for approval.\n`, gSs = `\nExtended questions (this host renders them):\n- Put the most important question first.\n- Omit "kind" for an ordinary choice question. Use "kind": "text" for an open-ended question (a text box, no options) and "kind": "number" with "min"/"max" (optionally "step", "defaultValue", "unit") for a quantity. Prefer choices whenever the likely answers can be listed.\n- Set multiSelect: true on choice questions unless the options are mutually exclusive (people answering are often still exploring).\n- Optional "title" is one short line above the questions; optional per-question "description" is one helper line. Option descriptions are optional here too: add one only when the label alone would be ambiguous.\n- Do not add "Other" or "Skip" options: the user can always type their own answer or leave a question unanswered. The user can also ask you for more questions; when the result says so, call this tool again with follow-up questions before doing the task.\n`, hSs = `\nReserve this for decisions where the user's answer changes what you do next \u2014 not for choices with a conventional default or facts you can verify in the codebase yourself. In those cases pick the obvious option, mention it in your response, and proceed.\n`;

export { Zk, Yo, cSs, uIt, uSs, Wfo, C$n, pSs, fSs, zfo, mSs, gSs, hSs };
