// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { RJe, ke, ea, TA, xJe, yM, Fn } from "./chunk-3pqddg8f.js";

import { Ln } from "./chunk-ddr690nj.js";

import { AsyncLocalStorage as i } from "async_hooks";

var n = {
  ccr: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !0,
    fanout: !0,
    presence: !0,
    catchupReplay: !0,
    bashExec: !0,
    fileRead: !0
  },
  ssh: {
    controlChannel: !0,
    modelCatalog: !0,
    setPermissionMode: !0,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !0
  },
  direct: {
    controlChannel: !1,
    modelCatalog: !1,
    setPermissionMode: !1,
    sessionRecord: !1,
    fanout: !1,
    presence: !1,
    catchupReplay: !1,
    bashExec: !1,
    fileRead: !1
  }
};

var zMr = {
  isRemoteMode: !1
};

function kr() {
  return yM().remote;
}

var n4n = "Stopped waiting for the remote \u2014 the command may still complete there";

function Dt() {
  return Fn() || kr() !== null;
}

function iEe(e, o) {
  return Dt() ? o : e;
}

function yl() {
  let e = kr();
  return e?.caps?.controlChannel === !0 && !e.viewerOnly;
}

function r4n() {
  return !1;
}

function SA(e) {
  return kr()?.caps?.[e] === !0;
}

function GMr(e, o) {
  return o && !(e.isRemoteMode && e.viewerOnly);
}

function a(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}

function VMr(e, o, r, s) {
  if (!o.isRemoteMode) return zMr;
  return {
    kind: e,
    isRemoteMode: !0,
    viewerOnly: r,
    caps: n[e],
    sessionId: s,
    sendMessage: o.sendMessage,
    cancelRequest: o.cancelRequest,
    cancelHeldMessages: o.cancelHeldMessages ?? (() => !1),
    disconnect: o.disconnect,
    sendControlRequest: o.sendControlRequest ?? (() => a(e))
  };
}

var t = new i;

function sg(e, o) {
  return t.run({
    cwd: Ln(e)
  }, o);
}

function vFs(e) {
  return Dt() ? e() : t.exit(e);
}

function xln(e, o) {
  return sg(e ?? le(), o);
}

function Pln(e, o) {
  return e === null ? o() : xln(e.cwd, o);
}

function dq() {
  return t.getStore() !== void 0;
}

function Iln(e) {
  let o = t.getStore();
  if (o) o.cwd = Ln(e); else xJe(e);
}

function Oln() {
  return t.getStore()?.cwd ?? TA();
}

function Bl() {
  if (t.getStore()?.cwd === void 0 && ea() === null) return null;
  return le();
}

function le() {
  try {
    return Oln();
  } catch (e) {
    if (RJe(e) && ea() === null) throw e;
    return ke();
  }
}

function KMr() {
  return !dq() && Dt() ? void 0 : le();
}

export { zMr, kr, n4n, Dt, iEe, yl, r4n, SA, GMr, VMr, sg, vFs, xln, Pln, dq, Iln, Oln, Bl, le, KMr };
