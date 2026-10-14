// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { qp } from "./chunk-3pqddg8f.js";

import { Dt } from "./chunk-cqgvwwgb.js";

import { sI } from "./chunk-dd98x6x7.js";

import { Ft, k } from "./chunk-xywp7esx.js";

function eKt() {
  return sI("autoContinueAtUsageLimit")[0];
}

function ekn(e) {
  return eKt() ?? e === "absent";
}

var u = "tengu_marble_heron";

function Wnr() {
  let e = n();
  return o(e) ? e : {};
}

function IDe() {
  let e = n();
  return r(o(e) ? e.enabled : e);
}

function tKt() {
  return qp() && !Ft() && !Dt();
}

function jXo() {
  return tKt() && IDe();
}

function tkn() {
  return r(Wnr().autoArm);
}

function n() {
  return k(u, {});
}

function o(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

function r(e) {
  if (e === void 0) return !0;
  if (typeof e === "string") {
    let t = e.trim().toLowerCase();
    return t !== "" && t !== "false" && t !== "0";
  }
  return Boolean(e);
}

export { eKt, ekn, Wnr, IDe, tKt, jXo, tkn };
