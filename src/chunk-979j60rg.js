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

import { Y } from "./chunk-kawq2919.js";

import { Eht } from "./chunk-z52kmxx4.js";

import { I } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { w } from "./chunk-9rj1xaxr.js";

import { rt } from "./chunk-ytac37d4.js";

import { i } from "./chunk-hedpgw9m.js";

import { NR, Owe, Znn, ern } from "./chunk-xywp7esx.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { hn, Rn } from "./chunk-dd98x6x7.js";

import { $o } from "./chunk-cjt10y7b.js";

import { JP } from "./chunk-s2t7g8m9.js";

import { wse, NMt, Vxe, Kxe } from "./chunk-gmq0qwep.js";

import { Pe } from "./chunk-7w995nyx.js";

import { bze, Qu, bc, PL, e_t, mmn } from "./chunk-q92x1heq.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { G } from "./chunk-j706jx8h.js";

import { ct } from "./chunk-qk83zz02.js";

import { Se } from "./chunk-sebqm9p5.js";

import { Er } from "./chunk-t54wevgw.js";

import { sr } from "./chunk-stbhy0k1.js";

import { Bx } from "./chunk-yz8yf8mg.js";

import { tn } from "./chunk-v8wydxb4.js";

import { $r } from "./chunk-mggq5sa8.js";

import { ss } from "./chunk-wafhv2dx.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { STn } from "./chunk-j5jvvqe4.js";

import { Vr, Hr, P, R, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

var T = {
  AUTH_METHOD: 0,
  SERVICE_ACCOUNT: 1,
  PROJECT: 2,
  REGION: 3,
  VERIFY: 4,
  PIN_MODELS: 5,
  CONFIRM: 6
};

function te() {
  let t = w(10), {goBack: o, goToStep: l, updateWizardData: c, wizardData: m} = Qu(), h;
  if (t[0] === S) h = [ {
    label: "Application Default Credentials (gcloud auth)",
    value: "adc"
  }, {
    label: "Service account key file",
    value: "serviceAccount"
  }, {
    label: "Use credentials already in my environment",
    value: "environment"
  } ], t[0] = h; else h = t[0];
  let p = h, f;
  if (t[1] === S) f = {
    adc: T.PROJECT,
    serviceAccount: T.SERVICE_ACCOUNT,
    environment: T.PROJECT
  }, t[1] = f; else f = t[1];
  let u = f, k;
  if (t[2] !== l || t[3] !== c) k = g => {
    let _ = g;
    c({
      authMethod: _
    }), l(u[_]);
  }, t[2] = l, t[3] = c, t[4] = k; else k = t[4];
  let A = k, d;
  if (t[5] === S) d = e(n, {
    dimColor: !0,
    children: "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
  }), t[5] = d; else d = t[5];
  let D;
  if (t[6] !== o || t[7] !== A || t[8] !== m.authMethod) D = e(bc, {
    subtitle: "How do you authenticate to Google Cloud?",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ d, e(Xe, {
        options: p,
        defaultValue: m.authMethod,
        onChange: A,
        onCancel: o
      }) ]
    })
  }), t[6] = o, t[7] = A, t[8] = m.authMethod, t[9] = D; else D = t[9];
  return D;
}

F();

function St(X) {
  return X[1] !== void 0;
}

function kt(o) {
  let [N, U] = o;
  return r(n, {
    children: [ "  ", e(n, {
      color: "suggestion",
      children: N
    }), " = ", U ]
  }, N);
}

function ve(o) {
  let l = {
    CLAUDE_CODE_USE_VERTEX: "1",
    CLAUDE_CODE_USE_BEDROCK: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    CLAUDE_CODE_USE_MANTLE: void 0,
    ANTHROPIC_VERTEX_PROJECT_ID: o.projectId,
    CLOUD_ML_REGION: o.region,
    GOOGLE_APPLICATION_CREDENTIALS: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0
  };
  if (o.authMethod === "serviceAccount") l.GOOGLE_APPLICATION_CREDENTIALS = o.keyFile;
  if (o.pinSonnet) l.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) l.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) l.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) l.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return l;
}

