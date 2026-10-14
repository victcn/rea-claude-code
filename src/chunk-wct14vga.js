// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { s, n } from "./chunk-3vw306fv.js";

import { pe } from "./chunk-hwdwjvh8.js";

import { Ht } from "./chunk-nvtwm272.js";

import { I } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { w } from "./chunk-9rj1xaxr.js";

import { rt } from "./chunk-ytac37d4.js";

import { i } from "./chunk-hedpgw9m.js";

import { jut, zUe, GUe, NR, Owe, Qnn, ern, dBe } from "./chunk-xywp7esx.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { hn, Rn } from "./chunk-dd98x6x7.js";

import { $o } from "./chunk-cjt10y7b.js";

import { XP, Tb, n$, JP, JGn } from "./chunk-s2t7g8m9.js";

import { X1e, J1e, dX } from "./chunk-w4hwgefc.js";

import { wse } from "./chunk-gmq0qwep.js";

import { Pe } from "./chunk-7w995nyx.js";

import { bze, Qu, bc, PL, e_t, mmn } from "./chunk-q92x1heq.js";

import { Er } from "./chunk-t54wevgw.js";

import { Se } from "./chunk-sebqm9p5.js";

import { G } from "./chunk-j706jx8h.js";

import { qj } from "./chunk-g3vbtf8r.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { ct } from "./chunk-qk83zz02.js";

import { sr } from "./chunk-stbhy0k1.js";

import { Bx } from "./chunk-yz8yf8mg.js";

import { $r } from "./chunk-mggq5sa8.js";

import { ss } from "./chunk-wafhv2dx.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Vr, Hr, P, R, y, F } from "./chunk-cpyd3eya.js";

import { aEe } from "./chunk-shz68fkm.js";

import { we, S } from "./chunk-m8ez8fhk.js";

F();

var be = [ {
  type: "text",
  key: "accessKeyId",
  label: "Access key ID",
  placeholder: "AKIA\u2026",
  required: !0
}, {
  type: "text",
  key: "secretAccessKey",
  label: "Secret access key",
  mask: "*",
  required: !0
}, {
  type: "text",
  key: "sessionToken",
  label: "Session token",
  mask: "*",
  hint: () => "Only needed for temporary credentials from STS. Leave empty for long-lived keys."
} ];

function te() {
  let u = w(16), {goBack: o, goNext: d, updateWizardData: c, wizardData: l, title: t} = Qu();
  const m = l.accessKeyId ?? "", g = l.secretAccessKey ?? "", h = l.sessionToken ?? "";
  let B;
  if (u[0] !== m || u[1] !== g || u[2] !== h) B = {
    accessKeyId: m,
    secretAccessKey: g,
    sessionToken: h
  }, u[0] = m, u[1] = g, u[2] = h, u[3] = B; else B = u[3];
  let [p, A] = y(B), E;
  if (u[4] !== d || u[5] !== c || u[6] !== p.accessKeyId || u[7] !== p.secretAccessKey || u[8] !== p.sessionToken) E = () => {
    c({
      accessKeyId: p.accessKeyId.trim(),
      secretAccessKey: p.secretAccessKey.trim(),
      sessionToken: p.sessionToken.trim() || void 0
    }), d();
  }, u[4] = d, u[5] = c, u[6] = p.accessKeyId, u[7] = p.secretAccessKey, u[8] = p.sessionToken, 
  u[9] = E; else E = u[9];
  let k = E;
  const f = t ?? "Set up AWS Bedrock";
  let C;
  if (u[10] === S) C = (v, T) => A(_ => ({
    ..._,
    [v]: T
  })), u[10] = C; else C = u[10];
  let D;
  if (u[11] !== o || u[12] !== k || u[13] !== f || u[14] !== p) D = e(qj, {
    title: f,
    subtitle: "AWS access keys",
    fields: be,
    values: p,
    onChange: C,
    onSubmit: k,
    onCancel: o,
    submitLabel: "Continue"
  }), u[11] = o, u[12] = k, u[13] = f, u[14] = p, u[15] = D; else D = u[15];
  return D;
}

var b = {
  AUTH_METHOD: 0,
  PROFILE: 1,
  BEARER: 2,
  ACCESS_KEY_ID: 3,
  REGION: 4,
  VERIFY: 5,
  PIN_MODELS: 6,
  CONFIRM: 7
};

