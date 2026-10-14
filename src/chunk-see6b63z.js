// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Te } from "./chunk-dmfz0ptg.js";

import { Ve } from "./chunk-b0z4bv3v.js";

import { w } from "./chunk-9rj1xaxr.js";

import { d } from "./chunk-6ah1819r.js";

import { ds, t } from "./chunk-kawq2919.js";

import { ne, vr } from "./chunk-5wbhf1bk.js";

import { Re } from "./chunk-jzzyv7tj.js";

import { a } from "./chunk-j016gcgm.js";

import { Ol, k } from "./chunk-xywp7esx.js";

import { Pe } from "./chunk-7w995nyx.js";

import { m } from "./chunk-3ykz5st8.js";

import { kr, Dt } from "./chunk-cqgvwwgb.js";

import { sM, pMr } from "./chunk-9yajep3y.js";

import { bi, sZ } from "./chunk-gmq0qwep.js";

import { dr } from "./chunk-y3nc3daq.js";

import { s, n } from "./chunk-3vw306fv.js";

import { rt } from "./chunk-ytac37d4.js";

import { yQ, JD } from "./chunk-84yp45y8.js";

import { us } from "./chunk-wpjx0bxn.js";

import { V } from "./chunk-jb3h1y0s.js";

import { G } from "./chunk-j706jx8h.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { ct } from "./chunk-qk83zz02.js";

import { Se } from "./chunk-sebqm9p5.js";

import { Er } from "./chunk-t54wevgw.js";

import { be } from "./chunk-gqmex880.js";

import { Yyt } from "./chunk-fgwwmvzz.js";

import { iUo, aUo } from "./chunk-hkkpv0df.js";

import { ege, yQe, i6n } from "./chunk-25gpymxv.js";

import { bo } from "./chunk-cqm6ka4q.js";

import { lke } from "./chunk-50e6jyy2.js";

import { ss } from "./chunk-wafhv2dx.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { js } from "./chunk-9g86mkx2.js";

import { M2 } from "./chunk-11vrrr4j.js";

import { Vr, Hr, ae, y, F } from "./chunk-cpyd3eya.js";

import { _s } from "./chunk-1dj3skht.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

F();

F();

var Ro = 7250, _o = 200, ot = "https://github.com/anthropics/claude-code/issues", _e = {
  session: "this session only",
  day: "this session + this project\u2019s other sessions from the last 24 hours",
  week: "this session + this project\u2019s other sessions from the last 7 days"
}, Rt = [ {
  label: "This session only",
  value: "session"
}, {
  label: "This session + the last 24 hours",
  value: "day"
}, {
  label: "This session + the last 7 days",
  value: "week"
} ], Ae = {
  transcript_missing: "This session has no transcript on disk, so the bundle has the report only.",
  transcript_incomplete: "The session transcript couldn't be read in full, so the bundle is missing some or all of it.",
  transcript_over_zip_limit: "The session transcript is too large for one archive, so the bundle has only the start of it."
}, K = {
  post: {
    consentAction: "submit",
    consentIntro: "This report will include:",
    consentFooter: "We may use these to debug related issues and improve Claude Code.",
    submitting: "Submitting report\u2026"
  },
  bundle: {
    consentAction: "save",
    consentIntro: "An archive will be saved to disk containing:",
    consentFooter: "Nothing leaves this machine until you send the bundle file. Secrets (API keys, tokens, credentials) are redacted before writing.",
    submitting: "Saving bundle\u2026"
  },
  share: {
    consentAction: "share",
    consentIntro: "This shared conversation will include:",
    consentFooter: "A shareable link will be created so you can post the conversation for debugging and support.",
    submitting: "Uploading share\u2026"
  }
};

function De(l) {
  let o = _s({
    status: "none"
  }), {subscribe: i, getSnapshot: u} = o;
  if (l === "share") return {
    subscribe: i,
    getSnapshot: u,
    start() {},
    deliver() {},
    save() {},
    fail() {},
    abandon() {}
  };
  return {
    subscribe: i,
    getSnapshot: u,
    start() {
      o.setState(() => ({
        status: "sending"
      }));
    },
    deliver(h) {
      o.setState(() => ({
        status: "delivered",
        referenceId: h
      }));
    },
    save(h, b, p) {
      o.setState(() => ({
        status: "saved",
        referenceId: h,
        bundlePath: b,
        ...p !== void 0 && {
          transcriptProblem: p
        }
      }));
    },
    fail(h) {
      o.setState(b => b.status === "delivered" || b.status === "saved" ? b : {
        status: "failed",
        reason: h
      });
    },
    abandon() {
      o.setState(h => h.status === "sending" ? {
        status: "none"
      } : h);
    }
  };
}

