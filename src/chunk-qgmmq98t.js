// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { RF, I7, C5e, ySe, xF, B$n } from "./chunk-5ad06083.js";

async function jUt(f, r) {
  let [o, s] = await Promise.allSettled([ xF(void 0, f, r), B$n(void 0, r) ]), i = o.status === "rejected" ? l(o.reason) : null, d = o.status === "fulfilled" ? o.value : [], a = s.status === "fulfilled" ? s.value : [], t = [ ...d, ...a ], e = ySe(), u = e.ignoredUntrustedPool ?? null;
  if (e.id !== void 0 && I7(e.id) && !t.some(n => RF(n) === e.id)) t.push({
    kind: "self_hosted_pool",
    pool_id: e.id,
    name: e.id,
    created_at: "",
    alive_runner_count: 0
  });
  if (t.length === 0) return {
    availableTargets: [],
    selectedTarget: null,
    selectedTargetSource: null,
    environmentsError: i,
    ignoredUntrustedPool: u
  };
  let c = C5e(d, n => n.kind !== "bridge") ?? a[0] ?? t[0], g = null;
  if (e.id !== void 0) {
    let n = t.find(m => RF(m) === e.id);
    if (n) c = n, g = e.source ?? null;
  }
  return {
    availableTargets: t,
    selectedTarget: c,
    selectedTargetSource: g,
    environmentsError: i,
    ignoredUntrustedPool: u
  };
}

export { jUt };
