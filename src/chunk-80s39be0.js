// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { rlo, olo, slo } from "./chunk-sqb9meyh.js";

function Qhe(e, o) {
  if (e !== "launched_from_home") return {};
  try {
    return {
      ...rlo(o) && {
        only_refused_by: b("windows_profile_on_mount_without_drive")
      },
      ...olo(o) && {
        on_volume_mounted_twice: !0
      },
      ...slo(o) && {
        mount_source_unread: !0
      }
    };
  } catch (r) {
    return d(j(r)), {};
  }
}

export { Qhe };
