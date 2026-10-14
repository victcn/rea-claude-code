// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { x, l } from "./chunk-b0z4bv3v.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f, so } from "./chunk-3ykz5st8.js";

import { wh, Rp, t } from "./chunk-kawq2919.js";

import { IR } from "./chunk-xmqqa853.js";

import { KNe, Vit } from "./chunk-sqb9meyh.js";

import { jKt, Ytt, cVe, WDe, hQo, mTn, Xtt } from "./chunk-kccdz4ey.js";

import { p3r, f3r } from "./chunk-tqxwcs8r.js";

import { Qhe } from "./chunk-80s39be0.js";

import { Zhe } from "./chunk-avrjq9ek.js";

import { D } from "./chunk-hmqkrrtz.js";

var jDe = "creg_", A = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");

function Q$(e) {
  if (!Vt(e)) throw new x(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
  return Buffer.from(e.replace(/-/g, ""), "hex");
}

function R(e, n, r, o) {
  let u = Buffer.alloc(A.length + 48 + 8), s = 0;
  return s += A.copy(u, s), s += Q$(e).copy(u, s), s += Q$(n).copy(u, s), s += Q$(r).copy(u, s), 
  u.writeBigUInt64BE(BigInt(o), s), u;
}

async function S(e, n, r, o) {
  let u = Date.now(), s = await o.sign(R(e, n, r, u));
  return {
    deviceUUID: r,
    kid: jDe + r,
    signature: s.toString("base64"),
    issuedAt: new Date(u).toISOString(),
    signedOver: {
      orgUuid: e,
      accountUuid: n,
      issuedAtMs: u
    }
  };
}

var I = Buffer.from("anthropic.ccr.session_bind.v1", "utf8"), E = "00000000-0000-0000-0000-000000000000";

function T({orgUuid: e, accountUuid: n, sessionUuid: r, expectedCurrentDeviceUuid: o, newDeviceUuid: u, issuedAtMs: s}) {
  let d = Buffer.alloc(I.length + 80 + 8), a = 0;
  return a += I.copy(d, a), a += Q$(e).copy(d, a), a += Q$(n).copy(d, a), a += Q$(r).copy(d, a), 
  a += Q$(o ?? E).copy(d, a), a += Q$(u).copy(d, a), d.writeBigUInt64BE(BigInt(s), a), 
  d;
}

async function l3r({orgUuid: e, accountUuid: n, sessionUuid: r, deviceUUID: o, key: u, now: s = Date.now}) {
  let d = s(), a = await u.sign(T({
    orgUuid: e,
    accountUuid: n,
    sessionUuid: r,
    expectedCurrentDeviceUuid: void 0,
    newDeviceUuid: o,
    issuedAtMs: d
  }));
  return {
    deviceUUID: o,
    kid: jDe + o,
    signature: a.toString("base64"),
    issuedAt: new Date(d).toISOString()
  };
}

var H = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8"), L = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8"), O = /^[a-z0-9_.]{1,48}$/, F = 8;

function N(e) {
  return Buffer.concat([ H, ...U(e), k(e.issuedAtMs) ]);
}

function $rr(e) {
  let n = D(e).sort();
  return e.length >= 1 && e.length <= F && e.every(r => O.test(r)) && n.length === e.length && n.every((r, o) => r === e[o]) ? n : void 0;
}

function M(e, n) {
  if ($rr(n) === void 0) throw new x("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
  return Buffer.concat([ L, ...U(e), _(n.length), ...n.flatMap(r => {
    let o = Buffer.from(r, "ascii");
    return [ _(o.length), o ];
  }), k(e.issuedAtMs) ]);
}

async function d3r({orgUuid: e, accountUuid: n, sessionUuid: r, deviceUUID: o, request: u, capabilities: s, key: d, now: a = Date.now}) {
  let h = a(), p = {
    orgUuid: e,
    accountUuid: n,
    sessionUuid: r,
    deviceUuid: o,
    request: u,
    issuedAtMs: h
  }, m = await d.sign(s === void 0 ? N(p) : M(p, s));
  return {
    deviceUUID: o,
    kid: jDe + o,
    signature: m.toString("base64"),
    issuedAt: new Date(h).toISOString()
  };
}

var C = Buffer.from("anthropic.ccr.tool_host_resume.v1", "utf8");

function K(e, n) {
  let r = Buffer.from(n, "utf8");
  if (r.length === 0 || r.length > 65535) throw new x("deviceBind: tool-host resume nonce must be 1 to 65535 bytes", "deviceBind: malformed resume nonce");
  return Buffer.concat([ C, ...U(e), _(r.length), r, k(e.issuedAtMs) ]);
}

async function c3r({deviceUUID: e, nonce: n, key: r, now: o = Date.now, ...u}) {
  let s = o(), d = await r.sign(K({
    ...u,
    deviceUuid: e,
    issuedAtMs: s
  }, n));
  return {
    deviceUUID: e,
    kid: jDe + e,
    signature: d.toString("base64"),
    issuedAt: new Date(s).toISOString()
  };
}

async function q() {
  return (await P()).ok;
}

async function P() {
  let {trustedDeviceTokenForBind: e} = await import("./chunk-kfwm91qv.js");
  return e(void 0);
}

async function UKt(e) {
  if (e.launchedFromHome === void 0) await KNe();
  if ((e.launchedFromHome ?? Vit)()) return Rp("launched_from_home");
  let n;
  try {
    n = (e.isEgressAllowed ?? Zhe)();
  } catch {
    n = !1;
  }
  if (!n) return Rp("egress");
  let r = p3r({
    storedAccountUuid: e.accountUuid,
    hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : f3r(e.credentials))
  });
  if (r.status === "missing") return Rp("account");
  if (r.status === "mismatch") return Rp("account_mismatch");
  return await (e.hasDeviceProof ?? q)().catch(() => !1) ? wh({
    accountUuid: r.accountUuid,
    source: r.source
  }) : Rp("no_device_proof");
}

