// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { l } from "./chunk-b0z4bv3v.js";

import { le } from "./chunk-cqgvwwgb.js";

import { _, t } from "./chunk-kawq2919.js";

import { kt } from "./chunk-r2h53bm2.js";

import { OR, zN } from "./chunk-3zb1ef23.js";

import { Sh, Aln, mu, sd } from "./chunk-w0q7jqcp.js";

import { nHt } from "./chunk-wzvs3p45.js";

import { mpe } from "./chunk-7s2yvvfn.js";

import { Qo, Yg } from "./chunk-eha3vdmz.js";

var D = "2023-06-01";

function eHt(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": D,
    "anthropic-client-platform": Yg(),
    "User-Agent": Qo()
  };
}

function Qct(e) {
  return e !== null && typeof e === "object" && "terminal" in e && e.terminal === !0;
}

function A(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || e.error === null || typeof e.error !== "object") return !1;
  let n = e.error, r = "type" in n ? n.type : void 0, f = "resource_type" in n ? n.resource_type : void 0, o = "reason" in n ? n.reason : void 0;
  return r === "not_found_error" && f === "session_grouping" || o === "public_grouping_hosted_only" || o === "feature_disabled";
}

function U(e) {
  if (e === 401) return "oauth_rejected";
  if (e === 408 || e === 429 || e >= 500) return "transient";
  return "rejected";
}

async function tHt(e, n, r, f, o, p, m, b, g, s, u) {
  let a = `${e}/v1/code/sessions`, i = {
    cwd: m ?? le(),
    ...b && {
      model: b
    }
  };
  if (p && "gitRepoUrl" in p) {
    let {buildGitSessionContext: h} = await import("./chunk-qc75vav9.js"), {sources: y, outcomes: v, report: C} = await h(p.gitRepoUrl, p.branch, p.defaultBranch);
    if (C.branchDropped && C.warnMessage) {
      let j = `${C.branchDropped}:${p.gitRepoUrl}:${p.branch}`;
      if (!s || s.lastKey !== j) {
        if (s) s.lastKey = j;
        t(`[code-session] ${C.warnMessage}`);
      }
    } else if (s) s.lastKey = null;
    if (y.length > 0 || v.length > 0) i.sources = y, i.outcomes = v, i.reuse_outcome_branches = !0;
  }
  let d;
  try {
    d = await At.post(a, {
      title: r,
      bridge: {},
      ...o?.length && {
        tags: o
      },
      ...g && {
        session_grouping_id: g
      },
      config: i
    }, {
      headers: eHt(n),
      timeout: f,
      validateStatus: h => h < 500
    });
  } catch (h) {
    return t(`[code-session] Session create request failed: ${l(h)}`), null;
  }
  if (d.status !== 200 && d.status !== 201) {
    let h = OR(d.data);
    t(`[code-session] Session create failed ${d.status}${h ? `: ${h}` : ""}`);
    let y = zN(d.data);
    if (d.status === 401) u?.();
    if (d.status >= 400 && d.status < 500 && A(d.data)) return {
      terminal: !0,
      reason: "grouping_rejected",
      status: d.status,
      detail: y
    };
    switch (U(d.status)) {
     case "oauth_rejected":
      return {
        terminal: !1,
        reason: "oauth_rejected"
      };

     case "transient":
      return null;

     case "rejected":
      return {
        terminal: !0,
        reason: "request_rejected",
        status: d.status,
        detail: y
      };
    }
  }
  let c = d.data;
  if (!c || typeof c !== "object" || !("session" in c) || !c.session || typeof c.session !== "object" || !("id" in c.session) || typeof c.session.id !== "string" || !c.session.id.startsWith("cse_") || !Aln(c.session.id)) return t(`[code-session] No usable session.id (cse_*) in response: ${_(c).slice(0, 200)}`), 
  {
    terminal: !0,
    reason: "malformed_response",
    status: d.status,
    detail: void 0
  };
  return c.session.id;
}

function Tse(e) {
  return e !== null && "terminal" in e && e.terminal === !0;
}

function WN(e) {
  return typeof e === "object" && e !== null && "terminal" in e && e.terminal === !1;
}

function Ase(e) {
  let n = R(e);
  if (n !== void 0 && "resource" in n) {
    let r = n.resource;
    if (r === "untrusted_device" || r === "session_stale_relogin") return r;
  }
  return;
}

function T6s(e) {
  let n = R(e);
  return n !== void 0 && "resource" in n && n.resource === "untrusted_device" && "sub_reason" in n && n.sub_reason === "bound_unattested" ? "bound_unattested" : void 0;
}

