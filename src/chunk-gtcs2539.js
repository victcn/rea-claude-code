// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ru, DZt, LF } from "./chunk-9tdwgnpn.js";

import { le } from "./chunk-cqgvwwgb.js";

import { kz } from "./chunk-10gv16xm.js";

import { randomBytes as l } from "crypto";

function dKs(o, t) {
  let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${l(12).toString("hex")}`);
  return a5n(e?.content ?? "", t.data, e?.is_error === !0);
}

function a5n(o, t, e = !1, r = []) {
  return LF({
    envelope: {
      v: ru,
      outcome: "completed",
      target: HFt(),
      is_error: e,
      content: DZt(o),
      output: t,
      ...r.length > 0 && {
        notes: r
      }
    },
    content: o
  });
}

function HFt() {
  return {
    name: kz(),
    working_dir: le()
  };
}

export { dKs, a5n, HFt };
