// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { s, n } from "./chunk-3vw306fv.js";

import { G } from "./chunk-j706jx8h.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { rt } from "./chunk-ytac37d4.js";

import { Se } from "./chunk-sebqm9p5.js";

import { aPn } from "./chunk-84yp45y8.js";

import { Wn } from "./chunk-4v78v8fd.js";

import { be } from "./chunk-gqmex880.js";

import { nke } from "./chunk-yd15xjj2.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { P, F } from "./chunk-cpyd3eya.js";

F();

function qFr({configHome: _, storageV5: h, origin: l, onDone: w}) {
  let a = l === "first_run", o = nke(w, {
    selfOpened: a,
    onCancelled: t => f("ccr_home_seed_mode_prompt", t ? "cancelled_saving" : "cancelled")
  });
  rt("confirm:no", () => p("not_now"), {
    context: "Confirmation",
    isActive: a && !o.decided
  }), P(() => {
    i("tengu_home_settings_mode_prompt_shown", {
      origin: c(l)
    });
  }, [ l ]);
  function p(t) {
    if (!o.take()) return;
    if (i("tengu_home_settings_mode_prompt", {
      choice: c(t),
      origin: c(l)
    }), t === "not_now") {
      f("ccr_home_seed_mode_prompt", "dismissed"), o.handBack(t);
      return;
    }
    aPn(t, h).then(u => {
      if (o.settled()) return;
      switch (u) {
       case "refused":
        m("ccr_home_seed_mode_prompt", "not_written"), o.handBack("not_saved");
        return;

       case "not_stored":
        m("ccr_home_seed_mode_prompt", "not_stored"), o.handBack("not_stored");
        return;

       case "unconfirmed":
        f("ccr_home_seed_mode_prompt", "unconfirmed");
        break;

       case "written":
        if (t === "forward") g("ccr_home_seed_mode_prompt"); else f("ccr_home_seed_mode_prompt", "declined");
        break;
      }
      o.handBack(t);
    }, u => {
      if (d(u), o.settled()) return;
      m("ccr_home_seed_mode_prompt", "write_failed"), o.handBack("not_saved");
    });
  }
  if (o.decided) return o.exitHintShowing ? r(n, {
    dimColor: !0,
    italic: !0,
    children: [ "Press ", o.exit.keyName, " again to exit" ]
  }) : null;
  return r(be, {
    title: "Use this machine's settings in cloud sessions?",
    onCancel: () => p("not_now"),
    isCancelActive: !a,
    inputGuide: o.exit.pending ? r(n, {
      children: [ "Press ", o.exit.keyName, " again to exit" ]
    }) : r(Se, {
      children: [ e(G, {
        chord: "enter",
        action: "confirm"
      }), e(pt, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "skip for now"
      }) ]
    }),
    children: [ r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ e(n, {
        bold: !0,
        children: Wn(_)
      }), e(n, {
        children: "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus your portable permission rules, into each claude --cloud session. It skips credential files and files your Read rules or sandbox settings deny (your preferences and permission rules are still sent), never sends hooks, environment variables, MCP servers, or plugins, and copies no file from outside this folder, even through a link or an @import. Deny and ask rules can go with their paths; file rules need a ~/ or relative path. What is sent is encrypted at rest, and each launch shows whether it was sent."
      }), e(n, {
        dimColor: !0,
        children: "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud."
      }) ]
    }), e(Xe, {
      options: [ {
        label: "Yes, send my settings",
        value: "forward"
      }, {
        label: "No, keep them on this machine",
        value: "keep_local"
      }, {
        label: "Not now",
        value: "not_now"
      } ],
      defaultFocusValue: "not_now",
      hideIndexes: a,
      disablePrintableKeybindings: a,
      isDisabled: o.choicesDisabled,
      refuseInput: o.refuseInput,
      onChange: p,
      onCancel: () => p("not_now")
    }) ]
  });
}

export { qFr };
