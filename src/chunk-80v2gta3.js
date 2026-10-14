// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lWe } from "./chunk-2v9tfgc3.js";

import "./chunk-zqby5cq4.js";

import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import "./chunk-3ykz5st8.js";

import { ml, Ce, ce } from "./chunk-xywp7esx.js";

import "./chunk-z52kmxx4.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import "./chunk-wptm3jf5.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-60c97a4m.js";

import "./chunk-30n0xq4e.js";

import "./chunk-rgd61mm3.js";

import "./chunk-r276nwd3.js";

import "./chunk-0cdqg49t.js";

import "./chunk-j90se18b.js";

import "./chunk-jkzenvsk.js";

import "./chunk-5brm0azz.js";

import "./chunk-8yperama.js";

import "./chunk-x5881pc6.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nnrb0acr.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-9btqc05b.js";

import { dt, Rn } from "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-07cck4g7.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-vps0k559.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-qqd24q2y.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-2my8wpr5.js";

import "./chunk-46phtgr7.js";

import "./chunk-y3nc3daq.js";

import "./chunk-mw643xee.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-0481pkch.js";

import "./chunk-g6nh65r0.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-3x03pnz9.js";

import "./chunk-n4eyr3t2.js";

import { Sf } from "./chunk-b47tzzqx.js";

import { aC } from "./chunk-9m7tdcn4.js";

import { Vb } from "./chunk-7etzs4d7.js";

import { AJt, Eat } from "./chunk-sqb9meyh.js";

import "./chunk-86k06k4p.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

var V = 2;

function L(s) {
  let e = s.trim().toLowerCase();
  if (e === "") return;
  if (e === "hold" || e === "tap" || e === "off") return e;
  return "invalid";
}

var D = async (s, e) => {
  if (!Eat()) {
    if (!ml()) return {
      type: "text",
      value: "Voice mode requires a Claude.ai account. Please run /login to sign in."
    };
    let o = Sf("allow_voice_mode", "Voice mode", "is");
    if (o) return aC("allow_voice_mode", "slash_command"), {
      type: "text",
      value: o
    };
    return {
      type: "text",
      value: "Voice mode is not available."
    };
  }
  let a = dt(), v = AJt(a), t = L(s);
  if (t === "invalid") return {
    type: "text",
    value: `Unknown mode: "${s.trim()}". Use hold, tap, or off.`
  };
  if (t === "off" || t === void 0 && v) {
    if ((await Rn("userSettings", {
      voiceEnabled: !1,
      voice: {
        ...a.voice,
        enabled: !1
      }
    }, void 0, e.storageV5)).error) return {
      type: "text",
      value: "Failed to update settings. Check your settings file for syntax errors."
    };
    return i("tengu_voice_toggled", {
      enabled: !1
    }), {
      type: "text",
      value: "Voice mode disabled."
    };
  }
  let {isVoiceStreamAvailable: y} = await import("./chunk-4xc72gbt.js"), {checkRecordingAvailability: h} = await import("./chunk-8nn4ev69.js"), r = await h(e.session.host, {
    probeForwarded: !0
  });
  if (!r.available) return {
    type: "text",
    value: r.reason ?? "Voice mode is not available in this environment."
  };
  if (!y()) return {
    type: "text",
    value: "Voice mode requires a Claude.ai account. Please run /login to sign in."
  };
  let {checkVoiceDependencies: b, requestMicrophonePermission: C} = await import("./chunk-8nn4ev69.js"), c = await b(e.session.host);
  if (!c.available) return {
    type: "text",
    value: `No audio recording tool found.${c.installCommand ? `\nInstall audio recording tools? Run: ${c.installCommand}` : `\nInstall SoX manually for audio recording.`}`
  };
  if (!await C(e.session.host)) {
    let o;
    return o = "your system's audio settings", {
      type: "text",
      value: `Microphone access is denied. To enable it, go to ${o}, then run /voice again.`
    };
  }
  let l = t === "hold" || t === "tap" ? t : a.voice?.mode ?? "hold";
  if ((await Rn("userSettings", {
    voiceEnabled: !0,
    voice: {
      ...a.voice,
      enabled: !0,
      mode: l
    }
  }, void 0, e.storageV5)).error) return {
    type: "text",
    value: "Failed to update settings. Check your settings file for syntax errors."
  };
  i("tengu_voice_toggled", {
    enabled: !0,
    tap_mode: l === "tap"
  });
  let g = Vb("voice:pushToTalk", "Chat", "space"), w = l === "tap" ? `Tap ${g} (with input empty) to start, tap again to send.` : `Hold ${g} to record.`, n = lWe(a.language), m = ce(), p = m.voiceLangHintLastLanguage !== n.code, f = p ? 0 : m.voiceLangHintShownCount ?? 0, u = !n.fellBackFrom && f < V, d = "";
  if (n.fellBackFrom) d = ` Note: "${n.fellBackFrom}" is not a supported dictation language; using English. Change it via /config.`; else if (u) d = ` Dictation language: ${n.code} (/config to change).`;
  if (p || u) await Ce(o => ({
    ...o,
    voiceLangHintShownCount: f + (u ? 1 : 0),
    voiceLangHintLastLanguage: n.code
  }), e.storageV5);
  let S = r.note ? ` ${r.note}` : "";
  return {
    type: "text",
    value: `Voice mode enabled (${l}). ${w}${d}${S}`
  };
};

export { D as call };
