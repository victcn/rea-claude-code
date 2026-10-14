// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { hEe, K, B } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x, n2, vq, j, l, E, zr, W, jt } from "./chunk-b0z4bv3v.js";

import { J, Ht, We } from "./chunk-nvtwm272.js";

import { Ln } from "./chunk-ddr690nj.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { Kc, AYn, e0r, Ee, _$o } from "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import { Ql, sc } from "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import { Iv } from "./chunk-j016gcgm.js";

import { TX } from "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-0pmh7awy.js";

import { fI, uje, dM, PE } from "./chunk-60c97a4m.js";

import { tbe, rRt, QE } from "./chunk-ghdkaeg7.js";

import { p } from "./chunk-jkzenvsk.js";

import { GZ, ja, oHs } from "./chunk-s2t7g8m9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import "./chunk-zvghq5er.js";

import "./chunk-7en5gt36.js";

import "./chunk-30n0xq4e.js";

import { gn } from "./chunk-yxennhe9.js";

import "./chunk-qjb8dzm4.js";

import "./chunk-vatze04r.js";

import "./chunk-g9n1m2vk.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f, so } from "./chunk-3ykz5st8.js";

import "./chunk-t6pdm7af.js";

import "./chunk-1zg3hbfq.js";

import { Mo } from "./chunk-j90se18b.js";

import { v9e, Pu } from "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-5brm0azz.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-wptm3jf5.js";

import "./chunk-rgd61mm3.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-bsddf56y.js";

import { dr } from "./chunk-y3nc3daq.js";

import { $bn, pet, fet, fVr } from "./chunk-1e6qkkz4.js";

import { OVn, Efe, dG } from "./chunk-hazy64h6.js";

import { Agn, tjt } from "./chunk-evkccgb3.js";

import { Ok, SXn, Tjt } from "./chunk-7kv38428.js";

import "./chunk-3cqetdd0.js";

import "./chunk-3mf9knc3.js";

import { vye } from "./chunk-dnrbyy6h.js";

import "./chunk-fwpqj1qs.js";

import "./chunk-3kd8r7rn.js";

import { Kn } from "./chunk-gmn1ce75.js";

import "./chunk-vjmbaret.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { we } from "./chunk-m8ez8fhk.js";

var Me = 500, be = 1048576;

var _s = [ 200, 800 ];

