// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { e4, A2, xJ } from "./chunk-cfdp5rw5.js";

import { ZHe } from "./chunk-8wsjrq34.js";

import { ja, qf } from "./chunk-s2t7g8m9.js";

import { C } from "./chunk-m8ez8fhk.js";

var l = C(function(y) {
  Object.defineProperty(y, "__esModule", {
    value: !0
  });
  y.AggregationTemporalityPreference = void 0;
  var I;
  (function(r) {
    r[r.DELTA = 0] = "DELTA", r[r.CUMULATIVE = 1] = "CUMULATIVE", r[r.LOWMEMORY = 2] = "LOWMEMORY";
  })(I = y.AggregationTemporalityPreference || (y.AggregationTemporalityPreference = {}));
});

var s = C(function(M) {
  Object.defineProperty(M, "__esModule", {
    value: !0
  });
  M.OTLPMetricExporterBase = M.LowMemoryTemporalitySelector = M.DeltaTemporalitySelector = M.CumulativeTemporalitySelector = void 0;
  var O = qf(), e = ZHe(), o = l(), g = e4(), _ = ja(), b = () => e.AggregationTemporality.CUMULATIVE;
  M.CumulativeTemporalitySelector = b;
  var B = r => {
    switch (r) {
     case e.InstrumentType.COUNTER:
     case e.InstrumentType.OBSERVABLE_COUNTER:
     case e.InstrumentType.GAUGE:
     case e.InstrumentType.HISTOGRAM:
     case e.InstrumentType.OBSERVABLE_GAUGE:
      return e.AggregationTemporality.DELTA;

     case e.InstrumentType.UP_DOWN_COUNTER:
     case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      return e.AggregationTemporality.CUMULATIVE;
    }
  };
  M.DeltaTemporalitySelector = B;
  var D = r => {
    switch (r) {
     case e.InstrumentType.COUNTER:
     case e.InstrumentType.HISTOGRAM:
      return e.AggregationTemporality.DELTA;

     case e.InstrumentType.GAUGE:
     case e.InstrumentType.UP_DOWN_COUNTER:
     case e.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
     case e.InstrumentType.OBSERVABLE_COUNTER:
     case e.InstrumentType.OBSERVABLE_GAUGE:
      return e.AggregationTemporality.CUMULATIVE;
    }
  };
  M.LowMemoryTemporalitySelector = D;
  function j() {
    let r = (O.getStringFromEnv("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
    if (r === "cumulative") return M.CumulativeTemporalitySelector;
    if (r === "delta") return M.DeltaTemporalitySelector;
    if (r === "lowmemory") return M.LowMemoryTemporalitySelector;
    return _.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${r}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`), 
    M.CumulativeTemporalitySelector;
  }
  function N(r) {
    if (r != null) {
      if (r === o.AggregationTemporalityPreference.DELTA) return M.DeltaTemporalitySelector; else if (r === o.AggregationTemporalityPreference.LOWMEMORY) return M.LowMemoryTemporalitySelector;
      return M.CumulativeTemporalitySelector;
    }
    return j();
  }
  var w = Object.freeze({
    type: e.AggregationType.DEFAULT
  });
  function q(r) {
    return r?.aggregationPreference ?? (() => w);
  }
  class L extends g.OTLPExporterBase {
    _aggregationTemporalitySelector;
    _aggregationSelector;
    constructor(r, E) {
      super(r);
      this._aggregationSelector = q(E), this._aggregationTemporalitySelector = N(E?.temporalityPreference);
    }
    selectAggregation(r) {
      return this._aggregationSelector(r);
    }
    selectAggregationTemporality(r) {
      return this._aggregationTemporalitySelector(r);
    }
  }
  M.OTLPMetricExporterBase = L;
});

var v = C(function(d) {
  Object.defineProperty(d, "__esModule", {
    value: !0
  });
  d.OTLPMetricExporter = void 0;
  var S = s(), x = A2(), n = xJ();
  class A extends S.OTLPMetricExporterBase {
    constructor(r) {
      super(n.createOtlpHttpExportDelegate(n.convertLegacyHttpOptions(r ?? {}, "METRICS", "v1/metrics", {
        "Content-Type": "application/json"
      }), x.JsonMetricsSerializer), r);
    }
  }
  d.OTLPMetricExporter = A;
});

var R = C(function(T) {
  Object.defineProperty(T, "__esModule", {
    value: !0
  });
  T.OTLPMetricExporter = void 0;
  var G = v();
  Object.defineProperty(T, "OTLPMetricExporter", {
    enumerable: !0,
    get: function() {
      return G.OTLPMetricExporter;
    }
  });
});

var U = C(function(m) {
  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  m.OTLPMetricExporter = void 0;
  var h = R();
  Object.defineProperty(m, "OTLPMetricExporter", {
    enumerable: !0,
    get: function() {
      return h.OTLPMetricExporter;
    }
  });
});

var Swn = C(function(t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.OTLPMetricExporterBase = t.LowMemoryTemporalitySelector = t.DeltaTemporalitySelector = t.CumulativeTemporalitySelector = t.AggregationTemporalityPreference = t.OTLPMetricExporter = void 0;
  var F = U();
  Object.defineProperty(t, "OTLPMetricExporter", {
    enumerable: !0,
    get: function() {
      return F.OTLPMetricExporter;
    }
  });
  var Y = l();
  Object.defineProperty(t, "AggregationTemporalityPreference", {
    enumerable: !0,
    get: function() {
      return Y.AggregationTemporalityPreference;
    }
  });
  var a = s();
  Object.defineProperty(t, "CumulativeTemporalitySelector", {
    enumerable: !0,
    get: function() {
      return a.CumulativeTemporalitySelector;
    }
  });
  Object.defineProperty(t, "DeltaTemporalitySelector", {
    enumerable: !0,
    get: function() {
      return a.DeltaTemporalitySelector;
    }
  });
  Object.defineProperty(t, "LowMemoryTemporalitySelector", {
    enumerable: !0,
    get: function() {
      return a.LowMemoryTemporalitySelector;
    }
  });
  Object.defineProperty(t, "OTLPMetricExporterBase", {
    enumerable: !0,
    get: function() {
      return a.OTLPMetricExporterBase;
    }
  });
});

export { Swn };
