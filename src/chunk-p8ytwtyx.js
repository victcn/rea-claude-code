// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { vs } from "./chunk-q6wab2jw.js";

import { zD } from "./chunk-84yp45y8.js";

import { eo } from "./chunk-3pqddg8f.js";

import { n0s } from "./chunk-8yperama.js";

import { s2n } from "./chunk-s2t7g8m9.js";

var t = "(value set by your organization)";

function hGe(r, e) {
  if (e !== "managed") return r;
  return {
    ...r,
    url: n0s(r.url) ?? t,
    ...r.headers && {
      headers: eo(r.headers, () => t)
    }
  };
}

function RZe(r) {
  return r === "cached" ? "pending" : r;
}

function Iyn(r) {
  return r.map(e => {
    let o;
    if (e.config.type === "sse" || e.config.type === "http") o = hGe({
      type: e.config.type,
      url: e.config.url,
      headers: e.config.headers
    }, e.config.scope); else if (e.config.type === "claudeai-proxy") o = {
      type: "claudeai-proxy",
      url: e.config.url,
      id: e.config.id
    }; else if (e.config.type === "stdio" || e.config.type === void 0) o = {
      type: "stdio",
      command: e.config.command,
      args: e.config.args
    };
    return {
      name: e.name,
      status: RZe(e.type),
      config: o,
      scope: e.config.scope,
      source: zD(e.name, e.config),
      serverInfo: vs(e) ? e.serverInfo : void 0,
      error: e.type === "failed" ? e.error : void 0,
      error_code: s2n(e)
    };
  });
}

export { hGe, RZe, Iyn };
