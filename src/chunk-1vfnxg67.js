// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _i, ii } from "./chunk-qjb8dzm4.js";

var o = new Set([ -32002, _i.InvalidParams ]);

function e(n) {
  return n instanceof ii ? n.code : void 0;
}

function t(n) {
  return n instanceof ii && n.code === _i.MethodNotFound;
}

function i(n) {
  return n instanceof ii && (n.code === _i.MethodNotFound || n.code === _i.InvalidParams);
}

function c(n) {
  return n instanceof ii && o.has(n.code);
}

function u(n) {
  return n instanceof ii && n.code === _i.InvalidParams;
}

function d(n) {
  return n instanceof ii && n.code === _i.UrlElicitationRequired;
}

export { e as getMcpErrorCode, t as isMcpMethodNotFoundError, u as isMcpNotADirectoryError, c as isMcpResourceNotFoundError, i as isMcpUnknownMethodError, d as isUrlElicitationRequiredMcpError };
