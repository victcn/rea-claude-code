// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { je, Rt } from "./chunk-s2t7g8m9.js";

var r = new Set([ je, Rt ]);

function Dge(e) {
  return r.has(e);
}

function Zzo(e, n) {
  return Dge(e) ? e : n;
}

function Kze(e) {
  return e === Rt ? "Select-Object -First, Select-Object -Last or Select-String" : "head, tail or grep";
}

function DI(e) {
  return e.isMcp !== !0 && Dge(e.name);
}

export { Dge, Zzo, Kze, DI };
