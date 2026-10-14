// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { stat as zt } from "fs";

import { stat as jt, readdir as Yt } from "fs/promises";

import { EventEmitter as Ut } from "events";

import * as f from "path";

import { stat as ft, lstat as j, readdir as ut, realpath as _t } from "fs/promises";

import { Readable as mt } from "stream";

import { resolve as Y, relative as wt, join as pt, sep as yt } from "path";

var p = {
  FILE_TYPE: "files",
  DIR_TYPE: "directories",
  FILE_DIR_TYPE: "files_directories",
  EVERYTHING_TYPE: "all"
}, N = {
  root: ".",
  fileFilter: t => !0,
  directoryFilter: t => !0,
  type: p.FILE_TYPE,
  lstat: !1,
  depth: 2147483648,
  alwaysStat: !1,
  highWaterMark: 4096
};

Object.freeze(N);

var V = "READDIRP_RECURSIVE_ERROR", Et = new Set([ "ENOENT", "EPERM", "EACCES", "ELOOP", V ]), U = [ p.DIR_TYPE, p.EVERYTHING_TYPE, p.FILE_DIR_TYPE, p.FILE_TYPE ], Pt = new Set([ p.DIR_TYPE, p.EVERYTHING_TYPE, p.FILE_DIR_TYPE ]), gt = new Set([ p.EVERYTHING_TYPE, p.FILE_DIR_TYPE, p.FILE_TYPE ]), Rt = t => Et.has(t.code), Dt = !1, G = t => !0, K = t => {
  if (t === void 0) return G;
  if (typeof t === "function") return t;
  if (typeof t === "string") {
    let s = t.trim();
    return e => e.basename === s;
  }
  if (Array.isArray(t)) {
    let s = t.map(e => e.trim());
    return e => s.some(i => e.basename === i);
  }
  return G;
};

class B extends mt {
  constructor(t = {}) {
    super({
      objectMode: !0,
      autoDestroy: !0,
      highWaterMark: t.highWaterMark
    });
    let s = {
      ...N,
      ...t
    }, {root: e, type: i} = s;
    this._fileFilter = K(s.fileFilter), this._directoryFilter = K(s.directoryFilter);
    let r = s.lstat ? j : ft;
    if (Dt) this._stat = a => r(a, {
      bigint: !0
    }); else this._stat = r;
    this._maxDepth = s.depth ?? N.depth, this._wantsDir = i ? Pt.has(i) : !1, this._wantsFile = i ? gt.has(i) : !1, 
    this._wantsEverything = i === p.EVERYTHING_TYPE, this._root = Y(e), this._isDirent = !s.alwaysStat, 
    this._statsProp = this._isDirent ? "dirent" : "stats", this._rdOptions = {
      encoding: "utf8",
      withFileTypes: this._isDirent
    }, this.parents = [ this._exploreDir(e, 1) ], this.reading = !1, this.parent = void 0;
  }
  async _read(t) {
    if (this.reading) return;
    this.reading = !0;
    try {
      while (!this.destroyed && t > 0) {
        let s = this.parent, e = s && s.files;
        if (e && e.length > 0) {
          let {path: i, depth: r} = s, a = e.splice(0, t).map(o => this._formatEntry(o, i)), n = await Promise.all(a);
          for (let o of n) {
            if (!o) continue;
            if (this.destroyed) return;
            let c = await this._getEntryType(o);
            if (c === "directory" && this._directoryFilter(o)) {
              if (r <= this._maxDepth) this.parents.push(this._exploreDir(o.fullPath, r + 1));
              if (this._wantsDir) this.push(o), t--;
            } else if ((c === "file" || this._includeAsFile(o)) && this._fileFilter(o)) {
              if (this._wantsFile) this.push(o), t--;
            }
          }
        } else {
          let i = this.parents.pop();
          if (!i) {
            this.push(null);
            break;
          }
          if (this.parent = await i, this.destroyed) return;
        }
      }
    } catch (s) {
      this.destroy(s);
    } finally {
      this.reading = !1;
    }
  }
  async _exploreDir(t, s) {
    let e;
    try {
      e = await ut(t, this._rdOptions);
    } catch (i) {
      this._onError(i);
    }
    return {
      files: e,
      depth: s,
      path: t
    };
  }
  async _formatEntry(t, s) {
    let e, i = this._isDirent ? t.name : t;
    try {
      let r = Y(pt(s, i));
      e = {
        path: wt(this._root, r),
        fullPath: r,
        basename: i
      }, e[this._statsProp] = this._isDirent ? t : await this._stat(r);
    } catch (r) {
      this._onError(r);
      return;
    }
    return e;
  }
  _onError(t) {
    if (Rt(t) && !this.destroyed) this.emit("warn", t); else this.destroy(t);
  }
  async _getEntryType(t) {
    if (!t && this._statsProp in t) return "";
    let s = t[this._statsProp];
    if (!s) return "";
    if (s.isFile()) return "file";
    if (s.isDirectory()) return "directory";
    if (s && s.isSymbolicLink()) {
      let e = t.fullPath;
      try {
        let i = await _t(e), r = await j(i);
        if (r.isFile()) return "file";
        if (r.isDirectory()) {
          let a = i.length;
          if (e.startsWith(i) && e.substr(a, 1) === yt) {
            let n = Error(`Circular symlink detected: "${e}" points to "${i}"`);
            return n.code = V, this._onError(n);
          }
          return "directory";
        }
      } catch (i) {
        return this._onError(i), "";
      }
    }
  }
  _includeAsFile(t) {
    let s = t && t[this._statsProp];
    return s && this._wantsEverything && !s.isDirectory();
  }
}

