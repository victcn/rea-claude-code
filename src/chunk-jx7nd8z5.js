// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { l, jt } from "./chunk-b0z4bv3v.js";

import { q, Ze, he } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { UO } from "./chunk-xywp7esx.js";

import { Pr } from "./chunk-z52kmxx4.js";

import { bt, t, gq } from "./chunk-kawq2919.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { fe } from "./chunk-dd98x6x7.js";

import { Gue, e_ } from "./chunk-h36n2zxz.js";

import { XCn, NM, tts, nts, aQr, oRn, Wb, ire, Ocr, jeo, zeo, _6t, mis, Dcr, Lcr, b6t, lIn, ni, Rro, xro, rl } from "./chunk-84yp45y8.js";

import { lv } from "./chunk-zqby5cq4.js";

import { j7, W7 } from "./chunk-67jt18z1.js";

import { mF } from "./chunk-bkx9v5fh.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { bHn, qre, IRt, Yre, XW } from "./chunk-bv9f914r.js";

import { PS } from "./chunk-mtek6k5r.js";

import { mf } from "./chunk-2xhrgh8h.js";

import { zzt, cet } from "./chunk-1qb8qq9s.js";

import { Xq } from "./chunk-zq9zyfkg.js";

import { ose } from "./chunk-yz2w7bj4.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var L = {};

Nr(L, {
  DEV_MODS_PLACEHOLDER: () => nr,
  default: () => L
});

var ao = {
  explain: "explain",
  allow: "enable",
  not_now: "decline"
};

var fo = {
  no_one_to_ask: "no_one_to_ask",
  host_closed: "closed",
  no_selection: "unpicked",
  error: "retry"
};

function mo(o) {
  switch (o.kind) {
   case "chose":
    return ao[o.value];

   case "declined":
    return "decline";

   case "aborted":
    return "withdrawn";

   case "unanswered":
    return fo[o.reason];
  }
}

var lo = 2e3;

var W = o => o === "now" ? "now" : "when this turn ends";

var G = "this session's folder";

function X(o) {
  let e = mF(o);
  if (e === null) return `${G} (${Os(o)})`;
  return `[${G}](${e.replaceAll("(", "%28").replaceAll(")", "%29")})`;
}

var po = (o, e) => `Mods in ${X(o)} load ${W(e)} and reload when their files change. They run with your permissions.`;

var te = [ {
  value: "explain",
  label: "How does this work?"
}, {
  value: "allow",
  label: "Enable for this session"
}, {
  value: "not_now",
  label: "Not now"
} ];

var co = (o, e) => [ `Mods live in ${X(o)}.`, "A mod is code Claude wrote; it runs with your permissions.", `Enable: they load ${W(e)} and reload when their files change.`, "Enable holds for this session, also after a restart.", "Not now: they stay unloaded until this session next starts.", "/plugin lists what loaded and turns it off." ].join(`\n`);

var ne = "Mods";

var N = "Enable hot reloading for this session?";

var de = (o, e) => `${N}\n\n${po(o, e)}`;

var ae = "mod_hot_reload";

var me = (o, e) => `${N}\n\n${co(o, e)}`;

var ho = 3;

async function Z(o, e) {
  let r = lIn.isRunning() ? "turn-end" : "now", n = e === 0 ? de(o.folder, r) : me(o.folder, r), i = mo(await cet({
    canUseTool: o.binding.canUseTool,
    toolUseContext: o.binding.toolContext(o.abortController),
    source: ae,
    header: ne,
    question: n,
    choices: te,
    personOnly: !0
  }));
  if (i !== "explain") return i;
  return g("plugin_dev_mods", {
    answer: b("explain")
  }), e < ho ? Z(o, e + 1) : "decline";
}

var xo = {
  no_one_to_ask: "no_one_to_ask",
  closed: "host_closed",
  unpicked: "no_selection"
};

async function yo(o, e) {
  let r = Wb();
  if (r === void 0) return f("plugin_dev_mods", "no_session"), "no_one_to_ask";
  let s = new AbortController;
  e?.addEventListener("abort", () => s.abort(), {
    once: !0
  });
  try {
    let n = await Z({
      binding: r,
      folder: o,
      abortController: s
    }, 0), i = xo[n];
    return i === void 0 ? g("plugin_dev_mods", {
      answer: c(n)
    }) : f("plugin_dev_mods", i), n;
  } catch (n) {
    return t(`dev mods: the ask failed, asked again later: ${l(n)}`, {
      level: "error"
    }), "retry";
  }
}

