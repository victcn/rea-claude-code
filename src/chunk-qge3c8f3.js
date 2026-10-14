// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { QOe, eYn, VHr, Jje } from "./chunk-3pqddg8f.js";

import { b } from "./chunk-hwdwjvh8.js";

import { x, Mr, j, E, zr } from "./chunk-b0z4bv3v.js";

import { li } from "./chunk-zvghq5er.js";

import { _, Y } from "./chunk-kawq2919.js";

import { Ak } from "./chunk-9yajep3y.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { X } from "./chunk-1zg3hbfq.js";

import { Pv } from "./chunk-5brm0azz.js";

import { RN } from "./chunk-km6d4a9r.js";

import { vw } from "./chunk-9tdwgnpn.js";

import { Rt } from "./chunk-s2t7g8m9.js";

import { Zs } from "./chunk-rgd61mm3.js";

import { ez } from "./chunk-sqb9meyh.js";

import { d6r, Wkn } from "./chunk-44n60z27.js";

import { F6r } from "./chunk-0wrzh62m.js";

import { wps } from "./chunk-yd16nhae.js";

import { AN } from "./chunk-cmtcv7k0.js";

import { Dr } from "./chunk-10gv16xm.js";

import { o, uOe } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { open as P } from "fs/promises";

import { join as T } from "path";

var Fht = 64, y = 262144, R = new Set([ "ELOOP", "ENXIO" ]);

function Uht(e) {
  return e.normalize("NFC");
}

function FFt() {
  return Jje() === null && Pv() && RN(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND);
}

function UFt(e) {
  let t = QOe();
  return t.size > 0 && e.some(({fileUuid: s, name: r}) => {
    let n = t.get(Uht(r));
    return n !== void 0 && n.fileUuid !== s.toLowerCase();
  });
}

function aLr(e) {
  return e.length > 0 && FFt() && (eYn() !== "done" || UFt(e));
}

function g() {
  return T(AN(), ".placed-by-name.json");
}

async function run() {
  if (eYn() !== "done") {
    X("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: b("table_unread")
    });
    return;
  }
  try {
    await Tn(g(), _([ ...QOe() ]), 384);
  } catch (e) {
    X("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: zr(e) ?? b("unknown")
    });
  }
}

function A(e) {
  if (!Array.isArray(e) || e.length !== 2) return !1;
  let [t, s] = e;
  if (typeof t !== "string" || typeof s !== "object" || s === null) return !1;
  let {path: r, fileUuid: n, dev: l, ino: c, mtimeMs: f, size: p, sha256: m, ambiguous: i} = s;
  return typeof r === "string" && typeof n === "string" && [ l, c, f, p ].every(u => typeof u === "number" && Number.isFinite(u)) && typeof m === "string" && (i === void 0 || i === !0);
}

function oun() {
  let e = eYn();
  if (e !== void 0) return e === "done" ? Promise.resolve() : e;
  let t = O().then(s => {
    if (VHr(s.state === "table_unread" ? void 0 : "done"), s.state !== "table_absent") X("info", "turn_handoff_files_by_name_table", s);
  });
  return VHr(t), t;
}

async function O() {
  let e;
  try {
    let r = await P(g(), li | Zs);
    try {
      let n = await r.stat(), l = n.isFile() && n.size <= y ? await Ak(r, y, n.size) : void 0;
      e = l === void 0 || l.overLimit ? void 0 : Y(l.bytes.toString("utf8"));
    } finally {
      await r.close();
    }
  } catch (r) {
    let n = E(r);
    return {
      state: n === "ENOENT" ? "table_absent" : n === void 0 || R.has(n) ? "table_damaged" : "table_unread",
      rows: 0
    };
  }
  if (!Array.isArray(e) || e.length > Fht || !e.every(A)) return {
    state: "table_damaged",
    rows: 0
  };
  let t = QOe(), s = [ ...t ];
  t.clear();
  for (let [r, n] of e) {
    let {path: l, fileUuid: c, dev: f, ino: p, mtimeMs: m, size: i, sha256: u, ambiguous: h} = n;
    t.set(r, {
      path: l,
      fileUuid: c.toLowerCase(),
      dev: f,
      ino: p,
      mtimeMs: m,
      size: i,
      sha256: u,
      ...h && {
        ambiguous: h
      },
      fromEarlierProcess: !0
    });
  }
  for (let [r, n] of s) t.delete(r), t.set(r, n);
  for (let r of [ ...t.keys() ].slice(0, Math.max(0, t.size - Fht))) t.delete(r);
  return {
    state: "table_read",
    rows: e.length
  };
}

var lLr = {
  invalid_path: "sad",
  unsupported_name: "sad",
  symlink_in_path: "sad",
  path_not_canonical: "sad",
  read_rule: "sad",
  not_found: "sad",
  not_a_directory: "sad",
  os_permission_denied: "sad",
  workspace_moved: "bad",
  unexpected_error: "bad"
}, S = "list denied: ";

