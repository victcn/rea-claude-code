// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { P9 } from "./chunk-xywp7esx.js";

import { kd } from "./chunk-8yperama.js";

var d = new K(() => ({
  degraded: !1
}));

function t() {
  return d.of(B().host);
}

function Kne(n, r) {
  if (n !== kd) return;
  let e = t();
  if (r === void 0) {
    e.degraded = !1;
    return;
  }
  let o = P9(r);
  if (o === "downstream_unreachable") e.degraded = !0; else if (o === "downstream_error") e.degraded = !1;
}

function zZo() {
  return t().degraded;
}

export { Kne, zZo };
