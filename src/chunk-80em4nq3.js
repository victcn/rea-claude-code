// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { j, ci } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { X } from "./chunk-1zg3hbfq.js";

import { kp } from "./chunk-5brm0azz.js";

import { Gt } from "./chunk-xywp7esx.js";

import { u_s, f_s, BRe, F_r, U_r, _8, hNn } from "./chunk-2xhrgh8h.js";

import { z_r, I_s } from "./chunk-wbxkeemq.js";

import { iQo } from "./chunk-aqz518ha.js";

import { writeFile as u } from "fs/promises";

var m = 3e4, Y6r = 3e5, k = BRe, f = 16777216, c = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";

async function xKt(o = {}) {
  let t = await p(o);
  if (!t.success && _8(t)) return p(o);
  return t;
}

async function p(o) {
  let t = kp(), l = t ? `${c}&entrypoint=${encodeURIComponent(t)}` : c;
  try {
    let r = await Gt.get(l, {
      auth: "teleport-org",
      isBackground: o.isBackground,
      timeout: m,
      maxContentLength: f,
      credentials: o.credentials
    });
    if (!r.ok || !Array.isArray(r.data?.skills)) return F_r("skills", r);
    let s = r.data.skills.filter(f_s), n = s.map(u_s);
    try {
      iQo(s);
    } catch (a) {
      X("warn", "skills_sync_ownerships_not_recorded"), d(j(a));
    }
    try {
      I_s(s);
    } catch (a) {
      X("warn", "skills_sync_host_mount_kinds_not_recorded"), d(j(a));
    }
    return {
      success: !0,
      skills: n
    };
  } catch (r) {
    return U_r(r);
  }
}

async function sQo(o, t, l, r = {}) {
  let s = kp(), n = [];
  if (s) n.push(`entrypoint=${encodeURIComponent(s)}`);
  if (l) n.push(`version=${encodeURIComponent(l)}`);
  let a = n.length > 0 ? `?${n.join("&")}` : "";
  try {
    let e = await Gt.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(o)}/download${a}`, {
      auth: "teleport-org",
      isBackground: r.isBackground,
      timeout: Y6r,
      responseType: "arraybuffer",
      maxContentLength: k,
      credentials: r.credentials
    });
    if (!e.ok || !e.data) return X("warn", "skills_sync_download_not_ok", {
      reason: e.ok ? "empty_body" : e.reason
    }), !1;
    let i = Buffer.from(e.data);
    if (!z_r(i)) return X("warn", "skills_sync_download_not_zip", {
      serverError: hNn(i),
      bodyLen: i.length
    }), !1;
    return await u(t, i), !0;
  } catch (e) {
    let {kind: i} = ci(e);
    return X("warn", "skills_sync_download_exception", {
      kind: i
    }), !1;
  }
}

export { Y6r, xKt, sQo };
