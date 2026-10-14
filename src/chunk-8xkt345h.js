// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C, Ne } from "./chunk-m8ez8fhk.js";

var jtn = C(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.execAsync = void 0;
  var e = Ne("child_process"), r = Ne("util");
  s.execAsync = r.promisify(e.exec);
});

export { jtn };
