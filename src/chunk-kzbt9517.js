// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E } from "./chunk-b0z4bv3v.js";

import { Un, Mm } from "./chunk-ddr690nj.js";

import { WX } from "./chunk-vxr6sv7z.js";

import { ke } from "./chunk-3pqddg8f.js";

import { o6 } from "./chunk-6ah1819r.js";

import { ge } from "./chunk-07cck4g7.js";

import { w } from "./chunk-9rj1xaxr.js";

import { Pe, _S } from "./chunk-7w995nyx.js";

import { Lfe, pu } from "./chunk-q6wab2jw.js";

import { is } from "./chunk-1pxjahnn.js";

import { an, s, n } from "./chunk-3vw306fv.js";

import { rt } from "./chunk-ytac37d4.js";

import { i } from "./chunk-hedpgw9m.js";

import { zc } from "./chunk-9yajep3y.js";

import { ie, ut, Lw, lln } from "./chunk-yxennhe9.js";

import { r$t } from "./chunk-60c97a4m.js";

import { QCe } from "./chunk-2kzvcfy0.js";

import { ac } from "./chunk-qvbrx5kg.js";

import { Zo } from "./chunk-a5nr78wg.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { dLn, DYe } from "./chunk-sqb9meyh.js";

import { Fy, Ob } from "./chunk-vdnjpwkk.js";

import { LE } from "./chunk-wpjx0bxn.js";

import { NAe, wQ, Mxn, EOn, cV, Nf, Lre, fCe } from "./chunk-84yp45y8.js";

import { G } from "./chunk-j706jx8h.js";

import { Se } from "./chunk-sebqm9p5.js";

import { Vw } from "./chunk-s0van10s.js";

import { Er } from "./chunk-t54wevgw.js";

import { $ae, Fae } from "./chunk-dq0ypg23.js";

import { Uae } from "./chunk-yc5878w5.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { _o } from "./chunk-2enjs241.js";

import { $r } from "./chunk-mggq5sa8.js";

import { Bv, os } from "./chunk-wwjrcnvz.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { ae, _7, P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { co } from "./chunk-k5d016nk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { S } from "./chunk-m8ez8fhk.js";

import { basename as gn, sep as xn } from "path";

F();

F();

