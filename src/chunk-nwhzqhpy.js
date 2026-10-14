// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { QS } from "./chunk-3pqddg8f.js";

import { uw, Vk, Co } from "./chunk-84yp45y8.js";

import { gr } from "./chunk-z52kmxx4.js";

import { rUo } from "./chunk-5f9wnbhj.js";

import { Wx } from "./chunk-pses58nm.js";

import { Is } from "./chunk-p35rdtee.js";

function ILr(e, r) {
  return rUo(r.scope) && !Co(e);
}

function SWe(e, r) {
  return ILr(e, r) && !o(r);
}

function o(e) {
  return import.meta.require("./chunk-89c96hkc.js").mcpClientModule().isFirstPartyDesignServerConfig(e);
}

function OLr(e) {
  switch (e.type) {
   case void 0:
   case "stdio":
   case "http":
   case "sse":
   case "ws":
    return !0;

   case "sdk":
   case "sse-ide":
   case "ws-ide":
   case "claudeai-proxy":
    return !1;
  }
}

function t(e) {
  return Object.assign(uw(), Is(e, OLr));
}

async function aQe({storageV5: e} = {}) {
  if (QS() || gr()) return uw();
  await Wx();
  let {servers: r} = await Vk({}, {
    purpose: "deviceBridge",
    storageV5: e
  });
  return t(r);
}

export { ILr, SWe, OLr, aQe };
