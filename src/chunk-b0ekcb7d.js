// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mL, HX } from "./chunk-3pqddg8f.js";

import { j, l } from "./chunk-b0z4bv3v.js";

import { pFt } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { i_, Ft } from "./chunk-xywp7esx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { i } from "./chunk-hedpgw9m.js";

import { k8e, wn } from "./chunk-s2t7g8m9.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { N9 } from "./chunk-mw643xee.js";

import { s, n } from "./chunk-3vw306fv.js";

import { rt } from "./chunk-ytac37d4.js";

import { de, USe } from "./chunk-5ydr99q3.js";

import { rH, bbe } from "./chunk-wgsx43va.js";

import { Tce, YQ, Ace } from "./chunk-z09tf6qf.js";

import { F6, Iet, aW, phe } from "./chunk-ph08gw4j.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { WHe } from "./chunk-dyag3ekh.js";

import { R, y, F } from "./chunk-cpyd3eya.js";

import { sn } from "./chunk-642shbw5.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function h() {
  return {
    provider: Oe(),
    awsRegion: k8e(),
    vertexRegion: pFt(),
    vertexProjectId: a.ANTHROPIC_VERTEX_PROJECT_ID ?? "",
    accountDigest: sn([ a.AWS_PROFILE, a.AWS_BEARER_TOKEN_BEDROCK, a.AWS_ACCESS_KEY_ID, a.GOOGLE_APPLICATION_CREDENTIALS ].map(o => o ?? "").join(`\n`))
  };
}

function O(o, p) {
  let g = h(), c = o.provider === p && g.provider === o.provider && g.awsRegion === o.awsRegion && g.vertexRegion === o.vertexRegion && g.vertexProjectId === o.vertexProjectId && g.accountDigest === o.accountDigest;
  return t(`Provider-setup restart: ${c ? "carrying" : "dropping"} the model pick (launched on ${o.provider} ${o.awsRegion}/${o.vertexRegion}/${o.vertexProjectId || "no-project"}, now ${g.provider} ${g.awsRegion}/${g.vertexRegion}/${g.vertexProjectId || "no-project"}${g.accountDigest === o.accountDigest ? "" : ", credentials changed"}, target ${p})`), 
  c;
}

var E = "Your settings were saved \u2014 restart Claude Code to apply them.";

async function b(o, p, g) {
  try {
    if (Ft()) return `A background session can't restart itself. ${E}`;
    if (i_() !== null) return `Claude can't restart itself from inside the agents view. ${E}`;
    let c = W(o);
    if (c !== void 0) return c;
    if (wn()) return;
    if (await phe(), await aW(rH(o), o.storageV5), wn()) return;
    let m = W(o);
    if (m !== void 0) return m;
    let v = de(o), C = await F6(rH(o), "relaunch", {
      responseStreaming: bbe(o)
    }, o.storageV5);
    await Iet(C, {
      freshIfNoTranscript: !0,
      extraArgs: [ ...Tce(v, USe(o), {
        carryModel: O(g, p)
      }), ...Ace(v, HX()) ],
      proactivity: {
        proactivityLevel: o.getProactivityLevel(),
        toolPermissionContext: v
      },
      env: N9()
    }, o.storageV5);
    return;
  } catch (c) {
    return d(j(c)), `Couldn't restart Claude Code (${l(c)}). ${E}`;
  }
}

function W(o) {
  let p = YQ(de(o), mL());
  if (p.length > 0) return `This session has restrictions a restart can't carry over (${p.join("; ")}). ${E}`;
  if (WHe(o.taskRegistry.all())) return `Work is running in the background, and restarting would orphan it (wait for it to finish, or stop it via /tasks). ${E}`;
  return;
}

function BUt(o) {
  let u = w(21), {Wizard: p, cancelledEvent: g, targetProvider: c, onDone: m, context: v} = o, [C, Z] = y(null), [I] = y(h), T = R(!1), [_, N] = y(!1), V;
  if (u[0] !== v || u[1] !== I || u[2] !== m || u[3] !== c) V = () => {
    if (T.current) {
      return;
    }
    T.current = !0, N(!0), b(v, c, I).then(z => {
      if (z !== void 0) T.current = !1, N(!1), m(z, {
        display: "system"
      });
    });
  }, u[0] = v, u[1] = I, u[2] = m, u[3] = c, u[4] = V; else V = u[4];
  const A = C !== null;
  let G;
  if (u[5] !== A) G = {
    context: "Confirmation",
    isActive: A
  }, u[5] = A, u[6] = G; else G = u[6];
  if (rt("confirm:yes", V, G), C !== null) {
    let P;
    if (u[7] !== C) P = e(n, {
      color: "success",
      children: C
    }), u[7] = C, u[8] = P; else P = u[8];
    let f;
    if (u[9] !== _) f = _ ? e(n, {
      dimColor: !0,
      children: "Restarting Claude Code\u2026"
    }) : r(n, {
      dimColor: !0,
      children: [ "Press ", e(n, {
        bold: !0,
        children: "Enter"
      }), " to restart Claude Code." ]
    }), u[9] = _, u[10] = f; else f = u[10];
    let k;
    if (u[11] !== P || u[12] !== f) k = r(s, {
      flexDirection: "column",
      gap: 1,
      marginTop: 1,
      children: [ P, f ]
    }), u[11] = P, u[12] = f, u[13] = k; else k = u[13];
    return k;
  }
  let P;
  if (u[14] === S) P = ee => Z(ee), u[14] = P; else P = u[14];
  let f;
  if (u[15] !== g || u[16] !== m) f = () => {
    i(g, {}), m();
  }, u[15] = g, u[16] = m, u[17] = f; else f = u[17];
  let k;
  if (u[18] !== p || u[19] !== f) k = e(p, {
    onComplete: P,
    onCancel: f
  }), u[18] = p, u[19] = f, u[20] = k; else k = u[20];
  return k;
}

export { BUt };
