// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { _, Y } from "./chunk-kawq2919.js";

import { o, T, u } from "./chunk-cvcg6n1z.js";

class jL {
  cachedSessionId=null;
  initialized=!1;
  initializeInFlight=null;
  discoverInFlight=null;
  servedCatalogHashes=new Map;
  approvedPlans=new Map;
  verifiedProjectGrants=new Set;
  recardAllProjects=!1;
  recardProjects=new Set;
  grantIneligibleProjects=new Set;
  planStore=new Map;
  consentCache=null;
  consentFetch=null;
  consentCacheGeneration=0;
  grantsFetch=null;
}

import { randomBytes as A } from "crypto";

var j = p(() => u({
  projectId: o(),
  writes: T(o()),
  deletes: T(o()),
  localDir: o().optional()
})), v = /^plan_[a-z0-9]{1,16}_[a-f0-9]{12}$/;

function R(e) {
  let t = e.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16) || "anon", n = A(6).toString("hex");
  return `plan_${t}_${n}`;
}

function IM(e) {
  return e.replace(/\\/g, "/").split("/").filter(t => t !== "" && t !== ".").join("/");
}

function Iwn(e) {
  let t = IM(e).toLowerCase();
  return t === "claude.md" || t.startsWith("claude.md/") || t === ".claude" || t.startsWith(".claude/");
}

function wwt(e) {
  return /[*?]/.test(e);
}

var h = 3, vwt = 256;

function m(e) {
  let t = "", n = 0, s = 0, r = () => {
    if (++s > h) throw Error(`glob "${e}" exceeds ${h} '*'/'**' wildcards`);
  };
  while (n < e.length) {
    let i = e.charAt(n);
    if (i === "*" && e.charAt(n + 1) === "*") if (r(), e.charAt(n + 2) === "/") t += "(?:.*/)?", 
    n += 3; else t += ".*", n += 2; else if (i === "*") r(), t += "[^/]*", n += 1; else if (i === "?") t += "[^/]", 
    n += 1; else if (/[.+^$|()[\]{}\\]/.test(i)) t += "\\" + i, n += 1; else t += i, 
    n += 1;
  }
  return new RegExp(`^${t}$`);
}

function Own(e, t) {
  let n = IM(e);
  if (!n) return !1;
  if (n.length > vwt) return !1;
  if (n.split("/").includes("..") || n.includes("\0")) return !1;
  for (let s of t) {
    let r = IM(s);
    if (wwt(r)) try {
      if (m(r).test(n)) return !0;
    } catch {} else if (r === n) return !0;
  }
  return !1;
}

function r3o(e, t) {
  let n = {
    projectId: t.projectId,
    writes: t.writes.map(IM),
    deletes: t.deletes.map(IM),
    ...t.localDir !== void 0 && {
      localDir: t.localDir
    }
  }, s = j().safeParse(n);
  if (!s.success) throw Error("registerPlan: plan failed shape validation");
  for (let i of [ ...s.data.writes, ...s.data.deletes ]) if (wwt(i)) m(i);
  let r = R(t.projectId);
  return e.planStore.set(r, s.data), r;
}

function Mwn(e, t) {
  if (!v.test(t)) return null;
  return e.planStore.get(t) ?? null;
}

function a(e) {
  return e.toLowerCase().replace(/^urn:uuid:/, "").replace(/[{}-]/g, "");
}

function o3o(e) {
  e.planStore.clear();
}

function Yet(e, t) {
  let n = a(t);
  for (let [s, r] of e.planStore) if (a(r.projectId) === n) e.planStore.delete(s);
}

