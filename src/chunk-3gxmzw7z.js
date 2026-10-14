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

import { vpe } from "./chunk-b6behehf.js";

import "./chunk-qcf34wnk.js";

import { Ujn, Bjn } from "./chunk-vy6n834a.js";

import "./chunk-hvtc51w3.js";

import { OP } from "./chunk-3yeje51y.js";

import { Dse, Lse, Nse, pZ, XT, fZ, $se, $1, mZ, YF, Fse, Use, Bse, jse, Wse, gZ } from "./chunk-c47gf6gq.js";

import "./chunk-vnxjpmqe.js";

import { Iz } from "./chunk-851qddh7.js";

import { Nc } from "./chunk-fzyt9ct7.js";

import { MP } from "./chunk-nj8cgz8s.js";

import { DP } from "./chunk-w8hcbtxg.js";

import { og, nD } from "./chunk-w4hwgefc.js";

import { _T, lx } from "./chunk-shz68fkm.js";

import { we } from "./chunk-m8ez8fhk.js";

var D = we(Dse()), xe = we(Lse()), Ee = we(Nse()), S = we(fZ()), ye = we(cT()), m = we(rS()), De = we(MP()), Se = we($se()), Ie = we($1()), I = we(YF()), Ge = we(Nc());

var W = we(XT()), d = we(rS()), C = we(DP()), U = async (e, o, t) => ({
  operation: C.getSmithyContext(o).operation,
  region: await C.normalizeProvider(e.region)() || (() => {
    throw Error("expected `region` to be configured for `aws.auth#sigv4`");
  })()
});

function Ue(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "bedrock",
      region: e.region
    },
    propertiesExtractor: (o, t) => ({
      signingProperties: {
        config: o,
        context: t
      }
    })
  };
}

function Oe(e) {
  return {
    schemeId: "smithy.api#httpBearerAuth",
    propertiesExtractor: ({profile: o, filepath: t, configFilepath: r, ignoreCache: a}, n) => ({
      identityProperties: {
        profile: o,
        filepath: t,
        configFilepath: r,
        ignoreCache: a
      }
    })
  };
}

var w = e => {
  let o = [];
  switch (e.operation) {
   default:
    o.push(Ue(e)), o.push(Oe(e));
  }
  return o;
}, O = e => {
  let o = d.memoizeIdentityProvider(e.token, d.isIdentityExpired, d.doesIdentityRequireRefresh), t = W.resolveAwsSdkSigV4Config(e);
  return Object.assign(t, {
    authSchemePreference: C.normalizeProvider(e.authSchemePreference ?? []),
    token: o
  });
};

var j = e => Object.assign(e, {
  useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
  useFipsEndpoint: e.useFipsEndpoint ?? !1,
  defaultSigningName: "bedrock"
}), M = {
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

var Q = {
  name: "@aws-sdk/client-bedrock",
  description: "AWS SDK for JavaScript Bedrock Client for Node.js, Browser and React Native",
  version: "3.936.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-bedrock",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: !1,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.936.0",
    "@aws-sdk/credential-provider-node": "3.936.0",
    "@aws-sdk/middleware-host-header": "3.936.0",
    "@aws-sdk/middleware-logger": "3.936.0",
    "@aws-sdk/middleware-recursion-detection": "3.936.0",
    "@aws-sdk/middleware-user-agent": "3.936.0",
    "@aws-sdk/region-config-resolver": "3.936.0",
    "@aws-sdk/token-providers": "3.936.0",
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
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-bedrock"
  }
};

var R = we(XT());

var v = we(Fse()), l = we(cT()), pe = we(rS()), Re = we(Use()), T = we(YF()), c = we(OP()), f = we(nD()), me = we(Bse()), Ce = we(mZ());

var ie = we(XT()), _e = we(jse()), ce = we(rS()), le = we(Nc()), ue = we(Iz()), g = we(lx()), P = we(_T());

var re = we(pZ()), p = we(i5());

