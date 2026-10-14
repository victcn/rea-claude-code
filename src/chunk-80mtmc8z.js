// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { i } from "./chunk-hedpgw9m.js";

import { bt } from "./chunk-kawq2919.js";

import { gr } from "./chunk-z52kmxx4.js";

import { Hj } from "./chunk-5brm0azz.js";

import { readFile as u } from "fs/promises";

function TCo(t, e) {
  a().registerAttributor(t, e);
}

var c = [ "bash_shell", "mcp_stdio", "lsp", "other" ];

class m {
  attributors=new Map;
  childProcesses=new Map;
  childRegisteredCount=0;
  pageSizeBytes=void 0;
  installed=!1;
  emitted=!1;
  unregisterCleanup=void 0;
  registerAttributor(t, e) {
    this.attributors.set(t, e);
  }
  registerChild(t, e) {
    let s = this.childProcesses.get(e);
    if (s && !s.dead) return;
    this.childRegisteredCount++;
    let r = {
      kind: t,
      peakRssBytes: 0,
      dead: !1
    };
    this.childProcesses.set(e, r), this.readChildRssBytes(e).then(n => {
      if (n !== void 0 && n > r.peakRssBytes) r.peakRssBytes = n;
    });
  }
  async sampleChildPeaks() {
    if (this.childProcesses.size === 0) return;
    let t = [ ...this.childProcesses.entries() ].filter(([, e]) => !e.dead);
    await Promise.all(t.map(async ([e, s]) => {
      let r = await this.readChildRssBytes(e);
      if (r === void 0) s.dead = !0; else if (r > s.peakRssBytes) s.peakRssBytes = r;
    }));
  }
  async readChildRssBytes(t) {
    try {
      let e = await u(`/proc/${t}/statm`, "utf8"), s = Number(e.split(" ")[1]);
      return Number.isFinite(s) ? s * await this.getPageSizeBytes() : void 0;
    } catch {
      return;
    }
  }
  async getPageSizeBytes() {
    if (this.pageSizeBytes !== void 0) return this.pageSizeBytes;
    let t = 4096;
    try {
      let e = process.memoryUsage().rss, s = await u("/proc/self/statm", "utf8"), r = Number(s.split(" ")[1]), n = 2 ** Math.round(Math.log2(e / r));
      if (Number.isFinite(n) && n > 0) t = n;
    } catch {}
    return this.pageSizeBytes ??= t, this.pageSizeBytes;
  }
  async buildSummary(t) {
    let e = process.memoryUsage(), s = {
      uptime_s: Math.round(process.uptime()),
      final_rss_bytes: e.rss,
      final_heap_used_bytes: e.heapUsed,
      final_external_bytes: e.external,
      final_array_buffers_bytes: e.arrayBuffers,
      peak_rss_bytes: Math.max(t.rss, e.rss),
      peak_heap_used_bytes: Math.max(t.heapUsed, e.heapUsed),
      peak_external_bytes: Math.max(t.external, e.external),
      constrained_memory_bytes: process.constrainedMemory?.() || void 0
    };
    for (let [o, l] of this.attributors) try {
      let d = l();
      if (s[`attr_${o}_entries`] = d.entries, d.bytes !== void 0) s[`attr_${o}_bytes`] = d.bytes;
    } catch {}
    await this.sampleChildPeaks();
    let r = 0, n = {};
    for (let o of this.childProcesses.values()) r += o.peakRssBytes, n[o.kind] = (n[o.kind] ?? 0) + o.peakRssBytes;
    s.child_count = this.childRegisteredCount, s.child_rss_bytes_total = r;
    for (let o of c) if (n[o] !== void 0) s[`child_${o}_rss_bytes`] = n[o];
    return s;
  }
  async emitSummaryOnce(t) {
    if (this.emitted) return;
    this.emitted = !0;
    try {
      i("tengu_sdk_memory_summary", await this.buildSummary(t()));
    } catch {}
  }
  installExitSummary(t) {
    if (this.installed) return;
    this.installed = !0, this.unregisterCleanup = bt(() => this.emitSummaryOnce(t));
  }
  reset() {
    this.installed = !1, this.emitted = !1, this.unregisterCleanup?.(), this.unregisterCleanup = void 0, 
    this.attributors.clear(), this.childProcesses.clear(), this.childRegisteredCount = 0;
  }
}

var h = new K(() => new m);

function a() {
  return h.of(B().host);
}

function Ift(t, e) {
  if (!Hj() || gr()) return;
  if (!Number.isFinite(e) || e <= 0) return;
  a().registerChild(t, e);
}

function _Ds(t) {
  let e = a().childProcesses.get(t);
  if (e) e.dead = !0;
}

function bDs() {
  return a().sampleChildPeaks();
}

function SDs(t) {
  a().installExitSummary(t);
}

export { TCo, Ift, _Ds, bDs, SDs };
