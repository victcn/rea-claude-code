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

var b = C(function(K) {
  Object.defineProperty(K, "__esModule", {
    value: !0
  });
  K.resolveHttpAuthSchemeConfig = K.defaultSSOOIDCHttpAuthSchemeProvider = K.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
  var z = XT(), f = DP(), ct = async (e, t, n) => ({
    operation: f.getSmithyContext(t).operation,
    region: await f.normalizeProvider(e.region)() || (() => {
      throw Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  });
  K.defaultSSOOIDCHttpAuthSchemeParametersProvider = ct;
  function at(e) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "sso-oauth",
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
  function pt(e) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var dt = e => {
    let t = [];
    switch (e.operation) {
     case "CreateToken":
      {
        t.push(pt(e));
        break;
      }

     default:
      t.push(at(e));
    }
    return t;
  };
  K.defaultSSOOIDCHttpAuthSchemeProvider = dt;
  var ut = e => {
    let t = z.resolveAwsSdkSigV4Config(e);
    return Object.assign(t, {
      authSchemePreference: f.normalizeProvider(e.authSchemePreference ?? [])
    });
  };
  K.resolveHttpAuthSchemeConfig = ut;
});

var ae = C(function(se) {
  Object.defineProperty(se, "__esModule", {
    value: !0
  });
  se.ruleSet = void 0;
  var re = "required", d = "fn", u = "argv", I = "ref", V = !0, B = "isSet", P = "booleanEquals", x = "error", m = "endpoint", g = "tree", U = "PartitionResult", N = "getAttr", Y = {
    [re]: !1,
    type: "string"
  }, W = {
    [re]: !0,
    default: !1,
    type: "boolean"
  }, J = {
    [I]: "Endpoint"
  }, oe = {
    [d]: P,
    [u]: [ {
      [I]: "UseFIPS"
    }, !0 ]
  }, ne = {
    [d]: P,
    [u]: [ {
      [I]: "UseDualStack"
    }, !0 ]
  }, p = {}, X = {
    [d]: N,
    [u]: [ {
      [I]: U
    }, "supportsFIPS" ]
  }, ie = {
    [I]: U
  }, Q = {
    [d]: P,
    [u]: [ !0, {
      [d]: N,
      [u]: [ ie, "supportsDualStack" ]
    } ]
  }, Z = [ oe ], ee = [ ne ], te = [ {
    [I]: "Region"
  } ], _t = {
    version: "1.0",
    parameters: {
      Region: Y,
      UseDualStack: W,
      UseFIPS: W,
      Endpoint: Y
    },
    rules: [ {
      conditions: [ {
        [d]: B,
        [u]: [ J ]
      } ],
      rules: [ {
        conditions: Z,
        error: "Invalid Configuration: FIPS and custom endpoint are not supported",
        type: x
      }, {
        conditions: ee,
        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
        type: x
      }, {
        endpoint: {
          url: J,
          properties: p,
          headers: p
        },
        type: m
      } ],
      type: g
    }, {
      conditions: [ {
        [d]: B,
        [u]: te
      } ],
      rules: [ {
        conditions: [ {
          [d]: "aws.partition",
          [u]: te,
          assign: U
        } ],
        rules: [ {
          conditions: [ oe, ne ],
          rules: [ {
            conditions: [ {
              [d]: P,
              [u]: [ V, X ]
            }, Q ],
            rules: [ {
              endpoint: {
                url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: p,
                headers: p
              },
              type: m
            } ],
            type: g
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: x
          } ],
          type: g
        }, {
          conditions: Z,
          rules: [ {
            conditions: [ {
              [d]: P,
              [u]: [ X, V ]
            } ],
            rules: [ {
              conditions: [ {
                [d]: "stringEquals",
                [u]: [ {
                  [d]: N,
                  [u]: [ ie, "name" ]
                }, "aws-us-gov" ]
              } ],
              endpoint: {
                url: "https://oidc.{Region}.amazonaws.com",
                properties: p,
                headers: p
              },
              type: m
            }, {
              endpoint: {
                url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                properties: p,
                headers: p
              },
              type: m
            } ],
            type: g
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: x
          } ],
          type: g
        }, {
          conditions: ee,
          rules: [ {
            conditions: [ Q ],
            rules: [ {
              endpoint: {
                url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                properties: p,
                headers: p
              },
              type: m
            } ],
            type: g
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: x
          } ],
          type: g
        }, {
          endpoint: {
            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
            properties: p,
            headers: p
          },
          type: m
        } ],
        type: g
      } ],
      type: g
    }, {
      error: "Invalid Configuration: Missing Region",
      type: x
    } ]
  };
  se.ruleSet = _t;
});

var he = C(function(ue) {
  Object.defineProperty(ue, "__esModule", {
    value: !0
  });
  ue.defaultEndpointResolver = void 0;
  var pe = pZ(), y = i5(), de = ae(), Et = new y.EndpointCache({
    size: 50,
    params: [ "Endpoint", "Region", "UseDualStack", "UseFIPS" ]
  }), gt = (e, t = {}) => Et.get(e, () => y.resolveEndpoint(de.ruleSet, {
    endpointParams: e,
    logger: t.logger
  }));
  ue.defaultEndpointResolver = gt;
  y.customEndpointFunctions.aws = pe.awsEndpointFunctions;
});

var ye = C(function(me) {
  Object.defineProperty(me, "__esModule", {
    value: !0
  });
  me.getRuntimeConfig = void 0;
  var _e = XT(), Ee = jse(), ge = rS(), Se = Nc(), ve = Iz(), A = lx(), D = _T(), fe = b(), xe = he(), St = e => ({
    apiVersion: "2019-06-10",
    base64Decoder: e?.base64Decoder ?? A.fromBase64,
    base64Encoder: e?.base64Encoder ?? A.toBase64,
    disableHostPrefix: e?.disableHostPrefix ?? !1,
    endpointProvider: e?.endpointProvider ?? xe.defaultEndpointResolver,
    extensions: e?.extensions ?? [],
    httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? fe.defaultSSOOIDCHttpAuthSchemeProvider,
    httpAuthSchemes: e?.httpAuthSchemes ?? [ {
      schemeId: "aws.auth#sigv4",
      identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
      signer: new _e.AwsSdkSigV4Signer
    }, {
      schemeId: "smithy.api#noAuth",
      identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
      signer: new ge.NoAuthSigner
    } ],
    logger: e?.logger ?? new Se.NoOpLogger,
    protocol: e?.protocol ?? new Ee.AwsRestJsonProtocol({
      defaultNamespace: "com.amazonaws.ssooidc"
    }),
    serviceId: e?.serviceId ?? "SSO OIDC",
    urlParser: e?.urlParser ?? ve.parseUrl,
    utf8Decoder: e?.utf8Decoder ?? D.fromUtf8,
    utf8Encoder: e?.utf8Encoder ?? D.toUtf8
  });
  me.getRuntimeConfig = St;
});

var be = C(function(qe) {
  Object.defineProperty(qe, "__esModule", {
    value: !0
  });
  qe.getRuntimeConfig = void 0;
  var Ce = EUe(), vt = Ce.__importDefault(ztn()), R = XT(), T = Fse(), S = cT(), Pe = Use(), w = YF(), s = OP(), q = nD(), Oe = Bse(), Ae = mZ(), De = ye(), Re = Nc(), Te = Wse(), we = Nc(), ft = e => {
    we.emitWarningIfUnsupportedVersion(process.version);
    let t = Te.resolveDefaultsModeConfig(e), n = () => t().then(Re.loadConfigsForDefaultMode), l = De.getRuntimeConfig(e);
    R.emitWarningIfUnsupportedVersion(process.version);
    let i = {
      profile: e?.profile,
      logger: l.logger
    };
    return {
      ...l,
      ...e,
      runtime: "node",
      defaultsMode: t,
      authSchemePreference: e?.authSchemePreference ?? s.loadConfig(R.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i),
      bodyLengthChecker: e?.bodyLengthChecker ?? Oe.calculateBodyLength,
      defaultUserAgentProvider: e?.defaultUserAgentProvider ?? T.createDefaultUserAgentProvider({
        serviceId: l.serviceId,
        clientVersion: vt.default.version
      }),
      maxAttempts: e?.maxAttempts ?? s.loadConfig(w.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region: e?.region ?? s.loadConfig(S.NODE_REGION_CONFIG_OPTIONS, {
        ...S.NODE_REGION_CONFIG_FILE_OPTIONS,
        ...i
      }),
      requestHandler: q.NodeHttpHandler.create(e?.requestHandler ?? n),
      retryMode: e?.retryMode ?? s.loadConfig({
        ...w.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await n()).retryMode || Ae.DEFAULT_RETRY_MODE
      }, e),
      sha256: e?.sha256 ?? Pe.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? q.streamCollector,
      useDualstackEndpoint: e?.useDualstackEndpoint ?? s.loadConfig(S.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i),
      useFipsEndpoint: e?.useFipsEndpoint ?? s.loadConfig(S.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i),
      userAgentAppId: e?.userAgentAppId ?? s.loadConfig(T.NODE_APP_ID_CONFIG_OPTIONS, i)
    };
  };
  qe.getRuntimeConfig = ft;
});

var Yr = C(function(j) {
  var Ue = Dse(), xt = Lse(), mt = Nse(), Ne = fZ(), It = cT(), H = rS(), c = MP(), yt = $se(), Ge = $1(), He = YF(), v = Nc(), $e = b(), Ct = be(), Fe = gZ(), Me = og(), Pt = e => Object.assign(e, {
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    defaultSigningName: "sso-oauth"
  }), Ot = {
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
  }, At = e => {
    let {httpAuthSchemes: t, httpAuthSchemeProvider: n, credentials: l} = e;
    return {
      setHttpAuthScheme(i) {
        let O = t.findIndex(k => k.schemeId === i.schemeId);
        if (O === -1) t.push(i); else t.splice(O, 1, i);
      },
      httpAuthSchemes() {
        return t;
      },
      setHttpAuthSchemeProvider(i) {
        n = i;
      },
      httpAuthSchemeProvider() {
        return n;
      },
      setCredentials(i) {
        l = i;
      },
      credentials() {
        return l;
      }
    };
  }, Dt = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  }), Rt = (e, t) => {
    let n = Object.assign(Fe.getAwsRegionExtensionConfiguration(e), v.getDefaultExtensionConfiguration(e), Me.getHttpHandlerExtensionConfiguration(e), At(e));
    return t.forEach(l => l.configure(n)), Object.assign(e, Fe.resolveAwsRegionExtensionConfiguration(n), v.resolveDefaultRuntimeConfig(n), Me.resolveHttpHandlerRuntimeConfig(n), Dt(n));
  };
  class F extends v.Client {
    config;
    constructor(...[e]) {
      let t = Ct.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let n = Pt(t), l = Ne.resolveUserAgentConfig(n), i = He.resolveRetryConfig(l), O = It.resolveRegionConfig(i), k = Ue.resolveHostHeaderConfig(O), ot = Ge.resolveEndpointConfig(k), nt = $e.resolveHttpAuthSchemeConfig(ot), it = Rt(nt, e?.extensions || []);
      this.config = it, this.middlewareStack.use(c.getSchemaSerdePlugin(this.config)), 
      this.middlewareStack.use(Ne.getUserAgentPlugin(this.config)), this.middlewareStack.use(He.getRetryPlugin(this.config)), 
      this.middlewareStack.use(yt.getContentLengthPlugin(this.config)), this.middlewareStack.use(Ue.getHostHeaderPlugin(this.config)), 
      this.middlewareStack.use(xt.getLoggerPlugin(this.config)), this.middlewareStack.use(mt.getRecursionDetectionPlugin(this.config)), 
      this.middlewareStack.use(H.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: $e.defaultSSOOIDCHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async st => new H.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": st.credentials
        })
      })), this.middlewareStack.use(H.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var a = class e extends v.ServiceException {
    constructor(t) {
      super(t);
      Object.setPrototypeOf(this, e.prototype);
    }
  }, je = class e extends a {
    name="AccessDeniedException";
    $fault="client";
    error;
    reason;
    error_description;
    constructor(t) {
      super({
        name: "AccessDeniedException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.reason = t.reason, 
      this.error_description = t.error_description;
    }
  }, ze = class e extends a {
    name="AuthorizationPendingException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "AuthorizationPendingException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Ke = class e extends a {
    name="ExpiredTokenException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "ExpiredTokenException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Le = class e extends a {
    name="InternalServerException";
    $fault="server";
    error;
    error_description;
    constructor(t) {
      super({
        name: "InternalServerException",
        $fault: "server",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Ve = class e extends a {
    name="InvalidClientException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "InvalidClientException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Be = class e extends a {
    name="InvalidGrantException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "InvalidGrantException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Ye = class e extends a {
    name="InvalidRequestException";
    $fault="client";
    error;
    reason;
    error_description;
    constructor(t) {
      super({
        name: "InvalidRequestException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.reason = t.reason, 
      this.error_description = t.error_description;
    }
  }, We = class e extends a {
    name="InvalidScopeException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "InvalidScopeException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Je = class e extends a {
    name="SlowDownException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "SlowDownException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Xe = class e extends a {
    name="UnauthorizedClientException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "UnauthorizedClientException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Qe = class e extends a {
    name="UnsupportedGrantTypeException";
    $fault="client";
    error;
    error_description;
    constructor(t) {
      super({
        name: "UnsupportedGrantTypeException",
        $fault: "client",
        ...t
      });
      Object.setPrototypeOf(this, e.prototype), this.error = t.error, this.error_description = t.error_description;
    }
  }, Tt = "AccessDeniedException", wt = "AuthorizationPendingException", qt = "AccessToken", kt = "ClientSecret", bt = "CreateToken", Ut = "CreateTokenRequest", Nt = "CreateTokenResponse", Ht = "CodeVerifier", $t = "ExpiredTokenException", Ft = "InvalidClientException", Mt = "InvalidGrantException", Gt = "InvalidRequestException", jt = "InternalServerException", zt = "InvalidScopeException", Kt = "IdToken", Lt = "RefreshToken", Vt = "SlowDownException", Bt = "UnauthorizedClientException", Yt = "UnsupportedGrantTypeException", Wt = "accessToken", E = "client", Jt = "clientId", Xt = "clientSecret", Qt = "codeVerifier", Zt = "code", er = "deviceCode", o = "error", tr = "expiresIn", h = "error_description", rr = "grantType", or = "http", _ = "httpError", nr = "idToken", Ze = "reason", et = "refreshToken", ir = "redirectUri", sr = "scope", cr = "server", tt = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc", ar = "tokenType", r = "com.amazonaws.ssooidc", pr = [ 0, r, qt, 8, 0 ], dr = [ 0, r, kt, 8, 0 ], ur = [ 0, r, Ht, 8, 0 ], lr = [ 0, r, Kt, 8, 0 ], rt = [ 0, r, Lt, 8, 0 ], hr = [ -3, r, Tt, {
    [o]: E,
    [_]: 400
  }, [ o, Ze, h ], [ 0, 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(hr, je);
  var _r = [ -3, r, wt, {
    [o]: E,
    [_]: 400
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(_r, ze);
  var Er = [ 3, r, Ut, 0, [ Jt, Xt, rr, er, Zt, et, sr, ir, Qt ], [ 0, [ () => dr, 0 ], 0, 0, 0, [ () => rt, 0 ], 64, 0, [ () => ur, 0 ] ] ], gr = [ 3, r, Nt, 0, [ Wt, ar, tr, et, nr ], [ [ () => pr, 0 ], 0, 1, [ () => rt, 0 ], [ () => lr, 0 ] ] ], Sr = [ -3, r, $t, {
    [o]: E,
    [_]: 400
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(Sr, Ke);
  var vr = [ -3, r, jt, {
    [o]: cr,
    [_]: 500
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(vr, Le);
  var fr = [ -3, r, Ft, {
    [o]: E,
    [_]: 401
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(fr, Ve);
  var xr = [ -3, r, Mt, {
    [o]: E,
    [_]: 400
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(xr, Be);
  var mr = [ -3, r, Gt, {
    [o]: E,
    [_]: 400
  }, [ o, Ze, h ], [ 0, 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(mr, Ye);
  var Ir = [ -3, r, zt, {
    [o]: E,
    [_]: 400
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(Ir, We);
  var yr = [ -3, r, Vt, {
    [o]: E,
    [_]: 400
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(yr, Je);
  var Cr = [ -3, r, Bt, {
    [o]: E,
    [_]: 400
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(Cr, Xe);
  var Pr = [ -3, r, Yt, {
    [o]: E,
    [_]: 400
  }, [ o, h ], [ 0, 0 ] ];
  c.TypeRegistry.for(r).registerError(Pr, Qe);
  var Or = [ -3, tt, "SSOOIDCServiceException", 0, [], [] ];
  c.TypeRegistry.for(tt).registerError(Or, a);
  var Ar = [ 9, r, bt, {
    [or]: [ "POST", "/token", 200 ]
  }, () => Er, () => gr ];
  class M extends(v.Command.classBuilder().ep(Ot).m(function(e, t, n, l) {
    return [ Ge.getEndpointPlugin(n, e.getEndpointParameterInstructions()) ];
  }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").sc(Ar).build()){}
  var Dr = {
    CreateTokenCommand: M
  };
  class G extends F {}
  v.createAggregatedClient(Dr, G);
  var Rr = {
    KMS_ACCESS_DENIED: "KMS_AccessDeniedException"
  }, Tr = {
    KMS_DISABLED_KEY: "KMS_DisabledException",
    KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
    KMS_INVALID_STATE: "KMS_InvalidStateException",
    KMS_KEY_NOT_FOUND: "KMS_NotFoundException"
  };
  Object.defineProperty(j, "$Command", {
    enumerable: !0,
    get: function() {
      return v.Command;
    }
  });
  Object.defineProperty(j, "__Client", {
    enumerable: !0,
    get: function() {
      return v.Client;
    }
  });
  j.AccessDeniedException = je;
  j.AccessDeniedExceptionReason = Rr;
  j.AuthorizationPendingException = ze;
  j.CreateTokenCommand = M;
  j.ExpiredTokenException = Ke;
  j.InternalServerException = Le;
  j.InvalidClientException = Ve;
  j.InvalidGrantException = Be;
  j.InvalidRequestException = Ye;
  j.InvalidRequestExceptionReason = Tr;
  j.InvalidScopeException = We;
  j.SSOOIDC = G;
  j.SSOOIDCClient = F;
  j.SSOOIDCServiceException = a;
  j.SlowDownException = Je;
  j.UnauthorizedClientException = Xe;
  j.UnsupportedGrantTypeException = Qe;
});

export default Yr();
