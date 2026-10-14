// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function hut(t) {
  let i = !1, r, n = {
    addDir: [],
    pluginDir: [],
    pluginDirNoMcp: [],
    settings: void 0,
    managedSettings: void 0,
    mcpConfig: [],
    strictMcpConfig: !1,
    restricted: !1
  }, g = [], d = {
    "--cwd": e => {
      r = e;
    },
    "--settings": e => {
      n.settings = e;
    },
    "--managed-settings": e => {
      n.managedSettings = e;
    },
    "--setting-sources": () => {},
    "--add-dir": e => n.addDir.push(e),
    "--plugin-dir": e => n.pluginDir.push(e),
    "--plugin-dir-no-mcp": e => n.pluginDirNoMcp.push(e),
    "--mcp-config": e => n.mcpConfig.push(e)
  };
  for (let e = 0; e < t.length; e++) {
    let s = t[e];
    if (s === "agents" && !i) {
      i = !0;
      continue;
    }
    if (s === "--strict-mcp-config") {
      n.strictMcpConfig = !0;
      continue;
    }
    if (s === "--restricted") {
      n.restricted = !0;
      continue;
    }
    let o = s.indexOf("="), l = o === -1 ? s : s.slice(0, o), a = Object.hasOwn(d, l) ? d[l] : void 0;
    if (a) {
      if (o !== -1) a(s.slice(o + 1)); else if (e + 1 < t.length) a(t[++e]); else g.push(s);
      continue;
    }
    g.push(s);
  }
  return {
    hasAgentsPositional: i,
    cwdFilter: r,
    config: n,
    rest: g
  };
}

function Ewo(t) {
  let i = t.trim();
  return i === "~" || i.startsWith("~/");
}

function yut(t, i) {
  let r = (n, g) => n === "" || g && n.trimStart().startsWith("{") ? n : i(n);
  return {
    settings: t.settings === void 0 ? void 0 : r(t.settings, !0),
    managedSettings: t.managedSettings,
    pluginDir: t.pluginDir.map(n => r(n, !1)),
    pluginDirNoMcp: t.pluginDirNoMcp.map(n => r(n, !1)),
    addDir: t.addDir.map(n => Ewo(n) ? n : r(n, !1)),
    mcpConfig: t.mcpConfig.map(n => r(n, !0)),
    strictMcpConfig: t.strictMcpConfig,
    restricted: t.restricted,
    settingSources: t.settingSources
  };
}

function zse(t) {
  return [ ...t.settings ? [ "--settings", t.settings ] : [], ...t.managedSettings ? [ "--managed-settings", t.managedSettings ] : [], ...t.pluginDir.flatMap(i => [ "--plugin-dir", i ]), ...t.pluginDirNoMcp.flatMap(i => [ "--plugin-dir-no-mcp", i ]), ...t.addDir.flatMap(i => [ "--add-dir", i ]), ...t.mcpConfig.flatMap(i => [ "--mcp-config", i ]), ...t.settingSources !== void 0 ? [ `--setting-sources=${t.settingSources}` ] : [], ...t.strictMcpConfig ? [ "--strict-mcp-config" ] : [], ...t.restricted ? [ "--restricted" ] : [] ];
}

function YRs(t) {
  let i = 0;
  while (t[i] === "--dangerously-skip-permissions" || t[i] === "--allow-dangerously-skip-permissions") i++;
  return t[i] === "daemon" ? t.slice(i + 1) : null;
}

function F1(t = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.BUILD_REF_NAME) {
  return "";
}

export { hut, Ewo, yut, zse, YRs, F1 };