class Ye {
  send;
  pending=[];
  pendingEntries=0;
  pendingBytes=0;
  flushPromise=null;
  sendTimeoutMs;
  onError;
  maxPendingEntries;
  maxPendingBytes;
  backoffMs;
  constructor(e, s) {
    this.send = e;
    let {sendTimeoutMs: n = 6e4, onError: r, maxPendingEntries: a = Me, maxPendingBytes: d = be, backoffMs: m = _s} = s ?? {};
    this.sendTimeoutMs = n, this.onError = r, this.maxPendingEntries = a, this.maxPendingBytes = d, 
    this.backoffMs = m;
  }
  enqueue(e, s) {
    let n = _(s).length;
    if (this.pending.push({
      filePath: e,
      entries: s,
      bytes: n
    }), this.pendingEntries += s.length, this.pendingBytes += n, this.pendingEntries > this.maxPendingEntries || this.pendingBytes > this.maxPendingBytes) this.flushPromise = this.drain(), 
    this.flushPromise.catch(() => {});
  }
  async flush() {
    let e = this.drain();
    if (this.flushPromise = e, await e, this.flushPromise === e) this.flushPromise = null;
  }
  async drain() {
    let e = this.flushPromise, s = this.pending.splice(0);
    if (this.pendingEntries = 0, this.pendingBytes = 0, e) await e;
    if (s.length === 0) return;
    await this.doFlush(s);
  }
  async doFlush(e) {
    let s = new Map;
    for (let n of e) {
      let r = s.get(n.filePath);
      if (r) r.push(...n.entries); else s.set(n.filePath, n.entries.slice());
    }
    for (let [n, r] of s) await this.sendWithRetry(n, r);
  }
  async sendWithRetry(e, s) {
    let n = this.backoffMs.length + 1, r = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${e}`, a, d = 1;
    for (;d <= n; d++) try {
      await Ht(this.send(e, s), this.sendTimeoutMs, r), a = void 0;
      break;
    } catch (m) {
      if (a = j(m), a.message === r) break;
      let h = this.backoffMs[d - 1];
      if (h === void 0) break;
      await J(h);
    }
    if (a) {
      t(`[TranscriptMirrorBatcher] flush failed for ${e} after ${d} attempt(s): ${a}`, {
        level: "error"
      });
      try {
        this.onError?.(e, a);
      } catch (m) {
        t(`[TranscriptMirrorBatcher] onError callback threw: ${m}`, {
          level: "error"
        });
      }
    }
  }
}

var Pt;

(function(e) {
  e.Completable = "McpCompletable";
})(Pt || (Pt = {}));

import { randomUUID as Os } from "crypto";

import { join as Mt } from "path";

class It {
  debugFilePath=void 0;
  initPromise=null;
  logStem=null;
}

var As = new K(() => new It);

function Dt() {
  return As.of(B().host);
}

function xt(e) {
  if (e.initPromise) return e.initPromise;
  if (!e0r("DEBUG_CLAUDE_AGENT_SDK")) return e.debugFilePath = null, e.initPromise = Promise.resolve(), 
  e.initPromise;
  let s = Mt(Ee(), "debug");
  return e.logStem = `sdk-${Os()}`, e.debugFilePath = Mt(s, `${e.logStem}.txt`), process.stderr.write(`SDK debug logs: ${e.debugFilePath}\n`), 
  e.initPromise = gn().mkdir(s).catch(() => {}), e.initPromise;
}

function Us(e) {
  return e.logStem === null ? null : {
    namespace: "log",
    sessionId: e.logStem,
    channel: "debug"
  };
}

function Ot() {
  let e = Dt();
  return xt(e), e.debugFilePath ?? null;
}

function U(e, s) {
  let n = Dt();
  if (n.debugFilePath === null) return;
  let a = `${(new Date).toISOString()} ${e}\n`;
  xt(n).then(() => {
    if (s !== void 0) {
      let d = Us(n);
      if (d !== null) s.append(d, [ {
        data: a
      } ]).catch(() => {});
      return;
    }
    if (n.debugFilePath) gn().append(n.debugFilePath, a).catch(() => {});
  });
}

var Io = p(() => u({
  session_id: o(),
  ws_url: o(),
  work_dir: o().optional(),
  session_key: o().optional()
}));

import { execFile as fn } from "child_process";

import { randomUUID as mn } from "crypto";

import { mkdir as dt, mkdtemp as tl, readFile as hn, rm as Sn, writeFile as es } from "fs/promises";

import { createRequire as yn } from "module";

import { homedir as ct, tmpdir as wn } from "os";

import { dirname as Jt, isAbsolute as bn, join as O, posix as kn, resolve as ut, sep as _n, win32 as vn } from "path";

import { fileURLToPath as Cn } from "url";

import { spawn as Ks } from "child_process";

import { existsSync as Bs } from "fs";

import { createInterface as qs } from "readline";

import { StringDecoder as Hs } from "string_decoder";

function js(e) {
  let s = e.trim();
  return s.startsWith("{") && s.endsWith("}");
}

var Ls = new Set([ "filesystem.denyRead", "filesystem.denyWrite", "network.deniedDomains", "credentials.files", "credentials.envVars" ]), Fs = new Set([ "ripgrep", "network.tlsTerminate" ]), Ns = new Set([ "__proto__", "constructor", "prototype" ]), $s = [ "httpProxyPort", "socksProxyPort" ];

function At(e, s, n = "") {
  let r = Kn(e) ? {
    ...e
  } : {};
  for (let [a, d] of Object.entries(s)) {
    if (Ns.has(a) || d === void 0) continue;
    let m = n ? `${n}.${a}` : a, h = Object.hasOwn(r, a) ? r[a] : void 0;
    if (Ls.has(m) && Array.isArray(h) && Array.isArray(d)) r[a] = D([ ...h, ...d ]); else if (Kn(h) && Kn(d) && !Fs.has(m)) r[a] = At(h, d, m); else r[a] = d;
  }
  return r;
}

function Ut(e, s) {
  let n = {
    ...e
  };
  if (!s) return n;
  let r = n.settings;
  if (r && !js(r)) throw Error("Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.");
  let a = {};
  if (r) try {
    a = Y(r);
  } catch {}
  let d = At(a.sandbox, s), m = s.credentials?.files, h = s.filesystem !== void 0 || Array.isArray(m) && m.some(C => Kn(C) && C.mode === "deny"), S = d.filesystem;
  if (h && s.filesystem?.disabled === void 0 && Kn(S) && S.disabled === !0) delete S.disabled;
  let w = s.network, y = w?.allowedDomains !== void 0 || (w?.deniedDomains?.length ?? 0) > 0 || w?.strictAllowlist === !0, k = d.network;
  if (y && Kn(k)) {
    for (let C of $s) if (w?.[C] === void 0 && k[C] !== void 0) delete k[C];
  }
  if (s.enabled === !0 && d.failIfUnavailable === void 0) d.failIfUnavailable = !0;
  return n.settings = _({
    ...a,
    sandbox: d
  }), n;
}

var zs = 2e3, et = 2048, Nt = "sdk-exit-after-stderr-drained", Gs = 200;

function tt(e) {
  return e === "exit" ? Nt : e;
}

class $t {
  #e=new Set;
  #t=!1;
  #s=() => this.killAll();
  track(e) {
    if (this.#e.add(e), !this.#t) this.#t = !0, process.on("exit", this.#s);
  }
  untrack(e) {
    this.#e.delete(e);
  }
  isTracking(e) {
    return this.#e.has(e);
  }
  get size() {
    return this.#e.size;
  }
  killAll() {
    for (let e of this.#e) if (!e.killed) e.kill("SIGTERM");
  }
  reset() {
    process.off("exit", this.#s), this.#t = !1, this.#e.clear();
  }
}

var xe = new $t, Ws = /[(),\u0000-\u001f\u007f-\u009f]/;

function Qs(e) {
  if (typeof e !== "string" || e.trim() === "") throw Error("Skill names must be non-empty strings.");
  if (!sc(e)) throw new x(`Invalid skill name ${_(e)}: the name contains an unpaired surrogate, which cannot survive the UTF-8 encoding of the CLI invocation; no skill discovered from the filesystem can have such a name.`, "skill name with unpaired surrogate rejected");
  if (e !== e.trim()) throw new x(`Invalid skill name ${_(e)}: leading or trailing whitespace is not allowed \u2014 the Skill tool trims the invoked name, so a padded rule can never match. Remove the padding.`, "skill name with surrounding whitespace rejected");
  if (Ws.test(e)) throw new x(`Invalid skill name ${_(e)}: parentheses, commas, and control characters are not allowed in skill names. Skill names match the skill's directory name (or 'plugin:skill' for plugin-qualified skills); rename the skill if its directory name contains these characters.`, "invalid skill name rejected");
  if (e === "*") throw Error("Invalid skill name '*': use skills: 'all' to enable every skill.");
  if (e.endsWith(":*") || e.endsWith(" *")) throw new x(`Invalid skill name ${_(e)}: wildcard-suffix names are not allowed; list each skill by its exact name.`, "wildcard-suffix skill name rejected");
  if (e.startsWith("/")) throw new x(`Invalid skill name ${_(e)}: skill names may not start with '/'. Skills are invoked as slash commands, but the skills option takes the skill's canonical name \u2014 the directory name, or 'plugin:skill'.`, "skill name with leading slash rejected");
  if (e.includes("\\\\")) throw new x(`Invalid skill name ${_(e)}: consecutive backslashes are not allowed \u2014 the permission-rule parser collapses escaped backslashes, so the rule would name a different skill. Rename the skill.`, "skill name with consecutive backslashes rejected");
  if (e.endsWith("\\")) throw new x(`Invalid skill name ${_(e)}: names may not end with an unpaired backslash.`, "skill name with unpaired trailing backslash rejected");
  return e;
}

class nt {
  options;
  process;
  processStdin;
  processStdout;
  ready=!1;
  abortController;
  exitError;
  exitEventDelivered=!1;
  stderrTail="";
  exitListeners=[];
  abortHandler;
  forwardedAbort=dr();
  pendingWrites=[];
  pendingEndInput=!1;
  spawnResolve;
  spawnReject;
  spawnPromise;
  constructor(e) {
    this.options = e;
    if (this.abortController = e.abortController || dr(), e.deferSpawn) this.spawnPromise = new Promise((s, n) => {
      this.spawnResolve = s, this.spawnReject = n;
    }), this.spawnPromise.catch(() => {}); else this.initialize();
  }
  spawn() {
    try {
      this.initialize();
    } catch (s) {
      throw this.spawnAbort(j(s)), s;
    }
    let e = this.pendingWrites;
    if (this.pendingWrites = [], this.spawnResolve) this.spawnResolve(), this.spawnResolve = void 0, 
    this.spawnReject = void 0;
    for (let s of e) this.write(s);
    if (this.pendingEndInput) this.pendingEndInput = !1, this.processStdin?.end();
  }
  spawnAbort(e) {
    if (this.spawnReject) this.spawnReject(e), this.spawnReject = void 0, this.spawnResolve = void 0, 
    this.pendingWrites = [];
  }
  updateEnv(e) {
    if (this.options.env) Object.assign(this.options.env, e); else this.options.env = {
      ...e
    };
  }
  updateResume(e) {
    this.options.resume = e;
  }
  getDefaultExecutable() {
    return Iv() ? "bun" : "node";
  }
  spawnLocalProcess(e) {
    let {command: s, args: n, cwd: r, env: a, signal: d} = e, m = Ks(s, n, {
      cwd: r,
      stdio: [ "pipe", "pipe", "pipe" ],
      signal: d,
      env: a,
      windowsHide: !0
    });
    if (m.pid !== void 0 && this.options.onProcessSpawned) try {
      this.options.onProcessSpawned(m.pid);
    } catch (P) {
      U(`onProcessSpawned threw: ${l(P)}`);
    }
    let h = new Hs("utf8"), S = !1, w = !1, y = !1, k, C = Le(a.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr !== void 0;
    m.stderr.on("data", P => {
      if (y) return;
      let I = h.write(P);
      if (this.stderrTail += I, this.stderrTail.length > 2 * et) this.stderrTail = Ql(GZ(this.stderrTail), et);
      if (C) U(I), this.options.stderr?.(I);
    }), m.stderr.on("error", P => {
      U(`[ProcessTransport] stderr read failed: ${P.code ?? P.message}`);
    });
    let T = () => {
      if (y) return;
      if (y = !0, k) clearTimeout(k);
      m.emit(Nt, m.exitCode, m.signalCode);
      let P = m.stderr;
      if (Ys(P)) P.unref(); else P.destroy();
    };
    return m.stderr.once("close", () => {
      if (this.stderrTail += h.end(), S = !0, w) T();
    }), m.once("exit", () => {
      if (w = !0, this.ready = !1, S) T(); else k = setTimeout(T, Gs);
    }), {
      stdin: m.stdin,
      stdout: m.stdout,
      get killed() {
        return m.killed;
      },
      get exitCode() {
        return m.exitCode;
      },
      get signalCode() {
        return m.signalCode;
      },
      kill: m.kill.bind(m),
      on: (P, I) => m.on(tt(P), I),
      once: (P, I) => m.once(tt(P), I),
      off: (P, I) => m.off(tt(P), I)
    };
  }
  initialize() {
    try {
      let {additionalDirectories: e = [], projectConfigRoot: s, agent: n, betas: r, cwd: a, executable: d = this.getDefaultExecutable(), executableArgs: m = [], extraArgs: h = {}, pathToClaudeCodeExecutable: S, env: w = {
        ...process.env
      }, thinkingConfig: y, maxTurns: k, maxBudgetUsd: C, taskBudget: T, model: v, fallbackModel: P, jsonSchema: I, permissionMode: H, allowDangerouslySkipPermissions: z, permissionPromptToolName: X, permissionPrompts: G, continueConversation: Ne, resume: ee, settingSources: ae, skills: le, disallowedTools: _e = [], tools: de, mcpServers: ce, strictMcpConfig: $e, canUseTool: Z, includePartialMessages: Ke, plugins: ue, pluginsViaInitialize: ve, sandbox: Be} = this.options, {allowedTools: V = []} = this.options;
      if (le !== void 0) {
        let R = le === "all" ? [ "Skill" ] : le.map(L => `Skill(${Qs(L)})`), N = new Set(V);
        V = [ ...V, ...R.filter(L => !N.has(L)) ];
      }
      let b = [ "--output-format", "stream-json", "--verbose", "--input-format", "stream-json" ];
      if (y) {
        switch (y.type) {
         case "enabled":
          if (y.budgetTokens === void 0) b.push("--thinking=adaptive"); else b.push(Ok("--max-thinking-tokens", y.budgetTokens));
          break;

         case "disabled":
          b.push("--thinking=disabled");
          break;

         case "adaptive":
          b.push("--thinking=adaptive");
          break;
        }
        if (y.type !== "disabled" && y.display) b.push(Ok("--thinking-display", y.display));
      }
      if (this.options.effort) b.push(Ok("--effort", this.options.effort));
      if (k) b.push(Ok("--max-turns", k));
      if (C !== void 0) b.push(Ok("--max-budget-usd", C));
      if (T) b.push(Ok("--task-budget", T.total));
      if (v) b.push(Ok("--model", v));
      if (n) b.push(Ok("--agent", n));
      if (r && r.length > 0) b.push(Ok("--betas", r.join(",")));
      if (I) b.push(Ok("--json-schema", _(I)));
      if (this.options.debugFile) b.push(Ok("--debug-file", this.options.debugFile)); else if (this.options.debug) b.push("--debug");
      if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
        let R = Ot();
        if (R) b.push(Ok("--debug-file", R));
      }
      if (Z) {
        if (X) throw Error("canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.");
        b.push("--permission-prompt-tool=stdio");
      } else if (X) b.push(Ok("--permission-prompt-tool", X));
      if (G) b.push(Ok("--permission-prompts", G));
      if (Ne) b.push("--continue");
      if (ee) b.push(Ok("--resume", ee));
      if (V.length > 0) b.push(Ok("--allowedTools", V.join(",")));
      if (_e.length > 0) b.push(Ok("--disallowedTools", _e.join(",")));
      if (de !== void 0) if (Array.isArray(de)) b.push(Ok("--tools", de.join(","))); else b.push("--tools=default");
      if (ce && Object.keys(ce).length > 0) b.push(...SXn("--mcp-config", _({
        mcpServers: ce
      })));
      if (ae !== void 0) b.push(Ok("--setting-sources", ae.join(",")));
      if ($e) b.push("--strict-mcp-config");
      if (H) b.push(Ok("--permission-mode", H));
      if (z) b.push("--allow-dangerously-skip-permissions");
      if (P) {
        if (v && P === v) throw Error("Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.");
        b.push(Ok("--fallback-model", P));
      }
      if (this.options.includeHookEvents) b.push("--include-hook-events");
      if (Ke) b.push("--include-partial-messages");
      if (this.options.sessionMirror) b.push("--session-mirror");
      if (s !== void 0) b.push(Ok("--project-config-root", s));
      for (let R of e) b.push(Ok("--add-dir", R));
      if (ve) b.push("--await-initialize"); else if (ue && ue.length > 0) for (let R of ue) if (R.type === "local") b.push(R.skipMcpDiscovery ? Ok("--plugin-dir-no-mcp", R.path) : Ok("--plugin-dir", R.path)); else throw Error(`Unsupported plugin type: ${R.type}`);
      if (this.options.forkSession) b.push("--fork-session");
      if (this.options.resumeSessionAt) b.push(Ok("--resume-session-at", this.options.resumeSessionAt));
      if (this.options.resumeDropsTurn !== void 0) b.push(Ok("--resume-drops-turn", this.options.resumeDropsTurn));
      if (this.options.sessionId) b.push(Ok("--session-id", this.options.sessionId));
      if (this.options.persistSession === !1) b.push("--no-session-persistence");
      if (this.options.managedSettings) b.push(...SXn("--managed-settings", this.options.managedSettings));
      let Ce = {
        ...h ?? {}
      };
      if (this.options.settings) Ce.settings = this.options.settings;
      let Te = Ut(Ce, Be);
      for (let [R, N] of Object.entries(Te)) if (N === null) b.push(`--${R}`); else Tjt(b, R, N);
      if (!w.CLAUDE_CODE_ENTRYPOINT) w.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if (delete w.NODE_OPTIONS, Le(w.DEBUG_CLAUDE_AGENT_SDK)) w.DEBUG = "1"; else delete w.DEBUG;
      let pe = Vs(S), fe = pe ? S : d, me = pe ? [ ...m, ...b ] : [ ...m, S, ...b ], ge = {
        command: fe,
        args: me,
        cwd: a,
        env: w,
        signal: this.forwardedAbort.signal
      };
      if (this.options.spawnClaudeCodeProcess) U(`Spawning Claude Code (custom): ${fe} ${me.join(" ")}`), 
      this.process = this.options.spawnClaudeCodeProcess(ge); else U(`Spawning Claude Code: ${fe} ${me.join(" ")}`), 
      this.process = this.spawnLocalProcess(ge);
      if (this.processStdin = this.process.stdin, this.processStdout = this.process.stdout, 
      this.processStdin.on("error", R => {
        U(`[ProcessTransport] stdin write failed (child likely exited): ${R.code ?? R.message}`), 
        this.ready = !1;
      }), xe.track(this.process), this.abortHandler = () => this.close(), this.abortController.signal.addEventListener("abort", this.abortHandler), 
      this.abortController.signal.aborted) this.close();
      let te = this.process;
      te.on("error", R => {
        this.ready = !1;
        let N = R, L = N.syscall !== void 0 ? N.syscall.startsWith("spawn") : jt(R);
        if (L && !te.killed) xe.untrack(te);
        if (this.abortController.signal.aborted) this.exitError = Oe(), n2(R, {
          telemetryMessage: "Claude Code process aborted by user",
          errorClass: "aborted"
        }); else if (L && jt(R)) {
          let {message: se, telemetryMessage: qe, errorClass: Re} = Xs(S, pe), q = {
            telemetryMessage: `${qe}${st(R)}`,
            errorClass: Re,
            code: zr(R)
          };
          this.exitError = n2(ReferenceError(se), q), n2(R, q), U(this.exitError.message);
        } else {
          let se = {
            telemetryMessage: L ? `Failed to spawn Claude Code process${st(R)}` : `Claude Code process error${st(R)}`,
            errorClass: L ? "spawn_failed" : "process_error",
            code: zr(R)
          };
          this.exitError = n2(Error(`Failed to spawn Claude Code process: ${GZ(R.message)}`), se), 
          n2(R, se), U(this.exitError.message);
        }
      }), te.on("exit", (R, N) => {
        if (this.exitEventDelivered = !0, this.ready = !1, this.abortController.signal.aborted) this.exitError = Oe(); else {
          let L = this.getProcessExitError(R, N);
          if (L) this.exitError = L, U(L.message);
        }
      }), this.ready = !this.abortController.signal.aborted;
    } catch (e) {
      throw this.ready = !1, e;
    }
  }
  getProcessExitError(e, s) {
    if (e !== 0 && e !== null) {
      let n = Number.isInteger(e) ? e : void 0;
      return n2(Error(`Claude Code process exited with code ${e}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process exited with code ${n ?? "unknown"}`,
        errorClass: "process_exited_nonzero",
        exitCode: n
      });
    } else if (s) {
      let n = /^SIG[A-Z0-9]{1,8}$/.test(s) ? s : "unknown";
      return n2(Error(`Claude Code process terminated by signal ${s}${this.formatStderrTail()}`), {
        telemetryMessage: `Claude Code process terminated by signal ${n}`,
        errorClass: "process_killed_by_signal",
        signal: n
      });
    }
    return;
  }
  formatStderrTail() {
    let e = Ql(GZ(this.stderrTail), et).trim();
    return e ? `. stderr: ${e}` : "";
  }
  write(e) {
    if (this.abortController.signal.aborted) throw Lt();
    if (this.spawnResolve) {
      this.pendingWrites.push(e);
      return;
    }
    if (!this.ready || !this.processStdin) throw Error("ProcessTransport is not ready for writing");
    if (this.processStdin.writableEnded) {
      U("[ProcessTransport] Dropping write to ended stdin stream");
      return;
    }
    if (this.process?.killed || this.process?.exitCode !== null) throw Error("Cannot write to terminated process");
    if (this.exitError) throw n2(Error(`Cannot write to process that exited with error: ${this.exitError.message}`), {
      telemetryMessage: `Cannot write to process that exited with error: ${vq(this.exitError) ?? "untagged exit error"}`,
      errorClass: Ft(this.exitError, "errorClass"),
      code: zr(this.exitError),
      exitCode: Js(this.exitError),
      signal: Ft(this.exitError, "signal")
    });
    U(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
    try {
      if (!this.processStdin.write(e)) U("[ProcessTransport] Write buffer full, data queued");
    } catch (s) {
      throw this.ready = !1, Error(`Failed to write to process stdin: ${l(s)}`);
    }
  }
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (this.spawnAbort(this.abortController.signal.aborted ? Oe() : Error("Query closed before spawn")), 
    this.processStdin) this.processStdin.end(), this.processStdin = void 0;
    if (this.abortHandler) this.abortController.signal.removeEventListener("abort", this.abortHandler), 
    this.abortHandler = void 0;
    let e = this.process?.exitCode ?? null, s = this.process?.signalCode ?? null, n = !this.exitEventDelivered && (e !== null && e >= 0 || s !== null), r;
    if (n) {
      if (this.exitEventDelivered = !0, r = this.abortController.signal.aborted ? Oe() : this.getProcessExitError(e, s), 
      r && !this.exitError) this.exitError = r;
    }
    let a = this.exitListeners;
    this.exitListeners = [];
    for (let {callback: h, handler: S} of a) if (this.process?.off("exit", S), n) try {
      h(r);
    } catch (w) {
      U(`[ProcessTransport] onExit callback threw during close(): ${l(w)}`);
    }
    let d = () => {
      if (this.abortController.signal.aborted) this.forwardedAbort.abort(this.abortController.signal.reason);
    }, m = this.process;
    if (m && !m.killed && m.exitCode === null && m.signalCode == null) setTimeout((h, S) => {
      if (h.exitCode !== null || h.signalCode != null) {
        S();
        return;
      }
      h.kill("SIGTERM"), setTimeout(w => {
        if (w.exitCode === null) w.kill("SIGKILL");
      }, 5e3, h).unref(), S();
    }, zs, m, d).unref(), m.once("exit", () => xe.untrack(m)); else if (m) xe.untrack(m), 
    d();
    this.ready = !1;
  }
  isReady() {
    return this.ready;
  }
  async* readMessages() {
    if (this.spawnPromise) await this.spawnPromise, this.spawnPromise = void 0;
    if (!this.processStdout) throw Error("ProcessTransport output stream not available");
    if (this.exitError) throw this.exitError;
    let e = qs({
      input: this.processStdout
    }), s = this.process ? (() => {
      let n = this.process, r = () => e.close();
      return n.on("error", r), () => n.off("error", r);
    })() : void 0;
    if (this.exitError) e.close();
    try {
      for await (let n of e) if (n.trim()) {
        let r;
        try {
          r = Y(n);
        } catch (a) {
          U(`Non-JSON stdout: ${n}`);
          continue;
        }
        yield r;
      }
      if (this.exitError) throw this.exitError;
      await this.waitForExit();
    } finally {
      s?.(), e.close();
    }
  }
  endInput() {
    if (this.spawnResolve) {
      this.pendingEndInput = !0;
      return;
    }
    if (this.processStdin) this.processStdin.end();
  }
  onExit(e) {
    if (!this.process) return () => {};
    let s = (n, r) => {
      let a = this.getProcessExitError(n, r);
      e(a);
    };
    return this.process.on("exit", s), this.exitListeners.push({
      callback: e,
      handler: s
    }), () => {
      if (this.process) this.process.off("exit", s);
      let n = this.exitListeners.findIndex(r => r.handler === s);
      if (n !== -1) this.exitListeners.splice(n, 1);
    };
  }
  async waitForExit() {
    if (this.exitError) throw this.exitError;
    if (!this.process || this.process.exitCode === 0 || this.process.killed && this.exitEventDelivered) return;
    return new Promise((e, s) => {
      let n = (a, d) => {
        if (this.abortController.signal.aborted) {
          s(Lt());
          return;
        }
        let m = this.getProcessExitError(a, d);
        if (m) s(m); else e();
      };
      this.process.once("exit", n);
      let r = a => {
        this.process.off("exit", n), s(a);
      };
      this.process.once("error", r), this.process.once("exit", () => {
        this.process.off("error", r);
      });
    });
  }
}

function Vs(e) {
  return ![ ".js", ".mjs", ".tsx", ".ts", ".jsx" ].some(n => e.endsWith(n));
}

function Xs(e, s) {
  let n = s ? "native binary" : "executable", r = GZ(e);
  if (Bs(e)) return {
    message: s ? `Claude Code native binary at ${r} exists but failed to launch. This usually means the binary does not match this system's libc \u2014 e.g. spawning a musl-linked binary on a glibc Linux host fails because the musl dynamic loader (/lib/ld-musl-*) is missing. Specify a matching binary with options.pathToClaudeCodeExecutable.` : `Claude Code executable at ${r} exists but failed to launch.`,
    telemetryMessage: `Claude Code ${n} exists at the configured path but failed to launch`,
    errorClass: "executable_launch_failed"
  };
  return {
    message: s ? `Claude Code native binary not found at ${r}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.` : `Claude Code executable not found at ${r}. Is options.pathToClaudeCodeExecutable set?`,
    telemetryMessage: `Claude Code ${n} not found at the configured path`,
    errorClass: "executable_not_found"
  };
}

function st(e) {
  let s = zr(e);
  return s === void 0 ? "" : ` (${s})`;
}

function Oe() {
  return n2(new v9e("Claude Code process aborted by user"), {
    telemetryMessage: "Claude Code process aborted by user",
    errorClass: "aborted"
  });
}

function Lt() {
  return n2(new v9e("Operation aborted"), {
    telemetryMessage: "Operation aborted",
    errorClass: "aborted"
  });
}

function Ft(e, s) {
  let n = Object.hasOwn(e, s) ? Reflect.get(e, s) : void 0;
  return typeof n === "string" ? n : void 0;
}

function Js(e) {
  let s = Object.hasOwn(e, "exitCode") ? Reflect.get(e, "exitCode") : void 0;
  return typeof s === "number" ? s : void 0;
}

function Ys(e) {
  return typeof Reflect.get(e, "unref") === "function";
}

import { existsSync as Zs } from "fs";

var re = "@anthropic-ai/claude-agent-sdk";

function en() {
  let e = typeof process.report?.getReport === "function" ? process.report.getReport() : null;
  return e != null && e.header?.glibcVersionRuntime === void 0;
}

function Kt(e, s = {}) {
  let n = s.platform ?? "linux", r = s.arch ?? "x64", a = s.exists ?? Zs, d = s.preferMusl ?? en(), m = process.env.SDK_NATIVE_BIN ?? "claude", h = n === "win32" ? ".exe" : "", w = (n === "android" ? [ `${re}-linux-${r}-android` ] : n === "linux" ? d ? [ `${re}-linux-${r}-musl`, `${re}-linux-${r}` ] : [ `${re}-linux-${r}`, `${re}-linux-${r}-musl` ] : [ `${re}-${n}-${r}` ]).map(y => `${y}/${m}${h}`);
  for (let y of w) try {
    let k = e(y);
    if (a(k)) return k;
  } catch {}
  return null;
}

var Bt = 250, Ae = "sdk-manifest-capture:", ie = Symbol("suppressControlResponse");

class Ue {
  transport;
  isSingleUserTurn;
  canUseTool;
  hooks;
  abortController;
  jsonSchema;
  initConfig;
  onElicitation;
  getOAuthToken;
  getHostAuthToken;
  onUserDialog;
  verbatimPrompts;
  runEndCeilingMs;
  pendingControlResponses=new Map;
  unmatchedControlResponses=new Map;
  static UNMATCHED_CONTROL_RESPONSES_MAX=1024;
  cleanupPerformed=!1;
  cleanupCause;
  sdkMessages;
  inputStream=new QE;
  initialization;
  cancelControllers=new Map;
  hookCallbacks=new Map;
  nextCallbackId=0;
  initHooksPayload;
  sdkMcpServers=new Map;
  initializeWritten;
  initializeHasBeenWritten=!1;
  markInitializeWritten;
  writingFirstInitialize=!1;
  stopSdkMcpManifestCapture;
  sdkMcpToolsChangedDuringCapture=new Set;
  pendingMcpResponses=new Map;
  runEndedResolve;
  runEnded=!1;
  resultReceived=!1;
  runEndCeilingTimer;
  sessionState;
  lastErrorResultText;
  errorTextBeforeModelLessTurns;
  modelLessTurnEnded=!1;
  latestCommands;
  transcriptMirrorBatcher;
  cleanupCallbacks=[];
  cleanupPromise;
  setIsSingleUserTurn(e) {
    this.isSingleUserTurn = e;
  }
  setTranscriptMirrorBatcher(e) {
    this.transcriptMirrorBatcher = e;
  }
  reportMirrorError(e, s) {
    let n = {
      type: "system",
      subtype: "mirror_error",
      error: s,
      key: e,
      uuid: hEe(),
      session_id: e.sessionId
    };
    this.inputStream.enqueue(n);
  }
  addCleanupCallback(e) {
    if (this.cleanupPerformed) e(); else this.cleanupCallbacks.push(e);
  }
  isClosed() {
    return this.cleanupPerformed;
  }
  hasBidirectionalNeeds() {
    return this.sdkMcpServers.size > 0 || this.hooks !== void 0 && Object.keys(this.hooks).length > 0 || this.canUseTool !== void 0 || this.onElicitation !== void 0 || this.onUserDialog !== void 0 || this.getOAuthToken !== void 0 || this.getHostAuthToken !== void 0 || this.workSecretAnswerer !== void 0;
  }
  remoteControlCallGeneration=0;
  uiHost;
  workSecretAnswerer;
  constructor(e, s, n, r, a, d = new Map, m, h, S, w, y, k, C = !1, T = rRt) {
    this.transport = e;
    this.isSingleUserTurn = s;
    this.canUseTool = n;
    this.hooks = r;
    this.abortController = a;
    this.jsonSchema = m;
    this.initConfig = h;
    this.onElicitation = S;
    this.getOAuthToken = w;
    this.getHostAuthToken = y;
    this.onUserDialog = k;
    this.verbatimPrompts = C;
    this.runEndCeilingMs = T;
    for (let [v, P] of d) this.connectSdkMcpServer(v, P);
    this.sdkMessages = this.readSdkMessages(), this.readMessages(), this.initializeWritten = new Promise(v => {
      this.markInitializeWritten = () => {
        this.initializeHasBeenWritten = !0, v();
      };
    }), this.initialization = this.initialize({
      first: !0
    }), this.initialization.catch(() => {});
  }
  setError(e) {
    this.inputStream.error(e);
  }
  async stopTask(e) {
    await this.request({
      subtype: "stop_task",
      task_id: e
    });
  }
  async backgroundTasks(e) {
    return (await this.request({
      subtype: "background_tasks",
      tool_use_id: e
    })).response.backgrounded ?? !0;
  }
  close() {
    this.cleanup();
  }
  cleanup(e) {
    if (this.clearRunEndCeiling(), this.cleanupPromise) return this.cleanupPromise;
    return this.cleanupPerformed = !0, this.cleanupCause = e, this.stopSdkMcpManifestCapture?.(), 
    this.cleanupPromise = this.performCleanup(e), this.cleanupPromise;
  }
  async performCleanup(e) {
    for (let s of this.cleanupCallbacks) try {
      s();
    } catch {}
    if (this.cleanupCallbacks = [], this.transcriptMirrorBatcher) try {
      await this.transcriptMirrorBatcher.flush();
    } catch {}
    try {
      for (let s of this.cancelControllers.values()) s.abort();
      this.cancelControllers.clear(), this.transport.close();
    } catch (s) {
      t(`[Query.cleanup] transport.close() failed: ${l(s)}`, {
        level: "error"
      });
    }
    try {
      let s = e ?? rt();
      for (let {reject: n} of this.pendingControlResponses.values()) n(s);
      this.pendingControlResponses.clear(), this.unmatchedControlResponses.clear();
      for (let {reject: n} of this.pendingMcpResponses.values()) n(s);
      this.pendingMcpResponses.clear(), this.hookCallbacks.clear();
      for (let {transport: n} of this.sdkMcpServers.values()) n.close().catch(() => {});
      if (this.sdkMcpServers.clear(), e) this.inputStream.error(e); else this.inputStream.done();
    } catch (s) {}
    if (this.transport.waitForExit) {
      let s = new AbortController;
      try {
        await Promise.race([ this.transport.waitForExit(), J(2e3, s.signal) ]);
      } catch {} finally {
        s.abort();
      }
    }
  }
  next(...[e]) {
    return this.sdkMessages.next(...[ e ]);
  }
  async return(e) {
    return await this.cleanup(), this.sdkMessages.return(e);
  }
  async throw(e) {
    return await this.cleanup(), this.sdkMessages.throw(e);
  }
  [Symbol.asyncIterator]() {
    return this.sdkMessages;
  }
  async [Symbol.asyncDispose]() {
    await this.cleanup();
  }
  async readMessages() {
    try {
      for await (let e of this.transport.readMessages()) {
        if (e.type === "control_response") {
          let s = this.pendingControlResponses.get(e.response.request_id);
          if (s) s.handler(e.response); else {
            if (this.unmatchedControlResponses.size >= Ue.UNMATCHED_CONTROL_RESPONSES_MAX) {
              let n = this.unmatchedControlResponses.keys().next().value;
              if (n !== void 0) this.unmatchedControlResponses.delete(n);
            }
            this.unmatchedControlResponses.set(e.response.request_id, e.response);
          }
          continue;
        } else if (e.type === "control_request") {
          this.handleControlRequest(e);
          continue;
        } else if (e.type === "control_cancel_request") {
          this.handleControlCancelRequest(e);
          continue;
        } else if (e.type === "keep_alive") continue; else if (e.type === "transcript_mirror") {
          this.transcriptMirrorBatcher?.enqueue(e.filePath, e.entries);
          continue;
        }
        if (e.type === "system" && e.subtype === "commands_changed" && Array.isArray(e.commands)) this.latestCommands = e.commands;
        if (e.type === "system" && (e.subtype === "post_turn_summary" || e.subtype === "task_summary" || e.subtype === "session_metadata")) {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "active_goal") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "autocompact_state") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "result") {
          if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
          let s = e.is_error ? e.subtype === "success" ? e.result : e.errors.map(n => n.trim()).filter(Boolean).join("; ") : void 0;
          if (this.lastErrorResultText = s || void 0, this.modelLessTurnEnded = e.subtype === "success" && !e.is_error && e.num_turns === 0 && e.result === "", 
          !this.modelLessTurnEnded) this.errorTextBeforeModelLessTurns = this.lastErrorResultText;
          if (this.resultReceived = !0, this.sessionState === void 0 || this.sessionState === "idle" || !this.hasBidirectionalNeeds()) this.endRun(); else this.armRunEndCeiling();
        } else if (e.type === "system" && e.subtype === "session_state_changed") {
          if (this.sessionState = e.state, e.state === "idle") {
            if (this.resultReceived) this.endRun();
          } else if (!(this.isSingleUserTurn && this.runEnded)) {
            if (this.runEnded = !1, e.state === "requires_action") this.clearRunEndCeiling(); else if (this.resultReceived) this.armRunEndCeiling();
          }
          if ("sdk_host_only" in e && e.sdk_host_only === !0) continue;
        } else {
          if (this.lastErrorResultText = void 0, e.type === "system" && e.subtype === "init") this.modelLessTurnEnded = !1; else if (e.type !== "system" || e.subtype === "compact_boundary") this.errorTextBeforeModelLessTurns = void 0, 
          this.modelLessTurnEnded = !1;
          if ((e.type === "assistant" || e.type === "stream_event") && e.parent_tool_use_id === null && !(this.isSingleUserTurn && this.runEnded)) this.runEnded = !1, 
          this.clearRunEndCeiling();
        }
        this.inputStream.enqueue(e);
      }
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      this.inputStream.done(), this.cleanup();
    } catch (e) {
      if (this.transcriptMirrorBatcher) await this.transcriptMirrorBatcher.flush();
      let s = this.lastErrorResultText ?? (this.modelLessTurnEnded ? this.errorTextBeforeModelLessTurns : void 0);
      if (s !== void 0 && !(e instanceof v9e) && e?.name !== "SSEHttpError") {
        let n = n2(Error(`Claude Code returned an error result: ${s}`), {
          telemetryMessage: "Claude Code returned an error result",
          errorClass: "error_result"
        });
        t(`[Query.readMessages] Replacing exit error with result text. Original: ${l(e)}`), 
        this.inputStream.error(n), this.cleanup(n);
        return;
      }
      this.inputStream.error(e), this.cleanup(e);
    }
  }
  async handleControlRequest(e) {
    if (this.cleanupPerformed) {
      t(`[Query.handleControlRequest] Request ${e.request_id} (${e.request.subtype}) arrived after close \u2014 skipping`);
      return;
    }
    if (this.cancelControllers.has(e.request_id)) {
      t(`[Query.handleControlRequest] Duplicate delivery of in-flight request ${e.request_id} (${e.request.subtype}) \u2014 skipping`);
      return;
    }
    let s = new AbortController;
    this.cancelControllers.set(e.request_id, s);
    try {
      let n;
      try {
        let r = await this.processControlRequest(e, s.signal);
        if (this.cleanupPerformed) return;
        if (r === ie) return;
        let a = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: e.request_id,
            response: r
          }
        };
        n = _(a) + `\n`;
      } catch (r) {
        if (this.cleanupPerformed) return;
        let a = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: l(r)
          }
        };
        n = _(a) + `\n`;
      }
      try {
        await Promise.resolve(this.transport.write(n));
      } catch (r) {
        t(`[Query.handleControlRequest] Response write failed: ${l(r)}`, {
          level: "error"
        });
      }
    } finally {
      if (this.cancelControllers.get(e.request_id) === s) this.cancelControllers.delete(e.request_id);
    }
  }
  handleControlCancelRequest(e) {
    let s = this.cancelControllers.get(e.request_id);
    if (s) s.abort(), this.cancelControllers.delete(e.request_id);
  }
  async processControlRequest(e, s) {
    if (vye.some(n => n === e.request.subtype)) return t(`[Query.processControlRequest] ${e.request.subtype} ${e.request_id} is for the machine serving this session's tools \u2014 leaving it unanswered`), 
    ie;
    if (e.request.subtype === "can_use_tool") {
      if (!this.canUseTool) throw Error("canUseTool callback is not provided.");
      let n = e.request.computer_folder, r = await this.canUseTool(e.request.tool_name, e.request.input, {
        signal: s,
        suggestions: e.request.permission_suggestions,
        blockedPath: e.request.blocked_path,
        ...e.request.mcp_server && {
          mcpServer: {
            name: e.request.mcp_server.name,
            source: e.request.mcp_server.source
          }
        },
        decisionReason: e.request.decision_reason,
        ...typeof e.request.decision_reason_type === "string" && {
          decisionReasonType: e.request.decision_reason_type
        },
        ...typeof e.request.decision_reason_code === "string" && {
          decisionReasonCode: e.request.decision_reason_code
        },
        title: e.request.title,
        displayName: e.request.display_name,
        description: e.request.description,
        defaultToNo: e.request.default_to_no,
        suppressAlwaysAllowRule: e.request.suppress_always_allow_rule,
        toolUseID: e.request.tool_use_id,
        agentID: e.request.agent_id,
        ...typeof e.request.plugin === "string" && {
          plugin: e.request.plugin
        },
        requestId: e.request_id,
        ...typeof e.request.requires_user_interaction === "boolean" && {
          requiresUserInteraction: e.request.requires_user_interaction
        },
        ...typeof e.request.server_prompt === "string" && {
          serverPrompt: e.request.server_prompt
        },
        ...typeof n === "object" && n !== null && "path" in n && typeof n.path === "string" && "computer_name" in n && typeof n.computer_name === "string" && {
          computerFolder: {
            path: n.path,
            computer_name: n.computer_name
          }
        },
        ...e.request.matched_ask_rule && {
          matchedAskRule: {
            source: e.request.matched_ask_rule.source,
            toolName: e.request.matched_ask_rule.tool_name,
            ...e.request.matched_ask_rule.rule_content !== void 0 && {
              ruleContent: e.request.matched_ask_rule.rule_content
            }
          }
        }
      });
      if (r === null) return ie;
      return {
        ...r,
        toolUseID: e.request.tool_use_id
      };
    } else if (e.request.subtype === "hook_callback") return await this.handleHookCallbacks(e.request.callback_id, e.request.input, e.request.tool_use_id, s); else if (e.request.subtype === "mcp_message") {
      let n = e.request, r = this.sdkMcpServers.get(n.server_name)?.transport;
      if (!r) throw Error(`SDK MCP server not found: ${n.server_name}`);
      if ($bn(n.message)) return {
        mcp_response: await this.handleMcpControlRequest(n.server_name, n, r)
      }; else {
        if (r.onmessage) r.onmessage(n.message);
        return {
          mcp_response: {
            jsonrpc: "2.0",
            result: {},
            id: 0
          }
        };
      }
    } else if (e.request.subtype === "elicitation") {
      let n = e.request;
      if (this.onElicitation) {
        let r = await this.onElicitation({
          serverName: n.mcp_server_name,
          message: n.message,
          mode: n.mode,
          url: n.url,
          elicitationId: n.elicitation_id,
          requestedSchema: n.requested_schema,
          title: n.title,
          displayName: n.display_name,
          description: n.description
        }, {
          signal: s,
          requestId: e.request_id
        });
        if (r === null) return ie;
        return r;
      }
      return {
        action: "decline"
      };
    } else if (e.request.subtype === "request_user_dialog") {
      if (this.onUserDialog) {
        let n = await this.onUserDialog({
          dialogKind: e.request.dialog_kind,
          payload: e.request.payload,
          toolUseID: e.request.tool_use_id
        }, {
          signal: s,
          requestId: e.request_id
        });
        if (n === null) return ie;
        return n;
      }
      return t(`[Query] No onUserDialog handler for request_user_dialog (kind=${e.request.dialog_kind}) \u2014 staying silent so a capable client (or the worker's park deadline) settles it`), 
      i("tengu_request_user_dialog_response_ignored", {
        shape: c("auto_cancel")
      }), ie;
    } else if (e.request.subtype === "oauth_token_refresh") {
      if (!this.getOAuthToken) throw Error("getOAuthToken callback is not provided.");
      let n, r = await this.getOAuthToken({
        signal: s,
        onDecline: a => {
          if (oHs(a)) n = a;
        }
      }) ?? null;
      return r === null && n !== void 0 ? {
        accessToken: r,
        reason: n
      } : {
        accessToken: r
      };
    } else if (e.request.subtype === "host_auth_token_refresh") {
      if (!this.getHostAuthToken) throw Error("getHostAuthToken callback is not provided.");
      let n = await this.getHostAuthToken({
        signal: s
      }) ?? null;
      return typeof n === "string" || n === null ? {
        authToken: n
      } : n;
    } else if (e.request.subtype === "remote_control_work_secret") {
      let n = this.workSecretAnswerer;
      if (!n) throw Error("refreshWorkSecret callback is not provided.");
      if (!qt(n.sessionId, e.request.session_id)) throw Error("remote_control_work_secret names a session this host did not attach.");
      return {
        work_secret: await n.refresh(n.sessionId, {
          signal: s
        }) || null
      };
    }
    if (e.request.subtype === "ui_copy" && this.uiHost?.copy) {
      let {subtype: n, ...r} = e.request;
      return this.uiHost.copy(r, {
        signal: s
      });
    }
    if (e.request.subtype === "ui_prompt_read" && this.uiHost?.promptRead) {
      let {subtype: n, ...r} = e.request;
      return this.uiHost.promptRead(r, {
        signal: s
      });
    }
    if (e.request.subtype === "ui_prompt_fill" && this.uiHost?.promptFill) {
      let {subtype: n, ...r} = e.request;
      return this.uiHost.promptFill(r, {
        signal: s
      });
    }
    if (e.request.subtype === "ui_prompt_suggest" && this.uiHost?.promptSuggest) {
      let {subtype: n, ...r} = e.request;
      return this.uiHost.promptSuggest(r, {
        signal: s
      });
    }
    if (e.request.subtype === "ui_read_selection" && this.uiHost?.readSelection) {
      let {subtype: n, ...r} = e.request;
      return this.uiHost.readSelection(r, {
        signal: s
      });
    }
    throw Error("Unsupported control request subtype: " + e.request.subtype);
  }
  async* readSdkMessages() {
    try {
      for await (let e of this.inputStream) this.transport.markDelivered?.(e), yield e;
    } finally {
      await this.cleanup();
    }
  }
  async initialize({first: e} = {
    first: !1
  }) {
    if (!e && !this.initializeHasBeenWritten) await this.initializeWritten;
    let s, n;
    try {
      if (e && this.initConfig?.captureSdkMcpManifests === !0 && this.sdkMcpServers.size > 0) {
        s = await this.captureSdkMcpServerManifests();
        for (let m of this.sdkMcpToolsChangedDuringCapture) {
          let h = s !== void 0 && Object.hasOwn(s, m) ? s[m] : void 0;
          if (h?.toolsListResult !== void 0) s[m] = {
            initializeResult: h.initializeResult
          };
        }
      }
      this.sdkMcpToolsChangedDuringCapture.clear();
      let d = this.buildInitializeRequest(s);
      if (this.cleanupPerformed) throw this.cleanupCause ?? Error("Query closed before initialize was sent");
      this.writingFirstInitialize = e;
      try {
        n = this.request(d);
      } finally {
        this.writingFirstInitialize = !1;
      }
    } finally {
      if (e) this.markInitializeWritten();
    }
    let a = (await n).response;
    if (this.initConfig?.plugins !== void 0 && this.initConfig.plugins.length > 0 && a.plugins_applied !== !0) t(`[Query.initialize] Claude Code reported plugins_applied=${String(a.plugins_applied)} for ${this.initConfig.plugins.length} plugins sent with pluginDelivery 'initialize'; the process is running with the plugins it was launched with.`, {
      level: "warn"
    });
    return a;
  }
  buildInitializeRequest(e) {
    if (this.hooks && !this.initHooksPayload) {
      this.initHooksPayload = {};
      for (let [d, m] of Object.entries(this.hooks)) if (m.length > 0) this.initHooksPayload[d] = m.map(h => {
        let S = [];
        for (let w of h.hooks) {
          let y = `hook_${this.nextCallbackId++}`;
          this.hookCallbacks.set(y, w), S.push(y);
        }
        return {
          matcher: h.matcher,
          hookCallbackIds: S,
          timeout: h.timeout
        };
      });
    }
    let s = this.sdkMcpServers.size > 0 ? Array.from(this.sdkMcpServers.keys()) : void 0, n = Array.from(this.sdkMcpServers).flatMap(([d, {settings: m}]) => Object.keys(m).length > 0 ? [ [ d, m ] ] : []), r = n.length > 0 ? Object.fromEntries(n) : void 0;
    return {
      subtype: "initialize",
      hooks: this.initHooksPayload,
      sdkMcpServers: s,
      sdkMcpServerConfigs: r,
      sdkMcpServerManifests: e,
      jsonSchema: this.jsonSchema,
      systemPrompt: typeof this.initConfig?.systemPrompt === "string" ? [ this.initConfig.systemPrompt ] : this.initConfig?.systemPrompt,
      appendSystemPrompt: this.initConfig?.appendSystemPrompt,
      planModeInstructions: this.initConfig?.planModeInstructions,
      systemPromptSnapshot: this.initConfig?.systemPromptSnapshot,
      appendSubagentSystemPrompt: this.initConfig?.appendSubagentSystemPrompt,
      toolAliases: this.initConfig?.toolAliases,
      excludeDynamicSections: this.initConfig?.excludeDynamicSections,
      agents: this.initConfig?.agents,
      title: this.initConfig?.title,
      skills: Array.isArray(this.initConfig?.skills) ? this.initConfig.skills : void 0,
      webSearchIsolationExemptMcpServers: this.initConfig?.webSearchIsolationExemptMcpServers,
      promptSuggestions: this.initConfig?.promptSuggestions,
      agentProgressSummaries: this.initConfig?.agentProgressSummaries,
      forwardSubagentText: this.initConfig?.forwardSubagentText,
      supportedDialogKinds: this.initConfig?.supportedDialogKinds,
      perTaskStopAffordance: this.initConfig?.perTaskStopAffordance,
      rapidFollowupPreempt: this.initConfig?.rapidFollowupPreempt,
      forwardNestedSubagentToolCalls: this.initConfig?.forwardNestedSubagentToolCalls,
      workspaceTrust: this.initConfig?.workspaceTrust,
      plugins: this.initConfig?.plugins
    };
  }
  async captureSdkMcpServerManifests() {
    let e = performance.now(), s = new Map, n = !1, r = async (k, C) => {
      try {
        if (await (this.sdkMcpServers.get(k)?.connection), n) return;
        let T = await this.handleMcpControlRequest(k, {
          server_name: k,
          message: {
            jsonrpc: "2.0",
            id: Ae + "initialize",
            method: "initialize",
            params: {
              protocolVersion: tbe,
              capabilities: pet,
              clientInfo: {
                ...fet,
                version: {
                  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.299",
                  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-10-13T21:37:33Z",
                  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
                  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  DD_SOURCEMAP_GROUP: "default"
                }.VERSION ?? "unknown"
              }
            }
          }
        }, C);
        if (n) return;
        if (!("result" in T)) {
          t(`[Query.captureSdkMcpServerManifests] '${k}' answered initialize with an error; leaving it to the CLI: ${_(T)}`, {
            level: "warn"
          });
          return;
        }
        let v = T.result;
        C.onmessage?.({
          jsonrpc: "2.0",
          method: "notifications/initialized"
        });
        let P = v.capabilities, I = typeof P === "object" && P !== null && "tools" in P && P.tools !== void 0 && P.tools !== null, H;
        if (I) {
          let G = await this.handleMcpControlRequest(k, {
            server_name: k,
            message: {
              jsonrpc: "2.0",
              id: Ae + "tools-list",
              method: "tools/list"
            }
          }, C);
          if (n) return;
          if (!("result" in G)) {
            t(`[Query.captureSdkMcpServerManifests] '${k}' answered tools/list with an error; leaving it to the CLI: ${_(G)}`, {
              level: "warn"
            });
            return;
          }
          if (G.result.nextCursor === void 0) H = G.result;
        }
        let X = Y(_(H === void 0 ? {
          initializeResult: v
        } : {
          initializeResult: v,
          toolsListResult: H
        }));
        s.set(k, {
          transport: C,
          manifest: X
        });
      } catch (T) {
        if (!n) t(`[Query.captureSdkMcpServerManifests] '${k}': ${T}; the CLI will handshake it over the control channel`, {
          level: "warn"
        });
      }
    }, a = Array.from(this.sdkMcpServers, ([k, {transport: C}]) => r(k, C)), d = Promise.all(a).then(() => "settled"), m = new Promise(k => {
      this.stopSdkMcpManifestCapture = () => k("closed");
    }), h = await We(Promise.race([ d, m ]), Bt);
    n = !0, this.stopSdkMcpManifestCapture = void 0;
    let S = Math.round(performance.now() - e), w = {
      servers: a.length,
      captured: s.size,
      elapsed_ms: S
    };
    if (h === "closed") {
      f("sdk_mcp_manifest_capture", "closed", w);
      return;
    }
    if (h === void 0) t(`[Query.captureSdkMcpServerManifests] ${s.size}/${a.length} in-process MCP servers captured within ${Bt} ms; the rest will handshake over the control channel`, {
      level: "warn"
    }), f("sdk_mcp_manifest_capture", "deadline", w); else if (s.size < a.length) f("sdk_mcp_manifest_capture", "partial", w); else g("sdk_mcp_manifest_capture", w);
    if (s.size === 0) return;
    let y = Object.fromEntries(Array.from(this.sdkMcpServers).flatMap(([k, C]) => {
      let T = s.get(k);
      return T !== void 0 && T.transport === C.transport ? [ [ k, T.manifest ] ] : [];
    }));
    if (Object.keys(y).length === 0) return;
    return t(`[Query.captureSdkMcpServerManifests] manifests for [${Object.keys(y).join(", ")}] captured in ${S} ms`), 
    y;
  }
  async interrupt(e) {
    return so("sdk_interrupt", async () => {
      let s = await this.request({
        subtype: "interrupt",
        ...e?.cancelQueued === !0 && {
          cancel_queued: !0
        }
      }), n = s.response?.still_queued;
      if (!Array.isArray(n)) return;
      let r = s.response?.cancelled;
      return {
        still_queued: n.filter(a => typeof a === "string"),
        ...Array.isArray(r) && {
          cancelled: r.filter(a => typeof a === "string")
        }
      };
    });
  }
  async setPermissionMode(e) {
    await this.request({
      subtype: "set_permission_mode",
      mode: e
    });
  }
  setUiHost(e) {
    this.uiHost = e;
  }
  async setMcpPermissionModeOverride(e, s) {
    return (await this.request({
      subtype: "set_mcp_permission_mode_override",
      serverName: e,
      mode: s
    })).response ?? {};
  }
  async setChromeBrowserHints(e) {
    await this.request({
      subtype: "set_chrome_browser_hints",
      ...e
    });
  }
  async setPromptSuggestionsPaused(e) {
    await this.request({
      subtype: "set_prompt_suggestions_paused",
      paused: e
    });
  }
  awaitControlResponse(e) {
    return this.transport.expectControlResponse?.(e), new Promise((s, n) => {
      let r = d => {
        if (d.subtype === "success") {
          let {pending_permission_requests: m, pending_user_dialog_requests: h, ...S} = d;
          s(S);
        } else n(new x(d.error, "awaitControlResponse: CLI error verdict"));
        if (d.pending_permission_requests || d.pending_user_dialog_requests) t("[Query] Ignoring prompt-redelivery fields on awaitControlResponse response");
      };
      if (this.cleanupPerformed) {
        n(rt());
        return;
      }
      let a = this.unmatchedControlResponses.get(e);
      if (a) {
        this.unmatchedControlResponses.delete(e), r(a);
        return;
      }
      this.pendingControlResponses.set(e, {
        handler: d => {
          this.pendingControlResponses.delete(e), r(d);
        },
        reject: n
      });
    });
  }
  async setModel(e) {
    await this.request({
      subtype: "set_model",
      model: e
    });
  }
  async setMaxThinkingTokens(e, s) {
    await this.request({
      subtype: "set_max_thinking_tokens",
      max_thinking_tokens: e,
      thinking_display: s
    });
  }
  async applyFlagSettings(e) {
    return so("sdk_apply_flag_settings", async () => {
      await this.request({
        subtype: "apply_flag_settings",
        settings: e
      });
    });
  }
  async getSettings() {
    return (await this.request({
      subtype: "get_settings"
    })).response;
  }
  async getHooksListing() {
    return (await this.request({
      subtype: "get_hooks_listing"
    })).response;
  }
  async getTaskOutput(e) {
    return (await this.request({
      subtype: "get_task_output",
      task_id: e
    })).response;
  }
  async listPermissionRules() {
    return (await this.request({
      subtype: "list_permission_rules"
    })).response;
  }
  async updateSettings(e, s) {
    return so("sdk_update_settings", async () => {
      await this.request({
        subtype: "update_settings",
        source: e,
        settings: s
      });
    });
  }
  async rewindFiles(e, s) {
    return so("sdk_rewind_files", async () => (await this.request({
      subtype: "rewind_files",
      user_message_id: e,
      dry_run: s?.dryRun
    })).response);
  }
  async cancelAsyncMessage(e) {
    return (await this.request({
      subtype: "cancel_async_message",
      message_uuid: e
    })).response.cancelled;
  }
  async seedReadState(e, s) {
    await this.request({
      subtype: "seed_read_state",
      path: e,
      mtime: s
    });
  }
  async setCwd(e, s) {
    return so("sdk_set_cwd", async () => (await this.request({
      subtype: "set_cwd",
      path: e,
      ...s?.trustAccepted !== void 0 && {
        trust_accepted: s.trustAccepted
      },
      ...s?.trustedDirectory !== void 0 && {
        trusted_directory: s.trustedDirectory
      }
    })).response);
  }
  async claimSession(e) {
    let s = so("sdk_claim_session", async () => (await this.request({
      subtype: "claim_session",
      ...e,
      include_initialize: e.include_initialize ?? !0
    })).response), n = this.initialization;
    return this.initialization = s.then(async r => {
      if (r?.initialize === void 0) return n;
      let a = r.initialize, d = await n.then(S => ({
        hooks_applied: S.hooks_applied,
        plugins_applied: S.plugins_applied
      }), () => ({
        hooks_applied: void 0,
        plugins_applied: void 0
      })), m = a.hooks_applied ?? d.hooks_applied, h = a.plugins_applied ?? d.plugins_applied;
      return {
        ...a,
        ...m !== void 0 && {
          hooks_applied: m
        },
        ...h !== void 0 && {
          plugins_applied: h
        }
      };
    }, () => n), this.initialization.catch(() => {}), s;
  }
  async enableRemoteControl(e, s, n) {
    let r = ++this.remoteControlCallGeneration, a = this.workSecretAnswerer, d = n?.reattachSessionId || (n?.workSecret === void 0 ? void 0 : sn(n.workSecret)), m = e && n?.workSecret !== void 0 && n.refreshWorkSecret && d !== void 0 ? {
      sessionId: d,
      refresh: n.refreshWorkSecret
    } : void 0;
    this.workSecretAnswerer = m;
    let h;
    try {
      h = (await this.request({
        subtype: "remote_control",
        enabled: e,
        ...s !== void 0 && {
          name: s
        },
        reattach_session_id: n?.reattachSessionId,
        keep_session_on_exit: n?.keepSessionOnExit,
        work_secret: n?.workSecret
      })).response;
    } catch (S) {
      if (r === this.remoteControlCallGeneration) this.workSecretAnswerer = void 0;
      throw S;
    }
    if (e && r === this.remoteControlCallGeneration) {
      let S = h.bridge_session_id, w = [ m, a ];
      this.workSecretAnswerer = typeof S === "string" ? w.find(y => y !== void 0 && qt(y.sessionId, S)) : void 0;
    }
    return h;
  }
  async submitFeedback(e, s) {
    return (await this.request({
      subtype: "submit_feedback",
      description: e,
      surface: s?.surface,
      draft_id: s?.draft_id,
      type: s?.type,
      title: s?.title,
      area: s?.area,
      attach_transcript: s?.attach_transcript,
      save_locally: s?.save_locally
    })).response;
  }
  async renameSession(e, s) {
    await this.request({
      subtype: "rename_session",
      title: e,
      source: "host",
      session_id: s
    });
  }
  async generateSessionTitle(e, s) {
    return so("sdk_session_title_generate", async () => (await this.request({
      subtype: "generate_session_title",
      description: e,
      persist: s?.persist
    })).response.title);
  }
  async askSideQuestion(e, s) {
    return so("sdk_side_question", async () => {
      let r = (await this.request({
        subtype: "side_question",
        question: e,
        ...s?.history?.length && {
          history: [ ...s.history ]
        }
      }, s)).response;
      return r.response === null ? null : {
        response: r.response,
        synthetic: r.synthetic ?? !1,
        ...r.refusal_fallback && {
          refusalFallback: {
            originalModel: r.refusal_fallback.original_model,
            fallbackModel: r.refusal_fallback.fallback_model,
            content: r.refusal_fallback.content
          }
        }
      };
    }, () => s?.signal?.aborted ? "cancelled" : "error");
  }
  async launchUltrareview(e, s) {
    return (await this.request({
      subtype: "ultrareview_launch",
      args: e,
      confirm: s?.confirm ?? !1
    })).response;
  }
  async messageRated(e) {
    await this.request({
      subtype: "message_rated",
      messageUuid: e.messageUuid,
      sentiment: e.sentiment,
      surface: e.surface,
      cleared: e.cleared ?? !1
    });
  }
  processPendingPermissionRequests(e) {
    for (let s of e) if (s.request.subtype === "can_use_tool") this.handleControlRequest(s).catch(() => {});
  }
  processPendingUserDialogRequests(e) {
    for (let s of e) if (s.request.subtype === "request_user_dialog") this.handleControlRequest(s).catch(() => {});
  }
  request(e, s) {
    let n = s?.signal;
    if (n?.aborted) return Promise.reject(j(n.reason ?? "Control request aborted"));
    if (this.cleanupPerformed) return Promise.reject(rt());
    let r = Math.random().toString(36).substring(2, 15);
    this.transport.expectControlResponse?.(r);
    let a = {
      request_id: r,
      type: "control_request",
      request: e
    }, d = e.subtype === "initialize";
    return new Promise((m, h) => {
      let S, w = !1, y = v => {
        this.pendingControlResponses.delete(r), S?.(), m(v);
      }, k = v => {
        this.pendingControlResponses.delete(r), S?.(), h(v);
      };
      if (n) {
        let v = () => {
          if (k(j(n.reason ?? "Control request aborted")), !w) return;
          try {
            Promise.resolve(this.transport.write(_({
              type: "control_cancel_request",
              request_id: r
            }) + `\n`)).catch(() => {});
          } catch {}
        };
        n.addEventListener("abort", v, {
          once: !0
        }), S = () => {
          n.removeEventListener("abort", v);
        };
      }
      this.pendingControlResponses.set(r, {
        handler: v => {
          if (v.subtype === "success") y(v); else k(n2(Error(v.error), {
            telemetryMessage: `Claude Code control request failed (${e.subtype})`,
            errorClass: "control_request_failed",
            errorCode: typeof v.error_code === "string" && tn.test(v.error_code) ? v.error_code : void 0
          }));
          if (!d && (v.pending_permission_requests || v.pending_user_dialog_requests)) t(`[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${e.subtype})`); else {
            if (v.pending_permission_requests) this.processPendingPermissionRequests(v.pending_permission_requests);
            if (v.pending_user_dialog_requests) this.processPendingUserDialogRequests(v.pending_user_dialog_requests);
          }
        },
        reject: k
      });
      let C = _(a) + `\n`, T = () => {
        if (n?.aborted) return;
        return w = !0, this.transport.write(C);
      };
      try {
        (this.initializeHasBeenWritten || this.writingFirstInitialize ? Promise.resolve(T()) : this.initializeWritten.then(T)).catch(k);
      } catch (v) {
        k(v);
      }
    });
  }
  initializationResult() {
    return this.initialization;
  }
  writeAfterInitialize(e) {
    if (this.initializeHasBeenWritten) return Promise.resolve(this.transport.write(e));
    return this.initializeWritten.then(() => this.transport.write(e));
  }
  reinitialize() {
    return so("sdk_reinitialize", () => this.initialize({
      first: !1
    }));
  }
  async supportedCommands() {
    let {commands: e} = await this.initialization;
    return this.latestCommands ?? e;
  }
  async supportedModels() {
    return (await this.initialization).models;
  }
  async supportedAgents() {
    return (await this.initialization).agents;
  }
  async reconnectMcpServer(e) {
    await this.request({
      subtype: "mcp_reconnect",
      serverName: e
    });
  }
  async toggleMcpServer(e, s) {
    return so("sdk_mcp_toggle_server", async () => {
      await this.request({
        subtype: "mcp_toggle",
        serverName: e,
        enabled: s
      });
    });
  }
  async readMcpResource(e, s) {
    return (await this.request({
      subtype: "mcp_read_resource",
      serverName: e,
      uri: s
    })).response;
  }
  async enableChannel(e) {
    return so("sdk_mcp_enable_channel", async () => {
      await this.request({
        subtype: "channel_enable",
        serverName: e
      });
    });
  }
  async mcpAuthenticate(e, s) {
    return (await this.request({
      subtype: "mcp_authenticate",
      serverName: e,
      redirectUri: s
    })).response;
  }
  async mcpClearAuth(e) {
    return (await this.request({
      subtype: "mcp_clear_auth",
      serverName: e
    })).response;
  }
  async mcpSubmitOAuthCallbackUrl(e, s) {
    return (await this.request({
      subtype: "mcp_oauth_callback_url",
      serverName: e,
      callbackUrl: s
    })).response;
  }
  async claudeAuthenticate(e) {
    return (await this.request({
      subtype: "claude_authenticate",
      loginWithClaudeAi: e
    })).response;
  }
  async claudeOAuthCallback(e, s) {
    return (await this.request({
      subtype: "claude_oauth_callback",
      authorizationCode: e,
      state: s
    })).response;
  }
  async claudeOAuthWaitForCompletion() {
    return (await this.request({
      subtype: "claude_oauth_wait_for_completion"
    })).response;
  }
  async mcpServerStatus() {
    return (await this.request({
      subtype: "mcp_status"
    })).response.mcpServers;
  }
  async getContextUsage(e) {
    return (await this.request({
      subtype: "get_context_usage",
      ...e
    })).response;
  }
  async usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET(e) {
    return (await this.request({
      subtype: "get_usage",
      ...e?.skipBehaviors && {
        skip_behaviors: !0
      }
    })).response;
  }
  async getMemoryDialog() {
    return (await this.request({
      subtype: "get_memory_dialog"
    })).response;
  }
  async getSkillsDialog() {
    return (await this.request({
      subtype: "get_skills_dialog"
    })).response;
  }
  async getStatus() {
    return (await this.request({
      subtype: "get_status"
    })).response;
  }
  async exportConversation() {
    return (await this.request({
      subtype: "export_conversation"
    })).response;
  }
  async getChromeDialog() {
    return (await this.request({
      subtype: "get_chrome_dialog"
    })).response;
  }
  async getChromeBrowsers() {
    return (await this.request({
      subtype: "get_chrome_browsers"
    })).response;
  }
  async selectChromeBrowser(e) {
    return (await this.request({
      subtype: "select_chrome_browser",
      device_id: e
    })).response;
  }
  async getSandboxDialog() {
    return (await this.request({
      subtype: "get_sandbox_dialog"
    })).response;
  }
  async readFile(e, s) {
    try {
      return (await this.request({
        subtype: "read_file",
        path: e,
        max_bytes: s?.maxBytes,
        encoding: s?.encoding
      })).response;
    } catch {
      return null;
    }
  }
  async getPlan() {
    return (await this.request({
      subtype: "get_plan"
    })).response;
  }
  async reloadPlugins(e) {
    return so("sdk_reload_plugins", async () => (await this.request({
      subtype: "reload_plugins",
      ...e?.holdOnCacheImpact && {
        hold_on_cache_impact: !0
      }
    })).response);
  }
  async reloadSkills() {
    return so("sdk_reload_skills", async () => (await this.request({
      subtype: "reload_skills"
    })).response);
  }
  async reloadOutputStyles() {
    return so("sdk_reload_output_styles", async () => (await this.request({
      subtype: "reload_output_styles"
    })).response);
  }
  async setMcpServers(e) {
    return so("sdk_mcp_set_servers", async () => {
      let s = {}, n = {};
      for (let [h, S] of Object.entries(e)) if (S.type === "sdk" && "instance" in S) s[h] = S; else n[h] = S;
      let r = new Set(this.sdkMcpServers.keys()), a = new Set(Object.keys(s));
      for (let h of r) if (!a.has(h)) await this.disconnectSdkMcpServer(h);
      for (let [h, S] of Object.entries(s)) {
        let w = this.sdkMcpServers.get(h);
        if (!w) {
          this.connectSdkMcpServer(h, S);
          continue;
        }
        let {settings: y} = tjt(S);
        if (y.timeout !== w.settings.timeout || y.disableAutoBackground !== w.settings.disableAutoBackground) t(`[Query.setMcpServers] MCP server '${h}' is already registered, so the different timeout or disableAutoBackground passed to setMcpServers is ignored; remove and re-add the server to change it`);
      }
      let d = {};
      for (let h of Object.keys(s)) d[h] = {
        type: "sdk",
        name: h,
        ...this.sdkMcpServers.get(h)?.settings
      };
      return (await this.request({
        subtype: "mcp_set_servers",
        servers: {
          ...n,
          ...d
        }
      })).response;
    });
  }
  async accountInfo() {
    return (await this.initialization).account;
  }
  async streamInput(e) {
    t("[Query.streamInput] Starting to process input stream");
    try {
      if (!this.initializeHasBeenWritten) await this.initializeWritten;
      let s = 0;
      for await (let n of e) {
        if (s++, t(`[Query.streamInput] Processing message ${s}: ${n.type}`), this.abortController?.signal.aborted) break;
        this.runEnded = !1, this.resultReceived = !1, this.clearRunEndCeiling(), await Promise.resolve(this.transport.write(_(this.verbatimPrompts ? {
          ...n,
          client_composed: !0
        } : n) + `\n`));
      }
      if (t(`[Query.streamInput] Finished processing ${s} messages from input stream`), 
      s > 0 && this.hasBidirectionalNeeds()) t("[Query.streamInput] Has bidirectional needs, waiting for the run to end"), 
      await this.waitForRunEnd();
      t("[Query] Calling transport.endInput() to close stdin to CLI process"), this.transport.endInput();
    } catch (s) {
      if (!(s instanceof v9e)) throw s;
    }
  }
  endRun() {
    if (this.runEnded) return;
    if (this.runEnded = !0, this.clearRunEndCeiling(), this.runEndedResolve?.(), this.isSingleUserTurn) t("[Query.readMessages] Run ended for single-turn query, closing stdin"), 
    this.transport.endInput();
  }
  armRunEndCeiling() {
    if (this.clearRunEndCeiling(), this.runEnded || this.cleanupPerformed || this.runEndCeilingMs <= 0) return;
    this.runEndCeilingTimer = setTimeout(() => {
      t(`[Query.readMessages] No 'idle' ${this.runEndCeilingMs}ms after the last result, ending the run`), 
      this.endRun();
    }, Math.min(this.runEndCeilingMs, Pu)), this.runEndCeilingTimer.unref?.();
  }
  clearRunEndCeiling() {
    clearTimeout(this.runEndCeilingTimer), this.runEndCeilingTimer = void 0;
  }
  waitForRunEnd() {
    if (this.runEnded) return t("[Query.waitForRunEnd] Run already ended, returning immediately"), 
    Promise.resolve();
    return new Promise(e => {
      let s = this.abortController?.signal;
      if (this.cleanupPerformed || s?.aborted) {
        e();
        return;
      }
      let n = () => e();
      s?.addEventListener("abort", n, {
        once: !0
      }), this.addCleanupCallback(() => {
        s?.removeEventListener("abort", n), e();
      }), this.runEndedResolve = () => {
        s?.removeEventListener("abort", n), e();
      };
    });
  }
  handleHookCallbacks(e, s, n, r) {
    let a = this.hookCallbacks.get(e);
    if (!a) throw Error(`No hook callback found for ID: ${e}`);
    return a(s, n, {
      signal: r
    });
  }
  connectSdkMcpServer(e, s) {
    let n = new fVr(a => this.sendMcpServerMessageToCli(e, a)), r = s.instance.connect(n).catch(a => {
      if (this.sdkMcpServers.get(e)?.transport === n) this.sdkMcpServers.delete(e);
      t(`[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${a}`, {
        level: "error"
      });
    });
    this.sdkMcpServers.set(e, {
      transport: n,
      settings: tjt(s).settings,
      connection: r
    });
  }
  async disconnectSdkMcpServer(e) {
    let s = this.sdkMcpServers.get(e);
    if (s) {
      let n = `${e}:${Ae}`;
      for (let [r, a] of this.pendingMcpResponses) if (r.startsWith(n)) this.pendingMcpResponses.delete(r), 
      a.reject(Error("MCP server was removed during the manifest capture"));
      if (await s.transport.close(), this.sdkMcpServers.get(e) === s) this.sdkMcpServers.delete(e);
    }
  }
  sendMcpServerMessageToCli(e, s) {
    if ("id" in s && s.id !== null && s.id !== void 0) {
      let r = `${e}:${s.id}`, a = this.pendingMcpResponses.get(r);
      if (a) {
        a.resolve(s), this.pendingMcpResponses.delete(r);
        return;
      }
      if (typeof s.id === "string" && s.id.startsWith(Ae)) {
        t(`[Query.sendMcpServerMessageToCli] Dropping late manifest-capture reply from '${e}' (${s.id})`);
        return;
      }
    }
    let n = {
      type: "control_request",
      request_id: hEe(),
      request: {
        subtype: "mcp_message",
        server_name: e,
        message: s
      }
    };
    if (!this.initializeHasBeenWritten && Agn(s)) this.sdkMcpToolsChangedDuringCapture.add(e);
    this.writeAfterInitialize(_(n) + `\n`).catch(r => {
      t(`[Query.sendMcpServerMessageToCli] Transport write failed: ${r}`, {
        level: "error"
      });
    });
  }
  handleMcpControlRequest(e, s, n) {
    let r = "id" in s.message ? s.message.id : null, a = `${e}:${r}`;
    return new Promise((d, m) => {
      let h = () => {
        this.pendingMcpResponses.delete(a);
      }, S = y => {
        h(), d(y);
      }, w = y => {
        h(), m(y);
      };
      if (this.pendingMcpResponses.set(a, {
        resolve: S,
        reject: w
      }), n.onmessage) n.onmessage(s.message); else {
        h(), m(Error("No message handler registered"));
        return;
      }
    });
  }
}

