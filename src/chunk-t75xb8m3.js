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

import { og } from "./chunk-w4hwgefc.js";

import { we } from "./chunk-m8ez8fhk.js";

var k = we(L0());

var ne = we(Ym());

var I = we(HP()), P = we(Ym()), N = we(L0());

var L = we(HP()), _ = we(Ym()), O = (e, r, t) => {
  let o = {
    EcsContainer: async s => {
      let {fromHttp: n} = await import("./chunk-w7he2cr9.js"), {fromContainerMetadata: i} = await import("./chunk-rkwvs1ne.js");
      return t?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), 
      async () => _.chain(n(s ?? {}), i(s))().then(S);
    },
    Ec2InstanceMetadata: async s => {
      t?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
      let {fromInstanceMetadata: n} = await import("./chunk-rkwvs1ne.js");
      return async () => n(s)().then(S);
    },
    Environment: async s => {
      t?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
      let {fromEnv: n} = await import("./chunk-zrkbc4kf.js");
      return async () => n(s)().then(S);
    }
  };
  if (e in o) return o[e]; else throw new _.CredentialsProviderError(`Unsupported credential source in profile ${r}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
    logger: t
  });
}, S = e => L.setCredentialFeature(e, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");

var K = (e, {profile: r = "default", logger: t} = {}) => Boolean(e) && typeof e === "object" && typeof e.role_arn === "string" && [ "undefined", "string" ].indexOf(typeof e.role_session_name) > -1 && [ "undefined", "string" ].indexOf(typeof e.external_id) > -1 && [ "undefined", "string" ].indexOf(typeof e.mfa_serial) > -1 && (se(e, {
  profile: r,
  logger: t
}) || ie(e, {
  profile: r,
  logger: t
})), se = (e, {profile: r, logger: t}) => {
  let o = typeof e.source_profile === "string" && typeof e.credential_source > "u";
  if (o) t?.debug?.(`    ${r} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`);
  return o;
}, ie = (e, {profile: r, logger: t}) => {
  let o = typeof e.credential_source === "string" && typeof e.source_profile > "u";
  if (o) t?.debug?.(`    ${r} isCredentialSourceProfile credential_source=${e.credential_source}`);
  return o;
}, B = async (e, r, t, o = {}, s) => {
  t.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
  let n = r[e], {source_profile: i, region: u} = n;
  if (!t.roleAssumer) {
    let {getDefaultRoleAssumer: l} = await import("./chunk-frmxhc1z.js").then(m => we(m.default));
    t.roleAssumer = l({
      ...t.clientConfig,
      credentialProviderLogger: t.logger,
      parentClientConfig: {
        ...t?.parentClientConfig,
        region: u ?? t?.parentClientConfig?.region
      }
    }, t.clientPlugins);
  }
  if (i && i in o) throw new P.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${N.getProfileName(t)}. Profiles visited: ` + Object.keys(o).join(", "), {
    logger: t.logger
  });
  t.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${i ? `source_profile=[${i}]` : `profile=[${e}]`}`);
  let g = i ? s(i, r, t, {
    ...o,
    [i]: !0
  }, F(r[i] ?? {})) : (await O(n.credential_source, e, t.logger)(t))();
  if (F(n)) return g.then(l => I.setCredentialFeature(l, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o")); else {
    let l = {
      RoleArn: n.role_arn,
      RoleSessionName: n.role_session_name || `aws-sdk-js-${Date.now()}`,
      ExternalId: n.external_id,
      DurationSeconds: parseInt(n.duration_seconds || "3600", 10)
    }, {mfa_serial: a} = n;
    if (a) {
      if (!t.mfaCodeProvider) throw new P.CredentialsProviderError(`Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`, {
        logger: t.logger,
        tryNextLink: !1
      });
      l.SerialNumber = a, l.TokenCode = await t.mfaCodeProvider(a);
    }
    let d = await g;
    return t.roleAssumer(d, l).then(c => I.setCredentialFeature(c, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
  }
}, F = e => !e.role_arn && !!e.credential_source;

var G = we(HP());

var q = we(HP()), M = we(Ym()), C = we(L0());

var f = we(Ym()), j = we(og()), W = we(L0());

import { createHash as ae, createPrivateKey as ce, createPublicKey as le, sign as de } from "crypto";

import { promises as T } from "fs";

import { homedir as fe } from "os";

import { dirname as ue, join as H } from "path";

class w {
  profileData;
  init;
  callerClientConfig;
  static REFRESH_THRESHOLD=3e5;
  constructor(e, r, t) {
    this.profileData = e, this.init = r, this.callerClientConfig = t;
  }
  async loadCredentials() {
    let e = await this.loadToken();
    if (!e) throw new f.CredentialsProviderError(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, {
      tryNextLink: !1,
      logger: this.logger
    });
    let r = e.accessToken, t = Date.now();
    if (new Date(r.expiresAt).getTime() - t <= w.REFRESH_THRESHOLD) return this.refresh(e);
    return {
      accessKeyId: r.accessKeyId,
      secretAccessKey: r.secretAccessKey,
      sessionToken: r.sessionToken,
      accountId: r.accountId,
      expiration: new Date(r.expiresAt)
    };
  }
  get logger() {
    return this.init?.logger;
  }
  get loginSession() {
    return this.profileData.login_session;
  }
  async refresh(e) {
    let {SigninClient: r, CreateOAuth2TokenCommand: t} = await import("./chunk-acfz6kga.js").then(m => we(m.default)), {logger: o, userAgentAppId: s} = this.callerClientConfig ?? {}, i = (a => a?.metadata?.handlerProtocol === "h2")(this.callerClientConfig?.requestHandler) ? void 0 : this.callerClientConfig?.requestHandler, u = this.profileData.region ?? await (this.callerClientConfig?.region?.()) ?? process.env.AWS_REGION, g = new r({
      credentials: {
        accessKeyId: "",
        secretAccessKey: ""
      },
      region: u,
      requestHandler: i,
      logger: o,
      userAgentAppId: s,
      ...this.init?.clientConfig
    });
    this.createDPoPInterceptor(g.middlewareStack);
    let l = {
      tokenInput: {
        clientId: e.clientId,
        refreshToken: e.refreshToken,
        grantType: "refresh_token"
      }
    };
    try {
      let a = await g.send(new t(l)), {accessKeyId: d, secretAccessKey: c, sessionToken: m} = a.tokenOutput?.accessToken ?? {}, {refreshToken: h, expiresIn: b} = a.tokenOutput ?? {};
      if (!d || !c || !m || !h) throw new f.CredentialsProviderError("Token refresh response missing required fields", {
        logger: this.logger,
        tryNextLink: !1
      });
      let E = (b ?? 900) * 1e3, p = new Date(Date.now() + E), D = {
        ...e,
        accessToken: {
          ...e.accessToken,
          accessKeyId: d,
          secretAccessKey: c,
          sessionToken: m,
          expiresAt: p.toISOString()
        },
        refreshToken: h
      };
      await this.saveToken(D);
      let y = D.accessToken;
      return {
        accessKeyId: y.accessKeyId,
        secretAccessKey: y.secretAccessKey,
        sessionToken: y.sessionToken,
        accountId: y.accountId,
        expiration: p
      };
    } catch (a) {
      if (a.name === "AccessDeniedException") {
        let d = a.error, c;
        switch (d) {
         case "TOKEN_EXPIRED":
          c = "Your session has expired. Please reauthenticate.";
          break;

         case "USER_CREDENTIALS_CHANGED":
          c = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
          break;

         case "INSUFFICIENT_PERMISSIONS":
          c = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
          break;

         default:
          c = `Failed to refresh token: ${String(a)}. Please re-authenticate using \`aws login\``;
        }
        throw new f.CredentialsProviderError(c, {
          logger: this.logger,
          tryNextLink: !1
        });
      }
      throw new f.CredentialsProviderError(`Failed to refresh token: ${String(a)}. Please re-authenticate using aws login`, {
        logger: this.logger
      });
    }
  }
  async loadToken() {
    let e = this.getTokenFilePath();
    try {
      let r;
      try {
        r = await W.readFile(e, {
          ignoreCache: this.init?.ignoreCache
        });
      } catch {
        r = await T.readFile(e, "utf8");
      }
      let t = JSON.parse(r), o = [ "accessToken", "clientId", "refreshToken", "dpopKey" ].filter(s => !t[s]);
      if (!t.accessToken?.accountId) o.push("accountId");
      if (o.length > 0) throw new f.CredentialsProviderError(`Token validation failed, missing fields: ${o.join(", ")}`, {
        logger: this.logger,
        tryNextLink: !1
      });
      return t;
    } catch (r) {
      throw new f.CredentialsProviderError(`Failed to load token from ${e}: ${String(r)}`, {
        logger: this.logger,
        tryNextLink: !1
      });
    }
  }
  async saveToken(e) {
    let r = this.getTokenFilePath(), t = ue(r);
    try {
      await T.mkdir(t, {
        recursive: !0
      });
    } catch (o) {}
    await T.writeFile(r, JSON.stringify(e, null, 2), "utf8");
  }
  getTokenFilePath() {
    let e = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? H(fe(), ".aws", "login", "cache"), r = Buffer.from(this.loginSession, "utf8"), t = ae("sha256").update(r).digest("hex");
    return H(e, `${t}.json`);
  }
  derToRawSignature(e) {
    let r = 2;
    if (e[r] !== 2) throw Error("Invalid DER signature");
    r++;
    let t = e[r++], o = e.subarray(r, r + t);
    if (r += t, e[r] !== 2) throw Error("Invalid DER signature");
    r++;
    let s = e[r++], n = e.subarray(r, r + s);
    o = o[0] === 0 ? o.subarray(1) : o, n = n[0] === 0 ? n.subarray(1) : n;
    let i = Buffer.concat([ Buffer.alloc(32 - o.length), o ]), u = Buffer.concat([ Buffer.alloc(32 - n.length), n ]);
    return Buffer.concat([ i, u ]);
  }
  createDPoPInterceptor(e) {
    e.add(r => async t => {
      if (j.HttpRequest.isInstance(t.request)) {
        let o = t.request, s = `${o.protocol}//${o.hostname}${o.port ? `:${o.port}` : ""}${o.path}`, n = await this.generateDpop(o.method, s);
        o.headers = {
          ...o.headers,
          DPoP: n
        };
      }
      return r(t);
    }, {
      step: "finalizeRequest",
      name: "dpopInterceptor",
      override: !0
    });
  }
  async generateDpop(e = "POST", r) {
    let t = await this.loadToken();
    try {
      let o = ce({
        key: t.dpopKey,
        format: "pem",
        type: "sec1"
      }), n = le(o).export({
        format: "der",
        type: "spki"
      }), i = -1;
      for (let p = 0; p < n.length; p++) if (n[p] === 4) {
        i = p;
        break;
      }
      let u = n.slice(i + 1, i + 33), g = n.slice(i + 33, i + 65), l = {
        alg: "ES256",
        typ: "dpop+jwt",
        jwk: {
          kty: "EC",
          crv: "P-256",
          x: u.toString("base64url"),
          y: g.toString("base64url")
        }
      }, a = {
        jti: crypto.randomUUID(),
        htm: e,
        htu: r,
        iat: Math.floor(Date.now() / 1e3)
      }, d = Buffer.from(JSON.stringify(l)).toString("base64url"), c = Buffer.from(JSON.stringify(a)).toString("base64url"), m = `${d}.${c}`, h = de("sha256", Buffer.from(m), o), E = this.derToRawSignature(h).toString("base64url");
      return `${m}.${E}`;
    } catch (o) {
      throw new f.CredentialsProviderError(`Failed to generate Dpop proof: ${o instanceof Error ? o.message : String(o)}`, {
        logger: this.logger,
        tryNextLink: !1
      });
    }
  }
}

