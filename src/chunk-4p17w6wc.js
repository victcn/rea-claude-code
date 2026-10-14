// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { zr } from "./chunk-b0z4bv3v.js";

import { un } from "./chunk-y752zmas.js";

import { z } from "./chunk-bmq0vae0.js";

import { a } from "./chunk-j016gcgm.js";

import { Y, t } from "./chunk-kawq2919.js";

import { Ct, GU } from "./chunk-6ah1819r.js";

import { YS, Dw } from "./chunk-w4hwgefc.js";

import { ml, Sn, al, oa, $0, k } from "./chunk-xywp7esx.js";

import { bqn } from "./chunk-nc0jxmkt.js";

import { pk } from "./chunk-ewk363e4.js";

import { RE } from "./chunk-gkzapwcq.js";

import { Yg } from "./chunk-eha3vdmz.js";

import m from "ws";

var R = '{"type":"KeepAlive"}', U = '{"type":"CloseStream"}', L = "/api/ws/speech_to_text/voice_stream", F = 8e3, x = {
  safety: 5e3,
  noData: 1500
};

function A(e, o, d) {
  return typeof e === "number" && Number.isInteger(e) && e >= o && e <= d ? String(e) : "unknown";
}

function D(e) {
  return zr(e)?.toLowerCase() ?? "unknown";
}

var N = 1500;

