// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, q, Ze } from "./chunk-3pqddg8f.js";

import { Qg, l, E, W } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import { bt, Do, t } from "./chunk-kawq2919.js";

import { a, bT } from "./chunk-j016gcgm.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Ave, RCo, q2n, Ul } from "./chunk-znhtg8e4.js";

import { N2n, XHs, lA, JHs, QHs, tDs, nDs } from "./chunk-n3526wzr.js";

import { Jf } from "./chunk-rgd61mm3.js";

import { kt } from "./chunk-r2h53bm2.js";

import { mo } from "./chunk-fhf0t7vm.js";

import { Aft, dDs, UK, Tie, VBe, Aie, Yh, V0, hCo } from "./chunk-3kb22va7.js";

import { TBe } from "./chunk-xywp7esx.js";

import { tZo } from "./chunk-a38pss7p.js";

import { Qnt, sTt, OT, qls } from "./chunk-84yp45y8.js";

import { _r } from "./chunk-35kwehd0.js";

import { J_s, Q_s, hQt } from "./chunk-7j9be257.js";

import { na } from "./chunk-nfw0a30b.js";

import { Bg, GV, Slt, FQt, Zbs, cfo, ufo, gfo, iSr, hfo, yfo, wue, WQt, _fo } from "./chunk-7w62r1zx.js";

import { ZE, Bio } from "./chunk-hx17tmde.js";

import { Vbt, MGr, Oqo, HGr, HWt, qbt, NGr, NWt, Xbt, SHe } from "./chunk-6aqwfh5f.js";

import { V8o, K8o, q8o, Q8o, Z8o, G4r, V4r, n9o } from "./chunk-q1xb3dym.js";

import { kGr, TGr, AGr, FQn, PWt, RGr, jQn, zQn, IGr, c_n } from "./chunk-v8fd0pz8.js";

import { GFe } from "./chunk-efav7xct.js";

import { IJn, _yn, oWt } from "./chunk-t18c68bm.js";

import { Blt } from "./chunk-jd0jznz2.js";

import { co } from "./chunk-k5d016nk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as _e, randomUUID as qe } from "crypto";

import { unlinkSync as Ge } from "fs";

import { chmod as Ae, lstat as L, mkdir as te, readdir as Ve, readlink as Xe, realpath as de, unlink as re } from "fs/promises";

import { createServer as Be, Socket as He } from "net";

import { basename as fe, dirname as I, isAbsolute as ie, join as N, normalize as je, resolve as ue } from "path";

var Me = 500, Fe = 32;

class he {
  verdicts=new Map;
  lookup(e) {
    let n = this.verdicts.get(e);
    if (n !== void 0) this.verdicts.delete(e), this.verdicts.set(e, n);
    return n;
  }
  remember(e, n) {
    if (this.verdicts.size >= Me) {
      let i = this.verdicts.keys().next().value;
      if (i !== void 0) this.verdicts.delete(i);
    }
    this.verdicts.set(e, n);
  }
}

var Pe = new K(() => new he), Ne = {
  readAncestors: async e => {
    let {ancestors: n, readFailed: i, truncated: r} = await q2n(e);
    if (r && !i && !n.includes(process.pid)) ({ancestors: n, readFailed: i, truncated: r} = await q2n(e, Fe));
    if (!n.includes(process.pid)) {
      if (i) throw Error("ancestry walk failed");
      if (r) throw Error("ancestry walk truncated (maxDepth) above the prefix");
    }
    return n;
  },
  readStartToken: e => Ul(e, {
    skipCache: !0
  })
};

function Le(e, n = process.pid) {
  if (n === 1) return !1;
  return Array.isArray(e) && e.includes(n);
}

async function Ke(e, n = Ne) {
  if (e === void 0 || !Number.isInteger(e) || e <= 0) return "no-evidence";
  let i;
  try {
    i = await n.readStartToken(e);
  } catch {
    i = void 0;
  }
  if (i === void 0) return "no-evidence";
  let r = `${e}:${i}`, o = Pe.of(B().host), s = o.lookup(r);
  if (s !== void 0) return s ? "self" : "not-self";
  let p;
  try {
    p = await n.readAncestors(e);
  } catch {
    return "no-evidence";
  }
  let _;
  try {
    _ = await n.readStartToken(e);
  } catch {
    _ = void 0;
  }
  if (_ !== i) return "no-evidence";
  let w = process.pid !== 1 && p.includes(process.pid);
  return o.remember(r, w), w ? "self" : "not-self";
}

async function ye(e) {
  let n = e.selfPid ?? process.pid;
  if (e.selfSentAncestry !== void 0 && n !== 1) return Le(e.selfSentAncestry, n);
  if (!e.needsVerdict) return !1;
  if (n === 1 || e.platform === "windows") return e.childTokenPresented;
  if (e.platform !== "macos") return !1;
  let i = await (e.verdictOf ?? Ke)(e.verifiedPeerPid);
  return i === "self" || i === "no-evidence" && e.childTokenPresented;
}

function d() {
  return oWt.of(B().host);
}

function Uqs() {
  return d().lastStartFailureCause;
}

function Bqs() {
  return d().lastStartDegradedCause;
}

function we(e) {
  let n = d();
  if (e === "key_publish_failed" && n.lastStartDegradedCause === "primary_dir_refused_fell_back") return;
  n.lastStartDegradedCause = e;
}

function CJn() {
  return _yn(d());
}

function le(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e)) return !1;
  return typeof e.type === "string";
}

function RJn(e) {
  d().onRename = e;
}

function jqs(e) {
  d().onEnableRemoteControl = e;
}

function Se(e) {
  return Blt(e) ? e : e === void 0 ? "(none)" : "(malformed)";
}

function Ye(e) {
  if (!Array.isArray(e)) return [];
  let n = [];
  for (let i of e) {
    if (n.length >= cfo) break;
    if (Blt(i)) n.push(i);
  }
  return n;
}

function xJn(e) {
  d().onPeerMessageStatus = e;
}

function Wqs(e) {
  d().onEnqueue = e;
}

