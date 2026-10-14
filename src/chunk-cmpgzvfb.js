// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { zn, Ir, ic, Pp } from "./chunk-3pqddg8f.js";

import { b } from "./chunk-hwdwjvh8.js";

import { AI, Ve, j, Zl } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import { wr } from "./chunk-t26295zc.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { Wi, se, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { lS, ua, bPo, tX, eNt, Umt, Es } from "./chunk-q6wab2jw.js";

import { ar } from "./chunk-nnrb0acr.js";

import { Mi, Mpe, Hi, fr } from "./chunk-8drhysk2.js";

import { Xm } from "./chunk-9wtp3skp.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { gT } from "./chunk-3kb22va7.js";

import { _H, Vm, NY } from "./chunk-t70vnbgq.js";

import { v$e, v7, iH } from "./chunk-2xhrgh8h.js";

import { Ug, np, opo, H_s, D_s, L_s } from "./chunk-wbxkeemq.js";

import { yao, V4e, d0, mO, TV, _ao } from "./chunk-wgsx43va.js";

import { Tt } from "./chunk-9tdwgnpn.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { E4, dde, cde, dKe, dkt, Jnt, yde, pQ, Z4t, yKe, RT, _rs, n_e, Hde, _Q, Dde, r_e, mxn, K0e, Xrs, Nde, q0e, Wrt, B4, gd, Pre, NLe, CS, ni, I_e, p3t, xfr, vCe, pV, Aoo, nds, iNe, aNe } from "./chunk-84yp45y8.js";

import { gt } from "./chunk-yebkpv3k.js";

import { SR } from "./chunk-2c1h2835.js";

import { I8 } from "./chunk-j99efqre.js";

import { yB } from "./chunk-1cvvd6ss.js";

import { Chn, ele } from "./chunk-p909e8k0.js";

import { Yke } from "./chunk-kxb3y2h2.js";

import { Q0r } from "./chunk-4n3q7qmq.js";

import { hte, DFt } from "./chunk-5yt2rwwg.js";

import { Nht } from "./chunk-9gzyn94a.js";

import { ho } from "./chunk-9r9vcg3z.js";

import { iDt, HR } from "./chunk-0f42zdcd.js";

import { o, v, M, oe, T, u, De, $e, Kr, ue, U, A } from "./chunk-cvcg6n1z.js";

import { pS, at } from "./chunk-0bq6eb61.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { basename as fe, dirname as Ie, join as ge } from "path";

var Le = 1e4, Me = _ao, ae = {
  reason: "timed_out"
};

async function le(e) {
  if (!iDt(e)) return {
    reason: "file_absent"
  };
  let n = np().hostCatalog, s = n.texts.get(e);
  if (s !== void 0) return s;
  let r = n.readingForCalls.get(e);
  if (r === void 0) {
    if (H_s()) return {
      reason: "earlier_work_outstanding"
    };
    if (n.readingForCalls.size >= Me) return {
      reason: "too_many_reads"
    };
    let l = n.lastReadForCalls.then(S => Oe(n, e, S));
    n.lastReadForCalls = l.then(({probed: S}) => S, () => {}), r = {
      reading: l.then(({outcome: S}) => S).finally(() => {
        if (n.readingForCalls.delete(e), n.readingForCalls.size === 0) n.lastReadForCalls = Promise.resolve(void 0);
      }),
      since: performance.now()
    }, n.readingForCalls.set(e, r);
  }
  let i = r.since + Le - performance.now();
  return (i > 0 ? await We(r.reading, i) : void 0) ?? {
    reason: "timed_out"
  };
}

async function Oe(e, n, s) {
  let r = () => np().hostCatalog === e;
  if (s === void 0) await lS();
  let i = s ?? await opo(async () => r() ? D_s() : ae);
  if ("reason" in i) return {
    outcome: i,
    probed: void 0
  };
  await lS();
  let l = await opo(async () => {
    let c = r() ? await L_s(i.root, n, i.device) : ae;
    if (!("reason" in c)) e.texts.set(n, c);
    return c;
  });
  return {
    outcome: l,
    probed: "reason" in l ? void 0 : i
  };
}

