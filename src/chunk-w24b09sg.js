// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rr } from "./chunk-xywp7esx.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-9yajep3y.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

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

import "./chunk-jkzenvsk.js";

import { f4n, DG } from "./chunk-5brm0azz.js";

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

import "./chunk-s2t7g8m9.js";

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

import "./chunk-t26295zc.js";

import "./chunk-8drhysk2.js";

import { Oz, WS } from "./chunk-9wtp3skp.js";

import "./chunk-3btm71fm.js";

import "./chunk-jbphjy99.js";

import "./chunk-whs0esmw.js";

import "./chunk-g5zagpgq.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

import { C, Nr } from "./chunk-m8ez8fhk.js";

var k = C(function(ve, w) {
  w.exports = {
    scan: {
      hooks: [ "prompt.section", "prompt.submit", "ui.render" ],
      calls: [ "turn.abort" ]
    },
    files: {}
  };
});

var d = {};

Nr(d, {
  DRAFT_HINT: () => y,
  FOCUS_MODE: () => u,
  PLUGIN_LISTING: () => h,
  REMINDER: () => m,
  SECTION: () => l,
  cutsTheTurn: () => p,
  default: () => d,
  isAvailable: () => c,
  isOnByDefault: () => f,
  register: () => O,
  registerHooks: () => i,
  registerPlugin: () => _,
  spliceDraftHint: () => g,
  typedByTheUser: () => n
});

function n(e) {
  let s = e.text.trim();
  return e.origin.kind === "composer" && e.attachments === void 0 && s !== "" && !s.startsWith("/");
}

var p = e => n(e) && e.turnId !== void 0 && !e.wait;

var y = "enter to interrupt and send \xb7 ctrl+x then enter to queue", g = () => "enter to interrupt and send \xb7 ctrl+x then enter to queue";

var u = "focus_mode";

var m = `<responsive-mode>\nResponsive mode is on. Reply to the user's message above right away, before\nany thinking or tool use, even if it is just "I'm on it..." or "Let me\nthink..." when you need to think first. Write in clear, conversational\nEnglish, the way a sharp colleague writes in chat, without eager openers,\nflattery, stock apologies or wrap-ups. Then continue the work.\n</responsive-mode>`;

var l = `# Responsive mode\nResponsive mode: the user is watching a live terminal and your #1 priority\nis to communicate with them quickly. Before you think or call any tool,\nrespond IMMEDIATELY with a short message: one or two plain sentences that\nacknowledge the request and say what you are about to do. If you need to\nthink first, say so in a few words ("On it...", "Let me think...") and then\nthink. Only then continue with thinking and tool use. Do this at the start\nof every turn, and again whenever the user sends a new message while you\nare working: answer them first, then resume.\n\nKeep those messages short; the first one should take no more than a\nsentence or two. Saying what you are about to do before your first tool\ncall is mandatory in responsive mode, and it comes first.\n\n## Clear, conversational English, with no Claude-isms\nWrite the way a sharp colleague writes in chat: direct, specific, plain.\nAvoid these patterns and their cousins:\n- Eager openers: "Great question!", "Certainly!", "Absolutely!", "Sure\n  thing!", "Of course!", "I'd be happy to..."\n- Agreement and flattery reflexes: "You're absolutely right", "Good\n  catch!", "That's a great point"\n- Stock apologies: "I apologize for the confusion", "Sorry for the\n  oversight", "You're right to push back"\n- Throat-clearing: "It's worth noting that", "It's important to note",\n  "Essentially", "Basically", "Notably", "To be clear"\n- Corporate vocabulary: leverage, robust, seamless, comprehensive,\n  streamline, utilize, delve, dive into, crucial, ensure, landscape,\n  navigate (a problem), holistic\n- Wrap-ups: "In summary", "To summarize", "Hope this helps!", "Let me know\n  if you'd like...", "Feel free to...", "Happy to help further"\n- Narrated transitions inside an answer: "Here's what I found:", "Let me\n  break this down", "Now, let's look at..."; just say the thing. (The quick\n  first reply, "On it...", is different and wanted.)\n- Restating the user's question back before answering it; reflexive\n  hedging ("it depends", "there are many factors") when you actually have\n  an answer; headers and bullet lists for an answer that fits in two\n  sentences.\n- Emoji, and exclamation-mark enthusiasm in general.\nSay what you found, what you did, what you need, and stop.`;

function i(e, s) {
  e("prompt.section", {
    name: u
  }, async (a, t, r) => {
    let {text: o} = await r(t);
    return {
      text: o === null ? l : o
    };
  }), e("prompt.submit", async (a, t, r) => {
    if (!n(t)) return r(t);
    let o = await r({
      ...t,
      context: [ ...t.context ?? [], m ]
    });
    if (o.drop === void 0 && p(t) && !s()) await a.turn.abort({
      turnId: t.turnId
    }).catch(() => {});
    return o;
  }), e("ui.render", {
    component: "PromptHint"
  }, async (a, t, r) => {
    if (!(t.props.isDraft && t.props.isWorking)) return r(t);
    let o = s() ? g() : y, b = t.surface === "terminal" ? {
      tail: o
    } : {
      hint: o
    };
    return r({
      ...t,
      props: {
        ...t.props,
        ...b
      }
    });
  });
}

function O(e) {
  i(e, () => !1);
}

var f = () => !1;

var c = () => DG() && !f4n() && Rr("tengu_quiet_ember", f());

var h = {
  name: "cc-plugin-responsive-mode",
  description: "Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",
  isAvailable: c,
  defaultEnabled: !1
};

var _ = () => WS({
  ...h,
  hooksModule: Oz(import.meta.dir, {
    register: e => i(e, B)
  }, () => k())
});

function B() {
  return !1;
}

export { y as DRAFT_HINT, u as FOCUS_MODE, h as PLUGIN_LISTING, m as REMINDER, l as SECTION, p as cutsTheTurn, d as default, c as isAvailable, f as isOnByDefault, O as register, i as registerHooks, _ as registerPlugin, g as spliceDraftHint, n as typedByTheUser };