function Ie(e) {
  if (e.session_id !== void 0 && e.session_id !== q()) return t(`[uds-messaging] Dropping ${Bg(e.type)} message: session_id mismatch (got "${Bg(String(e.session_id))}", expected "${q()}")`, {
    level: "warn"
  }), !1;
  return !0;
}

async function ze(e, n, i, r, o) {
  let s = e.message?.content;
  if (typeof s !== "string" || s.length === 0) {
    t("[uds-messaging] Ignoring user message with missing or non-string content", {
      level: "warn"
    });
    return;
  }
  if (!Ie(e)) return;
  let p = typeof e.uuid === "string" ? e.uuid : qe(), _ = Xbt();
  if (_ !== void 0) {
    SHe("uds: dropped before attachment materialization", _), Oqo({
      kind: "peer",
      from: e.from ?? "unknown",
      ...n !== void 0 && {
        verifiedPeerPid: n
      },
      ...Blt(e.msg_id) && {
        msg_id: e.msg_id
      }
    }, "refused");
    return;
  }
  let w = Qnt(e.priority) ?? "next", h = tZo(s), c = Aft(e.from_plugin), D = await sTt({
    origin: {
      kind: "peer",
      ...c !== void 0 && {
        plugin: c
      }
    },
    content: h
  });
  if (D.consumed !== void 0) return;
  using k = D.queueing;
  let u = typeof D.content === "string" ? D.content : h, S = u;
  if (e.file_attachments !== void 0 && GFe()) try {
    let {emitPeerFileReceiveTelemetry: x, injectPeerFilePrefix: F, materializeLocalPeerFiles: y} = await import("./chunk-mzdg42fx.js"), A = await y(e.file_attachments);
    if (A.received > 0) S = F(u, A.prefix), x("uds", A.received, A.verified);
  } catch (x) {
    t(`[uds-messaging] Failed to materialize file_attachments: ${GV(String(x))}`, {
      level: "warn"
    });
  }
  let v = await ce(n, r, o), b = Tie({
    kind: "peer",
    from: e.from ?? "unknown",
    ...n !== void 0 && {
      verifiedPeerPid: n
    },
    ...i !== void 0 && {
      verifiedPeerProcStart: i
    },
    ...v && {
      selfSent: v
    },
    ...Blt(e.msg_id) && {
      msg_id: e.msg_id
    },
    ...c !== void 0 && {
      plugin: c
    },
    ...VBe(s)
  }, S, s), R = {
    mode: "prompt",
    agentId: Ze(),
    value: S,
    uuid: p,
    priority: w,
    origin: b,
    skipSlashCommands: !0,
    isMeta: !0,
    skipAttachments: !0
  };
  if (NWt(R) !== "accept") return;
  OT(R), k.queued(), t(`[uds-messaging] Routed user message to queue (priority=${w}): ${Bg(S, 80)}`), 
  d().onEnqueue?.(), Oe(R);
}

function Oe(e) {
  let n = e.origin?.kind === "peer" ? e.origin : void 0, i = d().activeSocketPath;
  if (n !== void 0 && n.selfSent !== !0 && n.verifiedPeerPid !== void 0 && typeof n.from === "string" && i !== void 0 && PJn(n.from, i, n.verifiedPeerPid) !== void 0) Bio(n.from, n.verifiedPeerPid, n.verifiedPeerProcStart);
}

function PJn(e, n, i) {
  if (!e.startsWith("uds:") || !Aie(e)) return;
  let r = Yh(e).target;
  return r && hCo(r, n, {
    verifiedPeerPid: i,
    ownerUids: d().peerDirOwnerUids
  }) ? r : void 0;
}