import { join as Ne } from "path";

var uFo = "ListProjectCommands", Te = 8388608, de = 2e3, ce = p(() => u({
  name: o().min(1).max(1024),
  loadedFrom: U([ "skills", "commands_DEPRECATED" ]),
  text: o().max(Jnt)
})), Nt = p(() => u({
  commands: T(ce()).max(de),
  cut: M(),
  refused: v().int().min(0)
}));

function Q(e) {
  return wr().skillFiles.get(e) ?? (e.skillRoot ? Ne(e.skillRoot, "SKILL.md") : "");
}

async function Z(e) {
  let n = Q(e);
  if (n === "") return null;
  try {
    return await gT(se(), n, Jnt);
  } catch {
    return null;
  }
}

function H0r(e) {
  return Buffer.byteLength(Wi(e));
}

async function pFo(e, n, s) {
  let {storageV5: r} = s.toolUseContext();
  pV(), ar();
  let i = [ ...await vCe(Ir(), r), ...aNe(), ...iNe() ];
  n.throwIfAborted();
  let l = new Set, c = [], S = 0, y = !1, h = 0;
  for (let _ of i) {
    if (_.type !== "prompt" || l.has(_.name)) continue;
    l.add(_.name);
    let {name: P, loadedFrom: C} = _;
    if (_.source !== "projectSettings" || C !== "skills" && C !== "commands_DEPRECATED" || V4e(_) || RT(_)) continue;
    let k = await Z(_);
    n.throwIfAborted();
    let x = ce().safeParse({
      name: P,
      loadedFrom: C,
      text: k
    });
    if (!x.success) {
      h++, t(`ListProjectCommands: ${P} refused from the listing`, {
        level: "warn"
      });
      continue;
    }
    if (c.length === de) {
      y = !0;
      break;
    }
    let z = H0r(x.data);
    if (S + z > Te) {
      y = !0;
      continue;
    }
    S += z, c.push(x.data);
  }
  return {
    summary: `${c.length} commands${y ? ", cut at a limit" : ""}${h > 0 ? `, ${h} refused` : ""}`,
    output: {
      commands: c,
      cut: y,
      refused: h
    }
  };
}

var fFo = "ReadSkill", mFo = "RenderSkill", gFo = "RenderPinnedSkill", hFo = "RenderBuiltInCommand", Se = 11e4, ye = 2e3, H = 1e5, Fe = 4e6, He = 6e4, je = 4096, Ce = 256, he = 256, _e = 32768, ve = [ gt, SR, ho ], pe = Ue({
  last: Promise.resolve()
}, e => {
  e.last = Promise.resolve();
}), Pe = p(() => A(!0).optional().catch(void 0)), Be = p(() => u({
  name: o().min(1).max(1024),
  updatedAt: o().max(64).nullable(),
  waitMs: v().int().min(0).max(Se),
  fromHostCatalog: Pe()
})), ke = p(() => u({
  outcome: A("missing"),
  syncing: M(),
  fromHostCatalog: A(!0).optional(),
  withheld: A(!0).optional()
})), bn = p(() => Kr("outcome", [ u({
  outcome: A("found"),
  text: o().max(Ug),
  fromHostCatalog: A(!0).optional()
}), ke() ])), B = p(() => oe().optional()), Xe = p(() => u({
  name: o().min(1).max(1024),
  args: o().max(H),
  readOnly: M(),
  waitMs: v().int().min(0).max(Se),
  fromHostCatalog: Pe(),
  expectSha256: o().regex(pS).optional(),
  sessionRules: B()
})), Ke = p(() => u({
  name: o().min(1).max(1024),
  args: o().max(H),
  readOnly: M(),
  sessionRules: B(),
  model: o().min(1).max(256),
  session: u({
    tools: T(o().min(1).max(Ce)).max(je).catch([]),
    isSkillPreload: M().optional().catch(void 0),
    modelScheduledOrigin: M().optional().catch(void 0),
    remoteSessionId: o().min(1).max(256).optional().catch(void 0),
    effort: $e([ U(ua), v().int().min(0).max(1e3) ]).optional().catch(void 0)
  }).optional().catch(void 0)
})), G = p(() => u({
  outcome: A("rendered"),
  blocks: T(u({
    type: A("text"),
    text: o().max(Fe)
  })).max(16),
  handedOff: T(De({
    command: o().min(1).max(_e),
    tool: o().max(Ce)
  })).max(he).optional(),
  fromHostCatalog: A(!0).optional()
})), te = p(() => u({
  outcome: A("failed"),
  message: o().max(ye)
})), En = p(() => Kr("outcome", [ G(), ke(), te() ]));

