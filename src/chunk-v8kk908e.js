// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xu } from "./chunk-8yperama.js";

import { t } from "./chunk-kawq2919.js";

import { zs, yan } from "./chunk-vjmbaret.js";

var r = /^[a-zA-Z0-9_-]{1,64}$/;

function thn(i, n = xu) {
  if (!("tools" in i) || i.tools === void 0) return [];
  if (!Array.isArray(i.tools)) return t("[bridge:meta-mcp] meta tools[] is not an array", {
    level: "warn"
  }), null;
  let e = [];
  for (let o of i.tools) {
    if (o === null || typeof o !== "object" || !("name" in o) || typeof o.name !== "string" || !r.test(o.name)) return t("[bridge:meta-mcp] injected tools[] entry is malformed", {
      level: "warn"
    }), null;
    e.push({
      name: o.name,
      ..."permission_policy" in o && typeof o.permission_policy === "string" && {
        permission_policy: o.permission_policy
      }
    });
  }
  let {allow: s} = yan({
    [n]: {
      type: "http",
      tools: e
    }
  }), l = zs(n, "");
  return s.map(o => o.startsWith(l) ? o.slice(l.length) : o);
}

export { thn };
