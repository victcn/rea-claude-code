// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { _, t } from "./chunk-kawq2919.js";

import { sgt } from "./chunk-r2h53bm2.js";

import { sn } from "./chunk-642shbw5.js";

var s = 2e3, u = [ "session_ingress_token", "environment_secret", "access_token", "secret", "token" ], g = new RegExp(`"(${u.join("|")})"\\s*:\\s*"[^"]*"`, "g");

function p(e) {
  return e.replace(g, '"$1":"[REDACTED]"');
}

function nSo(e) {
  let n = e.replaceAll(`\n`, "\\n");
  if (n.length <= s) return n;
  return n.slice(0, s) + `... (${n.length} chars)`;
}

function Ckr(e) {
  let n = typeof e === "string" ? e : _(e), r = p(n);
  if (r.length <= s) return r;
  return r.slice(0, s) + `... (${r.length} chars)`;
}

function fpe(e) {
  return `sha12:${sn(typeof e === "string" ? e : `${_(e)}`)}`;
}

function rSo(e) {
  return typeof e === "string" && /^[\w.-]{1,64}$/.test(e) ? e : `<${typeof e}>`;
}

function ojn(e) {
  let n = l(e);
  if (e && typeof e === "object" && "response" in e) {
    let r = e.response, o = zN(r?.data);
    if (o) return `${n}: ${o}`;
  }
  return n;
}

function Ag(e, n = Date.now()) {
  if (!e) return;
  let r = Number(e);
  if (Number.isFinite(r) && r >= 0) return r * 1e3;
  let o = Date.parse(e);
  if (Number.isFinite(o)) {
    let f = o - n;
    return f > 0 ? f : void 0;
  }
  return;
}

function OR(e) {
  if (!e || typeof e !== "object") return;
  if ("message" in e && typeof e.message === "string") return e.message;
  if ("error" in e && e.error !== null && typeof e.error === "object" && "message" in e.error && typeof e.error.message === "string") return e.error.message;
  return;
}

function zN(e) {
  let n = OR(e);
  return n ? ytn(n, "error_message") : void 0;
}

function ytn(e, n) {
  if (sgt(e, 1024)) return e;
  t(`[error-detail] left the service's text (${n}) out of the error shown: it has ${e.length} UTF-16 units and is not one plain line of at most 1,024 units`), 
  i("tengu_service_error_detail_not_plain", {
    length: e.length,
    source: c(n)
  });
  return;
}

function eut(e) {
  if (!e || typeof e !== "object" || !("error" in e)) return;
  let n = e.error;
  if (!n || typeof n !== "object" || !("details" in n)) return;
  let r = n.details;
  if (r && typeof r === "object" && "error_code" in r && typeof r.error_code === "string") return r.error_code;
  return;
}

function pC(e, n, r, o) {
  if (n) t(n);
  i("tengu_bridge_repl_skipped", {
    reason: c(e),
    ...r !== void 0 && {
      v2: r
    },
    ...o
  });
}

export { nSo, Ckr, fpe, rSo, ojn, Ag, OR, zN, ytn, eut, pC };