function ie() {
  let l = w(9), {goBack: o, goToStep: d, updateWizardData: c} = Qu(), t;
  if (l[0] === S) t = [ {
    label: "AWS profile (SSO or named profile)",
    value: "profile"
  }, {
    label: "Bedrock API key (bearer token)",
    value: "bearer"
  }, {
    label: "Access key + secret",
    value: "accessKey"
  }, {
    label: "Use credentials already in my environment",
    value: "environment"
  } ], l[0] = t; else t = l[0];
  let m = t, g;
  if (l[1] === S) g = {
    profile: b.PROFILE,
    bearer: b.BEARER,
    accessKey: b.ACCESS_KEY_ID,
    environment: b.REGION
  }, l[1] = g; else g = l[1];
  let h = g, u;
  if (l[2] !== d || l[3] !== c) u = B => {
    let p = B;
    c({
      authMethod: p
    }), d(h[p]);
  }, l[2] = d, l[3] = c, l[4] = u; else u = l[4];
  let A = u, E;
  if (l[5] === S) E = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI."
  }), l[5] = E; else E = l[5];
  let k;
  if (l[6] !== o || l[7] !== A) k = e(bc, {
    subtitle: "How do you authenticate to AWS?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ E, e(Xe, {
        options: m,
        onChange: A,
        onCancel: o
      }) ]
    })
  }), l[6] = o, l[7] = A, l[8] = k; else k = l[8];
  return k;
}

F();

function se() {
  let p = w(17), {goBack: o, goToStep: d, updateWizardData: c, wizardData: l} = Qu(), [t, m] = y(l.bearerToken ?? ""), [g, h] = y(t.length), [u, B] = y(null), A;
  if (p[0] === S) A = {
    context: "Settings"
  }, p[0] = A; else A = p[0];
  rt("confirm:no", o, A);
  let E;
  if (p[1] !== d || p[2] !== c || p[3] !== t) E = () => {
    let k = t.trim();
    if (!k) {
      B("API key is required");
      return;
    }
    B(null), c({
      bearerToken: k
    }), d(b.REGION);
  }, p[1] = d, p[2] = c, p[3] = t, p[4] = E; else E = p[4];
  let f = E, C;
  if (p[5] === S) C = r(Se, {
    children: [ e(G, {
      chord: "enter",
      action: "continue"
    }), e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    }) ]
  }), p[5] = C; else C = p[5];
  let v, T;
  if (p[6] === S) v = e(n, {
    children: "Paste your Bedrock API key."
  }), T = e(n, {
    dimColor: !0,
    children: "Generate one in the AWS console under Bedrock \u2192 API keys."
  }), p[6] = v, p[7] = T; else v = p[6], T = p[7];
  let _;
  if (p[8] !== g || p[9] !== f || p[10] !== t) _ = e(s, {
    marginTop: 1,
    children: e(Er, {
      value: t,
      onChange: m,
      onSubmit: f,
      placeholder: "bedrock-api-key-\u2026",
      mask: "*",
      columns: 60,
      cursorOffset: g,
      onChangeCursorOffset: h,
      focus: !0,
      showCursor: !0
    })
  }), p[8] = g, p[9] = f, p[10] = t, p[11] = _; else _ = p[11];
  let D;
  if (p[12] !== u) D = u && e(s, {
    marginTop: 1,
    children: e(ss, {
      error: u
    })
  }), p[12] = u, p[13] = D; else D = p[13];
  let O;
  if (p[14] !== _ || p[15] !== D) O = e(bc, {
    subtitle: "Bedrock API key",
    footerText: C,
    children: r(s, {
      flexDirection: "column",
      children: [ v, T, _, D ]
    })
  }), p[14] = _, p[15] = D, p[16] = O; else O = p[16];
  return O;
}

F();

function Zr(H) {
  return H[1] !== void 0;
}

function eo(o) {
  let [V, U] = o;
  return r(n, {
    children: [ "  ", e(n, {
      color: "suggestion",
      children: V
    }), " =", " ", ze.has(V) ? e(n, {
      dimColor: !0,
      children: "(hidden)"
    }) : U ]
  }, V);
}

function Ie(o) {
  let d = {
    CLAUDE_CODE_USE_BEDROCK: "1",
    CLAUDE_CODE_USE_VERTEX: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    AWS_REGION: o.region,
    AWS_PROFILE: void 0,
    AWS_BEARER_TOKEN_BEDROCK: void 0,
    AWS_ACCESS_KEY_ID: void 0,
    AWS_SECRET_ACCESS_KEY: void 0,
    AWS_SESSION_TOKEN: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0
  };
  switch (o.authMethod) {
   case "profile":
    d.AWS_PROFILE = o.awsProfile;
    break;

   case "bearer":
    d.AWS_BEARER_TOKEN_BEDROCK = o.bearerToken;
    break;

   case "accessKey":
    if (d.AWS_ACCESS_KEY_ID = o.accessKeyId, d.AWS_SECRET_ACCESS_KEY = o.secretAccessKey, 
    o.sessionToken) d.AWS_SESSION_TOKEN = o.sessionToken;
    break;

   case "environment":
   case void 0:
    break;
  }
  if (o.pinSonnet) d.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) d.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) d.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) d.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return d;
}

