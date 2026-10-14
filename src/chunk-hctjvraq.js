// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lFt } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { Xu, l } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { so } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { Lko } from "./chunk-xywp7esx.js";

import { ut, kj } from "./chunk-yxennhe9.js";

import { pi } from "./chunk-s2t7g8m9.js";

import { mXe } from "./chunk-0481pkch.js";

import { dLe } from "./chunk-84yp45y8.js";

import { w } from "./chunk-9rj1xaxr.js";

import { s, n } from "./chunk-3vw306fv.js";

import { rt } from "./chunk-ytac37d4.js";

import { G } from "./chunk-j706jx8h.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { is } from "./chunk-1pxjahnn.js";

import { ms } from "./chunk-zzj636ts.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { Se } from "./chunk-sebqm9p5.js";

import { hi } from "./chunk-vks3d7q4.js";

import { $r } from "./chunk-mggq5sa8.js";

import { sfn } from "./chunk-3x2qfxvk.js";

import { Ik } from "./chunk-rv6y1pjz.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { ae, P, y, F } from "./chunk-cpyd3eya.js";

import { ye } from "./chunk-ne9evs39.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

F();

function z(R) {
  let g = w(8), [a, b] = y(!1), [p, k] = y(null), [u, K] = y(null), H;
  if (g[0] !== R) H = async d => {
    b(!0), k(null), K(d), i("tengu_teleport_resume_session", {
      source: c(R),
      session_id: ye(d.id)
    });
    try {
      let m = await so("teleport_resume", () => dLe(d.id));
      return lFt({
        sessionId: d.id
      }), b(!1), m;
    } catch (x) {
      let C = x;
      let W = {
        message: C instanceof Xu ? C.message : l(C),
        formattedMessage: C instanceof Xu ? C.formattedMessage : void 0,
        isOperationError: C instanceof Xu
      };
      return k(W), b(!1), null;
    }
  }, g[0] = R, g[1] = H; else H = g[1];
  let v = H, x;
  if (g[2] === S) x = () => {
    k(null);
  }, g[2] = x; else x = g[2];
  let U = x, L;
  if (g[3] !== p || g[4] !== a || g[5] !== v || g[6] !== u) L = {
    resumeSession: v,
    isResuming: a,
    error: p,
    selectedSession: u,
    clearError: U
  }, g[3] = p, g[4] = a, g[5] = v, g[6] = u, g[7] = L; else L = g[7];
  return L;
}

F();

var pe = "Updated", fe = "Origin", ge = "Remote Control", ie = Math.max(fe.length, ge.length), O = "  ";