function oe(o) {
  let f = w(30), {onComplete: l} = o, {storageV5: c} = Pe(), {goBack: m, wizardData: t} = Qu(), [h, p] = y(null), u;
  if (f[0] === S) u = Os(hn("userSettings") ?? "~/.claude/settings.json"), f[0] = u; else u = f[0];
  let k = u, g;
  if (f[1] !== t) g = ve(t), f[1] = t, f[2] = g; else g = f[2];
  let _ = g, A;
  if (f[3] !== _) A = Object.entries(_).filter(St), f[3] = _, f[4] = A; else A = f[4];
  let d = A, D = R(!1), x;
  if (f[5] !== _ || f[6] !== l || f[7] !== c || f[8] !== t.authMethod || f[9] !== t.pinFable || f[10] !== t.pinHaiku || f[11] !== t.pinOpus || f[12] !== t.pinSonnet || f[13] !== t.verifiedIdentity) x = async () => {
    if (D.current) {
      return;
    }
    D.current = !0;
    let {error: O} = await Rn("userSettings", {
      env: _
    }, void 0, c);
    if (O) {
      D.current = !1, p(O.message);
      return;
    }
    i("tengu_vertex_setup_complete", {
      auth_method: pe(t.authMethod),
      pinned_models: Boolean(t.pinSonnet || t.pinOpus || t.pinFable || t.pinHaiku),
      verified: Boolean(t.verifiedIdentity)
    }), l(`Vertex AI configuration saved to ${k}.${t.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`);
  }, f[5] = _, f[6] = l, f[7] = c, f[8] = t.authMethod, f[9] = t.pinFable, f[10] = t.pinHaiku, 
  f[11] = t.pinOpus, f[12] = t.pinSonnet, f[13] = t.verifiedIdentity, f[14] = x; else x = f[14];
  let C = x, E;
  if (f[15] === S) E = r(n, {
    children: [ "These will be written to ", k, " under env:" ]
  }), f[15] = E; else E = f[15];
  let v;
  if (f[16] !== d) v = e(s, {
    flexDirection: "column",
    children: d.map(kt)
  }), f[16] = d, f[17] = v; else v = f[17];
  let b;
  if (f[18] !== t.verifiedIdentity) b = t.verifiedIdentity && r(n, {
    dimColor: !0,
    children: [ e(ct, {
      status: "success",
      withSpace: !0
    }), "Verified as ", t.verifiedIdentity ]
  }), f[18] = t.verifiedIdentity, f[19] = b; else b = f[19];
  let M;
  if (f[20] !== h) M = e(ss, {
    error: h
  }), f[20] = h, f[21] = M; else M = f[21];
  let J;
  if (f[22] !== m || f[23] !== C) J = e(sr, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: C,
    onCancel: m
  }), f[22] = m, f[23] = C, f[24] = J; else J = f[24];
  let W;
  if (f[25] !== v || f[26] !== b || f[27] !== M || f[28] !== J) W = e(bc, {
    subtitle: "Confirm and save",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ E, v, b, M, J ]
    })
  }), f[25] = v, f[26] = b, f[27] = M, f[28] = J, f[29] = W; else W = f[29];
  return W;
}

function ne() {
  return {
    sonnet: $o[NR].vertex,
    opus: $o[Znn].vertex,
    haiku: $o[Owe].vertex,
    fable: $o[ern].vertex
  };
}

function ke(o) {
  let l = new Set;
  for (let c of Object.values($o)) if (c.vertex !== null && c.vertex.toLowerCase().includes(o)) l.add(c.vertex);
  return [ ...l ].sort().reverse();
}

function Re(o) {
  if (o.authMethod === "serviceAccount" && o.keyFile) return {
    kind: "keyFile",
    path: o.keyFile
  };
  return {
    kind: "default"
  };
}

var Pt = 12e3;

