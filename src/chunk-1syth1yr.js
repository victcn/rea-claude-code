// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ye, E, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { xf, _, ty, L4n, Pf, uo, se, t } from "./chunk-kawq2919.js";

import { ne, nt } from "./chunk-5wbhf1bk.js";

import { Ag } from "./chunk-3zb1ef23.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { hC, Gt } from "./chunk-xywp7esx.js";

import { p } from "./chunk-jkzenvsk.js";

import { wa } from "./chunk-vps0k559.js";

import { nq, oM } from "./chunk-e2610wvk.js";

import { Qa } from "./chunk-nc0jxmkt.js";

import { Cm, nr } from "./chunk-f1zpf9me.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { Mnt, Hnt, kW, YI, iQ, GVe, KAn, QEt, eF, aQ, zne, VVe, KXr, Dnt, iAe, Lsr, YXr, g4t } from "./chunk-btyj9pkf.js";

import { lZ, GF, Yct, Xct, Jct, dZ } from "./chunk-kd22gz0e.js";

import { hye, Bne } from "./chunk-69rr80fg.js";

import { L6e, ph, lk, yse, jen } from "./chunk-ann91fyn.js";

import { cH, eu } from "./chunk-z655gvmz.js";

import { RVe, Vx, eR, y4, DVe, Hqt, Dqt, Lqt, Nqt, LVe, $qt, Fqt, vnt } from "./chunk-exeqjnzg.js";

import { $xe, yMt, _ct } from "./chunk-hk8p0fqv.js";

import { CAn } from "./chunk-ysmrtrar.js";

import { me, yn, Vo, lr, St, cp } from "./chunk-dexzwy8h.js";

import { at } from "./chunk-0bq6eb61.js";

import { D } from "./chunk-hmqkrrtz.js";

import { closeSync as te, constants as K, fstatSync as pe, lstatSync as j, openSync as be, read as Ae, realpathSync as he } from "fs";

import { extname as ke } from "path";

import { promisify as Se } from "util";

function QKt() {
  return a.CLAUDE_CODE_ARTIFACT_ASSETS ?? (GVe() || (CAn().capabilities?.includes("assets") ?? !1));
}

function qQo() {
  if (a.CLAUDE_CODE_ARTIFACT_ASSETS !== void 0) return "env";
  return GVe() ? "agent" : CAn().source;
}

var q = "image/svg+xml", we = 2097152;

function aEt(e) {
  return e === q ? we : cH;
}

var H = new Map([ [ ".png", "image/png" ], [ ".jpg", "image/jpeg" ], [ ".jpeg", "image/jpeg" ], [ ".gif", "image/gif" ], [ ".webp", "image/webp" ], [ ".svg", q ], [ ".mp4", "video/mp4" ], [ ".webm", "video/webm" ], [ ".pdf", "application/pdf" ], [ ".woff2", "font/woff2" ], [ ".woff", "font/woff" ], [ ".ttf", "font/ttf" ], [ ".otf", "font/otf" ], [ ".csv", "text/csv" ], [ ".md", "text/markdown" ], [ ".markdown", "text/markdown" ], [ ".json", "application/json" ], [ ".txt", "text/plain" ], [ ".ts", "text/plain" ], [ ".css", "text/css" ], [ ".js", "text/javascript" ], [ ".mjs", "text/javascript" ], [ ".cjs", "text/javascript" ] ]), YQo = D(H.values()).flatMap(e => lor(e) ?? []), lEt = [ ...H.keys() ].map(e => e.slice(1)).join(", ");

function JTe(e) {
  return H.get(ke(e).toLowerCase());
}

var ve = new Set([ "text/csv", "text/markdown", "application/json", "text/plain" ]);

function dEt(e) {
  return e !== void 0 && ve.has(e);
}

var C = "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the upload so it is checked again", ue = "reading where file_path resolves is blocked by a Read permission rule \u2014 the upload was not attempted", le = "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 upload the file by its resolved path, or copy it under the working directory first", ZKt = "file_path must name a regular file to upload", eqt = "the file is empty \u2014 nothing to upload";

