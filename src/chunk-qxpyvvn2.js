// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { vUt, vQe } from "./chunk-bd5sv483.js";

import { en } from "./chunk-0qwx38yy.js";

function FFo(e) {
  return {
    steps: [ {
      id: "check",
      status: "running",
      startedAt: e
    }, {
      id: "create",
      status: "pending"
    } ],
    rerouted: !1,
    folder: !1,
    bundle: null,
    fallback: null,
    requestSent: !1
  };
}

function UFo(e, a, r) {
  switch (a.kind) {
   case "checking":
    return a.folder === !0 && !e.folder ? {
      ...e,
      folder: !0
    } : e;

   case "bundling":
    {
      if (e.fallback !== null || e.steps.some(n => n.id === "bundle") || !e.steps.some(n => n.id === "create" && n.status === "pending")) return e;
      let t = s(e, "check", "completed", r);
      return {
        ...t,
        steps: t.steps.flatMap(n => n.id === "create" ? [ {
          id: "bundle",
          status: "running",
          startedAt: r
        }, ...a.uploadedBySync === !0 ? [] : [ {
          id: "upload",
          status: "pending"
        } ], n ] : [ n ]),
        rerouted: a.rerouted,
        folder: a.folder === !0
      };
    }

   case "bundled":
    {
      let t = s(e, "bundle", "completed", r);
      return t === e ? e : {
        ...d(t, "upload", r),
        bundle: {
          sizeBytes: a.sizeBytes,
          scope: a.scope
        }
      };
    }

   case "bundle_failed":
    {
      let t = e.steps.find(l => l.status === "running" && (l.id === "bundle" || l.id === "upload"));
      if (t === void 0 && e.fallback !== null) return e;
      let n = t === void 0 ? e : s(e, t.id, "failed", r);
      return {
        ...n,
        steps: n.steps.filter(l => !(l.id === "upload" && l.status === "pending")),
        fallback: a.fallback
      };
    }

   case "creating":
    return d(s(s(e, "check", "completed", r), "upload", "completed", r), "create", r);

   case "request_sent":
    return e.requestSent ? e : {
      ...e,
      requestSent: !0
    };

   case "session_exists":
    return e;

   case "created":
    return s(e, "create", "completed", r);
  }
}

function s(e, a, r, t) {
  return e.steps.some(n => n.id === a && n.status === "running") ? {
    ...e,
    steps: e.steps.map(n => n.id === a && n.status === "running" ? {
      ...n,
      status: r,
      completedAt: t
    } : n)
  } : e;
}

function d(e, a, r) {
  return e.steps.some(t => t.id === a && t.status === "pending") ? {
    ...e,
    steps: e.steps.map(t => t.id === a && t.status === "pending" ? {
      ...t,
      status: "running",
      startedAt: r
    } : t)
  } : e;
}

function oQe(e) {
  let a = e.steps.findLast(r => r.status !== "pending");
  switch (a?.id) {
   case void 0:
   case "check":
    return "checking";

   case "bundle":
    return "bundling";

   case "upload":
    return "uploading";

   case "create":
    return a.status === "completed" ? "created" : "creating";
  }
}

var u = {
  all: "with history",
  current_branch: "current branch only",
  head: "current history only",
  squashed: "snapshot without history"
};

function oLr(e, a, r) {
  return {
    label: o(e, a),
    annotation: `${c(e, a)}${vQe(e, r)}`,
    detail: i(e, a)
  };
}

function i(e, a) {
  return;
}

function o(e, {rerouted: a, folder: r}) {
  let t = e.status === "completed";
  switch (e.id) {
   case "check":
    if (r) return t ? "Checked this folder" : "Checking this folder";
    return t ? "Checked this checkout" : "Checking this checkout";

   case "bundle":
    if (r) return t ? "Packaged this folder" : "Packaging this folder";
    if (a) return t ? "Packaged local changes" : "Packaging local changes";
    return t ? "Packaged this repository" : "Packaging this repository";

   case "upload":
    if (a) return t ? "Uploaded your working tree" : "Uploading your working tree";
    return t ? "Uploaded this repository" : "Uploading this repository";

   case "create":
    return t ? "Created cloud session" : "Creating cloud session";
  }
}

function c(e, {bundle: a, folder: r}) {
  if (a === null || e.status !== "running" && e.status !== "completed") return "";
  let t = en(a.sizeBytes);
  switch (e.id) {
   case "bundle":
    return e.status === "completed" ? r ? ` \xb7 ${t}` : ` \xb7 ${t}, ${u[a.scope]}` : "";

   case "upload":
    return e.status === "completed" ? ` \xb7 ${t}` : ` ${t}`;

   case "check":
   case "create":
    return "";
  }
}

function sLr(e) {
  let a = vUt("new");
  return oQe(e) === "created" ? a.replace(/^Setting up/, "Set up") : `${a}\u2026`;
}

function BFo(e) {
  return e !== null && e.requestSent ? "Cancelled after the create request was sent, so a cloud session may still have been created" : "Cancelled before a cloud session was created";
}

export { FFo, UFo, oQe, oLr, sLr, BFo };
