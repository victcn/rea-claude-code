// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Dn } from "./chunk-q0e8j22k.js";

var cv = "SubagentHandback";

var gt = "Agent", Lks = "Launch a new agent to handle complex, multi-step tasks", Nks = "The task for the agent to perform", $ks = "A short (3-5 word) description of the task", Gyo = "Name for the spawned agent.", Fks = `${Gyo} Makes it addressable via ${Dn}({to: name}) while running.`, UF = "fork", Uks = `agent:builtin:${UF}`, _p = "Task", sct = 1e5, oMt = new Set([ "Explore", "Plan" ]), Dxe = "NOTE: this agent stopped at its ", mEr = `; ${Dn} to task-id to continue`, KBn = ` Send the agent a message (${Dn}) to let it continue from where it stopped.`, qBn = `The subagent ended without delivering a report through ${cv}, so no report was delivered.`, YBn = ` Send the agent a message (${Dn}) to ask it to deliver its report.`, Vyo = ` Once its requests are accepted again, send the agent a message (${Dn}) to let it continue from where it stopped instead of starting a new agent.`, XBn = "subagent_type is required: the general-purpose agent is not available in this session";

export { cv, gt, Lks, Nks, $ks, Gyo, Fks, UF, Uks, _p, sct, oMt, Dxe, mEr, KBn, qBn, YBn, Vyo, XBn };
