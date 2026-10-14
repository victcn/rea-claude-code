// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { Tf, aa } from "./chunk-w4hwgefc.js";

import { r9e } from "./chunk-qqd24q2y.js";

import { readFile as i } from "fs/promises";

async function nhe(e) {
  if (!Tf()) {
    let r = r9e();
    if (r.HTTPS_PROXY && URL.parse(e)?.protocol === "https:") {
      let n;
      if (r.SSL_CERT_FILE) try {
        n = await i(r.SSL_CERT_FILE, "utf8");
      } catch (o) {
        t(`MCP agent-proxy fallback: failed to read CA bundle: ${o instanceof Error ? o.message : String(o)}`, {
          level: "warn"
        });
      }
      return aa({
        url: e,
        fallbackProxy: {
          url: r.HTTPS_PROXY,
          noProxy: r.NO_PROXY,
          ca: n
        }
      });
    }
  }
  return aa({
    url: e
  });
}

export { nhe };
