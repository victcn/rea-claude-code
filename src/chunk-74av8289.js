// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { iv, Alt, xfo, P7, ZQt, cIt } from "./chunk-a6ee2sc5.js";

import { Zn, Msn, me, yn, Vo, lr, St, nI, aRo, Rm, cp, Dd } from "./chunk-dexzwy8h.js";

import { isIP as R } from "net";

import { isAbsolute as W, posix as O, win32 as D } from "path";

function w(e) {
  if (R(e) === 6) return !0;
  if (e.includes("://") || e.includes("/") || e.includes(":")) return !1;
  if (e === "localhost") return !0;
  if (e.startsWith("*.")) {
    let t = e.slice(2);
    if (!t.includes(".") || t.startsWith(".") || t.endsWith(".")) return !1;
    let n = t.split(".");
    return n.length >= 2 && n.every(s => s.length > 0);
  }
  if (e.includes("*")) return !1;
  return e.includes(".") && !e.startsWith(".") && !e.endsWith(".");
}

var k = 'Invalid domain pattern. Must be a valid domain (e.g., "example.com"), a wildcard (e.g., "*.example.com"), or a bracketed IPv6 literal (e.g., "[::1]", "[2001:db8::1]:443"). Overly broad patterns like "*.com" or "*" are not allowed for security reasons.', p = me().refine(w, {
  message: k
});

function C(e) {
  let t = e.indexOf(":");
  return !(t !== -1 && e.indexOf(":", t + 1) !== -1) || e.startsWith("[");
}