async function ae(o) {
  let l;
  try {
    let t = await NMt(Re(o), o.projectId), h = (async () => {
      await (await t.getClient()).getAccessToken();
    })();
    await Ht(h, Pt, "Timed out waiting for GCP credentials");
    let p;
    try {
      p = (await t.getCredentials()).client_email;
    } catch {
      p = void 0;
    }
    l = p ?? (o.authMethod === "serviceAccount" ? `service account (${o.keyFile})` : "Application Default Credentials");
  } catch (t) {
    return {
      status: "error",
      ...bt(t, o)
    };
  }
  let c = ne().haiku, m = await se(o, c);
  if (m.ok) return {
    status: "ok",
    identity: l,
    note: `Test request to ${c} succeeded.`
  };
  switch (m.reason) {
   case "auth":
    return {
      status: "error",
      error: "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope."
    };

   case "permission":
    return {
      status: "error",
      error: `Permission denied calling Vertex AI in project "${o.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.`
    };

   case "model":
    return {
      status: "ok",
      identity: l,
      note: `Credentials work, but ${c} returned not-found in ${o.region}. Pin a model you have access to on the next step, or try the 'global' region.`
    };

   case "network":
    return {
      status: "error",
      error: `Could not reach Vertex AI in region "${o.region}". Check the region name and your network.`
    };

   case "other":
    return {
      status: "ok",
      identity: l,
      note: `Credentials work, but the test request to ${c} failed. You can pin a different model on the next step.`
    };
  }
}

async function se(o, l) {
  return mmn(() => Rt(o), l, () => "auth");
}

async function Rt(o) {
  let [{AnthropicVertex: l}, {getProxyFetchOptions: c}] = await Promise.all([ import("./chunk-zhmj1fb3.js"), import("./chunk-adh1rnwr.js") ]), m = await NMt(Re(o), o.projectId);
  return Vxe(new l({
    region: o.region,
    projectId: o.projectId,
    googleAuth: m,
    maxRetries: 0,
    defaultHeaders: {
      ...wse(),
      ...Kxe()
    },
    ...JP,
    timeout: 15e3,
    fetchOptions: c({
      url: a.ANTHROPIC_VERTEX_BASE_URL || Eht(o.region)
    })
  }));
}

var ie = "gcloud auth application-default login";

function bt(o, l) {
  let c = o?.message ?? String(o);
  if (/ENOENT|no such file/i.test(c)) {
    if (l.authMethod === "serviceAccount" && l.keyFile && c.includes(l.keyFile)) return {
      error: `Service account key file not found: ${l.keyFile}`
    };
    let m = a.GOOGLE_APPLICATION_CREDENTIALS ? [ "GOOGLE_APPLICATION_CREDENTIALS", a.GOOGLE_APPLICATION_CREDENTIALS ] : a.google_application_credentials ? [ "google_application_credentials", a.google_application_credentials ] : void 0;
    if (m && l.authMethod !== "serviceAccount" && c.includes(`The file at ${m[1]} does not exist`)) return {
      error: `Key file named by ${m[0]} not found: ${m[1]}`
    };
  }
  if (/Could not load the default credentials/i.test(c)) return l.authMethod === "adc" ? {
    error: "No Application Default Credentials found. Run:",
    command: ie
  } : {
    error: "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login."
  };
  if (/invalid_grant|Token has been expired|reauth/i.test(c)) {
    if (l.authMethod === "serviceAccount") return {
      error: "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key)."
    };
    if (l.authMethod === "adc") return {
      error: "GCP credentials expired. Run:",
      command: ie
    };
    return {
      error: "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file)."
    };
  }
  if (/Unable to detect a Project Id/i.test(c)) return {
    error: "Could not determine a GCP project from the credentials. Go back and set the project ID explicitly."
  };
  if (/Timed out waiting for GCP/i.test(c)) return {
    error: "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).",
    ...l.authMethod === "adc" && {
      command: ie
    }
  };
  return {
    error: c
  };
}

var be = {
  reasonLabel: {
    auth: "auth failed",
    permission: "no aiplatform.endpoints.predict permission",
    model: "not enabled in this project",
    network: "unreachable",
    other: "request failed"
  },
  intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if it is not yet available in your project \u2014 Claude Code will fail to connect to Vertex AI until you enable the model or pin to one you have.",
  resolveTierDefaults: () => {
    let o = ne();
    return Object.fromEntries(PL.map(l => [ l, {
      fallback: o[l]
    } ]));
  },
  listTierCandidates: o => ke(o),
  pickerSubtitle: o => `Available ${Bx[o]} versions on Vertex AI \xb7 each tested with a one-token request.`,
  preferOnSettle: [ "current", "fallback" ],
  probe: (o, l) => se(o, l)
};