function ppe(e) {
  if (Ase(e) === "untrusted_device") {
    let n = R(e), r = n !== void 0 && "sub_reason" in n ? n.sub_reason : void 0;
    if (r === void 0 || r === null || r === "") return {
      kind: "token_refused"
    };
    if (typeof r !== "string") return {
      kind: "unrecognized",
      subReason: `(${typeof r}, not a string)`
    };
    switch (r) {
     case "bound_unattested":
      return {
        kind: "token_refused"
      };

     case "served_call_unsigned":
      return {
        kind: "signature_wanted",
        subReason: r
      };

     default:
      if (mpe(r)) return {
        kind: "unrecognized",
        subReason: r
      };
      return t(`[code-session] a 403's sub_reason is too long or not snake_case, so a placeholder is passed on. As sent (${r.length} characters; cleaned, first 64): ${kt(r, 64)}`), 
      {
        kind: "unrecognized",
        subReason: "(string, too long or not snake_case)"
      };
    }
  }
  return;
}

function gtn(e) {
  return e.kind === "token_refused";
}

function Zct(e) {
  return e.kind !== "signature_wanted";
}

var rjn = {
  kind: "signature_wanted",
  subReason: "served_call_unsigned"
};

function tSo(e) {
  let n = R(e);
  if (n === void 0) return;
  let r = {
    ...n
  };
  return {
    reason: w(r.reason),
    resource: w(r.resource),
    subReason: w(r.sub_reason)
  };
}

function w(e) {
  if (e === void 0 || e === null || e === "") return "";
  return typeof e === "string" && mpe(e) ? e : void 0;
}

function R(e) {
  return e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object" ? e.error : void 0;
}

async function kkr(e, n, r, f, o, p, m) {
  if (!S(e, "/bridge")) return {
    terminal: !0,
    reason: "invalid_session_id"
  };
  let b = `${n}/v1/code/sessions/${e}/bridge`, g = eHt(r);
  if (o) g["X-Trusted-Device-Token"] = o;
  let s;
  try {
    s = await At.post(b, m === void 0 ? {} : {
      expected_epoch: m.expectedEpoch
    }, {
      headers: g,
      timeout: f,
      validateStatus: i => i < 500
    });
  } catch (i) {
    return t(`[code-session] /bridge request failed: ${l(i)}`), null;
  }
  if (s.status !== 200) {
    let i = OR(s.data);
    if (t(`[code-session] /bridge failed ${s.status}${i ? `: ${i}` : ""}`), s.status === 401) p?.();
    if (m !== void 0 && s.status === 409) {
      let c = R(s.data), h = m.expectedEpoch, y = [ x(c !== void 0 && "expected_epoch" in c ? c.expected_epoch : void 0), x(c !== void 0 && "actual_epoch" in c ? c.actual_epoch : void 0) ];
      m.onRefused(y.includes(h) ? y.find(v => v !== void 0 && v > h) : void 0);
    }
    let d;
    if (s.status === 403) {
      let c = Ase(s.data);
      if (c === "untrusted_device") {
        let h = ppe(s.data);
        return {
          terminal: !0,
          reason: c,
          ...h && {
            refusal: h
          }
        };
      }
      if (c) return {
        terminal: !0,
        reason: c
      };
      d = nHt(h => s.headers?.[h]), t(`[code-session] /bridge 403 source=${d}`);
    }
    switch (U(s.status)) {
     case "oauth_rejected":
      return {
        terminal: !1,
        reason: "oauth_rejected"
      };

     case "transient":
      return null;

     case "rejected":
      return {
        terminal: !0,
        reason: "request_rejected",
        status: s.status,
        ...d && {
          source: d
        }
      };
    }
  }
  let u = s.data;
  if (u === null || typeof u !== "object" || !("worker_jwt" in u) || typeof u.worker_jwt !== "string" || !("expires_in" in u) || typeof u.expires_in !== "number" || !("api_base_url" in u) || typeof u.api_base_url !== "string" || !("worker_epoch" in u)) return t(`[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${_(u).slice(0, 200)}`), 
  {
    terminal: !0,
    reason: "malformed_response",
    status: 200
  };
  let a = x(u.worker_epoch);
  if (a === void 0) return t(`[code-session] /bridge worker_epoch invalid: ${_(u.worker_epoch)}`), 
  {
    terminal: !0,
    reason: "malformed_response",
    status: 200
  };
  return {
    worker_jwt: u.worker_jwt,
    api_base_url: u.api_base_url,
    expires_in: u.expires_in,
    worker_epoch: a,
    mcp_config: B(u),
    ...{}
  };
}

function S(e, n) {
  try {
    return Sh(e, "sessionId"), !0;
  } catch (r) {
    return t(`[code-session] ${n}: ${l(r)}`), !1;
  }
}

