// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var r;

r = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? import("crypto").then(e => e.webcrypto);

async function i(e) {
  return (await r).getRandomValues(new Uint8Array(e));
}

async function l(e) {
  let t = "", c = await i(e);
  for (let n = 0; n < e; n++) {
    let o = c[n] % 66;
    t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[o];
  }
  return t;
}

async function s(e) {
  return await l(e);
}

async function u(e) {
  let a = await (await r).subtle.digest("SHA-256", (new TextEncoder).encode(e));
  return btoa(String.fromCharCode(...new Uint8Array(a))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}

async function SGt(e) {
  if (!e) e = 43;
  if (e < 43 || e > 128) throw `Expected a length between 43 and 128. Received ${e}.`;
  let a = await s(e), t = await u(a);
  return {
    code_verifier: a,
    code_challenge: t
  };
}

export { SGt };
