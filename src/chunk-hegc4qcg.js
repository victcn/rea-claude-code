// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mr, Fe } from "./chunk-0cdqg49t.js";

import { W } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { r$t, Qf, PE } from "./chunk-60c97a4m.js";

import { p } from "./chunk-jkzenvsk.js";

import { aL } from "./chunk-w0q7jqcp.js";

import { m7t } from "./chunk-rshryz75.js";

import { o, v, T, u, $e, U, A } from "./chunk-cvcg6n1z.js";

import { yt } from "./chunk-9zhz923g.js";

import { mkdir as I, readFile as w, stat as y, unlink as j } from "fs/promises";

import { dirname as B, join as x } from "path";

var h = 50, l1s = 144e5, b = 6048e5;

function k(e, r, n) {
  return m7t() && Boolean(e?.length) && r !== void 0 && u1s(r, n, b);
}

function d1s(e, r) {
  return k(e.projectThreadSessionIds, e.projectThreadSessionIdsPersistedAt, r) ? e.projectThreadSessionIds : void 0;
}

function c1s(e, r) {
  return k(e.parkedProjectThreadSessionIds, e.parkedProjectThreadSessionIdsPersistedAt, r) ? e.parkedProjectThreadSessionIds ?? [] : [];
}

function E(e, r, n) {
  if (r?.projectThreadResume && (d1s(e, n) !== void 0 || c1s(e, n).length > 0)) return b;
  return l1s;
}

var xqs = 9e5, M = 12e4;

function u1s(e, r, n) {
  return r - e <= n && e - r <= M;
}

var nbt = 64, f = p(() => o().max(256).refine(aL)), R = p(() => u({
  sessionId: $e([ A(""), f() ]),
  environmentId: f(),
  source: U([ "standalone", "repl" ]),
  pid: v().optional(),
  procStart: o().optional(),
  activeSessionIds: T(f()).max(nbt).optional(),
  activeSessionIdsPersistedAt: v().int().min(0).max(864e13).optional(),
  projectThreadSessionIds: T(f()).max(nbt).optional(),
  parkedProjectThreadSessionIds: T(f()).max(nbt).optional(),
  parkedProjectThreadSessionIdsPersistedAt: v().int().min(0).max(864e13).optional(),
  projectThreadSessionIdsPersistedAt: v().int().min(0).max(864e13).optional()
}));

function P(e) {
  return x(Qf(), PE(e), "bridge-pointer.json");
}

function S(e) {
  let r = PE(e);
  return mr(r) ? Fe.bridgePointer(r) : null;
}

async function Pqs(e, r, n) {
  let s = P(e), i = z() && n !== void 0 ? S(e) : null;
  if (z() && n !== void 0 && i) {
    let d = await n.write(i, _(r), {
      mode: 438 & ~process.umask()
    });
    if (!d.ok) return t(`[bridge:pointer] write failed: ${yt(d.error)}`, {
      level: "warn"
    }), !1;
    return t(`[bridge:pointer] wrote ${s}`), !0;
  }
  try {
    return await I(B(s), {
      recursive: !0
    }), await Tn(s, _(r)), t(`[bridge:pointer] wrote ${s}`), !0;
  } catch (d) {
    return t(`[bridge:pointer] write failed: ${d}`, {
      level: "warn"
    }), !1;
  }
}

function Iqs() {
  let e = Promise.resolve();
  return r => (e = e.then(r, r), e);
}

async function c2o(e, r, n) {
  let s = P(e), i, d, g = n ? S(e) : null;
  if (n && g) {
    let l = await n.read([ g ]);
    if (!l.ok || !l.value.items[0].found) return null;
    d = l.value.items[0].mtimeMs, i = Buffer.from(l.value.items[0].value).toString("utf8");
  } else try {
    d = (await y(s)).mtimeMs, i = await w(s, "utf8");
  } catch {
    return null;
  }
  let m = R().safeParse(O(i));
  if (!m.success) {
    if (!r?.noClear) t(`[bridge:pointer] invalid schema, clearing: ${s}`), await u2o(e, n);
    return null;
  }
  let c = Date.now(), a = Math.max(0, c - d);
  if (!r?.ignoreTtl && a > E(m.data, r, c)) {
    if (!r?.noClear) t(`[bridge:pointer] stale mtime, clearing: ${s}`), await u2o(e, n);
    return null;
  }
  return {
    ...m.data,
    ageMs: a
  };
}

async function Oqs(e, r, n) {
  let s = await c2o(e, n, r);
  if (s) return {
    pointer: s,
    dir: e
  };
  let i = await r$t(e);
  if (i.length <= 1) return null;
  if (i.length > h) return t(`[bridge:pointer] ${i.length} worktrees exceeds fanout cap ${h}, skipping`), 
  null;
  let d = PE(e), g = i.filter(a => PE(a) !== d), m = await Promise.all(g.map(async a => {
    let l = await c2o(a, void 0, r);
    return l ? {
      pointer: l,
      dir: a
    } : null;
  })), c = null;
  for (let a of m) if (a && (!c || a.pointer.ageMs < c.pointer.ageMs)) c = a;
  if (c) t(`[bridge:pointer] fanout found pointer in worktree ${c.dir} (ageMs=${c.pointer.ageMs})`);
  return c;
}

async function u2o(e, r) {
  let n = P(e), s = r ? S(e) : null;
  if (r && s) {
    let i = await r.delete(s);
    if (i.ok || i.error.code === "NotFound") t(`[bridge:pointer] cleared ${n}`); else t(`[bridge:pointer] clear failed: ${yt(i.error)}`, {
      level: "warn"
    });
    return;
  }
  try {
    await j(n), t(`[bridge:pointer] cleared ${n}`);
  } catch (i) {
    if (!W(i)) t(`[bridge:pointer] clear failed: ${i}`, {
      level: "warn"
    });
  }
}

function O(e) {
  try {
    return Y(e);
  } catch {
    return null;
  }
}

export { l1s, d1s, c1s, xqs, u1s, nbt, Pqs, Iqs, c2o, Oqs, u2o };
