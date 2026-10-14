// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { kt } from "./chunk-r2h53bm2.js";

import { TE, dqn } from "./chunk-1z2heevg.js";

import { vn } from "./chunk-3rbd48rp.js";

var oX = "mcp__";

function oo(e) {
  let n = e.split("__"), [r, t, ...s] = n;
  if (r !== "mcp" || !t) return null;
  let o = s.length > 0 ? s.join("__") : void 0;
  return {
    serverName: t,
    toolName: o
  };
}

function po(e) {
  return `${oX}${vn(e)}__`;
}

function pc(e, n, r) {
  if (e.mcpInfo?.serverName !== void 0) return e.mcpInfo.serverName === n;
  return e.name.startsWith(r ?? po(n));
}

function fA(e) {
  return oo(`${po(e)}x`)?.serverName ?? vn(e);
}

function INs(e, {listedServer: n, parsedServer: r}) {
  if (n !== void 0) return e === n;
  return r !== void 0 && wNt(r, e);
}

function zs(e, n) {
  return `${po(e)}${vn(n)}`;
}

function yan(e) {
  let n = {
    always_allow: 0,
    always_ask: 1,
    always_deny: 2
  }, r = new Map;
  for (let [i, l] of Object.entries(e)) {
    if (l.type !== "http" && l.type !== "sse") continue;
    for (let u of l.tools ?? []) {
      let c = u.permission_policy;
      if (c === void 0) continue;
      let m = n[c];
      if (m === void 0) continue;
      let p = zs(i, u.name), f = r.get(p);
      if (f === void 0 || m > (n[f] ?? -1)) r.set(p, c);
    }
  }
  let t = [], s = [], o = [];
  for (let [i, l] of r) if (l === "always_allow") t.push(i); else if (l === "always_deny") s.push(i); else o.push(i);
  return {
    allow: t,
    deny: s,
    ask: o
  };
}

function ONs(e, n) {
  let r = Object.fromEntries(Object.entries(n).filter(([, i]) => i.scope === "dynamic")), {allow: t, deny: s, ask: o} = yan(r);
  if (t.length === 0 && s.length === 0 && o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      ...t.length > 0 && {
        mcpServerPolicy: t
      }
    },
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      ...s.length > 0 && {
        mcpServerPolicy: s
      }
    },
    alwaysAskRules: {
      ...e.alwaysAskRules,
      ...o.length > 0 && {
        mcpServerPolicy: o
      }
    }
  };
}

function jc(e) {
  return e.mcpInfo ? zs(e.mcpInfo.serverName, e.mcpInfo.toolName) : e.name;
}

function _an(e, n) {
  let r = `mcp__${vn(n)}__`;
  return e.replace(r, "");
}

function ban(e) {
  let n = e.replace(/\s*\(MCP\)\s*$/, "");
  n = n.trim();
  let r = n.indexOf(" - ");
  if (r !== -1) return n.substring(r + 3).trim();
  return n;
}

function iXe(e, n) {
  if (!n) return kt(e, a);
  let r = Qfe(e);
  return r ? `${kt(r.serverName, a)} (from plugin ${kt(r.pluginName, a)})` : kt(e, a);
}

var a = 80;

function Qfe(e) {
  if (!e.startsWith("plugin:")) return;
  let n = e.split(":");
  if (n.length < 3) return;
  return {
    pluginName: n[1],
    serverName: n.slice(2).join(":")
  };
}

function wNt(e, n) {
  if (e.startsWith("plugin:") || n.startsWith("plugin:")) return e === n;
  return vn(e) === vn(n);
}

function IOr(e, n) {
  return YIo(e)(oo(n));
}

function YIo(e) {
  let n = oo(e);
  if (n === null) return () => !1;
  let r = n.toolName === void 0 || n.toolName === "*", t = n.toolName !== void 0 && TE(n.toolName) ? n.toolName : void 0, s;
  return o => o !== null && n.serverName === o.serverName && (r || o.toolName !== void 0 && t !== void 0 && (s ??= dqn(t))(o.toolName));
}

function aXe(e) {
  if (e.mcpInfo) {
    let {serverName: r} = e.mcpInfo;
    return [ `${oX}${vn(r)}`, `${oX}${fA(r)}` ];
  }
  let n = [];
  if (!e.name.startsWith(oX)) return n;
  for (let r = e.name.indexOf("__", oX.length); r !== -1; r = e.name.indexOf("__", r + 1)) n.push(e.name.slice(0, r));
  return n;
}

function MNs(e) {
  let n = oo(e);
  if (n === null || n.toolName === void 0) return n === null ? [] : [ n ];
  return aXe({
    name: e
  }).map(r => ({
    serverName: r.slice(oX.length),
    toolName: e.slice(r.length + 2)
  }));
}

function XIo(e, n) {
  return (n.mcpInfo ? [ `${oX}${vn(n.mcpInfo.serverName)}` ] : aXe(n)).every(r => e === r || e.startsWith(`${r}__`));
}

function lXe(e, n) {
  return IOr(e, jc(n)) && XIo(e, n);
}

function HNs(e, n) {
  return IOr(e, jc(n)) || e.startsWith(oX) && aXe(n).includes(e);
}

export { oX, oo, po, pc, fA, INs, zs, yan, ONs, jc, _an, ban, iXe, Qfe, wNt, IOr, YIo, aXe, MNs, XIo, lXe, HNs };
