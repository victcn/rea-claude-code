// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { Ka } from "./chunk-1tsh11bz.js";

import { fi } from "./chunk-ar8d6cs7.js";

import { o, oe, T, u } from "./chunk-cvcg6n1z.js";

import "./chunk-1xnsr4dy.js";

var i = p(() => u({
  skills: T(oe()),
  nextCursor: o().nullish()
})), s = p(() => u({
  skill: oe()
}));

function c(t, e) {
  return fi(t.client).request({
    method: "skills/list",
    params: e === void 0 ? {} : {
      cursor: e
    }
  }, i(), {
    timeout: Ka()
  });
}

function S(t, e, l) {
  return fi(t.client).request({
    method: "skills/get",
    params: {
      uri: e
    }
  }, s(), {
    timeout: Ka(),
    signal: l?.signal
  });
}

export { S as getMcpSkill, c as listMcpSkillPage };
