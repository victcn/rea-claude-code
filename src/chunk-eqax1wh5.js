// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mS } from "./chunk-vxr6sv7z.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { Z_, mdn, gdn, OLo } from "./chunk-3pqddg8f.js";

import { vl } from "./chunk-hwdwjvh8.js";

import { Y, ag, iDo, t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { v1e, xU, win, hKn, kmt } from "./chunk-q6wab2jw.js";

import { uae, a } from "./chunk-j016gcgm.js";

import { h4e } from "./chunk-dvddkg0s.js";

import { Srn, Xz, y0t, Zrn, wTo, IBe } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { h_ } from "./chunk-60c97a4m.js";

import { hh } from "./chunk-8yperama.js";

import { ar } from "./chunk-nnrb0acr.js";

import { lD } from "./chunk-fhf0t7vm.js";

import { XS, rme } from "./chunk-w4hwgefc.js";

import { Q2n } from "./chunk-qqd24q2y.js";

import { zH } from "./chunk-1tdw23h1.js";

import { e5, lUe, YMt, tjn, qct, Wbo, Gbo } from "./chunk-ewk363e4.js";

import { _r, ejn } from "./chunk-35kwehd0.js";

import { dKo } from "./chunk-s594ktcd.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { createServer as d } from "net";

function Ncn(e, r, s) {
  return new Promise((_, c) => {
    let E = o => {
      m.close(), c(o);
    }, m = d(o => {
      let l = "";
      o.setEncoding("utf8"), o.on("data", v => {
        if (l += v, s && l.length > 8388608) {
          o.destroy();
          return;
        }
        let n = l.indexOf(`\n`);
        if (n < 0) return;
        if (s) {
          let p;
          try {
            p = Y(l.slice(0, n));
          } catch {
            p = void 0;
          }
          if (!p || !zH(p.auth, s)) {
            o.destroy();
            return;
          }
          m.close(), _(p);
          return;
        }
        m.close();
        try {
          _(Y(l.slice(0, n)));
        } catch (p) {
          c(p);
        }
      }), o.on("error", s ? () => o.destroy() : E);
    });
    if (m.on("error", E), r) m.once("listening", () => {
      try {
        r();
      } catch (o) {
        E(o);
      }
    });
    m.listen(e);
  });
}

async function $cn(e, r, s) {
  let _ = performance.now(), c = await h_(e.cwd, void 0);
  ag(c);
  let E = {
    originalCwd: c,
    projectRoot: c,
    cwd: c
  };
  if (e.sessionId) Z_(mS(e.sessionId), "spare_claim", null, E); else mdn(E);
  if (ar(), IBe(), Zrn(), gdn(), ejn(), lD({
    warm_spare_claimed: 1
  }), Le(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let n of Object.keys(process.env)) if (win(n) || n === "ANTHROPIC_CUSTOM_HEADERS" || hKn(n) || kmt(n)) delete process.env[n];
  }
  if (lUe(e.env)) Wbo();
  delete process.env.ANTHROPIC_AUTH_TOKEN, delete process.env.ANTHROPIC_API_KEY, delete process.env.CLAUDE_CODE_OAUTH_TOKEN, 
  a.unset("CLAUDE_CODE_CONFIG_WATCH_EVENTS");
  let {kept: m, dropped: o} = tjn(e.env);
  if (Object.assign(process.env, m), process.argv = [ process.argv[0], process.argv[1], ...e.argv ], 
  ar(), iDo(), o.length > 0) g(o);
  s?.(), wTo(), hh.reset();
  let l = performance.now();
  await dKo(e.argv), _r("spare_claim_token_file_wait_ms", performance.now() - l, l), 
  OLo(), Srn(), Q2n(), e5(), y0t({
    preservePendingExposures: !0,
    preserveLoggedExposures: !0
  }), Xz(), Gbo(Object.keys(e.env)), rme(), XS();
  let {main: v} = await r;
  _r("spare_claim_apply_ms", performance.now() - _, _), await v();
}

var f = 8;

function g(e) {
  if (e.slice(0, f).forEach(({name: r, problem: s}) => {
    t(`[bg-spare] environment variable ${qct(r)} was not applied to this background session: ${YMt[s]}. Programs it starts will not see it.`, {
      level: "warn"
    });
  }), e.length > f) {
    let r = e.length - f;
    t(`[bg-spare] \u2026and ${r} more environment ${I(r, "variable was", "variables were")} not applied.`, {
      level: "warn"
    });
  }
  i("tengu_bg_claim_env_dropped", {
    dropped: e.length,
    nul_in_value: N(e, r => r.problem === "nul-in-value"),
    invalid_name: N(e, r => r.problem === "invalid-name"),
    non_string_value: N(e, r => r.problem === "non-string-value"),
    name_classes: vl(D(e.map(r => C(r.name))))
  });
}

function C(e) {
  return e === "PATH" ? "path" : e.startsWith("CLAUDE_BG_") || e === "CLAUDE_JOB_DIR" || e === "CLAUDE_CODE_SESSION_KIND" || e === "CLAUDE_CODE_SESSION_NAME" ? "bg_worker" : xU.includes(e) ? "credential" : v1e.includes(e) ? "gateway" : h4e.has(e) ? "provider" : uae(a).includes(e) ? "declared" : "other";
}

export { Ncn, $cn };
