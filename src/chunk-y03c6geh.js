// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { c, pe } from "./chunk-hwdwjvh8.js";

import { Ve, x, l, ute } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { Ma, I } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Sh, sd, or } from "./chunk-w0q7jqcp.js";

import { hn } from "./chunk-dd98x6x7.js";

import { Yz, Gt } from "./chunk-xywp7esx.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { L1 } from "./chunk-xmqqa853.js";

import { h7, y7, bat, Ths } from "./chunk-sqb9meyh.js";

import { jDe, Q$ } from "./chunk-eshvvrzr.js";

import { FKt } from "./chunk-3pdr0he3.js";

import { ppe, gtn } from "./chunk-hwdhdabr.js";

import { nS, Ose, VN, ePe } from "./chunk-gzzx34vb.js";

import { lVe, bW, B6r } from "./chunk-j85j5j0r.js";

import { yZr, Gos, VD, pot, BAe } from "./chunk-84yp45y8.js";

import { wrr, Vvt, Xhe, JJo } from "./chunk-hrweermn.js";

import { Ykn } from "./chunk-qs2g7wkc.js";

import { M6r, wKt, _rr } from "./chunk-fhqvr05r.js";

import { D6r, Jkn, Qkn, Zkn, brr, Srr, L6r } from "./chunk-x02jpynd.js";

import { $De } from "./chunk-7c2yyatt.js";

import { Xkn } from "./chunk-jxxx97e3.js";

import { vKt, qJo } from "./chunk-qharssgg.js";

import { HM } from "./chunk-a2fgh1gk.js";

import { jle } from "./chunk-tqxwcs8r.js";

import { jO } from "./chunk-3tedvrs9.js";

import { o, oe, T, u, _t } from "./chunk-cvcg6n1z.js";

import { N } from "./chunk-hmqkrrtz.js";

import { createHash as je } from "crypto";

var qe = Buffer.from("anthropic.ccr.session_synced_file_put.v1", "utf8"), Ge = Buffer.from("anthropic.ccr.session_synced_file_upload_begin.v1", "utf8"), Ye = Buffer.from("anthropic.ccr.session_synced_file_upload_commit.v1", "utf8"), ge = Buffer.from([ 0 ]), Ke = 32;

function Xe({sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, contentSha256: a, path: s, ifMatchSha256: _}) {
  if (a.length !== Ke) throw Error("syncedFileRequestSigner: the content hash is not 32 bytes");
  return ee(qe, {
    sessionUuid: e,
    boundDeviceUuid: n,
    issuedAtMs: r,
    fixed: [ a ],
    strings: [ s, _ ?? "" ]
  });
}

function Qe({sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, sizeBytes: a, path: s, ifMatchSha256: _}) {
  if (!Number.isSafeInteger(a) || a < 0) throw Error("syncedFileRequestSigner: the size is not a byte count");
  return ee(Ge, {
    sessionUuid: e,
    boundDeviceUuid: n,
    issuedAtMs: r,
    fixed: [ _e(a) ],
    strings: [ s, _ ?? "" ]
  });
}

function Ze({sessionUuid: e, boundDeviceUuid: n, issuedAtMs: r, path: a, uploadPath: s, contentSha256: _, ifMatchSha256: h}) {
  return ee(Ye, {
    sessionUuid: e,
    boundDeviceUuid: n,
    issuedAtMs: r,
    fixed: [],
    strings: [ a, s, _, h ?? "" ]
  });
}

function ee(e, {sessionUuid: n, boundDeviceUuid: r, issuedAtMs: a, fixed: s, strings: _}) {
  if (_.some(h => h.includes("\0"))) throw Error("syncedFileRequestSigner: NUL in a signed field");
  return Buffer.concat([ e, ge, Q$(n), Q$(r), _e(a), ...s, ..._.flatMap(h => [ Buffer.from(h, "utf8"), ge ]) ]);
}

function _e(e) {
  let n = Buffer.alloc(8);
  return n.writeBigUInt64BE(BigInt(e)), n;
}

function Je({sessionUuid: e, deviceUuid: n, key: r, now: a = Date.now}) {
  let s = jDe + n, _ = async S => {
    let b = a(), w = await r.sign(S(b));
    return {
      device_attestation: {
        kid: s,
        signature: w.toString("base64")
      },
      device_attestation_issued_at: new Date(b).toISOString()
    };
  }, h = {
    sessionUuid: e,
    boundDeviceUuid: n
  };
  return {
    sign: ({content: S, path: b, ifMatchSha256: w}) => _(v => Xe({
      ...h,
      issuedAtMs: v,
      contentSha256: je("sha256").update(S).digest(),
      path: b,
      ifMatchSha256: w
    })),
    signBegin: ({path: S, sizeBytes: b, ifMatchSha256: w}) => _(v => Qe({
      ...h,
      issuedAtMs: v,
      sizeBytes: b,
      path: S,
      ifMatchSha256: w
    })),
    signCommit: ({path: S, uploadPath: b, contentSha256: w, ifMatchSha256: v}) => _(E => Ze({
      ...h,
      issuedAtMs: E,
      path: S,
      uploadPath: b,
      contentSha256: w,
      ifMatchSha256: v
    }))
  };
}