var ze = new Set([ "AWS_BEARER_TOKEN_BEDROCK", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN" ]);

function de(o) {
  let h = w(31), {onComplete: d} = o, {storageV5: c} = Pe(), {goBack: l, wizardData: t} = Qu(), [m, g] = y(null), u;
  if (h[0] === S) u = Os(hn("userSettings") ?? "~/.claude/settings.json"), h[0] = u; else u = h[0];
  let B = u, p;
  if (h[1] !== t) p = Ie(t), h[1] = t, h[2] = p; else p = h[2];
  let A = p, E;
  if (h[3] !== A) E = Object.entries(A).filter(Zr), h[3] = A, h[4] = E; else E = h[4];
  let k = E, f = R(!1), C;
  if (h[5] !== A || h[6] !== d || h[7] !== c || h[8] !== t.authMethod || h[9] !== t.awsProfile || h[10] !== t.pinFable || h[11] !== t.pinHaiku || h[12] !== t.pinOpus || h[13] !== t.pinSonnet || h[14] !== t.verifiedIdentity) C = async () => {
    if (f.current) {
      return;
    }
    f.current = !0;
    let {error: v} = await Rn("userSettings", {
      env: A
    }, void 0, c);
    if (v) {
      f.current = !1, g(v.message);
      return;
    }
    i("tengu_bedrock_setup_complete", {
      auth_method: pe(t.authMethod),
      pinned_models: Boolean(t.pinSonnet || t.pinOpus || t.pinFable || t.pinHaiku),
      verified: Boolean(t.verifiedIdentity)
    }), d(`Bedrock configuration saved to ${B}.${t.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${t.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`);
  }, h[5] = A, h[6] = d, h[7] = c, h[8] = t.authMethod, h[9] = t.awsProfile, h[10] = t.pinFable, 
  h[11] = t.pinHaiku, h[12] = t.pinOpus, h[13] = t.pinSonnet, h[14] = t.verifiedIdentity, 
  h[15] = C; else C = h[15];
  let T = C, _;
  if (h[16] === S) _ = r(n, {
    children: [ "These will be written to ", B, " under env:" ]
  }), h[16] = _; else _ = h[16];
  let D;
  if (h[17] !== k) D = e(s, {
    flexDirection: "column",
    children: k.map(eo)
  }), h[17] = k, h[18] = D; else D = h[18];
  let O;
  if (h[19] !== t.verifiedIdentity) O = t.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [ e(ct, {
      status: "success",
      withSpace: !0
    }), "Verified as ", t.verifiedIdentity ]
  }), h[19] = t.verifiedIdentity, h[20] = O; else O = h[20];
  let j;
  if (h[21] !== m) j = e(ss, {
    error: m
  }), h[21] = m, h[22] = j; else j = h[22];
  let X;
  if (h[23] !== l || h[24] !== T) X = e(sr, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: T,
    onCancel: l
  }), h[23] = l, h[24] = T, h[25] = X; else X = h[25];
  let Te;
  if (h[26] !== D || h[27] !== O || h[28] !== j || h[29] !== X) Te = e(bc, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ _, D, O, j, X ]
    })
  }), h[26] = D, h[27] = O, h[28] = j, h[29] = X, h[30] = Te; else Te = h[30];
  return Te;
}

var Ke = we(aEe(), 1);

var Q = "Bedrock setup verification timed out";

function le(o) {
  let d = GUe(o), c = l => {
    let t = $o[l].bedrock;
    if (t === null) throw Error("A DEFAULT_3P_*_KEY points at a model config with bedrock: null \u2014 Bedrock setup has no fallback id for that tier");
    return {
      needle: $o[l].firstParty,
      fallback: zUe(t, d)
    };
  };
  return {
    sonnet: c(NR),
    opus: c(Qnn),
    haiku: c(Owe),
    fable: c(ern)
  };
}

