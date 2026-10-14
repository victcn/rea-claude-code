// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { k } from "./chunk-xywp7esx.js";

import { Vts, Kts } from "./chunk-84yp45y8.js";

import { rs } from "./chunk-gc7m0yjq.js";

import { Wc } from "./chunk-cvcg6n1z.js";

var ane = rs({
  kind: "mcp_url_elicitation",
  payload: p(() => Wc(e => typeof e === "object" && e !== null && "serverName" in e && "params" in e)),
  result: p(() => Wc(e => typeof e === "object" && e !== null)),
  default: {
    action: "cancel"
  }
});

function Zge() {
  if (Kts()) return;
  let e = !1, t;
  Vts(() => {
    if (!e) e = !0, t = k("tengu_mcp_discovery_cache_enable", null) ?? void 0;
    return t;
  });
}

export { ane, Zge };
