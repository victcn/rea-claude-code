// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { ke } from "./chunk-3pqddg8f.js";

import { x } from "./chunk-b0z4bv3v.js";

import { _ } from "./chunk-kawq2919.js";

import { I, vr, Nt } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { Qwe, $n } from "./chunk-xywp7esx.js";

import { yr } from "./chunk-7w995nyx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { ge } from "./chunk-07cck4g7.js";

import { i } from "./chunk-hedpgw9m.js";

import { Ry } from "./chunk-q6wab2jw.js";

import { TE, wan, jn, bn } from "./chunk-1z2heevg.js";

import { j5 } from "./chunk-j90se18b.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { gOe, si } from "./chunk-9yajep3y.js";

import { ie, Pc, ut, iM, vj, Lqn } from "./chunk-yxennhe9.js";

import { an, st, s, n, Uo, Gi, ti } from "./chunk-3vw306fv.js";

import { xV } from "./chunk-sqb9meyh.js";

import { V, Nn, Fo } from "./chunk-jb3h1y0s.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { vo } from "./chunk-apnet8r0.js";

import { Wn, OFn } from "./chunk-4v78v8fd.js";

import { cZ, Ed, tS, zg, KF, e3e, dwe, mUe, Ttn, $i, Tw, Dkr, N1, Oi } from "./chunk-b47tzzqx.js";

import { Lk, Rvt } from "./chunk-ce64fmea.js";

import { zl } from "./chunk-84yp45y8.js";

import { $oo, h8t } from "./chunk-ydwee02n.js";

import { G } from "./chunk-j706jx8h.js";

import { ka } from "./chunk-e1e7nk6m.js";

import { nn } from "./chunk-ytac37d4.js";

import { zi, Xe } from "./chunk-yrpmvsj8.js";

import { Se } from "./chunk-sebqm9p5.js";

import { DE } from "./chunk-vyvnan99.js";

import { Ca } from "./chunk-v2nqxhaj.js";

import { Wyt } from "./chunk-m9jgfjcr.js";

import { xk } from "./chunk-wceka25n.js";

import { d8n } from "./chunk-v0b4fvka.js";

import { kze } from "./chunk-0wsrqm9k.js";

import { aB } from "./chunk-ebd8npjf.js";

import { El } from "./chunk-w1phyxy4.js";

import { id } from "./chunk-0ypdmr94.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { qw } from "./chunk-xz8q4brh.js";

import { cVr } from "./chunk-1gj65ya1.js";

import { iW } from "./chunk-8sjcp0zp.js";

