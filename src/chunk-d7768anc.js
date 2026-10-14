// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { vI, ke, yx, XU } from "./chunk-3pqddg8f.js";

import { MYn, Eh, gFt, za, LYn, NYn, $Yn, FYn, zw, uMe, Wme, Ib, Hm, bL } from "./chunk-ddr690nj.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { uo } from "./chunk-kawq2919.js";

import { ll } from "./chunk-hmce8a0s.js";

import { vO } from "./chunk-9tdwgnpn.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { xl, hH, oho } from "./chunk-67jt18z1.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { ose } from "./chunk-yz2w7bj4.js";

import { o, oe, T, u } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { join as O, resolve as f, sep as L } from "path";

function HY(e, r, n = Date.now()) {
  return Number.isFinite(e) && Math.abs(n - e) < r;
}

import { normalize as v, sep as b } from "path";

var x = 1024;

function ww(e) {
  let r = vO().foldedSegmentsBySpelling, n = r.get(e);
  if (n === void 0) {
    if (n = v(e).split(b).map(ll).join(b), r.size >= x) r.clear();
    r.set(e, n);
  }
  return n;
}

var lZt = "cache";

function GT() {
  return f(ke(), xl());
}

function B7() {
  return O(GT(), lZt);
}

function JFn() {
  return D([ f(Ee(), "plugins"), f(Ee(), "cowork_plugins"), GT(), ...hH().map(e => f(ke(), e)) ]);
}

function Jgo() {
  return D([ ...yx(), ...XU() ].map(e => f(ke(), e)));
}

function Jws(e) {
  let r = Jgo();
  if (r.length === 0) return !1;
  if (uMe(e, {
    allowLocalWsl: !0
  })) return !0;
  let n = r.join("\0"), i = Ge(), t = i.inlinePluginRootsComparableMemo;
  if (t?.roots !== n || !HY(t.at, _)) t = {
    roots: n,
    comparable: r.map(s => Ib(s, {
      foldCase: !0
    })),
    at: Date.now()
  }, i.inlinePluginRootsComparableMemo = t;
  let g = Ib(e, {
    foldCase: !0,
    knownNotSuspect: !0
  });
  return t.comparable.some(s => Hm(s, g, {
    alreadyComparable: !0
  }));
}

var _ = 3e4;

function Qws(e) {
  let r = uo(f(ose())), n = ww(f(e));
  if (r.map(ww).some(s => n === s || n.startsWith(s + L))) return !0;
  let i = bL(e) || zw(e), t = !Eh(e) && (!i || za(e));
  if (t && uMe(e, {
    allowLocalWsl: !0
  })) return !0;
  let g = Ib(e, {
    foldCase: !0,
    knownNotSuspect: t
  });
  return r.some(s => Hm(Ib(s, {
    foldCase: !0
  }), g, {
    alreadyComparable: !0
  }));
}

import { readFileSync as N, statSync as W } from "fs";

import { isAbsolute as w, join as M, resolve as S } from "path";

var I = 4194304, k = p(() => u({
  sourceCommand: o().optional().catch(void 0),
  sourceProducerPath: o().optional().catch(void 0),
  previousProducerPaths: T(oe()).transform(e => e.filter(r => typeof r === "string")).optional().catch(void 0)
}).passthrough());

function Qgo(e) {
  let r = Ge(), n = r.commandProducerDirsDenied, i = R();
  r.commandProducerDirsWslProviderUndeterminable = i === "undeterminable";
  let t = i === "undeterminable" ? void 0 : i;
  r.commandProducerDirsScannedAt = Date.now(), r.commandProducerDirsComparable = null;
  for (let g of new Set(e)) {
    let s;
    try {
      let m = M(g, "installed_plugins.json"), P = W(m);
      if (!P.isFile() || P.size > I) continue;
      let c = N(m, "utf8");
      s = JSON.parse(c);
    } catch {
      continue;
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let m of Object.values(a)) {
      if (!Array.isArray(m)) continue;
      for (let P of m) {
        let c = k().safeParse(P);
        if (!c.success) continue;
        for (let C of [ c.data.sourceProducerPath, ...c.data.previousProducerPaths ?? [] ]) {
          let l = C === void 0 ? void 0 : Wme(C), h = l === void 0 ? void 0 : y(l, t);
          if (h !== void 0) n.add(h);
        }
      }
    }
  }
  return [ ...n ];
}

function r6e(e, {emit: r = !0} = {}) {
  let n = R(), i = y(Wme(e), n === "undeterminable" ? void 0 : n);
  if (i === void 0) return;
  let t = Ge().commandProducerDirsDenied;
  if (t.has(i)) return;
  if (t.add(i), Ge().commandProducerDirsComparable = null, r) yFe();
}

function yFe() {
  try {
    Ge().commandProducerDirsChanged.emit();
  } catch (e) {
    d(e);
  }
}

var Zgo = vI(() => Ge().commandProducerDirsChanged);

function Zws(e, r, n, {maxAgeMs: i = 0} = {}) {
  let t = Ge();
  if (!(i > 0 && Date.now() - t.commandProducerDirsScannedAt < i) || t.commandProducerDirsComparable === null) {
    let a = {
      foldCase: !0
    }, m = Ib(ke(), a), P = Ib(n, a), c = r.map(l => Ib(l, a)).filter(l => !Hm(l, m, {
      alreadyComparable: !0
    })), C = Qgo(r).map(l => Ib(l, a));
    t.commandProducerDirsComparable = [ ...c, ...C ], t.commandProducerDirsNeedCanonicalCandidate = C.length > 0 || c.some(l => !Hm(P, l, {
      alreadyComparable: !0
    }));
  }
  if (t.commandProducerDirsWslProviderUndeterminable && (gFt(Wme(e)) !== void 0 || gFt(Ib(e, {
    foldCase: !0
  })) !== void 0)) return !0;
  if (t.commandProducerDirsComparable.length === 0) return !1;
  if (t.commandProducerDirsNeedCanonicalCandidate && uMe(w(e) ? e : S(e), {
    allowLocalWsl: !0
  })) return !0;
  let s = t.commandProducerDirsNeedCanonicalCandidate ? Ib(e, {
    foldCase: !0,
    knownNotSuspect: !0
  }) : S(e).normalize("NFC").toLowerCase();
  return t.commandProducerDirsComparable.some(a => Hm(a, s, {
    alreadyComparable: !0
  }));
}

function R() {
  let e = Ge(), r = GT(), n = e.wslProviderOfPluginsRootMemo;
  if (n?.root === r && HY(n.at, E)) return n.value;
  let i = oho(r);
  if (i === "undeterminable") return "undeterminable";
  let t = i === void 0 ? void 0 : {
    prefix: i.prefix
  };
  return e.wslProviderOfPluginsRootMemo = {
    root: r,
    value: t,
    at: Date.now()
  }, t;
}

var E = 3e4;

function y(e, r) {
  let n = $Yn(e, {
    exactDots: !0
  }) ?? (r === void 0 ? void 0 : NYn(e, r.prefix));
  if (n !== void 0) return n;
  if (w(e)) return !MYn(e) && (!zw(e) || LYn(e)) ? e : void 0;
  return FYn(e, {
    exactDots: !0
  });
}

export { HY, ww, lZt, GT, B7, JFn, Jgo, Jws, Qws, Qgo, r6e, yFe, Zgo, Zws };
