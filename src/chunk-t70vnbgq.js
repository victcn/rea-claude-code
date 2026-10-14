// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { qa, mn, gk, Mvo } from "./chunk-8drhysk2.js";

import { Y, qHo, Vee, b_, En, t } from "./chunk-kawq2919.js";

import { Ma, P$t, Mv, nt } from "./chunk-5wbhf1bk.js";

import { ENt, W5, Us, ze } from "./chunk-r2h53bm2.js";

import { ll } from "./chunk-hmce8a0s.js";

import { wE } from "./chunk-nnrb0acr.js";

import { a } from "./chunk-j016gcgm.js";

import { Xa } from "./chunk-3kb22va7.js";

import { Bn } from "./chunk-q6wab2jw.js";

import { o, u, U } from "./chunk-cvcg6n1z.js";

import { oc, MG } from "./chunk-zx69jgxc.js";

import { O } from "./chunk-1xnsr4dy.js";

function vOt(e) {
  if (yUn()) return `Claude Code won't load marketplace "${ze(e)}": its name looks like the name of one of Anthropic's own marketplaces`;
  return `Claude Code refuses the marketplace name "${ze(e)}": it looks like one of Anthropic's own`;
}

function hUn(e, n) {
  return `Failed to load marketplace "${ze(e)}": ${n}`;
}

function yUn() {
  return !1;
}

var M = 64;

function h(e, n = "it") {
  let i = e.length <= M ? qa("plugin marketplace remove", e) : null;
  return i === null ? `Remove ${n} in /plugin \u2192 Marketplaces` : `Remove ${n} with: ${i}`;
}

var E = "this also uninstalls its plugins and deletes their data, options and secrets", S = "if its maintainer renames it, update it instead", w = [ "Removing it is the only fix. That also uninstalls its plugins and deletes what they saved:", "their data, options and secrets." ], B = "After removing it, you can add it again from the same source; if that is refused, its maintainer has to rename it first.", j = [ "It was added from a settings file. To keep it, do these in order (if your organization's managed settings add it, an administrator does step 1):", "1. In each settings file that lists it under extraKnownMarketplaces, rename its entry (the key and its source.name) to a plain-ASCII name that doesn't look like one of Anthropic's." ], F = "(this also uninstalls its plugins and deletes their data, options and secrets).", G = "3. Start Claude Code again, in that project's folder if it is a project's settings file, then install its plugins from the renamed one.";

function v(e) {
  return [ ...j, `2. ${h(e, "the old name")}`, F, G ];
}

function _(e) {
  return [ ...w, B, h(e) ];
}

function _Un(e, n = {}) {
  if (n.declaredInSettings === !0) return `Reloading won't help. ${v(e).join(" ")}`;
  if (yUn()) return `Reloading won't help. ${_(e).join(" ")}`;
  return `Reloading won't help. ${h(e)} (${E}; ${S})`;
}

function cho(e, n = {}) {
  let i = yUn(), s = i ? [ `Claude Code won't load marketplace "${ze(e)}":`, "its name looks like the name of one of Anthropic's own marketplaces. Reloading won't help." ] : [ `Claude Code refuses the marketplace name "${ze(e)}":`, "it looks like one of Anthropic's own. Reloading won't help." ];
  if (n.declaredInSettings === !0) return [ ...s, ...v(e) ];
  if (i) return [ ...s, ..._(e) ];
  return [ ...s, h(e), `(${E};`, `${S}).` ];
}

var uho = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Reloading won't help. Remove it in /plugin \u2192 Marketplaces (deletes its plugins and their data, options and secrets).", H = "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Rename it in its settings file, remove the old name in /plugin \u2192 Marketplaces (plugins and data go), then restart.";

function pho(e) {
  return e ? H : uho;
}

var y = (e, n) => `${e} only while "${ze(n)}" is disabled. Disable or uninstall the copy you don't need`;

var wFe = {
  "network-location": "re-add the marketplace (one added from a folder or file must be re-added from a copy on this computer), or, to trust a folder on a network drive, declare it under extraKnownMarketplaces in user or managed settings",
  source: "re-add the marketplace with a supported source",
  declaration: "re-add the marketplace from the source that entry lists, or change the entry"
};