import { ae, P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { et } from "./chunk-59na0977.js";

import { FBe, vHs, EHs, _Ao } from "./chunk-gc7m0yjq.js";

import { oo } from "./chunk-vjmbaret.js";

import { Wc } from "./chunk-cvcg6n1z.js";

import { pme } from "./chunk-g7z9901y.js";

import { D } from "./chunk-hmqkrrtz.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

function gn(t) {
  return OFn(t);
}

function xi(t) {
  let o = [];
  for (let a of t) {
    if (a === null || typeof a !== "object") continue;
    if (a.type !== "addRules") {
      o.push(a);
      continue;
    }
    if (!Array.isArray(a.rules)) continue;
    let c = a.rules.filter(m => m !== null && typeof m === "object" && typeof m.toolName === "string" && (m.ruleContent === void 0 || typeof m.ruleContent === "string") && (m.ruleContent === void 0 ? nt(m.toolName) : gn({
      toolName: m.toolName,
      ruleContent: m.ruleContent
    })));
    if (c.length > 0) o.push({
      ...a,
      rules: c
    });
  }
  return o;
}

var wMe = 8, WEe = 64, EQe = 160, Si = new Set([ "localSettings", "session" ]);

function ho(t, o, a, c = Si) {
  let m = xi(t).filter(l => {
    if (!o.has(l.type)) return !1;
    if ((l.type === "addRules" || l.type === "replaceRules" || l.type === "removeRules") && l.behavior !== "allow") return !1;
    return l.destination !== void 0 && c.has(l.destination);
  }), u = [];
  for (let l of m) {
    if (l.type !== "addRules") {
      if (l.type === "addDirectories") {
        if (!Array.isArray(l.directories)) continue;
        let f = l.directories.filter(C => typeof C === "string" && C.trim() !== "" && ie(C) > 0 && dwe(C));
        if (f.length === 0) continue;
        u.push({
          ...l,
          directories: f
        });
        continue;
      }
      u.push(l);
      continue;
    }
    if (l.rules === void 0) continue;
    let b = l.rules.filter(f => dwe(bn({
      toolName: f.toolName,
      ...f.ruleContent !== void 0 && {
        ruleContent: f.ruleContent
      }
    }))), k = a === void 0 ? b : b.filter(a);
    if (k.length > 0) u.push({
      ...l,
      rules: k
    });
  }
  return u;
}

var w6n = new Set([ "addRules", "addDirectories" ]), aBo = new Set([ "addRules" ]);

function Ci(t) {
  return t.trim() !== t || t === "" || cZ(t) || si(t) !== t || /[\t\n]/.test(t) || ie(t) === 0;
}

function nt(t) {
  if (t === FBe) return !1;
  if (Ci(t)) return !1;
  let o = jn(bn({
    toolName: t
  }));
  if (o.toolName !== t || o.ruleContent !== void 0) return !1;
  if (TE(t)) return !1;
  let a = oo(t);
  if (a !== null && !a.toolName) return !1;
  return !0;
}

function yo(t) {
  if (typeof t !== "string" || t.trim() === "" || ie(t) === 0 || !dwe(t)) return null;
  return EHs(t);
}

function hn(t) {
  switch (t.length) {
   case 0:
    return "";

   case 1:
    return e(n, {
      bold: !0,
      children: t[0]
    });

   case 2:
    return r(n, {
      children: [ e(n, {
        bold: !0,
        children: t[0]
      }), " and ", e(n, {
        bold: !0,
        children: t[1]
      }) ]
    });

   default:
    return r(n, {
      children: [ e(n, {
        bold: !0,
        children: t.slice(0, -1).join(", ")
      }), ", and", " ", e(n, {
        bold: !0,
        children: t.slice(-1)[0]
      }) ]
    });
  }
}

function MWe(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return e(n, {
    bold: !0,
    children: t[0]
  });
  if (t.length === 2) return r(n, {
    children: [ e(n, {
      bold: !0,
      children: t[0]
    }), " and ", e(n, {
      bold: !0,
      children: t[1]
    }) ]
  });
  return r(n, {
    children: [ t.slice(0, -1).map((o, a) => r(n, {
      children: [ e(n, {
        bold: !0,
        children: o
      }), ",", " " ]
    }, a)), "and ", e(n, {
      bold: !0,
      children: t.at(-1)
    }) ]
  });
}

function EUt(t) {
  return wan((t?.replace(/\/\*\*$/, "") || "").replace(/^\.\//, "").replace(/^\/\//, "/"));
}

function yn(t) {
  if (!t) return "";
  return t.endsWith(":*") || t.endsWith(" *") ? t.slice(0, -2) : t;
}

function kUt(t, o, a) {
  if (t.toolName === o) {
    let c = yn(t.ruleContent);
    if (!c) return !1;
    return Boolean(a ? a(c) : c);
  }
  if (t.toolName === et) return Boolean(EUt(t.ruleContent));
  return !1;
}

function wte(t) {
  return t !== void 0 && si(t) === t && !/[\t\n\u2028\u2029]/.test(t) && !cZ(t) ? vHs(t) : void 0;
}

function EL(t) {
  return Dkr(t);
}

function v6n(t, o, a, c) {
  if (!Array.isArray(t)) return null;
  if (t.length > WEe) return null;
  if (t.some(g => g === null || typeof g !== "object")) return null;
  let m = t.filter(g => g.type === "addRules").flatMap(g => g.rules || []), u = t.filter(g => g.type === "addDirectories").flatMap(g => Array.isArray(g.directories) ? g.directories : []);
  if (m.some(g => g === null || typeof g !== "object" || typeof g.toolName !== "string" || g.ruleContent !== void 0 && typeof g.ruleContent !== "string")) return null;
  if (m.length + u.length > wMe) return null;
  let l = m.filter(g => g.toolName === et), b = m.filter(g => g.toolName === o);
  if (u.some(g => typeof g !== "string" || g.trim() === "" || ie(g) === 0 || !dwe(g))) return null;
  let k = D(u), f = D(l.flatMap(g => g.ruleContent && EUt(g.ruleContent) ? g.ruleContent : []));
  if (f.some(g => !dwe(g))) return null;
  let C = D(b.flatMap(g => {
    if (!g.ruleContent) return [];
    return yn(g.ruleContent) ? [ g.ruleContent ] : [];
  }));
  if (C.some(g => !dwe(g))) return null;
  let M = mUe(C, g => {
    let A = yn(g) || g;
    return EL(a ? a(A) : A);
  }), L = mUe([ ...f, ...k ], g => f.includes(g) ? EL(EUt(g)) : EL(g)), h = L.slice(0, f.length), E = L.slice(f.length);
  if (ie([ ...M, ...h, ...E ].join(" and ")) > EQe) return null;
  let O = k.length > 0, j = h.length > 0, v = M.length > 0;
  if (j && !O && !v) return r(n, {
    children: [ "Yes, allow reading from ", MWe(h), " from this project" ]
  });
  if (O && !j && !v) return r(n, {
    children: [ "Yes, and always allow access to ", MWe(E), " from this project" ]
  });
  if (v && !O && !j) return r(n, {
    children: [ "Yes, and don't ask again for ", hn(M), " commands", " ", c === void 0 ? r(Q, {
      children: [ "in", " ", e(n, {
        bold: !0,
        children: Wn(ke())
      }) ]
    }) : r(Q, {
      children: [ "on ", e(n, {
        bold: !0,
        children: c
      }) ]
    }) ]
  });
  if ((O || j) && !v) {
    let g = [ ...E, ...h ];
    return r(n, {
      children: [ "Yes, and always allow access to ", MWe(g), " from this project" ]
    });
  }
  if ((O || j) && v) {
    let g = [ ...E, ...h ];
    if (g.length === 1 && M.length === 1) return r(n, {
      children: [ "Yes, and allow access to ", MWe(g), " and", " ", hn(M), " commands" ]
    });
    return r(n, {
      children: [ "Yes, and allow ", MWe(g), " access and", " ", hn(M), " commands" ]
    });
  }
  return null;
}

var we = Symbol("ConsentRow mint token");

class me {
  #e=!0;
  node;
  applies;
  constructor(t, o, a) {
    if (t !== we) throw Error("ConsentRow may only be constructed by the consentRows factories");
    this.node = o, this.applies = a, Object.freeze(this);
  }
  static is(t) {
    return typeof t === "object" && t !== null && #e in t;
  }
}

var Nv = me.is, lBo = p(() => Wc(Nv));

function ot(t) {
  if (t.length > WEe) return null;
  let o = [];
  for (let a of t) {
    let c;
    try {
      c = xV().safeParse(a);
    } catch {
      return null;
    }
    if (!c.success) return null;
    o.push(c.data);
  }
  return _Ao(o);
}

function SM(t, o) {
  if (!Array.isArray(t)) return null;
  let a;
  try {
    a = t.length;
  } catch {
    return null;
  }
  if (typeof a !== "number" || !Number.isSafeInteger(a) || a < 0 || a > WEe) return null;
  let c = 0, m = [];
  for (let f = 0; f < a; f++) try {
    let C = t[f], M = C !== null && typeof C === "object" ? {
      ...C
    } : C, L = !1;
    if (M !== null && typeof M === "object") {
      let h = M;
      for (let E of [ "rules", "directories" ]) {
        let T = h[E];
        if (!Array.isArray(T)) continue;
        let O = T.length;
        if (typeof O !== "number" || !Number.isSafeInteger(O) || O < 0) {
          L = !0;
          break;
        }
        if (c += O, c > WEe * wMe) return null;
        let j = [];
        for (let v = 0; v < O; v++) j.push(T[v]);
        h[E] = j;
      }
    }
    if (L) continue;
    m.push(M);
  } catch {}
  let u = [];
  for (let f of m) {
    let C;
    try {
      C = xV().safeParse(f);
    } catch {
      continue;
    }
    if (C.success) u.push(C.data);
  }
  if (u.length === 0) return null;
  let l = ho(u, o.displayedTypes, o.labelPredicate, o.displayedDestinations);
  if (l.length === 0) return null;
  let b = _Ao(l), k = o.renderLabel(b);
  if (k == null || typeof k === "boolean" || k === "") return null;
  return new me(we, k, b);
}

var Ti = {
  default: "default (ask each time)",
  acceptEdits: "accept edits (auto-approve file edits and common file commands)",
  auto: "auto (no routine prompts; a reviewer model screens actions)",
  dontAsk: "don't ask (auto-deny anything that would prompt)",
  plan: "plan mode (research and propose changes without making them)",
  bypassPermissions: "BYPASS PERMISSIONS (no further prompts)"
};

function zEe(t, o) {
  if (t === "bypassPermissions" && o?.isBypassPermissionsModeAvailable === !1) return null;
  let a = ot([ {
    type: "setMode",
    destination: "session",
    mode: t
  } ]);
  if (a === null) throw Error("setModeRow: schema rejected a designed setMode update");
  if (o?.labelVariant === "plan-keep-context") {
    let c = t === "acceptEdits" ? "Yes, auto-accept edits" : t === "default" ? "Yes, manually approve edits" : null;
    if (c !== null) return new me(we, e(n, {
      children: c
    }), a);
  }
  return new me(we, r(n, {
    children: [ "Yes, and switch to ", e(n, {
      bold: !0,
      children: Ti[t]
    }), " for this session" ]
  }), a);
}

function Upn(t) {
  if (!Array.isArray(t)) return null;
  let o;
  try {
    o = t.length;
  } catch {
    return null;
  }
  if (typeof o !== "number" || !Number.isSafeInteger(o) || o < 0 || o > WEe) return null;
  let a = [];
  for (let l = 0; l < o; l++) try {
    let b = t[l], k = yo(b);
    if (k !== null) a.push(k);
  } catch {}
  let c = D(a);
  if (c.length === 0) return null;
  if (c.length > wMe) return null;
  let m = N1(c, l => Dkr(l));
  if (ie(m.join(", ")) > EQe) return null;
  let u = ot([ {
    type: "addDirectories",
    destination: "session",
    directories: c
  } ]);
  if (u === null) return null;
  return new me(we, r(n, {
    children: [ "Yes, and always allow access to ", e(n, {
      bold: !0,
      children: m.join(", ")
    }), " for this session" ]
  }), u);
}

function E6n(t, o, a) {
  if (typeof t !== "string" || wte(t) !== t) return null;
  if (typeof o !== "string") return null;
  let c = o.trim();
  if (c === "" || wte(c) !== c) return null;
  if (c === "*") {
    if (!nt(a)) return null;
    let u = ot([ {
      type: "addRules",
      rules: [ {
        toolName: a
      } ],
      behavior: "allow",
      destination: "localSettings"
    } ]);
    if (u === null) return null;
    return new me(we, `Yes, and don\u2019t ask again for any ${a} command`, u);
  }
  if (!nt(a) || !gn({
    toolName: a,
    ruleContent: c
  })) return null;
  let m = ot([ {
    type: "addRules",
    rules: [ {
      toolName: a,
      ruleContent: c
    } ],
    behavior: "allow",
    destination: "localSettings"
  } ]);
  if (m === null) return null;
  return new me(we, `Yes, and don\u2019t ask again for: ${c}`, m);
}

var MNr = {
  workflow: "Yes, and switch to auto mode",
  "exit-plan-resume": "Yes, and use auto mode"
}, Mi = (() => {
  let t = ot([]);
  if (t === null) throw Error("NO_DISPLAYED_UPDATES: empty intake rejected");
  return t;
})();

function Bpn(t) {
  return new me(we, MNr[t], Mi);
}

function k6n(t, ...o) {
  let a = [ t, ...o ];
  for (let u of a) if (!Nv(u)) throw Error("combineRows accepts only constructor-produced ConsentRows");
  let c = a.flatMap(u => [ ...u.applies ]);
  if (c.length > WEe) throw Error("combineRows: combined updates exceed the display intake cap");
  let m = ot(c);
  if (m === null) throw Error("combineRows: schema rejected already-minted updates");
  return new me(we, e(n, {
    children: a.map((u, l) => r(n, {
      children: [ l > 0 ? "; " : "", u.node ]
    }, l))
  }), m);
}

function Ei(t) {
  let c = w(4), {multiline: o, children: a} = t;
  if (st()) {
    let m;
    if (c[0] !== a) m = e(s, {
      "aria-role": "blockquote",
      children: a
    }), c[0] = a, c[1] = m; else m = c[1];
    return m;
  }
  if (!o) {
    return a;
  }
  let m;
  if (c[2] !== a) m = e(s, {
    borderStyle: "single",
    borderLeft: !0,
    borderRight: !1,
    borderTop: !1,
    borderBottom: !1,
    borderDimColor: !0,
    paddingLeft: 1,
    children: a
  }), c[2] = a, c[3] = m; else m = c[3];
  return m;
}

F();

F();

function vi(X) {
  return X + 1;
}

function Ot(t) {
  let u = w(18), {permissionResult: o} = t, a = o?.behavior === "ask" ? o.denialLimitFallback?.deadlineEpochMs ?? o.autoDenyWindow?.deadlineEpochMs : void 0, c = st(), m = an(), l;
  if (u[0] !== m) l = m.now(), u[0] = m, u[1] = l; else l = u[1];
  let b;
  if (u[2] === S) b = Date.now(), u[2] = b; else b = u[2];
  let k;
  if (u[3] !== l) k = {
    clockAt: l,
    epochAt: b
  }, u[3] = l, u[4] = k; else k = u[4];
  let f = k, C;
  if (u[5] !== f.clockAt || u[6] !== f.epochAt || u[7] !== m) C = () => f.epochAt + (m.now() - f.clockAt), 
  u[5] = f.clockAt, u[6] = f.epochAt, u[7] = m, u[8] = C; else C = u[8];
  let M = C, [, L] = y(0), h;
  if (u[9] === S) h = () => L(vi), u[9] = h; else h = u[9];
  if (Gi(h, a !== void 0 && !c ? 1e3 : null), a === void 0) {
    return null;
  }
  if (c) {
    let E = Math.max(0, a - M());
    let T;
    if (u[10] !== E) {
      let O = Math.round(E / 6e4);
      let j = Math.max(1, Math.round(E / 1e3));
      T = E >= 6e4 ? `about ${O} ${I(O, "minute")}` : `about ${j} ${I(j, "second")}`;
      u[10] = E, u[11] = T;
    } else T = u[11];
    let v = T;
    const g = `${Ry} Claude Code will automatically deny this request in ${v}, to avoid blocking progress on an unattended session`;
    let A;
    if (u[12] !== g) A = e(s, {
      marginBottom: 1,
      children: e(n, {
        color: "warning",
        children: g
      })
    }), u[12] = g, u[13] = A; else A = u[13];
    return A;
  }
  let Y = Math.max(0, a - M()), re = Math.floor(Y / 6e4), B = Math.floor(Y % 6e4 / 1e3);
  const T = String(B);
  let g;
  if (u[14] !== T) g = T.padStart(2, "0"), u[14] = T, u[15] = g; else g = u[15];
  let H = `${re}:${g}`;
  const A = `${Ry} Claude Code will automatically deny this request in ${H}, to avoid blocking progress on an unattended session`;
  let q;
  if (u[16] !== A) q = e(s, {
    marginBottom: 1,
    children: e(n, {
      color: "warning",
      children: A
    })
  }), u[16] = A, u[17] = q; else q = u[17];
  return q;
}

function Ki(Ze) {
  return Ze.toolPermissionContext.mode;
}

function Hi(po, Qe) {
  return e(Ei, {
    multiline: tS(po),
    children: Qe
  });
}

var TUt = 7;

function Ii(t) {
  if (t?.startsWith("plugin")) return "plugin hooks.json";
  if (t?.startsWith("skill")) return "SKILL.md";
  return "settings.json";
}

function jt(t) {
  if (t?.type === "rule" && t.rule.ruleBehavior === "ask") return t.rule;
  if (t?.type === "subcommandResults") {
    for (let o of t.reasons.values()) if (o.behavior === "ask") {
      let a = jt(o.decisionReason);
      if (a) return a;
    }
  }
  return;
}

function Oe(t, o, a) {
  if (!t) return null;
  let c = m => $i(m).text;
  if (t.type === "classifier") {
    if (t.classifier === "auto-mode") return {
      reasonString: `Auto mode classifier requires confirmation for this ${o}.\n${c(t.reason)}`,
      configString: void 0,
      themeColor: "error"
    };
    return {
      reasonString: `Classifier ${ge.bold(c(t.classifier))} requires confirmation for this ${o}.\n${c(t.reason)}`,
      configString: void 0
    };
  }
  if (t.type === "subcommandResults") {
    let m = jt(t);
    if (m) return Oe({
      type: "rule",
      rule: m
    }, o, a);
    for (let u of t.reasons.values()) if (u.behavior === "ask" || u.behavior === "passthrough") {
      let l = Oe(u.decisionReason, o, a);
      if (l) return l;
    }
  }
  switch (t.type) {
   case "rule":
    {
      let m = ge.bold(c(bn(t.rule.ruleValue)));
      if (a === "auto" && t.rule.ruleBehavior === "ask" && t.rule.source !== "policySettings") return {
        reasonString: `Ask rule ${m} overrides auto mode for this ${o}.`,
        configString: "/permissions to let auto mode decide"
      };
      return {
        reasonString: `Permission rule ${m} requires confirmation for this ${o}.`,
        configString: t.rule.source === "policySettings" ? void 0 : "/permissions to update rules"
      };
    }

   case "hook":
    {
      let m = t.reason ? `:\n${c(t.reason)}` : ".", u = t.hookSource ? ` ${ge.dim(`[${c(t.hookSource)}]`)}` : "";
      return {
        reasonString: `Hook ${ge.bold(c(t.hookName))} requires confirmation for this ${o}${m}${u}`,
        configString: `${Ii(t.hookSource)} to update hooks`
      };
    }

   case "safetyCheck":
   case "other":
    return {
      reasonString: c(t.reason),
      configString: void 0
    };

   case "workingDir":
    return {
      reasonString: c(t.reason),
      configString: "/permissions to update rules"
    };

   default:
    return null;
  }
}

function $v(t) {
  let L = w(30), {permissionResult: o, toolType: a, rowBudget: c, rowColumns: m} = t, u = V(Ki), l = o?.behavior === "ask" ? o.denialLimitFallback?.disclosure : void 0, b = Oe(o?.decisionReason, a, u), k = l !== void 0 && l !== o?.decisionReason ? Oe(l, a, u) : null, f = Te().columns, C = l !== void 0 || c !== void 0, M = m !== void 0 ? Math.max(1, m) : Math.max(20, f - 8), h;
  if (L[0] !== C || L[1] !== M || L[2] !== m) h = (E, T) => {
    if (!C) {
      return E;
    }
    let O = T;
    let v = Pc(E, M, {
      trim: !0,
      hard: !0
    }).split(`\n`).map(j => ut(j, M));
    if (v.length <= O) {
      return v.join(`\n`);
    }
    let g = Math.max(1, O - 1);
    let A = `\u2026 (+${v.length - g} more lines)`;
    return [ ...v.slice(0, g), m === void 0 ? A : ut(A, M) ].join(`\n`);
  }, L[0] = C, L[1] = M, L[2] = m, L[3] = h; else h = L[3];
  let Y = h, re = o?.behavior === "ask" ? o.matchedAskRule : void 0, B = re !== void 0 && jt(o?.decisionReason) === void 0 ? Oe({
    type: "rule",
    rule: re
  }, a, u) : null, H;
  if (L[4] !== C || L[5] !== M) H = q => {
    if (q === void 0 || !C) {
      return 0;
    }
    return Nt(Pc(q, M, {
      trim: !0,
      hard: !0
    }), `\n`) + 1;
  }, L[4] = C, L[5] = M, L[6] = H; else H = L[6];
  let X = H, U = k && c !== void 0 ? [ ut(vr(k.reasonString), M), ...k.reasonString.split(`\n`).slice(1) ].join(`\n`) : k?.reasonString, K = {
    consent: X(b?.reasonString),
    streak: X(U),
    askRule: X(B?.reasonString)
  }, W;
  if (L[7] !== c) W = c === void 0 ? {
    consent: 4,
    streak: 4,
    askRule: 4
  } : {
    consent: 2,
    streak: 3,
    askRule: 2
  }, L[7] = c, L[8] = W; else W = L[8];
  let se = W, le = Math.min(12, Math.max(TUt, c ?? 12)), z = {
    consent: Math.min(K.consent, se.consent),
    streak: Math.min(K.streak, se.streak),
    askRule: Math.min(K.askRule, se.askRule)
  }, J = le - (z.consent + z.streak + z.askRule);
  for (const he of c === void 0 ? [ "consent", "streak", "askRule" ] : [ "streak", "consent", "askRule" ]) {
    if (J <= 0) {
      break;
    }
    let De = Math.min(K[he] - z[he], J);
    z[he] = z[he] + De, J = J - De;
  }
  let ye = b !== null && b !== void 0 ? Y(b.reasonString, z.consent) : void 0, ce = U !== void 0 ? Y(U, z.streak) : void 0, ee = B ? Y(B.reasonString, z.askRule) : void 0, He;
  if (L[9] !== o) He = e(Ot, {
    permissionResult: o
  }), L[9] = o, L[10] = He; else He = L[10];
  let be = He;
  if (!b && !B && !k) {
    return be;
  }
  let Ee = b?.themeColor ?? (o?.decisionReason?.type === "hook" && u === "auto" ? "warning" : void 0), it = Hi, ne;
  if (L[11] !== ye || L[12] !== b || L[13] !== Ee) ne = b && it(ye ?? b.reasonString, Ee ? e(n, {
    color: Ee,
    children: ye ?? b.reasonString
  }) : e(n, {
    children: e(Uo, {
      children: ye ?? b.reasonString
    })
  })), L[11] = ye, L[12] = b, L[13] = Ee, L[14] = ne; else ne = L[14];
  let ze;
  if (L[15] !== b) ze = b?.configString && e(n, {
    dimColor: !0,
    children: b.configString
  }), L[15] = b, L[16] = ze; else ze = L[16];
  let Dt;
  if (L[17] !== B || L[18] !== ee || L[19] !== b?.configString) Dt = B && r(Q, {
    children: [ it(ee ?? B.reasonString, e(n, {
      children: e(Uo, {
        children: ee ?? B.reasonString
      })
    })), B.configString && B.configString !== b?.configString && e(n, {
      dimColor: !0,
      children: B.configString
    }) ]
  }), L[17] = B, L[18] = ee, L[19] = b?.configString, L[20] = Dt; else Dt = L[20];
  let Et;
  if (L[21] !== ce || L[22] !== k) Et = k && it(ce ?? k.reasonString, k.themeColor ? e(n, {
    color: k.themeColor,
    children: ce ?? k.reasonString
  }) : e(n, {
    children: e(Uo, {
      children: ce ?? k.reasonString
    })
  })), L[21] = ce, L[22] = k, L[23] = Et; else Et = L[23];
  let Ie;
  if (L[24] !== be || L[25] !== ne || L[26] !== ze || L[27] !== Dt || L[28] !== Et) Ie = r(s, {
    marginBottom: 1,
    flexDirection: "column",
    children: [ ne, ze, Dt, Et, be ]
  }), L[24] = be, L[25] = ne, L[26] = ze, L[27] = Dt, L[28] = Et, L[29] = Ie; else Ie = L[29];
  return Ie;
}

F();

function rs(T) {
  return T.toolPermissionContext;
}

var jpn = "\xb7 workflows run best with it on";

function AUt(t) {
  let m = w(10), o = V(rs), a = Nn(), {addNotification: c} = vo(), u;
  if (m[0] !== o) u = (o.mode === "default" || o.mode === "acceptEdits") && iW(o), 
  m[0] = o, m[1] = u; else u = m[1];
  let l = u, b = t?.type === "workflow-agent" && l, k;
  if (m[2] !== c || m[3] !== a || m[4] !== o) k = f => {
    let C = f === void 0 ? "workflow_permission_prompt" : f;
    if (!Lk("auto", o, M => a(L => {
      let h = M(L.toolPermissionContext);
      if (h === L.toolPermissionContext) {
        return L;
      }
      return {
        ...L,
        toolPermissionContext: h
      };
    }), C).ok) {
      return c({
        key: "workflow-auto-mode-unavailable",
        kind: "warning",
        text: Rvt(),
        color: "warning",
        priority: "high"
      }), !1;
    }
    return !0;
  }, m[2] = c, m[3] = a, m[4] = o, m[5] = k; else k = m[5];
  let E = k, f;
  if (m[6] !== l || m[7] !== E || m[8] !== b) f = {
    offered: b,
    canOfferAutoMode: l,
    enableAutoMode: E
  }, m[6] = l, m[7] = E, m[8] = b, m[9] = f; else f = m[9];
  return f;
}

F();

function xs(ne) {
  return {
    ...ne,
    attribution: {
      ...ne.attribution,
      escapeCount: ne.attribution.escapeCount + 1
    }
  };
}

function CUt(t) {
  return t === "yes" ? "accept" : t === "no" ? "reject" : void 0;
}

function GEe(t) {
  let Y = w(35), {feedbackTypeOf: o, toolName: a, isMcp: c, initialFocusedType: m} = t, u = Nn(), l = st(), [b, k] = y(""), [f, C] = y(""), [M, L] = y(!1), [h, E] = y(!1), [T, O] = y(!1), [j, v] = y(!1), [g, A] = y(void 0), re;
  if (Y[0] !== o || Y[1] !== g || Y[2] !== m) re = g === void 0 ? m : o(g), Y[0] = o, 
  Y[1] = g, Y[2] = m, Y[3] = re; else re = Y[3];
  let B = re, H;
  if (Y[4] !== M || Y[5] !== o || Y[6] !== c || Y[7] !== h || Y[8] !== a) H = q => {
    let X = o(q);
    let U = {
      toolName: a,
      isMcp: c
    };
    if (X === "accept") {
      if (M) L(!1), i("tengu_accept_feedback_mode_collapsed", U); else L(!0), O(!0), i("tengu_accept_feedback_mode_entered", U);
    } else if (X === "reject") {
      if (h) E(!1), i("tengu_reject_feedback_mode_collapsed", U); else E(!0), v(!0), i("tengu_reject_feedback_mode_entered", U);
    }
  }, Y[4] = M, Y[5] = o, Y[6] = c, Y[7] = h, Y[8] = a, Y[9] = H; else H = Y[9];
  let K = H, W;
  if (Y[10] !== b || Y[11] !== M || Y[12] !== o || Y[13] !== f || Y[14] !== h) W = se => {
    let le = o(se);
    if (le !== "accept" && M && !b.trim()) L(!1);
    if (le !== "reject" && h && !f.trim()) E(!1);
    A(se);
  }, Y[10] = b, Y[11] = M, Y[12] = o, Y[13] = f, Y[14] = h, Y[15] = W; else W = Y[15];
  let z = W, J;
  if (Y[16] !== T || Y[17] !== c || Y[18] !== j || Y[19] !== a) J = (he, De) => {
    i(he === "accept" ? "tengu_accept_submitted" : "tengu_reject_submitted", {
      toolName: a,
      isMcp: c,
      has_instructions: !!De,
      instructions_length: De?.length ?? 0,
      entered_feedback_mode: he === "accept" ? T : j
    });
  }, Y[16] = T, Y[17] = c, Y[18] = j, Y[19] = a, Y[20] = J; else J = Y[20];
  let ye = J, ce;
  if (Y[21] !== u) ce = () => {
    i("tengu_permission_request_escape", {}), u(xs);
  }, Y[21] = u, Y[22] = ce; else ce = Y[22];
  let ee = ce, He = !l && (B === "accept" && !M || B === "reject" && !h), be;
  if (Y[23] !== He) be = He && e(G, {
    chord: "tab",
    action: "amend"
  }), Y[23] = He, Y[24] = be; else be = Y[24];
  let Ee = be, it;
  if (Y[25] !== b || Y[26] !== M || Y[27] !== z || Y[28] !== K || Y[29] !== Ee || Y[30] !== ee || Y[31] !== ye || Y[32] !== f || Y[33] !== h) it = {
    acceptFeedback: b,
    rejectFeedback: f,
    setAcceptFeedback: k,
    setRejectFeedback: C,
    acceptInputMode: M,
    rejectInputMode: h,
    handleInputModeToggle: K,
    handleFocus: z,
    logSubmitted: ye,
    logEscape: ee,
    hintNode: Ee
  }, Y[25] = b, Y[26] = M, Y[27] = z, Y[28] = K, Y[29] = Ee, Y[30] = ee, Y[31] = ye, 
  Y[32] = f, Y[33] = h, Y[34] = it; else it = Y[34];
  return it;
}

function Ts(f) {
  return f.notifications.current?.key === "kill-agents-confirm";
}

var Zo = {
  keyCase: "lower"
};

function vMe(t) {
  let u = w(6), o = ka("chat:killAgents", "Chat", "ctrl+x ctrl+k"), a = Fo(Ts);
  if (!((t?.type === "subagent" || t?.type === "workflow-agent") && t.stoppableByKillAgents === !0) || o === "") {
    return null;
  }
  const m = a === !0 ? "again to stop background agents" : "twice to stop background agents";
  let l;
  if (u[0] !== o || u[1] !== m) l = e(G, {
    chord: o,
    action: m,
    format: Zo,
    terse: !0
  }), u[0] = o, u[1] = m, u[2] = l; else l = u[2];
  let b = l, k;
  if (u[3] !== a || u[4] !== b) k = a === !0 ? e(n, {
    color: "text",
    children: b
  }) : b, u[3] = a, u[4] = b, u[5] = k; else k = u[5];
  return k;
}

F();

var Cr = {
  accept: "tell Claude what to do next",
  reject: "tell Claude what to do differently"
};

function VX({options: t, onSelect: o, onCancel: a, question: c = "Do you want to proceed?", toolAnalyticsContext: m, defaultFocusValue: u, hideIndexes: l, requestSource: b}) {
  let [k, f] = y(u);
  P(() => {
    f(void 0);
  }, []);
  let C = ae(U => t.find(K => K.value === U)?.feedbackConfig?.type, [ t ]), {acceptFeedback: M, rejectFeedback: L, setAcceptFeedback: h, setRejectFeedback: E, acceptInputMode: T, rejectInputMode: O, handleInputModeToggle: j, handleFocus: v, logSubmitted: g, logEscape: A, hintNode: Y} = GEe({
    feedbackTypeOf: C,
    toolName: m?.toolName,
    isMcp: m?.isMcp ?? !1
  }), re = vMe(b), B = Z(() => t.map(U => {
    let {value: K, label: W, feedbackConfig: se} = U;
    if (!se) return {
      label: W,
      value: K,
      description: U.description
    };
    let {type: le, placeholder: z} = se, J = le === "accept" ? T : O, he = le === "accept" ? h : E, De = Cr[le];
    if (J) return {
      type: "input",
      label: W,
      value: K,
      placeholder: z ?? De,
      onChange: he,
      allowEmptySubmitToCancel: !0
    };
    return {
      label: W,
      value: K,
      description: U.description
    };
  }), [ t, T, O ]), H = ae(U => {
    let K = t.find(z => z.value === U);
    if (!K) return;
    let W = K.feedbackConfig, se, le = "";
    if (W) {
      if (le = (W.type === "accept" ? M : L).trim(), le) se = le;
    }
    if (o(U, se) === !1) return !1;
    if (W) g(W.type, le);
  }, [ t, M, L, o, g ]), q = Z(() => {
    let U = t.find(W => W.feedbackConfig?.type === "accept" && T || W.feedbackConfig?.type === "reject" && O), K = {};
    for (let W of t) if (W.keybinding) K[W.keybinding] = () => U ? j(U.value) : H(W.value);
    return K;
  }, [ t, T, O, j, H ]);
  nn(q, {
    context: "Confirmation"
  });
  let X = ae(() => {
    if (a?.() === !1) return;
    A();
  }, [ a, A ]);
  return r(s, {
    flexDirection: "column",
    children: [ typeof c === "string" ? e(n, {
      children: c
    }) : c, e(Xe, {
      selectedValue: zi,
      options: B,
      defaultFocusValue: k,
      hideIndexes: l,
      inlineDescriptions: !0,
      onChange: H,
      onCancel: X,
      onFocus: v,
      onInputModeToggle: j
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        wrap: re ? "truncate" : void 0,
        children: r(Se, {
          children: [ e(G, {
            chord: "escape",
            action: "cancel"
          }), Y, re ]
        })
      })
    }) ]
  });
}

F();

function ta(t) {
  let {style: K} = t;
  return K === "value";
}

function na(t) {
  let {style: W} = t;
  return W !== "value";
}

function oa(t, se) {
  let {text: le, style: z} = t;
  return e(n, {
    bold: z === "question",
    children: le
  }, se);
}

function ra(t, J) {
  let {text: he} = t;
  return e(n, {
    dimColor: !0,
    children: he
  }, `value-${J}`);
}

var qe = 12, zt = 60, eo = qe * zt, to = 4, qs = /^(?:replacing|source|into|type|artifact)(?: \d+)?: https?:\/\/[^\s/]+\/(?:[^\s/]+\/)*(?:artifact|frame)\/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[A-Za-z0-9_-]{22})\/?$/;

