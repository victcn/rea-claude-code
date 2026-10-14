// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Hv, Rme, Fje, Ze } from "./chunk-3pqddg8f.js";

import { x } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { dt } from "./chunk-dd98x6x7.js";

import { Re } from "./chunk-jzzyv7tj.js";

import { yHn } from "./chunk-ev4h7zsr.js";

import { Kt, Ae, F } from "./chunk-cpyd3eya.js";

import { _s } from "./chunk-1dj3skht.js";

var {floor: N, random: j} = Math;

function D(e, n) {
  return e + N(j() * (n - e + 1));
}

var E = D;

function B(e) {
  var n = e.length;
  return n ? e[E(0, n - 1)] : void 0;
}

var b = B;

function V(e, n) {
  return Fje(n, function(i) {
    return e[i];
  });
}

var T = V;

function H(e) {
  return e == null ? [] : T(e, Rme(e));
}

var k = H;

function G(e) {
  return b(k(e));
}

var M = G;

function W(e) {
  var n = Hv(e) ? b : M;
  return n(e);
}

var lB = W;

F();

function C1t() {
  let n = dt().spinnerVerbs;
  if (!n) return v;
  if (n.mode === "replace") return n.verbs.length > 0 ? n.verbs : v;
  return [ ...v, ...n.verbs ];
}

var v = [ "Accomplishing", "Actioning", "Actualizing", "Architecting", "Baking", "Beaming", "Beboppin'", "Befuddling", "Billowing", "Blanching", "Bloviating", "Boogieing", "Boondoggling", "Booping", "Bootstrapping", "Brewing", "Bunning", "Burrowing", "Calculating", "Canoodling", "Caramelizing", "Cascading", "Catapulting", "Cerebrating", "Channeling", "Choreographing", "Churning", "Clauding", "Coalescing", "Cogitating", "Combobulating", "Composing", "Computing", "Concocting", "Considering", "Contemplating", "Cooking", "Crafting", "Creating", "Crunching", "Crystallizing", "Cultivating", "Deciphering", "Deliberating", "Determining", "Dilly-dallying", "Discombobulating", "Doing", "Doodling", "Drizzling", "Ebbing", "Effecting", "Elucidating", "Embellishing", "Enchanting", "Envisioning", "Fermenting", "Fiddle-faddling", "Finagling", "Flamb\xe9ing", "Flibbertigibbeting", "Flowing", "Flummoxing", "Fluttering", "Forging", "Forming", "Frolicking", "Frosting", "Gallivanting", "Galloping", "Garnishing", "Generating", "Gesticulating", "Germinating", "Gitifying", "Grooving", "Gusting", "Harmonizing", "Hashing", "Hatching", "Herding", "Honking", "Hullaballooing", "Hyperspacing", "Ideating", "Imagining", "Improvising", "Incubating", "Inferring", "Infusing", "Ionizing", "Jitterbugging", "Julienning", "Kerfuffling", "Kneading", "Leavening", "Levitating", "Lollygagging", "Manifesting", "Marinating", "Meandering", "Metamorphosing", "Misting", "Moonwalking", "Moseying", "Mulling", "Mustering", "Musing", "Nebulizing", "Nesting", "Newspapering", "Noodling", "Nucleating", "Onioning", "Orbiting", "Orchestrating", "Osmosing", "Perambulating", "Percolating", "Perusing", "Philosophizing", "Photosynthesizing", "Polishing", "Pollinating", "Pondering", "Pontificating", "Pouncing", "Precipitating", "Prestidigitating", "Processing", "Proofing", "Propagating", "Puttering", "Puzzling", "Quantumizing", "Razzle-dazzling", "Razzmatazzing", "Recombobulating", "Reticulating", "Roosting", "Ruminating", "Saut\xe9ing", "Scampering", "Schlepping", "Scurrying", "Seasoning", "Shenaniganing", "Shimmying", "Simmering", "Skedaddling", "Sketching", "Slithering", "Smooshing", "Sock-hopping", "Spelunking", "Spinning", "Sprouting", "Stewing", "Sublimating", "Swirling", "Swooping", "Symbioting", "Synthesizing", "Tempering", "Thinking", "Thundering", "Tinkering", "Tomfoolering", "Topsy-turvying", "Transfiguring", "Transmogrifying", "Transmuting", "Twisting", "Undulating", "Unfurling", "Unraveling", "Vibing", "Waddling", "Wandering", "Warping", "Whatchamacalliting", "Whirlpooling", "Whirring", "Whisking", "Wibbling", "Working", "Wrangling", "Zesting", "Zigzagging" ];

var Jmn = "API error";

