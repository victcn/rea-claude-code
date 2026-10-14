// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K } from "./chunk-3pqddg8f.js";

import { Y } from "./chunk-kawq2919.js";

import { w } from "./chunk-9rj1xaxr.js";

import { p } from "./chunk-jkzenvsk.js";

import { Gs } from "./chunk-yxennhe9.js";

import { s, n, Uo } from "./chunk-3vw306fv.js";

import { Be } from "./chunk-50asgqhj.js";

import { Ax } from "./chunk-v0b4fvka.js";

import { ddr } from "./chunk-84yp45y8.js";

import { te } from "./chunk-48xcyvwy.js";

import { Ip } from "./chunk-8xb6ca8t.js";

import { Dbn, pVr, OHe } from "./chunk-n7t8n14t.js";

import { GC } from "./chunk-62430yz1.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { qw } from "./chunk-xz8q4brh.js";

import { Lbn } from "./chunk-38rt52dc.js";

import { NHe } from "./chunk-skq2ejrn.js";

import { s0 } from "./chunk-7etzs4d7.js";

import { F } from "./chunk-cpyd3eya.js";

import { o, T, u, $e } from "./chunk-cvcg6n1z.js";

import { cM } from "./chunk-zx69jgxc.js";

F();

function we(t) {
  let [Ge, Qe] = t;
  return `${Ge}: ${Qe}`;
}

function Se(t) {
  let [Ve] = t;
  return ne(Ve);
}

var _ = 1e4;

function o8n(t) {
  let i = t.at(-1);
  if (!i?.data) return e(Be, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  let {progress: l, total: a} = i.data, f = Ip(i.data.progressMessage);
  if (l === void 0) return e(Be, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: "Running\u2026"
    })
  });
  if (a !== void 0 && a > 0) {
    let c = Math.min(1, Math.max(0, l / a)), m = Math.round(c * 100);
    return e(Be, {
      children: r(s, {
        flexDirection: "column",
        children: [ f && e(n, {
          dimColor: !0,
          children: f
        }), r(s, {
          flexDirection: "row",
          gap: 1,
          children: [ e(GC, {
            ratio: c,
            width: 20
          }), r(n, {
            dimColor: !0,
            children: [ m, "%" ]
          }) ]
        }) ]
      })
    });
  }
  return e(Be, {
    height: 1,
    children: e(n, {
      dimColor: !0,
      children: f ?? `Processing\u2026 ${l}`
    })
  });
}

function Jfn(t, i, {verbose: l, input: a}) {
  let f = t;
  if (!l) {
    let c = O(f, a);
    if (c !== null) return e(Be, {
      height: 1,
      children: r(n, {
        children: [ "Sent a message to", " ", e(Uo, {
          children: qw(c.url, c.channel)
        }) ]
      })
    });
  }
  return h(f, l);
}

function h(t, i) {
  let l = NHe(t), f = l > _ ? `${te.warning} Large MCP response (~${Gs(l)} tokens), this can fill up context quickly` : null, c;
  if (Array.isArray(t)) {
    let m = t.map((d, g) => {
      if (d.type === "image") return e(s, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%",
        children: e(Be, {
          height: 1,
          children: e(n, {
            children: "[Image]"
          })
        })
      }, g);
      return e(P, {
        item: d,
        verbose: i
      }, g);
    });
    c = e(s, {
      flexDirection: "column",
      width: "100%",
      children: m
    });
  } else if (!t) c = e(s, {
    justifyContent: "space-between",
    overflowX: "hidden",
    width: "100%",
    children: e(Be, {
      height: 1,
      children: e(n, {
        dimColor: !0,
        children: "(No content)"
      })
    })
  }); else c = e(Ax, {
    content: t,
    verbose: i
  });
  if (f) return r(s, {
    flexDirection: "column",
    children: [ e(Be, {
      height: 1,
      children: e(n, {
        color: "warning",
        children: f
      })
    }), c ]
  });
  return c;
}

function P(t) {
  let f = w(3), {item: i, verbose: l} = t, a = i.type === "text" && "text" in i && i.text !== null && i.text !== void 0 ? String(i.text) : "", c;
  if (f[0] !== a || f[1] !== l) c = e(Ax, {
    content: a,
    verbose: l
  }), f[0] = a, f[1] = l, f[2] = c; else c = f[2];
  return c;
}

