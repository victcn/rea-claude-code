// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { VFs } from "./chunk-j016gcgm.js";

import { no, Fr, k } from "./chunk-xywp7esx.js";

import { ht, qt, Rt } from "./chunk-s2t7g8m9.js";

import { vXt, eue, NXt, V0n } from "./chunk-sqb9meyh.js";

import { b7 } from "./chunk-h2y8dwq2.js";

import { boe, CRe } from "./chunk-71vr1xxp.js";

import { Lc } from "./chunk-ejckqh3m.js";

import { et } from "./chunk-59na0977.js";

import { O } from "./chunk-1xnsr4dy.js";

function mrr() {
  return boe();
}

function _Kt() {
  return CRe();
}

function s() {
  if (Lc()) return null;
  if (!eue()) return `  - You can use the \`run_in_background\` parameter to run the command in the background. Only use this if you don't need the result immediately. ${NXt}`;
  return `  - You can use the \`run_in_background\` parameter to run the command in the background. Only use this if you don't need the result immediately and are OK being notified when the command completes later. You do not need to check the output right away - you'll be notified when it finishes.${V0n()}`;
}

function l() {
  if (Lc()) return null;
  let e = eue();
  return `  - Avoid unnecessary \`Start-Sleep\` commands:\n    - Do not sleep between commands that can run immediately \u2014 just run them.${e ? "\n    - If your command is long running and you would like to be notified when it finishes \u2014 simply run your command using `run_in_background`. There is no need to sleep in this case." : ""}\n    - Do not retry failing commands in a sleep loop \u2014 diagnose the root cause or consider an alternative approach.${e ? "\n    - If waiting for a background task you started with `run_in_background`, you will be notified when it completes \u2014 do not poll." : ""}\n    - If you must poll an external process, use a check command rather than sleeping first.\n    - If you must sleep, keep the duration short to avoid blocking the user.`;
}

function c(e) {
  if (e === "desktop") return "PowerShell edition: Windows PowerShell 5.1 (powershell.exe)\n   - Pipeline chain operators `&&` and `||` are NOT available \u2014 they cause a parser error. To run B only if A succeeds: `A; if ($?) { B }`. To chain unconditionally: `A; B`.\n   - Ternary (`?:`), null-coalescing (`??`), and null-conditional (`?.`) operators are NOT available. Use `if/else` and explicit `$null -eq` checks instead.\n   - Avoid `2>&1` on native executables. In 5.1, redirecting a native command's stderr inside PowerShell wraps each line in an ErrorRecord (NativeCommandError) and sets `$?` to `$false` even when the exe returned exit code 0. stderr is already captured for you \u2014 don't redirect it.\n   - `>`, `>>`, and `Out-File` usually default to UTF-8 (with BOM) in this environment, but `Set-Content`/`Add-Content` still default to the system ANSI codepage \u2014 when writing a file other tools will read, pass `-Encoding utf8` explicitly to `Out-File`/`Set-Content`.\n   - `ConvertFrom-Json` returns a PSCustomObject, not a hashtable. `-AsHashtable` is not available.";
  if (e === "core") return "PowerShell edition: PowerShell 7+ (pwsh)\n   - Pipeline chain operators `&&` and `||` ARE available and work like bash. Prefer `cmd1 && cmd2` over `cmd1; cmd2` when cmd2 should only run if cmd1 succeeds.\n   - Ternary (`$cond ? $a : $b`), null-coalescing (`??`), and null-conditional (`?.`) operators are available.\n   - Default file encoding is UTF-8 without BOM.";
  return "PowerShell edition: unknown \u2014 assume Windows PowerShell 5.1 for compatibility\n   - Do NOT use `&&`, `||`, ternary `?:`, null-coalescing `??`, or null-conditional `?.`. These are PowerShell 7+ only and parser-error on 5.1.\n   - To chain commands conditionally: `A; if ($?) { B }`. Unconditionally: `A; B`.";
}

async function DJo() {
  let e = await vXt(), t = k("tengu_brass_sled", !1) ? await VFs() : [];
  return d6r({
    edition: e,
    buildTools: t,
    onWindows: O() === "windows",
    backgroundRuns: !Lc()
  });
}

