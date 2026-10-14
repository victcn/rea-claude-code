// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x5, Si } from "./chunk-xywp7esx.js";

import { pr } from "./chunk-9yajep3y.js";

import { Ee, Jg } from "./chunk-z52kmxx4.js";

import { Ii } from "./chunk-5wbhf1bk.js";

import { Lw } from "./chunk-yxennhe9.js";

import { as } from "./chunk-r276nwd3.js";

import { Z$e, ggo, mb, JSr } from "./chunk-4v78v8fd.js";

import { RDn, Ext } from "./chunk-sqb9meyh.js";

import { Crt } from "./chunk-84yp45y8.js";

import { join as m } from "path";

function c(t) {
  return pr(t) !== null;
}

function bfn(t, o, n = "  ") {
  let r = m(Ee(), "CLAUDE.md"), s = m(o, "CLAUDE.md"), i = m(o, ".claude", "CLAUDE.md"), p = m(o, "CLAUDE.local.md"), f = t.some(e => e.path === r), g = t.some(e => e.path === s), y = [ ...t.filter(e => e.type !== "AutoMem" && !Crt(e.path)).map(e => ({
    ...e,
    exists: !0
  })), ...f ? [] : [ {
    path: r,
    type: "User",
    content: "",
    exists: !1
  } ], ...g ? [] : [ {
    path: s,
    type: "Project",
    content: "",
    exists: !1
  } ] ], h = c(o), u = new Map;
  return y.map(e => {
    let d = as(e.path), a = e.parent ? (u.get(e.parent) ?? 0) + 1 : 0;
    u.set(e.path, a);
    let b = a > 0 ? Ii(n, a - 1) : "", l = e.type === "User" && e.path === r ? "user" : e.type === "Project" && e.path === s ? "project" : a === 0 && e.type === "Project" && e.path === i ? "project-alt" : a === 0 && e.type === "Local" && e.path === p ? "local" : "other", M = l === "user" ? "User instructions" : l === "project" ? "Project instructions" : a > 0 ? `${b}L ${d}` : d, R = e.type === "User" ? "Saved in ~/.claude/CLAUDE.md" : l === "project" ? `${h ? "Checked in at" : "Saved in"} ./CLAUDE.md` : e.parent ? "@-imported" : "";
    return {
      kind: l,
      path: e.path,
      label: M,
      description: R,
      exists: e.exists
    };
  });
}

function Sfn() {
  let t = [ {
    kind: "auto",
    path: Si(),
    label: "Open auto-memory folder",
    description: ""
  } ];
  if (x5() && ggo()) t.push({
    kind: "team",
    path: mb(),
    label: "Open team memory folder",
    description: ""
  });
  return t;
}

function wfn(t, o = n => n) {
  let n = [];
  for (let r of t) if (r.memory) n.push({
    kind: "agent",
    path: JSr(r.agentType, r.memory),
    label: `Open ${o(r.agentType)} agent memory`,
    description: `${r.memory} scope`
  });
  return n;
}

function R1o() {
  let t = Ext();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = RDn();
    return o === "denied" ? "closed" : o;
  }
  return "closed";
}

function KWe() {
  return Z$e();
}

function x1o() {
  return !1;
}

var vfn = "can't be turned on here; use a session started outside Claude Code";

function Efn({enabled: t, modelDisabled: o, safeMode: n, raiseAllowed: r}) {
  if (o && !t) return {
    status: "unavailable for current model",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (n) return {
    status: "off in safe mode",
    detail: `${Jg()} to re-enable`,
    dim: !0,
    toggleable: !1
  };
  if (!t && !r) return {
    status: "off",
    detail: vfn,
    dim: !0,
    toggleable: !1
  };
  return {
    status: t ? "on" : "off",
    detail: "",
    dim: !1,
    toggleable: !o
  };
}

function kfn({autoMemoryOn: t, enabled: o, running: n, lastDreamAt: r, raiseAllowed: s, heldDetail: i}) {
  if (!t) return {
    status: "off while auto-memory is off",
    detail: "",
    dim: !0,
    toggleable: !1
  };
  if (i !== void 0) return {
    status: o ? "on" : "off",
    detail: i,
    dim: !0,
    toggleable: !1
  };
  if (!o && !s) return {
    status: "off",
    detail: vfn,
    dim: !0,
    toggleable: !1
  };
  let p = n ? "running" : r === null ? "" : r === 0 ? "never" : `last ran ${Lw(new Date(r))}`;
  return {
    status: o ? "on" : "off",
    detail: p,
    dim: !1,
    toggleable: !0
  };
}

export { bfn, Sfn, wfn, R1o, KWe, x1o, vfn, Efn, kfn };
