// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { wG, bn } from "./chunk-1z2heevg.js";

import { fn, a_, Zm, GO, Don, Lon, Yt, o$, VO, Hn, Gon, F8e, hve } from "./chunk-f1zpf9me.js";

import { Ss } from "./chunk-xywp7esx.js";

import { RC } from "./chunk-nnrb0acr.js";

import { Km } from "./chunk-hk8p0fqv.js";

import { dh, de } from "./chunk-5ydr99q3.js";

import { mFe, zo, rd, Fh, v0 } from "./chunk-htg8b98h.js";

import { s1n, uv, rpe } from "./chunk-bdevabaf.js";

import { w4, Lnt } from "./chunk-xshzkngt.js";

import { HQt } from "./chunk-vjpzjemv.js";

import { cr, wBn } from "./chunk-2kgjyw8x.js";

var _ = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;

function P(n) {
  let e = n.match(_);
  if (!e) return n;
  let t = e[1].toLowerCase();
  if (t === "http") t = "https";
  let o = e[2].toLowerCase().replace(/:(?:443|80)$/, "").replace(/\.(?=$|:\d+$)/, "");
  return `${t}://${o}${e[3] ?? ""}`;
}

function Mvt(n, e, t, o = "url") {
  if (n.size === 0) return null;
  let r = F8e(e), l = new Set([ ...Gon(e), r, `${r}/` ]);
  if (typeof t === "string") l.add(o$(t).trim());
  for (let [u, a] of n) {
    let i = u.indexOf(":");
    if (i <= 0) continue;
    let s = u.slice(0, i).trim(), c = u.slice(i + 1).trim();
    if (s !== o || c === "") continue;
    let f = VO(c.replace(/\*$/, ""));
    if (f?.slug === e.slug && f.env === e.env) return a;
    let R = new Set([ c, P(c) ]);
    for (let y of R) for (let A of l) if (wG(y, A)) return a;
  }
  return null;
}

function E(n) {
  let e = Yt(n), t = VO(n);
  return [ ...e !== null ? [ e ] : [], ...t !== null && (e === null || e.slug !== t.slug || e.env !== t.env) ? [ t ] : [] ];
}

function T(n, e) {
  if (n.size === 0 || typeof e !== "object" || e === null) return null;
  let {url: t, type_url: o, from_url: r, files: l} = e, u = typeof l === "object" && l !== null && !Array.isArray(l) ? Object.values(l).map(i => typeof i === "object" && i !== null ? i.artifact : void 0) : [], a = [ [ t, [ "url" ] ], [ o, [ "url", "type_url" ] ], [ r, [ "url", "from_url" ] ], ...u.map(i => [ i, [ "url", "from_url" ] ]) ];
  for (let [i, s] of a) {
    if (typeof i !== "string") continue;
    for (let c of E(i)) for (let f of s) {
      let R = Mvt(n, c, i, f);
      if (R !== null) return R;
    }
  }
  return null;
}

var k = {
  comments: a_,
  data: Zm,
  check: GO
};

function Ott(n, e) {
  let t = e?.action, o = typeof t === "string" && Object.hasOwn(w4, t) ? w4[t] : void 0;
  return o === void 0 ? void 0 : {
    tool: {
      name: k[o],
      ruleContentField: n.ruleContentField
    },
    input: Lnt(o, e)
  };
}

function hkn(n, e, t, o) {
  let r = Ott(e, t);
  if (r === void 0) return null;
  return (o === "deny" ? zo(n, r.tool) : rd(n, r.tool)) ?? Fh(n, r.tool, r.input, o);
}

function _W(n, e, t) {
  let o = Ott({
    name: fn
  }, e)?.tool.name;
  for (let r of [ fn, ...o ? [ o ] : [] ]) {
    let l = T(v0(n, r, t), e);
    if (l !== null) return l;
  }
  return null;
}

function G5r(n, e, t, o) {
  let r = Ott(e, t);
  return Fh(n, e, t, o) ?? (r === void 0 ? null : Fh(n, r.tool, r.input, o));
}

