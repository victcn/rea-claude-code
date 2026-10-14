// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Gt, k, Ce, ce } from "./chunk-xywp7esx.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { a } from "./chunk-j016gcgm.js";

import { Y, t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { on } from "./chunk-b47tzzqx.js";

import { ett, HJ, mW } from "./chunk-w1ezaa52.js";

import { f0 } from "./chunk-sqb9meyh.js";

import { cK } from "./chunk-yxkwn8vg.js";

import { yn, Vo, St } from "./chunk-dexzwy8h.js";

var s = p(() => St({
  reviews_used: yn(),
  reviews_limit: yn(),
  reviews_remaining: yn(),
  is_overage: Vo()
}));

async function _(e) {
  let r = a.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
  if (r) try {
    let n = s().safeParse(Y(r));
    return n.success ? n.data : null;
  } catch (n) {
    return t(`fetchUltrareviewQuota fixture parse failed: ${n}`), null;
  }
  try {
    let n = await Gt.get("/v1/ultrareview/quota", {
      auth: "teleport-org",
      timeout: 3e3,
      credentials: e
    });
    if (!n.ok) return f("api_ultrareview_quota", "request_failed"), null;
    let o = s().safeParse(n.data);
    if (!o.success) return t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`), 
    f("api_ultrareview_quota", "schema_mismatch"), null;
    return g("api_ultrareview_quota"), o.data;
  } catch (n) {
    return t(`fetchUltrareviewQuota failed: ${n}`), f("api_ultrareview_quota", "request_failed"), 
    null;
  }
}

class l {
  quota=void 0;
  fetch=void 0;
}

var h = new K(() => new l);

function m() {
  return h.of(B().host);
}

async function EKr(e) {
  let r = m();
  r.fetch ??= _(e), r.quota = await r.fetch;
}

function own(e) {
  let r = m();
  if (r.quota === void 0) return EKr(e), null;
  return r.quota;
}

var S = "tengu_ultrareview_awareness";

function R() {
  return k(S, null) ?? {};
}

function YZn(e) {
  if (!f0()) return !1;
  if (!on("allow_remote_sessions")) return !1;
  return R()[e] === !0;
}

function kKr() {
  return ce().hasRunUltrareview === !0;
}

function f6o(e) {
  Ce(r => r.hasRunUltrareview ? r : {
    ...r,
    hasRunUltrareview: !0
  }, e);
}

function U(e) {
  i("tengu_ultrareview_awareness_shown", {
    surface: c(e)
  });
}

function TKr(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}

function m6o(e) {
  if (e !== "ultrareview" && e !== cK) return "";
  if (!YZn("slash_menu")) return "";
  let r = own();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left \xb7 ` : `${n} free /ultrareview \xb7 `;
}

var C = "ultrareview-prose-pointer", A = "ultrareview-post-commit", E = 5;

function d(e, r, n, o, w) {
  if (!YZn(e)) return null;
  if (kKr()) return null;
  if (HJ(r) >= E) return null;
  if (mW(r) === 0) return null;
  ett(r, o), U(e);
  let u = own(w), v = u !== null && u.reviews_remaining > 0 ? ` \u2014 ${TKr(u.reviews_remaining)}` : "";
  return n(v);
}

function g6o(e, r) {
  return d("prose_pointer", C, n => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r);
}

function h6o(e) {
  return d("post_commit", A, r => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, void 0);
}

export { EKr, own, YZn, kKr, f6o, TKr, m6o, g6o, h6o };