function Vs(t, o) {
  if (ie(t) <= o) return t;
  let a = vj(t, Math.floor(o / 2));
  return a + iM(t, o - ie(a));
}

function no(t, o) {
  let a = Math.max(1, o), c = [ ...t.question === void 0 ? [] : [ {
    text: t.question,
    style: "question"
  } ], ...t.lines.map(l => ({
    text: l,
    style: "line"
  })), ...t.values.map(l => ({
    text: l,
    style: "value"
  })) ], m = -1, u = c.flatMap(({text: l, style: b}) => {
    let k = l.replace(/\r\n|[\r\n\u2028\u2029]/g, " "), f = b === "value" ? m += 1 : void 0;
    return b === "value" && !qs.test(k) ? [ {
      text: Vs(k, a),
      style: b,
      value: f
    } ] : Pc(b === "value" ? k : l, a, {
      trim: !0,
      hard: !0
    }).split(`\n`).map(C => ({
      text: ut(C, a),
      style: b,
      ...f !== void 0 && {
        value: f
      }
    }));
  });
  return {
    rows: u,
    gutter: t.values.length > 0 || t.lines.length > 0 || u.length > c.length || c.some(({text: l}) => tS(l))
  };
}

function Zt(t) {
  let a = w(31), {card: o} = t;
  if (o.rows.length === 0) {
    return null;
  }
  let c, m, u, l, b, k, f, C, M, L;
  if (a[0] !== o.gutter || a[1] !== o.rows) {
    let h = o.rows.filter(ta);
    let E = o.rows.filter(na);
    let T = o.rows.length <= qe;
    let O = h;
    if (!T) {
      let j = qe - 3;
      let v = 0;
      while (v < h.length) {
        let g = h[v].value;
        let A = v;
        while (A < h.length && h[A].value === g) A = A + 1;
        if (A > j) {
          break;
        }
        v = A;
      }
      O = h.slice(0, v);
    }
    l = h.length - O.length;
    let Y = qe - 1 - O.length - (l > 0 ? 1 : 0);
    let re = T ? E : E.slice(0, Math.max(1, Y));
    let B = E.length - re.length;
    u = s;
    L = "column";
    m = Ei;
    M = o.gutter;
    c = s;
    b = "column";
    k = re.map(oa);
    if (a[12] !== B) f = B > 0 && r(n, {
      dimColor: !0,
      children: [ "\u2026 (+", B, " more lines)" ]
    }), a[12] = B, a[13] = f; else f = a[13];
    C = O.map(ra);
    a[0] = o.gutter, a[1] = o.rows, a[2] = c, a[3] = m, a[4] = u, a[5] = l, a[6] = b, 
    a[7] = k, a[8] = f, a[9] = C, a[10] = M, a[11] = L;
  } else c = a[2], m = a[3], u = a[4], l = a[5], b = a[6], k = a[7], f = a[8], C = a[9], 
  M = a[10], L = a[11];
  let H;
  if (a[14] !== l) H = l > 0 && r(n, {
    dimColor: !0,
    children: [ "\u2026 (+", l, " more lines)" ]
  }), a[14] = l, a[15] = H; else H = a[15];
  let q;
  if (a[16] !== c || a[17] !== b || a[18] !== k || a[19] !== f || a[20] !== C || a[21] !== H) q = r(c, {
    flexDirection: b,
    children: [ k, f, C, H ]
  }), a[16] = c, a[17] = b, a[18] = k, a[19] = f, a[20] = C, a[21] = H, a[22] = q; else q = a[22];
  let X;
  if (a[23] !== m || a[24] !== M || a[25] !== q) X = e(m, {
    multiline: M,
    children: q
  }), a[23] = m, a[24] = M, a[25] = q, a[26] = X; else X = a[26];
  let U;
  if (a[27] !== u || a[28] !== L || a[29] !== X) U = e(u, {
    flexDirection: L,
    children: X
  }), a[27] = u, a[28] = L, a[29] = X, a[30] = U; else U = a[30];
  return U;
}

