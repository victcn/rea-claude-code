// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Nu } from "./chunk-fj1a15yf.js";

import { s, n, Ha, u2 } from "./chunk-3vw306fv.js";

import { No, Nl } from "./chunk-gdpv30ry.js";

import { I, Nt } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { w } from "./chunk-9rj1xaxr.js";

import { OU, _ee, FPo, UPo, BPo, jPo } from "./chunk-q6wab2jw.js";

import { Ux } from "./chunk-69v14wbe.js";

import { Db } from "./chunk-p0ag64rt.js";

import { xk } from "./chunk-wceka25n.js";

import { rt } from "./chunk-ytac37d4.js";

import { Se } from "./chunk-sebqm9p5.js";

import { Ua, By, Kd, hs } from "./chunk-yrpmvsj8.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { G } from "./chunk-j706jx8h.js";

import { sr } from "./chunk-stbhy0k1.js";

import { Ca } from "./chunk-v2nqxhaj.js";

import { AA } from "./chunk-n2rv2kdp.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { P, Z, y, F } from "./chunk-cpyd3eya.js";

import { N } from "./chunk-hmqkrrtz.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function bt(Jt) {
  return Jt + 1;
}

function vt(zt, _t) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [ e(n, {
      dimColor: !0,
      children: "\xb7 "
    }), e(n, {
      children: zt
    }) ]
  }, _t);
}

function Ct(Pt, Wt) {
  return r(s, {
    paddingLeft: 2,
    flexDirection: "row",
    children: [ e(n, {
      dimColor: !0,
      children: "\xb7 "
    }), e(n, {
      children: Pt
    }) ]
  }, `tail-${Wt}`);
}

var z = 20, Jn = 40, zn = 14, _n = 4, Pn = 6;

function Q(t, c) {
  let u = Math.max(1, c - Pn);
  return Nt(Nu(t, u, "wrap"), `\n`) + 1;
}

function an(t, c, u) {
  let h = zn + u.reduce((m, l) => m + Q(l, c), 0);
  return Math.min(Jn, t - h);
}

function H(t, c, u, h, m, l) {
  let p = u ? `(at most ${z} are listed)` : "(list trimmed to fit the screen)", o = (h > 0 ? `, ${h} executing ${I(h, "a command", "commands")}` : "") + (m > 0 ? `, ${m} ${I(m, "sandbox setting")}` : "") + (l > 0 ? `, ${l} ${I(l, "isolation setting")}` : "");
  return c ? `\u22ef and ${t} more not shown ${p}${o} \u2014 choose No unless you expected every one of these settings` : `${t} ${I(t, "setting")} not shown ${p}${o} \u2014 choose No unless you expected every one of these settings`;
}

function dn(t, c, u) {
  if (t.length === 0) return {
    head: [],
    tail: [],
    elided: 0
  };
  let h = t.map(i => Q(i, c)), m = h.reduce((i, f) => i + f, 0), l = Math.max(Q(H(t.length, !0, !1, t.length, t.length, t.length), c), Q(H(t.length, !0, !0, t.length, t.length, t.length), c));
  if (t.length <= z && m <= Math.max(u, l)) return {
    head: t,
    tail: [],
    elided: 0
  };
  let p = l, o = 0, a = t.length, g = i => p + h[i] <= u;
  if (g(0)) p += h[0], o = 1;
  while (a - 1 >= Math.max(o, t.length - _n) && a - 1 > 0 && g(a - 1)) a--, p += h[a];
  while (o < a && o + (t.length - a) < z && g(o)) p += h[o], o++;
  return {
    head: t.slice(0, o),
    tail: t.slice(a),
    elided: a - o
  };
}

function cn(t, {commandRows: c, sandboxRows: u, isolationRows: h, envRows: m, categoryRows: l}) {
  let p = N(Object.values(t.payloadSlots), g => g?.shellSettings.hooks !== void 0), o = c.length - p, a = [];
  if (o > 0) a.push(`${I(o, "command setting")} \xd7${o}`);
  if (u.length > 0) a.push(`${I(u.length, "sandbox setting")} \xd7${u.length}`);
  if (h.length > 0) a.push(`${I(h.length, "isolation setting")} \xd7${h.length}`);
  if (m.length > 0) a.push(`${I(m.length, "env var")} \xd7${m.length}`);
  if (l.length > 0 || p > 0) a.push("hooks");
  return a.join(", ");
}

