// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { zO } from "./chunk-rzvcmswq.js";

import { o, v, M, lf, oe, T, u, _t, $e, Kr, Zfe, ue, U, A, ji, Wc, Sa } from "./chunk-cvcg6n1z.js";

var yTe = "2025-11-25", fqr = "2025-03-26", IJ = [ yTe, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07" ], bhe = "io.modelcontextprotocol/related-task", R = "2.0", e = Wc(t => t !== null && (typeof t === "object" || typeof t === "function")), L = $e([ o(), v().int() ]), _ = o(), ee = _t({
  ttl: v().optional(),
  pollInterval: v().optional()
}), F = u({
  ttl: v().optional()
}), Ter = u({
  taskId: o()
}), y = _t({
  progressToken: L.optional(),
  [bhe]: Ter.optional()
}), s = u({
  _meta: y.optional()
}), z = s.extend({
  task: F.optional()
}), mqr = t => z.safeParse(t).success, n = u({
  method: o(),
  params: s.loose().optional()
}), i = u({
  _meta: y.optional()
}), r = u({
  method: o(),
  params: i.loose().optional()
}), a = _t({
  _meta: y.optional()
}), f = $e([ o(), v().int() ]), w = u({
  jsonrpc: A(R),
  id: f,
  ...n.shape
}).strict(), n4 = t => w.safeParse(t).success, J = u({
  jsonrpc: A(R),
  ...r.shape
}).strict(), C2t = t => J.safeParse(t).success, j = u({
  jsonrpc: A(R),
  id: f,
  result: a
}).strict(), hne = t => j.safeParse(t).success;

var _i;

