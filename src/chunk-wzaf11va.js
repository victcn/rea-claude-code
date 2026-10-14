// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { vr } from "./chunk-5wbhf1bk.js";

function Rfn(e, n = new Date) {
  let r = a(n), t = c(g(e));
  return t ? `${r}-${t}.txt` : `conversation-${r}.txt`;
}

function a(e) {
  let n = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), t = String(e.getDate()).padStart(2, "0"), s = String(e.getHours()).padStart(2, "0"), i = String(e.getMinutes()).padStart(2, "0"), o = String(e.getSeconds()).padStart(2, "0");
  return `${n}-${r}-${t}-${s}${i}${o}`;
}

function g(e) {
  let n = e.find(s => s.type === "user");
  if (!n || n.type !== "user") return "";
  let r = n.message?.content, t = "";
  if (typeof r === "string") t = r.trim(); else if (Array.isArray(r)) {
    let s = r.findLast(i => i.type === "text");
    if (s && "text" in s) t = s.text.trim();
  }
  if (t = vr(t), t.length > 50) t = t.substring(0, 49) + "\u2026";
  return t;
}

function c(e) {
  return e.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

export { Rfn };
