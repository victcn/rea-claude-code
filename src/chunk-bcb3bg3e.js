// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Lr } from "./chunk-3pqddg8f.js";

import { d } from "./chunk-6ah1819r.js";

import { O3e, Sn, vt, An, Xwe } from "./chunk-xywp7esx.js";

import { Ane } from "./chunk-g8dhxbna.js";

import { QEe, xyt, lge } from "./chunk-g069zc0m.js";

import { e } from "./chunk-xx3xgkvz.js";

import { js } from "./chunk-9g86mkx2.js";

function s(a) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`;
}

async function BKs(a, i) {
  return zWe(a, i, "upgrade_command");
}

async function zWe(a, i, l) {
  let u = Ane(a), c = s(l);
  try {
    if (vt()) {
      let o = Sn(), n = !1;
      if (o?.subscriptionType && o?.rateLimitTier) n = o.subscriptionType === "max" && o.rateLimitTier === "default_claude_max_20x"; else if (o?.accessToken) {
        let t = await O3e(o.accessToken);
        n = t?.organization?.organization_type === "claude_max" && t?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (n) {
        let t = Xwe();
        return setTimeout(u, 0, t ? `You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.` : "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."), 
        null;
      }
    }
    await js(c);
    let r = An(), m = r && {
      accountUuid: r.accountUuid,
      organizationUuid: r.organizationUuid
    }, p = Lr();
    return e(lge, {
      startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: async (o, n, t) => {
        let g = await QEe(i, o, {
          setAppState: t,
          previousAccount: m,
          previousGatewayAuth: p
        });
        u(...xyt(i, o, g));
      }
    });
  } catch (r) {
    d(r), setTimeout(u, 0, `Failed to open browser. Please visit ${c} to upgrade.`);
  }
  return null;
}

export { BKs, zWe };
