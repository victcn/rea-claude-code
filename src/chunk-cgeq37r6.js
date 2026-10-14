// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import { Pu } from "./chunk-q6wab2jw.js";

var y = 2;

function D(i) {
  let e = null, l = null, a = 0, r = !1, s = null, d = 0, p = [], m = () => {
    l?.clear(), l = null;
  }, v = () => {
    if (m(), e === null) return;
    let n = e;
    l = i.setTimer(() => {
      if (l = null, e !== n) return;
      if (i.now() < n.leaseExpiresAt) {
        v();
        return;
      }
      let o = {
        ...n,
        entries: []
      };
      e = o.templates.length === 0 ? null : o;
      for (let u of [ ...i.onLeaseExpired ? [ i.onLeaseExpired ] : [], ...p ]) try {
        u(o);
      } catch (c) {
        t(`[deviceHooks] lease-expiry listener threw: ${j(c).stack ?? String(c)}`, {
          level: "error"
        });
      }
    }, Math.min(Pu, Math.max(0, n.leaseExpiresAt - i.now())));
  };
  return {
    current: () => e,
    generation: () => d,
    recordMiss(n, o) {
      if (e === null || e.instanceId !== n || o !== d) return !1;
      if (a += 1, !r && a >= y) r = !0, s = i.now();
      return r;
    },
    recordHit(n) {
      if (e !== null && e.instanceId === n) a = 0;
    },
    isAway: n => e !== null && e.instanceId === n && r,
    awaySince: n => e !== null && e.instanceId === n && r ? s : null,
    replaceOwner(n) {
      let o = e !== null && e.instanceId !== n.instanceId ? e.instanceId : void 0, u = e !== null && o === void 0, c = u && r ? s : null;
      if (e = n, !u || c !== null) a = 0, r = !1, s = null;
      return d += 1, v(), {
        ...o !== void 0 && {
          replaced: o
        },
        ...c !== null && {
          awaySince: c
        }
      };
    },
    removeOwner(n) {
      if (e === null || e.instanceId !== n) return !1;
      return e = null, a = 0, r = !1, s = null, m(), !0;
    },
    clear() {
      e = null, a = 0, r = !1, s = null, m();
    },
    onLeaseExpired(n) {
      p.push(n);
    }
  };
}

function H(i, e) {
  let l = setTimeout(i, e);
  return l.unref(), {
    clear: () => clearTimeout(l)
  };
}

export { D as createDeviceHookRegistry, H as productionRegistryTimer };
