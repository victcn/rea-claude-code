// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { it } from "./chunk-zscnwzv2.js";

import { vu } from "./chunk-v7qc2kz8.js";

import { homedir as c } from "os";

import { dirname as v, join as n, resolve as C } from "path";

function s() {
  let e = a.SHELL || "", i = c(), r = n(i, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let o = n(r, "completion.zsh");
    return {
      name: "zsh",
      rcFile: n(i, ".zshrc"),
      cacheFile: o,
      completionLine: `[[ -f "${o}" ]] && source "${o}"`,
      shellFlag: "zsh"
    };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let o = n(r, "completion.bash");
    return {
      name: "bash",
      rcFile: n(i, ".bashrc"),
      cacheFile: o,
      completionLine: `[ -f "${o}" ] && source "${o}"`,
      shellFlag: "bash"
    };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let o = a.XDG_CONFIG_HOME || n(i, ".config"), l = n(r, "completion.fish");
    return {
      name: "fish",
      rcFile: n(o, "fish", "config.fish"),
      cacheFile: l,
      completionLine: `[ -f "${l}" ] && source "${l}"`,
      shellFlag: "fish"
    };
  }
  return null;
}

async function JUr() {
  return;
}

function m(e) {
  let {cmd: i, prefixArgs: r} = vu();
  return it(i, [ ...r, "completion", e.shellFlag, "--output", e.cacheFile ]);
}

export { JUr };
