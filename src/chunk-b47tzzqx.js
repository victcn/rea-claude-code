// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ys, Me } from "./chunk-2v9tfgc3.js";

import { qK, cKn, D5, kLs, TLs, ALs, fin, CLs, L5, wIr, S1e, w1e, vIr, E9e } from "./chunk-q6wab2jw.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { K, B, YU, Lr, hx, he, _x } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l, E, W, XJe } from "./chunk-b0z4bv3v.js";

import { Ee, gr } from "./chunk-z52kmxx4.js";

import { NC } from "./chunk-y752zmas.js";

import { a } from "./chunk-j016gcgm.js";

import { _, fM, t } from "./chunk-kawq2919.js";

import { ne, vr } from "./chunk-5wbhf1bk.js";

import { Ct } from "./chunk-6ah1819r.js";

import { XP, VMs, Jr } from "./chunk-s2t7g8m9.js";

import { p } from "./chunk-jkzenvsk.js";

import { li } from "./chunk-zvghq5er.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { mt } from "./chunk-j90se18b.js";

import { gOe, T$s, si } from "./chunk-9yajep3y.js";

import { ie, ut, qo } from "./chunk-yxennhe9.js";

import { amt, Xsn } from "./chunk-dd98x6x7.js";

import { Oe, gi, vf, S9e } from "./chunk-cjt10y7b.js";

import { rPs, zWn, Fz, ZN, tc, nc, ml, Pw, VS, Sp, yk, km, Sn, QT, Pg, nko, vt, Up, aRr, bk } from "./chunk-xywp7esx.js";

import { _E, hsn, e1e, vIe, HCo, wU, HDs } from "./chunk-qqd24q2y.js";

import { DPr, a0s, KH, bfe, LPr, c0s } from "./chunk-46phtgr7.js";

import { Z0t, dIe, sfe, rft, k2n, HHs, DHs, bAo } from "./chunk-f1zpf9me.js";

import { nee } from "./chunk-hmce8a0s.js";

import { Zxe } from "./chunk-86k06k4p.js";

import { FWn } from "./chunk-x3pasead.js";

import { son } from "./chunk-3tedvrs9.js";

import { FBe, $9, yAo } from "./chunk-gc7m0yjq.js";

import { bve } from "./chunk-g4dysb0v.js";

import { o, v, M, oe, T, u, ue, U, A } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { gu } from "./chunk-53fww9mk.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { readFileSync as vn } from "fs";

import { join as Rn, resolve as En } from "path";

function Ze(e) {
  return hx(e) || son(e?.jwt ?? a.ANTHROPIC_AUTH_TOKEN) || rPs();
}

function wSo(e, n, i, r, s, c, d) {
  let m = Oe();
  if (!(d?.ignoreEnvOptOut === !0 && m === "firstParty" && vf() && !a.ANTHROPIC_UNIX_SOCKET) && ys(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER)) return "";
  let g = `${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION}.${e}`, y = process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown", C = m === "firstParty" && gi() || m === "vertex" ? " cch=00000;" : "", S = aRr(), $e = S ? ` cc_workload=${S};` : "", We = bk(n) && !n.isMainSession ? " cc_is_subagent=true;" : "", qe = i !== void 0 && /^req_[A-Za-z0-9_-]{1,36}$/.test(i) && m === "firstParty" && gi() ? ` cc_prev_req=${i};` : "", je = r !== void 0 && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(r) && m === "firstParty" && gi() ? ` cc_prompt_id=${r};` : "", Ye = typeof s === "string" && /^[a-z][a-z_]{0,31}$/.test(s) && m === "firstParty" && gi() ? ` cc_turn_origin=${s};` : "", ce = c?.promptIndex, de = c?.turnIndex, Ge = me(ce, 0) && me(de, 1) && m === "firstParty" && gi() ? ` cc_prompt_index=${ce}; cc_turn_index=${de};` : "", I = m === "gateway" ? Lr() : null, pe = (m === "gateway" || S9e() !== void 0) && Ze(I), q = I?.url ?? a.ANTHROPIC_BASE_URL, Xe = q !== void 0 && (!URL.canParse(q) || zWn(Fz(new URL(q)))) || I?.hostVerdict !== void 0 && "vouched" in I.hostVerdict, fe = `x-anthropic-billing-header: cc_version=${g}; cc_entrypoint=${y};${C}${$e}${We}${qe}${je}${Ye}${Ge}${(m === "gateway" || pe) && !Xe ? ` cc_gateway=${pe ? "1" : "env"};` : ""}`;
  return t(`attribution header ${fe}`), fe;
}

function gjn(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(NC));
}

function wRs(e) {
  if (e.isSubscriber) return {
    apiKey: null,
    authToken: e.oauthAccessToken ?? null
  };
  return {
    apiKey: e.apiKey,
    authToken: null
  };
}

function me(e, n) {
  return typeof e === "number" && Number.isInteger(e) && e >= n && e <= 1e7;
}

function Nkr() {
  if (gu()) return "tool_container_daemon";
  if (_x()) return "ccs_tenant";
  return Jr() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) ? "hosted_worker" : "none";
}

import { createHash as Qe } from "crypto";

import { constants as en } from "fs";

import { unlink as nn, open as tn } from "fs/promises";

var b = 8, ge = 4096, rn = ".stamp.json", ye = p(() => u({
  v: A(1),
  identity: o().regex(/^[0-9a-f]{64}$/),
  kind: U([ "org", "key", "wif", "token" ]),
  sha: o().min(1).max(128),
  confirmed_at: v().int().nonnegative(),
  hipaa_seen: T(o().regex(/^[0-9a-f]{64}$/)).max(b).default([]),
  hipaa_seen_incomplete: M().optional(),
  hipaa_ruled_out: T(o().regex(/^[0-9a-f]{64}$/)).max(b).optional()
}));

function n3e(e) {
  return `${e}${rn}`;
}

function _pe(e) {
  return Qe("sha256").update(e.descriptor).digest("hex");
}

function bpe(e) {
  return at(e).slice(0, 32);
}

var _e = {
  seen: [],
  incomplete: !1,
  ruledOut: []
};

function Ctn(e) {
  return {
    seen: e.hipaa_seen,
    incomplete: e.hipaa_seen_incomplete === !0,
    ruledOut: e.hipaa_ruled_out ?? []
  };
}

function $kr(e, n) {
  switch (e.kind) {
   case "ok":
    return Ctn(e.stamp);

   case "absent":
    return n;

   case "unusable":
    return {
      seen: n.seen,
      incomplete: !0,
      ruledOut: []
    };
  }
}

function Ce(e) {
  return e.incomplete ? {
    hipaa_seen_incomplete: !0,
    hipaa_ruled_out: e.ruledOut.slice(-b)
  } : {};
}

function Se(e, n, i) {
  if (e === null || e.sha !== i) return {
    kind: "unstamped",
    hipaaSeen: e?.hipaa_seen ?? []
  };
  if (e.identity !== n) return {
    kind: "foreign",
    hipaaSeen: e.hipaa_seen
  };
  return {
    kind: "match",
    stamp: e
  };
}

var sn = new Set([ "EMFILE", "ENFILE", "EAGAIN", "EBUSY", "EINTR" ]);

function be(e) {
  let n = E(e);
  return n !== void 0 && sn.has(n) ? {
    kind: "unusable",
    cause: "io",
    code: n
  } : {
    kind: "unusable",
    cause: "content"
  };
}

function hjn(e) {
  return e.kind === "unusable" && e.cause === "io";
}

function w(e) {
  let n = wIr(n3e(e), ge, {
    refuseLinkOnWindows: qK()
  });
  switch (n.kind) {
   case "absent":
    return {
      kind: "absent"
    };

   case "refused":
    return {
      kind: "unusable",
      cause: "content"
    };

   case "error":
    return t(`Policy limits: stamp unreadable (${l(n.error)}); cache reads as unvouched`), 
    be(n.error);

   case "ok":
    try {
      let i = ye().safeParse(mt(n.text, !1));
      return i.success ? {
        kind: "ok",
        stamp: i.data
      } : {
        kind: "unusable",
        cause: "content"
      };
    } catch {
      return {
        kind: "unusable",
        cause: "content"
      };
    }
  }
}

async function r3e(e) {
  let n;
  try {
    n = await tn(n3e(e), en.O_RDONLY | li);
    let i = await n.stat();
    if (!i.isFile() || i.size > ge) return {
      kind: "unusable",
      cause: "content"
    };
    let r = ye().safeParse(mt(await n.readFile({
      encoding: "utf-8"
    }), !1));
    return r.success ? {
      kind: "ok",
      stamp: r.data
    } : {
      kind: "unusable",
      cause: "content"
    };
  } catch (i) {
    return W(i) ? {
      kind: "absent"
    } : be(i);
  } finally {
    await (n?.close().catch(() => {}));
  }
}

