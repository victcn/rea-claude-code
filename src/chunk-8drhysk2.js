// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { ze } from "./chunk-r2h53bm2.js";

import { rr } from "./chunk-wptm3jf5.js";

import { Rsn, ll } from "./chunk-hmce8a0s.js";

import { Hin, A1e, yh, Q0, jve, Wfe, eM } from "./chunk-q6wab2jw.js";

import { Cnn } from "./chunk-0f42zdcd.js";

import { ie } from "./chunk-yxennhe9.js";

import { D } from "./chunk-hmqkrrtz.js";

var S = new Map, w = () => {
  let e = S.get("external") ?? new Map([ [ "responsive-mode", "cc-plugin-responsive-mode" ], [ "tips", "cc-plugin-tips" ], [ "mermaid", "cc-plugin-mermaid" ], [ "claude-test", "cc-plugin-claude-test" ], [ "agents-md", "cc-plugin-agents-md" ], [ "diff", "cc-plugin-diff" ], [ "telemetry", "cc-plugin-telemetry" ], [ "plugin-authoring", "cc-plugin-plugin-authoring" ], [ "sec-default", "cc-plugin-sec-default" ], ...[] ]);
  return S.set("external", e), e;
};

var m = () => w();

var OWn = e => m().get(e) ?? e;

var g = e => [ ...m() ].flatMap(([n, t]) => t === e ? [ n ] : []);

var P = e => g(e)[0] ?? e;

var Jxs = e => g(e).at(-1);

function N(e) {
  return v(e) || e === "synced";
}

function v(e) {
  return e === "inline";
}

function M(e) {
  let n = Math.floor(e ?? Number.NaN);
  return n >= 1 && n <= 8192 ? n : void 0;
}

function Vxs(e) {
  return `agent-${e}`;
}

var U = [ /^agent-a[0-9a-f]{16}$/, /^agent-a[0-9a-f]{7}$/, /^wf_[0-9a-f]{8}-[0-9a-f]{3}-\d+$/ ];

var W = [ ...U, /^wf-\d+$/, /^bridge-[A-Za-z0-9_]+(-[A-Za-z0-9_]+)*$/, /^job-[a-zA-Z0-9._-]{1,55}-[0-9a-f]{8}$/, /^bg-[a-zA-Z0-9._-]{1,55}-[0-9a-f]{8}$/ ];

function Ovo(e) {
  return W.some(n => n.test(e));
}

var j = /^[a-zA-Z0-9._-]+$/, A = 64;

function IAr(e) {
  if (e.length > A) return `Invalid worktree name: must be ${A} characters or fewer (got ${e.length})`;
  for (let n of e.split("/")) {
    if (n === "." || n === "..") return `Invalid worktree name "${e}": must not contain "." or ".." path segments`;
    if (n.toLowerCase().replace(/\.+$/, "") === ".git") return `Invalid worktree name "${e}": "${n}" is a reserved git directory name`;
    if (!j.test(n)) return `Invalid worktree name "${e}": each "/"-separated segment must be non-empty and contain only letters, digits, dots, underscores, and dashes`;
  }
  return;
}

function U1(e) {
  return /^\w[\w.@-]*$/.test(e);
}

function qa(e, n, t) {
  if (!U1(n)) return null;
  return `claude ${e} ${n}${t ? ` ${t}` : ""}`;
}

function Gg(e, n, {extra: t, tail: r = "", fallback: i}) {
  let o = qa(e, n, t);
  return o === null ? i : `run \`${o}\`${r ? ` ${r}` : ""}`;
}

var K = [ "This session ran in a worktree", "In its folder, run the command below to resume in it", "To find that folder, try git worktree list" ];

