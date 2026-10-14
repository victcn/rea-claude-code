// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mDr, wEe, vLo } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { k, yTo } from "./chunk-xywp7esx.js";

import { _ } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { p } from "./chunk-jkzenvsk.js";

import { WH } from "./chunk-f1zpf9me.js";

import { Jt } from "./chunk-9tdwgnpn.js";

import { CP } from "./chunk-4jjt8sdp.js";

import { M0, out } from "./chunk-b47tzzqx.js";

import { Yo, cSs, uIt, Wfo, C$n, pSs, fSs, zfo, mSs, gSs, hSs } from "./chunk-sn25q2cq.js";

import { A4, H0e, Lar } from "./chunk-84yp45y8.js";

import { sn } from "./chunk-642shbw5.js";

import { o, v, M, T, u, De, ue, U, Sa } from "./chunk-cvcg6n1z.js";

import { N } from "./chunk-hmqkrrtz.js";

function SSt(e) {
  return e.map(t => t.includes(", ") || t.includes('"') ? _(t) : t).join(", ");
}

function H(e) {
  let t = [], n = e;
  for (;;) {
    if (n.startsWith('"')) {
      let r = -1, s = !1;
      for (let a = 1; a < n.length; a++) {
        let h = n[a];
        if (s) {
          s = !1;
          continue;
        }
        if (h === "\\") {
          s = !0;
          continue;
        }
        if (h === '"') {
          r = a;
          break;
        }
      }
      if (r === -1) return null;
      try {
        let a = JSON.parse(n.slice(0, r + 1));
        if (typeof a !== "string") return null;
        t.push(a);
      } catch {
        return null;
      }
      n = n.slice(r + 1);
    } else {
      let r = n.indexOf(", "), s = r === -1 ? n : n.slice(0, r);
      if (s.includes('"')) return null;
      t.push(s), n = r === -1 ? "" : n.slice(r);
    }
    if (n === "") break;
    if (!n.startsWith(", ")) return null;
    if (n = n.slice(2), n === "") return null;
  }
  return t;
}

var D = 8192, te = 8192, ne = 32768, oe = 2e3, se = WH - oe, ie = 2e3, re = new Set([ "answers", "annotations", "response", "followUp" ]), ae = "afkTimeoutMs";

function V(e, t) {
  try {
    return le(e, t);
  } catch {
    return S("threw");
  }
}

function le(e, t) {
  if (!z(t)) return S("not_an_object");
  for (let f of Object.keys(t)) {
    if (f === ae) return S("host_field");
    if (re.has(f)) {
      if (Object.hasOwn(e, f)) return S("changed_shown_field");
      continue;
    }
    if (!Object.hasOwn(e, f)) return S("unknown_field");
    if (!H0e(t[f], e[f]) && !(f === "questions" && !Object.hasOwn(e, "title") && de(t[f], e[f]))) return S("changed_shown_field");
  }
  let {questions: n, extended: r} = ce(I(e, "questions")), s = 0, a = 0, h = new Set, d = {
    ...e
  }, m = Object.create(null), l = I(t, "answers");
  if (l !== void 0) {
    if (!z(l)) return S("answers");
    for (let f of Object.keys(l)) {
      let R = n.get(f);
      if (R === void 0) return S("answers");
      h.add(f);
      let O = l[f];
      if (typeof O === "string") {
        if (O.length > D) return S("answers");
        s += O.length, m[f] = O;
        continue;
      }
      if (!R.multiSelect || !Array.isArray(O) || O.length > R.optionCount + 1) return S("answers");
      let g = [];
      for (let A = 0; A < O.length; A++) {
        let b = O[A];
        if (typeof b !== "string" || b.length > D) return S("answers");
        g.push(b);
      }
      let y = SSt(g);
      s += y.length, m[f] = y;
    }
  }
  if (!Object.hasOwn(e, "answers")) d.answers = m;
  let w = I(t, "annotations");
  if (w !== void 0) {
    if (!z(w)) return S("annotations");
    let f = Object.create(null);
    for (let R of Object.keys(w)) {
      let O = n.get(R), g = w[R];
      if (O === void 0 || !z(g)) return S("annotations");
      h.add(R);
      let y = {};
      for (let A of Object.keys(g)) {
        let b = g[A];
        switch (A) {
         case "preview":
          if (typeof b !== "string" || !pe(O, b)) return S("annotations");
          a += b.length, y.preview = b;
          break;

         case "notes":
          if (typeof b !== "string" || b.length > te) return S("annotations");
          s += b.length, y.notes = b;
          break;

         default:
          return S("annotations");
        }
      }
      f[R] = y;
    }
    d.annotations = f;
  }
  let x = I(t, "response");
  if (x !== void 0) {
    if (typeof x !== "string" || x.length > D) return S("response");
    s += x.length, d.response = x;
  }
  let E = I(t, "followUp");
  if (E !== void 0) {
    if (typeof E !== "boolean" || !r) return S("follow_up");
    d.followUp = E;
  }
  for (let f of h) a += f.length;
  if (s > ne || s + a > se) return S("too_large");
  return {
    kind: "admitted",
    input: d
  };
}

