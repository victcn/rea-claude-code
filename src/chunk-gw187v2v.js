// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var p = {
  stream: !0
};

function u(n, t) {
  let e = n.charCodeAt(t);
  if (e === 10) return 1;
  if (e === 13) {
    if (t + 1 >= n.length) return -1;
    return n.charCodeAt(t + 1) === 10 ? 2 : 1;
  }
  return 0;
}

function m(n, t) {
  let e = t;
  while (e < n.length) {
    let r = u(n, e);
    if (r === 0) {
      e++;
      continue;
    }
    if (r === -1) return null;
    let i = e + r;
    if (i >= n.length) return null;
    let s = u(n, i);
    if (s === -1) return null;
    if (s > 0) return {
      contentEnd: e,
      afterDelim: i + s
    };
    e = i;
  }
  return null;
}

function f(n) {
  if (!/\S/.test(n)) return null;
  let t = {}, e = !1;
  for (let r of n.split(/\r\n|\r|\n/)) {
    if (r.startsWith(":")) {
      e = !0;
      continue;
    }
    let i = r.indexOf(":");
    if (i === -1) continue;
    let s = r.slice(0, i), o = r[i + 1] === " " ? r.slice(i + 2) : r.slice(i + 1);
    switch (s) {
     case "event":
      t.event = o;
      break;

     case "id":
      t.id = o;
      break;

     case "data":
      t.data = t.data ? t.data + `\n` + o : o;
      break;
    }
  }
  return t.data || e ? t : null;
}

class JVe {
  decoder=new TextDecoder;
  pending=[];
  pendingLength=0;
  dispatched=0;
  get pendingChars() {
    return this.pendingLength;
  }
  get framesDispatched() {
    return this.dispatched;
  }
  push(n) {
    let t = typeof n === "string" ? n : this.decoder.decode(n, p);
    if (!t) return [];
    return this.drain(t);
  }
  flush() {
    let n = this.decoder.decode();
    if (n) this.pending.push(n), this.pendingLength += n.length;
    let t = this.joinPending();
    this.pending = [], this.pendingLength = 0;
    let e = f(t);
    return e ? [ e ] : [];
  }
  buffered() {
    return this.joinPending();
  }
  drain(n) {
    let t = [], e = this.pendingLength, r = Math.min(3, e), i = this.tail(r) + n, s = e - r, o = 0, d = -1;
    for (;;) {
      let a = m(i, o);
      if (!a) break;
      let l = s + a.contentEnd, c;
      if (d === -1) {
        let h = this.joinPending();
        c = l <= e ? h.slice(0, l) : h + n.slice(0, l - e);
      } else c = n.slice(d - e, l - e);
      let g = f(c);
      if (g) t.push(g);
      this.dispatched++, d = s + a.afterDelim, o = a.afterDelim;
    }
    if (d === -1) this.pending.push(n), this.pendingLength = e + n.length; else {
      let a = n.slice(d - e);
      this.pending = a ? [ a ] : [], this.pendingLength = a.length;
    }
    return t;
  }
  tail(n) {
    if (n <= 0) return "";
    let t = n, e = "";
    for (let r = this.pending.length - 1; r >= 0 && t > 0; r--) {
      let i = this.pending[r];
      if (i.length <= t) e = i + e, t -= i.length; else e = i.slice(i.length - t) + e, 
      t = 0;
    }
    return e;
  }
  joinPending() {
    return this.pending.length === 1 ? this.pending[0] : this.pending.join("");
  }
}

export { JVe };