F();

var Ve = 2e5, ro = Ve, ia = 1e4, sa = 1e3, aa = 2e5;

function Dr(t) {
  return typeof t === "string" && t.length <= 256;
}

var St = 80, la = new Set([ "channel_id", "channel" ]), ca = new Set([ "ts", "thread_ts" ]), da = /^\d{10}\.\d{6}$/, ua = /\b\d{4}\b/, pa = /\d{1,2}:\d{2}/;

function Fe(t, o, a, c) {
  return ie(t) + 2 + ie(o) + (a === void 0 ? 0 : ie(a) + 3) <= Math.min(St, c - 2);
}

var ma = 64;

function so(t, o, a = 0, c = {
  remaining: ia,
  unitsRemaining: Ve
}) {
  if (typeof t === "string") {
    if (t.length + 2 > c.unitsRemaining) throw Error("value exceeds the units display budget");
    let m = _(t);
    if (c.unitsRemaining -= m.length, c.unitsRemaining < 0) throw Error("value exceeds the units display budget");
    return m;
  }
  if (t === null || typeof t === "number" || typeof t === "boolean") {
    let m = String(t);
    if (c.unitsRemaining -= m.length, c.unitsRemaining < 0) throw Error("value exceeds the units display budget");
    return m;
  }
  if (a >= ma) throw Error("value exceeds the display depth bound");
  if (Array.isArray(t)) {
    if (t.length === 0) return "[]";
    let m = t.length;
    if (typeof m !== "number" || !Number.isSafeInteger(m) || m < 0) throw Error("value exceeds the element display budget");
    if (c.remaining -= m, c.remaining < 0) throw Error("value exceeds the element display budget");
    let u = [];
    for (let k = 0; k < m; k++) u.push(so(t[k], o + 1, a + 1, c));
    if (u.every(k => !k.includes(`\n`))) {
      let k = `[${u.join(", ")}]`;
      if (ie(k) <= St) return k;
    }
    let l = "  ".repeat(o + 1), b = "  ".repeat(o);
    return `[\n${u.map(k => l + k).join(`,\n`)}\n${b}]`;
  }
  if (typeof t === "object") {
    let m = Object.entries(t);
    if (m.length === 0) return "{}";
    if (c.remaining -= m.length, c.remaining < 0) throw Error("value exceeds the element display budget");
    for (let [f] of m) {
      if (f.length > aa) throw Error("nested key exceeds the display bound");
      if (f.length > c.unitsRemaining) throw Error("keys exceed the units display budget");
      if (zg(f) !== f) throw Error("nested key display would drop code points");
      c.unitsRemaining -= f.length;
    }
    let u = Ttn(m.map(([f]) => f));
    for (let [f] of m) {
      let C = u.get(f) ?? f;
      if (C.length > f.length) {
        if (c.unitsRemaining -= C.length - f.length, c.unitsRemaining < 0) throw Error("keys exceed the units display budget");
      }
    }
    let l = m.map(([f, C]) => `${u.get(f) ?? f}: ${so(C, o + 1, a + 1, c)}`);
    if (l.every(f => !f.includes(`\n`))) {
      let f = `{ ${l.join(", ")} }`;
      if (ie(f) <= St) return f;
    }
    let b = "  ".repeat(o + 1), k = "  ".repeat(o);
    return `{\n${l.map(f => b + f).join(`,\n`)}\n${k}}`;
  }
  if (typeof t === "bigint") throw Error("bigint value cannot be rendered");
  return "undefined";
}