async function VYs(e) {
  let n = e.isEnabled ?? IR;
  try {
    if (!await n()) return Rp("gate");
  } catch (m) {
    return Rp(y("gate", m));
  }
  let r = "no_device_proof", o = await UKt({
    ...e,
    hasDeviceProof: e.hasDeviceProof ?? (async () => {
      let m = await P();
      if (!m.ok && m.error !== "not_given") r = m.error;
      return m.ok;
    })
  });
  if (!o.ok) {
    let m = V(o.error);
    return o.error === "no_device_proof" ? Rp(r) : m;
  }
  i("tengu_device_bind_account", {
    source: c(o.value.source)
  });
  let {accountUuid: u} = o.value, s = e.displayName ?? Xtt(), d = !1, a = async m => {
    try {
      return wh(await jKt(u, s, e.credentials, {
        relearn: m
      }));
    } catch (v) {
      if (!(v instanceof WDe) || e.confirmReenroll === void 0 || d) return Rp(y("register", v));
      return d = !0, await j(e.confirmReenroll) ? h(v.refusedPublicKey) : Rp(y("register", v));
    }
  }, h = async m => {
    try {
      return wh(await so("device_reenroll", () => hQo(u, s, m, e.credentials), W));
    } catch (v) {
      return Rp(y("register", v));
    }
  }, p = async m => {
    let v = await a(m);
    if (!v.ok) return v;
    let {deviceUUID: b, key: w} = v.value;
    return wh({
      deviceUUID: b,
      held: {
        accountUuid: u,
        rowPk: b,
        key: w
      },
      sign: async () => {
        try {
          let B = await S(e.orgUuid, u, b, w);
          return g("device_bind"), B;
        } catch (B) {
          y("sign", B);
          return;
        }
      },
      reregister: async () => (await mTn(u, e.credentials).catch(B => {
        t(`[deviceBind] could not forget the cached device id: ${B instanceof Error ? B.message : String(B)}`);
      }), p(!0))
    });
  };
  return p(!1);
}

function U({orgUuid: e, accountUuid: n, sessionUuid: r, deviceUuid: o, request: u}) {
  let s = Buffer.from(u.workId, "utf8"), d = Buffer.from(u.environmentId, "utf8");
  if (s.length === 0 || d.length === 0 || s.length > 65535 || d.length > 65535) throw new x("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
  return [ Q$(e), Q$(n), Q$(r), Q$(o), _(s.length), s, _(d.length), d ];
}

function _(e) {
  let n = Buffer.alloc(2);
  return n.writeUInt16BE(e), n;
}

function k(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n;
}

function V(e) {
  return i("tengu_device_bind_skipped", {
    reason: c(e),
    ...Qhe(e)
  }), Rp(e);
}

async function j(e) {
  try {
    let n = await e();
    return i("tengu_device_reenroll", {
      confirmed: n,
      prompt_failed: !1
    }), n;
  } catch (n) {
    return t(`[deviceBind] could not ask whether to register this machine again: ${l(n)}`), 
    i("tengu_device_reenroll", {
      confirmed: !1,
      prompt_failed: !0
    }), !1;
  }
}

function W(e) {
  return e instanceof x && e.errorClass || "unexpected_error";
}

function y(e, n) {
  return i("tengu_device_bind_failed", {
    phase: c(e),
    limit_reached: n instanceof Ytt,
    registration_unavailable: n instanceof cVe,
    revoked: n instanceof WDe
  }), f("device_bind", n instanceof x && n.errorClass || e), t(`[deviceBind] continuing unbound: ${n instanceof Error ? n.message : String(n)}`), 
  n instanceof Ytt ? "limit_reached" : n instanceof cVe ? "registration_unavailable" : n instanceof WDe ? "device_revoked" : n instanceof x && n.errorClass === "no_keychain" ? "no_keychain" : e;
}

export { jDe, Q$, l3r, $rr, d3r, c3r, UKt, VYs };
