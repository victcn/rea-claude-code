// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke, ux, px, _Ee, Bdn, yL, Qje } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { E, jt } from "./chunk-b0z4bv3v.js";

import { Ln } from "./chunk-ddr690nj.js";

import { a } from "./chunk-j016gcgm.js";

import { uo, ag, Iu, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { bE, fe } from "./chunk-dd98x6x7.js";

import { Xan, Pee, GNt } from "./chunk-9yajep3y.js";

import { i } from "./chunk-hedpgw9m.js";

import { le } from "./chunk-cqgvwwgb.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { pp } from "./chunk-r276nwd3.js";

import { bn } from "./chunk-1z2heevg.js";

import { FO, Jm, W0, STo, IBe } from "./chunk-xywp7esx.js";

import { Man } from "./chunk-0481pkch.js";

import { yd } from "./chunk-3xtsjx0y.js";

import { Q8t } from "./chunk-z09tf6qf.js";

import { u0, p0, I0n } from "./chunk-sqb9meyh.js";

import { Pa, H7t, iFe, Voe, K7t } from "./chunk-4v78v8fd.js";

import { A1 } from "./chunk-h36n2zxz.js";

import { dQ, c3, Ins, Qkt, Zkt, ab, AYt, Mns, Dns, Aar, N0e, jA, ORn, Uns, sLe, yp, cst, nd, o8t } from "./chunk-84yp45y8.js";

import { LS, Fd } from "./chunk-km6d4a9r.js";

import { IZt } from "./chunk-bsv3mc5z.js";

import { fH, Qd } from "./chunk-htg8b98h.js";

import { qe } from "./chunk-r8a304y3.js";

import { b8t } from "./chunk-bkx9v5fh.js";

import { One } from "./chunk-f666ssrg.js";

import { D } from "./chunk-hmqkrrtz.js";

import { homedir as N } from "os";

import { realpath as x, stat as O } from "fs/promises";

import { dirname as j, parse as G } from "path";

var R = "Cd";

function b(e, r) {
  let s = D([ ...uo(e.requestedPath), e.canonicalPath ]), n = D([ e.canonicalPath, K7t(e.canonicalPath) ]), l = (o, m, f) => f.some(g => F(o, m, g));
  for (let o of Qd(r)) {
    if (o.ruleValue.toolName !== R) continue;
    let m = o.ruleValue.ruleContent;
    if (m === void 0 || l(m, o.source, s)) return {
      result: "blockedByRule",
      rule: o
    };
  }
  let u = fH(r).filter(o => o.ruleValue.toolName === R);
  if (u.length === 0) return {
    result: "allowed"
  };
  for (let o of u) {
    let m = o.ruleValue.ruleContent;
    if (m === void 0 || l(m, o.source, n)) return {
      result: "allowed"
    };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: u.map(o => o.ruleValue.ruleContent).filter(o => o !== void 0)
  };
}

function F(e, r, s) {
  let {relativePattern: n, root: l} = Voe(e, r), u = iFe(l ?? le(), s);
  if (u === ".." || u.startsWith("../")) return !1;
  let o = n.replace(/\/{2,}/g, "/").replace(/^\//, "").replace(/\/$/, "");
  return B(o).test(u);
}

function B(e) {
  let r = "^";
  for (let s = 0; s < e.length; s++) {
    let n = e[s];
    if (s === 0 && n === "*" && e[1] === "*" && e[2] === "/") r += "(?:.*/)?", s += 2; else if (n === "/" && e[s + 1] === "*" && e[s + 2] === "*") r += "(/.*)?", 
    s += 2; else if (n === "*") if (e[s + 1] === "*") r += ".*", s++; else r += "[^/]+"; else if ("\\^$.|?+()[]{}".includes(n)) r += `\\${n}`; else r += n;
  }
  return new RegExp(`${r}$`, "i");
}

async function Uge(e, r) {
  if (await H(e)) return yL(!0), Qje(!0), !1;
  return STo(e, r);
}

async function H(e) {
  let r = async s => {
    let n = s;
    try {
      n = await x(s);
    } catch {}
    return pp(Ln(n));
  };
  return await r(e) === await r(N());
}

async function IXn(e, r) {
  let s = ot(e);
  try {
    if (!(await O(s)).isDirectory()) return {
      result: "not_a_directory",
      path: s,
      parent: j(s)
    };
  } catch (o) {
    if (!jt(o)) d(Object.assign(Error("cd: unexpected stat errno"), {
      code: E(o)
    }));
    return {
      result: "not_found",
      path: s
    };
  }
  let n = s;
  try {
    n = await x(s);
  } catch {
    n = s;
  }
  let l = Ln(n);
  if (l === le() && l === ke()) return {
    result: "same",
    directory: n
  };
  let u = b({
    requestedPath: s,
    canonicalPath: n
  }, r);
  if (u.result !== "allowed") return {
    result: "blocked_by_rule",
    directory: n,
    check: u
  };
  return {
    result: "ok",
    directory: n
  };
}

function OXn(e, r, s = l => l, n) {
  let l = n?.terminalAffordances !== !1, u = n?.display ?? (o => o);
  if (e = u(e), r.result === "blockedByRule") {
    let o = u(bn(r.rule.ruleValue)), m = sLe(r.rule.source);
    if (r.rule.ruleValue.ruleContent === void 0) return l ? `Can't move to ${s(e)} \u2014 /cd is turned off by the ${s(o)} rule in ${m}. Update the rule in /permissions to move between directories again.` : `Can't move to ${s(e)} \u2014 directory changes are turned off by the ${s(o)} permission rule in ${m}.`;
    return l ? `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} rule in ${m}. Pick a directory outside that rule, or update it in /permissions.` : `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} permission rule in ${m}. Pick a directory outside that rule.`;
  }
  return l ? `Can't move to ${s(e)} \u2014 /cd is limited to directories matching ${r.allowedPatterns.map(o => s(u(o))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.` : `Can't move to ${s(e)} \u2014 directory changes are limited to ${r.allowedPatterns.map(o => s(u(o))).join(", ")}. Pick a matching directory.`;
}

async function U(e, r, s) {
  if (a.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let n = new Set;
  for (let y of await ab(e, !1, s)) n.add(pp(y.path));
  let l = [], u = r;
  while (u !== G(u).root) l.push(u), u = j(u);
  let o = Qkt(r), {held: m, keep: f} = Ins(e), g = [];
  for (let y of l.reverse()) g.push(...await Aar(y, r, n, {
    skipProject: Zkt(y, o),
    held: y === r ? m?.within : m?.above(y)
  }));
  return f(), Dns(g);
}

async function obt(e, r, s, {storageV5: n, credentials: l, freshSession: u = !1, confirmFresh: o, requestBuilt: m} = {}) {
  let f = le(), g = ke(), y = D([ g, f ]), k = D([ ...fe("projectSettings")?.permissions?.additionalDirectories ?? [], ...fe("localSettings")?.permissions?.additionalDirectories ?? [] ].flatMap(p => {
    try {
      return y.map(S => ot(p, S));
    } catch {
      return [];
    }
  }));
  ag(r), yp(r), px(le());
  let w = !0;
  try {
    await cst(n);
  } catch (p) {
    w = !1;
    let S = !1;
    try {
      ag(f), S = !0;
    } catch {
      t(`directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${p}`, {
        level: "error"
      });
    }
    if (S) throw yp(f), px(g), p;
  }
  if (w) try {
    await Q8t(le(), n);
  } catch (p) {
    t(`directory move: bg session state rehome failed (continuing): ${p}`, {
      level: "error"
    });
  }
  IBe();
  try {
    await Pa.rehome();
  } catch (p) {
    t(`directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${p}`, {
      level: "error"
    });
  }
  try {
    A1(), Pa.notifyChange("projectSettings", {
      prevCwd: g
    });
  } catch (p) {
    t(`directory move: re-resolving settings and hooks for the new directory failed (continuing): ${p}`, {
      level: "error"
    });
  }
  try {
    await One.rehome();
  } catch (p) {
    t(`directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${p}`, {
      level: "error"
    });
  }
  let h = u && (o === void 0 || o());
  if (h) _Ee(le()); else try {
    await o8t(await dQ("skills", le()));
  } catch (p) {
    t(`directory move: registering the new directory's skills failed (continuing without them): ${p}`, {
      level: "error"
    });
  }
  if (Pee(), GNt(e), yd()?.refreshGitBranch?.(), qe.refreshConfig(), I0n(), i("tengu_cd_command", {
    source: c(s),
    fresh_session: h
  }), h) {
    try {
      c3(), AYt(e, "session_start"), Mns(e), Uns(e), IZt.of(e).clear(), ORn(e), Bdn(null), 
      Man(), Xan(), Fd.cache.clear?.(), LS(n), FO().reset(), N0e(e), jA(e, n, l);
    } catch (p) {
      t(`directory move: re-deriving start-of-session state for the new directory failed (continuing): ${p}`, {
        level: "error"
      });
    }
    return {
      modelMessage: "",
      transcriptRelocated: w,
      projectGrantsGated: !1,
      gatedNotice: "",
      departedAdditionalDirectories: k,
      freshSession: !0
    };
  }
  let C = "";
  try {
    C = await U(e, r, n);
  } catch (p) {
    t(`directory move: loading the new directory's memory context failed (continuing without it): ${p}`, {
      level: "error"
    });
  }
  let v = Iu(r), T = s === "cd_command" ? "via /cd" : "by the user", A = m === void 0 || m() ? "The environment block at the start of this conversation still names the " + "previous directory \u2014 that information is stale. " : "", M = nd(`The session's working directory has changed to ${v} (${T}). ` + A + `All tool calls and relative paths now resolve from ${v}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${v}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's ` + "settings stay in effect for this process \u2014 they cannot be unset \u2014 and " + "the new directory's settings env is applied on top of them."), P = !1;
  try {
    P = !a.CLAUDE_CODE_SANDBOXED && !ux() && !Jm() && H7t();
  } catch (p) {
    t(`directory move: probing the gated project grants failed (continuing): ${p}`, {
      level: "error"
    });
  }
  let _ = P ? nd(`Note: ${v} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`) : "";
  return {
    modelMessage: [ M, _, C ].filter(Boolean).join(`\n\n`),
    transcriptRelocated: w,
    projectGrantsGated: P,
    gatedNotice: _,
    departedAdditionalDirectories: k,
    freshSession: !1
  };
}

function MXn() {
  IBe(), A1(), Pa.notifyChange("projectSettings", {
    trustFlip: !0
  });
}

function HXn(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(e.gatedNotice, nd("The user trusted this directory explicitly: its project permission rules and additional directories are now applied."));
}

function p1s(e, r) {
  return b8t.test(e) ? r : e;
}

async function Mqs(e, r) {
  if (r.isBusy()) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "busy",
      message: "A turn is in progress \u2014 the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry."
    }
  };
  if (typeof e.path !== "string" || e.path.trim() === "") return {
    kind: "invalid",
    message: "set_cwd: invalid request \u2014 path must be a non-empty string"
  };
  let s = e.trust_accepted === !0;
  if (s && typeof e.trusted_directory !== "string") return {
    kind: "invalid",
    message: "set_cwd: invalid request \u2014 trust_accepted requires trusted_directory (echo the directory from the needs_trust response)"
  };
  let n = !1;
  try {
    n = u0(e.path, ot(e.path), r.toolPermissionContext.trustedNetworkDirectories).ok;
  } catch {
    n = !1;
  }
  if (!n) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
    }
  };
  let l = await IXn(e.path.trim(), r.toolPermissionContext), u = "directory" in l ? l.directory : l.path;
  if (b8t.test(u)) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back."
    }
  };
  if ("directory" in l && p0(l.directory, r.toolPermissionContext.trustedNetworkDirectories) !== void 0) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "unsafe_path",
      message: "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
    }
  };
  if (l.result === "not_found") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_found",
      message: `Couldn't find a directory at ${l.path}.`
    }
  };
  if (l.result === "not_a_directory") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "not_a_directory",
      message: `${l.path} is not a directory.`
    }
  };
  if (l.result === "blocked_by_rule") return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "blocked_by_rule",
      message: p1s(OXn(l.directory, l.check, void 0, {
        terminalAffordances: !1
      }), "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings.")
    }
  };
  if (l.result === "same") return {
    kind: "response",
    response: {
      status: "ok",
      cwd: l.directory,
      changed: !1,
      transcript_relocated: !0
    }
  };
  let o = l.directory;
  if (!W0(o)) {
    let h = bE(o), C = h != null && h !== o && !b8t.test(h) ? h : void 0;
    if (!s) return {
      kind: "response",
      response: C != null ? {
        status: "needs_trust",
        directory: o,
        trust_root: C
      } : {
        status: "needs_trust",
        directory: o
      }
    };
    if (e.trusted_directory !== o) return {
      kind: "response",
      response: C != null ? {
        status: "needs_trust",
        directory: o,
        trust_root: C
      } : {
        status: "needs_trust",
        directory: o
      }
    };
    await Uge(o, r.storageV5);
  }
  if (r.isBusy()) return {
    kind: "response",
    response: {
      status: "rejected",
      reason: "busy",
      message: "A turn started while the request was being validated. Retry when the session is idle."
    }
  };
  let m = r.isFreshSession(), {modelMessage: f, transcriptRelocated: g, departedAdditionalDirectories: y, freshSession: k} = await obt(r.session, o, "set_cwd", {
    storageV5: r.storageV5,
    credentials: r.credentials,
    freshSession: m,
    confirmFresh: () => !r.isBusy() && r.isFreshSession(),
    requestBuilt: r.requestBuilt
  });
  try {
    r.retireDepartedAdditionalDirectories?.(y);
  } catch (h) {
    t(`set_cwd: retiring the previous project's additional directories failed (continuing): ${h}`, {
      level: "error"
    });
  }
  try {
    if (f) r.enqueueMoveNotice(f);
  } catch (h) {
    t(`set_cwd: enqueueing the move notice failed (continuing): ${h}`, {
      level: "error"
    });
  }
  let w = le();
  return {
    kind: "response",
    response: {
      status: "ok",
      cwd: b8t.test(w) ? o : w,
      changed: !0,
      transcript_relocated: g
    },
    freshSession: k
  };
}

export { Uge, IXn, OXn, obt, MXn, HXn, p1s, Mqs };
