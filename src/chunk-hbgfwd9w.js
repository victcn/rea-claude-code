// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ndn, kLo, ALo, CLo, Mf, gx, RLo, xLo, $me, vDr } from "./chunk-3pqddg8f.js";

import { l, E, W, r2 } from "./chunk-b0z4bv3v.js";

import { ul } from "./chunk-ddr690nj.js";

import { ate } from "./chunk-z52kmxx4.js";

import { _, wo, Gee, fq, SHr, se, t } from "./chunk-kawq2919.js";

import { ln } from "./chunk-ajd6by9m.js";

import { $w, Fw } from "./chunk-x5881pc6.js";

import { mt } from "./chunk-j90se18b.js";

import { mo } from "./chunk-fhf0t7vm.js";

import { _r } from "./chunk-35kwehd0.js";

import { SOe } from "./chunk-rgd61mm3.js";

import { ar, Rxo, zp } from "./chunk-nnrb0acr.js";

import { kf, ZH } from "./chunk-q6wab2jw.js";

import { SX, b$ } from "./chunk-dgqa0xqf.js";

var ltn = "apply-project-settings", PCs = "Review and accept settings changes for cloud sessions that use this computer";

function fkr(e = process.argv) {
  return e[2] === "apply-project-settings";
}

function Z1n(e) {
  return _(e).replace(/[\u007f-\u009f]/g, r => "\\u" + r.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"));
}

function nGs(e) {
  try {
    let r = e.trim(), i = r.startsWith("{") && r.endsWith("}"), a;
    if (i) {
      let n = mt(r);
      if (!n) return ln("Error: Invalid JSON provided to --settings");
      let s = Z1n(n);
      a = SOe("claude-settings", ".json", {
        contentHash: s
      }), ALo(s);
    } else {
      let n = e, s = e, g;
      try {
        if (ZH(e)) n = wo(se(), e).resolvedPath, s = n; else {
          let o = fq(se(), e);
          n = o.resolvedPath, s = d(o.linksResolvedPath ?? o.resolvedPath);
        }
        g = b$(n, kf);
      } catch (o) {
        if (SHr(o)) return ln(`Error: Cannot use settings file ${e}: ${l(o)}`);
        if (W(o)) return ln(`Error: Settings file not found: ${n}`);
        if (E(o) === "ERR_FILE_TOO_LARGE") return ln(`Error: Settings file exceeds the ${kf / 1048576}MiB limit: ${n}`);
        if (SX(o) || r2(o)) return ln(`Error: Cannot use settings file (${l(o)}): ${n}`);
        throw o;
      }
      a = s, CLo(g);
    }
    kLo(a), ar();
  } catch (r) {
    if (r instanceof Error) t(`Error processing --settings: ${l(r)}`, {
      level: "error"
    });
    return ln(`Error processing settings: ${l(r)}`);
  }
}

function rGs(e) {
  let r = mt(e.trim(), !1);
  if (!r || typeof r !== "object" || Array.isArray(r)) {
    t("--managed-settings ignored: invalid JSON object", {
      level: "warn"
    }), xLo(!0);
    return;
  }
  RLo(r), ar();
}

function c(e) {
  try {
    let r = Rxo(e);
    vDr(r), ar();
  } catch (r) {
    if (r instanceof Error) t(`Invalid --setting-sources flag: ${l(r)}`, {
      level: "error"
    });
    return ln(`Error processing --setting-sources: ${l(r)}`);
  }
}

function jbo() {
  let e = performance.now();
  mo("eagerLoadSettings_start");
  let r = $w("--settings");
  if (r) nGs(r);
  let i = $w("--managed-settings");
  if (i) rGs(i);
  mkr(), f(), mo("eagerLoadSettings_end"), _r("settings_load_ms", performance.now() - e, e);
}

function f() {
  let e = $w("--fast-mode");
  if (e !== "on" && e !== "off") return;
  gx({
    ...Mf() ?? {},
    fastMode: e === "on"
  }), ar();
}

function mkr() {
  let e = $w("--setting-sources");
  if (e !== void 0) c(e);
  if (Fw("--restricted") || ate()) c(""), Ndn(!0);
  if (fkr()) vDr($me().filter(r => !zp.has(r))), ar();
}

function d(e) {
  if (ul(e)) return e;
  try {
    let r = Gee(se(), e);
    return r.toLowerCase() === e.toLowerCase() ? r : e;
  } catch {
    return e;
  }
}

export { ltn, PCs, fkr, Z1n, nGs, rGs, jbo, mkr };
