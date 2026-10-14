// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { Ce, ce } from "./chunk-xywp7esx.js";

import { Pe } from "./chunk-7w995nyx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { i } from "./chunk-hedpgw9m.js";

import { yo, kin, Fve, Imt, dS, uA } from "./chunk-q6wab2jw.js";

import { ie } from "./chunk-yxennhe9.js";

import { s, n, ma, qr } from "./chunk-3vw306fv.js";

import { ms } from "./chunk-zzj636ts.js";

import { te } from "./chunk-48xcyvwy.js";

import { Se } from "./chunk-sebqm9p5.js";

import { G } from "./chunk-j706jx8h.js";

import { nn } from "./chunk-ytac37d4.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { ct } from "./chunk-qk83zz02.js";

import { GC } from "./chunk-62430yz1.js";

import { os } from "./chunk-wwjrcnvz.js";

import { id } from "./chunk-0ypdmr94.js";

import { lB } from "./chunk-7wy5hhd8.js";

import { Dg } from "./chunk-81s9fscg.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { q_t } from "./chunk-kb4jemvz.js";

import { Z, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function Jo(R) {
  return R.split(`\n`).map(Ve);
}

function Go(C, A) {
  return e(n, {
    color: C.color,
    children: C.text
  }, A);
}

function Xo(k, U) {
  return e(n, {
    dimColor: k.dim,
    children: k.segments.map(Go)
  }, U);
}

function Qo() {
  return [];
}

function Wo(Ae, de) {
  return Ae.x - de.x;
}

function Zo(E, Oe) {
  let M = 0;
  return e(s, {
    height: 1,
    children: E.map((N, K) => {
      let Ue = Math.max(0, N.x - M);
      return M = Math.max(M, N.x) + 1, r(n, {
        children: [ " ".repeat(Ue), e(n, {
          color: N.color,
          children: N.char
        }) ]
      }, K);
    })
  }, Oe);
}

function Oo(d) {
  return (d + 1) % J.length;
}

var j = 3e3, V = 48, Y = 3;

function q(p) {
  let u = w(10), {live: t, boxRef: a, children: o} = p, l;
  if (u[0] !== o) l = e(s, {
    flexDirection: "column",
    width: V - 4,
    height: Y,
    children: o
  }), u[0] = o, u[1] = l; else l = u[1];
  const x = !t, g = t ? "claude" : void 0, h = t ? `${uA} try it` : `  ${kin} demo`;
  let f;
  if (u[2] !== x || u[3] !== g || u[4] !== h) f = e(s, {
    position: "absolute",
    marginLeft: V - 12,
    children: e(n, {
      dimColor: x,
      color: g,
      children: h
    })
  }), u[2] = x, u[3] = g, u[4] = h, u[5] = f; else f = u[5];
  let b;
  if (u[6] !== a || u[7] !== l || u[8] !== f) b = r(s, {
    ref: a,
    borderStyle: "round",
    borderColor: "inactive",
    paddingX: 1,
    width: V,
    height: Y + 2,
    children: [ l, f ]
  }), u[6] = a, u[7] = l, u[8] = f, u[9] = b; else b = u[9];
  return b;
}

var io = /\[(\w+):([^\]]*)\]/g;

function Ve(p) {
  let t = p.startsWith("#"), a = t ? p.slice(1) : p, o = [], u = 0;
  for (let l of a.matchAll(io)) {
    if (l.index > u) o.push({
      text: a.slice(u, l.index)
    });
    o.push({
      text: l[2],
      color: l[1]
    }), u = l.index + l[0].length;
  }
  if (u < a.length) o.push({
    text: a.slice(u)
  });
  if (o.length === 0) o.push({
    text: ""
  });
  return {
    dim: t,
    segments: o
  };
}

function v(p) {
  let b = w(4), {frames: t} = p, a = t.map(Jo), o = Dg(id().prefersReducedMotion), [u, l] = ma(o ? null : j), x = Math.floor(l / j) % a.length, g = a[x];
  const h = q, f = g.map(Xo);
  let d;
  if (b[0] !== h || b[1] !== u || b[2] !== f) d = e(h, {
    boxRef: u,
    children: f
  }), b[0] = h, b[1] = u, b[2] = f, b[3] = d; else d = b[3];
  return d;
}