function q(t, s = {}) {
  let e = s.entryType || s.type;
  if (e === "both") e = p.FILE_DIR_TYPE;
  if (e) s.type = e;
  if (!t) throw Error("readdirp: root argument is required. Usage: readdirp(root, options)"); else if (typeof t !== "string") throw TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)"); else if (e && !U.includes(e)) throw Error(`readdirp: Invalid type passed. Use one of ${U.join(", ")}`);
  return s.root = t, new B(s);
}

import { watchFile as bt, unwatchFile as J, watch as It } from "fs";

import { open as Q, stat as Z, lstat as Tt, realpath as W } from "fs/promises";

import * as _ from "path";

import { type as xt } from "os";

var vt = "data", C = "end", tt = "close", F = () => {};

var A = "linux", v = A === "win32", Ft = A === "darwin", At = A === "linux", St = A === "freebsd", st = xt() === "OS400", u = {
  ALL: "all",
  READY: "ready",
  ADD: "add",
  CHANGE: "change",
  ADD_DIR: "addDir",
  UNLINK: "unlink",
  UNLINK_DIR: "unlinkDir",
  RAW: "raw",
  ERROR: "error"
}, y = u, Nt = "watch", Wt = {
  lstat: Tt,
  stat: Z
}, P = "listeners", I = "errHandlers", g = "rawEmitters", Lt = [ P, I, g ], kt = new Set([ "3dm", "3ds", "3g2", "3gp", "7z", "a", "aac", "adp", "afdesign", "afphoto", "afpub", "ai", "aif", "aiff", "alz", "ape", "apk", "appimage", "ar", "arj", "asf", "au", "avi", "bak", "baml", "bh", "bin", "bk", "bmp", "btif", "bz2", "bzip2", "cab", "caf", "cgm", "class", "cmx", "cpio", "cr2", "cur", "dat", "dcm", "deb", "dex", "djvu", "dll", "dmg", "dng", "doc", "docm", "docx", "dot", "dotm", "dra", "DS_Store", "dsk", "dts", "dtshd", "dvb", "dwg", "dxf", "ecelp4800", "ecelp7470", "ecelp9600", "egg", "eol", "eot", "epub", "exe", "f4v", "fbs", "fh", "fla", "flac", "flatpak", "fli", "flv", "fpx", "fst", "fvt", "g3", "gh", "gif", "graffle", "gz", "gzip", "h261", "h263", "h264", "icns", "ico", "ief", "img", "ipa", "iso", "jar", "jpeg", "jpg", "jpgv", "jpm", "jxr", "key", "ktx", "lha", "lib", "lvp", "lz", "lzh", "lzma", "lzo", "m3u", "m4a", "m4v", "mar", "mdi", "mht", "mid", "midi", "mj2", "mka", "mkv", "mmr", "mng", "mobi", "mov", "movie", "mp3", "mp4", "mp4a", "mpeg", "mpg", "mpga", "mxu", "nef", "npx", "numbers", "nupkg", "o", "odp", "ods", "odt", "oga", "ogg", "ogv", "otf", "ott", "pages", "pbm", "pcx", "pdb", "pdf", "pea", "pgm", "pic", "png", "pnm", "pot", "potm", "potx", "ppa", "ppam", "ppm", "pps", "ppsm", "ppsx", "ppt", "pptm", "pptx", "psd", "pya", "pyc", "pyo", "pyv", "qt", "rar", "ras", "raw", "resources", "rgb", "rip", "rlc", "rmf", "rmvb", "rpm", "rtf", "rz", "s3m", "s7z", "scpt", "sgi", "shar", "snap", "sil", "sketch", "slk", "smv", "snk", "so", "stl", "suo", "sub", "swf", "tar", "tbz", "tbz2", "tga", "tgz", "thmx", "tif", "tiff", "tlz", "ttc", "ttf", "txz", "udf", "uvh", "uvi", "uvm", "uvp", "uvs", "uvu", "viv", "vob", "war", "wav", "wax", "wbmp", "wdp", "weba", "webm", "webp", "whl", "wim", "wm", "wma", "wmv", "wmx", "woff", "woff2", "wrm", "wvx", "xbm", "xif", "xla", "xlam", "xls", "xlsb", "xlsm", "xlsx", "xlt", "xltm", "xltx", "xm", "xmind", "xpi", "xpm", "xwd", "xz", "z", "zip", "zipx" ]), Ct = t => kt.has(_.extname(t).slice(1).toLowerCase()), k = (t, s) => {
  if (t instanceof Set) t.forEach(s); else s(t);
}, D = (t, s, e) => {
  let i = t[s];
  if (!(i instanceof Set)) t[s] = i = new Set([ i ]);
  i.add(e);
}, Ot = t => s => {
  let e = t[s];
  if (e instanceof Set) e.clear(); else delete t[s];
}, b = (t, s, e) => {
  let i = t[s];
  if (i instanceof Set) i.delete(e); else if (i === e) delete t[s];
}, et = t => t instanceof Set ? t.size === 0 : !t, T = new Map;

