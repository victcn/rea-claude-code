// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { Ft } from "./chunk-xywp7esx.js";

function dVo() {
  return !Ft();
}

function $hn(o) {
  return o.filter(r => !r.mcpErrorMetadata && !r.statusOnly && !r.startupFatal);
}

function hZe(o) {
  let r = [], i = [];
  for (let n of o) (n.statusOnly ? r : i).push(n);
  return {
    statusNotices: r,
    invalidEntries: i
  };
}

function Fhn(o) {
  for (let r of o) t(`Invalid setting skipped without dialog (automated session): ${r.file ?? "settings"}: ${r.path}: ${r.message}`, {
    level: "error"
  });
}

export { dVo, $hn, hZe, Fhn };
