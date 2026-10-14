// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { iR, sAt, Ere, kpr, dCe, cf, Yy } from "./chunk-84yp45y8.js";

import { En } from "./chunk-kawq2919.js";

import { bd } from "./chunk-h36n2zxz.js";

import { w } from "./chunk-9rj1xaxr.js";

import { s, n, zt } from "./chunk-3vw306fv.js";

import { ct } from "./chunk-qk83zz02.js";

import { _u } from "./chunk-xc2pw0fk.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Z, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function L(l) {
  let a = w(10), {title: o, status: c, detail: t} = l, g;
  if (a[0] !== o) g = e(n, {
    bold: !0,
    children: o
  }), a[0] = o, a[1] = g; else g = a[1];
  let i;
  if (a[2] !== c) i = e(ct, {
    status: c
  }), a[2] = c, a[3] = i; else i = a[3];
  let u;
  if (a[4] !== t) u = t ? r(n, {
    dimColor: !0,
    children: [ " \xb7 ", t ]
  }) : null, a[4] = t, a[5] = u; else u = a[5];
  let m;
  if (a[6] !== g || a[7] !== i || a[8] !== u) m = r(n, {
    children: [ g, " ", i, u ]
  }), a[6] = g, a[7] = i, a[8] = u, a[9] = m; else m = a[9];
  return m;
}

function Pr(jr) {
  return jr.file;
}

function Sr(x) {
  return !dCe(x.scope);
}

function yr(k) {
  return {
    scope: k.scope,
    servers: k.config.servers,
    displayServers: cf(k.scope, {
      expandVars: !1
    }).servers
  };
}

function Rr(p) {
  return Ere(p) === "approved";
}

function Wr(o) {
  let {config: T} = o;
  return N(T.errors, "fatal").length > 0;
}

function xr(o) {
  let {config: A} = o;
  return N(A.errors, "warning").length > 0;
}

function Fr(o) {
  let {scope: R, config: W} = o;
  return e(O, {
    scope: R,
    parsingErrors: N(W.errors, "fatal"),
    warnings: N(W.errors, "warning")
  }, R);
}

function $r(V, j) {
  return r(_u.Group, {
    children: [ e(_u.Node, {
      color: "warning",
      children: En(V.message)
    }), V.suggestion && e(_u.Node, {
      dimColor: !0,
      children: En(V.suggestion)
    }) ]
  }, `conflict-${j}`);
}

function O(l) {
  let i = w(40), {scope: o, parsingErrors: c, warnings: t} = l, a = c.length > 0, g = t.length > 0;
  if (!a && !g) {
    return null;
  }
  let u;
  if (i[0] !== o) u = iR(o), i[0] = o, i[1] = u; else u = i[1];
  let m = u, h;
  if (i[2] !== c || i[3] !== t) h = new Set([ ...c, ...t ].map(Pr).filter(Boolean)), 
  i[2] = c, i[3] = t, i[4] = h; else h = i[4];
  let x = h, k;
  if (i[5] !== m || i[6] !== x) k = x.size === 1 ? [ ...x ][0] : m, i[5] = m, i[6] = x, 
  i[7] = k; else k = i[7];
  let p = k, T;
  if (i[8] !== a || i[9] !== g) T = (a || g) && r(n, {
    color: a ? "error" : "warning",
    children: [ "[", a ? "Failed to parse" : "Contains warnings", "]", " " ]
  }), i[8] = a, i[9] = g, i[10] = T; else T = i[10];
  let A;
  if (i[11] !== o) A = sAt(o), i[11] = o, i[12] = A; else A = i[12];
  let R;
  if (i[13] !== A) R = e(n, {
    children: A
  }), i[13] = A, i[14] = R; else R = i[14];
  let W;
  if (i[15] !== T || i[16] !== R) W = r(s, {
    children: [ T, R ]
  }), i[15] = T, i[16] = R, i[17] = W; else W = i[17];
  let V;
  if (i[18] === S) V = e(n, {
    dimColor: !0,
    children: "Location: "
  }), i[18] = V; else V = i[18];
  let j;
  if (i[19] !== p) j = r(s, {
    children: [ V, e(n, {
      dimColor: !0,
      children: p
    }) ]
  }), i[19] = p, i[20] = j; else j = i[20];
  let G;
  if (i[21] !== p || i[22] !== c || i[23] !== o) {
    let P;
    if (i[25] !== p || i[26] !== o) P = (d, kr) => {
      let sr = d.mcpErrorMetadata?.serverName;
      let Tr = d.file && d.file !== p;
      return r(_u.Group, {
        children: [ e(_u.Node, {
          children: r(n, {
            children: [ e(n, {
              color: "error",
              children: "[Error]"
            }), r(n, {
              dimColor: !0,
              children: [ " ", Tr && `(${d.file}) `, sr && `[${En(sr)}] `, d.path && d.path !== "" ? `${En(d.path)}: ` : "", En(d.message) ]
            }) ]
          })
        }), o === "enterprise" && d.suggestion && e(_u.Node, {
          dimColor: !0,
          children: En(d.suggestion)
        }) ]
      }, `error-${kr}`);
    }, i[25] = p, i[26] = o, i[27] = P; else P = i[27];
    G = c.map(P);
    i[21] = p, i[22] = c, i[23] = o, i[24] = G;
  } else G = i[24];
  let P;
  if (i[28] !== p || i[29] !== t) {
    let y;
    if (i[31] !== p) y = (E, Ar) => {
      let nr = E.mcpErrorMetadata?.serverName;
      let Vr = E.file && E.file !== p;
      return e(_u.Node, {
        children: r(n, {
          children: [ e(n, {
            color: "warning",
            children: "[Warning]"
          }), r(n, {
            dimColor: !0,
            children: [ " ", Vr && `(${E.file}) `, nr && `[${En(nr)}] `, E.path && E.path !== "" ? `${En(E.path)}: ` : "", En(E.message) ]
          }) ]
        })
      }, `warning-${Ar}`);
    }, i[31] = p, i[32] = y; else y = i[32];
    P = t.map(y);
    i[28] = p, i[29] = t, i[30] = P;
  } else P = i[30];
  let y;
  if (i[33] !== G || i[34] !== P) y = e(s, {
    marginLeft: 1,
    children: r(_u, {
      variant: "tree",
      children: [ G, P ]
    })
  }), i[33] = G, i[34] = P, i[35] = y; else y = i[35];
  let ir;
  if (i[36] !== y || i[37] !== W || i[38] !== j) ir = r(s, {
    flexDirection: "column",
    marginTop: 1,
    children: [ W, j, y ]
  }), i[36] = y, i[37] = W, i[38] = j, i[39] = ir; else ir = i[39];
  return ir;
}

