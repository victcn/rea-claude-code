// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, q, Ime, ke, ea, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { mr } from "./chunk-0cdqg49t.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { PE, jXe } from "./chunk-60c97a4m.js";

import { Qi } from "./chunk-ws55c9wv.js";

import { readdir as d } from "fs/promises";

import { basename as p, dirname as u, join as i } from "path";

function Np() {
  return i(Ee(), "projects");
}

function yz(t) {
  return u(t) === Np() ? p(t) : void 0;
}

class c {
  projectDirCache=new Map;
  agentTranscriptSubdirs=new Map;
  cacheProjectDir(t, e) {
    this.projectDirCache.set(t, e);
  }
  clearProjectDirCache() {
    this.projectDirCache.clear();
  }
  setAgentTranscriptSubdir(t, e) {
    this.agentTranscriptSubdirs.set(t, e);
  }
  clearAgentTranscriptSubdir(t) {
    this.agentTranscriptSubdirs.delete(t);
  }
}

var g = new K(() => new c);

function $_(t) {
  let e = g.of(B().host), n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = i(Np(), PE(t));
  return e.cacheProjectDir(t, r), r;
}

function LOt() {
  let t = ea();
  if (t !== null) return $_(t);
  return jXe() ?? $_(ke());
}

function _z() {
  return Ime() ?? LOt();
}

function ku() {
  return i(_z(), `${q()}.jsonl`);
}

function Aho(t, e) {
  g.of(B().host).setAgentTranscriptSubdir(t, e);
}

function ivr(t) {
  g.of(B().host).clearAgentTranscriptSubdir(t);
}

function PZt() {
  return i(_z(), q(), "subagents");
}

function Eg(t) {
  let e = g.of(B().host).agentTranscriptSubdirs.get(t), n = e ? i(PZt(), e) : PZt();
  return i(n, `agent-${t}.jsonl`);
}

async function g6e(t) {
  let e = yz(_z());
  if (z() && t !== void 0 && e !== void 0) return f(t, e, q());
  if (he()) return [];
  let n;
  try {
    n = await d(PZt(), {
      withFileTypes: !0
    });
  } catch {
    return [];
  }
  return n.filter(r => r.isFile() && r.name.startsWith("agent-") && r.name.endsWith(".jsonl")).map(r => r.name.slice(6, -6));
}

async function f(t, e, n) {
  let r = [];
  try {
    return (await Qi(a => t.listEntries({
      namespace: "transcript",
      projectKey: e,
      sessionId: n
    }, {
      skipKeyStats: !0,
      skipScopeStats: !0,
      ...a !== void 0 && {
        cursor: a
      }
    }), a => {
      for (let s of a) if (s.kind === "key" && s.key.namespace === "transcript" && s.key.agentId !== void 0 && s.key.agentRelPath === void 0 && mr(s.key.agentId)) r.push(s.key.agentId);
    })).status === "done" ? r : [];
  } catch {
    return [];
  }
}

function Cho(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let o = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) n[r.identity.agentId] = o;
  }
  return n;
}

export { Np, yz, $_, LOt, _z, ku, Aho, ivr, PZt, Eg, g6e, Cho };
