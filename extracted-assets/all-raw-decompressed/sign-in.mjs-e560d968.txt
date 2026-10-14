// Sign-in skill: run script (template).
//
// `ct-auth.mjs sign-in` runs this file with Node before a run, when there is no usable
// saved session. It must sign the dedicated test account in and leave the browser session
// for ct-auth.mjs to save. Contract:
//
//   reads   CLAUDE_TEST_TARGET_ORIGIN        the site under test, e.g. http://localhost:3000
//           CLAUDE_TEST_OUTPUT               an empty directory; write storageState.json here
//           CLAUDE_TEST_BROWSER_EXECUTABLE   the browser to use, when set
//           HTTPS_PROXY / NO_PROXY           a proxy, when one is set (pass it to the browser)
//           CT_TEST_MEMBER_EMAIL, CT_TEST_MEMBER_PASSWORD   the variables YOU set (in the environment, or in the project's private secrets.env)
//   writes  $CLAUDE_TEST_OUTPUT/storageState.json          (Playwright storage state)
//   prints  optionally, as its LAST stdout line, a JSON object of strings; they are saved in the private
//           secrets.env so a spec can type a value by its name — never printed anywhere else
//   exits   0 on success; anything else is "sign-in unavailable" for the specs that needed it,
//           and the last lines of stderr become the reason shown with the result
//
// Everything between the EDIT markers is yours to change; the rest can stay as it is.

import { chromium } from 'playwright' // provided by the browser tooling that "ct.mjs install" puts in place; your own copy when you run it by hand
import { join } from 'node:path'

// ── EDIT: your site's login page and form ───────────────────────────────────────────
const LOGIN_PATH = '/login'
const EMAIL_FIELD = 'input[name="email"]'
const PASSWORD_FIELD = 'input[name="password"]'
const SUBMIT_BUTTON = 'button[type="submit"]'
// Something only a signed-in member sees. The script waits for it after submitting.
const SIGNED_IN_MARKER = '[data-test="account-menu"]'
// The variables you set (names only here; the values live outside the
// repository).
const EMAIL = process.env.CT_TEST_MEMBER_EMAIL
const PASSWORD = process.env.CT_TEST_MEMBER_PASSWORD
// ── end EDIT ────────────────────────────────────────────────────────────────────────

const origin = process.env.CLAUDE_TEST_TARGET_ORIGIN
const outDir = process.env.CLAUDE_TEST_OUTPUT
if (!origin || !outDir) fail('CLAUDE_TEST_TARGET_ORIGIN / CLAUDE_TEST_OUTPUT are not set (run this through "ct-auth.mjs sign-in", not by hand)')
if (!EMAIL || !PASSWORD) fail('CT_TEST_MEMBER_EMAIL / CT_TEST_MEMBER_PASSWORD are not set')

let browser
let withoutSandbox = false
try {
  // chromiumSandbox is always passed, so that no version of Playwright decides it: true asks for Chrome's own sandbox, which Playwright leaves off unless
  // a launch asks; false is for root (containers, CI), who cannot have it. Where the sandbox cannot start, Chrome does not start at all. Only then is
  // the launch made once more with false; any other failure is reported as it came.
  const asRoot = typeof process.getuid === 'function' && process.getuid() === 0
  const launchOptions = {
    headless: true,
    ...(process.env.CLAUDE_TEST_BROWSER_EXECUTABLE ? { executablePath: process.env.CLAUDE_TEST_BROWSER_EXECUTABLE } : {}),
    args: asRoot ? ['--no-sandbox'] : [],
    ...proxyOption(),
  }
  try {
    browser = await chromium.launch({ ...launchOptions, chromiumSandbox: !asRoot })
    if (asRoot) {
      console.error('note: as root, Chrome cannot start its own sandbox, so the sign-in browser ran without that sandbox')
      withoutSandbox = true
    }
  } catch (e) {
    const why = asRoot ? null : sandboxReason(e)
    if (!why) throw e
    browser = await chromium.launch({ ...launchOptions, chromiumSandbox: false })
    // For the person when sign-in then fails: only the last lines of what is written here are shown, beside the reason for the failure.
    console.error(`note: Chrome could not start with its own sandbox here${why.known ? ` (${why.known})` : ''}, so the sign-in browser ran without that sandbox`)
    withoutSandbox = true
  }
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto(new URL(LOGIN_PATH, origin).toString(), { waitUntil: 'domcontentloaded', timeout: 45_000 })
  // Refuse to type the password anywhere but the site under test.
  refuseOffSite(page)
  await fillOnSite(page, EMAIL_FIELD, EMAIL)
  await fillOnSite(page, PASSWORD_FIELD, PASSWORD)
  await page.click(SUBMIT_BUTTON, { timeout: 15_000 })
  try {
    await page.waitForSelector(SIGNED_IN_MARKER, { timeout: 30_000 })
  } catch {
    fail(`after submitting the form, ${SIGNED_IN_MARKER} did not appear within 30s (wrong password, a changed form, or a CAPTCHA) — page is ${new URL(page.url()).pathname}`)
  }
  await context.storageState({ path: join(outDir, 'storageState.json') })
  // Optional: let a spec type the member's email by the name member_email (for example to
  // check it is shown on the account page). Do not print the password unless a spec must type it.
  console.log(JSON.stringify({ member_email: EMAIL }))
  // A fixed mark, written last so that it is among the lines ct-auth.mjs keeps: when sign-in works it tells the person in words of its own, and nothing
  // else written here is passed on.
  if (withoutSandbox) console.error('claude-test-note: no-chrome-sandbox')
} catch (e) {
  fail(oneLine(e))
} finally {
  await browser?.close().catch(() => {})
}