async function ue(o) {
  if (o.authMethod === "bearer") return to(o);
  let d = JGn();
  try {
    let c = await Le(o), t = {
      ...await J1e({
        url: `https://bedrock.${o.region}.amazonaws.com`,
        region: o.region,
        requestTimeoutMs: dBe
      }),
      region: o.region,
      ...c && {
        credentials: c
      }
    }, {STSClient: m, GetCallerIdentityCommand: g} = await import("./chunk-vnmsj70h.js"), h = await Ht(new m(t).send(new g({})), d, Q), u = h.Arn ?? h.UserId ?? "(unknown)", {BedrockClient: B, ListInferenceProfilesCommand: p} = await import("./chunk-3gxmzw7z.js"), A = new B(t), E = [], k;
    do {
      let f = await Ht(A.send(new p({
        ...k && {
          nextToken: k
        },
        typeEquals: "SYSTEM_DEFINED"
      })), d, Q);
      for (let C of f.inferenceProfileSummaries ?? []) if (C.inferenceProfileId?.includes("anthropic")) E.push(C.inferenceProfileId);
      k = f.nextToken;
    } while (k);
    return {
      status: "ok",
      identity: u,
      profiles: E
    };
  } catch (c) {
    return {
      status: "error",
      ...io(c, o, d)
    };
  }
}

async function fe(o, d) {
  return mmn(() => ro(o), d, c => c instanceof Error && (c.message === Q || Ue(c)) ? "network" : "auth");
}

