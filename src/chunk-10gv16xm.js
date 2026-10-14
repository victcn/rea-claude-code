// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { ON } from "./chunk-1jczapkm.js";

import { RP } from "./chunk-29yvrnf5.js";

import { Bi } from "./chunk-s2t7g8m9.js";

import { o } from "./chunk-cvcg6n1z.js";

var Dr = "_host", nEr = "_host_context", s = new WeakMap;

function mks(e, t) {
  return s.set(e, t), e;
}

function Ixe(e) {
  let t = s.get(e);
  return t === void 0 ? {} : {
    [nEr]: t
  };
}

var Oxe = "device", c = [ "container", "this-machine" ], UFe = /^[a-z0-9](?:[a-z0-9-]{0,38}[a-z0-9])?$/;

function lse(e) {
  return !ak(e) && UFe.test(e);
}

function kz() {
  return a.CLAUDE_CODE_REMOTE ? "container" : "this-machine";
}

function ak(e) {
  return c.some(t => t === e);
}

function aK() {
  return RP() ? {
    [Dr]: o().optional().describe("Optional. Name of an attached machine to run this tool call on; omit it to run in this session's own environment (the default). Use only a name this session listed as attached; the result says where it ran. Choose per call by which machine the command or file path concerns; the attached-machines note says what lives where and which are reachable now.")
  } : {};
}

var d = 40;

function V8(e) {
  let {[Dr]: t, ...n} = e;
  if (typeof t !== "string") return {
    requested: void 0,
    input: e
  };
  let r = t.trim();
  return {
    requested: r === "" || ak(r) ? void 0 : r,
    input: n
  };
}

function rEr(e) {
  let t = V8(e).requested;
  return {
    requestedMachine: t,
    runsOnMachine: RP() && t !== void 0 && lse(t) ? t : void 0
  };
}

function iT(e) {
  return ne(ON(e), d);
}

function C1() {
  return `This call named a machine ("${Dr}") but was not forwarded to it; omit the field to run here.`;
}

function IBn() {
  return `Running tool calls on an attached machine is not enabled in this session; omit "${Dr}" to run here.`;
}

function Au(e) {
  return i(e) !== void 0;
}

function hen(e) {
  let t = i(e);
  return t === void 0 ? void 0 : iT(t) || void 0;
}

function i(e) {
  if (typeof e !== "object" || e === null || !(Dr in e)) return;
  let t = e[Dr];
  if (typeof t !== "string") return;
  let n = t.trim();
  return n === "" || ak(n) ? void 0 : n;
}

function vH(e) {
  return (e.type === "user" || e.type === "assistant") && e.isVirtual === !0;
}

function Xue(e) {
  return e.type === "assistant" && e.isApiErrorMessage === !0 && e.message?.model === Bi;
}

function Tz(e) {
  return e.type === "system" && e.subtype === "local_command";
}

function _b(e) {
  if (e.type === "api_system") return !1;
  return e.type === "progress" || e.type === "system" && !Tz(e) || vH(e) || Xue(e) || e.type === "attachment" && (e.attachment?.type === "thinking_drop" || e.attachment?.type === "credential_org" || e.attachment?.type === "prompt_snapshot" || e.attachment?.type === "prompt_render_point" || e.attachment?.type === "deferred_tools_record");
}

export { Dr, nEr, mks, Ixe, Oxe, UFe, lse, kz, ak, aK, V8, rEr, iT, C1, IBn, Au, hen, vH, Xue, Tz, _b };
