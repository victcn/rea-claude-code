// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, l, E } from "./chunk-b0z4bv3v.js";

import { Ap } from "./chunk-y752zmas.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { _, Y, se, t } from "./chunk-kawq2919.js";

import { $s, ne } from "./chunk-5wbhf1bk.js";

import { p } from "./chunk-jkzenvsk.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { ls, Tn } from "./chunk-30n0xq4e.js";

import { Ja, Om } from "./chunk-2msx6erf.js";

import { Qh } from "./chunk-4dwgr3et.js";

import { it } from "./chunk-zscnwzv2.js";

import { Gt } from "./chunk-xywp7esx.js";

import { dd, uRo, Xn } from "./chunk-x35dw27e.js";

import { dG } from "./chunk-hazy64h6.js";

import { Ibr } from "./chunk-r8a304y3.js";

import { Zhe } from "./chunk-avrjq9ek.js";

import { o, oe, _t, ue } from "./chunk-cvcg6n1z.js";

import { O, BOe } from "./chunk-1xnsr4dy.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { hostname as pe } from "os";

import { createPrivateKey as de, createPublicKey as ce, generateKeyPairSync as ye, sign as le } from "crypto";

import { randomBytes as X } from "crypto";

import { chmod as Q } from "fs/promises";

import { dirname as F, join as G } from "path";

var J = p(() => _t({
  privateKeyPkcs8B64: o(),
  rowPk: o().optional()
})), Z = p(() => _t({
  keys: ue(o(), oe())
}));

function u(e, r) {
  let n = e?.keys[r];
  if (n === void 0) return;
  let i = J().safeParse(n);
  return i.success ? i.data : void 0;
}

var K = Symbol("deviceKeyStore.NO_KEYCHAIN");

function v(e) {
  return e === dd || e === K;
}

var C = "Claude Code-device-keys", I = 2e3, U = 4032, ee = 44, re = new Set([ 37, 50 ]);

function A(e) {
  try {
    let r = Z().safeParse(Y(e));
    return r.success ? r.data : void 0;
  } catch {
    return;
  }
}

var H = Promise.resolve();

async function N(e, r) {
  let n = H, i = Promise.withResolvers();
  H = i.promise;
  try {
    await n;
    let a = F(e());
    await se().mkdir(a);
    let s = await Ja(G(a, ".device-keys"), {
      realpath: !1,
      retries: {
        retries: 10,
        minTimeout: 100,
        maxTimeout: 1e3
      },
      stale: 15e3,
      onCompromised: d => t(`[deviceKeyStore] write lock compromised: ${l(d)}`, {
        level: "warn"
      })
    });
    try {
      return await r();
    } finally {
      await Om(s, "[deviceKeyStore] write lock");
    }
  } finally {
    i.resolve();
  }
}

function te(e) {
  return {
    name: "file",
    async read() {
      let r = e(), n;
      try {
        n = await se().readFile(r, {
          encoding: "utf8"
        });
      } catch (s) {
        let d = E(s);
        if (d === "ENOENT") return null;
        return t(`[deviceKeyStore] file read failed: ${d ?? "unknown"}`, {
          level: "warn"
        }), dd;
      }
      if (!n.trim()) return null;
      let i = A(n);
      if (i) return i;
      let a = `${r}.corrupt-${Date.now()}-${process.pid}-${X(3).toString("hex")}`;
      try {
        await ls(r, a);
      } catch (s) {
        return t(`[deviceKeyStore] device-key file is not a device-key document and could not be set aside: ${E(s) ?? "unknown"}`, {
          level: "warn"
        }), dd;
      }
      return t(`[deviceKeyStore] device-key file was not a device-key document; set aside as ${a} and starting fresh`, {
        level: "warn"
      }), f("device_key_store", "corrupt_quarantined"), null;
    },
    async write(r) {
      let n = e();
      try {
        return await se().mkdir(F(n)), await Tn(n, _(r), 384), await Q(n, 384), !0;
      } catch (i) {
        return t(`[deviceKeyStore] file write failed: ${E(i) ?? "unknown"}`, {
          level: "warn"
        }), !1;
      }
    },
    withWriteLock(r) {
      return N(e, r);
    }
  };
}

