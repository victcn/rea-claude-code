// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { Zd, XUn } from "./chunk-9tdwgnpn.js";

import { tq } from "./chunk-3rbd48rp.js";

import { o, oe, u, A } from "./chunk-cvcg6n1z.js";

var mhe = "anthropic/devicePassthrough", W1s = [ "get_device_info", "device_bash", "list_devices", "sync_files" ], r = "Claude_Browser__", n = 128, eer = 1, _ = p(() => u({
  v: A(eer),
  tool: o().min(1).max(n),
  target: oe().optional()
}));

function t2t(t) {
  let e = _().safeParse(t);
  if (!e.success) return;
  let s = XUn(e.data.target);
  return s === void 0 ? void 0 : {
    v: e.data.v,
    tool: Zd(e.data.tool, n),
    target: s
  };
}

var a = W1s.map(tq), c = `${tq(r)}_`;

function i(t) {
  let e = `${tq(t)}_`;
  return a.some(s => e.startsWith(`${s}_`));
}

var E = new Set([ "computer_request_access", "computer_request_full_control", "device_request_folder_access", "device_request_delete_permission" ]), l = "device_bash";

function ter(t) {
  let e = t.lastIndexOf("__"), s = e === -1 ? t : t.slice(e + 2);
  return E.has(s) || t === l || `__${t}`.endsWith("__Claude_Browser__request_access");
}

function KHe(t) {
  return !i(t) && !`${tq(t)}_`.startsWith(c) && !ter(t);
}

export { mhe, W1s, eer, t2t, ter, KHe };
