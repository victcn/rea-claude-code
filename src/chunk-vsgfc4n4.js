// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, Ze } from "./chunk-3pqddg8f.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { k } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Tnt } from "./chunk-aj4zk58p.js";

import { MEt, HEt, Ant } from "./chunk-45hk2ecv.js";

import { lwe } from "./chunk-2mq6q9dt.js";

import { Nnt } from "./chunk-fa4dpg2m.js";

import { Bnt, eKe } from "./chunk-b154cm67.js";

import { n3 } from "./chunk-a38pss7p.js";

import { Ri } from "./chunk-4b2xazcw.js";

var s = 32, f = 64, l = "session-inbox-unread", p = new Set([ "request_failed", "http_error", "owner_unverified" ]);

function a() {
  return k("tengu_bridge_inbox_pointer_boundary", !0);
}

class c {
  tracked=new Map;
  announcedAsOwners=new Set;
  noteOwnerAnnounced({inboundOrigin: o, wake: e}) {
    if (o !== Bnt || e === void 0 || !Ant(e)) return;
    let n = e.data.file_id;
    if (typeof n !== "string" || !Nnt.test(n)) return;
    if (this.announcedAsOwners.delete(n), this.announcedAsOwners.size >= f) {
      let i = this.announcedAsOwners.values().next().value;
      if (i !== void 0) this.announcedAsOwners.delete(i);
    }
    this.announcedAsOwners.add(n);
  }
  wasAnnouncedAsOwners(o) {
    return this.announcedAsOwners.has(o);
  }
  noteQueued({inboundOrigin: o, wake: e, uuid: n}) {
    if (this.noteOwnerAnnounced({
      inboundOrigin: o,
      wake: e
    }), o !== Bnt || e === void 0 || n === void 0 || !HEt(e) || !a()) return;
    let i = e.data.file_id;
    if (typeof i !== "string" || !Nnt.test(i)) return;
    if (this.tracked.size >= s) {
      let r = this.tracked.keys().next().value;
      if (r !== void 0) this.tracked.delete(r), t(`[bridge] inbox pointer ${r} forgotten: ${s} pointers already unread`);
    }
    this.tracked.set(i, {
      uuid: n,
      delivered: !1,
      renotifyValue: void 0
    });
  }
  noteLifecycle(o, e) {
    for (let [n, i] of this.tracked) {
      if (i.uuid !== o) continue;
      switch (e) {
       case "completed":
        i.delivered = !0;
        break;

       case "cancelled":
       case "discarded":
       case "refused":
        this.tracked.delete(n);
        break;

       case "queued":
       case "started":
        break;
      }
      return;
    }
  }
  tapCommandLifecycle(o) {
    let e = o.onCommandLifecycle;
    o.onCommandLifecycle = (n, i) => {
      e?.(n, i), this.noteLifecycle(n, i);
    };
  }
  noteFetchAttempt(o, e, n) {
    let i = this.tracked.get(o);
    if (i === void 0) return;
    if (!e.ok && p.has(e.reason)) return;
    if (this.tracked.delete(o), i.renotifyValue !== void 0) {
      if (n.removeByFilter(u(i.renotifyValue)), e.ok) g("bridge_inbox_pointer");
    }
  }
  pendingFileIds() {
    return [ ...this.tracked.keys() ];
  }
  renotifyUnfetched(o) {
    try {
      if (this.tracked.size === 0) return;
      if (!a()) {
        this.tracked.clear();
        return;
      }
      if (lwe() > 0) return;
      for (let [e, n] of this.tracked) {
        if (!n.delivered) continue;
        if (n.renotifyValue !== void 0) {
          if (o.peek(u(n.renotifyValue)) !== void 0) continue;
          this.tracked.delete(e), m("bridge_inbox_pointer", "unread_after_renotify"), t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
          continue;
        }
        let i = Ri({
          taskType: l,
          status: "pending",
          summary: `An inbox message announced earlier has not been read (file_id ${e})`,
          body: `\nA session-inbox notification carrying file_id ${e} was delivered to you earlier and ${Tnt} was not called for it. Call ${Tnt} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.`
        });
        o.enqueuePendingNotification({
          mode: "task-notification",
          agentId: Ze(),
          value: i,
          skipAttachments: !0,
          priority: "later"
        }), n.renotifyValue = i, t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`);
      }
    } catch (e) {
      d(e);
    }
  }
}

var EAn = new lt(() => new c);

function u(o) {
  return e => e.mode === "task-notification" && e.value === o;
}

function t5s(o, e) {
  try {
    if (!("inbound_origin" in e) || e.inbound_origin !== Bnt) return;
    let n = eKe(e);
    if (n?.inboundOrigin !== Bnt) return;
    let i = n3(n.content, n.inboundOrigin);
    if (typeof i !== "string") return;
    EAn.of(o).noteOwnerAnnounced({
      inboundOrigin: n.inboundOrigin,
      wake: MEt(i) ?? void 0
    });
  } catch (n) {
    t(`[bridge] inbox owner notice not noted: ${n instanceof Error ? n.name : "non-error throw"}`, {
      level: "error"
    });
  }
}

export { EAn, t5s };