var J = [ {
  label: "default",
  symbol: "",
  color: "text"
}, {
  label: "accept edits on",
  symbol: Imt,
  color: "autoAccept"
}, {
  label: "plan mode on",
  symbol: Fve,
  color: "planMode"
}, {
  label: "auto mode on",
  symbol: Imt,
  color: "warning"
} ], X = 80, qe = 60, Q = 1400, L = 16, ze = 60, Te = 100, go = [ uA, dS, yo, "\xb7" ], xo = [ "claude", "success", "warning", "suggestion", "autoAccept" ];

function Ke(p) {
  let t = [];
  for (let a = 0; a < p; a++) t.push({
    x: Math.floor(Math.random() * Te),
    delay: Math.random() * 400,
    speed: .7 + Math.random() * .6,
    char: lB(go),
    color: lB(xo)
  });
  return t;
}

function H(p) {
  let a = w(6), {onDone: t} = p, o;
  if (a[0] === S) o = Ke(40), a[0] = o; else o = a[0];
  let u = o, l = Dg(id().prefersReducedMotion), [x, g] = ma(l ? null : qe), [h] = y(g), f = g - h, b;
  if (a[1] !== t) b = [ t ], a[1] = t, a[2] = b; else b = a[2];
  qr(t, Q + 600, b);
  let d;
  if (a[3] !== f || a[4] !== x) {
    let R = Array.from({
      length: L
    }, Qo);
    for (const C of u) {
      let A = Math.max(0, f - C.delay);
      let k = Math.floor(A / Q * L * C.speed);
      if (k >= 0 && k < L) R[k].push(C);
    }
    for (const U of R) U.sort(Wo);
    d = e(s, {
      ref: x,
      position: "absolute",
      marginLeft: ze,
      flexDirection: "column",
      width: Te,
      height: L,
      children: R.map(Zo)
    });
    a[3] = f, a[4] = x, a[5] = d;
  } else d = a[5];
  return d;
}

function ee(p) {
  let h = w(14), {text: t} = p, a = ie(t), o = Dg(id().prefersReducedMotion), [u, l] = ma(o ? null : X), x = a + 20, g = Math.floor(l / X) % x - 10, f;
  if (h[0] !== g || h[1] !== t) f = q_t(t, g), h[0] = g, h[1] = t, h[2] = f; else f = h[2];
  let {before: b, shimmer: d, after: R} = f, C;
  if (h[3] !== b) C = e(n, {
    bold: !0,
    color: "claude",
    children: b
  }), h[3] = b, h[4] = C; else C = h[4];
  let A;
  if (h[5] !== d) A = e(n, {
    bold: !0,
    color: "claudeShimmer",
    children: d
  }), h[5] = d, h[6] = A; else A = h[6];
  let k;
  if (h[7] !== R) k = e(n, {
    bold: !0,
    color: "claude",
    children: R
  }), h[7] = R, h[8] = k; else k = h[8];
  let U;
  if (h[9] !== u || h[10] !== C || h[11] !== A || h[12] !== k) U = r(s, {
    ref: u,
    children: [ C, A, k ]
  }), h[9] = u, h[10] = C, h[11] = A, h[12] = k, h[13] = U; else U = h[13];
  return U;
}

function oe() {
  let u = w(11), [p, t] = y(0), a = J[p], o = ms("confirm:cycleMode", "Confirmation", "shift+tab"), l, x;
  if (u[0] === S) l = {
    "confirm:cycleMode": () => t(Oo)
  }, x = {
    context: "Confirmation"
  }, u[0] = l, u[1] = x; else l = u[0], x = u[1];
  nn(l, x);
  let g;
  if (u[2] !== o) g = r(n, {
    dimColor: !0,
    children: [ "Press ", o, " now", `\n\n` ]
  }), u[2] = o, u[3] = g; else g = u[3];
  const h = a.symbol ? `${a.symbol} ` : "  ";
  let f;
  if (u[4] !== a.color || u[5] !== a.label || u[6] !== h) f = r(n, {
    color: a.color,
    children: [ h, a.label ]
  }), u[4] = a.color, u[5] = a.label, u[6] = h, u[7] = f; else f = u[7];
  let b;
  if (u[8] !== g || u[9] !== f) b = e(q, {
    live: !0,
    children: r(n, {
      children: [ g, f ]
    })
  }), u[8] = g, u[9] = f, u[10] = b; else b = u[10];
  return b;
}

