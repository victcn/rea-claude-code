// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Sc } from "./chunk-yrpmvsj8.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { an, st, s, n } from "./chunk-3vw306fv.js";

import { Gr } from "./chunk-hwdwjvh8.js";

import { w } from "./chunk-9rj1xaxr.js";

import { lg, En } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { Pe } from "./chunk-7w995nyx.js";

import { i } from "./chunk-hedpgw9m.js";

import { uJn, _Ze, Fjt, Ujt, bJn, ole, SVo } from "./chunk-s0van10s.js";

import { zMe } from "./chunk-18n5kthz.js";

import { pl, is } from "./chunk-1pxjahnn.js";

import { us, jr } from "./chunk-wpjx0bxn.js";

import { Wn, ddt } from "./chunk-4v78v8fd.js";

import { te } from "./chunk-48xcyvwy.js";

import { Se } from "./chunk-sebqm9p5.js";

import { be } from "./chunk-gqmex880.js";

import { G } from "./chunk-j706jx8h.js";

import { Ll, tn } from "./chunk-v8wydxb4.js";

import { ct } from "./chunk-qk83zz02.js";

import { Er } from "./chunk-t54wevgw.js";

import { YFt } from "./chunk-hkkpv0df.js";

import { bo } from "./chunk-cqm6ka4q.js";

import { h7e, ZBt } from "./chunk-14nyq5zw.js";

import { ss } from "./chunk-wafhv2dx.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { ae, P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { N } from "./chunk-hmqkrrtz.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function Xt(W) {
  return e(tn.Item, {
    label: Wn(W.title),
    meta: Le(W)
  }, W.draft_id);
}

function Jt(ne) {
  return e(tn.Item, {
    label: Wn(ne.title),
    meta: Le(ne)
  }, ne.draft_id);
}

var Fe = [ "bug", "idea", "missing_capability" ], xt = {
  bug: "bug",
  idea: "idea",
  missing_capability: "missing capability"
}, Oe = [ void 0, ...Fjt ], Ne = [ void 0, ...Ujt ];

function rt(h) {
  return h === void 0 ? "(none)" : h.replace(/_/g, " ");
}

function ot(h) {
  return [ "type", "title", "area", "failure_mode", "task_category", "details", ...h.transcriptAvailable ? [ "transcript" ] : [], "send" ];
}

var Ke = 500, at = 6, lt = 3, dt = 5;