function rt() {
  return Error("Query closed before response received");
}

var tn = /^[a-z][a-z0-9_]{0,63}$/;

function qt(e, s) {
  if (e === s) return !0;
  let n = e.slice(e.lastIndexOf("_") + 1), r = s.slice(s.lastIndexOf("_") + 1);
  return n.length >= 4 && n === r;
}

function sn(e) {
  try {
    let s = Y(Buffer.from(e, "base64url").toString("utf8"));
    if (typeof s !== "object" || s === null || !("session_ingress_token" in s) || typeof s.session_ingress_token !== "string") return;
    let n = s.session_ingress_token, a = (n.startsWith("sk-ant-si-") ? n.slice(10) : n).split(".");
    if (a.length !== 3 || !a[1]) return;
    let d = Y(Buffer.from(a[1], "base64url").toString("utf8"));
    return typeof d === "object" && d !== null && "session_id" in d && typeof d.session_id === "string" && d.session_id ? d.session_id : void 0;
  } catch {
    return;
  }
}

var je = we(ja(), 1);

import { copyFile as nn, readFile as rn, rm as Gt, writeFile as Wt } from "fs/promises";

import { homedir as zt } from "os";

import { join as it } from "path";

function Qt(e) {
  return {
    globalConfig: it(e || zt(), ".claude.json"),
    userSettings: it(e || it(zt(), ".claude"), "settings.json")
  };
}

