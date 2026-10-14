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

var d = C(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.getMachineId = void 0;
  var e = Ne("process"), n = jtn(), c = ja();
  async function o() {
    let t = "%windir%\\System32\\REG.exe";
    if (e.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in e.env) t = "%windir%\\sysnative\\cmd.exe /c " + t;
    try {
      let i = (await n.execAsync(`${t} QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`)).stdout.split("REG_SZ");
      if (i.length === 2) return i[1].trim();
    } catch (r) {
      c.diag.debug(`error reading machine id: ${r}`);
    }
    return;
  }
  s.getMachineId = o;
});

export default d();