function I() {
  let o = Wb();
  if (o === void 0) return !0;
  try {
    return zzt(o.toolContext(new AbortController));
  } catch (e) {
    return t(`dev mods: no context to ask in yet: ${l(e)}`, {
      level: "error"
    }), !0;
  }
}

import { join as xe } from "path";

var R = o => xe(ose(), o);

var vo = [ {
  refusal: "diskless",
  isRefused: he
}, {
  refusal: "hooks_modules_off",
  isRefused: () => !PS()
}, {
  refusal: "all_hooks_disabled",
  isRefused: e_
}, {
  refusal: "sideload_disabled",
  isRefused: W7
}, {
  refusal: "local_dirs_blocked",
  isRefused: () => !j7()
}, {
  refusal: "managed_hooks_only",
  isRefused: () => fe("policySettings")?.allowManagedHooksOnly === !0
}, {
  refusal: "hooks_disabled_in_settings",
  isRefused: Gue
}, {
  refusal: "safe_mode",
  isRefused: Pr
}, {
  refusal: "bare_mode",
  isRefused: () => Sr("hooks")
}, {
  refusal: "untrusted",
  isRefused: () => !UO()
} ];

function x() {
  return vo.find(o => o.isRefused())?.refusal;
}

function P() {
  let o = x();
  if (o !== void 0) f("plugin_dev_mods", o), t(`dev mods: mod hot-reloading is off here (${o})`);
  return o;
}

import { mkdir as qe } from "fs/promises";

import { basename as Wo } from "path";

var wo = 3;

function Do(o, e) {
  let r = new Set, s = new Set(e.loaded), n = !1, i = !1, d = !1, p, a = 0, S = Number.NEGATIVE_INFINITY, v = !1, V = 0, T = !1, Y = !1, w = !1, C, Ko = e.watchRoot(o, () => {
    n = !0, ro();
  }), Bo = e.turn.onBegin(() => {
    if (a += 1, !(p !== void 0 && !p.signal.aborted && e.turn.isPersonTurn())) return;
    if (p?.abort(), !T) T = !0, e.unanswered();
  }), Vo = e.turn.onEnd(() => void Q(Yo));
  function eo() {
    C?.(), C = void 0;
  }
  function ro() {
    if (w || i) return;
    if (eo(), e.turn.isRunning()) {
      Q(F);
      return;
    }
    C = e.clock.setTimeout(() => void Q(F), e.quietMs);
  }
  async function Q(u) {
    try {
      await u();
    } catch (H) {
      t(`dev mods: the watch on ${o} failed: ${l(H)}`, {
        level: "error"
      });
    }
  }
  async function Yo() {
    if (d) {
      d = !1;
      for (let u of await e.listChildren(o) ?? []) r.add(u);
    }
    if (i) {
      await to();
      return;
    }
    if (v) v = !1, await F();
  }
  async function to() {
    if (w) return;
    if (e.refusal()) {
      await E(), e.stopped("refused");
      return;
    }
    await Promise.all([ E(), e.enable(o) ]), e.stopped("enabled");
  }
  async function F() {
    C = void 0;
    let u = e.turn.isRunning() && n && S === Number.NEGATIVE_INFINITY, H = w || i, Qo = e.turn.isRunning() && !u;
    if (H || Y || Qo || S === a) {
      v = !H;
      return;
    }
    Y = !0;
    let so = !1;
    try {
      let z = u ? [] : (await e.listChildren(o) ?? []).filter(A => !r.has(A)), qo = u || z.length > 0 && (n || z.some(A => !s.has(A)));
      if (w || !qo) return;
      if (e.turn.isRunning() && !u) {
        v = !0;
        return;
      }
      if (e.refusal()) {
        await E(), e.stopped("refused");
        return;
      }
      S = a;
      let no = new AbortController;
      p = no;
      let io = await e.ask(o, no.signal).finally(() => {
        p = void 0;
      });
      if (w) return;
      switch (io) {
       case "enable":
        if (e.turn.isRunning() && !e.refusal()) {
          i = !0, e.deferred();
          return;
        }
        await to();
        return;

       case "decline":
        {
          T = !1, V = 0, d = e.turn.isRunning();
          let A = await e.listChildren(o);
          for (let zo of [ ...z, ...A ?? [] ]) r.add(zo);
          return;
        }

       case "withdrawn":
        if (e.withdrawn(), !T) T = !0, e.unanswered();
        v = !0;
        return;

       case "retry":
        v = !0;
        return;

       case "closed":
       case "unpicked":
        if (!T) T = !0, e.unanswered();
        if (V += 1, V >= wo) {
          await E(), e.stopped("no_pick");
          return;
        }
        if (io === "unpicked") {
          S = e.turn.isRunning() ? a - 1 : a, v = !0;
          return;
        }
        S = a - 1, so = !0;
        break;

       case "no_one_to_ask":
        await E(), e.stopped("no_one_to_ask");
        return;
      }
    } finally {
      Y = !1;
    }
    if (so) await F();
  }
  async function E() {
    if (w) return;
    w = !0, v = !1, eo(), p?.abort(), Bo(), Vo(), await Ko.close();
  }
  return ro(), {
    declined: () => [ ...r ],
    isClosed: () => w,
    dispose: E
  };
}

