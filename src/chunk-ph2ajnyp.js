// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { Ye } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Ag } from "./chunk-3zb1ef23.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { wa } from "./chunk-vps0k559.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { jBe, Ya } from "./chunk-f1zpf9me.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { zen, ee } from "./chunk-kq1bg4dg.js";

import { EW, s3, YI, S4, FA, vc } from "./chunk-btyj9pkf.js";

import { ph } from "./chunk-ann91fyn.js";

import { eu } from "./chunk-z655gvmz.js";

import { hse } from "./chunk-hk8p0fqv.js";

import { hnt } from "./chunk-dbsb12yc.js";

import { GY } from "./chunk-bdevabaf.js";

import { S4r } from "./chunk-6hkfb588.js";

import { N9o } from "./chunk-jtgrm34s.js";

import { jke, Uyn } from "./chunk-36fnm9f8.js";

function iQn() {
  return GY() ? `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${hnt(!0)}` : "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one).";
}

function szr() {
  return Jr() && !YI();
}

var A = {
  ok: !1,
  reason: "relay-unavailable",
  status: 0,
  route: "relay",
  fromFrame: !1
};

function h(t) {
  return `Couldn't confirm the delete (the cloud relay failed: ${t}) \u2014 it may have gone through; check with action "list" before telling the user or trying again.`;
}

var R = 65536, w = 1e3, S = 1e4;

function C(t) {
  return typeof t === "string" ? t.trim() : "";
}

function p(t, n, s) {
  return {
    source: t.source === "tool" ? b("tool") : b("dialog"),
    route: s === "relay" ? b("relay") : b("direct"),
    ...t.sessionMinted !== void 0 && {
      session_minted: t.sessionMinted
    },
    ...t.ageSeconds !== void 0 && {
      age_s: t.ageSeconds
    },
    ...t.sinceUpdateSeconds !== void 0 && {
      since_update_s: t.sinceUpdateSeconds
    },
    ...n && {
      retried: !0
    }
  };
}

async function $yn(t, n, s) {
  let l = () => szr() ? Promise.resolve(A) : vc.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, {
    refreshOAuth: !0,
    headers: eu(),
    timeout: 15e3,
    maxContentLength: R,
    signal: s.signal,
    credentials: n
  }), e, c = !1;
  try {
    if (e = await l(), e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503)) {
      let r = e.response.headers?.["retry-after"], i = Math.min(Ag(typeof r === "string" ? r : void 0) ?? w, S);
      await J(i, s.signal, {
        abortError: () => new Ye
      }), c = !0, e = await l();
    }
  } catch (r) {
    if (wa(r) || r instanceof Ye || s.signal?.aborted) throw r;
    let i = FA(r);
    return m("artifact_delete", "request_error", p(s, c, i ? "relay" : "direct")), {
      err: i ? h("no answer") : "Couldn't delete the Artifact (network error)",
      reason: "request_error"
    };
  }
  let o = p(s, c, e.route);
  if (!e.ok) {
    if (e.reason === "relay-unavailable" || e.reason === "relay-not-served") return m("artifact_delete", e.reason.replace(/-/g, "_"), {
      ...o,
      status: e.status
    }), {
      err: iQn(),
      reason: "unavailable"
    };
    return m("artifact_delete", e.reason, o), {
      err: e.reason === "no-auth" ? ph(e.detail) : `Artifact delete unavailable: ${e.reason}`,
      reason: "unavailable"
    };
  }
  if (!e.fromFrame && (e.status < 200 || e.status >= 300)) return m("artifact_delete", "relay_error", {
    ...o,
    status: e.status
  }), {
    err: h(`HTTP ${e.status}`),
    reason: "http_failed",
    status: e.status
  };
  if (e.status === 404) {
    if (!s3(e.data)) return m("artifact_delete", "not_found_foreign", {
      ...o,
      status: 404
    }), {
      err: `Couldn't confirm the delete: the "not found" answer did not come from the Artifact service (a proxy or network edge may have answered), so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
      reason: "http_failed",
      status: 404
    };
    return f("artifact_delete", "not_found", o), {
      err: null,
      alreadyGone: !0
    };
  }
  if (e.status === 403) {
    let r = C(e.data);
    if (/^not owner\b/.test(r)) return f("artifact_delete", "not_owner", o), {
      err: "Only the Artifact's owner can delete it.",
      reason: "not_owner",
      status: 403
    };
    if (r.startsWith(EW)) return m("artifact_delete", "ccr_credential_refused", o), 
    {
      err: iQn(),
      reason: "unavailable",
      status: 403
    };
  }
  if (e.status < 200 || e.status >= 300) return m("artifact_delete", "http_failed", {
    ...o,
    status: e.status
  }), {
    err: e.status >= 500 ? `Couldn't confirm the delete (HTTP ${e.status}) \u2014 the Artifact may already be unreachable; retry once.` : `Couldn't delete the Artifact (HTTP ${e.status})`,
    reason: "http_failed",
    status: e.status
  };
  if (e.status !== 204 || e.route === "relay" && !S4(e)) return m("artifact_delete", "ok_foreign", {
    ...o,
    status: e.status
  }), {
    err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
    reason: "http_failed",
    status: e.status
  };
  return g("artifact_delete", o), {
    err: null,
    alreadyGone: !1
  };
}

function F(t, n) {
  let s = Object.keys(t.frameUrls), l = s.filter(u => Ya(t.frameUrls[u].url) !== n), e = t.artifactRefs?.filter(u => u.slug !== n), c = (e?.length ?? 0) !== (t.artifactRefs?.length ?? 0), o = t.artifactReadVersions !== void 0 && n in t.artifactReadVersions, r = t.artifactReadObservers !== void 0 && n in t.artifactReadObservers;
  if (l.length === s.length && !c && !o && !r) return t;
  let {[n]: i, ...y} = t.artifactReadVersions ?? {}, {[n]: D, ..._} = t.artifactReadObservers ?? {};
  return {
    ...t,
    frameUrls: Object.fromEntries(l.map(u => [ u, t.frameUrls[u] ])),
    ...c && {
      artifactRefs: e
    },
    ...o && {
      artifactReadVersions: y
    },
    ...r && {
      artifactReadObservers: _
    }
  };
}

function Hbt(t, n) {
  n.updateAppState(r => F(r, t));
  let {shareStatus: s, createdFromType: l, deferredSurface: e, remoteControlSkippedSlugs: c, coordinatorEditors: o} = ee();
  for (let [r, i] of s.filePathToSlug) if (i === t) hse(r);
  for (let [r, i] of l) if (i.slug === t) l.delete(r);
  if (e.delete(t), c.delete(t), zen(t, "page_gone"), o.delete(t), S4r(t, n.context), 
  ee().liveDocWatch.stop?.(t), N9o(t), a.CLAUDE_CODE_REMOTE || jke(t) !== void 0) Uyn({
    slug: t,
    context: n.context
  }).catch(d);
}

function izr(t) {
  return `<${jBe} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again \u2014 publishing the same file creates a new Artifact at a new URL. Do not pass this url to the Artifact tool.`;
}

export { iQn, szr, $yn, Hbt, izr };
