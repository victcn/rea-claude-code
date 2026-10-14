// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { t } from "./chunk-kawq2919.js";

import { Rko, s8e, g0t, XRr, Q1, h0t, nA, In, k } from "./chunk-xywp7esx.js";

import { y$t, mHo } from "./chunk-hedpgw9m.js";

import { JMt } from "./chunk-pwsd9z64.js";

import { j8t } from "./chunk-jtnpf34v.js";

var E = "tengu_log_datadog_events", d = "tengu_quizzical_giraffe", h = new Set([ "tengu_started", "tengu_oauth_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_race_recovered", "tengu_oauth_refresh_token_cleared_on_disk", "tengu_api_error", "tengu_feature_bad", "tengu_feature_sad" ]);

function p() {
  if (g0t("datadog")) return !1;
  try {
    return k(E, !1);
  } catch {
    return !1;
  }
}

function _(e, n) {
  if (!h.has(e)) return n;
  try {
    let {value: o, source: a} = In(d, !1), r = a === "fallback" || a === "disabled";
    return {
      ...n,
      [d]: c(r ? "unset" : o === !0 ? "on" : "off")
    };
  } catch {
    return n;
  }
}

function g(e) {
  return e || Q1();
}

function f(e, n, o, a) {
  let r = a();
  if (!g(r)) return;
  let i = _(e, j8t(n)), s = o !== null ? {
    ...i,
    sample_rate: o
  } : i;
  if (r) JMt(e, y$t(s));
  h0t(e, s);
}

var l = !1;

function m(e, n, o) {
  if (l) {
    t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, {
      level: "error"
    });
    return;
  }
  l = !0;
  try {
    let a = XRr(e);
    if (a === 0) return;
    if (Rko()) {
      f(e, n, a, o);
      return;
    }
    let r = () => {
      l = !0;
      try {
        f(e, n, a, o);
      } finally {
        l = !1;
      }
    };
    s8e().then(r, r);
  } finally {
    l = !1;
  }
}

async function v(e, n, o) {
  let a = XRr(e);
  if (a === 0) return;
  if (!Rko()) await s8e();
  let r = o();
  if (!g(r)) return;
  let i = _(e, j8t(n)), s = a !== null ? {
    ...i,
    sample_rate: a
  } : i, u = [];
  if (r) u.push(JMt(e, y$t(s)));
  u.push(nA(e, s)), await Promise.all(u);
}

function hJ() {
  mHo(y(p));
}

function y(e) {
  return {
    logEvent: (n, o) => m(n, o, e),
    logEventAsync: (n, o) => v(n, o, e)
  };
}

export { hJ };