function hyt() {
  let l = w(3), o;
  if (l[0] === S) {
    let c = [ {
      scope: "user",
      config: cf("user")
    }, {
      scope: "project",
      config: cf("project")
    }, {
      scope: "local",
      config: cf("local")
    }, {
      scope: "managed",
      config: cf("managed")
    }, {
      scope: "enterprise",
      config: cf("enterprise")
    } ];
    let t = kpr(c.filter(Sr).map(yr));
    o = {
      scopes: or(c, {
        enterpriseActive: Yy(),
        mcpLocked: bd("mcp"),
        isProjectServerApproved: Rr
      }),
      conflicts: t
    };
    l[0] = o;
  } else o = l[0];
  let {scopes: a, conflicts: g} = o, i = a.some(Wr), u = g.length > 0 || a.some(xr);
  if (!i && !u) {
    return null;
  }
  let m;
  if (l[1] === S) m = e(L, {
    title: "MCP config diagnostics",
    status: i ? "error" : "warning"
  }), l[1] = m; else m = l[1];
  let h;
  if (l[2] === S) h = r(s, {
    flexDirection: "column",
    marginTop: 1,
    marginBottom: 1,
    children: [ m, e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        children: [ "For help configuring MCP servers, see:", " ", e(zt, {
          url: "https://code.claude.com/docs/en/mcp",
          children: "https://code.claude.com/docs/en/mcp"
        }) ]
      })
    }), a.map(Fr), g.length > 0 && r(s, {
      flexDirection: "column",
      marginTop: 1,
      children: [ e(n, {
        color: "warning",
        children: "[Conflicting scopes]"
      }), e(_u, {
        variant: "tree",
        children: g.map($r)
      }) ]
    }) ]
  }), l[2] = h; else h = l[2];
  return h;
}

function N(l, o) {
  return l.filter(c => c.mcpErrorMetadata?.severity === o);
}

function or(l, o) {
  let c = (t, a) => {
    if (!(a in t.config.servers)) return !1;
    if (t.scope === "project") return o.isProjectServerApproved(a);
    return !0;
  };
  return l.map((t, a) => {
    let g = !dCe(t.scope) && (o.enterpriseActive || o.mcpLocked), i = l.slice(a + 1), u = m => i.some(h => c(h, m));
    return {
      ...t,
      config: {
        ...t.config,
        errors: t.config.errors.filter(m => {
          if (m.mcpErrorMetadata?.severity !== "warning") return !0;
          if (g) return !1;
          let h = m.mcpErrorMetadata.serverName;
          return !h || !u(h);
        })
      }
    };
  });
}

export { hyt };
