// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { B } from "./chunk-3pqddg8f.js";

function gfs(t, r, o = {}) {
  e().host.telemetryHandles.installMeter(t, r, o);
}

function hfs() {
  return e().host.telemetryHandles.sessionCounter();
}

function mao() {
  return e().host.telemetryHandles.locCounter();
}

function z4e() {
  return e().host.telemetryHandles.prCounter();
}

function gao() {
  return e().host.telemetryHandles.commitCounter();
}

function yfs() {
  return e().host.telemetryHandles.costCounter();
}

function rDn() {
  return e().host.telemetryHandles.tokenCounter();
}

function Fgr() {
  return e().host.telemetryHandles.codeEditToolDecisionCounter();
}

function _fs() {
  return e().host.telemetryHandles.activeTimeCounter();
}

function bfs() {
  return e().host.telemetryHandles.meterProvider();
}

function hao(t) {
  e().host.telemetryHandles.replaceMeterProvider(t);
}

function e() {
  return B();
}

export { gfs, hfs, mao, z4e, gao, yfs, rDn, Fgr, _fs, bfs, hao };