function ie(e) {
  return {
    name: "keychain",
    async read() {
      let {stdout: r, code: n} = await it("security", [ "find-generic-password", "-a", dG(), "-w", "-s", C ], {
        useCwd: !1,
        preserveOutputOnError: !1,
        timeout: I
      });
      if (n === ee) return null;
      if (re.has(n)) return t(`[deviceKeyStore] this account has no login keychain (security exited ${n}); it holds no device key`), 
      K;
      if (n !== 0) return t(`[deviceKeyStore] keychain read failed: security exited ${n}`, {
        level: "warn"
      }), dd;
      let i = r.trim();
      if (!i) return null;
      let a = A(i);
      if (!a) return t("[deviceKeyStore] keychain item is not a device-key document", {
        level: "warn"
      }), dd;
      return a;
    },
    async write(r) {
      let n = dG(), i = Buffer.from(_(r), "utf8").toString("hex"), a = `add-generic-password -U -a "${n}" -s "${C}" -X "${i}"\n`;
      try {
        return (a.length <= U ? await Qh("security", [ "-i" ], {
          input: a,
          stdio: [ "pipe", "pipe", "pipe" ],
          reject: !1,
          timeout: I
        }) : await Qh("security", [ "add-generic-password", "-U", "-a", n, "-s", C, "-X", i ], {
          stdio: [ "ignore", "pipe", "pipe" ],
          reject: !1,
          timeout: I
        })).exitCode === 0;
      } catch {
        return !1;
      }
    },
    withWriteLock(r) {
      return N(e, r);
    }
  };
}

var ae = te(Ibr), Ye = ie(Ibr), B;

function D() {
  if (B) return B;
  return ae;
}

function P() {
  return fe;
}

var b = Ue(new Set, e => e.clear());

function z(e) {
  return e?.inMemory === !0 || O() === "windows" && uRo();
}

var fe = {
  async load(e, r) {
    let n = await L(e, r, "load"), i = n && w(n.stored);
    return n && i ? R(e, n, i, r) : void 0;
  },
  async loadOrCreate(e, r) {
    let n = await L(e, r, "create");
    if (n) {
      let y = w(n.stored);
      if (y) return R(e, n, y, r);
      if (t("[deviceKey] stored device key is unreadable; minting a new one"), n.location === "legacy") await V(e, n, r).catch(k => {
        t(`[deviceKey] could not retire the unreadable device key: ${l(k)}`);
      });
    }
    let i = await ge(e, r), a = i && w(i.stored);
    if (i && a) return t(`[deviceKey] adopting the device key already held in the ${i.location === "item" ? "device-key item" : "credentials store"}`), 
    R(e, i, a, r);
    let s = {
      privateKeyPkcs8B64: ye("ec", {
        namedCurve: "P-256"
      }).privateKey.export({
        type: "pkcs8",
        format: "der"
      }).toString("base64")
    }, d;
    try {
      d = z(r) ? await ve(e, s, r) : await me(e, s);
    } catch (y) {
      throw y instanceof x ? y : new x(`deviceRegistry: device key could not be persisted (${l(y)})`, "deviceRegistry: device key not persisted", "key_not_persisted");
    }
    let c = d && w(d.stored);
    if (!d || !c) throw new x("deviceRegistry: device key could not be persisted", "deviceRegistry: device key not persisted", "key_not_persisted");
    return R(e, d, c, r);
  }
};

function me(e, r) {
  let n = D();
  return n.withWriteLock(async () => {
    let i = await n.read();
    if (v(i)) return T(i);
    let a = u(i, e);
    if (a && w(a)) return {
      location: "item",
      stored: a
    };
    if (!await n.write({
      ...i,
      keys: {
        ...i?.keys,
        [e]: r
      }
    })) {
      f("device_key_store", "item_write_failed");
      return;
    }
    let d = await n.read(), c = v(d) ? void 0 : u(d, e);
    if (!c) f("device_key_store", "readback_mismatch");
    return c && {
      location: "item",
      stored: c
    };
  });
}

