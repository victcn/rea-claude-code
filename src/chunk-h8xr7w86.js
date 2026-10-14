// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gr, Pr, Jg, vht } from "./chunk-z52kmxx4.js";

import { KU, Vc } from "./chunk-5wbhf1bk.js";

import { dn } from "./chunk-nnrb0acr.js";

import { fe, er, xm } from "./chunk-dd98x6x7.js";

import { bd, jg, PN, e_, Cxe } from "./chunk-h36n2zxz.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { s7, ZB } from "./chunk-sg5gpfs4.js";

import { pP, oH, MXt } from "./chunk-sqb9meyh.js";

import { H_t, J1t, $ze } from "./chunk-shxdz2fk.js";

function G9n(t) {
  if (t.type !== "http" || t.headers === void 0) return t;
  return {
    ...t,
    headers: Object.fromEntries(Object.keys(t.headers).map(e => [ e, "" ]))
  };
}

function v(t) {
  let e = 0, n = fe(t)?.hooks ?? {};
  for (let s of Object.values(n)) {
    if (!Array.isArray(s)) continue;
    for (let c of s) e += c.hooks?.length ?? 0;
  }
  return e;
}

function R(t) {
  switch (t.type) {
   case "command":
    return "Command";

   case "prompt":
   case "agent":
    return "Prompt";

   case "http":
    return "URL";

   case "mcp_tool":
    return "MCP tool";

   case "script":
    return t.file !== void 0 ? "Script file" : "Script";

   default:
    return "Definition";
  }
}

function E(t) {
  if (t.type === "script") return t.file ?? t.script ?? "";
  return pP(t);
}

function w(t) {
  if (t.source === "sessionHook") return !Cxe();
  if (Sr("hooks")) return !1;
  if (t.source === "builtinHook") return !0;
  if (e_()) return !1;
  if (t.source === "policySettings") return !0;
  let e = jg();
  if (t.source === "pluginHook") return !Pr() && (!e || ZB()?.has(t.pluginName ?? "") === !0);
  return !e && !bd("hooks");
}

function S(t) {
  let e = t.config, n = t.source === "userSettings" || t.source === "projectSettings" || t.source === "localSettings", s = G9n(e);
  return {
    event: t.event,
    matcher: Vc(t.matcher ?? ""),
    source: t.source,
    sourceLabel: t.source === "flagSettings" ? "Startup settings (--settings option)" : t.source === "policySettings" ? "Managed settings (set by your organization)" : MXt(t.source),
    ...t.pluginName !== void 0 && {
      pluginName: Vc(t.pluginName)
    },
    type: e.type,
    displayText: oH(e),
    commandText: KU(E(e)),
    contentLabel: R(e),
    ..."if" in e && e.if !== void 0 && {
      condition: Vc(e.if)
    },
    ..."timeout" in e && typeof e.timeout === "number" && {
      timeout: e.timeout
    },
    ..."statusMessage" in e && e.statusMessage !== void 0 && e.statusMessage !== "" && {
      statusMessage: Vc(e.statusMessage)
    },
    ..."once" in e && e.once === !0 && {
      runsOnce: !0
    },
    ...e.type === "command" && (e.async === !0 || e.asyncRewake === !0) && {
      runsInBackground: !0
    },
    ...!w(t) && {
      disabled: !0
    },
    ...n && {
      editable: {
        matcher: t.matcher ?? "",
        config: s,
        ...s !== e && {
          headersRedacted: !0
        }
      }
    }
  };
}

function h(t, e) {
  let n = [];
  for (let s of [ "flagSettings", "policySettings" ]) {
    let c = fe(s)?.hooks?.[t];
    if (!Array.isArray(c)) continue;
    for (let u of c) {
      if ((u.matcher ?? "") !== e) continue;
      for (let r of u.hooks) n.push(S({
        event: t,
        config: r,
        matcher: e,
        source: s
      }));
    }
  }
  return n;
}

function UWo(t) {
  let e = fe("policySettings"), n = e?.allowManagedHooksOnly === !0, s = bd("hooks"), c = e?.disableAllHooks === !0, u = er()?.disableAllHooks === !0, r = H_t([]), g = J1t(t, []), b = o => o.source === "sessionHook" || o.source === "pluginHook" || o.source === "builtinHook" || dn(o.source), m = !n && !s, p = [], d = [];
  for (let o of Object.keys(r)) {
    let M = $ze(g, o), a = [], y = new Set;
    for (let i of M) if (y.add(i), a.push(...(g[o]?.[i] ?? []).filter(b).map(S)), m) a.push(...h(o, i));
    if (m) {
      let i = new Set;
      for (let l of [ "flagSettings", "policySettings" ]) {
        let k = fe(l)?.hooks?.[o];
        if (!Array.isArray(k)) continue;
        for (let C of k) {
          let H = C.matcher ?? "";
          if (!y.has(H)) i.add(H);
        }
      }
      for (let l of [ ...i ].sort()) a.push(...h(o, l));
    }
    if (a.length > 0) p.push({
      name: o,
      summary: r[o].summary,
      supportsMatcher: r[o].matcherMetadata !== void 0 || a.some(i => i.matcher !== ""),
      hookCount: a.length
    }), d.push(...a);
  }
  let f = xm().errors.filter(o => o.severity !== "warning").map(o => ({
    file: o.file,
    path: o.path,
    message: o.message
  }));
  return {
    events: p,
    hooks: d,
    eventCatalog: Object.keys(r).map(o => ({
      name: o,
      summary: r[o].summary,
      supportsMatcher: r[o].matcherMetadata !== void 0 || o === "FileChanged"
    })),
    policy: {
      disabledByPolicy: c,
      managedOnly: n,
      pluginOnly: s,
      allDisabled: u,
      policyHookCount: v("policySettings"),
      ...PN() && {
        policyUnreadable: !0
      }
    },
    ...Pr() && {
      safeMode: {
        managedHooksStillApply: s7(),
        exitHint: Jg()
      }
    },
    ...gr() && Sr("hooks") && {
      bareMode: {
        exitHint: vht()
      }
    },
    ...f.length > 0 && {
      errors: f
    }
  };
}

export { G9n, UWo };
