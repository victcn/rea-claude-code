// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { un } from "./chunk-y752zmas.js";

import { z } from "./chunk-bmq0vae0.js";

import { Yn } from "./chunk-cjt10y7b.js";

import { Sn, al, vt, uBe } from "./chunk-xywp7esx.js";

import { hostname as n } from "os";

function CO() {
  return;
}

function npe() {
  return;
}

function aT() {
  let e = CO();
  if (e !== void 0) return e;
  if (!Yn() || !vt()) return;
  return Sn()?.accessToken;
}

async function dE(e) {
  if (!(z() && e !== void 0)) return aT();
  let r = CO();
  if (r !== void 0) return r;
  if (!Yn() || !await uBe(e)) return;
  return (await al(e))?.accessToken;
}

function R0() {
  return npe() ?? un().BASE_API_URL;
}

function qFe() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return t(e) || "remote-control";
}

function t(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export { CO, npe, aT, dE, R0, qFe };