async function ve(e, r, n) {
  await Xn().mutate(a => {
    if (a.coworkRemoteDevice?.[e]) return a;
    return {
      ...a,
      coworkRemoteDevice: {
        ...a.coworkRemoteDevice,
        [e]: r
      }
    };
  }, n);
  let i = (await Xn().readAsync(n))?.coworkRemoteDevice?.[e];
  return i && {
    location: "legacy",
    stored: i
  };
}

async function L(e, r, n) {
  let i = (await Xn().readAsync(r))?.coworkRemoteDevice?.[e];
  if (z(r)) {
    if (i || r?.inMemory === !0) return i && {
      location: "legacy",
      stored: i
    };
    let d = await D().read(), c = v(d) ? void 0 : u(d, e);
    return c && {
      location: "item",
      stored: c
    };
  }
  let a = await D().read();
  if (v(a)) {
    if (i && w(i)) {
      if (a === dd) f("device_key_store", "item_unreadable_using_legacy");
      return {
        location: "legacy",
        stored: i
      };
    }
    if (a === K && n === "load") return;
    return T(a);
  }
  let s = u(a, e);
  if (s) {
    if (i?.privateKeyPkcs8B64 === s.privateKeyPkcs8B64 && (n === "create" || !b.has(e))) await M(e, s.privateKeyPkcs8B64, r);
    return {
      location: "item",
      stored: s
    };
  }
  if (!i) return;
  if (n === "load" && b.has(e)) return {
    location: "legacy",
    stored: i
  };
  return {
    location: await we(e, i, r),
    stored: i
  };
}

function T(e) {
  if (e === K) throw f("device_key_store", "no_keychain"), new x("deviceRegistry: this account has no login keychain to hold a device key", "deviceRegistry: no login keychain", "no_keychain");
  throw f("device_key_store", "item_read_failed"), new x("deviceRegistry: the device-key store could not be read", "deviceRegistry: device-key store unreadable", "key_store_unreadable");
}

async function ge(e, r) {
  if (r?.inMemory !== !0) {
    let i = await D().read();
    if (v(i)) return T(i);
    let a = u(i, e);
    if (a && w(a)) return {
      location: "item",
      stored: a
    };
  }
  let n = Xn();
  for (let i of [ {
    inaccessibleAs: "failure"
  }, void 0 ]) {
    let a = await (n.readAsyncStrict?.(r, i) ?? n.readAsync(r));
    if (a === dd) throw f("device_key_store", "legacy_read_failed"), new x("deviceRegistry: the credentials store could not be read for a device key", "deviceRegistry: credentials store unreadable", "key_store_unreadable");
    let s = a?.coworkRemoteDevice?.[e];
    if (s && w(s)) return {
      location: "legacy",
      stored: s
    };
  }
  return;
}

async function we(e, r, n) {
  let i, a = D();
  try {
    i = await a.withWriteLock(async () => {
      let s = await a.read();
      if (v(s)) return h(e, s === K ? "no_keychain" : "item_read_failed");
      if (u(s, e) === void 0) {
        if (!await a.write({
          ...s,
          keys: {
            ...s?.keys,
            [e]: r
          }
        })) return h(e, "item_write_failed");
      }
      let d = await a.read(), c = v(d) ? void 0 : u(d, e);
      if (c === void 0) return h(e, "readback_mismatch");
      if (c.privateKeyPkcs8B64 !== r.privateKeyPkcs8B64 || c.rowPk !== r.rowPk) return h(e, "readback_foreign_key");
      return "item";
    });
  } catch (s) {
    return t(`[deviceKey] could not take the device-key lock to move the device key: ${l(s)}`), 
    h(e, "lock_unavailable");
  }
  if (i === "item") await M(e, r.privateKeyPkcs8B64, n);
  return i;
}

