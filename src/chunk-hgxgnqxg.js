// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { me, yn, Vo, lr, Td, nI, Rm, Dd } from "./chunk-dexzwy8h.js";

var m = Td({
  command: me(),
  args: lr(me()).optional(),
  env: Rm(me(), me()).optional()
}), b = Td({
  name: me(),
  email: me().email().optional(),
  url: me().url().optional()
}), y = Td({
  type: me(),
  url: me().url()
}), h = m.partial(), _ = m.extend({
  platform_overrides: Rm(me(), h).optional()
}), x = Td({
  type: Dd([ "python", "node", "binary" ]),
  entry_point: me(),
  mcp_config: _
}), M = Td({
  claude_desktop: me().optional(),
  platforms: lr(Dd([ "darwin", "win32", "linux" ])).optional(),
  runtimes: Td({
    python: me().optional(),
    node: me().optional()
  }).optional()
}).passthrough(), O = Td({
  name: me(),
  description: me().optional()
}), S = Td({
  name: me(),
  description: me().optional(),
  arguments: lr(me()).optional(),
  text: me()
}), v = Td({
  type: Dd([ "string", "number", "boolean", "directory", "file" ]),
  title: me(),
  description: me(),
  required: Vo().optional(),
  default: nI([ me(), yn(), Vo(), lr(me()) ]).optional(),
  multiple: Vo().optional(),
  sensitive: Vo().optional(),
  min: yn().optional(),
  max: yn().optional()
}), A = Rm(me(), nI([ me(), yn(), Vo(), lr(me()) ])), k = Td({
  $schema: me().optional(),
  dxt_version: me().optional().describe("@deprecated Use manifest_version instead"),
  manifest_version: me().optional(),
  name: me(),
  display_name: me().optional(),
  version: me(),
  description: me(),
  long_description: me().optional(),
  author: b,
  repository: y.optional(),
  homepage: me().url().optional(),
  documentation: me().url().optional(),
  support: me().url().optional(),
  icon: me().optional(),
  screenshots: lr(me()).optional(),
  server: x,
  tools: lr(O).optional(),
  tools_generated: Vo().optional(),
  prompts: lr(S).optional(),
  prompts_generated: Vo().optional(),
  keywords: lr(me()).optional(),
  license: me().optional(),
  privacy_policies: lr(me()).optional(),
  compatibility: M.optional(),
  user_config: Rm(me(), v).optional()
}).refine(t => !!(t.dxt_version || t.manifest_version), {
  message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
}), w = Td({
  status: Dd([ "signed", "unsigned", "self-signed" ]),
  publisher: me().optional(),
  issuer: me().optional(),
  valid_from: me().optional(),
  valid_to: me().optional(),
  fingerprint: me().optional()
});

function z(t, i) {
  if (typeof t === "string") {
    let n = t;
    for (let [e, r] of Object.entries(i)) {
      let o = new RegExp(`\\$\\{${e}\\}`, "g");
      if (n.match(o)) if (Array.isArray(r)) console.warn(`Cannot replace ${e} with array value in string context: "${t}"`, {
        key: e,
        replacement: r
      }); else n = n.replace(o, r);
    }
    return n;
  } else if (Array.isArray(t)) {
    let n = [];
    for (let e of t) if (typeof e === "string" && e.match(/^\$\{user_config\.[^}]+\}$/)) {
      let r = e.match(/^\$\{([^}]+)\}$/)?.[1];
      if (r && i[r]) {
        let o = i[r];
        if (Array.isArray(o)) n.push(...o); else n.push(o);
      } else n.push(e);
    } else n.push(z(e, i));
    return n;
  } else if (t && typeof t === "object") {
    let n = {};
    for (let [e, r] of Object.entries(t)) n[e] = z(r, i);
    return n;
  }
  return t;
}

async function R(t) {
  let {manifest: i, extensionPath: n, systemDirs: e, userConfig: r, pathSeparator: o, logger: d} = t, c = i.server?.mcp_config;
  if (!c) return;
  let s = {
    ...c
  };
  if (c.platform_overrides) {
    if ("linux" in c.platform_overrides) {
      let p = c.platform_overrides.linux;
      s.command = p.command || s.command, s.args = p.args || s.args, s.env = p.env || s.env;
    }
  }
  if (j({
    manifest: i,
    userConfig: r
  })) {
    d?.warn(`Extension ${i.name} has missing required configuration, skipping MCP config`);
    return;
  }
  let l = {
    __dirname: n,
    pathSeparator: o,
    "/": o,
    ...e
  }, f = {};
  if (i.user_config) {
    for (let [p, a] of Object.entries(i.user_config)) if (a.default !== void 0) f[p] = a.default;
  }
  if (r) Object.assign(f, r);
  for (let [p, a] of Object.entries(f)) {
    let g = `user_config.${p}`;
    if (Array.isArray(a)) l[g] = a.map(String); else if (typeof a === "boolean") l[g] = a ? "true" : "false"; else l[g] = String(a);
  }
  return s = z(s, l), s;
}

function u(t) {
  return t === void 0 || t === null || t === "";
}

function j({manifest: t, userConfig: i}) {
  if (!t.user_config) return !1;
  let n = i || {};
  for (let [e, r] of Object.entries(t.user_config)) if (r.required) {
    let o = n[e];
    if (u(o) || Array.isArray(o) && (o.length === 0 || o.some(u))) return !0;
  }
  return !1;
}

export { k as McpbManifestSchema, R as getMcpConfigForManifest };
