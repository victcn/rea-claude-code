// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { un } from "./chunk-y752zmas.js";

import { Av, VIe } from "./chunk-q6wab2jw.js";

import { _, t } from "./chunk-kawq2919.js";

import { I, ne } from "./chunk-5wbhf1bk.js";

import { Ct } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { f } from "./chunk-3ykz5st8.js";

import { Pm } from "./chunk-cjt10y7b.js";

import { gl } from "./chunk-46phtgr7.js";

import { MYe } from "./chunk-sqb9meyh.js";

import { hfe } from "./chunk-8yperama.js";

import { Jbe } from "./chunk-8a4rbyjg.js";

import { bm, M_, Qbe, jJt, eNn, WJt, tNn, Huo, A_r, Duo, Luo, C_r, Nuo, $uo, Fuo, Uuo } from "./chunk-ygsdtp4w.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { D } from "./chunk-hmqkrrtz.js";

import { C } from "./chunk-m8ez8fhk.js";

var W = C(function(ee) {
  Object.defineProperty(ee, "__esModule", {
    value: !0
  });
  ee.dynamicAnchor = void 0;
  var q = bm(), Xe = Qbe(), x = tNn(), J = A_r(), Ge = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: e => Q(e, e.schema)
  };
  function Q(e, r) {
    let {gen: n, it: o} = e;
    o.schemaEnv.root.dynamicAnchors[r] = !0;
    let s = q._`${Xe.default.dynamicAnchors}${q.getProperty(r)}`, i = o.errSchemaPath === "#" ? o.validateName : Ye(e);
    n.if(q._`!${s}`, () => n.assign(s, i));
  }
  ee.dynamicAnchor = Q;
  function Ye(e) {
    let {schemaEnv: r, schema: n, self: o} = e.it, {root: s, baseId: i, localRefs: m, meta: u} = r.root, {schemaId: c} = o.opts, h = new x.SchemaEnv({
      schema: n,
      schemaId: c,
      root: s,
      baseId: i,
      localRefs: m,
      meta: u
    });
    return x.compileSchema.call(o, h), J.getValidate(e, h);
  }
  ee.default = Ge;
});

var L = C(function(ae) {
  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  ae.dynamicRef = void 0;
  var k = bm(), Be = Qbe(), E = A_r(), Je = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: e => re(e, e.schema)
  };
  function re(e, r) {
    let {gen: n, keyword: o, it: s} = e;
    if (r[0] !== "#") throw Error(`"${o}" only supports hash fragment reference`);
    let i = r.slice(1);
    if (s.allErrors) m(); else {
      let c = n.let("valid", !1);
      m(c), e.ok(c);
    }
    function m(c) {
      if (s.schemaEnv.root.dynamicAnchors[i]) {
        let h = n.let("_v", k._`${Be.default.dynamicAnchors}${k.getProperty(i)}`);
        n.if(h, u(h, c), u(s.validateName, c));
      } else u(s.validateName, c)();
    }
    function u(c, h) {
      return h ? () => n.block(() => {
        E.callRef(e, c), n.let(h, !0);
      }) : () => E.callRef(e, c);
    }
  }
  ae.dynamicRef = re;
  ae.default = Je;
});

var ue = C(function(ce) {
  Object.defineProperty(ce, "__esModule", {
    value: !0
  });
  var se = W(), ie = M_(), et = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(e) {
      if (e.schema) se.dynamicAnchor(e, ""); else ie.checkStrictMode(e.it, "$recursiveAnchor: false is ignored");
    }
  };
  ce.default = et;
});

var le = C(function(me) {
  Object.defineProperty(me, "__esModule", {
    value: !0
  });
  var de = L(), rt = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: e => de.dynamicRef(e, e.schema)
  };
  me.default = rt;
});

var pe = C(function(fe) {
  Object.defineProperty(fe, "__esModule", {
    value: !0
  });
  var at = W(), ot = L(), st = ue(), it = le(), ct = [ at.default, ot.default, st.default, it.default ];
  fe.default = ct;
});