function h(e, r) {
  return b.add(e), t(`[deviceKey] device key stays in the credentials store for now (${r})`), 
  f("device_key_store", r), "legacy";
}

async function M(e, r, n) {
  let i = !1;
  try {
    if ((await Xn().mutate(s => {
      if (s.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== r) return s;
      i = !0;
      let {[e]: d, ...c} = s.coworkRemoteDevice;
      return {
        ...s,
        coworkRemoteDevice: c
      };
    }, n)).success) {
      if (i) t("[deviceKey] moved the device key out of the credentials store into its own item"), 
      g("device_key_store");
      return;
    }
  } catch (a) {
    t(`[deviceKey] could not clear the legacy device key: ${l(a)}`);
  }
  h(e, "legacy_delete_failed");
}

function w(e) {
  try {
    let r = de({
      key: Buffer.from(e.privateKeyPkcs8B64, "base64"),
      format: "der",
      type: "pkcs8"
    });
    return r.asymmetricKeyType === "ec" && r.asymmetricKeyDetails?.namedCurve === "prime256v1" ? r : void 0;
  } catch {
    return;
  }
}

function R(e, {location: r, stored: n}, i, a) {
  return {
    rowPk: n.rowPk,
    publicKeySpkiB64: ce(i).export({
      type: "spki",
      format: "der"
    }).toString("base64"),
    sign: async s => le("sha256", s, {
      key: i,
      dsaEncoding: "ieee-p1363"
    }),
    setRowPk: s => j(e, {
      location: r,
      stored: n
    }, d => {
      if (d.rowPk === s) return d;
      if (s === void 0) {
        let {rowPk: c, ...y} = d;
        return y;
      }
      return {
        ...d,
        rowPk: s
      };
    }, a),
    drop: () => V(e, {
      location: r,
      stored: n
    }, a)
  };
}

async function j(e, {location: r, stored: n}, i, a) {
  if (r === "legacy") {
    await Xn().mutate(d => {
      let c = d.coworkRemoteDevice?.[e];
      if (c?.privateKeyPkcs8B64 !== n.privateKeyPkcs8B64) return d;
      let y = i(c);
      if (y === c) return d;
      let {[e]: k, ...S} = d.coworkRemoteDevice ?? {};
      return {
        ...d,
        coworkRemoteDevice: y === void 0 ? S : {
          ...S,
          [e]: y
        }
      };
    }, a);
    return;
  }
  let s = D();
  await s.withWriteLock(async () => {
    let d = await s.read();
    if (v(d)) throw new x(`deviceRegistry: the ${s.name} device-key store could not be read`, "deviceRegistry: device-key store unreadable");
    let c = u(d, e);
    if (d === null || c?.privateKeyPkcs8B64 !== n.privateKeyPkcs8B64) return;
    let y = i(c);
    if (y === c) return;
    let {[e]: k, ...S} = d.keys;
    if (!await s.write({
      ...d,
      keys: y === void 0 ? S : {
        ...S,
        [e]: y
      }
    })) throw new x(`deviceRegistry: the ${s.name} device-key store refused the write`, "deviceRegistry: device-key store write refused");
  });
}

function V(e, r, n) {
  return j(e, r, () => {}, n);
}

var ke = "/api/organizations/:orgUUID/cowork/remote_devices", _e = "cowork_remote_device_limit_reached", De = "account_session_invalid", Ke = "cowork_remote_device_registration_revoked";

async function gQo(e, r) {
  return (await BKt(e, r))?.rowPk;
}

async function u3r(e, r) {
  let n = await P().load(e, r), i = Vt(n?.rowPk)?.toLowerCase();
  return n && i ? {
    rowPk: i,
    key: n
  } : void 0;
}

async function BKt(e, r, n) {
  if (n?.accountUuid === e) return n;
  let i = await u3r(e, r);
  return i && {
    accountUuid: e,
    ...i
  };
}

function he() {
  return "linux";
}

function Se(e) {
  return $s(e.trim(), 255) || $s(Xtt().trim(), 255);
}

