// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p5, B1, vm } from "./chunk-8drhysk2.js";

import { y6t } from "./chunk-84yp45y8.js";

import { aen } from "./chunk-1dj3skht.js";

function a(e) {
  let t = "plugin" in e ? e.plugin : "no-plugin", n = e.type === "mcpb-needs-config" ? `:${e.serverName}` : "";
  return `${e.type}:${e.source}:${t}${n}`;
}

function hKr(e) {
  return e === "lsp-manager" || e.startsWith("plugin:");
}

function u(e, t) {
  let n = e.filter(s => hKr(s.source)), r = new Set(t.map(l));
  return [ ...n.filter(s => !r.has(l(s))), ...t ];
}

function l(e) {
  return e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`;
}

function g(e, t) {
  let n = e.filter(s => s.source.startsWith("plugin:")), r = new Set(t.map(s => `${s.type}:${s.source}`));
  return [ ...n.filter(s => !r.has(`${s.type}:${s.source}`)), ...t ];
}

class Qq {
  #n;
  #t;
  constructor(e) {
    this.#n = e.getState, this.#t = e.setState;
  }
  static over(e) {
    return new Qq({
      getState: e.getState,
      setState: aen(e.setState)
    });
  }
  get() {
    return this.#n().plugins;
  }
  #e(e) {
    this.#t(t => {
      let n = e(t.plugins);
      return n === t.plugins ? t : {
        ...t,
        plugins: n
      };
    });
  }
  addErrors(e) {
    if (e.length === 0) return;
    this.#e(t => {
      let n = new Set(t.errors.map(i => a(i))), r = e.filter(i => !n.has(a(i)));
      if (r.length === 0) return t;
      return {
        ...t,
        errors: [ ...t.errors, ...r ]
      };
    });
  }
  removeErrorsOf(e) {
    if (e.length === 0) return;
    let t = e.map(n => ({
      id: n,
      ...B1(n)
    }));
    this.#e(n => {
      let r = n.errors.filter(i => {
        let s = B1(i.source).marketplace;
        return !t.some(o => vm(i.source, o.id) || "plugin" in i && i.plugin === o.name && !p5(i.source) && (s === void 0 || s === o.marketplace));
      });
      return r.length === n.errors.length ? n : {
        ...n,
        errors: r
      };
    });
  }
  addWarnings(e) {
    if (e.length === 0) return;
    this.#e(t => {
      let n = new Set(t.warnings.map(i => a(i))), r = e.filter(i => !n.has(a(i)));
      if (r.length === 0) return t;
      return {
        ...t,
        warnings: [ ...t.warnings, ...r ]
      };
    });
  }
  markNeedsRefresh() {
    this.#e(e => e.needsRefresh ? e : {
      ...e,
      needsRefresh: !0
    });
  }
  retarget(e) {
    this.#e(t => {
      let n = t.enabled.findIndex(s => s.source === e.source && s.path === e.path), r = t.enabled[n];
      if (r === void 0) return t;
      let i = y6t(r, e);
      if (i === r) return t;
      return {
        ...t,
        enabled: t.enabled.with(n, i)
      };
    });
  }
  setPendingMarketplaces(e) {
    this.#e(t => ({
      ...t,
      installationStatus: {
        marketplaces: e.map(n => ({
          name: n,
          status: "pending"
        })),
        plugins: []
      }
    }));
  }
  setMarketplaceStatus(e, t, n) {
    this.#e(r => ({
      ...r,
      installationStatus: {
        ...r.installationStatus,
        marketplaces: r.installationStatus.marketplaces.map(i => i.name === e ? {
          ...i,
          status: t,
          error: n
        } : i)
      }
    }));
  }
  applyRefresh(e) {
    this.#t(t => ({
      ...t,
      plugins: {
        ...t.plugins,
        enabled: e.enabled,
        disabled: e.disabled,
        commands: e.commands,
        errors: u(t.plugins.errors, e.errors),
        warnings: g(t.plugins.warnings, e.warnings),
        needsRefresh: !1
      },
      agentDefinitions: e.agentDefinitions,
      mcp: {
        ...t.mcp,
        pluginReconnectKey: t.mcp.pluginReconnectKey + 1
      }
    }));
  }
}

export { hKr, Qq };