async function he({sessionId: e, boundDeviceUuid: n, credentials: r, held: a}) {
  let s = jO(e);
  if (s === void 0) return W("bad_session_id");
  let _ = await jle(r).catch(() => {});
  if (_?.status !== "resolved") return W("no_account");
  let h = n.toLowerCase(), S = await FKt(_.accountUuid, r, a?.rowPk.toLowerCase() === h ? a : void 0);
  if (S.status !== "loaded") return W(S.status);
  if (S.rowPk.toLowerCase() !== h) return W("bound_elsewhere");
  return g("client_request_signer"), Je({
    sessionUuid: s,
    deviceUuid: h,
    key: S.key
  });
}

function W(e) {
  f("client_request_signer", e);
  return;
}

import { posix as Se } from "path";

var Y = 3e4, be = "synced_file_limit_exceeded", et = "synced_file_too_large_inline", te = p(() => u({
  error: u({
    type: o().optional(),
    reason: o().optional(),
    resource: o().optional(),
    sub_reason: oe().optional()
  })
}));

function tt(e) {
  if (e !== Se.normalize(e) || e.includes("\\") || e.includes("\0")) return !1;
  return !Se.isAbsolute(e) && (e === h7 || e.startsWith(`${h7}/`));
}

function ne(e) {
  if (tt(e)) return !1;
  return d(new x(`lane path escapes the lane root: ${e}`, "lane path escapes the lane root")), 
  !0;
}

function K(e) {
  return `${lVe}/${e}`;
}

function re(e) {
  return e >= 200 && e < 300;
}

function ie(e, n) {
  return e.kind === "failed" ? {
    ...e,
    status: n
  } : e;
}

function nt(e) {
  return e === "compliance_restricted" || e === "zdr_restricted";
}

function G(e) {
  if (e === "aborted") return {
    kind: "aborted"
  };
  if (e === "failed") return {
    kind: "failed"
  };
  if (e === "timed_out") return {
    kind: "failed",
    timedOut: !0
  };
  if (e === "too_large") return {
    kind: "failed",
    tooLarge: !0
  };
  if (e === "gated") return {
    kind: "lane_unavailable"
  };
  if (e === "no_auth") return {
    kind: "unauthorized"
  };
  if (e === "unsigned") return {
    kind: "lane_unavailable",
    cause: "device_key_unavailable"
  };
  if (e.status === 501 || e.status === 404) return {
    kind: "lane_unavailable"
  };
  let n = te().safeParse(e.data).data?.error;
  if (e.status === 400 && n?.reason === B6r) return {
    kind: "lane_unavailable",
    cause: "switched_off_by_anthropic"
  };
  if (e.status === 400 && n?.reason === et) return {
    kind: "failed",
    tooLarge: !0
  };
  if (e.status === 403 && nt(n?.resource)) return {
    kind: "lane_unavailable",
    cause: "compliance_restricted"
  };
  if (e.status === 403 && n?.resource === "untrusted_device" && n.sub_reason === "synced_file_write_unsigned") return {
    kind: "unauthorized",
    cause: "write_signature_refused"
  };
  if (e.status === 401 || e.status === 403) return {
    kind: "unauthorized"
  };
  return {
    kind: "failed"
  };
}

var ae = 3;

var ot = 300, it = 4, at = 131072, st = 1e5;

function ke(e) {
  let n = at / it;
  return Math.min(st, Math.max(Y, Math.ceil(e / n * 1e3)));
}

var dt = 67108864;

function ut(e) {
  return Math.ceil(e * 4 / 3) + 1024;
}

var ct = {
  beginUpload: async () => ({
    kind: "lane_unavailable"
  }),
  commitUpload: async () => ({
    kind: "lane_unavailable"
  }),
  getDownload: async () => ({
    kind: "lane_unavailable"
  })
};

class V extends Error {
  constructor() {
    super("this machine cannot sign the request as the bound device");
  }
}

var Pe = 64, lt = p(() => u({
  content_sha256: o().length(Pe)
})), ft = p(() => u({
  content: o(),
  content_sha256: o().length(Pe)
}));

function we(e) {
  return typeof e === "object" && e !== null && "code" in e && e.code === "ECONNABORTED";
}

function mt(e, n) {
  if (ne(e)) return "failed";
  if (Array.from(K(e)).length > Ths) return "path_too_long";
  if (n.length > bW) return "too_large";
  return null;
}

