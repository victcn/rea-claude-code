// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { oi } from "./chunk-bp2n0w3d.js";

import { w } from "./chunk-9rj1xaxr.js";

import { Px, V, Fo } from "./chunk-jb3h1y0s.js";

import { Ae, P, Zt, F } from "./chunk-cpyd3eya.js";

F();

function z() {
  return oi().get(process.stdout)?.invalidatePrevFrame();
}

function I(e) {
  return e.activeOverlays.size > 0;
}

function K(e) {
  return x(e.activeOverlays);
}

function M(e) {
  return a9n(e.activeOverlays);
}

function j(e) {
  for (const t of e.activeOverlays) {
    if (u.has(t)) {
      return !0;
    }
  }
  return !1;
}

function k(e) {
  for (const t of e.activeOverlays) {
    if (f.has(t)) {
      return !0;
    }
  }
  return !1;
}

var R = new Set([ "autocomplete" ]), E = new Set([ "above-prompt-input", "above-prompt-select" ]), u = new Set([ "history-search" ]), f = new Set([ "elicitation", "elicitation-url" ]), WMe = 2;

function fa(e, t) {
  let S = w(8), r = t === void 0 ? !0 : t, n = Ae(Px)?.setState, O, b;
  if (S[0] !== r || S[1] !== e || S[2] !== n) O = () => {
    if (!r || !n) {
      return;
    }
    return n(c => {
      if (c.activeOverlays.has(e)) {
        return c;
      }
      let y = new Set(c.activeOverlays);
      return y.add(e), {
        ...c,
        activeOverlays: y
      };
    }), () => {
      n(v => {
        if (!v.activeOverlays.has(e)) {
          return v;
        }
        let A = new Set(v.activeOverlays);
        return A.delete(e), {
          ...v,
          activeOverlays: A
        };
      });
    };
  }, b = [ e, r, n ], S[0] = r, S[1] = e, S[2] = n, S[3] = O, S[4] = b; else O = S[3], 
  b = S[4];
  P(O, b);
  let h, m;
  if (S[5] !== r) h = () => {
    if (!r) {
      return;
    }
    return z;
  }, m = [ r ], S[5] = r, S[6] = h, S[7] = m; else h = S[6], m = S[7];
  Zt(h, m);
}

function VUr() {
  return V(I);
}

function x(e) {
  for (let t of e) if (!E.has(t)) return !0;
  return !1;
}

function Vmn() {
  return V(K);
}

function a9n(e) {
  for (let t of e) if (!R.has(t)) return !0;
  return !1;
}

function C6() {
  return V(M);
}

function b_t() {
  return Fo(j) ?? !1;
}

function l9n() {
  return Fo(k) ?? !1;
}

export { WMe, fa, VUr, Vmn, a9n, C6, b_t, l9n };