function X(t, s, e, i, r) {
  let a = (n, o) => {
    if (e(t), r(n, o, {
      watchedPath: t
    }), o && t !== o) x(_.resolve(t, o), P, _.join(t, o));
  };
  try {
    return It(t, {
      persistent: s.persistent
    }, a);
  } catch (n) {
    i(n);
    return;
  }
}

var x = (t, s, e, i, r) => {
  let a = T.get(t);
  if (!a) return;
  k(a[s], n => {
    n(e, i, r);
  });
}, Ht = (t, s, e, i) => {
  let {listener: r, errHandler: a, rawEmitter: n} = i, o = T.get(s), c;
  if (!e.persistent) {
    if (c = X(t, e, r, a, n), !c) return;
    return c.on(y.ERROR, async h => {
      if (v && h.code === "EPERM") try {
        await (await Q(t, "r")).close(), a(h);
      } catch (d) {} else a(h);
    }), c.close.bind(c);
  }
  if (o) D(o, P, r), D(o, I, a), D(o, g, n); else {
    if (c = X(t, e, x.bind(null, s, P), a, x.bind(null, s, g)), !c) return;
    c.on(y.ERROR, async h => {
      let d = x.bind(null, s, I);
      if (o) o.watcherUnusable = !0;
      if (v && h.code === "EPERM") try {
        await (await Q(t, "r")).close(), d(h);
      } catch (l) {} else d(h);
    }), o = {
      listeners: r,
      errHandlers: a,
      rawEmitters: n,
      watcher: c
    }, T.set(s, o);
  }
  return () => {
    if (b(o, P, r), b(o, I, a), b(o, g, n), et(o.listeners) && o.watcher) o.watcher.close(), 
    T.delete(s), Lt.forEach(Ot(o)), o.watcher = void 0, Object.freeze(o);
  };
}, L = new Map, Mt = (t, s, e, i) => {
  let {listener: r, rawEmitter: a} = i, n = L.get(s), o = n && n.options;
  if (o && (o.persistent < e.persistent || o.interval > e.interval)) J(s), n = void 0;
  if (n) D(n, P, r), D(n, g, a); else n = {
    listeners: r,
    rawEmitters: a,
    options: e,
    watcher: bt(s, e, (c, h) => {
      k(n.rawEmitters, l => {
        l(y.CHANGE, s, {
          curr: c,
          prev: h
        });
      });
      let d = c.mtimeMs;
      if (c.size !== h.size || d > h.mtimeMs || d === 0) k(n.listeners, l => l(t, c));
    })
  }, L.set(s, n);
  return () => {
    if (b(n, P, r), b(n, g, a), et(n.listeners) && n.watcher) L.delete(s), J(s), n.options = n.watcher = void 0, 
    Object.freeze(n);
  };
};