function refuseOffSite(page) {
  const at = new URL(page.url())
  if (at.origin === origin) return
  // The browser's error page, a blank page and other pages that are not on http or https have no web address to print.
  const where = at.protocol === 'http:' || at.protocol === 'https:' ? at.origin : "a page with no web address, such as the browser's error page"
  fail(`the login page left ${origin} for ${where}; not typing the test account's email or password there. Check LOGIN_PATH in this script; if signing in happens on another site, sign in by hand once with "ct-auth.mjs login" instead`)
}

// A page can go elsewhere while the script waits for a login field, so the address is checked after the
// wait. The fill uses the element that was found, not the selector: once the page goes elsewhere that
// element stops working and the fill fails.
async function fillOnSite(page, selector, value) {
  const giveUp = Date.now() + 15_000
  const left = () => Math.max(1, giveUp - Date.now())
  const foundButNotTyped = () => new Error(`the login field ${selector} was found but could not be typed into within 15s; check that it is not disabled or read-only and that the page does not replace or remove it, and check LOGIN_PATH in this script`)
  let found = false
  for (;;) {
    const field = await page.waitForSelector(selector, { timeout: left() }).catch((e) => {
      refuseOffSite(page) // no field may mean the page went elsewhere: say that first
      if (e?.name !== 'TimeoutError') throw e
      throw found ? foundButNotTyped() : new Error(`the login field did not show in 15s: ${selector}; check LOGIN_PATH and the selector`)
    })
    found = true
    refuseOffSite(page) // page.url() is the field's page or a later one; a later page on the site makes the fill below fail and try again
    const { done, error } = await field.fill(value, { timeout: Math.min(2_000, left()) }).then(() => ({ done: true }), (error) => ({ done: false, error }))
    if (done) return
    refuseOffSite(page) // a failed fill may mean the page went elsewhere: say that first
    // Try again only if the field was not ready yet (a timeout), or it is gone because the form drew it again or the page moved (then pause first).
    const notReady = error?.name === 'TimeoutError'
    if (!notReady && !String(error?.message).includes('not attached to the DOM')) throw error
    if (Date.now() >= giveUp) throw foundButNotTyped()
    if (!notReady) await page.waitForTimeout(250)
  }
}

function fail(why) {
  // stderr is the reason shown with the result; keep it to one plain line and never include a secret.
  console.error(PASSWORD ? String(why).split(PASSWORD).join('***') : String(why))
  process.exit(1)
}

// Tells whether a failed launch's message shows that a sandbox stopped Chrome: null if not, else { known }: this script's own short text for a line in the
// list of known lines below, or null for any other line, whose words it does not print. Proof: Chrome's own "No usable sandbox" line; the setuid helper's two
// unprefixed lines, "Failed to move to new namespace" and "The setuid sandbox is not running as root"; Playwright's "Chromium sandboxing failed"; a FATAL line
// whose words name the sandbox, the namespace, setuid or the zygote. Not proof: a WARNING line, a file's name, Chrome's advice alone, the command line.
// This is a copy of sandboxFailureLine in the plugin's lib/tools.mjs, which this script cannot import from a person's repository; the plugin's tests run
// one table of texts through both.
function sandboxReason(e) {
  // the characters the plugin's own check drops before it asks whether any words are left: control characters and invisible ones
  const INVISIBLE = new RegExp('(?:[\\p{Cc}' + String.raw`\u2028\u2029\uFE00-\uFE0D\u{E0100}-\u{E01EF}]|(?![\u200C\u200D])\p{Cf}|[\u115F\u1160\u3164\uFFA0\u2065\uFFF0-\uFFF8\u{E0000}\u{E0002}-\u{E001F}\u{E0080}-\u{E00FF}\u{E01F0}-\u{E0FFF}]` + ')+', 'gu')
  const lines = String(e instanceof Error ? e.message : e)
    .replace(/\u001b\[[0-9;]*m/g, '')
    .split('\n')
    .filter((l) => !/<launch(ing|ed)>/.test(l))
    .map((l) => (l.includes('][err] ') ? l.slice(l.indexOf('][err] ') + 7) : l).trim())
  const parts = (l) => {
    const m = /^\[[^\]]{0,160}\]\s*/.exec(l)
    return { fatal: !!m && /:FATAL:/.test(m[0]), words: m ? l.slice(m[0].length) : l }
  }
  const line =
    lines.find((l) => /No usable sandbox/i.test(l)) ||
    lines.find((l) => /^(Failed to move to new namespace|The setuid sandbox is not running as root)/.test(l)) ||
    lines.find((l) => /Chromium sandboxing failed/i.test(l)) ||
    lines.find((l) => parts(l).fatal && /sandbox|namespace|setuid|zygote/i.test(parts(l).words))
  if (!line) return null
  const words = parts(line).words
  const sentences = words
    .split(' Otherwise see')[0]
    .split(/\s*If you want to live dangerously/)[0]
    .split(/(?<=[.!])\s+/)
  if (!sentences.some((s) => s.replace(INVISIBLE, '').trim() && !/--no-sandbox/.test(s))) return null
  const known = [
    [/^No usable sandbox!/, 'No usable sandbox!'],
    [/^Failed to move to new namespace\b/, 'Failed to move to new namespace'],
    [/^The setuid sandbox is not running as root\./, 'The setuid sandbox is not running as root.'],
    [/^Chromium sandboxing failed!/, 'Chromium sandboxing failed!'],
    [/^Zygote process exited prematurely\b/, 'Zygote process exited prematurely'],
  ].find(([start]) => start.test(words))
  return { known: known ? known[1] : null }
}

function oneLine(e) {
  const msg = e instanceof Error ? e.message : String(e)
  // Playwright appends a multi-line call log; the first line is the reason.
  return msg.split('\n')[0].slice(0, 300)
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