function Ct(o) {
  let f = w(36), {log: d, onExit: c, onSelect: l} = o, [p, h] = y(null), {storageV5: x} = Pe(), _, k;
  if (f[0] !== d || f[1] !== x) _ = () => {
    if (h(null), Lre(d)) fCe(d, {
      storageV5: x
    }).then(h);
  }, k = [ d, x ], f[0] = d, f[1] = x, f[2] = _, f[3] = k; else _ = f[2], k = f[3];
  P(_, k);
  let T = Lre(d) && p === null, g = p ?? d, z;
  if (f[4] !== g.messages) z = NAe(wQ(Mxn(g.messages)), {
    site: "preview"
  }), f[4] = g.messages, f[5] = z; else z = f[5];
  let ee = z, Qe;
  if (f[6] !== g) Qe = Nf(g) || "", f[6] = g, f[7] = Qe; else Qe = f[7];
  let Ne = Qe, oe;
  if (f[8] === S) oe = Vw(), f[8] = oe; else oe = f[8];
  let Le = oe, B;
  if (f[9] === S) B = {
    context: "Confirmation"
  }, f[9] = B; else B = f[9];
  rt("confirm:no", c, B);
  let De;
  if (f[10] !== p || f[11] !== d || f[12] !== l) De = () => {
    l(p ?? d);
  }, f[10] = p, f[11] = d, f[12] = l, f[13] = De; else De = f[13];
  let L = De, re;
  if (f[14] === S) re = {
    context: "Confirmation"
  }, f[14] = re; else re = f[14];
  if (rt("confirm:yes", L, re), T) {
    let M;
    if (f[15] === S) M = e($r, {
      message: "Loading session\u2026"
    }), f[15] = M; else M = f[15];
    let K;
    if (f[16] === S) K = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [ M, e(n, {
        dimColor: !0,
        children: e(Se, {
          children: e(pt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
          })
        })
      }) ]
    }), f[16] = K; else K = f[16];
    return K;
  }
  let M;
  if (f[17] === S) M = e($ae, {
    latchAnnouncementSlot: !1
  }), f[17] = M; else M = f[17];
  let K;
  if (f[18] !== Ne || f[19] !== ee) K = {
    kind: "static",
    messages: ee,
    conversationId: Ne
  }, f[18] = Ne, f[19] = ee, f[20] = K; else K = f[20];
  let U;
  if (f[21] === S) U = [], f[21] = U; else U = f[21];
  let se;
  if (f[22] !== K) se = e(Fae, {
    source: K,
    tools: Le,
    commands: U,
    screen: "transcript",
    history: "all"
  }), f[22] = K, f[23] = se; else se = f[23];
  let A;
  if (f[24] !== g.modified) A = Lw(g.modified), f[24] = g.modified, f[25] = A; else A = f[25];
  const be = g.gitBranch ? ` \xb7 ${g.gitBranch}` : "";
  let W;
  if (f[26] !== g.messageCount || f[27] !== A || f[28] !== be) W = r(n, {
    children: [ A, " \xb7", " ", g.messageCount, " messages", be ]
  }), f[26] = g.messageCount, f[27] = A, f[28] = be, f[29] = W; else W = f[29];
  let ye;
  if (f[30] === S) ye = e(n, {
    dimColor: !0,
    children: r(Se, {
      children: [ e(G, {
        chord: "enter",
        action: "resume"
      }), e(pt, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "cancel"
      }) ]
    })
  }), f[30] = ye; else ye = f[30];
  let j;
  if (f[31] !== W) j = r(s, {
    flexShrink: 0,
    flexDirection: "column",
    borderTopDimColor: !0,
    borderBottom: !1,
    borderLeft: !1,
    borderRight: !1,
    borderStyle: "single",
    paddingLeft: 2,
    children: [ W, ye ]
  }), f[31] = W, f[32] = j; else j = f[32];
  let _e;
  if (f[33] !== se || f[34] !== j) _e = r(s, {
    flexDirection: "column",
    children: [ M, se, j ]
  }), f[33] = se, f[34] = j, f[35] = _e; else _e = f[35];
  return _e;
}

F();

function uo(kt) {
  return kt ? "\u25bc " : "\u25b6 ";
}

function po(Cn) {
  return "  \u25b8 ";
}

