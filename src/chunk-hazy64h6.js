// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { un } from "./chunk-y752zmas.js";

import { createHash as i } from "crypto";

import { homedir as o, userInfo as l } from "os";

import { join as u } from "path";

var OVn = "-credentials";

function kv() {
  let e = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR;
  if (e !== void 0) return (e || u(o(), ".claude")).normalize("NFC");
  return Ee();
}

function Efe(e = "") {
  let n = process.env.CLAUDE_SECURESTORAGE_CONFIG_DIR, t = n !== void 0 ? !n : !process.env.CLAUDE_CONFIG_DIR, r = n !== void 0 ? n.normalize("NFC") : Ee(), c = t ? "" : `-${i("sha256").update(r).digest("hex").substring(0, 8)}`;
  return `Claude Code${un().OAUTH_FILE_SUFFIX}${e}${c}`;
}

var s = /^[a-zA-Z0-9._-]+$/;

function dG() {
  let e;
  try {
    e = process.env.USER || l().username;
  } catch {
    e = "claude-code-user";
  }
  if (!s.test(e)) return "claude-code-user";
  return e;
}

var T0s = 3e4;

class a {
  cache={
    data: null,
    cachedAt: 0
  };
  generation=0;
  readInFlight=null;
  lastReadFailure=null;
  keychainHoldsItem=!1;
  lastKnown=null;
  legacyApiKeyPrefetch=null;
}

var d = new K(() => new a);

function tmt() {
  return d.of(B().host);
}

function A0s() {
  let e = tmt();
  e.cache = {
    data: e.cache.data,
    cachedAt: 0
  }, e.generation++, e.readInFlight = null, e.lastReadFailure = null;
}

function WK() {
  let e = tmt();
  e.cache = {
    data: null,
    cachedAt: 0
  }, e.generation++, e.readInFlight = null, e.lastReadFailure = null;
}

function C0s(e, n, t = tmt()) {
  if (t.cache.cachedAt !== 0 || t.generation !== n) return;
  let r = null;
  if (e) try {
    r = JSON.parse(e);
  } catch {
    return;
  }
  t.cache = {
    data: r,
    cachedAt: Date.now()
  };
}

function R0s(e, n, t) {
  if (e.generation === t) e.keychainHoldsItem = n;
}

function x0s(e) {
  if (!e) return "empty";
  let n = e.toLowerCase();
  if (n.includes("errsecduplicateitem") || n.includes("already exists")) return "duplicate_item";
  if (n.includes("unable to open") || n.includes("could not open")) return "keychain_unavailable";
  if (n.includes("errsecnodefaultkeychain") || n.includes("default keychain") || n.includes("no keychain")) return "no_keychain";
  if (n.includes("errsecitemnotfound") || n.includes("item could not be found")) return "item_not_found";
  if (n.includes("errsecinteractionnotallowed") || n.includes("interaction is not allowed") || n.includes("no user interaction")) return "interaction_not_allowed";
  if (n.includes("errsecusercanceled") || n.includes("cancel")) return "user_canceled";
  if (n.includes("errsecauthfailed") || n.includes("authorization") || n.includes("authentication") || n.includes("name or passphrase")) return "auth_failed";
  if (n.includes("locked") || n.includes("unlock")) return "keychain_locked";
  return "other";
}

export { OVn, kv, Efe, dG, T0s, tmt, A0s, WK, C0s, R0s, x0s };
