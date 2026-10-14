// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { hEe, yq, rMe, n0o } from "./chunk-3pqddg8f.js";

import { W } from "./chunk-b0z4bv3v.js";

import { Un, za } from "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { Ct } from "./chunk-6ah1819r.js";

import { Yn } from "./chunk-cjt10y7b.js";

import { Yg } from "./chunk-eha3vdmz.js";

import { stat as I } from "fs/promises";

var p = 5e3, _ = hEe(), y = {
  teardown: () => {},
  pulseIfClientPresent: () => {}
};

async function A() {
  let o = a.CLAUDE_CLIENT_PRESENCE_FILE;
  if (!o) return !1;
  if (Un(o) && !za(o)) return !1;
  try {
    return await I(o), !0;
  } catch (l) {
    if (!W(l)) t(`[presence] client-presence-marker stat failed: ${l}`);
    return !1;
  }
}

function Fpn(o, l, H, b = () => Promise.resolve(!1)) {
  if (Ct()) return y;
  let u = {
    sessionId: o,
    baseUrl: l,
    getAuthHeaders: H,
    onUnauthorized: b
  }, r = `[presence session=${o}]`, c = null, d = 0, m = Promise.resolve(), g = async (e, n) => {
    let s = await u.getAuthHeaders();
    if (s === null) return t(`${r} ${e} skipped (no credential to send under)`), null;
    if (!Yn()) return t(`${r} ${e} skipped (non-first-party provider)`), null;
    let E = `${u.baseUrl}/v1/code/sessions/${u.sessionId}/client/presence`;
    return t(`${r} ${e} \u2192 ${E}`), At.post(E, {
      client_id: _,
      ...n
    }, {
      headers: {
        ...s,
        "anthropic-version": "2023-06-01",
        "anthropic-client-platform": Yg()
      },
      timeout: p,
      validateStatus: () => !0
    }).then(i => {
      if (i.status >= 400) t(`${r} ${e} got ${i.status}`);
      return {
        status: i.status,
        sentHeaders: s
      };
    }, i => (t(`${r} ${e} failed: ${At.isAxiosError(i) ? i.code ?? "request_error" : "error"}`), 
    null));
  }, P = async e => {
    let n = e.clear === !0 ? "clear" : "pulse";
    if (!Yn()) {
      t(`${r} ${n} skipped (non-first-party provider)`);
      return;
    }
    try {
      let s = await g(n, e);
      if (s?.status === 401 && await u.onUnauthorized(s.sentHeaders)) t(`${r} ${n} retrying after credential refresh`), 
      await g(n, e);
    } catch (s) {
      t(`${r} ${n} skipped (credential unavailable: ${s instanceof Error ? s.name : "error"})`);
    }
  }, v = () => {
    let e = Date.now();
    d = e, c ??= new Date(e).toISOString();
    let n = P({
      connected_at: c
    });
    return m = m.then(() => n), n;
  }, h = () => {
    if (rMe() === !1) {
      t(`${r} pulse skipped (terminal blurred)`);
      return;
    }
    if (Date.now() - d < p) return;
    v();
  }, w = yq(h), C = n0o(() => {
    let e = rMe();
    if (t(`${r} terminal focus \u2192 ${e === void 0 ? "unknown" : e ? "focused" : "blurred"}`), 
    e === !0) h();
  });
  t(`${r} wired`);
  let f = !1;
  return {
    teardown() {
      if (f) return;
      if (f = !0, w?.(), w = null, C?.(), C = null, c !== null) m.then(() => P({
        clear: !0
      }));
      c = null;
    },
    pulseIfClientPresent() {
      if (f || Date.now() - d < p) return;
      A().then(e => {
        if (e && !f && Date.now() - d >= p) t(`${r} client-presence-marker active \u2192 pulse`), 
        v();
      });
    }
  };
}

export { Fpn };
