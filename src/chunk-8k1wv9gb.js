// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-jkzenvsk.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-hwdwjvh8.js";

import { E } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import { x9e } from "./chunk-q6wab2jw.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import { mt } from "./chunk-j90se18b.js";

import "./chunk-vjmbaret.js";

import "./chunk-zx69jgxc.js";

import { bHo, O } from "./chunk-1xnsr4dy.js";

import { readdir as u, readFile as d, stat as p } from "fs/promises";

import { homedir as m } from "os";

import { join as l } from "path";

async function g() {
  let o = O();
  if (!bHo.includes(o)) throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
  if (o === "macos") return l(m(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let i = a.USERPROFILE ? a.USERPROFILE.replace(/\\/g, "/") : null;
  if (i) {
    let e = `/mnt/c${i.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return await p(e), e;
    } catch {}
  }
  try {
    try {
      let e = await u("/mnt/c/Users", {
        withFileTypes: !0
      });
      for (let r of e) {
        if (r.name === "Public" || r.name === "Default" || r.name === "Default User" || r.name === "All Users") continue;
        let s = l("/mnt/c/Users", r.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
        try {
          return await p(s), s;
        } catch {}
      }
    } catch {}
  } catch (n) {
    t(`Failed scanning /mnt/c/Users for Claude Desktop config: ${n}`, {
      level: "error"
    });
  }
  throw Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.");
}

async function R() {
  if (!bHo.includes(O())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(), i;
    try {
      i = await d(o, {
        encoding: "utf8"
      });
    } catch (s) {
      if (E(s) === "ENOENT") return {};
      throw s;
    }
    let n = mt(i);
    if (!n || typeof n !== "object") return {};
    let e = n.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = x9e().safeParse(c);
      if (f.success) r[s] = f.data;
    }
    return r;
  } catch (o) {
    return t(`Failed to read Claude Desktop MCP servers: ${o}`, {
      level: "error"
    }), {};
  }
}

export { R as readClaudeDesktopMcpServers };