var K = {
  ["required"]: !1,
  type: "string"
}, H = {
  ["required"]: !0,
  default: !1,
  type: "boolean"
}, z = {
  ["ref"]: "Endpoint"
}, te = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ {
    ["ref"]: "UseFIPS"
  }, !0 ]
}, ne = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ {
    ["ref"]: "UseDualStack"
  }, !0 ]
}, _ = {}, Y = {
  ["fn"]: "getAttr",
  ["argv"]: [ {
    ["ref"]: "PartitionResult"
  }, "supportsFIPS" ]
}, X = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ !0, {
    ["fn"]: "getAttr",
    ["argv"]: [ {
      ["ref"]: "PartitionResult"
    }, "supportsDualStack" ]
  } ]
}, Z = [ te ], ee = [ ne ], oe = [ {
  ["ref"]: "Region"
} ], Qe = {
  version: "1.0",
  parameters: {
    Region: K,
    UseDualStack: H,
    UseFIPS: H,
    Endpoint: K
  },
  rules: [ {
    conditions: [ {
      ["fn"]: "isSet",
      ["argv"]: [ z ]
    } ],
    rules: [ {
      conditions: Z,
      error: "Invalid Configuration: FIPS and custom endpoint are not supported",
      type: "error"
    }, {
      rules: [ {
        conditions: ee,
        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
        type: "error"
      }, {
        endpoint: {
          url: z,
          properties: _,
          headers: _
        },
        type: "endpoint"
      } ],
      type: "tree"
    } ],
    type: "tree"
  }, {
    rules: [ {
      conditions: [ {
        ["fn"]: "isSet",
        ["argv"]: oe
      } ],
      rules: [ {
        conditions: [ {
          ["fn"]: "aws.partition",
          ["argv"]: oe,
          assign: "PartitionResult"
        } ],
        rules: [ {
          conditions: [ te, ne ],
          rules: [ {
            conditions: [ {
              ["fn"]: "booleanEquals",
              ["argv"]: [ !0, Y ]
            }, X ],
            rules: [ {
              rules: [ {
                endpoint: {
                  url: "https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: _,
                  headers: _
                },
                type: "endpoint"
              } ],
              type: "tree"
            } ],
            type: "tree"
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: "error"
          } ],
          type: "tree"
        }, {
          conditions: Z,
          rules: [ {
            conditions: [ {
              ["fn"]: "booleanEquals",
              ["argv"]: [ Y, !0 ]
            } ],
            rules: [ {
              rules: [ {
                endpoint: {
                  url: "https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: _,
                  headers: _
                },
                type: "endpoint"
              } ],
              type: "tree"
            } ],
            type: "tree"
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: "error"
          } ],
          type: "tree"
        }, {
          conditions: ee,
          rules: [ {
            conditions: [ X ],
            rules: [ {
              rules: [ {
                endpoint: {
                  url: "https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: _,
                  headers: _
                },
                type: "endpoint"
              } ],
              type: "tree"
            } ],
            type: "tree"
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: "error"
          } ],
          type: "tree"
        }, {
          rules: [ {
            endpoint: {
              url: "https://bedrock.{Region}.{PartitionResult#dnsSuffix}",
              properties: _,
              headers: _
            },
            type: "endpoint"
          } ],
          type: "tree"
        } ],
        type: "tree"
      } ],
      type: "tree"
    }, {
      error: "Invalid Configuration: Missing Region",
      type: "error"
    } ],
    type: "tree"
  } ]
}, se = Qe;

var Ke = new p.EndpointCache({
  size: 50,
  params: [ "Endpoint", "Region", "UseDualStack", "UseFIPS" ]
}), ae = (e, o = {}) => Ke.get(e, () => p.resolveEndpoint(se, {
  endpointParams: e,
  logger: o.logger
}));

p.customEndpointFunctions.aws = re.awsEndpointFunctions;

