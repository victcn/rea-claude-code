// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ui, In, k, z_, p8e, A5 } from "./chunk-xywp7esx.js";

async function n() {
  try {
    return await z_("tengu_violin_strad");
  } catch {
    return !1;
  }
}

function t() {
  try {
    return k("tengu_violin_strad", !1);
  } catch {
    return !1;
  }
}

async function IR() {
  try {
    return await z_("tengu_violin_wood");
  } catch {
    return !1;
  }
}

function zf() {
  try {
    return k("tengu_violin_wood", !1);
  } catch {
    return !1;
  }
}

var a = "tengu_violin_maple";

async function QMt() {
  try {
    return await IR() || await p8e(a);
  } catch {
    return !1;
  }
}

function Gf() {
  try {
    return zf() || k(a, !1);
  } catch {
    return !1;
  }
}

async function jN() {
  return await IR() && await n();
}

function VF() {
  return zf() && t();
}

function upe(e) {
  return e ? null : "flag_off";
}

function L1(e) {
  return upe(e) === null;
}

function ptn() {
  try {
    let {value: e, source: o} = In("tengu_violin_wood", !1);
    return e === !1 && A5(o);
  } catch {
    return !1;
  }
}

function ftn() {
  return zf() && oGs("tengu_violin_wood");
}

async function Zbo() {
  let e = performance.now();
  return await Ui().catch(() => null), Math.round(performance.now() - e);
}

function oGs(e) {
  try {
    return A5(In(e, !1).source);
  } catch {
    return !1;
  }
}

async function sGs() {
  try {
    return await z_("tengu_violin_amati");
  } catch {
    return !1;
  }
}

function vkr() {
  try {
    return k("tengu_violin_amati", !1);
  } catch {
    return !1;
  }
}

function mtn() {
  return zf() && vkr();
}

async function ZMt() {
  let [e, o] = await Promise.all([ IR(), sGs() ]);
  return e && o;
}

export { IR, zf, QMt, Gf, jN, VF, upe, L1, ptn, ftn, Zbo, oGs, sGs, vkr, mtn, ZMt };