function Yyt({messages: h, onDone: u, abortSignal: c, onWriteNew: d}) {
  let [f, C] = y(null), [b, B] = y(0), J = st(), [m, L] = y("list"), [o, A] = y(null), [D, H] = y(!1), [q, _, M] = Sc(0), [T, k, Y] = Sc(null), [U, z] = y(null), ce = R(-1 / 0), [se, E] = y(null), [oe, ue] = y(null), ee = Te().columns - 6, x = an(), le = R(0), W = R(!1), ne = R(0), fe = R(!1), we = R(!1), {storageV5: V, credentials: je} = Pe(), Ve = us(), ie = jr(t => t.id), me = d !== void 0, de = ae(async () => {
    let {queued: t} = await ole(void 0, V).catch(() => ({
      queued: [],
      expired: []
    }));
    SVo(N(t, l => l.source_session_id === ie)), C(t);
    let a = t.length - (me ? 0 : 1);
    return B(l => Math.min(l, Math.max(0, a))), t;
  }, [ ie, me, V, B ]);
  P(() => {
    de().then(t => {
      i("tengu_feedback_queue_opened", {
        queued_count: Gr(t.length),
        this_session_count: Gr(N(t, a => a.source_session_id === ie))
      });
    });
  }, [ de, ie ]);
  let Xe = (f ?? []).filter(t => t.source_session_id === ie), Je = (f ?? []).filter(t => t.source_session_id !== ie), re = [ ...Xe, ...Je ], ze = me && b === re.length, Qe = re.length + (me ? 1 : 0), Dt = re[b], Ie = o ? _Ze(o.request_ids).length : 0, pe = ae(t => {
    if (t === void 0) u(); else u(t, {
      display: "system"
    });
  }, [ u ]), O = Z(() => o ? ot(o) : [], [ o ]), ke = ae(t => {
    le.current = x.now(), _(t.length - 1);
  }, [ x, _ ]), p = O[q], he = p === "title" || p === "area" || p === "details", _t = ae(t => {
    A(t), H(t.transcriptAvailable), E(null), k({
      type: t.type,
      title: Wn(t.title),
      area: Wn(t.area ?? ""),
      failureMode: t.failure_mode,
      taskCategory: t.task_category,
      details: ddt(t.details)
    }), z(null), ce.current = -1 / 0, ke(ot(t)), ne.current = x.now(), W.current = !1, 
    we.current = !1, L("review");
  }, [ x, ke, k ]), Ze = ae(async t => {
    let a = x.now(), l = ne.current;
    if (ne.current = Math.max(a, l), a - l < Ke || fe.current || W.current) return;
    fe.current = !0;
    try {
      await ZBt(t, "panel", V).catch(() => {}), await de(), L("list"), A(null);
    } finally {
      fe.current = !1;
    }
  }, [ de, x, V ]), xe = ae(t => {
    A(t), C(g => g ? g.map(v => v.draft_id === t.draft_id ? t : v) : g);
    let {transcriptAvailable: a, ...l} = t;
    return bJn(l, new Date, V).then(g => {
      if (!g.success) E(g.reason === "too_large" ? "That draft is too large to save. Trim the details." : "Could not save the draft to disk.");
    });
  }, [ V ]), ve = ae(() => {
    let t = Y();
    if (!o || !t) return o;
    let a = Wn(o.title), l = Wn(o.area ?? ""), g = ddt(o.details), v = t.title === a || t.title.trim() === "" ? o.title : t.title.trim(), Ce = t.area === l ? o.area ?? "" : t.area.trim(), it = t.details === g ? o.details : t.details.trim() === "" ? "" : t.details;
    if (t.type === o.type && v === o.title && (Ce === "" ? void 0 : Ce) === o.area && t.failureMode === o.failure_mode && t.taskCategory === o.task_category && it === o.details) return o;
    return {
      ...o,
      type: t.type,
      title: v,
      area: Ce === "" ? void 0 : Ce,
      failure_mode: t.failureMode,
      task_category: t.taskCategory,
      details: it
    };
  }, [ o, Y ]), et = ae(() => {
    let t = ve();
    if (t && t !== o) {
      if (o && t.details === "" && o.details !== "" && x.now() - ce.current < Ke) t = {
        ...t,
        details: o.details
      };
      xe(t);
    }
  }, [ ve, o, xe, x ]), j = ae(t => {
    z(null), E(a => a === De ? null : a), _(a => {
      let l = Math.max(0, Math.min(O.length - 1, a + t));
      if (l !== a && O[l] === "send") le.current = x.now();
      return l;
    });
  }, [ O, x, _ ]), Tt = ae((t, a) => {
    if (t === "type") k(l => {
      if (!l) return l;
      let g = Fe.indexOf(l.type), v = Fe[(g + a + Fe.length) % Fe.length];
      return v ? {
        ...l,
        type: v
      } : l;
    }); else if (t === "failure_mode") k(l => {
      if (!l) return l;
      let g = Oe.indexOf(l.failureMode), v = Oe.length;
      return {
        ...l,
        failureMode: Oe[(g + a + v) % v]
      };
    }); else if (t === "task_category") k(l => {
      if (!l) return l;
      let g = Ne.indexOf(l.taskCategory), v = Ne.length;
      return {
        ...l,
        taskCategory: Ne[(g + a + v) % v]
      };
    }); else if (t === "transcript") H(l => !l);
  }, [ k ]), Rt = ae(async () => {
    if (!o || W.current || fe.current) return;
    let t = x.now(), a = le.current;
    if (le.current = Math.max(t, a), t - a < Ke) return;
    if (Y()?.title.trim() === "") {
      E("Title is blank. Type a title, or press esc on the field to restore it.");
      return;
    }
    let l = ve() ?? o;
    if (W.current = !0, L("submitting"), E(null), l !== o) await xe(l);
    let g;
    try {
      g = await h7e({
        draft: l,
        includeTranscript: D && l.transcriptAvailable,
        currentSessionMessages: h,
        signal: c,
        storageV5: V,
        host: Ve,
        credentials: je
      });
    } catch {
      g = {
        success: !1,
        error: "Couldn't send feedback. The draft is still queued. Try again later."
      };
    }
    if (W.current = !1, g.success) await de(), ue(g.feedbackId), L("receipt"); else {
      if (E(g.error), g.payloadTooLarge) {
        let v = O.indexOf("transcript");
        if (v >= 0) _(v);
      }
      L("review");
    }
  }, [ o, Y, D, h, c, de, x, ve, xe, V, je, Ve, O, _ ]);
  function St(t) {
    if (t.ctrl || t.meta) return;
    if (m === "submitting") {
      t.preventDefault();
      return;
    }
    if (t.key === "escape" && !(m === "review" && he)) return;
    if (m === "receipt") {
      if (t.preventDefault(), (f?.length ?? 0) > 0) L("list"), A(null); else pe(`Feedback sent (receipt ${oe})`);
      return;
    }
    if (m === "list") {
      if (!f) {
        t.preventDefault();
        return;
      }
      if (t.key.toLowerCase() === "w" && d) {
        t.preventDefault(), d();
        return;
      }
      if (Qe === 0) {
        t.preventDefault(), pe();
        return;
      }
      if (re.length > 0) return;
      if (t.key === "up" || t.key === "down") t.preventDefault(); else if (t.key === "return" && d) t.preventDefault(), 
      d(); else if (t.key !== "escape") t.preventDefault(), pe();
      return;
    }
    if (m === "review" && o) {
      if (we.current) {
        t.preventDefault();
        return;
      }
      if (he) {
        if (t.key === "escape") t.preventDefault(), tt();
        return;
      }
      let a = O[M()];
      if (t.key === "up") t.preventDefault(), j(-1); else if (t.key === "down") t.preventDefault(), 
      j(1); else if (t.key === "left" || t.key === "right") t.preventDefault(), Tt(a, t.key === "left" ? -1 : 1); else if (t.key === " " && a === "transcript") t.preventDefault(), 
      H(l => !l); else if (t.key === "return") if (t.preventDefault(), a === "send") Rt(); else j(1); else if (t.key.toLowerCase() === "d" && a !== "title" && a !== "area" && a !== "details") t.preventDefault(), 
      Ze(o);
    }
  }
  let ge = ae(() => {
    if (we.current || W.current || fe.current) return;
    we.current = !0, et(), ne.current = -1 / 0, L("list"), A(null);
  }, [ et ]), tt = ae(() => {
    if (m !== "review") {
      pe();
      return;
    }
    let t = O[M()];
    if (t !== "title" && t !== "area" && t !== "details") {
      ge();
      return;
    }
    k(a => a && o ? {
      ...a,
      [t]: t === "details" ? ddt(o.details) : Wn(o[t] ?? "")
    } : a), z(null), ke(O), E(a => a === De ? null : a);
  }, [ m, o, O, M, ge, k, ke, pe ]), nt = !(J && re.length > 0), Et = m === "list" ? r(Se, {
    children: [ Qe > 0 && nt && e(G, {
      chord: "enter",
      action: ze ? "write new feedback" : "review"
    }), Dt !== void 0 && nt && e(G, {
      chord: "d",
      action: "discard"
    }), e(G, {
      chord: "esc",
      action: "close"
    }) ]
  }) : m === "review" ? r(Se, {
    children: [ e(G, {
      chord: [ "up", "down" ],
      action: "move"
    }), (p === "type" || p === "failure_mode" || p === "task_category" || p === "transcript") && e(G, {
      chord: [ "left", "right" ],
      action: "change"
    }), e(G, {
      chord: "enter",
      action: p === "send" ? "send" : "next"
    }), p === "details" && e(G, {
      chord: zMe() ? "shift+enter" : "ctrl+j",
      action: "new line"
    }), !he && e(G, {
      chord: "d",
      action: "discard"
    }), e(G, {
      chord: "esc",
      action: he ? "cancel edit" : "later"
    }) ]
  }) : null;
  return e(bo, {
    onKeyDown: St,
    children: r(be, {
      title: "Feedback drafts",
      onCancel: tt,
      isCancelActive: m !== "submitting" && !he,
      hideInputGuide: m === "receipt" || m === "submitting",
      inputGuide: Et,
      children: [ m === "list" && f === null && e(n, {
        dimColor: !0,
        children: "Loading\u2026"
      }), m === "list" && f !== null && re.length === 0 && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [ e(n, {
          children: "No feedback drafts queued."
        }), e(n, {
          dimColor: !0,
          children: "Claude drafts feedback at high-signal moments; drafts appear here for your review."
        }), d ? r(s, {
          flexDirection: "column",
          gap: 1,
          children: [ e(vt, {
            isSelected: ze
          }), e(n, {
            dimColor: !0,
            children: "/bug works anytime. Any other key closes this panel."
          }) ]
        }) : e(n, {
          dimColor: !0,
          children: "Any key closes this panel."
        }) ]
      }), m === "list" && f !== null && re.length > 0 && r(s, {
        flexDirection: "column",
        children: [ e(Ct, {
          thisSession: Xe,
          others: Je,
          hasWriteNew: me,
          defaultFocusIndex: b,
          onFocus: B,
          onOpen: _t,
          onWriteNew: () => d?.(),
          onDiscard: t => void Ze(t)
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            wrap: "wrap",
            children: "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days."
          })
        }) ]
      }), m === "review" && o && T && r(s, {
        flexDirection: "column",
        children: [ r(s, {
          children: [ e(K, {
            isFocused: p === "type"
          }), e(n, {
            children: "Type: "
          }), e(ye, {
            value: xt[T.type],
            isFocused: p === "type"
          }) ]
        }), e(Me, {
          label: "Title:",
          value: T.title,
          isFocused: p === "title",
          bold: !0,
          columns: ee,
          cursorOffset: U,
          onChange: t => k(a => a ? {
            ...a,
            title: t
          } : a),
          onCursorChange: z,
          onNext: () => j(1),
          onPrev: () => j(-1),
          onExit: ge
        }), e(Me, {
          label: "Area:",
          value: T.area,
          isFocused: p === "area",
          dim: !0,
          columns: ee,
          cursorOffset: U,
          onChange: t => k(a => a ? {
            ...a,
            area: t
          } : a),
          onCursorChange: z,
          onNext: () => j(1),
          onPrev: () => j(-1),
          onExit: ge
        }), r(s, {
          children: [ e(K, {
            isFocused: p === "failure_mode"
          }), e(n, {
            children: "Failure mode: "
          }), e(ye, {
            value: rt(T.failureMode),
            isFocused: p === "failure_mode"
          }) ]
        }), r(s, {
          children: [ e(K, {
            isFocused: p === "task_category"
          }), e(n, {
            children: "Task: "
          }), e(ye, {
            value: rt(T.taskCategory),
            isFocused: p === "task_category"
          }) ]
        }), e(Me, {
          label: "Details:",
          value: T.details,
          isFocused: p === "details",
          dim: !0,
          multiline: !0,
          columns: ee,
          cursorOffset: U,
          onChange: t => {
            let a = Buffer.byteLength(t, "utf8");
            if (a > uJn && a >= Buffer.byteLength(T.details, "utf8")) {
              E(De);
              return;
            }
            k(l => {
              if (l && l.details.trim() !== "" && t.trim() === "") ce.current = x.now();
              return l ? {
                ...l,
                details: t
              } : l;
            }), E(l => l === De ? null : l);
          },
          onCursorChange: z,
          onNext: () => j(1),
          onPrev: () => j(-1),
          onExit: ge
        }), o.transcriptAvailable ? r(s, {
          flexDirection: "column",
          children: [ r(s, {
            children: [ e(K, {
              isFocused: p === "transcript"
            }), e(n, {
              children: "Send transcript: "
            }), e(ye, {
              value: D ? "yes" : "no",
              isFocused: p === "transcript"
            }), r(n, {
              dimColor: !0,
              children: [ " \xb7 ", D ? "sends this conversation to Anthropic" : "report only" ]
            }) ]
          }), o.source_session_id !== ie && e(s, {
            marginLeft: 4,
            children: r(n, {
              dimColor: !0,
              wrap: "wrap",
              children: [ "from ", Wn(o.cwd), " \xb7 session", " ", Wn(o.source_session_id) ]
            })
          }) ]
        }) : r(s, {
          children: [ e(K, {
            isFocused: !1
          }), r(n, {
            children: [ "Send transcript: ", e(n, {
              dimColor: !0,
              children: "expired (report only)"
            }) ]
          }) ]
        }), r(s, {
          marginTop: 1,
          children: [ e(K, {
            isFocused: !1
          }), r(n, {
            dimColor: !0,
            wrap: "wrap",
            children: [ "Environment info (", Wn(o.os), ", v", Wn(o.cli_version), ",", " ", Wn(o.model), o.effort !== void 0 && r(Q, {
              children: [ ", effort", " ", Wn(o.effort) ]
            }), o.thinking_type !== void 0 && r(Q, {
              children: [ ", thinking ", o.thinking_type, o.thinking_budget !== void 0 && r(Q, {
                children: [ " (budget ", o.thinking_budget, ")" ]
              }) ]
            }), o.assistant_turn_count !== void 0 && r(Q, {
              children: [ ", turn ", o.assistant_turn_count, o.message_count !== void 0 && r(Q, {
                children: [ "/", o.message_count ]
              }), o.subagent_count !== void 0 && o.subagent_count > 0 && r(Q, {
                children: [ " ", "with ", o.subagent_count, " ", I(o.subagent_count, "subagent") ]
              }) ]
            }), ", drafted ", Ft(o.created_at), " ago)", Ie > 0 ? ` and ${Ie} API request ${I(Ie, "id")} are` : " is", " ", "always attached." ]
          }) ]
        }), se && e(s, {
          marginTop: 1,
          children: e(ss, {
            error: se
          })
        }), r(s, {
          marginTop: 1,
          children: [ e(K, {
            isFocused: p === "send"
          }), e(n, {
            bold: p === "send",
            children: "Send feedback"
          }) ]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            wrap: "wrap",
            children: "We may use these reports to debug related issues and improve Claude Code. Turn off Claude-drafted feedback anytime in /config."
          })
        }) ]
      }), m === "submitting" && e(n, {
        children: "Sending feedback\u2026"
      }), m === "receipt" && r(s, {
        flexDirection: "column",
        children: [ r(n, {
          color: "success",
          children: [ e(ct, {
            status: "success",
            withSpace: !0
          }), "Feedback sent (receipt ", oe, "). Thanks!" ]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            italic: !0,
            children: "Any key to continue"
          })
        }) ]
      }) ]
    })
  });
}

