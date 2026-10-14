// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { c } from "./chunk-hwdwjvh8.js";

import { l, ug, xae, W } from "./chunk-b0z4bv3v.js";

import { nb, J } from "./chunk-nvtwm272.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { I, ne, sc } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { un } from "./chunk-y752zmas.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { kp, hu } from "./chunk-5brm0azz.js";

import { ezn, yBe, Tpt, dMs, Ft, k, Ce, ce } from "./chunk-xywp7esx.js";

import { tg } from "./chunk-x35dw27e.js";

import { qO } from "./chunk-g6nh65r0.js";

import { Aee } from "./chunk-nc0jxmkt.js";

import { cIe, fn, a_, He, nr, hU, yU, UAo, DK, BBe, Bc, Gxr, pft, KO, s$, mT, yve, _l, _U } from "./chunk-f1zpf9me.js";

import { jd } from "./chunk-sfvypv11.js";

import { z9 } from "./chunk-hmce8a0s.js";

import { BF, ee } from "./chunk-kq1bg4dg.js";

import { T6e, Syo, Vvr, wyo, kBn, Kvr, sks, que, jSe, aks, qdt, qvr, W8, TBn, Yvr, vyo, lks, ABn, Yue, $Fe, CBn, dks, cks, den, WSe, WY, T0, Eyo, z8, eMt, Jvr, uen, uks, pen, Cyo } from "./chunk-6sf4kq52.js";

import { Ag } from "./chunk-3zb1ef23.js";

import { Msr, zVe, s3, qAn, qXr, YAn, FA, Gne, ode, vc } from "./chunk-btyj9pkf.js";

import { rde } from "./chunk-2egwyx4e.js";

import { Ect, ph, _Ts, N6e, lT, nZ, P_o, I_o, Wf, y1n, $6e, uK, _1n, bTs, O_o, STs, wTs, M_o, H_o, D_o, vTs, ETs, I1, kct, S1n, w1n, F6e, TMt, N_o, U6e, $Er, XY, CTs, pK, LN, RTs, xR, NN, $_o, PTs, RMt, xO, Wg, Wen } from "./chunk-ann91fyn.js";

import { Yct } from "./chunk-kd22gz0e.js";

import { ylt, im, eu, lSe, j$e, f1, i$n } from "./chunk-z655gvmz.js";

import { vz } from "./chunk-2h2evctp.js";

import { Lnt } from "./chunk-xshzkngt.js";

import { YEt, Isr } from "./chunk-mpn40v8v.js";

import { KVe, i3 } from "./chunk-jad54dhk.js";

import { Ys } from "./chunk-7fcp0cw9.js";

import { Ba } from "./chunk-mfje7p8w.js";

import { iK, oks } from "./chunk-1dj3skht.js";

import { me, Wd, lr, St, Dd } from "./chunk-dexzwy8h.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, v, M, oe, T, u, _t, $e, ue, U, A } from "./chunk-cvcg6n1z.js";

import { rae } from "./chunk-dgqa0xqf.js";

import { at } from "./chunk-0bq6eb61.js";

import { N, yI, D } from "./chunk-hmqkrrtz.js";

import { extname as Co } from "path";

function XL(e, n) {
  let r = /^(\d{1,15})-/.exec(e)?.[1], s = /^(\d{1,15})-/.exec(n)?.[1];
  return r === void 0 || s === void 0 ? null : Number(r) - Number(s);
}

var LEt = /^\d{1,15}-[0-9a-f]{1,32}$/;

var gye = " The server refuses force:true over a version saved from inside the page; only a publish built on that version is accepted.";

function zqt(e) {
  let n = e.trimEnd();
  if (!n.startsWith("\x3c!--") || !n.endsWith("--\x3e") || n.length < 7) return !1;
  let r = n.slice(4, -3);
  return !r.startsWith(">") && !r.startsWith("->") && !r.includes("--\x3e") && !r.includes("--!>") && !r.includes("\x3c!--") && !r.endsWith("<!-");
}

function Gqt() {
  let e = a.CLAUDE_CODE_ACCOUNT_UUID, n = a.CLAUDE_CODE_ORGANIZATION_UUID;
  if (e && n) return {
    accountUuid: e.toLowerCase(),
    organizationUuid: n.toLowerCase()
  };
  let r = Ect();
  if (!r?.accountUuid) return;
  return {
    accountUuid: r.accountUuid.toLowerCase(),
    organizationUuid: r.organizationUuid?.toLowerCase() ?? null
  };
}

var qr = p(() => u({
  accountUuid: o(),
  organizationUuid: o().nullable(),
  version: o(),
  capabilities: T(o()),
  fetchedAt: v()
})), la = p(() => u({
  accountUuid: o(),
  organizationUuid: o().nullable(),
  status: v(),
  deniedAt: v(),
  tokenExpiresAt: v()
}));

function Kr(e) {
  let n = Gqt();
  if (n === void 0 || !e.success || e.data.accountUuid !== n.accountUuid || e.data.organizationUuid !== n.organizationUuid) return;
  return e.data;
}

function aXr() {
  return Kr(qr().safeParse(ce().cachedArtifactRoster));
}

function lZo() {
  return Kr(la().safeParse(ce().artifactRosterDenied));
}

function csr() {
  let e = ee().roster;
  if (e !== void 0) return {
    roster: e,
    source: "session"
  };
  let n = a.CLAUDE_CODE_REMOTE ? void 0 : aXr();
  return n === void 0 ? void 0 : {
    roster: n,
    source: "disk"
  };
}

var ca = 36e5;

function hye(e) {
  let {session: n, epoch: r, roster: s, storageV5: h} = e;
  if (ee() !== n || n.accountEpoch !== r) return {
    adopted: !1,
    persisted: Promise.resolve()
  };
  if (n.roster = s, s.capabilities.includes("assets")) n.assetsOnRoster = !0;
  if (a.CLAUDE_CODE_REMOTE) return {
    adopted: !0,
    persisted: Promise.resolve()
  };
  return {
    adopted: !0,
    persisted: lXr(n, r, h, (y, w) => {
      let S = qr().safeParse(w.cachedArtifactRoster), x = S.success ? S.data : void 0, P = Date.now();
      if (w.artifactRosterDenied === void 0 && x !== void 0 && x.accountUuid === y.accountUuid && x.organizationUuid === y.organizationUuid && x.version === s.version && yI(x.capabilities, s.capabilities) && x.fetchedAt <= P && P - x.fetchedAt < ca) return;
      return {
        cachedArtifactRoster: {
          ...y,
          version: s.version,
          capabilities: [ ...s.capabilities ],
          fetchedAt: P
        },
        artifactRosterDenied: void 0
      };
    }).catch(y => {
      t(`Could not save the artifact capability roster to config; it will be fetched again next start: ${l(y)}`);
    })
  };
}

async function lXr(e, n, r, s) {
  let h = Gqt();
  if (h === void 0 || e.accountEpoch !== n) return;
  await Ce(b => {
    if (e.accountEpoch !== n || Gqt()?.accountUuid !== h.accountUuid) return b;
    let y = s(h, b);
    return y === void 0 ? b : {
      ...b,
      ...y
    };
  }, r);
}

function Zr() {
  return !k("tengu_pewter_canteen", !1);
}

var da = "data-chart-runtime";

function Qr(e) {
  return e.includes(da);
}

function ua(e) {
  return qdt(e);
}

function ei(e) {
  return den(e) >= 0;
}

function ti(e) {
  let n = [], r = e.indexOf(kBn), s = -1;
  while (r >= 0) {
    let h = r + kBn.length;
    if (s < h) {
      if (s = e.indexOf(Kvr, h), s < 0) break;
    }
    let b = e.indexOf(kBn, h);
    if ((b < 0 || b > s) && ei(e.slice(h, s))) n.push([ r, s + Kvr.length ]);
    r = b;
  }
  return TBn(e, n);
}

var Xr = `(function () {\n  if (typeof Chart === 'undefined') return;\n  var specEl = document.querySelector('script[type="application/json"][data-chart-runtime]');\n  var el = document.getElementById('primary-chart');\n  if (!specEl || !el) return;\n  var spec;\n  try { spec = JSON.parse(specEl.textContent); } catch (e) { return; }\n  var series = (spec.series || []).filter(function (s) { return Array.isArray(s.points) && s.points.length; });\n  if (!series.length) return; /* keep the fallback's No-data state */\n\n  var chart = null;\n  /* Rebuilds the whole config on every call: resolved colors are baked into\n     the config at creation, so a theme flip must re-read the custom\n     properties (getComputedStyle re-called) and recreate the chart.\n     Deterministic: same data, same pixels PER THEME. */\n  function render() {\n  var rootStyle = getComputedStyle(document.documentElement);\n  function cssVar(name, fb) {\n    var v = rootStyle.getPropertyValue(name).trim();\n    return v || fb;\n  }\n  function resolveColor(c, fb) {\n    c = (c || fb || '').trim();\n    var m = /^var\\((--[^,)]+)(?:,([^)]*))?\\)$/.exec(c);\n    if (m) return cssVar(m[1], (m[2] || '').trim() || '#2563eb');\n    return c || '#2563eb';\n  }\n  var accent = cssVar('--accent', '#2563eb');\n  var inkMuted = cssVar('--ink-muted', '#64748b');\n  var gridLine = cssVar('--line', '#e2e8f0');\n  var slicePalette = [accent, cssVar('--good', '#059669'), '#d97706', '#7c3aed', inkMuted, '#0ea5e9', '#db2777'];\n\n  var type = spec.type === 'bar' ? 'bar' : spec.type === 'donut' ? 'doughnut' : 'line';\n  /* Category scale aligns data by index, so a tick array shorter or longer\n     than the point list would drop or misplace points \u2014 the fallback plots\n     by x value and tolerates that; same data must render the same chart on\n     both paths. Use the tick labels only when they align one-per-point. */\n  var ticks = (spec.x && spec.x.ticks) || [];\n  var labels = ticks.length === series[0].points.length\n    ? ticks\n    : series[0].points.map(function (p) { return String(p[0]); });\n\n  var allYs = [];\n  series.forEach(function (s) { s.points.forEach(function (p) { allYs.push(p[1]); }); });\n  var yMin = spec.y && spec.y.min != null ? spec.y.min : Math.min(0, Math.min.apply(null, allYs));\n  var yMax = spec.y && spec.y.max != null ? spec.y.max : Math.max.apply(null, allYs) * 1.05;\n  /* Same tick-label precision rule as the fallback renderer, so both paths\n     label identically: sub-1 steps get distinguishing decimals; explicit\n     domains render the step exactly (<=2 decimals). */\n  var step = (yMax - yMin) / 4;\n  var dec = step > 0 && step < 1 ? Math.min(6, Math.ceil(-Math.log10(step)) + 1) : 0;\n  if (spec.y && spec.y.min != null && spec.y.max != null) {\n    for (dec = 0; dec < 2 && step * Math.pow(10, dec) !== Math.round(step * Math.pow(10, dec)); dec++);\n  }\n\n  var data, options;\n  var base = { responsive: true, maintainAspectRatio: false, animation: false };\n  if (type === 'doughnut') {\n    data = {\n      labels: labels,\n      datasets: [{\n        data: series[0].points.map(function (p) { return p[1]; }),\n        backgroundColor: (series[0].colors || []).map(function (c, i) { return resolveColor(c, slicePalette[i % slicePalette.length]); })\n          .concat(slicePalette.slice((series[0].colors || []).length)).slice(0, series[0].points.length),\n        borderWidth: 1\n      }]\n    };\n    options = Object.assign({}, base, {\n      plugins: { legend: { display: true, position: 'right', labels: { color: inkMuted } } },\n      cutout: '62%'\n    });\n  } else {\n    data = {\n      labels: labels,\n      datasets: series.map(function (s) {\n        var c = resolveColor(s.color, 'var(--accent)');\n        return {\n          label: s.name || '',\n          data: s.points.map(function (p) { return p[1]; }),\n          borderColor: c,\n          backgroundColor: c,\n          borderWidth: 2,\n          pointRadius: type === 'line' ? 0 : undefined,\n          tension: 0\n        };\n      })\n    };\n    options = Object.assign({}, base, {\n      plugins: { legend: { display: series.length > 1, labels: { color: inkMuted, boxWidth: 10 } } },\n      scales: {\n        x: {\n          title: spec.x && spec.x.label ? { display: true, text: spec.x.label, color: inkMuted } : undefined,\n          grid: { display: false },\n          ticks: { color: inkMuted }\n        },\n        y: {\n          min: yMin,\n          max: yMax,\n          title: spec.y && spec.y.label ? { display: true, text: spec.y.label, color: inkMuted } : undefined,\n          grid: { color: gridLine },\n          ticks: { color: inkMuted, count: 5, format: { maximumFractionDigits: dec, minimumFractionDigits: 0 } }\n        }\n      }\n    });\n  }\n\n  if (chart) { chart.destroy(); chart = null; }\n  while (el.firstChild) el.removeChild(el.firstChild);\n  var canvas = document.createElement('canvas');\n  el.appendChild(canvas);\n  chart = new Chart(canvas, { type: type, data: data, options: options });\n  }\n\n  render();\n  /* Keep the canvas in step with live theme flips, like the SVG fallback's\n     native var() behavior and the mermaid precedent. Destroy+recreate is\n     idempotent under rapid flips (render() always tears down first). */\n  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;\n  if (mq && mq.addEventListener) mq.addEventListener('change', render);\n  if (typeof MutationObserver !== 'undefined') {\n    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });\n  }\n})();`;

async function Un() {
  let e;
  try {
    let {loadChartBundleJs: r} = await import("./chunk-17vtze1m.js");
    e = await r();
  } catch {
    return f("artifact_publish", "chart_bundle_unreadable"), null;
  }
  if (ua(e) !== null) return f("artifact_publish", "chart_bundle_unsafe"), null;
  if (qdt(Xr) !== null) return f("artifact_publish", "chart_init_unsafe"), null;
  let n = `\n<script>` + e + `<\/script>\n<script>` + Xr + `<\/script>\n`;
  if (!ei(n)) return f("artifact_publish", "chart_block_unstrippable"), null;
  return kBn + n + Kvr;
}

function fa(e) {
  return qdt(e);
}

var pa = 8;

function ha(e) {
  return `${Vvr}${e}--\x3e`;
}

var ni = 4194304;

function ri(e, n = 0) {
  return e[0] === `\n` && CBn(e, 1) > 0 && e.endsWith(`<\/script>\n`) && !e.includes(Vvr) && den(e) === n;
}

var ga = 2, ii = {
  beginPrefix: Vvr,
  end: wyo,
  lenDigitsMax: pa,
  maxSpan: ni,
  openTags: ga,
  validate: ri
}, ma = 5e4, ba = 25e4, _a = 4096;