async function ro(o) {
  let [{AnthropicBedrock: d}, {getProxyFetchOptions: c}] = await Promise.all([ import("./chunk-vwn56h2n.js"), import("./chunk-adh1rnwr.js") ]), l = {
    awsRegion: o.region,
    maxRetries: 0,
    fetchOptions: c({
      url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o.region}.amazonaws.com`
    })
  }, t = await oo(o), m = wse(), g = {
    authToken: null,
    defaultHeaders: {
      ...m,
      ...Tb(),
      ...n$(),
      Authorization: null,
      ...!XP() && {
        "X-Api-Key": null
      }
    },
    ...JP
  };
  switch (t.kind) {
   case "bearer":
    return new d({
      ...l,
      apiKey: t.token,
      defaultHeaders: {
        ...m,
        ...Tb(),
        ...n$(),
        Authorization: `Bearer ${t.token}`,
        ...!XP() && {
          "X-Api-Key": null
        }
      }
    });

   case "sigv4":
    return new d({
      ...l,
      ...g,
      awsAccessKey: t.accessKeyId,
      awsSecretKey: t.secretAccessKey,
      awsSessionToken: t.sessionToken
    });

   case "default":
    {
      let h = a.AWS_BEARER_TOKEN_BEDROCK;
      if (h) return new d({
        ...l,
        apiKey: h,
        defaultHeaders: {
          ...m,
          ...Tb(),
          ...n$(),
          Authorization: `Bearer ${h}`,
          ...!XP() && {
            "X-Api-Key": null
          }
        }
      });
      return new d({
        ...l,
        ...g,
        providerChainResolver: () => Fe(o, void 0)
      });
    }
  }
}

async function oo(o) {
  if (o.authMethod === "bearer") return {
    kind: "bearer",
    token: o.bearerToken
  };
  let d = await Le(o);
  if (!d) return {
    kind: "default"
  };
  let c = await d();
  return {
    kind: "sigv4",
    accessKeyId: c.accessKeyId,
    secretAccessKey: c.secretAccessKey,
    sessionToken: c.sessionToken
  };
}

async function to(o) {
  let d = le(o.region).haiku.fallback, c = await fe(o, d);
  if (c.ok) return {
    status: "ok",
    identity: "Bedrock API key",
    profiles: [],
    note: `Test request to ${d} succeeded.`
  };
  switch (c.reason) {
   case "auth":
    return {
      status: "error",
      error: "Invalid Bedrock API key. Check the key and try again."
    };

   case "permission":
    return {
      status: "error",
      error: "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel."
    };

   case "model":
    return {
      status: "ok",
      identity: "Bedrock API key",
      profiles: [],
      note: `The key works, but ${d} is not enabled in your account. Pin a model you have access to on the next step.`
    };

   case "network":
    return {
      status: "error",
      error: `Could not reach Bedrock in region "${o.region}". Check the region name and your network.`
    };

   case "other":
    return {
      status: "error",
      error: "The test request failed. Check the key and region."
    };
  }
}

async function Le(o) {
  switch (o.authMethod) {
   case "profile":
    return Fe(o, o.awsProfile);

   case "accessKey":
    return async () => ({
      accessKeyId: o.accessKeyId,
      secretAccessKey: o.secretAccessKey,
      ...o.sessionToken && {
        sessionToken: o.sessionToken
      }
    });

   case "environment":
    return;

   default:
    return;
  }
}

async function Fe(o, d) {
  let [{fromNodeProviderChain: c}, l] = await Promise.all([ import("./chunk-bjsm86dj.js"), dX({
    url: X1e(String(o.region)),
    requestTimeoutMs: dBe
  }) ]), t = l ?? new Ke.FetchHttpHandler({
    requestTimeout: dBe
  }), m = c({
    profile: d,
    ignoreCache: !0,
    parentClientConfig: {
      region: o.region,
      requestHandler: t
    },
    clientConfig: {
      requestHandler: t
    }
  });
  return g => Ht(m(g), JGn(), Q);
}

function Ue(o) {
  return o?.name === "TimeoutError" || o?.name === "CredentialsProviderError" && (o.message ?? "").startsWith("TimeoutError:");
}

function io(o, d, c) {
  let l = o, t = l?.name ?? "Error", m = l?.message ?? String(o);
  if (m === Q) return {
    error: `Timed out after ${Math.ceil(c / 1e3)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.`
  };
  if (Ue(l)) return {
    error: "A request to AWS timed out. Check your network and proxy settings, then try again."
  };
  let g = d.authMethod === "profile" ? `aws sso login --profile ${d.awsProfile}` : void 0;
  switch (t) {
   case "CredentialsProviderError":
    return d.authMethod === "profile" ? {
      error: `Could not load credentials for profile "${d.awsProfile}". If this is an SSO profile, run:`,
      command: g
    } : {
      error: `No AWS credentials found. ${m}`
    };

   case "ExpiredTokenException":
   case "TokenRefreshRequired":
    return d.authMethod === "profile" ? {
      error: "SSO session expired. Run:",
      command: g
    } : {
      error: `Credentials expired. ${m}`
    };

   case "ForbiddenException":
    return d.authMethod === "profile" ? {
      error: `SSO portal denied access to the role for profile "${d.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`
    } : {
      error: `Forbidden. ${m}`
    };

   case "AccessDeniedException":
    return {
      error: `Access denied. Your IAM role needs bedrock:ListInferenceProfiles permission. ${m}`
    };

   case "UnrecognizedClientException":
   case "InvalidSignatureException":
    return {
      error: `Invalid credentials. ${m}`
    };

   case "UnknownEndpoint":
   case "ENOTFOUND":
    return {
      error: `Cannot reach AWS in region "${d.region}". Check the region name and your network.`
    };

   default:
    return {
      error: `${t}: ${m}`
    };
  }
}

function He(o, d) {
  return (o.discoveredProfiles ?? []).filter(c => c.toLowerCase().includes(d));
}

var $e = {
  reasonLabel: {
    auth: "auth failed",
    permission: "no InvokeModel permission",
    model: "not enabled in this account",
    network: "unreachable",
    other: "request failed"
  },
  intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it \u2014 Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have.",
  resolveTierDefaults: o => {
    let d = le(o.region), c = GUe(o.region);
    return Object.fromEntries(PL.map(l => [ l, {
      auto: jut(o.discoveredProfiles ?? [], d[l].needle, c) ?? void 0,
      fallback: d[l].fallback
    } ]));
  },
  listTierCandidates: (o, d) => He(d, o).sort().reverse(),
  pickerSubtitle: (o, d) => {
    let c = He(d, o).length;
    return c > 0 ? `${c} ${Bx[o]} ${I(c, "profile")} in your account \xb7 each tested with a one-token request.` : `No ${Bx[o]} profiles found in your account.`;
  },
  probe: (o, d) => fe(o, d)
};

function me() {
  let d = w(2), {updateWizardData: o} = Qu(), c;
  if (d[0] !== o) c = e(e_t, {
    provider: $e,
    onPins: o
  }), d[0] = o, d[1] = c; else c = d[1];
  return c;
}

F();

import { readFile as so } from "fs/promises";

import { homedir as ao } from "os";

import { join as Ve } from "path";

async function ge() {
  let o = new Set, d = ao();
  for (let {path: c, re: l} of [ {
    path: Ve(d, ".aws", "config"),
    re: /^\[(?:profile\s+)?([^\]]+)\]/gm
  }, {
    path: Ve(d, ".aws", "credentials"),
    re: /^\[([^\]]+)\]/gm
  } ]) try {
    for (let t of (await so(c, "utf8")).matchAll(l)) {
      let m = t[1]?.trim();
      if (m && !m.startsWith("sso-session ")) o.add(m);
    }
  } catch {}
  return [ ...o ].sort();
}

function Ao() {
  return [];
}

function Eo() {
  return ge().catch(Ao);
}