function vSo({principal: e, bodySha: n, confirmedAt: i, bodyTaints: r, previous: s, authority: c}) {
  let d = _pe(e), m = r.includes("hipaa"), h, g;
  if (c === "prior_evidence" && !m) h = s.seen.slice(), g = s.ruledOut.slice(); else if (h = s.seen.filter(C => C !== d), 
  g = s.ruledOut.filter(C => C !== d), m) h.push(d); else if (s.incomplete) g.push(d);
  let y = h.length > b;
  return {
    v: 1,
    identity: d,
    kind: e.kind,
    sha: n,
    confirmed_at: i,
    hipaa_seen: h.slice(-b),
    ...Ce({
      ...s,
      incomplete: s.incomplete || y,
      ruledOut: g
    })
  };
}

var an = "0".repeat(64);

function vRs(e) {
  return {
    v: 1,
    identity: an,
    kind: "token",
    sha: "none",
    confirmed_at: 0,
    hipaa_seen: e.seen.slice(-b),
    ...Ce(e)
  };
}

async function Fkr(e, n) {
  await Tn(n3e(e), _(n), 384);
}

async function Ukr(e, n) {
  try {
    return await Fkr(e, n), !0;
  } catch (i) {
    return t(`Policy limits: failed to write the cache stamp - ${l(i)}`), !1;
  }
}

async function ERs(e) {
  try {
    await nn(n3e(e));
  } catch (n) {
    if (!W(n)) t(`Policy limits: failed to remove the cache stamp - ${l(n)}`);
  }
}

class Pe {
  notice=null;
  changed=Me();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (this.notice && e && this.notice.text === e.text && this.notice.url === e.url) return;
    this.notice = e, this.changed.emit(this.notice);
  }
}

var ln = new K(() => new Pe);

function O() {
  return ln.of(B().host);
}

function Ae(e) {
  O().replaceNotice(e);
}

function iut() {
  return O().notice;
}

function kRs(e) {
  return O().changed.subscribe(e);
}

var ESo = {
  subscribe: e => O().changed.subscribe(e),
  getSnapshot: iut
};

var cn = /\p{Default_Ignorable_Code_Point}/u, dn = /\p{Cf}/u;

function un(e) {
  return e >= 8204 && e <= 8207 || e === 1564 || e >= 65024 && e <= 65039 || e >= 6155 && e <= 6159 || e === 10240;
}

function F(e, n) {
  return cn.test(e) || e === "\u2028" || e === "\u2029" || e === "\u2800" || n >= 55296 && n <= 57343 || n === 1109742 || dn.test(e);
}

function cZ(e) {
  for (let n of e) if (F(n, n.codePointAt(0) ?? 0)) return !0;
  return !1;
}

function pn(e, n) {
  return F(e, n) && !un(n);
}

function ke(e, n) {
  let i = "";
  for (let r of e) i += n(r, r.codePointAt(0) ?? 0) ? "\ufffd" : r;
  return i;
}

function fn(e, n) {
  let i = Array.from(e), r = "";
  for (let s = 0; s < i.length; s++) {
    let c = i[s] ?? "";
    r += n(c, c.codePointAt(0) ?? 0, i[s - 1]?.codePointAt(0) ?? Number.NaN, i[s + 1]?.codePointAt(0) ?? Number.NaN) ? "\ufffd" : c;
  }
  return r;
}

function Ed(e) {
  return si(ke(e, pn));
}

function Z6e(e) {
  return X(ve(e));
}

function ve(e) {
  return si(ke(e, F));
}

var hK = 2e3, hn = 253;

function ujn(e) {
  return hn + (e.endsWith(".") && !e.endsWith("..") ? 1 : 0);
}

var kw = 2e5;

function mn(e, n = hK) {
  return ne(e, n) === e;
}

function tS(e) {
  return e.includes(`\n`) || ie(e) > 80;
}

function ktn(e) {
  let n = ne(e, hK), i = n.replace(/\t/g, " ");
  return n === e ? i : `${i}\u2026`;
}