(function(t) {
  t[t.ConnectionClosed = -32e3] = "ConnectionClosed", t[t.RequestTimeout = -32001] = "RequestTimeout", 
  t[t.ParseError = -32700] = "ParseError", t[t.InvalidRequest = -32600] = "InvalidRequest", 
  t[t.MethodNotFound = -32601] = "MethodNotFound", t[t.InvalidParams = -32602] = "InvalidParams", 
  t[t.InternalError = -32603] = "InternalError", t[t.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(_i || (_i = {}));

var P = u({
  jsonrpc: A(R),
  id: f.optional(),
  error: u({
    code: v().int(),
    message: o(),
    data: oe().optional()
  })
}).strict();

var _Te = t => P.safeParse(t).success;

var WL = $e([ w, J, j, P ]), ne = $e([ j, P ]), bTe = a.strict(), H = i.extend({
  requestId: f.optional(),
  reason: o().optional()
}), Uwn = r.extend({
  method: A("notifications/cancelled"),
  params: H
}), W = u({
  src: o(),
  mimeType: o().optional(),
  sizes: T(o()).optional(),
  theme: U([ "light", "dark" ]).optional()
}), d = u({
  icons: T(W).optional()
}), l = u({
  name: o(),
  title: o().optional()
}), Bwn = l.extend({
  ...l.shape,
  ...d.shape,
  version: o(),
  websiteUrl: o().optional(),
  description: o().optional()
}), K = Zfe(u({
  applyDefaults: M().optional()
}), ue(o(), oe())), Y = Sa(t => {
  if (t && typeof t === "object" && !Array.isArray(t)) {
    if (Object.keys(t).length === 0) return {
      form: {}
    };
  }
  return t;
}, Zfe(u({
  form: K.optional(),
  url: e.optional()
}), ue(o(), oe()).optional())), Q = _t({
  list: e.optional(),
  cancel: e.optional(),
  requests: _t({
    sampling: _t({
      createMessage: e.optional()
    }).optional(),
    elicitation: _t({
      create: e.optional()
    }).optional()
  }).optional()
}), X = _t({
  list: e.optional(),
  cancel: e.optional(),
  requests: _t({
    tools: _t({
      call: e.optional()
    }).optional()
  }).optional()
}), Z = u({
  experimental: ue(o(), e).optional(),
  sampling: u({
    context: e.optional(),
    tools: e.optional()
  }).optional(),
  elicitation: Y.optional(),
  roots: u({
    listChanged: M().optional()
  }).optional(),
  tasks: Q.optional(),
  extensions: ue(o(), e).optional()
}), tt = s.extend({
  protocolVersion: o(),
  capabilities: Z,
  clientInfo: Bwn
}), jwn = n.extend({
  method: A("initialize"),
  params: tt
}), Aer = t => jwn.safeParse(t).success, Cer = u({
  experimental: ue(o(), e).optional(),
  logging: e.optional(),
  completions: e.optional(),
  prompts: u({
    listChanged: M().optional()
  }).optional(),
  resources: u({
    subscribe: M().optional(),
    listChanged: M().optional()
  }).optional(),
  tools: u({
    listChanged: M().optional()
  }).optional(),
  tasks: X.optional(),
  extensions: ue(o(), e).optional()
}), Jet = a.extend({
  protocolVersion: o(),
  capabilities: Cer,
  serverInfo: Bwn,
  instructions: o().optional()
}), Wwn = r.extend({
  method: A("notifications/initialized"),
  params: i.optional()
}), gqr = t => Wwn.safeParse(t).success, zwn = n.extend({
  method: A("ping"),
  params: s.optional()
}), et = u({
  progress: v(),
  total: ji(v()),
  message: ji(o())
}), ot = u({
  ...i.shape,
  ...et.shape,
  progressToken: L
}), Gwn = r.extend({
  method: A("notifications/progress"),
  params: ot
}), nt = s.extend({
  cursor: _.optional()
}), x = n.extend({
  params: nt.optional()
}), h = a.extend({
  nextCursor: _.optional()
}), at = U([ "working", "input_required", "completed", "failed", "cancelled" ]), g = u({
  taskId: o(),
  status: at,
  ttl: $e([ v(), lf() ]),
  createdAt: o(),
  lastUpdatedAt: o(),
  pollInterval: ji(v()),
  statusMessage: ji(o())
}), She = a.extend({
  task: g
}), st = i.merge(g), R2t = r.extend({
  method: A("notifications/tasks/status"),
  params: st
}), Vwn = n.extend({
  method: A("tasks/get"),
  params: s.extend({
    taskId: o()
  })
}), Kwn = a.merge(g), qwn = n.extend({
  method: A("tasks/result"),
  params: s.extend({
    taskId: o()
  })
}), ae = a.loose(), Ywn = x.extend({
  method: A("tasks/list")
}), Xwn = h.extend({
  tasks: T(g)
}), Jwn = n.extend({
  method: A("tasks/cancel"),
  params: s.extend({
    taskId: o()
  })
}), hqr = a.merge(g), B = u({
  uri: o(),
  mimeType: ji(o()),
  _meta: ue(o(), oe()).optional()
}), G = B.extend({
  text: o()
}), k = o().refine(t => {
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}, {
  message: "Invalid Base64 string"
}), D = B.extend({
  blob: k
}), S = U([ "user", "assistant" ]), p = u({
  audience: T(S).optional(),
  priority: v().min(0).max(1).optional(),
  lastModified: $e([ zO({
    offset: !0
  }), zO({
    offset: !0,
    precision: -1
  }) ]).optional()
}), Qwn = u({
  ...l.shape,
  ...d.shape,
  uri: o(),
  description: ji(o()),
  mimeType: ji(o()),
  size: ji(v()),
  annotations: p.optional(),
  _meta: ji(_t({}))
}), Rer = u({
  ...l.shape,
  ...d.shape,
  uriTemplate: o(),
  description: ji(o()),
  mimeType: ji(o()),
  annotations: p.optional(),
  _meta: ji(_t({}))
}), V1s = x.extend({
  method: A("resources/list")
}), h2e = h.extend({
  resources: T(Qwn)
}), K1s = x.extend({
  method: A("resources/templates/list")
}), x2t = h.extend({
  resourceTemplates: T(Rer)
}), q = s.extend({
  uri: o()
}), it = q, q1s = n.extend({
  method: A("resources/read"),
  params: it
}), xer = a.extend({
  contents: T($e([ G, D ]))
}), P2t = r.extend({
  method: A("notifications/resources/list_changed"),
  params: i.optional()
}), rt = q, ct = n.extend({
  method: A("resources/subscribe"),
  params: rt
}), lt = q, pt = n.extend({
  method: A("resources/unsubscribe"),
  params: lt
}), mt = i.extend({
  uri: o()
}), zt = r.extend({
  method: A("notifications/resources/updated"),
  params: mt
}), ut = u({
  name: o(),
  description: ji(o()),
  required: ji(M())
}), Per = u({
  ...l.shape,
  ...d.shape,
  description: ji(o()),
  arguments: ji(T(ut)),
  _meta: ji(_t({}))
}), Y1s = x.extend({
  method: A("prompts/list")
}), I2t = h.extend({
  prompts: T(Per)
}), dt = s.extend({
  name: o(),
  arguments: ue(o(), o()).optional()
}), X1s = n.extend({
  method: A("prompts/get"),
  params: dt
}), C = u({
  type: A("text"),
  text: o(),
  annotations: p.optional(),
  _meta: ue(o(), oe()).optional()
}), O = u({
  type: A("image"),
  data: k,
  mimeType: o(),
  annotations: p.optional(),
  _meta: ue(o(), oe()).optional()
}), N = u({
  type: A("audio"),
  data: k,
  mimeType: o(),
  annotations: p.optional(),
  _meta: ue(o(), oe()).optional()
}), xt = u({
  type: A("tool_use"),
  name: o(),
  id: o(),
  input: ue(o(), oe()),
  _meta: ue(o(), oe()).optional()
}), ht = u({
  type: A("resource"),
  resource: $e([ G, D ]),
  annotations: p.optional(),
  _meta: ue(o(), oe()).optional()
}), gt = Qwn.extend({
  type: A("resource_link")
}), I = $e([ C, O, N, gt, ht ]), St = u({
  role: S,
  content: I
}), Ier = a.extend({
  description: o().optional(),
  messages: T(St)
}), O2t = r.extend({
  method: A("notifications/prompts/list_changed"),
  params: i.optional()
}), bt = u({
  title: o().optional(),
  readOnlyHint: M().optional(),
  destructiveHint: M().optional(),
  idempotentHint: M().optional(),
  openWorldHint: M().optional()
}), Rt = u({
  taskSupport: U([ "required", "optional", "forbidden" ]).optional()
}), Zwn = u({
  ...l.shape,
  ...d.shape,
  description: o().optional(),
  inputSchema: u({
    type: A("object"),
    properties: ue(o(), e).optional(),
    required: T(o()).optional()
  }).catchall(oe()),
  outputSchema: u({
    type: A("object"),
    properties: ue(o(), e).optional(),
    required: T(o()).optional()
  }).catchall(oe()).optional(),
  annotations: bt.optional(),
  execution: Rt.optional(),
  _meta: ue(o(), oe()).optional()
}), xle = x.extend({
  method: A("tools/list")
}), kwt = h.extend({
  tools: T(Zwn)
}), whe = a.extend({
  content: T(I).default([]),
  structuredContent: ue(o(), oe()).optional(),
  isError: M().optional()
}), yqr = whe.or(a.extend({
  toolResult: oe()
})), ft = z.extend({
  name: o(),
  arguments: ue(o(), oe()).optional()
}), W6 = n.extend({
  method: A("tools/call"),
  params: ft
}), M2t = r.extend({
  method: A("notifications/tools/list_changed"),
  params: i.optional()
}), _qr = u({
  autoRefresh: M().default(!0),
  debounceMs: v().int().nonnegative().default(300)
}), H2t = U([ "debug", "info", "notice", "warning", "error", "critical", "alert", "emergency" ]), yt = s.extend({
  level: H2t
}), Oer = n.extend({
  method: A("logging/setLevel"),
  params: yt
}), jt = i.extend({
  level: H2t,
  logger: o().optional(),
  data: oe()
}), Pt = r.extend({
  method: A("notifications/message"),
  params: jt
}), Tt = u({
  name: o().optional()
}), kt = u({
  hints: T(Tt).optional(),
  costPriority: v().min(0).max(1).optional(),
  speedPriority: v().min(0).max(1).optional(),
  intelligencePriority: v().min(0).max(1).optional()
}), qt = u({
  mode: U([ "auto", "required", "none" ]).optional()
}), Ct = u({
  type: A("tool_result"),
  toolUseId: o().describe("The unique identifier for the corresponding tool call."),
  content: T(I).default([]),
  structuredContent: u({}).loose().optional(),
  isError: M().optional(),
  _meta: ue(o(), oe()).optional()
}), Ot = Kr("type", [ C, O, N ]), b = Kr("type", [ C, O, N, xt, Ct ]), Nt = u({
  role: S,
  content: $e([ b, T(b) ]),
  _meta: ue(o(), oe()).optional()
}), It = z.extend({
  messages: T(Nt),
  modelPreferences: kt.optional(),
  systemPrompt: o().optional(),
  includeContext: U([ "none", "thisServer", "allServers" ]).optional(),
  temperature: v().optional(),
  maxTokens: v().int(),
  stopSequences: T(o()).optional(),
  metadata: e.optional(),
  tools: T(Zwn).optional(),
  toolChoice: qt.optional()
}), Mer = n.extend({
  method: A("sampling/createMessage"),
  params: It
}), y2e = a.extend({
  model: o(),
  stopReason: ji(U([ "endTurn", "stopSequence", "maxTokens" ]).or(o())),
  role: S,
  content: Ot
}), Twt = a.extend({
  model: o(),
  stopReason: ji(U([ "endTurn", "stopSequence", "maxTokens", "toolUse" ]).or(o())),
  role: S,
  content: $e([ b, T(b) ])
}), Et = u({
  type: A("boolean"),
  title: o().optional(),
  description: o().optional(),
  default: M().optional()
}), Lt = u({
  type: A("string"),
  title: o().optional(),
  description: o().optional(),
  minLength: v().optional(),
  maxLength: v().optional(),
  format: U([ "email", "uri", "date", "date-time" ]).optional(),
  default: o().optional()
}), wt = u({
  type: U([ "number", "integer" ]),
  title: o().optional(),
  description: o().optional(),
  minimum: v().optional(),
  maximum: v().optional(),
  default: v().optional()
}), Mt = u({
  type: A("string"),
  title: o().optional(),
  description: o().optional(),
  enum: T(o()),
  default: o().optional()
}), vt = u({
  type: A("string"),
  title: o().optional(),
  description: o().optional(),
  oneOf: T(u({
    const: o(),
    title: o()
  })),
  default: o().optional()
}), Ut = u({
  type: A("string"),
  title: o().optional(),
  description: o().optional(),
  enum: T(o()),
  enumNames: T(o()).optional(),
  default: o().optional()
}), At = $e([ Mt, vt ]), Jt = u({
  type: A("array"),
  title: o().optional(),
  description: o().optional(),
  minItems: v().optional(),
  maxItems: v().optional(),
  items: u({
    type: A("string"),
    enum: T(o())
  }),
  default: T(o()).optional()
}), Bt = u({
  type: A("array"),
  title: o().optional(),
  description: o().optional(),
  minItems: v().optional(),
  maxItems: v().optional(),
  items: u({
    anyOf: T(u({
      const: o(),
      title: o()
    }))
  }),
  default: T(o()).optional()
}), Gt = $e([ Jt, Bt ]), Dt = $e([ Ut, At, Gt ]), Vt = $e([ Dt, Et, Lt, wt ]), Ft = z.extend({
  mode: A("form").optional(),
  message: o(),
  requestedSchema: u({
    type: A("object"),
    properties: ue(o(), Vt),
    required: T(o()).optional()
  })
}), Her = z.extend({
  mode: A("url"),
  message: o(),
  elicitationId: o(),
  url: o().url()
}), Ht = $e([ Ft, Her ]), aDe = n.extend({
  method: A("elicitation/create"),
  params: Ht
}), $t = i.extend({
  elicitationId: o()
}), Awt = r.extend({
  method: A("notifications/elicitation/complete"),
  params: $t
}), lDe = a.extend({
  action: U([ "accept", "decline", "cancel" ]),
  content: Sa(t => t === null ? void 0 : t, ue(o(), $e([ o(), v(), M(), T(o()) ])).optional())
}), Wt = u({
  type: A("ref/resource"),
  uri: o()
});

var Kt = u({
  type: A("ref/prompt"),
  name: o()
}), Yt = s.extend({
  ref: $e([ Kt, Wt ]),
  argument: u({
    name: o(),
    value: o()
  }),
  context: u({
    arguments: ue(o(), o()).optional()
  }).optional()
}), J1s = n.extend({
  method: A("completion/complete"),
  params: Yt
});

function oYs(t) {
  if (t.params.ref.type !== "ref/prompt") throw TypeError(`Expected CompleteRequestPrompt, but got ${t.params.ref.type}`);
}

function sYs(t) {
  if (t.params.ref.type !== "ref/resource") throw TypeError(`Expected CompleteRequestResourceTemplate, but got ${t.params.ref.type}`);
}

var Der = a.extend({
  completion: _t({
    values: T(o()).max(100),
    total: ji(v().int()),
    hasMore: ji(M())
  })
}), Qt = u({
  uri: o().startsWith("file://"),
  name: o().optional(),
  _meta: ue(o(), oe()).optional()
}), Ler = n.extend({
  method: A("roots/list"),
  params: s.optional()
}), Ner = a.extend({
  roots: T(Qt)
}), Xt = r.extend({
  method: A("notifications/roots/list_changed"),
  params: i.optional()
}), se = $e([ zwn, jwn, J1s, Oer, X1s, Y1s, V1s, K1s, q1s, ct, pt, W6, xle, Vwn, qwn, Ywn, Jwn ]), ie = $e([ Uwn, Gwn, Wwn, Xt, R2t ]), re = $e([ bTe, y2e, Twt, lDe, Ner, Kwn, Xwn, She ]), ce = $e([ zwn, Mer, aDe, Ler, Vwn, qwn, Ywn, Jwn ]), le = $e([ Uwn, Gwn, Pt, zt, P2t, M2t, O2t, R2t, Awt ]), pe = $e([ bTe, Jet, Der, Ier, I2t, h2e, x2t, xer, whe, kwt, Kwn, Xwn, She ]);

class ii extends Error {
  constructor(t, c, m) {
    super(`MCP error ${t}: ${c}`);
    this.code = t, this.data = m, this.name = "McpError";
  }
  static fromError(t, c, m) {
    if (t === _i.UrlElicitationRequired && m) {
      let E = m;
      if (E.elicitations) return new V(E.elicitations, c);
    }
    return new ii(t, c, m);
  }
}

class V extends ii {
  constructor(t, c = `URL elicitation${t.length > 1 ? "s" : ""} required`) {
    super(_i.UrlElicitationRequired, c, {
      elicitations: t
    });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}

export { yTe, fqr, IJ, bhe, Ter, mqr, n4, C2t, hne, _i, _Te, WL, bTe, Uwn, Bwn, jwn, Aer, Cer, Jet, Wwn, gqr, zwn, Gwn, She, R2t, Vwn, Kwn, qwn, Ywn, Xwn, Jwn, hqr, Qwn, Rer, V1s, h2e, K1s, x2t, q1s, xer, P2t, Per, Y1s, I2t, X1s, Ier, O2t, Zwn, xle, kwt, whe, yqr, W6, M2t, _qr, H2t, Oer, Mer, y2e, Twt, Her, aDe, Awt, lDe, J1s, oYs, sYs, Der, Ler, Ner, ii };
