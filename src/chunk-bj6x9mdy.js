// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { We } from "./chunk-nvtwm272.js";

import { Pp, ve, Mf, gx } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { ge } from "./chunk-07cck4g7.js";

import { Nfe } from "./chunk-q6wab2jw.js";

import { H3e, W1, Wz, Lpe, Cg, zz, Xut, Qut, CPe, Qe, Eb, Ke, It } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { WR } from "./chunk-s2t7g8m9.js";

import { kr, yl } from "./chunk-cqgvwwgb.js";

import { ar } from "./chunk-nnrb0acr.js";

import { Rn } from "./chunk-dd98x6x7.js";

import { bs } from "./chunk-zzhmvqjt.js";

import { Pa } from "./chunk-4v78v8fd.js";

import { T6t, O3, TS, db, Ky, yAt, _At } from "./chunk-84yp45y8.js";

import { qM } from "./chunk-bkx9v5fh.js";

import { Ett } from "./chunk-vbxdpr16.js";

import { BEn } from "./chunk-wp79c0ph.js";

import { G2e } from "./chunk-7de0e9qj.js";

import { Gn } from "./chunk-bf1mjdzd.js";

import { Dk, au, vB } from "./chunk-qfnejzxe.js";

function Fhe(o = !0, e = !1) {
  if (!o) return Nfe;
  let n = G2e(bs("theme", "dark").value);
  if (e) return ge.dim(Gn("promptBorder", n)(Nfe));
  return Gn("fastMode", n)(Nfe);
}

var l5r = 8e3, RDe = "Fast mode unchanged (cancelled)";

function Uhe(o) {
  if (Cg(T6t({
    ...o,
    toolPermissionContext: {
      mode: "default"
    }
  }))) return;
  let e = Lpe();
  return It(e) === It(Eb()) ? null : e;
}

async function Pnr(o, e, n) {
  let u = Uhe(e());
  if (u === void 0 || yl() || !O3(o)) return {
    vetted: jVt,
    messages: []
  };
  let s = await Dk(o, e, u, "command", {
    signal: n
  });
  if (s.decision === "proceed") return {
    vetted: {
      target: u
    },
    messages: s.messages
  };
  return {
    refusal: vB(u, s.decision === "ask" ? `${s.reason ?? "confirmation required"} (use /model to switch, then /fast)` : s.reason, s.messages)
  };
}

var jVt = {
  unvetted: !0
};

function mvt(o, e) {
  let n = e ? "enabled" : "disabled";
  switch (o.kind) {
   case "timeout":
    return `No response from the workspace \u2014 fast mode may still have been ${n} there`;

   case "stale":
    return `Fast mode was not ${n}: the model changed while PreModelSwitch hooks ran; try again`;

   case "refused":
    return `Fast mode was not ${n} on the workspace: ${o.reason}`;
  }
}

function WVt(o, e, n, u = !0, s, d = jVt) {
  if (zz(), e) Xut();
  let k = () => {
    if (u && !ve()) return;
    gx({
      ...Mf() ?? {},
      fastMode: e
    });
  }, M = () => {
    if (Ett({
      fastMode: e
    }, n), e) {
      let r = !1, a = null;
      if (n(m => {
        let f = Uhe(m);
        if (f === void 0) return m;
        if (!("unvetted" in d) && d.target !== f) return m;
        return TS(o, m, f, "command"), r = !0, a = f, {
          ...m,
          mainLoopModel: f,
          mainLoopModelForSession: null
        };
      }), r && H3e()) Pp(a);
    }
    if (!u) if (!WR() && H3e()) Pa.notifyChange("flagSettings"); else ar();
  };
  if (yl()) {
    k();
    let r = kr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        fastMode: e ? !0 : null,
        ...e && {
          model: Lpe()
        }
      }
    });
    if (!r) return M(), Promise.resolve(void 0);
    return r.then(() => {
      M();
      return;
    }, a => (t(`fast mode: workspace did not accept apply_flag_settings: ${l(a)}`, {
      level: "error"
    }), a instanceof qM ? {
      kind: "timeout"
    } : {
      kind: "refused",
      reason: au(l(a))
    }));
  }
  if (e && !("unvetted" in d)) {
    let r = !1;
    if (n(a => {
      let m = Uhe(a);
      return r = m !== void 0 && m !== d.target, a;
    }), r) return Promise.resolve({
      kind: "stale"
    });
  }
  if (k(), BEn(e, s), u) Rn("userSettings", {
    fastMode: e ? !0 : void 0
  }, void 0, s);
  return M(), Promise.resolve(void 0);
}

async function zVt(o, e, n, u, s, d = !0, k, M, r, a, m) {
  let f = () => db(o, async () => {
    if (M) await We(M(), l5r);
    if (r?.aborted) return {
      kind: "refused",
      refusal: RDe
    };
    let F = W1(void 0, {
      sessionOptIn: !d && !WR() && H3e(),
      sessionOnly: !d || ve()
    });
    if (F && e) return {
      kind: "refused",
      refusal: `Fast mode unavailable: ${F}`
    };
    let w = jVt, h = [];
    if (e) {
      let S = await Pnr(o, n, r);
      if (r?.aborted) return {
        kind: "refused",
        refusal: RDe
      };
      if (S.refusal !== void 0) return {
        kind: "refused",
        refusal: S.refusal
      };
      w = S.vetted, h = S.messages;
    }
    let P = e && Uhe(n()) !== void 0;
    return a?.(), {
      kind: "applied",
      remote: await WVt(o, e, u, d, k, w),
      willPromote: P,
      hookMessages: h
    };
  }), p = {}, y = d && m !== void 0 && !yl() ? await m(e, async () => {
    if (p.outcome = await f(), p.outcome.kind === "refused") return p.outcome.refusal;
    return p.outcome.remote === void 0 ? void 0 : mvt(p.outcome.remote, e);
  }) : void 0, g = p.outcome ?? (y === void 0 ? await f() : void 0);
  if (g === void 0) return r?.aborted ? RDe : y ?? "Fast mode was not changed";
  if (g.kind === "refused") return g.refusal;
  if (g.remote !== void 0) return mvt(g.remote, e);
  if (i("tengu_fast_mode_toggled", {
    enabled: e,
    source: c(s),
    remote: yl()
  }), e) {
    let F = Fhe(!0), w = g.willPromote ? `${_At}${Ky(Wz())}` : "", h = Qe(), P = Ke(Cg(h) ? h : It(Lpe())), _ = CPe(Qut(P)), S = d ? "" : " (this session only)", O = g.hookMessages.length > 0 ? `\n${g.hookMessages.map(au).join(`\n`)}` : "";
    return `${F} ${yAt}${w} \xb7 ${_}${S}${O}`;
  } else return `Fast mode OFF${d ? "" : " (this session only)"}`;
}

export { Fhe, l5r, RDe, Uhe, Pnr, jVt, mvt, WVt, zVt };
