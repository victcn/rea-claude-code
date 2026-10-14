// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { kn, Pl, P3e } from "./chunk-8drhysk2.js";

import { k } from "./chunk-xywp7esx.js";

import { Qfe } from "./chunk-vjmbaret.js";

import { o, oe, u, ue } from "./chunk-cvcg6n1z.js";

var l = p(() => u({
  server_instructions: o().optional(),
  server_instructions_by_server: ue(o(), o()).optional(),
  tools: ue(o(), o()).optional(),
  search_hints: ue(o(), o()).optional(),
  param_descriptions: ue(o(), ue(o(), o())).optional(),
  prompts: ue(o(), o()).optional(),
  skills: ue(o(), o()).optional()
})), g = p(() => ue(o(), oe()));

function lhe(e) {
  if (!e.pluginSource) return;
  let {name: r, marketplace: n} = kn(e.pluginSource);
  if (!Pl(n) && !P3e(r, n)) return;
  let c = k("tengu_official_plugin_prompt_overrides", {}), i = g().safeParse(c);
  if (!i.success) {
    t("tengu_official_plugin_prompt_overrides: GB payload is not an object; ignoring", {
      level: "error"
    });
    return;
  }
  let f = i.data[r];
  if (f === void 0) return;
  let d = l().safeParse(f);
  if (!d.success) {
    t(`tengu_official_plugin_prompt_overrides: entry for '${r}' failed schema (${d.error.issues[0]?.message}); using baked-in text`, {
      level: "error"
    });
    return;
  }
  let s = d.data;
  if (Object.keys(s).length === 0) return;
  return {
    ...s,
    server_instructions_by_server: a(s.server_instructions_by_server),
    tools: a(s.tools),
    search_hints: a(s.search_hints),
    param_descriptions: a(s.param_descriptions),
    prompts: a(s.prompts),
    skills: a(s.skills)
  };
}

function a(e) {
  if (e === void 0) return;
  let r = Object.create(null);
  return Object.assign(r, e);
}

function SSn(e, r) {
  if (!e) return;
  let n = e.server_instructions_by_server;
  if (n) {
    let c = Qfe(r), i = c && n[c.serverName];
    if (i !== void 0) return i;
  }
  return e.server_instructions;
}

function wSn(e, r) {
  if (!r || !e.properties) return e;
  let n = {
    ...e.properties
  }, c = !1;
  for (let [i, f] of Object.entries(r)) {
    let d = n[i];
    if (d !== null && typeof d === "object") n[i] = {
      ...d,
      description: f
    }, c = !0;
  }
  if (!c) return e;
  return {
    ...e,
    properties: n
  };
}

export { lhe, SSn, wSn };
