// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ye } from "./chunk-b0z4bv3v.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Y, t } from "./chunk-kawq2919.js";

import { sc, nt } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { nq, oM } from "./chunk-e2610wvk.js";

import { p } from "./chunk-jkzenvsk.js";

import { lZ, GF, Yct, Xct, Jct, dZ } from "./chunk-kd22gz0e.js";

import { wa } from "./chunk-vps0k559.js";

import { Qa } from "./chunk-nc0jxmkt.js";

import { nr } from "./chunk-f1zpf9me.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { hC } from "./chunk-xywp7esx.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { MAn, Int, o3 } from "./chunk-69rr80fg.js";

import { s3, Mnt, Hnt, Hsr, YI, iQ, GVe, KAn, eF, zne, Dnt, iAe, g4t } from "./chunk-btyj9pkf.js";

import { L6e, lk, yse, jen, lT } from "./chunk-ann91fyn.js";

import { cH } from "./chunk-z655gvmz.js";

import { zE, Xor, $2, eR, y4, Xle, fye, DVe, Hqt, Dqt, Lqt, Nqt, LVe, O9r, M9r, H9r, D9r, osr, $qt, Fqt, vnt } from "./chunk-exeqjnzg.js";

import { $xe, Fxe, ZFe, wt, qSe } from "./chunk-hk8p0fqv.js";

import { UD, Gx } from "./chunk-1syth1yr.js";

import { me, yn, Vo, St, Rm } from "./chunk-dexzwy8h.js";

import { createHash as K } from "crypto";

var X = "_files.json", iEt = 4096, j3r = cH, Q = 16777216, D = 9e4, Z = "x-frame-doc-sha256", J = "x-frame-doc-seq", te = p(() => St({
  ver: me(),
  files: Rm(St({
    sha256: me().regex(UD),
    size: yn().int().nonnegative().max(j3r),
    contentType: me().regex(Gx)
  })),
  narrowed: Vo().optional()
}));

function x(e) {
  return e === "file list" ? "artifact_file_list" : "artifact_file_read";
}

function v(e, n, c, h = !0) {
  if (h) m(x(e), n);
  return {
    kind: "error",
    message: `${e} failed: ${c}`,
    reason: n
  };
}

function M(e) {
  let n = e - 1;
  return n >= 1048576 ? `${n >> 20} MiB` : `${n >> 10} KiB`;
}

var z = "published-file reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help", re = "published-file reads aren't available from this kind of session; retrying from here will not help";

