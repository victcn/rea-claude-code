// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ye } from "./chunk-b0z4bv3v.js";

import { K } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { oa, LZ, SBe, Hpt, k, hE } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { _ } from "./chunk-kawq2919.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { p } from "./chunk-jkzenvsk.js";

import { Es } from "./chunk-q6wab2jw.js";

import { wa } from "./chunk-vps0k559.js";

import { nr } from "./chunk-f1zpf9me.js";

import { JSe, ph, Wen } from "./chunk-ann91fyn.js";

import { jAn, WAn, Osr, zAn, f4t } from "./chunk-mpn40v8v.js";

import { EW, JL, YAn, FA, vc } from "./chunk-btyj9pkf.js";

import { eu, lSe } from "./chunk-z655gvmz.js";

import { me, yn, Vo, iRo, Wd, lr, St, Rm, cp } from "./chunk-dexzwy8h.js";

import { h$t } from "./chunk-0qwx38yy.js";

import { randomBytes as Me } from "crypto";

function pye() {
  return a.CLAUDE_CODE_ARTIFACT_DB ?? !0;
}

function rAe() {
  return pye() && (a.CLAUDE_CODE_ARTIFACT_DB_STR_REPLACE ?? k("tengu_umber_stile", !1)) === !0;
}

var ue = "/api/frame/db/agent", Te = 5e3;

class N extends Ye {}

var Q = String.raw`(?!\.\.?(?:/|$))[A-Za-z0-9_\-.~:@+]{1,200}`, e3 = new RegExp(`^${Q}$`), $ne = new RegExp(`^${Q}(?:/${Q}){0,14}$`);

function xEt(e) {
  return (Nt(e, "/") + 1) % 2 === 1;
}

function nAn(e) {
  let t = i => i.length > 120 ? `${i.slice(0, 60)}\u2026${i.slice(-40)}` : i, r = e.split("/"), c = r.length, s = t(r.slice(0, -1).join("/")), l = t(r[c - 1]);
  return `collection '${t(e)}' has ${c} segments, which makes it a document path, not a collection: collection paths have an odd number of segments (collection/document/collection/\u2026) and the document is collection + doc_id. For that document use collection '${s}' with doc_id '${l}'; for a collection inside it, add one more segment. Per-user data follows the same rule \u2014 collection 'data/users/<id>' (3 segments) holds that user's documents, so 'data/users/<id>/decks' is one document and 'data/users/<id>/decks/cards' a collection.`;
}

var KL = 1e3, CVe = [ "get", "list", "query" ], Yle = [ "set", "update", "delete" ], lw = "str_replace", Wt = [ ...Yle, lw ], xqt = [ "view", "interact", "admin" ];

function E7o() {
  return Me(16).toString("base64url");
}

var oAe = 200, rAn = /^(?!__.*__$)[^\p{Cc}\p{Cf}\p{Zl}\p{Zp}"\\./[\]]{1,200}$/u, h4 = 262144, _nt = 4 * h4, Le = 4194304, re = 16384, Pqt = 1e3, _9r = 100, BD = 50, oAn = 1048576, le = [ "edit_no_match", "edit_ambiguous", "edit_field_missing", "edit_field_not_string", "version_mismatch" ];

function ne(e) {
  return le.some(t => t === e);
}

var Pe = new Map([ [ "not_found", "not_found" ], [ "invalid_argument", "invalid_argument" ], [ "quota_or_rate", "quota_or_rate" ], [ "busy", "busy" ], [ "upstream_auth", "upstream_auth" ], [ "store_unavailable", "store_unavailable" ], [ "not_declared", "not_declared" ], [ "too_large", "too_large" ], [ "quota_exceeded", "quota_exceeded" ], [ "invalid-argument", "invalid_argument" ], [ "not-found", "not_found" ], [ "resource-exhausted", "quota_or_rate" ], [ "resource_exhausted", "quota_or_rate" ], [ "data-unavailable", "store_unavailable" ], [ "unavailable", "store_unavailable" ], [ "upstream-error", "store_unavailable" ], ...le.map(e => [ e, e ]) ]), We = new Set([ "an OAuth access token is required", "a directly presented OAuth access token is required", "db verbs require a user-scoped OAuth token, not an org service key" ]);

function He(e, t) {
  if (e !== 403 || typeof t !== "string") return;
  let r = t.trim();
  if (We.has(r)) return {
    code: "credential_rejected",
    reason: "custody_403"
  };
  if (r.startsWith(EW)) return {
    code: "cloud_unavailable",
    reason: "ccr_credential_refused"
  };
  return;
}

function Ne(e) {
  if (e === 404 || e === 403) return "not_found";
  if (e === 400 || e === 422) return "invalid_argument";
  if (e === 413) return "too_large";
  if (e === 429) return "quota_or_rate";
  if (e === 409 || e === 412) return "busy";
  if (e === 401) return "upstream_auth";
  return "store_unavailable";
}

function O(e) {
  switch (e) {
   case "not_found":
   case "invalid_argument":
   case "too_large":
   case "not_declared":
    return "invalid_argument";

   case "quota_or_rate":
    return "resource_exhausted";

   case "quota_exceeded":
    return "quota_exceeded";

   case "busy":
   case "upstream_auth":
   case "store_unavailable":
   case "credential_rejected":
   case "cloud_unavailable":
   case "network_off":
    return "unavailable";

   case "edit_no_match":
   case "edit_ambiguous":
   case "edit_field_missing":
   case "edit_field_not_string":
   case "version_mismatch":
    return e;
  }
}

var k7o = [ "eq", "ne", "in", "not-in", "lt", "lte", "gt", "gte", "array-contains" ], T7o = [ "==", "!=", "<", "<=", ">", ">=" ], ce = {
  "==": "eq",
  "!=": "ne",
  "<": "lt",
  "<=": "lte",
  ">": "gt",
  ">=": "gte"
};

function je(e) {
  return Object.hasOwn(ce, e);
}

function Ue(e) {
  return je(e) ? ce[e] : e;
}

var fe = p(() => cp(!0).optional().catch(void 0)), he = p(() => Vo().optional().catch(void 0)), Ke = p(() => St({
  exists: Vo(),
  data: Rm(me(), Wd()).optional(),
  version: yn().int().optional(),
  updatedAt: me().optional(),
  authoredByOthers: fe(),
  outside_writer: he()
})), Ve = p(() => St({
  docs: lr(St({
    id: me(),
    data: Rm(me(), Wd()),
    version: yn().int().optional(),
    updatedAt: me().optional()
  })),
  nextCursor: me().optional(),
  authoredByOthers: fe(),
  outside_writer: he()
})), _e = p(() => St({
  documents: yn().int().safe().nonnegative(),
  maxDocuments: yn().int().safe().positive()
}).optional().catch(void 0));

function be(e, t) {
  if (t === void 0 && typeof e === "object" && e !== null && e.usage !== void 0) f("artifact_db_write", "malformed_usage");
}

var pe = 4, ze = 600;

function ge(e) {
  let t = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(t)) return [];
  let r = [];
  for (let c of t) {
    if (r.length >= pe) break;
    if (typeof c !== "string") continue;
    let s = Wen(c, ze);
    if (s !== void 0) r.push(s);
  }
  return r;
}

