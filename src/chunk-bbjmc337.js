// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { bt, t } from "./chunk-kawq2919.js";

import { Chs, oLn, sLn, xhs } from "./chunk-sqb9meyh.js";

import { BKt } from "./chunk-kccdz4ey.js";

import { VFo, Yme } from "./chunk-1tj0g23e.js";

import { x6r, P6r } from "./chunk-d5htr85c.js";

import { QMt } from "./chunk-xmqqa853.js";

import { WFt } from "./chunk-gb3329f1.js";

import { p2 } from "./chunk-tfmnxgqc.js";

import { jle } from "./chunk-tqxwcs8r.js";

import { Zhe } from "./chunk-avrjq9ek.js";

async function SLr(e) {
  let o = e.session.then(r => ({
    read: !0,
    session: r
  }), r => ({
    read: !1,
    error: r
  }));
  if (!await (e.isEnabled ?? QMt)().catch(() => !1)) return {
    status: "disabled"
  };
  let s = await o;
  if (!s.read) return B("session_unreadable", s.error);
  if (s.session.archived) return {
    status: "disabled"
  };
  if (s.session.boundDeviceId === void 0) {
    let r = await (e.readUnboundCreateReason ?? (A => x6r(A, Chs, P6r(e.storageV5))))(e.sessionId).catch(() => {});
    return i("tengu_device_bind_attach", {
      outcome: b("session_unbound"),
      created_here: r !== void 0
    }), r === void 0 ? {
      status: "not_applicable"
    } : {
      status: "created_unbound",
      reason: r
    };
  }
  let d;
  try {
    d = (e.isEgressAllowed ?? Zhe)();
  } catch {
    d = !1;
  }
  if (!d) return y("egress");
  let n = await (e.getAccount?.() ?? jle(e.credentials));
  if (n.status === "missing") return y("account");
  if (n.status === "mismatch") return y("account_mismatch");
  let u = await (e.loadLocalDevice?.(n.accountUuid) ?? BKt(n.accountUuid, e.credentials)).then(r => ({
    read: !0,
    held: r
  }), r => ({
    read: !1,
    error: r
  }));
  if (!u.read) return B("local_device_unreadable", u.error);
  if (u.held === void 0) return y("no_device_here");
  let v = u.held.rowPk.toLowerCase();
  if (v !== s.session.boundDeviceId.toLowerCase()) return y("other_device");
  let {toolHostLink: h} = s.session;
  return i("tengu_device_bind_attach", {
    outcome: b("bound"),
    tool_host_link: c(h)
  }), g("device_bind_attach"), {
    status: "bound",
    deviceId: v,
    held: u.held,
    toolHostLink: h
  };
}

function wLr(e) {
  return {
    archived: e.session_status === "archived",
    boundDeviceId: e.bound_device_uuid,
    toolHostLink: VFo(e.tool_host_status, e.device_bind_posture)
  };
}

async function EKs(e, {isEnabled: o = QMt, isEgressAllowed: s = Zhe} = {}) {
  if (e.catch(() => {}), !await o().catch(() => !1)) return;
  let {archived: d, boundDeviceId: n} = await e;
  if (d) return;
  try {
    return s() ? n : void 0;
  } catch {
    return;
  }
}

function vLr(e) {
  return e.then(o => o.status === "bound", () => !1);
}

function ELr(e) {
  return e.then(o => o.status === "bound" ? o.deviceId : void 0, () => {});
}

function kLr(e) {
  return e.then(o => o.status === "bound" ? o.held : void 0, () => {});
}

function k({viewerOnly: e, binding: o}) {
  return !e && o.status === "bound" && Yme(o.toolHostLink) ? {
    owner: !0,
    deviceId: o.deviceId
  } : {
    owner: !1
  };
}

async function k5n(e, o) {
  try {
    let s = await o();
    return s.session_status !== "archived" && typeof s.bound_device_uuid === "string" && s.bound_device_uuid.toLowerCase() === e.toLowerCase();
  } catch (s) {
    t(`[attachBinding] re-reading the session's binding failed (keeping it): ${l(s)}`);
    return;
  }
}

