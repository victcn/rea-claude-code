// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Swn } from "./chunk-tn3fryxm.js";

import { A2, xJ } from "./chunk-cfdp5rw5.js";

import "./chunk-8wsjrq34.js";

import { we } from "./chunk-m8ez8fhk.js";

var o = we(Swn()), p = we(A2()), r = we(xJ());

class t extends o.OTLPMetricExporterBase {
  constructor(e) {
    super(r.createOtlpHttpExportDelegate(r.convertLegacyHttpOptions(e ?? {}, "METRICS", "v1/metrics", {
      "Content-Type": "application/x-protobuf"
    }), p.ProtobufMetricsSerializer), e);
  }
}

export { t as OTLPMetricExporter };