function k(e) {
  return ie(e.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0;
}

function j(e) {
  return Array.from(e).filter(n => Re(n)).join("");
}

function Re(e) {
  return ie(e.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0;
}

var gn = 8, yn = /\p{M}/u;

function SSo(e) {
  return yn.test(e) || !Re(e);
}

function zg(e) {
  let n = "", i = 0, r = !1;
  for (let s of e) {
    if (s === `\n`) {
      if (r) n += "\ufffd", r = !1;
      n += s, i = 0;
      continue;
    }
    if (!SSo(s)) {
      if (r) n += "\ufffd", r = !1;
      n += s, i = 0;
      continue;
    }
    if (i < gn) {
      n += s, i++;
      continue;
    }
    r = !0;
  }
  return r ? `${n}\ufffd` : n;
}

function X(e) {
  return si(zg(e));
}

function _n(e) {
  let n = Array.from(e), i = 0, r = n.length;
  while (i < r && !k(n[i] ?? "")) i++;
  while (r > i && !k(n[r - 1] ?? "")) r--;
  return n.slice(i, r).join("");
}

function Y(e, n) {
  let i = Array.from(_n(e));
  return n === "end" ? i.at(-1) : i[0];
}

function xe(e) {
  return Y(e, "end") === "\u2026";
}

function gRs(e) {
  let n = Array.from(e), i = n.length;
  for (;;) {
    let r = i;
    while (r > 0 && !k(n[r - 1] ?? "")) r--;
    if (r > 0 && n[r - 1] === "\u2026") {
      i = r - 1;
      continue;
    }
    break;
  }
  return n.slice(0, i).join("");
}

function r5(e) {
  let n = [], i = !1;
  for (let r of Array.from(e)) {
    if (r !== `\n` && !k(r)) {
      i = !0;
      continue;
    }
    if (r === "\ufffd" && i) {
      i = !1;
      continue;
    }
    i = !1, n.push(r);
  }
  return k(n.join(""));
}

function Cn(e) {
  return /^[A-Za-z_$][\w$]*$/.test(e);
}

function fUe(e) {
  return Z6e(e);
}

function L(e) {
  return X(si(fn(e, (n, i, r, s) => {
    if (i === 65038 || i === 65039) return !(r > 127 || s === 8419);
    if (i === 8204 || i === 8205) return !(r > 127 && s > 127);
    if (i >= 6155 && i <= 6159) return !(r > 127);
    return F(n, i);
  })));
}

function KF(e) {
  if (e === void 0) return !1;
  let n = Z6e(e).replace(/\uFFFD/g, "").replace(/\s+/g, " ").trim();
  return n !== "" && ie(n) > 0;
}

var e3e = 48, GN = 256;

function hpe(e) {
  let n = fUe(ne(e, GN)), i = n.replace(/\s+/g, " ").trim();
  return ut(pjn(i, n, e.length > GN), e3e);
}

function pjn(e, n, i = !1) {
  let r = Y(e, "start") === '"' || Y(e, "end") === '"' || xe(e);
  return e === n && !r && !i ? e : _(n);
}

function Ie(e) {
  let n = fUe(ne(e, GN)), i = n.replace(/\s+/g, " ").trim();
  return pjn(i, n, e.length > GN);
}

function dwe(e) {
  return ne(e, GN) === e;
}

function mUe(e, n) {
  let i = new Map, r = d => n(d).normalize("NFC");
  for (let d of e) {
    let m = r(d), h = i.get(m) ?? new Set;
    h.add(d), i.set(m, h);
  }
  let s = d => _(ne(d, hK)).replace(/[\u007f-\uffff]/g, m => `\\u${m.charCodeAt(0).toString(16).padStart(4, "0")}`) + (d.length > hK ? "\u2026" : ""), c = new Map;
  return e.map(d => {
    let m = r(d);
    if ((i.get(m)?.size ?? 0) <= 1) return n(d);
    let h = s(d), g = c.get(h) ?? new Map;
    c.set(h, g);
    let y = g.get(d) ?? g.size + 1;
    return g.set(d, y), y > 1 ? `${h} (#${y})` : h;
  });
}

function Ttn(e) {
  let n = new Map;
  for (let c of e) n.set(c, Cn(c) ? c : _(Z6e(c)));
  let i = new Map;
  for (let c of n.values()) i.set(c, (i.get(c) ?? 0) + 1);
  let r = bn(e), s = new Map;
  for (let c of e) {
    let d = n.get(c) ?? "", m = (i.get(d) ?? 0) > 1 || r.has(c.normalize("NFC"));
    s.set(c, m ? _(c).replace(/[\u007f-\uffff]/g, h => `\\u${h.charCodeAt(0).toString(16).padStart(4, "0")}`) : d);
  }
  return s;
}

function bn(e) {
  let n = new Map, i = new Set;
  for (let r of e) {
    let s = r.normalize("NFC"), c = n.get(s);
    if (c !== void 0 && c !== r) i.add(s); else n.set(s, r);
  }
  return i;
}

function cE(e) {
  return typeof e === "string" && rut(e) ? "" : String(xse(e));
}

function xse(e) {
  let n = typeof e === "string" && !rut(e) ? e : FBe;
  return $9(hpe(n));
}

function rut(e) {
  return e === "" || ie(ne(e, GN)) === 0;
}

function Pn(e) {
  return e.replace(/_+/g, " ").trim().replace(/\b\w/g, n => n.toUpperCase());
}

function fjn(e) {
  let n = ne((e.scope === "claudeai" ? e.displayName : void 0) ?? "", GN), i = ne(e.title ?? "", GN), r = L(ne(e.serverName, GN)), s = KF(n) ? L(n) : r5(r) ? r : "(unnamed server)", c = ne(e.toolName, GN), d = fUe(Pn(c)), m = fUe(c), h = KF(i) ? L(i) : r5(d) ? d : r5(m) ? m : "(unnamed tool)";
  return $9(ut(`${s} \u2014 ${h}`.replace(/\s+/g, " ").trim(), e3e));
}

function mjn(e) {
  return $9(Xxe(e, "(unnamed tool)"));
}

function Xxe(e, n) {
  let i = hpe(e);
  return r5(i) ? i : n;
}

function $i(e) {
  if (typeof e !== "string") return {
    text: $9(""),
    needsGutter: !1
  };
  let n = X(Ed(ktn(e)));
  return {
    text: $9(n),
    needsGutter: tS(n)
  };
}

function o5(e) {
  if (typeof e !== "string") return null;
  if (!dwe(e) || e.trim() === "" || ie(e) === 0) return null;
  if (zg(e) !== e) return null;
  return {
    display: $9(Ie(e))
  };
}

var P = "(value cannot be shown in full \u2014 approval withheld; one-time options only)", An = 1e4, kn = 64;

function G(e, n, i = 0) {
  if (typeof e === "string") {
    if (e.length + 2 > n.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let c = _(e);
    if (n.unitsRemaining -= c.length, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return c;
  }
  if (typeof e === "number") {
    let c = Number.isFinite(e) ? String(e) : "null";
    if (n.unitsRemaining -= c.length, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return c;
  }
  if (typeof e === "boolean" || e === null) {
    if (n.unitsRemaining -= String(e).length, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    return String(e);
  }
  if (typeof e === "bigint") throw Error("bigint payload cannot be serialized");
  if (typeof e !== "object") return;
  if (i >= kn) throw Error("payload exceeds the serialization depth wall");
  if (Array.isArray(e)) {
    let c = e.length;
    if (typeof c !== "number" || !Number.isSafeInteger(c) || c < 0) throw Error("payload length is not an honest array length");
    if (n.elementsRemaining -= c, n.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
    if (n.unitsRemaining -= 2 + (c > 0 ? c - 1 : 0), n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    let d = [];
    for (let m = 0; m < c; m++) {
      let h = G(e[m], n, i + 1);
      if (h === void 0) {
        if (n.unitsRemaining -= 4, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
        d.push("null");
      } else d.push(h);
    }
    return `[${d.join(",")}]`;
  }
  let r = Object.entries(e);
  if (n.elementsRemaining -= r.length, n.elementsRemaining < 0) throw Error("payload exceeds the element serialization wall");
  if (n.unitsRemaining -= 2, n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
  let s = [];
  for (let [c, d] of r) {
    let m = G(d, n, i + 1);
    if (m === void 0) continue;
    if (c.length + 2 > n.unitsRemaining) throw Error("payload exceeds the serialization budget");
    let h = _(c);
    if (n.unitsRemaining -= h.length + 1 + (s.length > 0 ? 1 : 0), n.unitsRemaining < 0) throw Error("payload exceeds the serialization budget");
    s.push(`${h}:${m}`);
  }
  return `{${s.join(",")}}`;
}

function Tw(e, n) {
  let i;
  if (typeof e === "string") i = e; else try {
    let d = G(e, {
      unitsRemaining: n?.maxUnits ?? hK,
      elementsRemaining: An
    });
    if (d === void 0) return {
      kind: "withheld",
      marker: $9(P)
    };
    i = d;
  } catch {
    return {
      kind: "withheld",
      marker: $9(P)
    };
  }
  if (!mn(i, n?.maxUnits)) return {
    kind: "withheld",
    marker: $9(P)
  };
  let r = n?.softWrap ? T$s(i) : i, s = (n?.scrub === "key" ? ve(r) : Ed(r)).replace(/\t/g, " "), c = n?.softWrap ? s.replaceAll(`\n`, "") : s;
  if (gOe.test(c)) return {
    kind: "withheld",
    marker: $9(P)
  };
  if (zg(s) !== s) return {
    kind: "withheld",
    marker: $9(P)
  };
  return {
    kind: "full",
    text: $9(s),
    needsGutter: tS(s)
  };
}

function M0(e) {
  let n = Ed(e);
  return gOe.test(n) || we(n);
}

function hRs(e) {
  return we(Ed(e));
}

function we(e) {
  return zg(e) !== e;
}

function Dkr(e) {
  let n = fUe(ne(e, GN)), i = n.replace(/\s+/g, " ").trim();
  return pjn(i, n, i.includes(",") || i.includes(";") || j(i).includes(" and ") || j(i).startsWith("and ") || j(i).endsWith(" and") || e.length > GN || zg(ne(e, GN)) !== ne(e, GN));
}

function N1(e, n = Ie) {
  return mUe(e, n).map(i => $9(i));
}

function Oi(e) {
  return e.replace(/[\n\r\u2028\u2029]/g, "\ufffd");
}

function Atn(e, n) {
  let i = e.map(g => Tw(g, n)), r = new Map;
  e.forEach((g, y) => {
    let C = i[y];
    if (C.kind === "full" && !r.has(g)) r.set(g, Oi(C.text).replace(/\s+/g, " ").trim());
  });
  let s = e.filter((g, y) => i[y].kind === "full"), c = N1(s, g => r.get(g) ?? ""), d = [], m = 0, h = 0;
  for (let g of i) if (g.kind === "full") d.push({
    text: String(c[m++]),
    withheld: !1
  }); else h += 1, d.push({
    text: `${g.marker} (#${h})`,
    withheld: !0
  });
  return d;
}

function out(e) {
  if (typeof e !== "string") return yAo("");
  return yAo(Ed(e));
}

function ype(e) {
  if (typeof e !== "string") return null;
  let n = L(ne(e, GN)).replace(/\t/g, " ");
  if (!r5(vr(n))) return null;
  if (xe(vr(n))) return null;
  return $9(qo(n, 24, !0));
}

function yRs(e, ...n) {
  let i = e[0] ?? "";
  for (let r = 0; r < n.length; r++) i += n[r] ?? "", i += e[r + 1] ?? "";
  return $9(i);
}

function t3e(e) {
  return /[\u0000-\u001f\u007f-\u009f]/.test(e) || cZ(e);
}

function Z(e) {
  let n = ne(fM(e, "").toLowerCase(), 64).trim();
  return /^[a-z0-9_-]+$/.test(n) ? n : "";
}

var sut = 16;

function Lkr(e) {
  let n = typeof e === "object" && e !== null && "compliance_taints" in e ? e.compliance_taints : void 0;
  if (!Array.isArray(n)) return 0;
  let i = N(n, s => typeof s !== "string" || Z(s) === ""), r = D(n.filter(s => typeof s === "string").map(Z).filter(s => s.length > 0));
  return i + Math.max(0, r.length - sut);
}

var Te = p(() => u({
  restrictions: ue(o(), u({
    allowed: M()
  })),
  compliance_taints: T(oe()).default([]).transform((e, n) => {
    let i = D(e.filter(r => typeof r === "string").map(Z).filter(r => r.length > 0)).slice(0, sut);
    if (e.length > 0 && i.length === 0) n.addIssue({
      code: "custom",
      message: "compliance_taints had entries but none were well-formed regime names"
    });
    return i;
  }),
  monitoring_notice: u({
    text: o().max(500).transform(e => fM(e, "", {
      keepEmojiJoiners: !0
    })),
    url: o().max(2048).url().startsWith("https://").refine(e => !t3e(e)).nullish().catch(null)
  }).nullable().default(null).catch(null),
  defaults: ue(o(), oe()).default({}).catch({}),
  core_skills: T(o().max(128)).max(256).optional().catch([])
})), gUe = {
  restrictions: {},
  compliance_taints: [],
  monitoring_notice: null,
  defaults: {}
}, _Rs = [ "ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "EHOSTUNREACH", "ENETUNREACH", "EPIPE", "CERT_ERROR", "ABORTED", "OTHER" ], bRs = [ "invalid_request_error", "authentication_error", "permission_error", "not_found_error", "rate_limit_error" ], SRs = [ "ip_not_in_allowed_range", "claude_code_key_creator_not_member", "organization_disabled", "organization_on_hold", "restricted_regime_endpoint", "oauth_not_allowed_for_organization", "oauth_scope_insufficient", "token_expired" ];

var Bkr = "policy-limits.json", xn = 5e3, De = 256, Ne = {
  kind: "absent"
}, jkr = 3e4;

function Wkr() {
  return cKn() ? Ne : w(fk());
}

function zkr(e) {
  return e.kind === "absent" && !cKn() ? w(fk()) : e;
}

class TRs {
  sessionCache=null;
  lastFetchOutcome=null;
  settledWithoutVerdictFor=null;
  failOpenVerdict=!1;
  sessionFromServerFetch=!1;
  lastServedCoreSkills=null;
  verdictEnvBearerDigest=null;
  diskAdoptionSuppressed=!1;
  diskAdoptionEpoch=0;
  storageV5=void 0;
  lastStampVerdict="none";
  storedCopyTrust="not_asked";
  lastStampMatchedIdentity=null;
  hipaaEvidence=_e;
  hipaaSeenUnreadable=!1;
  diskBodyChecksum=null;
  diskConfirmedAtMs=null;
  diskRefusedAtMs=null;
  hipaaEvidenceLoaded=!1;
  hintedTaints=[];
  hintedDeniedKeys=[];
  hintedEnforcedKeys=[];
  sessionAttributed=!1;
  attributedBearerDigest=null;
  sessionVerdictDisowned=!1;
  principalRung="none";
  evidenceRereadForBearer=void 0;
  wifRecordedOrg=void 0;
  wifAccountDiverged=!1;
  wifSourceLocation=void 0;
  wifRecordProfile=void 0;
  oauthPrincipalMemo=null;
  storedLoginAccountAtWire=null;
  storedLoginNotedTokenDigest=null;
  tunnelSocket=void 0;
  machinePinsSignIn=void 0;
  cacheRevision=0;
  verdictChanged=Me();
  heldStartSignal=Me();
  replaceSessionCache(e, n = !1, i = !1) {
    if (this.failOpenVerdict = e !== null && (n || this.failOpenVerdict && (i || e === this.sessionCache)), 
    this.sessionCache = e, e?.core_skills !== void 0) this.lastServedCoreSkills = this.sessionFromServerFetch ? e.core_skills : this.narrowedServedList(e.core_skills);
    if (!i) this.verdictEnvBearerDigest = null;
    if (e === null) this.sessionAttributed = !1, this.attributedBearerDigest = null, 
    this.sessionVerdictDisowned = !1, this.evidenceRereadForBearer = void 0;
    this.cacheRevision++;
    let r = DPr(this.effectiveTaints());
    if (Ae(e?.monitoring_notice ?? null), r) ZN();
    this.emitVerdictChanged();
  }
  effectiveTaints(e = this.sessionCache?.compliance_taints ?? []) {
    return this.hintedTaints.length === 0 ? e : D([ ...this.hintedTaints, ...e ]).slice(0, sut);
  }
  dropHintedTaints() {
    if (this.hintedTaints.length === 0 && this.hintedDeniedKeys.length === 0 && this.hintedEnforcedKeys.length === 0) return;
    if (this.hintedTaints = [], this.hintedDeniedKeys = [], this.hintedEnforcedKeys = [], 
    this.cacheRevision++, DPr(this.effectiveTaints())) ZN();
    this.emitVerdictChanged();
  }
  hintFromRefusedBody(e) {
    if (this.sessionCache !== null && this.sessionAttributed) return;
    let n = e.compliance_taints.filter(h => USo.some(([g]) => g === h)), i = D([ ...this.hintedTaints, ...n ]), r = Object.entries(e.restrictions).filter(([h, g]) => g?.allowed === !1 && !ee(h)).map(([h]) => h), s = D([ ...this.hintedDeniedKeys, ...r ]).slice(0, De), c = Object.entries(e.restrictions).filter(([h, g]) => g?.allowed === !0 && ee(h)).map(([h]) => h), d = D([ ...this.hintedEnforcedKeys, ...c ]).slice(0, De), m = !1;
    if (e.core_skills !== void 0) {
      let h = this.narrowedServedList(e.core_skills);
      if (this.lastServedCoreSkills === null || h.join(`\n`) !== this.lastServedCoreSkills.join(`\n`)) this.lastServedCoreSkills = h, 
      m = !0;
    }
    if (!m && i.length === this.hintedTaints.length && s.length === this.hintedDeniedKeys.length && d.length === this.hintedEnforcedKeys.length) return;
    if (this.hintedTaints = i, this.hintedDeniedKeys = s, this.hintedEnforcedKeys = d, 
    this.cacheRevision++, DPr(this.effectiveTaints())) ZN();
    this.emitVerdictChanged();
  }
  narrowedServedList(e) {
    let n = new Set(this.lastServedCoreSkills ?? FWn);
    return e.filter(i => n.has(i));
  }
  emitVerdictChanged() {
    try {
      this.heldStartSignal.emit();
    } catch (e) {
      t(`Policy limits: a held-start listener threw: ${l(e)}`, {
        level: "error"
      });
    }
    if (D5()) return;
    try {
      this.verdictChanged.emit();
    } catch (e) {
      t(`Policy limits: a verdict-change listener threw: ${l(e)}`, {
        level: "error"
      });
    }
  }
}

var lGs = new K(() => new TRs);

function f() {
  return lGs.of(B().host);
}

function Rtn(e) {
  let n = f();
  n.sessionFromServerFetch = e !== null, n.replaceSessionCache(e);
}

function yjn(e) {
  let n = f();
  n.sessionFromServerFetch = !1, n.replaceSessionCache(e);
}

function Gkr(e) {
  f().verdictEnvBearerDigest = e;
}

function sHt() {
  let e = f().verdictEnvBearerDigest;
  if (e === null) return null;
  if (fin()) return !1;
  let n = Pw();
  return n !== void 0 && bpe(n) === e && !gjn({
    anthropicAuthEnabled: ml(),
    oauthScopes: Sn()?.scopes
  }) && VS() == null;
}

function kSo() {
  let e = f();
  e.sessionFromServerFetch = !1, e.replaceSessionCache(gUe, !0);
}

function iHt(e) {
  let n = f(), i = n.sessionCache !== null;
  if (!i) n.sessionFromServerFetch = !1, n.sessionAttributed = n.lastStampVerdict === "match", 
  n.attributedBearerDigest = n.sessionAttributed ? Ue() : null, n.sessionVerdictDisowned = n.lastStampVerdict === "disabled", 
  n.evidenceRereadForBearer = void 0;
  n.replaceSessionCache(e, !1, i);
}

function TSo(e) {
  if (a0s(e)) ZN();
}

function Vkr(e, n, i = !0) {
  let r = f();
  if (r.lastFetchOutcome = e, e === null || e.success) r.settledWithoutVerdictFor = null; else if (!e.retrying && (i || !Kkr(e))) {
    let s = e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && e.httpStatus !== null && (e.httpStatus === 404 || e.httpStatus >= 500);
    r.settledWithoutVerdictFor = s ? n ?? ARs() ?? "" : null;
  }
  r.cacheRevision++, r.emitVerdictChanged();
}

function Kkr(e) {
  return e.errorCode === "network_error" || e.errorCode === "timeout" || e.errorCode === "request_failed" && (e.httpStatus === null || e.httpStatus >= 500 || e.httpStatus >= 400 && !XJe(e.httpStatus));
}

function Pse() {
  return f().lastFetchOutcome;
}

function ASo() {
  f().storageV5 = void 0;
}

function Jxe() {
  return AH() !== void 0 || he();
}

function _jn() {
  return Nkr() !== "none";
}

function qkr() {
  return Jxe() || f().diskAdoptionSuppressed;
}

function H0() {
  return f().sessionCache;
}

function xtn() {
  let e = f();
  e.diskAdoptionSuppressed = !0, e.diskAdoptionEpoch++;
}

function o3e() {
  return f().diskAdoptionEpoch;
}

function bjn() {
  f().diskAdoptionSuppressed = !1;
}

function Sjn() {
  return f().diskAdoptionSuppressed;
}

function aHt() {
  return f().cacheRevision;
}

function CSo() {
  return D5() ? -1 : aHt();
}

function D0(e) {
  return f().verdictChanged.subscribe(e);
}

function s3e(e) {
  return f().heldStartSignal.subscribe(e);
}

function fk() {
  return Rn(Ee(), Bkr);
}

function AH() {
  let e = f();
  if (e.tunnelSocket === void 0) {
    let n = a.ANTHROPIC_UNIX_SOCKET;
    e.tunnelSocket = n && HDs({
      ANTHROPIC_UNIX_SOCKET: n,
      CLAUDE_CODE_OAUTH_TOKEN: a.CLAUDE_CODE_OAUTH_TOKEN,
      ANTHROPIC_API_KEY: a.ANTHROPIC_API_KEY,
      ANTHROPIC_AUTH_TOKEN: a.ANTHROPIC_AUTH_TOKEN
    }) ? n : null;
  }
  return e.tunnelSocket ?? void 0;
}

function RSo() {
  f().tunnelSocket = void 0;
}

function Fe() {
  let e = f();
  if (e.machinePinsSignIn !== void 0) return e.machinePinsSignIn;
  let n = Xsn();
  if (amt()) e.machinePinsSignIn = n;
  return n;
}

function xSo() {
  f().machinePinsSignIn = void 0;
}

var Ptn = new Set([ "prosumer_oauth", "third_party_provider", "custom_base_url" ]);

function Ykr(e = {}) {
  if (Oe() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !AH() && !gi()) return "custom_base_url";
  return;
}

function by() {
  return e9() === void 0;
}

function e9(e = {}) {
  let n = Ykr(e);
  if (n !== void 0) return n;
  if (AH()) return;
  try {
    let {key: r} = yk({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (r) return;
  } catch {}
  if (nc()) return;
  let i = Sn();
  if (!i?.accessToken) return "no_auth";
  if (!i.scopes?.includes(NC)) return "oauth_no_inference_scope";
  if (i.subscriptionType == null) return;
  if (i.subscriptionType !== "enterprise" && i.subscriptionType !== "team") return Fe() ? void 0 : "prosumer_oauth";
  return;
}

function lHt() {
  let e = f();
  if (z() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  if (qkr()) return f().sessionCache;
  if (e.diskRefusedAtMs !== null && Date.now() - e.diskRefusedAtMs < xn) return null;
  let n = Wkr();
  if (!e.hipaaEvidenceLoaded && !cKn()) R(n);
  e.storedCopyTrust = "not_asked";
  let i;
  try {
    i = Ejn(vn(fk(), "utf-8"));
  } catch {
    return null;
  }
  if (i === null) return null;
  try {
    return Xkr(i, zkr(n));
  } catch (r) {
    return t(`Policy limits: cache admission failed (${l(r)}); cold start`, {
      level: "error"
    }), null;
  }
}

function Xkr(e, n) {
  let i = f();
  if (cKn()) return i.lastStampVerdict = "disabled", i.lastStampMatchedIdentity = null, 
  i.diskConfirmedAtMs = null, i.diskRefusedAtMs = null, J(e, void 0);
  let r = L5(a3e(e));
  if (R(n), n.kind === "absent") return i.lastStampVerdict = "legacy", i.lastStampMatchedIdentity = null, 
  i.diskBodyChecksum = r, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = null, J(e, r);
  let s = n.kind === "ok" ? n.stamp : null, c = s5(), d = c === null ? "" : _pe(c), m = Se(s, d, r);
  switch (i.lastStampMatchedIdentity = null, m.kind) {
   case "match":
    i.lastStampVerdict = "match", i.lastStampMatchedIdentity = d, i.diskBodyChecksum = r, 
    i.diskConfirmedAtMs = m.stamp.confirmed_at, i.diskRefusedAtMs = null;
    let h = J(e, r);
    if (h !== null) i.dropHintedTaints();
    return h;

   case "unstamped":
    return i.lastStampVerdict = "torn", i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, 
    i.diskRefusedAtMs = Date.now(), i.hintFromRefusedBody(e), t("Policy limits: the cache stamp does not vouch for the cached body; cold start (its compliance taints and explicit denials still deny)"), 
    null;

   case "foreign":
    return i.lastStampVerdict = "foreign", i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, 
    i.diskRefusedAtMs = Date.now(), i.hintFromRefusedBody(e), t("Policy limits: the cache was written under another credential's identity; cold start (its compliance taints and explicit denials still deny until this credential's verdict lands)"), 
    null;
  }
}

function J(e, n) {
  let i = f();
  if (!qK()) return i.storedCopyTrust = "not_asked", e;
  let r, s;
  try {
    s = {
      orgs: Zxe()
    };
  } catch (c) {
    t(`Policy limits: the admin organization pin is not known: ${l(c)}`), s = void 0;
  }
  if (s === void 0) r = "org_pin_unknown"; else try {
    let c = vIr({
      kind: "policy-limits",
      cachePath: fk(),
      body: a3e(e),
      bodySha: n ?? L5(a3e(e)),
      account: Up(),
      pinnedOrgs: s.orgs,
      nowMs: Date.now(),
      roots: E9e()
    });
    if (c.trusted) return i.storedCopyTrust = c, e;
    r = c.reason;
  } catch (c) {
    t(`Policy limits: the gate on a stored copy failed: ${l(c)}`, {
      level: "error"
    }), r = "error";
  }
  return i.storedCopyTrust = {
    trusted: !1,
    reason: r
  }, i.diskBodyChecksum = null, i.diskConfirmedAtMs = null, i.diskRefusedAtMs = Date.now(), 
  i.hintFromRefusedBody(e), t(`Policy limits: the stored copy is not trusted at rest (${r}); cold start (its compliance taints and explicit denials still deny)`), 
  null;
}

function s5() {
  let e = f();
  if (e.principalRung = "none", AH() !== void 0) return e.principalRung = "tunnel", 
  null;
  let n = null, i = "none";
  try {
    ({key: n, source: i} = yk());
  } catch {}
  if (!n && nc()) {
    if (e.principalRung = "wif", e.wifAccountDiverged) return null;
    let r = _E(), s = a.ANTHROPIC_PROFILE, c;
    try {
      if (c = (r === "env-quad" ? a.ANTHROPIC_ORGANIZATION_ID?.trim() : e1e()?.organizationUuid?.trim()) || "", 
      c && e.wifSourceLocation === void 0) {
        if (r === "profile-implicit") {
          let g = wU();
          e.wifRecordProfile = g === null ? void 0 : vIe(g);
        } else if (r === "profile-explicit") e.wifRecordProfile = s;
        e.wifSourceLocation = re(r);
      }
    } catch (g) {
      return t(`Policy limits: WIF profile unreadable (${l(g)}); its policy verdicts are session-only until restart`), 
      e.wifAccountDiverged = !0, null;
    }
    if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = c.toLowerCase() || null; else if (e.wifRecordedOrg !== (c.toLowerCase() || null)) return t("Policy limits: the WIF source now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart"), 
    e.wifAccountDiverged = !0, null;
    if (!c) return null;
    let d = r === "env-quad" ? null : wU(), m = r === "env-quad" ? re("env-quad") : s ? se(d, s) : void 0;
    if (r === "profile-implicit" && s !== void 0 && s !== e.wifRecordProfile || r === "profile-explicit" && (s === void 0 || s !== e.wifRecordProfile) || m !== void 0 && m !== e.wifSourceLocation || m === void 0 && r !== "env-quad" && e.wifSourceLocation !== void 0 && (d === null ? e.wifSourceLocation !== "" : !e.wifSourceLocation.startsWith(se(d, "")))) return t("Policy limits: the environment now selects a different WIF source than the one this process derived its principal from; its policy verdicts are session-only until restart"), 
    e.wifAccountDiverged = !0, null;
    let h = Vt(c);
    if (h) return Q(h);
    return {
      kind: "wif",
      descriptor: `wif:${bpe([ e.wifSourceLocation, c.toLowerCase() ].join("\0"))}`
    };
  }
  if (vt()) {
    let r = Sn()?.accessToken;
    if (r) return e.principalRung = "oauth", In(r);
  }
  if (i === "apiKeyHelper") return e.principalRung = "helper", null;
  if (n) return e.principalRung = "key", {
    kind: "key",
    descriptor: `key:${bpe(n)}`
  };
  return null;
}

function PSo() {
  let e = f();
  if (e.wifAccountDiverged || VS() || !nc()) return;
  let n;
  try {
    n = e.wifSourceLocation !== void 0 && re(_E()) !== e.wifSourceLocation;
  } catch (r) {
    t(`Policy limits: WIF profile selection unreadable (${l(r)}); its policy verdicts are session-only until restart`), 
    e.wifAccountDiverged = !0;
    return;
  }
  if (n) {
    e.wifAccountDiverged = !0, t("Policy limits: the active WIF source moved since this process derived its principal; its policy verdicts are session-only until restart");
    return;
  }
  let i;
  try {
    if (_E() === "env-quad") i = a.ANTHROPIC_ORGANIZATION_ID?.trim().toLowerCase() || null; else hsn(), 
    i = e1e()?.organizationUuid?.trim().toLowerCase() ?? null;
  } catch (r) {
    t(`Policy limits: WIF account record unreadable (${l(r)}); its policy verdicts are session-only until restart`), 
    e.wifAccountDiverged = !0;
    return;
  }
  if (e.wifRecordedOrg === void 0) e.wifRecordedOrg = i; else if (e.wifRecordedOrg !== i) e.wifAccountDiverged = !0, 
  t("Policy limits: the WIF profile now records a different organization than the one this process derived its principal from; its policy verdicts are session-only until restart");
}

async function Jkr(e, n) {
  let i = Sn()?.accessToken;
  if (!i) return;
  let r = f(), s = await Pg(n);
  if (s !== "store") {
    if (s !== "none") r.storedLoginNotedTokenDigest = bpe(i);
    return;
  }
  let c = await nko(e), d = Sn()?.accessToken;
  if (!d) return;
  r.storedLoginNotedTokenDigest = bpe(d), r.storedLoginAccountAtWire = {
    tokenDigest: bpe(d),
    organizationUuid: d === i ? c : null
  };
}

function ISo() {
  let e = Sn()?.accessToken;
  if (!e) return !1;
  let n = f(), i = bpe(e);
  if (n.storedLoginNotedTokenDigest !== i) return !0;
  let r = n.storedLoginAccountAtWire;
  return r !== null && r.tokenDigest === i && r.organizationUuid !== (Vt(Up()?.organizationUuid) ?? null);
}

function In(e) {
  let n = f(), i = Up(), r = Vt(a.CLAUDE_CODE_ORGANIZATION_UUID), s = bpe(e), c = n.storedLoginAccountAtWire, d = c !== null && c.tokenDigest === s ? c.organizationUuid : void 0, m = [ s, r ?? "", i?.organizationUuid ?? "", d === void 0 ? "" : `fresh:${d ?? "-"}`, a.CLAUDE_CODE_OAUTH_TOKEN ? "env" : "" ].join("|"), h = n.oauthPrincipalMemo;
  if (h?.key === m && (h.expiresAtMs === null || Date.now() < h.expiresAtMs)) return h.principal;
  let g = {
    kind: "token",
    descriptor: `token:${s}`
  }, y = !1, C = QT();
  switch (C) {
   case "store":
    {
      let S = Vt(i?.organizationUuid) ?? null;
      if (d !== void 0 && d !== S) g = {
        kind: "token",
        descriptor: `token:${s}`,
        unclassified: !0
      }; else if (S) g = Q(S); else g = {
        kind: "token",
        descriptor: `token:${s}`,
        storedLoginOrgless: !0
      };
      break;
    }

   case "env":
   case "fd":
    if (C === "fd" && YU() && !tc()) g = null, y = !0; else if (r) g = {
      ...Q(r),
      bearerDigest: s
    };
    break;

   case "none":
    g = {
      kind: "token",
      descriptor: `token:${s}`,
      unclassified: !0
    };
    break;
  }
  return n.oauthPrincipalMemo = {
    key: m,
    principal: g,
    daemonSnapshotWorker: y,
    expiresAtMs: C === "none" || g === null ? Date.now() + jkr : null
  }, g;
}

function Q(e) {
  return {
    kind: "org",
    descriptor: `org:${e.toLowerCase()}`
  };
}

function Qkr() {
  let e = f();
  e.sessionAttributed = !0, e.attributedBearerDigest = Ue(), e.sessionVerdictDisowned = !1, 
  e.evidenceRereadForBearer = void 0, e.dropHintedTaints();
}

function He() {
  let e = Sn()?.accessToken;
  return e ? bpe(e) : null;
}

function Ue() {
  let e = f();
  try {
    s5();
  } catch {
    return null;
  }
  return e.principalRung === "oauth" ? He() : null;
}

function dHt() {
  let e = f(), n = !e.sessionVerdictDisowned;
  if (e.sessionAttributed = !1, e.attributedBearerDigest = null, e.sessionVerdictDisowned = !0, 
  e.evidenceRereadForBearer = void 0, n) e.cacheRevision++, e.emitVerdictChanged();
}

function ARs() {
  let e = s5();
  return e === null ? null : _pe(e);
}

function OSo() {
  let e = f().storedCopyTrust;
  return e === "not_asked" ? e : S1e(e);
}

function MSo() {
  return w1e(f().storedCopyTrust);
}

function wjn() {
  return f().lastStampVerdict;
}

function HSo() {
  return f().lastStampMatchedIdentity;
}

function Zkr() {
  let e = f();
  if (!e.hipaaEvidenceLoaded) R(Be());
  return e.hipaaEvidence;
}

function R(e) {
  let n = f();
  if (n.hipaaEvidenceLoaded = !hjn(e), e.kind === "ok") n.hipaaEvidence = Ctn(e.stamp); else if (e.kind === "unusable" && !hjn(e)) n.hipaaSeenUnreadable = !0;
}

function Be() {
  return Jxe() ? Ne : w(fk());
}

function vjn() {
  return f().hipaaEvidence;
}

function DSo() {
  let e;
  try {
    e = s5();
  } catch (r) {
    t(`Policy limits: principal unreadable for the evidence tier (${l(r)}); judged on the machine's evidence`, {
      level: "error"
    }), e = {
      kind: "token",
      descriptor: "token:unreadable",
      unclassified: !0
    };
  }
  if (e === null) {
    let r = f().oauthPrincipalMemo;
    if (!r?.daemonSnapshotWorker || r.principal !== null) return !1;
    let s = Zkr();
    return s.seen.length > 0 || s.incomplete;
  }
  let n = Zkr();
  if (ae(e)) {
    let r = e.storedLoginOrgless === !0 && e.unclassified !== !0 && n.ruledOut.includes(_pe(e));
    return n.seen.length > 0 || n.incomplete && !r;
  }
  let i = _pe(e);
  return n.seen.includes(i) || n.incomplete && !n.ruledOut.includes(i);
}

function ae(e) {
  return e.unclassified === !0 || e.storedLoginOrgless === !0;
}

function eTr(e, n, i) {
  let r = f();
  r.diskBodyChecksum = e, r.diskConfirmedAtMs = i, r.hipaaEvidence = n, r.hipaaEvidenceLoaded = !0, 
  r.diskRefusedAtMs = null;
}

function i3e(e) {
  let n = f(), {hipaaEvidence: i, hipaaSeenUnreadable: r} = n;
  if (R(e), r !== n.hipaaSeenUnreadable || !wn(i, n.hipaaEvidence)) n.cacheRevision++, 
  n.emitVerdictChanged();
}

function wn(e, n) {
  return e.incomplete === n.incomplete && e.seen.length === n.seen.length && e.seen.every((i, r) => i === n.seen[r]) && e.ruledOut.length === n.ruledOut.length && e.ruledOut.every((i, r) => i === n.ruledOut[r]);
}

function LSo() {
  return f().diskBodyChecksum;
}

function NSo() {
  return f().diskConfirmedAtMs;
}

function tTr(e, n) {
  let i = f();
  if (e !== void 0 && i.diskBodyChecksum === e && i.diskConfirmedAtMs !== null) i.diskConfirmedAtMs = n;
}

function cHt() {
  let e = f();
  e.diskBodyChecksum = null, e.diskConfirmedAtMs = null, e.diskRefusedAtMs = null, 
  e.hipaaEvidenceLoaded = !1, e.lastStampVerdict = "none", e.lastStampMatchedIdentity = null, 
  e.storedCopyTrust = "not_asked", e.dropHintedTaints();
}

function Ejn(e) {
  let n = Itn(mt(e, !1));
  return n.success ? n.data : null;
}

var Ke = new WeakMap;

function Itn(e) {
  let n = Te().safeParse(e);
  if (n.success) Ke.set(n.data, e);
  return n;
}

function a3e(e) {
  return Ke.get(e) ?? e;
}

function nTr(e, n) {
  let i = f();
  if (i.storageV5 = e, n !== null && i.sessionCache === null && !i.diskAdoptionSuppressed) iHt(n);
}

var $So = {
  allow_product_feedback: {
    deniedUnder: [ "hipaa", "zdr" ],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Feedback",
    verb: "is",
    requirementId: "HIPAA-R1"
  },
  allow_web_fetch: {
    deniedUnder: [ "hipaa" ],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Web fetch",
    verb: "is",
    requirementId: "HIPAA-R3"
  },
  allow_memory_sync: {
    deniedUnder: [ "hipaa", "zdr" ],
    onCacheMiss: "allow",
    label: "Memory sync",
    verb: "is",
    requirementId: "HIPAA-R5",
    hardBlockUnder: [ "hipaa" ]
  },
  allow_design_sync: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "allow",
    label: "Design sync",
    verb: "is",
    requirementId: "HIPAA-R9"
  },
  allow_channels: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Channels",
    verb: "are",
    requirementId: "HIPAA-R71"
  },
  allow_projects_tool: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "hold",
    label: "Projects",
    verb: "are",
    requirementId: "HIPAA-R17",
    hardBlockUnder: [ "hipaa" ]
  },
  allow_claude_browser_extension: {
    deniedUnder: [ "hipaa" ],
    serverPopulated: !0,
    onCacheMiss: "allow",
    label: "Claude in Chrome",
    verb: "is",
    requirementId: "HIPAA-R34"
  },
  allow_remote_sessions: {
    deniedUnder: [ "hipaa" ],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Cloud sessions",
    verb: "are",
    requirementId: "HIPAA-R6"
  },
  allow_remote_control: {
    deniedUnder: [ "hipaa" ],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Remote Control",
    verb: "is",
    requirementId: "HIPAA-R6"
  },
  allow_cobalt_plinth: {
    deniedUnder: [ "hipaa", "zdr" ],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Artifacts",
    verb: "are",
    requirementId: "HIPAA-R16"
  },
  allow_team_onboarding: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "hold",
    label: "Team onboarding",
    verb: "is",
    requirementId: "HIPAA-R13",
    hardBlockUnder: [ "hipaa" ]
  },
  allow_error_reporting: {
    deniedUnder: [ "hipaa", "zdr" ],
    onCacheMiss: "deny",
    label: "Error reporting",
    verb: "is",
    requirementId: "HIPAA-R19"
  },
  allow_auto_mode_sibling_docs: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    label: "Repository lookups",
    verb: "are",
    requirementId: "HIPAA-R36"
  },
  allow_repo_visibility_probe: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "hold",
    label: "Repository visibility checks",
    verb: "are",
    requirementId: "HIPAA-R36"
  },
  allow_send_file: {
    deniedUnder: [ "hipaa", "zdr" ],
    onCacheMiss: "deny",
    label: "File upload",
    verb: "is",
    requirementId: "HIPAA-R37"
  },
  allow_heap_dump: {
    deniedUnder: [ "hipaa", "zdr" ],
    onCacheMiss: "deny",
    label: "Heap dumps",
    verb: "are",
    requirementId: "HIPAA-R38"
  },
  allow_local_checkpoint_commit: {
    deniedUnder: [ "hipaa", "zdr" ],
    onCacheMiss: "deny",
    label: "Usage-limit checkpoints",
    verb: "are",
    requirementId: "HIPAA-R39"
  },
  ...{},
  allow_plugin_skill_search: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    label: "Plugin and skill search",
    verb: "is",
    requirementId: "HIPAA-R26"
  },
  allow_plugin_directory_search: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "The plugin directory",
    verb: "is",
    requirementId: "HIPAA-R35"
  },
  allow_connector_suggest: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Connector suggestions",
    verb: "are",
    requirementId: "HIPAA-R43"
  },
  ...{
    allow_mcp_task_worker_wake: {
      deniedUnder: [ "hipaa" ],
      onCacheMiss: "deny",
      label: "Restarting a worker for a background task",
      verb: "is",
      requirementId: "HIPAA-R57"
    }
  },
  allow_plugin_publish: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    onFailOpenVerdict: "deny",
    label: "Publishing a plugin from Claude Code",
    verb: "is",
    requirementId: "HIPAA-R72"
  },
  ...{},
  allow_account_skills_sync: {
    deniedUnder: [ "hipaa" ],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account skills sync",
    verb: "is",
    requirementId: "HIPAA-R29"
  },
  allow_account_plugins_sync: {
    deniedUnder: [ "hipaa" ],
    serverPopulated: !0,
    onCacheMiss: "deny",
    label: "Account plugins sync",
    verb: "is",
    requirementId: "HIPAA-R30"
  },
  allow_bundled_skills: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "allow",
    label: "Bundled skills",
    verb: "are",
    requirementId: "HIPAA-R56"
  },
  allow_mycelium: {
    deniedUnder: [ "hipaa", "zdr" ],
    onCacheMiss: "deny",
    label: "Peer messaging",
    verb: "is",
    requirementId: "HIPAA-R25",
    hardBlockUnder: [ "hipaa" ]
  },
  ...{},
  allow_usage_transcript_scan: {
    deniedUnder: [ "hipaa" ],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage patterns",
    verb: "are",
    requirementId: "HIPAA-R31"
  },
  allow_skill_doctor_transcript_scan: {
    deniedUnder: [ "hipaa" ],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Skill token counts",
    verb: "are",
    requirementId: "HIPAA-R32"
  },
  allow_insights: {
    deniedUnder: [ "hipaa" ],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Insights",
    verb: "are",
    requirementId: "HIPAA-R40"
  },
  allow_stats_transcript_scan: {
    deniedUnder: [ "hipaa" ],
    transcriptScan: !0,
    onCacheMiss: "deny",
    label: "Usage stats",
    verb: "are",
    requirementId: "HIPAA-R42"
  },
  ...{},
  allow_model_catalog: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "allow",
    label: "The model catalog",
    verb: "is",
    requirementId: "HIPAA-R33"
  },
  allow_container_result_files: {
    deniedUnder: [ "hipaa", "zdr" ],
    onCacheMiss: "deny",
    label: "Saving large tool results in the tool container",
    verb: "is",
    requirementId: "HIPAA-R53"
  },
  allow_promo_offers: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    label: "Promotional offers",
    verb: "are",
    requirementId: "HIPAA-R54"
  },
  allow_previous_conversation_pointer: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    label: "Linking a new conversation to the one it replaces",
    verb: "is",
    requirementId: "HIPAA-R58"
  },
  allow_api_auth_warm: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    label: "Warming the API credential cache",
    verb: "is",
    requirementId: "HIPAA-R59"
  },
  allow_cache_keepalive: {
    deniedUnder: [ "hipaa" ],
    onCacheMiss: "deny",
    label: "Renewing the prompt cache lifetime",
    verb: "is",
    requirementId: "HIPAA-R65"
  }
};

