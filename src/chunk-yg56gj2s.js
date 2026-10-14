// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { qmr } from "./chunk-mtek6k5r.js";

import { O9t } from "./chunk-hyv5czza.js";

var FE = {
  init: {
    usage: "plugin init <name>",
    aliases: [ "new" ],
    description: "Scaffold a new plugin at ~/.claude/skills/<name>/ (auto-loads next session as <name>@skills-dir)"
  },
  validate: {
    usage: "plugin validate <path>",
    description: "Validate a plugin or marketplace manifest, or the skills, agents, and commands in a directory"
  },
  tag: {
    usage: "plugin tag [path]",
    description: "Create a {name}--v{version} git tag for a plugin release, validating that plugin.json and any enclosing marketplace entry agree"
  },
  list: {
    usage: "plugin list",
    description: "List installed plugins"
  },
  eval: {
    usage: "plugin eval [target]",
    description: "Run eval cases (<eval dir>/**/case.yaml or prompt.md + graders/*.md; the eval dir is evals/ unless --eval-dir or the manifest says otherwise) against a plugin and report scored results. " + "Target is a path, a plugin name, or a `plugin@marketplace` id \u2014 installed and skills-dir plugins both resolve (and add a no-plugin baseline arm). " + "It loads the plugin and runs its eval suite (prompts, graders; scaffold scripts and real MCP servers only when you opt in) on your machine, as you: only evaluate plugins you trust \u2014 the run's sandboxing limits what a malicious plugin can reach but is not a guarantee, and a bundled suite passing is not a security vetting. The first run in an untrusted plugin directory asks you to confirm (--trust-plugin answers for CI)",
    earlyAccess: "pluginEval"
  },
  evalInit: {
    usage: "plugin eval init [name]",
    description: "Author an eval suite under the eval dir (evals/ unless --eval-dir or the manifest says otherwise) via an interview that sources inputs and designs graders. Use --bare <name> for a blank single-case template.",
    earlyAccess: "pluginEval"
  },
  test: {
    usage: "plugin test [dir]",
    description: "Run a mod's tests",
    earlyAccess: "hooksModules"
  },
  details: {
    usage: "plugin details <name>",
    description: "Show a plugin's component inventory and projected token cost"
  },
  marketplaceAdd: {
    usage: "plugin marketplace add <source>",
    description: "Add a marketplace from a URL, path, or GitHub repo"
  },
  marketplaceList: {
    usage: "plugin marketplace list",
    description: "List all configured marketplaces"
  },
  marketplaceRemove: {
    usage: "plugin marketplace remove <name>",
    aliases: [ "rm" ],
    description: "Remove a configured marketplace"
  },
  marketplaceUpdate: {
    usage: "plugin marketplace update [name]",
    description: "Update marketplace(s) from their source - updates all if no name specified"
  },
  install: {
    usage: "plugin install <plugin>",
    aliases: [ "i" ],
    description: "Install a plugin from available marketplaces (use plugin@marketplace for specific marketplace)"
  },
  uninstall: {
    usage: "plugin uninstall <plugin>",
    aliases: [ "remove", "rm" ],
    description: "Uninstall an installed plugin"
  },
  prune: {
    usage: "plugin prune",
    aliases: [ "autoremove" ],
    description: "Remove auto-installed dependencies that are no longer needed"
  },
  enable: {
    usage: "plugin enable <plugin>",
    description: "Enable a disabled plugin"
  },
  disable: {
    usage: "plugin disable [plugin]",
    description: "Disable an enabled plugin"
  },
  update: {
    usage: "plugin update <plugin>",
    description: "Update a plugin to the latest version (restart required to apply)"
  },
  configure: {
    usage: "plugin configure <plugin>",
    description: "Show a plugin's options and which are unset, or save values from stdin with --values-stdin"
  }
};

function x4o() {
  let a = {
    pluginEval: O9t(),
    hooksModules: qmr()
  };
  return Object.values(FE).filter(e => e.earlyAccess === void 0 || a[e.earlyAccess]);
}

export { FE, x4o };
