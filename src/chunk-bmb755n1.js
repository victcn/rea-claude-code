// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { wr } from "./chunk-t26295zc.js";

import { a } from "./chunk-j016gcgm.js";

import { Nln } from "./chunk-5brm0azz.js";

import { _we } from "./chunk-9wtp3skp.js";

function dle() {
  let e = wr();
  if (e.builtinPluginsInitialized) return;
  if (e.builtinPluginsInitialized = !0, _we("cc-plugin-sec-default", () => import.meta.require("./chunk-ndtx0nx7.js")), 
  _we("cc-plugin-agents-md", () => import.meta.require("./chunk-49316cfj.js")), _we("cc-plugin-telemetry", () => import.meta.require("./chunk-d2z744p9.js")), 
  a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    if (_we("cc-plugin-plugin-authoring", () => import.meta.require("./chunk-92vc5t46.js")), 
    _we("cc-plugin-mods-guide", () => import.meta.require("./chunk-171kvqpv.js")), !Nln()) _we("cc-plugin-tips", () => import.meta.require("./chunk-tkv6gy24.js")), 
    _we("cc-plugin-mermaid", () => import.meta.require("./chunk-z1xx0qfv.js"));
  }
  let i = a.CLAUDE_CODE_ENTRYPOINT !== "local-agent" && !Nln();
  if (i) _we("cc-plugin-responsive-mode", () => import.meta.require("./chunk-w24b09sg.js")), 
  _we("cc-plugin-diff", () => import.meta.require("./chunk-4e9gmnbw.js"));
  if (a.CLAUDE_CODE_ENTRYPOINT !== "local-agent") _we("cc-plugin-you-should-know", () => import.meta.require("./chunk-6ep1bcb7.js"));
  if (i) _we("cc-plugin-claude-test", () => import.meta.require("./chunk-9smgk3g3.js"));
}

export { dle };