var U = e => async ({callerClientConfig: r} = {}) => {
  e?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
  let t = await C.parseKnownFiles(e || {}), o = C.getProfileName({
    profile: e?.profile ?? r?.profile
  }), s = t[o];
  if (!s?.login_session) throw new M.CredentialsProviderError(`Profile ${o} does not contain login_session.`, {
    tryNextLink: !0,
    logger: e?.logger
  });
  let i = await new w(s, e, r).loadCredentials();
  return q.setCredentialFeature(i, "CREDENTIALS_LOGIN", "AD");
};

var J = e => Boolean(e && e.login_session), Y = async (e, r) => {
  let t = await U({
    ...r,
    profile: e
  })();
  return G.setCredentialFeature(t, "CREDENTIALS_PROFILE_LOGIN", "AC");
};

var z = we(HP()), V = e => Boolean(e) && typeof e === "object" && typeof e.credential_process === "string", X = async (e, r) => import("./chunk-xtaq9y54.js").then(({fromProcess: t}) => t({
  ...e,
  profile: r
})().then(o => z.setCredentialFeature(o, "CREDENTIALS_PROFILE_PROCESS", "v")));

var v = we(HP()), Q = async (e, r, t = {}) => {
  let {fromSSO: o} = await import("./chunk-n2wejb43.js");
  return o({
    profile: e,
    logger: t.logger,
    parentClientConfig: t.parentClientConfig,
    clientConfig: t.clientConfig
  })().then(s => {
    if (r.sso_session) return v.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO", "r"); else return v.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
  });
}, Z = e => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");