function ce(e) {
  let t = new Map;
  if (!Array.isArray(e)) return {
    questions: t,
    extended: !1
  };
  let n = e.length > 0;
  for (let r of e) {
    if (!z(r)) {
      n = !1;
      continue;
    }
    if (typeof I(r, "kind") !== "string") n = !1;
    let s = I(r, "question");
    if (typeof s !== "string") continue;
    let a = I(r, "options"), h = Array.isArray(a) ? a : [], d = new Set;
    for (let m of h) {
      let l = z(m) ? I(m, "preview") : void 0;
      if (typeof l === "string") d.add(l);
    }
    t.set(s, {
      multiSelect: I(r, "multiSelect") === !0,
      optionCount: h.length,
      previews: d
    });
  }
  return {
    questions: t,
    extended: n
  };
}

function de(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
  let n = t.map((r, s) => {
    let a = e[s];
    if (!z(r) || I(r, "kind") !== "choice" || !z(a) || Object.hasOwn(a, "kind")) return r;
    let {kind: h, ...d} = r;
    return d;
  });
  return H0e(e, n);
}

function pe(e, t) {
  if (e.previews.has(t)) return !0;
  for (let n of e.previews) if (n.length <= ie && out(n) === t && !M0(n)) return !0;
  return !1;
}

function z(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}

function I(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}

function S(e) {
  return {
    kind: "refused",
    rule: e
  };
}

var X = p(() => u({
  label: o().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."),
  description: o().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications."),
  preview: o().optional().describe("Optional preview content rendered when this option is focused. Use for mockups, code snippets, or visual comparisons that help users compare options. See the tool description for the expected content format.")
})), Y = p(() => X().extend({
  description: o().optional().describe("Optional: add only when the label alone would be ambiguous. One short line on what choosing it leads to.")
}));

function B(e) {
  return u({
    question: o().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'),
    header: o().describe(`Very short label displayed as a chip/tag (max ${cSs} chars). Examples: "Auth method", "Library", "Approach".`),
    options: T(e).min(2).max(4).describe(yTo() ? "The available choices for this question. Must have 2-4 options (this cap applies to multiSelect too \u2014 group or split if you have more). Each option should be a distinct choice; mutually exclusive unless multiSelect is enabled. There should be no 'Other' option, that will be provided automatically." : "The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."),
    multiSelect: M().default(!1).describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.")
  });
}

