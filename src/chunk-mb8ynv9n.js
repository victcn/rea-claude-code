// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Lr } from "./chunk-3pqddg8f.js";

import { p } from "./chunk-jkzenvsk.js";

import { An, Cr, Ft, k } from "./chunk-xywp7esx.js";

import { Ane } from "./chunk-g8dhxbna.js";

import { QEe, xyt, lge } from "./chunk-g069zc0m.js";

import { Sun, wun } from "./chunk-hkkpv0df.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Let, BGt, fhe } from "./chunk-hecs7rck.js";

import { o, u, Kr, A } from "./chunk-cvcg6n1z.js";

function a() {
  return o().regex(/^\P{Cc}*$/u);
}

var h = p(() => Kr("mode", [ u({
  mode: A("one_step")
}), u({
  mode: A("confirm"),
  title: a().optional(),
  body: a().optional(),
  note: a().optional(),
  send: a().optional(),
  cancel: a().optional()
}) ]));

function Pfn() {
  let i = k("tengu_tidy_lemon", null);
  if (i === null || i === void 0) return null;
  let r = h().safeParse(i);
  return r.success ? r.data : null;
}

async function jQe(i, r) {
  let n = Ane(i);
  if (BGt()) return e(wun, {
    onDone: n
  });
  let t = await fhe({
    openInBrowser: !0
  }, r.credentials);
  if (t.type === "message") return n(t.value), null;
  if (t.type === "confirm-admin-request") {
    if (Ft()) return n(Let), null;
    return e(Sun, {
      extraUsage: t.extraUsage,
      flag: Pfn(),
      wouldTakeAnswer: () => !0,
      onDone: n
    });
  }
  let l = Cr();
  if (l === "team" || l === "enterprise") return n(t.opened ? `Opened ${t.url} in your browser to manage usage credits for your organization.` : `Visit ${t.url} to manage usage credits for your organization.`), 
  null;
  if (!t.opened) return n(`Visit ${t.url} to manage usage credits.`), null;
  let s = An(), g = s && {
    accountUuid: s.accountUuid,
    organizationUuid: s.organizationUuid
  }, c = Lr();
  return e(lge, {
    startingMessage: "Starting new login following /usage-credits. Exit with Ctrl-C to use existing account.",
    onDone: async (m, y, d) => {
      let f = await QEe(r, m, {
        setAppState: d,
        previousAccount: g,
        previousGatewayAuth: c
      });
      n(...xyt(r, m, f));
    }
  });
}

export { Pfn, jQe };