async function yFo(e, n, {toolUseContext: s}) {
  let {name: r, updatedAt: i, waitMs: l, fromHostCatalog: c} = Be().parse(e), S = c ? await xe(r) : await ee(r, l, n, s(), i), y = S && D(S);
  if (y !== void 0) return {
    summary: "no such skill",
    output: F(y, c)
  };
  let h = c ? S?.getLoadedSkillMd?.() ?? null : S?.skillRoot === void 0 ? null : await gT(se(), ge(S.skillRoot, "SKILL.md"), Ug).catch(() => null);
  return h === null ? {
    summary: "no such skill",
    output: F(void 0, c)
  } : {
    summary: "found",
    output: {
      outcome: "found",
      text: h,
      ...c && {
        fromHostCatalog: c
      }
    }
  };
}

async function D0r(e, n, {toolUseContext: s, launchPermissionContext: r}) {
  let {name: i, args: l, readOnly: c, waitMs: S, fromHostCatalog: y, expectSha256: h, sessionRules: _} = Xe().parse(e), P = X(s(), c, _, r), C = y ? await xe(i) : await ee(i, S, n, P);
  if (C?.source === "projectSettings") pV(), C = await ee(i, S, n, P);
  let k = C && D(C);
  if (C === void 0 || k !== void 0) return {
    summary: "no such skill",
    output: F(k, y)
  };
  if (h !== void 0) {
    if (C = await Ye(C, h), C === void 0 || D(C) !== void 0) return {
      summary: "changed since listed",
      output: {
        outcome: "failed",
        message: "this skill's file changed after the session listed it, so it was not rendered; a new session lists the current file"
      }
    };
  }
  let x = await K(C, l, P, n);
  return y && x.output.outcome === "rendered" ? {
    ...x,
    output: {
      ...x.output,
      fromHostCatalog: y
    }
  } : x;
}

function X(e, n, s, r) {
  if (!n && s === void 0) return e;
  let i = n ? void 0 : Q0r(s, r);
  if (i === void 0) return {
    ...e,
    options: {
      ...e.options,
      readOnlySkillLoad: !0
    }
  };
  let {toolPermissionContext: l} = i;
  return {
    ...e,
    getAppState: () => ({
      ...hte(),
      toolPermissionContext: l
    }),
    ...i.offersHandOff && {
      promptShellHandOff: []
    },
    ...i.classifiesEveryCall && {
      promptShellCallerClassifiesAll: !0
    }
  };
}

async function Ye(e, n) {
  let s = d0(e) ? e.getLoadedSkillMd?.() ?? null : await Z(e);
  if (s === null || at(s) !== n) return;
  try {
    let r = xfr({
      content: s,
      skillFilePath: Q(e),
      skillName: e.name,
      source: e.source,
      baseDir: e.skillRoot,
      loadedFrom: e.loadedFrom ?? "skills",
      serverAttribution: e.serverAttribution
    });
    return r?.type === "prompt" ? r : void 0;
  } catch (r) {
    d(j(r));
    return;
  }
}