async function be(e, n, i, r, o) {
  if (!le(e)) {
    t("[uds-messaging] Ignoring message without valid type field", {
      level: "warn"
    });
    return;
  }
  if (e.type === "user") await ze(e, n, i, r, o); else if (e.type === "control") {
    if (!Ie(e)) return;
    if (e.action === "rename" && typeof e.name === "string") d().onRename?.(e.name); else if (e.action === "peer_message_status" && (e.status === "held" || e.status === "denied" || e.status === "expired" || e.status === "delivered" || e.status === "refused" || e.status === "dropped")) {
      let s = e.status === "expired" && e.status_detail === "refused" ? "refused" : e.status, p = hfo(e.orig_msg_id, s);
      if (s === "dropped") {
        let _ = Zbs(e.drop_reason), w = yfo(Ye(e.dropped_msg_ids));
        if (p !== void 0) {
          let h = w.get(p.sent.to) ?? {
            sends: [],
            wereHeld: 0
          };
          if (h.sends.push(p.sent), p.wasHeld) h.wereHeld++;
          w.set(p.sent.to, h);
        }
        if (_ === "queue-full") for (let [h, {wereHeld: c}] of w) for (let D = 0; D < c; D++) iSr(h);
        if (w.size === 0) t(`[uds-messaging] peer_message_status dropped: neither orig_msg_id=${Se(e.orig_msg_id)} nor any named id matches an outstanding send`);
        for (let {sends: h} of w.values()) d().onPeerMessageStatus?.({
          status: s,
          sends: h,
          dropReason: _
        });
      } else if (p === void 0) t(`[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${Se(e.orig_msg_id)}`); else {
        if (s === "held") gfo(p.sent.to); else if (s === "delivered" && p.wasHeld) iSr(p.sent.to);
        d().onPeerMessageStatus?.({
          status: s,
          sent: p.sent
        });
      }
    } else if (e.action === "notify_when_idle") {
      let s = kGr().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] notify_when_idle dropped: malformed frame"), f("cross_session_notify_idle", "malformed_frame");
        return;
      }
      let p = d().activeSocketPath, _ = s.data.from, w = p !== void 0 ? PJn(_, p, n) : void 0;
      if (p === void 0) t("[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)"), 
      f("cross_session_notify_idle", "own_inbox_unbound"); else if (w === void 0) t(`[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${Bg(_)})`), 
      f("cross_session_notify_idle", "unvettable_reply_target"); else if (lA(w) === lA(p)) t("[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)"), 
      f("cross_session_notify_idle", "self_target_frame"); else {
        let h = await ce(n, r, o), c = AGr(_, w, s.data.msg_id, n, i, o === "peer", Ce(s.data.from_mode), h);
        if (t(`[uds-messaging] notify_when_idle from ${Bg(_)}: ${c}`), c === "full") c_n(w, s.data.msg_id, n, o === "peer", i);
      }
    } else if (e.action === "peer_idle_notice") {
      let s = TGr().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] peer_idle_notice dropped: malformed frame"), f("cross_session_notify_idle", "malformed_notice");
        return;
      }
      if (!PWt(s.data.orig_msg_id)) {
        t("[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)");
        return;
      }
      let p = await ce(n, r, o);
      if (!RGr(s.data.orig_msg_id, s.data.state, s.data.finished_at, s.data.detail, Ce(s.data.from_mode), p)) t(`[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${Bg(s.data.orig_msg_id)} was already consumed`);
    } else if (e.action === "yield_artifact_replies") {
      let s = V8o().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] yield_artifact_replies dropped: malformed frame"), f("artifact_comments_autoreact", "yield_malformed_frame");
        return;
      }
      let p = d().activeSocketPath, _ = p !== void 0 ? PJn(s.data.from, p, n) : void 0;
      if (p === void 0 || _ === void 0) {
        t(`[uds-messaging] yield_artifact_replies dropped: ${p === void 0 ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${Bg(s.data.from)})`), 
        f("artifact_comments_autoreact", "yield_unvettable_target");
        return;
      }
      if (lA(_) === lA(p)) {
        t("[uds-messaging] yield_artifact_replies dropped: reply target is this session");
        return;
      }
      let w = await WQt(_);
      if (w === void 0 || w.sessionId !== q() || n !== void 0 && w.pid !== n) {
        t(`[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${Bg(s.data.from)})`), 
        f("artifact_comments_autoreact", "yield_requester_unverified"), V4r(s.data, _, n === void 0 ? void 0 : {
          pid: n,
          writeToken: i
        }, Date.now(), {
          refuse: !0
        });
        return;
      }
      V4r(s.data, _, {
        pid: n ?? w.pid,
        procStart: i ?? (n === void 0 || n === w.pid ? w.procStart : void 0),
        writeToken: i
      }, Date.now());
    } else if (e.action === "unyield_artifact_replies") {
      let s = q8o().safeParse(e);
      if (!s.success || !n9o(s.data, n)) t("[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back");
    } else if (e.action === "artifact_replies_yielded") {
      let s = K8o().safeParse(e);
      if (!s.success) {
        t("[uds-messaging] artifact_replies_yielded dropped: malformed frame"), f("artifact_live_subscribe", "yield_malformed_answer");
        return;
      }
      if (!Q8o(s.data.orig_msg_id)) {
        t("[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled");
        return;
      }
      Z8o(s.data, n);
    } else t(`[uds-messaging] Unhandled control action: ${Bg(String(e.action))}`);
  } else t(`[uds-messaging] Received unhandled message type: ${Bg(e.type)}`);
}

function Qe(e, n, i, r, o) {
  if (le(e) && (e.type === "control" && e.action !== "notify_when_idle" || e.type === "user" && e.priority === "now" && e.file_attachments === void 0)) {
    be(e, n, i, r, o).catch(s => {
      t(`[uds-messaging] Failed to process message: ${s}`, {
        level: "warn"
      });
    });
    return;
  }
  d().processingChain = d().processingChain.then(() => be(e, n, i, r, o)).catch(s => {
    t(`[uds-messaging] Failed to process message: ${s}`, {
      level: "warn"
    });
  });
}

var Je = 3e3;

function en(e = 3e3) {
  return Promise.race([ d().processingChain, J(e, void 0, {
    unref: !0
  }) ]);
}

function nn(e) {
  e.setEncoding("utf8");
  let n = d().firstLineDeadlineMs, i = setTimeout(() => {
    i = void 0;
    try {
      if (t(`[uds-messaging] Closing a connection that sent no complete line within ${n} ms`), 
      !d().silentDropReported) d().silentDropReported = !0, f("cross_session_inbox_auth", "silent_connection_deadline");
      e.destroy();
    } catch (b) {
      t(`[uds-messaging] Failed to close a silent connection: ${b}`, {
        level: "warn"
      });
    }
  }, n);
  i.unref();
  let r = () => {
    if (i !== void 0) clearTimeout(i), i = void 0;
  };
  e.once("close", r), e.once("error", r);
  let o, s, p = !1, _, w, h = process.pid !== 1 && NGr();
  if (h) {
    let b = Slt(e), R = b !== void 0 ? Ave(b) : void 0;
    if (b !== void 0 && R !== void 0) w = {
      pid: b,
      token: R
    };
  }
  let c = "", D, k = !1, u = b => {
    if (t(`[uds-messaging] Dropped ${b} from a connection that did not authenticate; closing it`, {
      level: "warn"
    }), !d().authDropReported) d().authDropReported = !0, m("cross_session_inbox_auth", "unauthed_drop");
    e.destroy();
  }, S = b => {
    let R = !k;
    if (k = !0, tDs(b)) {
      if (R) {
        if (D = nDs(b.token, d().activeTokens), D !== void 0 && !d().authOkReported) d().authOkReported = !0, 
        g("cross_session_inbox_auth");
        if (D === void 0 && d().authRequired) u("a bad auth frame");
      }
      return;
    }
    if (d().authRequired && D === void 0) {
      u(le(b) ? `a '${Bg(b.type)}' line` : "a line");
      return;
    }
    if (!p) {
      if (o = Slt(e), s = o === void 0 ? void 0 : w !== void 0 ? w.pid === o ? w.token : void 0 : Ave(o), 
      p = !0, o !== void 0 && h) _ = w !== void 0 && w.pid === o && Ave(o) === w.token ? RCo(o) : [];
    }
    Qe(b, o, s, _, D);
  }, v = b => {
    try {
      S(b);
    } catch (R) {
      t(`[uds-messaging] Failed to handle line: ${R}`, {
        level: "warn"
      });
    }
  };
  e.on("data", b => {
    if (c += b, c.length > FQt) {
      t(`[uds-messaging] Line exceeded ${FQt} chars; dropping connection`, {
        level: "warn"
      }), e.destroy(), c = "";
      return;
    }
    let R;
    while ((R = c.indexOf(`\n`)) !== -1) {
      let x = c.slice(0, R);
      if (c = c.slice(R + 1), r(), !x.trim()) {
        if (d().authRequired && D === void 0) {
          k = !0, u("a blank line"), c = "";
          return;
        }
        continue;
      }
      let F;
      try {
        F = Do(x);
      } catch {
        if (t(`[uds-messaging] Failed to parse JSON line: ${GV(x)}`, {
          level: "warn"
        }), d().authRequired && D === void 0) {
          k = !0, u("an unparseable line"), c = "";
          return;
        }
        continue;
      }
      if (v(F), e.destroyed) {
        c = "";
        return;
      }
    }
  }), e.on("end", () => {
    if (c.trim() && !e.destroyed) {
      let b, R = !1;
      try {
        b = Do(c), R = !0;
      } catch {
        if (t(`[uds-messaging] Failed to parse final buffer: ${GV(c)}`, {
          level: "warn"
        }), d().authRequired && D === void 0) u("an unparseable final fragment");
      }
      if (R) v(b);
    }
    e.end();
  }), e.on("error", b => {
    t(`[uds-messaging] Connection error: ${b.message}`, {
      level: "warn"
    });
  });
}