function Nt(o) {
  let L = w(49), {nodes: d, onSelect: c, onCancel: l, onFocus: p, focusNodeId: h, visibleOptionCount: x, layout: f, isDisabled: _, hidePromptWhileDisabled: k, hideIndexes: T, isNodeExpanded: g, onExpand: z, onCollapse: ee, getParentPrefix: Qe, getChildPrefix: Ne, onUpFromFirstItem: oe} = o, Le = f === void 0 ? "expanded" : f, B = _ === void 0 ? !1 : _, De = T === void 0 ? !1 : T, re;
  if (L[0] === S) re = new Set, L[0] = re; else re = L[0];
  let [M, K] = y(re), U = R(!1), se = R(null), A;
  if (L[1] !== M || L[2] !== g) A = be => {
    if (g) {
      return g(be);
    }
    return M.has(be);
  }, L[1] = M, L[2] = g, L[3] = A; else A = L[3];
  let W = A, ye;
  if (L[4] !== W || L[5] !== d) {
    ye = [];
    function Fe(j, _e, Ke) {
      let lt = !!j.children && j.children.length > 0;
      let Ve = W(j.id);
      if (ye.push({
        node: j,
        depth: _e,
        isExpanded: Ve,
        hasChildren: lt,
        parentId: Ke
      }), lt && Ve && j.children) {
        for (const _t of j.children) Fe(_t, _e + 1, j.id);
      }
    }
    for (const ct of d) Fe(ct, 0);
    L[4] = W, L[5] = d, L[6] = ye;
  } else ye = L[6];
  let V = ye, X = uo, qe = po, te = Qe ?? X, ze = Ne ?? qe, ft;
  if (L[7] !== ze || L[8] !== te) ft = de => {
    let Re = "";
    if (de.hasChildren) Re = te(de.isExpanded); else if (de.depth > 0) Re = ze(de.depth);
    return Re + de.node.label;
  }, L[7] = ze, L[8] = te, L[9] = ft; else ft = L[9];
  let Me = ft, mt;
  if (L[10] !== Me || L[11] !== V) mt = V.map(Y => ({
    label: Me(Y),
    description: Y.node.description,
    dimDescription: Y.node.dimDescription ?? !0,
    value: Y.node.id
  })), L[10] = Me, L[11] = V, L[12] = mt; else mt = L[12];
  let Ye = mt, C;
  if (L[13] !== V) {
    let D = new Map;
    C = (V.forEach(Ze => D.set(Ze.node.id, Ze.node)), D);
    L[13] = V, L[14] = C;
  } else C = L[14];
  let Q = C, le;
  if (L[15] !== V) le = Je => V.find(Ft => Ft.node.id === Je), L[15] = V, L[16] = le; else le = L[16];
  let ce = le, ht;
  if (L[17] !== ce || L[18] !== ee || L[19] !== z) ht = (J, Ce) => {
    let q = ce(J);
    if (!q || !q.hasChildren) {
      return;
    }
    if (Ce) {
      if (z) z(J); else K(gt => new Set(gt).add(J));
    } else if (ee) ee(J); else K(Ee => {
      let Oe = new Set(Ee);
      return Oe.delete(J), Oe;
    });
  }, L[17] = ce, L[18] = ee, L[19] = z, L[20] = ht; else ht = L[20];
  let ue = ht, et;
  if (L[21] !== ce || L[22] !== h || L[23] !== B || L[24] !== Q || L[25] !== p || L[26] !== ue) et = pe => {
    if (!h || B) {
      return;
    }
    let H = ce(h);
    if (!H) {
      return;
    }
    if (pe.key === "right" && H.hasChildren) pe.preventDefault(), ue(h, !0); else if (pe.key === "left") {
      if (H.hasChildren && H.isExpanded) pe.preventDefault(), ue(h, !1); else if (H.parentId !== void 0) {
        if (pe.preventDefault(), U.current = !0, ue(H.parentId, !1), p) {
          let tt = Q.get(H.parentId);
          if (tt) p(tt);
        }
      }
    }
  }, L[21] = ce, L[22] = h, L[23] = B, L[24] = Q, L[25] = p, L[26] = ue, L[27] = et; else et = L[27];
  let v = et, Be;
  if (L[28] !== Q || L[29] !== c) Be = xt => {
    let Ie = Q.get(xt);
    if (!Ie) {
      return;
    }
    c(Ie);
  }, L[28] = Q, L[29] = c, L[30] = Be; else Be = L[30];
  let nt = Be, I;
  if (L[31] !== Q || L[32] !== p) I = ot => {
    if (U.current) {
      U.current = !1;
      return;
    }
    if (se.current === ot) {
      return;
    }
    if (se.current = ot, p) {
      let bt = Q.get(ot);
      if (bt) p(bt);
    }
  }, L[31] = Q, L[32] = p, L[33] = I; else I = L[33];
  let st = I, We;
  if (L[34] !== h || L[35] !== nt || L[36] !== st || L[37] !== De || L[38] !== k || L[39] !== B || L[40] !== Le || L[41] !== l || L[42] !== oe || L[43] !== Ye || L[44] !== x) We = e(Xe, {
    options: Ye,
    onChange: nt,
    onFocus: st,
    onCancel: l,
    defaultFocusValue: h,
    visibleOptionCount: x,
    layout: Le,
    isDisabled: B,
    hidePromptWhileDisabled: k,
    hideIndexes: De,
    onUpFromFirstItem: oe
  }), L[34] = h, L[35] = nt, L[36] = st, L[37] = De, L[38] = k, L[39] = B, L[40] = Le, 
  L[41] = l, L[42] = oe, L[43] = Ye, L[44] = x, L[45] = We; else We = L[45];
  let yt;
  if (L[46] !== v || L[47] !== We) yt = e(s, {
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: v,
    children: We
  }), L[46] = v, L[47] = We, L[48] = yt; else yt = L[48];
  return yt;
}

