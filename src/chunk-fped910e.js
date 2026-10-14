// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he, _ht, SNo } from "./chunk-3pqddg8f.js";

import { c, pe } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { a } from "./chunk-j016gcgm.js";

import { eV } from "./chunk-84yp45y8.js";

import { f$t } from "./chunk-fhf0t7vm.js";

function t() {
  let e = SNo(), o = e === void 0 ? f$t() : void 0, [r, s] = e !== void 0 ? [ Math.max(0, Date.now() - e), "session_switch" ] : o !== void 0 ? [ Math.max(0, Date.now() - o), "spawn_stamp" ] : [ he() ? void 0 : Math.round(process.uptime() * 1e3), "process_start" ];
  return {
    msSinceSessionStart: r,
    startAnchor: c(s),
    isRemoteSession: Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)
  };
}

function n(e) {
  let o = _ht();
  if (o.has(e)) return !1;
  return o.add(e), !0;
}

function ySn(e, o) {
  if (e === 0 || !n("tools_added")) return;
  i("tengu_chrome_tools_added", {
    ...t(),
    toolCount: e,
    discoverySource: c(o)
  });
}

function _Sn(e) {
  if (!n("tool_attempted")) return;
  i("tengu_chrome_tool_attempted", {
    ...t(),
    ...e && {
      messageClientPlatform: eV(e)
    }
  });
}

function g5o(e) {
  if (!n("bridge_connected")) return;
  i("tengu_chrome_bridge_connected", {
    ...t(),
    bridgeStatus: pe(e)
  });
}

function h5o() {
  if (!n("extension_connected")) return;
  i("tengu_chrome_extension_connected", t());
}

function y5o(e) {
  i("tengu_chrome_tool_call_disconnected", {
    ...t(),
    tokenAccountMismatch: e
  });
}

export { ySn, _Sn, g5o, h5o, y5o };
