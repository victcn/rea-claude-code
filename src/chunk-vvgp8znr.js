// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { as } from "./chunk-r276nwd3.js";

import { Fd } from "./chunk-km6d4a9r.js";

import { TIt } from "./chunk-5sbf9djq.js";

import { sep as i } from "path";

function Pst(t) {
  if (he()) return null;
  let e = `${TIt()}${i}`, n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r;
  }
  return null;
}

function Rds(t) {
  if (t?.file_path?.startsWith(Fd())) return "Reading Plan";
  if (t?.file_path && Pst(t.file_path)) return "Read agent output";
  return "Read";
}

function Loo(t) {
  if (!t?.file_path) return null;
  let e = Pst(t.file_path);
  if (e) return e;
  return as(t.file_path);
}

export { Pst, Rds, Loo };
