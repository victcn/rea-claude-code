// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { Je, j } from "./chunk-b0z4bv3v.js";

import { K } from "./chunk-3pqddg8f.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { d } from "./chunk-6ah1819r.js";

import { ui } from "./chunk-xywp7esx.js";

import { Ekn } from "./chunk-9x9qvsnm.js";

var n = [ {
  kind: "ios_app",
  found: t => t.has_ios_app_project
}, {
  kind: "android_app",
  found: t => t.has_android_app_project
} ];

class i {
  #t=0;
  #o=0;
  #e=new Map;
  get started() {
    return this.#t > 0;
  }
  start() {
    this.#t++, this.#r(!1);
  }
  conversationReset() {
    if (this.started) this.#t++, this.#r(!1);
  }
  directoryChanged() {
    if (!this.started) {
      this.start();
      return;
    }
    this.#r(!1);
  }
  turnStarting() {
    let t = this.#t;
    if (!this.started || this.#o === t) return;
    if (this.#o = t, n.some(({kind: e}) => this.#e.get(e) !== t)) this.#r(!0);
  }
  #r(t) {
    let e = this.#t;
    Ekn({
      fresh: t
    }).then(r => {
      if (e !== this.#t || r === null) return;
      if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e) f("dev_intent_detect", "project_unreadable", {
        kind: b("ios_app"),
        trigger: b("project_scan")
      });
      for (let {kind: o, found: s} of n) if (s(r) === !0 && this.#e.get(o) !== e) this.#e.set(o, e), 
      this.#n(o);
    });
  }
  #n(t) {
    try {
      ui({
        type: "system",
        subtype: "dev_intent",
        kind: t,
        trigger: "project_scan"
      }), g("dev_intent_detect", {
        kind: c(t),
        trigger: b("project_scan")
      });
    } catch (e) {
      d(Je(j(e), "project dev intent send failed")), m("dev_intent_detect", "project_send_threw", {
        kind: c(t),
        trigger: b("project_scan")
      });
    }
  }
}

var Dtt = new K(() => new i);

export { Dtt };
