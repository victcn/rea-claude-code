// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { z } from "./chunk-bmq0vae0.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { or } from "./chunk-w0q7jqcp.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { o, T, u, A } from "./chunk-cvcg6n1z.js";

import { dirname as g, join as w } from "path";

var b = 50, D = p(() => u({
  version: A(1),
  sessions: T(u({
    id: o(),
    reason: o(),
    at: o()
  }))
})), c = "device-unbound-creates";

function d() {
  return w(Ee(), "state", `${c}.json`);
}

async function f(r) {
  let i = await r.readText();
  if (i === void 0) return [];
  let n = y(i);
  if (!n.success) return [];
  let e = await r.retentionCutoff();
  return e === null ? n.data.sessions : n.data.sessions.filter(s => !v(s.at, e));
}

function y(r) {
  try {
    return D().safeParse(Y(r));
  } catch {
    return {
      success: !1
    };
  }
}

function v(r, i) {
  let n = Date.parse(r);
  return Number.isNaN(n) || n < i.getTime();
}

async function OYs(r, i, n) {
  try {
    let e = or(r), a = [ ...(await f(n)).filter(m => or(m.id) !== e), {
      id: e,
      reason: i,
      at: n.now().toISOString()
    } ].slice(-b);
    await n.writeText(_({
      version: 1,
      sessions: a
    }, null, 2) + `\n`);
  } catch (e) {
    t(`[deviceBind] unbound create not recorded (${l(e)})`);
  }
}

async function x6r(r, i, n) {
  try {
    let e = or(r), s = (await f(n)).find(a => or(a.id) === e);
    return s !== void 0 && i(s.reason) ? s.reason : void 0;
  } catch (e) {
    t(`[deviceBind] unbound-create record unreadable (${l(e)})`);
    return;
  }
}

function P6r(r) {
  let i = z() && r !== void 0 ? r : void 0, n = Fe.state(c);
  return {
    readText: async () => {
      if (i) {
        let e = await i.readText([ n ]);
        if (!e.ok) throw Error("device unbound-creates read failed");
        let s = e.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await gn().read(d());
      } catch (e) {
        if (W(e)) return;
        throw e;
      }
    },
    writeText: async e => {
      if (i) {
        if (!(await i.write(n, e, {
          mode: 384
        })).ok) throw Error("device unbound-creates write failed");
        return;
      }
      let s = d();
      await gn().mkdir(g(s), 448), await gn().atomicWrite(s, e, 384);
    },
    now: () => new Date,
    retentionCutoff: async () => {
      let e = await import("./chunk-db60tbw4.js");
      return await e.isRetentionCleanupSafe(r) ? e.getCutoffDate() : null;
    }
  };
}

export { OYs, x6r, P6r };
