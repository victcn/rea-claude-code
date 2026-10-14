# Claude Code v2.1.299 — Extracted System & Orchestrator Prompts

## 1. Base System Identity Prompts (`src/chunk-gmq0qwep.js`)

- **Interactive CLI Identity (`el`)**:
  > `You are Claude Code, Anthropic's official CLI for Claude.`
- **SDK Appended Identity (`Bd`)**:
  > `You are Claude Code, Anthropic's official CLI for Claude, running within the Claude Agent SDK.`
- **SDK Default Agent Identity (`Hd`)**:
  > `You are a Claude agent, built on Anthropic's Claude Agent SDK.`

## 2. Core Built-in Tool Definitions (`src/chunk-8h81c13v.js`)

| Tool | Description |
| :--- | :--- |
| `bash` | Run a bash command in a persistent shell. State (cwd, env vars) persists across calls. |
| `read` | Read a UTF-8 text file relative to the workdir. |
| `write` | Write a UTF-8 text file relative to the workdir, creating parent directories as needed. |
| `edit` | Replace old_string with new_string in a file. old_string must be unique unless replace_all. |
| `glob` | Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first. |
| `grep` | Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker. |

## 3. Coordinator / Multi-Agent Orchestrator Prompt (`src/chunk-1qs7jgw6.js`)

```javascript
// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.299
import{Le}from"./chunk-2v9tfgc3.js";import{Ldn,ny}from"./chunk-3pqddg8f.js";import{c}from"./chunk-hwdwjvh8.js";import{Rr}from"./chunk-xywp7esx.js";import{gr}from"./chunk-z52kmxx4.js";import{a}from"./chunk-j016gcgm.js";import{Ou}from"./chunk-kawq2919.js";import{i}from"./chunk-hedpgw9m.js";import{g}from"./chunk-3ykz5st8.js";import{ht,je,Rt}from"./chunk-s2t7g8m9.js";import{$t,qO}from"./chunk-g6nh65r0.js";import{fn}from"./chunk-f1zpf9me.js";import{oE}from"./chunk-cbnt62tv.js";import{vw,$l,lh,Sm,Uvs,IFe,Tt}from"./chunk-9tdwgnpn.js";import{gt}from"./chunk-yebkpv3k.js";import{TF,xat,Lys,Nys}from"./chunk-xd492737.js";import{Tg}from"./chunk-8es5wy4r.js";import{xa,Lh}from"./chunk-8a4rbyjg.js";import{Eu}from"./chunk-rkfs82vw.js";import{Md}from"./chunk-7znrwrqz.js";import{Od}from"./chunk-gxwv3c1r.js";import{PP}from"./chunk-bdevabaf.js";import{F$e}from"./chunk-vdj7v75q.js";import{Ni}from"./chunk-tzmg667a.js";import{Na}from"./chunk-sz89b5r8.js";import{ho}from"./chunk-9r9vcg3z.js";import{Lc}from"./chunk-ejckqh3m.js";import{et}from"./chunk-59na0977.js";import{Dn}from"./chunk-q0e8j22k.js";function d1(){return Rr("tengu_violin_rosin",!1)===!0&&!Lc()&&!Ldn()&&!gr()}function h$e(){return Le("true")}function WYe(){return Rr("tengu_indexed_corbato",!1)}function w(){return a.CLAUDE_CODE_COORDINATOR_SKILL_GUIDANCE}function _(){let{isScratchpadEnabled:t}=import.meta.require("./chunk-p0r9h0hz.js");return t()}var T="Workers have access to MCP tools from these connected MCP servers: ";function E(t){return $t(qO(Ou(t)))}var O=new Set([Dn,xa]);function C(t){{let{isPluginSkillToolAdvertised:r}=import.meta.require("./chunk-pveg2w0a.js");return r(t)}return!0}var S='Your bare assistant text does NOT reach the user. Your comms tools are the only channel to them: every turn must end in a comms-tool call (reply, react, or an explicit no-reply), and "tell the user" below always means a comms-tool call.',A='post a one-line "launched X" via your comms tool',m='"Use the /<name> skill"',x=`Before you brief a worker on work a listed skill covers, or reply about that work, load the skill with your ${ho} tool (read-only: its instructions load, nothing runs) so your brief and reply follow it, and put ${m} in the worker's prompt, because only workers execute skills.`;function y$e(){return Na()}function s6s(t){if(!t)return;let r=y$e(),o=t==="coordinator";if(r===o)return;if(o)process.env.CLAUDE_CODE_COORDINATOR_MODE="1";else delete process.env.CLAUDE_CODE_COORDINATOR_MODE;let n=y$e();if(n===r){if(o)delete process.env.CLAUDE_CODE_COORDINATOR_MODE;return}if(!n)Nys();return i("tengu_coordinator_mode_switched",{to:c(t)}),g("coordinator_session_mode_match"),n?"Entered coordinator mode to match resumed session.":"Exited coordinator mode to match resumed session."}function i6s(t,r,o,n){if(!y$e())return{};let d=oE()>1,h=a.CLAUDE_CODE_SIMPLE?[...$l()?[je]:[],...vw()?[Rt]:[],et,ht,...d?[gt]:[]].sort():[...d?[gt]:[],...Array.from(xat)].filter((e)=>!O.has(e)).filter((e)=>e!==Eu||!1).filter((e)=>e!==fn||PP()).filter((e)=>e!==TF||h$e()).filter((e)=>e!==lh||d1()).filter((e)=>C(e)).filter((e)=>e!==Sm||!1).sort(),f=new Map(r().map((e)=>[e.name,e.searchHint])),u=h.map((e)=>{let l=f.get(e);return l?`- ${e}: ${l}`:`- ${e}`}).join(`
`),s=`Workers spawned via the ${gt} tool have access to these tools:
${u}`;if(h.includes(fn)){if(s+=`

${fn} pages are HTML: when you delegate a report, write-up,
```