function tqt(e, r) {
  return `too large: ${Math.ceil(Number(e) * 10 / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}

var ITn = "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement \u2014 copy it to an ordinary local directory and upload the copy";

function B(e) {
  if (W(e)) return {
    kind: "missing"
  };
  let r = E(e);
  return {
    kind: "error",
    reason: "read_error",
    message: `cannot read file_path (${r ?? "unexpected error"})`,
    errnoCode: r
  };
}

function ont(e) {
  return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}

function XQo(e) {
  let r = e.split(":");
  if (r.length !== 4 || !r.every(s => /^\d+$/.test(s))) return;
  return Number(r[2]);
}

var nqt = "upload_asset reads only local files \u2014 file_path names a network path (UNC share, /net automount, or device-style path), reaches one through a link on the way, or has a directory or link on the way that could not be examined; if the file is on a network location, copy it onto a local disk first";

function AB(e) {
  if (RVe(e)) return {
    kind: "network"
  };
  let r = Pf(se(), e);
  if (r === ty) return {
    kind: "unresolved",
    error: L4n(e)
  };
  if (r !== void 0 && RVe(r) || Vx(e)) return {
    kind: "network"
  };
  let s;
  try {
    s = he(e);
  } catch (d) {
    return {
      kind: "unresolved",
      error: d
    };
  }
  return RVe(s) ? {
    kind: "network"
  } : {
    kind: "resolved",
    real: s
  };
}

function snt(e) {
  try {
    let r = j(e, {
      bigint: !0
    });
    return {
      real: e,
      identity: ont(r),
      ...r.isFile() && r.nlink > 1n && {
        linked: !0
      }
    };
  } catch {
    return {
      real: e,
      identity: null
    };
  }
}

function OTn(e, r = AB(e), s = r.kind !== "network" && xe(e)) {
  return dEt(JTe(e)) || r.kind === "resolved" && dEt(JTe(r.real)) || s;
}

function xe(e) {
  return QTe(e).link;
}

function QTe(e) {
  try {
    return {
      link: j(e).isSymbolicLink(),
      unreadable: null
    };
  } catch (r) {
    return {
      link: !0,
      unreadable: E(r) ?? "unexpected error"
    };
  }
}

var ce = Se(Ae);

function z3r(e, r, s, d) {
  let n = r, l = typeof n === "object" && n !== null && typeof n.real === "string" ? {
    real: n.real,
    identity: typeof n.identity === "string" && (n.digest === void 0 || typeof n.digest === "string") ? n.identity : null,
    ...typeof n.digest === "string" && {
      digest: n.digest
    }
  } : void 0, o = AB(e);
  if (o.kind === "network") return {
    kind: "error",
    reason: "network",
    message: nqt
  };
  if (o.kind === "unresolved") {
    if (l !== void 0 && l.identity !== null) return {
      kind: "error",
      reason: "changed",
      message: C
    };
    let h = uo(e).slice(1).map(s);
    return h.includes("deny") ? {
      kind: "error",
      reason: "read_denied",
      message: ue
    } : h.some(b => b !== "allow") ? {
      kind: "error",
      reason: "via_link",
      message: le
    } : B(o.error);
  }
  let {real: i} = o, u = i === e ? void 0 : s(i);
  if (u === "deny") return {
    kind: "error",
    reason: "read_denied",
    message: ue
  };
  if (l !== void 0) {
    if (i !== l.real) return {
      kind: "error",
      reason: "changed",
      message: C
    };
  } else if (u !== void 0 && u !== "allow") return {
    kind: "error",
    reason: "via_link",
    message: le
  };
  let w;
  try {
    w = j(i, {
      bigint: !0
    });
  } catch (h) {
    return l !== void 0 && W(h) ? {
      kind: "error",
      reason: "changed",
      message: C
    } : B(h);
  }
  if (w.isSymbolicLink()) return {
    kind: "error",
    reason: "changed",
    message: C
  };
  if (!w.isFile()) return {
    kind: "error",
    reason: "not_a_file",
    message: ZKt
  };
  if (l === void 0 && w.nlink > 1n) return {
    kind: "error",
    reason: "hard_link",
    message: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and upload the copy"
  };
  let c = K.O_NOFOLLOW | K.O_NONBLOCK, x;
  try {
    x = be(i, K.O_RDONLY | c);
  } catch (h) {
    if (E(h) === "ELOOP") return {
      kind: "error",
      reason: "changed",
      message: C
    };
    return B(h);
  }
  let R = !1;
  try {
    let h = pe(x, {
      bigint: !0
    });
    if (!h.isFile()) return {
      kind: "error",
      reason: "not_a_file",
      message: ZKt
    };
    if (xf(h.ino)) return {
      kind: "error",
      reason: "no_identity",
      message: ITn
    };
    if (ont(h) !== (l !== void 0 ? l.identity : ont(w))) return {
      kind: "error",
      reason: "changed",
      message: C
    };
    {
      let O = null;
      try {
        O = he(`/proc/self/fd/${x}`);
      } catch {}
      if (O !== null && O !== i) return {
        kind: "error",
        reason: "changed",
        message: C
      };
    }
    try {
      let O = AB(e);
      if (O.kind !== "resolved" || O.real !== i) return {
        kind: "error",
        reason: "changed",
        message: C
      };
      let L = j(i, {
        bigint: !0
      });
      if (L.dev !== h.dev || L.ino !== h.ino) return {
        kind: "error",
        reason: "changed",
        message: C
      };
    } catch {
      return {
        kind: "error",
        reason: "changed",
        message: C
      };
    }
    let b = Number(h.size);
    if (b === 0 || b > d) return {
      kind: "error",
      reason: "size",
      message: b === 0 ? eqt : tqt(b, d),
      sizeBytes: b
    };
    return R = !0, {
      kind: "opened",
      fd: x,
      size: b,
      real: i,
      identity: ont(h),
      digest: l?.digest
    };
  } catch (h) {
    return B(h);
  } finally {
    if (!R) te(x);
  }
}

async function G3r(e) {
  let {fd: r, size: s, identity: d, digest: n} = e;
  try {
    if (ont(pe(r, {
      bigint: !0
    })) !== d) return {
      kind: "error",
      reason: "changed",
      message: C
    };
    let l = Buffer.allocUnsafe(s), o = 0;
    while (o < s) {
      let {bytesRead: u} = await ce(r, l, o, s - o, o);
      if (u === 0) break;
      o += u;
    }
    let {bytesRead: i} = await ce(r, Buffer.alloc(1), 0, 1, s);
    if (o !== s || i !== 0) return {
      kind: "error",
      reason: "changed",
      message: C
    };
    if (n !== void 0 && at(l) !== n) return {
      kind: "error",
      reason: "changed",
      message: C
    };
    return {
      kind: "ok",
      bytes: l
    };
  } catch (l) {
    return B(l);
  } finally {
    te(r);
  }
}

function V3r(e) {
  try {
    te(e.fd);
  } catch {}
}

async function cEt(e, r, s, d) {
  let n = z3r(e, r, s, d);
  return n.kind === "opened" ? G3r(n) : n;
}

var Ee = new Set([ "invalid_request", "too_large", "unsupported_type", "quota_or_state", "rate_limited", "capability_disabled", "store_unavailable", "upstream_error", "credential_rejected", "not_found", "asset_not_found", "not_copyable" ]), zle = /^\/?_blob\/[0-9a-f]{32}$/;

function re(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}

var UD = /^[0-9a-f]{64}$/, Re = 50, MTn = 40, QJ = /^[A-Za-z0-9_=-]{1,4096}$/, K3r = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/, Gx = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/, Dne = 10, KI = 25, Gle = 1024, ge = p(() => St({
  opaque_id: me().regex(Cm),
  url: me().optional().catch(void 0),
  size_bytes: yn().int().nonnegative(),
  content_type: me().regex(Gx),
  sha256: me().regex(UD).optional()
})), Te = p(() => St({
  assets: lr(St({
    opaque_id: me().regex(Cm),
    url: me().optional().catch(void 0),
    content_type: me().regex(Gx).max(MTn),
    size_bytes: yn().int().nonnegative().max(cH),
    sha256: me().regex(UD).optional(),
    created_at: me().regex(K3r).max(MTn)
  })).max(1e3),
  usage: St({
    files: yn().int().nonnegative(),
    bytes: yn().int().nonnegative(),
    max_files: yn().int().nonnegative(),
    max_bytes: yn().int().nonnegative()
  }),
  next: me().regex(QJ).or(cp("")).nullish().transform(e => e || void 0),
  cowritten: cp(!0).optional().catch(void 0),
  outside_writer: Vo().optional().catch(void 0)
})), Fe = p(() => St({
  deleted: Vo()
})), $e = p(() => St({
  error: St({
    code: me(),
    message: me().optional()
  })
})), Oe = p(() => St({
  error: me(),
  reason: me()
})), Ce = 2e4, ae = 3e4, Le = 9e4;

function De(e) {
  return `/api/frame/blob/${e}/agent-upload`;
}

function _e(e) {
  return `/api/frame/blob/${e}/agent-list`;
}

function Me(e, r) {
  return `/api/frame/blob/${e}/${r}/agent-delete`;
}

function Pe(e) {
  return `/api/frame/blob/${e}/agent-copy`;
}

function U(e, r) {
  let s = $e().safeParse(r);
  if (s.success) {
    let d = s.data.error.code;
    if (Ee.has(d)) {
      let n = s.data.error.message && Q(s.data.error.message);
      return {
        code: d,
        reason: d,
        ...n && {
          detail: n
        }
      };
    }
    return {
      code: "upstream_error",
      reason: "unknown_code"
    };
  }
  if (e === 403 || e === 503) {
    let d = Oe().safeParse(r);
    if (d.success) return {
      code: "policy_denied",
      reason: "policy_denied",
      detail: Q(d.data.error)
    };
  }
  if (e === 403) {
    if (typeof r === "string" && r.trim() === "not a writer") return {
      code: "not_writer",
      reason: "not_writer"
    };
    if (typeof r === "string" && /^\s*</.test(r)) return {
      code: "upstream_error",
      reason: "http_403_page"
    };
    return {
      code: "credential_rejected",
      reason: "http_403"
    };
  }
  if (e === 404) return typeof r === "string" && r.trim() === "not found" ? {
    code: "not_found",
    reason: "http_404"
  } : {
    code: "store_unavailable",
    reason: "unrouted",
    detail: "this asset route is not served on this path yet (an older deployment, or a cloud session whose gateway does not relay it) \u2014 nothing changed; retry later"
  };
  if (e === 401) return {
    code: "upstream_auth",
    reason: "http_401"
  };
  if (e === 409) return {
    code: "quota_or_state",
    reason: "http_409"
  };
  if (e === 413) return {
    code: "too_large",
    reason: "http_413"
  };
  if (e === 415) return {
    code: "unsupported_type",
    reason: "http_415"
  };
  if (e === 429) return {
    code: "rate_limited",
    reason: "http_429"
  };
  if (e === 502 || e === 503 || e === 504) return {
    code: "store_unavailable",
    reason: `http_${e}`
  };
  return {
    code: "upstream_error",
    reason: `http_${e}`
  };
}

function Q(e) {
  return ne(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}

function Be(e, r, s = "upload", d) {
  let n = `asset ${s} failed (${e})`;
  switch (e) {
   case "invalid_request":
    return `${n}: ${r ?? "the server could not accept the request as shaped"}`;

   case "too_large":
    return `${n}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit \u2014 compress or split it"}`;

   case "unsupported_type":
    return `${n}: ${r ?? `only these file types are accepted: ${lEt}`}`;

   case "quota_or_state":
    return `${n}: ${r ?? (s === "upload" || s === "copy" ? "the Artifact cannot take uploads right now \u2014 it is a live document, unpublished, retired, being deleted, or over its asset storage quota" : "the Artifact has no asset store right now \u2014 it is a live document, unpublished, retired, or being deleted")}`;

   case "rate_limited":
    return `${n}: calling too often \u2014 wait${r ? ` ${r}` : ""} before retrying, and never loop`;

   case "upstream_auth":
    return `${n}: could not authenticate \u2014 the session's credential may need a refresh; try again`;

   case "capability_disabled":
    return `${n}: the Artifact's published version does not declare the assets capability \u2014 republish it with assets: {} added to its declared capabilities, then retry`;

   case "store_unavailable":
    return `${n}: ${r ?? `the asset store is unavailable right now \u2014 retry once after a short wait${s === "upload" ? " (an upload that timed out upstream may already be stored; a duplicate costs only quota)" : ""}`}`;

   case "upstream_error":
    return `${n}: unexpected answer from the server${r ? ` (${r})` : ""}`;

   case "not_found":
    return s === "copy" && d === "not_found" ? `${n}: the SOURCE Artifact (from_url) does not exist, is not one this session can open, or cannot be copied from \u2014 the cases are deliberately indistinguishable; check from_url with action "list", scope "shared"` : `${n}: no such Artifact, or artifact assets are not available to this account or Artifact \u2014 the cases are deliberately indistinguishable; check the url with action "list"`;

   case "asset_not_found":
    return `${n}: ${r ?? "the source Artifact holds no asset with one of the given ids"} \u2014 run action "list_assets" on from_url for its current ids; nothing was copied`;

   case "not_copyable":
    return `${n}: ${r ?? "this source cannot be copied from"}; nothing was copied`;

   case "not_writer":
    return `${n}: this account can open the Artifact but not edit it \u2014 only writers can ${s === "copy" ? "copy assets into it" : `${s} assets`}`;

   case "credential_rejected":
    return `${n}: the server refused this session's credential at the asset door \u2014 not an access or existence answer; report this as a client/server integration fault${r ? ` (${r})` : ""}`;

   case "policy_denied":
    return `${n}: ${r ?? "blocked by the organization's artifact policy"}`;

   case "unavailable_to_account":
    return `${n}: artifact assets are not available to this account`;
  }
}

