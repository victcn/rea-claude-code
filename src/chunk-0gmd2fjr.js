// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, q, he } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { un } from "./chunk-y752zmas.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { oa, k5, k } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { _, t } from "./chunk-kawq2919.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { ky } from "./chunk-8yperama.js";

import { Sfe } from "./chunk-46phtgr7.js";

import { fxt, zit, GNe, MYe, Tco, rLn } from "./chunk-sqb9meyh.js";

import { ple, rbn, hSt, obn, ySt } from "./chunk-dajwspy6.js";

import { PO, IO } from "./chunk-2mq6q9dt.js";

import { u5o, p5o, ahe } from "./chunk-87xa2dh8.js";

import { jzt, Wzt, rVr, WYo, sbn, Q7n, oVr, ibn, abn } from "./chunk-82mks2hn.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { at } from "./chunk-0bq6eb61.js";

import { posix as se } from "path";

var B = "/v1/claudeai-agents/mcp", j = "f688f3fc-1d05-5bd1-9c48-9854ec083044", W = new lt(() => ({}));

var X = /^file_[A-Za-z0-9_-]{1,128}$/, ae = 20, I = 268435456, Y = 3600, ie = 27e5, O = 6e5, c = "No task was started.", w = "Start the task without files.", b = {
  tool: "start_task",
  arg: "files",
  feature: "managed_agents_task_file_upload",
  local: "path",
  ref: "file_id",
  refWord: "id",
  maxFiles: ae,
  nothingDone: c
};

function z(e) {
  return rbn(e, {
    path: B,
    serverId: j
  });
}

function C(e, r) {
  let n = he(), u = n ? W.peek(r)?.host : void 0, o = u?.servers.get(e.name);
  if (!(n ? u !== void 0 && o !== void 0 && e.config.type === "http" && e.config.url === o && u.heldSinceBoot(e.name) : z(e)) || !k("tengu_twinkling_cosmos", !1)) return;
  return {
    host: u
  };
}

async function _4s(e, r, n, u, o) {
  let s = r.files;
  if (!Array.isArray(s) || s.length === 0) return {};
  let i;
  try {
    let p = C(e, o);
    if (p === void 0) return {};
    let {host: h} = p;
    i = h === void 0 ? await J(s, n, u) : await ee(s, h, n, u);
  } catch (p) {
    d(p), i = {
      error: `The files could not be attached. ${c} ${w}`,
      code: "unexpected"
    };
  }
  if ("error" in i) {
    if (i.code !== "canceled" && i.code !== "upload_canceled") m("managed_agents_task_file_upload", i.code);
    return {
      error: i.error
    };
  }
  return g("managed_agents_task_file_upload"), {
    input: {
      ...r,
      files: i.files
    }
  };
}

var le = 6e5, H = "start-task-upload-before-ask", de = I, ue = 3e5, G = new WeakMap;

function b4s(e, r, n, u, o, s) {
  let i = r.files;
  if (s === "" || !Array.isArray(i) || i.length === 0 || !i.every(S => Kn(S) && typeof S.path === "string" && S.file_id === void 0) || e.config.type !== "http" || !ky(e.config.url)) return;
  let p = C(e, o);
  if (p === void 0) return;
  let {host: h} = p, y = i, T = _(r);
  return {
    prepare: () => {
      let S = p5o(o, s, T), E = S && G.get(S);
      if (E !== void 0) return E;
      let A = {
        toolUseId: s,
        pathFormKey: T,
        files: [],
        uploadStartedAt: Date.now(),
        state: "uploading",
        remove: P => Q(P, h)
      };
      u5o(o, A);
      let F = ce(A, y, h, n, u, o).then(P => {
        if ("error" in P) return P;
        let x = A.files;
        return {
          input: {
            ...r,
            files: x
          },
          description: `Attaches ${y.map((oe, N) => `${hSt(String(oe.path))} as ${hSt(x[N]?.name ?? "")} (${fe(x[N]?.file_id)})`).join("; ")}`,
          release: () => ahe(o, A)
        };
      });
      return G.set(A, F), F;
    }
  };
}

