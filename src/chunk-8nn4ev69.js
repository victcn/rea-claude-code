// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import { K } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import { tw } from "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import { Dl } from "./chunk-4dwgr3et.js";

import "./chunk-cqgvwwgb.js";

import { it } from "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import "./chunk-p35rdtee.js";

import { O } from "./chunk-1xnsr4dy.js";

import { spawn as m } from "child_process";

import { readFile as P } from "fs/promises";

import { homedir as b } from "os";

import { join as R } from "path";

var Y = R(b(), ".cache", "coder-audio", "port"), G = R(b(), ".cache", "coder-audio", "token");

class A {
  audioNapi=null;
  audioNapiPromise=null;
  arecordProbe=null;
  linuxAlsaCardsProbe=null;
  activeRecorder=null;
  activeForwardedSocket=null;
  forwardedStartGeneration=0;
  nativeRecordingActive=!1;
}

var u = new K(() => new A);

var p = {
  started: !0
};

var k = {
  started: !1,
  superseded: !1,
  hint: null,
  expected: !1
};

function f(e) {
  return e.audioNapiPromise ??= (async () => {
    let o = Date.now(), r = await import("./chunk-w5aw9ypx.js");
    return r.isNativeAudioAvailable(), e.audioNapi = r, t(`[voice] audio-capture-napi loaded in ${Date.now() - o}ms`), 
    r;
  })(), e.audioNapiPromise;
}

var v = 16e3, w = 1, D = "2.0", h = "3%";

async function c(e) {
  return (await it(e, [ "--version" ], {
    timeout: 3e3,
    useCwd: !1
  })).code === 0;
}

function x(e) {
  return e.arecordProbe ??= new Promise(o => {
    let r = m("arecord", [ "-f", "S16_LE", "-r", String(v), "-c", String(w), "-t", "raw", "/dev/null" ], {
      stdio: [ "ignore", "ignore", "pipe" ],
      windowsHide: !0
    }), s = "";
    r.stderr?.on("data", i => {
      s += i.toString();
    });
    let n = setTimeout((i, d) => {
      i.kill("SIGTERM"), d({
        ok: !0,
        stderr: ""
      });
    }, 150, r, o);
    r.once("close", i => {
      clearTimeout(n), o({
        ok: i === 0,
        stderr: s.trim()
      });
    }), r.once("error", () => {
      clearTimeout(n), o({
        ok: !1,
        stderr: "arecord: command not found"
      });
    });
  }), e.arecordProbe;
}

function g(e) {
  return e.linuxAlsaCardsProbe ??= P("/proc/asound/cards", "utf8").then(o => {
    let r = o.trim();
    return r !== "" && !r.includes("no soundcards");
  }, () => !1), e.linuxAlsaCardsProbe;
}

async function E() {
  if (await c("apt-get")) return {
    cmd: "sudo",
    args: [ "apt-get", "install", "-y", "sox" ],
    displayCommand: "sudo apt-get install sox"
  };
  if (await c("dnf")) return {
    cmd: "sudo",
    args: [ "dnf", "install", "-y", "sox" ],
    displayCommand: "sudo dnf install sox"
  };
  if (await c("pacman")) return {
    cmd: "sudo",
    args: [ "pacman", "-S", "--noconfirm", "sox" ],
    displayCommand: "sudo pacman -S sox"
  };
  return null;
}

async function me(e) {
  let o = u.of(e);
  if ((await f(o)).isNativeAudioAvailable() && await g(o)) return {
    available: !0,
    missing: [],
    installCommand: null
  };
  if (await c("arecord")) return {
    available: !0,
    missing: [],
    installCommand: null
  };
  let s = [];
  if (!await c("sox")) s.push("sox (rec command)");
  let n = s.length > 0 ? await E() : null;
  return {
    available: s.length === 0,
    missing: s,
    installCommand: n?.displayCommand ?? null
  };
}

async function ve(e) {
  if (!(await f(u.of(e))).isNativeAudioAvailable()) return !0;
  if ((await F(e, s => {}, () => {}, {
    silenceDetection: !1
  })).started) return N(e), !0;
  return !1;
}

