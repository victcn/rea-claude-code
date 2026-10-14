














import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

let PSL = null;
function psl() {
  if (PSL) return PSL;
  const j = JSON.parse(fs.readFileSync(fileURLToPath(new URL('./psl-data.json', import.meta.url)), 'utf8'));
  const rules = new Set(j.rules); const wildcard = new Set(j.wildcard); const exceptions = new Set(j.exceptions);

  const hasSuffixBelow = new Set();
  const note = (r) => { const p = r.split('.'); for (let i = 1; i < p.length; i++) hasSuffixBelow.add(p.slice(i).join('.')); };
  for (const r of rules) note(r);
  for (const w of wildcard) { hasSuffixBelow.add(w); note(w); }
  const tlds = new Set(); for (const r of rules) tlds.add(r.split('.').pop()); for (const w of wildcard) tlds.add(w.split('.').pop());
  PSL = { rules, wildcard, exceptions, hasSuffixBelow, tlds, version: j.version };
  return PSL;
}

const LABEL = /^(?!-)[a-z0-9-]{1,63}(?<!-)$/;


export function plainHostName(h) {
  if (typeof h !== 'string' || h.length > 253 || h !== h.toLowerCase()) return false;
  const p = h.split('.');
  if (p.length < 2 || !p.every((l) => LABEL.test(l))) return false;
  if (p.every((l) => /^\d+$/.test(l))) return false;
  if (/^\d+$/.test(p[p.length - 1])) return false;
  return true;
}



export function publicSuffix(host) {
  const { rules, wildcard, exceptions, tlds } = psl();
  const p = host.split('.');
  if (!tlds.has(p[p.length - 1])) return null;
  for (let i = 0; i < p.length; i++) {
    const cand = p.slice(i).join('.');
    if (exceptions.has(cand)) return p.slice(i + 1).join('.');
    if (rules.has(cand)) return cand;
    if (i + 1 < p.length && wildcard.has(p.slice(i + 1).join('.'))) return cand;
  }
  return p[p.length - 1];
}


export function registrableDomain(host) {
  const s = publicSuffix(host); if (s === null) return null;
  if (host === s) return null;
  const p = host.split('.'); const n = s.split('.').length;
  return p.slice(p.length - n - 1).join('.');
}


export function reachableEntryProblem(entry) {
  if (typeof entry !== 'string' || !entry.trim()) return 'empty';
  const raw = entry.trim();
  if (/[\s/@?#\\]|:\/\//.test(raw)) return 'a host name only: no scheme, path, user or query (write "js.stripe.com", not "https://js.stripe.com/v3")';
  const m = raw.match(/^(\*\.)?([^:]+)(?::(\d{1,5}))?$/);
  if (!m) return 'not a host name';
  const [, star, name, port] = m;
  if (port !== undefined && (Number(port) < 1 || Number(port) > 65535)) return 'the port is out of range';
  if (!plainHostName(name)) return 'not a plain lower-case host name (letters, digits and hyphens, at least two labels; an internationalised name goes in punycode; no IP addresses)';
  let reg; try { reg = registrableDomain(name); } catch { return 'the public-suffix data could not be read, so this entry cannot be checked'; }
  if (publicSuffix(name) === null) return 'its top-level domain is not in the public-suffix list, so it cannot be classified (refused rather than guessed)';
  if (!star) {
    if (reg === null) return name + ' is a public suffix (a name under which anyone can register), not a host';
    return null;
  }

  if (reg === null) return '"*.' + name + '" would allow every name under a public suffix: anyone can register one there';
  if (psl().hasSuffixBelow.has(name)) return '"*.' + name + '" reaches names other people can register (a public suffix exists beneath ' + name + '): list the exact hosts instead';
  return null;
}


export function makeReachableMatcher(entries) {
  const exact = new Map(); const wild = [];
  for (const e of entries) {
    const m = e.trim().match(/^(\*\.)?([^:]+)(?::(\d{1,5}))?$/); if (!m) continue;
    const port = m[3] === undefined ? null : Number(m[3]);
    if (m[1]) wild.push({ suffix: '.' + m[2], port }); else { const l = exact.get(m[2]) || []; l.push(port); exact.set(m[2], l); }
  }
  const portOk = (want, got) => want === null ? (got === 443 || got === 80) : want === got;
  return (host, port) => {
    const h = String(host || '').toLowerCase().replace(/\.$/, ''); const p = Number(port);
    const l = exact.get(h); if (l && l.some((w) => portOk(w, p))) return true;
    return wild.some((w) => h.endsWith(w.suffix) && h.length > w.suffix.length && portOk(w.port, p));
  };
}





const BROWSER_SERVICE = [/^clients\d*\.google\.com$/, /^accounts\.google\.com$/, /^www\.google\.com$/, /^android\.clients\.google\.com$/, /^mtalk\.google\.com$/, /^update\.googleapis\.com$/, /^clientservices\.googleapis\.com$/,
  /^optimizationguide-pa\.googleapis\.com$/, /^content-autofill\.googleapis\.com$/, /^safebrowsing\.googleapis\.com$/, /^chromewebstore\.googleapis\.com$/, /(^|\.)gvt[12]\.com$/, /^dl\.google\.com$/, /^edgedl\.me\.gvt1\.com$/];
export const isBrowserServiceHost = (h) => BROWSER_SERVICE.some((re) => re.test(String(h).toLowerCase()));





export function groupRefusedHosts(tally, { max = 12 } = {}) {
  const groups = new Map();
  for (const [key, count] of Object.entries(tally || {})) {
    const m = String(key).match(/^([^:]+)(?::(\d+))?$/); if (!m) continue;
    const host = m[1].toLowerCase(); if (!plainHostName(host)) continue;
    const name = m[2] && m[2] !== '443' && m[2] !== '80' ? host + ':' + m[2] : host;
    let reg = null; try { reg = registrableDomain(host); } catch { reg = null; }
    const g = groups.get(reg || host) || { domain: reg || host, requests: 0, hosts: new Map() };
    g.requests += count; g.hosts.set(name, (g.hosts.get(name) || 0) + count); groups.set(reg || host, g);
  }
  const out = [...groups.values()].sort((a, b) => b.requests - a.requests).slice(0, max + 8).map((g) => {
    const hosts = [...g.hosts.entries()].sort((a, b) => b[1] - a[1]).map(([host, requests]) => ({ host, requests }));
    const names = hosts.map((h) => h.host);
    let suggest = names.filter((n) => reachableEntryProblem(n) === null).slice(0, 8);
    if (names.length >= 4 && names.every((n) => !n.includes(':'))) {

      const parts = names.map((n) => n.split('.'));
      let shared = parts[0].slice(1);
      for (const p of parts) { while (shared.length && !(p.length > shared.length && p.slice(p.length - shared.length).join('.') === shared.join('.'))) shared = shared.slice(1); }
      const parent = shared.join('.');
      if (parent && parent.split('.').length >= g.domain.split('.').length && reachableEntryProblem('*.' + parent) === null) suggest = ['*.' + parent];
    }
    const bare = names.map((n) => n.replace(/:\d+$/, ''));
    return { domain: g.domain, requests: g.requests, hosts: hosts.slice(0, 8), ...(hosts.length > 8 ? { moreHosts: hosts.length - 8 } : {}), ...(bare.every(isBrowserServiceHost) ? { suggest: [], browserService: true } : { suggest }) };
  });
  return [...out.filter((g) => !g.browserService), ...out.filter((g) => g.browserService)].slice(0, max);
}