function k(e, n, r, f, o, p = "") {
  let m = o.trustedDeviceToken ? {
    "X-Trusted-Device-Token": o.trustedDeviceToken
  } : void 0;
  if (o.useV2) {
    let g = sd(f);
    return {
      url: `${n}/v1/code/sessions/${g}${p}`,
      headers: {
        ...eHt(r),
        ...m
      },
      id: g
    };
  }
  if (!o.orgUUID) return t(`[code-session] ${e} ${f}: v1 compat path needs an org UUID`), 
  null;
  let b = mu(f);
  return {
    url: `${n}/v1/sessions/${b}${p}`,
    headers: {
      ...eHt(r),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": o.orgUUID,
      ...m
    },
    id: b
  };
}

async function A6s(e, n, r, f, o) {
  if (!S(r, "Get")) return "invalid";
  let p = k("Get", e, n, r, o);
  if (!p) return "invalid";
  let {url: m, headers: b, id: g} = p;
  try {
    let s = await At.get(m, {
      headers: b,
      timeout: f,
      validateStatus: i => i < 500
    });
    if (s.status !== 200) {
      let i = OR(s.data);
      return t(`[code-session] Get ${g} failed ${s.status}${i ? `: ${i}` : ""}`), s.status;
    }
    if (!o.useV2) {
      let i = s.data;
      return {
        ...i,
        status: i?.status ?? i?.session_status,
        id: typeof i?.id === "string" ? i.id : g
      };
    }
    let u = s.data, a = u?.response_shape ?? u?.session;
    if (a && typeof a.id === "string") return {
      ...a,
      updated_at: "last_event_at" in a && typeof a.last_event_at === "string" ? a.last_event_at : void 0
    };
    return t(`[code-session] Get ${g}: no session.id in 200 response`), s.status;
  } catch (s) {
    return t(`[code-session] Get ${g} failed: ${l(s)}`), At.isAxiosError(s) && s.code === "ECONNABORTED" ? "timeout" : "error";
  }
}

async function C6s(e, n, r, f, o, p) {
  if (!S(r, "Update")) return "invalid";
  let m = k("Update", e, n, r, p);
  if (!m) return "invalid";
  let {url: b, headers: g, id: s} = m, u = {
    headers: g,
    timeout: o,
    validateStatus: () => !0
  };
  try {
    let a = p.useV2 ? await At.put(b, f, u) : await At.patch(b, f, u);
    if (a.status !== 200) {
      let i = OR(a.data);
      t(`[code-session] Update ${s} failed ${a.status}${i ? `: ${i}` : ""}`);
    }
    return a.status;
  } catch (a) {
    return t(`[code-session] Update ${s} failed: ${l(a)}`), At.isAxiosError(a) && a.code === "ECONNABORTED" ? "timeout" : "error";
  }
}

async function htn(e, n, r, f, o) {
  return E("Archive", "/archive", e, n, r, f, o, "untrusted_device");
}

async function Tkr(e, n, r, f, o) {
  return E("Unarchive", "/unarchive", e, n, r, f, o, "elevated_auth");
}

async function E(e, n, r, f, o, p, m, b) {
  if (!S(o, e)) return "invalid";
  let g = k(e, r, f, o, m, n);
  if (!g) return "invalid";
  let {url: s, headers: u, id: a} = g;
  try {
    let i = await At.post(s, {}, {
      headers: u,
      timeout: p,
      validateStatus: () => !0
    });
    if (t(`[code-session] ${e} ${a} status=${i.status}`), i.status === 403) {
      let d = ppe(i.data);
      if (d !== void 0) return b === "elevated_auth" && !Zct(d) ? "untrusted_device_no_enroll" : "untrusted_device";
      if (b === "elevated_auth" && Ase(i.data) === "session_stale_relogin") return "session_stale_relogin";
    }
    return i.status;
  } catch (i) {
    return t(`[code-session] ${e} ${a} failed: ${l(i)}`), At.isAxiosError(i) && i.code === "ECONNABORTED" ? "timeout" : "error";
  }
}

function B(e) {
  if (!("mcp_config" in e)) return;
  let n = e.mcp_config;
  if (n !== null && typeof n === "object" && "content" in n && typeof n.content === "string" && n.content.length > 0) return {
    content: n.content
  };
  return;
}

function x(e) {
  let n = typeof e === "string" ? Number(e) : e;
  return typeof n === "number" && Number.isSafeInteger(n) ? n : void 0;
}

export { eHt, Qct, tHt, Tse, WN, Ase, T6s, ppe, gtn, Zct, rjn, tSo, kkr, A6s, C6s, htn, Tkr };