var W = [ "available", "required", "auto_install", "not_available" ], bUn = p(() => U(W));

function Uwr(e) {
  return bUn().safeParse(e).data;
}

function fho(e, n, i, s, l = !1) {
  {
    let d = ze(e), r = n && n.length > 0 ? `now lists it as ${n.map(f => ze(f)).join(" or ")}` : s !== void 0 ? `still lists it, but Claude Code cannot install it (${ze(s)})` : i ? "now lists a different repository under that name" : l ? "does not list it (or your organization blocks it)" : "no longer lists it (removed, or blocked by your organization)";
    return l ? `Plugin "${d}" is not loaded: installed_plugins.json could not be read, so its install could not be checked, and the Anthropic Directory ${r}` : `Plugin "${d}" is not loaded: the Anthropic Directory ${r}`;
  }
  return "";
}

function EOt(e) {
  return e.type === "marketplace-load-failed" && e.reason === "cache-miss" && e.marketplace === mn && e.directoryBlockedBy === void 0;
}

var kOt = `Run /reload-plugins, or: claude plugin marketplace update ${mn}`;

function wZt(e) {
  if (e.type === "marketplace-not-found" && e.marketplace !== mn && gk(e.marketplace) && e.registrationHidden !== void 0) {
    let n = Mvo(e.marketplace);
    return n === null ? "Remove that entry from known_marketplaces.json, then uninstall this plugin if it is still listed" : `Remove it: ${n}`;
  }
  return;
}

function mho(e) {
  switch (e) {
   case "managed_setting":
    return "Your administrator turned it off with disablePluginDirectory in managed settings.";

   case "allowlist":
    return "Your administrator's marketplace allowlist (strictKnownMarketplaces) does not include the Anthropic Directory.";

   case "blocklist":
    return "Your administrator listed it in blockedMarketplaces in managed settings.";

   case "policy_limit":
    return "Your organization's policy does not allow it.";
  }
  return "";
}

function Bwr(e) {
  if (e.directoryDisabledByOrganization) return "managed_setting";
  if (e.marketplace !== mn || e.sourceUnverifiable) return null;
  return e.blockedByBlocklist ? "blocklist" : "allowlist";
}

function TOt(e, n) {
  {
    let i = mho(n), s = e === void 0 ? "The Anthropic Directory is blocked by your organization" : `Plugin "${ze(e)}" is not loaded: the Anthropic Directory is blocked by your organization`;
    return i === "" ? s : `${s}. ${i}`;
  }
  return "";
}

var vZt = "(not recorded)", V = {
  "path-not-found": !1,
  "path-traversal": !1,
  "mcp-config-invalid": !1,
  "lsp-config-invalid": !1,
  "hook-load-failed": !1,
  "component-load-failed": !1,
  "mcpb-download-failed": !1,
  "mcpb-extract-failed": !1,
  "mcpb-invalid-manifest": !1,
  "lsp-server-start-failed": !1,
  "lsp-server-crashed": !1,
  "lsp-request-timeout": !1,
  "lsp-request-failed": !1,
  "plugin-not-installed": !1,
  "marketplace-blocked-by-policy": !1,
  "autoupdate-blocked-by-pinner": !1,
  "autoupdate-deferred-entry-helper": !1,
  "autoupdate-disabled-by-policy": !1,
  "plugin-cache-miss": !0,
  "generic-error": !0,
  "manifest-parse-error": !0,
  "manifest-validation-error": !0,
  "marketplace-not-found": !0,
  "marketplace-load-failed": !0,
  "plugin-not-found": !0,
  "git-auth-failed": !0,
  "git-timeout": !0,
  "network-error": !0,
  "dependency-unsatisfied": !0,
  "dependency-version-unsatisfied": !0
};

function bxe(e) {
  if (e.type === "path-not-found") return e.plugin === void 0 && e.errno !== void 0;
  if (e.type === "plugin-not-installed") return e.seedHasOtherVersion === !0 || e.registryReadFailed === !0;
  if (e.type === "generic-error") return e.orphan !== !0 && e.refused !== !0;
  if (e.type === "marketplace-load-failed") return e.untrustedReservedName !== !0 && e.nameRefused !== !0 && e.directoryBlockedBy === void 0;
  if (e.type === "marketplace-not-found") return e.registrationHidden === void 0 || e.registrationHidden === "network-location";
  if (e.type === "plugin-not-found") return e.removedFromDirectory !== !0 || e.registryReadFailed === !0;
  return V[e.type];
}

