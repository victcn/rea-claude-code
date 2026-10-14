// Sign-in skill: check script (template, optional).
//
// Before a saved session is reused, `ct-auth.mjs sign-in` runs this file with a copy of
// it at $CLAUDE_TEST_OUTPUT/storageState.json. Exit 0 if that session is still signed
// in; any other exit makes it sign in again (scripts/sign-in.mjs). Keep it to one
// cheap request.

import { request } from 'playwright' // provided by the browser tooling that "ct.mjs install" puts in place
import { existsSync } from 'node:fs'
import { join } from 'node:path'

// ── EDIT: a page only a signed-in member gets a 200 for (anonymous visitors are
// redirected to the login page or get 401/403) ───────────────────────────────────────
const CHECK_PATH = '/account'
// ── end EDIT ────────────────────────────────────────────────────────────────────────

const origin = process.env.CLAUDE_TEST_TARGET_ORIGIN
const outDir = process.env.CLAUDE_TEST_OUTPUT
if (!origin || !outDir) { console.error('run this through "ct-auth.mjs sign-in", not by hand (CLAUDE_TEST_TARGET_ORIGIN / CLAUDE_TEST_OUTPUT are not set)'); process.exit(2) }

const statePath = join(outDir, 'storageState.json')
if (!existsSync(statePath)) { console.error('no remembered session state to check'); process.exit(1) }
const ctx = await request.newContext({ storageState: statePath, ...proxyOption() })
try {
  const r = await ctx.get(new URL(CHECK_PATH, origin).toString(), { maxRedirects: 0, timeout: 20_000 })
  if (r.status() !== 200) { console.error(`${CHECK_PATH} answered ${r.status()} — the session is no longer signed in`); process.exit(1) }
} catch (e) {
  console.error((e instanceof Error ? e.message : String(e)).split('\n')[0].slice(0, 300))
  process.exit(1)
} finally {
  await ctx.dispose().catch(() => {})
}

function proxyOption() {
  const raw = process.env.HTTPS_PROXY || process.env.https_proxy
  if (!raw) return {}
  const u = new URL(raw.includes('://') ? raw : `http://${raw}`)
  return {
    proxy: {
      server: `${u.protocol}//${u.host}`,
      ...(u.username ? { username: decodeURIComponent(u.username) } : {}),
      ...(u.password ? { password: decodeURIComponent(u.password) } : {}),
      ...(process.env.NO_PROXY || process.env.no_proxy ? { bypass: (process.env.NO_PROXY || process.env.no_proxy) } : {}),
    },
  }
}