async function kKs({sessionId: e, binding: o, deviceBridge: s, onNotice: d, repositoryTrust: n, readSession: u}) {
  return (await import("./chunk-apdt5qne.js")).servedToolsAttachOptions({
    owner: o.then(v => {
      let h = k({
        viewerOnly: !1,
        binding: v
      });
      return () => h;
    }, () => () => ({
      owner: !1
    })),
    cloudClient: !0,
    ...s && {
      deviceBridge: s
    },
    ...d && {
      onNotice: d
    },
    ...n && {
      repositoryTrust: n
    },
    stillBound: () => o.then(v => v.status === "bound" ? k5n(v.deviceId, u) : void 0, () => {}),
    plumbing: (await import("./chunk-p6ks0mj2.js")).servedSessionPlumbing(e)
  });
}

var TLr = "This session can run tools on this computer, so Claude Code must first keep a copy of this folder's settings, and it could not. Check free disk space and that ~/.claude/state can be written, then attach again; add --debug to see the cause.";

function ALr(e, o = {}) {
  let s = {
    status: "disabled"
  }, d = (a, p) => t(`[remote-tools] ${a}: ${p}`), n = [], u = a => {
    let p = n ?? [];
    n = void 0, p.forEach(([_, D]) => {
      try {
        a(_, D);
      } catch {
        d(_, D);
      }
    });
  }, v = o.onNotice ?? d, h = !1, r, A, S = e.catch(a => (t(`[deviceBind] attach binding failed unexpectedly: ${l(a)}`), 
  s)).then(async a => {
    if (a.status !== "bound" || Yme(a.toolHostLink)) return a;
    if (h) return s;
    let p = o.loadHoldSettings ? await o.loadHoldSettings() : (await import("./chunk-t85e3s6w.js")).holdSettingsBesideAHelper;
    if (h) return s;
    return r = p((_, D) => n ? void n.push([ _, D ]) : v(_, D)), A = bt(async () => r?.end()), 
    u(v), a;
  });
  return S.then(() => {
    if (r !== void 0) g("attach_settings_held_beside_helper");
  }, a => {
    m("attach_settings_held_beside_helper", "hold_failed"), u(d), t(`[deviceBind] attach could not hold the settings beside the session's helper: ${l(a)}`);
  }).catch(() => {}), {
    binding: S.catch(() => s),
    kept: S.then(() => !0, () => !1),
    end: () => {
      h = !0, A?.(), r?.end();
    }
  };
}

function CLr(e) {
  let o = e.binding.catch(n => (t(`[deviceBind] attach binding failed unexpectedly: ${l(n)}`), 
  {
    status: "disabled"
  })), s = !1, d;
  return o.then(n => {
    if (s || n.status !== "bound" || !Yme(n.toolHostLink)) return;
    d = (e.startRegistration ?? WFt)({
      sessionId: e.sessionId,
      getAccessToken: e.getAccessToken,
      orgUuid: e.orgUuid,
      getDeviceId: () => n.deviceId,
      cloudClient: e.cloudClient,
      storageV5: e.storageV5,
      ...e.dirSync !== void 0 && {
        dirSync: e.dirSync
      },
      ...e.folderRelation !== void 0 && {
        folderRelation: e.folderRelation
      },
      ...e.onNotice && {
        onNotice: e.onNotice
      },
      ...e.servedSettingsChanged && {
        servedSettingsChanged: e.servedSettingsChanged
      },
      ...e.deviceMcpQuestion && {
        deviceMcpQuestion: e.deviceMcpQuestion
      }
    });
  }).catch(n => {
    t(`[deviceBind] attach could not start the device registration: ${l(n)}`);
  }), {
    announceSettled: n => d?.announceSettled(n),
    serving: o.then(() => d?.serving),
    notice: o.then(n => n.status === "unbound" ? {
      text: sLn(n.reason),
      toast: !0
    } : n.status === "created_unbound" ? {
      text: oLn(n.reason),
      toast: !0
    } : n.status === "bound" && e.toolServingOn && !Yme(n.toolHostLink) ? xhs(n.toolHostLink) : void 0),
    stop: async () => {
      s = !0, await (d?.stop());
    },
    heldServedCall: n => d?.heldServedCall(n) ?? p2
  };
}

function y(e) {
  return i("tengu_device_bind_attach", {
    outcome: c(e)
  }), f("device_bind_attach", e), {
    status: "unbound",
    reason: e
  };
}

function B(e, o) {
  if (i("tengu_device_bind_attach", {
    outcome: c(e)
  }), e === "session_unreadable") f("device_bind_attach", e); else m("device_bind_attach", e);
  return t(`[deviceBind] attach could not check the session's binding (${e}): ${l(o)}`), 
  {
    status: "unbound",
    reason: e
  };
}

export { SLr, wLr, EKs, vLr, ELr, kLr, k5n, kKs, TLr, ALr, CLr };