function Kxs({sessionId: e, worktree: n, columns: t}) {
  let r = Vt(e), i = r === null ? "none" : "id", o = r === null ? "" : ` ${r}`;
  if (n === void 0) return {
    advice: [],
    command: `claude --resume${o}`,
    arg: i,
    worktree: "absent"
  };
  let {name: s, recordCleared: a} = n, l = M(t), c = typeof s === "string" && !s.startsWith("-") && IAr(s) === void 0 ? [ {
    command: `claude --worktree "${s}" --resume${o}`,
    worktree: "printed"
  }, {
    command: `claude -w "${s}" -r${o}`,
    worktree: "printed_short_flags"
  } ] : [], d = c.find(({command: k}) => l !== void 0 && ie(k) <= l);
  if (d !== void 0) return {
    advice: [],
    arg: i,
    ...d
  };
  return {
    advice: a ? K : [],
    command: `claude --resume${o}`,
    arg: i,
    worktree: c.length === 0 ? "refused" : l !== void 0 ? "too_wide" : "width_unknown"
  };
}

var mn = "anthropic-plugin-directory", RWn = 3e4;

function xH(e) {
  return e.toLowerCase() === mn;
}

function gk(e) {
  return OAr(e, mn);
}

function OAr(e, n) {
  let t = e.normalize("NFKC");
  return b(e) === n || b(t) === n || b(t.replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "").toUpperCase().toLowerCase().replace(/[. ]+$/, "")) === n;
}

function b(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-").toLowerCase();
}

function xWn(e) {
  if (e.startsWith("@")) {
    let t = e.endsWith("@npm") ? e.slice(0, -4) : e;
    if (!t.includes("..") && !t.includes("//") && /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/.test(t)) return !1;
  }
  let n = e.split("@");
  return n.length > 1 && (gk(n[1] ?? "") || gk(n.at(-1) ?? ""));
}

var br = "Anthropic Directory";

function qxs(e, n) {
  let t = T(e);
  return t !== "" && t === T(n);
}

function T(e) {
  return e.normalize("NFKC").toUpperCase().toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}

function Ppe(e) {
  return `"${e}" is a reserved marketplace name.`;
}

function Yxs(e, n) {
  return U1(e) ? `"${e}" is another spelling of "${n}", a reserved marketplace name.` : `This marketplace's name is another spelling of "${n}", a reserved marketplace name. It is not exactly the reserved name it appears to be.`;
}

function Mvo(e) {
  return e.endsWith(".") ? null : qa("plugin marketplace remove", e);
}

function MAr(e, n, t = mn, r = !1) {
  let i = Mvo(e);
  if (r) return i === null ? `known_marketplaces.json has an entry under another spelling of "${t}", a reserved marketplace name, so it is ignored. Remove that entry from known_marketplaces.json; its name is not exactly the reserved name it appears to be.` : `known_marketplaces.json has an entry named "${e}", another spelling of the reserved marketplace name "${t}", so it is ignored. Remove it with: ${i}`;
  if (!n || t !== mn) return i === null ? `known_marketplaces.json has an entry under another spelling of "${t}", a reserved marketplace name, so it is ignored. Remove that entry from known_marketplaces.json.` : `known_marketplaces.json has an entry named "${e}", a reserved marketplace name, so it is ignored. Remove it with: ${i}`;
  if (e === mn) return `known_marketplaces.json has an entry named "${mn}" that is not the built-in ${br}, so it is ignored. Remove it with: claude plugin marketplace remove ${mn}`;
  return i === null ? `known_marketplaces.json has an entry under another spelling of "${mn}", the name reserved for the built-in ${br}, so it is ignored. Remove that entry from known_marketplaces.json.` : `known_marketplaces.json has an entry named "${e}", a spelling of the name reserved for the built-in ${br}, so it is ignored. Remove it with: ${i}`;
}

function PWn(e) {
  return `The known_marketplaces.json entry named "${ze(e)}" is already gone.`;
}

function Fut(e, n) {
  return n ? `Removed the known_marketplaces.json entry named "${ze(e)}". It was not the built-in ${br}, which is unchanged.` : `Removed the known_marketplaces.json entry named "${ze(e)}". That name is reserved.`;
}

function HAr(e, {disabledNote: n = !0} = {}) {
  let t = e.slice(0, 5).map(i => ze(i)).join(", "), r = e.length - 5;
  return r > 0 ? `${t} and ${r} more${n ? " (claude plugin list shows them as disabled)" : ""}` : t;
}

