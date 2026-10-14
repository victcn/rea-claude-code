// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function Za(e, t) {
  return {
    code: "InvalidArgument",
    argument: e,
    ...t !== void 0 && {
      reason: t
    }
  };
}

function edn(e = "unknown", t) {
  return {
    code: "Unavailable",
    failureClass: e,
    ...t?.key !== void 0 && {
      key: t.key
    },
    ...t?.retryAfterMs !== void 0 && {
      retryAfterMs: t.retryAfterMs
    },
    ...t?.telemetryCode !== void 0 && {
      telemetryCode: t.telemetryCode
    }
  };
}

var tdn = "OtherNames";

var ndn = "LeafMoved", NUs = "HardeningUnavailable", dDo = "RemoteLink", $Us = "AsideStranded";

var THr = "Unsupported";

function Qgt(e) {
  return yJe(e) && e.code === "Failed" && e.telemetryCode === THr;
}

var n = "ByteViewUnsupported";

function x$t(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === n;
}

var r = "StoreFenced";

function cDo(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === r;
}

var FUs = "SourceNotRegular", UUs = "SourceTooLarge", BUs = "SourceShared", jUs = "SourceOutside";

var o = new Set([ "InvalidArgument", "NotFound", "AlreadyExists", "PreconditionFailed", "LeaseHeld", "Unavailable", "Failed", "ScopeNotFound" ]);

function yJe(e) {
  return typeof e === "object" && e !== null && "code" in e && typeof e.code === "string" && o.has(e.code);
}

var uDo = "AbsentParent";

function _Je(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === uDo;
}

function Zf(e) {
  if (_Je(e)) return "ENOENT";
  return "telemetryCode" in e ? e.telemetryCode : void 0;
}

var WUs = "TooLarge";

function yt(e) {
  return e.code + ("failureClass" in e ? ` ${e.failureClass}` : "") + ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") + ("cause" in e && e.cause ? `: ${i(e.cause)}` : "");
}

function i(e) {
  return e instanceof Error ? e.message : String(e);
}

export { Za, edn, tdn, ndn, NUs, dDo, $Us, THr, Qgt, x$t, cDo, FUs, UUs, BUs, jUs, yJe, uDo, _Je, Zf, WUs, yt };
