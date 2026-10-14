// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, Ze, IJe, Mu, J0o, Odn } from "./chunk-3pqddg8f.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { a } from "./chunk-j016gcgm.js";

import { bt, Ggt, _, Y, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { uS, Rk } from "./chunk-yxennhe9.js";

import { Xa } from "./chunk-3kb22va7.js";

import { Pft, zH } from "./chunk-1tdw23h1.js";

import { i_ } from "./chunk-xywp7esx.js";

import { g0s } from "./chunk-07cck4g7.js";

import { yd } from "./chunk-3xtsjx0y.js";

import { LI, mHe } from "./chunk-3sf5tbbc.js";

import { uos, Cxn, AS, OT } from "./chunk-84yp45y8.js";

import { kWr, Zjt } from "./chunk-01ajyt8d.js";

import { oi } from "./chunk-bp2n0w3d.js";

import { tWt, nWt } from "./chunk-j45wsgfh.js";

import { Rl, ol, Lp, Yr, p4e, SNe, ub, rit, wNe, HT } from "./chunk-z09tf6qf.js";

import { _Wr, fHe, bWr } from "./chunk-vqf0rq19.js";

import { sb, NI } from "./chunk-knws81s6.js";

import { GVt } from "./chunk-7de0e9qj.js";

import { unlink as S } from "fs/promises";

import { createServer as L } from "net";

import { join as H } from "path";

import { StringDecoder as N } from "string_decoder";

class k {
  resolver=null;
  registerResolver(e) {
    this.resolver = e;
  }
}

var R = new K(() => new k);

function Jjt(e, r) {
  R.of(e).registerResolver(r);
}

function E(e, r) {
  return R.of(e).resolver?.(r) ?? !1;
}

class D {
  runner=null;
  registerRunner(e) {
    this.runner = e;
  }
}

var P = new K(() => new D);

function fWr(e, r) {
  P.of(e).registerRunner(r);
}

function b(e, r) {
  try {
    return P.of(e).runner?.(r) ?? !1;
  } catch (o) {
    return t(`[bg-rv] command runner threw, queueing the reply: ${l(o)}`, {
      level: "warn"
    }), !1;
  }
}

import { rm as U } from "fs/promises";

import { join as M } from "path";

class u {
  static NAME=".prompt-draft";
  static MAX_BYTES=262144;
  #t;
  #r;
  #e=Promise.resolve();
  #o;
  constructor(e) {
    this.#t = e;
  }
  follow() {
    return this.#o ??= this.#t.subscribe(this.#s), this.#n();
  }
  settled() {
    return this.#i(this.#e);
  }
  dispose() {
    this.#o?.(), this.#o = void 0;
  }
  #s=() => {
    let {value: e, cameBack: r} = this.#t.getState();
    if (e !== this.#r?.value || r !== this.#r.cameBack) this.#n();
  };
  #n(e = a.CLAUDE_JOB_DIR) {
    if (this.#r = this.#t.getState(), e) this.#e = this.#e.then(() => this.#a(e)).catch(ol);
    return this.#e;
  }
  #a(e) {
    let {value: r, cameBack: o} = this.#t.getState(), n = M(e, u.NAME);
    return r !== "" && !o ? fHe(n, ne(r, u.MAX_BYTES)) : U(n, {
      force: !0
    }).catch(s => (ol(s), fHe(n, "")));
  }
  async #i(e) {
    return await e, e === this.#e ? void 0 : this.#i(this.#e);
  }
}

var j = 3;