function Zse(e, n, {insideFailure: t = !1} = {}) {
  {
    if (e.length === 0) return null;
    let r = HAr(e), i = t ? "" : " Other projects' settings are not checked: a plugin that another project's own settings turn on stays on there.";
    return n === "catalog_unreadable" ? `Turned off ${r}: they could not be checked against the commit the ${br} lists. To use one again once the ${br} is available: claude plugin update <id>, then claude plugin enable <id>.${i}` : `Turned off ${r}: not at the commit the ${br} lists. To use one again: claude plugin update <id>, then claude plugin enable <id>.${i}`;
  }
  return null;
}

function Enn(e) {
  return `${br} is blocked by your organization. ${e} There is nothing to remove or turn off.`;
}

function Xxs(e) {
  return `${br} is blocked by your organization. ${e} It was not updated.`;
}

function l9(e) {
  return e === mn ? br : e;
}

function wf(e) {
  return e?.source === "pluginDirectory";
}

function IWn(e) {
  let n = e;
  for (let [t, r] of Object.entries(e)) if (r?.source?.source === "pluginDirectory") {
    if (n === e) n = {
      ...e
    };
    delete n[t];
  }
  return n;
}

var L = String.raw`[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.?`, E = "[A-Za-z0-9._-]+", x = "[A-Za-z0-9._~-]", z = `${x}+(?::${x}*)?@`, H = ":[1-9][0-9]{0,4}", F = `(?:/(?:${x}|%[0-9A-Fa-f]{2})*)*`, G = new RegExp(`^${E}/${E}$`), Y = new RegExp(`^git@(${L}):(${E}(?:/${E})*)/?$`), C = `(?:${z})?(${L})(?:${H})?(${F})$`, B = new RegExp(`^https://${C}`), Z = new RegExp(`^https?://${C}`), I = `ssh.${rr}`, X = "wide:";

function q(e, n) {
  let t = G.test(e), r = Y.exec(e), i = (n ? Z : B).exec(e), o = t ? rr : r?.[1] ?? i?.[1];
  if (o === void 0) return;
  let s = o.toLowerCase().replace(/\.$/, "");
  if (o.endsWith(".") && s !== rr && s !== `www.${rr}`) return;
  let a = t ? `/${e}` : r ? `/${r[2]}` : i?.[2] || "/";
  if (a.split("/").some(c => /^(?:\.|%2e){1,2}$/i.test(c) || t && /^\.git$/i.test(c))) return;
  return {
    url: i ? e : `https://${o}${a}`,
    host: o,
    path: a,
    scp: r !== null
  };
}

function x3e(e, n, t) {
  let r = t?.blocklistDirection === !0, i, o, s, a = q(e, r);
  if (a === void 0) return;
  try {
    let u = new URL(a.url);
    if (u.hostname !== a.host.toLowerCase() || u.pathname !== a.path) return;
    let f = u.hostname.replace(/\.$/, "");
    if (f === I && !a.scp && !r) return;
    let h = f === `www.${rr}` || f === I ? rr : f;
    s = r || h === rr && u.port === "";
    let R = r && (u.port === "80" || u.port === "443") ? "" : u.port;
    i = `${h}${R === "" ? "" : `:${R}`}`, o = u.pathname;
  } catch {
    return;
  }
  let l = o.replace(/%([0-9a-f]{2})/gi, (u, f) => {
    let h = String.fromCharCode(parseInt(f, 16));
    return /^[A-Za-z0-9._~-]$/.test(h) ? h : u;
  });
  if (l.includes("%")) return;
  let c = (s ? l.toLowerCase() : l).replace(/\/{2,}/g, "/").replace(/\/+$/, "").replace(/\/?\.git$/, "");
  if (r) {
    let u = c.length;
    while (c.endsWith(".git", u)) u -= c[u - 5] === "/" ? 5 : 4;
    c = c.slice(0, u);
  }
  if (n?.includes("\\")) return;
  let d = [];
  for (let u of (n ?? "").split("/")) {
    if (u === "" || u === ".") continue;
    if (u !== "..") {
      d.push(u);
      continue;
    }
    if (d.length === 0) return;
    d.pop();
  }
  if (!r) return `${i}${c}#${d.join("/")}`;
  let k = [];
  for (let u of d) {
    let f = V(u);
    if (f === void 0) return;
    k.push(f);
  }
  return `${X}${i}${c}#${k.join("/")}`;
}

