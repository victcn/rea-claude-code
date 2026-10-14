// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { cn } from "./chunk-kawq2919.js";

import { ge } from "./chunk-07cck4g7.js";

import { CHe, Yw } from "./chunk-52h8ta4x.js";

import { U4e } from "./chunk-2kzvcfy0.js";

var o = "\x1b]8;;", p = "\x07";

function qw(e, r, t) {
  let s = r === void 0 ? void 0 : cn(r), n = s === void 0 || v2r(e, s);
  if (!(n && (t?.assumeSupport ?? !1) && process.stdout.isTTY === !0 && (CHe() ?? !0) || (t?.supportsHyperlinks ?? Yw()))) {
    let i = t?.shownUrlStart ?? "";
    if (r !== void 0 && !n) return `${r}${i} (${e})`;
    return `${i}${e}`;
  }
  let u = ((t?.themeName ? U4e(t.themeName) : !1) ? ge.blue : ge.blueBright)(r ?? e);
  return `${o}${e}${p}${u}${o}${p}`;
}

function v2r(e, r) {
  return r === e || e === `http://${r}` || e === `https://${r}`;
}

export { qw, v2r };
