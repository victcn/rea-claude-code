// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E, jt } from "./chunk-b0z4bv3v.js";

import { Cs } from "./chunk-ddr690nj.js";

import { ke, ea, p6 } from "./chunk-3pqddg8f.js";

import { _, fEe } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { ge } from "./chunk-07cck4g7.js";

import { nEe, ot } from "./chunk-fvcjfcfm.js";

import { rT, MFn, nu } from "./chunk-4v78v8fd.js";

import { stat as c } from "fs/promises";

import { dirname as l, resolve as a } from "path";

async function eye(t, r) {
  if (!t) return {
    resultType: "emptyPath"
  };
  if (ea() === null) return {
    resultType: "invalidPath",
    directoryPath: t,
    containsNullByte: !1
  };
  let e;
  try {
    e = a(ot(t));
  } catch (o) {
    let i = o instanceof nEe;
    if (!i) d(Error("validateDirectoryForWorkspace: expandPath threw"));
    return {
      resultType: "invalidPath",
      directoryPath: t,
      containsNullByte: i
    };
  }
  if (Cs(t) || await fEe(e, p6())) return {
    resultType: "networkPath",
    directoryPath: t,
    absolutePath: e
  };
  try {
    if (!(await c(e)).isDirectory()) return {
      resultType: "notADirectory",
      directoryPath: t,
      absolutePath: e
    };
  } catch (o) {
    if (!jt(o)) d(Object.assign(Error("validateDirectoryForWorkspace: unexpected stat errno"), {
      code: E(o)
    }));
    return {
      resultType: "pathNotFound",
      directoryPath: t,
      absolutePath: e
    };
  }
  let n = r.blockReadsOutsideWorkingDirectories ? MFn(r) : rT(r), s = ke();
  for (let o of n) if (nu(e, o, {
    caseFold: !1
  })) return {
    resultType: "alreadyInWorkingDirectory",
    directoryPath: t,
    absolutePath: e,
    workingDir: o,
    isExactMatch: a(o) === e,
    isOriginalCwd: o === s
  };
  return {
    resultType: "success",
    absolutePath: e
  };
}

function tye(t) {
  switch (t.resultType) {
   case "emptyPath":
    return "Please provide a directory path.";

   case "invalidPath":
    {
      let r = ge.bold(_(t.directoryPath));
      return t.containsNullByte ? `Path ${r} contains a null character, so it can't be used as a working directory. Remove the null character from the path or from the settings entry that lists it.` : `Path ${r} couldn't be resolved, so it can't be used as a working directory. Check the path or the settings entry that lists it.`;
    }

   case "pathNotFound":
    return `Path ${ge.bold(t.absolutePath)} was not found.`;

   case "networkPath":
    return `${ge.bold(t.directoryPath)} is a network path, which cannot be added as a working directory. On Windows, map the share to a drive letter and pass it at launch with --add-dir (a drive letter added mid-session does not yet carry remote-read trust).`;

   case "notADirectory":
    {
      let r = l(t.absolutePath);
      return `${ge.bold(t.directoryPath)} is not a directory. Did you mean to add the parent directory ${ge.bold(r)}?`;
    }

   case "alreadyInWorkingDirectory":
    {
      let r = ge.bold(t.directoryPath);
      if (t.isExactMatch) return t.isOriginalCwd ? `${r} is already the current working directory.` : `${r} is already added as a working directory.`;
      let e = t.isOriginalCwd ? "the current working directory" : "the additional working directory";
      return `${r} is already accessible within ${e} ${ge.bold(t.workingDir)}.`;
    }

   case "success":
    return `Added ${ge.bold(t.absolutePath)} as a working directory.`;
  }
}

export { eye, tye };
