// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { l, E, zr, W, jt } from "./chunk-b0z4bv3v.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { J, Ht } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { bt, Oy, _, pL, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { I, ne, nt } from "./chunk-5wbhf1bk.js";

import { Ct } from "./chunk-6ah1819r.js";

import { iL, Tn } from "./chunk-30n0xq4e.js";

import { Rd, Uln, a } from "./chunk-j016gcgm.js";

import { rr, XMo, VXe, LC, So, Uee } from "./chunk-wptm3jf5.js";

import { Dl } from "./chunk-4dwgr3et.js";

import { gX, Aj, it, ft } from "./chunk-zscnwzv2.js";

import { vu } from "./chunk-v7qc2kz8.js";

import { FJr, UJr, ges, xCn, hes, WJr, ks } from "./chunk-84yp45y8.js";

import { JAr } from "./chunk-xywp7esx.js";

import { Eqn } from "./chunk-9yajep3y.js";

import { INt, ONt, o$s, s$s, bj, YS, Dw } from "./chunk-w4hwgefc.js";

import { vU } from "./chunk-x35dw27e.js";

import { bLt } from "./chunk-qqd24q2y.js";

import { zd } from "./chunk-2my8wpr5.js";

import { A5e } from "./chunk-5ad06083.js";

import { _r } from "./chunk-35kwehd0.js";

import { r0n, o0n, Hbe, _Re } from "./chunk-sqb9meyh.js";

import { Bu, zRe } from "./chunk-wbxkeemq.js";

import { rWt } from "./chunk-a0kmybvw.js";

import { XAn } from "./chunk-5yfktqga.js";

import { Ohe, Mhe, Hhe } from "./chunk-cqnfahpy.js";

import { iBo } from "./chunk-ga6js7hm.js";

import { Npn, $pn } from "./chunk-cyvzs1ck.js";

import { cUe } from "./chunk-av9t4vjk.js";

import { XRs, kUe, JRs, yK, ZRs } from "./chunk-6dgmzxjg.js";

import { d$ } from "./chunk-sa0qpffh.js";

import { at } from "./chunk-0bq6eb61.js";

import { MOe } from "./chunk-fr91rt4p.js";

import { gu } from "./chunk-53fww9mk.js";

import { execFile as Po } from "child_process";

import { constants as Ao, statSync as vo } from "fs";

import { access as Ro, mkdir as yt, open as Oo, readFile as he, rmdir as Pn, stat as Gn, unlink as ge, writeFile as Ue } from "fs/promises";

import { homedir as _t, tmpdir as ko } from "os";

import { delimiter as ve, join as H, parse as Bo } from "path";

var Nt = [ "registry.npmjs.org", "jsr.io", "npm.jsr.io", "pypi.org", "files.pythonhosted.org", "index.crates.io", "proxy.golang.org" ];

import { X509Certificate as er } from "crypto";

import { open as tr } from "fs/promises";

var nr = 65536;

function be(n) {
  let e = n.match(bj);
  if (!e) return {
    ok: !1,
    reason: "no certificate block"
  };
  if (!n.split(bj).every((s, h) => h === e.length ? /^[ \t\r\n]*$/.test(s) : h === 0 && s === "" || /^[ \t\r\n]*\n$/.test(s))) return {
    ok: !1,
    reason: "something other than certificate blocks that each start a line"
  };
  let o = [];
  for (let s of e) {
    let h = s.replace(/^-----BEGIN CERTIFICATE-----/, "").replace(/-----END CERTIFICATE-----$/, "");
    if (!/^[A-Za-z0-9+/= \t\r\n]*$/.test(h)) return {
      ok: !1,
      reason: "a certificate block holds more than base64"
    };
    try {
      o.push(new er(s).raw.toString("base64"));
    } catch {
      return {
        ok: !1,
        reason: "a certificate block does not parse"
      };
    }
  }
  return {
    ok: !0,
    blocks: e,
    ders: o
  };
}

function de(n, e) {
  if (n === e) return "same";
  let r = be(n), o = be(e);
  if (!r.ok || !o.ok || r.ders.length !== o.ders.length) return "different";
  if (r.ders.every((s, h) => s === o.ders[h])) return "same";
  return r.ders.length === 2 && r.ders[0] === o.ders[1] && r.ders[1] === o.ders[0] ? "swapped" : "different";
}

async function Ce(n) {
  let e;
  try {
    e = await tr(n, Bu());
    let r = await e.stat();
    if (!r.isFile() || r.size > nr) return {
      state: "unreadable"
    };
    let o = Buffer.alloc(r.size + 1), {bytesRead: s} = await e.read(o, 0, o.length, 0);
    if (s !== r.size) return {
      state: "unreadable"
    };
    return {
      state: "read",
      text: new TextDecoder("utf-8", {
        fatal: !0,
        ignoreBOM: !0
      }).decode(o.subarray(0, s))
    };
  } catch (r) {
    return {
      state: W(r) ? "missing" : "unreadable"
    };
  } finally {
    await (e?.close().catch(() => {}));
  }
}

async function Se(n, e) {
  let r = await Ce(n);
  return r.state === "read" ? de(r.text, e) : "different";
}

import { createHash as dr } from "crypto";

import { isIP as fr } from "net";

import { readdir as Dt, readFile as Lt, readlink as or } from "fs/promises";

var Mt = "<pending>", Ft = "<lookup-failed>", ir = "<proc-net-unreadable>", ar = "<inode-not-found>", sr = "<pid-not-found>", $t = "<comm-unreadable>";

async function Gt(n, e) {
  let r = await cr(n, e);
  if (r.startsWith("<")) return r;
  let o = await ur(r);
  if (o === void 0) return sr;
  let s;
  try {
    s = lr(await Lt(`/proc/${o}/comm`, "utf8"));
  } catch {
    return $t;
  }
  return s.length > 0 ? s : $t;
}

function lr(n) {
  return n.replace(/[^\x20-\x7e]|</g, "").slice(0, 64);
}

async function cr(n, e) {
  let r = It(n), o = It(e), s = !1;
  for (let h of [ "/proc/net/tcp", "/proc/net/tcp6" ]) {
    let p;
    try {
      p = await Lt(h, "utf8");
    } catch {
      continue;
    }
    s = !0;
    for (let d of p.split(`\n`)) {
      let u = d.trim().split(/\s+/);
      if (u.length < 10 || !u[1].endsWith(":" + r) || !u[2].endsWith(":" + o)) continue;
      let y = u[9];
      if (y !== "0") return y;
    }
  }
  return s ? ar : ir;
}

function It(n) {
  return n.toString(16).toUpperCase().padStart(4, "0");
}

async function ur(n) {
  let e = `socket:[${n}]`, r;
  try {
    r = await Dt("/proc");
  } catch {
    return;
  }
  let o = r.filter(u => /^\d+$/.test(u)), s = await Promise.all(o.map(u => Dt(`/proc/${u}/fd`).catch(() => []))), h = [];
  for (let u = 0; u < o.length; u++) for (let y of s[u]) h.push({
    pid: o[u],
    fd: y
  });
  let d = (await Promise.all(h.map(u => or(`/proc/${u.pid}/fd/${u.fd}`).catch(() => "")))).indexOf(e);
  return d === -1 ? void 0 : h[d].pid;
}

var Ut = 524288, pr = 3e4, Kt = 0, gr = 1, mr = 2, hr = 3, Wt = 4, Xe = 2, yr = {
  openTimeoutMs: 1e4,
  openMaxAttempts: 3,
  openBackoffBaseMs: 100,
  sendHighWater: 4194304,
  sendLowWater: 1048576,
  drainPollMs: 50,
  sendPauseAfterPendingBytes: 0,
  pendingBytesCap: 33554432,
  sendStallTimeoutMs: 18e4,
  receiveHighWater: 4194304,
  receiveLowWater: 1048576,
  downloadQueuedReportBytes: 16777216,
  uploadQueuedReportBytes: 16777216,
  poolMax: 4,
  poolIdleTtlMs: 1e4,
  poolMaxAgeMs: 27e5,
  finGraceMs: 1e4
};

function Je(n) {
  let e = n.length, r = [], o = e;
  while (o > 127) r.push(o & 127 | 128), o >>>= 7;
  r.push(o);
  let s = new Uint8Array(1 + r.length + e);
  return s[0] = 10, s.set(r, 1), s.set(n, 1 + r.length), s;
}

function Ke(n, e = 0) {
  let r = [ 16, n ];
  if (e !== 0) r.push(24, e);
  return new Uint8Array(r);
}

function wr(n) {
  let e = {
    data: n.subarray(0, 0),
    control: Kt,
    version: 0
  };
  return A5e(n, {
    onVarint(o, s) {
      if (o === 2) e.control = s; else if (o === 3) e.version = s;
    },
    onBytes(o, s) {
      if (o === 1) e.data = s;
    }
  }) ? e : null;
}

function xe(n) {
  let e = INt(n);
  if (e.startsWith("*.")) return "*." + xe(e.slice(2));
  let r = e.replace(/\.+$/, "").toLowerCase(), o = ONt(r).replace(/\.+$/, "");
  return o !== "" ? o : r;
}

function Tr(n) {
  let e = n.split(".").map(Number);
  return e[0] === 10 || e[0] === 172 && e[1] >= 16 && e[1] <= 31 || e[0] === 192 && e[1] === 168 || e[0] === 100 && e[1] >= 64 && e[1] <= 127;
}

function ze(n, e) {
  return n === void 0 || br(e, n.includeHosts);
}

