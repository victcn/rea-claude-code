// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { StringDecoder as s } from "string_decoder";

var p = 1048576;

function qBt(o, r) {
  let d = new s("utf8"), e = "", t = !1, l = i => {
    if (t) return;
    e += typeof i === "string" ? i : d.write(i);
    let f;
    while ((f = e.indexOf(`\n`)) >= 0) {
      let c = e.slice(0, f);
      if (e = e.slice(f + 1), c) r(c);
    }
    if (e.length > p) {
      if (t = !0, e = "", "destroy" in o) o.destroy();
    }
  }, n = () => {
    if (t) return;
    if (e += d.end(), e) r(e), e = "";
  };
  return o.on("data", l), o.on("end", n), o.on("close", n), () => {
    o.off("data", l), o.off("end", n), o.off("close", n);
  };
}

export { qBt };
