// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { l } from "./chunk-b0z4bv3v.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { lg, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { l$ } from "./chunk-g6nh65r0.js";

import { OR, zN } from "./chunk-3zb1ef23.js";

import { Sh, sd } from "./chunk-w0q7jqcp.js";

import { Ase } from "./chunk-hwdhdabr.js";

import { cct, bEr } from "./chunk-m82zqjc8.js";

import { IB } from "./chunk-cmhrmmqh.js";

var Nnt = /^file_[A-Za-z0-9_]{8,80}$/, I = 8e3, S = 16e3, y = 64, A = 512, E = 40, D = /^https:\/\/([a-z0-9-]+\.)*slack\.com\/archives\/[\x21-\x7e]+$/;

function h(e, r) {
  let n = lg(e);
  return r ? n.replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu, " ") : n.replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu, " ").trim();
}

function dAe(e) {
  return e.replace(/(?!\()\p{Ps}|</gu, "(").replace(/(?!\))\p{Pe}|>/gu, ")").replace(/[\p{Pi}\p{Pf}]/gu, "'").replace(/(?![\p{Sc}\p{Extended_Pictographic}\p{ASCII}])\p{S}/gu, "");
}

function a0e(e) {
  return e === "rc_owner" ? "your user \xb7 Remote Control" : "third-party";
}

async function cJr(e) {
  let {sessionId: r, fileId: n, baseUrl: p, getAccessToken: a, getTrustedDeviceToken: s} = e;
  if (!Nnt.test(n)) return m("bridge_inbox_fetch", "malformed_id"), {
    ok: !1,
    reason: "malformed",
    detail: "file_id must be a Files API id (file_\u2026)"
  };
  try {
    Sh(r, "session id");
  } catch {
    return m("bridge_inbox_fetch", "malformed_session_id"), {
      ok: !1,
      reason: "malformed",
      detail: "session id contains unsafe characters"
    };
  }
  let i = a();
  if (!i) return t("[bridge] No access token for inbox fetch"), m("bridge_inbox_fetch", "no_token"), 
  {
    ok: !1,
    reason: "no_token"
  };
  let c = `${p}/v1/code/sessions/${sd(r)}/inbox/${n}`, o;
  try {
    o = await At.get(c, {
      headers: bEr(i, {
        trustedDeviceToken: await (s?.())
      }),
      timeout: 1e4,
      maxContentLength: 262144,
      validateStatus: d => d < 500
    });
  } catch (d) {
    return t(`[bridge] inbox fetch request failed: ${l(d)}`), m("bridge_inbox_fetch", "request_failed"), 
    {
      ok: !1,
      reason: "request_failed"
    };
  }
  if (o.status !== 200) {
    let d = cct(o.data), f = OR(o.data);
    t(`[bridge] inbox fetch failed ${o.status}${d ? ` [${d}]` : ""}${f ? `: ${f}` : ""}`);
    let _ = o.status === 403 ? Ase(o.data) : void 0, b = o.status === 404 ? "not_found" : _ === "untrusted_device" ? "untrusted_device" : _ === "session_stale_relogin" ? "relogin" : d === "feature_disabled" ? "feature_disabled" : o.status === 403 ? "forbidden" : "http_error";
    return m("bridge_inbox_fetch", b), {
      ok: !1,
      reason: b,
      detail: zN(o.data)
    };
  }
  let u = N(o.data, r, n);
  if (u === "wrong_session") return t("[bridge] inbox fetch: the message names another session \u2014 refusing to relay it"), 
  m("bridge_inbox_fetch", "wrong_session"), {
    ok: !1,
    reason: "wrong_session",
    detail: "that inbox message is not addressed to this session"
  };
  if (!u) return t("[bridge] inbox fetch: 200 with an unusable body (missing message/body, a non-UUID message_id, or a file_id other than the one requested)"), 
  m("bridge_inbox_fetch", "malformed_response"), {
    ok: !1,
    reason: "malformed",
    detail: "unexpected response shape"
  };
  return g("bridge_inbox_fetch"), {
    ok: !0,
    message: u.message,
    envelopedText: oCn(u.message),
    download: {
      baseUrl: p,
      accessToken: i
    }
  };
}