function fo(o, d) {
  let c = o.replace(/\s+/g, " ").trim();
  return ut(c, d);
}

var mo = 2, ho = 4, go = 2e3, bn = 1e3, yn = 5e4, xo = .3, bo = 6e4, yo = 50, So = 5;

function Sn({before: o, match: d, after: c}, l) {
  return ge.dim(o) + l(d) + ge.dim(c);
}

function Co(o) {
  return o.replace(new RegExp(dLn.source + '[^,\\s"]*', "g"), d => {
    let c = DYe(d);
    return c ? `PR #${c.prNumber} ${c.prRepository}` : d;
  });
}

function To(o, d, c) {
  let l = o.toLowerCase().indexOf(d.toLowerCase());
  if (l === -1) return null;
  let p = l + d.length, h = Math.max(0, l - c), x = Math.min(o.length, p + c), f = o.slice(h, l), _ = o.slice(l, p), k = o.slice(p, x);
  return {
    before: (h > 0 ? "\u2026" : "") + f.replace(/\s+/g, " ").trimStart(),
    match: _.trim(),
    after: k.replace(/\s+/g, " ").trimEnd() + (x < o.length ? "\u2026" : "")
  };
}

function Lt(o, d, c) {
  let {isGroupHeader: l = !1, isChild: p = !1, forkCount: h = 0} = c || {}, x = l && h > 0 ? mo : p ? ho : 0, f = l && h > 0 ? ` (+${h} other ${h === 1 ? "session" : "sessions"})` : "", _ = o.isSidechain ? " (sidechain)" : "", k = o.artifactCount !== void 0 && o.artifactCount > 0 ? `  ${pu} ${o.artifactCount}` : "", T = d - x - _.length - f.length - ie(k);
  return `${fo(o6(o), T)}${_}${f}${k}`;
}

function Dt(o, d) {
  let {isChild: c = !1, showProjectPath: l = !1} = d || {}, p = c ? "    " : "", h = lln(o), x = l && o.projectPath ? ` \xb7 ${o.projectPath}` : "";
  return p + h + x;
}