async function N(e, n, c, h, {admitPublicRead: r, probeToolUseId: d}) {
  if (!nr.test(e.slug)) return v(n, "invalid_slug", "not a valid artifact id");
  let l = KAn(), F = !l && (iQ() || g4t() && !eF(hC));
  if (!F && !l && a.CLAUDE_CODE_REMOTE) return v(n, "relay_unavailable", z);
  let s = l || Jr() && GVe();
  if (F && !YI(Hsr) && !s) return v(n, "relay_not_served", re);
  let i = await eR(e, x(n), c, {
    gatePublicRead: !1,
    relayOnly: !s,
    credentials: h,
    probeToolUseId: d
  });
  if (i.err !== null) {
    let w = i.errorCode === "boot_relay_error";
    if (w && (i.status === 403 || i.status === 404)) return {
      kind: "error",
      reason: "relay_refused",
      message: `${n} failed: published-file reads from a cloud session go through the session gateway's artifact relay, which is not enabled for this session yet; retrying from here will not help`
    };
    if (w && i.status === 401) return {
      kind: "error",
      reason: "relay_unauthorized",
      message: `${n} failed: the session gateway did not accept this session's credential for the artifact relay; retrying from here will not help`
    };
    return {
      kind: "error",
      message: i.err.replace(/^artifact read/, n),
      reason: i.errorCode
    };
  }
  let y = i.assetToken === void 0;
  if (y && !lk()) return v(n, "tokenless", "this artifact is served to you as a public (non-member) reader, and its files are not readable that way");
  if (y && r?.() !== !0) return f(x(n), yse), v(n, yse, jen, !1);
  let R = i.data.cowritten === !0 || i.data.artifactKind === lT || wt(e.slug)?.cowritten === !0 || wt(e.slug)?.artifactKind === lT, b = qSe(e.slug, i.data.type), k = ZFe(i.data.perm?.role === "owner", Fxe(i.data.outsideWriter), wt(e.slug)?.outsideWriter);
  return {
    kind: "ok",
    target: e,
    ver: i.ver,
    assetToken: i.assetToken,
    publicRead: y,
    relay: F && !y,
    frameContent: !F && !y && Lqt(i.data),
    credentials: h,
    agentDirect: s,
    cowritten: R,
    typeLocked: b,
    writerClass: Xle(i.data.perm?.role),
    foreign: i.data.authoredByOthers === !0 || wt(e.slug)?.authoredByOthers === !0 || i.data.perm?.role !== "owner" || R || b || k,
    outsideOrg: k,
    orgRelation: M9r(i),
    livePaths: MAn(i.data).map(w => w.path),
    source: O9r(i),
    ...typeof i.data.title === "string" && {
      title: i.data.title
    },
    ...i.data.favicon !== void 0 && {
      favicon: i.data.favicon
    },
    ...i.data.publishPreconditions === !0 && {
      publishPreconditions: !0
    },
    filesCounted: typeof i.data.fileCount === "number" && Number.isSafeInteger(i.data.fileCount) && i.data.fileCount > 0,
    reused: i.reused === !0
  };
}