var ye = C(function(he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  var N = C_r(), dt = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: N.error,
    code: e => N.validatePropertyDeps(e)
  };
  he.default = dt;
});

var be = C(function($e) {
  Object.defineProperty($e, "__esModule", {
    value: !0
  });
  var ge = C_r(), lt = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: e => ge.validateSchemaDeps(e)
  };
  $e.default = lt;
});

var je = C(function(_e) {
  Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  var ve = M_(), pt = {
    keyword: [ "maxContains", "minContains" ],
    type: "array",
    schemaType: "number",
    code({keyword: e, parentSchema: r, it: n}) {
      if (r.contains === void 0) ve.checkStrictMode(n, `"${e}" without "contains" is ignored`);
    }
  };
  _e.default = pt;
});

var Pe = C(function(Ae) {
  Object.defineProperty(Ae, "__esModule", {
    value: !0
  });
  var yt = ye(), gt = be(), $t = je(), bt = [ yt.default, gt.default, $t.default ];
  Ae.default = bt;
});

var Se = C(function(Re) {
  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  var g = bm(), T = M_(), _t = Qbe(), jt = {
    message: "must NOT have unevaluated properties",
    params: ({params: e}) => g._`{unevaluatedProperty: ${e.unevaluatedProperty}}`
  }, At = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: [ "boolean", "object" ],
    trackErrors: !0,
    error: jt,
    code(e) {
      let {gen: r, schema: n, data: o, errsCount: s, it: i} = e;
      if (!s) throw Error("ajv implementation error");
      let {allErrors: m, props: u} = i;
      if (u instanceof g.Name) r.if(g._`${u} !== true`, () => r.forIn("key", o, y => r.if(h(u, y), () => c(y)))); else if (u !== !0) r.forIn("key", o, y => u === void 0 ? c(y) : r.if(b(u, y), () => c(y)));
      i.props = !0, e.ok(g._`${s} === ${_t.default.errors}`);
      function c(y) {
        if (n === !1) {
          if (e.setParams({
            unevaluatedProperty: y
          }), e.error(), !m) r.break();
          return;
        }
        if (!T.alwaysValidSchema(i, n)) {
          let P = r.name("valid");
          if (e.subschema({
            keyword: "unevaluatedProperties",
            dataProp: y,
            dataPropType: T.Type.Str
          }, P), !m) r.if(g.not(P), () => r.break());
        }
      }
      function h(y, P) {
        return g._`!${y} || !${y}[${P}]`;
      }
      function b(y, P) {
        let d = [];
        for (let p in y) if (y[p] === !0) d.push(g._`${P} !== ${p}`);
        return g.and(...d);
      }
    }
  };
  Re.default = At;
});

var we = C(function(qe) {
  Object.defineProperty(qe, "__esModule", {
    value: !0
  });
  var v = bm(), F = M_(), Rt = {
    message: ({params: {len: e}}) => v.str`must NOT have more than ${e} items`,
    params: ({params: {len: e}}) => v._`{limit: ${e}}`
  }, St = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: [ "boolean", "object" ],
    error: Rt,
    code(e) {
      let {gen: r, schema: n, data: o, it: s} = e, i = s.items || 0;
      if (i === !0) return;
      let m = r.const("len", v._`${o}.length`);
      if (n === !1) e.setParams({
        len: i
      }), e.fail(v._`${m} > ${i}`); else if (typeof n == "object" && !F.alwaysValidSchema(s, n)) {
        let c = r.var("valid", v._`${m} <= ${i}`);
        r.if(v.not(c), () => u(c, i)), e.ok(c);
      }
      s.items = !0;
      function u(c, h) {
        r.forRange("i", h, m, b => {
          if (e.subschema({
            keyword: "unevaluatedItems",
            dataProp: b,
            dataPropType: F.Type.Num
          }, c), !s.allErrors) r.if(v.not(c), () => r.break());
        });
      }
    }
  };
  qe.default = St;
});

