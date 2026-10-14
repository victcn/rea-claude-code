// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { s, n } from "./chunk-3vw306fv.js";

import { l } from "./chunk-b0z4bv3v.js";

import { qc } from "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { X0 } from "./chunk-q6wab2jw.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { ct } from "./chunk-qk83zz02.js";

import { nC, b$e } from "./chunk-bjsp1prn.js";

import { sr } from "./chunk-stbhy0k1.js";

import { be } from "./chunk-gqmex880.js";

import { qj } from "./chunk-g3vbtf8r.js";

import { X7e, J7e, Q7e, L_t } from "./chunk-g0kp7vjb.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

import { basename as po, resolve as se } from "path";

function Ao() {
  return "Sent to Claude on each fire. Slash commands work.";
}

function Io(mo) {
  return mo.trim() === "" ? null : b$e(mo).error ?? null;
}

function jo(uo) {
  if (uo.trim() === "") {
    return;
  }
  let $e = b$e(uo);
  return $e.error ? void 0 : `${$e.human} \xb7 ${$e.cron}`;
}

function Lo(co) {
  return {
    label: X0(co),
    value: co
  };
}

async function NBo(u) {
  return L_t(void 0, u).catch(o => (d(o), []));
}

function qNr(u) {
  let i = w(76), {task: o, onBack: k, onEdit: a, onDone: v, refresh: B, storageV5: V} = u, [g, U] = y(!1), [p, ee] = y(!1), b;
  if (i[0] !== g || i[1] !== v || i[2] !== B || i[3] !== V || i[4] !== o) b = async function I() {
    if (g) {
      return;
    }
    U(!0);
    try {
      await J7e(Ze({
        ...o,
        enabled: !o.enabled
      }), void 0, V), await B(), v(`${o.enabled ? "Disabled" : "Enabled"} scheduled task '${o.id}'.`, {
        display: "system"
      });
    } catch (Y) {
      let Ve = Y;
      d(Ve), v(`Toggle failed: ${l(Ve)}`, {
        display: "system"
      });
    }
  }, i[0] = g, i[1] = v, i[2] = B, i[3] = V, i[4] = o, i[5] = b; else b = i[5];
  let I = b, Y;
  if (i[6] !== g || i[7] !== v || i[8] !== B || i[9] !== V || i[10] !== o.id) Y = async function j() {
    if (g) {
      return;
    }
    U(!0);
    try {
      await Q7e(o.id, void 0, V), await B(), v(`Removed scheduled task '${o.id}'.`, {
        display: "system"
      });
    } catch (h) {
      let oe = h;
      t(`Failed to remove scheduled task '${o.id}' from daemon.json: ${l(oe)}`, {
        level: "error"
      }), v(`Remove failed: ${l(oe)}`, {
        display: "system"
      });
    }
  }, i[6] = g, i[7] = v, i[8] = B, i[9] = V, i[10] = o.id, i[11] = Y; else Y = i[11];
  let j = Y;
  if (p) {
    const h = `Delete '${o.id}' from daemon.json. The daemon will stop firing it on its next reconcile.`;
    let x;
    if (i[12] === S) x = () => ee(!1), i[12] = x; else x = i[12];
    let C;
    if (i[13] !== j) C = () => void j(), i[13] = j, i[14] = C; else C = i[14];
    let E;
    if (i[15] === S) E = () => ee(!1), i[15] = E; else E = i[15];
    let M;
    if (i[16] !== C) M = e(sr, {
      cancelFirst: !0,
      focus: "cancel",
      confirmLabel: "Yes, remove",
      cancelLabel: "No, cancel",
      onConfirm: C,
      onCancel: E
    }), i[16] = C, i[17] = M; else M = i[17];
    let f;
    if (i[18] !== h || i[19] !== M) f = e(be, {
      title: "Remove task?",
      subtitle: h,
      onCancel: x,
      color: "error",
      children: M
    }), i[18] = h, i[19] = M, i[20] = f; else f = i[20];
    return f;
  }
  const h = o.enabled ? "Disable" : "Enable";
  let x;
  if (i[21] !== h) x = {
    label: h,
    value: "toggle"
  }, i[21] = h, i[22] = x; else x = i[22];
  let C, E, M;
  if (i[23] === S) C = {
    label: "Edit",
    value: "edit"
  }, E = {
    label: "Remove",
    value: "remove"
  }, M = {
    label: "Back",
    value: "back"
  }, i[23] = C, i[24] = E, i[25] = M; else C = i[23], E = i[24], M = i[25];
  let f;
  if (i[26] !== x) f = [ x, C, E, M ], i[26] = x, i[27] = f; else f = i[27];
  let ce = f;
  const {id: L, cron: _e} = o;
  let Q;
  if (i[28] !== o.cron) Q = nC(o.cron), i[28] = o.cron, i[29] = Q; else Q = i[29];
  let G;
  if (i[30] !== Q || i[31] !== o.cron) G = r(n, {
    dimColor: !0,
    children: [ "Cron ", _e, " (", Q, ")" ]
  }), i[30] = Q, i[31] = o.cron, i[32] = G; else G = i[32];
  let H;
  if (i[33] !== o.directory) H = r(n, {
    dimColor: !0,
    children: [ "Directory ", o.directory ]
  }), i[33] = o.directory, i[34] = H; else H = i[34];
  let D;
  if (i[35] !== o.prompt) D = r(n, {
    dimColor: !0,
    children: [ "Prompt ", o.prompt ]
  }), i[35] = o.prompt, i[36] = D; else D = i[36];
  const te = o.enabled ? "on" : "off";
  let N;
  if (i[37] !== te) N = e(ct, {
    status: te,
    withSpace: !0
  }), i[37] = te, i[38] = N; else N = i[38];
  const q = o.enabled ? "enabled" : "disabled";
  let P;
  if (i[39] !== N || i[40] !== q) P = r(n, {
    dimColor: !0,
    children: [ "Status ", N, q ]
  }), i[39] = N, i[40] = q, i[41] = P; else P = i[41];
  let K;
  if (i[42] !== o.permissionMode) K = X0(o.permissionMode), i[42] = o.permissionMode, 
  i[43] = K; else K = i[43];
  let ie;
  if (i[44] !== K) ie = r(n, {
    dimColor: !0,
    children: [ "Mode ", K ]
  }), i[44] = K, i[45] = ie; else ie = i[45];
  let T;
  if (i[46] !== o.model) T = o.model && r(n, {
    dimColor: !0,
    children: [ "Model ", o.model ]
  }), i[46] = o.model, i[47] = T; else T = i[47];
  let W;
  if (i[48] !== o.runTimeoutMinutes) W = r(n, {
    dimColor: !0,
    children: [ "Timeout ", o.runTimeoutMinutes, "m" ]
  }), i[48] = o.runTimeoutMinutes, i[49] = W; else W = i[49];
  let Z;
  if (i[50] !== o.maxQueued) Z = r(n, {
    dimColor: !0,
    children: [ "Max queue ", o.maxQueued ]
  }), i[50] = o.maxQueued, i[51] = Z; else Z = i[51];
  let O;
  if (i[52] !== G || i[53] !== H || i[54] !== D || i[55] !== P || i[56] !== ie || i[57] !== T || i[58] !== W || i[59] !== Z) O = r(s, {
    flexDirection: "column",
    marginBottom: 1,
    children: [ G, H, D, P, ie, T, W, Z ]
  }), i[52] = G, i[53] = H, i[54] = D, i[55] = P, i[56] = ie, i[57] = T, i[58] = W, 
  i[59] = Z, i[60] = O; else O = i[60];
  let A;
  if (i[61] !== k || i[62] !== a || i[63] !== o || i[64] !== I) A = re => {
    if (re === "back") {
      return k();
    }
    if (re === "edit") {
      return a(o);
    }
    if (re === "remove") {
      return ee(!0);
    }
    if (re === "toggle") {
      return void I();
    }
  }, i[61] = k, i[62] = a, i[63] = o, i[64] = I, i[65] = A; else A = i[65];
  let J;
  if (i[66] !== g || i[67] !== k || i[68] !== ce || i[69] !== A) J = e(Xe, {
    options: ce,
    isDisabled: g,
    onChange: A,
    onCancel: k
  }), i[66] = g, i[67] = k, i[68] = ce, i[69] = A, i[70] = J; else J = i[70];
  let _;
  if (i[71] !== k || i[72] !== O || i[73] !== J || i[74] !== o.id) _ = r(be, {
    title: L,
    onCancel: k,
    children: [ O, J ]
  }), i[71] = k, i[72] = O, i[73] = J, i[74] = o.id, i[75] = _; else _ = i[75];
  return _;
}

