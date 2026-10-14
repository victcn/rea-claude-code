// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { I, d6 } from "./chunk-5wbhf1bk.js";

import { rn } from "./chunk-yxennhe9.js";

import { Zce } from "./chunk-sqb9meyh.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import { _ } from "./chunk-kawq2919.js";

import { kt } from "./chunk-r2h53bm2.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import { Ns, IPr } from "./chunk-g6nh65r0.js";

import { Oht } from "./chunk-gxpbxnn3.js";

import "./chunk-601j5vvf.js";

import { N } from "./chunk-hmqkrrtz.js";

import { relative as Y } from "path";

var Z = /&(?!(?:#\d{1,7}|#[Xx][0-9a-fA-F]{1,6}|\w+);)/g, J = /^<input (?:checked="" )?disabled="" type="checkbox"> ?/;

function b(e) {
  return e.replace(Z, "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function T(e) {
  let s = e.renderImage ?? ((a, n) => b(a || n));
  return new Zce({
    gfm: !0,
    renderer: {
      html(a) {
        return b(a.text);
      },
      text(a) {
        if ("tokens" in a && a.tokens) return this.parser.parseInline(a.tokens);
        if (a.type === "text" && a.escaped) {
          let n = a.text.match(J);
          if (n) return n[0] + b(a.text.slice(n[0].length));
        }
        return b(a.text);
      },
      link(a) {
        let n = this.parser.parseInline(a.tokens);
        return e.renderLink(a.href, n, a.title);
      },
      image(a) {
        return s(a.text, a.href);
      }
    }
  });
}

var Q = T({
  renderLink(e, s, a) {
    let n = e.trim();
    if (!/^(?:https?:|mailto:|#)/i.test(n)) return s;
    let t = a ? ` title="${i(a)}"` : "";
    return `<a href="${i(n)}"${t} rel="noopener">${s}</a>`;
  },
  renderImage(e, s) {
    return `<code>[image: ${b(e || s)}]</code>`;
  }
});

function ee() {
  let e = new Map;
  return s => {
    let a = e.get(s);
    if (a !== void 0) return a;
    let n;
    try {
      n = Q.parse(A(s), {
        async: !1
      });
    } catch {
      n = `<pre>${i(s)}</pre>`;
    }
    let t = `<div class="md">${n}</div>`;
    return e.set(s, t), t;
  };
}

function c(e) {
  let s = Math.round(e * 1e3) / 10;
  if (e < 1 && s >= 100) s = 99.9;
  return Number.isInteger(s) ? `${s}%` : `${s.toFixed(1)}%`;
}

function D(e) {
  return `$${e.toFixed(2)}`;
}

function ae(e) {
  let s = e.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/);
  return s ? `${s[1]} ${s[2]} UTC` : e;
}

function z(e, s, a) {
  let n = Number.isFinite(e) ? e : 0, t = Math.max(0, Math.min(100, n * 100)), l = a !== void 0 && Number.isFinite(a) ? `<i class="tick" style="left:${Math.max(0, Math.min(100, a * 100)).toFixed(1)}%"></i>` : "";
  return `<span class="meter ${s}" aria-hidden="true"><span style="width:${t.toFixed(1)}%"></span>${l}</span>`;
}

function C(e) {
  if (e > 0) return {
    cls: "delta-pos",
    arrow: "\u2191",
    sign: "+"
  };
  if (e < 0) return {
    cls: "delta-neg",
    arrow: "\u2193",
    sign: ""
  };
  return {
    cls: "delta-zero",
    arrow: "\xb7",
    sign: ""
  };
}

function se(e) {
  let {cls: s, arrow: a, sign: n} = C(e);
  return `<span class="delta ${s}">${a} ${n}${(e * 100).toFixed(1)} pts</span>`;
}

var B = '<span class="star" title="Includes runs that errored or hit the cost ceiling \u2014 see \u201cHow to read this report\u201d">*</span>', ne = 2e4, P = 4e3, re = {
  manifest_invalid: !0,
  disabled_by_default: !0,
  will_not_load: !0,
  identity_unverified: !1,
  archive_not_probed: !1
}, te = {
  manifest_invalid: "manifest is invalid \u2014 ran without it",
  disabled_by_default: "defaultEnabled: false \u2014 ran without it",
  identity_unverified: "identity not verified",
  archive_not_probed: "archive \u2014 identity not probed",
  will_not_load: "will not load"
};

function U(e) {
  return e.suite.plugins.length > 0 ? e.suite.plugins.map(s => {
    let a = ie.test(s.name) ? s.name : _(kt(A(s.name), 80));
    return s.version !== void 0 && oe.test(s.version) ? `${a} v${s.version}` : a;
  }).join(", ") : "Eval suite";
}

var ie = /^[0-9A-Za-z._@/-]{1,80}$/, oe = /^[0-9A-Za-z._+-]{1,40}$/;

function le(e) {
  let s = e.passed ? '<span class="chip chip-pass">\u2713 pass</span>' : '<span class="chip chip-fail">\u2717 fail</span>', a = e.weight !== 1 ? `<span class="muted">\xd7${i(String(e.weight))}</span>` : "", n = e.withOnly ? '<span class="badge">plugin-fired indicator</span>' : "", t = e.judgeVotes && e.judgeVotes.length > 1 ? `<div class="kv"><span>Judge votes</span><span class="votes">${e.judgeVotes.map(p => p ? "\u2713" : "\u2717").join(" ")}</span></div>` : "", l = e.evidence ? `<div class="kv"><span>Evidence (what the judge was shown; for an image, a description of what was sent)</span></div><pre class="evidence">${i(he(e.evidence))}</pre>` : "";
  return `<details class="grader"${e.passed ? "" : " open"}>\n<summary>${s} <span class="grader-name">${i(e.name)}</span> ${a} ${n}</summary>\n<div class="grader-body">\n<p class="explanation">${i(e.explanation)}</p>\n${t}${l}\n</div>\n</details>`;
}

function de(e, s, a) {
  let n = e.error ? `<div class="run-error"><span class="chip chip-fail">\u2717 run error</span> <span class="explanation">${i(e.error)}</span></div>` : "", t = e.skippedPaidGraders ? '<div class="note">\u26a0 Cost ceiling hit during this run \u2014 LLM/baseline graders were marked fail without judging; the run still counts toward the averages with the score shown.</div>' : "", l = e.aborted ? `<div class="run-error"><span class="chip chip-fail">\u2717 aborted by mock</span> <span class="explanation">${i(e.aborted.server)}/${i(e.aborted.tool)}: ${i(e.aborted.reason)}</span></div>` : "", p = e.mocks ? `<details class="mocks"><summary>Mocked: ${e.mocks.servers.map(d => `${i(d.server)}${d.kind === "standalone" ? " (standalone)" : ""} \u2014 ${d.tools.map(f => `${i(f.tool)}=${f.responder}`).join(", ")}`).join("; ")} \xb7 ${e.mocks.calls.total} ${I(e.mocks.calls.total, "call")}${e.mocks.calls.errors ? `, ${e.mocks.calls.errors} ${I(e.mocks.calls.errors, "tool error")}` : ""}${e.mocks.calls.replay && e.mocks.calls.replay.hits + e.mocks.calls.replay.misses > 0 ? ` \xb7 replay ${e.mocks.calls.replay.hits} hit / ${e.mocks.calls.replay.misses} live` : ""}</summary>${e.mocks.calls.unmocked.length ? `<div class="note">Called but not mocked: ${e.mocks.calls.unmocked.map(d => `${i(d.tool)} \xd7${d.count}`).join(", ")}</div>` : ""}${e.mocks.warnings.map(d => `<div class="note">${i(d)}</div>`).join("")}</details>` : "";
  return `<div class="run">\n<div class="run-head">\n<span class="run-title">Run ${s + 1}</span>\n${z(e.score, a)}\n<span class="num">${c(e.score)}</span>\n<span class="muted num">${e.turns} turns \xb7 ${D(e.costUsd)}${e.startedAt ? ` \xb7 ${i(e.startedAt.slice(11, 19))} UTC` : ""}</span>\n</div>\n${n}${l}${t}${p}\n<div class="graders">${e.graders.map(le).join(`\n`)}</div>\n</div>`;
}

function S(e, s, a, n, t) {
  let l = a !== void 0 ? `${z(a, s)}\n<span class="num">${c(a)}</span>\n<span class="muted num">${c(n ?? 0)} of runs perfect</span>` : '<span class="muted">aggregate not comparable \u2014 a run in one of the arms was not fully graded</span>';
  return `<section class="arm">\n<div class="arm-head">\n<span class="arm-label">${i(e)}</span>\n${l}\n</div>\n${t.map((p, d) => de(p, d, s)).join(`\n`)}\n</section>`;
}

function ce(e) {
  let s = Object.entries(e);
  if (s.length === 0) return "";
  return `<div class="config">${s.map(([a, n]) => `<div class="kv"><span>${i(a)}</span><code>${i(_(n) ?? "")}</code></div>`).join("")}</div>`;
}

function pe(e, s) {
  return `<div class="grader-def">\n<div class="grader-def-head"><span class="grader-name">${i(e.name)}</span><span class="badge">${i(e.type)}</span>${e.weight !== 1 ? `<span class="muted">weight \xd7${i(String(e.weight))}</span>` : ""}</div>\n${e.graderMarkdown ? s(e.graderMarkdown) : ce(e.config)}\n</div>`;
}

function ue(e, s, a, n) {
  let t = (e.arms.without?.length ?? 0) > 0, l = `<details class="section" open>\n<summary>Prompt</summary>\n${a(e.promptMarkdown)}\n</details>`, p = `<details class="section" open>\n<summary>Graders \u2014 what "good" means for this case</summary>\n${e.graders.map(o => pe(o, a)).join(`\n`)}\n</details>`, d = `<details class="section" open>\n<summary>Results</summary>\n${t ? S("With plugin", "m-accent", e.aggregates.score, e.aggregates.passRate, e.arms.with) + S("Baseline (no plugin)", "m-base", e.aggregates.scoreWithout, e.aggregates.passRateWithout, e.arms.without ?? []) : S("Runs", "m-accent", e.aggregates.score, e.aggregates.passRate, e.arms.with)}\n</details>`, f = N(e.arms.with, o => o.error !== null), u = N(e.arms.with, o => o.skippedPaidGraders && o.error === null), w = e.aggregates.delta !== void 0 ? e.arms.without ?? [] : [], x = f + N(w, o => o.error !== null), m = u + N(w, o => o.skippedPaidGraders && o.error === null), v = [ x > 0 ? `<span class="flag">\u26a0 ${x} ${I(x, "run")} errored</span>` : "", m > 0 ? `<span class="flag">\u26a0 ${m} ${I(m, "run")} unjudged (cost ceiling)</span>` : "" ].join("");
  return `<article class="case${(e.aggregates.delta ?? 0) < 0 ? " case-regressed" : ""}" id="case-${s + 1}">\n<div class="case-head">\n<h2>${i(e.name)}</h2>\n<span class="muted mono">${i(e.dir)}</span>\n<span class="spacer"></span>\n${v}\n${e.aggregates.delta !== void 0 ? se(e.aggregates.delta) : ""}\n${t ? '<span class="muted">with plugin</span>' : ""}\n${z(e.aggregates.score, "m-accent", n)}\n<span class="num case-score">${c(e.aggregates.score)}${f + u > 0 ? B : ""}</span>\n</div>\n${(e.advisories ?? []).map(o => `<div class="note">\u26a0 ${i(o)}</div>`).join(`\n`)}\n${d}\n${l}\n${p}\n</article>`;
}

var j = "--plane:#f9f9f7;--surface:#fcfcfb;--ink:#0b0b0b;--ink-2:#52514e;--ink-3:#6b6a64;--hairline:rgba(11,11,11,.10);--grid:#e1e0d9;--inset:rgba(11,11,11,.04);--accent:#2a78d6;--base-fill:#6b6a64;--delta-good:#006300;--good:#067d06;--warning:#8a6100;--critical:#d03b3b;", O = "--plane:#0d0d0d;--surface:#1a1a19;--ink:#ffffff;--ink-2:#c3c2b7;--ink-3:#898781;--hairline:rgba(255,255,255,.10);--grid:#2c2c2a;--inset:rgba(255,255,255,.05);--accent:#3987e5;--base-fill:#898781;--delta-good:#0ca30c;--good:#0ca30c;--warning:#fab219;--critical:#e06c6c;", ge = `<style>\n:root{${j}\n  color-scheme:light dark;\n}\n@media (prefers-color-scheme:dark){:root{${O}color-scheme:dark}}\n:root[data-theme="dark"]{${O}color-scheme:dark}\n:root[data-theme="light"]{${j}color-scheme:light}\n*{box-sizing:border-box}\nbody{margin:0;background:var(--plane);color:var(--ink);\n  font:14px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif;\n  -webkit-text-size-adjust:100%}\n.wrap{max-width:880px;margin:0 auto;padding:40px 24px 64px;display:flex;flex-direction:column;gap:20px}\n.eyebrow{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}\nheader h1{margin:2px 0 0;font-size:24px;font-weight:600;line-height:1.25;text-wrap:balance}\n.meta{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:8px;color:var(--ink-2);font-size:13px}\n.meta .num{font-variant-numeric:tabular-nums lining-nums}\n.banner{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;\n  border:1px solid var(--hairline);background:var(--surface);font-size:13px}\n.banner .chip-warn{color:var(--warning);font-weight:600}\n.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}\n.tile{background:var(--surface);border:1px solid var(--hairline);border-radius:10px;padding:14px 16px;\n  display:flex;flex-direction:column;gap:4px}\n.tile .label{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3)}\n.tile .value{font-size:26px;font-weight:600;font-variant-numeric:tabular-nums lining-nums;line-height:1.1}\n.tile.hero .value{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:48px}\n.tile .sub{font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums}\n.tile .value.delta-pos{color:var(--delta-good)}\n.tile .value.delta-neg{color:var(--critical)}\n.toolbar{display:flex;gap:8px;justify-content:flex-end}\n.toolbar button{font:12px system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink-2);\n  background:var(--surface);border:1px solid var(--hairline);border-radius:6px;padding:4px 10px;cursor:pointer}\n.toolbar button:hover{color:var(--ink)}\n.toolbar button:focus-visible{outline:2px solid var(--accent);outline-offset:1px}\n.case{background:var(--surface);border:1px solid var(--hairline);border-radius:10px;padding:18px 20px;\n  display:flex;flex-direction:column;gap:10px}\n.case-regressed{border-left:3px solid var(--critical)}\n.verdict{margin:6px 0 0;font-size:15px}\n.verdict .delta{font-size:15px}\n.flag{font-size:11px;font-weight:600;color:var(--warning);white-space:nowrap}\n.star{color:var(--warning);font-size:.45em;vertical-align:super;line-height:0;cursor:help}\n.legend summary{cursor:pointer;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2)}\n.legend-list{margin:8px 0 0;padding-left:20px;display:flex;flex-direction:column;gap:5px;font-size:13px;color:var(--ink-2)}\n.case-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}\n.case-head h2{margin:0;font-size:16px;font-weight:600}\n.case-head .spacer{flex:1}\n.case-score{font-size:15px;font-weight:600}\n.mono{font:12px "SF Mono",ui-monospace,Menlo,Consolas,monospace}\n.num{font-variant-numeric:tabular-nums lining-nums}\n.muted{color:var(--ink-3);font-size:12px}\n.meter{display:inline-block;position:relative;width:120px;height:6px;border-radius:4px;background:var(--grid);\n  vertical-align:middle}\n.meter>span{display:block;height:100%;border-radius:4px;max-width:100%}\n.meter .tick{position:absolute;top:-2px;bottom:-2px;width:2px;background:var(--ink-3);border-radius:1px}\n.m-accent>span{background:var(--accent)}\n.m-base>span{background:var(--base-fill)}\n.delta{font-size:12px;font-weight:600;font-variant-numeric:tabular-nums}\n.delta-pos{color:var(--delta-good)}\n.delta-neg{color:var(--critical)}\n.delta-zero{color:var(--ink-3)}\ndetails.section{border-top:1px solid var(--grid);padding-top:10px}\ndetails.section>summary{cursor:pointer;font-size:12px;font-weight:600;letter-spacing:.04em;\n  text-transform:uppercase;color:var(--ink-2);list-style-position:outside;margin-left:2px}\ndetails.section>summary:hover{color:var(--ink)}\ndetails.section[open]>summary{margin-bottom:8px}\n.md{display:flex;flex-direction:column;gap:8px;background:var(--inset);border-radius:8px;\n  padding:12px 14px;overflow-wrap:break-word}\n.md>:first-child{margin-top:0}\n.md h1,.md h2,.md h3,.md h4,.md h5,.md h6{margin:4px 0 0;font-size:1em;font-weight:600;line-height:1.3}\n.md p,.md ul,.md ol,.md blockquote,.md table,.md pre,.md hr{margin:0}\n.md ul,.md ol{display:flex;flex-direction:column;gap:4px;padding-left:20px}\n.md blockquote{border-left:2px solid var(--hairline);padding-left:10px;color:var(--ink-2)}\n.md :not(pre)>code{background:var(--inset);padding:1px 4px;border-radius:4px;\n  font:.92em "SF Mono",ui-monospace,Menlo,Consolas,monospace}\n.md pre{background:var(--inset);border:1px solid var(--hairline);padding:10px 12px;border-radius:6px;\n  overflow-x:auto;font:12px/1.5 "SF Mono",ui-monospace,Menlo,Consolas,monospace}\n.md pre code{background:none;padding:0;font:inherit}\n.md table{width:100%;border-collapse:collapse}\n.md th,.md td{padding:5px 8px;text-align:left;vertical-align:top;border-bottom:1px solid var(--grid)}\n.md th{font-weight:600;color:var(--ink-2)}\n.md a{color:var(--accent);text-decoration:none}\n.md a:hover{text-decoration:underline}\n.grader-def{display:flex;flex-direction:column;gap:6px;padding:8px 0}\n.grader-def+.grader-def{border-top:1px solid var(--grid)}\n.grader-def-head{display:flex;align-items:baseline;gap:8px}\n.grader-name{font:13px "SF Mono",ui-monospace,Menlo,Consolas,monospace;font-weight:600}\n.badge{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink-2);\n  border:1px solid var(--hairline);border-radius:999px;padding:1px 8px}\n.config{display:flex;flex-direction:column;gap:2px;background:var(--inset);border-radius:8px;padding:10px 14px}\n.config code{font:12px "SF Mono",ui-monospace,Menlo,Consolas,monospace;overflow-wrap:anywhere}\n.arm{display:flex;flex-direction:column;gap:8px;padding:6px 0}\n.arm+.arm{border-top:1px dashed var(--grid);margin-top:4px;padding-top:12px}\n.arm-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}\n.arm-label{font-size:13px;font-weight:600}\n.run{border:1px solid var(--grid);border-radius:8px;padding:10px 12px;display:flex;flex-direction:column;gap:8px}\n.run-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}\n.run-title{font-size:12px;font-weight:600;color:var(--ink-2)}\n.run-error .explanation{color:var(--ink-2)}\n.note{font-size:12px;color:var(--ink-2)}\n.graders{display:flex;flex-direction:column;gap:4px}\ndetails.grader{border-radius:6px}\ndetails.grader>summary{cursor:pointer;display:flex;align-items:baseline;gap:8px;padding:3px 4px;\n  border-radius:6px;list-style:none}\ndetails.grader>summary::-webkit-details-marker{display:none}\ndetails.grader>summary::before{content:'\u25b8';font-size:10px;color:var(--ink-3);flex:none;\n  transition:transform .12s ease}\ndetails.grader[open]>summary::before{transform:rotate(90deg)}\ndetails.grader>summary:hover{background:var(--inset)}\ndetails.grader>summary:focus-visible{outline:2px solid var(--accent);outline-offset:1px}\n.grader-body{padding:6px 8px 8px 24px;display:flex;flex-direction:column;gap:6px}\n.chip{font-size:11px;font-weight:600;border-radius:999px;padding:1px 8px;white-space:nowrap}\n.chip-pass{color:var(--good);border:1px solid currentColor}\n.chip-fail{color:var(--critical);border:1px solid currentColor}\n.chip.chip-warn{color:var(--warning);border:1px solid currentColor}\n.explanation{margin:0;font-size:13px;color:var(--ink-2);white-space:pre-wrap;overflow-wrap:break-word}\n.kv{display:flex;gap:8px;font-size:12px;color:var(--ink-3)}\n.votes{font-variant-numeric:tabular-nums;letter-spacing:.1em}\npre.evidence{margin:0;background:var(--inset);border:1px solid var(--hairline);border-radius:6px;\n  padding:8px 10px;overflow-x:auto;max-height:320px;\n  font:12px/1.5 "SF Mono",ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap;overflow-wrap:break-word}\nfooter{color:var(--ink-3);font-size:12px;text-align:center;padding-top:8px}\n@media (prefers-reduced-motion:no-preference){\n  details.grader>summary,.toolbar button{transition:background .12s ease,color .12s ease}\n}\n@media (prefers-reduced-motion:reduce){\n  details.grader>summary::before{transition:none}\n}\n@media print{\n  :root,:root[data-theme="dark"],:root[data-theme="light"]{${j}color-scheme:light}\n  body{background:#fff}\n  .toolbar{display:none}\n  .case,.run,.grader-def{break-inside:avoid}\n  pre.evidence{max-height:none}\n}\n</style>`, me = `<script>\ndocument.addEventListener('DOMContentLoaded',function(){\n  var bar=document.querySelector('.toolbar');\n  if(!bar)return;\n  bar.addEventListener('click',function(e){\n    var b=e.target&&e.target.closest('button');\n    if(!b)return;\n    var open=b.dataset.act==='expand';\n    document.querySelectorAll('details.section, details.grader').forEach(function(d){d.open=open});\n  });\n});\n// Collapsed details vanish from print/PDF; these pages are share artifacts.\nwindow.addEventListener('beforeprint',function(){\n  document.querySelectorAll('details').forEach(function(d){\n    if(!d.open){d.dataset.printOpened='1';d.open=true}\n  });\n});\nwindow.addEventListener('afterprint',function(){\n  document.querySelectorAll('details[data-print-opened]').forEach(function(d){\n    d.open=false;delete d.dataset.printOpened;\n  });\n});\n<\/script>`;

function Ce(e) {
  let s = ee(), {cases: a, aggregates: n, suite: t} = e, l = a.filter(r => r.aggregates.scoreWithout !== void 0), p = U(e), d = a.reduce((r, g) => r + g.arms.with.length + (g.arms.without?.length ?? 0), 0), f = e.partial ? `<div class="banner"><span class="chip-warn">\u26a0 Partial results</span><span>${e.partialReason === "cost_ceiling" ? "The --max-cost-usd ceiling was hit before every case finished." : e.partialReason === "auth_failed" ? "A run could not authenticate (or the credential was rejected before any run), so the suite stopped before every case finished." : "The run was interrupted before every case finished."}</span></div>` : "", u = n.meanDelta, w = t.ablation === "with-without", x = a.flatMap(r => r.arms.with), m = N(x, r => r.error !== null), v = N(x, r => r.skippedPaidGraders && r.error === null), y = m + v > 0, o = a.filter(r => r.aggregates.delta !== void 0).flatMap(r => r.arms.without ?? []), k = m + N(o, r => r.error !== null), R = v + N(o, r => r.skippedPaidGraders && r.error === null), G = k + R > 0 ? `<div class="banner"><span class="chip-warn">\u26a0 Averages include non-judgments</span><span>${[ k > 0 ? `${k} ${I(k, "run")} errored` : "", R > 0 ? `${R} ${I(R, "run")} force-failed at the cost ceiling` : "" ].filter(Boolean).join("; ")} \u2014 their scores count toward the averages shown without a complete judgment.</span></div>` : "", h = a.filter(r => r.aggregates.delta !== void 0), H = u !== void 0 && h.length > 0 ? (() => {
    let {cls: r, arrow: g, sign: E} = C(u), F = N(h, M => (M.aggregates.delta ?? 0) > 0), L = N(h, M => (M.aggregates.delta ?? 0) < 0), X = h.length - F - L;
    return `<p class="verdict">Plugin effect: <span class="delta ${r}">${g} ${E}${(u * 100).toFixed(1)} pts</span> vs baseline \u2014 improved ${F} \xb7 flat ${X} \xb7 regressed ${L} of ${h.length} ${I(h.length, "case")}.</p>`;
  })() : "", V = u !== void 0 ? (() => {
    let {cls: r, arrow: g, sign: E} = C(u);
    return `<div class="tile"><span class="label">Ablation \u0394</span><span class="value num ${r}">${g === "\xb7" ? "" : `${g} `}${E}${(u * 100).toFixed(1)}</span><span class="sub">score points vs baseline, ${h.length} of ${a.length} ${I(a.length, "case")}</span></div>`;
  })() : "", q = l.length > 0 ? `${V}\n<div class="tile"><span class="label">Baseline score</span><span class="value num">${c(Oht(l.map(r => r.aggregates.scoreWithout ?? 0)))}</span><span class="sub">without the plugin</span></div>` : "", W = `<details class="section legend">\n<summary>How to read this report</summary>\n<ul class="legend-list">\n<li>A run's score is the weighted fraction of its graders that passed; a "perfect" run passed every grader.</li>\n<li>A case's score is the mean of its runs; a case passes when its score is at or above the ${c(t.threshold)} threshold (the tick on each case bar).</li>\n<li>The suite score is the mean of the per-case scores.</li>\n<li>Judge votes are independent samples of the LLM judge; the majority decides pass or fail.</li>\n${w ? `<li>"With plugin" and "Baseline" runs are identical except for the plugin being loaded; \u0394 is the with-plugin score minus the baseline score.${e.cases.some(r => (r.arms.without?.length ?? 0) === 0) ? " Cases that show no baseline ran a single arm (nothing to strip, or a replay case) \u2014 their scores are absolute." : ""}</li>` : "<li><strong>No baseline arm was run</strong> (ablation off) \u2014 this report shows absolute scores only and cannot say whether the plugin caused them. Re-run with <code>--ablation with-without</code> to measure the plugin\u2019s effect.</li>"}\n${y ? "<li>Scores marked with * include runs that errored or hit the cost ceiling (LLM graders force-failed); those runs count toward the means without a complete judgment.</li>" : ""}\n</ul>\n</details>`, K = `<div class="wrap">\n<header>\n<div class="eyebrow">Plugin eval report</div>\n<h1>${i(p)}</h1>\n${H}\n<div class="meta">\n${t.plugins.map(r => `<span class="mono">${i(Y(t.root, r.path) || ".")}${r.problem === void 0 ? "" : ` <span class="chip ${re[r.problem] ? "chip-fail" : "chip-warn"}">${i(te[r.problem])}</span>`}</span>`).join(`\n`)}\n<span>Claude Code v${i(e.claudeVersion)}</span>\n<span class="num">${i(ae(e.startedAt))}</span>\n<span class="num">${rn(e.durationSeconds * 1e3, {
    hideTrailingZeros: !0
  })}</span>\n<span class="num">${D(e.costUsd)}</span>\n<span class="num">${d} runs</span>\n${(t.concurrency ?? 1) > 1 ? `<span class="num">${t.concurrency} in flight</span>` : ""}\n${t.pluginId ? `<span class="mono">${i(t.pluginId)}</span>` : ""}\n${t.modelOverride ? `<span>model ${i(t.modelOverride)}</span>` : ""}\n<span>judge ${i(t.judgeModel ?? "default")}</span>\n<span class="num">threshold ${c(t.threshold)}</span>\n${t.caseFilter || t.tagFilters?.length ? `<span>filtered: ${[ t.caseFilter ? `--case ${i(t.caseFilter)}` : "", ...(t.tagFilters ?? []).map(r => `--tag ${i(r)}`) ].filter(Boolean).join(" ")}</span>` : ""}\n</div>\n</header>\n${f}${G}\n<section class="tiles">\n<div class="tile hero"><span class="label">Suite score${w ? " \xb7 with plugin" : ""}</span><span class="value">${c(n.overallScore)}${y ? B : ""}</span><span class="sub">mean of per-case scores${y ? ` \xb7 * includes ${m + v} ${I(m + v, "run")} without a complete judgment` : ""}</span></div>\n${q}\n<div class="tile"><span class="label">Cases</span><span class="value num">${n.casesTotal}</span><span class="sub">${n.casesPassed} of ${n.casesTotal} \u2265 ${c(t.threshold)} threshold</span></div>\n<div class="tile"><span class="label">Perfect runs</span><span class="value num">${c(n.overallPassRate)}</span><span class="sub">runs where every grader passed</span></div>\n</section>\n${W}\n${a.length > 0 ? `<div class="toolbar"><button type="button" data-act="expand">Expand all</button><button type="button" data-act="collapse">Collapse all</button></div>\n${a.map((r, g) => ue(r, g, s, t.threshold)).join(`\n`)}` : '<p class="muted">No cases in this result file.</p>'}\n<footer>Generated by <code>claude plugin eval</code> \xb7 schema v${e.schemaVersion} \xb7 scores are not comparable across different suites${fe(e)}</footer>\n</div>`;
  return `${ge}\n${K}\n${me}`;
}

function fe(e) {
  let s = e.cases.some(n => {
    let t = Oht(n.arms.with.map(l => l.score));
    return Math.abs(t - n.aggregates.score) > .005;
  }), a = e.cases.length > 0 && Math.abs(Oht(e.cases.map(n => n.aggregates.score)) - e.aggregates.overallScore) > .005;
  return s || a ? ' \xb7 <span class="flag">\u26a0 aggregates in this file do not match values recomputed from its runs</span>' : "";
}

function ze(e, s) {
  return `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Eval report \u2014 ${i(U(e))}</title>\n</head>\n<body>\n${s}\n</body>\n</html>\n`;
}

function he(e) {
  return d6(e, ne - P, P, s => `\n[\u2026${s} more chars \u2014 full text in aggregate-result.json\u2026]\n`);
}

function i(e) {
  return Ns(A(e));
}

var xe = new RegExp(`[${IPr}\u2028\u2029]|[^\\P{Cc}\\n\\t]`, "gu");

function A(e) {
  return e.replace(xe, " ");
}

export { U as evalReportTitle, Ce as renderEvalReportFragment, ze as wrapReportDocument };