class O {
  constructor(t) {
    this.fsw = t, this._boundHandleError = s => t._handleError(s);
  }
  _watchWithNodeFs(t, s) {
    let e = this.fsw.options, i = _.dirname(t), r = _.basename(t);
    this.fsw._getWatchedDir(i).add(r);
    let n = _.resolve(t), o = {
      persistent: e.persistent
    };
    if (!s) s = F;
    let c;
    if (e.usePolling) {
      let h = e.interval !== e.binaryInterval;
      o.interval = h && Ct(r) ? e.binaryInterval : e.interval, c = Mt(t, n, o, {
        listener: s,
        rawEmitter: this.fsw._emitRaw
      });
    } else c = Ht(t, n, o, {
      listener: s,
      errHandler: this._boundHandleError,
      rawEmitter: this.fsw._emitRaw
    });
    return c;
  }
  _handleFile(t, s, e) {
    if (this.fsw.closed) return;
    let i = _.dirname(t), r = _.basename(t), a = this.fsw._getWatchedDir(i), n = s;
    if (a.has(r)) return;
    let o = async (h, d) => {
      if (!this.fsw._throttle(Nt, t, 5)) return;
      if (!d || d.mtimeMs === 0) try {
        let l = await Z(t);
        if (this.fsw.closed) return;
        let {atimeMs: m, mtimeMs: w} = l;
        if (!m || m <= w || w !== n.mtimeMs) this.fsw._emit(y.CHANGE, t, l);
        if ((Ft || At || St) && n.ino !== l.ino) {
          this.fsw._closeFile(t), n = l;
          let E = this._watchWithNodeFs(t, o);
          if (E) this.fsw._addPathCloser(t, E);
        } else n = l;
      } catch (l) {
        this.fsw._remove(i, r);
      } else if (a.has(r)) {
        let {atimeMs: l, mtimeMs: m} = d;
        if (!l || l <= m || m !== n.mtimeMs) this.fsw._emit(y.CHANGE, t, d);
        n = d;
      }
    }, c = this._watchWithNodeFs(t, o);
    if (!(e && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(t)) {
      if (!this.fsw._throttle(y.ADD, t, 0)) return;
      this.fsw._emit(y.ADD, t, s);
    }
    return c;
  }
  async _handleSymlink(t, s, e, i) {
    if (this.fsw.closed) return;
    let r = t.fullPath, a = this.fsw._getWatchedDir(s);
    if (!this.fsw.options.followSymlinks) {
      this.fsw._incrReadyCount();
      let n;
      try {
        n = await W(e);
      } catch (o) {
        return this.fsw._emitReady(), !0;
      }
      if (this.fsw.closed) return;
      if (a.has(i)) {
        if (this.fsw._symlinkPaths.get(r) !== n) this.fsw._symlinkPaths.set(r, n), this.fsw._emit(y.CHANGE, e, t.stats);
      } else a.add(i), this.fsw._symlinkPaths.set(r, n), this.fsw._emit(y.ADD, e, t.stats);
      return this.fsw._emitReady(), !0;
    }
    if (this.fsw._symlinkPaths.has(r)) return !0;
    this.fsw._symlinkPaths.set(r, !0);
  }
  _handleRead(t, s, e, i, r, a, n) {
    if (t = _.join(t, ""), n = this.fsw._throttle("readdir", t, 1e3), !n) return;
    let o = this.fsw._getWatchedDir(e.path), c = new Set, h = this.fsw._readdirp(t, {
      fileFilter: d => e.filterPath(d),
      directoryFilter: d => e.filterDir(d)
    });
    if (!h) return;
    return h.on(vt, async d => {
      if (this.fsw.closed) {
        h = void 0;
        return;
      }
      let l = d.path, m = _.join(t, l);
      if (c.add(l), d.stats.isSymbolicLink() && await this._handleSymlink(d, t, m, l)) return;
      if (this.fsw.closed) {
        h = void 0;
        return;
      }
      if (l === i || !i && !o.has(l)) this.fsw._incrReadyCount(), m = _.join(r, _.relative(r, m)), 
      this._addToNodeFs(m, s, e, a + 1);
    }).on(y.ERROR, this._boundHandleError), new Promise((d, l) => {
      if (!h) return l();
      h.once(C, () => {
        if (this.fsw.closed) {
          h = void 0;
          return;
        }
        let m = n ? n.clear() : !1;
        if (d(void 0), o.getChildren().filter(w => w !== t && !c.has(w)).forEach(w => {
          this.fsw._remove(t, w);
        }), h = void 0, m) this._handleRead(t, !1, e, i, r, a, n);
      });
    });
  }
  async _handleDir(t, s, e, i, r, a, n) {
    let o = this.fsw._getWatchedDir(_.dirname(t)), c = o.has(_.basename(t));
    if (!(e && this.fsw.options.ignoreInitial) && !r && !c) this.fsw._emit(y.ADD_DIR, t, s);
    o.add(_.basename(t)), this.fsw._getWatchedDir(t);
    let h, d, l = this.fsw.options.depth;
    if ((l == null || i <= l) && !this.fsw._symlinkPaths.has(n)) {
      if (!r) {
        if (await this._handleRead(t, e, a, r, t, i, h), this.fsw.closed) return;
      }
      d = this._watchWithNodeFs(t, (m, w) => {
        if (w && w.mtimeMs === 0) return;
        this._handleRead(m, !1, a, r, t, i, h);
      });
    }
    return d;
  }
  async _addToNodeFs(t, s, e, i, r) {
    let a = this.fsw._emitReady;
    if (this.fsw._isIgnored(t) || this.fsw.closed) return a(), !1;
    let n = this.fsw._getWatchHelpers(t);
    if (e) n.filterPath = o => e.filterPath(o), n.filterDir = o => e.filterDir(o);
    try {
      let o = await Wt[n.statMethod](n.watchPath);
      if (this.fsw.closed) return;
      if (this.fsw._isIgnored(n.watchPath, o)) return a(), !1;
      let c = this.fsw.options.followSymlinks, h;
      if (o.isDirectory()) {
        let d = _.resolve(t), l = c ? await W(t) : t;
        if (this.fsw.closed) return;
        if (h = await this._handleDir(n.watchPath, o, s, i, r, n, l), this.fsw.closed) return;
        if (d !== l && l !== void 0) this.fsw._symlinkPaths.set(d, l);
      } else if (o.isSymbolicLink()) {
        let d = c ? await W(t) : t;
        if (this.fsw.closed) return;
        let l = _.dirname(n.watchPath);
        if (this.fsw._getWatchedDir(l).add(n.watchPath), this.fsw._emit(y.ADD, n.watchPath, o), 
        h = await this._handleDir(l, o, s, i, t, n, d), this.fsw.closed) return;
        if (d !== void 0) this.fsw._symlinkPaths.set(_.resolve(t), d);
      } else h = this._handleFile(n.watchPath, o, s);
      if (a(), h) this.fsw._addPathCloser(t, h);
      return !1;
    } catch (o) {
      if (this.fsw._handleError(o)) return a(), t;
    }
  }
}

