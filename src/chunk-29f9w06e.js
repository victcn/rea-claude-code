// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function t(r, e, a, i = !1, s = !1) {
  return {
    path: `artifact-type/reference/${r}`,
    inlinedByCreate: e,
    printed: a,
    readByKit: i,
    needsDesignSystem: s
  };
}

var L2r = new Map([ [ "design", [ t("format.md", !0, !0, !0), t("design-system-components.md", !0, !1, !0, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0) ] ], [ "migrated-design", [ t("format.md", !0, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0) ] ], [ "slides", [ t("format.md", !0, !0, !0), t("fonts.md", !0, !0, !0), t("craft.md", !1, !0), t("deck-files.md", !1, !1, !0) ] ] ]), d = [ t("format.md", !1, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0) ];

function n(r) {
  return (r === void 0 ? void 0 : L2r.get(r)) ?? d;
}

function vYo(r) {
  return n(r).filter(e => e.inlinedByCreate).map(e => e.path);
}

function EYo(r) {
  return n(r).filter(e => e.inlinedByCreate && e.needsDesignSystem).map(e => e.path);
}

function U7n(r) {
  return n(r).filter(e => e.printed).map(e => e.path);
}

function kYo(r) {
  return n(r).filter(e => e.readByKit).map(e => e.path);
}

export { L2r, vYo, EYo, U7n, kYo };