async function I(e, n, c, h, r, d, l = !0, F = !1) {
  let s = (u, _) => v(c, u, _, l), i = u => ({
    kind: "status",
    status: u
  }), {target: y, assetToken: R, relay: b} = e, {host: k, base: w, headers: P} = $qt(y), B = () => (ee().contentHostEgressDenied.add(y.env), 
  s("egress_blocked", `this environment's network allowlist blocks ${k}, so the file cannot be fetched (access to the artifact itself is fine). ${e.publicRead ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${Fqt(y.env)}` : a.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.frame.${y.env === "staging" ? "staging." : ""}claudeusercontent.com to the environment's allowed domains.`}`)), L = (u, _) => (t(`[artifact] ${c}: egress proxy denied (${_})`), 
  s("egress_denied", `artifact content fetch refused by the environment's egress proxy (${u})`)), A = !1, S;
  if (e.frameContent && R !== void 0) {
    try {
      S = await Nqt(y.slug, n, {
        token: R,
        timeout: D,
        maxContentLength: h,
        signal: r,
        credentials: e.credentials
      });
    } catch (u) {
      if (wa(u) || u instanceof Ye) throw u;
      return F ? i(0) : s("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`);
    }
    A = S.kind === "answer";
  }
  let o;
  try {
    if (S?.kind === "answer") o = S; else if (b) {
      if (R === void 0) return s("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let u = await Dqt(y.slug, n, {
        token: R,
        timeout: D,
        maxContentLength: h,
        signal: r,
        retryBudget: d
      });
      if (!u.ok) return s(u.reason.replace(/-/g, "_"), u.reason === "no-auth" ? L6e(u.detail) : `artifact content is unreachable from this session (${u.reason})`);
      o = {
        status: u.status,
        headers: u.response.headers,
        data: u.data
      };
    } else {
      let u = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`, _ = await Qa.get(`${w}${n}${u}`, {
        signal: r,
        timeout: D,
        responseType: "arraybuffer",
        maxRedirects: 0,
        maxContentLength: h,
        validateStatus: () => !0,
        ...P && {
          headers: P
        }
      });
      if (GF(_.status, _.headers)) return B();
      let C = dZ(_.headers);
      if (C !== void 0 && (_.status < 200 || _.status >= 300)) return L(`HTTP ${_.status}`, C);
      o = {
        status: _.status,
        headers: _.headers,
        data: _.data
      };
    }
  } catch (u) {
    if (wa(u) || u instanceof Ye) throw u;
    if (b && !F) iAe();
    let _ = b ? void 0 : oM(u);
    if (_ !== void 0) {
      if (GF(_.connectStatus, _.headers)) return B();
      let C = dZ(_.headers);
      if (C !== void 0) return L(nq(_.connectStatus), C);
      let W = Jct(_.headers);
      if (W !== void 0) t(`[artifact] ${c}: proxy refused, marker ${W}`);
      return F ? i(0) : s("proxy_refused", `the proxy refused the connection to the artifact's content host (${nq(_.connectStatus)})`);
    }
    return F ? i(0) : s("request_error", `the content fetch failed in transit, timed out, or exceeded the ${M(h)} limit`);
  }
  if (F && o.status !== 200) return i(o.status);
  if (!b && !A) ee().contentHostEgressDenied.delete(y.env);
  if (b && Dnt(o.status)) return s("relay_unavailable", z);
  if (b && Hnt(o.status, o.data)) return s("network_off", `${Mnt}; retrying from here will not help`);
  if (b && y4(o.status)) return s(`http_${o.status}`, Hqt(o.status));
  if (b) iAe(o.status);
  if (o.status === 404) return {
    kind: "status",
    status: 404,
    frameNotFound: o.data !== void 0 && o.data.byteLength <= 256 && s3(Buffer.from(o.data).toString("utf8"))
  };
  if (R === void 0 && o.status === 403 && $xe(o.headers, lZ(o.headers, o.data, u => u))) return {
    kind: "status",
    status: 403
  };
  let E = b ? void 0 : Yct({
    status: o.status,
    headers: o.headers,
    data: o.data,
    redact: u => vnt(u, R),
    label: `[artifact] ${c}`
  });
  if (E !== void 0) return s(E, Xct[E]);
  if (o.status === 401 || o.status === 403) return s(`http_${o.status}`, b ? "the cloud session's artifact mount refused the read \u2014 file reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down");
  if (o.status !== 200) return s(`http_${o.status}`, `unexpected answer from the ${A ? "artifact service" : "content host"} (HTTP ${o.status})`);
  if (b) zne(hC);
  let T = o.headers, O = b || A ? LVe(T) : T?.["content-type"], U = String(T?.[Z] ?? "").toLowerCase(), q = String(T?.[J] ?? "");
  return {
    kind: "ok",
    status: 200,
    bytes: Buffer.from(o.data ?? new ArrayBuffer(0)),
    contentType: typeof O === "string" ? nt(O, ";").trim().toLowerCase() : "",
    ...UD.test(U) && {
      docSha256: U
    },
    .../^\d{1,15}$/.test(q) && {
      docSeq: Number(q)
    }
  };
}

async function H(e, n, c, h, r = !0) {
  let d = await I(e, `/_f/${e.ver}/${X}`, n, Q + 1, c, h, r);
  if (d.kind !== "ok") return d;
  let l;
  try {
    l = te().safeParse(Y(d.bytes.toString("utf8")));
  } catch {
    return v(n, "bad_json", "the artifact service answered with something other than a file list", r);
  }
  if (!l.success || l.data.ver !== e.ver) return v(n, "bad_shape", "the artifact service answered with a file list this version of the tool cannot read", r);
  let F = Object.entries(l.data.files);
  if (F.length > iEt) return v(n, "too_many", `the file list names more than ${iEt} files`, r);
  return {
    kind: "ok",
    files: F.filter(([i]) => i.length <= zE && !/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(i) && sc(i) && !Xor(i)).map(([i, y]) => ({
      path: i,
      contentType: y.contentType,
      sizeBytes: y.size,
      sha256: y.sha256
    })).sort((i, y) => i.path < y.path ? -1 : i.path > y.path ? 1 : 0),
    narrowed: l.data.narrowed === !0
  };
}

async function Hne(e, n, c, h = {}) {
  let r = await N(e, "file list", n, c, h);
  if (r.kind === "error") return r;
  let d = await H(r, "file list", n, DVe());
  if (d.kind === "error") return d;
  if (d.kind === "status") {
    if (d.status === 404 && !r.filesCounted && (!r.relay || d.frameNotFound === !0)) return f("artifact_file_list", "single_page"), 
    {
      kind: "error",
      reason: "single_page",
      message: "this artifact is a single page with no separately published files, so there is no file list; read the page itself",
      ver: r.ver,
      cowritten: r.cowritten,
      typeLocked: r.typeLocked
    };
    if (r.publicRead && d.status === 403) {
      if (await ie(r, n)) return f("artifact_file_list", "single_page"), {
        kind: "error",
        reason: "single_page",
        message: "this public artifact is a single page with no separately published files, so there is no file list; read the page itself",
        ver: r.ver,
        cowritten: r.cowritten,
        typeLocked: r.typeLocked
      };
      return v("file list", "public_refused", "this public artifact's files are not available to readers outside its organization right now \u2014 it may no longer be public, or it was taken down");
    }
    return m("artifact_file_list", `http_${d.status}`), v("file list", `http_${d.status}`, r.relay ? "not found through this cloud session's artifact mount \u2014 this artifact is a single page with no separate files, or file reads are not enabled for this session yet" : "the artifact has published files, but the artifact service does not offer their list yet; retrying from here will not help", !1);
  }
  return g("artifact_file_list", {
    relay: r.relay,
    files: d.files.length,
    ...r.agentDirect && {
      agent_direct: !0
    },
    ...r.publicRead && {
      public: !0
    },
    ...r.reused && {
      boot_reused: !0
    }
  }), {
    kind: "ok",
    ver: r.ver,
    files: d.files.map(l => r.livePaths.includes(l.path) ? {
      ...l,
      live: !0
    } : l),
    relay: r.relay,
    agentDirect: r.agentDirect,
    cowritten: r.cowritten,
    typeLocked: r.typeLocked,
    writerClass: r.writerClass,
    foreign: r.foreign,
    outsideOrg: r.outsideOrg,
    publicRead: r.publicRead,
    narrowed: r.publicRead && d.narrowed,
    ...r.title !== void 0 && {
      title: r.title
    },
    ...r.favicon !== void 0 && {
      favicon: r.favicon
    },
    ...r.publishPreconditions === !0 && {
      publishPreconditions: !0
    }
  };
}

function G(e) {
  return {
    ver: e.ver,
    relay: e.relay,
    agentDirect: e.agentDirect,
    cowritten: e.cowritten,
    typeLocked: e.typeLocked,
    writerClass: e.writerClass,
    foreign: e.foreign,
    outsideOrg: e.outsideOrg,
    ...e.orgRelation === "external" && {
      external: !0
    },
    offOrgRamp: H9r(e.orgRelation),
    publicRead: e.publicRead,
    ...e.title !== void 0 && {
      title: e.title
    }
  };
}

function V(e, n, c = !0) {
  return v("file read", `http_${n}`, e.relay ? `not found through this cloud session's artifact mount \u2014 no file is published at that path in the served version, or file reads are not enabled for this session yet; action "list_files" shows the paths` : e.publicRead ? 'this public artifact serves no file at that path to readers outside its organization \u2014 action "list_files" shows the paths it does serve (or the artifact is no longer public)' : 'no file is published at that path in the served version \u2014 action "list_files" shows the paths', c);
}

async function ie(e, n) {
  let {base: c, headers: h} = $qt(e.target);
  try {
    return (await Qa.head(`${c}/_f/${e.ver}/`, {
      signal: n,
      timeout: osr,
      maxRedirects: 0,
      validateStatus: () => !0,
      ...h && {
        headers: h
      }
    })).status === 200;
  } catch (r) {
    if (wa(r) || r instanceof Ye) throw r;
    return !1;
  }
}

async function j(e, n, c, h, r, d = !0) {
  let l = n.split("/").map(encodeURIComponent).join("/"), F = e.source ? await I(e, D9r(e.ver, l), "file read", fye, c, h, d, !0) : void 0;
  if (F?.kind === "error") return F;
  let s = F?.kind === "ok" ? F : await I(e, `/_f/${e.ver}/${l}`, "file read", fye, c, h, d), i = s === F;
  if (s.kind !== "ok") return s;
  if (!Gx.test(s.contentType)) return v("file read", "unexpected_type", "the content host served the file with a type this tool does not save", d);
  if (s.bytes.length >= fye) return v("file read", "size", `the file exceeds the ${M(fye)} limit`, d);
  let y = S => K("sha256").update(S).digest("hex"), R = s.bytes, b = y(R), k = !0, w = "unused", P = !1, B, L, A = e.livePaths.includes(n);
  if (s.contentType === "text/html") {
    let S = await r(), o = S.kind === "ok" ? S.files.find(E => E.path === n)?.sha256 : void 0;
    if (L = o, o === void 0) w = A ? "live" : "missing", k = !1; else if (b === o) w = "verified"; else {
      let E = i ? void 0 : Int(s.bytes, T => y(T) === o);
      if (E !== void 0) R = E, b = o, w = "verified"; else w = A ? "live" : "unverified", 
      k = !1;
    }
  }
  return {
    kind: "ok",
    path: n,
    bytes: R,
    contentType: s.contentType,
    sha256: b,
    asPublished: k,
    listing: w,
    ...L !== void 0 && {
      listedSha256: L
    },
    docVerified: P,
    ...B !== void 0 && {
      docSeq: B
    },
    ...i && {
      source: !0
    }
  };
}

async function JKt(e, n, c, h, r = {}) {
  let d = $2(n);
  if ("errMsg" in d) return v("file read", "invalid_path", d.errMsg);
  let l = await N(e, "file read", c, h, r);
  if (l.kind === "error") return l;
  let F = DVe(), s = await j(l, d.key, c, F, () => H(l, "file read", c, F, !1));
  if (s.kind === "error") return s;
  if (s.kind === "status") return V(l, s.status);
  return {
    ...s,
    ...G(l)
  };
}

var W3r = 4, ne = o3;

async function KQo(e, n, c, h, {byteBudget: r = ne, ...d} = {}) {
  let l = await N(e, "file read", c, h, d);
  if (l.kind === "error") return l;
  let F = DVe(), s, i = () => s ??= H(l, "file read", c, F, !1).then(b => {
    if (b.kind !== "ok") s = void 0;
    return b;
  }), y = 0;
  return {
    kind: "ok",
    files: await se(n, W3r, async b => {
      let k = $2(b);
      if ("errMsg" in k) return {
        ...v("file read", "invalid_path", k.errMsg, !1),
        path: b
      };
      if (y >= r) return {
        kind: "error",
        reason: "batch_budget",
        message: `not fetched: the files read before it in this call already hold ${Math.floor(r / 1048576)}MB, the most one read carries \u2014 read it, and any after it, in another call`,
        path: k.key
      };
      if (l.livePaths.includes(k.key)) return {
        kind: "error",
        reason: "live_path",
        message: "this is a live file: read it by itself with `path`, which returns its current state",
        path: k.key
      };
      let w = await j(l, k.key, c, DVe(), i, !1);
      if (w.kind === "status") return {
        ...V(l, w.status, !1),
        path: k.key
      };
      if (w.kind === "ok") y += w.bytes.length;
      return w.kind === "error" ? {
        ...w,
        path: k.key
      } : w;
    }),
    ...G(l)
  };
}

async function se(e, n, c) {
  let h = Array(e.length), r = 0, d = async () => {
    while (r < e.length) {
      let l = r++;
      h[l] = await c(e[l]);
    }
  };
  return await Promise.all(Array.from({
    length: Math.min(n, e.length)
  }, () => d())), h;
}

export { iEt, j3r, Hne, JKt, W3r, KQo };
