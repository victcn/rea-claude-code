// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { ie } from "./chunk-yxennhe9.js";

import { s, n } from "./chunk-3vw306fv.js";

import { rt, nn } from "./chunk-ytac37d4.js";

import { Er } from "./chunk-t54wevgw.js";

import { te } from "./chunk-48xcyvwy.js";

import { Se } from "./chunk-sebqm9p5.js";

import { be } from "./chunk-gqmex880.js";

import { G } from "./chunk-j706jx8h.js";

import { _7e } from "./chunk-8qdt26db.js";

import { ss } from "./chunk-wafhv2dx.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Z, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function Oo(_o) {
  return ie(_o.label);
}

function Go(jo) {
  return jo !== null;
}

function qj(Ye) {
  let o = w(107), {title: l, subtitle: c, fields: t, values: i, onChange: C, onSubmit: B, onCancel: a, submitLabel: Y} = Ye, I = Y === void 0 ? "Save" : Y, f = t.length + 1, [d, h] = y(0), _;
  if (o[0] !== t[0] || o[1] !== i) _ = () => {
    let se = t[0];
    return se?.type === "text" ? (i[se.key] ?? "").length : 0;
  }, o[0] = t[0], o[1] = i, o[2] = _; else _ = o[2];
  let [M, j] = y(_), u = d < t.length ? t[d] : null, De = u?.type === "text", A;
  if (o[3] !== t) A = Math.max(...t.map(Oo)), o[3] = t, o[4] = A; else A = o[4];
  let U = A, N;
  if (o[5] !== i) N = function x(P) {
    if (P.type !== "text") {
      return null;
    }
    let q = i[P.key] ?? "";
    if (P.required && q.trim() === "") {
      return `${P.label} is required`;
    }
    return P.validate ? P.validate(q, i) : null;
  }, o[5] = i, o[6] = N; else N = o[6];
  let x = N, Te;
  if (o[7] !== x || o[8] !== t) Te = t.map(x).find(Go), o[7] = x, o[8] = t, o[9] = Te; else Te = o[9];
  let b = Te, D;
  if (o[10] !== t || o[11] !== d || o[12] !== f || o[13] !== i) D = function m(Re) {
    let Me = Math.max(0, Math.min(f - 1, Re));
    if (Me === d) {
      return;
    }
    h(Me);
    let Ze = t[Me];
    if (Ze?.type === "text") j((i[Ze.key] ?? "").length);
  }, o[10] = t, o[11] = d, o[12] = f, o[13] = i, o[14] = D; else D = o[14];
  let m = D, _e;
  if (o[15] !== b || o[16] !== B) _e = function T() {
    if (b) {
      return;
    }
    B();
  }, o[15] = b, o[16] = B, o[17] = _e; else _e = o[17];
  let T = _e, je;
  if (o[18] !== u || o[19] !== C || o[20] !== i) je = function ee($o) {
    if (u?.type !== "select") {
      return;
    }
    let K = u.options;
    let zo = i[u.key] ?? K[0]?.value ?? "";
    let Qo = K.findIndex(Jo => Jo.value === zo);
    let Ke = K[(Qo + $o + K.length) % K.length];
    if (Ke) C(u.key, Ke.value);
  }, o[18] = u, o[19] = C, o[20] = i, o[21] = je; else je = o[21];
  let ee = je, de, ue;
  if (o[22] !== d || o[23] !== m) ue = () => m(d - 1), de = () => m(d + 1), o[22] = d, 
  o[23] = m, o[24] = de, o[25] = ue; else de = o[24], ue = o[25];
  let ce;
  if (o[26] !== d || o[27] !== m || o[28] !== f || o[29] !== T) ce = () => {
    if (d === f - 1) T(); else m(d + 1);
  }, o[26] = d, o[27] = m, o[28] = f, o[29] = T, o[30] = ce; else ce = o[30];
  let eo;
  if (o[31] !== a || o[32] !== de || o[33] !== ce || o[34] !== ue) eo = {
    "select:previous": ue,
    "select:next": de,
    "select:accept": ce,
    "select:cancel": a
  }, o[31] = a, o[32] = de, o[33] = ce, o[34] = ue, o[35] = eo; else eo = o[35];
  const Ae = !De;
  let oo;
  if (o[36] !== Ae) oo = {
    context: "Select",
    isActive: Ae
  }, o[36] = Ae, o[37] = oo; else oo = o[37];
  nn(eo, oo);
  let to;
  if (o[38] === S) to = {
    context: "Settings"
  }, o[38] = to; else to = o[38];
  rt("confirm:no", a, to), _7e();
  let lo;
  if (o[39] !== ee) lo = {
    "tabs:previous": () => ee(-1),
    "tabs:next": () => ee(1)
  }, o[39] = ee, o[40] = lo; else lo = o[40];
  const Ue = u?.type === "select";
  let io;
  if (o[41] !== Ue) io = {
    context: "Tabs",
    isActive: Ue
  }, o[41] = Ue, o[42] = io; else io = o[42];
  nn(lo, io);
  let O = u ? i[u.key] ?? "" : "", no;
  if (o[43] !== u || o[44] !== O || o[45] !== i) no = u?.type === "text" && u.validate ? u.validate(O, i) : null, 
  o[43] = u, o[44] = O, o[45] = i, o[46] = no; else no = o[46];
  let L = no, ro;
  if (o[47] !== L || o[48] !== u || o[49] !== O || o[50] !== i) ro = !L && u?.hint ? u.hint(O, i) : void 0, 
  o[47] = L, o[48] = u, o[49] = O, o[50] = i, o[51] = ro; else ro = o[51];
  let ae = ro, fe;
  if (o[52] !== M || o[53] !== t || o[54] !== d || o[55] !== U || o[56] !== m || o[57] !== a || o[58] !== C || o[59] !== T || o[60] !== i) {
    let z;
    if (o[62] !== M || o[63] !== t.length || o[64] !== d || o[65] !== U || o[66] !== m || o[67] !== a || o[68] !== C || o[69] !== T || o[70] !== i) z = (me, oe) => {
      let Xo = oe === d;
      let Yo = i[me.key] ?? "";
      return e(Ee, {
        field: me,
        value: Yo,
        isFocused: Xo,
        labelWidth: U,
        cursor: M,
        setCursor: j,
        onChange: Zo => C(me.key, Zo),
        onCancel: a,
        onUp: () => m(oe - 1),
        onDown: () => m(oe + 1),
        onEnter: () => {
          if (oe === t.length - 1) T(); else m(oe + 1);
        }
      }, me.key);
    }, o[62] = M, o[63] = t.length, o[64] = d, o[65] = U, o[66] = m, o[67] = a, o[68] = C, 
    o[69] = T, o[70] = i, o[71] = z; else z = o[71];
    fe = t.map(z);
    o[52] = M, o[53] = t, o[54] = d, o[55] = U, o[56] = m, o[57] = a, o[58] = C, o[59] = T, 
    o[60] = i, o[61] = fe;
  } else fe = o[61];
  const z = d === f - 1 ? "suggestion" : void 0, Pe = d === f - 1 ? te.pointer : " ";
  let pe;
  if (o[72] !== z || o[73] !== Pe) pe = r(n, {
    color: z,
    children: [ Pe, " " ]
  }), o[72] = z, o[73] = Pe, o[74] = pe; else pe = o[74];
  const qe = d === f - 1, Le = !!b;
  let ve;
  if (o[75] !== I || o[76] !== qe || o[77] !== Le) ve = e(n, {
    bold: qe,
    dimColor: Le,
    children: I
  }), o[75] = I, o[76] = qe, o[77] = Le, o[78] = ve; else ve = o[78];
  let ge;
  if (o[79] !== b || o[80] !== d || o[81] !== f) ge = b && d === f - 1 && r(n, {
    color: "error",
    children: [ " \xb7 ", b ]
  }), o[79] = b, o[80] = d, o[81] = f, o[82] = ge; else ge = o[82];
  let Ce;
  if (o[83] !== pe || o[84] !== ve || o[85] !== ge) Ce = r(s, {
    marginTop: 1,
    children: [ pe, ve, ge ]
  }), o[83] = pe, o[84] = ve, o[85] = ge, o[86] = Ce; else Ce = o[86];
  let he;
  if (o[87] !== L || o[88] !== ae) he = e(s, {
    marginTop: 1,
    minHeight: 1,
    children: L ? e(ss, {
      error: L
    }) : ae ? e(n, {
      dimColor: !0,
      children: ae
    }) : e(n, {
      children: " "
    })
  }), o[87] = L, o[88] = ae, o[89] = he; else he = o[89];
  let so;
  if (o[90] === S) so = e(G, {
    chord: [ "up", "down" ],
    action: "move"
  }), o[90] = so; else so = o[90];
  let Fe;
  if (o[91] !== u?.type) Fe = u?.type === "select" && e(G, {
    chord: [ "left", "right" ],
    action: "change"
  }), o[91] = u?.type, o[92] = Fe; else Fe = o[92];
  let uo, co;
  if (o[93] === S) uo = e(G, {
    chord: "enter",
    action: "continue"
  }), co = e(G, {
    chord: "escape",
    action: "cancel"
  }), o[93] = uo, o[94] = co; else uo = o[93], co = o[94];
  let ye;
  if (o[95] !== Fe) ye = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: r(Se, {
        children: [ so, Fe, uo, co ]
      })
    })
  }), o[95] = Fe, o[96] = ye; else ye = o[96];
  let xe;
  if (o[97] !== fe || o[98] !== Ce || o[99] !== he || o[100] !== ye) xe = r(s, {
    flexDirection: "column",
    children: [ fe, Ce, he, ye ]
  }), o[97] = fe, o[98] = Ce, o[99] = he, o[100] = ye, o[101] = xe; else xe = o[101];
  let ao;
  if (o[102] !== a || o[103] !== c || o[104] !== xe || o[105] !== l) ao = e(be, {
    title: l,
    subtitle: c,
    onCancel: a,
    hideInputGuide: !0,
    isCancelActive: !1,
    children: xe
  }), o[102] = a, o[103] = c, o[104] = xe, o[105] = l, o[106] = ao; else ao = o[106];
  return ao;
}

