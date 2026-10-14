// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { L0 } from "./chunk-qcf34wnk.js";

import { HP } from "./chunk-p5n1wfty.js";

import { Ym } from "./chunk-g7w8fv6g.js";

import { we } from "./chunk-m8ez8fhk.js";

var p = we(HP()), E = we(Ym()), mwo = "AWS_ACCESS_KEY_ID", gwo = "AWS_SECRET_ACCESS_KEY", u = "AWS_SESSION_TOKEN", _ = "AWS_CREDENTIAL_EXPIRATION", C = "AWS_CREDENTIAL_SCOPE", w = "AWS_ACCOUNT_ID", Wjn = e => async () => {
  e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
  let o = process.env[mwo], r = process.env[gwo], n = process.env[u], s = process.env[_], t = process.env[C], d = process.env[w];
  if (o && r) {
    let a = {
      accessKeyId: o,
      secretAccessKey: r,
      ...n && {
        sessionToken: n
      },
      ...s && {
        expiration: new Date(s)
      },
      ...t && {
        credentialScope: t
      },
      ...d && {
        accountId: d
      }
    };
    return p.setCredentialFeature(a, "CREDENTIALS_ENV_VARS", "g"), a;
  }
  throw new E.CredentialsProviderError("Unable to find environment variable credentials.", {
    logger: e?.logger
  });
};

var c = we(Ym()), m = we(L0());

var i = we(Ym()), f = "AWS_EC2_METADATA_DISABLED", S = async e => {
  let {ENV_CMDS_FULL_URI: o, ENV_CMDS_RELATIVE_URI: r, fromContainerMetadata: n, fromInstanceMetadata: s} = await import("./chunk-rkwvs1ne.js");
  if (process.env[r] || process.env[o]) {
    e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
    let {fromHttp: t} = await import("./chunk-w7he2cr9.js");
    return i.chain(t(e), n(e));
  }
  if (process.env[f] && process.env[f] !== "false") return async () => {
    throw new i.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
      logger: e.logger
    });
  };
  return e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), 
  s(e);
};

function g(e, o) {
  let r = A(e), n, s, t, d = async a => {
    if (a?.forceRefresh) return await r(a);
    if (t?.expiration) {
      if (t?.expiration?.getTime() < Date.now()) t = void 0;
    }
    if (n) await n; else if (!t || o?.(t)) if (t) {
      if (!s) s = r(a).then(l => {
        t = l, s = void 0;
      });
    } else return n = r(a).then(l => {
      t = l, n = void 0;
    }), d(a);
    return t;
  };
  return d;
}

var A = e => async o => {
  let r;
  for (let n of e) try {
    return await n(o);
  } catch (s) {
    if (r = s, s?.tryNextLink) continue;
    throw s;
  }
  throw r;
};

var v = !1, vpe = (e = {}) => g([ async () => {
  if (e.profile ?? process.env[m.ENV_PROFILE]) {
    if (process.env[mwo] && process.env[gwo]) {
      if (!v) (e.logger?.warn && e.logger?.constructor?.name !== "NoOpLogger" ? e.logger.warn.bind(e.logger) : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:\n    Multiple credential sources detected: \n    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.\n    This SDK will proceed with the AWS_PROFILE value.\n    \n    However, a future version may change this behavior to prefer the ENV static credentials.\n    Please ensure that your environment only sets either the AWS_PROFILE or the\n    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.\n`), 
      v = !0;
    }
    throw new c.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
      logger: e.logger,
      tryNextLink: !0
    });
  }
  return e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), 
  Wjn(e)();
}, async o => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
  let {ssoStartUrl: r, ssoAccountId: n, ssoRegion: s, ssoRoleName: t, ssoSession: d} = e;
  if (!r && !n && !s && !t && !d) throw new c.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
    logger: e.logger
  });
  let {fromSSO: a} = await import("./chunk-n2wejb43.js");
  return a(e)(o);
}, async o => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
  let {fromIni: r} = await import("./chunk-n89p3pw0.js");
  return r(e)(o);
}, async o => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
  let {fromProcess: r} = await import("./chunk-xtaq9y54.js");
  return r(e)(o);
}, async o => {
  e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
  let {fromTokenFile: r} = await import("./chunk-ssp3k9kf.js");
  return r(e)(o);
}, async () => (e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), 
(await S(e))()), async () => {
  throw new c.CredentialsProviderError("Could not load credentials from any providers", {
    tryNextLink: !1,
    logger: e.logger
  });
} ], I);

var I = e => e?.expiration !== void 0 && e.expiration.getTime() - Date.now() < 3e5;

export { mwo, gwo, Wjn, vpe };