var ee = we(HP()), x = e => Boolean(e) && typeof e === "object" && typeof e.aws_access_key_id === "string" && typeof e.aws_secret_access_key === "string" && [ "undefined", "string" ].indexOf(typeof e.aws_session_token) > -1 && [ "undefined", "string" ].indexOf(typeof e.aws_account_id) > -1, R = async (e, r) => {
  r?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
  let t = {
    accessKeyId: e.aws_access_key_id,
    secretAccessKey: e.aws_secret_access_key,
    sessionToken: e.aws_session_token,
    ...e.aws_credential_scope && {
      credentialScope: e.aws_credential_scope
    },
    ...e.aws_account_id && {
      accountId: e.aws_account_id
    }
  };
  return ee.setCredentialFeature(t, "CREDENTIALS_PROFILE", "n");
};

var te = we(HP()), re = e => Boolean(e) && typeof e === "object" && typeof e.web_identity_token_file === "string" && typeof e.role_arn === "string" && [ "undefined", "string" ].indexOf(typeof e.role_session_name) > -1, oe = async (e, r) => import("./chunk-ssp3k9kf.js").then(({fromTokenFile: t}) => t({
  webIdentityTokenFile: e.web_identity_token_file,
  roleArn: e.role_arn,
  roleSessionName: e.role_session_name,
  roleAssumerWithWebIdentity: r.roleAssumerWithWebIdentity,
  logger: r.logger,
  parentClientConfig: r.parentClientConfig
})().then(o => te.setCredentialFeature(o, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));

var A = async (e, r, t, o = {}, s = !1) => {
  let n = r[e];
  if (Object.keys(o).length > 0 && x(n)) return R(n, t);
  if (s || K(n, {
    profile: e,
    logger: t.logger
  })) return B(e, r, t, o, A);
  if (x(n)) return R(n, t);
  if (re(n)) return oe(n, t);
  if (V(n)) return X(t, e);
  if (Z(n)) return await Q(e, n, t);
  if (J(n)) return Y(e, t);
  throw new ne.CredentialsProviderError(`Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`, {
    logger: t.logger
  });
};

var fwo = (e = {}) => async ({callerClientConfig: r} = {}) => {
  let t = {
    ...e,
    parentClientConfig: {
      ...r,
      ...e.parentClientConfig
    }
  };
  t.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
  let o = await k.parseKnownFiles(t);
  return A(k.getProfileName({
    profile: e.profile ?? r?.profile
  }), o, t);
};

export { fwo };
