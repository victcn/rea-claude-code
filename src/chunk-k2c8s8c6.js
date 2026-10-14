// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { k } from "./chunk-xywp7esx.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { a, tr } from "./chunk-j016gcgm.js";

import { hu } from "./chunk-5brm0azz.js";

import { $Ds, Pi } from "./chunk-8yperama.js";

import { h1n } from "./chunk-ann91fyn.js";

import { bVe } from "./chunk-vsygs6ss.js";

import { eS } from "./chunk-yxkwn8vg.js";

import { oo } from "./chunk-vjmbaret.js";

import { o, oe, ue } from "./chunk-cvcg6n1z.js";

function DQo() {
  return tr.CLAUDE_CODE_ARTIFACT_MCP ?? !0;
}

function LQo() {
  return ue(o().min(1).max(64), oe()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${eS}\` skill for the current contract and per-capability guidance.`);
}

function O3r(i) {
  let s = new Map;
  for (let e of i) {
    if (e.mcpInfo?.scope !== "claudeai") continue;
    let t = e.mcpInfo.serverName, r = s.get(t);
    if (r !== void 0) {
      r.toolNames.push(e.mcpInfo.toolName);
      continue;
    }
    let n = e.mcpInfo.displayName ?? t;
    s.set(t, {
      server: n,
      toolPrefix: oo(e.name)?.serverName ?? t,
      toolNames: [ e.mcpInfo.toolName ],
      ...h1n(n) ? {} : {
        declarable: !1
      }
    });
  }
  return [ ...s.values() ];
}

function M3r(i) {
  let s = `mcp__${Pi}__`, e = new Set;
  for (let t of i) {
    if (!t.name.startsWith(s)) continue;
    let r = t.name.slice(s.length), n = r.indexOf("__");
    if (n > 0) e.add(r.slice(0, n));
  }
  return [ ...e ];
}

function H3r() {
  return hu();
}

function d(i) {
  let s = new Map, e = new Set;
  for (let r of i) {
    let n = r.mcpInfo;
    if (n?.serverType !== "sdk" || Vt(n.serverName) === null) continue;
    let l = s.get(n.serverName);
    if (l !== void 0) {
      l.toolNames.push(n.toolName);
      continue;
    }
    if (e.has(n.serverName)) continue;
    let c = n.serverInfoName ?? "";
    if (c.trim() === "" || Vt(c.trim()) !== null) {
      e.add(n.serverName);
      continue;
    }
    s.set(n.serverName, {
      server: c,
      toolPrefix: n.serverName,
      toolNames: [ n.toolName ],
      ...h1n(c) ? {} : {
        declarable: !1
      }
    });
  }
  let t = [ ...s.values() ];
  return {
    named: t.filter(r => r.declarable !== !1),
    unnamedIds: [ ...e ],
    undeclarable: t.filter(r => r.declarable === !1)
  };
}

function p() {
  return k("tengu_cobalt_plinth_yew", !1);
}

function D3r(i, s) {
  let e = H3r() ? d(i) : null, t = bVe(s ?? []);
  if (!t) return {
    ccrHosted: !1,
    metaConnector: null,
    hosted: e
  };
  let r = a.CLAUDE_CODE_REMOTE === !0, n = t.name, l = i.find(f => f.mcpInfo?.serverName === n), c = l && oo(l.name)?.serverName, m = c && p() ? {
    server: $Ds,
    toolPrefix: c
  } : null;
  return {
    ccrHosted: r,
    metaConnector: m,
    hosted: e
  };
}

function NQo(i, s) {
  let {metaConnector: e, hosted: t} = D3r(i, s), r = [ ...O3r(i), ...t === null ? [] : [ ...t.named, ...t.undeclarable ] ];
  return e ? [ ...r, e ] : r;
}

export { DQo, LQo, O3r, M3r, H3r, D3r, NQo };
