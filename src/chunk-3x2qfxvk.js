// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Xu } from "./chunk-b0z4bv3v.js";

import { B } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { sln } from "./chunk-9yajep3y.js";

import { Exn, v5t, SZr, Hs } from "./chunk-84yp45y8.js";

import { te } from "./chunk-48xcyvwy.js";

import { Hd } from "./chunk-rh1cb6gh.js";

import { w } from "./chunk-9rj1xaxr.js";

import { pl } from "./chunk-1pxjahnn.js";

import { Pe } from "./chunk-7w995nyx.js";

import { s, n } from "./chunk-3vw306fv.js";

import { rt } from "./chunk-ytac37d4.js";

import { VQe } from "./chunk-vj7j58pv.js";

import { a_t } from "./chunk-a5nr78wg.js";

import { be } from "./chunk-gqmex880.js";

import { G } from "./chunk-j706jx8h.js";

import { DE } from "./chunk-vyvnan99.js";

import { sr } from "./chunk-stbhy0k1.js";

import { hi } from "./chunk-vks3d7q4.js";

import { dke } from "./chunk-g731243z.js";

import { _o } from "./chunk-2enjs241.js";

import { Bv, PI } from "./chunk-wwjrcnvz.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { ae, P, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

F();

function O({onStashAndContinue: T, onCancel: d, cancelQuits: l}) {
  let [f, A] = y(null), m = f !== null ? [ ...f.tracked, ...f.untracked ] : [], [z, E] = y(!0), [x, c] = y(!1), [L, I] = y(null);
  P(() => {
    (async () => {
      try {
        let {cwd: o} = v5t(), h = await sln(o, Hd(o));
        A(h);
      } catch (o) {
        let h = o instanceof Error ? o.message : String(o);
        t(`Error getting changed files: ${h}`, {
          level: "error"
        }), I(o instanceof Xu ? o.message : "Failed to get changed files");
      } finally {
        E(!1);
      }
    })();
  }, []);
  let v = async () => {
    c(!0);
    try {
      if (t("Stashing changes before teleport..."), !await SZr("Teleport auto-stash", v5t())) {
        I("Failed to stash changes"), c(!1);
        return;
      }
      t("Successfully stashed changes");
    } catch (i) {
      let o = i instanceof Error ? i.message : String(i);
      t(`Error stashing changes: ${o}`, {
        level: "error"
      }), I(i instanceof Xu ? i.message : "Failed to stash changes"), c(!1);
      return;
    }
    try {
      await T();
    } finally {
      c(!1);
    }
  };
  if (z) return e(s, {
    flexDirection: "column",
    padding: 1,
    children: r(s, {
      marginBottom: 1,
      children: [ e(hi, {}), r(n, {
        children: [ " Checking git status", te.ellipsis ]
      }) ]
    })
  });
  if (L) return r(s, {
    flexDirection: "column",
    padding: 1,
    children: [ r(n, {
      bold: !0,
      color: "error",
      children: [ "Error: ", L ]
    }), e(s, {
      marginTop: 1,
      children: e(n, {
        dimColor: !0,
        children: e(G, {
          chord: "escape",
          action: "cancel",
          bold: !0
        })
      })
    }) ]
  });
  let a = m.length > 8, u = x && !l;
  return r(be, {
    title: "Working directory has changes",
    onCancel: u ? he : d,
    exitOnCtrlCD: l || u,
    inputGuide: u ? "Teleport continues when the stash finishes\u2026" : void 0,
    children: [ e(n, {
      children: "Teleport will switch git branches. The following changes were found:"
    }), e(s, {
      flexDirection: "column",
      paddingLeft: 2,
      children: m.length > 0 ? a ? r(n, {
        children: [ m.length, " files changed" ]
      }) : m.map((i, o) => e(n, {
        children: i
      }, o)) : e(_o, {
        children: "No changes detected"
      })
    }), e(n, {
      children: "Would you like to stash these changes and continue with teleport?"
    }), x ? r(s, {
      children: [ e(hi, {}), e(n, {
        children: " Stashing changes..."
      }) ]
    }) : e(sr, {
      confirmLabel: "Stash changes and continue",
      cancelLabel: l ? "Exit" : "Cancel",
      onConfirm: () => void v(),
      onCancel: d
    }) ]
  }, u ? "stashing" : "asking");
}