function B(p) {
  let a = w(2), {children: t} = p, o;
  if (a[0] !== t) o = e(n, {
    bold: !0,
    color: "claude",
    children: t
  }), a[0] = t, a[1] = o; else o = a[1];
  return o;
}

function m(p) {
  let a = w(2), {children: t} = p, o;
  if (a[0] !== t) o = e(n, {
    color: "suggestion",
    children: t
  }), a[0] = t, a[1] = o; else o = a[1];
  return o;
}

var wM = [ {
  id: "at-mentions",
  title: "Talk to your codebase",
  tagline: "@ files, line refs",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "Type ", e(B, {
        children: "@"
      }), " anywhere in your prompt to fuzzy-find and attach a file. Claude reads it before answering \u2014 no more pasting code." ]
    }), e(v, {
      frames: [ `> what does [suggestion:@]\n#type a file name\u2026`, `> what does [suggestion:@src/auth.ts]\n  [suggestion:\u276f src/auth.ts]\n#   src/auth.test.ts`, `> what does [suggestion:@src/auth.ts] do?\n#\u25d0 Reading src/auth.ts\u2026`, `> what does [suggestion:@src/auth.ts] do?\nExports validateToken() which\nchecks JWT expiry and signature.` ]
    }), r(n, {
      children: [ "Reference specific lines with ", e(m, {
        children: "src/app.ts:42"
      }), " and Claude jumps straight there. Works in both directions: Claude cites files the same way, so you can click to open them in your editor." ]
    }), r(n, {
      dimColor: !0,
      children: [ "Also try: ", e(m, {
        children: "@folder/"
      }), " to attach a whole directory tree." ]
    }) ]
  })
}, {
  id: "modes",
  title: "Steer with modes",
  tagline: "shift+tab, plan, auto",
  body: e($e, {})
}, {
  id: "undo",
  title: "Undo anything",
  tagline: "/rewind, Esc-Esc",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "Claude checkpoints your files before every edit. Press", " ", e(B, {
        children: "Esc Esc"
      }), " (double-tap) to open ", e(m, {
        children: "/rewind"
      }), " and roll back to any prior state \u2014 code, conversation, or both." ]
    }), e(v, {
      frames: [ `[success:\u2713] Updated regex in parser.ts\n#[error:8 tests failing]`, `#press Esc Esc\nRewind to:\n  [suggestion:\u276f before parser.ts edit]`, `#[success:\u2713] parser.ts restored\n> try a simpler approach\n#\u25d0 thinking\u2026` ]
    }), e(n, {
      children: "Went down the wrong path? Rewind to before the detour and try a different prompt. Your git history stays clean."
    }), r(n, {
      dimColor: !0,
      children: [ "Also: ", e(m, {
        children: "/clear"
      }), " wipes conversation but keeps files.", " ", e(m, {
        children: "/branch"
      }), " forks the conversation to try two approaches." ]
    }) ]
  })
}, {
  id: "background",
  title: "Run in the background",
  tagline: "tasks, /tasks",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "Long builds and test suites do not have to block you. Add", " ", e(B, {
        children: "&"
      }), " to any bash command and it runs in the background \u2014 you keep chatting, Claude notifies you when it finishes." ]
    }), e(v, {
      frames: [ `> run the test suite [claude:&]\n#task started in background`, `> now fix the lint in app.ts\n#\u25d0 Editing app.ts\u2026\n#[warning:\u25d0] bun test \xb7 12s`, `> now fix the lint in app.ts\n[success:\u2713] Removed unused import\n#[warning:\u25d0] bun test \xb7 28s`, `> now fix the lint in app.ts\n[success:\u2713] Removed unused import\n#[success:\u2713] bun test \xb7 284 pass` ]
    }), r(n, {
      children: [ "Run ", e(m, {
        children: "/tasks"
      }), " to see everything in flight. Claude can read task output mid-run and react to failures automatically." ]
    }), e(n, {
      dimColor: !0,
      children: "Subagents also run as tasks \u2014 it is all one queue."
    }) ]
  })
}, {
  id: "memory",
  title: "Teach Claude your rules",
  tagline: "CLAUDE.md, /memory",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "Drop a ", e(m, {
        children: "CLAUDE.md"
      }), " file in your repo and Claude reads it at the start of every session. Put your conventions there: test commands, style rules, do-not-touch directories." ]
    }), e(v, {
      frames: [ `#\u2500 CLAUDE.md \u2500\n#Run tests with: [suggestion:bun test]\n#Never edit src/legacy/`, `> add tests for the cache\n#\u25d0 reading CLAUDE.md\u2026`, `> add tests for the cache\nWriting cache.test.ts,\nrunning [suggestion:bun test] to verify.` ]
    }), r(n, {
      children: [ "Run ", e(m, {
        children: "/init"
      }), " to generate a starter CLAUDE.md from your codebase. Run ", e(m, {
        children: "/memory"
      }), " to edit it inline." ]
    }), e(n, {
      dimColor: !0,
      children: "Works at three levels: repo, your home directory (all projects), and per-directory overrides."
    }) ]
  })
}, {
  id: "mcp",
  title: "Extend with tools",
  tagline: "MCP, /mcp",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "MCP servers give Claude new tools: read your Slack, query your database, control your browser. Run ", e(m, {
        children: "/mcp"
      }), " to browse and connect servers." ]
    }), e(v, {
      frames: [ `> [suggestion:/mcp]\nConnected servers:\n  [success:\u2713] slack    [success:\u2713] github`, `> anything urgent in #eng?\n#\u25d0 [suggestion:slack] \xb7 reading channel\u2026`, `Boris posted about the merge\nfreeze. Also 3 PRs await\nyour review on github.` ]
    }), e(n, {
      children: 'Once connected, tools appear automatically \u2014 ask Claude to "check my calendar" or "search our Notion" and it just works.'
    }), r(n, {
      dimColor: !0,
      children: [ "From your shell:", " ", e(m, {
        children: "claude mcp add my-server -- npx some-mcp-pkg"
      }), " to wire one up without leaving the terminal." ]
    }) ]
  })
}, {
  id: "automate",
  title: "Automate your workflow",
  tagline: "skills, hooks",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "Save a prompt to ", e(m, {
        children: ".claude/skills/deploy/SKILL.md"
      }), " and it becomes ", e(m, {
        children: "/deploy"
      }), " \u2014 type it, Claude runs it. Run", " ", e(m, {
        children: "/skills"
      }), " to see what you have." ]
    }), e(v, {
      frames: [ `> [suggestion:/deploy] staging\n#\u25d0 skill: deploy`, `[success:\u2713] built\n[success:\u2713] tests pass\n#\u25d0 pushing to staging\u2026`, `[success:\u2713] deployed\n#[suggestion:staging.app.com]\n#PostToolUse hook ran prettier` ]
    }), r(n, {
      children: [ "Hooks run your own scripts on events: before a tool call, after a response, on session start. Use them to enforce rules, log activity, or inject context. Run ", e(m, {
        children: "/hooks"
      }), " to see what fires when." ]
    }), r(n, {
      dimColor: !0,
      children: [ "Run ", e(m, {
        children: "/install-github-app"
      }), " to let Claude review PRs when tagged." ]
    }) ]
  })
}, {
  id: "subagents",
  title: "Multiply yourself",
  tagline: "subagents",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ e(n, {
      children: 'Claude can spawn copies of itself to work in parallel. Ask it to "use subagents to search these 5 directories" and watch the fan-out.'
    }), e(v, {
      frames: [ `> find any error handling bugs\n#\u25d0 Spawning 3 agents\u2026`, `#[warning:\u25d0] agent-1 \xb7 scanning api\n#[warning:\u25d0] agent-2 \xb7 scanning utils\n#[warning:\u25d0] agent-3 \xb7 scanning cli`, `#[success:\u2713] agent-1 \xb7 found reject\n#[warning:\u25d0] agent-2 \xb7 scanning utils\n#[success:\u2713] agent-3 \xb7 no issues`, `Found 2 issues:\n  [suggestion:api/fetch.ts:42] unhandled\n  [suggestion:utils/retry.ts:18] swallowed` ]
    }), r(n, {
      dimColor: !0,
      children: [ "Subagents run in isolated context. For true parallel sessions on separate branches, launch with ", e(m, {
        children: "claude --worktree"
      }), "." ]
    }) ]
  })
}, {
  id: "cross-device",
  title: "Code from anywhere",
  tagline: "/remote-control, /teleport",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "Run ", e(m, {
        children: "/remote-control"
      }), " to take this session with you and pick up right where you left off on any device. Open the Code tab in the Claude mobile app, or visit claude.ai/code in a browser. The session keeps running on this machine while your other devices act as a remote control." ]
    }), e(v, {
      frames: [ `> [suggestion:/remote-control]\n#\u25d0 connecting\u2026`, `[success:\u2713] connected\nsee this session at\n[suggestion:claude.ai/code/abc123]`, `#\u2500 on your phone \u2500\n#abc123 \xb7 running tests\n[warning:\u25d0] 142 of 284`, `#\u2500 on your phone \u2500\n#abc123 \xb7 [success:\u2713] all pass\n> ship it` ]
    }), r(n, {
      children: [ "Run ", e(m, {
        children: "/teleport"
      }), " to move a session between here and the cloud \u2014 send this one up to keep it going after you close the lid, or pull a cloud session into this terminal with full history." ]
    }), e(n, {
      dimColor: !0,
      children: "Kick off a long task, close your laptop, check progress from your phone."
    }) ]
  })
}, {
  id: "model-dial",
  title: "Dial the model",
  tagline: "/model, /effort",
  body: r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(n, {
      children: [ "Run ", e(m, {
        children: "/model"
      }), " to switch models. Fable for the hardest problems, Opus for complex work, Sonnet for most tasks, Haiku for quick questions. Each trades speed for depth." ]
    }), e(v, {
      frames: [ `> [suggestion:/effort] high\n#effort set to [claude:high]`, `> why is the list page slow?\n#[claude:\u25d0 thinking deeply\u2026]`, `Three hypotheses, ranked:\n 1. N+1 query in loader\n 2. missing index on users` ]
    }), r(n, {
      children: [ e(m, {
        children: "/effort"
      }), " controls how long Claude thinks before answering.", " ", e(B, {
        children: "high"
      }), " for tricky bugs, ", e(B, {
        children: "low"
      }), " when you just need a quick edit." ]
    }), r(n, {
      dimColor: !0,
      children: [ "Also: ", e(m, {
        children: "/fast"
      }), " toggles fast mode \u2014 same model, faster output." ]
    }) ]
  })
} ];