function w(e) {
  try {
    let n = Y(e);
    if (n === null || n === "not_a_retry_status" || e === null || e.kind !== "retrying") return {
      status: n === null ? e : null,
      malformed: n
    };
    if (![ e.attempt, e.maxRetries, e.deadline ].every(Number.isFinite)) return {
      status: null,
      malformed: "counters_are_not_numbers"
    };
    let i = e.error, l = typeof i === "object" && i !== null && "status" in i ? i.status : void 0;
    return {
      status: {
        ...e,
        error: {
          ...U,
          status: typeof l === "number" && Number.isFinite(l) ? l : void 0
        }
      },
      malformed: n
    };
  } catch {
    return {
      status: null,
      malformed: "unreadable"
    };
  }
}

function P(e) {
  d(new O(K[e]));
}

var A = {
  retrying: !0,
  stalled: !1,
  auto_mode_unavailable: !1,
  low_priority_waiting: !1
}, U = {
  message: Jmn,
  status: void 0,
  requestId: void 0,
  formatted: Jmn,
  connection: null,
  isNetworkDown: !1,
  rateLimits: null,
  noResponse: null
}, C = "Spinner ignored an API retry status it could not draw (session unaffected): ", p = "Spinner replaced the error details of an API retry status it could not draw (session unaffected): ", K = {
  not_a_retry_status: C + "it is not an object with a known kind",
  unreadable: C + "reading it threw",
  counters_are_not_numbers: C + "its error field is unusable and its counters are not numbers",
  error_is_nullish: p + "its error field is undefined or null",
  error_is_a_string: p + "its error field is a string",
  error_is_not_an_object: p + "its error field is a number, boolean, bigint, symbol or function",
  formatted_is_not_a_string: p + "error.formatted is set but is not a string",
  rate_limit_type_is_not_a_string: p + "error.rateLimits.rateLimitType is set but is not a string",
  error_is_an_error_instance: p + "error.formatted is undefined on an Error instance",
  error_has_no_keys: p + "error.formatted is undefined on an object with no keys",
  error_has_api_error_keys: p + "error.formatted is undefined on an object that has the headers or requestID key of an SDK APIError",
  error_has_snapshot_keys: p + "error.formatted is undefined on an object that has the connection or isNetworkDown key of an error snapshot",
  error_is_another_object: p + "error.formatted is undefined on another kind of object"
};

class O extends x {
  constructor(e) {
    super(e);
    this.name = "MalformedRetryStatusError";
  }
}

function Y(e) {
  if (e === null) return null;
  let n = typeof e === "object" && "kind" in e ? e.kind : void 0;
  if (!q(n)) return "not_a_retry_status";
  if (!A[n]) return null;
  let i = typeof e === "object" && "error" in e ? e.error : void 0;
  if (i === void 0 || i === null) return "error_is_nullish";
  if (typeof i === "string") return "error_is_a_string";
  if (typeof i !== "object") return "error_is_not_an_object";
  let l = "formatted" in i ? i.formatted : void 0;
  if (typeof l === "string") {
    let a = "rateLimits" in i ? i.rateLimits : void 0, c = (typeof a === "object" || typeof a === "function") && a !== null && "rateLimitType" in a ? a.rateLimitType : void 0;
    return c === void 0 || c === null || typeof c === "string" ? null : "rate_limit_type_is_not_a_string";
  }
  if (l !== void 0) return "formatted_is_not_a_string";
  return i instanceof Error ? "error_is_an_error_instance" : Object.keys(i).length === 0 ? "error_has_no_keys" : "headers" in i || "requestID" in i ? "error_has_api_error_keys" : "connection" in i || "isNetworkDown" in i ? "error_has_snapshot_keys" : "error_is_another_object";
}

function q(e) {
  return typeof e === "string" && Object.hasOwn(A, e);
}

var y = Object.freeze({
  mode: "responding",
  overrideMessage: null,
  overrideColor: null,
  overrideShimmerColor: null,
  isCompacting: !1,
  compactingHintText: null,
  compactingStartTime: null,
  turnEffort: null,
  turnModel: null,
  retryStatus: null,
  thinkingStartedAt: null,
  outputLimitRecovery: null,
  defaultVerb: ""
});

