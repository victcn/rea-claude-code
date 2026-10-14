// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Y1, k } from "./chunk-xywp7esx.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-j90se18b.js";

import "./chunk-jkzenvsk.js";

import "./chunk-5brm0azz.js";

import { kd, W9, Ep } from "./chunk-8yperama.js";

import "./chunk-x5881pc6.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nnrb0acr.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-07cck4g7.js";

import { Bi } from "./chunk-s2t7g8m9.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-qqd24q2y.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-2my8wpr5.js";

import "./chunk-46phtgr7.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import "./chunk-e7rgnck3.js";

import { ift } from "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import { MEt, HEt } from "./chunk-45hk2ecv.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import { zs } from "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

var _ = "tengu_rc_thread_reply_gate";

function p() {
  return k(_, !0);
}

var j = 5e3, b = 1e3, f = [ "reply", "no_reply_needed", "post_message", "react", "update_message", "update_status" ].map(e => zs(kd, e)), l = zs(kd, "no_reply_needed"), m = zs(kd, "update_status"), T = "rc_owner";

function y(e) {
  let t = e.mcp.clients.find(n => n.name === kd);
  return t !== void 0 && t.type === "connected" && Ep(t.config);
}

async function L(e, t, n) {
  if (!p()) return;
  let r = performance.now(), a = await We(e.then(() => !0), n);
  i("tengu_bridge_projects_mount_wait", {
    waited_ms: Math.round(performance.now() - r),
    settled: a === !0,
    connected: y(t())
  });
}

function I(e, t) {
  let n = Y1(e).decider;
  if (n === null) return {
    kind: "skip"
  };
  let r = e[n.index];
  if (r === void 0) return {
    kind: "skip"
  };
  let a = g(r)?.startsWith(ift) === !0;
  if (!a && !h(r)) return {
    kind: "skip"
  };
  let d = [ ...e.slice(n.index + 1), ...t ];
  if (!d.some(E)) return {
    kind: "skip"
  };
  let u = new Set;
  for (let s of d) {
    if (s.type !== "user" || !Array.isArray(s.message.content)) continue;
    for (let o of s.message.content) if (o.type === "tool_result" && o.is_error === !0) u.add(o.tool_use_id);
  }
  let c;
  for (let s of d) {
    if (s.type !== "assistant") continue;
    for (let o of s.message.content) {
      if (o.type !== "tool_use" || !f.includes(o.name)) continue;
      if (!u.has(o.id)) return {
        kind: "answered"
      };
      c = o.name;
    }
  }
  if (a) return {
    kind: "still_silent"
  };
  if (c !== void 0) return {
    kind: "bounce",
    reason: "reply_errored",
    text: `${ift} Your \`${c}\` call this turn returned an error, so nothing reached the project thread. Call \`${W9}\` again with what the thread should see, or \`${l}\` if no reply is warranted.`
  };
  return {
    kind: "bounce",
    reason: "silent_turn",
    text: `${ift} Your last turn ended without a terminal \`mcp__${kd}__*\` tool call, so nothing reached the project thread: plain text is not delivered there. Call \`${W9}\` now with what the thread should see, \`${m}\` if you dispatched work that reports back later, or \`${l}\` if no reply is warranted.`
  };
}

function E(e) {
  return e.type === "assistant" && e.message.model !== Bi;
}

function g(e) {
  return e.type === "user" && e.isMeta === !0 && typeof e.message.content === "string" ? e.message.content : void 0;
}

function h(e) {
  if (e.type === "attachment") return e.attachment.type === "queued_command" && e.attachment.projectsUserTurn === !0;
  if (e.type !== "user") return !1;
  if (e.projectsUserTurn === !0) return !0;
  let t = e.message.content, n = typeof t === "string" ? t : t[0]?.type === "text" ? t[0].text : void 0;
  if (n === void 0) return !1;
  let r = MEt(n);
  return r !== null && HEt(r) && r.data.sender_kind === T;
}

export { b as PROJECTS_MOUNT_FIRST_COMMAND_WAIT_FLOOR_MS, j as PROJECTS_MOUNT_FIRST_COMMAND_WAIT_MS, I as evaluateProjectsReplyGate, p as isProjectsReplyGateEnabled, y as isProjectsReplyMountConnected, L as joinProjectsMountBeforeFirstCommand };
