// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { kd, FDs, gfe } from "./chunk-8yperama.js";

import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { jn, bn } from "./chunk-1z2heevg.js";

import { k_ } from "./chunk-84yp45y8.js";

import { tu } from "./chunk-4v78v8fd.js";

import { pLr } from "./chunk-6p1yq3ah.js";

import { Kne } from "./chunk-ct7rjhpc.js";

import { Or } from "./chunk-tba5gzq4.js";

import { nge } from "./chunk-vb9dp3vg.js";

import { wge } from "./chunk-j8fam76f.js";

import { po, pc, zs } from "./chunk-vjmbaret.js";

import { N } from "./chunk-hmqkrrtz.js";

function C() {
  return import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
}

var G = [ 500, 1500, 4e3, 15e3, 6e4 ];

function uLr(s) {
  let {getAppState: w, setAppState: h, getDynamicMcpState: F} = s.stores, r = null, u = Promise.resolve(), y = !1, p = !1, M = 0, c = null;
  function j() {
    if (p) return !1;
    if (c !== null) return !0;
    let e = G[M];
    if (e === void 0) return t("[bridge:projects] reply mount retries exhausted \u2014 the mount stays as it is until the binding changes", {
      level: "warn"
    }), !1;
    return M++, c = setTimeout(() => {
      c = null, A("retry");
    }, e), c.unref(), !0;
  }
  function R() {
    if (M = 0, c !== null) clearTimeout(c), c = null;
  }
  function A(e) {
    return u = u.then(() => U(e)).catch(o => {
      t(`[bridge:projects] converge (${e}) threw: ${l(o)}`, {
        level: "warn"
      });
    }), u;
  }
  async function U(e) {
    if (p) return;
    if (e === "binding_changed") R();
    let o = await s.readHearthBinding();
    if (p) return;
    if (!o.read) {
      if (t(`[bridge:projects] binding read did not answer (${e}) \u2014 mount left as is`, {
        level: "warn"
      }), !r || E(r)) j();
      return;
    }
    let n = pLr({
      hearth: o.assertion
    }, {
      apiBaseUrl: s.apiBaseUrl,
      sessionId: s.sessionId
    });
    if (!n.binding) {
      if (R(), r) {
        t(`[bridge:projects] binding gone (${n.reason}, ${e}) \u2014 dropping the reply mount`);
        let i = r;
        r = null, await b(i);
      }
      return;
    }
    if (S(), r && r.binding.mountUrl === n.binding.mountUrl) {
      if (E(r)) {
        t(`[bridge:projects] the reply mount's dial had failed \u2014 dialing again (${e})`);
        let i = r;
        if (r = null, await b(i), p) return;
        await B(n.binding);
        return;
      }
      P(r, n.binding), r.binding = n.binding;
      return;
    }
    t(`[bridge:projects] joined to a project thread (${e}) \u2014 mounting the reply server`), 
    await B(n.binding);
  }
  async function B(e) {
    if (w().mcp.clients.some(i => i.name === kd) || kd in F().configs || T()) {
      t(`[bridge:projects] reply mount skipped: a server named ${kd} is already configured`, {
        level: "warn"
      }), f("bridge_projects_mcp_mount", "name_taken");
      return;
    }
    let o = gfe({
      ...FDs(e.mountUrl, s.sessionId),
      scope: "dynamic",
      role: "comms"
    }, {
      getBearerToken: s.getBearerToken
    }), n = {
      binding: e,
      config: o,
      allowRules: []
    };
    if (r = n, h(i => wge(i, kd, {
      client: {
        name: kd,
        type: "pending",
        config: o
      },
      tools: [],
      commands: []
    })), !y) n.allowRules = O(e.autoAllowTools.map(i => bn({
      toolName: zs(kd, i)
    })));
    await W(n);
  }
  async function W(e) {
    let o = Or(), n;
    try {
      n = {
        ...await C().reconnectMcpServerImpl(kd, e.config, s.storageV5, s.credentials),
        attemptEpoch: o
      };
    } catch (d) {
      t(`[bridge:projects] reply mount connect threw: ${l(d)}`, {
        level: "warn"
      }), n = {
        client: {
          name: kd,
          type: "failed",
          config: e.config,
          error: "Connection failed"
        },
        tools: [],
        commands: [],
        attemptEpoch: o
      };
    }
    if (r !== e) {
      if (n.client.type === "connected") await C().detachAndCloseConnection(n.client);
      return;
    }
    let i = nge(s.stores, kd, n);
    if (i !== "applied") {
      f("bridge_projects_mcp_mount", i), S();
      return;
    }
    if (n.client.type === "connected") R(), Kne(kd, void 0), g("bridge_projects_mcp_mount"); else if (x(n.client)) if (Kne(kd, Object.assign(Error("reply mount dial failed"), {
      mcpErrorSource: "downstream_unreachable"
    })), j()) f("bridge_projects_mcp_mount", "settled_failed_retrying"); else m("bridge_projects_mcp_mount", "settled_failed"); else m("bridge_projects_mcp_mount", n.client.type === "failed" ? `settled_failed_${(n.client.errorCode ?? "answered").toLowerCase()}` : `settled_${n.client.type}`);
  }
  function E(e) {
    let o = w().mcp.clients.find(n => n.name === kd);
    return o !== void 0 && o.config === e.config && x(o);
  }
  async function b(e) {
    _(e.allowRules);
    let o = w().mcp.clients.find(i => i.name === kd);
    if (o && o.config !== e.config) {
      await D(e.config);
      return;
    }
    let n = po(kd);
    h(i => {
      let {[kd]: d, ...v} = i.mcp.resources, {[kd]: I, ...H} = i.mcp.resourceTemplates;
      return {
        ...i,
        mcp: {
          ...i.mcp,
          clients: i.mcp.clients.filter(a => a !== o),
          tools: i.mcp.tools.filter(a => !pc(a, kd, n)),
          commands: i.mcp.commands.filter(a => !k_(a, kd)),
          resources: v,
          resourceTemplates: H
        }
      };
    }), await D(e.config);
  }
  function S() {
    if (!r) return;
    let e = w().mcp.clients.find(n => n.name === kd);
    if (e && e.config === r.config && !T()) {
      if (!y) P(r, r.binding);
      return;
    }
    t("[bridge:projects] the reply mount\u2019s name is no longer held by its own row \u2014 retracting its pre-approvals", {
      level: "warn"
    });
    let o = r;
    r = null, b(o);
  }
  function T() {
    return Object.hasOwn(s.sdkHostConfigs(), kd);
  }
  function L(e) {
    if (!Object.hasOwn(e, kd)) return;
    if (y = !0, !r) return;
    let o = r.allowRules;
    r.allowRules = [], _(o);
  }
  function V() {
    y = !1, S();
  }
  function P(e, o) {
    if (y) return;
    let n = o.autoAllowTools.map(a => bn({
      toolName: zs(kd, a)
    })), i = new Set(n), d = new Set(e.allowRules), v = e.allowRules.filter(a => !i.has(a));
    if (v.length > 0) _(v);
    let I = e.allowRules.filter(a => i.has(a)), H = O(n.filter(a => !d.has(a)));
    e.allowRules = [ ...I, ...H ];
  }
  function k(e) {
    return N(w().toolPermissionContext.alwaysAllowRules.session ?? [], o => o === e);
  }
  function O(e) {
    if (p) return [];
    if (e.length === 0) return [];
    let o = new Map(e.map(n => [ n, k(n) ]));
    return h(n => ({
      ...n,
      toolPermissionContext: tu(n.toolPermissionContext, {
        type: "addRules",
        destination: "session",
        behavior: "allow",
        rules: e.map(jn)
      })
    })), e.filter(n => k(n) > (o.get(n) ?? 0));
  }
  function _(e) {
    if (e.length === 0) return;
    h(o => {
      let n = [ ...o.toolPermissionContext.alwaysAllowRules.session ?? [] ];
      for (let i of e) {
        let d = n.indexOf(i);
        if (d !== -1) n.splice(d, 1);
      }
      return {
        ...o,
        toolPermissionContext: {
          ...o.toolPermissionContext,
          alwaysAllowRules: {
            ...o.toolPermissionContext.alwaysAllowRules,
            session: n
          }
        }
      };
    });
  }
  function D(e) {
    return C().clearServerCache(kd, e).catch(o => {
      t(`[bridge:projects] reply mount cleanup failed: ${l(o)}`, {
        level: "warn"
      });
    });
  }
  function Y() {
    if (p = !0, R(), r) {
      let e = r.allowRules;
      r.allowRules = [], _(e);
    }
    return u = u.then(async () => {
      if (!r) return;
      t("[bridge:projects] dropping the reply mount");
      let e = r;
      r = null, await b(e);
    }).catch(e => {
      t(`[bridge:projects] drop threw: ${l(e)}`, {
        level: "warn"
      });
    }), u;
  }
  return {
    sync: A,
    drop: Y,
    reassertOwnership: S,
    suspendAllowsForApply: L,
    reassertAfterApply: V,
    current: () => r?.binding ?? null,
    projectFilesDoor: () => r ? {
      channelId: r.binding.channelId,
      sessionId: s.sessionId,
      apiBaseUrl: s.apiBaseUrl,
      getBearerToken: s.getBearerToken,
      getWorkerEpoch: s.getWorkerEpoch
    } : null
  };
}

function x(s) {
  return s.type === "failed" && !q.has(s.errorCode ?? "");
}

var q = new Set([ "CLI_OWNED_BEARER_REJECTED", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN" ]);

export { uLr };
