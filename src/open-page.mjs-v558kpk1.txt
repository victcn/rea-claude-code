










import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { randomBytes } from 'node:crypto';
import { spawn } from 'node:child_process';
import { privateDir, liveDir } from './config.mjs';

const firstThatExists = (list) => list.find((f) => { try { return fs.statSync(f).isFile(); } catch { return false; } }) || null;


export function openerCommand(platform, file, { front = false, exists = firstThatExists } = {}) {
  if (typeof file !== 'string' || !file || /[\0\r\n]/.test(file)) return null;
  if (platform === 'darwin') { const cmd = exists(['/usr/bin/open']); return cmd ? { cmd, args: [...(front ? [] : ['-g']), file] } : null; }
  if (platform === 'win32') { if (/["%,=]/.test(file)) return null; const cmd = exists(['C:\\Windows\\explorer.exe']); return cmd ? { cmd, args: [file] } : null; }
  const cmd = exists(['/usr/bin/xdg-open', '/bin/xdg-open', '/usr/local/bin/xdg-open']); return cmd ? { cmd, args: [file] } : null;
}






export function openerEnv(platform, env, home, { uid = null, projectDir = null } = {}) {
  const v = (k) => (typeof env[k] === 'string' && env[k].length > 0 && env[k].length < 300 && !/[\0-\x1f\x7f]/.test(env[k]) ? env[k] : null);
  if (platform === 'win32') {
    const j = (...p) => [home, ...p].join('\\');
    return { SystemRoot: 'C:\\Windows', windir: 'C:\\Windows', SystemDrive: 'C:', PATH: 'C:\\Windows\\System32;C:\\Windows', PATHEXT: '.COM;.EXE;.BAT;.CMD', USERPROFILE: home, APPDATA: j('AppData', 'Roaming'), LOCALAPPDATA: j('AppData', 'Local'), TEMP: j('AppData', 'Local', 'Temp'), TMP: j('AppData', 'Local', 'Temp'), ProgramData: 'C:\\ProgramData', ProgramFiles: 'C:\\Program Files', 'ProgramFiles(x86)': 'C:\\Program Files (x86)' };
  }
  const keep = { PATH: platform === 'darwin' ? '/usr/bin:/bin:/usr/sbin:/sbin' : '/usr/local/bin:/usr/bin:/bin', HOME: home };
  const inside = (p, dir) => !!dir && (p === dir || p.startsWith(dir.replace(/\/+$/, '') + '/'));
  const rules = {
    DISPLAY: (x) => /^(?:unix)?:\d{1,4}(?:\.\d{1,2})?$/.test(x),
    WAYLAND_DISPLAY: (x) => /^[A-Za-z0-9._-]{1,64}$/.test(x),
    XDG_RUNTIME_DIR: (x) => (uid === null ? /^\/run\/user\/\d{1,10}$/.test(x) : x === '/run/user/' + uid),
    DBUS_SESSION_BUS_ADDRESS: (x) => /^unix:(?:path|abstract)=\/[A-Za-z0-9._\/@-]{1,200}(?:,guid=[0-9a-f]{32})?$/.test(x),
    XAUTHORITY: (x) => x.startsWith('/') && !x.split('/').includes('..') && !inside(x, projectDir),
    XDG_SESSION_TYPE: (x) => /^(x11|wayland|mir|tty)$/.test(x),
    XDG_CURRENT_DESKTOP: (x) => /^[A-Za-z0-9:_-]{1,64}$/.test(x),
    DESKTOP_SESSION: (x) => /^[A-Za-z0-9._-]{1,64}$/.test(x),
    LANG: (x) => /^[A-Za-z0-9_.@-]{1,40}$/.test(x), LC_ALL: (x) => /^[A-Za-z0-9_.@-]{1,40}$/.test(x),
  };
  for (const [k, ok] of Object.entries(rules)) { const x = v(k); if (x !== null && ok(x)) keep[k] = x; }
  return keep;
}





export function runOpener(how, { env, cwd, capMs = 2500 } = {}) {
  return new Promise((resolve) => {
    let child;
    try { child = spawn(how.cmd, how.args, { stdio: 'ignore', detached: true, shell: false, windowsVerbatimArguments: false, env, cwd }); }
    catch (e) { resolve({ opened: false, why: 'it could not be started (' + ((e && e.code) || 'error') + ')' }); return; }
    let done = false; const end = (r) => { if (done) return; done = true; clearTimeout(cap); try { child.unref(); } catch {            } resolve(r); };
    const cap = setTimeout(() => end({ opened: null, why: 'it had not finished after ' + (capMs / 1000) + ' s' }), capMs);
    child.on('error', (e) => end({ opened: false, why: 'it could not be started (' + ((e && e.code) || 'error') + ')' }));
    child.on('exit', (code, signal) => end(code === 0 ? { opened: true } : { opened: false, why: 'it ended with ' + (signal ? 'signal ' + signal : 'code ' + code) }));
  });
}







export const livePageFile = (cfg, runId) => path.join(liveDir(cfg.projectDir, runId), 'live.html');
export function prefsPath(cfg) { return path.join(path.dirname(privateDir(cfg.projectDir)), 'prefs.json'); }
export function readPrefs(cfg) { try { const j = JSON.parse(fs.readFileSync(prefsPath(cfg), 'utf8')); return j && typeof j === 'object' && !Array.isArray(j) ? j : {}; } catch { return {}; } }
export function writePrefs(cfg, p) {
  try { const f = prefsPath(cfg); fs.mkdirSync(path.dirname(f), { recursive: true, mode: 0o700 }); try { const d = fs.lstatSync(f); if (!d.isFile() || d.nlink > 1) return false; } catch {                      }
    const tmp = f + '.' + process.pid + '.' + randomBytes(6).toString('hex') + '.tmp'; const fd = fs.openSync(tmp, 'wx', 0o600); try { fs.writeSync(fd, JSON.stringify(p, null, 1) + '\n'); } finally { fs.closeSync(fd); }
    try { fs.renameSync(tmp, f); } catch (e) { try { fs.unlinkSync(tmp); } catch {            } throw e; } return true; } catch { return false; } }
export function whyNoBrowser(env = process.env, platform = process.platform) {
  if (env.CLAUDE_TEST_NO_OPEN !== undefined) return 'CLAUDE_TEST_NO_OPEN is set';
  if (env.CI !== undefined) return 'this looks like CI';
  if (env.SSH_CONNECTION !== undefined || env.SSH_TTY !== undefined || env.SSH_CLIENT !== undefined) return 'this session is over SSH';
  if (platform !== 'darwin' && platform !== 'win32' && !/^(?:unix)?:\d{1,4}(?:\.\d{1,2})?$/.test(env.DISPLAY || '') && !/^[A-Za-z0-9._-]{1,64}$/.test(env.WAYLAND_DISPLAY || '')) return 'there is no local display here';
  return null;
}

export function livePagePlan(cfg, { env = process.env, platform = process.platform } = {}) {
  const prefs = readPrefs(cfg); const off = prefs.livePage === 'link';
  const why = off ? 'turned off ("open it again" turns it back on)' : whyNoBrowser(env, platform);
  return { opens: !why, ...(why ? { why } : {}), firstOpen: !why && !prefs.everOpened, prefs };
}



export async function openLivePage(cfg, runId, { env = process.env, platform = process.platform, start = runOpener, command = openerCommand, file: looked } = {}) {
  const file = typeof looked === 'string' && looked ? looked : livePageFile(cfg, runId);
  const plan = livePagePlan(cfg, { env, platform });
  if (!plan.opens) return { opened: false, meant: false, why: plan.why, file };
  try { if (!fs.lstatSync(file).isFile()) return { opened: false, why: 'the page is not a plain file (a link or a folder is at its name), so there is nothing to open', file }; } catch { return { opened: false, reason: 'not-written', why: 'the page has not been written', file }; }
  const how = command(platform, file, { front: plan.firstOpen }); if (!how) return { opened: false, reason: 'no-opener', why: 'there is no program here to open it with', file };
  let who; try { who = os.userInfo(); } catch { return { opened: false, why: 'this account\'s home folder is not known', file }; }
  const home = who && typeof who.homedir === 'string' && path.isAbsolute(who.homedir) ? who.homedir : null; if (!home) return { opened: false, why: 'this account\'s home folder is not known', file };
  const r = await start(how, { env: openerEnv(platform, env, home, { uid: typeof who.uid === 'number' && who.uid >= 0 ? who.uid : null, projectDir: cfg.projectDir }), cwd: home });

  const win = platform === 'win32' && !/could not be started/.test(r.why || '');
  if ((r.opened === true || r.opened === null || win) && !plan.prefs.everOpened) writePrefs(cfg, { ...readPrefs(cfg), everOpened: true });
  const first = plan.firstOpen ? { firstOpen: true } : {};
  if (win) return { opened: null, ...first, reason: 'not-finished', why: 'explorer.exe does not say whether it opened the page', file };
  return { ...r, ...first, reason: r.opened === true ? 'opened' : r.opened === null ? 'not-finished' : 'opener-failed', ...(r.why ? { why: path.basename(how.cmd) + ': ' + r.why } : {}), file };
}



export const openByHand = (file, platform = process.platform) => (platform === 'win32' || /[\r\n\0]/.test(file) ? null : '! ' + (platform === 'darwin' ? 'open' : 'xdg-open') + ' ' + (/^[A-Za-z0-9._/:@+-]+$/.test(file) ? file : "'" + file.replace(/'/g, "'\\''") + "'"));
