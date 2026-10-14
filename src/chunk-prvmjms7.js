// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { I } from "./chunk-5wbhf1bk.js";

import { Qm } from "./chunk-xywp7esx.js";

import { Pe } from "./chunk-7w995nyx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { s, n, zt } from "./chunk-3vw306fv.js";

import { Ua, By, Kd, hs } from "./chunk-yrpmvsj8.js";

import { Wn } from "./chunk-4v78v8fd.js";

import { sr } from "./chunk-stbhy0k1.js";

import { be } from "./chunk-gqmex880.js";

import { rke } from "./chunk-9e1r8snd.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { P, R, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function me() {
  i("tengu_claude_md_includes_dialog_shown", {});
}

function ge(Ce, De) {
  return r(n, {
    dimColor: !0,
    wrap: "truncate-middle",
    children: [ "  ", Wn(Ce.path) ]
  }, De);
}

function amn(g, h, o) {
  Qm(a => ({
    ...a,
    hasClaudeMdExternalIncludesApproved: g,
    hasClaudeMdExternalIncludesWarningShown: !0
  }), o), i(g ? "tengu_claude_md_external_includes_dialog_accepted" : "tengu_claude_md_external_includes_dialog_declined", {
    source: c(h)
  });
}

function y8n(g) {
  let t = w(37), {onDone: h, isStandaloneDialog: o, externalIncludes: a} = g, {storageV5: k} = Pe(), G;
  if (t[0] === S) G = [], t[0] = G; else G = t[0];
  P(me, G);
  let d = Ua(), {refusedWithin: u, noteRefused: p, epoch: we} = hs(), z;
  if (t[1] !== d || t[2] !== p || t[3] !== u) z = function y() {
    if (d() || u()) {
      return p(), !0;
    }
    return !1;
  }, t[1] = d, t[2] = p, t[3] = u, t[4] = z; else z = t[4];
  let y = z, L = By(), j = Kd(we), H;
  if (t[5] !== a) H = a ?? [], t[5] = a, t[6] = H; else H = t[6];
  let f = H, J;
  if (t[7] !== f) J = f.length <= rke ? f : f.slice(0, rke - 2), t[7] = f, t[8] = J; else J = t[8];
  let X = J, O = f.slice(X.length), Z = R(!1), ee;
  if (t[9] !== d || t[10] !== p || t[11] !== h || t[12] !== u || t[13] !== k) ee = Ie => {
    if (d() || u()) {
      p();
      return;
    }
    if (Z.current) {
      return;
    }
    Z.current = !0, amn(Ie === "yes", "dialog", k), h();
  }, t[9] = d, t[10] = p, t[11] = h, t[12] = u, t[13] = k, t[14] = ee; else ee = t[14];
  let l = ee, te;
  if (t[15] !== l) te = () => {
    l("no");
  }, t[15] = l, t[16] = te; else te = t[16];
  let W = te;
  const M = be, ye = "Allow external CLAUDE.md file imports?", xe = "warning", B = !o, U = !o;
  let x;
  if (t[17] === S) x = e(n, {
    children: "This project's CLAUDE.md or .claude/rules imports files outside the current working directory. Never allow this for third-party repositories."
  }), t[17] = x; else x = t[17];
  const N = a && a.length > 0 && r(s, {
    flexDirection: "column",
    children: [ e(n, {
      dimColor: !0,
      children: "External imports:"
    }), X.map(ge), O.length > 0 ? r(Q, {
      children: [ r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: [ "  ", "\u2026 +", O.length, " ", I(O.length, "import"), " not shown." ]
      }), r(n, {
        dimColor: !0,
        wrap: "truncate",
        children: [ "  ", "Yes covers those too, plus any this project adds later." ]
      }) ]
    }) : null ]
  });
  let oe;
  if (t[18] === S) oe = r(n, {
    dimColor: !0,
    children: [ "Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", e(zt, {
      url: "https://code.claude.com/docs/en/security"
    }), " " ]
  }), t[18] = oe; else oe = t[18];
  let C, D;
  if (t[19] !== l) C = () => l("yes"), D = () => l("no"), t[19] = l, t[20] = C, t[21] = D; else C = t[20], 
  D = t[21];
  let E;
  if (t[22] !== j.remountKey || t[23] !== y || t[24] !== L || t[25] !== C || t[26] !== D) E = e(sr, {
    refuseInput: y,
    openedAt: L,
    hideIndexes: !0,
    confirmLabel: "Yes, allow external imports",
    cancelLabel: "No, disable external imports",
    cancelFirst: !0,
    focus: "cancel",
    onConfirm: C,
    onCancel: D
  }, j.remountKey), t[22] = j.remountKey, t[23] = y, t[24] = L, t[25] = C, t[26] = D, 
  t[27] = E; else E = t[27];
  let ne;
  if (t[28] !== M || t[29] !== W || t[30] !== o || t[31] !== U || t[32] !== x || t[33] !== N || t[34] !== E || t[35] !== B) ne = r(M, {
    title: ye,
    color: xe,
    onCancel: W,
    exitOnCtrlCD: o,
    hideBorder: B,
    hideInputGuide: U,
    children: [ x, N, oe, E ]
  }), t[28] = M, t[29] = W, t[30] = o, t[31] = U, t[32] = x, t[33] = N, t[34] = E, 
  t[35] = B, t[36] = ne; else ne = t[36];
  return ne;
}

export { amn, y8n };
