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

import { Dse, Lse, Nse, pZ, XT, fZ, $se, $1, mZ, YF, Fse, Use, Bse, jse, Wse, gZ } from "./chunk-c47gf6gq.js";

import { Iz } from "./chunk-851qddh7.js";

import { Nc } from "./chunk-fzyt9ct7.js";

import { MP } from "./chunk-nj8cgz8s.js";

import { DP } from "./chunk-w8hcbtxg.js";

import { og, nD } from "./chunk-w4hwgefc.js";

import { _T, lx } from "./chunk-shz68fkm.js";

import { we } from "./chunk-m8ez8fhk.js";

var A = we(Dse()), fe = we(Lse()), ge = we(Nse()), w = we(fZ()), Re = we(cT()), d = we(rS()), ye = we(MP()), Se = we($se()), ve = we($1()), P = we(YF()), xe = we(Nc());

var k = we(XT()), l = we(DP()), L = async (e, t, o) => ({
  operation: l.getSmithyContext(t).operation,
  region: await l.normalizeProvider(e.region)() || (() => {
    throw Error("expected `region` to be configured for `aws.auth#sigv4`");
  })()
});

function ke(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "awsssoportal",
      region: e.region
    },
    propertiesExtractor: (t, o) => ({
      signingProperties: {
        config: t,
        context: o
      }
    })
  };
}

function h(e) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}

var N = e => {
  let t = [];
  switch (e.operation) {
   case "GetRoleCredentials":
    {
      t.push(h(e));
      break;
    }

   case "ListAccountRoles":
    {
      t.push(h(e));
      break;
    }

   case "ListAccounts":
    {
      t.push(h(e));
      break;
    }

   case "Logout":
    {
      t.push(h(e));
      break;
    }

   default:
    t.push(ke(e));
  }
  return t;
}, D = e => {
  let t = k.resolveAwsSdkSigV4Config(e);
  return Object.assign(t, {
    authSchemePreference: l.normalizeProvider(e.authSchemePreference ?? [])
  });
};

var H = e => Object.assign(e, {
  useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
  useFipsEndpoint: e.useFipsEndpoint ?? !1,
  defaultSigningName: "awsssoportal"
}), F = {
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

var U = {
  name: "@aws-sdk/client-sso",
  description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
  version: "3.936.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-sso",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: !1,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.936.0",
    "@aws-sdk/middleware-host-header": "3.936.0",
    "@aws-sdk/middleware-logger": "3.936.0",
    "@aws-sdk/middleware-recursion-detection": "3.936.0",
    "@aws-sdk/middleware-user-agent": "3.936.0",
    "@aws-sdk/region-config-resolver": "3.936.0",
    "@aws-sdk/types": "3.936.0",
    "@aws-sdk/util-endpoints": "3.936.0",
    "@aws-sdk/util-user-agent-browser": "3.936.0",
    "@aws-sdk/util-user-agent-node": "3.936.0",
    "@smithy/config-resolver": "^4.4.3",
    "@smithy/core": "^3.18.5",
    "@smithy/fetch-http-handler": "^5.3.6",
    "@smithy/hash-node": "^4.2.5",
    "@smithy/invalid-dependency": "^4.2.5",
    "@smithy/middleware-content-length": "^4.2.5",
    "@smithy/middleware-endpoint": "^4.3.12",
    "@smithy/middleware-retry": "^4.4.12",
    "@smithy/middleware-serde": "^4.2.6",
    "@smithy/middleware-stack": "^4.2.5",
    "@smithy/node-config-provider": "^4.3.5",
    "@smithy/node-http-handler": "^4.4.5",
    "@smithy/protocol-http": "^5.3.5",
    "@smithy/smithy-client": "^4.9.8",
    "@smithy/types": "^4.9.0",
    "@smithy/url-parser": "^4.2.5",
    "@smithy/util-base64": "^4.3.0",
    "@smithy/util-body-length-browser": "^4.2.0",
    "@smithy/util-body-length-node": "^4.2.1",
    "@smithy/util-defaults-mode-browser": "^4.3.11",
    "@smithy/util-defaults-mode-node": "^4.2.14",
    "@smithy/util-endpoints": "^3.2.5",
    "@smithy/util-middleware": "^4.2.5",
    "@smithy/util-retry": "^4.2.5",
    "@smithy/util-utf8": "^4.2.0",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [ "dist-types/ts3.4/*" ]
    }
  },
  files: [ "dist-*/**" ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sso"
  }
};