 /*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */ var H = "/", Gt = "//", ht = ".", Kt = "..", Vt = "string", Bt = /\\/g, it = /\/\//, $t = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, qt = /^\.[/\\]/;

function S(t) {
  return Array.isArray(t) ? t : [ t ];
}

var M = t => typeof t === "object" && t !== null && !(t instanceof RegExp);

function Jt(t) {
  if (typeof t === "function") return t;
  if (typeof t === "string") return s => t === s;
  if (t instanceof RegExp) return s => t.test(s);
  if (typeof t === "object" && t !== null) return s => {
    if (t.path === s) return !0;
    if (t.recursive) {
      let e = f.relative(t.path, s);
      if (!e) return !1;
      return !e.startsWith("..") && !f.isAbsolute(e);
    }
    return !1;
  };
  return () => !1;
}

function Qt(t) {
  if (typeof t !== "string") throw Error("string expected");
  t = f.normalize(t), t = t.replace(/\\/g, "/");
  let s = !1;
  if (t.startsWith("//")) s = !0;
  let e = /\/\//;
  while (t.match(e)) t = t.replace(e, "/");
  if (s) t = "/" + t;
  return t;
}

function rt(t, s, e) {
  let i = Qt(s);
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    if (a(i, e)) return !0;
  }
  return !1;
}

function Xt(t, s) {
  if (t == null) throw TypeError("anymatch: specify first argument");
  let i = S(t).map(r => Jt(r));
  if (s == null) return (r, a) => rt(i, r, a);
  return rt(i, s);
}

var nt = t => {
  let s = S(t).flat();
  if (!s.every(e => typeof e === Vt)) throw TypeError(`Non-string provided as watch path: ${s}`);
  return s.map(ct);
}, ot = t => {
  let s = t.replace(Bt, H), e = !1;
  if (s.startsWith(Gt)) e = !0;
  while (s.match(it)) s = s.replace(it, H);
  if (e) s = H + s;
  return s;
}, ct = t => ot(f.normalize(ot(t))), at = (t = "") => s => {
  if (typeof s === "string") return ct(f.isAbsolute(s) ? s : f.join(t, s)); else return s;
}, Zt = (t, s) => {
  if (f.isAbsolute(t)) return t;
  return f.join(s, t);
}, ts = Object.freeze(new Set);

