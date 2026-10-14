// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { iGt, aGt } from "./chunk-wcya8cef.js";

import { gM, he } from "./chunk-3pqddg8f.js";

import { Ho, re } from "./chunk-6ah1819r.js";

import { CW, MW, UAt, BAt, GM } from "./chunk-84yp45y8.js";

import { ZA } from "./chunk-584kx1w1.js";

import { PSt } from "./chunk-1zed5dek.js";

import { fi } from "./chunk-ar8d6cs7.js";

function $4s(e) {
  let t = aGt.safeParse(e?.[iGt]);
  return t.success ? {
    taskId: t.data.taskId
  } : null;
}

function F4s(e, t, c, r) {
  if (ZA({
    name: t
  }) !== void 0) return;
  let n = PSt(e, {
    serverName: t,
    requestDialog: c,
    transportErrorState: r,
    runElicitationHooks: lSn,
    runElicitationResultHooks: dSn
  });
  try {
    e.setRequestHandler("elicitation/create", (i, o) => n.handle(i, {
      signal: o.mcpReq.signal
    })), e.setNotificationHandler("notifications/elicitation/complete", i => {
      let {elicitationId: o} = i.params;
      if (re(t, `Received elicitation completion notification: ${o}`), GM(CW(), {
        message: `MCP server "${t}" confirmed elicitation ${o} complete`,
        notificationType: "elicitation_complete"
      }).catch(MW), !n.complete(o)) re(t, `Ignoring completion notification for unknown elicitation: ${o}`);
    });
  } catch {
    return;
  }
}

function SVr({connected: e, params: t, signal: c, requestDialog: r, transportErrorState: n}) {
  return PSt(fi(e.client), {
    serverName: e.name,
    requestDialog: r,
    transportErrorState: e.transportErrorState,
    runElicitationHooks: lSn,
    runElicitationResultHooks: dSn
  }).handle({
    params: t
  }, {
    signal: c,
    transportErrorState: n
  });
}

async function lSn(e, t, c) {
  let r = CW();
  if (r.project === null && !he()) throw new gM;
  try {
    let n = t.mode === "url" ? "url" : "form", i = "url" in t ? t.url : void 0, o = "elicitationId" in t ? t.elicitationId : void 0, {elicitationResponse: s, blockingError: a} = await UAt({
      session: r,
      serverName: e,
      message: t.message,
      requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
      signal: c,
      mode: n,
      url: i,
      elicitationId: o
    });
    if (a) return {
      action: "decline"
    };
    if (s) return {
      action: s.action,
      content: s.content
    };
    return;
  } catch (n) {
    Ho(e, `Elicitation hook error: ${n}`);
    return;
  }
}

async function dSn(e, t, c, r, n) {
  let i = CW();
  if (i.project === null && !he()) throw new gM;
  try {
    let {elicitationResultResponse: o, blockingError: s} = await BAt({
      session: i,
      serverName: e,
      action: t.action,
      content: t.content,
      signal: c,
      mode: r,
      elicitationId: n
    });
    if (s) return GM(i, {
      message: `Elicitation response for server "${e}": decline`,
      notificationType: "elicitation_response"
    }).catch(MW), {
      action: "decline"
    };
    let a = o ? {
      action: o.action,
      content: o.content ?? t.content
    } : t;
    return GM(i, {
      message: `Elicitation response for server "${e}": ${a.action}`,
      notificationType: "elicitation_response"
    }).catch(MW), a;
  } catch (o) {
    return Ho(e, `ElicitationResult hook error: ${o}`), GM(i, {
      message: `Elicitation response for server "${e}": ${t.action}`,
      notificationType: "elicitation_response"
    }).catch(MW), t;
  }
}

export { $4s, F4s, SVr, lSn, dSn };
