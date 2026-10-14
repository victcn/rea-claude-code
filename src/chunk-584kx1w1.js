// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x } from "./chunk-b0z4bv3v.js";

import { wKn, mee } from "./chunk-q6wab2jw.js";

import { p } from "./chunk-jkzenvsk.js";

import { fi } from "./chunk-ar8d6cs7.js";

import { _t } from "./chunk-cvcg6n1z.js";

var c = new Set([ "server/discover", "initialize", "notifications/initialized", "ping", "tools/list", "tools/call", "notifications/cancelled", "notifications/roots/list_changed" ]);

function ZA(e) {
  return mee({
    serverName: e.name
  }) ? new x(wKn, "hosted desktop reached past its tools") : void 0;
}

function YCe(e, o) {
  let t = ZA(e);
  if (t === void 0) return;
  let i = o.send.bind(o);
  o.send = async (n, ...s) => {
    if (!("method" in n ? typeof n.method === "string" && c.has(n.method) : !Array.isArray(n) && "id" in n && ("result" in n || "error" in n))) throw t;
    return i(n, ...s);
  };
}

function r(e, o) {
  let t = ZA(e) ?? void 0;
  return t && Promise.reject(t);
}

function e1(e, o, t, i = !1) {
  return r(e, i ? o.name : void 0) ?? import.meta.require("./chunk-89c96hkc.js").mcpClientModule().invokeToolRaw(e.client, o, t);
}

function XCe(e, o, t) {
  return r(e) ?? import.meta.require("./chunk-89c96hkc.js").mcpClientModule().readResourceRaw(e.client, o, t);
}

function Eit(e, o) {
  return r(e) ?? import.meta.require("./chunk-89c96hkc.js").mcpClientModule().listToolsRaw(e.client, o);
}

var l = p(() => _t({}));

function Hio(e, o, t) {
  return r(e) ?? fi(e.client).request(o, l(), {
    ...t,
    cacheMode: "bypass"
  });
}

function wV(e, o, t) {
  import.meta.require("./chunk-89c96hkc.js").mcpClientModule().onMcpNotification(e, o, t);
}

function Dce(e, o) {
  fi(e.client).onclose = o;
}

function ops(e, o) {
  let t = fi(e.client), i = t.onclose;
  t.onclose = () => {
    i?.(), o();
  };
}

function sps(e, o) {
  return r(e) ?? fi(e.client).notification(o);
}

function ips(e, o) {
  fi(e.client)?.transport?.onmessage?.(o);
}

export { ZA, YCe, e1, XCe, Eit, Hio, wV, Dce, ops, sps, ips };