function FSo(e) {
  return Object.hasOwn($So, e);
}

function aut(e) {
  return FSo(e) ? $So[e] : void 0;
}

var Le = new Set([ "hipaa" ]);

function dGs(e) {
  return aut(e)?.serverPopulated === !0 && !kLs();
}

function CRs(e) {
  return aut(e)?.transcriptScan === !0 && !CLs();
}

function x() {
  return Object.keys($So).filter(FSo);
}

function t9(e) {
  let n = aut(e);
  return {
    featureLabel: n?.label ?? e,
    verb: n?.verb ?? "is"
  };
}

var USo = x().flatMap(e => (aut(e)?.deniedUnder ?? []).map(n => [ n, e ])), cGs = x().flatMap(e => (aut(e)?.hardBlockUnder ?? []).map(n => [ n, e ])), uGs = new Set(x().filter(e => aut(e)?.onCacheMiss !== "allow")), BSo = new Set(x().filter(e => aut(e)?.onCacheMiss === "hold")), RRs = new Set(x().filter(e => aut(e)?.onFailOpenVerdict === "deny")), On = new Set([ "allow_product_feedback" ]), Ve = new Set([ "allow_web_fetch", "allow_design_sync", "allow_channels" ]);

function Otn(e) {
  let n = Dn(e);
  return pGs(e) || n;
}