function ne() {
  let p = w(1), t;
  if (p[0] === S) t = e(n, {
    dimColor: !0,
    italic: !0,
    children: r(Se, {
      children: [ e(G, {
        chord: [ "up", "down" ],
        action: "select"
      }), e(G, {
        chord: "enter",
        action: "open"
      }), e(G, {
        chord: "escape",
        action: "close"
      }) ]
    })
  }), p[0] = t; else t = p[0];
  return t;
}

function se() {
  let p = w(1), t;
  if (p[0] === S) t = e(n, {
    dimColor: !0,
    italic: !0,
    children: r(Se, {
      children: [ e(G, {
        chord: "enter",
        action: "mark done"
      }), e(G, {
        chord: "escape",
        action: "back"
      }) ]
    })
  }), p[0] = t; else t = p[0];
  return t;
}

function $e() {
  let p = w(9), t, a;
  if (p[0] === S) t = r(n, {
    children: [ "Press ", e(B, {
      children: "shift+tab"
    }), " to cycle permission modes. Each mode changes how much Claude asks before acting:" ]
  }), a = e(oe, {}), p[0] = t, p[1] = a; else t = p[0], a = p[1];
  let o;
  if (p[2] === S) o = r(n, {
    children: [ e(n, {
      color: "success",
      children: "default"
    }), " \u2014 ask before every edit" ]
  }), p[2] = o; else o = p[2];
  let u;
  if (p[3] === S) u = r(n, {
    children: [ e(n, {
      color: "autoAccept",
      children: "accept edits"
    }), " \u2014 edit freely, ask for commands" ]
  }), p[3] = u; else u = p[3];
  let l;
  if (p[4] === S) l = r(n, {
    children: [ e(n, {
      color: "planMode",
      children: "plan"
    }), " \u2014 research and propose, never touch files" ]
  }), p[4] = l; else l = p[4];
  let x;
  if (p[5] === S) x = r(s, {
    flexDirection: "column",
    paddingLeft: 2,
    children: [ o, u, l, r(n, {
      children: [ e(n, {
        color: "warning",
        children: "auto"
      }), " \u2014 Claude decides what is safe" ]
    }) ]
  }), p[5] = x; else x = p[5];
  let g;
  if (p[6] === S) g = e(n, {
    color: "planMode",
    children: "plan"
  }), p[6] = g; else g = p[6];
  let h;
  if (p[7] === S) h = e(n, {
    color: "warning",
    children: "auto"
  }), p[7] = h; else h = p[7];
  let f;
  if (p[8] === S) f = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ t, a, x, r(n, {
      dimColor: !0,
      children: [ "Use ", g, " for big refactors you want to review first. Use ", h, " for long unattended tasks. Run ", e(m, {
        children: "/permissions"
      }), " to pre-allow specific commands so Claude stops asking about them." ]
    }) ]
  }), p[8] = f; else f = p[8];
  return f;
}