var Me = C(function(Oe) {
  Object.defineProperty(Oe, "__esModule", {
    value: !0
  });
  var wt = Se(), Ot = we(), Mt = [ wt.default, Ot.default ];
  Oe.default = Mt;
});

var Ce = C(function(xe) {
  Object.defineProperty(xe, "__esModule", {
    value: !0
  });
  var kt = Duo(), Et = Luo(), It = Nuo(), Nt = pe(), Tt = Pe(), Ft = Me(), Dt = $uo(), V = Fuo(), Vt = [ Nt.default, kt.default, Et.default, (0, 
  It.default)(!0), Dt.default, V.metadataVocabulary, V.contentVocabulary, Tt.default, Ft.default ];
  xe.default = Vt;
});

var ke = C(function(Gr, Lt) {
  Lt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/schema",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/core": !0,
      "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
      "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
      "https://json-schema.org/draft/2020-12/vocab/validation": !0,
      "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
      "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
      "https://json-schema.org/draft/2020-12/vocab/content": !0
    },
    $dynamicAnchor: "meta",
    title: "Core and Validation specifications meta-schema",
    allOf: [ {
      $ref: "meta/core"
    }, {
      $ref: "meta/applicator"
    }, {
      $ref: "meta/unevaluated"
    }, {
      $ref: "meta/validation"
    }, {
      $ref: "meta/meta-data"
    }, {
      $ref: "meta/format-annotation"
    }, {
      $ref: "meta/content"
    } ],
    type: [ "object", "boolean" ],
    $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
    properties: {
      definitions: {
        $comment: '"definitions" has been replaced by "$defs".',
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        deprecated: !0,
        default: {}
      },
      dependencies: {
        $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
        type: "object",
        additionalProperties: {
          anyOf: [ {
            $dynamicRef: "#meta"
          }, {
            $ref: "meta/validation#/$defs/stringArray"
          } ]
        },
        deprecated: !0,
        default: {}
      },
      $recursiveAnchor: {
        $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
        $ref: "meta/core#/$defs/anchorString",
        deprecated: !0
      },
      $recursiveRef: {
        $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
        $ref: "meta/core#/$defs/uriReferenceString",
        deprecated: !0
      }
    }
  };
});

var Ee = C(function(Yr, Ht) {
  Ht.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/applicator",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/applicator": !0
    },
    $dynamicAnchor: "meta",
    title: "Applicator vocabulary meta-schema",
    type: [ "object", "boolean" ],
    properties: {
      prefixItems: {
        $ref: "#/$defs/schemaArray"
      },
      items: {
        $dynamicRef: "#meta"
      },
      contains: {
        $dynamicRef: "#meta"
      },
      additionalProperties: {
        $dynamicRef: "#meta"
      },
      properties: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        default: {}
      },
      patternProperties: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        propertyNames: {
          format: "regex"
        },
        default: {}
      },
      dependentSchemas: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        default: {}
      },
      propertyNames: {
        $dynamicRef: "#meta"
      },
      if: {
        $dynamicRef: "#meta"
      },
      then: {
        $dynamicRef: "#meta"
      },
      else: {
        $dynamicRef: "#meta"
      },
      allOf: {
        $ref: "#/$defs/schemaArray"
      },
      anyOf: {
        $ref: "#/$defs/schemaArray"
      },
      oneOf: {
        $ref: "#/$defs/schemaArray"
      },
      not: {
        $dynamicRef: "#meta"
      }
    },
    $defs: {
      schemaArray: {
        type: "array",
        minItems: 1,
        items: {
          $dynamicRef: "#meta"
        }
      }
    }
  };
});

var Ie = C(function(Zr, Kt) {
  Kt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
    },
    $dynamicAnchor: "meta",
    title: "Unevaluated applicator vocabulary meta-schema",
    type: [ "object", "boolean" ],
    properties: {
      unevaluatedItems: {
        $dynamicRef: "#meta"
      },
      unevaluatedProperties: {
        $dynamicRef: "#meta"
      }
    }
  };
});