function YNr(u) {
  let p = w(59), {defaultDir: o, existingIds: k, prefill: a, modelOptions: v, onCancel: B, onDone: V, onSaved: g, storageV5: U} = u, ee;
  if (p[0] !== v) ee = v === void 0 ? [ {
    label: "default",
    value: ""
  } ] : v, p[0] = v, p[1] = ee; else ee = p[1];
  let i = ee, b = a !== void 0, Y;
  if (p[2] !== k || p[3] !== b || p[4] !== a) Y = b ? k.filter(Ve => Ve !== a.id) : k, 
  p[2] = k, p[3] = b, p[4] = a, p[5] = Y; else Y = p[5];
  let I = Y;
  const h = a?.prompt ?? "", oe = a?.cron ?? "", j = a?.directory ?? o, x = a?.id ?? "", C = a?.permissionMode ?? "dontAsk", E = a?.model ?? "";
  let M;
  if (p[6] !== h || p[7] !== oe || p[8] !== j || p[9] !== x || p[10] !== C || p[11] !== E) M = {
    prompt: h,
    schedule: oe,
    dir: j,
    id: x,
    permissionMode: C,
    model: E
  }, p[6] = h, p[7] = oe, p[8] = j, p[9] = x, p[10] = C, p[11] = E, p[12] = M; else M = p[12];
  let [f, ce] = y(M), [L, _e] = y(b), [Q, G] = y(!1), H;
  if (p[13] !== o || p[14] !== L) H = function P(D, te) {
    if (D === "id") _e(!0);
    ce(N => {
      if (N[D] === te) {
        return N;
      }
      let q = {
        ...N,
        [D]: te
      };
      if (D !== "id" && !L && (D === "prompt" || D === "dir")) q.id = ue(se(qc(q.dir?.trim() || o)), q.prompt ?? "");
      return q;
    });
  }, p[13] = o, p[14] = L, p[15] = H; else H = p[15];
  let P = H, K;
  if (p[16] !== i || p[17] !== a) K = a?.model && !i.some(ie => ie.value === a.model) ? [ ...i, {
    label: a.model,
    value: a.model
  } ] : i, p[16] = i, p[17] = a, p[18] = K; else K = p[18];
  let T = K, W, Z;
  if (p[19] === S) W = {
    type: "text",
    key: "prompt",
    label: "Prompt",
    placeholder: "/babysit-prs",
    required: !0,
    hint: Ao
  }, Z = {
    type: "text",
    key: "schedule",
    label: "Schedule",
    placeholder: "5m, 2h, 1d  or  */15 * * * *",
    required: !0,
    validate: Io,
    hint: jo
  }, p[19] = W, p[20] = Z; else W = p[19], Z = p[20];
  let O;
  if (p[21] !== o) O = {
    type: "text",
    key: "dir",
    label: "Directory",
    placeholder: o
  }, p[21] = o, p[22] = O; else O = p[22];
  let A;
  if (p[23] !== I) A = re => {
    let J = re.trim();
    if (J !== "" && I.includes(J)) {
      return `id '${J}' is already in use`;
    }
    return null;
  }, p[23] = I, p[24] = A; else A = p[24];
  let _;
  if (p[25] !== L) _ = () => L ? void 0 : "Auto-generated from prompt and directory.", 
  p[25] = L, p[26] = _; else _ = p[26];
  let pe;
  if (p[27] !== A || p[28] !== _) pe = {
    type: "text",
    key: "id",
    label: "Id",
    validate: A,
    hint: _
  }, p[27] = A, p[28] = _, p[29] = pe; else pe = p[29];
  let eo;
  if (p[30] === S) eo = {
    type: "select",
    key: "permissionMode",
    label: "Permission mode",
    options: X7e.map(Lo)
  }, p[30] = eo; else eo = p[30];
  let fe;
  if (p[31] !== T) fe = oo => T.find(Fo => Fo.value === oo)?.description ?? (oo === "" ? "Uses your configured default model." : void 0), 
  p[31] = T, p[32] = fe; else fe = p[32];
  let ke;
  if (p[33] !== T || p[34] !== fe) ke = {
    type: "select",
    key: "model",
    label: "Model",
    options: T,
    hint: fe
  }, p[33] = T, p[34] = fe, p[35] = ke; else ke = p[35];
  let to;
  if (p[36] !== O || p[37] !== pe || p[38] !== ke) to = [ W, Z, O, pe, eo, ke ], p[36] = O, 
  p[37] = pe, p[38] = ke, p[39] = to; else to = p[39];
  let Me = to, io;
  if (p[40] !== Q || p[41] !== o || p[42] !== b || p[43] !== V || p[44] !== g || p[45] !== a || p[46] !== U || p[47] !== f) io = async function ve() {
    if (Q) {
      return;
    }
    G(!0);
    let ro = se(qc(f.dir?.trim() || o));
    let no = b$e(f.schedule ?? "");
    if (no.cron === void 0) {
      G(!1);
      return;
    }
    let Re = f.id?.trim() || ue(ro, f.prompt?.trim() ?? "");
    let Qo = f.permissionMode ?? "dontAsk";
    let so = f.model?.trim() || void 0;
    let No = {
      id: Re,
      cron: no.cron,
      prompt: f.prompt.trim(),
      directory: ro,
      enabled: a?.enabled ?? !0,
      permissionMode: Qo,
      runTimeoutMinutes: a?.runTimeoutMinutes ?? 30,
      maxQueued: a?.maxQueued ?? 1,
      ...so && {
        model: so
      }
    };
    try {
      if (b && a.id !== Re) await Q7e(a.id, void 0, U);
      await J7e(No, void 0, U), await g(Re, b);
    } catch (ne) {
      let lo = ne;
      d(lo), V(`Save failed: ${l(lo)}`, {
        display: "system"
      });
    }
  }, p[40] = Q, p[41] = o, p[42] = b, p[43] = V, p[44] = g, p[45] = a, p[46] = U, 
  p[47] = f, p[48] = io; else io = p[48];
  let ve = io;
  const ne = b ? `Edit '${a.id}'` : "New scheduled task";
  let ye;
  if (p[49] !== ve) ye = () => void ve(), p[49] = ve, p[50] = ye; else ye = p[50];
  const Ee = b ? "Save changes" : "Create task";
  let ao;
  if (p[51] !== Me || p[52] !== B || p[53] !== P || p[54] !== ne || p[55] !== ye || p[56] !== Ee || p[57] !== f) ao = e(qj, {
    title: ne,
    subtitle: "Fire a prompt on a recurring schedule",
    fields: Me,
    values: f,
    onChange: P,
    onSubmit: ye,
    onCancel: B,
    submitLabel: Ee
  }), p[51] = Me, p[52] = B, p[53] = P, p[54] = ne, p[55] = ye, p[56] = Ee, p[57] = f, 
  p[58] = ao; else ao = p[58];
  return ao;
}

function I6n(u) {
  return u.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
}

function ue(u, o) {
  let k = I6n(po(u)), a = I6n(o.split(/\s+/).slice(0, 4).join(" "));
  return [ k, a ].filter(Boolean).join("-") || "task";
}

function Ze(u) {
  return {
    id: u.id,
    cron: u.cron,
    prompt: u.prompt,
    directory: u.directory,
    enabled: u.enabled,
    permissionMode: u.permissionMode,
    runTimeoutMinutes: u.runTimeoutMinutes,
    maxQueued: u.maxQueued,
    ...u.model && {
      model: u.model
    }
  };
}

export { NBo, qNr, YNr, I6n };
