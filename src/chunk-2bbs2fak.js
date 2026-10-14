// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { k } from "./chunk-xywp7esx.js";

import { ru, bz, LF } from "./chunk-9tdwgnpn.js";

var c = "tengu_synthetic_fog", l = 5242880, p = 65536, m = 33554432, _ = 65536;

function f() {
  let e = k(c, l);
  return typeof e === "number" && Number.isSafeInteger(e) && e >= p && e <= m ? e : l;
}

function F_t() {
  return f() - _;
}

function czo({answer: e, bytes: d, status: i, tooLarge: o}) {
  let n = o ? `is too large for the session service to carry back (${d} bytes)` : `was refused by the session service (HTTP ${i})`, r = bz(typeof e === "object" && e !== null ? Reflect.get(e, "result") : void 0), t = r.envelope.status === "present" ? r.envelope.envelope : void 0;
  if (t === void 0) return {
    content: [ {
      type: "text",
      text: `(this machine's answer ${n}, so it was not returned)`
    } ],
    isError: !0
  };
  let s = t.target.name, a = o ? " Run a narrower command instead: read part of the file (offset and limit), filter the output (head, tail, grep), or for an image or screenshot save a smaller copy on the machine and read that." : "", u = t.outcome === "completed" ? `The command ran to completion on ${s}, but its result ${n}, so it was not returned. Its effects stand \u2014 do not re-run it just to see the output.${a}` : `${s} answered this call, but the answer ${n}, so it was not returned.${a}`;
  return LF({
    envelope: {
      v: ru,
      outcome: "failed",
      ...t.call_id !== void 0 && {
        call_id: t.call_id
      },
      target: t.target,
      code: "tool_error",
      message: u,
      ...VBr(t)
    },
    content: [ {
      type: "text",
      text: u
    } ]
  });
}

function VBr(e) {
  return "replayed" in e && e.replayed === !0 ? {
    replayed: !0,
    ..."served_at" in e && e.served_at !== void 0 && {
      served_at: e.served_at
    }
  } : {};
}

export { F_t, czo, VBr };