var _o = "Mod hot-reloading is on; this session's mods load when this turn ends.";

function ko(o, e) {
  let r = NM.get();
  if (r?.stage !== "watching" || r.folder !== o) return;
  switch (e) {
   case "refused":
    NM.set({
      stage: "wanted",
      folder: o,
      ...r.loaded !== void 0 && {
        loaded: r.loaded
      }
    });
    return;

   case "no_one_to_ask":
   case "no_pick":
    NM.set({
      stage: "off",
      folder: o
    });
    return;

   case "enabled":
    return;
  }
}

import { utimes as be } from "fs/promises";

async function D(o) {
  let e = new Date;
  await be(o, e, e).catch(r => t(`dev mods: ${o} keeps its old time: ${l(r)}`));
}

function U() {
  if (nts.get() !== void 0) return;
  nts.set(lIn.onEnd(() => {
    try {
      for (let o of [ ...qre.get() ?? [], ...IRt.get() ?? [] ]) D(o);
    } catch (o) {
      t(`dev mods: the turn-end refresh failed: ${l(o)}`, {
        level: "error"
      });
    }
  }));
}

import { basename as Mo } from "path";

function O(o, e, r) {
  let s = r === "enable_failed" ? "enabling" : "loading";
  return XW(Mo(o), Ocr(Mo(o), e)), m("plugin_dev_mods", r), t(`dev mods: ${s} ${o} failed: ${l(e)}`, {
    level: "error"
  }), "failed";
}

function To(o, e, r) {
  return {
    root: o,
    before: new Map,
    after: r.after,
    present: r.present,
    outcome: e
  };
}

function bo(o, e) {
  let r = o === "new";
  switch (e) {
   case "reloaded":
    return r ? "loaded from this session's mods folder" : "unloaded (gone from this session's mods folder)";

   case "not-loaded":
    return "in this session's mods folder, not loaded; /plugin shows why";

   case "held":
    return "in this session's mods folder, on hold: /reload-plugins applies it";

   case "unbound":
    return "in this session's mods folder; restart to apply";
  }
}

async function So(o, e, r) {
  let s = await Lcr(o) ?? [], i = e === "reloaded" ? await ni(r.storageV5, r.credentials) : {
    enabled: [],
    disabled: []
  }, [d] = mis([ ...i.enabled, ...i.disabled ], [ o ]), p = d?.loaded ?? new Map;
  for (let a of jeo(To(o, e, {
    present: s,
    after: p
  }), bo)) Yre(a.plugin, a.text);
}

async function j(o, e) {
  let r = Wb()?.toolContext(new AbortController);
  await So(o, e, {
    storageV5: r?.storageV5,
    credentials: r?.credentials
  }).catch(s => t(`dev mods: the lines for ${o} were not told: ${l(s)}`, {
    level: "error"
  }));
}

async function K(o) {
  try {
    await (ire.get()?.joinPluginDir(o));
  } catch (e) {
    let r = NM.get();
    if ((r?.stage === "watching" || r?.stage === "consented") && r.folder === o) NM.set({
      stage: "wanted",
      folder: o,
      ...r.stage === "watching" && r.loaded !== void 0 && {
        loaded: r.loaded
      }
    });
    return O(o, e, "enable_failed"), {
      kind: "off",
      reason: l(e)
    };
  }
  try {
    NM.set({
      stage: "enabled",
      folder: o
    }), qre.set(Xq(qre.get() ?? [], [ o ])), U(), await D(o), await J(0);
    let e = Wb()?.toolContext(new AbortController);
    Rro(o, e?.storageV5);
    let r = await b6t();
    return await j(o, r), g("plugin_dev_mods", {
      enabled: !0
    }), {
      kind: "enabled",
      load: r
    };
  } catch (e) {
    return {
      kind: "enabled",
      load: O(o, e, "enable_failed")
    };
  }
}

