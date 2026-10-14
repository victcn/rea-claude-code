// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { i5, cT } from "./chunk-fzpaq6a9.js";

import { rS } from "./chunk-tz7tmg8b.js";

import { OP } from "./chunk-3yeje51y.js";

import { ztn } from "./chunk-dynvkayz.js";

import { Dse, Lse, Nse, pZ, XT, fZ, $se, $1, mZ, YF, Fse, Use, Bse, jse, Wse, gZ } from "./chunk-c47gf6gq.js";

import { Iz } from "./chunk-851qddh7.js";

import { Nc } from "./chunk-fzyt9ct7.js";

import { MP } from "./chunk-nj8cgz8s.js";

import { EUe } from "./chunk-90s33se4.js";

import { HP } from "./chunk-p5n1wfty.js";

import { DP } from "./chunk-w8hcbtxg.js";

import { og, nD } from "./chunk-w4hwgefc.js";

import { _T, lx } from "./chunk-shz68fkm.js";

import { C } from "./chunk-m8ez8fhk.js";

var ue = C(function(Ce) {
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  Ce.resolveHttpAuthSchemeConfig = Ce.resolveStsAuthConfig = Ce.defaultSTSHttpAuthSchemeProvider = Ce.defaultSTSHttpAuthSchemeParametersProvider = void 0;
  var ve = XT(), k = DP(), ye = le(), _o = async (e, t, n) => ({
    operation: k.getSmithyContext(t).operation,
    region: await k.normalizeProvider(e.region)() || (() => {
      throw Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  });
  Ce.defaultSTSHttpAuthSchemeParametersProvider = _o;
  function fo(e) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "sts",
        region: e.region
      },
      propertiesExtractor: (t, n) => ({
        signingProperties: {
          config: t,
          context: n
        }
      })
    };
  }
  function So(e) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var Po = e => {
    let t = [];
    switch (e.operation) {
     case "AssumeRoleWithWebIdentity":
      {
        t.push(So(e));
        break;
      }

     default:
      t.push(fo(e));
    }
    return t;
  };
  Ce.defaultSTSHttpAuthSchemeProvider = Po;
  var Eo = e => Object.assign(e, {
    stsClientCtor: ye.STSClient
  });
  Ce.resolveStsAuthConfig = Eo;
  var vo = e => {
    let t = Ce.resolveStsAuthConfig(e), n = ve.resolveAwsSdkSigV4Config(t);
    return Object.assign(n, {
      authSchemePreference: k.normalizeProvider(e.authSchemePreference ?? [])
    });
  };
  Ce.resolveHttpAuthSchemeConfig = vo;
});

var de = C(function(Re) {
  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  Re.commonParams = Re.resolveClientEndpointParameters = void 0;
  var Ao = e => Object.assign(e, {
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
    defaultSigningName: "sts"
  });
  Re.resolveClientEndpointParameters = Ao;
  Re.commonParams = {
    UseGlobalEndpoint: {
      type: "builtInParams",
      name: "useGlobalEndpoint"
    },
    UseFIPS: {
      type: "builtInParams",
      name: "useFipsEndpoint"
    },
    Endpoint: {
      type: "builtInParams",
      name: "endpoint"
    },
    Region: {
      type: "builtInParams",
      name: "region"
    },
    UseDualStack: {
      type: "builtInParams",
      name: "useDualstackEndpoint"
    }
  };
});

