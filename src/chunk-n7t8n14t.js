// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { Jt } from "./chunk-9tdwgnpn.js";

import { Nbn } from "./chunk-38rt52dc.js";

import { gle, f5o } from "./chunk-skq2ejrn.js";

import { o, cI, T, u, $e } from "./chunk-cvcg6n1z.js";

var r = "", s = "", Z7n = "mcp", Dbn = "mcp-display-only";

var c = p(() => u({}).passthrough()), pVr = p(() => $e([ o(), T(u({
  type: o()
}).passthrough()), cI() ]).describe("MCP tool execution result"));

function i(e) {
  if (!Array.isArray(e) || !e.some(a)) return e;
  return e.map(t => a(t) ? {
    ...t,
    source: {
      ...t.source,
      data: ""
    }
  } : t);
}

function m(e) {
  return Array.isArray(e) && e.some(n) ? e.filter(t => !n(t)) : e;
}

function n(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data === "";
}

function a(e) {
  return e?.type === "document" && e.source?.type === "base64" && e.source.data !== "";
}

var OHe = Jt({
  isMcp: !0,
  isOpenWorld() {
    return !1;
  },
  name: "mcp",
  uiTableKey: Z7n,
  backgrounding: "self",
  maxResultSizeChars: 1e5,
  async description() {
    return s;
  },
  async prompt() {
    return r;
  },
  get inputSchema() {
    return c();
  },
  get outputSchema() {
    return pVr();
  },
  create() {
    return {
      async call() {
        return {
          data: ""
        };
      },
      async checkPermissions() {
        return {
          behavior: "passthrough",
          message: "MCPTool requires permission."
        };
      }
    };
  },
  renderToolUseMessage(e, {verbose: t}) {
    return Nbn(e, {
      verbose: t
    });
  },
  userFacingName: () => "mcp",
  stripForCreation: e => f5o(i(e)),
  mapToolResultToToolResultBlockParam(e, t) {
    return {
      tool_use_id: t,
      type: "tool_result",
      content: gle(m(e))
    };
  }
});

export { Z7n, Dbn, pVr, OHe };
