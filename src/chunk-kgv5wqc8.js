// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vps0k559.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-y752zmas.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { _, Y } from "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-0pmh7awy.js";

import "./chunk-07cck4g7.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-jkzenvsk.js";

import "./chunk-q6wab2jw.js";

import "./chunk-zvghq5er.js";

import "./chunk-30n0xq4e.js";

import "./chunk-2msx6erf.js";

import "./chunk-0cdqg49t.js";

import "./chunk-5brm0azz.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-wptm3jf5.js";

import "./chunk-j90se18b.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-r276nwd3.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-yxennhe9.js";

import "./chunk-rgd61mm3.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-x5881pc6.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import { aa } from "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-xywp7esx.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-mw643xee.js";

import "./chunk-qqd24q2y.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-8yperama.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-46phtgr7.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-2my8wpr5.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-hmce8a0s.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-y3nc3daq.js";

import "./chunk-pf1mhyjr.js";

import { TGe } from "./chunk-3w32ppw0.js";

import { fl } from "./chunk-548qpzj1.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

import { createPublicKey as l, verify as g } from "crypto";

function y(t) {
  let r = {
    header: !1,
    verify: !0,
    checkExpiry: !0,
    help: !1
  };
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    switch (n) {
     case "--help":
     case "-h":
      r.help = !0;
      break;

     case "--header":
      r.header = !0;
      break;

     case "--verify":
      r.verify = !0;
      break;

     case "--no-verify":
      r.verify = !1;
      break;

     case "--no-check-expiry":
      r.checkExpiry = !1;
      break;

     case "--api-url":
      {
        let o = t[++e];
        if (o === void 0) throw Error("decode-token: --api-url requires a value");
        r.apiUrl = o;
        break;
      }

     default:
      if (n.startsWith("-")) throw Error(`decode-token: unknown flag ${n}`);
      if (r.token !== void 0) throw Error("decode-token: at most one positional token argument");
      r.token = n;
    }
  }
  return r;
}

function w(t) {
  let e = t.trim().replace(/^sk-ant-[a-z0-9]+-/i, "").split(".");
  if (e.length !== 3 || !e[0] || !e[1] || !e[2]) throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments " + `(after stripping any sk-ant- prefix), got ${e.length}`);
  return {
    headerB64: e[0],
    payloadB64: e[1],
    signatureB64: e[2]
  };
}

function u(t, r) {
  if (!/^[A-Za-z0-9_-]+$/.test(t)) throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);
  let e = Buffer.from(t, "base64url").toString("utf8"), n;
  try {
    n = Y(e);
  } catch (o) {
    throw Error(`decode-token: ${r} is not valid JSON: ${o}`);
  }
  if (n === null || typeof n !== "object" || Array.isArray(n)) throw Error(`decode-token: ${r} is not a JSON object`);
  return n;
}

var E = {
  ES256: "EC",
  RS256: "RSA"
};

function S(t, r = Math.floor(Date.now() / 1e3), e = 60) {
  let {exp: n, nbf: o} = t;
  if (typeof n !== "number") throw Error("decode-token: token has no numeric `exp` claim");
  if (r > n + e) throw Error(`decode-token: token EXPIRED at ${new Date(n * 1e3).toISOString()} (${Math.round(r - n)}s ago)`);
  if (typeof o === "number" && r + e < o) throw Error(`decode-token: token not valid until ${new Date(o * 1e3).toISOString()}`);
}

async function m(t) {
  let r = t.header.alg, e = t.header.kid;
  if (typeof r !== "string" || typeof e !== "string") throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");
  let n = E[r];
  if (!n) throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);
  let o;
  try {
    o = await t.fetchFn(t.jwksUrl, {
      ...aa({
        url: t.jwksUrl
      }),
      signal: AbortSignal.timeout(3e4)
    });
  } catch (a) {
    throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`);
  }
  if (!o.ok) throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);
  let s = (await o.json()).keys?.find(a => a.kid === e);
  if (!s) throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 ` + "token may be signed by a different environment (try --api-url).");
  if (s.kty !== n) throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);
  let c = "sha256", d = r === "ES256" ? {
    key: l({
      key: s,
      format: "jwk"
    }),
    dsaEncoding: "ieee-p1363"
  } : {
    key: l({
      key: s,
      format: "jwk"
    })
  }, k = Buffer.from(`${t.headerB64}.${t.payloadB64}`, "utf8"), f = Buffer.from(t.signatureB64, "base64url");
  if (!g(c, k, d, f)) throw Error("decode-token: signature verification FAILED");
  if (t.checkExpiry !== !1) S(t.payload);
  return {
    kid: e
  };
}