function ot(e, s, n, r) {
  return e !== void 0 && s === n ? {
    backend: e,
    key: r
  } : void 0;
}

async function oe(e, s, n, r) {
  if (r) return on(r, e, s, n);
  try {
    if (n) await Wt(s, n(await rn(e)), {
      mode: 384
    }); else await nn(e, s);
  } catch (a) {
    if (E(a) === void 0) throw a;
    if (!W(a)) await Gt(s, {
      force: !0
    }).catch(() => {}), t(`sessionStore resume: skipping ${e} (${E(a)})`);
  }
}

async function on({backend: e, key: s}, n, r, a) {
  let d = await e.read([ s ]);
  if (!d.ok) {
    if (d.error.code === "InvalidArgument") throw new x(`sessionStore resume: invalid v5 key for ${n}: ${d.error.argument}${d.error.reason ? ` (${d.error.reason})` : ""}`, "sessionStore resume: invalid v5 key (InvalidArgument from backend read)");
    t(`sessionStore resume: skipping ${n} (${d.error.code})`);
    return;
  }
  let m = d.value.items[0];
  if (!m?.found) return;
  let h = Buffer.from(m.value);
  try {
    await Wt(r, a ? a(h) : h, {
      mode: 384
    });
  } catch (S) {
    if (E(S) === void 0) throw S;
    if (!W(S)) await Gt(r, {
      force: !0
    }).catch(() => {}), t(`sessionStore resume: skipping ${n} (${E(S)})`);
  }
}