function Ee({sessionId: e, credentials: n, signer: r, signedOnly: a = !1}) {
  Sh(e, "seed upload session id");
  let s = sd(e), _ = null, h;
  function S(P) {
    return _ ??= ePe(P).then(R => {
      if (R !== void 0) h = R;
      return R;
    }, () => {}).finally(() => {
      _ = null;
    }), _;
  }
  let b = null, w = !1;
  async function v(P) {
    let R = await (r?.catch(() => {}));
    if (R === void 0) {
      if (a) throw new V;
      return;
    }
    try {
      return await P(R);
    } catch (O) {
      if (!w) w = !0, t(`lane: request not signed: ${l(O)}`, {
        level: "warn"
      }), f("client_request_signer", "sign_failed");
      if (a) throw new V;
      return;
    }
  }
  async function E(P, R, O = {}) {
    let C = O.heedsRetryAfter ? b?.trackRequest() : void 0, F = await H(P, R, O, C);
    return C?.noteSettled(F), F;
  }
  async function H(P, R, {retryTimeouts: O = !1, attempts: C = ae}, F) {
    let B = !1;
    for (let y = 0; ;y++) {
      if (HM(R)) return "aborted";
      h ??= await nS().catch(() => {});
      let U = h, k;
      try {
        k = await P(U === void 0 ? {} : {
          "X-Trusted-Device-Token": U
        });
      } catch (D) {
        if (D instanceof V) return "unsigned";
        if (HM(R)) return "aborted";
        if (await Yz(n)) return "no_auth";
        if (ute(D)) return t("lane: the response is larger than this request accepts; not retried", {
          level: "warn"
        }), "too_large";
        if ((O || !we(D)) && y + 1 < C) {
          await J(Re(y), R);
          continue;
        }
        if (we(D)) return t("lane: request timed out", {
          level: "warn"
        }), "timed_out";
        return d(D), "failed";
      }
      if (!k.ok) return k.reason === "no-auth" ? "no_auth" : "gated";
      if ((k.status === 429 || k.status >= 500 && k.status !== 501) && y + 1 < C) {
        let D = Re(y);
        await J((k.status === 429 ? F?.takeWaitMs(y, k.response?.headers?.["retry-after"], D) : void 0) ?? D, R);
        continue;
      }
      let L = k.status === 403 && !B ? ppe(k.data) : void 0;
      if (L !== void 0 && gtn(L)) {
        B = !0;
        let D = await S(U);
        if (D !== void 0 && D !== U) continue;
      } else if (L !== void 0) Ose("lane:", L), h = void 0, VN();
      return {
        status: k.status,
        data: k.data
      };
    }
  }
  async function j(P, R, {ifMatchSha256: O, signal: C, shouldAttemptOnceIfLong: F = !1} = {}) {
    let B = mt(P, R);
    if (B !== null) return {
      kind: B
    };
    if (O === "") return {
      kind: "failed"
    };
    let y = ke(ve(R.length));
    return pt(await A(P, R, O, C, F && y > Y ? 1 : ae, y));
  }
  function A(P, R, O, C, F, B) {
    let y = K(P);
    return E(async U => Gt.put(`/v1/code/sessions/${s}/synced_file`, {
      session_id: s,
      path: y,
      content: R.toString("base64"),
      ...O !== void 0 && {
        if_match_sha256: O
      },
      ...await v(k => k.sign({
        content: R,
        path: y,
        ifMatchSha256: O
      }))
    }, {
      auth: "teleport-org",
      credentials: n,
      headers: U,
      timeout: B,
      validateStatus: () => !0,
      signal: C,
      maxBodyLength: dt
    }), C, {
      attempts: F
    });
  }
  async function z(P, R, O = 0, C = bW) {
    if (ne(P)) return {
      kind: "failed"
    };
    let F = new URLSearchParams({
      path: K(P)
    }), B = ke(ve(O)), y = await E(U => Gt.get(`/v1/code/sessions/${s}/file?${F.toString()}`, {
      auth: "teleport-org",
      credentials: n,
      headers: U,
      timeout: B,
      validateStatus: () => !0,
      signal: R,
      maxContentLength: ut(C)
    }), R, {
      attempts: B > Y ? 1 : ae
    });
    if (typeof y === "string") return G(y);
    if (re(y.status)) {
      let U = ft().safeParse(y.data);
      if (!U.success) return {
        kind: "failed",
        status: y.status
      };
      let k = Buffer.from(U.data.content, "base64");
      return k.length > C ? {
        kind: "failed",
        status: y.status,
        tooLarge: !0
      } : {
        kind: "ok",
        content: k,
        etag: U.data.content_sha256
      };
    }
    if (y.status === 404) return {
      kind: "not_found"
    };
    return ie(G(y), y.status);
  }
  return {
    putStoreRow: j,
    getStoreRow: z,
    ...ct
  };
}

function pt(e) {
  if (typeof e === "string") return G(e);
  if (re(e.status)) {
    let n = lt().safeParse(e.data);
    return n.success ? {
      kind: "ok",
      etag: n.data.content_sha256
    } : {
      kind: "failed",
      status: e.status
    };
  }
  if (e.status === 409) return {
    kind: "conflict"
  };
  if (e.status === 400) {
    let n = te().safeParse(e.data), {type: r, reason: a} = n.success ? n.data.error : {
      type: void 0,
      reason: void 0
    };
    if (t(`lane: put rejected (400): type=${r} reason=${a}`), a === be) return {
      kind: "lane_full"
    };
  }
  return ie(G(e), e.status);
}

function ve(e) {
  return Math.ceil(e / 3) * 4;
}

function Re(e) {
  return ot * 2 ** e * (.5 + Math.random() / 2);
}

var gt = 1e4;

async function se(e, n) {
  return L1(pot(e).enabledNow()) && BAe(e) && (!VD(e) || await Promise.resolve().then(() => n?.() ?? !1).catch(() => !1));
}

async function Ae({client: e, pack: n, generation: r, uploaded: a, status: s, launchConsent: _, isProjectStillSynced: h, signal: S, onReadBack: b, deadlineMs: w = gt}) {
  if (a.kind !== "uploaded" || !kt(a.outcome) || HM(S) || !await se(_, h)) return "skipped";
  let v = new AbortController, E = () => v.abort();
  S?.addEventListener("abort", E, {
    once: !0
  });
  try {
    let H, A = await We(ht({
      client: e,
      pack: n,
      generation: r,
      uploaded: a.outcome,
      signal: v.signal,
      onRead: R => {
        H = R;
      }
    }), w) ?? H ?? {
      verdict: "unreadable",
      heal: "none",
      got: "deadline",
      ready: null
    };
    if (HM(S) || A.got === "aborted") return "skipped";
    i("tengu_home_seed_ready_seen", {
      outcome: c(A.verdict),
      got: c(A.got),
      heal: c(A.heal),
      ready_outcome: c(A.ready?.outcome ?? "none"),
      generation: r
    });
    let z = A.verdict === "applied_before_first_ask" || A.verdict === "applied_late" ? {
      verdict: A.verdict,
      left: wt(A.ready, yt(n))
    } : {
      verdict: A.verdict,
      left: null
    };
    b?.(z);
    let P = vt(A.verdict, a.outcome, z.left, a.settingsRefused !== void 0);
    if (P !== null) s.publish(P.text, P.level);
    return A.verdict;
  } catch (H) {
    if (Ve(H) || HM(S)) return "skipped";
    return d(H), "unreadable";
  } finally {
    v.abort(), S?.removeEventListener("abort", E);
  }
}

