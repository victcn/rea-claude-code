// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mt } from "./chunk-j90se18b.js";

import { YOe, $s } from "./chunk-5wbhf1bk.js";

import { iG } from "./chunk-f1zpf9me.js";

import { P9e } from "./chunk-q6wab2jw.js";

import { L } from "./chunk-vh1p9t2h.js";

var u = [ "note", "lang" ], p = `Note: \`label\` was longer than ${iG} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`;

function Zyn(t) {
  if (!L(t)) return null;
  let a = u.filter(e => e in t), n;
  if (typeof t.label === "string" && YOe(t.label) > iG) {
    let e = t.label.replaceAll(`\r\n`, `\n`).trim(), f = YOe(e) > iG;
    n = {
      value: f ? $s(e, iG).trimEnd() : e,
      cut: f
    };
  }
  let s, d;
  if (t.action === "call_endpoint" && typeof t.body === "string") {
    let e = P9e(mt(t.body, !1)).stripped;
    if (Array.isArray(e)) s = "array"; else if (e !== null && typeof e === "object") s = "object";
    d = e;
  }
  let l;
  if (t.action === "write_db" && typeof t.data === "string") {
    let e = P9e(mt(t.data, !1)).stripped;
    if (L(e)) l = e;
  }
  let r = (t.action === void 0 || t.action === "publish") && Array.isArray(t.files) && t.files.some(e => typeof e === "string") ? t.files.map(e => typeof e === "string" ? {
    path: e
  } : e) : void 0;
  if (a.length === 0 && s === void 0 && l === void 0 && r === void 0 && n === void 0) return null;
  let o = {
    ...t
  }, i = [];
  for (let e of a) delete o[e], i.push(`legacy_${e}`);
  if (s !== void 0) o.body = d, i.push(`body_json_string_to_${s}`);
  if (l !== void 0) o.data = l, i.push("data_json_string_to_object");
  if (r !== void 0) o.files = r, i.push("files_string_list");
  if (n !== void 0) o.label = n.value, i.push(n.cut ? "label_clamped" : "label_trimmed");
  return {
    input: o,
    shapeClass: i.join("+"),
    ...n?.cut && {
      resultNote: p
    }
  };
}

export { Zyn };
