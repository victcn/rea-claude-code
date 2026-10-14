// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { jtn } from "./chunk-8xkt345h.js";

import { ja } from "./chunk-s2t7g8m9.js";

import { C } from "./chunk-m8ez8fhk.js";

var o = C(function(c) {
  Object.defineProperty(c, "__esModule", {
    value: !0
  });
  c.getMachineId = void 0;
  var i = jtn(), n = ja();
  async function u() {
    try {
      let t = (await i.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`\n`).find(d => d.includes("IOPlatformUUID"));
      if (!t) return;
      let r = t.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (e) {
      n.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  c.getMachineId = u;
});

export default o();
