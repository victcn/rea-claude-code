// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, vI, B } from "./chunk-3pqddg8f.js";

var r = new K(() => Me());

function i() {
  return r.of(B().host);
}

var CNe = vI(i);

function hHn(e) {
  return {
    setMode(t) {
      CNe.emit({
        kind: "agent-mode",
        agentId: e,
        mode: t
      });
    },
    setRetryStatus(t) {
      CNe.emit({
        kind: "agent-retry-status",
        agentId: e,
        retryStatus: t
      });
    },
    setTurnEffort(t, n = null) {
      CNe.emit({
        kind: "agent-turn-effort",
        agentId: e,
        turnEffort: t,
        turnModel: n
      });
    }
  };
}

var yHn = "Running SessionStart hooks\u2026", RNe = {
  setSpinnerMessage(e) {
    CNe.emit({
      kind: "main-message",
      message: e
    });
  },
  setSpinnerColors(e, t) {
    CNe.emit({
      kind: "main-colors",
      color: e,
      shimmerColor: t
    });
  }
};

export { CNe, hHn, yHn, RNe };
