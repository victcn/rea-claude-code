// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ts, hzn, Nwe, It } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { ba } from "./chunk-cjt10y7b.js";

import { bxt, ek, CV, hY, Kce, Cbe, kXt, _ms, rYe, dRe, Sxt, wms } from "./chunk-sqb9meyh.js";

var C = {
  announcement: void 0,
  advisorModel: void 0,
  advisorDeferred: !1,
  advisorActive: !1
};

function p6o(e, o, {querySource: i, resumeActive: u, configuredRuntimeModel: a, runtimeOptionsModel: f, carrier: n, toolChangesRide: g}) {
  try {
    let r = typeof g === "function" ? g : () => g, b = ts(i), v = o.getAdvisorSetting(), l = b === "main" ? a : f, m = r(f), c = Sxt(e);
    if (u || b === "auxiliary") {
      let p = n?.advisorHeld ?? ewn(c) ?? _(v, l, a, r(l)), h = p.model === void 0 && m && !p.refused ? {
        model: A(v, l, a),
        viaToolChange: !0
      } : p;
      return H(S(h, m), c, l, a);
    }
    let s = n?.advisorHeld;
    if (s === void 0) {
      if (s = ewn(c) ?? _(v, l, a, r(l)), n !== void 0) n.advisorHeld = s;
    } else if (s.model === void 0 && m && !s.refused) {
      let p = A(v, l, a);
      if (p !== void 0) {
        if (s = {
          model: p,
          viaToolChange: !0
        }, n !== void 0) n.advisorHeld = s;
      }
    }
    let F = S(s, m), q = s.viaToolChange && !m && s.inFallback !== !0, y = x(e, v, l, a, F, q), N = s.model === void 0 || c !== void 0 || T(s.model, l, a), B = m ? !1 : s.inFallback === !0 || N;
    if (n !== void 0 && s.viaToolChange && s.inFallback === !0 !== B) {
      let {inFallback: p, ...h} = s;
      n.advisorHeld = B ? {
        ...h,
        inFallback: !0
      } : h;
    }
    let O = y === void 0 ? c : y.available ? {
      available: !0,
      model: y.model,
      toolChange: y.toolChange !== void 0,
      byBase: !1
    } : {
      available: !1,
      model: y.model,
      toolChange: y.toolChange !== void 0,
      byBase: y.byBase === !0
    };
    return {
      ...H(F, O, l, a),
      announcement: y
    };
  } catch (r) {
    return d(r), C;
  }
}

function w(e, o, i) {
  return {
    announcement: void 0,
    advisorModel: e,
    advisorDeferred: e !== void 0 && o,
    advisorActive: e !== void 0 && i
  };
}

function H(e, o, i, u) {
  if (e.model === void 0 || !T(e.model, i, u)) return C;
  if (e.viaToolChange) return w(e.model, !0, o?.available === !0);
  if (e.standby && o === void 0) return C;
  if (o !== void 0 && !o.available && o.toolChange && !o.byBase) return C;
  return w(e.model, !1, !0);
}

function S(e, o) {
  return e.viaToolChange && !o ? {
    ...e,
    viaToolChange: !1
  } : e;
}

function ewn(e) {
  if (e === void 0) return;
  return {
    model: e.model,
    viaToolChange: e.toolChange
  };
}

function _(e, o, i, u) {
  let a = A(e, o, i);
  if (a !== void 0 || !u || e) return {
    model: a,
    viaToolChange: u
  };
  let f = P(o, i);
  return f === void 0 ? {
    model: void 0,
    viaToolChange: !0
  } : {
    model: f,
    viaToolChange: !0,
    standby: !0
  };
}

function P(e, o) {
  if (!ba() || !ek() || !CV(e)) return;
  let i = hY(), u = [ ...i.filter(a => !k(a)), ...i.filter(a => k(a)) ];
  for (let a of u) {
    let f = A(a, e, o);
    if (f === void 0 || !_ms(e, f)) continue;
    if (hzn(f)) return f;
    t(`[AdvisorTool] No standby advisor entry - this org is not known to serve ${f}`);
    return;
  }
  return;
}

function k(e) {
  return Nwe(It(e));
}

function x(e, o, i, u, a, f = !1) {
  let n = Sxt(e), g = a ?? ewn(n) ?? {
    model: A(o, i, u),
    viaToolChange: !1
  }, r = g.model, b = D(e) === "add";
  if (r === void 0 || !T(r, i, u)) {
    let c = g.viaToolChange || f, s = ek() && Boolean(o);
    if (n?.available !== !0) {
      if (!c || r === void 0 || n === void 0) return;
      if (n.byBase && !s) return {
        type: "advisor_tool",
        available: !1,
        model: r,
        toolChange: "remove"
      };
      if (n.toolChange && !n.byBase && s) return {
        type: "advisor_tool",
        available: !1,
        model: r,
        toolChange: "remove",
        byBase: !0
      };
      return;
    }
    if (r === void 0) return {
      type: "advisor_tool",
      available: !1
    };
    if (!c) return {
      type: "advisor_tool",
      available: !1,
      model: r,
      byBase: !0
    };
    return s ? {
      type: "advisor_tool",
      available: !1,
      model: r,
      toolChange: "remove",
      byBase: !0
    } : {
      type: "advisor_tool",
      available: !1,
      model: r,
      toolChange: "remove"
    };
  }
  let v = wms(e);
  if (g.viaToolChange) {
    if (dRe(o, i) === void 0) return b || n?.available === !0 ? {
      type: "advisor_tool",
      available: !1,
      model: r,
      toolChange: "remove"
    } : void 0;
    if (b && n?.available !== !1) return v ? void 0 : {
      type: "advisor_tool",
      available: !0,
      model: r,
      toolChange: "add"
    };
    return v ? {
      type: "advisor_tool",
      available: !0,
      model: r,
      abbreviated: !0,
      toolChange: "add"
    } : {
      type: "advisor_tool",
      available: !0,
      model: r,
      toolChange: "add"
    };
  }
  let l = {
    type: "advisor_tool",
    available: !0,
    model: r
  }, m = {
    ...l,
    abbreviated: !0
  };
  if (f) {
    if (dRe(o, i) === void 0) return n?.available === !0 || n !== void 0 && n.byBase || n === void 0 && g.standby !== !0 ? {
      type: "advisor_tool",
      available: !1,
      model: r,
      toolChange: "remove"
    } : void 0;
    if (n?.available === !0) return v ? void 0 : l;
    return v ? m : l;
  }
  if (n === void 0) return g.standby ? void 0 : l;
  if (n.available) return v ? void 0 : l;
  if (n.toolChange && !n.byBase) return;
  return v ? m : l;
}

function D(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let i = e[o];
    if (i.type === "attachment" && i.attachment.type === "advisor_tool" && i.attachment.toolChange !== void 0) return i.attachment.toolChange;
  }
  return;
}

function T(e, o, i) {
  return bxt() && Kce(e) && CV(o) && (rYe(o, i) ? Cbe(o, e) : kXt(o, e));
}

function A(e, o, i) {
  let u = dRe(e, o);
  return u !== void 0 && (rYe(o, i) || kXt(o, u)) ? u : void 0;
}

export { p6o, ewn };
