// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { sa, In, k } from "./chunk-xywp7esx.js";

function BGo() {
  try {
    let {value: e, source: n} = In("tengu_radiant_heron", !1);
    switch (n) {
     case "payload":
     case "override":
      return e === !0;

     case "disabled":
      return !1;

     case "fallback":
      return sa() ? !1 : "unknown";

     case "disk":
      return "unknown";
    }
  } catch {
    return "unknown";
  }
}

function jGo() {
  return k("tengu_radiant_heron", !1);
}

export { BGo, jGo };
