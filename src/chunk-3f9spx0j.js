// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mv, gae } from "./chunk-5wbhf1bk.js";

var n = /(?![\u200C\u200D])[\p{Cf}\u2028\u2029]/gu, o = /[\u001b\u0080-\u009f]/g, c = 8;

function bD(u) {
  let e = u.replace(o, "").replace(gae, "").replace(/[\v\f\r]/g, "");
  for (let r = 0; r < c; r++) {
    let t = Mv(e.replace(n, ""));
    if (t === e) return e;
    e = t;
  }
  return e.replace(/[\ud800-\udfff]/g, "").replace(n, "");
}

export { bD };