var Je = C(function(Qe) {
  Object.defineProperty(Qe, "__esModule", {
    value: !0
  });
  Qe.ruleSet = void 0;
  var Fe = "required", o = "type", i = "fn", s = "argv", E = "ref", Te = !1, pe = !0, P = "booleanEquals", d = "stringEquals", Ue = "sigv4", Le = "sts", Me = "us-east-1", a = "endpoint", De = "https://sts.{Region}.{PartitionResult#dnsSuffix}", f = "tree", O = "error", me = "getAttr", be = {
    [Fe]: !1,
    [o]: "string"
  }, ge = {
    [Fe]: !0,
    default: !1,
    [o]: "boolean"
  }, $e = {
    [E]: "Endpoint"
  }, we = {
    [i]: "isSet",
    [s]: [ {
      [E]: "Region"
    } ]
  }, p = {
    [E]: "Region"
  }, qe = {
    [i]: "aws.partition",
    [s]: [ p ],
    assign: "PartitionResult"
  }, Ke = {
    [E]: "UseFIPS"
  }, Ge = {
    [E]: "UseDualStack"
  }, m = {
    url: "https://sts.amazonaws.com",
    properties: {
      authSchemes: [ {
        name: Ue,
        signingName: Le,
        signingRegion: Me
      } ]
    },
    headers: {}
  }, _ = {}, ke = {
    conditions: [ {
      [i]: d,
      [s]: [ p, "aws-global" ]
    } ],
    [a]: m,
    [o]: a
  }, ze = {
    [i]: P,
    [s]: [ Ke, !0 ]
  }, Ve = {
    [i]: P,
    [s]: [ Ge, !0 ]
  }, Oe = {
    [i]: me,
    [s]: [ {
      [E]: "PartitionResult"
    }, "supportsFIPS" ]
  }, Be = {
    [E]: "PartitionResult"
  }, He = {
    [i]: P,
    [s]: [ !0, {
      [i]: me,
      [s]: [ Be, "supportsDualStack" ]
    } ]
  }, Ne = [ {
    [i]: "isSet",
    [s]: [ $e ]
  } ], We = [ ze ], je = [ Ve ], Ro = {
    version: "1.0",
    parameters: {
      Region: be,
      UseDualStack: ge,
      UseFIPS: ge,
      Endpoint: be,
      UseGlobalEndpoint: ge
    },
    rules: [ {
      conditions: [ {
        [i]: P,
        [s]: [ {
          [E]: "UseGlobalEndpoint"
        }, pe ]
      }, {
        [i]: "not",
        [s]: Ne
      }, we, qe, {
        [i]: P,
        [s]: [ Ke, Te ]
      }, {
        [i]: P,
        [s]: [ Ge, Te ]
      } ],
      rules: [ {
        conditions: [ {
          [i]: d,
          [s]: [ p, "ap-northeast-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "ap-south-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "ap-southeast-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "ap-southeast-2" ]
        } ],
        endpoint: m,
        [o]: a
      }, ke, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "ca-central-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "eu-central-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "eu-north-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "eu-west-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "eu-west-2" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "eu-west-3" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "sa-east-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, Me ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "us-east-2" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "us-west-1" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        conditions: [ {
          [i]: d,
          [s]: [ p, "us-west-2" ]
        } ],
        endpoint: m,
        [o]: a
      }, {
        endpoint: {
          url: De,
          properties: {
            authSchemes: [ {
              name: Ue,
              signingName: Le,
              signingRegion: "{Region}"
            } ]
          },
          headers: _
        },
        [o]: a
      } ],
      [o]: f
    }, {
      conditions: Ne,
      rules: [ {
        conditions: We,
        error: "Invalid Configuration: FIPS and custom endpoint are not supported",
        [o]: O
      }, {
        conditions: je,
        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
        [o]: O
      }, {
        endpoint: {
          url: $e,
          properties: _,
          headers: _
        },
        [o]: a
      } ],
      [o]: f
    }, {
      conditions: [ we ],
      rules: [ {
        conditions: [ qe ],
        rules: [ {
          conditions: [ ze, Ve ],
          rules: [ {
            conditions: [ {
              [i]: P,
              [s]: [ pe, Oe ]
            }, He ],
            rules: [ {
              endpoint: {
                url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: _,
                headers: _
              },
              [o]: a
            } ],
            [o]: f
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            [o]: O
          } ],
          [o]: f
        }, {
          conditions: We,
          rules: [ {
            conditions: [ {
              [i]: P,
              [s]: [ Oe, pe ]
            } ],
            rules: [ {
              conditions: [ {
                [i]: d,
                [s]: [ {
                  [i]: me,
                  [s]: [ Be, "name" ]
                }, "aws-us-gov" ]
              } ],
              endpoint: {
                url: "https://sts.{Region}.amazonaws.com",
                properties: _,
                headers: _
              },
              [o]: a
            }, {
              endpoint: {
                url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                properties: _,
                headers: _
              },
              [o]: a
            } ],
            [o]: f
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            [o]: O
          } ],
          [o]: f
        }, {
          conditions: je,
          rules: [ {
            conditions: [ He ],
            rules: [ {
              endpoint: {
                url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: _,
                headers: _
              },
              [o]: a
            } ],
            [o]: f
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            [o]: O
          } ],
          [o]: f
        }, ke, {
          endpoint: {
            url: De,
            properties: _,
            headers: _
          },
          [o]: a
        } ],
        [o]: f
      } ],
      [o]: f
    }, {
      error: "Invalid Configuration: Missing Region",
      [o]: O
    } ]
  };
  Qe.ruleSet = Ro;
});