var ee = {
  intro: "Your organization has configured managed settings that could allow execution of arbitrary code or interception of your prompts and responses.",
  listLabel: "Settings requiring approval:",
  advice: "Only accept if you trust your organization's IT administration and expect these settings to be configured.",
  risk: "these can run code or redirect traffic on this machine."
}, ln = {
  intro: "Your organization has configured Claude Code to send telemetry to the destination below. Depending on your organization's settings, this can include the content of your prompts and responses.",
  listLabel: "Telemetry destination:",
  advice: "Only accept if you recognize this as your organization's telemetry collector.",
  risk: "this redirects where telemetry from this machine is sent."
}, un = {
  intro: "Your organization has configured virtual machine (VM) isolation settings for Claude Code on this machine.",
  listLabel: ee.listLabel,
  advice: ee.advice,
  risk: "these can change where Claude Code runs or what it can connect to."
}, v = No;

function uBt(t) {
  let c = w(2), u;
  if (c[0] !== t) u = e(Je, {
    ...t
  }, t.reveal), c[0] = t, c[1] = u; else u = c[1];
  return u;
}

function Je(t) {
  let i = w(98), {settings: c, baseline: u, reveal: h, onAccept: m, onReject: l, wouldTakeAnswer: p} = t, o = h === "login_handoff", {columns: a, rows: g} = Te(), f, x, E, ze, M, _, _e, Pe, kn;
  if (i[0] !== u || i[1] !== a || i[2] !== c || i[3] !== g) {
    let An = OU(c);
    let W = FPo(u, An);
    let q = _ee(W.changed) ? W.changed : An;
    x = UPo(q, c) ? ln : BPo(q, c) ? un : ee;
    let We = q === W.changed ? W.unchangedCount : 0;
    let T = W.removedCount;
    E = We > 0 ? `\uff0b ${We} other active ${I(We, "setting")} unchanged since your last approval` : null;
    let Y;
    if (i[13] !== T) Y = T > 0 ? `\u2212 ${T} previously approved ${I(T, "setting")} no longer ${T === 1 ? "requires" : "require"} approval` : null, 
    i[13] = T, i[14] = Y; else Y = i[14];
    M = Y;
    let En = jPo(q);
    _ = `Approving applies: ${cn(q, En)} \u2014 ${x.risk}`;
    let $t = an(g, a, [ x.intro, x.advice, _, ...E ? [ E ] : [], ...M ? [ M ] : [] ]);
    let {commandRows: ne, sandboxRows: te, isolationRows: oe, envRows: kt, categoryRows: At} = En;
    f = ne;
    Pe = te;
    ze = oe;
    _e = [ ...f, ...Pe, ...ze, ...kt, ...At ];
    kn = dn(_e, a, $t);
    i[0] = u, i[1] = a, i[2] = c, i[3] = g, i[4] = f, i[5] = x, i[6] = E, i[7] = ze, 
    i[8] = M, i[9] = _, i[10] = _e, i[11] = Pe, i[12] = kn;
  } else f = i[4], x = i[5], E = i[6], ze = i[7], M = i[8], _ = i[9], _e = i[10], 
  Pe = i[11], kn = i[12];
  let B = kn, qe = B.head.length, Fe = _e.length - B.tail.length, Ge = Math.max(0, Math.min(f.length, Fe) - qe), Ye = f.length + Pe.length, Be = Math.max(0, Math.min(Ye, Fe) - Math.max(f.length, qe)), Et = Ye + ze.length, Xe = Math.max(0, Math.min(Et, Fe) - Math.max(Ye, qe)), Y;
  if (i[15] !== x || i[16] !== Ge || i[17] !== Xe || i[18] !== Be || i[19] !== E || i[20] !== M || i[21] !== _ || i[22] !== B) Y = {
    ...B,
    elidedCommandCount: Ge,
    elidedSandboxCount: Be,
    elidedIsolationCount: Xe,
    copy: x,
    riskLine: _,
    hiddenLine: E,
    removedLine: M
  }, i[15] = x, i[16] = Ge, i[17] = Xe, i[18] = Be, i[19] = E, i[20] = M, i[21] = _, 
  i[22] = B, i[23] = Y; else Y = i[23];
  let {head: L, tail: k, elided: ie, elidedCommandCount: Ue, elidedSandboxCount: Ve, elidedIsolationCount: Ke, copy: b, riskLine: Qe, hiddenLine: se, removedLine: re} = Y, ne;
  if (i[24] !== m || i[25] !== l) ne = It => It === "confirm" ? m() : l(), i[24] = m, 
  i[25] = l, i[26] = ne; else ne = i[26];
  let j = xk(ne), Ze = Ua(v), {refusedWithin: He, noteRefused: en, epoch: Mt} = hs(), nn = By(), [Tt, jt] = y(0), te;
  if (i[27] === S) te = () => {
    jt(bt);
  }, i[27] = te; else te = i[27];
  let oe;
  if (i[28] !== c) oe = [ c ], i[28] = c, i[29] = oe; else oe = i[29];
  P(te, oe);
  let Dt = Kd(`${Mt}:${Tt}`, v), In;
  if (i[30] !== o || i[31] !== Ze || i[32] !== en || i[33] !== He) In = function A() {
    if (!o) {
      return !1;
    }
    if (Ze() || He(v)) {
      return en(), !0;
    }
    return !1;
  }, i[30] = o, i[31] = Ze, i[32] = en, i[33] = He, i[34] = In; else In = i[34];
  let A = In, Mn;
  if (i[35] !== A || i[36] !== p) Mn = function ae() {
    if (A()) {
      return !0;
    }
    return p?.() === !1;
  }, i[35] = A, i[36] = p, i[37] = Mn; else Mn = i[37];
  let ae = Mn, Tn;
  if (i[38] !== j || i[39] !== A) Tn = function C(Ot) {
    if (A()) {
      return;
    }
    j.answer(Ot);
  }, i[38] = j, i[39] = A, i[40] = Tn; else Tn = i[40];
  let C = Tn, jn;
  if (i[41] !== C) jn = () => C("cancel"), i[41] = C, i[42] = jn; else jn = i[42];
  let Dn;
  if (i[43] === S) Dn = {
    context: "Confirmation"
  }, i[43] = Dn; else Dn = i[43];
  rt("confirm:no", jn, Dn);
  let de;
  if (i[44] !== b.intro) de = e(n, {
    children: b.intro
  }), i[44] = b.intro, i[45] = de; else de = i[45];
  let ce;
  if (i[46] !== b.listLabel) ce = e(n, {
    dimColor: !0,
    children: b.listLabel
  }), i[46] = b.listLabel, i[47] = ce; else ce = i[47];
  let le;
  if (i[48] !== L) le = L.map(vt), i[48] = L, i[49] = le; else le = i[49];
  let ue;
  if (i[50] !== ie || i[51] !== Ue || i[52] !== Ke || i[53] !== Ve || i[54] !== L.length || i[55] !== k.length) ue = ie > 0 && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "warning",
      children: H(ie, L.length + k.length > 0, L.length + k.length === z, Ue, Ve, Ke)
    })
  }), i[50] = ie, i[51] = Ue, i[52] = Ke, i[53] = Ve, i[54] = L.length, i[55] = k.length, 
  i[56] = ue; else ue = i[56];
  let he;
  if (i[57] !== k) he = k.map(Ct), i[57] = k, i[58] = he; else he = i[58];
  let me;
  if (i[59] !== se) me = se && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: se
    })
  }), i[59] = se, i[60] = me; else me = i[60];
  let pe;
  if (i[61] !== re) pe = re && e(s, {
    paddingLeft: 2,
    children: e(n, {
      dimColor: !0,
      children: re
    })
  }), i[61] = re, i[62] = pe; else pe = i[62];
  let ge;
  if (i[63] !== ce || i[64] !== le || i[65] !== ue || i[66] !== he || i[67] !== me || i[68] !== pe) ge = r(s, {
    flexDirection: "column",
    children: [ ce, le, ue, he, me, pe ]
  }), i[63] = ce, i[64] = le, i[65] = ue, i[66] = he, i[67] = me, i[68] = pe, i[69] = ge; else ge = i[69];
  let fe;
  if (i[70] !== b.advice) fe = e(n, {
    children: b.advice
  }), i[70] = b.advice, i[71] = fe; else fe = i[71];
  let we;
  if (i[72] !== Qe) we = e(n, {
    color: "warning",
    children: Qe
  }), i[72] = Qe, i[73] = we; else we = i[73];
  const tn = o ? `${j.attempts}:${Dt.remountKey}` : `${j.attempts}`, on = o ? v : void 0, sn = o ? "cancel" : j.refused ?? "confirm";
  let ye, be;
  if (i[74] !== C) ye = () => C("confirm"), be = () => C("cancel"), i[74] = C, i[75] = ye, 
  i[76] = be; else ye = i[75], be = i[76];
  let ve;
  if (i[77] !== o || i[78] !== ae || i[79] !== nn || i[80] !== tn || i[81] !== on || i[82] !== sn || i[83] !== ye || i[84] !== be) ve = e(sr, {
    openedAt: nn,
    windowMs: on,
    refuseInput: ae,
    confirmLabel: "Yes, I trust these settings",
    cancelLabel: "No, exit Claude Code",
    cancelFirst: o,
    focus: sn,
    hideIndexes: o,
    onConfirm: ye,
    onCancel: be
  }, tn), i[77] = o, i[78] = ae, i[79] = nn, i[80] = tn, i[81] = on, i[82] = sn, i[83] = ye, 
  i[84] = be, i[85] = ve; else ve = i[85];
  const rn = o ? "select" : "confirm";
  let Ce;
  if (i[86] !== rn) Ce = e(G, {
    chord: "enter",
    action: rn
  }), i[86] = rn, i[87] = Ce; else Ce = i[87];
  let Nn;
  if (i[88] === S) Nn = e(G, {
    chord: "escape",
    action: "exit"
  }), i[88] = Nn; else Nn = i[88];
  let Re;
  if (i[89] !== Ce) Re = e(AA, {
    children: r(Se, {
      children: [ Ce, Nn ]
    })
  }), i[89] = Ce, i[90] = Re; else Re = i[90];
  let On;
  if (i[91] !== de || i[92] !== ge || i[93] !== fe || i[94] !== we || i[95] !== ve || i[96] !== Re) On = e(Ca, {
    color: "warning",
    titleColor: "warning",
    title: "Managed settings require approval",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [ de, ge, fe, we, ve, Re ]
    })
  }), i[91] = de, i[92] = ge, i[93] = fe, i[94] = we, i[95] = ve, i[96] = Re, i[97] = On; else On = i[97];
  return On;
}

