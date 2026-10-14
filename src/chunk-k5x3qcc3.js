// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { CDe, Y6, O2, Cnr, Rnr } from "./chunk-kmph7cxf.js";

var TDe = {
  accepted: "Allowed",
  declined: "Not allowed",
  unset: "Not asked yet"
}, t = "Turned off by your organization's settings (remoteTools.allowUnattendedServing)", o = "Turned off in your user settings (remoteTools.allowUnattendedServing: false in ~/.claude/settings.json) \u2014 remove it there to re-enable";

function HVt() {
  return Cnr() === "user" ? o : t;
}

function HEn(e) {
  return Y6() !== "unset" || Rnr() || e;
}

function DEn() {
  return Y6() === "accepted" || Rnr();
}

async function LEn(e) {
  if (e === "accepted" && O2()) return "forbidden";
  let n = e === "accepted" ? "accepted" : Y6() === "accepted" ? "revoked" : "declined";
  if (!await CDe(e)) return "not_saved";
  return i("tengu_served_unattended_consent", {
    action: c(n),
    surface: b("cli")
  }), "saved";
}

export { TDe, HVt, HEn, DEn, LEn };