function d6r(e) {
  let {edition: t, buildTools: o} = e, n = e.backgroundRuns ? s() : null, i = e.backgroundRuns ? l() : null, r = e.onWindows ? "\n   - Exception: the MSVC toolchain (`cl`, `nmake`, `msbuild`) is only on PATH inside a Visual Studio developer shell, so it may be installed even if not listed. Environment changes do NOT persist between commands, so initialize and build in ONE command: `cmd /c '\"C:\\Program Files\\Microsoft Visual Studio\\<year>\\<edition>\\VC\\Auxiliary\\Build\\vcvarsall.bat\" x64 && <build command>'`" : "", a = o.length ? `\nDeveloper tools verified on this machine's PATH: ${o.join(", ")}\n   - Prefer these. A build/dev tool NOT in this list is likely not installed \u2014 do not assume \`make\`, \`gcc\`, or a package manager is available unless listed. Check with \`if (Get-Command <name> -ErrorAction SilentlyContinue) { ... }\` before relying on an unlisted tool, and prefer a listed equivalent.${r}\n` : "", d = `\n  - For git commands:\n    - Prefer to create a new commit rather than amending an existing commit.\n    - Before running destructive operations (e.g., git reset --hard, git push --force, git checkout --), consider whether there is a safer alternative that achieves the same goal. Only use destructive operations when they are truly the best approach.\n    - Never skip hooks (--no-verify) or bypass signing (--no-gpg-sign, -c commit.gpgsign=false) unless the user has explicitly asked for it. If a hook fails, investigate and fix the underlying issue.`;
  return `Executes a given PowerShell command with optional timeout. Working directory persists between commands; shell state (variables, functions) does not.\n\nIMPORTANT: This tool is for terminal operations via PowerShell: git, npm, docker, and PS cmdlets. DO NOT use it for file operations (reading, writing, editing, searching, finding files) - use the specialized tools for this instead.\n\n${c(t)}\n${a}\nBefore executing the command, please follow these steps:\n\n1. Directory Verification:\n   - If the command will create new directories or files, first use \`Get-ChildItem\` (or \`ls\`) to verify the parent directory exists and is the correct location\n\n2. Command Execution:\n   - Always quote file paths that contain spaces with double quotes\n   - Capture the output of the command.\n\nPowerShell Syntax Notes:\n   - Variables use $ prefix: $myVar = "value"\n   - Escape character is backtick (\`), not backslash\n   - Use Verb-Noun cmdlet naming: Get-ChildItem, Set-Location, New-Item, Remove-Item\n   - Common aliases: ls (Get-ChildItem), cd (Set-Location), cat (Get-Content), rm (Remove-Item)\n   - Pipe operator | works similarly to bash but passes objects, not text\n   - Use Select-Object, Where-Object, ForEach-Object for filtering and transformation\n   - String interpolation: "Hello $name" or "Hello $($obj.Property)"\n   - Registry access uses PSDrive prefixes: \`HKLM:\\SOFTWARE\\...\`, \`HKCU:\\...\` \u2014 NOT raw \`HKEY_LOCAL_MACHINE\\...\`\n   - Environment variables: read with \`$env:NAME\`, set with \`$env:NAME = "value"\` (NOT \`Set-Variable\` or bash \`export\`)\n   - Call native exe with spaces in path via call operator: \`& "C:\\Program Files\\App\\app.exe" arg1 arg2\`\n\nUnix commands that DO NOT exist in PowerShell \u2014 use the equivalent instead:\n   - head / tail \u2192 \`Get-Content file -TotalCount N\` / \`-Tail N\`; piped: \`| Select-Object -First N\` / \`-Last N\`\n   - which \u2192 \`(Get-Command name).Source\`\n   - touch \u2192 \`if (-not (Test-Path path)) { New-Item -ItemType File path }\` (NEVER use \`New-Item -Force\` on a file \u2014 it truncates existing content)\n   - wc -l \u2192 \`(Get-Content file | Measure-Object -Line).Lines\`\n   - mkdir -p \u2192 \`New-Item -ItemType Directory -Force path\` (\`-p\` is not a PowerShell flag)\n   - rm -rf \u2192 \`Remove-Item -Recurse -Force path\`\n   - ln -s \u2192 \`New-Item -ItemType SymbolicLink -Path link -Target target\`\n   - chmod / chown \u2192 not applicable on Windows; use \`icacls\` only if ACL changes are required\n   - 2>/dev/null \u2192 \`2>$null\` (but stderr is captured for you \u2014 usually unnecessary)\n   - VAR=x cmd \u2192 \`$env:VAR = 'x'; cmd\` (PowerShell has no inline env-var prefix)\n   - Bash control flow (\`if [ -f x ]\`, \`for x in *\`, backtick \`\`cmd\`\` substitution) is a parser error \u2014 use \`if (Test-Path x)\`, \`foreach ($x in ...)\`, \`$(cmd)\`\n\nExit-code note: \`-ErrorAction SilentlyContinue\` suppresses error OUTPUT but the cmdlet failure still causes this tool to report exit 1. To make a cmdlet failure truly non-fatal, promote it to terminating and swallow it: \`try { Cmdlet ... -ErrorAction Stop } catch {}\` (without \`-ErrorAction Stop\`, non-terminating errors skip the \`catch\` and still exit 1).\n\nInteractive and blocking commands (this tool runs with -NonInteractive and stdin attached to the null device \u2014 console prompts read EOF or error immediately; GUI prompts can still block until timeout):\n   - NEVER use \`Read-Host\`, \`Get-Credential\`, \`Out-GridView\`, \`$Host.UI.PromptForChoice\`, or \`pause\`\n   - Destructive cmdlets (\`Remove-Item\`, \`Stop-Process\`, \`Clear-Content\`, etc.) may prompt for confirmation. Add \`-Confirm:$false\` when you intend the action to proceed. Use \`-Force\` for read-only/hidden items.\n   - Never use \`git rebase -i\`, \`git add -i\`, or other commands that open an interactive editor\n\nPassing multiline strings (commit messages, file content) to native executables:\n   - Use a single-quoted here-string so PowerShell does not expand \`$\` or backticks inside. The closing \`'@\` MUST be at column 0 (no leading whitespace) on its own line \u2014 indenting it is a parse error:\n<example>\ngit commit -m @'\nCommit message here.\nSecond line with $literal dollar signs.\n'@\n</example>\n   - Use \`@'...'@\` (single-quoted, literal) not \`@"..."@\` (double-quoted, interpolated) unless you need variable expansion\n   - For arguments containing \`-\`, \`@\`, or other characters PowerShell parses as operators, use the stop-parsing token: \`git log --% --format=%H\`\n\nUsage notes:\n  - The command argument is required.\n  - You can specify an optional timeout in milliseconds (up to ${_Kt()}ms / ${_Kt() / 6e4} minutes for a foreground command). If not specified, commands will timeout after ${mrr()}ms (${mrr() / 6e4} minutes).\n  - It is very helpful if you write a clear, concise description of what this command does.\n  - If the output exceeds ${b7()} characters, output will be truncated before being returned to you.\n${n ? n + `\n` : ""}  - Avoid using PowerShell to run commands that have dedicated tools, unless explicitly instructed:\n    - File search: Use ${no} (NOT Get-ChildItem -Recurse)\n    - Content search: Use ${Fr} (NOT Select-String)\n    - Read files: Use ${et} (NOT Get-Content)\n    - Edit files: Use ${ht}\n    - Write files: Use ${qt} (NOT Set-Content/Out-File)\n    - Communication: Output text directly (NOT Write-Output/Write-Host)\n  - When issuing multiple commands:\n    - If the commands are independent and can run in parallel, make multiple ${Rt} tool calls in a single message.\n    - If the commands depend on each other and must run sequentially, chain them in a single ${Rt} call (see edition-specific chaining syntax above).\n    - Use \`;\` only when you need to run commands sequentially but don't care if earlier commands fail.\n    - DO NOT use newlines to separate commands (newlines are ok in quoted strings and here-strings)\n  - Do NOT prefix commands with \`cd\` or \`Set-Location\` -- the working directory is already set to the correct project directory automatically.${i ? `\n` + i : ""}\n  - For git commands:\n    - Prefer to create a new commit rather than amending an existing commit.\n    - Before running destructive operations (e.g., git reset --hard, git push --force, git checkout --), consider whether there is a safer alternative that achieves the same goal. Only use destructive operations when they are truly the best approach.\n    - Never skip hooks (--no-verify) or bypass signing (--no-gpg-sign, -c commit.gpgsign=false) unless the user has explicitly asked for it. If a hook fails, investigate and fix the underlying issue.`;
}

var c6r = [ "dangerouslyDisableSandbox" ], Wkn = [ ...c6r, "run_in_background" ];

export { mrr, _Kt, DJo, d6r, c6r, Wkn };
