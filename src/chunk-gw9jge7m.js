// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { lt } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { ru, jUn, YUn } from "./chunk-9tdwgnpn.js";

import { LD } from "./chunk-ckm7hazr.js";

import { uTe, HKr } from "./chunk-6xfeq8na.js";

var ner = new lt(() => ({
  toolState: new LD
}));

function x6o(e, n) {
  ner.of(e).toolState = n;
}

var S = 256;

function MKr(e) {
  return e.tools.length === 0 && e.passthrough.length === 0 && e.plumbing.length === 0 && e.ignored.length === 0;
}

class Vv {
  #e=new Map;
  #o=0;
  #s=new Set;
  #h=!1;
  #p=void 0;
  #i=new Set;
  #t=new Map;
  #n=new Map;
  #l=Me();
  #c=Me();
  #m=Me();
  #r;
  constructor(e = Date.now) {
    this.#r = e;
  }
  accept(e, {instanceId: n, now: o, transport: s}) {
    let i = e.host.name, a = e.tools.filter(r => !HKr(r.name)).map(r => r.name), h = [ ...e.ignored, ...a ], d = [ ...this.#e.values() ].filter(r => r.instanceId === n).map(r => r.name);
    if (MKr(e)) {
      this.#e = y(this.#e, d);
      let r = this.#e.get(i), g = r !== void 0 && r.instanceId !== n;
      for (let f of g ? d : [ ...d, i ]) {
        if (this.#i.size < S) this.#i.add(f);
        this.#u(f);
      }
      return this.#o++, this.#g(), {
        status: "withdrawn",
        ignoredTools: h,
        removed: d,
        heldByAnother: g
      };
    }
    let u = this.#e.get(i), m = e.tools.filter(r => HKr(r.name)), p = YUn((m[0] ?? e.tools[0])?.protocol_versions ?? [ ru ]), c = {
      name: i,
      instanceId: n,
      description: e.host,
      servedTools: new Set(m.map(r => r.name)),
      plumbing: e.plumbing,
      passthrough: new Map(e.passthrough.map(r => [ r.name, r ])),
      protocol: p,
      status: "online",
      awayReason: void 0,
      asleepSince: void 0,
      takenOverAt: u === void 0 ? void 0 : u.instanceId !== n ? o : u.takenOverAt,
      lastHeardAt: o,
      lastStillHereAt: void 0,
      transport: s
    };
    this.#e = new Map([ ...y(this.#e, d), [ i, c ] ]), this.#i.delete(i);
    for (let r of d) if (r !== i) this.#u(r);
    return this.#o++, this.#f(i), this.#g(), {
      status: "announced",
      served: c.servedTools.size,
      passthroughAdopted: c.passthrough.size,
      protocolVersion: p.kind === "compatible" ? p.version : null,
      ignoredTools: h,
      displaced: u !== void 0 && u.instanceId !== n ? u.instanceId : void 0
    };
  }
  hasAnnouncedThisLife() {
    return this.#h;
  }
  withdrawnThisLife(e) {
    return this.#i.has(e);
  }
  onNextAnnounce(e) {
    return this.#s.add(e), () => {
      this.#s.delete(e);
    };
  }
  announceWaitExpired() {
    return this.#p;
  }
  markAnnounceWaitExpired(e) {
    this.#p = e;
  }
  #g() {
    this.#h = !0;
    let e = [ ...this.#s ];
    this.#s.clear();
    for (let n of e) try {
      n();
    } catch {}
  }
  heard(e, n, o) {
    let s = this.#d(e, i => ({
      ...i,
      status: "online",
      awayReason: void 0,
      asleepSince: void 0,
      lastHeardAt: n,
      lastStillHereAt: void 0,
      description: o !== void 0 && o !== i.description.epoch ? {
        ...i.description,
        epoch: o
      } : i.description
    }));
    if (s !== void 0) this.#f(s);
  }
  noteStillHere(e, n) {
    let o = this.entries().find(s => s.instanceId === e);
    if (o === void 0 || o.awayReason === "asleep") return !1;
    return this.#d(e, s => ({
      ...s,
      lastStillHereAt: Math.max(s.lastStillHereAt ?? n, n)
    })), !0;
  }
  markAway(e, n) {
    let o = this.#d(e, a => ({
      ...a,
      status: "offline",
      awayReason: a.awayReason === "asleep" ? "asleep" : n
    }));
    if (o === void 0 || this.#t.has(o)) return;
    let s = this.#n.get(o)?.toldModel ?? !1;
    this.#n.delete(o);
    let i = this.#r();
    this.#t.set(o, {
      awaySince: i,
      lastHeardAt: this.#e.get(o)?.lastHeardAt ?? i,
      toldModel: s
    }), this.#a(() => this.#l.emit({
      name: o,
      change: "away",
      toldModel: s
    }));
  }
  now() {
    return this.#r();
  }
  awayEpisode(e) {
    return this.#t.get(e);
  }
  noteModelToldAway(e) {
    let n = this.#t.get(e);
    if (n === void 0 || n.toldModel) return;
    this.#t.set(e, {
      ...n,
      toldModel: !0
    }), this.#a(() => this.#c.emit(e));
  }
  backNotePending(e) {
    return this.#n.get(e)?.toldModel === !0;
  }
  takeBackNote(e) {
    let n = this.#n.get(e);
    return this.#n.delete(e), n;
  }
  onHostStatusChange(e) {
    return this.#l.subscribe(e);
  }
  onModelToldAway(e) {
    return this.#c.subscribe(e);
  }
  onAwayEpisodeDropped(e) {
    return this.#m.subscribe(e);
  }
  #u(e) {
    if (this.#n.delete(e), !this.#t.delete(e)) return;
    this.#a(() => this.#m.emit(e));
  }
  #f(e) {
    let n = this.#t.get(e);
    if (n === void 0) return;
    this.#t.delete(e);
    let o = this.#r(), s = Math.max(0, o - n.awaySince), i = {
      backAt: o,
      awayMs: s,
      sinceHeardMs: Math.max(s, o - n.lastHeardAt),
      toldModel: n.toldModel
    };
    this.#n.set(e, i), this.#a(() => this.#l.emit({
      name: e,
      change: "back",
      ...i
    }));
  }
  #a(e) {
    try {
      e();
    } catch (n) {
      t(`[remote-tools] an away-episode listener threw: ${l(n)}`, {
        level: "error"
      });
    }
  }
  clear() {
    this.#e = new Map;
    for (let e of [ ...this.#t.keys() ]) this.#u(e);
    this.#n.clear(), this.#o++;
  }
  generation() {
    return this.#o;
  }
  entries() {
    return [ ...this.#e.values() ];
  }
  markAsleep(e, n) {
    this.#d(e, o => ({
      ...o,
      awayReason: "asleep",
      asleepSince: n,
      lastStillHereAt: void 0
    })), this.markAway(e, "probe_missed");
  }
  handleFor(e) {
    let n = this.#e.get(e);
    if (n === void 0) return;
    let {instanceId: o} = n;
    return {
      instanceId: o,
      hostName: e,
      live: () => {
        let s = this.#e.get(e);
        return s !== void 0 && s.instanceId === o ? {
          status: s.status,
          lastHeardAt: s.lastHeardAt,
          ...s.asleepSince !== void 0 && {
            asleepSince: s.asleepSince
          },
          ...s.lastStillHereAt !== void 0 && {
            lastStillHereAt: s.lastStillHereAt
          }
        } : void 0;
      },
      epoch: () => {
        let s = this.#e.get(e);
        return s !== void 0 && s.instanceId === o ? s.description.epoch : void 0;
      },
      heard: (s, i) => {
        let a = this.entries().find(h => h.instanceId === o)?.asleepSince;
        if (a === void 0 || s < a || s - a >= jUn) this.heard(o, s, i);
      },
      markAway: s => this.markAway(o, s)
    };
  }
  hostsForTable() {
    return this.entries().map(e => ({
      kind: "remote",
      source: "session",
      name: e.name,
      status: e.status,
      enforcement: "self",
      description: e.description,
      servedTools: e.servedTools,
      ...e.plumbing.some(n => uTe.has(n)) && {
        plumbingTools: new Set(e.plumbing.filter(n => uTe.has(n)))
      },
      ...e.passthrough.size > 0 && {
        passthroughTools: new Map([ ...e.passthrough.values() ].map(n => [ n.name, {
          localName: n.local_name
        } ]))
      },
      protocol: e.protocol,
      transport: e.transport,
      ...e.takenOverAt !== void 0 && {
        takenOverAt: e.takenOverAt
      },
      ...e.awayReason === "asleep" && {
        asleep: !0
      }
    }));
  }
  #d(e, n) {
    let o = this.entries().find(i => i.instanceId === e);
    if (o === void 0) return;
    let s = n(o);
    if (this.#e = new Map([ ...this.#e, [ o.name, s ] ]), s.status !== o.status || s.awayReason !== o.awayReason || s.description !== o.description) this.#o++;
    return o.name;
  }
}

function y(e, n) {
  return new Map([ ...e ].filter(([o]) => !n.includes(o)));
}

export { ner, x6o, MKr, Vv };