async function _Fo(e, n, {toolUseContext: s, launchPermissionContext: r}) {
  let {name: i, args: l, readOnly: c, sessionRules: S, model: y, session: h} = Ke().parse(e), _ = X(s(), c, S, r), P = h?.effort, C = {
    ..._,
    ...P !== void 0 && {
      permissionLayers: [ ..._.permissionLayers ?? [], {
        kind: "effort",
        effort: P
      } ]
    },
    options: {
      ..._.options,
      mainLoopModel: y,
      ...h && {
        tools: [ ..._.options.tools, ...DFt(!1).filter(x => ve.some(z => Tt(x, z)) && h.tools.some(z => Tt(x, z)) && !_.options.tools.some(z => Tt(z, x.name))) ],
        isSkillPreload: h.isSkillPreload,
        modelScheduledOrigin: h.modelScheduledOrigin
      }
    }
  }, k = Je(i);
  if (k === void 0 || D(k) !== void 0) return {
    summary: "no such command",
    output: F()
  };
  return qe(y, () => _rs(h?.remoteSessionId, () => K(k, l, C, n)));
}

function Je(e) {
  Yke();
  for (let n of [ ...I8(), ...B4() ]) if (n.type === "prompt" && n.name === e && yao(n)) return n;
  return;
}

async function qe(e, n) {
  let s = pe.last.then(async () => {
    let r = ic();
    Pp(e);
    try {
      return await n();
    } finally {
      Pp(r);
    }
  });
  return pe.last = s.then(() => {}, () => {}), s;
}

async function K(e, n, s, r) {
  try {
    let i = await e.getPromptForCommand(n, s), l = i.flatMap(S => S.type === "text" ? [ {
      type: S.type,
      text: S.text
    } ] : []), c = G().safeParse({
      outcome: "rendered",
      blocks: l,
      ...s.promptShellHandOff?.length && {
        handedOff: s.promptShellHandOff
      }
    });
    if (l.length !== i.length || !c.success) return {
      summary: "render refused",
      output: {
        outcome: "failed",
        message: s.promptShellHandOff?.length ? `the rendered skill is not plain text of a usable size, or it leaves Claude more than ${he} inline shell commands or one longer than ${_e} characters` : "the rendered skill is not plain text of a usable size"
      }
    };
    return {
      summary: "rendered",
      output: c.data
    };
  } catch (i) {
    if (Ve(i) || r.aborted) throw i;
    if (!(i instanceof AI)) d(j(i));
    return {
      summary: "render failed",
      output: {
        outcome: "failed",
        message: i instanceof AI ? ne(i.message, ye) : "the skill could not be rendered"
      }
    };
  }
}

function F(e, n) {
  return {
    outcome: "missing",
    syncing: np().firstSyncPromise !== null,
    ...e === "account_skill_off" && {
      withheld: !0
    },
    ...n && {
      fromHostCatalog: n
    }
  };
}

async function ee(e, n, s, r, i = null) {
  let l = np(), c = J(n, s, {
    unref: !0
  }), S = P => Promise.race([ P.catch(() => {}), c ]), y = await V(e, r, i), h = HR(e);
  if (y === void 0 && mxn(h)) await S(r_e(h)), s.throwIfAborted(), y = await V(e, r, i);
  if (y !== void 0 || !l.firstSyncPromise) return y;
  let _ = l.firstSyncPromise;
  if (l.firstRoundSettled) {
    let P = Date.now();
    if (P - l.missingSkillResyncAt >= He) {
      l.missingSkillResyncAt = P;
      let C = Chn(r.session, r.storageV5, r.credentials).finally(() => {
        if (l.missingSkillResync === C) l.missingSkillResync = null;
      });
      l.missingSkillResync = C;
    }
    _ = l.missingSkillResync ?? l.syncPromise;
  }
  if (!_) return;
  return await S(_), s.throwIfAborted(), ele(), V(e, r, i);
}

async function xe(e) {
  let n = HR(e);
  if (!iDt(n) || !Aoo()) return;
  let s = np().hostCatalog, r = {
    fromMemory: s.texts.has(n),
    inLine: s.readingForCalls.size,
    at: performance.now()
  }, i, l, c = !1;
  try {
    let S = await le(n);
    if ("reason" in S) l = S; else {
      let y = nds(S);
      i = y?.type === "prompt" && y.name === e ? y : void 0;
    }
  } catch (S) {
    c = !0, d(j(S));
  } finally {
    try {
      Ze({
        served: i,
        miss: l,
        threw: c,
        asked: r
      });
    } catch (S) {
      d(j(S));
    }
  }
  return i;
}

