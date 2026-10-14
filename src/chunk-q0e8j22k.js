// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { L } from "./chunk-vh1p9t2h.js";

var Dn = "SendMessage", Csn = "ccd_session_mgmt", qft = 200, PPr = [ "type", "recipient", "recipient_kind", "content", "request_id", "approve" ];

function ZCo(e) {
  return "to" in e && ("message" in e || "notify_when_idle" in e);
}

function kLt(e) {
  if (!L(e) || !ZCo(e) || !PPr.some(n => n in e)) return;
  let o = {
    ...e
  };
  for (let n of PPr) delete o[n];
  return o;
}

export { Dn, Csn, qft, PPr, ZCo, kLt };