var _r = /^(\d{4})-(\d{2})-(\d{2})[Tt ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,9})?)?(?:[Zz]|[+-]\d{2}:?\d{2})?$/;

function Er(t) {
  let o = t.trim(), a = o.match(_r);
  if (!a) return null;
  let c = Number(a[1] ?? ""), m = Number(a[2] ?? ""), u = Number(a[3] ?? ""), l = Number(a[4] ?? ""), b = Number(a[5] ?? ""), k = a[6] === void 0 ? 0 : Number(a[6]);
  if (c < 100) return null;
  let f = new Date(Date.UTC(c, m, 0)).getUTCDate();
  if (m < 1 || m > 12 || u < 1 || u > f) return null;
  if (l > 24 || b > 59 || k > 59 || l === 24 && (b > 0 || k > 0)) return null;
  let C = Date.parse(o);
  if (Number.isNaN(C)) return null;
  if (!/(?:[Zz]|[+-]\d{2}:?\d{2})$/.test(o)) {
    let h = new Date(Date.UTC(c, m - 1, u, l, b)), E = new Date(C);
    if (E.getFullYear() !== h.getUTCFullYear() || E.getMonth() !== h.getUTCMonth() || E.getDate() !== h.getUTCDate() || E.getHours() !== h.getUTCHours() || E.getMinutes() !== h.getUTCMinutes()) return null;
  }
  let L = Date.UTC(c, m - 1, u, l, b, k);
  if (Math.abs(C - L) > 504e5) return null;
  return new Date(C).toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}