var g = we(XT()), R = we(Fse()), c = we(cT()), ie = we(Use()), y = we(YF()), a = we(OP()), S = we(nD()), ae = we(Bse()), ce = we(mZ());

var ee = we(XT()), te = we(jse()), oe = we(rS()), se = we(Nc()), re = we(Iz()), _ = we(lx()), f = we(_T());

var X = we(pZ()), p = we(i5());

var G = {
  ["required"]: !1,
  type: "string"
}, q = {
  ["required"]: !0,
  default: !1,
  type: "boolean"
}, j = {
  ["ref"]: "Endpoint"
}, B = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ {
    ["ref"]: "UseFIPS"
  }, !0 ]
}, W = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ {
    ["ref"]: "UseDualStack"
  }, !0 ]
}, r = {}, M = {
  ["fn"]: "getAttr",
  ["argv"]: [ {
    ["ref"]: "PartitionResult"
  }, "supportsFIPS" ]
}, J = {
  ["ref"]: "PartitionResult"
}, z = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ !0, {
    ["fn"]: "getAttr",
    ["argv"]: [ J, "supportsDualStack" ]
  } ]
}, K = [ B ], Q = [ W ], V = [ {
  ["ref"]: "Region"
} ], Ne = {
  version: "1.0",
  parameters: {
    Region: G,
    UseDualStack: q,
    UseFIPS: q,
    Endpoint: G
  },
  rules: [ {
    conditions: [ {
      ["fn"]: "isSet",
      ["argv"]: [ j ]
    } ],
    rules: [ {
      conditions: K,
      error: "Invalid Configuration: FIPS and custom endpoint are not supported",
      type: "error"
    }, {
      conditions: Q,
      error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
      type: "error"
    }, {
      endpoint: {
        url: j,
        properties: r,
        headers: r
      },
      type: "endpoint"
    } ],
    type: "tree"
  }, {
    conditions: [ {
      ["fn"]: "isSet",
      ["argv"]: V
    } ],
    rules: [ {
      conditions: [ {
        ["fn"]: "aws.partition",
        ["argv"]: V,
        assign: "PartitionResult"
      } ],
      rules: [ {
        conditions: [ B, W ],
        rules: [ {
          conditions: [ {
            ["fn"]: "booleanEquals",
            ["argv"]: [ !0, M ]
          }, z ],
          rules: [ {
            endpoint: {
              url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
              properties: r,
              headers: r
            },
            type: "endpoint"
          } ],
          type: "tree"
        }, {
          error: "FIPS and DualStack are enabled, but this partition does not support one or both",
          type: "error"
        } ],
        type: "tree"
      }, {
        conditions: K,
        rules: [ {
          conditions: [ {
            ["fn"]: "booleanEquals",
            ["argv"]: [ M, !0 ]
          } ],
          rules: [ {
            conditions: [ {
              ["fn"]: "stringEquals",
              ["argv"]: [ {
                ["fn"]: "getAttr",
                ["argv"]: [ J, "name" ]
              }, "aws-us-gov" ]
            } ],
            endpoint: {
              url: "https://portal.sso.{Region}.amazonaws.com",
              properties: r,
              headers: r
            },
            type: "endpoint"
          }, {
            endpoint: {
              url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
              properties: r,
              headers: r
            },
            type: "endpoint"
          } ],
          type: "tree"
        }, {
          error: "FIPS is enabled but this partition does not support FIPS",
          type: "error"
        } ],
        type: "tree"
      }, {
        conditions: Q,
        rules: [ {
          conditions: [ z ],
          rules: [ {
            endpoint: {
              url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
              properties: r,
              headers: r
            },
            type: "endpoint"
          } ],
          type: "tree"
        }, {
          error: "DualStack is enabled but this partition does not support DualStack",
          type: "error"
        } ],
        type: "tree"
      }, {
        endpoint: {
          url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
          properties: r,
          headers: r
        },
        type: "endpoint"
      } ],
      type: "tree"
    } ],
    type: "tree"
  }, {
    error: "Invalid Configuration: Missing Region",
    type: "error"
  } ]
}, Y = Ne;

var De = new p.EndpointCache({
  size: 50,
  params: [ "Endpoint", "Region", "UseDualStack", "UseFIPS" ]
}), Z = (e, t = {}) => De.get(e, () => p.resolveEndpoint(Y, {
  endpointParams: e,
  logger: t.logger
}));

p.customEndpointFunctions.aws = X.awsEndpointFunctions;

