// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { zJt } from "./chunk-r72vd5cv.js";

var qe = D, je = {
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

var ke = {
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

var we = new RegExp("^[^#]*#?$", "u"), Pe = new RegExp("^[A-Za-z_][-A-Za-z0-9._]*$", "u");

function x(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = x.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return x.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: ke.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = x;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.$id !== void 0) {
        let u = t.$id, m = e, N = e;
        if (e === N) {
          if (e === N) {
            if (typeof u !== "string") return x.errors = [ {
              instancePath: s + "/$id",
              schemaPath: "#/$defs/uriReferenceString/type",
              keyword: "type",
              params: {
                type: "string"
              },
              message: "must be string"
            } ], !1;
          }
        }
        if (e === m) {
          if (typeof u === "string") {
            if (!we.test(u)) return x.errors = [ {
              instancePath: s + "/$id",
              schemaPath: "#/properties/%24id/pattern",
              keyword: "pattern",
              params: {
                pattern: "^[^#]*#?$"
              },
              message: 'must match pattern "^[^#]*#?$"'
            } ], !1;
          }
        }
        var n = m === e;
      } else var n = !0;
      if (n) {
        if (t.$schema !== void 0) {
          let u = e, m = e;
          if (e === m) {
            if (e === m) {
              if (typeof t.$schema !== "string") return x.errors = [ {
                instancePath: s + "/$schema",
                schemaPath: "#/$defs/uriString/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string"
              } ], !1;
            }
          }
          var n = u === e;
        } else var n = !0;
        if (n) {
          if (t.$ref !== void 0) {
            let u = e, m = e;
            if (e === m) {
              if (e === m) {
                if (typeof t.$ref !== "string") return x.errors = [ {
                  instancePath: s + "/$ref",
                  schemaPath: "#/$defs/uriReferenceString/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                } ], !1;
              }
            }
            var n = u === e;
          } else var n = !0;
          if (n) {
            if (t.$anchor !== void 0) {
              let u = t.$anchor, m = e;
              if (e === e) if (typeof u === "string") {
                if (!Pe.test(u)) return x.errors = [ {
                  instancePath: s + "/$anchor",
                  schemaPath: "#/$defs/anchorString/pattern",
                  keyword: "pattern",
                  params: {
                    pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                  },
                  message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
                } ], !1;
              } else return x.errors = [ {
                instancePath: s + "/$anchor",
                schemaPath: "#/$defs/anchorString/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string"
              } ], !1;
              var n = m === e;
            } else var n = !0;
            if (n) {
              if (t.$dynamicRef !== void 0) {
                let u = e, m = e;
                if (e === m) {
                  if (e === m) {
                    if (typeof t.$dynamicRef !== "string") return x.errors = [ {
                      instancePath: s + "/$dynamicRef",
                      schemaPath: "#/$defs/uriReferenceString/type",
                      keyword: "type",
                      params: {
                        type: "string"
                      },
                      message: "must be string"
                    } ], !1;
                  }
                }
                var n = u === e;
              } else var n = !0;
              if (n) {
                if (t.$dynamicAnchor !== void 0) {
                  let u = t.$dynamicAnchor, m = e;
                  if (e === e) if (typeof u === "string") {
                    if (!Pe.test(u)) return x.errors = [ {
                      instancePath: s + "/$dynamicAnchor",
                      schemaPath: "#/$defs/anchorString/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                      },
                      message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
                    } ], !1;
                  } else return x.errors = [ {
                    instancePath: s + "/$dynamicAnchor",
                    schemaPath: "#/$defs/anchorString/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  } ], !1;
                  var n = m === e;
                } else var n = !0;
                if (n) {
                  if (t.$vocabulary !== void 0) {
                    let u = t.$vocabulary, m = e;
                    if (e === m) if (u && typeof u == "object" && !Array.isArray(u)) {
                      for (let v in u) {
                        let _ = e, j = e;
                        if (e === j) {
                          if (e === j) {
                            if (typeof v !== "string") {
                              let g = {
                                instancePath: s + "/$vocabulary",
                                schemaPath: "#/$defs/uriString/type",
                                keyword: "type",
                                params: {
                                  type: "string"
                                },
                                message: "must be string",
                                propertyName: v
                              };
                              if (r === null) r = [ g ]; else r.push(g);
                              e++;
                            }
                          }
                        }
                        var d = _ === e;
                        if (!d) {
                          let g = {
                            instancePath: s + "/$vocabulary",
                            schemaPath: "#/properties/%24vocabulary/propertyNames",
                            keyword: "propertyNames",
                            params: {
                              propertyName: v
                            },
                            message: "property name must be valid"
                          };
                          if (r === null) r = [ g ]; else r.push(g);
                          return e++, x.errors = r, !1;
                          break;
                        }
                      }
                      if (d) for (let v in u) {
                        let _ = e;
                        if (typeof u[v] !== "boolean") return x.errors = [ {
                          instancePath: s + "/$vocabulary/" + v.replace(/~/g, "~0").replace(/\//g, "~1"),
                          schemaPath: "#/properties/%24vocabulary/additionalProperties/type",
                          keyword: "type",
                          params: {
                            type: "boolean"
                          },
                          message: "must be boolean"
                        } ], !1;
                        var o = _ === e;
                        if (!o) break;
                      }
                    } else return x.errors = [ {
                      instancePath: s + "/$vocabulary",
                      schemaPath: "#/properties/%24vocabulary/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    } ], !1;
                    var n = m === e;
                  } else var n = !0;
                  if (n) {
                    if (t.$comment !== void 0) {
                      let u = e;
                      if (typeof t.$comment !== "string") return x.errors = [ {
                        instancePath: s + "/$comment",
                        schemaPath: "#/properties/%24comment/type",
                        keyword: "type",
                        params: {
                          type: "string"
                        },
                        message: "must be string"
                      } ], !1;
                      var n = u === e;
                    } else var n = !0;
                    if (n) if (t.$defs !== void 0) {
                      let u = t.$defs, m = e;
                      if (e === m) if (u && typeof u == "object" && !Array.isArray(u)) for (let v in u) {
                        let _ = u[v], j = e, g = i.meta;
                        if (g) if (!g(_, {
                          instancePath: s + "/$defs/" + v.replace(/~/g, "~0").replace(/\//g, "~1"),
                          parentData: u,
                          parentDataProperty: v,
                          rootData: c,
                          dynamicAnchors: i
                        })) r = r === null ? g.errors : r.concat(g.errors), e = r.length; else var w = g.evaluated.props, k = g.evaluated.items; else if (!x(_, {
                          instancePath: s + "/$defs/" + v.replace(/~/g, "~0").replace(/\//g, "~1"),
                          parentData: u,
                          parentDataProperty: v,
                          rootData: c,
                          dynamicAnchors: i
                        })) r = r === null ? x.errors : r.concat(x.errors), e = r.length; else {
                          var I = x.evaluated.props;
                          if (w !== !0 && I !== void 0) if (I === !0) w = !0; else w = w || {}, Object.assign(w, I);
                          var a = x.evaluated.items;
                          if (k !== !0 && a !== void 0) k = a === !0 ? !0 : k > a ? k : a;
                        }
                        var f = j === e;
                        if (!f) break;
                      } else return x.errors = [ {
                        instancePath: s + "/$defs",
                        schemaPath: "#/properties/%24defs/type",
                        keyword: "type",
                        params: {
                          type: "object"
                        },
                        message: "must be object"
                      } ], !1;
                      var n = m === e;
                    } else var n = !0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return x.errors = r, e === 0;
}

x.evaluated = {
  props: {
    $id: !0,
    $schema: !0,
    $ref: !0,
    $anchor: !0,
    $dynamicRef: !0,
    $dynamicAnchor: !0,
    $vocabulary: !0,
    $comment: !0,
    $defs: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

var Ie = {
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

function R(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = R.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (e === 0) if (Array.isArray(t)) if (t.length < 1) return R.errors = [ {
    instancePath: s,
    schemaPath: "#/minItems",
    keyword: "minItems",
    params: {
      limit: 1
    },
    message: "must NOT have fewer than 1 items"
  } ], !1; else {
    var n = !0;
    let I = t.length;
    for (let a = 0; a < I; a++) {
      let f = t[a], u = e, m = i.meta;
      if (m) if (!m(f, {
        instancePath: s + "/" + a,
        parentData: t,
        parentDataProperty: a,
        rootData: c,
        dynamicAnchors: i
      })) r = r === null ? m.errors : r.concat(m.errors), e = r.length; else var d = m.evaluated.props, o = m.evaluated.items; else if (!R(f, {
        instancePath: s + "/" + a,
        parentData: t,
        parentDataProperty: a,
        rootData: c,
        dynamicAnchors: i
      })) r = r === null ? R.errors : r.concat(R.errors), e = r.length; else {
        var w = R.evaluated.props;
        if (d !== !0 && w !== void 0) if (w === !0) d = !0; else d = d || {}, Object.assign(d, w);
        var k = R.evaluated.items;
        if (o !== !0 && k !== void 0) o = k === !0 ? !0 : o > k ? o : k;
      }
      var n = u === e;
      if (!n) break;
    }
  } else return R.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: "array"
    },
    message: "must be array"
  } ], !1;
  return R.errors = r, e === 0;
}

R.evaluated = {
  items: !0,
  dynamicProps: !1,
  dynamicItems: !1
};

function l(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = l.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return l.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Ie.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = l;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.prefixItems !== void 0) {
        let p = e;
        if (!R(t.prefixItems, {
          instancePath: s + "/prefixItems",
          parentData: t,
          parentDataProperty: "prefixItems",
          rootData: c,
          dynamicAnchors: i
        })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
        var n = p === e;
      } else var n = !0;
      if (n) {
        if (t.items !== void 0) {
          let p = t.items, O = e, y = i.meta;
          if (y) if (!y(p, {
            instancePath: s + "/items",
            parentData: t,
            parentDataProperty: "items",
            rootData: c,
            dynamicAnchors: i
          })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var d = y.evaluated.props, o = y.evaluated.items; else if (!l(p, {
            instancePath: s + "/items",
            parentData: t,
            parentDataProperty: "items",
            rootData: c,
            dynamicAnchors: i
          })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
            var w = l.evaluated.props;
            if (d !== !0 && w !== void 0) if (w === !0) d = !0; else d = d || {}, Object.assign(d, w);
            var k = l.evaluated.items;
            if (o !== !0 && k !== void 0) o = k === !0 ? !0 : o > k ? o : k;
          }
          var n = O === e;
        } else var n = !0;
        if (n) {
          if (t.contains !== void 0) {
            let p = t.contains, O = e, y = i.meta;
            if (y) if (!y(p, {
              instancePath: s + "/contains",
              parentData: t,
              parentDataProperty: "contains",
              rootData: c,
              dynamicAnchors: i
            })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var I = y.evaluated.props, a = y.evaluated.items; else if (!l(p, {
              instancePath: s + "/contains",
              parentData: t,
              parentDataProperty: "contains",
              rootData: c,
              dynamicAnchors: i
            })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
              var f = l.evaluated.props;
              if (I !== !0 && f !== void 0) if (f === !0) I = !0; else I = I || {}, Object.assign(I, f);
              var u = l.evaluated.items;
              if (a !== !0 && u !== void 0) a = u === !0 ? !0 : a > u ? a : u;
            }
            var n = O === e;
          } else var n = !0;
          if (n) {
            if (t.additionalProperties !== void 0) {
              let p = t.additionalProperties, O = e, y = i.meta;
              if (y) if (!y(p, {
                instancePath: s + "/additionalProperties",
                parentData: t,
                parentDataProperty: "additionalProperties",
                rootData: c,
                dynamicAnchors: i
              })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var m = y.evaluated.props, N = y.evaluated.items; else if (!l(p, {
                instancePath: s + "/additionalProperties",
                parentData: t,
                parentDataProperty: "additionalProperties",
                rootData: c,
                dynamicAnchors: i
              })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                var v = l.evaluated.props;
                if (m !== !0 && v !== void 0) if (v === !0) m = !0; else m = m || {}, Object.assign(m, v);
                var _ = l.evaluated.items;
                if (N !== !0 && _ !== void 0) N = _ === !0 ? !0 : N > _ ? N : _;
              }
              var n = O === e;
            } else var n = !0;
            if (n) {
              if (t.properties !== void 0) {
                let p = t.properties, O = e;
                if (e === O) if (p && typeof p == "object" && !Array.isArray(p)) for (let q in p) {
                  let W = p[q], re = e, A = i.meta;
                  if (A) if (!A(W, {
                    instancePath: s + "/properties/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                    parentData: p,
                    parentDataProperty: q,
                    rootData: c,
                    dynamicAnchors: i
                  })) r = r === null ? A.errors : r.concat(A.errors), e = r.length; else var j = A.evaluated.props, g = A.evaluated.items; else if (!l(W, {
                    instancePath: s + "/properties/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                    parentData: p,
                    parentDataProperty: q,
                    rootData: c,
                    dynamicAnchors: i
                  })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                    var P = l.evaluated.props;
                    if (j !== !0 && P !== void 0) if (P === !0) j = !0; else j = j || {}, Object.assign(j, P);
                    var S = l.evaluated.items;
                    if (g !== !0 && S !== void 0) g = S === !0 ? !0 : g > S ? g : S;
                  }
                  var M = re === e;
                  if (!M) break;
                } else return l.errors = [ {
                  instancePath: s + "/properties",
                  schemaPath: "#/properties/properties/type",
                  keyword: "type",
                  params: {
                    type: "object"
                  },
                  message: "must be object"
                } ], !1;
                var n = O === e;
              } else var n = !0;
              if (n) {
                if (t.patternProperties !== void 0) {
                  let p = t.patternProperties, O = e;
                  if (e === O) if (p && typeof p == "object" && !Array.isArray(p)) {
                    for (let q in p) {
                      var Z = e === e;
                      if (!Z) {
                        let re = {
                          instancePath: s + "/patternProperties",
                          schemaPath: "#/properties/patternProperties/propertyNames",
                          keyword: "propertyNames",
                          params: {
                            propertyName: q
                          },
                          message: "property name must be valid"
                        };
                        if (r === null) r = [ re ]; else r.push(re);
                        return e++, l.errors = r, !1;
                        break;
                      }
                    }
                    if (Z) for (let q in p) {
                      let W = p[q], re = e, A = i.meta;
                      if (A) if (!A(W, {
                        instancePath: s + "/patternProperties/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                        parentData: p,
                        parentDataProperty: q,
                        rootData: c,
                        dynamicAnchors: i
                      })) r = r === null ? A.errors : r.concat(A.errors), e = r.length; else var T = A.evaluated.props, V = A.evaluated.items; else if (!l(W, {
                        instancePath: s + "/patternProperties/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                        parentData: p,
                        parentDataProperty: q,
                        rootData: c,
                        dynamicAnchors: i
                      })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                        var Q = l.evaluated.props;
                        if (T !== !0 && Q !== void 0) if (Q === !0) T = !0; else T = T || {}, Object.assign(T, Q);
                        var K = l.evaluated.items;
                        if (V !== !0 && K !== void 0) V = K === !0 ? !0 : V > K ? V : K;
                      }
                      var ae = re === e;
                      if (!ae) break;
                    }
                  } else return l.errors = [ {
                    instancePath: s + "/patternProperties",
                    schemaPath: "#/properties/patternProperties/type",
                    keyword: "type",
                    params: {
                      type: "object"
                    },
                    message: "must be object"
                  } ], !1;
                  var n = O === e;
                } else var n = !0;
                if (n) {
                  if (t.dependentSchemas !== void 0) {
                    let p = t.dependentSchemas, O = e;
                    if (e === O) if (p && typeof p == "object" && !Array.isArray(p)) for (let q in p) {
                      let W = p[q], re = e, A = i.meta;
                      if (A) if (!A(W, {
                        instancePath: s + "/dependentSchemas/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                        parentData: p,
                        parentDataProperty: q,
                        rootData: c,
                        dynamicAnchors: i
                      })) r = r === null ? A.errors : r.concat(A.errors), e = r.length; else var B = A.evaluated.props, Y = A.evaluated.items; else if (!l(W, {
                        instancePath: s + "/dependentSchemas/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                        parentData: p,
                        parentDataProperty: q,
                        rootData: c,
                        dynamicAnchors: i
                      })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                        var ue = l.evaluated.props;
                        if (B !== !0 && ue !== void 0) if (ue === !0) B = !0; else B = B || {}, Object.assign(B, ue);
                        var G = l.evaluated.items;
                        if (Y !== !0 && G !== void 0) Y = G === !0 ? !0 : Y > G ? Y : G;
                      }
                      var U = re === e;
                      if (!U) break;
                    } else return l.errors = [ {
                      instancePath: s + "/dependentSchemas",
                      schemaPath: "#/properties/dependentSchemas/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    } ], !1;
                    var n = O === e;
                  } else var n = !0;
                  if (n) {
                    if (t.propertyNames !== void 0) {
                      let p = t.propertyNames, O = e, y = i.meta;
                      if (y) if (!y(p, {
                        instancePath: s + "/propertyNames",
                        parentData: t,
                        parentDataProperty: "propertyNames",
                        rootData: c,
                        dynamicAnchors: i
                      })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var H = y.evaluated.props, ee = y.evaluated.items; else if (!l(p, {
                        instancePath: s + "/propertyNames",
                        parentData: t,
                        parentDataProperty: "propertyNames",
                        rootData: c,
                        dynamicAnchors: i
                      })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                        var J = l.evaluated.props;
                        if (H !== !0 && J !== void 0) if (J === !0) H = !0; else H = H || {}, Object.assign(H, J);
                        var te = l.evaluated.items;
                        if (ee !== !0 && te !== void 0) ee = te === !0 ? !0 : ee > te ? ee : te;
                      }
                      var n = O === e;
                    } else var n = !0;
                    if (n) {
                      if (t.if !== void 0) {
                        let p = t.if, O = e, y = i.meta;
                        if (y) if (!y(p, {
                          instancePath: s + "/if",
                          parentData: t,
                          parentDataProperty: "if",
                          rootData: c,
                          dynamicAnchors: i
                        })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var se = y.evaluated.props, le = y.evaluated.items; else if (!l(p, {
                          instancePath: s + "/if",
                          parentData: t,
                          parentDataProperty: "if",
                          rootData: c,
                          dynamicAnchors: i
                        })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                          var ge = l.evaluated.props;
                          if (se !== !0 && ge !== void 0) if (ge === !0) se = !0; else se = se || {}, Object.assign(se, ge);
                          var fe = l.evaluated.items;
                          if (le !== !0 && fe !== void 0) le = fe === !0 ? !0 : le > fe ? le : fe;
                        }
                        var n = O === e;
                      } else var n = !0;
                      if (n) {
                        if (t.then !== void 0) {
                          let p = t.then, O = e, y = i.meta;
                          if (y) if (!y(p, {
                            instancePath: s + "/then",
                            parentData: t,
                            parentDataProperty: "then",
                            rootData: c,
                            dynamicAnchors: i
                          })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var ne = y.evaluated.props, me = y.evaluated.items; else if (!l(p, {
                            instancePath: s + "/then",
                            parentData: t,
                            parentDataProperty: "then",
                            rootData: c,
                            dynamicAnchors: i
                          })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                            var he = l.evaluated.props;
                            if (ne !== !0 && he !== void 0) if (he === !0) ne = !0; else ne = ne || {}, Object.assign(ne, he);
                            var pe = l.evaluated.items;
                            if (me !== !0 && pe !== void 0) me = pe === !0 ? !0 : me > pe ? me : pe;
                          }
                          var n = O === e;
                        } else var n = !0;
                        if (n) {
                          if (t.else !== void 0) {
                            let p = t.else, O = e, y = i.meta;
                            if (y) if (!y(p, {
                              instancePath: s + "/else",
                              parentData: t,
                              parentDataProperty: "else",
                              rootData: c,
                              dynamicAnchors: i
                            })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var ie = y.evaluated.props, ce = y.evaluated.items; else if (!l(p, {
                              instancePath: s + "/else",
                              parentData: t,
                              parentDataProperty: "else",
                              rootData: c,
                              dynamicAnchors: i
                            })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                              var be = l.evaluated.props;
                              if (ie !== !0 && be !== void 0) if (be === !0) ie = !0; else ie = ie || {}, Object.assign(ie, be);
                              var de = l.evaluated.items;
                              if (ce !== !0 && de !== void 0) ce = de === !0 ? !0 : ce > de ? ce : de;
                            }
                            var n = O === e;
                          } else var n = !0;
                          if (n) {
                            if (t.allOf !== void 0) {
                              let p = e;
                              if (!R(t.allOf, {
                                instancePath: s + "/allOf",
                                parentData: t,
                                parentDataProperty: "allOf",
                                rootData: c,
                                dynamicAnchors: i
                              })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
                              var n = p === e;
                            } else var n = !0;
                            if (n) {
                              if (t.anyOf !== void 0) {
                                let p = e;
                                if (!R(t.anyOf, {
                                  instancePath: s + "/anyOf",
                                  parentData: t,
                                  parentDataProperty: "anyOf",
                                  rootData: c,
                                  dynamicAnchors: i
                                })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
                                var n = p === e;
                              } else var n = !0;
                              if (n) {
                                if (t.oneOf !== void 0) {
                                  let p = e;
                                  if (!R(t.oneOf, {
                                    instancePath: s + "/oneOf",
                                    parentData: t,
                                    parentDataProperty: "oneOf",
                                    rootData: c,
                                    dynamicAnchors: i
                                  })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
                                  var n = p === e;
                                } else var n = !0;
                                if (n) if (t.not !== void 0) {
                                  let p = t.not, O = e, y = i.meta;
                                  if (y) if (!y(p, {
                                    instancePath: s + "/not",
                                    parentData: t,
                                    parentDataProperty: "not",
                                    rootData: c,
                                    dynamicAnchors: i
                                  })) r = r === null ? y.errors : r.concat(y.errors), e = r.length; else var oe = y.evaluated.props, ye = y.evaluated.items; else if (!l(p, {
                                    instancePath: s + "/not",
                                    parentData: t,
                                    parentDataProperty: "not",
                                    rootData: c,
                                    dynamicAnchors: i
                                  })) r = r === null ? l.errors : r.concat(l.errors), e = r.length; else {
                                    var $e = l.evaluated.props;
                                    if (oe !== !0 && $e !== void 0) if ($e === !0) oe = !0; else oe = oe || {}, Object.assign(oe, $e);
                                    var ve = l.evaluated.items;
                                    if (ye !== !0 && ve !== void 0) ye = ve === !0 ? !0 : ye > ve ? ye : ve;
                                  }
                                  var n = O === e;
                                } else var n = !0;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return l.errors = r, e === 0;
}

l.evaluated = {
  props: {
    prefixItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    properties: !0,
    patternProperties: !0,
    dependentSchemas: !0,
    propertyNames: !0,
    if: !0,
    then: !0,
    else: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0,
    not: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

var Ne = {
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

function F(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = F.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return F.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Ne.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = F;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.unevaluatedItems !== void 0) {
        let m = t.unevaluatedItems, N = e, v = i.meta;
        if (v) if (!v(m, {
          instancePath: s + "/unevaluatedItems",
          parentData: t,
          parentDataProperty: "unevaluatedItems",
          rootData: c,
          dynamicAnchors: i
        })) r = r === null ? v.errors : r.concat(v.errors), e = r.length; else var n = v.evaluated.props, d = v.evaluated.items; else if (!F(m, {
          instancePath: s + "/unevaluatedItems",
          parentData: t,
          parentDataProperty: "unevaluatedItems",
          rootData: c,
          dynamicAnchors: i
        })) r = r === null ? F.errors : r.concat(F.errors), e = r.length; else {
          var o = F.evaluated.props;
          if (n !== !0 && o !== void 0) if (o === !0) n = !0; else n = n || {}, Object.assign(n, o);
          var w = F.evaluated.items;
          if (d !== !0 && w !== void 0) d = w === !0 ? !0 : d > w ? d : w;
        }
        var k = N === e;
      } else var k = !0;
      if (k) if (t.unevaluatedProperties !== void 0) {
        let m = t.unevaluatedProperties, N = e, v = i.meta;
        if (v) if (!v(m, {
          instancePath: s + "/unevaluatedProperties",
          parentData: t,
          parentDataProperty: "unevaluatedProperties",
          rootData: c,
          dynamicAnchors: i
        })) r = r === null ? v.errors : r.concat(v.errors), e = r.length; else var I = v.evaluated.props, a = v.evaluated.items; else if (!F(m, {
          instancePath: s + "/unevaluatedProperties",
          parentData: t,
          parentDataProperty: "unevaluatedProperties",
          rootData: c,
          dynamicAnchors: i
        })) r = r === null ? F.errors : r.concat(F.errors), e = r.length; else {
          var f = F.evaluated.props;
          if (I !== !0 && f !== void 0) if (f === !0) I = !0; else I = I || {}, Object.assign(I, f);
          var u = F.evaluated.items;
          if (a !== !0 && u !== void 0) a = u === !0 ? !0 : a > u ? a : u;
        }
        var k = N === e;
      } else var k = !0;
    }
  }
  return F.errors = r, e === 0;
}

F.evaluated = {
  props: {
    unevaluatedItems: !0,
    unevaluatedProperties: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

var xe = {
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
}, _e = {
  enum: [ "array", "boolean", "integer", "null", "number", "object", "string" ]
};

var Oe = zJt().default;

function b(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = b.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return b.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: xe.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = b;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.type !== void 0) {
        let a = t.type, f = e, u = e, m = !1, N = e;
        if (!(a === "array" || a === "boolean" || a === "integer" || a === "null" || a === "number" || a === "object" || a === "string")) {
          let _ = {
            instancePath: s + "/type",
            schemaPath: "#/$defs/simpleTypes/enum",
            keyword: "enum",
            params: {
              allowedValues: _e.enum
            },
            message: "must be equal to one of the allowed values"
          };
          if (r === null) r = [ _ ]; else r.push(_);
          e++;
        }
        var d = N === e;
        m = m || d;
        let v = e;
        if (e === v) if (Array.isArray(a)) if (a.length < 1) {
          let _ = {
            instancePath: s + "/type",
            schemaPath: "#/properties/type/anyOf/1/minItems",
            keyword: "minItems",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 items"
          };
          if (r === null) r = [ _ ]; else r.push(_);
          e++;
        } else {
          var n = !0;
          let _ = a.length;
          for (let j = 0; j < _; j++) {
            let g = a[j], P = e;
            if (!(g === "array" || g === "boolean" || g === "integer" || g === "null" || g === "number" || g === "object" || g === "string")) {
              let M = {
                instancePath: s + "/type/" + j,
                schemaPath: "#/$defs/simpleTypes/enum",
                keyword: "enum",
                params: {
                  allowedValues: _e.enum
                },
                message: "must be equal to one of the allowed values"
              };
              if (r === null) r = [ M ]; else r.push(M);
              e++;
            }
            var n = P === e;
            if (!n) break;
          }
          if (n) {
            let j = a.length, g;
            if (j > 1) {
              e: for (;j--; ) for (g = j; g--; ) if (Oe(a[j], a[g])) {
                let P = {
                  instancePath: s + "/type",
                  schemaPath: "#/properties/type/anyOf/1/uniqueItems",
                  keyword: "uniqueItems",
                  params: {
                    i: j,
                    j: g
                  },
                  message: "must NOT have duplicate items (items ## " + g + " and " + j + " are identical)"
                };
                if (r === null) r = [ P ]; else r.push(P);
                e++;
                break e;
              }
            }
          }
        } else {
          let _ = {
            instancePath: s + "/type",
            schemaPath: "#/properties/type/anyOf/1/type",
            keyword: "type",
            params: {
              type: "array"
            },
            message: "must be array"
          };
          if (r === null) r = [ _ ]; else r.push(_);
          e++;
        }
        var d = v === e;
        if (m = m || d, !m) {
          let _ = {
            instancePath: s + "/type",
            schemaPath: "#/properties/type/anyOf",
            keyword: "anyOf",
            params: {},
            message: "must match a schema in anyOf"
          };
          if (r === null) r = [ _ ]; else r.push(_);
          return e++, b.errors = r, !1;
        } else if (e = u, r !== null) if (u) r.length = u; else r = null;
        var o = f === e;
      } else var o = !0;
      if (o) {
        if (t.enum !== void 0) {
          let a = e;
          if (e === a) {
            if (!Array.isArray(t.enum)) return b.errors = [ {
              instancePath: s + "/enum",
              schemaPath: "#/properties/enum/type",
              keyword: "type",
              params: {
                type: "array"
              },
              message: "must be array"
            } ], !1;
          }
          var o = a === e;
        } else var o = !0;
        if (o) {
          if (t.multipleOf !== void 0) {
            let a = t.multipleOf, f = e;
            if (e === f) if (typeof a == "number" && isFinite(a)) {
              if (a <= 0 || isNaN(a)) return b.errors = [ {
                instancePath: s + "/multipleOf",
                schemaPath: "#/properties/multipleOf/exclusiveMinimum",
                keyword: "exclusiveMinimum",
                params: {
                  comparison: ">",
                  limit: 0
                },
                message: "must be > 0"
              } ], !1;
            } else return b.errors = [ {
              instancePath: s + "/multipleOf",
              schemaPath: "#/properties/multipleOf/type",
              keyword: "type",
              params: {
                type: "number"
              },
              message: "must be number"
            } ], !1;
            var o = f === e;
          } else var o = !0;
          if (o) {
            if (t.maximum !== void 0) {
              let a = t.maximum, f = e;
              if (!(typeof a == "number" && isFinite(a))) return b.errors = [ {
                instancePath: s + "/maximum",
                schemaPath: "#/properties/maximum/type",
                keyword: "type",
                params: {
                  type: "number"
                },
                message: "must be number"
              } ], !1;
              var o = f === e;
            } else var o = !0;
            if (o) {
              if (t.exclusiveMaximum !== void 0) {
                let a = t.exclusiveMaximum, f = e;
                if (!(typeof a == "number" && isFinite(a))) return b.errors = [ {
                  instancePath: s + "/exclusiveMaximum",
                  schemaPath: "#/properties/exclusiveMaximum/type",
                  keyword: "type",
                  params: {
                    type: "number"
                  },
                  message: "must be number"
                } ], !1;
                var o = f === e;
              } else var o = !0;
              if (o) {
                if (t.minimum !== void 0) {
                  let a = t.minimum, f = e;
                  if (!(typeof a == "number" && isFinite(a))) return b.errors = [ {
                    instancePath: s + "/minimum",
                    schemaPath: "#/properties/minimum/type",
                    keyword: "type",
                    params: {
                      type: "number"
                    },
                    message: "must be number"
                  } ], !1;
                  var o = f === e;
                } else var o = !0;
                if (o) {
                  if (t.exclusiveMinimum !== void 0) {
                    let a = t.exclusiveMinimum, f = e;
                    if (!(typeof a == "number" && isFinite(a))) return b.errors = [ {
                      instancePath: s + "/exclusiveMinimum",
                      schemaPath: "#/properties/exclusiveMinimum/type",
                      keyword: "type",
                      params: {
                        type: "number"
                      },
                      message: "must be number"
                    } ], !1;
                    var o = f === e;
                  } else var o = !0;
                  if (o) {
                    if (t.maxLength !== void 0) {
                      let a = t.maxLength, f = e, u = e;
                      if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                        instancePath: s + "/maxLength",
                        schemaPath: "#/$defs/nonNegativeInteger/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      } ], !1;
                      if (e === u) {
                        if (typeof a == "number" && isFinite(a)) {
                          if (a < 0 || isNaN(a)) return b.errors = [ {
                            instancePath: s + "/maxLength",
                            schemaPath: "#/$defs/nonNegativeInteger/minimum",
                            keyword: "minimum",
                            params: {
                              comparison: ">=",
                              limit: 0
                            },
                            message: "must be >= 0"
                          } ], !1;
                        }
                      }
                      var o = f === e;
                    } else var o = !0;
                    if (o) {
                      if (t.minLength !== void 0) {
                        let a = t.minLength, f = e, u = e;
                        if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                          instancePath: s + "/minLength",
                          schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                          keyword: "type",
                          params: {
                            type: "integer"
                          },
                          message: "must be integer"
                        } ], !1;
                        if (e === u) {
                          if (typeof a == "number" && isFinite(a)) {
                            if (a < 0 || isNaN(a)) return b.errors = [ {
                              instancePath: s + "/minLength",
                              schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                              keyword: "minimum",
                              params: {
                                comparison: ">=",
                                limit: 0
                              },
                              message: "must be >= 0"
                            } ], !1;
                          }
                        }
                        var o = f === e;
                      } else var o = !0;
                      if (o) {
                        if (t.pattern !== void 0) {
                          let a = e;
                          if (e === a) {
                            if (e === a) {
                              if (typeof t.pattern !== "string") return b.errors = [ {
                                instancePath: s + "/pattern",
                                schemaPath: "#/properties/pattern/type",
                                keyword: "type",
                                params: {
                                  type: "string"
                                },
                                message: "must be string"
                              } ], !1;
                            }
                          }
                          var o = a === e;
                        } else var o = !0;
                        if (o) {
                          if (t.maxItems !== void 0) {
                            let a = t.maxItems, f = e, u = e;
                            if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                              instancePath: s + "/maxItems",
                              schemaPath: "#/$defs/nonNegativeInteger/type",
                              keyword: "type",
                              params: {
                                type: "integer"
                              },
                              message: "must be integer"
                            } ], !1;
                            if (e === u) {
                              if (typeof a == "number" && isFinite(a)) {
                                if (a < 0 || isNaN(a)) return b.errors = [ {
                                  instancePath: s + "/maxItems",
                                  schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                  keyword: "minimum",
                                  params: {
                                    comparison: ">=",
                                    limit: 0
                                  },
                                  message: "must be >= 0"
                                } ], !1;
                              }
                            }
                            var o = f === e;
                          } else var o = !0;
                          if (o) {
                            if (t.minItems !== void 0) {
                              let a = t.minItems, f = e, u = e;
                              if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                                instancePath: s + "/minItems",
                                schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                                keyword: "type",
                                params: {
                                  type: "integer"
                                },
                                message: "must be integer"
                              } ], !1;
                              if (e === u) {
                                if (typeof a == "number" && isFinite(a)) {
                                  if (a < 0 || isNaN(a)) return b.errors = [ {
                                    instancePath: s + "/minItems",
                                    schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                                    keyword: "minimum",
                                    params: {
                                      comparison: ">=",
                                      limit: 0
                                    },
                                    message: "must be >= 0"
                                  } ], !1;
                                }
                              }
                              var o = f === e;
                            } else var o = !0;
                            if (o) {
                              if (t.uniqueItems !== void 0) {
                                let a = e;
                                if (typeof t.uniqueItems !== "boolean") return b.errors = [ {
                                  instancePath: s + "/uniqueItems",
                                  schemaPath: "#/properties/uniqueItems/type",
                                  keyword: "type",
                                  params: {
                                    type: "boolean"
                                  },
                                  message: "must be boolean"
                                } ], !1;
                                var o = a === e;
                              } else var o = !0;
                              if (o) {
                                if (t.maxContains !== void 0) {
                                  let a = t.maxContains, f = e, u = e;
                                  if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                                    instancePath: s + "/maxContains",
                                    schemaPath: "#/$defs/nonNegativeInteger/type",
                                    keyword: "type",
                                    params: {
                                      type: "integer"
                                    },
                                    message: "must be integer"
                                  } ], !1;
                                  if (e === u) {
                                    if (typeof a == "number" && isFinite(a)) {
                                      if (a < 0 || isNaN(a)) return b.errors = [ {
                                        instancePath: s + "/maxContains",
                                        schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                        keyword: "minimum",
                                        params: {
                                          comparison: ">=",
                                          limit: 0
                                        },
                                        message: "must be >= 0"
                                      } ], !1;
                                    }
                                  }
                                  var o = f === e;
                                } else var o = !0;
                                if (o) {
                                  if (t.minContains !== void 0) {
                                    let a = t.minContains, f = e, u = e;
                                    if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                                      instancePath: s + "/minContains",
                                      schemaPath: "#/$defs/nonNegativeInteger/type",
                                      keyword: "type",
                                      params: {
                                        type: "integer"
                                      },
                                      message: "must be integer"
                                    } ], !1;
                                    if (e === u) {
                                      if (typeof a == "number" && isFinite(a)) {
                                        if (a < 0 || isNaN(a)) return b.errors = [ {
                                          instancePath: s + "/minContains",
                                          schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                          keyword: "minimum",
                                          params: {
                                            comparison: ">=",
                                            limit: 0
                                          },
                                          message: "must be >= 0"
                                        } ], !1;
                                      }
                                    }
                                    var o = f === e;
                                  } else var o = !0;
                                  if (o) {
                                    if (t.maxProperties !== void 0) {
                                      let a = t.maxProperties, f = e, u = e;
                                      if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                                        instancePath: s + "/maxProperties",
                                        schemaPath: "#/$defs/nonNegativeInteger/type",
                                        keyword: "type",
                                        params: {
                                          type: "integer"
                                        },
                                        message: "must be integer"
                                      } ], !1;
                                      if (e === u) {
                                        if (typeof a == "number" && isFinite(a)) {
                                          if (a < 0 || isNaN(a)) return b.errors = [ {
                                            instancePath: s + "/maxProperties",
                                            schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                            keyword: "minimum",
                                            params: {
                                              comparison: ">=",
                                              limit: 0
                                            },
                                            message: "must be >= 0"
                                          } ], !1;
                                        }
                                      }
                                      var o = f === e;
                                    } else var o = !0;
                                    if (o) {
                                      if (t.minProperties !== void 0) {
                                        let a = t.minProperties, f = e, u = e;
                                        if (!(typeof a == "number" && (!(a % 1) && !isNaN(a)) && isFinite(a))) return b.errors = [ {
                                          instancePath: s + "/minProperties",
                                          schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                                          keyword: "type",
                                          params: {
                                            type: "integer"
                                          },
                                          message: "must be integer"
                                        } ], !1;
                                        if (e === u) {
                                          if (typeof a == "number" && isFinite(a)) {
                                            if (a < 0 || isNaN(a)) return b.errors = [ {
                                              instancePath: s + "/minProperties",
                                              schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                                              keyword: "minimum",
                                              params: {
                                                comparison: ">=",
                                                limit: 0
                                              },
                                              message: "must be >= 0"
                                            } ], !1;
                                          }
                                        }
                                        var o = f === e;
                                      } else var o = !0;
                                      if (o) {
                                        if (t.required !== void 0) {
                                          let a = t.required, f = e;
                                          if (e === e) if (Array.isArray(a)) {
                                            var w = !0;
                                            let N = a.length;
                                            for (let v = 0; v < N; v++) {
                                              let _ = e;
                                              if (typeof a[v] !== "string") return b.errors = [ {
                                                instancePath: s + "/required/" + v,
                                                schemaPath: "#/$defs/stringArray/items/type",
                                                keyword: "type",
                                                params: {
                                                  type: "string"
                                                },
                                                message: "must be string"
                                              } ], !1;
                                              var w = _ === e;
                                              if (!w) break;
                                            }
                                            if (w) {
                                              let v = a.length, _;
                                              if (v > 1) {
                                                let j = {};
                                                for (;v--; ) {
                                                  let g = a[v];
                                                  if (typeof g !== "string") continue;
                                                  if (typeof j[g] == "number") {
                                                    return _ = j[g], b.errors = [ {
                                                      instancePath: s + "/required",
                                                      schemaPath: "#/$defs/stringArray/uniqueItems",
                                                      keyword: "uniqueItems",
                                                      params: {
                                                        i: v,
                                                        j: _
                                                      },
                                                      message: "must NOT have duplicate items (items ## " + _ + " and " + v + " are identical)"
                                                    } ], !1;
                                                    break;
                                                  }
                                                  j[g] = v;
                                                }
                                              }
                                            }
                                          } else return b.errors = [ {
                                            instancePath: s + "/required",
                                            schemaPath: "#/$defs/stringArray/type",
                                            keyword: "type",
                                            params: {
                                              type: "array"
                                            },
                                            message: "must be array"
                                          } ], !1;
                                          var o = f === e;
                                        } else var o = !0;
                                        if (o) if (t.dependentRequired !== void 0) {
                                          let a = t.dependentRequired, f = e;
                                          if (e === f) if (a && typeof a == "object" && !Array.isArray(a)) for (let m in a) {
                                            let N = a[m], v = e;
                                            if (e === e) if (Array.isArray(N)) {
                                              var k = !0;
                                              let j = N.length;
                                              for (let g = 0; g < j; g++) {
                                                let P = e;
                                                if (typeof N[g] !== "string") return b.errors = [ {
                                                  instancePath: s + "/dependentRequired/" + m.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + g,
                                                  schemaPath: "#/$defs/stringArray/items/type",
                                                  keyword: "type",
                                                  params: {
                                                    type: "string"
                                                  },
                                                  message: "must be string"
                                                } ], !1;
                                                var k = P === e;
                                                if (!k) break;
                                              }
                                              if (k) {
                                                let g = N.length, P;
                                                if (g > 1) {
                                                  let S = {};
                                                  for (;g--; ) {
                                                    let M = N[g];
                                                    if (typeof M !== "string") continue;
                                                    if (typeof S[M] == "number") {
                                                      return P = S[M], b.errors = [ {
                                                        instancePath: s + "/dependentRequired/" + m.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                        schemaPath: "#/$defs/stringArray/uniqueItems",
                                                        keyword: "uniqueItems",
                                                        params: {
                                                          i: g,
                                                          j: P
                                                        },
                                                        message: "must NOT have duplicate items (items ## " + P + " and " + g + " are identical)"
                                                      } ], !1;
                                                      break;
                                                    }
                                                    S[M] = g;
                                                  }
                                                }
                                              }
                                            } else return b.errors = [ {
                                              instancePath: s + "/dependentRequired/" + m.replace(/~/g, "~0").replace(/\//g, "~1"),
                                              schemaPath: "#/$defs/stringArray/type",
                                              keyword: "type",
                                              params: {
                                                type: "array"
                                              },
                                              message: "must be array"
                                            } ], !1;
                                            var I = v === e;
                                            if (!I) break;
                                          } else return b.errors = [ {
                                            instancePath: s + "/dependentRequired",
                                            schemaPath: "#/properties/dependentRequired/type",
                                            keyword: "type",
                                            params: {
                                              type: "object"
                                            },
                                            message: "must be object"
                                          } ], !1;
                                          var o = f === e;
                                        } else var o = !0;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return b.errors = r, e === 0;
}

b.evaluated = {
  props: {
    type: !0,
    const: !0,
    enum: !0,
    multipleOf: !0,
    maximum: !0,
    exclusiveMaximum: !0,
    minimum: !0,
    exclusiveMinimum: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxContains: !0,
    minContains: !0,
    maxProperties: !0,
    minProperties: !0,
    required: !0,
    dependentRequired: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

var De = {
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

function L(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = L.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return L.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: De.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = L;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.title !== void 0) {
        let d = e;
        if (typeof t.title !== "string") return L.errors = [ {
          instancePath: s + "/title",
          schemaPath: "#/properties/title/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        } ], !1;
        var n = d === e;
      } else var n = !0;
      if (n) {
        if (t.description !== void 0) {
          let d = e;
          if (typeof t.description !== "string") return L.errors = [ {
            instancePath: s + "/description",
            schemaPath: "#/properties/description/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          } ], !1;
          var n = d === e;
        } else var n = !0;
        if (n) {
          if (t.deprecated !== void 0) {
            let d = e;
            if (typeof t.deprecated !== "boolean") return L.errors = [ {
              instancePath: s + "/deprecated",
              schemaPath: "#/properties/deprecated/type",
              keyword: "type",
              params: {
                type: "boolean"
              },
              message: "must be boolean"
            } ], !1;
            var n = d === e;
          } else var n = !0;
          if (n) {
            if (t.readOnly !== void 0) {
              let d = e;
              if (typeof t.readOnly !== "boolean") return L.errors = [ {
                instancePath: s + "/readOnly",
                schemaPath: "#/properties/readOnly/type",
                keyword: "type",
                params: {
                  type: "boolean"
                },
                message: "must be boolean"
              } ], !1;
              var n = d === e;
            } else var n = !0;
            if (n) {
              if (t.writeOnly !== void 0) {
                let d = e;
                if (typeof t.writeOnly !== "boolean") return L.errors = [ {
                  instancePath: s + "/writeOnly",
                  schemaPath: "#/properties/writeOnly/type",
                  keyword: "type",
                  params: {
                    type: "boolean"
                  },
                  message: "must be boolean"
                } ], !1;
                var n = d === e;
              } else var n = !0;
              if (n) if (t.examples !== void 0) {
                let d = e;
                if (e === d) {
                  if (!Array.isArray(t.examples)) return L.errors = [ {
                    instancePath: s + "/examples",
                    schemaPath: "#/properties/examples/type",
                    keyword: "type",
                    params: {
                      type: "array"
                    },
                    message: "must be array"
                  } ], !1;
                }
                var n = d === e;
              } else var n = !0;
            }
          }
        }
      }
    }
  }
  return L.errors = r, e === 0;
}

L.evaluated = {
  props: {
    title: !0,
    description: !0,
    default: !0,
    deprecated: !0,
    readOnly: !0,
    writeOnly: !0,
    examples: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

var Re = {
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

function X(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = X.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return X.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Re.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = X;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.format !== void 0) {
        if (typeof t.format !== "string") return X.errors = [ {
          instancePath: s + "/format",
          schemaPath: "#/properties/format/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        } ], !1;
      }
    }
  }
  return X.errors = r, e === 0;
}

X.evaluated = {
  props: {
    format: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

var Ae = {
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

function C(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = C.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return C.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Ae.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = C;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.contentEncoding !== void 0) {
        let I = e;
        if (typeof t.contentEncoding !== "string") return C.errors = [ {
          instancePath: s + "/contentEncoding",
          schemaPath: "#/properties/contentEncoding/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        } ], !1;
        var n = I === e;
      } else var n = !0;
      if (n) {
        if (t.contentMediaType !== void 0) {
          let I = e;
          if (typeof t.contentMediaType !== "string") return C.errors = [ {
            instancePath: s + "/contentMediaType",
            schemaPath: "#/properties/contentMediaType/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          } ], !1;
          var n = I === e;
        } else var n = !0;
        if (n) if (t.contentSchema !== void 0) {
          let I = t.contentSchema, a = e, f = i.meta;
          if (f) if (!f(I, {
            instancePath: s + "/contentSchema",
            parentData: t,
            parentDataProperty: "contentSchema",
            rootData: c,
            dynamicAnchors: i
          })) r = r === null ? f.errors : r.concat(f.errors), e = r.length; else var d = f.evaluated.props, o = f.evaluated.items; else if (!C(I, {
            instancePath: s + "/contentSchema",
            parentData: t,
            parentDataProperty: "contentSchema",
            rootData: c,
            dynamicAnchors: i
          })) r = r === null ? C.errors : r.concat(C.errors), e = r.length; else {
            var w = C.evaluated.props;
            if (d !== !0 && w !== void 0) if (w === !0) d = !0; else d = d || {}, Object.assign(d, w);
            var k = C.evaluated.items;
            if (o !== !0 && k !== void 0) o = k === !0 ? !0 : o > k ? o : k;
          }
          var n = a === e;
        } else var n = !0;
      }
    }
  }
  return C.errors = r, e === 0;
}

C.evaluated = {
  props: {
    contentEncoding: !0,
    contentMediaType: !0,
    contentSchema: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

function D(t, {instancePath: s = "", parentData: z, parentDataProperty: E, rootData: c = t, dynamicAnchors: i = {}} = {}) {
  let r = null, e = 0, h = D.evaluated;
  if (h.dynamicProps) h.props = void 0;
  if (h.dynamicItems) h.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return D.errors = [ {
    instancePath: s,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: je.type
    },
    message: "must be object,boolean"
  } ], !1;
  if (!i.meta) i.meta = D;
  let n = e;
  if (!x(t, {
    instancePath: s,
    parentData: z,
    parentDataProperty: E,
    rootData: c,
    dynamicAnchors: i
  })) r = r === null ? x.errors : r.concat(x.errors), e = r.length;
  var d = n === e;
  if (d) {
    let P = e;
    if (!l(t, {
      instancePath: s,
      parentData: z,
      parentDataProperty: E,
      rootData: c,
      dynamicAnchors: i
    })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;
    var d = P === e;
    if (d) {
      let M = e;
      if (!F(t, {
        instancePath: s,
        parentData: z,
        parentDataProperty: E,
        rootData: c,
        dynamicAnchors: i
      })) r = r === null ? F.errors : r.concat(F.errors), e = r.length;
      var d = M === e;
      if (d) {
        let T = e;
        if (!b(t, {
          instancePath: s,
          parentData: z,
          parentDataProperty: E,
          rootData: c,
          dynamicAnchors: i
        })) r = r === null ? b.errors : r.concat(b.errors), e = r.length;
        var d = T === e;
        if (d) {
          let Q = e;
          if (!L(t, {
            instancePath: s,
            parentData: z,
            parentDataProperty: E,
            rootData: c,
            dynamicAnchors: i
          })) r = r === null ? L.errors : r.concat(L.errors), e = r.length;
          var d = Q === e;
          if (d) {
            let ae = e;
            if (!X(t, {
              instancePath: s,
              parentData: z,
              parentDataProperty: E,
              rootData: c,
              dynamicAnchors: i
            })) r = r === null ? X.errors : r.concat(X.errors), e = r.length;
            var d = ae === e;
            if (d) {
              let Y = e;
              if (!C(t, {
                instancePath: s,
                parentData: z,
                parentDataProperty: E,
                rootData: c,
                dynamicAnchors: i
              })) r = r === null ? C.errors : r.concat(C.errors), e = r.length;
              var d = Y === e;
            }
          }
        }
      }
    }
  }
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.definitions !== void 0) {
        let P = t.definitions, S = e;
        if (e === S) if (P && typeof P == "object" && !Array.isArray(P)) for (let M in P) {
          let Z = P[M], T = e, V = i.meta;
          if (V) if (!V(Z, {
            instancePath: s + "/definitions/" + M.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: P,
            parentDataProperty: M,
            rootData: c,
            dynamicAnchors: i
          })) r = r === null ? V.errors : r.concat(V.errors), e = r.length; else var o = V.evaluated.props, w = V.evaluated.items; else if (!D(Z, {
            instancePath: s + "/definitions/" + M.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: P,
            parentDataProperty: M,
            rootData: c,
            dynamicAnchors: i
          })) r = r === null ? D.errors : r.concat(D.errors), e = r.length; else {
            var k = D.evaluated.props;
            if (o !== !0 && k !== void 0) if (k === !0) o = !0; else o = o || {}, Object.assign(o, k);
            var I = D.evaluated.items;
            if (w !== !0 && I !== void 0) w = I === !0 ? !0 : w > I ? w : I;
          }
          var a = T === e;
          if (!a) break;
        } else return D.errors = [ {
          instancePath: s + "/definitions",
          schemaPath: "#/properties/definitions/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        } ], !1;
        var f = S === e;
      } else var f = !0;
      if (f) {
        if (t.dependencies !== void 0) {
          let P = t.dependencies, S = e;
          if (e === S) if (P && typeof P == "object" && !Array.isArray(P)) for (let Z in P) {
            let T = P[Z], V = e, Q = e, K = !1, ae = e, B = i.meta;
            if (B) if (!B(T, {
              instancePath: s + "/dependencies/" + Z.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: P,
              parentDataProperty: Z,
              rootData: c,
              dynamicAnchors: i
            })) r = r === null ? B.errors : r.concat(B.errors), e = r.length; else var u = B.evaluated.props, m = B.evaluated.items; else if (!D(T, {
              instancePath: s + "/dependencies/" + Z.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: P,
              parentDataProperty: Z,
              rootData: c,
              dynamicAnchors: i
            })) r = r === null ? D.errors : r.concat(D.errors), e = r.length; else {
              var N = D.evaluated.props;
              if (u !== !0 && N !== void 0) if (N === !0) u = !0; else u = u || {}, Object.assign(u, N);
              var v = D.evaluated.items;
              if (m !== !0 && v !== void 0) m = v === !0 ? !0 : m > v ? m : v;
            }
            var j = ae === e;
            K = K || j;
            let Y = e;
            if (e === e) if (Array.isArray(T)) {
              var _ = !0;
              let G = T.length;
              for (let U = 0; U < G; U++) {
                let H = e;
                if (typeof T[U] !== "string") {
                  let J = {
                    instancePath: s + "/dependencies/" + Z.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + U,
                    schemaPath: "meta/validation#/$defs/stringArray/items/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  };
                  if (r === null) r = [ J ]; else r.push(J);
                  e++;
                }
                var _ = H === e;
                if (!_) break;
              }
              if (_) {
                let U = T.length, H;
                if (U > 1) {
                  let ee = {};
                  for (;U--; ) {
                    let J = T[U];
                    if (typeof J !== "string") continue;
                    if (typeof ee[J] == "number") {
                      H = ee[J];
                      let te = {
                        instancePath: s + "/dependencies/" + Z.replace(/~/g, "~0").replace(/\//g, "~1"),
                        schemaPath: "meta/validation#/$defs/stringArray/uniqueItems",
                        keyword: "uniqueItems",
                        params: {
                          i: U,
                          j: H
                        },
                        message: "must NOT have duplicate items (items ## " + H + " and " + U + " are identical)"
                      };
                      if (r === null) r = [ te ]; else r.push(te);
                      e++;
                      break;
                    }
                    ee[J] = U;
                  }
                }
              }
            } else {
              let G = {
                instancePath: s + "/dependencies/" + Z.replace(/~/g, "~0").replace(/\//g, "~1"),
                schemaPath: "meta/validation#/$defs/stringArray/type",
                keyword: "type",
                params: {
                  type: "array"
                },
                message: "must be array"
              };
              if (r === null) r = [ G ]; else r.push(G);
              e++;
            }
            var j = Y === e;
            if (K = K || j, j) {
              if (m !== !0) m = !0;
            }
            if (!K) {
              let G = {
                instancePath: s + "/dependencies/" + Z.replace(/~/g, "~0").replace(/\//g, "~1"),
                schemaPath: "#/properties/dependencies/additionalProperties/anyOf",
                keyword: "anyOf",
                params: {},
                message: "must match a schema in anyOf"
              };
              if (r === null) r = [ G ]; else r.push(G);
              return e++, D.errors = r, !1;
            } else if (e = Q, r !== null) if (Q) r.length = Q; else r = null;
            var g = V === e;
            if (!g) break;
          } else return D.errors = [ {
            instancePath: s + "/dependencies",
            schemaPath: "#/properties/dependencies/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          } ], !1;
          var f = S === e;
        } else var f = !0;
        if (f) {
          if (t.$recursiveAnchor !== void 0) {
            let P = t.$recursiveAnchor, S = e;
            if (e === e) if (typeof P === "string") {
              if (!Pe.test(P)) return D.errors = [ {
                instancePath: s + "/$recursiveAnchor",
                schemaPath: "meta/core#/$defs/anchorString/pattern",
                keyword: "pattern",
                params: {
                  pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                },
                message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
              } ], !1;
            } else return D.errors = [ {
              instancePath: s + "/$recursiveAnchor",
              schemaPath: "meta/core#/$defs/anchorString/type",
              keyword: "type",
              params: {
                type: "string"
              },
              message: "must be string"
            } ], !1;
            var f = S === e;
          } else var f = !0;
          if (f) if (t.$recursiveRef !== void 0) {
            let P = e, S = e;
            if (e === S) {
              if (e === S) {
                if (typeof t.$recursiveRef !== "string") return D.errors = [ {
                  instancePath: s + "/$recursiveRef",
                  schemaPath: "meta/core#/$defs/uriReferenceString/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                } ], !1;
              }
            }
            var f = P === e;
          } else var f = !0;
        }
      }
    }
  }
  return D.errors = r, e === 0;
}

D.evaluated = {
  props: {
    definitions: !0,
    dependencies: !0,
    $recursiveAnchor: !0,
    $recursiveRef: !0,
    contentEncoding: !0,
    contentMediaType: !0,
    contentSchema: !0,
    format: !0,
    title: !0,
    description: !0,
    default: !0,
    deprecated: !0,
    readOnly: !0,
    writeOnly: !0,
    examples: !0,
    type: !0,
    const: !0,
    enum: !0,
    multipleOf: !0,
    maximum: !0,
    exclusiveMaximum: !0,
    minimum: !0,
    exclusiveMinimum: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxContains: !0,
    minContains: !0,
    maxProperties: !0,
    minProperties: !0,
    required: !0,
    dependentRequired: !0,
    unevaluatedItems: !0,
    unevaluatedProperties: !0,
    prefixItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    properties: !0,
    patternProperties: !0,
    dependentSchemas: !0,
    propertyNames: !0,
    if: !0,
    then: !0,
    else: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0,
    not: !0,
    $id: !0,
    $schema: !0,
    $ref: !0,
    $anchor: !0,
    $dynamicRef: !0,
    $dynamicAnchor: !0,
    $vocabulary: !0,
    $comment: !0,
    $defs: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};

export { qe as default };
