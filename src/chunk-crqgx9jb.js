// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ms } from "./chunk-b0z4bv3v.js";

import { hZ, yZ, wr } from "./chunk-t26295zc.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { kme, se, t } from "./chunk-kawq2919.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { dn } from "./chunk-nnrb0acr.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { SS, a6o } from "./chunk-zkmvjknk.js";

import { NS } from "./chunk-t70vnbgq.js";

import { Ge, eUn } from "./chunk-chhsvfy5.js";

import { dQ, ni } from "./chunk-84yp45y8.js";

import { gT } from "./chunk-3kb22va7.js";

import { iE, Rue } from "./chunk-4v78v8fd.js";

import { UGt } from "./chunk-nhy2kctc.js";

import { $Wn } from "./chunk-g5zagpgq.js";

import { um, Qi } from "./chunk-ws55c9wv.js";

import { join as E } from "path";

async function _(o, l, r, n, p) {
  let w = se(), e;
  try {
    e = await w.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(e.map(async s => {
    if (!(s.isFile() || s.isSymbolicLink())) return null;
    if (!s.name.endsWith(".js")) return null;
    return v(E(o, s.name), l, r, n, p);
  }))).filter(s => s !== null);
}

async function v(o, l, r, n, p) {
  let w = se();
  if (kme(w, o, p)) return null;
  try {
    let e = await gT(w, o, iE);
    if (e === null) return t(`Plugin workflow ${o}: not a regular file or exceeds ${iE} bytes \u2014 skipping`, {
      level: "warn"
    }), null;
    let i = Rue(e), s = SS(i, {
      validateBody: !1
    });
    if ("error" in s) return t(`Plugin workflow ${o} has invalid meta: ${s.error} \u2014 skipping`, {
      level: "warn"
    }), null;
    let u = `${l}:${s.meta.name}`;
    return {
      source: "plugin",
      plugin: r,
      pluginManifest: n,
      name: u,
      description: s.meta.description,
      whenToUse: s.meta.whenToUse,
      phases: s.meta.phases,
      script: i,
      filePath: o
    };
  } catch (e) {
    return t(`Failed to load workflow from ${o}: ${e}`, {
      level: "error"
    }), null;
  }
}

function P(o) {
  let l = Ge();
  return l.workflows ??= (async () => {
    let {enabled: r, errors: n} = await ni(o), p = [];
    if (n.length > 0) t(`Plugin loading errors: ${n.map(e => NS(e)).join(", ")}`);
    let w = null;
    for (let e of r) {
      let i = new Set, s = p.length;
      if (e.workflowsPath) try {
        let u = await _(e.workflowsPath, e.name, e.source, e.manifest, i);
        if (p.push(...u), u.length > 0) t(`Loaded ${u.length} workflows from plugin ${e.name} default directory`);
      } catch (u) {
        w = "plugin_load_workflows_dir_failed", t(`Failed to load workflows from plugin ${e.name} default directory: ${u}`, {
          level: "error"
        });
      }
      if (e.workflowsPaths) for (let u of e.workflowsPaths) try {
        let c = await se().stat(u);
        if (c.isDirectory()) {
          let k = await _(u, e.name, e.source, e.manifest, i);
          if (p.push(...k), k.length > 0) t(`Loaded ${k.length} workflows from plugin ${e.name} custom path: ${u}`);
        } else if (c.isFile() && u.endsWith(".js")) {
          let k = await v(u, e.name, e.source, e.manifest, i);
          if (k) p.push(k), t(`Loaded workflow from plugin ${e.name} custom file: ${u}`);
        }
      } catch (d) {
        w = "plugin_load_workflows_path_failed", t(`Failed to load workflows from plugin ${e.name} custom path ${u}: ${d}`, {
          level: "error"
        });
      }
      if (e.serverPluginId !== void 0) for (let u of p.slice(s)) u.serverPluginId = e.serverPluginId;
    }
    if (t(`Total plugin workflows loaded: ${p.length}`), w) m("plugin_load_workflows", w); else g("plugin_load_workflows");
    return p;
  })(), l.workflows;
}

