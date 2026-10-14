// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { lee, cj } from "./chunk-dd98x6x7.js";

import { OH, nc, al, W_, ZPe, Ui, _0t, zpt, w8e } from "./chunk-xywp7esx.js";

import { vZe } from "./chunk-cdepe9yr.js";

import { aP, v4e, PS, qmr } from "./chunk-mtek6k5r.js";

import { FCe, m9t, bzs, Szs, RRt, Gmr } from "./chunk-e4tjnht7.js";

import { zV } from "./chunk-aze9smjv.js";

import { o, oe, u, ue } from "./chunk-cvcg6n1z.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var tWr = {};

Nr(tWr, {
  IS_WORKTREE_LAUNCH: () => tyn,
  SAVE_FAILURE: () => cyn,
  SIGN_IN_MARGIN_MS: () => oyn,
  default: () => tWr,
  earlyFetchVetoed: () => ryn,
  fetchRefreshesSignIn: () => iyn,
  flagClientQuieted: () => ayn,
  isSavedSwitchOf: () => dyn,
  pluginTestFormOf: () => Qjr,
  pluginTestGatesOf: () => Zjr,
  pluginTestRefusal: () => eWr,
  savedFlags: () => lyn,
  sessionHoldsEarlyFetch: () => nyn,
  signInNearsExpiry: () => syn,
  switchFetched: () => pyn,
  switchSaveSettled: () => uyn
});

function Qjr(e) {
  let r = e[0] === "--file", s = e.some(i => i.startsWith("-"));
  return r ? "file" : s ? "other" : "run";
}

var tyn = !1;

async function nyn() {
  let e = cj();
  return lee() || e?.policyHelpers != null || e?.policyHelper != null || import("./chunk-9bgq3qkb.js").then(r => r.pendingSettingsEnvBlocksEarlyGb(tyn));
}

var ryn = () => Promise.resolve().then(nyn).catch(() => !0);

var oyn = 6e4;

async function syn() {
  let e = await al();
  return e !== null && OH(e.expiresAt, Date.now() + oyn);
}

var iyn = () => Promise.resolve().then(() => nc() || syn()).catch(() => !0);

function ayn() {
  if (ZPe()) Ui().then(_0t, _0t);
}

var lyn = p(() => u({
  cachedGrowthBookFeatures: ue(o(), oe()).optional()
}));

function dyn(e) {
  let r = lyn().safeParse(e), s = r.success ? r.data.cachedGrowthBookFeatures?.[W_] : void 0;
  return typeof s === "boolean" ? s : aP;
}

var cyn = "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";

async function uyn() {
  return await We(zpt(), zV), m9t() && PS() && !Gmr() && !dyn(await w8e(void 0)) ? cyn : null;
}

var pyn = () => Szs().finally(ayn).then(uyn).catch(e => (t("claude plugin test: the hold for the rollout flag failed: " + l(e), {
  level: "error"
}), null));

async function Zjr({helperError: e, form: r, envPin: s}) {
  if (r === "file") bzs();
  let i = e === null && r === "run", n = i ? (await vZe(s))?.reason ?? null : e, f = i && n === null && !m9t() && !await ryn() && !await iyn() ? await pyn() : null;
  return await v4e(), {
    helperError: n ?? f,
    isRolloutOn: PS(),
    isSwitchSaved: FCe(),
    canLoadUserModules: qmr()
  };
}

function eWr({helperError: e, isRolloutOn: r, isSwitchSaved: s, canLoadUserModules: i}) {
  if (e !== null) return e;
  if (!r) return s ? `hooks modules are turned off in this process: ${RRt.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely` : `hooks modules are turned off in this process: ${RRt.served}, and a plugin's tests run only while it is on`;
  return i ? void 0 : "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}

export { Qjr, tyn, nyn, ryn, oyn, syn, iyn, ayn, lyn, dyn, cyn, uyn, pyn, Zjr, eWr, tWr };