var de = e => ({
  apiVersion: "2023-04-20",
  base64Decoder: e?.base64Decoder ?? g.fromBase64,
  base64Encoder: e?.base64Encoder ?? g.toBase64,
  disableHostPrefix: e?.disableHostPrefix ?? !1,
  endpointProvider: e?.endpointProvider ?? ae,
  extensions: e?.extensions ?? [],
  httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? w,
  httpAuthSchemes: e?.httpAuthSchemes ?? [ {
    schemeId: "aws.auth#sigv4",
    identityProvider: o => o.getIdentityProvider("aws.auth#sigv4"),
    signer: new ie.AwsSdkSigV4Signer
  }, {
    schemeId: "smithy.api#httpBearerAuth",
    identityProvider: o => o.getIdentityProvider("smithy.api#httpBearerAuth"),
    signer: new ce.HttpBearerAuthSigner
  } ],
  logger: e?.logger ?? new le.NoOpLogger,
  protocol: e?.protocol ?? new _e.AwsRestJsonProtocol({
    defaultNamespace: "com.amazonaws.bedrock"
  }),
  serviceId: e?.serviceId ?? "Bedrock",
  urlParser: e?.urlParser ?? ue.parseUrl,
  utf8Decoder: e?.utf8Decoder ?? P.fromUtf8,
  utf8Encoder: e?.utf8Encoder ?? P.toUtf8
});

var Ae = we(Nc()), Me = we(Wse()), ge = we(Nc()), Pe = e => {
  ge.emitWarningIfUnsupportedVersion(process.version);
  let o = Me.resolveDefaultsModeConfig(e), t = () => o().then(Ae.loadConfigsForDefaultMode), r = de(e);
  R.emitWarningIfUnsupportedVersion(process.version);
  let a = {
    profile: e?.profile,
    logger: r.logger,
    signingName: "bedrock"
  };
  return {
    ...r,
    ...e,
    runtime: "node",
    defaultsMode: o,
    authSchemePreference: e?.authSchemePreference ?? c.loadConfig(R.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, a),
    bodyLengthChecker: e?.bodyLengthChecker ?? me.calculateBodyLength,
    credentialDefaultProvider: e?.credentialDefaultProvider ?? vpe,
    defaultUserAgentProvider: e?.defaultUserAgentProvider ?? v.createDefaultUserAgentProvider({
      serviceId: r.serviceId,
      clientVersion: Q.version
    }),
    httpAuthSchemes: e?.httpAuthSchemes ?? [ {
      schemeId: "aws.auth#sigv4",
      identityProvider: n => n.getIdentityProvider("aws.auth#sigv4"),
      signer: new R.AwsSdkSigV4Signer
    }, {
      schemeId: "smithy.api#httpBearerAuth",
      identityProvider: n => n.getIdentityProvider("smithy.api#httpBearerAuth") || (async u => {
        try {
          return await Ujn({
            signingName: "bedrock"
          })();
        } catch (A) {
          return await Bjn(u)(u);
        }
      }),
      signer: new pe.HttpBearerAuthSigner
    } ],
    maxAttempts: e?.maxAttempts ?? c.loadConfig(T.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
    region: e?.region ?? c.loadConfig(l.NODE_REGION_CONFIG_OPTIONS, {
      ...l.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...a
    }),
    requestHandler: f.NodeHttpHandler.create(e?.requestHandler ?? t),
    retryMode: e?.retryMode ?? c.loadConfig({
      ...T.NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await t()).retryMode || Ce.DEFAULT_RETRY_MODE
    }, e),
    sha256: e?.sha256 ?? Re.Hash.bind(null, "sha256"),
    streamCollector: e?.streamCollector ?? f.streamCollector,
    useDualstackEndpoint: e?.useDualstackEndpoint ?? c.loadConfig(l.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, a),
    useFipsEndpoint: e?.useFipsEndpoint ?? c.loadConfig(l.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, a),
    userAgentAppId: e?.userAgentAppId ?? c.loadConfig(v.NODE_APP_ID_CONFIG_OPTIONS, a)
  };
};

var x = we(gZ()), E = we(og()), y = we(Nc());

var ve = e => {
  let {httpAuthSchemes: o, httpAuthSchemeProvider: t, credentials: r, token: a} = e;
  return {
    setHttpAuthScheme(n) {
      let u = o.findIndex(A => A.schemeId === n.schemeId);
      if (u === -1) o.push(n); else o.splice(u, 1, n);
    },
    httpAuthSchemes() {
      return o;
    },
    setHttpAuthSchemeProvider(n) {
      t = n;
    },
    httpAuthSchemeProvider() {
      return t;
    },
    setCredentials(n) {
      r = n;
    },
    credentials() {
      return r;
    },
    setToken(n) {
      a = n;
    },
    token() {
      return a;
    }
  };
}, Te = e => ({
  httpAuthSchemes: e.httpAuthSchemes(),
  httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
  credentials: e.credentials(),
  token: e.token()
});

