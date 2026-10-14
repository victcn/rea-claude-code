// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { QS, nYn } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { I } from "./chunk-5wbhf1bk.js";

import { w } from "./chunk-9rj1xaxr.js";

import { Pe } from "./chunk-7w995nyx.js";

import { Ft, SC } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { Rn, ca } from "./chunk-dd98x6x7.js";

import { st, s, n, zt } from "./chunk-3vw306fv.js";

import { No } from "./chunk-gdpv30ry.js";

import { Ua, Kd, hs, zi, Xe } from "./chunk-yrpmvsj8.js";

import { G } from "./chunk-j706jx8h.js";

import { Se } from "./chunk-sebqm9p5.js";

import { kkt, Ere, ni, cf } from "./chunk-84yp45y8.js";

import { Nz } from "./chunk-8drhysk2.js";

import { qk } from "./chunk-bkx9v5fh.js";

import { Rl, ol, Yr } from "./chunk-z09tf6qf.js";

import { Xj } from "./chunk-5hbafsqn.js";

import { be } from "./chunk-gqmex880.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { ae, R, F } from "./chunk-cpyd3eya.js";

import { iXe } from "./chunk-vjmbaret.js";

import { D } from "./chunk-hmqkrrtz.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function k() {
  let t = w(1), u;
  if (t[0] === S) u = r(n, {
    children: [ "MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", e(zt, {
      url: "https://code.claude.com/docs/en/mcp",
      children: "MCP documentation"
    }), "." ]
  }), t[0] = u; else u = t[0];
  return u;
}

function rmn({serverName: t, isPluginServer: u = !1, onDone: d}) {
  let {storageV5: o} = Pe(), l = R(!1), f = Ua(No), {refusedWithin: m, noteRefused: b, epoch: v} = hs(), h = Kd(v, No);
  function E() {
    if (f() || m(No)) return b(), !0;
    return !1;
  }
  async function C(p) {
    if (E()) return;
    if (l.current) return;
    switch (l.current = !0, i("tengu_mcp_dialog_choice", {
      choice: c(p)
    }), p) {
     case "yes":
     case "yes_all":
      {
        let g = !1;
        {
          let {error: y} = await ca("localSettings", M => {
            let P = M?.enabledMcpjsonServers || [];
            if (P.includes(t)) return null;
            return {
              enabledMcpjsonServers: [ ...P, t ]
            };
          }, void 0, o);
          g ||= y != null;
        }
        if (p === "yes_all") {
          let {error: y} = await Rn("localSettings", {
            enableAllProjectMcpServers: !0
          }, void 0, o);
          g ||= y != null;
        }
        nYn(SC(), [ t ]), d({
          persistFailed: g
        });
        break;
      }

     case "no":
      {
        let {error: g} = await ca("localSettings", y => {
          let M = y?.disabledMcpjsonServers || [];
          if (M.includes(t)) return null;
          return {
            disabledMcpjsonServers: [ ...M, t ]
          };
        }, void 0, o);
        d({
          persistFailed: g != null
        });
        break;
      }
    }
  }
  return r(be, {
    title: `New MCP server found in this project: ${iXe(t, u)}`,
    color: "warning",
    onCancel: () => void C("no"),
    exitOnCtrlCD: !0,
    children: [ e(k, {}), e(Xe, {
      options: [ {
        label: "Use this MCP server",
        value: "yes"
      }, {
        label: "Use this and all future MCP servers in this project",
        value: "yes_all"
      }, {
        label: "Continue without using this MCP server",
        value: "no"
      } ],
      onChange: p => void C(p),
      onCancel: () => void C("no"),
      hideIndexes: !0,
      refuseInput: E,
      defaultFocusValue: "no",
      selectedValue: zi
    }, h.remountKey) ]
  });
}

F();