function pGs(e) {
  if (!Ve.has(e) || ALs() || !by()) return !1;
  let n = f();
  if (n.sessionCache !== null && !n.failOpenVerdict && !n.sessionVerdictDisowned) return !1;
  let i;
  try {
    s5(), i = n.principalRung;
  } catch {
    return !0;
  }
  if (i === "wif" && vt()) return !0;
  if (i === "none" && Pw() !== void 0 && fin()) return !1;
  return i === "oauth" || i === "tunnel" || i === "none";
}

function Dn(e) {
  if (!Ve.has(e) || !by() || TLs()) return !1;
  let n = f();
  if (n.sessionCache !== null && n.sessionAttributed) {
    let i = He();
    if (i !== null && i === n.attributedBearerDigest) return !1;
    if (n.evidenceRereadForBearer !== i) n.evidenceRereadForBearer = i, n.hipaaEvidenceLoaded = !1;
    let r = Zkr();
    if (r.seen.length === 0 && !r.incomplete || !Ln()) return !1;
  }
  return DSo();
}

function Ln() {
  try {
    let e = s5();
    return e !== null && ae(e);
  } catch {
    return !0;
  }
}

function on(e) {
  let n = jS();
  if (CRs(e)) {
    let i = n?.restrictions[e];
    if (i) return i.allowed;
    return !(by() && f().hintedDeniedKeys.includes(e));
  }
  if (!n) {
    if (uGs.has(e)) {
      if (by() && !(BSo.has(e) && Qxe() && !hUe())) return !1;
      if (On.has(e) && Ct() && !(e === "allow_product_feedback" && nee())) return !1;
    }
    if (V(e, LPr())) return !1;
    if (Otn(e)) return !1;
    let i = f();
    if (i.hintedDeniedKeys.length === 0 && i.hintedTaints.length === 0) return !0;
    if (!by()) return !0;
    if (i.hintedDeniedKeys.includes(e)) return !1;
    return l3e({
      restrictions: {},
      compliance_taints: []
    }, e, i.hintedTaints);
  }
  if (BSo.has(e) && Pz() && !(Qxe() && !hUe())) return !1;
  if (RRs.has(e) && Pz()) return !1;
  if (Otn(e)) return !1;
  return !ze(e, n);
}

