// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { sc } from "./chunk-5wbhf1bk.js";

var vqr = 255, r = 255, t = /[\x00-\x20\x7f~^:?*[\\]/, o = /[\p{Cc}\p{Cf}\uFFFD]/u, l = 250;

function evn(e) {
  return Buffer.byteLength(e, "utf8") <= r && i(e);
}

function i(e) {
  return e.length <= vqr && e !== "@" && e !== "HEAD" && sc(e) && s(e) && !o.test(e) && !e.startsWith("-") && e.split("/").every(n => Buffer.byteLength(n, "utf8") <= l);
}

function s(e) {
  return !t.test(e) && !e.endsWith(".") && !e.includes("..") && !e.includes("@{") && e.split("/").every(n => n !== "" && !n.startsWith(".") && !n.endsWith(".lock"));
}

export { vqr, evn };
