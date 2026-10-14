// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt } from "./chunk-3pqddg8f.js";

import { d } from "./chunk-6ah1819r.js";

function n() {
  return {
    spawned: 0,
    requested: {
      background: 0,
      foreground: 0,
      unset: 0
    },
    started_in_background: 0,
    max_depth: 0,
    spawned_by_subagents: 0,
    completed: 0,
    failed: 0,
    killed: {
      parent: 0,
      user: 0,
      system: 0
    },
    refused: {
      depth_limit: 0,
      concurrency_limit: 0,
      budget: 0
    }
  };
}

class s {
  #e;
  #t;
  constructor(e) {
    this.#e = e;
  }
  completed() {
    if (this.#n("completed")) this.#e.completed += 1;
  }
  failed() {
    if (this.#n("failed")) this.#e.failed += 1;
  }
  killed(e) {
    if (this.#n("killed")) this.#e.killed[e ?? "user"] += 1;
  }
  cancelledAfterCompletion() {
    if (this.#t === "completed") this.#e.completed -= 1, this.#t = void 0;
    this.killed("user");
  }
  #n(e) {
    if (this.#t !== void 0) return !1;
    return this.#t = e, !0;
  }
}

class r {
  #e=n();
  #t=new Map;
  recordSpawn(e) {
    let t = this.#e;
    if (t.spawned += 1, t.requested[e.runInBackground === void 0 ? "unset" : e.runInBackground ? "background" : "foreground"] += 1, 
    e.runsInBackground) t.started_in_background += 1;
    if (this.#t.set(e.agentType, (this.#t.get(e.agentType) ?? 0) + 1), t.max_depth = Math.max(t.max_depth, e.depth), 
    e.depth > 1) t.spawned_by_subagents += 1;
    return new s(t);
  }
  recordRefused(e) {
    this.#e.refused[e] += 1;
  }
  snapshot() {
    let e = this.#e;
    return {
      ...e,
      requested: {
        ...e.requested
      },
      killed: {
        ...e.killed
      },
      refused: {
        ...e.refused
      },
      by_type: Object.fromEntries(this.#t)
    };
  }
  reset() {
    Object.assign(this.#e, n()), this.#t.clear();
  }
}

var nVe = new lt(() => new r);

function KJ(e) {
  if (!e) return;
  try {
    return nVe.of(e).snapshot();
  } catch (t) {
    d(t);
    return;
  }
}

export { nVe, KJ };
