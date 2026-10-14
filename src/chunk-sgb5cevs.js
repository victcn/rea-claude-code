// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ui } from "./chunk-xywp7esx.js";

import { j } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { mv } from "./chunk-4dpx2qvt.js";

import { S6t, w6t, cIn } from "./chunk-84yp45y8.js";

import { jY } from "./chunk-h36n2zxz.js";

import { yB } from "./chunk-1cvvd6ss.js";

import { W$e } from "./chunk-aze9smjv.js";

var g = 3e3;

function XBr(e = {}) {
  let r = e.firstFlagFetchWaitMs ?? g, o = !1, i;
  return {
    get ready() {
      return o;
    },
    whenReady: () => i ??= f(r).then(() => {
      o = !0, c();
    })
  };
}

async function f(e) {
  let r = performance.now();
  try {
    jY();
  } catch (s) {
    d(j(s));
  }
  let o = !1, [i, a, m, l] = await Promise.all([ n("the plugin-hook registration pass", async () => {
    await w6t();
  }), n("the remote managed-settings load", yB), n("the policy-limits load", mv), n("the first flag fetch", async () => {
    let {timedOut: s} = await W$e({
      initialize: Ui,
      budgetMs: e
    });
    o = !s;
  }) ]);
  t(`[remote-tools] ready to judge calls after ${Math.round(performance.now() - r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${l}ms for the first flag fetch (${o ? "landed" : "not heard in time"})`);
}

async function n(e, r) {
  let o = performance.now();
  try {
    await r();
  } catch (i) {
    t(`[remote-tools] waiting for ${e} failed; serving goes on without it`, {
      level: "error"
    }), d(j(i));
  }
  return Math.round(performance.now() - o);
}

async function c() {
  try {
    let e = await S6t(!1) ?? await cIn();
    if (e !== void 0) t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`, {
      level: "error"
    });
  } catch (e) {
    d(j(e));
  }
}

export { XBr };