function oCn(e, r) {
  let n = {
    message_id: e.messageId,
    source: e.source,
    sender_kind: e.senderKind,
    body: e.body
  };
  if (e.senderDisplay) n.sender_display = e.senderDisplay;
  if (e.slackPermalink) n.slack_permalink = e.slackPermalink;
  if (e.createdAt) n.received_at = e.createdAt;
  if (r) n.attachments = r;
  let p = S, a = `<event source="session-inbox" kind="message.content" from="${e.senderKind}" trust="relay" untrusted-keys="body,sender_display,slack_permalink,attachments">\n`, s = `\n</event>`, i = l$("event", JSON.stringify(n));
  if (a.length + i.length + s.length > p) {
    let c = I;
    do {
      c = Math.floor(c / 2), n.body = w(e.bodyHead, c, e.bodyDroppedAtIngest), i = l$("event", JSON.stringify(n));
    } while (c > 64 && a.length + i.length + s.length > p);
  }
  return `${a}${i}${s}`;
}

function w(e, r, n = 0) {
  return e.length > r ? `${ne(e, r)} [\u2026truncated ${e.length - r + n} chars]` : n > 0 ? `${e} [\u2026truncated ${n} chars]` : e;
}

function N(e, r, n) {
  if (!e || typeof e !== "object") return null;
  let a = e.message;
  if (!a || typeof a !== "object") return null;
  let s = a;
  if (s.file_id !== n || typeof s.message_id !== "string" || Vt(s.message_id) === null || typeof s.body !== "string") return null;
  if (typeof s.session_id !== "string" || s.session_id === "") return null;
  let i;
  try {
    Sh(s.session_id, "session id"), i = sd(s.session_id);
  } catch {
    return null;
  }
  if (i !== sd(r)) return "wrong_session";
  let c = s.message_id.toLowerCase(), o = C(s.sender_kind), u = o === "rc_owner" ? IB({
    file_attachments: s.attachments
  }) : [], d = s.slack && typeof s.slack === "object" ? s.slack : void 0, f = d && typeof d.permalink === "string" ? h(d.permalink, !1) : void 0, _ = typeof s.created_at === "string" ? s.created_at : void 0, b = typeof s.sender_display === "string" ? dAe(h(s.sender_display, !1)) : "", x = b.length > y ? `${ne(b, y)}\u2026` : b;
  return {
    message: {
      messageId: c,
      senderKind: o,
      senderDisplay: x || void 0,
      ...u.length > 0 && {
        attachments: u
      },
      source: k(s.source, "SESSION_INBOX_SOURCE_"),
      ...P(h(s.body, !0)),
      slackPermalink: f && f.length <= A && D.test(f) ? f : void 0,
      createdAt: _ && _.length <= E && /^\d{4}-\d{2}-\d{2}T[0-9:.]+(Z|[+-]\d{2}:\d{2})$/.test(_) ? _ : void 0
    }
  };
}

var R = [ "slack_user", "account", "rc_owner" ];

function C(e) {
  let r = k(e, "SESSION_INBOX_SENDER_KIND_");
  return R.find(n => n === r) ?? "unknown";
}

function k(e, r) {
  if (typeof e !== "string") return "";
  let n = e.startsWith(r) ? e.slice(r.length) : e;
  return /^[A-Za-z_]{1,32}$/.test(n) && !n.endsWith("UNSPECIFIED") ? n.toLowerCase() : "";
}

function P(e) {
  if (e.length <= I) return {
    body: e,
    bodyHead: e,
    bodyDroppedAtIngest: 0
  };
  let r = ne(e, I), n = e.length - r.length;
  return {
    body: `${r} [\u2026truncated ${n} chars]`,
    bodyHead: r,
    bodyDroppedAtIngest: n
  };
}

export { Nnt, dAe, a0e, cJr, oCn };
