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

var P = we(Dse()), We = we(Lse()), Oe = we(Nse()), v = we(fZ()), Me = we(cT()), h = we(rS()), He = we(MP()), Fe = we($se()), Ne = we($1()), D = we(YF()), Le = we(Nc());

var z = we(XT()), x = we(DP());

var q = async (e, t, o) => ({
  operation: x.getSmithyContext(t).operation,
  region: await x.normalizeProvider(e.region)() || (() => {
    throw Error("expected `region` to be configured for `aws.auth#sigv4`");
  })()
});

function Ve(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
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

function K(e) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}

var J = e => {
  let t = [];
  switch (e.operation) {
   case "AssumeRoleWithSAML":
    {
      t.push(K(e));
      break;
    }

   case "AssumeRoleWithWebIdentity":
    {
      t.push(K(e));
      break;
    }

   default:
    t.push(Ve(e));
  }
  return t;
}, Be = e => Object.assign(e, {
  stsClientCtor: j
}), Q = e => {
  let t = Be(e), o = z.resolveAwsSdkSigV4Config(t);
  return Object.assign(o, {
    authSchemePreference: x.normalizeProvider(e.authSchemePreference ?? [])
  });
};

var V = e => Object.assign(e, {
  useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
  useFipsEndpoint: e.useFipsEndpoint ?? !1,
  useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
  defaultSigningName: "sts"
}), B = {
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

var Y = {
  name: "@aws-sdk/client-sts",
  description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
  version: "3.936.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-sts",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
    test: "yarn g:vitest run",
    "test:watch": "yarn g:vitest watch"
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
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-sts"
  }
};

var _ = we(XT());

var A = we(Fse()), u = we(cT()), Se = we(rS()), ye = we(Use()), f = we(YF()), l = we(OP()), S = we(nD()), Te = we(Bse()), Re = we(mZ());

var Ee = we(XT()), xe = we(jse()), ge = we(rS()), Ie = we(Nc()), Ae = we(Iz()), g = we(lx()), I = we(_T());

var _e = we(pZ()), m = we(i5());