function ze(e, n) {
  let i = f();
  if (n.restrictions[e] === void 0 && i.hintedDeniedKeys.includes(e)) return !0;
  let r = i.sessionFromServerFetch;
  return !l3e({
    restrictions: n.restrictions,
    compliance_taints: r ? n.compliance_taints : []
  }, e, [ ...LPr(), ...i.hintedTaints, ...r ? [] : n.compliance_taints ]);
}

function l3e(e, n, i = []) {
  let r = e.compliance_taints;
  if (cGs.some(([d, m]) => m === n && (r.includes(d) || i.includes(d)))) return !1;
  let s = e.restrictions[n];
  if (s) return s.allowed;
  if (CRs(n)) return !0;
  let c = dGs(n) ? [ ...i.filter(d => !(Le.has(d) && r.includes(d))), ...r.filter(d => !Le.has(d)) ] : [ ...i, ...r ];
  return !V(n, c);
}

function jSo(e) {
  if (e.compliance_taints.some(n => USo.some(([i]) => i === n))) return !1;
  if (Object.keys(e.defaults ?? {}).length > 0 || e.monitoring_notice !== null && e.monitoring_notice !== void 0) return !1;
  return Object.entries(e.restrictions).every(([n, i]) => ee(n) ? i?.allowed !== !0 : i?.allowed !== !1);
}