var Qe = new Set([ "timed_out", "earlier_work_outstanding", "too_many_reads" ]);

function Ze({served: e, miss: n, threw: s, asked: r}) {
  let i = e !== void 0 && TV(e), l = {
    from: b("call"),
    named: 1,
    loaded: e === void 0 ? 0 : 1,
    withheld: i ? 1 : 0,
    from_memory: r.fromMemory,
    in_line: r.inLine,
    waited_ms: Math.round(performance.now() - r.at),
    ...n !== void 0 && {
      [`mount_miss_${n.reason}`]: 1
    },
    ...s && {
      threw: s
    }
  };
  if (i) f("skill_host_catalog", "all_withheld", l); else if (e !== void 0) g("skill_host_catalog", l); else m("skill_host_catalog", n !== void 0 && Qe.has(n.reason) ? "not_in_time" : "none_loaded", l);
}

function D(e) {
  ar();
  let n = mO(e);
  if (RT(e)) return n ? "account_skill_off" : "other";
  if (V4e(e)) return "other";
  return n_e(e) ? "other" : void 0;
}

async function V(e, n, s) {
  let r = HR(e) !== e, i = await vCe(Ir(), n.storageV5);
  for (let l of [ ...i, ...aNe(), ...iNe() ]) if (l.type === "prompt" && l.name === e && (l.loadedFrom === "syncedSkills" || !r) && !d0(l)) return await et(l, s) ? void 0 : l;
  return;
}

async function et(e, n) {
  if (n === null || e.loadedFrom !== "syncedSkills" || e.skillRoot === void 0) return !1;
  let s = Ie(e.skillRoot), r = await dde(ge(s, _H), null), i = r === null ? null : cde(r, dkt(), null);
  if (i === null) return !1;
  let l = Vm(fe(e.skillRoot)), c = !1;
  for (let S of E4(dKe(), i.skills)) {
    try {
      if (Vm(fe(NY(S.name, s))) !== l) continue;
    } catch {
      continue;
    }
    if (S.updatedAt === v$e) {
      c = !0;
      continue;
    }
    return S.updatedAt !== null && Date.parse(S.updatedAt) < Date.parse(n);
  }
  return c;
}

var bFo = "ListPluginCommands", SFo = "RenderPluginCommand", wFo = "RenderPinnedPluginCommand", tt = 6e4, nt = p(() => $e([ eNt(), u({
  source: A("claudeai"),
  marketplaceId: o(),
  organizationUuid: o(),
  scope: U(Umt).optional()
}), u({
  source: A("pluginDirectory")
}) ])), ot = p(() => u({
  commandName: o(),
  filePath: o(),
  baseDir: o(),
  sourceName: o(),
  pluginManifest: tX(),
  pluginPath: o(),
  provenance: u({
    officiallyAttested: M().optional(),
    marketplaceSource: nt().optional(),
    npmResolution: u({
      packageName: o(),
      tarballUrl: o()
    }).optional(),
    home: o().optional()
  }).optional(),
  isSkill: M(),
  config: u({
    isSkillMode: M(),
    serverAttribution: u({
      skillId: o().optional(),
      pluginId: o().optional()
    }).optional(),
    metadata: bPo().optional()
  })
})), rt = p(() => u({
  filePath: o(),
  pluginName: o(),
  namespace: T(o()).readonly(),
  sourceName: o(),
  pluginPath: o(),
  pluginManifest: tX()
})), ze = p(() => u({
  source: ot(),
  text: o(),
  sha256: o().regex(pS).optional().catch(void 0)
})), io = p(() => u({
  commands: T(ze()),
  skills: T(ze()),
  agents: T(u({
    source: rt(),
    text: o()
  })),
  resynced: M().optional(),
  syncsSessionRefs: M().optional(),
  settingsRan: M().optional(),
  comparesSource: M().optional()
})), e5n = p(() => T(o().max(64e3)).max(1e3).nullable().optional().catch(null)), it = p(() => u({
  registeredHooks: ue(o(), e5n()).optional().catch(void 0),
  resync: M().optional(),
  waitMs: v().int().positive().optional().catch(void 0),
  hashes: M().optional().catch(void 0)
}));

