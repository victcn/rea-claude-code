// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { J, Ht } from "./chunk-nvtwm272.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { OH, Ywe } from "./chunk-xywp7esx.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { Gqt, aXr, lZo, csr, hye, lXr, Bne } from "./chunk-69rr80fg.js";

var Tjs = 1500, Ajs = 864e5, Cjs = 144e5;

function o5s() {
  return Gqt() !== void 0;
}

function CAn() {
  let r = csr();
  if (r !== void 0) return {
    capabilities: r.roster.capabilities,
    source: r.source
  };
  return {
    capabilities: void 0,
    source: Gqt() === void 0 ? "cold_no_identity" : "cold"
  };
}

function sXr() {
  return CAn().capabilities === void 0;
}

function s5s(r = Tjs) {
  let e = ee();
  if (e.frozenAssets !== void 0 || e.rosterHeard === void 0 || e.rosterWaitOver || !sXr()) return;
  if (e.rosterWait !== void 0) return e.rosterWait;
  let o = Date.now(), n = e.accountEpoch;
  return e.rosterWait = Ht(e.rosterHeard, r, "artifact-roster").then(a => {
    g("artifact_roster_wait", {
      wait_ms: Date.now() - o,
      heard: a,
      cold: sXr()
    });
  }, () => {
    f("artifact_roster_wait", "timeout", {
      wait_ms: Date.now() - o,
      cold: sXr()
    });
  }).catch(a => {
    t(`Artifact roster wait: recording its outcome failed: ${l(a)}`);
  }).finally(() => {
    if (e.accountEpoch === n) e.rosterWaitOver = !0;
  }), e.rosterWait;
}

async function i5s(r) {
  let e = Date.now() + r;
  for (;;) {
    let o = ee(), n = o.rosterHeard;
    if (o.frozenAssets !== void 0 || n === void 0 || o.rosterWaitOver) return !0;
    let a = new AbortController, i = await Promise.race([ n.then(() => !0, () => !0), J(Math.max(0, e - Date.now()), a.signal, {
      unref: !0
    }).then(() => !1) ]);
    if (a.abort(), !i) return !1;
    if (ee().rosterHeard === n) return !0;
  }
}

function a5s(r = Date.now()) {
  let e = aXr();
  if (e === void 0) return !1;
  let o = r - e.fetchedAt;
  return o >= 0 && o < Ajs;
}

function l5s(r = Date.now()) {
  let e = lZo();
  if (e === void 0) return !1;
  let o = r - e.deniedAt;
  return o >= 0 && o < Cjs && Ywe() === e.tokenExpiresAt && !OH(e.tokenExpiresAt, r);
}

function iXr(r) {
  let e = ee(), o;
  return e.rosterHeard = new Promise(n => {
    o = n;
  }), R(e, r, o);
}

async function R(r, e, o) {
  try {
    let n = r.accountEpoch, a = Ywe(), i = Date.now(), s = await Bne({
      ...e,
      recoverOAuth401: !0
    }), u = Date.now() - i;
    if ("err" in s) {
      f("artifact_roster_refresh", s.cause, {
        duration_ms: u,
        ...s.status !== void 0 && {
          status: s.status
        }
      }), t(`Artifact roster refresh failed (${s.cause}): ${s.err}`);
      let c = Ywe(), {cause: A, status: d} = s;
      if (o(!1), A === "http_4xx" && (d === 403 || d === 401 && c !== a) && c !== null && ee() === r) await lXr(r, n, e.storageV5, h => ({
        artifactRosterDenied: {
          ...h,
          status: d,
          deniedAt: Date.now(),
          tokenExpiresAt: c
        }
      }));
      return !1;
    }
    g("artifact_roster_refresh", {
      duration_ms: u,
      schema_frozen: r.frozenAssets !== void 0
    });
    let {adopted: p, persisted: m} = hye({
      session: r,
      epoch: n,
      roster: s,
      storageV5: e.storageV5
    });
    if (p) o(!0), await m;
    return !0;
  } catch (n) {
    return t(`Artifact roster refresh: ${l(n)}`), !1;
  } finally {
    o(!1);
  }
}

export { Tjs, Ajs, Cjs, o5s, CAn, sXr, s5s, i5s, a5s, l5s, iXr };
