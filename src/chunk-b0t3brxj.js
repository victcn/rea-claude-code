// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { platform as r } from "os";

function AHe() {
  return r() === "darwin" && a.terminal === "Apple_Terminal" || a.terminal === "vscode" || a.terminal === "cursor" || a.terminal === "windsurf" || a.terminal === "alacritty" || a.terminal === "zed";
}

export { AHe };