import { join as h } from "path";

function W(o, l) {
  if (!l || a6o(o.script)) return !0;
  return t(`Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${l.source} copy`, {
    level: "warn"
  }), !1;
}

function S(o) {
  let l = new Map;
  for (let r of o) {
    if (!W(r, l.get(r.name))) continue;
    l.set(r.name, r);
  }
  return [ ...l.values() ];
}

import { join as F } from "path";

function twt() {
  return F(Ee(), "workflows");
}

async function T(o, l) {
  try {
    return await dQ("workflows", o);
  } catch (r) {
    if (Ms(r)) return t(`loadWorkflowsDir: project-dir walk failed: ${r.code}`, {
      level: "error"
    }), l.walkFailed = !0, [];
    throw r;
  }
}

async function D(o, l, r, n) {
  if (n !== void 0 && l === "userSettings") return L(n, o, r);
  let p = se(), w;
  try {
    w = await p.readdir(o);
  } catch {
    return [];
  }
  return (await Promise.all(w.map(async i => {
    if (!(i.isFile() || i.isSymbolicLink())) return null;
    if (!i.name.endsWith(".js")) {
      if (/\.(mjs|cjs|ts)$/.test(i.name)) r.nearMissExt++;
      return null;
    }
    let s = h(o, i.name), u;
    try {
      u = await p.readFileBytes(s, iE + 1);
    } catch {
      return r.skippedUnreadable++, null;
    }
    if (u.byteLength > iE) return t(`Workflow ${s} exceeds ${iE} bytes \u2014 skipping`, {
      level: "warn"
    }), r.skippedOversize++, null;
    let d = Rue(u.toString("utf-8")), c = SS(d, {
      validateBody: !1
    });
    if ("error" in c) return t(`Workflow ${s} has invalid meta: ${c.error} \u2014 skipping`, {
      level: "warn"
    }), r.skippedInvalidMeta++, null;
    return {
      source: l,
      name: c.meta.name,
      description: c.meta.description,
      whenToUse: c.meta.whenToUse,
      phases: c.meta.phases,
      script: d,
      filePath: s
    };
  }))).filter(i => i !== null);
}

async function L(o, l, r) {
  let n = [];
  switch ((await Qi(e => o.listEntries({
    namespace: "userConfigDir",
    dir: "workflows"
  }, e === void 0 ? void 0 : {
    cursor: e
  }), e => {
    for (let i of e) {
      if (i.kind !== "key" || i.key.namespace !== "userConfigDir") continue;
      let s = i.key.relPath.at(-1);
      if (s === void 0 || i.key.relPath.length !== 1) continue;
      if (!s.endsWith(".js")) {
        if (/\.(mjs|cjs|ts)$/.test(s)) r.nearMissExt++;
        continue;
      }
      n.push({
        key: i.key,
        name: s
      });
    }
  })).status) {
   case "done":
    break;

   case "error":
    return [];

   case "capped":
    t(`User workflows listing of ${l} truncated at ${um} pages \u2014 loading the ${n.length} workflow files seen`, {
      level: "warn"
    }), r.userListingTruncated = !0;
    break;
  }
  return (await Promise.all(n.map(async ({key: e, name: i}) => {
    let s = await o.read([ {
      key: e,
      offset: 0,
      length: iE + 1
    } ]);
    if (!s.ok) return t(`Workflow ${h(l, i)} could not be read through the storage backend (${s.error.code}) \u2014 skipping`, {
      level: "warn"
    }), r.skippedUnreadable++, null;
    let u = s.value.items[0];
    if (u === void 0 || !u.found) return r.skippedUnreadable++, null;
    let d = h(l, i);
    if (u.value.byteLength > iE) return t(`Workflow ${d} exceeds ${iE} bytes \u2014 skipping`, {
      level: "warn"
    }), r.skippedOversize++, null;
    let c = Rue(Buffer.from(u.value).toString("utf-8")), k = SS(c, {
      validateBody: !1
    });
    if ("error" in k) return t(`Workflow ${d} has invalid meta: ${k.error} \u2014 skipping`, {
      level: "warn"
    }), r.skippedInvalidMeta++, null;
    return {
      source: "userSettings",
      name: k.meta.name,
      description: k.meta.description,
      whenToUse: k.meta.whenToUse,
      phases: k.meta.phases,
      script: c,
      filePath: d
    };
  }))).filter(e => e !== null);
}

