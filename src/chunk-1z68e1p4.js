// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { or } from "./chunk-w0q7jqcp.js";

import { Kg, ro, $K, tsn, uCo } from "./chunk-n3526wzr.js";

import { Yh, vve, Cie } from "./chunk-3kb22va7.js";

import { T9 } from "./chunk-xywp7esx.js";

import { Vlt } from "./chunk-3xtsjx0y.js";

import { _Se } from "./chunk-81n5jbaw.js";

var TSn = "target is this session itself \u2014 there is no one else to send to", u = `address the main conversation as "${Kg}"`;

function VSt(e) {
  let {ownMessagingSocket: s} = import.meta.require("./chunk-q864dhf3.js"), n = s();
  return n !== void 0 && vve(e, n);
}

function UHe(e) {
  let {ownMessagingSocket: s} = import.meta.require("./chunk-q864dhf3.js"), n = s();
  return n !== void 0 && Cie(e, n);
}

function d(e) {
  let {ownMessagingSocket: s} = import.meta.require("./chunk-q864dhf3.js"), n = s(), t = $K(e);
  return n !== void 0 && t !== null && uCo(t.ref, n);
}

function EGt(e, s) {
  return d(e) && !VSt(s);
}

function kGt(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}

function E5o(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}

function ZGe(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}

function une(e) {
  let s = or(e);
  return [ Vlt()?.bridgeSessionId, _Se() ].some(n => typeof n === "string" && or(n) === s);
}

function UI(e) {
  return e.teammateContext !== void 0 || e.agentContext !== void 0 && T9(e.agentContext);
}

function Eet(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`;
}

function KSt(e, s, n = u) {
  let {getRegisteredSessionName: t} = import.meta.require("./chunk-g81kdz65.js"), o = tsn(t()?.name), i = o === null ? "this session" : `this session ("${o}")`;
  return s ? `\n('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)` : `\n('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`;
}

function qSt(e) {
  return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally;
}

function YSt(e) {
  let {getRegisteredSessionName: s, getHeldSessionNames: n} = import.meta.require("./chunk-g81kdz65.js"), {ownMessagingSocket: t} = import.meta.require("./chunk-q864dhf3.js"), o = s(), i = t();
  if (o === void 0 || i === void 0 || Yh(e).scheme !== "other") return "no";
  let r = $K(e);
  if (r !== null) {
    let a = ro(r.name);
    if (!uCo(r.ref, i)) return "no";
    if (a !== ro(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if (ro(e) !== ro(o.name)) return "no";
  let {getSessionNamingState: l} = import.meta.require("./chunk-81n5jgqg.js");
  return o.source === "derived" || (o.source === "user" || o.source === "collision") && l().userTypedName === o.name ? "categorical" : "note";
}

function vJ(e, s, n = u) {
  let {getRegisteredSessionName: t} = import.meta.require("./chunk-g81kdz65.js"), o = tsn(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`;
  }
  return o !== null ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.` : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`;
}

export { TSn, VSt, UHe, EGt, kGt, E5o, ZGe, une, UI, Eet, KSt, qSt, YSt, vJ };