class lt {
  constructor(t, s) {
    this.path = t, this._removeWatcher = s, this.items = new Set;
  }
  add(t) {
    let {items: s} = this;
    if (!s) return;
    if (t !== ht && t !== Kt) s.add(t);
  }
  async remove(t) {
    let {items: s} = this;
    if (!s) return;
    if (s.delete(t), s.size > 0) return;
    let e = this.path;
    try {
      await Yt(e);
    } catch (i) {
      if (this._removeWatcher) this._removeWatcher(f.dirname(e), f.basename(e));
    }
  }
  has(t) {
    let {items: s} = this;
    if (!s) return;
    return s.has(t);
  }
  getChildren() {
    let {items: t} = this;
    if (!t) return [];
    return [ ...t.values() ];
  }
  dispose() {
    this.items.clear(), this.path = "", this._removeWatcher = F, this.items = ts, Object.freeze(this);
  }
}

var ss = "stat", es = "lstat";

class dt {
  constructor(t, s, e) {
    this.fsw = e;
    let i = t;
    this.path = t = t.replace(qt, ""), this.watchPath = i, this.fullWatchPath = f.resolve(i), 
    this.dirParts = [], this.dirParts.forEach(r => {
      if (r.length > 1) r.pop();
    }), this.followSymlinks = s, this.statMethod = s ? ss : es;
  }
  entryPath(t) {
    return f.join(this.watchPath, f.relative(this.watchPath, t.fullPath));
  }
  filterPath(t) {
    let {stats: s} = t;
    if (s && s.isSymbolicLink()) return this.filterDir(t);
    let e = this.entryPath(t);
    return this.fsw._isntIgnored(e, s) && this.fsw._hasReadPermissions(s);
  }
  filterDir(t) {
    return this.fsw._isntIgnored(this.entryPath(t), t.stats);
  }
}