var Q = p(() => B(X())), fe = p(() => B(Y())), he = [ "choice", "text", "number" ], G = p(() => u({
  question: Q().shape.question,
  header: Q().shape.header,
  kind: U(he).optional().describe('How the user answers. "choice" (the default when omitted): picks from options. "text": a free-text box, no options \u2014 for open-ended input. "number": a slider/stepper between min and max \u2014 for quantities.'),
  description: o().optional().describe("Optional single helper line shown under the question."),
  options: T(Y()).max(4).default(() => []).describe(`Choices for a "choice" question: 2-4 distinct options; with multiSelect false they must be mutually exclusive. Omit for "text" and "number" questions. There should be no 'Other' or 'Skip' option; the form lets the user type their own answer or leave a question unanswered.`),
  multiSelect: Q().shape.multiSelect,
  placeholder: o().optional().describe('"text" questions only: placeholder for the empty text box.'),
  min: v().optional().describe('"number" questions only (required there): lowest value.'),
  max: v().optional().describe('"number" questions only (required there): highest value.'),
  step: v().positive().optional().describe('"number" questions only: increment between values.'),
  defaultValue: v().optional().describe('"number" questions only: the value the control starts at (within min..max).'),
  unit: o().optional().describe('"number" questions only: short unit shown next to the value, e.g. "px", "slides", "%".')
})), me = p(() => G().superRefine((e, t) => {
  let n = e.kind ?? "choice";
  for (let [h, d] of [ [ "placeholder", "text" ], [ "min", "number" ], [ "max", "number" ], [ "step", "number" ], [ "defaultValue", "number" ], [ "unit", "number" ] ]) if (n !== d && e[h] !== void 0) t.addIssue({
    code: "custom",
    path: [ h ],
    message: `${h} applies only to "${d}" questions.`
  });
  if (n === "choice") {
    if (e.options.length < 2) t.addIssue({
      code: "custom",
      path: [ "options" ],
      message: 'A choice question needs 2-4 options; use kind "text" for an open-ended question.'
    });
    return;
  }
  if (e.options.length > 0) t.addIssue({
    code: "custom",
    path: [ "options" ],
    message: `A "${n}" question takes no options; remove them or omit kind to ask a choice question.`
  });
  if (e.multiSelect) t.addIssue({
    code: "custom",
    path: [ "multiSelect" ],
    message: `multiSelect applies only to choice questions, not "${n}".`
  });
  if (n !== "number") return;
  let {min: r, max: s} = e;
  if (r === void 0 || s === void 0 || !(r < s)) {
    t.addIssue({
      code: "custom",
      path: [ "min" ],
      message: "A number question needs numeric min and max with min < max."
    });
    return;
  }
  let {defaultValue: a} = e;
  if (a !== void 0 && (a < r || a > s)) t.addIssue({
    code: "custom",
    path: [ "defaultValue" ],
    message: "defaultValue must lie within min..max."
  });
})), J = p(() => {
  let e = u({
    preview: o().optional().describe("The preview content of the selected option, if the question used previews."),
    notes: o().optional().describe("Free-text notes the user added to their selection.")
  });
  return ue(o(), e).optional().describe("Optional per-question annotations from the user (e.g., notes on preview selections). Keyed by question text.");
}), P = {
  check: e => {
    let t = e.questions.map(n => n.question);
    if (t.length !== new Set(t).size) return !1;
    for (let n of e.questions) {
      let r = n.options.map(s => s.label);
      if (r.length !== new Set(r).size) return !1;
    }
    return !0;
  },
  message: "Question texts must be unique, option labels must be unique within each question"
}, F = 4294967295, L = 256, we = p(() => Sa(e => {
  if (!Array.isArray(e)) return e;
  let t = e.length;
  if (!Number.isInteger(t) || t < 0 || t > F) return e;
  let n = "";
  for (let r = 0; r < t; r++) {
    let s = e[r];
    if (typeof s !== "string") return e;
    n = r === 0 ? s : n + ", " + s;
  }
  return n;
}, o())), Z = p(() => ({
  answers: ue(o(), we()).optional().describe("User answers collected by the permission component"),
  annotations: J(),
  metadata: u({
    source: o().optional().describe('Optional identifier for the source of this question (e.g., "remember" for /remember command). Used for analytics tracking.')
  }).optional().describe("Optional metadata for tracking and analytics purposes. Not displayed to user.")
}));

