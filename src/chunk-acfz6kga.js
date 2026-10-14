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

import "./chunk-vnxjpmqe.js";

import { Iz } from "./chunk-851qddh7.js";

import "./chunk-qcf34wnk.js";

import { Nc } from "./chunk-fzyt9ct7.js";

import { MP } from "./chunk-nj8cgz8s.js";

import { EUe } from "./chunk-90s33se4.js";

import { DP } from "./chunk-w8hcbtxg.js";

import { og, nD } from "./chunk-w4hwgefc.js";

import { _T, lx } from "./chunk-shz68fkm.js";

import { C } from "./chunk-m8ez8fhk.js";

var U = C(function(Y) {
  Object.defineProperty(Y, "__esModule", {
    value: !0
  });
  Y.resolveHttpAuthSchemeConfig = Y.defaultSigninHttpAuthSchemeProvider = Y.defaultSigninHttpAuthSchemeParametersProvider = void 0;
  var W = XT(), S = DP(), pt = async (e, t, r) => ({
    operation: S.getSmithyContext(t).operation,
    region: await S.normalizeProvider(e.region)() || (() => {
      throw Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  });
  Y.defaultSigninHttpAuthSchemeParametersProvider = pt;
  function lt(e) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "signin",
        region: e.region
      },
      propertiesExtractor: (t, r) => ({
        signingProperties: {
          config: t,
          context: r
        }
      })
    };
  }
  function ht(e) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var gt = e => {
    let t = [];
    switch (e.operation) {
     case "CreateOAuth2Token":
      {
        t.push(ht(e));
        break;
      }

     default:
      t.push(lt(e));
    }
    return t;
  };
  Y.defaultSigninHttpAuthSchemeProvider = gt;
  var _t = e => {
    let t = W.resolveAwsSdkSigV4Config(e);
    return Object.assign(t, {
      authSchemePreference: S.normalizeProvider(e.authSchemePreference ?? [])
    });
  };
  Y.resolveHttpAuthSchemeConfig = _t;
});

var de = C(function(ue) {
  Object.defineProperty(ue, "__esModule", {
    value: !0
  });
  ue.ruleSet = void 0;
  var ae = "required", o = "fn", s = "argv", l = "ref", Z = !0, ee = "isSet", E = "booleanEquals", f = "error", h = "endpoint", p = "tree", O = "PartitionResult", F = "stringEquals", te = {
    [ae]: !0,
    default: !1,
    type: "boolean"
  }, re = {
    [ae]: !1,
    type: "string"
  }, ne = {
    [l]: "Endpoint"
  }, M = {
    [o]: E,
    [s]: [ {
      [l]: "UseFIPS"
    }, !0 ]
  }, j = {
    [o]: E,
    [s]: [ {
      [l]: "UseDualStack"
    }, !0 ]
  }, n = {}, V = {
    [o]: "getAttr",
    [s]: [ {
      [l]: O
    }, "name" ]
  }, R = {
    [o]: E,
    [s]: [ {
      [l]: "UseFIPS"
    }, !1 ]
  }, I = {
    [o]: E,
    [s]: [ {
      [l]: "UseDualStack"
    }, !1 ]
  }, oe = {
    [o]: "getAttr",
    [s]: [ {
      [l]: O
    }, "supportsFIPS" ]
  }, se = {
    [o]: E,
    [s]: [ !0, {
      [o]: "getAttr",
      [s]: [ {
        [l]: O
      }, "supportsDualStack" ]
    } ]
  }, ie = [ {
    [l]: "Region"
  } ], St = {
    version: "1.0",
    parameters: {
      UseDualStack: te,
      UseFIPS: te,
      Endpoint: re,
      Region: re
    },
    rules: [ {
      conditions: [ {
        [o]: ee,
        [s]: [ ne ]
      } ],
      rules: [ {
        conditions: [ M ],
        error: "Invalid Configuration: FIPS and custom endpoint are not supported",
        type: f
      }, {
        rules: [ {
          conditions: [ j ],
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          type: f
        }, {
          endpoint: {
            url: ne,
            properties: n,
            headers: n
          },
          type: h
        } ],
        type: p
      } ],
      type: p
    }, {
      rules: [ {
        conditions: [ {
          [o]: ee,
          [s]: ie
        } ],
        rules: [ {
          conditions: [ {
            [o]: "aws.partition",
            [s]: ie,
            assign: O
          } ],
          rules: [ {
            conditions: [ {
              [o]: F,
              [s]: [ V, "aws" ]
            }, R, I ],
            endpoint: {
              url: "https://{Region}.signin.aws.amazon.com",
              properties: n,
              headers: n
            },
            type: h
          }, {
            conditions: [ {
              [o]: F,
              [s]: [ V, "aws-cn" ]
            }, R, I ],
            endpoint: {
              url: "https://{Region}.signin.amazonaws.cn",
              properties: n,
              headers: n
            },
            type: h
          }, {
            conditions: [ {
              [o]: F,
              [s]: [ V, "aws-us-gov" ]
            }, R, I ],
            endpoint: {
              url: "https://{Region}.signin.amazonaws-us-gov.com",
              properties: n,
              headers: n
            },
            type: h
          }, {
            conditions: [ M, j ],
            rules: [ {
              conditions: [ {
                [o]: E,
                [s]: [ Z, oe ]
              }, se ],
              rules: [ {
                endpoint: {
                  url: "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: n,
                  headers: n
                },
                type: h
              } ],
              type: p
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: f
            } ],
            type: p
          }, {
            conditions: [ M, I ],
            rules: [ {
              conditions: [ {
                [o]: E,
                [s]: [ oe, Z ]
              } ],
              rules: [ {
                endpoint: {
                  url: "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: n,
                  headers: n
                },
                type: h
              } ],
              type: p
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: f
            } ],
            type: p
          }, {
            conditions: [ R, j ],
            rules: [ {
              conditions: [ se ],
              rules: [ {
                endpoint: {
                  url: "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: n,
                  headers: n
                },
                type: h
              } ],
              type: p
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: f
            } ],
            type: p
          }, {
            endpoint: {
              url: "https://signin.{Region}.{PartitionResult#dnsSuffix}",
              properties: n,
              headers: n
            },
            type: h
          } ],
          type: p
        } ],
        type: p
      }, {
        error: "Invalid Configuration: Missing Region",
        type: f
      } ],
      type: p
    } ]
  };
  ue.ruleSet = St;
});

