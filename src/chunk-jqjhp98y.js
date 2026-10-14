// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { Yn } from "./chunk-cjt10y7b.js";

function HQn(s) {
  if (!s.startsWith("https://")) return {
    ok: !1,
    cause: "non_https"
  };
  let e;
  try {
    e = new URL(s);
  } catch {
    return {
      ok: !1,
      cause: "unparseable"
    };
  }
  if (e.protocol !== "https:") return {
    ok: !1,
    cause: "non_https"
  };
  if (e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || e.pathname !== "" && e.pathname !== "/") return {
    ok: !1,
    cause: "origin_extras"
  };
  return {
    ok: !0,
    origin: e.origin
  };
}

var i = /^cse_[A-Za-z0-9_]+$/;

function r() {
  if (!a.CCR_SESSION_PROFILE) return {
    ok: !1,
    cause: null
  };
  let s = a.SESSION_INGRESS_URL;
  if (!s) return {
    ok: !1,
    cause: "missing_ingress_url"
  };
  let e = HQn(s);
  if (!e.ok) return {
    ok: !1,
    cause: `invalid_ingress_origin:${e.cause}`
  };
  let n = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!n) return {
    ok: !1,
    cause: "missing_session_id"
  };
  if (!n.startsWith("cse_")) return {
    ok: !1,
    cause: "non_cse_session_id"
  };
  if (!i.test(n)) return {
    ok: !1,
    cause: "malformed_session_id"
  };
  if (!Yn()) return {
    ok: !1,
    cause: "non_first_party"
  };
  return {
    ok: !0,
    config: {
      ingressOrigin: e.origin,
      remoteSessionId: n
    }
  };
}

function nne() {
  let s = r();
  return s.ok ? s.config : null;
}

function SGr() {
  let s = r();
  return s.ok ? null : s.cause;
}

function wGr() {
  return a.CCR_SESSION_PROFILE;
}

export { HQn, nne, SGr, wGr };
