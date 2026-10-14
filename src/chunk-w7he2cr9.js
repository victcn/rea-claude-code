// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Nc } from "./chunk-fzyt9ct7.js";

import { bwo } from "./chunk-nj8cgz8s.js";

import { HP } from "./chunk-p5n1wfty.js";

import "./chunk-w8hcbtxg.js";

import { Ym } from "./chunk-g7w8fv6g.js";

import { og, nD } from "./chunk-w4hwgefc.js";

import "./chunk-shz68fkm.js";

import { we } from "./chunk-m8ez8fhk.js";

var E = we(HP()), N = we(nD()), m = we(Ym());

import O from "fs/promises";

var A = we(Ym());

var w = "169.254.170.2", g = "169.254.170.23", S = "[fd00:ec2::23]", h = (e, o) => {
  if (e.protocol === "https:") return;
  if (e.hostname === w || e.hostname === g || e.hostname === S) return;
  if (e.hostname.includes("[")) {
    if (e.hostname === "[::1]" || e.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return;
  } else {
    if (e.hostname === "localhost") return;
    let n = e.hostname.split("."), r = t => {
      let s = parseInt(t, 10);
      return 0 <= s && s <= 255;
    };
    if (n[0] === "127" && r(n[1]) && r(n[2]) && r(n[3]) && n.length === 4) return;
  }
  throw new A.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:\n  - loopback CIDR 127.0.0.0/8 or [::1/128]\n  - ECS container host 169.254.170.2\n  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
    logger: o
  });
};

var i = we(Ym()), C = we(og()), l = we(Nc()), p = we(bwo());

function _(e) {
  return new C.HttpRequest({
    protocol: e.protocol,
    hostname: e.hostname,
    port: Number(e.port),
    path: e.pathname,
    query: Array.from(e.searchParams.entries()).reduce((o, [n, r]) => (o[n] = r, o), {}),
    fragment: e.hash
  });
}

async function I(e, o) {
  let r = await p.sdkStreamMixin(e.body).transformToString();
  if (e.statusCode === 200) {
    let t = JSON.parse(r);
    if (typeof t.AccessKeyId !== "string" || typeof t.SecretAccessKey !== "string" || typeof t.Token !== "string" || typeof t.Expiration !== "string") throw new i.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
      logger: o
    });
    return {
      accessKeyId: t.AccessKeyId,
      secretAccessKey: t.SecretAccessKey,
      sessionToken: t.Token,
      expiration: l.parseRfc3339DateTime(t.Expiration)
    };
  }
  if (e.statusCode >= 400 && e.statusCode < 500) {
    let t = {};
    try {
      t = JSON.parse(r);
    } catch (s) {}
    throw Object.assign(new i.CredentialsProviderError(`Server responded with status: ${e.statusCode}`, {
      logger: o
    }), {
      Code: t.Code,
      Message: t.Message
    });
  }
  throw new i.CredentialsProviderError(`Server responded with status: ${e.statusCode}`, {
    logger: o
  });
}

var f = (e, o, n) => async () => {
  for (let r = 0; r < o; ++r) try {
    return await e();
  } catch (t) {
    await new Promise(s => setTimeout(s, n));
  }
  return await e();
};

var L = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", y = "http://169.254.170.2", v = "AWS_CONTAINER_CREDENTIALS_FULL_URI", U = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE", k = "AWS_CONTAINER_AUTHORIZATION_TOKEN", H = (e = {}) => {
  e.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
  let o, n = e.awsContainerCredentialsRelativeUri ?? process.env[L], r = e.awsContainerCredentialsFullUri ?? process.env[v], t = e.awsContainerAuthorizationToken ?? process.env[k], s = e.awsContainerAuthorizationTokenFile ?? process.env[U], a = e.logger?.constructor?.name === "NoOpLogger" || !e.logger?.warn ? console.warn : e.logger.warn.bind(e.logger);
  if (n && r) a("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), 
  a("awsContainerCredentialsFullUri will take precedence.");
  if (t && s) a("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), 
  a("awsContainerAuthorizationToken will take precedence.");
  if (r) o = r; else if (n) o = `${y}${n}`; else throw new m.CredentialsProviderError(`No HTTP credential provider host provided.\nSet AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
    logger: e.logger
  });
  let T = new URL(o);
  h(T, e.logger);
  let u = N.NodeHttpHandler.create({
    requestTimeout: e.timeout ?? 1e3,
    connectionTimeout: e.timeout ?? 1e3
  });
  return f(async () => {
    let c = _(T);
    if (t) c.headers.Authorization = t; else if (s) c.headers.Authorization = (await O.readFile(s)).toString();
    try {
      let d = await u.handle(c);
      return I(d.response).then(R => E.setCredentialFeature(R, "CREDENTIALS_HTTP", "z"));
    } catch (d) {
      throw new m.CredentialsProviderError(String(d), {
        logger: e.logger
      });
    }
  }, e.maxRetries ?? 3, e.timeout ?? 1e3);
};

export { H as fromHttp };
