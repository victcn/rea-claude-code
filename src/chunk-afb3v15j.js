// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { QT, An, mE, Gt, k, Ce, ce } from "./chunk-xywp7esx.js";

import { K } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

import { un } from "./chunk-y752zmas.js";

import { t } from "./chunk-kawq2919.js";

import { cD } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { con } from "./chunk-s2t7g8m9.js";

import { _c } from "./chunk-vps0k559.js";

import { V9 } from "./chunk-x35dw27e.js";

import { OR } from "./chunk-3zb1ef23.js";

import { o, u, U } from "./chunk-cvcg6n1z.js";

class ZKr {
  #t;
  constructor(e) {
    this.#t = e;
  }
  reveal() {
    return this.#t;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
}

async function eqr(e, n) {
  let i;
  try {
    i = await Gt.post("/v1/code/github/import-token", {
      token: e.reveal()
    }, {
      headers: {
        "anthropic-beta": con.header
      },
      auth: "teleport-org",
      timeout: 15e3,
      validateStatus: () => !0,
      credentials: n
    });
  } catch (r) {
    if (_c(r)) {
      t(`import-token network error: ${r.code ?? "unknown"}`, {
        level: "error"
      });
      let s = V9(r);
      return {
        ok: !1,
        error: {
          kind: "network",
          ...s && {
            sslHint: s
          }
        }
      };
    }
    return {
      ok: !1,
      error: {
        kind: "not_signed_in"
      }
    };
  }
  if (!i.ok) return {
    ok: !1,
    error: {
      kind: "not_signed_in"
    }
  };
  if (i.status === 200) return {
    ok: !0,
    result: i.data
  };
  if (i.status === 400) {
    let r = cD(OR(i.data) ?? "");
    return {
      ok: !1,
      error: {
        kind: "invalid_token",
        ...r && {
          message: r
        }
      }
    };
  }
  if (i.status === 401) return {
    ok: !1,
    error: {
      kind: "not_signed_in"
    }
  };
  return t(`import-token returned ${i.status}`, {
    level: "error"
  }), {
    ok: !1,
    error: {
      kind: "server",
      status: i.status
    }
  };
}

async function q6o(e) {
  try {
    return await mE(e), !0;
  } catch {
    return !1;
  }
}

async function h(e, {timeout: n, isBackground: i}) {
  try {
    let r = await Gt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: n,
      isBackground: i,
      validateStatus: () => !0,
      credentials: e
    });
    if (!r.ok || r.status !== 200) return null;
    let s = r.data?.auth_source;
    return {
      isAuthenticated: r.data?.is_authenticated === !0,
      authSource: s === "oauth" || s === "cli_import" ? s : null
    };
  } catch {
    return null;
  }
}

async function tqr(e) {
  let n = await h(e, {
    timeout: 1e4,
    isBackground: !1
  });
  return n?.isAuthenticated ? n.authSource : null;
}

async function l(e) {
  let n = await h(e, {
    timeout: 3e3,
    isBackground: !0
  });
  if (n === null) return f("api_github_connection_status", "request_failed"), "unknown";
  return g("api_github_connection_status"), n.isAuthenticated ? "connected" : "not_connected";
}

function gTe() {
  return `${un().CLAUDE_AI_ORIGIN}/code`;
}

class S {
  inFlight=void 0;
  status=void 0;
  generation=0;
  async read(e, n) {
    if (this.seedFromPersisted(), this.inFlight) await this.inFlight; else if (!c()) await this.fetch(e, n);
    return this.status ?? "unknown";
  }
  async readLive(e, n) {
    if (this.seedFromPersisted(), !this.inFlight && c()) return "unknown";
    let i = this.generation, r = await (this.inFlight ?? this.fetch(e, n));
    return i === this.generation ? r : "unknown";
  }
  peek(e, n) {
    if (this.seedFromPersisted(), this.status === void 0 && !this.inFlight && !c()) this.fetch(e, n);
    return this.status;
  }
  markConnected(e) {
    this.generation++, this.inFlight = void 0, this.status = "connected", m("connected", e);
  }
  clear() {
    this.generation++, this.inFlight = void 0, this.status = void 0;
  }
  seedFromPersisted() {
    if (this.status !== void 0 || this.inFlight) return;
    let e = b();
    if (e) this.status = C(ce(), e);
  }
  fetch(e, n) {
    let i = this.generation, r = l(e).then(s => (this.settle(i, s, n), s), s => (d(s), 
    this.settle(i, "unknown", n), "unknown"));
    return this.inFlight = r, r;
  }
  settle(e, n, i) {
    if (e !== this.generation) return;
    if (this.inFlight = void 0, n === "unknown") {
      this.status ??= n;
      return;
    }
    this.status = n, m(n, i);
  }
}

var cW = new K(() => new S);

function c() {
  return k("tengu_cheerful_horizon", !1);
}

var _ = p(() => u({
  accountUuid: o(),
  orgUuid: o(),
  status: U([ "connected", "not_connected" ])
}));

function b() {
  let e = An();
  if (!e?.organizationUuid) return;
  let n = a.CLAUDE_CODE_ORGANIZATION_UUID;
  if (n && n !== e.organizationUuid) return;
  if (QT() !== "store") return;
  return {
    accountUuid: e.accountUuid,
    orgUuid: e.organizationUuid
  };
}

function C(e, n) {
  let i = _().safeParse(e.githubWebConnectionStatusCache);
  if (!i.success || i.data.accountUuid !== n.accountUuid || i.data.orgUuid !== n.orgUuid) return;
  return i.data.status;
}

function m(e, n) {
  let i = b();
  if (!i) return;
  Ce(r => C(r, i) === e ? r : {
    ...r,
    githubWebConnectionStatusCache: {
      ...i,
      status: e
    }
  }, n);
}

export { ZKr, eqr, q6o, tqr, gTe, cW };