function an(e, s) {
  if (e === "bypassPermissions") return "canUseTool will not be invoked: permissionMode 'bypassPermissions' auto-approves every tool call (except explicit deny rules) before the callback is consulted. To gate every tool call, use a PreToolUse hook instead.";
  let n = s.filter(r => r.length > 0 && !r.includes("("));
  if (n.length === 0) return;
  return `canUseTool will not be invoked for: ${n.join(", ")}. Bare allowedTools entries auto-approve the whole tool before the callback is consulted. To gate every tool call, use a PreToolUse hook; or remove the bare names from allowedTools so they fall through to canUseTool. Allow rules from settings files can also shadow the callback but are not visible here.`;
}

function Vt(e, s, n) {
  if (!e) return;
  let r = an(s, n);
  if (r === void 0) return;
  process.emitWarning(r, {
    code: "CLAUDE_SDK_CAN_USE_TOOL_SHADOWED"
  });
}

import { realpathSync as ln } from "fs";

import { isAbsolute as dn, relative as cn, resolve as un, sep as pn } from "path";

function Xt(e) {
  let s = un(e ?? "."), n;
  try {
    n = ln(s);
  } catch {
    n = s;
  }
  return Ln(n);
}

function ke(e, s) {
  let n = Xt(e);
  if (s === void 0) return PE(n);
  return (s.CLAUDE_CONFIG_DIR ? _$o(s.CLAUDE_CODE_PROJECT_DIR_NAME) : void 0) ?? dM(n);
}

