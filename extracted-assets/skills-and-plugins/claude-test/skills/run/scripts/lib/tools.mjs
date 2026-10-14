




import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn, spawnSync } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { RC_FILE, PLAYWRIGHT_MCP_VERSION, PLAYWRIGHT_PIN, envPathOutsideProject, insideProjectReally, reallyInsideDir, trustedHome, homeTampered, dirNotPrivateProblem, playwrightRegistryDir, launcherConfig, browserServerEnv, dataRoot, shown } from './config.mjs';



export function cacheDir() {
  let cache = process.env.XDG_CACHE_HOME || (process.platform === 'win32' && process.env.LOCALAPPDATA) || path.join(os.homedir(), '.cache');
  if (insideProjectReally(path.resolve(cache))) cache = path.join(trustedHome(), '.cache');
  const dir = path.join(cache, 'claude-test');
  if (homeTampered() && insideProjectReally(path.resolve(dir))) { process.stderr.write('[claude-test] refusing to run: HOME points into the project, and this plugin runs sign-in scripts from its cache there\n'); process.exit(2); }
  return dir;
}



export function toolsDir() { return path.join(dataRoot(), 'tools'); }




export function makeLaunchDir() {
  const root = path.join(dataRoot(), 'launch');
  fs.mkdirSync(root, { recursive: true, mode: 0o700 });


  let old = []; try { old = fs.readdirSync(root); } catch {                        }
  for (const e of old) {
    const m = e.match(/^(\d+)-[0-9a-f]{16}$/); if (!m) continue;
    let idleMs = 0; try { idleMs = Date.now() - fs.lstatSync(path.join(root, e)).mtimeMs; } catch { continue; }
    if (idleMs < 15 * 60 * 1000) continue;
    let alive = true; try { process.kill(Number(m[1]), 0); } catch (err) { alive = !!err && err.code === 'EPERM'; }
    if (!alive || idleMs > 7 * 24 * 3600 * 1000) { try { fs.rmSync(path.join(root, e), { recursive: true, force: true }); } catch {                          } }
  }
  const dir = path.join(root, process.pid + '-' + crypto.randomBytes(8).toString('hex'));
  fs.mkdirSync(dir, { mode: 0o700 });
  fs.mkdirSync(path.join(dir, 'out'), { mode: 0o700 });
  const touch = setInterval(() => { try { const now = new Date(); fs.utimesSync(dir, now, now); } catch {                             } }, 5 * 60 * 1000); touch.unref();
  process.on('exit', () => { try { fs.rmSync(dir, { recursive: true, force: true }); } catch {                                  } });
  return dir;
}





export function browsersDir() { return path.join(toolsDir(), 'browsers'); }
export function useOwnBrowsersIfPresent() {
  try { if (fs.readdirSync(browsersDir()).some((d) => /^(chromium|chromium_headless_shell|firefox|webkit|ffmpeg|msedge|chrome)[-_]/.test(d))) process.env.PLAYWRIGHT_BROWSERS_PATH = browsersDir(); } catch {                               }
}






export function tightenToolsDir(root = toolsDir()) {
  let n = 0;
  try { root = fs.realpathSync(root); } catch { return 0; }


  try { if (JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).name !== 'claude-test-tools') return 0; } catch { return 0; }
  const walk = (p) => { let st; try { st = fs.lstatSync(p); } catch { return; } if (st.isSymbolicLink()) return; if (st.mode & 0o022) { try { fs.chmodSync(p, st.mode & 0o7755 & ~0o022); n++; } catch {                } } if (st.isDirectory()) { let ents = []; try { ents = fs.readdirSync(p); } catch { return; } for (const e of ents) walk(path.join(p, e)); } };
  try { const st = fs.lstatSync(root); if (st.mode & 0o022) { fs.chmodSync(root, st.mode & 0o7755 & ~0o022); n++; } } catch {       }
  for (const sub of ['node_modules', 'browsers', 'package.json', 'package-lock.json']) walk(path.join(root, sub));
  return n;
}








export function browserSelection(cfg) {
  const exe = envPathOutsideProject('CLAUDE_TEST_BROWSER_EXECUTABLE');
  const named = process.env.CLAUDE_TEST_BROWSER || (cfg && cfg.browser) || null;
  const chromePath = exe ? null : named ? null : findChrome();
  const browser = named || (exe || chromePath ? null : 'chromium');
  const usesRegistry = !exe && !!browser && !/^(chrome|msedge)(-|$)/.test(browser);
  return { exe, chromePath, browser, usesRegistry };
}



export function browserProblem(cfg) {
  const { browser } = browserSelection(cfg);
  if (!browser || /^(chromium|chrome|msedge)(-|$)/.test(browser)) return null;
  const asked = browser === 'firefox' || browser === 'webkit' ? '"' + browser + '"' : 'a value Claude Test does not support';
  return 'the test browser can only be chrome, msedge or chromium: no other browser can be held to the allowed addresses. CLAUDE_TEST_BROWSER asks for ' + asked + ': unset it (in the shell, or under "env" in a Claude Code settings file), then restart Claude Code once';
}
const useOwn = () => { const v = process.env.PLAYWRIGHT_BROWSERS_PATH; return !!v && path.resolve(v) === path.join(toolsDir(), 'browsers'); };