async function we(e, o = {}) {
  if (tw() || a.CLAUDE_CODE_REMOTE) return {
    available: !1,
    reason: `Voice mode requires microphone access, but no audio device is available in this environment.\n\nTo use voice mode, run Claude Code locally instead.`
  };
  let r = u.of(e);
  if ((await f(r)).isNativeAudioAvailable() && await g(r)) return {
    available: !0,
    reason: null
  };
  let n = `Voice mode could not find a working audio recorder in WSL.\n\n` + `WSL2 with WSLg provides audio via PulseAudio \u2014 install SoX with its PulseAudio backend (sudo apt install sox libsox-fmt-pulse) so Claude Code can record through it.\n\n` + "If WSLg is not available (for example WSL1), run Claude Code in native Windows instead.";
  if (await c("arecord")) {
    let d = await x(r);
    if (d.ok) return {
      available: !0,
      reason: null
    };
    t(`[voice] arecord probe failed: ${d.stderr}`);
  }
  let i = await c("sox");
  if (i && await c("rec")) return {
    available: !0,
    reason: null
  };
  if (O() === "wsl") return {
    available: !1,
    reason: n
  };
  if (!i) {
    let d = await E();
    return {
      available: !1,
      reason: d ? `Voice mode requires SoX for audio recording. Install it with: ${d.displayCommand}` : `Voice mode requires SoX for audio recording. Install SoX manually:\n  macOS: brew install sox\n  Ubuntu/Debian: sudo apt-get install sox\n  Fedora: sudo dnf install sox`
    };
  }
  return {
    available: !1,
    reason: `Voice mode requires a microphone, but SoX could not open an audio capture device.\n\nThis usually means the host has no microphone (for example, a remote server). Run Claude Code on a machine with a microphone to use voice input.`
  };
}

async function F(e, o, r, s) {
  t("[voice] startRecording called, platform=linux");
  let n = u.of(e), i = await f(n), d = i.isNativeAudioAvailable() && await g(n), l = s?.silenceDetection !== !1;
  if (d) {
    if (n.nativeRecordingActive || i.isNativeRecordingActive()) i.stopNativeRecording(), 
    n.nativeRecordingActive = !1;
    if (i.startNativeRecording(S => {
      o(S);
    }, () => {
      if (l) n.nativeRecordingActive = !1, r();
    })) return n.nativeRecordingActive = !0, p;
  }
  if (await c("arecord") && (await x(n)).ok) return T(n, o, r) ? p : k;
  return C(n, o, r, s) ? p : k;
}

function C(e, o, r, s) {
  let n = s?.silenceDetection !== !1, i = [ "-q", "--buffer", "1024", "-t", "raw", "-r", String(v), "-e", "signed", "-b", "16", "-c", String(w), "-" ];
  if (n) i.push("silence", "1", "0.1", h, "1", D, h);
  let d = m("rec", i, {
    stdio: [ "pipe", "pipe", "pipe" ],
    windowsHide: !0,
    ...Dl("helper")
  });
  return e.activeRecorder = d, d.stdout?.on("data", l => {
    o(l);
  }), d.stderr?.on("data", () => {}), d.on("close", () => {
    e.activeRecorder = null, r();
  }), d.on("error", l => {
    t(`[voice] SoX rec spawn failed: ${l instanceof Error ? l.message : String(l)}`, {
      level: "error"
    }), e.activeRecorder = null, r();
  }), !0;
}

function T(e, o, r) {
  let s = [ "-f", "S16_LE", "-r", String(v), "-c", String(w), "-t", "raw", "-q", "-" ], n = m("arecord", s, {
    stdio: [ "pipe", "pipe", "pipe" ],
    windowsHide: !0,
    ...Dl("helper")
  });
  return e.activeRecorder = n, n.stdout?.on("data", i => {
    o(i);
  }), n.stderr?.on("data", () => {}), n.on("close", () => {
    e.activeRecorder = null, r();
  }), n.on("error", i => {
    t(`[voice] arecord recorder spawn error: ${i}`, {
      level: "error"
    }), e.activeRecorder = null, r();
  }), !0;
}

function N(e) {
  let o = u.of(e);
  if (o.nativeRecordingActive && o.audioNapi) {
    o.audioNapi.stopNativeRecording(), o.nativeRecordingActive = !1;
    return;
  }
  if (o.activeRecorder) o.activeRecorder.kill("SIGTERM"), o.activeRecorder = null;
}

export { we as checkRecordingAvailability, me as checkVoiceDependencies, ve as requestMicrophonePermission, F as startRecording, N as stopRecording };