function Ee(Ye) {
  let h = w(44), {field: l, value: c, isFocused: t, labelWidth: i, cursor: C, setCursor: B, onChange: a, onCancel: Y, onUp: I, onDown: f, onEnter: d} = Ye, o;
  if (h[0] !== l.label || h[1] !== i) o = " ".repeat(Math.max(0, i - ie(l.label))), 
  h[0] = l.label, h[1] = i, h[2] = o; else o = h[2];
  let _ = o, se;
  if (h[3] !== l.required || h[4] !== l.type || h[5] !== c) se = l.type === "text" && l.required && c.trim() === "", 
  h[3] = l.required, h[4] = l.type, h[5] = c, h[6] = se; else se = h[6];
  let M = se;
  const j = t ? "suggestion" : void 0, u = t ? te.pointer : " ";
  let De;
  if (h[7] !== j || h[8] !== u) De = r(n, {
    color: j,
    children: [ u, " " ]
  }), h[7] = j, h[8] = u, h[9] = De; else De = h[9];
  let A = De;
  const U = !t;
  let N;
  if (h[10] !== M) N = M ? e(n, {
    color: "error",
    children: "*"
  }) : " ", h[10] = M, h[11] = N; else N = h[11];
  let P;
  if (h[12] !== l.label || h[13] !== _ || h[14] !== U || h[15] !== N) P = r(n, {
    dimColor: U,
    children: [ l.label, N, _, " " ]
  }), h[12] = l.label, h[13] = _, h[14] = U, h[15] = N, h[16] = P; else P = h[16];
  let q = P;
  if (l.type === "select") {
    let x;
    if (h[17] !== l.options || h[18] !== c) x = l.options.find(Te => Te.value === c) ?? l.options[0], 
    h[17] = l.options, h[18] = c, h[19] = x; else x = h[19];
    let b = x;
    let D;
    if (h[20] !== t || h[21] !== b?.label || h[22] !== c) D = t ? r(n, {
      children: [ r(n, {
        dimColor: !0,
        children: [ te.triangleLeft, " " ]
      }), b?.label ?? c, r(n, {
        dimColor: !0,
        children: [ " ", te.triangleRight ]
      }) ]
    }) : e(n, {
      children: b?.label ?? c
    }), h[20] = t, h[21] = b?.label, h[22] = c, h[23] = D; else D = h[23];
    let Re;
    if (h[24] !== q || h[25] !== A || h[26] !== D) Re = r(s, {
      children: [ A, q, D ]
    }), h[24] = q, h[25] = A, h[26] = D, h[27] = Re; else Re = h[27];
    return Re;
  }
  let x;
  if (h[28] !== C || h[29] !== l.mask || h[30] !== l.placeholder || h[31] !== t || h[32] !== Y || h[33] !== a || h[34] !== f || h[35] !== d || h[36] !== I || h[37] !== B || h[38] !== c) x = t ? e(Er, {
    value: c,
    onChange: a,
    onSubmit: () => d(),
    onExit: Y,
    onHistoryUp: I,
    onHistoryDown: f,
    placeholder: l.placeholder,
    mask: l.mask,
    columns: 60,
    cursorOffset: C,
    onChangeCursorOffset: B,
    disableCursorMovementForUpDownKeys: !0,
    disableEscapeDoublePress: !0,
    focus: !0,
    showCursor: !0
  }) : c ? e(n, {
    children: l.mask ? l.mask.repeat(Math.min(ie(c), 60)) : c
  }) : e(n, {
    dimColor: !0,
    children: l.placeholder ?? ""
  }), h[28] = C, h[29] = l.mask, h[30] = l.placeholder, h[31] = t, h[32] = Y, h[33] = a, 
  h[34] = f, h[35] = d, h[36] = I, h[37] = B, h[38] = c, h[39] = x; else x = h[39];
  let D;
  if (h[40] !== q || h[41] !== A || h[42] !== x) D = r(s, {
    children: [ A, q, x ]
  }), h[40] = q, h[41] = A, h[42] = x, h[43] = D; else D = h[43];
  return D;
}

export { qj };