var Ne = C(function(Br, Ut) {
  Ut.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/content",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/content": !0
    },
    $dynamicAnchor: "meta",
    title: "Content vocabulary meta-schema",
    type: [ "object", "boolean" ],
    properties: {
      contentEncoding: {
        type: "string"
      },
      contentMediaType: {
        type: "string"
      },
      contentSchema: {
        $dynamicRef: "#meta"
      }
    }
  };
});

var Te = C(function(Jr, zt) {
  zt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/core",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/core": !0
    },
    $dynamicAnchor: "meta",
    title: "Core vocabulary meta-schema",
    type: [ "object", "boolean" ],
    properties: {
      $id: {
        $ref: "#/$defs/uriReferenceString",
        $comment: "Non-empty fragments not allowed.",
        pattern: "^[^#]*#?$"
      },
      $schema: {
        $ref: "#/$defs/uriString"
      },
      $ref: {
        $ref: "#/$defs/uriReferenceString"
      },
      $anchor: {
        $ref: "#/$defs/anchorString"
      },
      $dynamicRef: {
        $ref: "#/$defs/uriReferenceString"
      },
      $dynamicAnchor: {
        $ref: "#/$defs/anchorString"
      },
      $vocabulary: {
        type: "object",
        propertyNames: {
          $ref: "#/$defs/uriString"
        },
        additionalProperties: {
          type: "boolean"
        }
      },
      $comment: {
        type: "string"
      },
      $defs: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        }
      }
    },
    $defs: {
      anchorString: {
        type: "string",
        pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
      },
      uriString: {
        type: "string",
        format: "uri"
      },
      uriReferenceString: {
        type: "string",
        format: "uri-reference"
      }
    }
  };
});

var Fe = C(function(Qr, Xt) {
  Xt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
    },
    $dynamicAnchor: "meta",
    title: "Format vocabulary meta-schema for annotation results",
    type: [ "object", "boolean" ],
    properties: {
      format: {
        type: "string"
      }
    }
  };
});

var De = C(function(en, Gt) {
  Gt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
    },
    $dynamicAnchor: "meta",
    title: "Meta-data vocabulary meta-schema",
    type: [ "object", "boolean" ],
    properties: {
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      default: !0,
      deprecated: {
        type: "boolean",
        default: !1
      },
      readOnly: {
        type: "boolean",
        default: !1
      },
      writeOnly: {
        type: "boolean",
        default: !1
      },
      examples: {
        type: "array",
        items: !0
      }
    }
  };
});

var Ve = C(function(tn, Yt) {
  Yt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/validation",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/validation": !0
    },
    $dynamicAnchor: "meta",
    title: "Validation vocabulary meta-schema",
    type: [ "object", "boolean" ],
    properties: {
      type: {
        anyOf: [ {
          $ref: "#/$defs/simpleTypes"
        }, {
          type: "array",
          items: {
            $ref: "#/$defs/simpleTypes"
          },
          minItems: 1,
          uniqueItems: !0
        } ]
      },
      const: !0,
      enum: {
        type: "array",
        items: !0
      },
      multipleOf: {
        type: "number",
        exclusiveMinimum: 0
      },
      maximum: {
        type: "number"
      },
      exclusiveMaximum: {
        type: "number"
      },
      minimum: {
        type: "number"
      },
      exclusiveMinimum: {
        type: "number"
      },
      maxLength: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minLength: {
        $ref: "#/$defs/nonNegativeIntegerDefault0"
      },
      pattern: {
        type: "string",
        format: "regex"
      },
      maxItems: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minItems: {
        $ref: "#/$defs/nonNegativeIntegerDefault0"
      },
      uniqueItems: {
        type: "boolean",
        default: !1
      },
      maxContains: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minContains: {
        $ref: "#/$defs/nonNegativeInteger",
        default: 1
      },
      maxProperties: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minProperties: {
        $ref: "#/$defs/nonNegativeIntegerDefault0"
      },
      required: {
        $ref: "#/$defs/stringArray"
      },
      dependentRequired: {
        type: "object",
        additionalProperties: {
          $ref: "#/$defs/stringArray"
        }
      }
    },
    $defs: {
      nonNegativeInteger: {
        type: "integer",
        minimum: 0
      },
      nonNegativeIntegerDefault0: {
        $ref: "#/$defs/nonNegativeInteger",
        default: 0
      },
      simpleTypes: {
        enum: [ "array", "boolean", "integer", "null", "number", "object", "string" ]
      },
      stringArray: {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: !0,
        default: []
      }
    }
  };
});

