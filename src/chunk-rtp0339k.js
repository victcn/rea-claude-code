// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { it } from "./chunk-zscnwzv2.js";

function LQt(t) {
  let r = t.match(/^([A-Z]):(.*)$/i);
  if (!r) return null;
  return `/mnt/${r[1].toLowerCase()}${r[2].replaceAll("\\", "/")}`;
}

class h5e {
  wslDistroName;
  constructor(t) {
    this.wslDistroName = t;
  }
  async toLocalPath(t) {
    if (!t) return t;
    if (this.wslDistroName) {
      let o = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
      if (o && o[1] !== this.wslDistroName) return t;
    }
    let {stdout: r, code: e} = await it("wslpath", [ "-u", t ], {
      useCwd: !1
    }), n = r.trim();
    if (e === 0 && n) return n;
    return LQt(t) ?? t.replaceAll("\\", "/");
  }
  async toIDEPath(t) {
    if (!t) return t;
    let {stdout: r, code: e} = await it("wslpath", [ "-w", t ], {
      useCwd: !1
    }), n = r.trim();
    if (e === 0 && n) return n;
    return t;
  }
}

function Gbs(t, r) {
  let e = t.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
  if (e) return e[1] === r;
  return !0;
}

export { LQt, h5e, Gbs };