async function ce(e, r, n, u, o, s) {
  let i = {
    mustStartWithinMs: le,
    maxTotalBytes: n === void 0 ? de : void 0,
    onUploaded: y => {
      if (e.state === "deleted") e.remove([ y.file_id ]); else e.files.push(y);
    }
  }, p, h = !!a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES;
  if (h) PO("tool_exec", H);
  try {
    p = n === void 0 ? await J(r, u, o, i) : await ee(r, n, u, o, i);
  } catch (y) {
    d(y), p = {
      error: `The files could not be attached. ${c} ${w}`,
      code: "unexpected"
    };
  } finally {
    if (h) IO("tool_exec", H);
  }
  if (!("error" in p) && e.state === "deleted") p = R("canceled");
  if ("error" in p) {
    if (await ahe(s, e), p.code !== "canceled" && p.code !== "upload_canceled") m("managed_agents_task_file_upload", p.code);
    return {
      error: p.error
    };
  }
  return g("managed_agents_task_file_upload"), e.state = "pending", {
    ok: !0
  };
}

async function Q(e, r) {
  if (r === void 0) {
    await K7n(e);
    return;
  }
  await Promise.all(e.map(n => r.delete?.(n)));
}

function fe(e) {
  return e !== void 0 && X.test(e) ? e : "?";
}

async function S4s(e, r, n) {
  let u = C(e, r);
  if (u === void 0 || !Array.isArray(n)) return;
  let o = n.flatMap(s => Kn(s) && typeof s.file_id === "string" ? [ s.file_id ] : []);
  await Q(o, u.host);
}

function w4s(e) {
  if (Date.now() > e + Y * 1e3 - ue) return `The files for this task were uploaded about an hour before this approval and have expired or are about to. Call start_task again to upload them afresh. ${c}`;
  let r = Sfe(), n = ple();
  if (n !== void 0) return (n === "egress_blocked" ? D() : M()).error;
  return r ? L().error : void 0;
}

function v4s(e, r) {
  let n = Q7n(r);
  if (n === void 0 || he() || !z(e) || !k("tengu_twinkling_cosmos", !1)) return;
  return `In this session, files the user attached to the chat are usually in ${n}. To give one to the task, put its full path in files as an object, such as files: [{"path": "${n}/report.csv"}]. Do that rather than copying the file's text into task_description.`;
}

function E4s(e, r, n, u) {
  let o = r.files;
  if (o === void 0 || o === null || Array.isArray(o) && o.length === 0 || C(e, u) === void 0) return;
  let s = ySt(o, b), i = Array.isArray(s) ? void 0 : s, {files: p, ...h} = r, y = Array.isArray(s) ? {
    ...h,
    files: s.map((A, F) => ({
      file_id: `file_${F}`,
      name: `file_${F}`
    }))
  } : h, T = obn(y, n, {
    ...b,
    ignoreInside: b.arg
  });
  if (i === void 0 && T === void 0) return;
  if (i === void 0) f("managed_agents_task_file_upload", "input_schema"); else m("managed_agents_task_file_upload", i.code);
  if (T === void 0) return i.error;
  let S = ` ${c}`, E = i === void 0 ? "" : ` ${i.error.endsWith(S) ? i.error.slice(0, -S.length) : i.error}`;
  return `Cannot call start_task with these arguments: ${T.listed}.${E}${T.takes} ${c}`;
}

var Z = {
  mustStartWithinMs: ie
};

async function J(e, r, n, u = Z) {
  let o = ySt(e, b);
  if (!Array.isArray(o)) return o;
  let s = Sfe(), i = ple();
  if (i !== void 0) return i === "egress_blocked" ? D() : M();
  if (s) return L();
  if (!k5()) return ne();
  for (let T of o) try {
    await zit(T, r);
  } catch (S) {
    return t(`[start_task files] rejected path: ${T} (${l(S)})`), v(T, rVr(S), "here", r);
  }
  let p = [], h = Date.now() + u.mustStartWithinMs, y = u.maxTotalBytes === void 0 ? void 0 : {
    remainingBytes: u.maxTotalBytes
  };
  for (let T of o) {
    if (n.aborted) return R("canceled");
    if (Date.now() > h) return U();
    let S, E;
    try {
      ({realPath: S, requiredDigest: E} = await zit(T, r));
    } catch (P) {
      return t(`[start_task files] rejected path: ${T} (${l(P)})`), v(T, rVr(P), "here", r);
    }
    let A = await V7n(S, E, n, y);
    if (!A.ok) return t(`[start_task files] not uploaded: ${T} (${A.code})`), v(T, A.code, "here", r);
    let F = {
      file_id: A.file_id,
      name: A.name
    };
    p.push(F), u.onUploaded?.(F);
  }
  if (n.aborted) return R("canceled");
  if (Date.now() > h + O) return U();
  return {
    files: p
  };
}