async function ht({client: e, pack: n, generation: r, uploaded: a, signal: s, onRead: _}) {
  let h = St(await e.getStoreRow(bat, s));
  switch (h.kind) {
   case "aborted":
    return {
      verdict: "unreadable",
      got: "aborted",
      heal: "none",
      ready: null
    };

   case "unreadable":
    return {
      verdict: "unreadable",
      got: h.got,
      heal: "none",
      ready: null
    };

   case "ready":
    return {
      verdict: h.ready.generation < r ? a === "deadline" ? "not_seen" : "behind" : h.ready.generation !== r ? "stale" : bt(h.ready) ? "not_applied" : h.ready.appliedBeforeFirstAsk ? "applied_before_first_ask" : "applied_late",
      got: "ready",
      heal: "none",
      ready: h.ready
    };

   case "absent":
    {
      if (a === "deadline") return {
        verdict: "not_seen",
        got: "absent",
        heal: "none",
        ready: null
      };
      return _({
        verdict: "not_seen",
        got: "absent",
        heal: "failed",
        ready: null
      }), {
        verdict: "not_seen",
        got: "absent",
        heal: (await e.putStoreRow(y7, n, {
          signal: s
        })).kind === "ok" ? "ok" : "failed",
        ready: null
      };
    }
  }
}

function St(e) {
  switch (e.kind) {
   case "ok":
    {
      let n = Ykn(e.content);
      return n.ok ? {
        kind: "ready",
        ready: n.ready
      } : {
        kind: "unreadable",
        got: n.reason
      };
    }

   case "not_found":
    return {
      kind: "absent"
    };

   case "aborted":
    return {
      kind: "aborted"
    };

   case "failed":
   case "lane_unavailable":
   case "unauthorized":
    return {
      kind: "unreadable",
      got: e.kind
    };
  }
}

function yt(e) {
  let n = Xhe(e);
  return n.ok && n.pack.settings !== null;
}

function bt(e) {
  return e.outcome === "partial" && e.filesApplied === 0 && !e.settingsWritten;
}

function kt(e) {
  switch (e) {
   case "sent":
   case "unchanged":
   case "conflict_resolved":
   case "deadline":
    return !0;

   case "raced":
   case "not_forwarded_at_create":
   case "lane_full":
   case "unavailable":
   case "unauthorized":
   case "failed":
   case "aborted":
    return !1;
  }
}

function wt(e, n) {
  if (e === null || e.outcome !== "partial") return null;
  return e.filesRefused > 0 ? "files" : n && !e.settingsWritten ? "settings" : "part";
}

function vt(e, n, r, a) {
  let s = a ? "the rest of your settings" : "your settings", _ = r === null ? "" : ` (${Xkn[r]})`;
  switch (e) {
   case "applied_before_first_ask":
    return {
      text: `The cloud session applied ${s} before its first reply${_}`,
      level: r !== null || n === "deadline" ? "info" : "debug"
    };

   case "applied_late":
    return {
      text: `${Ma(s)} reached the cloud session after its first reply${_}; they apply from the next turn (no /clear needed)`,
      level: "info"
    };

   case "not_applied":
    return {
      text: `The cloud session could not apply ${s} (everything it was sent was skipped there)`,
      level: "warning"
    };

   case "not_seen":
    return n === "deadline" ? {
      text: `The cloud session has not confirmed ${s} (the upload may not have reached it in time)`,
      level: "warning"
    } : {
      text: `The cloud session has not confirmed ${s} and may be running without them`,
      level: "info"
    };

   case "behind":
    return {
      text: "The cloud session still ran with the settings it had for this reply; the ones just sent apply from the next turn (no /clear needed)",
      level: "info"
    };

   case "stale":
    return {
      text: `The cloud session confirmed a different copy of ${s} than the one just sent`,
      level: "warning"
    };

   case "unreadable":
    return {
      text: `The cloud session's answer about ${s} could not be read`,
      level: "warning"
    };
  }
}

var Rt = 15e3, Pt = 3e4;

function I6r(e) {
  return Et(e).pendingSeed(Promise.resolve());
}

