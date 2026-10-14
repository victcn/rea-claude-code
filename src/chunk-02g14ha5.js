// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { VU } from "./chunk-kawq2919.js";

import { iq, rr, KXe, So } from "./chunk-wptm3jf5.js";

import { K5 } from "./chunk-rgd61mm3.js";

function fOe(r) {
  return r.replace(/:\d+$/, "");
}

var e = "gitlab.com", o = "bitbucket.org", a$s = {
  github: rr,
  gitlab: e,
  bitbucket: o
}, n = {
  "ssh.github.com": "github",
  "altssh.gitlab.com": "gitlab",
  "altssh.bitbucket.org": "bitbucket"
};

function uI(r) {
  if (r = fOe(r), So(r)) return "github";
  let t = KXe(r), i = n[t];
  if (i) return i;
  if (t === e) return "gitlab";
  if (t === o) return "bitbucket";
  return "other";
}

function ugt(r) {
  let t = r.trim();
  if (iq(t) || VU(t) || K5(t)) return null;
  if (t.includes("://")) try {
    return new URL(t).hostname || null;
  } catch {
    return null;
  }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}

function Lan(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t && !VU(r) ? {
    user: t[1],
    host: t[2],
    path: t[3]
  } : null;
}

export { fOe, a$s, uI, ugt, Lan };
