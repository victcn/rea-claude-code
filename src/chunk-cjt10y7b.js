// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { lt, B, Lr, UJe, jJe, he } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x } from "./chunk-b0z4bv3v.js";

import { a } from "./chunk-j016gcgm.js";

import { p } from "./chunk-jkzenvsk.js";

import { Mt, yLs } from "./chunk-3kd8r7rn.js";

import { o, v, M, T, u, $e, ue, U, A } from "./chunk-cvcg6n1z.js";

var cIr = {
  "//": "Hand-maintained baked-in model catalog \u2014 the source of truth for per-model provider IDs and metadata. On model launch add one entry to `models` below; `bun run generate:model-catalog` validates this file against the schema and formats it.",
  schema_version: 1,
  pricing_tiers: {
    tier_2_10: {
      input: 2,
      output: 10,
      cache_write_5m: 2.5,
      cache_write_1h: 4,
      cache_read: .2,
      web_search: .01
    },
    tier_2_10_cache_read_0_10: {
      input: 2,
      output: 10,
      cache_write_5m: 2.5,
      cache_write_1h: 4,
      cache_read: .1,
      web_search: .01
    },
    tier_3_15: {
      input: 3,
      output: 15,
      cache_write_5m: 3.75,
      cache_write_1h: 6,
      cache_read: .3,
      web_search: .01
    },
    tier_5_25: {
      input: 5,
      output: 25,
      cache_write_5m: 6.25,
      cache_write_1h: 10,
      cache_read: .5,
      web_search: .01
    },
    tier_15_75: {
      input: 15,
      output: 75,
      cache_write_5m: 18.75,
      cache_write_1h: 30,
      cache_read: 1.5,
      web_search: .01
    },
    tier_10_50: {
      input: 10,
      output: 50,
      cache_write_5m: 12.5,
      cache_write_1h: 20,
      cache_read: 1,
      web_search: .01
    },
    tier_10_50_cache_read_0_25: {
      input: 10,
      output: 50,
      cache_write_5m: 12.5,
      cache_write_1h: 20,
      cache_read: .25,
      web_search: .01
    },
    tier_4_20_cache_read_0_20: {
      input: 4,
      output: 20,
      cache_write_5m: 5,
      cache_write_1h: 8,
      cache_read: .2,
      web_search: .01
    },
    haiku_35: {
      input: .8,
      output: 4,
      cache_write_5m: 1,
      cache_write_1h: 1.6,
      cache_read: .08,
      web_search: .01
    },
    haiku_45: {
      input: 1,
      output: 5,
      cache_write_5m: 1.25,
      cache_write_1h: 2,
      cache_read: .1,
      web_search: .01
    },
    haiku_55: {
      input: .1,
      output: .5,
      cache_write_5m: .125,
      cache_write_1h: .2,
      cache_read: .01,
      web_search: .01,
      long_prompt: {
        above_prompt_tokens: 1e5,
        input: .5,
        output: 2.5,
        cache_write_5m: .625,
        cache_write_1h: 1,
        cache_read: .05
      }
    }
  },
  models: [ {
    id: "claude-3-5-haiku",
    family: "haiku",
    display_name: "Haiku 3.5",
    provider_ids: {
      first_party: "claude-3-5-haiku-20241022",
      bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
      vertex: "claude-3-5-haiku@20241022",
      foundry: "claude-3-5-haiku",
      anthropic_aws: "claude-3-5-haiku-20241022",
      anthropic_google_cloud: null,
      mantle: null,
      gateway: "claude-3-5-haiku-20241022"
    },
    eager_input_streaming: {
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_HAIKU",
    max_output_tokens: {
      default: 8192,
      upper: 8192
    },
    pricing: "haiku_35",
    capabilities: []
  }, {
    id: "claude-haiku-4-5",
    family: "haiku",
    display_name: "Haiku 4.5",
    knowledge_cutoff: "February 2025",
    provider_ids: {
      first_party: "claude-haiku-4-5-20251001",
      bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
      vertex: "claude-haiku-4-5@20251001",
      foundry: "claude-haiku-4-5",
      anthropic_aws: "claude-haiku-4-5-20251001",
      anthropic_google_cloud: "claude-haiku-4-5-20251001",
      mantle: "anthropic.claude-haiku-4-5",
      gateway: "claude-haiku-4-5-20251001"
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_4_5",
    context: {
      window: 2e5,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 32e3,
      upper: 64e3
    },
    pricing: "haiku_45",
    capabilities: [ "context_management" ],
    advisor_rank: 1
  }, {
    id: "claude-haiku-5-5",
    family: "haiku",
    display_name: "Haiku 5.5",
    knowledge_cutoff: "June 2026",
    provider_ids: {
      first_party: "claude-haiku-5-5",
      bedrock: "us.anthropic.claude-haiku-5-5",
      vertex: "claude-haiku-5-5",
      foundry: "claude-haiku-5-5",
      anthropic_aws: "claude-haiku-5-5",
      anthropic_google_cloud: "claude-haiku-5-5",
      mantle: "anthropic.claude-haiku-5-5"
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_5_5",
    fallback_3p: "claude-haiku-4-5",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0
    },
    max_output_tokens: {
      default: 128e3,
      upper: 128e3
    },
    pricing: "haiku_55",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "rejects_disabled_thinking", "per_turn_effort", "lean_prompt", "org_locked_thinking", "haiku_5_5_early_stopping_guidance" ],
    default_effort: "medium",
    effort_cost_index: {
      low: .41,
      medium: .68,
      high: 1,
      xhigh: 1.58,
      max: 3.24
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 4
  }, {
    id: "claude-3-5-sonnet",
    family: "sonnet",
    display_name: "Sonnet 3.5",
    provider_ids: {
      first_party: "claude-3-5-sonnet-20241022",
      bedrock: "us.anthropic.claude-3-5-sonnet-20241022-v2:0",
      vertex: "claude-3-5-sonnet-v2@20241022",
      foundry: "claude-3-5-sonnet",
      anthropic_aws: "claude-3-5-sonnet-20241022",
      anthropic_google_cloud: null,
      mantle: null,
      gateway: "claude-3-5-sonnet-20241022"
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_SONNET",
    max_output_tokens: {
      default: 8192,
      upper: 8192
    },
    pricing: "tier_3_15",
    capabilities: []
  }, {
    id: "claude-3-7-sonnet",
    family: "sonnet",
    display_name: "Sonnet 3.7",
    provider_ids: {
      first_party: "claude-3-7-sonnet-20250219",
      bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
      vertex: "claude-3-7-sonnet@20250219",
      foundry: "claude-3-7-sonnet",
      anthropic_aws: "claude-3-7-sonnet-20250219",
      anthropic_google_cloud: null,
      mantle: null,
      gateway: "claude-3-7-sonnet-20250219"
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_7_SONNET",
    max_output_tokens: {
      default: 32e3,
      upper: 64e3
    },
    pricing: "tier_3_15",
    capabilities: []
  }, {
    id: "claude-sonnet-4-0",
    family: "sonnet",
    display_name: "Sonnet 4",
    knowledge_cutoff: "January 2025",
    provider_ids: {
      first_party: "claude-sonnet-4-20250514",
      bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
      vertex: "claude-sonnet-4@20250514",
      foundry: "claude-sonnet-4",
      anthropic_aws: "claude-sonnet-4-20250514",
      anthropic_google_cloud: null,
      mantle: null,
      gateway: "claude-sonnet-4-20250514"
    },
    eager_input_streaming: {
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_SONNET",
    context: {
      window: 2e5,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 32e3,
      upper: 64e3
    },
    pricing: "tier_3_15",
    capabilities: [ "context_management" ]
  }, {
    id: "claude-sonnet-4-5",
    family: "sonnet",
    display_name: "Sonnet 4.5",
    knowledge_cutoff: "January 2025",
    provider_ids: {
      first_party: "claude-sonnet-4-5-20250929",
      bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
      vertex: "claude-sonnet-4-5@20250929",
      foundry: "claude-sonnet-4-5",
      anthropic_aws: "claude-sonnet-4-5-20250929",
      anthropic_google_cloud: "claude-sonnet-4-5-20250929",
      mantle: null,
      gateway: "claude-sonnet-4-5-20250929"
    },
    eager_input_streaming: {
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_SONNET",
    fallback_3p: "claude-sonnet-4-0",
    context: {
      window: 2e5,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 32e3,
      upper: 64e3
    },
    pricing: "tier_3_15",
    capabilities: [ "context_management" ]
  }, {
    id: "claude-sonnet-4-6",
    family: "sonnet",
    display_name: "Sonnet 4.6",
    knowledge_cutoff: "August 2025",
    provider_ids: {
      first_party: "claude-sonnet-4-6",
      bedrock: "us.anthropic.claude-sonnet-4-6",
      vertex: "claude-sonnet-4-6",
      foundry: "claude-sonnet-4-6",
      anthropic_aws: "claude-sonnet-4-6",
      anthropic_google_cloud: "claude-sonnet-4-6",
      mantle: null,
      gateway: "claude-sonnet-4-6"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_SONNET",
    fallback_3p: "claude-sonnet-4-5",
    context: {
      window: 2e5,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 32e3,
      upper: 128e3
    },
    pricing: "tier_3_15",
    capabilities: [ "effort", "max_effort", "adaptive_thinking", "context_management" ],
    advisor_rank: 2
  }, {
    id: "claude-sonnet-5",
    family: "sonnet",
    display_name: "Sonnet 5",
    knowledge_cutoff: "January 2026",
    provider_ids: {
      first_party: "claude-sonnet-5",
      bedrock: "us.anthropic.claude-sonnet-5",
      vertex: "claude-sonnet-5",
      foundry: "claude-sonnet-5",
      anthropic_aws: "claude-sonnet-5",
      anthropic_google_cloud: "claude-sonnet-5",
      mantle: "anthropic.claude-sonnet-5",
      gateway: "claude-sonnet-5"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_SONNET",
    fallback_3p: "claude-sonnet-4-6",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_2_10",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "context_management" ],
    default_effort: "high",
    effort_cost_index: {
      low: .47,
      medium: .74,
      high: 1,
      xhigh: 2.41,
      max: 5.59
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 4
  }, {
    id: "claude-sonnet-5-5",
    family: "sonnet",
    display_name: "Sonnet 5.5",
    knowledge_cutoff: "June 2026",
    provider_ids: {
      first_party: "claude-sonnet-5-5",
      bedrock: "us.anthropic.claude-sonnet-5-5",
      vertex: "claude-sonnet-5-5",
      foundry: "claude-sonnet-5-5",
      anthropic_aws: "claude-sonnet-5-5",
      anthropic_google_cloud: "claude-sonnet-5-5",
      mantle: "anthropic.claude-sonnet-5-5",
      gateway: "claude-sonnet-5-5"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_SONNET",
    fallback_3p: "claude-sonnet-5",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0
    },
    max_output_tokens: {
      default: 128e3,
      upper: 128e3
    },
    pricing: "tier_2_10_cache_read_0_10",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "rejects_disabled_thinking", "per_turn_effort", "per_turn_timing", "lean_prompt", "refusal_fallback", "silent_turn_reminder", "org_locked_thinking" ],
    default_effort: "medium",
    effort_cost_index: {
      low: .45,
      medium: .56,
      high: 1,
      xhigh: 1.8,
      max: 4.59
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 6
  }, {
    id: "claude-opus-4-0",
    family: "opus",
    display_name: "Opus 4",
    knowledge_cutoff: "January 2025",
    provider_ids: {
      first_party: "claude-opus-4-20250514",
      bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
      vertex: "claude-opus-4@20250514",
      foundry: "claude-opus-4",
      anthropic_aws: "claude-opus-4-20250514",
      anthropic_google_cloud: null,
      mantle: null,
      gateway: "claude-opus-4-20250514"
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_OPUS",
    context: {
      window: 2e5,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 32e3,
      upper: 32e3
    },
    pricing: "tier_15_75",
    capabilities: [ "context_management" ]
  }, {
    id: "claude-opus-4-1",
    family: "opus",
    display_name: "Opus 4.1",
    knowledge_cutoff: "January 2025",
    provider_ids: {
      first_party: "claude-opus-4-1-20250805",
      bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
      vertex: "claude-opus-4-1@20250805",
      foundry: "claude-opus-4-1",
      anthropic_aws: "claude-opus-4-1-20250805",
      anthropic_google_cloud: null,
      mantle: null,
      gateway: "claude-opus-4-1-20250805"
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_1_OPUS",
    context: {
      window: 2e5,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 32e3,
      upper: 32e3
    },
    pricing: "tier_15_75",
    capabilities: [ "context_management" ]
  }, {
    id: "claude-opus-4-5",
    family: "opus",
    display_name: "Opus 4.5",
    knowledge_cutoff: "May 2025",
    provider_ids: {
      first_party: "claude-opus-4-5-20251101",
      bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0",
      vertex: "claude-opus-4-5@20251101",
      foundry: "claude-opus-4-5",
      anthropic_aws: "claude-opus-4-5-20251101",
      anthropic_google_cloud: "claude-opus-4-5-20251101",
      mantle: null,
      gateway: "claude-opus-4-5-20251101"
    },
    eager_input_streaming: {
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_OPUS",
    fallback_3p: "claude-opus-4-1",
    context: {
      window: 2e5,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 32e3,
      upper: 64e3
    },
    pricing: "tier_5_25",
    capabilities: [ "context_management" ]
  }, {
    id: "claude-opus-4-6",
    family: "opus",
    display_name: "Opus 4.6",
    knowledge_cutoff: "May 2025",
    provider_ids: {
      first_party: "claude-opus-4-6",
      bedrock: "us.anthropic.claude-opus-4-6-v1",
      vertex: "claude-opus-4-6",
      foundry: "claude-opus-4-6",
      anthropic_aws: "claude-opus-4-6",
      anthropic_google_cloud: "claude-opus-4-6",
      mantle: null,
      gateway: "claude-opus-4-6"
    },
    eager_input_streaming: {
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_OPUS",
    fallback_3p: "claude-opus-4-5",
    context: {
      window: 2e5,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_5_25",
    capabilities: [ "effort", "max_effort", "adaptive_thinking", "context_management" ],
    advisor_rank: 3
  }, {
    id: "claude-opus-4-7",
    family: "opus",
    display_name: "Opus 4.7",
    knowledge_cutoff: "January 2026",
    provider_ids: {
      first_party: "claude-opus-4-7",
      bedrock: "us.anthropic.claude-opus-4-7",
      vertex: "claude-opus-4-7",
      foundry: "claude-opus-4-7",
      anthropic_aws: "claude-opus-4-7",
      anthropic_google_cloud: "claude-opus-4-7",
      mantle: "anthropic.claude-opus-4-7",
      gateway: "claude-opus-4-7"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_7_OPUS",
    fallback_3p: "claude-opus-4-6",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_5_25",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "context_management" ],
    default_effort: "xhigh",
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 5
  }, {
    id: "claude-opus-4-8",
    family: "opus",
    display_name: "Opus 4.8",
    knowledge_cutoff: "January 2026",
    provider_ids: {
      first_party: "claude-opus-4-8",
      bedrock: "us.anthropic.claude-opus-4-8",
      vertex: "claude-opus-4-8",
      foundry: "claude-opus-4-8",
      anthropic_aws: "claude-opus-4-8",
      anthropic_google_cloud: "claude-opus-4-8",
      mantle: "anthropic.claude-opus-4-8",
      gateway: "claude-opus-4-8"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_8_OPUS",
    fallback_3p: "claude-opus-4-7",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_5_25",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "fast_mode", "lean_prompt" ],
    default_effort: "high",
    effort_cost_index: {
      low: .72,
      medium: .9,
      high: 1,
      xhigh: 1.65,
      max: 1.88
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 5
  }, {
    id: "claude-opus-5",
    family: "opus",
    display_name: "Opus 5",
    knowledge_cutoff: "May 2026",
    provider_ids: {
      first_party: "claude-opus-5",
      bedrock: "us.anthropic.claude-opus-5",
      vertex: "claude-opus-5",
      foundry: "claude-opus-5",
      anthropic_aws: "claude-opus-5",
      anthropic_google_cloud: "claude-opus-5",
      mantle: "anthropic.claude-opus-5",
      gateway: "claude-opus-5"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_OPUS",
    fallback_3p: "claude-opus-4-8",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_5_25",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "thinking_disabled_effort_cap", "fast_mode", "lean_prompt", "refusal_fallback", "opus_5_prompt_bundle" ],
    default_effort: "high",
    effort_cost_index: {
      low: .67,
      medium: .76,
      high: 1,
      xhigh: 1.6,
      max: 1.7
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 7
  }, {
    id: "claude-opus-5-5",
    family: "opus",
    display_name: "Opus 5.5",
    knowledge_cutoff: "June 2026",
    provider_ids: {
      first_party: "claude-opus-5-5",
      bedrock: "us.anthropic.claude-opus-5-5",
      vertex: "claude-opus-5-5",
      foundry: "claude-opus-5-5",
      anthropic_aws: "claude-opus-5-5",
      anthropic_google_cloud: "claude-opus-5-5",
      mantle: "anthropic.claude-opus-5-5",
      gateway: "claude-opus-5-5"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_OPUS",
    fallback_3p: "claude-opus-5",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0,
      supports_1m_suffix: !0
    },
    max_output_tokens: {
      default: 128e3,
      upper: 128e3
    },
    pricing: "tier_4_20_cache_read_0_20",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "fast_mode", "lean_prompt", "refusal_fallback", "opus_5_5_prompt_bundle" ],
    default_effort: "medium",
    effort_cost_index: {
      low: .44,
      medium: .69,
      high: 1,
      xhigh: 1.53,
      max: 2.81
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 7
  }, {
    id: "claude-fable-5",
    family: "fable",
    display_name: "Fable 5",
    knowledge_cutoff: "January 2026",
    provider_ids: {
      first_party: "claude-fable-5",
      bedrock: "us.anthropic.claude-fable-5",
      vertex: "claude-fable-5",
      foundry: "claude-fable-5",
      anthropic_aws: "claude-fable-5",
      anthropic_google_cloud: "claude-fable-5",
      mantle: "anthropic.claude-fable-5",
      gateway: "claude-fable-5"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5",
    fallback_3p: "claude-opus-5-5",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_10_50",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "context_management", "lean_prompt", "fable_5_mitigations", "refusal_fallback" ],
    default_effort: "high",
    effort_cost_index: {
      low: .6,
      medium: .77,
      high: 1,
      xhigh: 1.74,
      max: 1.91
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 8
  }, {
    id: "claude-fable-5-1",
    family: "fable",
    display_name: "Fable 5.1",
    knowledge_cutoff: "June 2026",
    provider_ids: {
      first_party: "claude-fable-5-1",
      bedrock: "us.anthropic.claude-fable-5-1",
      vertex: "claude-fable-5-1",
      foundry: "claude-fable-5-1",
      anthropic_aws: "claude-fable-5-1",
      anthropic_google_cloud: "claude-fable-5-1",
      mantle: "anthropic.claude-fable-5-1",
      gateway: "claude-fable-5-1"
    },
    eager_input_streaming: {
      bedrock: !0,
      vertex: !0
    },
    vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5_1",
    fallback_3p: "claude-fable-5",
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_10_50_cache_read_0_25",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "lean_prompt", "fable_5_mitigations", "refusal_fallback", "fable_5_1_prompt_bundle" ],
    default_effort: "high",
    effort_cost_index: {
      low: .75,
      medium: .86,
      high: 1,
      xhigh: 1.38,
      max: 1.74
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 9
  }, {
    id: "claude-mythos-5",
    family: "mythos",
    display_name: "Mythos 5",
    knowledge_cutoff: "January 2026",
    provider_ids: {
      first_party: "claude-mythos-5",
      bedrock: null,
      vertex: null,
      foundry: null,
      anthropic_aws: null,
      anthropic_google_cloud: null,
      mantle: null,
      gateway: null
    },
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_10_50",
    capabilities: [],
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 8
  }, {
    id: "claude-mythos-5-1",
    family: "mythos",
    display_name: "Mythos 5.1",
    knowledge_cutoff: "June 2026",
    provider_ids: {
      first_party: "claude-mythos-5-1",
      bedrock: null,
      vertex: null,
      foundry: null,
      anthropic_aws: null,
      anthropic_google_cloud: null,
      mantle: null,
      gateway: null
    },
    context: {
      window: 1e6,
      native_1m: !0,
      supports_1m_beta: !0
    },
    max_output_tokens: {
      default: 64e3,
      upper: 128e3
    },
    pricing: "tier_10_50_cache_read_0_25",
    capabilities: [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_timing", "context_management", "lean_prompt", "fable_5_mitigations", "fable_5_1_prompt_bundle" ],
    default_effort: "high",
    effort_cost_index: {
      low: .75,
      medium: .86,
      high: 1,
      xhigh: 1.38,
      max: 1.74
    },
    image_limits: {
      maxWidth: 2576,
      maxHeight: 2576,
      maxImageTokens: 4784
    },
    advisor_rank: 9
  } ],
  aliases: {
    opus: {
      default: "claude-opus-5-5",
      per_provider: {
        bedrock: "claude-opus-5-5",
        vertex: "claude-opus-5-5",
        foundry: "claude-opus-4-6",
        mantle: "claude-opus-5-5",
        anthropic_aws: "claude-opus-5-5",
        gateway: "claude-opus-4-7"
      }
    },
    sonnet: {
      default: "claude-sonnet-5-5",
      per_provider: {
        bedrock: "claude-sonnet-4-5",
        vertex: "claude-sonnet-4-5",
        foundry: "claude-sonnet-4-5",
        mantle: "claude-sonnet-4-5",
        anthropic_aws: "claude-sonnet-4-6",
        gateway: "claude-sonnet-4-6"
      }
    },
    haiku: {
      default: "claude-haiku-5-5",
      per_provider: {
        bedrock: "claude-haiku-4-5",
        vertex: "claude-haiku-4-5",
        foundry: "claude-haiku-4-5",
        mantle: "claude-haiku-4-5",
        anthropic_aws: "claude-haiku-4-5",
        anthropic_google_cloud: "claude-haiku-4-5",
        gateway: "claude-haiku-4-5"
      }
    },
    fable: {
      default: "claude-fable-5-1",
      per_provider: {
        gateway: "claude-fable-5"
      }
    }
  },
  defaults: {},
  best: "fable",
  latest_per_family: {
    fable: "claude-fable-5-1",
    opus: "claude-opus-5-5",
    sonnet: "claude-sonnet-5-5",
    haiku: "claude-haiku-5-5"
  },
  alias_migration: {}
};

function O() {
  return {
    bakedCatalog: void 0,
    canonicalNameMemo: new Map,
    mainLoopCanonical: void 0,
    servedCapabilityLookup: void 0,
    featureGateLookup: void 0,
    modelKnowledge: void 0
  };
}

var f;

function AU() {
  if (f === void 0) f = O();
  return f;
}

var P = p(() => u({
  first_party: o(),
  bedrock: o().nullish(),
  vertex: o().nullish(),
  foundry: o().nullish(),
  anthropic_aws: o().nullish(),
  anthropic_google_cloud: o().nullish(),
  mantle: o().nullish(),
  gateway: o().nullish()
}).loose()), C = p(() => u({
  input: v(),
  output: v(),
  cache_write_5m: v().optional(),
  cache_write_1h: v().optional(),
  cache_read: v().optional(),
  web_search: v().optional(),
  long_prompt: u({
    above_prompt_tokens: v().int().positive(),
    input: v(),
    output: v(),
    cache_write_5m: v().optional(),
    cache_write_1h: v().optional(),
    cache_read: v().optional()
  }).loose().optional()
}).loose()), S = p(() => u({
  id: o(),
  family: o(),
  display_name: o(),
  slogan: o().optional(),
  knowledge_cutoff: o().optional(),
  provider_ids: P(),
  eager_input_streaming: u({
    bedrock: A(!0).optional(),
    vertex: A(!0).optional()
  }).loose().optional(),
  vertex_region_env_var: o().optional(),
  fallback_3p: o().optional(),
  context: u({
    window: v(),
    native_1m: M().optional(),
    supports_1m_beta: M().optional(),
    supports_1m_suffix: M().optional()
  }).loose().optional(),
  max_output_tokens: u({
    default: v(),
    upper: v()
  }).loose().optional(),
  pricing: $e([ o(), C() ]).optional(),
  capabilities: T(o()).default([]),
  default_effort: U([ "low", "medium", "high", "xhigh", "max" ]).optional(),
  effort_cost_index: u({
    low: v().positive().optional(),
    medium: v().positive().optional(),
    high: v().positive().optional(),
    xhigh: v().positive().optional(),
    max: v().positive().optional()
  }).loose().optional(),
  image_limits: u({
    maxWidth: v().optional(),
    maxHeight: v().optional(),
    maxImageTokens: v().optional(),
    maxBase64Size: v().optional()
  }).loose().optional(),
  advisor_rank: v().optional(),
  fallback_chain: T(o()).optional(),
  picker: u({
    section: U([ "main", "overflow", "deprecated" ]).optional(),
    badge: o().optional(),
    disabled_reason: o().optional(),
    tiers: T(o()).optional()
  }).loose().optional(),
  deprecation: u({
    retirement_dates: ue(o(), o()).optional(),
    remapped_to: o().optional()
  }).loose().optional(),
  min_cli_version: o().optional()
}).loose()), R = p(() => u({
  default: o(),
  per_provider: ue(o(), o()).optional()
}).loose()), oe = p(() => u({
  schema_version: v(),
  pricing_tiers: ue(o(), C()).default({}),
  models: T(S()),
  aliases: ue(o(), R()).default({}),
  defaults: ue(o(), o()).default({}),
  best: o().optional(),
  latest_per_family: ue(o(), o()).default({}),
  alias_migration: ue(o(), o()).default({})
}).loose());

function I(e) {
  let t = new Map, r = new Map;
  for (let n of e.models) {
    t.set(n.id, n);
    for (let i of Object.values(n.provider_ids)) {
      if (typeof i !== "string") continue;
      let d = i.toLowerCase(), l = r.get(d);
      if (l !== void 0 && l !== n.id) throw Error("model catalog: provider id collision across distinct entries");
      r.set(d, n.id);
    }
  }
  return {
    catalog: e,
    entriesById: t,
    catalogIdByProviderId: r
  };
}

function g() {
  let e = AU();
  if (e.bakedCatalog === void 0) e.bakedCatalog = I(cIr);
  return e.bakedCatalog;
}

function $Ie() {
  return g().catalog;
}

var GK = $Ie;

function Ofe(e) {
  return g().catalogIdByProviderId.get(e.toLowerCase());
}

function hl(e) {
  return g().entriesById.get(e);
}

function Pxo(e) {
  let t = e.pricing;
  if (typeof t !== "string") return t;
  let r = GK().pricing_tiers;
  return Object.hasOwn(r, t) ? r[t] : void 0;
}

var Ixo = [ "effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "thinking_disabled_effort_cap", "mid_conv_system", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "fast_mode", "lean_prompt", "fable_5_mitigations", "refusal_fallback", "opus_5_prompt_bundle", "fable_5_1_prompt_bundle", "opus_5_5_prompt_bundle", "thrifty_sonic", "turn_updates", "bash_output_audience_note", "silent_turn_reminder", "thinking_display_updates", "quizzical_shore", "lucky_cerf", "amber_astrolabe", "bison_cairn", "larch_cistern", "haiku_5_5_early_stopping_guidance", "org_locked_thinking", "elapsed_time_reminder" ];

function uLs(e) {
  AU().servedCapabilityLookup = e;
}

var L = {
  per_turn_effort: "tengu_per_turn_effort"
};

function pLs(e) {
  AU().featureGateLookup = e;
}

function D(e) {
  let t = L[e];
  if (t === void 0) return !0;
  return AU().featureGateLookup?.(t) === !0;
}

function X_(e, t, r) {
  return ymt(t, e) ?? sin(e, t, r);
}

function sin(e, t, r) {
  if (AU().servedCapabilityLookup?.(t, [ r, m(e) ]) === !0 && D(t)) return !0;
  return Oxo(e, t) ? !0 : void 0;
}

function Oxo(e, t) {
  return hl(m(e))?.capabilities.includes(t);
}

function ymt(e, t) {
  return Mxo(t).get(e);
}

function Mxo(e) {
  let t = new Map, r = a.CLAUDE_CODE_MODEL_CAPABILITIES;
  if (r === void 0) return t;
  let n = m(e);
  for (let i of r.split(";")) {
    let d = i.indexOf("=");
    if (d !== -1) {
      let l = i.slice(0, d).trim();
      if (l === "") continue;
      if (!(l.endsWith("*") ? n.startsWith(l.slice(0, -1)) : n === l)) continue;
    }
    for (let l of (d === -1 ? i : i.slice(d + 1)).split(",")) {
      let _ = l.trim(), b = !_.startsWith("-");
      t.set(b ? _ : _.slice(1), b);
    }
  }
  return t;
}

function m(e) {
  return e.replace(/\[1m\]/gi, "");
}

function _9e(e, t) {
  let r = GK().aliases, n = Object.hasOwn(r, e) ? r[e] : void 0;
  if (!n) return;
  let i = n.per_provider;
  return (i && Object.hasOwn(i, t) ? i[t] : void 0) ?? n.default;
}

function fLs(e) {
  let t = _9e(e, "first_party"), r = t === void 0 ? void 0 : hl(t);
  if (r === void 0) throw Error("model-catalog.json: every aliases entry must name a models[] entry");
  return r.provider_ids.first_party;
}

var N = {
  "claude-3-5-haiku": "haiku35",
  "claude-haiku-4-5": "haiku45",
  "claude-haiku-5-5": "haiku55",
  "claude-3-5-sonnet": "sonnet35",
  "claude-3-7-sonnet": "sonnet37",
  "claude-sonnet-4-0": "sonnet40",
  "claude-sonnet-4-5": "sonnet45",
  "claude-sonnet-4-6": "sonnet46",
  "claude-sonnet-5": "sonnet5",
  "claude-sonnet-5-5": "sonnet55",
  "claude-opus-4-0": "opus40",
  "claude-opus-4-1": "opus41",
  "claude-opus-4-5": "opus45",
  "claude-opus-4-6": "opus46",
  "claude-opus-4-7": "opus47",
  "claude-opus-4-8": "opus48",
  "claude-opus-5": "opus5",
  "claude-opus-5-5": "opus55",
  "claude-fable-5": "fable5",
  "claude-fable-5-1": "fable51"
};

function z(e) {
  let t = e.provider_ids, r = {
    firstParty: t.first_party,
    bedrock: t.bedrock ?? null,
    vertex: t.vertex ?? null,
    foundry: t.foundry ?? null,
    anthropicAws: t.anthropic_aws ?? null,
    anthropicGoogleCloud: t.anthropic_google_cloud ?? null,
    mantle: t.mantle ?? null,
    gateway: t.gateway ?? t.first_party
  };
  if (e.eager_input_streaming) r.eagerInputStreaming = e.eager_input_streaming;
  return r;
}

function G() {
  let e = {};
  for (let [t, r] of Object.entries(N)) {
    let n = hl(t);
    if (!n) throw new x(`model catalog missing entry for '${t}' (CATALOG_ID_TO_KEY key '${r}')`, "model catalog missing entry for CATALOG_ID_TO_KEY id");
    e[r] = z(n);
  }
  return e;
}

var $o = G();

function s(e) {
  for (let t of [ "bedrock", "vertex", "foundry", "anthropicAws" ]) if (e[t] === null) throw new x(`named CLAUDE_*_CONFIG export for '${e.firstParty}' has null ${t}`, "named model config export has null 3P provider id");
  return e;
}

var ie = s($o.haiku35), se = s($o.haiku45), le = s($o.sonnet35), de = s($o.sonnet37), _e = s($o.sonnet40), pe = s($o.sonnet45), ce = s($o.sonnet46), fe = s($o.sonnet5), ge = s($o.opus40), me = s($o.opus41), ye = s($o.opus45), ve = s($o.opus46), be = s($o.opus47), Ce = s($o.opus48), xe = s($o.opus5), Ee = s($o.opus55), _mt = s($o.fable5), oKn = s($o.fable51), mLs = {
  firstParty: "claude-mythos-5",
  bedrock: "us.anthropic.claude-mythos-5",
  vertex: "claude-mythos-5",
  foundry: "claude-mythos-5",
  anthropicAws: "claude-mythos-5",
  anthropicGoogleCloud: "claude-mythos-5",
  mantle: "anthropic.claude-mythos-5",
  gateway: "claude-mythos-5",
  eagerInputStreaming: {
    bedrock: !0,
    vertex: !0
  }
}, iin = [ "opus55", "opus5", "opus48", "opus47", "opus46", "opus45" ], gLs = Object.values($o).map(e => e.firstParty), pG = Object.fromEntries(Object.entries($o).map(([e, t]) => [ t.firstParty, e ]));

function JO(e) {
  let t = e.toLowerCase();
  for (let r of Object.values($o)) for (let n of Object.values(r)) if (typeof n === "string" && n.toLowerCase() === t) return r;
  return null;
}

var NLt = 6e5;

function Hxo() {
  let e = Ur().providerCache.overturnedEntitlementDenies, t = Date.now();
  for (let [r, n] of e) if (t - n >= NLt) e.delete(r);
}

function Dxo() {
  return {
    validatedModels: new Set,
    confirmedEntitlementDenies: new Map,
    overturnedEntitlementDenies: new Map,
    bedrockInferenceProfiles: void 0,
    inferenceProfileBackingModels: new Map,
    modelConfigs: new Map,
    clientDataFetches: new Map,
    capabilityOverrides: new Map,
    probeResults: new Map,
    preconnectFired: !1
  };
}

function sKn() {
  return {
    allModelBetas: new Map,
    modelBetas: new Map,
    bedrockExtraBodyParamsBetas: new Map,
    midConversationSystem: new Map
  };
}

function hLs(e) {
  let {betas: t, betasCompiledOnly: r} = Ur();
  for (let n of [ ...Object.values(t), ...Object.values(r) ]) for (let i of [ ...n.keys() ]) if (e(i)) n.delete(i);
}

function F() {
  return {
    providerCache: Dxo(),
    fetchesClientData: !1,
    sessionModelDenyReprobe: {
      reprobe: void 0,
      honoredModels: new Set,
      contestedDenies: new Map,
      refusedModels: new Set,
      generation: 0,
      restricted: Me()
    },
    betas: sKn(),
    betasCompiledOnly: sKn(),
    usageCreditsOnlyModelFlags: {
      fableBilling: null,
      creditsOnlyTiers: null
    },
    warnedEnforcementMessages: new Set,
    resolvingBestModel: !1,
    modelCapabilitiesByCachePath: new Map,
    gatewayModelsByCachePath: new Map,
    modelCapabilitiesStorageV5: void 0,
    gatewayModelsStorageV5: void 0,
    servedCatalogByKey: new Map,
    servedCatalogRefreshes: new Map,
    servedCatalogSettledRefreshes: new WeakSet,
    servedCatalogRefusal: void 0,
    servedCatalogPostLoginRun: void 0,
    publishedCatalogByKey: new Map,
    publishedCatalogRefreshes: new Map,
    publishedCatalogFloorMarks: new Map,
    publishedCatalogFloorRead: void 0,
    publishedCatalogFloorWrite: void 0,
    clientDataUrl: {
      pending: void 0,
      document: void 0,
      assumesFirstPartyBaseUrl: !1
    },
    servedCatalogShadowStarted: !1,
    servedCatalogActive: void 0,
    servedCatalogMaskedIds: new Set,
    servedCatalogMasksEveryId: !1,
    servedCatalogPublicIds: new Map,
    servedCatalogMaskHydrated: !1,
    servedCatalogMaskHydration: void 0,
    servedCatalogMaskRetryAt: 0,
    servedCatalogPersistedMaskedIds: void 0,
    servedCatalogMaskWrite: void 0,
    servedCatalogSuppressDepth: 0,
    servedCatalogDeactivatedRows: void 0,
    familySpellingVerdicts: new Map,
    behavesAsMemo: void 0,
    unservedModelDrop: void 0,
    servedCatalogOffBeforeAsking: void 0,
    catalogDecision: void 0
  };
}

var H = new lt(() => F());

function Ur() {
  return H.of(B());
}

var Tv = {
  bedrock: "Amazon Bedrock",
  vertex: "Google Vertex AI",
  foundry: "Microsoft Foundry",
  anthropicAws: "Claude Platform on AWS",
  anthropicGoogleCloud: "Claude Platform on Google Cloud",
  mantle: "Amazon Bedrock (Mantle)",
  gateway: "Cloud gateway"
}, b9e = {
  bedrock: "CLAUDE_CODE_USE_BEDROCK",
  foundry: "CLAUDE_CODE_USE_FOUNDRY",
  anthropicAws: "CLAUDE_CODE_USE_ANTHROPIC_AWS",
  anthropicGoogleCloud: "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
  mantle: "CLAUDE_CODE_USE_MANTLE",
  vertex: "CLAUDE_CODE_USE_VERTEX"
};

function uIr(e) {
  switch (e) {
   case "firstParty":
    return "anthropic";

   case "bedrock":
    return "bedrock";

   case "vertex":
    return "vertex";

   case "foundry":
    return "foundry";

   case "anthropicAws":
    return "anthropicAws";

   case "anthropicGoogleCloud":
    return "anthropicGoogleCloud";

   case "mantle":
    return "mantle";

   case "gateway":
    return "gateway";
  }
}

function j(e) {
  return e in Tv;
}

function ain(e) {
  switch (e) {
   case "anthropic":
    return "Anthropic API";

   case "customEndpoint":
    return "a custom endpoint (LLM gateway or proxy)";

   default:
    return j(e) ? Tv[e] : e;
  }
}

function Oe() {
  if (Lr() || UJe() || jJe()) return "gateway";
  return a.CLAUDE_CODE_USE_BEDROCK ? "bedrock" : a.CLAUDE_CODE_USE_FOUNDRY ? "foundry" : a.CLAUDE_CODE_USE_ANTHROPIC_AWS ? "anthropicAws" : a.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD ? "anthropicGoogleCloud" : a.CLAUDE_CODE_USE_MANTLE ? "mantle" : a.CLAUDE_CODE_USE_VERTEX ? "vertex" : "firstParty";
}

function iKn() {
  return Oe() !== "firstParty";
}

function cA() {
  return c(Oe());
}

function Yn() {
  return Oe() === "firstParty";
}

function FIe() {
  if (Oe() === "bedrock" && a.CLAUDE_CODE_USE_MANTLE) return "mantle";
  return null;
}

function K(e) {
  return e.startsWith("anthropic.") && !yLs(Mt(e));
}

function cd(e) {
  if (e) {
    let t = FIe();
    if (t) {
      if (t === "mantle" && K(e)) return t;
      let r = Oe(), n = JO(e);
      if (n && n[r] === null && n[t] !== null) return t;
    }
  }
  return Oe();
}

function su(e = Oe()) {
  return e === "firstParty" || pj(e) || e === "gateway";
}

function pj(e = Oe()) {
  return e === "anthropicAws" || e === "anthropicGoogleCloud";
}

function aKn() {
  return Yn();
}

function fG(e = Oe()) {
  return e === "firstParty" || pj(e) || e === "foundry" || e === "mantle";
}

function ba() {
  return Oe() === "firstParty" && gi();
}

function lin() {
  let e = Oe();
  return e === "firstParty" || e === "anthropicAws" && a.ANTHROPIC_AWS_BASE_URL === void 0;
}

function gi() {
  if ($ie()) return !0;
  return vf();
}

function $ie() {
  return a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ?? Ur().clientDataUrl.assumesFirstPartyBaseUrl;
}

function vf() {
  let e = process.env.ANTHROPIC_BASE_URL;
  if (!e) return !0;
  return Pm(e);
}

function din() {
  return he() ? void 0 : !vf();
}

function S9e() {
  let e = a.ANTHROPIC_BASE_URL;
  if (he() || Oe() !== "firstParty" || !e || a.ANTHROPIC_UNIX_SOCKET !== void 0 || Pm(e)) return;
  try {
    return new URL(e).host || void 0;
  } catch {
    return;
  }
}

function Pm(e) {
  try {
    let t = new URL(e).host;
    return [ "api.anthropic.com" ].includes(t);
  } catch {
    return !1;
  }
}

var W = "[a-z]{2,4}(?:-[a-z]{2,5})?-[a-z]+-\\d+", h = "[a-z]+(?:-[a-z]+\\d+)?", X = "(?:amazonaws\\.(?:com(?:\\.cn)?|eu)|api\\.aws|c2s\\.ic\\.gov|sc2s\\.sgov\\.gov|cloud\\.adc-e\\.uk|csp\\.hci\\.ic\\.gov)";

function y(e) {
  return new RegExp(`^(?:vpce-[a-z0-9-]+\\.)?${e}(?:-fips)?\\.${W}\\.(?:vpce\\.)?${X}$`);
}

var E = {
  firstParty: void 0,
  gateway: void 0,
  bedrock: {
    variables: [ {
      name: "ANTHROPIC_BEDROCK_BASE_URL"
    }, {
      name: "AWS_ENDPOINT_URL_BEDROCK_RUNTIME"
    }, {
      name: "AWS_ENDPOINT_URL_BEDROCK"
    }, {
      name: "AWS_ENDPOINT_URL"
    } ],
    ownHost: y("bedrock(?:-runtime)?")
  },
  mantle: {
    variables: [ {
      name: "ANTHROPIC_BEDROCK_MANTLE_BASE_URL"
    } ],
    ownHost: y("bedrock-mantle")
  },
  anthropicAws: {
    variables: [ {
      name: "ANTHROPIC_AWS_BASE_URL"
    } ],
    ownHost: y("aws-external-anthropic")
  },
  vertex: {
    variables: [ {
      name: "ANTHROPIC_VERTEX_BASE_URL"
    } ],
    ownHost: new RegExp(`^(?:aiplatform|${h}-aiplatform|aiplatform\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`)
  },
  anthropicGoogleCloud: {
    variables: [ {
      name: "ANTHROPIC_GOOGLE_CLOUD_BASE_URL"
    } ],
    ownHost: new RegExp(`^(?:claude|claude\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`)
  },
  foundry: {
    variables: [ {
      name: "ANTHROPIC_FOUNDRY_BASE_URL"
    }, {
      name: "ANTHROPIC_FOUNDRY_RESOURCE",
      urlOf: e => `https://${e}.services.ai.azure.com`
    } ],
    ownHost: /^[a-z0-9-]{2,64}\.(?:services\.ai|cognitiveservices|openai)\.azure\.(?:com|us|cn)$/
  }
};

function pIr(e) {
  return E[e]?.variables ?? [];
}

function fIr(e, t) {
  let r = [];
  for (let {name: n, urlOf: i} of pIr(e)) {
    let d = t(n);
    if (!d) continue;
    let l = i === void 0 ? d : i(d), _ = k(e, l);
    if (_ !== "own") r.push({
      variable: n,
      url: l,
      verdict: _
    });
  }
  return r;
}

function k(e, t) {
  let r = E[e], n;
  try {
    n = new URL(t);
  } catch {
    return "unparsable";
  }
  let i = n.hostname.toLowerCase().replace(/\.$/, "");
  if (r === void 0 || !r.ownHost.test(i)) return "foreign";
  return n.protocol === "https:" ? "own" : "insecure";
}

function Lxo(e, t) {
  return k(e, t) === "own";
}

function w9e() {
  return gi() || a.CLAUDE_CODE_PROPAGATE_TRACEPARENT;
}

export { cIr, AU, $Ie, GK, Ofe, hl, Pxo, Ixo, uLs, pLs, X_, sin, Oxo, ymt, Mxo, _9e, fLs, $o, _mt, oKn, mLs, iin, gLs, pG, JO, NLt, Hxo, Dxo, sKn, hLs, Ur, Tv, b9e, uIr, ain, Oe, iKn, cA, Yn, FIe, cd, su, pj, aKn, fG, ba, lin, gi, $ie, vf, din, S9e, Pm, pIr, fIr, Lxo, w9e };
