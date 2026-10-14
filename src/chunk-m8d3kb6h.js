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

import { C, Ne } from "./chunk-m8ez8fhk.js";

var u = C(function(n) {
  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  n.getMachineId = void 0;
  var r = Ne("fs"), i = jtn(), t = ja();
  async function c() {
    try {
      return (await r.promises.readFile("/etc/hostid", {
        encoding: "utf8"
      })).trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    try {
      return (await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  n.getMachineId = c;
});

export default u();