var X = {
  ["required"]: !1,
  ["type"]: "string"
}, U = {
  ["required"]: !0,
  default: !1,
  ["type"]: "boolean"
}, ae = {
  ["ref"]: "Endpoint"
}, Z = {
  ["fn"]: "isSet",
  ["argv"]: [ {
    ["ref"]: "Region"
  } ]
}, n = {
  ["ref"]: "Region"
}, ee = {
  ["fn"]: "aws.partition",
  ["argv"]: [ n ],
  assign: "PartitionResult"
}, ce = {
  ["ref"]: "UseFIPS"
}, de = {
  ["ref"]: "UseDualStack"
}, r = {
  url: "https://sts.amazonaws.com",
  properties: {
    authSchemes: [ {
      name: "sigv4",
      signingName: "sts",
      signingRegion: "us-east-1"
    } ]
  },
  headers: {}
}, c = {}, te = {
  conditions: [ {
    ["fn"]: "stringEquals",
    ["argv"]: [ n, "aws-global" ]
  } ],
  ["endpoint"]: r,
  ["type"]: "endpoint"
}, pe = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ ce, !0 ]
}, le = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ de, !0 ]
}, oe = {
  ["fn"]: "getAttr",
  ["argv"]: [ {
    ["ref"]: "PartitionResult"
  }, "supportsFIPS" ]
}, ue = {
  ["ref"]: "PartitionResult"
}, ne = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ !0, {
    ["fn"]: "getAttr",
    ["argv"]: [ ue, "supportsDualStack" ]
  } ]
}, se = [ {
  ["fn"]: "isSet",
  ["argv"]: [ ae ]
} ], re = [ pe ], ie = [ le ], Xe = {
  version: "1.0",
  parameters: {
    Region: X,
    UseDualStack: U,
    UseFIPS: U,
    Endpoint: X,
    UseGlobalEndpoint: U
  },
  rules: [ {
    conditions: [ {
      ["fn"]: "booleanEquals",
      ["argv"]: [ {
        ["ref"]: "UseGlobalEndpoint"
      }, !0 ]
    }, {
      ["fn"]: "not",
      ["argv"]: se
    }, Z, ee, {
      ["fn"]: "booleanEquals",
      ["argv"]: [ ce, !1 ]
    }, {
      ["fn"]: "booleanEquals",
      ["argv"]: [ de, !1 ]
    } ],
    rules: [ {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "ap-northeast-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "ap-south-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "ap-southeast-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "ap-southeast-2" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, te, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "ca-central-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "eu-central-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "eu-north-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "eu-west-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "eu-west-2" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "eu-west-3" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "sa-east-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "us-east-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "us-east-2" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "us-west-1" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      conditions: [ {
        ["fn"]: "stringEquals",
        ["argv"]: [ n, "us-west-2" ]
      } ],
      endpoint: r,
      ["type"]: "endpoint"
    }, {
      endpoint: {
        url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        properties: {
          authSchemes: [ {
            name: "sigv4",
            signingName: "sts",
            signingRegion: "{Region}"
          } ]
        },
        headers: c
      },
      ["type"]: "endpoint"
    } ],
    ["type"]: "tree"
  }, {
    conditions: se,
    rules: [ {
      conditions: re,
      error: "Invalid Configuration: FIPS and custom endpoint are not supported",
      ["type"]: "error"
    }, {
      conditions: ie,
      error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
      ["type"]: "error"
    }, {
      endpoint: {
        url: ae,
        properties: c,
        headers: c
      },
      ["type"]: "endpoint"
    } ],
    ["type"]: "tree"
  }, {
    conditions: [ Z ],
    rules: [ {
      conditions: [ ee ],
      rules: [ {
        conditions: [ pe, le ],
        rules: [ {
          conditions: [ {
            ["fn"]: "booleanEquals",
            ["argv"]: [ !0, oe ]
          }, ne ],
          rules: [ {
            endpoint: {
              url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
              properties: c,
              headers: c
            },
            ["type"]: "endpoint"
          } ],
          ["type"]: "tree"
        }, {
          error: "FIPS and DualStack are enabled, but this partition does not support one or both",
          ["type"]: "error"
        } ],
        ["type"]: "tree"
      }, {
        conditions: re,
        rules: [ {
          conditions: [ {
            ["fn"]: "booleanEquals",
            ["argv"]: [ oe, !0 ]
          } ],
          rules: [ {
            conditions: [ {
              ["fn"]: "stringEquals",
              ["argv"]: [ {
                ["fn"]: "getAttr",
                ["argv"]: [ ue, "name" ]
              }, "aws-us-gov" ]
            } ],
            endpoint: {
              url: "https://sts.{Region}.amazonaws.com",
              properties: c,
              headers: c
            },
            ["type"]: "endpoint"
          }, {
            endpoint: {
              url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
              properties: c,
              headers: c
            },
            ["type"]: "endpoint"
          } ],
          ["type"]: "tree"
        }, {
          error: "FIPS is enabled but this partition does not support FIPS",
          ["type"]: "error"
        } ],
        ["type"]: "tree"
      }, {
        conditions: ie,
        rules: [ {
          conditions: [ ne ],
          rules: [ {
            endpoint: {
              url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
              properties: c,
              headers: c
            },
            ["type"]: "endpoint"
          } ],
          ["type"]: "tree"
        }, {
          error: "DualStack is enabled but this partition does not support DualStack",
          ["type"]: "error"
        } ],
        ["type"]: "tree"
      }, te, {
        endpoint: {
          url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
          properties: c,
          headers: c
        },
        ["type"]: "endpoint"
      } ],
      ["type"]: "tree"
    } ],
    ["type"]: "tree"
  }, {
    error: "Invalid Configuration: Missing Region",
    ["type"]: "error"
  } ]
}, me = Xe;

var Ze = new m.EndpointCache({
  size: 50,
  params: [ "Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint" ]
}), he = (e, t = {}) => Ze.get(e, () => m.resolveEndpoint(me, {
  endpointParams: e,
  logger: t.logger
}));