function at(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "agent_metadata";
}

function lt(e, s) {
  let n = cn(s, e), r = n.split(pn);
  if (r[0] === ".." || dn(n)) return null;
  if (r.length < 2) return null;
  let a = r[0], d = r[1];
  if (r.length === 2 && d.endsWith(".jsonl")) return {
    projectKey: a,
    sessionId: d.replace(/\.jsonl$/, "")
  };
  if (r.length >= 4) {
    let m = r.slice(2), h = m.length - 1;
    return m[h] = m.at(-1).replace(/\.jsonl$/, ""), {
      projectKey: a,
      sessionId: d,
      subpath: m.join("/")
    };
  }
  return null;
}

process.env.NoDefaultCurrentDirectoryInExePath = "1";

var En = [ "enabledPlugins", "extraKnownMarketplaces", "additionalMarketplaces" ];

function Yt(e) {
  let s;
  try {
    s = Y(Mo(e.toString("utf8")));
  } catch {
    return e;
  }
  if (!Zt(s)) return e;
  let n = !1;
  for (let a of En) if (Object.hasOwn(s, a)) delete s[a], n = !0;
  let r = s.env;
  if (Zt(r) && Object.hasOwn(r, "CLAUDE_CONFIG_DIR")) delete r.CLAUDE_CONFIG_DIR, 
  n = !0;
  return n ? _(s) : e;
}

