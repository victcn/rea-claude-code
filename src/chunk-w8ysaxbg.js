// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $Yt, FYt, frs, y3, Yar, Wjs, Gjs, Drt, Txn, SWs, wWs, qot, G4, Xot, VIn, xLe, Qt, xe, Wt, Nqe, GOn, xCt } from "./chunk-84yp45y8.js";

import { pd } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { gIe } from "./chunk-f1zpf9me.js";

import { de } from "./chunk-5ydr99q3.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { qqe, qCt } from "./chunk-bkx9v5fh.js";

import { ir, JF, Tpe } from "./chunk-ep1bh0vt.js";

import { rY } from "./chunk-y7wav9vk.js";

import { sl } from "./chunk-smzxkp15.js";

import { qtn, Gjn } from "./chunk-2x0yjg76.js";

import { L } from "./chunk-vh1p9t2h.js";

var V = (e, o) => o ? {
  drop: o.resultText ?? "blocked by a UserPromptSubmit hook"
} : {
  text: e
};

import { randomUUID as Se } from "crypto";

var akn = (e, o = "UserPromptSubmit") => Qt({
  type: "hook_additional_context",
  content: [ ...e ],
  hookName: o,
  toolUseID: `hook-${Se()}`,
  hookEvent: "UserPromptSubmit"
});

var _ = !0;

var R = (e, o) => ({
  messages: [ {
    ...Wt(e, "warning", void 0, _),
    promptSubmitEnding: {
      ending: o,
      promptKept: !1
    }
  } ],
  shouldQuery: !1,
  resultText: e
});

function z(e, o, r) {
  return r === !0 ? e : `${e}\n\nOriginal prompt: ${o}`;
}

var Cvt = {
  wasCancelled: !0
};

var M = e => e.wasCancelled === !0 && (e.blocked === void 0 || e.stopped !== void 0);

var w = (e, o, r) => M(e) ? Cvt : {
  ended: o,
  stopped: e.stopped,
  text: r,
  wasCancelled: e.wasCancelled
};

var J = () => R("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.", {
  kind: "no_verdict",
  noVerdictKind: "hooks_never_ran"
});

function X(e) {
  let o = e.origin;
  return o?.kind === "plugin" && o.asUser !== !0 ? xCt(e.text, o.name, {
    midTurn: !1
  }) : e.text;
}

var Y = (e, o, r) => ({
  proceeds: {
    text: e,
    sessionTitle: o,
    ...r !== void 0 && r.length > 0 && {
      context: r
    }
  }
});

var N = (e, o) => ({
  ...e,
  ...o?.length && {
    context: o
  }
});

var _e = (e, o, r) => !e ? {
  ended: J()
} : e.blocked ? N(w(e, e.blocked, o.text), o.context) : {
  ...Y(X(o), r, o.context),
  wasCancelled: e.wasCancelled
};

var Z = e => e.aborted;

function q(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0;
}

var ee = "the turn was interrupted while the prompt was checked";

var oe = e => e instanceof pd;

var ve = (e, o) => ir(e) === ir(o?.made);

var j = (e, o) => e || Z(o);

var te = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";

var sjs = (e, o) => e.plugins !== o.plugins;

function re() {
  let e = new WeakMap, o = 0;
  return {
    of: r => {
      let n = e.get(r);
      if (n === void 0) o += 1, n = o, e.set(r, n);
      return n;
    }
  };
}

var se = re();