function ee(e) {
  return De({
    questions: T(e).min(1).max(4).describe(yTo() ? "Questions to ask the user (1-4 questions). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead." : "Questions to ask the user (1-4 questions)"),
    ...Z()
  }).refine(P.check, {
    message: P.message
  });
}

var ye = p(() => ee(Q())), ge = p(() => ee(fe())), be = p(() => De({
  title: o().optional().describe('Optional single-line heading shown above the questions, e.g. "Before I build your deck".'),
  questions: T(me()).min(1).max(4).describe("Questions to ask the user (1-4, most important first). The 1-4 questions and 2-4 options bounds are hard schema constraints; do not exceed them even if the user requests more \u2014 split into multiple calls instead."),
  ...Z()
}).refine(P.check, {
  message: P.message
})), Se = p(() => u({
  questions: T(Q()).describe("The questions that were asked"),
  answers: ue(o(), o()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)"),
  response: o().optional().describe("Freeform text the user typed instead of selecting a structured option"),
  annotations: J(),
  afkTimeoutMs: v().int().positive().optional().describe("Set when the dialog auto-resolved after this many milliseconds of idle (user away from keyboard). Absent on every human-resolved path.")
})), ke = p(() => Se().extend({
  questions: T(G()).describe("The questions that were asked"),
  followUp: M().optional().describe("Set when the user asked for another round of questions instead of (or after partially) answering.")
}));

var Gzt = "(notes only)";

function W(e) {
  return `No response after ${Math.round(e / 1e3)}s \u2014 the user may be away from keyboard. Proceed using your best judgment based on the context so far; you can re-ask this question later if it's still relevant.`;
}

function K(e) {
  return {
    ..."title" in e && e.title && {
      title: e.title
    },
    questions: wEe() ? e.questions.map(t => ({
      ...t,
      kind: "kind" in t && t.kind ? t.kind : "choice"
    })) : e.questions,
    ...e.metadata && {
      metadata: e.metadata
    }
  };
}

