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

var i = we(L0());

var c = we(Ym()), f = we(L0());

import { exec as w } from "child_process";

import { promisify as m } from "util";

var p = we(HP()), a = (r, e, o) => {
  if (e.Version !== 1) throw Error(`Profile ${r} credential_process did not return Version 1.`);
  if (e.AccessKeyId === void 0 || e.SecretAccessKey === void 0) throw Error(`Profile ${r} credential_process returned invalid credentials.`);
  if (e.Expiration) {
    let d = new Date;
    if (new Date(e.Expiration) < d) throw Error(`Profile ${r} credential_process returned expired credentials.`);
  }
  let s = e.AccountId;
  if (!s && o?.[r]?.aws_account_id) s = o[r].aws_account_id;
  let t = {
    accessKeyId: e.AccessKeyId,
    secretAccessKey: e.SecretAccessKey,
    ...e.SessionToken && {
      sessionToken: e.SessionToken
    },
    ...e.Expiration && {
      expiration: new Date(e.Expiration)
    },
    ...e.CredentialScope && {
      credentialScope: e.CredentialScope
    },
    ...s && {
      accountId: s
    }
  };
  return p.setCredentialFeature(t, "CREDENTIALS_PROCESS", "w"), t;
};

var u = async (r, e, o) => {
  let s = e[r];
  if (e[r]) {
    let t = s.credential_process;
    if (t !== void 0) {
      let d = m(f.externalDataInterceptor?.getTokenRecord?.().exec ?? w);
      try {
        let {stdout: n} = await d(t), l;
        try {
          l = JSON.parse(n.trim());
        } catch {
          throw Error(`Profile ${r} credential_process returned invalid JSON.`);
        }
        return a(r, l, e);
      } catch (n) {
        throw new c.CredentialsProviderError(n.message, {
          logger: o
        });
      }
    } else throw new c.CredentialsProviderError(`Profile ${r} did not contain credential_process.`, {
      logger: o
    });
  } else throw new c.CredentialsProviderError(`Profile ${r} could not be found in shared credentials file.`, {
    logger: o
  });
};

var h = (r = {}) => async ({callerClientConfig: e} = {}) => {
  r.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
  let o = await i.parseKnownFiles(r);
  return u(i.getProfileName({
    profile: r.profile ?? e?.profile
  }), o, r.logger);
};

export { h as fromProcess };
