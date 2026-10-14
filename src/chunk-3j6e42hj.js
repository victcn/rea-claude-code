// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { P6e, XFe } from "./chunk-bdevabaf.js";

import { wt, hMt } from "./chunk-hk8p0fqv.js";

import { Snt } from "./chunk-exeqjnzg.js";

async function gp(r, e, o, t) {
  let a = wt(r.slug);
  if (!!e.toolUseId && a?.lastProbeToolUseId === e.toolUseId) return;
  let s = Date.now(), [l] = await Promise.all([ Snt(r, e.abortController.signal, e.credentials, t), XFe() ? P6e(r, e.abortController.signal) : void 0 ]);
  hMt(r.slug, l, {
    consumedByCheck: !0,
    toolUseId: e.toolUseId,
    issuedAt: s,
    debugLabel: o
  });
}

async function aEn(r, e, o) {
  let t = Date.now(), a = await Snt(r, e.abortController.signal, e.credentials);
  hMt(r.slug, a, {
    consumedByCheck: !1,
    toolUseId: e.toolUseId,
    issuedAt: t,
    debugLabel: o
  });
}

export { gp, aEn };