var _e = C(function(he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.defaultEndpointResolver = void 0;
  var pe = pZ(), v = i5(), le = de(), ft = new v.EndpointCache({
    size: 50,
    params: [ "Endpoint", "Region", "UseDualStack", "UseFIPS" ]
  }), vt = (e, t = {}) => ft.get(e, () => v.resolveEndpoint(le.ruleSet, {
    endpointParams: e,
    logger: t.logger
  }));
  he.defaultEndpointResolver = vt;
  v.customEndpointFunctions.aws = pe.awsEndpointFunctions;
});

var Re = C(function(ye) {
  Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  ye.getRuntimeConfig = void 0;
  var me = XT(), Ee = jse(), Se = rS(), fe = Nc(), ve = Iz(), x = lx(), T = _T(), Pe = U(), Ae = _e(), Pt = e => ({
    apiVersion: "2023-01-01",
    base64Decoder: e?.base64Decoder ?? x.fromBase64,
    base64Encoder: e?.base64Encoder ?? x.toBase64,
    disableHostPrefix: e?.disableHostPrefix ?? !1,
    endpointProvider: e?.endpointProvider ?? Ae.defaultEndpointResolver,
    extensions: e?.extensions ?? [],
    httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Pe.defaultSigninHttpAuthSchemeProvider,
    httpAuthSchemes: e?.httpAuthSchemes ?? [ {
      schemeId: "aws.auth#sigv4",
      identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
      signer: new me.AwsSdkSigV4Signer
    }, {
      schemeId: "smithy.api#noAuth",
      identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
      signer: new Se.NoAuthSigner
    } ],
    logger: e?.logger ?? new fe.NoOpLogger,
    protocol: e?.protocol ?? new Ee.AwsRestJsonProtocol({
      defaultNamespace: "com.amazonaws.signin"
    }),
    serviceId: e?.serviceId ?? "Signin",
    urlParser: e?.urlParser ?? ve.parseUrl,
    utf8Decoder: e?.utf8Decoder ?? T.fromUtf8,
    utf8Encoder: e?.utf8Encoder ?? T.toUtf8
  });
  ye.getRuntimeConfig = Pt;
});