var w = {
  name: cr,
  mcpInfo: void 0,
  ruleContentField: wBn
}, d = {
  name: fn,
  mcpInfo: void 0,
  ruleContentField: Don
};

function m(n, e, t, o) {
  let r = e ?? Lon;
  return {
    webFetch: {
      url: n,
      prompt: r,
      offset: void 0
    },
    artifact: {
      action: "read",
      url: n,
      prompt: r,
      ...t !== void 0 && {
        page: t
      },
      ...o !== void 0 && {
        version: o
      }
    }
  };
}

function arr(n, e, t, o, r) {
  let l = r === void 0 ? null : Fh(n, w, m(t, r.prompt).webFetch, o);
  if (l !== null) return l;
  let u = v0(n, cr, o);
  if (u.size === 0) return null;
  let a = new Set([ new URL(Hn(e)).hostname, new URL(F8e(e)).hostname ]);
  if (typeof t === "string") try {
    a.add(new URL(t).hostname);
  } catch {}
  for (let i of a) {
    let s = HQt(u, `domain:${i}`);
    if (s !== void 0) return s;
  }
  return null;
}

function Gy(n, e, t, o, r = {}) {
  let l = Ott({
    name: fn
  }, {
    action: r.action
  })?.tool.name, u = arr(n, e, t, o, r.read);
  if (u !== null) return u;
  for (let a of [ fn, ...l ? [ l ] : [] ]) {
    let i = v0(n, a, o), s = Mvt(i, e, t) ?? (r.copySource === !0 ? Mvt(i, e, t, "from_url") : null);
    if (s !== null) return s;
  }
  return null;
}

function g(n) {
  if (!mFe.some(t => (n.alwaysDenyRules[t]?.length ?? 0) > 0)) return n;
  let e = {
    ...n.alwaysDenyRules
  };
  for (let t of mFe) delete e[t];
  return {
    ...n,
    alwaysDenyRules: e
  };
}

function p(n, e, t, o) {
  let {action: r, ...l} = t;
  return (r === void 0 ? null : Fh(g(n), e, {
    action: r
  }, o)) ?? Fh(n, e, l, o);
}

function V5r(n, e, t, o, r = {}) {
  let l = g(n);
  return (o === "deny" ? zo(l, d) : rd(l, d)) ?? p(n, d, m(t, r.prompt, r.page, r.version).artifact, o) ?? Mvt(v0(n, fn, o), e, t);
}

function WE(n, e, t, o, r) {
  let l = {
    ...r.fields,
    ...r.read !== void 0 ? m(t, r.read.prompt, r.read.page, r.read.version).artifact : {
      ...typeof r.action === "string" && {
        action: r.action
      },
      url: Hn(e)
    }
  }, u = Ott(d, l), a = g(n), i = s => o === "deny" ? zo(a, s) : r.wholeToolAskAnswered === !0 && s.name === fn ? null : rd(a, s);
  return i(d) ?? p(n, d, l, o) ?? (u === void 0 ? null : i(u.tool) ?? p(n, u.tool, u.input, o)) ?? Gy(n, e, t, o, r);
}

function Z2e(n) {
  return `the ${hve(bn(n.ruleValue))} deny rule from ${RC(n.source)}`;
}

var Mtt = 'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';

function ykn(n, e, t, o = {}) {
  let r = de(n), l = {
    action: "read",
    read: o
  };
  return C(n, e) && !(Km(e.slug) && !Ss(n.agentContext)) && WE(r, e, t, "deny", l) === null && WE(r, e, t, "ask", l) === null;
}

function C(n, e) {
  let {mode: t, modeBeforeRewrite: o} = de(n);
  return t !== "plan" && (t !== "auto" && o !== "auto" || uv(e) || rpe(e.slug));
}

function K5r(n, e, t, o = {}) {
  return de(n).mode !== "dontAsk" && !dh(n) && ykn(n, e, t, o);
}

function Hvt(n, e, t, o = {}) {
  return s1n(n.artifactRegistries, e.slug) && ykn(n, e, t, o);
}

export { Mvt, Ott, hkn, _W, G5r, arr, Gy, V5r, WE, Z2e, Mtt, ykn, K5r, Hvt };