var De = `That edit would push Details past the ${Math.floor(uJn / 1024)}KB limit. Trim the details first.`;

function ut(h, u) {
  return lg(h.replace(/\r\n|\r/g, `\n`)).split(`\n`).map(c => En(c)).join(u ? `\n` : " ");
}

function K(h) {
  let f = w(3), {isFocused: u} = h;
  const c = u ? "suggestion" : void 0, d = u ? `${te.pointer} ` : "  ";
  let C;
  if (f[0] !== c || f[1] !== d) C = e(n, {
    color: c,
    children: d
  }), f[0] = c, f[1] = d, f[2] = C; else C = f[2];
  return C;
}

function ye(h) {
  let d = w(6), {value: u, isFocused: c} = h;
  if (!c) {
    let f;
    if (d[0] !== u) f = e(n, {
      dimColor: !0,
      children: u
    }), d[0] = u, d[1] = f; else f = d[1];
    return f;
  }
  let f;
  if (d[2] === S) f = r(n, {
    dimColor: !0,
    children: [ te.triangleLeft, " " ]
  }), d[2] = f; else f = d[2];
  let C;
  if (d[3] === S) C = r(n, {
    dimColor: !0,
    children: [ " ", te.triangleRight ]
  }), d[3] = C; else C = d[3];
  let b;
  if (d[4] !== u) b = r(n, {
    children: [ f, u, C ]
  }), d[4] = u, d[5] = b; else b = d[5];
  return b;
}