function ce() {
  let l = w(2), {updateWizardData: o} = Qu(), c;
  if (l[0] !== o) c = e(e_t, {
    provider: be,
    onPins: o
  }), l[0] = o, l[1] = c; else c = l[1];
  return c;
}

F();

import { readdir as Lt, readFile as Ve } from "fs/promises";

import { join as le } from "path";

async function de() {
  let o = new Set, l = STn();
  try {
    let c = le(l, "configurations");
    for (let m of await Lt(c)) {
      if (!m.startsWith("config_")) continue;
      try {
        let t = await Ve(le(c, m), "utf8");
        for (let h of t.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let p = h[1]?.trim();
          if (p) o.add(p);
        }
      } catch {}
    }
  } catch {}
  try {
    let c = Y(await Ve(le(l, "application_default_credentials.json"), "utf8"));
    if (c.quota_project_id) o.add(c.quota_project_id);
  } catch {}
  return [ ...o ].sort();
}

function Jt() {
  return [];
}

function Yt() {
  return de().catch(Jt);
}

function Xt(lt) {
  return e(tn.Item, {
    label: lt
  }, lt);
}

var Le = "__manual__", Ne = 12;

function fe() {
  let l = w(3), [o] = y(Yt), c;
  if (l[0] === S) c = e(bc, {
    subtitle: "GCP project",
    children: e($r, {
      message: "Reading ~/.config/gcloud\u2026"
    })
  }), l[0] = c; else c = l[0];
  let m;
  if (l[1] !== o) m = e(Vr, {
    fallback: c,
    children: e(me, {
      projectsPromise: o
    })
  }), l[1] = o, l[2] = m; else m = l[2];
  return m;
}