function Et({sessionId: e, plan: n, bound: r, boundDeviceUuid: a, held: s, trigger: _, launchConsent: h, isProjectStillSynced: S, signal: b, credentials: w, storageV5: v, client: E, deadlineMs: H = Rt, planDeadlineMs: j = Pt}) {
  let A = $De(), z = Promise.resolve(a).catch(() => {}), P = E === void 0 ? void 0 : Promise.resolve(E), R = () => P ??= z.then(y => Ee({
    sessionId: e,
    credentials: w,
    ...y !== void 0 && {
      signer: he({
        sessionId: e,
        boundDeviceUuid: y,
        credentials: w,
        ...s !== void 0 && {
          held: s
        }
      }),
      signedOnly: !0
    }
  })), O = We(Promise.resolve(n).catch(y => {
    if (!Ve(y)) d(y);
    return {
      kind: "none",
      reason: Ve(y) ? "aborted" : "failed"
    };
  }), j).then(y => y ?? {
    kind: "none",
    reason: "too_slow"
  }), C;
  O.then(y => {
    C = y.kind === "ready" ? y.description : null;
  });
  let F = O.then(y => y.kind === "ready" ? {
    plan: y,
    attempts: At({
      sessionId: e,
      storageV5: v,
      plan: y,
      bound: r,
      trigger: _,
      signal: b,
      getStoreClient: R,
      deadlineMs: H
    }, () => se(h, S))
  } : {
    plan: y,
    attempts: null
  });
  return {
    ensureUploaded: y => F.then(({attempts: U}) => U?.ensureUploaded(y) ?? "done"),
    pendingSeed: y => {
      let U = F.then(({plan: k, attempts: q}) => (q === null ? Promise.resolve().then(() => {
        for (let L of $t(k, _, j)) A.publish(L, zt(k));
        return de(Ut(k.reason, _), _, "plan_"), {
          outcome: {
            kind: "none",
            reason: k.reason,
            ...X(k)
          },
          written: null
        };
      }) : q.endedOnce(y).then(L => Ht(A, {
        sessionId: e,
        plan: k,
        bound: r,
        trigger: _
      }, L))).catch(L => (d(L), de({
        is: "bad",
        code: "unexpected"
      }, _, ""), {
        outcome: k.kind === "ready" ? {
          kind: "uploaded",
          outcome: "failed",
          summary: k.summary,
          bound: r,
          ...Te(k),
          ...X(k)
        } : {
          kind: "none",
          reason: k.reason,
          ...X(k)
        },
        written: null
      })));
      return qJo({
        completion: U.then(({outcome: k}) => k),
        status: A,
        description: () => C,
        afterFirstReply: (k, q) => U.then(({outcome: L, written: D}) => D === null ? "skipped" : R().then($e => Ae({
          client: $e,
          pack: D.pack,
          generation: D.generation,
          uploaded: L,
          status: A,
          launchConsent: h,
          isProjectStillSynced: S,
          signal: k,
          onReadBack: q
        })))
      });
    }
  };
}

function At(e, n) {
  let r = Le(e, 1), a = {
    packUpload: e,
    mayStillForwardNow: n,
    ended: Promise.withResolvers(),
    isEnded: !1,
    attemptsMade: 1,
    latest: r,
    call: void 0
  };
  return a.ended.promise.catch(() => {}), Ce(a, r, null), {
    endedOnce: s => (s.then(() => (a.isEnded = !0, a.latest)).then(_ => le(a, _), _ => fe(a, _)), 
    a.ended.promise),
    ensureUploaded: s => a.call ??= Ot(a, s).finally(() => {
      a.call = void 0;
    })
  };
}

function le(e, n) {
  e.isEnded = !0, e.ended.resolve(n);
}

function fe(e, n) {
  e.isEnded = !0, e.ended.reject(n);
}

function Ce(e, n, r) {
  n.then(a => {
    if (!Fe(a)) le(e, De(r, a));
  }, a => fe(e, a));
}

function De(e, n) {
  return e !== null && e.written !== null && n.written === null && n.outcome !== "raced" ? e : n;
}

async function Ot(e, n) {
  try {
    let r = await e.latest;
    if (e.isEnded) return "done";
    let a = await e.mayStillForwardNow().catch(h => (d(h), !1));
    if (e.isEnded) return "done";
    if (!a) return i("tengu_home_seed_upload_no_longer_allowed", {
      trigger: c(e.packUpload.trigger),
      attempts_made: e.attemptsMade
    }), le(e, r), "done";
    if (n.aborted) return Oe(r);
    e.attemptsMade += 1;
    let s = Le({
      ...e.packUpload,
      cut: n
    }, e.attemptsMade);
    Ce(e, s, r), e.latest = s.then(h => De(r, h)), e.latest.catch(() => {});
    let _ = await s;
    return Fe(_) ? Oe(_) : "done";
  } catch (r) {
    return fe(e, r), "done";
  }
}

function Oe({outcome: e, cause: n, httpStatus: r}) {
  return {
    kind: "failed",
    ...r !== void 0 && r >= 400 && {
      httpStatus: r
    },
    ...e === "unauthorized" && {
      remedy: n === "write_signature_refused" ? "clock" : "login"
    }
  };
}

function Fe({outcome: e, cause: n, isRefusedAsSent: r}) {
  switch (e) {
   case "deadline":
   case "unauthorized":
    return !0;

   case "unavailable":
    return n === void 0;

   case "failed":
    return r !== !0;

   case "sent":
   case "unchanged":
   case "conflict_resolved":
   case "raced":
   case "not_forwarded_at_create":
   case "lane_full":
   case "aborted":
    return !1;
  }
}

async function Le({sessionId: e, storageV5: n, plan: r, bound: a, trigger: s, signal: _, cut: h, getStoreClient: S, deadlineMs: b}, w) {
  let v = Date.now(), E = (w === 1 || s !== "create") && wKt(e)?.tried === !0, H = await Dt(S, r.pack, s, {
    sessionId: e,
    storageV5: n
  }, _, h, b);
  return i("tengu_home_seed_upload", {
    trigger: c(s),
    outcome: c(H.outcome),
    attempt: w,
    bytes: H.written?.pack.length ?? r.pack.length,
    generation: H.generation,
    bound: a,
    row_standing: H.standing === !0,
    allow_rules_cut: H.allowRulesCut ?? 0,
    allow_rules_recorded: wKt(e)?.allow.length ?? 0,
    after_failed_create: E,
    cause: pe(H.cause),
    duration_ms: Date.now() - v
  }), H;
}

