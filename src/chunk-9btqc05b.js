// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ne } from "./chunk-m8ez8fhk.js";

var tKn = "HKLM\\SOFTWARE\\Policies\\ClaudeCode", nKn = "HKCU\\SOFTWARE\\Policies\\ClaudeCode", rin = "Settings";

var iLs = 5e3, Txo = 2097152, aLs = "/mnt/c/Windows/System32/reg.exe", XO = "/mnt/c/Program Files/ClaudeCode";

function LLt() {
  if (process.env.WSL_DISTRO_NAME) return !0;
  try {
    let e = Ne("fs").readFileSync("/proc/version", "utf8").toLowerCase();
    return e.includes("microsoft") || e.includes("wsl");
  } catch {
    return !1;
  }
}

export { tKn, nKn, rin, iLs, Txo, aLs, XO, LLt };