m.customEndpointFunctions.aws = _e.awsEndpointFunctions;

var fe = e => ({
  apiVersion: "2011-06-15",
  base64Decoder: e?.base64Decoder ?? g.fromBase64,
  base64Encoder: e?.base64Encoder ?? g.toBase64,
  disableHostPrefix: e?.disableHostPrefix ?? !1,
  endpointProvider: e?.endpointProvider ?? he,
  extensions: e?.extensions ?? [],
  httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? J,
  httpAuthSchemes: e?.httpAuthSchemes ?? [ {
    schemeId: "aws.auth#sigv4",
    identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
    signer: new Ee.AwsSdkSigV4Signer
  }, {
    schemeId: "smithy.api#noAuth",
    identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
    signer: new ge.NoAuthSigner
  } ],
  logger: e?.logger ?? new Ie.NoOpLogger,
  protocol: e?.protocol ?? new xe.AwsQueryProtocol({
    defaultNamespace: "com.amazonaws.sts",
    xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
    version: "2011-06-15"
  }),
  serviceId: e?.serviceId ?? "STS",
  urlParser: e?.urlParser ?? Ae.parseUrl,
  utf8Decoder: e?.utf8Decoder ?? I.fromUtf8,
  utf8Encoder: e?.utf8Encoder ?? I.toUtf8
});

var Pe = we(Nc()), ve = we(Wse()), De = we(Nc()), Ce = e => {
  De.emitWarningIfUnsupportedVersion(process.version);
  let t = ve.resolveDefaultsModeConfig(e), o = () => t().then(Pe.loadConfigsForDefaultMode), d = fe(e);
  _.emitWarningIfUnsupportedVersion(process.version);
  let i = {
    profile: e?.profile,
    logger: d.logger
  };
  return {
    ...d,
    ...e,
    runtime: "node",
    defaultsMode: t,
    authSchemePreference: e?.authSchemePreference ?? l.loadConfig(_.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i),
    bodyLengthChecker: e?.bodyLengthChecker ?? Te.calculateBodyLength,
    credentialDefaultProvider: e?.credentialDefaultProvider ?? vpe,
    defaultUserAgentProvider: e?.defaultUserAgentProvider ?? A.createDefaultUserAgentProvider({
      serviceId: d.serviceId,
      clientVersion: Y.version
    }),
    httpAuthSchemes: e?.httpAuthSchemes ?? [ {
      schemeId: "aws.auth#sigv4",
      identityProvider: p => p.getIdentityProvider("aws.auth#sigv4") || (async E => await vpe(E?.__config || {})()),
      signer: new _.AwsSdkSigV4Signer
    }, {
      schemeId: "smithy.api#noAuth",
      identityProvider: p => p.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
      signer: new Se.NoAuthSigner
    } ],
    maxAttempts: e?.maxAttempts ?? l.loadConfig(f.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
    region: e?.region ?? l.loadConfig(u.NODE_REGION_CONFIG_OPTIONS, {
      ...u.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...i
    }),
    requestHandler: S.NodeHttpHandler.create(e?.requestHandler ?? o),
    retryMode: e?.retryMode ?? l.loadConfig({
      ...f.NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await o()).retryMode || Re.DEFAULT_RETRY_MODE
    }, e),
    sha256: e?.sha256 ?? ye.Hash.bind(null, "sha256"),
    streamCollector: e?.streamCollector ?? S.streamCollector,
    useDualstackEndpoint: e?.useDualstackEndpoint ?? l.loadConfig(u.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i),
    useFipsEndpoint: e?.useFipsEndpoint ?? l.loadConfig(u.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i),
    userAgentAppId: e?.userAgentAppId ?? l.loadConfig(A.NODE_APP_ID_CONFIG_OPTIONS, i)
  };
};

var y = we(gZ()), T = we(og()), R = we(Nc());

