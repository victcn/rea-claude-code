// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lv } from "./chunk-zqby5cq4.js";

import { mr, Fe } from "./chunk-0cdqg49t.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l, E, W, jt } from "./chunk-b0z4bv3v.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { p } from "./chunk-jkzenvsk.js";

import { jHn, t1, pY } from "./chunk-2kzvcfy0.js";

import { toe } from "./chunk-gpa5wktp.js";

import { _s } from "./chunk-1dj3skht.js";

import { o, u, ue } from "./chunk-cvcg6n1z.js";

import { um, Qi } from "./chunk-ws55c9wv.js";

import { uM } from "./chunk-j7qcpyv8.js";

import { yt } from "./chunk-9zhz923g.js";

import { readdir as A, readFile as I, stat as F } from "fs/promises";

import { basename as w, extname as N, join as C } from "path";

import { isDeepStrictEqual as R } from "util";

class x {
  customThemeBases=void 0;
  userThemes=void 0;
  pluginThemes=_s([]);
  systemTheme=void 0;
  systemThemeChanged=Me();
  onSystemThemeChange=this.systemThemeChanged.subscribe;
  customThemeBase(e) {
    return this.customThemeBases?.get(e);
  }
  addCustomThemeBases(e) {
    this.customThemeBases ??= new Map;
    for (let r of e) this.customThemeBases.set(r.slug, r.base);
  }
  commitUserThemes(e) {
    if (this.customThemeBases = new Map(e.map(r => [ r.slug, r.base ])), this.addCustomThemeBases(this.pluginThemes.getState()), 
    this.userThemes === void 0 || !R(this.userThemes, e)) this.userThemes = e;
    return this.userThemes;
  }
  cachedUserThemes() {
    return this.userThemes ?? [];
  }
  cachedSystemTheme() {
    return this.systemTheme;
  }
  setSystemTheme(e) {
    if (this.systemTheme === e) return;
    this.systemTheme = e, this.systemThemeChanged.emit();
  }
}

var M = new K(() => new x);

function wB() {
  return M.of(B().host);
}

var b = "custom:", D = 262144;

function d5r(e) {
  return wB().customThemeBase(e);
}

function Inr() {
  return wB().cachedUserThemes();
}

function c5r(e) {
  let r = wB();
  return r.cachedUserThemes().find(s => s.slug === e) ?? r.pluginThemes.getState().find(s => s.slug === e);
}

function ktt() {
  return C(Ee(), "themes");
}

function WJ(e) {
  return `${b}${e}`;
}

function WI(e) {
  return e.startsWith(b) ? e.slice(b.length) : null;
}

function k(e, r, s) {
  let i;
  try {
    i = Y(r);
  } catch {
    t(`[theme] ${e}.json: invalid JSON`, {
      level: "warn"
    });
    return;
  }
  if (typeof i !== "object" || i === null || Array.isArray(i)) return;
  let m = i, h = jHn(m.base) ? m.base : "dark", c = typeof m.name === "string" ? m.name : e, n = {};
  if (typeof m.overrides === "object" && m.overrides !== null) {
    let T = t1(h);
    for (let [g, y] of Object.entries(m.overrides)) if (Object.hasOwn(T, g) && pY(y)) n[g] = y;
  }
  return {
    slug: e,
    name: c,
    base: h,
    overrides: n,
    source: s
  };
}

