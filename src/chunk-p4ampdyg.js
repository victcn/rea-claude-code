// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ZHe } from "./chunk-8wsjrq34.js";

import { ja, $Be, qf } from "./chunk-s2t7g8m9.js";

import { C, Ne } from "./chunk-m8ez8fhk.js";

var E = C(function(w) {
  Object.defineProperty(w, "__esModule", {
    value: !0
  });
  w.PrometheusSerializer = void 0;
  var I = ja(), o = ZHe(), P = qf(), g = $Be(), D = "otel.scope.schema_url";
  function S(e) {
    return e.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
  }
  function y(e = "") {
    if (typeof e !== "string") e = JSON.stringify(e);
    return S(e).replace(/"/g, '\\"');
  }
  var H = /[^a-z0-9_]/gi, F = /_{2,}/g;
  function O(e) {
    return e.replace(H, "_").replace(F, "_");
  }
  function j(e, t) {
    if (!e.endsWith("_total") && t.dataPointType === o.DataPointType.SUM && t.isMonotonic) e = e + "_total";
    return e;
  }
  function k(e) {
    if (e === 1 / 0) return "+Inf"; else if (e === -1 / 0) return "-Inf"; else return `${e}`;
  }
  function G(e) {
    switch (e.dataPointType) {
     case o.DataPointType.SUM:
      if (e.isMonotonic) return "counter";
      return "gauge";

     case o.DataPointType.GAUGE:
      return "gauge";

     case o.DataPointType.HISTOGRAM:
      return "histogram";

     default:
      return "untyped";
    }
  }
  function m(e, t, r, i, s) {
    let n = !1, a = "";
    for (let [u, _] of Object.entries(t)) {
      let c = O(u);
      n = !0, a += `${a.length > 0 ? "," : ""}${c}="${y(_)}"`;
    }
    if (s) for (let [u, _] of Object.entries(s)) {
      let c = O(u);
      n = !0, a += `${a.length > 0 ? "," : ""}${c}="${y(_)}"`;
    }
    if (n) e += `{${a}}`;
    return `${e} ${k(r)}${i !== void 0 ? " " + String(i) : ""}\n`;
  }
  var V = "# no registered metrics";
  class R {
    _prefix;
    _appendTimestamp;
    _additionalAttributes;
    _withResourceConstantLabels;
    _withoutScopeInfo;
    _withoutTargetInfo;
    constructor(e, t = !1, r, i, s) {
      if (e) this._prefix = e + "_";
      this._appendTimestamp = t, this._withResourceConstantLabels = r, this._withoutScopeInfo = !!s, 
      this._withoutTargetInfo = !!i;
    }
    serialize(e) {
      let t = "";
      this._additionalAttributes = this._filterResourceConstantLabels(e.resource.attributes, this._withResourceConstantLabels);
      for (let r of e.scopeMetrics) t += this._serializeScopeMetrics(r);
      if (t === "") t += V;
      return this._serializeResource(e.resource) + t;
    }
    _filterResourceConstantLabels(e, t) {
      if (t) {
        let r = {};
        for (let [i, s] of Object.entries(e)) if (i.match(t)) r[i] = s;
        return r;
      }
      return;
    }
    _serializeScopeMetrics(e) {
      let t = "";
      for (let r of e.metrics) t += this._serializeMetricData(r, e.scope) + `\n`;
      return t;
    }
    _serializeMetricData(e, t) {
      let r = O(S(e.descriptor.name));
      if (this._prefix) r = `${this._prefix}${r}`;
      let i = e.dataPointType;
      r = j(r, e);
      let s = `# HELP ${r} ${S(e.descriptor.description || "description missing")}`, n = e.descriptor.unit ? `\n# UNIT ${r} ${S(e.descriptor.unit)}` : "", a = `# TYPE ${r} ${G(e)}`, u;
      if (this._withoutScopeInfo) u = this._additionalAttributes; else {
        let c = {
          [g.ATTR_OTEL_SCOPE_NAME]: t.name
        };
        if (t.schemaUrl) c[D] = t.schemaUrl;
        if (t.version) c[g.ATTR_OTEL_SCOPE_VERSION] = t.version;
        u = Object.assign(c, this._additionalAttributes);
      }
      let _ = "";
      switch (i) {
       case o.DataPointType.SUM:
       case o.DataPointType.GAUGE:
        {
          _ = e.dataPoints.map(c => this._serializeSingularDataPoint(r, e, c, u)).join("");
          break;
        }

       case o.DataPointType.HISTOGRAM:
        {
          _ = e.dataPoints.map(c => this._serializeHistogramDataPoint(r, e, c, u)).join("");
          break;
        }

       default:
        I.diag.error(`Unrecognizable DataPointType: ${i} for metric "${r}"`);
      }
      return `${s}${n}\n${a}\n${_}`.trim();
    }
    _serializeSingularDataPoint(e, t, r, i) {
      let s = "", {value: n, attributes: a} = r, u = P.hrTimeToMilliseconds(r.endTime);
      return s += m(e, a, n, this._appendTimestamp ? u : void 0, i), s;
    }
    _serializeHistogramDataPoint(e, t, r, i) {
      let s = "", {attributes: n, value: a} = r, u = P.hrTimeToMilliseconds(r.endTime);
      for (let f of [ "count", "sum" ]) {
        let T = a[f];
        if (T != null) s += m(e + "_" + f, n, T, this._appendTimestamp ? u : void 0, i);
      }
      let _ = 0, c = a.buckets.counts.entries(), v = !1;
      for (let [f, T] of c) {
        _ += T;
        let d = a.buckets.boundaries[f];
        if (d === void 0 && v) break;
        if (d === 1 / 0) v = !0;
        s += m(e + "_bucket", n, _, this._appendTimestamp ? u : void 0, Object.assign({}, i, {
          le: d === void 0 || d === 1 / 0 ? "+Inf" : String(d)
        }));
      }
      return s;
    }
    _serializeResource(e) {
      if (this._withoutTargetInfo === !0) return "";
      let t = "target_info", r = `# HELP ${t} Target metadata`, i = `# TYPE ${t} gauge`, s = m(t, e.attributes, 1).trim();
      return `${r}\n${i}\n${s}\n`;
    }
  }
  w.PrometheusSerializer = R;
});

var q = C(function(x) {
  Object.defineProperty(x, "__esModule", {
    value: !0
  });
  x.PrometheusExporter = void 0;
  var p = ja(), U = qf(), h = ZHe(), L = Ne("http"), M = E(), z = Ne("url");
  class l extends h.MetricReader {
    static DEFAULT_OPTIONS={
      host: void 0,
      port: 9464,
      endpoint: "/metrics",
      prefix: "",
      appendTimestamp: !1,
      withResourceConstantLabels: void 0,
      withoutScopeInfo: !1,
      withoutTargetInfo: !1
    };
    _host;
    _port;
    _baseUrl;
    _endpoint;
    _server;
    _prefix;
    _appendTimestamp;
    _serializer;
    _startServerPromise;
    constructor(e = {}, t = () => {}) {
      super({
        aggregationSelector: n => ({
          type: h.AggregationType.DEFAULT
        }),
        aggregationTemporalitySelector: n => h.AggregationTemporality.CUMULATIVE,
        metricProducers: e.metricProducers
      });
      this._host = e.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || l.DEFAULT_OPTIONS.host, 
      this._port = e.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || l.DEFAULT_OPTIONS.port, 
      this._prefix = e.prefix || l.DEFAULT_OPTIONS.prefix, this._appendTimestamp = typeof e.appendTimestamp === "boolean" ? e.appendTimestamp : l.DEFAULT_OPTIONS.appendTimestamp;
      let r = e.withResourceConstantLabels || l.DEFAULT_OPTIONS.withResourceConstantLabels, i = e.withoutScopeInfo || l.DEFAULT_OPTIONS.withoutScopeInfo, s = e.withoutTargetInfo || l.DEFAULT_OPTIONS.withoutTargetInfo;
      if (this._server = L.createServer(this._requestHandler).unref(), this._serializer = new M.PrometheusSerializer(this._prefix, this._appendTimestamp, r, s, i), 
      this._baseUrl = `http://${this._host}:${this._port}/`, this._endpoint = (e.endpoint || l.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1"), 
      e.preventServerStart !== !0) this.startServer().then(t, n => {
        p.diag.error(n), t(n);
      }); else if (t) queueMicrotask(t);
    }
    async onForceFlush() {}
    onShutdown() {
      return this.stopServer();
    }
    stopServer() {
      if (!this._server) return p.diag.debug("Prometheus stopServer() was called but server was never started."), 
      Promise.resolve(); else return new Promise(e => {
        this._server.close(t => {
          if (!t) p.diag.debug("Prometheus exporter was stopped"); else if (t.code !== "ERR_SERVER_NOT_RUNNING") U.globalErrorHandler(t);
          e();
        });
      });
    }
    startServer() {
      return this._startServerPromise ??= new Promise((e, t) => {
        this._server.once("error", t), this._server.listen({
          port: this._port,
          host: this._host
        }, () => {
          p.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`), 
          e();
        });
      }), this._startServerPromise;
    }
    getMetricsRequestHandler(e, t) {
      this._exportMetrics(t);
    }
    _requestHandler=(e, t) => {
      let r;
      try {
        if (e.url != null) r = new z.URL(e.url, this._baseUrl).pathname;
      } catch {
        t.statusCode = 400, t.end("Bad Request");
        return;
      }
      if (r === this._endpoint) this._exportMetrics(t); else this._notFound(t);
    };
    _exportMetrics=e => {
      e.statusCode = 200, e.setHeader("content-type", "text/plain"), this.collect().then(t => {
        let {resourceMetrics: r, errors: i} = t;
        if (i.length) p.diag.error("PrometheusExporter: metrics collection errors", ...i);
        e.end(this._serializer.serialize(r));
      }, t => {
        e.end(`# failed to export metrics: ${t}`);
      });
    };
    _notFound=e => {
      e.statusCode = 404, e.end();
    };
  }
  x.PrometheusExporter = l;
});

var J = C(function(b) {
  Object.defineProperty(b, "__esModule", {
    value: !0
  });
  b.PrometheusSerializer = b.PrometheusExporter = void 0;
  var B = q();
  Object.defineProperty(b, "PrometheusExporter", {
    enumerable: !0,
    get: function() {
      return B.PrometheusExporter;
    }
  });
  var X = E();
  Object.defineProperty(b, "PrometheusSerializer", {
    enumerable: !0,
    get: function() {
      return X.PrometheusSerializer;
    }
  });
});

export default J();
