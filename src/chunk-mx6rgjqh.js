// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { d } from "./chunk-6ah1819r.js";

import { ht } from "./chunk-s2t7g8m9.js";

import { Kn } from "./chunk-gmn1ce75.js";

var e = "claudecode/editResult", l = "1";

function j0r(o, t) {
  return o === ht && Kn(t) && t[e] === l;
}

async function W0r(o, t) {
  if (o.isError === !0 || t.subagentFrameResult === void 0) return o;
  try {
    if (await (t.subagentFrameResultHolds?.()) === !1) return o;
  } catch (r) {
    return d(r), o;
  }
  return {
    ...o,
    _meta: {
      ...o._meta,
      [e]: t.subagentFrameResult
    }
  };
}

export { j0r, W0r };
