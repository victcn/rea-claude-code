// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c2n, tft, u2n } from "./chunk-s2t7g8m9.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-jkzenvsk.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import { he } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { Wi, Ks, gJe, t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import { u8, QNe } from "./chunk-sqb9meyh.js";

import "./chunk-fdtwr731.js";

import { Cfn } from "./chunk-m8a4pjra.js";

import { age } from "./chunk-ym6w3bvh.js";

import { N } from "./chunk-hmqkrrtz.js";

var ee = 65536, te = 600, Q = 200, oe = 5e3, re = 3e5;

function Z(o) {
  return Math.min(600, Math.max(5, Math.round(o ?? 60)));
}

function ae(o, m) {
  if (o === void 0) return "unknown_template";
  if (!o.digests.some(v => v.sha256 === m.digest)) return "version_mismatch";
  if (m.event !== o.event || !u8(m.event)) return "event_not_allowed";
  return "awaiting_upload";
}

function ke(o) {
  let m = null, v = new Map, y = new Map;
  o.registry.onLeaseExpired(i => o.forwarder.removeForOwner(i.instanceId));
  let M = () => o.policy.pluginOnly() || o.policy.customizationDisabled() || o.policy.managedOnly() || o.policy.allDisabled(), b = () => {
    let i = o.registry.current();
    if (i !== null) o.forwarder.removeForOwner(i.instanceId), o.templateRunner.remove(i.instanceId);
    o.registry.clear(), y.clear(), o.templates.clear();
  }, I = async () => {
    let i = m !== null && !m.settled;
    if (m === null || m.settled) {
      let l = {
        promise: o.readAccountFlags(),
        startedAt: o.now(),
        settled: !1
      };
      l.promise.then(() => l.settled = !0, () => l.settled = !0), m = l;
    }
    let s = m, a = o.now(), c = Math.max(0, o.flagWaitCapMs - (a - s.startedAt));
    return {
      state: await We(s.promise.then(l => l ? "on" : "off", () => "pending"), c) ?? "pending",
      waitMs: o.now() - a,
      shared: i
    };
  }, E = async () => {
    let i = {
      flagWaitMs: 0,
      sharedFlagRead: !1
    };
    if (M()) return b(), {
      ok: !1,
      error: "hook_forwarding_disabled: policy",
      outcome: "disabled_policy",
      ...i
    };
    let s = await I(), a = {
      flagWaitMs: s.waitMs,
      sharedFlagRead: s.shared
    };
    if (s.state === "pending") return {
      ok: !1,
      error: "hook_forwarding_not_ready: feature flags not yet available; retry",
      outcome: "not_ready",
      ...a
    };
    if (s.state === "off") return b(), {
      ok: !1,
      error: "hook_forwarding_disabled: flag_off",
      outcome: "disabled_flag_off",
      ...a
    };
    if (M()) return b(), {
      ok: !1,
      error: "hook_forwarding_disabled: policy",
      outcome: "disabled_policy",
      ...a
    };
    return {
      ok: !0,
      ...a
    };
  }, O = async i => {
    let s = {
      flagWaitMs: 0,
      sharedFlagRead: !1
    };
    if (Wi(i).length > ee) return {
      ok: !1,
      error: "invalid_registration: request larger than 64 KiB",
      outcome: "invalid",
      ...s
    };
    let a = c2n().safeParse(i.request);
    if (!a.success) return {
      ok: !1,
      error: `invalid_registration: ${Ks(a.error.issues[0]?.message ?? "malformed", {
        maxCodeUnits: Q
      })}`,
      outcome: "invalid",
      ...s
    };
    if (a.data.worker_epoch !== void 0 && a.data.worker_epoch !== o.workerEpoch) return {
      ok: !1,
      error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`,
      outcome: "stale_epoch",
      ...s
    };
    let c = await E();
    return c.ok ? {
      ok: !0,
      parsed: a.data,
      flagWaitMs: c.flagWaitMs,
      sharedFlagRead: c.sharedFlagRead
    } : c;
  }, A = async i => {
    let s = await O(i);
    if (!s.ok) return o.telemetry.register({
      outcome: s.outcome,
      accepted: 0,
      ignored: 0,
      templatesAwaitingUpload: 0,
      templatesRefused: 0,
      flagWaitMs: s.flagWaitMs,
      sharedFlagRead: s.sharedFlagRead
    }), {
      kind: "error",
      error: s.error
    };
    let a = s.parsed, c = o.projectRoot(), u = o.cwd(), l = tft().safeParse({
      status: "unregistered",
      project_dir: c,
      cwd: u,
      worker_epoch: o.workerEpoch
    }).success, d = {
      project_dir: c,
      cwd: l ? u : c,
      worker_epoch: o.workerEpoch
    }, D = (e, n) => {
      if (o.registry.removeOwner(a.instance_id)) o.forwarder.removeForOwner(a.instance_id), 
      o.templateRunner.remove(a.instance_id);
      return y.delete(a.instance_id), o.telemetry.register({
        outcome: "unregistered",
        accepted: 0,
        ignored: e.length,
        templatesAwaitingUpload: 0,
        templatesRefused: n.length,
        flagWaitMs: s.flagWaitMs,
        sharedFlagRead: s.sharedFlagRead
      }), {
        kind: "success",
        response: {
          status: "unregistered",
          ...d,
          ...e.length > 0 && {
            ignored_ids: e.slice(0, 128)
          },
          ...n.length > 0 && {
            templates: [ ...n ]
          }
        }
      };
    };
    if (a.hooks.length === 0 && a.templates.length === 0) return D([], []);
    let k = [], _ = [], S = new Set;
    for (let e of a.hooks) {
      let n = age(e.id), p = e.matcher === void 0 || e.matcher === "" || e.matcher === "*" || QNe.test(e.matcher), W = S.has(e.id);
      if (S.add(e.id), W || n === null || n.instanceId !== a.instance_id || n.event !== e.event || !u8(e.event) || !p) {
        _.push(e.id);
        continue;
      }
      k.push({
        id: e.id,
        event: e.event,
        ...e.matcher !== void 0 && e.matcher !== "" && e.matcher !== "*" && {
          matcher: e.matcher
        },
        kind: e.kind,
        ...e.timeout_s !== void 0 && {
          timeoutS: e.timeout_s
        },
        source: e.source,
        hasCondition: e.has_condition === !0,
        targetPinned: e.target_pinned === !0
      });
    }
    let f = {}, R = new Map, g = new Map, r = new Set, T = y.get(a.instance_id) ?? new Map, h = new Map, U = e => {
      let n = T.get(e);
      if (n === void 0) return !1;
      return R.set(n.matcher, e), f[n.event] = [ ...f[n.event] ?? [], n.matcher ], h.set(e, n), 
      r.add(e), !0;
    }, q = (e, n) => {
      if (!Cfn(e) || !v.get(a.instance_id)?.has(e.id)) return;
      let p = {
        matcher: e.matcher,
        hooks: [ {
          type: "callback",
          timeout: n,
          callback: async () => (o.telemetry.templateStandInBlocked?.({
            template: e.id
          }), {
            decision: "block",
            reason: `cloud template ${e.id} could not be installed on this worker; matching calls are blocked until it is (register again to retry)`
          })
        } ]
      };
      R.set(p, e.id), f[e.event] = [ ...f[e.event] ?? [], p ], h.set(e.id, {
        event: e.event,
        matcher: p
      }), r.add(e.id);
    }, B = new Map(a.templates.map(e => [ e.template, e ]));
    for (let e of B.values()) {
      let n = o.templates.template(e.template), p = ae(n, e), W = p === "awaiting_upload" ? o.templates.bytesFor(e.digest) : void 0;
      if (n === void 0 || W === void 0) {
        if (g.set(e.template, {
          template: e.template,
          status: p
        }), !U(e.template) && n !== void 0) q(n, Z(e.timeout_s));
        continue;
      }
      let C = Z(e.timeout_s);
      if (await o.templateRunner.resolveInterpreter() === null) {
        if (g.set(e.template, {
          template: e.template,
          status: "interpreter_unavailable"
        }), !U(e.template)) q(n, C);
        continue;
      }
      let K;
      try {
        if (K = await We(o.templateRunner.prepare(n, e.digest, W, C), oe), K === void 0) throw Error("template prepare timed out");
      } catch (L) {
        if (t(`[deviceHooks] template ${e.template} install failed: ${L instanceof Error ? L.message : String(L)}`, {
          level: "error"
        }), g.set(e.template, {
          template: e.template,
          status: "install_failed"
        }), !U(e.template)) q(n, C);
        continue;
      }
      let j = {
        matcher: n.matcher,
        hooks: [ {
          type: "callback",
          timeout: C,
          callback: K
        } ]
      };
      R.set(j, n.id), f[n.event] = [ ...f[n.event] ?? [], j ], h.set(n.id, {
        event: n.event,
        matcher: j
      }), g.set(e.template, {
        template: e.template,
        status: "installed"
      });
    }
    let F = [ ...g.values() ];
    if (M()) return b(), o.telemetry.register({
      outcome: "disabled_policy",
      accepted: 0,
      ignored: 0,
      templatesAwaitingUpload: 0,
      templatesRefused: 0,
      flagWaitMs: s.flagWaitMs,
      sharedFlagRead: s.sharedFlagRead
    }), {
      kind: "error",
      error: "hook_forwarding_disabled: policy"
    };
    let G = a.lease_s ?? te, z = o.now() + G * 1e3, w = {
      instanceId: a.instance_id,
      displayName: Ks(a.display_name ?? "", {
        maxCodeUnits: gJe
      }) || a.instance_id,
      epoch: o.workerEpoch,
      leaseExpiresAt: z,
      entries: k,
      templates: [ ...B.values() ].flatMap(e => {
        let n = g.get(e.template)?.status, p = r.has(e.template) ? h.get(e.template)?.event ?? e.event : e.event;
        return (n === "awaiting_upload" || n === "installed" || r.has(e.template)) && u8(p) ? [ {
          template: e.template,
          digest: e.digest,
          event: p,
          ...e.timeout_s !== void 0 && {
            timeoutS: e.timeout_s
          }
        } ] : [];
      })
    };
    if (w.entries.length === 0 && w.templates.length === 0) return D(_, F);
    let {replaced: H, awaySince: X} = o.registry.replaceOwner(w);
    if (H !== void 0) o.forwarder.removeForOwner(H), o.templateRunner.remove(H), y.delete(H);
    o.forwarder.installForOwner(w), o.templateRunner.install(w.instanceId, f, (e, n) => R.get(n) ?? "template"), 
    y.set(w.instanceId, h);
    let Y = v.get(w.instanceId) ?? new Set;
    for (let e of g.values()) if (e.status === "installed") Y.add(e.template);
    v.set(w.instanceId, Y);
    let V = N(F, e => e.status === "awaiting_upload"), J = N(F, e => e.status === "installed");
    return o.telemetry.register({
      outcome: "accepted",
      accepted: k.length,
      ignored: _.length,
      templatesAwaitingUpload: V,
      templatesInstalled: J,
      templatesRefused: F.length - V - J,
      flagWaitMs: s.flagWaitMs,
      sharedFlagRead: s.sharedFlagRead
    }), {
      kind: "success",
      response: {
        status: "registered",
        ...d,
        lease_s: G,
        lease_expires_at: new Date(z).toISOString(),
        accepted: k.length,
        ignored: _.length,
        ..._.length > 0 && {
          ignored_ids: _.slice(0, 128)
        },
        templates: F,
        ...H !== void 0 && {
          replaced_owner: H
        },
        ...X !== void 0 && {
          away_since: new Date(X).toISOString()
        }
      }
    };
  }, P = 4e5, x = async i => {
    let s = (d, D = "unknown", k = 0) => o.telemetry.upload({
      outcome: d,
      template: D,
      bytes: k
    });
    if (Wi(i).length > P) return s("invalid"), {
      kind: "error",
      error: "invalid_upload: request larger than 400 KB"
    };
    let a = u2n().safeParse(i.request);
    if (!a.success) return s("invalid"), {
      kind: "error",
      error: `invalid_upload: ${Ks(a.error.issues[0]?.message ?? "malformed", {
        maxCodeUnits: Q
      })}`
    };
    let c = a.data;
    if (c.worker_epoch !== void 0 && c.worker_epoch !== o.workerEpoch) return s("stale_epoch", c.template), 
    {
      kind: "error",
      error: `stale_worker_epoch: worker epoch is ${o.workerEpoch}`
    };
    let u = await E();
    if (!u.ok) return s(u.outcome, c.template), {
      kind: "error",
      error: u.error
    };
    let l = o.templates.accept({
      template: c.template,
      digest: c.digest,
      contentBase64: c.content_base64
    });
    if (!l.ok) return s(l.kind, c.template), {
      kind: "error",
      error: l.error
    };
    return s(l.status, l.template.id, l.bytes), {
      kind: "success",
      response: {
        template: l.template.id,
        digest: c.digest,
        status: l.status
      }
    };
  };
  return {
    async handle(i) {
      switch (i.request.subtype) {
       case "register_device_hooks":
        return A(i);

       case "upload_device_hook_template":
        return x(i);

       default:
        return {
          kind: "error",
          error: `Unsupported control request subtype: ${i.request.subtype}`
        };
      }
    }
  };
}

function ne(o) {
  return o !== void 0 && Number.isInteger(o) && o >= 1 ? o : 1;
}

async function _e(o) {
  let [{isRestrictedToPluginOnly: m}, {isCustomizationDisabled: v}, {shouldHoldDeviceHooksByPolicy: y, shouldDisableAllHooksIncludingManaged: M}, {isAccountGateServed: b, isViolinAmatiEnabled: I}, {getToolServingFlagAnsweredOff: E, isToolServingEnabled: O}, {refreshGrowthBookFeatures: A}, {createDeviceHookRegistry: P, productionRegistryTimer: x}, {createDeviceHookForwarder: i, productionForwarderTimer: s}, {createDeviceHookTemplateStore: a}, {productionDeviceHookTemplateRunner: c, telemetryTemplateId: u}, {logEvent: l}, {fromEnum: d}, {logFeatureBad: D, logFeatureOk: k, logFeatureSad: _}] = await Promise.all([ import("./chunk-cjkg5jrm.js"), import("./chunk-14cf2qz7.js"), import("./chunk-rd8fpbgb.js"), import("./chunk-0zax5h1j.js"), import("./chunk-z8wq19zh.js"), import("./chunk-qt993hka.js"), import("./chunk-cgeq37r6.js"), import("./chunk-wjd7ef28.js"), import("./chunk-w0v5pqrd.js"), import("./chunk-6gsmwgtg.js"), import("./chunk-4q7vvg1t.js"), import("./chunk-ktdk9ckq.js"), import("./chunk-pph01nnm.js") ]), S = P({
    now: Date.now,
    setTimer: x,
    onLeaseExpired: () => l("tengu_device_hooks_lease_expired", {})
  }), f = i({
    registry: S,
    sender: o.sender,
    toolAliases: o.toolAliases,
    now: Date.now,
    setTimer: s,
    telemetry: {
      forwarded: r => l("tengu_device_hook_forwarded", {
        event: d(r.event),
        outcome: d(r.outcome),
        fields_dropped: r.fieldsDropped,
        blocked: r.blocked,
        rtt_ms: r.rttMs,
        error_replies_ignored: r.errorRepliesIgnored,
        malformed_replies_ignored: r.malformedRepliesIgnored
      })
    }
  }), R = {
    policy: {
      pluginOnly: () => m("hooks"),
      customizationDisabled: () => v("hooks"),
      managedOnly: y,
      allDisabled: M
    },
    readAccountFlags: async () => {
      let [r, T] = await Promise.all([ O({
        cloudClient: !0
      }), I() ]);
      if (r && T) return !0;
      let h = E({
        cloudClient: !0
      }) ?? (!T && b("tengu_violin_amati") ? "tengu_violin_amati" : void 0);
      if (h === void 0) throw A().catch(() => {}), Error("account flags not served yet");
      return l("tengu_device_hooks_account_flag_off", {
        flag: d(h)
      }), !1;
    },
    flagWaitCapMs: 5e3,
    now: Date.now,
    workerEpoch: ne(o.workerEpoch),
    projectRoot: o.projectRoot,
    cwd: o.cwd,
    registry: S,
    forwarder: f,
    templates: a(),
    templateRunner: he() ? {
      resolveInterpreter: async () => null,
      prepare: async () => {
        throw Error("no device hook templates in a diskless session");
      },
      install: () => {},
      remove: () => {}
    } : c(o.projectRoot),
    telemetry: {
      templateStandInBlocked: r => l("tengu_device_hook_template_run", {
        template: d(u(r.template)),
        outcome: d("stand_in_blocked"),
        duration_ms: 0
      }),
      upload: r => l("tengu_device_hook_template_upload", {
        outcome: d(r.outcome),
        template: d(u(r.template)),
        bytes: r.bytes
      }),
      register: r => {
        if (l("tengu_device_hooks_register", {
          outcome: d(r.outcome),
          accepted: r.accepted,
          ignored: r.ignored,
          templates_awaiting_upload: r.templatesAwaitingUpload,
          templates_installed: r.templatesInstalled ?? 0,
          templates_refused: r.templatesRefused,
          flag_wait_ms: r.flagWaitMs,
          shared_flag_read: r.sharedFlagRead
        }), r.outcome === "accepted" || r.outcome === "unregistered") k("device_hooks_register", {
          accepted: r.accepted
        }); else if (r.outcome === "not_ready") _("device_hooks_register", r.outcome); else D("device_hooks_register", r.outcome);
      }
    }
  }, g = Date.now();
  return {
    ...R,
    readAccountFlags: () => {
      let r = Date.now();
      if (r - g >= re) g = r, A().catch(() => {});
      return R.readAccountFlags();
    }
  };
}

export { ke as createDeviceHooksWorker, _e as productionDeviceHooksWorkerDeps };
