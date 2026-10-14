// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { AsyncLocalStorage as s } from "async_hooks";

class ETr {
  #e=!1;
  #t=!1;
  #s=!1;
  #r=!1;
  #a=!1;
  #i=!1;
  #d=!1;
  #o;
  #u=!1;
  #l=!1;
  #n;
  get backgroundTasksDisabled() {
    return this.#e;
  }
  get backgroundAgentLaunchDisabled() {
    return this.#t;
  }
  get remoteAgentIsolationDisabled() {
    return this.#s;
  }
  get unsandboxedCommandsDisabled() {
    return this.#r;
  }
  get backgroundDeadlineDisabled() {
    return this.#a;
  }
  get backgroundCompletionNoticeDisabled() {
    return this.#i;
  }
  get messagingBeyondOwnAgentsDisabled() {
    return this.#d;
  }
  get backgroundLaunchRule() {
    return this.#o;
  }
  get backgroundLaunchByDefault() {
    return this.#u;
  }
  get foregroundAgentMovesAdmitted() {
    return this.#l;
  }
  get stoppedByPerson() {
    return this.#n;
  }
  disableBackgroundTasks() {
    this.#e = !0;
  }
  disableBackgroundAgentLaunch() {
    this.#t = !0;
  }
  disableRemoteAgentIsolation() {
    this.#s = !0;
  }
  installBackgroundLaunchRule(e) {
    if (!this.#e) throw Error("A background launch rule needs background tasks disabled first");
    if (typeof e.parameterDescription !== "string") throw Error("A background launch rule needs parameterDescription to be a string");
    if (this.#o !== void 0) throw Error("A background launch rule is already installed");
    let o = e.admitsMoves === !0;
    if (o && typeof e.admitMove !== "function") throw Error("A background launch rule that admits moves needs admitMove to be a function");
    let t = e.launchesByDefault === !0;
    this.#o = e, this.#u = t, this.#l = o;
  }
  disableBackgroundDeadline() {
    this.#a = !0;
  }
  disableBackgroundCompletionNotice() {
    this.#i = !0;
  }
  disableUnsandboxedCommands() {
    this.#r = !0;
  }
  disableMessagingBeyondOwnAgents() {
    this.#d = !0;
  }
  installStoppedByPerson(e) {
    if (this.#n !== void 0) throw Error("A stoppedByPerson question is already installed");
    this.#n = e;
  }
}

var r = new K(() => new ETr);

function mh() {
  return n.getStore() ?? r.of(B().host);
}

var n = new s;

function WRs(e, o) {
  return n.run(e, o);
}

export { ETr, mh, WRs };