function Do(Mo) {
  return Mo.toLowerCase().includes("bedrock");
}

function wo(gr) {
  return {
    label: gr,
    value: gr
  };
}

var ee = "__manual__", qe = 12;

function Ee() {
  let d = w(3), [o] = y(Eo), c;
  if (d[0] === S) c = e(bc, {
    subtitle: "AWS profile",
    children: e($r, {
      message: "Reading ~/.aws/config\u2026"
    })
  }), d[0] = c; else c = d[0];
  let l;
  if (d[1] !== o) l = e(Vr, {
    fallback: c,
    children: e(Ce, {
      profilesPromise: o
    })
  }), d[1] = o, d[2] = l; else l = d[2];
  return l;
}

function Ce(o) {
  let u = w(52), {profilesPromise: d} = o, c = Hr(d), {goBack: l, goToStep: t, updateWizardData: m, wizardData: g} = Qu(), h = c.length > qe, B;
  if (u[0] !== c || u[1] !== g.awsProfile) B = g.awsProfile && !c.includes(g.awsProfile), 
  u[0] = c, u[1] = g.awsProfile, u[2] = B; else B = u[2];
  let p = Boolean(B), [A, E] = y(c.length === 0 || h || p), k;
  if (u[3] !== c || u[4] !== h) k = h ? c.find(Do) : void 0, u[3] = c, u[4] = h, u[5] = k; else k = u[5];
  let f = k, [C, v] = y(g.awsProfile ?? f ?? ""), [T, _] = y(C.length), [D, O] = y(null), j;
  if (u[6] !== A) j = {
    context: "Settings",
    isActive: A
  }, u[6] = A, u[7] = j; else j = u[7];
  rt("confirm:no", l, j);
  let X;
  if (u[8] !== t || u[9] !== m) X = Te => {
    m({
      awsProfile: Te
    }), t(b.REGION);
  }, u[8] = t, u[9] = m, u[10] = X; else X = u[10];
  let H = X;
  if (!A) {
    const V = c.length;
    let U;
    if (u[11] !== c.length) U = I(c.length, "profile"), u[11] = c.length, u[12] = U; else U = u[12];
    let q;
    if (u[13] !== c.length || u[14] !== U) q = r(n, {
      dimColor: !0,
      children: [ "Found ", V, " ", U, " in ~/.aws/config and ~/.aws/credentials." ]
    }), u[13] = c.length, u[14] = U, u[15] = q; else q = u[15];
    let M;
    if (u[16] !== c) {
      let z;
      if (u[18] === S) z = {
        label: "Type a different name\u2026",
        value: ee
      }, u[18] = z; else z = u[18];
      M = [ ...c.map(wo), z ];
      u[16] = c, u[17] = M;
    } else M = u[17];
    let z;
    if (u[19] !== c || u[20] !== g.awsProfile) z = g.awsProfile && c.includes(g.awsProfile) ? g.awsProfile : void 0, 
    u[19] = c, u[20] = g.awsProfile, u[21] = z; else z = u[21];
    let K;
    if (u[22] !== H) K = mr => {
      if (mr === ee) E(!0); else H(mr);
    }, u[22] = H, u[23] = K; else K = u[23];
    let L;
    if (u[24] !== l || u[25] !== K || u[26] !== M || u[27] !== z) L = e(Xe, {
      options: M,
      defaultValue: z,
      onChange: K,
      onCancel: l
    }), u[24] = l, u[25] = K, u[26] = M, u[27] = z, u[28] = L; else L = u[28];
    let J;
    if (u[29] !== L || u[30] !== q) J = e(bc, {
      subtitle: "AWS profile",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [ q, L ]
      })
    }), u[29] = L, u[30] = q, u[31] = J; else J = u[31];
    return J;
  }
  let V;
  if (u[32] !== H || u[33] !== C) V = () => {
    let pr = C.trim();
    if (!pr) {
      O("Profile name is required");
      return;
    }
    O(null), H(pr);
  }, u[32] = H, u[33] = C, u[34] = V; else V = u[34];
  let ve = V, U;
  if (u[35] === S) U = r(Se, {
    children: [ e(G, {
      chord: "enter",
      action: "continue"
    }), e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    }) ]
  }), u[35] = U; else U = u[35];
  let q;
  if (u[36] === S) q = e(n, {
    children: "The name from ~/.aws/config (after [profile \u2026])."
  }), u[36] = q; else q = u[36];
  let M;
  if (u[37] !== f || u[38] !== c.length || u[39] !== h) M = h && r(n, {
    dimColor: !0,
    children: [ "Found ", c.length, " profiles \u2014 too many to list.", f && ` Prepopulated with "${f}".` ]
  }), u[37] = f, u[38] = c.length, u[39] = h, u[40] = M; else M = u[40];
  let z;
  if (u[41] === S) z = e(n, {
    dimColor: !0,
    children: "If this is an SSO profile, run `aws sso login --profile NAME` first."
  }), u[41] = z; else z = u[41];
  let K;
  if (u[42] !== T || u[43] !== ve || u[44] !== C) K = e(s, {
    marginTop: 1,
    children: e(Er, {
      value: C,
      onChange: v,
      onSubmit: ve,
      placeholder: "my-bedrock-profile",
      columns: 60,
      cursorOffset: T,
      onChangeCursorOffset: _,
      focus: !0,
      showCursor: !0
    })
  }), u[42] = T, u[43] = ve, u[44] = C, u[45] = K; else K = u[45];
  let L;
  if (u[46] !== D) L = D && e(s, {
    marginTop: 1,
    children: e(ss, {
      error: D
    })
  }), u[46] = D, u[47] = L; else L = u[47];
  let J;
  if (u[48] !== K || u[49] !== L || u[50] !== M) J = e(bc, {
    subtitle: "AWS profile name",
    footerText: U,
    children: r(s, {
      flexDirection: "column",
      children: [ q, M, z, K, L ]
    })
  }), u[48] = K, u[49] = L, u[50] = M, u[51] = J; else J = u[51];
  return J;
}

