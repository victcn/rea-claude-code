// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { Ut, kIe } from "./chunk-8yperama.js";

import { fi } from "./chunk-ar8d6cs7.js";

var r = 5e3;

function aVr(e, t, o, a) {
  let s = {
    sentAhead: !1,
    flagSource: t,
    negotiationDenylisted: o,
    listed: a,
    listChangedBeforeHandler: !1,
    handlerRegistered: !1
  };
  return Ut().toolsListAhead.set(e, s), s;
}

function zYo(e, t, o) {
  e.page = t, e.pageSentAtMs = o;
}

function GYo(e) {
  if (e.page !== void 0) e.expiry = setTimeout(n, r, e), e.expiry.unref?.();
}

function lVr(e) {
  n(e);
}

function VYo(e) {
  let t = Ut().toolsListAhead.get(e);
  if (t?.page === void 0 || t.pageSentAtMs === void 0) return;
  let o = {
    page: t.page,
    sentAtMs: t.pageSentAtMs
  };
  return n(t), o;
}

function KYo(e, t) {
  try {
    let o = Ut().toolsListAhead.get(e);
    if (o !== void 0 && o.firstPageMark === void 0) o.firstPageMark = kIe(t) ?? "unmarked";
  } catch {}
}

function qYo(e, t) {
  let o = Ut().toolsListAhead.get(e);
  if (o !== void 0) o.earlyAnswer = t;
}

function dVr(e) {
  let t = Ut().toolsListAhead.get(e);
  if (t === void 0) return;
  if (n(t), t.sentAhead && !t.handlerRegistered) t.listChangedBeforeHandler = !0;
}

function YYo(e) {
  let t = Ut().toolsListAhead.get(e);
  if (t === void 0) return !1;
  t.handlerRegistered = !0;
  let o = t.listChangedBeforeHandler;
  return t.listChangedBeforeHandler = !1, o;
}

function _St(e) {
  if (e === void 0) return {};
  return {
    toolsListAhead: e.sentAhead,
    toolsListAheadListed: e.listed,
    toolsListAheadFlagSource: c(e.flagSource),
    ...e.earlyAnswer !== void 0 && {
      toolsListAheadEarlyAnswer: c(e.earlyAnswer)
    },
    ...e.firstPageMark !== void 0 && {
      toolsListFirstPageMark: c(e.firstPageMark)
    }
  };
}

function XYo(e) {
  let t = Ut().toolsListAhead.get(fi(e.client));
  return t === void 0 ? {} : {
    ..._St(t),
    negotiationDenylisted: t.negotiationDenylisted
  };
}

function n(e) {
  clearTimeout(e.expiry), e.page = void 0, e.pageSentAtMs = void 0, e.expiry = void 0;
}

export { aVr, zYo, GYo, lVr, VYo, KYo, qYo, dVr, YYo, _St, XYo };
