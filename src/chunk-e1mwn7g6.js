// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Md } from "./chunk-7znrwrqz.js";

import { lt } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { tD } from "./chunk-r2h53bm2.js";

import { ojn } from "./chunk-3zb1ef23.js";

import { or } from "./chunk-w0q7jqcp.js";

import { a } from "./chunk-j016gcgm.js";

import { GBe, pLt, rsn } from "./chunk-n3526wzr.js";

import { k$n } from "./chunk-f66gd31c.js";

import { Dn } from "./chunk-q0e8j22k.js";

var vV = "SendFile", aps = "Send one or more files to another Claude Code session";

function lps(e, r) {
  return `Send files to another Claude Code session \u2014 a peer session on this machine, or a Remote Control / cloud session on another machine. The receiving Claude gets the files on its own filesystem with @path references, plus your message.\n\nUse this when a file is the thing to hand over \u2014 a doc with figures, a screenshot, a report, a build artifact. For plain text, use ${Dn} instead. For agents inside this session (subagents, teammates), also use ${Dn} \u2014 they share your filesystem and can read the file at its path directly.\n\n\`to\` accepts a peer session name from ${Md}, or an explicit \`uds:<socket>\` / \`bridge:<session id>\` address.\n\nEach file is capped at ${r} MiB, at most ${e} files per send. Files must exist on the local filesystem \u2014 write content to a file first if needed. The receiver verifies each file against a sha256 digest of what was sent (where the transport carries it) and refuses a mismatch with a visible note.\n\nExample: ${vV}({ to: "devbox", files: ["report.pdf", "figures/plot.png"], message: "Here's the doc with figures." })`;
}

var vgr = "Remote Control";

function Lio(e) {
  return GBe(e) ? "cloud" : vgr;
}

var v = 3e5;

class _ {
  listed=void 0;
  inFlight=void 0;
  record(e, r, n) {
    this.listed = {
      at: Date.now(),
      listed: e,
      identityKey: r,
      truncated: n
    };
  }
  forget() {
    this.listed = void 0;
  }
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}

var b = new lt(() => new _);

async function Tit(e = {
  refresh: !0
}) {
  {
    let {primePeerIdentityOwner: r} = import.meta.require("./chunk-tq9pm2tx.js");
    await r(e);
  }
}

function p() {
  let {getPeerBridgeIdentity: e} = import.meta.require("./chunk-tq9pm2tx.js"), r = e();
  return r?.live ? r.key : null;
}

async function DHn(e, r) {
  {
    let n = p();
    if (!n) return {
      rows: [],
      failed: !1,
      identityKey: null
    };
    let i = b.of(e), o = i.inFlight;
    if (o !== void 0 && o.identityKey === n) return o.promise;
    let {listBridgePeerSessions: s} = import.meta.require("./chunk-qwt2xdgf.js"), d = {
      record: void 0
    }, c = Date.now(), f = (async () => {
      try {
        let g = {
          failed: !1,
          truncated: !1
        }, h;
        try {
          h = await s(g, r);
        } catch (y) {
          return t(`[bridge:population] fetch threw: ${l(y)} \u2014 treated as failed`, {
            level: "warn"
          }), {
            rows: [],
            failed: !0,
            identityKey: n
          };
        }
        return t(`[bridge:population] fetched ${h.length} rows in ${Date.now() - c}ms${g.failed ? " (FAILED \u2014 not recordable)" : ""}${g.truncated ? " (truncated at page budget)" : ""}`), 
        {
          rows: h,
          failed: g.failed,
          ...g.truncated && {
            truncated: !0
          },
          identityKey: n
        };
      } finally {
        i.settle(d.record);
      }
    })();
    return d.record = {
      identityKey: n,
      promise: f
    }, i.begin(d.record), f;
  }
  return {
    rows: [],
    failed: !1,
    identityKey: null
  };
}

function LHn(e) {
  {
    let r = p();
    return r !== null && e.identityKey === r;
  }
  return !1;
}