function Ht(e, {sessionId: n, plan: r, bound: a, trigger: s}, {outcome: _, written: h, standing: S, allowRulesCut: b, cause: w}) {
  de(Ct(_, w), s, "");
  let v = wKt(n);
  return Mt(e, r, _, {
    sessionId: n,
    trigger: s,
    bound: a,
    didCreateCarryAllowRules: (v?.allow.length ?? 0) > 0
  }, v?.tried === !0 && S !== !0 ? !1 : S ?? !1, b ?? 0, w), {
    outcome: {
      kind: "uploaded",
      outcome: _,
      summary: r.summary,
      bound: a,
      ...Te(r),
      ...X(r)
    },
    written: h
  };
}

function X(e) {
  if (e.kind === "none") return {};
  let n = Srr(e.leftBehind), r = L6r(e.leftBehind);
  return {
    ...(n.claudeMd || n.others > 0) && {
      keptForCredential: n
    },
    ...r.names.length > 0 && {
      keptAsLinks: r
    }
  };
}

function Te(e) {
  let n = e.settings;
  return n === "schema_rejected" || n === "settings_too_large" || n === "settings_unreadable" ? {
    settingsRefused: n
  } : {};
}

function Ut(e, n) {
  switch (e) {
   case "failed":
   case "home_unvettable":
   case "rules_unreadable":
    return {
      is: "bad",
      code: e
    };

   case "nothing_to_send":
   case "too_slow":
    return {
      is: "sad",
      code: e
    };

   case "unbound":
   case "flag_off":
   case "no_consent":
   case "user_settings_disabled":
   case "aborted":
    return null;

   case "no_project_files":
    return null;
  }
}

function Ct(e, n) {
  switch (e) {
   case "sent":
   case "unchanged":
   case "conflict_resolved":
    return {
      is: "ok"
    };

   case "aborted":
   case "not_forwarded_at_create":
    return null;

   case "unavailable":
    return {
      is: "sad",
      code: n ?? e
    };

   case "lane_full":
   case "unauthorized":
   case "deadline":
   case "raced":
    return {
      is: "sad",
      code: e
    };

   case "failed":
    return {
      is: "bad",
      code: e
    };
  }
}

function de(e, n, r) {
  if (e === null) return;
  let a = n === "create";
  switch (e.is) {
   case "ok":
    if (g("ccr_home_seed"), a) g("ccr_home_seed_create_upload");
    return;

   case "sad":
    if (f("ccr_home_seed", e.code), a) f("ccr_home_seed_create_upload", `${r}${e.code}`);
    return;

   case "bad":
    if (m("ccr_home_seed", e.code), a) m("ccr_home_seed_create_upload", `${r}${e.code}`);
    return;
  }
}

async function Dt(e, n, r, a, s, _, h) {
  if (HM(s)) return {
    outcome: "aborted",
    generation: 0,
    written: null
  };
  let S = new AbortController, b = () => S.abort();
  s?.addEventListener("abort", b, {
    once: !0
  }), _?.addEventListener("abort", b, {
    once: !0
  });
  try {
    let w = await We(e().then(v => Ft(v, n, r, a, S.signal)), h);
    if (w === void 0 || w.outcome === "aborted") {
      if (HM(s)) return {
        outcome: "aborted",
        generation: 0,
        written: null
      };
      if (r === "create") return Q(a, n, 1, void 0), {
        outcome: "deadline",
        generation: 0,
        written: {
          pack: n,
          generation: 1
        }
      };
      return {
        outcome: "deadline",
        generation: 0,
        written: null,
        standing: "unknown"
      };
    }
    return w;
  } finally {
    S.abort(), s?.removeEventListener("abort", b), _?.removeEventListener("abort", b);
  }
}

async function Ft(e, n, r, a, s) {
  if (r !== "create") {
    let h = wKt(a.sessionId);
    if (h === void 0) return {
      outcome: "not_forwarded_at_create",
      generation: 0,
      written: null
    };
    let S = await e.getStoreRow(y7, s);
    if (S.kind !== "ok" && S.kind !== "not_found") return {
      outcome: Ie(S),
      generation: 0,
      written: null,
      standing: "unknown",
      ...Z(S)
    };
    let b = Lt(n, h), w = E => _rr(a.sessionId, {
      ...h,
      generation: E,
      etag: void 0,
      at: Date.now()
    }, a.storageV5), v = S.kind === "ok" ? await Be(e, b.pack, S, s, w) : {
      ...await He(e, xe(b.pack, h.generation), s, w),
      standing: "gone"
    };
    if (S.kind === "not_found") i("tengu_home_seed_stored_pack_gone", {
      outcome: c(v.outcome),
      generation: v.generation,
      record_generation: h.generation,
      after_failed_create: h.tried === !0
    });
    if (v.written !== null) _rr(a.sessionId, {
      ...h,
      generation: v.generation,
      etag: v.etag,
      at: Date.now()
    }, a.storageV5);
    return b.cut === 0 ? v : {
      ...v,
      allowRulesCut: b.cut
    };
  }
  let _ = await He(e, {
    pack: n,
    generation: 1
  }, s, async h => {
    if (h > 1) Q(a, n, h, void 0);
  });
  if (_.written !== null) Q(a, _.written.pack, _.generation, _.etag); else if (_.outcome in ze) Q(a, n, 1, void 0, {
    tried: !0
  });
  return _;
}

