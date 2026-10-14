// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { yS } from "./chunk-1pxjahnn.js";

import { s, n, Id, x6 } from "./chunk-3vw306fv.js";

import { a } from "./chunk-j016gcgm.js";

import { DL } from "./chunk-f3sxrxpt.js";

import { rt } from "./chunk-ytac37d4.js";

import { Rn } from "./chunk-dd98x6x7.js";

import { ms } from "./chunk-zzj636ts.js";

import { Rit } from "./chunk-2kzvcfy0.js";

import { Pe, yr, sJ, ign, Age } from "./chunk-7w995nyx.js";

import { WJ, WI } from "./chunk-k48604rx.js";

import { Zo } from "./chunk-a5nr78wg.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { V, Nn } from "./chunk-jb3h1y0s.js";

import { Qn } from "./chunk-84yp45y8.js";

import { Se } from "./chunk-sebqm9p5.js";

import { G } from "./chunk-j706jx8h.js";

import { Mq, E7e, Hq, tn } from "./chunk-v8wydxb4.js";

import { N7e, ct } from "./chunk-qk83zz02.js";

import { s1t, uUr } from "./chunk-kbqs71k0.js";

import { k6 } from "./chunk-kv5tmp6d.js";

import { El } from "./chunk-w1phyxy4.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Ae, P, R, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function fo(Do) {
  return Do.settings.syntaxHighlightingDisabled;
}

function xo(fe) {
  return {
    label: fe.name,
    origin: fe.source === "user" ? "custom" : `from ${fe.source.plugin}`,
    value: WJ(fe.slug)
  };
}

var We = "__new_custom_theme__";