function ao(t, o, a = St) {
  if (t === null || typeof t !== "object" || Array.isArray(t)) return [ {
    kind: "inline",
    key: "input",
    text: "(parameters are not an object \u2014 deny unless expected)",
    unrenderable: !0
  } ];
  let c = Object.entries(t), m = j5(t);
  if (m !== null) return [ {
    kind: "inline",
    key: "input",
    text: m,
    unrenderable: !0,
    parseFailureSentinel: !0
  } ];
  let u = [], l = c.length;
  if (l > sa) return [ {
    kind: "inline",
    key: "input",
    text: `(${l} parameters \u2014 too many to show \u2014 deny unless expected)`,
    unrenderable: !0
  } ];
  let b = [], k = 0, f = 0;
  for (let [h, E] of c) {
    if (h.length > Ve) {
      k += 1;
      continue;
    }
    if (b.push(h), f += h.length, typeof E === "string" && E.length <= Ve) f += E.length;
  }
  if (f > ro) return [ {
    kind: "inline",
    key: "input",
    text: `(parameters total ${f.toLocaleString()} characters \u2014 too much to show \u2014 deny unless expected)`,
    unrenderable: !0
  } ];
  if (k > 0) u.push({
    kind: "inline",
    key: "input",
    text: `(${k} parameter ${k === 1 ? "name is" : "names are"} too large to show \u2014 deny unless expected)`,
    unrenderable: !0
  });
  let C = Ttn(b), M = c.find(([h]) => h === "language")?.[1], L = 0;
  for (let [h, E] of c) {
    if (h.length > Ve) continue;
    let T = C.get(h) ?? h;
    if (zg(h) !== h) {
      L += 1;
      continue;
    }
    if (typeof E === "string") {
      if (E.length > Ve) {
        let U = `(value of ${E.length.toLocaleString()} characters cannot be shown \u2014 deny unless expected)`;
        if (!Fe(T, U, void 0, a)) u.push({
          kind: "block",
          key: T,
          text: U,
          unrenderable: !0
        }); else u.push({
          kind: "inline",
          key: T,
          text: U,
          unrenderable: !0
        });
        continue;
      }
      let g = Ed(E), A = zg(g);
      if (gOe.test(A) || A !== g) {
        let U = `(value of ${E.length.toLocaleString()} characters cannot be shown in full \u2014 deny unless expected)`;
        if (!Fe(T, U, void 0, a)) u.push({
          kind: "block",
          key: T,
          text: U,
          unrenderable: !0
        }); else u.push({
          kind: "inline",
          key: T,
          text: U,
          unrenderable: !0
        });
        continue;
      }
      let Y = A.replace(/\t/g, " ");
      if (A.includes(`\n`) || ie(A) > St) {
        let U = h === "code" && Dr(M) ? Ed(M) : void 0;
        u.push({
          kind: "block",
          key: T,
          text: Y,
          language: U
        });
        continue;
      }
      let re = _(A), B = o?.[h] === "date-time" && ua.test(A) && pa.test(A), q = ca.has(h) && da.test(A) ? Er(new Date(Number(A) * 1e3).toISOString()) ?? void 0 : B || _r.test(A) ? Er(A) ?? void 0 : void 0;
      if (!Fe(T, re, q, a)) {
        let U = h === "code" && Dr(M) ? Ed(M) : void 0;
        u.push({
          kind: "block",
          key: T,
          text: Y,
          annotation: q,
          language: U
        });
        continue;
      }
      let X = la.has(h) ? cVr(A) ?? void 0 : /^https?:\/\/\S+$/.test(A) && !cZ(A) ? A : void 0;
      u.push({
        kind: "inline",
        key: T,
        text: re,
        linkUrl: X,
        annotation: q
      });
      continue;
    }
    if (E === null || typeof E === "number" || typeof E === "boolean") {
      let g = String(E);
      if (!Fe(T, g, void 0, a)) {
        u.push({
          kind: "block",
          key: T,
          text: g
        });
        continue;
      }
      u.push({
        kind: "inline",
        key: T,
        text: g
      });
      continue;
    }
    let O, j = "", v = 0;
    try {
      let g = so(E, 0);
      if (v = g.length, g.length > Ve) {
        let A = `(value of ${g.length.toLocaleString()} formatted characters cannot be shown \u2014 deny unless expected)`;
        if (!Fe(T, A, void 0, a)) u.push({
          kind: "block",
          key: T,
          text: A,
          unrenderable: !0
        }); else u.push({
          kind: "inline",
          key: T,
          text: A,
          unrenderable: !0
        });
        continue;
      }
      j = Ed(g), O = zg(j);
    } catch {
      if (!Fe(T, "(value too large or too deeply nested to render \u2014 deny unless expected)", void 0, a)) u.push({
        kind: "block",
        key: T,
        text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
        unrenderable: !0
      }); else u.push({
        kind: "inline",
        key: T,
        text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
        unrenderable: !0
      });
      continue;
    }
    if (f += v, f > ro) return [ {
      kind: "inline",
      key: "input",
      text: `(parameters total over ${ro.toLocaleString()} rendered characters \u2014 too much to show \u2014 deny unless expected)`,
      unrenderable: !0
    } ];
    if (gOe.test(O) || zg(j) !== j) {
      let g = `(value of ${v.toLocaleString()} formatted characters cannot be shown in full \u2014 deny unless expected)`;
      if (!Fe(T, g, void 0, a)) u.push({
        kind: "block",
        key: T,
        text: g,
        unrenderable: !0
      }); else u.push({
        kind: "inline",
        key: T,
        text: g,
        unrenderable: !0
      });
      continue;
    }
    if (!O.includes(`\n`) && Fe(T, O, void 0, a)) u.push({
      kind: "inline",
      key: T,
      text: O
    }); else u.push({
      kind: "block",
      key: T,
      text: O,
      language: "javascript"
    });
  }
  if (L > 0) u.push({
    kind: "inline",
    key: "input",
    text: `(${L} parameter ${L === 1 ? "name" : "names"} cannot be shown in full \u2014 deny unless expected)`,
    unrenderable: !0
  });
  return u;
}

function fa(t, o) {
  return t.language !== void 0 && o !== null && $oo(t.text, h8t(t.language) ?? t.language) && o.supportsLanguage(t.language);
}

function Nr(t) {
  let c = w(38), {keyText: o, contentColumns: a} = t, m, u, l, b, k, f, C, M, L, h, E, T, O, j, v, g;
  if (c[0] !== a || c[1] !== o) {
    M = _n;
    re: {
      let A = Pc(`${o}:`, Math.max(10, a - 2), {
        hard: !0,
        trim: !1
      });
      let Y = A.indexOf(`\n`);
      if (Y === -1) {
        M = e(n, {
          dimColor: !0,
          children: A
        });
        break re;
      }
      l = s;
      f = "column";
      C = e(n, {
        dimColor: !0,
        children: A.slice(0, Y)
      });
      u = s;
      h = 2;
      E = "single";
      T = !0;
      O = !1;
      j = !1;
      v = !1;
      g = !0;
      k = 1;
      m = n;
      b = !0;
      L = Pc(A.slice(Y + 1).replace(/\n/g, ""), Math.max(10, a - 4), {
        hard: !0,
        trim: !1
      });
    }
    c[0] = a, c[1] = o, c[2] = m, c[3] = u, c[4] = l, c[5] = b, c[6] = k, c[7] = f, 
    c[8] = C, c[9] = M, c[10] = L, c[11] = h, c[12] = E, c[13] = T, c[14] = O, c[15] = j, 
    c[16] = v, c[17] = g;
  } else m = c[2], u = c[3], l = c[4], b = c[5], k = c[6], f = c[7], C = c[8], M = c[9], 
  L = c[10], h = c[11], E = c[12], T = c[13], O = c[14], j = c[15], v = c[16], g = c[17];
  if (M !== _n) return M;
  let B;
  if (c[18] !== m || c[19] !== b || c[20] !== L) B = e(m, {
    dimColor: b,
    children: L
  }), c[18] = m, c[19] = b, c[20] = L, c[21] = B; else B = c[21];
  let H;
  if (c[22] !== u || c[23] !== k || c[24] !== B || c[25] !== h || c[26] !== E || c[27] !== T || c[28] !== O || c[29] !== j || c[30] !== v || c[31] !== g) H = e(u, {
    marginLeft: h,
    borderStyle: E,
    borderLeft: T,
    borderRight: O,
    borderTop: j,
    borderBottom: v,
    borderDimColor: g,
    paddingLeft: k,
    children: B
  }), c[22] = u, c[23] = k, c[24] = B, c[25] = h, c[26] = E, c[27] = T, c[28] = O, 
  c[29] = j, c[30] = v, c[31] = g, c[32] = H; else H = c[32];
  let q;
  if (c[33] !== l || c[34] !== f || c[35] !== C || c[36] !== H) q = r(l, {
    flexDirection: f,
    children: [ C, H ]
  }), c[33] = l, c[34] = f, c[35] = C, c[36] = H, c[37] = q; else q = c[37];
  return q;
}

function lo({entries: t, contentColumns: o}) {
  let [a] = yr(), m = id().syntaxHighlightingDisabled ?? !1, u = R(new Map), l = Z(() => {
    let C = m ? null : aB(), M = new Map, L = t.map(h => {
      if (h.kind !== "block") return null;
      let E = `${a}\0${m}\0${h.language ?? ""}\0${h.text}`, T = M.get(E) ?? u.current.get(E);
      if (T === void 0) T = fa(h, C) && h.language !== void 0 && C !== null ? C.highlight(h.text, {
        language: h.language
      }) : cZ(h.text) ? h.text : d8n(h.text, a);
      return M.set(E, T), T;
    });
    return u.current = M, L;
  }, [ t, a, m ]), b = Z(() => l.map(C => C === null ? null : Pc(C, Math.max(10, o - 4), {
    hard: !0,
    trim: !1
  })), [ l, o ]), k = kze(), f = t.length === 1 && t[0].kind === "inline" && t[0].parseFailureSentinel === !0 ? t[0] : null;
  if (f !== null) return e(n, {
    dimColor: !0,
    children: f.text
  });
  if (t.length === 0) return null;
  return e(s, {
    flexDirection: "column",
    children: t.map((C, M) => C.kind === "inline" ? r(n, {
      children: [ r(n, {
        dimColor: !0,
        children: [ C.key, ": " ]
      }), e(Uo, {
        children: C.linkUrl !== void 0 && k ? qw(C.linkUrl, C.text) : C.text
      }), C.annotation !== void 0 && r(n, {
        dimColor: !0,
        children: [ " (", C.annotation, ")" ]
      }) ]
    }, M) : r(s, {
      flexDirection: "column",
      children: [ e(Nr, {
        keyText: C.key,
        contentColumns: o
      }), e(s, {
        marginLeft: 2,
        borderStyle: "single",
        borderLeft: !0,
        borderRight: !1,
        borderTop: !1,
        borderBottom: !1,
        borderDimColor: !0,
        paddingLeft: 1,
        children: e(Uo, {
          children: b[M] ?? C.text
        })
      }), C.annotation !== void 0 && e(s, {
        marginLeft: 2,
        children: r(n, {
          dimColor: !0,
          children: [ "(", C.annotation, ")" ]
        })
      }) ]
    }, M))
  });
}

function Ua(Va) {
  return Va.unrenderable === !0;
}

function ja(Wa) {
  return KF(Wa);
}

function Ba(Ka) {
  return !Ka;
}

function $a(Ga, wi) {
  return Ga + ie(wi) + (wi.split(/\r\n|[\r\n\u2028\u2029]/).length - 1) * zt;
}