async function FKr() {
  if (Ct() || GU()) return "skipped_privacy";
  try {
    let e = await At.get(`${un().BASE_API_URL}/api/hello`, {
      headers: {
        "User-Agent": $0()
      },
      timeout: N,
      validateStatus: () => !0,
      maxRedirects: 0
    }), o = A(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${o}` : `http_${o}`;
  } catch (e) {
    let o = At.isAxiosError(e) ? e.code : void 0;
    return o === "ECONNABORTED" || o === "ETIMEDOUT" ? "timeout" : "fetch_failed";
  }
}

function B() {
  if (a.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) return !0;
  return k("tengu_brick_follow", !1);
}

function UKr() {
  if (!ml()) return !1;
  let e = Sn();
  return e !== null && e.accessToken !== null;
}

var H = 1024;

function j(e) {
  let o = new Set, d = [], u = 0;
  for (let C of e) {
    let p = C.replace(/,/g, " ").replace(/[^\x20-\x7E]/g, "").replace(/\s+/g, " ").trim();
    if (!p || o.has(p)) continue;
    let E = p.length + (d.length > 0 ? 1 : 0);
    if (u + E > H) break;
    o.add(p), d.push(p), u += E;
  }
  return d.join(",");
}

function W() {
  return;
}

async function BKr(e, o, d) {
  let u;
  if (z() && d !== void 0) await oa({
    credentials: d
  }), u = await al(d); else await oa(), u = Sn();
  if (!u?.accessToken) return t("[voice_stream] No OAuth token available"), null;
  let C = W() ?? un().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://"), p = B(), E = new URLSearchParams({
    encoding: "linear16",
    sample_rate: "16000",
    channels: "1",
    endpointing_ms: "300",
    utterance_end_ms: "1000",
    language: o?.language ?? "en",
    use_conversation_engine: "true",
    ...p && {
      forward_interims: "typed"
    }
  }), T = `${C}${L}?${E.toString()}`;
  t(`[voice_stream] Connecting to ${T}`);
  let I = {
    Authorization: `Bearer ${u.accessToken}`,
    "User-Agent": $0(),
    "x-app": "cli",
    "anthropic-client-platform": Yg()
  };
  if (o?.keyterms?.length) {
    let r = j(o.keyterms);
    if (r) I["x-config-keyterms"] = r;
  }
  let V = YS(), P = {
    headers: I,
    proxy: Dw(T),
    tls: V || void 0
  };
  bqn(T, m);
  let s = new m(T, P), f = null, y = !1, w = !1, S = !1, g = !1, O = !1, _ = null, v = null, b = {
    send(r) {
      if (s.readyState !== m.OPEN) return;
      if (S) {
        t(`[voice_stream] Dropping audio chunk after CloseStream: ${String(r.length)} bytes`);
        return;
      }
      t(`[voice_stream] Sending audio chunk: ${String(r.length)} bytes`), s.send(Buffer.from(r));
    },
    finalize() {
      if (g || S) return Promise.resolve("ws_already_closed");
      return g = !0, new Promise(r => {
        let c = setTimeout(() => _?.("safety_timeout"), x.safety), n = setTimeout(() => _?.("no_data_timeout"), x.noData);
        if (v = () => {
          clearTimeout(n), v = null;
        }, _ = i => {
          if (clearTimeout(c), clearTimeout(n), _ = null, v = null, l) {
            t(`[voice_stream] Promoting unreported interim before ${i} resolve`);
            let M = l;
            l = "", e.onTranscript(M, !0);
          }
          t(`[voice_stream] Finalize resolved via ${i}`), r(i);
        }, s.readyState === m.CLOSED || s.readyState === m.CLOSING) {
          _("ws_already_closed");
          return;
        }
        setTimeout(() => {
          if (S = !0, s.readyState === m.OPEN) t("[voice_stream] Sending CloseStream (finalize)"), 
          s.send(U);
        }, 0);
      });
    },
    close() {
      if (S = !0, f) clearInterval(f), f = null;
      if (y = !1, s.readyState === m.OPEN) s.close();
    },
    isConnected() {
      return y && s.readyState === m.OPEN;
    }
  };
  s.on("open", () => {
    t("[voice_stream] WebSocket connected"), y = !0, w = !0, t("[voice_stream] Sending initial KeepAlive"), 
    s.send(R), f = setInterval(r => {
      if (r.readyState === m.OPEN) t("[voice_stream] Sending periodic KeepAlive"), r.send(R);
    }, F, s), e.onReady(b);
  });
  let l = "";
  function h(r) {
    if (!l) return;
    t(`[voice_stream] Promoting unreported interim to final (${r})`);
    let c = l;
    l = "", e.onTranscript(c, !0);
  }
  return s.on("message", r => {
    let c = r.toString();
    t(`[voice_stream] Message received (${String(c.length)} chars)`);
    let n;
    try {
      n = Y(c);
    } catch {
      return;
    }
    switch (n.type) {
     case "TranscriptInterim":
     case "TranscriptText":
      {
        let i = n.data;
        if (t(`[voice_stream] ${n.type} (${String(i?.length ?? 0)} chars)`), S) v?.();
        if (i) l = i, e.onTranscript(i, !1);
        break;
      }

     case "TranscriptEndpoint":
      {
        t(`[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`);
        let i = l;
        if (l = "", i) e.onTranscript(i, !0);
        if (S) _?.("post_closestream_endpoint");
        break;
      }

     case "TranscriptError":
      {
        let i = n.description ?? n.error_code ?? "unknown transcription error";
        if (t(`[voice_stream] TranscriptError: ${i}`), h("TranscriptError"), !g) e.onError(i);
        break;
      }

     case "error":
      {
        let i = n.message ?? `unstructured error frame (keys: ${Object.keys(n).join(", ")})`;
        if (t(`[voice_stream] Server error: ${i}`), h("server error"), !g) e.onError(i);
        break;
      }

     default:
      break;
    }
  }), s.on("close", (r, c) => {
    let n = c?.toString() ?? "";
    if (t(`[voice_stream] WebSocket closed: code=${String(r)} reason="${n}"`), y = !1, 
    f) clearInterval(f), f = null;
    if (h("ws close"), _?.("ws_close"), !g && !O && r !== 1e3 && r !== 1005) e.onError(`Connection closed: code ${String(r)}${n ? ` \u2014 ${n}` : ""}`, w ? void 0 : {
      connectFailureCode: `ws_closed_${A(r, 1e3, 4999)}`
    });
    e.onClose();
  }), s.on("unexpected-response", (r, c) => {
    let n = c.statusCode ?? 0;
    if (n === 101) {
      t("[voice_stream] unexpected-response fired with 101; ignoring");
      return;
    }
    if (t(`[voice_stream] Upgrade rejected: status=${String(n)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`), 
    O = !0, c.resume(), r.destroy?.(), g) return;
    e.onError(`WebSocket upgrade rejected with HTTP ${String(n)}`, {
      fatal: n >= 400 && n < 500,
      connectFailureCode: c.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${A(n, 100, 599)}` : `upgrade_rejected_${A(n, 100, 599)}`
    });
  }), s.on("error", r => {
    if (t(`[voice_stream] WebSocket error: ${r.message}`, {
      level: "error"
    }), h("ws error"), !g) e.onError(`Voice stream connection error: ${r.message}`, w ? void 0 : {
      connectFailureCode: `ws_error_${D(r)}`
    });
  }), b;
}

export { FKr, UKr, BKr };
