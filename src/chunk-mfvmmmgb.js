// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, BJe } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { VUe, ce, Gpt } from "./chunk-xywp7esx.js";

import { mi } from "./chunk-nnrb0acr.js";

import { imt, OLt, lee, cj, Y9, DIe } from "./chunk-dd98x6x7.js";

import { hRo, Nsn } from "./chunk-h147n5a3.js";

import { kse } from "./chunk-ewk363e4.js";

import { xCs } from "./chunk-bmfd9rq1.js";

import { mkr } from "./chunk-hbgfwd9w.js";

class s {
  settingsLoaded=!1;
  helperResult=null;
  claimSettingsLoad() {
    if (this.settingsLoaded) return !1;
    return this.settingsLoaded = !0, !0;
  }
  beginHelperRun() {
    return this.helperResult = {
      error: null
    }, this.helperResult;
  }
}

var p = new K(() => new s);

function l() {
  return p.of(B().host);
}

async function qMt(t) {
  if (!l().claimSettingsLoad()) return;
  mkr();
  let e = z() ? t?.backend : void 0;
  if (z() && e !== void 0) {
    let [{seedUserSettings: o}, {primeWindowsCredManBackendEnabled: i}, {primeRemoteManagedSettingsCache: a}, {primeWorkspaceRoots: r}] = await Promise.all([ import("./chunk-00agq7em.js"), import("./chunk-xrr03fnc.js"), import("./chunk-00xma3pp.js"), import("./chunk-67j4ejxv.js") ]);
    await r(e), await Promise.all([ Gpt(e), o(e, mi()) ]), i(ce().cachedGrowthBookFeatures?.tengu_windows_credman === !0), 
    await a(e);
  } else await Gpt();
  if (await imt(), await Nsn(hRo), z() && e !== void 0) {
    let [{credentialsStoreFor: o}, {primeFileDescriptorCredentials: i}, {primeStoredLoginCopy: a}] = await Promise.all([ import("./chunk-k930kb2p.js"), import("./chunk-n6yjek61.js"), import("./chunk-8rkfm3cn.js") ]), r = o(e);
    if (r !== void 0) await i(r, {
      bgAuthSnapshot: "leave"
    }), await a(r);
  }
  BJe(VUe), kse();
  let n = xCs();
  if (n) process.stderr.write(`${n}\n`), process.exit(1);
}

async function Q1n() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (e.error = await OLt(cj(), Y9(), DIe()), lee()) kse();
  return e.error;
}

async function Bbo(t) {
  return await qMt(t), Q1n();
}

export { qMt, Q1n, Bbo };
