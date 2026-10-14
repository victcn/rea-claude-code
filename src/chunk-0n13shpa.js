// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pXr } from "./chunk-69rr80fg.js";

import { xBn } from "./chunk-6sf4kq52.js";

import { L5o } from "./chunk-8gwggqz1.js";

import { H5o } from "./chunk-4yshxqx2.js";

import { Ya } from "./chunk-f1zpf9me.js";

import { PJo } from "./chunk-fw01syjs.js";

import { fb } from "./chunk-yrmy36g6.js";

import { Cce } from "./chunk-de9nc4rq.js";

import { iK } from "./chunk-1dj3skht.js";

function a(e, r) {
  return Object.entries(e.frameUrls ?? {}).find(([o, s]) => s?.url !== void 0 && !Cce(o) && Ya(s.url) === r)?.[0];
}

function l(e) {
  return Object.entries(e.frameUrls ?? {}).flatMap(([r, o]) => {
    if (o?.url === void 0 || Cce(r)) return [];
    if (o.dismissed === !0) return [];
    let s = Ya(o.url), t = o.routineUnasked === !0 || o.commentUnasked === !0;
    return s === null ? [] : [ {
      path: r,
      slug: s,
      url: o.url,
      unasked: t
    } ];
  });
}

function d(e, r) {
  return (e.workshopVerifiedSlugs ?? []).includes(r) || Object.entries(e.frameUrls ?? {}).some(([o, s]) => s?.url !== void 0 && Ya(s.url) === r && xBn(o));
}

var c = Object.freeze({}), m = iK("artifactReadConsentSlugs", c), g = iK("artifactConsentEpoch", 0);

function $Vr(e, r) {
  return {
    ownPublishes: pXr(e, r),
    workshopTelemetry: PJo(e, r),
    whiteboardTelemetry: H5o(e, r),
    prReviewTargets: L5o(e, r),
    recordedPages: {
      isWorkshopPage: o => d(e(), o),
      localSourcePath: o => a(e(), o),
      heldSourcePages: () => l(e())
    },
    sharedReadConsent: m(e, r),
    consentEpoch: g(e, r)
  };
}

function Cet() {
  let e = {};
  return $Vr(() => e, r => {
    e = r(e);
  });
}

var Ret = {
  assign: () => fb[0],
  get: () => {}
};

function e2e(e) {
  return {
    assign(r) {
      let o = e.get(), s = o.assignments.get(r);
      if (s) return s;
      let t = fb[o.index % fb.length];
      return e.set(n => {
        if (n.assignments.has(r)) return n;
        let i = new Map(n.assignments);
        return i.set(r, t), {
          assignments: i,
          index: n.index + 1
        };
      }), t;
    },
    get(r) {
      return e.get().assignments.get(r);
    }
  };
}

var pne = Object.freeze({
  bridge: void 0,
  channel: void 0
});

class EZn {
  #e=void 0;
  #r=void 0;
  get bridge() {
    return this.#e;
  }
  get channel() {
    return this.#r;
  }
  connectBridge(e) {
    this.#e = e;
  }
  disconnectBridge() {
    this.#e = void 0;
  }
  setChannel(e) {
    this.#r = e;
  }
}

export { $Vr, Cet, Ret, e2e, pne, EZn };
