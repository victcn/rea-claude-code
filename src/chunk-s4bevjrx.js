// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { x, E, ug } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { cl, ET, va, el, cMe, vcn, Cs, kT, hD, Yp, M$ } from "./chunk-ddr690nj.js";

import { To } from "./chunk-vxr6sv7z.js";

import { Ze, Oc, Pp, JU, cg, EEe, oFt, ecn, g6 } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { ya, Bo, $P, FP } from "./chunk-xywp7esx.js";

import { _, Y, ty, SI, Pf, __, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { qOr, z5, cS } from "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import { f } from "./chunk-3ykz5st8.js";

import { li } from "./chunk-zvghq5er.js";

import { IG, ls, Tn } from "./chunk-30n0xq4e.js";

import { mr, Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { lS } from "./chunk-q6wab2jw.js";

import { vG } from "./chunk-r2h53bm2.js";

import { Q8 } from "./chunk-gmq0qwep.js";

import { JBe } from "./chunk-znhtg8e4.js";

import { Ml } from "./chunk-y3nc3daq.js";

import { $t } from "./chunk-g6nh65r0.js";

import { tC } from "./chunk-e5t6ke25.js";

import { Np, yz, PZt, Eg } from "./chunk-7en5gt36.js";

import { jf, AP } from "./chunk-9tdwgnpn.js";

import { Qne, Mp, UB, css, ep } from "./chunk-84yp45y8.js";

import { dT, QSe, ee } from "./chunk-kq1bg4dg.js";

import { imr, Mn } from "./chunk-bkx9v5fh.js";

import { to } from "./chunk-z09tf6qf.js";

import { cTe } from "./chunk-4vvbv4ma.js";

import { q$, Mle, ib } from "./chunk-jtgrm34s.js";

import { x2e } from "./chunk-56c5q77x.js";

import { w1t, x7e } from "./chunk-08epf95w.js";

import { dTe, $L } from "./chunk-dyag3ekh.js";

import { FL } from "./chunk-0xsdje5v.js";

import { ttt, Jer, B2t } from "./chunk-nr71exww.js";

import { utt, bDe, dVt, ptt } from "./chunk-taqh33hd.js";

import { bV } from "./chunk-3cd32ngx.js";

import { Ri } from "./chunk-4b2xazcw.js";

import { Dn } from "./chunk-q0e8j22k.js";

import { Zn, me, yn, Vo, Wd, lr, St, cp, Dd, J2s } from "./chunk-dexzwy8h.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N } from "./chunk-hmqkrrtz.js";

import { yt } from "./chunk-9zhz923g.js";

import { createHash as Ne, randomBytes as ke } from "crypto";

import { constants as V } from "fs";

import { copyFile as we, link as Ae, mkdir as le, readdir as xe, readFile as ye, realpath as W, rm as $e, rmdir as Ce, stat as Se, symlink as be, unlink as I, lstat as C, readlink as ve, open as te } from "fs/promises";

import { basename as X, dirname as U, isAbsolute as ne, join as j, relative as _e, sep as se } from "path";

var C7e = 12e4, QBs = 6e4, TUr = 4e3, We = 250, re = /^[\w-]+$/;

function oe(e) {
  let n = () => [ ...e(), ...[] ], o = r => {
    let s = va(r) ? cMe(r) : null;
    return s === null ? null : vcn(s);
  };
  return me().transform((r, s) => {
    let l = A => (s.addIssue({
      code: Zn.custom,
      message: A
    }), J2s), a, u = () => {
      if (a === void 0) {
        let A = n(), g = A.map(Yp).filter(w => w !== null);
        a = {
          allowed: g,
          anchor: [ ...A, ...g ]
        };
      }
      return a;
    };
    if (hD(r)) return l(`adopt path is remote UNC: ${r}`);
    let m = kT(r);
    if (ET(m) || M$(m) || m !== r && /[. ](?:[\\/]|$)/.test(m)) return l(`adopt path is a Windows device-namespace spelling (\\\\?\\, \\\\.\\ or \\??\\) other than a plain \\\\?\\<drive>:\\ path: ${r}`);
    if (r = m, !ne(r) || cl(r)) return l(`adopt path is not an absolute, dot-free spelling: ${r}`);
    let k = o(r), h = k !== null && k.startsWith("/net/") ? u().anchor.filter(A => o(A) === k) : [];
    if (k !== null && h.length === 0) return l(k.startsWith("/net/") ? `adopt path is on an automount host (or map) none of the allowed roots live on: ${r}` : `adopt path is under the macOS /Network/Servers automount directory, refused regardless of the allowed roots: ${r}`);
    let S = Pf(__, r, h.length > 0 ? {
      anchors: h,
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0
    } : void 0);
    if (S === ty) return l(`adopt path runs through a directory that could not be examined or a symlink chain too long to follow: ${r}`);
    if (S !== void 0) return l(`adopt path traverses symlink/junction to remote UNC: ${S}`);
    let y = Yp(r);
    if (y === null) return l(`adopt path unresolvable: ${r}`);
    let v = u().allowed;
    if (v.length === 0) return l("adopt path roots unresolvable");
    if (!v.some(A => {
      let g = _e(A, y);
      return g === "" || !g.startsWith("..") && !ne(g);
    })) return l(`adopt path outside allowed roots: ${y}`);
    return y;
  });
}

function De() {
  return [ AP() ];
}

function Te(e) {
  return St({
    taskId: me().regex(re),
    pid: yn().int().positive(),
    procStart: me().optional(),
    startTimeTicks: yn().int().optional(),
    command: me().transform(n => UB(n) ?? ""),
    description: me().transform(n => UB(n) ?? ""),
    outputPath: oe(e),
    lastReportedTotalLines: yn().int(),
    toolUseId: Wd().transform(bV).optional(),
    kind: Dd([ "bash", "monitor" ]).optional(),
    agentId: me().regex(re).optional()
  });
}

var je = p(() => Te(De)), ue = 1e5, Ue = p(() => St({
  id: me(),
  cron: me(),
  prompt: me(),
  createdAt: yn(),
  recurring: Vo().optional(),
  agentId: me().optional(),
  kind: cp("loop").optional(),
  scheduledFor: yn().optional(),
  reason: me().transform(e => UB(e)).optional(),
  keepalive: cp(!0).optional()
})), Be = p(() => St({
  taskId: me().regex(re),
  workflowRunId: me().regex(/^wf_[a-z0-9-]{6,}$/),
  scriptPath: me(),
  scriptSha256: me().regex(/^[0-9a-f]{64}$/).optional(),
  argsJson: me().optional(),
  description: me().transform(e => UB(e) ?? ""),
  startTime: yn().optional(),
  withholdScriptFromSdkEvents: Vo().optional(),
  transcriptDir: oe(() => [ Np() ])
})), Ve = p(() => St({
  agentId: me().regex(re),
  agentType: me().optional(),
  description: me().transform(e => UB(e)).optional(),
  toolUseId: Wd().transform(bV).optional(),
  spawnDepth: yn().int().optional(),
  startTime: yn().optional(),
  transcriptPath: oe(() => [ Np() ]).optional(),
  parentAgentId: me().regex(re).optional(),
  forkedSkillName: me().min(1).max(256).optional()
})), ze = p(() => St({
  slug: me().uuid(),
  title: me().min(1).max(256).optional(),
  writtenAtMs: yn().finite().optional(),
  unattendedReplies: yn().int().min(0).max(ptt).optional()
}));

function Pe(e = je()) {
  return St({
    writtenAtMs: yn(),
    origin: Dd([ "background", "exit" ]).optional(),
    shells: lr(e),
    cron: lr(Ue()),
    loopWakeFires: yn().int().nonnegative().optional(),
    agents: lr(Ve()).optional(),
    workflows: lr(Be()).optional(),
    frameLive: lr(ze()).optional(),
    prefill: St({
      text: me(),
      boundaryUuid: me().optional()
    }).optional()
  });
}

var Le = p(() => Pe());

function Re(e) {
  let n = Array.isArray(e) ? e : [ e ];
  return Pe(Te(() => [ AP(), ...n ]));
}

var ae = 67108864;

async function K8n(e, n) {
  let o = await (e.shellCommand?.detach?.());
  if (o === void 0) return null;
  let r = e.shellCommand.taskOutput.path, s = n?.rerootOutputsTo;
  if (s !== void 0) {
    let l = async u => {
      t(`[adopt] dropping shell ${e.id} from the handoff (${u})`, {
        level: "error"
      });
      try {
        await (e.shellCommand?.kill?.());
      } catch {}
      return null;
    }, a = !1;
    try {
      if (Cs(r) || el(r)) throw Error("network-spelled output path");
      let u = Pf(__, r);
      if (u === ty) throw Error("output path has a symlink chain too long to vet");
      if (u !== void 0) throw Error("output path traverses a junction to remote UNC");
      if ((await C(r)).isSymbolicLink()) {
        let y = await ve(r);
        if (Cs(y) || el(y)) throw Error("network-spelled symlink target");
        let v = ne(y) ? y : j(U(r), y);
        if (Cs(v) || el(v)) throw Error("network-spelled symlink hop");
        let T = Pf(__, v);
        if (T === ty) throw Error("symlink target has a symlink chain too long to vet");
        if (T !== void 0) throw Error("symlink target traverses a junction to remote UNC");
        if ((await C(v)).isSymbolicLink()) throw Error("multi-hop symlink chain");
      }
      let k = await W(r), h = await C(k);
      a = !0;
      let S = await W(s).catch(() => s);
      if (!k.startsWith(S + se)) {
        if (!(await Promise.all([ jf(), ...[] ].map(w => W(w).catch(() => null)))).filter(w => w !== null).some(w => k.startsWith(w + se))) return await l("its output resolves outside the task-output tree");
        let T = j(s, "rerooted", `${e.id}.output`), A;
        try {
          A = await cS(T, [ T ], {
            createParents: !0,
            leaf: "replace"
          });
        } catch {
          return await l("reroot directory not trustworthy");
        }
        let g = A.ioPath;
        try {
          if (!h.isFile()) return await l("gate target is not a regular file");
          if (h.nlink !== 1) return await l("gate target has another name");
          let w = await te(k, O() === "windows" ? "r" : V.O_RDONLY | (V.O_NONBLOCK ?? 0) | li);
          try {
            let P = await w.stat();
            if (!P.isFile() || P.nlink !== 1 || P.dev !== h.dev || P.ino !== h.ino) return await l("handle identity mismatch");
            {
              if (await A.recheckBeforeWrite(), await I(g).catch(() => {}), P.size > ae) return await l("over-cap escaping output");
              let G;
              try {
                await A.recheckBeforeWrite(), G = O() === "windows" ? await te(g, "wx") : await z5(g, V.O_WRONLY | V.O_CREAT | V.O_EXCL | V.O_NOFOLLOW, O());
              } catch {
                return await l("reroot destination not creatable");
              }
              try {
                let B = 0, L = Buffer.allocUnsafe(65536);
                while (B < ae) {
                  let {bytesRead: M} = await w.read(L, 0, Math.min(L.length, ae - B), B);
                  if (M === 0) break;
                  let F = 0;
                  while (F < M) {
                    let {bytesWritten: H} = await G.write(L, F, M - F);
                    F += H;
                  }
                  B += M;
                }
              } finally {
                await G.close();
              }
              r = T;
            }
          } finally {
            await w.close();
          }
        } finally {
          await A.close();
        }
      }
    } catch {
      if (a) return await l("reroot failed after the gate");
    }
  }
  return {
    taskId: e.id,
    pid: o,
    procStart: await JBe(o),
    startTimeTicks: await w1t(o) ?? void 0,
    command: e.command,
    description: e.description,
    outputPath: r,
    lastReportedTotalLines: e.lastReportedTotalLines,
    toolUseId: e.toolUseId,
    kind: e.kind,
    agentId: e.agentId
  };
}

async function q8n(e, n = {}) {
  let o = n.derivedTranscriptPath ?? Eg(To(e.agentId));
  return {
    agentId: e.agentId,
    agentType: e.agentType,
    description: e.description,
    toolUseId: e.toolUseId,
    spawnDepth: e.spawnDepth,
    startTime: e.startTime,
    transcriptPath: await W(o).catch(() => {}),
    parentAgentId: e.parentAgentId,
    forkedSkillName: e.forkedSkillName
  };
}

async function Y8n(e, n = {}) {
  let o = n.derivedTranscriptDir ?? FL(e.workflowRunId);
  return {
    taskId: e.id,
    workflowRunId: e.workflowRunId,
    scriptPath: e.scriptPath,
    scriptSha256: e.script ? Ne("sha256").update(e.script).digest("hex") : void 0,
    argsJson: e.args !== void 0 ? _(e.args) : void 0,
    description: e.description,
    startTime: e.startTime,
    withholdScriptFromSdkEvents: e.withholdScriptFromSdkEvents,
    transcriptDir: await W(o).catch(() => o)
  };
}

function Lq(e) {
  return dTe() && Mle(e) && e.frameLive !== void 0;
}

function vge(e) {
  let n = new Set;
  if (!dTe()) return n;
  for (let o of Object.values(e)) if (Lq(o) && o.frameLive !== void 0) n.add(o.frameLive.slug);
  for (let o of utt()) n.add(o);
  for (let o of bDe()) n.add(o);
  return n;
}

function Nmn(e) {
  let {supervisors: n, bootingWiredArms: o} = ee().live, r = bDe(), s = [], l = Date.now();
  for (let a of vge(e)) {
    let u = n.get(a), m = r.has(a) ? o.get(a) : void 0;
    if (u === void 0 && m === void 0) continue;
    let k = m?.title ?? u?.autoReactWiring?.title, h = k !== void 0 && k.length >= 1 && k.length <= 256;
    s.push({
      slug: a,
      writtenAtMs: l,
      ...h && {
        title: k
      }
    });
  }
  return s;
}

async function $mn(e, n) {
  let o = A6(e), r = Object.values(e).filter(g => Z8n(g, o)), s = Object.values(e).filter(g => e9n(g, o)), l = Object.values(e).filter(g => jmn(g, o)), a = cg().filter(g => jMe(g, o));
  if (r.length === 0 && s.length === 0 && l.length === 0 && a.length === 0 && Nmn(e).length === 0) return null;
  let u = (await Promise.all(r.map(g => K8n(g, {
    rerootOutputsTo: AP()
  })))).filter(g => g !== null), m = await Promise.all(s.map(g => q8n(g))), k = await Promise.all(l.map(g => Y8n(g))), h = Nmn(e), S = new Set(h.map(g => g.slug)), y = Object.values(e).filter(g => Lq(g) && g.frameLive !== void 0 && S.has(g.frameLive.slug)).map(g => g.id);
  if (u.length === 0 && m.length === 0 && k.length === 0 && a.length === 0 && h.length === 0) return null;
  let v = !1, T = !1, A = g => {
    if (T) return;
    T = !0, x2e(S), dVt(S);
    let w = new Set(y);
    if (S.size > 0) {
      for (let P of Object.values(g.all())) if (q$(P) && P.status === "running" && P.frameLive !== void 0 && S.has(P.frameLive.slug)) w.add(P.id);
    }
    for (let P of w) ib(P, g, {
      quiet: !0
    });
  };
  return {
    payload: {
      writtenAtMs: Date.now(),
      shells: u,
      cron: a.map(g => ({
        id: g.id,
        cron: g.cron,
        prompt: g.prompt,
        createdAt: g.createdAt,
        recurring: g.recurring,
        agentId: g.agentId,
        kind: g.kind,
        scheduledFor: g.scheduledFor,
        reason: g.reason,
        keepalive: g.keepalive
      })),
      ...oFt() > 0 && {
        loopWakeFires: oFt()
      },
      agents: m,
      workflows: k,
      ...h.length > 0 && {
        frameLive: h
      }
    },
    checkpointAgents: async g => {
      for (let w of l) w.abortController?.abort(Ml("background")), cTe(w.id, g);
      if (m.length === 0) return;
      for (let w of u) if (w.agentId !== void 0) g.remove(w.taskId);
      for (let w of s) w.abortController.abort(Ml("background"));
      await lS(), await ep().catch(w => {
        f("task_local_agent", "adopt_checkpoint_flush_failed"), t(`[adopt] checkpoint flush: ${w}`, {
          level: "warn"
        });
      });
    },
    stopCarriedWatches: A,
    disown: g => {
      A(g);
      for (let w of u) g.remove(w.taskId);
      for (let w of m) g.remove(w.agentId);
      for (let w of k) g.remove(w.taskId);
      if (a.length > 0) g6(a.map(w => w.id));
    },
    abandon: () => {
      if (v) return;
      v = !0;
      for (let g of r) try {
        g.shellCommand?.kill();
      } catch (w) {
        t(`[adopt] abandon ${g.id}: ${w}`, {
          level: "warn"
        });
      }
      for (let g of s) {
        let w = `Background agent "${$t(g.description)}" was checkpointed for the background fork but the fork failed to spawn; the agent was not resumed.`;
        Q(g.agentId, w, n);
      }
      if (s.length > 0) f("task_local_agent", "adopt_spawn_failed");
      for (let g of l) {
        let w = `Background workflow "${$t(g.description)}" was checkpointed for the background fork but the fork failed to spawn; it was not resumed. To resume manually: Workflow({scriptPath: '${$t(g.scriptPath ?? "")}', resumeFromRunId: '${$t(g.workflowRunId ?? "")}'}).`;
        Q(g.id, w, n);
      }
      if (l.length > 0) f("task_local_workflow", "adopt_spawn_failed");
      if (T) {
        for (let g of y) Q(g, "The background session didn't start, so automatic replies to Artifact comments stopped. Publish the Artifact again to turn them back on.", n);
        if (h.length > 0) f("artifact_live_subscribe", "adopt_spawn_failed");
      }
    }
  };
}

function X8n(e) {
  let n = new Map;
  for (let o of e) for (let r of o.entries) {
    let s = {
      ...r,
      writtenAtMs: r.writtenAtMs ?? o.fallbackBasis
    }, l = n.get(r.slug), a = Math.min((l?.unattendedReplies ?? 0) + (r.unattendedReplies ?? 0), ptt), u = l === void 0 || s.writtenAtMs > (l.writtenAtMs ?? 0) ? s : l;
    n.set(r.slug, a > 0 ? {
      ...u,
      unattendedReplies: a
    } : u);
  }
  if (n.size > dT) f("artifact_live_subscribe", "merged_consent_capped");
  return [ ...n.values() ].sort((o, r) => (r.writtenAtMs ?? 0) - (o.writtenAtMs ?? 0)).slice(0, QSe);
}

function He(e, n) {
  let o = (r, s, l) => [ ...r, ...s ].filter((a, u, m) => m.findIndex(k => l(k) === l(a)) === u);
  return {
    writtenAtMs: n.writtenAtMs,
    origin: n.origin ?? e.origin,
    shells: o(e.shells, n.shells, r => r.pid),
    cron: o(e.cron, n.cron, r => r.id),
    ...(n.loopWakeFires ?? e.loopWakeFires) !== void 0 && {
      loopWakeFires: n.loopWakeFires ?? e.loopWakeFires
    },
    agents: o(e.agents ?? [], n.agents ?? [], r => r.agentId),
    workflows: o(e.workflows ?? [], n.workflows ?? [], r => r.taskId),
    ...((e.frameLive?.length ?? 0) > 0 || (n.frameLive?.length ?? 0) > 0) && {
      frameLive: X8n([ {
        entries: e.frameLive ?? [],
        fallbackBasis: e.writtenAtMs
      }, {
        entries: n.frameLive ?? [],
        fallbackBasis: n.writtenAtMs
      } ])
    },
    prefill: n.prefill ?? e.prefill
  };
}

async function Ge(e, n) {
  let o = await e.read([ Fe.job(n, [ "adopt.json" ]) ]);
  if (!o.ok) return t(`[adopt] v5 merge read refused: ${yt(o.error)}`), null;
  let r = o.value.items[0];
  if (!r.found) return null;
  return Buffer.from(r.value).toString("utf8");
}

async function R7e(e, n, o = {}, r) {
  let s = j(e, "adopt.json"), l = X(e), a = z() && r !== void 0 && mr(l) && e === to(l) ? r : void 0, u = n;
  try {
    let m = a ? await Ge(a, l) : await ye(s, "utf-8");
    if (m !== null && m.length <= 1e6) {
      let h = (o.mergeShellOutputRoot !== void 0 ? Re(o.mergeShellOutputRoot) : Le()).safeParse(Y(m));
      if (h.success) {
        if (h.data.shells.length + (h.data.cron?.length ?? 0) + (h.data.agents?.length ?? 0) + (h.data.workflows?.length ?? 0) + (h.data.frameLive?.length ?? 0) <= 256) u = He(h.data, n);
      }
    }
  } catch {}
  if (a) {
    let m = await a.write(Fe.job(l, [ "adopt.json" ]), _(u), {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask(),
      parent: o.parent ?? "mustExist"
    });
    if (!m.ok) throw Object.assign(new x(`adopt.json v5 write failed: ${yt(m.error)}`, "adopt.json v5 write failed"), "telemetryCode" in m.error && m.error.telemetryCode !== void 0 ? {
      code: m.error.telemetryCode
    } : {});
    return;
  }
  await Tn(s, _(u));
}

async function AUr(e, n = {}) {
  if (!e) return null;
  let o = j(e, "adopt.json"), r = `${o}.${process.pid}`, s = Date.now() + (n.waitMs ?? 0), l = !1;
  for (;;) try {
    l = await ls(o, r);
    break;
  } catch (m) {
    let k = E(m);
    if (k === "ENOENT") {
      if (Date.now() < s) {
        await J(We);
        continue;
      }
      return i("tengu_adopt_claim", {
        result: b("enoent")
      }), null;
    }
    return t(`[adopt] rename failed: ${m}`, {
      level: "warn"
    }), i("tengu_adopt_claim", {
      result: k !== void 0 && IG.has(k) ? b("ebusy_gave_up") : ug(m)
    }), null;
  }
  let a = Date.now(), u = l ? b("ebusy_retry") : b("ok");
  try {
    let m = await ye(r, "utf-8"), h = (n.extraShellOutputRoot !== void 0 ? Re(n.extraShellOutputRoot) : Le()).safeParse(JSON.parse(m));
    if (!h.success) return t(`[adopt] schema rejected: ${h.error.message}`, {
      level: "warn"
    }), i("tengu_adopt_claim", {
      result: b("schema_rejected")
    }), null;
    let S = a - h.data.writtenAtMs;
    if (h.data.origin !== "exit" && S > C7e) {
      t(`[adopt] stale (age ${S}ms)`, {
        level: "warn"
      });
      let y = h.data.frameLive ?? [];
      if (y.length === 0) return i("tengu_adopt_claim", {
        result: b("stale")
      }), null;
      return i("tengu_adopt_claim", {
        result: b("stale"),
        frame_live_stale: b("true")
      }), f("artifact_live_subscribe", "carried_consent_stale_dropped"), {
        writtenAtMs: h.data.writtenAtMs,
        ...h.data.origin !== void 0 && {
          origin: h.data.origin
        },
        shells: [],
        cron: [],
        frameLive: y.map(v => ({
          ...v,
          writtenAtMs: v.writtenAtMs ?? h.data.writtenAtMs,
          stale: !0
        }))
      };
    }
    if ((h.data.frameLive?.length ?? 0) > 0) {
      let y = h.data.frameLive.map(T => {
        let A = T.writtenAtMs ?? h.data.writtenAtMs, g = a - A;
        return g >= -QBs && g <= C7e ? {
          ...T,
          writtenAtMs: A
        } : {
          ...T,
          writtenAtMs: A,
          stale: !0
        };
      }), v = N(y, T => "stale" in T);
      if (v > 0) t(`[adopt] ${v}/${y.length} frameLive entries marked stale`, {
        level: "warn"
      });
      return i("tengu_adopt_claim", {
        result: u,
        ...v > 0 && {
          frame_live_stale: b("true")
        }
      }), Object.assign(h.data, {
        frameLive: y
      });
    }
    return i("tengu_adopt_claim", {
      result: u
    }), h.data;
  } catch (m) {
    return t(`[adopt] read/parse failed: ${m}`, {
      level: "warn"
    }), i("tengu_adopt_claim", {
      result: b("parse_failed")
    }), null;
  } finally {
    await I(r).catch(() => {});
  }
}

function CUr(e, n, o, r) {
  let s = Qne();
  if (n.length === 0 && o.length === 0) {
    s.unresumedAdopt.delete(e);
    return;
  }
  s.unresumedAdopt.set(e, {
    agents: n,
    workflows: o,
    owner: r
  });
}

function RUr(e, n) {
  if (Qne().unresumedAdopt.get(e)?.owner !== n) return {
    agents: [],
    workflows: []
  };
  return J8n(e);
}

function J8n(e) {
  let n = Qne(), o = n.unresumedAdopt.get(e);
  return n.unresumedAdopt.delete(e), {
    agents: o?.agents ?? [],
    workflows: o?.workflows ?? []
  };
}

function xUr(e, n, o) {
  let r = Qne();
  if (n.length === 0) {
    r.unresumedFrameLive.delete(e);
    return;
  }
  r.unresumedFrameLive.set(e, {
    entries: n.map(({stale: s, ...l}) => l),
    owner: o
  });
}

function PUr(e, n) {
  if (Qne().unresumedFrameLive.get(e)?.owner !== n) return [];
  return Fmn(e);
}

function Fmn(e) {
  let n = Qne(), o = n.unresumedFrameLive.get(e);
  return n.unresumedFrameLive.delete(e), o?.entries ?? [];
}

function IUr(e, n, o) {
  let r = Qne(), s = r.unresumedFrameLive.get(e);
  if (n.length === 0 || s !== void 0 && s.owner !== o) return;
  r.unresumedFrameLive.set(e, {
    entries: [ ...n ],
    owner: o
  });
}

function OUr(e, n, o) {
  let r = Qne(), s = r.unresumedFrameLive.get(e);
  if (s === void 0 || s.owner !== o) return;
  let l = s.entries.filter(a => a.slug !== n);
  if (l.length > 0) r.unresumedFrameLive.set(e, {
    entries: l,
    owner: o
  }); else r.unresumedFrameLive.delete(e);
}

function MUr(e, n) {
  if (n.length > 0) Qne().exitRetryFrameLive.set(e, [ ...n ]);
}

function HUr(e) {
  if (e === void 0) return [];
  let n = Qne(), o = n.exitRetryFrameLive.get(e) ?? [];
  return n.exitRetryFrameLive.delete(e), o;
}

var Ke = new Set([ "EXDEV", "EPERM", "ENOTSUP", "EOPNOTSUPP", "ENOSYS", "EMLINK" ]), Ye = 1048576, Ie = ".adopt-relink.";

function Xe(e) {
  return `${e}${Ie}${process.pid}.${Date.now()}.${ke(4).toString("hex")}`;
}

async function Je(e, n, o, r) {
  let s;
  try {
    await r(e, n), s = "UNVERIFIED";
  } catch (a) {
    let u = E(a);
    if (u === void 0 || !Ke.has(u)) throw a;
    s = u;
  }
  if (s === "UNVERIFIED") {
    let a = await C(n);
    if (a.isFile() && a.dev === o.dev && a.ino === o.ino) return {
      method: "hardlink",
      identity: o
    };
    await I(n);
  }
  let l = await Qe(e, n, o);
  return {
    method: "copy",
    fallbackCode: s,
    identity: l
  };
}

async function Qe(e, n, o) {
  let r = await te(e, V.O_RDONLY | li);
  try {
    let s = await r.stat();
    if (!s.isFile() || s.dev !== o.dev || s.ino !== o.ino) throw Object.assign(Error("adopted file copy source is not the validated inode"), {
      code: "ADOPT_IDENTITY_MISMATCH"
    });
    let l = await te(n, "wx", qOr), a = !1;
    try {
      let u = Buffer.allocUnsafe(Ye);
      for (;;) {
        let {bytesRead: h} = await r.read(u, 0, u.length, null);
        if (h === 0) break;
        let S = 0;
        while (S < h) {
          let {bytesWritten: y} = await l.write(u, S, h - S);
          if (y === 0) throw Object.assign(Error("adopted file copy made no progress"), {
            code: "ADOPT_COPY_STALLED"
          });
          S += y;
        }
      }
      let {dev: m, ino: k} = await l.stat();
      return await l.utimes(s.atime, s.mtime).catch(h => {
        t(`[adopt] copied file keeps fresh timestamps (${E(h) ?? "error"})`, {
          level: "warn"
        });
      }), await l.close(), a = !0, {
        dev: m,
        ino: k
      };
    } finally {
      if (!a) await l.close().catch(() => {}), await I(n).catch(() => {});
    }
  } finally {
    await r.close().catch(() => {});
  }
}

async function qe(e, n, o) {
  let r;
  try {
    r = await C(n);
  } catch (s) {
    if (E(s) !== "ENOENT") throw s;
  }
  if (r !== void 0 && !r.isSymbolicLink()) {
    if (!r.isFile()) throw Object.assign(Error("adopted agent name is held by a non-file entry"), {
      code: "ADOPT_NAME_NOT_FILE"
    });
    if (o) return "kept";
  }
  try {
    await ls(e, n);
  } catch (s) {
    if (r === void 0 || E(s) !== "EEXIST") throw s;
    await I(n), await ls(e, n);
  }
  return r === void 0 ? "created" : "replaced";
}

async function de(e, n, o, r, s) {
  if (s) {
    let h = await C(e).catch(() => {});
    if (h !== void 0 && !h.isSymbolicLink() && h.isFile()) return {
      method: "kept",
      created: null
    };
  }
  let l = Xe(e), a = await Je(n, l, o, r), u = "kept";
  try {
    u = await qe(l, e, s);
  } finally {
    await I(l).catch(() => {});
  }
  let {identity: m, ...k} = a;
  return u === "kept" ? {
    method: "kept",
    created: null
  } : {
    ...k,
    created: u === "created" ? m : null
  };
}

async function DUr(e, {storageV5: n, linkFn: o = Ae} = {}) {
  if (n === void 0) return et(e);
  try {
    let r = await tt(e, o);
    if (r.method !== void 0) i("tengu_adopt_link", {
      kind: b("agent"),
      method: c(r.method),
      fallback_code: ug({
        code: r.fallbackCode
      })
    });
    return r;
  } catch (r) {
    throw i("tengu_adopt_link", {
      kind: b("agent"),
      method: c("fail"),
      error_code: ug(r)
    }), r;
  }
}

async function et(e) {
  if (!e.transcriptPath) return {};
  let n = Eg(To(e.agentId)), o = a => a.replace(/\.jsonl$/, ".meta.json");
  await Se(o(e.transcriptPath));
  let r = null, s, l = ttt(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let a = await B2t(l);
    if (a.status !== "valid") throw new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${a.status})`, "adopted forked-skill scoping record unusable");
    if (a.scoping.skillName !== e.forkedSkillName) throw new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch");
    r = {
      parent: l,
      fork: ttt(n)
    };
  } else {
    let a = await B2t(l);
    switch (a.status) {
     case "absent":
      break;

     case "valid":
      r = {
        parent: l,
        fork: ttt(n)
      }, s = a.scoping.skillName;
      break;

     case "malformed":
     case "absent-but-marked":
     case "diskless":
      throw new x(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${a.status})`, "adopted forked-skill scoping record unusable");
    }
  }
  if (n === e.transcriptPath) return {
    forkedSkillNameFromSidecar: s
  };
  if (await W(n).catch(() => {}) === e.transcriptPath) return {
    forkedSkillNameFromSidecar: s
  };
  if (await le(U(n), {
    recursive: !0
  }), r) await I(r.fork.provenanceMarker).catch(() => {}), await Jer(r.fork.provenanceMarker, e.forkedSkillName ?? s), 
  await I(r.fork.scoping).catch(() => {}), await we(r.parent.scoping, r.fork.scoping);
  for (let [a, u] of [ [ n, e.transcriptPath ], [ o(n), o(e.transcriptPath) ] ]) await I(a).catch(() => {}), 
  await be(u, a);
  return {
    forkedSkillNameFromSidecar: s
  };
}

