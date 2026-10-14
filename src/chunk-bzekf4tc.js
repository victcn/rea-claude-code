// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { hh, ky } from "./chunk-8yperama.js";

import { a } from "./chunk-j016gcgm.js";

import { xwe } from "./chunk-xywp7esx.js";

var d = /^\/v1\/code\/sessions\/[A-Za-z0-9_-]+\/worker\/otlp\/((?:customer\/)?[a-z]+)$/;

function o(r, e) {
  let t = d.exec(r);
  return t !== null && t[1] === e;
}

function h(r) {
  let e = r.toLowerCase();
  return e === "localhost" || e === "::1" || e === "[::1]" || /^127(\.\d{1,3}){3}$/.test(e);
}

function l() {
  return a.CLAUDE_CODE_REMOTE === !0 && hh.bridgeCarrier === void 0;
}

var hXt = {
  metrics: "METRICS",
  logs: "LOGS",
  traces: "TRACES"
};

function Dao(r) {
  return !!a.OTEL_EXPORTER_OTLP_HEADERS || !!a[`OTEL_EXPORTER_OTLP_${hXt[r]}_HEADERS`];
}

function Zgr(r) {
  if (r === "traces") return null;
  if (!l()) return null;
  let e = a.SESSION_INGRESS_URL, t = a.CLAUDE_CODE_REMOTE_SESSION_ID, s = process.env[`OTEL_EXPORTER_OTLP_${hXt[r]}_ENDPOINT`]?.trim();
  if (!e || !t || !s) return null;
  if (Dao(r)) return null;
  let f = r === "logs" ? [ "customer/logs" ] : [ ...Q4e() ? [ "customer/metrics" ] : [], "metrics" ];
  try {
    let E = new URL(e).origin, p = new URL(s).href;
    for (let c of f) {
      let i = `/v1/code/sessions/${t}/worker/otlp/${c}`, n = new URL(`${E}${i}`).href;
      if (o(i, c) && ky(n) && p === n) return n;
    }
    return null;
  } catch {
    return null;
  }
}

function Q4e() {
  return he() && Zgr("logs") !== null;
}

function yXt(r) {
  return Q4e() ? xwe(r) : r;
}

function ehr() {
  if (!l()) return null;
  let r = a.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!r) return null;
  let e;
  try {
    e = new URL(r);
  } catch {
    return null;
  }
  if (!(e.protocol === "https:" || e.protocol === "http:" && h(e.hostname)) || e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || !ky(e.href) || !o(e.pathname, "traces")) return null;
  return e.href;
}

function Xfs() {
  let r = a.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
  if (!r) return !1;
  try {
    let e = new URL(r);
    return ky(e.href) && o(e.pathname, "traces");
  } catch {
    return !1;
  }
}

class u {
  armed=!1;
  frozen=void 0;
  arm() {
    this.armed = !0;
  }
  freeze() {
    this.frozen = this.armed;
  }
  resolve(r) {
    if (this.frozen !== void 0) return this.frozen;
    return this.armed || r();
  }
  reset() {
    this.armed = !1, this.frozen = void 0;
  }
}

var thr = new u;

function _Xt() {
  return thr.resolve(() => ehr() !== null);
}

export { hXt, Dao, Zgr, Q4e, yXt, ehr, Xfs, thr, _Xt };