var ot = C(function(et) {
  Object.defineProperty(et, "__esModule", {
    value: !0
  });
  et.defaultEndpointResolver = void 0;
  var Xe = pZ(), H = i5(), Ze = Je(), Io = new H.EndpointCache({
    size: 50,
    params: [ "Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint" ]
  }), To = (e, t = {}) => Io.get(e, () => H.resolveEndpoint(Ze.ruleSet, {
    endpointParams: e,
    logger: t.logger
  }));
  et.defaultEndpointResolver = To;
  H.customEndpointFunctions.aws = Xe.awsEndpointFunctions;
});

var pt = C(function(lt) {
  Object.defineProperty(lt, "__esModule", {
    value: !0
  });
  lt.getRuntimeConfig = void 0;
  var nt = XT(), rt = jse(), it = rS(), st = Nc(), ct = Iz(), M = lx(), K = _T(), at = ue(), ut = ot(), Do = e => ({
    apiVersion: "2011-06-15",
    base64Decoder: e?.base64Decoder ?? M.fromBase64,
    base64Encoder: e?.base64Encoder ?? M.toBase64,
    disableHostPrefix: e?.disableHostPrefix ?? !1,
    endpointProvider: e?.endpointProvider ?? ut.defaultEndpointResolver,
    extensions: e?.extensions ?? [],
    httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? at.defaultSTSHttpAuthSchemeProvider,
    httpAuthSchemes: e?.httpAuthSchemes ?? [ {
      schemeId: "aws.auth#sigv4",
      identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
      signer: new nt.AwsSdkSigV4Signer
    }, {
      schemeId: "smithy.api#noAuth",
      identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
      signer: new it.NoAuthSigner
    } ],
    logger: e?.logger ?? new st.NoOpLogger,
    protocol: e?.protocol ?? new rt.AwsQueryProtocol({
      defaultNamespace: "com.amazonaws.sts",
      xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
      version: "2011-06-15"
    }),
    serviceId: e?.serviceId ?? "STS",
    urlParser: e?.urlParser ?? ct.parseUrl,
    utf8Decoder: e?.utf8Decoder ?? K.fromUtf8,
    utf8Encoder: e?.utf8Encoder ?? K.toUtf8
  });
  lt.getRuntimeConfig = Do;
});

var At = C(function(yt) {
  Object.defineProperty(yt, "__esModule", {
    value: !0
  });
  yt.getRuntimeConfig = void 0;
  var gt = EUe(), bo = gt.__importDefault(ztn()), N = XT(), G = Fse(), v = cT(), mt = rS(), ht = Use(), z = YF(), h = OP(), V = nD(), _t = Bse(), ft = mZ(), St = pt(), Pt = Nc(), Et = Wse(), vt = Nc(), wo = e => {
    vt.emitWarningIfUnsupportedVersion(process.version);
    let t = Et.resolveDefaultsModeConfig(e), n = () => t().then(Pt.loadConfigsForDefaultMode), u = St.getRuntimeConfig(e);
    N.emitWarningIfUnsupportedVersion(process.version);
    let r = {
      profile: e?.profile,
      logger: u.logger
    };
    return {
      ...u,
      ...e,
      runtime: "node",
      defaultsMode: t,
      authSchemePreference: e?.authSchemePreference ?? h.loadConfig(N.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, r),
      bodyLengthChecker: e?.bodyLengthChecker ?? _t.calculateBodyLength,
      defaultUserAgentProvider: e?.defaultUserAgentProvider ?? G.createDefaultUserAgentProvider({
        serviceId: u.serviceId,
        clientVersion: bo.default.version
      }),
      httpAuthSchemes: e?.httpAuthSchemes ?? [ {
        schemeId: "aws.auth#sigv4",
        identityProvider: g => g.getIdentityProvider("aws.auth#sigv4") || (async l => await e.credentialDefaultProvider(l?.__config || {})()),
        signer: new N.AwsSdkSigV4Signer
      }, {
        schemeId: "smithy.api#noAuth",
        identityProvider: g => g.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new mt.NoAuthSigner
      } ],
      maxAttempts: e?.maxAttempts ?? h.loadConfig(z.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region: e?.region ?? h.loadConfig(v.NODE_REGION_CONFIG_OPTIONS, {
        ...v.NODE_REGION_CONFIG_FILE_OPTIONS,
        ...r
      }),
      requestHandler: V.NodeHttpHandler.create(e?.requestHandler ?? n),
      retryMode: e?.retryMode ?? h.loadConfig({
        ...z.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await n()).retryMode || ft.DEFAULT_RETRY_MODE
      }, e),
      sha256: e?.sha256 ?? ht.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? V.streamCollector,
      useDualstackEndpoint: e?.useDualstackEndpoint ?? h.loadConfig(v.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, r),
      useFipsEndpoint: e?.useFipsEndpoint ?? h.loadConfig(v.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, r),
      userAgentAppId: e?.userAgentAppId ?? h.loadConfig(G.NODE_APP_ID_CONFIG_OPTIONS, r)
    };
  };
  yt.getRuntimeConfig = wo;
});