function omn({serverNames: t, pluginServerNames: u, onDone: d}) {
  let {storageV5: o} = Pe(), l = R(!1), f = Ua(No), {refusedWithin: m, noteRefused: b} = hs(), v = st(), h = ae(() => {
    if (f() || m(No)) return b(), !0;
    return !1;
  }, [ f, m, b ]);
  async function E(p) {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let [g, y] = qk(t, P => p.includes(P));
    i("tengu_mcp_multidialog_choice", {
      approved: g.length,
      rejected: y.length
    });
    let M = !1;
    if (g.length > 0) {
      let {error: P} = await ca("localSettings", A => ({
        enabledMcpjsonServers: D([ ...A?.enabledMcpjsonServers || [], ...g ])
      }), void 0, o);
      M ||= P != null;
    }
    if (nYn(SC(), g), y.length > 0) {
      let {error: P} = await ca("localSettings", A => ({
        disabledMcpjsonServers: D([ ...A?.disabledMcpjsonServers || [], ...y ])
      }), void 0, o);
      M ||= P != null;
    }
    d({
      persistFailed: M
    });
  }
  let C = ae(async () => {
    if (h()) return;
    if (l.current) return;
    l.current = !0;
    let {error: p} = await ca("localSettings", g => ({
      disabledMcpjsonServers: D([ ...g?.disabledMcpjsonServers || [], ...t ])
    }), void 0, o);
    d({
      persistFailed: p != null
    });
  }, [ h, t, d, o ]);
  return r(Q, {
    children: [ r(be, {
      title: `${t.length} new MCP servers found in this project`,
      subtitle: "Select any you wish to enable.",
      color: "warning",
      onCancel: C,
      exitOnCtrlCD: !0,
      hideInputGuide: !0,
      children: [ e(k, {}), e(Xj, {
        options: t.map(p => ({
          label: iXe(p, u?.has(p) ?? !1),
          value: p
        })),
        defaultValue: v ? [] : t,
        submitButtonText: "Enable selected",
        onSubmit: E,
        onCancel: C,
        hideIndexes: !0,
        refuseInput: h,
        refuseSubmitFocus: h
      }) ]
    }), e(s, {
      paddingX: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: r(Se, {
          children: [ e(G, {
            chord: "space",
            action: "select"
          }), e(pt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "reject all"
          }) ]
        })
      })
    }) ]
  });
}

async function smn(t) {
  if (QS()) return {
    pendingServers: [],
    pluginServerNames: new Set
  };
  let {serverNames: u, pluginServerNames: d} = await zFr(t);
  return {
    pendingServers: u.filter(l => Ere(l) === "pending"),
    pluginServerNames: d
  };
}

async function zFr(t) {
  let {servers: u} = cf("project"), d = Object.keys(u), o = new Set(d), l = new Set, {enabled: f} = await ni(t), m = f.filter(Nz);
  for (let b of m) {
    let v = await kkt(b, [], t);
    if (!v) continue;
    for (let h of Object.keys(v)) {
      if (o.has(h) || l.has(h)) continue;
      d.push(h), l.add(h);
    }
  }
  return {
    serverNames: d,
    pluginServerNames: l,
    rootServers: u
  };
}

async function Fjo({pendingServers: t, pluginServerNames: u}, d, o) {
  if (t.length === 0) return null;
  let l;
  l = await x(t.map(v => iXe(v, u.has(v))), o);
  let f = v => {
    _(l, o).catch(() => {}).then(() => d(v));
  }, [m, ...b] = t;
  return m !== void 0 && b.length === 0 ? e(rmn, {
    serverName: m,
    isPluginServer: u.has(m),
    onDone: f
  }) : e(omn, {
    serverNames: t,
    pluginServerNames: u,
    onDone: f
  });
}

async function x(t, u) {
  {
    if (!Ft()) return;
    let d = a.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await Yr(d, u);
    if (!o) return;
    let l = t.length, f = I(l, "server"), m = I(l, "needs", "need");
    try {
      return await Rl(d, {
        ...o,
        state: "blocked",
        detail: `${l} new MCP ${f} ${m} approval`,
        tempo: "blocked",
        needs: `approve ${l} new project MCP ${f} (${t.join(", ")}) \u2014 attach to respond`,
        updatedAt: (new Date).toISOString()
      }, u), {
        state: o.state,
        tempo: o.tempo,
        needs: o.needs,
        detail: o.detail
      };
    } catch (b) {
      ol(b);
    }
  }
  return;
}

async function _(t, u) {
  {
    if (!t || !Ft()) return;
    let d = a.CLAUDE_JOB_DIR;
    if (!d) return;
    let o = await Yr(d, u);
    if (!o || o.state !== "blocked") return;
    try {
      await Rl(d, {
        ...o,
        ...t,
        block: void 0,
        updatedAt: (new Date).toISOString()
      }, u);
    } catch (l) {
      ol(l);
    }
  }
}

export { rmn, omn, smn, zFr, Fjo };
