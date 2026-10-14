// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ye, x } from "./chunk-b0z4bv3v.js";

import { Ka } from "./chunk-1tsh11bz.js";

import { Ys } from "./chunk-7fcp0cw9.js";

function u(i, r, o, n = "connection", a) {
  let e = () => a?.aborted ? new Ye(`${n} for '${o}' aborted`) : Object.assign(new x(`${n} for '${o}' timed out connecting`, "MCP lazy dial timed out connecting"), {
    mcpErrorSource: "downstream_unreachable"
  });
  if (r.aborted) return i.catch(() => {}), Promise.reject(a?.aborted ? new Ye(`${n} for '${o}' aborted before connect`) : new x(`${n} for '${o}' aborted before connect`, "MCP lazy dial aborted before connect"));
  return new Promise((t, s) => {
    let c = () => s(e());
    r.addEventListener("abort", c, {
      once: !0
    }), i.then(l => {
      r.removeEventListener("abort", c), t(l);
    }, l => {
      r.removeEventListener("abort", c), s(l);
    });
  });
}

async function khe(i, r) {
  let o = r.timeoutMs ?? Ka(), {signal: n, cleanup: a} = Ys(r.signal, {
    timeoutMs: o,
    refTimer: !0
  });
  try {
    return await u(i, n, r.serverName, r.context, r.signal);
  } finally {
    a();
  }
}

var d = 5e3, m = 3e5;

function $2t(i) {
  let r = i?.baseHoldMs ?? d, o = i?.maxHoldMs ?? m, n = new Map, a = (e, t) => {
    let s = n.get(e);
    return s !== void 0 && t < s.holdUntil;
  };
  return {
    shouldSkip(e, t = Date.now()) {
      return a(e, t);
    },
    recordFailure(e, t = Date.now()) {
      if (a(e, t)) return;
      let c = (n.get(e)?.count ?? 0) + 1, l = Math.min(o, r * 2 ** (c - 1));
      n.set(e, {
        count: c,
        holdUntil: t + l
      });
    },
    recordSuccess(e) {
      n.delete(e);
    },
    holdUntil(e) {
      return n.get(e)?.holdUntil;
    }
  };
}

export { khe, $2t };
