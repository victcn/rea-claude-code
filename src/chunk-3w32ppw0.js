// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { un } from "./chunk-y752zmas.js";

import { a } from "./chunk-j016gcgm.js";

import { z } from "./chunk-bmq0vae0.js";

import { _ } from "./chunk-kawq2919.js";

import { j5 } from "./chunk-j90se18b.js";

import { Sn, al, oa } from "./chunk-xywp7esx.js";

import { Xc } from "./chunk-pf1mhyjr.js";

var p = " \u2014 run `claude login` to refresh your session, or verify ANTHROPIC_BASE_URL matches your login environment";

class i extends Error {
  status;
  constructor(t, e) {
    super(e);
    this.name = "SelfHostedRunnerApiError", this.status = t;
  }
}

var kGe = 8080;

function c() {
  let {getAPIProvider: t} = import.meta.require("./chunk-0sx8j48z.js");
  if (t() !== "firstParty") throw new i(403, "Self-hosted runner management is only available on the first-party Anthropic API provider.");
}

function TGe() {
  let t = a.ANTHROPIC_BASE_URL?.replace(/\/+$/, "");
  if (t) return t;
  return un().BASE_API_URL;
}

function Nqo() {
  return un().CLAUDE_AI_ORIGIN;
}

async function m(t) {
  c(), await oa({
    credentials: t
  }).catch(() => {});
  let e = z() && t !== void 0 ? (await al(t))?.accessToken : Sn()?.accessToken;
  if (!e) throw new i(401, "Not logged in. Environment-management endpoints require the operator OAuth session \u2014 run `claude login`, then re-invoke this tool. (`ANTHROPIC_API_KEY` will not work for these endpoints.)");
  return e;
}

function EHe(t) {
  return {
    ui: t
  };
}

async function kHe(t, e, o, s, l) {
  c();
  let d = await m(l), n = await At.request({
    method: t,
    url: `${TGe()}${e}`,
    data: o,
    headers: {
      Authorization: `Bearer ${d}`,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    timeout: 2e4,
    signal: s,
    validateStatus: r => r < 500
  }).catch(r => {
    if (At.isAxiosError(r) && !At.isCancel(r) && r.response === void 0) throw new i(0, `${t} ${e}: ${r.message}`);
    throw r;
  });
  if (n.status >= 400) {
    let r = n.data?.error?.message ?? _(n.data), u = `HTTP ${n.status} ${t} ${e}: ${r}`;
    if ([ 401, 403, 404, 409, 429 ].includes(n.status)) {
      let f = n.status === 401 || n.status === 403 ? p : "";
      throw new i(n.status, u + f);
    }
    throw Error(u);
  }
  return n.data;
}

function L6(t, e) {
  return {
    tool_use_id: t,
    type: "tool_result",
    content: Xc(_(e))
  };
}

function y2(t) {
  let e = j5(t);
  if (e !== null) return e;
  return Object.entries(t).filter(([, o]) => o !== void 0).map(([o, s]) => `${o}=${typeof s === "string" ? s : _(s)}`).join(" ");
}

export { kGe, TGe, Nqo, EHe, kHe, L6, y2 };