function afn({logs: o, maxHeight: d = 1 / 0, forceWidth: c, onCancel: l, onSelect: p, onLogsChanged: h, onLoadMore: x, initialSearchQuery: f, isLoading: _ = !1, reloadGeneration: k = 0, showAllProjects: T = !1, onToggleAllProjects: g, currentSessionId: z}) {
  let {storageV5: ee} = Pe(), Qe = is(Te()), Ne = c === void 0 ? Qe.columns : c, oe = Zo(l), Le = ac(), B = an(), De = !1, L = _S(), re = Z(() => t => QCe(t, L.warning), [ L.warning ]), [M, K] = y(null), [U, se] = y(!0), [A, be] = y(!1), [W, ye] = y(!1), [j, _e] = y(null), [Ke, lt] = y(null), [Ve, _t] = y([]), [Fe, ct] = y(!1), V = LE(), [X] = y(() => V.originalCwd), [qe, te] = y(""), [ze, ft] = y(0), [de, Re] = y(new Set), [Me, mt] = y(null), [Y, Ye] = y(1), [C, D] = y(f ? "search" : "list"), [Ze, Q] = y(null), {query: le, setQuery: Je, cursorOffset: Ft, handleKeyDown: ce, handlePaste: ht} = Fy({
    isActive: C === "search",
    onExit: () => {
      D("list"), i("tengu_session_search_toggled", {
        enabled: !1
      });
    },
    onExitUp: () => {
      D("list"), i("tengu_session_search_toggled", {
        enabled: !1
      });
    },
    passthroughCtrlKeys: o.length === 0 ? [ "n", "a" ] : [ "n" ],
    initialQuery: f || ""
  }), J = Co(le), Ce = _7(J), [q, gt] = y("");
  P(() => {
    if (!Ce) {
      gt("");
      return;
    }
    return B.setTimeout(() => gt(Ce), 300);
  }, [ Ce, B ]);
  let [Ee, Oe] = y(null), ue = !1;
  P(() => {
    zc().then(a => K(a));
    let t = Date.now();
    r$t(X).then(async a => (a.length, a)).then(a => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: a.length,
        success: !0
      }), ye(a.length > 1), _t(a), _e(a[0] ?? null);
      let m = a.filter(u => X === u || X.startsWith(u + xn));
      m.sort((u, N) => N.length - u.length), lt(m[0] ?? null), ct(!0);
    }).catch(() => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: 0,
        success: !1
      }), ct(!0);
    });
  }, [ X ]);
  let et = Z(() => new Map(o.map(t => [ t, Io(t) ])), [ o ]), pe = Z(() => null, [ o, et, !1 ]), H = Z(() => {
    let t = o.filter(a => {
      let m = Nf(a);
      if (z && m === z) return !0;
      if (a.customTitle ?? a.aiTitle) return !0;
      if (EOn(a.messages)) return !0;
      if (a.firstPrompt || a.customTitle || a.aiTitle) return !0;
      return !1;
    });
    if (!U && M) t = t.filter(a => a.gitBranch === M);
    if (W && !A && !T) {
      let a = Ke ?? X;
      t = t.filter(m => {
        if (m.isAlias) return !0;
        let u = m.projectPath;
        if (u === void 0) return !1;
        let N = null;
        for (let b of Ve) if (u === b || u.startsWith(b + xn)) {
          if (N === null || b.length > N.length) N = b;
        }
        if (N === null) return u === a;
        return N === a;
      });
    }
    return t;
  }, [ o, z, U, M, W, A, T, X, Ke, Ve ]), tt = Z(() => {
    if (!J) return H;
    let t = J.toLowerCase();
    return H.filter(a => {
      let m = o6(a).toLowerCase(), u = (a.gitBranch || "").toLowerCase(), N = (a.tag || "").toLowerCase(), b = a.prNumber ? `pr #${a.prNumber} ${a.prRepository || ""}`.toLowerCase() : "";
      return m.includes(t) || u.includes(t) || N.includes(t) || b.includes(t);
    });
  }, [ H, J ]);
  P(() => {
    Oe(null);
    return;
  }, [ q, Ce, pe, !1, B ]);
  let {filteredLogs: v, snippets: Be} = Z(() => {
    let t = new Map, a = tt;
    if (Ee && q && Ee.query === q) {
      for (let b of Ee.results) if (b.searchableText) {
        let fe = To(b.searchableText, q, yo);
        if (fe) t.set(b.log, fe);
      }
      let m = new Set(a.map(b => b.messages[0]?.uuid)), u = new Set(H), N = Ee.results.map(b => b.log).filter(b => !m.has(b.messages[0]?.uuid) && u.has(b));
      a = [ ...a, ...N ];
    }
    return {
      filteredLogs: a,
      snippets: t
    };
  }, [ tt, Ee, q, H ]), xt = Ne - 2 * Bv, Ie = Math.max(30, xt - 4), nt = Z(() => {
    let t = vo(v);
    return Array.from(t.entries()).map(([a, m]) => {
      let u = m[0], N = v.indexOf(u), b = Be.get(u), fe = b ? Sn(b, re) : null;
      if (m.length === 1) {
        let ne = Dt(u, {
          showProjectPath: T
        });
        return {
          id: `log:${a}:0`,
          value: {
            log: u,
            indexInFiltered: N
          },
          label: Lt(u, Ie),
          description: fe ? `${ne}\n  ${fe}` : ne,
          dimDescription: !0
        };
      }
      let wn = m.length - 1, Pn = m.slice(1).map((ne, Nn) => {
        let Ln = v.indexOf(ne), Wt = Be.get(ne), $t = Wt ? Sn(Wt, re) : null, jt = Dt(ne, {
          isChild: !0,
          showProjectPath: T
        });
        return {
          id: `log:${a}:${Nn + 1}`,
          value: {
            log: ne,
            indexInFiltered: Ln
          },
          label: Lt(ne, Ie, {
            isChild: !0
          }),
          description: $t ? `${jt}\n      ${$t}` : jt,
          dimDescription: !0
        };
      }), Bt = Dt(u, {
        showProjectPath: T
      });
      return {
        id: `group:${a}`,
        value: {
          log: u,
          indexInFiltered: N
        },
        label: Lt(u, Ie, {
          isGroupHeader: !0,
          forkCount: wn
        }),
        description: fe ? `${Bt}\n  ${fe}` : Bt,
        dimDescription: !0,
        children: Pn
      };
    });
  }, [ v, Ie, T, Be, re ]), I = Me?.value.log ?? null, ot = () => {
    if (!I) return "";
    let t = Nf(I);
    if (!t) return "";
    let a = v.filter(b => Nf(b) === t);
    if (!(a.length > 1)) return "";
    let u = de.has(t);
    if (a.indexOf(I) > 0 || u) return e(G, {
      chord: "left",
      action: "collapse"
    });
    return e(G, {
      chord: "right",
      action: "expand"
    });
  }, bt = async () => {
    let t = I ? Nf(I) : void 0;
    if (!I || !t) {
      D("list"), te("");
      return;
    }
    if (qe.trim()) {
      if (await cV(t, qe.trim(), I.fullPath, "user", ee), h) h();
    }
    D("list"), te("");
  }, st = () => {
    D("list"), Je(""), i("tengu_session_search_toggled", {
      enabled: !1
    });
  }, We = () => {
    D("search"), i("tengu_session_search_toggled", {
      enabled: !0
    });
  };
  P(() => {
    if (k === 0) return;
    Oe(null);
  }, [ k ]);
  let yt = t => {
    mt(t);
    let a = v.findIndex(m => Nf(m) === Nf(t.value.log));
    if (a >= 0) Ye(a + 1);
  };
  rt("confirm:no", () => {
    D("list"), te("");
  }, {
    context: "Settings",
    isActive: C === "rename"
  });
  function kt(t) {
    if (C === "preview") return;
    if (C === "rename") ; else if (C === "search") {
      if (ce(t), t.ctrl && t.key === "n") t.preventDefault(), st(); else if (t.ctrl && t.key === "a" && g && o.length === 0) t.preventDefault(), 
      g(), i("tengu_session_all_projects_toggled", {
        enabled: T
      });
    } else {
      if (v.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        t.preventDefault(), D("search");
        return;
      }
      let a = !t.ctrl && !t.meta, m = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && g) t.preventDefault(), g(), i("tengu_session_all_projects_toggled", {
        enabled: T
      }); else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let u = !U;
        se(u), i("tengu_session_branch_filter_toggled", {
          enabled: !u
        });
      } else if (t.ctrl && t.key === "w" && W) {
        t.preventDefault();
        let u = !A;
        be(u), i("tengu_session_worktree_filter_toggled", {
          enabled: !u
        });
      } else if (m === "/" && a) t.preventDefault(), D("search"), i("tengu_session_search_toggled", {
        enabled: !0
      }); else if (t.ctrl && t.key === "r" && I) t.preventDefault(), D("rename"), te(""), 
      i("tengu_session_rename_started", {}); else if ((t.key === " " && a || t.ctrl && t.key === "v") && I) t.preventDefault(), 
      Q(I), D("preview"), i("tengu_session_preview_opened", {
        messageCount: I.messageCount
      }); else if (!t.defaultPrevented && a && t.key.length === 1 && t.key !== " ") t.preventDefault(), 
      D("search"), Je(t.key), i("tengu_session_search_toggled", {
        enabled: !0
      });
    }
  }
  function Cn(t) {
    if (C === "search") {
      ht(t);
      return;
    }
    let a = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (C === "preview" || C === "rename" || !I || !a) return;
    t.preventDefault(), D("search"), Je(a), i("tengu_session_search_toggled", {
      enabled: !0
    });
  }
  let ve = [], Rt = !!g && !T && Fe, Mt = j ?? X;
  if (Rt) ve.push(gn(Mt));
  if (!U && M) ve.push(M);
  if (W && !A && !T) {
    let t = Ke ?? X;
    if (!(Rt && Mt === t)) ve.push(gn(t));
  }
  let Tn = !!g && !T && !Fe, Ot = (ve.length > 0 || Tn) && C !== "search", En = 8 + (Ot ? 1 : 0), In = 2, $e = Math.max(1, Math.floor((d - En - In) / 3)), vn = o.length, it = R({
    focusedIndex: -1,
    visible: -1,
    empty: 0
  });
  if (P(() => {
    if (!x) return;
    let t = it.current;
    if (t.focusedIndex !== Y || t.visible !== v.length) it.current = {
      focusedIndex: Y,
      visible: v.length,
      empty: 0
    };
    let a = $e * 2;
    if (Y + a >= v.length && it.current.empty < So) it.current.empty++, x($e * 3);
  }, [ Y, $e, v.length, vn, x ]), o.length === 0 && !g) return null;
  if (C === "preview" && Ze) return e(Ct, {
    log: Ze,
    onExit: () => {
      D("list"), Q(null);
    },
    onSelect: p
  });
  return e(s, {
    flexDirection: "column",
    maxHeight: d - 1,
    onKeyDown: kt,
    onPaste: Cn,
    children: r(os, {
      color: "suggestion",
      children: [ e(s, {
        flexShrink: 0,
        children: r(n, {
          bold: !0,
          color: "suggestion",
          children: [ "Resume session", C === "list" && v.length > $e && r(n, {
            dimColor: !0,
            children: [ " ", "(", Y, " of ", v.length, ")" ]
          }), _ && e(n, {
            dimColor: !0,
            children: " \xb7 Refreshing\u2026"
          }) ]
        })
      }), e(Ob, {
        query: le,
        isFocused: C === "search",
        isTerminalFocused: Le,
        cursorOffset: Ft
      }), Ot && (ve.length > 0 ? e(s, {
        flexShrink: 0,
        paddingLeft: 2,
        children: e(n, {
          dimColor: !0,
          children: e(Se, {
            children: ve
          })
        })
      }) : e(s, {
        flexShrink: 0,
        height: 1
      })), e(s, {
        flexShrink: 0,
        children: e(n, {
          children: " "
        })
      }), (C === "search" || C === "list") && Boolean(le.trim()) && v.length === 0 && !ue && !_ && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: r(_o, {
          children: [ 'No sessions match "', le, '".' ]
        })
      }), o.length === 0 && C === "list" && !_ && !le.trim() && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: e(_o, {
          hint: T ? void 0 : e(G, {
            chord: "ctrl+a",
            action: "show all projects",
            format: {
              modCase: "title",
              charCase: "upper"
            }
          }),
          children: T ? "No conversations found." : "No conversations found in this project."
        })
      }), C === "rename" && I ? r(s, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [ e(n, {
          bold: !0,
          children: "Rename session:"
        }), e(s, {
          paddingTop: 1,
          children: e(Er, {
            value: qe,
            onChange: te,
            onSubmit: bt,
            placeholder: o6(I, "Enter new session name"),
            columns: xt - 2,
            cursorOffset: ze,
            onChangeCursorOffset: ft,
            showCursor: !0,
            focus: !0
          })
        }) ]
      }) : e(Nt, {
        nodes: nt,
        onSelect: t => {
          p(t.value.log);
        },
        onFocus: yt,
        onCancel: l,
        focusNodeId: Me?.id,
        visibleOptionCount: $e,
        layout: "expanded",
        isDisabled: C === "search",
        hidePromptWhileDisabled: !0,
        hideIndexes: !1,
        isNodeExpanded: t => {
          if (C === "search" || !U) return !0;
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          return a ? de.has(a) : !1;
        },
        onExpand: t => {
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (a) Re(m => new Set(m).add(a)), i("tengu_session_group_expanded", {});
        },
        onCollapse: t => {
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (a) Re(m => {
            let u = new Set(m);
            return u.delete(a), u;
          });
        },
        onUpFromFirstItem: We
      }), e(s, {
        paddingLeft: 2,
        children: oe.pending ? r(n, {
          dimColor: !0,
          children: [ "Press ", oe.keyName, " again to exit" ]
        }) : C === "rename" ? e(n, {
          dimColor: !0,
          children: r(Se, {
            children: [ e(G, {
              chord: "enter",
              action: "save"
            }), e(pt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            }) ]
          })
        }) : C === "search" ? e(n, {
          dimColor: !0,
          children: r(Se, {
            children: [ e(n, {
              children: "Type to Search"
            }), o.length === 0 && g && e(G, {
              chord: "ctrl+a",
              action: T ? "only show current repo" : "show all projects",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), e(G, {
              chord: "enter",
              action: "select"
            }), e(pt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "clear"
            }) ]
          })
        }) : e(n, {
          dimColor: !0,
          children: r(Se, {
            children: [ g && e(G, {
              chord: "ctrl+a",
              action: T ? "only show current repo" : "show all projects",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), M && e(G, {
              chord: "ctrl+b",
              action: U ? "only show current branch" : "show all branches",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), W && e(G, {
              chord: "ctrl+w",
              action: A ? "only show current worktree" : "show all worktrees",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), I && e(G, {
              chord: "space",
              action: "preview"
            }), I && e(G, {
              chord: "ctrl+r",
              action: "rename",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), e(n, {
              children: "Type to search"
            }), e(pt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            }), ot() ]
          })
        })
      }) ]
    })
  });
}

