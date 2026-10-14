// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { L0 } from "./chunk-qcf34wnk.js";

import { jjn } from "./chunk-hvtc51w3.js";

import { HP } from "./chunk-p5n1wfty.js";

import { Ym } from "./chunk-g7w8fv6g.js";

import { we } from "./chunk-m8ez8fhk.js";

var S = we(Ym()), m = we(L0());

var D = e => e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");

var y = we(HP());

var d = we(Ym()), F = we(L0()), h = !1, O = async ({ssoStartUrl: e, ssoSession: f, ssoAccountId: s, ssoRegion: n, ssoRoleName: r, ssoClient: i, clientConfig: a, parentClientConfig: _, profile: t, filepath: k, configFilepath: o, ignoreCache: u, logger: l}) => {
  let g, N = "To refresh this SSO session run aws sso login with the corresponding profile.";
  if (f) try {
    let c = await jjn({
      profile: t,
      filepath: k,
      configFilepath: o,
      ignoreCache: u
    })();
    g = {
      accessToken: c.token,
      expiresAt: new Date(c.expiration).toISOString()
    };
  } catch (c) {
    throw new d.CredentialsProviderError(c.message, {
      tryNextLink: h,
      logger: l
    });
  } else try {
    g = await F.getSSOTokenFromFile(e);
  } catch (c) {
    throw new d.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
      tryNextLink: h,
      logger: l
    });
  }
  if (new Date(g.expiresAt).getTime() - Date.now() <= 0) throw new d.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
    tryNextLink: h,
    logger: l
  });
  let {accessToken: C} = g, {SSOClient: A, GetRoleCredentialsCommand: p} = await import("./chunk-jj8kx204.js"), w = i || new A(Object.assign({}, a ?? {}, {
    logger: a?.logger ?? _?.logger,
    region: a?.region ?? n,
    userAgentAppId: a?.userAgentAppId ?? _?.userAgentAppId
  })), I;
  try {
    I = await w.send(new p({
      accountId: s,
      roleName: r,
      accessToken: C
    }));
  } catch (c) {
    throw new d.CredentialsProviderError(c, {
      tryNextLink: h,
      logger: l
    });
  }
  let {roleCredentials: {accessKeyId: L, secretAccessKey: R, sessionToken: T, expiration: v, credentialScope: P, accountId: E} = {}} = I;
  if (!L || !R || !T || !v) throw new d.CredentialsProviderError("SSO returns an invalid temporary credential.", {
    tryNextLink: h,
    logger: l
  });
  let x = {
    accessKeyId: L,
    secretAccessKey: R,
    sessionToken: T,
    expiration: new Date(v),
    ...P && {
      credentialScope: P
    },
    ...E && {
      accountId: E
    }
  };
  if (f) y.setCredentialFeature(x, "CREDENTIALS_SSO", "s"); else y.setCredentialFeature(x, "CREDENTIALS_SSO_LEGACY", "u");
  return x;
};

var M = we(Ym()), U = (e, f) => {
  let {sso_start_url: s, sso_account_id: n, sso_region: r, sso_role_name: i} = e;
  if (!s || !n || !r || !i) throw new M.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
    tryNextLink: !1,
    logger: f
  });
  return e;
};

var Y = (e = {}) => async ({callerClientConfig: f} = {}) => {
  e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
  let {ssoStartUrl: s, ssoAccountId: n, ssoRegion: r, ssoRoleName: i, ssoSession: a} = e, {ssoClient: _} = e, t = m.getProfileName({
    profile: e.profile ?? f?.profile
  });
  if (!s && !n && !r && !i && !a) {
    let o = (await m.parseKnownFiles(e))[t];
    if (!o) throw new S.CredentialsProviderError(`Profile ${t} was not found.`, {
      logger: e.logger
    });
    if (!D(o)) throw new S.CredentialsProviderError(`Profile ${t} is not configured with SSO credentials.`, {
      logger: e.logger
    });
    if (o?.sso_session) {
      let p = (await m.loadSsoSessionData(e))[o.sso_session], w = ` configurations in profile ${t} and sso-session ${o.sso_session}`;
      if (r && r !== p.sso_region) throw new S.CredentialsProviderError("Conflicting SSO region" + w, {
        tryNextLink: !1,
        logger: e.logger
      });
      if (s && s !== p.sso_start_url) throw new S.CredentialsProviderError("Conflicting SSO start_url" + w, {
        tryNextLink: !1,
        logger: e.logger
      });
      o.sso_region = p.sso_region, o.sso_start_url = p.sso_start_url;
    }
    let {sso_start_url: u, sso_account_id: l, sso_region: g, sso_role_name: N, sso_session: C} = U(o, e.logger);
    return O({
      ssoStartUrl: u,
      ssoSession: C,
      ssoAccountId: l,
      ssoRegion: g,
      ssoRoleName: N,
      ssoClient: _,
      clientConfig: e.clientConfig,
      parentClientConfig: e.parentClientConfig,
      profile: t,
      filepath: e.filepath,
      configFilepath: e.configFilepath,
      ignoreCache: e.ignoreCache,
      logger: e.logger
    });
  } else if (!s || !n || !r || !i) throw new S.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
    tryNextLink: !1,
    logger: e.logger
  }); else return O({
    ssoStartUrl: s,
    ssoSession: a,
    ssoAccountId: n,
    ssoRegion: r,
    ssoRoleName: i,
    ssoClient: _,
    clientConfig: e.clientConfig,
    parentClientConfig: e.parentClientConfig,
    profile: t,
    filepath: e.filepath,
    configFilepath: e.configFilepath,
    ignoreCache: e.ignoreCache,
    logger: e.logger
  });
};

export { Y as fromSSO };
