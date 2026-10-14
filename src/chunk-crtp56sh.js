// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ts, tEo, VPe, Wrn, Fc } from "./chunk-xywp7esx.js";

import { Cn } from "./chunk-hwdwjvh8.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { Wi } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { vn } from "./chunk-3rbd48rp.js";

class O {
  firstPartyPlugins=new Map;
  loggableMcpServers=new Set;
  anthropicMetricAttribution=new Map;
  emittedUnredacted=!1;
}

var k = new K(() => new O);

function l() {
  return k.of(B().host);
}

function Sfs(t, i) {
  l().firstPartyPlugins.set(t, i);
}

function _(t) {
  return l().firstPartyPlugins.get(t);
}

function oDn(t) {
  l().loggableMcpServers.add(t);
}

var T = "custom", ov = "third-party", f = "custom";

function ooe(t, i, n, e, r) {
  try {
    let o = E(t, i, n);
    if (e) {
      let s = ts(t);
      if (s === "main" || s === "subagent") {
        if (o.attributionMcpServer = e, r) o.attributionMcpTool = r;
      }
    }
    return o;
  } catch (o) {
    return d(o), {};
  }
}

function E(t, i, n) {
  if (!t) return {};
  if (t.startsWith("agent:builtin:")) return {
    attributionAgent: t.slice(14),
    ...A(i)
  };
  if (t.startsWith("agent:custom:")) {
    let e = t.slice(13);
    return {
      attributionAgent: e,
      ...A(i, tEo(e))
    };
  }
  if (t.startsWith("agent:")) return A(i);
  if (ts(t) === "main" && n) return A(n);
  return {};
}

function A(t, i) {
  if (!t) return i ? {
    attributionPlugin: i
  } : {};
  let n = tEo(t) ?? i;
  return {
    attributionSkill: t,
    ...n && {
      attributionPlugin: n
    }
  };
}

function sDn(t, i) {
  let n = H(t, i), e = {};
  if (n.attributionAgent !== void 0) {
    e.attributionAgent = g(n.attributionAgent);
    let r = b(i.attributionAgent, n.attributionAgent, T);
    if (r !== void 0) e.attributionAgentHash = r;
  }
  if (n.attributionSkill !== void 0) {
    e.attributionSkill = g(n.attributionSkill);
    let r = b(i.attributionSkill, n.attributionSkill, ov);
    if (r !== void 0) e.attributionSkillHash = r;
  }
  if (n.attributionPlugin !== void 0) {
    e.attributionPlugin = g(n.attributionPlugin);
    let r = b(i.attributionPlugin, n.attributionPlugin, ov);
    if (r !== void 0) e.attributionPluginHash = r;
  }
  if (n.attributionMcpServer !== void 0) {
    e.attributionMcpServer = g(n.attributionMcpServer);
    let r = b(i.attributionMcpServer, n.attributionMcpServer, f);
    if (r !== void 0) e.attributionMcpServerHash = r;
  }
  if (n.attributionMcpTool !== void 0) {
    e.attributionMcpTool = g(n.attributionMcpTool);
    let r = b(i.attributionMcpTool, n.attributionMcpTool, f);
    if (r !== void 0) e.attributionMcpToolHash = r;
  }
  return e;
}

function b(t, i, n) {
  if (i !== n || t === void 0 || t === n) return;
  return g(VPe(t));
}

var m = [ "agent.name", "skill.name", "plugin.name", "marketplace.name", "mcp_server.name", "mcp_tool.name" ], x = {
  "agent.name": T,
  "skill.name": ov,
  "plugin.name": ov,
  "marketplace.name": void 0,
  "mcp_server.name": f,
  "mcp_tool.name": f
};

function Ugr(t, i) {
  return P(t, i, !1);
}

function wfs(t, i) {
  return P(t, i, !0);
}

function P(t, i, n) {
  try {
    let e = y(v(t, i)), {attributionMcpServer: r, attributionMcpTool: o} = i, s = Fc() ? y({
      ...i,
      attributionMcpServer: r && vn(r),
      attributionMcpTool: r && o && vn(o)
    }) : e;
    if (!n) return s;
    let c = l(), p = c.anthropicMetricAttribution, u = M(s);
    if (u !== M(e)) c.emittedUnredacted = !0;
    let a = p.get(u);
    return p.set(u, a === void 0 ? e : S(a, e)), s;
  } catch (e) {
    return d(e), {};
  }
}

function vfs(t) {
  let i = {};
  for (let o of m) {
    let s = t[o];
    if (s !== void 0) i[o] = String(s);
  }
  if (Object.keys(i).length === 0) return t;
  let n = M(i), e;
  try {
    let o = l();
    if (!o.emittedUnredacted && !Fc()) return t;
    e = o.anthropicMetricAttribution.get(n) ?? S(i, {});
  } catch (o) {
    d(o), e = S(i, {});
  }
  if (M(e) === n) return t;
  let r = {
    ...t
  };
  for (let o of m) if (e[o] === void 0) delete r[o]; else r[o] = e[o];
  return r;
}

function y({attributionAgent: t, attributionSkill: i, attributionPlugin: n, attributionMcpServer: e, attributionMcpTool: r}) {
  let o = n ? _(n) : void 0;
  return {
    ...t && {
      "agent.name": t
    },
    ...i && {
      "skill.name": i
    },
    ...n && {
      "plugin.name": n
    },
    ...o && {
      "marketplace.name": o
    },
    ...e && {
      "mcp_server.name": e
    },
    ...r && {
      "mcp_tool.name": r
    }
  };
}

function S(t, i) {
  let n = {};
  for (let e of m) {
    let r = t[e] === i[e] ? t[e] : x[e];
    if (r !== void 0) n[e] = r;
  }
  return n;
}

function M(t) {
  return Wi(m.map(i => t[i]));
}

function H(t, i) {
  try {
    return v(t, i);
  } catch (n) {
    return d(n), {};
  }
}

function v(t, i) {
  let {attributionAgent: n, attributionSkill: e, attributionPlugin: r, attributionMcpServer: o, attributionMcpTool: s} = i, {firstPartyPlugins: c, loggableMcpServers: p} = l(), u = {};
  if (o !== void 0) {
    let a = p.has(o);
    if (u.attributionMcpServer = a ? vn(o) : f, s !== void 0) {
      let h = a ? Wrn(o) : void 0, F = a && (h === void 0 || h.has(vn(s)));
      u.attributionMcpTool = F ? vn(s) : f;
    }
  }
  if (n !== void 0) if (t?.startsWith("agent:builtin:")) u.attributionAgent = n; else {
    let a = r !== void 0 && c.has(r);
    u.attributionAgent = a ? n : T;
  }
  if (r !== void 0) {
    if (c.has(r)) {
      if (u.attributionPlugin = r, e !== void 0) u.attributionSkill = e;
    } else if (u.attributionPlugin = ov, e !== void 0) u.attributionSkill = ov;
  } else if (e !== void 0) u.attributionSkill = e;
  return u;
}

function g(t) {
  return Cn(t);
}

export { Sfs, oDn, ov, ooe, sDn, Ugr, wfs, vfs };