function me(o) {
  let u = w(48), {projectsPromise: l} = o, c = Hr(l), {goBack: m, goToStep: t, updateWizardData: h, wizardData: p} = Qu(), f = c.length > Ne, k;
  if (u[0] !== c || u[1] !== p.projectId) k = p.projectId && !c.includes(p.projectId), 
  u[0] = c, u[1] = p.projectId, u[2] = k; else k = u[2];
  let g = Boolean(k), [_, A] = y(c.length === 0 || f || g), [d, D] = y(p.projectId ?? ""), [x, O] = y(d.length), [C, E] = y(null);
  const v = _ ? "Settings" : "Confirmation";
  let b;
  if (u[3] !== v) b = {
    context: v
  }, u[3] = v, u[4] = b; else b = u[4];
  rt("confirm:no", m, b);
  let M;
  if (u[5] !== t || u[6] !== h) M = J => {
    h({
      projectId: J
    }), t(T.REGION);
  }, u[5] = t, u[6] = h, u[7] = M; else M = u[7];
  let W = M;
  if (!_) {
    const X = c.length;
    let N;
    if (u[8] !== c.length) N = I(c.length, "project"), u[8] = c.length, u[9] = N; else N = u[9];
    let U;
    if (u[10] !== c.length || u[11] !== N) U = r(n, {
      dimColor: !0,
      children: [ "Found ", X, " ", N, " in your gcloud configurations." ]
    }), u[10] = c.length, u[11] = N, u[12] = U; else U = u[12];
    let H;
    if (u[13] !== c || u[14] !== p.projectId) H = c.indexOf(p.projectId ?? ""), u[13] = c, 
    u[14] = p.projectId, u[15] = H; else H = u[15];
    const K = Math.max(0, H);
    let z;
    if (u[16] !== c || u[17] !== W) z = vr => {
      let nt = c[vr];
      if (nt === void 0) A(!0); else W(nt);
    }, u[16] = c, u[17] = W, u[18] = z; else z = u[18];
    let j;
    if (u[19] !== c) j = c.map(Xt), u[19] = c, u[20] = j; else j = u[20];
    let Q;
    if (u[21] === S) Q = e(tn.Item, {
      label: "Type a different project\u2026"
    }, Le), u[21] = Q; else Q = u[21];
    let ee;
    if (u[22] !== z || u[23] !== j || u[24] !== K) ee = r(tn, {
      defaultFocusIndex: K,
      onSelect: z,
      children: [ j, Q ]
    }), u[22] = z, u[23] = j, u[24] = K, u[25] = ee; else ee = u[25];
    let at;
    if (u[26] !== ee || u[27] !== U) at = e(bc, {
      subtitle: "GCP project",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [ U, ee ]
      })
    }), u[26] = ee, u[27] = U, u[28] = at; else at = u[28];
    return at;
  }
  let X;
  if (u[29] !== W || u[30] !== d) X = () => {
    let st = d.trim();
    if (!st) {
      E("Project ID is required");
      return;
    }
    E(null), W(st);
  }, u[29] = W, u[30] = d, u[31] = X; else X = u[31];
  let Ae = X, N;
  if (u[32] === S) N = r(Se, {
    children: [ e(G, {
      chord: "enter",
      action: "continue"
    }), e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    }) ]
  }), u[32] = N; else N = u[32];
  let U;
  if (u[33] === S) U = e(n, {
    children: "The project where Vertex AI is enabled."
  }), u[33] = U; else U = u[33];
  let H;
  if (u[34] !== c.length || u[35] !== f) H = f && r(n, {
    dimColor: !0,
    children: [ "Found ", c.length, " projects \u2014 too many to list." ]
  }), u[34] = c.length, u[35] = f, u[36] = H; else H = u[36];
  let K;
  if (u[37] === S) K = e(n, {
    dimColor: !0,
    children: "Find it with `gcloud config get-value project` or in the GCP console header."
  }), u[37] = K; else K = u[37];
  let z;
  if (u[38] !== x || u[39] !== Ae || u[40] !== d) z = e(s, {
    marginTop: 1,
    children: e(Er, {
      value: d,
      onChange: D,
      onSubmit: Ae,
      placeholder: "my-gcp-project",
      columns: 60,
      cursorOffset: x,
      onChangeCursorOffset: O,
      focus: !0,
      showCursor: !0
    })
  }), u[38] = x, u[39] = Ae, u[40] = d, u[41] = z; else z = u[41];
  let j;
  if (u[42] !== C) j = C && e(s, {
    marginTop: 1,
    children: e(ss, {
      error: C
    })
  }), u[42] = C, u[43] = j; else j = u[43];
  let Q;
  if (u[44] !== z || u[45] !== j || u[46] !== H) Q = e(bc, {
    subtitle: "GCP project ID",
    footerText: N,
    children: r(s, {
      flexDirection: "column",
      children: [ U, H, K, z, j ]
    })
  }), u[44] = z, u[45] = j, u[46] = H, u[47] = Q; else Q = u[47];
  return Q;
}

F();

function he() {
  let g = w(17), {goBack: o, goNext: l, updateWizardData: c, wizardData: m} = Qu(), [t, h] = y(m.region ?? "global"), [p, f] = y(t.length), [u, k] = y(null), _;
  if (g[0] === S) _ = {
    context: "Settings"
  }, g[0] = _; else _ = g[0];
  rt("confirm:no", o, _);
  let A;
  if (g[1] !== l || g[2] !== c || g[3] !== t) A = () => {
    let d = t.trim();
    if (!d) {
      k("Region is required");
      return;
    }
    k(null), c({
      region: d
    }), l();
  }, g[1] = l, g[2] = c, g[3] = t, g[4] = A; else A = g[4];
  let D = A, x;
  if (g[5] === S) x = r(Se, {
    children: [ e(G, {
      chord: "enter",
      action: "continue"
    }), e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    }) ]
  }), g[5] = x; else x = g[5];
  let O, C;
  if (g[6] === S) O = e(n, {
    children: "Where Claude models are served from."
  }), C = e(n, {
    dimColor: !0,
    children: "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
  }), g[6] = O, g[7] = C; else O = g[6], C = g[7];
  let E;
  if (g[8] !== p || g[9] !== D || g[10] !== t) E = e(s, {
    marginTop: 1,
    children: e(Er, {
      value: t,
      onChange: h,
      onSubmit: D,
      placeholder: "global",
      columns: 40,
      cursorOffset: p,
      onChangeCursorOffset: f,
      focus: !0,
      showCursor: !0
    })
  }), g[8] = p, g[9] = D, g[10] = t, g[11] = E; else E = g[11];
  let v;
  if (g[12] !== u) v = u && e(s, {
    marginTop: 1,
    children: e(ss, {
      error: u
    })
  }), g[12] = u, g[13] = v; else v = g[13];
  let b;
  if (g[14] !== E || g[15] !== v) b = e(bc, {
    subtitle: "Vertex AI region",
    footerText: x,
    children: r(s, {
      flexDirection: "column",
      children: [ O, C, E, v ]
    })
  }), g[14] = E, g[15] = v, g[16] = b; else b = g[16];
  return b;
}

