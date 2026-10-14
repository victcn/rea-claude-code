// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vm, NY } from "./chunk-t70vnbgq.js";

import { np } from "./chunk-wbxkeemq.js";

import { p_s } from "./chunk-2xhrgh8h.js";

import { basename as r, sep as n } from "path";

function iQo(i) {
  let s = np(), {listedOwnerships: t} = s;
  t.clear(), s.listedSkillsAnswer = "none_yet";
  for (let e of i) {
    let l;
    try {
      l = Vm(r(NY(e.name, n)));
    } catch {
      continue;
    }
    if (!t.has(l)) t.set(l, {
      listedName: e.name,
      ownership: p_s(e),
      savedFromAChat: typeof e.backing_plugin_id === "string"
    });
  }
  s.listedSkillsAnswer = "a_list";
}

function X6r(i) {
  return np().listedOwnerships.get(Vm(i));
}

export { iQo, X6r };