function Eo(o) {
  if (o.type !== "user" && o.type !== "assistant") return "";
  let d = "message" in o ? o.message?.content : void 0;
  if (!d) return "";
  let c = o.type === "user" && o.isCompactSummary ? o.modelOnlyText : void 0;
  if (typeof d === "string") return Uae(d, c);
  if (Array.isArray(d)) return d.map(l => {
    if (typeof l === "string") return l;
    if ("text" in l && typeof l.text === "string") return Uae(l.text, c);
    return "";
  }).filter(Boolean).join(" ");
  return "";
}

function Io(o) {
  let c = (o.messages.length <= go ? o.messages : [ ...o.messages.slice(0, bn), ...o.messages.slice(-bn) ]).map(Eo).filter(Boolean).join(" "), p = `${[ o.customTitle, o.aiTitle, o.summary, o.firstPrompt, o.gitBranch, o.tag, o.prNumber ? `PR #${o.prNumber}` : void 0, o.prRepository ].filter(Boolean).join(" ")} ${c}`.trim();
  return p.length > yn ? p.slice(0, yn) : p;
}

function vo(o) {
  let d = new Map;
  for (let c of o) {
    let l = Nf(c);
    if (l) {
      let p = d.get(l);
      if (p) p.push(c); else d.set(l, [ c ]);
    }
  }
  return d.forEach(c => c.sort((l, p) => new Date(p.modified).getTime() - new Date(l.modified).getTime())), 
  d;
}