class A {
  server;
  current=void 0;
  heartbeat;
  wedgeTimer=void 0;
  wedgeDisarmed=!1;
  authToken;
  currentAuthed=!1;
  unauthedDrops=0;
  gateReported=!1;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  promptInput=LI(C());
  promptDraftFile=new u(this.promptInput);
  promptStash=new bWr(this.promptInput);
  constructor(e, r, o, n, i) {
    this.authToken = r, this.storageV5 = i, this.nativeBrowserEnv = o, this.pendingInteractiveMarks = n, 
    this.server = L(s => this.onConnection(s)), this.server.on("error", s => t(`[bg-rv] server error: ${String(s)}`, {
      level: "warn"
    })), this.server.listen(e), this.server.unref(), this.heartbeat = setInterval(() => this.send({
      type: "heartbeat"
    }), 3e4), this.heartbeat.unref();
  }
  onConnection(e) {
    this.current?.destroy(), this.current = e, this.currentAuthed = !1, Odn(!1);
    while (this.pendingInteractiveMarks.length > 0) {
      let n = this.pendingInteractiveMarks[0];
      if (n === void 0 || !this.send(n)) break;
      this.pendingInteractiveMarks.shift();
    }
    this.unauthedDrops = 0, this.gateReported = !1, this.clearPreBootState().catch(n => {
      if (!W(n)) ol(n);
    }), this.restorePromptDraft().catch(() => {}), this.promptStash.restore().catch(d), 
    e.on("error", () => e.destroy()), e.once("close", () => {
      if (this.current === e) this.current = void 0, Odn(!1);
    });
    let r = "", o = new N("utf8");
    e.on("data", n => {
      if (this.current !== e) {
        e.destroy();
        return;
      }
      r += o.write(n);
      let i;
      while ((i = r.indexOf(`\n`)) >= 0) {
        let s = r.slice(0, i);
        if (r = r.slice(i + 1), s) this.handleLine(s);
      }
      if (r.length > 1048576) r = "", e.destroy();
    });
  }
  stop() {
    clearInterval(this.heartbeat), clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0, 
    this.current?.destroy(), this.current = void 0, Odn(!1), this.restoreNativeBrowserEnv(), 
    this.promptDraftFile.dispose(), this.promptStash.dispose(), this.server.close();
  }
  send(e) {
    if (!this.current || this.current.destroyed) return !1;
    try {
      return this.current.write(_(e) + `\n`), !0;
    } catch {
      return !1;
    }
  }
  noteUnauthedRejection() {
    if (this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= j) this.gateReported = !0, 
    m("bg_rv_gate", "unauthed_drops");
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) delete process.env.BROWSER; else process.env.BROWSER = this.nativeBrowserEnv;
  }
  handleLine(e) {
    let r;
    try {
      r = Y(e);
    } catch {
      return;
    }
    if (!r || typeof r !== "object") return;
    if ("role" in r) {
      if (this.authToken) if ("auth" in r && zH(r.auth, this.authToken)) {
        if (this.currentAuthed = !0, !this.gateReported) this.gateReported = !0, g("bg_rv_gate");
      } else {
        if (!this.currentAuthed) this.noteUnauthedRejection();
        this.send({
          type: "auth-rejected"
        });
      }
      return;
    }
    let o = r;
    if (this.authToken && !this.currentAuthed && o.type !== "repaint") {
      if (t(`[bg-rv] dropped ${typeof o.type === "string" ? o.type : "unknown"} from un-authed connection`, {
        level: "warn"
      }), o.type !== "attacher-caps") this.noteUnauthedRejection();
      this.send({
        type: "reply-rejected"
      });
      return;
    }
    if (o.type === "shutdown") {
      V(this.promptDraftFile, this.storageV5);
      return;
    }
    if (o.type === "repaint") {
      G();
      return;
    }
    if (o.type === "attacher-caps") {
      this.handleAttacherCaps(o);
      return;
    }
    if (o.type === "reply" && typeof o.text === "string") q(o);
  }
  handleAttacherCaps(e) {
    if (J0o(e.caps), Odn(!0), e.caps) kWr(Date.now()); else Zjt();
    if (g0s(e.caps?.colorLevel), !e.caps) this.restoreNativeBrowserEnv(); else if (typeof e.caps.browser === "string") process.env.BROWSER = e.caps.browser; else delete process.env.BROWSER;
    if (e.caps?.systemTheme) GVt(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let r = 0; !oi().has(process.stdout); r++) {
      if (r >= 60 || this.current !== e) return !1;
      await J(500);
    }
    return !0;
  }
  async clearPreBootState() {
    let e = a.CLAUDE_JOB_DIR;
    if (!e) return;
    if (!await this.waitForInkMount(this.current)) return;
    await p4e(async () => {
      let r = await Yr(e, this.storageV5);
      if (!r) return;
      if (!r.forkSourceAlive) {
        let n = Cxn(a.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (n) await Rl(e, {
          ...r,
          ...n
        }, this.storageV5), Object.assign(r, n);
      }
      if (r.state === "working" && r.detail === SNe) this.armStartupWedgeWatchdog(e);
      let o = n => {
        let i = AS.current();
        return n.tempo === "blocked" && rit(n) && !(i?.overlay === !0 && i.text === n.needs);
      };
      if (o(r)) {
        let n = await Yr(e, this.storageV5) ?? r;
        if (!o(n)) return;
        await Rl(e, {
          ...n,
          ...wNe.includes(n.state) && {
            state: "running"
          },
          tempo: "idle",
          needs: void 0,
          needsOverlay: void 0,
          block: void 0,
          updatedAt: (new Date).toISOString()
        }, this.storageV5), this.send({
          type: "state",
          patch: {
            ...wNe.includes(n.state) && {
              state: "running"
            },
            tempo: "idle",
            needs: ""
          }
        });
        return;
      }
      if (!wNe.includes(r.state)) return;
      if (r.tempo === "blocked") return;
      await Rl(e, {
        ...r,
        state: "running",
        tempo: "idle",
        updatedAt: (new Date).toISOString()
      }, this.storageV5), this.send({
        type: "state",
        patch: {
          state: "running",
          tempo: "idle"
        }
      });
    });
  }
  armStartupWedgeWatchdog(e) {
    if (this.wedgeDisarmed) return;
    clearTimeout(this.wedgeTimer);
    let r = a.CLAUDE_BG_STARTUP_WEDGE_MS || 45e3;
    this.wedgeTimer = setTimeout(o => this.onStartupWedgeTimeout(o), r, e), this.wedgeTimer.unref();
  }
  disarmStartupWedgeWatchdog() {
    this.wedgeDisarmed = !0, clearTimeout(this.wedgeTimer), this.wedgeTimer = void 0;
  }
  onStartupWedgeTimeout(e) {
    Yr(e, this.storageV5).then(async r => {
      if (this.wedgeDisarmed || r?.state !== "working" || r.detail !== SNe || r.tempo === "blocked") return;
      await Rl(e, {
        ...r,
        tempo: "blocked",
        detail: h,
        needs: f,
        updatedAt: (new Date).toISOString()
      }, this.storageV5), this.send({
        type: "state",
        patch: {
          tempo: "blocked",
          detail: h,
          needs: f
        }
      });
    }).catch(r => {
      if (!W(r)) ol(r);
    });
  }
  async restorePromptDraft() {
    let e = a.CLAUDE_JOB_DIR;
    if (!e) return;
    let r = H(e, u.NAME), o = await Xa(r, 4 * u.MAX_BYTES);
    if (o === null) return;
    await S(r).catch(() => {});
    let n = _Wr(o);
    if (!n) return;
    if (!tWt()) nWt(n);
    if (!await this.waitForInkMount(this.current)) return;
    if (this.promptInput.getState().value === "") mHe(this.promptInput, n);
  }
}

