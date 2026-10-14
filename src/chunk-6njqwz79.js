// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { ci } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { X } from "./chunk-1zg3hbfq.js";

import { dt, Rn, m1e } from "./chunk-dd98x6x7.js";

import { vt, Gt, tve, ce } from "./chunk-xywp7esx.js";

import { _s } from "./chunk-1dj3skht.js";

import { o, v, M, T, u } from "./chunk-cvcg6n1z.js";

var P = p(() => {
  let e = u({
    enable_email: M().nullish(),
    enable_push: M().nullish()
  }), t = u({
    bogosort: e.nullish(),
    code_requires_action: e.nullish()
  }), r = u({
    has_active_channel: M(),
    platforms: T(o()).nullish().transform(n => n ?? []),
    most_recent_token_refresh: o().nullish()
  });
  return u({
    account_id: v().nullish(),
    organization_id: v().nullish(),
    preferences: u({
      feature_preference: t.nullish()
    }).nullish(),
    push_reachability: r.nullish()
  });
});

var y = 1e4, E = new K(() => ({
  reachability: _s(void 0),
  hydrated: Me()
}));

function a() {
  return E.of(B().host);
}

function OEn() {
  return a().reachability.getState();
}

function MEn(e) {
  return a().reachability.subscribe(e);
}

function fXo(e) {
  return a().hydrated.subscribe(e);
}

function N() {
  let e = dt(), t = ce();
  return {
    agentPushNotifEnabled: e.agentPushNotifEnabled ?? tve("agentPushNotifEnabled", t.agentPushNotifEnabled),
    inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? tve("inputNeededNotifEnabled", t.inputNeededNotifEnabled)
  };
}

var S = "/api/claude_code/notification/preferences";

function h() {
  return vt();
}

async function k() {
  if (!h()) return {
    ok: !1,
    reason: "no_auth"
  };
  try {
    let e = await Gt.get(S, {
      timeout: y
    });
    if (!e.ok) return {
      ok: !1,
      reason: "fetch_failed"
    };
    let t = P().safeParse(e.data);
    if (!t.success) return X("warn", "notif_prefs_fetch_parse_failed", {
      issues: t.error.issues.map(r => r.path.join(".")).join(",")
    }), {
      ok: !1,
      reason: "parse_failed"
    };
    return {
      ok: !0,
      prefs: t.data
    };
  } catch (e) {
    let {kind: t} = ci(e);
    return X("warn", "notif_prefs_fetch_failed", {
      kind: t
    }), {
      ok: !1,
      reason: "fetch_failed"
    };
  }
}

async function R(e) {
  if (!h()) return;
  try {
    if (!(await Gt.patch(S, e, {
      timeout: y
    })).ok) {
      f("notif_prefs_patch", "no_auth");
      return;
    }
    X("info", "notif_prefs_patch_ok", {}), g("notif_prefs_patch");
  } catch (t) {
    let {kind: r} = ci(t);
    X("warn", "notif_prefs_patch_failed", {
      kind: r
    }), m("notif_prefs_patch", "http_error");
  }
}

function t5r() {
  m1e().then(() => {
    let e = N(), t = {};
    if (typeof e.agentPushNotifEnabled === "boolean") t.bogosort = {
      enable_push: e.agentPushNotifEnabled
    };
    if (typeof e.inputNeededNotifEnabled === "boolean") t.code_requires_action = {
      enable_push: e.inputNeededNotifEnabled
    };
    if (Object.keys(t).length === 0) return;
    return R({
      preferences: {
        feature_preference: t
      }
    });
  }).catch(d);
}

async function mXo(e) {
  if (!h()) {
    f("notif_prefs_hydrate", "no_auth"), a().reachability.setState(() => null), X("info", "notif_prefs_hydrate_skipped", {
      reason: "no_auth"
    });
    return;
  }
  let t = await k();
  if (!t.ok) {
    m("notif_prefs_hydrate", t.reason), a().reachability.setState(() => null), X("info", "notif_prefs_hydrate_skipped", {
      reason: t.reason
    });
    return;
  }
  let r = t.prefs, n = r.push_reachability ?? null;
  if (a().reachability.setState(() => n), n) i("tengu_push_reachability", {
    has_active_channel: n.has_active_channel,
    platform_count: n.platforms.length
  });
  let _ = r.preferences?.feature_preference, c = _?.bogosort?.enable_push, l = _?.code_requires_action?.enable_push, b = N(), s = {};
  if (b.agentPushNotifEnabled === void 0 && typeof c === "boolean") s.agentPushNotifEnabled = c;
  if (b.inputNeededNotifEnabled === void 0 && typeof l === "boolean") s.inputNeededNotifEnabled = l;
  if (X("info", "notif_prefs_hydrate_result", {
    has_active_channel: n?.has_active_channel,
    server_bogosort: c,
    server_code_requires_action: l,
    seeded: Object.keys(s).length > 0
  }), Object.keys(s).length === 0) {
    g("notif_prefs_hydrate");
    return;
  }
  await Rn("userSettings", s, void 0, e), a().hydrated.emit(), g("notif_prefs_hydrate");
}

export { OEn, MEn, fXo, t5r, mXo };