function vFe(e) {
  return e.type === "dependency-unsatisfied" || e.type === "dependency-version-unsatisfied";
}

function $Se(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  let n = e.source.lastIndexOf("@");
  if (n > 0) return e.source.slice(0, n);
  return;
}

function Sxe(e) {
  return e.type === "autoupdate-deferred-entry-helper" || e.type === "autoupdate-disabled-by-policy";
}

function gho(e) {
  return `"${ze(e)}" is loaded from your claude.ai account but meets a marketplace dependency only for other claude.ai plugins`;
}

function NS(e) {
  return Bn(q(e));
}

function q(e) {
  switch (e.type) {
   case "generic-error":
    return W5(e.error);

   case "path-not-found":
    return e.plugin === void 0 ? `Path not found: ${Us(e.path)}${e.errno ? ` (${ze(e.errno)})` : ""}` : `Path not found: ${Us(e.path)} (${ze(e.component)}${e.errno ? `, ${ze(e.errno)}` : ""})`;

   case "path-traversal":
    return `Path escapes plugin directory: ${Us(e.path)} (${ze(e.component)})${e.reason ? ` \u2014 ${Us(e.reason)}` : ""}`;

   case "git-auth-failed":
    return `Git authentication failed (${ze(e.authType)}): ${Us(e.gitUrl)}`;

   case "git-timeout":
    return `Git ${ze(e.operation)} timeout: ${Us(e.gitUrl)}`;

   case "network-error":
    return `Network error: ${Us(e.url)}${e.details ? ` - ${ze(e.details)}` : ""}`;

   case "manifest-parse-error":
    return `Manifest parse error: ${ze(e.parseError, 500)} (in ${Us(e.manifestPath)})`;

   case "manifest-validation-error":
    return `Manifest validation failed: ${ze(e.validationErrors.join(", "), 1e3)} (in ${Us(e.manifestPath)})`;

   case "plugin-not-found":
    if (e.removedFromDirectory) return fho(e.pluginId, e.directoryRenamedTo, e.directoryIdentityChanged === !0, e.directoryNotInstallableReason, e.registryReadFailed === !0);
    return `Plugin ${ze(e.pluginId)} not found in marketplace ${ze(e.marketplace)}`;

   case "marketplace-not-found":
    if (e.registrationHidden !== void 0) {
      let n = `Marketplace ${ze(e.marketplace)} is added but ignored`;
      return e.registrationHiddenReason === void 0 ? `${n} (see the debug log)` : `${n}. ${Ma(ENt(e.registrationHiddenReason))}. ${Ma(wFe[e.registrationHidden])}.`;
    }
    return `Marketplace ${ze(e.marketplace)} not found`;

   case "marketplace-load-failed":
    if (e.directoryBlockedBy !== void 0) return TOt($Se(e) ?? e.source, e.directoryBlockedBy);
    if (EOt(e)) return `Plugin "${ze($Se(e) ?? e.source)}" is not loaded: the Anthropic Directory's catalog is not on this machine yet.`;
    if (e.nameRefused) return vOt(e.marketplace);
    return `Marketplace ${ze(e.marketplace)} failed to load: ${ze(e.reason)}`;

   case "mcp-config-invalid":
    return `MCP server ${ze(e.serverName)} invalid: ${ze(e.validationError)}`;

   case "hook-load-failed":
    return `Hook load failed: ${ze(e.reason)}`;

   case "component-load-failed":
    return `${ze(e.component)} load failed from ${Us(e.path)}: ${ze(e.reason)}`;

   case "mcpb-download-failed":
    return `Failed to download MCPB from ${Us(e.url)}: ${ze(e.reason)}`;

   case "mcpb-extract-failed":
    return `Failed to extract MCPB ${Us(e.mcpbPath)}: ${ze(e.reason)}`;

   case "mcpb-invalid-manifest":
    return `MCPB manifest invalid at ${Us(e.mcpbPath)}: ${ze(e.validationError)}`;

   case "lsp-config-invalid":
    return `Plugin "${ze(e.plugin)}" has invalid LSP server config for "${ze(e.serverName)}": ${ze(e.validationError)}`;

   case "lsp-server-start-failed":
    return `Plugin "${ze(e.plugin)}" failed to start LSP server "${ze(e.serverName)}": ${ze(e.reason)}`;

   case "lsp-server-crashed":
    if (e.signal) return `Plugin "${ze(e.plugin)}" LSP server "${ze(e.serverName)}" crashed with signal ${e.signal}`;
    return `Plugin "${ze(e.plugin)}" LSP server "${ze(e.serverName)}" crashed with exit code ${e.exitCode ?? "unknown"}`;

   case "lsp-request-timeout":
    return `Plugin "${ze(e.plugin)}" LSP server "${ze(e.serverName)}" timed out on ${ze(e.method)} request after ${e.timeoutMs}ms`;

   case "lsp-request-failed":
    return `Plugin "${ze(e.plugin)}" LSP server "${ze(e.serverName)}" ${ze(e.method)} request failed: ${ze(e.error)}`;

   case "marketplace-blocked-by-policy":
    {
      let n = Bwr(e);
      if (n !== null) return TOt(e.plugin, n);
      if (e.blockedByBlocklist) return `Marketplace '${ze(e.marketplace)}' is blocked by enterprise policy`;
      return `Marketplace '${ze(e.marketplace)}' is not in the allowed marketplace list`;
    }

   case "dependency-unsatisfied":
    {
      let n = qa("plugin install", e.dependency), i = e.reason === "not-enabled" ? "disabled \u2014 enable it or remove the dependency" : `not installed \u2014 ${e.sameNameSyncedPlugin === void 0 ? "" : `${gho(e.sameNameSyncedPlugin)}; `}${n ? `run \`${n}\`, or ` : ""}check that its marketplace is added`;
      return `Dependency "${ze(e.dependency)}" is ${i}`;
    }

   case "dependency-version-unsatisfied":
    return `Requires "${ze(e.dependency)}" ${ze(e.required)}, installed ${ze(e.installed ?? "version unknown")}`;

   case "plugin-cache-miss":
    if (e.registryReadFailed === !0) return `Plugin "${ze(e.plugin)}" is not loaded: installed_plugins.json could not be read, so its install could not be checked \u2014 fix or restore installed_plugins.json in the plugins directory, then run /reload-plugins${e.installedListHeldNote === void 0 ? "" : `. ${e.installedListHeldNote}`}`;
    return `Plugin "${ze(e.plugin)}" not cached at ${Us(e.installPath)} \u2014 run /plugin to refresh${e.installedListHeldNote === void 0 ? "" : `. ${e.installedListHeldNote}`}`;

   case "plugin-not-installed":
    {
      let n = qa("plugin install", e.source, "--scope project");
      if (e.installedListHeldNote !== void 0) return `Plugin "${ze(e.plugin)}" is enabled in project settings, but whether it is installed could not be checked. ${e.installedListHeldNote}`;
      return `Plugin "${ze(e.plugin)}" is enabled in project settings but isn't installed${n ? ` \u2014 run \`${n}\`` : " \u2014 install it at project scope (from /plugin or claude plugin install)"}`;
    }

   case "autoupdate-deferred-entry-helper":
   case "autoupdate-disabled-by-policy":
    return e.message;

   case "autoupdate-blocked-by-pinner":
    {
      let n = e.heldAt ? ` at ${Us(e.heldAt)}` : "", i = ze(e.blockedBy.join(", ")), s = e.disabledPinners.length > 0 ? ` (note: ${ze(e.disabledPinners.join(", "))} ${e.disabledPinners.length === 1 ? "is" : "are"} currently disabled)` : "";
      return `Autoupdate held "${ze(e.plugin)}"${n} \u2014 version constraint from ${i}${s}`;
    }
  }
}

