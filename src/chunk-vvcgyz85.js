// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K } from "./chunk-3pqddg8f.js";

import { j, E, W } from "./chunk-b0z4bv3v.js";

import { bL } from "./chunk-ddr690nj.js";

import { Y, Xgt, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { p } from "./chunk-jkzenvsk.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { dn, zp } from "./chunk-nnrb0acr.js";

import { RPo, f_ } from "./chunk-q6wab2jw.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { Mo } from "./chunk-j90se18b.js";

import { fe } from "./chunk-dd98x6x7.js";

import { oe, T, u, $e } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { constants as w } from "fs";

import { open as M, realpath as G } from "fs/promises";

import { isAbsolute as U } from "path";

var k2r = "org-tip:", R7n = "custom-tip-", P = 500, k = 200, h = 262144, b = "Tip", B = /^[A-Za-z0-9._-]{1,64}$/, H = 40, N = [ "policySettings", "flagSettings", "userSettings" ], X = [ ...zp ], J = "org-tip:file:", Z = new Set([ "EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE" ]), q = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;

function L(e) {
  return Xgt(e).replace(/[\t\n\r\u2028\u2029]+/g, " ").replace(q, "").replace(/ {2,}/g, " ").trim();
}

function Q(e) {
  if (e === void 0) return b;
  let i = ne(L(e), H);
  return i === "" ? b : i;
}

var V = p(() => $e([ T(oe()), u({
  tips: T(oe())
}).transform(e => e.tips) ]));

async function ee(e) {
  try {
    let i = O() === "windows" ? 0 : w.O_NOFOLLOW | w.O_NONBLOCK, r = await M(await G(e), w.O_RDONLY | i), n;
    try {
      let f = await r.stat();
      if (!f.isFile()) return m("tips_org_tips_file_load", "not_regular_file"), t(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      if (f.size > h) return m("tips_org_tips_file_load", "too_large"), t(`spinnerTipsOverride.tipsFile ${e} is larger than ${h} bytes; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      let c = Buffer.alloc(h + 1), {bytesRead: _} = await r.read(c, 0, c.length, 0);
      if (_ > h) return m("tips_org_tips_file_load", "too_large"), {
        entries: [],
        transient: !1
      };
      n = Mo(c.toString("utf8", 0, _));
    } finally {
      await r.close();
    }
    let l = V().safeParse(Y(n)), d = l.success ? RPo().parse(l.data) : void 0;
    if (d === void 0) return m("tips_org_tips_file_load", "wrong_shape"), t(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, {
      level: "warn"
    }), {
      entries: [],
      transient: !1
    };
    return g("tips_org_tips_file_load"), {
      entries: d,
      transient: !1
    };
  } catch (i) {
    let r = E(i), n = W(i) ? "not_found" : r === "ELOOP" || r === "EISDIR" ? "not_regular_file" : i instanceof SyntaxError ? "parse_failed" : "read_failed";
    return m("tips_org_tips_file_load", n), t(W(i) ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded` : `spinnerTipsOverride.tipsFile ${e} could not be read: ${j(i).message}`, {
      level: "warn"
    }), {
      entries: [],
      transient: r !== void 0 && Z.has(r)
    };
  }
}

class A {
  #e=new Map;
  get size() {
    return this.#e.size;
  }
  read(e) {
    let i = this.#e.get(e);
    if (i) return i;
    let r = ee(e).then(n => {
      if (n.transient) this.#e.delete(e);
      return n;
    });
    return this.#e.set(e, r), r;
  }
}

var te = new K(() => new A);

function ie() {
  if (f_()?.spinnerTipsOverride?.tipsFile) return t("spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json", {
    level: "warn"
  }), !0;
  return !1;
}

function re(e) {
  if (!e) return;
  if (!U(e) && e !== "~" && !e.startsWith("~/")) {
    t(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, {
      level: "warn"
    });
    return;
  }
  if (bL(e)) {
    t("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", {
      level: "warn"
    });
    return;
  }
  try {
    let i = ot(e);
    return bL(i) ? void 0 : i;
  } catch (i) {
    t(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${j(i).message}`, {
      level: "warn"
    });
    return;
  }
}

function I(e) {
  let i = [];
  for (let r of e) {
    if (!dn(r)) continue;
    let n = fe(r)?.spinnerTipsOverride;
    if (n) i.push({
      source: r,
      override: n
    });
  }
  return i;
}

function C(e, i) {
  return e.find(r => r.override[i] !== void 0)?.override[i];
}

function Jke() {
  let e = I(N);
  if (C(e, "excludeDefault") !== !0) return !1;
  return e.some(i => !!i.override.tipsFile) || e.some(i => (i.override.tips?.length ?? 0) > 0);
}

async function B_n(e) {
  let i = I(N), r = I(X);
  if (i.length === 0 && r.length === 0) return {
    tips: [],
    trustedCount: 0
  };
  let n = Q(C(i, "label")), l = i.find(s => !!s.override.tipsFile), d = l?.source, f = re(d === "policySettings" && ie() ? void 0 : l?.override.tipsFile);
  for (let {source: s, override: o} of r) if (o.tipsFile || o.label !== void 0) t(`spinnerTipsOverride.tipsFile/label in ${s} are ignored; set them in user or managed settings`, {
    level: "warn"
  });
  let c = f ? (await te.of(e).read(f)).entries : [], _ = new Set, v = [], F = (s, o, a, S, D) => {
    if (v.length >= k) return;
    let y = L(o);
    if (y === "") {
      t(`spinnerTipsOverride: tip "${s}" is empty after sanitizing; dropped`, {
        level: "warn"
      });
      return;
    }
    if (y.length > P) {
      t(`spinnerTipsOverride: tip "${s}" is longer than ${P} characters; dropped`, {
        level: "warn"
      });
      return;
    }
    if (_.has(s)) {
      t(`spinnerTipsOverride: duplicate tip id "${s}"; keeping the first`, {
        level: "warn"
      });
      return;
    }
    _.add(s), v.push({
      id: s,
      label: D,
      content: async () => y,
      cooldownSessions: a,
      priority: S,
      isRelevant: async () => !0,
      providerAgnostic: !0
    });
  }, x = 0;
  for (let {source: s, override: o} of i) {
    for (let a of o.tips ?? []) R(a, `${R7n}${x++}`, n, F);
    if (s === d) c.forEach((a, S) => R(a, `${J}${S}`, n, F));
  }
  let z = v.length;
  for (let {source: s, override: o} of r) for (let a of o.tips ?? []) {
    let S = `${R7n}${x++}`;
    if (typeof a === "string") R(a, S, b, F); else t(`spinnerTipsOverride: object tip entries in ${s} are ignored; only plain strings are read from project settings`, {
      level: "warn"
    });
  }
  return {
    tips: v,
    trustedCount: z
  };
}

function R(e, i, r, n) {
  if (typeof e === "string") {
    n(i, e, 0, 0, r);
    return;
  }
  if (typeof e.text !== "string") {
    t('spinnerTipsOverride: tip object without a "text" string; dropped', {
      level: "warn"
    });
    return;
  }
  if (typeof e.id !== "string" || !B.test(e.id)) {
    t('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', {
      level: "warn"
    });
    return;
  }
  let l = typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0 ? Math.min(e.cooldownSessions, 1e3) : 0, d = typeof e.priority === "number" && Number.isFinite(e.priority) ? Math.max(-10, Math.min(10, Math.trunc(e.priority))) : 0;
  n(`${k2r}${e.id}`, e.text, l, d, r);
}

export { k2r, R7n, Jke, B_n };
