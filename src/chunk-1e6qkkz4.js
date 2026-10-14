// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { L } from "./chunk-vh1p9t2h.js";

function $bn(e) {
  return "method" in e && "id" in e && e.id !== null;
}

var pet = Object.freeze({}), fet = Object.freeze({
  name: "claude-code",
  title: "Claude Code",
  description: "Anthropic's agentic coding tool",
  websiteUrl: "https://claude.com/claude-code"
}), n = Symbol("swallow");

class qzt {
  serverName;
  sendMcpMessage;
  isClosed=!1;
  manifestInitializeResult;
  manifestToolsListResult;
  swallowNextInitializedNotification=!1;
  outcome;
  onclose;
  onerror;
  onmessage;
  constructor(e, t, i) {
    this.serverName = e;
    this.sendMcpMessage = t;
    this.manifestInitializeResult = i?.initializeResult, this.manifestToolsListResult = i?.toolsListResult, 
    this.outcome = i === void 0 ? "none" : "pending";
  }
  get manifestOutcome() {
    return this.outcome;
  }
  async start() {}
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    let t = this.answerFromManifest(e);
    if (t === n) return;
    if (t !== void 0) {
      queueMicrotask(() => this.onmessage?.(t));
      return;
    }
    let i = await this.sendMcpMessage(this.serverName, e);
    if (this.onmessage) this.onmessage(i);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = !0, this.onclose?.();
  }
  answerFromManifest(e) {
    if (this.manifestInitializeResult === void 0 && this.manifestToolsListResult === void 0 && !this.swallowNextInitializedNotification) return;
    if (!("method" in e)) {
      this.dropManifest("unexpected_message");
      return;
    }
    switch (e.method) {
     case "initialize":
      {
        let t = this.manifestInitializeResult;
        if (t === void 0 || !("id" in e)) {
          this.dropManifest("unexpected_message");
          return;
        }
        this.manifestInitializeResult = void 0;
        let i = e.params;
        if (i === void 0 || typeof i.protocolVersion !== "string" || i.protocolVersion !== t.protocolVersion) {
          this.dropManifest("protocol_version_mismatch");
          return;
        }
        if (!r(i.capabilities)) {
          this.dropManifest("client_capabilities_declared");
          return;
        }
        if (!o(t)) {
          this.dropManifest("malformed_result");
          return;
        }
        return this.swallowNextInitializedNotification = !0, this.outcome = "replayed", 
        {
          jsonrpc: "2.0",
          id: e.id,
          result: t
        };
      }

     case "notifications/initialized":
      {
        if (!this.swallowNextInitializedNotification) {
          this.dropManifest("unexpected_message");
          return;
        }
        return this.swallowNextInitializedNotification = !1, n;
      }

     case "tools/list":
      {
        let t = this.manifestToolsListResult;
        if (t === void 0 || !("id" in e) || this.swallowNextInitializedNotification || e.params !== void 0 && e.params.cursor !== void 0) {
          this.dropManifest("unexpected_message");
          return;
        }
        if (this.manifestToolsListResult = void 0, !o(t)) return;
        return {
          jsonrpc: "2.0",
          id: e.id,
          result: t
        };
      }

     default:
      {
        this.dropManifest("unexpected_message");
        return;
      }
    }
  }
  dropManifest(e) {
    if (this.manifestInitializeResult = void 0, this.manifestToolsListResult = void 0, 
    this.swallowNextInitializedNotification = !1, this.outcome === "pending") this.outcome = e;
  }
}

function r(e) {
  return L(e) && Object.keys(e).length === 0;
}

function o(e) {
  let t = e._meta;
  if (t === void 0) return !0;
  if (!L(t)) return !1;
  let {progressToken: i} = t;
  if (i !== void 0 && typeof i !== "string" && typeof i !== "number") return !1;
  let s = t["io.modelcontextprotocol/related-task"];
  return s === void 0 || L(s) && typeof s.taskId === "string";
}

class fVr {
  sendMcpMessage;
  isClosed=!1;
  constructor(e) {
    this.sendMcpMessage = e;
  }
  onclose;
  onerror;
  onmessage;
  async start() {}
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    this.sendMcpMessage(e);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = !0, this.onclose?.();
  }
}

export { $bn, pet, fet, qzt, fVr };