var He = C(function(Ne) {
  Object.defineProperty(Ne, "__esModule", {
    value: !0
  });
  Ne.getRuntimeConfig = void 0;
  var Ie = EUe(), At = Ie.__importDefault(ztn()), D = XT(), q = Fse(), g = cT(), Oe = Use(), k = YF(), u = OP(), w = nD(), xe = Bse(), Te = mZ(), De = Re(), qe = Nc(), ke = Wse(), we = Nc(), yt = e => {
    we.emitWarningIfUnsupportedVersion(process.version);
    let t = ke.resolveDefaultsModeConfig(e), r = () => t().then(qe.loadConfigsForDefaultMode), d = De.getRuntimeConfig(e);
    D.emitWarningIfUnsupportedVersion(process.version);
    let i = {
      profile: e?.profile,
      logger: d.logger
    };
    return {
      ...d,
      ...e,
      runtime: "node",
      defaultsMode: t,
      authSchemePreference: e?.authSchemePreference ?? u.loadConfig(D.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i),
      bodyLengthChecker: e?.bodyLengthChecker ?? xe.calculateBodyLength,
      defaultUserAgentProvider: e?.defaultUserAgentProvider ?? q.createDefaultUserAgentProvider({
        serviceId: d.serviceId,
        clientVersion: At.default.version
      }),
      maxAttempts: e?.maxAttempts ?? u.loadConfig(k.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region: e?.region ?? u.loadConfig(g.NODE_REGION_CONFIG_OPTIONS, {
        ...g.NODE_REGION_CONFIG_FILE_OPTIONS,
        ...i
      }),
      requestHandler: w.NodeHttpHandler.create(e?.requestHandler ?? r),
      retryMode: e?.retryMode ?? u.loadConfig({
        ...k.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await r()).retryMode || Te.DEFAULT_RETRY_MODE
      }, e),
      sha256: e?.sha256 ?? Oe.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? w.streamCollector,
      useDualstackEndpoint: e?.useDualstackEndpoint ?? u.loadConfig(g.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i),
      useFipsEndpoint: e?.useFipsEndpoint ?? u.loadConfig(g.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i),
      userAgentAppId: e?.userAgentAppId ?? u.loadConfig(q.NODE_APP_ID_CONFIG_OPTIONS, i)
    };
  };
  Ne.getRuntimeConfig = yt;
});

