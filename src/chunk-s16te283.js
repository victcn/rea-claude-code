// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { We } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { Ct } from "./chunk-6ah1819r.js";

import { pDt, Pg, al, qwe, An, _C, nfe, hE } from "./chunk-xywp7esx.js";

import { CO } from "./chunk-3apvz0s4.js";

import { PF, wSe } from "./chunk-rshryz75.js";

async function q9r(d) {
  let r = _C();
  if (r?.accountUuid) return {
    accountUuid: r.accountUuid,
    organizationUuid: r.organizationUuid || void 0
  };
  if (!wSe() || Ct()) return;
  let c = d(), o = c === void 0 ? void 0 : await C(c);
  if (o === void 0) t("[bridge:owner-pin] daemon owner not declared: no bootstrap stamp, and the daemon credential is absent or was not attributed by the server in time \u2014 spawned sessions run the unverified inbox path", {
    level: "warn"
  });
  return o;
}

var H = 1e3, R = 3e5, _ = 15e3, V = 4, N = 1e4, M = 3e3;

async function Y9r(d) {
  return CO() === void 0 && PF() && await Pg(d) === "store";
}

async function nZo(d) {
  return (await X9r(d)).pin;
}

async function X9r({getAccessToken: d, storageV5: r, credentials: c, presetOwner: o}) {
  let O = d();
  if (O === void 0) return {
    pin: void 0,
    reason: "no_token"
  };
  if (!wSe() || Ct()) return {
    pin: void 0,
    reason: "disabled"
  };
  if (o === void 0 && !await Y9r(c)) return {
    pin: void 0,
    reason: "not_store_login"
  };
  let k = await hE(r), i, s = O, u = !1;
  if (o !== void 0) {
    i = {
      accountUuid: o.accountUuid,
      organizationUuid: o.organizationUuid || void 0
    };
    let n = await x(O) ? "unknown" : await I(O);
    if (n === "foreign") return {
      pin: void 0,
      reason: "not_owner"
    };
    if (n === "unknown" && !a(k)) return {
      pin: void 0,
      reason: "unresolved"
    };
  } else {
    if (!k?.accountUuid) return {
      pin: void 0,
      reason: "no_identity"
    };
    i = {
      accountUuid: k.accountUuid,
      organizationUuid: k.organizationUuid || void 0
    };
  }
  let B = o === void 0 ? _C() : void 0;
  if (B !== void 0 && !z(B) && !await A()) return t("[bridge:owner-pin] identity sources disagree and the credential could not be validated \u2014 session runs unpinned"), 
  {
    pin: void 0,
    reason: "unresolved"
  };
  let f, l, P = 0, E = "unchanged", g = 0, w, p, h, v = V;
  function a(n) {
    return n !== void 0 && Boolean(n.accountUuid) && n.accountUuid === i.accountUuid && (!n.organizationUuid || !i.organizationUuid || n.organizationUuid === i.organizationUuid);
  }
  function z(n) {
    if (!a(n)) return !1;
    return i = {
      accountUuid: i.accountUuid,
      organizationUuid: i.organizationUuid ?? (n.organizationUuid || void 0)
    }, u = !0, !0;
  }
  async function A() {
    let n = await C(s);
    if (n === void 0) return !1;
    return i = n, u = !0, !0;
  }
  async function I(n) {
    let e = await C(n);
    if (e === void 0) return "unknown";
    if (!a(e)) return "foreign";
    return i = {
      accountUuid: i.accountUuid,
      organizationUuid: i.organizationUuid ?? e.organizationUuid
    }, s = n, u = !0, "owner";
  }
  async function x(n) {
    let e = await al(c).catch(() => null);
    return e?.accessToken === n && e.expiresAt !== null && e.expiresAt <= Date.now();
  }
  function D() {
    if (!u && o !== void 0) return !0;
    if (!u) {
      let e = _C();
      if (e !== void 0 && !z(e)) return !0;
    }
    let n = An();
    return Boolean(n?.accountUuid) && !a(n);
  }
  function T(n) {
    if (P = Date.now() + n, v = V, n > 0) E = "unchanged", g = Date.now() + N;
  }
  function m(n) {
    if (P = Date.now() + _, n === "inconclusive") E = n, g = Date.now() + N;
    if (w === void 0 || h !== void 0 || v === 0) return n;
    return v--, h = setTimeout(() => {
      h = void 0;
      try {
        if (D()) w?.();
      } catch {}
    }, _), n;
  }
  async function F(n) {
    if (l !== void 0) await l;
    let e = void 0;
    if (!u && o !== void 0) {
      if (e = await qwe(r, c).catch(() => {}), e === void 0) return m("inconclusive");
      let y = await x(e.accessToken) ? "unknown" : await I(e.accessToken);
      if (y === "foreign") return T(0), "changed";
      if (y === "unknown") return m(a(e) ? "unchanged" : "inconclusive");
    } else if (!u) {
      let y = _C();
      if (!(y !== void 0 && z(y)) && !await A()) return m("inconclusive");
    }
    if (e ??= await qwe(r, c).catch(() => {}), !e?.accountUuid) return m(n ? "inconclusive" : "unchanged");
    let b = a(e);
    if (e.accessToken === s) return T(b ? _ : R), "unchanged";
    let U = await x(e.accessToken) ? void 0 : await C(e.accessToken);
    if (U === void 0) return m("inconclusive");
    if (a(U)) return t("[bridge:owner-pin] the server attributes the rotated credential to the owner \u2014 re-baselining"), 
    i = {
      accountUuid: i.accountUuid,
      organizationUuid: i.organizationUuid ?? U.organizationUuid
    }, s = e.accessToken, T(b ? _ : R), "unchanged";
    return T(0), "changed";
  }
  let S = {
    identityLooksChanged: D,
    confirmChanged(n) {
      if (n?.fresh) {
        g = 0;
        let e = f;
        if (e !== void 0) return e.then(() => S.confirmChanged({
          fresh: !0
        }));
      } else if (f === void 0 && Date.now() < g) return Promise.resolve(E);
      return f ??= F(n?.fresh === !0).finally(() => {
        f = void 0;
      }), f;
    },
    noteAcceptedToken(n) {
      let e = n !== s;
      if (s = n, g = 0, !e || l !== void 0 || !wSe()) return;
      l = hE(r).then(async b => {
        if (!b?.accountUuid || a(b)) return;
        let U = await A();
        t(U ? "[bridge:owner-pin] request accepted while the identity file names another account \u2014 re-pinned to the tenant the server attributes the credential to" : "[bridge:owner-pin] request accepted while the identity file names another account, but the credential could not be attributed \u2014 keeping the pinned owner");
      }).finally(() => {
        l = void 0;
      });
    },
    ownerToken: () => s,
    ownerVerified: () => u,
    subscribe(n) {
      w = n;
      let e = nfe(() => {
        try {
          if (Date.now() < P || !D()) return;
        } catch {
          return;
        }
        clearTimeout(p), p = setTimeout(() => {
          p = void 0, w?.();
        }, H);
      });
      return () => {
        w = void 0, clearTimeout(p), p = void 0, clearTimeout(h), h = void 0, e();
      };
    }
  };
  return {
    pin: S
  };
}

async function C(d) {
  let r = await We(pDt(d).catch(() => {}), M);
  return r?.account_uuid ? {
    accountUuid: r.account_uuid,
    organizationUuid: r.organization_uuid || void 0
  } : void 0;
}

export { q9r, Y9r, nZo, X9r };