async function _t(l, o) {
  try {
    await l();
  } finally {
    o.abandon();
  }
}

function It({abortController: l, messages: o, initialDescription: i, onDone: u, applyMessageOp: h, backgroundTasks: b = {}, mode: p = "post", readFileState: D, surveyFeedbackSource: v, command: _ = "/feedback", wholeTranscript: H, send: ye}) {
  let {storageV5: ke, credentials: de} = Pe(), ue = us(), [ve, j] = y("userInput"), [Mt, Et] = y(0), [te, xt] = y(i ?? ""), [Lt, Ie] = y(null), [Bt, Nt] = y(null), [Ht, jt] = y(null), [Wt, ie] = y(null), [L] = y(() => ye ?? De(p)), zt = Re(L), [Gt, it] = y(!1), [Vt, qt] = y(null), T = Vt ?? zt, X = p !== "share" && !Gt && T.status !== "none", Xt = X && T.status !== "failed", Jt = T.status === "sending" ? "submitting" : "done", R = Xt ? Jt : ve, Yt = X && T.status === "failed" ? T.reason : null, B = Wt ?? Yt, le = X && (T.status === "delivered" || T.status === "saved") ? T.referenceId : Lt, pe = X && T.status === "saved" ? T.bundlePath : Bt, Ce = X && T.status === "saved" ? T.transcriptProblem ?? null : Ht, me = Dt(), lt = me ? kr()?.sessionId ?? null : null, [Zt] = y(() => me ? Promise.resolve(null) : sM().then(f => f ? pMr() : null).catch(() => null)), [dt, Kt] = y(null), [fe, Qt] = y("session"), $e = V(f => f.transcripts), eo = Te().columns - 4, $o = lke(), we = k("tengu_amber_lynx", !1), ut = ae(async () => {
    j("submitting"), ie(null), Ie(null), L.start();
    let f = oe => {
      ie(oe), j("userInput"), L.fail(oe);
    };
    if (p === "bundle") {
      let oe = sZ(_);
      if (oe !== null) {
        m("feedback_bundle", "disabled_at_save"), f(oe);
        return;
      }
      let J = await i6n({
        messages: o,
        description: te,
        surface: "cli",
        scope: fe,
        backgroundTasks: b,
        transcripts: $e,
        signal: l.signal,
        surveyFeedbackSource: v,
        wholeTranscript: H,
        storageV5: ke,
        host: ue
      });
      if (l.signal.aborted) return;
      if (J.success) Ie(J.bundleId), Nt(J.zipPath), jt(J.transcriptProblem ?? null), j("done"), 
      L.save(J.bundleId, J.zipPath, J.transcriptProblem); else f(`Couldn't save the feedback bundle to disk: ${J.error}`);
      return;
    }
    let [A, no] = await Promise.all([ yQe({
      messages: o,
      description: te,
      surface: "cli",
      scope: fe,
      backgroundTasks: b,
      transcripts: $e,
      signal: l.signal,
      surveyFeedbackSource: v,
      storageV5: ke,
      host: ue,
      credentials: de
    }), we ? Promise.resolve(null) : At(te, l.signal, de) ]);
    if (l.signal.aborted) return;
    if (Kt(no), A.success) Ie(A.feedbackId), j("done"), L.deliver(A.feedbackId); else if (A.isZdrOrg) f("Feedback collection is not available for organizations with custom data retention policies."); else if (A.failureReason === "auth_error") f("Couldn't send feedback: not signed in. Run /login, then retry."); else if (A.failureReason === "policy_blocked") f(sZ(_) ?? "Feedback is disabled by your organization's policy."); else {
      let oe = A.statusCode ? ` (server returned ${A.statusCode})` : A.failureReason === "timeout" ? " (request timed out)" : A.failureReason === "network_error" ? " (couldn't reach the service)" : "";
      f(`Couldn't send feedback${oe}. If it keeps failing, you can file at ${ot} instead.`);
    }
  }, [ te, o, we, b, $e, l, p, fe, ke, de, _, H, L, ue ]), to = ae(() => _t(ut, L), [ ut, L ]), Ue = ae(() => {
    if (X) {
      let f = L.getSnapshot();
      qt(A => A ?? f);
    }
    l.abort(), u("Feedback / bug report cancelled", {
      display: "system"
    });
  }, [ u, l, L, X ]), Uo = ae(() => {
    j("done");
  }, []), Oo = ae(f => {
    ie(f), j("userInput");
  }, []);
  rt("confirm:no", Ue, {
    context: "Settings",
    isActive: R === "userInput"
  });
  let oo = R === "done" || B && R !== "userInput";
  function so(f) {
    if (f.ctrl || f.meta) return;
    if (R === "done") {
      if (f.preventDefault(), p === "share") return;
      if (!we && f.key === "return" && dt) {
        let A = Pt(le ?? "", dt, te);
        js(A);
      }
      if (B) u("Error submitting feedback / bug report", {
        display: "system"
      }); else if (p === "bundle" && pe) u(Ce === null ? `Feedback bundle saved to \`${pe}\`` : `Feedback bundle saved to \`${pe}\`. ${Ae[Ce]}`, {
        display: "system"
      }); else u("Feedback / bug report submitted", {
        display: "system"
      });
      return;
    }
    if (B && R !== "userInput") {
      f.preventDefault(), u("Error submitting feedback / bug report", {
        display: "system"
      });
      return;
    }
    if (R === "consent") {
      if (f.key === "left") {
        f.preventDefault(), j(p === "share" || me ? "userInput" : "scope");
        return;
      }
      if (f.key === "return" || f.key === " ") f.preventDefault(), to();
    }
  }
  return e(bo, {
    onKeyDown: so,
    children: r(be, {
      title: "Submit feedback / bug report",
      onCancel: Ue,
      isCancelActive: R !== "userInput" && !oo,
      hideInputGuide: R === "done",
      inputGuide: R === "userInput" ? r(Se, {
        children: [ e(G, {
          chord: "enter",
          action: "continue"
        }), e(pt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        }) ]
      }) : R === "scope" ? r(Se, {
        children: [ e(G, {
          chord: "enter",
          action: "choose"
        }), e(pt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        }) ]
      }) : R === "consent" ? r(Se, {
        children: [ e(G, {
          chord: "enter",
          action: K[p].consentAction
        }), e(G, {
          chord: "left",
          action: "change"
        }), e(pt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        }) ]
      }) : null,
      children: [ R === "userInput" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [ e(n, {
          children: "Describe the issue below:"
        }), e(Er, {
          value: te,
          onChange: f => {
            if (xt(f), it(!0), B) ie(null);
          },
          columns: eo,
          onSubmit: f => {
            if (it(!0), p !== "share" && f.trim() === "") {
              ie("Please describe the issue before submitting.");
              return;
            }
            ie(null), j(p === "share" || me ? "consent" : "scope");
          },
          onExitMessage: f => {
            if (f) l.abort(), u("Feedback cancelled", {
              display: "system"
            });
          },
          cursorOffset: Mt,
          onChangeCursorOffset: Et,
          showCursor: !0,
          focus: !0
        }), B && r(s, {
          flexDirection: "column",
          gap: 1,
          children: [ e(ss, {
            error: B
          }), e(n, {
            dimColor: !0,
            children: "Edit and press Enter to retry, or Esc to cancel"
          }) ]
        }) ]
      }), R === "scope" && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [ e(n, {
          children: "How much session history should we include?"
        }), e(Xe, {
          options: Rt,
          defaultFocusValue: fe,
          onChange: f => {
            Qt(f), j("consent");
          },
          onCancel: Ue
        }) ]
      }), R === "consent" && r(s, {
        flexDirection: "column",
        children: [ e(n, {
          children: K[p].consentIntro
        }), r(s, {
          marginLeft: 2,
          flexDirection: "column",
          children: [ r(n, {
            children: [ "- Your feedback / bug description:", " ", e(n, {
              dimColor: !0,
              children: te
            }) ]
          }), r(n, {
            children: [ "- Environment info:", " ", r(n, {
              dimColor: !0,
              children: [ a.platform, ", ", a.terminal, ", v", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.299",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-13T21:37:33Z",
                GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
                HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
              }.VERSION, "" ]
            }) ]
          }), p !== "share" && me && r(n, {
            children: [ "- Remote workspace:", " ", r(n, {
              dimColor: !0,
              children: [ lt ? `session ${lt}; ` : "", "git metadata is not collected from this machine" ]
            }) ]
          }), p !== "share" && e(Vr, {
            fallback: null,
            children: e(st, {
              gitStatePromise: Zt
            })
          }), r(n, {
            children: [ "- Session transcript:", " ", e(n, {
              dimColor: !0,
              children: p === "share" ? _e.session : _e[fe]
            }) ]
          }), p !== "share" && r(n, {
            children: [ "- Recent error messages:", " ", e(n, {
              dimColor: !0,
              children: "up to the last 100 since you launched Claude Code (may include file paths)"
            }) ]
          }) ]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            wrap: "wrap",
            dimColor: !0,
            children: K[p].consentFooter
          })
        }) ]
      }), R === "submitting" && p !== "share" && e(s, {
        flexDirection: "row",
        gap: 1,
        children: e(n, {
          children: K[p].submitting
        })
      }), R === "done" && p === "bundle" && r(s, {
        flexDirection: "column",
        children: [ r(n, {
          color: "success",
          children: [ e(ct, {
            status: "success",
            withSpace: !0
          }), "Feedback bundle saved" ]
        }), pe && r(s, {
          marginTop: 1,
          flexDirection: "column",
          children: [ r(n, {
            children: [ "Bundle: ", e(n, {
              dimColor: !0,
              children: pe
            }) ]
          }), r(n, {
            children: [ "Reference ID: ", e(n, {
              dimColor: !0,
              children: le
            }) ]
          }), Ce && e(s, {
            marginTop: 1,
            children: e(n, {
              wrap: "wrap",
              children: Ae[Ce]
            })
          }), e(s, {
            marginTop: 1,
            children: e(n, {
              wrap: "wrap",
              children: "Send this file to your Anthropic account representative or attach it to your support request."
            })
          }) ]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            children: "Press any key to close"
          })
        }) ]
      }), R === "done" && p === "post" && (we || X ? r(s, {
        flexDirection: "column",
        children: [ B ? e(ss, {
          error: B
        }) : r(n, {
          color: "success",
          children: [ e(ct, {
            status: "success",
            withSpace: !0
          }), "Feedback sent" ]
        }), le && r(Q, {
          children: [ e(s, {
            marginTop: 1,
            children: r(n, {
              children: [ "Reference ID: ", e(n, {
                dimColor: !0,
                children: le
              }) ]
            })
          }), e(s, {
            marginTop: 1,
            children: e(n, {
              wrap: "wrap",
              children: "If you're working with Anthropic support, please include the ID above."
            })
          }) ]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            italic: !0,
            children: "Any key to close"
          })
        }) ]
      }) : r(s, {
        flexDirection: "column",
        children: [ B ? e(ss, {
          error: B
        }) : e(n, {
          color: "success",
          children: "Thank you for your report!"
        }), le && r(n, {
          dimColor: !0,
          children: [ "Feedback ID: ", le ]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            italic: !0,
            children: r(Se, {
              children: [ e(G, {
                chord: "enter",
                action: "open GitHub issue"
              }), e(n, {
                children: "any key to close"
              }) ]
            })
          })
        }) ]
      })), null ]
    })
  });
}