function G(e, r) {
  return (s, d, n) => (e(d), {
    kind: "error",
    code: s,
    message: Be(s, n, r, d),
    reason: d
  });
}

var Ne = "asset uploads, copies, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";

async function Y(e, r) {
  let {verb: s, route: d, body: n, contentType: l, marks: o, fail: i} = e, u = F => ({
    replied: !1,
    failure: F
  }), w = GVe();
  if (w) o.agent_direct = !0;
  let c = g4t() || iQ() && QEt(kW), x = !w && c && !eF(kW), R = !w && !c && iQ() || x, h = () => u(i("store_unavailable", "relay_unavailable", "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help"));
  if (!R && !w && a.CLAUDE_CODE_REMOTE) return h();
  if (R && !YI(kW)) return u(i("store_unavailable", "relay_not_served", "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help"));
  let b = ee();
  if (!b.assetsOnRoster) {
    let F = b.accountEpoch, v = b.roster === void 0, T = b.roster ?? await Bne({
      timeoutMs: 5e3,
      signal: r,
      credentials: e.credentials
    });
    if ("err" in T) o[`roster_${T.cause}`] = !0; else if (v && !hye({
      session: b,
      epoch: F,
      roster: T,
      storageV5: void 0
    }).adopted) o.roster_outlived = !0; else if (!T.capabilities.includes("assets")) if (!R) return u(i("unavailable_to_account", "roster_no_assets")); else o.roster_no_assets = !0;
  }
  let O = {
    maxRedirects: 0,
    headers: {
      ...eu(),
      "Content-Type": l,
      Accept: "application/json"
    },
    ...e.verb === "upload" ? {
      streamUpload: {
        tailFloorMs: () => Le,
        onSettled: F => {
          if (F.stalled) o.stalled = !0;
        }
      }
    } : {
      timeout: e.timeoutMs
    },
    ...e.maxBodyLength !== void 0 && {
      maxBodyLength: e.maxBodyLength
    },
    maxContentLength: 262144,
    validateStatus: () => !0,
    signal: r
  }, L = async () => R ? (await Lsr("POST", d, n, O, kW)).res : Gt.post(d, n, {
    ...O,
    host: "frame",
    auth: "claude-ai-oauth",
    refreshOAuth: !0,
    credentials: e.credentials
  }), k;
  try {
    if (x && e.verb === "upload" && !VVe(kW)) {
      let v;
      try {
        v = (await Lsr("POST", e.probeRoute, _({
          limit: 1
        }), {
          maxRedirects: 0,
          headers: {
            ...eu(),
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          timeout: ae,
          maxContentLength: 262144,
          validateStatus: () => !0,
          signal: r
        }, kW)).res;
      } catch (M) {
        if (wa(M) || M instanceof Ye) throw M;
        return aQ(kW, !0), u(i("store_unavailable", "probe_request_error", "the session gateway did not answer; nothing was uploaded \u2014 one retry is safe"));
      }
      let T = YXr(v);
      if (T.refused) return aQ(kW), h();
      if (!T.vouched) {
        if (!v.ok || v.status >= 500 || v.status === 499) aQ(kW, !0);
        return u(i("store_unavailable", "probe_unvouched", "the session gateway could not confirm the asset route; nothing was uploaded \u2014 retry later"));
      }
      zne(kW);
    }
    let F = v => {
      if (!x) return !1;
      let T = YXr(v);
      if (T.refused && !(v.ok && v.status === 413)) return aQ(kW), KXr(kW), !0;
      if (T.vouched) zne(kW); else if (!VVe(kW) && (!v.ok || v.status >= 500 || v.status === 499)) aQ(kW, !0);
      return !1;
    };
    if (k = await L(), F(k)) return h();
    if (k.ok && (k.status === 429 || k.status === 503) && U(k.status, k.data).code !== "policy_denied") {
      let v = k.response.headers?.["retry-after"], T = Ag(typeof v === "string" ? v : void 0);
      if (T !== void 0 && T <= Ce) {
        if (await J(T, r), r.aborted) throw new Ye;
        if (o.retried = !0, k = await L(), F(k)) return h();
      }
    }
  } catch (F) {
    if (wa(F) || F instanceof Ye) throw F;
    if (x && !VVe(kW)) aQ(kW, !0);
    if (oM(F) !== void 0) return u(i("store_unavailable", "proxy_refused", "a network proxy refused the connection; nothing was sent \u2014 one retry is safe"));
    return u(i("store_unavailable", "request_error", s === "upload" ? "the request failed in transit or timed out \u2014 a timed-out upload may already be stored; one retry is safe (a duplicate costs only quota)" : s === "copy" ? 'the request failed in transit or timed out \u2014 a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice' : "the request failed in transit or timed out \u2014 one retry is safe"));
  }
  if (!k.ok) return u({
    ...i("store_unavailable", k.reason.replace(/-/g, "_")),
    message: k.reason === "no-auth" ? R ? L6e(k.detail) : ph(k.detail) : `asset ${s} unavailable: ${k.reason}`
  });
  if (w && k.status === 403 && U(k.status, k.data).reason === "credential_rejected") return u({
    ...i("credential_rejected", "agent_not_enabled"),
    message: `asset ${s} failed (credential_rejected): ${Ne}`
  });
  return {
    replied: !0,
    status: k.status,
    data: k.data,
    retryAfter: k.response.headers?.["retry-after"]
  };
}

function V(e, r) {
  let {code: s, reason: d, detail: n} = U(e.status, e.data), l = Ag(e.retryAfter);
  return r(s, d, s === "rate_limited" ? l !== void 0 ? `${Math.max(1, Math.ceil(l / 1e3))}s` : void 0 : s === "upstream_error" && n === void 0 ? `HTTP ${e.status}` : n);
}

async function aor(e, r) {
  let {slug: s, bytes: d, contentType: n} = e, l = {}, o = G(x => m("artifact_asset_upload", x, l), "upload");
  if (!nr.test(s)) return o("invalid_request", "invalid_slug", "not a valid artifact id");
  let i = aEt(n);
  if (d.length === 0 || d.length > i) return d.length === 0 ? o("invalid_request", "size", "the file is empty") : o("too_large", "size", n === q ? `the SVG exceeds the ${i >> 20} MiB limit for SVG assets \u2014 simplify or rasterize it` : `the file exceeds the ${i >> 20} MiB per-asset limit \u2014 compress or split it`);
  let u = await Y({
    verb: "upload",
    route: De(s),
    probeRoute: _e(s),
    body: d,
    contentType: n,
    maxBodyLength: cH + 4096,
    marks: l,
    fail: o,
    credentials: e.credentials
  }, r), w = x => l.retried === !0 ? {
    ...x,
    resent: !0
  } : x;
  if (!u.replied) return w(u.failure);
  if (u.status !== 200) return w(V(u, o));
  let c = ge().safeParse(u.data);
  if (!c.success || c.data.content_type !== n || (n === q ? c.data.size_bytes === 0 || c.data.size_bytes > cH : c.data.size_bytes !== d.length)) return w(o("upstream_error", "malformed_echo", "the upload probably succeeded but the reply was unreadable \u2014 retry at most once; if it repeats, stop and report it"));
  return ee().assetsOnRoster = !0, g("artifact_asset_upload", {
    ...l,
    size_bytes: c.data.size_bytes
  }), {
    kind: "ok",
    id: c.data.opaque_id,
    url: re(c.data.opaque_id, c.data.url),
    sizeBytes: c.data.size_bytes,
    contentType: c.data.content_type,
    ...c.data.sha256 !== void 0 && {
      sha256: c.data.sha256
    },
    ...l.retried === !0 && {
      resent: !0
    }
  };
}

async function JQo(e, r) {
  let {slug: s, after: d} = e, n = {}, l = G(u => m("artifact_asset_list", u, n), "list");
  if (!nr.test(s)) return l("invalid_request", "invalid_slug", "not a valid artifact id");
  if (d !== void 0 && !QJ.test(d)) return l("invalid_request", "invalid_cursor", "after must be the next value from an earlier list_assets result");
  let o = await Y({
    verb: "list",
    route: _e(s),
    body: _({
      ...d !== void 0 && {
        after: d
      },
      limit: Re
    }),
    contentType: "application/json",
    timeoutMs: ae,
    marks: n,
    fail: l,
    credentials: e.credentials
  }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return V(o, l);
  let i = Te().safeParse(o.data);
  if (!i.success) return l("upstream_error", "malformed_reply", "the listing was unreadable");
  return ee().assetsOnRoster = !0, yMt(s, i.data.cowritten), _ct(s, i.data.outside_writer), 
  g("artifact_asset_list", {
    ...n,
    count: i.data.assets.length
  }), {
    kind: "ok",
    assets: i.data.assets.map(u => ({
      id: u.opaque_id,
      url: re(u.opaque_id, u.url),
      contentType: u.content_type,
      sizeBytes: u.size_bytes,
      ...u.sha256 !== void 0 && {
        sha256: u.sha256
      },
      createdAt: Q(u.created_at)
    })),
    usage: {
      files: i.data.usage.files,
      bytes: i.data.usage.bytes,
      maxFiles: i.data.usage.max_files,
      maxBytes: i.data.usage.max_bytes
    },
    ...i.data.next !== void 0 && {
      next: i.data.next
    },
    ...i.data.cowritten && {
      cowritten: !0
    },
    ...i.data.outside_writer !== void 0 && {
      outsideWriter: i.data.outside_writer
    }
  };
}

async function QQo(e, r) {
  let {slug: s, id: d} = e, n = {}, l = G(u => m("artifact_asset_delete", u, n), "delete");
  if (!nr.test(s)) return l("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!Cm.test(d)) return l("invalid_request", "invalid_id", "not a valid asset id");
  let o = await Y({
    verb: "delete",
    route: Me(s, d),
    body: "{}",
    contentType: "application/json",
    timeoutMs: ae,
    marks: n,
    fail: l,
    credentials: e.credentials
  }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return V(o, l);
  let i = Fe().safeParse(o.data);
  if (!i.success) return l("upstream_error", "malformed_reply", "the delete may have succeeded but the reply was unreadable \u2014 list the assets to check");
  return ee().assetsOnRoster = !0, g("artifact_asset_delete", {
    ...n,
    deleted: i.data.deleted
  }), {
    kind: "ok",
    deleted: i.data.deleted
  };
}

var Ie = p(() => St({
  assets: lr(ge().extend({
    from_id: me().regex(Cm)
  })).max(Dne)
})), ze = 12e4;

async function ZQo(e, r) {
  let {slug: s, fromSlug: d, ids: n} = e, l = e.crossOrgOk === !0, o = {}, i = G(c => m("artifact_asset_copy", c, o), "copy");
  if (!nr.test(s) || !nr.test(d)) return i("invalid_request", "invalid_slug", "not a valid artifact id");
  if (s === d) return i("invalid_request", "same_artifact", "from_url names the destination itself \u2014 its assets are already there");
  if (n.length === 0 || n.length > Dne || !n.every(c => Cm.test(c)) || new Set(n).size !== n.length) return i("invalid_request", "invalid_ids", `asset_ids must be 1\u2013${Dne} distinct asset ids`);
  let u = await Y({
    verb: "copy",
    route: Pe(s),
    body: _({
      from: d,
      ids: n,
      ...l && {
        cross_org_ok: !0
      }
    }),
    contentType: "application/json",
    timeoutMs: ze,
    marks: o,
    fail: i,
    credentials: e.credentials
  }, r);
  if (!u.replied) return u.failure;
  if (u.status !== 200) return l && u.status === 400 && U(400, u.data).detail === "invalid request body" ? i("not_copyable", "predates_cross_org", "this server doesn't support copying from another organization's artifact yet, so don't retry the copy, and tell the user cross-organization copies aren't supported yet") : V(u, i);
  let w = Ie().safeParse(u.data);
  if (!w.success || w.data.assets.length !== n.length || w.data.assets.some((c, x) => c.from_id !== n[x])) return i("upstream_error", "malformed_reply", 'the copy probably succeeded but the reply was unreadable \u2014 run action "list_assets" on the destination before retrying, or the assets may be copied twice');
  return ee().assetsOnRoster = !0, g("artifact_asset_copy", {
    ...o,
    count: n.length
  }), {
    kind: "ok",
    assets: w.data.assets.map(c => ({
      fromId: c.from_id,
      id: c.opaque_id,
      url: re(c.opaque_id, c.url),
      sizeBytes: c.size_bytes,
      contentType: c.content_type,
      ...c.sha256 !== void 0 && {
        sha256: c.sha256
      }
    }))
  };
}

var Z = 9e4;

function lor(e) {
  for (let [r, s] of H) if (s === e) return r;
  return;
}

var fe = "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";

async function e7o(e, r, s, d, {admitPublicRead: n, probeToolUseId: l} = {}) {
  let o = (y, S) => (m("artifact_asset_read", y), {
    kind: "error",
    message: `asset read failed: ${S}`,
    reason: y
  });
  if (!nr.test(e.slug)) return o("invalid_slug", "not a valid artifact id");
  if (!Cm.test(r)) return o("invalid_id", "not a valid asset id");
  let i = KAn(), u = GVe(), w = !i && (iQ() || g4t() && !eF(hC));
  if (!w && !i && a.CLAUDE_CODE_REMOTE) return o("relay_unavailable", fe);
  let c = await eR(e, "artifact_asset_read", s, {
    gatePublicRead: !1,
    credentials: d,
    probeToolUseId: l
  });
  if (c.err !== null) return {
    kind: "error",
    message: c.err.replace(/^artifact read/, "asset read"),
    reason: c.status === 404 ? "boot_404" : "boot"
  };
  let {ver: x, assetToken: R} = c, h = R === void 0;
  if (h && !lk()) return o("tokenless", "this artifact is served to you as a public (non-member) reader, and assets are not readable that way");
  if (h && n?.() !== !0) return f("artifact_asset_read", yse), {
    kind: "error",
    reason: yse,
    message: `asset read failed: ${jen}`
  };
  let b = w && !h, O = `/_f/${x}/_blob/${r}`, L = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`, {host: k, base: F, headers: v} = $qt(e), T = () => (ee().contentHostEgressDenied.add(e.env), 
  o("egress_blocked", `this environment's network allowlist blocks ${k}, so the asset cannot be fetched (access to the artifact itself is fine). ${h ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${Fqt(e.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.${L} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`}`)), M = (y, S) => (t(`[artifact] asset fetch: egress proxy denied (${S})`), 
  o("egress_denied", `artifact content fetch refused by the environment's egress proxy (${nq(y)})`)), ye = (y, S) => {
    if (S !== void 0) t(`[artifact] asset fetch: proxy refused, marker ${S}`);
    return o("proxy_refused", `the proxy refused the connection to the artifact's content host (${nq(y)})`);
  }, N = !1, I;
  if (!b && R !== void 0 && Lqt(c.data)) {
    try {
      I = await Nqt(e.slug, O, {
        token: R,
        timeout: Z,
        maxContentLength: cH + 1,
        signal: s,
        credentials: d
      });
    } catch (y) {
      if (wa(y) || y instanceof Ye) throw y;
      return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${cH >> 20} MiB limit`);
    }
    N = I.kind === "answer";
  }
  let A;
  try {
    if (I?.kind === "answer") A = I; else if (b) {
      if (R === void 0) return o("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let y = await Dqt(e.slug, O, {
        token: R,
        timeout: Z,
        maxContentLength: cH + 1,
        signal: s,
        retryBudget: DVe()
      });
      if (!y.ok) return o(y.reason.replace(/-/g, "_"), y.reason === "no-auth" ? L6e(y.detail) : `artifact content is unreachable from this session (${y.reason})`);
      A = {
        status: y.status,
        headers: y.response.headers,
        data: y.data
      };
    } else {
      let y = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`, S = await Qa.get(`${F}${O}${y}`, {
        signal: s,
        timeout: Z,
        responseType: "arraybuffer",
        maxRedirects: 0,
        maxContentLength: cH + 1,
        validateStatus: () => !0,
        ...v && {
          headers: v
        }
      });
      if (GF(S.status, S.headers)) return T();
      let P = dZ(S.headers);
      if (P !== void 0 && (S.status < 200 || S.status >= 300)) return M(S.status, P);
      ee().contentHostEgressDenied.delete(e.env), A = {
        status: S.status,
        headers: S.headers,
        data: S.data
      };
    }
  } catch (y) {
    if (wa(y) || y instanceof Ye) throw y;
    if (b) iAe();
    let S = b ? void 0 : oM(y);
    if (S !== void 0) {
      if (GF(S.connectStatus, S.headers)) return T();
      let P = dZ(S.headers);
      if (P !== void 0) return M(S.connectStatus, P);
      return ye(S.connectStatus, Jct(S.headers));
    }
    return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${cH >> 20} MiB limit`);
  }
  if (b && Dnt(A.status)) return o("relay_unavailable", fe);
  if (b && Hnt(A.status, A.data)) return o("network_off", `${Mnt}; retrying from here will not help`);
  if (b && y4(A.status)) return o(`http_${A.status}`, Hqt(A.status));
  if (b) iAe(A.status);
  if (A.status === 404) return o("http_404", b ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"` : 'no asset with that id in this artifact (it may have been deleted) \u2014 a writer of the artifact can check the id with action "list_assets"');
  if (h && A.status === 403 && $xe(A.headers, lZ(A.headers, A.data, y => y))) return o("public_refused", "this public artifact serves no asset with that id to readers outside its organization, or it is no longer public");
  let X = b ? void 0 : Yct({
    status: A.status,
    headers: A.headers,
    data: A.data,
    redact: y => vnt(y, R),
    label: "[artifact] asset fetch"
  });
  if (X !== void 0) return o(X, Xct[X]);
  if (A.status === 401 || A.status === 403) return o(`http_${A.status}`, b ? "the cloud session's artifact mount refused the read \u2014 asset reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down since the id was listed");
  if (A.status !== 200) return o(`http_${A.status}`, `unexpected answer from the ${N ? "artifact service" : "content host"} (HTTP ${A.status})`);
  if (b) zne(hC);
  let oe = A.headers, ie = b || N ? LVe(oe) : oe?.["content-type"], de = typeof ie === "string" ? nt(ie, ";").trim().toLowerCase() : "";
  if (lor(de) === void 0) return o("unexpected_type", `the ${N ? "artifact service" : "content host"} served a type this tool does not save`);
  let z = Buffer.from(A.data ?? new ArrayBuffer(0));
  if (z.length === 0 || z.length > cH) return o("size", z.length === 0 ? "the asset is empty" : `the asset exceeds the ${cH >> 20} MiB limit`);
  return {
    kind: "ok",
    bytes: z,
    contentType: de,
    relay: b,
    agentDirect: u,
    publicRead: h
  };
}

export { QKt, qQo, aEt, YQo, lEt, JTe, dEt, ZKt, eqt, tqt, ITn, ont, XQo, nqt, AB, snt, OTn, QTe, z3r, G3r, V3r, cEt, zle, UD, MTn, QJ, K3r, Gx, Dne, KI, Gle, aor, JQo, QQo, ZQo, lor, e7o };