function Me(h) {
  let q = w(24), {label: u, value: c, isFocused: d, bold: f, dim: C, multiline: b, columns: B, cursorOffset: J, onChange: m, onCursorChange: L, onNext: o, onPrev: A, onExit: D} = h, H = st(), _;
  if (q[0] !== d) _ = e(K, {
    isFocused: d
  }), q[0] = d, q[1] = _; else _ = q[1];
  let M;
  if (q[2] !== u) M = e(n, {
    children: u
  }), q[2] = u, q[3] = M; else M = q[3];
  let T;
  if (q[4] !== _ || q[5] !== M) T = r(s, {
    children: [ _, M ]
  }), q[4] = _, q[5] = M, q[6] = T; else T = q[6];
  let k;
  if (q[7] !== f || q[8] !== B || q[9] !== J || q[10] !== C || q[11] !== d || q[12] !== H || q[13] !== b || q[14] !== m || q[15] !== L || q[16] !== D || q[17] !== o || q[18] !== A || q[19] !== c) k = e(s, {
    marginLeft: 4,
    children: d ? e(s, {
      borderStyle: b && !H ? "single" : void 0,
      borderLeft: !0,
      borderTop: !1,
      borderBottom: !1,
      borderRight: !1,
      borderDimColor: !0,
      paddingLeft: b && !H ? 1 : 0,
      children: e(Er, {
        value: c,
        onChange: m,
        columns: b && !H ? B - 2 : B,
        onSubmit: o,
        onExit: D,
        onHistoryUp: A,
        onHistoryDown: o,
        cursorOffset: J ?? c.length,
        onChangeCursorOffset: L,
        multiline: b,
        inputFilter: Y => ut(Y, b),
        clearOnSubmit: !1,
        disableCtrlCClear: !0,
        disableBackslashReturn: b,
        disableCursorMovementForUpDownKeys: !b,
        disableEscapeDoublePress: !0,
        showCursor: !0,
        focus: !0
      })
    }) : b ? e(YFt, {
      value: c,
      bold: f,
      dim: C,
      columns: B
    }) : e(n, {
      bold: f,
      dimColor: C,
      wrap: "wrap",
      children: Wn(c)
    })
  }), q[7] = f, q[8] = B, q[9] = J, q[10] = C, q[11] = d, q[12] = H, q[13] = b, q[14] = m, 
  q[15] = L, q[16] = D, q[17] = o, q[18] = A, q[19] = c, q[20] = k; else k = q[20];
  let U;
  if (q[21] !== T || q[22] !== k) U = r(s, {
    flexDirection: "column",
    children: [ T, k ]
  }), q[21] = T, q[22] = k, q[23] = U; else U = q[23];
  return U;
}

