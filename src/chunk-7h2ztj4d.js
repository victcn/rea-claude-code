// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function i6r() {
  return {
    view: void 0,
    logs: [],
    unreadErrors: 0,
    unreadWarnings: 0,
    cleanupRegistered: !1
  };
}

function a6r(n) {
  return o => n(e => {
    let r = {
      webBrowser: e.webBrowser,
      bagelActive: e.bagelActive,
      bagelUrl: e.bagelUrl,
      bagelPanelVisible: e.bagelPanelVisible
    }, t = o(r);
    if (t === r) return e;
    return {
      ...e,
      ...t
    };
  });
}

export { i6r, a6r };
