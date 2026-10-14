// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Fi } from "./chunk-8drhysk2.js";

import { _vo, mk, ynn } from "./chunk-9wtp3skp.js";

import { Gn } from "./chunk-bf1mjdzd.js";

var Jge = "cc-plugin-you-should-know";

var C7n = {
  id: "you-should-know-plugin",
  providerAgnostic: !0,
  advertisedCommand: "plugin",
  cooldownSessions: 10,
  maxLifetimeShows: 3,
  content: async o => `Want a side agent watching your back while Claude works? Turn on You should know:\n${Gn("suggestion", o.theme)(`/plugin enable ${Jge}@${Fi}`)}`,
  isRelevant: async () => _vo(Jge) && mk(Jge)?.defaultEnabled === !1 && ynn(`${Jge}@${Fi}`) === void 0
};

export { Jge, C7n };