var Le = C(function(We) {
  Object.defineProperty(We, "__esModule", {
    value: !0
  });
  var Zt = ke(), Bt = Ee(), Jt = Ie(), Qt = Ne(), er = Te(), tr = Fe(), rr = De(), nr = Ve(), ar = [ "/properties" ];
  function or(e) {
    return [ Zt, Bt, Jt, Qt, er, r(this, tr), rr, r(this, nr) ].forEach(n => this.addMetaSchema(n, void 0, !1)), 
    this;
    function r(n, o) {
      return e ? n.$dataMetaSchema(o, ar) : o;
    }
  }
  We.default = or;
});

var He = C(function(j, K) {
  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.MissingRefError = j.ValidationError = j.CodeGen = j.Name = j.nil = j.stringify = j.str = j._ = j.KeywordCxt = j.Ajv2020 = void 0;
  var ir = Huo(), cr = Ce(), ur = Uuo(), dr = Le(), H = "https://json-schema.org/draft/2020-12/schema";
  class O extends ir.default {
    constructor(e = {}) {
      super({
        ...e,
        dynamicRef: !0,
        next: !0,
        unevaluated: !0
      });
    }
    _addVocabularies() {
      if (super._addVocabularies(), cr.default.forEach(e => this.addVocabulary(e)), this.opts.discriminator) this.addKeyword(ur.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let {$data: e, meta: r} = this.opts;
      if (!r) return;
      dr.default.call(this, e), this.refs["http://json-schema.org/schema"] = H;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(H) ? H : void 0);
    }
  }
  j.Ajv2020 = O;
  K.exports = j = O;
  K.exports.Ajv2020 = O;
  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.default = O;
  var mr = jJt();
  Object.defineProperty(j, "KeywordCxt", {
    enumerable: !0,
    get: function() {
      return mr.KeywordCxt;
    }
  });
  var w = bm();
  Object.defineProperty(j, "_", {
    enumerable: !0,
    get: function() {
      return w._;
    }
  });
  Object.defineProperty(j, "str", {
    enumerable: !0,
    get: function() {
      return w.str;
    }
  });
  Object.defineProperty(j, "stringify", {
    enumerable: !0,
    get: function() {
      return w.stringify;
    }
  });
  Object.defineProperty(j, "nil", {
    enumerable: !0,
    get: function() {
      return w.nil;
    }
  });
  Object.defineProperty(j, "Name", {
    enumerable: !0,
    get: function() {
      return w.Name;
    }
  });
  Object.defineProperty(j, "CodeGen", {
    enumerable: !0,
    get: function() {
      return w.CodeGen;
    }
  });
  var lr = eNn();
  Object.defineProperty(j, "ValidationError", {
    enumerable: !0,
    get: function() {
      return lr.default;
    }
  });
  var fr = WJt();
  Object.defineProperty(j, "MissingRefError", {
    enumerable: !0,
    get: function() {
      return fr.default;
    }
  });
});

function ple() {
  try {
    MYe(un().BASE_API_URL);
  } catch {
    return "egress_blocked";
  }
  if (gl("zdr")) return "egress_blocked";
  return Ct() ? "essential_traffic" : void 0;
}