var Sr = C(function(Q) {
  var Ue = Dse(), Ct = Lse(), Rt = Nse(), Fe = fZ(), It = cT(), L = rS(), P = MP(), Ot = $se(), et = $1(), Me = YF(), _ = Nc(), je = U(), xt = He(), Ve = gZ(), Le = og(), Tt = e => Object.assign(e, {
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    defaultSigningName: "signin"
  }), Dt = {
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
  }, qt = e => {
    let {httpAuthSchemes: t, httpAuthSchemeProvider: r, credentials: d} = e;
    return {
      setHttpAuthScheme(i) {
        let y = t.findIndex(H => H.schemeId === i.schemeId);
        if (y === -1) t.push(i); else t.splice(y, 1, i);
      },
      httpAuthSchemes() {
        return t;
      },
      setHttpAuthSchemeProvider(i) {
        r = i;
      },
      httpAuthSchemeProvider() {
        return r;
      },
      setCredentials(i) {
        d = i;
      },
      credentials() {
        return d;
      }
    };
  }, kt = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  }), wt = (e, t) => {
    let r = Object.assign(Ve.getAwsRegionExtensionConfiguration(e), _.getDefaultExtensionConfiguration(e), Le.getHttpHandlerExtensionConfiguration(e), qt(e));
    return t.forEach(d => d.configure(r)), Object.assign(e, Ve.resolveAwsRegionExtensionConfiguration(r), _.resolveDefaultRuntimeConfig(r), Le.resolveHttpHandlerRuntimeConfig(r), kt(r));
  };
  class G extends _.Client {
    config;
    constructor(...[e]) {
      let t = xt.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let r = Tt(t), d = Fe.resolveUserAgentConfig(r), i = Me.resolveRetryConfig(d), y = It.resolveRegionConfig(i), H = Ue.resolveHostHeaderConfig(y), at = et.resolveEndpointConfig(H), ut = je.resolveHttpAuthSchemeConfig(at), ct = wt(ut, e?.extensions || []);
      this.config = ct, this.middlewareStack.use(P.getSchemaSerdePlugin(this.config)), 
      this.middlewareStack.use(Fe.getUserAgentPlugin(this.config)), this.middlewareStack.use(Me.getRetryPlugin(this.config)), 
      this.middlewareStack.use(Ot.getContentLengthPlugin(this.config)), this.middlewareStack.use(Ue.getHostHeaderPlugin(this.config)), 
      this.middlewareStack.use(Ct.getLoggerPlugin(this.config)), this.middlewareStack.use(Rt.getRecursionDetectionPlugin(this.config)), 
      this.middlewareStack.use(L.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: je.defaultSigninHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async dt => new L.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": dt.credentials
        })
      })), this.middlewareStack.use(L.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var A = class e extends _.ServiceException {
    constructor(t) {
      super(t);
      Object.setPrototypeOf(this, e.prototype);
    }
  }, tt = class e extends A {
    name="AccessDeniedException";
    $fault="client";
    error;
    constructor(t) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, rt = class e extends A {
    name="InternalServerException";
    $fault="server";
    error;
    constructor(t) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, nt = class e extends A {
    name="TooManyRequestsError";
    $fault="client";
    error;
    constructor(t) {
      super({
        name: "TooManyRequestsError",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, ot = class e extends A {
    name="ValidationException";
    $fault="client";
    error;
    constructor(t) {
      super({
        name: "ValidationException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error;
    }
  }, Nt = "AccessDeniedException", bt = "AccessToken", Ht = "CreateOAuth2Token", Ut = "CreateOAuth2TokenRequest", Ft = "CreateOAuth2TokenRequestBody", Mt = "CreateOAuth2TokenResponseBody", jt = "CreateOAuth2TokenResponse", Vt = "InternalServerException", Lt = "RefreshToken", $t = "TooManyRequestsError", Gt = "ValidationException", $e = "accessKeyId", Ge = "accessToken", B = "client", Be = "clientId", ze = "codeVerifier", Bt = "code", m = "error", Ke = "expiresIn", Xe = "grantType", zt = "http", z = "httpError", Qe = "idToken", c = "jsonName", b = "message", N = "refreshToken", We = "redirectUri", Kt = "server", Ye = "secretAccessKey", Je = "sessionToken", st = "smithy.ts.sdk.synthetic.com.amazonaws.signin", Xt = "tokenInput", Qt = "tokenOutput", Ze = "tokenType", a = "com.amazonaws.signin", it = [ 0, a, Lt, 8, 0 ], Wt = [ -3, a, Nt, {
    [m]: B
  }, [ m, b ], [ 0, 0 ] ];
  P.TypeRegistry.for(a).registerError(Wt, tt);
  var Yt = [ 3, a, bt, 8, [ $e, Ye, Je ], [ [ 0, {
    [c]: $e
  } ], [ 0, {
    [c]: Ye
  } ], [ 0, {
    [c]: Je
  } ] ] ], Jt = [ 3, a, Ut, 0, [ Xt ], [ [ () => Zt, 16 ] ] ], Zt = [ 3, a, Ft, 0, [ Be, Xe, Bt, We, ze, N ], [ [ 0, {
    [c]: Be
  } ], [ 0, {
    [c]: Xe
  } ], 0, [ 0, {
    [c]: We
  } ], [ 0, {
    [c]: ze
  } ], [ () => it, {
    [c]: N
  } ] ] ], er = [ 3, a, jt, 0, [ Qt ], [ [ () => tr, 16 ] ] ], tr = [ 3, a, Mt, 0, [ Ge, Ze, Ke, N, Qe ], [ [ () => Yt, {
    [c]: Ge
  } ], [ 0, {
    [c]: Ze
  } ], [ 1, {
    [c]: Ke
  } ], [ () => it, {
    [c]: N
  } ], [ 0, {
    [c]: Qe
  } ] ] ], rr = [ -3, a, Vt, {
    [m]: Kt,
    [z]: 500
  }, [ m, b ], [ 0, 0 ] ];
  P.TypeRegistry.for(a).registerError(rr, rt);
  var nr = [ -3, a, $t, {
    [m]: B,
    [z]: 429
  }, [ m, b ], [ 0, 0 ] ];
  P.TypeRegistry.for(a).registerError(nr, nt);
  var or = [ -3, a, Gt, {
    [m]: B,
    [z]: 400
  }, [ m, b ], [ 0, 0 ] ];
  P.TypeRegistry.for(a).registerError(or, ot);
  var sr = [ -3, st, "SigninServiceException", 0, [], [] ];
  P.TypeRegistry.for(st).registerError(sr, A);
  var ir = [ 9, a, Ht, {
    [zt]: [ "POST", "/v1/token", 200 ]
  }, () => Jt, () => er ];
  class K extends(_.Command.classBuilder().ep(Dt).m(function(e, t, r, d) {
    return [ et.getEndpointPlugin(r, e.getEndpointParameterInstructions()) ];
  }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(ir).build()){}
  var ar = {
    CreateOAuth2TokenCommand: K
  };
  class X extends G {}
  _.createAggregatedClient(ar, X);
  var ur = {
    AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
    INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
    INVALID_REQUEST: "INVALID_REQUEST",
    SERVER_ERROR: "server_error",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
  };
  Object.defineProperty(Q, "$Command", {
    enumerable: !0,
    get: function() {
      return _.Command;
    }
  });
  Object.defineProperty(Q, "__Client", {
    enumerable: !0,
    get: function() {
      return _.Client;
    }
  });
  Q.AccessDeniedException = tt;
  Q.CreateOAuth2TokenCommand = K;
  Q.InternalServerException = rt;
  Q.OAuth2ErrorCode = ur;
  Q.Signin = X;
  Q.SigninClient = G;
  Q.SigninServiceException = A;
  Q.TooManyRequestsError = nt;
  Q.ValidationException = ot;
});

export default Sr();