var ne = e => ({
  apiVersion: "2019-06-10",
  base64Decoder: e?.base64Decoder ?? _.fromBase64,
  base64Encoder: e?.base64Encoder ?? _.toBase64,
  disableHostPrefix: e?.disableHostPrefix ?? !1,
  endpointProvider: e?.endpointProvider ?? Z,
  extensions: e?.extensions ?? [],
  httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? N,
  httpAuthSchemes: e?.httpAuthSchemes ?? [ {
    schemeId: "aws.auth#sigv4",
    identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
    signer: new ee.AwsSdkSigV4Signer
  }, {
    schemeId: "smithy.api#noAuth",
    identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
    signer: new oe.NoAuthSigner
  } ],
  logger: e?.logger ?? new se.NoOpLogger,
  protocol: e?.protocol ?? new te.AwsRestJsonProtocol({
    defaultNamespace: "com.amazonaws.sso"
  }),
  serviceId: e?.serviceId ?? "SSO",
  urlParser: e?.urlParser ?? re.parseUrl,
  utf8Decoder: e?.utf8Decoder ?? f.fromUtf8,
  utf8Encoder: e?.utf8Encoder ?? f.toUtf8
});

var pe = we(Nc()), de = we(Wse()), ue = we(Nc()), le = e => {
  ue.emitWarningIfUnsupportedVersion(process.version);
  let t = de.resolveDefaultsModeConfig(e), o = () => t().then(pe.loadConfigsForDefaultMode), n = ne(e);
  g.emitWarningIfUnsupportedVersion(process.version);
  let s = {
    profile: e?.profile,
    logger: n.logger
  };
  return {
    ...n,
    ...e,
    runtime: "node",
    defaultsMode: t,
    authSchemePreference: e?.authSchemePreference ?? a.loadConfig(g.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, s),
    bodyLengthChecker: e?.bodyLengthChecker ?? ae.calculateBodyLength,
    defaultUserAgentProvider: e?.defaultUserAgentProvider ?? R.createDefaultUserAgentProvider({
      serviceId: n.serviceId,
      clientVersion: U.version
    }),
    maxAttempts: e?.maxAttempts ?? a.loadConfig(y.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
    region: e?.region ?? a.loadConfig(c.NODE_REGION_CONFIG_OPTIONS, {
      ...c.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...s
    }),
    requestHandler: S.NodeHttpHandler.create(e?.requestHandler ?? o),
    retryMode: e?.retryMode ?? a.loadConfig({
      ...y.NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await o()).retryMode || ce.DEFAULT_RETRY_MODE
    }, e),
    sha256: e?.sha256 ?? ie.Hash.bind(null, "sha256"),
    streamCollector: e?.streamCollector ?? S.streamCollector,
    useDualstackEndpoint: e?.useDualstackEndpoint ?? a.loadConfig(c.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, s),
    useFipsEndpoint: e?.useFipsEndpoint ?? a.loadConfig(c.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, s),
    userAgentAppId: e?.userAgentAppId ?? a.loadConfig(R.NODE_APP_ID_CONFIG_OPTIONS, s)
  };
};

var v = we(gZ()), x = we(og()), E = we(Nc());

var me = e => {
  let {httpAuthSchemes: t, httpAuthSchemeProvider: o, credentials: n} = e;
  return {
    setHttpAuthScheme(s) {
      let m = t.findIndex(O => O.schemeId === s.schemeId);
      if (m === -1) t.push(s); else t.splice(m, 1, s);
    },
    httpAuthSchemes() {
      return t;
    },
    setHttpAuthSchemeProvider(s) {
      o = s;
    },
    httpAuthSchemeProvider() {
      return o;
    },
    setCredentials(s) {
      n = s;
    },
    credentials() {
      return n;
    }
  };
}, he = e => ({
  httpAuthSchemes: e.httpAuthSchemes(),
  httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
  credentials: e.credentials()
});

var _e = (e, t) => {
  let o = Object.assign(v.getAwsRegionExtensionConfiguration(e), E.getDefaultExtensionConfiguration(e), x.getHttpHandlerExtensionConfiguration(e), me(e));
  return t.forEach(n => n.configure(o)), Object.assign(e, v.resolveAwsRegionExtensionConfiguration(o), E.resolveDefaultRuntimeConfig(o), x.resolveHttpHandlerRuntimeConfig(o), he(o));
};