F();

import { homedir as Ke } from "os";

import { join as qe } from "path";

function ye() {
  let g = w(17), {goBack: o, goToStep: l, updateWizardData: c, wizardData: m} = Qu(), [t, h] = y(m.keyFile ?? ""), [p, f] = y(t.length), [u, k] = y(null), _;
  if (g[0] === S) _ = {
    context: "Settings"
  }, g[0] = _; else _ = g[0];
  rt("confirm:no", o, _);
  let A;
  if (g[1] !== l || g[2] !== c || g[3] !== t) A = () => {
    let d = t.trim();
    if (!d) {
      k("Path is required");
      return;
    }
    k(null);
    let D = d === "~" || d.startsWith("~/") ? qe(Ke(), d.slice(1)) : d;
    c({
      keyFile: D
    }), l(T.PROJECT);
  }, g[1] = l, g[2] = c, g[3] = t, g[4] = A; else A = g[4];
  let x = A, O;
  if (g[5] === S) O = r(Se, {
    children: [ e(G, {
      chord: "enter",
      action: "continue"
    }), e(pt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "go back"
    }) ]
  }), g[5] = O; else O = g[5];
  let C, E;
  if (g[6] === S) C = e(n, {
    children: "Path to the service account JSON key file."
  }), E = e(n, {
    dimColor: !0,
    children: "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key."
  }), g[6] = C, g[7] = E; else C = g[6], E = g[7];
  let v;
  if (g[8] !== p || g[9] !== x || g[10] !== t) v = e(s, {
    marginTop: 1,
    children: e(Er, {
      value: t,
      onChange: h,
      onSubmit: x,
      placeholder: "~/keys/my-project-vertex.json",
      columns: 60,
      cursorOffset: p,
      onChangeCursorOffset: f,
      focus: !0,
      showCursor: !0
    })
  }), g[8] = p, g[9] = x, g[10] = t, g[11] = v; else v = g[11];
  let b;
  if (g[12] !== u) b = u && e(s, {
    marginTop: 1,
    children: e(ss, {
      error: u
    })
  }), g[12] = u, g[13] = b; else b = g[13];
  let M;
  if (g[14] !== v || g[15] !== b) M = e(bc, {
    subtitle: "Service account key",
    footerText: O,
    children: r(s, {
      flexDirection: "column",
      children: [ C, E, v, b ]
    })
  }), g[14] = v, g[15] = b, g[16] = M; else M = g[16];
  return M;
}

F();