function he() {}

function xe() {
  return Hs(0);
}

var Z = new Set;

function sfn(T) {
  let a = w(32), {onComplete: d, onCancel: l, errorsToIgnore: f, isStandalone: A} = T, m = f === void 0 ? Z : f, z = A === void 0 ? !1 : A, [E, x] = y(null), [c, L] = y(!1), I = pl(), {credentials: v} = Pe(), u;
  if (a[0] !== v || a[1] !== m || a[2] !== d) u = async () => {
    let i = await Exn(v, m);
    if (i.size === 0) {
      d();
      return;
    }
    if (i.has("needsLogin")) x("needsLogin"); else if (i.has("needsGitStash")) x("needsGitStash");
  }, a[0] = v, a[1] = m, a[2] = d, a[3] = u; else u = a[3];
  let o = u, h, le;
  if (a[4] !== o) h = () => {
    o();
  }, le = [ o ], a[4] = o, a[5] = h, a[6] = le; else h = a[5], le = a[6];
  P(h, le);
  let g = l === void 0, p = l ?? xe, ce;
  if (a[7] !== o) ce = () => {
    L(!1), o();
  }, a[7] = o, a[8] = ce; else ce = a[8];
  let M = ce, ge;
  if (a[9] === S) ge = () => {
    L(!0);
  }, a[9] = ge; else ge = a[9];
  let Le = ge, de;
  if (a[10] !== o) de = () => o(), a[10] = o, a[11] = de; else de = a[11];
  let Y = de, {entries: J, exitState: me} = a_t(l, void 0, l !== void 0 && c);
  const U = z && E === "needsGitStash";
  let pe;
  if (a[12] !== U) pe = {
    context: "Confirmation",
    isActive: U
  }, a[12] = U, a[13] = pe; else pe = a[13];
  if (rt("confirm:no", p, pe), !E) {
    return null;
  }
  switch (E) {
   case "needsGitStash":
    {
      let C;
      if (a[14] !== g || a[15] !== Y || a[16] !== p) C = e(O, {
        onStashAndContinue: Y,
        onCancel: p,
        cancelQuits: g
      }), a[14] = g, a[15] = Y, a[16] = p, a[17] = C; else C = a[17];
      return C;
    }

   case "needsLogin":
    {
      const C = I ? PI : Bv;
      let ue;
      if (a[18] !== M || a[19] !== C) ue = e(dke, {
        onDone: M,
        mode: "login",
        forceLoginMethod: "claudeai",
        urlOutdent: C
      }), a[18] = M, a[19] = C, a[20] = ue; else ue = a[20];
      let q = ue;
      const V = c ? M : p;
      const X = me.pending ? `Press ${me.keyName} again to cancel` : void 0;
      let N;
      if (a[21] !== g || a[22] !== c || a[23] !== J || a[24] !== p || a[25] !== q) N = c ? g ? q : e(DE, {
        claimFocus: !0,
        flexDirection: "column",
        bindings: J,
        children: q
      }) : r(Q, {
        children: [ r(s, {
          flexDirection: "column",
          children: [ e(n, {
            dimColor: !0,
            children: "Teleport requires a Claude.ai account."
          }), e(n, {
            dimColor: !0,
            children: "Your Claude Pro/Max subscription will be used by Claude Code."
          }) ]
        }), e(sr, {
          confirmLabel: "Login with Claude account",
          cancelLabel: g ? "Exit" : "Cancel",
          onConfirm: Le,
          onCancel: p
        }) ]
      }), a[21] = g, a[22] = c, a[23] = J, a[24] = p, a[25] = q, a[26] = N; else N = a[26];
      let fe;
      if (a[27] !== g || a[28] !== V || a[29] !== X || a[30] !== N) fe = e(be, {
        title: "Log in to Claude",
        onCancel: V,
        exitOnCtrlCD: g,
        inputGuide: X,
        children: N
      }), a[27] = g, a[28] = V, a[29] = X, a[30] = N, a[31] = fe; else fe = a[31];
      return fe;
    }
  }
}

function UKs(T, d) {
  return VQe(T, [ l => e(sfn, {
    errorsToIgnore: d,
    onComplete: () => l(),
    isStandalone: !0
  }) ], {
    session: B()
  });
}

export { sfn, UKs };
