// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Dn } from "./chunk-q0e8j22k.js";

var Md = "ListAgents", Zys = "ListPeers";

function e() {
  return "";
}

var o = `Lists agents you can ${Dn} to \u2014 in-process subagents you spawned, the teammates on your team, other local Claude sessions on this machine, your Claude sessions running in the cloud (when this session has cloud access; a cloud session receives your message but cannot message any session back yet \u2014 do not ask it to reply, read its answer in its own transcript), and (when Remote Control is connected here) your account's other sessions \u2014 Remote Control sessions on other machines and cloud sessions, each row labeled by kind. Names are the address: send with \`${Dn}({to: "<name>", message: "..."})\`, copying the name exactly as a row prints it. Append a row's \` [ref]\` only when the bare name is not enough \u2014 two rows share it, or an error asks you to disambiguate.`, n = `Lists the agents and Claude sessions this session can see \u2014 in-process subagents you spawned, the teammates on your team, other local Claude sessions on this machine, your Claude sessions running in the cloud (when this session has cloud access), and (when Remote Control is connected here) your account's other sessions, each row labeled by kind \u2014 plus this session's own name, the one other sessions use to message it. This session has no ${Dn} tool, so it cannot message them with it; other sessions can still message this one. To reply, use your host application's own messaging tool if it provides one \u2014 otherwise a reply from here is not possible, and if one is needed, tell your user.`;

function guo({canSendMessages: s}) {
  return s ? o + e() : n;
}

export { Md, Zys, guo };