class z extends Ut {
  constructor(t = {}) {
    super();
    this.closed = !1, this._closers = new Map, this._ignoredPaths = new Set, this._throttled = new Map, 
    this._streams = new Set, this._symlinkPaths = new Map, this._watched = new Map, 
    this._pendingWrites = new Map, this._pendingUnlinks = new Map, this._readyCount = 0, 
    this._readyEmitted = !1;
    let s = t.awaitWriteFinish, e = {
      stabilityThreshold: 2e3,
      pollInterval: 100
    }, i = {
      persistent: !0,
      ignoreInitial: !1,
      ignorePermissionErrors: !1,
      interval: 100,
      binaryInterval: 300,
      followSymlinks: !0,
      usePolling: !1,
      atomic: !0,
      ...t,
      ignored: t.ignored ? S(t.ignored) : S([]),
      awaitWriteFinish: s === !0 ? e : typeof s === "object" ? {
        ...e,
        ...s
      } : !1
    };
    if (st) i.usePolling = !0;
    if (i.atomic === void 0) i.atomic = !i.usePolling;
    let r = process.env.CHOKIDAR_USEPOLLING;
    if (r !== void 0) {
      let o = r.toLowerCase();
      if (o === "false" || o === "0") i.usePolling = !1; else if (o === "true" || o === "1") i.usePolling = !0; else i.usePolling = !!o;
    }
    let a = process.env.CHOKIDAR_INTERVAL;
    if (a) i.interval = Number.parseInt(a, 10);
    let n = 0;
    this._emitReady = () => {
      if (n++, n >= this._readyCount) this._emitReady = F, this._readyEmitted = !0, process.nextTick(() => this.emit(u.READY));
    }, this._emitRaw = (...o) => this.emit(u.RAW, ...o), this._boundRemove = this._remove.bind(this), 
    this.options = i, this._nodeFsHandler = new O(this), Object.freeze(i);
  }
  _addIgnoredPath(t) {
    if (M(t)) {
      for (let s of this._ignoredPaths) if (M(s) && s.path === t.path && s.recursive === t.recursive) return;
    }
    this._ignoredPaths.add(t);
  }
  _removeIgnoredPath(t) {
    if (this._ignoredPaths.delete(t), typeof t === "string") {
      for (let s of this._ignoredPaths) if (M(s) && s.path === t) this._ignoredPaths.delete(s);
    }
  }
  add(t, s, e) {
    let {cwd: i} = this.options;
    this.closed = !1, this._closePromise = void 0;
    let r = nt(t);
    if (i) r = r.map(a => Zt(a, i));
    if (r.forEach(a => {
      this._removeIgnoredPath(a);
    }), this._userIgnored = void 0, !this._readyCount) this._readyCount = 0;
    return this._readyCount += r.length, Promise.all(r.map(async a => {
      let n = await this._nodeFsHandler._addToNodeFs(a, !e, void 0, 0, s);
      if (n) this._emitReady();
      return n;
    })).then(a => {
      if (this.closed) return;
      a.forEach(n => {
        if (n) this.add(f.dirname(n), f.basename(s || n));
      });
    }), this;
  }
  unwatch(t) {
    if (this.closed) return this;
    let s = nt(t), {cwd: e} = this.options;
    return s.forEach(i => {
      if (!f.isAbsolute(i) && !this._closers.has(i)) {
        if (e) i = f.join(e, i);
        i = f.resolve(i);
      }
      if (this._closePath(i), this._addIgnoredPath(i), this._watched.has(i)) this._addIgnoredPath({
        path: i,
        recursive: !0
      });
      this._userIgnored = void 0;
    }), this;
  }
  close() {
    if (this._closePromise) return this._closePromise;
    this.closed = !0, this.removeAllListeners();
    let t = [];
    return this._closers.forEach(s => s.forEach(e => {
      let i = e();
      if (i instanceof Promise) t.push(i);
    })), this._streams.forEach(s => s.destroy()), this._userIgnored = void 0, this._readyCount = 0, 
    this._readyEmitted = !1, this._watched.forEach(s => s.dispose()), this._closers.clear(), 
    this._watched.clear(), this._streams.clear(), this._symlinkPaths.clear(), this._throttled.clear(), 
    this._closePromise = t.length ? Promise.all(t).then(() => {}) : Promise.resolve(), 
    this._closePromise;
  }
  getWatched() {
    let t = {};
    return this._watched.forEach((s, e) => {
      let r = (this.options.cwd ? f.relative(this.options.cwd, e) : e) || ht;
      t[r] = s.getChildren().sort();
    }), t;
  }
  emitWithAll(t, s) {
    if (this.emit(t, ...s), t !== u.ERROR) this.emit(u.ALL, t, ...s);
  }
  async _emit(t, s, e) {
    if (this.closed) return;
    let i = this.options;
    if (v) s = f.normalize(s);
    if (i.cwd) s = f.relative(i.cwd, s);
    let r = [ s ];
    if (e != null) r.push(e);
    let a = i.awaitWriteFinish, n;
    if (a && (n = this._pendingWrites.get(s))) return n.lastChange = new Date, this;
    if (i.atomic) {
      if (t === u.UNLINK) return this._pendingUnlinks.set(s, [ t, ...r ]), setTimeout(() => {
        this._pendingUnlinks.forEach((o, c) => {
          this.emit(...o), this.emit(u.ALL, ...o), this._pendingUnlinks.delete(c);
        });
      }, typeof i.atomic === "number" ? i.atomic : 100), this;
      if (t === u.ADD && this._pendingUnlinks.has(s)) t = u.CHANGE, this._pendingUnlinks.delete(s);
    }
    if (a && (t === u.ADD || t === u.CHANGE) && this._readyEmitted) {
      let o = (c, h) => {
        if (this.closed) return;
        if (c) {
          if (this.listenerCount(u.ERROR) === 0) {
            this._pendingWrites.delete(s);
            return;
          }
          t = u.ERROR, r[0] = c, this.emitWithAll(t, r);
        } else if (h) {
          if (r.length > 1) r[1] = h; else r.push(h);
          this.emitWithAll(t, r);
        }
      };
      return this._awaitWriteFinish(s, a.stabilityThreshold, t, o), this;
    }
    if (t === u.CHANGE) {
      if (!this._throttle(u.CHANGE, s, 50)) return this;
    }
    if (i.alwaysStat && e === void 0 && (t === u.ADD || t === u.ADD_DIR || t === u.CHANGE)) {
      let o = i.cwd ? f.join(i.cwd, s) : s, c;
      try {
        c = await jt(o);
      } catch (h) {}
      if (!c || this.closed) return;
      r.push(c);
    }
    return this.emitWithAll(t, r), this;
  }
  _handleError(t) {
    let s = t && t.code;
    if (t && !this.closed && this.listenerCount(u.ERROR) > 0 && s !== "ENOENT" && s !== "ENOTDIR" && (!this.options.ignorePermissionErrors || s !== "EPERM" && s !== "EACCES")) this.emit(u.ERROR, t);
    return t || this.closed;
  }
  _throttle(t, s, e) {
    if (!this._throttled.has(t)) this._throttled.set(t, new Map);
    let i = this._throttled.get(t);
    if (!i) throw Error("invalid throttle");
    let r = i.get(s);
    if (r) return r.count++, !1;
    let a, n = () => {
      let c = i.get(s), h = c ? c.count : 0;
      if (i.delete(s), clearTimeout(a), c) clearTimeout(c.timeoutObject);
      return h;
    };
    a = setTimeout(n, e);
    let o = {
      timeoutObject: a,
      clear: n,
      count: 0
    };
    return i.set(s, o), o;
  }
  _incrReadyCount() {
    return this._readyCount++;
  }
  _awaitWriteFinish(t, s, e, i) {
    let r = this.options.awaitWriteFinish;
    if (typeof r !== "object") return;
    let a = r.pollInterval, n, o = t;
    if (this.options.cwd && !f.isAbsolute(t)) o = f.join(this.options.cwd, t);
    let c = new Date, h = this._pendingWrites;
    function d(l) {
      zt(o, (m, w) => {
        if (m || !h.has(t)) {
          if (m && m.code !== "ENOENT") i(m);
          return;
        }
        let E = Number(new Date);
        if (l && w.size !== l.size) h.get(t).lastChange = E;
        let R = h.get(t);
        if (E - R.lastChange >= s) h.delete(t), i(void 0, w); else n = setTimeout(d, a, w);
      });
    }
    if (!h.has(t)) h.set(t, {
      lastChange: c,
      cancelWait: () => (h.delete(t), clearTimeout(n), e)
    }), n = setTimeout(d, a);
  }
  _isIgnored(t, s) {
    if (this.options.atomic && $t.test(t)) return !0;
    if (!this._userIgnored) {
      let {cwd: e} = this.options, r = (this.options.ignored || []).map(at(e)), n = [ ...[ ...this._ignoredPaths ].map(at(e)), ...r ];
      this._userIgnored = Xt(n, void 0);
    }
    return this._userIgnored(t, s);
  }
  _isntIgnored(t, s) {
    return !this._isIgnored(t, s);
  }
  _getWatchHelpers(t) {
    return new dt(t, this.options.followSymlinks, this);
  }
  _getWatchedDir(t) {
    let s = f.resolve(t);
    if (!this._watched.has(s)) this._watched.set(s, new lt(s, this._boundRemove));
    return this._watched.get(s);
  }
  _hasReadPermissions(t) {
    if (this.options.ignorePermissionErrors) return !0;
    return Boolean(Number(t.mode) & 256);
  }
  _remove(t, s, e) {
    let i = [ {
      directory: t,
      item: s,
      isDirectory: e,
      path: "",
      fullPath: "",
      expanded: !1
    } ];
    while (i.length > 0) {
      let r = i[i.length - 1];
      if (!r.expanded) {
        r.expanded = !0;
        let l = f.join(r.directory, r.item), m = f.resolve(l);
        if (r.path = l, r.fullPath = m, r.isDirectory = r.isDirectory != null ? r.isDirectory : this._watched.has(l) || this._watched.has(m), 
        !this._throttle("remove", l, 100)) {
          i.pop();
          continue;
        }
        if (!r.isDirectory && this._watched.size === 1) this.add(r.directory, r.item, !0);
        let E = this._getWatchedDir(l).getChildren();
        for (let R = E.length - 1; R >= 0; R--) i.push({
          directory: l,
          item: E[R],
          isDirectory: void 0,
          path: "",
          fullPath: "",
          expanded: !1
        });
        continue;
      }
      i.pop();
      let {path: a, fullPath: n} = r, o = this._getWatchedDir(r.directory), c = o.has(r.item);
      if (o.remove(r.item), this._symlinkPaths.has(n)) this._symlinkPaths.delete(n);
      let h = a;
      if (this.options.cwd) h = f.relative(this.options.cwd, a);
      if (this.options.awaitWriteFinish && this._pendingWrites.has(h)) {
        if (this._pendingWrites.get(h).cancelWait() === u.ADD) continue;
      }
      this._watched.delete(a), this._watched.delete(n);
      let d = r.isDirectory ? u.UNLINK_DIR : u.UNLINK;
      if (c && !this._isIgnored(a)) this._emit(d, a);
      this._closePath(a);
    }
  }
  _closePath(t) {
    this._closeFile(t);
    let s = f.dirname(t);
    this._getWatchedDir(s).remove(f.basename(t));
  }
  _closeFile(t) {
    let s = this._closers.get(t);
    if (!s) return;
    s.forEach(e => e()), this._closers.delete(t);
  }
  _addPathCloser(t, s) {
    if (!s) return;
    let e = this._closers.get(t);
    if (!e) e = [], this._closers.set(t, e);
    e.push(s);
  }
  _readdirp(t, s) {
    if (this.closed) return;
    let e = {
      type: u.ALL,
      alwaysStat: !0,
      lstat: !0,
      ...s,
      depth: 0
    }, i = q(t, e);
    return this._streams.add(i), i.once(tt, () => {
      i = void 0;
    }), i.once(C, () => {
      if (i) this._streams.delete(i), i = void 0;
    }), i;
  }
}

function is(t, s = {}) {
  let e = new z(s);
  return e.add(t), e;
}

var lv = {
  watch: is,
  FSWatcher: z
};

export { lv };