var E = me().refine(e => C(e) && w(P7(e).hostPattern), {
  message: k + ' An optional ":port" suffix (1-65535) restricts the entry to that port.'
}), j = me().refine(e => {
  if (!C(e)) return !1;
  let {hostPattern: t} = P7(e);
  return t === "*" || w(t);
}, {
  message: k + ' In deniedDomains a bare "*" (deny-all) is also accepted, and an optional ":port" suffix (1-65535) restricts the entry to that port.'
}), H = me().refine(e => xfo(e) !== void 0, {
  message: 'Invalid IP address or CIDR range. Use an IPv4/IPv6 literal or CIDR, e.g. "10.0.0.0/8", "192.168.1.10", "fc00::/7" (IPv6 unbracketed).'
}), y = me().min(1, "Path cannot be empty"), h = nI([ y, St({
  path: y,
  literal: cp(!0)
}).strict() ], {
  errorMap: (e, t) => e.code === Zn.invalid_union ? {
    message: 'Expected a path, or { "path": "<path>", "literal": true }'
  } : {
    message: t.defaultError
  }
}), f = me().min(1, "Path cannot be empty").refine(e => W(e), {
  message: "Binary path must be absolute"
}), M = St({
  socketPath: me().min(1).describe("Unix socket path to the MITM proxy"),
  domains: lr(p).min(1).describe('Domains to route through the MITM proxy (e.g., ["api.example.com", "*.internal.org"])')
}), N = St({
  http: me().url().optional().describe("Upstream proxy URL for plain HTTP traffic"),
  https: me().url().optional().describe("Upstream proxy URL for HTTPS/CONNECT traffic (falls back to http if unset)"),
  noProxy: me().optional().describe("Comma-separated NO_PROXY list (hostname suffixes and CIDR ranges). Matching destinations connect directly instead of via the parent proxy.")
}), T = Dd([ "deny", "mask" ]), m = me().regex(/^[A-Za-z_][A-Za-z0-9_]*$/, "Environment variable name must start with a letter or underscore and contain only letters, digits, and underscores"), I = me().superRefine((e, t) => {
  let n;
  try {
    n = new RegExp(e);
  } catch (d) {
    t.addIssue({
      code: Zn.custom,
      message: `extract is not a valid regular expression: ${d.message}`
    });
    return;
  }
  if (new RegExp(n.source + "|").exec("").length - 1 < 1) t.addIssue({
    code: Zn.custom,
    message: "extract must contain at least one capturing group \u2014 group 1 is " + 'the credential value to mask (e.g. "token:\\s*(\\S+)").'
  });
}), V = St({
  path: y.describe("Path to a credential file or directory. Supports the same path forms as a string in filesystem.denyRead (absolute paths and ~ expansion)."),
  mode: T.describe("Access mode for this path"),
  extract: I.optional().describe('Optional regex for structured masking. Applied globally; capture group 1 of each match is masked, the rest of the file is preserved. If the pattern matches nothing, behaviour is governed by onExtractNoMatch (default "warn"). Only meaningful when mode is "mask"; accepted but ignored for "deny".'),
  onExtractNoMatch: Dd([ "warn", "deny", "error" ]).optional().describe("What to do when extract matches nothing (or, with decode, no " + 'candidate verifies): "warn" (default \u2014 stderr warning, file left ' + 'readable), "deny" (degrade to mode "deny" \u2014 file unreadable), or ' + '"error" (throw at wrap time). Only meaningful with mode "mask" and extract or decode set.'),
  decode: Dd([ "jwt" ]).optional().describe('Optional encoded-credential format. "jwt": decodes recognized JWTs so masking can target fields inside them (see maskClaims). Candidates are located with a built-in JWT regex (or the explicit extract pattern, if set) and verified to actually be JWTs before masking. Without maskClaims, the whole decoded value is treated as the credential and replaced with a structurally valid fake JWT, so client-side token parsing keeps working. If no candidate verifies, behaviour is governed by onExtractNoMatch (default "warn"). Only meaningful when mode is "mask"; accepted but ignored for "deny".'),
  maskClaims: lr(me().min(1)).optional().describe('Names of top-level payload claims to mask inside each decoded value, instead of replacing the whole token. Each named claim present with a string value gets its own sentinel; all other claims are preserved so claim-reading clients keep working. Requires decode. If no named claim matches in any verified token, behaviour is governed by onExtractNoMatch (default "warn"). Only meaningful when mode is "mask"; accepted but ignored for "deny".'),
  maskDuplicates: Vo().optional().describe("If true, verbatim occurrences of each captured credential value outside the regex-matched spans are also replaced with the " + "corresponding sentinel \u2014 for a secret repeated where the regex " + `does not reach (e.g. in a comment). Matches raw substrings: short or common credential values may corrupt unrelated content, so this is intended for long, high-entropy secrets. With decode, only values that passed verification are scanned; duplicates reuse the verified value's fake without re-verification. Defaults to false. Only meaningful with mode "mask" and extract or decode set; accepted but ignored otherwise.`),
  injectHosts: lr(p).optional().describe("Optional narrowing of where the proxy substitutes this credential. " + "If unset, defaults to network.allowedDomains \u2014 the credential is " + 'injected at every reachable host. Only meaningful when mode is "mask"; accepted but ignored for "deny".')
}), L = St({
  name: m.describe("Environment variable name"),
  mode: T.describe("Access mode for this environment variable"),
  extract: I.optional().describe('Optional regex for structured masking. Applied globally; capture group 1 of each match is masked, the rest of the value is preserved. If the pattern matches nothing, behaviour is governed by onExtractNoMatch (default "warn"). Only meaningful when mode is "mask"; accepted but ignored for "deny".'),
  onExtractNoMatch: Dd([ "warn", "deny", "error" ]).optional().describe('What to do when extract matches nothing: "warn" (default \u2014 stderr ' + 'warning, variable passes through unmasked), "deny" (variable unset inside the sandbox), or "error" (throw at wrap time). Only meaningful with mode "mask" and extract set.'),
  decode: Dd([ "jwt" ]).optional().describe(`Optional encoded-credential format. "jwt": the variable's whole value is verified to actually be a JWT and replaced with a structurally valid fake JWT so client-side token parsing keeps working; the proxy swaps the whole fake token on egress. If the value does not verify, the variable is left unmasked with a stderr warning (fail-open). Only meaningful when mode is "mask"; accepted but ignored for "deny".`),
  maskClaims: lr(me().min(1)).optional().describe('Names of top-level payload claims to mask inside the decoded value, instead of replacing the whole token. Each named claim present with a string value gets its own sentinel; all other claims are preserved so claim-reading clients keep working. Requires decode. If no named claim matches, the variable is left unmasked with a stderr warning (fail-open). Only meaningful when mode is "mask"; accepted but ignored for "deny".'),
  injectHosts: lr(p).optional().describe("Optional narrowing of where the proxy substitutes this credential. " + "If unset, defaults to network.allowedDomains \u2014 the credential is " + 'injected at every reachable host. Only meaningful when mode is "mask"; accepted but ignored for "deny".')
}), _ = St({
  accessKeyIdVar: m.describe("Name of the masked env var holding the AWS access key id."),
  secretAccessKeyVar: m.describe("Name of the masked env var holding the AWS secret access key."),
  sessionTokenVar: m.optional().describe("Optional name of the masked env var holding the AWS session token (temporary credentials). When set, the proxy sends the real token as x-amz-security-token on re-signed requests and adds it to the signed header set if the client did not.")
}).strict(), g = Dd([ "deny", "passthrough" ]), U = St({
  streaming: g.optional().describe('Policy for aws-chunked streaming uploads (x-amz-content-sha256: STREAMING-*): per-chunk signatures chain off the seed signature, so re-signing would require rewriting the body. Default "deny".'),
  presigned: g.optional().describe('Policy for presigned URLs (X-Amz-Algorithm/X-Amz-Signature in the query, no Authorization header): the signature lives in the URL itself. Default "deny".'),
  sigv4a: g.optional().describe('Policy for SigV4A (AWS4-ECDSA-P256-SHA256) asymmetric signatures: there is no shared-key HMAC to recompute. Default "deny".')
}).strict(), q = St({
  files: lr(V).optional().describe("Credential files or directories to protect"),
  envVars: lr(L).optional().describe("Environment variables to protect"),
  allowPlaintextInject: Vo().optional().describe("Allow sentinel\u2192real substitution on the plain-HTTP proxy path. " + "Defaults to false: without TLS termination the upstream identity is unverified and the credential travels in cleartext. Set only for trusted-network test fixtures."),
  awsPairs: lr(_).optional().describe("Explicit groupings of masked env vars into AWS credential pairs for SigV4 re-signing, for non-standard variable names. The conventional AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY / AWS_SESSION_TOKEN trio is paired automatically when masked."),
  sigv4: U.optional().describe('Policies for AWS SigV4 request shapes the proxy cannot re-sign (streaming, presigned, sigv4a) when they reference a masked credential pair: "deny" (default) or "passthrough".')
}).strict(), G = St({
  allowedDomains: lr(E).describe('List of allowed domains (e.g., ["github.com", "*.npmjs.org", "api.example.com:443"]). An optional ":port" suffix restricts the entry to that destination port.'),
  deniedDomains: lr(j).describe('List of denied domains. Unlike allowedDomains, a bare "*" is accepted here (deny-all). An optional ":port" suffix (e.g., "*:22") restricts the entry to that destination port.'),
  deniedDomainReasons: Rm(me(), me().min(1)).optional().describe('Optional model-facing reason keyed by the exact deniedDomains entry it explains (e.g., {"github.com:22": "SSH pushes to GitHub are blocked; use an https remote"}). Reported in the <sandbox_violations> line when that entry denies a connection; entries without one use a generic reason. Keys are matched by exact entry string, so a key with no matching deniedDomains entry never fires.'),
  strictAllowlist: Vo().optional().describe("If true, hosts not in allowedDomains are denied without consulting the ask callback. Set this when allowedDomains is policy enforcement, not a prompt-suppression hint."),
  deniedResolvedAddresses: lr(H).optional().describe('IP addresses / CIDR ranges (IPv4 or IPv6, unbracketed) that an allowed HOSTNAME must not resolve to, in addition to the built-in set (see README "Resolved-address check") and any IP literal listed in deniedDomains. A permitted name that resolves only into these is refused instead of dialed. A name may resolve to a denied address only if that IP literal (and port) is itself in allowedDomains. Not evaluated for connections routed through parentProxy (including one taken from HTTP_PROXY/HTTPS_PROXY) or mitmProxy (that hop resolves the name).'),
  allowUnixSockets: lr(me()).optional().describe("macOS only: Unix socket paths to allow. Ignored on Linux (seccomp cannot filter by path)."),
  allowAllUnixSockets: Vo().optional().describe("If true, allow all Unix sockets (disables blocking on both platforms)."),
  allowLocalBinding: Vo().optional().describe("Whether to allow binding to local ports (default: false)"),
  allowMachLookup: lr(me().refine(e => !(e.endsWith("*") ? e.slice(0, -1) : e).includes("*"), {
    message: 'Wildcards are only allowed as a single trailing "*" (e.g., "com.example.*" or "*" for all services).'
  })).optional().describe('macOS only: Additional XPC/Mach service names to allow looking up. Supports trailing-wildcard prefix matching (e.g., "2BUA8C4S2C.com.1password.*"). Needed for tools like 1Password CLI, Playwright, or the iOS Simulator that communicate via XPC.'),
  httpProxyPort: yn().int().min(1).max(65535).optional().describe("Port of an external HTTP proxy to use instead of starting a local one. When provided, the library will skip starting its own HTTP proxy and use this port. The external proxy must handle domain filtering."),
  socksProxyPort: yn().int().min(1).max(65535).optional().describe("Port of an external SOCKS proxy to use instead of starting a local one. When provided, the library will skip starting its own SOCKS proxy and use this port. The external proxy must handle domain filtering."),
  mitmProxy: M.optional().describe("Optional MITM proxy configuration. Routes matching domains through an upstream proxy via Unix socket while SRT still handles allow/deny filtering."),
  filterRequest: Msn(e => typeof e === "function", {
    message: "filterRequest must be a function"
  }).optional().describe("Per-request filter callback. Receives the parsed HTTP request (web-standard Request) and returns {action, reason?}. Denied requests get a 403 with the reason. If the callback throws, the request is denied. Applies to plain HTTP through the proxy and, when tlsTerminate is configured, to terminated HTTPS. SRT does not provide a policy language; library consumers own matching."),
  tlsTerminate: St({
    caCertPath: me().min(1).optional().describe("Path to a PEM-encoded CA certificate. The sandboxed child is configured to trust this CA, and the TLS-terminating proxy uses it to sign per-host certificates. If omitted, on Windows SRT generates-if-absent a persistent CA under %ProgramData%\\sandbox-runtime\\ca\\ and trusts it in the sandbox user's Root store; on other platforms SRT generates an ephemeral CA into a temp directory for the lifetime of the session."),
    caKeyPath: me().min(1).optional().describe("Path to the PEM-encoded private key for caCertPath."),
    excludeDomains: lr(p).optional().describe("Domain patterns (same syntax as allowedDomains) whose HTTPS connections are NOT terminated. Matching CONNECTs are opaque byte tunnels: still subject to the allow/deny domain lists, but the sandboxed client completes its own TLS handshake with the upstream, so filterRequest and credential injection do not apply to their HTTPS traffic (plain-HTTP requests to the same hosts keep the normal request pipeline). Use for hosts the proxy must not re-originate: mTLS upstreams (only the client holds the client certificate) and clients that pin the upstream certificate and would reject the MITM CA. Hosts still need to be reachable via allowedDomains; this list only changes how they are tunnelled."),
    extraCaCertPaths: lr(me().min(1)).optional().describe("Paths to PEM CA certificate files appended to the trust bundle the sandboxed child is pointed at, after the MITM CA and the host's regular roots. Use for site-local roots (e.g. an internal mTLS CA) presented by excluded/passthrough hosts, so the child can verify them itself. Only the CERTIFICATE blocks of each file are copied; files that are missing, unreadable, or contain no PEM CERTIFICATE block are skipped (with a debug log), so paths that exist on only some hosts are safe to list.")
  }).refine(e => !e.caCertPath === !e.caKeyPath, {
    message: "caCertPath and caKeyPath must be provided together"
  }).optional().describe("[EXPERIMENTAL] Enable in-process TLS termination so HTTPS request/response bodies are visible to SRT. Provide a CA cert+key, or omit both to have SRT generate an ephemeral one."),
  parentProxy: N.optional().describe("Upstream HTTP proxy for outbound connections. When set, SRT's proxy tunnels non-mitmProxy traffic through this parent instead of connecting directly. Falls back to HTTP_PROXY/HTTPS_PROXY/NO_PROXY env vars if unset.")
}), Z = St({
  disabled: Vo().optional().describe("Disable all filesystem policy enforcement. When true, no read or write rules are emitted: denyRead/allowRead/allowWrite/denyWrite are ignored, and the built-in mandatory write protections (.git/hooks, .git/config, shell rc files, .mcp.json, .vscode/.idea, .claude/commands, .claude/agents) are NOT applied. Use only when the sandboxed process is trusted with full host filesystem access. Network and credential-env restrictions still apply. On Linux, /dev is still replaced by the bwrap minimal devtmpfs."),
  denyRead: lr(h).describe("Paths denied for reading"),
  allowRead: lr(h).optional().describe("Paths to re-allow reading within denied regions (takes precedence over denyRead). Use with denyRead to deny a broad region then allow back specific subdirectories."),
  allowWrite: lr(h).describe("Paths allowed for writing"),
  denyWrite: lr(h).describe("Paths denied for writing (takes precedence over allowWrite)"),
  allowGitConfig: Vo().optional().describe("Allow writes to .git/config files (default: false). Enables git remote URL updates while keeping .git/hooks protected.")
}), K = Rm(me(), lr(me())).describe('Map of command patterns to filesystem paths to ignore violations for. Use "*" to match all commands'), X = St({
  command: me().describe("The ripgrep command to execute"),
  args: lr(me()).optional().describe("Additional arguments to pass before ripgrep args"),
  argv0: me().optional().describe("Override argv[0] when spawning (for multicall binaries that dispatch on argv[0])")
}), F = St({
  safeDirectories: lr(me()).default([]).describe("Directories git should treat as safe (`safe.directory`) even though they're owned by a different user inside the sandbox. Use for the repo top-level when launching from a subdirectory. Does NOT grant write.")
}), J = St({
  path: me().min(1).describe("Path to the srt-win binary. Pass the exported VENDORED_SRT_WIN_EXE constant to use the packaged vendor/srt-win/<arch>/srt-win.exe (see its WARNING: in a dev checkout that file may sit inside your sandbox write grant). The binary is spawned with the `--srt-win` argv[1] sentinel so a multicall dispatcher can route to srt-win's CLI.")
}), z = St({
  sandboxUser: me().min(1).max(20, "Windows local usernames are limited to 20 characters").optional().describe("Name for the dedicated sandbox user account that `srt-win install` creates and the sandboxed child runs as. Default: `srt-sandbox`. Install refuses if an account by this name already exists and srt-win did not create it (it will not rotate the password of an account it does not own). Must match what `srt-win install --sandbox-user` was run with."),
  sublayerGuid: me().uuid().optional().describe("WFP sublayer GUID under which the filters were installed. Omit to use the srt-win compile-time default. Set this when filters were installed by enterprise tooling under a custom sublayer."),
  wfpSublayerGuid: me().uuid().optional().describe("Deprecated alias for sublayerGuid."),
  proxyPortRange: aRo([ yn().int().min(1), yn().int().max(65535) ]).refine(([e, t]) => e <= t && t - e <= 64, {
    message: "low must be \u2264 high and range width \u2264 64"
  }).optional().describe("Inclusive [low, high] port range the JS mux proxy listeners bind inside. MUST match the range passed to `srt-win install " + "--proxy-port-range` (default 60080\u201360089) \u2014 the WFP loopback " + "permit only covers ports in that range."),
  srtWin: J.optional().describe("How to locate/invoke the srt-win helper binary. `srtWin.path` is " + "required to use the Windows sandbox \u2014 your own (multicall) binary, " + "or the exported VENDORED_SRT_WIN_EXE constant for the packaged exe.")
}), Y = St({
  applyPath: me().optional().describe("Path to the apply-seccomp binary"),
  argv0: me().optional().describe("Invoke apply-seccomp as a multicall binary that dispatches on the ARGV0 environment variable. When set, applyPath is used verbatim (no existence check) and the invocation inside bwrap is prefixed with ARGV0=<this value>. The caller is responsible for ensuring applyPath resolves inside the bwrap namespace and that the target binary implements the apply-seccomp interface when ARGV0 matches.")
});

