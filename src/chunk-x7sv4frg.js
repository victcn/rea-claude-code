// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke, p6 } from "./chunk-3pqddg8f.js";

import { x, $y, tm } from "./chunk-b0z4bv3v.js";

import { Rht } from "./chunk-ddr690nj.js";

import { fEe } from "./chunk-kawq2919.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { Xt } from "./chunk-q6wab2jw.js";

import { nu } from "./chunk-4v78v8fd.js";

import { u0, p0 } from "./chunk-sqb9meyh.js";

import { realpath as p, stat as R } from "fs/promises";

import { isAbsolute as u } from "path";

var iLr = {
  is_cwd: "sad",
  already_registered: "sad",
  outside_scope: "bad_reported",
  not_directory: "bad",
  too_many: "bad",
  expansion_failed: "bad",
  resolve_failed: "bad",
  stat_failed: "bad",
  screened_nt_namespace: "bad_reported",
  screened_untrusted_unc: "bad_reported",
  screened_untrusted_automount: "bad_reported",
  screened_suspicious_windows_spelling: "bad_reported",
  screened_unvettable_chain: "bad_reported"
};

function l(e) {
  return `screened_${e}`;
}

function _(e) {
  return Object.hasOwn(iLr, e);
}

function tun(e) {
  try {
    return e instanceof x && e.telemetryMessage.startsWith("register_repo_root:") && e.errorClass !== void 0 && _(e.errorClass) ? e.errorClass : void 0;
  } catch {
    return;
  }
}

function f(e, o, r, s) {
  let i = {
    caseFold: !1,
    skipPrivateAlias: !0,
    uncShapeParity: !0
  }, n = u(o) && nu(e, o, i);
  if (n && nu(o, e, i)) return {
    allowed: !1,
    code: "is_cwd",
    reason: "is the session's working directory, which is already registered; pass the cloned repo's own directory instead"
  };
  if (s.includes(e)) return {
    allowed: !1,
    code: "already_registered",
    reason: "is already a registered working directory"
  };
  let a = r.some(d => e !== d && nu(e, d, i));
  if (!n && !a) return {
    allowed: !1,
    code: "outside_scope",
    reason: "is not a subdirectory of the session's working directory or of a launch-time --add-dir root"
  };
  return {
    allowed: !0
  };
}

async function g(e) {
  return Promise.all([ ...e.values() ].map(async o => {
    if (await fEe(o.path, p6())) return {
      source: o.source,
      resolved: o.path
    };
    let r = await p(o.path).catch(() => o.path);
    return {
      source: o.source,
      resolved: Rht(o.path, r, p6()) ? o.path : r
    };
  }));
}

async function h(e) {
  return (await R(e)).isDirectory() ? {
    allowed: !0
  } : {
    allowed: !1,
    code: "not_directory",
    reason: "is not a directory"
  };
}

var w = {
  nt_namespace: "register_repo_root: NT-namespace path rejected before filesystem access",
  untrusted_unc: "register_repo_root: UNC path rejected before filesystem access",
  untrusted_automount: "register_repo_root: automount path rejected before filesystem access",
  suspicious_windows_spelling: "register_repo_root: suspicious Windows path spelling rejected",
  unvettable_chain: "register_repo_root: unvettable path ancestry rejected before filesystem access"
};

async function nun(e, o) {
  let r, s;
  try {
    r = ot(e);
  } catch {
    throw new x("register_repo_root: target path could not be resolved", "register_repo_root: path expansion failed", "expansion_failed");
  }
  let i = u0(e, r, o().trustedNetworkDirectories);
  if (!i.ok) throw new x("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", w[i.reason], l(i.reason));
  try {
    s = await p(r);
  } catch (t) {
    throw new x("register_repo_root: target path could not be resolved", "register_repo_root: path resolution failed", tm(t) || $y(t) ? "resolve_failed" : void 0);
  }
  let n = p0(s, o().trustedNetworkDirectories);
  if (n !== void 0) throw new x("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", "register_repo_root: resolved path rejected by the spelling screen", l(n));
  let a;
  try {
    a = await h(s);
  } catch (t) {
    throw new x("register_repo_root: target path could not be resolved", "register_repo_root: target stat failed", tm(t) || $y(t) ? "stat_failed" : void 0);
  }
  if (!a.allowed) throw new x(`register_repo_root: ${Xt(e)} ${a.reason}`, "register_repo_root: target is not a directory", a.code);
  let d = await g(o().additionalWorkingDirectories), c = f(s, ke(), d.filter(t => t.source === "cliArg").map(t => t.resolved), d.map(t => t.resolved));
  if (!c.allowed) throw new x(`register_repo_root: ${Xt(e)} ${c.reason}`, "register_repo_root: directory is outside the allowed registration scope", c.code);
  return s;
}

export { iLr, tun, nun };