async function ee(e, r, n, u, o = Z) {
  let s = ySt(e, b);
  if (!Array.isArray(s)) return s;
  let i = Sfe(), p = ple();
  if (p !== void 0) return p === "egress_blocked" ? D() : M();
  if (i) return L();
  let h = "elsewhere", y = [], T = Date.now() + o.mustStartWithinMs;
  for (let S of s) {
    if (u.aborted) return R("canceled");
    if (Date.now() > T) return U();
    if (r.ruleItCannotApply(n) !== void 0) return {
      error: `Cannot attach files: this session's limits on reading files cannot be applied in its cloud environment, where the upload would happen. ${c} ${w}`,
      code: "rule_not_applicable"
    };
    if (!Wzt(se.basename(S))) return {
      error: `Cannot attach "${S}": a file handed to a task from this session's cloud environment needs a plain name, without a backslash, a control character or a character that changes text direction. Copy or rename it and attach that. ${c}`,
      code: "name_not_plain"
    };
    let E = await r.upload(S, u);
    if (!E.ok) return v(S, E.code, h, n);
    if (!X.test(E.file_id) || !Wzt(E.name)) return v(S, "bad_answer", h, n);
    let A = {
      file_id: E.file_id,
      name: E.name
    };
    y.push(A), o.onUploaded?.(A);
  }
  if (u.aborted) return R("canceled");
  if (Date.now() > T + O) return U();
  return {
    files: y
  };
}

async function V7n(e, r, n, u) {
  let o = await fxt(e);
  if (jzt.test(o)) return {
    ok: !1,
    code: "name_direction"
  };
  let s = await GNe(e, I);
  if (!("buf" in s)) return {
    ok: !1,
    code: s.refusal
  };
  if (u !== void 0) {
    if (s.buf.length > u.remainingBytes) return {
      ok: !1,
      code: "too_large_total"
    };
    u.remainingBytes -= s.buf.length;
  }
  if (r !== void 0 && at(s.buf) !== r) return {
    ok: !1,
    code: "path_rejected"
  };
  await oa();
  let i = k5();
  if (!i) return {
    ok: !1,
    code: "no_token"
  };
  let p;
  try {
    let h = await Tco(s.buf, o, {
      oauthToken: i,
      sessionId: q(),
      baseUrl: un().BASE_API_URL
    }, {
      signal: n,
      expiresInSeconds: Y,
      timeoutMs: O,
      retryAfterTimeout: !1
    });
    if (h.success) return {
      ok: !0,
      file_id: h.fileId,
      name: o
    };
    p = h.reason;
  } catch (h) {
    t(`[start_task files] upload threw: ${l(h)}`, {
      level: "error"
    }), p = "network";
  }
  return {
    ok: !1,
    code: `upload_${p}`
  };
}

var te = {
  file_read: !0,
  too_large: !0,
  auth: !0,
  forbidden: !0,
  canceled: !0,
  server: !0,
  network: !0
}, pe = {
  auth: !0,
  forbidden: !0,
  not_found: !0,
  server: !0,
  network: !0
}, Y2r = [ "egress_blocked", "essential_traffic", "no_token", "timeout", "unexpected", ...Object.keys(pe).map(e => `delete_${e}`) ], re = 5e3, K = "start_task upload cleanup timed out";

async function K7n(e) {
  if (e.length === 0) return;
  let r;
  try {
    r = await Ht(_e(e), re, K);
  } catch (n) {
    if (n instanceof Error && n.message === K) r = "timeout"; else d(n), r = "unexpected";
  }
  if (r === void 0) g("managed_agents_task_file_cleanup"); else f("managed_agents_task_file_cleanup", r);
  return r;
}

async function _e(e) {
  let r = un().BASE_API_URL;
  try {
    MYe(r);
  } catch {
    return "egress_blocked";
  }
  if (Ct()) return "essential_traffic";
  await oa();
  let n = k5();
  if (!n) return "no_token";
  let u = {
    oauthToken: n,
    sessionId: q(),
    baseUrl: r
  }, s = (await Promise.all(e.map(i => rLn(i, u, {
    timeoutMs: re
  })))).find(i => !i.success);
  return s !== void 0 && !s.success ? `delete_${s.reason}` : void 0;
}

var X2r = [ ...Object.keys(oVr), ...Object.keys(te).map(e => `upload_${e}`), "path_rejected", "no_token", "name_direction", "too_large_total" ];