function zqs() {
  return d().activeSocketPath;
}

var z = 103;

function h1s() {
  let e = a.XDG_RUNTIME_DIR || Jf(), n = ue(N(e, "cc-socks", `${process.pid}.sock`));
  if (Buffer.byteLength(n) <= z) return n;
  return GVo();
}

function GVo(e = process.getuid?.() ?? 0) {
  let n = a.TERMUX_VERSION ? a.PREFIX : void 0, i = n ? N(n, "tmp") : "/tmp";
  return N(i, `cc-socks-${e}`, `${process.pid}.sock`);
}

async function j(e, n, i, {settleHeld: r = !0} = {}) {
  for (let _ of d().connectedClients) _.destroy();
  if (d().connectedClients.clear(), e.close(), r) IGr();
  let o = r ? HWt() : void 0;
  await en();
  let s = r ? We(FQn("exited"), Je) : void 0;
  if (await o, await s, r) await qls();
  try {
    await re(n);
  } catch {}
  let p = d();
  if (p.activeKeyFile !== void 0) await QHs(p.activeKeyFile, i), p.activeKeyFile = void 0;
  Y();
}

function Y() {
  d().activeSocketPath = void 0, d().activeTokens = void 0, delete process.env.CLAUDE_CODE_MESSAGING_SOCKET, 
  bT.unset("CLAUDE_CODE_MESSAGING_TOKEN"), ufo(void 0), MGr(null), HGr(null), jQn(null), 
  G4r(null), zQn(null), ZE().senderMode = null;
}

function tn(e, n, i, r) {
  return async () => {
    await j(e, n, i), r();
  };
}

function me(e) {
  return new Promise(n => {
    let i = new He, r = o => {
      i.destroy(), n(o);
    };
    i.on("connect", () => r("live")), i.on("error", () => r("dead")), i.setTimeout(250, () => r("dead")), 
    i.connect({
      path: e
    });
  });
}

function ne(e, n) {
  return new Promise((i, r) => {
    function o(s) {
      if (E(s) === "EADDRINUSE") i(!1); else r(s);
    }
    e.once("error", o), e.listen(n, () => {
      e.removeListener("error", o), i(!0);
    });
  });
}

function sn(e) {
  let n = `${e.replace(/\.sock$/, "")}-${_e(4).toString("hex")}.sock`;
  if (Buffer.byteLength(n) <= z) return n;
  let i = N(e, ".."), r = z - Buffer.byteLength(N(i, ".sock"));
  return N(i, `${_e(8).toString("hex").slice(0, Math.max(1, r))}.sock`);
}

async function rn(e) {
  let n = `${fe(e).replace(/\.sock$/, "")}-`, i;
  try {
    i = await Ve(I(e));
  } catch {
    return;
  }
  for (let r of i) {
    if (!r.startsWith(n) || !/^[0-9a-f]{8}\.sock$/.test(r.slice(n.length))) continue;
    let o = N(I(e), r);
    if (await me(o) === "live") continue;
    try {
      await re(o), t(`[uds-messaging] Reaped stale moved-aside socket ${o}`);
    } catch {}
  }
}

async function on(e, n) {
  if (await rn(n), await ne(e, n)) return n;
  if (await me(n) !== "live") {
    try {
      await re(n);
    } catch {}
    if (await ne(e, n)) return n;
  }
  for (let i = 0; i < 3; i++) {
    let r = sn(n);
    if (t(`[uds-messaging] Auto socket path ${n} is another session's live socket (sibling pid namespace?); binding at ${r} instead`, {
      level: "warn"
    }), await ne(e, r)) return r;
  }
  throw Error("listen EADDRINUSE on the auto socket path and its moved-aside siblings");
}

function Gqs(e, n, i = {}) {
  return _1s(e ?? h1s(), n, {
    isExplicit: e !== void 0,
    profileStartup: i.profileStartup
  });
}

function G() {
  bT.unset("CLAUDE_CODE_MESSAGING_SOCKET"), bT.unset("CLAUDE_CODE_MESSAGING_TOKEN");
}

var an = [ "directory_rule", "foreign_owner", "leaf_shape", "dangling_link", "raced", "not_directory", "symlink_loop", "uid_collapse", "internal" ];

function M(e, n, i) {
  return Object.assign(n, {
    socketsDirVetKind: e,
    ...i && {
      refusedComponent: i
    }
  });
}