var y = 9e5, f = 20, S2t = 80, x = 2e3, P = 256, b = /[\x00-\x1f\x7f-\x9f#?,:[\]\u00AD\u061C\u200B-\u200F\u2026\u2028\u2029\u202A-\u202E\u2066-\u2069\uFEFF\uFF0C\uFF1A\uFF3B\uFF3D]/;

function d(e) {
  return b.test(e);
}

function k(e, t) {
  if (e.length > f || t.length > f) return !1;
  for (let r of [ ...e, ...t ]) if (r.length > S2t || d(r)) return !1;
  let n = r => r.length === 0 ? 0 : 32 + r.reduce((i, l) => i + l.length, 0) + 2 * Math.max(0, r.length - 1);
  return 240 + n(e) + n(t) <= x;
}

function cqr(e) {
  if (e === void 0 || e.length === 0 || e.length > f) return !1;
  for (let r of e) if ((_(r)?.length ?? 1 / 0) > S2t || d(r)) return !1;
  let t = Math.max(0, Math.min(200, Math.floor(1800 / e.length) - 95)), n = 44 + (t > 0 ? t + 3 : 0);
  return 272 + e.reduce((r, i) => r + i.length + n, 0) + 2 * Math.max(0, e.length - 1) <= x;
}

function F(e) {
  return e.length > 0 && _(e).length <= S2t && !d(e);
}

var rDe = new Set([ "update_sharing", "add_member", "update_member_role" ]);

function oDe(e, t) {
  let n = a(t);
  for (let [s, r] of e.approvedPlans) if (a(r.projectId) === n) e.approvedPlans.delete(s);
}

function s3o(e) {
  e.approvedPlans.clear();
}

function sDe(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.verifiedProjectGrants.add(t);
}

function Hwn(e, t) {
  return e.verifiedProjectGrants.has(t);
}

function f2e(e, t) {
  let n = a(t);
  for (let s of e.verifiedProjectGrants) if (a(s) === n) e.verifiedProjectGrants.delete(s);
}

function _he(e, t) {
  return e.recardAllProjects || e.recardProjects.has(a(t));
}

function Xet(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.recardProjects.add(a(t));
}

function i3o(e) {
  e.verifiedProjectGrants.clear(), e.recardAllProjects = !0;
}

function a3o(e, t) {
  if (typeof t !== "string" || t.length === 0) return;
  e.grantIneligibleProjects.add(a(t));
}

function l3o(e, t) {
  return e.grantIneligibleProjects.has(a(t));
}

function d3o(e, t, n, s = Date.now()) {
  if (typeof t !== "string" || t.length === 0) return !1;
  if (oDe(e, n.projectId), !F(n.projectId) || !k(n.writes, n.deletes)) return !1;
  let r = n.serverExpiresAtMs;
  if (typeof r === "number" && !Number.isFinite(r)) return !1;
  if (typeof r === "number" && Number.isFinite(r) && r <= s) return !1;
  return e.approvedPlans.set(t, {
    projectId: n.projectId,
    writes: new Set(n.writes.map(IM)),
    deletes: new Set(n.deletes.map(IM)),
    expiresAt: typeof r === "number" && Number.isFinite(r) ? Math.min(r, s + y) : s + y
  }), !0;
}

var S = {
  write_files: e => {
    let t = e.files;
    if (!Array.isArray(t)) return null;
    let n = [];
    for (let s of t) {
      let r = s?.path;
      if (typeof r !== "string") return null;
      n.push(r);
    }
    return {
      targets: n,
      set: "writes"
    };
  },
  delete_files: e => {
    if (e.paths !== void 0 && e.files !== void 0) return null;
    let t = [];
    if (Array.isArray(e.paths)) {
      for (let n of e.paths) {
        if (typeof n !== "string") return null;
        t.push(n);
      }
      return {
        targets: t,
        set: "deletes"
      };
    }
    if (Array.isArray(e.files)) {
      for (let n of e.files) {
        let s = n?.path;
        if (typeof s !== "string") return null;
        t.push(s);
      }
      return {
        targets: t,
        set: "deletes"
      };
    }
    return null;
  },
  create_support_js: e => {
    let t = e.path;
    if (t === void 0 || t === "") return {
      targets: [ "support.js" ],
      set: "writes"
    };
    if (typeof t !== "string") return null;
    return {
      targets: [ t ],
      set: "writes"
    };
  }
};

function D(e) {
  return Object.hasOwn(S, e);
}

function C(e) {
  if (d(e)) return `rejected character in path: ${e}`;
  if (Iwn(e)) return `reserved path: ${e}`;
  if (IM(e).toLowerCase().split("/").some(n => {
    let s = n.replace(/[\s.]+$/, "").replace(/^\s+/, "");
    return s === "claude.md" || s === ".claude" || /~\d/.test(s);
  })) return `reserved segment: ${e}`;
  let t = IM(e);
  if (!t || t.split("/").some(n => /^\s*\.\.[\s.]*$/.test(n)) || t.includes("\0")) return `path does not normalize: ${e}`;
  return null;
}

function w2t(e, t) {
  let n = D(e) ? S[e] : void 0;
  if (!n || !t) return {
    outcome: "ask",
    reason: "not a plan-gated operation"
  };
  let s = n(t);
  if (!s) return {
    outcome: "ask",
    reason: "target paths unenumerable"
  };
  let {targets: r, set: i} = s;
  if (r.length === 0) return {
    outcome: "ask",
    reason: "no target paths",
    targets: r
  };
  if (r.length > P) return {
    outcome: "ask",
    reason: `more than ${P} target paths`,
    targets: r
  };
  for (let l of r) {
    let c = C(l);
    if (c !== null) return {
      outcome: "ask",
      reason: c,
      targets: r
    };
  }
  return {
    outcome: "pass",
    targets: r,
    set: i
  };
}

function c3o(e, t, n, s = Date.now()) {
  if (!D(t) || !n) return {
    outcome: "ask",
    reason: "not a plan-gated operation"
  };
  let {plan_token: r, project_id: i} = n;
  if (typeof r !== "string" || typeof i !== "string") return {
    outcome: "ask",
    reason: "missing plan_token or project_id"
  };
  let l = e.approvedPlans.get(r);
  if (!l) return {
    outcome: "ask",
    reason: "plan_token not approved in this process"
  };
  if (s >= l.expiresAt) return e.approvedPlans.delete(r), {
    outcome: "ask",
    reason: "approved plan expired"
  };
  if (l.projectId !== i) return {
    outcome: "ask",
    reason: "plan_token is for a different project"
  };
  let c = w2t(t, n);
  if (c.outcome !== "pass") return {
    outcome: "ask",
    reason: c.reason
  };
  let w = c.set === "writes" ? l.writes : l.deletes;
  for (let g of c.targets) if (!w.has(IM(g))) return {
    outcome: "ask",
    reason: `path not in approved plan: ${g}`
  };
  return {
    outcome: "allow"
  };
}

function u3o(e) {
  for (let t of e) if (t?.type === "text" && typeof t.text === "string") try {
    let n = Y(t.text), s = n.plan_token;
    if (typeof s !== "string" || s.length === 0) return null;
    let r = n.expires_at, i = typeof r === "number" && Number.isFinite(r * 1e3) ? r * 1e3 : null;
    return {
      token: s,
      expiresAtMs: i
    };
  } catch {
    return null;
  }
  return null;
}

export { jL, IM, Iwn, wwt, vwt, Own, r3o, Mwn, o3o, Yet, S2t, cqr, rDe, oDe, s3o, sDe, Hwn, f2e, _he, Xet, i3o, a3o, l3o, d3o, w2t, c3o, u3o };