async function jKt(e, r, n, {relearn: i = !1} = {}) {
  try {
    if (!Zhe()) throw new cVe("client egress policy");
    return await Pe(e, r, n, i);
  } catch (a) {
    throw m("device_registry_register", a instanceof x && a.errorClass || "unexpected_error"), 
    a;
  }
}

async function Pe(e, r, n, i) {
  let a = await P().loadOrCreate(e, n);
  if (a.rowPk && !i) return g("device_registry_register"), {
    deviceUUID: a.rowPk,
    key: a
  };
  let s = await Gt.post(ke, {
    display_name: Se(r),
    platform: he(),
    public_key: a.publicKeySpkiB64
  }, {
    auth: "teleport-org",
    headers: {
      "anthropic-beta": Ap
    },
    timeout: 1e4,
    validateStatus: () => !0,
    credentials: n
  }).catch(k => {
    throw new x(`deviceRegistry: register request failed (${l(k)})`, "deviceRegistry: register request failed", "request_failed");
  });
  if (!s.ok) throw new x(`deviceRegistry: register not sent (${s.reason})`, "deviceRegistry: register not sent", "not_sent");
  if (t(`[deviceRegistry] register status=${s.status} request_id=${String(s.response.headers?.["request-id"] ?? "")}`), 
  s.status === 400 && s.data?.error?.details?.error_code === _e) throw new Ytt;
  if (s.status === 403 && s.data?.error?.details?.error_code !== De || s.status === 404) throw new cVe(`HTTP ${s.status}`);
  let d = s.data?.error?.details?.error_code;
  if (d === Ke || s.status === 409 && d === void 0) throw new WDe(a.publicKeySpkiB64);
  let c = Vt(s.data?.id);
  if (s.status !== 201 || c === null) throw new x(`deviceRegistry: register ${s.status}: ${ne(String(_(s.data) ?? ""), 200)}`, "deviceRegistry: register HTTP error", "http_error");
  if (s.data?.revoked_at !== null && s.data?.revoked_at !== void 0) throw new WDe(a.publicKeySpkiB64);
  let y = c.toLowerCase();
  return await a.setRowPk(y).catch(k => {
    t(`[deviceRegistry] registered device row=${y} but could not cache it: ${l(k)}`);
  }), t(`[deviceRegistry] registered device row=${y}`), g("device_registry_register"), 
  {
    deviceUUID: y,
    key: a
  };
}

class Ytt extends x {
  constructor() {
    super("deviceRegistry: account device limit reached", "deviceRegistry: account device limit reached", "limit_reached");
  }
}

class cVe extends x {
  constructor(e) {
    super(`deviceRegistry: device registration unavailable for this account or organization (${e})`, "deviceRegistry: device registration unavailable for this account or organization", "registration_unavailable");
  }
}

class WDe extends x {
  refusedPublicKey;
  constructor(e) {
    super("deviceRegistry: this machine's device registration was removed from the account", "deviceRegistry: device registration revoked", "registration_revoked");
    this.refusedPublicKey = e;
  }
}

async function hQo(e, r, n, i) {
  return await q(e, n, i, 2), jKt(e, r, i, {
    relearn: !0
  });
}

async function q(e, r, n, i) {
  let a = await P().load(e, n);
  if (a?.publicKeySpkiB64 !== r) return;
  if (i === 0) throw W("it is still stored after being dropped");
  return await a.drop().catch(s => {
    throw W(l(s));
  }), q(e, r, n, i - 1);
}

function W(e) {
  return new x(`deviceRegistry: the removed device's key could not be retired (${e})`, "deviceRegistry: device key not retired", "key_not_retired");
}

async function mTn(e, r) {
  await ((await P().load(e, r))?.setRowPk(void 0));
}

function Xtt() {
  return `Claude Code on ${pe()} \xb7 ${BOe("linux")}`;
}

export { gQo, u3r, BKt, jKt, Ytt, cVe, WDe, hQo, mTn, Xtt };
