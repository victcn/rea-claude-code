// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { _s } from "./chunk-1dj3skht.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var t = {
  notice: null,
  shownLoggedForDraftId: null,
  promptedCount: 0,
  sessionDraftCount: 0,
  seededFromDisk: !1,
  seedStarted: !1,
  toolCallCount: 0
};

class n {
  autoDenyPresence=Me();
  mainLoopBusy=_s({
    busy: !1
  });
  blockingToolProgress=_s({
    active: !1
  });
  dialogHostUnmounted=_s({
    unmounted: !1
  });
  onScreenBlockingDialog=_s({
    surfaceMounted: !1,
    kind: null
  });
  pendingSurveyFeedbackSource=null;
  terminalFocus="unknown";
  terminalFocusGainedAt=Number.NEGATIVE_INFINITY;
  terminalFocusChanged=Me();
  feedbackNotice=_s(t);
  clawdEntranceTaken=!1;
  startupUpdateSummary=void 0;
  experimentEnrollmentsUnseen=void 0;
  orgMemoryWritesRowSeen=!1;
  orgMemoryReadRowSeen=!1;
  remoteHomeSettingsRowSeen=!1;
  configRowsSeen=new Set;
  configRowNotices=new Map;
}

var Ra = Ue(new n, e => {
  e.configRowsSeen.clear(), e.configRowNotices.clear(), e.mainLoopBusy.setState(o => o.busy ? {
    busy: !1
  } : o);
});

export { Ra };