async function b(o, l) {
  let r = twt(), n = {
    skippedInvalidMeta: 0,
    skippedOversize: 0,
    skippedUnreadable: 0,
    nearMissExt: 0,
    walkFailed: !1,
    userListingTruncated: !1
  }, p = await T(o, n), [w, ...e] = await Promise.all([ dn("userSettings") ? D(r, "userSettings", n, l) : Promise.resolve([]), ...dn("projectSettings") ? p.map(d => D(d, "projectSettings", n)) : [] ]), i = new Map;
  for (let d of w) {
    if (!W(d, i.get(d.name))) continue;
    i.set(d.name, d);
  }
  for (let d = e.length - 1; d >= 0; d--) for (let c of e[d]) {
    if (!W(c, i.get(c.name))) continue;
    i.set(c.name, c);
  }
  let s = n.walkFailed && dn("projectSettings"), u = n.skippedInvalidMeta + n.skippedOversize + n.skippedUnreadable;
  if (s || n.userListingTruncated || u > 0 || n.nearMissExt > 0) f("workflow_discover", s ? "project_dir_walk_failed" : n.userListingTruncated ? "user_listing_truncated" : n.skippedInvalidMeta > 0 ? "invalid_meta" : n.skippedOversize > 0 ? "oversize" : n.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", {
    found: i.size,
    skipped_invalid_meta: n.skippedInvalidMeta,
    skipped_oversize: n.skippedOversize,
    skipped_unreadable: n.skippedUnreadable,
    near_miss_ext: n.nearMissExt,
    ...n.userListingTruncated && {
      user_listing_truncated: !0
    }
  }); else g("workflow_discover", {
    found: i.size
  });
  return [ ...i.values() ].sort((d, c) => d.name.localeCompare(c.name));
}

var s6o = "CLAUDE_REMOTE_WORKFLOW_SCRIPT", mKr = "CLAUDE_REMOTE_WORKFLOW_ARGS", i6o = "CLAUDE_WORKFLOW_NAME_ONLY";

function Det() {
  return a.CLAUDE_WORKFLOW_NAME_ONLY;
}

function zHe(o, l) {
  return hZ(wr().allWorkflows, `${$Wn()}:${Det()}:${yZ(o)}`, () => M(o, l));
}

async function M(o, l) {
  if (Sr("workflows") || Det()) return [ ...UGt() ];
  let [r, n] = await Promise.all([ b(o, l), P(l) ]), p = S(n), w = UGt(), e = new Map(w.map(y => [ y.name, y ])), i = O(p, e);
  for (let y of i) e.set(y.name, y);
  let s = O(r, e), u = new Set(s.map(y => y.name)), d = i.filter(y => !u.has(y.name)), c = new Set([ ...u, ...d.map(y => y.name) ]);
  return [ ...w.filter(y => !c.has(y.name)), ...d, ...s ];
}

function O(o, l) {
  return o.filter(r => W(r, l.get(r.name)));
}

async function FGt(o, l, r) {
  return (await zHe(l, r)).find(p => p.name === o);
}

function FZn() {
  wr().allWorkflows.clear(), eUn();
}

export { s6o, mKr, i6o, Det, twt, zHe, FGt, FZn };
