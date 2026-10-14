// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, iFt } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { a } from "./chunk-j016gcgm.js";

import { Gre, Rl, ol, Yr, da } from "./chunk-z09tf6qf.js";

import { i } from "./chunk-hedpgw9m.js";

import { g } from "./chunk-3ykz5st8.js";

import { Ft, efe } from "./chunk-xywp7esx.js";

import { Qn } from "./chunk-84yp45y8.js";

import { CSn } from "./chunk-6x13d3r7.js";

import { ye } from "./chunk-ne9evs39.js";

function p() {
  return a.CLAUDE_JOB_DIR;
}

async function ASn(n, e, s) {
  i("tengu_bg_agent_action", {
    action: b("stop"),
    source: c(n),
    jobSessionId: ye(q())
  }), iFt(void 0);
  let o = p();
  if (Ft() && o) {
    let r = (new Date).toISOString(), t = await Yr(o, e);
    if (t && !da(t)) await Rl(o, {
      ...t,
      state: "stopped",
      detail: "stopped from session",
      tempo: "idle",
      needs: void 0,
      block: void 0,
      inFlight: void 0,
      updatedAt: r,
      firstTerminalAt: t.firstTerminalAt ?? r
    }, e).catch(ol); else await CSn(o, e);
    if (efe()) process.stdout.write(Gre(s ?? "Session stopped."));
  }
  return g("job_stop_self"), Qn(0, "prompt_input_exit", {
    suppressResumeHint: !0
  });
}

export { ASn };
