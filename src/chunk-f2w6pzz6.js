// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ee } from "./chunk-kq1bg4dg.js";

import { randomUUID as s } from "crypto";

var m = 256;

function SEn(e = s(), t) {
  if (t !== void 0) {
    let o = ee().laneNoticeSlugs;
    o.set(e, t), r(o);
  }
  return e;
}

function aXo(e) {
  return ee().laneNoticeSlugs.get(e);
}

function lXo(e, t, o) {
  let n = ee(), i = Date.now();
  if (e !== void 0) n.commentReads.set(e, {
    slug: t,
    ownWordsOnly: o
  }), r(n.commentReads);
  if (n.commentReadAtBySlug.delete(t), n.commentReadAtBySlug.set(t, i), r(n.commentReadAtBySlug) || !o) n.lastOthersCommentReadAt = i;
}

function dXo(e) {
  return ee().commentReads.get(e);
}

function wEn(e, t) {
  for (let [o, n] of ee().commentReadAtBySlug) if (o !== e && !(Number.isFinite(t) && n < t)) return !0;
  return !1;
}

function vEn() {
  return ee().lastOthersCommentReadAt;
}

function r(e) {
  if (e.size <= m) return !1;
  let t = e.keys().next().value;
  if (t !== void 0) e.delete(t);
  return !0;
}

export { SEn, aXo, lXo, dXo, wEn, vEn };
