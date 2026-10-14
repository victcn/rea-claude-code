// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { FO } from "./chunk-xywp7esx.js";

import { d } from "./chunk-6ah1819r.js";

import { mi, ar } from "./chunk-nnrb0acr.js";

import { Ksn, pmt, dee, XRo, VVn, JRo, QRo, ZRo } from "./chunk-dd98x6x7.js";

import { A1 } from "./chunk-h36n2zxz.js";

import { Pa } from "./chunk-4v78v8fd.js";

import { Yyr, hhs, Ki } from "./chunk-sqb9meyh.js";

import { Pge } from "./chunk-h4k92qk3.js";

import { J3 } from "./chunk-0t44d1pt.js";

import { Fl } from "./chunk-dc6j1jb5.js";

import { N } from "./chunk-hmqkrrtz.js";

var A = "tengu_synchronous_bunny";

function F() {
  return Fl(A, {
    safe: !0
  });
}

var z = "served-settings-changed", B = "served-settings-changed-between", I = "served-settings-taken-as-found", x = "served-settings-record-unavailable", D = {
  project: "projectSettings",
  local: "localSettings",
  legacy: "localSettings"
};

function k(p) {
  try {
    ar(), A1({
      userLayer: "retain"
    });
  } catch (n) {
    d(j(n));
  }
  try {
    FO().reset();
  } catch (n) {
    d(j(n));
  }
  for (let n of p) try {
    Pa.notifyChange(n);
  } catch (i) {
    d(j(i));
  }
}

var W = 2e3, R = new WeakSet;

function H(p, n, i) {
  let s = i, t = n, f = performance.now(), S = () => {
    queueMicrotask(() => k([ "projectSettings", "localSettings" ]));
    return;
  };
  return () => {
    let h = JRo() !== t;
    if (!h && performance.now() - f < W) return s;
    f = performance.now();
    try {
      let a = pmt(), l = Yyr(p, a, dee, "look", Ksn);
      if (l.heldBack.filter(_ => !l.firstSeen.some(y => y.slot === _)).length === 0) return S();
      t = a.key, s = VVn(l.seeds);
    } catch (a) {
      if (d(j(a)), h) return S();
    }
    return s;
  };
}

function xgn(p, n = Pge()) {
  if (!F()) return;
  let i = e => {
    try {
      g("remote_served_settings_freeze", e);
    } catch (r) {
      d(j(r));
    }
  }, s = (e, r) => {
    try {
      p?.(e, r);
    } catch (o) {
      d(j(o));
    }
  }, t, f, S, h = !1, a, l = !0;
  try {
    l = hhs();
  } catch (e) {
    d(j(e));
  }
  try {
    let e = pmt();
    a = e.key, t = Yyr(n, e, dee, "engage", Ksn);
    let r = t.matching;
    S = VVn(t.seeds), f = XRo({
      files: t.seeds,
      onOwnWrite: (o, u) => {
        if (!r.has(o)) return;
        try {
          n.recordFile(o, J3(u), "own_write"), h = !0;
        } catch (O) {
          throw r.delete(o), m("remote_served_settings_freeze", "own_write_not_recorded"), 
          O;
        }
      }
    });
  } catch (e) {
    throw m("remote_served_settings_freeze", "engage_failed"), s(x, Ki["served_settings.record_unavailable"]), 
    e;
  }
  if (i({
    op: b("engaged")
  }), t.firstSeen.length > 0) {
    let e = t.firstSeen.some(r => r.widening);
    if (i({
      op: b("baseline"),
      files_present: N(t.firstSeen, r => r.present),
      prior_serving: l,
      widening_keys: e
    }), l && e) s(I, Ki["served_settings.taken_as_found"]);
  }
  if (t.heldBack.length > 0) i({
    op: b("held_back"),
    files: t.heldBack.length,
    unreadable: t.unreadable,
    hook_waiting: t.hookWaiting
  }), s(B, Ki["served_settings.held_back"]);
  let T = mi(), _ = R.has(T);
  if (f.began && (t.heldBack.length > 0 || _)) k(_ ? [ "projectSettings", "localSettings" ] : new Set(t.heldBack.map(e => D[e])));
  R.add(T);
  let y = e => {
    i({
      op: b("held_change"),
      when: c(e)
    }), s(z, Ki["served_settings.changed_while_attached"]);
  }, E = !1, v = e => {
    if (E) return;
    try {
      if (ZRo() === "changed") E = !0, y(e);
    } catch (r) {
      d(j(r)), E = !0, y(e);
    }
  }, C = mi().onInvalidate(() => v("during_attach")), w = !1;
  return {
    hookWaiting: t.hookWaiting,
    end: () => {
      if (w) return;
      w = !0, C(), v("at_end");
      let e;
      try {
        let o = pmt(), u = Yyr(n, o, dee, "look", Ksn);
        e = u.heldBack.length > 0 ? VVn(u.seeds) : void 0, n.noteServed(o.key, [ ...u.matching ]);
      } catch (o) {
        d(j(o)), e = S;
      }
      let r;
      try {
        r = f.release().last;
      } catch (o) {
        d(j(o)), r = !0;
      }
      if (!r) return;
      try {
        if (e !== void 0) QRo(e, H(n, a, e)); else if (E || h || t.heldBack.length > 0) k([ "projectSettings", "localSettings" ]);
      } catch (o) {
        d(j(o));
      }
    }
  };
}

export { xgn };
