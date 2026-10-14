// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At, _c } from "./chunk-vps0k559.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { RE } from "./chunk-gkzapwcq.js";

var l = /(^|\.)(anthropic\.com|claude\.ai|claude\.com)$/i, _ = /(^|\.)downloads\.claude\.ai$/i;

function E(e) {
  let t, r = e.startsWith("//") ? `https:${e}` : e;
  try {
    t = new URL(r).hostname;
  } catch {
    t = e.match(/^[^/:]+/)?.[0] ?? e;
  }
  return t.endsWith(".") ? t.slice(0, -1) : t;
}

function tme(e) {
  return l.test(E(e));
}

function _j(e) {
  return _.test(E(e));
}

import g from "ws";

class i extends Error {
  name="TestEgressBlockedError";
  code="TestEgressBlocked";
}

var d = globalThis.fetch, A = g;

function _qn(e, t) {
  if (e instanceof Request) return {
    method: (t?.method ?? e.method).toUpperCase(),
    url: e.url
  };
  return {
    method: (t?.method ?? "GET").toUpperCase(),
    url: String(e)
  };
}

function m() {
  return Le(process.env.CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK);
}

function p(e, t) {
  return `[CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK] live request from a test runtime: ${e} ${t}\n`;
}

function u(e) {
  let t;
  try {
    t = RE(new URL(e).hostname);
  } catch {
    t = !1;
  }
  if (t) return "loopback";
  return m() ? "opted-in" : "refused";
}

function o(e, t) {
  return `Blocked under test: ${e} ${t} \u2014 test runtimes must not reach the network. ` + "Run the file via `bun run test:file -- <path>` with this request mocked, or set CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK=1 for an intentional live probe.";
}

function h(e) {
  let t = At.getUri(e), r = (e.method ?? "get").toUpperCase();
  switch (u(t)) {
   case "loopback":
    return x(e, r);

   case "opted-in":
    return process.stderr.write(p(r, t)), e;

   case "refused":
    throw new i(o(r, t));
  }
}

function x(e, t) {
  let r = e.beforeRedirect;
  return e.beforeRedirect = (s, a) => {
    let n = typeof s.href === "string" ? s.href : "";
    switch (u(n)) {
     case "loopback":
      break;

     case "opted-in":
      process.stderr.write(p(t, n));
      break;

     case "refused":
      throw process.stderr.write(`${o(t, n)}\n`), new i(o(t, n));
    }
    r?.(s, a);
  }, e;
}

function w() {
  if (!T()) At.interceptors.request.use(h);
}

function T() {
  return At.interceptors.request.handlers?.some(e => e?.fulfilled === h) ?? !1;
}

function R() {
  return !1;
}

function Gve() {
  return;
}

function pOo(e, t, r) {
  if (e !== d || !R()) return;
  switch (u(r)) {
   case "loopback":
    return;

   case "opted-in":
    process.stderr.write(p(t, r));
    return;

   case "refused":
    throw new i(o(t, r));
  }
}

function fOo(e, t, r) {
  if (e !== d || !R()) return;
  if (r.redirected && u(r.url) === "refused") throw new i(o(t, r.url));
}

var k;

function bqn(e, t) {
  if (!R() || t !== void 0 && t !== A) return;
  switch (u(e)) {
   case "loopback":
    return;

   case "opted-in":
    process.stderr.write(p("WS", e));
    return;

   case "refused":
    {
      let r = new i(o("WS", e));
      throw k?.(r), r;
    }
  }
}

async function Sqn(e, t, r) {
  let s = globalThis.fetch, {method: a, url: n} = _qn(e, t);
  pOo(s, a, n);
  let f = await (r && s === d ? r : s)(e, t);
  return fOo(s, a, f), f;
}

var C = new Set([ "ERR_BAD_OPTION", "ERR_BAD_OPTION_VALUE", "ERR_BAD_REQUEST", "ERR_BAD_RESPONSE", "ERR_CANCELED", "ERR_DEPRECATED", "ERR_FORM_DATA_DEPTH_EXCEEDED", "ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_INVALID_URL", "ERR_NOT_SUPPORT", "ERR_STREAM_WRITE_AFTER_END" ]);

function Aee(e) {
  return _c(e) && e.response === void 0 && !C.has(e.code ?? "");
}

function c(e, t) {
  for (let r of [ e, t?.baseURL ]) if (r && tme(r)) throw Error(`externalHttp: ${r} is Anthropic-operated. Use firstPartyApi from ` + "src/services/http/firstParty \u2014 it enforces the 3P data-residency gate.");
}

var Qa = {
  get(e, t) {
    return c(e, t), Gve(), At.get(e, t);
  },
  head(e, t) {
    return c(e, t), Gve(), At.head(e, t);
  },
  post(e, t, r) {
    return c(e, r), Gve(), At.post(e, t, r);
  },
  put(e, t, r) {
    return c(e, r), Gve(), At.put(e, t, r);
  },
  patch(e, t, r) {
    return c(e, r), Gve(), At.patch(e, t, r);
  },
  delete(e, t) {
    return c(e, t), Gve(), At.delete(e, t);
  }
};

export { tme, _j, _qn, Gve, pOo, fOo, bqn, Sqn, Aee, Qa };
