// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { o, v, M, T, u } from "./chunk-cvcg6n1z.js";

var e = p(() => u({
  path: o(),
  text: o(),
  chars: v().int().min(0),
  clipped: M().optional()
}));

function i_n() {
  return {
    init_references: u({
      docs: T(e()),
      unavailable: T(u({
        path: o(),
        why: o()
      })).optional()
    }).optional()
  };
}

function xWt() {
  return {
    design_system: u({
      url: o().optional(),
      default: o().optional(),
      title: o().optional(),
      store: M().optional(),
      docs: T(e()).optional(),
      unavailable: o().optional()
    }).optional()
  };
}

var t = p(() => u({
  dir: o(),
  files: T(u({
    path: o(),
    bytes: v()
  })),
  skipped: T(u({
    path: o(),
    reason: o()
  }))
})), a_n = p(() => u({
  type: t().optional(),
  system_url: o().optional(),
  system: t().optional(),
  skill_in_result: M(),
  capabilities_skill: M(),
  repl_tool: M().optional()
}));

export { i_n, xWt, a_n };