function ee(e) {
  return e.startsWith("enforce_") || e.startsWith("require_");
}

function V(e, n) {
  if (n.length === 0) return !1;
  for (let [i, r] of USo) if (r === e && n.includes(i)) return !0;
  return !1;
}

c0s({
  isPolicyAllowed: e => on(e),
  commandPolicyGateAllows: e => mGs(e),
  policyDenyKind: e => sp(e),
  policyDeniedReason: (e, n, i) => Sf(e, n, i),
  complianceTaintsSettled: () => rTr(),
  policyLimitsCacheLoaded: () => n9(),
  autoDefaultVerdictState: () => fGs(),
  policyVerdictAbsent: () => Pz(),
  principalSeenUnderHipaa: () => DSo(),
  coreSkills: () => gGs(),
  rememberedCoreSkills: () => hGs()
});

function fGs() {
  if (!Pz()) return "loaded";
  if (Qxe()) return Mn() ? "unobtainable_seen_hipaa" : "unobtainable";
  return "pending";
}

function Mn() {
  let e;
  try {
    e = s5();
  } catch {
    return !1;
  }
  if (e === null || ae(e)) return !1;
  return Zkr().seen.includes(_pe(e));
}

function mGs(e) {
  if (!FSo(e)) return t(`[policy] policyGate names unknown policy key "${e}"; denying`, {
    level: "warn"
  }), !1;
  return on(e);
}