export function sharedPlaceProblem(p) { if (process.platform === 'win32') return null; try { const st = fs.statSync(p); if (typeof process.getuid === 'function' && st.uid !== process.getuid() && st.uid !== 0) return p + ' is owned by another user (uid ' + st.uid + ')'; if (st.mode & 0o002) return p + ' is writable by every user (mode ' + (st.mode & 0o777).toString(8) + ')'; return null; } catch { return null; } }
const sharedPlaces = new Set();
function executedPlaces() {
  const dir = toolsDir(); const b = path.join(dir, 'browsers');
  const places = [dir, path.join(dir, 'node_modules'), path.join(dir, 'node_modules', '@playwright', 'mcp'), path.join(dir, 'node_modules', '@playwright', 'mcp', 'cli.js'), path.join(dir, 'node_modules', 'playwright-core'), path.join(dir, 'node_modules', 'playwright-core', 'lib'), path.join(dir, 'node_modules', 'playwright'), path.join(dir, 'node_modules', 'playwright', 'lib'), path.join(dir, 'package.json'), path.join(dir, 'package-lock.json'), b, ...ABSENT_OPTIONAL_PACKAGES.map((n) => path.join(dir, 'node_modules', n))];
  try { for (const e of fs.readdirSync(b)) places.push(path.join(b, e)); } catch {                       }
  const reg = playwrightRegistryDir();


  let usesRegistry = true; try { usesRegistry = browserSelection(launcherConfig().cfg).usesRegistry; } catch {                                                  }
  if (reg && reg.dir && reg.dir !== b && !useOwn() && usesRegistry) { for (const p of [reg.dir, ...(() => { try { return fs.readdirSync(reg.dir).filter((e) => /^(chromium|chrome|ffmpeg|firefox|webkit|msedge|winldd)/.test(e)).map((e) => path.join(reg.dir, e)); } catch { return []; } })()]) { places.push(p); sharedPlaces.add(p); } }
  return places.filter((p) => fs.existsSync(p));
}
function placeProblem(p) { if (sharedPlaces.has(p)) return sharedPlaceProblem(p); try { const st = fs.statSync(p);                                                                                                                                   if (st.isDirectory()) return dirNotPrivateProblem(p); if (st.mode & 0o022) return p + ' is writable by group or other users (mode ' + (st.mode & 0o777).toString(8) + ')'; if (typeof process.getuid === 'function' && st.uid !== process.getuid() && st.uid !== 0) return p + ' is owned by another user (uid ' + st.uid + ')'; return null; } catch { return null; } }
function assertToolsDirPrivate() {
  for (const d of executedPlaces()) { const why = placeProblem(d); if (why) { process.stderr.write('[claude-test] refusing to run a browser/tooling from a place others can write: ' + why + (sharedPlaces.has(d) ? ' (the shared Playwright registry: fix its owner/mode, point PLAYWRIGHT_BROWSERS_PATH at a private folder, or run "ct.mjs install chromium" for an own copy)' : ' (chmod go-w it, or re-run "ct.mjs install")') + '\n'); process.exit(2); } }
}


export function toolsProblem() { for (const d of executedPlaces()) { const why = placeProblem(d); if (why) return why + (sharedPlaces.has(d) ? ' — that is the shared Playwright browser registry: fix its owner/mode, point PLAYWRIGHT_BROWSERS_PATH at a private folder, or run "ct.mjs install chromium" to give Claude Test its own copy' : ' — chmod go-w it, or re-run "ct.mjs install"'); } return null; }

export function mcpCliPath({ forInstall = false, report = false } = {}) {
  const p = path.join(toolsDir(), 'node_modules', '@playwright', 'mcp', 'cli.js');
  if (!fs.existsSync(p)) return null;
  if (report) return p;
  if (!forInstall) assertToolsDirPrivate();
  return p;
}







function toolsDirIsOursOrEmpty(dir) {
  let ents; try { ents = fs.readdirSync(dir); } catch (e) { return e.code === 'ENOENT'; }
  if (ents.length === 0) return true;
  try { return JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')).name === 'claude-test-tools'; } catch { return false; }
}


export function toolsLockPath() { return path.join(path.dirname(fileURLToPath(import.meta.url)), 'tools-lock.json'); }



export const ABSENT_OPTIONAL_PACKAGES = ['fsevents', 'bufferutil', 'utf-8-validate', 'kerberos'];



export function writeStandInPackages(nodeModules) {
  for (const name of ABSENT_OPTIONAL_PACKAGES) {
    const dir = path.join(nodeModules, name);
    if (fs.existsSync(path.join(dir, 'package.json'))) continue;
    fs.mkdirSync(dir, { recursive: true, mode: 0o755 });
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name, version: '0.0.0', private: true, main: 'index.js', description: 'Stand-in written by the claude-test plugin: this optional package is not installed here.' }, null, 2) + '\n', { mode: 0o644 });
    fs.writeFileSync(path.join(dir, 'index.js'), "throw Object.assign(new Error(\"Cannot find module '" + name + "' (not installed: a stand-in written by the claude-test plugin)\"), { code: 'MODULE_NOT_FOUND' });\n", { mode: 0o644 });
  }
}

const DROPPED_ENV = /^(https?_proxy|all_proxy|no_proxy|node_extra_ca_certs|ssl_cert_file|ssl_cert_dir)$/i;

const envProxy = () => Object.keys(process.env).some((k) => /^(https?_proxy|all_proxy)$/i.test(k) && !!process.env[k]);

const envCa = () => Object.keys(process.env).some((k) => /^(node_extra_ca_certs|ssl_cert_file|ssl_cert_dir)$/i.test(k) && !!process.env[k]);



