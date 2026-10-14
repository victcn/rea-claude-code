// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { vLt, dVn, Gft } from "./chunk-8yperama.js";

import { VIe } from "./chunk-q6wab2jw.js";

import { a } from "./chunk-j016gcgm.js";

import { Lne } from "./chunk-r492ssxm.js";

import { H3r } from "./chunk-k2c8s8c6.js";

import { Zdr } from "./chunk-84yp45y8.js";

import { vn } from "./chunk-3rbd48rp.js";

var mVr = [ "Docs" ], m = new Set([ "claudedocs", "claudepages" ]);

function eZn(e) {
  return e.tier === "core" && mVr.some(o => Lne(e.title) === Lne(o));
}

var t5o = "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";

function Yzt(e) {
  return e.config.type === "claudeai-proxy" && VIe(e.config) && Zdr(e.config) || H3r() && e.config.type === "sdk" && Vt(e.name) !== null && m.has(Gft(e.serverInfo?.name ?? "")) || a.CLAUDE_CODE_REMOTE === !0 && e.config.type === "http" && e.config.scope === "dynamic" && (dVn(e.config) || vLt.has(e.name));
}

function tZn(e) {
  return e.some(o => (o.type === "connected" || o.type === "pending" || o.type === "cached") && Yzt(o));
}

var u = "Claude Preview", p = "Claude Browser", d = vn(u), C = vn(p), f = new Set([ d, C ]);

function GGe(e) {
  return f.has(vn(e));
}

var E = new Set([ "description", "activeForm" ]);

function Fbn(e, o, t, i) {
  let r = `mcp__${vn(e)}__${o}`;
  return {
    async checkPermissions() {
      return {
        behavior: "ask",
        message: `${e} requires permission.`,
        suggestions: [ {
          type: "addRules",
          rules: [ {
            toolName: r,
            ruleContent: void 0
          } ],
          behavior: "allow",
          destination: "session"
        } ],
        metadata: {
          command: {
            name: r,
            chrome: {
              hostHandlesOriginConsent: !0
            }
          }
        }
      };
    },
    ...t !== void 0 && Object.hasOwn(t, "code") && {
      toAutoClassifierInput(s) {
        let c = Object.keys(s).filter(n => !E.has(n));
        return i(Object.fromEntries(c.map(n => [ n, s[n] ])), o);
      }
    }
  };
}

export { mVr, eZn, t5o, Yzt, tZn, GGe, Fbn };