function Z(e, n) {
  return Object.assign(e, {
    code: n
  });
}

async function tt(e, n) {
  if (!e.transcriptPath) return {};
  let o = Eg(To(e.agentId)), r = A => A.replace(/\.jsonl$/, ".meta.json");
  if (X(e.transcriptPath) !== X(o)) throw Z(new x(`adopted agent ${e.agentId} carrier names a transcript that is not agent-${e.agentId}.jsonl`, "adopted agent transcript path has the wrong leaf name"), "ADOPT_WRONG_LEAF");
  let [s, l] = await Promise.all([ C(e.transcriptPath), C(r(e.transcriptPath)) ]);
  if (!s.isFile() || !l.isFile()) throw Z(new x(`adopted agent ${e.agentId} parent transcript or .meta.json is not a regular file`, "adopted agent parent file is not a regular file"), "ADOPT_PARENT_NOT_REGULAR");
  let a = null, u, m = ttt(e.transcriptPath);
  if (e.forkedSkillName !== void 0) {
    let A = await B2t(m);
    if (A.status !== "valid") throw Z(new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    if (A.scoping.skillName !== e.forkedSkillName) throw Z(new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch"), "ADOPT_SCOPING_MISMATCH");
    a = {
      parent: m,
      fork: ttt(o)
    };
  } else {
    let A = await B2t(m);
    switch (A.status) {
     case "absent":
      break;

     case "valid":
      a = {
        parent: m,
        fork: ttt(o)
      }, u = A.scoping.skillName;
      break;

     case "malformed":
     case "absent-but-marked":
     case "diskless":
      throw Z(new x(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
    }
  }
  if (o === e.transcriptPath) return {
    forkedSkillNameFromSidecar: u,
    method: "noop"
  };
  let k = await W(U(o)).catch(() => {});
  if (k !== void 0 && j(k, X(o)) === e.transcriptPath) return {
    forkedSkillNameFromSidecar: u,
    method: "noop"
  };
  if (await le(U(o), {
    recursive: !0
  }), a) await I(a.fork.provenanceMarker).catch(() => {}), await Jer(a.fork.provenanceMarker, e.forkedSkillName ?? u), 
  await I(a.fork.scoping).catch(() => {}), await we(a.parent.scoping, a.fork.scoping);
  let h = await C(o).catch(() => {}), S = h !== void 0 && (h.isFile() || h.isSymbolicLink() && await W(o).catch(() => {}) === e.transcriptPath), y = await de(r(o), r(e.transcriptPath), l, n, S), v;
  try {
    v = await de(o, e.transcriptPath, s, n, !0);
  } catch (A) {
    if (y.created !== null) {
      let g = y.created;
      await C(r(o)).then(async w => {
        if (w.dev === g.dev && w.ino === g.ino) await I(r(o));
      }).catch(() => {});
    }
    throw A;
  }
  let T = v.fallbackCode ?? y.fallbackCode;
  if (T !== void 0) {
    let A = [ ...v.method === "copy" ? [ "transcript" ] : [], ...y.method === "copy" ? [ "meta" ] : [] ].join("+");
    t(`[adopt] agent ${e.agentId}: hard link impossible (${T}) \u2014 materialised a copy of ${A}`, {
      level: "warn"
    }), f("task_local_agent", "adopt_link_fallback_copy");
  }
  return {
    forkedSkillNameFromSidecar: u,
    method: v.method,
    fallbackCode: T
  };
}

var nt = /^agent-[\w-]+\.(?:jsonl|meta\.json)$/, rt = new RegExp("^agent-[\\w-]+\\.(?:jsonl|meta\\.json)" + Ie.replace(/[.]/g, "\\.") + "\\d+\\.(\\d+)\\.[0-9a-f]{8}$"), ot = 9e5, it = 64;

function Ee(e, n) {
  let o = _e(e, n);
  if (o === "" || o.startsWith("..") || ne(o)) return null;
  let r = o.split(se);
  if (r.length < 3 || r[2] !== "subagents") return null;
  return {
    session: j(r[0], r[1]),
    depth: r.length
  };
}

async function LUr({storageV5: e, linkFn: n = Ae} = {}) {
  if (e === void 0) return;
  try {
    await at(PZt(), n);
  } catch (o) {
    if (E(o) !== void 0) {
      t(`[adopt] relink sweep abandoned: ${o}`, {
        level: "warn"
      });
      return;
    }
    d(o);
  }
}

async function at(e, n) {
  let o;
  try {
    o = await xe(e, {
      withFileTypes: !0
    });
  } catch {
    return;
  }
  let r = Date.now(), s = [];
  for (let L of o) {
    let M = rt.exec(L.name);
    if (M) {
      if (Math.abs(r - Number(M[1])) > ot) await I(j(e, L.name)).catch(() => {});
      continue;
    }
    if (L.isSymbolicLink() && nt.test(L.name)) s.push(L.name);
  }
  if (s.length === 0) return;
  let l = L => L.replace(/\.(?:jsonl|meta\.json)$/, ""), a = new Map;
  for (let L of s) {
    let M = a.get(l(L)) ?? {};
    if (L.endsWith(".jsonl")) M.transcript = L; else M.meta = L;
    a.set(l(L), M);
  }
  let u = [ ...a.entries() ], m = u.length > 1 ? ke(4).readUInt32BE() % u.length : 0, k = [ ...u.slice(m), ...u.slice(0, m) ], [h, S] = await Promise.all([ W(Np()).catch(() => null), W(e).catch(() => null) ]);
  if (h === null || S === null) return;
  let y = Ee(h, S);
  if (yz(U(U(e))) === void 0 || y === null || y.depth !== 3) {
    t(`[adopt] relink sweep: ${s.length} symlinked name(s) left as is (session dir outside the transcript store)`, {
      level: "warn"
    });
    return;
  }
  let v = y.session, T = 0, A = 0, g = 0, w = 0, P = [], G = L => {
    if (L === "copy") A++; else T++;
  }, B = new Set;
  for (let [L, [M, F]] of k.entries()) {
    let H = [ F.transcript, F.meta ].filter(D => D !== void 0);
    if (w + H.length > it) {
      g = k.slice(L).reduce((D, [, R]) => D + Number(!!R.transcript) + Number(!!R.meta), 0), 
      P.push(`${g} more (per-pass cap)`);
      break;
    }
    w += H.length;
    try {
      let D = `${M}.jsonl`, R = F.transcript !== void 0 ? await ge(e, D, h, v) : await ct(e, D);
      if (typeof R === "string") {
        for (let K of H) P.push(`${K} (${K === F.meta && F.transcript !== void 0 ? "transcript not convertible" : R})`);
        continue;
      }
      let ie;
      if (F.meta !== void 0) {
        let K = R !== null && R.gate.size === 0 ? "meta beside an empty transcript" : await ge(e, F.meta, h, v, {
          besideDir: R === null ? void 0 : U(R.real)
        });
        if (typeof K === "string") {
          for (let ce of H) P.push(`${ce} (${ce === F.meta ? K : "meta not convertible"})`);
          continue;
        }
        ie = K;
      }
      if (R !== null) G(await he(R, n)), B.add(D);
      if (ie !== void 0 && F.meta !== void 0) G(await he(ie, n)), B.add(F.meta);
    } catch (D) {
      if (E(D) === void 0) d(D);
      for (let R of H) if (!B.has(R)) P.push(`${R} (${E(D) ?? "error"})`);
    }
  }
  if (A > 0) f("task_local_agent", "adopt_link_fallback_copy");
  t(`[adopt] relink sweep: ${T} hard-linked, ${A} copied, ${P.length - (g > 0 ? 1 : 0) + g} left as is${P.length > 0 ? ` (${P.slice(0, 5).join(", ")})` : ""}`, {
    level: P.length > 0 || A > 0 ? "warn" : "debug"
  }), i("tengu_adopt_relink", {
    linked: T,
    copied: A,
    left: P.length - (g > 0 ? 1 : 0) + g
  });
}

var q = 65536, st = p(() => St({
  agentType: me()
})), dt = p(() => St({
  agentId: me()
}));

async function Me(e, n, o) {
  let r = await te(e, V.O_RDONLY | li);
  try {
    let s = await r.stat();
    if (s.dev !== n.dev || s.ino !== n.ino) return "target changed during the check";
    if (o.endsWith(".meta.json")) {
      if (s.size > q) return "meta too large";
      let m = pe((await fe(r)).toString("utf-8"));
      return st().safeParse(m).success ? void 0 : "not an agent meta";
    }
    if (s.size === 0) return;
    let l = o.slice(6, -6), a = await fe(r), u = a.toString("utf-8");
    if (a.length >= q && a.indexOf(10) === -1) return lt(u, l) ? void 0 : "no record naming this agent in the first 64 KiB";
    for (let m of u.split(`\n`)) {
      let k = pe(m);
      if (k === null) continue;
      let h = dt().safeParse(k);
      if (h.success && h.data.agentId === l) return;
    }
    return "no record naming this agent in the first 64 KiB";
  } finally {
    await r.close().catch(() => {});
  }
}

function pe(e) {
  try {
    return Y(e);
  } catch {
    return null;
  }
}

async function fe(e) {
  let n = Buffer.allocUnsafe(q), o = 0;
  while (o < q) {
    let {bytesRead: r} = await e.read(n, o, q - o, o);
    if (r === 0) break;
    o += r;
  }
  return n.subarray(0, o);
}

function lt(e, n) {
  if (e[0] !== "{") return !1;
  let o = `"agentId":"${n}"`, r = 0, s = !1, l = !1;
  for (let a = 0; a < e.length; a++) {
    let u = e[a];
    if (s) {
      if (l) l = !1; else if (u === "\\") l = !0; else if (u === '"') s = !1;
      continue;
    }
    if (u === "{" || u === "[") r++; else if (u === "}" || u === "]") {
      if (r--, r === 0) return !1;
    } else if (u === '"') {
      if (r === 1 && e.startsWith(o, a) && (e[a - 1] === "{" || e[a - 1] === ",")) return !0;
      s = !0;
    }
  }
  return !1;
}

async function ge(e, n, o, r, {besideDir: s} = {}) {
  let l = j(e, n), a = await ve(l);
  if (!ne(a) || X(a) !== n || SI(a)) return "unexpected target spelling";
  let u;
  try {
    u = await C(a);
  } catch (y) {
    return `target ${E(y) ?? "unreadable"}`;
  }
  if (!u.isFile()) return u.isSymbolicLink() ? "chained link" : "non-regular target";
  let m = await W(a), k = Ee(o, m);
  if (k === null || k.depth < 4 || X(m) !== n) return "outside the transcript store";
  if (k.session === r) return "this session's own file";
  if (s !== void 0 && U(m) !== s) return "not beside its transcript";
  let h = await C(m);
  if (!h.isFile() || h.dev !== u.dev || h.ino !== u.ino) return "target changed during the check";
  let S = await Me(m, u, n);
  if (S !== void 0) return S;
  return {
    linkPath: l,
    real: m,
    gate: u
  };
}

async function ct(e, n) {
  let o = j(e, n), r;
  try {
    r = await C(o);
  } catch {
    return "meta without its transcript";
  }
  if (!r.isFile() || r.size === 0) return "meta without its transcript";
  let s = await Me(o, r, n);
  return s === void 0 ? null : `transcript ${s}`;
}

async function he(e, n) {
  return (await de(e.linkPath, e.real, e.gate, n, !0)).method;
}

function NUr(e) {
  return x7e(e.pid, e.startTimeTicks, e.procStart);
}

async function $Ur(e) {
  let n = FL(e.workflowRunId);
  if (n === e.transcriptDir) return;
  if (await W(n).catch(() => {}) === e.transcriptDir) return;
  await Se(j(e.transcriptDir, "journal.jsonl")), await le(U(n), {
    recursive: !0
  });
  try {
    await I(n);
  } catch (o) {
    if (E(o) !== "ENOENT") try {
      await Ce(n);
    } catch (s) {
      if (E(s) === "ENOTEMPTY") await $e(n, {
        recursive: !0,
        force: !0
      });
    }
  }
  await be(e.transcriptDir, n, void 0);
}

function Umn(e, n, o) {
  let r = e.scriptPath !== void 0 ? ` To resume manually: Workflow({scriptPath: '${$t(e.scriptPath)}', resumeFromRunId: '${$t(e.workflowRunId)}'}).` : "", s = `Background workflow "${$t(e.description)}" was checkpointed for the background fork but could not be resumed (${$t(n)}).${r}`;
  Q(e.taskId, s, o);
}

function Q(e, n, o, r = Ze(), s = "failed") {
  o.enqueuePendingNotification({
    value: Ri({
      taskId: $t(e),
      status: s,
      summary: n
    }),
    agentId: r,
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    taskId: e
  }), ya(e, s, {
    summary: n
  });
}

function FUr(e) {
  let n = oe(() => [ Np() ]).safeParse(e);
  if (!n.success) throw new x(n.error.issues[0]?.message ?? "scriptPath rejected", "adopt scriptPath rejected");
  return n.data;
}

function Q8n(e) {
  return e.mcp.clientsInitialized === !0 && !e.mcp.clients.some(n => n.type === "pending");
}

function UUr(e) {
  let n = e.parentAgentId !== void 0, o = e.forkedSkillName !== void 0;
  return {
    emit: n || o,
    excludeFromReconcile: !n && o
  };
}

function Bmn(e, n, o, r) {
  let s = `Background agent "${$t(e.description ?? e.agentId)}" was checkpointed for the background fork but could not be resumed (${$t(n)}).`;
  Q(e.agentId, s, r, Oe(e, o));
}

function BUr(e, n, o, r) {
  css(e.agentId, o), Q(e.agentId, `Background agent "${$t(e.description ?? e.agentId)}" was checkpointed for the background fork and was not resumed (${$t(n)}). Sending it a message with ${Dn} asks to resume it again.`, r, Oe(e, o), "stopped");
}

function Oe(e, n) {
  return e.parentAgentId !== void 0 && Mn(n.get(e.parentAgentId)) ? To(e.parentAgentId) : Ze();
}

function jUr(e, n) {
  let o = Date.now(), r = new Set(cg().map(l => l.id)), s = 0;
  for (let l of e) {
    if (l.prompt.length > ue) {
      f("task_local_agent", "adopt_cron_prompt_too_long"), t(`[adopt] cron ${vG(l.id, 64)} skipped: prompt is ${l.prompt.length} characters, over the ${ue} limit`, {
        level: "warn"
      });
      continue;
    }
    if (!r.has(l.id)) EEe({
      ...l,
      ...l.recurring && {
        lastFiredAt: o
      }
    }), r.add(l.id), s++;
  }
  if (s > 0) {
    if (tC()) JU(!0);
  }
  for (let l = 0; l < (n ?? 0); l++) ecn();
}

function A6(e) {
  let n = new Map;
  if (!dTe()) return n;
  let o = a => Mn(a) ? a.parentAgentId : "agentId" in a ? a.agentId : void 0, r = new Map;
  for (let a of Object.values(e)) {
    if (a.status !== "running" && a.status !== "pending" || Mn(a) && a.forkWorker) continue;
    let u = o(a);
    if (u !== void 0) {
      let m = r.get(u) ?? [];
      m.push(a), r.set(u, m);
    }
  }
  let s = a => {
    if (Mn(a)) return a.agentType !== "main-session" && a.status === "running" && a.isBackgrounded && a.abortController !== void 0;
    if (Mp(a)) return a.kind !== "monitor" && a.status === "running" && a.isBackgrounded && a.shellCommand !== null && a.shellCommand.detach !== void 0;
    if (imr(a)) return a.status === "running" && a.v2Run === void 0 && a.scriptPath !== void 0 && a.workflowRunId !== void 0 && a.abortController !== void 0;
    return !1;
  }, l = (a, u) => {
    u.push(a.id);
    let m = s(a);
    for (let k of r.get(a.id) ?? []) m = l(k, u) && m;
    return m;
  };
  for (let a of Object.values(e)) {
    if (!(Mn(a) ? a.parentAgentId === void 0 : Mp(a) ? a.agentId === void 0 : imr(a))) continue;
    let m = [], k = l(a, m);
    for (let h of m) n.set(h, k);
  }
  return n;
}

function Z8n(e, n) {
  return Mp(e) && (n.get(e.id) ?? !1);
}

function jMe(e, n) {
  return dTe() && (e.agentId === void 0 || (n.get(e.agentId) ?? !1));
}

function e9n(e, n) {
  return Mn(e) && (n.get(e.id) ?? !1);
}

function jmn(e, n) {
  return imr(e) && (n.get(e.id) ?? !1);
}

function Cze(e, n) {
  return n.get(e.id) ?? !1;
}

function m_t(e, n = A6(e)) {
  let o = vge(e);
  return N(Object.values(e), r => Cze(r, n)) + N(cg(), r => jMe(r, n)) + o.size;
}

function g_t(e, n = A6(e)) {
  return $L(e).count - m_t(e, n);
}

function Rze(e, n = A6(e)) {
  let o = 0, r = 0, s = 0;
  for (let l of Object.values(e)) {
    if (!jmn(l, n)) continue;
    let a = 1 / 0;
    for (let u of l.workflowProgress) if (u.type === "workflow_agent" && u.state === "error") a = Math.min(a, u.index);
    for (let u of l.workflowProgress) {
      if (u.type !== "workflow_agent") continue;
      if (u.state === "done") if (u.index > a) s++; else r++; else if (u.state === "progress" || u.state === "start" && !(u.queuedAt !== void 0 && u.startedAt === void 0)) o++;
    }
  }
  return {
    running: o,
    finished: r,
    rerun: s
  };
}

function WUr(e, n = A6(e)) {
  return g_t(e, n) > 0 || vge(e).size > 0 || Rze(e, n).running > 0;
}

function h_t(e, n) {
  let o = 0;
  for (let r of vge(e)) if (!n.has(r)) o++;
  return o;
}

function zUr(e) {
  return e.shells.length > 0 || (e.agents?.length ?? 0) > 0 || (e.workflows?.length ?? 0) > 0 || e.cron.length > 0;
}

function Wmn(e) {
  return {
    adopted_shells: e?.shells.length ?? 0,
    adopted_agents: e?.agents?.length ?? 0,
    adopted_workflows: e?.workflows?.length ?? 0,
    adopted_cron: e?.cron.length ?? 0,
    adopted_frame_live: e?.frameLive?.length ?? 0
  };
}

function S1t(e) {
  return Oc((n, o, r) => {
    if (!r) return;
    ut(r, e), i("tengu_refusal_fallback_latch_reset", {
      source: c(o),
      restored_to_explicit_override: r.restoredToExplicitOverride,
      model_scope: c(Q8(r.fallbackModel))
    });
  });
}

function vWo(e) {
  return Oc((n, o, r) => {
    if (r) e();
  });
}

function ut(e, n) {
  let o, r;
  if (n(s => {
    let l = e.overrideValue ?? e.forSessionValue ?? e.appStateModel, a = Bo() ? $P(l, s.fastMode) : !!s.fastMode;
    return o = s.fastMode, r = a, s.mainLoopModel === e.appStateModel && s.mainLoopModelForSession === e.forSessionValue && a === !!s.fastMode ? s : {
      ...s,
      mainLoopModel: e.appStateModel,
      mainLoopModelForSession: e.forSessionValue,
      fastMode: a
    };
  }), r !== void 0) FP(o, r);
  Pp(e.overrideValue);
}

export { C7e, QBs, TUr, K8n, q8n, Y8n, Lq, vge, Nmn, $mn, X8n, R7e, AUr, CUr, RUr, J8n, xUr, PUr, Fmn, IUr, OUr, MUr, HUr, DUr, LUr, NUr, $Ur, Umn, FUr, Q8n, UUr, Bmn, BUr, jUr, A6, Z8n, jMe, e9n, jmn, Cze, m_t, g_t, Rze, WUr, h_t, zUr, Wmn, S1t, vWo };