function wL(e, t) {
  return new Mr(`${S}${e}`, t, e);
}

function sun(e) {
  if (!(e instanceof Mr)) return;
  let t = e.errorClass;
  return t !== void 0 && C(t) && e.message === `${S}${t}` ? t : void 0;
}

function C(e) {
  return Object.hasOwn(lLr, e);
}

var L = {
  supported: !0,
  refusedInputFields: Wkn,
  decidingInputFields: [ "command", "run_in_background", "dangerouslyDisableSandbox" ]
};

function k() {
  return import.meta.require("./chunk-gwygrasw.js").PowerShellTool;
}

function dLr(e, t) {
  let s = k(), r = d6r({
    edition: t?.powershell?.edition ?? null,
    buildTools: [],
    onWindows: !0,
    backgroundRuns: !1
  }), n = H(s.inputSchema, [ "run_in_background" ]).extend({
    [Dr]: o().optional().describe("Optional. Names the attached computer this runs on \u2014 the attached-machines note says which computers serve PowerShell. While exactly one does it may be omitted and the call runs there; when several do, name one. It never runs in this session's own environment, which has no PowerShell. The result says where it ran.")
  }), l = Object.defineProperties({}, {
    ...Object.getOwnPropertyDescriptors(s),
    inputSchema: {
      value: n,
      enumerable: !0
    },
    prompt: {
      value: async () => r,
      enumerable: !0
    },
    isEnabled: {
      value: () => !0,
      enumerable: !0
    },
    remoteExecution: {
      value: L,
      enumerable: !0
    },
    suppressesAllPermissionUpdates: {
      value: () => !0,
      enumerable: !0
    },
    call: {
      value: async () => {
        throw new x(`PowerShell runs only on ${e}; the session runs it there and it cannot run here.`, "session-channel PowerShell tool called without being routed to its machine");
      },
      enumerable: !0
    }
  });
  return wps(l);
}

function jFo(e, t) {
  if (vw()) return 0;
  let s = D(t.filter(n => n.tool === Rt).map(n => n.host));
  if (s.length === 0) return 0;
  let r;
  try {
    r = s.map(n => ({
      tool: dLr(n, void 0),
      machine: n
    }));
  } catch (n) {
    return d(j(n)), 0;
  }
  return e.presentUntilAnnounced(r, ez), r.length;
}

function H(e, t) {
  if (!(e instanceof uOe)) throw TypeError("PowerShellTool no longer declares an object schema");
  let s = t.filter(n => n in e.shape), r = Object.fromEntries(s.map(n => [ n, !0 ]));
  return s.length === 0 ? e : e.omit(r);
}

var w = 8, cLr = 256;

function WFo(e = () => performance.now()) {
  let t = [], s = [], r = 0, n = 0, l = !1, c = !1, f = !1, p = Me();
  return {
    noteStagedRow(m) {
      if (m.mount_path !== F6r) return !1;
      let i = m.content_sha256, u = typeof i === "string" && i.length > 0 && i.length <= cLr ? i : null;
      if (u === null) {
        if (!f) f = !0, X("warn", "home_seed_stage_without_usable_etag", {});
        return !1;
      }
      n++;
      let h = {
        etag: u,
        beforeFirstCommand: !l && !c,
        ordinal: n
      };
      t = [ ...t, h ].slice(-w), s = [ ...s, {
        etag: u,
        ordinal: n,
        heardAtMs: e(),
        turnsAtHoldBefore: r
      } ].slice(-w);
      try {
        p.emit(h);
      } catch {
        X("error", "home_seed_announcement_listener_threw", {});
      }
      return !0;
    },
    noteStagedRowRead(m) {
      if (m.mount_path !== F6r) return;
      let i = s.find(u => u.etag === m.content_sha256);
      if (i === void 0) return {
        onRecord: !1
      };
      return s = s.filter(u => u !== i), {
        onRecord: !0,
        ordinal: i.ordinal,
        behindMs: Math.round(e() - i.heardAtMs),
        turnsAtHoldBefore: i.turnsAtHoldBefore,
        turnAtHoldMeanwhile: r > i.turnsAtHoldBefore
      };
    },
    markTurnAtHold() {
      r++;
    },
    markUserFrameDelivered() {
      c = !0;
    },
    markFirstCommandDequeued() {
      l = !0;
    },
    firstCommandDequeued() {
      return l;
    },
    announcements() {
      return t;
    },
    announcementCount() {
      return n;
    },
    announcementForEtag(m) {
      return t.findLast(i => i.etag === m);
    },
    announced: {
      subscribe: p.subscribe
    }
  };
}

export { Fht, Uht, FFt, UFt, aLr, run, oun, lLr, wL, sun, dLr, jFo, cLr, WFo };
