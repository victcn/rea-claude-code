// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function MOe(r) {
  try {
    if (!Bun.ant.setDumpable(!1)) r("prctl(PR_SET_DUMPABLE,0) returned nonzero");
  } catch (e) {
    r(`prctl unavailable: ${e instanceof Error ? e.message : String(e)}`);
  }
}

export { MOe };
