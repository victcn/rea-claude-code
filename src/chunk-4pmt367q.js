// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { aPe, a9 } from "./chunk-9wtp3skp.js";

import { D } from "./chunk-hmqkrrtz.js";

var T2r = Object.freeze([ "attachment", "hook-context", "compaction" ]);

function vzt(e) {
  return e !== void 0 && e.length > 0 && e.every(t => T2r.includes(t)) ? e.map(t => `session.append{door=${t}}`) : [];
}

var A2r = Object.freeze([ "prompt.section", "prompt.context", "prompt.attachment", "prompt.compose", "skill.prompt", "attribution.text", "session.compact", "settings.read" ]);

function Ezt(e) {
  return e.filter(o => {
    let t = aPe.filter(r => a9(o, r));
    return t.length > 0 && t.every(r => r.startsWith("classic.") || A2r.includes(r));
  });
}

function P7n(e, o) {
  let t = D([ ...Ezt(o.map(n => n.pattern)), ...o.flatMap(n => vzt(n.doors)) ]), r = t.length > 0, s = o.some(n => n.isDoorUnread);
  return [ ...r ? [ `${e} hooks on ${t.join(", ")} do not run in a plugin a person installs where an organization manages Claude Code: there, these events pass over the plugins you install, and only a plugin the organization lists in managed settings runs them` ] : [], ...s ? [ `${e} holds a session.append hook to a door its source does not spell: whether it runs where an organization manages Claude Code cannot be told from the source` ] : [] ];
}

export { T2r, vzt, A2r, Ezt, P7n };
