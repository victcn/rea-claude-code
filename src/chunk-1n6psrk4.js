// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { O } from "./chunk-1xnsr4dy.js";

function LSn() {
  if (O() !== "windows" || !process.stdin.isTTY) return;
  try {
    process.stdin.setRawMode(!0), process.stdin.setRawMode(!1);
  } catch {}
}

export { LSn };