async function vFo(e, n, s) {
  let r = it().safeParse(e ?? {}).data, i = r?.resync === !0, {session: l, storageV5: c, credentials: S} = s.toolUseContext(), y = r?.registeredHooks;
  ar();
  let h = J(Math.min(pQ(), r?.waitMs ?? 1 / 0), n, {
    unref: !0
  }), {resynced: _} = await L0r(l, S, {
    resync: i,
    deadline: h
  });
  n.throwIfAborted(), gd(c, S);
  let P = await Promise.race([ N0r(l, c, S), h.then(() => !1) ]);
  n.throwIfAborted();
  let [C, k, x] = await Promise.all([ Nde(c), q0e(c), Sr("agents") ? [] : Wrt(c, S) ]), z = await ni(c, S), E = l.pluginsSync.settingsInstall.loaded;
  await p3t([ ...z.enabled, ...E?.plugins.enabled ?? [] ], c).catch(d);
  let O = Re(z, E?.plugins), N = await W([ ...Ae(x, z, y), ...E === null ? [] : Ae(E.agents, E.plugins, y, O) ]), w = await I_e(c), R = new Set(N.map(({source: L}) => L.sourceName));
  for (let {source: L} of w.enabled) R.delete(L);
  let q = await Ee([ ...z.enabled, ...E?.plugins.enabled ?? [] ].filter(L => R.has(L.source)), c), ie = r?.hashes === !0 ? mt : ut, I = {
    commands: ie(await W([ ...Y(C), ...Y(E?.commands ?? [], O) ], r?.hashes === !0)),
    skills: ie(await W([ ...Y(k), ...Y(E?.skills ?? [], O) ])),
    agents: N.filter(({source: L}) => !Vcn(L, R.has(L.sourceName) ? q : w, y?.[NLe(L.pluginPath)])),
    resynced: _,
    syncsSessionRefs: iH(l),
    settingsRan: P,
    comparesSource: !0
  };
  return {
    summary: `${I.commands.length} commands, ${I.skills.length} skills, ${I.agents.length} agents`,
    output: I
  };
}

async function L0r(e, n, {resync: s, deadline: r}) {
  let i = await Promise.race([ Z4t(e, n).catch(() => !1), r.then(() => {}) ]);
  if (i !== !1 && !(s && i !== void 0)) return {
    resynced: !1
  };
  return {
    resynced: await Promise.race([ yKe(e, n).then(() => !0, () => !1), r.then(() => !1) ]) && e.pluginsSync.lastRoundListed
  };
}

function N0r(e, n, s) {
  if (Sr("plugins")) return Promise.resolve(!0);
  let r = e.pluginsSync.settingsInstall;
  return r.next ??= st(e, n, s).then(() => !0, i => (d(i), !1)), r.next;
}

async function st(e, n, s) {
  let r = e.pluginsSync.settingsInstall;
  await r.current, r.current = r.next, r.next = null, await Promise.allSettled([ yB() ]), 
  a.unset("CLAUDE_CODE_SYNC_PLUGIN_INSTALL"), await Promise.allSettled([ Nht(void 0, n, s), e.pluginsSync.firstSyncPromise ]), 
  gd(n, s);
  let i = CS(n, s);
  await i, gd(n, s), Ge().pluginLoadCacheOnly = i;
  let l = Promise.all([ Nde(n), q0e(n), Sr("agents") ? [] : Wrt(n, s), i ]);
  gd(n, s);
  let [c, S, y, h] = await l;
  r.loaded = {
    commands: c,
    skills: S,
    agents: y,
    plugins: h
  };
}