var Ge = e => {
  let {httpAuthSchemes: t, httpAuthSchemeProvider: o, credentials: d} = e;
  return {
    setHttpAuthScheme(i) {
      let p = t.findIndex(E => E.schemeId === i.schemeId);
      if (p === -1) t.push(i); else t.splice(p, 1, i);
    },
    httpAuthSchemes() {
      return t;
    },
    setHttpAuthSchemeProvider(i) {
      o = i;
    },
    httpAuthSchemeProvider() {
      return o;
    },
    setCredentials(i) {
      d = i;
    },
    credentials() {
      return d;
    }
  };
}, be = e => ({
  httpAuthSchemes: e.httpAuthSchemes(),
  httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
  credentials: e.credentials()
});

var ke = (e, t) => {
  let o = Object.assign(y.getAwsRegionExtensionConfiguration(e), R.getDefaultExtensionConfiguration(e), T.getHttpHandlerExtensionConfiguration(e), Ge(e));
  return t.forEach(d => d.configure(o)), Object.assign(e, y.resolveAwsRegionExtensionConfiguration(o), R.resolveDefaultRuntimeConfig(o), T.resolveHttpHandlerRuntimeConfig(o), be(o));
};

class j extends Le.Client {
  config;
  constructor(...[e]) {
    let t = Ce(e || {});
    super(t);
    this.initConfig = t;
    let o = V(t), d = v.resolveUserAgentConfig(o), i = D.resolveRetryConfig(d), p = Me.resolveRegionConfig(i), E = P.resolveHostHeaderConfig(p), qe = Ne.resolveEndpointConfig(E), $e = Q(qe), Je = ke($e, e?.extensions || []);
    this.config = Je, this.middlewareStack.use(He.getSchemaSerdePlugin(this.config)), 
    this.middlewareStack.use(v.getUserAgentPlugin(this.config)), this.middlewareStack.use(D.getRetryPlugin(this.config)), 
    this.middlewareStack.use(Fe.getContentLengthPlugin(this.config)), this.middlewareStack.use(P.getHostHeaderPlugin(this.config)), 
    this.middlewareStack.use(We.getLoggerPlugin(this.config)), this.middlewareStack.use(Oe.getRecursionDetectionPlugin(this.config)), 
    this.middlewareStack.use(h.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: q,
      identityProviderConfigProvider: async Qe => new h.DefaultIdentityProviderConfig({
        "aws.auth#sigv4": Qe.credentials
      })
    })), this.middlewareStack.use(h.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
}

var a = we(MP());

var je = we(Nc());

class s extends je.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, s.prototype);
  }
}

class C extends s {
  name="ExpiredTokenException";
  $fault="client";
  constructor(e) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, C.prototype);
  }
}

class G extends s {
  name="MalformedPolicyDocumentException";
  $fault="client";
  constructor(e) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, G.prototype);
  }
}

