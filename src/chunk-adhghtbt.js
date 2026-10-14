// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E, zr } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { Rd } from "./chunk-j016gcgm.js";

import { it } from "./chunk-zscnwzv2.js";

import { D4e } from "./chunk-v7qc2kz8.js";

import { dt } from "./chunk-dd98x6x7.js";

import { Jte } from "./chunk-axx8atw0.js";

import { cUe } from "./chunk-av9t4vjk.js";

import { promises as n } from "fs";

import * as w from "os";

import * as o from "path";

var D = "com.anthropic.claude-code-url-handler", p = "Claude Code URL Handler", h = "claude-code-url-handler.desktop", _ = "Claude Code URL Handler.app", c = o.join(w.homedir(), "Applications", _), l = o.join(c, "Contents", "MacOS", "claude");

function d() {
  return o.join(cUe(), "applications", h);
}

var u = `HKEY_CURRENT_USER\\Software\\Classes\\${Jte}`, k = `${u}\\shell\\open\\command`, f = 864e5;

function y(e) {
  return `Exec="${e}" --handle-uri %u`;
}

function C(e) {
  return `"${e}" --handle-uri "%1"`;
}

async function F(e) {
  let r = o.join(c, "Contents");
  try {
    await n.rm(c, {
      recursive: !0
    });
  } catch (s) {
    if (E(s) !== "ENOENT") throw s;
  }
  await n.mkdir(o.dirname(l), {
    recursive: !0
  });
  let i = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n  <key>CFBundleIdentifier</key>\n  <string>${D}</string>\n  <key>CFBundleName</key>\n  <string>${p}</string>\n  <key>CFBundleExecutable</key>\n  <string>claude</string>\n  <key>CFBundleVersion</key>\n  <string>1.0</string>\n  <key>CFBundlePackageType</key>\n  <string>APPL</string>\n  <key>LSBackgroundOnly</key>\n  <true/>\n  <key>CFBundleURLTypes</key>\n  <array>\n    <dict>\n      <key>CFBundleURLName</key>\n      <string>Claude Code Deep Link</string>\n      <key>CFBundleURLSchemes</key>\n      <array>\n        <string>${Jte}</string>\n      </array>\n    </dict>\n  </array>\n</dict>\n</plist>`;
  await n.writeFile(o.join(r, "Info.plist"), i), await n.symlink(e, l), await it("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister", [ "-R", c ], {
    useCwd: !1
  }), t(`Registered ${Jte}:// protocol handler at ${c}`);
}

async function L(e) {
  await n.mkdir(o.dirname(d()), {
    recursive: !0
  });
  let r = `[Desktop Entry]\nName=${p}\nComment=Handle ${Jte}:// deep links for Claude Code\n${y(e)}\nType=Application\nNoDisplay=true\nMimeType=x-scheme-handler/${Jte};\n`;
  await n.writeFile(d(), r);
  let i = await Rd("xdg-mime");
  if (i) {
    let {code: a} = await it(i, [ "default", h, `x-scheme-handler/${Jte}` ], {
      useCwd: !1
    });
    if (a !== 0) throw Object.assign(Error(`xdg-mime exited with code ${a}`), {
      code: "XDG_MIME_FAILED"
    });
  }
  t(`Registered ${Jte}:// protocol handler at ${d()}`);
}

async function S(e) {
  for (let r of [ [ "add", u, "/ve", "/d", `URL:${p}`, "/f" ], [ "add", u, "/v", "URL Protocol", "/d", "", "/f" ], [ "add", k, "/ve", "/d", C(e), "/f" ] ]) {
    let {code: i} = await it("reg", r, {
      useCwd: !1
    });
    if (i !== 0) throw Object.assign(Error(`reg add exited with code ${i}`), {
      code: "REG_FAILED"
    });
  }
  t(`Registered ${Jte}:// protocol handler in Windows registry`);
}

async function x(e) {
  let r = e ?? await P();
  switch ("linux") {
   case "darwin":
    await F(r);
    break;

   case "linux":
    await L(r);
    break;

   case "win32":
    await S(r);
    break;

   default:
    throw Error("Unsupported platform: linux");
  }
}

async function P() {
  let e = D4e();
  try {
    return await n.realpath(e), e;
  } catch {
    return process.execPath;
  }
}

async function v(e) {
  try {
    switch ("linux") {
     case "darwin":
      return await n.readlink(l) === e;

     case "linux":
      return (await n.readFile(d(), "utf8")).includes(y(e));

     case "win32":
      {
        let {stdout: r, code: i} = await it("reg", [ "query", k, "/ve" ], {
          useCwd: !1
        });
        return i === 0 && r.includes(C(e));
      }

     default:
      return !1;
    }
  } catch {
    return !1;
  }
}

async function eBo(e) {
  if (dt().disableDeepLinkRegistration === "disable") return;
  if (![ "darwin", "linux", "win32" ].includes("linux")) return;
  let r = await P();
  if (await v(r)) return;
  let i = o.join(Ee(), ".deep-link-register-failed");
  if (z() && e !== void 0) {
    let a = await e.stat(Fe.state("deep-link-register-failed"));
    if (a.ok && Date.now() - a.value.mtimeMs < f) return;
  } else try {
    let a = await n.stat(i);
    if (Date.now() - a.mtimeMs < f) return;
  } catch {}
  try {
    if (await x(r), g("deep_link_register"), t("Auto-registered claude-cli:// deep link protocol handler"), 
    z() && e !== void 0) await e.delete(Fe.state("deep-link-register-failed")); else await n.rm(i, {
      force: !0
    }).catch(() => {});
  } catch (a) {
    let s = zr(a);
    if (m("deep_link_register", s ?? "register_failed"), t(`Failed to auto-register deep link protocol handler: ${a instanceof Error ? a.message : String(a)}`, {
      level: "warn"
    }), s === "EACCES" || s === "ENOSPC") if (z() && e !== void 0) await e.write(Fe.state("deep-link-register-failed"), "", {
      publishDiscipline: "inPlace"
    }); else await n.writeFile(i, "").catch(() => {});
  }
}

export { eBo };
