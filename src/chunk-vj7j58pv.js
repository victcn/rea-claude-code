// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { Db } from "./chunk-p0ag64rt.js";

import { a } from "./chunk-j016gcgm.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Vr, Hr, P, F } from "./chunk-cpyd3eya.js";

F();

var I = new WeakMap;

function U(r) {
  let n = I.get(r);
  if (!n) n = {
    root: r,
    screen: null,
    rendered: !1,
    run: 0,
    keys: 0,
    jobWrites: Promise.resolve()
  }, I.set(r, n);
  return n;
}

function VQe(r, n, t = {}) {
  let o = U(r), d = ++o.run, f = t.marksJobBlocked === !0 && !!a.CLAUDE_JOB_DIR;
  return new Promise((l, i) => {
    let S = !1;
    function k(s) {
      if (S || o.run !== d) return;
      S = !0, i(s);
    }
    function m(s) {
      let p = o.jobWrites.then(s).catch(() => {});
      return o.jobWrites = p, p;
    }
    function A(s) {
      for (let p = s; p < n.length; p++) {
        let y = !1, O = !0, N = !1, v, J = !1, V = () => {
          if (f && !v && !y && !J) v = m(() => import("./chunk-6p8eamwa.js").then(c => c.markStartupDialogBlocked()));
        }, j = () => {
          let c = v;
          if (v = void 0, J = !0, c) m(async () => {
            let _ = await c;
            if (_) {
              let z = await import("./chunk-6p8eamwa.js");
              await z.clearStartupDialogBlocked(_);
            }
          });
        }, M = c => {
          if (y || S || o.run !== d) return;
          if (y = !0, N = c === "stop", j(), !O) R(N ? "done" : A(p + 1));
        }, u;
        try {
          u = n[p](M);
        } catch (c) {
          return k(c), "failed";
        } finally {
          O = !1;
        }
        if (y) {
          if (N) return "done";
          continue;
        }
        if (u instanceof Promise) u = u.catch(c => (k(c), new Promise(() => {}))), u.then(c => {
          if (c !== null && c !== void 0) V();
        }); else if (u === null || u === void 0) {
          y = !0;
          continue;
        } else V();
        return {
          key: ++o.keys,
          dialog: u,
          pass: () => M(),
          tornDown: j,
          replaced: j,
          options: t
        };
      }
      return "done";
    }
    function R(s) {
      if (s === "failed" || o.run !== d) return;
      if (s === "done") {
        b(o, null), l();
        return;
      }
      if (!o.rendered && s.dialog instanceof Promise) {
        o.screen = s, s.dialog.then(p => {
          if (o.screen !== s || o.run !== d) return;
          if (p === null || p === void 0) s.pass(); else R({
            ...s,
            dialog: p
          });
        });
        return;
      }
      b(o, s);
    }
    R(A(0));
  });
}

function CL(r, n, t = {}) {
  let o = U(r);
  o.run++;
  let d = () => {}, f = new Promise(i => {
    d = i;
  }), l = {
    key: ++o.keys,
    dialog: n,
    pass: () => {},
    tornDown: () => {},
    replaced: d,
    options: t
  };
  return b(o, l), {
    update: i => {
      if (o.screen?.key === l.key) b(o, {
        ...l,
        dialog: i
      });
    },
    replaced: f
  };
}

function b(r, n) {
  if (r.screen && r.screen.key !== n?.key) r.screen.replaced();
  if (r.screen = n, !r.rendered && n === null) return;
  r.rendered = !0, r.root.render(e(q, {
    tree: r,
    screen: n
  }));
}

function q(r) {
  let o = w(8), {tree: n, screen: t} = r, d, f;
  if (o[0] !== n) d = () => () => {
    n.rendered = !1, n.screen?.tornDown();
  }, f = [ n ], o[0] = n, o[1] = d, o[2] = f; else d = o[1], f = o[2];
  if (P(d, f), t === null) {
    return null;
  }
  let l;
  if (o[3] !== t) l = e(C, {
    screen: t
  }), o[3] = t, o[4] = l; else l = o[4];
  let i;
  if (o[5] !== t.key || o[6] !== l) i = e(Vr, {
    fallback: null,
    children: l
  }, t.key), o[5] = t.key, o[6] = l, o[7] = i; else i = o[7];
  return i;
}

function C(r) {
  let d = w(12), {screen: n} = r, t = n.dialog instanceof Promise ? Hr(n.dialog) : n.dialog, o = t !== null && t !== void 0, f, l;
  if (d[0] !== n || d[1] !== o) f = () => {
    if (!o) n.pass();
  }, l = [ n, o ], d[0] = n, d[1] = o, d[2] = f, d[3] = l; else f = d[2], l = d[3];
  if (P(f, l), !o) {
    return null;
  }
  let {session: i, onChangeAppState: S, storageV5: k} = n.options;
  if (!i) {
    return t;
  }
  let m;
  if (d[4] !== S || d[5] !== i) m = S && (A => S(A, i)), d[4] = S, d[5] = i, d[6] = m; else m = d[6];
  let R;
  if (d[7] !== t || d[8] !== i || d[9] !== k || d[10] !== m) R = e(Db, {
    session: i,
    storageV5: k,
    onChangeAppState: m,
    children: t
  }), d[7] = t, d[8] = i, d[9] = k, d[10] = m, d[11] = R; else R = d[11];
  return R;
}

export { VQe, CL };
