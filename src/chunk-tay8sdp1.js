// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

var aer = "[3P telemetry] OTEL diag error:";

class WKr {
  error(r, ...e) {
    if (a.CLAUDE_CODE_OTEL_DIAG_STDERR) process.stderr.write(`${aer} ${r}\n`);
    t(`${aer} ${r}`, {
      level: "error"
    });
  }
  warn(r, ...e) {
    t(`[3P telemetry] OTEL diag warn: ${r}`, {
      level: "warn"
    });
  }
  info(r, ...e) {
    return;
  }
  debug(r, ...e) {
    return;
  }
  verbose(r, ...e) {
    return;
  }
}

export { aer, WKr };