function z7(e) {
  return Bn(X(e));
}

function X(e) {
  switch (e.type) {
   case "folder-shadowed-by-manifest":
    {
      let n = R(e.manifestFields);
      return `Default ${ze(e.component)}/ folder is ignored because the manifest sets ${n}`;
    }

   case "mcp-server-suppressed-duplicate":
    {
      let n = e.duplicateOf.startsWith("plugin:") ? `server provided by plugin "${ze(e.duplicateOf.split(":")[1] ?? "?")}"` : `already-configured "${ze(e.duplicateOf)}"`;
      return `MCP server "${ze(e.serverName)}" skipped \u2014 same command/URL as ${n}`;
    }

   case "mcpb-needs-config":
    return `Bundled MCP server "${ze(e.serverName)}" was not started: it needs configuration`;

   case "plugin-renamed":
    return e.renamedTo === null ? `Removed from the "${ze(e.marketplace)}" marketplace` : `Renamed to "${ze(e.renamedTo)}" in the "${ze(e.marketplace)}" marketplace`;

   case "lsp-extension-conflict":
    {
      let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] : void 0, i = n ? `plugin "${ze(n)}"` : `"${ze(e.activeServer)}"`;
      return `LSP server "${ze(e.serverName)}" is not used for ${ze(e.extension)} files \u2014 ${i} already registered a server for that extension`;
    }

   case "project-scope-suppressed-untrusted":
   case "project-scope-server-stripped":
    return ENt(e.warning);

   case "broken-wikilink":
    return `${ze(e.raw)} in ${Us(e.filePath)}:${e.line} doesn't resolve to a skill`;

   case "synced-plugin-shadowed":
    return `"${ze(e.source)}" from claude.ai not loaded \u2014 "${ze(e.shadowedBy)}" on this machine has the same name and takes precedence`;

   case "hooks-left-out-by-name":
    return `Its hooks.json hooks do not run. "${ze(e.heldBy)}" holds the same plugin name and comes first`;

   case "hooks-module-left-out-by-name":
    return `Its hooks module does not load. "${ze(e.heldBy)}" holds the same plugin name and comes first`;

   case "hooks-passed-over":
    return `Its hooks on ${e.patterns.map(i => ze(i)).join(", ")} do not run here: where an organization manages Claude Code, these events pass over the plugins you install`;

   case "managed-hooks-restricted":
    return `"${ze(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;

   case "managed-plugin-disabled-by-settings":
    return `"${ze(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;

   case "ineffective-disable":
    return `Disabled in ~/.claude/settings.json but still loads \u2014 ${wE(e.overriddenBy)} settings enable it, which overrides your user setting`;

   case "dependencies-refused":
    return `The packages it lists were not installed, because ${ze(nt(e.reason, ";"))}`;

   case "dependencies-not-installed":
    {
      let n = qa("plugin update", e.source);
      return `The packages it lists are not installed. ${n ? `Run \`${n}\` to install them` : "Update it from /plugin to install them"}`;
    }
  }
}

function jwr(e) {
  return Bn(J(e));
}

function J(e) {
  switch (e.type) {
   case "folder-shadowed-by-manifest":
    {
      let n = R(e.manifestFields);
      if (e.manifestFields.length === 1) return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${n} list if you want both`;
      return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`;
    }

   case "project-scope-suppressed-untrusted":
    return "Accept the trust dialog for this workspace, then run /reload-plugins.";

   case "project-scope-server-stripped":
    return "Monitors from project @skills-dir plugins are not supported \u2014 install the plugin at user scope instead.";

   case "broken-wikilink":
    return e.reason === "invalid" ? "Wikilink names may use letters, digits, dash, underscore \u2014 rename the link" : `Create one of: ${e.tried.map(n => Us(n)).join(" or ")}, or fix the link spelling`;

   case "mcp-server-suppressed-duplicate":
    {
      if (e.duplicateOf.startsWith("plugin:")) {
        let n = e.duplicateOf.split(":")[1] ?? "the other plugin";
        return `Disable plugin "${ze(n)}" if you want this plugin's version instead`;
      }
      return `Remove "${ze(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`;
    }

   case "mcpb-needs-config":
    return `Open "${ze(e.plugin)}" in the Installed tab and choose Configure`;

   case "lsp-extension-conflict":
    {
      let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] ?? "the other plugin" : e.activeServer;
      if (n === e.plugin) return `Plugin "${ze(e.plugin)}" declares two LSP servers for ${ze(e.extension)} \u2014 remove or reorder "${ze(e.serverName)}" in its lspServers config`;
      return `Disable plugin "${ze(n)}" to use this plugin's LSP server for ${ze(e.extension)} files, or disable "${ze(e.plugin)}" to silence this warning`;
    }

   case "synced-plugin-shadowed":
    {
      let n = qa("plugin enable", e.source);
      return `To use the claude.ai copy instead, ${n ? `run \`${n}\`` : "enable it from /plugin"}, then disable or remove "${ze(e.shadowedBy)}"`;
    }

   case "hooks-left-out-by-name":
    return y("One plugin per name runs hooks.json hooks, so this copy's run", e.heldBy);

   case "hooks-module-left-out-by-name":
    return y("One plugin per name loads a hooks module, so this copy's loads", e.heldBy);

   case "hooks-passed-over":
    return "Only a plugin that counts as your organization's own runs hooks on these events. An administrator sets that up in managed settings";

   case "managed-hooks-restricted":
    return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";

   case "managed-plugin-disabled-by-settings":
    {
      let n = qa("plugin enable", e.source);
      return `To run it, ${n ? `run \`${n}\`` : "enable it from /plugin"}; if you did not expect this copy, remove its directory`;
    }

   case "plugin-renamed":
    return e.renamedTo === null ? `Remove "${ze(e.source)}" from enabledPlugins if you still see this on the next start` : `If you still see this on the next start, update enabledPlugins to use "${ze(e.renamedTo)}@${ze(e.marketplace)}" (managed settings are not rewritten automatically)`;

   case "dependencies-refused":
    return "If it needs those packages, parts of it may not work. Updating or reinstalling this version of the plugin will not install them while that is still true";

   case "dependencies-not-installed":
    return "If it needs those packages, parts of it may not work";

   case "ineffective-disable":
    switch (e.overriddenBy) {
     case "projectSettings":
      return `Set "enabledPlugins": {"${ze(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;

     case "localSettings":
      return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";

     case "flagSettings":
      return `Remove "${ze(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;

     case "policySettings":
      return "Managed policy can't be overridden locally \u2014 contact your administrator";

     case "userSettings":
      return "";
    }
  }
}

function R(e) {
  return e.map(n => `"${n}"`).join(" and ");
}

import { basename as x, isAbsolute as ie, join as g, relative as se, sep as re } from "path";

import { resolve as Z } from "path";

function SUn(e) {
  let n = Z(e).normalize("NFC");
  return O() === "windows" ? n.toLowerCase() : n;
}

function Wwr(e, n, i, s) {
  let l = new Map;
  if (Buffer.byteLength(n) > i) return t(`Ignoring ${e}: larger than the size cap`), 
  l;
  let d;
  try {
    d = Y(n);
  } catch {
    return t(`Ignoring ${e}: not valid JSON`), l;
  }
  if (typeof d !== "object" || d === null || Array.isArray(d)) return t(`Ignoring ${e}: not a JSON object`), 
  l;
  for (let [r, f] of Object.entries(d)) {
    let m = s(f);
    if (m !== void 0) l.set(SUn(r), m);
  }
  return l;
}

var AOt = ".meta.json", EFe = "server_plugin_id", wUn = "marketplace_name", vUn = "installation_preference", N = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${b_}]{1,128}$`, "u");

