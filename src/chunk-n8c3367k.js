// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var Wu = "$defaults";

function zZt(e, t, n) {
  if (!e?.length) return [ ...t ];
  let o = !1, _ = [];
  for (let r of e) {
    if (r === "$defaults") {
      if (!o) _.push(...t), o = !0;
      continue;
    }
    _.push(n(r));
  }
  return _;
}

function w(e, t) {
  return zZt(e, t.length > 0 ? [ t ] : [], n => `- ${n}`).join(`\n`);
}

function PEs(e) {
  if (e.length === 0) return "";
  return `- User Deny Rules: The user has configured these permission deny rules: ${e.map(n => `\`${n}\``).join(", ")}. Each rule names a tool and (optionally) an argument pattern that is already hard-blocked for that tool. ` + "Block the action if it accomplishes the same effect via a different tool \u2014 e.g. using Bash with " + "`python -c`, `sed -i`, `cat >`, heredocs, or similar to write or edit a file that an Edit/Write/MultiEdit deny rule covers, or otherwise routing around a deny rule by switching tools. The named tool itself is enforced separately; your job here is to catch circumvention.";
}

var S = [ "user_allow_rules_to_replace", "user_soft_deny_rules_to_replace", "user_hard_deny_rules_to_replace", "user_environment_to_replace" ], y = "<settings_deny_rules>";

function Zho(e, t, {collapseEmptySlotLines: n}) {
  let o = {
    user_allow_rules_to_replace: t.allow,
    user_soft_deny_rules_to_replace: t.softDeny,
    user_hard_deny_rules_to_replace: t.hardDeny,
    user_environment_to_replace: t.environment
  }, _ = "";
  for (let r = 0; r < e.length; ) {
    let s = -1, a = -1, f = null, l = null;
    for (let d of S) {
      let p = `<${d}>`, i = e.indexOf(p, r);
      if (i === -1 || s !== -1 && i > s) continue;
      let m = `</${d}>`, g = e.indexOf(m, i + p.length);
      if (g === -1) continue;
      s = i, a = g + m.length, f = e.slice(i + p.length, g), l = d;
    }
    let c = e.indexOf(y, r);
    if (c !== -1 && (s === -1 || c < s)) s = c, a = c + y.length, l = null;
    if (s === -1) {
      _ += e.slice(r);
      break;
    }
    let u = l === null ? t.settingsDenyBlock : w(o[l], f ?? "");
    _ += e.slice(r, s);
    let h = e.startsWith(`\n`, a) ? `\n` : "";
    _ += n ? u && `${u}\n` : u + h, r = a + h.length;
  }
  return _;
}

function GZt(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

var x = [ "account_standing_rule_changes", "auto_mode_bypass", "blind_apply", "browser_file_upload_exfil", "browser_input_exfil", "browser_js_exfil", "browser_navigate_exfil", "browser_shortcut_execution", "chatops_trigger_comments", "ci_bypass", "cloud_storage_mass_delete", "cluster_wide_workload_creation", "code_from_external", "code_that_leaks_when_run", "command_network_lists", "containment_escape", "create_public_surface", "create_rce_surface", "create_unsafe_agents", "credential_exploration", "credential_leakage", "credential_materialization", "data_exfiltration", "dns_domain_cert_changes", "excess_sensitive_detail", "exfil_scouting", "expose_local_services", "external_ingress_tunnel", "external_system_writes", "feature_flag_writes", "git_destructive", "instruction_poisoning", "interfere_with_workloads", "irreversible_deletion_general", "irreversible_local_destruction", "live_shared_artifact_sensitive_delta", "logging_audit_tampering", "merge_without_review", "modify_shared_resources", "node_lifecycle_operations", "out_of_place_publication", "package_registry_bypass", "permission_grant", "pii_data_handling", "production_deploy", "production_reads", "protected_scope_iac_apply", "public_data_sharing_upload", "real_world_transactions", "remote_repoint", "remote_shell_writes", "safety_bypass_flag", "sandbox_network_callback", "secret_store_writes", "security_test_removal", "security_weaken", "self_approval", "self_modification", "sensitive_remote_exec", "sensitive_source_provenance", "session_transcript_tampering", "shared_cluster_mutation", "shared_scratch_sweep", "third_party_attack", "tls_auth_weaken", "tmux_self_drive", "traffic_redirection", "unauthorized_persistence", "unrequested_artifact_publish", "unrequested_commit_in_a_connected_app", "untrusted_code_integration", "unverifiable_deletion_scope", "unverifiable_deletion_target" ], b = [ "cowork_delete_grant", "cowork_folder_access", "cowork_run_routine_now", "cowork_scheduled_task_delete", "cowork_scheduled_task_write", "cowork_skill_persistence" ];

var T = [], eyo = new Set([ ...x, ...T ]), Ndt = new Set([ ...eyo, ...b ]);

function $dt(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 32 && n !== 9 || n >= 127 && n <= 159 || n === 8232 || n === 8233) return !0;
  }
  return !1;
}

var E = /[\p{Cf}\p{Default_Ignorable_Code_Point}\u2028\u2029\u2800\uFFF9-\uFFFB\u{1D173}-\u{1D17A}]/u;

function Fdt(e) {
  return E.test(e);
}

function Udt(e) {
  if (e.includes("<settings_") || S.some(t => e.includes(`<${t}`) || e.includes(`</${t}`))) return "template_token";
  if (e.includes("<cc_automode") || e.includes("</cc_automode")) return "region_tag";
  return null;
}

export { Wu, zZt, PEs, Zho, GZt, eyo, Ndt, $dt, Fdt, Udt };
