// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ve } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { X } from "./chunk-1zg3hbfq.js";

import { ip } from "./chunk-xywp7esx.js";

import { Akt, gQr, mqe, ni, K4, cf } from "./chunk-84yp45y8.js";

import { _r, aUe } from "./chunk-35kwehd0.js";

import { Xm } from "./chunk-9wtp3skp.js";

import { Q6e, Yxe, Hkr } from "./chunk-4dpx2qvt.js";

import { yB, fTe, hwt, mTe, her } from "./chunk-1cvvd6ss.js";

async function gB(r) {
  let n = performance.now(), i = !1, e, a = mTe(), o = !1;
  if (her()) t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"), 
  e = performance.now(), await fTe(), i = !0, o = !0; else if (!a && !Yxe()) ; else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || ve() || await d(r.storageV5)) {
    if (a) t("[mcp-policy-cold-start] waiting on remote managed-settings load"), e = performance.now(), 
    await yB(), i = !0;
    o = !0;
  } else t("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
  if (e !== void 0 && aUe("mcp_policy_settings_wait_ms") === void 0) {
    let s = performance.now() - e, c = hwt();
    _r("mcp_policy_settings_wait_ms", s, e), X(c ? "warn" : "info", "mcp_policy_settings_wait", {
      waited_ms: Math.round(s),
      timed_out: c
    });
  }
  if (Q6e("settings", () => !i ? "not_awaited" : hwt() ? "timed_out" : "completed", {
    since: i ? n : void 0
  }), o && Yxe()) {
    if (t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"), 
    await Hkr() === "timed_out") t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it");
  }
}

async function d(r) {
  for (let n of K4) if (Object.keys(cf(n, {
    expandVars: !1
  }).servers).length > 0) return !0;
  if (mqe()) return !0;
  try {
    for (let {record: e} of gQr(Akt())) for (let [a, o] of Object.entries(e ?? {})) if ((o === !0 || Array.isArray(o)) && !Xm(a)) return !0;
    let {enabled: n, errors: i} = await ni(r);
    if (i.length > 0) return !0;
    for (let e of n) if (!e.isBuiltin || e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0) return !0;
  } catch {
    return !0;
  }
  return ip();
}

export { gB };
