// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, ea, pm } from "./chunk-3pqddg8f.js";

import { se } from "./chunk-kawq2919.js";

import { D } from "./chunk-hmqkrrtz.js";

class i {
  directories=[];
  announced=new Set;
  get() {
    return this.directories;
  }
  publish(o) {
    let t = D([ ...o.additionalWorkingDirectories.values() ].map(e => e.path)).sort(), n = this.directories;
    if (n.length === t.length && n.every((e, s) => e === t[s])) return !1;
    return this.directories = t, !0;
  }
  noteAnnounced(o) {
    for (let t of o) this.announced.add(t);
  }
  everAnnounced() {
    return [ ...this.announced ];
  }
  reset() {
    this.directories = [], this.announced.clear();
  }
}

var d = new K(() => new i);

function r() {
  return d.of(B().host);
}

function bJ() {
  let o = r(), t = ea(), n = pm();
  return o.noteAnnounced([ ...t === null ? [] : [ t ], ...n === null ? [] : [ n ], ...c(), ...o.get() ]), 
  o.get();
}

function n5o() {
  return r().everAnnounced();
}

function Ubn(o) {
  return r().publish(o);
}

function c() {
  try {
    return [ se().cwd() ];
  } catch {
    return [];
  }
}

export { bJ, n5o, Ubn };