class b extends s {
  name="PackedPolicyTooLargeException";
  $fault="client";
  constructor(e) {
    super({
      name: "PackedPolicyTooLargeException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, b.prototype);
  }
}

class k extends s {
  name="RegionDisabledException";
  $fault="client";
  constructor(e) {
    super({
      name: "RegionDisabledException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, k.prototype);
  }
}

class w extends s {
  name="IDPRejectedClaimException";
  $fault="client";
  constructor(e) {
    super({
      name: "IDPRejectedClaimException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, w.prototype);
  }
}

class W extends s {
  name="InvalidIdentityTokenException";
  $fault="client";
  constructor(e) {
    super({
      name: "InvalidIdentityTokenException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, W.prototype);
  }
}

class O extends s {
  name="IDPCommunicationErrorException";
  $fault="client";
  constructor(e) {
    super({
      name: "IDPCommunicationErrorException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, O.prototype);
  }
}

class M extends s {
  name="InvalidAuthorizationMessageException";
  $fault="client";
  constructor(e) {
    super({
      name: "InvalidAuthorizationMessageException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, M.prototype);
  }
}

class H extends s {
  name="ExpiredTradeInTokenException";
  $fault="client";
  constructor(e) {
    super({
      name: "ExpiredTradeInTokenException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, H.prototype);
  }
}

class F extends s {
  name="JWTPayloadSizeExceededException";
  $fault="client";
  constructor(e) {
    super({
      name: "JWTPayloadSizeExceededException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, F.prototype);
  }
}

class N extends s {
  name="OutboundWebIdentityFederationDisabledException";
  $fault="client";
  constructor(e) {
    super({
      name: "OutboundWebIdentityFederationDisabledException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, N.prototype);
  }
}

class L extends s {
  name="SessionDurationEscalationException";
  $fault="client";
  constructor(e) {
    super({
      name: "SessionDurationEscalationException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, L.prototype);
  }
}

var et = [ -3, "com.amazonaws.sts", "ExpiredTokenException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "ExpiredTokenException", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(et, C);

var tt = [ -3, "com.amazonaws.sts", "ExpiredTradeInTokenException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "ExpiredTradeInTokenException", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(tt, H);

var ot = [ 3, "com.amazonaws.sts", "GetCallerIdentityRequest", 0, [], [] ], nt = [ 3, "com.amazonaws.sts", "GetCallerIdentityResponse", 0, [ "UserId", "Account", "Arn" ], [ 0, 0, 0 ] ];

var st = [ -3, "com.amazonaws.sts", "IDPCommunicationErrorException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "IDPCommunicationError", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(st, O);

var rt = [ -3, "com.amazonaws.sts", "IDPRejectedClaimException", {
  ["error"]: "client",
  ["httpError"]: 403,
  ["awsQueryError"]: [ "IDPRejectedClaim", 403 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(rt, w);

var it = [ -3, "com.amazonaws.sts", "InvalidAuthorizationMessageException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "InvalidAuthorizationMessageException", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(it, M);

var at = [ -3, "com.amazonaws.sts", "InvalidIdentityTokenException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "InvalidIdentityToken", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(at, W);

var ct = [ -3, "com.amazonaws.sts", "JWTPayloadSizeExceededException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "JWTPayloadSizeExceededException", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(ct, F);

var dt = [ -3, "com.amazonaws.sts", "MalformedPolicyDocumentException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "MalformedPolicyDocument", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(dt, G);

var pt = [ -3, "com.amazonaws.sts", "OutboundWebIdentityFederationDisabledException", {
  ["error"]: "client",
  ["httpError"]: 403,
  ["awsQueryError"]: [ "OutboundWebIdentityFederationDisabledException", 403 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(pt, N);

var lt = [ -3, "com.amazonaws.sts", "PackedPolicyTooLargeException", {
  ["error"]: "client",
  ["httpError"]: 400,
  ["awsQueryError"]: [ "PackedPolicyTooLarge", 400 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(lt, b);

var ut = [ -3, "com.amazonaws.sts", "RegionDisabledException", {
  ["error"]: "client",
  ["httpError"]: 403,
  ["awsQueryError"]: [ "RegionDisabledException", 403 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(ut, k);

var mt = [ -3, "com.amazonaws.sts", "SessionDurationEscalationException", {
  ["error"]: "client",
  ["httpError"]: 403,
  ["awsQueryError"]: [ "SessionDurationEscalationException", 403 ]
}, [ "message" ], [ 0 ] ];

a.TypeRegistry.for("com.amazonaws.sts").registerError(mt, L);

var _t = [ -3, "smithy.ts.sdk.synthetic.com.amazonaws.sts", "STSServiceException", 0, [], [] ];

a.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.sts").registerError(_t, s);

var Ue = [ 9, "com.amazonaws.sts", "GetCallerIdentity", 0, () => ot, () => nt ];

var Ke = we($1()), ze = we(Nc());

class ht extends(ze.Command.classBuilder().ep(B).m(function(e, t, o, d) {
  return [ Ke.getEndpointPlugin(o, e.getEndpointParameterInstructions()) ];
}).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").sc(Ue).build()){}

export { ht as GetCallerIdentityCommand, j as STSClient };
