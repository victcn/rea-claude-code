// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { Nn, Ar } from "./chunk-jb3h1y0s.js";

import { M1t, x9n, an, st } from "./chunk-3vw306fv.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Kt, ae, Ae, P, y, F } from "./chunk-cpyd3eya.js";

import { klt } from "./chunk-q93rjfj5.js";

F();

function HL() {
  return klt();
}

function E9n() {
  return HL();
}

function I() {
  return {
    clearTimer: {
      current: null
    },
    mountCount: {
      current: 0
    }
  };
}

function L7e(o, n) {
  let s = o.current?.key === n, p = o.queue.some(i => i.key === n), d = o.pinned.some(i => i.key === n);
  if (!s && !p && !d) return o;
  return {
    current: s ? null : o.current,
    queue: o.queue.filter(i => i.key !== n),
    pinned: d ? o.pinned.filter(i => i.key !== n) : o.pinned
  };
}

function Zj(o) {
  return o.diffPanelVisible || o.paneHoldsToasts;
}

function mke(o, n) {
  return o !== null && (!n || o.exemptFromDiffPanelHold === !0);
}

var h = 8e3, C = Kt(null);

function k9n(o) {
  let p = w(3), {children: n} = o, [s] = y(I), d;
  if (p[0] !== n || p[1] !== s) d = e(C.Provider, {
    value: s,
    children: n
  }), p[0] = n, p[1] = s, p[2] = d; else d = p[2];
  return d;
}

function R({presentationContext: o, isScreenReaderEnabled: n}) {
  return E9n() && !n && x9n(o) === "fullscreen";
}

function T(o) {
  return "queue";
}

function vo() {
  let o = Ar(), n = Nn(), s = an(), p = Ae(C), [d] = y(() => ({
    clearTimer: {
      current: null
    },
    mountCount: {
      current: 0
    }
  })), {clearTimer: i, mountCount: g} = p ?? d, N = Ae(M1t), k = st(), l = ae(() => {
    let a = R({
      presentationContext: N,
      isScreenReaderEnabled: k
    });
    n(r => {
      let t = a ? r.notifications.queue.filter(c => T(c.key) === "queue") : r.notifications.queue, u = t.length === r.notifications.queue.length ? r : {
        ...r,
        notifications: {
          ...r.notifications,
          queue: t
        }
      }, f = E(Zj(u) ? u.notifications.queue.filter(c => c.exemptFromDiffPanelHold) : u.notifications.queue);
      if (!f) return u;
      let m = u.notifications.current !== null && f.priority === "immediate" && f.heldDuringDiffPanel === !0 && u.notifications.current.priority !== "immediate" ? u.notifications.current : null;
      if (u.notifications.current !== null && m === null) return u;
      let b = f.key;
      return i.current?.(), i.current = s.setTimeout(() => {
        i.current = null, n(c => {
          if (c.notifications.current?.key !== b) return c;
          return {
            ...c,
            notifications: {
              ...c.notifications,
              current: null
            }
          };
        }), l();
      }, f.timeoutMs ?? h), {
        ...u,
        notifications: {
          ...u.notifications,
          queue: [ ...m !== null && S(m, f) ? [ m ] : [], ...u.notifications.queue.filter(c => c !== f) ],
          current: f.heldDuringDiffPanel ? {
            ...f,
            heldDuringDiffPanel: void 0
          } : f
        }
      };
    });
  }, [ n, i, s, N, k ]), D = ae(a => {
    if (R({
      presentationContext: N,
      isScreenReaderEnabled: k
    }) && T(a.key) === "suppress") return;
    if (a.pinned) {
      n(t => {
        if (t.notifications.pinned.some(u => u.key === a.key)) return t;
        return {
          ...t,
          notifications: {
            ...t.notifications,
            pinned: [ ...t.notifications.pinned, a ]
          }
        };
      });
      return;
    }
    if (a.priority === "immediate" && a.waitsItsTurn !== !0 && !Zj(o.getState())) {
      if (i.current) i.current(), i.current = null;
      i.current = s.setTimeout(() => {
        i.current = null, n(t => {
          if (t.notifications.current?.key !== a.key) return t;
          return {
            ...t,
            notifications: {
              ...t.notifications,
              queue: t.notifications.queue.filter(u => !a.invalidates?.includes(u.key)),
              current: null
            }
          };
        }), l();
      }, a.timeoutMs ?? h), n(t => ({
        ...t,
        notifications: {
          ...t.notifications,
          current: a,
          queue: [ ...t.notifications.current ? [ t.notifications.current ] : [], ...t.notifications.queue ].filter(u => S(u, a))
        }
      }));
      return;
    }
    let r = a.priority === "immediate" ? {
      ...a,
      heldDuringDiffPanel: !0
    } : a;
    n(t => {
      if (r.fold && t.notifications.current?.key === r.key) {
        let c = r.fold(t.notifications.current, r);
        if (i.current) i.current(), i.current = null;
        let x = c.key;
        return i.current = s.setTimeout(() => {
          i.current = null, n(q => {
            if (q.notifications.current?.key !== x) return q;
            return {
              ...q,
              notifications: {
                ...q.notifications,
                current: null
              }
            };
          }), l();
        }, c.timeoutMs ?? h), {
          ...t,
          notifications: {
            ...t.notifications,
            current: c
          }
        };
      }
      let u = r.fold ? t.notifications.queue.findIndex(c => c.key === r.key) : -1;
      if (r.fold && u !== -1) {
        let c = r.fold(t.notifications.queue[u], r), x = [ ...t.notifications.queue ];
        return x[u] = c, {
          ...t,
          notifications: {
            ...t.notifications,
            queue: x
          }
        };
      }
      if (!(!new Set(t.notifications.queue.map(c => c.key)).has(r.key) && t.notifications.current?.key !== r.key)) return t;
      let b = t.notifications.current !== null && r.invalidates?.includes(t.notifications.current.key);
      if (b && i.current) i.current(), i.current = null;
      return {
        ...t,
        notifications: {
          ...t.notifications,
          current: b ? null : t.notifications.current,
          queue: [ ...t.notifications.queue.filter(c => S(c, r)), r ]
        }
      };
    }), l();
  }, [ n, l, i, s, N, k ]), H = ae(a => {
    n(r => {
      let t = L7e(r.notifications, a);
      if (t === r.notifications) return r;
      if (r.notifications.current?.key === a && i.current) i.current(), i.current = null;
      return {
        ...r,
        notifications: t
      };
    }), l();
  }, [ n, l, i ]);
  return P(() => {
    if (g.current++, o.getState().notifications.queue.length > 0) l();
    return () => {
      if (g.current--, g.current === 0 && i.current) i.current(), i.current = null;
    };
  }, []), {
    addNotification: D,
    removeNotification: H,
    processQueue: l
  };
}

var k_t = {
  immediate: 0,
  high: 1,
  medium: 2,
  low: 3
};

function S(o, n) {
  return (o.priority !== "immediate" || o.requeueOnPreempt === !0 || o.heldDuringDiffPanel === !0) && !n.invalidates?.includes(o.key);
}

function E(o) {
  if (o.length === 0) return;
  return o.reduce((n, s) => k_t[s.priority] < k_t[n.priority] ? s : n);
}

export { HL, E9n, L7e, Zj, mke, k9n, vo, k_t };