export function npmrcVariable() {
  let rc = ''; try { rc = fs.readFileSync(path.join(trustedHome(), '.npmrc'), 'utf8'); } catch { return null; }
  let found = null;
  for (const line of rc.split(/[\r\n]+/)) {
    const m = /^\s*([^=#;\s][^=]*?)\s*=(.*)$/.exec(line);
    if (!m || ![...line.matchAll(/\$\{([^}]*)\}/g)].some((x) => x[1].replace(/\?$/, '') !== 'HOME')) continue;
    const key = m[1].trim().replace(/^(["'])(.*)\1$/, '$2');
    if (!/^((@[^:\s]+:)?registry|proxy|https?-proxy|noproxy|cafile|cache|prefix|userconfig|globalconfig)$/i.test(key) || m[2].includes('@')) return 'secret';
    found = 'address';
  }
  return found;
}


function privateTmp() {
  const tmp = path.join(dataRoot(), 'tmp');
  const fit = (p) => { try { const st = fs.lstatSync(p); return st.isDirectory() && !dirNotPrivateProblem(p, st); } catch { return false; } };
  if (!fit(tmp)) { try { fs.rmSync(tmp, { recursive: true, force: true }); fs.mkdirSync(tmp, { recursive: true, mode: 0o700 }); } catch {                    } }
  if (fit(tmp)) return tmp;
  try { const p = fs.mkdtempSync(path.join(dataRoot(), 'claude-test-tmp-')); if (fit(p)) return p; } catch {            }
  return null;
}




export function uncheckedEnv() {
  const env = {};
  for (const [k, v] of Object.entries(browserServerEnv())) if (!DROPPED_ENV.test(k)) env[k] = v;
  const home = trustedHome();
  env.HOME = home;
  const tmp = privateTmp();
  for (const k of ['TMPDIR', 'TMP', 'TEMP']) { if (tmp) env[k] = tmp; else delete env[k]; }
  if (process.platform === 'win32') env.USERPROFILE = home;
  if (process.platform === 'win32') { env.APPDATA = path.join(home, 'AppData', 'Roaming'); env.LOCALAPPDATA = path.join(home, 'AppData', 'Local'); }
  return env;
}


export function npmRegistry() {
  const r = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['config', 'list', '--json'], { cwd: trustedHome(), encoding: 'utf8', shell: process.platform === 'win32', env: uncheckedEnv() });
  let cfg = null; try { cfg = r.status === 0 ? JSON.parse(String(r.stdout || '')) : null; } catch { cfg = null; }
  if (!cfg || typeof cfg !== 'object') return null;
  const href = (x) => { try { return new URL(String(x)).href; } catch { return null; } };
  const v = String(cfg.registry || ''); const w = href(v); if (!w || (v !== w && v + '/' !== w)) return null;
  const u = new URL(w);
  if (cfg['@playwright:registry'] !== undefined && href(cfg['@playwright:registry']) !== w) return null;
  return u.protocol === 'https:' && !u.username && !u.password && shown(w, 400) === w && !/[&|<>^%!"`\s]/.test(w) ? w : null;
}



export function installTools(options = {}) {
  if (!options.noLock && !options.allowFallback) return installToolsWith(options, null);

  try { for (const n of fs.readdirSync(dataRoot())) { const p = path.join(dataRoot(), n); if (n.startsWith('npm-cache-') && Date.now() - fs.lstatSync(p).mtimeMs > 3_600_000) fs.rmSync(p, { recursive: true, force: true }); } } catch {       }
  let cache = null; try { fs.mkdirSync(dataRoot(), { recursive: true }); cache = fs.mkdtempSync(path.join(dataRoot(), 'npm-cache-')); } catch (e) { return { ok: false, log: String((e && e.message) || e), dir: toolsDir(), registry: null, remedy: 'the install could not make a folder for its npm cache in ' + shown(dataRoot(), 160) + ' (' + ((e && e.code) || 'error') + '). Tell the person this. Do not install another way.' }; }
  try { return installToolsWith(options, cache); } finally { try { fs.rmSync(cache, { recursive: true, force: true }); } catch {       } }
}

const freshTmp = (cache) => { if (!cache) return {}; const tmp = path.join(cache, 'tmp'); try { fs.mkdirSync(tmp, { mode: 0o700 }); } catch {       } return { TMPDIR: tmp, TMP: tmp, TEMP: tmp }; };


function installToolsWith({ noLock = false, allowFallback = false, registry: shownRegistry = null } = {}, cache) {
  const unchecked = !!(noLock || allowFallback);
  if (unchecked && !shownRegistry) return { ok: false, log: '', dir: toolsDir(), registry: null, remedy: 'no registry was named for an install without checksums' };
  const dir = toolsDir();
  if (!toolsDirIsOursOrEmpty(dir)) return { ok: false, log: '', dir, registry: null, remedy: dir + ' already holds something that is not a Claude Test tools folder (no claude-test-tools package.json) — move it away, then run the install again' };


  for (const f of ['package-lock.json', 'npm-shrinkwrap.json', '.npmrc']) { try { fs.rmSync(path.join(dir, f), { force: true }); } catch {       } }


  const nm = path.join(dir, 'node_modules');
  if (fs.existsSync(nm) && executedPlaces().filter((p) => p === nm || p.startsWith(nm + path.sep)).some((p) => placeProblem(p))) { try { fs.rmSync(nm, { recursive: true, force: true }); } catch {                                     } }
  const cannotWrite = (e) => ({ ok: false, log: String((e && e.message) || e), dir, registry: null, remedy: 'the install cannot write ' + dir + ' (' + ((e && e.code) || 'error') + '), where the browser tooling lives. Check that this folder and the ones above it are yours and writable (owner, mode, a read-only home), then install again.' + ((e && e.code === 'EROFS') || process.env.SANDBOX_RUNTIME === '1' ? ' If Claude Code ran this command, its sandbox may be what refused: run it in your own terminal' : '') });
  try { fs.mkdirSync(dir, { recursive: true, mode: 0o755 }); } catch (e) { return cannotWrite(e); }
  try { fs.chmodSync(dir, 0o755); } catch {       }
  const manifest = { name: 'claude-test-tools', private: true, description: 'Browser tooling for the claude-test plugin. Safe to delete.', dependencies: { '@playwright/mcp': PLAYWRIGHT_MCP_VERSION }, overrides: { playwright: PLAYWRIGHT_PIN, 'playwright-core': PLAYWRIGHT_PIN } };
  const writeManifest = (extra) => fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ ...manifest, ...(extra ? { claudeTest: extra } : {}) }, null, 2) + '\n');
  try { writeManifest(null); } catch (e) { return cannotWrite(e); }
  if (process.platform === 'win32' && /[&|<>^%!"`\r\n]/.test(dir)) return { ok: false, log: 'refusing to install into ' + dir + ': the path contains characters cmd.exe would interpret', dir, registry: null, remedy: 'the path of the tools folder holds characters that cmd.exe would read as commands, so Claude Test cannot install there. Tell the person this, and that Claude Test cannot run on this machine until that path changes. Do not change that path unless the person asks you to. Do not change, move or delete the folder unless the person asks you to. Do not install another way.', forPerson: 'the path of the tools folder holds characters that cmd.exe would read as commands, so Claude Test cannot install there, and it cannot run on this machine until that path changes' };
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const opts = { cwd: dir, encoding: 'utf8', shell: process.platform === 'win32', ...(unchecked && { env: { ...uncheckedEnv(), ...freshTmp(cache), npm_config_cache: cache, npm_config_logs_dir: path.join(trustedHome(), '.npm', '_logs') } }) };
  const reg = unchecked ? null : spawnSync(npm, ['config', 'get', 'registry'], opts);
  const registry = unchecked ? shownRegistry : reg.status === 0 ? String(reg.stdout || '').trim() : null;
  const held = unchecked ? ['--registry=' + shownRegistry, '--@playwright:registry=' + shownRegistry, '--workspaces=false'] : [];
  let r; let log = ''; let pin = PLAYWRIGHT_PIN; let mode;
  const run = (args) => { if (unchecked) { try { fs.rmSync(path.join(dir, '.npmrc'), { force: true }); } catch {       } } r = spawnSync(npm, [...args, ...held], opts); log += (log ? '\n--- npm ' + args[0] + ' ---\n' : '') + (r.stdout || '') + (r.stderr || '') + (r.error ? String(r.error.message) : ''); return r.status === 0; };
  if (noLock) {
    mode = 'no checksums';
    process.stderr.write('[claude-test] installing without the plugin\'s checksums, as chosen in the Claude Code dialog: what your registry serves is installed\n');
    run(['install', '--no-audit', '--no-fund', '--ignore-scripts']);
  } else {
    mode = 'pinned';
    try { fs.copyFileSync(toolsLockPath(), path.join(dir, 'package-lock.json')); } catch (e) { return { ok: false, log: 'the plugin\'s tools-lock.json is missing or unreadable (' + e.message + ')', dir, registry, remedy: 'Claude Code writes the plugin\'s files again when /claude-test starts in a new session. Tell the person to restart Claude Code and run /claude-test. Do not install another way.', forPerson: 'restart Claude Code, then run /claude-test: that writes the plugin\'s files again' }; }
    run(['ci', '--no-audit', '--no-fund', '--ignore-scripts']);



    if (r.status !== 0 && /(ETARGET|notarget|No matching version)[\s\S]{0,200}\bplaywright(-core)?@(?!0\.0\.)/i.test(log)) {
      if (unchecked) { try { fs.rmSync(path.join(dir, '.npmrc'), { force: true }); } catch {       } }
      const v = spawnSync(npm, ['view', 'playwright-core', 'versions', '--json', ...held], opts);
      const cmp = (a, b) => { const x = a.split('.').map(Number), y = b.split('.').map(Number); for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); return 0; };
      let newest = null;
      try { const all = JSON.parse(String(v.stdout || '[]')); const major = PLAYWRIGHT_PIN.split('.')[0]; const ok = (Array.isArray(all) ? all : [all]).filter((x) => /^\d+\.\d+\.\d+$/.test(x) && x.split('.')[0] === major && cmp(x, PLAYWRIGHT_PIN) >= 0).sort(cmp); newest = ok[ok.length - 1] || null; } catch { newest = null; }
      if (!newest) log += '\n[claude-test] this registry carries neither playwright-core ' + PLAYWRIGHT_PIN + ' nor any newer stable ' + PLAYWRIGHT_PIN.split('.')[0] + '.x — nothing to fall back to';
      if (newest && newest !== PLAYWRIGHT_PIN && newest !== allowFallback) {
        log += '\n[claude-test] ' + (registry || 'your registry') + ' does not carry playwright ' + PLAYWRIGHT_PIN + '. It does have ' + newest + ' (newest stable ' + PLAYWRIGHT_PIN.split('.')[0] + '.x).';
        return { ok: false, log, dir, registry, playwright: PLAYWRIGHT_PIN, pinned: false, mode: 'not installed', remedy: 'your registry lacks playwright ' + PLAYWRIGHT_PIN + '. Tell the person this, and that its newest ' + PLAYWRIGHT_PIN.split('.')[0] + '.x is ' + newest + '. Set allowFallback only when the person has asked for ' + newest + '. Do not install another way, and do not change the registry unless the person asks you to.', forPerson: 'your registry lacks playwright ' + PLAYWRIGHT_PIN + '. Its newest ' + PLAYWRIGHT_PIN.split('.')[0] + '.x is ' + newest + '. To use that version, run /claude-test in Claude Code, then type to Claude: "Install the newer Playwright version that the install named." Claude Test then installs it, without the plugin\'s checksums, only after the box in a Claude Code dialog is ticked. Or use a registry that has the pinned version.', fallbackAvailable: newest };
      }
      if (newest && newest !== PLAYWRIGHT_PIN) {
        process.stderr.write('[claude-test] as chosen in the Claude Code dialog: ' + (registry || 'your registry') + ' does not carry playwright ' + PLAYWRIGHT_PIN + '; installing the newest stable ' + PLAYWRIGHT_PIN.split('.')[0] + '.x it has: ' + newest + ' — version-pinned, NOT checksum-pinned (no shipped lockfile covers it)\n');
        manifest.overrides = { playwright: newest, 'playwright-core': newest };
        writeManifest(null);
        try { fs.rmSync(path.join(dir, 'package-lock.json'), { force: true }); } catch {       }
        mode = 'fallback: playwright ' + newest + ' from the registry, no checksums';
        run(['install', '--no-audit', '--no-fund', '--ignore-scripts']);
        pin = newest;
      }
    }
  }
  if (r.status === 0) { try { writeStandInPackages(path.join(dir, 'node_modules')); } catch (e) { log += '\n[claude-test] could not write the stand-in packages (' + ((e && e.message) || e) + ')'; r = { status: 1 }; } }
  try { fs.chmodSync(path.join(dir, 'node_modules'), 0o755); } catch {       }
  tightenToolsDir(dir);
  const ok = r.status === 0 && !!mcpCliPath({ forInstall: true });
  if (ok) { try { writeManifest({ mode, pinned: mode === 'pinned', playwright: pin, mcp: PLAYWRIGHT_MCP_VERSION }); } catch {       } }
  const failed = ok ? null : installRemedy(log, registry, unchecked);
  const network = /^npm could not reach /.test((failed && failed.forPerson) || '');
  if (failed && unchecked && network) {
    const hands = ' Do not print the proxy variable. Do not read or change that .npmrc. Do not read or change npm\'s settings.';
    const other = ' Do not install another way. You may run a normal install yourself: call claude_test_install with none of the three fields.';
    const reg = registry ? shown(registry, 200) : 'the registry';
    const where = 'npm could not reach ' + reg + ' from here.';
    if (envCa() && /UNABLE_TO_GET_ISSUER_CERT|UNABLE_TO_VERIFY_LEAF_SIGNATURE|SELF_SIGNED_CERT|CERT_HAS_EXPIRED|DEPTH_ZERO_SELF_SIGNED/i.test(log)) { const said = 'npm did not accept the certificate of ' + reg + '. This install does not use an extra certificate from the environment (such as NODE_EXTRA_CA_CERTS). It trusts another certificate authority only if an npm settings file, such as the account\'s own .npmrc, names one (cafile or ca), and that setting replaces npm\'s usual list.'; failed.forPerson = said; failed.remedy = said + ' Tell the person this. Do not read or change npm\'s settings. Do not turn off npm\'s certificate check.' + other; }
    else if (envProxy()) { const said = ' This install does not use a proxy from the environment (such as HTTPS_PROXY). It uses a proxy only if an npm settings file, such as the account\'s own .npmrc, writes one out in full.'; failed.forPerson = where + said; failed.remedy = where + said + ' Tell the person this.' + hands + other; }
    else { failed.forPerson = where + ' Check the network path to it.'; failed.remedy = where + ' Tell the person this. Do not read or change npm\'s settings.' + other; }
  }
  return { ok, log, dir, registry, playwright: pin, pinned: mode === 'pinned', mode, ...(ok ? { remedy: null } : failed) };
}


let browserDirsMemo = null; let dryRunFailures = 0; let dryRunRetryAt = 0;
export function expectedChromiumDirs() {
  const info = toolsInstallInfo(); const key = info ? String(info.playwright) : '';
  if (browserDirsMemo && browserDirsMemo.key === key) return browserDirsMemo.names;
  if (dryRunFailures >= 5 || Date.now() < dryRunRetryAt) return null;
  const cli = path.join(toolsDir(), 'node_modules', 'playwright-core', 'cli.js');
  let names = null;
  try { const r = spawnSync(process.execPath, [cli, 'install', '--dry-run', 'chromium'], { cwd: toolsDir(), encoding: 'utf8', timeout: 5000, env: { ...browserServerEnv(), WS_NO_BUFFER_UTIL: '1', WS_NO_UTF_8_VALIDATE: '1', PLAYWRIGHT_BROWSERS_PATH: browsersDir() } });                                                                           const found = [...String(r.stdout || '').matchAll(/Install location:\s+(.+)$/gm)].map((m) => path.basename(m[1].trim())).filter((n) => /^chromium/.test(n)); if (r.status === 0 && found.length) names = found; } catch { names = null; }
  if (names) { browserDirsMemo = { key, names }; dryRunFailures = 0; } else { dryRunFailures++; dryRunRetryAt = Date.now() + 60000; if (dryRunFailures === 5) process.stderr.write('[claude-test] could not list the expected browser folders five times; judging by folder names from now on\n'); }
  return names;
}






export function downloadBrowser({ browser = 'chromium', downloadHost = null, progress = true } = {}) {
  return new Promise((resolve) => {
    const cli = mcpCliPath({ forInstall: true });
    if (!cli) { resolve({ ok: false, error: 'the browser tools are not installed', remedy: 'The browser tools are not installed. Tell the person this. You may run a normal install yourself: call claude_test_install with none of the three fields. Do not install or download another way.' }); return; }
    let child;
    try { fs.mkdirSync(browsersDir(), { recursive: true, mode: 0o755 }); child = spawn(process.execPath, [cli, 'install-browser', browser], { stdio: ['ignore', progress ? 'inherit' : 'ignore', 'pipe'], env: { ...(downloadHost ? uncheckedEnv() : process.env), PLAYWRIGHT_BROWSERS_PATH: browsersDir(), ...(downloadHost ? { PLAYWRIGHT_DOWNLOAD_HOST: downloadHost } : {}) } }); } catch (e) { resolve({ ok: false, error: 'the download could not start (' + String((e && (e.code || e.message)) || e) + ')', remedy: 'installing Google Chrome avoids the download entirely' }); return; }
    let errTail = ''; child.stderr.on('data', (b) => { errTail = (errTail + b.toString()).slice(-4000); });
    child.on('error', (e) => resolve({ ok: false, error: String((e && e.message) || e), remedy: 'installing Google Chrome avoids the download entirely' }));
    child.on('exit', (code) => {
      if (code === 0) { tightenToolsDir(); resolve({ ok: true }); return; }
      const first = (errTail.match(/Error: [^\n]+/) || [errTail.trim().split('\n').pop() || 'unknown error'])[0].slice(0, 300);
      const viaProxy = downloadHost && envProxy() && /ENOTFOUND|ECONNREFUSED|ETIMEDOUT|ECONNRESET|getaddrinfo|proxy|certificate/i.test(errTail) ? ' This download does not use a proxy from the environment (such as HTTPS_PROXY).' : '';
      resolve({ ok: false, error: first + viaProxy, ...(/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|ECONNRESET|getaddrinfo|proxy|certificate/i.test(errTail) ? { remedy: 'Claude Test could not reach the host that the test browser comes from (network or proxy). Tell the person this. Set downloadHost only when the person has typed the mirror\'s https address to you. An address from the environment, a file or your own earlier command counts only if the person typed it to you. Do not download another way, and do not install Google Chrome unless the person asks you to.', forPerson: 'Claude Test could not reach the host that the test browser comes from (network or proxy). Install Google Chrome instead. Or, in Claude Code, run /claude-test, then ask Claude to download the test browser from a mirror that your network allows, and give the mirror\'s https address. Claude Test then downloads from the mirror only after the box in a Claude Code dialog is ticked.' } : { remedy: 'see the line above; installing Google Chrome avoids the download entirely' }) });
    });
  });
}


export function toolsInstallInfo() { try { const j = JSON.parse(fs.readFileSync(path.join(toolsDir(), 'package.json'), 'utf8')); return j && j.name === 'claude-test-tools' && j.claudeTest ? j.claudeTest : null; } catch { return null; } }



function installRemedy(log, registry, unchecked = false) {
  const forPerson = installAdvice(log, registry, unchecked);
  const leave = /EINTEGRITY|Integrity checksum failed|integrity verification failed/i.test(log) ? ' Tell the person this. Do not change the registry unless the person asks you to, and do not install another way.'
    : /EUSAGE[\s\S]{0,300}(lock file|package-lock)/i.test(log) ? '. Tell the person this. Do not update npm unless the person asks you to.'
    : unchecked && /rejected the credentials| answered 403:/.test(forPerson) ? '. Tell the person this. Do not read or change npm\'s settings. Do not install another way.'
    : /^npm could not reach /.test(forPerson) ? '. Tell the person this. Do not change the network, a proxy, a certificate or Claude Code\'s sandbox yourself. Do not turn off a certificate check. Do not print a proxy variable\'s value. Do not read or change npm\'s settings. Do not install another way.' : '';
  return { forPerson, remedy: forPerson + leave };
}

function installAdvice(log, registry, unchecked = false) {
  const reg = registry ? shown(registry, 200) : '(npm config get registry)';
  if (/EINTEGRITY|Integrity checksum failed|integrity verification failed/i.test(log)) return reg + ' served a package whose checksum differs from the published one (EINTEGRITY) — nothing from it is used. Ask whoever runs the registry.';
  if (/EUSAGE[\s\S]{0,300}(lock file|package-lock)/i.test(log)) return 'npm refused the shipped lockfile (your npm may be too old for lockfile version 3 — Node 18+ brings a new enough npm); update npm, then install again';
  if (/ETARGET|notarget|No matching version|E404|404 Not Found/i.test(log)) return 'your npm registry ' + reg + ' does not carry the pinned packages (@playwright/mcp ' + PLAYWRIGHT_MCP_VERSION + ' with playwright-core ' + PLAYWRIGHT_PIN + ', or any stable playwright-core to fall back to); ask the registry\'s owners to mirror them, then run install again';
  if (/\b(EACCES|EPERM|EROFS)\b/.test(log) && log.includes(toolsDir())) return 'npm could not write into ' + toolsDir() + ' (a permission error). Check that this folder and what is in it are yours and writable, or delete it, then install again.' + (!unchecked && (/\bEROFS\b/.test(log) || process.env.SANDBOX_RUNTIME === '1') ? ' If Claude Code ran this command, its sandbox may be what refused: run it in your own terminal' : '');


  const sandboxed = !unchecked && (process.env.SANDBOX_RUNTIME === '1' || /^(https?:\/\/)?(srt[^/@]*@)?(localhost|127\.0\.0\.1):\d+/i.test(process.env.HTTPS_PROXY || process.env.HTTP_PROXY || process.env.https_proxy || process.env.http_proxy || ''));
  if (/ENOTFOUND|ECONNREFUSED|ECONNRESET|ETIMEDOUT|EAI_AGAIN|socket hang up|tunneling socket could not be established|UNABLE_TO_GET_ISSUER_CERT|UNABLE_TO_VERIFY_LEAF_SIGNATURE|SELF_SIGNED_CERT|CERT_HAS_EXPIRED|DEPTH_ZERO_SELF_SIGNED/i.test(log) || (sandboxed && /E403|403 Forbidden/i.test(log))) return 'npm could not reach ' + reg + ' from here — the network is blocked or filtered (Claude Code\'s sandbox, a proxy, or a certificate in between)' + (sandboxed ? '; this shell looks sandboxed: run the same install command in your own terminal' : '; fix the network path and run install again');
  if (/E401|ENEEDAUTH|Unable to authenticate|authentication token/i.test(log)) return 'your npm registry ' + reg + ' rejected the credentials npm has for it (401) — npm login / your token setup, then run install again';
  if (/E403|403 Forbidden/i.test(log)) return reg + ' answered 403: either the registry refuses this package/your account, or something between you and it (a sandbox or proxy) blocks the request — ' + (unchecked ? '' : 'if you are inside Claude Code, run the same install command in your own terminal first; otherwise ') + 'check your registry access';
  if (/spawnSync npm(\.cmd)? ENOENT|ENOENT.*npm|npm: (command )?not found/i.test(log)) return 'npm itself was not found on PATH; install Node.js (which brings npm) and run install again';
  return 'see the npm output above; registry used: ' + reg;
}




export async function importPlaywright() {
  assertToolsDirPrivate();
  try {
    const req = createRequire(path.join(toolsDir(), 'package.json'));
    for (const name of ['playwright-core', 'playwright']) {


      try { const resolved = req.resolve(name); if (!reallyInsideDir(resolved, toolsDir())) continue; const mod = await import(pathToFileURL(resolved).href); return { pw: mod.default || mod, from: resolved }; } catch {            }
    }
  } catch {                     }
  return null;
}

export function findChrome() {
  const candidates = [];
  if (process.platform === 'darwin') {
    candidates.push('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', path.join(os.homedir(), 'Applications/Google Chrome.app/Contents/MacOS/Google Chrome'));
  } else if (process.platform === 'win32') {
    for (const base of [process.env.PROGRAMFILES, process.env['PROGRAMFILES(X86)'], process.env.LOCALAPPDATA]) if (base) candidates.push(path.join(base, 'Google', 'Chrome', 'Application', 'chrome.exe'));
  } else {
    for (const dir of (process.env.PATH || '').split(path.delimiter)) for (const name of ['google-chrome', 'google-chrome-stable']) if (dir && path.isAbsolute(dir)) candidates.push(path.join(dir, name));
    candidates.push('/opt/google/chrome/chrome');
  }
  return candidates.find((c) => { try { return fs.statSync(c).isFile() && !insideProjectReally(c); } catch { return false; } }) || null;
}


export function ownChromiumBinary() {
  let dirs = []; try { dirs = fs.readdirSync(browsersDir()).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => Number(b.slice(9)) - Number(a.slice(9))); } catch { return null; }
  for (const d of dirs) {
    let names = []; try { names = fs.readdirSync(path.join(browsersDir(), d)); } catch { continue; }
    const sub = names.includes('INSTALLATION_COMPLETE') ? ['chrome-linux64', 'chrome-linux'].find((s) => names.includes(s)) : null;
    if (sub) return path.join(browsersDir(), d, sub, 'chrome');
  }
  return null;
}



export function browserBinaryOf({ chromePath, browser }) { return chromePath || (browser === 'chromium' ? ownChromiumBinary() : null); }

export function serverBrowserBinary(cfg) { const named = process.env.CLAUDE_TEST_BROWSER || (cfg && cfg.browser) || null; return browserBinaryOf({ chromePath: named ? null : findChrome(), browser: named || 'chromium' }); }

const SANDBOX_TRIAL_MS = 10000;

const SANDBOX_TRIAL_ARGS = ['--headless=new', '--no-first-run', '--no-default-browser-check', '--disable-gpu', '--password-store=basic', '--use-mock-keychain', '--disable-background-networking', '--disable-component-update', '--disable-sync', '--metrics-recording-only'];




const KNOWN_SANDBOX_LINES = [
  [/^No usable sandbox! If you are running on Ubuntu 23\.10\+ or another Linux distro that has disabled unprivileged user namespaces with AppArmor, see https:\/\//, 'No usable sandbox! If you are running on Ubuntu 23.10+ or another Linux distro that has disabled unprivileged user namespaces with AppArmor, see https://chromium.googlesource.com/chromium/src/+/main/docs/security/apparmor-userns-restrictions.md.'],
  [/^No usable sandbox!/, 'No usable sandbox!'],
  [/^Failed to move to new namespace\b/, 'Failed to move to new namespace'],
  [/^The setuid sandbox is not running as root\./, 'The setuid sandbox is not running as root.'],
  [/^Chromium sandboxing failed!/, 'Chromium sandboxing failed!'],
  [/^Zygote process exited prematurely\b/, 'Zygote process exited prematurely'],
];

export const UNKNOWN_SANDBOX_LINE = 'Chrome stopped with an error about its sandbox.';




export function sandboxFailureLine(text) {
  const lines = String(text || '').replace(/\u001b\[[0-9;]*m/g, '').split('\n').filter((l) => !/<launch(ing|ed)>/.test(l)).map((l) => { const at = l.indexOf('][err] '); return (at >= 0 ? l.slice(at + 7) : l).trim(); });
  const parts = (l) => { const m = /^\[[^\]]{0,160}\]\s*/.exec(l); return { fatal: !!m && /:FATAL:/.test(m[0]), words: m ? l.slice(m[0].length) : l }; };
  const line = lines.find((l) => /No usable sandbox/i.test(l)) || lines.find((l) => /^(Failed to move to new namespace|The setuid sandbox is not running as root)/.test(l)) || lines.find((l) => /Chromium sandboxing failed/i.test(l)) || lines.find((l) => { const p = parts(l); return p.fatal && /sandbox|namespace|setuid|zygote/i.test(p.words); });
  if (!line) return null;
  const words = parts(line).words;


  const kept = words.split(' Otherwise see')[0].split(/\s*If you want to live dangerously/)[0].split(/(?<=[.!])\s+/).filter((s) => !/--no-sandbox/.test(s)).join(' ');
  if (!shown(kept)) return null;
  const known = KNOWN_SANDBOX_LINES.find(([start]) => start.test(words));
  return known ? known[1] : UNKNOWN_SANDBOX_LINE;
}

const carriesPointer = (said) => said === KNOWN_SANDBOX_LINES[0][1];






export function chromeSandboxChoice(exePath) {
  if (typeof process.getuid === 'function' && process.getuid() === 0) return { on: false, root: true, why: 'this account is root, and Chrome refuses to start sandboxed as root' };
  if (process.platform !== 'linux') return { on: true, why: null };

  if (exePath && insideProjectReally(exePath) && !reallyInsideDir(exePath, browsersDir())) return { on: true, unknown: true, why: 'asked for untried: the browser binary is inside the project, and nothing there is started' };
  let st = null; try { if (exePath) st = fs.statSync(exePath); } catch {            }
  if (!st || !st.isFile()) return { on: true, unknown: true, why: 'asked for untried: no browser binary was found to try it with' };


  if (reallyInsideDir(exePath, toolsDir()) && toolsProblem()) return { on: true, unknown: true, why: 'asked for untried: the tools folder cannot be used, so nothing in it is started' };
  let dir = null; let r;
  try { dir = fs.mkdtempSync(path.join(os.tmpdir(), 'claude-test-sandbox-trial-')); r = spawnSync(exePath, [...SANDBOX_TRIAL_ARGS, '--user-data-dir=' + dir, '--dump-dom', 'about:blank'], { cwd: dir, encoding: 'utf8', timeout: SANDBOX_TRIAL_MS, killSignal: 'SIGKILL', env: browserServerEnv(), stdio: ['ignore', 'pipe', 'pipe'] }); }
  catch (e) { r = { error: e }; }
  finally { if (dir) { try { fs.rmSync(dir, { recursive: true, force: true }); } catch {                                        } } }

  if (r.error) return { on: true, unknown: true, why: 'asked for untried: ' + (r.error.code === 'ETIMEDOUT' ? 'a trial start of the browser with its sandbox took longer than ' + SANDBOX_TRIAL_MS / 1000 + ' seconds' : 'a trial start of the browser could not be made (' + shown(String(r.error.code || r.error.message), 60) + ')') };
  if (r.status === 0) return { on: true, why: null };



  const said = sandboxFailureLine(r.stderr);
  if (!said) return { on: true, unknown: true, why: 'asked for untried: a trial start of the browser ended (' + (r.signal ? 'by ' + r.signal : 'exit ' + r.status) + ') without a word about its sandbox' };
  return { on: false, said, why: 'a trial start of the browser with its sandbox failed (' + said + ')' };
}

export const CHROME_INSTALL_HOW = ': download the .deb package from https://www.google.com/chrome/ and install that file with apt, for example "sudo apt install ./google-chrome-stable_current_amd64.deb". If you cannot install programs here, ask whoever runs this machine. ';






export function chromeSandboxProblem(cfg, selection, { trial = true } = {}) {
  const not = 'and Claude Test does not start the test browser without it';
  if (typeof process.getuid === 'function' && process.getuid() === 0) return 'The test browser is not started for root: Chrome refuses to start its own sandbox as root, ' + not + '. Run Claude Code as an ordinary account.';
  if (!trial) return null;
  const bin = selection ? browserBinaryOf(selection) : serverBrowserBinary(cfg);
  const c = chromeSandboxChoice(bin);
  if (c.on || !c.said) return null;







  const own = reallyInsideDir(bin, browsersDir());
  const pointer = carriesPointer(c.said);
  const byVariable = process.env.CLAUDE_TEST_BROWSER === 'chromium'; const byRc = !!cfg && cfg.browser === 'chromium';
  const named = byVariable || (!process.env.CLAUDE_TEST_BROWSER && byRc);
  const unname = [...(byVariable ? ['unset CLAUDE_TEST_BROWSER'] : []), ...(byRc ? ['take the browser line out of ' + RC_FILE] : [])].join(' and ');
  const here = named && !!findChrome();
  const outside = !own ? (pointer ? 'If this is not a container, ask whoever runs this machine to let this one browser start its sandbox. ' : 'If this is not a container, Claude Test does not know how to fix this error. ')
    : (named ? 'If this is not a container, switch to Google Chrome' + (here ? ', which is installed here' : '') + '. To switch, ' + unname + (here ? '' : ', then install Google Chrome') + '. '
      : 'If this is not a container, install Google Chrome, which Claude Test then uses in place of the browser it downloaded. ')
      + (pointer ? 'Ubuntu lets Google Chrome from Google\'s own package start its sandbox' + (here ? '. ' : CHROME_INSTALL_HOW) : '');
  const warn = pointer ? 'Chrome\'s link leads to a page whose first option turns off a protection for the whole machine: do not take it. ' : '';
  return 'The test browser is not started on this machine: Chrome cannot start its own sandbox here, ' + not + '. ' + (c.said === UNKNOWN_SANDBOX_LINE ? c.said : 'Chrome said: "' + c.said + '"' + (/[.!]$/.test(c.said) ? '' : '.')) + ' Tried with ' + (own ? 'the browser Claude Test downloaded' : shown(bin, 160)) + '. What to do: ' + outside + warn + 'If this is a container, run Claude Code outside it. After you have changed something, restart Claude Code and run /claude-test. Claude Test then tries again.';
}
