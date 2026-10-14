#!/usr/bin/env bash
# Launch the reconstructed Claude Code in a 100% pure, isolated local environment
# without reading /root/.claude, /root/.claude.json, or any third-party plugins/MCPs/skills.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

if [ -x "$PROJECT_ROOT/dist/claude" ]; then
    CLAUDE_BIN="$PROJECT_ROOT/dist/claude"
else
    CLAUDE_BIN="$PROJECT_ROOT/bin/claude"
fi

ISOLATED_ROOT="${ISOLATED_ROOT:-$PROJECT_ROOT/.isolated-env}"
ISOLATED_HOME="$ISOLATED_ROOT/home"
ISOLATED_CONFIG="$ISOLATED_HOME/.claude"
ISOLATED_WORKDIR="$ISOLATED_ROOT/workspace"

mkdir -p "$ISOLATED_HOME" "$ISOLATED_CONFIG" "$ISOLATED_WORKDIR"

BASE_URL="${ANTHROPIC_BASE_URL:-http://127.0.0.1:8012}"
API_KEY="${ANTHROPIC_API_KEY:-sk-isolated-key}"
MODEL="${ANTHROPIC_MODEL:-claude-sonnet-4-6}"

exec env -i \
  HOME="$ISOLATED_HOME" \
  USER="${USER:-root}" \
  PATH="/usr/local/bin:/usr/bin:/bin" \
  TERM="${TERM:-xterm-256color}" \
  CLAUDE_CONFIG_DIR="$ISOLATED_CONFIG" \
  ANTHROPIC_BASE_URL="$BASE_URL" \
  ANTHROPIC_API_KEY="$API_KEY" \
  ANTHROPIC_AUTH_TOKEN="$API_KEY" \
  ANTHROPIC_MODEL="$MODEL" \
  ANTHROPIC_DEFAULT_SONNET_MODEL="$MODEL" \
  ANTHROPIC_DEFAULT_OPUS_MODEL="$MODEL" \
  ANTHROPIC_DEFAULT_HAIKU_MODEL="$MODEL" \
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC="1" \
  "$CLAUDE_BIN" "$@"
