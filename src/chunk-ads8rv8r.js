// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { ym, QA, ub, R_, da, nY } from "./chunk-z09tf6qf.js";

import { Kt, Ae, F } from "./chunk-cpyd3eya.js";

F();

async function t9n(e) {
  let n = !1, s = await QA(void 0, e, () => {
    n = !0;
  });
  return n ? null : s;
}

var h = 12e4, c = 18e5, p = 1e4, m = 3;

function S(e) {
  return !zmn(e) && e.tempo === "blocked" && e.needs !== ub;
}

function zmn(e) {
  return da(e) && !(R_(e.state) === "success" && nY(e));
}

class xze {
  #p;
  #g;
  #s=void 0;
  #m=Me();
  #h=0;
  #n=!1;
  #u=!0;
  #o=null;
  #e=null;
  #d=!1;
  #t=0;
  #i=null;
  #l=0;
  #S;
  constructor(e) {
    this.#p = e?.sweepMs ?? p, this.#g = e?.ignoredAfterMs ?? c;
    let n = e?.storageV5;
    this.#S = () => t9n(n);
  }
  getSnapshot=() => this.#s;
  subscribe=e => {
    let n = this.#m.subscribe(e);
    if (this.#h++, !this.#n) if (this.#n = !0, this.#s === void 0) this.#r(); else this.#f();
    let s = !1;
    return () => {
      if (s) return;
      if (s = !0, n(), this.#h--, this.#h === 0) this.#N();
    };
  };
  refetch=() => this.#r();
  async quiesce() {
    while (this.#e) await this.#e;
  }
  setFocused(e) {
    if (e === this.#u) return;
    if (this.#u = e, !this.#n) return;
    if (e) this.#l = 0, this.#r(); else this.#a();
  }
  recordOpenViaLeft() {
    if (this.#c(), this.#t > 0 && Date.now() - this.#t <= h) g("fleet_needs_input_nudge"), 
    this.#t = 0;
    return this.#s;
  }
  #r() {
    if (this.#a(), this.#e) return this.#d = !0, this.#e;
    return this.#e = this.#b().finally(() => {
      if (this.#e = null, this.#d) this.#d = !1, this.#r();
    }), this.#e;
  }
  async #b() {
    let e;
    try {
      e = await this.#S();
    } catch {
      e = [];
    }
    if (!this.#n) return;
    if (e !== null) this.#l = 0; else if (++this.#l <= m) {
      if (this.#l === 1) t("[fleet nudge] listing sessions failed for a reason that may pass; keeping the counts", {
        level: "warn"
      });
      if (this.#u) this.#f();
      return;
    }
    let n = e ?? [], s = 0, u = 0, d = 0, l = 0, a = ym();
    for (let o of n) {
      if (o.id === a) continue;
      if (zmn(o.state)) {
        if (u++, R_(o.state.state) === "success") d++;
        continue;
      }
      if (l++, S(o.state)) s++;
    }
    if (s === 0) this.#c(), this.#t = 0;
    let r = this.#s;
    if (r?.needsInput !== s || r?.done !== u || r?.succeeded !== d) {
      let o = r !== void 0 && s > r.needsInput;
      if (this.#s = {
        needsInput: s,
        done: u,
        succeeded: d
      }, i("tengu_fleet_nudge_state", {
        needs_input_count: s,
        done_count: u,
        succeeded_count: d,
        increased: o
      }), o) this.#t = Date.now(), this.#_();
      this.#m.emit();
    }
    if (l > 0 && this.#u) this.#f();
  }
  #f() {
    this.#a(), this.#o = setTimeout(() => void this.#r(), this.#p), this.#o.unref();
  }
  #_() {
    this.#c(), this.#i = setTimeout(() => {
      this.#i = null, f("fleet_needs_input_nudge", "ignored"), this.#t = 0;
    }, this.#g), this.#i.unref();
  }
  #a() {
    if (this.#o) clearTimeout(this.#o), this.#o = null;
  }
  #c() {
    if (this.#i) clearTimeout(this.#i), this.#i = null;
  }
  #N() {
    this.#a(), this.#d = !1, this.#n = !1;
  }
}

function mqs(e, n) {
  return e.fleetNudgeStore ??= new xze({
    storageV5: n
  }), e.fleetNudgeStore;
}

var Gmn = Kt(null);

function y_t() {
  let e = Ae(Gmn);
  if (!e) throw ReferenceError("useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}

export { t9n, zmn, xze, mqs, Gmn, y_t };
