// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { RFe } from "./chunk-9tdwgnpn.js";

import { p } from "./chunk-jkzenvsk.js";

import { je, Rt } from "./chunk-s2t7g8m9.js";

import { o, v, M, u, U, A } from "./chunk-cvcg6n1z.js";

var d = 2147483647;

var QBr = 2, c = 64, y = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/, l = p(() => v().int().min(0).max(d)), S = p(() => u({
  side: U([ "device", "cloud" ]),
  generation: l(),
  tree: o().regex(y).nullable(),
  appliedGeneration: l(),
  mayHaveUnuploadedChanges: M(),
  shipping: l().nullable(),
  appliesOtherSide: M(),
  instanceId: o().regex(RFe),
  sequence: v().int().min(0).max(d)
})), m = [ "shipped", "shipping", "unchanged", "deferred", "kept_here", "failed", "not_running" ], f = e => o().max(e).regex(/^[a-z0-9_]+$/), s = p(() => f(c)), h = p(() => u({
  v: A(QBr),
  frame: S(),
  outcome: u({
    kind: U(m),
    reason: s().optional()
  }),
  ask_id: o().regex(RFe).optional()
}));

function Rzo(e) {
  let n = h().safeParse(e);
  if (!n.success) return null;
  let {v: t, frame: r, outcome: a, ask_id: i} = n.data;
  if (r.side !== "device") return null;
  return {
    v: t,
    frame: r,
    outcome: {
      kind: a.kind,
      ...a.reason !== void 0 && {
        reason: a.reason
      }
    },
    ...i !== void 0 && {
      askId: i
    }
  };
}

function xzo(e) {
  let n = s().safeParse(e.outcome.reason);
  return {
    v: e.v,
    frame: e.frame,
    outcome: {
      kind: e.outcome.kind,
      ...n.success && {
        reason: n.data
      }
    },
    ...e.askId !== void 0 && {
      ask_id: e.askId
    }
  };
}

var g = {
  frame: null,
  heardAt: null,
  stale: !0
};

function sZe() {
  let e = new Map, n = r => `${r.source}:${r.name}`, t = r => {
    let a = e.get(n(r));
    return a !== void 0 && a.servingEpoch === r.description?.epoch ? a.value : void 0;
  };
  return {
    of: t,
    file(r, a) {
      let i = r.description?.epoch;
      if (i !== void 0) e.set(n(r), {
        servingEpoch: i,
        value: a(t(r))
      });
    }
  };
}

function Pzo() {
  let e = sZe(), n = 0;
  return {
    peer(t) {
      let r = e.of(t);
      return r === void 0 ? g : {
        frame: r.frame,
        heardAt: r.heardAt,
        stale: r.era < n
      };
    },
    heard(t, r, a) {
      e.file(t, i => i === void 0 || i.frame.instanceId !== r.instanceId || r.sequence > i.frame.sequence ? {
        frame: r,
        heardAt: a,
        era: n
      } : i);
    },
    invalidateAll() {
      n += 1;
    }
  };
}

var _ = /^(bash|powershell|bash\+powershell)(?::(core|desktop))?$/;

function Azo(e) {
  let n = [ ...e.bash ? [ "bash" ] : [], ...e.powershell ? [ "powershell" ] : [] ];
  if (n.length === 0) return;
  let t = e.powershell?.edition;
  return `${n.join("+")}${t === void 0 ? "" : `:${t}`}`;
}

function Lgn(e) {
  let n = e === void 0 ? null : _.exec(e);
  if (n === null) return;
  let t = n[2];
  if (n[1] === "bash") return t === void 0 ? {
    bash: !0,
    powershell: void 0
  } : void 0;
  return {
    bash: n[1] === "bash+powershell",
    powershell: {
      edition: t
    }
  };
}

function Czo(e, n) {
  return {
    bash: e.includes(je),
    powershell: e.includes(Rt) ? {
      edition: n ?? void 0
    } : void 0
  };
}

var iJ = 864e5;

export { Azo, Lgn, Czo, iJ, QBr, Rzo, xzo, sZe, Pzo };
