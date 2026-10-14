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

import { vt, ce } from "./chunk-xywp7esx.js";

import { EF, ARe, mP, kF } from "./chunk-sqb9meyh.js";

import { Ia } from "./chunk-rkw37sbq.js";

var g8n = "https://clau.de/chrome/permissions", m = {
  install: EF,
  reconnect: ARe,
  permissions: g8n
};

async function lqs({mcpClients: s, atStartup: i}) {
  let l = await kF().catch(e => (t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`, {
    level: "error"
  }), !1)), o = ce(), r = s.some(e => e.name === Ia && e.type === "connected"), n = o.chromeExtension?.pairedDeviceName;
  return {
    allowed: mP(),
    subscriber: vt(),
    wsl: a.isWslEnvironment(),
    installed: l,
    connected: r,
    ...r && n && {
      paired_browser: n
    },
    enabled_by_default: o.claudeInChromeDefaultEnabled ?? !1,
    at_startup: await i(o.claudeInChromeDefaultEnabled === !0),
    urls: {
      ...m
    }
  };
}

export { g8n, lqs };