async function He(e, {pack: n, generation: r}, a, s) {
  await (s?.(r));
  let _ = await e.putStoreRow(y7, n, {
    signal: a
  });
  if (_.kind !== "conflict") {
    if (_.kind !== "ok") return {
      outcome: Me(_, "sent"),
      generation: 0,
      written: null,
      ...Z(_)
    };
    return {
      outcome: "sent",
      generation: r,
      written: {
        pack: n,
        generation: r
      },
      etag: _.etag
    };
  }
  let h = await e.getStoreRow(y7, a);
  if (h.kind !== "ok") return {
    outcome: Ie(h),
    generation: 0,
    written: null,
    standing: !0,
    ...Z(h)
  };
  return Be(e, n, h, a, s);
}

function Q(e, n, r, a, s = {}) {
  let _ = Xhe(n), h = _.ok ? Tt(_.pack.settings) ?? [] : [];
  _rr(e.sessionId, {
    generation: r,
    ...a !== void 0 && {
      etag: a
    },
    ...s,
    allow: h.map(M6r),
    at: Date.now()
  }, e.storageV5);
}

async function Be(e, n, r, a, s) {
  let _ = xt(n, r.content);
  await (s?.(_.generation));
  let h = await e.putStoreRow(y7, _.pack, {
    ifMatchSha256: r.etag,
    signal: a
  }), S = h.kind === "conflict" ? "raced" : Me(h, _.unchanged ? "unchanged" : "conflict_resolved");
  return h.kind === "ok" ? {
    outcome: S,
    generation: _.generation,
    written: {
      pack: _.pack,
      generation: _.generation
    },
    standing: !0,
    ...h.etag !== void 0 && {
      etag: h.etag
    }
  } : {
    outcome: S,
    generation: 0,
    written: null,
    standing: !0,
    ...Z(h)
  };
}

function Z(e) {
  switch (e.kind) {
   case "lane_unavailable":
   case "unauthorized":
    return e.cause !== void 0 ? {
      cause: e.cause
    } : {};

   case "path_too_long":
   case "too_large":
    return {
      isRefusedAsSent: !0
    };

   case "failed":
    return e.status === void 0 ? {} : {
      httpStatus: e.status,
      ...e.status >= 400 && e.status < 500 && e.status !== 429 && {
        isRefusedAsSent: !0
      }
    };

   default:
    return {};
  }
}

function Lt(e, n) {
  let r = Xhe(e);
  if (!r.ok) throw Error("the settings pack to re-send does not parse");
  if (r.pack.settings === null || r.pack.settings.permissions === void 0) return {
    pack: e,
    cut: 0
  };
  let a = me().safeParse(r.pack.settings.permissions);
  if (!a.success) throw Error("the settings pack to re-send carries permissions of an unknown shape");
  let s = a.data.allow;
  if (s === void 0) return {
    pack: e,
    cut: 0
  };
  let _ = new Set(n.allow), h = s.filter(b => _.has(M6r(b))), S = s.length - h.length;
  return S === 0 ? {
    pack: e,
    cut: S
  } : {
    pack: Vvt({
      ...r.pack,
      settings: Bt(r.pack.settings, h)
    }),
    cut: S
  };
}

var me = p(() => _t({
  allow: T(o()).optional()
}));

function Tt(e) {
  let n = me().safeParse(e?.permissions);
  return n.success ? n.data.allow : void 0;
}

function Bt(e, n) {
  let r = me().safeParse(e.permissions);
  return {
    ...e,
    permissions: {
      ...r.success ? r.data : {},
      allow: [ ...n ]
    }
  };
}

function xt(e, n) {
  let r = Xhe(e), a = Xhe(n);
  if (r.ok && a.ok) {
    if (Vvt({
      ...r.pack,
      generation: a.pack.generation
    }).equals(n)) return {
      pack: n,
      generation: a.pack.generation,
      unchanged: !0
    };
  }
  if (n.equals(e)) return {
    pack: n,
    generation: 1,
    unchanged: !0
  };
  return {
    ...xe(e, JJo(n) ?? 0),
    unchanged: !1
  };
}

function xe(e, n) {
  let r = Xhe(e);
  if (!r.ok) return {
    pack: e,
    generation: 1
  };
  let a = Math.min(n + 1, wrr);
  return {
    pack: Vvt({
      ...r.pack,
      generation: a
    }),
    generation: a
  };
}

function Me(e, n) {
  switch (e.kind) {
   case "ok":
    return n;

   case "conflict":
   case "path_too_long":
   case "too_large":
   case "failed":
    return "failed";

   case "lane_full":
    return "lane_full";

   case "aborted":
    return "aborted";

   case "lane_unavailable":
    return "unavailable";

   case "unauthorized":
    return "unauthorized";
  }
}

function Ie(e) {
  switch (e.kind) {
   case "not_found":
   case "failed":
    return "failed";

   case "aborted":
    return "aborted";

   case "lane_unavailable":
    return "unavailable";

   case "unauthorized":
    return "unauthorized";
  }
}

