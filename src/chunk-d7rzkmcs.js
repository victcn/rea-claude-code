// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { Je, j } from "./chunk-b0z4bv3v.js";

import { K } from "./chunk-3pqddg8f.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { ui } from "./chunk-xywp7esx.js";

import { d } from "./chunk-6ah1819r.js";

import { ht, qt, Cxr } from "./chunk-s2t7g8m9.js";

import { uJo, o6r, pJo } from "./chunk-9x9qvsnm.js";

import { Uh } from "./chunk-9tdwgnpn.js";

var I = /AndroidManifest\.xml|<manifest xmlns:android=/, v = /com\.android\.(application|library|tools\.build)/, y = /\bimport android\./, E = new RegExp(String.raw`(?:^|[;&|(]\s*)(?:(?:\w+=\S*|sudo|time|env)\s+)*(?:\S*[\\/])?(?:` + [ String.raw`adb(?:\.exe)?\s`, String.raw`emulator(?:\.exe)?\s+(?:-|@)`, String.raw`(?:sdkmanager|avdmanager)\b`, String.raw`gradlew?(?:\.bat)?\s(?:\\\n|[^\n&|;])*\b(?:assemble|install|bundle)\w*(?:Debug|Release)\b`, String.raw`(?:npx\s+)?react-native\s+run-android\b` ].join("|") + ")", "m"), b = [ ".kt", ".kts", ".java" ], D = new Set([ ht, qt ]);

function u() {
  return {
    kotlinOrJavaFileEdited: !1,
    evidence: null
  };
}

function l(e) {
  return e.kotlinOrJavaFileEdited && e.evidence !== null;
}

function f(e, r) {
  for (let t of r) {
    if (l(e)) return;
    let i = t.type === "progress" && (t.data.type === "agent_progress" || t.data.type === "skill_progress") ? t.data.message : t;
    if (i.type === "assistant") {
      if (!Array.isArray(i.message.content)) continue;
      for (let o of i.message.content) {
        if (o.type !== "tool_use") continue;
        let n = o.input;
        if (typeof n !== "object" || n === null) continue;
        if (D.has(o.name)) {
          if ("file_path" in n && typeof n.file_path === "string" && S(n.file_path)) e.kotlinOrJavaFileEdited = !0;
          if (e.evidence === null) e.evidence = "content" in n && p(n.content) || "new_string" in n && p(n.new_string) || null;
        } else if (e.evidence === null && Uh.includes(o.name) && "command" in n && typeof n.command === "string" && E.test(n.command)) e.evidence = "android_command";
      }
    } else if (i.type === "user" && e.evidence === null) {
      if (!Array.isArray(i.message.content)) continue;
      for (let o of i.message.content) {
        if (o.type !== "tool_result") continue;
        let n = T(o.content);
        if (n !== null) {
          e.evidence = n;
          break;
        }
      }
    }
  }
}

function S(e) {
  let r = e.toLowerCase();
  return b.some(t => r.endsWith(t));
}

function p(e) {
  if (typeof e !== "string") return null;
  if (y.test(e)) return "android_import";
  return a(e);
}

function a(e) {
  if (I.test(e)) return "android_manifest";
  return v.test(e) ? "gradle_plugin" : null;
}

function T(e) {
  if (typeof e === "string") return a(e);
  if (!Array.isArray(e)) return null;
  for (let r of e) {
    let t = r.type === "text" ? a(r.text) : null;
    if (t !== null) return t;
  }
  return null;
}

var R = {
  ios_app: () => {
    let e = uJo();
    return {
      absorb: r => pJo(e, r),
      trigger: () => o6r(e)
    };
  },
  android_app: () => {
    let e = u();
    return {
      absorb: r => f(e, r),
      trigger: () => l(e) ? e.evidence : null
    };
  }
};

function A() {
  return new Map(Cxr.map(e => [ e, R[e]() ]));
}

class _ {
  #n=A();
  #e=new Set;
  #t=new Set;
  get intents() {
    return this.#e;
  }
  absorb(e) {
    let r = [];
    for (let [t, i] of this.#n) {
      if (this.#e.has(t)) continue;
      let o = null;
      try {
        i.absorb(e);
        let s = i.trigger();
        if (s !== null) ui({
          type: "system",
          subtype: "dev_intent",
          kind: t,
          trigger: s
        }), this.#e.add(t), o = s;
      } catch (s) {
        if (d(Je(j(s), "dev intent fold")), !this.#t.has(t)) this.#t.add(t), m("dev_intent_detect", "fold_threw");
      }
      let n = o;
      if (n !== null) r.push(t), g("dev_intent_detect", {
        kind: c(t),
        trigger: c(n)
      });
    }
    return r;
  }
  reset() {
    this.#n = A(), this.#e.clear(), this.#t.clear();
  }
}

var Vhe = new K(() => new _);

export { Vhe };