F();

function kt(Rt) {
  return wM.some(Tt => Tt.id === Rt);
}

function wt() {
  let Pt = ce().powerupsUnlocked ?? [];
  return new Set(Pt.filter(kt));
}

function gyt(p) {
  let d = w(48), {onExit: t} = p, {storageV5: a} = Pe(), [o, u] = y(wt), [l, x] = y(null), [g, h] = y(wM[0].id), [f, b] = y(!1), R;
  if (d[0] === S) R = () => b(!1), d[0] = R; else R = d[0];
  let C = R, A;
  if (d[1] !== o) A = function U(k) {
    h(k.id), x(k), i("tengu_powerup_lesson_opened", {
      lesson_id: c(k.id),
      was_already_unlocked: o.has(k.id),
      unlocked_count: o.size
    });
  }, d[1] = o, d[2] = A; else A = d[2];
  let U = A, Ae;
  if (d[3] !== a || d[4] !== o) Ae = function M(de) {
    if (o.has(de)) {
      return;
    }
    let E = new Set(o).add(de);
    if (u(E), Ce(Oe => ({
      ...Oe,
      powerupsUnlocked: [ ...E ]
    }), a), i("tengu_powerup_lesson_completed", {
      lesson_id: c(de),
      unlocked_count: E.size,
      all_unlocked: E.size === wM.length
    }), E.size === wM.length) b(!0);
  }, d[3] = a, d[4] = o, d[5] = Ae; else Ae = d[5];
  let M = Ae, N;
  if (d[6] !== o) N = wM.map(K => {
    let Ue = o.has(K.id);
    let He = `${Ue ? te.tick : te.circle} ${K.title}`;
    return {
      label: Ue ? e(n, {
        color: "success",
        children: He
      }) : He,
      value: K.id,
      description: K.tagline
    };
  }), d[6] = o, d[7] = N; else N = d[7];
  let Me = N;
  if (l) {
    let P;
    if (d[8] !== o || d[9] !== l.id) P = o.has(l.id), d[8] = o, d[9] = l.id, d[10] = P; else P = d[10];
    let D;
    if (d[11] !== M || d[12] !== l.id) D = () => {
      M(l.id), x(null);
    }, d[11] = M, d[12] = l.id, d[13] = D; else D = d[13];
    let _;
    if (d[14] === S) _ = () => x(null), d[14] = _; else _ = d[14];
    let I;
    if (d[15] !== P || d[16] !== D || d[17] !== l) I = e(Be, {
      lesson: l,
      isUnlocked: P,
      onDone: D,
      onBack: _
    }), d[15] = P, d[16] = D, d[17] = l, d[18] = I; else I = d[18];
    return I;
  }
  let ue = o.size === wM.length, P;
  if (d[19] !== ue) P = ue ? e(ee, {
    text: "All powered up"
  }) : e(n, {
    bold: !0,
    color: "claude",
    children: "Power-ups"
  }), d[19] = ue, d[20] = P; else P = d[20];
  let D;
  if (d[21] !== o.size) D = r(n, {
    dimColor: !0,
    children: [ " ", o.size, "/", wM.length, " unlocked", " " ]
  }), d[21] = o.size, d[22] = D; else D = d[22];
  const _ = o.size / wM.length;
  let I;
  if (d[23] !== _) I = e(GC, {
    ratio: _,
    width: 16,
    fillColor: "claude",
    emptyColor: "inactive"
  }), d[23] = _, d[24] = I; else I = d[24];
  let me;
  if (d[25] !== P || d[26] !== D || d[27] !== I) me = r(s, {
    marginBottom: 1,
    children: [ P, D, I ]
  }), d[25] = P, d[26] = D, d[27] = I, d[28] = me; else me = d[28];
  const Ie = ue ? "Now go build something." : "Each power-up teaches one thing Claude Code can do that most people miss. Open one, read it, try it, mark it done.";
  let pe;
  if (d[29] !== Ie) pe = e(s, {
    marginBottom: 1,
    children: e(n, {
      dimColor: !0,
      wrap: "wrap",
      children: Ie
    })
  }), d[29] = Ie, d[30] = pe; else pe = d[30];
  let fe;
  if (d[31] !== U) fe = Ct => {
    let eo = wM.find(vt => vt.id === Ct);
    if (eo) U(eo);
  }, d[31] = U, d[32] = fe; else fe = d[32];
  let he;
  if (d[33] !== t) he = () => t("Power-ups closed"), d[33] = t, d[34] = he; else he = d[34];
  let ge;
  if (d[35] !== Me || d[36] !== g || d[37] !== fe || d[38] !== he) ge = e(Xe, {
    options: Me,
    hideIndexes: !0,
    visibleOptionCount: wM.length,
    defaultFocusValue: g,
    onChange: fe,
    onCancel: he
  }), d[35] = Me, d[36] = g, d[37] = fe, d[38] = he, d[39] = ge; else ge = d[39];
  let oo;
  if (d[40] === S) oo = e(s, {
    marginTop: 1,
    children: e(ne, {})
  }), d[40] = oo; else oo = d[40];
  let ye;
  if (d[41] !== f) ye = f && e(H, {
    onDone: C
  }), d[41] = f, d[42] = ye; else ye = d[42];
  let to;
  if (d[43] !== pe || d[44] !== ge || d[45] !== ye || d[46] !== me) to = e(os, {
    color: "claude",
    children: r(s, {
      flexDirection: "column",
      children: [ me, pe, ge, oo, ye ]
    })
  }), d[43] = pe, d[44] = ge, d[45] = ye, d[46] = me, d[47] = to; else to = d[47];
  return to;
}