import { lstat as wo } from "fs/promises";

import { posix as Po, sep as No, win32 as Lo } from "path";

function Y6n() {
  return O() === "windows" ? ";" : "&&";
}

async function lfn(o, d, c) {
  let l = ke();
  if (!d || !o.projectPath || o.projectPath === l) return null;
  if (c.some(f => o.projectPath === f || o.projectPath.startsWith(f + No))) return null;
  if (!Un(o.projectPath) && !Mm(o.projectPath) && !await Do(o.projectPath)) return null;
  let h = Nf(o), x = WX(h) ? ` ${h}` : "";
  return `cd ${co([ o.projectPath ])} ${Y6n()} claude --resume${x}`;
}

async function Do(o) {
  let d = O() === "windows", {parse: c, sep: l} = d ? Lo : Po, p = d ? c(o).root.replaceAll("/", l) : c(o).root, h = o.slice(c(o).root.length).split(d ? /[\\/]+/ : l).filter(Boolean), x = p;
  for (let f of h) {
    x = x === "" || x.endsWith(l) ? x + f : x + l + f;
    try {
      if ((await wo(x)).isSymbolicLink()) return !0;
    } catch (_) {
      let k = E(_);
      return k !== "ENOENT" && k !== "ENOTDIR";
    }
  }
  return !0;
}

export { afn, Y6n, lfn };