function v(t, {maxChars: i, maxKeys: l}) {
  let a = t.trim();
  if (a.length === 0 || a.length > i || a[0] !== "{") return null;
  let f;
  try {
    f = Y(a);
  } catch {
    return null;
  }
  if (f === null || typeof f !== "object" || Array.isArray(f)) return null;
  let c = Object.entries(f);
  if (c.length === 0 || c.length > l) return null;
  return c;
}

var N = /^https:\/\/[a-z0-9-]+\.slack\.com\/archives\/([A-Z0-9]+)\/p\d+$/;

function O(t, i) {
  let l = t;
  if (Array.isArray(t)) {
    let x = t.find(R => R.type === "text");
    l = x && "text" in x ? x.text : void 0;
  }
  if (typeof l !== "string" || !l.includes('"message_link"')) return null;
  let f = v(l, {
    maxChars: 2e3,
    maxKeys: 6
  })?.find(([x]) => x === "message_link")?.[1];
  if (typeof f !== "string") return null;
  let c = N.exec(f);
  if (!c) return null;
  let m = i, d = m?.channel_id ?? m?.channel ?? c[1], g = (typeof d === "string" ? Lbn(d) : "") || "slack";
  return {
    channel: g.startsWith("#") ? g : `#${g}`,
    url: f
  };
}

function BBt(t, i) {
  let l = i?.columns;
  if (typeof t === "string") return s0(t, l);
  if (Array.isArray(t)) return t.some(a => a.type === "text" && s0(a.text, l));
  return !1;
}

var A = 256;

function Ote(t, i) {
  let l = ddr(t);
  return l ? E.of(i)(t, l.serverName, l.toolName) : void 0;
}

var D = p(() => $e([ pVr(), u({
  content: $e([ o(), T(u({
    type: o()
  }).passthrough()) ])
}).transform(t => t.content) ])), iqs = {
  isResultTruncated(t, i) {
    let l = j(t);
    return BBt(l, i) || BBt(b(l), i);
  },
  renderToolResultMessage(t, i, {verbose: l}) {
    return h(b(t), l);
  }
}, E = new K(() => cM(H, t => t, A));

function H(t, i, l) {
  let a = () => {
    throw Error("Display-only MCP tool invoked \u2014 it exists only for transcript rendering");
  };
  return {
    ...OHe,
    name: t,
    mcpInfo: {
      serverName: i,
      toolName: l
    },
    isEnabled: () => !1,
    outputSchema: D(),
    uiTableKey: Dbn,
    userFacingName: () => `${i} - ${l} (MCP)`,
    description: async () => a(),
    prompt: async () => a(),
    call: async () => a(),
    checkPermissions: async () => a()
  };
}

function j(t) {
  let i = typeof t === "object" && t !== null && !Array.isArray(t) && "content" in t ? t.content : t;
  if (typeof i === "string") return i;
  return Array.isArray(i) && i.every(l => typeof l === "object" && l !== null) ? i : void 0;
}

var B = /\x1b\]8;[^;\x07\n\r\x18\x1a\x1b]*;([^\x07\n\r\x18\x1a\x1b]*)(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]|\x1b[\]P_X^][^\x07\n\r\x18\x1a\x1b]*(?:\x07|\x1b\\)/g, U = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g, I = /\\u001b/gi, L = /\\u00(?:0[0-8b-f]|1[0-9a-f]|7f|[89][0-9a-f])/gi;

function M(t) {
  let i = "", l = () => i ? ` <${i}>` : "";
  return (t.replace(B, (f, c) => {
    if (c === void 0) return "";
    let m = l();
    return i = c, m;
  }) + l()).replace(U, "").replace(I, "\\u241b").replace(L, "\\u2426");
}

function b(t) {
  if (typeof t === "string") return M(t);
  return t?.map(i => i.type === "text" && "text" in i ? {
    type: "text",
    text: M(String(i.text ?? ""))
  } : i);
}

export { o8n, Jfn, BBt, Ote, iqs };