var Ge = p(() => St({
  version: yn().int().optional(),
  usage: _e()
})), Xe = p(() => St({
  results: lr(St({
    version: yn().int().optional()
  })),
  usage: _e()
})), Je = p(() => St({
  error: St({
    code: cp("invalid_argument"),
    message: cp("invalid argument"),
    verb: iRo().optional()
  })
}));

function j(e, t) {
  return e === 400 && Je().safeParse(t).success;
}

class V {
  refusedAt=void 0;
  get unsupported() {
    return this.refusedAt !== void 0 && Date.now() - this.refusedAt < Ze;
  }
}

var Ze = 36e5, b9r = new K(() => new V), we = new K(() => new V), Qe = new K(() => new V);

function et(e, t) {
  if (!j(e, t)) return !1;
  let {reason: r} = t.error;
  return r === void 0 || r === "bad_json";
}

var tt = p(() => St({
  error: St({
    code: me().optional(),
    reason: Wd().optional(),
    kind: Wd().optional(),
    limit: Wd().optional(),
    version: Wd().optional(),
    index: Wd().optional(),
    required: Wd().optional()
  }).optional()
})), ve = new Set([ "docs_per_collection", "docs_per_database", "databases_per_org" ]);

function A7o(e) {
  return ve.has(e);
}

var rt = {
  quota_exceeded: new Set([ ...ve, "bytes_per_database" ]),
  quota_or_rate: new Set([ "active_leases", "rate_limited", "write_capacity", "scan_budget", "response_budget" ])
};

function nt(e, t) {
  let r = rt[e];
  return r !== void 0 && r.has(t);
}

function ie(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 ? e : void 0;
}

function at(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0 ? e : void 0;
}

var ot = /^[a-z][a-z_-]{0,63}$/;

function z(e, t) {
  let r = He(e, t);
  if (r !== void 0) return r;
  let c = tt().safeParse(t), s = c.success ? c.data.error : void 0, l = s?.code, i = l !== void 0 ? Pe.get(l) : void 0;
  if (l !== void 0 && i !== void 0) {
    let d = s?.kind;
    if (nt(i, d)) return {
      code: i,
      reason: d,
      kind: d,
      limit: ie(s?.limit)
    };
    let h = i === "version_mismatch" && s?.required === !0, u = typeof s?.reason === "string" && ot.test(s.reason) ? s.reason : void 0;
    return {
      code: i,
      reason: h ? "version_required" : l.replace(/-/g, "_"),
      ...ne(i) && {
        version: ie(s?.version),
        index: at(s?.index),
        ...h && {
          required: !0
        }
      },
      ...u !== void 0 && {
        serverReason: u
      }
    };
  }
  let n = Ne(e);
  return {
    code: n,
    reason: n
  };
}

var C7o = [ `db write failed (${O("version_mismatch")}): `, `db batch write failed (${O("version_mismatch")}): ` ], S9r = {
  write: "Not saved: Claude needs to read the latest version of this document before changing it.",
  delete: "Not deleted: Claude needs to read the latest version of this document before deleting it."
};

