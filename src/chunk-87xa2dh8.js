// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt } from "./chunk-3pqddg8f.js";

import { aBn } from "./chunk-9tdwgnpn.js";

var d = new lt(() => ({
  byToolUse: new Map
}));

function u5o(e, n) {
  let {byToolUse: o} = d.of(e);
  o.set(n.toolUseId, [ ...o.get(n.toolUseId) ?? [], n ]), aBn(e, n.toolUseId, () => {
    ahe(e, n);
  });
}

function p5o(e, n, o) {
  return d.peek(e)?.byToolUse.get(n)?.find(t => t.pathFormKey === o && (t.state === "uploading" || t.state === "pending"));
}

function USt(e, n, o) {
  if (e === void 0 || n === void 0) return;
  if (!Array.isArray(o)) return;
  return d.peek(e)?.byToolUse.get(n)?.find(t => t.state === "pending" && t.files.length === o.length && t.files.every((i, f) => {
    let s = o[f];
    return typeof s === "object" && s !== null && !Array.isArray(s) && Object.keys(s).length === 2 && "file_id" in s && "name" in s && s.file_id === i.file_id && s.name === i.name;
  }));
}

async function ahe(e, n) {
  if (l(e, n), n.state !== "uploading" && n.state !== "pending") return;
  n.state = "deleted", await n.remove(n.files.map(o => o.file_id));
}

function pSn(e, n) {
  if (l(e, n), n.state !== "deleted") n.state = "sent";
}

function l(e, n) {
  let {byToolUse: o} = d.of(e), t = (o.get(n.toolUseId) ?? []).filter(i => i !== n);
  if (t.length === 0) o.delete(n.toolUseId); else o.set(n.toolUseId, t);
}

var a = "refusedByCcrProxyBeforeForwarding";

function Jq(e) {
  if (typeof e === "object" && e !== null) Object.defineProperty(e, a, {
    value: !0
  });
  return e;
}

function QGe(e) {
  return typeof e === "object" && e !== null && e[a] === !0;
}

var p = "This tool call's approval was for different arguments. Ask the user to approve again \u2014 the previous approval cannot be reused.", u = "Nothing ran: the user's approval was stored without this call's arguments, so it could not be tied to the call.";

function fSn(e) {
  return e.includes(p) || e.includes(u);
}

var r = new lt(() => ({
  byToolUse: new Map
}));

function BSt(e, n, o) {
  r.of(e).byToolUse.set(n, o);
}

function jSt(e, n) {
  r.peek(e)?.byToolUse.delete(n);
}

function mSn(e, n) {
  if (e === void 0 || n === void 0) return;
  return r.peek(e)?.byToolUse.get(n)?.();
}

export { u5o, p5o, USt, ahe, pSn, Jq, QGe, fSn, BSt, jSt, mSn };