function b(e, t, n) {
  let s = iv() === "windows", d = s ? /[\\/]+$/ : /\/+$/;
  if (!d.test(e)) return;
  if (!Alt(e)) return;
  if (!(s ? D.isAbsolute(e) : O.isAbsolute(e)) && !e.startsWith("~")) return;
  n.addIssue({
    code: Zn.custom,
    path: t,
    message: `Deny glob "${e}" ends in a separator, so as a pattern it can match no path. Write "${e.replace(d, "")}", which is also read as the path of that name where it exists, or add a "**" segment to match at any depth.`
  });
}

var ie = St({
  network: G.describe("Network restrictions configuration"),
  filesystem: Z.describe("Filesystem restrictions configuration"),
  credentials: q.optional().describe("Credential handling configuration. Only the explicitly declared files and environment variables are restricted."),
  ignoreViolations: K.optional().describe("Optional configuration for ignoring specific violations"),
  enableWeakerNestedSandbox: Vo().optional().describe("Enable weaker nested sandbox mode (for Docker environments)"),
  enableWeakerNetworkIsolation: Vo().optional().describe("Enable weaker network isolation to allow access to com.apple.trustd.agent (macOS only). This is needed for Go programs (gh, gcloud, terraform, kubectl, etc.) to verify TLS certificates when using httpProxyPort with a MITM proxy and custom CA. Enabling this opens a potential data exfiltration vector through the trustd service. Only enable if you need Go TLS verification."),
  allowAppleEvents: Vo().optional().describe("Allow sending Apple Events and Launch Services open requests from the sandbox (macOS only). Needed for open, osascript, and anything that opens URLs or scripts other apps via AppleScript. This removes code-execution isolation: sandboxed commands can launch other applications unsandboxed with no user prompt (launched apps are not subject to the sandbox filesystem or network restrictions), and can script running apps subject to TCC automation consent. Default: false."),
  ripgrep: X.optional().describe('Custom ripgrep configuration (default: { command: "rg" })'),
  mandatoryDenySearchDepth: yn().int().min(1).max(10).optional().describe("How deep below the working directory dangerous names are looked for on Linux (default: 3): a dangerous file down to this depth, and a dangerous directory, or the hooks and config of a repository, one level higher up. Higher values provide more protection but slower performance."),
  allowPty: Vo().optional().describe("Allow pseudo-terminal (pty) operations (macOS only)"),
  seccomp: Y.optional().describe("Custom seccomp binary paths (Linux only)."),
  bwrapPath: f.optional().describe('Linux only: absolute path to the bwrap (bubblewrap) binary. When set, this path is used directly instead of resolving "bwrap" via PATH.'),
  socatPath: f.optional().describe('Linux only: absolute path to the socat binary. When set, this path is used directly instead of resolving "socat" via PATH.'),
  javaAgentJarPath: f.optional().describe("macOS/Linux: absolute path to srt-proxy-agent.jar, the JVM agent injected via JAVA_TOOL_OPTIONS so Java tools honor the proxy. When set, used instead of looking under vendor/java-proxy-agent/. For consumers that bundle sandbox-runtime and ship the jar separately."),
  windows: z.optional().describe("Windows-specific settings (WFP sublayer, proxy port range)."),
  git: F.optional().describe("Git configuration to inject via GIT_CONFIG_* env vars (cross-platform). `safeDirectories` marks paths as `safe.directory` without adding them to `filesystem.allowWrite`.")
}).superRefine((e, t) => {
  let n = !e.filesystem.disabled;
  if (n) {
    for (let [o, a] of e.filesystem.denyRead.entries()) {
      if (typeof a !== "string") continue;
      b(a, [ "filesystem", "denyRead", o ], t);
    }
    for (let [o, a] of e.filesystem.denyWrite.entries()) {
      if (typeof a !== "string") continue;
      b(a, [ "filesystem", "denyWrite", o ], t);
    }
  }
  let s = e.credentials;
  if (!s) return;
  let d = e.network.allowedDomains.map(ZQt), v = (o, a) => {
    for (let [l, i] of o.entries()) if (!cIt(i, d)) t.addIssue({
      code: Zn.custom,
      path: [ ...a, l ],
      message: `injectHosts entry "${i}" is not reachable via ` + `network.allowedDomains \u2014 add "${i}" (or a covering wildcard) to allowedDomains, or remove it from injectHosts.`
    });
  }, x = !1, P = (o, a) => {
    if (o.injectHosts) v(o.injectHosts, [ ...a, "injectHosts" ]);
    if (o.mode !== "mask") return;
    x = !0;
    let l = e.network.tlsTerminate?.excludeDomains;
    if (l?.length) {
      if (o.injectHosts) {
        for (let [i, r] of o.injectHosts.entries()) if (cIt(r, l)) t.addIssue({
          code: Zn.custom,
          path: [ ...a, "injectHosts", i ],
          message: `injectHosts entry "${r}" is entirely covered by network.tlsTerminate.excludeDomains. Credential injection only runs on TLS-terminated connections, so this host would receive the placeholder instead of the credential. Remove it from one of the two lists.`
        });
      } else if (d.length > 0 && d.every(i => cIt(i, l))) t.addIssue({
        code: Zn.custom,
        path: a,
        message: "This masked credential has no injectHosts, so it defaults " + "to network.allowedDomains \u2014 but " + "network.tlsTerminate.excludeDomains covers every allowed domain, so it could never be injected anywhere. Credential injection only runs on TLS-terminated connections."
      });
    }
    if (o.injectHosts !== void 0 && o.injectHosts.length === 0) t.addIssue({
      code: Zn.custom,
      path: a,
      message: "injectHosts is explicitly empty \u2014 the credential would be " + "masked but never injected. Omit injectHosts to default to network.allowedDomains, or list the intended hosts."
    });
  };
  for (let [o, a] of (s.envVars ?? []).entries()) {
    if (P(a, [ "credentials", "envVars", o ]), a.maskClaims !== void 0 && a.decode === void 0) t.addIssue({
      code: Zn.custom,
      path: [ "credentials", "envVars", o, "maskClaims" ],
      message: "maskClaims requires decode \u2014 it names claims inside the " + 'decoded payload. Set decode (e.g. "jwt"), or remove maskClaims to mask the whole value.'
    });
    if (a.maskClaims !== void 0 && a.maskClaims.length === 0) t.addIssue({
      code: Zn.custom,
      path: [ "credentials", "envVars", o, "maskClaims" ],
      message: "maskClaims is explicitly empty \u2014 no claim would ever be " + "masked. Omit maskClaims to mask the whole token, or list the claims to protect."
    });
  }
  for (let [o, a] of (s.files ?? []).entries()) {
    if (P(a, [ "credentials", "files", o ]), a.maskClaims !== void 0 && a.decode === void 0) t.addIssue({
      code: Zn.custom,
      path: [ "credentials", "files", o, "maskClaims" ],
      message: "maskClaims requires decode \u2014 it names claims inside the " + 'decoded payload. Set decode (e.g. "jwt"), or remove maskClaims to mask the extracted value whole.'
    });
    if (a.maskClaims !== void 0 && a.maskClaims.length === 0) t.addIssue({
      code: Zn.custom,
      path: [ "credentials", "files", o, "maskClaims" ],
      message: "maskClaims is explicitly empty \u2014 no claim would ever be " + "masked. Omit maskClaims to mask the whole token, or list the claims to protect."
    });
    if (a.mode === "mask" && a.path.endsWith("/")) t.addIssue({
      code: Zn.custom,
      path: [ "credentials", "files", o, "path" ],
      message: `Credential mode "mask" applies to a single file, not a directory. Use mode "deny" for "${a.path}", or point at the credential file inside it.`
    });
    if (n && a.mode === "deny") b(a.path, [ "credentials", "files", o, "path" ], t);
  }
  let S = new Set;
  for (let [o, a] of (s.awsPairs ?? []).entries()) {
    let l = [ [ "accessKeyIdVar", a.accessKeyIdVar ], [ "secretAccessKeyVar", a.secretAccessKeyVar ] ];
    if (a.sessionTokenVar !== void 0) l.push([ "sessionTokenVar", a.sessionTokenVar ]);
    for (let [i, r] of l) {
      let u = [ "credentials", "awsPairs", o, i ];
      if (S.has(r)) {
        t.addIssue({
          code: Zn.custom,
          path: u,
          message: `"${r}" appears in more than one awsPairs slot (within ` + "or across pairs) \u2014 each variable can fill exactly one slot."
        });
        continue;
      }
      S.add(r);
      let c = (s.envVars ?? []).find(A => A.name === r);
      if (c === void 0 || c.mode !== "mask") t.addIssue({
        code: Zn.custom,
        path: u,
        message: `"${r}" does not reference a credentials.envVars entry ` + 'with mode "mask" \u2014 an AWS pair links already-masked ' + "variables; add the entry (masking is the opt-in for SigV4 re-signing)."
      }); else if (c.extract !== void 0 || c.decode !== void 0) t.addIssue({
        code: Zn.custom,
        path: u,
        message: `"${r}" uses extract/decode, but an AWS pair member must be masked whole-value: the SigV4 trigger is an exact match of the fake access key id, and the signer needs the entire real value.`
      });
    }
  }
  if (x && e.network.tlsTerminate === void 0 && !s.allowPlaintextInject) t.addIssue({
    code: Zn.custom,
    path: [ "credentials" ],
    message: "Credential masking requires network.tlsTerminate so substitution runs only over a verified TLS connection. Enable tlsTerminate, or set credentials.allowPlaintextInject to opt out (not recommended)."
  });
});

export { G as NetworkConfigSchema };