function v(e, r, n, u) {
  if (ibn(r)) return abn(e, r, I, c);
  if (n === "elsewhere" && r === "upload_auth") return {
    error: `The sign-in of this session's cloud environment was not accepted while uploading "${e}". ${c} ${w}`,
    code: r
  };
  let o = r.startsWith("upload_") ? r.slice(7) : void 0;
  if (o !== void 0 && me(o)) return V(e, o);
  switch (r) {
   case "path_rejected":
    return {
      error: n === "here" ? sbn(e, u, c) : `Cannot attach "${e}": only files in this session's working folder (unless that is the home folder) or in its uploads or outputs folder can be attached, by the absolute path of a regular file there. ${c}`,
      code: r
    };

   case "credential_name":
    return {
      error: WYo(e, n === "here" ? u : {
        isRemoteMode: !0
      }, c),
      code: r
    };

   case "too_large_total":
    return {
      error: `Cannot attach "${e}": with the files before it, the files named to start_task add up to more than ${I / 1048576} MiB, the most one call may attach. Attach fewer or smaller files. ${c}`,
      code: r
    };

   case "name_direction":
    return {
      error: `Cannot attach "${e}": its name contains a character that changes text direction, so the task could show it under a different name. Rename it, or copy it under a name without that character, and attach that. ${c}`,
      code: r
    };

   case "no_token":
    return n === "here" ? ne() : {
      error: `This session's cloud environment has no sign-in to upload files with. ${c} ${w}`,
      code: r
    };

   case "canceled":
    return R("canceled");

   case "egress_blocked":
    return D();

   case "essential_traffic":
    return M();

   case "policy_pending":
    return {
      error: `This session's cloud environment has not yet loaded its organization's policy, so it cannot tell whether files may be uploaded. ${c} Try again in a moment, or start the task without files.`,
      code: r
    };

   case "container_too_old":
    return {
      error: `This session's cloud environment runs an older version of Claude Code, which cannot attach files to a task. ${c} ${w}`,
      code: r
    };

   case "no_answer":
    return {
      ...V(e, "network"),
      code: r
    };

   case "no_container":
   case "container_unreachable":
    return {
      error: `This session's cloud environment could not be reached, so the files were not attached. ${c} Try again, or start the task without files.`,
      code: r
    };

   default:
    return {
      error: `The files could not be attached. ${c} ${w}`,
      code: "unexpected"
    };
  }
}

function me(e) {
  return Object.hasOwn(te, e);
}

function U() {
  return {
    error: `Attaching these files is taking too long: the first ones would expire before the task could copy them. ${c} Attach fewer or smaller files, or start the task without files.`,
    code: "uploads_too_slow"
  };
}

function M() {
  return {
    error: `Uploading files to Anthropic is turned off by CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC. ${c} ${w}`,
    code: "essential_traffic"
  };
}

function L() {
  return {
    error: `This organization's policy has not loaded yet, so files cannot be attached right now. ${c} Try again in a minute; if it is refused again, tell the user and offer to start the task without the files.`,
    code: "policy_pending"
  };
}

function D() {
  return {
    error: `Uploading files to Anthropic is not available in this configuration. ${c} ${w}`,
    code: "egress_blocked"
  };
}

function ne() {
  return {
    error: `Attaching files needs a claude.ai sign-in (run /login). ${c}`,
    code: "no_token"
  };
}

function R(e) {
  return {
    error: `Attaching files was interrupted. ${c}`,
    code: e
  };
}

function V(e, r) {
  let n = `upload_${r}`;
  switch (r) {
   case "auth":
    return {
      error: `The session's sign-in was not accepted while uploading "${e}". The person may need to sign in again, or restart the session. ${c}`,
      code: n
    };

   case "forbidden":
    return {
      error: `This session's sign-in may not upload files, so "${e}" was not attached. ${c} ${w}`,
      code: n
    };

   case "too_large":
    return {
      error: `The Files API refused "${e}" as too large. ${c}`,
      code: n
    };

   case "canceled":
    return R(n);

   case "server":
    return {
      error: `The Files API did not accept "${e}". ${c} Start the task without this file, or tell the user.`,
      code: n
    };

   case "file_read":
   case "network":
    return {
      error: `The upload of "${e}" did not complete. ${c} Try again, or start the task without this file.`,
      code: n
    };
  }
}

export { _4s, b4s, S4s, w4s, v4s, E4s, V7n, Y2r, K7n, X2r };