var It = C(function(xt) {
  Object.defineProperty(xt, "__esModule", {
    value: !0
  });
  xt.resolveHttpAuthRuntimeConfig = xt.getHttpAuthExtensionConfiguration = void 0;
  var qo = e => {
    let {httpAuthSchemes: t, httpAuthSchemeProvider: n, credentials: u} = e;
    return {
      setHttpAuthScheme(r) {
        let g = t.findIndex(l => l.schemeId === r.schemeId);
        if (g === -1) t.push(r); else t.splice(g, 1, r);
      },
      httpAuthSchemes() {
        return t;
      },
      setHttpAuthSchemeProvider(r) {
        n = r;
      },
      httpAuthSchemeProvider() {
        return n;
      },
      setCredentials(r) {
        u = r;
      },
      credentials() {
        return u;
      }
    };
  };
  xt.getHttpAuthExtensionConfiguration = qo;
  var ko = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  });
  xt.resolveHttpAuthRuntimeConfig = ko;
});

var bt = C(function(Tt) {
  Object.defineProperty(Tt, "__esModule", {
    value: !0
  });
  Tt.resolveRuntimeExtensions = void 0;
  var B = gZ(), Q = og(), Y = Nc(), J = It(), Ho = (e, t) => {
    let n = Object.assign(B.getAwsRegionExtensionConfiguration(e), Y.getDefaultExtensionConfiguration(e), Q.getHttpHandlerExtensionConfiguration(e), J.getHttpAuthExtensionConfiguration(e));
    return t.forEach(u => u.configure(n)), Object.assign(e, B.resolveAwsRegionExtensionConfiguration(n), Y.resolveDefaultRuntimeConfig(n), Q.resolveHttpHandlerRuntimeConfig(n), J.resolveHttpAuthRuntimeConfig(n));
  };
  Tt.resolveRuntimeExtensions = Ho;
});

var le = C(function(he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.STSClient = he.__Client = void 0;
  var X = Dse(), wt = Lse(), qt = Nse(), Z = fZ(), kt = cT(), W = rS(), Ot = MP(), Ht = $se(), Nt = $1(), ee = YF(), oe = Nc();
  Object.defineProperty(he, "__Client", {
    enumerable: !0,
    get: function() {
      return oe.Client;
    }
  });
  var te = ue(), Wt = de(), jt = At(), Ft = bt();
  class Ut extends oe.Client {
    config;
    constructor(...[e]) {
      let t = jt.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let n = Wt.resolveClientEndpointParameters(t), u = Z.resolveUserAgentConfig(n), r = ee.resolveRetryConfig(u), g = kt.resolveRegionConfig(r), l = X.resolveHostHeaderConfig(g), A = Nt.resolveEndpointConfig(l), x = te.resolveHttpAuthSchemeConfig(A), R = Ft.resolveRuntimeExtensions(x, e?.extensions || []);
      this.config = R, this.middlewareStack.use(Ot.getSchemaSerdePlugin(this.config)), 
      this.middlewareStack.use(Z.getUserAgentPlugin(this.config)), this.middlewareStack.use(ee.getRetryPlugin(this.config)), 
      this.middlewareStack.use(Ht.getContentLengthPlugin(this.config)), this.middlewareStack.use(X.getHostHeaderPlugin(this.config)), 
      this.middlewareStack.use(wt.getLoggerPlugin(this.config)), this.middlewareStack.use(qt.getRecursionDetectionPlugin(this.config)), 
      this.middlewareStack.use(W.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: te.defaultSTSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async q => new W.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": q.credentials
        })
      })), this.middlewareStack.use(W.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  he.STSClient = Ut;
});

