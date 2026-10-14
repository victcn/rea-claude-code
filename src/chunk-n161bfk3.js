// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ye } from "./chunk-b0z4bv3v.js";

import { gc, We, Ea } from "./chunk-nvtwm272.js";

import { f } from "./chunk-3ykz5st8.js";

import { k } from "./chunk-xywp7esx.js";

import { d } from "./chunk-6ah1819r.js";

import { ha } from "./chunk-h6xggfqh.js";

var C = 5e3, S = 4e3, l = 1e3, m = 4e3, b = 1e3, p = 250;

function FYo(e) {
  e.browserRosterVersion++, e.browserRosterChanged.emit();
}

async function UYo(e) {
  let n = ha(), t = n.bridgeBinding, o = t?.socketClient;
  if (t === void 0 || o?.listConnectedExtensions === void 0 || o.hasActiveSelection?.() === !0 || !k("tengu_hushed_lantern", !0)) return !1;
  if (!(Boolean(t.context.getPersistedDeviceId?.()) || ((await We(Promise.resolve().then(() => t.context.getLocalDeviceIds?.()), l).catch(() => {}))?.size ?? 0) > 0)) return !1;
  if (n.relayConnectFailed === o && !o.isConnected()) return !1;
  let a = o.listConnectedExtensions.bind(o), i = gc.monotonicNow(), c = n.noBrowserFound?.client === o && n.noBrowserFound.rosterVersion === n.browserRosterVersion, r = c ? "none_cached" : await Ea(g(n, o, a), e, () => new Ye).catch(_ => {
    if (e.aborted) return "aborted";
    return d(_), "failed";
  });
  if (r !== "present" && r !== "roster_changed" && !c) f("chrome_permission_prompt", `browser_check_${r}`, {
    elapsed_ms: Math.round(gc.monotonicNow() - i)
  });
  return r === "none" || r === "none_short_wait" || r === "none_cached";
}

async function g(e, n, t) {
  let o = gc.now() + C;
  if (await We(n.ensureConnected(), S) !== !0) return e.relayConnectFailed = n, "connect_failed";
  e.relayConnectFailed = void 0;
  let s = e.browserRosterVersion, a = gc.now(), i = await w(n, t, l);
  if (i !== "none" || e.browserRosterVersion !== s) return i === "none" ? "roster_changed" : i;
  let c = Math.min(m, o - gc.now() - p);
  if (c < b) return "no_time_to_wait";
  let r = () => {}, _ = new Promise(h => {
    r = e.browserRosterChanged.subscribe(h);
  });
  if (await We(_, c).finally(() => r()), e.browserRosterVersion !== s) return "roster_changed";
  let u = await w(n, t, l);
  if (u !== "none" || e.browserRosterVersion !== s) return u === "none" ? "roster_changed" : u;
  if (gc.now() - a < m) return "none_short_wait";
  return e.noBrowserFound = {
    client: n,
    rosterVersion: s
  }, "none";
}

async function w(e, n, t) {
  let o = await We(n(), t);
  if (!e.isConnected()) return "connection_lost";
  if (o === void 0) return "list_timeout";
  return o.length > 0 ? "present" : "none";
}

export { FYo, UYo };