function Pz() {
  if (!by()) return !1;
  return jS() === null || f().failOpenVerdict;
}

function Ise() {
  return jS() !== null && f().sessionFromServerFetch;
}

function N6s() {
  return f().sessionVerdictDisowned;
}

function Qxe() {
  if (!Pz()) return !1;
  let e = f();
  if (e.settledWithoutVerdictFor === null) return !1;
  let n;
  try {
    n = ARs();
  } catch {
    return !1;
  }
  return e.settledWithoutVerdictFor === (n ?? "");
}

function hUe() {
  let e;
  try {
    e = s5();
  } catch {
    return !0;
  }
  if (e === null || e.unclassified) return !0;
  let n = f();
  if (!n.hipaaSeenUnreadable) R(Be());
  let i = DSo();
  return n.hipaaSeenUnreadable || !n.hipaaEvidenceLoaded || i;
}

function yUe() {
  if (!by() || jS() !== null || _jn()) return !1;
  return te();
}

function te() {
  let e = f().lastFetchOutcome;
  return e !== null && !e.success && e.httpStatus === 404;
}

function Sf(e, n, i, r) {
  if (on(e)) return null;
  if (yUe()) return rft(n);
  switch (sp(e)) {
   case "route_missing":
    return rft(n);

   case "cache_miss":
    return sfe(n);

   case "latched":
    return dIe(n, i);

   case "org_denied":
   case null:
    return Z0t(n, i, bfe(), r);
  }
}

function WSo() {
  return bve(KH()).length > 0;
}

function sp(e) {
  if (on(e)) return null;
  if (kjn(e)) return "latched";
  let n = jS();
  if (n !== null) {
    if ((BSo.has(e) || RRs.has(e) && !ze(e, n)) && Pz()) return te() ? "route_missing" : "cache_miss";
    if (!Otn(e)) return "org_denied";
    return te() && !_jn() ? "route_missing" : "cache_miss";
  }
  return yUe() ? "route_missing" : "cache_miss";
}

function kjn(e) {
  if (!V(e, LPr()) || V(e, bfe())) return !1;
  if (jS() === null) return !0;
  return le()?.[e]?.allowed !== !1;
}

function zSo(e) {
  let n = sp(e);
  if (n === null) return null;
  if (yUe()) return bAo();
  switch (n) {
   case "route_missing":
    return bAo();

   case "cache_miss":
    return DHs();

   case "latched":
    return HHs();

   case "org_denied":
    return k2n(bfe());
  }
}

function rTr() {
  let e = sHt();
  if (e === !1) return !1;
  if (XP() || VMs() || !vf() || Oe() !== "firstParty" || a.ANTHROPIC_UNIX_SOCKET !== void 0 || km() !== void 0 || Pw() !== void 0 && !gjn({
    anthropicAuthEnabled: ml(),
    oauthScopes: Sn()?.scopes
  }) && !(e === !0 && jS() !== null)) return !1;
  if (jS() !== null) return !0;
  let n = Sn();
  return (n?.subscriptionType === "pro" || n?.subscriptionType === "max") && n.scopes?.includes(NC) === !0 && QT() === "store" && !Fe() && !gr() && !Sp({
    skipRetrievingKeyFromApiKeyHelper: !0
  }).key && !nc();
}

function _Ue(e) {
  if (!by()) return !1;
  let n = f();
  return n.hintedDeniedKeys.includes(e) || !l3e({
    restrictions: {},
    compliance_taints: []
  }, e, n.hintedTaints);
}

function $6s(e) {
  return le()?.[e]?.allowed === !0;
}

function uHt(e) {
  let n = le();
  if (n?.[e]?.allowed === !0) return !0;
  let i = f();
  return i.hintedEnforcedKeys.includes(e) && n?.[e] === void 0 && (n === null || !i.sessionAttributed) && by();
}

function GSo(e) {
  let n = jS()?.defaults[e];
  return typeof n === "boolean" ? n : void 0;
}

function gGs() {
  return jS()?.core_skills ?? [];
}

function hGs() {
  if (!by()) return [];
  return jS()?.core_skills ?? f().lastServedCoreSkills;
}

function VSo() {
  f().lastServedCoreSkills = null;
}

function jS() {
  if (!by()) return null;
  let e = f();
  if (e.sessionCache) return e.sessionCache;
  if (e.diskAdoptionSuppressed) return null;
  let n = lHt();
  if (n) return iHt(n), n;
  return null;
}

function n9() {
  if (!by()) return !0;
  return jS() !== null;
}

function le() {
  return jS()?.restrictions ?? null;
}

function re(e) {
  if (e === "env-quad") return a.ANTHROPIC_FEDERATION_RULE_ID?.trim() ?? "";
  let n = wU();
  return n === null || e === null ? "" : se(n, HCo(n));
}

function se(e, n) {
  return e === null ? "" : `${En(e)}\0${n}`;
}

export { cZ, Ed, Z6e, hK, ujn, kw, tS, ktn, SSo, zg, gRs, r5, fUe, KF, e3e, GN, hpe, pjn, dwe, mUe, Ttn, cE, xse, rut, fjn, mjn, Xxe, $i, o5, Tw, M0, hRs, Dkr, N1, Oi, Atn, out, ype, yRs, t3e, sut, Lkr, gUe, _Rs, bRs, SRs, wSo, gjn, wRs, Nkr, n3e, _pe, bpe, Ctn, $kr, hjn, r3e, vSo, vRs, Fkr, Ukr, ERs, iut, kRs, ESo, Bkr, jkr, Wkr, zkr, TRs, lGs, Rtn, yjn, Gkr, sHt, kSo, iHt, TSo, Vkr, Kkr, Pse, ASo, Jxe, _jn, qkr, H0, xtn, o3e, bjn, Sjn, aHt, CSo, D0, s3e, fk, AH, RSo, xSo, Ptn, Ykr, by, e9, lHt, Xkr, s5, PSo, Jkr, ISo, Qkr, dHt, ARs, OSo, MSo, wjn, HSo, Zkr, vjn, DSo, eTr, i3e, LSo, NSo, tTr, cHt, Ejn, Itn, a3e, nTr, $So, FSo, aut, dGs, CRs, t9, USo, cGs, uGs, BSo, RRs, Otn, pGs, on, l3e, jSo, fGs, mGs, Pz, Ise, N6s, Qxe, hUe, yUe, Sf, WSo, sp, kjn, zSo, rTr, _Ue, $6s, uHt, GSo, gGs, hGs, VSo, jS, n9 };
