// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tp } from "./chunk-sg5gpfs4.js";

import { B } from "./chunk-3pqddg8f.js";

import { hfe, Wft } from "./chunk-8yperama.js";

import { fO } from "./chunk-81rtbneg.js";

import { zD } from "./chunk-84yp45y8.js";

function Sne(e, o) {
  return e.config.scope === o.scope && e.config.pluginSource === o.pluginSource ? e : {
    ...e,
    config: o
  };
}

var s = 128, m = /^[a-z0-9._:-]+$/;

function i(e) {
  let o = e?.trim().toLowerCase();
  if (!o || o.length > s || !m.test(o)) return;
  return o;
}

function ATe(e, o) {
  if (o.type !== "http" || zD(e, o) !== "dynamic") return;
  let n = i(hfe(o));
  if (n) return n;
  let t = Wft.peek(B())?.read?.();
  return i(t?.[e]);
}

var c = (e, o) => ({
  ...o,
  scope: e.config.scope,
  pluginSource: e.config.pluginSource,
  source: zD(e.name, e.config),
  pluginTelemetry: void 0,
  ...e.config.pluginSource !== void 0 && {
    pluginTelemetry: fO(e.config.pluginSource, tp())
  },
  serverIdStamp: ATe(e.name, e.config)
});

function z6(e, o) {
  let n = o.map(r => {
    if (r.mcpInfo === void 0) return r;
    return r.mcpInfo.scope === e.config.scope && r.mcpInfo.pluginSource === e.config.pluginSource ? r : {
      ...r,
      mcpInfo: c(e, r.mcpInfo)
    };
  });
  return n.every((r, p) => r === o[p]) ? o : n;
}

export { ATe, Sne, z6 };