function B() {
  let e = qCt("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([ se.of(qqe.plugins()), e.map(r => [ r.plugin, r.generation ]) ]);
}

var qnr = (e, o) => ({
  ...Wt(e, "warning", void 0, _),
  promptSubmitEnding: {
    ending: o,
    promptKept: !0
  }
});

var ne = e => e === void 0 ? gIe : `${gIe}: ${e}`;

var Ynr = e => xe({
  content: e,
  isMeta: !0
});

var pe = (e, o, r) => ({
  blocked: e,
  stopped: o,
  ...r && {
    wasCancelled: !0
  }
});

var ie = (e, o) => Txn({
  promptSource: e ?? "sdk",
  wakeupSource: o
});

function me(e, o) {
  return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== !0 && o.aborted;
}

async function Xnr({text: e, context: o, result: r, promptSource: n, wakeupSource: u, tiers: x}) {
  let m, f = o.abortController.signal.aborted;
  try {
    for await (let s of qot(e, de(o).mode, o, ie(n, u), x)) {
      if (s.message?.type === "progress") continue;
      if (me(s, o.abortController.signal)) f = !0;
      if (s.blockingError) {
        let d = j(f, o.abortController.signal), a = s.blockingError.promptEnding;
        return {
          blocked: R(z(xLe(s.blockingError), e, s.suppressOriginalPrompt), a !== void 0 && "noVerdict" in a ? {
            kind: "no_verdict",
            noVerdictKind: a.noVerdict
          } : {
            kind: "blocked_by_hook",
            ...GOn(a?.reason)
          }),
          ...d && {
            wasCancelled: !0
          }
        };
      }
      if (s.preventContinuation) {
        let d = ne(s.stopReason);
        return r.messages = [ ...r.messages, Ynr(d), qnr(d, {
          kind: "stopped_by_hook",
          ...GOn(s.stopReason)
        }) ], r.shouldQuery = !1, r.resultText = d, r.allowedTools = void 0, pe(r, d, j(f, o.abortController.signal));
      }
      if (s.sessionTitle) m = s.sessionTitle;
      let c = s.additionalContexts;
      if (c !== void 0 && c.length > 0) r.messages = [ ...r.messages, akn(c) ];
      let h = q(s.message);
      if (h) r.messages = [ ...r.messages, h ];
    }
  } catch (s) {
    let y = qtn(s, o.abortController.signal), c = !oe(s);
    if (!y) throw s;
    t(c ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)" : "UserPromptSubmit hooks cancelled (control stream closed)");
  }
  return j(f, o.abortController.signal) ? {
    sessionTitle: m,
    wasCancelled: !0
  } : {
    sessionTitle: m
  };
}

var ue = e => ({
  ...e,
  messages: [ ...e.messages ],
  allowedTools: e.allowedTools && [ ...e.allowedTools ]
});

var I5r = e => VIn(e) !== "" || B() !== "";

var Jnr = () => Ge().loadedModules.some(e => !rY(e.args.pluginStorageId) && (e.hooks("prompt.submit") || e.hooks("classic.UserPromptSubmit")));

var no = e => e === void 0 || e.hooks !== "" || [ "prompt.submit", "classic.UserPromptSubmit" ].some(o => qCt(o).some(r => r.tier !== "builtin"));

var MDe = e => ({
  permissionMode: de(e).mode,
  hooks: VIn(e),
  plugins: B(),
  hooksSkippedByTrust: G4()
});

function O5r(e, {latch: o}) {
  let r, n = !1;
  return () => {
    if (n || o && r) return r;
    try {
      r = MDe(e());
    } catch (u) {
      r = void 0, n = o, t(`could not read what screens a prompt now: ${u}`, {
        level: "error"
      });
    }
    return r;
  };
}

var oKt = (e, o) => e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";

var ae = (e, o) => ({
  scratch: e,
  blocked: o.blocked,
  sessionTitle: o.sessionTitle,
  stopped: o.stopped,
  wasCancelled: o.wasCancelled
});

function co({result: e, context: o, promptSource: r, wakeupSource: n}) {
  let u, x, m = new Map, f = new Set;
  async function s(a, p) {
    let k = p.managedHooksExcluded === !0, P = ue(k ? x?.scratch ?? e : e), l = ae(P, await Xnr({
      text: a,
      context: o,
      result: P,
      promptSource: r,
      wakeupSource: n,
      tiers: p
    }));
    return m.delete(a), m.set(a, l), l;
  }
  function y(a, p) {
    let k = s(a, p);
    return f.add(k), k.finally(() => f.delete(k));
  }
  async function c() {
    while (f.size > 0) await Promise.allSettled([ ...f ]);
  }
  function I() {
    let [a, p] = [ ...m ].at(-1) ?? [];
    return p?.blocked !== void 0 && p.stopped === void 0 ? a : void 0;
  }
  async function h(a) {
    let p = await y(a, Xot);
    return x = p, u = p.sessionTitle ?? u, p;
  }
  function d(a) {
    let p = m.get(a);
    if (!p) return;
    return e.messages = p.scratch.messages, e.allowedTools = p.scratch.allowedTools, 
    e.shouldQuery = p.scratch.shouldQuery, e.resultText = p.scratch.resultText, u = p.sessionTitle ?? u, 
    p;
  }
  return {
    managed: h,
    pass: y,
    commit: d,
    settled: c,
    blockedText: I,
    managedRun: () => x,
    sessionTitle: () => u
  };
}

var fe = ({submission: e, attachments: o, origin: r, turnId: n, shouldWait: u}) => ({
  text: e.text,
  wait: u,
  ...o.length > 0 && {
    attachments: o
  },
  origin: r,
  ...n !== void 0 && {
    turnId: n
  },
  ...e.command !== void 0 && {
    command: e.command
  },
  ...e.isMeta === !0 && {
    isMeta: e.isMeta
  }
});

function ijs(e) {
  let o = !1;
  return {
    origin: e?.origin,
    settle(r) {
      o = !0, e?.settle(r);
    },
    settleWhen(r) {
      o = !0, r.then(n => e?.settle(n), () => e?.settle({
        drop: te
      }));
    },
    [Symbol.dispose]() {
      if (!o) o = !0, e?.settle({
        drop: te
      });
    }
  };
}

function ce(e, o) {
  let r = sl("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o);
}

function le(e, o) {
  let r = new Set(o ?? []);
  for (let n of e.toSorted((u, x) => x.index - u.index)) {
    let u = n.returned, x = L(u) ? u.context : void 0, m = (JF(x) ?? []).filter(s => !r.has(s));
    if (m.length === 0) continue;
    for (let s of m) r.add(s);
    let f = m.reduce((s, y) => s + y.length, 0);
    t(`prompt.submit: ${n.plugin} put ${m.length} context ${m.length === 1 ? "entry" : "entries"} (${f} characters) on its result after next(); not attached, the prompt had entered`, {
      level: "warn"
    });
  }
}

async function lkn({submission: e, origin: o, bridgeOrigin: r, mode: n, turnId: u, shouldWait: x, context: m, result: f, promptSource: s, wakeupSource: y, queued: c, isStartInput: I, enter: h}) {
  if (!I) await y3.get();
  let {signal: d} = m.abortController, a = O5r(() => m, {
    latch: !1
  }), p = () => no(a()) || Jnr(), k = p(), P = () => k || p();
  if (k && d.aborted) return c?.settle({
    drop: ee
  }), Cvt;
  let l = co({
    result: f,
    context: m,
    promptSource: s,
    wakeupSource: y
  }), E = FYt(Yar), {unplaceable: U} = e, H = Gjs(async (i, g) => {
    if (U !== void 0 && i !== e.text) return {
      drop: U
    };
    let b = await (g.managedHooksOnly ? l.managed(i) : l.pass(i, g));
    if (M(b) && P()) throw Tpe(d);
    return V(i, b.blocked);
  }, E.perform), D, A = await Gjn($Yt(E, SWs(wWs(e.input, e.pastedContents), m.options.mainLoopModel, i => Drt({
    signal: d,
    origin: c?.origin,
    core: {
      "prompt.submit": H.core
    },
    managed: {
      "prompt.submit": H.managed
    },
    trace: g => {
      if (D) le(g, D.context);
    }
  }).prompt.submit(fe({
    submission: e,
    attachments: i,
    origin: frs({
      origin: o,
      bridgeOrigin: r,
      wakeupSource: y,
      mode: n,
      promptSource: s
    }),
    turnId: u,
    shouldWait: x
  })))), d);
  if (A === void 0) {
    await l.settled();
    let i = l.blockedText(), g = i === void 0 ? void 0 : l.commit(i), C = g?.blocked, b = i !== void 0 && g !== void 0 && C !== void 0;
    return t("prompt.submit: interrupted while a hook checked the prompt: " + (b ? "the block given beneath it stands" : "no verdict")), 
    c?.settle(b ? V(i, C) : {
      drop: ee
    }), b ? N(w(g, C, i), H.arrivedContext()) : Cvt;
  }
  if (A.arrived) {
    let i = A.arrived;
    if (D = i, i.text !== e.text) t(`prompt.submit: text rewritten by a hook (${e.text.length} -> ${i.text.length} chars)`);
    let g = _e(l.commit(i.text), i, l.sessionTitle()), b = g.wasCancelled === !0 && P() && g.proceeds ? Cvt : g, G = ce(h, b);
    return c?.settleWhen(G.then(() => i)), G.then(() => E.done(i), ke => E.failed(ke)), 
    b;
  }
  let T = A.answered, S = H.runs.last(), F = Wjs(T, S?.made);
  t(`prompt.submit: dropped (${F.drop})`), c?.settle(F);
  let v = l.managedRun();
  if (v?.blocked) return l.commit(e.text), w(v, v.blocked, e.text);
  if (U !== void 0 && S?.made.drop === U) return {
    ended: R(U, {
      kind: "no_verdict",
      noVerdictKind: "rewrite_unplaceable"
    })
  };
  let O = S ? l.commit(S.input) : void 0, W = O?.blocked, ge = T.drop !== void 0 && S !== void 0 && !ve(T, S), ye = H.arrivedContext();
  if (S !== void 0 && O !== void 0 && W !== void 0 && !ge) return N(w(O, W, S.input), ye);
  if (d.aborted && (O?.blocked === void 0 || M(O)) && P()) return Cvt;
  let Q = T.drop !== void 0;
  return {
    ended: R(Q ? `Prompt dropped by a hook: ${Nqe(T.drop)}` : `Prompt not submitted: ${Yar}`, Q ? {
      kind: "dropped_by_hook",
      ...GOn(T.drop)
    } : {
      kind: "not_passed_on"
    })
  };
}

export { akn, Cvt, sjs, qnr, Ynr, Xnr, I5r, Jnr, MDe, O5r, oKt, ijs, lkn };