var Pyt = (t, c, u) => new Promise((h, m) => {
  let l = !1, p = null;
  function o(a) {
    return p !== null && !Nl(a, p);
  }
  (async () => {
    let {rerender: a, unmount: g, waitUntilExit: i} = await u2(e(Db, {
      children: e($n, {
        settings: t,
        baseline: u,
        onAccept: f => {
          if (!o(f)) return !1;
          if (l = !0, h("approved"), a(null), !c) g();
        },
        onReject: f => {
          if (!o(f)) return !1;
          if (l = !0, h("rejected"), a(null), !c) g();
        }
      })
    }, "managed-settings-security"), Ux(!1));
    if (p = Date.now(), await i(), !l) {
      let f = Error("Managed-settings consent dialog exited without an answer");
      d(f), m(f);
    }
  })().catch(a => {
    d(a), m(a);
  });
});

function $n(t) {
  let p = w(11), {settings: c, baseline: u, onAccept: h, onReject: m} = t, l = Ha(), o;
  if (p[0] !== l || p[1] !== h) o = () => h(l), p[0] = l, p[1] = h, p[2] = o; else o = p[2];
  let a;
  if (p[3] !== l || p[4] !== m) a = () => m(l), p[3] = l, p[4] = m, p[5] = a; else a = p[5];
  let g;
  if (p[6] !== u || p[7] !== c || p[8] !== o || p[9] !== a) g = e(uBt, {
    settings: c,
    baseline: u,
    reveal: "default",
    onAccept: o,
    onReject: a
  }), p[6] = u, p[7] = c, p[8] = o, p[9] = a, p[10] = g; else g = p[10];
  return g;
}

export { uBt, Pyt };
