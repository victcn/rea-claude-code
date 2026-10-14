// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Xr, bC, ce } from "./chunk-xywp7esx.js";

import { p } from "./chunk-jkzenvsk.js";

import { zx } from "./chunk-9ckkqdj1.js";

import { me, yn, Vo, lr, St } from "./chunk-dexzwy8h.js";

var c = p(() => lr(St({
  id: me(),
  title: me().optional(),
  text: me(),
  footer: me().optional(),
  priority: yn().default(0),
  maxImpressions: yn().default(3),
  accentBar: Vo().default(!0),
  requiresModel: me().optional()
})).default([])), i = [];

function u() {
  let n = bC("tengu_startup_announcements", i), t = c().safeParse(n);
  return t.success ? t.data : i;
}

function s(n) {
  return n.requiresModel === void 0 || Xr(n.requiresModel);
}

function JEe(n) {
  let t = zx();
  if (t.startupAnnouncementPick !== void 0) return t.startupAnnouncementPick;
  let r = ce().announcementImpressions ?? {}, o = u().filter(e => (r[e.id] ?? 0) < e.maxImpressions && s(e)).sort((e, a) => a.priority - e.priority)[0];
  if (n && o !== void 0) t.startupAnnouncementPick = o;
  return o;
}

function G1o() {
  let n = u().filter(s).sort((t, r) => r.priority - t.priority)[0];
  if (n === void 0) return !1;
  return JSON.stringify({
    id: n.id,
    title: n.title,
    text: n.text,
    footer: n.footer
  });
}

export { JEe, G1o };
