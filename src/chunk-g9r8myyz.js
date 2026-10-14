// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Eu } from "./chunk-rkfs82vw.js";

import { c2r } from "./chunk-heqmd224.js";

import { Tg } from "./chunk-8es5wy4r.js";

import { Xs } from "./chunk-j99efqre.js";

import { kH } from "./chunk-yxkwn8vg.js";

function f7n() {
  return [ {
    type: "text",
    text: c2r()
  } ];
}

function Jqs() {
  Xs({
    name: kH,
    description: `Reference for writing a ${Eu} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`,
    menuDescription: "Load the reference for writing Workflow tool scripts",
    userInvocable: !0,
    isEnabled: () => Tg(),
    async getPromptForCommand() {
      return f7n();
    }
  });
}

export { f7n, Jqs };