F();

function De() {
  let p = w(17), {goBack: o, goNext: d, updateWizardData: c, wizardData: l} = Qu(), [t, m] = y(l.region ?? "us-east-1"), [g, h] = y(t.length), [u, B] = y(null), A;
  if (p[0] === S) A = {
    context: "Settings"
  }, p[0] = A; else A = p[0];
  rt("confirm:no", o, A);
  let E;
  if (p[1] !== d || p[2] !== c || p[3] !== t) E = () => {
    let k = t.trim();
    if (!k) {
      B("Region is required");
      return;
    }
    B(null), c({
      region: k
    }), d();
  }, p[1] = d, p[2] = c, p[3] = t, p[4] = E; else E = p[4];
  let f = E, C;
  if (p[5] === S) C = r(Se, {
    children: [ e(G, {
      chord: "enter",
      action: "continue"
    }), e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    }) ]
  }), p[5] = C; else C = p[5];
  let v, T;
  if (p[6] === S) v = e(n, {
    children: "Where your Bedrock models are enabled."
  }), T = e(n, {
    dimColor: !0,
    children: "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region."
  }), p[6] = v, p[7] = T; else v = p[6], T = p[7];
  let _;
  if (p[8] !== g || p[9] !== f || p[10] !== t) _ = e(s, {
    marginTop: 1,
    children: e(Er, {
      value: t,
      onChange: m,
      onSubmit: f,
      placeholder: "us-east-1",
      columns: 40,
      cursorOffset: g,
      onChangeCursorOffset: h,
      focus: !0,
      showCursor: !0
    })
  }), p[8] = g, p[9] = f, p[10] = t, p[11] = _; else _ = p[11];
  let D;
  if (p[12] !== u) D = u && e(s, {
    marginTop: 1,
    children: e(ss, {
      error: u
    })
  }), p[12] = u, p[13] = D; else D = p[13];
  let O;
  if (p[14] !== _ || p[15] !== D) O = e(bc, {
    subtitle: "AWS region",
    footerText: C,
    children: r(s, {
      flexDirection: "column",
      children: [ v, T, _, D ]
    })
  }), p[14] = _, p[15] = D, p[16] = O; else O = p[16];
  return O;
}

F();