class hwo extends xe.Client {
  config;
  constructor(...[e]) {
    let t = le(e || {});
    super(t);
    this.initConfig = t;
    let o = H(t), n = w.resolveUserAgentConfig(o), s = P.resolveRetryConfig(n), m = Re.resolveRegionConfig(s), O = A.resolveHostHeaderConfig(m), Ie = ve.resolveEndpointConfig(O), Te = D(Ie), be = _e(Te, e?.extensions || []);
    this.config = be, this.middlewareStack.use(ye.getSchemaSerdePlugin(this.config)), 
    this.middlewareStack.use(w.getUserAgentPlugin(this.config)), this.middlewareStack.use(P.getRetryPlugin(this.config)), 
    this.middlewareStack.use(Se.getContentLengthPlugin(this.config)), this.middlewareStack.use(A.getHostHeaderPlugin(this.config)), 
    this.middlewareStack.use(fe.getLoggerPlugin(this.config)), this.middlewareStack.use(ge.getRecursionDetectionPlugin(this.config)), 
    this.middlewareStack.use(d.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: L,
      identityProviderConfigProvider: async Oe => new d.DefaultIdentityProviderConfig({
        "aws.auth#sigv4": Oe.credentials
      })
    })), this.middlewareStack.use(d.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
}

var Pe = we($1()), Ce = we(Nc());

var u = we(MP());

var Ee = we(Nc());

class i extends Ee.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, i.prototype);
  }
}

class C extends i {
  name="InvalidRequestException";
  $fault="client";
  constructor(e) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, C.prototype);
  }
}

class I extends i {
  name="ResourceNotFoundException";
  $fault="client";
  constructor(e) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, I.prototype);
  }
}

class T extends i {
  name="TooManyRequestsException";
  $fault="client";
  constructor(e) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, T.prototype);
  }
}

class b extends i {
  name="UnauthorizedException";
  $fault="client";
  constructor(e) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, b.prototype);
  }
}

var He = [ 0, "com.amazonaws.sso", "AccessTokenType", 8, 0 ], Fe = [ 0, "com.amazonaws.sso", "SecretAccessKeyType", 8, 0 ], Ue = [ 0, "com.amazonaws.sso", "SessionTokenType", 8, 0 ];

var Ge = [ 3, "com.amazonaws.sso", "GetRoleCredentialsRequest", 0, [ "roleName", "accountId", "accessToken" ], [ [ 0, {
  ["httpQuery"]: "role_name"
} ], [ 0, {
  ["httpQuery"]: "account_id"
} ], [ () => He, {
  ["httpHeader"]: "x-amz-sso_bearer_token"
} ] ] ], qe = [ 3, "com.amazonaws.sso", "GetRoleCredentialsResponse", 0, [ "roleCredentials" ], [ [ () => ze, 0 ] ] ], je = [ -3, "com.amazonaws.sso", "InvalidRequestException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

u.TypeRegistry.for("com.amazonaws.sso").registerError(je, C);

var Me = [ -3, "com.amazonaws.sso", "ResourceNotFoundException", {
  ["error"]: "client",
  ["httpError"]: 404
}, [ "message" ], [ 0 ] ];

u.TypeRegistry.for("com.amazonaws.sso").registerError(Me, I);

var ze = [ 3, "com.amazonaws.sso", "RoleCredentials", 0, [ "accessKeyId", "secretAccessKey", "sessionToken", "expiration" ], [ 0, [ () => Fe, 0 ], [ () => Ue, 0 ], 1 ] ];

var Ke = [ -3, "com.amazonaws.sso", "TooManyRequestsException", {
  ["error"]: "client",
  ["httpError"]: 429
}, [ "message" ], [ 0 ] ];

u.TypeRegistry.for("com.amazonaws.sso").registerError(Ke, T);

var $e = [ -3, "com.amazonaws.sso", "UnauthorizedException", {
  ["error"]: "client",
  ["httpError"]: 401
}, [ "message" ], [ 0 ] ];

u.TypeRegistry.for("com.amazonaws.sso").registerError($e, b);

var Qe = [ -3, "smithy.ts.sdk.synthetic.com.amazonaws.sso", "SSOServiceException", 0, [], [] ];

u.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.sso").registerError(Qe, i);

var Ae = [ 9, "com.amazonaws.sso", "GetRoleCredentials", {
  ["http"]: [ "GET", "/federation/credentials", 200 ]
}, () => Ge, () => qe ];

class ywo extends(Ce.Command.classBuilder().ep(F).m(function(e, t, o, n) {
  return [ Pe.getEndpointPlugin(o, e.getEndpointParameterInstructions()) ];
}).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").sc(Ae).build()){}

export { hwo, ywo };