function hho(e) {
  return N.test(e);
}

var zwr = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;

function Nue(e) {
  return zwr.test(e);
}

var Q = p(() => u({
  [EFe]: o().regex(zwr).optional().catch(void 0),
  [wUn]: o().regex(N).optional().catch(void 0),
  [vUn]: bUn().optional().catch(void 0)
})), yho = 4096;

async function ee(e) {
  let n = e + AOt, i = await Xa(n, yho);
  if (i === null) return {};
  let s;
  try {
    s = Y(i);
  } catch {
    return t(`Ignoring plugin attribution sidecar at ${n}: not valid JSON`), {};
  }
  return A(s, `sidecar at ${n}`);
}

function A(e, n) {
  let i = Q().safeParse(e);
  if (!i.success) return t(`Ignoring plugin attribution ${n}: not a JSON object`), 
  {};
  let s = {}, l = i.data[EFe];
  if (typeof l === "string" && Nue(l)) s.serverPluginId = l;
  let d = i.data[wUn];
  if (typeof d === "string" && hho(d)) s.marketplaceName = d;
  let r = Uwr(i.data[vUn]);
  if (r !== void 0) s.installationPreference = r;
  if (typeof e === "object" && e !== null) {
    for (let [f, m] of [ [ EFe, s.serverPluginId ], [ wUn, s.marketplaceName ], [ vUn, s.installationPreference ] ]) if (f in e && m === void 0) t(`Ignoring plugin attribution field (${n}): invalid ${f}`);
  }
  return s;
}