var fe = (e, o) => {
  let t = Object.assign(x.getAwsRegionExtensionConfiguration(e), y.getDefaultExtensionConfiguration(e), E.getHttpHandlerExtensionConfiguration(e), ve(e));
  return o.forEach(r => r.configure(t)), Object.assign(e, x.resolveAwsRegionExtensionConfiguration(t), y.resolveDefaultRuntimeConfig(t), E.resolveHttpHandlerRuntimeConfig(t), Te(t));
};

class He extends Ge.Client {
  config;
  constructor(...[e]) {
    let o = Pe(e || {});
    super(o);
    this.initConfig = o;
    let t = j(o), r = S.resolveUserAgentConfig(t), a = I.resolveRetryConfig(r), n = ye.resolveRegionConfig(a), u = D.resolveHostHeaderConfig(n), A = Ie.resolveEndpointConfig(u), qe = O(A), We = fe(qe, e?.extensions || []);
    this.config = We, this.middlewareStack.use(De.getSchemaSerdePlugin(this.config)), 
    this.middlewareStack.use(S.getUserAgentPlugin(this.config)), this.middlewareStack.use(I.getRetryPlugin(this.config)), 
    this.middlewareStack.use(Se.getContentLengthPlugin(this.config)), this.middlewareStack.use(D.getHostHeaderPlugin(this.config)), 
    this.middlewareStack.use(xe.getLoggerPlugin(this.config)), this.middlewareStack.use(Ee.getRecursionDetectionPlugin(this.config)), 
    this.middlewareStack.use(m.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: U,
      identityProviderConfigProvider: async q => new m.DefaultIdentityProviderConfig({
        "aws.auth#sigv4": q.credentials,
        "smithy.api#httpBearerAuth": q.token
      })
    })), this.middlewareStack.use(m.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
}

var i = we(MP());

var he = we(Nc());

class s extends he.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, s.prototype);
  }
}

class G extends s {
  name="AccessDeniedException";
  $fault="client";
  constructor(e) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, G.prototype);
  }
}

class h extends s {
  name="InternalServerException";
  $fault="server";
  constructor(e) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, h.prototype);
  }
}

class L extends s {
  name="ResourceNotFoundException";
  $fault="client";
  constructor(e) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, L.prototype);
  }
}

class b extends s {
  name="ThrottlingException";
  $fault="client";
  constructor(e) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, b.prototype);
  }
}

class k extends s {
  name="ValidationException";
  $fault="client";
  constructor(e) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, k.prototype);
  }
}

class F extends s {
  name="ConflictException";
  $fault="client";
  constructor(e) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, F.prototype);
  }
}

class B extends s {
  name="ServiceQuotaExceededException";
  $fault="client";
  constructor(e) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, B.prototype);
  }
}

class J extends s {
  name="TooManyTagsException";
  $fault="client";
  resourceName;
  constructor(e) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, J.prototype), this.resourceName = e.resourceName;
  }
}

class N extends s {
  name="ResourceInUseException";
  $fault="client";
  constructor(e) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, N.prototype);
  }
}

class V extends s {
  name="ServiceUnavailableException";
  $fault="server";
  constructor(e) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, V.prototype);
  }
}

var Le = [ 0, "com.amazonaws.bedrock", "InferenceProfileDescription", 8, 0 ];