function Eo(o, e) {
  switch (e) {
   case "reloaded":
    return `The person enabled mod hot-reloading for this session and the mods under ${o} loaded: they load and reload by themselves as their files change; the transcript names any mod that failed.`;

   case "held":
    return `The person enabled mod hot-reloading for this session, but the mods under ${o} wait for /reload-plugins (the load would rewrite the prompt cache): they are NOT loaded yet.`;

   case "unbound":
    return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (this session cannot reload its plugins; only a restart loads them).`;

   case "failed":
    return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`;
  }
}

function Ro(o, e) {
  switch (e.kind) {
   case "enabled":
    return Eo(o, e.load);

   case "declined":
    return `The person declined mod hot-reloading: what this run wrote under ${o} is written but NOT loaded (a mod that loaded when the session started keeps running as it loaded). Do not say the change is running. It loads the next time this session starts (/reload-plugins reloads only a mod that loaded at the start); the person can ask again.`;

   case "unanswered":
    return `The person has not answered the mod hot-reloading question yet; it is asked again once a turn ends. What this run wrote under ${o} is written but NOT loaded yet. Do not say it was declined, and do not suggest --plugin-dir or a restart.`;

   case "off":
    return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`;
  }
}

var _ = (o, e) => rl({
  agentId: Ze(),
  value: Ro(o, e),
  mode: "task-notification",
  skipAttachments: !0,
  passive: !0,
  priority: "next"
});

var hzt = "nobody could be asked";

function B(o) {
  if (aQr.get() === o) return;
  aQr.set(o), _(o, {
    kind: "off",
    reason: hzt
  });
}

var Po = "the question got no pick three times";

var Ao = {
  hooks_modules_off: "hooks modules are switched off in this process",
  all_hooks_disabled: "the organization disables all hooks",
  sideload_disabled: "the organization forbids side-loaded plugins",
  local_dirs_blocked: "the organization blocks plugins from local folders",
  managed_hooks_only: "the organization allows only managed hooks",
  hooks_disabled_in_settings: "hooks are turned off in your settings (disableAllHooks)",
  safe_mode: "the session runs in safe mode",
  diskless: "this kind of cloud session has no disk to load mods from",
  bare_mode: "the session runs in bare mode",
  untrusted: "the workspace is not trusted"
};

function Oo(o, e) {
  switch (o) {
   case "enabled":
    return;

   case "refused":
    if (e === void 0) return;
    return {
      kind: "off",
      reason: Ao[e]
    };

   case "no_one_to_ask":
    return {
      kind: "off",
      reason: hzt
    };

   case "no_pick":
    return {
      kind: "off",
      reason: Po
    };
  }
}

function Lo(o, e) {
  let r = Oo(e, x());
  if (e === "no_one_to_ask") B(o); else if (r !== void 0) _(o, r);
}

var Co = {
  kind: "unanswered"
};

function Fo(o, e) {
  let r = lv.watch(o, {
    persistent: !0,
    ignoreInitial: !0,
    followSymlinks: !1,
    ignorePermissionErrors: !0,
    ignored: zeo(o, gq(), () => !1),
    usePolling: !0,
    interval: _6t,
    binaryInterval: _6t
  }), s = () => e();
  return r.on("add", s), r.on("addDir", s), r.on("change", s), r.on("unlink", s), 
  r.on("unlinkDir", s), r.on("error", n => t(`dev mods: the watch on ${o}: ${l(n)}`, {
    level: "warn"
  })), {
    close: () => r.close()
  };
}

var Ho = "Mod hot-reloading was not answered; it will be asked again once a turn ends.";

async function k() {
  try {
    let o = NM.get();
    if (o?.stage !== "wanted") return;
    if (x() !== void 0) return;
    if (!I()) {
      if (f("plugin_dev_mods", "no_one_to_ask"), NM.set({
        stage: "off",
        folder: o.folder
      }), o.loaded === void 0) B(o.folder);
      return;
    }
    await qe(o.folder, {
      recursive: !0
    });
    let e = NM.get();
    if (e?.stage !== "wanted") return;
    let {folder: r, loaded: s} = e, n = {}, i = Do(r, {
      watchRoot: Fo,
      loaded: s ?? [],
      listChildren: Lcr,
      refusal: P,
      ask: async (d, p) => {
        let a = await yo(d, p);
        if (a !== "no_one_to_ask" && a !== "retry") aQr.set(void 0);
        if (a === "decline") _(d, {
          kind: "declined"
        });
        return a;
      },
      enable: async d => _(d, await K(d)),
      deferred: () => Yre(Wo(r), _o),
      withdrawn: () => Yre(Wo(r), Ho),
      unanswered: () => _(r, Co),
      stopped: d => {
        n.release?.(), ko(r, d), Lo(r, d);
      },
      clock: Dcr,
      turn: lIn,
      quietMs: lo
    });
    NM.set({
      stage: "watching",
      folder: r,
      watch: i,
      ...s !== void 0 && {
        loaded: s
      }
    }), n.release = bt(() => i.dispose());
  } catch (o) {
    t(`dev mods: the watch did not start: ${l(o)}`, {
      level: "error"
    });
  }
}

import { readdirSync as Je } from "fs";

import { join as or } from "path";

import { statSync as Ge } from "fs";

function No(o) {
  try {
    return Ge(o, {
      throwIfNoEntry: !1
    })?.isFile() === !0;
  } catch (e) {
    if (jt(e)) return !1;
    throw e;
  }
}

function Io(o) {
  try {
    return Je(o, {
      withFileTypes: !0
    }).filter(e => (e.isDirectory() || e.isSymbolicLink()) && oRn(e.name)).map(e => e.name).filter(e => No(or(o, e, mf))).toSorted();
  } catch (e) {
    if (jt(e)) return;
    throw e;
  }
}

async function $o(o) {
  try {
    let e = Io(o);
    if (e === void 0 || e.length === 0) {
      let r = e !== void 0 && I();
      NM.set(r ? {
        stage: "wanted",
        folder: o,
        loaded: e
      } : void 0), await k();
      return;
    }
    NM.set({
      stage: "wanted",
      folder: o,
      loaded: e
    }), IRt.set(Xq(IRt.get() ?? [], [ o ])), await (ire.get()?.joinPluginDir(o)), U(), 
    await D(o), await J(0), await j(o, await b6t()), g("plugin_dev_mods", {
      loaded_at_start: !0
    }), await k();
  } catch (e) {
    let r = NM.get();
    if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === o) NM.set({
      stage: "wanted",
      folder: o
    }), k();
    O(o, e, "load_failed");
  }
}

function M() {
  try {
    let o = NM.get();
    switch (o?.stage) {
     case "consented":
      if (x() === void 0) K(o.folder);
      return;

     case "present":
      if (x() === void 0) $o(o.folder);
      return;

     case "wanted":
      k();
      return;

     case "enabled":
      D(o.folder);
      return;

     case void 0:
     case "watching":
     case "off":
      return;
    }
  } catch (o) {
    t(`dev mods: the catch-up failed: ${l(o)}`, {
      level: "error"
    });
  }
}

async function Uo() {
  let o = NM.get(), e = R(q());
  try {
    if (o?.stage === "watching" && o.folder !== e) await o.watch.dispose();
    let r = NM.get(), s = r !== void 0 && r.folder !== e, n = r === void 0 || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
    if (s || n) NM.set({
      stage: "wanted",
      folder: e
    });
    if (bHn.set(M), P() === void 0) await k();
  } catch (r) {
    t(`dev mods: handing out ${e} started nothing: ${l(r)}`, {
      level: "error"
    });
  }
  return e;
}

var nr = "${CLAUDE_DEV_MODS_DIR}";

async function p2r(o, e) {
  let {DEV_MODS_PLACEHOLDER: r} = L;
  if (!o.includes(r)) return o;
  let s = e.isPreload ? R(q()) : await Uo();
  return o.replaceAll(r, s);
}

function jo() {
  let o = R(q()), e = NM.get();
  if (e !== void 0 && e.folder === o && e.stage !== "off") return;
  if (e?.stage === "watching") e.watch.dispose().catch(s => t(`dev mods: the watch did not close: ${l(s)}`));
  NM.set({
    stage: "present",
    folder: o
  }), bHn.set(M), M();
}

import { mkdirSync as fr } from "fs";

function m7n() {
  tts.set(p2r);
  try {
    let o = xro(), e = NM.get();
    if (!(o !== void 0 && XCn(o, q()) && !(e?.stage === "enabled" && e.folder === o))) {
      jo();
      return;
    }
    if (e?.stage === "watching") e.watch.dispose().catch(s => t(`dev mods: the watch did not close: ${l(s)}`));
    if (NM.set({
      stage: "consented",
      folder: o
    }), bHn.set(M), P() === void 0) fr(o, {
      recursive: !0
    }), M();
  } catch (o) {
    t(`dev mods: the restore failed: ${l(o)}`, {
      level: "error"
    });
  }
}

export { hzt, p2r, m7n };
