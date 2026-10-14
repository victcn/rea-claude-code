// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt } from "./chunk-3pqddg8f.js";

import { j } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { WR, QGn } from "./chunk-s2t7g8m9.js";

class n {
  active=void 0;
  transportPersists=void 0;
  hostedWorker=!1;
  setActive(r) {
    this.active = r, this.transportPersists = r?.persistsOutboundFrames, this.hostedWorker = r?.isHostedWorker === !0;
  }
  remoteBridgeLive=null;
  bridgeMayBeLive() {
    return this.remoteBridgeLive === null || this.remoteBridgeLive();
  }
  markLocalTransport() {
    this.transportPersists = !1;
  }
}

var OS = new lt(() => new n);

function ff(r) {
  return QGn({
    hostedWorker: Agr(r),
    transportPersists: OS.of(r).transportPersists
  });
}

function mps(r) {
  return WR() && OS.of(r).transportPersists === !0;
}

function Agr(r) {
  return r.host.launchOptions.diskless() || OS.of(r).hostedWorker;
}

function go(r) {
  return ff(r) || OS.of(r).bridgeMayBeLive();
}

function Gio(r, e) {
  return ff(r) ? Vio(e) : e;
}

function Vio(r) {
  return r.map(e => ({
    name: e.name,
    status: e.status
  }));
}

function Kio(r, e) {
  return ff(r) ? [] : e;
}

function Cgr(r, e, s, i = "last") {
  try {
    if (!ff(r)) return i === "first" ? [ e, ...s ] : [ ...s, e ];
    for (let o of s) t(`error_during_execution detail: ${o}`, {
      level: "error"
    });
    return [ e ];
  } catch (o) {
    return d(j(o)), [ e ];
  }
}

function i7(r, e, s) {
  return ff(r) ? s : e;
}

export { OS, ff, mps, Agr, go, Gio, Vio, Kio, Cgr, i7 };