function V(e) {
  let n = e.length;
  while (n > 0 && (e[n - 1] === "." || e[n - 1] === " ")) n--;
  let t = e.slice(0, n);
  if (t === "" || t.length > 255) return;
  let r = ll(t.normalize("NFC"));
  if (/~\d/.test(r) || r.includes(":") || Rsn.test(r)) return;
  return r.toUpperCase().toLowerCase().normalize("NFC");
}

function Ipe(e) {
  let n = e.indexOf("#");
  if (n === -1) return e;
  return x3e(`https://${e.slice(0, n)}`, e.slice(n + 1)) ?? e;
}

function Aw(e, n, t) {
  let r = t?.blocklistDirection !== !0;
  if (typeof e === "string") {
    let a = typeof n === "string" ? {
      url: n,
      ref: void 0
    } : n;
    if (!a?.url || r && a.ref !== void 0) return;
    return x3e(a.url, e, t);
  }
  if (typeof e !== "object" || e === null) return;
  let i = e, o = typeof i.sha === "string" && /^[a-f0-9]{40}$/.test(i.sha);
  if (r && i.ref !== void 0 && !o) return;
  let s = typeof i.path === "string" ? i.path : void 0;
  switch (i.source) {
   case "github":
    return typeof i.repo === "string" ? x3e(i.repo, s, t) : void 0;

   case "url":
   case "git-subdir":
    return typeof i.url === "string" ? x3e(i.url, s, t) : void 0;

   default:
    return;
  }
}

function d9(e) {
  switch (e?.source) {
   case "github":
    return {
      url: e.repo,
      ref: e.ref
    };

   case "git":
    return {
      url: e.url,
      ref: e.ref
    };

   default:
    return;
  }
}

function c9(e, n) {
  {
    if (!e.endsWith(`@${mn}`)) return;
    if (typeof n !== "object" || n === null) return;
    let t = n.sha;
    return typeof t === "string" && t !== "" ? t : void 0;
  }
  return;
}

function nDt(e, n) {
  let t = `-${n.substring(0, 12)}`;
  return e.endsWith(t) ? e : `${e}${t}`;
}

class Ope extends Error {
  constructor(e) {
    super(e);
    this.name = "PluginDirectoryUnavailableError";
  }
}

var Ac = "inline", knn = `${Cnn}@${Ac}`, Cu = "skills-dir", Mi = "synced", Fi = "builtin";

function rf(e) {
  return e === Ac || e === Cu || e === Mi;
}

function PH(e) {
  let n = e.lastIndexOf("@");
  if (n <= 0) return e;
  return Cw(`${e.slice(0, n)}@${DWn(e.slice(n + 1))}`);
}

function Cw(e) {
  let n = _(e);
  if (n === void 0) return e;
  let t = m(), r = y(n)[0], i = t.get(n) ?? t.get(fr(n)) ?? (r === void 0 ? void 0 : t.get(r));
  return i === void 0 ? e : `${i}@${Fi}`;
}

function MWn(e) {
  let n = _(e);
  return n === void 0 ? void 0 : Cw(`${fr(n)}@${Fi}`);
}

function _(e) {
  let n = e.lastIndexOf("@");
  return n > 0 && DWn(e.slice(n + 1)) === Fi ? e.slice(0, n) : void 0;
}

function IH(e, n) {
  return n.endsWith(`@${Fi}`) ? y(e)[0] ?? P(e) : e;
}

function Mpe({name: e, source: n}) {
  return n.endsWith(`@${Fi}`) ? [ e, ...y(e) ] : [ e ];
}