function Lr(t, o, a, c) {
  switch (t) {
   case "yes":
   case "yes-enable-auto-mode":
    return {
      behavior: "allow",
      updatedInput: o.input,
      ...c && {
        feedback: c
      }
    };

   case "yes-dont-ask-again":
    {
      if (a === null || !Nv(a)) return {
        behavior: "allow",
        updatedInput: o.input
      };
      return {
        behavior: "allow",
        updatedInput: o.input,
        permissionUpdates: a.applies
      };
    }

   case "no":
    return {
      behavior: "deny",
      ...c && {
        feedback: c
      }
    };
  }
}

function Or(t, o) {
  return SM([ {
    type: "addRules",
    rules: [ {
      toolName: t.toolName
    } ],
    behavior: "allow",
    destination: "localSettings"
  } ], {
    displayedTypes: ha,
    renderLabel: a => {
      let c = a.length === 1 ? a[0] : void 0;
      if (c === void 0 || c.type !== "addRules" || c.rules.length !== 1 || c.rules[0]?.toolName !== t.toolName || c.rules[0]?.ruleContent !== void 0) return null;
      let m = String(t.userFacingName);
      if (ie(m) >= e3e || m.includes("\u2026")) return null;
      if (o.cwd.includes("\u2026")) return null;
      let u = Math.max(24, o.maxLabelWidth), l = M => `Yes, and don't ask again for ${t.userFacingName} commands in ${M}`, b = Wn(o.cwd);
      if (ie(l(b)) <= u) return l(b);
      if (b !== o.cwd) return null;
      let k = Os(o.cwd);
      if (ie(l(k)) <= u) return l(k);
      let f = pme(k), C = "";
      for (let M = 0; M < f.length; M++) {
        let L = C + f[M];
        if (ie(l(`${L}\u2026`)) > u) break;
        C = L;
      }
      if (C.length > 0) return l(`${C}\u2026`);
      return null;
    }
  });
}

var ha = new Set([ "addRules" ]);

function uo(t) {
  let o = t.permissionResult.decisionReason;
  return zl(o, c => !c.classifierApprovable) !== void 0 || t.isAskCappedByOrg || Qwe(t.requestSource);
}

function Wpn(t) {
  return t.showAlwaysAllow && !uo(t) && nt(t.toolName);
}

var Fr = 2, ya = 16, ba = 24, Ra = 80;

function Ir(t, o) {
  return t && o.columns >= Ra ? Math.max(Fr, Math.min(ya, o.rows - ba)) : Fr;
}