var pwo = C(function(ne) {
  var F = le(), U = Nc(), Mt = $1(), $t = de(), y = MP(), _e = HP(), No = gZ(), S = class e extends U.ServiceException {
    constructor(t) {
      super(t);
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Kt = class e extends S {
    name="ExpiredTokenException";
    $fault="client";
    constructor(t) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Gt = class e extends S {
    name="MalformedPolicyDocumentException";
    $fault="client";
    constructor(t) {
      super({
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, zt = class e extends S {
    name="PackedPolicyTooLargeException";
    $fault="client";
    constructor(t) {
      super({
        name: "PackedPolicyTooLargeException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Vt = class e extends S {
    name="RegionDisabledException";
    $fault="client";
    constructor(t) {
      super({
        name: "RegionDisabledException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Bt = class e extends S {
    name="IDPRejectedClaimException";
    $fault="client";
    constructor(t) {
      super({
        name: "IDPRejectedClaimException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Qt = class e extends S {
    name="InvalidIdentityTokenException";
    $fault="client";
    constructor(t) {
      super({
        name: "InvalidIdentityTokenException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Yt = class e extends S {
    name="IDPCommunicationErrorException";
    $fault="client";
    constructor(t) {
      super({
        name: "IDPCommunicationErrorException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype);
    }
  }, Wo = "Arn", jo = "AccessKeyId", Fo = "AssumeRole", Uo = "AssumedRoleId", Lo = "AssumeRoleRequest", Mo = "AssumeRoleResponse", fe = "AssumedRoleUser", $o = "AssumeRoleWithWebIdentity", Ko = "AssumeRoleWithWebIdentityRequest", Go = "AssumeRoleWithWebIdentityResponse", zo = "Audience", Se = "Credentials", Vo = "ContextAssertion", Jt = "DurationSeconds", Bo = "Expiration", Qo = "ExternalId", Yo = "ExpiredTokenException", Jo = "IDPCommunicationErrorException", Xo = "IDPRejectedClaimException", Zo = "InvalidIdentityTokenException", en = "Key", tn = "MalformedPolicyDocumentException", Xt = "Policy", Zt = "PolicyArns", on = "ProviderArn", nn = "ProvidedContexts", rn = "ProvidedContextsListType", sn = "ProvidedContext", cn = "PolicyDescriptorType", an = "ProviderId", eo = "PackedPolicySize", un = "PackedPolicyTooLargeException", ln = "Provider", to = "RoleArn", dn = "RegionDisabledException", oo = "RoleSessionName", pn = "SecretAccessKey", gn = "SubjectFromWebIdentityToken", Pe = "SourceIdentity", mn = "SerialNumber", hn = "SessionToken", _n = "Tags", fn = "TokenCode", Sn = "TransitiveTagKeys", Pn = "Tag", En = "Value", vn = "WebIdentityToken", yn = "arn", Cn = "accessKeySecretType", I = "awsQueryError", T = "client", An = "clientTokenType", D = "error", b = "httpError", w = "message", xn = "policyDescriptorListType", no = "smithy.ts.sdk.synthetic.com.amazonaws.sts", Rn = "tagListType", c = "com.amazonaws.sts", In = [ 0, c, Cn, 8, 0 ], Tn = [ 0, c, An, 8, 0 ], ro = [ 3, c, fe, 0, [ Uo, Wo ], [ 0, 0 ] ], Dn = [ 3, c, Lo, 0, [ to, oo, Zt, Xt, Jt, _n, Sn, Qo, mn, fn, Pe, nn ], [ 0, 0, () => so, 0, 1, () => Gn, 64, 0, 0, 0, 0, () => Kn ] ], bn = [ 3, c, Mo, 0, [ Se, fe, eo, Pe ], [ [ () => io, 0 ], () => ro, 1, 0 ] ], wn = [ 3, c, Ko, 0, [ to, oo, vn, an, Zt, Xt, Jt ], [ 0, 0, [ () => Tn, 0 ], 0, () => so, 0, 1 ] ], qn = [ 3, c, Go, 0, [ Se, gn, fe, eo, ln, zo, Pe ], [ [ () => io, 0 ], 0, () => ro, 1, 0, 0, 0 ] ], io = [ 3, c, Se, 0, [ jo, pn, hn, Bo ], [ 0, [ () => In, 0 ], 0, 4 ] ], kn = [ -3, c, Yo, {
    [D]: T,
    [b]: 400,
    [I]: [ "ExpiredTokenException", 400 ]
  }, [ w ], [ 0 ] ];
  y.TypeRegistry.for(c).registerError(kn, Kt);
  var On = [ -3, c, Jo, {
    [D]: T,
    [b]: 400,
    [I]: [ "IDPCommunicationError", 400 ]
  }, [ w ], [ 0 ] ];
  y.TypeRegistry.for(c).registerError(On, Yt);
  var Hn = [ -3, c, Xo, {
    [D]: T,
    [b]: 403,
    [I]: [ "IDPRejectedClaim", 403 ]
  }, [ w ], [ 0 ] ];
  y.TypeRegistry.for(c).registerError(Hn, Bt);
  var Nn = [ -3, c, Zo, {
    [D]: T,
    [b]: 400,
    [I]: [ "InvalidIdentityToken", 400 ]
  }, [ w ], [ 0 ] ];
  y.TypeRegistry.for(c).registerError(Nn, Qt);
  var Wn = [ -3, c, tn, {
    [D]: T,
    [b]: 400,
    [I]: [ "MalformedPolicyDocument", 400 ]
  }, [ w ], [ 0 ] ];
  y.TypeRegistry.for(c).registerError(Wn, Gt);
  var jn = [ -3, c, un, {
    [D]: T,
    [b]: 400,
    [I]: [ "PackedPolicyTooLarge", 400 ]
  }, [ w ], [ 0 ] ];
  y.TypeRegistry.for(c).registerError(jn, zt);
  var Fn = [ 3, c, cn, 0, [ yn ], [ 0 ] ], Un = [ 3, c, sn, 0, [ on, Vo ], [ 0, 0 ] ], Ln = [ -3, c, dn, {
    [D]: T,
    [b]: 403,
    [I]: [ "RegionDisabledException", 403 ]
  }, [ w ], [ 0 ] ];
  y.TypeRegistry.for(c).registerError(Ln, Vt);
  var Mn = [ 3, c, Pn, 0, [ en, En ], [ 0, 0 ] ], $n = [ -3, no, "STSServiceException", 0, [], [] ];
  y.TypeRegistry.for(no).registerError($n, S);
  var so = [ 1, c, xn, 0, () => Fn ], Kn = [ 1, c, rn, 0, () => Un ], Gn = [ 1, c, Rn, 0, () => Mn ], zn = [ 9, c, Fo, 0, () => Dn, () => bn ], Vn = [ 9, c, $o, 0, () => wn, () => qn ];
  class re extends(U.Command.classBuilder().ep($t.commonParams).m(function(e, t, n, u) {
    return [ Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions()) ];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(zn).build()){}
  class ie extends(U.Command.classBuilder().ep($t.commonParams).m(function(e, t, n, u) {
    return [ Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions()) ];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(Vn).build()){}
  var Bn = {
    AssumeRoleCommand: re,
    AssumeRoleWithWebIdentityCommand: ie
  };
  class Ee extends F.STSClient {}
  U.createAggregatedClient(Bn, Ee);
  var co = e => {
    if (typeof e?.Arn === "string") {
      let t = e.Arn.split(":");
      if (t.length > 4 && t[4] !== "") return t[4];
    }
    return;
  }, ao = async (e, t, n, u = {}) => {
    let r = typeof e === "function" ? await e() : e, g = typeof t === "function" ? await t() : t, l = await No.stsRegionDefaultResolver(u)();
    return n?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${r} (credential provider clientConfig)`, `${g} (contextual client)`, `${l} (STS default: AWS_REGION, profile region, or us-east-1)`), 
    r ?? g ?? l;
  }, Qn = (e, t) => {
    let n, u;
    return async (r, g) => {
      if (u = r, !n) {
        let {logger: q = e?.parentClientConfig?.logger, profile: j = e?.parentClientConfig?.profile, region: se, requestHandler: L = e?.parentClientConfig?.requestHandler, credentialProviderLogger: ce, userAgentAppId: ae = e?.parentClientConfig?.userAgentAppId} = e, mo = await ao(se, e?.parentClientConfig?.region, ce, {
          logger: q,
          profile: j
        }), ho = !uo(L);
        n = new t({
          ...e,
          userAgentAppId: ae,
          profile: j,
          credentialDefaultProvider: () => async () => u,
          region: mo,
          requestHandler: ho ? L : void 0,
          logger: q
        });
      }
      let {Credentials: l, AssumedRoleUser: A} = await n.send(new re(g));
      if (!l || !l.AccessKeyId || !l.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${g.RoleArn}`);
      let x = co(A), R = {
        accessKeyId: l.AccessKeyId,
        secretAccessKey: l.SecretAccessKey,
        sessionToken: l.SessionToken,
        expiration: l.Expiration,
        ...l.CredentialScope && {
          credentialScope: l.CredentialScope
        },
        ...x && {
          accountId: x
        }
      };
      return _e.setCredentialFeature(R, "CREDENTIALS_STS_ASSUME_ROLE", "i"), R;
    };
  }, Yn = (e, t) => {
    let n;
    return async u => {
      if (!n) {
        let {logger: x = e?.parentClientConfig?.logger, profile: R = e?.parentClientConfig?.profile, region: q, requestHandler: j = e?.parentClientConfig?.requestHandler, credentialProviderLogger: se, userAgentAppId: L = e?.parentClientConfig?.userAgentAppId} = e, ce = await ao(q, e?.parentClientConfig?.region, se, {
          logger: x,
          profile: R
        }), ae = !uo(j);
        n = new t({
          ...e,
          userAgentAppId: L,
          profile: R,
          region: ce,
          requestHandler: ae ? j : void 0,
          logger: x
        });
      }
      let {Credentials: r, AssumedRoleUser: g} = await n.send(new ie(u));
      if (!r || !r.AccessKeyId || !r.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${u.RoleArn}`);
      let l = co(g), A = {
        accessKeyId: r.AccessKeyId,
        secretAccessKey: r.SecretAccessKey,
        sessionToken: r.SessionToken,
        expiration: r.Expiration,
        ...r.CredentialScope && {
          credentialScope: r.CredentialScope
        },
        ...l && {
          accountId: l
        }
      };
      if (l) _e.setCredentialFeature(A, "RESOLVED_ACCOUNT_ID", "T");
      return _e.setCredentialFeature(A, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), A;
    };
  }, uo = e => e?.metadata?.handlerProtocol === "h2", lo = (e, t) => {
    if (!t) return e; else return class extends e {
      constructor(u) {
        super(u);
        for (let r of t) this.middlewareStack.use(r);
      }
    };
  }, po = (e = {}, t) => Qn(e, lo(F.STSClient, t)), go = (e = {}, t) => Yn(e, lo(F.STSClient, t)), Jn = e => t => e({
    roleAssumer: po(t),
    roleAssumerWithWebIdentity: go(t),
    ...t
  });
  Object.defineProperty(ne, "$Command", {
    enumerable: !0,
    get: function() {
      return U.Command;
    }
  });
  ne.AssumeRoleCommand = re;
  ne.AssumeRoleWithWebIdentityCommand = ie;
  ne.ExpiredTokenException = Kt;
  ne.IDPCommunicationErrorException = Yt;
  ne.IDPRejectedClaimException = Bt;
  ne.InvalidIdentityTokenException = Qt;
  ne.MalformedPolicyDocumentException = Gt;
  ne.PackedPolicyTooLargeException = zt;
  ne.RegionDisabledException = Vt;
  ne.STS = Ee;
  ne.STSServiceException = S;
  ne.decorateDefaultCredentialProvider = Jn;
  ne.getDefaultRoleAssumer = po;
  ne.getDefaultRoleAssumerWithWebIdentity = go;
  Object.keys(F).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(ne, e)) Object.defineProperty(ne, e, {
      enumerable: !0,
      get: function() {
        return F[e];
      }
    });
  });
});

export { pwo };