function dn(e) {
  if (!(e instanceof Error) || !("refusedComponent" in e)) return;
  let n = e.refusedComponent;
  return typeof n === "object" && n !== null && "path" in n && typeof n.path === "string" && "uid" in n && typeof n.uid === "number" && "gid" in n && typeof n.gid === "number" && "mode" in n && typeof n.mode === "number" ? {
    path: n.path,
    uid: n.uid,
    gid: n.gid,
    mode: n.mode,
    ownerRefused: "ownerRefused" in n && typeof n.ownerRefused === "boolean" ? n.ownerRefused : void 0
  } : void 0;
}

function X(e, n, i) {
  return {
    path: e,
    uid: n.uid,
    gid: n.gid,
    mode: n.mode & 4095,
    ...i !== void 0 && {
      ownerRefused: i
    }
  };
}

function Te(e) {
  if (se(e) === "uid_collapse") return "this process runs in a user namespace without a uid mapping, so file ownership cannot be verified \u2014 start it with a uid map (e.g. unshare -Ur), or pass --messaging-socket-path";
  let n = dn(e);
  if (n === void 0) return;
  let i = n.mode.toString(8).padStart(4, "0"), r = `(owner ${n.uid}:${n.gid}, mode ${i})`, o = "or pass --messaging-socket-path", s = kt(n.path), p = s === n.path, _ = `'${Array.from(s, c => {
    if (un.test(c)) return c;
    return p = !1, "?";
  }).join("")}'`, w = p, h = (c, D) => w ? `chmod ${c} ${co([ n.path ])}${D}` : `clear its ${c === "o-w" ? "other" : "group"}-write bit${D}`;
  switch (se(e)) {
   case "directory_rule":
    {
      if (n.ownerRefused === !0) return `${_} is not owned by you or root ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;
      let c = (n.mode & 512) !== 0;
      if (!c && (n.mode & 2) !== 0) return `${_} is world-writable without the sticky bit ${r} \u2014 ${h("o-w", " (or chmod +t)")}, ${o}`;
      if (!c && (n.mode & 16) !== 0) return `${_} is group-writable without the sticky bit ${r} \u2014 ${h("g-w", "")}, ${o}`;
      return `${_} is not owned by you or root ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;
    }

   case "foreign_owner":
    return `${_} is owned by another user ${r} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;

   case "not_directory":
   case "leaf_shape":
    return `${_} is not a directory ${r} \u2014 remove it or use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${o}`;

   case "dangling_link":
   case "raced":
   case "symlink_loop":
   case "uid_collapse":
   case "internal":
   case void 0:
    return;
  }
}

var un = /^[A-Za-z0-9._\/ ~+=:@,#%-]$/, cn = new Set([ "EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOTDIR" ]);

function fn(e) {
  switch (se(e)) {
   case "directory_rule":
   case "foreign_owner":
   case "leaf_shape":
   case "not_directory":
    return !0;

   case "dangling_link":
   case "symlink_loop":
   case "raced":
   case "uid_collapse":
   case "internal":
    return !1;

   case void 0:
    break;
  }
  let n = E(e);
  return n !== void 0 && cn.has(n);
}

function se(e) {
  if (!(e instanceof Error) || !("socketsDirVetKind" in e)) return;
  let n = e.socketsDirVetKind;
  return an.find(i => i === n);
}

function Ee() {
  return M("dangling_link", Error("a component of the sockets path is a symlink whose target does not exist \u2014 create the target (0700) or repoint the link"));
}

var H = "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.", ke = `A component of the sockets path is not a directory (a regular file is in the way). ${H}`, ve = `The sockets path runs through a symlink loop. ${H}`, ln = "This process runs in a user namespace without a uid mapping (its own uid reads as the kernel overflow uid), so file ownership cannot be verified. Start it with a uid map (e.g. `unshare -Ur` / `--map-current-user`), or pass --messaging-socket-path.";

function De(e) {
  switch (se(e)) {
   case "directory_rule":
    return `A directory on the sockets path is shared (world- or group-writable without the sticky bit, e.g. a container volume mounted at /tmp) or not owned by you or root. ${H}`;

   case "foreign_owner":
   case "leaf_shape":
    return H;

   case "not_directory":
    return ke;

   case "symlink_loop":
    return ve;

   case "uid_collapse":
    return ln;

   case "dangling_link":
   case "raced":
   case "internal":
    return "";

   case void 0:
    break;
  }
  switch (E(e)) {
   case "ENOTDIR":
    return ke;

   case "ELOOP":
    return ve;

   case "EACCES":
   case "EPERM":
    return `This user lacks permission on part of the sockets path (an ancestor is not searchable, or the parent is not writable). ${H}`;

   case "ENOENT":
    return `An ancestor of the sockets path does not exist. ${H}`;

   default:
    return "";
  }
}

function $e(e, n, i) {
  d().lastStartFailureCause = "socket_dir_refused";
  let r = Te(n);
  d().lastStartFailureDetail = r, Y(), t(`[uds-messaging] Failed to set up sockets directory ${e} (refusing to bind \u2014 cross-session messaging is OFF for this session): ${l(n)}.${r ? ` Refused component: ${r}.` : ""}${i ? ` ${i}` : ""}`, {
    level: "error"
  }), G();
  return;
}

async function Re(e) {
  if (!ie(e)) throw M("internal", Error("sockets directory must be absolute here"));
  let n = process.getuid?.(), i = y => {
    if (y.isSymbolicLink()) throw M("leaf_shape", Error("sockets directory is a symlink \u2014 refusing to use it"), X(e, y));
    if (!y.isDirectory()) throw M("leaf_shape", Error("sockets directory exists but is not a directory"), X(e, y));
    if (n !== void 0 && !r(y.uid)) throw M("foreign_owner", Error("sockets directory is owned by another user \u2014 refusing to use it"), X(e, y));
  }, r = y => y === n, o = process.getgid?.(), s = await Q_s();
  if (s?.uidCollapses) throw M("uid_collapse", Error("this process reads as the kernel overflow uid (user namespace without a uid mapping) \u2014 ownership cannot be verified; refusing to use the sockets directory"));
  r = y => y === n && !s?.uidCollapses;
  let p = J_s(), _ = async (y, A) => {
    try {
      let C = A.isSymbolicLink() ? N(await de(I(y)), fe(y)) : await de(y), P = await L(C);
      return P.dev === A.dev && P.ino === A.ino ? C : void 0;
    } catch {
      return;
    }
  }, w = y => s !== void 0 && (s.unmappedOwnerUid !== void 0 && y === s.unmappedOwnerUid || y === 0 && s.rootUidAmbiguous), h = w, c = y => y !== void 0 && p.has(y), D = (y, A, C) => n === void 0 || r(y) || !A && (w(y) ? c(C) : y === 0), k = (y, A, C) => {
    if (!D(y.uid, A, C)) return !1;
    if ((y.mode & 512) !== 0) return !0;
    if ((y.mode & 2) !== 0) return !1;
    if ((y.mode & 16) !== 0) return r(y.uid) && o !== void 0 && y.gid === o && o === n;
    return !0;
  }, u = a.TERMUX_VERSION && a.PREFIX ? I(I(a.PREFIX)) : void 0, S = y => I(y) === y || y === u, v = async (y, A, C = 0) => {
    if (C > 16) throw M("symlink_loop", Error("sockets-directory chain: too many levels of symlinks"));
    let P = !1, pe, ge = !1;
    for (let U = y, Q = !0; ;U = I(U), Q = !1) {
      let T;
      try {
        T = await L(U);
      } catch (V) {
        if (!W(V)) throw V;
      }
      if (T !== void 0) {
        pe ??= U;
        let V = Q && A;
        if (T.isSymbolicLink()) {
          ge = !0;
          let Z = h(T.uid) ? await _(U, T) : void 0;
          if (!D(T.uid, !1, Z)) throw M("foreign_owner", Error("a sockets-directory component is a symlink owned by another user \u2014 refusing to use it"), X(U, T));
          let ee = (await Xe(U)).replace(/\/{2,}/g, "/"), oe = ee.length > 1 && ee.endsWith("/") ? ee.slice(0, -1) : ee, xe = ie(oe) ? oe : `${await de(I(U))}/${oe}`, {startExists: Ue} = await v(xe, V, C + 1);
          if (Q) P = Ue;
        } else {
          if (!T.isDirectory()) throw M("not_directory", Error("a sockets-directory component exists but is not a directory \u2014 refusing to use it"), X(U, T));
          let Z = h(T.uid) ? await _(U, T) : void 0;
          if (!k(T, V, Z)) throw M("directory_rule", Error("a sockets-directory component is not a private-or-sticky directory owned by us or root \u2014 refusing to use it"), X(U, T, !D(T.uid, V, Z)));
          if (Q) P = !0;
        }
      }
      if (S(U)) break;
    }
    return {
      startExists: P,
      deepestExisting: pe,
      sawSymlink: ge
    };
  }, b = I(e), R = await v(b, !1), x = !R.startExists, F;
  try {
    F = await L(e);
  } catch (y) {
    if (!W(y)) throw y;
  }
  if (x && R.deepestExisting === b) throw Ee();
  if (x) {
    let y = [], A = C => {
      if (!C.isDirectory() || n !== void 0 && !r(C.uid)) throw M("raced", Error("a sockets-directory component appeared while being created and is not our directory \u2014 refusing to use it"));
    };
    for (let C = b; C !== R.deepestExisting && !S(C); C = I(C)) y.unshift(C);
    for (let C of y) try {
      await te(C, {
        mode: 448
      });
    } catch (P) {
      if (W(P) && R.sawSymlink) throw Ee();
      if (E(P) !== "EEXIST") throw P;
      A(await L(C));
    }
    if (!(await v(b, !0)).startExists) throw M("raced", Error("sockets base directory vanished while being set up"));
  }
  if (F === void 0) {
    try {
      await te(e, {
        mode: 448
      });
    } catch (y) {
      if (E(y) !== "EEXIST") throw y;
    }
    F = await L(e);
  }
  if (i(F), (F.mode & 511) !== 448) await Ae(e, 448);
}

async function y1s(e) {
  if (!ie(e)) throw new Qg(e === "" ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path." : `--messaging-socket-path must be an absolute path, got: ${e}`);
  if (e.split("/").includes("..")) throw new Qg(`--messaging-socket-path must not contain '..' segments, got: ${e}`);
  let i = e.split("/").at(-1);
  if (i === "" || i === ".") throw new Qg(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
  let r = je(e).replace(/\/+$/, "");
  if (r === "" || !r.startsWith("/") || fe(r) === "") throw new Qg(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
  if (!V0(r) || !V0(e)) throw new Qg(`--messaging-socket-path must be a local socket path, got: ${e}`);
  if (Buffer.byteLength(r) > z) throw new Qg(`--messaging-socket-path is too long for a Unix socket (${Buffer.byteLength(r)} bytes, max ${z}): ${r}. Choose a shorter path, e.g. under $XDG_RUNTIME_DIR or /tmp/<private-dir>.`);
  let o = I(r), s = "Use a private directory you own that only you use, e.g. mkdir -m 700 <dir> (or chmod 700 an existing one).", p = u => {
    if (u.isSymbolicLink()) throw new Qg(`--messaging-socket-path directory must be a real directory, not a symlink: ${o}. ${s}`);
    if (!u.isDirectory()) throw new Qg(`--messaging-socket-path parent is not a directory: ${o}.`);
    let S = process.getuid?.();
    if (S !== void 0 && u.uid !== S) throw new Qg(`--messaging-socket-path directory ${o} is not owned by you (uid ${u.uid}). ${s}`);
    if ((u.mode & 63) !== 0) throw new Qg(`--messaging-socket-path directory ${o} is not private (mode ${(u.mode & 4095).toString(8)}); the socket directory must be mode 0700 so no other user or group can reach or replace the socket. ${s}`);
  }, _ = async () => {
    try {
      return await L(o);
    } catch (u) {
      let S = E(u);
      if (W(u)) return;
      if (S === "ENOTDIR" || S === "EACCES" || S === "ELOOP" || S === "ENAMETOOLONG") throw new Qg(`--messaging-socket-path directory is not usable: ${o} (${S}). Fix the path or its permissions, or choose another path. ${s}`);
      throw new Qg(`--messaging-socket-path directory could not be examined: ${o} (${S ?? String(u)}). ${s}`);
    }
  }, w = await _();
  if (w !== void 0) return p(w), r;
  let h = process.getuid?.(), c = [];
  for (let u = I(o); ;u = I(u)) {
    let S;
    try {
      S = await L(u);
    } catch (v) {
      if (!W(v)) throw new Qg(`--messaging-socket-path: cannot inspect ${u} (${E(v) ?? v}). ${s}`);
      c.unshift(u);
    }
    if (S !== void 0) {
      if (h !== void 0 && S.uid !== h && S.uid !== 0) throw new Qg(`--messaging-socket-path: ${u} ${S.isSymbolicLink() ? "is a symlink" : "is a directory"} owned by another user \u2014 refusing to create your sockets directory ${S.isSymbolicLink() ? "through" : "inside"} it. ${s}`);
      break;
    }
    if (I(u) === u) break;
  }
  let D = !1;
  try {
    for (let u of c) try {
      await te(u, {
        mode: 448
      });
    } catch (S) {
      if (E(S) !== "EEXIST") throw S;
      let v = await L(u);
      if (!v.isDirectory() || h !== void 0 && v.uid !== h) throw new Qg(`--messaging-socket-path: ${u} appeared while your sockets directory was being created and is not a directory you own \u2014 refusing to use it. ${s}`);
    }
    try {
      await te(o, {
        mode: 448
      }), D = !0;
    } catch (u) {
      if (E(u) !== "EEXIST") throw u;
    }
  } catch (u) {
    if (u instanceof Qg) throw u;
    throw new Qg(`--messaging-socket-path directory ${o} does not exist and could not be created (${E(u) ?? u}). ${s}`);
  }
  let k = await _();
  if (k === void 0) throw new Qg(`--messaging-socket-path directory ${o} vanished while being set up. ${s}`);
  if (!D) return p(k), r;
  return p(k), r;
}

async function _1s(e, n, i = {}) {
  d().startInFlight = !0;
  try {
    return await mn(e, n, i);
  } finally {
    d().startInFlight = !1;
  }
}

async function mn(e, n, i = {}) {
  let o = i.profileStartup ? performance.now() : void 0, s = h => {
    if (o === void 0) return;
    let c = performance.now();
    _r(h, c - o, o), o = c;
  };
  if (d().lastStartFailureCause = "bind_failed", d().lastStartDegradedCause = void 0, 
  !V0(e)) {
    if (t(`[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`, {
      level: "error"
    }), G(), d().lastStartFailureCause = "path_refused", i.isExplicit) throw new Qg(`--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`);
    return;
  }
  if (!i.isExplicit && !0 && !ie(e)) e = ue(e);
  if (i.isExplicit) {
    if (e = await y1s(e), await me(e) === "live") throw new Qg(`--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`);
  } else {
    let h = I(e);
    try {
      await Re(h);
    } catch (c) {
      let D = fn(c) ? await hQt() : void 0, k = D === void 0 ? void 0 : ue(GVo(D)), u = k === void 0 ? void 0 : N(k, "..");
      if (k === void 0 || u === void 0 || u === h) return $e(h, c, De(c));
      let S = Te(c);
      t(`[uds-messaging] sockets directory ${h} refused (${l(c)}${S ? `; refused component: ${S}` : ""}); trying the per-uid fallback ${u}`, {
        level: "warn"
      });
      try {
        await Re(u);
      } catch (v) {
        return $e(u, v, De(v));
      }
      e = k, we("primary_dir_refused_fell_back");
    }
  }
  if (i.isExplicit) try {
    await re(e);
  } catch {}
  if (d().activeSocketPath = e, i.profileStartup) mo("uds_inbox_dir_ready");
  s("setup_uds_dir_ms");
  let p, _;
  try {
    p = Be({
      allowHalfOpen: !0
    }, h => {
      d().connectedClients.add(h), t("[uds-messaging] Client connected"), nn(h), h.on("close", () => {
        d().connectedClients.delete(h), t("[uds-messaging] Client disconnected");
      });
    });
  } catch (h) {
    Y(), t(`[uds-messaging] Failed to create server: ${String(h)}`, {
      level: "error"
    }), G();
    return;
  }
  p.on("error", h => {
    t(`[uds-messaging] Server error: ${h.message}`, {
      level: "error"
    });
  }), d().authRequired = i.requireAuth ?? N2n(), d().firstLineDeadlineMs = i.firstLineDeadlineMs ?? IJn;
  let w = XHs();
  d().activeTokens = w;
  try {
    if (i.isExplicit) {
      if (!await ne(p, e)) throw Error("listen EADDRINUSE on the requested socket path");
    } else e = await on(p, e), d().activeSocketPath = e;
    if (i.profileStartup) mo("uds_inbox_listening");
    s("setup_uds_listen_ms");
    {
      let k = await hQt(), u = process.getuid?.();
      d().peerDirOwnerUids = [ ...u !== void 0 ? [ u ] : [], ...k !== void 0 && k !== u ? [ k ] : [] ];
    }
    p.unref();
    let h = bt(async () => {
      t("[uds-messaging] Shutting down"), await j(p, e, n);
    });
    _ = h, await Ae(e, 384);
    try {
      d().activeKeyFile = await JHs(e, w.peerToken, n, {
        sweepPermitted: await TBe()
      }), hn();
    } catch (k) {
      if (d().authRequired) {
        if (t(`[uds-messaging] Failed to publish the inbox auth key (refusing to run an inbox no peer can authenticate to): ${k}`, {
          level: "error"
        }), d().lastStartFailureCause = "key_publish_failed", await j(p, e, n, {
          settleHeld: !1
        }), h(), G(), i.isExplicit) throw new Qg(`--messaging-socket-path: bound ${e} but could not publish its auth key (${E(k) ?? k}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`);
        return;
      }
      t(`[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${k}`, {
        level: "warn"
      }), we("key_publish_failed");
    }
    if (i.profileStartup) mo("uds_inbox_key_published");
    s("setup_uds_publish_ms"), process.env.CLAUDE_CODE_MESSAGING_SOCKET = e, bT.set("CLAUDE_CODE_MESSAGING_TOKEN", w.childToken), 
    ufo(UK(e));
    let c = UK(e);
    return HGr(Oe), ZE().senderMode = VVo, jQn((k, u, S, v, b) => wue(k, {
      action: "peer_idle_notice",
      ...u,
      from: c,
      ...v ? gn() : {}
    }, {
      ...S !== void 0 && {
        expectPeerPid: S
      },
      ...b !== void 0 && {
        expectPeerProcStart: b
      },
      storageV5: n
    })), G4r((k, u, S, v) => wue(k, {
      action: "artifact_replies_yielded",
      ...u,
      from: c
    }, {
      ...S !== void 0 && {
        expectPeerPid: S
      },
      ...v !== void 0 && {
        expectPeerProcStart: v
      },
      storageV5: n
    }), c), zQn(k => _fo(k)), MGr((k, u, S) => {
      let v = k.origin?.kind === "peer" ? k.origin : void 0, b = v?.from;
      if (typeof b !== "string") return;
      let R = PJn(b, e, v?.verifiedPeerPid);
      if (R === void 0) {
        t(`[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${Bg(b)})`);
        return;
      }
      return wue(R, {
        action: "peer_message_status",
        ...u === "refused" ? {
          status: "expired",
          status_detail: "refused"
        } : {
          status: u
        },
        reason: pn(u),
        from: c,
        ...typeof v?.msg_id === "string" && {
          orig_msg_id: v.msg_id
        },
        ...u === "dropped" && S !== void 0 && {
          drop_reason: S.dropReason,
          dropped_msg_ids: S.droppedMsgIds
        }
      }, {
        ...v?.verifiedPeerPid !== void 0 && {
          expectPeerPid: v.verifiedPeerPid
        },
        ...v?.verifiedPeerProcStart !== void 0 && {
          expectPeerProcStart: v.verifiedPeerProcStart
        },
        storageV5: n
      }).catch(x => t(`[uds-messaging] hold-receipt send failed to ${Bg(b)}: ${GV(String(x))}`));
    }), t(`[uds-messaging] Listening: ${e}`, {
      level: "info"
    }), t(`[uds-messaging] Inject messages (auth line ${d().authRequired ? "REQUIRED" : "optional"} here): { echo '{"type":"auth","token":"'"$CLAUDE_CODE_MESSAGING_TOKEN"'"}'; echo '{"type":"user","message":{"role":"user","content":"hello"}}'; } | socat - UNIX-CONNECT:${e}`, {
      level: "info"
    }), t(`[uds-messaging] Connect when the data is ready (e.g. out=$(cmd); printf '%s\\n' "$out" | ${"nc -N -U"} "$CLAUDE_CODE_MESSAGING_SOCKET" \u2014 or the socat form above): a connection that sends no complete line within ${d().firstLineDeadlineMs} ms is closed`, {
      level: "info"
    }), d().lastStartFailureCause = void 0, tn(p, e, n, h);
  } catch (h) {
    if (h instanceof Qg) throw h;
    if (i.isExplicit) {
      let c = E(h);
      if (_ !== void 0) throw await j(p, e, n, {
        settleHeld: !1
      }), _(), G(), d().lastStartFailureCause = "post_bind_setup_failed", new Qg(`--messaging-socket-path: bound ${e} but could not finish setting the socket up (${c ?? String(h)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`);
      Y(), G();
      let D = c === "ENAMETOOLONG" ? "the path is too long for a Unix socket (max ~104 bytes); choose a shorter one" : c === "EADDRINUSE" ? "something already exists at that path and could not be replaced; remove it or choose another path" : c === "EACCES" || c === "EPERM" ? "permission denied in that directory" : "the socket could not be created there";
      throw new Qg(`--messaging-socket-path: cannot bind at ${e} (${c ?? String(h)}): ${D}.`);
    }
    if (_ !== void 0) await j(p, e, n, {
      settleHeld: !1
    }), _(), d().lastStartFailureCause = "post_bind_setup_failed";
    if (E(h) === "ENAMETOOLONG") t(`[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`, {
      level: "error"
    }); else t(`[uds-messaging] Failed to start: ${h}`, {
      level: "error"
    });
    Y(), G();
    return;
  }
}

function pn(e) {
  switch (e) {
   case "held":
    return "Your message is held for the recipient user's approval before it reaches their Claude session (permission-mode parity).";

   case "denied":
    return "The recipient user declined your message; it was not delivered to their Claude session.";

   case "expired":
    return "Your held message expired without approval and was not delivered to the recipient's Claude session.";

   case "delivered":
    return "Your previously-held message was approved and released to the recipient's Claude session.";

   case "refused":
    return "The recipient session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); your message was not delivered to its Claude.";

   case "dropped":
    return "The recipient's session dropped your message at its inbox (rate limit, duplicate, relay loop, or full queue); it was not delivered and will not be.";
  }
}

function gn() {
  let e = VVo();
  return e === void 0 ? {} : {
    from_mode: e
  };
}

function VVo() {
  if (!Vbt()) return;
  let e = na().inbound.getCurrentMode;
  if (e) try {
    return qbt(e());
  } catch {
    return;
  }
  let n = na().inbound.modeAtUnwire;
  return n !== void 0 ? qbt(n) : void 0;
}

function Ce(e) {
  return dDs(e) ? e : void 0;
}

function ce(e, n, i) {
  return ye({
    selfSentAncestry: n,
    verifiedPeerPid: e,
    childTokenPresented: i === "child",
    needsVerdict: NGr(),
    platform: O()
  });
}

function hn() {
  if (!process.listeners("exit").includes(KVo)) process.on("exit", KVo);
}

function KVo() {
  try {
    let e = d().activeKeyFile;
    if (e === void 0) return;
    Ge(e);
  } catch {}
}

export { Uqs, Bqs, CJn, RJn, jqs, xJn, Wqs, PJn, zqs, h1s, GVo, Gqs, y1s, _1s, VVo, KVo };
