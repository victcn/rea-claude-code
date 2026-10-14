// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { n } from "./chunk-3vw306fv.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Zy, dc, _m, F } from "./chunk-cpyd3eya.js";

import { _n } from "./chunk-m8ez8fhk.js";

F();

F();

function y(s) {
  return s !== "";
}

function C(o, a) {
  return r(dc, {
    children: [ a > 0 && e(n, {
      dimColor: !0,
      children: " \xb7 "
    }), o ]
  }, _m(o) ? o.key ?? a : a);
}

function Se(g) {
  let m = w(5), {children: l} = g, i, c;
  if (m[0] !== l) {
    c = _n;
    q: {
      let R = Zy.toArray(l).filter(y);
      if (R.length === 0) {
        c = null;
        break q;
      }
      i = R.map(C);
    }
    m[0] = l, m[1] = i, m[2] = c;
  } else i = m[1], c = m[2];
  if (c !== _n) return c;
  let f;
  if (m[3] !== i) f = e(Q, {
    children: i
  }), m[3] = i, m[4] = f; else f = m[4];
  return f;
}

export { Se };
