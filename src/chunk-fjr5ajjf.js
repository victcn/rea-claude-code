// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { zf } from "./chunk-xmqqa853.js";

import { Wce } from "./chunk-sqb9meyh.js";

function dQe() {
  return zf() || Wce();
}

function sUo(e) {
  switch (e.kind) {
   case "elsewhere":
    return "elsewhere";

   case "nowhere":
    return e.hasOwnSessionRecord ? "here_only" : "nowhere";

   case "unknown":
    return e.why === "not_looked" ? "not_looked" : "unknown";
  }
}

function gun(e, o) {
  i("tengu_remote_attach_record_lookup", {
    outcome: c(e),
    entry_point: c(o)
  });
}

export { dQe, sUo, gun };