function br(n, e) {
  let r = xe(n);
  for (let o of e) {
    let s = xe(o);
    if (s === "") continue;
    if (s === "*") return !0;
    if (s.startsWith("*.")) {
      let p = s.slice(1);
      if (r.endsWith(p)) return !0;
      continue;
    }
    if (!s.includes("*")) {
      if (r === s) return !0;
      continue;
    }
    if (new RegExp("^" + s.split("*").map(p => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("[^.]+") + "$").test(r)) return !0;
  }
  return !1;
}

function Cr(n) {
  let e = xe(n);
  if (e === "localhost" || e === "ip6-localhost" || e === "ip6-loopback" || e === "metadata.google.internal" || e === "instance-data" || e === "instance-data.ec2.internal" || e.endsWith(".localhost")) return "blocked_hostname";
  let r = e.normalize("NFKC");
  if (r.includes("[") || r.includes(":")) return "ipv6_literal";
  let o = e.split("."), s = /^(0|[1-9]\d{0,2})$/;
  if (!(o.length === 4 && o.every(d => s.test(d) && Number(d) <= 255))) return s$s(e) !== null || o$s(e) ? "noncanonical_ipv4" : null;
  let p = o.map(Number);
  if (p[0] === 0) return "unspecified";
  if (p[0] === 127) return "loopback";
  if (p[0] === 169 && p[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}

function Sr(n) {
  if (!n) return "peer_unreadable";
  if (n.includes(":")) return xr(n);
  let e = n.split(".").map(Number);
  if (e.length !== 4 || e.some(r => !Number.isFinite(r) || r < 0 || r > 255)) return "peer_unreadable";
  return qt(e, n);
}

function qt(n, e) {
  if (n[0] === 0) return "unspecified";
  if (n[0] === 127) return "loopback";
  if (n[0] === 169 && n[1] === 254) return "link_local";
  if (e === "100.100.100.200") return "metadata_alibaba";
  if (e === "168.63.129.16") return "metadata_azure";
  if (e === "192.0.0.192") return "metadata_reserved";
  return null;
}

function xr(n) {
  let e = Er(n);
  if (!e) return "peer_unreadable";
  let r = e.slice(0, 12), o = r.every((d, u) => d === (u === 10 || u === 11 ? 255 : 0)), s = r.every(d => d === 0), h = e[0] === 0 && e[1] === 100 && e[2] === 255 && e[3] === 155 && r.slice(4).every(d => d === 0);
  if (o || s || h) {
    let d = [ e[12], e[13], e[14], e[15] ], u = d.join(".");
    if (s && d.every(y => y === 0)) return "unspecified";
    if (s && d[0] === 0 && d[1] === 0 && d[2] === 0 && d[3] === 1) return "loopback";
    return qt(d, u);
  }
  if (((e[0] ?? 0) & 224) === 32) return null;
  if ((e[0] ?? 0) === 254 && ((e[1] ?? 0) & 192) === 128) return "link_local";
  if (((e[0] ?? 0) & 254) === 252) return "unique_local";
  return "v6_non_global";
}

function Er(n) {
  let e = n.indexOf("%"), o = (e >= 0 ? n.slice(0, e) : n).toLowerCase().split("::");
  if (o.length > 2) return null;
  let s = o[0] ? o[0].split(":") : [], h = o.length === 2 && o[1] ? o[1].split(":") : [], p = o.length === 2 ? h : s, d = p.at(-1), u = [];
  if (d && d.includes(".")) {
    let A = d.split(".").map(Number);
    if (A.length !== 4 || A.some(P => !Number.isFinite(P) || P < 0 || P > 255)) return null;
    u = A, p.pop();
  }
  let y = A => {
    let P = [];
    for (let R of A) {
      if (!/^[0-9a-f]{1,4}$/.test(R)) return null;
      let D = parseInt(R, 16);
      P.push(D >> 8, D & 255);
    }
    return P;
  }, w = y(o.length === 2 ? s : []), b = y(p);
  if (w === null || b === null) return null;
  let C = o.length === 2 ? w : b, x = o.length === 2 ? (b ?? []).concat(u) : u, T = 16 - C.length - x.length;
  if (T < 0 || o.length === 1 && T !== 0) return null;
  let S = C.concat(Array(T).fill(0), x);
  return S.length === 16 ? S : null;
}

function Vt(n, e, r) {
  let o = e.directUpstream;
  if (!o) return;
  if (o.writeBuf.length > 0) o.writeBuf.push(r), o.writeBufBytes += r.length; else {
    let s = o.write(r);
    if (s < r.length) o.writeBuf.push(r.subarray(s)), o.writeBufBytes += r.length - s;
  }
  if (o.writeBufBytes > e.limits.pendingBytesCap) {
    M(e.ctx, "direct_writebuf_cap", `direct-upstream write buffer exceeded ${e.limits.pendingBytesCap} bytes`, Y(e)), 
    e.closed = !0;
    try {
      o.end();
    } catch {}
    n.end();
  }
}

var Jt = "[\\u0000-\\u001f\\u007f-\\u009f]", Pr = new RegExp(Jt, "u"), qe = new RegExp(Jt, "gu");

function Z(n, e, r) {
  let o = n.badEventBudgets.get(e);
  if (!o) o = {
    bucket: Hhe(Ohe, Mhe),
    suppressed: 0
  }, n.badEventBudgets.set(e, o);
  if (!o.bucket.tryConsume()) return o.suppressed++, !1;
  return m("agent_proxy_request", e, o.suppressed > 0 ? {
    ...r,
    suppressed_since_last: o.suppressed
  } : r), o.suppressed = 0, !0;
}

function M(n, e, r, o) {
  let s = {
    ts: (new Date).toISOString(),
    kind: e,
    detail: r.replace(qe, "?"),
    host: o?.replace(qe, "?")
  };
  if (n.failures.push(s), n.failures.length > FJr) n.failures.shift();
  n.onFailure?.(s);
}

function Y(n) {
  return n.connectAuthority || void 0;
}

function zt(n, e, r, o, s) {
  n.write(`HTTP/1.1 ${e} ${r}\r\nContent-Type: ${o}\r\nContent-Length: ${Buffer.byteLength(s)}\r\nConnection: close\r\n\r\n` + s);
}

function X(n, e, r, o) {
  zt(n, e, r, "text/plain; charset=utf-8", `agent-proxy relay: ${o}\nGET /__agentproxy/status on this proxy port shows proxy state and recent failures.\n`);
}

function Ar(n, e, r) {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    pendingBytes: 0,
    startedAt: Date.now(),
    uploadBytes: 0,
    downloadBytes: 0,
    pendingPeakBytes: 0,
    uploadPauses: 0,
    uploadAborted: !1,
    connectRejected: !1,
    wsOpen: !1,
    established: !1,
    closed: !1,
    connectLine: "",
    connectAuthority: "",
    clientProcess: Mt,
    wsAttempt: 0,
    paused: !1,
    sendStallBuffered: 0,
    sendStallSince: 0,
    readPaused: !1,
    limits: n,
    pool: e,
    finSeen: !1,
    localClosed: !1,
    ctx: r
  };
}

function vr(n, e, r, o) {
  let s = () => new Promise((h, p) => {
    let d = !1, u = on(n, e), y = setTimeout(() => {
      if (d) return;
      d = !0;
      try {
        u.close();
      } catch {}
      p(Error("handshake timeout"));
    }, r);
    u.onopen = () => {
      if (d) return;
      d = !0, clearTimeout(y);
      try {
        u.close();
      } catch {}
      h();
    }, u.onerror = w => {
      if (d) return;
      d = !0, clearTimeout(y), p(Error(w?.message ?? "WebSocket error"));
    };
  });
  return (async () => {
    let h;
    for (let p = 0; p < o; p++) try {
      await s();
      return;
    } catch (d) {
      if (h = d, p + 1 < o) await J(Math.min(200 * 2 ** p, 2e3));
    }
    throw h;
  })();
}

var Rr = 1048576, Or = 33554432;

function kr(n) {
  return new Promise((e, r) => {
    let o = !1, s = Buffer.alloc(0), h = Bun.listen({
      hostname: "127.0.0.1",
      port: 0,
      socket: {
        data(w, b) {
          if (o) return;
          s = Buffer.concat([ s, b ]);
          let C = s.indexOf(`\r\n\r\n`);
          if (C < 0) return;
          let x = /sec-websocket-key: *(\S+)/i.exec(s.subarray(0, C).toString("latin1"))?.[1] ?? "", T = dr("sha1").update(x + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
          if (w.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${T}\r\n\r\n`), 
          o = !0, typeof w.pause === "function") w.pause();
        }
      }
    }), p = !1, d = w => {
      if (p) return;
      p = !0, clearTimeout(u);
      try {
        y.close();
      } catch {}
      if (h.stop(!0), w instanceof Error) r(w); else e(w);
    }, u = setTimeout(w => w(Error("handshake timeout")), n, d), y = new globalThis.WebSocket(`ws://127.0.0.1:${h.port}/`);
    y.binaryType = "arraybuffer", y.onerror = () => d(Error("WebSocket error")), y.onclose = () => d(Error("closed before the check completed")), 
    y.onopen = () => {
      let w = new Uint8Array(Rr);
      try {
        for (let b = 0; b < Or; b += w.length) if (y.send(w), y.bufferedAmount > 0) {
          d(!0);
          return;
        }
      } catch {
        d(Error("send failed"));
        return;
      }
      d(!1);
    };
  });
}

async function Qt(n) {
  let e = n.getToken ?? (() => n.token), r = {
    connectHeader: () => "Basic " + Buffer.from(`${n.sessionId}:${e()}`).toString("base64"),
    wsHeader: () => `Bearer ${e()}`
  }, o = {
    ...yr,
    ...n.limits
  }, s = {
    statusProvider: n.statusProvider,
    failures: [],
    onFailure: n.onFailure,
    downloadQueuedBytes: 0,
    downloadQueuedPeakBytes: 0,
    uploadPausedClients: 0,
    uploadPauses: 0,
    selective: n.selective,
    upstreamOpened: !1,
    badEventBudgets: new Map
  }, h = Nr(n.wsUrl, r, o, s);
  function p() {
    vr(n.wsUrl, r, o.openTimeoutMs, o.openMaxAttempts).then(() => {
      t("[agent-proxy] startup reachability probe: ok");
    }).catch(d => {
      if (s.upstreamOpened) {
        t(`[agent-proxy] startup reachability probe failed (${d?.message ?? String(d)}) after a tunnel already opened; ignoring`, {
          level: "warn"
        });
        return;
      }
      s.startupError = (`hosted agent-proxy unreachable at startup: ${d?.message ?? String(d)}. Tunneled CONNECTs get one dial attempt each and return 502 until ` + "one reaches upstream (which clears this) \u2014 inference is " + "force-tunneled, so a session without the hosted proxy is non-functional regardless. Check network egress to the CCR base URL.").replace(qe, "?"), 
      t(`[agent-proxy] ${s.startupError}`, {
        level: "error"
      }), f("agent_proxy_init", "agent_proxy_startup_probe_failed");
    }), kr(o.openTimeoutMs).then(d => {
      if (s.bufferedAmountTrusted = d, !d) t("[agent-proxy] WebSocket.bufferedAmount stays 0 with bytes queued: the upload gate cannot engage on this runtime", {
        level: "warn"
      }), f("agent_proxy_init", "agent_proxy_buffered_amount_untrusted");
    }).catch(d => {
      t(`[agent-proxy] bufferedAmount self-check did not run: ${d?.message ?? String(d)}`, {
        level: "warn"
      });
    });
  }
  return t(`[agent-proxy] relay listening on 127.0.0.1:${h.port}`), {
    ...h,
    runStartupChecks: p
  };
}

function Yt(n) {
  if (n.ctx.downloadQueuedBytes -= n.writeBufBytes, n.writeBufBytes = 0, n.writeBuf = [], 
  De(n), pe(n), n.writeBufPeakBytes > n.limits.receiveHighWater || n.writeBufPeakBytes >= n.limits.downloadQueuedReportBytes) i("tengu_agent_proxy_download_queue", {
    download_queued_peak_bytes: n.writeBufPeakBytes
  });
  if (n.writeBufPeakBytes = 0, n.uploadPauses > 0 || n.pendingPeakBytes >= n.limits.uploadQueuedReportBytes) i("tengu_agent_proxy_upload_queue", {
    upload_queued_peak_bytes: n.pendingPeakBytes,
    upload_pauses: n.uploadPauses,
    upload_aborted: n.uploadAborted
  });
  n.pendingPeakBytes = 0, n.uploadPauses = 0;
}

function Br() {
  return "pause" in globalThis.WebSocket.prototype;
}

function Nr(n, e, r, o) {
  let s = [], h = Bun.listen({
    hostname: "127.0.0.1",
    port: 0,
    socket: {
      open(p) {
        if (p.data = {
          ...Ar(r, s, o),
          writeBuf: [],
          writeBufBytes: 0,
          writeBufPeakBytes: 0,
          endAfterDrain: !1,
          destroyAfterDrain: !1
        }, typeof p.pause === "function") p.data.clientRead = p;
        Gt(p.remotePort, p.localPort).catch(() => Ft).then(d => {
          p.data.clientProcess = d;
        });
      },
      data(p, d) {
        let u = p.data;
        if (u.closed) return;
        let y = {
          write: w => {
            let b = typeof w === "string" ? Buffer.from(w, "utf8") : w, C = u.writeBuf.length > 0 ? 0 : p.write(b);
            if (C < 0 || C === b.length) return;
            let x = b.subarray(C);
            if (u.writeBuf.push(x), u.writeBufBytes += x.length, u.ctx.downloadQueuedBytes += x.length, 
            u.writeBufBytes > u.writeBufPeakBytes) u.writeBufPeakBytes = u.writeBufBytes;
            if (u.ctx.downloadQueuedBytes > u.ctx.downloadQueuedPeakBytes) u.ctx.downloadQueuedPeakBytes = u.ctx.downloadQueuedBytes;
            if (u.writeBufBytes > u.limits.receiveHighWater) Lr(u);
          },
          end: () => {
            if (pe(u), u.writeBuf.length > 0) {
              u.endAfterDrain = !0;
              return;
            }
            p.end();
          },
          destroy: () => {
            if (pe(u), u.writeBuf.length > 0) {
              u.destroyAfterDrain = !0;
              return;
            }
            p.terminate();
          }
        };
        u.client = y, Dr(y, u, d, n, e);
      },
      drain(p) {
        let d = p.data;
        while (d.writeBuf.length > 0) {
          let u = d.writeBuf[0], y = p.write(u);
          if (y < 0) break;
          if (d.writeBufBytes -= y, d.ctx.downloadQueuedBytes -= y, y < u.length) {
            d.writeBuf[0] = u.subarray(y);
            break;
          }
          d.writeBuf.shift();
        }
        if (d.writeBufBytes <= d.limits.receiveLowWater) De(d);
        if (d.writeBuf.length > 0) return;
        if (d.destroyAfterDrain) {
          d.destroyAfterDrain = !1, p.terminate();
          return;
        }
        if (d.endAfterDrain) d.endAfterDrain = !1, p.end();
      },
      close(p) {
        let d = p.data;
        if (Yt(d), tn(d)) return;
        if (d.localClosed && d.finCloseTimer) return;
        if (!d.closed && an(d)) return;
        Q(d);
      },
      error(p, d) {
        t(`[agent-proxy] client socket error: ${d.message}`);
        let u = p.data;
        if (Yt(u), u.localClosed && u.finCloseTimer) return;
        Q(u);
      }
    }
  });
  return {
    port: h.port,
    stop: () => {
      Ur(s), h.stop(!0);
    }
  };
}

function Dr(n, e, r, o, s) {
  if (!e.ws && !e.directUpstream && !e.directDialing) {
    if (e.connectBuf = Buffer.concat([ e.connectBuf, r ]), e.connectBuf[0] === 22) {
      if (Z(e.ctx, "agent_proxy_request_tls_to_relay")) t("[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)", {
        level: "warn"
      });
      M(e.ctx, "tls_to_relay", "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port"), 
      e.closed = !0, n.end();
      return;
    }
    let h = e.connectBuf.indexOf(`\r\n\r\n`);
    if (h === -1) {
      if (e.connectBuf.length > 8192) e.closed = !0, X(n, 400, "Bad Request", "request headers exceeded 8 KiB before the end of the CONNECT request"), 
      n.end(), Z(e.ctx, "agent_proxy_request_header_too_long"), M(e.ctx, "header_too_long", "headers exceeded 8 KiB");
      return;
    }
    let p = e.connectBuf.subarray(0, h).toString("utf8"), d = nt(p, `\r\n`), u = d.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!u) {
      if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(d)) {
        let S = {
          ...e.ctx.statusProvider?.() ?? {},
          startupError: e.ctx.startupError,
          recentRelayFailures: e.ctx.failures,
          downloadQueuedBytes: e.ctx.downloadQueuedBytes,
          downloadQueuedPeakBytes: e.ctx.downloadQueuedPeakBytes,
          downloadReceivePauseSupported: Br(),
          downloadReceiveGateEnabled: Number.isFinite(e.limits.receiveHighWater),
          uploadPausedClients: e.ctx.uploadPausedClients,
          uploadPauses: e.ctx.uploadPauses,
          uploadPauseSupported: e.clientRead !== void 0,
          uploadGateEnabled: Number.isFinite(e.limits.sendPauseAfterPendingBytes),
          bufferedAmountTrusted: e.ctx.bufferedAmountTrusted ?? null
        };
        zt(n, 200, "OK", "application/json", _(S, null, 2) + `\n`), e.closed = !0, n.end();
        return;
      }
      e.closed = !0, X(n, 405, "Method Not Allowed", "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported \u2014 common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay."), 
      n.end(), Z(e.ctx, "agent_proxy_request_not_connect");
      let [C = "", x = ""] = d.split(/\s+/), T = C;
      try {
        let S = new URL(x);
        T = `${C} ${S.protocol}//${S.host}`;
      } catch {}
      M(e.ctx, "not_connect", `non-CONNECT request: ${T.slice(0, 120)}`);
      return;
    }
    e.connectLine = d, e.connectAuthority = u[1] ?? "";
    let y = e.connectBuf.subarray(h + 4);
    if (y.length > 0) {
      if (je(n, e, Buffer.from(y)), e.closed) return;
    }
    e.connectBuf = Buffer.alloc(0);
    let w = e.ctx.selective, b = e.connectAuthority;
    if (w && b) {
      let C = b.lastIndexOf(":"), x = C > 0 ? b.slice(0, C) : b, T = xe(x.replace(/^\[|\]$/g, ""));
      if (Pr.test(T)) M(e.ctx, "selective_invalid_host", "control byte in CONNECT host", T); else if (fr(T) === 4 && !Tr(T)) ; else if (!ze(w, T)) {
        let S = C > 0 ? Number(b.slice(C + 1)) : 443;
        Mr(n, e, T, S);
        return;
      }
    }
    Hr(n, e, o, s);
    return;
  }
  if (e.directUpstream) {
    Vt(n, e, r);
    return;
  }
  if (e.directDialing) {
    je(n, e, Buffer.from(r));
    return;
  }
  if (!e.wsOpen || e.paused) {
    if (je(n, e, Buffer.from(r)), !e.closed && e.pendingBytes > e.limits.sendPauseAfterPendingBytes) Ir(e);
    return;
  }
  if (e.redialEligible = !1, e.ws) Ze(e, e.ws, r), en(e);
}

function je(n, e, r) {
  if (e.pending.push(r), e.pendingBytes += r.length, e.pendingBytes > e.pendingPeakBytes) e.pendingPeakBytes = e.pendingBytes;
  if (e.pendingBytes > e.limits.pendingBytesCap) t(`[agent-proxy] pending buffer cap (${e.limits.pendingBytesCap}) exceeded; aborting request`, {
    level: "warn"
  }), Zt(n, e, "pending_overflow", e.established ? `upload aborted: more than ${e.limits.pendingBytesCap} request bytes buffered while the tunnel was not draining` : "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)");
}

function Zt(n, e, r, o) {
  if (Z(e.ctx, `agent_proxy_request_${r}`), M(e.ctx, r, o, Y(e)), e.closed = !0, e.uploadAborted = !0, 
  !e.established) X(n, 502, "Bad Gateway", o), n.end(); else {
    e.pending = [], e.pendingBytes = 0;
    let s = an(e);
    if (n.destroy(), s) return;
  }
  Q(e);
}

function en(n) {
  if (n.paused || !n.ws) return;
  if (n.ws.bufferedAmount > n.limits.sendHighWater) n.paused = !0, n.sendStallBuffered = n.ws.bufferedAmount, 
  n.sendStallSince = Date.now(), n.drainTimer = setInterval($r, n.limits.drainPollMs, n);
}

function $r(n) {
  let e = n.ws;
  if (!e || e.readyState !== WebSocket.OPEN || n.closed) {
    fe(n);
    return;
  }
  let r = Date.now();
  if (e.bufferedAmount < n.sendStallBuffered) n.sendStallBuffered = e.bufferedAmount, 
  n.sendStallSince = r; else if (n.readPaused && n.client && r - n.sendStallSince > n.limits.sendStallTimeoutMs) {
    fe(n);
    let o = Math.round((r - n.sendStallSince) / 1e3);
    t(`[agent-proxy] tunnel accepted no request bytes for ${o}s; aborting request`, {
      level: "warn"
    }), Zt(n.client, n, "upload_stalled", `upload aborted: the tunnel accepted no request bytes for ${o}s`);
    return;
  }
  if (e.bufferedAmount > n.limits.sendLowWater) return;
  while (n.pending.length > 0 && e.bufferedAmount <= n.limits.sendHighWater) {
    let o = n.pending.shift();
    n.pendingBytes -= o.length, n.redialEligible = !1, Ze(n, e, o);
  }
  if (n.sendStallBuffered = e.bufferedAmount, n.sendStallSince = r, n.pending.length === 0) n.paused = !1, 
  fe(n), pe(n);
}

function fe(n) {
  if (n.drainTimer) clearInterval(n.drainTimer), n.drainTimer = void 0;
}

function Ir(n) {
  if (n.readPaused || !n.clientRead) return;
  n.readPaused = !0, n.uploadPauses++, n.ctx.uploadPausedClients++, n.ctx.uploadPauses++, 
  n.clientRead.pause();
}

function pe(n) {
  if (!n.readPaused || !n.clientRead) return;
  n.readPaused = !1, n.ctx.uploadPausedClients--, n.clientRead.resume();
}

function Lr(n) {
  let e = n.ws;
  if (!e?.pause || e.readyState !== WebSocket.OPEN || e.isPaused === !0) return;
  e.pause();
}

function De(n) {
  let e = n.ws;
  if (!e?.resume || e.readyState !== WebSocket.OPEN || e.isPaused === !1) return;
  e.resume();
}

function Hr(n, e, r, o) {
  let s = Fr(e);
  if (s) {
    e.ws = s.ws, e.wsOpen = !0, e.pinger = s.pinger, e.wsMeta = s.meta;
    let h = e.pending.slice();
    e.redialEligible = !0;
    let p = !1, d = u => {
      if (p || e.closed) return;
      if (p = !0, e.redialEligible = !1, t(`[agent-proxy] pooled ws failed before response (${u}); falling through to fresh dial`), 
      e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
      if (e.pooledDeadline = void 0, e.pinger) clearInterval(e.pinger), e.pinger = void 0;
      s.ws.onopen = s.ws.onmessage = s.ws.onerror = s.ws.onclose = null;
      try {
        s.ws.close();
      } catch {}
      if (e.ws = void 0, e.wsOpen = !1, e.wsMeta = void 0, fe(e), e.paused = !1, e.pending = [ ...h, ...e.pending ], 
      e.pendingBytes = e.pending.reduce((y, w) => y + w.length, 0), e.pendingBytes > e.pendingPeakBytes) e.pendingPeakBytes = e.pendingBytes;
      e.uploadBytes = 0, Ve(n, e, r, o);
    };
    e.pooledDeadline = () => {
      if (e.openTimer = void 0, e.closed || e.established) return;
      if (e.redialEligible) {
        d("pooled ws unresponsive");
        return;
      }
      e.closed = !0, Z(e.ctx, "agent_proxy_request_ws_error"), X(n, 502, "Bad Gateway", "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received"), 
      n.end(), M(e.ctx, "ws_error", "pooled tunnel unresponsive before first response", Y(e)), 
      Q(e);
    }, e.openTimer = setTimeout(Kr, e.limits.openTimeoutMs, e), nn(n, e, s.ws, d), rn(e, s.ws, o.connectHeader());
    return;
  }
  Ve(n, e, r, o);
}

function Mr(n, e, r, o) {
  let s = Cr(r);
  if (s) {
    e.closed = !0, X(n, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${r} (${s})`), 
    n.end(), Z(e.ctx, "agent_proxy_direct_blocked_" + s), M(e.ctx, "direct_blocked", s, Y(e));
    return;
  }
  if (!Number.isInteger(o) || o < 1 || o > 65535) {
    e.closed = !0, X(n, 400, "Bad Request", "invalid CONNECT port"), n.end(), Z(e.ctx, "agent_proxy_request_bad_connect_port"), 
    M(e.ctx, "bad_connect_port", "invalid CONNECT port", Y(e));
    return;
  }
  e.directDialing = !0;
  let h = !1, p = setTimeout(() => {
    if (e.closed) return;
    h = !0, e.closed = !0, e.directDialing = !1, X(n, 504, "Gateway Timeout", `agent-proxy selective relay: direct dial to ${r}:${o} timed out after ${e.limits.openTimeoutMs}ms`), 
    n.end(), M(e.ctx, "direct_dial_timeout", `${r}:${o}`, Y(e));
  }, e.limits.openTimeoutMs);
  Bun.connect({
    hostname: r,
    port: o,
    socket: {
      open(d) {
        if (clearTimeout(p), e.closed || h) {
          d.end();
          return;
        }
        let u = Sr(d.remoteAddress);
        if (u) {
          d.end(), e.closed = !0, e.directDialing = !1, X(n, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${r} ` + `\u2014 resolved to a blocked address (${u})`), 
          n.end(), Z(e.ctx, "agent_proxy_direct_peer_blocked_" + u), M(e.ctx, "direct_peer_blocked", u, Y(e));
          return;
        }
        e.directUpstream = {
          write: y => d.write(y),
          end: () => d.end(),
          writeBuf: [],
          writeBufBytes: 0
        }, e.directDialing = !1, n.write(`HTTP/1.1 200 Connection Established\r\n\r\n`), 
        e.established = !0;
        for (let y of e.pending) Vt(n, e, y);
        e.pending = [], e.pendingBytes = 0;
      },
      data(d, u) {
        if (e.closed) return;
        n.write(u);
      },
      drain() {
        let d = e.directUpstream;
        if (!d) return;
        while (d.writeBuf.length > 0) {
          let u = d.writeBuf[0];
          if (!u) {
            d.writeBuf.shift();
            continue;
          }
          let y = d.write(u);
          if (d.writeBufBytes -= y, y < u.length) {
            d.writeBuf[0] = u.subarray(y);
            return;
          }
          d.writeBuf.shift();
        }
      },
      close() {
        if (!e.closed) e.closed = !0, n.end();
      },
      error(d, u) {
        if (clearTimeout(p), e.closed) return;
        if (e.closed = !0, !e.established) X(n, 502, "Bad Gateway", `normal-networking dial failed: ${u?.message ?? String(u)}`), 
        n.end(); else n.destroy();
        M(e.ctx, e.established ? "direct_upstream_error" : "direct_dial_failed", u?.message ?? String(u), Y(e));
      }
    }
  }).catch(d => {
    if (clearTimeout(p), e.directDialing = !1, e.closed) return;
    e.closed = !0, X(n, 502, "Bad Gateway", `normal-networking dial failed: ${d?.message ?? String(d)}`), 
    n.end(), M(e.ctx, "direct_dial_failed", d?.message ?? String(d), Y(e));
  });
}

function Fr(n) {
  let {pool: e, limits: r} = n;
  while (e.length > 0) {
    let o = e.pop();
    if (o.ws.readyState !== WebSocket.OPEN) {
      clearInterval(o.pinger);
      continue;
    }
    if (Date.now() - o.idleSince > r.poolIdleTtlMs || Date.now() - o.meta.openedAt > r.poolMaxAgeMs) {
      clearInterval(o.pinger);
      try {
        o.ws.close();
      } catch {}
      continue;
    }
    return o;
  }
  return;
}

function tn(n) {
  let {ws: e, wsMeta: r} = n;
  if (!e || !r?.v2 || !n.finSeen || e.readyState !== WebSocket.OPEN || !n.established || n.closed || !n.pinger || n.pool.length >= n.limits.poolMax || Date.now() - r.openedAt > n.limits.poolMaxAgeMs) return !1;
  fe(n), De(n), pe(n), e.onmessage = null, e.onerror = null;
  let o = n.pool;
  return e.onclose = () => Gr(o, e), o.push({
    ws: e,
    pinger: n.pinger,
    idleSince: Date.now(),
    meta: r
  }), n.ws = void 0, n.pinger = void 0, n.wsMeta = void 0, !0;
}

function Gr(n, e) {
  let r = n.findIndex(o => o.ws === e);
  if (r >= 0) clearInterval(n[r].pinger), n.splice(r, 1);
}

function Ur(n) {
  for (let e of n) {
    clearInterval(e.pinger), e.ws.onclose = null;
    try {
      e.ws.close();
    } catch {}
  }
  n.length = 0;
}

function nn(n, e, r, o) {
  r.onmessage = s => {
    let h = s.data instanceof ArrayBuffer ? new Uint8Array(s.data) : new Uint8Array(Buffer.from(s.data)), p = wr(h);
    if (!p) return;
    if (p.control !== Kt) {
      Wr(n, e, r, p);
      return;
    }
    if (p.data.length > 0) {
      if (!e.wsMeta?.v2) {
        Qe(n, e, "server sent data before HELLO_ACK");
        return;
      }
      if (e.localClosed) return;
      if (!e.established) {
        e.established = !0;
        let d = Buffer.from(p.data.subarray(0, 16)).toString("utf8").match(/^HTTP\/1\.[01] ([45]\d\d)/);
        if (d) e.connectRejected = !0, M(e.ctx, "connect_rejected", `gateway answered ${d[1]} to CONNECT (policy denial or upstream failure)`, Y(e));
        if (e.redialEligible = !1, e.pooledDeadline) {
          if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
          e.pooledDeadline = void 0;
        }
        g("agent_proxy_request");
      }
      e.downloadBytes += p.data.length, n.write(p.data);
    }
  }, r.onerror = s => {
    let h = "message" in s ? String(s.message) : "websocket error";
    if (t(`[agent-proxy] ws error: ${h}`), e.closed) return;
    if (o && e.redialEligible && !e.established) {
      o(`ws error: ${h}`);
      return;
    }
    if (e.closed = !0, e.localClosed) {
      Q(e);
      return;
    }
    if (!e.established) Z(e.ctx, "agent_proxy_request_ws_error"), X(n, 502, "Bad Gateway", `the WebSocket tunnel to the CCR agent-proxy reported an error (${h.slice(0, 120)})`), 
    n.end(), M(e.ctx, "ws_error", `tunnel error before response: ${h.slice(0, 120)}`, Y(e)); else Xt(n, e, `tunnel error: ${ne(h, 120)}`);
    Q(e);
  }, r.onclose = s => {
    if (e.closed) return;
    if (o && e.redialEligible && !e.established) {
      o("closed before response");
      return;
    }
    if (e.closed = !0, e.localClosed) {
      Q(e);
      return;
    }
    if (!e.established) Z(e.ctx, "agent_proxy_request_ws_error"), X(n, 502, "Bad Gateway", "the WebSocket tunnel to the CCR agent-proxy closed before a response was received"), 
    n.end(), M(e.ctx, "ws_error", "tunnel closed before response", Y(e)); else Xt(n, e, `tunnel closed (code ${s.code}${s.reason ? `, ${ne(s.reason, 120)}` : ""})`, s.code);
    Q(e);
  };
}

function Xt(n, e, r, o) {
  if (e.connectRejected) {
    n.destroy();
    return;
  }
  let s = Date.now() - e.startedAt;
  Z(e.ctx, "agent_proxy_request_ws_closed_mid_exchange", {
    elapsed_ms: s,
    upload_bytes: e.uploadBytes,
    download_bytes: e.downloadBytes,
    upload_paused: e.readPaused,
    pending_bytes: e.pendingBytes,
    ...o !== void 0 && {
      close_code: o
    }
  }), M(e.ctx, "ws_closed_mid_exchange", `${r} after ${Math.round(s / 1e3)}s; ${e.uploadBytes} B sent, ${e.downloadBytes} B received, client ${e.readPaused ? "paused" : "reading"}, ${e.pendingBytes} B still queued in the relay`, Y(e)), 
  n.destroy();
}

function Wr(n, e, r, o) {
  if (o.control === mr) {
    if (e.wsMeta && !e.wsMeta.v2) {
      if (o.version !== Xe) {
        Qe(n, e, `server acknowledged protocol version ${o.version}, expected ${Xe}`);
        return;
      }
      if (e.wsMeta.v2 = !0, e.helloAckDeadline) {
        if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
        e.helloAckDeadline = void 0;
      }
      t("[agent-proxy] tunnel protocol v2 negotiated");
    }
    return;
  }
  if (!e.wsMeta?.v2) return;
  if (o.control === hr) {
    Yr(n, e, r);
    return;
  }
}

function Yr(n, e, r) {
  if (e.finSeen) return;
  if (e.closed) {
    if (e.finCloseTimer && r.readyState === WebSocket.OPEN) e.finSeen = !0, r.send(Ke(Wt)), 
    Q(e);
    return;
  }
  if (e.finSeen = !0, e.finCloseTimer) clearTimeout(e.finCloseTimer), e.finCloseTimer = void 0;
  if (!e.localClosed) n.end();
  if (fe(e), e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
  e.pooledDeadline = void 0, e.paused = !1, e.pending = [], e.pendingBytes = 0, r.send(Ke(Wt));
  let o = tn(e);
  if (e.closed = !0, !o) Q(e);
}

function rn(n, e, r) {
  let o = `${n.connectLine}\r\nProxy-Authorization: ${r}\r\nX-Agent-Proxy-Client-Process: ${n.clientProcess}\r\n\r\n`;
  e.send(Je(Buffer.from(o, "utf8")));
  for (let s of n.pending) Ze(n, e, s);
  n.pending = [], n.pendingBytes = 0, pe(n), en(n);
}

function on(n, e) {
  let r = {
    "Content-Type": "application/proto",
    Authorization: e.wsHeader()
  }, o = new globalThis.WebSocket(n, {
    headers: r,
    proxy: Dw(n),
    tls: YS() || void 0
  });
  return o.binaryType = "arraybuffer", o;
}

function Ve(n, e, r, o) {
  if (e.wsAttempt === 0) e.probeErrorAtDial = e.ctx.startupError;
  let s = on(r, o);
  e.ws = s, e.wsOpen = !1, e.wsMeta = void 0;
  let h = () => {
    s.onopen = s.onmessage = s.onerror = s.onclose = null;
    try {
      s.close();
    } catch {}
  }, p = d => {
    if (e.closed) return;
    if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
    h(), e.wsAttempt++;
    let u = e.probeErrorAtDial, y = u ? 1 : e.limits.openMaxAttempts;
    if (e.wsAttempt < y) {
      let b = e.limits.openBackoffBaseMs * 2 ** (e.wsAttempt - 1);
      t(`[agent-proxy] ws open failed (${d}); retry ${e.wsAttempt}/${y - 1} in ${b}ms`), 
      e.openTimer = setTimeout(Ve, b, n, e, r, o);
      return;
    }
    t(`[agent-proxy] ws open failed (${d}); attempts exhausted`), e.closed = !0, Z(e.ctx, "agent_proxy_request_ws_error");
    let w = `could not open the WebSocket tunnel to the CCR agent-proxy (${d.slice(0, 120)}) after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}`;
    X(n, 502, "Bad Gateway", u ? `${w}. Also: ${u}` : w), n.end(), M(e.ctx, "ws_open_failed", `tunnel open failed after ${e.wsAttempt} ${I(e.wsAttempt, "attempt")}: ${d.slice(0, 120)}`, Y(e)), 
    Q(e);
  };
  e.failOrRetry = p, e.openTimer = setTimeout(Xr, e.limits.openTimeoutMs, e), s.onopen = () => {
    if (e.closed) return;
    if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
    e.failOrRetry = void 0, e.wsOpen = !0, e.wsMeta = {
      v2: !1,
      openedAt: Date.now()
    }, e.ctx.startupError = void 0, e.ctx.upstreamOpened = !0, nn(n, e, s), s.send(Ke(gr, Xe)), 
    rn(e, s, o.connectHeader()), e.pinger = setInterval(jr, pr, s), e.helloAckDeadline = () => {
      e.openTimer = void 0, e.helloAckDeadline = void 0, Qe(n, e, `no HELLO_ACK within ${e.limits.openTimeoutMs}ms`);
    }, e.openTimer = setTimeout(qr, e.limits.openTimeoutMs, e);
  }, s.onerror = d => {
    let u = "message" in d ? String(d.message) : "websocket error";
    t(`[agent-proxy] ws error: ${u}`), p(u);
  }, s.onclose = () => p("closed before open");
}

function jr(n) {
  if (n.readyState === WebSocket.OPEN) n.send(Je(new Uint8Array(0)));
}

function Xr(n) {
  if (n.ws && n.ws.readyState === WebSocket.CONNECTING) t("[agent-proxy] ws open timeout"), 
  n.failOrRetry?.("handshake timeout");
}

function Kr(n) {
  n.pooledDeadline?.();
}

function qr(n) {
  n.helloAckDeadline?.();
}

function Qe(n, e, r) {
  if (e.closed) return;
  e.closed = !0, t(`[agent-proxy] tunnel protocol v2 negotiation failed: ${r}`, {
    level: "warn"
  }), Z(e.ctx, "agent_proxy_request_v2_not_acked"), X(n, 502, "Bad Gateway", `requires tunnel protocol v2; the server did not acknowledge the negotiation (${r}) \u2014 server too old or connection broken`), 
  n.end(), M(e.ctx, "v2_not_acked", `tunnel protocol v2 not acknowledged: ${r}`, Y(e)), 
  Q(e);
}

function an(n) {
  if (!n.wsMeta?.v2 || n.finSeen || n.localClosed || n.ws?.readyState !== WebSocket.OPEN) return !1;
  if (n.localClosed = !0, n.redialEligible = !1, n.openTimer) clearTimeout(n.openTimer), 
  n.openTimer = void 0;
  return n.pooledDeadline = void 0, n.finCloseTimer = setTimeout(Vr, n.limits.finGraceMs, n), 
  !0;
}

function Vr(n) {
  if (n.finCloseTimer = void 0, n.finSeen) return;
  Q(n);
}

function Ze(n, e, r) {
  if (e.readyState !== WebSocket.OPEN) return;
  n.uploadBytes += r.length;
  for (let o = 0; o < r.length; o += Ut) {
    let s = r.subarray(o, o + Ut);
    e.send(Je(s));
  }
}

function Q(n) {
  if (!n) return;
  if (n.directUpstream) {
    try {
      n.directUpstream.end();
    } catch {}
    n.directUpstream = void 0;
  }
  if (n.closed = !0, n.pinger) clearInterval(n.pinger);
  if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
  if (n.finCloseTimer) clearTimeout(n.finCloseTimer), n.finCloseTimer = void 0;
  if (fe(n), De(n), pe(n), n.pending = [], n.pendingBytes = 0, n.failOrRetry = void 0, 
  n.redialEligible = !1, n.pooledDeadline = void 0, n.helloAckDeadline = void 0, n.ws && n.ws.readyState <= WebSocket.OPEN) try {
    n.ws.close();
  } catch {}
  n.ws = void 0;
}

import { constants as Ie } from "fs";

import { chmod as Jr, lstat as He, open as un, readdir as Qr, readlink as Zr, rename as eo, stat as rt, symlink as to, unlink as $e } from "fs/promises";

import { basename as ot, join as Pe } from "path";

var dn = {
  script: "update-ca-certificates",
  conf: "/etc/ca-certificates.conf",
  distCertsDir: "/usr/share/ca-certificates",
  localCertsDir: "/usr/local/share/ca-certificates",
  certsDir: "/etc/ssl/certs",
  bundle: "/etc/ssl/certs/ca-certificates.crt",
  hooksDir: "/etc/ca-certificates/update.d",
  restorecon: "/sbin/restorecon",
  rehash: [ "openssl", "rehash", "." ],
  listHooks: [ "run-parts", "--test", "--", "/etc/ca-certificates/update.d" ]
}, no = [ "CERTSCONF=/etc/ca-certificates.conf", "CERTSDIR=/usr/share/ca-certificates", "LOCALCERTSDIR=/usr/local/share/ca-certificates", "ETCCERTSDIR=/etc/ssl/certs", "HOOKSDIR=/etc/ca-certificates/update.d" ], ro = 65536, oo = 262144, io = 1048576, ao = 4194304, so = 1048576, sn = 2048;

async function st(n, e) {
  let {anchorPath: r, link: o, layout: s, recordPath: h, timeoutMs: p} = e, d = Buffer.from(n, "utf8"), u;
  try {
    u = await lo(r, o, d, s);
  } catch (P) {
    u = {
      reason: "layout",
      detail: l(P)
    };
  }
  if ("reason" in u) return t(`[agent-proxy] direct CA install not attempted (${u.reason}: ${u.detail}); using ${s.script}`), 
  {
    outcome: "not_attempted",
    reason: u.reason
  };
  await $e(h).catch(() => {});
  let y;
  try {
    y = await un(r, Ie.O_WRONLY | Ie.O_CREAT | Ie.O_EXCL, 420), await y.writeFile(d), 
    await y.chmod(420), await y.close();
  } catch (P) {
    if (y) await y.close().catch(() => {}), await $e(r).catch(() => {});
    return t(`[agent-proxy] direct CA install not attempted (anchor: ${l(P)}); using ${s.script}`), 
    {
      outcome: "not_attempted",
      reason: "anchor_create"
    };
  }
  let w = !1, b = async (P, R) => {
    if (t(`[agent-proxy] direct CA install abandoned at ${P} (${R}); running ${s.script} instead`, {
      level: "warn"
    }), w) await $e(o).catch(() => {});
    return {
      outcome: "abandoned",
      step: P
    };
  };
  try {
    let P = await iL(s.bundle, u.bundle);
    try {
      await Jr(P, 420), await eo(P, s.bundle);
    } catch (R) {
      throw await $e(P).catch(() => {}), R;
    }
  } catch (P) {
    return await b("bundle", l(P));
  }
  try {
    await to(r, o), w = !0;
  } catch (P) {
    return await b("link", l(P));
  }
  let C = Date.now() + p, x = (P, R) => it(P[0], P.slice(1), {
    timeout: Math.max(1, C - Date.now()),
    cwd: s.certsDir,
    ...R === void 0 ? {
      stdin: "ignore"
    } : {
      input: R
    },
    maxBuffer: so,
    preserveOutputOnError: !0
  }), T = await x(s.rehash);
  if (tt("openssl rehash", T), T.exitCode !== 0) return await b("rehash", et(T));
  let S = [];
  if ((await rt(s.hooksDir).catch(() => {}))?.isDirectory()) {
    let P = await x(s.listHooks);
    if (P.exitCode !== 0) return tt("run-parts", P), await b("hooks", et(P));
    S = P.stdout.split(`\n`).filter(R => R.length > 0);
  }
  for (let P of S) {
    let R = await x([ P ], `+${o}\n`);
    if (tt(P, R), R.exitCode === void 0) return t(`[agent-proxy] direct CA install: hook ${P} gave no exit status (${et(R)}); not recording the install, so the next start redoes it`, {
      level: "warn"
    }), {
      outcome: "hook_incomplete"
    };
    if (R.exitCode !== 0) t(`[agent-proxy] direct CA install: hook ${P} exit status ${R.exitCode} ignored, as ${s.script} ignores it`);
  }
  return {
    outcome: "installed"
  };
}

async function lo(n, e, r, o) {
  let s = o.script.includes("/") ? o.script : await Rd(o.script), h = s ? await Me(s, ro) : void 0;
  if (h === void 0 || !h.subarray(0, 9).equals(Buffer.from("#!/bin/sh")) || !no.every(T => h.includes(T))) return {
    reason: "script",
    detail: s ?? o.script
  };
  let p = await Me(o.conf, oo);
  if (p === void 0 || p.length === 0) return {
    reason: "conf",
    detail: o.conf
  };
  for (let T of [ o.certsDir, o.localCertsDir, o.distCertsDir ]) if (!(await He(T).catch(() => {}))?.isDirectory()) return {
    reason: "layout",
    detail: T
  };
  if (!(await He(o.bundle).catch(() => {}))?.isFile()) return {
    reason: "layout",
    detail: o.bundle
  };
  if (await cn(o.restorecon)) return {
    reason: "layout",
    detail: o.restorecon
  };
  for (let T of [ n, e ]) if (await cn(T)) return {
    reason: "anchor_present",
    detail: `${T} exists`
  };
  let d = [], u = T => ({
    reason: "unsynced",
    detail: T
  });
  for (let T of p.toString("utf8").split(`\n`)) {
    if (T === "" || T.startsWith("#")) continue;
    if (T.startsWith("!")) {
      let P = Pe(o.certsDir, `${ot(T.slice(1), ".crt")}.pem`);
      if ((await He(P).catch(() => {}))?.isSymbolicLink()) return u(`${P} still linked`);
      continue;
    }
    let S = Pe(o.distCertsDir, T);
    if (!(await rt(S).catch(() => {}))?.isFile()) continue;
    let A = await ln(S, o);
    if (A === void 0) return u(S);
    d.push(A);
  }
  let y = ot(n), w = [ y ];
  for (let T of await Qr(o.localCertsDir, {
    withFileTypes: !0
  })) {
    let S = await rt(Pe(o.localCertsDir, T.name));
    if (S.isDirectory()) return u(`${T.name} is a directory`);
    if (S.isFile() && T.name.endsWith(".crt")) w.push(T.name);
  }
  w.sort();
  let b = fn(r);
  for (let T of w) {
    if (T === y) {
      d.push(b);
      continue;
    }
    let S = Pe(o.localCertsDir, T), A = await ln(S, o);
    if (A === void 0) return u(S);
    d.push(A);
  }
  let C = await Me(o.bundle, ao), x = Buffer.concat(d.filter(T => T !== b));
  if (C === void 0 || !C.equals(x)) return u("bundle differs from what the script would build");
  return {
    bundle: Buffer.concat(d)
  };
}

async function ln(n, e) {
  let r = ot(n, ".crt").replace(/ /g, "_").replace(/[()]/g, "=").replace(/,/g, "_") + ".pem";
  if (await Zr(Pe(e.certsDir, r)).catch(() => {}) !== n) return;
  let s = await Me(n, io);
  return s && fn(s);
}

function fn(n) {
  return n.length === 0 || n.at(-1) === 10 ? n : Buffer.concat([ n, Buffer.from(`\n`) ]);
}

async function cn(n) {
  return He(n).then(() => !0, e => {
    if (W(e)) return !1;
    throw e;
  });
}

async function Me(n, e) {
  let r;
  try {
    r = await un(n, Ie.O_RDONLY | zRe());
    let o = await r.stat();
    if (!o.isFile() || o.size > e) return;
    return await r.readFile();
  } catch {
    return;
  } finally {
    await (r?.close().catch(() => {}));
  }
}

function et(n) {
  if (n.exitCode !== void 0) return `exit status ${n.exitCode}`;
  if (n.timedOut) return "still running at the deadline";
  if (n.maxBufferExceeded) return "output over the cap";
  return `did not run (${n.error ?? "unknown"})`;
}

function tt(n, e) {
  let r = `${e.stdout}\n${e.stderr}`.trim();
  if (!r) return;
  if (r.length > sn) r = `${r.slice(0, sn)}\u2026 (${r.length} chars)`;
  t(`[agent-proxy] ${n}: ${r}`);
}

import { mkdir as dt, open as co, readFile as wn, realpath as pt, rename as uo, stat as fo, unlink as oe, writeFile as ae } from "fs/promises";

import { homedir as pn } from "os";

import { dirname as ct, join as ie } from "path";

var Fe = "changeit", po = /[\s'"]/, gn = "# >>> ccr-agent-proxy (managed by Claude Code) >>>", lt = "# <<< ccr-agent-proxy <<<", bn = ".ca.pem", go = 4277010157, mo = 33554432, ho = 3e3;

function Cn(n, e, r) {
  let o = r?.trim();
  if (o?.includes("javax.net.ssl.trustStore=")) return o;
  let s = Sn(n, e).join(" ");
  return o ? `${s} ${o}` : s;
}

function Sn(n, e) {
  return e === "JKS" ? [ `-Djavax.net.ssl.trustStore=${n}`, "-Djavax.net.ssl.trustStoreType=JKS" ] : [ `-Djavax.net.ssl.trustStore=${n}`, `-Djavax.net.ssl.trustStorePassword=${Fe}`, "-Djavax.net.ssl.trustStoreType=PKCS12" ];
}

async function Ge(n) {
  let e = [], r = {
    failureCodes: e
  }, o = {
    used: !1
  }, s = ie(n.stateDir, "agent-proxy-ca.crt");
  try {
    await dt(n.stateDir, {
      recursive: !0
    }), await ae(s, n.ccrCa, "utf8");
  } catch (w) {
    return t(`[agent-proxy] tool trust setup skipped: cannot write CA file: ${l(w)}`, {
      level: "warn"
    }), m("agent_proxy_tool_trust", "ca_file_write_failed"), r;
  }
  let h = await mn(n.keytoolBin, yo), p = await mn(n.certutilBin, () => Rd("certutil")), [d, u] = await Promise.all([ (async () => {
    if (!h) {
      t("[agent-proxy] no keytool found; skipping JVM truststore");
      return;
    }
    let w = ie(n.stateDir, "java-truststore.p12"), b, C = async () => {
      let S = await xn(h), A = S !== void 0 && await _o(S, n.ccrCa);
      return {
        cacerts: S,
        holdsCa: A
      };
    }, x = await C(), T = await Se(`${w}${bn}`, n.ccrCa) === "same" && await fo(w).then(S => S.isFile(), () => !1);
    if (!x.holdsCa && !T) await (n.systemTrust?.then(() => {}, () => {})), x = await C();
    if (x.cacerts && x.holdsCa) t(`[agent-proxy] JDK truststore at ${x.cacerts} already holds the CA; using it`), 
    b = {
      path: x.cacerts,
      type: "JKS",
      source: "system"
    }; else if (T) t(`[agent-proxy] reusing JVM truststore at ${w}`), b = {
      path: w,
      type: "PKCS12",
      source: "reused"
    }; else {
      let S = R => wo(h, x.cacerts, n.ccrCa, s, w, R), A = [], P = await S(A);
      if (A[0] === "java_truststore_seed_failed") o.used = !0, t("[agent-proxy] keytool seed failed; trying once more after a pause"), 
      await (n.seedRetryPause?.() ?? J(ho)), P = await S(e); else e.push(...A);
      if (!P) return;
      b = {
        path: P,
        type: "PKCS12",
        source: "built"
      };
    }
    if (po.test(b.path)) {
      t(`[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${b.path}`, {
        level: "warn"
      }), e.push("jvm_unsafe_truststore_path");
      return;
    }
    return r.javaTrustStorePath = b.path, r.javaTrustStoreType = b.type, await To(b.path, b.type, n.bazelrcPath ?? "/etc/bazel.bazelrc", e), 
    b.source;
  })(), (async () => {
    if (!p) {
      t("[agent-proxy] certutil not found; skipping NSS trust for browsers");
      return;
    }
    return bo(s, n.ccrCa, n.nssDbDirs ?? [ ie(pn(), ".pki", "nssdb"), ie(cUe(), "pki", "nssdb") ], p, e);
  })(), xo(n.caBundlePath, n.botoConfigPath ?? ie(pn(), ".boto"), e), Eo(n, n.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", e).then(w => {
    r.profileDPath = w;
  }) ]), y = u === void 0 ? void 0 : {
    nss_dbs_unchanged: u
  };
  if (e.length === 0) g("agent_proxy_tool_trust", {
    reused: d === "reused",
    ...d && {
      store: c(d)
    },
    ...o.used && {
      java_seed_retried: !0
    },
    ...y
  }); else {
    let w = e[0];
    if (o.used || y) f("agent_proxy_tool_trust", w, {
      ...o.used && {
        java_seed_retried: !0
      },
      ...y
    }); else f("agent_proxy_tool_trust", w);
  }
  return r;
}

async function mn(n, e) {
  if (n) return pt(n).catch(() => {});
  return await e() ?? void 0;
}

async function yo() {
  let n = [ await Rd("keytool"), a.JAVA_HOME ? ie(a.JAVA_HOME, "bin", "keytool") : void 0 ], e;
  for (let r of n) {
    if (!r) continue;
    let o = await pt(r).catch(() => {});
    if (!o) continue;
    if (e ??= o, await xn(o)) return o;
  }
  return e;
}

async function xn(n) {
  let e = ct(ct(n));
  for (let r of [ ie(e, "lib", "security", "cacerts"), ie(e, "jre", "lib", "security", "cacerts") ]) {
    let o = await pt(r).catch(() => {});
    if (o) return o;
  }
  return;
}

async function _o(n, e) {
  let r = e.match(bj);
  if (!r) return !1;
  let o, s;
  try {
    s = await co(n, Bu());
    let h = await s.stat();
    if (!h.isFile() || h.size > mo) return !1;
    o = await s.readFile();
  } catch {
    return !1;
  } finally {
    await (s?.close().catch(() => {}));
  }
  if (o.length < 4 || o.readUInt32BE(0) !== go) return !1;
  return r.every(h => {
    let p = ut(h);
    return p.length >= 64 && p[0] === 48 && o.includes(p);
  });
}

async function wo(n, e, r, o, s, h) {
  if (!e) {
    t(`[agent-proxy] no JDK cacerts found near ${n}; skipping JVM truststore`), h.push("jdk_cacerts_not_found");
    return;
  }
  let p = `${s}.${process.pid}.tmp`;
  await oe(p).catch(() => {});
  let d = await re(n, [ "-importkeystore", "-noprompt", "-srckeystore", e, "-srcstorepass", Fe, "-destkeystore", p, "-deststoretype", "PKCS12", "-deststorepass", Fe ]);
  if (!d.ok) {
    t(`[agent-proxy] keytool importkeystore failed: ${d.detail}`, {
      level: "warn"
    }), h.push("java_truststore_seed_failed"), await oe(p).catch(() => {});
    return;
  }
  let u = await hn(n, p, "ccr-agent-proxy", o);
  if (!u.ok) {
    t(`[agent-proxy] keytool importcert failed: ${u.detail}`, {
      level: "warn"
    }), h.push("java_truststore_import_failed"), await oe(p).catch(() => {});
    return;
  }
  let y = Ae(r), w = !0;
  if (y !== void 0) {
    let C = `${p}.second.crt`, x = await ae(C, `${y}\n`, "utf8").then(() => hn(n, p, "ccr-agent-proxy-2", C), T => ({
      ok: !1,
      detail: l(T)
    }));
    if (await oe(C).catch(() => {}), !x.ok) t(`[agent-proxy] could not import the second certificate: ${x.detail}; the store holds the first only and is rebuilt on the next start`, {
      level: "warn"
    }), h.push("java_truststore_second_import_failed"), w = !1;
  }
  let b = `${s}${bn}`;
  if (!w) await oe(b).catch(() => {});
  try {
    await uo(p, s).catch(async () => {
      await ae(s, await wn(p)), await oe(p).catch(() => {});
    });
  } catch (C) {
    t(`[agent-proxy] could not move JVM truststore into place: ${l(C)}`, {
      level: "warn"
    }), h.push("java_truststore_publish_failed");
    return;
  }
  if (w) await ae(b, r, "utf8").catch(C => {
    t(`[agent-proxy] could not record the truststore's CA: ${l(C)}`);
  });
  return t(`[agent-proxy] JVM truststore built at ${s}`), s;
}

function hn(n, e, r, o) {
  return re(n, [ "-importcert", "-noprompt", "-alias", r, "-file", o, "-keystore", e, "-storetype", "PKCS12", "-storepass", Fe ]);
}

async function To(n, e, r, o) {
  let s = Sn(n, e).map(C => `--host_jvm_args=${C}`).join(" "), h = `${gn}\n# Bazel's repository downloader runs on its embedded JDK and ignores\n# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.\nstartup ${s}\n${lt}\n`, p;
  try {
    p = await wn(r, "utf8");
  } catch (C) {
    if (!W(C)) {
      t(`[agent-proxy] could not read ${r}: ${l(C)}`), o.push("bazelrc_write_failed");
      return;
    }
    p = "";
  }
  let d = p.indexOf(gn), u = p.indexOf(lt), w = (d >= 0 && u > d ? p.slice(0, d) + p.slice(u + lt.length).replace(/^\n/, "") : p).trimEnd(), b = w ? `${w}\n\n${h}` : h;
  if (b === p) return;
  try {
    await ae(r, b, "utf8"), t(`[agent-proxy] wrote Bazel trust block to ${r}`);
  } catch (C) {
    t(`[agent-proxy] could not write ${r}: ${l(C)}`), o.push("bazelrc_write_failed");
  }
}

async function bo(n, e, r, o, s) {
  let h = 0, p = e.match(bj)?.[0], d = Ae(e), u = `${n}.${process.pid}.second`;
  if (d !== void 0) await ae(u, `${d}\n`, "utf8").catch(() => {});
  for (let y of r) {
    if (!await dt(y, {
      recursive: !0
    }).then(() => !0, T => (t(`[agent-proxy] could not create NSS dir ${y}: ${l(T)}`), 
    !1))) {
      s.push("nss_add_failed");
      continue;
    }
    let b = `sql:${y}`;
    if (p !== void 0 && await Co(o, b, d === void 0 ? [ p ] : [ p, d ]).catch(T => (t(`[agent-proxy] NSS check of ${y} threw, taken as a difference: ${l(T)}`), 
    !1))) {
      t(`[agent-proxy] NSS DB at ${y} already holds the served certificates, trusted; left as is`), 
      h++;
      continue;
    }
    await re(o, [ "-D", "-d", b, "-n", "ccr-agent-proxy" ]), await re(o, [ "-D", "-d", b, "-n", "ccr-agent-proxy-2" ]);
    let C = yn(b, "ccr-agent-proxy", n), x = await re(o, C);
    if (!x.ok) await re(o, [ "-N", "--empty-password", "-d", b ]), x = await re(o, C);
    if (x.ok) {
      if (t(`[agent-proxy] MITM CA added to NSS DB at ${y}`), d !== void 0) {
        let T = await re(o, yn(b, "ccr-agent-proxy-2", u));
        if (!T.ok) t(`[agent-proxy] could not add the second certificate to the NSS DB at ${y}: ${T.detail}; it holds the first only`), 
        s.push("nss_second_add_failed");
      }
    } else t(`[agent-proxy] certutil -A failed for ${y}: ${x.detail}`), s.push("nss_add_failed");
  }
  return await oe(u).catch(() => {}), h;
}

function yn(n, e, r) {
  return [ "-A", "-d", n, "-t", "C,,", "-n", e, "-i", r ];
}

async function Co(n, e, r) {
  let o = await re(n, [ "-L", "-d", e ]);
  if (!o.ok) return !1;
  let s = o.stdout.split(`\n`).map(u => u.trim().split(/\s+/)), h = [ "ccr-agent-proxy", "ccr-agent-proxy-2" ];
  for (let [u, y] of h.entries()) {
    let w = s.filter(C => C.length === 2 && C[0] === y).map(C => C[1]), b = u < r.length ? 1 : 0;
    if (w.length !== b || w.some(C => C !== "C,,")) return !1;
  }
  let p = new Set;
  for (let u of h.slice(0, r.length)) {
    let y = await re(n, [ "-L", "-d", e, "-n", u, "-a" ]);
    if (!y.ok) return !1;
    for (let w of y.stdout.match(bj) ?? []) p.add(ut(w).toString("base64"));
  }
  let d = new Set(r.map(u => ut(u).toString("base64")));
  return p.size === d.size && [ ...d ].every(u => p.has(u));
}

async function xo(n, e, r) {
  let o = `[Boto]\nca_certificates_file = ${n}\n`;
  try {
    await ae(e, o, {
      flag: "wx",
      mode: 420
    }), t(`[agent-proxy] wrote ${e} for gsutil trust`);
  } catch (s) {
    if (E(s) === "EEXIST") return;
    t(`[agent-proxy] could not write ${e}: ${l(s)}`), r.push("boto_write_failed");
  }
}

async function Eo(n, e, r) {
  if (!n.hasSystemCa) {
    await oe(e).catch(() => {});
    return;
  }
  let o = [ "# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env", "# vars for login shells that start from a scrubbed environment. Each", "# export is set-if-absent so an explicit value in the shell wins.", "# HTTPS_PROXY is intentionally NOT set here: the relay port is", "# ephemeral and persisting it would break all HTTPS in login shells", "# once the relay process exits. Scrubbed login shells dial direct.", `if [ -r ${En(n.caBundlePath)} ]; then` ];
  for (let h of [ ...r0n, ...o0n ]) o.push("  " + _n(h, n.caBundlePath));
  for (let [h, p] of Object.entries(_Re)) o.push("  " + _n(h, p));
  o.push("fi");
  let s = o.join(`\n`) + `\n`;
  try {
    return await dt(ct(e), {
      recursive: !0
    }), await ae(e, s, {
      mode: 420
    }), t(`[agent-proxy] wrote ${e} for login-shell trust`), e;
  } catch (h) {
    t(`[agent-proxy] could not write ${e}: ${l(h)}`), r.push("profile_d_write_failed");
    return;
  }
}

function _n(n, e) {
  return `if [ -z "\${${n}:-}" ]; then ${n}=${En(e)}; fi; export ${n}`;
}

function En(n) {
  return `'${n.replace(/'/g, "'\\''")}'`;
}

function Ae(n) {
  let e = n.match(bj) ?? [];
  return e.length === 2 && e[1] !== e[0] ? e[1] : void 0;
}

function ut(n) {
  return Buffer.from(n.replace(/-----(?:BEGIN|END) CERTIFICATE-----/g, ""), "base64");
}

async function re(n, e) {
  let r = await it(n, e, {
    timeout: 2e4,
    preserveOutputOnError: !0,
    useCwd: !1
  });
  if (r.code === 0) return {
    ok: !0,
    stdout: r.stdout,
    detail: ""
  };
  return {
    ok: !1,
    stdout: r.stdout,
    detail: `${r.error ?? `exit ${r.code}`} ${r.stderr.slice(0, 200)}`.trim()
  };
}

var PBs = "/run/ccr/session_token", Un = [ "/etc/ssl/certs/ca-certificates.crt", "/etc/pki/tls/certs/ca-bundle.crt", "/etc/ssl/cert.pem" ], tBo = [ "localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "169.254.0.0/16", "api.anthropic.com", "api-staging.anthropic.com", "api-pr-preview.anthropic.com", "mcp-proxy.anthropic.com", "mcp-proxy-staging.anthropic.com", ...Nt, "host.docker.internal" ], PNr = [ ...tBo, "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local" ].join(","), IBs = tBo.join(","), OBs = [ "127.0.0.1", "localhost", "::1", "127.0.0.0/8", "0.0.0.0/8", "169.254.0.0/16", "host.docker.internal", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local" ].join(","), nBo = [ "localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "host.docker.internal" ].join(","), MBs = [ nBo, "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10" ].join(","), OKs = [ "169.254.0.0/16", ".svc.cluster.local", "*.svc.cluster.local" ].join(",");

class Wn {
  state={
    enabled: !1,
    noProxy: PNr
  };
  relay=void 0;
  generation=0;
  activate(n, e) {
    this.state = n, this.relay = e, UJr(`${_e(e.port)}/__agentproxy/status`);
  }
  reset() {
    this.generation++, this.state = {
      enabled: !1,
      noProxy: PNr
    }, xCn(void 0), WJr(void 0), XAn(void 0), UJr(void 0), this.relay?.stop(), this.relay = void 0;
  }
}

var HBs = new K(() => new Wn);

function ye() {
  return HBs.of(B().host);
}

async function MKs(n) {
  let e = ye(), r = process.env.AGENT_PROXY_URL, o = process.env.AGENT_PROXY_AUTH_TOKEN;
  a.unset("AGENT_PROXY_URL"), a.unset("AGENT_PROXY_AUTH_TOKEN");
  let s = a.CCR_AGENT_PROXY_RELAY_MODE, h = a.CCR_AGENT_PROXY_INCLUDE_HOSTS, p = a.CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED, d = a.CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED, u = a.CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY, y = a.CCR_AGENT_PROXY_CA_WATCH_ENABLED, w = a.CCR_AGENT_PROXY_CA_CERT_B64;
  if (a.unset("CCR_AGENT_PROXY_RELAY_MODE"), a.unset("CCR_AGENT_PROXY_INCLUDE_HOSTS"), 
  a.unset("CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED"), a.unset("CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED"), 
  a.unset("CCR_AGENT_PROXY_CA_CERT_B64"), !Le(process.env.CLAUDE_CODE_REMOTE)) return e.state;
  if (!a.CCR_AGENT_PROXY_ENABLED) return e.state;
  let b = gu(), C, x = process.env.CLAUDE_CODE_REMOTE_SESSION_ID, T = "sessionIngressAuth";
  if (b && r === void 0) {
    if (C = n?.toolContainerToken, C === void 0) return t("[agent-proxy] a tool container's daemon was handed no token (CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR, or agent_proxy_token with --session-tunnel); proxy disabled"), 
    e.state;
    x = "tool-container", T = "the launcher";
  }
  if (!x) return t("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", {
    level: "warn"
  }), m("agent_proxy_init", "agent_proxy_init_no_session_id"), e.state;
  let S = n?.tokenPath ?? PBs, A = performance.now(), P = b ? {
    existed: !1,
    token: C ?? null
  } : await Uo(S), {existed: R, token: D} = P;
  if (!D && !b) D = zd();
  if (!D && !o) return t("[agent-proxy] no session token; proxy disabled"), m("agent_proxy_init", "agent_proxy_init_no_token"), 
  e.state;
  t(`[agent-proxy] token via ${R ? S : D ? T : "AGENT_PROXY_AUTH_TOKEN"}`), MOe(z => t(`[agent-proxy] ${z}`, {
    level: "warn"
  }));
  let N = r ?? n?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com", te = n?.caBundlePath ?? (Rn() ? H(Ee(), "ccr", "ca-bundle.crt") : H(_t(), ".ccr", "ca-bundle.crt")), G = n?.systemCaPath ? await he(n.systemCaPath, "utf8").catch(() => "") : await oBo(), U = await Yo(G, te), O = U ? `${G}\n${U}` : G, j;
  if (w !== void 0 && !r && Ct()) t("[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: essential traffic only; fetching the CA as before"); else if (w !== void 0 && !r) {
    let z = LBs(w);
    if (z.ok) j = z.pem; else t(`[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: ${z.reason}; fetching the CA instead`, {
      level: "warn"
    }), f("agent_proxy_init", "agent_proxy_init_ca_env_invalid");
  }
  let q = Rn(), L = j !== void 0 ? "env" : "fetch", we = {
    budgetMs: n?.pathProbeBudgetMs ?? Do,
    caSource: L
  }, Re = q ? void 0 : Lo(we), V;
  if (!r && s === "selective") {
    let z = (h ?? "").split(",").map(F => F.trim()).filter(F => F.length > 0);
    if (z.length > 0) V = {
      includeHosts: z
    }, t(`[agent-proxy] selective relay: ${z.length} include hosts; unlisted use normal networking`); else t("[agent-proxy] CCR_AGENT_PROXY_RELAY_MODE=selective but include-host " + "list is empty/unparsable \u2014 FAIL-CLOSED to tunnel-all", {
      level: "warn"
    }), f("agent_proxy_init", "agent_proxy_selective_empty_include");
  }
  let ee = r ? nBo : MBs, me = {
    runtime: e,
    generation: e.generation,
    sessionId: x,
    standaloneUrl: r,
    standaloneAuthToken: o,
    token: D,
    tokenIsHandedOver: b,
    unlinkTokenPath: R ? S : void 0,
    baseUrl: N,
    caBundlePath: te,
    systemCa: G,
    localCa: O,
    toolScoped: q,
    selective: V,
    noProxy: u ? ee : V ? OBs : r ? IBs : PNr,
    bundleCoversEveryHost: G !== "" || Boolean(r) && u,
    receiveGateDisabled: Boolean(p),
    uploadGateDisabled: Boolean(d),
    caWatchEnabled: Boolean(y),
    pathProbes: we,
    installedClisScan: Re,
    envCa: j,
    caSource: L,
    opts: n && {
      ...n,
      toolContainerToken: void 0
    }
  };
  _r("agent_proxy_inputs_ms", performance.now() - A, A);
  let Oe = await Xn(me, 1);
  if (Oe.outcome === "retry") f("agent_proxy_init", "agent_proxy_init_ca_exhausted_retrying", {
    ca_source: c(L)
  }), No(me, Oe).catch(z => {
    t(`[agent-proxy] retry loop crashed: ${l(z)}; proxy stays disabled`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_retry_loop_crashed");
  });
  return e.state;
}

var An = 3e5, Yn = 36e5;

function jn(n, e) {
  if (n.generation !== e || n.state.enabled || Oy()) return "exit";
  return ks() ? "defer" : null;
}

function rBo(n, e) {
  return Math.min(vU(n - 1, e, An), An);
}

async function No(n, e) {
  let {runtime: r, generation: o, caSource: s, opts: h} = n, p = Date.now(), d = h?.retryBadAfterMs ?? Yn, u = !1;
  for (let y = 2; ;y++) {
    let w = h?.retryDelayMs?.(y) ?? rBo(y, e.retryAfter);
    t(`[agent-proxy] ${e.detail}; attempt ${y} in ${(w / 1e3).toFixed(1)}s`, {
      level: "warn"
    }), await J(w, void 0, {
      unref: !0
    });
    let b = jn(r, o);
    if (b === "exit") return;
    if (b === "defer") continue;
    let C = await Xn(n, y);
    if (C.outcome !== "retry") return;
    if (e = C, !u && Date.now() - p >= d) u = !0, t(`[agent-proxy] ${e.detail}; still failing after ${y} attempts over ${Math.round((Date.now() - p) / 6e4)} min \u2014 counting as exhausted, retrying anyway`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_ca_exhausted", {
      ca_source: c(s)
    });
  }
}

async function Xn(n, e) {
  let {runtime: r, sessionId: o, standaloneUrl: s, standaloneAuthToken: h, token: p, tokenIsHandedOver: d, unlinkTokenPath: u, baseUrl: y, caBundlePath: w, systemCa: b, localCa: C, toolScoped: x, selective: T, noProxy: S, bundleCoversEveryHost: A, receiveGateDisabled: P, uploadGateDisabled: R, caWatchEnabled: D, pathProbes: N, installedClisScan: te, envCa: G, caSource: U, opts: O} = n, j = b !== "", q = (V, ee) => {
    if (e === 1) _r(V, performance.now() - ee, ee);
  }, L;
  if (G !== void 0) L = G; else {
    let V = performance.now(), ee = await Et(y, {
      budgetMs: O?.caFetchBudgetMs ?? (e === 1 ? 5e3 : 15e3),
      tries: e === 1 ? 3 : 1
    });
    if (q("agent_proxy_ca_fetch_ms", V), ee.outcome !== "ok") return Hn(ee, U);
    L = ee.ccrCa;
  }
  let we = performance.now(), Re = await Pt(C, L, w);
  if (Re.outcome !== "ok") return q("agent_proxy_trust_write_ms", we), Hn(Re, U);
  if (!x) await Zo(O?.awsConfigPath ?? H(_t(), ".aws", "config"));
  q("agent_proxy_trust_write_ms", we);
  try {
    let V = y.replace(/^http/, "ws") + JAr + "/ws", ee = H(w, "..", "README.md"), me = h ?? p ?? "", Oe = performance.now(), z = await te, F = await Qt({
      wsUrl: V,
      sessionId: o,
      token: me,
      getToken: h || d ? () => me : () => zd() || me,
      selective: T,
      limits: {
        ...P && {
          receiveHighWater: 1 / 0
        },
        ...R && {
          sendPauseAfterPendingBytes: 1 / 0,
          sendStallTimeoutMs: 1 / 0
        }
      },
      statusProvider: () => ({
        ...r.state,
        readmePath: ee,
        gitConfigInjection: ht(),
        gitSshRewrite: ht() && St()
      }),
      onFailure: ges
    }), Qn = bt(async () => F.stop()), k = {
      enabled: !0,
      port: F.port,
      caBundlePath: w,
      hasSystemCa: j,
      bundleCoversEveryHost: A,
      noProxy: S,
      selective: Boolean(T),
      standalone: Boolean(s),
      toolScoped: x,
      installedProxyPreconfiguredClis: z
    };
    q("agent_proxy_relay_up_ms", Oe);
    let At = jn(r, n.generation);
    if (At) return F.stop(), Qn(), At === "exit" ? {
      outcome: "stale"
    } : {
      outcome: "retry",
      detail: "shutdown claimed during bring-up",
      retryAfter: null
    };
    if (r.activate(k, F), !T && !s && !x) XAn({
      proxyUrl: _e(F.port),
      gatewayCa: L
    });
    if (x) {
      let v = !1, [ce, ue] = await Promise.all([ a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG ? Io(F.port, w).catch(Ye => (t(`[agent-proxy] governed git config append failed: ${l(Ye)}`, {
        level: "warn"
      }), f("agent_proxy_tool_scoped", "git_config_append_failed"), v = !0, !1)) : !1, a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM ? In(F.port, w, void 0, T, N).catch(Ye => {
        t(`[agent-proxy] gh shim write failed: ${l(Ye)}`, {
          level: "warn"
        }), f("agent_proxy_tool_scoped", "gh_shim_write_failed"), f("agent_proxy_gh_shim", "arm_failed"), 
        v = !0;
        return;
      }) : void 0 ]), Zn = ue?.shimDir;
      if (ue) k.ghShimDir = ue.shimDir, k.ghStandin = ue.standin, k.ghStandinEnterprise = ue.enterprise, 
      k.ghStandinAnyHost = ue.anyHost, k.ghStandinNoJq = ue.noJq;
      if (!v) g("agent_proxy_tool_scoped", {
        git_config: ce,
        gh_shim: Boolean(Zn)
      });
    } else if (!s) {
      let v = await In(F.port, w, o, T, N).catch(ce => {
        t(`[agent-proxy] gh stand-in shim write failed: ${l(ce)}`, {
          level: "warn"
        }), f("agent_proxy_gh_shim", "arm_failed");
        return;
      });
      if (v) k.ghShimDir = v.shimDir, k.ghStandin = v.standin, k.ghStandinEnterprise = v.enterprise, 
      k.ghStandinAnyHost = v.anyHost, k.ghStandinNoJq = v.noJq;
    }
    if (r.state !== k) return {
      outcome: "stale"
    };
    F.runStartupChecks(), WJr(k.ghStandin ? hes({
      enterprise: k.ghStandinEnterprise === !0,
      anyHost: k.ghStandinAnyHost === !0,
      noJq: k.ghStandinNoJq === !0,
      runner: k.toolScoped === !0
    }) : void 0), t(`[agent-proxy] enabled on 127.0.0.1:${F.port} (CA from ${U})`), 
    g("agent_proxy_init", {
      attempts: e,
      ca_source: c(U)
    }), xCn(mt(w, void 0)), Ue(ee, Go(F.port, w), "utf8").then(() => {
      if (r.state !== k) return;
      xCn(mt(w, ee));
    }).catch(v => {
      if (t(`[agent-proxy] README write failed: ${v instanceof Error ? v.message : String(v)}`), 
      r.state !== k) return;
      xCn(mt(w, void 0));
    }), Fo().then(v => {
      if (v.length > 0 && r.state === k) k.gitConfigConflicts = v, t(`[agent-proxy] git config may defeat proxy routing: ${v.join(", ")}`, {
        level: "warn"
      });
    }).catch(() => {});
    let vt = xt(w), Te = !1;
    if (!x && U === "env") {
      let v = await Ce(vt);
      Te = v.state === "read" && de(v.text, L) !== "same" && sBo(b, v.text);
    }
    let ke = x || Te ? void 0 : se(n, L, vt), We = Te ? Promise.withResolvers() : void 0, Be, Rt = !1;
    if (O?.toolTrust !== !1 && !x) Be = Ge({
      ccrCa: L,
      caBundlePath: w,
      hasSystemCa: k.hasSystemCa ?? !1,
      stateDir: H(w, ".."),
      systemTrust: ke ?? We?.promise,
      ...O?.toolTrust ?? {}
    }).then(v => {
      if (r.state !== k) return;
      if (v.javaTrustStorePath && v.javaTrustStoreType) k.javaTrustStorePath = v.javaTrustStorePath, 
      k.javaTrustStoreType = v.javaTrustStoreType;
      if (v.profileDPath) {
        let ce = v.profileDPath;
        bt(() => ge(ce).catch(() => {}));
      }
      if (v.failureCodes.length > 0) k.toolTrustFailureCodes = v.failureCodes;
    }).catch(v => {
      t(`[agent-proxy] tool trust setup failed: ${v instanceof Error ? v.message : String(v)}`, {
        level: "warn"
      }), f("agent_proxy_tool_trust", "setup_threw"), Rt = !0;
    });
    let Ne = {
      ccrCa: L,
      systemTrust: ke,
      toolTrust: Be,
      installIncomplete: !1,
      installRetries: 0
    };
    if (D && !x) Promise.all([ ke, Be ]).then(async ([v]) => {
      let ce = O?.toolTrust === !1 || await Jn(w, L);
      if (r.state === k && Ne.ccrCa === L) Ne.installIncomplete = Te || Rt || !ce || zn(v, k.toolTrustFailureCodes ?? []);
    }).catch(() => {});
    let Ot = !T && !s && !x, kt;
    if (U === "env") kt = zo(n, k, L, {
      systemTrust: ke,
      toolTrust: Be,
      installDeferred: Te,
      onInstallSettled: () => We?.resolve(),
      embeddedEndpoint: Ot,
      relayPort: F.port,
      ...D && {
        trust: Ne
      }
    }).catch(v => {
      t(`[agent-proxy] CA reconcile crashed: ${l(v)}`, {
        level: "warn"
      }), f("agent_proxy_ca_reconcile", "reconcile_threw");
    }).finally(() => We?.resolve());
    let Bt = O?.caWatchIntervalMs ?? Vo;
    if (D && !x && Bt > 0) Qo(n, k, Ne, {
      intervalMs: Bt,
      afterStart: kt,
      embeddedEndpoint: Ot,
      relayPort: F.port
    }).catch(v => {
      t(`[agent-proxy] CA watch crashed: ${l(v)}`, {
        level: "warn"
      }), f("agent_proxy_ca_watch", "watch_threw");
    });
    if (u) await ge(u).catch(() => {
      t("[agent-proxy] token file unlink failed", {
        level: "warn"
      });
    });
    return {
      outcome: "ok"
    };
  } catch (V) {
    return t(`[agent-proxy] relay start failed: ${V instanceof Error ? V.message : String(V)}; proxy disabled`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_relay_start_failed"), {
      outcome: "fatal"
    };
  }
}

var wt = [ {
  clis: [ "gh" ],
  realCredentialEnv: [ "GH_TOKEN", "GITHUB_TOKEN" ],
  placeholders: {
    GH_TOKEN: d$,
    GITHUB_TOKEN: d$
  }
}, {
  clis: [ "aws" ],
  realCredentialEnv: [ "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_PROFILE", "AWS_SHARED_CREDENTIALS_FILE", "AWS_CONFIG_FILE", "AWS_WEB_IDENTITY_TOKEN_FILE", "AWS_ROLE_ARN", "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "AWS_CONTAINER_CREDENTIALS_FULL_URI" ],
  placeholders: {
    AWS_ACCESS_KEY_ID: d$,
    AWS_SECRET_ACCESS_KEY: d$
  }
}, {
  clis: [ "gcloud", "bq", "gsutil" ],
  realCredentialEnv: [ "CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_APPLICATION_CREDENTIALS" ],
  placeholders: {
    CLOUDSDK_AUTH_ACCESS_TOKEN: d$
  }
} ], vn = wt.flatMap(n => n.clis).sort(), Lpn = wt.flatMap(n => Object.keys(n.placeholders)), Do = 1e3;

function le(n) {
  return bLt(n)?.trim() || void 0;
}

function HKs() {
  let n = ye().state;
  if (!n.enabled || !n.port || !n.caBundlePath || n.toolScoped || !n.bundleCoversEveryHost) return null;
  return {
    proxyUrl: _e(n.port),
    noProxy: n.noProxy,
    caBundlePath: n.caBundlePath
  };
}

function DKs() {
  let n = ye().state;
  if (!n.enabled || !n.port || !n.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      let o = {};
      for (let s of [ "HTTPS_PROXY", "https_proxy", "NO_PROXY", "no_proxy", ...Hbe ]) if (process.env[s]) o[s] = process.env[s];
      for (let s of [ ...Object.keys(_Re), ...Lpn ]) {
        let h = bLt(s);
        if (h) o[s] = h;
      }
      return o;
    }
    return {};
  }
  if (n.toolScoped) {
    let o = {};
    if (n.ghShimDir) {
      let s = bLt("PATH") ?? "";
      if (o.PATH = s ? `${n.ghShimDir}${ve}${s}` : n.ghShimDir, n.ghStandin && s) o.PATH = `${s}${ve}${n.ghShimDir}`;
    }
    return o;
  }
  let e = _e(n.port), r = {
    HTTPS_PROXY: e,
    https_proxy: e,
    NO_PROXY: n.noProxy,
    no_proxy: n.noProxy
  };
  for (let o of r0n) r[o] = n.caBundlePath;
  if (n.bundleCoversEveryHost) {
    for (let o of o0n) r[o] = n.caBundlePath;
    for (let [o, s] of Object.entries(_Re)) if (bLt(o) === void 0) r[o] = s;
  }
  if (n.javaTrustStorePath && n.javaTrustStoreType) r.JAVA_TOOL_OPTIONS = Cn(n.javaTrustStorePath, n.javaTrustStoreType, le("JAVA_TOOL_OPTIONS"));
  if (le("GIT_TERMINAL_PROMPT") === void 0) r.GIT_TERMINAL_PROMPT = gX.GIT_TERMINAL_PROMPT;
  if (le("GIT_ASKPASS") === void 0) r.GIT_ASKPASS = gX.GIT_ASKPASS;
  if (le("GCM_INTERACTIVE") === void 0) r.GCM_INTERACTIVE = gX.GCM_INTERACTIVE;
  if (ht()) {
    let o = [ [ "credential.interactive", "false" ] ];
    if (St()) o.push(...XMo.map(s => [ `url.https://${rr}/.insteadOf`, s ]));
    Object.assign(r, Aj(void 0, o));
  }
  for (let o of wt) if (!o.realCredentialEnv.some(h => bLt(h))) Object.assign(r, o.placeholders);
  if (n.ghShimDir) r.PATH = [ le("PATH"), n.ghShimDir ].filter(Boolean).join(ve);
  return r;
}

function LKs() {
  let n = ye().state;
  return n.enabled && n.ghStandin ? n.ghShimDir : void 0;
}

function Rn() {
  return Boolean(a.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG || a.CLAUDE_CODE_AGENT_PROXY_GH_SHIM);
}

var On = "# >>> claude agent-proxy governed-git (auto-generated; do not edit) >>>", gt = "# <<< claude agent-proxy governed-git <<<", $o = '"!f() { case $1 in get) echo quit=true ;; esac; }; f"';

function Kn() {
  let n = a.CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS;
  if (!n || n.trim() === "") return [ rr ];
  let e = [], r = 0;
  for (let o of n.split(",")) {
    let s = o.trim();
    if (s === "") continue;
    let h = LC(s);
    if (h === "" || h.length > 255 || !VXe.test(h)) {
      r++;
      continue;
    }
    let p = So(h) ? rr : h;
    if (!e.includes(p)) e.push(p);
  }
  if (r > 0) t(`[agent-proxy] governed git: ignored ${r} governed-host ${I(r, "entry", "entries")} that ${I(r, "is", "are")} not a bare hostname`, {
    level: "warn"
  });
  return e;
}

async function Io(n, e) {
  let r = process.env.GIT_CONFIG_GLOBAL;
  if (!r) return t("[agent-proxy] governed git config arm set but GIT_CONFIG_GLOBAL is unset; skipping (refusing to write a shared global config)", {
    level: "warn"
  }), !1;
  if (/[\n\r"]/.test(e)) return t("[agent-proxy] governed git: CA bundle path contains a newline or quote; skipping git config arm", {
    level: "warn"
  }), !1;
  let o = Kn();
  if (o.length === 0) return t("[agent-proxy] governed git: the governed-host list carried no usable host; skipping git config arm", {
    level: "warn"
  }), !1;
  let s = [ On ];
  for (let u of o) if (s.push(`[http "https://${u}/"]`, `\tproxy = http://127.0.0.1:${n}`, `\tsslCAInfo = ${e}`, ...u === rr ? [] : [ "\textraHeader =", "\tcookieFile =" ], `[credential "https://${u}/"]`, ...u === rr ? [] : [ "\thelper =", `\thelper = ${$o}` ], "\tinteractive = false"), 
  u === rr && St()) s.push(`[url "https://${rr}/"]`, ...XMo.map(y => `\tinsteadOf = ${y}`));
  s.push(gt);
  let h = "";
  try {
    h = await he(r, "utf8");
  } catch (u) {
    if (!W(u)) throw u;
  }
  let p = h.indexOf(On);
  if (p !== -1) {
    let u = h.indexOf(gt, p);
    h = u !== -1 ? h.slice(0, p) + h.slice(u + gt.length).replace(/^\n/, "") : h.slice(0, p);
  }
  let d = h.length > 0 && !h.endsWith(`\n`) ? h + `\n` : h;
  return await Tn(r, d + s.join(`\n`) + `\n`, 384), t(`[agent-proxy] governed git: relay routing for ${o.length} governed ${I(o.length, "host")} appended to ${r}`), 
  !0;
}

async function qn(n, e) {
  let r = (a.PATH ?? "").split(ve);
  for (let o of r) {
    if (!o || o === e) continue;
    let s = H(o, n);
    try {
      if (await Ro(s, Ao.X_OK), (await Gn(s)).isFile()) return s;
    } catch {}
  }
  return;
}

async function Tt(n, e, {budgetMs: r, caSource: o}) {
  let s = `${n} timed out`, h = performance.now(), p = rWt(), d = $pn(Npn);
  try {
    return {
      value: await Ht(e(), r, s)
    };
  } catch (u) {
    let y = rWt(), w = l(u) === s, b = zr(u);
    return {
      failure: {
        timedOut: w,
        detail: w ? s : `${n} failed (${l(u)})`,
        fields: {
          ca_source: c(o),
          ...b !== void 0 && {
            errno: b
          },
          elapsed_ms: Math.round(performance.now() - h),
          loop_lag_max_ms: Math.round(d.stop()),
          ...p && y && {
            cpu_delta_ms: Math.round(y.cpuTimeMs - p.cpuTimeMs),
            major_fault_delta: y.majorPageFaults - p.majorPageFaults
          }
        }
      }
    };
  } finally {
    d.stop();
  }
}

async function Lo(n) {
  let e = new Set, r = await Tt("installed-CLI PATH sweep", () => Uln(vn, e), n);
  if ("failure" in r) t(`[agent-proxy] ${r.failure.detail}; naming only the CLIs resolved so far`, {
    level: "warn"
  }), f("agent_proxy_init", r.failure.timedOut ? "agent_proxy_path_probe_timeout" : "agent_proxy_path_probe_failed", r.failure.fields);
  return vn.filter(o => e.has(o));
}

var kn = 65536, Bn = `#!/bin/sh\n# claude agent-proxy governed-git gh shim (auto-generated; per-session).\n`;

async function Vn(n) {
  try {
    await using e = await Oo(n, Bu());
    let r = await pL(e, kn + 1);
    return r.length > kn ? "" : r.toString("utf8");
  } catch (e) {
    if (!jt(e)) t(`[agent-proxy] gh shim at ${n} could not be read (${E(e) ?? "no error code"}); treated as not a shim`, {
      level: "warn"
    });
    return "";
  }
}

function Nn(n, e) {
  let r = URL.parse(Uee(e))?.hostname;
  return r !== void 0 && ze(n, r);
}

async function Dn(n, e) {
  let r = await Tt("jq PATH probe", () => qn("jq", n), e);
  if ("failure" in r) return t(`[agent-proxy] ${r.failure.detail}; taking jq as installed`, {
    level: "warn"
  }), f("agent_proxy_gh_shim", r.failure.timedOut ? "jq_path_probe_timeout" : "jq_path_probe_failed", r.failure.fields), 
  !1;
  return r.value === void 0;
}

function $n(n, e, r) {
  bt(async () => {
    if (await Vn(n) !== e) return;
    if (await ge(n).catch(() => {}), r) {
      let o = H(n, "..");
      await Pn(o).then(() => Pn(H(o, ".."))).catch(() => {});
    }
  });
}

async function In(n, e, r, o, s) {
  let h = r !== void 0, p = r !== void 0 ? H(e, "..", "sessions", at(r).slice(0, 32), "bin") : H(e, "..", "bin"), d = H(p, "gh"), u = await Tt("gh PATH probe", () => qn("gh", p), s);
  if ("failure" in u) {
    if (t(`[agent-proxy] ${u.failure.detail}; skipping gh shim`, {
      level: "warn"
    }), !h) throw Error("gh PATH probe failed");
    f("agent_proxy_gh_shim", u.failure.timedOut ? "gh_path_probe_timeout" : "gh_path_probe_failed", u.failure.fields);
    return;
  }
  let y = u.value;
  if (y && h) {
    g("agent_proxy_gh_shim", {
      standin: !1,
      hosted: !0
    });
    return;
  }
  if (!y && Ct()) {
    t("[agent-proxy] no gh on PATH and nonessential traffic is disabled; skipping gh shim"), 
    f("agent_proxy_gh_shim", "standin_essential_traffic_only");
    return;
  }
  if (!y && !Nn(o, rr)) {
    t("[agent-proxy] no gh on PATH and this relay does not send GitHub API requests to the session proxy (selective mode); skipping gh shim"), 
    f("agent_proxy_gh_shim", "selective_relay");
    return;
  }
  if ((a.PATH ?? "").split(ve).includes(p)) {
    let x = await Vn(d), T = x.includes(` '${XRs}' `), S = x.startsWith(Bn), A = !y;
    if (A ? T : S) return t(`[agent-proxy] gh shim at ${d} is the enclosing session's; left as it is`), 
    g("agent_proxy_gh_shim", {
      standin: A,
      ...h && {
        hosted: !0
      },
      inherited: !0
    }), {
      shimDir: p,
      standin: A,
      enterprise: A && x.includes(" '--hosts="),
      anyHost: A && x.includes(` '${JRs}' `),
      noJq: A && await Dn(p, s)
    };
    if (T || S) {
      t(`[agent-proxy] gh shim at ${d} is the enclosing session's, of another kind; no gh shim for this process`), 
      f("agent_proxy_gh_shim", "enclosing_shim_other_kind");
      return;
    }
  }
  let w;
  if (y) w = [ y ]; else {
    let x = vu({
      pinToCurrentBinary: !0
    });
    w = [ x.cmd, ...x.prefixArgs ];
  }
  if ([ e, ...w ].some(x => /['\n\r]/.test(x))) {
    t("[agent-proxy] governed git: a path or argument the gh shim would quote holds a quote or a line break; skipping gh shim", {
      level: "warn"
    }), f("agent_proxy_gh_shim", "unquotable_path");
    return;
  }
  if (await yt(p, {
    recursive: !0,
    mode: 448
  }), !y) {
    let x = h && o === void 0, T = h ? [] : Kn().filter(A => A !== rr && !A.endsWith(kUe) && Nn(o, A)), S = ZRs({
      command: w,
      port: n,
      caBundlePath: e,
      ghesHosts: x ? yK : T
    });
    return await Tn(d, S, 493), $n(d, S, h), t(`[agent-proxy] no gh on PATH; gh stand-in shim at ${d}`), 
    g("agent_proxy_gh_shim", {
      standin: !0,
      ...h && {
        hosted: !0
      }
    }), {
      shimDir: p,
      standin: !0,
      enterprise: T.length > 0,
      anyHost: x,
      noJq: await Dn(p, s)
    };
  }
  let b = `http://127.0.0.1:${n}`, C = Bn + `# Routes gh-to-github.com through the session relay ONLY when the\n# invocation carries no customer credential. GHE targets (GH_HOST,\n# --hostname, a -R/--repo/GH_REPO naming a non-github.com host, or a\n# non-github.com origin remote in the cwd checkout) and\n# real-customer-token invocations exec directly on the\n# customer's own egress, so customer credentials never transit the\n# relay tunnel and gh-to-GHE keeps working.\n# Real customer tokens decide alone, checked first (costs nothing):\n# gh sends GH_TOKEN/GITHUB_TOKEN proactively, and the GHE-scoped\n# enterprise pair means gh may target a GHE host in ways the checks\n` + `# below cannot see (e.g. a URL positional arg) \u2014 never route any of\n` + `# them through the tunnel.\n` + iBo(y) + `# NO_PROXY cleared: an ambient runner-host NO_PROXY covering\n# github.com would make gh skip the relay and send the literal dummy\n# token to the real GitHub API (hard 401).\nHTTPS_PROXY='${b}' https_proxy='${b}' \\\nNO_PROXY='' no_proxy='' \\\nSSL_CERT_FILE='${e}' \\\nGH_TOKEN='${d$}' GITHUB_TOKEN='${d$}' \\\nexec '${y}' "$@"\n`;
  return await Tn(d, C, 493), $n(d, C, h), t(`[agent-proxy] governed git: gh shim at ${d} -> ${y}`), 
  g("agent_proxy_gh_shim", {
    standin: !1
  }), {
    shimDir: p,
    standin: !1,
    enterprise: !1,
    anyHost: !1,
    noJq: !1
  };
}

function ht() {
  return le("GIT_CONFIG_COUNT") === void 0;
}

function St() {
  return !ye().state.standalone && le("SSH_AUTH_SOCK") === void 0 && le("GIT_SSH_COMMAND") === void 0;
}

function mt(n, e) {
  let r = e ? `see ${e} and ` : "", o = ye().state;
  if (o.toolScoped) {
    let p = o.ghStandin === !0;
    return `GitHub access for git${p ? " and gh" : ""} goes through a pre-configured session proxy (CA bundle: ${n}) via per-session git config${p ? " and a gh PATH shim" : ""}; other network traffic uses this machine's own egress. If ${p ? "git or gh fail" : "git fails"} against github.com (TLS or HTTP errors, or a transfer cut off with connection reset / unexpected disconnect), ${r}check the git config file named by $GIT_CONFIG_GLOBAL; never disable TLS verification or remove the proxy/sslCAInfo entries there.` + (o.ghShimDir && !p ? " `gh` in a Bash command is this machine's own GitHub CLI, with its own sign-in and network path." : "");
  }
  let s = (o.installedProxyPreconfiguredClis ?? []).filter(p => !(o.ghStandin === !0 && p === "gh")), h = s.length > 0 ? ` Installed CLIs preconfigured for the proxy: ${s.join(", ")} \u2014 ` + "prefer a skill/MCP tool, then these, over raw curl." : "";
  return `Outbound HTTPS goes through a pre-configured agent proxy (CA bundle: ${n}). If a tool fails TLS verification, gets 403/405/407 from the proxy, or a transfer is cut off (connection reset, unexpected disconnect, RPC failed), ${r}run curl -sS "$HTTPS_PROXY/__agentproxy/status" for per-tool fixes and proxy state; never disable TLS verification or unset HTTPS_PROXY.` + h;
}

var Ho = [ [ "git_http_proxy_configured", /^http\.(.+\.)?proxy$/m ], [ "git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m ], [ "git_https_to_ssh_insteadof_configured", /^url\.(git@|ssh:\/\/).*\.insteadof$/m ] ];

function Mo() {
  let n = Bo(ko()).root;
  try {
    let e = _t();
    if (e && vo(e).isDirectory()) return e;
    return n;
  } catch {
    return n;
  }
}

async function Fo() {
  let n = new Set, e = await Promise.all([ "--global", "--system" ].map(r => ft("git", [ "config", r, "--list", "--name-only" ], {
    timeout: 5e3,
    preserveOutputOnError: !0,
    cwd: Mo()
  })));
  for (let r of e) {
    if (r.code !== 0) continue;
    for (let [o, s] of Ho) if (s.test(r.stdout)) n.add(o);
  }
  return [ ...n ];
}

function Go(n, e) {
  let r = H(e, ".."), o = `http://127.0.0.1:${n}`;
  return `# Claude Code agent proxy\n\nOutbound HTTPS from this session goes through a local proxy at ${o}\n(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is\nre-terminated there, so every tool must trust the CA bundle at\n${e}. The standard CA environment variables, the system trust\nstore (where possible), a JVM truststore, the Bazel system bazelrc, the\nbrowser NSS store, and gsutil's boto config are already set up.\n\n## Quick diagnosis\n\n1. Run: curl -sS ${o}/__agentproxy/status\n   It reports proxy state, which trust and git accommodations are active\n   (javaTrustStorePath, toolTrustFailureCodes, gitSshRewrite,\n   gitConfigConflicts), and the most recent proxy-side failures.\n2. Find the failure class below and apply the matching fix; gitConfigConflicts\n   codes map to the git section, toolTrustFailureCodes to the JVM section.\n3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry\n   organization policy denials (403/407) \u2014 report them instead.\n\n## Failure classes and fixes\n\n### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors\n\nThe failing tool is not reading the pre-set CA configuration. In order:\n\n- If the tool has a CA flag or env var, point it at ${e}\n  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,\n  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,\n  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).\n- Tool config files override environment variables. If one of these sets its\n  own CA or disables verification, point it at the bundle instead:\n  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",\n  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",\n  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".\n- JVM tools (Maven, Gradle, plain Java): when a JDK is present,\n  JAVA_TOOL_OPTIONS points JVMs at a truststore that holds the proxy CA: the\n  JDK's own store if the system trust install already added the CA there,\n  otherwise ${r}/java-truststore.p12 (password "changeit"). Confirm\n  javaTrustStorePath is set in the status output before pointing a build at it\n  (toolTrustFailureCodes explains why it is missing). If the image or the\n  build sets its own trustStore, that one wins \u2014 import the proxy CA into it\n  with\n  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${r}/agent-proxy-ca.crt -keystore <their store>\n  or point the build at the ready-made one. Bazel reads the managed block in\n  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.\n\n### "405 Method Not Allowed" from the proxy\n\nThe tool sent a plain-HTTP (non-CONNECT) request: usually axios older than\n1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for\nthat tool \u2014 only HTTPS_PROXY is supported).\n\n### 403 / 407 from the proxy\n\nThe destination host is not allowed by your organization's egress policy for\nthis session. Do not retry or route around it \u2014 report the blocked host.\nNote: curl hides response bodies on failed CONNECTs; the status endpoint\nrecords the reason.\n\n### "connection reset" / "unexpected disconnect" / "RPC failed" mid-transfer\n\nOnce a tunnel is up the proxy cannot send an error response, so a connection\nit aborts (tunnel to the egress proxy lost, or an upload the tunnel stopped\naccepting) reaches the tool as a bare reset. recentRelayFailures in the status\noutput names the host and reason; check it before concluding the remote\nservice refused the operation.\n\n### Tool ignores the proxy entirely (timeouts with no proxy error)\n\nSome clients do not read HTTPS_PROXY: Node's built-in fetch (run that command\nwith NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),\nRuby bundler (reads only HTTP_PROXY, which this proxy does not serve),\nhand-rolled Go dialers. Prefer the tool's own proxy option where one exists.\n\n### git\n\nSSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS\nautomatically unless this session has its own SSH setup or supplies its own\nGIT_CONFIG_* (see gitSshRewrite in the status output). A gitconfig that sets\nhttp.proxy / http.<url>.proxy (even empty), its own http.sslCAInfo, or an\nhttps-to-ssh insteadOf makes git bypass the proxy or fail verification \u2014 the\nstatus output's gitConfigConflicts codes name which of these were detected;\nadjust those keys for this session if git times out.\n\n### docker build / docker run\n\nProcesses inside containers cannot reach 127.0.0.1:${n} and do not trust\nthe CA. Workarounds: run builds with --network host, copy ${e}\ninto the build context and install it in an early layer, and pass proxy/CA\nsettings explicitly to the build.\n\n### Not supported through the proxy (report, do not work around)\n\ngRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned\nclients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.\n\nIf a tool still cannot work through the proxy, report it to your\nadministrator or Anthropic support so the policy or tooling can be fixed.\n`;
}

async function Uo(n) {
  try {
    return {
      existed: !0,
      token: (await he(n, "utf8")).trim() || null
    };
  } catch (e) {
    if (W(e)) return {
      existed: !1,
      token: null
    };
    return t(`[agent-proxy] token read failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "warn"
    }), {
      existed: !1,
      token: null
    };
  }
}

async function oBo(n = Un) {
  for (let e of n) try {
    return await he(e, "utf8");
  } catch {}
  return "";
}

var Wo = 1048576;

async function Yo(n, e) {
  let r = new Set, o = [], s = n;
  for (let h of Hbe) {
    let p = process.env[h]?.trim();
    if (!p || p === e || r.has(p) || Un.includes(p)) continue;
    r.add(p);
    let d;
    try {
      let w = await Gn(p);
      if (!w.isFile() || w.size > Wo) continue;
      d = await he(p, "utf8");
    } catch (w) {
      if (!W(w)) t(`[agent-proxy] could not read customer CA bundle from ${h}: ${w instanceof Error ? w.message : String(w)}`, {
        level: "warn"
      });
      continue;
    }
    let u = d.match(bj);
    if (!u) continue;
    let y = 0;
    for (let w of u) {
      if (s.includes(w)) continue;
      o.push(w), s += `\n${w}`, y++;
    }
    if (y > 0) t(`[agent-proxy] folded ${y} customer CA cert(s) from ${h} into the relay bundle`);
  }
  return o.join(`\n`);
}

var jo = [ {
  dir: "/usr/local/share/ca-certificates",
  name: "ccr-agent-proxy.crt",
  refresh: [ "update-ca-certificates" ],
  link: "/etc/ssl/certs/ccr-agent-proxy.pem",
  direct: dn
}, {
  dir: "/etc/pki/ca-trust/source/anchors",
  name: "ccr-agent-proxy.crt",
  refresh: [ "update-ca-trust", "extract" ]
} ], Xo = 1e4;

async function DBs(n, e, {systemCa: r, recordPath: o, timeoutMs: s = Xo}) {
  let h = await Se(o, n), p = sBo(r, n) && h !== "different", d = () => Tn(o, n).catch(C => {
    t(`[agent-proxy] could not record the system trust install: ${l(C)}`);
  }), u = {}, y = Ae(n), w = Ln(n), b = !1;
  for (let {dir: C, name: x, refresh: T, link: S, direct: A} of e) try {
    let P = H(C, x), R = S ? {
      path: H(C, x.replace(/\.crt$/, "-2.crt")),
      link: S.replace(/\.pem$/, "-2.pem")
    } : void 0, D = R === void 0 ? void 0 : await Ce(R.path), N = D === void 0 || D.state === "missing", te = R !== void 0 && y !== void 0 && N, G = p ? await Ce(P) : void 0;
    if (G?.state === "read") {
      let O = de(G.text, n);
      if (N ? O === "same" && h === "same" : O !== "different" && D?.state === "read" && de(D.text, Ln(G.text)) === "same") {
        if (t(`[agent-proxy] CA already in the system trust store${O === "swapped" ? ", its two certificates in the other order" : ""}; install skipped`), 
        h === "swapped") await d();
        return g("agent_proxy_system_trust", {
          reused: !0,
          ...te && {
            old_layout: !0
          },
          ...h === "swapped" && {
            swapped: !0
          }
        }), b ? "failed" : "reused";
      }
    }
    if (A && S && N) {
      let O = Date.now() + s, j = !1, q = await st(n, {
        anchorPath: P,
        link: S,
        layout: A,
        recordPath: o,
        timeoutMs: s
      });
      if (q.outcome === "installed" && y !== void 0 && R) j = !0, q = await st(w, {
        anchorPath: R.path,
        link: R.link,
        layout: A,
        recordPath: o,
        timeoutMs: Math.max(1, O - Date.now())
      });
      switch (q.outcome) {
       case "installed":
        return await d(), t("[agent-proxy] CA installed to system trust directly"), g("agent_proxy_system_trust", {
          reused: !1,
          method: c("direct")
        }), b ? "failed" : "installed";

       case "hook_incomplete":
        return f("agent_proxy_system_trust", "hook_incomplete"), "failed";

       case "abandoned":
        {
          let L = q.step;
          u = {
            direct_failed_step: c(L)
          };
          break;
        }

       case "not_attempted":
        {
          let L = c(q.reason);
          u = j ? {
            second_anchor_direct_skipped: L
          } : {
            direct_skipped: L
          };
          break;
        }
      }
    } else if (A && S) u = {
      direct_skipped: c("anchor_present")
    };
    if (await Ue(P, n, "utf8"), await ge(o).catch(() => {}), R && (y !== void 0 || !N)) await Ue(R.path, w, "utf8"), 
    await ge(R.link).catch(() => {});
    if (S) await ge(S).catch(() => {});
    let U = await new Promise(O => {
      Po(T[0], T.slice(1), {
        timeout: s,
        cwd: "/",
        windowsHide: !0,
        ...Dl("helper")
      }, j => O(j ? W(j) ? 127 : 1 : 0));
    });
    if (U === 0) return await d(), t(`[agent-proxy] CA installed to system trust via ${T[0]}`), 
    g("agent_proxy_system_trust", {
      reused: !1,
      method: c("refresh"),
      ...u
    }), b ? "failed" : "installed";
    b = !0, t(`[agent-proxy] ${T[0]} exited ${U}; falling back to env-var trust`, {
      level: "warn"
    });
  } catch (P) {
    if (W(P)) continue;
    b = !0, t(`[agent-proxy] system trust install via ${C} failed: ${P instanceof Error ? P.message : String(P)}`, {
      level: "warn"
    });
  }
  if (e.length > 0) f("agent_proxy_system_trust", "unavailable", u);
  return b ? "failed" : "no_store";
}

function Ln(n) {
  return `${Ae(n) ?? n.match(bj)?.[0] ?? n.trimEnd()}\n`;
}

function sBo(n, e) {
  let r = e.match(bj);
  return r !== null && r.every(o => n.includes(o));
}

function Hn(n, e) {
  if (n.outcome === "retry") return n;
  return t(`[agent-proxy] ${n.detail}; proxy disabled`, {
    level: "warn"
  }), m("agent_proxy_init", `agent_proxy_init_ca_${n.code}`, {
    ca_source: c(e)
  }), n;
}

var Ko = 65536;

function LBs(n) {
  let e = n.trim();
  if (e === "") return {
    ok: !1,
    reason: "empty"
  };
  if (!/^[A-Za-z0-9+/=]+$/.test(e)) return {
    ok: !1,
    reason: "not base64"
  };
  let r = Buffer.from(e, "base64");
  if (r.length === 0 || r.length > Ko) return {
    ok: !1,
    reason: `decoded to ${r.length} bytes`
  };
  let o = be(r.toString("utf8"));
  return o.ok ? {
    ok: !0,
    pem: o.blocks.join(`\n`) + `\n`
  } : o;
}

var qo = 3, Vo = 36e5, Mn = 3;

function xt(n) {
  return H(n, "..", "system-trust.ca.pem");
}

var Jo = /^(nss_|java_truststore_)/;

async function Jn(n, e) {
  return await Se(H(n, "..", "agent-proxy-ca.crt"), e) !== "different";
}

function zn(n, e) {
  return n === "failed" || e.some(r => Jo.test(r));
}

function se(n, e, r, o, s = n.systemCa) {
  return DBs(e, n.opts?.systemTrustTargets ?? jo, {
    systemCa: s,
    recordPath: r
  }).catch(() => "failed").then(h => (o?.(), h));
}

async function zo(n, e, r, {systemTrust: o, toolTrust: s, installDeferred: h, onInstallSettled: p, embeddedEndpoint: d, relayPort: u, trust: y}) {
  let {runtime: w, baseUrl: b, localCa: C, caBundlePath: x, toolScoped: T, opts: S} = n, A = xt(x), P = h, R = Date.now(), D = !1, N;
  for (let O = 1; ;O++) {
    if (O > 1) {
      let j = N?.outcome === "retry" ? N : void 0;
      await J(S?.retryDelayMs?.(O) ?? rBo(O, j?.retryAfter ?? null), void 0, {
        unref: !0
      });
    }
    if (w.state !== e) return;
    if (Ct()) {
      if (P) P = !1, await se(n, r, A, p);
      return;
    }
    if (N = await Et(b, {
      budgetMs: S?.caFetchBudgetMs ?? 15e3,
      tries: 1
    }), N.outcome !== "retry") break;
    if (p(), P && O >= qo) {
      if (w.state !== e) return;
      P = !1, await se(n, r, A, p);
    }
    if (!D && Date.now() - R >= (S?.retryBadAfterMs ?? Yn)) D = !0, t(`[agent-proxy] CA reconcile: ${N.detail}; still failing after ${O} attempts, retrying anyway`, {
      level: "warn"
    }), f("agent_proxy_ca_reconcile", "fetch_still_failing");
  }
  if (w.state !== e || N === void 0) return;
  if (N.outcome !== "ok") {
    if (t(`[agent-proxy] CA reconcile: ${N.detail}; the bundle keeps the environment's CA`, {
      level: "warn"
    }), f("agent_proxy_ca_reconcile", "fetch_http_error"), P) await se(n, r, A, p);
    return;
  }
  let te = de(N.ccrCa, r);
  if (te === "same") {
    if (g("agent_proxy_ca_reconcile", {
      changed: !1
    }), P) await se(n, r, A, p);
    return;
  }
  let G = await Pt(C, N.ccrCa, x);
  if (G.outcome !== "ok") {
    if (t(`[agent-proxy] CA reconcile: ${G.detail}; the bundle keeps the environment's CA`, {
      level: "warn"
    }), f("agent_proxy_ca_reconcile", "write_failed"), P && w.state === e) await se(n, N.ccrCa, A, p);
    return;
  }
  if (P = !1, y) y.ccrCa = N.ccrCa, y.systemTrust = void 0, y.installIncomplete = !0;
  if (w.state !== e) return;
  if (t(`[agent-proxy] CA reconcile: the served CA differs from the environment${te === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten`), 
  g("agent_proxy_ca_reconcile", {
    changed: !0,
    ...te === "swapped" && {
      swapped: !0
    }
  }), d) XAn({
    proxyUrl: _e(u),
    gatewayCa: N.ccrCa
  });
  if (T) return;
  if (await o, w.state !== e) return;
  let U = se(n, N.ccrCa, A, p);
  if (await U, S?.toolTrust === !1 || w.state !== e) return;
  if (await s, w.state !== e) return;
  await Ge({
    ccrCa: N.ccrCa,
    caBundlePath: x,
    hasSystemCa: e.hasSystemCa ?? !1,
    stateDir: H(x, ".."),
    systemTrust: U,
    ...S?.toolTrust ?? {}
  }).then(O => {
    if (w.state !== e) return;
    if (O.javaTrustStorePath && O.javaTrustStoreType) e.javaTrustStorePath = O.javaTrustStorePath, 
    e.javaTrustStoreType = O.javaTrustStoreType;
    e.toolTrustFailureCodes = O.failureCodes.length > 0 ? O.failureCodes : void 0;
  }).catch(O => {
    t(`[agent-proxy] CA reconcile: tool trust rebuild failed: ${l(O)}`, {
      level: "warn"
    }), f("agent_proxy_ca_reconcile", "tool_trust_rebuild_threw");
  });
}

function Fn(n, e, r, o) {
  let {runtime: s, caBundlePath: h, opts: p} = n, d = xt(h), {systemTrust: u, toolTrust: y} = r, w = [], b = !1, C = (async () => {
    if (await u, s.state !== e) return;
    let S = p?.systemCaPath ? await he(p.systemCaPath, "utf8").catch(() => "") : await oBo(), A = await u;
    if (A === "failed" || A === void 0) await ge(d).catch(() => {});
    return se(n, o, d, void 0, S);
  })(), T = (async () => {
    if (await C, p?.toolTrust === !1 || s.state !== e) return;
    if (await y, s.state !== e) return;
    await Ge({
      ccrCa: o,
      caBundlePath: h,
      hasSystemCa: e.hasSystemCa ?? !1,
      stateDir: H(h, ".."),
      systemTrust: C,
      ...p?.toolTrust ?? {}
    }).then(S => {
      if (s.state !== e) return;
      if (S.javaTrustStorePath && S.javaTrustStoreType) e.javaTrustStorePath = S.javaTrustStorePath, 
      e.javaTrustStoreType = S.javaTrustStoreType;
      e.toolTrustFailureCodes = S.failureCodes.length > 0 ? S.failureCodes : void 0, w = S.failureCodes;
    }).catch(S => {
      t(`[agent-proxy] CA watch: tool trust rebuild failed: ${l(S)}`, {
        level: "warn"
      }), b = !0;
    });
  })().then(async () => {
    if (s.state !== e) return;
    let S = p?.toolTrust === !1 || await Jn(h, o), A = b || !S || zn(await C, w);
    if (s.state === e) r.installIncomplete = A;
  });
  return r.ccrCa = o, r.systemTrust = C, r.toolTrust = T, T;
}

async function Qo(n, e, r, {intervalMs: o, afterStart: s, embeddedEndpoint: h, relayPort: p}) {
  let {runtime: d, baseUrl: u, localCa: y, caBundlePath: w, opts: b} = n;
  await s;
  let C = !1, x = (T, S) => {
    if (t(`[agent-proxy] CA watch: ${T}; checking again later`), !C) C = !0, f("agent_proxy_ca_watch", S);
  };
  for (;;) {
    if (await J(o, void 0, {
      unref: !0
    }), d.state !== e || Oy() || Ct()) return;
    let T = await Et(u, {
      budgetMs: b?.caFetchBudgetMs ?? 15e3,
      tries: 1
    });
    if (d.state !== e) return;
    if (T.outcome !== "ok") {
      x(T.detail, T.outcome === "retry" ? "fetch_failed" : "fetch_http_error");
      continue;
    }
    if (!be(T.ccrCa).ok) {
      x("the served CA does not parse", "unparsable");
      continue;
    }
    let S = de(T.ccrCa, r.ccrCa);
    if (S === "same") {
      if (C = !1, !r.installIncomplete) continue;
      if (r.installRetries >= Mn) {
        t(`[agent-proxy] CA watch: a trust store did not take the CA after ${Mn} more tries; leaving it until the CA changes`, {
          level: "warn"
        }), f("agent_proxy_ca_watch", "install_incomplete"), r.installIncomplete = !1;
        continue;
      }
      r.installRetries++, t("[agent-proxy] CA watch: trust stores refreshing again for the CA the bundle holds"), 
      await Fn(n, e, r, T.ccrCa);
      continue;
    }
    let A = await Pt(y, T.ccrCa, w);
    if (A.outcome !== "ok") {
      x(A.detail, "write_failed");
      continue;
    }
    if (C = !1, r.installRetries = 0, d.state !== e) return;
    if (t(`[agent-proxy] CA watch: the served CA changed${S === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten, trust stores refreshing`), 
    g("agent_proxy_ca_watch", {
      changed: !0,
      ...S === "swapped" && {
        swapped: !0
      }
    }), h) XAn({
      proxyUrl: _e(p),
      gatewayCa: T.ccrCa
    });
    await Fn(n, e, r, T.ccrCa);
  }
}

async function Et(n, {budgetMs: e, tries: r}) {
  let o = AbortSignal.timeout(e), s = "", h = null;
  for (let d = 0; d < r; d++) {
    h = null;
    try {
      let u = await fetch(`${n}${JAr}/ca-cert`, {
        signal: o
      });
      if (u.status >= 500 || u.status === 408 || u.status === 429) {
        s = `status ${u.status}`, h = u.headers.get("retry-after");
        continue;
      }
      if (!u.ok) return {
        outcome: "fatal",
        code: "http_error",
        detail: `ca-cert fetch ${u.status}`
      };
      let y = await u.text();
      if (!y.match(bj)) {
        s = "no certificate in response";
        continue;
      }
      return {
        outcome: "ok",
        ccrCa: y
      };
    } catch (u) {
      s = u instanceof Error ? u.message : String(u);
    }
  }
  return {
    outcome: "retry",
    detail: `ca-cert fetch exhausted (${s})`,
    retryAfter: h
  };
}

async function Pt(n, e, r) {
  try {
    await yt(H(r, ".."), {
      recursive: !0
    }), await Tn(r, ei(n, e));
  } catch (o) {
    let s = `ca-bundle write failed (${l(o)})`;
    if (Eqn(o)) return {
      outcome: "retry",
      detail: s,
      retryAfter: null
    };
    return {
      outcome: "fatal",
      code: "write_failed",
      detail: s
    };
  }
  return {
    outcome: "ok"
  };
}

async function Zo(n) {
  try {
    await yt(H(n, ".."), {
      recursive: !0,
      mode: 448
    }), await Ue(n, `[default]\ns3 =\n  payload_signing_enabled = false\n`, {
      flag: "wx",
      mode: 384
    });
  } catch (e) {
    if (E(e) === "EEXIST") return;
    t(`[agent-proxy] aws config write failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "warn"
    });
  }
}

function _e(n) {
  return `http://127.0.0.1:${n}`;
}

function ei(n, e) {
  return n + `\n` + e;
}

export { PBs, tBo, PNr, IBs, OBs, nBo, MBs, OKs, HBs, MKs, rBo, Lpn, HKs, DKs, LKs, oBo, DBs, sBo, LBs };
