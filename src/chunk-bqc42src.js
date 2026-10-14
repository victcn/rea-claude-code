// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { jL } from "./chunk-49zcmz6n.js";

import { tDe, e3o } from "./chunk-5ck8fvc9.js";

var Awn = async (o, e) => {
  let n = e.toolState.get(jL);
  if (o === "consent") try {
    return await tDe(n, "agent_design_projects", e.credentials), {
      type: "text",
      value: "Design agent access granted for your Claude Design projects. Use /design revoke to undo."
    };
  } catch (t) {
    return {
      type: "text",
      value: `Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${l(t)}. Try again, or run /design-login to authorize Claude Design for this account.`
    };
  }
  try {
    return await e3o(n, "agent_design_projects", e.credentials), {
      type: "text",
      value: "Design agent access revoked for your Claude Design projects."
    };
  } catch (t) {
    return {
      type: "text",
      value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${l(t)}. Try again, or run /design-login to authorize Claude Design for this account.`
    };
  }
};

export { Awn };
