// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { g2t } from "./chunk-ebq5zcg9.js";

import { e4, A2 } from "./chunk-cfdp5rw5.js";

import "./chunk-8wsjrq34.js";

import { C } from "./chunk-m8ez8fhk.js";

var s = C(function(p) {
  Object.defineProperty(p, "__esModule", {
    value: !0
  });
  p.OTLPTraceExporter = void 0;
  var e = g2t(), t = A2(), o = e4();
  class c extends o.OTLPExporterBase {
    constructor(u = {}) {
      super(e.createOtlpGrpcExportDelegate(e.convertLegacyOtlpGrpcOptions(u, "TRACES"), t.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"));
    }
  }
  p.OTLPTraceExporter = c;
});

var l = C(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  r.OTLPTraceExporter = void 0;
  var i = s();
  Object.defineProperty(r, "OTLPTraceExporter", {
    enumerable: !0,
    get: function() {
      return i.OTLPTraceExporter;
    }
  });
});

export default l();