function xe() {
  let t = w(35), {goBack: o, goNext: l, updateWizardData: c, wizardData: m} = Qu(), h;
  if (t[0] === S) h = {
    phase: "checking"
  }, t[0] = h; else h = t[0];
  let [p, f] = y(h), u;
  if (t[1] !== c || t[2] !== m) u = () => {
    let k = !1;
    return ae(m).then(g => {
      if (k) {
        return;
      }
      if (g.status === "ok") c({
        verifiedIdentity: g.identity
      }); else c({
        verifiedIdentity: void 0
      });
      f({
        phase: "done",
        result: g
      });
    }), () => {
      k = !0;
    };
  }, t[1] = c, t[2] = m, t[3] = u; else u = t[3];
  let _;
  if (t[4] === S) _ = [], t[4] = _; else _ = t[4];
  if (P(u, _), p.phase === "checking") {
    let A;
    if (t[5] === S) A = e(bc, {
      subtitle: "Verifying credentials",
      children: e($r, {
        message: "Calling Google Cloud\u2026",
        subtitle: "This may take a few seconds."
      })
    }), t[5] = A; else A = t[5];
    return A;
  }
  let {result: d} = p;
  switch (d.status) {
   case "ok":
    {
      let A;
      if (t[6] === S) A = e(ct, {
        status: "success",
        withSpace: !0
      }), t[6] = A; else A = t[6];
      let D;
      if (t[7] !== d.identity) D = r(n, {
        children: [ A, "Authenticated as ", e(n, {
          bold: !0,
          children: d.identity
        }) ]
      }), t[7] = d.identity, t[8] = D; else D = t[8];
      let x;
      if (t[9] !== d.note) x = d.note && e(n, {
        dimColor: !0,
        children: d.note
      }), t[9] = d.note, t[10] = x; else x = t[10];
      let O;
      if (t[11] === S) O = [ {
        label: "Continue",
        value: "continue"
      } ], t[11] = O; else O = t[11];
      let C;
      if (t[12] !== l) C = () => l(), t[12] = l, t[13] = C; else C = t[13];
      let E;
      if (t[14] !== o || t[15] !== C) E = e(Xe, {
        options: O,
        onChange: C,
        onCancel: o
      }), t[14] = o, t[15] = C, t[16] = E; else E = t[16];
      let v;
      if (t[17] !== D || t[18] !== x || t[19] !== E) v = e(bc, {
        subtitle: "Verification",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [ D, x, E ]
        })
      }), t[17] = D, t[18] = x, t[19] = E, t[20] = v; else v = t[20];
      return v;
    }

   case "error":
    {
      let A;
      if (t[21] === S) A = e(ct, {
        status: "error",
        withSpace: !0
      }), t[21] = A; else A = t[21];
      let D;
      if (t[22] !== d.error) D = r(n, {
        children: [ A, d.error ]
      }), t[22] = d.error, t[23] = D; else D = t[23];
      let x;
      if (t[24] !== d.command) x = d.command && r(n, {
        bold: !0,
        color: "suggestion",
        children: [ "    ", d.command ]
      }), t[24] = d.command, t[25] = x; else x = t[25];
      let O;
      if (t[26] !== D || t[27] !== x) O = r(s, {
        flexDirection: "column",
        children: [ D, x ]
      }), t[26] = D, t[27] = x, t[28] = O; else O = t[28];
      let C;
      if (t[29] !== o || t[30] !== l) C = e(sr, {
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Save anyway (skip verification)",
        cancelLabel: "Go back and fix",
        onConfirm: l,
        onCancel: o
      }), t[29] = o, t[30] = l, t[31] = C; else C = t[31];
      let E;
      if (t[32] !== O || t[33] !== C) E = e(bc, {
        subtitle: "Verification failed",
        color: "error",
        children: r(s, {
          flexDirection: "column",
          gap: 1,
          children: [ O, C ]
        })
      }), t[32] = O, t[33] = C, t[34] = E; else E = t[34];
      return E;
    }
  }
}

function Ar() {}

var it = [ te, ye, fe, he, xe, ce, oe ];

function Zyt(o) {
  let t = w(7), {onComplete: l, onCancel: c, exitOnCtrlCD: m} = o, h;
  if (t[0] !== l) h = {
    onComplete: l
  }, t[0] = l, t[1] = h; else h = t[1];
  let p;
  if (t[2] === S) p = {}, t[2] = p; else p = t[2];
  let f;
  if (t[3] !== m || t[4] !== c || t[5] !== h) f = e(bze, {
    steps: it,
    stepProps: h,
    initialData: p,
    onComplete: Ar,
    onCancel: c,
    exitOnCtrlCD: m,
    title: "Set up Google Vertex AI",
    showStepCounter: !1
  }), t[3] = m, t[4] = c, t[5] = h, t[6] = f; else f = t[6];
  return f;
}

export { Zyt };
