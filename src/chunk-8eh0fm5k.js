// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ny, YG } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

import { dt } from "./chunk-dd98x6x7.js";

import { Eo } from "./chunk-ncyzf9zz.js";

import { Tt } from "./chunk-9tdwgnpn.js";

import { Tg } from "./chunk-8es5wy4r.js";

import { ho } from "./chunk-9r9vcg3z.js";

import { kH } from "./chunk-yxkwn8vg.js";

import { bK, $z } from "./chunk-g5zagpgq.js";

function BHe(o) {
  let l = Eo();
  return l.workflowAuthoringSkillAvailable ??= e(), l.workflowAuthoringSkillAvailable && !$z(kH) && (o === void 0 || i(o));
}

function e() {
  if (!Tg()) return !1;
  if (bK() || ny()) return !1;
  if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = dt().skillOverrides?.[kH];
  if (o === "off" || o === "user-invocable-only") return !1;
  let l = YG();
  if (l !== void 0 && !l.includes(kH)) return !1;
  return !0;
}

function i(o) {
  return o.some(l => Tt(l, ho));
}

export { BHe };
