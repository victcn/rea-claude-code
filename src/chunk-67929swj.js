// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { Dvr, VZt, cBn, uBn } from "./chunk-5vba4ath.js";

import { t } from "./chunk-kawq2919.js";

import { GH } from "./chunk-wwq0cyp6.js";

import { mt } from "./chunk-j90se18b.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { o, oe, u } from "./chunk-cvcg6n1z.js";

var _ = "anthropic/toolHostInterface";

function Xcn() {
  return l5n();
}

function l5n() {
  let {version: e} = VZt;
  return {
    version: e,
    min_version: Dvr(GH.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION, e)
  };
}

function cKs() {
  let e = Xcn(), n = GH.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION;
  if (n !== void 0 && e?.min_version !== n) f("mcp_serve_tool_output", "launch_min_version_ignored", {
    launch_min_version: n,
    ...e && {
      daemon_interface_version: e.version,
      daemon_interface_min_version: e.min_version
    }
  });
  return {
    experimental: e === void 0 ? {} : {
      [_]: e
    }
  };
}

var l = 100;

function uKs(e, n) {
  let i = Kn(n) ? n[_] : void 0;
  if (i === void 0) return;
  let r = Xcn();
  if (r === void 0) return;
  let s = typeof i === "string" && i.length <= l ? cBn(mt(i, !1)) : void 0, a = s === void 0 ? "unreadable" : {
    peer_too_old: "session_too_old",
    self_too_old: "daemon_too_old",
    agreed: void 0
  }[uBn(r, s).kind];
  if (a === void 0) return;
  let d = `${e} was not run: ${s === void 0 ? "this server could not read the version of the interface that its caller stated with the call" : a === "session_too_old" ? `this session speaks version ${s.version} of the interface to this server, which works with version ${r.min_version} or later` : `this session works with version ${s.min_version} or later of the interface to this server, which speaks version ${r.version}`}. Retrying won't help: tell the user.`;
  return t(`MCP server: ${d}`, {
    level: "warn"
  }), f("mcp_serve_tool_output", `caller_interface_${a}`, {
    daemon_interface_min_version: r.min_version
  }), {
    isError: !0,
    content: [ {
      type: "text",
      text: d
    } ],
    _meta: {
      [_]: {
        refused: a,
        range: r
      }
    }
  };
}

var O = p(() => u({
  refused: o(),
  range: oe().optional()
}));

export { Xcn, l5n, cKs, uKs };