function FMe(vo) {
  let t = w(109), {onThemeSelect: Oe, showIntroText: ht, helpText: ut, showHelpTextBelow: gt, hideEscToCancel: pt, skipExitHandling: ft, onCancel: De, onCustomTheme: i} = vo, g = ht === void 0 ? !1 : ht, c = ut === void 0 ? "" : ut, x = gt === void 0 ? !1 : gt, W = pt === void 0 ? !1 : pt, p = ft === void 0 ? !1 : ft, {storageV5: Ie} = Pe(), [Ee] = yr(), v = sJ(), {columns: To} = Te(), xt;
  if (t[0] === S) xt = s1t(), t[0] = xt; else xt = t[0];
  let Me = xt, vt;
  if (t[1] !== Ee) vt = Me === null ? uUr(Ee) : null, t[1] = Ee, t[2] = vt; else vt = t[2];
  let Y = vt, {setPreviewTheme: Le, cancelPreview: o} = ign(), d = R(void 0), Tt;
  if (t[3] !== o) Tt = wo => {
    let wt = Symbol("commit");
    d.current = wt;
    let Ct = () => {
      if (d.current === wt) d.current = void 0, o();
    };
    Promise.resolve(wo).then(Ct, Ct);
  }, t[3] = o, t[4] = Tt; else Tt = t[4];
  let T = Tt, bt, St;
  if (t[5] !== o) St = () => () => {
    if (d.current === void 0) o();
  }, bt = [ o ], t[5] = o, t[6] = bt, t[7] = St; else bt = t[6], St = t[7];
  P(St, bt);
  let j = V(fo) ?? !1, _e = Nn();
  DL("ThemePicker");
  let Re = ms("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t"), yt;
  if (t[8] !== _e || t[9] !== Ie || t[10] !== j) yt = () => {
    if (Me === null) {
      let Pt = !j;
      Rn("userSettings", {
        syntaxHighlightingDisabled: Pt
      }, void 0, Ie), _e(kt => ({
        ...kt,
        settings: {
          ...kt.settings,
          syntaxHighlightingDisabled: Pt
        }
      }));
    }
  }, t[8] = _e, t[9] = Ie, t[10] = j, t[11] = yt; else yt = t[11];
  let Ht;
  if (t[12] === S) Ht = {
    context: "ThemePicker"
  }, t[12] = Ht; else Ht = t[12];
  rt("theme:toggleSyntaxHighlighting", yt, Ht);
  let Ot;
  if (t[13] !== o || t[14] !== De) Ot = () => {
    d.current = void 0, o(), De?.();
  }, t[13] = o, t[14] = De, t[15] = Ot; else Ot = t[15];
  let q = Ot, Dt;
  if (t[16] !== q || t[17] !== o || t[18] !== p) Dt = p ? q : async () => {
    o(), await Qn(0);
  }, t[16] = q, t[17] = o, t[18] = p, t[19] = Dt; else Dt = t[19];
  let It;
  if (t[20] === S) It = {
    context: "Select"
  }, t[20] = It; else It = t[20];
  rt("select:cancel", Dt, It);
  let J = Zo(p ? q : void 0), {customThemes: C} = Age(), Et, Mt, Lt, _t, At, Rt, Bt;
  if (t[21] === S) Et = {
    label: "Auto (match terminal)",
    value: "auto"
  }, Mt = {
    label: "Dark mode",
    value: "dark"
  }, Lt = {
    label: "Light mode",
    value: "light"
  }, _t = {
    label: "Dark mode (colorblind-friendly)",
    value: "dark-daltonized"
  }, At = {
    label: "Light mode (colorblind-friendly)",
    value: "light-daltonized"
  }, Rt = {
    label: "Dark mode (ANSI colors only)",
    value: "dark-ansi"
  }, Bt = {
    label: "Light mode (ANSI colors only)",
    value: "light-ansi"
  }, t[21] = Et, t[22] = Mt, t[23] = Lt, t[24] = _t, t[25] = At, t[26] = Rt, t[27] = Bt; else Et = t[21], 
  Mt = t[22], Lt = t[23], _t = t[24], At = t[25], Rt = t[26], Bt = t[27];
  let Nt;
  if (t[28] !== C || t[29] !== i) {
    let I;
    if (t[31] !== i) I = i ? [ {
      label: "New custom theme\u2026",
      value: We
    } ] : [], t[31] = i, t[32] = I; else I = t[32];
    Nt = [ Et, Mt, Lt, _t, At, Rt, Bt, ...C.map(xo), ...I ];
    t[28] = C, t[29] = i, t[30] = Nt;
  } else Nt = t[30];
  let l = Nt, Z = l.findIndex(Co => Co.value === v), [b, $t] = y(l[Math.max(0, Z)]?.value ?? v), [bo, So] = y(!1), [Ut, yo] = y(Z !== -1);
  if (!Ut && !bo && Z !== -1) yo(!0), $t(v);
  let I;
  if (t[33] !== b) I = WI(b), t[33] = b, t[34] = I; else I = t[34];
  let K = I, Ft;
  if (t[35] !== C || t[36] !== K) Ft = K ? C.find(Po => Po.slug === K) : void 0, t[35] = C, 
  t[36] = K, t[37] = Ft; else Ft = t[37];
  let f = Ft, Be = ms("theme:editCustom", "ThemePicker", "ctrl+e"), Vt;
  if (t[38] !== f || t[39] !== T || t[40] !== i) Vt = () => {
    if (f && i && d.current === void 0) T(i(f));
  }, t[38] = f, t[39] = T, t[40] = i, t[41] = Vt; else Vt = t[41];
  let Gt;
  if (t[42] === S) Gt = {
    context: "ThemePicker"
  }, t[42] = Gt; else Gt = t[42];
  rt("theme:editCustom", Vt, Gt);
  let h = Hq(), E = Ae(yS), Xt = R(null), zt;
  if (t[43] !== h) zt = () => {
    let Ne = Xt.current;
    if (Ne === null) {
      return 0;
    }
    let ee = h?.box.current ?? Ne;
    while (h === null && ee.parentNode !== void 0) ee = ee.parentNode;
    return Math.max(0, x6(Ne, ee));
  }, t[43] = h, t[44] = zt; else zt = t[44];
  let ko = Id(zt), te = g ? 0 : ko + (W ? 1 : 0), oe;
  if (t[45] !== g) oe = g ? e(n, {
    children: "Let's get started."
  }) : e(n, {
    bold: !0,
    color: "permission",
    children: "Theme"
  }), t[45] = g, t[46] = oe; else oe = t[46];
  let Wt;
  if (t[47] === S) Wt = e(n, {
    bold: !0,
    children: "Choose the text style that looks best with your terminal"
  }), t[47] = Wt; else Wt = t[47];
  let ne;
  if (t[48] !== c || t[49] !== x) ne = c && !x && e(n, {
    dimColor: !0,
    children: c
  }), t[48] = c, t[49] = x, t[50] = ne; else ne = t[50];
  let ie;
  if (t[51] !== ne) ie = r(s, {
    flexDirection: "column",
    children: [ Wt, ne ]
  }), t[51] = ne, t[52] = ie; else ie = t[52];
  const $e = Ut ? "on-saved-theme" : "on-first-theme", Ue = Math.max(0, Z);
  let se;
  if (t[53] !== o || t[54] !== b || t[55] !== Le || t[56] !== l) se = Ho => {
    let M = l[Ho]?.value;
    if (M === void 0 || M === b || d.current !== void 0) {
      return;
    }
    if ($t(M), So(!0), Rit(M)) Le(M); else o();
  }, t[53] = o, t[54] = b, t[55] = Le, t[56] = l, t[57] = se; else se = t[57];
  let le;
  if (t[58] !== o || t[59] !== T || t[60] !== i || t[61] !== Oe || t[62] !== l) le = Oo => {
    let Fe = l[Oo]?.value;
    if (Fe === void 0 || d.current !== void 0) {
      return;
    }
    if (!Rit(Fe)) {
      o(), i?.(void 0);
      return;
    }
    T(Oe(Fe));
  }, t[58] = o, t[59] = T, t[60] = i, t[61] = Oe, t[62] = l, t[63] = le; else le = t[63];
  let ae;
  if (t[64] !== l || t[65] !== v) ae = l.map(L => e(tn.Item, {
    label: L.label,
    icon: L.value === v ? e(ct, {
      status: "success",
      "aria-label": "current:"
    }) : e(n, {
      "aria-hidden": !0,
      children: " ".repeat(N7e())
    }),
    meta: L.origin === void 0 ? void 0 : [ L.origin ]
  }, L.value)), t[64] = l, t[65] = v, t[66] = ae; else ae = t[66];
  let re;
  if (t[67] !== $e || t[68] !== Ue || t[69] !== se || t[70] !== le || t[71] !== ae) re = e(tn, {
    defaultFocusIndex: Ue,
    onFocus: se,
    onSelect: le,
    children: ae
  }, $e), t[67] = $e, t[68] = Ue, t[69] = se, t[70] = le, t[71] = ae, t[72] = re; else re = t[72];
  let me;
  if (t[73] !== oe || t[74] !== ie || t[75] !== re) me = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ oe, ie, re ]
  }), t[73] = oe, t[74] = ie, t[75] = re, t[76] = me; else me = t[76];
  let Yt;
  if (t[77] === S) Yt = {
    oldStart: 1,
    newStart: 1,
    oldLines: 3,
    newLines: 3,
    lines: [ " function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', " }" ]
  }, t[77] = Yt; else Yt = t[77];
  const Ve = To - 6;
  let ce;
  if (t[78] !== Ve) ce = e(El, {
    paddingX: 0,
    children: e(k6, {
      patch: Yt,
      dim: !1,
      filePath: "demo.js",
      firstLine: null,
      width: Ve
    })
  }), t[78] = Ve, t[79] = ce; else ce = t[79];
  const Ge = Me === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${a.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : j ? `Syntax highlighting disabled (${Re} to enable)` : Y ? `Syntax theme: ${Y.theme}${Y.source ? ` (from ${Y.source})` : ""} (${Re} to disable)` : `Syntax highlighting enabled (${Re} to disable)`;
  let de;
  if (t[80] !== Ge) de = r(n, {
    dimColor: !0,
    children: [ " ", Ge ]
  }), t[80] = Ge, t[81] = de; else de = t[81];
  let he;
  if (t[82] !== ce || t[83] !== de) he = r(s, {
    flexDirection: "column",
    width: "100%",
    children: [ ce, de ]
  }), t[82] = ce, t[83] = de, t[84] = he; else he = t[84];
  let jt;
  if (t[85] !== me || t[86] !== he) jt = r(s, {
    ref: Xt,
    flexDirection: "column",
    gap: 1,
    children: [ me, he ]
  }), t[85] = me, t[86] = he, t[87] = jt; else jt = t[87];
  let Xe = jt, ue;
  if (t[88] !== h?.rows || t[89] !== te || t[90] !== E) ue = E && {
    ...E,
    rows: Math.max(0, (h?.rows ?? E.rows) - te)
  }, t[88] = h?.rows, t[89] = te, t[90] = E, t[91] = ue; else ue = t[91];
  const ze = (h?.reserve ?? Mq) + te;
  let ge;
  if (t[92] !== Be || t[93] !== J || t[94] !== f || t[95] !== c || t[96] !== W || t[97] !== i || t[98] !== x || t[99] !== g || t[100] !== p) ge = !g && r(s, {
    marginTop: 1,
    children: [ x && c && e(s, {
      marginLeft: 3,
      children: e(n, {
        dimColor: !0,
        children: c
      })
    }), !W && e(s, {
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: J.pending ? r(Q, {
          children: [ "Press ", J.keyName, " again to", " ", p ? "cancel" : "exit" ]
        }) : r(Se, {
          children: [ e(G, {
            chord: "enter",
            action: "select"
          }), f && i && e(G, {
            chord: Be,
            action: "edit"
          }), e(G, {
            chord: "escape",
            action: "cancel"
          }) ]
        })
      })
    }) ]
  }), t[92] = Be, t[93] = J, t[94] = f, t[95] = c, t[96] = W, t[97] = i, t[98] = x, 
  t[99] = g, t[100] = p, t[101] = ge; else ge = t[101];
  let pe;
  if (t[102] !== Xe || t[103] !== ze || t[104] !== ge) pe = r(E7e, {
    reserve: ze,
    children: [ Xe, ge ]
  }), t[102] = Xe, t[103] = ze, t[104] = ge, t[105] = pe; else pe = t[105];
  let qt;
  if (t[106] !== ue || t[107] !== pe) qt = e(yS, {
    value: ue,
    children: pe
  }), t[106] = ue, t[107] = pe, t[108] = qt; else qt = t[108];
  return qt;
}

export { FMe };
