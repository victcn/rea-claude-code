// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, ps, R$, fht } from "./chunk-3pqddg8f.js";

import { Do, t } from "./chunk-kawq2919.js";

import { d1e, rI } from "./chunk-2my8wpr5.js";

import { MOe } from "./chunk-fr91rt4p.js";

import { gu } from "./chunk-53fww9mk.js";

import { closeSync as f, openSync as p } from "fs";

import { devNull as a } from "os";

class u {
  line;
}

var l = new K(() => new u);

function KFo(e = 0) {
  {
    if (!process.argv.includes("--session-tunnel") || !gu()) return;
    MOe(m => t(`[session tunnel] ${m}`, {
      level: "warn"
    }));
    let o = d1e(e, "the session tunnel's line of JSON") ?? void 0;
    ps(l).line = o;
    let s = p(a, "r");
    if (s !== e) f(s);
    let n;
    try {
      n = Do(o ?? "null");
    } catch {
      n = null;
    }
    let r = typeof n?.oauth_token === "string" ? n.oauth_token.trim() : "", i = typeof n?.agent_proxy_token === "string" ? n.agent_proxy_token.trim() : "";
    if (r !== "") rI(), R$(r), fht("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
    return t(`[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token and ${i === "" ? "no" : "an"} agent proxy token`), 
    i === "" ? void 0 : i;
  }
  return;
}

function qFo() {
  let e = ps(l), o = e.line;
  return e.line = void 0, o;
}

export { KFo, qFo };