function HWn({name: e, marketplace: n}) {
  if (DWn(n) !== Fi) return [ e ];
  let t = Cw(`${e}@${Fi}`).slice(0, -`@${Fi}`.length);
  return D([ e, t, ...y(t) ]);
}

function MR(e) {
  let n = _(e);
  return n === void 0 ? [] : y(n).map(t => `${t}@${Fi}`).toReversed();
}

function y(e) {
  let n = g(e);
  return n.length > 0 ? n : g(fr(e));
}

function DWn(e) {
  let n = e.toLowerCase();
  return Q0(n) ? n : e;
}

function p5(e) {
  return vb(e) !== void 0;
}

function vb(e) {
  let n = Hi(e);
  if (rf(n)) return n;
  if (e.includes("@")) return;
  if (e.startsWith(`${Ac}[`)) return Ac;
  if (e.startsWith(`${Mi}[`)) return Mi;
  return;
}

function Hvo(e, n) {
  return Uut(e, J(n));
}

function J(e) {
  return e.map(n => n === void 0 ? void 0 : Tnn(n));
}

function Tnn(e, {managed: n = !1} = {}) {
  let t = new Map;
  for (let [r, i] of Object.entries(e)) {
    if (i === void 0) continue;
    let o = fr(r), s = O(r, i), a = t.get(o);
    if (a === void 0 || a.enabled) t.set(o, {
      key: r,
      enabled: s && (a?.enabled ?? !0)
    });
  }
  return {
    record: e,
    byFold: t,
    managed: n
  };
}

function O(e, n) {
  if (n === void 0) return !1;
  let t = Hi(PH(e));
  return t === Ac || t === Cu ? n !== !1 : n === !0;
}

function rDt(e) {
  let n = Hi(PH(e));
  return n === Ac || n === Mi;
}

function Uut(e, n) {
  if (!rDt(e)) {
    let o = Cw(e), s = D([ o, ...MR(o), e ]);
    for (let [a, l] of n.entries()) {
      let c = s.find(d => l?.record[d] !== void 0);
      if (c !== void 0) return {
        index: a,
        enabled: O(c, l?.record[c]),
        key: c
      };
    }
    return;
  }
  let t = fr(e), r = PH(e), i = Hi(r) === Mi ? fr(`${r.slice(0, r.lastIndexOf("@"))}@${Ac}`) : void 0;
  for (let [o, s] of n.entries()) {
    if (s === void 0) continue;
    let a = s.byFold.get(t);
    if (a !== void 0) return {
      index: o,
      enabled: a.enabled,
      key: a.key
    };
    if (i !== void 0) {
      let l = s.byFold.get(i);
      if (l !== void 0 && !l.enabled) return {
        index: o,
        enabled: !1,
        key: l.key
      };
    }
  }
  return;
}

function Qxs(e, n) {
  return Hvo(e, n)?.enabled;
}

function Lz(e, n) {
  return n === "required" && Hi(PH(e)) === Mi;
}

function oDt(e, n, t, r) {
  let i = Uut(e, n);
  if (i !== void 0 && !i.enabled && n[i.index]?.managed) return !1;
  return Lz(e, r) || (i?.enabled ?? t !== !1);
}

function LWn(e) {
  return rf(e) || e === Fi;
}

function Nz(e) {
  return e.scope === "project" && e.source.endsWith(`@${Cu}`);
}

var sDt = {
  policySettings: "managed",
  userSettings: "user",
  projectSettings: "project",
  localSettings: "local",
  flagSettings: "flag"
};

function kn(e) {
  if (Wfe(e)) return {
    name: e.slice(0, e.lastIndexOf("@")),
    marketplace: yh
  };
  if (e.startsWith("@") && jve(e)) return {
    name: e
  };
  if (e.includes("@")) {
    let n = e.split("@");
    return {
      name: n[0] || "",
      marketplace: n[1]
    };
  }
  return {
    name: e
  };
}

function B1(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return {
    name: e
  };
  return {
    name: e.slice(0, n),
    marketplace: e.slice(n + 1)
  };
}