var te = 65536;

function ne(e) {
  let n = a.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
  if (n === void 0) return;
  return Wwr("CLAUDE_CODE_PLUGIN_ATTRIBUTION", n, te, i => A(i, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry")).get(SUn(e));
}

async function EUn(e) {
  return ne(e) ?? await ee(e);
}

var _H = "manifest.json", COt = ".marketplaces.json", oe = /^[A-Za-z0-9_-]{1,128}$/;

function $ue(e) {
  return oe.test(e);
}

var k = ".marketplace-";

function _ho(e) {
  if (!$ue(e)) throw Error("claude.ai marketplace id is not a tagged id");
  return `${k}${e}.json`;
}

function uvs(e) {
  return e.startsWith(k) && e.endsWith(".json") && $ue(e.slice(k.length, -5));
}

var pvs = ".last-complete-round";

function Gwr(e, n = {
  pid: process.pid,
  procStart: void 0
}) {
  return `${n.pid}:${n.procStart ?? ""}/${e}`;
}

function kdt(e) {
  let n = e.indexOf("/");
  if (n === -1) return {
    name: e,
    ownerPid: void 0,
    ownerProcStart: void 0
  };
  let i = e.slice(0, n), s = i.indexOf(":"), l = s === -1 ? i : i.slice(0, s), d = s === -1 ? "" : i.slice(s + 1), r = Number(l);
  return {
    name: e.slice(n + 1),
    ownerPid: Number.isInteger(r) && r > 0 ? r : void 0,
    ownerProcStart: d || void 0
  };
}

class i6e extends Error {
  constructor() {
    super("synced item name is a legacy alias of a reserved path");
    this.name = "LegacyReservedSpellingError";
  }
}

var S1 = "synced", Vwr = ".trash", N8 = ".staging", P = "unbound", ae = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;

function ROt(e) {
  return ae.test(e);
}

function Kwr(e, n) {
  return `${e.toLowerCase()}_${n?.toLowerCase() ?? P}`;
}

function b(e) {
  let [n, i, ...s] = e.split("_");
  if (s.length > 0 || n === void 0 || i === void 0 || !ROt(n) || !(i === P || ROt(i))) return null;
  return {
    org: n,
    account: i
  };
}

function kFe(e) {
  return b(e) !== null;
}

function a6e(e) {
  return b(e)?.org ?? null;
}

var le = ".bucket-";

function qwr(e, n) {
  return g(e, `${le}${n}`);
}

function fvs(e) {
  let n = b(e);
  if (n === null) return null;
  return n.account === P ? "<org>_unbound" : "<org>_<account>";
}

var D = /~g(?:[2-9]|[1-9]\d+)$/;

function l6e(e) {
  return e.replace(D, "");
}

function xOt(e) {
  return e.replace(/[. ]+$/, "");
}

function T(e) {
  let n = xOt(e.replace(/[<>:"|?*\\/]/g, "_"));
  if (!n) throw Error("synced item name resolves to sync root");
  return n;
}

function ue(e, n) {
  let i = g(n, e), s = se(n, i);
  if (!s || ie(s) || s === ".." || s.startsWith(`..${re}`)) throw Error("synced item name escapes the sync root");
  return i;
}

function Vm(e) {
  return e.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").replace(/\u1e9e/g, "\xdf").normalize("NFD").toUpperCase().toLowerCase();
}

var de = /^[!-~]+$/, ce = 32, kUn = 512, pe = 16777216, I = MG(new oc({
  max: 8192,
  maxSize: pe,
  sizeCalculation: (e, n) => n.length + e.length
}));

function yb(e) {
  if (de.test(e)) return e.toLowerCase();
  if (e.length < ce || e.length > kUn) return C(e);
  let n = I.get(e);
  if (n === void 0) n = C(e), I.set(P$t(e), n);
  return n;
}

function C(e) {
  return Vm(qHo(Vee(Mv(e)).replace(/[\p{Z}\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2800]/gu, "").replace(/[\p{Pd}\u2212]/gu, "-").replace(/[\ua789\u2236\u0589\u05c3\u02d0]/g, ":")));
}

function LY(e) {
  return ll(e).startsWith(".");
}

function bho(e) {
  return ll(e) === ".git";
}

function QV(e) {
  return Vm(xOt(e)) === S1;
}

function NY(e, n) {
  let i = T(e);
  if (En(i) !== i) throw Error("synced item name contains display-hazard characters");
  if (LY(i)) throw Error("synced item name resolves to reserved path");
  if (Vm(i).endsWith(AOt)) throw Error("synced item name resolves to reserved path");
  if (D.test(Vm(i))) throw Error("synced item name resolves to reserved path");
  if (kFe(Vm(i))) throw Error("synced item name resolves to reserved path");
  return d6e(e, n);
}

function Sho(e, n, i) {
  let s = NY(e, i);
  return n <= 1 ? s : g(i, `${x(s)}~g${n}`);
}

function d6e(e, n) {
  let i = T(e), s = Vm(ll(i));
  if (s === _H || s === N8) {
    let l = i.toLowerCase();
    if (l === _H || l === N8) throw Error("synced item name resolves to reserved path");
    throw new i6e;
  }
  if (L(s)) {
    if (L(i.toLowerCase())) throw Error("synced item name resolves to reserved path");
    throw new i6e;
  }
  return ue(i, n);
}

function L(e) {
  let n = nt(e, ".").replace(/ +$/, "");
  return /~\d/.test(e) || /^(con|prn|aux|nul|com[0-9\u00B9\u00B2\u00B3]|lpt[0-9\u00B9\u00B2\u00B3])$/.test(n);
}

function TUn(e, n) {
  let i;
  try {
    i = JSON.parse(e);
  } catch {
    return "claim-all";
  }
  if (!Array.isArray(i?.skills)) return "claim-all";
  if (i.staleDirs !== void 0 && !Array.isArray(i.staleDirs)) return "claim-all";
  if (i.pendingClaims !== void 0 && !Array.isArray(i.pendingClaims)) return "claim-all";
  let s = new Set, l = i.skills.flatMap(r => typeof r === "object" && r !== null && typeof r.name === "string" ? [ r.name ] : []), d = (i.pendingClaims ?? []).flatMap(r => typeof r === "string" ? [ kdt(r).name ] : []);
  for (let r of [ l, i.staleDirs, d ]) if (Array.isArray(r)) {
    for (let f of r) if (typeof f === "string") for (let m of ge(f, n)) s.add(m);
  }
  return s;
}

function ge(e, n) {
  let i = [ POt(e) ];
  try {
    i.push(POt(x(d6e(e, n))));
  } catch {}
  return i;
}

function POt(e) {
  return Vm(ll(e));
}

var ZV = g("skills", S1), c6e = g("skills", Vwr), AUn = g("skills", N8), mvs = g(ZV, N8), w1 = g("plugins", S1), TFe = g("plugins", Vwr), gvs = g(w1, N8);

export { vOt, hUn, yUn, _Un, cho, uho, pho, wFe, bUn, Uwr, fho, EOt, kOt, wZt, mho, Bwr, TOt, vZt, bxe, vFe, $Se, Sxe, gho, NS, z7, jwr, SUn, Wwr, AOt, EFe, wUn, vUn, hho, zwr, Nue, yho, EUn, _H, COt, $ue, _ho, uvs, pvs, Gwr, kdt, i6e, S1, Vwr, N8, ROt, Kwr, kFe, a6e, qwr, fvs, l6e, xOt, Vm, kUn, yb, LY, bho, QV, NY, Sho, d6e, TUn, POt, ZV, c6e, AUn, mvs, w1, TFe, gvs };