function rbn(e, {path: r, serverId: n}) {
  try {
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !1;
    let o = e.config;
    if (o.type === "claudeai-proxy") {
      if (!VIe(o)) return !1;
      let i = new URL(o.url);
      return i.protocol === "https:" && i.username === "" && i.password === "" && Pm(i.href) && i.pathname === r;
    }
    let s = a.CLAUDE_CODE_ENVIRONMENT_KIND;
    return a.CLAUDE_CODE_REMOTE === !0 && (!s || s === "anthropic_cloud") && o.type === "http" && o.scope === "dynamic" && !Av(o) && hfe(o) === n;
  } catch {
    return !1;
  }
}

import { basename as Ue } from "path";

var G = 100, ze = 900, Y = 300;

function hSt(e) {
  return _(e).replace(/[^\x20-\x7e]/g, r => `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}

function Z(e) {
  let r = hSt(e);
  if (r.length <= Y) return r;
  let n = [ ...e ], o = n.length, s = 5;
  while (o > 0) {
    if (s += hSt(n[o - 1]).length - 2, s > Y) break;
    o--;
  }
  return hSt(`...${n.slice(o).join("")}`);
}

function BYo(e) {
  let r = [], n = 0;
  for (let {path: s, name: i, size: m} of e) {
    let u = `${Z(s)}${Ue(s) === i ? "" : `, the file ${Z(i)}`} (${m} bytes)`;
    if (n += u.length + 2, n > ze) break;
    r.push(u);
  }
  let o = e.length - r.length;
  return `Attaches ${e.length} ${I(e.length, "file")}: ${r.join("; ")}${o > 0 ? `; and ${o} more` : ""}`;
}

function B(e) {
  if (e === "") return;
  let r = e.slice(1).split("/").map(n => n.replaceAll("~1", "/").replaceAll("~0", "~")).map((n, o) => o === 0 ? n : /^\d+$/.test(n) ? `[${n}]` : `.${n}`).join("");
  return S(r);
}

function S(e) {
  return hSt(e.length > G ? `${ne(e, G)}...` : e);
}

var Ke = "https://json-schema.org/draft/2020-12/schema", U = 5, z = new WeakMap;

function yr(e, {tool: r, feature: n}) {
  if (!Kn(e)) return null;
  let o = z.get(e);
  if (o !== void 0) return o;
  if (Jbe()) return t(`[${r}] input schema not checked before the call: sessions that share a process compile no schemas, so the server checks it`), 
  z.set(e, null), null;
  let s = null, i = e.$schema;
  if (i === void 0 || i === Ke || i === `${Ke}#`) try {
    let {Ajv2020: m} = He();
    s = new m({
      allErrors: !0,
      strict: !1,
      validateFormats: !1
    }).compile(e);
  } catch (m) {
    t(`[${r}] input schema not checked: Ajv could not compile it: ${l(m)}`, {
      level: "warn"
    });
  } else t(`[${r}] input schema not checked: it declares ${_(i)}, and only draft 2020-12 is checked`, {
    level: "warn"
  });
  if (s === null) f(n, "input_schema_not_checked");
  return z.set(e, s), s;
}

var gr = new Set([ "allOf", "anyOf", "contains", "if", "oneOf" ]), $r = {
  array: "a list",
  boolean: "true or false",
  integer: "a whole number",
  number: "a number",
  object: "an object",
  string: "text"
};

