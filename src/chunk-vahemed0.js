// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-7f3bx3dq.js";

import { dKt } from "./chunk-m0teq4gy.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import { B, Oc } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { bt, Y, t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { wn } from "./chunk-s2t7g8m9.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import { k } from "./chunk-xywp7esx.js";

import "./chunk-9yajep3y.js";

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

import "./chunk-5brm0azz.js";

import "./chunk-8yperama.js";

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

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import { ha } from "./chunk-h6xggfqh.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import { o, v, cI, lf, T, u, A } from "./chunk-cvcg6n1z.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

var I = 50, z = 1500, x = 5e3, P = new Set([ "chrome://newtab/", "about:blank" ]), w = p(() => u({
  error: cI().or(lf()).or(A(!1)).or(A("")).optional(),
  result: u({
    isError: A(!0).optional()
  })
}));

function M(e) {
  let s = w().safeParse(e);
  return s.success && s.data.result.isError !== !0;
}

var F = p(() => u({
  availableTabs: T(u({
    tabId: v(),
    url: o()
  }))
}));

function y({sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: l = x}) {
  if (a.CLAUDE_CODE_REMOTE_SESSION_ID || !k("tengu_chrome_tab_group_close", !0)) return Promise.resolve({
    status: "disabled"
  });
  let n = ha().closesInFlight, b = n.get(e);
  if (b && (s || !b.onlyIfEmpty)) return b.promise;
  let r = (b?.promise ?? Promise.resolve()).then(() => R({
    sessionId: e,
    onlyIfEmpty: s,
    clientOverride: c,
    callTimeoutMs: l
  })).finally(() => {
    if (n.get(e)?.promise === r) n.delete(e);
  });
  return n.set(e, {
    onlyIfEmpty: s,
    promise: r
  }), r;
}

async function R({sessionId: e, onlyIfEmpty: s, clientOverride: c, callTimeoutMs: l}) {
  let n = c ?? ha().bridgeBinding?.socketClient;
  if (!n || !n.isConnected()) return t("[closeSessionTabGroup] bridge not connected, skipping"), 
  {
    status: "not_connected"
  };
  let b = {
    permissionMode: "ask",
    sessionScope: {
      sessionId: e
    }
  }, r, _;
  try {
    let i = await Ht(n.callTool("tabs_context_mcp", {
      createIfEmpty: !1
    }, b), l, "tabs_context_mcp timed out"), {tabGroupId: h, json: C} = dKt(i);
    if (h === void 0 || C === void 0) return t("[closeSessionTabGroup] no group for session"), 
    {
      status: "no_group"
    };
    _ = h;
    let O = F().safeParse(Y(C));
    if (!O.success) return t(`[closeSessionTabGroup] group ${_}: unreadable tab list, keeping it`), 
    f("chrome_tab_group_close", "tabs_unreadable"), {
      status: "kept",
      tabs: 0
    };
    r = O.data.availableTabs;
  } catch (i) {
    return t(`[closeSessionTabGroup] tabs_context_mcp failed: ${String(i)}`), m("chrome_tab_group_close", "context_failed"), 
    {
      status: "no_group"
    };
  }
  if (s && r.some(i => !P.has(i.url))) return t(`[closeSessionTabGroup] group ${_} has content, keeping ${r.length} tabs`), 
  {
    status: "kept",
    tabs: r.length
  };
  if (r.length > I) return t(`[closeSessionTabGroup] group ${_} holds ${r.length} tabs, over the close cap; keeping it`), 
  f("chrome_tab_group_close", "over_cap"), {
    status: "kept",
    tabs: r.length
  };
  let G = {
    permissionMode: "ask",
    sessionScope: {
      sessionId: e,
      tabGroupId: _
    }
  }, E = 0, S = 0;
  for (let i = r.length - 1; i >= 0; i--) {
    let {tabId: h} = r[i];
    try {
      let C = await Ht(n.callTool("tabs_close_mcp", {
        tabId: h
      }, G), l, "tabs_close_mcp timed out");
      if (!M(C)) {
        S++;
        break;
      }
      E++;
    } catch {
      S++;
      break;
    }
  }
  if (t(`[closeSessionTabGroup] group ${_}: closed ${E}/${r.length} tabs` + (S > 0 ? ", stopped at a failed close" : "")), 
  S > 0) f("chrome_tab_group_close", "close_failed"); else g("chrome_tab_group_close");
  return {
    status: "closed",
    closed: E,
    failed: S
  };
}

function ee() {
  let e = ha();
  if (e.tabGroupCleanupRegistered) return;
  e.tabGroupCleanupRegistered = !0;
  let s = B().id;
  e.unsubscribeSessionSwitch = Oc((c, l) => {
    if (c === s) return;
    let n = s;
    s = c, y({
      sessionId: n,
      onlyIfEmpty: !0
    }).catch(d);
  }), e.unregisterExitCleanup = bt(() => {
    if (!wn()) return;
    let c = Array.from(e.closesInFlight.values(), l => l.promise);
    return Ht(Promise.allSettled([ ...c, y({
      sessionId: B().id,
      onlyIfEmpty: !0
    }) ]), z, "chrome tab group close timed out at exit").catch(() => {});
  });
}

export { y as closeSessionTabGroup, ee as registerChromeTabGroupCleanup };