class T {
  server=void 0;
}

var F = new K(() => new T);

function C() {
  return B();
}

function w() {
  return C().host;
}

function v() {
  return F.of(w());
}

async function Dqs(e) {
  let r = a.CLAUDE_BG_RENDEZVOUS_SOCK, o = v();
  if (!r || o.server) return;
  let n = a.BROWSER, i = [];
  uos(c => {
    let y = {
      type: "interactive-mark",
      ...c
    };
    if (sle(y)) return !0;
    return i.push(y), !0;
  }), delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK;
  let s = a.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let p = a.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, p) {
    let c = await Pft(p);
    if (c?.rvAuth) s = c.rvAuth;
    await S(p).catch(() => {});
  }
  await S(r).catch(() => {}), o.server = new A(r, s, n, i, e);
  let x = o.server;
  bt(() => x.promptStash.flush());
}

function sle(e) {
  return v().server?.send(e) ?? !1;
}

function V(e, r) {
  sle({
    type: "shutting-down"
  });
  let o = yd(), n = [ e.follow() ];
  if (o) {
    let i = o.getLastSequenceNum();
    o.teardown({
      skipArchive: !0
    }).catch(() => {});
    let s = a.CLAUDE_JOB_DIR;
    if (s && i > 0) n.push(z(s, i, r).catch(() => {}));
  }
  n.push(Ggt()), Promise.race([ Promise.all(n).catch(() => {}).then(() => e.settled()), J(5e3) ]).finally(() => {
    process.exit(0);
  });
}

function G() {
  if (Mu() !== null) kWr(Date.now());
  if (!oi().get(process.stdout)?.forceRedraw({
    flushReact: !0
  })) process.stdout.write(Rk + uS + `\n  \x1b[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1b[0m\n`);
  sle({
    type: "repaint-done"
  });
}

