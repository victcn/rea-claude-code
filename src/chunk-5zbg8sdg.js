// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { WL, xle, W6 } from "./chunk-qjb8dzm4.js";

import "./chunk-vatze04r.js";

import { Rle } from "./chunk-g9n1m2vk.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { b } from "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { or } from "./chunk-w0q7jqcp.js";

import { i } from "./chunk-hedpgw9m.js";

import { _, t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-3ykz5st8.js";

import "./chunk-jkzenvsk.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import "./chunk-4mw3z9gg.js";

import "./chunk-5brm0azz.js";

import "./chunk-3kb22va7.js";

import "./chunk-xywp7esx.js";

import "./chunk-r2h53bm2.js";

import "./chunk-yk8mtyzg.js";

import "./chunk-8yperama.js";

import "./chunk-73wnf5r6.js";

import "./chunk-yxennhe9.js";

import "./chunk-vps0k559.js";

import "./chunk-9yajep3y.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-j90se18b.js";

import "./chunk-x5881pc6.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nnrb0acr.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-1z2heevg.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-07cck4g7.js";

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

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-584ft4bq.js";

import "./chunk-gzzx34vb.js";

import { aZe } from "./chunk-6f8yfkh2.js";

import { Vgn } from "./chunk-wscn5rdp.js";

import "./chunk-ejckqh3m.js";

import "./chunk-dc6j1jb5.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-e96bxrcx.js";

import "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

var p = "claude-code-device", m = "get_device_info";

function h(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return {
    sessionId: void 0,
    toolArgs: {}
  };
  let {session_id: o, trigger_id: n, ...r} = e;
  return {
    sessionId: typeof o === "string" && o.length > 0 ? o : void 0,
    toolArgs: r
  };
}

function M(e) {
  return WL.parse(e);
}

function A(e) {
  let o = 0, n = [], r = () => {
    if (o !== 0) return;
    let s = n;
    n = [], s.forEach(a => a());
  }, l = new Rle({
    name: p,
    version: e.version
  }, {
    capabilities: {
      tools: {}
    }
  });
  return l.setRequestHandler(xle, async () => ({
    tools: [ ...e.registry.definitions() ]
  })), l.setRequestHandler(W6, async ({params: {name: s, arguments: a}}, f) => {
    let d = e.registry.get(s);
    if (!d) return {
      content: [ {
        type: "text",
        text: `Unknown tool: ${s}`
      } ],
      isError: !0
    };
    let {sessionId: c, toolArgs: g} = h(a);
    if (c !== void 0 && or(c) !== or(e.sessionId)) return v(d, c, e.sessionId);
    if (d.senderJudgedBy === "dispatch") {
      let u = Vgn();
      if (u.heldBack) return y(d, u.attestation);
    }
    o++;
    try {
      return await d.call(g, {
        sessionId: c,
        signal: f.signal
      });
    } catch (u) {
      return t(`[deviceBridge] tool ${s} failed: ${j(u).message}`), {
        content: [ {
          type: "text",
          text: `Tool ${s} failed: internal error`
        } ],
        isError: !0
      };
    } finally {
      if (o--, o === 0) setTimeout(r, 0);
    }
  }), {
    server: l,
    inFlightCalls: () => o,
    whenIdle: () => {
      let s = new Promise(a => {
        n.push(a);
      });
      if (o === 0) setTimeout(r, 0);
      return s;
    }
  };
}

function v(e, o, n) {
  let r = e.definition.name;
  return t(`[deviceBridge] refused ${r}: call asserted for session ${_(o.slice(0, 48))}, this device serves ${n}`), 
  i("tengu_device_tool_refused", {
    tool: e.analyticsName,
    reason: b("session_mismatch")
  }), {
    content: [ {
      type: "text",
      text: `${r} refused: the user's machine is currently connected on behalf of a different Claude Code cloud session (usually another session started from the same machine), so it cannot run device tools for this session and nothing was run. Tell the user, and continue with the tools in this cloud environment; if this session was also started with Claude Code on that machine, its device tools may work again once the other session ends. Do not retry in a loop.`
    } ],
    isError: !0
  };
}

function y(e, o) {
  let n = o?.status ?? "UNSPECIFIED";
  return t(`[deviceBridge] refused ${e.definition.name}: its sender is held back under the trusted-device policy (${n})`), 
  i("tengu_device_tool_refused", {
    tool: e.analyticsName,
    reason: b("unattested_request")
  }), {
    content: [ {
      type: "text",
      text: aZe({
        targetName: "this machine",
        status: n,
        subtype: "remote_tool_call"
      })
    } ],
    isError: !0
  };
}

var T = "This machine is attached but does not run commands for this session.";

function B(e) {
  let o = e.now ?? (() => new Date);
  return {
    definition: {
      name: m,
      description: "Returns runtime environment details for this device (platform, architecture, Claude Code version, and device name). Call this to confirm the device connection is live." + (e.idle ? ` ${T}` : ""),
      inputSchema: {
        type: "object",
        properties: {}
      }
    },
    analyticsName: b(m),
    senderJudgedBy: {
      notJudged: "The bridge service's own identify probe, sent with no session. It takes no input, runs nothing and reads nothing here, and answers the name this machine dialed the bridge under plus platform, architecture, Claude Code version and the time. Refusing it would hide the machine from the bridge, not keep anything from a sender."
    },
    call: async () => {
      let n = {
        platform: O(),
        arch: "x64",
        claudeCodeVersion: e.version,
        deviceName: e.getDeviceName(),
        timestamp: o().toISOString()
      };
      return {
        content: [ {
          type: "text",
          text: _(n, null, 2)
        } ]
      };
    }
  };
}

export { A as createDeviceMcpServer, B as deviceInfoProbeTool, M as parseJsonRpcMessage };