function W(e, t, r, c, s, l, i) {
  let n = `field '${s ?? "?"}'`, d = l?.current !== void 0 ? ` The document is at version ${l.current}.` : "", h = l?.pinned !== void 0 && l.current === l.pinned, u = `db ${t} failed (${O(e)})`;
  switch (e) {
   case "not_found":
    return `${u}: no such artifact, collection, or document (or no access \u2014 the two are deliberately indistinguishable)`;

   case "invalid_argument":
    return `${u}: the server could not accept the request as shaped${i !== void 0 ? ` (reason: ${i})` : ""}`;

   case "too_large":
    return `${u}: the request body exceeds the server's size limit \u2014 send less per call`;

   case "quota_or_rate":
    return `${u}: ${se(r, c) ?? "over a rate or storage limit \u2014 retry later or write less"}`;

   case "quota_exceeded":
    return `${u}: ${se(r, c) ?? "a storage limit on this artifact's database has been reached \u2014 delete documents; retrying won't help"}`;

   case "busy":
    return `${u}: lost to a concurrent change \u2014 re-read and retry deliberately`;

   case "upstream_auth":
    return `${u}: could not authenticate \u2014 the session's credential may need a refresh; try again`;

   case "store_unavailable":
    return `${u}: the store is unavailable right now \u2014 try again`;

   case "not_declared":
    return `${u}: this artifact's current published version does not declare the database capability \u2014 republish it with the db capability declared, then retry`;

   case "credential_rejected":
    return `${u}: the server refused this session's credential at the artifact-db door \u2014 not an artifact-access or existence answer; report this as a client/server integration fault`;

   case "cloud_unavailable":
    return `${u}: reading and editing artifact data isn't available in this cloud session right now; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it`;

   case "network_off":
    return t === "read" ? `${u}: this cloud session's network access is turned off (or could not be confirmed), so it cannot read artifact data${JL() ? "" : " \u2014 writes still work"}; do not retry the read here` : `${u}: this cloud session's network access is turned off (or could not be confirmed), and the gateway did not accept this call as a write it allows \u2014 do not retry it here`;

   case "edit_no_match":
    return h ? `${u}: old_str does not occur in ${n} of that document, so nothing was written by this call. The document is still at version ${l?.current}, the one this edit was pinned to, so nothing changed under you: old_str itself does not match the stored text \u2014 copy it exactly as it appears in the field's value (the decoded string, not JSON-escaped source)` : `${u}: old_str does not occur in ${n} of that document, so nothing was written by this call.${d} Copy the text exactly as it appears in the field's value (the decoded string, not JSON-escaped source). If you were retrying after a call whose outcome you did not see, that earlier call may already have applied \u2014 read the document back before trying again. If someone else changed that text, re-read and re-plan the edit`;

   case "edit_ambiguous":
    return `${u}: old_str occurs more than once in ${n} of that document; nothing was written.${d} Include more surrounding text so it is unique, or pass replace_all to change every occurrence`;

   case "edit_field_missing":
    return `${u}: the document has no top-level ${n}; nothing was written.${d} str_replace edits an existing top-level string field \u2014 read the document to see its fields, or use update to add one`;

   case "edit_field_not_string":
    return `${u}: ${n} is not a string (str_replace edits top-level string fields only); nothing was written \u2014 use update for structured fields.${d}`;

   case "version_mismatch":
    if (l?.required === !0) {
      let R = l.path ?? "that document", y = "Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns";
      switch (l.op) {
       case "delete":
        return `${u}: ${R} is an existing document and this delete carried no if_version \u2014 nothing was deleted. Read it back and, if it should still be deleted, resend the delete with if_version set to the version that read returns`;

       case "update":
        return `${u}: ${R} is an existing document and this update carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;

       default:
        return `${u}: ${R} already exists and this write carried no if_version \u2014 nothing was written. ${"Read it back with read_db, base the change on what it holds now, and resend with if_version set to the version that read returns"}`;
      }
    }
    return l?.current !== void 0 ? `${u}: the document is no longer at version ${l.pinned ?? "?"}, the one this write was pinned to \u2014 it is now at version ${l.current}; nothing was written. Read it back, re-plan the write against what it holds now, and pin to that version` : `${u}: the document is no longer at version ${l?.pinned ?? "?"}, the one this write was pinned to \u2014 it has changed or may have been deleted; nothing was written. Read it back: if it still exists, re-plan the write against what it holds now and pin to its version; if it is gone, ${l?.op === "delete" ? "a delete has nothing left to do" : 're-create it with a "set" and no if_version only if it should exist again'}`;
  }
}

function se(e, t) {
  let r = t === void 0 ? "document limit" : `limit of ${t} documents`, c = t === void 0 ? "storage limit" : `storage limit of ${h$t(t)}`;
  switch (e) {
   case "docs_per_collection":
    return `this collection has reached its ${r} \u2014 delete documents; retrying won't help`;

   case "docs_per_database":
    return `this artifact's database has reached its ${r} \u2014 delete documents before adding more; retrying won't help`;

   case "bytes_per_database":
    return `this artifact's database has reached its ${c} (the total size of its documents, not their count) \u2014 delete documents or make them smaller; a write that makes an existing document larger can be refused too, and retrying won't help`;

   case "databases_per_org":
    return "this organization has reached its limit on artifact databases; retrying won't help";

   case "active_leases":
    return "this database has too many active leases \u2014 retry after some expire or are released";

   case "rate_limited":
    return "rate-limited \u2014 retry shortly";

   case "write_capacity":
    return "too many concurrent writes to this database \u2014 retry shortly";

   case "scan_budget":
    return "the query scans too many documents \u2014 narrow the query or add filters; retrying won't help";

   case "response_budget":
    return "the query's result is too large \u2014 request fewer documents; retrying won't help";

   case void 0:
    return;
  }
}

var Y = "data/users/me", ye = "whoami", it = p(() => St({
  id: me().min(1)
}));

function ke(e, t) {
  return `${e}:${t}`;
}

function U() {
  return YAn("POST", ue, "bound") === "relay";
}

async function st(e, t) {
  if (U()) return null;
  let r = (await JSe(t))?.accountUuid;
  return r ? ke(r, e) : null;
}

async function ee(e, t, r) {
  let c = await hE(r);
  return c?.accountUuid !== void 0 && ke(c.accountUuid, e) === t;
}

function te() {
  let e = LZ().headers.Authorization;
  return e === void 0 ? null : SBe(e);
}

async function Re(e) {
  if (!Hpt()) return;
  for (let t = 0; t < 2; t++) try {
    await oa({
      credentials: e
    });
  } catch {}
}

function R7o(e) {
  let {resolvedMeIds: t, inFlightMeIds: r} = Ae.of(e);
  t.clear(), r.clear();
}

function $e(e, t) {
  if (e === Y || e.startsWith(Y + "/")) return r => ({
    collection: "data/users/" + r + e.slice(Y.length),
    docId: t
  });
  return null;
}

var P = Symbol("contested-me-key");

class Ee {
  resolvedMeIds=new Map;
  inFlightMeIds=new Map;
}

var Ae = new K(() => new Ee);

function De(e, t, r, c, s) {
  if (t === "malformed_whoami_echo") return `db ${r} failed (unavailable): resolving 'me' returned an unreadable response \u2014 the artifact db service may need an update`;
  if (e === "not_declared") return `db ${r} failed (${O(e)}): resolving 'me' needs this artifact's published version to declare the db and user capabilities \u2014 republish with both declared, then retry`;
  return W(e, r, c, s) + (r === "write" && Fe.has(e) ? L : "");
}

var L = "; nothing was written", Fe = new Set([ "too_large", "credential_rejected", "cloud_unavailable", "network_off" ]);

async function ae(e, t, r, c, s, l) {
  let i = Ae.of(e), {resolvedMeIds: n, inFlightMeIds: d} = i, h = await st(r, l), u = null;
  if (h !== null && (n.has(h) || d.has(h))) {
    if (await ee(r, h, s)) {
      if (n.has(h)) await Re(l);
      u = h;
    }
  }
  let R = u === null ? void 0 : n.get(u);
  if (u !== null && R !== void 0 && !U()) {
    if (R.fingerprint === te()) return {
      ok: !0,
      id: R.id
    };
    if (n.get(u) === R) n.delete(u);
  }
  let y;
  if (h === null) y = await Z(i, t, r, c, h, s, l); else {
    let o = u === null ? void 0 : d.get(u);
    if (!o) o = (async () => {
      if (!await ee(r, h, s)) return f(t, "contested_me_key"), P;
      return Z(i, t, r, c, h, s, l);
    })(), d.set(h, o), o.finally(() => {
      if (d.get(h) === o) d.delete(h);
    }).catch(() => {});
    let w = await o;
    y = w === P ? await Z(i, t, r, c, null, s, l) : w;
  }
  if (y.ok) return y;
  if ("composed" in y) return {
    ok: !1,
    result: y.composed
  };
  let v = t === "artifact_db_read" ? "read" : "write";
  return m(t, y.reason), {
    ok: !1,
    result: {
      kind: "error",
      code: y.code,
      message: De(y.code, y.reason, v, y.kind, y.limit),
      reason: y.reason
    }
  };
}

async function Z(e, t, r, c, s, l, i) {
  let n = null;
  if (s !== null) {
    if (await Re(i), n = te(), n === null || U()) return P;
  }
  let d = await G(t, r, ye, {}, {
    timeout: 15e3,
    maxContentLength: re,
    credentials: i,
    reportSentAuth: s !== null
  }, c);
  if (!d.ok) return {
    ok: !1,
    composed: d.result
  };
  if (d.status !== 200) {
    let {code: u, reason: R, kind: y, limit: v} = z(d.status, d.data);
    return {
      ok: !1,
      code: u,
      reason: `whoami_${R}`,
      kind: y,
      limit: v
    };
  }
  let h = it().safeParse(d.data);
  if (!h.success || !e3.test(h.data.id)) return {
    ok: !1,
    code: "store_unavailable",
    reason: "malformed_whoami_echo"
  };
  if (s !== null) {
    if (n === null || n !== d.sentAuthFingerprint || n !== te() || !await ee(r, s, l)) return f(t, "auth_unstable_me_key"), 
    P;
    if (U()) return P;
    e.resolvedMeIds.set(s, {
      id: h.data.id,
      fingerprint: n
    });
  }
  return {
    ok: !0,
    id: h.data.id
  };
}

async function G(e, t, r, c, s, l) {
  let i = r === "batch" ? "batch_" : "", n = r === ye, d = e === "artifact_db_read" ? "read" : "write", h = s.requestId !== void 0 ? Qe.of(s.requestId.host) : void 0, u = {
    slug: t,
    verb: r,
    args: c,
    ...s.asLevel !== void 0 && {
      asLevel: s.asLevel
    },
    ...s.requireVersion === !0 && {
      requireVersion: !0
    },
    ...e === "artifact_db_write" && !n && jAn(),
    ...e === "artifact_db_write" && !n && s.requestId !== void 0 && h !== void 0 && !h.unsupported && lSe(s.requestId.id)
  }, R = () => vc.postRelayBound(ue, u, {
    refreshOAuth: !0,
    credentials: s.credentials,
    headers: eu(),
    timeout: s.timeout,
    maxContentLength: s.maxContentLength,
    signal: l,
    reportSentAuth: s.reportSentAuth
  }), y = !1, v = async () => {
    let w = await R();
    if (w.ok && w.gatewayRetryAfterMs !== void 0 && !y) {
      if (y = !0, await J(Math.min(w.gatewayRetryAfterMs, Te), l, {
        abortError: () => new N
      }), w = await R(), w.ok && w.route === "relay" && w.fromFrame) f(e, `${i}${n ? "whoami_" : ""}relay_busy_recovered`);
    }
    return w;
  }, o;
  try {
    o = await v();
    let w = o.ok && o.fromFrame ? zAn(o.status, o.data, u) : [];
    if (w.length > 0) {
      if (w.includes("request_id") && h !== void 0) f(e, `${i}request_id_rejected`), h.refusedAt = Date.now();
      if (f4t(w)) f(e, `${i}session_hints_rejected`), WAn();
      u = Es(u, f4t(w) ? Osr : w), o = await v();
    }
    if (h !== void 0 && u.request_id !== void 0 && o.ok && o.fromFrame && et(o.status, o.data)) {
      let {request_id: D, ...S} = u;
      if (u = S, o = await v(), o.ok && o.fromFrame && o.status >= 200 && o.status < 300) h.refusedAt = Date.now(), 
      f(e, `${i}request_id_unsupported`);
    }
  } catch (w) {
    if (wa(w) || w instanceof N) throw w;
    let D = e !== "artifact_db_read" && !n && FA(w);
    return m(e, `${i}${D ? "relay_request_error" : "request_error"}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: D ? "db write outcome unknown (relay request failed) \u2014 it may have applied; read back before retrying" : `db ${d} failed (network error)`,
        reason: D ? "relay_request_error" : "request_error"
      }
    };
  }
  if (!o.ok) {
    if (o.reason === "relay-unavailable" || o.reason === "relay-not-served") {
      let w = `${n ? "whoami_" : ""}${o.reason.replace(/-/g, "_")}`;
      return m(e, `${i}${w}`, {
        status: o.status
      }), {
        ok: !1,
        result: {
          kind: "error",
          code: "store_unavailable",
          message: `db ${d} failed (${O("store_unavailable")}): ${n ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection did not carry the request${o.status ? ` (HTTP ${o.status})` : ""}, so nothing ran; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it${d === "write" ? L : ""}`,
          reason: w
        }
      };
    }
    return m(e, `${i}${o.reason.replace(/-/g, "_")}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: o.reason === "no-auth" ? ph(o.detail) : `db ${d} unavailable: ${o.reason}`,
        reason: "transport"
      }
    };
  }
  if (o.gatewayPolicy === "network-off") {
    let w = n ? "whoami_network_off" : "network_off";
    return f(e, `${i}${w}`), {
      ok: !1,
      result: {
        kind: "error",
        code: "network_off",
        message: n ? De("network_off", w, d) : W("network_off", d) + (d === "write" ? L : ""),
        reason: w
      }
    };
  }
  if (o.gatewayRetryAfterMs !== void 0) {
    let w = `${n ? "whoami_" : ""}relay_busy_retried`, D = r === lw;
    return m(e, `${i}${w}`, {
      status: o.status
    }), {
      ok: !1,
      result: {
        kind: "error",
        code: "store_unavailable",
        message: `db ${d} failed (${O("store_unavailable")}): ${n ? "resolving 'me' failed \u2014 " : ""}this cloud session's artifact connection was temporarily unavailable (HTTP ${o.status}, after one retry); ${D ? "the edit may or may not have applied \u2014 read it back before retrying" : `this is transient and nothing ran \u2014 retry shortly${d === "write" ? L : ""}`}`,
        reason: w
      }
    };
  }
  if (!o.fromFrame) return m(e, `${i}${n ? "whoami_relay_error" : "relay_error"}`, {
    status: o.status
  }), {
    ok: !1,
    result: {
      kind: "error",
      code: "store_unavailable",
      message: n ? `db ${d} failed: resolving 'me' failed (relay HTTP ${o.status}) \u2014 try again` : e === "artifact_db_read" ? `db read failed (relay HTTP ${o.status}) \u2014 try again` : `db write outcome unknown (relay HTTP ${o.status}) \u2014 it may have applied; read back before retrying`,
      reason: n ? "whoami_relay_error" : "relay_error"
    }
  };
  return {
    ok: !0,
    status: o.status,
    data: o.data,
    sentAuthFingerprint: o.sentAuthFingerprint,
    ...o.route === "relay" && o.response.headers?.[dt] === "session" && {
      sessionScoped: !0
    },
    ...s.asLevel !== void 0 && {
      levelConfirmed: lt(o.data) === s.asLevel
    }
  };
}

var dt = "x-frame-relay-read-scope-applied", ut = `db read failed (${O("not_found")}): nothing this session can read at that address \u2014 with the organization's cloud network access turned off, this session can read the data only of artifacts it published itself (or there is no such artifact, collection, or document); do not retry the read here`;

function lt(e) {
  if (e === null || typeof e !== "object") return;
  let t = Reflect.get(e, "asLevel");
  if (typeof t === "string") return t;
  let r = Reflect.get(e, "error"), c = r !== null && typeof r === "object" ? Reflect.get(r, "asLevel") : void 0;
  return typeof c === "string" ? c : void 0;
}

async function sAn(e, t, r, c, s) {
  let {slug: l, op: i, query: n} = t, {collection: d, docId: h} = t;
  if (!nr.test(l)) return m("artifact_db_read", "invalid_slug"), {
    kind: "error",
    code: "invalid_argument",
    message: "not a valid artifact id",
    reason: "invalid_slug"
  };
  if (!$ne.test(d) || h !== void 0 && !e3.test(h)) return m("artifact_db_read", "invalid_segment"), 
  {
    kind: "error",
    code: "invalid_argument",
    message: 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)',
    reason: "invalid_segment"
  };
  if (!xEt(d)) return m("artifact_db_read", "parity"), {
    kind: "error",
    code: "invalid_argument",
    message: nAn(d),
    reason: "parity"
  };
  if (i === "get" && h === void 0) return m("artifact_db_read", "missing_doc_id"), 
  {
    kind: "error",
    code: "invalid_argument",
    message: "doc_id is required for a get",
    reason: "missing_doc_id"
  };
  let u = $e(d, h), R;
  if (u !== null) {
    let b = await ae(e, "artifact_db_read", l, r, c, s);
    if (!b.ok) return b.result;
    R = b.id, ({collection: d, docId: h} = u(b.id));
  }
  let y = h !== void 0 ? `${d}/${h}` : d;
  if (y.length > KL) return m("artifact_db_read", "path_too_long"), {
    kind: "error",
    code: "invalid_argument",
    message: `the composed document path is ${y.length} bytes \u2014 the limit is ${KL}`,
    reason: "path_too_long"
  };
  let v = i === "get" ? {
    path: y
  } : {
    collection: d,
    ...n?.limit !== void 0 && {
      limit: n.limit
    },
    ...n?.cursor !== void 0 && {
      cursor: n.cursor
    },
    ...i === "query" && n?.where !== void 0 && {
      where: n.where.map(([b, E, B]) => ({
        field: b,
        op: Ue(E),
        value: B
      }))
    },
    ...i === "query" && n?.order_by !== void 0 && {
      orderBy: {
        field: n.order_by.field,
        ...n.order_by.direction !== void 0 && {
          direction: n.order_by.direction
        }
      }
    }
  }, o = await G("artifact_db_read", l, i, v, {
    timeout: 15e3,
    maxContentLength: Le,
    credentials: s,
    ...t.asLevel !== void 0 && {
      asLevel: t.asLevel
    }
  }, r);
  if (!o.ok) return o.result;
  if (o.status === 200) {
    if (i === "get") {
      let E = Ke().safeParse(o.data);
      if (!E.success) return m("artifact_db_read", "malformed_echo"), {
        kind: "error",
        code: "store_unavailable",
        message: "db read returned an unreadable response \u2014 try again",
        reason: "malformed_echo"
      };
      let B = {
        ...o.levelConfirmed !== void 0 && {
          levelConfirmed: o.levelConfirmed
        },
        ...R !== void 0 && {
          meId: R
        }
      };
      if (!E.data.exists) return f("artifact_db_read", "not_found"), {
        kind: "not_found",
        ...B
      };
      return g("artifact_db_read"), {
        kind: "ok",
        ...B,
        docs: [ {
          id: h ?? "",
          data: E.data.data ?? {},
          ...E.data.version !== void 0 && {
            version: E.data.version
          },
          ...E.data.updatedAt !== void 0 && {
            updatedAt: E.data.updatedAt
          }
        } ],
        ...E.data.version !== void 0 && {
          version: E.data.version
        },
        ...E.data.authoredByOthers && {
          authoredByOthers: !0
        },
        ...E.data.outside_writer !== void 0 && {
          outsideWriter: E.data.outside_writer
        }
      };
    }
    let b = Ve().safeParse(o.data);
    if (!b.success) return m("artifact_db_read", "malformed_echo"), {
      kind: "error",
      code: "store_unavailable",
      message: "db read returned an unreadable response \u2014 try again",
      reason: "malformed_echo"
    };
    return g("artifact_db_read"), {
      kind: "ok",
      ...o.levelConfirmed !== void 0 && {
        levelConfirmed: o.levelConfirmed
      },
      ...R !== void 0 && {
        meId: R
      },
      docs: b.data.docs,
      ...b.data.nextCursor !== void 0 && b.data.nextCursor !== "" && {
        nextCursor: b.data.nextCursor
      },
      ...b.data.authoredByOthers && {
        authoredByOthers: !0
      },
      ...b.data.outside_writer !== void 0 && {
        outsideWriter: b.data.outside_writer
      }
    };
  }
  let {code: w, reason: D, kind: S, limit: q, serverReason: I} = z(o.status, o.data), A = w === "not_found" && o.sessionScoped === !0;
  return m("artifact_db_read", A ? "not_found_session_scoped" : D), {
    kind: "error",
    code: w,
    ...o.levelConfirmed !== void 0 && {
      levelConfirmed: o.levelConfirmed
    },
    message: A ? ut : W(w, "read", S, q, void 0, void 0, I),
    reason: A ? "not_found_session_scoped" : D
  };
}

function M(e, t, r = "") {
  return m("artifact_db_write", `${r}${e}`), {
    kind: "error",
    code: "invalid_argument",
    message: t,
    reason: e
  };
}

async function Se(e, t, r = "") {
  let {collection: c, docId: s} = e;
  if (!$ne.test(c) || !e3.test(s)) return {
    ok: !1,
    result: M("invalid_segment", 'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)', r)
  };
  if (!xEt(c)) return {
    ok: !1,
    result: M("parity", nAn(c), r)
  };
  let l = $e(c, s);
  if (l !== null) {
    let n = await t();
    if (!n.ok) return n;
    ({collection: c, docId: s} = l(n.id));
  }
  let i = `${c}/${s}`;
  if (i.length > KL) return {
    ok: !1,
    result: M("path_too_long", `the composed document path is ${i.length} bytes \u2014 the limit is ${KL}`, r)
  };
  return {
    ok: !0,
    path: i
  };
}

function xe(e, t, r, c, s) {
  let l = s !== void 0 && {
    ifVersion: s
  };
  switch (e) {
   case "delete":
    return {
      path: t,
      ...l
    };

   case "set":
    return {
      path: t,
      data: r,
      replace: !0,
      ...l
    };

   case "update":
    return {
      path: t,
      data: r,
      ...l
    };

   case "str_replace":
    return {
      path: t,
      field: c?.field,
      old_str: c?.oldStr,
      new_str: c?.newStr,
      ...c?.replaceAll === !0 && {
        replace_all: !0
      },
      idem: c?.idem,
      ...l
    };
  }
}

async function x7o(e, t, r, c, s) {
  let {slug: l, op: i, data: n, edit: d} = t;
  if (!nr.test(l)) return M("invalid_slug", "not a valid artifact id");
  let h = await Se(t, () => ae(e, "artifact_db_write", l, r, c, s));
  if (!h.ok) return h.result;
  return oe(l, i, h.path, n, r, s, t.asLevel, d, t.ifVersion, t.requireVersion === !0 && i !== "str_replace" ? {
    host: e,
    address: `${t.collection}/${t.docId}`
  } : void 0, t.requestId !== void 0 ? {
    host: e,
    id: t.requestId
  } : void 0);
}

async function oe(e, t, r, c, s, l, i, n, d, h, u) {
  let R = h !== void 0 ? we.of(h.host) : void 0, y = R !== void 0 && !R.unsupported, v = await G("artifact_db_write", e, t, xe(t, r, c, n, d), {
    timeout: 3e4,
    ...i !== void 0 && {
      asLevel: i
    },
    ...y && {
      requireVersion: !0
    },
    ...u !== void 0 && {
      requestId: u
    },
    maxContentLength: re,
    credentials: l
  }, s);
  if (!v.ok) return v.result;
  if (y && R !== void 0 && j(v.status, v.data)) {
    let b = await oe(e, t, r, c, s, l, i, n, d, void 0, u);
    if (ct(b)) R.refusedAt = Date.now(), f("artifact_db_write", "require_version_unsupported");
    return b;
  }
  if (v.status === 200) {
    let b = v.levelConfirmed !== void 0 && {
      levelConfirmed: v.levelConfirmed
    }, E = Ge().safeParse(v.data);
    if (!E.success) return f("artifact_db_write", "malformed_echo"), {
      kind: "ok",
      ...b
    };
    g("artifact_db_write"), be(v.data, E.data.usage);
    let B = ge(v.data);
    return {
      kind: "ok",
      ...b,
      ...E.data.version !== void 0 && {
        version: E.data.version
      },
      ...E.data.usage !== void 0 && {
        usage: E.data.usage
      },
      ...B.length > 0 && {
        warnings: B
      }
    };
  }
  let {code: o, reason: w, kind: D, limit: S, version: q, required: I, serverReason: A} = z(v.status, v.data);
  return (ne(o) ? f : m)("artifact_db_write", w), {
    kind: "error",
    code: o,
    ...v.levelConfirmed !== void 0 && {
      levelConfirmed: v.levelConfirmed
    },
    message: W(o, "write", D, S, n?.field, {
      pinned: d,
      current: q,
      op: t,
      required: I,
      path: h?.address
    }, A) + (Fe.has(o) ? L : "") + (o === "invalid_argument" && (d !== void 0 || n?.replaceAll === !0) ? `. If this server does not yet accept \`${d !== void 0 ? "if_version" : "replace_all"}\`, that alone explains the refusal \u2014 nothing was written; retry without it only if an unconditional ${d !== void 0 ? "write" : "single replacement"} is acceptable here` : ""),
    reason: w
  };
}

function ct(e) {
  if (e.kind !== "error") return !0;
  switch (e.code) {
   case "invalid_argument":
   case "store_unavailable":
   case "quota_or_rate":
   case "quota_exceeded":
   case "upstream_auth":
   case "credential_rejected":
   case "cloud_unavailable":
   case "network_off":
    return !1;

   default:
    return !0;
  }
}

async function P7o(e, t, r, c, s) {
  let {slug: l, ops: i, asLevel: n} = t;
  if (!nr.test(l)) return M("invalid_slug", "not a valid artifact id", "batch_");
  if (i.length === 0 || i.length > BD) return M("batch_size", `a batch takes 1-${BD} writes \u2014 ${i.length} were given`, "batch_");
  let d, h = () => d ??= ae(e, "artifact_db_write", l, r, c, s), u = [], R = new Set;
  for (let [x, F] of i.entries()) {
    let C = await Se(F, h, "batch_");
    if (!C.ok) return {
      ...C.result,
      message: `write ${x + 1} of ${i.length}: ${C.result.message}`
    };
    if (R.has(C.path)) return M("duplicate_path", `write ${x + 1} of ${i.length} addresses ${C.path}, which an earlier write in this batch already addresses \u2014 a batch writes each document at most once`, "batch_");
    R.add(C.path), u.push({
      op: F.op,
      path: C.path,
      ...F.data !== void 0 && {
        data: F.data
      },
      ...F.ifVersion !== void 0 && {
        ifVersion: F.ifVersion
      }
    });
  }
  let y = u.some(x => x.ifVersion !== void 0), v = {
    ops: u.map(({op: x, path: F, data: C, ifVersion: H}) => ({
      op: x,
      ...xe(x, F, C, void 0, H)
    }))
  }, o;
  try {
    o = Buffer.byteLength(_({
      slug: l,
      verb: "batch",
      args: v
    }), "utf8");
  } catch {
    return M("data_invalid", "every document in the batch must be a JSON-serializable object", "batch_");
  }
  if (o > oAn) return M("batch_too_large", `the batch serializes to ${o} bytes \u2014 the limit for one request is ${oAn}; split it into smaller batches`, "batch_");
  let w = b9r.of(e), D = t.requireVersion === !0 ? e : void 0, S = t.requestId !== void 0 ? {
    host: e,
    id: t.requestId
  } : void 0;
  if (w.unsupported && !y) return de(l, u, r, s, n, D, S);
  let q = we.of(e), I = t.requireVersion === !0 && !q.unsupported, A = x => G("artifact_db_write", l, "batch", v, {
    timeout: 6e4,
    maxContentLength: re,
    credentials: s,
    ...n !== void 0 && {
      asLevel: n
    },
    ...x && {
      requireVersion: !0
    },
    ...S !== void 0 && {
      requestId: S
    }
  }, r), b = await A(I);
  if (!b.ok) return b.result;
  if (I && j(b.status, b.data)) {
    if (b = await A(!1), !b.ok) return b.result;
    if (n === void 0) q.refusedAt = Date.now(), f("artifact_db_write", "batch_require_version_unsupported");
  }
  if (n === void 0 && j(b.status, b.data)) return w.refusedAt = Date.now(), y ? ft() : de(l, u, r, s, void 0, D, S);
  if (b.status === 200) {
    let x = b.levelConfirmed !== void 0 && {
      levelConfirmed: b.levelConfirmed
    }, F = Xe().safeParse(b.data);
    if (!F.success || F.data.results.length !== i.length) return f("artifact_db_write", "malformed_batch_echo"), 
    {
      kind: "ok",
      ...x,
      results: i.map(() => ({}))
    };
    g("artifact_db_write"), be(b.data, F.data.usage);
    let C = ge(b.data);
    return {
      kind: "ok",
      ...x,
      results: F.data.results.map(H => H.version !== void 0 ? {
        version: H.version
      } : {}),
      ...F.data.usage !== void 0 && {
        usage: F.data.usage
      },
      ...C.length > 0 && {
        warnings: C
      }
    };
  }
  let {code: E, reason: B, kind: Ce, limit: Oe, version: Ie, index: X, required: Be, serverReason: qe} = z(b.status, b.data);
  (ne(E) ? f : m)("artifact_db_write", `batch_${B}`);
  let T = X !== void 0 && X < u.length ? X : void 0;
  return {
    kind: "error",
    code: E,
    ...b.levelConfirmed !== void 0 && {
      levelConfirmed: b.levelConfirmed
    },
    message: mt(E, Ce, Oe, {
      pinned: y,
      stale: T !== void 0 ? {
        index: T,
        path: `${i[T].collection}/${i[T].docId}`,
        op: i[T].op,
        ifVersion: i[T].ifVersion,
        total: i.length
      } : void 0,
      version: Ie,
      required: Be,
      serverReason: qe
    }),
    reason: B
  };
}

function ft() {
  return f("artifact_db_write", "batch_pinned_unsupported"), {
    kind: "error",
    code: "invalid_argument",
    reason: "batch_pinned_unsupported",
    message: `db batch write failed (${O("invalid_argument")}): this server does not take batch writes yet (nor, most likely, \`if_version\`), and a batch with \`if_version\` pins is never applied one write at a time \u2014 nothing was written. Resend it without the pins only if unconditional writes are acceptable here`
  };
}

function mt(e, t, r, c) {
  if (e === "too_large") return `db batch write failed (${O(e)}): the batch body exceeds the server's 1 MiB request limit \u2014 nothing was written; split it into smaller write_db calls`;
  if (e === "version_mismatch" && c?.required === !0) {
    let i = `db batch write failed (${O(e)})`, n = "Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending", d = c.stale;
    return d !== void 0 ? `${i}: writes[${d.index}] (write ${d.index + 1} of ${d.total}) targets ${d.path}, which already exists, and carried no if_version \u2014 the whole batch wrote nothing. Read that document back, re-plan its ${d.op === "delete" ? "delete (if it should still be deleted)" : "write on what it holds now"} with if_version set to the version the read returns, then resend the batch. ${"Other unpinned entries that write existing documents would be refused the same way \u2014 read and pin those too before resending"}` : `${i}: one of the writes targets a document that already exists and carried no if_version \u2014 the whole batch wrote nothing. Read the existing documents this batch writes, re-plan those entries on what they hold now with if_version set to the versions the reads return, then resend the batch`;
  }
  if (e === "version_mismatch") {
    let i = `db batch write failed (${O(e)}): the batch is atomic, so nothing was written \u2014 none of the writes applied`, n = c?.stale;
    if (n === void 0 || n.ifVersion === void 0) return `${i}. A document one of the writes was pinned to with if_version is no longer at that version (or no longer exists). Re-read the pinned documents, re-plan those writes against what they hold now with fresh pins, then resend the batch`;
    let d = `writes[${n.index}] (write ${n.index + 1} of ${n.total}, ${_(n.path)})`, h = "It is the first stale pin the server met; later pinned entries were not checked, so re-read any pinned document you are unsure of too, then resend the batch";
    return c?.version !== void 0 ? `${i}. ${d} was pinned to version ${n.ifVersion} and that document is now at version ${c.version}: read it back, re-plan its write against what it holds now and pin to that version. ${h}` : `${i}. ${d} was pinned to version ${n.ifVersion} and that document has changed or may have been deleted (the server named no current version): read it back \u2014 if it still exists, re-plan its write against what it holds now and pin to its version; if it is gone, drop that entry, or re-create it with a "set" entry and no if_version only if it should exist again. ${h}`;
  }
  let s = W(e, "batch write", t, r, void 0, void 0, c?.serverReason), l = e === "invalid_argument" && c?.pinned === !0 ? ". If this server does not yet accept `if_version` on batch writes, that alone explains the refusal \u2014 resend without the pins only if unconditional writes are acceptable here" : "";
  return qor(e) ? `${s}; the batch is atomic, so nothing was written${l}` : `${s}; the batch's outcome is unknown \u2014 it applies all-or-nothing and may have committed; read back before retrying`;
}

function qor(e) {
  return e !== "store_unavailable";
}

async function de(e, t, r, c, s, l, i) {
  f("artifact_db_write", "batch_fallback_sequential");
  let n = [], d, h = [], u, R = v => s !== void 0 && v > 0 && u !== !0 ? ` (as_level '${s}' unconfirmed for them \u2014 they may have run at your own level)` : "", y = "this server does not take batch writes yet, so the batch was applied one write at a time and is NOT atomic";
  for (let [v, {op: o, path: w, data: D}] of t.entries()) {
    let S = `${v} ${v === 1 ? "entry" : "entries"} before it already committed`, q = t.length - v - 1, I = b => ({
      kind: "error",
      code: "store_unavailable",
      reason: "batch_fallback_aborted",
      message: `${y}: interrupted at writes[${v}] (write ${v + 1} of ${t.length}). The ${S}${R(v)}; writes[${v}] itself ${b ? "may or may not have applied" : "did not run"}; the ${q} after it did not run.`,
      fallback: "sequential",
      results: n,
      failedIndex: v
    });
    if (r.aborted) return I(!1);
    let A;
    try {
      A = await oe(e, o, w, D, r, c, s, void 0, void 0, l && {
        host: l,
        address: w
      }, i);
    } catch (b) {
      if (wa(b)) return I(!0);
      if (b instanceof N) return I(!1);
      throw b;
    }
    if (A.kind === "error") return {
      kind: "error",
      code: A.code,
      reason: A.reason,
      message: `${y}: writes[${v}] (write ${v + 1} of ${t.length}) failed \u2014 ${A.message.replace(L, `; writes[${v}] was not applied`)}. The ${S}${R(v)}; the ${q} after it did not run.`,
      fallback: "sequential",
      results: n,
      failedIndex: v
    };
    n.push(A.version !== void 0 ? {
      version: A.version
    } : {}), d = A.usage ?? (o === "delete" ? void 0 : d);
    for (let b of A.warnings ?? []) if (h.length < pe && !h.includes(b)) h.push(b);
    if (A.levelConfirmed !== void 0) u = (u ?? !0) && A.levelConfirmed;
  }
  return {
    kind: "ok",
    results: n,
    ...d !== void 0 && {
      usage: d
    },
    ...h.length > 0 && {
      warnings: h
    },
    fallback: "sequential",
    ...u !== void 0 && {
      levelConfirmed: u
    }
  };
}

export { pye, rAe, e3, $ne, xEt, nAn, KL, CVe, Yle, lw, xqt, E7o, oAe, rAn, h4, _nt, Pqt, _9r, BD, oAn, k7o, T7o, b9r, A7o, C7o, S9r, R7o, sAn, x7o, P7o, qor };
