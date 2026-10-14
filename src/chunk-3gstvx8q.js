// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ln } from "./chunk-ddr690nj.js";

import { dM, PE, Jh, h_ } from "./chunk-60c97a4m.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { qg, YOr } from "./chunk-9yajep3y.js";

import { MT } from "./chunk-fwpqj1qs.js";

import { dirname as v, join as a } from "path";

import { realpath as f } from "fs";

import { promisify as m } from "util";

var h = m(f.native);

function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : dM(e) || "empty-id";
}

async function d(e, t, {isRootResolved: n = !1} = {}) {
  return n ? Ln(e) : h_(e, MT(t));
}

async function TYo(e, t, n, i) {
  return a(Jh(await d(e, n, i)), B7n(t));
}

async function AYo(e, t, n, i) {
  let o = await d(e, n, i), p = a(Jh(o), B7n(t)), r = PE(o), s = n === void 0 ? void 0 : B2r(r, t);
  return {
    path: p,
    projectKey: r,
    v5: n === void 0 || s === void 0 ? void 0 : {
      backend: n,
      key: s
    }
  };
}

function B2r(e, t) {
  let n = Fe.dirSyncRecord(e, c(t));
  return qg(n) === void 0 ? n : void 0;
}

function B7n(e) {
  return `${c(e)}${YOr}`;
}

export { TYo, AYo, B2r, B7n };
