






import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { GIT_SAFE_ARGS, RUN_ID } from './config.mjs';

export { RUN_ID };
export function runStart(id) { const m = String(id).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2})-(\d{2})-(\d{2})/); return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), Number(m[4]), Number(m[5]), Number(m[6])) : null; }


export function runIdOrder(a, b) { return a.slice(0, 19).localeCompare(b.slice(0, 19)) || (Number(a.slice(20)) || 1) - (Number(b.slice(20)) || 1); }


export function runFolders(cfg) {
  let dirs = []; try { dirs = fs.readdirSync(cfg.runsDir).filter((d) => RUN_ID.test(d)); } catch {                   }




  let tracked = new Set(); let gitCannotSay = false;
  try { tracked = new Set(execFileSync('git', [...GIT_SAFE_ARGS, 'ls-files', '--', path.relative(cfg.projectDir, cfg.runsDir)], { cwd: cfg.projectDir, stdio: ['ignore', 'pipe', 'ignore'], env: Object.fromEntries(Object.entries(process.env).filter(([k]) => !/^GIT_/i.test(k))) })                                                                                                                  .toString().split('\n').map((f) => f.split('/')[2]).filter(Boolean)); }
  catch { let at = cfg.projectDir; for (let i = 0; i < 40; i++) { if (fs.existsSync(path.join(at, '.git'))) { gitCannotSay = true; break; } const up = path.dirname(at); if (up === at) break; at = up; } }
  const horizon = Date.now() + 120000;
  dirs = dirs.filter((d) => {
    const s = runStart(d); if (!s || s.getTime() > horizon || tracked.has(d)) return false;
    try { const st = fs.lstatSync(path.join(cfg.runsDir, d)); if (!st.isDirectory()) return false; if (gitCannotSay && st.birthtimeMs > 0 && st.birthtimeMs !== st.ctimeMs && Math.abs(st.birthtimeMs - s.getTime()) > 10 * 60 * 1000) return false;                                                                                                                                                                              return true; } catch { return false; }
  });
  dirs.sort(runIdOrder);
  return dirs;
}



export function writeInRunFolder(runDir, name, text, mode = 0o644) {
  try {
    if (!fs.lstatSync(runDir).isDirectory()) return false;
    const dest = path.join(runDir, name);
    try { if (!fs.lstatSync(dest).isFile()) return false; } catch {                      }
    const tmp = path.join(runDir, '.' + path.basename(name) + '.' + process.pid + '.' + Math.random().toString(36).slice(2, 10) + '.tmp');
    const fd = fs.openSync(tmp, 'wx', mode); try { fs.writeSync(fd, text); } finally { fs.closeSync(fd); }
    try { fs.renameSync(tmp, dest); } catch (e) { try { fs.unlinkSync(tmp); } catch {            } throw e; }
    return true;
  } catch { return false; }
}




function standsIn(dir, root, anchors) {
  const same = (a, b) => a.dev === b.dev && a.ino === b.ino;
  const lstat = (p) => fs.lstatSync(p, { bigint: true }); const stat = (p) => fs.statSync(p, { bigint: true });
  const rel = path.relative(root, dir); if (rel.startsWith('..') || path.isAbsolute(rel)) return false;
  const names = rel ? rel.split(path.sep) : [];
  for (let k = names.length; k >= 0; k--) {
    const named = lstat(path.join(root, ...names.slice(0, k))); if (!named.isDirectory()) return false;
    if (!same(named, stat('.' + '/..'.repeat(names.length - k)))) return false;
  }
  let at = '.' + '/..'.repeat(names.length);
  for (let up = 0; up < 64; up++) {
    const here = stat(at); if (anchors.some((w) => same(here, w))) return true;
    if (same(stat(at + '/..'), here)) return false;
    at += '/..';
  }
  return false;
}










export function placeStagedFile(staged, dest, { check = null, change = null, within = null, maxBytes = 64 * 1024 * 1024, mode = 0o644 } = {}) {
  let fd = null;
  try {
    try { fd = fs.openSync(staged, fs.constants.O_RDONLY | (process.platform === 'win32' ? 0 : fs.constants.O_NOFOLLOW | fs.constants.O_NONBLOCK));                                                                                                                      }
    catch (e) { return e && e.code === 'ENOENT' ? 'the browser server wrote no file' : 'the file the browser server wrote could not be opened (' + ((e && e.code) || e) + ')'; }
    const st = fs.fstatSync(fd);
    if (!st.isFile() || st.nlink !== 1) return 'what the browser server left under the name it was given is not a file of its own (a folder, or a file with a second name); ask for it again';
    if (st.size > maxBytes) return 'the file is larger than ' + Math.round(maxBytes / (1024 * 1024)) + ' MiB';
    let bytes = Buffer.alloc(st.size); let got = 0;
    while (got < st.size) { const n = fs.readSync(fd, bytes, got, st.size - got, got); if (!n) break; got += n; }
    if (got !== st.size) bytes = bytes.subarray(0, got);
    if (change) bytes = change(bytes);
    let was = null; let wasId = null;
    if (within) { try { was = process.cwd(); const s = fs.statSync('.', { bigint: true }); wasId = [s.dev, s.ino]; } catch { return 'this process has lost its own working folder, so nothing is saved. Reconnect the helper with /mcp'; } }
    const problem = check ? check() : null; if (problem) return problem;
    const dir = path.dirname(dest); const name = path.basename(dest);

    try {
      if (within) { process.chdir(dir); if (!standsIn(dir, within.root, within.anchors)) return 'its folder is no longer the one that was checked: a folder on the way to it was moved or replaced. Reconnect the helper with /mcp, then start a new run'; }
      else if (!fs.lstatSync(dir).isDirectory()) return 'its folder is not a plain folder';
      const at = (n) => (within ? n : path.join(dir, n));
      try { const d = fs.lstatSync(at(name)); if (!d.isFile() || d.nlink > 1) return 'a link, or something other than a plain file, is at that name'; } catch {                      }
      const tmp = at('.' + name + '.' + process.pid + '.' + crypto.randomBytes(6).toString('hex') + '.tmp');
      try {
        const out = fs.openSync(tmp, 'wx', mode);
        try { let put = 0; while (put < bytes.length) put += fs.writeSync(out, bytes, put, bytes.length - put); } finally { fs.closeSync(out); }
        fs.renameSync(tmp, at(name));
      } catch (e) { try { fs.unlinkSync(tmp); } catch {                  } return 'could not be written into place (' + ((e && e.code) || e) + ')'; }
      return null;
    } finally {
      if (within) {
        let back = false; try { process.chdir(was); const s = fs.statSync('.', { bigint: true }); back = s.dev === wasId[0] && s.ino === wasId[1]; } catch { back = false; }
        if (!back) { process.stderr.write('[claude-test] the folder this process works from was moved or replaced while a file was being saved; ending so that nothing runs from another folder. Reconnect the helper with /mcp\n'); process.exit(1); }
      }
    }
  } catch (e) { return 'could not be saved (' + ((e && e.code) || (e && e.message) || e) + ')'; }
  finally { if (fd !== null) { try { fs.closeSync(fd); } catch {              } } try { fs.unlinkSync(staged); } catch {                     } }
}