var h = 16384, x = 5e3;

async function b(t = process.stdin) {
  if (t.isTTY) return "";
  let r = [], e = 0;
  for await (let n of t) {
    let o = Buffer.from(n);
    if (e += o.length, e > h) throw Error(`decode-token: stdin exceeds ${h / 1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);
    r.push(o);
  }
  return Buffer.concat(r).toString("utf8");
}

async function v(t, r, e = process.stdin, n = x) {
  if (t?.trim()) return t.trim();
  let o = r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();
  if (o) return o;
  let i = (await fl(b(e), n, "decode-token: reading token from stdin")).trim();
  if (i) return i;
  throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.");
}

var O = `Usage: claude self-hosted-runner decode-token [token] [options]\n\nDecode a session-ingress JWT (CLAUDE_CODE_SESSION_ACCESS_TOKEN) and print its\nclaims as JSON to stdout. Strips any sk-ant-cc- / sk-ant-si- prefix\nautomatically. Pipe to jq to extract a single claim.\n\nToken source (first non-empty wins):\n  1. Positional argument\n  2. $CLAUDE_CODE_SESSION_ACCESS_TOKEN\n  3. Piped stdin\n\nSignature verification against <api-url>/v1/code/.well-known/jwks.json is ON\nby default, as is the exp/nbf check (60s skew). Prints "verified (kid=\u2026,\nsig+exp)" to stderr on success; exits 1 on verification failure, expiry, or\nJWKS fetch error. Does NOT pin iss/aud/token-type \u2014 compare those from the\ndecoded claims if your auth model depends on them.\n\nOptions:\n  --header           Print the JWT header instead of the claims.\n  --no-verify        Skip signature verification and the JWKS fetch. For\n                     offline inspection only \u2014 do NOT feed the output to an\n                     auth decision.\n  --no-check-expiry  Skip the exp/nbf check (signature still verified). For\n                     forensics ("was this token ever issued by us?").\n  --api-url <url>    API base URL for JWKS fetch (default: $ANTHROPIC_BASE_URL\n                     or the built-in default).\n  --verify           (Deprecated \u2014 verification is the default. Kept so older\n                     wrapper scripts don't break.)\n  --help, -h         Show this help.\n\nExamples:\n  # In an --exec-path wrapper: who created this session? Signature is\n  # verified by default, so a tampered token exits non-zero here.\n  # Use jq -re (not -r) when the claim gates an auth decision \u2014 jq -r prints\n  # the literal string "null" and exits 0 when the claim is missing.\n  creator=$(claude self-hosted-runner decode-token | jq -re .act.email) \\\n    || { echo "session JWT: no creator identity or verification failed" >&2; exit 1; }\n\n  # Offline inspection (no network, no auth decision)\n  claude self-hosted-runner decode-token --no-verify\n\n  # Decode a different token by piping it (unset the env var first)\n  echo "$SOME_TOKEN" | env -u CLAUDE_CODE_SESSION_ACCESS_TOKEN \\\n    claude self-hosted-runner decode-token --no-verify\n`;

async function C(t) {
  let r;
  try {
    r = y(t);
  } catch (e) {
    process.stderr.write(`${e instanceof Error ? e.message : e}\n`), process.exit(1);
  }
  if (r.help) process.stdout.write(O), process.exit(0);
  try {
    let e = await v(r.token, process.env), {headerB64: n, payloadB64: o, signatureB64: i} = w(e), s = u(n, "header"), c = u(o, "payload");
    if (r.verify) {
      let f = `${(r.apiUrl ?? TGe()).replace(/\/+$/, "")}/v1/code/.well-known/jwks.json`, {kid: p} = await m({
        headerB64: n,
        payloadB64: o,
        signatureB64: i,
        header: s,
        payload: c,
        jwksUrl: f,
        fetchFn: fetch,
        checkExpiry: r.checkExpiry
      }), a = r.checkExpiry ? "sig+exp" : "sig only, exp SKIPPED";
      process.stderr.write(`verified (kid=${p}, ${a})\n`);
    }
    let d = r.header ? s : c;
    process.stdout.write(`${_(d, null, 2)}\n`), process.exit(0);
  } catch (e) {
    process.stderr.write(`${e instanceof Error ? e.message : e}\n`), process.exit(1);
  }
}

export { C as selfHostedRunnerDecodeTokenMain };