function Pt(l, o, i) {
  let u = ne(ds(o), _o), h = ds(i), b = lke(), p = `${ot}/new?title=${encodeURIComponent(u)}&labels=user-reported,bug&body=`, D = encodeURIComponent(`**Bug Description**\n`), v = encodeURIComponent(`\n\n**Environment Info**\n- Platform: ${a.platform}\n- Terminal: ${a.terminal}\n- Version: ${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION || "unknown"}\n- Feedback ID: ${l}\n`), _ = encodeURIComponent(h), H = Ro - p.length - D.length - v.length;
  if (_.length > H) {
    let ye = encodeURIComponent(`\u2026\n\n**Note:** The description was shortened to fit GitHub's link length limit. The full description was sent to Anthropic with the feedback report; its Feedback ID is below.`), ke = 50, de = H - ye.length - 50;
    _ = "";
    for (let ue of h) {
      let ve = encodeURIComponent(ue);
      if (_.length + ve.length > de) break;
      _ += ve;
    }
    _ += ye;
  }
  return p + D + _ + v;
}

async function At(l, o, i) {
  try {
    let u = await JD({
      systemPrompt: bi([ "Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.", "Claude Code is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"' ]),
      userPrompt: l,
      signal: o,
      options: {
        hasAppendSystemPrompt: !1,
        toolChoice: void 0,
        isNonInteractiveSession: !1,
        agents: [],
        querySource: "feedback",
        mcpTools: [],
        agentContext: Ol(),
        credentials: i
      }
    }), h = u.message.content[0]?.type === "text" ? u.message.content[0].text : "Bug Report";
    if (yQ(h)) return tt(l);
    if (Ao(h)) return tt(l);
    return h;
  } catch (u) {
    if (Ve(u)) t("Feedback title generation via Haiku aborted, using fallback", {
      level: "debug"
    }); else d(u);
    return tt(l);
  }
}

var Po = /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;

function Ao(l) {
  let o = l.trim();
  return o === "" || Po.test(o);
}

function tt(l) {
  let o = vr(l);
  if (o.length <= 60 && o.length > 5) return o;
  let i = o.slice(0, 60);
  if (o.length > 60) {
    let u = i.lastIndexOf(" ");
    if (u > 30) i = i.slice(0, u);
    i += "...";
  }
  return i.length < 10 ? "Bug Report" : i;
}

function st(l) {
  let h = w(8), {gitStatePromise: o} = l, i = Hr(o);
  if (!i) {
    return null;
  }
  const u = i.branchName;
  let b;
  if (h[0] !== i.commitHash) b = i.commitHash ? `, ${i.commitHash.slice(0, 7)}` : "", 
  h[0] = i.commitHash, h[1] = b; else b = h[1];
  const p = i.remoteUrl ? ` @ ${i.remoteUrl}` : "", D = !i.isHeadOnRemote && ", not synced", v = !i.isClean && ", has local changes";
  let _;
  if (h[2] !== i.branchName || h[3] !== b || h[4] !== p || h[5] !== D || h[6] !== v) _ = r(n, {
    children: [ "- Git repo metadata:", " ", r(n, {
      dimColor: !0,
      children: [ u, b, p, D, v ]
    }) ]
  }), h[2] = i.branchName, h[3] = b, h[4] = p, h[5] = D, h[6] = v, h[7] = _; else _ = h[7];
  return _;
}

function JBs(l, o, i, u, h = "", b = {}, p, D = "/feedback") {
  let v = ege(D);
  if (v.kind === "disabled") return l(v.reason), null;
  let _ = aUo() ?? void 0, H = De(v.kind);
  return e(It, {
    abortController: o,
    messages: i,
    initialDescription: h,
    onDone: l,
    applyMessageOp: u,
    backgroundTasks: b,
    mode: v.kind,
    readFileState: p,
    surveyFeedbackSource: _,
    command: D,
    wholeTranscript: v.kind === "bundle" && (v.cause === "share_switch" || D === "/share" && a.CLAUDE_CODE_ENABLE_SHARE_BUNDLE),
    send: H
  });
}

function at(l, o, i, u) {
  return JBs(l, dr(), o.messages, o.applyMessageOp, i, {
    ...o.taskRegistry.all()
  }, o.readFileState, u);
}

async function A8n(l, o, i, u = "/feedback") {
  let h = i?.trim() === "public" ? "" : i || "";
  return at(l, o, h, u);
}

function Ot(l) {
  let b = w(10), {onDone: o, caller: i, manualDialog: u} = l, h = Re(u), p;
  if (b[0] !== i.messages) p = () => [ ...i.messages ], b[0] = i.messages, b[1] = p; else p = b[1];
  let [D] = y(p);
  if (h !== void 0) {
    return h;
  }
  let v;
  if (b[2] !== i || b[3] !== u || b[4] !== o) v = () => {
    if (u.getState() !== void 0) {
      return;
    }
    let _ = at(o, i, "", "/feedback");
    u.setState(() => _);
  }, b[2] = i, b[3] = u, b[4] = o, b[5] = v; else v = b[5];
  let H;
  if (b[6] !== D || b[7] !== o || b[8] !== v) H = e(Yyt, {
    messages: D,
    onDone: o,
    onWriteNew: v
  }), b[6] = D, b[7] = o, b[8] = v, b[9] = H; else H = b[9];
  return H;
}

async function dqs(l, o, i) {
  if (M2() && !i?.trim() && !iUo()) return e(Ot, {
    onDone: l,
    caller: o,
    manualDialog: _s(void 0)
  });
  return A8n(l, o, i);
}

export { JBs, A8n, dqs };