function Be(p) {
  let l = w(15), {lesson: t, isUnlocked: a, onDone: o, onBack: u} = p, x;
  if (l[0] !== u || l[1] !== o) x = {
    "confirm:yes": o,
    "confirm:no": u
  }, l[0] = u, l[1] = o, l[2] = x; else x = l[2];
  let g;
  if (l[3] === S) g = {
    context: "Confirmation"
  }, l[3] = g; else g = l[3];
  nn(x, g);
  const h = a ? "success" : "pending";
  let f;
  if (l[4] !== h) f = e(ct, {
    status: h,
    withSpace: !0
  }), l[4] = h, l[5] = f; else f = l[5];
  let b;
  if (l[6] !== t.title) b = e(n, {
    bold: !0,
    color: "claude",
    children: t.title
  }), l[6] = t.title, l[7] = b; else b = l[7];
  let d;
  if (l[8] !== f || l[9] !== b) d = r(s, {
    children: [ f, b ]
  }), l[8] = f, l[9] = b, l[10] = d; else d = l[10];
  let R;
  if (l[11] === S) R = e(se, {}), l[11] = R; else R = l[11];
  let C;
  if (l[12] !== t.body || l[13] !== d) C = e(os, {
    color: "claude",
    children: r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ d, t.body, R ]
    })
  }), l[12] = t.body, l[13] = d, l[14] = C; else C = l[14];
  return C;
}

export { wM, gyt };