function q(e) {
  if (e.nextTurn === !0) {
    OT({
      agentId: Ze(),
      mode: "prompt",
      value: e.text,
      priority: "next",
      origin: {
        kind: "human"
      },
      skipSlashCommands: !0
    }), IJe(), t(`[bg-rv] enqueued next-turn prompt: ${e.text.slice(0, 80)}`);
    return;
  }
  if (E(w(), e.text)) {
    t(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  if (b(w(), e.text)) {
    t(`[bg-rv] peer reply ran at once: ${e.text.slice(0, 80)}`);
    return;
  }
  let r = sb(e.text);
  if (OT({
    agentId: Ze(),
    mode: r,
    value: NI(e.text),
    priority: "next",
    origin: {
      kind: "human"
    }
  }), r === "prompt" && !e.text.trim().startsWith("/")) IJe();
  t(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}

var h = "stuck on a startup dialog", f = "open this session to continue setup";

function mWr() {
  v().server?.disarmStartupWedgeWatchdog();
}

async function O(e, r, o, n) {
  let i = await Yr(e, n);
  if (!i) return {
    kind: "refused"
  };
  if (i.tempo === "blocked" && i.needs === r) return {
    kind: "already"
  };
  if (i.tempo === "blocked" && i.needs !== ub) return {
    kind: "refused"
  };
  return await Rl(e, {
    ...i,
    tempo: "blocked",
    detail: o,
    needs: r,
    updatedAt: (new Date).toISOString()
  }, n), sle({
    type: "state",
    patch: {
      tempo: "blocked",
      detail: o,
      needs: r
    }
  }), {
    kind: "wrote",
    prior: {
      tempo: i.tempo,
      needs: i.needs,
      detail: i.detail
    }
  };
}

async function I(e, r, o, n) {
  let i = await Yr(e, n);
  if (!i || i.tempo !== "blocked" || i.needs !== r) return;
  await Rl(e, {
    ...i,
    ...o,
    updatedAt: (new Date).toISOString()
  }, n), sle({
    type: "state",
    patch: {
      tempo: o.tempo,
      needs: o.needs,
      detail: o.detail
    }
  });
}

async function Lqs(e, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o || v().server?.wedgeDisarmed) return;
  let n = e ? `${h} (${e})` : h, i = await O(o, f, n, r);
  return i.kind === "wrote" ? i.prior : void 0;
}

async function Nqs(e, r) {
  let o = a.CLAUDE_JOB_DIR;
  if (!o) return;
  await I(o, f, e, r);
}

async function gWr(e, r, o) {
  let n = a.CLAUDE_JOB_DIR;
  if (!n) return {
    kind: "refused"
  };
  return p4e(() => O(n, e, r, o));
}

async function hWr(e, r, o) {
  let n = a.CLAUDE_JOB_DIR;
  if (!n) return;
  await p4e(() => I(n, e, r, o));
}

async function yWr(e) {
  let r = a.CLAUDE_CODE_SESSION_KIND === "bg" ? a.CLAUDE_JOB_DIR : void 0, o = r ?? i_()?.jobDir;
  if (!o) return;
  let n = await Yr(o, e);
  if (n?.replayOwed === !0 && await p4e(async () => {
    Lp(o);
    let s = await Yr(o, e);
    if (s?.replayOwed !== !0 || s.tempo !== "active" || !HT(s.state)) return !1;
    return Rl(o, {
      ...s,
      tempo: "idle",
      replayOwed: void 0,
      updatedAt: (new Date).toISOString()
    }, e).then(() => !0, p => (ol(p), !1));
  })) {
    sle({
      type: "state",
      patch: {
        tempo: "idle"
      }
    });
    return;
  }
  if (!r || !n || n.state !== "working" || n.tempo !== "active") return;
  await Rl(o, {
    ...n,
    tempo: "blocked",
    needs: ub,
    updatedAt: (new Date).toISOString()
  }, e), sle({
    type: "state",
    patch: {
      tempo: "blocked",
      needs: ub
    }
  });
}

async function z(e, r, o) {
  let n = await Yr(e, o);
  if (!n || n.bridgeSessionSeq === r) return;
  await Rl(e, {
    ...n,
    bridgeSessionSeq: r,
    updatedAt: (new Date).toISOString()
  }, o);
}

export { Jjt, fWr, Dqs, sle, mWr, Lqs, Nqs, gWr, hWr, yWr };