function si(e) {
  let n = e.toLowerCase(), r = 0;
  for (;;) {
    if (r = n.indexOf("<code", r), r < 0) return !1;
    let s = n[r + 5];
    if (s === void 0) return !1;
    if (!qvr.has(s)) {
      r += 5;
      continue;
    }
    let h = Math.min(r + _a, n.length), b = h;
    for (let w = r + 5; w < h; w++) if (n[w] === ">") {
      b = w;
      break;
    }
    let y = n.slice(r + 5, b);
    for (let w of y.matchAll(/language-([\w.+#-]+)/g)) {
      let S = w[1];
      if (Object.prototype.hasOwnProperty.call(yBe, S) || Object.prototype.hasOwnProperty.call(Tpt, S)) return !0;
    }
    r = b;
  }
}

function ya() {
  return `(function(){\nif(typeof hljs==='undefined')return;\nvar budget=${ba};\nvar codes=Array.prototype.slice.call(document.querySelectorAll('pre>code'));\nfor(var i=0;i<codes.length;i++){\nvar el=codes[i];\nif(el.hasAttribute('data-claude-hljs-claimed'))continue;\nvar m=/(?:^|\\s)language-(\\S+)/.exec(el.className||'');\nif(!m||!hljs.getLanguage(m[1]))continue;\nif(el.children.length)continue;\nvar src=(el.textContent||'').replace(/\\n$/,'');\nif(src.length>${ma}||src.length>budget)continue;\nbudget-=src.length;\nel.setAttribute('data-claude-hljs-claimed','1');\ntry{\nvar res=hljs.highlight(src,{language:m[1],ignoreIllegals:true});\nel.innerHTML=res.value;\nel.classList.add('hljs');\n}catch(e){}\n}\n})();`;
}

async function Vn() {
  let e;
  try {
    let {loadHljsBundleJs: b} = await import("./chunk-hyqs1xac.js");
    e = await b();
  } catch (b) {
    return d(b), f("artifact_publish", "hljs_bundle_unreadable"), null;
  }
  let n = ee().bundleEmbedVerdicts;
  if (n.hljs === void 0) n.hljs = fa(e);
  if (n.hljs !== null) return f("artifact_publish", "hljs_bundle_unsafe"), null;
  let r = ya();
  if (qdt(r) !== null) return f("artifact_publish", "hljs_init_unsafe"), null;
  let s = `\n<script>` + e + `<\/script>\n<script>` + r + `<\/script>\n`;
  if (s.length >= ni) return f("artifact_publish", "hljs_bundle_overspan"), null;
  let h = ee().blockStripVerdicts;
  if (h.hljs === void 0) h.hljs = ri(s);
  if (!h.hljs) return f("artifact_publish", "hljs_block_unstrippable"), null;
  return `\n` + ha(s.length) + s + wyo + `\n`;
}

var wa = {
  light: {
    surface: "#f4efe4",
    text: "#42392e",
    line: "#8a7f6d",
    border: "#7a6c52",
    bg: "#fffdf8"
  },
  dark: {
    surface: "#262b34",
    text: "#f2f3f5",
    line: "#a8adb8",
    border: "#9aa4b8",
    bg: "#1f232b"
  }
}, va = "<style>.mermaid-diagram{margin-block:4px}.mermaid-diagram svg{display:block;margin:0 auto;max-width:100%;height:auto}</style>";

function Sa() {
  return `(function(){\nvar CFG=` + _({
    palettes: wa
  }) + `;\nif(typeof mermaid==='undefined')return;\nvar pres=Array.prototype.slice.call(document.querySelectorAll('pre.mermaid')).filter(function(p){if(p.hasAttribute('data-claude-mermaid-claimed'))return false;p.setAttribute('data-claude-mermaid-claimed','1');return true;});\nif(!pres.length)return;\nvar mq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;\nvar root=document.documentElement;\nvar items=pres.map(function(pre){\nvar mount=document.createElement('div');mount.className='mermaid-diagram';\nreturn {pre:pre,mount:mount,src:pre.textContent||''};\n});\nvar seq=0;\nvar renderGen=0;\nvar lastKey='';\nfunction pageBg(fallback){\nvar els=[document.body,document.documentElement];\nfor(var i=0;i<els.length;i++){\nvar c=els[i]&&getComputedStyle(els[i]).backgroundColor;\nif(c&&c!=='transparent'&&c!=='rgba(0, 0, 0, 0)')return c;\n}\nreturn fallback;\n}\nfunction render(){\nvar theme=root.getAttribute('data-theme');\nvar dark=theme==='dark'||(!!(mq&&mq.matches)&&theme!=='light');\nvar pal=dark?CFG.palettes.dark:CFG.palettes.light;\nvar bg=pageBg(pal.bg);\nvar key=(dark?'d':'l')+'|'+bg;\nif(key===lastKey)return;\nlastKey=key;\nvar gen=++renderGen;\nvar font=getComputedStyle(document.body).fontFamily||'sans-serif';\nvar nat={useMaxWidth:false};\nmermaid.initialize({\nstartOnLoad:false,securityLevel:'strict',theme:'base',\nflowchart:nat,sequence:nat,er:nat,state:nat,class:nat,pie:nat,\ngantt:nat,journey:nat,timeline:nat,gitGraph:nat,mindmap:nat,xyChart:nat,\nquadrantChart:nat,sankey:nat,c4:nat,requirement:nat,block:nat,\npacket:nat,kanban:nat,architecture:nat,radar:nat,\nthemeVariables:{background:bg,mainBkg:pal.surface,primaryColor:pal.surface,\nprimaryTextColor:pal.text,lineColor:pal.line,primaryBorderColor:pal.border,\nnodeBorder:pal.border,clusterBorder:pal.border,edgeLabelBackground:bg,\nclusterBkg:'rgba(127,127,127,0.07)',titleColor:pal.text,\ndarkMode:dark,rowOdd:bg,rowEven:'rgba(127,127,127,0.07)',\nattributeBackgroundColorOdd:bg,attributeBackgroundColorEven:'rgba(127,127,127,0.07)',\nfontSize:'16px',fontFamily:font},\nthemeCSS:'.node rect, .node circle, .node polygon, .node path, .cluster rect { stroke-width: 2px; }'\n});\nitems.forEach(function(it){\nvar id='claude-mermaid-'+seq++;\nmermaid.render(id,it.src).then(function(r){\nif(gen!==renderGen)return;\nvar prev=it.pre.previousElementSibling;\nif(prev&&prev.className==='mermaid-diagram'&&prev!==it.mount)return;\nit.mount.innerHTML=r.svg;\nif(!it.mount.parentNode)it.pre.parentNode.insertBefore(it.mount,it.pre);\nit.pre.style.display='none';\n},function(){\nvar scratch=document.getElementById(id);\nif(scratch)scratch.parentNode.removeChild(scratch);\nscratch=document.getElementById('d'+id);\nif(scratch)scratch.parentNode.removeChild(scratch);\nif(gen!==renderGen)return;\nif(it.mount.parentNode)it.mount.parentNode.removeChild(it.mount);\nit.pre.style.display='';\n});\n});\n}\nrender();\nif(mq&&mq.addEventListener)mq.addEventListener('change',render);\nif(typeof MutationObserver!=='undefined')new MutationObserver(render).observe(root,{attributes:true,attributeFilter:['data-theme']});\n})();`;
}

var xa = 8;

function Ea(e) {
  return `${T6e}${e}--\x3e`;
}

var Aa = 8388608;

function ai(e, n = 0) {
  let r = e[0] === `\n` ? dks(e, 1) : 0;
  if (!r || !e.endsWith(`<\/script>\n`) || e.includes(T6e)) return !1;
  let s = 1 + r, h = lks(e.slice(s));
  if (h === null || e.indexOf("<", s) !== s + h.data) return !1;
  let b = r > 7 ? 1 : 0, y = W8(e.slice(s + h.after)), w = cks(y, 0);
  if (w !== null) {
    if (!y.startsWith("<\/script>", w.len)) return !1;
    b += w.annotated ? 1 : 0, y = y.slice(w.len + 9);
  }
  let S = den(y);
  return S >= 0 && S + b === n;
}

var Ra = 3, oi = {
  beginPrefix: T6e,
  end: Syo,
  lenDigitsMax: xa,
  maxSpan: Aa,
  openTags: Ra,
  validate: ai
}, ka = 4096;

function li(e) {
  let n = e.toLowerCase(), r = 0;
  for (;;) {
    if (r = n.indexOf("<pre", r), r < 0) return !1;
    let s = n[r + 4];
    if (s === void 0) return !1;
    if (!qvr.has(s)) {
      r += 4;
      continue;
    }
    let h = Math.min(r + ka, n.length), b = h, y = !1;
    for (let w = r + 4; w < h; w++) if (n[w] === ">") {
      b = w, y = !0;
      break;
    }
    if (Ta(n.slice(r + 4, b))) return !0;
    r = y ? b + 1 : b;
  }
}

function Ta(e) {
  let n = e.length, r = 0;
  while (r < n) {
    let s = e.indexOf("class", r);
    if (s < 0) return !1;
    let h = e[s - 1];
    if (!(h === " " || h === "\t" || h === `\n` || h === "\f" || h === "\r")) {
      r = s + 5;
      continue;
    }
    let b = s + 5;
    while (b < n && /\s/.test(e[b])) b++;
    if (e[b] !== "=") {
      r = s + 5;
      continue;
    }
    b++;
    while (b < n && /\s/.test(e[b])) b++;
    let y = e[b], w;
    if (y === '"' || y === "'") {
      let S = e.indexOf(y, b + 1);
      if (S < 0) return !1;
      w = e.slice(b + 1, S);
    } else {
      let S = b;
      while (S < n && !/[\s>]/.test(e[S])) S++;
      w = e.slice(b, S);
    }
    for (let S of w.split(/\s+/)) if (S === "mermaid") return !0;
    r = s + 5;
  }
  return !1;
}

function RAn() {
  let e = Sa();
  if (qdt(e) !== null) return f("artifact_publish", "mermaid_init_unsafe"), null;
  let n = `\n` + va + `\n` + sks + `<\/script>\n<script>` + e + `<\/script>\n`, r = ee().blockStripVerdicts;
  if (r.mermaid === void 0) r.mermaid = ai(n);
  if (!r.mermaid) return f("artifact_publish", "mermaid_block_unstrippable"), null;
  return `\n` + Ea(n.length) + n + Syo + `\n`;
}

function gn(e) {
  return {
    chart: Qr(e),
    mermaid: li(e),
    highlight: si(e)
  };
}

var mn = "// DOC:anchors:begin", Pa = /^(P|H1|H2|H3|H4|H5|H6|LI|UL|OL|BLOCKQUOTE|ASIDE|SECTION|DIV|TABLE|TR|TD|TH|DL|DT|DD|FIGURE|FIGCAPTION|CAPTION|PRE|HEADER|FOOTER|NAV|SUMMARY|DETAILS|ADDRESS|HGROUP|HR)$/;

function Ca(e) {
  let n = 2166136261;
  for (let r = 0; r < e.length; r++) n = Math.imul(n ^ e.charCodeAt(r), 16777619);
  return (n >>> 0).toString(36);
}

function $a(e, n, r, s) {
  let h = "b-" + Ca(e + `\n` + n);
  if (!r.has(h)) return h;
  let b = s.get(h) || 2;
  while (r.has(h + "-" + b)) b++;
  return s.set(h, b + 1), h + "-" + b;
}

var ci = /^b-[0-9a-z]{1,7}(-[0-9]+)?$/, di = "<!doctype html>", Oa = 33554432;

function Na(e, n) {
  if (n === void 0) return;
  let r = /([^\t\n\f\r /=>]+)(?:[\t\n\f\r ]*=[\t\n\f\r ]*(?:"[^"]*"|'[^']*'|[^\t\n\f\r >]*))?/y;
  r.lastIndex = n.startOffset;
  let s = r.exec(e);
  if (s === null || s[1].toLowerCase() !== "id") return;
  let h = n.startOffset + s[0].length;
  return h < n.endOffset ? void 0 : {
    start: n.startOffset,
    end: h
  };
}

var Wn = e => e.attrs?.find(n => n.name === "id")?.value, Ia = new Set([ "", "text/javascript", "application/javascript", "module" ]), Yn = (e, n) => e.attrs?.some(r => r.name === n) ?? !1, fi = e => W8(e.attrs?.find(n => n.name === "type")?.value ?? "").toLowerCase(), Fa = e => fi(e) === "module", Ma = e => e.tagName === "script" && e.namespaceURI === KVe && !Yn(e, "src") && !Yn(e, "nomodule") && Ia.has(fi(e)) && (e.childNodes ?? []).some(n => n.nodeName === "#text" && (n.value ?? "").includes(mn)), La = (e, n) => (e.attrs?.find(r => r.name === "class")?.value ?? "").split(/[\t\n\f\r ]+/).includes(n), Da = (e, n) => {
  for (let r = e.parentNode; r; r = r.parentNode) if (r === n) return !0;
  return !1;
};

function ui(e) {
  let n = [], r = [ ...e.childNodes ?? [] ].reverse();
  while (r.length > 0) {
    let s = r.pop();
    if (s.tagName === void 0) continue;
    n.push(s);
    let h = s.childNodes ?? [];
    for (let b = h.length - 1; b >= 0; b--) r.push(h[b]);
  }
  return n;
}

function ja(e) {
  let n = new Map, r = [ {
    node: e,
    exit: !1
  } ];
  while (r.length > 0) {
    let s = r.pop(), h = s.node.childNodes ?? [];
    if (!s.exit) {
      r.push({
        node: s.node,
        exit: !0
      });
      for (let y = h.length - 1; y >= 0; y--) if (h[y].tagName !== void 0) r.push({
        node: h[y],
        exit: !1
      });
      continue;
    }
    let b = "";
    for (let y of h) if (y.nodeName === "#text") b += y.value ?? ""; else if (y.tagName !== void 0) b += n.get(y) ?? "";
    n.set(s.node, b);
  }
  return n;
}

function Ha(e) {
  let n = w => w.sourceCodeLocation?.startOffset ?? 1 / 0, r = e.filter(w => La(w, "page")), s = 1 / 0;
  for (let w of r) s = Math.min(s, n(w));
  let h = r.some(w => n(w) === 1 / 0), b = e.filter(Ma).sort((w, S) => n(w) - n(S)), y = !1;
  for (let w of b) {
    if (!w.sourceCodeLocation?.endTag) continue;
    if (Fa(w)) {
      if (Yn(w, "async")) {
        f("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      y = !0;
      continue;
    }
    let S = n(w);
    if (!(s < S)) {
      if (h) {
        f("artifact_publish", "block_ids_load_point_unsure");
        return;
      }
      continue;
    }
    let x = r.findIndex(O => n(O) < S), P = r[x];
    if (r.slice(0, x).some(O => n(O) === 1 / 0) || Da(w, P)) {
      f("artifact_publish", "block_ids_load_point_unsure");
      return;
    }
    return {
      page: P,
      seen: w.sourceCodeLocation.endOffset
    };
  }
  return y && r[0] !== void 0 ? {
    page: r[0],
    seen: 1 / 0
  } : void 0;
}

function za(e, n) {
  let r = ui(n), s = Ha(r);
  if (s === void 0) return [];
  let {page: h, seen: b} = s, y = ui(h), w = new Map;
  for (let K of y) {
    let F = Wn(K);
    if (F !== void 0 && !w.has(F)) w.set(F, K);
  }
  let S = new Set, x = [];
  for (let K of r) {
    let F = Wn(K);
    if (F === void 0) continue;
    let Z = K.sourceCodeLocation?.attrs?.id?.startOffset;
    if (Z === void 0 ? b === 1 / 0 : Z < b) S.add(F); else if (Z === void 0) x.push(F);
  }
  if (x.some(K => !S.has(K) && ci.test(K))) return f("artifact_publish", "block_ids_unplaced_id"), 
  [];
  let P = ja(h), R = new Map, O = [], z = 0;
  for (let K of y) {
    let F = K.tagName.toUpperCase(), Z = K.namespaceURI === KVe && !/[^a-z0-9]/.test(K.tagName) && Pa.test(F), C = Wn(K), V = C !== void 0 && w.get(C) === K;
    if (!Z || V && C !== "") continue;
    let Q = P.get(K) ?? "";
    if (z += Q.length, z > Oa) return null;
    let B = $a(F, Q, S, R);
    S.add(B);
    let ie = K.sourceCodeLocation;
    if (!ie?.startTag || !ci.test(B)) continue;
    let fe = Na(e, ie.attrs?.id);
    if (C !== void 0 && fe !== void 0) O.push({
      start: fe.start,
      end: fe.end,
      text: `id="${B}"`
    }); else if (C === void 0) {
      let le = ie.startTag.startOffset + 1 + K.tagName.length;
      O.push({
        start: le,
        end: le,
        text: ` id="${B}"`
      });
    }
  }
  return O;
}

function Ua(e, n) {
  if (n.length === 0) return e;
  n.sort((h, b) => h.start - b.start);
  let r = "", s = 0;
  for (let h of n) {
    if (h.start < s) continue;
    r += e.slice(s, h.start) + h.text, s = h.end;
  }
  return r + e.slice(s);
}

async function pi(e) {
  if (!e.includes(mn)) return e;
  try {
    let {nestingBudgetExceeded: n} = await import("./chunk-6sr0kx61.js");
    if (n(e)) return f("artifact_publish", "block_ids_nesting_budget"), e;
    let {parse: r} = await import("./chunk-q0pa4g0t.js"), s = di + e, h = i3(r(s, {
      sourceCodeLocationInfo: !0
    })), b = za(s, h);
    if (b === null) return f("artifact_publish", "block_ids_text_budget"), t("[artifact] doc block ids skipped: too much text to hash"), 
    e;
    return Ua(s, b).slice(di.length);
  } catch (n) {
    return f("artifact_publish", "block_ids_parse_failed"), t(`[artifact] doc block ids skipped: ${String(n)}`), 
    e;
  }
}

function Va(e, n) {
  let r = e.length > n ? ne(e, n) : e;
  return {
    escaped: xAn(r).replace(/[\\"\n\t]/g, b => {
      switch (b) {
       case "\\":
        return "\\\\";

       case '"':
        return '\\"';

       case `\n`:
        return "\\n";

       case "\t":
        return "\\t";

       default:
        return b;
      }
    }),
    elided: e.length - r.length
  };
}

function dZo(e, n) {
  let {escaped: r, elided: s} = Va(e, n), h = `"${xAn(mT(r, r.length))}"`;
  return s > 0 ? `${h} \u2026(+${s} chars)` : h;
}

function xAn(e) {
  return e.replace(KO, "'").replace(s$, "'");
}

var Wa = 10, Ya = 120, hi = "Artifact publishing is rate-limited right now, so nothing was published.", gi = " Nothing is wrong with the call: a publishing rate limit refused it, and this tool already waited and sent it once more.", mi = " Send the same call again", bn = ' with url: "', Gn = '"', qn = " after about ", Ga = e => ` seconds \u2014 publishing limits are shared, so the wait can be longer while others publish; change nothing${e ? " else" : ""} about the call to get past this.`, qa = " That artifact was reserved for this publish and nothing has been published to it; targeting it avoids reserving another.", Kn = " The refused step was ", Ka = /^(?:the upload preflight that copying \d{1,4} files? from another artifact needs|staging this publish's \d{1,4} copied files? \((?:"(?:[^"\\\n]|\\.){0,1100}" from artifact [A-Za-z0-9-]{22,36}(?:, (?=")|))+(?:, and \d{1,4} more)?\)); nothing was staged\.$/;

function bi(e) {
  let n = e.slice(0, 3).map(s => `${_(s.path)} from artifact ${s.fromSlug}`), r = e.length > 3 ? `, and ${e.length - 3} more` : "";
  return `staging this publish's ${e.length} copied ${I(e.length, "file")} (${n.join(", ")}${r}); nothing was staged`;
}

function _i(e) {
  return `the upload preflight that copying ${e} ${I(e, "file")} from another artifact needs; nothing was staged`;
}

var Xa = "Not published: artifact publishing is rate-limited right now. Claude can try again shortly.", Ja = /^https?:\/\/[A-Za-z0-9.-]{1,100}(?::\d{1,5})?(?:\/[A-Za-z0-9._-]{1,40}){0,4}\/[A-Za-z0-9-]{22,36}$/;

function yi(e) {
  let n = Math.ceil((e ?? 0) / 1e3);
  return Math.min(Math.max(n, Wa), Ya);
}

function Xn(e, n, r) {
  let s = n !== void 0;
  return hi + gi + mi + (s ? `${bn}${n}${Gn}` : "") + `${qn}${e}${Ga(s)}` + (s ? qa : "") + (r !== void 0 ? `${Kn}${r}.` : "");
}

function cZo(e) {
  let n = hi + gi + mi;
  if (!e.startsWith(n)) return;
  let r = n.length, s;
  if (e.startsWith(bn, r)) {
    let w = e.indexOf(Gn, r + bn.length);
    if (w === -1) return;
    if (s = e.slice(r + bn.length, w), !Ja.test(s)) return;
    r = w + Gn.length;
  }
  if (!e.startsWith(qn, r)) return;
  let h = /^\d{1,3}/.exec(e.slice(r + qn.length))?.[0];
  if (h === void 0) return;
  let b = e.indexOf(Kn, r), y = b === -1 ? e : e.slice(0, b);
  if (b !== -1 && !Ka.test(e.slice(b + Kn.length))) return;
  return y === Xn(Number(h), s) ? Xa : void 0;
}

var Jn = "Nothing was published and nothing is wrong with the call: this tool chose that contract because it is the server's newest, and it has not reached every server yet. Send the same call again in about a minute; do not pin an older contract to get past this.", Za = "Not published: the artifact service is mid-update. Claude can try again in about a minute.", Qa = /^deploy 422: contract ([0-9A-Za-z.+-]{1,32}) is newer than the preferred ([0-9A-Za-z.+-]{1,32})\. /;

function eo(e, n) {
  return `deploy 422: contract ${e} is newer than the preferred ${n}. ${Jn}`;
}

function uZo(e) {
  let n = Qa.exec(e);
  if (n === null) return;
  return e === eo(n[1], n[2]) ? Za : void 0;
}

function NEt() {
  let e = ee().prReviewTemplate;
  return e.chrome ??= import("./chunk-0dgd00ep.js").then(n => to(n.SKILL_FILES["template.html"] ?? "")), 
  e.chrome;
}

function usr(e, n) {
  let r = e.indexOf(n);
  if (r === -1) return "";
  let s = /<div\b|<\/div>/g;
  s.lastIndex = r;
  let h = 0;
  for (let b = s.exec(e); b !== null; b = s.exec(e)) if (h += b[0] === "</div>" ? -1 : 1, 
  h === 0) return e.slice(r, b.index + 6);
  return "";
}

function to(e) {
  return {
    pinnedMarkup: [ {
      label: "stylesheet",
      bytes: e.match(/<style>[\s\S]*?<\/style>/)?.[0] ?? "",
      terminal: "</style>"
    }, {
      label: "stale-banner",
      bytes: usr(e, '<div class="stale-banner"'),
      terminal: "</div>"
    }, {
      label: "stamp-control",
      bytes: usr(e, '<div class="stamp"'),
      terminal: "</div>"
    } ],
    inlineStyleAllowlist: D([ ...e.matchAll(/\bstyle\s*=\s*"([^"]*)"/g) ].map(r => r[1])),
    linkPlaceholders: D([ ...e.matchAll(/(?:src|href)\s*=\s*"([^"]*)"/gi) ].map(r => r[1]).filter(r => !/^[a-z][a-z0-9+.-]*:|^\/\//i.test(r)))
  };
}

var vi = /\bstale-banner\b|\bstamp(-[a-z]+)?\b/i, dXr = "80cb1876b48d73daa3ee6df8dd1124eaa6d07e79d223bd7efec01e98714c4cec";

function $Et(e, n, r) {
  return `https://github.com/${e}/${n}/pull/${r}`;
}

var Vqt = "prr-anchor";

function psr(e) {
  let n = WSe(e, 7), r = n - 1 - ABn;
  return n > 0 && r > 0 && $Fe(e, r) !== 0 ? e.slice(0, r) + e.slice(n - 1) : e;
}

function Kqt(e) {
  let n = [], r = /<script/gi, s = /<\/script/gi, h = 0;
  for (;;) {
    r.lastIndex = h;
    let b = r.exec(e);
    if (b === null) break;
    let y = b.index, w = e[y + 7];
    if (w !== void 0 && !/[\t\n\f\r />]/.test(w)) {
      h = y + 1;
      continue;
    }
    let S = y + 7, x = -1;
    for (;;) {
      s.lastIndex = S;
      let P = s.exec(e);
      if (P === null) break;
      let R = e[P.index + 8];
      if (R === ">") {
        x = P.index + 9;
        break;
      }
      if (R !== void 0 && /[\t\n\f\r /]/.test(R)) {
        let O = e.indexOf(">", P.index + 8);
        if (O === -1) break;
        x = O + 1;
        break;
      }
      S = P.index + 8;
    }
    if (x === -1) break;
    n.push(e.slice(y, x)), h = x;
  }
  return n;
}

var qqt = /^[A-Za-z0-9-]{1,39}$/, Yqt = /^(?!\.\.?$)[A-Za-z0-9._-]{1,100}$/, Xqt = /^[0-9a-f]{40}$/, cXr = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, Jqt = /^[A-Za-z0-9_.-]{1,64}$/, $Ve = /^[A-Za-z0-9_]{1,48}$/, PAn = /^[A-Za-z0-9_.-]{1,64}$/, Rnt = /^method$/i, nn = {
  owner: "owner",
  repo: "repo",
  number: 1,
  headSha: "0".repeat(40),
  publishedAt: "1970-01-01T00:00:00Z"
};

function Si(e) {
  return e.owner === nn.owner && e.repo === nn.repo && e.number === nn.number && e.headSha === nn.headSha && e.publishedAt === nn.publishedAt;
}

var no = new Set([ "kind", "owner", "repo", "number", "headSha", "publishedAt" ]), ro = new Set([ "tool", "input", "shaPath" ]);

function io(e) {
  if (!L(e)) return "anchor is missing";
  for (let n of Object.keys(e)) if (!no.has(n)) return "anchor carries an unexpected key";
  if (e.kind !== "pr") return 'anchor.kind is not "pr"';
  if (typeof e.owner !== "string" || !qqt.test(e.owner)) return "anchor.owner is not a valid owner";
  if (typeof e.repo !== "string" || !Yqt.test(e.repo)) return "anchor.repo is not a valid repository name";
  if (!Number.isSafeInteger(e.number) || e.number < 1) return "anchor.number is not a positive integer";
  if (typeof e.headSha !== "string" || !Xqt.test(e.headSha)) return "anchor.headSha is not 40 lowercase hex";
  if (typeof e.publishedAt !== "string" || !cXr.test(e.publishedAt)) return "anchor.publishedAt is not a UTC ISO-8601 timestamp";
  return null;
}

function so(e) {
  if (e === null) return null;
  if (!L(e)) return "live is neither null nor an object";
  for (let s of Object.keys(e)) if (!ro.has(s)) return "live carries an unexpected key";
  if (typeof e.tool !== "string" || !Jqt.test(e.tool)) return "live.tool is not a tool identifier";
  if (!L(e.input)) return "live.input is not an object";
  let n = Object.keys(e.input);
  if (n.length > 8) return "live.input has too many keys";
  for (let s of n) {
    if (!$Ve.test(s)) return "live.input has a non-identifier key";
    let h = e.input[s];
    if (Rnt.test(s) && typeof h !== "string") return "live.input carries a non-string value under the method key \u2014 an operation selector is a word";
    if (typeof h === "string") {
      if (!PAn.test(h)) return "live.input carries a non-identifier string value";
    } else if (typeof h === "number") {
      if (!Number.isSafeInteger(h)) return "live.input carries a non-integer number";
    } else return "live.input carries a value that is not a string or integer";
  }
  let r = e.shaPath;
  if (!Array.isArray(r) || r.length === 0 || r.length > 6) return "live.shaPath is not a 1-6 element array";
  for (let s of r) if (typeof s !== "string" || !$Ve.test(s)) return "live.shaPath carries a non-identifier segment";
  return null;
}

function ao(e) {
  if (Object.keys(e).filter(s => s !== "anchor" && s !== "live").length > 0) return "the prr-anchor island carries unexpected keys";
  let r = io(e.anchor);
  if (r) return r;
  return so(e.live === void 0 ? null : e.live);
}

function pZo(e) {
  let n = e.match(/<script type="application\/json" id="prr-anchor">([^<]{2,65536})<\/script>/);
  if (!n) return null;
  let r;
  try {
    r = JSON.parse(n[1]);
  } catch {
    return null;
  }
  if (!L(r) || !L(r.live)) return null;
  let s = r.live.tool;
  return typeof s === "string" && Jqt.test(s) ? s : null;
}

var fsr = "prr-decisions", uXr = "e99de2efe38c7297e10d0adb543ef448d719f1a5c5ed05e9563729cf1f0c1eea", IAn = /^[a-z0-9-]{1,24}$/, wi = new Set([ "id", "opts", "state", "choice" ]), oo = new Set([ "open", "resolved", "acted" ]);

function lo(e) {
  if (Object.keys(e).length !== 1 || !Array.isArray(e.items)) return "the decisions island is not {items: [...]}";
  let r = e.items;
  if (r.length > 20) return "the decisions island carries more than 20 items";
  let s = new Set;
  for (let h of r) {
    if (!L(h)) return "a decisions item is not an object";
    let b = Object.keys(h);
    if (b.length !== wi.size || b.some(w => !wi.has(w))) return "a decisions item carries an unexpected or missing key";
    if (typeof h.id !== "string" || !IAn.test(h.id)) return "a decisions item id is not a valid token";
    if (s.has(h.id)) return "decisions item ids are not unique";
    if (s.add(h.id), typeof h.state !== "string" || !oo.has(h.state)) return "a decisions item state is not open, resolved, or acted";
    let y = h.opts;
    if (!Array.isArray(y) || y.length < 1 || y.length > 8) return "a decisions item opts is not an array of 1 to 8 tokens";
    for (let w of y) if (typeof w !== "string" || !IAn.test(w)) return "a decisions option is not a valid token";
    if (h.choice !== null) {
      if (typeof h.choice !== "string" || !IAn.test(h.choice)) return "a decisions choice is not null or a valid token";
      if (!y.includes(h.choice)) return "a decisions choice is not among its opts";
    }
  }
  return null;
}

var FEt = "prr-stamp", OAn = "a8b6abcc8650343e067901dc560ace5e9095b4ffd106118e718d7566566dfd22", co = new Set([ "tool", "input", "statePath" ]);

function uo(e) {
  if (e === null) return null;
  if (!L(e)) return "stamp is neither null nor an object";
  for (let s of Object.keys(e)) if (!co.has(s)) return "stamp carries an unexpected key";
  if (typeof e.tool !== "string" || !Jqt.test(e.tool)) return "stamp.tool is not a tool identifier";
  if (!L(e.input)) return "stamp.input is not an object";
  let n = Object.keys(e.input);
  if (n.length > 8) return "stamp.input has too many keys";
  for (let s of n) {
    if (!$Ve.test(s)) return "stamp.input has a non-identifier key";
    let h = e.input[s];
    if (typeof h === "string") {
      if (!PAn.test(h)) return "stamp.input carries a non-identifier string value";
    } else if (typeof h === "number") {
      if (!Number.isSafeInteger(h)) return "stamp.input carries a non-integer number";
    } else return "stamp.input carries a value that is not a string or integer";
  }
  let r = e.statePath;
  if (!Array.isArray(r) || r.length === 0 || r.length > 6) return "stamp.statePath is not a 1-6 element array";
  for (let s of r) if (typeof s !== "string" || !$Ve.test(s)) return "stamp.statePath carries a non-identifier segment";
  return null;
}

function fo(e) {
  if (Object.keys(e).length !== 1 || !("stamp" in e)) return "the prr-stamp island is not {stamp: ...}";
  return uo(e.stamp);
}

var FVe = [ {
  id: Vqt,
  validate: ao
}, {
  id: fsr,
  validate: lo
}, {
  id: FEt,
  validate: fo
} ], Qqt = [ {
  label: "staleness",
  sha256: dXr
}, {
  label: "decisions",
  sha256: uXr
}, {
  label: "approve",
  sha256: OAn
} ];

function po(e) {
  return new RegExp(`<script type="application/json" id="${e}">([^<]*)<\/script>`, "g");
}

function ho(e) {
  return new RegExp(`<script type="application/json" id="${e}"${Yue}>`);
}

function Zn(e) {
  return new RegExp(`(?<!-)\\bid\\s*=\\s*["']?${e}`, "i");
}

function go(e) {
  return new RegExp(`id\\s*=\\s*["']?${e}`, "i");
}

function mo(e) {
  return e.replace(/&#(?:x0*([0-9a-f]{1,6})|0*(\d{1,7}));?/gi, (n, r, s) => {
    let h = Number.parseInt(r ?? s, r !== void 0 ? 16 : 10);
    return h > 0 && h <= 1114111 ? String.fromCodePoint(h) : n;
  });
}

function bo(e) {
  let n = yn, r = new RegExp(`(?<!-)\\bid[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*(?:"([^"]{0,${n}})"|'([^']{0,${n}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${n}})(?=[\\t\\n\\f\\r >]|$)|([\\s\\S]))`, "gi");
  for (let s = r.exec(e); s !== null; s = r.exec(e)) {
    if (s[4] !== void 0) {
      if (s[4] === ">") continue;
      return !0;
    }
    let h = s[1] ?? s[2] ?? s[3] ?? "";
    if (!h.includes("&#")) continue;
    let b = mo(h).toLowerCase();
    if (FVe.some(y => b.startsWith(y.id))) return !0;
  }
  return !1;
}

function _n(e, n, r, s) {
  let h = new RegExp(`(${n}[\\t\\n\\f\\r ]*=[\\t\\n\\f\\r ]*)(?:"([^"]{0,${yn}})"|'([^']{0,${yn}})'|([^\\t\\n\\f\\r >"'][^\\t\\n\\f\\r >]{0,${yn}})(?=[\\t\\n\\f\\r >]|$))?`, "gi");
  for (let b = h.exec(e); b !== null; b = h.exec(e)) {
    let y = b[2] ?? b[3] ?? b[4];
    if (y === void 0) {
      let S = b.index + b[1].length;
      if (e[S] === ">") {
        h.lastIndex = S;
        continue;
      }
      return s;
    }
    let w = r(y);
    if (w !== null) return w;
    h.lastIndex = b.index + b[1].length;
  }
  return null;
}

function _o(e, n, r, s) {
  if (/<\/?script/i.test(e)) return "a stray or unclosed <script fragment remains outside the registered blocks";
  if (/\bon[a-z0-9_]+\s*=(?!>)/i.test(e)) return "the body carries an on*= attribute pattern";
  if (/javascript:/i.test(e.replace(/[\t\n\r]/g, ""))) return "the body carries a javascript: URL";
  if (/<(iframe|frame|frameset|embed|object|base|link|img|image|feimage|input|form|meta|video|audio|source|track|use|animate\w*|set|discard|applet|dialog|label)\b/i.test(e)) return "the body carries an element that can reach the network, navigate, or execute";
  if (/\bsrcdoc\s*=(?!>)/i.test(e)) return "the body carries a srcdoc attribute";
  if (/\bhttp-equiv\s*=(?!>)/i.test(e)) return "the body carries an http-equiv attribute";
  if (/\battributename\s*=\s*["']?on/i.test(e)) return "the body carries an SMIL attributeName targeting an event handler";
  if (/[\s/"'](?:srcset|poster|ping|formaction|background)\s*=(?!>)/i.test(e)) return "the body carries a fetch-capable attribute";
  if (/[\s/"']for\s*=(?!>)/i.test(e)) return "the body carries a click-forwarding for attribute";
  if (/[\s/"'](?:transform|pointer-events|overflow)\s*=(?!>)/i.test(e)) return "the body carries an overlay-capable presentation attribute";
  if (/<(template|textarea|noscript|xmp|plaintext|noembed|noframes|select|optgroup|option|math)\b/i.test(e)) return "the body carries a content-inerting container";
  let h = [ ...e.matchAll(/<title(?=[\t\n\f\r >/]|$)|<\/title(?=[\t\n\f\r >/]|$)/gi) ].map(R => R[0][1] !== "/");
  if (h.length > 2 || h.length % 2 !== 0 || h.some((R, O) => R !== (O % 2 === 0))) return "the body carries a missing, extra, stray, or unclosed title element";
  if (/[\s/"'](?:popover(?:target(?:action)?)?|commandfor|interest(?:for|target))\s*=(?!>)/i.test(e)) return "the body carries a popover-family or invoker attribute";
  let b = new Map, y = /data-decision-id[\t\n\f\r ]*=[\t\n\f\r ]*(?:"([^"]{0,256})"|'([^']{0,256})'|([^\t\n\f\r >]{1,256}))/gi;
  for (let R = y.exec(e); R !== null; R = y.exec(e)) {
    let O = R[1] ?? R[2] ?? R[3];
    if (b.set(O, (b.get(O) ?? 0) + 1), b.get(O) > 1) return "a data-decision-id appears on more than one element";
    y.lastIndex = R.index + 1;
  }
  if (e.includes("<![CDATA[")) return "the body carries a CDATA section";
  for (let R = e.indexOf("\x3c!--"); R !== -1; ) {
    let O = e.slice(R + 4, R + 6), z;
    if (O.startsWith(">")) z = R + 5; else if (O === "->") z = R + 6; else {
      let K = e.indexOf("--\x3e", R + 4), F = e.indexOf("--!>", R + 4);
      if (K === -1 && F === -1) return "the body carries an unclosed comment";
      z = K === -1 ? F + 4 : F === -1 ? K + 3 : Math.min(K + 3, F + 4);
    }
    R = e.indexOf("\x3c!--", z);
  }
  if (/@import|url\(|image-set\(/i.test(e)) return "the body carries a CSS network-reaching function";
  if (/<style/i.test(e)) return "a stylesheet other than the pinned template stylesheet";
  let w = _n(e, "\\bclass", R => vi.test(R) ? "a counterfeit element carries a script-addressed class" : null, "a class attribute has no capturable value");
  if (w !== null) return w;
  let S = _n(e, "\\bstyle", R => n.includes(R) ? null : "an inline style outside the template allowlist", "a style attribute has no capturable value");
  if (S !== null) return S;
  if (/[^\s"'<>=/]{257,}\s*=/.test(e)) return "an attribute name exceeds the scan bound";
  let x = _n(e, `(?<=[\\s"'</=]|^)[^\\s"'<>=/]{1,256}`, R => /\\|&(?!(?:amp|lt|gt|quot|#39);)[#a-zA-Z]/.test(R) ? "an attribute value carries an escape or character reference outside the mandated set" : null, "an attribute has no capturable value");
  if (x !== null) return x;
  let P = _n(e, "(?:src|href)", R => r.has(R) || s !== null && s.test(R) ? null : "the body carries a src or href that is not the PR link", "a src or href attribute has no capturable value");
  if (P !== null) return P;
  return null;
}

var xi = 524288, yn = 2048;

function sAe(e, {parsedAsMarkup: n} = {
  parsedAsMarkup: !0
}) {
  if (FVe.some(h => Zn(h.id).test(e)) || n && bo(e)) return !0;
  if (e.length > xi) return !1;
  let s = new Set(Qqt.map(h => h.sha256));
  return Kqt(e).some(h => s.has(at(psr(h))));
}

function Ei(e, n, r = {}) {
  let s = r.crUrlRe ?? null;
  if (!sAe(e)) return {
    applies: !1
  };
  if (e.length > xi) return {
    applies: !0,
    ok: !1,
    reason: "the page is too large for a review page"
  };
  let h = Kqt(e), b = new Map(Qqt.map(B => [ B.sha256, B ])), y = B => ({
    applies: !0,
    ok: !1,
    reason: B
  }), w = !Zn(FEt).test(e), S = !h.some(B => at(B) === OAn), x = n.pinnedMarkup.find(B => B.label === "stamp-control"), P = x !== void 0 && x.bytes !== "" && !e.includes(x.bytes);
  if (w && S && P) return y("the page predates the approve control this CLI requires \u2014 it was published by a different version of this CLI, and a republish cannot reproduce it. Re-run /artifact-pr-review to publish a fresh review (decisions recorded on the old page stay visible there; the fresh page starts with its decisions open).");
  let R = new Set, O = null, z = null, K = null;
  for (let B of FVe) {
    let ie = [ ...e.matchAll(po(B.id)) ];
    if (Zn(B.id).test(e) && ie.length === 0) {
      if (ho(B.id).test(e)) return y(`the ${B.id} island carries the server's element id \u2014 this is the published page read back, not your local copy; republish from the HTML (or payload) you authored, never from bytes you read`);
      return y(`the ${B.id} island is malformed or not a JSON script element`);
    }
    if (ie.length !== 1) return y(`the page must carry exactly one ${B.id} island`);
    let fe = ie[0][1] ?? "";
    if (/[<>&'\\]/.test(fe)) return y(`the ${B.id} island carries a disallowed character`);
    let le;
    try {
      le = Y(fe);
    } catch {
      return y(`the ${B.id} island is not valid JSON`);
    }
    if (!L(le)) return y(`the ${B.id} island is not a JSON object`);
    let Ae = B.validate(le);
    if (Ae) return y(Ae);
    if (_(le) !== fe) return y(`the ${B.id} island is not in canonical JSON form`);
    if (B.id === Vqt) O = le.anchor, z = le.live === void 0 ? null : le.live;
    if (B.id === FEt) K = le.stamp === void 0 ? null : le.stamp;
    R.add(ie[0][0]);
  }
  if (K !== null && r.allowStampBinding !== !0) return y('approve-enabled review pages publish only through the composed lane \u2014 set the prr-stamp island to {"stamp":null}, or publish via /artifact-pr-review with a pr_review payload');
  let F = new Map;
  for (let B of h) {
    if (R.has(B)) continue;
    let ie = b.get(at(B));
    if (ie === void 0) return y("a script block matches neither a registered island nor a pinned template script \u2014 the page must carry the template blocks byte-for-byte");
    F.set(ie.label, (F.get(ie.label) ?? 0) + 1);
  }
  for (let B of Qqt) if ((F.get(B.label) ?? 0) !== 1) return y(`the page must carry exactly one pinned ${B.label} script`);
  for (let B of n.pinnedMarkup) {
    if (B.bytes === "") return y(`the ${B.label} template block could not be derived`);
    let ie = e.indexOf(B.bytes);
    if (ie === -1 || e.indexOf(B.bytes, ie + B.bytes.length) !== -1) return y(`the page must carry the template ${B.label} byte-for-byte exactly once`);
  }
  let Z = e;
  for (let B of [ ...R, ...h.filter(ie => !R.has(ie)), ...n.pinnedMarkup.map(ie => ie.bytes) ]) Z = Z.replace(B, "");
  for (let B of FVe) if (go(B.id).test(Z)) return y(`an element other than the registered island carries the ${B.id} id`);
  let C = new Set(n.linkPlaceholders);
  if (O !== null) C.add($Et(O.owner, O.repo, O.number));
  let V = _o(Z, n.inlineStyleAllowlist, C, O !== null && Si(O) && z === null && K === null ? s : null);
  if (V) return y(V);
  let Q = gn(e);
  if (r.allowMermaidFence === !0) Q.mermaid = !1;
  if (Object.values(Q).some(Boolean)) return y("the body would trigger a runtime script injection after validation (mermaid fence, language-tagged code, or chart marker)" + (Q.mermaid ? " \u2014 composed review pages with a diagram must republish through the composed lane, not as raw HTML" : ""));
  return {
    applies: !0,
    ok: !0
  };
}

import { randomUUID as $o } from "crypto";

function Ai(e) {
  return rae(e.subarray(0, 4)) === "utf16le" ? "utf-16le" : "utf-8";
}

function wn(e, n) {
  let r = e.slice(0, n), s = 1;
  for (let y = r.indexOf(`\n`); y !== -1; y = r.indexOf(`\n`, y + 1)) s++;
  let h = 1;
  for (let y of r.slice(r.lastIndexOf(`\n`) + 1)) h++;
  let b = 0;
  for (let y = e.indexOf("\ufffd", n + 1); y !== -1; y = e.indexOf("\ufffd", y + 1)) b++;
  return `line ${s}, column ${h}${b > 0 ? ` (+${b} more)` : ""}`;
}

function yo(e, n, r) {
  let s = r === "utf-8", h = s ? n[0] === 239 && n[1] === 187 && n[2] === 191 ? 3 : 0 : 2;
  for (let b = 0; b < e.length; ) {
    let y = e.codePointAt(b) ?? 0;
    if (y === 65533) {
      if (!(s ? n[h] === 239 && n[h + 1] === 191 && n[h + 2] === 189 : n[h] === 253 && n[h + 1] === 255)) return b;
    }
    let w = y > 65535 ? 2 : 1;
    h += s ? y < 128 ? 1 : y < 2048 ? 2 : y < 65536 ? 3 : 4 : w * 2, b += w;
  }
  return -1;
}

function fZo(e) {
  return new TextDecoder(Ai(e)).decode(e);
}

function UVe(e) {
  let n = Ai(e);
  try {
    let r = new TextDecoder(n, {
      fatal: !0
    }).decode(e), s = r.indexOf("\ufffd");
    if (s === -1) return {
      text: r
    };
    return {
      problem: {
        kind: "replacement_char",
        encoding: n,
        where: wn(r, s)
      }
    };
  } catch {
    let r = new TextDecoder(n).decode(e), s = yo(r, e, n);
    return {
      problem: {
        kind: "undecodable",
        encoding: n,
        where: wn(r, s === -1 ? r.indexOf("\ufffd") : s)
      }
    };
  }
}

var wo = 8, VE = /^[A-Za-z0-9._-]{1,64}$/, Ri = {
  ownVers: {},
  inFlight: {}
}, pXr = iK("ownPublishes", Ri);

function d5s() {
  return oks(Ri);
}

function UEt(e, n, r, s = {}) {
  if (!VE.test(r)) return;
  e.set(h => {
    let b = h.ownVers[n] ?? [], y = h.mergedVers?.[n] ?? [], w = b.includes(r), S = y.includes(r);
    if (w && (s.merged !== !0 || S)) return h;
    let x = w ? b : [ ...b, r ].slice(-wo), P = (s.merged === !0 && !S ? [ ...y, r ] : y).filter(R => x.includes(R));
    return {
      ...h,
      ownVers: {
        ...h.ownVers,
        [n]: x
      },
      ...(h.mergedVers?.[n] !== void 0 || P.length > 0) && {
        mergedVers: {
          ...h.mergedVers,
          [n]: P
        }
      }
    };
  });
}

function Zqt(e, n, r) {
  return e.get().ownVers[n]?.includes(r) ?? !1;
}

function Qle(e, n, r) {
  let s = e.get();
  return (s.ownVers[n]?.includes(r) ?? !1) && !(s.mergedVers?.[n]?.includes(r) ?? !1);
}

function fXr(e, n) {
  return (e.get().ownVers[n]?.length ?? 0) > 0;
}

function mXr(e, n, r) {
  return Qle(e, n, r) ? "self-session" : "unverified";
}

async function msr(e, n, r) {
  gsr(e, n);
  try {
    return await r();
  } finally {
    hsr(e, n);
  }
}

function gsr(e, n) {
  e.set(r => ({
    ...r,
    inFlight: {
      ...r.inFlight,
      [n]: (r.inFlight[n] ?? 0) + 1
    }
  }));
}

function hsr(e, n) {
  e.set(r => {
    let s = r.inFlight[n] ?? 0;
    if (s === 0) return r;
    if (s === 1) {
      let {[n]: h, ...b} = r.inFlight;
      return {
        ...r,
        inFlight: b
      };
    }
    return {
      ...r,
      inFlight: {
        ...r.inFlight,
        [n]: s - 1
      }
    };
  });
}

function BVe(e, n) {
  return (e.get().inFlight[n] ?? 0) > 0;
}

import { randomUUID as vo } from "crypto";

import { lstat as ki, mkdir as Ti, realpath as vn, rm as er, unlink as So, writeFile as xo } from "fs/promises";

import Ge from "path";

async function Pi(e, n, r) {
  let s = r.slug !== void 0, h = r.slug ?? vo();
  if (!nr.test(h)) return {
    url: null,
    slug: null,
    version: null,
    err: `not an artifact slug: ${h}`
  };
  let b = `${BBe}${h}`, y = Ge.join(e, h), w = Ge.dirname(e), S = await ki(w).catch(() => null);
  if (S === null || !S.isDirectory() || await vn(w).catch(() => null) !== w) return {
    url: null,
    slug: null,
    version: null,
    err: "the stub publish directory is not inside a real directory"
  };
  await Qn(e), await Qn(y), await BEt(Ge.join(y, "index.html"), n);
  for (let [V, Q] of [ [ "thumbnail.img", r.thumbnail ], [ "thumbnail_dark.img", r.thumbnailDark ] ]) if (Q !== void 0) await BEt(Ge.join(y, V), Q); else await er(Ge.join(y, V), {
    recursive: !0,
    force: !0
  });
  let x = Ge.join(y, "files");
  await Qn(x);
  let P = await vn(x), R = [], O = V => V === P || V.startsWith(P + Ge.sep), z = async V => {
    let Q = Ge.resolve(x, V);
    if (!Q.startsWith(x + Ge.sep)) return null;
    if (z9(Q, x + Ge.sep, vz)) return R.push({
      path: V,
      reason: "names a git, IDE/toolchain, or shell configuration component"
    }), null;
    for (let B = Ge.dirname(Q); ;B = Ge.dirname(B)) try {
      return O(await vn(B)) ? Q : null;
    } catch (ie) {
      if (!W(ie) || B === x) throw ie;
    }
  }, K = async V => {
    try {
      return O(await vn(Ge.dirname(V)));
    } catch (Q) {
      if (W(Q)) return "absent";
      throw Q;
    }
  }, F = [];
  for (let V of r.removeFiles ?? []) try {
    let Q = await z(V);
    if (Q === null) continue;
    let B = await K(Q);
    if (B === !1) continue;
    if (B === "absent") {
      F.push(V);
      continue;
    }
    await So(Q).catch(ie => {
      if (!W(ie)) throw ie;
    }), F.push(V);
  } catch (Q) {
    t(`artifact stub: skipping removal of ${V}: ${Q}`, {
      level: "warn"
    });
  }
  let Z = [];
  for (let V of r.files ?? []) {
    try {
      let Q = await z(V.path);
      if (Q === null) continue;
      if (await Ti(Ge.dirname(Q), {
        recursive: !0
      }), await K(Q) !== !0) continue;
      await BEt(Q, V.content);
    } catch (Q) {
      t(`artifact stub: skipping supporting file ${V.path}: ${Q}`, {
        level: "warn"
      });
      continue;
    }
    Z.push({
      path: V.path,
      contentType: V.contentType,
      bytes: Buffer.byteLength(V.content)
    });
  }
  for (let V of R) t(`artifact stub: not materializing ${V.path}: ${V.reason}`, {
    level: "warn"
  });
  let C = {
    slug: h,
    url: b,
    redeploy: s,
    title: r.title,
    favicon: r.favicon,
    ...r.icon !== void 0 && {
      icon: r.icon
    },
    ...r.label !== void 0 && {
      label: r.label
    },
    ...r.note !== void 0 && {
      note: r.note
    },
    ...r.description !== void 0 && {
      description: r.description
    },
    files: Z,
    ...F.length > 0 && {
      removed: F
    },
    ...R.length > 0 && {
      notMaterialized: R
    },
    ...(r.copiedFiles?.length ?? 0) > 0 && {
      copied: r.copiedFiles
    },
    ...r.capabilities !== void 0 && {
      capabilities: r.capabilities
    },
    ...r.contract !== void 0 && {
      contract: r.contract
    },
    ...r.thumbnail !== void 0 && {
      thumbnail: {
        bytes: r.thumbnail.length
      }
    },
    ...r.thumbnailDark !== void 0 && {
      thumbnailDark: {
        bytes: r.thumbnailDark.length
      }
    },
    publishedAtMs: Date.now()
  };
  return await BEt(Ge.join(y, "manifest.json"), _(C, null, 2)), {
    url: b,
    slug: h,
    version: "1",
    err: null
  };
}

async function Qn(e) {
  try {
    if (!(await ki(e)).isDirectory()) await er(e, {
      force: !0
    });
  } catch (n) {
    if (!W(n)) throw n;
  }
  await Ti(e, {
    recursive: !0
  });
}

async function BEt(e, n) {
  await er(e, {
    recursive: !0,
    force: !0
  }), await xo(e, n, {
    flag: "wx"
  });
}

var Ci = 4096, mZo = /^(?!\/)(?!.*\/\/)(?!.*\/$)(?!(?:^|.*\/)\.\.?(?:\/|$))[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029\\?#%:;]{1,512}$/u, rn = /^[^\p{Cc}\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069\u2028\u2029]{1,1024}$/u, $i = p(() => T(u({
  path: o().regex(rn),
  doc: o().max(64).optional().catch(void 0),
  headSeq: v().int().nonnegative().optional().catch(void 0)
})).max(Ci));

function ysr(e) {
  if (e.docs !== void 0) return $i().safeParse(e.docs).success ? MAn(e) : void 0;
  return e.files !== void 0 ? MAn(e) : void 0;
}

function MAn(e) {
  let n = e.docs === void 0 ? void 0 : $i().safeParse(e.docs);
  if (n?.success && n.data.length > 0) return n.data;
  if (e.artifactKind !== lT) return [];
  if (e.files !== void 0 && !Eo(e)) return [];
  return [ {
    path: nZ,
    ...typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0 && {
      headSeq: e.headSeq
    }
  } ];
}

function Eo(e) {
  return typeof e.headSubscriptionToken === "string" && e.headSubscriptionToken !== "" || typeof e.headSeq === "number" && Number.isSafeInteger(e.headSeq) && e.headSeq >= 0;
}

var Ao = p(() => T(u({
  path: o().regex(rn),
  sha256: o().regex(/^[0-9a-f]{64}$/).optional().catch(void 0),
  contentType: o().max(255).optional().catch(void 0),
  doc: o().max(64).optional().catch(void 0)
})).max(Ci));

function gZo(e) {
  if (e.files === void 0) return;
  let n = Ao().safeParse(e.files);
  if (!n.success) return;
  let r = new Set(MAn(e).map(h => h.path)), s = new Map;
  for (let h of n.data) s.set(h.path, {
    ...h.sha256 !== void 0 && {
      sha256: h.sha256
    },
    ...h.contentType !== void 0 && {
      contentType: h.contentType
    },
    live: h.doc !== void 0 && h.doc !== "" || r.has(h.path)
  });
  return s;
}

function Hf() {
  let e = ee();
  if (e.toolsetLatch === null) e.toolsetLatch = a.CLAUDE_CODE_ARTIFACT_TOOLSET ?? k("tengu_cobalt_plinth_damson", !1) === !0, 
  i("tengu_artifact_toolset", {
    on: e.toolsetLatch
  });
  return e.toolsetLatch;
}

function hZo() {
  return Hf() ? a_ : fn;
}

function e4t() {
  return Hf() ? `the ${a_} tool (load it with ${Ba}, query \`select:${a_}\`, if it is not loaded)` : `the ${fn} tool`;
}

function F2(e) {
  return `${a_} tool, action "${e === "comments" ? "read" : e}"`;
}

function ed(e, n) {
  return Hf() ? n() : e;
}

function yZo(e, n) {
  return Hf() ? {
    name: a_,
    input: Lnt("comments", n)
  } : {
    name: e,
    input: n
  };
}

var gXr = [ "editor", "commenter", "reader", "viewer" ];

function HAn(e) {
  return e === "editor" ? "can edit" : e === "commenter" ? "can comment" : "can view";
}

var Ro = 1048576, ko = 50, Oi = 5e3, To = p(() => St({
  frames: lr(Wd()).nullable()
})), Po = p(() => St({
  slug: me().regex(nr),
  title: me().max(4e3).optional(),
  role: Dd(gXr).optional().catch(void 0)
}));

async function _sr(e) {
  let n = (w, S) => {
    if (!e.signal?.aborted) f("artifact_list_external", w, {
      ...S !== void 0 && {
        status: S
      }
    });
    return {
      listed: !1
    };
  }, r = Ys(e.signal, {
    timeoutMs: Oi
  }), s;
  try {
    s = await vc.getRelayBound("/api/frame/frames/external", {
      refreshOAuth: !0,
      credentials: e.credentials,
      headers: eu(),
      timeout: Oi,
      maxContentLength: Ro,
      signal: r.signal
    });
  } catch {
    return n("request_error");
  } finally {
    r.cleanup();
  }
  if (!s.ok) return n(s.reason === "relay-unavailable" || s.reason === "relay-not-served" ? "unsent" : "not_ok", "status" in s ? s.status : void 0);
  if (!s.fromFrame) return n("relay_error", s.status);
  if (s.status < 200 || s.status >= 300) return n("refused", s.status);
  let h = To().safeParse(s.data);
  if (!h.success) return n("malformed_body");
  let b = [], y = h.data.frames ?? [];
  for (let w of y) {
    let S = Po().safeParse(w);
    if (!S.success) continue;
    b.push({
      slug: S.data.slug,
      ...S.data.title !== void 0 && {
        title: S.data.title
      },
      ...S.data.role !== void 0 && {
        role: S.data.role
      }
    });
  }
  return g("artifact_list_external", {
    rows: b.length
  }), {
    listed: !0,
    rows: b,
    mayHaveMore: y.length >= ko || b.length < y.length
  };
}

function rQ(e, n) {
  let r = xae(tg(e)?.code) ?? ug(e);
  return {
    transport: Aee(e),
    ...r !== void 0 && {
      err_code: r
    },
    elapsed_ms: Math.round(performance.now() - n)
  };
}

var Ni = null, Df = 16777216, Oo = "/api/frame/contract/latest";

function RB() {
  return k("tengu_cobalt_plinth_fern", !0);
}

function xnt() {
  return k("tengu_cobalt_plinth_moss", !0);
}

var No = 2e3;

function hXr() {
  return No;
}

function yye() {
  let e = k("tengu_cobalt_plinth_sill", null);
  return typeof e === "number" && Number.isFinite(e) && e >= 0 ? Math.min(Math.floor(e), DK) : UAo;
}

function DM() {
  return a.CLAUDE_CODE_ARTIFACT_MULTI_FILE ?? k("tengu_cobalt_plinth_bracken", !1);
}

function n0e() {
  return k("tengu_cobalt_plinth_samphire", !1);
}

function yXr() {
  return k("tengu_tidy_widget", !0);
}

function _Xr() {
  return k("tengu_cobalt_plinth_tansy", !1);
}

function bXr() {
  return k("tengu_cobalt_plinth_mallow", !1);
}

function Zle() {
  return k("tengu_slate_lantern", !1);
}

function ede() {
  return k("tengu_slate_lantern_ember", !1);
}

function jEt() {
  return a.CLAUDE_CODE_ARTIFACT_HOT ?? k("tengu_copper_hinge_wren", !1);
}

function Io() {
  return ee().frozenHotUpdate ?? jEt();
}

function r3() {
  return k("tengu_cobalt_plinth_campion", !1) === !0;
}

var Fo = p(() => u({
  version: o().regex(XY),
  capabilities: T(o().regex(pK)).max(256),
  claude: M().optional().catch(void 0),
  core: T(o().regex(pK)).max(256).optional().catch(void 0),
  features: ue(o().regex(pK), ue(o().regex(pK), $e([ ue(o(), oe()), A(!0).transform(() => ({})) ]))).optional().catch(void 0)
})), Mo = "/api/frame/contract/latest", Lo = 262144, Do = 65536, Bo = 5e3, jo = "x-contract-missing-caps", Ho = 16384;

async function Ar(e, n, r) {
  let s;
  try {
    s = await vc.get(e, {
      refreshOAuth: !0,
      ...n.recoverOAuth401 && {
        recoverOAuth401: !0,
        storageV5: n.storageV5
      },
      headers: eu(),
      maxContentLength: Ho,
      ...r,
      ...n.timeoutMs !== void 0 && {
        timeout: n.timeoutMs
      },
      ...n.signal && {
        signal: n.signal
      },
      credentials: n.credentials
    });
  } catch (b) {
    return {
      err: l(b),
      cause: "transport"
    };
  }
  if (!s.ok) return {
    err: `unavailable: ${s.reason}`,
    cause: s.reason === "no-auth" ? "no_auth" : "client_policy"
  };
  if (!s.fromFrame) return {
    err: `relay HTTP ${s.status}`,
    cause: "relay",
    status: s.status
  };
  if (s.status < 200 || s.status >= 300) {
    let b = Yct({
      status: s.status,
      headers: s.response?.headers,
      data: s.data,
      redact: y => y,
      label: "[artifact] contract fetch"
    });
    return {
      err: `HTTP ${s.status}`,
      cause: s.status === 404 ? "http_404" : s.status >= 500 ? "http_5xx" : "http_4xx",
      status: s.status,
      ...b !== void 0 && {
        proxyDeny: b
      }
    };
  }
  let h = s.response?.headers?.[jo];
  return {
    body: s.data,
    ...typeof h === "string" && {
      missingCapsHeader: h
    }
  };
}

async function Bne(e) {
  if (e.version !== void 0 && !XY.test(e.version)) return {
    err: "invalid contract version",
    cause: "malformed"
  };
  let n = await Ar(e.version !== void 0 ? `/api/frame/contract/${e.version}` : Mo, e);
  if ("err" in n) return n;
  let r = Fo().safeParse(n.body);
  if (!r.success) return {
    err: "malformed contract response",
    cause: "malformed"
  };
  return r.data;
}

async function SXr(e, n, r) {
  if (!XY.test(e) || !pK.test(n)) return {
    err: "invalid contract version or capability name",
    cause: "malformed"
  };
  let s = await Ar(`/api/frame/contract/${e}/${n}.d.ts`, r, {
    responseType: "text",
    maxContentLength: Lo
  });
  if ("err" in s) return s;
  if (typeof s.body !== "string" || s.body.trim() === "") return {
    err: "empty or non-text defs body",
    cause: "malformed"
  };
  return {
    dts: s.body
  };
}

async function wXr(e, n) {
  if (!XY.test(e)) return {
    err: "invalid contract version",
    cause: "malformed"
  };
  let r = await Ar(`/api/frame/contract/${e}/prompt`, n, {
    responseType: "text",
    maxContentLength: Do
  });
  if ("err" in r) return r;
  if (typeof r.body !== "string" || r.body.trim() === "") return {
    err: "empty or non-text prompt body",
    cause: "malformed"
  };
  let s = r.missingCapsHeader === void 0 ? [] : r.missingCapsHeader.slice(0, 4096).split(",").map(h => h.trim()).filter(h => pK.test(h));
  return {
    promptMd: r.body,
    missingCaps: s
  };
}

function tde(e) {
  let n = kp(), r = !e.isNonInteractiveSession || n === "claude-vscode" || hu(), s = e.agentType === "teammate" || jd() ? "teammate" : e.agentId !== void 0 ? "subagent" : Ft() ? "bg_session" : n === "sdk-ts" || n === "sdk-py" ? "sdk" : r ? "interactive" : "print";
  return {
    hasInteractiveUI: r,
    publishContext: s
  };
}

function _ye(e) {
  return n => {
    let r = e();
    return {
      ver: r.artifactReadVersions?.[n],
      observers: r.artifactReadObservers?.[n]
    };
  };
}

function xB(e, n, r) {
  return `${e ?? "main"}\n${n ?? ""}` + (r === void 0 ? "" : `\n${r}`);
}

var Ii = {
  page_data: 0,
  summary: 1,
  source: 2
};

function t4t(e, n, r, s) {
  let h = ee().readDeliveries.get(BF(e, n));
  return h !== void 0 && s !== void 0 && s !== "" && h.ver === r && h.batch === s && h.kind !== "source" ? h.kind : void 0;
}

function nde(e, n, r) {
  let s = ee().readDeliveries.get(BF(e, n));
  return s !== void 0 && s.ver === r && !s.sourced;
}

var Zi = "\0own-mint";

function r0e(e) {
  return `${e ?? "main"}\n${Zi}`;
}

function n4t(e, n) {
  return e.ver === n && e.observers !== void 0 && Object.values(e.observers).includes("");
}

function oQ(e, n) {
  return Qi({
    ver: e.artifactReadVersions?.[n],
    observers: e.artifactReadObservers?.[n]
  });
}

function Qi(e) {
  return ylt(e.observers) ? e.ver : void 0;
}

function vXr(e, n) {
  return () => Qi(e(n));
}

function EXr(e) {
  return (n, r, s) => {
    if (r !== void 0 && !hU.test(r)) return;
    let h = s?.indexOf(`\n`) ?? -1, b = s === void 0 ? void 0 : s.slice(0, h), y = s === void 0 ? "" : s.slice(h + 1), w = y.indexOf(`\n`), S = w < 0 ? y : y.slice(0, w), x = y.slice(w + 1), P = w < 0 ? void 0 : x === "summary" || x === "page_data" ? x : void 0, R = S === Zi, O = R ? "" : S;
    if (b !== void 0) {
      let z = ee().readDeliveries, K = BF(b, n), F = z.get(K), Z = P ?? "source", C = Z === "source" || F !== void 0 && F.ver === r && F.sourced;
      if (r === void 0) z.delete(K); else if (F === void 0 || F.ver !== r || F.batch !== O || Ii[Z] > Ii[F.kind]) z.set(K, {
        ver: r,
        batch: O,
        kind: Z,
        sourced: C
      });
    }
    if (b !== void 0 && !R) {
      let z = ee().refusedPublishBodies.get(BF(b, n));
      if (z !== void 0 && z.observedFrom === void 0 && (O === "" || O !== z.batch)) z.observedFrom = O;
      if (z?.sourceless !== void 0 && !P && r !== void 0 && (z.live === void 0 || r === z.live || (XL(r, z.live) ?? -1) > 0)) delete z.sourceless, 
      z.live ??= r;
    }
    if (b !== void 0 && r !== void 0) {
      let z = ee().refusedPublishBodies.get(BF(b, n));
      if (z?.withheld) delete z.withheld;
    }
    e(z => {
      let K = z.artifactReadVersions?.[n], F = z.artifactReadObservers?.[n], Z = r === void 0 || b === void 0 ? void 0 : r === K ? F === void 0 || Object.hasOwn(F, b) ? F : {
        ...F,
        [b]: O
      } : {
        [b]: O
      };
      if (K === r && F === Z) return z;
      let {[n]: C, ...V} = z.artifactReadVersions ?? {}, {[n]: Q, ...B} = z.artifactReadObservers ?? {};
      return {
        ...z,
        artifactReadVersions: r === void 0 ? V : {
          ...V,
          [n]: r
        },
        artifactReadObservers: Z === void 0 ? B : {
          ...B,
          [n]: Z
        }
      };
    });
  };
}

function DAn(e, n, r, s) {
  let h = e?.[n];
  if (h === void 0) return {
    observed: !0,
    siblingInFlight: !1
  };
  let b = r ?? "main", y = Object.hasOwn(h, b) ? h[b] : void 0, w = y !== void 0 && y !== "" && y === s;
  return {
    observed: y !== void 0 && !w,
    siblingInFlight: w
  };
}

function kXr(e) {
  return (n, r, s) => e(h => {
    let b = LN(r), y = h.artifactRefs ?? [], w = y.find(x => x.slug === n), S = b ?? w?.pin;
    if (s?.cachePinOnly) {
      if (w !== void 0) {
        if (w.pin === S) return h;
        return {
          ...h,
          artifactRefs: y.map(x => x.slug === n ? {
            slug: n,
            ...S !== void 0 && {
              pin: S
            }
          } : x)
        };
      }
      if (S === void 0) return h;
      if (y.length === 0) return h;
      return {
        ...h,
        artifactRefs: [ ...y, {
          slug: n,
          pin: S
        } ]
      };
    }
    if (y[0]?.slug === n && y[0].pin === S) return h;
    return {
      ...h,
      artifactRefs: [ {
        slug: n,
        ...S !== void 0 && {
          pin: S
        }
      }, ...y.filter(x => x.slug !== n) ]
    };
  });
}

function TXr(e) {
  return () => {
    let n = e().artifactRefs ?? [], r = {};
    for (let s of n) if (s.pin !== void 0) r[s.slug] = s.pin;
    return {
      targetSlug: n[0]?.slug,
      pins: r
    };
  };
}

var es = "body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>", zo = "<style>:root{color-scheme:light}" + es, Uo = "<style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}" + es, r4t = 256, Vo = p(() => u({
  contract: o().max(64),
  capabilities: ue(o().max(64), oe()).nullish(),
  type: oe().optional()
})), Wo = p(() => _t({
  slug: o().regex(nr),
  target: o().max(64).nullish(),
  current: o().max(64),
  latest: oe().optional(),
  blocked: oe().optional()
})), Yo = p(() => o().min(1).max(64)), Go = p(() => _t({
  to: o().min(1).max(64).optional().catch(void 0),
  reason: o().max(64).catch(""),
  conflict_count: v().int().min(0).max(1e6).optional().catch(void 0),
  paths: T(o().max(WEt)).max(o4t).optional().catch(void 0)
})), WEt = 1024, o4t = 4096, ts = p(() => _t({
  manifest: ue(o().max(WEt), _t({
    src: _t({}).nullish(),
    doc: o().max(64).nullish().catch(void 0)
  })).refine(e => Object.keys(e).length <= o4t)
}));

function zEt(e) {
  let n = ts().safeParse(e);
  if (!n.success) return;
  let r = [], s = [];
  for (let [h, b] of Object.entries(n.data.manifest)) (b.src != null ? s : r).push(h);
  return {
    own: r.sort(),
    type: s.sort()
  };
}

function Pnt(e) {
  if (e == null) return;
  let n = Wo().safeParse(e);
  if (!n.success) return;
  let r = Yo().safeParse(n.data.latest), s = n.data.blocked, h = Go().safeParse(s);
  return {
    slug: n.data.slug,
    target: n.data.target ?? null,
    current: n.data.current,
    ...r.success && {
      latest: r.data
    },
    ...h.success ? {
      blocked: {
        ...h.data.to !== void 0 && {
          to: h.data.to
        },
        reason: h.data.reason,
        ...h.data.conflict_count !== void 0 && {
          conflictCount: h.data.conflict_count
        },
        ...h.data.paths !== void 0 && {
          paths: h.data.paths
        }
      }
    } : s != null && {
      blocked: {
        reason: ""
      }
    }
  };
}

function xn(e) {
  if (e.status !== void 0) return {
    readback_status: e.status
  };
  if (e.relayStatus !== void 0) return {
    readback_relay_status: e.relayStatus
  };
  return e.unsent ? {
    readback_unsent: !0
  } : e.request;
}

function ar(e) {
  return e.request?.transport === !0 || e.status !== void 0 && e.status >= 500 || e.relayStatus !== void 0 && e.relayStatus >= 500;
}

var or = 500;

function qo(e) {
  let n = e?.mcp?.servers;
  return Array.isArray(n) && n.some(r => typeof r?.server === "string" && F6e(r.server) !== void 0);
}

function ns(e) {
  return {
    ...e.slug && {
      slug: e.slug
    },
    title: e.title,
    ...e.favicon && {
      favicon: e.favicon
    },
    ...e.icon && {
      icon: e.icon
    },
    ...e.label && {
      label: e.label
    },
    ...e.note && {
      note: e.note
    },
    ...e.description && {
      description: e.description
    },
    ...e.publishContext && {
      publish_context: e.publishContext
    },
    ...!1,
    ...e.template && {
      template: e.template
    },
    ...e.autoEditAttribution && {
      auto_edit_attribution: {
        thread_id: e.autoEditAttribution.threadId,
        comment_id: e.autoEditAttribution.commentId
      }
    },
    ...r3() && e.thumbnail && {
      thumbnail: e.thumbnail.toString("base64")
    },
    ...r3() && e.thumbnailDark && {
      thumbnail_dark: e.thumbnailDark.toString("base64")
    },
    ...Rr(e) && {
      deadline: e.deadline
    },
    ...lSe(e.requestId)
  };
}

function Rr(e) {
  return Io() && e.deadline !== void 0 && e.slug !== void 0;
}

var En = "a session that is allowed to fetch the contract (when this session is a sandboxed agent acting for the user, the user's own Claude Code session usually is one)";

async function Ko(e) {
  let {capabilities: n, echoPin: r, explicitPin: s, upgrade: h, pageBytes: b, credentials: y} = e, w = (P, R, O) => {
    let z = RTs(P, R);
    if (z.length === 0) return null;
    m("artifact_publish", "unknown_capability", {
      page_bytes: b,
      unknown_count: z.length
    });
    let K = xO(z, 8, Wg).join(", "), F = R.capabilities.join(", "), Z = O === null ? void 0 : csr()?.roster, C = O !== null && Z !== void 0 && CTs(Z.version, R.version) && z.every(V => Z.capabilities.includes(V)) ? ` ${K} ${z.length === 1 ? "exists" : "exist"} in contract ${Z.version}; this publish is pinned to ${R.version} by ` + (O === "passed" ? "the `contract` you passed." : "the artifact's stored contract.") : "";
    return `unknown ${I(z.length, "capability", "capabilities")}: ${K} \u2014 contract ${R.version} supports: ${F || "(none)"}.${C} Fix or drop the declaration; the control plane would reject it anyway.`;
  }, S = (P, R, O, z) => {
    let K = PTs(P, R);
    if ("errMsg" in K) return m("artifact_publish", "dual_spelling_ambiguous", {
      page_bytes: b
    }), K;
    let F = w(K.caps, R, z);
    if (F !== null) return {
      errMsg: F
    };
    return {
      fields: {
        contract: O,
        capabilities: K.caps
      }
    };
  }, x = async P => {
    let R = ee(), O = R.accountEpoch, z = await Bne({
      credentials: y
    });
    if ("err" in z) {
      m("artifact_publish", "contract_fetch_failed", {
        page_bytes: b,
        cause: c(z.cause)
      });
      let K = z.cause === "http_4xx" && z.status === 403 && z.proxyDeny !== "content_scan_transient";
      return {
        errMsg: `couldn't fetch the capability contract (${z.err}) \u2014 ` + (K ? `the server, or a proxy in front of it, refused this request, so retrying from this session will usually not help. ${P.refused}` : P.retry)
      };
    }
    return hye({
      session: R,
      epoch: O,
      roster: z,
      storageV5: void 0
    }), z;
  };
  if (s !== null) {
    if (n !== void 0) {
      let P = await Bne({
        version: s,
        credentials: y
      });
      if (!("err" in P)) return S(n, P, s, "passed");
    }
    return {
      fields: {
        contract: s,
        ...n !== void 0 && {
          capabilities: $_o(n)
        }
      }
    };
  }
  if (n !== void 0 && r !== null) {
    let P = await Bne({
      version: r,
      credentials: y
    });
    if ("err" in P) return {
      fields: {
        contract: r,
        capabilities: $_o(n)
      }
    };
    return S(n, P, r, "stored");
  }
  if (n !== void 0) {
    let P = e.latestFetchRemedy ?? (Object.keys(n).length === 0 ? {
      retry: "clearing a stored declaration also needs the current " + "contract. Retry when the contract service is reachable \u2014 " + "until the clear lands, the stored grants stay live.",
      refused: `Nothing was cleared: clearing a stored declaration needs the current contract, so any stored grants are still live. Tell the user that, and that the declaration has to be cleared from ${En}.`
    } : {
      retry: "a publish that declares capabilities needs the current contract from the server. Retry; or publish without the capabilities field and declare them on a later redeploy (a stored declaration carries forward unchanged).",
      refused: `Nothing was published: a publish that declares capabilities needs the current contract from the server. Tell the user that the declaration has to be published from ${En}. Do not publish without the capabilities field unless every capability the page needs is already stored or the user asks: a declaration already stored carries forward unchanged, but capabilities declared for the first time are not granted, so a page that depends on them will not work. If you do publish without the field (and without contract: 'latest' if you passed it), tell the user which capabilities were not granted.`
    }), R = await x(P);
    if ("errMsg" in R) return R;
    return S(n, R, R.version, null);
  }
  if (r !== null) return {
    fields: {
      contract: r
    }
  };
  if (h) {
    let P = await x({
      retry: "an upgrade stamps the current contract, which requires the contract service. Retry when it is reachable.",
      refused: `Nothing was published: an upgrade stamps the current contract. Tell the user that the upgrade has to be published from ${En}. To publish the content anyway, publish without the contract field (a stored contract stays as it is; if none is stored the page is published without one).`
    });
    if ("errMsg" in P) return P;
    return {
      fields: {
        contract: P.version
      }
    };
  }
  return {
    fields: {}
  };
}

var s4t = 8192, o0e = 3e5, Fi = 'window.__FRAME_PREAMBLE={"v":1';

function bsr(e) {
  return e.startsWith(Fi) && ",}".includes(e[Fi.length] ?? " ");
}

var Xo = new RegExp(`^<base[\\t\\n\\f\\r ]+href="\\/_f\\/[^">]*"(?:${Yue})?[\\t\\n\\f\\r ]*\\/?>`), Jo = new RegExp(`<base\\s+href="\\/_f\\/[^">]*"(?:${Yue})?\\s*\\/?>\\n?`, "gi");

function Mi(e) {
  let n = W8(e), r = n.match(Xo);
  if (r) n = W8(n.slice(r[0].length)); else if (!n.length) return !1;
  let s = r !== null;
  while (n.length) {
    if (!/^<script(?=[\t\n\f\r />])/.test(n)) return !1;
    let h = WSe(n, 7);
    if (h < 0) return !1;
    let b = n.slice(h);
    if (!s && (CBn(n, 0) !== h || !bsr(b))) return !1;
    s = !0;
    let y = vyo(b);
    if (y < 0) return !1;
    n = W8(b.slice(y));
  }
  return !0;
}

function rs(e) {
  let n = W8(e);
  if (n.startsWith("<head>") && n.endsWith("</head>")) return Mi(n.slice(6, -7));
  return Mi(n);
}

function Int(e, n = () => !0) {
  let r = 4, s = e.indexOf(que);
  while (s >= 0 && s < s4t && r > 0) {
    let h = s + que.length, b = e.subarray(0, s + o0e + jSe.length).indexOf(jSe, h);
    if (b >= 0 && rs(e.toString("utf8", h, b))) {
      let y = Buffer.concat([ e.subarray(0, s), e.subarray(b + jSe.length) ]);
      if (n(y)) return y;
      r--;
    }
    s = e.indexOf(que, h);
  }
  return;
}

var Zo = /^<body(?=[\t\n\f\r />])/i, Li = /^<base(?=[\t\n\f\r />])/i, Qo = /^<(script|style|title|textarea|xmp|iframe|noembed|noframes|noscript|plaintext)(?=[\t\n\f\r />])/i;

function ln(e, n, r) {
  let s = /[\t\n\f\r />]/g, h = r;
  for (;;) {
    if (h = e.indexOf("<", h), h < 0) return -1;
    if (e.startsWith("\x3c!--", h)) {
      let y = -1;
      if (e.startsWith(">", h + 4)) y = h + 5; else if (e.startsWith("->", h + 4)) y = h + 6; else for (let w = e.indexOf("--", h + 4); w >= 0; ) {
        if (e.startsWith(">", w + 2)) y = w + 3; else if (e.startsWith("!>", w + 2)) y = w + 4; else {
          w = e.indexOf("--", w + 1);
          continue;
        }
        break;
      }
      if (y < 0) return -1;
      h = y;
      continue;
    }
    let b = Qo.exec(e.slice(h, h + 11));
    if (b) {
      let y = b[1].toLowerCase(), w = y === "plaintext" ? -1 : WSe(e, h + 1 + y.length), S = new RegExp(`</${y}(?=[\\t\\n\\f\\r />])`, "gi");
      S.lastIndex = Math.max(w, 0);
      let x = w < 0 ? null : S.exec(e), P = x === null ? -1 : WSe(e, x.index + x[0].length);
      if (P < 0 || y === "script" && Yvr(e.slice(w, x.index))) return -1;
      h = P;
    } else if (n.test(e.slice(h, h + 8))) return h; else if (/^<\/?[a-zA-Z]/.test(e.slice(h, h + 3))) {
      s.lastIndex = h + 2;
      let y = s.exec(e);
      if (h = y === null ? -1 : WSe(e, y.index), h < 0) return -1;
    } else if (/^<(?:[?!]|\/(?!>))/.test(e.slice(h, h + 3))) {
      if (h = e.indexOf(">", h + 2), h < 0) return -1;
      h++;
    } else h++;
  }
}

function i4t(e) {
  return os(e, ls, ss(el, "blocks"));
}

var el = 64, tl = 96, is = 64;

function ss(e, n) {
  return {
    spent: 0,
    cap: e,
    exhausted: n
  };
}

function as(e) {
  if (e.spent === e.cap) throw new jne(e.exhausted, e.spent);
  e.spent++;
}

class jne extends He {
  passes;
  constructor(e = "blocks", n) {
    super(rl[e], nl[e]);
    this.passes = n;
  }
}

var nl = {
  blocks: "strip_unsettled",
  author: "strip_unsettled",
  levels: "nested_repair_depth_cap"
}, rl = {
  blocks: "This page carries `\x3c!-- frame-runtime --\x3e` serve-marker blocks or `data-frame-runtime` attributes nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete those comment blocks and attributes from the source and publish again.",
  author: 'This page carries runtime-marker comment blocks (`\x3c!-- frame-runtime --\x3e\u2026\x3c!-- /frame-runtime --\x3e`, `\x3c!-- chart-runtime --\x3e\u2026\x3c!-- /chart-runtime --\x3e`, `\x3c!--claude-mermaid-runtime-begin\u2026`, `\x3c!--claude-hljs-runtime-begin\u2026`), `data-frame-runtime` attributes, `<base href="/_f/\u2026">` tags, or repeated artifact skeletons (`<!doctype html><html><head>\u2026` wrapped around the page again and again) nested so that removing one keeps exposing another \u2014 nothing a genuine page or a fetched artifact contains. Delete every such comment block, attribute, tag, and repeated outer skeleton from the source, keep the innermost document, and publish again.',
  levels: `This page is a published artifact page wrapped inside more than ${is} nested copies of the artifact skeleton (\`<!doctype html><html><head>\x3c!-- frame-runtime --\x3e\u2026\` repeated) \u2014 nothing a genuine page contains. Publish the innermost document on its own: delete the repeated outer skeletons from the source and publish again.`
};

function os(e, n, r) {
  for (;;) {
    as(r);
    let s = n(e);
    if (s === e) return s;
    e = s;
  }
}

function ls(e) {
  let n = [], r = 0, s = ln(e, Zo, 0), h = s < 0 ? 1 / 0 : s, b = e.indexOf(que), y = -1;
  while (b >= 0 && b < h && b - r < s4t) {
    let w = b + que.length;
    if (y < w) {
      if (y = e.indexOf(jSe, w), y < 0) break;
    }
    let S = e.indexOf(que, w);
    if ((S < 0 || S > y) && y - b < o0e && rs(e.slice(w, y))) {
      let x = y + jSe.length;
      if (e[x] === `\n`) x++;
      n.push([ b, x ]), r += x - b;
    }
    b = S;
  }
  return e = il(TBn(e, n)), e = sl(e), e.replace(Jo, "").replace(/\sdata-frame-runtime="[^">]*"/gi, "");
}

function jVe(e) {
  return cs(e).body;
}

function cs(e) {
  let n = w => ti(ls(w)), r = ss(tl, "author"), s = w => os(w, n, r), h = s(e), b = ws(h);
  if (b === null) return {
    body: h,
    unwrapped: !1,
    passes: r.spent
  };
  let y = Ml(b.body, b.lang, b.cover, s, r);
  return {
    body: y.body,
    passes: r.spent,
    lang: y.lang,
    cover: y.cover,
    unwrapped: !0,
    ...y.outcome && {
      repair: y.outcome
    },
    ...b.hoistedCommentsDropped && {
      hoistedCommentsDropped: !0
    }
  };
}

function AXr(e) {
  let n;
  try {
    n = i4t(e);
  } catch (s) {
    if (s instanceof jne) return !1;
    throw s;
  }
  let r = ws(n);
  return r !== null && vs(r.body);
}

var ds = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8})*$/;

function kr(e) {
  return e.length <= 35 && ds.test(e);
}

async function LAn(e) {
  if (!e.includes(mn) || Buffer.byteLength(e, "utf8") > Df || sAe(e)) return e;
  return pi(e);
}

async function NAn(e, n = {}) {
  let {injectDiagramRuntime: r, injectHighlightRuntime: s, composedPrReview: h, previewOnly: b, expectRoundTrippedPage: y, docBlockIds: w} = n, S = cs(e), {body: x, lang: P, cover: R} = S, O;
  switch (S.repair) {
   case "repaired":
   case "partial":
    O = S.repair;
    break;

   case "miss":
    f("artifact_publish", "nested_repair_miss");
    break;

   case void 0:
    break;
  }
  if (!S.unwrapped && y === !0) f("artifact_publish", "round_trip_unwrap_miss");
  if (aks(x)) f("artifact_publish", "runtime_sentinel_residual");
  let z = 0;
  if (w !== !1) {
    let le = await LAn(x);
    if (le !== x) z = Math.max(0, Buffer.byteLength(le, "utf8") - Buffer.byteLength(x, "utf8")), 
    x = le;
  }
  let K = null, F = Ei(x, await NEt(), {
    crUrlRe: K,
    allowMermaidFence: h === !0 || b === !0,
    allowStampBinding: h === !0 || b === !0
  });
  if (F.applies && !F.ok) {
    if (b !== !0) m("artifact_publish", "pr_review_template_mismatch");
    throw new He(`This page carries the artifact-pr-review machinery but failed publish-time validation: ${F.reason}. Carry the template blocks byte-for-byte and keep the rest of the page within the skill's contract \u2014 no script fragments or event handlers, no elements or attributes that fetch or navigate, no CSS network functions, and no src/href other than the PR's canonical GitHub URL \u2014 then retry.`, "pr_review_template_mismatch");
  }
  let Z = gn(x), C = Z.chart && Zr(), V = r === !0 && Z.mermaid, Q = s === !0 && Z.highlight, B = "";
  if (C) {
    let le = await Un();
    if (le !== null) B += le;
  }
  let ie = !1;
  if (V) {
    let le = RAn();
    if (le !== null) B += le, ie = !0;
  }
  let fe = !1;
  if (Q) {
    let le = await Vn();
    if (le !== null) B += le, fe = !0;
  }
  if (B !== "") {
    let {runtimeBlockInsertionIndex: le} = await import("./chunk-s0nt7fbf.js"), Ae = le(x);
    if (Ae === void 0) f("artifact_publish", "runtime_blocks_over_budget"), ie = !1, 
    fe = !1; else x = x.slice(0, Ae) + B + x.slice(Ae);
  }
  return {
    body: x,
    mermaidInjected: ie,
    hljsInjected: fe,
    roundTripLang: P,
    ...R !== void 0 && {
      roundTripCover: R
    },
    unnested: O,
    blockIdBytes: z,
    ...S.hoistedCommentsDropped && {
      hoistedCommentsDropped: !0
    }
  };
}

function il(e) {
  return us(e, oi);
}

function sl(e) {
  return us(e, ii);
}

function us(e, n) {
  let r = [], s = e.indexOf(n.beginPrefix);
  while (s >= 0) {
    let h = s + n.beginPrefix.length, b = e.indexOf(n.beginPrefix, h), y = h, w = h + n.lenDigitsMax;
    while (y < w) {
      let S = e.charCodeAt(y);
      if (S < 48 || S > 57) break;
      y++;
    }
    if (y > h && e.startsWith("--\x3e", y)) {
      let S = Number(e.slice(h, y)), x = y + 3, P = 0, R = x + S;
      while (P <= n.openTags && !e.startsWith(n.end, R)) P++, R += ABn;
      if (S < n.maxSpan && P <= n.openTags && (b < 0 || b > R) && n.validate(e.slice(x, R), P)) {
        let O = R + n.end.length;
        if (e[O] === `\n`) O++;
        let z = s > 0 && e[s - 1] === `\n` ? s - 1 : s;
        r.push([ z, O ]);
      }
    }
    s = b;
  }
  return TBn(e, r);
}

var fs = 2097152;

function Ssr(e) {
  let n = Vo().safeParse(e);
  if (!n.success) {
    t(`[artifact] malformed read-back body: ${n.error.message}`);
    return;
  }
  let {contract: r, capabilities: s} = n.data, h = Pnt(n.data.type);
  return {
    contract: r,
    ...s != null && {
      capabilities: s
    },
    ...h !== void 0 && {
      typeLock: h
    }
  };
}

async function Kx(e, n, r) {
  let s = performance.now();
  try {
    let h = await vc.get(`/api/frame/read/${encodeURIComponent(e)}`, {
      refreshOAuth: !0,
      headers: eu(),
      timeout: 15e3,
      maxContentLength: fs,
      ...n && {
        signal: n
      },
      credentials: r
    });
    if (!h.ok) return {
      err: `read-back unavailable: ${h.reason}`,
      unsent: !0
    };
    if (!h.fromFrame) return {
      err: `read-back relay HTTP ${h.status}`,
      relayStatus: h.status
    };
    if (h.status === 404) return null;
    if (h.status < 200 || h.status >= 300) return t(`[artifact] read-back ${h.status}: ${KE(h.data)}`), 
    {
      err: `read-back HTTP ${h.status}`,
      status: h.status
    };
    let b = Ssr(h.data);
    if (b === void 0) return {
      err: "malformed read-back body",
      status: h.status
    };
    return b;
  } catch (h) {
    return {
      err: h instanceof Error ? h.message : String(h),
      request: rQ(h, s)
    };
  }
}

async function ps(e, n, r, s) {
  let h = await e;
  if (h.err !== null || n === void 0 || h.readBackEchoed) return h;
  let b = await Kx(n, s, r);
  if (b === null || "err" in b) {
    if (b !== null) t(`[artifact] read-back skipped: ${b.err}`);
    return h;
  }
  let {typeLock: y, ...w} = b, S = y !== void 0 ? {
    ...h,
    typeLock: y
  } : h;
  if (h.stored?.capabilities !== void 0 || !I1(w.capabilities ?? void 0) && LN(w.contract) === null) return S;
  return {
    ...S,
    stored: {
      ...w,
      ...I1(w.capabilities ?? void 0) && {
        carried: !0
      }
    }
  };
}

function al(e) {
  let n = /[\t\n\f\r ]/, r = ln(e, Li, 0);
  while (r >= 0) {
    let s = WSe(e, r + 5);
    if (s < 0) return;
    let h = r + 5;
    while (h < s - 1) {
      let b = e[h];
      if (n.test(b) || b === "/") {
        h++;
        continue;
      }
      let y = h++;
      while (h < s - 1 && !n.test(e[h]) && !"/=".includes(e[h])) h++;
      let w = e.slice(y, h).toLowerCase();
      while (h < s - 1 && n.test(e[h])) h++;
      if (e[h] !== "=") continue;
      h++;
      while (h < s - 1 && n.test(e[h])) h++;
      let S = h, x, P = e[h];
      if (P === '"' || P === "'") {
        let R = e.indexOf(P, h + 1);
        h = R < 0 ? s : R + 1, x = e.slice(S + 1, h - 1);
      } else {
        while (h < s - 1 && !n.test(e[h])) h++;
        x = e.slice(S, h);
      }
      if (w === "href") {
        if (!x.startsWith("/_f/")) return x;
        break;
      }
    }
    r = ln(e, Li, s);
  }
  return;
}

var ol = /^[\f ]*(?:[a-zA-Z][a-zA-Z0-9+.-]*:|[/\\])/;

function ll(e) {
  let n = al(e);
  if (n === void 0) return !1;
  let r = n.replace(/[\t\n\r]/g, "");
  return r.includes("&") || ol.test(r);
}

var cl = "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and publish those files alongside the page (`files`), referenced by relative path.", dl = "This page's <base href> points outside the artifact \u2014 at another site, or at the site root. Artifact hosting serves only the artifact's own folder and refuses a base on another site, so relative references won't resolve through it \u2014 remove the tag and make those references work without it (inline what the page needs).";

function ul(e) {
  let n = typeof e === "string" ? e.slice(0, 16384) : e.subarray(0, 16384).toString("utf8"), r = n.startsWith("\ufeff") ? 1 : 0;
  for (;;) {
    while (r < n.length && /\s/.test(n[r])) r++;
    if (!n.startsWith("\x3c!--", r)) break;
    let s = n.indexOf("--\x3e", r + 4);
    if (s === -1) return !1;
    r = s + 3;
  }
  return /^<!doctype html[\s>]/i.test(n.slice(r, r + 16));
}

function fl(e, n) {
  if (e.err !== null) return e;
  let r = pl(n).filter(s => !(e.livePaths ?? []).includes(s));
  if (r.length === 0) return e;
  return f("artifact_publish", "files_html_no_doctype", {
    raw_html_pages: r.length
  }), {
    ...e,
    warnings: [ ...e.warnings ?? [], hl(r) ]
  };
}

function pl(e) {
  return e.filter(n => T0(n.contentType) === "text/html" && n.live !== !0 && n.reseed !== !0 && !ul(n.content)).map(n => n.path);
}

function hl(e) {
  let n = e.slice(0, 3).map(b => _(b)), r = e.length - n.length, s = n.join(", ") + (r > 0 ? ` and ${r} more` : ""), h = e.length === 1;
  return `files: ${s} ${h ? "has" : "have"} no <!doctype html> \u2014 supporting HTML pages are served exactly as written (only the page itself is wrapped in the skeleton), so if ${h ? "it is a page" : "they are pages"} people open, start ${h ? "it" : "each"} with a doctype, charset and viewport meta and its base styles and publish again (a fragment the page fetches and inserts can stay as written); as published ${h ? "it renders" : "they render"} in quirks mode.`;
}

async function gl(e, n) {
  let r = await e;
  return r.err === null && n.length > 0 ? {
    ...r,
    warnings: [ ...r.warnings ?? [], ...n ]
  } : r;
}

var $n = 8, ml = .7, bl = Math.floor(yU * ml / ($n * 2));

function cr(e) {
  let n = e !== null && typeof e === "object" ? e.warnings : void 0;
  if (!Array.isArray(n)) return [];
  let r = [];
  for (let s of n) {
    if (r.length >= $n) break;
    if (typeof s !== "string") continue;
    let h = Wen(s, bl);
    if (h !== void 0) r.push(yl(h) ?? h);
  }
  return r;
}

function yl(e) {
  if (/^live_over_budget:(.{1,1024})$/.exec(e)) return e;
  if (/^render_unavailable:(.{1,1024})$/.exec(e)) return e;
  if (e === "render_over_budget") return e;
  return;
}

function hs(e) {
  let n = e !== null && typeof e === "object" && "docs" in e ? ysr(e) : void 0;
  if (n !== void 0) return n.map(s => ({
    path: s.path,
    ...s.doc !== void 0 && {
      doc: s.doc
    }
  })).sort((s, h) => s.path < h.path ? -1 : s.path > h.path ? 1 : 0);
  let r = ts().safeParse(e);
  if (!r.success) return;
  return Object.entries(r.data.manifest).flatMap(([s, h]) => rn.test(s) && h.src == null && typeof h.doc === "string" && h.doc !== "" ? [ {
    path: s,
    doc: h.doc
  } ] : []).sort((s, h) => s.path < h.path ? -1 : s.path > h.path ? 1 : 0);
}

function gs(e) {
  return e.flatMap(n => []);
}

function wl() {
  return [];
}

function vl(e) {
  return e.flatMap(n => []);
}

function Sl(e, n) {
  return [];
}

function xl(e) {
  return e.flatMap(n => []);
}

function ms(e, n) {
  return (e ?? []).filter(r => !n.has(r)).flatMap(r => []);
}

var El = 32, Al = 16, Rl = 200, kl = /^[\w./-]{1,64}$/, Tl = p(() => u({
  pins: T(oe()).optional().catch(void 0),
  warnings: T(oe()).optional().catch(void 0)
})), Pl = p(() => u({
  uuid: o().regex(nr),
  path: o().regex(kl),
  module: M().optional().catch(void 0),
  files: v().int().min(0).max(1e6).optional().catch(void 0)
})), Cl = p(() => u({
  src: o().optional().catch(void 0),
  reason: o().regex(N6e),
  count: v().int().min(1).max(1e5).optional().catch(void 0)
}));

function dr(e) {
  if (e === null || typeof e !== "object" || !("embeds" in e) || e.embeds === null || e.embeds === void 0) return;
  let n = Tl().safeParse(e.embeds);
  if (!n.success) return {
    pins: [],
    warnings: []
  };
  let r = [];
  for (let h of n.data.pins ?? []) {
    if (r.length >= El) break;
    let b = Pl().safeParse(h);
    if (!b.success) continue;
    let {uuid: y, path: w, module: S, files: x} = b.data;
    r.push({
      uuid: y,
      path: w,
      module: S === !0,
      ...x !== void 0 && {
        files: x
      }
    });
  }
  let s = [];
  for (let h of n.data.warnings ?? []) {
    if (s.length >= Al) break;
    let b = Cl().safeParse(h);
    if (!b.success) continue;
    let {reason: y, count: w} = b.data, S = b.data.src === void 0 ? void 0 : Wen(b.data.src, Rl);
    s.push({
      reason: y,
      ...S !== void 0 && {
        src: S
      },
      ...w !== void 0 && {
        count: w
      }
    });
  }
  return {
    pins: r,
    warnings: s
  };
}

async function On() {
  let e = ee(), n = e.workshopBlessedHashes ?? (async () => {
    let [{extractInlineScriptHashes: r}, s] = await Promise.all([ import("./chunk-y960b7c9.js"), import("./chunk-ywdvwqfh.js") ]), h = r(s.WORKSHOP_PAGE_TEMPLATE);
    for (let y of r(s.WORKSHOP_TEMPLATE)) h.add(y);
    let b = !0;
    for (let y of [ await Un(), RAn(), await Vn() ]) if (y !== null) for (let w of r(y)) h.add(w); else b = !1;
    return {
      hashes: h,
      complete: b
    };
  })();
  e.workshopBlessedHashes = n;
  try {
    let {hashes: r, complete: s} = await n;
    if (!s) e.workshopBlessedHashes = void 0, t("workshopBlessedScriptHashes: a runtime leg degraded \u2014 returning an incomplete (stricter) allowlist for this call only");
    return r;
  } catch (r) {
    throw e.workshopBlessedHashes = void 0, r;
  }
}

var Mt = "<!doctype html>", Tr = "<html", kn = Mt + Tr, $l = new RegExp(`^${Mt}`, "i"), bs = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover">', _s = '<meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1">', Di = /^<(?:meta|wbr)(?=[\t\n\f\r />])/i, tr = /<meta(?=[\t\n\f\r /])/gi, Ol = 1024, Nl = /([^\t\n\f\r =,]+)[^=,]*[\t\n\f\r =]*([^\t\n\f\r =,]*)/g;

function An(e) {
  let n = "";
  for (let [, r = "", s = ""] of e.matchAll(Nl)) if (r.toLowerCase() === "viewport-fit") n = s.toLowerCase();
  return n === "cover";
}

function ur(e, n, r) {
  let s = new Map, h = r - 1, b = n;
  for (;;) {
    while (b < h && /[\t\n\f\r /]/.test(e[b])) b++;
    if (b >= h) return s;
    let y = "";
    do {
      y += e[b].toLowerCase(), b++;
    } while (b < h && !/[\t\n\f\r /=>]/.test(e[b]));
    while (b < h && /[\t\n\f\r ]/.test(e[b])) b++;
    let w = "";
    if (b < h && e[b] === "=") {
      b++;
      while (b < h && /[\t\n\f\r ]/.test(e[b])) b++;
      let S = e[b];
      if (b < h && (S === '"' || S === "'")) {
        let x = e.indexOf(S, b + 1);
        if (x < 0 || x >= h) return s;
        w = e.slice(b + 1, x), b = x + 1;
      } else {
        let x = b;
        while (b < h && !/[\t\n\f\r >]/.test(e[b])) b++;
        w = e.slice(x, b);
      }
    }
    if (!s.has(y)) s.set(y, w);
  }
}

function Il(e, n = !0) {
  if (!/<meta[\t\n\f\r />]/i.test(e)) return n;
  let r, s = e + "<wbr>", h = 0, b = ln(s, Di, 0);
  while (b >= 0 && b < e.length) {
    let y = s[b + 1] === "m" || s[b + 1] === "M" ? 5 : 4, w = WSe(s, b + y);
    if (w < 0 || w > e.length) {
      b = -1;
      break;
    }
    if (y === 5) {
      let S = ur(s, b + y, w);
      if (S.get("name")?.toLowerCase() === "viewport") r = S.get("content") ?? "";
    }
    h = w, b = ln(s, Di, w);
  }
  if (b < 0 && !(r !== void 0 && An(r))) {
    tr.lastIndex = h;
    for (let y = tr.exec(e); y !== null; y = tr.exec(e)) {
      let w = e.slice(y.index, y.index + Ol), S = w.includes(">") ? WSe(w, 5) : -1;
      if (S < 0) continue;
      let x = ur(w, 5, S);
      if (x.get("name")?.toLowerCase() === "viewport") {
        if (r = x.get("content") ?? "", An(r)) return !0;
      }
    }
  }
  return r === void 0 ? n : An(r);
}

var ys = `</head><body>\n`, Rn = `\n</body></html>`, CXr = new RegExp(`^(?:${Mt}|${Mt.replace("doctype", "DOCTYPE")})?${Tr}(?: lang="(?=[^"]{1,35}")${ds.source.slice(1, -1)}")?(?:${Yue})?><head(?:${Yue})?>$`);

function $An(e, n, r) {
  let s = n !== void 0 && kr(n) ? ` lang="${n}"` : "", h = Il(e, r) ? bs + Uo : _s + zo;
  return `${kn}${s}><head>${h}${ys}${e}${Rn}`;
}

function rr(e, n, r) {
  return WSe(e, n) === r;
}

function a4t(e) {
  return $l.test(e) && e.startsWith(Tr, Mt.length);
}

function ws(e) {
  if (!a4t(e)) return null;
  if (!e.startsWith(Mt)) e = Mt + e.slice(Mt.length);
  let n = e.match(/^<!doctype html><html(?=[\t\n\f\r >])([^>]*)><head(?=[\t\n\f\r >])[^>]*>/);
  if (!n) return null;
  let r = kn.length + n[1].length + 1;
  if (!rr(e, kn.length, r) || !rr(e, r + 5, n[0].length)) return null;
  let s = e.indexOf("</head><body", n[0].length);
  if (s === -1) return null;
  let b = e.slice(n[0].length, s).match(/^<meta[\t\n\f\r ]+charset="?utf8"?(?=[\t\n\f\r >"])[^>]*>(<meta[\t\n\f\r ]+name="?viewport"?(?=[\t\n\f\r >"])[^>]*>)<style(?:[\t\n\f\r ][^>]*)?>([\s\S]*)<\/style>$/);
  if (!b || /<\/style/i.test(b[2])) return null;
  {
    let K = n[0].length;
    for (let F of [ "<meta", "<meta", "<style" ]) {
      let Z = e.indexOf(">", K + F.length) + 1;
      if (!e.startsWith(F, K) || !rr(e, K + F.length, Z)) return null;
      K = Z;
    }
  }
  let y = s + 12, w = WSe(e, y);
  if (w < 0) return null;
  let S = e.slice(y, w - 1);
  if (!/^(?:[\t\n\f\r ][^>]*)?$/.test(S)) return null;
  let x = w;
  if (e[x] === `\n`) x++;
  let P = Fl(e, x);
  if (!P) return null;
  let R = P.bodyEnd;
  if (R > x && e[R - 1] === `\n`) R--;
  let O = n[1].match(/[\t\n\f\r ]lang="([^"]*)"/)?.[1], z = ur(b[1], 5, b[1].length);
  return {
    body: e.slice(x, R),
    ...O !== void 0 && kr(O) && {
      lang: O
    },
    cover: An(z.get("content") ?? ""),
    ...P.commentsDropped && {
      hoistedCommentsDropped: !0
    }
  };
}

function Fl(e, n) {
  let r = !1, s = e.length, h = !1;
  for (;;) {
    while (s > n && `\t\n\f\r `.includes(e[s - 1])) s--;
    if (e.endsWith("--\x3e", s)) {
      let b = e.lastIndexOf("\x3c!--", s - 7);
      if (b < n || !zqt(e.slice(b, s))) return null;
      r = !0, s = b;
    } else if (!h && s - n >= 7 && e.endsWith("</html>", s)) h = !0, s -= 7; else if (h && s - n >= 7 && e.endsWith("</body>", s)) {
      let b = s - 7;
      if (r) {
        let y = e.lastIndexOf("\x3c!--", b);
        if (y >= n && e.lastIndexOf("--\x3e", b) < y + 4) return null;
      }
      return {
        bodyEnd: b,
        commentsDropped: r
      };
    } else return null;
  }
}

function Ml(e, n, r, s, h) {
  let b = 0, y = !1;
  for (;;) {
    as(h);
    let S = Ll(e);
    if (S !== null) {
      if (b === is) throw new jne("levels", h.spent);
      e = S.body, n = S.lang ?? n, r = S.cover, b++, y = !1;
      continue;
    }
    y ||= vs(e);
    let x = s(e);
    if (x === e) break;
    e = x;
  }
  let w = y ? b > 0 ? "partial" : "miss" : b > 0 ? "repaired" : void 0;
  return {
    body: e,
    lang: n,
    cover: r,
    outcome: w
  };
}

function vs(e) {
  if (!a4t(e)) return !1;
  let n = e.indexOf(que);
  return n !== -1 && n < s4t;
}

function Ll(e) {
  if (!a4t(e)) return null;
  let n = kn.length, r = S => {
    if (!e.startsWith(S, n)) return !1;
    return n += S.length, !0;
  }, s;
  if (r(' lang="')) {
    let S = e.indexOf('"', n);
    if (S === -1 || !kr(e.slice(n, S))) return null;
    s = e.slice(n, S), n = S + 1;
  }
  if (!r("><head>" + que)) return null;
  let h = n + o0e, b = 0;
  while (b < 2 && r("<script>")) {
    let S = e.indexOf("<\/script>", n);
    if (S === -1 || S > h) return null;
    let x = e.slice(n, S);
    if (x === "" || x.includes("\x3c!--") || /<\/script/i.test(x)) return null;
    n = S + 9, b++;
  }
  if (b === 0 || !r(jSe)) return null;
  let y = r(bs);
  if (!y && !r(_s)) return null;
  if (!r("<style>")) return null;
  let w = e.indexOf("</style>", n);
  if (w === -1 || e.slice(n, w).includes("<")) return null;
  if (n = w + 8, !r(ys)) return null;
  if (e.length - n < Rn.length || !e.endsWith(Rn)) return null;
  return {
    body: e.slice(n, e.length - Rn.length),
    lang: s,
    cover: y
  };
}

function RXr(e) {
  let n = Object.freeze({
    slug: e
  });
  return ee().mintedRoundTripPublishSignals.add(n), n;
}

function xXr(e) {
  return typeof e === "object" && e !== null && ee().mintedRoundTripPublishSignals.has(e);
}

function Pr(e, n = "supporting file") {
  for (let r of e) {
    if (!Pn.has(r.contentType)) {
      m("artifact_publish", "file_not_servable", ksr(r.path, r.contentType));
      let h = T0(r.contentType), b = Pn.has(h) ? h : void 0;
      return H(Cyo(n, r.path, r.contentType, b));
    }
    if (Sye.has(r.contentType)) {
      if (typeof r.content === "string" ? r.content.includes("\x1b") : r.content.includes(27)) return m("artifact_publish", "file_esc_byte"), 
      H(`${n} "${r.path}" carries an ESC byte \u2014 publish ` + "text content without escape sequences (nothing was published)");
      if (typeof r.content === "string" ? r.content.includes("\0") : r.content.includes(0)) return m("artifact_publish", "file_nul_byte"), 
      H(`${n} "${r.path}" carries NUL bytes \u2014 publish ` + "text content as UTF-8 without embedded NULs (nothing was published)");
    }
    if (ec.has(r.contentType)) {
      let h = typeof r.content === "string" ? r.content : r.content.toString("utf8");
      if (/<!(?:DOCTYPE|ENTITY)/i.test(h)) return m("artifact_publish", "file_dtd"), H(`${n} "${r.path}" carries a DOCTYPE or ENTITY ` + "declaration \u2014 XML supporting files must not use DTD " + "machinery (nothing was published)");
      let b = h.startsWith("\ufeff") ? h.slice(1) : h, y = b.indexOf("<?");
      if (y !== -1) {
        if (!(y === 0 && /^<\?xml[\s?]/i.test(b)) || b.indexOf("<?", 2) !== -1) return m("artifact_publish", "file_pi"), 
        H(`${n} "${r.path}" carries a processing ` + "instruction \u2014 XML supporting files may carry only a " + "leading XML declaration (nothing was published)");
      }
    }
    if (typeof r.content !== "string" && Sye.has(r.contentType) && r.content.length >= 2 && (r.content[0] === 255 && r.content[1] === 254 || r.content[0] === 254 && r.content[1] === 255)) return m("artifact_publish", "file_utf16_bom"), 
    H(`${n} "${r.path}" is UTF-16 encoded \u2014 publish ` + "supporting text files as UTF-8 (nothing was published)");
    let s = typeof r.content === "string" ? r.content : Sye.has(r.contentType) ? r.content.toString("utf8") : null;
    if (s !== null && sAe(s, {
      parsedAsMarkup: eMt.has(T0(r.contentType))
    })) return m("artifact_publish", "file_review_machinery"), H(`${n} "${r.path}" carries the artifact-pr-review machinery; review pages publish as a single file through the publish-time guard (nothing was published)`);
  }
  return null;
}

async function PXr(e, n) {
  let r = Bc();
  if (r !== null) {
    let y = Buffer.byteLength(e, "utf8");
    if (y > Df) return H(`too large: page is ${Math.ceil(y / 1024 / 1024)}MB (max ${Df / 1024 / 1024}MB)`);
    let w = await LAn(e), S = Buffer.byteLength(w, "utf8") > Df ? e : w;
    if (n.verifyWorkshopHtml !== void 0) {
      let {verifyWorkshopHtml: O} = await import("./chunk-y960b7c9.js"), z = O(S, await On(), n.verifyWorkshopHtml);
      if (!z.ok) return H(`workshop page refused by the structural verifier \u2014 fix and republish:\n` + z.violations.slice(0, 12).map(K => `- [${K.rule}] ${K.where} \u2014 ${K.hint}`).join(`\n`));
    }
    let x = n.files ?? [], P = n.removeFiles ?? [];
    if (x.length > 0 || P.length > 0) {
      let O = Nn(S, x, P);
      if (O !== null) return H(O.msg);
    }
    let R = Ir(S, x, n.copiedFiles ?? [], P);
    if (R !== null) return H(R);
    return Pi(r, S, n);
  }
  let s = n.slug, h = n.relayOnly === !0 ? {
    count: 0
  } : void 0, b;
  try {
    b = !s ? await Bi(e, n, h) : await msr(n.ownPublishes, s, () => Bi(e, n, h));
  } catch (y) {
    if (h?.count === 0 && y instanceof Error) Object.defineProperty(y, Ss, {
      value: !0
    });
    throw y;
  }
  return h !== void 0 && b.err !== null && b.notCarried !== !0 && b.refusedShape !== !0 && h.count === 0 ? {
    ...b,
    refusedBeforeSend: !0
  } : b;
}

var Ss = Symbol("refusedBeforeSend");

function IXr(e) {
  return e instanceof Error && Reflect.get(e, Ss) === !0;
}

async function Bi(e, n, r) {
  let s = performance.now(), h = r !== void 0 ? Xl(n) : void 0;
  if (h !== void 0) return m("artifact_publish", "relay_only_not_fresh_page"), {
    ...H(`Nothing was published: a publish made without asking may only create a new artifact, naming no url and setting no capabilities, contract, force, file removals or live files, but this one ${h}. Every publish in this session now goes through the usual permission check, which may need a person's approval.`),
    refusedShape: !0
  };
  let {slug: b, title: y, favicon: w, icon: S, label: x, note: P, description: R, capabilities: O, session: z, hostServers: K, readBack: F, publishContext: Z, originMetadata: C} = n, V = n.copiedFiles ?? [];
  if (n.createPath !== void 0 && (b !== void 0 || n.force === !0 || n.baseVersion !== void 0 || V.length > 0 || n.removeFiles !== void 0 && n.removeFiles.length > 0 || n.liveFiles !== void 0)) return m("artifact_publish", "create_bad_combo"), 
  H("invalid publish options");
  let Q = !!b, B = O !== void 0, ie = RB(), fe = n.force === !0, le = (n.files?.length ?? 0) > 0 || V.length > 0 || (n.removeFiles?.length ?? 0) > 0 || n.liveFiles !== void 0, Ae = n.composedPrReview === !0 || n.autoEditAttribution !== void 0 || le ? n.baseVersion : ie ? n.baseVersion : void 0, we = {
    slug: b,
    title: y,
    favicon: w,
    ...S && {
      icon: S
    },
    label: x,
    note: P,
    ...b !== void 0 && n.deadline !== void 0 && {
      deadline: n.deadline
    },
    ...n.requestId !== void 0 && {
      requestId: n.requestId
    },
    description: R,
    publishContext: Z,
    originMetadata: C,
    ...n.autoEditAttribution && {
      autoEditAttribution: n.autoEditAttribution
    },
    ...n.createPath === void 0 && n.thumbnail && {
      thumbnail: n.thumbnail
    },
    ...n.createPath === void 0 && n.thumbnailDark && {
      thumbnailDark: n.thumbnailDark
    }
  };
  if (n.files !== void 0 && n.files.length > 0 || V.length > 0) {
    if (sAe(e)) return m("artifact_publish", "review_single_file"), H("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
    let j = Pr(n.files ?? []);
    if (j !== null) return j;
  }
  let Je = {
    injectDiagramRuntime: n.injectDiagramRuntime,
    injectHighlightRuntime: n.injectHighlightRuntime,
    composedPrReview: n.composedPrReview,
    expectRoundTrippedPage: n.expectRoundTrippedPage
  }, Fe = await NAn(e, Je), je = $An(Fe.body, Fe.roundTripLang, Fe.roundTripCover), be = Buffer.byteLength(je, "utf8");
  if (be > Df && Fe.blockIdBytes > 0 && be - Fe.blockIdBytes <= Df) f("artifact_publish", "block_ids_over_cap"), 
  Fe = await NAn(e, {
    ...Je,
    docBlockIds: !1,
    expectRoundTrippedPage: !1
  }), je = $An(Fe.body, Fe.roundTripLang, Fe.roundTripCover), be = Buffer.byteLength(je, "utf8");
  let {body: te, mermaidInjected: At, hljsInjected: Ze, unnested: Me, hoistedCommentsDropped: Le} = Fe, We = ll(te) ? [ DM() ? cl : dl ] : [];
  if (be > Df) return m("artifact_publish", "too_large", {
    page_bytes: be,
    mermaid_injected: At,
    hljs_injected: Ze,
    block_id_bytes: Fe.blockIdBytes
  }), H(`too large: rendered page is ${Math.ceil(be / 1024 / 1024)}MB (max ${Df / 1024 / 1024}MB)` + (Ze ? " \u2014 includes the inline syntax-highlight runtime (~0.6MB), added because the page contains fenced code" : ""));
  let qe = !1, Rt = 0, Be, Qe = [];
  if (n.files !== void 0 && n.files.length > 0) Qe = n.files.filter(j => Eyo(j.contentType)).map(j => `${j.path} (${j.contentType})`);
  if (n.verifyWorkshopHtml !== void 0) {
    let {verifyWorkshopHtml: j} = await import("./chunk-y960b7c9.js"), pe = await On(), X = j(je, pe, n.verifyWorkshopHtml);
    if (!X.ok) {
      f("workshop_html_publish", "verifier_refused"), m("artifact_publish", "workshop_verifier_refused", {
        page_bytes: be
      });
      let Ne = X.violations.slice(0, 12).map(Ve => `- [${Ve.rule}] ${Ve.where} \u2014 ${Ve.hint}`), jt = X.violations.length > 12 ? `\n(and ${X.violations.length - 12} more)` : "";
      return {
        url: null,
        slug: null,
        version: null,
        err: `workshop page refused by the structural verifier \u2014 fix and republish:\n` + Ne.join(`\n`) + jt
      };
    }
    if (qe = X.workshopSurface, Rt = X.decisionCount ?? 0, X.workshopSurface) Be = {
      state: X.workshopState ?? "in-progress",
      deliverables: X.deliverables ?? {
        n: 0,
        pr: 0,
        artifact: 0,
        other: 0
      }
    };
    if (qe) {
      let Ne = pc(n.slug, n.refusedSidecarHistory?.());
      if (Ne !== null) {
        if (Ne.kind === "priors") f("workshop_html_publish", "sidecar_refused"), m("artifact_publish", "workshop_sidecar_refused", {
          page_bytes: be
        }); else f("workshop_html_publish", "sidecar_contract"), m("artifact_publish", "workshop_sidecar_contract", {
          page_bytes: be
        });
        return H(Ne.err);
      }
    }
    if (n.files !== void 0 && n.files.length > 0) if (qe) {
      if (Qe.length > 0) return f("workshop_html_publish", "sidecar_refused"), m("artifact_publish", "workshop_sidecar_refused", {
        page_bytes: be
      }), {
        url: null,
        slug: null,
        version: null,
        err: "workshop pages cannot ship renderable or executable sidecar files \u2014 " + "each is a URL that bypasses the publish-time verifier: " + z8(Qe.join(", "))
      };
    } else {
      let Ne = await Or(n.files, pe, be);
      if (Ne !== null) return Ne;
    }
    if (qe) g("workshop_html_publish", {
      count: Rt
    });
  }
  let ze = qe && (n.template === void 0 || n.template === "plain") ? "workshop" : n.template ?? "plain";
  we.template = ze;
  let Ie = O, Ke = [], st = [];
  if (O !== void 0 && z !== void 0) {
    let {connectorNames: j, serverNames: pe} = z, X = H_o(O, j, pe, {
      hostServers: K
    });
    if (X.ok && K === void 0 && X.servers.some(xe => F6e(xe) !== void 0)) {
      let xe = ee(), ft = xe.accountEpoch, ct = await Bne({
        timeoutMs: Bo,
        ...n.signal && {
          signal: n.signal
        },
        credentials: n.credentials
      });
      if (!("err" in ct)) {
        hye({
          session: xe,
          epoch: ft,
          roster: ct,
          storageV5: void 0
        });
        let tt = w1n(ct, "mcp", S1n);
        if (n.noteHostServers?.(tt), !tt) X = H_o(O, j, pe, {
          hostServers: !1
        });
      } else f("artifact_publish", "host_roster_fetch_failed", {
        cause: c(ct.cause)
      });
    }
    if (!X.ok) {
      let xe = N(X.malformed, ke => ke.kind === "host_unavailable"), ft = N(X.malformed, ke => ke.kind === "unknown_tools"), ct = N(X.malformed, ke => ke.kind === "opaque_id" || ke.kind === "known_id" || ke.kind === "tool_name" || ke.kind === "connector_as_host" || ke.kind === "undeclarable_name"), tt = N(X.malformed, ke => ke.kind === "local_server_as_first_party");
      m("artifact_publish", xe > 0 ? "host_server_unavailable" : X.internal.length > 0 ? "internal_host_server_name" : tt > 0 ? "first_party_server_collision" : X.unresolved.length > 0 ? "unresolved_mcp_server" : ct > 0 ? "opaque_mcp_server_id" : ft > 0 ? "unknown_mcp_tool" : X.malformed.length > 0 ? "malformed_mcp_manifest" : "mcp_manifest_over_caps", {
        page_bytes: be,
        unresolved_count: X.unresolved.length,
        internal_count: X.internal.length,
        malformed_count: X.malformed.length - ct - xe - ft,
        opaque_id_count: ct,
        host_unavailable_count: xe,
        unknown_tools_count: ft,
        oversized_count: X.oversized.length,
        ...X.serverCount !== null && {
          server_count: X.serverCount
        }
      });
      let pt = gc(X.malformed);
      if (X.unresolved.length > 0) {
        let ke = xO(X.unresolved, 8, Xe => `"${Wf(Xe)}"`), Ht = j.filter($6e), en = xO(D(Ht.map(Xe => Xe.server)), 8, Xe => `"${Wf(Xe)}"`), pn = en.length === 0 ? "" : ` (connectors this session: ${en.join(", ")})`, tn = Ht.some(Xe => Vt(Xe.toolPrefix) !== null);
        pt.push(`unknown ${I(X.unresolved.length, "connector")}: ${ke.join(", ")} \u2014 ` + (tn ? "set `server` to the connector's exact display name" : "set `server` to the segment between `mcp__` and the next `__` of a tool name from this session (for `mcp__claude_ai_Slack_beta__search`, use `claude_ai_Slack_beta`, copied exactly), or to the connector's exact display name") + `${pn}. The control plane would accept this manifest, but the page would break at view time`);
      }
      if (X.internal.length > 0) {
        let ke = xO(D(X.internal), 8, Ht => `"${Wf(Ht)}"`);
        pt.push(`built-in ${I(X.internal.length, "server")} ${ke.join(", ")} ` + "\u2014 the Claude app's own servers, which it never exposes to " + "pages as host servers; declare only servers from the MCP configuration (host:<name> for the `mcp__<name>__<tool>` tools of a server you configured). The control plane would accept this manifest, but the page would break at view time");
      }
      for (let ke of X.oversized) pt.push(`${TMt(ke.server)} "${Wf(ke.server)}" declares ${ke.toolCount} tools, counted after any same-name entries merge (max ${P_o}) \u2014 trim the tools ` + "list; the control plane would reject it anyway");
      if (X.serverCount !== null) pt.push(`manifest declares ${X.serverCount} servers (max ${I_o}) \u2014 declare only the servers ` + "the page actually calls; the control plane would reject it anyway");
      return H(`mcp manifest rejected: ${pt.join("; ")}.`);
    }
    Ie = X.caps, Ke = X.warnings, st = X.servers;
    let Ne = [ e, ...(n.files ?? []).flatMap(xe => Sye.has(xe.contentType) ? [ gr(xe.content) ] : []) ], jt = X.servers.length > 0 ? D_o(Ne, X.servers, 64) : [], Ve = vTs(Ne, X.renamed).filter(([xe]) => !jt.includes(xe));
    if (Ve.length > 0) Ke = [ ...Ke, `the page source still holds ${I(Ve.length, "a server name", "server names")} this publish rewrote in the manifest, as ${I(Ve.length, "a quoted string", "quoted strings")} \u2014 ${xO(Ve, 8, ([xe, ft]) => `"${Wf(xe)}" (viewers resolve only "${Wf(ft)}")`).join(", ")} \u2014 so if the page passes ${Ve.length === 1 ? "it" : "them"} to callTool(\u2026) / watchTool(\u2026), those calls fail for every viewer; use the display ${I(Ve.length, "name")} there.` ];
  } else if (O !== void 0) {
    let j = ETs(O).length;
    if (j > 0) f("artifact_publish", "slug_without_pairs", {
      page_bytes: be,
      slug_count: j
    });
  }
  let et = Object.keys(Ie ?? {}), mt, kt = U6e(a.CLAUDE_ARTIFACT_HOST_GRANT);
  if (Ie !== void 0) {
    let j = $Er(Ie, kt);
    if (!j.ok) {
      m("artifact_publish", "host_grant_unreadable", {
        page_bytes: be,
        host_server_count: j.refused.length
      });
      let pe = xO(j.refused, 8, X => `"${Wf(X)}"`);
      return H(`mcp manifest rejected: this computer's local-server grant (${N_o}, set by the app that launched this session; not something to fix from here) could not be read, so ` + `no host: server can be declared from this session \u2014 ${pe.join(", ")}; declare only claude.ai connectors (set "server" to the connector's display name), or to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration).`);
    }
    if (j.dropped.length > 0) {
      f("artifact_publish", "host_grant_narrowed", {
        page_bytes: be,
        dropped_count: j.dropped.length
      }), Ie = j.caps, st = st.filter(X => j.servers.includes(X));
      let pe = j.dropped.length === 1 ? "it" : "them";
      mt = j.caps, Ke = [ ...Ke, `this computer did not grant the page these local tools, so they were left out of the manifest: ${Gs(j.dropped)} \u2014 the page's ` + `calls to ${pe} fail for every viewer; tell the user which local tools were left out` + (j.servers.length === 0 ? ', and that the page now has no connector access at all (no declared server remained, so this publish carries no "mcp" and any stored "mcp" declaration is replaced)' : "") + "." ];
    }
  }
  if (z !== void 0 && st.length > 0) {
    let j = [ e, ...(n.files ?? []).flatMap(X => Sye.has(X.contentType) ? [ gr(X.content) ] : []) ], pe = D_o(j, st, 64);
    if (pe.length > 0) Ke = [ ...Ke, `the page calls callTool/watchTool with ${I(pe.length, "a server name", "server names")} not in this manifest \u2014 ${xO(pe, 8, X => `"${Wf(X)}"`).join(", ")} \u2014 and ${RMt((mt ?? Ie)?.mcp) ? "under this dynamic declaration each viewer is asked to approve them at first use (a name the viewer has no connector for is refused)" : "those calls fail for every viewer"}; the manifest declares ${xO(st, 8, X => `"${Wf(X)}"`).join(", ")}.` ];
  }
  if (n.contract !== void 0 && n.contract !== "latest" && (!XY.test(n.contract) || n.contract === kct)) return m("artifact_publish", "invalid_contract", {
    page_bytes: be
  }), H(`invalid contract ${_(n.contract)} \u2014 pass 'latest' ` + "or a published version like 0.1.0.");
  let Lt = n.contract === "latest", he = n.contract !== void 0 && n.contract !== "latest" ? n.contract : null, Re = n.contract !== void 0, lt = b && !Re ? n.storedPin : null, Ue;
  if (b && !Re && lt === void 0) {
    let j = await Kx(b, void 0, n.credentials);
    if (j !== null && "err" in j && n.onPinReadError !== "assume_none" && ar(j)) {
      let pe = xn(j);
      if (await J(or, n.signal), !n.signal?.aborted) j = await Kx(b, n.signal, n.credentials), 
      f("artifact_publish", "pin_readback_retried", {
        page_bytes: be,
        ...pe,
        recovered: !(j !== null && "err" in j)
      });
    }
    if (j !== null && "err" in j) if (n.onPinReadError === "assume_none") f("artifact_publish", "pin_readback_assumed_none", {
      page_bytes: be
    }), lt = null; else return m("artifact_publish", "pin_readback_failed", {
      page_bytes: be,
      ...xn(j)
    }), H(`couldn't read the artifact's stored contract pin (${j.err}) \u2014 ` + "a republish preserves the stored pin, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics)."); else lt = j === null ? null : LN(j.contract), 
    Ue = j?.capabilities ?? {};
  }
  let Ye = LN(lt);
  if (b && Ue === void 0 && Object.keys(O ?? {}).length > 0 && n.composedPrReview !== !0) {
    let j = await Kx(b, void 0, n.credentials);
    if (j !== null && "err" in j && n.contract === void 0 && ar(j)) {
      if (await J(or, n.signal), !n.signal?.aborted) j = await Kx(b, void 0, n.credentials);
    }
    if (j !== null && "err" in j) {
      if (n.contract === void 0) return m("artifact_publish", "capability_readback_failed", {
        page_bytes: be,
        ...xn(j)
      }), H(`couldn't read the artifact's stored capability declaration (${j.err}) \u2014 ` + "a republish that declares capabilities must not silently revoke stored ones, so this publish cannot proceed without it. This is usually transient: retry. If the read keeps failing and you intend to move the artifact to the current contract anyway, pass contract: 'latest' (this changes the page's runtime semantics, and the capabilities you send then replace the stored ones).");
      f("artifact_publish", "retrofit_guard_skipped");
    } else Ue = j?.capabilities ?? {};
  }
  if (O === void 0 && b && n.composedPrReview !== !0) {
    let j = await dn({
      slug: b,
      hostGrant: kt,
      storedCaps: Ue,
      signal: n.signal,
      credentials: n.credentials,
      pageBytes: be,
      lane: "page"
    });
    if (!j.ok) return H(j.err);
    Ue = j.storedCaps;
  }
  let Tt = j => j === NN ? xR : j, Yt = Object.keys(Ue ?? {}).map(Tt), Qt = et.map(Tt), ot = Object.entries(Ue ?? {}).filter(([j]) => !Qt.includes(Tt(j))), Pt = _1n(Ue?.db) ?? [], bt = Ie?.db, Oe = Pt.length > 0 && (bt === !0 || uK(bt) && !Object.hasOwn(bt, "rules")), Dt = M_o(Pt), ut = bTs(Ue?.user) ?? [], Bt = Ie?.user, Ct = ut.length > 0 && (Bt === !0 || uK(Bt) && !Object.hasOwn(Bt, "scopes")), ye = O_o(ut), yt = () => {
    let j = _(ut), pe = Wg(j, {
      max: 200
    });
    return ye && pe === j ? pe : "";
  };
  if (n.createPath === void 0 && n.composedPrReview !== !0 && ot.length > 0 && Qt.some(j => !Yt.includes(j))) {
    m("artifact_publish", "capability_retrofit_refused");
    let j = xO(ot, 8, ([xe]) => Wg(xe)), pe = _({
      ...Object.fromEntries(ot),
      ...Ie,
      ...Oe && {
        db: Ue?.db
      },
      ...Ct && {
        user: Ue?.user
      }
    }), X = Wg(pe, {
      max: 600
    }), Ne = Oe || ot.some(([xe]) => xe === "db"), jt = Ct || ot.some(([xe]) => xe === "user"), Ve = X === pe && !/[<>]/.test(qO(pe)) && _l(pe) === pe && (!Ne || wTs(Ue?.db)) && (!jt || STs(Ue?.user)) ? X : "";
    return H(`your capabilities declaration omits the stored ${I(ot.length, "capability", "capabilities")} ${j.join(", ")} while adding new ones \u2014 a sent declaration replaces the stored one, so this publish would have silently revoked ${ot.length === 1 ? "it" : "them"}. To keep ${ot.length === 1 ? "it" : "them"}, republish declaring the union${Ve !== "" ? `: ${Ve}` : " (republish with capabilities omitted to read the stored declaration back, then resend it plus your additions)"}. To revoke on purpose, publish that union first, then republish without the revoked names (a declaration that adds no new name goes out as sent); capabilities: {} clears everything.`);
  }
  if (n.createPath === void 0 && n.composedPrReview !== !0 && Oe) {
    m("artifact_publish", "db_rules_reset_refused");
    let j = _(Pt), pe = Wg(j, {
      max: 600
    }), X = Dt && pe === j ? pe : "", Ne = Ct ? ` The sent user block likewise omits its stored scopes${yt() !== "" ? ` (${yt()})` : ""}: resend user with them as well, or user: {"scopes": []} to drop them.` : "";
    return H(`your capabilities declaration re-sends db without its rules while the artifact stores ${Pt.length} ${I(Pt.length, "access rule")}${X !== "" ? `: ${X}` : ' (not listed here; read the artifact with action "read" to see them)'} \u2014 ` + `a sent db block replaces the stored one, rules included, so this publish would have reset them to the defaults (anyone who can open the artifact can read its shared data, and anyone with more than view-only access can write it). To keep them, ${X !== "" ? "resend db with those rules" : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend db with its rules"}; to reset them on purpose, send db: {"rules": []}.` + Ne);
  }
  if (n.createPath === void 0 && n.composedPrReview !== !0 && Ct) {
    m("artifact_publish", "user_scopes_reset_refused");
    let j = yt();
    return H(`your capabilities declaration re-sends user without its scopes while the artifact stores ${ut.length} ${I(ut.length, "scope")}${j !== "" ? `: ${j}` : ""} \u2014 ` + `a sent user block replaces the stored one, scopes included, so this publish would have dropped ${ut.length === 1 ? "it" : "them"} (for profile, the page would no longer receive the viewer's name and avatar). To keep ${ut.length === 1 ? "it" : "them"}, ${j !== "" ? `resend user with scopes: ${j}` : "publish with capabilities omitted (the stored declaration stays as it is), or read it back and resend user with its scopes"}; to drop ${ut.length === 1 ? "it" : "them"} on purpose, send user: {"scopes": []}.`);
  }
  let $t = await Ko({
    capabilities: Ie,
    echoPin: Ye,
    explicitPin: he,
    upgrade: Lt,
    pageBytes: be,
    ...n.createPath !== void 0 && {
      latestFetchRemedy: {
        retry: "nothing was created; retry.",
        refused: `Nothing was created; tell the user the page has to be created from ${En}.`
      }
    },
    credentials: n.credentials
  });
  if ("errMsg" in $t) return H($t.errMsg);
  let wt = $t.fields, Ot = {
    capNames: Object.keys(Ie ?? {}).map(Tt),
    hostDecl: qo(Ie),
    latestContract: "contract" in wt && he === null && Ye === null
  }, De, E = j => gl(ps(j, F ? b : void 0, n.credentials, n.signal), [ ...Ke, ...We ]).then(pe => {
    if (pe.err === null && Me !== void 0) f("artifact_publish", Me === "repaired" ? "nested_page_repaired" : "nested_repair_partial");
    if (pe.err === null && Le) f("artifact_publish", "hoisted_comment_dropped");
    let X = pe.err === null ? [ ...Qe, ...pe.refusedClassSidecarTypes ?? [] ] : [];
    if (pe.err !== null) return De !== void 0 && pe.strandedSlug === void 0 && !pe.conflict && !pe.gone && ze !== "pr_review" ? {
      ...pe,
      reservedSlug: De
    } : pe;
    return {
      ...fl(pe, n.files ?? []),
      ...X.length > 0 && {
        refusedClassSidecarTypes: X
      },
      ...mt !== void 0 && {
        sentCapabilities: mt
      }
    };
  });
  if (n.createPath !== void 0 && sAe(te)) return m("artifact_publish", "review_single_file"), 
  H("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
  let re = n.files ?? [], G = n.removeFiles ?? [];
  if (re.length > 0 || V.length > 0 || G.length > 0 || n.liveFiles !== void 0) {
    if (sAe(te)) return m("artifact_publish", "review_single_file"), H("artifact-pr-review pages are single-file: supporting files are not allowed alongside a review page (nothing was published)");
    if (!DM()) return m("artifact_publish", "multifile_flag_off", {
      n_files: re.length + V.length,
      n_removed: G.length
    }), H(G.length > 0 ? "Supporting files can't be published or removed right now, so nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting `files`) would update the page but can't remove a file." : "Supporting files can't be published right now, so nothing was published. Publish the page as a single file instead: inline what it needs and omit `files`.");
    if (V.length > 0 && !n0e()) return m("artifact_publish", "copy_from_flag_off", {
      n_copied: V.length
    }), H(Nr);
    if (n.createPath !== void 0) return E(ir(we, j => zi(je, j, wt, void 0, !1, {
      t0: s,
      pageBytes: be,
      lane: "inline",
      isRedeploy: Q,
      hasCaps: B,
      template: ze,
      ...Be && {
        workshopInfo: Be
      },
      forced: !1,
      ...Ye !== null && {
        echoedPin: Ye
      },
      ...n.liveFilesGate === !0 && {
        liveFilesOn: !0
      },
      sent: Ot
    }, n.ownPublishes, n.credentials, qe, n.createPath, n.onRetry, n.signal, re)));
    return E(ir(we, (j, pe) => Fr(je, re, V, G, j, wt, {
      workshopSurface: qe,
      baseVersion: pe ?? Ae,
      force: fe,
      ...n.liveFiles !== void 0 && {
        liveFiles: n.liveFiles
      },
      ...n.copiedCrossOrgOk === !0 && {
        copiedCrossOrgOk: !0
      },
      ...De !== void 0 && {
        reservedSlug: De
      },
      ownPublishes: n.ownPublishes,
      tele: {
        t0: s,
        pageBytes: be,
        lane: "inline",
        isRedeploy: Q,
        hasCaps: B,
        template: ze,
        ...Be && {
          workshopInfo: Be
        },
        forced: fe,
        ...Ye !== null && {
          echoedPin: Ye
        },
        ...n.liveFilesGate === !0 && {
          liveFilesOn: !0
        },
        sent: Ot
      },
      onRetry: n.onRetry,
      onReserved: X => {
        De = X;
      },
      signal: n.signal,
      credentials: n.credentials,
      relayOnly: r
    })));
  }
  let Se = b === void 0 && n.createPath === void 0 && DM() ? await Dl(n.credentials, n.signal, s, r) : void 0;
  if (De = Se, n.signal?.aborted) return H("publish cancelled \u2014 nothing was published.");
  return E(ir(we, j => zi(je, j, wt, Ae, fe, {
    t0: s,
    pageBytes: be,
    lane: "inline",
    isRedeploy: Q,
    hasCaps: B,
    template: ze,
    ...Be && {
      workshopInfo: Be
    },
    forced: fe,
    ...Ye !== null && {
      echoedPin: Ye
    },
    ...n.liveFilesGate === !0 && {
      liveFilesOn: !0
    },
    sent: Ot
  }, n.ownPublishes, n.credentials, qe, n.createPath, n.onRetry, n.signal, void 0, Se, r)));
}

async function Dl(e, n, r, s) {
  if (n?.aborted) return;
  try {
    let h = {
      refreshOAuth: !0,
      headers: eu(),
      timeout: 3e4,
      credentials: e,
      relayOnCredentialRefusal: !0
    }, b;
    try {
      b = s !== void 0 ? await $r("/api/frame/deploy/prepare", YEt(), h, s, n) : await vc.post("/api/frame/deploy/prepare", YEt(), h);
    } catch (y) {
      if (y instanceof it) return;
      throw y;
    }
    if (b.ok && b.status === 200 && typeof b.data?.slug === "string" && nr.test(b.data.slug)) return b.data.slug;
    if (!b.ok || b.status !== 403 && b.status !== 404) f("artifact_publish", "reserve_unavailable", {
      reserve_status: b.ok ? b.status : 0
    });
  } catch (h) {
    f("artifact_publish", "reserve_unavailable", {
      reserve_status: 0,
      ...rQ(h, r)
    });
  }
  return;
}

async function ir(e, n) {
  let r = await n(e);
  if (r.err === null || r.thumbnailRejected === void 0 || r.strandedSlug !== void 0 || r.liveVersion !== void 0) return r;
  if (e.thumbnail === void 0 && e.thumbnailDark === void 0) return m("artifact_publish", "thumbnail_rejected"), 
  r;
  f("artifact_publish", "thumbnail_rejected");
  let {thumbnail: s, thumbnailDark: h, ...b} = e, y = r.created === void 0 ? await n(b) : await n({
    ...b,
    slug: r.created.slug
  }, r.created.version);
  return y.err === null ? {
    ...y,
    warnings: [ ...y.warnings ?? [], `The custom thumbnail was not accepted by the server (${r.thumbnailRejected}); published with the automatic screenshot instead.` ]
  } : y;
}

function OXr() {
  if (kp() === "claude-vscode") return "epitaxy_pane";
  if (hu()) return "desktop_pane";
  return "terminal_link";
}

async function wsr(e, n) {
  try {
    let r = await vc.post("/api/frame/track", {
      event_name: e,
      ...n.slug && {
        slug: n.slug
      },
      ...n.via && {
        via: n.via
      },
      ...n.mode && {
        mode: n.mode
      }
    }, {
      refreshOAuth: !0,
      headers: eu(),
      timeout: 5e3,
      credentials: n.credentials
    });
    if (!r.ok) t(`[artifact] /track skipped: ${r.reason}`); else if (r.status !== 204) t(`[artifact] /track ${r.status}: ${KE(r.data)}`);
  } catch (r) {
    t(`[artifact] /track failed: ${r instanceof Error ? r.message : String(r)}`);
  }
}

var Bl = [ "frame_daily_publish_cap_reached", "frame_daily_push_cap_reached" ], jl = {
  frame_daily_publish_cap_reached: "daily_new",
  frame_daily_push_cap_reached: "daily_pushes"
}, Hl = p(() => u({
  error: U(Bl),
  message: o().catch("")
})), zl = {
  daily_new: "daily new-artifact limit for your plan reached \u2014 resets at UTC midnight",
  daily_pushes: "daily publish limit for your plan reached \u2014 resets at UTC midnight"
}, vsr = "publish 429: ", xs = "x-frame-push-remaining";

function Es(e) {
  let n = typeof e === "string" ? e.trim() : "";
  return /^\d{1,9}$/.test(n) ? Number(n) : void 0;
}

function GEt(e = Date.now()) {
  let n = new Date(e);
  return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1) / 1e3;
}

function As(e) {
  let n = typeof e === "string" ? Date.parse(e) : Number.NaN;
  return GEt(Number.isFinite(n) ? n : Date.now());
}

function Jt(e) {
  let n = Hl().safeParse(e);
  if (!n.success) return;
  let r = jl[n.data.error], s = _U(n.data.message, 200), h = s !== "" ? s : zl[r];
  return {
    capType: r,
    message: `${vsr}${h}`
  };
}

var ji = 3, Ul = 5e3, Cr = 2e4, Vl = 3e4;

function Rs(e) {
  let n = Ag(e) ?? 2e3;
  return n <= Vl ? n : void 0;
}

function ks(e) {
  return Math.min(Ag(e) ?? Gl, Cr);
}

function Ts(e, n) {
  let r = Math.round(nb({
    attempt: e - 1,
    baseMs: Ul,
    jitter: {
      kind: "proportional",
      ratio: .25
    }
  })), s = Ag(n) ?? 0;
  return Math.min(Math.max(s, r), Cr);
}

class cn extends Error {
  startedAtMs;
  constructor(e, n, r) {
    super(e, r);
    this.startedAtMs = n;
  }
}

class Wt extends cn {}

class Ut extends cn {
  seen;
  resent;
  constructor(e, n, r, s, h) {
    super(e, n, r);
    this.seen = s;
    this.resent = h;
  }
}

function Wl(e) {
  return e.seen !== void 0 && dMs(e.seen);
}

function Ps(e) {
  let n = 0, r = 0;
  return s => {
    if (n += s.json_bytes, r += s.wire_bytes, e.json_bytes = n, e.wire_bytes = r, e.body_gzip = e.body_gzip === !0 || s.body_gzip, 
    s.gzip_skip !== void 0) e.gzip_skip = c(s.gzip_skip);
    if (s.gzip_fallback_status !== void 0) e.gzip_fallback_status ??= s.gzip_fallback_status;
  };
}

function Cs(e) {
  return e.attemptId === void 0 ? "/api/frame/deploy/direct" : `/api/frame/deploy/direct?attempt_id=${e.attemptId}${e.resend ? "&resend=1" : ""}`;
}

async function Yl(e, n, r) {
  let s = {
    ...rQ(n.cause, n.startedAtMs),
    ...n.seen
  };
  t(`[artifact] publish request died before its whole body left this machine (socket took ${s.bytes_flushed} of ${s.body_bytes} bytes) \u2014 re-sending once on a fresh connection`);
  let h = 0;
  try {
    let b = await e();
    return h = b.ok ? b.status : 0, b;
  } finally {
    f("artifact_publish", "deploy_resent", {
      ...r,
      ...s,
      deploy_final_status: h
    });
  }
}

var $s = 2, Gl = 2e3;

function Os(e) {
  return e.ok && e.fromFrame && e.status === 409 && gt(e.data) === "publish_settling";
}

function ql(e) {
  return typeof e === "object" && e !== null && "replayed" in e && e.replayed === !0;
}

async function Kl(e, n, r, s) {
  let h = {
    ...rQ(n.cause, n.startedAtMs),
    ...n instanceof Ut && n.seen,
    leg: c(n instanceof Wt ? "relay" : "direct")
  };
  t("[artifact] publish request ended without an answer \u2014 re-sending it once, marked, so a publish that already landed is answered rather than repeated");
  let b = 0, y, w = 0, S = !1, x = !1;
  try {
    let P = await e();
    y = c(P.route);
    while (Os(P) && w < $s) {
      let R = ks(P.response?.headers?.["retry-after"]);
      if (t(`[artifact] the first attempt landed and its content is still being stored \u2014 re-sending in ${R}ms`), 
      await J(R, s), s?.aborted) break;
      w += 1, P = await e(), y = c(P.route);
    }
    if (b = P.ok ? P.status : 0, P.route === "direct" && qAn(P) && n instanceof Wt) throw x = !0, 
    n;
    return S = P.ok && P.status >= 200 && P.status < 300 && ql(P.data), P;
  } finally {
    f("artifact_publish", "deploy_resent", {
      ...r,
      ...h,
      deploy_final_status: b,
      ...y !== void 0 && {
        resend_route: y
      },
      settle_resends: w,
      replayed: S,
      ...x && {
        resend_refused: !0
      },
      ...s?.aborted && {
        cancelled: !0
      }
    });
  }
}

class Ns extends cn {}

async function Sn(e) {
  let n = performance.now();
  try {
    return await e();
  } catch (r) {
    if (r instanceof it) throw r;
    throw new Ns(r instanceof Error ? r.message : String(r), n, {
      cause: r
    });
  }
}

function fr(e, n) {
  return e instanceof cn ? {
    ...rQ(e.cause, e.startedAtMs),
    ...e instanceof Ut && e.resent && {
      resent: !0
    }
  } : rQ(e, n);
}

async function pr(e, n, r, s, h, b = {}, y = void 0, w) {
  let S = {
    refreshOAuth: !0,
    headers: eu(),
    streamUpload: {
      tailFloorMs: Hi,
      onSettled: P => {
        b.seen = P, s(P);
      }
    },
    gzipBody: {
      tailFloorMs: Hi(void 0),
      onEncoding: h
    },
    ...b.freshConnection && {
      freshConnection: !0
    },
    relayOnCredentialRefusal: !0,
    maxBodyLength: 2 * Df,
    maxContentLength: fs,
    relayProbe: Oo,
    credentials: r
  }, x = y !== void 0 ? await $r(e, n, S, y, w) : await vc.post(e, n, S);
  return s(void 0), x;
}

function Xl(e) {
  if (e.slug !== void 0 || e.baseVersion !== void 0) return "names an existing artifact";
  if (e.force === !0) return "sets force";
  if (e.capabilities !== void 0) return "declares capabilities";
  if (e.contract !== void 0) return "sets a contract";
  if ((e.removeFiles?.length ?? 0) > 0) return "removes files";
  if (e.createPath !== void 0 || e.liveFiles !== void 0 || (e.files ?? []).some(n => n.live !== void 0 || n.reseed === !0)) return "makes or changes a live file";
  return;
}

function Jl(e) {
  return Jr() && (YAn("POST", e, "only") !== "relay" || !ezn());
}

function Is(e) {
  return m("artifact_publish", "relay_only_unsent", e), {
    ...H("Nothing was published: a publish made without asking must go through the cloud session's gateway, which could not carry it. Publishing it again now goes through the usual permission check, which may need a person's approval."),
    notCarried: !0
  };
}

function Fs() {
  return H("publish cancelled \u2014 nothing was published.");
}

function Ms(e) {
  return e instanceof Error && e.cause instanceof ht;
}

class it extends Error {
  constructor(e = "this request never reached the artifact server: the session gateway did not carry it") {
    super(e);
    this.name = "RelayOnlyUnsentError";
  }
}

class ht extends it {
  constructor() {
    super("this request was not sent again: the publish was cancelled while the session gateway was busy");
    this.name = "RelayOnlyCancelledError";
  }
}

var Esr = 5e3;

async function $r(e, n, r, s, h) {
  for (let b = !1; ;b = !0) {
    if (Jl(e)) throw new it;
    s.count += 1;
    let y = await vc.postRelayOnly(e, n, r);
    if (zVe(y)) throw new it;
    if (!y.ok || y.gatewayRetryAfterMs === void 0) return y;
    if (s.count -= 1, h?.aborted) throw new ht;
    if (b) throw f("artifact_publish", "relay_only_busy"), new it;
    if (await J(Math.min(y.gatewayRetryAfterMs, Esr), h), h?.aborted) throw new ht;
  }
}

function Hi(e) {
  return (Msr(e) + 30) * 1e3;
}

async function Ls(e, n, r, s, h = !1, b = !1, y = !1) {
  let w = $o(), S = !1, x = async (C = !1) => {
    let V = {
      attemptId: w,
      ...C && {
        freshConnection: C
      },
      ...S && {
        resend: !0
      }
    }, Q = performance.now();
    try {
      let B = await e(V);
      return s.wire = Gne(B), B;
    } catch (B) {
      if (B instanceof it) {
        if (P === 1 && y) throw B;
        throw new Ut(Et(B instanceof ht ? "the publish was cancelled before a later send of it went out" : "a later send of this publish could not go through the cloud session's gateway"), Q, {
          cause: B
        }, V.seen, C);
      }
      s.wire = ode(B);
      let ie = KE(B instanceof Error ? B.message : String(B));
      throw FA(B) ? new Wt(Et(`relay request failed: ${ie}`), Q, {
        cause: B
      }) : new Ut(Et(`deploy request failed: ${ie}`), Q, {
        cause: B
      }, V.seen, C);
    }
  }, P = 1, R;
  try {
    R = await x();
  } catch (C) {
    if (r?.aborted) throw C;
    if (b && (C instanceof Wt || C instanceof Ut && Aee(C.cause))) P += 1, S = !0, R = await Kl(() => x(!0), C, s, r); else if (C instanceof Ut && Aee(C.cause) && Wl(C)) P += 1, 
    R = await Yl(() => x(!0), C, s); else throw C;
  }
  let O = !1, z, K = C => {
    z ??= C.status === 429 ? 429 : 503, t(`[artifact] /deploy/direct ${C.status} \u2014 retrying in ${C.delayMs}ms (attempt ${C.attempt} of ${C.maxAttempts})`), 
    n?.(C);
  }, F = async C => {
    if (await J(C, r), r?.aborted) return t("[artifact] /deploy/direct retry cancelled by user"), 
    !1;
    return P += 1, O = !0, R = await x(), O = !1, !0;
  }, Z = R.ok && R.fromFrame && R.status === 503 && gt(R.data) === "render_busy";
  try {
    if (R.ok && R.fromFrame && R.status === 429) {
      if (Jt(R.data) !== void 0) return t("[artifact] /deploy/direct 429 is a plan cap \u2014 not retrying"), 
      R;
      let B = Rs(R.response?.headers?.["retry-after"]);
      if (B === void 0) return R;
      return K({
        status: 429,
        attempt: 2,
        maxAttempts: 2,
        delayMs: B
      }), await F(B), R;
    }
    if (Z && R.ok) {
      let B = Math.min(Ag(R.response?.headers?.["retry-after"]) ?? 1e3, Cr);
      return K({
        status: 503,
        attempt: 2,
        maxAttempts: 2,
        delayMs: B
      }), await F(B), R;
    }
    let C = 2, V = !1;
    while (R.ok && R.fromFrame && R.status === 503 && !(h && Cn(R.status, R.data)) && C <= ji) {
      let B = Ts(C, R.response?.headers?.["retry-after"]);
      if (K({
        status: 503,
        attempt: C,
        maxAttempts: ji,
        delayMs: B
      }), b && !S && !Cn(R.status, R.data)) S = !0, V = !0;
      if (!await F(B)) break;
      C += 1;
    }
    let Q = 0;
    while (V && Os(R) && Q < $s) {
      let B = ks(R.response?.headers?.["retry-after"]);
      if (t(`[artifact] an earlier attempt landed and its content is still being stored \u2014 re-sending in ${B}ms`), 
      !await F(B)) break;
      Q += 1;
    }
    return R;
  } finally {
    if (z !== void 0) f("artifact_publish", z === 503 ? "deploy_503_retried" : "deploy_429_retried", {
      ...s,
      deploy_attempts: P,
      deploy_final_status: O || !R.ok ? 0 : R.status,
      ...r?.aborted && {
        cancelled: !0
      },
      ...Z && {
        render_busy: !0
      }
    }), n?.({
      settled: !0
    });
  }
}

function Tn(e, n) {
  if (!(n.ok && n.fromFrame && n.status === 400)) return;
  let r = f1(n.data), s = j$e.test(r);
  if (Rr(e) && s && /["']deadline["']/.test(r)) return "deadline";
  if (lSe(e.requestId).request_id !== void 0 && s && /["']request_id["']/.test(r)) return "request_id";
  if (e.icon && (s && /["']icon["']/.test(r) || /^icon (?:must be|and tint can only)\b/.test(r.trimStart()))) return "icon";
  return;
}

function Ds(e, n) {
  switch (n) {
   case "deadline":
    return {
      ...e,
      deadline: void 0
    };

   case "icon":
    return {
      ...e,
      icon: void 0
    };

   case "request_id":
    return {
      ...e,
      requestId: void 0
    };
  }
}

function hr() {
  return Et("the server answered for a different artifact than the one targeted, so its answer was not adopted");
}

function an() {
  return Et("deploy returned an incomplete or malformed response");
}

async function zi(e, n, r, s, h, b, y, w, S, x, P, R, O, z, K = void 0) {
  let F = {
    page_bytes: b.pageBytes,
    lane: c(b.lane),
    forced: b.forced,
    is_redeploy: b.isRedeploy,
    has_base_version: s !== void 0,
    ...z !== void 0 && {
      reserved: !0
    },
    template: c(b.template),
    ...Bs(n),
    ...O !== void 0 && O.length > 0 && {
      n_files: O.length
    }
  }, Z;
  if (x !== void 0 && O !== void 0 && O.length > 0) {
    let fe = Nn(e, O, []);
    if (fe !== null) return m("artifact_publish", fe.kind, F), H(fe.msg);
    let le = Object.create(null);
    le["index.html"] = {
      content: e,
      contentType: "text/html",
      live: !0
    };
    let Ae = mr - It(e);
    for (let we of O) {
      let Je = on(we);
      if (Ae -= It(Je), Ae < 0) return m("artifact_publish", "too_large", F), H("file too large");
      le[we.path] = {
        content: Je,
        contentType: we.contentType,
        ...we.live === !0 && {
          live: !0
        }
      };
    }
    Z = le;
  }
  let C = null, V = "none", Q = !n.slug, B, ie = Ps(F);
  try {
    let fe = h, le = s, Ae = !1, we = z !== void 0 ? {
      ...n,
      slug: z
    } : n;
    t(`[artifact] publish \u2192 ${x ?? "/api/frame/deploy/direct"}${Z !== void 0 ? ` (files: ${Object.keys(Z).length})` : ""}`);
    let Je = !0, Fe = () => {
      let he = Je;
      return Je = !1, Ls(Re => pr(x ?? Cs(Re), {
        ...ns(we),
        ...YEt(),
        ...Isr(),
        ...r,
        ...x === void 0 && fe && {
          force: !0
        },
        ...x === void 0 && le && {
          baseVersion: le
        },
        ...x === void 0 && Ae && !le && we.slug && {
          expectUnpublished: !0
        },
        ...Z !== void 0 ? {
          files: Z
        } : {
          content: e
        }
      }, w, lt => B = lt, ie, Re, K, R), P, R, F, !0, x === void 0 && we.slug !== void 0, he);
    }, je = {
      deadline: !1,
      icon: !1,
      request_id: !1
    }, be = async () => {
      let he = await Fe();
      for (let Re = Tn(we, he); Re !== void 0; Re = Tn(we, he)) f("artifact_publish", `${Re}_rejected`, F), 
      t(`[artifact] ${Re} refused upstream \u2014 retrying without it`), we = Ds(we, Re), 
      je[Re] = !0, he = await Fe();
      return he;
    }, te = await be();
    if (fe && te.ok && te.fromFrame && te.status === 400) {
      let he = f1(te.data);
      if (j$e.test(he) && (/\bforce\b/.test(he) || le !== void 0 && /\bbaseVersion\b/.test(he))) f("artifact_publish", "force_field_rejected", F), 
      t("[artifact] CP rejected force/baseVersion as unknown \u2014 retrying without them"), 
      fe = !1, le = void 0, te = await be();
    }
    if (fe && le && te.ok && te.fromFrame && te.status === 400 && /force and baseVersion are mutually exclusive/.test(f1(te.data))) f("artifact_publish", "exclusivity_retry", F), 
    t("[artifact] pre-relaxation CP rejected force+baseVersion \u2014 retrying without the precondition"), 
    le = void 0, te = await be();
    let At = he => he.reason === "no-auth" ? ph(he.detail) : `publish unavailable: ${he.reason}`;
    if (!te.ok) return m("artifact_publish", te.reason, F), H(At(te));
    if (C = te.fromFrame ? Cn(te.status, te.data) : null, C && !Q && C.slug !== n.slug) return m("artifact_publish", "deploy_slug_mismatch", F), 
    H(hr());
    if (C && C.kind === void 0 && x === void 0 && !R?.aborted) {
      let he = Ts(2, te.response?.headers?.["retry-after"]);
      t(`[artifact] /deploy/direct 503 after commit (${C.slug}) \u2014 retrying against it in ${he}ms`), 
      P?.({
        status: 503,
        attempt: 2,
        maxAttempts: 2,
        delayMs: he
      });
      try {
        if (await J(he, R), !R?.aborted) {
          if (Q) we = {
            ...we,
            slug: C.slug
          }, Ae = C.live === void 0, fe = !1;
          if (C.live !== void 0) le = C.live;
          V = "unknown", Je = !0;
          try {
            te = await be();
          } catch (Re) {
            if (!(Re instanceof it)) throw Re;
            return V = Re instanceof ht ? "cancelled" : "unsent", xt(H(V === "cancelled" ? "publish cancelled" : "The publish failed with a server error (503)"), C, Q, V);
          }
          V = "answered";
        }
      } finally {
        f("artifact_publish", "deploy_stranded_retried", {
          ...F,
          fresh_publish: Q,
          deploy_final_status: V === "answered" && te.ok ? te.status : 0,
          ...R?.aborted && {
            cancelled: !0
          }
        }), P?.({
          settled: !0
        });
      }
      if (!te.ok) return m("artifact_publish", te.reason, F), xt(H(At(te)), C, Q, V);
    }
    if (!te.fromFrame) return m("artifact_publish", "relay_error", {
      ...F,
      deploy_status: te.status
    }), xt(H(wr(te.status)), C, Q, V);
    if (((le ?? s) || Ae || RB()) && te.status === 409) {
      let he = qs(te.data);
      if (he) return m("artifact_publish", "conflict", F), xt({
        ...H(Ws(he)),
        conflict: !0,
        conflictDetail: he
      }, C, Q, V);
    }
    if (x !== void 0 && te.status === 404) return m("artifact_publish", "create_not_enabled", {
      ...F,
      deploy_status: 404
    }), H("create endpoint not available (404) \u2014 nothing was created");
    if (te.status === 400 && Er(f1(te.data), {
      ldx: !1
    })) return m("artifact_publish", "ldx_unsupported", F), xt(H(xr(f1(te.data))), C, Q, V);
    if (te.status < 200 || te.status >= 300) {
      let he = Sr(te.status, te.data, b.isRedeploy, b.echoedPin !== void 0 ? {
        pin: b.echoedPin,
        declaredCaps: b.hasCaps
      } : void 0, b.liveFilesOn === !0, b.sent, {
        retryAfter: te.response?.headers?.["retry-after"],
        ...b.template !== "pr_review" && {
          reservedSlug: z
        },
        created: Q && C !== null
      });
      if (he.code !== "thumbnail_rejected") m("artifact_publish", he.code ?? "deploy_failed", {
        ...F,
        deploy_status: te.status,
        ...he.extra
      });
      let Re = he.code === "path_is_live" ? na(te.data) : void 0;
      return xt({
        ...yr(he, `deploy ${te.status}: ${KE(te.data)}`),
        ...Re !== void 0 && {
          refusedLivePath: Re
        }
      }, C, Q, V);
    }
    let Ze = br().safeParse(te.data);
    if (!Ze.success) return m("artifact_publish", "deploy_incomplete", F), xt(H(an()), C, Q, V);
    let {slug: Me, version: Le, read: We, shared: qe, kind: Rt} = Ze.data;
    if (we.slug && Me !== we.slug) return m("artifact_publish", "deploy_slug_mismatch", F), 
    xt(H(hr()), C, Q, V);
    if (x !== void 0 && (Ni == null || Rt !== Ni.LIVE_DOC_KIND)) return m("artifact_publish", "deploy_incomplete", F), 
    H(an());
    let Be = hs(te.data), Qe = Be?.map(he => he.path), ze = x === void 0 ? new Set : new Set([ "index.html", ...Object.entries(Z ?? {}).filter(([, he]) => he.live === !0).map(([he]) => he) ]), Ie = (Qe ?? []).filter(he => ze.has(he)), Ke = [ ...cr(te.data), ...gs(Ie), ...ms(Qe, new Set([ "index.html", ...Object.keys(Z ?? {}) ])) ].slice(0, $n), st = dr(te.data), et = Es(te.response?.headers?.[xs]), mt = As(te.response?.headers?.date), kt = js(Ze.data, fe ? void 0 : le, new Set([ "index.html", ...Object.keys(Z ?? {}), ...Qe ?? [] ]));
    UEt(y, Me, Le, {
      merged: _r(te.data)
    });
    let Lt = Vs(Ze.data);
    return g("artifact_publish", {
      ...F,
      e2e_ms: Math.round(performance.now() - b.t0),
      is_redeploy: b.isRedeploy,
      has_caps: b.hasCaps,
      push_remaining_seen: et !== void 0,
      ...Hs(kt.mergedOver),
      read_back_echoed: Lt.readBackEchoed === !0
    }), {
      url: Lm(Me),
      slug: Me,
      version: Le,
      err: null,
      ...et !== void 0 && {
        pushRemaining: et,
        pushResetAt: mt
      },
      ...S && {
        workshopSurface: !0
      },
      ...b.workshopInfo && {
        workshop: b.workshopInfo
      },
      ...We !== void 0 && {
        read: We
      },
      ...qe !== void 0 && {
        shared: qe
      },
      ...zs(Ze.data, Rr(we)),
      ...kt,
      ...je.deadline && {
        deadlineDropped: !0
      },
      ...je.icon && {
        iconDropped: !0
      },
      ...Us(Ze.data, r, x !== void 0),
      ...Lt,
      ...Rt !== void 0 && {
        kind: Rt
      },
      ...Ke.length > 0 && {
        warnings: Ke
      },
      ...st !== void 0 && {
        embeds: st
      },
      ...Qe !== void 0 && {
        livePaths: Qe
      },
      ...Be !== void 0 && {
        liveDocs: Be
      },
      ...Ie.length > 0 && {
        bornLive: Ie
      }
    };
  } catch (fe) {
    if (fe instanceof it) return fe instanceof ht ? Fs() : Is(F);
    if (!Ms(fe)) m("artifact_publish", fe instanceof Wt ? "relay_request_error" : "request_error", {
      ...F,
      ...fr(fe, b.t0),
      ...B
    });
    return xt(H(fe instanceof Error ? fe.message : String(fe)), C, Q, V);
  }
}

var bye = 4;

function gr(e) {
  return typeof e === "string" ? e : e.toString("utf8");
}

async function Or(e, n, r, s = "sidecar file") {
  let h = e.filter(y => eMt.has(T0(y.contentType)));
  if (h.length === 0) return null;
  let {verifyWorkshopHtml: b} = await import("./chunk-y960b7c9.js");
  for (let y of h) {
    let w = b(gr(y.content), n, "probe");
    if (w.ok) continue;
    f("workshop_html_publish", "verifier_refused"), m("artifact_publish", "workshop_verifier_refused", {
      page_bytes: r,
      sidecar_bytes: Buffer.byteLength(y.content, "utf8")
    });
    let S = w.violations.slice(0, 6).map(P => `- [${P.rule}] ${P.where} \u2014 ${P.hint}`), x = w.violations.length > 6 ? `\n(and ${w.violations.length - 6} more)` : "";
    return H(`${s} ${z8(y.path)} refused by the workshop structural verifier:\n` + S.join(`\n`) + x);
  }
  return null;
}

var Sye = new Set([ "text/html", ...[], "text/css", "text/plain", "text/markdown", "text/csv", "text/javascript", "application/javascript", "application/json", "application/manifest+json", "application/xml", "text/xml", "image/svg+xml" ]), Pn = new Set([ ...Sye, "application/wasm", "image/png", "image/jpeg", "image/gif", "image/webp", "image/avif", "image/x-icon", "image/vnd.microsoft.icon", "font/woff", "font/woff2", "font/ttf", "font/otf", "application/font-woff", "application/font-woff2", "audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "video/mp4", "video/webm", "video/ogg", "application/pdf" ]), Zl = [ "py", "ipynb", "yaml", "yml", "toml", "ini", "cfg", "conf", "env", "lock", "sh", "bash", "ps1", "bat", "ts", "tsx", "jsx", "vue", "scss", "less", "rs", "go", "java", "kt", "c", "h", "cpp", "cs", "rb", "php", "r", "swift", "lua", "sql", "db", "sqlite", "parquet", "jsonl", "ndjson", "log", "tex", "rtf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "epub", "key", "pages", "numbers", "zip", "tar", "gz", "tgz", "7z", "rar", "mov", "avi", "m4a", "aac", "flac", "heic", "bmp", "tif", "tiff", "psd", "fig", "eot", "xhtml", "htm", "bin", "exe", "dmg", "tsv", "pkl", "npy", "npz", "pt", "onnx", "safetensors", "h5", "svelte", "mdx", "jsonc" ], Ql = [ "text/x-python", "text/x-python-script", "application/x-python-code", "application/x-ipynb+json", "application/x-yaml", "application/yaml", "text/yaml", "text/x-yaml", "application/toml", "text/x-toml", "text/x-sh", "text/x-shellscript", "application/x-sh", "application/typescript", "text/typescript", "text/x-typescript", "text/jsx", "text/x-scss", "text/x-sql", "application/sql", "application/x-sqlite3", "application/vnd.apache.parquet", "application/x-ndjson", "application/jsonl", "application/ld+json", "application/geo+json", "application/octet-stream", "text/x-log", "text/rtf", "application/rtf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.oasis.opendocument.text", "application/epub+zip", "application/zip", "application/x-zip-compressed", "application/gzip", "application/x-tar", "application/x-7z-compressed", "video/quicktime", "video/x-msvideo", "audio/mp4", "audio/x-m4a", "audio/aac", "audio/flac", "image/heic", "image/bmp", "image/tiff", "image/vnd.adobe.photoshop", "application/x-figma", "application/vnd.ms-fontobject", "application/xhtml+xml", "application/x-www-form-urlencoded", "multipart/form-data", "image/jpg", "text/json", "text/x-markdown", "application/x-javascript", "text/x-java-source", "text/x-c" ];

function ksr(e, n) {
  let r = Co(e).toLowerCase().slice(1), s = Zl.find(S => S === r), h = r === "" ? c("none") : WY(e) !== void 0 ? c("served") : s !== void 0 ? c(s) : c("other");
  if (n === void 0) return {
    refused_ext: h
  };
  let b = T0(n), y = Ql.find(S => S === b), w = Pn.has(b) ? c("served_variant") : y !== void 0 ? c(y) : c("other");
  return {
    refused_ext: h,
    refused_type: w
  };
}

var ec = new Set([ "image/svg+xml", "text/xml", "application/xml" ]), o3 = 67108864, VEt = 268435456, Tsr = 15728640, mr = 12582912, tc = 1048576, sr = 20971520, Zt = 256, FAn = 512, Ui = /\b(manifest|mode)\b/;

function on(e) {
  if (Sye.has(e.contentType)) return typeof e.content === "string" ? e.content : e.content.toString("utf8");
  return (typeof e.content === "string" ? Buffer.from(e.content, "utf8") : e.content).toString("base64");
}

function Bs(e) {
  let n = (e.thumbnail !== void 0 ? 1 : 0) + (e.thumbnailDark !== void 0 ? 1 : 0);
  return n > 0 && r3() ? {
    thumbnails: n
  } : {};
}

function Vi(e) {
  return e !== void 0 && r3() ? Math.ceil(e.length / 3) * 4 : 0;
}

function nc(e) {
  return typeof e.content === "string" ? Buffer.byteLength(e.content, "utf8") : e.content.length;
}

function It(e) {
  return Buffer.byteLength(_(e), "utf8") - 2;
}

function rc(e, n) {
  let r = Object.create(null), s = Object.keys(e);
  if (s.length === 0) return;
  for (let h of s) {
    let b = e[h], y = n.get(h);
    if (y === void 0 || b === void 0) return;
    if (b === null) {
      if (y === null) return;
      r[h] = {
        delete: !0,
        ifMatch: y
      };
      continue;
    }
    if (!("contentType" in b) || b.live !== void 0 || b.reseed !== void 0) return;
    r[h] = {
      ...b,
      ifMatch: y
    };
  }
  return r;
}

var ic = /unknown field "(live|reseed)"/, ac = /manifest must not be empty/;

function Nn(e, n, r) {
  let s = S => ({
    kind: "files_invalid",
    msg: S
  }), h = S => ({
    kind: "too_large",
    msg: S
  });
  if (n.length + r.length + (e === null ? 0 : 1) > Zt) return s(`This publish lists ${n.length} ${I(n.length, "file")}${r.length > 0 ? ` and ${r.length} ${I(r.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Zt} entries in one publish. Nothing was published: send at most ${Zt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${FAn} in all.`);
  let y = new Set([ "index.html" ]);
  for (let S of r) {
    if (!S || S === "index.html") return s(S ? `"index.html" is the page itself and can't be removed. Drop that entry.` : "A removal in `files` has an empty path. Name the published path to remove.");
    if (y.has(S)) return s(`${_(S)} is listed more than once in \`files\`. List each path once.`);
    y.add(S);
  }
  let w = e === null ? 0 : Buffer.byteLength(e, "utf8");
  for (let S of n) {
    if (!S.path || S.path === "index.html") return s(S.path ? e === null ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here` : 'files must not contain "index.html" \u2014 the page argument is the index' : "every file needs a non-empty path");
    if (y.has(S.path)) return s(`${_(S.path)} is listed more than once in \`files\`. List each path once.`);
    if (y.add(S.path), typeof S.content === "string" && !Sye.has(S.contentType)) return s(`file ${_(S.path)}: contentType ${_(S.contentType)} ` + "is binary \u2014 pass its content as a Buffer (raw bytes), not a string");
    let x = Sye.has(S.contentType), P = nc(S), R = x ? Df : Tsr;
    if (P > R) return h(`file ${_(S.path)} is ${Math.ceil(P / 1024 / 1024)}MB (per-file max ${R / 1024 / 1024}MB${x ? "" : " for binary files, which must fit an upload request base64-encoded"})`);
    if (x) {
      let O = typeof S.content === "string" ? S.content : S.content.toString("utf8");
      if (typeof S.content !== "string" && !Buffer.from(O, "utf8").equals(S.content)) return s(`file ${_(S.path)}: contentType ${_(S.contentType)} ` + "is a text type but the Buffer is not valid UTF-8 \u2014 fix the " + "encoding, or use a binary contentType");
      let z = O.indexOf("\ufffd");
      if (z !== -1 || !sc(O)) return s(`file ${_(S.path)} ` + (z !== -1 ? `has the replacement character U+FFFD at ${wn(O, z)}` : "holds an unpaired surrogate (half of a split character)") + " \u2014 replace it with the intended text" + (S.contentType === "text/html" ? " (in HTML, write an intended U+FFFD as &#xFFFD;)" : ""));
    }
    if (x && P > sr / 6) {
      let O = It(on(S));
      if (O > sr) return h(`file ${_(S.path)} is ${Math.ceil(O / 1024 / 1024)}MB JSON-encoded on the wire (per-request max ${sr / 1024 / 1024}MB) \u2014 ` + "heavily escaped text (quotes, backslashes, control characters) inflates when JSON-encoded; split or shrink the file");
    }
    w += P;
  }
  if (w > o3) return h(`total content is ${Math.ceil(w / 1024 / 1024)}MB \u2014 one publish may send at most ${o3 / 1024 / 1024}MB. Nothing was published: send part of the files now and the rest with another publish to the same url (files left out of a later publish are kept; a version may total ${VEt / 1024 / 1024}MB).`);
  return null;
}

var Nr = "copying files from another artifact is not enabled for this account \u2014 nothing was published; publish with local files instead";

function Ir(e, n, r, s) {
  if (r.length === 0) return null;
  if (n.length + r.length + s.length + (e === null ? 0 : 1) > Zt) return `This publish lists ${n.length + r.length} ${I(n.length + r.length, "file")} (copies included)${s.length > 0 ? ` and ${s.length} ${I(s.length, "removal")}` : ""}${e === null ? "" : " plus the page"}, which is over the limit of ${Zt} entries in one publish. Nothing was published: send at most ${Zt - 1} files now and add the rest with another publish to the same url \u2014 files left out of a later publish are kept, and a version holds up to ${FAn} in all.`;
  let b = new Set([ "index.html", ...n.map(w => w.path), ...s ]), y = new Set;
  for (let w of r) {
    if (!w.path || w.path === "index.html") return w.path ? e === null ? `files must not contain "index.html" \u2014 it is the Artifact type's page and can't be changed here` : 'files must not contain "index.html" \u2014 the page argument is the index' : "every file needs a non-empty path";
    if (b.has(w.path)) return `${_(w.path)} is listed more than once in \`files\` (once as a copy from another artifact). List each path once.`;
    if (b.add(w.path), !nr.test(w.from.slug) || !w.from.path) return `file ${_(w.path)}: its source must name an artifact and a published path`;
    if (w.from.path === "index.html") return `file ${_(w.path)}: another artifact's page (index.html) is not a copyable file \u2014 read it and publish your own content`;
    for (let S of [ w.path, w.from.path ]) {
      let x = WY(S);
      if (x !== void 0 && uen.has(T0(x))) return `file ${_(w.path)}: an HTML or XML document cannot be copied from another artifact \u2014 read it with action "read_file" and publish it as your own file`;
    }
    y.add(`${w.from.slug}@${w.from.ver ?? ""}`);
  }
  if (y.size > bye) return `files copy from ${y.size} source artifact versions; at most ${bye} per publish`;
  return null;
}

async function MXr(e, n, r) {
  let s = Pr(e, "file");
  if (s !== null) return s.err;
  if (n.length > 0 && !n0e()) return m("artifact_publish", "copy_from_flag_off", {
    n_copied: n.length
  }), Nr;
  let h = Nn(null, e, [])?.msg ?? Ir(null, e, n, []);
  if (h !== null || r === void 0) return h;
  return (await Or(e, await On(), 0, "file"))?.err ?? null;
}

async function HXr(e, n) {
  if (Bc() !== null) return H("publishing to an Artifact created from an Artifact type is not available in eval stub mode");
  let r = n.copiedFiles ?? [];
  if (!(ee().frozenArtifactTypes?.typesOn ?? DM())) {
    let w = n.removeFiles ?? [];
    return m("artifact_publish", "multifile_flag_off", {
      n_files: e.length + r.length,
      n_removed: w.length
    }), H("This artifact was created from an artifact type, so it takes supporting files only, and " + (w.length > 0 ? "its files can't be changed from this session. Nothing was published or removed; the artifact is unchanged." : "supporting files can't be published from this session. Nothing was published; the artifact is unchanged."));
  }
  if (r.length > 0 && !n0e()) return m("artifact_publish", "copy_from_flag_off", {
    n_copied: r.length
  }), H(Nr);
  let h = Pr(e, "file");
  if (h !== null) return h;
  if (n.verifyWorkshopHtml !== void 0) {
    let w = await Or(e, await On(), 0, "file");
    if (w !== null) return w;
  }
  let b = await dn({
    slug: n.slug,
    hostGrant: U6e(a.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: n.signal,
    credentials: n.credentials,
    lane: "files"
  });
  if (!b.ok) return H(b.err);
  let y = {
    slug: n.slug,
    title: n.title,
    favicon: n.favicon,
    ...n.label !== void 0 && {
      label: n.label
    },
    ...n.note !== void 0 && {
      note: n.note
    },
    ...n.deadline !== void 0 && {
      deadline: n.deadline
    },
    ...n.requestId !== void 0 && {
      requestId: n.requestId
    },
    ...n.description !== void 0 && {
      description: n.description
    },
    ...n.publishContext !== void 0 && {
      publishContext: n.publishContext
    },
    ...n.originMetadata !== void 0 && {
      originMetadata: n.originMetadata
    },
    ...n.autoEditAttribution && {
      autoEditAttribution: n.autoEditAttribution
    }
  };
  return msr(n.ownPublishes, n.slug, () => ps(Fr(null, e, r, n.removeFiles ?? [], y, {}, {
    baseVersion: n.baseVersion,
    force: n.force,
    ownPublishes: n.ownPublishes,
    tele: {
      t0: performance.now(),
      pageBytes: 0,
      lane: "inline",
      isRedeploy: !0,
      hasCaps: !1,
      template: "plain",
      forced: n.force,
      ...n.baseRebase !== void 0 && {
        baseRebase: n.baseRebase
      }
    },
    ...n.copiedCrossOrgOk === !0 && {
      copiedCrossOrgOk: !0
    },
    ...n.preconditions !== void 0 && {
      preconditions: n.preconditions
    },
    onRetry: n.onRetry,
    signal: n.signal,
    credentials: n.credentials
  }), n.slug, n.credentials, n.signal));
}

async function DXr(e) {
  if (Bc() !== null) return H("invalid publish options");
  if (!DM()) return m("artifact_publish", "multifile_flag_off", {
    n_files: 0,
    n_removed: 0
  }), H("invalid publish options");
  if (![ ...e.base.values() ].some(s => s.live === !0)) return H("invalid publish options");
  let n = await dn({
    slug: e.slug,
    hostGrant: U6e(a.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "page"
  });
  if (!n.ok) return H(n.err);
  let r = {
    slug: e.slug,
    title: e.title,
    favicon: e.favicon,
    ...e.label !== void 0 && {
      label: e.label
    },
    ...e.deadline !== void 0 && {
      deadline: e.deadline
    },
    ...e.requestId !== void 0 && {
      requestId: e.requestId
    },
    ...e.publishContext !== void 0 && {
      publishContext: e.publishContext
    }
  };
  return msr(e.ownPublishes, e.slug, () => Fr(null, [], [], [], r, {}, {
    baseVersion: e.baseVersion,
    force: !1,
    ownPublishes: e.ownPublishes,
    tele: {
      t0: performance.now(),
      pageBytes: 0,
      lane: "inline",
      isRedeploy: !0,
      hasCaps: !1,
      template: "plain",
      forced: !1,
      liveFilesOn: !0
    },
    liveFiles: {
      detach: [],
      base: e.base
    },
    onRetry: e.onRetry,
    signal: e.signal,
    credentials: e.credentials
  }));
}

async function Fr(e, n, r, s, h, b, y) {
  let {baseVersion: w, force: S, tele: x, onRetry: P, signal: R, credentials: O} = y, z = y.relayOnly, K = y.copiedCrossOrgOk === !0, F = y.liveFiles, Z = F?.detach ?? [], C = {
    page_bytes: x.pageBytes,
    lane: c(x.lane),
    n_files: n.length + r.length,
    n_copied: r.length,
    n_removed: s.length,
    forced: x.forced,
    template: c(x.template),
    is_redeploy: x.isRedeploy,
    has_base_version: w !== void 0,
    reserved: !1,
    ...Bs(h),
    ...x.baseRebase !== void 0 && {
      base_rebase: c(x.baseRebase)
    }
  }, V = E => (m("artifact_publish", "files_invalid", C), H(E)), Q = E => (m("artifact_publish", "too_large", C), 
  H(E)), B = e === null || h.slug !== void 0 && w !== void 0 ? "patch" : "replace";
  if (s.length > 0 && B === "replace") return V(h.slug === void 0 ? "A `null` entry in `files` removes a file from an existing artifact, and a first publish has nothing to remove, so nothing was published. Drop the `null` entries." : "A removal applies to the artifact's current version, and this publish didn't name that version (`baseVersion`), so nothing was published. Publish again with the version named, or without the `null` entries.");
  if (F !== void 0 && h.slug !== void 0 && B === "replace") return V("invalid publish options");
  if (F?.page?.reseed === !0 && F.page.live !== void 0) return V("invalid publish options");
  let ie = Z.length > 0 || F?.page?.reseed === !0 || F?.page?.live === !1 || n.some(E => E.reseed === !0 || E.live === !1);
  if (ie && B === "replace") return V("invalid publish options");
  for (let E of n) {
    if (E.reseed === !0 && E.live !== void 0) return V("invalid publish options");
    if ((E.live === !0 || E.reseed === !0) && !uks.has(T0(E.contentType))) return V("invalid publish options");
    let re = F?.base?.get(E.path);
    if (F?.base !== void 0 && re?.live !== !0 && (E.reseed === !0 || E.live === !1)) return V("invalid publish options");
  }
  for (let E of Z) if (F?.base !== void 0 && F.base.get(E)?.live !== !0) return V("invalid publish options");
  if (F?.base !== void 0 && F.base.get("index.html")?.live !== !0 && (F.page?.reseed === !0 || F.page?.live === !1)) return V("invalid publish options");
  for (let E of s) if (F?.base?.get(E)?.live === !0) return V("invalid publish options");
  let fe = Nn(e, n, [ ...s, ...Z ]);
  if (fe !== null) return fe.kind === "too_large" ? Q(fe.msg) : V(fe.msg);
  let le = Ir(e, n, r, [ ...s, ...Z ]);
  if (le !== null) return V(le);
  for (let E of r) if (F?.base?.get(E.path)?.live === !0) return V("invalid publish options");
  let Ae = (E, re) => B === "patch" && F?.base?.get(E)?.live === !0 && re.reseed !== !0 && re.live !== !1, we = ie || F?.page?.live === !0 || n.some(E => E.live === !0) || [ ...F?.base?.values() ?? [] ].some(E => E.live), Fe = B === "patch" && !S && y.preconditions === void 0 && (e !== null || we), je = (E, re, G) => {
    let Se = Fe ? F?.base?.get(E) : void 0;
    return Se !== void 0 && !Se.live && Se.sha256 !== void 0 && Se.contentType === G && Se.sha256 === at(re);
  }, be = [], te = F?.page ?? {}, At = e !== null && te.live === !1, Ze = At ? [ "index.html", ...Z ] : Z, Me;
  if (Ae("index.html", te)) be.push("index.html"); else if (e !== null && !At && !(we && te.live === void 0 && te.reseed !== !0 && je("index.html", e, "text/html"))) Me = {
    content: e,
    contentType: "text/html",
    ...te.live !== void 0 && {
      live: te.live
    },
    ...te.reseed === !0 && {
      reseed: !0
    }
  };
  let Le = Object.create(null);
  if (Me !== void 0) Le["index.html"] = Me;
  let We = [], qe = Me?.content !== void 0 ? It(Me.content) : 0, Rt = Vi(h.thumbnail) + Vi(h.thumbnailDark), Be = mr - qe - Rt, Qe = E => !Ae(E.path, E) && (E.live === !0 || E.reseed === !0 || E.live === !1), ze = Object.create(null);
  for (let E of n.filter(Qe)) {
    let re = on(E), G = It(re);
    if (G > Be) {
      let Se = mr - qe - Be;
      return Q("file too large");
    }
    Be -= G, ze[E.path] = {
      content: re,
      contentType: E.contentType,
      ...E.live !== void 0 && {
        live: E.live
      },
      ...E.reseed === !0 && {
        reseed: !0
      }
    }, Le[E.path] = ze[E.path];
  }
  let Ie = [], Ke = 0;
  for (let E of n) {
    if (Qe(E)) continue;
    if (Ae(E.path, E)) {
      be.push(E.path);
      continue;
    }
    if (E.live === void 0 && je(E.path, E.content, E.contentType)) {
      Ke += 1;
      continue;
    }
    Ie.push(E);
  }
  let st = 0;
  for (let E of Ie) {
    let re = on(E), G = It(re);
    if (G <= Be) Be -= G, st += G, Le[E.path] = {
      content: re,
      contentType: E.contentType
    }; else {
      let Se = at(E.content);
      We.push({
        f: E,
        sha: Se,
        wire: re
      }), Le[E.path] = {
        sha256: Se,
        contentType: E.contentType
      };
    }
  }
  for (let E of s) Le[E] = null;
  for (let E of Ze) Le[E] = {
    live: !1
  };
  let et = {
    liveKey: Ze.length > 0 || Object.keys(ze).length > 0 || Me?.live !== void 0 || Me?.reseed === !0,
    emptyPatch: we && Object.keys(Le).length === 0 && r.length === 0,
    ldx: !1
  }, mt, kt = E => mt = E, Lt = Ps(C), he = !1, Re = E => Ls(re => pr(Cs(re), E, O, kt, Lt, re, z, R).then(G => (he = !0, 
  G), G => {
    if (!(G instanceof it)) he = !0;
    throw G;
  }), P, R, C, !1, typeof E.slug === "string", z !== void 0 && h.slug === void 0 && !he), lt = !1, Ue = E => {
    let re = B === "patch" && !S && y.preconditions !== void 0 ? rc(E, y.preconditions) : void 0;
    return lt = re !== void 0, re ?? E;
  }, Ye = {
    ...ns(h),
    ...YEt(),
    ...Isr(),
    ...b
  }, Tt = {
    deadline: !1,
    icon: !1,
    request_id: !1
  }, Yt = async E => {
    let re = await Re(E);
    for (let G = Tn(h, re); G !== void 0 && E[G] !== void 0; G = Tn(h, re)) {
      f("artifact_publish", `${G}_rejected`, C), t(`[artifact] ${G} refused upstream \u2014 retrying without it`), 
      delete Ye[G], h = Ds(h, G), Tt[G] = !0;
      let {[G]: Se, ...j} = E;
      E = j, re = await Re(E);
    }
    return re;
  }, Qt = 15728640, ot = [];
  {
    let E = [], re = 0;
    for (let G of We) {
      let Se = It(G.wire);
      if (E.length > 0 && re + Se > Qt) ot.push(E), E = [], re = 0;
      E.push(G), re += Se;
    }
    if (E.length > 0) ot.push(E);
  }
  let Pt = async E => {
    let re = Rs(E);
    if (re === void 0) return !1;
    if (await J(re, R), R?.aborted) return t("[artifact] 429 retry cancelled by user"), 
    !1;
    return !0;
  }, bt = E => {
    let re = E.fromFrame && E.status === 429 ? Jt(E.data) : void 0;
    if (re) m("artifact_publish", "publish_cap_reached", {
      ...C,
      cap_type: c(re.capType)
    });
    return re;
  }, Oe = r.map(E => ({
    c: E
  })), Dt = [], ut = E => "c" in E ? {
    path: E.c.path,
    from: {
      slug: E.c.from.slug,
      path: E.c.from.path,
      ...E.c.from.ver !== void 0 && {
        ver: E.c.from.ver
      }
    }
  } : {
    path: E.f.path,
    content: E.wire,
    contentType: E.f.contentType
  }, Bt = async (E, re) => {
    let G = K && re.some(pe => "c" in pe), Se = () => pr("/api/frame/upload", {
      slug: E,
      ...G && {
        cross_org_ok: !0
      },
      files: re.map(ut)
    }, O, kt, Lt, {}, z, R), j = await Sn(Se);
    if (j.ok && j.fromFrame && j.status === 429 && Jt(j.data) === void 0 && await Pt(j.response?.headers?.["retry-after"])) j = await Sn(Se);
    return j;
  }, Ct = (E, re, G) => {
    if (re) t(`[artifact] manifest publish refused (HTTP ${E}): ${KE(re)}`);
    let Se = G?.maybeGone ? ", or the artifact no longer exists or isn't yours to update" : "";
    if (s.length > 0) return H(`The server didn't accept this update's file changes (HTTP ${E})${Se}. Nothing was published or removed; the artifact is unchanged. Publishing the page on its own (omitting \`files\`) would update the page but can't remove a file.${G?.debris ?? ""}`);
    let j = G?.debris ? " This publish didn't finish." : h.slug !== void 0 ? " Nothing was published; the artifact is unchanged." : " Nothing was published.";
    return H(`The server didn't accept this publish's supporting files (HTTP ${E})${Se}.${j} Publish the page as a single file instead: inline what it needs and omit \`files\`.${G?.debris ?? ""}`);
  }, ye = "", yt, $t = E => {
    yt = E, C.reserved = !0, ye = ` (A slug was reserved for it: publish again to slug ${E} rather than publishing fresh.)`, 
    y.onReserved?.(E);
  };
  if (h.slug === void 0 && y.reservedSlug !== void 0) $t(y.reservedSlug);
  let wt = E => E.fromFrame && ea(E.status, E.data), Ot = (E, re) => (m("artifact_publish", "rate_limited", {
    ...C,
    refused_status: E.status,
    ...Xs(E.data)
  }), {
    ...H(Qs({
      retryAfter: E.response?.headers?.["retry-after"],
      reservedSlug: yt,
      ...re !== void 0 && {
        refusedStep: re
      }
    })),
    transient: "rate_limited"
  }), De = () => H(`publish cancelled \u2014 nothing more was sent.${ye}`);
  try {
    let E = h.slug ?? y.reservedSlug, re, G, Se = w, j = async (q, se) => {
      let Te = {
        ...q !== void 0 && {
          slug: q
        },
        ...se.length > 0 && {
          shas: se
        },
        ...q === void 0 && YEt()
      }, ge = {
        refreshOAuth: !0,
        headers: eu(),
        timeout: 3e4,
        credentials: O,
        relayOnCredentialRefusal: !0
      }, _e = async () => {
        if (z === void 0) return vc.post("/api/frame/deploy/prepare", Te, ge);
        return $r("/api/frame/deploy/prepare", Te, ge, z, R);
      }, Pe = await Sn(_e);
      if (Pe.ok && Pe.fromFrame && Pe.status === 429 && Jt(Pe.data) === void 0 && await Pt(Pe.response?.headers?.["retry-after"])) Pe = await Sn(_e);
      return Pe;
    }, pe = q => typeof q?.slug === "string" && nr.test(q.slug) ? q.slug : void 0, X = !1, Ne = !1, jt = h.slug !== void 0 && !(Fe && F?.base !== void 0), Ve = We.length > 0 || Oe.length > 0 || jt && st > tc;
    if (Ve) {
      let q = Ie.map(ge => ({
        f: ge,
        sha: at(ge.content),
        wire: on(ge)
      })), se, Te = "";
      for (let ge = 0; ge < 2; ge++) {
        if (R?.aborted) return De();
        let _e = await j(E, q.map(ae => ae.sha));
        if (R?.aborted) {
          let ae = ye === "" && E === void 0 && _e.ok && _e.status === 200 ? pe(_e.data) : void 0;
          if (ae !== void 0) $t(ae);
          return De();
        }
        if (!_e.ok) {
          se = {
            status: 0,
            why: _e.reason === "no-auth" ? ph(_e.detail) : `preflight unavailable: ${_e.reason}`
          };
          break;
        }
        if (_e.status === 404) {
          if (s3(_e.data)) return m("artifact_publish", "prepare_not_found", C), {
            ...H("the server does not recognize this artifact for updating (it may no longer exist or may not be yours to update). The files were NOT published."),
            ...h.slug !== void 0 && {
              gone: !0
            }
          };
          se = {
            status: 404,
            why: "the preflight route answered 404"
          };
          break;
        }
        let Pe = bt(_e);
        if (Pe) return H(ye ? `${Pe.message} \u2014 this publish didn't finish; try again after the reset.${ye}` : `${Pe.message} \u2014 nothing was published; try again after the reset.`);
        if (wt(_e)) {
          if (Oe.length > 0 || We.length > 0 || Ne) return Ot(_e, Oe.length > 0 ? _i(Oe.length) : void 0);
          t("[artifact] preflight rate-limited \u2014 sending the one inline deploy instead"), 
          se = {
            status: 429,
            why: "the preflight was rate-limited"
          };
          break;
        }
        if (_e.status !== 200) {
          se = {
            status: _e.status,
            why: _e.fromFrame ? `preflight ${_e.status}: ${KE(_e.data)}` : `preflight relay HTTP ${_e.status}`
          };
          break;
        }
        let Ln = pe(_e.data), Dn = _e.data?.missing;
        if (Ln === void 0 || !Array.isArray(Dn) || !Dn.every(ae => typeof ae === "string" && /^[0-9a-f]{64}$/.test(ae))) {
          se = {
            status: 200,
            why: "a malformed preflight answer"
          };
          break;
        }
        if (E !== void 0 && Ln !== E) return m("artifact_publish", "prepare_slug_mismatch", C), 
        H("the server answered the upload preflight for a different " + "artifact \u2014 not publishing.");
        if (Ne = !0, E = Ln, h.slug === void 0) $t(E);
        let sa = new Set(Dn), aa = q.filter(ae => sa.has(ae.sha)), Bn = [];
        {
          let ae = [], Ee = 0;
          for (let vt of aa) {
            let Gt = It(vt.wire);
            if (ae.length > 0 && Ee + Gt > Qt) Bn.push(ae), ae = [], Ee = 0;
            ae.push(vt), Ee += Gt;
          }
          if (ae.length > 0) Bn.push(ae);
        }
        for (let ae of Bn) {
          if (R?.aborted) return De();
          let Ee = await Bt(E, ae);
          if (!Ee.ok) return m("artifact_publish", Ee.reason, C), H(Ee.reason === "no-auth" ? ph(Ee.detail) + ye : `upload unavailable: ${Ee.reason}. The publish was NOT completed; retry publishing to slug ${E}.`);
          if (Ee.status !== 200) {
            let vt = bt(Ee);
            if (vt) return H(`${vt.message} \u2014 this publish didn't finish. ` + `Publish again to slug ${E} after the reset.`);
            if (wt(Ee)) return Ot(Ee);
            return m("artifact_publish", Ee.fromFrame ? "prepare_upload_failed" : "prepare_upload_relay_error", {
              ...C,
              upload_status: Ee.status
            }), H((Ee.fromFrame ? `file upload ${Ee.status} after the preflight: ${KE(Ee.data)}` : `file upload failed after the preflight (relay HTTP ${Ee.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${E}.`);
          }
        }
        if (Oe.length > 0) {
          if (R?.aborted) return De();
          let ae = await Bt(E, Oe);
          if (!ae.ok) return m("artifact_publish", ae.reason, C), H(ae.reason === "no-auth" ? ph(ae.detail) + ye : `copying files from another artifact unavailable: ${ae.reason}. The publish was NOT completed; retry publishing to slug ${E}.`);
          if (ae.status !== 200) {
            let ve = bt(ae);
            if (ve) return H(`${ve.message} \u2014 this publish didn't finish. Publish again to slug ${E} after the reset.`);
            if (wt(ae)) return Ot(ae, bi(Oe.map(({c: Yr}) => ({
              path: Yr.path,
              fromSlug: Yr.from.slug
            }))));
            let Nt = K && ae.fromFrame && ae.status === 400 && i$n(ae.data, "cross_org_ok");
            m("artifact_publish", Nt ? "copy_predates_cross_org" : ae.fromFrame ? "copy_upload_failed" : "copy_upload_relay_error", {
              ...C,
              upload_status: ae.status
            });
            let rt = KE(ae.data), Kt = /^files\[(\d+)\]: (.*)$/.exec(rt), dt = Kt !== null ? Oe[Number(Kt[1])]?.c : void 0, Wr = Kt !== null ? Kt[2] : rt, zn = ae.fromFrame && dt !== void 0 && /not found/.test(Wr) ? dt : void 0, oa = " \u2014 the source artifact doesn't exist, this account can't open it, or it can't be copied from (all three get the same answer)";
            if (Nt) return H("copying files from another organization's artifact isn't available on this server yet, so nothing was published. Don't retry the copy. Publish without the copied file instead, or tell the user cross-organization copies aren't supported yet.");
            return {
              ...H((ae.fromFrame ? dt !== void 0 ? `copying ${_(dt.path)} from artifact ${dt.from.slug} (${_(dt.from.path)}) was refused (${ae.status}: ${Wr})${zn !== void 0 ? oa : ""}` : ae.status === 404 ? "the server does not recognize this artifact for staging copied files (it may no longer exist, may not be yours to update, or copying is not enabled on this path)" : `staging the copied files was refused (${ae.status}: ${rt})` : `staging the copied files failed (relay HTTP ${ae.status})`) + ` \u2014 the publish was NOT completed. Retry publishing to slug ${E} once the cause is fixed.`),
              ...zn !== void 0 && {
                copySourceNotFound: zn
              }
            };
          }
          let Ee = () => H(`the server staged the copied files but its answer was incomplete, so nothing was published \u2014 retry publishing to slug ${E}.${ye}`), vt = ae.data?.files;
          if (!Array.isArray(vt) || vt.length !== Oe.length) return m("artifact_publish", "copy_echo_malformed", C), 
          Ee();
          for (let [ve, Nt] of Oe.entries()) {
            let rt = vt[ve];
            if (typeof rt?.sha256 !== "string" || !/^[0-9a-f]{64}$/.test(rt.sha256) || typeof rt.contentType !== "string" || !Pn.has(rt.contentType)) return m("artifact_publish", "copy_echo_malformed", C), 
            Ee();
            Nt.sha = rt.sha256, Nt.contentType = rt.contentType;
          }
          if (Dt = Oe.filter(ve => Eyo(ve.contentType ?? "")).map(ve => `${ve.c.path} (${ve.contentType})`), 
          y.workshopSurface && Dt.length > 0) return m("artifact_publish", "copy_refused_sidecar", C), 
          H(`workshop pages cannot ship renderable or executable sidecar files \u2014 each is a URL that bypasses the publish-time verifier: ${z8(Dt.join(", "))} (copied). Nothing was published.${ye}`);
          let Gt = Oe.filter(ve => uen.has(T0(ve.contentType ?? "")));
          if (Gt.length > 0) return m("artifact_publish", "copy_refused_document", C), H(`copied file ${_(Gt[0].c.path)} is ${Gt[0].contentType}: a page or XML document cannot be copied from another artifact into a publish (its content must pass this tool's checks, which a server-side copy skips) \u2014 read it with action "read_file" and publish it from the local copy instead. Nothing was published.${ye}`);
          let hn = ve => WY(ve) === Jvr, Ur = ve => T0(ve ?? "") === Jvr, qt = Oe.filter(ve => !Ur(ve.contentType) && (hn(ve.c.path) || hn(ve.c.from.path)));
          if (qt.length > 0) {
            m("artifact_publish", "copy_refused_svg_mismatch", C);
            let ve = qt.slice(0, 20).map(dt => `${_(dt.c.path)} (${dt.contentType})`), Nt = qt.length - ve.length, rt = qt.length === 1, Kt = qt.every(dt => !hn(dt.c.from.path)) ? `copy ${rt ? "it" : "each"} to a path that does not end .svg, or ` : "";
            return H(`copied ${I(qt.length, "file")} ${ve.join(", ")}${Nt > 0 ? ` and ${Nt} more` : ""}: a file copied to or from a name ending .svg must be stored as an SVG image \u2014 ${Kt}read ${rt ? "it" : "each"} with action "read_file" and publish it from the local copy instead. Nothing was published.${ye}`);
          }
          let jn = Oe.find(ve => Ur(ve.contentType) && !hn(ve.c.path));
          if (jn !== void 0) return m("artifact_publish", "copy_refused_svg_mismatch", C), 
          H(`copied file ${_(jn.c.path)} is ${jn.contentType}: an SVG image is copied only to a name ending .svg \u2014 copy it to a path ending .svg, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${ye}`);
          let Vr = ve => pen.has(T0(WY(ve) ?? "")), Hn = e === null ? Oe.find(ve => pen.has(T0(ve.contentType ?? "")) && !Vr(ve.c.path) && !Vr(ve.c.from.path)) : void 0;
          if (Hn !== void 0) return m("artifact_publish", "copy_refused_script", C), H(`copied file ${_(Hn.c.path)} is ${Hn.contentType}: a script its source stores under a name that does not say so cannot be copied into an artifact made from a type (the approval counted it as data) \u2014 copy it to a path with a script extension, or read it with action "read_file" and publish it from the local copy instead. Nothing was published.${ye}`);
        }
        if (R?.aborted) return De();
        let zt = Object.create(null);
        if (Me !== void 0) zt["index.html"] = Me;
        for (let [ae, Ee] of Object.entries(ze)) zt[ae] = Ee;
        for (let ae of q) zt[ae.f.path] = {
          sha256: ae.sha,
          contentType: ae.f.contentType
        };
        for (let ae of Oe) zt[ae.c.path] = {
          sha256: ae.sha,
          contentType: ae.contentType
        };
        for (let ae of s) zt[ae] = null;
        for (let ae of Ze) zt[ae] = {
          live: !1
        };
        let nt = await Yt({
          ...Ye,
          slug: E,
          ...S && {
            force: !0
          },
          ...w && {
            baseVersion: w
          },
          manifest: Ue(zt),
          mode: B
        }), zr = nt.ok ? gt(nt.data) : void 0;
        if (nt.ok && nt.fromFrame && nt.status === 422 && ge === 0 && (zr === "content_pending" || zr === void 0 && !vr(nt.data) && !Zs.test(Xt(nt.data, 300)) && !(et.liveKey && typeof nt.data === "string"))) {
          Te = KE(nt.data);
          continue;
        }
        if (nt.ok && nt.status === 200 && !nt.data?.version) return m("artifact_publish", "prepare_no_version", C), 
        H(an() + ye);
        G = nt, X = !0;
        break;
      }
      if (Oe.length > 0 && !X && !Ne) return m("artifact_publish", "copy_no_preflight", {
        ...C,
        prepare_status: se?.status ?? 0
      }), H(`copying files from another artifact needs the upload preflight, which was unavailable here (${se?.why ?? "no answer"}) \u2014 nothing was published.${ye}`);
      if (Ne && !X) return m("artifact_publish", "prepare_rerun_failed", {
        ...C,
        prepare_status: se?.status ?? 0
      }), H(`the deploy was refused (422: ${Te}), and re-checking with the server before re-sending failed (${se?.why ?? "no answer"}) \u2014 the publish was NOT ` + `completed. Retry publishing to slug ${E}.`);
    } else if (E === void 0) {
      if (R?.aborted) return De();
      let q, se = "no answer", Te, ge = !1;
      try {
        q = await j(void 0, []);
      } catch (Pe) {
        if (Pe instanceof ht) throw Pe;
        ge = Pe instanceof it, se = KE(Pe instanceof Error ? Pe.message : String(Pe)), Te = fr(Pe, x.t0);
      }
      let _e = q?.ok && q.status === 200 ? pe(q.data) : void 0;
      if (_e !== void 0) E = _e, $t(_e);
      if (R?.aborted) return De();
      if (_e === void 0) {
        let Pe = q?.ok ? bt(q) : void 0;
        if (Pe) return H(`${Pe.message} \u2014 nothing was published; try again after the reset.`);
        if (!ge && (!q?.ok || q.status !== 403 && q.status !== 404)) f("artifact_publish", "reserve_unavailable", {
          ...C,
          reserve_status: q?.ok ? q.status : 0,
          ...Te
        });
        t(`[artifact] could not reserve a slug before publishing (${q === void 0 ? se : q.ok ? `HTTP ${q.status}` : q.reason}); publishing without one \u2014 the server assigns it`);
      }
    }
    let xe, ft = [], ct = {};
    if (!X && We.length > 0 && !E) {
      let q = Object.create(null);
      for (let [ge, _e] of Object.entries(Le)) if (_e !== null && "content" in _e && _e.content !== void 0) q[ge] = _e;
      if (R?.aborted) return De();
      let se = await Yt({
        ...Ye,
        ...S && {
          force: !0
        },
        manifest: q,
        mode: "replace"
      });
      if (!se.ok) return m("artifact_publish", se.reason, C), H(`publish unavailable: ${se.reason}`);
      if (!se.fromFrame) return m("artifact_publish", "relay_error", {
        ...C,
        deploy_status: se.status
      }), H(wr(se.status));
      if (se.status === 400 || se.status === 404) {
        let ge = f1(se.data);
        if (se.status === 400 && Ji(ge, et)) return m("artifact_publish", "live_files_unsupported", C), 
        H(Xi(ge, et.emptyPatch));
        if (se.status === 400 && Er(ge, et)) return m("artifact_publish", "ldx_unsupported", C), 
        H(xr(ge));
        if (se.status === 404 || j$e.test(ge) && Ui.test(ge)) return m("artifact_publish", "multifile_unsupported", C), 
        Ct(se.status, ge);
      }
      if (se.status !== 200) {
        let ge = Sr(se.status, se.data, x.isRedeploy, x.echoedPin !== void 0 ? {
          pin: x.echoedPin,
          declaredCaps: x.hasCaps
        } : void 0, x.liveFilesOn === !0, x.sent, {
          retryAfter: se.response?.headers?.["retry-after"]
        });
        if (ge.code !== "thumbnail_rejected") m("artifact_publish", ge.code ?? "deploy_failed", {
          ...C,
          deploy_status: se.status,
          ...ge.extra
        });
        return yr(ge, `deploy ${se.status}: ${KE(se.data)}`);
      }
      let Te = br().safeParse(se.data);
      if (!Te.success) return m("artifact_publish", "deploy_incomplete", C), H(an());
      E = Te.data.slug, re = Te.data.version, xe = dr(se.data), ft = cr(se.data), ct = {
        contract: Te.data.contract,
        preferredContract: Te.data.preferredContract,
        capabilities: Te.data.capabilities
      }, UEt(y.ownPublishes, E, re, {
        merged: _r(se.data)
      }), ye = ` (The artifact was created with its inline files: to add the remaining files, fix the problem and publish again to slug ${E}.)`;
    }
    if (!X && We.length > 0) {
      if (E === void 0) return m("artifact_publish", "deploy_incomplete", C), H("internal: no slug available for staged upload");
      let q = new Set;
      for (let Te of ot) {
        if (R?.aborted) return De();
        let ge = await Bt(E, Te);
        if (!ge.ok) return m("artifact_publish", ge.reason, C), H(`upload unavailable: ${ge.reason}.${ye}`);
        if (ge.status === 404) return m("artifact_publish", "multifile_unsupported", C), 
        Ct(404, "", {
          maybeGone: h.slug !== void 0,
          debris: ye
        });
        if (ge.status !== 200) {
          let _e = bt(ge);
          if (_e) return H(`${_e.message} \u2014 try again after the reset.${ye}`);
          if (wt(ge) && re === void 0) return Ot(ge);
          return m("artifact_publish", ge.fromFrame ? "upload_failed" : "upload_relay_error", {
            ...C,
            upload_status: ge.status
          }), H(ge.fromFrame ? `file upload ${ge.status}: ${KE(ge.data)}.${ye}` : `file upload failed (relay HTTP ${ge.status}).${ye}`);
        }
        for (let _e of ge.data?.files ?? []) if (_e.sha256) q.add(_e.sha256);
      }
      let se = We.filter(Te => !q.has(Te.sha));
      if (se.length > 0) return m("artifact_publish", "upload_hash_mismatch", C), H(`file upload did not stage ${se.length} file(s) under the ` + "expected content hash \u2014 not publishing a manifest that would " + `reference unstaged content.${ye}`);
    }
    if (!X && We.length > 0 && re !== void 0) {
      let q = Object.create(null);
      for (let se of We) {
        let Te = {
          sha256: se.sha,
          contentType: se.f.contentType
        };
        Le[se.f.path] = Te, q[se.f.path] = Te;
      }
      if (R?.aborted) return De();
      Se = re, G = await Yt({
        ...Ye,
        slug: E,
        manifest: q,
        mode: "patch",
        baseVersion: re
      });
    } else if (!X) {
      if (R?.aborted) return De();
      G = await Yt({
        ...Ye,
        ...E && {
          slug: E
        },
        ...S && {
          force: !0
        },
        ...w && {
          baseVersion: w
        },
        manifest: Ue(Le),
        mode: B
      });
    }
    if (G === void 0) return m("artifact_publish", "deploy_incomplete", C), H("internal: publish flow completed without a deploy");
    if (!G.ok) return m("artifact_publish", G.reason, C), H((G.reason === "no-auth" ? ph(G.detail) : `publish unavailable: ${G.reason}`) + ye);
    if (!G.fromFrame) return m("artifact_publish", "relay_error", {
      ...C,
      deploy_status: G.status
    }), H(wr(G.status) + ye);
    if (G.status === 400 || G.status === 404) {
      let q = f1(G.data);
      if (G.status === 400 && Ji(q, et)) return m("artifact_publish", "live_files_unsupported", C), 
      H(Xi(q, et.emptyPatch) + ye);
      if (G.status === 400 && Er(q, et)) return m("artifact_publish", "ldx_unsupported", C), 
      H(xr(q) + ye);
      let se = G.status === 404 && x.isRedeploy && s3(G.data);
      if (G.status === 404 && !se || j$e.test(q) && Ui.test(q)) return m("artifact_publish", "multifile_unsupported", C), 
      Ct(G.status, q, {
        maybeGone: G.status === 404 && h.slug !== void 0,
        debris: ye
      });
    }
    if ((w !== void 0 || re !== void 0 || RB()) && G.status === 409) {
      let q = qs(G.data) ?? (lt ? mc(G.data, new Set([ ...Object.keys(Le), ...r.map(se => se.path) ])) : null);
      if (q) return m("artifact_publish", "conflict", {
        ...C,
        ...x.baseRebase !== void 0 && {
          if_match_sent: lt
        },
        ...q.paths !== void 0 && {
          conflict_reason: c("precondition_failed"),
          conflict_paths: q.paths.length
        }
      }), {
        url: null,
        slug: null,
        version: null,
        err: (q.paths !== void 0 ? hc(q, q.paths) : Ws(q)) + ye,
        conflict: !0,
        conflictDetail: q
      };
    }
    if (G.status !== 200) {
      let q = Sr(G.status, G.data, x.isRedeploy, x.echoedPin !== void 0 ? {
        pin: x.echoedPin,
        declaredCaps: x.hasCaps
      } : void 0, x.liveFilesOn === !0, x.sent, {
        retryAfter: G.response?.headers?.["retry-after"],
        reservedSlug: yt,
        created: yt === void 0 && ye !== ""
      });
      if (q.code !== "thumbnail_rejected") m("artifact_publish", q.code ?? "deploy_failed", {
        ...C,
        deploy_status: G.status,
        ...q.extra
      });
      let se = q.code === "path_is_live" ? na(G.data) : void 0;
      return {
        ...yr(q, `deploy ${G.status}: ${KE(G.data)}`, q.code === "rate_limited" && yt !== void 0 ? "" : ye),
        ...se !== void 0 && {
          refusedLivePath: se
        },
        ...h.slug === void 0 && E !== void 0 && re !== void 0 && {
          created: {
            slug: E,
            version: re
          }
        }
      };
    }
    let tt = br().safeParse(G.data);
    if (!tt.success) return m("artifact_publish", "deploy_incomplete", C), H(an() + ye);
    let {slug: pt, version: ke, read: Ht, shared: en, kind: pn} = tt.data;
    if (E && pt !== E) return m("artifact_publish", "deploy_slug_mismatch", C), H(hr() + ye);
    let tn = hs(G.data), Xe = tn?.map(q => q.path), In = (Xe ?? []).filter(q => (q === "index.html" ? Me : ze[q])?.live === !0), Fn = (Xe ?? []).filter(q => (q === "index.html" ? Me : ze[q])?.reseed === !0), Lr = D([ ...ft, ...cr(G.data), ...gs(In), ...vl(Fn), ...xl(be.filter(q => q !== "index.html")), ...At ? wl() : [], ...Sl(Z, Object.keys(ze).filter(q => ze[q]?.live === !1)), ...ms(Xe?.filter(q => !be.includes(q)), new Set([ ...Object.keys(Le), ...r.map(q => q.path) ])) ]).slice(0, $n), ra = be.includes("index.html"), Dr = dr(G.data) ?? xe, Mn = Es(G.response?.headers?.[xs]), ia = As(G.response?.headers?.date), Br = js(tt.data, S ? void 0 : Se, new Set([ ...Object.keys(Le), ...r.map(q => q.path), ...Xe ?? [] ]));
    UEt(y.ownPublishes, pt, ke, {
      merged: _r(G.data)
    });
    let jr = Vs(tt.data);
    g("artifact_publish", {
      ...C,
      e2e_ms: Math.round(performance.now() - x.t0),
      is_redeploy: x.isRedeploy,
      has_caps: x.hasCaps,
      push_remaining_seen: Mn !== void 0,
      read_back_echoed: jr.readBackEchoed === !0,
      staged_files: We.length,
      files_omitted: Ke,
      publish_path: c(X ? "preflight" : Ve ? "legacy" : "inline"),
      ...x.baseRebase !== void 0 && {
        if_match_sent: lt
      },
      ...Hs(Br.mergedOver)
    });
    let Hr = e === null ? zEt(G.data) : void 0;
    return {
      url: Lm(pt),
      slug: pt,
      version: ke,
      err: null,
      ...Mn !== void 0 && {
        pushRemaining: Mn,
        pushResetAt: ia
      },
      ...y.workshopSurface && {
        workshopSurface: !0
      },
      ...y.tele.workshopInfo && {
        workshop: y.tele.workshopInfo
      },
      ...Dt.length > 0 && {
        refusedClassSidecarTypes: Dt
      },
      ...Ht !== void 0 && {
        read: Ht
      },
      ...en !== void 0 && {
        shared: en
      },
      ...zs(tt.data, Ye.deadline !== void 0),
      ...Br,
      ...Tt.deadline && {
        deadlineDropped: !0
      },
      ...Tt.icon && {
        iconDropped: !0
      },
      ...Us(tt.data.contract !== void 0 ? tt.data : {
        ...tt.data,
        ...ct
      }, b),
      ...jr,
      ...pn !== void 0 && {
        kind: pn
      },
      ...Lr.length > 0 && {
        warnings: Lr
      },
      ...Dr !== void 0 && {
        embeds: Dr
      },
      ...Hr !== void 0 && {
        manifestPaths: Hr
      },
      ...Xe !== void 0 && {
        livePaths: Xe
      },
      ...tn !== void 0 && {
        liveDocs: tn
      },
      ...In.length > 0 && {
        bornLive: In
      },
      ...Fn.length > 0 && {
        reseeded: Fn
      },
      ...ra && {
        pageCarriedLive: !0
      }
    };
  } catch (E) {
    if (E instanceof it) {
      if (!he && h.slug === void 0) return E instanceof ht ? Fs() : Is(C);
      if (E instanceof ht) return H(Et("the publish was cancelled before a later request of it went out") + ye);
      return m("artifact_publish", "relay_only_unsent_after_deploy", C), H(Et("a later request could not go through the cloud session's gateway") + ye);
    }
    if (!Ms(E)) m("artifact_publish", E instanceof Wt ? "relay_request_error" : "request_error", {
      ...C,
      ...fr(E, x.t0),
      ...mt
    });
    return H((E instanceof Error ? E.message : String(E)) + ye);
  }
}

function Lm(e) {
  return new URL(Gxr(e), cIe() ?? un().CLAUDE_AI_ORIGIN).toString();
}

var Ont = [ "mine", "shared" ];

function UAn(e) {
  return Ont.includes(e);
}

var l4t = [ "mine", "shared", "all" ], oc = p(() => u({
  frames: T(oe()).nullable(),
  starsEnabled: M().optional().catch(void 0)
})), lc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

function Asr(e, n) {
  let r = e === "" || typeof e === "string" && N6e.test(e) ? e : void 0, s = n === "" || typeof n === "string" && VE.test(n) ? n : void 0;
  return {
    read: n === void 0 || s !== void 0 ? r : void 0,
    shared: s
  };
}

var br = p(() => u({
  slug: o().regex(nr),
  version: o().regex(VE),
  read: oe().optional(),
  shared: oe().optional(),
  kind: o().regex(N6e).optional().catch(void 0),
  contract: o().regex(XY).optional().catch(void 0),
  preferredContract: o().regex(XY).optional().catch(void 0),
  capabilities: ue(o().max(64), oe()).optional().catch(void 0),
  typeInstance: M().optional().catch(void 0),
  type: oe().optional(),
  ...cc(),
  ...dc()
}).transform(({read: e, shared: n, ...r}) => ({
  ...r,
  ...Asr(e, n)
})));

function cc() {
  return {
    seq: v().int().nonnegative().optional().catch(void 0),
    deadline: u({
      until: v().int().positive().max(KEt)
    }).optional().catch(void 0),
    unchanged: A(!0).optional().catch(void 0),
    replayed: A(!0).optional().catch(void 0)
  };
}

function dc() {
  return {
    appliedOver: o().regex(VE).optional().catch(void 0),
    mergedFrom: o().regex(VE).optional().catch(void 0),
    changed: T(u({
      path: o().min(1).max(WEt),
      sha256: o().regex(/^[0-9a-f]{64}$/).nullable()
    })).max(2 * o4t).optional().catch(void 0)
  };
}

function _r(e) {
  if (typeof e !== "object" || e === null || !("mergedFrom" in e)) return !1;
  let {mergedFrom: n} = e;
  return typeof n === "string" ? n !== "" : n != null;
}

function js(e, n, r) {
  let s = e.mergedFrom;
  if (s === void 0 || s !== n || s === e.version || s === e.appliedOver) return {};
  let h = e.changed?.filter(b => !r.has(b.path));
  return {
    mergedOver: {
      base: s,
      ...e.appliedOver !== void 0 && {
        live: e.appliedOver
      },
      ...h !== void 0 && {
        changed: h
      }
    }
  };
}

function Hs(e) {
  if (e === void 0) return {};
  return {
    merged_over: !0,
    ...e.changed !== void 0 && {
      merged_changed: e.changed.length
    }
  };
}

var KEt = 0xe677d21fdbff;

function zs(e, n) {
  return {
    ...e.seq !== void 0 && {
      seq: e.seq
    },
    ...n && e.deadline !== void 0 && {
      deadline: {
        until: e.deadline.until
      }
    },
    ...e.unchanged && !e.replayed && {
      unchanged: !0
    }
  };
}

function Us(e, n, r = !1) {
  let s = "contract" in n ? n.contract : void 0, h = e.contract ?? s, b = e.capabilities, y = I1(b), w = !("capabilities" in n) && y, S = e.contract !== void 0 && (y || LN(e.contract) !== null) ? {
    contract: e.contract,
    ...b !== void 0 && {
      capabilities: b,
      ...w && (r ? {
        declaredByRoute: !0
      } : {
        carried: !0
      })
    }
  } : void 0;
  return {
    ...h !== void 0 && {
      contract: h
    },
    ...e.preferredContract !== void 0 && {
      preferredContract: e.preferredContract
    },
    ...S !== void 0 && {
      stored: S
    }
  };
}

function Vs(e) {
  let n = e.typeInstance === !0 ? Pnt(e.type) : void 0;
  return e.typeInstance === !1 || n !== void 0 && (n.latest === void 0 || n.latest === n.current) ? {
    ...n !== void 0 && {
      typeLock: n
    },
    readBackEchoed: !0
  } : {};
}

var uc = p(() => u({
  slug: o().regex(nr),
  title: o().max(4e3).optional(),
  favicon: oe().optional(),
  rel: o(),
  updatedAt: o().regex(lc).optional().catch(void 0),
  softDeleted: M().optional(),
  starred: M().optional().catch(void 0)
})), Wi = yve, fc = 4194304;

async function LXr(e, n) {
  let {scope: r = "mine", pins: s = !1, signal: h, credentials: b} = n, y = r === "mine" ? void 0 : _sr({
    credentials: b,
    ...h && {
      signal: h
    }
  }), w;
  for (let ie = 0; ;ie++) {
    try {
      w = await vc.get(`/api/frame/frames?limit=${Wi}`, {
        refreshOAuth: !0,
        headers: eu(),
        timeout: 15e3,
        maxContentLength: fc,
        ...h && {
          signal: h
        },
        credentials: b
      });
    } catch (fe) {
      if (ie === 0 && !h?.aborted) {
        await J(300 + Math.random() * 500);
        continue;
      }
      if (!h?.aborted) m("artifact_list", "request_error", {
        wire: ode(fe)
      });
      return {
        err: `artifact listing failed: ${l(fe)}`,
        reason: "request_error"
      };
    }
    if (w.ok && w.status >= 500 && ie === 0 && !h?.aborted) {
      await J(300 + Math.random() * 500);
      continue;
    }
    break;
  }
  let S = Gne(w);
  if (!w.ok) return m("artifact_list", "not_ok", {
    wire: S
  }), {
    err: w.reason === "no-auth" ? ph(w.detail) : `artifact listing unavailable: ${w.reason}`,
    reason: "not_ok"
  };
  if (!w.fromFrame) return m("artifact_list", "relay_error", {
    wire: S
  }), {
    err: `artifact listing failed (relay HTTP ${w.status})`,
    reason: "relay_error"
  };
  if (w.status < 200 || w.status >= 300) {
    let ie = w.status >= 500 ? "http_5xx" : "http_4xx";
    return m("artifact_list", ie, {
      wire: S
    }), {
      err: `artifact listing failed (HTTP ${w.status})`,
      reason: ie
    };
  }
  let x = oc().safeParse(w.data);
  if (!x.success) return m("artifact_list", "malformed_body", {
    wire: S
  }), {
    err: "artifact listing failed: malformed response",
    reason: "malformed_body"
  };
  let P = x.data.frames ?? [], R = x.data.starsEnabled === !0, O = [], z = new Set, K = 0, F = 0, Z = !1, C = !1;
  for (let ie of P) {
    let fe = uc().safeParse(ie);
    if (!fe.success) {
      F++;
      continue;
    }
    let {slug: le, title: Ae, rel: we, updatedAt: Je, softDeleted: Fe, starred: je} = fe.data;
    if (UAn(we)) {
      if (we !== "mine") Z = !0; else if (Z) C = !0;
    }
    let be = pft(fe.data.favicon);
    if (Fe === !0 || !UAn(we)) continue;
    if (r !== "all" && we !== r) continue;
    if (z.add(le), K++, O.length >= e) continue;
    let te = im(Ae ?? "") ?? "Untitled";
    O.push({
      title: te,
      url: Lm(le),
      ...be !== void 0 && we === "mine" && {
        favicon: be
      },
      ...Je !== void 0 && {
        updatedAt: Je
      },
      ...r !== "mine" && {
        rel: we
      },
      ...s && R && je === !0 && {
        pinned: !0
      }
    });
  }
  if (P.length > 0 && O.length === 0 && F === P.length) return m("artifact_list", "all_rows_dropped", {
    wire: S
  }), {
    err: "artifact listing failed: response rows were unreadable",
    reason: "all_rows_dropped"
  };
  let V = await y;
  for (let ie of V?.listed ? V.rows : []) {
    if (z.has(ie.slug)) continue;
    if (z.add(ie.slug), K++, O.length >= e) continue;
    O.push({
      title: im(ie.title ?? "") ?? "Untitled",
      url: Lm(ie.slug),
      rel: "shared",
      external: !0,
      ...ie.role !== void 0 && {
        role: ie.role
      }
    });
  }
  if (g("artifact_list", {
    wire: S
  }), r !== "mine") g(r === "shared" ? "artifact_list_scope_shared" : "artifact_list_scope_all");
  let Q = Z && !C, B = P.length >= Wi && !(r === "mine" && Q) || F > 0 || r !== "mine" && V?.listed === !0 && V.mayHaveMore;
  return {
    err: null,
    rows: O,
    total: K,
    totalAtLeast: B,
    truncated: O.length < K || B,
    ...s && {
      pinsEnabled: R
    },
    ...V?.listed === !0 && {
      externalListed: !0
    }
  };
}

function NXr(e, n) {
  if (n.err !== null || n.refusedClassSidecarTypes === void 0 || n.refusedClassSidecarTypes.length === 0) return null;
  return {
    ...e ?? {},
    [n.slug]: n.refusedClassSidecarTypes
  };
}

function $Xr(e, n) {
  return e?.[n] ?? [];
}

function pc(e, n) {
  if (e !== void 0 && n === void 0) return {
    kind: "contract",
    err: "workshop publish contract violation: redeploys must pass refusedSidecarHistory (the AppState sidecar record for the target slug; [] when none) \u2014 refusing rather than skipping the sidecar-ordering gate"
  };
  if (n !== void 0 && n.length > 0) return {
    kind: "priors",
    err: `this artifact was previously published with renderable or executable sidecar files (${z8(n.join(", "))}) \u2014 those URLs would remain addressable beside the workshop page. ` + "Publish the workshop to a new artifact, or republish this one without workshop surface."
  };
  return null;
}

function FXr(e, n) {
  if (n.err !== null || n.workshopSurface !== !0) return null;
  if ((e ?? []).includes(n.slug)) return null;
  return [ ...e ?? [], n.slug ];
}

var d4t = "conflict: nothing was published \u2014 ";

function Ws(e) {
  let {readRemedy: n, forceAdvisory: r, contentReadsBlocked: s} = rde();
  return `${d4t}${qEt(e)} is live and this publish was not built on it. ` + (s ?? `Re-read it (${n}), merge your edits on top, then publish again.`) + (e.forceRefused ? gye : r);
}

function hc(e, n) {
  if (n.length === 0) return `${d4t}${qEt(e)} changed some of the files this publish writes or removes, but its answer named none of them. List the artifact's files, read each file you are changing that changed, re-apply your change to what it holds now, and publish again.`;
  let r = n.slice(0, 20).map(h => _(h.path)), s = n.length - r.length;
  return `${d4t}${qEt(e)} changed ${I(n.length, "a file", "files")} this publish writes or removes: ${r.join(", ")}${s > 0 ? ` and ${s} more` : ""}. Read ${n.length === 1 ? "it" : "each one"} again, re-apply your change to what it holds now, and publish again.`;
}

function qEt(e) {
  return `a newer version (${e.live})` + (e.liveEntry === "page" || e.liveEntry === "editor" ? " saved from inside the page (someone's edits or input on it)" : e.liveEntry === "publish" ? " published by another session or agent" : " published elsewhere (by another session, or by someone saving from the page itself)") + (e.createdAt ? ` at ${e.createdAt}` : "");
}

async function dn(e) {
  let {hostGrant: n} = e, r = e.storedCaps;
  if (n.kind === "absent") return {
    ok: !0,
    storedCaps: r
  };
  let s = e.pageBytes !== void 0 && {
    page_bytes: e.pageBytes
  };
  if (r === void 0) {
    let h = await Kx(e.slug, void 0, e.credentials);
    if (h !== null && "err" in h && ar(h)) {
      if (await J(or, e.signal), !e.signal?.aborted) h = await Kx(e.slug, void 0, e.credentials);
    }
    if (h !== null && "err" in h) return m("artifact_publish", "host_grant_readback_failed", {
      ...s,
      ...xn(h)
    }), {
      ok: !1,
      err: `couldn't read the artifact's stored capability declaration (${h.err}) \u2014 ` + "this computer's local-server grant bounds what a publish carries forward, so this publish cannot proceed without it. This is usually transient: retry." + (e.lane === "page" ? " If the read keeps failing, publish the page declaring the capabilities you intend (capabilities: {} clears the stored declaration) together with contract: 'latest', which needs no read." : "")
    };
    r = h?.capabilities ?? {};
  }
  return Csr(r, n, e.lane, s);
}

function Csr(e, n, r, s = !1) {
  if (n.kind === "absent") return {
    ok: !0,
    storedCaps: e
  };
  let h = $Er(e, n);
  if (!h.ok) {
    m("artifact_publish", "host_grant_carry_unreadable", {
      ...s,
      host_server_count: h.refused.length
    });
    let b = xO(h.refused, 8, w => `"${Wf(w)}"`), y = $Er(e, {
      kind: "granted",
      tools: new Map
    });
    return {
      ok: !1,
      err: `this computer's local-server grant (${N_o}) could not be read. It is set by the app that launched this session and is not something to fix from here. The artifact's stored declaration names ` + `local servers \u2014 ${b.join(", ")} \u2014 that a publish declaring nothing ` + "would carry forward, so this publish cannot proceed" + (r === "page" ? ". Declare what to send instead: publish the page with capabilities " + Gi(y.ok ? y.caps : {}, "its local servers") + ", or with capabilities: {} to clear the stored declaration." : Yi(r))
    };
  }
  if (h.dropped.length === 0) return {
    ok: !0,
    storedCaps: e
  };
  return m("artifact_publish", "host_grant_carry_refused", {
    ...s,
    dropped_count: h.dropped.length
  }), {
    ok: !1,
    err: "the artifact's stored declaration carries local tools this computer " + `did not grant \u2014 ${Gs(h.dropped)} \u2014 and a publish ` + "that declares nothing would carry them forward, so this publish cannot proceed" + (r === "page" ? ". Declare what to send instead: publish the page with capabilities " + Gi(h.caps, "them") + ", or with capabilities: {} to clear the stored declaration." : Yi(r))
  };
}

function Yi(e) {
  return e === "files" ? " from this session: this artifact's declaration comes from its type and cannot be changed from here." : " from this session: an Artifact made from this type carries its declaration, and that cannot be changed from here.";
}

function Gi(e, n) {
  let r = Wg(_(e), {
    max: 600
  });
  return r.length < 600 ? `set to the stored declaration without ${n}: ${r}` : `set to the stored declaration without ${n} (it is too long to print here)`;
}

async function UXr(e) {
  return dn({
    slug: e.slug,
    hostGrant: U6e(a.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "files"
  });
}

async function BXr(e) {
  return dn({
    slug: e.slug,
    hostGrant: U6e(a.CLAUDE_ARTIFACT_HOST_GRANT),
    storedCaps: void 0,
    signal: e.signal,
    credentials: e.credentials,
    lane: "page"
  });
}

function Gs(e) {
  return xO(e, 8, n => n.tool === null ? `all of "${Wf(n.server)}"` : `tool "${Wf(n.tool, {
    max: 128
  })}" on "${Wf(n.server)}"`).join("; ");
}

function H(e) {
  return {
    url: null,
    slug: null,
    version: null,
    err: e
  };
}

function Cn(e, n) {
  if (e !== 503 || !n || typeof n !== "object" || !("slug" in n) || typeof n.slug !== "string" || !nr.test(n.slug)) return null;
  return {
    slug: n.slug,
    ..."live" in n && typeof n.live === "string" && VE.test(n.live) && {
      live: n.live
    },
    ..."kind" in n && typeof n.kind === "string" && N6e.test(n.kind) && {
      kind: n.kind
    }
  };
}

function xt(e, n, r, s) {
  if (!n) return e;
  let h = s === "answered" ? ", and the automatic retry did not repair it" : s === "unknown" ? "; the automatic retry was sent but got no answer, so it may or may not have repaired it" : s === "unsent" ? "; the automatic retry could not go through the cloud session's gateway, so it was not sent" : s === "cancelled" ? "; the publish was cancelled before the automatic retry was sent" : "";
  if (!r) return e.conflict ? e : {
    ...e,
    err: `${e.err} \u2014 the new version was recorded but its content was not stored${h}.`,
    ...n.live !== void 0 && {
      liveVersion: e.liveVersion ?? n.live
    }
  };
  let b = Lm(n.slug);
  if (n.kind !== void 0) return {
    ...e,
    err: `${e.err} \u2014 the server created ${b} but could not store its content, and that artifact cannot be published over: publishing again creates a new one.`
  };
  return {
    ...e,
    err: e.conflict ? `${e.err} \u2014 ${b} is the artifact this publish's first attempt created without storing its content.` : `${e.err} \u2014 the server created ${b} but could not store its content${h}.`,
    strandedSlug: n.slug,
    ...!e.conflict && (e.liveVersion ?? n.live) !== void 0 && {
      liveVersion: e.liveVersion ?? n.live
    }
  };
}

function gc(e) {
  return xO(e, 8, s => {
    switch (s.kind) {
     case "not_object":
      return `capabilities.mcp must be an object of the form {"servers": [${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}]} \u2014 not an array, a string, or any other shape; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;

     case "no_servers":
      return `capabilities.mcp declares no servers \u2014 put one ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'} entry under "servers" for each connector the page calls; ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'} \u2014 an empty "servers" list is refused`;

     case "dynamic_not_boolean":
      return 'capabilities.mcp "dynamic" must be the JSON boolean true (or left out) \u2014 no other value is accepted, a string or a number included; with "dynamic": true the page may call connectors the declaration does not list, and "servers" may then be empty';

     case "entry_shape":
      return `servers[${s.index}] has no "server" string \u2014 each entry is ${'{"server": "<connector name>", "tools": ["<tool name>", ...]}'}` + (s.wrongKey === null ? "" : ` (the key is "server", not "${Wf(s.wrongKey)}")`);

     case "tools_shape":
      return `${TMt(s.server)} "${Wf(s.server)}": "tools" must be an array of tool-name strings`;

     case "no_tools":
      {
        let h = Wf(s.display ?? s.server), b = s.display === null ? "" : ` (declared as "${Wf(s.server)}")`, y = s.available.length === 0 ? "" : ` (available this session: ${xO([ ...s.available ], 12, w => `"${Wf(w)}"`).join(", ")})`;
        return `${TMt(s.server)} "${h}"${b} lists no tools \u2014 set "tools" to the upstream names of the "${h}" tools the page calls${y}; an empty or omitted "tools" list is refused and never means "all tools"`;
      }

     case "unknown_tools":
      {
        let h = Wf(s.display ?? s.server), b = s.display === null ? "" : ` (declared as "${Wf(s.server)}")`, y = xO([ ...s.unknown ], 8, S => `"${Wf(S)}"`), w = s.available.length === 0 ? " (none it lists this session fits the manifest grammar)" : `, here: ${xO([ ...s.available ], 12, S => `"${Wf(S)}"`).join(", ")}`;
        return `${TMt(s.server)} "${h}"${b} has no ${I(s.unknown.length, "tool")} named ${y.join(", ")} in this session \u2014 "tools" takes that connector's own top-level tool names${w}; if this connector fronts other tools through its own search/execute tools (an MCP gateway), declare those and have the page reach the inner ones through them. The control plane would accept this manifest, but the page's calls would fail for viewers of this connector`;
      }

     case "opaque_id":
      return `"${Wf(s.server, {
        max: 70
      })}" is a connector id, which no viewer can resolve \u2014 set "server" to that connector's name exactly as shown in claude.ai (Settings \u2192 Connectors) and pass the same name to callTool/watchTool in the page; if you don't know the name, ask the user, describing the connector by its tools (the user cannot see the id)`;

     case "known_id":
      {
        let h = Wf(s.display);
        return `"${Wf(s.server)}" is the id of connector "${h}" \u2014 set "server" to "${h}": approval prompts and viewers know connectors by name only, and the page must call it by that name too`;
      }

     case "tool_name":
      return `"${Wf(s.server, {
        max: 70
      })}" is a tool name, not a connector name \u2014 "server" takes the connector's display name` + (s.display === null ? "" : `, here "${Wf(s.display)}"`) + ', and "tools" takes the bare upstream tool names';

     case "connector_as_host":
      {
        let h = Wf(s.display);
        return `"${Wf(s.server, {
          max: 70
        })}" names the claude.ai connector "${h}", not a local server \u2014 declare it as {"server": "${h}", "tools": [...]} and call it by that name in the page`;
      }

     case "local_server_as_first_party":
      {
        let h = Wf(s.local);
        return `"${Wf(s.server, {
          max: 70
        })}" would bind the Claude app's own built-in server, but this session also has an MCP server named "${h}" \u2014 the page may have been built against that server, which no viewer can reach; rename or remove "${h}" (or drop the declaration) and publish again`;
      }

     case "undeclarable_name":
      return `connector "${y1n(s.name)}" cannot be declared until it is renamed in claude.ai (Settings \u2192 Connectors): a manifest "server" must be 1\u201364 characters with no control characters, line breaks, unusual spaces or text-direction controls, must not begin or end with a space or invisible character, and must not read as host: or be shaped like an id or a claude_ai_/mcp__ prefix \u2014 tell the user`;

     case "host_unavailable":
      return `"${Wf(s.server, {
        max: 70
      })}" names a locally-configured MCP server, and host servers aren't available in this session \u2014 declare only claude.ai connectors (set "server" to the connector's display name), or ${'to publish without connector access leave "mcp" out of capabilities (pass capabilities: {} to clear a stored declaration)'}`;
    }
  });
}

function yr(e, n, r = "") {
  return {
    ...H((e.msg ?? n) + r),
    ...e.code === "slug_gone" && {
      gone: !0
    },
    ...e.code === "thumbnail_rejected" && {
      thumbnailRejected: e.msg ?? n
    },
    ...(e.code === "rate_limited" || e.code === "contract_rollout") && {
      transient: e.code
    }
  };
}

function qs(e) {
  return gt(e) === void 0 ? Ks(e) : null;
}

function mc(e, n) {
  if (gt(e) !== "precondition_failed") return null;
  let r = Ks(e);
  if (r === null) return null;
  let s = typeof e === "object" && e !== null && "paths" in e ? e.paths : void 0, h = [];
  for (let b of Array.isArray(s) ? s : []) {
    let y = bc().safeParse(b);
    if (y.success && n.has(y.data.path)) h.push(y.data);
  }
  return {
    ...r,
    paths: h
  };
}

var bc = p(() => u({
  path: o(),
  expected: o().regex(/^[0-9a-f]{64}$/).nullable(),
  actual: o().regex(/^[0-9a-f]{64}$/).nullable()
}));

function Ks(e) {
  if (!e || typeof e !== "object" || !("conflict" in e) || e.conflict !== !0 || !("live" in e) || typeof e.live !== "string" || !hU.test(e.live)) return null;
  let n = e;
  return {
    live: e.live,
    ...typeof n.createdAt === "string" && /^[\w:.+ -]{1,40}$/.test(n.createdAt) && {
      createdAt: n.createdAt
    },
    ...(n.liveEntry === "editor" || n.liveEntry === "page" || n.liveEntry === "publish") && {
      liveEntry: n.liveEntry
    },
    ...n.forceRefused === !0 && {
      forceRefused: !0
    }
  };
}

function Wne(e) {
  if (e && typeof e === "object" && "error" in e && typeof e.error === "string" && "reason" in e && typeof e.reason === "string") return {
    error: e.error,
    reason: e.reason
  };
  return null;
}

var c4t = "publish denied: ", _c = [ "compliance_restricted", "org_mismatch", "org_toggle_disabled", "summon_foreign_sender", "user_entitlement_denied", "write_gate_disabled" ], yc = [ "acl_unsupported", "artifact_limit_reached", "audience_conflict", "auto_edit_refused", "bad_json", "capability_refused", "cas_link_refused", "cmek_key_disabled", "content_pending", "content_refused", "content_too_large", "contract_refused", "credential_required", "database_org_cap", "database_too_large", "embeds_too_large", "external_sharing_disabled", "group_grant_forbidden", "instance_dup_unavailable", "instance_locked", "invalid_request", "invalid_slug", "live_doc", "live_over_budget", "live_path_cap", "live_path_delete", "live_refused", "multi_file_unavailable", "never_published", "not_found", "not_owner", "one_live_path", "origin_required", "owner_mode_only", "patch_no_base", "path_is_live", "pin_unsupported", "provision_conflict", "public_mode_disabled", "publish_settling", "rate_limited", "read_mode_refused", "read_timeout", "render_busy", "render_embeds_container", "render_over_budget", "render_unavailable", "soft_deleted", "soft_deleted_swept", "source_refused", "title_invalid", "too_many_concurrent", "type_cap_unavailable", "type_cross_org", "type_instances_off", "type_is_instance", "type_no_release", "type_single_file", "unknown_version", "write_conflict" ];

function Xs(e) {
  let n = gt(e), r = yc.find(s => s === n);
  return r ? {
    refusal_reason: c(r)
  } : {};
}

function Xt(e, n) {
  let r = typeof e === "string" ? e.trimEnd().replace(Mr, "") : Wne(e)?.error ?? f1(e);
  return _U(r, n);
}

var Js = /^capabilities\.([a-z][a-z0-9_]*)(?=[:. ])/;

function qi(e) {
  return /^contract[ :]/.test(e);
}

var wc = / is newer than the preferred /, Zs = /the artifact's type|built from an artifact type/, Sc = {
  capNames: [],
  hostDecl: !1
};

function Qs(e) {
  return Xn(yi(Ag(e.retryAfter)), e.reservedSlug !== void 0 ? Lm(e.reservedSlug) : void 0, e.refusedStep);
}

function ea(e, n) {
  let r = gt(n);
  return e === 429 && Jt(n) === void 0 && (r === "rate_limited" || r === "too_many_concurrent");
}

function sn(e, n) {
  return /[.!?]$/.test(e) ? `${e} ${n}` : `${e}. ${n}`;
}

function Ki(e, n) {
  let r = Js.exec(e)?.[1];
  if (r === void 0) return "Nothing was published; correct the declaration as described and publish again.";
  if (/: unavailable$/.test(e)) {
    if (!n.capNames.includes(r)) return `Nothing was published; an earlier version declares capabilities.${r}, it is not available to this account now, and a declaration that drops it cannot be stored \u2014 publish without a capabilities block to keep the stored set, or tell the user.`;
    return r === "mcp" && n.hostDecl ? "Nothing was published; the connectors declaration names locally-configured (host:) MCP servers, which this session cannot publish \u2014 declare only claude.ai connectors, or publish a version that does not call them." : `Nothing was published; capabilities.${r} is not available to this account here \u2014 publish a version that does not use it instead of retrying the same declaration.`;
  }
  if (e.includes("part of the runtime")) return `Nothing was published; drop capabilities.${r} \u2014 the runtime provides it without a declaration.`;
  return `Nothing was published; correct capabilities.${r} as described and publish again.`;
}

var xc = "Nothing was published. Only the artifact's owner can change who it is shared with (in its share settings on claude.ai), not this session \u2014 if the page can do without what the message names, publish a version without it; otherwise tell the user.", WVe = "the artifact you're updating was deleted, or you no longer have write access to it";

function wr(e) {
  return Et(`relay HTTP ${e}`);
}

var Rsr = "publish outcome unknown (";

function Et(e) {
  return `${Rsr}${e}) \u2014 it may have published; check the artifact list before publishing again`;
}

var u4t = "this file belongs to the artifact's type and can't be changed here";

function vr(e) {
  return f1(e).includes(u4t);
}

var Ec = " \u2014 this Artifact was created from an Artifact type: its page (index.html) and the type's other files can't be changed on it. Publish only its own files (`file_path` naming one, more in `files`, with this `url`); to change the page, publish a new Artifact instead.", ta = "Nothing was published and the Artifact is unchanged; retrying cannot help, so tell the user it can't be changed from this session", Ac = ` \u2014 this Artifact was created from an Artifact type and nothing can be published to it from this session: its page (index.html) and the type's other files can't be changed on it, and publishing its own files is not available. ${ta}.`, jXr = `this file can't be published: the Artifact being updated was created from an Artifact type, and no file or page can be published to it from this session. ${ta}`, WXr = "If the Artifact being updated was created from an Artifact type, that will be refused too, because nothing can be published to it from this session; in that case tell the user so.";

function Sr(e, n, r, s, h = !1, b = Sc, y = {}) {
  let w = Rc(e, n, r, s, h, b, y), S = Xs(n);
  return S.refusal_reason === void 0 ? w : {
    ...w,
    extra: {
      ...w.extra,
      ...S
    }
  };
}

function Rc(e, n, r, s, h, b, y) {
  let w = Tc(e, n, h);
  if (w !== void 0) return w;
  let S = gt(n);
  if (e === 400) {
    let P = f1(n);
    if (/^thumbnail/i.test(P.trimStart()) || j$e.test(P) && /["']thumbnail(?:_dark)?["']/.test(P)) return {
      code: "thumbnail_rejected",
      msg: `deploy 400: ${KE(n)}`
    };
  }
  if (Cn(e, n)) return {
    code: "publish_stranded"
  };
  if (e === 409 && S === "publish_settling") return {
    code: "publish_settling",
    msg: Et("the first attempt reached claude.ai and its content is still being stored")
  };
  if (e === 422 && gt(n) === "deadline_invalid") return {
    code: "deadline_invalid"
  };
  let x = e === 422 ? Xt(n, 300) : "";
  if (e === 422 && (S === "instance_locked" || vr(n) || Zs.test(x))) {
    let P = vr(n) || x.includes("publish its files with a manifest"), R = ee().frozenArtifactTypes?.typesOn;
    return {
      code: "type_locked",
      msg: `deploy 422: ${x}${!P || R === void 0 ? "" : R ? Ec : Ac}`
    };
  }
  if (e === 422 && S === "audience_conflict") return {
    code: "audience_conflict",
    msg: `deploy 422: ${sn(x, xc)}`
  };
  if (e === 422 && S === "capability_refused") {
    let P = Xt(n, 1500).split(/; (?=capabilities[.: ]|\d+ more\b)/).filter(Boolean), R = P.length > 1 && /^\d+ more\b/.test(P.at(-1)) ? P.pop() : void 0;
    if (P.length <= 1 && R === void 0) return {
      code: "capability_refused",
      msg: `deploy 422: ${sn(x, Ki(x, b))}`
    };
    let O = "", z = 0;
    for (let Z of P) {
      let C = O === "" ? Z : `${O}; ${Z}`;
      if (C.length > 600 && z > 0) break;
      O = C, z++;
    }
    let K = [ P.length > z ? `${P.length - z} more not shown` : "", R ?? "" ].filter(Boolean), F = D(P.filter(Z => /: unavailable$/.test(Z) && !b.capNames.includes(Js.exec(Z)?.[1] ?? "") || Z.startsWith("capabilities.mcp: unavailable") && b.hostDecl).map(Z => Ki(Z, b).replace(/^Nothing was published; /, "")));
    return {
      code: "capability_refused",
      msg: `deploy 422: ${sn([ O, ...K ].join("; "), [ "Nothing was published; fix each capabilities entry named \u2014 drop the unavailable ones, correct the others as described \u2014 and publish again.", ...F ].join(" Also: "))}`
    };
  }
  if (e === 422 && s === void 0 && b.latestContract === !0 && (S === "contract_refused" || S === void 0 && qi(x)) && wc.test(x)) return {
    code: "contract_rollout",
    msg: `deploy 422: ${sn(x, Jn)}`
  };
  if (e === 422 && s !== void 0 && (S === "contract_refused" || S === void 0 && qi(x))) return {
    code: "contract_echo_rejected",
    extra: {
      echo_declared_caps: s.declaredCaps
    },
    msg: `deploy ${e}: ${Xt(n, 200)} \u2014 this republish echoed the artifact's stored ` + `contract pin (${s.pin}) and nothing was published. If the reason above says the pin was yanked, pass contract: 'latest' to move the artifact to the current contract (this changes the page's runtime semantics); otherwise tell the user what the service said.`
  };
  if (e === 403 && S === "not_owner") return {
    code: "publish_denied",
    msg: `${c4t}this account can open the artifact but is not allowed to publish to it \u2014 nothing was published; ask its owner for edit access, or publish it as a new artifact (omit \`url\`).`
  };
  if (e === 403 && qXr(f1(n))) return {
    code: "ccr_credential_refused"
  };
  if (e === 403 && S !== "credential_required") {
    let P = Wne(n);
    if (P) {
      let R = _c.find(z => z === P.reason), O = R ? c(R) : void 0;
      return {
        code: "publish_denied",
        ...O && {
          extra: {
            deny_reason: O
          }
        },
        msg: c4t + _U(P.error, 300)
      };
    }
  }
  if (e === 404 && r && s3(n)) return {
    code: "slug_gone",
    msg: WVe
  };
  if (e === 429) {
    let P = Jt(n);
    if (P) return {
      code: "publish_cap_reached",
      extra: {
        cap_type: c(P.capType)
      },
      msg: `${P.message} \u2014 try again after the reset.`
    };
    if (ea(e, n) && y.created !== !0) return {
      code: "rate_limited",
      msg: Qs(y)
    };
  }
  if (e === 408 && S === "read_timeout") return {
    msg: `deploy 408: ${sn(Xt(n, 200), "Nothing was published; the server stopped waiting for the upload \u2014 retry once.")}`
  };
  return {};
}

function gt(e) {
  if (typeof e === "string") return Mr.exec(e.trimEnd())?.[1];
  if (e === null || typeof e !== "object" || !("reason" in e)) return;
  let n = e.reason;
  return typeof n === "string" && N6e.test(n) ? n : void 0;
}

var Mr = new RegExp(` \\[(${_Ts})\\]$`);

function na(e) {
  if (e === null || typeof e !== "object" || !("path" in e)) return;
  let n = e.path;
  return typeof n === "string" && rn.test(n) ? n : void 0;
}

function kc(e) {
  if (e === null || typeof e !== "object" || !("max" in e)) return;
  let n = e.max;
  return typeof n === "number" && Number.isSafeInteger(n) && n > 0 ? n : void 0;
}

function Tc(e, n, r) {
  let s = gt(n);
  if (e === 409 && s === "path_is_live") return {
    code: "path_is_live",
    msg: `deploy 409: ${KE(n)}`
  };
  if (e === 422 && s === "one_live_path") return {
    code: "one_live_path",
    msg: `deploy 422: ${KE(n)}`
  };
  if (e === 422 && s === "live_path_cap") {
    let h = kc(n);
    return {
      code: "live_path_cap",
      msg: `deploy 422: ${KE(n)}`
    };
  }
  if (e === 422 && s === "live_path_delete") return {
    code: "live_path_delete",
    msg: `deploy 422: ${KE(n)}`
  };
  if (e === 422 && s === "render_over_budget") return {
    code: "live_over_budget",
    msg: `deploy 422: ${KE(n)}`
  };
  if (e === 422 && s === "render_unavailable") return {
    code: "render_unavailable",
    msg: `deploy 422: ${KE(n)}`
  };
  if (e === 422 && s === "live_over_budget") return {
    code: "live_over_budget",
    msg: typeof n === "string" ? `deploy 422: ${_U(n.trimEnd().replace(Mr, ""), 500)}` : `deploy 422: ${Xt(n, 500)}`
  };
  if (e === 422 && typeof n === "string" && Pc.test(n)) return {
    code: "live_over_budget",
    msg: `deploy 422: ${_U(n, 500)}`
  };
  if (e === 503 && s === "render_busy") return {
    code: "render_busy",
    msg: `deploy 503: ${KE(n)}`
  };
  return;
}

var Pc = /exceeds the live-editing budget/;

function Xi(e, n) {
  return `deploy 400: ${_U(e, 200)}`;
}

function xr(e) {
  return `deploy 400: ${_U(e, 200)}`;
}

function Er(e, n) {
  return !1;
}

function Ji(e, n) {
  return n.liveKey && ic.test(e) || n.emptyPatch && ac.test(e);
}

function KE(e) {
  return _U(f1(e), 200);
}

export { XL, LEt, gye, zqt, Gqt, aXr, lZo, csr, hye, lXr, RAn, dZo, xAn, cZo, uZo, NEt, usr, dXr, $Et, Vqt, psr, Kqt, qqt, Yqt, Xqt, cXr, Jqt, $Ve, PAn, Rnt, pZo, fsr, uXr, IAn, FEt, OAn, FVe, Qqt, sAe, fZo, UVe, VE, pXr, d5s, UEt, Zqt, Qle, fXr, mXr, msr, gsr, hsr, BVe, BEt, mZo, ysr, MAn, gZo, Hf, hZo, e4t, F2, ed, yZo, gXr, HAn, _sr, rQ, Df, RB, xnt, hXr, yye, DM, n0e, yXr, _Xr, bXr, Zle, ede, jEt, r3, Bne, SXr, wXr, tde, _ye, xB, t4t, nde, r0e, n4t, oQ, vXr, EXr, DAn, kXr, TXr, r4t, WEt, o4t, zEt, Pnt, s4t, o0e, bsr, Int, i4t, jne, jVe, AXr, LAn, NAn, Ssr, Kx, CXr, $An, a4t, RXr, xXr, PXr, IXr, OXr, wsr, vsr, GEt, Esr, bye, Sye, ksr, o3, VEt, Tsr, FAn, MXr, HXr, DXr, Lm, Ont, UAn, l4t, Asr, KEt, LXr, NXr, $Xr, FXr, d4t, qEt, Csr, UXr, BXr, Wne, c4t, WVe, Rsr, u4t, jXr, WXr, KE };