var lt = p(() => u({
  name: o().min(1).max(1024),
  listedAs: U([ "command", "skill" ]),
  args: o().max(H),
  readOnly: M(),
  sessionRules: B(),
  sourceName: o().max(1024).optional(),
  registeredHooks: e5n(),
  expectSha256: o().regex(pS).optional()
})), so = p(() => Kr("outcome", [ G().extend({
  sourceName: o().optional()
}), te().extend({
  sourceName: o().optional()
}), u({
  outcome: A("missing")
}), u({
  outcome: A("changed")
}), u({
  outcome: A("guarded")
}) ]));

async function $0r(e, n, s) {
  let {name: r, listedAs: i, args: l, readOnly: c, sessionRules: S, sourceName: y, registeredHooks: h, expectSha256: _} = lt().parse(e), P = s.toolUseContext(), C = await re(r, i, P);
  if (C === void 0) {
    let w = J(pQ(), n, {
      unref: !0
    });
    if (await F0r(s, n), C = await re(r, i, P), C === void 0) {
      let R = P.session.pluginsSync.settingsInstall;
      await Promise.race([ R.next ?? R.current, w ]), n.throwIfAborted(), C = await re(r, i, P);
    }
  }
  let k = C?.command, x = !1;
  if (k !== void 0 && _ !== void 0) {
    let [w] = k.pluginSource === void 0 ? [] : await W([ k.pluginSource ], !0, q => {
      x = !Zl(q);
    }), R = w !== void 0 && be(w.source, w.text) === _ ? Xrs(w.source, w.text) : null;
    k = R?.type === "prompt" ? R : void 0;
  }
  ar();
  let z = C === void 0 ? void 0 : await Hde(C.command);
  if (ar(), C === void 0 || (y ?? C.command.pluginSource?.sourceName) !== C.command.pluginSource?.sourceName || Hi(C.command.pluginSource?.sourceName ?? "") === Mi && v7()) return {
    summary: "no such plugin entry",
    output: {
      outcome: "missing"
    }
  };
  if (Dde(z)) return _Q(C.command, z), {
    summary: "no such plugin entry",
    output: {
      outcome: "missing"
    }
  };
  let {judgedBy: E} = C;
  if (x) return {
    summary: "entry not read",
    output: {
      outcome: "failed",
      message: "its file could not be read where its plugin is kept, so it was not run",
      sourceName: C.command.pluginSource?.sourceName
    }
  };
  if (k === void 0) return {
    summary: "changed since listed",
    output: {
      outcome: "changed"
    }
  };
  if (k.hooks !== void 0 || E.some(w => Vcn(k.pluginSource, w, h))) return {
    summary: "guarded entry",
    output: {
      outcome: "guarded"
    }
  };
  let {summary: O, output: N} = await K(k, l, X(P, c, S, s.launchPermissionContext), n);
  return {
    summary: O,
    output: {
      ...N,
      sourceName: k.pluginSource?.sourceName
    }
  };
}

function be(e, n) {
  let {serverAttribution: s, ...r} = e.config;
  return at(at(n) + yde({
    ...e,
    config: r
  }));
}

async function re(e, n, {session: s, storageV5: r, credentials: i}) {
  let l = we(await (n === "skill" ? q0e : Nde)(r), e), c = s.pluginsSync.settingsInstall.loaded, S = l ? await ni(r, i) : c?.plugins;
  if (S === void 0) return;
  ar();
  let y = await I_e(r), h = Re(y, S), _ = l ?? we((n === "skill" ? c?.skills : c?.commands) ?? [], e, h), P = _?.pluginSource?.sourceName ?? "", C = y.enabled.some(k => k.source === P);
  if (_ === void 0 || !(C || h.has(P))) return;
  return {
    command: _,
    judgedBy: [ S, C ? y : await Ee(S.enabled.filter(k => k.source === P), r) ]
  };
}

async function Ee(e, n) {
  let s = await Promise.allSettled(e.map(({path: r, source: i, name: l}) => Pre(r, i, !0, l, !0, n, void 0, {
    noTelemetry: !0
  })));
  return {
    enabled: s.flatMap(r => r.status === "fulfilled" ? [ r.value.plugin ] : []),
    errors: s.flatMap(r => r.status === "fulfilled" ? r.value.errors : [])
  };
}