var ze = [ -3, "com.amazonaws.bedrock", "AccessDeniedException", {
  ["error"]: "client",
  ["httpError"]: 403
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ze, G);

var $e = [ -3, "com.amazonaws.bedrock", "ConflictException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError($e, F);

var Ye = [ 3, "com.amazonaws.bedrock", "GetInferenceProfileRequest", 0, [ "inferenceProfileIdentifier" ], [ [ 0, 1 ] ] ], Xe = [ 3, "com.amazonaws.bedrock", "GetInferenceProfileResponse", 0, [ "inferenceProfileName", "description", "createdAt", "updatedAt", "inferenceProfileArn", "models", "inferenceProfileId", "status", "type" ], [ 0, [ () => Le, 0 ], 5, 5, 0, () => be, 0, 0, 0 ] ];

var Ze = [ 3, "com.amazonaws.bedrock", "InferenceProfileModel", 0, [ "modelArn" ], [ 0 ] ], eo = [ 3, "com.amazonaws.bedrock", "InferenceProfileSummary", 0, [ "inferenceProfileName", "description", "createdAt", "updatedAt", "inferenceProfileArn", "models", "inferenceProfileId", "status", "type" ], [ 0, [ () => Le, 0 ], 5, 5, 0, () => be, 0, 0, 0 ] ], oo = [ -3, "com.amazonaws.bedrock", "InternalServerException", {
  ["error"]: "server",
  ["httpError"]: 500
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(oo, h);

var to = [ 3, "com.amazonaws.bedrock", "ListInferenceProfilesRequest", 0, [ "maxResults", "nextToken", "typeEquals" ], [ [ 1, {
  ["httpQuery"]: "maxResults"
} ], [ 0, {
  ["httpQuery"]: "nextToken"
} ], [ 0, {
  ["httpQuery"]: "type"
} ] ] ], no = [ 3, "com.amazonaws.bedrock", "ListInferenceProfilesResponse", 0, [ "inferenceProfileSummaries", "nextToken" ], [ [ () => po, 0 ], 0 ] ];

var so = [ -3, "com.amazonaws.bedrock", "ResourceInUseException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(so, N);

var ro = [ -3, "com.amazonaws.bedrock", "ResourceNotFoundException", {
  ["error"]: "client",
  ["httpError"]: 404
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ro, L);

var ao = [ -3, "com.amazonaws.bedrock", "ServiceQuotaExceededException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(ao, B);

var io = [ -3, "com.amazonaws.bedrock", "ServiceUnavailableException", {
  ["error"]: "server",
  ["httpError"]: 503
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(io, V);

var _o = [ -3, "com.amazonaws.bedrock", "ThrottlingException", {
  ["error"]: "client",
  ["httpError"]: 429
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(_o, b);

var co = [ -3, "com.amazonaws.bedrock", "TooManyTagsException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message", "resourceName" ], [ 0, 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(co, J);

var lo = [ -3, "com.amazonaws.bedrock", "ValidationException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

i.TypeRegistry.for("com.amazonaws.bedrock").registerError(lo, k);

var uo = [ -3, "smithy.ts.sdk.synthetic.com.amazonaws.bedrock", "BedrockServiceException", 0, [], [] ];

i.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.bedrock").registerError(uo, s);

var be = [ 1, "com.amazonaws.bedrock", "InferenceProfileModels", 0, () => Ze ], po = [ 1, "com.amazonaws.bedrock", "InferenceProfileSummaries", 0, [ () => eo, 0 ] ];

var ke = [ 9, "com.amazonaws.bedrock", "GetInferenceProfile", {
  ["http"]: [ "GET", "/inference-profiles/{inferenceProfileIdentifier}", 200 ]
}, () => Ye, () => Xe ];

var Fe = [ 9, "com.amazonaws.bedrock", "ListInferenceProfiles", {
  ["http"]: [ "GET", "/inference-profiles", 200 ]
}, () => to, () => no ];

var Be = we($1()), Je = we(Nc());

class Ro extends(Je.Command.classBuilder().ep(M).m(function(e, o, t, r) {
  return [ Be.getEndpointPlugin(t, e.getEndpointParameterInstructions()) ];
}).s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {}).n("BedrockClient", "GetInferenceProfileCommand").sc(ke).build()){}

var Ne = we($1()), Ve = we(Nc());

class mo extends(Ve.Command.classBuilder().ep(M).m(function(e, o, t, r) {
  return [ Ne.getEndpointPlugin(t, e.getEndpointParameterInstructions()) ];
}).s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {}).n("BedrockClient", "ListInferenceProfilesCommand").sc(Fe).build()){}

export { He as BedrockClient, Ro as GetInferenceProfileCommand, mo as ListInferenceProfilesCommand };
