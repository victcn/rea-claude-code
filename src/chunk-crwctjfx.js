// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { zn } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { eI } from "./chunk-n3526wzr.js";

import { jB, eP } from "./chunk-84yp45y8.js";

import { qs } from "./chunk-05wvva46.js";

import { Hp } from "./chunk-bkx9v5fh.js";

function f(r, i) {
  if (Object.hasOwn(r, i)) return r[i];
  return Object.values(r).find(n => Hp(n) && n.identity.resumableAgentId === i);
}

function Tkn(r, i) {
  return new Map([ ...r ].filter(([, n]) => {
    let e = f(i, n);
    if (e === void 0) return !1;
    if (!qs(e.status)) return !0;
    return eP(e) && "keepaliveReasons" in e && e.keepaliveReasons !== void 0 && [ ...e.keepaliveReasons ].some(s => s !== jB);
  }));
}

var Ntt = {
  markTypeInvoked() {},
  registerName() {},
  allocateName(r) {
    return r;
  },
  nameOf() {
    return;
  },
  clearTodos() {},
  setTeammate() {},
  setSendMessagePin() {}
};

function bJo(r, i) {
  return {
    markTypeInvoked(n) {
      i(e => e.agentTypesInvokedThisSession.has(n) ? e : {
        ...e,
        agentTypesInvokedThisSession: new Set(e.agentTypesInvokedThisSession).add(n)
      });
    },
    registerName(n, e) {
      if (eI(n)) {
        t(`[registerName] refused reserved or agent-id-shaped name "${n}" for ${e}`);
        return;
      }
      i(s => {
        if (s.agentNameRegistry.get(n) === e) return s;
        let a = new Map(s.agentNameRegistry);
        return a.set(n, e), {
          ...s,
          agentNameRegistry: a
        };
      });
    },
    allocateName(n) {
      let e = u(n), s = r(), a = s.agentNameRegistry, g = new Set(Object.values(s.teamContext?.teammates ?? {}).map(o => o.name));
      for (let o = 1; ;o++) {
        let m = o === 1 ? e : `${e}-${o}`;
        if (eI(m) || g.has(m)) continue;
        let d = a.get(m);
        if (d === void 0 || f(s.tasks, d) === void 0) return m;
      }
    },
    nameOf(n) {
      for (let [e, s] of r().agentNameRegistry) if (s === n) return e;
      return;
    },
    clearTodos(n) {
      i(e => {
        if (!(n in e.todos)) return e;
        let {[n]: s, ...a} = e.todos;
        return {
          ...e,
          todos: a
        };
      });
    },
    setSendMessagePin(n, e) {
      i(s => {
        let a = Object.hasOwn(s.sendMessagePins, n) ? s.sendMessagePins[n] : void 0;
        if (zn(a, e)) return s;
        return {
          ...s,
          sendMessagePins: {
            ...s.sendMessagePins,
            [n]: e
          }
        };
      });
    },
    setTeammate(n, e) {
      if (e !== void 0 && eI(e.name)) {
        t(`[setTeammate] refused reserved or agent-id-shaped teammate name "${e.name}" for ${n}`);
        return;
      }
      i(s => {
        let a = s.teamContext;
        if (!a) return s;
        let g = a.teammates?.[n];
        if (e === void 0) {
          if (!g) return s;
          let {[n]: o, ...m} = a.teammates;
          return {
            ...s,
            teamContext: {
              ...a,
              teammates: m
            }
          };
        }
        if (g === e) return s;
        return {
          ...s,
          teamContext: {
            ...a,
            teammates: {
              ...a.teammates,
              [n]: e
            }
          }
        };
      });
    }
  };
}

function u(r) {
  let i = r.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+/, "").slice(0, 64);
  return i.length > 0 ? i : "agent";
}

export { Tkn, Ntt, bJo };
