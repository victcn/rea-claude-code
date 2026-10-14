// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { z } from "./chunk-bmq0vae0.js";

import { l } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { _, Y, se, t } from "./chunk-kawq2919.js";

import { Sgt } from "./chunk-1zg3hbfq.js";

import { IWn } from "./chunk-8drhysk2.js";

import { Fmt } from "./chunk-q6wab2jw.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { p3, QCn, dQr, ots, sts, Lir, ats, lts, yqe, aN, Gl, JIn, ice, $Q, ace, ni, cb, Eqe } from "./chunk-84yp45y8.js";

import { _pn, bpn } from "./chunk-z62h61j0.js";

import { readFile as P } from "fs/promises";

import { join as h } from "path";

async function M() {
  try {
    let a = await P(dQr(), "utf-8"), e = Fmt().safeParse(Y(a));
    if (!e.success) return t(`Invalid known_marketplaces.json in zip cache: ${e.error.message}`, {
      level: "error"
    }), {};
    return e.data;
  } catch {
    return {};
  }
}

async function S(a) {
  await Lir(dQr(), _(a, null, 2));
}

async function F(a, e) {
  let s = QCn();
  if (!s) return;
  let o = await I(e);
  if (o !== null) {
    let c = ats(a);
    await Lir(h(s, c), o);
  }
}

async function I(a) {
  let e = [ h(a, ".claude-plugin", "marketplace.json"), h(a, "marketplace.json"), a ];
  for (let s of e) try {
    return await P(s, "utf-8");
  } catch {}
  return null;
}

async function w(a) {
  let e = await Gl(a), s = Object.entries(IWn(e)).filter(([r, d]) => ice(r, d) === null && !$Q(r, d));
  for (let [r, d] of s) {
    if (!d.installLocation) continue;
    try {
      await F(r, d.installLocation);
    } catch (f) {
      t(`Failed to save marketplace JSON for ${r}: ${f}`);
    }
  }
  let c = {
    ...await M(),
    ...Object.fromEntries(s)
  };
  await S(c);
}

function Nht(a, e, s) {
  let o = Ge(), c = (o.headlessInstallPass ?? Promise.resolve()).then(() => v(a, e, s));
  return o.headlessInstallPass = c.then(() => {}, () => {}), c;
}

async function v(a, e, s) {
  let o = p3();
  t(`installPluginsForHeadless: starting${o ? " (zip cache mode)" : ""}`);
  let c = await JIn(), r, d = () => r !== void 0 && Ge().pluginLoadCacheOnly === r;
  if (c) yqe(), cb("headlessPluginInstall: seed marketplaces registered"), r = Eqe(e, "headlessPluginInstall");
  if (o) await se().mkdir(ots()), await se().mkdir(sts());
  let f = Object.keys(aN()).length, g = {
    marketplaces_installed: 0,
    delisted_count: 0
  }, p = c;
  try {
    if (f === 0) t("installPluginsForHeadless: no marketplaces declared"); else {
      let u = await Sgt("headless_marketplace_reconcile", () => _pn({
        skip: o ? (n, C) => !lts(C) : void 0,
        onProgress: n => {
          if (n.type === "installed") a?.({
            status: "installed",
            name: n.name
          }), t(`installPluginsForHeadless: installed marketplace ${n.name}`); else if (n.type === "failed") a?.({
            status: "failed",
            name: n.name,
            error: n.error
          }), t(`installPluginsForHeadless: failed to install marketplace ${n.name}: ${n.error}`);
        },
        storageV5: e
      }), n => ({
        installed_count: n.installed.length,
        updated_count: n.updated.length,
        failed_count: n.failed.length,
        skipped_count: n.skipped.length
      }));
      if (u.skipped.length > 0) t(`installPluginsForHeadless: skipped ${u.skipped.length} marketplace(s) unsupported by zip cache: ${u.skipped.join(", ")}`);
      let k = u.installed.length + u.updated.length;
      if (k > 0) yqe(), cb("headlessPluginInstall: marketplaces reconciled"), r = Eqe(e, "headlessPluginInstall"), 
      p = !0;
      g.marketplaces_installed = k;
    }
    if (o) r = void 0, await w(e);
    let m = await bpn(e);
    if (g.delisted_count = m.length, m.length > 0) p = !0, r = void 0;
    if (p && !d()) cb("headlessPluginInstall: plugins changed"), Eqe(e, "headlessPluginInstall");
    return y(e, s), p;
  } catch (m) {
    if (t(`installPluginsForHeadless: failed: ${l(m)}`, {
      level: "error"
    }), p && !d()) {
      if (z() && e !== void 0) cb("headlessPluginInstall: pass failed after a change");
      Eqe(e, "headlessPluginInstall");
    }
    return y(e, s), !1;
  } finally {
    i("tengu_headless_plugin_install", g);
  }
}

function y(a, e) {
  if (ace(e)) ni(a, e).catch(() => {});
}

export { Nht };
