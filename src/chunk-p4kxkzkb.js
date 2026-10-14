// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { fu } from "./chunk-1z2heevg.js";

var e = "self_hosted_runner_";

function Mjt(n) {
  return n.startsWith(e);
}

function j2o(n) {
  return fu([ ...n ]).some(Mjt);
}

function r(n) {
  return fu([ n ]).filter(t => !Mjt(t)).join(",");
}

function mjr(n) {
  if (n === void 0) return !1;
  let t = typeof n === "string" ? n : String(n);
  return fu([ t ]).some(Mjt);
}

function W2o(n) {
  let t = n.tools;
  if (t === void 0) return n;
  let o = typeof t === "string" ? t : String(t);
  if (!mjr(o)) return typeof t === "string" ? n : {
    ...n,
    tools: o
  };
  return {
    ...n,
    tools: r(o)
  };
}

export { Mjt, j2o, mjr, W2o };