var yJ = Jt({
  name: Yo,
  searchHint: "prompt the user with a multiple-choice question",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return pSs;
  },
  async prompt({model: e, leanPrompt: t, tools: n}) {
    let r = Lar(n) ? zfo : mSs, s = "";
    if (CP({
      model: e,
      leanPrompt: t
    })) {
      let w = k("tengu_cinder_plover", "").trim();
      s = w ? `\n${w}\n` : hSs;
    }
    let a = k("tengu_cinder_wren", ""), h = typeof a === "string" ? a.trim() : "", d = h ? `\n${h}\n` : "", m = wEe() ? gSs : "", l = mDr();
    if (l === void 0) return r + s + d + m;
    return r + s + d + m + fSs[l];
  },
  get inputSchema() {
    if (wEe()) return be();
    return vLo() ? ge() : ye();
  },
  get outputSchema() {
    return ke();
  },
  userFacingName() {
    return "";
  },
  validationErrorSteer(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
    let t = e.questions;
    if (!Array.isArray(t)) return null;
    let n = !1, r = t.length;
    if (!Number.isInteger(r) || r < 0 || r > F) return null;
    for (let s = 0; s < r && s < L; s++) {
      let a = t[s];
      if (typeof a !== "object" || a === null || Array.isArray(a)) continue;
      if (wEe()) {
        let d = a.kind;
        if (d === "text" || d === "number") continue;
      }
      let h = a.options;
      if (Array.isArray(h) && h.length < 2) {
        n = !0;
        break;
      }
    }
    if (!n) return null;
    if (wEe()) return 'This call included a choice question with fewer than 2 options, so it was rejected and the person never saw it. If that question is open-ended, re-ask it with "kind": "text" and no options; if there is really only one path, state it as the approach you are taking and continue with the task. Do not invent a filler second option.';
    return "This call included a question with fewer than 2 options, so it was rejected and the person never saw it. A question with a single option has no decision in it. Do not retry this call and do not invent a filler second option. Instead, state the one path you were going to offer as the approach you are taking, then continue with the task. If this call also contained questions with 2 to 4 options (each with distinct labels), you may re-ask those questions alone in a new call. Ask a question only when the person has at least two genuinely distinct choices.";
  },
  isEnabled() {
    return A4();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    let t = Wfo, n = wEe();
    try {
      let r = typeof e === "object" && e !== null ? e.questions : void 0;
      if (!Array.isArray(r)) return "[malformed AskUserQuestion input]";
      let s = [], a = r.length;
      if (!Number.isInteger(a) || a < 0 || a > F) return "[malformed AskUserQuestion input]";
      for (let d = 0; d < a; d++) {
        if (s.length >= L) {
          s.push(`[\u2026 further question entries elided: reported length ${a}]`);
          break;
        }
        let m = r[d];
        if (typeof m !== "object" || m === null) {
          let g = t(m);
          s.push(g ? `[malformed question entry] ${g}` : "[malformed question entry]");
          continue;
        }
        let l = m.options, w = [];
        if (Array.isArray(l)) {
          let g = l.length;
          for (let y = 0; y < g; y++) {
            if (w.length >= L) {
              w.push("[\u2026 further option entries elided]");
              break;
            }
            let A = l[y];
            if (typeof A !== "object" || A === null) {
              w.push(`(${y + 1}) "${t(A)}"`);
              continue;
            }
            let b = A, q = [ `(${y + 1}) "${t(b.label)}"` ], C = t(b.description);
            if (C) q.push(`\u2014 ${C}`);
            let j = t(b.preview);
            if (j) q.push(`[preview: ${j}]`);
            w.push(q.join(" "));
          }
        }
        let x = w.join(" "), E = m.multiSelect === !0 ? " [multiSelect]" : "", f = t(m.header), R = f ? ` [header: ${f}]` : "", O = "";
        if (n) {
          let g = m;
          for (let [y, A] of [ [ "kind", t(g.kind) ], [ "description", t(g.description) ], [ "placeholder", t(g.placeholder) ], [ "min", C$n(g.min) ], [ "max", C$n(g.max) ], [ "step", C$n(g.step) ], [ "default", C$n(g.defaultValue) ], [ "unit", t(g.unit) ] ]) if (A) O += ` [${y}: ${A}]`;
        }
        s.push(`"${t(m.question)}"${R}${O}${E} options: ${x}`);
      }
      if (s.length === 0) return "[malformed AskUserQuestion input]";
      let h = n ? t(e.title) : "";
      return (h ? `[title: ${h}] ` : "") + s.join(" | ");
    } catch {
      return "[malformed AskUserQuestion input]";
    }
  },
  admitCardAnswer: V,
  shownCardInput: K,
  requiresUserInteraction() {
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create() {
    return {
      async validateInput({questions: e}) {
        if (mDr() !== "html") return {
          result: !0
        };
        for (let t of e) for (let n of t.options) {
          let r = Ae(n.preview);
          if (r) return {
            result: !1,
            message: `Option "${n.label}" in question "${t.question}": ${r}`,
            errorCode: 1
          };
        }
        return {
          result: !0
        };
      },
      async checkPermissions(e) {
        return {
          behavior: "ask",
          message: "Answer questions?",
          updatedInput: K(e)
        };
      },
      async call(e) {
        let {answers: t = {}, annotations: n} = e, s = e.questions.map(l => Array.isArray(l.options) ? l : {
          ...l,
          options: []
        }), {response: a, afkTimeoutMs: h, followUp: d} = e, m = N(s, ({question: l}) => {
          let w = t[l];
          return Array.isArray(w) ? w.length > 0 : typeof w === "string" && w !== "" && w !== Gzt;
        });
        return i("tengu_ask_user_question_completed", {
          extended: wEe(),
          questionCount: s.length,
          choiceCount: N(s, l => (l.kind ?? "choice") === "choice" && !l.multiSelect),
          multiSelectCount: N(s, l => (l.kind ?? "choice") === "choice" && l.multiSelect),
          textCount: N(s, l => l.kind === "text"),
          numberCount: N(s, l => l.kind === "number"),
          answerCount: m,
          followUp: d === !0,
          outcome: c(h ? "afk_timeout" : d ? "follow_up" : a?.trim() ? "responded" : m > 0 ? "answered" : "unanswered"),
          ...e.metadata?.source && {
            source_hash: sn(e.metadata.source)
          }
        }), {
          data: {
            questions: s,
            answers: t,
            ...a?.trim() && {
              response: a
            },
            ...n && {
              annotations: n
            },
            ...h && {
              afkTimeoutMs: h
            },
            ...d === !0 && {
              followUp: !0
            }
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam({questions: e, answers: t, response: n, annotations: r, afkTimeoutMs: s, followUp: a}, h) {
    let d = e.map(({question: l}) => {
      let w = t[l], x = r?.[l], E = w && w !== Gzt;
      if (!E && !x?.notes) return null;
      let f = [ E ? `"${l}"="${w}"` : `"${l}"=(no option selected)` ];
      if (x?.preview) f.push(`selected preview:\n${x.preview}`);
      if (x?.notes) f.push(`notes: ${x.notes}`);
      return f.join(" ");
    }).filter(l => l !== null).join(", "), m;
    if (s) m = d ? `${W(s)}\n\nBefore going idle the user had selected: ${d}.` : W(s); else if (a) {
      let l = n?.trim() ? ` They also wrote: "${n}".` : "";
      m = d ? `${uIt} before you proceed. So far they answered: ${d}.${l} Call ${Yo} again with follow-up questions that build on these answers (do not repeat these); do not start the task yet.` : `${uIt} before answering.${l} Call ${Yo} again now with further questions about this decision (do not repeat these); do not proceed with the task yet.`;
    } else if (n?.trim()) m = `The user responded: ${n}`; else if (d) m = e.every(({question: w, options: x, multiSelect: E, kind: f, min: R, max: O}) => {
      if (r?.[w]?.notes) return !1;
      if (f === "text" || f === "number") {
        let q = t[w];
        if (q === void 0 || q === "") return !0;
        if (f === "text" || typeof q !== "string") return !1;
        let C = q.trim(), j = Number(C);
        return /^-?\d+(\.\d+)?$/.test(C) && Number.isFinite(j) && (R === void 0 || j >= R) && (O === void 0 || j <= O);
      }
      let y = t[w], A = new Set(x.map(q => q.label));
      if (Array.isArray(y)) return E && y.length > 0 && y.every(q => A.has(q));
      if (!y || y === Gzt) return !0;
      if (A.has(y)) return !0;
      if (!E) return !1;
      let b = H(y);
      return b !== null && b.length >= 1 && SSt(b) === y && b.every(q => A.has(q));
    }) ? `Your questions have been answered: ${d}. You can now continue with these answers in mind.` : `The user answered: ${d}. Read the answers carefully \u2014 they may request clarification, changes, or that you not proceed \u2014 and follow what they actually say.`; else m = "The user did not answer the questions.";
    return {
      type: "tool_result",
      content: m,
      tool_use_id: h
    };
  }
});

function Ae(e) {
  if (e === void 0) return null;
  if (/<\s*(html|body|!doctype)\b/i.test(e)) return "preview must be an HTML fragment, not a full document (no <html>, <body>, or <!DOCTYPE>)";
  if (/<\s*(script|style)\b/i.test(e)) return "preview must not contain <script> or <style> tags. Use inline styles via the style attribute if needed.";
  if (!/<[a-z][^>]*>/i.test(e)) return 'preview must contain HTML (previewFormat is set to "html"). Wrap content in a tag like <div> or <pre>.';
  return null;
}

export { SSt, Gzt, yJ };