function Zt(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}

async function Tn(e, s) {
  if (!e) return;
  let n = e;
  try {
    let r = Y(e);
    if (r?.claudeAiOauth?.refreshToken) delete r.claudeAiOauth.refreshToken, n = _(r);
  } catch {}
  await es(s, n, {
    mode: 384
  });
}

function Rn() {
  return Promise.resolve(void 0);
}

async function Pn(e, s, n, r, a = 6e4, d) {
  if (!fI(s)) return;
  let m = ke(n, r), h = await Ht(e.load({
    projectKey: m,
    sessionId: s
  }), a, `SessionStore.load() timed out after ${a}ms for session ${s}`);
  if (!h || h.length === 0) return;
  let S = O(wn(), `claude-resume-${mn()}`);
  try {
    let w = O(S, "projects", m);
    await dt(w, {
      recursive: !0,
      mode: 448
    });
    let y = O(w, `${s}.jsonl`);
    await uje(y, h);
    let k = r?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR, C = k ?? O(ct(), ".claude"), T;
    try {
      T = await hn(O(C, ".credentials.json"), "utf-8");
    } catch (z) {
      if (!W(z)) throw z;
    }
    if (!k && !(r ?? process.env).ANTHROPIC_API_KEY && !(r ?? process.env).CLAUDE_CODE_OAUTH_TOKEN) T = await Rn() ?? T;
    await Tn(T, O(S, ".credentials.json"));
    let v = Qt(AYn("CLAUDE_CONFIG_DIR")), P = k || ct(), I = O(P, ".claude.json");
    await oe(I, O(S, ".claude.json"), void 0, ot(d, I, v.globalConfig, Fe.globalConfig())), 
    await oe(O(C, ".config.json"), O(S, ".config.json"));
    for (let z of TX) if (z) await oe(O(P, `.claude${z}.json`), O(S, `.claude${z}.json`));
    let H = O(C, "settings.json");
    if (await oe(H, O(S, "settings.json"), Yt, ot(d, H, v.userSettings, Fe.userSettings())), 
    await oe(O(C, "cowork_settings.json"), O(S, "cowork_settings.json"), Yt), e.listSubkeys) await Mn(e, {
      projectKey: m,
      sessionId: s
    }, O(w, s), a);
    return S;
  } catch (w) {
    throw await ns(S), w;
  }
}

async function Mn(e, s, n, r) {
  let a = await Ht(e.listSubkeys({
    projectKey: s.projectKey,
    sessionId: s.sessionId
  }), r, `SessionStore.listSubkeys() timed out after ${r}ms for session ${s.sessionId}`);
  for (let d of a) {
    let m = ut(n, d + ".jsonl");
    if (!d || bn(d) || d.split(/[\\/]/).includes("..") || !m.startsWith(n + _n)) {
      t(`[SessionStore] skipping unsafe subpath from listSubkeys: ${d}`, {
        level: "warn"
      });
      continue;
    }
    let h = await Ht(e.load({
      projectKey: s.projectKey,
      sessionId: s.sessionId,
      subpath: d
    }), r, `SessionStore.load() timed out after ${r}ms for session ${s.sessionId} subpath ${d}`);
    if (!h || h.length === 0) continue;
    let S = [], w = [];
    for (let y of h) if (at(y)) S.push(y); else w.push(y);
    if (w.length > 0) await dt(Jt(m), {
      recursive: !0
    }), await uje(m, w);
    if (S.length > 0) {
      let y = S.at(-1), k = ut(n, d + ".meta.json");
      await dt(Jt(k), {
        recursive: !0
      });
      let {type: C, ...T} = y;
      await es(k, _(T), {
        mode: 384
      });
    }
  }
}

