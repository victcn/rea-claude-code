// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { bU } from "./chunk-3kb22va7.js";

import { xe } from "./chunk-84yp45y8.js";

import { Vqe } from "./chunk-bkx9v5fh.js";

import { qke } from "./chunk-steg50a9.js";

import { qs } from "./chunk-05wvva46.js";

function JQn(e, r, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, a => ({
    ...a,
    messages: Vqe(a.messages, r)
  }));
}

function QWt(e, r, s, a) {
  let n = s.get(e);
  if (!n || qs(n.status)) {
    t(`Dropping message for teammate task ${e}: task status is "${n?.status}"`);
    return;
  }
  s.update(e, m => ({
    ...m,
    pendingUserMessages: [ ...m.pendingUserMessages, {
      text: r,
      origin: a
    } ]
  })), s.updateTranscript(e, m => ({
    ...m,
    messages: Vqe(m.messages, xe({
      content: r,
      origin: a
    }))
  }));
}

function qGr(e, r, s) {
  let a = qke(bU(r, s), e);
  if (a?.status === "running") a.retryWake?.emit();
}

export { JQn, QWt, qGr };