function obn(e, r, n) {
  let o = yr(r, n);
  if (o === null || o(e)) return;
  let s = Kn(r) && Kn(r.properties) ? Object.keys(r.properties) : [], i = new Set(Kn(r) && Array.isArray(r.required) ? r.required : []), {ignoreInside: m} = n, u = (o.errors ?? []).filter(d => m === void 0 || !d.instancePath.startsWith(`/${m}/`) && !(d.instancePath === `/${m}` && gr.has(d.keyword)));
  if (u.length === 0) return;
  let c = u.flatMap(d => {
    let p = d.params.additionalProperty;
    return d.keyword === "additionalProperties" && d.instancePath === "" && typeof p === "string" ? [ p ] : [];
  }), h = new Map(c.map(d => [ d, s.find(p => br(d, p)) ])), b = D([ ...c.map(d => {
    let p = h.get(d);
    return `it has no argument ${S(d)}${p === void 0 ? "" : ` (did you mean ${S(p)}?)`}`;
  }), ...u.flatMap(d => {
    let p = B(d.instancePath), A = d.params;
    switch (d.keyword) {
     case "additionalProperties":
      return p === void 0 ? [] : [ `${p} has no field ${S(String(A.additionalProperty))}` ];

     case "required":
      {
        let R = String(A.missingProperty);
        if (p !== void 0) return [ `${p} needs the field ${S(R)}` ];
        return [ ...h.values() ].includes(R) ? [] : [ `the argument ${S(R)} is required` ];
      }

     case "type":
      {
        let R = (Array.isArray(A.type) ? A.type : [ A.type ]).filter(M => M !== "null");
        return R.length === 0 ? [] : [ `${p ?? "the arguments"} must be ${R.map(M => $r[String(M)] ?? String(M)).join(" or ")}` ];
      }

     case "minLength":
      return [ A.limit === 1 ? `${p ?? "the arguments"} must not be empty` : `${p ?? "the arguments"} must be at least ${String(A.limit)} characters` ];

     case "maxLength":
      return [ `${p ?? "the arguments"} must be at most ${String(A.limit)} characters` ];

     case "maxItems":
      return [ `${p ?? "the arguments"} must have at most ${String(A.limit)} entries` ];

     case "enum":
      if (Array.isArray(A.allowedValues)) return [ `${p ?? "the arguments"} must be one of ${A.allowedValues.map(R => _(R)).join(", ")}` ];
      break;
    }
    return [ `${p ?? "the arguments"} ${d.message ?? "are not valid"}` ];
  }) ]);
  if (b.length === 0) return;
  let y = b.length > U ? `, and ${b.length - U} more` : "", P = s.map(d => i.has(d) ? `${d} (required)` : d);
  return {
    listed: `${b.slice(0, U).join("; ")}${y}`,
    takes: P.length === 0 ? "" : ` ${n.tool} takes ${P.join(", ")}.`
  };
}

function br(e, r) {
  let n = e.toLowerCase(), o = r.toLowerCase();
  return n === o || o.endsWith(`_${n}`) || o.startsWith(`${n}_`) || n.endsWith(`_${o}`) || n.startsWith(`${o}_`);
}

import { isAbsolute as vr } from "path";

var PHe = 4096;

function ySt(e, r) {
  let {tool: n, local: o, ref: s, refWord: i, maxFiles: m, nothingDone: u} = r;
  if (!Array.isArray(e)) return X(r);
  if (e.length > m) return {
    error: `${n} takes at most ${m} files; this call has ${e.length}. ${u}`,
    code: "too_many_files"
  };
  let c = [];
  for (let h of e) {
    if (!Kn(h)) return X(r);
    if (h[s] !== void 0) return {
      error: `${n} file entries must give a \`${o}\`; this client uploads the file and fills in the ${i} itself. If these ${i}s came from an approval given before Claude Code restarted, that approval cannot be reused: call ${n} again with paths. ${u}`,
      code: `model_${s}`
    };
    let b = h[o];
    if (typeof b !== "string" || b === "" || b.length > PHe) return X(r);
    if (!vr(b)) return {
      error: `Cannot attach "${b}": ${n} file paths must be absolute paths as this session sees them. ${u}`,
      code: "relative_path"
    };
    c.push(b);
  }
  return c;
}

function X({tool: e, arg: r, local: n, nothingDone: o}) {
  return {
    error: `${e} \`${r}\` must be a list of objects, each with a \`${n}\` of at most ${PHe} characters, such as [{"${n}": "/absolute/path/to/report.csv"}]. ${o}`,
    code: "bad_entry"
  };
}

export { ple, rbn, hSt, BYo, obn, PHe, ySt };
