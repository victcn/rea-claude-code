// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { Fn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l, E, $y, tm } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { t } from "./chunk-kawq2919.js";

import { Re } from "./chunk-jzzyv7tj.js";

import { V } from "./chunk-jb3h1y0s.js";

import { i$ } from "./chunk-sfvypv11.js";

import { B_s, j_s, rE, yP, SN, W_s, aH } from "./chunk-pegykqwq.js";

import { nre } from "./chunk-84yp45y8.js";

import { Kt, Ae, P, F } from "./chunk-cpyd3eya.js";

import { yt } from "./chunk-9zhz923g.js";

F();

import { watch as b } from "fs";

var g = 5e3, T = 50, f = 5e3;

class b9n {
  #c=void 0;
  #d=!1;
  #n=null;
  #f=null;
  #i=!1;
  #o=null;
  #p=!1;
  #l=null;
  #t=null;
  #b=null;
  #y=Me();
  #g=0;
  #a=!1;
  #r;
  #s;
  #e={
    phase: "idle"
  };
  #R=0;
  #S=0;
  #m=0;
  #E;
  constructor(s, i = globalThis, e = () => {}) {
    this.#r = z() && s !== void 0 ? s : void 0, this.#s = i, this.#E = e;
  }
  #w(s) {
    let i = this.#d;
    if (this.#d = s, s && !i) this.#E();
  }
  getSnapshot=() => this.#d ? void 0 : this.#c;
  subscribe=s => {
    let i = this.#y.subscribe(s);
    if (this.#g++, !this.#a) this.#a = !0, this.#b = B_s(this.#h), this.#k();
    let e = !1;
    return () => {
      if (e) return;
      if (e = !0, i(), this.#g--, this.#g === 0) this.#L();
    };
  };
  #V() {
    this.#y.emit();
  }
  #F(s) {
    if (this.#r) {
      this.#T(this.#r, s, !1);
      return;
    }
    let i = SN(s);
    if (i === this.#f && this.#n !== null) return;
    this.#n?.close(), this.#n = null, this.#f = i;
    try {
      let e = b(i, this.#h);
      e.on("error", r => {
        if (t(`Task list watcher error: ${l(r)}`, {
          level: "warn"
        }), this.#n === e) {
          if (this.#f = null, this.#i = !0, this.#t === null) this.#t = this.#s.setTimeout(this.#h, f), 
          this.#t.unref();
        }
      }), e.unref(), this.#n = e, this.#i = !1;
    } catch {}
  }
  #T(s, i, e) {
    let r = this.#e;
    if (r.phase !== "idle" && r.listId === i && !e) return;
    if (r.phase === "live") r.subscription.unsubscribe();
    let n = ++this.#m;
    this.#e = {
      phase: "subscribing",
      listId: i,
      generation: n,
      endedEarly: !1
    }, this.#i = !0, this.#u();
    let h = (o, p) => {
      if (n !== this.#m) {
        o?.unsubscribe();
        return;
      }
      let c = this.#e;
      if (o && c.phase === "subscribing" && c.endedEarly) {
        if (o.unsubscribe(), e) this.#v(i); else this.#T(s, i, !0);
        return;
      }
      if (o) {
        this.#e = {
          phase: "live",
          listId: i,
          generation: n,
          subscription: o,
          onRetry: e
        }, this.#i = !1, this.#h();
        return;
      }
      if (t(`Task list subscription unavailable: ${p}`, {
        level: "warn"
      }), e) {
        this.#v(i);
        return;
      }
      this.#e = {
        phase: "idle"
      }, this.#i = !0, this.#u();
    }, a;
    try {
      a = s.subscribe({
        target: "scope",
        scope: {
          namespace: "task",
          listId: yP(i)
        }
      }, o => this.#x(o, n));
    } catch (o) {
      h(null, l(o));
      return;
    }
    a.then(o => o.ok ? h(o.value) : h(null, yt(o.error)), o => h(null, l(o)));
  }
  #x(s, i) {
    let e = this.#e;
    if (e.phase === "subscribing" && e.generation === i && !s.ok) {
      e.endedEarly = !0;
      return;
    }
    if (!this.#a || e.phase !== "live" || e.generation !== i) return;
    if (s.ok) {
      e.onRetry = !1, this.#h();
      return;
    }
    if (t(`Task list subscription ended: ${yt(s.error)}`, {
      level: "warn"
    }), e.onRetry || !this.#r) {
      e.subscription.unsubscribe(), this.#v(e.listId);
      return;
    }
    this.#T(this.#r, e.listId, !0);
  }
  #v(s) {
    this.#m++, this.#e = {
      phase: "givenUp",
      listId: s
    }, this.#i = !0, this.#h();
  }
  #u() {
    if (!this.#a) return;
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#t = this.#s.setTimeout(this.#h, f), this.#t.unref();
  }
  #h=() => {
    if (this.#l) this.#s.clearTimeout(this.#l);
    this.#l = this.#s.setTimeout(() => void this.#k(), T), this.#l.unref();
  };
  refetch=() => this.#k();
  #k=async () => {
    let s = ++this.#R, i = rE();
    this.#F(i);
    let e;
    try {
      e = await W_s(i, this.#r);
    } catch (a) {
      t(`Task list read failed: ${l(a)}`, {
        level: "warn"
      }), e = null;
    }
    if (this.#r && s < this.#S) return;
    if (this.#S = s, e === null) {
      if (this.#a) this.#i = !0, this.#u();
      return;
    }
    if (this.#e.phase === "live") this.#i = !1;
    let r = e.filter(a => !a.metadata?._internal);
    if (!this.#a) return;
    let n = r.some(a => a.status !== "completed"), h = !k(this.#c, r);
    if (h) this.#c = r;
    if (n || r.length === 0) this.#w(r.length === 0), this.#C(); else if (this.#o === null && !this.#d) if (this.#p) t("Task list reset still in flight; not arming another hide until it settles", {
      level: "verbose"
    }); else this.#o = this.#s.setTimeout(this.#B.bind(this, i), g), this.#o.unref();
    if (h) this.#V();
    if (this.#t) this.#s.clearTimeout(this.#t), this.#t = null;
    if (n || this.#i) {
      if (this.#e.phase === "live") return;
      this.#u();
    }
  };
  #B(s) {
    this.#o = null;
    let i = rE();
    if (i !== s) return;
    this.#p = !0, aH(i, this.#r).then(async e => {
      if (e.length > 0 && e.every(n => n.status === "completed") && await j_s(i, this.#r)) this.#c = [], 
      this.#w(!0);
      this.#V();
    }).catch(e => {
      if (this.#r) this.#u();
      if (E(e) === "ELOCKED") {
        t("Task list lock is busy (another session or process sharing this task list, or an in-flight task write, holds it); completed tasks stay visible and the reset is retried on the next refresh");
        return;
      }
      if (tm(e) || $y(e)) {
        t(`Task list reset failed on the tasks directory and will be retried on the next refresh: ${l(e)}`, {
          level: "warn"
        });
        return;
      }
      d(e);
    }).finally(() => {
      this.#p = !1;
    });
  }
  #C() {
    if (this.#o) this.#s.clearTimeout(this.#o), this.#o = null;
  }
  #L() {
    if (this.#n?.close(), this.#n = null, this.#e.phase === "live") this.#e.subscription.unsubscribe();
    if (this.#e = {
      phase: "idle"
    }, this.#m++, this.#f = null, this.#b?.(), this.#b = null, this.#C(), this.#l) this.#s.clearTimeout(this.#l);
    if (this.#t) this.#s.clearTimeout(this.#t);
    this.#l = null, this.#t = null, this.#i = !1, this.#a = !1;
  }
}

var S9n = Kt(null), v = () => {};

function u() {
  let s = Ae(S9n), i = V(r => r.teamContext);
  if (!(nre() && !Fn() && (!i || i$(i)))) return null;
  if (!s) throw ReferenceError("useTasksV2 cannot be called outside of a TasksV2StoreContext provider (mounted by <AppStateProvider />)");
  return s;
}

function zae() {
  return Re(u());
}

function QUr() {
  let s = u();
  P(() => {
    if (!s) return;
    return s.subscribe(v);
  }, [ s ]);
}

function TWo() {
  return Re(u(), y) ?? !1;
}

function k(s, i) {
  if (s === void 0 || s.length !== i.length) return !1;
  for (let e = 0; e < i.length; e++) {
    let r = s[e], n = i[e];
    if (r.id !== n.id || r.status !== n.status || r.subject !== n.subject || r.activeForm !== n.activeForm || r.owner !== n.owner || r.description !== n.description || !m(r.blockedBy, n.blockedBy) || !m(r.blocks, n.blocks)) return !1;
  }
  return !0;
}

function m(s, i) {
  if (s.length !== i.length) return !1;
  for (let e = 0; e < s.length; e++) if (s[e] !== i[e]) return !1;
  return !0;
}

function y(s) {
  return s !== void 0 && s.length > 0;
}

export { b9n, S9n, zae, QUr, TWo };