function _Z(e) {
  let n = PH(e), t = FUe(n);
  if (t !== null) return {
    name: t.packageName,
    marketplace: yh
  };
  let r = B1(n);
  return rf(r.marketplace) ? r : kn(n);
}

function FUe(e) {
  let n = PH(e), t = `@${yh}`;
  if (!n.endsWith(t) || n.length <= t.length) return null;
  let r = n.slice(0, -t.length), i = r.startsWith("@") ? r.indexOf("@", 1) : r.indexOf("@"), o = i < 0 ? r : r.slice(0, i), s = i < 0 ? void 0 : r.slice(i + 1);
  if (!jve(o) || s === "") return null;
  return {
    packageName: o,
    ...s !== void 0 && {
      versionSpec: s
    },
    pluginId: `${o}${t}`
  };
}

function Ann(e, n) {
  return n ? `${e}@${n}` : e;
}

function Hi(e) {
  let n = e.lastIndexOf("@");
  if (n < 0) return;
  let t = e.slice(n + 1);
  return t === "" ? void 0 : t;
}

function ec(e) {
  let {name: n, marketplace: t} = B1(e);
  if ((But(t) || t === Fi || t === mn) && !eM().safeParse(e).success) return {
    name: n
  };
  return {
    name: n,
    marketplace: t
  };
}

function vm(e, n) {
  return e === n || e.toLowerCase() === n.toLowerCase();
}

function fr(e) {
  return e.normalize("NFC").toLowerCase();
}

function hv(e, n) {
  return e.find(t => t === n) ?? e.find(t => vm(t, n));
}

function Dvo(e, n) {
  return e.filter(t => vm(kn(t).name, n));
}

function Pl(e) {
  return e !== void 0 && A1e.has(e.toLowerCase());
}

function But(e) {
  return Pl(e) || e !== void 0 && Hin.has(e.toLowerCase());
}

var Q = new Set([ Cnn, "core", "cowork-plugin-management", "data", "design", "engineering", "enterprise-search", "figma", "finance", "human-resources", "internal-apps", "legal", "marketing", "operations", "product-management", "productivity", "sales", "small-business", "ai-governance-legal", "cocounsel-legal", "commercial-legal", "corporate-legal", "employment-legal", "ip-legal", "law-student", "legal-builder-hub", "legal-clinic", "litigation-legal", "privacy-legal", "product-legal", "regulatory-legal", "healthcare", "fhir-developer", "npi-registry", "icd10-codes", "pubmed", "prior-auth-review", "cms-coverage", "clinical-trial-protocol", "documents", "asana", "bigquery", "claude-tag-data-viz", "claude-tag-oncall", "claude-tag-troubleshoot", "confluence", "datadog", "google-drive", "grafana", "hubspot", "jira", "linear", "notion", "pagerduty", "redshift", "salesforce", "sentry", "snowflake" ]);

function P3e(e, n) {
  return N(n) && Q.has(e);
}

var ee = {
  user: "userSettings",
  project: "projectSettings",
  local: "localSettings"
};

function JT(e) {
  if (e === "managed") throw Error("Cannot install plugins to managed scope");
  return ee[e];
}

function mPe(e) {
  return sDt[e];
}

export { Vxs, Ovo, IAr, U1, qa, Gg, Kxs, mn, RWn, xH, gk, OAr, xWn, br, qxs, Ppe, Yxs, Mvo, MAr, PWn, Fut, HAr, Zse, Enn, Xxs, l9, wf, IWn, x3e, Ipe, Aw, d9, c9, nDt, Ope, OWn, Jxs, Ac, knn, Cu, Mi, Fi, rf, PH, Cw, MWn, IH, Mpe, HWn, MR, DWn, p5, vb, Hvo, Tnn, rDt, Uut, Qxs, Lz, oDt, LWn, Nz, sDt, kn, B1, _Z, FUe, Ann, Hi, ec, vm, fr, hv, Dvo, Pl, But, P3e, JT, mPe };
