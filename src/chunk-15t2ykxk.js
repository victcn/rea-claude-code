// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B } from "./chunk-3pqddg8f.js";

import { P, y, F } from "./chunk-cpyd3eya.js";

F();

var STe = "continue";

function h3o(t, e, n) {
  if (n && e === STe && t === STe + "/") return "/";
  if (e.startsWith("/") && t.length === STe.length + e.length + 1 && t.startsWith(STe + e)) return t.slice(STe.length);
  return t;
}

class o {
  lastResult=null;
  listeners=new Set;
  inFlight=null;
}

var l = new lt(() => new o);

function i() {
  return l.of(B());
}

function $er(t) {
  let e = i();
  e.lastResult = t;
  for (let n of e.listeners) n(t);
}

function y3o() {
  return i().inFlight;
}

function bqr(t) {
  i().inFlight = t;
}

function _3o() {
  $er(null), i().inFlight = null;
}

function b3o() {
  let [t, e] = y(() => i().lastResult);
  return P(() => {
    let n = i();
    return e(n.lastResult), n.listeners.add(e), () => {
      n.listeners.delete(e);
    };
  }, []), t;
}

export { STe, h3o, $er, y3o, bqr, _3o, b3o };