function le({onSelect: R, onCancel: a, isEmbedded: b = !1}) {
  let {rows: p, columns: k} = is(Te()), [u, K] = y([]), [g, H] = y(null), [d, x] = y(!0), [m, C] = y(null), [W, v] = y(!1), [U, L] = y(!1), [Y, V] = y(1), I = ms("confirm:no", "Confirmation", "Esc"), M = ae(async () => {
    try {
      x(!0), C(null);
      let o = await mXe();
      H(o), t(`Current repository: ${o || "not detected"}`);
      let f = await Lko(), E = f;
      if (o) E = f.filter(B => {
        if (!B.repo) return !1;
        return `${B.repo.owner.login}/${B.repo.name}` === o;
      }), t(`Filtered ${E.length} sessions for repo ${o} from ${f.length} total`);
      let re = [ ...E ].sort((B, te) => {
        let be = new Date(B.updated_at);
        return new Date(te.updated_at).getTime() - be.getTime();
      });
      K(re);
    } catch (o) {
      let f = o instanceof Error ? o.message : String(o);
      t(`Error loading code sessions: ${f}`), C(Fe(f));
    } finally {
      x(!1), v(!1);
    }
  }, []), J = () => {
    v(!0), M();
  };
  rt("confirm:no", a, {
    context: "Confirmation"
  });
  function D(o) {
    if (o.ctrl && o.key === "c") {
      o.preventDefault(), a();
      return;
    }
    if (o.ctrl && o.key === "r" && m) {
      o.preventDefault(), J();
      return;
    }
    if (m !== null && o.key === "return") {
      o.preventDefault(), a();
      return;
    }
  }
  let X = ae(() => {
    L(!0), M();
  }, [ L, M ]);
  if (!U) return e(sfn, {
    onComplete: X,
    onCancel: b ? a : void 0
  });
  if (d) return e(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: D,
    children: e($r, {
      message: "Loading Claude Code sessions\u2026",
      bold: !0,
      subtitle: W ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026"
    })
  });
  if (m) return r(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: D,
    children: [ e(n, {
      bold: !0,
      color: "error",
      children: "Error loading Claude Code sessions"
    }), Ne(m), r(n, {
      dimColor: !0,
      children: [ "Press ", e(n, {
        bold: !0,
        children: "Ctrl+R"
      }), " to retry \xb7 Press", " ", e(n, {
        bold: !0,
        children: I
      }), " to cancel" ]
    }) ]
  });
  if (u.length === 0) return r(s, {
    flexDirection: "column",
    padding: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: D,
    children: [ r(n, {
      bold: !0,
      children: [ "No Claude Code sessions found", g && r(n, {
        children: [ " for ", g ]
      }) ]
    }), e(s, {
      marginTop: 1,
      children: r(n, {
        dimColor: !0,
        children: [ "Press ", e(n, {
          bold: !0,
          children: I
        }), " to cancel" ]
      })
    }) ]
  });
  let T = u.map(o => ({
    ...o,
    timeString: kj(new Date(o.updated_at))
  })), h = Math.max(pe.length, ...T.map(o => o.timeString.length)), A = u.some(o => o.environment_kind === "bridge"), Z = A ? ie + O.length : 0, me = String(u.length).length + 2, he = k - 4 - me - h - O.length - Z, ue = T.map(({timeString: o, title: f, id: E, environment_kind: re}) => {
    let B = o.padEnd(h, " ");
    return {
      label: r(Q, {
        children: [ B, O, A && r(Q, {
          children: [ e(n, {
            dimColor: !0,
            children: (re === "bridge" ? ge : "").padEnd(ie, " ")
          }), O ]
        }), ut(pi(f).replace(/\s+/g, " ").trim(), he) ]
      }),
      value: E
    };
  }), ee = 7, oe = Math.max(1, b ? Math.min(u.length, 5, p - 6 - ee) : Math.min(u.length, p - 1 - ee)), Re = oe + ee, Ee = u.length > oe;
  return r(s, {
    flexDirection: "column",
    padding: 1,
    height: Re,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: D,
    children: [ r(n, {
      bold: !0,
      children: [ "Select a session to resume", Ee && r(n, {
        dimColor: !0,
        children: [ " ", "(", Y, " of ", u.length, ")" ]
      }), g && r(n, {
        dimColor: !0,
        children: [ " (", g, ")" ]
      }), ":" ]
    }), r(s, {
      flexDirection: "column",
      marginTop: 1,
      flexGrow: 1,
      children: [ e(s, {
        marginLeft: 2 + me,
        children: r(n, {
          bold: !0,
          children: [ pe.padEnd(h, " "), O, A && fe.padEnd(ie, " ") + O, "Session Title" ]
        })
      }), e(Xe, {
        visibleOptionCount: oe,
        options: ue,
        onChange: o => {
          let f = u.find(E => E.id === o);
          if (f) R(f);
        },
        onFocus: o => {
          let f = ue.findIndex(E => E.value === o);
          if (f >= 0) V(f + 1);
        }
      }) ]
    }), e(s, {
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: r(Se, {
          children: [ e(G, {
            chord: [ "up", "down" ],
            action: "select"
          }), e(G, {
            chord: "enter",
            action: "confirm"
          }), e(pt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
          }) ]
        })
      })
    }) ]
  });
}

function Fe(R) {
  let a = R.toLowerCase();
  if (a.includes("fetch") || a.includes("network") || a.includes("timeout")) return "network";
  if (a.includes("auth") || a.includes("token") || a.includes("permission") || a.includes("oauth") || a.includes("not authenticated") || a.includes("/login") || a.includes("console account") || a.includes("403")) return "auth";
  if (a.includes("api") || a.includes("rate limit") || a.includes("500") || a.includes("529")) return "api";
  return "other";
}