function Mt(e, n, r, {sessionId: a, trigger: s, bound: _, didCreateCarryAllowRules: h}, S, b, w) {
  let v = r === "unavailable" && w !== "device_key_unavailable" ? "" : ue;
  switch (r) {
   case "sent":
   case "unchanged":
   case "conflict_resolved":
    {
      if (e.publish(r === "unchanged" && s !== "create" ? "Settings from this machine are already in this session" : D6r({
        ...n.description,
        permissionRules: n.description.permissionRules - b
      }) + (_ ? "" : " (this session cannot run commands on this machine)"), "debug"), 
      b > 0) e.publish(`${b} ${I(b, "permission allow rule")} ${b === 1 ? "stays" : "stay"} on this machine, because ${b === 1 ? "it was" : "they were"} not in the settings prepared when this cloud session was created; a new session takes ${b === 1 ? "it" : "them"}`, "debug");
      let E = brr(n, {
        launch: s === "create" ? "create" : h ? "reopen_sent" : "reopen_sent_no_allow_recorded",
        settingsFile: ce(n.configHome)
      });
      if (E !== null) e.publish(E, Ne(n));
      return;
    }

   case "aborted":
    return;

   case "deadline":
    e.publish(Ue(S, {
      ifNoneStood: Zkn,
      otherwise: "The cloud session may not have your latest settings",
      why: "sending your settings took too long",
      wayOut: v
    }), "warning");
    return;

   case "raced":
    e.publish(`${Zkn}: another launch of this session, or the session itself, wrote its settings first`, "warning");
    return;

   case "not_forwarded_at_create":
    if (!Ji().claim(`home_seed_not_sent_again:${or(a)}`)) return;
    e.publish("Settings from this machine were not sent again: this machine has no record of sending them when this session was created (a session started without them, from another machine, by an earlier build, or older than this machine still tracks)", "debug");
    return;

   case "lane_full":
   case "unavailable":
   case "unauthorized":
   case "failed":
    {
      let E = w === "write_signature_refused" ? It : r === "unavailable" && w !== void 0 ? Nt[w] : ze[r];
      e.publish(Ue(S, {
        ifNoneStood: Jkn,
        otherwise: Qkn,
        why: E,
        wayOut: v
      }), "warning");
      return;
    }
  }
}

function Ne(e) {
  let n = e.summary.overCap + e.unreadable + N(e.leftBehind, s => s.reason === "undefusable"), r = e.settings === "schema_rejected" || e.settings === "settings_too_large" || e.settings === "settings_unreadable", a = e.summary.droppedRules.credentialRestrictions > 0;
  return n > 0 || r || a ? "warning" : "debug";
}

var ue = "; start a new cloud session to try again";

function ce(e) {
  return Os(hn("userSettings") ?? e);
}

function Ue(e, {ifNoneStood: n, otherwise: r, why: a, wayOut: s}) {
  return e === !1 ? `${n}: ${a}${s}` : `${e === "gone" ? Zkn : r}: ${a}`;
}

function M(e, n, r) {
  return [ e === "create" ? `${Jkn}: ${n}${r}` : `${Qkn}: ${n}` ];
}

var ze = {
  lane_full: "the session has reached its limit of uploaded files",
  unavailable: "sending your settings is not available",
  unauthorized: vKt,
  failed: "sending your settings failed"
}, It = "the cloud could not confirm where your settings came from (this machine's clock may be wrong)", Nt = {
  device_key_unavailable: "this machine could not prove it is the computer the session is bound to (you are signed out, or its device key is missing or unreadable)",
  compliance_restricted: "your organization's compliance policy does not allow sending your settings",
  switched_off_by_anthropic: "sending your settings was turned off by Anthropic for now",
  direct_sync_off: "sending your settings is turned off for your organization"
};

function zt(e) {
  if (e.kind === "empty" && e.reason === "nothing_to_send") return Ne(e);
  return e.reason === "user_settings_disabled" ? "debug" : "warning";
}

function $t(e, n, r) {
  let a = Math.ceil(r / 1e3);
  switch (e.reason) {
   case "unbound":
    return [];

   case "rules_unreadable":
    {
      if (e.settings === "settings_unreadable") return M(n, `${ce(e.configHome)} has errors (see /status) or links to a missing file`, "; fix it and start a new cloud session");
      let s = e.unreadableSettingsFiles.length, _ = yZr(e.unreadableSettingsFiles);
      return _ === "" ? M(n, Gos([], ""), "") : M(n, `${_} ${I(s, "has", "have")} errors`, `; once ${I(s, "it is", "they are")} fixed, start a new cloud session`);
    }

   case "failed":
    return M(n, "preparing your settings failed (see the debug log)", ue);

   case "too_slow":
    return M(n, `preparing your settings took over ${a} ${I(a, "second")}`, ue);

   case "home_unvettable":
    return e.cause === "too_many_links" ? M(n, `your memory files and what they @import, or the links under ${Os(e.configHome)}, are too many to check`, "; remove some and start a new cloud session") : M(n, `a link, an unreadable folder or an @import under ${Os(e.configHome)} could not be checked`, "");

   case "nothing_to_send":
    {
      let s = e.kind === "empty" ? brr(e, {
        launch: n === "create" ? "create" : "reopen_sent_nothing",
        settingsFile: ce(e.configHome)
      }) : null;
      return s === null ? [] : [ s ];
    }

   case "user_settings_disabled":
    return [ "Settings from this machine were not sent to the cloud session: this launch does not load your user settings (--setting-sources, or an SDK settingSources list, without user)" ];

   case "flag_off":
   case "no_consent":
   case "aborted":
   case "no_project_files":
    return [];
  }
}

export { I6r };
