// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ha } from "./chunk-3vw306fv.js";

import { y, F } from "./chunk-cpyd3eya.js";

F();

var kM = 150, No = 250, iBr = 600;

function Nl(e, n, t = kM) {
  let o = e() - n;
  if (o >= 0) return o < t;
  return n <= Date.now();
}

function CWo(e) {
  let n = Ha(), [t, o] = y(() => ({
    key: e,
    at: Date.now()
  }));
  if (t.key !== e) o({
    key: e,
    at: Date.now()
  });
  return function() {
    return Nl(n, t.at);
  };
}

export { kM, No, iBr, Nl, CWo };