function Ne(R) {
  switch (R) {
   case "network":
    return e(s, {
      marginY: 1,
      flexDirection: "column",
      children: e(n, {
        dimColor: !0,
        children: "Check your internet connection"
      })
    });

   case "auth":
    return r(s, {
      marginY: 1,
      flexDirection: "column",
      children: [ e(n, {
        dimColor: !0,
        children: "Teleport requires a Claude account"
      }), r(n, {
        dimColor: !0,
        children: [ "Run ", e(n, {
          bold: !0,
          children: "/login"
        }), ' and select "Claude account with subscription"' ]
      }) ]
    });

   case "api":
    return e(s, {
      marginY: 1,
      flexDirection: "column",
      children: e(n, {
        dimColor: !0,
        children: "Sorry, Claude encountered an error"
      })
    });

   case "other":
    return e(s, {
      marginY: 1,
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: "Sorry, Claude Code encountered an error"
      })
    });
  }
}

function OQe(R) {
  let m = w(30), {onComplete: a, onCancel: b, onError: p, isEmbedded: k, source: u} = R, K = k === void 0 ? !1 : k, {resumeSession: g, isResuming: H, error: d, selectedSession: x} = z(u), C, W;
  if (m[0] !== u) C = () => {
    i("tengu_teleport_started", {
      source: c(u)
    });
  }, W = [ u ], m[0] = u, m[1] = C, m[2] = W; else C = m[1], W = m[2];
  P(C, W);
  let v;
  if (m[3] !== d || m[4] !== a || m[5] !== p || m[6] !== g) v = async U => {
    let L = await g(U);
    if (L) a(L); else if (d) {
      if (p) p(d.message, d.formattedMessage);
    }
  }, m[3] = d, m[4] = a, m[5] = p, m[6] = g, m[7] = v; else v = m[7];
  let Y = v, V;
  if (m[8] !== b) V = () => {
    i("tengu_teleport_cancelled", {}), b();
  }, m[8] = b, m[9] = V; else V = m[9];
  let I = V;
  const M = !!d && !p;
  let J;
  if (m[10] !== M) J = {
    context: "Global",
    isActive: M
  }, m[10] = M, m[11] = J; else J = m[11];
  rt("app:interrupt", I, J);
  let D;
  if (m[12] !== d || m[13] !== p) D = !!d && !p && Ik(), m[12] = d, m[13] = p, m[14] = D; else D = m[14];
  let X;
  if (m[15] !== D) X = {
    context: "Confirmation",
    isActive: D
  }, m[15] = D, m[16] = X; else X = m[16];
  if (rt("confirm:no", I, X), H && x) {
    let T;
    if (m[17] === S) T = r(s, {
      flexDirection: "row",
      children: [ e(hi, {}), e(n, {
        bold: !0,
        children: "Resuming session\u2026"
      }) ]
    }), m[17] = T; else T = m[17];
    let h;
    if (m[18] !== x.title) h = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [ T, r(n, {
        dimColor: !0,
        children: [ 'Loading "', x.title, '"\u2026' ]
      }) ]
    }), m[18] = x.title, m[19] = h; else h = m[19];
    return h;
  }
  if (d && !p) {
    let T;
    if (m[20] === S) T = e(n, {
      bold: !0,
      color: "error",
      children: "Failed to resume session"
    }), m[20] = T; else T = m[20];
    let h;
    if (m[21] !== d.message) h = e(n, {
      dimColor: !0,
      children: d.message
    }), m[21] = d.message, m[22] = h; else h = m[22];
    let A;
    if (m[23] === S) A = e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        italic: !0,
        children: e(G, {
          chord: "escape",
          action: "cancel"
        })
      })
    }), m[23] = A; else A = m[23];
    let Z;
    if (m[24] !== h) Z = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [ T, h, A ]
    }), m[24] = h, m[25] = Z; else Z = m[25];
    return Z;
  }
  let T;
  if (m[26] !== I || m[27] !== Y || m[28] !== K) T = e(le, {
    onSelect: Y,
    onCancel: I,
    isEmbedded: K
  }), m[26] = I, m[27] = Y, m[28] = K, m[29] = T; else T = m[29];
  return T;
}

export { OQe };