function j9t(e, r, n) {
  {
    let i = p();
    if (!i) return;
    if (r.identityKey !== i) {
      t("[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one");
      return;
    }
    let o = b.of(e);
    if (r.failed) {
      let s = o.listed;
      if (s !== void 0 && s.identityKey === i) o.forget(), t("[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)");
      return;
    }
    o.record(n, i, r.truncated === !0), t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`);
  }
}

function NHn(e, r) {
  {
    let n = p();
    if (!n || r.identityKey !== n) return;
    let i = b.of(e), o = i.listed;
    if (o !== void 0 && o.identityKey === n) i.forget(), t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
  }
}

function $Hn(e) {
  return Nio(e)?.rows;
}

function Nio(e) {
  {
    let r = p(), n = b.of(e).listed;
    if (!r || n === void 0 || n.identityKey !== r) return;
    let i = Date.now() - n.at;
    if (i >= 0 && i < v) return t(`[bridge:population] warm recorded set: ${n.listed.length} rows (age ${i}ms)`), 
    {
      rows: n.listed,
      truncated: n.truncated
    };
  }
  return;
}

function $io(e, r, n) {
  let i = pLt(r), o = new Set(n.filter(s => !rsn(r, s.id)).map(s => or(s.id)));
  return e.filter(s => {
    let d = or(s.id);
    return !i.has(d) && !o.has(d);
  });
}

function W9t(e, r) {
  return $io(e, [], r);
}

function VRt(e) {
  return e === "timeout" || e === "fetch_failed";
}

var I = 3e4, P = 5e3;

class C {
  memo=void 0;
  inFlight=void 0;
  record(e, r, n) {
    if (n !== S()) return;
    this.memo = {
      at: Date.now(),
      sessions: e,
      truncated: r,
      credential: n
    };
  }
  begin(e, r) {
    this.inFlight = {
      promise: e,
      credential: r
    };
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0;
  }
  warm(e) {
    let r = this.memo;
    if (r === void 0 || r.credential !== e) return;
    let n = Date.now() - r.at;
    return n >= 0 && n < I ? r : void 0;
  }
}

function S() {
  let {walkCredentialKey: e} = import.meta.require("./chunk-tq9pm2tx.js");
  return e();
}

var B = new lt(() => new C);

async function L4e(e, r) {
  {
    let {hasCloudPeerAccess: n} = import.meta.require("./chunk-83kj2342.js");
    if (!n()) return {
      sessions: [],
      unavailable: "gate_off"
    };
    let {walkCcrSessionList: i} = import.meta.require("./chunk-gesa53yx.js"), o = B.of(e), s = S(), d = o.warm(s);
    if (d !== void 0) return {
      sessions: d.sessions,
      unavailable: void 0,
      ...d.truncated && {
        truncated: !0
      }
    };
    let c = o.inFlight, f = c !== void 0 && c.credential === s ? c.promise : R(o, i, s, r), g = await We(f, P);
    if (g === void 0) return t(`[agents:cloud] session list not ready within ${P}ms \u2014 not searched this call, disclosing`, {
      level: "warn"
    }), {
      sessions: [],
      unavailable: "timeout"
    };
    if (s !== S()) return t("[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing", {
      level: "warn"
    }), {
      sessions: [],
      unavailable: "fetch_failed"
    };
    return g;
  }
  return {
    sessions: [],
    unavailable: void 0
  };
}

function R(e, r, n, i) {
  let o = a.CLAUDE_CODE_REMOTE === !0, s = o ? or(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (s === "") {
    let {getPeerBridgeIdentity: c} = import.meta.require("./chunk-tq9pm2tx.js"), f = c()?.bridgeSessionId;
    s = typeof f === "string" ? or(f) : "";
  }
  let d = (async () => {
    let c, f = {
      truncated: !1
    };
    try {
      c = await r({
        status: f,
        throwOnError: !0,
        exhaustive: !0,
        includeBridgeKind: o,
        credentials: i
      });
    } catch (u) {
      return t(`[agents:cloud] session list threw: ${u instanceof TypeError ? "malformed session-list response \u2014 " : ""}${ojn(u)}`, {
        level: "error"
      }), {
        sessions: [],
        unavailable: "fetch_failed"
      };
    }
    let g = !1;
    if (o) {
      let {isRemoteControlPeerUnreachableFromHere: u} = import.meta.require("./chunk-kfwm91qv.js");
      g = u();
    }
    let y = (s === "" ? c : c.filter(u => or(u.id) !== s)).map(u => {
      let w = Date.parse(u.last_event_at ?? u.created_at ?? "");
      return {
        id: u.id,
        title: u.title ?? null,
        lastActive: Number.isNaN(w) ? void 0 : w,
        workerStatus: u.worker_status === "running" || u.worker_status === "idle" || u.worker_status === "requires_action" ? u.worker_status : void 0,
        remoteControl: u.environment_kind === "bridge",
        unreachableFromHere: g && u.environment_kind === "bridge",
        ...k$n(u.external_metadata),
        ...u.environment_kind === "bridge" && u.connection_status === "disconnected" && {
          offline: !0
        }
      };
    });
    return e.record(y, f.truncated, n), {
      sessions: y,
      unavailable: void 0,
      ...f.truncated && {
        truncated: !0
      }
    };
  })();
  return e.begin(d, n), d.finally(() => e.settle(d)), d;
}

function FHn(e) {
  {
    let {hasCloudPeerAccess: r} = import.meta.require("./chunk-83kj2342.js");
    if (!r()) return;
    return B.of(e).warm(S())?.sessions;
  }
  return;
}

var KRt = "target is an elevated-security session unreachable from a cloud session", qRt = "target session reports it cannot receive cross-session messages";

function Fio(e) {
  if (e.reason !== "denied") return "handler_rewrite";
  if (e.decisionReason?.type === "other") {
    if (e.decisionReason.reason === KRt) return "bridge_auth";
    if (e.decisionReason.reason === qRt) return "recipient_gate_off";
  }
  return "permission_denied";
}

function Ait(e, r, n, i) {
  try {
    let o = FHn(e)?.find(c => or(c.id) === or(r));
    if (!o?.unreachableFromHere) return;
    let {formatUnreachableElevatedRefusal: s} = import.meta.require("./chunk-kfwm91qv.js"), d;
    try {
      d = o.acceptsPeerMessages === !1 ? void 0 : i?.();
    } catch {
      d = void 0;
    }
    return s(n, d === void 0 ? void 0 : {
      sendTool: d,
      sessionId: o.id
    });
  } catch (o) {
    t(`[agents:cloud] warm unreachable lookup failed (${tD(l(o))}) \u2014 treating as not known unreachable`, {
      level: "warn"
    });
    return;
  }
}

var z9t = "can't receive cross-session messages (off in that session)";

function DNe(e, r, n) {
  try {
    let i = or(r);
    if (!(FHn(e)?.some(s => or(s.id) === i && s.acceptsPeerMessages === !1) === !0 || $Hn(e)?.some(s => or(s.id) === i && s.acceptsPeerMessages === !1) === !0)) return;
    return `Not sent: '${n}' ${z9t} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (i) {
    t(`[agents:cloud] warm cannot-receive lookup failed (${tD(l(i))}) \u2014 treating as unknown`, {
      level: "warn"
    });
    return;
  }
}

function UHn(e, r) {
  try {
    let n = or(r), i = FHn(e)?.find(s => or(s.id) === n), o = $Hn(e)?.find(s => or(s.id) === n);
    if (i !== void 0 && !i.remoteControl || o !== void 0 && GBe(o)) return !1;
    if (o?.inboundReportUnavailable && i?.acceptsPeerMessages === void 0) return !1;
    return !(i?.acceptsPeerMessages === !0 || o?.acceptsPeerMessages === !0);
  } catch (n) {
    return t(`[agents:cloud] warm inbound-report lookup failed (${tD(l(n))}) \u2014 treating as unreported`, {
      level: "warn"
    }), !0;
  }
}

export { vgr, Lio, Tit, DHn, LHn, j9t, NHn, $Hn, Nio, $io, W9t, VRt, L4e, FHn, KRt, qRt, Fio, Ait, z9t, DNe, UHn, vV, aps, lps };