function In(e) {
  let s = e?.accepted === !0 && (typeof e.directory !== "string" || !(kn.isAbsolute(e.directory) || vn.isAbsolute(e.directory))) ? void 0 : e;
  if (e !== void 0 && s === void 0) t("workspaceTrust ignored: accepted requires an absolute directory, as it exists where Claude Code runs", {
    level: "warn"
  });
  return s;
}

function ts(e, s) {
  let {isSingleUserTurn: n, resumeConfigDir: r, deferSpawn: a} = s, {systemPrompt: d, settings: m, managedSettings: h, settingSources: S, sandbox: w, ...y} = e ?? {}, k, C, T, v;
  if (d === void 0) k = ""; else if (typeof d === "string") k = d; else if (Array.isArray(d)) k = d; else if (d.type === "custom") k = d.prompt, 
  v = d.snapshot; else if (d.type === "preset") C = d.append, T = d.excludeDynamicSections, 
  v = d.snapshot;
  process.env.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION ?? "unknown";
  let {abortController: P = dr(), additionalDirectories: I = [], projectConfigRoot: H, agent: z, agents: X, allowedTools: G = [], betas: Ne, canUseTool: ee, continue: ae, cwd: le, debug: _e, debugFile: de, disallowedTools: ce = [], tools: $e, env: Z, executable: Ke = (Iv() ? "bun" : "node"), executableArgs: ue = [], extraArgs: ve = {}, fallbackModel: Be, enableFileCheckpointing: V, toolConfig: b, forkSession: Ce, hooks: Te, includeHookEvents: pe, includePartialMessages: fe, forwardSubagentText: me, verbatimPrompts: ge = !1, onElicitation: te, onUserDialog: R, supportedDialogKinds: N, perTaskStopAffordance: L, rapidFollowupPreempt: se, workspaceTrust: qe, persistSession: Re, sessionStore: q, sessionStoreFlush: rs, thinking: he, effort: is, maxThinkingTokens: He, maxTurns: os, maxBudgetUsd: as, taskBudget: ls, mcpServers: pt, model: ds, outputFormat: ft, permissionMode: cs, allowDangerouslySkipPermissions: us = !1, permissionPromptToolName: ps, permissionPrompts: fs, plugins: Pe, pluginDelivery: ze = "argv", getOAuthToken: mt, getHostAuthToken: gt, workload: ht, resume: St, resumeSessionAt: ms, resumeDropsTurn: gs, sessionId: hs, skills: yt, stderr: Ss, strictMcpConfig: ys} = y, wt = cs;
  if (q && Re === !1) throw Error("sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.");
  if (N !== void 0 && N.length > 0 && !R) throw Error("supportedDialogKinds requires an onUserDialog callback -- declaring dialog kinds without a handler would park dialogs nothing can answer. Provide onUserDialog, or omit supportedDialogKinds.");
  let ws = In(qe);
  if (q && ae && !St && !q.listSessions) throw Error("Options.continue with sessionStore requires store.listSessions to be implemented");
  if (q && V) throw Error("enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).");
  if (q && y.spawnClaudeCodeProcess) t("sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.", {
    level: "warn"
  });
  if (Vt(!!ee, wt ?? "default", G), ze !== "argv" && ze !== "initialize") throw Error("Invalid pluginDelivery. Expected 'argv' or 'initialize'.");
  let bt = ze === "initialize" && Pe !== void 0 && Pe.length > 0, Ge = y.pathToClaudeCodeExecutable;
  if (!Ge) {
    let A = Cn(import.meta.url), F = yn(A), Q = Kt(ne => F.resolve(ne));
    if (!Q) throw Error("Native CLI binary for linux-x64 not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.");
    Ge = Q;
  }
  let kt = ft?.type === "json_schema" ? ft.schema : void 0, M = Z ? {
    ...Z
  } : {
    ...process.env
  };
  if (!M.CLAUDE_CODE_ENTRYPOINT) M.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (!M.CLAUDE_AGENT_SDK_VERSION) M.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION;
  if (V) M.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (!Object.keys(M).some(A => A.toUpperCase() === "CLAUDE_CODE_SDK_READS_SESSION_STATE")) M.CLAUDE_CODE_SDK_READS_SESSION_STATE = "1";
  let Qe = Kc(M.CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS), bs = Number.isFinite(Qe) && Qe >= 0 ? Qe : rRt;
  if (mt) M.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (gt) M.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH = "1";
  if (b?.askUserQuestion?.previewFormat) M.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = b.askUserQuestion.previewFormat;
  for (let [A, F] of [ [ b?.askUserQuestion?.extendedQuestions, "CLAUDE_CODE_QUESTION_EXTENDED" ], [ b?.askUserQuestion?.optionalDescriptions, "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS" ], [ !1, "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES" ] ]) if (A) M[F] = "1"; else if (!Z) {
    for (let Q of Object.keys(M)) if (Q.toUpperCase() === F) delete M[Q];
  }
  let Ve = {};
  if (je.propagation.inject(je.context.active(), Ve), "traceparent" in Ve) {
    for (let A of [ "TRACEPARENT", "TRACESTATE" ]) if (!(A in (Z ?? {}))) delete M[A];
  }
  for (let [A, F] of Object.entries(Ve)) {
    let Q = A.toUpperCase();
    if (!(Q in (Z ?? {}))) M[Q] = F;
  }
  let _t = {}, vt = new Map;
  if (pt) for (let [A, F] of Object.entries(pt)) if (F.type === "sdk" && F.instance) vt.set(A, F); else _t[A] = F;
  let Se;
  if (he) switch (he.type) {
   case "adaptive":
    Se = {
      type: "adaptive",
      display: he.display
    };
    break;

   case "enabled":
    Se = {
      type: "enabled",
      budgetTokens: he.budgetTokens,
      display: he.display
    };
    break;

   case "disabled":
    Se = {
      type: "disabled"
    };
    break;
  } else if (He !== void 0) Se = He === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: He
  };
  if (r) M.CLAUDE_CONFIG_DIR = r;
  let Ct = new nt({
    abortController: P,
    additionalDirectories: I,
    projectConfigRoot: H,
    agent: z,
    betas: Ne,
    cwd: le,
    debug: _e,
    debugFile: de,
    executable: Ke,
    executableArgs: ue,
    extraArgs: ht ? {
      ...ve,
      workload: ht
    } : ve,
    pathToClaudeCodeExecutable: Ge,
    env: M,
    forkSession: Ce,
    stderr: Ss,
    thinkingConfig: Se,
    effort: is,
    maxTurns: os,
    maxBudgetUsd: as,
    taskBudget: ls,
    model: ds,
    fallbackModel: Be,
    jsonSchema: kt,
    permissionMode: wt,
    allowDangerouslySkipPermissions: us,
    permissionPromptToolName: ps,
    permissionPrompts: fs,
    continueConversation: q ? void 0 : ae,
    resume: St,
    resumeSessionAt: ms,
    resumeDropsTurn: gs,
    sessionId: hs,
    settings: typeof m === "object" ? _(m) : m,
    managedSettings: h ? _(h) : void 0,
    settingSources: S,
    skills: yt,
    allowedTools: G,
    disallowedTools: ce,
    tools: $e,
    mcpServers: _t,
    strictMcpConfig: ys,
    canUseTool: !!ee,
    hooks: !!Te,
    includeHookEvents: pe,
    includePartialMessages: fe,
    persistSession: Re,
    sessionMirror: !!q,
    plugins: Pe,
    pluginsViaInitialize: bt,
    sandbox: w,
    spawnClaudeCodeProcess: y.spawnClaudeCodeProcess,
    onProcessSpawned: e?.onProcessSpawned,
    deferSpawn: a
  }), ks = {
    systemPrompt: k,
    appendSystemPrompt: C,
    planModeInstructions: y.planModeInstructions,
    systemPromptSnapshot: v,
    appendSubagentSystemPrompt: y.appendSubagentSystemPrompt,
    toolAliases: y.toolAliases,
    excludeDynamicSections: T,
    agents: X,
    title: y.title,
    skills: yt,
    webSearchIsolationExemptMcpServers: y.webSearchIsolationExemptMcpServers,
    promptSuggestions: y.promptSuggestions,
    agentProgressSummaries: y.agentProgressSummaries,
    forwardSubagentText: me,
    supportedDialogKinds: N,
    perTaskStopAffordance: L,
    rapidFollowupPreempt: se,
    forwardNestedSubagentToolCalls: e?.forwardNestedSubagentToolCalls,
    workspaceTrust: ws,
    plugins: bt ? Pe : void 0,
    captureSdkMcpManifests: !e0r("CLAUDE_AGENT_SDK_DISABLE_MCP_MANIFESTS")
  }, Xe = new Ue(Ct, n, ee, Te, P, vt, kt, ks, te, mt, gt, R, ge, bs);
  if (q) {
    let A = () => O(M.CLAUDE_CONFIG_DIR ?? O(ct(), ".claude"), "projects"), F = rs === "eager", Q = new Ye(async (ne, Je) => {
      let ye = lt(ne, A());
      if (ye) await q.append(ye, Je); else t(`[SessionStore] dropping mirror frame: filePath ${ne} is not under ${A()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`, {
        level: "warn"
      });
    }, {
      onError: (ne, Je) => {
        let ye = lt(ne, A());
        if (ye) Xe.reportMirrorError(ye, Je.message);
      },
      maxPendingEntries: F ? 0 : Me,
      maxPendingBytes: F ? 0 : be
    });
    Xe.setTranscriptMirrorBatcher(Q);
  }
  return {
    queryInstance: Xe,
    transport: Ct,
    abortController: P,
    processEnv: M,
    verbatimPrompts: ge
  };
}

function ss(e, s, n, r) {
  if (typeof s === "string") e.writeAfterInitialize(_({
    type: "user",
    session_id: "",
    message: {
      role: "user",
      content: [ {
        type: "text",
        text: s
      } ]
    },
    parent_tool_use_id: null,
    ...r && {
      client_composed: !0
    }
  }) + `\n`).catch(a => n.abort(a)); else e.streamInput(s).catch(a => n.abort(a));
}

var Dn = new Set([ "EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM" ]);

async function ns(e) {
  for (let s = 0; ;s++) try {
    return await Sn(e, {
      recursive: !0,
      force: !0
    });
  } catch (n) {
    if (s >= 4 || !Dn.has(E(n) ?? "")) return;
    await J((s + 1) * 100);
  }
}

function xn(e, s) {
  e.waitForExit().catch(() => {}).finally(() => ns(s));
}

function On({prompt: e, options: s}) {
  if ((s?.resume || s?.continue) && s?.sessionStore) return An(e, s);
  let {queryInstance: n, abortController: r, verbatimPrompts: a} = ts(s, {
    isSingleUserTurn: typeof e === "string"
  });
  return ss(n, e, r, a), n;
}

function An(e, s) {
  let {queryInstance: n, transport: r, abortController: a, processEnv: d, verbatimPrompts: m} = ts({
    ...s
  }, {
    isSingleUserTurn: typeof e === "string",
    deferSpawn: !0
  }), h = ut(s.cwd ?? "."), S = s.sessionStore, w = s.loadTimeoutMs ?? 6e4, y = s.resume;
  return (async () => {
    if (!y) y = (await Ht(S.listSessions(ke(h, s.env)), w, `SessionStore.listSessions() timed out after ${w}ms`)).slice().sort((T, v) => v.mtime - T.mtime)[0]?.sessionId;
    if (!y) return;
    return Pn(S, y, h, s.env, s.loadTimeoutMs);
  })().then(C => {
    if (C) {
      r.updateResume(y);
      let T = {
        CLAUDE_CONFIG_DIR: C
      };
      r.updateEnv(T), d.CLAUDE_CONFIG_DIR = C, n.addCleanupCallback(() => xn(r, C));
    }
    if (!n.isClosed()) r.spawn();
  }).catch(C => {
    let T = j(C);
    r.spawnAbort(T), n.setError(T);
  }), ss(n, e, a, m), n;
}

export { On as query };