function HNr(t) {
  let l = w(155), {payload: o, answer: a, wouldTakeAnswer: c} = t, m = R(null), u = Te(), b;
  if (l[0] !== u.columns) b = () => Math.max(20, Math.min(40, u.columns - 6)), l[0] = u.columns, 
  l[1] = b; else b = l[1];
  let [k, f] = y(b), C;
  if (l[2] === S) C = () => {
    if (m.current) {
      let {width: M} = ti(m.current);
      if (M > 0) f(Math.max(20, M - 2));
    }
  }, l[2] = C; else C = l[2];
  let L;
  if (l[3] !== u.columns || l[4] !== u.rows) L = [ u.columns, u.rows ], l[3] = u.columns, 
  l[4] = u.rows, l[5] = L; else L = l[5];
  P(C, L);
  let h = Math.min(k, Math.max(20, u.columns - 6)), E;
  if (l[6] !== h || l[7] !== o.input || l[8] !== o.isMcp || l[9] !== o.paramFormatHints) E = o.isMcp ? ao(o.input, o.paramFormatHints, h) : null, 
  l[6] = h, l[7] = o.input, l[8] = o.isMcp, l[9] = o.paramFormatHints, l[10] = E; else E = l[10];
  let T = E, [O] = yr(), j;
  g: {
    if (o.renderedToolUseMessage != null) {
      let v;
      if (l[11] !== o.renderedToolUseMessage) v = {
        node: o.renderedToolUseMessage,
        threw: !1
      }, l[11] = o.renderedToolUseMessage, l[12] = v; else v = l[12];
      j = v;
      break g;
    }
    try {
      let A;
      if (l[13] !== o.input || l[14] !== o.toolName || l[15] !== O) A = Wyt(o.toolName, o.input, {
        theme: O,
        verbose: !0
      }), l[13] = o.input, l[14] = o.toolName, l[15] = O, l[16] = A; else A = l[16];
      let Y;
      if (l[17] !== A) Y = {
        node: A,
        threw: !1
      }, l[17] = A, l[18] = Y; else Y = l[18];
      j = Y;
    } catch (v) {
      let re = v;
      let A;
      if (l[19] !== o.toolName) A = (d(new x(`Error rendering tool use line for ${o.toolName}: ${re}`, "Error rendering tool use line (permission dialog table fallback)")), 
      {
        node: null,
        threw: !0
      }), l[19] = o.toolName, l[20] = A; else A = l[20];
      j = A;
    }
  }
  let {node: B, threw: H} = j, v;
  if (l[21] !== B) v = typeof B === "string" ? Tw(B) : null, l[21] = B, l[22] = v; else v = l[22];
  let q = v, A;
  if (l[23] !== T || l[24] !== q?.kind || l[25] !== o.toolUseRenderFailed || l[26] !== H) A = (T?.some(Ua) ?? !1) || o.toolUseRenderFailed === !0 || H || q?.kind === "withheld", 
  l[23] = T, l[24] = q?.kind, l[25] = o.toolUseRenderFailed, l[26] = H, l[27] = A; else A = l[27];
  let X = A, Y;
  if (l[28] !== o) Y = Wpn(o), l[28] = o, l[29] = Y; else Y = l[29];
  let U = Y, {offered: K, enableAutoMode: W} = AUt(o.requestSource), se;
  if (l[30] === S) se = ke(), l[30] = se; else se = l[30];
  let le = se, z;
  if (l[31] !== U || l[32] !== h || l[33] !== X || l[34] !== o) z = U && !X ? Or(o, {
    cwd: le,
    maxLabelWidth: h - 8
  }) : null, l[31] = U, l[32] = h, l[33] = X, l[34] = o, l[35] = z; else z = l[35];
  let J = z, he;
  if (l[36] !== o) he = uo(o), l[36] = o, l[37] = he; else he = l[37];
  let De = he, ye;
  if (l[38] !== K || l[39] !== X || l[40] !== De) ye = K && !X && !De ? Bpn("workflow") : null, 
  l[38] = K, l[39] = X, l[40] = De, l[41] = ye; else ye = l[41];
  let ce = ye, ee = o.permissionResult.defaultToNo === !0, He;
  if (l[42] !== J || l[43] !== a || l[44] !== W || l[45] !== o || l[46] !== c) He = be => {
    let {value: Ee, feedback: it} = be;
    if (!c()) {
      return !1;
    }
    if (Ee === "yes-enable-auto-mode") W();
    return a(Lr(Ee, o, J, it));
  }, l[42] = J, l[43] = a, l[44] = W, l[45] = o, l[46] = c, l[47] = He; else He = l[47];
  let ne = xk(He), ze = ne.answer, be;
  if (l[48] !== ze) be = (Dt, Et) => ze({
    value: Dt,
    feedback: Et
  }), l[48] = ze, l[49] = be; else be = l[49];
  let Ie = be, Ze = ne.refused === null ? ee ? "no" : void 0 : ne.refused.value === "yes" && !ee ? "yes" : "no", po;
  if (l[50] !== a) po = () => a({
    behavior: "cancelled"
  }), l[50] = a, l[51] = po; else po = l[51];
  let Qe = po;
  const mo = typeof o.description === "string" ? o.description : "";
  let ci;
  if (l[52] !== mo) ci = mo.split(`\n`).filter(ja).join(`\n`).trim(), l[52] = mo, 
  l[53] = ci; else ci = l[53];
  let at = ci, cn;
  gu: {
    if (q === null) {
      cn = B;
      break gu;
    }
    if (q.kind === "withheld") {
      cn = q.marker;
      break gu;
    }
    let lt;
    if (l[54] !== q.text) lt = Oi(q.text).replace(/\s+/g, " ").trim(), l[54] = q.text, 
    l[55] = lt; else lt = l[55];
    cn = lt;
  }
  let Je = cn, ct = o.isMcp ? Math.max(10, h - 2) : h;
  const lt = o.roomyDescription === !0;
  let di;
  if (l[56] !== lt || l[57] !== u) di = Ir(lt, u), l[56] = lt, l[57] = u, l[58] = di; else di = l[58];
  let fo = di, ui;
  if (l[59] !== fo || l[60] !== ct || l[61] !== at) ui = Lqn(at, ct, fo), l[59] = fo, 
  l[60] = ct, l[61] = at, l[62] = ui; else ui = l[62];
  let Ue = ui, pi;
  if (l[63] !== ct || l[64] !== at) pi = Lqn(at, ct, Number.MAX_SAFE_INTEGER), l[63] = ct, 
  l[64] = at, l[65] = pi; else pi = l[65];
  let dn = pi, dt = dn !== Ue, [un, Ya] = y(!1), go = ka("app:toggleTranscript", "Global", "ctrl+o"), mi;
  if (l[66] === S) mi = [ {
    action: "app:toggleTranscript",
    run: () => Ya(Ba)
  } ], l[66] = mi; else mi = l[66];
  let qa = mi, fi;
  if (l[67] === S) fi = {
    label: "Yes",
    value: "yes",
    feedbackConfig: {
      type: "accept"
    }
  }, l[67] = fi; else fi = l[67];
  let gi = fi, hi;
  if (l[68] === S) hi = {
    label: "No",
    value: "no",
    feedbackConfig: {
      type: "reject"
    }
  }, l[68] = hi; else hi = l[68];
  let yi = hi, At;
  if (l[69] !== J || l[70] !== ce || l[71] !== ee) {
    At = ee ? [ yi, gi ] : [ gi ];
    if (J !== null) {
      if (typeof J.node === "string") {
        let Re;
        if (l[73] !== J.node) Re = {
          label: J.node,
          value: "yes-dont-ask-again"
        }, l[73] = J.node, l[74] = Re; else Re = l[74];
        At.push(Re);
      }
    }
    if (ce !== null) {
      if (typeof ce.node === "string") {
        let Re;
        if (l[75] !== ce.node) Re = {
          label: ce.node,
          description: jpn,
          value: "yes-enable-auto-mode"
        }, l[75] = ce.node, l[76] = Re; else Re = l[76];
        At.push(Re);
      }
    }
    if (!ee) At.push(yi);
    l[69] = J, l[70] = ce, l[71] = ee, l[72] = At;
  } else At = l[72];
  let pt = At, Re;
  if (l[77] !== o.toolName) Re = $n(o.toolName), l[77] = o.toolName, l[78] = Re; else Re = l[78];
  let bi;
  if (l[79] !== o.isMcp || l[80] !== Re) bi = {
    toolName: Re,
    isMcp: o.isMcp
  }, l[79] = o.isMcp, l[80] = Re, l[81] = bi; else bi = l[81];
  let mt = bi, pe = o.toolUseRenderFailed === !0 ? void 0 : o.card;
  if (pe !== void 0 && [ pe.question, ...pe.lines, ...pe.values ].reduce($a, 0) <= eo) {
    let ki = o.requestSource === void 0 && !pe.question.includes(`\n`) && ie(pe.question) <= Math.min(h, u.columns - 2);
    const ft = ki ? void 0 : pe.question;
    let pn;
    if (l[82] !== pe || l[83] !== k || l[84] !== ft || l[85] !== u.columns) pn = no({
      ...pe,
      question: ft
    }, Math.min(k, u.columns - 6) - to), l[82] = pe, l[83] = k, l[84] = ft, l[85] = u.columns, 
    l[86] = pn; else pn = l[86];
    let _t = pn;
    const je = ki ? pe.question : o.userFacingName;
    let Ae;
    if (l[87] !== _t) Ae = _t.rows.length > 0 && e(El, {
      children: e(Zt, {
        card: _t
      })
    }), l[87] = _t, l[88] = Ae; else Ae = l[88];
    let Be;
    if (l[89] !== Ae) Be = e(s, {
      ref: m,
      width: "100%",
      flexDirection: "column",
      children: Ae
    }), l[89] = Ae, l[90] = Be; else Be = l[90];
    const $e = _t.rows.length === 0 ? 1 : 0;
    let _e;
    if (l[91] !== Qe || l[92] !== Ie || l[93] !== ee || l[94] !== pt || l[95] !== o.requestSource || l[96] !== ne.attempts || l[97] !== Ze || l[98] !== mt) _e = e(VX, {
      question: null,
      options: pt,
      defaultFocusValue: Ze,
      hideIndexes: ee,
      onSelect: Ie,
      onCancel: Qe,
      toolAnalyticsContext: mt,
      requestSource: o.requestSource
    }, ne.attempts), l[91] = Qe, l[92] = Ie, l[93] = ee, l[94] = pt, l[95] = o.requestSource, 
    l[96] = ne.attempts, l[97] = Ze, l[98] = mt, l[99] = _e; else _e = l[99];
    let Ne;
    if (l[100] !== $e || l[101] !== _e) Ne = e(s, {
      paddingX: 1,
      marginTop: $e,
      children: _e
    }), l[100] = $e, l[101] = _e, l[102] = Ne; else Ne = l[102];
    let tt;
    if (l[103] !== o.requestSource || l[104] !== je || l[105] !== Be || l[106] !== Ne) tt = r(Ca, {
      title: je,
      innerPaddingX: 0,
      requestSource: o.requestSource,
      children: [ Be, Ne ]
    }), l[103] = o.requestSource, l[104] = je, l[105] = Be, l[106] = Ne, l[107] = tt; else tt = l[107];
    return tt;
  }
  let ft;
  if (l[108] !== Ue || l[109] !== un || l[110] !== dt || l[111] !== go || l[112] !== dn || l[113] !== T?.length || l[114] !== o.isMcp || l[115] !== o.userFacingName) ft = Ue !== "" && r(s, {
    width: "100%",
    flexDirection: "column",
    paddingX: 1,
    marginTop: T?.length === 0 ? 1 : 0,
    marginBottom: o.isMcp ? 1 : 0,
    children: [ o.isMcp && r(n, {
      italic: !0,
      wrap: "truncate-end",
      children: [ "About the ", e(n, {
        bold: !0,
        children: o.userFacingName
      }), " Tool:" ]
    }), e(s, {
      borderStyle: "single",
      borderLeft: !0,
      borderRight: !1,
      borderTop: !1,
      borderBottom: !1,
      borderDimColor: !0,
      paddingLeft: 1,
      children: e(n, {
        dimColor: !0,
        italic: o.isMcp,
        children: un ? dn : Ue
      })
    }), dt && e(n, {
      dimColor: !0,
      children: e(G, {
        chord: go,
        action: un ? "collapse description" : "expand description",
        parens: !0,
        format: {
          keyCase: "lower"
        }
      })
    }) ]
  }), l[108] = Ue, l[109] = un, l[110] = dt, l[111] = go, l[112] = dn, l[113] = T?.length, 
  l[114] = o.isMcp, l[115] = o.userFacingName, l[116] = ft; else ft = l[116];
  let mn = ft;
  const pn = o.requestSource;
  let je;
  if (l[117] !== Ue || l[118] !== mn || l[119] !== T?.length || l[120] !== o.hasMcpSuffix || l[121] !== o.isMcp || l[122] !== o.userFacingName) je = o.isMcp ? r(s, {
    flexDirection: "row",
    paddingX: 1,
    marginBottom: T?.length === 0 && Ue === "" ? 1 : 0,
    children: [ e(n, {
      wrap: "truncate-end",
      children: r(n, {
        bold: !0,
        children: [ o.userFacingName, " Tool:" ]
      })
    }), o.hasMcpSuffix ? e(s, {
      flexShrink: 0,
      children: e(n, {
        dimColor: !0,
        children: " (MCP)"
      })
    }) : null ]
  }) : mn, l[117] = Ue, l[118] = mn, l[119] = T?.length, l[120] = o.hasMcpSuffix, 
  l[121] = o.isMcp, l[122] = o.userFacingName, l[123] = je; else je = l[123];
  let Ae;
  if (l[124] !== Je || l[125] !== h || l[126] !== T || l[127] !== o.hasMcpSuffix || l[128] !== o.userFacingName) Ae = (T === null || T.length > 0) && e(El, {
    children: T !== null ? e(lo, {
      entries: T,
      contentColumns: h
    }) : e(Ei, {
      multiline: typeof Je === "string" && tS(`${o.userFacingName}(${Je})`),
      children: r(n, {
        children: [ o.userFacingName, Je != null && Je !== "" && r(Q, {
          children: [ "(", Je, ")" ]
        }), o.hasMcpSuffix ? e(n, {
          dimColor: !0,
          children: " (MCP)"
        }) : "" ]
      })
    })
  }), l[124] = Je, l[125] = h, l[126] = T, l[127] = o.hasMcpSuffix, l[128] = o.userFacingName, 
  l[129] = Ae; else Ae = l[129];
  const Be = o.isMcp && mn;
  let $e;
  if (l[130] !== je || l[131] !== Ae || l[132] !== Be) $e = r(s, {
    ref: m,
    width: "100%",
    flexDirection: "column",
    children: [ je, Ae, Be ]
  }), l[130] = je, l[131] = Ae, l[132] = Be, l[133] = $e; else $e = l[133];
  let _e;
  if (l[134] !== o.permissionResult) _e = e($v, {
    permissionResult: o.permissionResult,
    toolType: "tool"
  }), l[134] = o.permissionResult, l[135] = _e; else _e = l[135];
  let Ne;
  if (l[136] !== Qe || l[137] !== Ie || l[138] !== ee || l[139] !== pt || l[140] !== o.requestSource || l[141] !== ne.attempts || l[142] !== Ze || l[143] !== mt) Ne = e(VX, {
    options: pt,
    defaultFocusValue: Ze,
    hideIndexes: ee,
    onSelect: Ie,
    onCancel: Qe,
    toolAnalyticsContext: mt,
    requestSource: o.requestSource
  }, ne.attempts), l[136] = Qe, l[137] = Ie, l[138] = ee, l[139] = pt, l[140] = o.requestSource, 
  l[141] = ne.attempts, l[142] = Ze, l[143] = mt, l[144] = Ne; else Ne = l[144];
  let tt;
  if (l[145] !== _e || l[146] !== Ne) tt = r(s, {
    flexDirection: "column",
    paddingX: 1,
    children: [ _e, Ne ]
  }), l[145] = _e, l[146] = Ne, l[147] = tt; else tt = l[147];
  let fn;
  if (l[148] !== o.requestSource || l[149] !== $e || l[150] !== tt) fn = r(Ca, {
    title: "Tool use",
    innerPaddingX: 0,
    requestSource: pn,
    children: [ $e, tt ]
  }), l[148] = o.requestSource, l[149] = $e, l[150] = tt, l[151] = fn; else fn = l[151];
  let Ri;
  if (l[152] !== dt || l[153] !== fn) Ri = e(DE, {
    bindings: qa,
    active: dt,
    flexDirection: "column",
    children: fn
  }), l[152] = dt, l[153] = fn, l[154] = Ri; else Ri = l[154];
  return Ri;
}

export { wMe, WEe, EQe, w6n, aBo, MWe, EUt, kUt, wte, EL, v6n, Ei, Nv, lBo, SM, zEe, Upn, E6n, MNr, Bpn, k6n, TUt, $v, jpn, AUt, CUt, GEe, vMe, VX, Wpn, HNr };