function _e() {
  let t = w(39), {goBack: o, goNext: d, updateWizardData: c, wizardData: l} = Qu(), m;
  if (t[0] === S) m = {
    phase: "checking"
  }, t[0] = m; else m = t[0];
  let [g, h] = y(m), u;
  if (t[1] !== c || t[2] !== l) u = () => {
    let B = !1;
    return ue(l).then(p => {
      if (B) {
        return;
      }
      if (p.status === "ok") c({
        verifiedIdentity: p.identity,
        discoveredProfiles: p.profiles
      }); else c({
        verifiedIdentity: void 0,
        discoveredProfiles: void 0
      });
      h({
        phase: "done",
        result: p
      });
    }), () => {
      B = !0;
    };
  }, t[1] = c, t[2] = l, t[3] = u; else u = t[3];
  let A;
  if (t[4] === S) A = [], t[4] = A; else A = t[4];
  if (P(u, A), g.phase === "checking") {
    const E = l.authMethod === "bearer" ? "Sending a test request to Bedrock\u2026" : "Calling AWS STS and Bedrock\u2026";
    let k;
    if (t[5] !== E) k = e(bc, {
      subtitle: "Verifying credentials",
      children: e($r, {
        message: E,
        subtitle: "This may take a few seconds."
      })
    }), t[5] = E, t[6] = k; else k = t[6];
    return k;
  }
  let {result: f} = g;
  switch (f.status) {
   case "ok":
    {
      let E;
      if (t[7] === S) E = e(ct, {
        status: "success",
        withSpace: !0
      }), t[7] = E; else E = t[7];
      let k;
      if (t[8] !== f.identity) k = r(n, {
        children: [ E, "Authenticated as ", e(n, {
          bold: !0,
          children: f.identity
        }) ]
      }), t[8] = f.identity, t[9] = k; else k = t[9];
      let C;
      if (t[10] !== f.note || t[11] !== f.profiles) C = f.note ?? (f.profiles.length > 0 ? `Found ${f.profiles.length} Anthropic inference ${I(f.profiles.length, "profile")} in this region.` : "No Anthropic inference profiles found in this region. You may still proceed \u2014 model defaults will use the built-in IDs."), 
      t[10] = f.note, t[11] = f.profiles, t[12] = C; else C = t[12];
      let v;
      if (t[13] !== C) v = e(n, {
        dimColor: !0,
        children: C
      }), t[13] = C, t[14] = v; else v = t[14];
      let T;
      if (t[15] === S) T = [ {
        label: "Continue",
        value: "continue"
      } ], t[15] = T; else T = t[15];
      let _;
      if (t[16] !== d) _ = () => d(), t[16] = d, t[17] = _; else _ = t[17];
      let D;
      if (t[18] !== o || t[19] !== _) D = e(Xe, {
        options: T,
        onChange: _,
        onCancel: o
      }), t[18] = o, t[19] = _, t[20] = D; else D = t[20];
      let O;
      if (t[21] !== k || t[22] !== v || t[23] !== D) O = e(bc, {
        subtitle: "Verification",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [ k, v, D ]
        })
      }), t[21] = k, t[22] = v, t[23] = D, t[24] = O; else O = t[24];
      return O;
    }

   case "error":
    {
      let E;
      if (t[25] === S) E = e(ct, {
        status: "error",
        withSpace: !0
      }), t[25] = E; else E = t[25];
      let k;
      if (t[26] !== f.error) k = r(n, {
        children: [ E, f.error ]
      }), t[26] = f.error, t[27] = k; else k = t[27];
      let C;
      if (t[28] !== f.command) C = f.command && r(n, {
        bold: !0,
        color: "suggestion",
        children: [ "    ", f.command ]
      }), t[28] = f.command, t[29] = C; else C = t[29];
      let v;
      if (t[30] !== k || t[31] !== C) v = r(s, {
        flexDirection: "column",
        children: [ k, C ]
      }), t[30] = k, t[31] = C, t[32] = v; else v = t[32];
      let T;
      if (t[33] !== o || t[34] !== d) T = e(sr, {
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Save anyway (skip verification)",
        cancelLabel: "Go back and fix",
        onConfirm: d,
        onCancel: o
      }), t[33] = o, t[34] = d, t[35] = T; else T = t[35];
      let _;
      if (t[36] !== v || t[37] !== T) _ = e(bc, {
        subtitle: "Verification failed",
        color: "error",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [ v, T ]
        })
      }), t[36] = v, t[37] = T, t[38] = _; else _ = t[38];
      return _;
    }
  }
}

function No() {}

var fr = [ ie, Ee, se, te, De, _e, me, de ];

function Qyt(o) {
  let t = w(7), {onComplete: d, onCancel: c, exitOnCtrlCD: l} = o, m;
  if (t[0] !== d) m = {
    onComplete: d
  }, t[0] = d, t[1] = m; else m = t[1];
  let g;
  if (t[2] === S) g = {}, t[2] = g; else g = t[2];
  let h;
  if (t[3] !== l || t[4] !== c || t[5] !== m) h = e(bze, {
    steps: fr,
    stepProps: m,
    initialData: g,
    onComplete: No,
    onCancel: c,
    exitOnCtrlCD: l,
    title: "Set up Amazon Bedrock",
    showStepCounter: !1
  }), t[3] = l, t[4] = c, t[5] = m, t[6] = h; else h = t[6];
  return h;
}

export { Qyt };
