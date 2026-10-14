// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { In } from "./chunk-xywp7esx.js";

import { c } from "./chunk-hwdwjvh8.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { Ue } from "./chunk-nvz3jsgg.js";

class f {
  latched=void 0;
  latch(e) {
    this.latched = e;
  }
  reset() {
    this.latched = void 0;
  }
}

var d = Ue(new f, e => e.reset());

function SP() {
  {
    if (d.latched !== void 0) return d.latched;
    let e = a.MCP_SDK_GENERATION, o = e === "v1" || e === "v2" ? e : void 0;
    if (e !== void 0 && o === void 0) t(`MCP_SDK_GENERATION=${e} is invalid; expected 'v1' or 'v2' \u2014 ignoring`, {
      level: "warn"
    });
    let n = o === void 0 ? In("tengu_brindle_causeway", !0) : void 0, r = o ?? (n?.value === !1 ? "v1" : "v2"), u = n === void 0 ? "env" : n.source === "disabled" || n.source === "fallback" ? "default" : "growthbook";
    return d.latch(r), t(`mcp runtime arm: ${r} (source: ${u})`), i("tengu_mcp_sdk_generation", {
      generation: c(r),
      source: c(u)
    }), r;
  }
  return "v1";
}

export { SP };
