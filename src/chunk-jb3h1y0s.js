// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Re } from "./chunk-jzzyv7tj.js";

import { Kt, Ae, Z, F } from "./chunk-cpyd3eya.js";

import { aen } from "./chunk-1dj3skht.js";

F();

var Px = Kt(null), T9n = Kt(null), A9n = Kt(null);

function O1t() {
  let e = Ae(A9n);
  if (!e) throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e;
}

var C9n = Kt(null);

function c2() {
  let e = Ae(C9n);
  if (!e) throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e;
}

function jv() {
  let e = Ae(T9n);
  if (!e) throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e;
}

function t() {
  let e = Ae(Px);
  if (!e) throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");
  return e;
}

function V(e) {
  let n = t();
  return Re(n, e);
}

function Nn() {
  return t().setState;
}

function aBr() {
  let e = t();
  return Z(() => aen(e.setState), [ e ]);
}

function Ar() {
  return t();
}

function Fo(e) {
  return Re(Ae(Px), e);
}

export { Px, T9n, A9n, O1t, C9n, c2, jv, V, Nn, aBr, Ar, Fo };
