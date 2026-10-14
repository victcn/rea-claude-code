// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { an, n } from "./chunk-3vw306fv.js";

import { ebe, IMn, JE } from "./chunk-bp2n0w3d.js";

import { G } from "./chunk-j706jx8h.js";

import { e } from "./chunk-xx3xgkvz.js";

import { ae, P, R, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

var g = 2e3, x = 2e3;

function jae(i) {
  let o = an(), [u, r] = y(null), t = R(null), c = R(null), l = R(null), a = R(0), s = R(!0), p = ae(() => {
    a.current += 1, l.current?.(), l.current = null, c.current = null, t.current?.(), 
    t.current = null, r(null);
  }, []);
  P(() => {
    if (p(), i !== null) IMn();
  }, [ i, p ]), P(() => (s.current = !0, () => {
    s.current = !1, l.current?.(), l.current = null, c.current = null, t.current?.(), 
    t.current = null;
  }), []);
  let b = ae(d => {
    if (c.current === d) return;
    c.current = d, l.current?.(), l.current = o.setTimeout(() => {
      l.current = null, c.current = null;
    }, g);
    let f = ebe(), h = a.current;
    JE(d).then(C => {
      if (!s.current || h !== a.current) return;
      if (C) process.stdout.write(C);
      if (t.current?.(), t.current = null, r(f), f === "native") t.current = o.setTimeout(() => {
        t.current = null, r(null);
      }, x);
    });
  }, [ o ]);
  return {
    copiedVia: u,
    copy: b,
    reset: p
  };
}

function v6(i) {
  let u = w(2), {via: o} = i;
  if (o === "native") {
    let r;
    if (u[0] === S) r = e(n, {
      color: "success",
      children: "(Copied!)"
    }), u[0] = r; else r = u[0];
    return r;
  }
  if (o === null) {
    let r;
    if (u[1] === S) r = e(n, {
      dimColor: !0,
      children: e(G, {
        chord: "c",
        action: "copy",
        parens: !0
      })
    }), u[1] = r; else r = u[1];
    return r;
  }
  return null;
}

function E6(i) {
  let u = w(2), {via: o} = i;
  if (o === "tmux-buffer") {
    let r;
    if (u[0] === S) r = e(n, {
      dimColor: !0,
      children: "(Copied to tmux buffer \xb7 select the URL manually if paste fails)"
    }), u[0] = r; else r = u[0];
    return r;
  }
  if (o === "osc52") {
    let r;
    if (u[1] === S) r = e(n, {
      dimColor: !0,
      children: "(Sent via OSC 52 \xb7 select the URL manually if paste fails)"
    }), u[1] = r; else r = u[1];
    return r;
  }
  return null;
}

export { jae, v6, E6 };
