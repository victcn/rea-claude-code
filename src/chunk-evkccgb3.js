// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { L } from "./chunk-vh1p9t2h.js";

function u(e) {
  return typeof e === "number" && Number.isInteger(e) && e > 0 ? e : void 0;
}

function ozo(e, i) {
  let n = new Map, t = [];
  if (e === void 0 || e === null) return {
    manifests: n,
    malformedField: !1,
    malformedServerNames: t
  };
  if (!L(e)) return {
    manifests: n,
    malformedField: !0,
    malformedServerNames: t
  };
  for (let r of i) {
    if (!Object.hasOwn(e, r)) continue;
    let o = e[r], s = L(o) ? o.initializeResult : void 0, d = L(o) && o.toolsListResult !== null ? o.toolsListResult : void 0;
    if (L(s) && (d === void 0 || L(d))) n.set(r, d === void 0 ? {
      initializeResult: s
    } : {
      initializeResult: s,
      toolsListResult: d
    }); else t.push(r);
  }
  return {
    manifests: n,
    malformedField: !1,
    malformedServerNames: t
  };
}

var f = "notifications/tools/list_changed";

function Agn(e) {
  return L(e) && !("id" in e) && e.method === f;
}

function tjt(e) {
  if (!L(e)) return {
    settings: {},
    ignored: []
  };
  let {timeout: i, disableAutoBackground: n} = e, t = u(i), r = [];
  if (i !== void 0 && t === void 0) r.push("timeout");
  if (n !== void 0 && typeof n !== "boolean") r.push("disableAutoBackground");
  return {
    settings: {
      ...t !== void 0 && {
        timeout: t
      },
      ...n === !0 && {
        disableAutoBackground: n
      }
    },
    ignored: r
  };
}

export { ozo, Agn, tjt };