function ZUr({onMalformedRetryStatus: e = P} = {}) {
  let n = _s({}), i = new Set;
  function l(t, u, {materialize: f = !0} = {}) {
    n.setState(m => {
      let h = t in m;
      if (!h && !f) return m;
      let R = m[t] ?? {
        ...y,
        defaultVerb: lB(C1t()) ?? ""
      }, _ = u(R);
      if (_ === R && h) return m;
      return {
        ...m,
        [t]: _
      };
    });
  }
  function a(t) {
    function u(r, o) {
      let s = Date.now(), g = r === "requesting" ? o ?? null : null;
      l(t, S => S.mode === r && S.outputLimitRecovery === g ? S : {
        ...S,
        mode: r,
        thinkingStartedAt: r === "thinking" ? s : null,
        outputLimitRecovery: g
      });
    }
    function f(r) {
      l(t, o => o.overrideMessage === r ? o : {
        ...o,
        overrideMessage: r
      });
    }
    function m(r, o) {
      l(t, s => s.overrideColor === r && s.overrideShimmerColor === o ? s : {
        ...s,
        overrideColor: r,
        overrideShimmerColor: o
      });
    }
    function h(r, o = null) {
      l(t, s => s.turnEffort === r && s.turnModel === o ? s : {
        ...s,
        turnEffort: r,
        turnModel: o
      }, {
        materialize: r !== null || o !== null
      });
    }
    function R(r) {
      let {status: o, malformed: s} = w(r);
      if (s !== null && !i.has(s)) {
        i.add(s);
        try {
          e(s);
        } catch {}
      }
      l(t, g => g.retryStatus === o ? g : {
        ...g,
        retryStatus: o
      });
    }
    function _(r, o = null) {
      let s = Date.now();
      l(t, g => {
        if (g.isCompacting === r && g.compactingHintText === o) return g;
        let S = r ? g.compactingStartTime ?? s : null;
        return {
          ...g,
          isCompacting: r,
          compactingHintText: o,
          compactingStartTime: S
        };
      });
    }
    function L() {
      l(t, r => r.overrideMessage === null && r.overrideColor === null && r.overrideShimmerColor === null && !r.isCompacting && r.compactingHintText === null && r.compactingStartTime === null ? r : {
        ...r,
        overrideMessage: null,
        overrideColor: null,
        overrideShimmerColor: null,
        isCompacting: !1,
        compactingHintText: null,
        compactingStartTime: null
      });
    }
    function z() {
      let r = lB(C1t()) ?? "";
      l(t, o => ({
        ...o,
        overrideMessage: null,
        overrideColor: null,
        overrideShimmerColor: null,
        isCompacting: !1,
        compactingHintText: null,
        compactingStartTime: null,
        turnEffort: null,
        turnModel: null,
        retryStatus: null,
        outputLimitRecovery: null,
        defaultVerb: r
      }));
    }
    function I(r) {
      switch (r.type) {
       case "hooks_start":
        m("claudeBlue_FOR_SYSTEM_SPINNER", "claudeBlueShimmer_FOR_SYSTEM_SPINNER"), f(r.hookType === "pre_compact" ? "Running PreCompact hooks\u2026" : r.hookType === "post_compact" ? "Running PostCompact hooks\u2026" : yHn);
        return;

       case "compact_start":
        f("Compacting conversation"), _(!0, r.hintText ?? null);
        return;

       case "compact_end":
        L();
        return;
      }
    }
    return {
      setMode: u,
      setMessage: f,
      setColors: m,
      setTurnEffort: h,
      setRetryStatus: R,
      setCompacting: _,
      resetOverrides: z,
      applyCompactProgress: I
    };
  }
  let c = {
    setMode: (t, u) => a(Ze()).setMode(t, u),
    setMessage: t => a(Ze()).setMessage(t),
    setColors: (t, u) => a(Ze()).setColors(t, u),
    setTurnEffort: (t, u) => a(Ze()).setTurnEffort(t, u),
    setRetryStatus: t => a(Ze()).setRetryStatus(t),
    setCompacting: (t, u) => a(Ze()).setCompacting(t, u),
    resetOverrides: () => a(Ze()).resetOverrides(),
    applyCompactProgress: t => a(Ze()).applyCompactProgress(t)
  };
  return {
    getSnapshot: n.getSnapshot,
    getState: n.getState,
    setState: n.setState,
    subscribe: n.subscribe,
    get(t) {
      return n.getState()[t ?? Ze()] ?? y;
    },
    bind: a,
    main: c,
    evict(t) {
      n.setState(u => {
        if (!(t in u)) return u;
        let {[t]: f, ...m} = u;
        return m;
      });
    },
    applyEvent(t) {
      switch (t.kind) {
       case "agent-mode":
        a(t.agentId).setMode(t.mode, t.outputLimitRecovery);
        return;

       case "agent-retry-status":
        a(t.agentId).setRetryStatus(t.retryStatus);
        return;

       case "agent-turn-effort":
        a(t.agentId).setTurnEffort(t.turnEffort, t.turnModel);
        return;

       case "main-message":
        c.setMessage(t.message);
        return;

       case "main-colors":
        c.setColors(t.color, t.shimmerColor);
        return;
      }
    }
  };
}

var w9n = Kt(null);

function kge() {
  let e = Ae(w9n);
  if (!e) throw ReferenceError("useSpinnerStore cannot be called outside of a SpinnerStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}

function eBr(e) {
  let n = e ?? Ze();
  return Re(kge(), i => i[n] ?? y);
}

function tBr(e) {
  return Re(kge(), n => (n[e] ?? y).thinkingStartedAt);
}

function nBr(e) {
  return Re(kge(), n => (n[e] ?? y).retryStatus);
}

export { lB, C1t, Jmn, ZUr, w9n, kge, eBr, tBr, nBr };