var Ae = "+ Write new feedback";

function vt(h) {
  let f = w(3), {isSelected: u} = h;
  const c = u ? "suggestion" : void 0, d = u ? `${te.pointer} ` : "  ";
  let C;
  if (f[0] !== c || f[1] !== d) C = r(n, {
    color: c,
    children: [ d, Ae ]
  }), f[0] = c, f[1] = d, f[2] = C; else C = f[2];
  return C;
}

function Ct(h) {
  let o = w(34), {thisSession: u, others: c, hasWriteNew: d, defaultFocusIndex: f, onFocus: C, onOpen: b, onWriteNew: B, onDiscard: J} = h, {rows: m} = is(Te()), L = pl(), A;
  if (o[0] !== c || o[1] !== u) A = [ ...u, ...c ], o[0] = c, o[1] = u, o[2] = A; else A = o[2];
  let D = A, H = (u.length > 0 ? 1 : 0) + (c.length > 0 ? 1 : 0) + D.length + (d ? 2 : 0), q = Math.max(dt, m - lt - (L ? 0 : at));
  const _ = H > q ? q - 2 : q;
  let M;
  if (o[3] !== b || o[4] !== B || o[5] !== D) M = T => {
    let k = D[T];
    if (k) b(k); else B();
  }, o[3] = b, o[4] = B, o[5] = D, o[6] = M; else M = o[6];
  let Y;
  if (o[7] !== J || o[8] !== D) Y = (U, z) => {
    let ce = D[z];
    if (U.key.toLowerCase() === "d" && ce && !U.ctrl && !U.meta) U.preventDefault(), 
    J(ce);
  }, o[7] = J, o[8] = D, o[9] = Y; else Y = o[9];
  let se;
  if (o[10] !== u.length) se = u.length > 0 && e(Ll.Heading, {
    children: e(n, {
      bold: !0,
      children: "This session"
    })
  }, "this-session"), o[10] = u.length, o[11] = se; else se = o[11];
  let E;
  if (o[12] !== u) E = u.map(Xt), o[12] = u, o[13] = E; else E = o[13];
  let oe;
  if (o[14] !== c.length) oe = c.length > 0 && e(Ll.Heading, {
    children: e(n, {
      bold: !0,
      children: "Other sessions"
    })
  }, "other-sessions"), o[14] = c.length, o[15] = oe; else oe = o[15];
  let ue;
  if (o[16] !== c) ue = c.map(Jt), o[16] = c, o[17] = ue; else ue = o[17];
  let ee;
  if (o[18] !== d) ee = d && e(Ll.Heading, {}, "gap"), o[18] = d, o[19] = ee; else ee = o[19];
  let x;
  if (o[20] !== d) x = d && e(tn.Item, {
    label: Ae
  }, "write-new"), o[20] = d, o[21] = x; else x = o[21];
  let le;
  if (o[22] !== f || o[23] !== C || o[24] !== x || o[25] !== _ || o[26] !== M || o[27] !== Y || o[28] !== se || o[29] !== E || o[30] !== oe || o[31] !== ue || o[32] !== ee) le = r(tn, {
    visibleCount: _,
    defaultFocusIndex: f,
    overflowHint: "count",
    onFocus: C,
    onSelect: M,
    onRowKeyDown: Y,
    children: [ se, E, oe, ue, ee, x ]
  }), o[22] = f, o[23] = C, o[24] = x, o[25] = _, o[26] = M, o[27] = Y, o[28] = se, 
  o[29] = E, o[30] = oe, o[31] = ue, o[32] = ee, o[33] = le; else le = o[33];
  return le;
}

function Le(h) {
  return [ xt[h.type], Ft(h.created_at), Wn(h.cwd), h.transcriptAvailable ? "transcript available" : "transcript expired (report only)" ];
}

function Ft(h, u = Date.now()) {
  let c = u - Date.parse(h);
  if (!Number.isFinite(c) || c < 0) return "now";
  let d = Math.floor(c / 6e4);
  if (d < 60) return `${Math.max(1, d)}m`;
  let f = Math.floor(d / 60);
  if (f < 24) return `${f}h`;
  return `${Math.floor(f / 24)}d`;
}

export { Yyt };
