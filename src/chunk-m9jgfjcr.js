// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gt } from "./chunk-yebkpv3k.js";

import { Xi } from "./chunk-xywp7esx.js";

import { ht, qt, je, Rt } from "./chunk-s2t7g8m9.js";

import { et } from "./chunk-59na0977.js";

var r = null, s = null, n = null, e = {
  name: import.meta.require("./chunk-w8jd0c0r.js").ARTIFACT_TOOL_NAME,
  names: import.meta.require("./chunk-w8jd0c0r.js"),
  ui: import.meta.require("./chunk-7cg5jwmw.js")
}, M = [ gt, je, ht, qt, et, Xi, Rt, ...r ? [ r.name ] : [], ...s ? [ s.name ] : [], ...n ? [ n.name ] : [], ...e ? [ e.name, e.names.ARTIFACT_COMMENTS_TOOL_NAME, e.names.ARTIFACT_DATA_TOOL_NAME, e.names.ARTIFACT_CHECK_TOOL_NAME ] : [] ], T = {
  get [gt]() {
    return import.meta.require("./chunk-y0dtpygd.js").renderToolUseMessage;
  },
  get [je]() {
    return import.meta.require("./chunk-rksn0dgn.js").renderToolUseMessage;
  },
  get [ht]() {
    return import.meta.require("./chunk-gqphyf7b.js").renderToolUseMessage;
  },
  get [qt]() {
    return import.meta.require("./chunk-e9edz080.js").renderToolUseMessage;
  },
  get [et]() {
    return import.meta.require("./chunk-j5a6bn0m.js").renderToolUseMessage;
  },
  get [Xi]() {
    return import.meta.require("./chunk-ybre4ncp.js").renderToolUseMessage;
  },
  get [Rt]() {
    return import.meta.require("./chunk-ykef53td.js").renderToolUseMessage;
  },
  ...r && {
    [r.name]: r.ui.renderToolUseMessage
  },
  ...s && {
    [s.name]: s.ui.renderToolUseMessage
  },
  ...n && {
    [n.name]: n.ui.renderToolUseMessage
  },
  ...e && {
    [e.name]: e.ui.renderToolUseLine,
    [e.names.ARTIFACT_COMMENTS_TOOL_NAME]: e.ui.renderCommentsToolUseMessage,
    [e.names.ARTIFACT_DATA_TOOL_NAME]: e.ui.renderDataToolUseMessage,
    [e.names.ARTIFACT_CHECK_TOOL_NAME]: e.ui.renderCheckToolUseMessage
  }
};

function i7e(o, t, l) {
  if (o.renderToolUseMessage) return o.renderToolUseMessage(t, l);
  return Wyt(o.name, t, l);
}

function Wyt(o, t, l) {
  if (Object.hasOwn(T, o)) return T[o]?.(t, l);
  return null;
}

export { i7e, Wyt };
