// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lne, mle } from "./chunk-r4ha81vg.js";

import { c } from "./chunk-hwdwjvh8.js";

import { Ho, re } from "./chunk-6ah1819r.js";

import { _ } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { ZA } from "./chunk-584kx1w1.js";

class E {
  urlFlows=new Map;
  deps;
  client;
  constructor(e, t) {
    this.deps = e, this.client = t;
  }
  hasCompletionChannel() {
    return this.client?.getProtocolEra?.() !== "modern";
  }
  rebind(e) {
    this.deps = e;
  }
  handle=async (e, t) => {
    let {signal: n} = t, {serverName: o} = this.deps;
    if (ZA({
      name: o
    }) !== void 0) return {
      action: "cancel"
    };
    let s = "transportErrorState" in t ? t.transportErrorState : this.deps.transportErrorState;
    if (s) s.pendingElicitations++;
    re(o, `Received elicitation request: ${_(e)}`);
    let {params: a} = e, l = w(a);
    i("tengu_mcp_elicitation_shown", {
      mode: c(l)
    });
    try {
      let r = await this.deps.runElicitationHooks(o, a, n);
      if (r) return re(o, `Elicitation resolved by hook: ${_(r)}`), i("tengu_mcp_elicitation_response", {
        mode: c(l),
        action: c(r.action),
        byHook: !0
      }), g("mcp_elicitation_handle"), r;
      let d = a.mode === "url" && this.hasCompletionChannel() ? a.elicitationId : void 0, {result: u, flow: h} = await this.ask(a, n, l, d, s);
      re(o, `Elicitation response: ${_(u)}`);
      let p = await this.deps.runElicitationResultHooks(o, u, n, l, d);
      if (p.action !== u.action) i("tengu_mcp_elicitation_result_hook", {
        mode: c(l),
        action: c(p.action)
      });
      if (a.mode === "url" && u.action === "accept" && p.action !== "accept") this.abandonWaiting(d, h);
      return g("mcp_elicitation_handle"), p;
    } catch (r) {
      return Ho(o, `Elicitation error: ${r}`), m("mcp_elicitation_handle", "handler_error"), 
      {
        action: "cancel"
      };
    } finally {
      if (s) s.pendingElicitations--, s.lastElicitationClosedAt = Date.now();
    }
  };
  complete=e => {
    let t = this.urlFlows.get(e);
    if (!t || t.size === 0) return !1;
    for (let n of t) n.completed = !0, n.closeWaiting?.();
    return !0;
  };
  abandonWaiting(e, t) {
    t?.closeWaiting?.(), this.forget(e, t);
  }
  async ask(e, t, n, o, s) {
    if (t.aborted) return {
      result: {
        action: "cancel"
      },
      flow: void 0
    };
    let {serverName: a, requestDialog: l} = this.deps, r;
    if (o !== void 0) {
      r = {
        completed: !1,
        closeWaiting: void 0
      };
      let u = this.urlFlows.get(o);
      if (u) u.add(r); else this.urlFlows.set(o, new Set([ r ]));
    }
    let d = await l(lne, {
      serverName: a,
      params: e,
      ...e.mode === "url" && o === void 0 && {
        userConfirmsCompletion: !0
      }
    }, {
      place: "under",
      signal: t
    });
    if (!t.aborted) i("tengu_mcp_elicitation_response", {
      mode: c(n),
      action: c(d.action)
    });
    if (e.mode === "url" && d.action === "accept" && r) if (r.completed) this.forget(o, r); else this.showWaiting(e, o, r, t, s); else this.forget(o, r);
    return {
      result: d,
      flow: r
    };
  }
  async showWaiting(e, t, n, o, s) {
    let a = new AbortController;
    if (n.closeWaiting = () => a.abort(), s) s.pendingElicitations++;
    try {
      await this.deps.requestDialog(mle, {
        serverName: this.deps.serverName,
        params: e,
        waitingState: {
          actionLabel: "Skip confirmation"
        }
      }, {
        signal: AbortSignal.any([ a.signal, o ]),
        succeeds: !0
      });
    } finally {
      if (s) s.pendingElicitations--, s.lastElicitationClosedAt = Date.now();
    }
    this.forget(t, n);
  }
  forget(e, t) {
    if (e === void 0 || t === void 0) return;
    let n = this.urlFlows.get(e);
    if (!n) return;
    if (n.delete(t), n.size === 0) this.urlFlows.delete(e);
  }
}

function w(e) {
  return e.mode === "url" ? "url" : "form";
}

var f = new WeakMap;

function PSt(e, t) {
  let n = f.get(e);
  if (n) return n.rebind(t), n;
  let o = new E(t, e);
  return f.set(e, o), o;
}

export { PSt };