async function S(e, r, s, i, m, h) {
  if (i && m) {
    let n;
    try {
      n = await i.read([ m ]);
    } catch (g) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${l(g)}`, {
        level: "warn"
      });
      return;
    }
    if (!n.ok) {
      if (h) h.readErrors++;
      t(`[theme] failed to read ${e}: ${yt(n.error)}`, {
        level: "warn"
      });
      return;
    }
    let T = n.value.items[0];
    return T?.found ? k(r, Buffer.from(T.value).toString("utf8"), s) : void 0;
  }
  let c;
  try {
    if ((await F(e)).size > D) {
      t(`[theme] ${e} exceeds 256KB; skipping`, {
        level: "warn"
      });
      return;
    }
    c = await I(e, "utf8");
  } catch (n) {
    if (!W(n)) t(`[theme] failed to read ${e}`, {
      level: "warn"
    });
    return;
  }
  return k(r, c, s);
}

async function Onr(e, r, s = "") {
  return await P(e, r, s) ?? [];
}

async function P(e, r, s, i) {
  if (i && r === "user" && e === ktt()) {
    let c = {
      namespace: "userConfigDir",
      dir: "themes"
    }, n = [], T = await Qi(a => i.listEntries(c, a === void 0 ? void 0 : {
      cursor: a
    }), a => {
      for (let f of a) {
        if (f.kind !== "key") continue;
        let d = f.key.namespace === "userConfigDir" ? f.key.relPath.at(-1) ?? "" : "";
        if (N(d) !== ".json") continue;
        if ((f.size ?? 0) > D) {
          t(`[theme] ${C(e, d)} exceeds 256KB; skipping`, {
            level: "warn"
          });
          continue;
        }
        n.push({
          slug: s + w(d, ".json"),
          name: d
        });
      }
    }).catch(a => (t(`[theme] list themes failed: ${l(a)}; keeping the previously loaded themes (if any)`, {
      level: "warn"
    }), null));
    if (T === null) return null;
    switch (T.status) {
     case "done":
      break;

     case "error":
      return t(`[theme] list themes failed: ${yt(T.error)}; keeping the previously loaded themes (if any)`, {
        level: "warn"
      }), null;

     case "capped":
      return t(`[theme] list themes exceeded ${um} pages; keeping the previously loaded themes (if any)`, {
        level: "warn"
      }), null;
    }
    if (n.length === 0) return [];
    let g = n.map(a => Fe.userConfigDir("themes", [ a.name ])), y;
    try {
      y = await i.read(g);
    } catch (a) {
      t(`[theme] batched theme read failed: ${l(a)}`, {
        level: "warn"
      });
    }
    let v = [];
    if (y?.ok) {
      for (let [a, f] of y.value.items.entries()) {
        if (!f.found) continue;
        let d = k(n[a].slug, Buffer.from(f.value).toString("utf8"), r);
        if (d) v.push(d);
      }
      return v;
    }
    let j = {
      readErrors: 0
    };
    for (let [a, f] of n.entries()) {
      let d = await S(C(e, f.name), f.slug, r, i, g[a], j);
      if (d) v.push(d);
    }
    if (v.length === 0 && j.readErrors > 0) return t(`[theme] could not read any of ${n.length} listed theme files; keeping the previously loaded themes (if any)`, {
      level: "warn"
    }), null;
    return v;
  }
  let m;
  try {
    m = await A(e);
  } catch (c) {
    if (E(c) === "ENOTDIR") {
      let n = await S(e, s + w(e, ".json"), r);
      return n ? [ n ] : [];
    }
    if (!jt(c)) t(`[theme] readdir ${e} failed`, {
      level: "warn"
    });
    return [];
  }
  let h = [];
  for (let c of m) {
    if (N(c) !== ".json") continue;
    let n = await S(C(e, c), s + w(c, ".json"), r);
    if (n) h.push(n);
  }
  return h;
}

var hvt = uM(async e => {
  let r = wB(), s = Sr("themes") ? [] : await P(ktt(), "user", "", e) ?? r.cachedUserThemes();
  return s.sort((i, m) => i.name.localeCompare(m.name)), r.commitUserThemes(s);
}), U = p(() => u({
  name: o(),
  base: o(),
  overrides: ue(o(), o())
}));

async function KVt(e, r) {
  let s = {
    name: e.name,
    base: e.base,
    overrides: e.overrides
  }, i = `${e.slug}.json`;
  if (z() && r !== void 0 && mr(i)) {
    let m = _(s, null, 2) + `\n`, h = await r.write(Fe.userConfigDir("themes", [ i ]), m, {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    });
    if (!h.ok) throw t(`[theme] v5 save ${e.slug} failed: ${yt(h.error)}`, {
      level: "warn"
    }), Error("theme save failed");
    return;
  }
  await toe(C(ktt(), `${e.slug}.json`), U, {
    defaultValue: () => ({
      name: e.slug,
      base: "dark",
      overrides: {}
    }),
    ensureDir: !0,
    indent: 2,
    trailingNewline: !0
  }).write(s);
}

function u5r(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "theme";
}

function Mnr(e) {
  if (Sr("themes")) return () => {};
  let r = lv.watch(ktt(), {
    persistent: !0,
    ignoreInitial: !0,
    depth: 0,
    awaitWriteFinish: {
      stabilityThreshold: 300,
      pollInterval: 100
    },
    ignorePermissionErrors: !0
  });
  return r.on("add", e), r.on("change", e), r.on("unlink", e), r.on("error", s => t(`[theme] watcher error: ${l(s)}`, {
    level: "warn"
  })), () => void r.close();
}

export { wB, d5r, Inr, c5r, ktt, WJ, WI, Onr, hvt, KVt, u5r, Mnr };
