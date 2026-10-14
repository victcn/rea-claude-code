// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { dr } from "./chunk-y3nc3daq.js";

function Ys(r, a) {
  let {signalB: o, timeoutMs: i, refTimer: d} = a ?? {}, n = dr();
  if (r?.aborted || o?.aborted) return n.abort(), {
    signal: n.signal,
    cleanup: () => {}
  };
  let e, t = () => {
    if (e !== void 0) clearTimeout(e);
    n.abort();
  };
  if (i !== void 0) {
    if (e = setTimeout(t, i), !d) e.unref?.();
  }
  r?.addEventListener("abort", t), o?.addEventListener("abort", t);
  let u = () => {
    if (e !== void 0) clearTimeout(e);
    r?.removeEventListener("abort", t), o?.removeEventListener("abort", t);
  };
  return {
    signal: n.signal,
    cleanup: u
  };
}

export { Ys };
