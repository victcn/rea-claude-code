// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { L0 } from "./chunk-qcf34wnk.js";

import { Ym } from "./chunk-g7w8fv6g.js";

import { we } from "./chunk-m8ez8fhk.js";

var S = we(Ym()), a = we(L0());

var g = 3e5, p = "To refresh this SSO session run 'aws sso login' with the corresponding profile.";

var k = async (e, o = {}) => {
  let {SSOOIDCClient: s} = await import("./chunk-y52s785v.js").then(m => we(m.default)), n = f => o.clientConfig?.[f] ?? o.parentClientConfig?.[f];
  return new s(Object.assign({}, o.clientConfig ?? {}, {
    region: e ?? o.clientConfig?.region,
    logger: n("logger"),
    userAgentAppId: n("userAgentAppId")
  }));
};

var h = async (e, o, s = {}) => {
  let {CreateTokenCommand: n} = await import("./chunk-y52s785v.js").then(m => we(m.default));
  return (await k(o, s)).send(new n({
    clientId: e.clientId,
    clientSecret: e.clientSecret,
    refreshToken: e.refreshToken,
    grantType: "refresh_token"
  }));
};

var u = we(Ym());

var w = e => {
  if (e.expiration && e.expiration.getTime() < Date.now()) throw new u.TokenProviderError(`Token is expired. ${p}`, !1);
};

var E = we(Ym());

var i = (e, o, s = !1) => {
  if (typeof o > "u") throw new E.TokenProviderError(`Value not present for '${e}' in SSO Token${s ? ". Cannot refresh" : ""}. ${p}`, !1);
};

var x = we(L0());

import { promises as A } from "fs";

var {writeFile: R} = A, O = (e, o) => {
  let s = x.getSSOTokenFilepath(e), n = JSON.stringify(o, null, 2);
  return R(s, n);
};

var C = new Date(0), jjn = (e = {}) => async ({callerClientConfig: o} = {}) => {
  let s = {
    ...e,
    parentClientConfig: {
      ...o,
      ...e.parentClientConfig
    }
  };
  s.logger?.debug("@aws-sdk/token-providers - fromSso");
  let n = await a.parseKnownFiles(s), c = a.getProfileName({
    profile: s.profile ?? o?.profile
  }), f = n[c];
  if (!f) throw new S.TokenProviderError(`Profile '${c}' could not be found in shared credentials file.`, !1); else if (!f.sso_session) throw new S.TokenProviderError(`Profile '${c}' is missing required property 'sso_session'.`);
  let m = f.sso_session, d = (await a.loadSsoSessionData(s))[m];
  if (!d) throw new S.TokenProviderError(`Sso session '${m}' could not be found in shared credentials file.`, !1);
  for (let t of [ "sso_start_url", "sso_region" ]) if (!d[t]) throw new S.TokenProviderError(`Sso session '${m}' is missing required property '${t}'.`, !1);
  let {sso_start_url: F, sso_region: _} = d, r;
  try {
    r = await a.getSSOTokenFromFile(m);
  } catch (t) {
    throw new S.TokenProviderError(`The SSO session token associated with profile=${c} was not found or is invalid. ${p}`, !1);
  }
  i("accessToken", r.accessToken), i("expiresAt", r.expiresAt);
  let {accessToken: y, expiresAt: I} = r, l = {
    token: y,
    expiration: new Date(I)
  };
  if (l.expiration.getTime() - Date.now() > g) return l;
  if (Date.now() - C.getTime() < 3e4) return w(l), l;
  i("clientId", r.clientId, !0), i("clientSecret", r.clientSecret, !0), i("refreshToken", r.refreshToken, !0);
  try {
    C.setTime(Date.now());
    let t = await h(r, _, s);
    i("accessToken", t.accessToken), i("expiresIn", t.expiresIn);
    let T = new Date(Date.now() + t.expiresIn * 1e3);
    try {
      await O(m, {
        ...r,
        accessToken: t.accessToken,
        expiresAt: T.toISOString(),
        refreshToken: t.refreshToken
      });
    } catch (v) {}
    return {
      token: t.accessToken,
      expiration: T
    };
  } catch (t) {
    return w(l), l;
  }
};

export { jjn };
