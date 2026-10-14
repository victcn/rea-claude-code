// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C } from "./chunk-m8ez8fhk.js";

var HP = C(function(i) {
  var r = {
    warningEmitted: !1
  }, n = e => {
    if (e && !r.warningEmitted && parseInt(e.substring(1, e.indexOf("."))) < 18) r.warningEmitted = !0, 
    process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will\nno longer support Node.js 16.x on January 6, 2025.\n\nTo continue receiving updates to AWS services, bug fixes, and security\nupdates please upgrade to a supported Node.js LTS version.\n\nMore information can be found at: https://a.co/74kJMmI`);
  };
  function a(e, t, s) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = s, e;
  }
  function o(e, t, s) {
    if (!e.__aws_sdk_context) e.__aws_sdk_context = {
      features: {}
    }; else if (!e.__aws_sdk_context.features) e.__aws_sdk_context.features = {};
    e.__aws_sdk_context.features[t] = s;
  }
  function u(e, t, s) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = s, e;
  }
  i.emitWarningIfUnsupportedVersion = n;
  i.setCredentialFeature = a;
  i.setFeature = o;
  i.setTokenFeature = u;
  i.state = r;
});

export { HP };
