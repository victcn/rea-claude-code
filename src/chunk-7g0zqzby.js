// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { nw } from "./chunk-ddr690nj.js";

import { nt, I$t } from "./chunk-5wbhf1bk.js";

function t(n) {
  return I$t(nt(n, "."), " ");
}

function Opo(n) {
  return /^con(in|out)\$$/i.test(t(n));
}

var e = /[<>"|?*\\\x00-\x1f]/;

function X_s(n) {
  return n.split("/").some(o => e.test(o));
}

function INn(n) {
  return n.split("/").some(o => o.includes(":") || o.endsWith(".") || o.endsWith(" ") || nw(t(o).replace(/ {2,}/g, " ")) || Opo(o));
}

var r = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;

function i(n) {
  return I$t(nt(n, ":"), ". ");
}

function gQt(n) {
  return n.split("/").some(o => r.test(i(o)));
}

export { Opo, X_s, INn, gQt };