function we(e, n, s) {
  for (let r of e) if (r.type === "prompt" && r.name === n && r.pluginSource !== void 0 && !Xm(r.pluginSource.sourceName) && s?.has(r.pluginSource.sourceName) !== !1) return r;
  return;
}

async function F0r(e, n) {
  let {session: s, storageV5: r, credentials: i} = e.toolUseContext(), l = s.pluginsSync.missingEntry, c = J(pQ(), n, {
    unref: !0
  }).then(() => {}), S = await Promise.race([ Z4t(s, i).catch(() => !1), c ]);
  if (n.throwIfAborted(), S === void 0) return !1;
  if (l.resync === null && Date.now() - l.resyncAt >= tt) {
    l.resyncAt = Date.now();
    let h = yKe(s, i).catch(() => !1).finally(() => {
      l.resync = null, l.swept = !1;
    });
    l.resync = h;
  }
  let y = l.resync;
  if (y !== null) await Promise.race([ y, c ]), n.throwIfAborted();
  if (l.resync === null && !l.swept) l.swept = !0, gd(r, i);
  return y !== null && l.resync !== y;
}

function Re({enabled: e, errors: n}, s) {
  let r = new Set(e.flatMap(Mpe).map(fr)), i = new Set;
  for (let c of n) if (c.type === "plugin-cache-miss") i.add(c.source);
  let l = new Set;
  for (let c of s?.enabled ?? []) if (i.has(c.source) && !r.has(fr(c.name))) l.add(c.source);
  return l;
}

function Y(e, n) {
  return e.flatMap(s => s.type === "prompt" && s.pluginSource !== void 0 && !Xm(s.pluginSource.sourceName) && n?.has(s.pluginSource.sourceName) !== !1 ? [ s.pluginSource ] : []);
}

function Ae(e, n, s, r) {
  return e.flatMap(i => i.source === "plugin" && i.pluginSource !== void 0 && !Xm(i.pluginSource.sourceName) && r?.has(i.pluginSource.sourceName) !== !1 && !Vcn(i.pluginSource, n, s?.[NLe(i.pluginSource.pluginPath)]) ? [ i.pluginSource ] : []);
}

function ut(e) {
  return e;
}

function mt(e) {
  return e.map(n => ({
    ...n,
    sha256: be(n.source, n.text)
  }));
}

async function W(e, n = !1, s) {
  let r = se();
  return (await Promise.all(e.map(async l => {
    let c = l.config?.metadata?.content, y = (n && c === "" ? void 0 : c) ?? await gT(r, l.filePath, K0e).catch(h => (s?.(h), 
    null));
    if (y === null) return t(`ListPluginCommands: ${l.filePath} could not be read again`, {
      level: "warn"
    }), [];
    return [ {
      source: l,
      text: y
    } ];
  }))).flat();
}

function Vcn(e, {enabled: n, errors: s}, r) {
  let i = n.find(S => S.source === e?.sourceName);
  if (i === void 0 || i.modulePath !== void 0 || r === null) return !0;
  let l = i.hooksConfig === void 0 ? i.manifest.hooks === void 0 && [] : dt(i.hooksConfig), c = r?.toSorted() ?? [];
  return !l || !zn(l, c) || l.length > 0 && (Hi(i.source) !== Mi || i.path !== e?.pluginPath) || s.some(S => "plugin" in S && S.plugin === i.name);
}

function dt(e) {
  let n = [];
  for (let [s, r] of Object.entries(e)) for (let {matcher: i, hooks: l} of r ?? []) for (let c of l) {
    if (c.type !== "command") return;
    n.push(yde([ s, i ?? "", Es(c, c.onFailure === "block" ? [ "cloud" ] : [ "cloud", "onFailure" ]) ]));
  }
  return n.sort();
}

export { uFo, H0r, pFo, fFo, mFo, gFo, hFo, yFo, D0r, _Fo, bFo, SFo, wFo, e5n, vFo, L0r, N0r, $0r, F0r, Vcn };
