// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lo } from "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { t } from "./chunk-kawq2919.js";

import { Fj } from "./chunk-a16yb89m.js";

import { d } from "./chunk-6ah1819r.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { Ern, An, v5, sS, Gt, Ce, ce } from "./chunk-xywp7esx.js";

import { Qn } from "./chunk-84yp45y8.js";

var f = 864e5, v = 3e3, gne = lo(async r => {
  try {
    return {
      success: !0,
      data: (await sS(async () => {
        let o = await Gt.get("/api/oauth/account/settings", {
          timeout: v,
          credentials: r
        });
        if (!o.ok) throw Error(`Failed to get Grove settings: ${o.reason}`);
        return o;
      }, {
        credentials: r
      })).data
    };
  } catch (e) {
    if (!(e instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(e.message)) t(`Failed to fetch Grove settings: ${e}`, {
      level: "error"
    });
    return gne.cache.clear?.(), {
      success: !1
    };
  }
}, () => "account");

async function der(r) {
  try {
    await sS(async () => {
      let e = await Gt.post("/api/oauth/account/grove_notice_viewed", {}, {
        credentials: r
      });
      if (!e.ok) throw Error(`Failed to mark Grove notice viewed: ${e.reason}`);
      return e;
    }, {
      credentials: r
    }), gne.cache.clear?.(), g("api_grove_notice_mark_viewed");
  } catch (e) {
    t(`Failed to mark Grove notice viewed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), m("api_grove_notice_mark_viewed", "request_failed");
  }
}

async function pwt(r, e) {
  try {
    await sS(async () => {
      let o = await Gt.patch("/api/oauth/account/settings", {
        grove_enabled: r
      }, {
        credentials: e
      });
      if (!o.ok) throw Error(`Failed to update Grove settings: ${o.reason}`);
      return o;
    }, {
      credentials: e
    }), gne.cache.clear?.(), g("api_grove_settings_update");
  } catch (o) {
    t(`updateGroveSettings failed: ${String(o)}`, {
      level: "error"
    }), m("api_grove_settings_update", "request_failed");
  }
}

async function Ket(r, e) {
  if (!v5()) return !1;
  if (!Ern()) return !1;
  let o = An()?.accountUuid;
  if (!o) return !1;
  let n = ce().groveConfigCache?.[o], s = Date.now();
  if (!n) return t("Grove: No cache, fetching config in background (dialog skipped this session)"), 
  l(o, r, e), !1;
  if (s - n.timestamp > f) return t("Grove: Cache stale, returning cached data and refreshing in background"), 
  l(o, r, e), n.grove_enabled;
  return t("Grove: Using fresh cached config"), n.grove_enabled;
}

async function l(r, e, o) {
  try {
    let a = await pTe(o);
    if (!a.success) return;
    let n = a.data.grove_enabled, s = ce().groveConfigCache?.[r];
    if (s?.grove_enabled === n && Date.now() - s.timestamp <= f) return;
    await Ce(c => ({
      ...c,
      groveConfigCache: {
        ...c.groveConfigCache,
        [r]: {
          grove_enabled: n,
          timestamp: Date.now()
        }
      }
    }), e);
  } catch (a) {
    t(`Grove: Failed to fetch and store config: ${a}`);
  }
}

var pTe = lo(async r => {
  try {
    let e = await sS(async () => {
      let c = await Gt.get("/api/claude_code_grove", {
        timeout: v,
        credentials: r
      });
      if (!c.ok) throw Error(`Failed to fetch Grove notice config: ${c.reason}`);
      return c;
    }, {
      credentials: r
    }), {grove_enabled: o, domain_excluded: a, notice_is_grace_period: n, notice_reminder_frequency: s} = e.data;
    return {
      success: !0,
      data: {
        grove_enabled: o,
        domain_excluded: a ?? !1,
        notice_is_grace_period: n ?? !0,
        notice_reminder_frequency: s
      }
    };
  } catch (e) {
    return t(`Failed to fetch Grove notice config: ${e}`), {
      success: !1
    };
  }
}, () => "config");

function cer(r, e, o) {
  if (!r.success || !e.success) return !1;
  let a = r.data, n = e.data;
  if (a.grove_enabled !== null) return !1;
  if (o) return !0;
  if (!n.notice_is_grace_period) return !0;
  let c = n.notice_reminder_frequency;
  if (c !== null && a.grove_notice_viewed_at) {
    let u = new Date(a.grove_notice_viewed_at).getTime();
    if (isNaN(u)) return d(Error(`Invalid grove_notice_viewed_at from API: ${a.grove_notice_viewed_at}`)), 
    !0;
    return Math.floor((Date.now() - u) / 864e5) >= c;
  } else {
    let u = a.grove_notice_viewed_at;
    return u === null || u === void 0;
  }
}

async function W6o(r) {
  let [e, o] = await Promise.all([ gne(r), pTe(r) ]);
  if (cer(e, o, !1)) {
    let n = o.success ? o.data : null;
    if (i("tengu_grove_print_viewed", {
      dismissable: n?.notice_is_grace_period
    }), n === null || n.notice_is_grace_period) Fj(`\nAn update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.\n\n`), 
    await der(r); else Fj(`\n[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.\n\n`), 
    await Qn(1);
  }
}

export { gne, der, pwt, Ket, pTe, cer, W6o };
