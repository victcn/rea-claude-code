// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xg } from "./chunk-xywp7esx.js";

import { K2, jA, sR, Z2, aur } from "./chunk-84yp45y8.js";

import { de } from "./chunk-5ydr99q3.js";

async function RVt({toolUseContext: e, forkContextMessages: o, mainThreadAgentDefinition: t}) {
  let {systemPrompt: s, userContext: m, systemContext: r} = aur() ?? await i(e, t);
  return {
    systemPrompt: s,
    userContext: m,
    systemContext: r,
    toolUseContext: e,
    forkContextMessages: o,
    advisorModel: e.getAdvisorSetting()
  };
}

async function i(e, o) {
  let [t, s, m] = await Promise.all([ e.renderedSystemPrompt ?? n(e, o), jA(e.session, e.storageV5, e.credentials), K2(e.session, e.options.cacheBreakerPhrase) ]);
  return {
    systemPrompt: t,
    userContext: s,
    systemContext: m
  };
}

async function n(e, o) {
  let t = de(e), s = await sR(e.options.tools, xg({
    permissionMode: t.mode,
    mainLoopModel: e.options.mainLoopModel
  }));
  return Z2({
    mainThreadAgentDefinition: o,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: s,
    appendSystemPrompt: e.options.appendSystemPrompt
  });
}

export { RVt };
