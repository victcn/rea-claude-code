// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { GOe, pJe, Mje } from "./chunk-kawq2919.js";

var g = `[${GOe}]*`, a = `[\\s${GOe}]`, e = String.raw`\t\n\v\f\r \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000`, A = `[^=:${e}]`, E = `(?:[${e}]${a}*)?`, t = "[A-Za-z0-9_-]", n = `${t}{8}${t}*`, _ = `\\.eyJ${n}\\.${n}`, u = new RegExp(`((?<!${t})(?=${t}+${_})${t}*?)eyJ${n}${_}`, "g"), R = {
  keyValue: new RegExp("((?:^|[\\s=:])(?=[^=:\\s]+\\s*[=:]\\s*\\S)[^=:\\s]*?(?:secret|key|token|password|credential)[^=:\\s]*\\s*[=:]\\s*)\\S+", "gi"),
  bearer: /(Bearer )\S+/gi,
  basicAuth: /(Authorization:\s*Basic\s+)\S+/gi
}, l = {
  keyValue: new RegExp(`((?:^|[=:${e}])(?=[${GOe}\\ufeff]*[^=:\\s${GOe}])(?=${A}+${E}[=:]${a}*[^${e}])${A}*?(?:${Mje("secret|key|token|password|credential")})${A}*${E}[=:]${a}*)[^${e}]+`, "gi"),
  bearer: new RegExp(`((?:${Mje("Bearer")})${pJe} [${GOe}\\ufeff]*)[^${e}]+`, "gi"),
  basicAuth: new RegExp(`((?:${Mje("Authorization")})${pJe}:${a}*(?:${Mje("Basic")})${g}\\s${a}*)[^${e}]+`, "gi")
}, z = /[\p{Cf}\p{Default_Ignorable_Code_Point}\p{Cs}\u2800\ufeff]/u;

function Xc(r) {
  let s = c(r, R);
  return z.test(r) ? c(s, l) : s;
}

function c(r, s) {
  return r.replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/)[^@/\s]+@/gi, "$1***:***@").replace(s.keyValue, "$1[REDACTED]").replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/\*\*\*:\*\*\*@)(?:[^@/?#\s"',;&>|)\]}`]*@)+/gi, "$1").replace(/sk-ant-[A-Za-z0-9_.-]+/g, "[REDACTED]").replace(s.bearer, "$1[REDACTED]").replace(u, "$1[REDACTED-JWT]").replace(/(gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{82,}|gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-[A-Za-z0-9_=-]{20,}(?:\.[0-9a-z]{9})?|xox[a-z]-[A-Za-z0-9+/=%_-]{10,}|xapp-[A-Za-z0-9_-]{10,}|xwfp-[A-Za-z0-9_-]{10,}|[Hh][Oo][Oo][Kk][Ss]\.[Ss][Ll][Aa][Cc][Kk]\.[Cc][Oo][Mm]\/(?:services|workflows|triggers)\/[A-Za-z0-9+/_-]{20,}|sq0(?:atp|csp)-[A-Za-z0-9_-]{22,}|EAAA[A-Za-z0-9+/=%_-]{56,}|AIza[A-Za-z0-9_-]{35}|GOCSPX-[A-Za-z0-9_-]{28}|[sr]k_(?:live|test|prod)_[A-Za-z0-9]{24,})/g, "[REDACTED-PAT]").replace(s.basicAuth, "$1[REDACTED]").replace(/(\b[a-z][a-z0-9+.-]{0,31}:\/\/)(?!\*\*\*:\*\*\*%40)(?:\*\*\*:\*\*\*@)?(?![^@/?#\s"',;&>|)\]}`]*@)(?:[^@/?#\s"',;&<>|)\]{}`[]*["'`<>{}[\]][^@/?#\s,;&|{}"'`<>[\]()]*(%40)|[^@/?#\s"',;&<>|)\]}`[]+(%40)|(?=[^@/?#\s"',;&<>|)\]}`[]*?(?:%|:[^@/?#\s"',;&<>|)\]}`[]))[^@/?#\s"',;&<>|)\]}`[]+(?=\[REDACTED[-A-Z]*\]))/gi, (S, i, o, p) => `${i}***:***${o ?? p ?? ""}`);
}

export { Xc };
