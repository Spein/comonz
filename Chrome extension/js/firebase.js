! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).firebase = e() }(this, function() { "use strict";! function(t) { if (!t.fetch) { var e = "URLSearchParams" in t,
                n = "Symbol" in t && "iterator" in Symbol,
                a = "FileReader" in t && "Blob" in t && function() { try { return new Blob, !0 } catch (t) { return !1 } }(),
                r = "FormData" in t,
                i = "ArrayBuffer" in t; if (i) var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                s = function(t) { return t && DataView.prototype.isPrototypeOf(t) },
                u = ArrayBuffer.isView || function(t) { return t && -1 < o.indexOf(Object.prototype.toString.call(t)) };
            d.prototype.append = function(t, e) { t = l(t), e = f(e); var n = this.map[t];
                this.map[t] = n ? n + "," + e : e }, d.prototype.delete = function(t) { delete this.map[l(t)] }, d.prototype.get = function(t) { return t = l(t), this.has(t) ? this.map[t] : null }, d.prototype.has = function(t) { return this.map.hasOwnProperty(l(t)) }, d.prototype.set = function(t, e) { this.map[l(t)] = f(e) }, d.prototype.forEach = function(t, e) { for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this) }, d.prototype.keys = function() { var n = []; return this.forEach(function(t, e) { n.push(e) }), p(n) }, d.prototype.values = function() { var e = []; return this.forEach(function(t) { e.push(t) }), p(e) }, d.prototype.entries = function() { var n = []; return this.forEach(function(t, e) { n.push([e, t]) }), p(n) }, n && (d.prototype[Symbol.iterator] = d.prototype.entries); var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            _.prototype.clone = function() { return new _(this, { body: this._bodyInit }) }, b.call(_.prototype), b.call(E.prototype), E.prototype.clone = function() { return new E(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new d(this.headers), url: this.url }) }, E.error = function() { var t = new E(null, { status: 0, statusText: "" }); return t.type = "error", t }; var h = [301, 302, 303, 307, 308];
            E.redirect = function(t, e) { if (-1 === h.indexOf(e)) throw new RangeError("Invalid status code"); return new E(null, { status: e, headers: { location: t } }) }, t.Headers = d, t.Request = _, t.Response = E, t.fetch = function(n, i) { return new Promise(function(r, t) { var e = new _(n, i),
                        o = new XMLHttpRequest;
                    o.onload = function() { var t, i, e = { status: o.status, statusText: o.statusText, headers: (t = o.getAllResponseHeaders() || "", i = new d, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) { var e = t.split(":"),
                                    n = e.shift().trim(); if (n) { var r = e.join(":").trim();
                                    i.append(n, r) } }), i) };
                        e.url = "responseURL" in o ? o.responseURL : e.headers.get("X-Request-URL"); var n = "response" in o ? o.response : o.responseText;
                        r(new E(n, e)) }, o.onerror = function() { t(new TypeError("Network request failed")) }, o.ontimeout = function() { t(new TypeError("Network request failed")) }, o.open(e.method, e.url, !0), "include" === e.credentials ? o.withCredentials = !0 : "omit" === e.credentials && (o.withCredentials = !1), "responseType" in o && a && (o.responseType = "blob"), e.headers.forEach(function(t, e) { o.setRequestHeader(e, t) }), o.send(void 0 === e._bodyInit ? null : e._bodyInit) }) }, t.fetch.polyfill = !0 }

        function l(t) { if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name"); return t.toLowerCase() }

        function f(t) { return "string" != typeof t && (t = String(t)), t }

        function p(e) { var t = { next: function() { var t = e.shift(); return { done: void 0 === t, value: t } } }; return n && (t[Symbol.iterator] = function() { return t }), t }

        function d(e) { this.map = {}, e instanceof d ? e.forEach(function(t, e) { this.append(e, t) }, this) : Array.isArray(e) ? e.forEach(function(t) { this.append(t[0], t[1]) }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) { this.append(t, e[t]) }, this) }

        function y(t) { if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0 }

        function m(n) { return new Promise(function(t, e) { n.onload = function() { t(n.result) }, n.onerror = function() { e(n.error) } }) }

        function g(t) { var e = new FileReader,
                n = m(e); return e.readAsArrayBuffer(t), n }

        function v(t) { if (t.slice) return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer }

        function b() { return this.bodyUsed = !1, this._initBody = function(t) { if (this._bodyInit = t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (a && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (r && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (i && a && s(t)) this._bodyArrayBuffer = v(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else { if (!i || !ArrayBuffer.prototype.isPrototypeOf(t) && !u(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = v(t) } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, a && (this.blob = function() { var t = y(this); if (t) return t; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? y(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g) }), this.text = function() { var t, e, n, r = y(this); if (r) return r; if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = m(e), e.readAsText(t), n; if (this._bodyArrayBuffer) return Promise.resolve(function(t) { for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, r && (this.formData = function() { return this.text().then(w) }), this.json = function() { return this.text().then(JSON.parse) }, this }

        function _(t, e) { var n, r, i = (e = e || {}).body; if (t instanceof _) { if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new d(t.headers)), this.method = t.method, this.mode = t.mode, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0) } else this.url = String(t); if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new d(e.headers)), this.method = (n = e.method || this.method || "GET", r = n.toUpperCase(), -1 < c.indexOf(r) ? r : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i) }

        function w(t) { var i = new FormData; return t.trim().split("&").forEach(function(t) { if (t) { var e = t.split("="),
                        n = e.shift().replace(/\+/g, " "),
                        r = e.join("=").replace(/\+/g, " ");
                    i.append(decodeURIComponent(n), decodeURIComponent(r)) } }), i }

        function E(t, e) { e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new d(e.headers), this.url = e.url || "", this._initBody(t) } }("undefined" != typeof self ? self : void 0); var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) { return t(e = { exports: {} }, e.exports), e.exports } var n = setTimeout;

    function r() {}

    function o(t) { if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(t, this) }

    function i(n, r) { for (; 3 === n._state;) n = n._value;
        0 !== n._state ? (n._handled = !0, o._immediateFn(function() { var t = 1 === n._state ? r.onFulfilled : r.onRejected; if (null !== t) { var e; try { e = t(n._value) } catch (t) { return void s(r.promise, t) }
                a(r.promise, e) } else(1 === n._state ? a : s)(r.promise, n._value) })) : n._deferreds.push(r) }

    function a(e, t) { try { if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" == typeof t || "function" == typeof t)) { var n = t.then; if (t instanceof o) return e._state = 3, e._value = t, void u(e); if ("function" == typeof n) return void h((r = n, i = t, function() { r.apply(i, arguments) }), e) }
            e._state = 1, e._value = t, u(e) } catch (t) { s(e, t) } var r, i }

    function s(t, e) { t._state = 2, t._value = e, u(t) }

    function u(t) { 2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() { t._handled || o._unhandledRejectionFn(t._value) }); for (var e = 0, n = t._deferreds.length; e < n; e++) i(t, t._deferreds[e]);
        t._deferreds = null }

    function c(t, e, n) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n }

    function h(t, e) { var n = !1; try { t(function(t) { n || (n = !0, a(e, t)) }, function(t) { n || (n = !0, s(e, t)) }) } catch (t) { if (n) return;
            n = !0, s(e, t) } }
    o.prototype.catch = function(t) { return this.then(null, t) }, o.prototype.then = function(t, e) { var n = new this.constructor(r); return i(this, new c(t, e, n)), n }, o.prototype.finally = function(e) { var n = this.constructor; return this.then(function(t) { return n.resolve(e()).then(function() { return t }) }, function(t) { return n.resolve(e()).then(function() { return n.reject(t) }) }) }, o.all = function(e) { return new o(function(r, i) { if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array"); var o = Array.prototype.slice.call(e); if (0 === o.length) return r([]); var a = o.length;

            function s(e, t) { try { if (t && ("object" == typeof t || "function" == typeof t)) { var n = t.then; if ("function" == typeof n) return void n.call(t, function(t) { s(e, t) }, i) }
                    o[e] = t, 0 == --a && r(o) } catch (t) { i(t) } } for (var t = 0; t < o.length; t++) s(t, o[t]) }) }, o.resolve = function(e) { return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) { t(e) }) }, o.reject = function(n) { return new o(function(t, e) { e(n) }) }, o.race = function(i) { return new o(function(t, e) { for (var n = 0, r = i.length; n < r; n++) i[n].then(t, e) }) }, o._immediateFn = "function" == typeof setImmediate && function(t) { setImmediate(t) } || function(t) { n(t, 0) }, o._unhandledRejectionFn = function(t) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t) }; var l = function() { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if (void 0 !== t) return t; throw new Error("unable to locate global object") }();
    l.Promise || (l.Promise = o); var y = e(function(t) { var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = e) }),
        m = e(function(t) { var e = t.exports = { version: "2.5.5" }; "number" == typeof __e && (__e = e) }),
        f = (m.version, function(t) { return "object" == typeof t ? null !== t : "function" == typeof t }),
        p = function(t) { if (!f(t)) throw TypeError(t + " is not an object!"); return t },
        d = function(t) { try { return !!t() } catch (t) { return !0 } },
        g = !d(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }),
        v = y.document,
        b = f(v) && f(v.createElement),
        _ = function(t) { return b ? v.createElement(t) : {} },
        w = !g && !d(function() { return 7 != Object.defineProperty(_("div"), "a", { get: function() { return 7 } }).a }),
        E = function(t, e) { if (!f(t)) return t; var n, r; if (e && "function" == typeof(n = t.toString) && !f(r = n.call(t))) return r; if ("function" == typeof(n = t.valueOf) && !f(r = n.call(t))) return r; if (!e && "function" == typeof(n = t.toString) && !f(r = n.call(t))) return r; throw TypeError("Can't convert object to primitive value") },
        T = Object.defineProperty,
        S = { f: g ? Object.defineProperty : function(t, e, n) { if (p(t), e = E(e, !0), p(n), w) try { return T(t, e, n) } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (t[e] = n.value), t } },
        C = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } },
        I = g ? function(t, e, n) { return S.f(t, e, C(1, n)) } : function(t, e, n) { return t[e] = n, t },
        N = {}.hasOwnProperty,
        D = function(t, e) { return N.call(t, e) },
        A = 0,
        k = Math.random(),
        R = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++A + k).toString(36)) },
        O = e(function(t) { var o = R("src"),
                e = "toString",
                n = Function[e],
                a = ("" + n).split(e);
            m.inspectSource = function(t) { return n.call(t) }, (t.exports = function(t, e, n, r) { var i = "function" == typeof n;
                i && (D(n, "name") || I(n, "name", e)), t[e] !== n && (i && (D(n, o) || I(n, o, t[e] ? "" + t[e] : a.join(String(e)))), t === y ? t[e] = n : r ? t[e] ? t[e] = n : I(t, e, n) : (delete t[e], I(t, e, n))) })(Function.prototype, e, function() { return "function" == typeof this && this[o] || n.call(this) }) }),
        P = function(r, i, t) { if (function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!") }(r), void 0 === i) return r; switch (t) {
                case 1:
                    return function(t) { return r.call(i, t) };
                case 2:
                    return function(t, e) { return r.call(i, t, e) };
                case 3:
                    return function(t, e, n) { return r.call(i, t, e, n) } } return function() { return r.apply(i, arguments) } },
        M = "prototype",
        L = function(t, e, n) { var r, i, o, a, s = t & L.F,
                u = t & L.G,
                c = t & L.S,
                h = t & L.P,
                l = t & L.B,
                f = u ? y : c ? y[e] || (y[e] = {}) : (y[e] || {})[M],
                p = u ? m : m[e] || (m[e] = {}),
                d = p[M] || (p[M] = {}); for (r in u && (n = e), n) o = ((i = !s && f && void 0 !== f[r]) ? f : n)[r], a = l && i ? P(o, y) : h && "function" == typeof o ? P(Function.call, o) : o, f && O(f, r, o, t & L.U), p[r] != o && I(p, r, a), h && d[r] != o && (d[r] = o) };
    y.core = m, L.F = 1, L.G = 2, L.S = 4, L.P = 8, L.B = 16, L.W = 32, L.U = 64, L.R = 128; var x = L,
        F = {}.toString,
        U = function(t) { return F.call(t).slice(8, -1) },
        q = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == U(t) ? t.split("") : Object(t) },
        V = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t },
        B = function(t) { return Object(V(t)) },
        j = Math.ceil,
        W = Math.floor,
        K = function(t) { return isNaN(t = +t) ? 0 : (0 < t ? W : j)(t) },
        Q = Math.min,
        H = function(t) { return 0 < t ? Q(K(t), 9007199254740991) : 0 },
        z = Array.isArray || function(t) { return "Array" == U(t) },
        G = "__core-js_shared__",
        Y = y[G] || (y[G] = {}),
        X = function(t) { return Y[t] || (Y[t] = {}) },
        J = e(function(t) { var e = X("wks"),
                n = y.Symbol,
                r = "function" == typeof n;
            (t.exports = function(t) { return e[t] || (e[t] = r && n[t] || (r ? n : R)("Symbol." + t)) }).store = e }),
        $ = J("species"),
        Z = function(t, e) { return z(n = t) && ("function" != typeof(r = n.constructor) || r !== Array && !z(r.prototype) || (r = void 0), f(r) && null === (r = r[$]) && (r = void 0)), new(void 0 === r ? Array : r)(e); var n, r },
        tt = function(l, t) { var f = 1 == l,
                p = 2 == l,
                d = 3 == l,
                y = 4 == l,
                m = 6 == l,
                g = 5 == l || m,
                v = t || Z; return function(t, e, n) { for (var r, i, o = B(t), a = q(o), s = P(e, n, 3), u = H(a.length), c = 0, h = f ? v(t, u) : p ? v(t, 0) : void 0; c < u; c++)
                    if ((g || c in a) && (i = s(r = a[c], c, o), l))
                        if (f) h[c] = i;
                        else if (i) switch (l) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return c;
                    case 2:
                        h.push(r) } else if (y) return !1;
                return m ? -1 : d || y ? y : h } },
        et = J("unscopables"),
        nt = Array.prototype;
    null == nt[et] && I(nt, et, {}); var rt = function(t) { nt[et][t] = !0 },
        it = tt(5),
        ot = "find",
        at = !0;
    ot in [] && Array(1)[ot](function() { at = !1 }), x(x.P + x.F * at, "Array", { find: function(t) { return it(this, t, 1 < arguments.length ? arguments[1] : void 0) } }), rt(ot);
    m.Array.find; var st = tt(6),
        ut = "findIndex",
        ct = !0;
    ut in [] && Array(1)[ut](function() { ct = !1 }), x(x.P + x.F * ct, "Array", { findIndex: function(t) { return st(this, t, 1 < arguments.length ? arguments[1] : void 0) } }), rt(ut);
    m.Array.findIndex; var ht, lt = function(t) { return q(V(t)) },
        ft = Math.max,
        pt = Math.min,
        dt = X("keys"),
        yt = function(t) { return dt[t] || (dt[t] = R(t)) },
        mt = (ht = !1, function(t, e, n) { var r, i, o, a = lt(t),
                s = H(a.length),
                u = (i = s, (r = K(r = n)) < 0 ? ft(r + i, 0) : pt(r, i)); if (ht && e != e) { for (; u < s;)
                    if ((o = a[u++]) != o) return !0 } else
                for (; u < s; u++)
                    if ((ht || u in a) && a[u] === e) return ht || u || 0; return !ht && -1 }),
        gt = yt("IE_PROTO"),
        vt = function(t, e) { var n, r = lt(t),
                i = 0,
                o = []; for (n in r) n != gt && D(r, n) && o.push(n); for (; e.length > i;) D(r, n = e[i++]) && (~mt(o, n) || o.push(n)); return o },
        bt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        _t = Object.keys || function(t) { return vt(t, bt) },
        wt = { f: Object.getOwnPropertySymbols },
        Et = { f: {}.propertyIsEnumerable },
        Tt = Object.assign,
        St = !Tt || d(function() { var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst"; return t[n] = 7, r.split("").forEach(function(t) { e[t] = t }), 7 != Tt({}, t)[n] || Object.keys(Tt({}, e)).join("") != r }) ? function(t, e) { for (var n = B(t), r = arguments.length, i = 1, o = wt.f, a = Et.f; i < r;)
                for (var s, u = q(arguments[i++]), c = o ? _t(u).concat(o(u)) : _t(u), h = c.length, l = 0; l < h;) a.call(u, s = c[l++]) && (n[s] = u[s]); return n } : Tt;
    x(x.S + x.F, "Object", { assign: St });
    m.Object.assign; var Ct = J("match"),
        It = function(t, e, n) { if (f(r = e) && (void 0 !== (i = r[Ct]) ? i : "RegExp" == U(r))) throw TypeError("String#" + n + " doesn't accept regex!"); var r, i; return String(V(t)) },
        Nt = J("match"),
        Dt = "startsWith",
        At = "" [Dt];
    x(x.P + x.F * function(e) { var n = /./; try { "/./" [e](n) } catch (t) { try { return n[Nt] = !1, !"/./" [e](n) } catch (t) {} } return !0 }(Dt), "String", { startsWith: function(t) { var e = It(this, t, Dt),
                n = H(Math.min(1 < arguments.length ? arguments[1] : void 0, e.length)),
                r = String(t); return At ? At.call(e, r, n) : e.slice(n, n + r.length) === r } });
    m.String.startsWith;
    x(x.P, "String", { repeat: function(t) { var e = String(V(this)),
                n = "",
                r = K(t); if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative"); for (; 0 < r;
                (r >>>= 1) && (e += e)) 1 & r && (n += e); return n } });
    m.String.repeat; var kt = e(function(t) { var n = R("meta"),
                e = S.f,
                r = 0,
                i = Object.isExtensible || function() { return !0 },
                o = !d(function() { return i(Object.preventExtensions({})) }),
                a = function(t) { e(t, n, { value: { i: "O" + ++r, w: {} } }) },
                s = t.exports = { KEY: n, NEED: !1, fastKey: function(t, e) { if (!f(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!D(t, n)) { if (!i(t)) return "F"; if (!e) return "E";
                            a(t) } return t[n].i }, getWeak: function(t, e) { if (!D(t, n)) { if (!i(t)) return !0; if (!e) return !1;
                            a(t) } return t[n].w }, onFreeze: function(t) { return o && s.NEED && i(t) && !D(t, n) && a(t), t } } }),
        Rt = (kt.KEY, kt.NEED, kt.fastKey, kt.getWeak, kt.onFreeze, S.f),
        Ot = J("toStringTag"),
        Pt = function(t, e, n) { t && !D(t = n ? t : t.prototype, Ot) && Rt(t, Ot, { configurable: !0, value: e }) },
        Mt = { f: J },
        Lt = S.f,
        xt = function(t) { var e = m.Symbol || (m.Symbol = y.Symbol || {}); "_" == t.charAt(0) || t in e || Lt(e, t, { value: Mt.f(t) }) },
        Ft = g ? Object.defineProperties : function(t, e) { p(t); for (var n, r = _t(e), i = r.length, o = 0; o < i;) S.f(t, n = r[o++], e[n]); return t },
        Ut = y.document,
        qt = Ut && Ut.documentElement,
        Vt = yt("IE_PROTO"),
        Bt = function() {},
        jt = "prototype",
        Wt = function() { var t, e = _("iframe"),
                n = bt.length; for (e.style.display = "none", qt.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Wt = t.F; n--;) delete Wt[jt][bt[n]]; return Wt() },
        Kt = Object.create || function(t, e) { var n; return null !== t ? (Bt[jt] = p(t), n = new Bt, Bt[jt] = null, n[Vt] = t) : n = Wt(), void 0 === e ? n : Ft(n, e) },
        Qt = bt.concat("length", "prototype"),
        Ht = { f: Object.getOwnPropertyNames || function(t) { return vt(t, Qt) } },
        zt = Ht.f,
        Gt = {}.toString,
        Yt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Xt = { f: function(t) { return Yt && "[object Window]" == Gt.call(t) ? function(t) { try { return zt(t) } catch (t) { return Yt.slice() } }(t) : zt(lt(t)) } },
        Jt = Object.getOwnPropertyDescriptor,
        $t = { f: g ? Jt : function(t, e) { if (t = lt(t), e = E(e, !0), w) try { return Jt(t, e) } catch (t) {}
                if (D(t, e)) return C(!Et.f.call(t, e), t[e]) } },
        Zt = kt.KEY,
        te = $t.f,
        ee = S.f,
        ne = Xt.f,
        re = y.Symbol,
        ie = y.JSON,
        oe = ie && ie.stringify,
        ae = "prototype",
        se = J("_hidden"),
        ue = J("toPrimitive"),
        ce = {}.propertyIsEnumerable,
        he = X("symbol-registry"),
        le = X("symbols"),
        fe = X("op-symbols"),
        pe = Object[ae],
        de = "function" == typeof re,
        ye = y.QObject,
        me = !ye || !ye[ae] || !ye[ae].findChild,
        ge = g && d(function() { return 7 != Kt(ee({}, "a", { get: function() { return ee(this, "a", { value: 7 }).a } })).a }) ? function(t, e, n) { var r = te(pe, e);
            r && delete pe[e], ee(t, e, n), r && t !== pe && ee(pe, e, r) } : ee,
        ve = function(t) { var e = le[t] = Kt(re[ae]); return e._k = t, e },
        be = de && "symbol" == typeof re.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return t instanceof re },
        _e = function(t, e, n) { return t === pe && _e(fe, e, n), p(t), e = E(e, !0), p(n), D(le, e) ? (n.enumerable ? (D(t, se) && t[se][e] && (t[se][e] = !1), n = Kt(n, { enumerable: C(0, !1) })) : (D(t, se) || ee(t, se, C(1, {})), t[se][e] = !0), ge(t, e, n)) : ee(t, e, n) },
        we = function(t, e) { p(t); for (var n, r = function(t) { var e = _t(t),
                        n = wt.f; if (n)
                        for (var r, i = n(t), o = Et.f, a = 0; i.length > a;) o.call(t, r = i[a++]) && e.push(r); return e }(e = lt(e)), i = 0, o = r.length; i < o;) _e(t, n = r[i++], e[n]); return t },
        Ee = function(t) { var e = ce.call(this, t = E(t, !0)); return !(this === pe && D(le, t) && !D(fe, t)) && (!(e || !D(this, t) || !D(le, t) || D(this, se) && this[se][t]) || e) },
        Te = function(t, e) { if (t = lt(t), e = E(e, !0), t !== pe || !D(le, e) || D(fe, e)) { var n = te(t, e); return !n || !D(le, e) || D(t, se) && t[se][e] || (n.enumerable = !0), n } },
        Se = function(t) { for (var e, n = ne(lt(t)), r = [], i = 0; n.length > i;) D(le, e = n[i++]) || e == se || e == Zt || r.push(e); return r },
        Ce = function(t) { for (var e, n = t === pe, r = ne(n ? fe : lt(t)), i = [], o = 0; r.length > o;) !D(le, e = r[o++]) || n && !D(pe, e) || i.push(le[e]); return i };
    de || (O((re = function() { if (this instanceof re) throw TypeError("Symbol is not a constructor!"); var e = R(0 < arguments.length ? arguments[0] : void 0),
            n = function(t) { this === pe && n.call(fe, t), D(this, se) && D(this[se], e) && (this[se][e] = !1), ge(this, e, C(1, t)) }; return g && me && ge(pe, e, { configurable: !0, set: n }), ve(e) })[ae], "toString", function() { return this._k }), $t.f = Te, S.f = _e, Ht.f = Xt.f = Se, Et.f = Ee, wt.f = Ce, g && O(pe, "propertyIsEnumerable", Ee, !0), Mt.f = function(t) { return ve(J(t)) }), x(x.G + x.W + x.F * !de, { Symbol: re }); for (var Ie = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Ne = 0; Ie.length > Ne;) J(Ie[Ne++]); for (var De = _t(J.store), Ae = 0; De.length > Ae;) xt(De[Ae++]);
    x(x.S + x.F * !de, "Symbol", { for: function(t) { return D(he, t += "") ? he[t] : he[t] = re(t) }, keyFor: function(t) { if (!be(t)) throw TypeError(t + " is not a symbol!"); for (var e in he)
                if (he[e] === t) return e }, useSetter: function() { me = !0 }, useSimple: function() { me = !1 } }), x(x.S + x.F * !de, "Object", { create: function(t, e) { return void 0 === e ? Kt(t) : we(Kt(t), e) }, defineProperty: _e, defineProperties: we, getOwnPropertyDescriptor: Te, getOwnPropertyNames: Se, getOwnPropertySymbols: Ce }), ie && x(x.S + x.F * (!de || d(function() { var t = re(); return "[null]" != oe([t]) || "{}" != oe({ a: t }) || "{}" != oe(Object(t)) })), "JSON", { stringify: function(t) { for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]); if (n = e = r[1], (f(e) || void 0 !== t) && !be(t)) return z(e) || (e = function(t, e) { if ("function" == typeof n && (e = n.call(this, t, e)), !be(e)) return e }), r[1] = e, oe.apply(ie, r) } }), re[ae][ue] || I(re[ae], ue, re[ae].valueOf), Pt(re, "Symbol"), Pt(Math, "Math", !0), Pt(y.JSON, "JSON", !0); var ke = J("toStringTag"),
        Re = "Arguments" == U(function() { return arguments }()),
        Oe = {};
    Oe[J("toStringTag")] = "z", Oe + "" != "[object z]" && O(Object.prototype, "toString", function() { return "[object " + (void 0 === (t = this) ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), ke)) ? n : Re ? U(e) : "Object" == (r = U(e)) && "function" == typeof e.callee ? "Arguments" : r) + "]"; var t, e, n, r }, !0), xt("asyncIterator"), xt("observable");
    m.Symbol; var Pe = {},
        Me = {};
    I(Me, J("iterator"), function() { return this }); var Le, xe = yt("IE_PROTO"),
        Fe = Object.prototype,
        Ue = Object.getPrototypeOf || function(t) { return t = B(t), D(t, xe) ? t[xe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Fe : null },
        qe = J("iterator"),
        Ve = !([].keys && "next" in [].keys()),
        Be = "values",
        je = function() { return this },
        We = function(t, e, n, r, i, o, a) { var s, u, c;
            u = e, c = r, (s = n).prototype = Kt(Me, { next: C(1, c) }), Pt(s, u + " Iterator"); var h, l, f, p = function(t) { if (!Ve && t in g) return g[t]; switch (t) {
                        case "keys":
                        case Be:
                            return function() { return new n(this, t) } } return function() { return new n(this, t) } },
                d = e + " Iterator",
                y = i == Be,
                m = !1,
                g = t.prototype,
                v = g[qe] || g["@@iterator"] || i && g[i],
                b = v || p(i),
                _ = i ? y ? p("entries") : b : void 0,
                w = "Array" == e && g.entries || v; if (w && (f = Ue(w.call(new t))) !== Object.prototype && f.next && (Pt(f, d, !0), "function" != typeof f[qe] && I(f, qe, je)), y && v && v.name !== Be && (m = !0, b = function() { return v.call(this) }), (Ve || m || !g[qe]) && I(g, qe, b), Pe[e] = b, Pe[d] = je, i)
                if (h = { values: y ? b : p(Be), keys: o ? b : p("keys"), entries: _ }, a)
                    for (l in h) l in g || O(g, l, h[l]);
                else x(x.P + x.F * (Ve || m), e, h);
            return h },
        Ke = (Le = !0, function(t, e) { var n, r, i = String(V(t)),
                o = K(e),
                a = i.length; return o < 0 || a <= o ? Le ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? Le ? i.charAt(o) : n : Le ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536 });
    We(String, "String", function(t) { this._t = String(t), this._i = 0 }, function() { var t, e = this._t,
            n = this._i; return n >= e.length ? { value: void 0, done: !0 } : (t = Ke(e, n), this._i += t.length, { value: t, done: !1 }) }); var Qe = function(t, e) { return { value: e, done: !!t } },
        He = We(Array, "Array", function(t, e) { this._t = lt(t), this._i = 0, this._k = e }, function() { var t = this._t,
                e = this._k,
                n = this._i++; return !t || n >= t.length ? (this._t = void 0, Qe(1)) : Qe(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]) }, "values");
    Pe.Arguments = Pe.Array, rt("keys"), rt("values"), rt("entries"); for (var ze = J("iterator"), Ge = J("toStringTag"), Ye = Pe.Array, Xe = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, Je = _t(Xe), $e = 0; $e < Je.length; $e++) { var Ze, tn = Je[$e],
            en = Xe[tn],
            nn = y[tn],
            rn = nn && nn.prototype; if (rn && (rn[ze] || I(rn, ze, Ye), rn[Ge] || I(rn, Ge, tn), Pe[tn] = Ye, en))
            for (Ze in He) rn[Ze] || O(rn, Ze, He[Ze], !0) }
    Mt.f("iterator"); var on = Object.setPrototypeOf || { __proto__: [] }
    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };

    function an(t, e) {
        function n() { this.constructor = t }
        on(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var sn = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t };

    function un(o, a, s, u) { return new(s || (s = Promise))(function(t, e) {
            function n(t) { try { i(u.next(t)) } catch (t) { e(t) } }

            function r(t) { try { i(u.throw(t)) } catch (t) { e(t) } }

            function i(e) { e.done ? t(e.value) : new s(function(t) { t(e.value) }).then(n, r) }
            i((u = u.apply(o, a || [])).next()) }) }

    function cn(n, r) { var i, o, a, t, s = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] }; return t = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (t[Symbol.iterator] = function() { return this }), t;

        function e(e) { return function(t) { return function(e) { if (i) throw new TypeError("Generator is already executing."); for (; s;) try { if (i = 1, o && (a = o[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(a = a.call(o, e[1])).done) return a; switch (o = 0, a && (e = [0, a.value]), e[0]) {
                            case 0:
                            case 1:
                                a = e; break;
                            case 4:
                                return s.label++, { value: e[1], done: !1 };
                            case 5:
                                s.label++, o = e[1], e = [0]; continue;
                            case 7:
                                e = s.ops.pop(), s.trys.pop(); continue;
                            default:
                                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) { s = 0; continue } if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) { s.label = e[1]; break } if (6 === e[0] && s.label < a[1]) { s.label = a[1], a = e; break } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(e); break }
                                a[2] && s.ops.pop(), s.trys.pop(); continue }
                        e = r.call(n, s) } catch (t) { e = [6, t], o = 0 } finally { i = a = 0 }
                    if (5 & e[0]) throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 } }([e, t]) } } }

    function hn(t, e) { var n = "function" == typeof Symbol && t[Symbol.iterator]; if (!n) return t; var r, i, o = n.call(t),
            a = []; try { for (;
                (void 0 === e || 0 < e--) && !(r = o.next()).done;) a.push(r.value) } catch (t) { i = { error: t } } finally { try { r && !r.done && (n = o.return) && n.call(o) } finally { if (i) throw i.error } } return a } var ln = !1,
        fn = !1,
        pn = "${JSCORE_VERSION}",
        dn = function(t, e) { if (!t) throw yn(e) },
        yn = function(t) { return new Error("Firebase Database (" + pn + ") INTERNAL ASSERT FAILED: " + t) },
        mn = function(t) { for (var e = [], n = 0, r = 0; r < t.length; r++) { var i = t.charCodeAt(r);
                e[n++] = i < 128 ? i : (e[n++] = i < 2048 ? i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < t.length && 56320 == (64512 & t.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r)), e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128) : e[n++] = i >> 12 | 224, i >> 6 & 63 | 128), 63 & i | 128) } return e },
        gn = { byteToCharMap_: null, charToByteMap_: null, byteToCharMapWebSafe_: null, charToByteMapWebSafe_: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() { return this.ENCODED_VALS_BASE + "+/=" }, get ENCODED_VALS_WEBSAFE() { return this.ENCODED_VALS_BASE + "-_." }, HAS_NATIVE_SUPPORT: "function" == typeof atob, encodeByteArray: function(t, e) { if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
                this.init_(); for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) { var o = t[i],
                        a = i + 1 < t.length,
                        s = a ? t[i + 1] : 0,
                        u = i + 2 < t.length,
                        c = u ? t[i + 2] : 0,
                        h = o >> 2,
                        l = (3 & o) << 4 | s >> 4,
                        f = (15 & s) << 2 | c >> 6,
                        p = 63 & c;
                    u || (p = 64, a || (f = 64)), r.push(n[h], n[l], n[f], n[p]) } return r.join("") }, encodeString: function(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(mn(t), e) }, decodeString: function(t, e) { return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function(t) { for (var e = [], n = 0, r = 0; n < t.length;) { var i = t[n++]; if (i < 128) e[r++] = String.fromCharCode(i);
                        else if (191 < i && i < 224) { var o = t[n++];
                            e[r++] = String.fromCharCode((31 & i) << 6 | 63 & o) } else if (239 < i && i < 365) { var a = ((7 & i) << 18 | (63 & (o = t[n++])) << 12 | (63 & (s = t[n++])) << 6 | 63 & t[n++]) - 65536;
                            e[r++] = String.fromCharCode(55296 + (a >> 10)), e[r++] = String.fromCharCode(56320 + (1023 & a)) } else { o = t[n++]; var s = t[n++];
                            e[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & s) } } return e.join("") }(this.decodeStringToByteArray(t, e)) }, decodeStringToByteArray: function(t, e) { this.init_(); for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length;) { var o = n[t.charAt(i++)],
                        a = i < t.length ? n[t.charAt(i)] : 0,
                        s = ++i < t.length ? n[t.charAt(i)] : 64,
                        u = ++i < t.length ? n[t.charAt(i)] : 64; if (++i, null == o || null == a || null == s || null == u) throw Error(); var c = o << 2 | a >> 4; if (r.push(c), 64 != s) { var h = a << 4 & 240 | s >> 2; if (r.push(h), 64 != u) { var l = s << 6 & 192 | u;
                            r.push(l) } } } return r }, init_: function() { if (!this.byteToCharMap_) { this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {}; for (var t = 0; t < this.ENCODED_VALS.length; t++) this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t) } } },
        vn = function(t) { try { return gn.decodeString(t, !0) } catch (t) { console.error("base64Decode failed: ", t) } return null };

    function bn(t) { return _n(void 0, t) }

    function _n(t, e) { if (!(e instanceof Object)) return e; switch (e.constructor) {
            case Date:
                return new Date(e.getTime());
            case Object:
                void 0 === t && (t = {}); break;
            case Array:
                t = []; break;
            default:
                return e } for (var n in e) e.hasOwnProperty(n) && (t[n] = _n(t[n], e[n])); return t }

    function wn(t, e, n) { t[e] = n } var En = function() {
            function t() { var n = this;
                this.promise = new Promise(function(t, e) { n.resolve = t, n.reject = e }) } return t.prototype.wrapCallback = function(n) { var r = this; return function(t, e) { t ? r.reject(t) : r.resolve(e), "function" == typeof n && (r.promise.catch(function() {}), 1 === n.length ? n(t) : n(t, e)) } }, t }(),
        Tn = function() { return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "") },
        Sn = function() { return "object" == typeof navigator && "ReactNative" === navigator.product },
        Cn = function() { return !0 === ln || !0 === fn },
        In = "FirebaseError",
        Nn = Error.captureStackTrace,
        Dn = function(t, e) { if (this.code = t, this.message = e, Nn) Nn(this, An.prototype.create);
            else try { throw Error.apply(this, arguments) } catch (t) { this.name = In, Object.defineProperty(this, "stack", { get: function() { return t.stack } }) } };
    Dn.prototype = Object.create(Error.prototype), (Dn.prototype.constructor = Dn).prototype.name = In; var An = function() {
        function t(t, e, n) { this.service = t, this.serviceName = e, this.errors = n, this.pattern = /\{\$([^}]+)}/g } return t.prototype.create = function(t, r) { void 0 === r && (r = {}); var e, n = this.errors[t],
                i = this.service + "/" + t;
            e = void 0 === n ? "Error" : n.replace(this.pattern, function(t, e) { var n = r[e]; return void 0 !== n ? n.toString() : "<" + e + "?>" }), e = this.serviceName + ": " + e + " (" + i + ")."; var o = new Dn(i, e); for (var a in r) r.hasOwnProperty(a) && "_" !== a.slice(-1) && (o[a] = r[a]); return o }, t }();

    function kn(t) { return JSON.parse(t) }

    function Rn(t) { return JSON.stringify(t) } var On = function(t) { var e = {},
                n = {},
                r = {},
                i = ""; try { var o = t.split(".");
                e = kn(vn(o[0]) || ""), n = kn(vn(o[1]) || ""), i = o[2], r = n.d || {}, delete n.d } catch (t) {} return { header: e, claims: n, data: r, signature: i } },
        Pn = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) },
        Mn = function(t, e) { if (Object.prototype.hasOwnProperty.call(t, e)) return t[e] },
        Ln = function(t, e) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]) },
        xn = function(t) { return n = {}, Ln(t, function(t, e) { n[t] = e }), n; var n },
        Fn = function(t) { for (var e in t) return !1; return !0 },
        Un = function(t) { var e = 0; for (var n in t) e++; return e },
        qn = function(t, e, n) { var r = {}; for (var i in t) r[i] = e.call(n, t[i], i, t); return r },
        Vn = function(t, e, n) { for (var r in t)
                if (e.call(n, t[r], r, t)) return r },
        Bn = function(t) { for (var e in t) return e },
        jn = function(n) {
            function t() { var t = n.call(this) || this;
                t.chain_ = [], t.buf_ = [], t.W_ = [], t.pad_ = [], t.inbuf_ = 0, t.total_ = 0, t.blockSize = 64, t.pad_[0] = 128; for (var e = 1; e < t.blockSize; ++e) t.pad_[e] = 0; return t.reset(), t } return an(t, n), t.prototype.reset = function() { this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0 }, t.prototype.compress_ = function(t, e) { e || (e = 0); var n = this.W_; if ("string" == typeof t)
                    for (var r = 0; r < 16; r++) n[r] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
                else
                    for (r = 0; r < 16; r++) n[r] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4; for (r = 16; r < 80; r++) { var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                    n[r] = 4294967295 & (i << 1 | i >>> 31) } var o, a, s = this.chain_[0],
                    u = this.chain_[1],
                    c = this.chain_[2],
                    h = this.chain_[3],
                    l = this.chain_[4]; for (r = 0; r < 80; r++) { a = r < 40 ? r < 20 ? (o = h ^ u & (c ^ h), 1518500249) : (o = u ^ c ^ h, 1859775393) : r < 60 ? (o = u & c | h & (u | c), 2400959708) : (o = u ^ c ^ h, 3395469782);
                    i = (s << 5 | s >>> 27) + o + l + a + n[r] & 4294967295;
                    l = h, h = c, c = 4294967295 & (u << 30 | u >>> 2), u = s, s = i }
                this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[1] = this.chain_[1] + u & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + l & 4294967295 }, t.prototype.update = function(t, e) { if (null != t) { void 0 === e && (e = t.length); for (var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < e;) { if (0 == o)
                            for (; r <= n;) this.compress_(t, r), r += this.blockSize; if ("string" == typeof t) { for (; r < e;)
                                if (i[o] = t.charCodeAt(r), ++r, ++o == this.blockSize) { this.compress_(i), o = 0; break } } else
                            for (; r < e;)
                                if (i[o] = t[r], ++r, ++o == this.blockSize) { this.compress_(i), o = 0; break } }
                    this.inbuf_ = o, this.total_ += e } }, t.prototype.digest = function() { var t = [],
                    e = 8 * this.total_;
                this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56)); for (var n = this.blockSize - 1; 56 <= n; n--) this.buf_[n] = 255 & e, e /= 256;
                this.compress_(this.buf_); var r = 0; for (n = 0; n < 5; n++)
                    for (var i = 24; 0 <= i; i -= 8) t[r] = this.chain_[n] >> i & 255, ++r; return t }, t }(function() { this.blockSize = -1 });

    function Wn(t, e) { var n = new Kn(t, e); return n.subscribe.bind(n) } var Kn = function() {
        function t(t, e) { var n = this;
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then(function() { t(n) }).catch(function(t) { n.error(t) }) } return t.prototype.next = function(e) { this.forEachObserver(function(t) { t.next(e) }) }, t.prototype.error = function(e) { this.forEachObserver(function(t) { t.error(e) }), this.close(e) }, t.prototype.complete = function() { this.forEachObserver(function(t) { t.complete() }), this.close() }, t.prototype.subscribe = function(t, e, n) { var r, i = this; if (void 0 === t && void 0 === e && void 0 === n) throw new Error("Missing Observer.");
            void 0 === (r = function(t, e) { if ("object" != typeof t || null === t) return !1; for (var n = 0, r = e; n < r.length; n++) { var i = r[n]; if (i in t && "function" == typeof t[i]) return !0 } return !1 }(t, ["next", "error", "complete"]) ? t : { next: t, error: e, complete: n }).next && (r.next = Qn), void 0 === r.error && (r.error = Qn), void 0 === r.complete && (r.complete = Qn); var o = this.unsubscribeOne.bind(this, this.observers.length); return this.finalized && this.task.then(function() { try { i.finalError ? r.error(i.finalError) : r.complete() } catch (t) {} }), this.observers.push(r), o }, t.prototype.unsubscribeOne = function(t) { void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this)) }, t.prototype.forEachObserver = function(t) { if (!this.finalized)
                for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t) }, t.prototype.sendOne = function(t, e) { var n = this;
            this.task.then(function() { if (void 0 !== n.observers && void 0 !== n.observers[t]) try { e(n.observers[t]) } catch (t) { "undefined" != typeof console && console.error && console.error(t) } }) }, t.prototype.close = function(t) { var e = this;
            this.finalized || (this.finalized = !0, void 0 !== t && (this.finalError = t), this.task.then(function() { e.observers = void 0, e.onNoObservers = void 0 })) }, t }();

    function Qn() {} var Hn = function(t, e, n, r) { var i; if (r < e ? i = "at least " + e : n < r && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(t + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".") };

    function zn(t, e, n) { var r = ""; switch (e) {
            case 1:
                r = n ? "first" : "First"; break;
            case 2:
                r = n ? "second" : "Second"; break;
            case 3:
                r = n ? "third" : "Third"; break;
            case 4:
                r = n ? "fourth" : "Fourth"; break;
            default:
                throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?") } var i = t + " failed: "; return i += r + " argument " }

    function Gn(t, e, n, r) { if ((!r || n) && "function" != typeof n) throw new Error(zn(t, e, r) + "must be a valid function.") }

    function Yn(t, e, n, r) { if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(zn(t, e, r) + "must be a valid context object.") } var Xn = function(t) { for (var e = 0, n = 0; n < t.length; n++) { var r = t.charCodeAt(n);
                r < 128 ? e++ : r < 2048 ? e += 2 : 55296 <= r && r <= 56319 ? (e += 4, n++) : e += 3 } return e },
        Jn = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) },
        $n = "[DEFAULT]",
        Zn = [],
        tr = function() {
            function t(t, e, n) { this.firebase_ = n, this.isDeleted_ = !1, this.services_ = {}, this.name_ = e.name, this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled || !1, this.options_ = bn(t), this.INTERNAL = { getUid: function() { return null }, getToken: function() { return Promise.resolve(null) }, addAuthTokenListener: function(t) { Zn.push(t), setTimeout(function() { return t(null) }, 0) }, removeAuthTokenListener: function(e) { Zn = Zn.filter(function(t) { return t !== e }) } } } return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", { get: function() { return this.checkDestroyed_(), this._automaticDataCollectionEnabled }, set: function(t) { this.checkDestroyed_(), this._automaticDataCollectionEnabled = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "name", { get: function() { return this.checkDestroyed_(), this.name_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "options", { get: function() { return this.checkDestroyed_(), this.options_ }, enumerable: !0, configurable: !0 }), t.prototype.delete = function() { var r = this; return new Promise(function(t) { r.checkDestroyed_(), t() }).then(function() { r.firebase_.INTERNAL.removeApp(r.name_); var n = []; return Object.keys(r.services_).forEach(function(e) { Object.keys(r.services_[e]).forEach(function(t) { n.push(r.services_[e][t]) }) }), Promise.all(n.map(function(t) { return t.INTERNAL.delete() })) }).then(function() { r.isDeleted_ = !0, r.services_ = {} }) }, t.prototype._getService = function(t, e) { if (void 0 === e && (e = $n), this.checkDestroyed_(), this.services_[t] || (this.services_[t] = {}), !this.services_[t][e]) { var n = e !== $n ? e : void 0,
                        r = this.firebase_.INTERNAL.factories[t](this, this.extendApp.bind(this), n);
                    this.services_[t][e] = r } return this.services_[t][e] }, t.prototype.extendApp = function(t) { var e = this;
                _n(this, t), t.INTERNAL && t.INTERNAL.addAuthTokenListener && (Zn.forEach(function(t) { e.INTERNAL.addAuthTokenListener(t) }), Zn = []) }, t.prototype.checkDestroyed_ = function() { this.isDeleted_ && er("app-deleted", { name: this.name_ }) }, t }();

    function er(t, e) { throw nr.create(t, e) }
    tr.prototype.name && tr.prototype.options || tr.prototype.delete || console.log("dc"); var nr = new An("app", "Firebase", { "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()", "bad-app-name": "Illegal App name: '{$name}", "duplicate-app": "Firebase App named '{$name}' already exists", "app-deleted": "Firebase App named '{$name}' already deleted", "duplicate-service": "Firebase service named '{$name}' already registered", "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain", "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance." }),
        rr = !1; try { rr = "[object process]" === Object.prototype.toString.call(global.process) } catch (wa) {}
    rr && console.warn('\nWarning: This is a browser-targeted Firebase bundle but it appears it is being\nrun in a Node environment.  If running in a Node environment, make sure you\nare using the bundle specified by the "main" field in package.json.\n\nIf you are using Webpack, you can specify "main" as the first item in\n"resolve.mainFields":\nhttps://webpack.js.org/configuration/resolve/#resolvemainfields\n\nIf using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\nto false and "main" to true:\nhttps://github.com/rollup/rollup-plugin-node-resolve\n'); var ir, or, Mh = function t() { var a = {},
            s = {},
            u = {},
            c = { __esModule: !0, initializeApp: function(t, e) { if (void 0 === e && (e = {}), "object" != typeof e || null === e) { var n = e;
                        e = { name: n } } var r = e;
                    void 0 === r.name && (r.name = $n); var i = r.name; "string" == typeof i && i || er("bad-app-name", { name: i + "" }), Jn(a, i) && er("duplicate-app", { name: i }); var o = new tr(t, r, c); return f(a[i] = o, "create"), o }, app: h, apps: null, Promise: Promise, SDK_VERSION: "5.8.6", INTERNAL: { registerService: function(n, t, e, r, i) { s[n] && er("duplicate-service", { name: n }), s[n] = t, r && (u[n] = r, l().forEach(function(t) { r("create", t) })); var o = function(t) { return void 0 === t && (t = h()), "function" != typeof t[n] && er("invalid-app-argument", { name: n }), t[n]() }; return void 0 !== e && _n(o, e), c[n] = o, tr.prototype[n] = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return this._getService.bind(this, n).apply(this, i ? t : []) }, o }, createFirebaseNamespace: t, extendNamespace: function(t) { _n(c, t) }, createSubscribe: Wn, ErrorFactory: An, removeApp: function(t) { f(a[t], "delete"), delete a[t] }, factories: s, useAsService: i, Promise: Promise, deepExtend: _n } };

        function h(t) { return Jn(a, t = t || $n) || er("no-app", { name: t }), a[t] }

        function l() { return Object.keys(a).map(function(t) { return a[t] }) }

        function f(n, r) { Object.keys(s).forEach(function(t) { var e = i(n, t);
                null !== e && u[e] && u[e](r, n) }) }

        function i(t, e) { if ("serverAuth" === e) return null; var n = e; return t.options, n } return wn(c, "default", c), Object.defineProperty(c, "apps", { get: l }), wn(h, "App", tr), c }();
    (function() { var t, u = u || {},
            h = this;

        function c(t) { return "string" == typeof t }

        function n(t) { return "boolean" == typeof t }

        function o() {}

        function l(t) { var e = typeof t; if ("object" == e) { if (!t) return "null"; if (t instanceof Array) return "array"; if (t instanceof Object) return e; var n = Object.prototype.toString.call(t); if ("[object Window]" == n) return "object"; if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function" } else if ("function" == e && void 0 === t.call) return "object"; return e }

        function r(t) { return null === t }

        function f(t) { return "array" == l(t) }

        function p(t) { var e = l(t); return "array" == e || "object" == e && "number" == typeof t.length }

        function a(t) { return "function" == l(t) }

        function d(t) { var e = typeof t; return "object" == e && null != t || "function" == e } var e = "closure_uid_" + (1e9 * Math.random() >>> 0),
            i = 0;

        function s(t, e, n) { return t.call.apply(t.bind, arguments) }

        function y(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var r = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, r), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

        function m(t, e, n) { return (m = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? s : y).apply(null, arguments) }

        function g(e, t) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } } var v = Date.now || function() { return +new Date };

        function b(t, o) {
            function e() {}
            e.prototype = o.prototype, t.ob = o.prototype, t.prototype = new e, (t.prototype.constructor = t).ed = function(t, e, n) { for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return o.prototype[e].apply(t, r) } }

        function _(t) { t.prototype.then = t.prototype.then, t.prototype.$goog_Thenable = !0 }

        function w(t) { if (!t) return !1; try { return !!t.$goog_Thenable } catch (t) { return !1 } }

        function E(t) { if (Error.captureStackTrace) Error.captureStackTrace(this, E);
            else { var e = Error().stack;
                e && (this.stack = e) }
            t && (this.message = String(t)) }

        function T(t, e) { for (var n = "", r = (t = t.split("%s")).length - 1, i = 0; i < r; i++) n += t[i] + (i < e.length ? e[i] : "%s");
            E.call(this, n + t[r]) }

        function S(t, e) { throw new T("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1)) }

        function C(t, e) { this.c = t, this.f = e, this.b = 0, this.a = null }

        function I(t, e) { t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e) }

        function N() { this.b = this.a = null }
        b(E, Error), E.prototype.name = "CustomError", b(T, E), T.prototype.name = "AssertionError", C.prototype.get = function() { if (0 < this.b) { this.b--; var t = this.a;
                this.a = t.next, t.next = null } else t = this.c(); return t }; var D = new C(function() { return new A }, function(t) { t.reset() });

        function A() { this.next = this.b = this.a = null }
        N.prototype.add = function(t, e) { var n = D.get();
            n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n }, A.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null }, A.prototype.reset = function() { this.next = this.b = this.a = null }; var k = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) { if (c(t)) return c(e) && 1 == e.length ? t.indexOf(e, 0) : -1; for (var n = 0; n < t.length; n++)
                    if (n in t && t[n] === e) return n;
                return -1 },
            R = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var r = t.length, i = c(t) ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t) }; var O = Array.prototype.map ? function(t, e) { return Array.prototype.map.call(t, e, void 0) } : function(t, e) { for (var n = t.length, r = Array(n), i = c(t) ? t.split("") : t, o = 0; o < n; o++) o in i && (r[o] = e.call(void 0, i[o], o, t)); return r },
            P = Array.prototype.some ? function(t, e) { return Array.prototype.some.call(t, e, void 0) } : function(t, e) { for (var n = t.length, r = c(t) ? t.split("") : t, i = 0; i < n; i++)
                    if (i in r && e.call(void 0, r[i], i, t)) return !0;
                return !1 };

        function M(t, e) { return 0 <= k(t, e) }

        function L(t, e) { var n; return (n = 0 <= (e = k(t, e))) && Array.prototype.splice.call(t, e, 1), n }

        function x(n, r) {! function(t, e) { var n = t.length,
                    r = c(t) ? t.split("") : t; for (--n; 0 <= n; --n) n in r && e.call(void 0, r[n], n, t) }(n, function(t, e) { r.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0 }) }

        function F(t) { return Array.prototype.concat.apply([], arguments) }

        function U(t) { var e = t.length; if (0 < e) { for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r]; return n } return [] }

        function q(t, e) { for (var n = t.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < n.length;) r += n.shift() + i.shift(); return r + n.join("%s") } var V = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] };

        function B(t) { return Y.test(t) && (-1 != t.indexOf("&") && (t = t.replace(W, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(K, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(Q, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(H, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(z, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(G, "&#0;"))), t } var j, W = /&/g,
            K = /</g,
            Q = />/g,
            H = /"/g,
            z = /'/g,
            G = /\x00/g,
            Y = /[\x00&<>"']/;

        function X(t, e) { return -1 != t.indexOf(e) }

        function J(t, e) { return t < e ? -1 : e < t ? 1 : 0 }
        t: { var $ = h.navigator; if ($) { var Z = $.userAgent; if (Z) { j = Z; break t } }
            j = "" }

        function tt(t) { return X(j, t) }

        function et(t, e) { for (var n in t) e.call(void 0, t[n], n, t) }

        function nt(t) { for (var e in t) return !1; return !0 }

        function rt(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n } var it, ot, at = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function st(t, e) { for (var n, r, i = 1; i < arguments.length; i++) { for (n in r = arguments[i]) t[n] = r[n]; for (var o = 0; o < at.length; o++) n = at[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]) } }

        function ut(t) { h.setTimeout(function() { throw t }, 0) }

        function ct(t, e) { ot || function() { if (h.Promise && h.Promise.resolve) { var t = h.Promise.resolve(void 0);
                    ot = function() { t.then(ft) } } else ot = function() { var t = ft;!a(h.setImmediate) || h.Window && h.Window.prototype && !tt("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? (it || (it = function() { var t = h.MessageChannel; if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !tt("Presto") && (t = function() { var t = document.createElement("IFRAME");
                                t.style.display = "none", t.src = "", document.documentElement.appendChild(t); var e = t.contentWindow;
                                (t = e.document).open(), t.write(""), t.close(); var n = "callImmediate" + Math.random(),
                                    r = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                t = m(function(t) { "*" != r && t.origin != r || t.data != n || this.port1.onmessage() }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = { postMessage: function() { e.postMessage(n, r) } } }), void 0 === t || tt("Trident") || tt("MSIE")) return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(t) { var e = document.createElement("SCRIPT");
                            e.onreadystatechange = function() { e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null }, document.documentElement.appendChild(e) } : function(t) { h.setTimeout(t, 0) }; var e = new t,
                            n = {},
                            r = n; return e.port1.onmessage = function() { if (void 0 !== n.next) { var t = (n = n.next).wb;
                                    n.wb = null, t() } },
                            function(t) { r.next = { wb: t }, r = r.next, e.port2.postMessage(0) } }()), it(t)) : h.setImmediate(t) } }(), ht || (ot(), ht = !0), lt.add(t, e) } var ht = !1,
            lt = new N;

        function ft() { for (var t; n = e = void 0, n = null, (e = lt).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) { try { t.a.call(t.b) } catch (t) { ut(t) }
                I(D, t) } var e, n;
            ht = !1 }

        function pt(t, e) { if (this.a = dt, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != o) try { var n = this;
                t.call(e, function(t) { It(n, yt, t) }, function(t) { if (!(t instanceof Pt)) try { if (t instanceof Error) throw t; throw Error("Promise rejected.") } catch (t) {}
                    It(n, mt, t) }) } catch (t) { It(this, mt, t) } } var dt = 0,
            yt = 2,
            mt = 3;

        function gt() { this.next = this.f = this.b = this.g = this.a = null, this.c = !1 }
        gt.prototype.reset = function() { this.f = this.b = this.g = this.a = null, this.c = !1 }; var vt = new C(function() { return new gt }, function(t) { t.reset() });

        function bt(t, e, n) { var r = vt.get(); return r.g = t, r.b = e, r.f = n, r }

        function _t(t) { if (t instanceof pt) return t; var e = new pt(o); return It(e, yt, t), e }

        function wt(n) { return new pt(function(t, e) { e(n) }) }

        function Et(t, e, n) { Nt(t, e, n, null) || ct(g(e, t)) }

        function Tt(n) { return new pt(function(r) { var i = n.length,
                    o = []; if (i)
                    for (var t = function(t, e, n) { i--, o[t] = e ? { Db: !0, value: n } : { Db: !1, reason: n }, 0 == i && r(o) }, e = 0; e < n.length; e++) Et(n[e], g(t, e, !0), g(t, e, !1));
                else r(o) }) }

        function St(t, e) { t.b || t.a != yt && t.a != mt || Dt(t), t.f ? t.f.next = e : t.b = e, t.f = e }

        function Ct(t, i, o, a) { var e = bt(null, null, null); return e.a = new pt(function(n, r) { e.g = i ? function(t) { try { var e = i.call(a, t);
                        n(e) } catch (t) { r(t) } } : n, e.b = o ? function(t) { try { var e = o.call(a, t);
                        void 0 === e && t instanceof Pt ? r(t) : n(e) } catch (t) { r(t) } } : r }), St(e.a.c = t, e), e.a }

        function It(t, e, n) { var r, i;
            t.a == dt && (t === n && (e = mt, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, Nt(n, t.Nc, t.Oc, t) || (t.i = n, t.a = e, t.c = null, Dt(t), e != mt || n instanceof Pt || (i = n, (r = t).g = !0, ct(function() { r.g && Ot.call(null, i) })))) }

        function Nt(t, e, n, r) { if (t instanceof pt) return St(t, bt(e || o, n || null, r)), !0; if (w(t)) return t.then(e, n, r), !0; if (d(t)) try { var i = t.then; if (a(i)) return function(t, e, n, r, i) {
                    function o(t) { a || (a = !0, r.call(i, t)) } var a = !1; try { e.call(t, function(t) { a || (a = !0, n.call(i, t)) }, o) } catch (t) { o(t) } }(t, i, e, n, r), !0 } catch (t) { return n.call(r, t), !0 }
            return !1 }

        function Dt(t) { t.h || (t.h = !0, ct(t.Yb, t)) }

        function At(t) { var e = null; return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e }

        function kt(t, e, n, r) { if (n == mt && e.b && !e.c)
                for (; t && t.g; t = t.c) t.g = !1; if (e.a) e.a.c = null, Rt(e, n, r);
            else try { e.c ? e.g.call(e.f) : Rt(e, n, r) } catch (t) { Ot.call(null, t) }
            I(vt, e) }

        function Rt(t, e, n) { e == yt ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n) }
        pt.prototype.then = function(t, e, n) { return Ct(this, a(t) ? t : null, a(e) ? e : null, n) }, _(pt), (t = pt.prototype).ia = function(t, e) { return (t = bt(t, t, e)).c = !0, St(this, t), this }, t.s = function(t, e) { return Ct(this, null, t, e) }, t.cancel = function(t) { this.a == dt && ct(function() {! function t(e, n) { if (e.a == dt)
                        if (e.c) { var r = e.c; if (r.b) { for (var i = 0, o = null, a = null, s = r.b; s && (s.c || (i++, s.a == e && (o = s), !(o && 1 < i))); s = s.next) o || (a = s);
                                o && (r.a == dt && 1 == i ? t(r, n) : (a ? ((i = a).next == r.f && (r.f = i), i.next = i.next.next) : At(r), kt(r, o, mt, n))) }
                            e.c = null } else It(e, mt, n) }(this, new Pt(t)) }, this) }, t.Nc = function(t) { this.a = dt, It(this, yt, t) }, t.Oc = function(t) { this.a = dt, It(this, mt, t) }, t.Yb = function() { for (var t; t = At(this);) kt(this, t, this.a, this.i);
            this.h = !1 }; var Ot = ut;

        function Pt(t) { E.call(this, t) }

        function Mt() { this.qa = this.qa, this.ja = this.ja }
        b(Pt, E); var Lt = 0;

        function xt(t) { if (!t.qa && (t.qa = !0, t.va(), 0 != Lt)) t[e] || (t[e] = ++i) }

        function Ft(t) { return Ft[" "](t), t }
        Mt.prototype.qa = !(Pt.prototype.name = "cancel"), Mt.prototype.va = function() { if (this.ja)
                for (; this.ja.length;) this.ja.shift()() }, Ft[" "] = o; var Ut, qt, Vt = tt("Opera"),
            Bt = tt("Trident") || tt("MSIE"),
            jt = tt("Edge"),
            Wt = jt || Bt,
            Kt = tt("Gecko") && !(X(j.toLowerCase(), "webkit") && !tt("Edge")) && !(tt("Trident") || tt("MSIE")) && !tt("Edge"),
            Qt = X(j.toLowerCase(), "webkit") && !tt("Edge");

        function Ht() { var t = h.document; return t ? t.documentMode : void 0 }
        t: { var zt = "",
                Gt = (qt = j, Kt ? /rv:([^\);]+)(\)|;)/.exec(qt) : jt ? /Edge\/([\d\.]+)/.exec(qt) : Bt ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(qt) : Qt ? /WebKit\/(\S+)/.exec(qt) : Vt ? /(?:Version)[ \/]?(\S+)/.exec(qt) : void 0); if (Gt && (zt = Gt ? Gt[1] : ""), Bt) { var Yt = Ht(); if (null != Yt && Yt > parseFloat(zt)) { Ut = String(Yt); break t } }
            Ut = zt }
        var Xt, Jt = {};

        function $t(s) { return t = s, e = function() { for (var t = 0, e = V(String(Ut)).split("."), n = V(String(s)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) { var o = e[i] || "",
                        a = n[i] || "";
                    do { if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                        t = J(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || J(0 == o[2].length, 0 == a[2].length) || J(o[2], a[2]), o = o[3], a = a[3] } while (0 == t) } return 0 <= t }, n = Jt, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t); var t, e, n } var Zt = h.document;
        Xt = Zt && Bt ? Ht() || ("CSS1Compat" == Zt.compatMode ? parseInt(Ut, 10) : 5) : void 0; var te = Object.freeze || function(t) { return t },
            ee = !Bt || 9 <= Number(Xt),
            ne = Bt && !$t("9"),
            re = function() { if (!h.addEventListener || !Object.defineProperty) return !1; var t = !1,
                    e = Object.defineProperty({}, "passive", { get: function() { t = !0 } }); return h.addEventListener("test", o, e), h.removeEventListener("test", o, e), t }();

        function ie(t, e) { this.type = t, this.b = this.target = e, this.Kb = !0 }

        function oe(t, e) { if (ie.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) { var n = this.type = t.type,
                    r = t.changedTouches ? t.changedTouches[0] : null; if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) { if (Kt) { t: { try { Ft(e.nodeName); var i = !0; break t } catch (t) {}
                            i = !1 }
                        i || (e = null) } } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                this.relatedTarget = e, this.screenY = null === r ? (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, t.screenY || 0) : (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, r.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = c(t.pointerType) ? t.pointerType : ae[t.pointerType] || "", (this.a = t).defaultPrevented && this.preventDefault() } }
        ie.prototype.preventDefault = function() { this.Kb = !1 }, b(oe, ie); var ae = te({ 2: "touch", 3: "pen", 4: "mouse" });
        oe.prototype.preventDefault = function() { oe.ob.preventDefault.call(this); var t = this.a; if (t.preventDefault) t.preventDefault();
            else if (t.returnValue = !1, ne) try {
                (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1) } catch (t) {} }, oe.prototype.f = function() { return this.a }; var se = "closure_listenable_" + (1e6 * Math.random() | 0),
            ue = 0;

        function ce(t, e, n, r, i) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.La = i, this.key = ++ue, this.oa = this.Ia = !1 }

        function he(t) { t.oa = !0, t.listener = null, t.proxy = null, t.src = null, t.La = null }

        function le(t) { this.src = t, this.a = {}, this.b = 0 }

        function fe(t, e) { var n = e.type;
            n in t.a && L(t.a[n], e) && (he(e), 0 == t.a[n].length && (delete t.a[n], t.b--)) }

        function pe(t, e, n, r) { for (var i = 0; i < t.length; ++i) { var o = t[i]; if (!o.oa && o.listener == e && o.capture == !!n && o.La == r) return i } return -1 }
        le.prototype.add = function(t, e, n, r, i) { var o = t.toString();
            (t = this.a[o]) || (t = this.a[o] = [], this.b++); var a = pe(t, e, r, i); return -1 < a ? (e = t[a], n || (e.Ia = !1)) : ((e = new ce(e, this.src, o, !!r, i)).Ia = n, t.push(e)), e }; var de = "closure_lm_" + (1e6 * Math.random() | 0),
            ye = {};

        function me(t, e, n, r, i) { if (r && r.once) ve(t, e, n, r, i);
            else if (f(e))
                for (var o = 0; o < e.length; o++) me(t, e[o], n, r, i);
            else n = Ne(n), t && t[se] ? Ae(t, e, n, d(r) ? !!r.capture : !!r, i) : ge(t, e, n, !1, r, i) }

        function ge(t, e, n, r, i, o) { if (!e) throw Error("Invalid event type"); var a, s, u = d(i) ? !!i.capture : !!i,
                c = Ce(t); if (c || (t[de] = c = new le(t)), !(n = c.add(e, n, r, u, o)).proxy)
                if (a = Se, r = s = ee ? function(t) { return a.call(s.src, s.listener, t) } : function(t) { if (!(t = a.call(s.src, s.listener, t))) return t }, (n.proxy = r).src = t, r.listener = n, t.addEventListener) re || (i = u), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(we(e.toString()), r);
            else { if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                t.addListener(r) } }

        function ve(t, e, n, r, i) { if (f(e))
                for (var o = 0; o < e.length; o++) ve(t, e[o], n, r, i);
            else n = Ne(n), t && t[se] ? ke(t, e, n, d(r) ? !!r.capture : !!r, i) : ge(t, e, n, !0, r, i) }

        function be(t, e, n, r, i) { if (f(e))
                for (var o = 0; o < e.length; o++) be(t, e[o], n, r, i);
            else r = d(r) ? !!r.capture : !!r, n = Ne(n), t && t[se] ? (t = t.l, (e = String(e).toString()) in t.a && (-1 < (n = pe(o = t.a[e], n, r, i)) && (he(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = Ce(t)) && (e = t.a[e.toString()], t = -1, e && (t = pe(e, n, r, i)), (n = -1 < t ? e[t] : null) && _e(n)) }

        function _e(t) { if ("number" != typeof t && t && !t.oa) { var e = t.src; if (e && e[se]) fe(e.l, t);
                else { var n = t.type,
                        r = t.proxy;
                    e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(we(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Ce(e)) ? (fe(n, t), 0 == n.b && (n.src = null, e[de] = null)) : he(t) } } }

        function we(t) { return t in ye ? ye[t] : ye[t] = "on" + t }

        function Ee(t, e, n, r) { var i = !0; if ((t = Ce(t)) && (e = t.a[e.toString()]))
                for (e = e.concat(), t = 0; t < e.length; t++) { var o = e[t];
                    o && o.capture == n && !o.oa && (o = Te(o, r), i = i && !1 !== o) }
            return i }

        function Te(t, e) { var n = t.listener,
                r = t.La || t.src; return t.Ia && _e(t), n.call(r, e) }

        function Se(t, e) { if (t.oa) return !0; if (ee) return Te(t, new oe(e, this)); if (!e) t: { e = ["window", "event"]; for (var n = h, r = 0; r < e.length; r++)
                    if (null == (n = n[e[r]])) { e = null; break t }
                e = n }
            if (e = new oe(r = e, this), n = !0, !(r.keyCode < 0 || null != r.returnValue)) { t: { var i = !1; if (0 == r.keyCode) try { r.keyCode = -1; break t } catch (t) { i = !0 }(i || null == r.returnValue) && (r.returnValue = !0) } for (r = [], i = e.b; i; i = i.parentNode) r.push(i); for (t = t.type, i = r.length - 1; 0 <= i; i--) { e.b = r[i]; var o = Ee(r[i], t, !0, e);
                    n = n && o } for (i = 0; i < r.length; i++) e.b = r[i], o = Ee(r[i], t, !1, e), n = n && o } return n }

        function Ce(t) { return (t = t[de]) instanceof le ? t : null } var Ie = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

        function Ne(e) { return a(e) ? e : (e[Ie] || (e[Ie] = function(t) { return e.handleEvent(t) }), e[Ie]) }

        function De() { Mt.call(this), this.l = new le(this), (this.Rb = this).Va = null }

        function Ae(t, e, n, r, i) { t.l.add(String(e), n, !1, r, i) }

        function ke(t, e, n, r, i) { t.l.add(String(e), n, !0, r, i) }

        function Re(t, e, n, r) { if (!(e = t.l.a[String(e)])) return !0;
            e = e.concat(); for (var i = !0, o = 0; o < e.length; ++o) { var a = e[o]; if (a && !a.oa && a.capture == n) { var s = a.listener,
                        u = a.La || a.src;
                    a.Ia && fe(t.l, a), i = !1 !== s.call(u, r) && i } } return i && 0 != r.Kb }

        function Oe(t, e, n) { if (a(t)) n && (t = m(t, n));
            else { if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                t = m(t.handleEvent, t) } return 2147483647 < Number(e) ? -1 : h.setTimeout(t, e || 0) }

        function Pe(n) { var r = null; return new pt(function(t, e) {-1 == (r = Oe(function() { t(void 0) }, n)) && e(Error("Failed to schedule timer.")) }).s(function(t) { throw h.clearTimeout(r), t }) }

        function Me(t) { if (t.S && "function" == typeof t.S) return t.S(); if (c(t)) return t.split(""); if (p(t)) { for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]); return e } for (r in e = [], n = 0, t) e[n++] = t[r]; return e }

        function Le(t) { if (t.U && "function" == typeof t.U) return t.U(); if (!t.S || "function" != typeof t.S) { if (p(t) || c(t)) { var e = [];
                    t = t.length; for (var n = 0; n < t; n++) e.push(n); return e } for (var r in e = [], n = 0, t) e[n++] = r; return e } }

        function xe(t, e) { this.b = {}, this.a = [], this.c = 0; var n = arguments.length; if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]) } else if (t)
                if (t instanceof xe)
                    for (n = t.U(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                else
                    for (r in t) this.set(r, t[r]) }

        function Fe(t) { if (t.c != t.a.length) { for (var e = 0, n = 0; e < t.a.length;) { var r = t.a[e];
                    Ue(t.b, r) && (t.a[n++] = r), e++ }
                t.a.length = n } if (t.c != t.a.length) { var i = {}; for (n = e = 0; e < t.a.length;) Ue(i, r = t.a[e]) || (i[t.a[n++] = r] = 1), e++;
                t.a.length = n } }

        function Ue(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
        b(De, Mt), De.prototype[se] = !0, De.prototype.addEventListener = function(t, e, n, r) { me(this, t, e, n, r) }, De.prototype.removeEventListener = function(t, e, n, r) { be(this, t, e, n, r) }, De.prototype.dispatchEvent = function(t) { var e, n = this.Va; if (n)
                for (e = []; n; n = n.Va) e.push(n);
            n = this.Rb; var r = t.type || t; if (c(t)) t = new ie(t, n);
            else if (t instanceof ie) t.target = t.target || n;
            else { var i = t;
                st(t = new ie(r, n), i) } if (i = !0, e)
                for (var o = e.length - 1; 0 <= o; o--) { var a = t.b = e[o];
                    i = Re(a, r, !0, t) && i }
            if (i = Re(a = t.b = n, r, !0, t) && i, i = Re(a, r, !1, t) && i, e)
                for (o = 0; o < e.length; o++) i = Re(a = t.b = e[o], r, !1, t) && i; return i }, De.prototype.va = function() { if (De.ob.va.call(this), this.l) { var t, e = this.l; for (t in e.a) { for (var n = e.a[t], r = 0; r < n.length; r++) he(n[r]);
                    delete e.a[t], e.b-- } }
            this.Va = null }, (t = xe.prototype).S = function() { Fe(this); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, t.U = function() { return Fe(this), this.a.concat() }, t.clear = function() { this.b = {}, this.c = this.a.length = 0 }, t.get = function(t, e) { return Ue(this.b, t) ? this.b[t] : e }, t.set = function(t, e) { Ue(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, t.forEach = function(t, e) { for (var n = this.U(), r = 0; r < n.length; r++) { var i = n[r],
                    o = this.get(i);
                t.call(e, o, i, this) } }; var qe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

        function Ve(t, e) { if (this.b = this.l = this.c = "", this.i = null, this.h = this.g = "", this.f = !1, t instanceof Ve) { this.f = void 0 !== e ? e : t.f, Be(this, t.c), this.l = t.l, this.b = t.b, je(this, t.i), this.g = t.g, e = t.a; var n = new nn;
                n.c = e.c, e.a && (n.a = new xe(e.a), n.b = e.b), We(this, n), this.h = t.h } else t && (n = String(t).match(qe)) ? (this.f = !!e, Be(this, n[1] || "", !0), this.l = Ge(n[2] || ""), this.b = Ge(n[3] || "", !0), je(this, n[4]), this.g = Ge(n[5] || "", !0), We(this, n[6] || "", !0), this.h = Ge(n[7] || "")) : (this.f = !!e, this.a = new nn(null, this.f)) }

        function Be(t, e, n) { t.c = n ? Ge(e, !0) : e, t.c && (t.c = t.c.replace(/:$/, "")) }

        function je(t, e) { if (e) { if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                t.i = e } else t.i = null }

        function We(t, e, n) { var r, i;
            e instanceof nn ? (t.a = e, r = t.a, (i = t.f) && !r.f && (rn(r), r.c = null, r.a.forEach(function(t, e) { var n = e.toLowerCase();
                e != n && (an(this, e), un(this, n, t)) }, r)), r.f = i) : (n || (e = Ye(e, tn)), t.a = new nn(e, t.f)) }

        function Ke(t, e, n) { t.a.set(e, n) }

        function Qe(t, e) { return t.a.get(e) }

        function He(t) { return t instanceof Ve ? new Ve(t) : new Ve(t, void 0) }

        function ze(t, e) { var n = new Ve(null, void 0); return Be(n, "https"), t && (n.b = t), e && (n.g = e), n }

        function Ge(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

        function Ye(t, e, n) { return c(t) ? (t = encodeURI(t).replace(e, Xe), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null }

        function Xe(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) }
        Ve.prototype.toString = function() { var t = [],
                e = this.c;
            e && t.push(Ye(e, Je, !0), ":"); var n = this.b; return (n || "file" == e) && (t.push("//"), (e = this.l) && t.push(Ye(e, Je, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && t.push(":", String(n))), (n = this.g) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(Ye(n, "/" == n.charAt(0) ? Ze : $e, !0))), (n = this.a.toString()) && t.push("?", n), (n = this.h) && t.push("#", Ye(n, en)), t.join("") }; var Je = /[#\/\?@]/g,
            $e = /[#\?:]/g,
            Ze = /[#\?]/g,
            tn = /[#\?@]/g,
            en = /#/g;

        function nn(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

        function rn(n) { n.a || (n.a = new xe, n.b = 0, n.c && function(t, e) { if (t) { t = t.split("&"); for (var n = 0; n < t.length; n++) { var r = t[n].indexOf("="),
                            i = null; if (0 <= r) { var o = t[n].substring(0, r);
                            i = t[n].substring(r + 1) } else o = t[n];
                        e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "") } } }(n.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) })) }

        function on(t) { var e = Le(t); if (void 0 === e) throw Error("Keys are undefined"); var n = new nn(null, void 0);
            t = Me(t); for (var r = 0; r < e.length; r++) { var i = e[r],
                    o = t[r];
                f(o) ? un(n, i, o) : n.add(i, o) } return n }

        function an(t, e) { rn(t), e = cn(t, e), Ue(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Ue((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Fe(t))) }

        function sn(t, e) { return rn(t), e = cn(t, e), Ue(t.a.b, e) }

        function un(t, e, n) { an(t, e), 0 < n.length && (t.c = null, t.a.set(cn(t, e), U(n)), t.b += n.length) }

        function cn(t, e) { return e = String(e), t.f && (e = e.toLowerCase()), e }(t = nn.prototype).add = function(t, e) { rn(this), this.c = null, t = cn(this, t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, t.clear = function() { this.a = this.c = null, this.b = 0 }, t.forEach = function(n, r) { rn(this), this.a.forEach(function(t, e) { R(t, function(t) { n.call(r, t, e, this) }, this) }, this) }, t.U = function() { rn(this); for (var t = this.a.S(), e = this.a.U(), n = [], r = 0; r < e.length; r++)
                for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]); return n }, t.S = function(t) { rn(this); var e = []; if (c(t)) sn(this, t) && (e = F(e, this.a.get(cn(this, t))));
            else { t = this.a.S(); for (var n = 0; n < t.length; n++) e = F(e, t[n]) } return e }, t.set = function(t, e) { return rn(this), this.c = null, sn(this, t = cn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, t.get = function(t, e) { return 0 < (t = t ? this.S(t) : []).length ? String(t[0]) : e }, t.toString = function() { if (this.c) return this.c; if (!this.a) return ""; for (var t = [], e = this.a.U(), n = 0; n < e.length; n++) { var r = e[n],
                    i = encodeURIComponent(String(r));
                r = this.S(r); for (var o = 0; o < r.length; o++) { var a = i; "" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), t.push(a) } } return this.c = t.join("&") }; var hn = !Bt || 9 <= Number(Xt);

        function ln() { this.a = "", this.b = pn }

        function fn(t) { return t instanceof ln && t.constructor === ln && t.b === pn ? t.a : (S("expected object of type Const, got '" + t + "'"), "type_error:Const") }
        ln.prototype.na = !0, ln.prototype.ma = function() { return this.a }, ln.prototype.toString = function() { return "Const{" + this.a + "}" }; var pn = {};

        function dn(t) { var e = new ln; return e.a = t, e }

        function yn() { this.a = "", this.b = _n }

        function mn(t) { return t instanceof yn && t.constructor === yn && t.b === _n ? t.a : (S("expected object of type TrustedResourceUrl, got '" + t + "' of type " + l(t)), "type_error:TrustedResourceUrl") }

        function gn(t, n) { var e, r, i = fn(t); if (!bn.test(i)) throw Error("Invalid TrustedResourceUrl format: " + i); return t = i.replace(vn, function(t, e) { if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + i + '", but no valid label mapping found in args: ' + JSON.stringify(n)); return (t = n[e]) instanceof ln ? fn(t) : encodeURIComponent(String(t)) }), e = t, (r = new yn).a = e, r }
        dn(""), yn.prototype.na = !0, yn.prototype.ma = function() { return this.a }, yn.prototype.toString = function() { return "TrustedResourceUrl{" + this.a + "}" }; var vn = /%{(\w+)}/g,
            bn = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,
            _n = {};

        function wn() { this.a = "", this.b = Cn }

        function En(t) { return t instanceof wn && t.constructor === wn && t.b === Cn ? t.a : (S("expected object of type SafeUrl, got '" + t + "' of type " + l(t)), "type_error:SafeUrl") }
        wn.prototype.na = !0, wn.prototype.ma = function() { return this.a }, wn.prototype.toString = function() { return "SafeUrl{" + this.a + "}" }; var Tn = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

        function Sn(t) { return t instanceof wn ? t : (t = t.na ? t.ma() : String(t), Tn.test(t) || (t = "about:invalid#zClosurez"), In(t)) } var Cn = {};

        function In(t) { var e = new wn; return e.a = t, e }

        function Nn() { this.a = "", this.b = Dn }
        In("about:blank"), Nn.prototype.na = !0, Nn.prototype.ma = function() { return this.a }, Nn.prototype.toString = function() { return "SafeHtml{" + this.a + "}" }; var Dn = {};

        function An(t) { var e = new Nn; return e.a = t, e }

        function kn(t) { var e = document; return c(t) ? e.getElementById(t) : t }

        function Rn(n, t) { et(t, function(t, e) { t && t.na && (t = t.ma()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : On.hasOwnProperty(e) ? n.setAttribute(On[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t }) }
        An("<!DOCTYPE html>"), An(""), An("<br>"); var On = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

        function Pn(t, e, n) { var r = arguments,
                i = document,
                o = String(r[0]),
                a = r[1]; if (!hn && a && (a.name || a.type)) { if (o = ["<", o], a.name && o.push(' name="', B(a.name), '"'), a.type) { o.push(' type="', B(a.type), '"'); var s = {};
                    st(s, a), delete s.type, a = s }
                o.push(">"), o = o.join("") } return o = i.createElement(o), a && (c(a) ? o.className = a : f(a) ? o.className = a.join(" ") : Rn(o, a)), 2 < r.length && function(e, n, t) {
                function r(t) { t && n.appendChild(c(t) ? e.createTextNode(t) : t) } for (var i = 2; i < t.length; i++) { var o = t[i];!p(o) || d(o) && 0 < o.nodeType ? r(o) : R(Mn(o) ? U(o) : o, r) } }(i, o, r), o }

        function Mn(t) { if (t && "number" == typeof t.length) { if (d(t)) return "function" == typeof t.item || "string" == typeof t.item; if (a(t)) return "function" == typeof t.item } return !1 }

        function Ln(t) { var e = []; return function t(e, n, r) { if (null == n) r.push("null");
                else { if ("object" == typeof n) { if (f(n)) { var i = n;
                            n = i.length, r.push("["); for (var o = "", a = 0; a < n; a++) r.push(o), t(e, i[a], r), o = ","; return void r.push("]") } if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) { for (i in r.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, i) && ("function" != typeof(a = n[i]) && (r.push(o), qn(i, r), r.push(":"), t(e, a, r), o = ",")); return void r.push("}") }
                        n = n.valueOf() } switch (typeof n) {
                        case "string":
                            qn(n, r); break;
                        case "number":
                            r.push(isFinite(n) && !isNaN(n) ? String(n) : "null"); break;
                        case "boolean":
                            r.push(String(n)); break;
                        case "function":
                            r.push("null"); break;
                        default:
                            throw Error("Unknown type: " + typeof n) } } }(new xn, t, e), e.join("") }

        function xn() {} var Fn = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
            Un = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

        function qn(t, e) { e.push('"', t.replace(Un, function(t) { var e = Fn[t]; return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), Fn[t] = e), e }), '"') }

        function Vn() { var t = or(); return Bt && !!Xt && 11 == Xt || /Edge\/\d+/.test(t) }

        function Bn() { return h.window && h.window.location.href || self && self.location && self.location.href || "" }

        function jn(t, e) { e = e || h.window; var n = "about:blank";
            t && (n = En(Sn(t))), e.location.href = n }

        function Wn(t) { return !!((t = (t || or()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/)) }

        function Kn(t) { t = t || h.window; try { t.close() } catch (t) {} }

        function Qn(t, e, n) { var r = Math.floor(1e9 * Math.random()).toString();
            e = e || 500, n = n || 600; var i = (window.screen.availHeight - n) / 2,
                o = (window.screen.availWidth - e) / 2; for (s in e = { width: e, height: n, top: 0 < i ? i : 0, left: 0 < o ? o : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }, n = or().toLowerCase(), r && (e.target = r, X(n, "crios/") && (e.target = "_blank")), nr(or()) == tr && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), r = window, e = n instanceof wn ? n : Sn(void 0 !== n.href ? n.href : String(n)), n = t.target || n.target, i = [], t) switch (s) {
                case "width":
                case "height":
                case "top":
                case "left":
                    i.push(s + "=" + t[s]); break;
                case "target":
                case "noopener":
                case "noreferrer":
                    break;
                default:
                    i.push(s + "=" + (t[s] ? 1 : 0)) }
            var a, s = i.join(","); if ((tt("iPhone") && !tt("iPod") && !tt("iPad") || tt("iPad") || tt("iPod")) && r.navigator && r.navigator.standalone && n && "_self" != n ? (s = r.document.createElement("A"), e instanceof wn || e instanceof wn || (e = e.na ? e.ma() : String(e), Tn.test(e) || (e = "about:invalid#zClosurez"), e = In(e)), s.href = En(e), s.setAttribute("target", n), t.noreferrer && s.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, r, 1), s.dispatchEvent(t), s = {}) : t.noreferrer ? (s = r.open("", n, s), t = En(e), s && (Wt && X(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), s.opener = null, dn("b/12014412, meta tag with sanitized URL"), t = An(t = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + B(t) + '">'), s.document.write((a = t) instanceof Nn && a.constructor === Nn && a.b === Dn ? a.a : (S("expected object of type SafeHtml, got '" + a + "' of type " + l(a)), "type_error:SafeHtml")), s.document.close())) : (s = r.open(En(e), n, s)) && t.noopener && (s.opener = null), s) try { s.focus() } catch (t) {}
            return s } var Hn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            zn = /^[^@]+@[^@]+$/;

        function Gn() { var e = null; return new pt(function(t) { "complete" == h.document.readyState ? t() : (e = function() { t() }, ve(window, "load", e)) }).s(function(t) { throw be(window, "load", e), t }) }

        function Yn(t) { return t = t || or(), !("file:" !== hr() || !t.toLowerCase().match(/iphone|ipad|ipod|android/)) }

        function Xn() { var t = h.window; try { return !(!t || t == t.top) } catch (t) { return !1 } }

        function Jn() { return "object" != typeof h.window && "function" == typeof h.importScripts }

        function $n() { return Mh.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : Mh.INTERNAL.hasOwnProperty("node") ? "Node" : Jn() ? "Worker" : "Browser" }

        function Zn() { var t = $n(); return "ReactNative" === t || "Node" === t } var tr = "Firefox",
            er = "Chrome";

        function nr(t) { var e = t.toLowerCase(); return X(e, "opera/") || X(e, "opr/") || X(e, "opios/") ? "Opera" : X(e, "iemobile") ? "IEMobile" : X(e, "msie") || X(e, "trident/") ? "IE" : X(e, "edge/") ? "Edge" : X(e, "firefox/") ? tr : X(e, "silk/") ? "Silk" : X(e, "blackberry") ? "Blackberry" : X(e, "webos") ? "Webos" : !X(e, "safari/") || X(e, "chrome/") || X(e, "crios/") || X(e, "android") ? !X(e, "chrome/") && !X(e, "crios/") || X(e, "edge/") ? X(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : er : "Safari" } var rr = { Uc: "FirebaseCore-web", Wc: "FirebaseUI-web" };

        function ir(t, e) { e = e || []; var n, r = [],
                i = {}; for (n in rr) i[rr[n]] = !0; for (n = 0; n < e.length; n++) void 0 !== i[e[n]] && (delete i[e[n]], r.push(e[n])); return r.sort(), (e = r).length || (e = ["FirebaseCore-web"]), "Browser" === (r = $n()) ? r = nr(i = or()) : "Worker" === r && (r = nr(i = or()) + "-" + r), r + "/JsCore/" + t + "/" + e.join(",") }

        function or() { return h.navigator && h.navigator.userAgent || "" }

        function ar(t, e) { t = t.split("."), e = e || h; for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]]; return n != t.length && (e = void 0), e }

        function sr() { try { var t = h.localStorage,
                    e = yr(); if (t) return t.setItem(e, "1"), t.removeItem(e), !Vn() || !!h.indexedDB } catch (t) { return Jn() && !!h.indexedDB } return !1 }

        function ur() { return (cr() || "chrome-extension:" === hr() || Yn()) && !Zn() && sr() && !Jn() }

        function cr() { return "http:" === hr() || "https:" === hr() }

        function hr() { return h.location && h.location.protocol || null }

        function lr(t) { return !Wn(t = t || or()) && nr(t) != tr }

        function fr(t) { return void 0 === t ? null : Ln(t) }

        function pr(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]); return n }

        function dr(t) { if (null !== t) return JSON.parse(t) }

        function yr(t) { return t || Math.floor(1e9 * Math.random()).toString() }

        function mr(t) { return "Safari" != nr(t = t || or()) && !t.toLowerCase().match(/iphone|ipad|ipod/) }

        function gr() { var t = h.___jsl; if (t && t.H)
                for (var e in t.H)
                    if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                        for (var n = 0; n < t.CP.length; n++) t.CP[n] = null }

        function vr(t, e) { if (e < t) throw Error("Short delay should be less than long delay!");
            this.a = t, this.c = e, t = or(), e = $n(), this.b = Wn(t) || "ReactNative" === e }

        function br() { var t = h.document; return !t || void 0 === t.visibilityState || "visible" == t.visibilityState }

        function _r(t) { try { var e = new Date(parseInt(t, 10)); if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString() } catch (t) {} return null }

        function wr() { return !(!ar("fireauth.oauthhelper", h) && !ar("fireauth.iframe", h)) }
        vr.prototype.get = function() { var t = h.navigator; return !t || "boolean" != typeof t.onLine || !cr() && "chrome-extension:" !== hr() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a) }; var Er, Tr = {};

        function Sr(t) { Tr[t] || (Tr[t] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn(t)) } try { var Cr = {};
            Object.defineProperty(Cr, "abcd", { configurable: !0, enumerable: !0, value: 1 }), Object.defineProperty(Cr, "abcd", { configurable: !0, enumerable: !0, value: 2 }), Er = 2 == Cr.abcd } catch (t) { Er = !1 }

        function Ir(t, e, n) { Er ? Object.defineProperty(t, e, { configurable: !0, enumerable: !0, value: n }) : t[e] = n }

        function Nr(t, e) { if (e)
                for (var n in e) e.hasOwnProperty(n) && Ir(t, n, e[n]) }

        function Dr(t) { var e = {}; return Nr(e, t), e }

        function Ar(t) { var e = t; if ("object" == typeof t && null != t)
                for (var n in e = "length" in t ? [] : {}, t) Ir(e, n, Ar(t[n])); return e }

        function kr(t) { var e = {},
                n = t[Or],
                r = t[Pr]; if (!(t = t[Mr]) || t != Rr && !n) throw Error("Invalid provider user info!");
            e[xr] = r || null, e[Lr] = n || null, Ir(this, Ur, t), Ir(this, Fr, Ar(e)) } var Rr = "EMAIL_SIGNIN",
            Or = "email",
            Pr = "newEmail",
            Mr = "requestType",
            Lr = "email",
            xr = "fromEmail",
            Fr = "data",
            Ur = "operation";

        function qr(t, e) { this.code = Br + t, this.message = e || jr[t] || "" }

        function Vr(t) { var e = t && t.code; return e ? new qr(e.substring(Br.length), t.message) : null }
        b(qr, Error), qr.prototype.C = function() { return { code: this.code, message: this.message } }, qr.prototype.toJSON = function() { return this.C() }; var Br = "auth/",
            jr = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-provider-id": "The specified provider ID is invalid.", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal error has occurred.", "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", "rejected-credential": "The request contains malformed or mismatching credentials.", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };

        function Wr(t) { var e = t[Gr]; if (void 0 === e) throw new qr("missing-continue-uri"); if ("string" != typeof e || "string" == typeof e && !e.length) throw new qr("invalid-continue-uri");
            this.h = e, this.b = this.a = null, this.g = !1; var n = t[Kr]; if (n && "object" == typeof n) { e = n[Jr]; var r = n[Yr]; if (n = n[Xr], "string" == typeof e && e.length) { if (this.a = e, void 0 !== r && "boolean" != typeof r) throw new qr("argument-error", Yr + " property must be a boolean when specified."); if (this.g = !!r, void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length)) throw new qr("argument-error", Xr + " property must be a non empty string when specified.");
                    this.b = n || null } else { if (void 0 !== e) throw new qr("argument-error", Jr + " property must be a non empty string when specified."); if (void 0 !== r || void 0 !== n) throw new qr("missing-android-pkg-name") } } else if (void 0 !== n) throw new qr("argument-error", Kr + " property must be a non null object when specified."); if (this.f = null, (e = t[zr]) && "object" == typeof e) { if ("string" == typeof(e = e[$r]) && e.length) this.f = e;
                else if (void 0 !== e) throw new qr("argument-error", $r + " property must be a non empty string when specified.") } else if (void 0 !== e) throw new qr("argument-error", zr + " property must be a non null object when specified."); if (void 0 !== (e = t[Hr]) && "boolean" != typeof e) throw new qr("argument-error", Hr + " property must be a boolean when specified."); if (this.c = !!e, void 0 !== (t = t[Qr]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new qr("argument-error", Qr + " property must be a non empty string when specified.");
            this.i = t || null } var Kr = "android",
            Qr = "dynamicLinkDomain",
            Hr = "handleCodeInApp",
            zr = "iOS",
            Gr = "url",
            Yr = "installApp",
            Xr = "minimumVersion",
            Jr = "packageName",
            $r = "bundleId";

        function Zr(t) { var e = {}; for (var n in e.continueUrl = t.h, e.canHandleCodeInApp = t.c, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b, e.androidInstallApp = t.g), e.iOSBundleId = t.f, e.dynamicLinkDomain = t.i, e) null === e[n] && delete e[n]; return e } var ti = null,
            ei = null;

        function ni(t) { var e = ""; return function(r, t) {
                function e(t) { for (; i < r.length;) { var e = r.charAt(i++),
                            n = ei[e]; if (null != n) return n; if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e) } return t }! function() { if (!ti) { ti = {}, ei = {}; for (var t = 0; t < 65; t++) ti[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), 62 <= (ei[ti[t]] = t) && (ei["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t) } }(); for (var i = 0;;) { var n = e(-1),
                        o = e(0),
                        a = e(64),
                        s = e(64); if (64 === s && -1 === n) break;
                    t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s)) } }(t, function(t) { e += String.fromCharCode(t) }), e }

        function ri(t) { this.c = t.sub, this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null, this.b = !!t.is_anonymous || "anonymous" == this.a }

        function ii(t) { return (t = oi(t)) && t.sub && t.iss && t.aud && t.exp ? new ri(t) : null }

        function oi(t) { if (!t) return null; if (3 != (t = t.split(".")).length) return null; for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += "."; try { return JSON.parse(ni(t)) } catch (t) {} return null }
        ri.prototype.f = function() { return this.b }; var ai, si = { $c: { ab: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", ib: "https://securetoken.googleapis.com/v1/token", id: "p" }, bd: { ab: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", ib: "https://staging-securetoken.sandbox.googleapis.com/v1/token", id: "s" }, cd: { ab: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", ib: "https://test-securetoken.sandbox.googleapis.com/v1/token", id: "t" } };

        function ui(t) { for (var e in si)
                if (si[e].id === t) return { firebaseEndpoint: (t = si[e]).ab, secureTokenEndpoint: t.ib };
            return null }
        ai = ui("__EID__") ? "__EID__" : void 0; var ci = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
            hi = ["client_id", "response_type", "scope", "redirect_uri", "state"],
            li = { Vc: { Ma: "locale", Ba: 500, Aa: 600, Na: "facebook.com", hb: hi }, Xc: { Ma: null, Ba: 500, Aa: 620, Na: "github.com", hb: hi }, Yc: { Ma: "hl", Ba: 515, Aa: 680, Na: "google.com", hb: hi }, dd: { Ma: "lang", Ba: 485, Aa: 705, Na: "twitter.com", hb: ci } };

        function fi(t) { for (var e in li)
                if (li[e].Na == t) return li[e];
            return null }

        function pi(t) { var e = {};
            e["facebook.com"] = vi, e["google.com"] = _i, e["github.com"] = bi, e["twitter.com"] = wi; var n = t && t[yi]; try { if (n) return e[n] ? new e[n](t) : new gi(t); if (void 0 !== t[di]) return new mi(t) } catch (t) {} return null } var di = "idToken",
            yi = "providerId";

        function mi(t) { var e = t[yi]; if (!e && t[di]) { var n = ii(t[di]);
                n && n.a && (e = n.a) } if (!e) throw Error("Invalid additional user info!"); "anonymous" != e && "custom" != e || (e = null), n = !1, void 0 !== t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0), Ir(this, "providerId", e), Ir(this, "isNewUser", n) }

        function gi(t) { mi.call(this, t), Ir(this, "profile", Ar((t = dr(t.rawUserInfo || "{}")) || {})) }

        function vi(t) { if (gi.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!") }

        function bi(t) { if (gi.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
            Ir(this, "username", this.profile && this.profile.login || null) }

        function _i(t) { if (gi.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!") }

        function wi(t) { if (gi.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
            Ir(this, "username", t.screenName || null) }

        function Ei(t) { this.a = He(t) }

        function Ti(t) { var e = He(t),
                n = Qe(e, "link"),
                r = Qe(He(n), "link"); return Qe(He(e = Qe(e, "deep_link_id")), "link") || e || r || n || t }

        function Si(t, n) { return t.then(function(t) { if (t[sa]) { var e = ii(t[sa]); if (!e || n != e.c) throw new qr("user-mismatch"); return t } throw new qr("user-mismatch") }).s(function(t) { throw t && t.code && t.code == Br + "user-not-found" ? new qr("user-mismatch") : t }) }

        function Ci(t, e) { if (!e) throw new qr("internal-error", "failed to construct a credential");
            this.a = e, Ir(this, "providerId", t), Ir(this, "signInMethod", t) }

        function Ii(t) { return { pendingToken: t.a, requestUri: "http://localhost" } }

        function Ni(t, e, n) { if (this.a = null, e.idToken || e.accessToken) e.idToken && Ir(this, "idToken", e.idToken), e.accessToken && Ir(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Ir(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
            else { if (!e.oauthToken || !e.oauthTokenSecret) throw new qr("internal-error", "failed to construct a credential");
                Ir(this, "accessToken", e.oauthToken), Ir(this, "secret", e.oauthTokenSecret) }
            Ir(this, "providerId", t), Ir(this, "signInMethod", n) }

        function Di(t) { var e = {}; return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = { postBody: on(e).toString(), requestUri: "http://localhost" }, t.a && (delete e.postBody, e.pendingToken = t.a), e }

        function Ai(t, e) { this.Dc = e || [], Nr(this, { providerId: t, isOAuthProvider: !0 }), this.yb = {}, this.cb = (fi(t) || {}).Ma || null, this.$a = null }

        function ki(t) { if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new qr("argument-error", 'SAML provider IDs must be prefixed with "saml."');
            Ai.call(this, t, []) }

        function Ri(t) { Ai.call(this, t, hi), this.a = [] }

        function Oi() { Ri.call(this, "facebook.com") }

        function Pi(t) { if (!t) throw new qr("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return d(t) && (e = t.accessToken), (new Oi).credential(null, e) }

        function Mi() { Ri.call(this, "github.com") }

        function Li(t) { if (!t) throw new qr("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return d(t) && (e = t.accessToken), (new Mi).credential(null, e) }

        function xi() { Ri.call(this, "google.com"), this.ua("profile") }

        function Fi(t, e) { var n = t; return d(t) && (n = t.idToken, e = t.accessToken), (new xi).credential(n, e) }

        function Ui() { Ai.call(this, "twitter.com", ci) }

        function qi(t, e) { var n = t; if (d(n) || (n = { oauthToken: t, oauthTokenSecret: e }), !n.oauthToken || !n.oauthTokenSecret) throw new qr("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret)."); return new Ni("twitter.com", n, "twitter.com") }

        function Vi(t, e, n) { this.a = t, this.c = e, Ir(this, "providerId", "password"), Ir(this, "signInMethod", n === Bi.EMAIL_LINK_SIGN_IN_METHOD ? Bi.EMAIL_LINK_SIGN_IN_METHOD : Bi.EMAIL_PASSWORD_SIGN_IN_METHOD) }

        function Bi() { Nr(this, { providerId: "password", isOAuthProvider: !1 }) }

        function ji(t, e) { if (!(e = Wi(e))) throw new qr("argument-error", "Invalid email link!"); return new Vi(t, e, Bi.EMAIL_LINK_SIGN_IN_METHOD) }

        function Wi(t) { var e = Qe((t = new Ei(t = Ti(t))).a, "oobCode") || null; return "signIn" === (Qe(t.a, "mode") || null) && e ? e : null }

        function Ki(t) { if (!(t.Ta && t.Sa || t.Fa && t.$)) throw new qr("internal-error");
            this.a = t, Ir(this, "providerId", "phone"), Ir(this, "signInMethod", "phone") }

        function Qi(t) { return t.a.Fa && t.a.$ ? { temporaryProof: t.a.Fa, phoneNumber: t.a.$ } : { sessionInfo: t.a.Ta, code: t.a.Sa } }

        function Hi(t) { try { this.a = t || Mh.auth() } catch (t) { throw new qr("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().") }
            Nr(this, { providerId: "phone", isOAuthProvider: !1 }) }

        function zi(t, e) { if (!t) throw new qr("missing-verification-id"); if (!e) throw new qr("missing-verification-code"); return new Ki({ Ta: t, Sa: e }) }

        function Gi(t) { if (t.temporaryProof && t.phoneNumber) return new Ki({ Fa: t.temporaryProof, $: t.phoneNumber }); var e = t && t.providerId; if (!e || "password" === e) return null; var n = t && t.oauthAccessToken,
                r = t && t.oauthTokenSecret,
                i = t && t.nonce,
                o = t && t.oauthIdToken,
                a = t && t.pendingToken; try { switch (e) {
                    case "google.com":
                        return Fi(o, n);
                    case "facebook.com":
                        return Pi(n);
                    case "github.com":
                        return Li(n);
                    case "twitter.com":
                        return qi(n, r);
                    default:
                        return n || r || o || a ? a ? 0 == e.indexOf("saml.") ? new Ci(e, a) : new Ni(e, { pendingToken: a, idToken: t.oauthIdToken, accessToken: t.oauthAccessToken }, e) : new Ri(e).credential(o, n, i) : null } } catch (t) { return null } }

        function Yi(t) { if (!t.isOAuthProvider) throw new qr("invalid-oauth-provider") }

        function Xi(t, e, n, r, i, o) { if (this.b = t, this.c = e || null, this.f = n || null, this.g = r || null, this.h = o || null, this.a = i || null, !this.f && !this.a) throw new qr("invalid-auth-event"); if (this.f && this.a) throw new qr("invalid-auth-event"); if (this.f && !this.g) throw new qr("invalid-auth-event") }

        function Ji(t) { return (t = t || {}).type ? new Xi(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && Vr(t.error), t.postBody) : null }

        function $i() { this.b = null, this.a = [] }
        b(gi, mi), b(vi, gi), b(bi, gi), b(_i, gi), b(wi, gi), Ci.prototype.la = function(t) { return Ca(t, Ii(this)) }, Ci.prototype.b = function(t, e) { var n = Ii(this); return n.idToken = e, Ia(t, n) }, Ci.prototype.f = function(t, e) { return Si(Na(t, Ii(this)), e) }, Ci.prototype.C = function() { return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a } }, Ni.prototype.la = function(t) { return Ca(t, Di(this)) }, Ni.prototype.b = function(t, e) { var n = Di(this); return n.idToken = e, Ia(t, n) }, Ni.prototype.f = function(t, e) { return Si(Na(t, Di(this)), e) }, Ni.prototype.C = function() { var t = { providerId: this.providerId, signInMethod: this.signInMethod }; return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t }, Ai.prototype.Da = function(t) { return this.yb = rt(t), this }, b(ki, Ai), b(Ri, Ai), Ri.prototype.ua = function(t) { return M(this.a, t) || this.a.push(t), this }, Ri.prototype.Eb = function() { return U(this.a) }, Ri.prototype.credential = function(t, e, n) { if (!t && !e) throw new qr("argument-error", "credential failed: must provide the ID token and/or the access token."); return new Ni(this.providerId, { idToken: t || null, accessToken: e || null, nonce: n || null }, this.providerId) }, b(Oi, Ri), Ir(Oi, "PROVIDER_ID", "facebook.com"), Ir(Oi, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), b(Mi, Ri), Ir(Mi, "PROVIDER_ID", "github.com"), Ir(Mi, "GITHUB_SIGN_IN_METHOD", "github.com"), b(xi, Ri), Ir(xi, "PROVIDER_ID", "google.com"), Ir(xi, "GOOGLE_SIGN_IN_METHOD", "google.com"), b(Ui, Ai), Ir(Ui, "PROVIDER_ID", "twitter.com"), Ir(Ui, "TWITTER_SIGN_IN_METHOD", "twitter.com"), Vi.prototype.la = function(t) { return this.signInMethod == Bi.EMAIL_LINK_SIGN_IN_METHOD ? ns(t, La, { email: this.a, oobCode: this.c }) : ns(t, $a, { email: this.a, password: this.c }) }, Vi.prototype.b = function(t, e) { return this.signInMethod == Bi.EMAIL_LINK_SIGN_IN_METHOD ? ns(t, xa, { idToken: e, email: this.a, oobCode: this.c }) : ns(t, Ha, { idToken: e, email: this.a, password: this.c }) }, Vi.prototype.f = function(t, e) { return Si(this.la(t), e) }, Vi.prototype.C = function() { return { email: this.a, password: this.c, signInMethod: this.signInMethod } }, Nr(Bi, { PROVIDER_ID: "password" }), Nr(Bi, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }), Nr(Bi, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }), Ki.prototype.la = function(t) { return t.Ua(Qi(this)) }, Ki.prototype.b = function(t, e) { var n = Qi(this); return n.idToken = e, ns(t, ts, n) }, Ki.prototype.f = function(t, e) { var n = Qi(this); return n.operation = "REAUTH", Si(t = ns(t, es, n), e) }, Ki.prototype.C = function() { var t = { providerId: "phone" }; return this.a.Ta && (t.verificationId = this.a.Ta), this.a.Sa && (t.verificationCode = this.a.Sa), this.a.Fa && (t.temporaryProof = this.a.Fa), this.a.$ && (t.phoneNumber = this.a.$), t }, Hi.prototype.Ua = function(r, i) { var o = this.a.b; return _t(i.verify()).then(function(t) { if (!c(t)) throw new qr("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."); switch (i.type) {
                    case "recaptcha":
                        return (e = o, n = { phoneNumber: r, recaptchaToken: t }, ns(e, Ka, n)).then(function(t) { return "function" == typeof i.reset && i.reset(), t }, function(t) { throw "function" == typeof i.reset && i.reset(), t });
                    default:
                        throw new qr("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.') } var e, n }) }, Nr(Hi, { PROVIDER_ID: "phone" }), Nr(Hi, { PHONE_SIGN_IN_METHOD: "phone" }), Xi.prototype.C = function() { return { type: this.b, eventId: this.c, urlResponse: this.f, sessionId: this.g, postBody: this.h, error: this.a && this.a.C() } }; var Zi, to = null;

        function eo(t) { var e = "unauthorized-domain",
                n = void 0,
                r = He(t);
            t = r.b, "chrome-extension" == (r = r.c) ? n = q("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == r || "https" == r ? n = q("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", qr.call(this, e, n) }

        function no(t, e, n) { qr.call(this, t, n), (t = e || {}).zb && Ir(this, "email", t.zb), t.$ && Ir(this, "phoneNumber", t.$), t.credential && Ir(this, "credential", t.credential) }

        function ro(t) { if (t.code) { var e = t.code || "";
                0 == e.indexOf(Br) && (e = e.substring(Br.length)); var n = { credential: Gi(t) }; if (t.email) n.zb = t.email;
                else if (t.phoneNumber) n.$ = t.phoneNumber;
                else if (!n.credential) return new qr(e, t.message || void 0); return new no(e, n, t.message) } return null }

        function io() {}

        function oo(t) { return t.c || (t.c = t.b()) }

        function ao() {}

        function so(t) { if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f; for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) { var r = e[n]; try { return new ActiveXObject(r), t.f = r } catch (t) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed") }

        function uo() {}

        function co() { this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseText = "", this.status = -1, this.statusText = "", this.a.onload = m(this.ec, this), this.a.onerror = m(this.Fb, this), this.a.onprogress = m(this.fc, this), this.a.ontimeout = m(this.ic, this) }

        function ho(t, e) { t.readyState = e, t.onreadystatechange && t.onreadystatechange() }

        function lo(t, e, n) { this.reset(t, e, n, void 0, void 0) }

        function fo(t) { this.f = t, this.b = this.c = this.a = null }

        function po(t, e) { this.name = t, this.value = e }
        $i.prototype.subscribe = function(t) { var n = this;
            this.a.push(t), this.b || (this.b = function(t) { for (var e = 0; e < n.a.length; e++) n.a[e](t) }, "function" == typeof(t = ar("universalLinks.subscribe", h)) && t(null, this.b)) }, $i.prototype.unsubscribe = function(e) { x(this.a, function(t) { return t == e }) }, b(eo, qr), b(no, qr), no.prototype.C = function() { var t = { code: this.code, message: this.message };
            this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber); var e = this.credential && this.credential.C(); return e && st(t, e), t }, no.prototype.toJSON = function() { return this.C() }, io.prototype.c = null, b(ao, io), ao.prototype.a = function() { var t = so(this); return t ? new ActiveXObject(t) : new XMLHttpRequest }, ao.prototype.b = function() { var t = {}; return so(this) && (t[0] = !0, t[1] = !0), t }, Zi = new ao, b(uo, io), uo.prototype.a = function() { var t = new XMLHttpRequest; if ("withCredentials" in t) return t; if ("undefined" != typeof XDomainRequest) return new co; throw Error("Unsupported browser") }, uo.prototype.b = function() { return {} }, (t = co.prototype).open = function(t, e, n) { if (null != n && !n) throw Error("Only async requests are supported.");
            this.a.open(t, e) }, t.send = function(t) { if (t) { if ("string" != typeof t) throw Error("Only string data is supported");
                this.a.send(t) } else this.a.send() }, t.abort = function() { this.a.abort() }, t.setRequestHeader = function() {}, t.getResponseHeader = function(t) { return "content-type" == t.toLowerCase() ? this.a.contentType : "" }, t.ec = function() { this.status = 200, this.responseText = this.a.responseText, ho(this, 4) }, t.Fb = function() { this.status = 500, this.responseText = "", ho(this, 4) }, t.ic = function() { this.Fb() }, t.fc = function() { this.status = 200, ho(this, 1) }, t.getAllResponseHeaders = function() { return "content-type: " + this.a.contentType }, lo.prototype.a = null, lo.prototype.reset = function(t, e, n, r, i) { delete this.a }, po.prototype.toString = function() { return this.name }; var yo = new po("SEVERE", 1e3),
            mo = new po("WARNING", 900),
            go = new po("CONFIG", 700),
            vo = new po("FINE", 500);
        fo.prototype.log = function(t, e, n) { if (t.value >= function t(e) { return e.c ? e.c : e.a ? t(e.a) : (S("Root logger has no level set."), null) }(this).value)
                for (a(e) && (e = e()), t = new lo(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a }; var bo, _o = {},
            wo = null;

        function Eo(t) { var e; if (wo || (wo = new fo(""), (_o[""] = wo).c = go), !(e = _o[t])) { e = new fo(t); var n = t.lastIndexOf("."),
                    r = t.substr(n + 1);
                (n = Eo(t.substr(0, n))).b || (n.b = {}), (n.b[r] = e).a = n, _o[t] = e } return e }

        function To(t, e) { t && t.log(vo, e, void 0) }

        function So(t) { this.f = t }

        function Co(t) { De.call(this), this.i = t, this.readyState = Io, this.status = 0, this.responseText = this.statusText = "", this.onreadystatechange = null, this.g = new Headers, this.b = null, this.h = "GET", this.c = "", this.a = !1, this.f = Eo("goog.net.FetchXmlHttp") }
        b(So, io), So.prototype.a = function() { return new Co(this.f) }, So.prototype.b = (bo = {}, function() { return bo }), b(Co, De); var Io = 0;

        function No(t) { t.onreadystatechange && t.onreadystatechange.call(t) }

        function Do(t) { De.call(this), this.headers = new xe, this.D = t || null, this.c = !1, this.w = this.a = null, this.h = this.N = this.m = "", this.f = this.I = this.i = this.G = !1, this.g = 0, this.u = null, this.o = Ao, this.v = this.O = !1 }(t = Co.prototype).open = function(t, e) { if (this.readyState != Io) throw this.abort(), Error("Error reopening a connection");
            this.h = t, this.c = e, this.readyState = 1, No(this) }, t.send = function(t) { if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
            this.a = !0; var e = { headers: this.g, method: this.h, credentials: void 0, cache: void 0 };
            t && (e.body = t), this.i.fetch(new Request(this.c, e)).then(this.hc.bind(this), this.Gb.bind(this)) }, t.abort = function() { this.responseText = "", this.g = new Headers, this.status = 0, 1 <= this.readyState && this.a && 4 != this.readyState && (this.readyState = 4, this.a = !1, No(this)), this.readyState = Io }, t.hc = function(t) { this.a && (this.b || (this.b = t.headers, this.readyState = 2, No(this)), this.a && (this.readyState = 3, No(this), this.a && t.text().then(this.gc.bind(this, t), this.Gb.bind(this)))) }, t.gc = function(t, e) { this.a && (this.status = t.status, this.statusText = t.statusText, this.responseText = e, this.readyState = 4, No(this)) }, t.Gb = function(t) { var e = this.f;
            e && e.log(mo, "Failed to fetch url " + this.c, t instanceof Error ? t : Error(t)), this.a && (this.readyState = 4, No(this)) }, t.setRequestHeader = function(t, e) { this.g.append(t, e) }, t.getResponseHeader = function(t) { return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.f) && t.log(mo, "Attempting to get response header but no headers have been received for url: " + this.c, void 0), "") }, t.getAllResponseHeaders = function() { if (!this.b) { var t = this.f; return t && t.log(mo, "Attempting to get all response headers but no headers have been received for url: " + this.c, void 0), "" }
            t = []; for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next(); return t.join("\r\n") }, b(Do, De); var Ao = "";
        Do.prototype.b = Eo("goog.net.XhrIo"); var ko = /^https?$/i,
            Ro = ["POST", "PUT"];

        function Oo(e, t, n, r, i) { if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.m + "; newUri=" + t);
            n = n ? n.toUpperCase() : "GET", e.m = t, e.h = "", e.N = n, e.G = !1, e.c = !0, e.a = e.D ? e.D.a() : Zi.a(), e.w = e.D ? oo(e.D) : oo(Zi), e.a.onreadystatechange = m(e.Jb, e); try { To(e.b, Bo(e, "Opening Xhr")), e.I = !0, e.a.open(n, String(t), !0), e.I = !1 } catch (t) { return To(e.b, Bo(e, "Error opening Xhr: " + t.message)), void Mo(e, t) }
            t = r || ""; var o, a = new xe(e.headers);
            i && function(t, e) { if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                else if (p(t) || c(t)) R(t, e, void 0);
                else
                    for (var n = Le(t), r = Me(t), i = r.length, o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t) }(i, function(t, e) { a.set(e, t) }), i = function(t) { t: { for (var e = Po, n = t.length, r = c(t) ? t.split("") : t, i = 0; i < n; i++)
                        if (i in r && e.call(void 0, r[i], i, t)) { e = i; break t }
                    e = -1 } return e < 0 ? null : c(t) ? t.charAt(e) : t[e] }(a.U()), r = h.FormData && t instanceof h.FormData, !M(Ro, n) || i || r || a.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, e), e.o && (e.a.responseType = e.o), "withCredentials" in e.a && e.a.withCredentials !== e.O && (e.a.withCredentials = e.O); try { Uo(e), 0 < e.g && (e.v = (o = e.a, Bt && $t(9) && "number" == typeof o.timeout && void 0 !== o.ontimeout), To(e.b, Bo(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.v)), e.v ? (e.a.timeout = e.g, e.a.ontimeout = m(e.Ga, e)) : e.u = Oe(e.Ga, e.g, e)), To(e.b, Bo(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1 } catch (t) { To(e.b, Bo(e, "Send error: " + t.message)), Mo(e, t) } }

        function Po(t) { return "content-type" == t.toLowerCase() }

        function Mo(t, e) { t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, Lo(t), Fo(t) }

        function Lo(t) { t.G || (t.G = !0, t.dispatchEvent("complete"), t.dispatchEvent("error")) }

        function xo(e) { if (e.c && void 0 !== u)
                if (e.w[1] && 4 == qo(e) && 2 == Vo(e)) To(e.b, Bo(e, "Local request error detected and ignored"));
                else if (e.i && 4 == qo(e)) Oe(e.Jb, 0, e);
            else if (e.dispatchEvent("readystatechange"), 4 == qo(e)) { To(e.b, Bo(e, "Request complete")), e.c = !1; try { var t, n = Vo(e);
                    t: switch (n) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var r = !0; break t;
                        default:
                            r = !1 }
                    if (!(t = r)) { var i; if (i = 0 === n) { var o = String(e.m).match(qe)[1] || null; if (!o && h.self && h.self.location) { var a = h.self.location.protocol;
                                o = a.substr(0, a.length - 1) }
                            i = !ko.test(o ? o.toLowerCase() : "") }
                        t = i } if (t) e.dispatchEvent("complete"), e.dispatchEvent("success");
                    else { try { var s = 2 < qo(e) ? e.a.statusText : "" } catch (t) { To(e.b, "Can not get status: " + t.message), s = "" }
                        e.h = s + " [" + Vo(e) + "]", Lo(e) } } finally { Fo(e) } } }

        function Fo(e, t) { if (e.a) { Uo(e); var n = e.a,
                    r = e.w[0] ? o : null;
                e.a = null, e.w = null, t || e.dispatchEvent("ready"); try { n.onreadystatechange = r } catch (t) {
                    (e = e.b) && e.log(yo, "Problem encountered resetting onreadystatechange: " + t.message, void 0) } } }

        function Uo(t) { t.a && t.v && (t.a.ontimeout = null), t.u && (h.clearTimeout(t.u), t.u = null) }

        function qo(t) { return t.a ? t.a.readyState : 0 }

        function Vo(t) { try { return 2 < qo(t) ? t.a.status : -1 } catch (t) { return -1 } }

        function Bo(t, e) { return e + " [" + t.N + " " + t.m + " " + Vo(t) + "]" }

        function jo(t, e) { this.g = [], this.v = t, this.u = e || null, this.f = this.a = !1, this.c = void 0, this.m = this.w = this.i = !1, this.h = 0, this.b = null, this.l = 0 }

        function Wo(t, e, n) { t.a = !0, t.c = n, t.f = !e, zo(t) }

        function Ko(t) { if (t.a) { if (!t.m) throw new Go(t);
                t.m = !1 } }

        function Qo(t, e, n, r) { t.g.push([e, n, r]), t.a && zo(t) }

        function Ho(t) { return P(t.g, function(t) { return a(t[1]) }) }

        function zo(e) { if (e.h && e.a && Ho(e)) { var n = e.h,
                    r = Jo[n];
                r && (h.clearTimeout(r.a), delete Jo[n]), e.h = 0 }
            e.b && (e.b.l--, delete e.b), n = e.c; for (var t = r = !1; e.g.length && !e.i;) { var i = e.g.shift(),
                    o = i[0],
                    a = i[1]; if (i = i[2], o = e.f ? a : o) try { var s = o.call(i || e.u, n);
                    void 0 !== s && (e.f = e.f && (s == n || s instanceof Error), e.c = n = s), (w(n) || "function" == typeof h.Promise && n instanceof h.Promise) && (t = !0, e.i = !0) } catch (t) { n = t, e.f = !0, Ho(e) || (r = !0) } }
            e.c = n, t && (s = m(e.o, e, !0), t = m(e.o, e, !1), n instanceof jo ? (Qo(n, s, t), n.w = !0) : n.then(s, t)), r && (n = new Xo(n), Jo[n.a] = n, e.h = n.a) }

        function Go() { E.call(this) }

        function Yo() { E.call(this) }

        function Xo(t) { this.a = h.setTimeout(m(this.c, this), 0), this.b = t }(t = Do.prototype).Ga = function() { void 0 !== u && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", To(this.b, Bo(this, this.h)), this.dispatchEvent("timeout"), this.abort(8)) }, t.abort = function() { this.a && this.c && (To(this.b, Bo(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fo(this)) }, t.va = function() { this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), Fo(this, !0)), Do.ob.va.call(this) }, t.Jb = function() { this.qa || (this.I || this.i || this.f ? xo(this) : this.wc()) }, t.wc = function() { xo(this) }, t.getResponse = function() { try { if (!this.a) return null; if ("response" in this.a) return this.a.response; switch (this.o) {
                    case Ao:
                    case "text":
                        return this.a.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer } var t = this.b; return t && t.log(yo, "Response type " + this.o + " is not supported on this browser", void 0), null } catch (t) { return To(this.b, "Can not get response: " + t.message), null } }, jo.prototype.cancel = function(t) { if (this.a) this.c instanceof jo && this.c.cancel();
            else { if (this.b) { var e = this.b;
                    delete this.b, t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel()) }
                this.v ? this.v.call(this.u, this) : this.m = !0, this.a || (t = new Yo(this), Ko(this), Wo(this, !1, t)) } }, jo.prototype.o = function(t, e) { this.i = !1, Wo(this, t, e) }, jo.prototype.D = function() { Ko(this), Wo(this, !0, null) }, jo.prototype.then = function(t, e, n) { var r, i, o = new pt(function(t, e) { r = t, i = e }); return Qo(this, r, function(t) { t instanceof Yo ? o.cancel() : i(t) }), o.then(t, e, n) }, _(jo), b(Go, E), Go.prototype.message = "Deferred has already fired", Go.prototype.name = "AlreadyCalledError", b(Yo, E), Yo.prototype.message = "Deferred was canceled", Yo.prototype.name = "CanceledError", Xo.prototype.c = function() { throw delete Jo[this.a], this.b }; var Jo = {};

        function $o(t) { var e, n, r, i = document,
                o = mn(t),
                a = document.createElement("SCRIPT"),
                s = { Lb: a, Ga: void 0 },
                u = new jo(Zo, s); return e = window.setTimeout(function() { ta(a, !0); var t = new ra(na, "Timeout reached for loading script " + o);
                Ko(u), Wo(u, !1, t) }, 5e3), s.Ga = e, a.onload = a.onreadystatechange = function() { a.readyState && "loaded" != a.readyState && "complete" != a.readyState || (ta(a, !1, e), u.D()) }, a.onerror = function() { ta(a, !0, e); var t = new ra(ea, "Error while loading script " + o);
                Ko(u), Wo(u, !1, t) }, st(s = {}, { type: "text/javascript", charset: "UTF-8" }), Rn(a, s), a.src = mn(t), (n = i, (r = (n || document).getElementsByTagName("HEAD")) && 0 != r.length ? r[0] : n.documentElement).appendChild(a), u }

        function Zo() { if (this && this.Lb) { var t = this.Lb;
                t && "SCRIPT" == t.tagName && ta(t, !0, this.Ga) } }

        function ta(t, e, n) { null != n && h.clearTimeout(n), t.onload = o, t.onerror = o, t.onreadystatechange = o, e && window.setTimeout(function() { t && t.parentNode && t.parentNode.removeChild(t) }, 0) } var ea = 0,
            na = 1;

        function ra(t, e) { var n = "Jsloader error (code #" + t + ")";
            e && (n += ": " + e), E.call(this, n), this.code = t }

        function ia(t) { this.f = t }

        function oa(t, e, n) { if (this.b = t, t = e || {}, this.i = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.l = t.secureTokenTimeout || ua, this.f = rt(t.secureTokenHeaders || ca), this.g = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.h = t.firebaseTimeout || ha, this.a = rt(t.firebaseHeaders || la), n && (this.a["X-Client-Version"] = n, this.f["X-Client-Version"] = n), n = "Node" == $n(), !(n = h.XMLHttpRequest || n && Mh.INTERNAL.node && Mh.INTERNAL.node.XMLHttpRequest) && !Jn()) throw new qr("internal-error", "The XMLHttpRequest compatibility library was not found.");
            this.c = void 0, Jn() ? this.c = new So(self) : Zn() ? this.c = new ia(n) : this.c = new uo }
        b(ra, E), b(ia, io), ia.prototype.a = function() { return new this.f }, ia.prototype.b = function() { return {} }; var aa, sa = "idToken",
            ua = new vr(3e4, 6e4),
            ca = { "Content-Type": "application/x-www-form-urlencoded" },
            ha = new vr(3e4, 6e4),
            la = { "Content-Type": "application/json" };

        function fa(t, e) { e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"] }

        function pa(t, e) { e ? (t.a["X-Client-Version"] = e, t.f["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.f["X-Client-Version"]) }

        function da(t, e, n, r, i, o, a) { var s;
            (t = !((s = nr(s = or()) != er ? null : (s = s.match(/\sChrome\/(\d+)/i)) && 2 == s.length ? parseInt(s[1], 10) : null) && s < 30 || Bt && Xt && !(9 < Xt)) || Jn() ? m(t.o, t) : (aa || (aa = new pt(function(t, e) {! function(t, e) { if (((window.gapi || {}).client || {}).request) t();
                    else { h[ma] = function() {
                            ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED")) }; var n = gn(ya, { onload: ma });
                        Qo($o(n), null, function() { e(Error("CORS_UNSUPPORTED")) }, void 0) } }(t, e) })), m(t.m, t)))(e, n, r, i, o, a) }
        oa.prototype.o = function(t, n, e, r, i, o) { if (Jn() && (void 0 === h.fetch || void 0 === h.Headers || void 0 === h.Request)) throw new qr("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."); var a = new Do(this.c); if (o) { a.g = Math.max(0, o); var s = setTimeout(function() { a.dispatchEvent("timeout") }, o) }
            Ae(a, "complete", function() { s && clearTimeout(s); var e = null; try { e = JSON.parse(function(e) { try { return e.a ? e.a.responseText : "" } catch (t) { return To(e.b, "Can not get responseText: " + t.message), "" } }(this)) || null } catch (t) { e = null }
                n && n(e) }), ke(a, "ready", function() { s && clearTimeout(s), xt(this) }), ke(a, "timeout", function() { s && clearTimeout(s), xt(this), n && n(null) }), Oo(a, t, e, r, i) }; var ya = dn("https://apis.google.com/js/client.js?onload=%{onload}"),
            ma = "__fcb" + Math.floor(1e6 * Math.random()).toString();

        function ga(t) { if (!c(t = t.email) || !zn.test(t)) throw new qr("invalid-email") }

        function va(t) { "email" in t && ga(t) }

        function ba(t) { if (!t[sa]) throw new qr("internal-error") }

        function _a(t) { if (t.phoneNumber || t.temporaryProof) { if (!t.phoneNumber || !t.temporaryProof) throw new qr("internal-error") } else { if (!t.sessionInfo) throw new qr("missing-verification-id"); if (!t.code) throw new qr("missing-verification-code") } }
        oa.prototype.m = function(t, n, r, i, o) { var a = this;
            aa.then(function() { window.gapi.client.setApiKey(a.b); var e = window.gapi.auth.getToken();
                window.gapi.auth.setToken(null), window.gapi.client.request({ path: t, method: r, body: i, headers: o, authType: "none", callback: function(t) { window.gapi.auth.setToken(e), n && n(t) } }) }).s(function(t) { n && n({ error: { message: t && t.message || "CORS_UNSUPPORTED" } }) }) }, oa.prototype.Qa = function() { return ns(this, za, {}) }, oa.prototype.pb = function(t, e) { return ns(this, Qa, { idToken: t, email: e }) }, oa.prototype.qb = function(t, e) { return ns(this, Ha, { idToken: t, password: e }) }; var wa = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };

        function Ea(t) { if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new qr("internal-error") }

        function Ta(t, e) { return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (sn(t = new nn(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e }

        function Sa(t) { var e = null; if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = ro(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = ro(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = ro(t)) : t.errorMessage && (e = rs(t.errorMessage)), e) throw e; if (!t[sa]) throw new qr("internal-error") }

        function Ca(t, e) { return e.returnIdpCredential = !0, ns(t, Ga, e) }

        function Ia(t, e) { return e.returnIdpCredential = !0, ns(t, Xa, e) }

        function Na(t, e) { return e.returnIdpCredential = !0, e.autoCreate = !1, ns(t, Ya, e) }

        function Da(t) { if (!t.oobCode) throw new qr("invalid-action-code") }(t = oa.prototype).rb = function(t, r) { var i = { idToken: t },
                o = []; return et(wa, function(t, e) { var n = r[e];
                null === n ? o.push(t) : e in r && (i[e] = n) }), o.length && (i.deleteAttribute = o), ns(this, Qa, i) }, t.kb = function(t, e) { return st(t = { requestType: "PASSWORD_RESET", email: t }, e), ns(this, Va, t) }, t.lb = function(t, e) { return st(t = { requestType: "EMAIL_SIGNIN", email: t }, e), ns(this, Ua, t) }, t.jb = function(t, e) { return st(t = { requestType: "VERIFY_EMAIL", idToken: t }, e), ns(this, qa, t) }, t.Ua = function(t) { return ns(this, Za, t) }, t.Za = function(t, e) { return ns(this, Wa, { oobCode: t, newPassword: e }) }, t.Ja = function(t) { return ns(this, ka, { oobCode: t }) }, t.Wa = function(t) { return ns(this, Aa, { oobCode: t }) }; var Aa = { endpoint: "setAccountInfo", B: Da, da: "email" },
            ka = { endpoint: "resetPassword", B: Da, J: function(t) { var e = t.requestType; if (!e || !t.email && "EMAIL_SIGNIN" != e) throw new qr("internal-error") } },
            Ra = { endpoint: "signupNewUser", B: function(t) { if (ga(t), !t.password) throw new qr("weak-password") }, J: ba, R: !0 },
            Oa = { endpoint: "createAuthUri" },
            Pa = { endpoint: "deleteAccount", T: ["idToken"] },
            Ma = { endpoint: "setAccountInfo", T: ["idToken", "deleteProvider"], B: function(t) { if (!f(t.deleteProvider)) throw new qr("internal-error") } },
            La = { endpoint: "emailLinkSignin", T: ["email", "oobCode"], B: ga, J: ba, R: !0 },
            xa = { endpoint: "emailLinkSignin", T: ["idToken", "email", "oobCode"], B: ga, J: ba, R: !0 },
            Fa = { endpoint: "getAccountInfo" },
            Ua = { endpoint: "getOobConfirmationCode", T: ["requestType"], B: function(t) { if ("EMAIL_SIGNIN" != t.requestType) throw new qr("internal-error");
                    ga(t) }, da: "email" },
            qa = { endpoint: "getOobConfirmationCode", T: ["idToken", "requestType"], B: function(t) { if ("VERIFY_EMAIL" != t.requestType) throw new qr("internal-error") }, da: "email" },
            Va = { endpoint: "getOobConfirmationCode", T: ["requestType"], B: function(t) { if ("PASSWORD_RESET" != t.requestType) throw new qr("internal-error");
                    ga(t) }, da: "email" },
            Ba = { ub: !0, endpoint: "getProjectConfig", Ib: "GET" },
            ja = { ub: !0, endpoint: "getRecaptchaParam", Ib: "GET", J: function(t) { if (!t.recaptchaSiteKey) throw new qr("internal-error") } },
            Wa = { endpoint: "resetPassword", B: Da, da: "email" },
            Ka = { endpoint: "sendVerificationCode", T: ["phoneNumber", "recaptchaToken"], da: "sessionInfo" },
            Qa = { endpoint: "setAccountInfo", T: ["idToken"], B: va, R: !0 },
            Ha = { endpoint: "setAccountInfo", T: ["idToken"], B: function(t) { if (va(t), !t.password) throw new qr("weak-password") }, J: ba, R: !0 },
            za = { endpoint: "signupNewUser", J: ba, R: !0 },
            Ga = { endpoint: "verifyAssertion", B: Ea, Oa: Ta, J: Sa, R: !0 },
            Ya = { endpoint: "verifyAssertion", B: Ea, Oa: Ta, J: function(t) { if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new qr("user-not-found"); if (t.errorMessage) throw rs(t.errorMessage); if (!t[sa]) throw new qr("internal-error") }, R: !0 },
            Xa = { endpoint: "verifyAssertion", B: function(t) { if (Ea(t), !t.idToken) throw new qr("internal-error") }, Oa: Ta, J: Sa, R: !0 },
            Ja = { endpoint: "verifyCustomToken", B: function(t) { if (!t.token) throw new qr("invalid-custom-token") }, J: ba, R: !0 },
            $a = { endpoint: "verifyPassword", B: function(t) { if (ga(t), !t.password) throw new qr("wrong-password") }, J: ba, R: !0 },
            Za = { endpoint: "verifyPhoneNumber", B: _a, J: ba },
            ts = { endpoint: "verifyPhoneNumber", B: function(t) { if (!t.idToken) throw new qr("internal-error");
                    _a(t) }, J: function(t) { if (t.temporaryProof) throw t.code = "credential-already-in-use", ro(t);
                    ba(t) } },
            es = { Xb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", B: _a, J: ba };

        function ns(t, e, n) { if (! function(t, e) { if (!e || !e.length) return !0; if (!t) return !1; for (var n = 0; n < e.length; n++) { var r = t[e[n]]; if (null == r || "" === r) return !1 } return !0 }(n, e.T)) return wt(new qr("internal-error")); var r, i = e.Ib || "POST"; return _t(n).then(e.B).then(function() { return e.R && (n.returnSecureToken = !0),
                    function(t, e, r, i, o, n) { var a = He(t.g + e);
                        Ke(a, "key", t.b), n && Ke(a, "cb", v().toString()); var s = "GET" == r; if (s)
                            for (var u in i) i.hasOwnProperty(u) && Ke(a, u, i[u]); return new pt(function(e, n) { da(t, a.toString(), function(t) { t ? t.error ? n(is(t, o || {})) : e(t) : n(new qr("network-request-failed")) }, r, s ? void 0 : Ln(pr(i)), t.a, t.h.get()) }) }(t, e.endpoint, i, n, e.Xb, e.ub || !1) }).then(function(t) { return r = t, e.Oa ? e.Oa(n, r) : r }).then(e.J).then(function() { if (!e.da) return r; if (!(e.da in r)) throw new qr("internal-error"); return r[e.da] }) }

        function rs(t) { return is({ error: { errors: [{ message: t }], code: 400, message: t } }) }

        function is(t, e) { var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                r = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" }; if (n = r[n] ? new qr(r[n]) : null) return n; for (var i in n = t.error && t.error.message || "", st(r = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", INVALID_PENDING_TOKEN: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", INVALID_PROVIDER_ID: "invalid-provider-id", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired", REJECTED_CREDENTIAL: "rejected-credential", INVALID_CONTINUE_URI: "invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", INVALID_CERT_HASH: "invalid-cert-hash" }, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0, r)
                if (0 === n.indexOf(i)) return new qr(r[i], e);
            return !e && t && (e = fr(t)), new qr("internal-error", e) }

        function os(t) { var o;
            this.b = t, this.a = null, this.fb = (o = this, (cs || (cs = new pt(function(t, e) {
                function n() { gr(), ar("gapi.load")("gapi.iframes", { callback: t, ontimeout: function() { gr(), e(Error("Network Error")) }, timeout: ss.get() }) } if (ar("gapi.iframes.Iframe")) t();
                else if (ar("gapi.load")) n();
                else { var r = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                    h[r] = function() { ar("gapi.load") ? n() : e(Error("Network Error")) }, _t($o(r = gn(as, { onload: r }))).s(function() { e(Error("Network Error")) }) } }).s(function(t) { throw cs = null, t }))).then(function() { return new pt(function(r, i) { ar("gapi.iframes.getContext")().open({ where: document.body, url: o.b, messageHandlersFilter: ar("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function(t) {
                        function e() { clearTimeout(n), r() }
                        o.a = t, o.a.restyle({ setHideOnLeave: !1 }); var n = setTimeout(function() { i(Error("Network Error")) }, us.get());
                        t.ping(e).then(e, function() { i(Error("Network Error")) }) }) }) })) } var as = dn("https://apis.google.com/js/api.js?onload=%{onload}"),
            ss = new vr(3e4, 6e4),
            us = new vr(5e3, 15e3),
            cs = null;

        function hs(t, e, n) { this.i = t, this.g = e, this.h = n, this.f = null, this.a = ze(this.i, "/__/auth/iframe"), Ke(this.a, "apiKey", this.g), Ke(this.a, "appName", this.h), this.b = null, this.c = [] }

        function ls(t, e, n, r, i) { this.o = t, this.m = e, this.c = n, this.l = r, this.h = this.g = this.i = null, this.a = i, this.f = null }

        function fs(t) { try { return Mh.app(t).auth().ya() } catch (t) { return [] } }

        function ps(t, e, n, r, i) { this.m = t, this.f = e, this.b = n, this.c = r || null, this.h = i || null, this.o = this.u = this.v = null, this.g = [], this.l = this.a = null }

        function ds(t) { var e, s = Bn(); return (e = t, ns(e, Ba, {}).then(function(t) { return t.authorizedDomains || [] })).then(function(t) { t: { var e = He(s),
                        n = e.c;e = e.b; for (var r = 0; r < t.length; r++) { var i = t[r],
                            o = e,
                            a = n; if (o = 0 == i.indexOf("chrome-extension://") ? He(i).b == o && "chrome-extension" == a : ("http" == a || "https" == a) && (Hn.test(i) ? o == i : (i = i.split(".").join("\\."), new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(o)))) { t = !0; break t } }
                    t = !1 } if (!t) throw new eo(Bn()) }) }

        function ys(i) { return i.l || (i.l = Gn().then(function() { if (!i.u) { var t = i.c,
                        e = i.h,
                        n = fs(i.b),
                        r = new hs(i.m, i.f, i.b);
                    r.f = t, r.b = e, r.c = U(n || []), i.u = r.toString() }
                i.i = new os(i.u),
                    function(r) { if (!r.i) throw Error("IfcHandler must be initialized!");
                        t = r.i, e = function(t) { var e = {}; if (t && t.authEvent) { var n = !1; for (t = Ji(t.authEvent), e = 0; e < r.g.length; e++) n = r.g[e](t) || n; return (e = {}).status = n ? "ACK" : "ERROR", _t(e) } return e.status = "ERROR", _t(e) }, t.fb.then(function() { t.a.register("authEvent", e, ar("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }); var t, e }(i) })), i.l }

        function ms(t) { return t.o || (t.v = t.c ? ir(t.c, fs(t.b)) : null, t.o = new oa(t.f, ui(t.h), t.v)), t.o }

        function gs(t, e, n, r, i, o, a, s, u, c) { return (t = new ls(t, e, n, r, i)).i = o, t.g = a, t.h = s, t.b = rt(u || null), t.f = c, t.toString() }

        function vs(t) { if (this.a = t || Mh.INTERNAL.reactNative && Mh.INTERNAL.reactNative.AsyncStorage, !this.a) throw new qr("internal-error", "The React Native compatibility library was not found.");
            this.type = "asyncStorage" }

        function bs(t) { this.b = t, this.a = {}, this.c = m(this.f, this) }
        hs.prototype.toString = function() { return this.f ? Ke(this.a, "v", this.f) : an(this.a.a, "v"), this.b ? Ke(this.a, "eid", this.b) : an(this.a.a, "eid"), this.c.length ? Ke(this.a, "fw", this.c.join(",")) : an(this.a.a, "fw"), this.a.toString() }, ls.prototype.toString = function() { var t = ze(this.o, "/__/auth/handler"); if (Ke(t, "apiKey", this.m), Ke(t, "appName", this.c), Ke(t, "authType", this.l), this.a.isOAuthProvider) { var e = this.a; try { var n = Mh.app(this.c).auth().ea() } catch (t) { n = null } for (var r in e.$a = n, Ke(t, "providerId", this.a.providerId), n = pr((e = this.a).yb)) n[r] = n[r].toString();
                r = e.Dc, n = rt(n); for (var i = 0; i < r.length; i++) { var o = r[i];
                    o in n && delete n[o] }
                e.cb && e.$a && !n[e.cb] && (n[e.cb] = e.$a), nt(n) || Ke(t, "customParameters", fr(n)) } if ("function" == typeof this.a.Eb && ((e = this.a.Eb()).length && Ke(t, "scopes", e.join(","))), this.i ? Ke(t, "redirectUrl", this.i) : an(t.a, "redirectUrl"), this.g ? Ke(t, "eventId", this.g) : an(t.a, "eventId"), this.h ? Ke(t, "v", this.h) : an(t.a, "v"), this.b)
                for (var a in this.b) this.b.hasOwnProperty(a) && !Qe(t, a) && Ke(t, a, this.b[a]); return this.f ? Ke(t, "eid", this.f) : an(t.a, "eid"), (a = fs(this.c)).length && Ke(t, "fw", a.join(",")), t.toString() }, (t = ps.prototype).Ea = function(e, n, t) { var r = new qr("popup-closed-by-user"),
                i = new qr("web-storage-unsupported"),
                o = this,
                a = !1; return this.ga().then(function() { var t, r;
                (t = o, r = { type: "webStorageSupport" }, ys(t).then(function() { return e = t.i, n = r, e.fb.then(function() { return new pt(function(t) { e.a.send(n.type, n, t, ar("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }); var e, n }).then(function(t) { if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport; throw Error() })).then(function(t) { t || (e && Kn(e), n(i), a = !0) }) }).s(function() {}).then(function() { if (!a) return n = e, new pt(function(e) { return function t() { Pe(2e3).then(function() { if (n && !n.closed) return t();
                            e() }) }() }); var n }).then(function() { if (!a) return Pe(t).then(function() { n(r) }) }) }, t.Mb = function() { var t = or(); return !lr(t) && !mr(t) }, t.Hb = function() { return !1 }, t.Cb = function(e, t, n, r, i, o, a) { if (!e) return wt(new qr("popup-blocked")); if (a && !lr()) return this.ga().s(function(t) { Kn(e), i(t) }), r(), _t();
            this.a || (this.a = ds(ms(this))); var s = this; return this.a.then(function() { var t = s.ga().s(function(t) { throw Kn(e), i(t), t }); return r(), t }).then(function() {
                (Yi(n), a) || jn(gs(s.m, s.f, s.b, t, n, null, o, s.c, void 0, s.h), e) }).s(function(t) { throw "auth/network-request-failed" == t.code && (s.a = null), t }) }, t.Ca = function(t, e, n) { this.a || (this.a = ds(ms(this))); var r = this; return this.a.then(function() { Yi(e), jn(gs(r.m, r.f, r.b, t, e, Bn(), n, r.c, void 0, r.h)) }).s(function(t) { throw "auth/network-request-failed" == t.code && (r.a = null), t }) }, t.ga = function() { var t = this; return ys(this).then(function() { return t.i.fb }).s(function() { throw t.a = null, new qr("network-request-failed") }) }, t.Qb = function() { return !0 }, t.wa = function(t) { this.g.push(t) }, t.Ka = function(e) { x(this.g, function(t) { return t == e }) }, (t = vs.prototype).get = function(t) { return _t(this.a.getItem(t)).then(function(t) { return t && dr(t) }) }, t.set = function(t, e) { return _t(this.a.setItem(t, fr(e))) }, t.P = function(t) { return _t(this.a.removeItem(t)) }, t.Y = function() {}, t.ca = function() {}; var _s, ws = [];

        function Es(t) { this.a = t }

        function Ts(t) { this.c = t, this.b = !1, this.a = [] }

        function Ss(r, t, e, n) { var i, o, a, s, u = e || {},
                c = null; if (r.b) return wt(Error("connection_unavailable")); var h = n ? 800 : 50,
                l = "undefined" != typeof MessageChannel ? new MessageChannel : null; return new pt(function(e, n) { l ? (i = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function() { n(Error("unsupported_event")) }, h), c = { messageChannel: l, onMessage: o = function(t) { t.data.eventId === i && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function() { n(Error("timeout")) }, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response")))) } }, r.a.push(c), l.port1.addEventListener("message", o), r.c.postMessage({ eventType: t, eventId: i, data: u }, [l.port2])) : n(Error("connection_unavailable")) }).then(function(t) { return Cs(r, c), t }).s(function(t) { throw Cs(r, c), t }) }

        function Cs(t, e) { if (e) { var n = e.messageChannel,
                    r = e.onMessage;
                n && (n.port1.removeEventListener("message", r), n.port1.close()), x(t.a, function(t) { return t == e }) } }

        function Is() { if (!As()) throw new qr("web-storage-unsupported");
            this.c = {}, this.a = [], this.b = 0, this.m = h.indexedDB, this.type = "indexedDB", this.g = this.l = this.f = this.i = null, this.u = !1, this.h = null; var t, r = this;
            Jn() && self ? (this.l = function() { var e = Jn() ? self : null; if (R(ws, function(t) { t.b == e && (n = t) }), !n) { var n = new bs(e);
                    ws.push(n) } return n }(), this.l.subscribe("keyChanged", function(t, n) { return Ms(r).then(function(e) { return 0 < e.length && R(r.a, function(t) { t(e) }), { keyProcessed: M(e, n.key) } }) }), this.l.subscribe("ping", function() { return _t(["keyChanged"]) })) : (t = h.navigator, t && t.serviceWorker ? _t().then(function() { return t.serviceWorker.ready }).then(function(t) { return t.active || null }).s(function() { return null }) : _t(null)).then(function(t) {
                (r.h = t) && (r.g = new Ts(new Es(t)), Ss(r.g, "ping", null, !0).then(function(t) { t[0].fulfilled && M(t[0].value, "keyChanged") && (r.u = !0) }).s(function() {})) }) }

        function Ns(i) { return new pt(function(e, n) { var t = i.m.open("firebaseLocalStorageDb", 1);
                t.onerror = function(t) { try { t.preventDefault() } catch (t) {}
                    n(Error(t.target.error)) }, t.onupgradeneeded = function(t) { t = t.target.result; try { t.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" }) } catch (t) { n(t) } }, t.onsuccess = function(t) { var r;
                    (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : (r = i, new pt(function(t, e) { var n = r.m.deleteDatabase("firebaseLocalStorageDb");
                        n.onsuccess = function() { t() }, n.onerror = function(t) { e(Error(t.target.error)) } })).then(function() { return Ns(i) }).then(function(t) { e(t) }).s(function(t) { n(t) }) } }) }

        function Ds(t) { return t.o || (t.o = Ns(t)), t.o }

        function As() { try { return !!h.indexedDB } catch (t) { return !1 } }

        function ks(t) { return t.objectStore("firebaseLocalStorage") }

        function Rs(t, e) { return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly") }

        function Os(t) { return new pt(function(e, n) { t.onsuccess = function(t) { t && t.target ? e(t.target.result) : e() }, t.onerror = function(t) { n(t.target.error) } }) }

        function Ps(t, e) { return t.g && t.h && ((n = h.navigator) && n.serviceWorker && n.serviceWorker.controller || null) === t.h ? Ss(t.g, "keyChanged", { key: e }, t.u).then(function() {}).s(function() {}) : _t(); var n }

        function Ms(r) { return Ds(r).then(function(t) { var i = ks(Rs(t, !1)); return i.getAll ? Os(i.getAll()) : new pt(function(e, n) { var r = [],
                        t = i.openCursor();
                    t.onsuccess = function(t) {
                        (t = t.target.result) ? (r.push(t.value), t.continue()) : e(r) }, t.onerror = function(t) { n(t.target.error) } }) }).then(function(t) { var e = {},
                    n = []; if (0 == r.b) { for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                    n = function t(e, n) { var r, i = []; for (r in e) r in n ? typeof e[r] != typeof n[r] ? i.push(r) : "object" == typeof e[r] && null != e[r] && null != n[r] ? 0 < t(e[r], n[r]).length && i.push(r) : e[r] !== n[r] && i.push(r) : i.push(r); for (r in n) r in e || i.push(r); return i }(r.c, e), r.c = e } return n }) }

        function Ls(t) { t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null) }

        function xs(t) { var r = this,
                i = null;
            this.a = [], this.type = "indexedDB", this.c = t, this.b = _t().then(function() { if (As()) { var e = yr(),
                        n = "__sak" + e; return _s || (_s = new Is), (i = _s).set(n, e).then(function() { return i.get(n) }).then(function(t) { if (t !== e) throw Error("indexedDB not supported!"); return i.P(n) }).then(function() { return i }).s(function() { return r.c }) } return r.c }).then(function(t) { return r.type = t.type, t.Y(function(e) { R(r.a, function(t) { t(e) }) }), t }) }

        function Fs() { this.a = {}, this.type = "inMemory" }

        function Us() { if (! function() { var t = "Node" == $n(); if (!(t = qs() || t && Mh.INTERNAL.node && Mh.INTERNAL.node.localStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == $n()) throw new qr("internal-error", "The LocalStorage compatibility library was not found."); throw new qr("web-storage-unsupported") }
            this.a = qs() || Mh.INTERNAL.node.localStorage, this.type = "localStorage" }

        function qs() { try { var t = h.localStorage,
                    e = yr(); return t && (t.setItem(e, "1"), t.removeItem(e)), t } catch (t) { return null } }

        function Vs() { this.type = "nullStorage" }

        function Bs() { if (! function() { var t = "Node" == $n(); if (!(t = js() || t && Mh.INTERNAL.node && Mh.INTERNAL.node.sessionStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == $n()) throw new qr("internal-error", "The SessionStorage compatibility library was not found."); throw new qr("web-storage-unsupported") }
            this.a = js() || Mh.INTERNAL.node.sessionStorage, this.type = "sessionStorage" }

        function js() { try { var t = h.sessionStorage,
                    e = yr(); return t && (t.setItem(e, "1"), t.removeItem(e)), t } catch (t) { return null } }

        function Ws() { var t = {};
            t.Browser = Hs, t.Node = zs, t.ReactNative = Gs, t.Worker = Ys, this.a = t[$n()] }
        bs.prototype.f = function(n) { var r = n.data.eventType,
                i = n.data.eventId,
                t = this.a[r]; if (t && 0 < t.length) { n.ports[0].postMessage({ status: "ack", eventId: i, eventType: r, response: null }); var e = [];
                R(t, function(t) { e.push(_t().then(function() { return t(n.origin, n.data.data) })) }), Tt(e).then(function(t) { var e = [];
                    R(t, function(t) { e.push({ fulfilled: t.Db, value: t.value, reason: t.reason ? t.reason.message : void 0 }) }), R(e, function(t) { for (var e in t) void 0 === t[e] && delete t[e] }), n.ports[0].postMessage({ status: "done", eventId: i, eventType: r, response: e }) }) } }, bs.prototype.subscribe = function(t, e) { nt(this.a) && this.b.addEventListener("message", this.c), void 0 === this.a[t] && (this.a[t] = []), this.a[t].push(e) }, bs.prototype.unsubscribe = function(t, e) { void 0 !== this.a[t] && e ? (x(this.a[t], function(t) { return t == e }), 0 == this.a[t].length && delete this.a[t]) : e || delete this.a[t], nt(this.a) && this.b.removeEventListener("message", this.c) }, Es.prototype.postMessage = function(t, e) { this.a.postMessage(t, e) }, Ts.prototype.close = function() { for (; 0 < this.a.length;) Cs(this, this.a[0]);
            this.b = !0 }, (t = Is.prototype).set = function(n, r) { var i, o = !1,
                a = this; return Ds(this).then(function(t) { return Os((t = ks(Rs(i = t, !0))).get(n)) }).then(function(t) { var e = ks(Rs(i, !0)); return t ? (t.value = r, Os(e.put(t))) : (a.b++, o = !0, (t = {}).fbase_key = n, t.value = r, Os(e.add(t))) }).then(function() { return a.c[n] = r, Ps(a, n) }).ia(function() { o && a.b-- }) }, t.get = function(e) { return Ds(this).then(function(t) { return Os(ks(Rs(t, !1)).get(e)) }).then(function(t) { return t && t.value }) }, t.P = function(e) { var n = !1,
                r = this; return Ds(this).then(function(t) { return n = !0, r.b++, Os(ks(Rs(t, !0)).delete(e)) }).then(function() { return delete r.c[e], Ps(r, e) }).ia(function() { n && r.b-- }) }, t.Y = function(t) { var n;
            0 == this.a.length && (Ls(n = this), function e() { n.f = setTimeout(function() { n.i = Ms(n).then(function(e) { 0 < e.length && R(n.a, function(t) { t(e) }) }).then(function() { e() }).s(function(t) { "STOP_EVENT" != t.message && e() }) }, 800) }()), this.a.push(t) }, t.ca = function(e) { x(this.a, function(t) { return t == e }), 0 == this.a.length && Ls(this) }, (t = xs.prototype).get = function(e) { return this.b.then(function(t) { return t.get(e) }) }, t.set = function(e, n) { return this.b.then(function(t) { return t.set(e, n) }) }, t.P = function(e) { return this.b.then(function(t) { return t.P(e) }) }, t.Y = function(t) { this.a.push(t) }, t.ca = function(e) { x(this.a, function(t) { return t == e }) }, (t = Fs.prototype).get = function(t) { return _t(this.a[t]) }, t.set = function(t, e) { return this.a[t] = e, _t() }, t.P = function(t) { return delete this.a[t], _t() }, t.Y = function() {}, t.ca = function() {}, (t = Us.prototype).get = function(t) { var e = this; return _t().then(function() { return dr(e.a.getItem(t)) }) }, t.set = function(e, n) { var r = this; return _t().then(function() { var t = fr(n);
                null === t ? r.P(e) : r.a.setItem(e, t) }) }, t.P = function(t) { var e = this; return _t().then(function() { e.a.removeItem(t) }) }, t.Y = function(t) { h.window && me(h.window, "storage", t) }, t.ca = function(t) { h.window && be(h.window, "storage", t) }, (t = Vs.prototype).get = function() { return _t(null) }, t.set = function() { return _t() }, t.P = function() { return _t() }, t.Y = function() {}, t.ca = function() {}, (t = Bs.prototype).get = function(t) { var e = this; return _t().then(function() { return dr(e.a.getItem(t)) }) }, t.set = function(e, n) { var r = this; return _t().then(function() { var t = fr(n);
                null === t ? r.P(e) : r.a.setItem(e, t) }) }, t.P = function(t) { var e = this; return _t().then(function() { e.a.removeItem(t) }) }, t.Y = function() {}, t.ca = function() {}; var Ks, Qs, Hs = { A: Us, Ra: Bs },
            zs = { A: Us, Ra: Bs },
            Gs = { A: vs, Ra: Vs },
            Ys = { A: Us, Ra: Vs },
            Xs = { Zc: "local", NONE: "none", ad: "session" };

        function Js() { var t = !(mr(or()) || !Xn()),
                e = lr(),
                n = sr();
            this.o = t, this.h = e, this.l = n, this.a = {}, Ks || (Ks = new Ws), t = Ks; try { this.g = !Vn() && wr() || !h.indexedDB ? new t.a.A : new xs(Jn() ? new Fs : new t.a.A) } catch (t) { this.g = new Fs, this.h = !0 } try { this.i = new t.a.Ra } catch (t) { this.i = new Fs }
            this.m = new Fs, this.f = m(this.Pb, this), this.b = {} }

        function $s() { return Qs || (Qs = new Js), Qs }

        function Zs(t, e) { switch (e) {
                case "session":
                    return t.i;
                case "none":
                    return t.m;
                default:
                    return t.g } }

        function tu(t, e) { return "firebase:" + t.name + (e ? ":" + e : "") }

        function eu(t, e, n) { return n = tu(e, n), "local" == e.A && (t.b[n] = null), Zs(t, e.A).P(n) }

        function nu(t) { t.c && (clearInterval(t.c), t.c = null) }

        function ru(t) { this.a = t, this.b = $s() }(t = Js.prototype).get = function(t, e) { return Zs(this, t.A).get(tu(t, e)) }, t.set = function(e, t, n) { var r = tu(e, n),
                i = this,
                o = Zs(this, e.A); return o.set(r, t).then(function() { return o.get(r) }).then(function(t) { "local" == e.A && (i.b[r] = t) }) }, t.addListener = function(t, e, n) { var r;
            t = tu(t, e), this.l && (this.b[t] = h.localStorage.getItem(t)), nt(this.a) && (Zs(this, "local").Y(this.f), this.h || (Vn() || !wr()) && h.indexedDB || !this.l || (nu(r = this), r.c = setInterval(function() { for (var t in r.a) { var e = h.localStorage.getItem(t),
                        n = r.b[t];
                    e != n && (r.b[t] = e, e = new oe({ type: "storage", key: t, target: window, oldValue: n, newValue: e, a: !0 }), r.Pb(e)) } }, 1e3))), this.a[t] || (this.a[t] = []), this.a[t].push(n) }, t.removeListener = function(t, e, n) { t = tu(t, e), this.a[t] && (x(this.a[t], function(t) { return t == n }), 0 == this.a[t].length && delete this.a[t]), nt(this.a) && (Zs(this, "local").ca(this.f), nu(this)) }, t.Pb = function(t) { if (t && t.f) { var e = t.a.key; if (null == e)
                    for (var n in this.a) { var r = this.b[n];
                        void 0 === r && (r = null); var i = h.localStorage.getItem(n);
                        i !== r && (this.b[n] = i, this.Xa(n)) } else if (0 == e.indexOf("firebase:") && this.a[e]) { if (void 0 !== t.a.a ? Zs(this, "local").ca(this.f) : nu(this), this.o)
                            if (n = h.localStorage.getItem(e), (r = t.a.newValue) !== n) null !== r ? h.localStorage.setItem(e, r) : h.localStorage.removeItem(e);
                            else if (this.b[e] === r && void 0 === t.a.a) return; var o = this;
                        n = function() { void 0 === t.a.a && o.b[e] === h.localStorage.getItem(e) || (o.b[e] = h.localStorage.getItem(e), o.Xa(e)) }, Bt && Xt && 10 == Xt && h.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n() } } else R(t, m(this.Xa, this)) }, t.Xa = function(t) { this.a[t] && R(this.a[t], function(t) { t() }) }; var iu, ou = { name: "authEvent", A: "local" };

        function au() { this.a = $s() }

        function su(t, e) { this.b = uu, this.f = h.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = h.Int32Array ? new Int32Array(64) : Array(64), void 0 !== iu || (iu = h.Int32Array ? new Int32Array(yu) : yu), this.reset() }
        b(su, function() { this.b = -1 }); for (var uu = 64, cu = uu - 1, hu = [], lu = 0; lu < cu; lu++) hu[lu] = 0; var fu = F(128, hu);

        function pu(t) { for (var e = t.f, n = t.l, r = 0, i = 0; i < e.length;) n[r++] = e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3], i = 4 * r; for (e = 16; e < 64; e++) { i = 0 | n[e - 15], r = 0 | n[e - 2]; var o = (0 | n[e - 16]) + ((i >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3) | 0,
                    a = (0 | n[e - 7]) + ((r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10) | 0;
                n[e] = o + a | 0 }
            r = 0 | t.a[0], i = 0 | t.a[1]; var s = 0 | t.a[2],
                u = 0 | t.a[3],
                c = 0 | t.a[4],
                h = 0 | t.a[5],
                l = 0 | t.a[6]; for (o = 0 | t.a[7], e = 0; e < 64; e++) { var f = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & i ^ r & s ^ i & s) | 0;
                a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | iu[e]) | 0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = i, i = r, r = a + f | 0 }
            t.a[0] = t.a[0] + r | 0, t.a[1] = t.a[1] + i | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0 }

        function du(t, e, n) { void 0 === n && (n = e.length); var r = 0,
                i = t.c; if (c(e))
                for (; r < n;) t.f[i++] = e.charCodeAt(r++), i == t.b && (pu(t), i = 0);
            else { if (!p(e)) throw Error("message must be string or array"); for (; r < n;) { var o = e[r++]; if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
                    t.f[i++] = o, i == t.b && (pu(t), i = 0) } }
            t.c = i, t.g += n }
        su.prototype.reset = function() { this.g = this.c = 0, this.a = h.Int32Array ? new Int32Array(this.h) : U(this.h) }; var yu = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function mu() { su.call(this, 8, gu) }
        b(mu, su); var gu = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

        function vu(t, e, n, r, i) { this.m = t, this.i = e, this.l = n, this.o = r || null, this.u = i || null, this.h = e + ":" + n, this.v = new au, this.g = new ru(this.h), this.f = null, this.b = [], this.a = this.c = null }

        function bu(t) { return new qr("invalid-cordova-configuration", t) }

        function _u(t) { var e = new mu;
            du(e, t), t = []; var n = 8 * e.g;
            e.c < 56 ? du(e, fu, 56 - e.c) : du(e, fu, e.b - (e.c - 56)); for (var r = 63; 56 <= r; r--) e.f[r] = 255 & n, n /= 256; for (pu(e), r = n = 0; r < e.i; r++)
                for (var i = 24; 0 <= i; i -= 8) t[n++] = e.a[r] >> i & 255; return O(t, function(t) { return 1 < (t = t.toString(16)).length ? t : "0" + t }).join("") }

        function wu(t, e) { for (var n = 0; n < t.b.length; n++) try { t.b[n](e) } catch (t) {} }

        function Eu(r) { return r.f || (r.f = r.ga().then(function() { return new pt(function(n) { r.wa(function t(e) { return n(e), r.Ka(t), !1 }),
                        function(i) {
                            function e(r) { t = !0, n && n.cancel(), Tu(i).then(function(t) { var e = o; if (t && r && r.url) { var n = null; - 1 != (e = Ti(r.url)).indexOf("/__/auth/callback") && (n = (n = "object" == typeof(n = dr(Qe(n = He(e), "firebaseError") || null)) ? Vr(n) : null) ? new Xi(t.b, t.c, null, null, n) : new Xi(t.b, t.c, e, t.g)), e = n || o }
                                    wu(i, e) }) } var o = new Xi("unknown", null, null, null, new qr("no-auth-event")),
                                t = !1,
                                n = Pe(500).then(function() { return Tu(i).then(function() { t || wu(i, o) }) }),
                                r = h.handleOpenURL;
                            h.handleOpenURL = function(t) { if (0 == t.toLowerCase().indexOf(ar("BuildInfo.packageName", h).toLowerCase() + "://") && e({ url: t }), "function" == typeof r) try { r(t) } catch (t) { console.error(t) } }, to || (to = new $i), to.subscribe(e) }(r) }) })), r.f }

        function Tu(e) { var t, n = null; return (t = e.g, t.b.get(ou, t.a).then(function(t) { return Ji(t) })).then(function(t) { return n = t, eu((t = e.g).b, ou, t.a) }).then(function() { return n }) }

        function Su(t) { this.a = t, this.b = $s() }(t = vu.prototype).ga = function() { return this.za ? this.za : this.za = (Yn(void 0) ? Gn().then(function() { return new pt(function(t, e) { var n = h.document,
                        r = setTimeout(function() { e(Error("Cordova framework is not ready.")) }, 1e3);
                    n.addEventListener("deviceready", function() { clearTimeout(r), t() }, !1) }) }) : wt(Error("Cordova must run in an Android or iOS file scheme."))).then(function() { if ("function" != typeof ar("universalLinks.subscribe", h)) throw bu("cordova-universal-links-plugin-fix is not installed"); if (void 0 === ar("BuildInfo.packageName", h)) throw bu("cordova-plugin-buildinfo is not installed"); if ("function" != typeof ar("cordova.plugins.browsertab.openUrl", h)) throw bu("cordova-plugin-browsertab is not installed"); if ("function" != typeof ar("cordova.InAppBrowser.open", h)) throw bu("cordova-plugin-inappbrowser is not installed") }, function() { throw new qr("cordova-not-ready") }) }, t.Ea = function(t, e) { return e(new qr("operation-not-supported-in-this-environment")), _t() }, t.Cb = function() { return wt(new qr("operation-not-supported-in-this-environment")) }, t.Qb = function() { return !1 }, t.Mb = function() { return !0 }, t.Hb = function() { return !0 }, t.Ca = function(t, e, n) { if (this.c) return wt(new qr("redirect-operation-pending")); var r = this,
                i = h.document,
                o = null,
                a = null,
                s = null,
                u = null; return this.c = _t().then(function() { return Yi(e), Eu(r) }).then(function() { return function(n, t, e, r) { var i = function() { for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }(),
                        o = new Xi(t, r, null, i, new qr("no-auth-event")),
                        a = ar("BuildInfo.packageName", h); if ("string" != typeof a) throw new qr("invalid-cordova-configuration"); var s = ar("BuildInfo.displayName", h),
                        u = {}; if (or().toLowerCase().match(/iphone|ipad|ipod/)) u.ibi = a;
                    else { if (!or().toLowerCase().match(/android/)) return wt(new qr("operation-not-supported-in-this-environment"));
                        u.apn = a }
                    s && (u.appDisplayName = s), i = _u(i), u.sessionId = i; var c = gs(n.m, n.i, n.l, t, e, null, r, n.o, u, n.u); return n.ga().then(function() { var t = n.h; return n.v.a.set(ou, o.C(), t) }).then(function() { var t = ar("cordova.plugins.browsertab.isAvailable", h); if ("function" != typeof t) throw new qr("invalid-cordova-configuration"); var e = null;
                        t(function(t) { if (t) { if ("function" != typeof(e = ar("cordova.plugins.browsertab.openUrl", h))) throw new qr("invalid-cordova-configuration");
                                e(c) } else { if ("function" != typeof(e = ar("cordova.InAppBrowser.open", h))) throw new qr("invalid-cordova-configuration");
                                t = !(!(t = or()).match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)), n.a = e(c, t ? "_blank" : "_system", "location=yes") } }) }) }(r, t, e, n) }).then(function() { return new pt(function(e, t) { a = function() { var t = ar("cordova.plugins.browsertab.close", h); return e(), "function" == typeof t && t(), r.a && "function" == typeof r.a.close && (r.a.close(), r.a = null), !1 }, r.wa(a), s = function() { o || (o = Pe(2e3).then(function() { t(new qr("redirect-cancelled-by-user")) })) }, u = function() { br() && s() }, i.addEventListener("resume", s, !1), or().toLowerCase().match(/android/) || i.addEventListener("visibilitychange", u, !1) }).s(function(t) { return Tu(r).then(function() { throw t }) }) }).ia(function() { s && i.removeEventListener("resume", s, !1), u && i.removeEventListener("visibilitychange", u, !1), o && o.cancel(), a && r.Ka(a), r.c = null }) }, t.wa = function(e) { this.b.push(e), Eu(this).s(function(t) { "auth/invalid-cordova-configuration" === t.code && (t = new Xi("unknown", null, null, null, new qr("no-auth-event")), e(t)) }) }, t.Ka = function(e) { x(this.b, function(t) { return t == e }) }; var Cu = { name: "pendingRedirect", A: "session" };

        function Iu(t) { return eu(t.b, Cu, t.a) }

        function Nu(t, e, n) { this.u = t, this.l = e, this.m = n, this.h = [], this.f = !1, this.i = m(this.bb, this), this.b = new Fu, this.o = new Bu, this.g = new Su(this.l + ":" + this.m), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.o, this.c.linkViaPopup = this.o, this.c.reauthViaPopup = this.o, this.a = Du(this.u, this.l, this.m, ai) }

        function Du(t, e, n, r) { var i = Mh.SDK_VERSION || null; return Yn() ? new vu(t, e, n, i, r) : new ps(t, e, n, i, r) }

        function Au(e) { e.f || (e.f = !0, e.a.wa(e.i)); var n = e.a; return e.a.ga().s(function(t) { throw e.a == n && e.reset(), t }) }

        function ku(n) { n.a.Mb() && Au(n).s(function(t) { var e = new Xi("unknown", null, null, null, new qr("operation-not-supported-in-this-environment"));
                Mu(t) && n.bb(e) }), n.a.Hb() || Uu(n.b) }(t = Nu.prototype).reset = function() { this.f = !1, this.a.Ka(this.i), this.a = Du(this.u, this.l, this.m) }, t.Ya = function() { this.b.Ya() }, t.subscribe = function(t) { if (M(this.h, t) || this.h.push(t), !this.f) { var n = this;
                (e = this.g, e.b.get(Cu, e.a).then(function(t) { return "pending" == t })).then(function(t) { t ? Iu(n.g).then(function() { Au(n).s(function(t) { var e = new Xi("unknown", null, null, null, new qr("operation-not-supported-in-this-environment"));
                            Mu(t) && n.bb(e) }) }) : ku(n) }).s(function() { ku(n) }) } var e }, t.unsubscribe = function(e) { x(this.h, function(t) { return t == e }) }, t.bb = function(t) { if (!t) throw new qr("invalid-auth-event"); for (var e = !1, n = 0; n < this.h.length; n++) { var r = this.h[n]; if (r.vb(t.b, t.c)) {
                    (e = this.c[t.b]) && e.h(t, r), e = !0; break } } return Uu(this.b), e }; var Ru = new vr(2e3, 1e4),
            Ou = new vr(3e4, 6e4);

        function Pu(t, e, n, r, i, o) { return t.a.Cb(e, n, r, function() { t.f || (t.f = !0, t.a.wa(t.i)) }, function() { t.reset() }, i, o) }

        function Mu(t) { return !(!t || "auth/cordova-not-ready" != t.code) }
        Nu.prototype.fa = function() { return this.b.fa() }, Nu.prototype.Ca = function(t, e, n) { var r, i, o = this; return (i = this.g, i.b.set(Cu, "pending", i.a)).then(function() { return o.a.Ca(t, e, n).s(function(t) { if (Mu(t)) throw new qr("operation-not-supported-in-this-environment"); return r = t, Iu(o.g).then(function() { throw r }) }).then(function() { return o.a.Qb() ? new pt(function() {}) : Iu(o.g).then(function() { return o.fa() }).then(function() {}).s(function() {}) }) }) }, Nu.prototype.Ea = function(e, n, t, r) { return this.a.Ea(t, function(t) { e.ha(n, null, t, r) }, Ru.get()) }; var Lu = {};

        function xu(t, e, n) { var r = e + ":" + n; return Lu[r] || (Lu[r] = new Nu(t, e, n)), Lu[r] }

        function Fu() { this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1 }

        function Uu(t) { t.g || (t.g = !0, Vu(t, !1, null, null)) }

        function qu(t, e) { if (t.b = function() { return _t(e) }, t.f.length)
                for (var n = 0; n < t.f.length; n++) t.f[n](e) }

        function Vu(t, e, n, r) { e ? r ? function(t, e) { if (t.b = function() { return wt(e) }, t.c.length)
                    for (var n = 0; n < t.c.length; n++) t.c[n](e) }(t, r) : qu(t, n) : qu(t, { user: null }), t.f = [], t.c = [] }

        function Bu() {}

        function ju() { this.sb = !1, Object.defineProperty(this, "appVerificationDisabled", { get: function() { return this.sb }, set: function(t) { this.sb = t }, enumerable: !1 }) }

        function Wu(t, e) { this.a = e, Ir(this, "verificationId", t) }

        function Ku(t, e, n, r) { return new Hi(t).Ua(e, n).then(function(t) { return new Wu(t, r) }) }

        function Qu(t) { var e = oi(t); if (!(e && e.exp && e.auth_time && e.iat)) throw new qr("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
            Nr(this, { token: t, expirationTime: _r(1e3 * e.exp), authTime: _r(1e3 * e.auth_time), issuedAtTime: _r(1e3 * e.iat), signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null, claims: e }) }

        function Hu(t, e, n) { if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!") }

        function zu(t, e) { return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e) }

        function Gu(t) { this.f = t, this.b = this.a = null, this.c = 0 }

        function Yu(t, e) { var n = e[sa],
                r = e.refreshToken;
            e = Xu(e.expiresIn), t.b = n, t.c = e, t.a = r }

        function Xu(t) { return v() + 1e3 * parseInt(t, 10) }

        function Ju(e, t) { return (r = e.f, i = t, new pt(function(e, n) { "refresh_token" == i.grant_type && i.refresh_token || "authorization_code" == i.grant_type && i.code ? da(r, r.i + "?key=" + encodeURIComponent(r.b), function(t) { t ? t.error ? n(is(t)) : t.access_token && t.refresh_token ? e(t) : n(new qr("internal-error")) : n(new qr("network-request-failed")) }, "POST", on(i).toString(), r.f, r.l.get()) : n(new qr("internal-error")) })).then(function(t) { return e.b = t.access_token, e.c = Xu(t.expires_in), e.a = t.refresh_token, { accessToken: e.b, expirationTime: e.c, refreshToken: e.a } }).s(function(t) { throw "auth/user-token-expired" == t.code && (e.a = null), t }); var r, i }

        function $u(t, e) { this.a = t || null, this.b = e || null, Nr(this, { lastSignInTime: _r(e || null), creationTime: _r(t || null) }) }

        function Zu(t, e, n, r, i, o) { Nr(this, { uid: t, displayName: r || null, photoURL: i || null, email: n || null, phoneNumber: o || null, providerId: e }) }

        function tc(t, e) { for (var n in ie.call(this, t), e) this[n] = e[n] }

        function ec(t, e, n) { var r;
            this.G = [], this.m = t.apiKey, this.o = t.appName, this.u = t.authDomain || null, t = Mh.SDK_VERSION ? ir(Mh.SDK_VERSION) : null, this.b = new oa(this.m, ui(ai), t), this.h = new Gu(this.b), uc(this, e[sa]), Yu(this.h, e), Ir(this, "refreshToken", this.h.a), lc(this, n || {}), De.call(this), this.I = !1, this.u && ur() && (this.a = xu(this.u, this.m, this.o)), this.N = [], this.i = null, this.w = (r = this, new Hu(function() { return r.F(!0) }, function(t) { return !(!t || "auth/network-request-failed" != t.code) }, function() { var t = r.h.c - v() - 3e5; return 0 < t ? t : 0 })), this.V = m(this.Ha, this); var i = this;
            this.ka = null, this.ta = function(t) { i.pa(t.g) }, this.X = null, this.O = [], this.sa = function(t) { rc(i, t.c) }, this.W = null }

        function nc(t, e) { t.X && be(t.X, "languageCodeChanged", t.ta), (t.X = e) && me(e, "languageCodeChanged", t.ta) }

        function rc(t, e) { t.O = e, pa(t.b, Mh.SDK_VERSION ? ir(Mh.SDK_VERSION, t.O) : null) }

        function ic(t, e) { t.W && be(t.W, "frameworkChanged", t.sa), (t.W = e) && me(e, "frameworkChanged", t.sa) }

        function oc(e) { try { return Mh.app(e.o).auth() } catch (t) { throw new qr("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.o + "'!") } }

        function ac(t) { t.D || t.w.b || (t.w.start(), be(t, "tokenChanged", t.V), me(t, "tokenChanged", t.V)) }

        function sc(t) { be(t, "tokenChanged", t.V), t.w.stop() }

        function uc(t, e) { t.ra = e, Ir(t, "_lat", e) }

        function cc(t) { for (var e = [], n = 0; n < t.N.length; n++) e.push(t.N[n](t)); return Tt(e).then(function() { return t }) }

        function hc(t) { t.a && !t.I && (t.I = !0, t.a.subscribe(t)) }

        function lc(t, e) { Nr(t, { uid: e.uid, displayName: e.displayName || null, photoURL: e.photoURL || null, email: e.email || null, emailVerified: e.emailVerified || !1, phoneNumber: e.phoneNumber || null, isAnonymous: e.isAnonymous || !1, metadata: new $u(e.createdAt, e.lastLoginAt), providerData: [] }) }

        function fc() {}

        function pc(t) { return _t().then(function() { if (t.D) throw new qr("app-deleted") }) }

        function dc(t) { return O(t.providerData, function(t) { return t.providerId }) }

        function yc(t, e) { e && (mc(t, e.providerId), t.providerData.push(e)) }

        function mc(t, e) { x(t.providerData, function(t) { return t.providerId == e }) }

        function gc(t, e, n) {
            ("uid" != e || n) && t.hasOwnProperty(e) && Ir(t, e, n) }

        function vc(e, t) { var n, r, i;
            e != t && (Nr(e, { uid: t.uid, displayName: t.displayName, photoURL: t.photoURL, email: t.email, emailVerified: t.emailVerified, phoneNumber: t.phoneNumber, isAnonymous: t.isAnonymous, providerData: [] }), t.metadata ? Ir(e, "metadata", new $u((i = t.metadata).a, i.b)) : Ir(e, "metadata", new $u), R(t.providerData, function(t) { yc(e, t) }), n = e.h, r = t.h, n.b = r.b, n.a = r.a, n.c = r.c, Ir(e, "refreshToken", e.h.a)) }

        function bc(i) { return i.F().then(function(t) { var e, n, r = i.isAnonymous; return (e = i, n = t, ns(e.b, Fa, { idToken: n }).then(m(e.xc, e))).then(function() { return r || gc(i, "isAnonymous", !1), t }) }) }

        function _c(t, e) { e[sa] && t.ra != e[sa] && (Yu(t.h, e), t.dispatchEvent(new tc("tokenChanged")), uc(t, e[sa]), gc(t, "refreshToken", t.h.a)) }

        function wc(t, e) { return bc(t).then(function() { if (M(dc(t), e)) return cc(t).then(function() { throw new qr("provider-already-linked") }) }) }

        function Ec(t, e, n) { return Dr({ user: t, credential: Gi(e), additionalUserInfo: e = pi(e), operationType: n }) }

        function Tc(t, e) { return _c(t, e), t.reload().then(function() { return t }) }

        function Sc(n, r, t, e, i) { if (!ur()) return wt(new qr("operation-not-supported-in-this-environment")); if (n.i && !i) return wt(n.i); var o = fi(t.providerId),
                a = yr(n.uid + ":::"),
                s = null;
            (!lr() || Xn()) && n.u && t.isOAuthProvider && (s = gs(n.u, n.m, n.o, r, t, null, a, Mh.SDK_VERSION || null)); var u = Qn(s, o && o.Ba, o && o.Aa); return e = e().then(function() { if (Ic(n), !i) return n.F().then(function() {}) }).then(function() { return Pu(n.a, u, r, t, a, !!s) }).then(function() { return new pt(function(t, e) { n.ha(r, null, new qr("cancelled-popup-request"), n.g || null), n.f = t, n.v = e, n.g = a, n.c = n.a.Ea(n, r, u, a) }) }).then(function(t) { return u && Kn(u), t ? Dr(t) : null }).s(function(t) { throw u && Kn(u), t }), Nc(n, e, i) }

        function Cc(e, t, n, r, i) { if (!ur()) return wt(new qr("operation-not-supported-in-this-environment")); if (e.i && !i) return wt(e.i); var o = null,
                a = yr(e.uid + ":::"); return r = r().then(function() { if (Ic(e), !i) return e.F().then(function() {}) }).then(function() { return e.aa = a, cc(e) }).then(function(t) { return e.ba && (t = (t = e.ba).b.set(kc, e.C(), t.a)), t }).then(function() { return e.a.Ca(t, n, a) }).s(function(t) { if (o = t, e.ba) return Rc(e.ba); throw o }).then(function() { if (o) throw o }), Nc(e, r, i) }

        function Ic(t) { if (!t.a || !t.I) { if (t.a && !t.I) throw new qr("internal-error"); throw new qr("auth-domain-config-required") } }

        function Nc(t, e, n) { var r, i, o, a = (i = e, o = n, (r = t).i && !o ? (i.cancel(), wt(r.i)) : i.s(function(t) { throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (r.i || r.dispatchEvent(new tc("userInvalidated")), r.i = t), t })); return t.G.push(a), a.ia(function() { L(t.G, a) }), a }

        function Dc(t) { if (!t.apiKey) return null; var e = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName },
                n = {}; if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime)) return null;
            n[sa] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null, n.expiresIn = (t.stsTokenManager.expirationTime - v()) / 1e3; var r = new ec(e, n, t); return t.providerData && R(t.providerData, function(t) { t && yc(r, Dr(t)) }), t.redirectEventId && (r.aa = t.redirectEventId), r }

        function Ac(t) { this.a = t, this.b = $s() }
        Fu.prototype.reset = function() { this.b = null, this.a && (this.a.cancel(), this.a = null) }, Fu.prototype.h = function(t, e) { if (t) { this.reset(), this.g = !0; var n = t.b,
                    r = t.c,
                    i = t.a && "auth/web-storage-unsupported" == t.a.code,
                    o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                this.i = !(!i && !o), "unknown" != n || i || o ? t.a ? (Vu(this, !0, null, t.a), _t()) : e.xa(n, r) ? function(e, t, n) { n = n.xa(t.b, t.c); var r = t.f,
                        i = t.g,
                        o = t.h,
                        a = !!t.b.match(/Redirect$/);
                    n(r, i, o).then(function(t) { Vu(e, a, t, null) }).s(function(t) { Vu(e, a, null, t) }) }(this, t, e) : wt(new qr("invalid-auth-event")) : (Vu(this, !1, null, null), _t()) } else wt(new qr("invalid-auth-event")) }, Fu.prototype.Ya = function() { this.g && !this.i && Vu(this, !1, null, null) }, Fu.prototype.fa = function() { var i = this; return new pt(function(t, e) { var n, r;
                i.b ? i.b().then(t, e) : (i.f.push(t), i.c.push(e), n = i, r = new qr("timeout"), n.a && n.a.cancel(), n.a = Pe(Ou.get()).then(function() { n.b || (n.g = !0, Vu(n, !0, null, r)) })) }) }, Bu.prototype.h = function(t, e) { if (t) { var n = t.b,
                    r = t.c;
                t.a ? (e.ha(t.b, null, t.a, t.c), _t()) : e.xa(n, r) ? (o = e, a = (i = t).c, s = i.b, o.xa(s, a)(i.f, i.g, i.h).then(function(t) { o.ha(s, t, null, a) }).s(function(t) { o.ha(s, null, t, a) })) : wt(new qr("invalid-auth-event")) } else wt(new qr("invalid-auth-event")); var i, o, a, s }, Wu.prototype.confirm = function(t) { return t = zi(this.verificationId, t), this.a(t) }, Hu.prototype.start = function() { this.a = this.c,
                function e(n, t) { n.stop();
                    n.b = Pe(zu(n, t)).then(function() { return e = h.document, n = null, br() || !e ? _t() : new pt(function(t) { n = function() { br() && (e.removeEventListener("visibilitychange", n, !1), t()) }, e.addEventListener("visibilitychange", n, !1) }).s(function(t) { throw e.removeEventListener("visibilitychange", n, !1), t }); var e, n }).then(function() { return n.h() }).then(function() { e(n, !0) }).s(function(t) { n.i(t) && e(n, !1) }) }(this, !0) }, Hu.prototype.stop = function() { this.b && (this.b.cancel(), this.b = null) }, Gu.prototype.C = function() { return { apiKey: this.f.b, refreshToken: this.a, accessToken: this.b, expirationTime: this.c } }, Gu.prototype.getToken = function(t) { return t = !!t, this.b && !this.a ? wt(new qr("user-token-expired")) : t || !this.b || v() > this.c - 3e4 ? this.a ? Ju(this, { grant_type: "refresh_token", refresh_token: this.a }) : _t(null) : _t({ accessToken: this.b, expirationTime: this.c, refreshToken: this.a }) }, $u.prototype.C = function() { return { lastLoginAt: this.b, createdAt: this.a } }, b(tc, ie), b(ec, De), ec.prototype.pa = function(t) { this.ka = t, fa(this.b, t) }, ec.prototype.ea = function() { return this.ka }, ec.prototype.ya = function() { return U(this.O) }, ec.prototype.Ha = function() { this.w.b && (this.w.stop(), this.w.start()) }, Ir(ec.prototype, "providerId", "firebase"), (t = ec.prototype).reload = function() { var t = this; return Nc(this, pc(this).then(function() { return bc(t).then(function() { return cc(t) }).then(fc) })) }, t.dc = function(t) { return this.F(t).then(function(t) { return new Qu(t) }) }, t.F = function(t) { var e = this; return Nc(this, pc(this).then(function() { return e.h.getToken(t) }).then(function(t) { if (!t) throw new qr("internal-error"); return t.accessToken != e.ra && (uc(e, t.accessToken), e.dispatchEvent(new tc("tokenChanged"))), gc(e, "refreshToken", t.refreshToken), t.accessToken })) }, t.xc = function(t) { if (!(t = t.users) || !t.length) throw new qr("internal-error");
            lc(this, { uid: (t = t[0]).localId, displayName: t.displayName, photoURL: t.photoUrl, email: t.email, emailVerified: !!t.emailVerified, phoneNumber: t.phoneNumber, lastLoginAt: t.lastLoginAt, createdAt: t.createdAt }); for (var e = (r = (r = t).providerUserInfo) && r.length ? O(r, function(t) { return new Zu(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber) }) : [], n = 0; n < e.length; n++) yc(this, e[n]); var r;
            gc(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length)) }, t.gb = function(t) { var e = this,
                n = null; return Nc(this, t.f(this.b, this.uid).then(function(t) { return _c(e, t), n = Ec(e, t, "reauthenticate"), e.i = null, e.reload() }).then(function() { return n }), !0) }, t.yc = function(t) { return Sr("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead."), this.gb(t).then(function() {}) }, t.eb = function(e) { var n = this,
                r = null; return Nc(this, wc(this, e.providerId).then(function() { return n.F() }).then(function(t) { return e.b(n.b, t) }).then(function(t) { return r = Ec(n, t, "link"), Tc(n, t) }).then(function() { return r })) }, t.pc = function(t) { return Sr("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead."), this.eb(t).then(function(t) { return t.user }) }, t.qc = function(t, e) { var n = this; return Nc(this, wc(this, "phone").then(function() { return Ku(oc(n), t, e, m(n.eb, n)) })) }, t.zc = function(t, e) { var n = this; return Nc(this, _t().then(function() { return Ku(oc(n), t, e, m(n.gb, n)) }), !0) }, t.pb = function(e) { var n = this; return Nc(this, this.F().then(function(t) { return n.b.pb(t, e) }).then(function(t) { return _c(n, t), n.reload() })) }, t.Rc = function(e) { var n = this; return Nc(this, this.F().then(function(t) { return e.b(n.b, t) }).then(function(t) { return _c(n, t), n.reload() })) }, t.qb = function(e) { var n = this; return Nc(this, this.F().then(function(t) { return n.b.qb(t, e) }).then(function(t) { return _c(n, t), n.reload() })) }, t.rb = function(e) { if (void 0 === e.displayName && void 0 === e.photoURL) return pc(this); var n = this; return Nc(this, this.F().then(function(t) { return n.b.rb(t, { displayName: e.displayName, photoUrl: e.photoURL }) }).then(function(t) { return _c(n, t), gc(n, "displayName", t.displayName || null), gc(n, "photoURL", t.photoUrl || null), R(n.providerData, function(t) { "password" === t.providerId && (Ir(t, "displayName", n.displayName), Ir(t, "photoURL", n.photoURL)) }), cc(n) }).then(fc)) }, t.Pc = function(i) { var o = this; return Nc(this, bc(this).then(function(t) { return M(dc(o), i) ? (e = o.b, n = t, r = [i], ns(e, Ma, { idToken: n, deleteProvider: r })).then(function(t) { var e = {}; return R(t.providerUserInfo || [], function(t) { e[t.providerId] = !0 }), R(dc(o), function(t) { e[t] || mc(o, t) }), e[Hi.PROVIDER_ID] || Ir(o, "phoneNumber", null), cc(o) }) : cc(o).then(function() { throw new qr("no-such-provider") }); var e, n, r })) }, t.delete = function() { var e = this; return Nc(this, this.F().then(function(t) { return ns(e.b, Pa, { idToken: t }) }).then(function() { e.dispatchEvent(new tc("userDeleted")) })).then(function() { for (var t = 0; t < e.G.length; t++) e.G[t].cancel("app-deleted");
                nc(e, null), ic(e, null), e.G = [], e.D = !0, sc(e), Ir(e, "refreshToken", null), e.a && e.a.unsubscribe(e) }) }, t.vb = function(t, e) { return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.aa || null) == e || "reauthViaRedirect" == t && (this.aa || null) == e) }, t.ha = function(t, e, n, r) { "linkViaPopup" != t && "reauthViaPopup" != t || r != (this.g || null) || (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v) }, t.xa = function(t, e) { return "linkViaPopup" == t && e == (this.g || null) ? m(this.Ab, this) : "reauthViaPopup" == t && e == (this.g || null) ? m(this.Bb, this) : "linkViaRedirect" == t && (this.aa || null) == e ? m(this.Ab, this) : "reauthViaRedirect" == t && (this.aa || null) == e ? m(this.Bb, this) : null }, t.rc = function(t) { var e = this; return Sc(this, "linkViaPopup", t, function() { return wc(e, t.providerId).then(function() { return cc(e) }) }, !1) }, t.Ac = function(t) { return Sc(this, "reauthViaPopup", t, function() { return _t() }, !0) }, t.sc = function(t) { var e = this; return Cc(this, "linkViaRedirect", t, function() { return wc(e, t.providerId) }, !1) }, t.Bc = function(t) { return Cc(this, "reauthViaRedirect", t, function() { return _t() }, !0) }, t.Ab = function(e, n, r) { var i = this;
            this.c && (this.c.cancel(), this.c = null); var o = null; return Nc(this, this.F().then(function(t) { return Ia(i.b, { requestUri: e, postBody: r, sessionId: n, idToken: t }) }).then(function(t) { return o = Ec(i, t, "link"), Tc(i, t) }).then(function() { return o })) }, t.Bb = function(t, e, n) { var r = this;
            this.c && (this.c.cancel(), this.c = null); var i = null; return Nc(this, _t().then(function() { return Si(Na(r.b, { requestUri: t, sessionId: e, postBody: n }), r.uid) }).then(function(t) { return i = Ec(r, t, "reauthenticate"), _c(r, t), r.i = null, r.reload() }).then(function() { return i }), !0) }, t.jb = function(e) { var n = this,
                r = null; return Nc(this, this.F().then(function(t) { return r = t, void 0 === e || nt(e) ? {} : Zr(new Wr(e)) }).then(function(t) { return n.b.jb(r, t) }).then(function(t) { if (n.email != t) return n.reload() }).then(function() {})) }, t.toJSON = function() { return this.C() }, t.C = function() { var e = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.m, appName: this.o, authDomain: this.u, stsTokenManager: this.h.C(), redirectEventId: this.aa || null }; return this.metadata && st(e, this.metadata.C()), R(this.providerData, function(t) { e.providerData.push(function(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]); return n }(t)) }), e }; var kc = { name: "redirectUser", A: "session" };

        function Rc(t) { return eu(t.b, kc, t.a) }

        function Oc(t) { var e, n, r, i, o, a, s, u, c;
            this.a = t, this.b = $s(), this.c = null, this.f = (e = this, n = Lc("local"), r = Lc("session"), i = Lc("none"), (o = e.b, a = n, s = e.a, u = tu(a, s), c = Zs(o, a.A), o.get(a, s).then(function(t) { var e = null; try { e = dr(h.localStorage.getItem(u)) } catch (t) {} if (e && !t) return h.localStorage.removeItem(u), o.set(a, e, s);
                e && t && "localStorage" != c.type && h.localStorage.removeItem(u) })).then(function() { return e.b.get(r, e.a) }).then(function(t) { return t ? r : e.b.get(i, e.a).then(function(t) { return t ? i : e.b.get(n, e.a).then(function(t) { return t ? n : e.b.get(Mc, e.a).then(function(t) { return t ? Lc(t) : n }) }) }) }).then(function(t) { return e.c = t, Pc(e, t.A) }).s(function() { e.c || (e.c = n) })), this.b.addListener(Lc("local"), this.a, m(this.g, this)) }

        function Pc(t, e) { var n, s, r = []; for (n in Xs) Xs[n] !== e && r.push(eu(t.b, Lc(Xs[n]), t.a)); return r.push(eu(t.b, Mc, t.a)), s = r, new pt(function(n, e) { var r = s.length,
                    i = []; if (r)
                    for (var t = function(t, e) { r--, i[t] = e, 0 == r && n(i) }, o = function(t) { e(t) }, a = 0; a < s.length; a++) Et(s[a], g(t, a), o);
                else n(i) }) }
        Oc.prototype.g = function() { var e = this,
                n = Lc("local");
            qc(this, function() { return _t().then(function() { return e.c && "local" != e.c.A ? e.b.get(n, e.a) : null }).then(function(t) { if (t) return Pc(e, "local").then(function() { e.c = n }) }) }) }; var Mc = { name: "persistence", A: "session" };

        function Lc(t) { return { name: "authUser", A: t } }

        function xc(t, e) { return qc(t, function() { return t.b.set(t.c, e.C(), t.a) }) }

        function Fc(t) { return qc(t, function() { return eu(t.b, t.c, t.a) }) }

        function Uc(t, e) { return qc(t, function() { return t.b.get(t.c, t.a).then(function(t) { return t && e && (t.authDomain = e), Dc(t || {}) }) }) }

        function qc(t, e) { return t.f = t.f.then(e, e), t.f }

        function Vc(t) { if (this.m = !1, Ir(this, "settings", new ju), Ir(this, "app", t), !zc(this).options || !zc(this).options.apiKey) throw new qr("invalid-api-key"); var n, e, r, i, o, a, s, u, c, h, l, f;
            t = Mh.SDK_VERSION ? ir(Mh.SDK_VERSION) : null, this.b = new oa(zc(this).options && zc(this).options.apiKey, ui(ai), t), this.N = [], this.o = [], this.I = [], this.Tb = Mh.INTERNAL.createSubscribe(m(this.mc, this)), this.O = void 0, this.Ub = Mh.INTERNAL.createSubscribe(m(this.nc, this)), Qc(this, null), this.h = new Oc(zc(this).options.apiKey + ":" + zc(this).name), this.w = new Ac(zc(this).options.apiKey + ":" + zc(this).name), this.V = Jc(this, (e = zc(n = this).options.authDomain, r = (i = n, o = (a = i.w, s = zc(i).options.authDomain, a.b.get(kc, a.a).then(function(t) { return t && s && (t.authDomain = s), Dc(t || {}) })).then(function(t) { return (i.D = t) && (t.ba = i.w), Rc(i.w) }), Jc(i, o)).then(function() { return Uc(n.h, e) }).then(function(e) { return e ? (e.ba = n.w, n.D && (n.D.aa || null) == (e.aa || null) ? e : e.reload().then(function() { return xc(n.h, e).then(function() { return e }) }).s(function(t) { return "auth/network-request-failed" == t.code ? e : Fc(n.h) })) : null }).then(function(t) { Qc(n, t || null) }), Jc(n, r))), this.i = Jc(this, (u = this).V.then(function() { return u.fa() }).s(function() {}).then(function() { if (!u.m) return u.ka() }).s(function() {}).then(function() { if (!u.m) { u.X = !0; var t = u.h;
                    t.b.addListener(Lc("local"), t.a, u.ka) } })), this.X = !1, this.ka = m(this.Mc, this), this.Ha = m(this.Z, this), this.ra = m(this.bc, this), this.sa = m(this.jc, this), this.ta = m(this.kc, this), h = zc(c = this).options.authDomain, l = zc(c).options.apiKey, h && ur() && (c.Sb = c.V.then(function() { if (!c.m) { if (c.a = xu(h, l, zc(c).name), c.a.subscribe(c), Gc(c) && hc(Gc(c)), c.D) { hc(c.D); var t = c.D;
                        t.pa(c.ea()), nc(t, c), rc(t = c.D, c.G), ic(t, c), c.D = null } return c.a } })), this.INTERNAL = {}, this.INTERNAL.delete = m(this.delete, this), this.INTERNAL.logFramework = m(this.tc, this), this.u = 0, De.call(this), f = this, Object.defineProperty(f, "lc", { get: function() { return this.ea() }, set: function(t) { this.pa(t) }, enumerable: !1 }), f.W = null, this.G = [] }

        function Bc(t) { ie.call(this, "languageCodeChanged"), this.g = t }

        function jc(t) { ie.call(this, "frameworkChanged"), this.c = t }

        function Wc(t) { return t.Sb || wt(new qr("auth-domain-config-required")) }

        function Kc(o, a) { var s = {}; return s.apiKey = zc(o).options.apiKey, s.authDomain = zc(o).options.authDomain, s.appName = zc(o).name, o.V.then(function() { return t = s, e = a, n = o.w, r = o.ya(), i = new ec(t, e), n && (i.ba = n), r && rc(i, r), i.reload().then(function() { return i }); var t, e, n, r, i }).then(function(t) { return Gc(o) && t.uid == Gc(o).uid ? vc(Gc(o), t) : (Qc(o, t), hc(t)), o.Z(t) }).then(function() { Xc(o) }) }

        function Qc(t, e) { var n, r;
            Gc(t) && (n = Gc(t), r = t.Ha, x(n.N, function(t) { return t == r }), be(Gc(t), "tokenChanged", t.ra), be(Gc(t), "userDeleted", t.sa), be(Gc(t), "userInvalidated", t.ta), sc(Gc(t))), e && (e.N.push(t.Ha), me(e, "tokenChanged", t.ra), me(e, "userDeleted", t.sa), me(e, "userInvalidated", t.ta), 0 < t.u && ac(e)), Ir(t, "currentUser", e), e && (e.pa(t.ea()), nc(e, t), rc(e, t.G), ic(e, t)) }

        function Hc(e, t) { var n = null,
                r = null; return Jc(e, t.then(function(t) { return n = Gi(t), r = pi(t), Kc(e, t) }).then(function() { return Dr({ user: Gc(e), credential: n, additionalUserInfo: r, operationType: "signIn" }) })) }

        function zc(t) { return t.app }

        function Gc(t) { return t.currentUser }

        function Yc(t) { return Gc(t) && Gc(t)._lat || null }

        function Xc(t) { if (t.X) { for (var e = 0; e < t.o.length; e++) t.o[e] && t.o[e](Yc(t)); if (t.O !== t.getUid() && t.I.length)
                    for (t.O = t.getUid(), e = 0; e < t.I.length; e++) t.I[e] && t.I[e](Yc(t)) } }

        function Jc(t, e) { return t.N.push(e), e.ia(function() { L(t.N, e) }), e }

        function $c() {}

        function Zc() { this.a = {}, this.b = 1e12 }
        Oc.prototype.mb = function(e) { var n = null,
                r = this; return function(t) { var e = new qr("invalid-persistence-type"),
                    n = new qr("unsupported-persistence-type");
                t: { for (r in Xs)
                        if (Xs[r] == t) { var r = !0; break t }
                    r = !1 }
                if (!r || "string" != typeof t) throw e; switch ($n()) {
                    case "ReactNative":
                        if ("session" === t) throw n; break;
                    case "Node":
                        if ("none" !== t) throw n; break;
                    default:
                        if (!sr() && "none" !== t) throw n } }(e), qc(this, function() { return e != r.c.A ? r.b.get(r.c, r.a).then(function(t) { return n = t, Pc(r, e) }).then(function() { if (r.c = Lc(e), n) return r.b.set(r.c, n, r.a) }) : _t() }) }, b(Vc, De), b(Bc, ie), b(jc, ie), (t = Vc.prototype).mb = function(t) { return Jc(this, t = this.h.mb(t)) }, t.pa = function(t) { this.W === t || this.m || (this.W = t, fa(this.b, this.W), this.dispatchEvent(new Bc(this.ea()))) }, t.ea = function() { return this.W }, t.Sc = function() { var t = h.navigator;
            this.pa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null) }, t.tc = function(t) { this.G.push(t), pa(this.b, Mh.SDK_VERSION ? ir(Mh.SDK_VERSION, this.G) : null), this.dispatchEvent(new jc(this.G)) }, t.ya = function() { return U(this.G) }, t.toJSON = function() { return { apiKey: zc(this).options.apiKey, authDomain: zc(this).options.authDomain, appName: zc(this).name, currentUser: Gc(this) && Gc(this).C() } }, t.vb = function(t, e) { switch (t) {
                case "unknown":
                case "signInViaRedirect":
                    return !0;
                case "signInViaPopup":
                    return this.g == e && !!this.f;
                default:
                    return !1 } }, t.ha = function(t, e, n, r) { "signInViaPopup" == t && this.g == r && (n && this.v ? this.v(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.v) }, t.xa = function(t, e) { return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? m(this.ac, this) : null }, t.ac = function(t, e, n) { var r = this;
            t = { requestUri: t, postBody: n, sessionId: e }, this.c && (this.c.cancel(), this.c = null); var i = null,
                o = null,
                a = Ca(r.b, t).then(function(t) { return i = Gi(t), o = pi(t), t }); return Jc(this, t = r.V.then(function() { return a }).then(function(t) { return Kc(r, t) }).then(function() { return Dr({ user: Gc(r), credential: i, additionalUserInfo: o, operationType: "signIn" }) })) }, t.Kc = function(e) { if (!ur()) return wt(new qr("operation-not-supported-in-this-environment")); var n = this,
                t = fi(e.providerId),
                r = yr(),
                i = null;
            (!lr() || Xn()) && zc(this).options.authDomain && e.isOAuthProvider && (i = gs(zc(this).options.authDomain, zc(this).options.apiKey, zc(this).name, "signInViaPopup", e, null, r, Mh.SDK_VERSION || null)); var o = Qn(i, t && t.Ba, t && t.Aa); return Jc(this, t = Wc(this).then(function(t) { return Pu(t, o, "signInViaPopup", e, r, !!i) }).then(function() { return new pt(function(t, e) { n.ha("signInViaPopup", null, new qr("cancelled-popup-request"), n.g), n.f = t, n.v = e, n.g = r, n.c = n.a.Ea(n, "signInViaPopup", o, r) }) }).then(function(t) { return o && Kn(o), t ? Dr(t) : null }).s(function(t) { throw o && Kn(o), t })) }, t.Lc = function(t) { if (!ur()) return wt(new qr("operation-not-supported-in-this-environment")); var e = this; return Jc(this, Wc(this).then(function() { return qc(t = e.h, function() { return t.b.set(Mc, t.c.A, t.a) }); var t }).then(function() { return e.a.Ca("signInViaRedirect", t) })) }, t.fa = function() { if (!ur()) return wt(new qr("operation-not-supported-in-this-environment")); var t = this; return Jc(this, Wc(this).then(function() { return t.a.fa() }).then(function(t) { return t ? Dr(t) : null })) }, t.Qc = function(t) { if (!t) return wt(new qr("null-user")); var e = this,
                n = {};
            n.apiKey = zc(this).options.apiKey, n.authDomain = zc(this).options.authDomain, n.appName = zc(this).name; var r = function(t, e, n, r) { e = e || { apiKey: t.m, authDomain: t.u, appName: t.o }; var i = t.h,
                    o = {}; return o[sa] = i.b, o.refreshToken = i.a, o.expiresIn = (i.c - v()) / 1e3, e = new ec(e, o), n && (e.ba = n), r && rc(e, r), vc(e, t), e }(t, n, e.w, e.ya()); return Jc(this, this.i.then(function() { if (zc(e).options.apiKey != t.m) return r.reload() }).then(function() { return Gc(e) && t.uid == Gc(e).uid ? (vc(Gc(e), t), e.Z(t)) : (Qc(e, r), hc(r), e.Z(r)) }).then(function() { Xc(e) })) }, t.nb = function() { var t = this; return Jc(this, this.i.then(function() { return Gc(t) ? (Qc(t, null), Fc(t.h).then(function() { Xc(t) })) : _t() })) }, t.Mc = function() { var r = this; return Uc(this.h, zc(this).options.authDomain).then(function(t) { if (!r.m) { var e; if (e = Gc(r) && t) { e = Gc(r).uid; var n = t.uid;
                        e = null != e && "" !== e && null != n && "" !== n && e == n } if (e) return vc(Gc(r), t), Gc(r).F();
                    (Gc(r) || t) && (Qc(r, t), t && (hc(t), t.ba = r.w), r.a && r.a.subscribe(r), Xc(r)) } }) }, t.Z = function(t) { return xc(this.h, t) }, t.bc = function() { Xc(this), this.Z(Gc(this)) }, t.jc = function() { this.nb() }, t.kc = function() { this.nb() }, t.mc = function(t) { var e = this;
            this.addAuthTokenListener(function() { t.next(Gc(e)) }) }, t.nc = function(t) { var e, n, r = this;
            n = function() { t.next(Gc(r)) }, (e = this).I.push(n), Jc(e, e.i.then(function() {!e.m && M(e.I, n) && e.O !== e.getUid() && (e.O = e.getUid(), n(Yc(e))) })) }, t.vc = function(t, e, n) { var r = this; return this.X && Mh.Promise.resolve().then(function() { a(t) ? t(Gc(r)) : a(t.next) && t.next(Gc(r)) }), this.Tb(t, e, n) }, t.uc = function(t, e, n) { var r = this; return this.X && Mh.Promise.resolve().then(function() { r.O = r.getUid(), a(t) ? t(Gc(r)) : a(t.next) && t.next(Gc(r)) }), this.Ub(t, e, n) }, t.cc = function(t) { var e = this; return Jc(this, this.i.then(function() { return Gc(e) ? Gc(e).F(t).then(function(t) { return { accessToken: t } }) : null })) }, t.Nb = function(t) { var n = this; return this.i.then(function() { return Hc(n, ns(n.b, Ja, { token: t })) }).then(function(t) { var e = t.user; return gc(e, "isAnonymous", !1), n.Z(e), t }) }, t.Ec = function(t) { return Sr("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead."), this.Nb(t) }, t.Fc = function(t, e) { return Sr("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead."), this.Ob(t, e) }, t.Ob = function(t, e) { var n = this; return this.i.then(function() { return Hc(n, ns(n.b, $a, { email: t, password: e })) }) }, t.xb = function(t, e) { var n = this; return this.i.then(function() { return Hc(n, ns(n.b, Ra, { email: t, password: e })) }) }, t.Wb = function(t, e) { return Sr("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead."), this.xb(t, e) }, t.Hc = function(t) { return Sr("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead."), this.Pa(t).then(function(t) { return t.user }) }, t.Pa = function(t) { var e = this; return this.i.then(function() { return Hc(e, t.la(e.b)) }) }, t.Qa = function() { var n = this; return this.i.then(function() { var t = Gc(n); return t && t.isAnonymous ? Dr({ user: t, credential: null, additionalUserInfo: Dr({ providerId: null, isNewUser: !1 }), operationType: "signIn" }) : Hc(n, n.b.Qa()).then(function(t) { var e = t.user; return gc(e, "isAnonymous", !0), n.Z(e), t }) }) }, t.Gc = function() { return Sr("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead."), this.Qa() }, t.getUid = function() { return Gc(this) && Gc(this).uid || null }, t.Vb = function(t) { this.addAuthTokenListener(t), this.u++, 0 < this.u && Gc(this) && ac(Gc(this)) }, t.Cc = function(e) { var n = this;
            R(this.o, function(t) { t == e && n.u-- }), this.u < 0 && (this.u = 0), 0 == this.u && Gc(this) && sc(Gc(this)), this.removeAuthTokenListener(e) }, t.addAuthTokenListener = function(t) { var e = this;
            this.o.push(t), Jc(this, this.i.then(function() { e.m || M(e.o, t) && t(Yc(e)) })) }, t.removeAuthTokenListener = function(e) { x(this.o, function(t) { return t == e }) }, t.delete = function() { this.m = !0; for (var t = 0; t < this.N.length; t++) this.N[t].cancel("app-deleted"); return this.N = [], this.h && (t = this.h).b.removeListener(Lc("local"), t.a, this.ka), this.a && (this.a.unsubscribe(this), this.a.Ya()), Mh.Promise.resolve() }, t.Zb = function(t) { return Sr("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead."), Jc(this, ns(this.b, Oa, { identifier: t, continueUri: cr() ? Bn() : "http://localhost" }).then(function(t) { return t.allProviders || [] })) }, t.$b = function(t) { return Jc(this, ns(this.b, Oa, { identifier: t, continueUri: cr() ? Bn() : "http://localhost" }).then(function(t) { return t.signinMethods || [] })) }, t.oc = function(t) { return !!Wi(t) }, t.lb = function(e, n) { var r = this; return Jc(this, _t().then(function() { var t = new Wr(n); if (!t.c) throw new qr("argument-error", Hr + " must be true when sending sign in link to email"); return Zr(t) }).then(function(t) { return r.b.lb(e, t) }).then(function() {})) }, t.Tc = function(t) { return this.Ja(t).then(function(t) { return t.data.email }) }, t.Za = function(t, e) { return Jc(this, this.b.Za(t, e).then(function() {})) }, t.Ja = function(t) { return Jc(this, this.b.Ja(t).then(function(t) { return new kr(t) })) }, t.Wa = function(t) { return Jc(this, this.b.Wa(t).then(function() {})) }, t.kb = function(e, t) { var n = this; return Jc(this, _t().then(function() { return void 0 === t || nt(t) ? {} : Zr(new Wr(t)) }).then(function(t) { return n.b.kb(e, t) }).then(function() {})) }, t.Jc = function(t, e) { return Jc(this, Ku(this, t, e, m(this.Pa, this))) }, t.Ic = function(e, n) { var r = this; return Jc(this, _t().then(function() { var t = ji(e, n || Bn()); return r.Pa(t) })) }, $c.prototype.render = function() {}, $c.prototype.reset = function() {}, $c.prototype.getResponse = function() {}, $c.prototype.execute = function() {}; var th = null;

        function eh(t, e) { return (e = nh(e)) && t.a[e] || null }

        function nh(t) { return (t = void 0 === t ? 1e12 : t) ? t.toString() : null }

        function rh(t, e) { this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = kn(t); var n = this;
            this.i = function() { n.execute() }, this.h ? this.execute() : me(this.f, "click", this.i) }

        function ih(t) { if (t.g) throw Error("reCAPTCHA mock was already deleted!") }

        function oh() {}
        Zc.prototype.render = function(t, e) { return this.a[this.b.toString()] = new rh(t, e), this.b++ }, Zc.prototype.reset = function(t) { var e = eh(this, t);
            t = nh(t), e && t && (e.delete(), delete this.a[t]) }, Zc.prototype.getResponse = function(t) { return (t = eh(this, t)) ? t.getResponse() : null }, Zc.prototype.execute = function(t) {
            (t = eh(this, t)) && t.execute() }, rh.prototype.getResponse = function() { return ih(this), this.b }, rh.prototype.execute = function() { ih(this); var n = this;
            this.a || (this.a = setTimeout(function() { n.b = function() { for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }(); var t = n.c.callback,
                    e = n.c["expired-callback"]; if (t) try { t(n.b) } catch (t) {}
                n.a = setTimeout(function() { if (n.a = null, n.b = null, e) try { e() } catch (t) {}
                    n.h && n.execute() }, 6e4) }, 500)) }, rh.prototype.delete = function() { ih(this), this.g = !0, clearTimeout(this.a), this.a = null, be(this.f, "click", this.i) }, oh.prototype.g = function() { return th || (th = new Zc), _t(th) }, oh.prototype.c = function() {}; var ah = null;

        function sh() { this.b = h.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString() } var uh = dn("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
            ch = new vr(3e4, 6e4);
        sh.prototype.g = function(i) { var o = this; return new pt(function(t, e) { var r = setTimeout(function() { e(new qr("network-request-failed")) }, ch.get());!h.grecaptcha || i !== o.f && !o.b ? (h[o.a] = function() { if (h.grecaptcha) { o.f = i; var n = h.grecaptcha.render;
                        h.grecaptcha.render = function(t, e) { return t = n(t, e), o.b++, t }, clearTimeout(r), t(h.grecaptcha) } else clearTimeout(r), e(new qr("internal-error"));
                    delete h[o.a] }, _t($o(gn(uh, { onload: o.a, hl: i || "" }))).s(function() { clearTimeout(r), e(new qr("internal-error", "Unable to load external reCAPTCHA dependencies!")) })) : (clearTimeout(r), t(h.grecaptcha)) }) }, sh.prototype.c = function() { this.b-- }; var hh = null;

        function lh(t, e, n, r, i, o, a) { if (Ir(this, "type", "recaptcha"), this.c = this.f = null, this.D = !1, this.m = e, this.g = null, a = a ? (ah || (ah = new oh), ah) : (hh || (hh = new sh), hh), this.o = a, this.a = n || { theme: "light", type: "image" }, this.h = [], this.a[dh]) throw new qr("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."); if (this.i = "invisible" === this.a[yh], !h.document) throw new qr("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."); if (!kn(e) || !this.i && kn(e).hasChildNodes()) throw new qr("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
            this.u = new oa(t, o || null, i || null), this.v = r || function() { return null }; var s = this;
            this.l = []; var u = this.a[fh];
            this.a[fh] = function(t) { if (mh(s, t), "function" == typeof u) u(t);
                else if ("string" == typeof u) { var e = ar(u, h); "function" == typeof e && e(t) } }; var c = this.a[ph];
            this.a[ph] = function() { if (mh(s, null), "function" == typeof c) c();
                else if ("string" == typeof c) { var t = ar(c, h); "function" == typeof t && t() } } } var fh = "callback",
            ph = "expired-callback",
            dh = "sitekey",
            yh = "size";

        function mh(t, e) { for (var n = 0; n < t.l.length; n++) try { t.l[n](e) } catch (t) {} }

        function gh(t, e) { return t.h.push(e), e.ia(function() { L(t.h, e) }), e }

        function vh(t) { if (t.D) throw new qr("internal-error", "RecaptchaVerifier instance has been destroyed.") }

        function bh(t, e, n) { var r = !1; try { this.b = n || Mh.app() } catch (t) { throw new qr("argument-error", "No firebase.app.App instance is currently initialized.") } if (!this.b.options || !this.b.options.apiKey) throw new qr("invalid-api-key");
            n = this.b.options.apiKey; var i = this,
                o = null; try { o = this.b.auth().ya() } catch (t) {} try { r = this.b.auth().settings.appVerificationDisabledForTesting } catch (t) {}
            o = Mh.SDK_VERSION ? ir(Mh.SDK_VERSION, o) : null, lh.call(this, n, t, e, function() { try { var e = i.b.auth().ea() } catch (t) { e = null } return e }, o, ui(ai), r) }

        function _h(t, e, n, r) { t: { n = Array.prototype.slice.call(n); for (var i = 0, o = !1, a = 0; a < e.length; a++)
                    if (e[a].optional) o = !0;
                    else { if (o) throw new qr("internal-error", "Argument validator encountered a required argument after an optional argument.");
                        i++ }
                if (o = e.length, n.length < i || o < n.length) r = "Expected " + (i == o ? 1 == i ? "1 argument" : i + " arguments" : i + "-" + o + " arguments") + " but got " + n.length + ".";
                else { for (i = 0; i < n.length; i++)
                        if (o = e[i].optional && void 0 === n[i], !e[i].M(n[i]) && !o) { if (e = e[i], i < 0 || i >= wh.length) throw new qr("internal-error", "Argument validator received an unsupported number of arguments.");
                            n = wh[i], r = (r ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.K + "."; break t }
                    r = null } } if (r) throw new qr("argument-error", t + " failed: " + r) }(t = lh.prototype).za = function() { var e = this; return this.f ? this.f : this.f = gh(this, _t().then(function() { if (cr() && !Jn()) return Gn(); throw new qr("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.") }).then(function() { return e.o.g(e.v()) }).then(function(t) { return e.g = t, ns(e.u, ja, {}) }).then(function(t) { e.a[dh] = t.recaptchaSiteKey }).s(function(t) { throw e.f = null, t })) }, t.render = function() { vh(this); var n = this; return gh(this, this.za().then(function() { if (null === n.c) { var t = n.m; if (!n.i) { var e = kn(t);
                        t = Pn("DIV"), e.appendChild(t) }
                    n.c = n.g.render(t, n.a) } return n.c })) }, t.verify = function() { vh(this); var i = this; return gh(this, this.render().then(function(e) { return new pt(function(n) { var t = i.g.getResponse(e); if (t) n(t);
                    else { var r = function(t) { var e;
                            t && (e = r, x(i.l, function(t) { return t == e }), n(t)) };
                        i.l.push(r), i.i && i.g.execute(i.c) } }) })) }, t.reset = function() { vh(this), null !== this.c && this.g.reset(this.c) }, t.clear = function() { vh(this), this.D = !0, this.o.c(); for (var t = 0; t < this.h.length; t++) this.h[t].cancel("RecaptchaVerifier instance has been destroyed."); if (!this.i) { t = kn(this.m); for (var e; e = t.firstChild;) t.removeChild(e) } }, b(bh, lh); var wh = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

        function Eh(t, e) { return { name: t || "", K: "a valid string", optional: !!e, M: c } }

        function Th(t, e) { return { name: t || "", K: "a boolean", optional: !!e, M: n } }

        function Sh(t, e) { return { name: t || "", K: "a valid object", optional: !!e, M: d } }

        function Ch(t, e) { return { name: t || "", K: "a function", optional: !!e, M: a } }

        function Ih(t, e) { return { name: t || "", K: "null", optional: !!e, M: r } }

        function Nh(n) { return { name: n ? n + "Credential" : "credential", K: n ? "a valid " + n + " credential" : "a valid credential", optional: !1, M: function(t) { if (!t) return !1; var e = !n || t.providerId === n; return !(!t.la || !e) } } }

        function Dh() { return { name: "applicationVerifier", K: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, M: function(t) { return !!(t && c(t.type) && a(t.verify)) } } }

        function Ah(e, n, t, r) { return { name: t || "", K: e.K + " or " + n.K, optional: !!r, M: function(t) { return e.M(t) || n.M(t) } } }

        function kh(t, e) { for (var n in e) { var r = e[n].name;
                t[r] = Ph(r, t[n], e[n].j) } }

        function Rh(t, e) { for (var n in e) { var r = e[n].name;
                r !== n && Object.defineProperty(t, r, { get: g(function(t) { return this[t] }, n), set: g(function(t, e, n, r) { _h(t, [n], [r], !0), this[e] = r }, r, n, e[n].tb), enumerable: !0 }) } }

        function Oh(t, e, n, r) { t[e] = Ph(e, n, r) }

        function Ph(t, e, n) {
            function r() { var t = Array.prototype.slice.call(arguments); return _h(a, n, t), e.apply(this, t) } if (!n) return e; var i, o, a = (o = (o = t).split("."))[o.length - 1]; for (i in e) r[i] = e[i]; for (i in e.prototype) r.prototype[i] = e.prototype[i]; return r }
        kh(Vc.prototype, { Wa: { name: "applyActionCode", j: [Eh("code")] }, Ja: { name: "checkActionCode", j: [Eh("code")] }, Za: { name: "confirmPasswordReset", j: [Eh("code"), Eh("newPassword")] }, xb: { name: "createUserWithEmailAndPassword", j: [Eh("email"), Eh("password")] }, Wb: { name: "createUserAndRetrieveDataWithEmailAndPassword", j: [Eh("email"), Eh("password")] }, Zb: { name: "fetchProvidersForEmail", j: [Eh("email")] }, $b: { name: "fetchSignInMethodsForEmail", j: [Eh("email")] }, fa: { name: "getRedirectResult", j: [] }, oc: { name: "isSignInWithEmailLink", j: [Eh("emailLink")] }, uc: { name: "onAuthStateChanged", j: [Ah(Sh(), Ch(), "nextOrObserver"), Ch("opt_error", !0), Ch("opt_completed", !0)] }, vc: { name: "onIdTokenChanged", j: [Ah(Sh(), Ch(), "nextOrObserver"), Ch("opt_error", !0), Ch("opt_completed", !0)] }, kb: { name: "sendPasswordResetEmail", j: [Eh("email"), Ah(Sh("opt_actionCodeSettings", !0), Ih(null, !0), "opt_actionCodeSettings", !0)] }, lb: { name: "sendSignInLinkToEmail", j: [Eh("email"), Sh("actionCodeSettings")] }, mb: { name: "setPersistence", j: [Eh("persistence")] }, Pa: { name: "signInAndRetrieveDataWithCredential", j: [Nh()] }, Qa: { name: "signInAnonymously", j: [] }, Gc: { name: "signInAnonymouslyAndRetrieveData", j: [] }, Hc: { name: "signInWithCredential", j: [Nh()] }, Nb: { name: "signInWithCustomToken", j: [Eh("token")] }, Ec: { name: "signInAndRetrieveDataWithCustomToken", j: [Eh("token")] }, Ob: { name: "signInWithEmailAndPassword", j: [Eh("email"), Eh("password")] }, Ic: { name: "signInWithEmailLink", j: [Eh("email"), Eh("emailLink", !0)] }, Fc: { name: "signInAndRetrieveDataWithEmailAndPassword", j: [Eh("email"), Eh("password")] }, Jc: { name: "signInWithPhoneNumber", j: [Eh("phoneNumber"), Dh()] }, Kc: { name: "signInWithPopup", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, Lc: { name: "signInWithRedirect", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, Qc: { name: "updateCurrentUser", j: [Ah({ name: "user", K: "an instance of Firebase User", optional: !1, M: function(t) { return !!(t && t instanceof ec) } }, Ih(), "user")] }, nb: { name: "signOut", j: [] }, toJSON: { name: "toJSON", j: [Eh(null, !0)] }, Sc: { name: "useDeviceLanguage", j: [] }, Tc: { name: "verifyPasswordResetCode", j: [Eh("code")] } }), Rh(Vc.prototype, { lc: { name: "languageCode", tb: Ah(Eh(), Ih(), "languageCode") } }), (Vc.Persistence = Xs).LOCAL = "local", Vc.Persistence.SESSION = "session", Vc.Persistence.NONE = "none", kh(ec.prototype, { delete: { name: "delete", j: [] }, dc: { name: "getIdTokenResult", j: [Th("opt_forceRefresh", !0)] }, F: { name: "getIdToken", j: [Th("opt_forceRefresh", !0)] }, eb: { name: "linkAndRetrieveDataWithCredential", j: [Nh()] }, pc: { name: "linkWithCredential", j: [Nh()] }, qc: { name: "linkWithPhoneNumber", j: [Eh("phoneNumber"), Dh()] }, rc: { name: "linkWithPopup", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, sc: { name: "linkWithRedirect", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, gb: { name: "reauthenticateAndRetrieveDataWithCredential", j: [Nh()] }, yc: { name: "reauthenticateWithCredential", j: [Nh()] }, zc: { name: "reauthenticateWithPhoneNumber", j: [Eh("phoneNumber"), Dh()] }, Ac: { name: "reauthenticateWithPopup", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, Bc: { name: "reauthenticateWithRedirect", j: [{ name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } }] }, reload: { name: "reload", j: [] }, jb: { name: "sendEmailVerification", j: [Ah(Sh("opt_actionCodeSettings", !0), Ih(null, !0), "opt_actionCodeSettings", !0)] }, toJSON: { name: "toJSON", j: [Eh(null, !0)] }, Pc: { name: "unlink", j: [Eh("provider")] }, pb: { name: "updateEmail", j: [Eh("email")] }, qb: { name: "updatePassword", j: [Eh("password")] }, Rc: { name: "updatePhoneNumber", j: [Nh("phone")] }, rb: { name: "updateProfile", j: [Sh("profile")] } }), kh(Zc.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), kh($c.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), kh(pt.prototype, { ia: { name: "finally" }, s: { name: "catch" }, then: { name: "then" } }), Rh(ju.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", tb: Th("appVerificationDisabledForTesting") } }), kh(Wu.prototype, { confirm: { name: "confirm", j: [Eh("verificationCode")] } }), Oh(Bi, "credential", function(t, e) { return new Vi(t, e) }, [Eh("email"), Eh("password")]), kh(Oi.prototype, { ua: { name: "addScope", j: [Eh("scope")] }, Da: { name: "setCustomParameters", j: [Sh("customOAuthParameters")] } }), Oh(Oi, "credential", Pi, [Ah(Eh(), Sh(), "token")]), Oh(Bi, "credentialWithLink", ji, [Eh("email"), Eh("emailLink")]), kh(Mi.prototype, { ua: { name: "addScope", j: [Eh("scope")] }, Da: { name: "setCustomParameters", j: [Sh("customOAuthParameters")] } }), Oh(Mi, "credential", Li, [Ah(Eh(), Sh(), "token")]), kh(xi.prototype, { ua: { name: "addScope", j: [Eh("scope")] }, Da: { name: "setCustomParameters", j: [Sh("customOAuthParameters")] } }), Oh(xi, "credential", Fi, [Ah(Eh(), Ah(Sh(), Ih()), "idToken"), Ah(Eh(), Ih(), "accessToken", !0)]), kh(Ui.prototype, { Da: { name: "setCustomParameters", j: [Sh("customOAuthParameters")] } }), Oh(Ui, "credential", qi, [Ah(Eh(), Sh(), "token"), Eh("secret", !0)]), kh(Ri.prototype, { ua: { name: "addScope", j: [Eh("scope")] }, credential: { name: "credential", j: [Ah(Eh(), Ih(), "idToken", !0), Ah(Eh(), Ih(), "accessToken", !0), Ah(Eh(), Ih(), "nonce", !0)] }, Da: { name: "setCustomParameters", j: [Sh("customOAuthParameters")] } }), Oh(Hi, "credential", zi, [Eh("verificationId"), Eh("verificationCode")]), kh(Hi.prototype, { Ua: { name: "verifyPhoneNumber", j: [Eh("phoneNumber"), Dh()] } }), kh(qr.prototype, { toJSON: { name: "toJSON", j: [Eh(null, !0)] } }), kh(no.prototype, { toJSON: { name: "toJSON", j: [Eh(null, !0)] } }), kh(eo.prototype, { toJSON: { name: "toJSON", j: [Eh(null, !0)] } }), kh(bh.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } }),
            function() { if (void 0 === Mh || !Mh.INTERNAL || !Mh.INTERNAL.registerService) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library."); var t = { Auth: Vc, Error: qr };
                Oh(t, "EmailAuthProvider", Bi, []), Oh(t, "FacebookAuthProvider", Oi, []), Oh(t, "GithubAuthProvider", Mi, []), Oh(t, "GoogleAuthProvider", xi, []), Oh(t, "TwitterAuthProvider", Ui, []), Oh(t, "OAuthProvider", Ri, [Eh("providerId")]), Oh(t, "SAMLAuthProvider", ki, [Eh("providerId")]), Oh(t, "PhoneAuthProvider", Hi, [{ name: "auth", K: "an instance of Firebase Auth", optional: !0, M: function(t) { return !!(t && t instanceof Vc) } }]), Oh(t, "RecaptchaVerifier", bh, [Ah(Eh(), { name: "", K: "an HTML element", optional: !1, M: function(t) { return !!(t && t instanceof Element) } }, "recaptchaContainer"), Sh("recaptchaParameters", !0), { name: "app", K: "an instance of Firebase App", optional: !0, M: function(t) { return !!(t && t instanceof Mh.app.App) } }]), Mh.INTERNAL.registerService("auth", function(t, e) { return e({ INTERNAL: { getUid: m((t = new Vc(t)).getUid, t), getToken: m(t.cc, t), addAuthTokenListener: m(t.Vb, t), removeAuthTokenListener: m(t.Cc, t) } }), t }, t, function(t, e) { if ("create" === t) try { e.auth() } catch (t) {} }), Mh.INTERNAL.extendNamespace({ User: ec }) }() }).apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}), (or = ir || (ir = {}))[or.DEBUG = 0] = "DEBUG", or[or.VERBOSE = 1] = "VERBOSE", or[or.INFO = 2] = "INFO", or[or.WARN = 3] = "WARN", or[or.ERROR = 4] = "ERROR", or[or.SILENT = 5] = "SILENT"; var ar, sr = ir.INFO,
        ur = function(t, e) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; if (!(e < t.logLevel)) { var i = (new Date).toISOString(); switch (e) {
                    case ir.DEBUG:
                    case ir.VERBOSE:
                        console.log.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n)); break;
                    case ir.INFO:
                        console.info.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n)); break;
                    case ir.WARN:
                        console.warn.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n)); break;
                    case ir.ERROR:
                        console.error.apply(console, ["[" + i + "]  " + t.name + ":"].concat(n)); break;
                    default:
                        throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")") } } },
        cr = function() {
            function t(t) { this.name = t, this._logLevel = sr, this._logHandler = ur } return Object.defineProperty(t.prototype, "logLevel", { get: function() { return this._logLevel }, set: function(t) { if (!(t in ir)) throw new TypeError("Invalid value assigned to `logLevel`");
                    this._logLevel = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "logHandler", { get: function() { return this._logHandler }, set: function(t) { if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = t }, enumerable: !0, configurable: !0 }), t.prototype.debug = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._logHandler.apply(this, [this, ir.DEBUG].concat(t)) }, t.prototype.log = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._logHandler.apply(this, [this, ir.VERBOSE].concat(t)) }, t.prototype.info = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._logHandler.apply(this, [this, ir.INFO].concat(t)) }, t.prototype.warn = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._logHandler.apply(this, [this, ir.WARN].concat(t)) }, t.prototype.error = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this._logHandler.apply(this, [this, ir.ERROR].concat(t)) }, t }(),
        hr = function() {
            function t(t) { this.domStorage_ = t, this.prefix_ = "firebase:" } return t.prototype.set = function(t, e) { null == e ? this.domStorage_.removeItem(this.prefixedName_(t)) : this.domStorage_.setItem(this.prefixedName_(t), Rn(e)) }, t.prototype.get = function(t) { var e = this.domStorage_.getItem(this.prefixedName_(t)); return null == e ? null : kn(e) }, t.prototype.remove = function(t) { this.domStorage_.removeItem(this.prefixedName_(t)) }, t.prototype.prefixedName_ = function(t) { return this.prefix_ + t }, t.prototype.toString = function() { return this.domStorage_.toString() }, t }(),
        lr = function() {
            function t() { this.cache_ = {}, this.isInMemoryStorage = !0 } return t.prototype.set = function(t, e) { null == e ? delete this.cache_[t] : this.cache_[t] = e }, t.prototype.get = function(t) { return Pn(this.cache_, t) ? this.cache_[t] : null }, t.prototype.remove = function(t) { delete this.cache_[t] }, t }(),
        fr = function(t) { try { if ("undefined" != typeof window && void 0 !== window[t]) { var e = window[t]; return e.setItem("firebase:sentinel", "cache"), e.removeItem("firebase:sentinel"), new hr(e) } } catch (t) {} return new lr },
        pr = fr("localStorage"),
        dr = fr("sessionStorage"),
        yr = new cr("@firebase/database"),
        mr = (ar = 1, function() { return ar++ }),
        gr = function(t) { var e = function(t) { for (var e = [], n = 0, r = 0; r < t.length; r++) { var i = t.charCodeAt(r); if (55296 <= i && i <= 56319) { var o = i - 55296;
                            dn(++r < t.length, "Surrogate pair missing trail surrogate."), i = 65536 + (o << 10) + (t.charCodeAt(r) - 56320) }
                        e[n++] = i < 128 ? i : (e[n++] = i < 2048 ? i >> 6 | 192 : (e[n++] = i < 65536 ? i >> 12 | 224 : (e[n++] = i >> 18 | 240, i >> 12 & 63 | 128), i >> 6 & 63 | 128), 63 & i | 128) } return e }(t),
                n = new jn;
            n.update(e); var r = n.digest(); return gn.encodeByteArray(r) },
        vr = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; for (var n = "", r = 0; r < t.length; r++) Array.isArray(t[r]) || t[r] && "object" == typeof t[r] && "number" == typeof t[r].length ? n += vr.apply(null, t[r]) : "object" == typeof t[r] ? n += Rn(t[r]) : n += t[r], n += " "; return n },
        br = null,
        _r = !0,
        wr = function(t, e) { dn(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."), !0 === t ? (yr.logLevel = ir.VERBOSE, br = yr.log.bind(yr), e && dr.set("logging_enabled", !0)) : "function" == typeof t ? br = t : (br = null, dr.remove("logging_enabled")) },
        Er = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; if (!0 === _r && (_r = !1, null === br && !0 === dr.get("logging_enabled") && wr(!0)), br) { var n = vr.apply(null, t);
                br(n) } },
        Tr = function(n) { return function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                Er.apply(void 0, [n].concat(t)) } },
        Sr = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = "FIREBASE INTERNAL ERROR: " + vr.apply(void 0, t);
            yr.error(n) },
        Cr = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = "FIREBASE FATAL ERROR: " + vr.apply(void 0, t); throw yr.error(n), new Error(n) },
        Ir = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = "FIREBASE WARNING: " + vr.apply(void 0, t);
            yr.warn(n) },
        Nr = function(t) { return "number" == typeof t && (t != t || t == Number.POSITIVE_INFINITY || t == Number.NEGATIVE_INFINITY) },
        Dr = "[MIN_NAME]",
        Ar = "[MAX_NAME]",
        kr = function(t, e) { if (t === e) return 0; if (t === Dr || e === Ar) return -1; if (e === Dr || t === Ar) return 1; var n = Ur(t),
                r = Ur(e); return null !== n ? null !== r ? n - r == 0 ? t.length - e.length : n - r : -1 : null !== r ? 1 : t < e ? -1 : 1 },
        Rr = function(t, e) { return t === e ? 0 : t < e ? -1 : 1 },
        Or = function(t, e) { if (e && t in e) return e[t]; throw new Error("Missing required key (" + t + ") in object: " + Rn(e)) },
        Pr = function(t) { if ("object" != typeof t || null === t) return Rn(t); var e = []; for (var n in t) e.push(n);
            e.sort(); for (var r = "{", i = 0; i < e.length; i++) 0 !== i && (r += ","), r += Rn(e[i]), r += ":", r += Pr(t[e[i]]); return r += "}" },
        Mr = function(t, e) { var n = t.length; if (n <= e) return [t]; for (var r = [], i = 0; i < n; i += e) n < i + e ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e)); return r },
        Lr = function(t, n) { if (Array.isArray(t))
                for (var e = 0; e < t.length; ++e) n(e, t[e]);
            else Ln(t, function(t, e) { return n(e, t) }) },
        xr = function(t) { dn(!Nr(t), "Invalid JSON number"); var e, n, r, i, o, a, s; for (0 === t ? e = 1 / t == -1 / (r = n = 0) ? 1 : 0 : (e = t < 0, r = (t = Math.abs(t)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) + 1023, Math.round(t * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, Math.round(t / Math.pow(2, -1074)))), a = [], o = 52; o; o -= 1) a.push(r % 2 ? 1 : 0), r = Math.floor(r / 2); for (o = 11; o; o -= 1) a.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
            a.push(e ? 1 : 0), a.reverse(), s = a.join(""); var u = ""; for (o = 0; o < 64; o += 8) { var c = parseInt(s.substr(o, 8), 2).toString(16);
                1 === c.length && (c = "0" + c), u += c } return u.toLowerCase() },
        Fr = new RegExp("^-?\\d{1,10}$"),
        Ur = function(t) { if (Fr.test(t)) { var e = Number(t); if (-2147483648 <= e && e <= 2147483647) return e } return null },
        qr = function(t) { try { t() } catch (e) { setTimeout(function() { var t = e.stack || ""; throw Ir("Exception was thrown by user callback.", t), e }, Math.floor(0)) } },
        Vr = function(t, e) { var n = setTimeout(t, e); return "object" == typeof n && n.unref && n.unref(), n },
        Br = function() {
            function i(t, e) { if (void 0 === e) { this.pieces_ = t.split("/"); for (var n = 0, r = 0; r < this.pieces_.length; r++) 0 < this.pieces_[r].length && (this.pieces_[n] = this.pieces_[r], n++);
                    this.pieces_.length = n, this.pieceNum_ = 0 } else this.pieces_ = t, this.pieceNum_ = e } return Object.defineProperty(i, "Empty", { get: function() { return new i("") }, enumerable: !0, configurable: !0 }), i.prototype.getFront = function() { return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_] }, i.prototype.getLength = function() { return this.pieces_.length - this.pieceNum_ }, i.prototype.popFront = function() { var t = this.pieceNum_; return t < this.pieces_.length && t++, new i(this.pieces_, t) }, i.prototype.getBack = function() { return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null }, i.prototype.toString = function() { for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + this.pieces_[e]); return t || "/" }, i.prototype.toUrlEncodedString = function() { for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++) "" !== this.pieces_[e] && (t += "/" + encodeURIComponent(String(this.pieces_[e]))); return t || "/" }, i.prototype.slice = function(t) { return void 0 === t && (t = 0), this.pieces_.slice(this.pieceNum_ + t) }, i.prototype.parent = function() { if (this.pieceNum_ >= this.pieces_.length) return null; for (var t = [], e = this.pieceNum_; e < this.pieces_.length - 1; e++) t.push(this.pieces_[e]); return new i(t, 0) }, i.prototype.child = function(t) { for (var e = [], n = this.pieceNum_; n < this.pieces_.length; n++) e.push(this.pieces_[n]); if (t instanceof i)
                    for (n = t.pieceNum_; n < t.pieces_.length; n++) e.push(t.pieces_[n]);
                else { var r = t.split("/"); for (n = 0; n < r.length; n++) 0 < r[n].length && e.push(r[n]) } return new i(e, 0) }, i.prototype.isEmpty = function() { return this.pieceNum_ >= this.pieces_.length }, i.relativePath = function(t, e) { var n = t.getFront(),
                    r = e.getFront(); if (null === n) return e; if (n === r) return i.relativePath(t.popFront(), e.popFront()); throw new Error("INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")") }, i.comparePaths = function(t, e) { for (var n = t.slice(), r = e.slice(), i = 0; i < n.length && i < r.length; i++) { var o = kr(n[i], r[i]); if (0 !== o) return o } return n.length === r.length ? 0 : n.length < r.length ? -1 : 1 }, i.prototype.equals = function(t) { if (this.getLength() !== t.getLength()) return !1; for (var e = this.pieceNum_, n = t.pieceNum_; e <= this.pieces_.length; e++, n++)
                    if (this.pieces_[e] !== t.pieces_[n]) return !1;
                return !0 }, i.prototype.contains = function(t) { var e = this.pieceNum_,
                    n = t.pieceNum_; if (this.getLength() > t.getLength()) return !1; for (; e < this.pieces_.length;) { if (this.pieces_[e] !== t.pieces_[n]) return !1;++e, ++n } return !0 }, i }(),
        jr = function() {
            function t(t, e) { this.errorPrefix_ = e, this.parts_ = t.slice(), this.byteLength_ = Math.max(1, this.parts_.length); for (var n = 0; n < this.parts_.length; n++) this.byteLength_ += Xn(this.parts_[n]);
                this.checkValid_() } return Object.defineProperty(t, "MAX_PATH_DEPTH", { get: function() { return 32 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "MAX_PATH_LENGTH_BYTES", { get: function() { return 768 }, enumerable: !0, configurable: !0 }), t.prototype.push = function(t) { 0 < this.parts_.length && (this.byteLength_ += 1), this.parts_.push(t), this.byteLength_ += Xn(t), this.checkValid_() }, t.prototype.pop = function() { var t = this.parts_.pop();
                this.byteLength_ -= Xn(t), 0 < this.parts_.length && (this.byteLength_ -= 1) }, t.prototype.checkValid_ = function() { if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES) throw new Error(this.errorPrefix_ + "has a key path longer than " + t.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ")."); if (this.parts_.length > t.MAX_PATH_DEPTH) throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + t.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString()) }, t.prototype.toErrorString = function() { return 0 == this.parts_.length ? "" : "in property '" + this.parts_.join(".") + "'" }, t }(),
        Wr = "firebaseio.com",
        Kr = "websocket",
        Qr = "long_polling",
        Hr = function() {
            function t(t, e, n, r, i) { void 0 === i && (i = ""), this.secure = e, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.host = t.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = pr.get("host:" + t) || this.host } return t.prototype.needsQueryParam = function() { return this.host !== this.internalHost || this.isCustomHost() }, t.prototype.isCacheableHost = function() { return "s-" === this.internalHost.substr(0, 2) }, t.prototype.isDemoHost = function() { return "firebaseio-demo.com" === this.domain }, t.prototype.isCustomHost = function() { return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain }, t.prototype.updateHost = function(t) { t !== this.internalHost && (this.internalHost = t, this.isCacheableHost() && pr.set("host:" + this.host, this.internalHost)) }, t.prototype.connectionURL = function(t, e) { var n; if (dn("string" == typeof t, "typeof type must == string"), dn("object" == typeof e, "typeof params must == object"), t === Kr) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
                else { if (t !== Qr) throw new Error("Unknown connection type: " + t);
                    n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?" }
                this.needsQueryParam() && (e.ns = this.namespace); var r = []; return Ln(e, function(t, e) { r.push(t + "=" + e) }), n + r.join("&") }, t.prototype.toString = function() { var t = this.toURLString(); return this.persistenceKey && (t += "<" + this.persistenceKey + ">"), t }, t.prototype.toURLString = function() { return (this.secure ? "https://" : "http://") + this.host }, t }(); var zr, Gr, Yr, Xr, Jr, $r = function(t) { var e = Zr(t),
                n = e.subdomain; "firebase" === e.domain && Cr(e.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), n && "undefined" != n || "localhost" === e.domain || Cr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), e.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && Ir("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."); var r = "ws" === e.scheme || "wss" === e.scheme; return { repoInfo: new Hr(e.host, e.secure, n, r), path: new Br(e.pathString) } },
        Zr = function(t) { var e = "",
                n = "",
                r = "",
                i = "",
                o = !0,
                a = "https",
                s = 443; if ("string" == typeof t) { var u = t.indexOf("//");
                0 <= u && (a = t.substring(0, u - 1), t = t.substring(u + 2)); var c = t.indexOf("/"); - 1 === c && (c = t.length); var h = t.indexOf("?"); - 1 === h && (h = t.length), e = t.substring(0, Math.min(c, h)), c < h && (i = function(t) { for (var e = "", n = t.split("/"), r = 0; r < n.length; r++)
                        if (0 < n[r].length) { var i = n[r]; try { i = decodeURIComponent(i.replace(/\+/g, " ")) } catch (t) {}
                            e += "/" + i }
                    return e }(t.substring(c, h))); var l = function(t) { var e = {}; "?" === t.charAt(0) && (t = t.substring(1)); for (var n = 0, r = t.split("&"); n < r.length; n++) { var i = r[n]; if (0 !== i.length) { var o = i.split("=");
                            2 === o.length ? e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) : Ir("Invalid query segment '" + i + "' in query '" + t + "'") } } return e }(t.substring(Math.min(t.length, h)));
                0 <= (u = e.indexOf(":")) ? (o = "https" === a || "wss" === a, s = parseInt(e.substring(u + 1), 10)) : u = t.length; var f = e.split(".");
                3 === f.length ? (n = f[1], r = f[0].toLowerCase()) : 2 === f.length ? n = f[0] : "localhost" === f[0].slice(0, u).toLowerCase() && (n = "localhost"), "" === r && "ns" in l && (r = l.ns) } return { host: e, port: s, domain: n, subdomain: r, secure: o, scheme: a, pathString: i } },
        ti = /[\[\].#$\/\u0000-\u001F\u007F]/,
        ei = /[\[\].#$\u0000-\u001F\u007F]/,
        ni = 10485760,
        ri = function(t) { return "string" == typeof t && 0 !== t.length && !ti.test(t) },
        ii = function(t) { return "string" == typeof t && 0 !== t.length && !ei.test(t) },
        oi = function(t) { return null === t || "string" == typeof t || "number" == typeof t && !Nr(t) || t && "object" == typeof t && Pn(t, ".sv") },
        ai = function(t, e, n, r, i) { i && void 0 === n || si(zn(t, e, i), n, r) },
        si = function(n, t, e) { var r = e instanceof Br ? new jr(e, n) : e; if (void 0 === t) throw new Error(n + "contains undefined " + r.toErrorString()); if ("function" == typeof t) throw new Error(n + "contains a function " + r.toErrorString() + " with contents = " + t.toString()); if (Nr(t)) throw new Error(n + "contains " + t.toString() + " " + r.toErrorString()); if ("string" == typeof t && t.length > ni / 3 && Xn(t) > ni) throw new Error(n + "contains a string greater than " + ni + " utf8 bytes " + r.toErrorString() + " ('" + t.substring(0, 50) + "...')"); if (t && "object" == typeof t) { var i = !1,
                    o = !1; if (Ln(t, function(t, e) { if (".value" === t) i = !0;
                        else if (".priority" !== t && ".sv" !== t && (o = !0, !ri(t))) throw new Error(n + " contains an invalid key (" + t + ") " + r.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                        r.push(t), si(n, e, r), r.pop() }), i && o) throw new Error(n + ' contains ".value" child ' + r.toErrorString() + " in addition to actual children.") } },
        ui = function(t, e, n, r, i) { if (!i || void 0 !== n) { var o = zn(t, e, i); if (!n || "object" != typeof n || Array.isArray(n)) throw new Error(o + " must be an object containing the children to replace."); var a = [];
                Ln(n, function(t, e) { var n = new Br(t); if (si(o, e, r.child(n)), ".priority" === n.getBack() && !oi(e)) throw new Error(o + "contains an invalid value for '" + n.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                        a.push(n) }),
                    function(t, e) { var n, r; for (n = 0; n < e.length; n++)
                            for (var i = (r = e[n]).slice(), o = 0; o < i.length; o++)
                                if (".priority" === i[o] && o === i.length - 1);
                                else if (!ri(i[o])) throw new Error(t + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                        e.sort(Br.comparePaths); var a = null; for (n = 0; n < e.length; n++) { if (r = e[n], null !== a && a.contains(r)) throw new Error(t + "contains a path " + a.toString() + " that is ancestor of another path " + r.toString());
                            a = r } }(o, a) } },
        ci = function(t, e, n, r) { if (!r || void 0 !== n) { if (Nr(n)) throw new Error(zn(t, e, r) + "is " + n.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null)."); if (!oi(n)) throw new Error(zn(t, e, r) + "must be a valid Firebase priority (a string, finite number, server value, or null).") } },
        hi = function(t, e, n, r) { if (!r || void 0 !== n) switch (n) {
                case "value":
                case "child_added":
                case "child_removed":
                case "child_changed":
                case "child_moved":
                    break;
                default:
                    throw new Error(zn(t, e, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".') } },
        li = function(t, e, n, r) { if (!(r && void 0 === n || ri(n))) throw new Error(zn(t, e, r) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").') },
        fi = function(t, e, n, r) { if (!(r && void 0 === n || ii(n))) throw new Error(zn(t, e, r) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"') },
        pi = function(t, e) { if (".info" === e.getFront()) throw new Error(t + " failed = Can't modify data under /.info/") },
        di = function(t, e, n) { var r, i = n.path.toString(); if ("string" != typeof n.repoInfo.host || 0 === n.repoInfo.host.length || !ri(n.repoInfo.namespace) && "localhost" !== n.repoInfo.host.split(":")[0] || 0 !== i.length && ((r = i) && (r = r.replace(/^\/*\.info(\/|$)/, "/")), !ii(r))) throw new Error(zn(t, e, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".') },
        yi = function() {
            function t(t, e) { this.repo_ = t, this.path_ = e } return t.prototype.cancel = function(t) { Hn("OnDisconnect.cancel", 0, 1, arguments.length), Gn("OnDisconnect.cancel", 1, t, !0); var e = new En; return this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)), e.promise }, t.prototype.remove = function(t) { Hn("OnDisconnect.remove", 0, 1, arguments.length), pi("OnDisconnect.remove", this.path_), Gn("OnDisconnect.remove", 1, t, !0); var e = new En; return this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)), e.promise }, t.prototype.set = function(t, e) { Hn("OnDisconnect.set", 1, 2, arguments.length), pi("OnDisconnect.set", this.path_), ai("OnDisconnect.set", 1, t, this.path_, !1), Gn("OnDisconnect.set", 2, e, !0); var n = new En; return this.repo_.onDisconnectSet(this.path_, t, n.wrapCallback(e)), n.promise }, t.prototype.setWithPriority = function(t, e, n) { Hn("OnDisconnect.setWithPriority", 2, 3, arguments.length), pi("OnDisconnect.setWithPriority", this.path_), ai("OnDisconnect.setWithPriority", 1, t, this.path_, !1), ci("OnDisconnect.setWithPriority", 2, e, !1), Gn("OnDisconnect.setWithPriority", 3, n, !0); var r = new En; return this.repo_.onDisconnectSetWithPriority(this.path_, t, e, r.wrapCallback(n)), r.promise }, t.prototype.update = function(t, e) { if (Hn("OnDisconnect.update", 1, 2, arguments.length), pi("OnDisconnect.update", this.path_), Array.isArray(t)) { for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];
                    t = n, Ir("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.") }
                ui("OnDisconnect.update", 1, t, this.path_, !1), Gn("OnDisconnect.update", 2, e, !0); var i = new En; return this.repo_.onDisconnectUpdate(this.path_, t, i.wrapCallback(e)), i.promise }, t }(),
        mi = function() {
            function t(t, e) { this.committed = t, this.snapshot = e } return t.prototype.toJSON = function() { return Hn("TransactionResult.toJSON", 0, 1, arguments.length), { committed: this.committed, snapshot: this.snapshot.toJSON() } }, t }(),
        gi = (zr = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz", Gr = 0, Yr = [], function(t) { var e, n = t === Gr;
            Gr = t; var r = new Array(8); for (e = 7; 0 <= e; e--) r[e] = zr.charAt(t % 64), t = Math.floor(t / 64);
            dn(0 === t, "Cannot push at time == 0"); var i = r.join(""); if (n) { for (e = 11; 0 <= e && 63 === Yr[e]; e--) Yr[e] = 0;
                Yr[e]++ } else
                for (e = 0; e < 12; e++) Yr[e] = Math.floor(64 * Math.random()); for (e = 0; e < 12; e++) i += zr.charAt(Yr[e]); return dn(20 === i.length, "nextPushId: Length should be 20."), i }),
        vi = function() {
            function n(t, e) { this.name = t, this.node = e } return n.Wrap = function(t, e) { return new n(t, e) }, n }(),
        bi = function() {
            function t() {} return t.prototype.getCompare = function() { return this.compare.bind(this) }, t.prototype.indexedValueChanged = function(t, e) { var n = new vi(Dr, t),
                    r = new vi(Dr, e); return 0 !== this.compare(n, r) }, t.prototype.minPost = function() { return vi.MIN }, t }(),
        _i = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return an(e, t), Object.defineProperty(e, "__EMPTY_NODE", { get: function() { return Xr }, set: function(t) { Xr = t }, enumerable: !0, configurable: !0 }), e.prototype.compare = function(t, e) { return kr(t.name, e.name) }, e.prototype.isDefinedOn = function(t) { throw yn("KeyIndex.isDefinedOn not expected to be called.") }, e.prototype.indexedValueChanged = function(t, e) { return !1 }, e.prototype.minPost = function() { return vi.MIN }, e.prototype.maxPost = function() { return new vi(Ar, Xr) }, e.prototype.makePost = function(t, e) { return dn("string" == typeof t, "KeyIndex indexValue must always be a string."), new vi(t, Xr) }, e.prototype.toString = function() { return ".key" }, e }(bi),
        wi = new _i; var Ei, Ti, Si, Ci = function(t) { return "number" == typeof t ? "number:" + xr(t) : "string:" + t },
        Ii = function(t) { if (t.isLeafNode()) { var e = t.val();
                dn("string" == typeof e || "number" == typeof e || "object" == typeof e && Pn(e, ".sv"), "Priority must be a string or number.") } else dn(t === Jr || t.isEmpty(), "priority of unexpected type.");
            dn(t === Jr || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.") },
        Ni = function() {
            function o(t, e) { void 0 === e && (e = o.__childrenNodeConstructor.EMPTY_NODE), this.value_ = t, this.priorityNode_ = e, this.lazyHash_ = null, dn(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), Ii(this.priorityNode_) } return Object.defineProperty(o, "__childrenNodeConstructor", { get: function() { return Ei }, set: function(t) { Ei = t }, enumerable: !0, configurable: !0 }), o.prototype.isLeafNode = function() { return !0 }, o.prototype.getPriority = function() { return this.priorityNode_ }, o.prototype.updatePriority = function(t) { return new o(this.value_, t) }, o.prototype.getImmediateChild = function(t) { return ".priority" === t ? this.priorityNode_ : o.__childrenNodeConstructor.EMPTY_NODE }, o.prototype.getChild = function(t) { return t.isEmpty() ? this : ".priority" === t.getFront() ? this.priorityNode_ : o.__childrenNodeConstructor.EMPTY_NODE }, o.prototype.hasChild = function() { return !1 }, o.prototype.getPredecessorChildName = function(t, e) { return null }, o.prototype.updateImmediateChild = function(t, e) { return ".priority" === t ? this.updatePriority(e) : e.isEmpty() && ".priority" !== t ? this : o.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, e).updatePriority(this.priorityNode_) }, o.prototype.updateChild = function(t, e) { var n = t.getFront(); return null === n ? e : e.isEmpty() && ".priority" !== n ? this : (dn(".priority" !== n || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(n, o.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), e))) }, o.prototype.isEmpty = function() { return !1 }, o.prototype.numChildren = function() { return 0 }, o.prototype.forEachChild = function(t, e) { return !1 }, o.prototype.val = function(t) { return t && !this.getPriority().isEmpty() ? { ".value": this.getValue(), ".priority": this.getPriority().val() } : this.getValue() }, o.prototype.hash = function() { if (null === this.lazyHash_) { var t = "";
                    this.priorityNode_.isEmpty() || (t += "priority:" + Ci(this.priorityNode_.val()) + ":"); var e = typeof this.value_;
                    t += e + ":", t += "number" === e ? xr(this.value_) : this.value_, this.lazyHash_ = gr(t) } return this.lazyHash_ }, o.prototype.getValue = function() { return this.value_ }, o.prototype.compareTo = function(t) { return t === o.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof o.__childrenNodeConstructor ? -1 : (dn(t.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(t)) }, o.prototype.compareToLeafNode_ = function(t) { var e = typeof t.value_,
                    n = typeof this.value_,
                    r = o.VALUE_TYPE_ORDER.indexOf(e),
                    i = o.VALUE_TYPE_ORDER.indexOf(n); return dn(0 <= r, "Unknown leaf type: " + e), dn(0 <= i, "Unknown leaf type: " + n), r === i ? "object" === n ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : i - r }, o.prototype.withIndex = function() { return this }, o.prototype.isIndexed = function() { return !0 }, o.prototype.equals = function(t) { if (t === this) return !0; if (t.isLeafNode()) { var e = t; return this.value_ === e.value_ && this.priorityNode_.equals(e.priorityNode_) } return !1 }, o.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], o }(); var Di, Ai, ki = new(function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return an(e, t), e.prototype.compare = function(t, e) { var n = t.node.getPriority(),
                    r = e.node.getPriority(),
                    i = n.compareTo(r); return 0 === i ? kr(t.name, e.name) : i }, e.prototype.isDefinedOn = function(t) { return !t.getPriority().isEmpty() }, e.prototype.indexedValueChanged = function(t, e) { return !t.getPriority().equals(e.getPriority()) }, e.prototype.minPost = function() { return vi.MIN }, e.prototype.maxPost = function() { return new vi(Ar, new Ni("[PRIORITY-POST]", Si)) }, e.prototype.makePost = function(t, e) { var n = Ti(t); return new vi(e, new Ni("[PRIORITY-POST]", n)) }, e.prototype.toString = function() { return ".priority" }, e }(bi)),
        Ri = function() {
            function t(t, e, n, r, i) { void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = []; for (var o = 1; !t.isEmpty();)
                    if (t = t, o = e ? n(t.key, e) : 1, r && (o *= -1), o < 0) t = this.isReverse_ ? t.left : t.right;
                    else { if (0 === o) { this.nodeStack_.push(t); break }
                        this.nodeStack_.push(t), t = this.isReverse_ ? t.right : t.left } } return t.prototype.getNext = function() { if (0 === this.nodeStack_.length) return null; var t, e = this.nodeStack_.pop(); if (t = this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : { key: e.key, value: e.value }, this.isReverse_)
                    for (e = e.left; !e.isEmpty();) this.nodeStack_.push(e), e = e.right;
                else
                    for (e = e.right; !e.isEmpty();) this.nodeStack_.push(e), e = e.left; return t }, t.prototype.hasNext = function() { return 0 < this.nodeStack_.length }, t.prototype.peek = function() { if (0 === this.nodeStack_.length) return null; var t = this.nodeStack_[this.nodeStack_.length - 1]; return this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : { key: t.key, value: t.value } }, t }(),
        Oi = function() {
            function o(t, e, n, r, i) { this.key = t, this.value = e, this.color = null != n ? n : o.RED, this.left = null != r ? r : Mi.EMPTY_NODE, this.right = null != i ? i : Mi.EMPTY_NODE } return o.prototype.copy = function(t, e, n, r, i) { return new o(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right) }, o.prototype.count = function() { return this.left.count() + 1 + this.right.count() }, o.prototype.isEmpty = function() { return !1 }, o.prototype.inorderTraversal = function(t) { return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t) }, o.prototype.reverseTraversal = function(t) { return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t) }, o.prototype.min_ = function() { return this.left.isEmpty() ? this : this.left.min_() }, o.prototype.minKey = function() { return this.min_().key }, o.prototype.maxKey = function() { return this.right.isEmpty() ? this.key : this.right.maxKey() }, o.prototype.insert = function(t, e, n) { var r, i; return (i = (r = n(t, (i = this).key)) < 0 ? i.copy(null, null, null, i.left.insert(t, e, n), null) : 0 === r ? i.copy(null, e, null, null, null) : i.copy(null, null, null, null, i.right.insert(t, e, n))).fixUp_() }, o.prototype.removeMin_ = function() { if (this.left.isEmpty()) return Mi.EMPTY_NODE; var t = this; return t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()), (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_() }, o.prototype.remove = function(t, e) { var n, r; if (e(t, (n = this).key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(t, e), null);
                else { if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === e(t, n.key)) { if (n.right.isEmpty()) return Mi.EMPTY_NODE;
                        r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_()) }
                    n = n.copy(null, null, null, null, n.right.remove(t, e)) } return n.fixUp_() }, o.prototype.isRed_ = function() { return this.color }, o.prototype.fixUp_ = function() { var t = this; return t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()), t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()), t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()), t }, o.prototype.moveRedLeft_ = function() { var t = this.colorFlip_(); return t.right.left.isRed_() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight_())).rotateLeft_()).colorFlip_()), t }, o.prototype.moveRedRight_ = function() { var t = this.colorFlip_(); return t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()), t }, o.prototype.rotateLeft_ = function() { var t = this.copy(null, null, o.RED, null, this.right.left); return this.right.copy(null, null, this.color, t, null) }, o.prototype.rotateRight_ = function() { var t = this.copy(null, null, o.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, t) }, o.prototype.colorFlip_ = function() { var t = this.left.copy(null, null, !this.left.color, null, null),
                    e = this.right.copy(null, null, !this.right.color, null, null); return this.copy(null, null, !this.color, t, e) }, o.prototype.checkMaxDepth_ = function() { var t = this.check_(); return Math.pow(2, t) <= this.count() + 1 }, o.prototype.check_ = function() { var t; if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")"); if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red"); if ((t = this.left.check_()) !== this.right.check_()) throw new Error("Black depths differ"); return t + (this.isRed_() ? 0 : 1) }, o.RED = !0, o.BLACK = !1, o }(),
        Pi = function() {
            function t() {} return t.prototype.copy = function(t, e, n, r, i) { return this }, t.prototype.insert = function(t, e, n) { return new Oi(t, e, null) }, t.prototype.remove = function(t, e) { return this }, t.prototype.count = function() { return 0 }, t.prototype.isEmpty = function() { return !0 }, t.prototype.inorderTraversal = function(t) { return !1 }, t.prototype.reverseTraversal = function(t) { return !1 }, t.prototype.minKey = function() { return null }, t.prototype.maxKey = function() { return null }, t.prototype.check_ = function() { return 0 }, t.prototype.isRed_ = function() { return !1 }, t }(),
        Mi = function() {
            function n(t, e) { void 0 === e && (e = n.EMPTY_NODE), this.comparator_ = t, this.root_ = e } return n.prototype.insert = function(t, e) { return new n(this.comparator_, this.root_.insert(t, e, this.comparator_).copy(null, null, Oi.BLACK, null, null)) }, n.prototype.remove = function(t) { return new n(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, Oi.BLACK, null, null)) }, n.prototype.get = function(t) { for (var e, n = this.root_; !n.isEmpty();) { if (0 === (e = this.comparator_(t, n.key))) return n.value;
                    e < 0 ? n = n.left : 0 < e && (n = n.right) } return null }, n.prototype.getPredecessorKey = function(t) { for (var e, n = this.root_, r = null; !n.isEmpty();) { if (0 === (e = this.comparator_(t, n.key))) { if (n.left.isEmpty()) return r ? r.key : null; for (n = n.left; !n.right.isEmpty();) n = n.right; return n.key }
                    e < 0 ? n = n.left : 0 < e && (n = (r = n).right) } throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?") }, n.prototype.isEmpty = function() { return this.root_.isEmpty() }, n.prototype.count = function() { return this.root_.count() }, n.prototype.minKey = function() { return this.root_.minKey() }, n.prototype.maxKey = function() { return this.root_.maxKey() }, n.prototype.inorderTraversal = function(t) { return this.root_.inorderTraversal(t) }, n.prototype.reverseTraversal = function(t) { return this.root_.reverseTraversal(t) }, n.prototype.getIterator = function(t) { return new Ri(this.root_, null, this.comparator_, !1, t) }, n.prototype.getIteratorFrom = function(t, e) { return new Ri(this.root_, t, this.comparator_, !1, e) }, n.prototype.getReverseIteratorFrom = function(t, e) { return new Ri(this.root_, t, this.comparator_, !0, e) }, n.prototype.getReverseIterator = function(t) { return new Ri(this.root_, null, this.comparator_, !0, t) }, n.EMPTY_NODE = new Pi, n }(),
        Li = Math.log(2),
        xi = function() {
            function t(t) { var e;
                this.count = (e = t + 1, parseInt(Math.log(e) / Li, 10)), this.current_ = this.count - 1; var n, r = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
                this.bits_ = t + 1 & r } return t.prototype.nextBitIsOne = function() { var t = !(this.bits_ & 1 << this.current_); return this.current_--, t }, t }(),
        Fi = function(c, t, h, e) { c.sort(t); var l = function(t, e) { var n, r, i = e - t; if (0 == i) return null; if (1 == i) return n = c[t], r = h ? h(n) : n, new Oi(r, n.node, Oi.BLACK, null, null); var o = parseInt(i / 2, 10) + t,
                        a = l(t, o),
                        s = l(o + 1, e); return n = c[o], r = h ? h(n) : n, new Oi(r, n.node, Oi.BLACK, a, s) },
                n = function(t) { for (var e = null, n = null, s = c.length, r = function(t, e) { var n = s - t,
                                r = s;
                            s -= t; var i = l(n + 1, r),
                                o = c[n],
                                a = h ? h(o) : o;
                            u(new Oi(a, o.node, e, null, i)) }, u = function(t) { e = e ? e.left = t : n = t }, i = 0; i < t.count; ++i) { var o = t.nextBitIsOne(),
                            a = Math.pow(2, t.count - (i + 1));
                        o ? r(a, Oi.BLACK) : (r(a, Oi.BLACK), r(a, Oi.RED)) } return n }(new xi(c.length)); return new Mi(e || t, n) },
        Ui = {},
        qi = function() {
            function l(t, e) { this.indexes_ = t, this.indexSet_ = e } return Object.defineProperty(l, "Default", { get: function() { return dn(ki, "ChildrenNode.ts has not been loaded"), Di = Di || new l({ ".priority": Ui }, { ".priority": ki }) }, enumerable: !0, configurable: !0 }), l.prototype.get = function(t) { var e = Mn(this.indexes_, t); if (!e) throw new Error("No index defined for " + t); return e === Ui ? null : e }, l.prototype.hasIndex = function(t) { return Pn(this.indexSet_, t.toString()) }, l.prototype.addIndex = function(t, e) { dn(t !== wi, "KeyIndex always exists and isn't meant to be added to the IndexMap."); for (var n, r = [], i = !1, o = e.getIterator(vi.Wrap), a = o.getNext(); a;) i = i || t.isDefinedOn(a.node), r.push(a), a = o.getNext();
                n = i ? Fi(r, t.getCompare()) : Ui; var s = t.toString(),
                    u = xn(this.indexSet_);
                u[s] = t; var c = xn(this.indexes_); return c[s] = n, new l(c, u) }, l.prototype.addToIndexes = function(u, c) { var h = this; return new l(qn(this.indexes_, function(t, e) { var n = Mn(h.indexSet_, e); if (dn(n, "Missing index implementation for " + e), t === Ui) { if (n.isDefinedOn(u.node)) { for (var r = [], i = c.getIterator(vi.Wrap), o = i.getNext(); o;) o.name != u.name && r.push(o), o = i.getNext(); return r.push(u), Fi(r, n.getCompare()) } return Ui } var a = c.get(u.name),
                        s = t; return a && (s = s.remove(new vi(u.name, a))), s.insert(u, u.node) }), this.indexSet_) }, l.prototype.removeFromIndexes = function(n, r) { return new l(qn(this.indexes_, function(t) { if (t === Ui) return t; var e = r.get(n.name); return e ? t.remove(new vi(n.name, e)) : t }), this.indexSet_) }, l }();

    function Vi(t, e) { return kr(t.name, e.name) }

    function Bi(t, e) { return kr(t, e) } var ji = function() {
            function s(t, e, n) { this.children_ = t, this.priorityNode_ = e, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Ii(this.priorityNode_), this.children_.isEmpty() && dn(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority") } return Object.defineProperty(s, "EMPTY_NODE", { get: function() { return Ai || (Ai = new s(new Mi(Bi), null, qi.Default)) }, enumerable: !0, configurable: !0 }), s.prototype.isLeafNode = function() { return !1 }, s.prototype.getPriority = function() { return this.priorityNode_ || Ai }, s.prototype.updatePriority = function(t) { return this.children_.isEmpty() ? this : new s(this.children_, t, this.indexMap_) }, s.prototype.getImmediateChild = function(t) { if (".priority" === t) return this.getPriority(); var e = this.children_.get(t); return null === e ? Ai : e }, s.prototype.getChild = function(t) { var e = t.getFront(); return null === e ? this : this.getImmediateChild(e).getChild(t.popFront()) }, s.prototype.hasChild = function(t) { return null !== this.children_.get(t) }, s.prototype.updateImmediateChild = function(t, e) { if (dn(e, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(e); var n = new vi(t, e),
                    r = void 0,
                    i = void 0; return i = e.isEmpty() ? (r = this.children_.remove(t), this.indexMap_.removeFromIndexes(n, this.children_)) : (r = this.children_.insert(t, e), this.indexMap_.addToIndexes(n, this.children_)), new s(r, r.isEmpty() ? Ai : this.priorityNode_, i) }, s.prototype.updateChild = function(t, e) { var n = t.getFront(); if (null === n) return e;
                dn(".priority" !== t.getFront() || 1 === t.getLength(), ".priority must be the last token in a path"); var r = this.getImmediateChild(n).updateChild(t.popFront(), e); return this.updateImmediateChild(n, r) }, s.prototype.isEmpty = function() { return this.children_.isEmpty() }, s.prototype.numChildren = function() { return this.children_.count() }, s.prototype.val = function(n) { if (this.isEmpty()) return null; var r = {},
                    i = 0,
                    o = 0,
                    a = !0; if (this.forEachChild(ki, function(t, e) { r[t] = e.val(n), i++, a && s.INTEGER_REGEXP_.test(t) ? o = Math.max(o, Number(t)) : a = !1 }), !n && a && o < 2 * i) { var t = []; for (var e in r) t[e] = r[e]; return t } return n && !this.getPriority().isEmpty() && (r[".priority"] = this.getPriority().val()), r }, s.prototype.hash = function() { if (null === this.lazyHash_) { var r = "";
                    this.getPriority().isEmpty() || (r += "priority:" + Ci(this.getPriority().val()) + ":"), this.forEachChild(ki, function(t, e) { var n = e.hash(); "" !== n && (r += ":" + t + ":" + n) }), this.lazyHash_ = "" === r ? "" : gr(r) } return this.lazyHash_ }, s.prototype.getPredecessorChildName = function(t, e, n) { var r = this.resolveIndex_(n); if (r) { var i = r.getPredecessorKey(new vi(t, e)); return i ? i.name : null } return this.children_.getPredecessorKey(t) }, s.prototype.getFirstChildName = function(t) { var e = this.resolveIndex_(t); if (e) { var n = e.minKey(); return n && n.name } return this.children_.minKey() }, s.prototype.getFirstChild = function(t) { var e = this.getFirstChildName(t); return e ? new vi(e, this.children_.get(e)) : null }, s.prototype.getLastChildName = function(t) { var e = this.resolveIndex_(t); if (e) { var n = e.maxKey(); return n && n.name } return this.children_.maxKey() }, s.prototype.getLastChild = function(t) { var e = this.getLastChildName(t); return e ? new vi(e, this.children_.get(e)) : null }, s.prototype.forEachChild = function(t, e) { var n = this.resolveIndex_(t); return n ? n.inorderTraversal(function(t) { return e(t.name, t.node) }) : this.children_.inorderTraversal(e) }, s.prototype.getIterator = function(t) { return this.getIteratorFrom(t.minPost(), t) }, s.prototype.getIteratorFrom = function(t, e) { var n = this.resolveIndex_(e); if (n) return n.getIteratorFrom(t, function(t) { return t }); for (var r = this.children_.getIteratorFrom(t.name, vi.Wrap), i = r.peek(); null != i && e.compare(i, t) < 0;) r.getNext(), i = r.peek(); return r }, s.prototype.getReverseIterator = function(t) { return this.getReverseIteratorFrom(t.maxPost(), t) }, s.prototype.getReverseIteratorFrom = function(t, e) { var n = this.resolveIndex_(e); if (n) return n.getReverseIteratorFrom(t, function(t) { return t }); for (var r = this.children_.getReverseIteratorFrom(t.name, vi.Wrap), i = r.peek(); null != i && 0 < e.compare(i, t);) r.getNext(), i = r.peek(); return r }, s.prototype.compareTo = function(t) { return this.isEmpty() ? t.isEmpty() ? 0 : -1 : t.isLeafNode() || t.isEmpty() ? 1 : t === Wi ? -1 : 0 }, s.prototype.withIndex = function(t) { if (t === wi || this.indexMap_.hasIndex(t)) return this; var e = this.indexMap_.addIndex(t, this.children_); return new s(this.children_, this.priorityNode_, e) }, s.prototype.isIndexed = function(t) { return t === wi || this.indexMap_.hasIndex(t) }, s.prototype.equals = function(t) { if (t === this) return !0; if (t.isLeafNode()) return !1; var e = t; if (this.getPriority().equals(e.getPriority())) { if (this.children_.count() !== e.children_.count()) return !1; for (var n = this.getIterator(ki), r = e.getIterator(ki), i = n.getNext(), o = r.getNext(); i && o;) { if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                        i = n.getNext(), o = r.getNext() } return null === i && null === o } return !1 }, s.prototype.resolveIndex_ = function(t) { return t === wi ? null : this.indexMap_.get(t.toString()) }, s.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, s }(),
        Wi = new(function(t) {
            function e() { return t.call(this, new Mi(Bi), ji.EMPTY_NODE, qi.Default) || this } return an(e, t), e.prototype.compareTo = function(t) { return t === this ? 0 : 1 }, e.prototype.equals = function(t) { return t === this }, e.prototype.getPriority = function() { return this }, e.prototype.getImmediateChild = function(t) { return ji.EMPTY_NODE }, e.prototype.isEmpty = function() { return !1 }, e }(ji));
    Object.defineProperties(vi, { MIN: { value: new vi(Dr, ji.EMPTY_NODE) }, MAX: { value: new vi(Ar, Wi) } }), _i.__EMPTY_NODE = ji.EMPTY_NODE, Ni.__childrenNodeConstructor = ji, Jr = Wi, Si = Wi; var Ki = !0;

    function Qi(t, e) { if (void 0 === e && (e = null), null === t) return ji.EMPTY_NODE; if ("object" == typeof t && ".priority" in t && (e = t[".priority"]), dn(null === e || "string" == typeof e || "number" == typeof e || "object" == typeof e && ".sv" in e, "Invalid priority type found: " + typeof e), "object" == typeof t && ".value" in t && null !== t[".value"] && (t = t[".value"]), "object" != typeof t || ".sv" in t) return new Ni(t, Qi(e)); if (t instanceof Array || !Ki) { var r = ji.EMPTY_NODE,
                i = t; return Ln(i, function(t, e) { if (Pn(i, t) && "." !== t.substring(0, 1)) { var n = Qi(e);!n.isLeafNode() && n.isEmpty() || (r = r.updateImmediateChild(t, n)) } }), r.updatePriority(Qi(e)) } var o = [],
            a = !1,
            s = t; if (Ln(s, function(t, e) { if ("string" != typeof t || "." !== t.substring(0, 1)) { var n = Qi(s[t]);
                    n.isEmpty() || (a = a || !n.getPriority().isEmpty(), o.push(new vi(t, n))) } }), 0 == o.length) return ji.EMPTY_NODE; var n = Fi(o, Vi, function(t) { return t.name }, Bi); if (a) { var u = Fi(o, ki.getCompare()); return new ji(n, Qi(e), new qi({ ".priority": u }, { ".priority": ki })) } return new ji(n, Qi(e), qi.Default) }
    Ti = Qi; var Hi, zi, Gi, Yi = new(function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return an(e, t), e.prototype.compare = function(t, e) { var n = t.node.compareTo(e.node); return 0 === n ? kr(t.name, e.name) : n }, e.prototype.isDefinedOn = function(t) { return !0 }, e.prototype.indexedValueChanged = function(t, e) { return !t.equals(e) }, e.prototype.minPost = function() { return vi.MIN }, e.prototype.maxPost = function() { return vi.MAX }, e.prototype.makePost = function(t, e) { var n = Qi(t); return new vi(e, n) }, e.prototype.toString = function() { return ".value" }, e }(bi)),
        Xi = function(n) {
            function t(t) { var e = n.call(this) || this; return e.indexPath_ = t, dn(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), e } return an(t, n), t.prototype.extractChild = function(t) { return t.getChild(this.indexPath_) }, t.prototype.isDefinedOn = function(t) { return !t.getChild(this.indexPath_).isEmpty() }, t.prototype.compare = function(t, e) { var n = this.extractChild(t.node),
                    r = this.extractChild(e.node),
                    i = n.compareTo(r); return 0 === i ? kr(t.name, e.name) : i }, t.prototype.makePost = function(t, e) { var n = Qi(t),
                    r = ji.EMPTY_NODE.updateChild(this.indexPath_, n); return new vi(e, r) }, t.prototype.maxPost = function() { var t = ji.EMPTY_NODE.updateChild(this.indexPath_, Wi); return new vi(Ar, t) }, t.prototype.toString = function() { return this.indexPath_.slice().join("/") }, t }(bi),
        Ji = function() {
            function i(t, e, n) { this.node_ = t, this.ref_ = e, this.index_ = n } return i.prototype.val = function() { return Hn("DataSnapshot.val", 0, 0, arguments.length), this.node_.val() }, i.prototype.exportVal = function() { return Hn("DataSnapshot.exportVal", 0, 0, arguments.length), this.node_.val(!0) }, i.prototype.toJSON = function() { return Hn("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal() }, i.prototype.exists = function() { return Hn("DataSnapshot.exists", 0, 0, arguments.length), !this.node_.isEmpty() }, i.prototype.child = function(t) { Hn("DataSnapshot.child", 0, 1, arguments.length), t = String(t), fi("DataSnapshot.child", 1, t, !1); var e = new Br(t),
                    n = this.ref_.child(e); return new i(this.node_.getChild(e), n, ki) }, i.prototype.hasChild = function(t) { Hn("DataSnapshot.hasChild", 1, 1, arguments.length), fi("DataSnapshot.hasChild", 1, t, !1); var e = new Br(t); return !this.node_.getChild(e).isEmpty() }, i.prototype.getPriority = function() { return Hn("DataSnapshot.getPriority", 0, 0, arguments.length), this.node_.getPriority().val() }, i.prototype.forEach = function(n) { var r = this; return Hn("DataSnapshot.forEach", 1, 1, arguments.length), Gn("DataSnapshot.forEach", 1, n, !1), !this.node_.isLeafNode() && !!this.node_.forEachChild(this.index_, function(t, e) { return n(new i(e, r.ref_.child(t), ki)) }) }, i.prototype.hasChildren = function() { return Hn("DataSnapshot.hasChildren", 0, 0, arguments.length), !this.node_.isLeafNode() && !this.node_.isEmpty() }, Object.defineProperty(i.prototype, "key", { get: function() { return this.ref_.getKey() }, enumerable: !0, configurable: !0 }), i.prototype.numChildren = function() { return Hn("DataSnapshot.numChildren", 0, 0, arguments.length), this.node_.numChildren() }, i.prototype.getRef = function() { return Hn("DataSnapshot.ref", 0, 0, arguments.length), this.ref_ }, Object.defineProperty(i.prototype, "ref", { get: function() { return this.getRef() }, enumerable: !0, configurable: !0 }), i }(),
        $i = function() {
            function t(t, e, n, r) { this.eventType = t, this.eventRegistration = e, this.snapshot = n, this.prevName = r } return t.prototype.getPath = function() { var t = this.snapshot.getRef(); return "value" === this.eventType ? t.path : t.getParent().path }, t.prototype.getEventType = function() { return this.eventType }, t.prototype.getEventRunner = function() { return this.eventRegistration.getEventRunner(this) }, t.prototype.toString = function() { return this.getPath().toString() + ":" + this.eventType + ":" + Rn(this.snapshot.exportVal()) }, t }(),
        Zi = function() {
            function t(t, e, n) { this.eventRegistration = t, this.error = e, this.path = n } return t.prototype.getPath = function() { return this.path }, t.prototype.getEventType = function() { return "cancel" }, t.prototype.getEventRunner = function() { return this.eventRegistration.getEventRunner(this) }, t.prototype.toString = function() { return this.path.toString() + ":cancel" }, t }(),
        to = function() {
            function e(t, e, n) { this.callback_ = t, this.cancelCallback_ = e, this.context_ = n } return e.prototype.respondsTo = function(t) { return "value" === t }, e.prototype.createEvent = function(t, e) { var n = e.getQueryParams().getIndex(); return new $i("value", this, new Ji(t.snapshotNode, e.getRef(), n)) }, e.prototype.getEventRunner = function(t) { var e = this.context_; if ("cancel" === t.getEventType()) { dn(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback"); var n = this.cancelCallback_; return function() { n.call(e, t.error) } } var r = this.callback_; return function() { r.call(e, t.snapshot) } }, e.prototype.createCancelEvent = function(t, e) { return this.cancelCallback_ ? new Zi(this, t, e) : null }, e.prototype.matches = function(t) { return t instanceof e && (!t.callback_ || !this.callback_ || t.callback_ === this.callback_ && t.context_ === this.context_) }, e.prototype.hasAnyCallback = function() { return null !== this.callback_ }, e }(),
        eo = function() {
            function i(t, e, n) { this.callbacks_ = t, this.cancelCallback_ = e, this.context_ = n } return i.prototype.respondsTo = function(t) { var e = "children_added" === t ? "child_added" : t; return e = "children_removed" === e ? "child_removed" : e, Pn(this.callbacks_, e) }, i.prototype.createCancelEvent = function(t, e) { return this.cancelCallback_ ? new Zi(this, t, e) : null }, i.prototype.createEvent = function(t, e) { dn(null != t.childName, "Child events should have a childName."); var n = e.getRef().child(t.childName),
                    r = e.getQueryParams().getIndex(); return new $i(t.type, this, new Ji(t.snapshotNode, n, r), t.prevName) }, i.prototype.getEventRunner = function(t) { var e = this.context_; if ("cancel" === t.getEventType()) { dn(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback"); var n = this.cancelCallback_; return function() { n.call(e, t.error) } } var r = this.callbacks_[t.eventType]; return function() { r.call(e, t.snapshot, t.prevName) } }, i.prototype.matches = function(n) { if (n instanceof i) { if (!this.callbacks_ || !n.callbacks_) return !0; if (this.context_ === n.context_) { var t = Un(n.callbacks_); if (t === Un(this.callbacks_)) { if (1 !== t) return function(t, e) { for (var n in t)
                                    if (Object.prototype.hasOwnProperty.call(t, n) && !e(n, t[n])) return !1;
                                return !0 }(this.callbacks_, function(t, e) { return n.callbacks_[t] === e }); var e = Bn(n.callbacks_),
                                r = Bn(this.callbacks_); return !(r !== e || n.callbacks_[e] && this.callbacks_[r] && n.callbacks_[e] !== this.callbacks_[r]) } } } return !1 }, i.prototype.hasAnyCallback = function() { return null !== this.callbacks_ }, i }(),
        no = function() {
            function c(t, e, n, r) { this.repo = t, this.path = e, this.queryParams_ = n, this.orderByCalled_ = r } return Object.defineProperty(c, "__referenceConstructor", { get: function() { return dn(Hi, "Reference.ts has not been loaded"), Hi }, set: function(t) { Hi = t }, enumerable: !0, configurable: !0 }), c.validateQueryEndpoints_ = function(t) { var e = null,
                    n = null; if (t.hasStart() && (e = t.getIndexStartValue()), t.hasEnd() && (n = t.getIndexEndValue()), t.getIndex() === wi) { var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                        i = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string."; if (t.hasStart()) { if (t.getIndexStartName() != Dr) throw new Error(r); if ("string" != typeof e) throw new Error(i) } if (t.hasEnd()) { if (t.getIndexEndName() != Ar) throw new Error(r); if ("string" != typeof n) throw new Error(i) } } else if (t.getIndex() === ki) { if (null != e && !oi(e) || null != n && !oi(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).") } else if (dn(t.getIndex() instanceof Xi || t.getIndex() === Yi, "unknown index type."), null != e && "object" == typeof e || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.") }, c.validateLimit_ = function(t) { if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.") }, c.prototype.validateNoPreviousOrderByCall_ = function(t) { if (!0 === this.orderByCalled_) throw new Error(t + ": You can't combine multiple orderBy calls.") }, c.prototype.getQueryParams = function() { return this.queryParams_ }, c.prototype.getRef = function() { return Hn("Query.ref", 0, 0, arguments.length), new c.__referenceConstructor(this.repo, this.path) }, c.prototype.on = function(t, e, n, r) { Hn("Query.on", 2, 4, arguments.length), hi("Query.on", 1, t, !1), Gn("Query.on", 2, e, !1); var i = c.getCancelAndContextArgs_("Query.on", n, r); if ("value" === t) this.onValueEvent(e, i.cancel, i.context);
                else { var o = {};
                    o[t] = e, this.onChildEvent(o, i.cancel, i.context) } return e }, c.prototype.onValueEvent = function(t, e, n) { var r = new to(t, e || null, n || null);
                this.repo.addEventCallbackForQuery(this, r) }, c.prototype.onChildEvent = function(t, e, n) { var r = new eo(t, e, n);
                this.repo.addEventCallbackForQuery(this, r) }, c.prototype.off = function(t, e, n) { Hn("Query.off", 0, 3, arguments.length), hi("Query.off", 1, t, !0), Gn("Query.off", 2, e, !0), Yn("Query.off", 3, n, !0); var r = null,
                    i = null; "value" === t ? r = new to(e || null, null, n || null) : t && (e && ((i = {})[t] = e), r = new eo(i, null, n || null));
                this.repo.removeEventCallbackForQuery(this, r) }, c.prototype.once = function(e, n, t, r) { var i = this;
                Hn("Query.once", 1, 4, arguments.length), hi("Query.once", 1, e, !1), Gn("Query.once", 2, n, !0); var o = c.getCancelAndContextArgs_("Query.once", t, r),
                    a = !0,
                    s = new En;
                s.promise.catch(function() {}); var u = function(t) { a && (a = !1, i.off(e, u), n && n.bind(o.context)(t), s.resolve(t)) }; return this.on(e, u, function(t) { i.off(e, u), o.cancel && o.cancel.bind(o.context)(t), s.reject(t) }), s.promise }, c.prototype.limitToFirst = function(t) { if (Hn("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToFirst: First argument must be a positive integer."); if (this.queryParams_.hasLimit()) throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."); return new c(this.repo, this.path, this.queryParams_.limitToFirst(t), this.orderByCalled_) }, c.prototype.limitToLast = function(t) { if (Hn("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw new Error("Query.limitToLast: First argument must be a positive integer."); if (this.queryParams_.hasLimit()) throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."); return new c(this.repo, this.path, this.queryParams_.limitToLast(t), this.orderByCalled_) }, c.prototype.orderByChild = function(t) { if (Hn("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.'); if ("$priority" === t) throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.'); if ("$value" === t) throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                fi("Query.orderByChild", 1, t, !1), this.validateNoPreviousOrderByCall_("Query.orderByChild"); var e = new Br(t); if (e.isEmpty()) throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead."); var n = new Xi(e),
                    r = this.queryParams_.orderBy(n); return c.validateQueryEndpoints_(r), new c(this.repo, this.path, r, !0) }, c.prototype.orderByKey = function() { Hn("Query.orderByKey", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByKey"); var t = this.queryParams_.orderBy(wi); return c.validateQueryEndpoints_(t), new c(this.repo, this.path, t, !0) }, c.prototype.orderByPriority = function() { Hn("Query.orderByPriority", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByPriority"); var t = this.queryParams_.orderBy(ki); return c.validateQueryEndpoints_(t), new c(this.repo, this.path, t, !0) }, c.prototype.orderByValue = function() { Hn("Query.orderByValue", 0, 0, arguments.length), this.validateNoPreviousOrderByCall_("Query.orderByValue"); var t = this.queryParams_.orderBy(Yi); return c.validateQueryEndpoints_(t), new c(this.repo, this.path, t, !0) }, c.prototype.startAt = function(t, e) { void 0 === t && (t = null), Hn("Query.startAt", 0, 2, arguments.length), ai("Query.startAt", 1, t, this.path, !0), li("Query.startAt", 2, e, !0); var n = this.queryParams_.startAt(t, e); if (c.validateLimit_(n), c.validateQueryEndpoints_(n), this.queryParams_.hasStart()) throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo)."); return void 0 === t && (e = t = null), new c(this.repo, this.path, n, this.orderByCalled_) }, c.prototype.endAt = function(t, e) { void 0 === t && (t = null), Hn("Query.endAt", 0, 2, arguments.length), ai("Query.endAt", 1, t, this.path, !0), li("Query.endAt", 2, e, !0); var n = this.queryParams_.endAt(t, e); if (c.validateLimit_(n), c.validateQueryEndpoints_(n), this.queryParams_.hasEnd()) throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo)."); return new c(this.repo, this.path, n, this.orderByCalled_) }, c.prototype.equalTo = function(t, e) { if (Hn("Query.equalTo", 1, 2, arguments.length), ai("Query.equalTo", 1, t, this.path, !1), li("Query.equalTo", 2, e, !0), this.queryParams_.hasStart()) throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo)."); if (this.queryParams_.hasEnd()) throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo)."); return this.startAt(t, e).endAt(t, e) }, c.prototype.toString = function() { return Hn("Query.toString", 0, 0, arguments.length), this.repo.toString() + this.path.toUrlEncodedString() }, c.prototype.toJSON = function() { return Hn("Query.toJSON", 0, 1, arguments.length), this.toString() }, c.prototype.queryObject = function() { return this.queryParams_.getQueryObject() }, c.prototype.queryIdentifier = function() { var t = this.queryObject(),
                    e = Pr(t); return "{}" === e ? "default" : e }, c.prototype.isEqual = function(t) { if (Hn("Query.isEqual", 1, 1, arguments.length), !(t instanceof c)) { throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.") } var e = this.repo === t.repo,
                    n = this.path.equals(t.path),
                    r = this.queryIdentifier() === t.queryIdentifier(); return e && n && r }, c.getCancelAndContextArgs_ = function(t, e, n) { var r = { cancel: null, context: null }; if (e && n) r.cancel = e, Gn(t, 3, r.cancel, !0), r.context = n, Yn(t, 4, r.context, !0);
                else if (e)
                    if ("object" == typeof e && null !== e) r.context = e;
                    else { if ("function" != typeof e) throw new Error(zn(t, 3, !0) + " must either be a cancel callback or a context object.");
                        r.cancel = e }
                return r }, Object.defineProperty(c.prototype, "ref", { get: function() { return this.getRef() }, enumerable: !0, configurable: !0 }), c }(),
        ro = function() {
            function t() { this.set = {} } return t.prototype.add = function(t, e) { this.set[t] = null === e || e }, t.prototype.contains = function(t) { return Pn(this.set, t) }, t.prototype.get = function(t) { return this.contains(t) ? this.set[t] : void 0 }, t.prototype.remove = function(t) { delete this.set[t] }, t.prototype.clear = function() { this.set = {} }, t.prototype.isEmpty = function() { return Fn(this.set) }, t.prototype.count = function() { return Un(this.set) }, t.prototype.each = function(n) { Ln(this.set, function(t, e) { return n(t, e) }) }, t.prototype.keys = function() { var e = []; return Ln(this.set, function(t) { e.push(t) }), e }, t }(),
        io = function() {
            function i() { this.value_ = null, this.children_ = null } return i.prototype.find = function(t) { if (null != this.value_) return this.value_.getChild(t); if (t.isEmpty() || null == this.children_) return null; var e = t.getFront(); return t = t.popFront(), this.children_.contains(e) ? this.children_.get(e).find(t) : null }, i.prototype.remember = function(t, e) { if (t.isEmpty()) this.value_ = e, this.children_ = null;
                else if (null !== this.value_) this.value_ = this.value_.updateChild(t, e);
                else { null == this.children_ && (this.children_ = new ro); var n = t.getFront();
                    this.children_.contains(n) || this.children_.add(n, new i); var r = this.children_.get(n);
                    t = t.popFront(), r.remember(t, e) } }, i.prototype.forget = function(t) { if (t.isEmpty()) return this.value_ = null, !(this.children_ = null); if (null !== this.value_) { if (this.value_.isLeafNode()) return !1; var e = this.value_;
                    this.value_ = null; var n = this; return e.forEachChild(ki, function(t, e) { n.remember(new Br(t), e) }), this.forget(t) } if (null === this.children_) return !0; var r = t.getFront(); return t = t.popFront(), this.children_.contains(r) && this.children_.get(r).forget(t) && this.children_.remove(r), !!this.children_.isEmpty() && !(this.children_ = null) }, i.prototype.forEachTree = function(r, i) { null !== this.value_ ? i(r, this.value_) : this.forEachChild(function(t, e) { var n = new Br(r.toString() + "/" + t);
                    e.forEachTree(n, i) }) }, i.prototype.forEachChild = function(n) { null !== this.children_ && this.children_.each(function(t, e) { n(t, e) }) }, i }(),
        oo = function(t, e) { return t && "object" == typeof t ? (dn(".sv" in t, "Unexpected leaf node or priority contents"), e[t[".sv"]]) : t },
        ao = function(t, r) { var i, e = t.getPriority().val(),
                n = oo(e, r); if (t.isLeafNode()) { var o = t,
                    a = oo(o.getValue(), r); return a !== o.getValue() || n !== o.getPriority().val() ? new Ni(a, Qi(n)) : t } var s = t; return n !== (i = s).getPriority().val() && (i = i.updatePriority(new Ni(n))), s.forEachChild(ki, function(t, e) { var n = ao(e, r);
                n !== e && (i = i.updateImmediateChild(t, n)) }), i };
    (Gi = zi || (zi = {}))[Gi.OVERWRITE = 0] = "OVERWRITE", Gi[Gi.MERGE = 1] = "MERGE", Gi[Gi.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", Gi[Gi.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"; var so, uo, co = function() {
            function e(t, e, n, r) { this.fromUser = t, this.fromServer = e, this.queryId = n, this.tagged = r, dn(!r || e, "Tagged queries must be from server.") } return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function(t) { return new e(!1, !0, t, !0) }, e }(),
        ho = function() {
            function n(t, e, n) { this.path = t, this.affectedTree = e, this.revert = n, this.type = zi.ACK_USER_WRITE, this.source = co.User } return n.prototype.operationForChild = function(t) { if (this.path.isEmpty()) { if (null != this.affectedTree.value) return dn(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this; var e = this.affectedTree.subtree(new Br(t)); return new n(Br.Empty, e, this.revert) } return dn(this.path.getFront() === t, "operationForChild called for unrelated child."), new n(this.path.popFront(), this.affectedTree, this.revert) }, n }(),
        lo = function() {
            function o(t, e) { void 0 === e && (so || (so = new Mi(Rr)), e = so), this.value = t, this.children = e } return o.fromObject = function(t) { var n = o.Empty; return Ln(t, function(t, e) { n = n.set(new Br(t), e) }), n }, o.prototype.isEmpty = function() { return null === this.value && this.children.isEmpty() }, o.prototype.findRootMostMatchingPathAndValue = function(t, e) { if (null != this.value && e(this.value)) return { path: Br.Empty, value: this.value }; if (t.isEmpty()) return null; var n = t.getFront(),
                    r = this.children.get(n); if (null === r) return null; var i = r.findRootMostMatchingPathAndValue(t.popFront(), e); return null == i ? null : { path: new Br(n).child(i.path), value: i.value } }, o.prototype.findRootMostValueAndPath = function(t) { return this.findRootMostMatchingPathAndValue(t, function() { return !0 }) }, o.prototype.subtree = function(t) { if (t.isEmpty()) return this; var e = t.getFront(),
                    n = this.children.get(e); return null !== n ? n.subtree(t.popFront()) : o.Empty }, o.prototype.set = function(t, e) { if (t.isEmpty()) return new o(e, this.children); var n = t.getFront(),
                    r = (this.children.get(n) || o.Empty).set(t.popFront(), e),
                    i = this.children.insert(n, r); return new o(this.value, i) }, o.prototype.remove = function(t) { if (t.isEmpty()) return this.children.isEmpty() ? o.Empty : new o(null, this.children); var e = t.getFront(),
                    n = this.children.get(e); if (n) { var r = n.remove(t.popFront()),
                        i = void 0; return i = r.isEmpty() ? this.children.remove(e) : this.children.insert(e, r), null === this.value && i.isEmpty() ? o.Empty : new o(this.value, i) } return this }, o.prototype.get = function(t) { if (t.isEmpty()) return this.value; var e = t.getFront(),
                    n = this.children.get(e); return n ? n.get(t.popFront()) : null }, o.prototype.setTree = function(t, e) { if (t.isEmpty()) return e; var n = t.getFront(),
                    r = (this.children.get(n) || o.Empty).setTree(t.popFront(), e),
                    i = void 0; return i = r.isEmpty() ? this.children.remove(n) : this.children.insert(n, r), new o(this.value, i) }, o.prototype.fold = function(t) { return this.fold_(Br.Empty, t) }, o.prototype.fold_ = function(n, r) { var i = {}; return this.children.inorderTraversal(function(t, e) { i[t] = e.fold_(n.child(t), r) }), r(n, this.value, i) }, o.prototype.findOnPath = function(t, e) { return this.findOnPath_(t, Br.Empty, e) }, o.prototype.findOnPath_ = function(t, e, n) { var r = !!this.value && n(e, this.value); if (r) return r; if (t.isEmpty()) return null; var i = t.getFront(),
                    o = this.children.get(i); return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null }, o.prototype.foreachOnPath = function(t, e) { return this.foreachOnPath_(t, Br.Empty, e) }, o.prototype.foreachOnPath_ = function(t, e, n) { if (t.isEmpty()) return this;
                this.value && n(e, this.value); var r = t.getFront(),
                    i = this.children.get(r); return i ? i.foreachOnPath_(t.popFront(), e.child(r), n) : o.Empty }, o.prototype.foreach = function(t) { this.foreach_(Br.Empty, t) }, o.prototype.foreach_ = function(n, r) { this.children.inorderTraversal(function(t, e) { e.foreach_(n.child(t), r) }), this.value && r(n, this.value) }, o.prototype.foreachChild = function(n) { this.children.inorderTraversal(function(t, e) { e.value && n(t, e.value) }) }, o.Empty = new o(null), o }(),
        fo = function() {
            function e(t, e) { this.source = t, this.path = e, this.type = zi.LISTEN_COMPLETE } return e.prototype.operationForChild = function(t) { return this.path.isEmpty() ? new e(this.source, Br.Empty) : new e(this.source, this.path.popFront()) }, e }(),
        po = function() {
            function e(t, e, n) { this.source = t, this.path = e, this.snap = n, this.type = zi.OVERWRITE } return e.prototype.operationForChild = function(t) { return this.path.isEmpty() ? new e(this.source, Br.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap) }, e }(),
        yo = function() {
            function n(t, e, n) { this.source = t, this.path = e, this.children = n, this.type = zi.MERGE } return n.prototype.operationForChild = function(t) { if (this.path.isEmpty()) { var e = this.children.subtree(new Br(t)); return e.isEmpty() ? null : e.value ? new po(this.source, Br.Empty, e.value) : new n(this.source, Br.Empty, e) } return dn(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new n(this.source, this.path.popFront(), this.children) }, n.prototype.toString = function() { return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")" }, n }(),
        mo = function() {
            function t(t, e, n) { this.node_ = t, this.fullyInitialized_ = e, this.filtered_ = n } return t.prototype.isFullyInitialized = function() { return this.fullyInitialized_ }, t.prototype.isFiltered = function() { return this.filtered_ }, t.prototype.isCompleteForPath = function(t) { if (t.isEmpty()) return this.isFullyInitialized() && !this.filtered_; var e = t.getFront(); return this.isCompleteForChild(e) }, t.prototype.isCompleteForChild = function(t) { return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(t) }, t.prototype.getNode = function() { return this.node_ }, t }(),
        go = function() {
            function r(t, e) { this.eventCache_ = t, this.serverCache_ = e } return r.prototype.updateEventSnap = function(t, e, n) { return new r(new mo(t, e, n), this.serverCache_) }, r.prototype.updateServerSnap = function(t, e, n) { return new r(this.eventCache_, new mo(t, e, n)) }, r.prototype.getEventCache = function() { return this.eventCache_ }, r.prototype.getCompleteEventSnap = function() { return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null }, r.prototype.getServerCache = function() { return this.serverCache_ }, r.prototype.getCompleteServerSnap = function() { return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null }, r.Empty = new r(new mo(ji.EMPTY_NODE, !1, !1), new mo(ji.EMPTY_NODE, !1, !1)), r }(),
        vo = function() {
            function r(t, e, n, r, i) { this.type = t, this.snapshotNode = e, this.childName = n, this.oldSnap = r, this.prevName = i } return r.valueChange = function(t) { return new r(r.VALUE, t) }, r.childAddedChange = function(t, e) { return new r(r.CHILD_ADDED, e, t) }, r.childRemovedChange = function(t, e) { return new r(r.CHILD_REMOVED, e, t) }, r.childChangedChange = function(t, e, n) { return new r(r.CHILD_CHANGED, e, t, n) }, r.childMovedChange = function(t, e) { return new r(r.CHILD_MOVED, e, t) }, r.CHILD_ADDED = "child_added", r.CHILD_REMOVED = "child_removed", r.CHILD_CHANGED = "child_changed", r.CHILD_MOVED = "child_moved", r.VALUE = "value", r }(),
        bo = function() {
            function t(t) { this.index_ = t } return t.prototype.updateChild = function(t, e, n, r, i, o) { dn(t.isIndexed(this.index_), "A node must be indexed if only a child is updated"); var a = t.getImmediateChild(e); return a.getChild(r).equals(n.getChild(r)) && a.isEmpty() == n.isEmpty() ? t : (null != o && (n.isEmpty() ? t.hasChild(e) ? o.trackChildChange(vo.childRemovedChange(e, a)) : dn(t.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(vo.childAddedChange(e, n)) : o.trackChildChange(vo.childChangedChange(e, n, a))), t.isLeafNode() && n.isEmpty() ? t : t.updateImmediateChild(e, n).withIndex(this.index_)) }, t.prototype.updateFullNode = function(r, n, i) { return null != i && (r.isLeafNode() || r.forEachChild(ki, function(t, e) { n.hasChild(t) || i.trackChildChange(vo.childRemovedChange(t, e)) }), n.isLeafNode() || n.forEachChild(ki, function(t, e) { if (r.hasChild(t)) { var n = r.getImmediateChild(t);
                        n.equals(e) || i.trackChildChange(vo.childChangedChange(t, e, n)) } else i.trackChildChange(vo.childAddedChange(t, e)) })), n.withIndex(this.index_) }, t.prototype.updatePriority = function(t, e) { return t.isEmpty() ? ji.EMPTY_NODE : t.updatePriority(e) }, t.prototype.filtersNodes = function() { return !1 }, t.prototype.getIndexedFilter = function() { return this }, t.prototype.getIndex = function() { return this.index_ }, t }(),
        _o = function() {
            function t() { this.changeMap_ = {} } return t.prototype.trackChildChange = function(t) { var e = t.type,
                    n = t.childName;
                dn(e == vo.CHILD_ADDED || e == vo.CHILD_CHANGED || e == vo.CHILD_REMOVED, "Only child changes supported for tracking"), dn(".priority" !== n, "Only non-priority child changes can be tracked."); var r = Mn(this.changeMap_, n); if (r) { var i = r.type; if (e == vo.CHILD_ADDED && i == vo.CHILD_REMOVED) this.changeMap_[n] = vo.childChangedChange(n, t.snapshotNode, r.snapshotNode);
                    else if (e == vo.CHILD_REMOVED && i == vo.CHILD_ADDED) delete this.changeMap_[n];
                    else if (e == vo.CHILD_REMOVED && i == vo.CHILD_CHANGED) this.changeMap_[n] = vo.childRemovedChange(n, r.oldSnap);
                    else if (e == vo.CHILD_CHANGED && i == vo.CHILD_ADDED) this.changeMap_[n] = vo.childAddedChange(n, t.snapshotNode);
                    else { if (e != vo.CHILD_CHANGED || i != vo.CHILD_CHANGED) throw yn("Illegal combination of changes: " + t + " occurred after " + r);
                        this.changeMap_[n] = vo.childChangedChange(n, t.snapshotNode, r.oldSnap) } } else this.changeMap_[n] = t }, t.prototype.getChanges = function() { return function(t) { var e = [],
                        n = 0; for (var r in t) e[n++] = t[r]; return e }(this.changeMap_) }, t }(),
        wo = new(function() {
            function t() {} return t.prototype.getCompleteChild = function(t) { return null }, t.prototype.getChildAfterChild = function(t, e, n) { return null }, t }()),
        Eo = function() {
            function t(t, e, n) { void 0 === n && (n = null), this.writes_ = t, this.viewCache_ = e, this.optCompleteServerCache_ = n } return t.prototype.getCompleteChild = function(t) { var e = this.viewCache_.getEventCache(); if (e.isCompleteForChild(t)) return e.getNode().getImmediateChild(t); var n = null != this.optCompleteServerCache_ ? new mo(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache(); return this.writes_.calcCompleteChild(t, n) }, t.prototype.getChildAfterChild = function(t, e, n) { var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap(),
                    i = this.writes_.calcIndexedSlice(r, e, 1, n, t); return 0 === i.length ? null : i[0] }, t }(),
        To = function(t, e) { this.viewCache = t, this.changes = e },
        So = function() {
            function l(t) { this.filter_ = t } return l.prototype.assertIndexed = function(t) { dn(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed"), dn(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed") }, l.prototype.applyOperation = function(t, e, n, r) { var i, o, a = new _o; if (e.type === zi.OVERWRITE) { var s = e;
                    i = s.source.fromUser ? this.applyUserOverwrite_(t, s.path, s.snap, n, r, a) : (dn(s.source.fromServer, "Unknown source."), o = s.source.tagged || t.getServerCache().isFiltered() && !s.path.isEmpty(), this.applyServerOverwrite_(t, s.path, s.snap, n, r, o, a)) } else if (e.type === zi.MERGE) { var u = e;
                    i = u.source.fromUser ? this.applyUserMerge_(t, u.path, u.children, n, r, a) : (dn(u.source.fromServer, "Unknown source."), o = u.source.tagged || t.getServerCache().isFiltered(), this.applyServerMerge_(t, u.path, u.children, n, r, o, a)) } else if (e.type === zi.ACK_USER_WRITE) { var c = e;
                    i = c.revert ? this.revertUserWrite_(t, c.path, n, r, a) : this.ackUserWrite_(t, c.path, c.affectedTree, n, r, a) } else { if (e.type !== zi.LISTEN_COMPLETE) throw yn("Unknown operation type: " + e.type);
                    i = this.listenComplete_(t, e.path, n, a) } var h = a.getChanges(); return l.maybeAddValueEvent_(t, i, h), new To(i, h) }, l.maybeAddValueEvent_ = function(t, e, n) { var r = e.getEventCache(); if (r.isFullyInitialized()) { var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                        o = t.getCompleteEventSnap();
                    (0 < n.length || !t.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(vo.valueChange(e.getCompleteEventSnap())) } }, l.prototype.generateEventCacheAfterServerEvent_ = function(t, e, n, r, i) { var o = t.getEventCache(); if (null != n.shadowingWrite(e)) return t; var a = void 0,
                    s = void 0; if (e.isEmpty())
                    if (dn(t.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), t.getServerCache().isFiltered()) { var u = t.getCompleteServerSnap(),
                            c = u instanceof ji ? u : ji.EMPTY_NODE,
                            h = n.calcCompleteEventChildren(c);
                        a = this.filter_.updateFullNode(t.getEventCache().getNode(), h, i) } else { var l = n.calcCompleteEventCache(t.getCompleteServerSnap());
                        a = this.filter_.updateFullNode(t.getEventCache().getNode(), l, i) }
                else { var f = e.getFront(); if (".priority" == f) { dn(1 == e.getLength(), "Can't have a priority with additional path components"); var p = o.getNode();
                        s = t.getServerCache().getNode(); var d = n.calcEventCacheAfterServerOverwrite(e, p, s);
                        a = null != d ? this.filter_.updatePriority(p, d) : o.getNode() } else { var y = e.popFront(),
                            m = void 0; if (o.isCompleteForChild(f)) { s = t.getServerCache().getNode(); var g = n.calcEventCacheAfterServerOverwrite(e, o.getNode(), s);
                            m = null != g ? o.getNode().getImmediateChild(f).updateChild(y, g) : o.getNode().getImmediateChild(f) } else m = n.calcCompleteChild(f, t.getServerCache());
                        a = null != m ? this.filter_.updateChild(o.getNode(), f, m, y, r, i) : o.getNode() } } return t.updateEventSnap(a, o.isFullyInitialized() || e.isEmpty(), this.filter_.filtersNodes()) }, l.prototype.applyServerOverwrite_ = function(t, e, n, r, i, o, a) { var s, u = t.getServerCache(),
                    c = o ? this.filter_ : this.filter_.getIndexedFilter(); if (e.isEmpty()) s = c.updateFullNode(u.getNode(), n, null);
                else if (c.filtersNodes() && !u.isFiltered()) { var h = u.getNode().updateChild(e, n);
                    s = c.updateFullNode(u.getNode(), h, null) } else { var l = e.getFront(); if (!u.isCompleteForPath(e) && 1 < e.getLength()) return t; var f = e.popFront(),
                        p = u.getNode().getImmediateChild(l).updateChild(f, n);
                    s = ".priority" == l ? c.updatePriority(u.getNode(), p) : c.updateChild(u.getNode(), l, p, f, wo, null) } var d = t.updateServerSnap(s, u.isFullyInitialized() || e.isEmpty(), c.filtersNodes()),
                    y = new Eo(r, d, i); return this.generateEventCacheAfterServerEvent_(d, e, r, y, a) }, l.prototype.applyUserOverwrite_ = function(t, e, n, r, i, o) { var a, s, u = t.getEventCache(),
                    c = new Eo(r, t, i); if (e.isEmpty()) s = this.filter_.updateFullNode(t.getEventCache().getNode(), n, o), a = t.updateEventSnap(s, !0, this.filter_.filtersNodes());
                else { var h = e.getFront(); if (".priority" === h) s = this.filter_.updatePriority(t.getEventCache().getNode(), n), a = t.updateEventSnap(s, u.isFullyInitialized(), u.isFiltered());
                    else { var l = e.popFront(),
                            f = u.getNode().getImmediateChild(h),
                            p = void 0; if (l.isEmpty()) p = n;
                        else { var d = c.getCompleteChild(h);
                            p = null != d ? ".priority" === l.getBack() && d.getChild(l.parent()).isEmpty() ? d : d.updateChild(l, n) : ji.EMPTY_NODE } if (f.equals(p)) a = t;
                        else { var y = this.filter_.updateChild(u.getNode(), h, p, l, c, o);
                            a = t.updateEventSnap(y, u.isFullyInitialized(), this.filter_.filtersNodes()) } } } return a }, l.cacheHasChild_ = function(t, e) { return t.getEventCache().isCompleteForChild(e) }, l.prototype.applyUserMerge_ = function(r, i, t, o, a, s) { var u = this,
                    c = r; return t.foreach(function(t, e) { var n = i.child(t);
                    l.cacheHasChild_(r, n.getFront()) && (c = u.applyUserOverwrite_(c, n, e, o, a, s)) }), t.foreach(function(t, e) { var n = i.child(t);
                    l.cacheHasChild_(r, n.getFront()) || (c = u.applyUserOverwrite_(c, n, e, o, a, s)) }), c }, l.prototype.applyMerge_ = function(n, t) { return t.foreach(function(t, e) { n = n.updateChild(t, e) }), n }, l.prototype.applyServerMerge_ = function(o, t, e, a, s, u, c) { var h = this; if (o.getServerCache().getNode().isEmpty() && !o.getServerCache().isFullyInitialized()) return o; var n, l = o;
                n = t.isEmpty() ? e : lo.Empty.setTree(t, e); var f = o.getServerCache().getNode(); return n.children.inorderTraversal(function(t, e) { if (f.hasChild(t)) { var n = o.getServerCache().getNode().getImmediateChild(t),
                            r = h.applyMerge_(n, e);
                        l = h.applyServerOverwrite_(l, new Br(t), r, a, s, u, c) } }), n.children.inorderTraversal(function(t, e) { var n = !o.getServerCache().isCompleteForChild(t) && null == e.value; if (!f.hasChild(t) && !n) { var r = o.getServerCache().getNode().getImmediateChild(t),
                            i = h.applyMerge_(r, e);
                        l = h.applyServerOverwrite_(l, new Br(t), i, a, s, u, c) } }), l }, l.prototype.ackUserWrite_ = function(t, r, e, n, i, o) { if (null != n.shadowingWrite(r)) return t; var a = t.getServerCache().isFiltered(),
                    s = t.getServerCache(); if (null != e.value) { if (r.isEmpty() && s.isFullyInitialized() || s.isCompleteForPath(r)) return this.applyServerOverwrite_(t, r, s.getNode().getChild(r), n, i, a, o); if (r.isEmpty()) { var u = lo.Empty; return s.getNode().forEachChild(wi, function(t, e) { u = u.set(new Br(t), e) }), this.applyServerMerge_(t, r, u, n, i, a, o) } return t } var c = lo.Empty; return e.foreach(function(t, e) { var n = r.child(t);
                    s.isCompleteForPath(n) && (c = c.set(t, s.getNode().getChild(n))) }), this.applyServerMerge_(t, r, c, n, i, a, o) }, l.prototype.listenComplete_ = function(t, e, n, r) { var i = t.getServerCache(),
                    o = t.updateServerSnap(i.getNode(), i.isFullyInitialized() || e.isEmpty(), i.isFiltered()); return this.generateEventCacheAfterServerEvent_(o, e, n, wo, r) }, l.prototype.revertUserWrite_ = function(t, e, n, r, i) { var o; if (null != n.shadowingWrite(e)) return t; var a = new Eo(n, t, r),
                    s = t.getEventCache().getNode(),
                    u = void 0; if (e.isEmpty() || ".priority" === e.getFront()) { var c = void 0; if (t.getServerCache().isFullyInitialized()) c = n.calcCompleteEventCache(t.getCompleteServerSnap());
                    else { var h = t.getServerCache().getNode();
                        dn(h instanceof ji, "serverChildren would be complete if leaf node"), c = n.calcCompleteEventChildren(h) }
                    c = c, u = this.filter_.updateFullNode(s, c, i) } else { var l = e.getFront(),
                        f = n.calcCompleteChild(l, t.getServerCache());
                    null == f && t.getServerCache().isCompleteForChild(l) && (f = s.getImmediateChild(l)), (u = null != f ? this.filter_.updateChild(s, l, f, e.popFront(), a, i) : t.getEventCache().getNode().hasChild(l) ? this.filter_.updateChild(s, l, ji.EMPTY_NODE, e.popFront(), a, i) : s).isEmpty() && t.getServerCache().isFullyInitialized() && (o = n.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode() && (u = this.filter_.updateFullNode(u, o, i)) } return o = t.getServerCache().isFullyInitialized() || null != n.shadowingWrite(Br.Empty), t.updateEventSnap(u, o, this.filter_.filtersNodes()) }, l }(),
        Co = function() {
            function t(t) { this.query_ = t, this.index_ = this.query_.getQueryParams().getIndex() } return t.prototype.generateEventsForChanges = function(t, e, n) { var r = this,
                    i = [],
                    o = []; return t.forEach(function(t) { t.type === vo.CHILD_CHANGED && r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && o.push(vo.childMovedChange(t.childName, t.snapshotNode)) }), this.generateEventsForType_(i, vo.CHILD_REMOVED, t, n, e), this.generateEventsForType_(i, vo.CHILD_ADDED, t, n, e), this.generateEventsForType_(i, vo.CHILD_MOVED, o, n, e), this.generateEventsForType_(i, vo.CHILD_CHANGED, t, n, e), this.generateEventsForType_(i, vo.VALUE, t, n, e), i }, t.prototype.generateEventsForType_ = function(r, e, t, i, o) { var a = this,
                    n = t.filter(function(t) { return t.type === e });
                n.sort(this.compareChanges_.bind(this)), n.forEach(function(e) { var n = a.materializeSingleChange_(e, o);
                    i.forEach(function(t) { t.respondsTo(e.type) && r.push(t.createEvent(n, a.query_)) }) }) }, t.prototype.materializeSingleChange_ = function(t, e) { return "value" === t.type || "child_removed" === t.type || (t.prevName = e.getPredecessorChildName(t.childName, t.snapshotNode, this.index_)), t }, t.prototype.compareChanges_ = function(t, e) { if (null == t.childName || null == e.childName) throw yn("Should only compare child_ events."); var n = new vi(t.childName, t.snapshotNode),
                    r = new vi(e.childName, e.snapshotNode); return this.index_.compare(n, r) }, t }(),
        Io = function() {
            function t(t, e) { this.query_ = t, this.eventRegistrations_ = []; var n = this.query_.getQueryParams(),
                    r = new bo(n.getIndex()),
                    i = n.getNodeFilter();
                this.processor_ = new So(i); var o = e.getServerCache(),
                    a = e.getEventCache(),
                    s = r.updateFullNode(ji.EMPTY_NODE, o.getNode(), null),
                    u = i.updateFullNode(ji.EMPTY_NODE, a.getNode(), null),
                    c = new mo(s, o.isFullyInitialized(), r.filtersNodes()),
                    h = new mo(u, a.isFullyInitialized(), i.filtersNodes());
                this.viewCache_ = new go(h, c), this.eventGenerator_ = new Co(this.query_) } return t.prototype.getQuery = function() { return this.query_ }, t.prototype.getServerCache = function() { return this.viewCache_.getServerCache().getNode() }, t.prototype.getCompleteServerCache = function(t) { var e = this.viewCache_.getCompleteServerSnap(); return e && (this.query_.getQueryParams().loadsAllData() || !t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()) ? e.getChild(t) : null }, t.prototype.isEmpty = function() { return 0 === this.eventRegistrations_.length }, t.prototype.addEventRegistration = function(t) { this.eventRegistrations_.push(t) }, t.prototype.removeEventRegistration = function(t, n) { var r = []; if (n) { dn(null == t, "A cancel should cancel all event registrations."); var i = this.query_.path;
                    this.eventRegistrations_.forEach(function(t) { n = n; var e = t.createCancelEvent(n, i);
                        e && r.push(e) }) } if (t) { for (var e = [], o = 0; o < this.eventRegistrations_.length; ++o) { var a = this.eventRegistrations_[o]; if (a.matches(t)) { if (t.hasAnyCallback()) { e = e.concat(this.eventRegistrations_.slice(o + 1)); break } } else e.push(a) }
                    this.eventRegistrations_ = e } else this.eventRegistrations_ = []; return r }, t.prototype.applyOperation = function(t, e, n) { t.type === zi.MERGE && null !== t.source.queryId && (dn(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges"), dn(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache")); var r = this.viewCache_,
                    i = this.processor_.applyOperation(r, t, e, n); return this.processor_.assertIndexed(i.viewCache), dn(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(i.changes, i.viewCache.getEventCache().getNode(), null) }, t.prototype.getInitialEvents = function(t) { var e = this.viewCache_.getEventCache(),
                    n = [];
                e.getNode().isLeafNode() || e.getNode().forEachChild(ki, function(t, e) { n.push(vo.childAddedChange(t, e)) }); return e.isFullyInitialized() && n.push(vo.valueChange(e.getNode())), this.generateEventsForChanges_(n, e.getNode(), t) }, t.prototype.generateEventsForChanges_ = function(t, e, n) { var r = n ? [n] : this.eventRegistrations_; return this.eventGenerator_.generateEventsForChanges(t, e, r) }, t }(),
        No = function() {
            function c() { this.views_ = {} } return Object.defineProperty(c, "__referenceConstructor", { get: function() { return dn(uo, "Reference.ts has not been loaded"), uo }, set: function(t) { dn(!uo, "__referenceConstructor has already been defined"), uo = t }, enumerable: !0, configurable: !0 }), c.prototype.isEmpty = function() { return Fn(this.views_) }, c.prototype.applyOperation = function(n, r, i) { var t = n.source.queryId; if (null !== t) { var e = Mn(this.views_, t); return dn(null != e, "SyncTree gave us an op for an invalid query."), e.applyOperation(n, r, i) } var o = []; return Ln(this.views_, function(t, e) { o = o.concat(e.applyOperation(n, r, i)) }), o }, c.prototype.addEventRegistration = function(t, e, n, r, i) { var o = t.queryIdentifier(),
                    a = Mn(this.views_, o); if (!a) { var s = n.calcCompleteEventCache(i ? r : null),
                        u = !1;
                    u = !!s || (s = r instanceof ji ? n.calcCompleteEventChildren(r) : ji.EMPTY_NODE, !1); var c = new go(new mo(s, u, !1), new mo(r, i, !1));
                    a = new Io(t, c), this.views_[o] = a } return a.addEventRegistration(e), a.getInitialEvents(e) }, c.prototype.removeEventRegistration = function(t, n, r) { var e = t.queryIdentifier(),
                    i = [],
                    o = [],
                    a = this.hasCompleteView(); if ("default" === e) { var s = this;
                    Ln(this.views_, function(t, e) { o = o.concat(e.removeEventRegistration(n, r)), e.isEmpty() && (delete s.views_[t], e.getQuery().getQueryParams().loadsAllData() || i.push(e.getQuery())) }) } else { var u = Mn(this.views_, e);
                    u && (o = o.concat(u.removeEventRegistration(n, r)), u.isEmpty() && (delete this.views_[e], u.getQuery().getQueryParams().loadsAllData() || i.push(u.getQuery()))) } return a && !this.hasCompleteView() && i.push(new c.__referenceConstructor(t.repo, t.path)), { removed: i, events: o } }, c.prototype.getQueryViews = function() { var e = this; return Object.keys(this.views_).map(function(t) { return e.views_[t] }).filter(function(t) { return !t.getQuery().getQueryParams().loadsAllData() }) }, c.prototype.getCompleteServerCache = function(n) { var r = null; return Ln(this.views_, function(t, e) { r = r || e.getCompleteServerCache(n) }), r }, c.prototype.viewForQuery = function(t) { if (t.getQueryParams().loadsAllData()) return this.getCompleteView(); var e = t.queryIdentifier(); return Mn(this.views_, e) }, c.prototype.viewExistsForQuery = function(t) { return null != this.viewForQuery(t) }, c.prototype.hasCompleteView = function() { return null != this.getCompleteView() }, c.prototype.getCompleteView = function() { var t, e, n; return (t = this.views_, (n = Vn(t, function(t) { return t.getQuery().getQueryParams().loadsAllData() }, e)) && t[n]) || null }, c }(),
        Do = function() {
            function s(t) { this.writeTree_ = t } return s.prototype.addWrite = function(t, e) { if (t.isEmpty()) return new s(new lo(e)); var n = this.writeTree_.findRootMostValueAndPath(t); if (null != n) { var r = n.path,
                        i = n.value,
                        o = Br.relativePath(r, t); return i = i.updateChild(o, e), new s(this.writeTree_.set(r, i)) } var a = new lo(e); return new s(this.writeTree_.setTree(t, a)) }, s.prototype.addWrites = function(n, t) { var r = this; return Ln(t, function(t, e) { r = r.addWrite(n.child(t), e) }), r }, s.prototype.removeWrite = function(t) { return t.isEmpty() ? s.Empty : new s(this.writeTree_.setTree(t, lo.Empty)) }, s.prototype.hasCompleteWrite = function(t) { return null != this.getCompleteNode(t) }, s.prototype.getCompleteNode = function(t) { var e = this.writeTree_.findRootMostValueAndPath(t); return null != e ? this.writeTree_.get(e.path).getChild(Br.relativePath(e.path, t)) : null }, s.prototype.getCompleteChildren = function() { var n = [],
                    t = this.writeTree_.value; return null != t ? t.isLeafNode() || t.forEachChild(ki, function(t, e) { n.push(new vi(t, e)) }) : this.writeTree_.children.inorderTraversal(function(t, e) { null != e.value && n.push(new vi(t, e.value)) }), n }, s.prototype.childCompoundWrite = function(t) { if (t.isEmpty()) return this; var e = this.getCompleteNode(t); return new s(null != e ? new lo(e) : this.writeTree_.subtree(t)) }, s.prototype.isEmpty = function() { return this.writeTree_.isEmpty() }, s.prototype.apply = function(t) { return s.applySubtreeWrite_(Br.Empty, this.writeTree_, t) }, s.Empty = new s(new lo(null)), s.applySubtreeWrite_ = function(n, t, r) { if (null != t.value) return r.updateChild(n, t.value); var i = null; return t.children.inorderTraversal(function(t, e) { ".priority" === t ? (dn(null !== e.value, "Priority writes must always be leaf nodes"), i = e.value) : r = s.applySubtreeWrite_(n.child(t), e, r) }), r.getChild(n).isEmpty() || null === i || (r = r.updateChild(n.child(".priority"), i)), r }, s }(),
        Ao = function() {
            function c() { this.visibleWrites_ = Do.Empty, this.allWrites_ = [], this.lastWriteId_ = -1 } return c.prototype.childWrites = function(t) { return new ko(t, this) }, c.prototype.addOverwrite = function(t, e, n, r) { dn(n > this.lastWriteId_, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.allWrites_.push({ path: t, snap: e, writeId: n, visible: r }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)), this.lastWriteId_ = n }, c.prototype.addMerge = function(t, e, n) { dn(n > this.lastWriteId_, "Stacking an older merge on top of newer ones"), this.allWrites_.push({ path: t, children: e, writeId: n, visible: !0 }), this.visibleWrites_ = this.visibleWrites_.addWrites(t, e), this.lastWriteId_ = n }, c.prototype.getWrite = function(t) { for (var e = 0; e < this.allWrites_.length; e++) { var n = this.allWrites_[e]; if (n.writeId === t) return n } return null }, c.prototype.removeWrite = function(e) { var n = this,
                    t = this.allWrites_.findIndex(function(t) { return t.writeId === e });
                dn(0 <= t, "removeWrite called with nonexistent writeId."); var r = this.allWrites_[t];
                this.allWrites_.splice(t, 1); for (var i = r.visible, o = !1, a = this.allWrites_.length - 1; i && 0 <= a;) { var s = this.allWrites_[a];
                    s.visible && (t <= a && this.recordContainsPath_(s, r.path) ? i = !1 : r.path.contains(s.path) && (o = !0)), a-- } if (i) { if (o) return this.resetTree_(), !0; if (r.snap) this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path);
                    else { var u = r.children;
                        Ln(u, function(t) { n.visibleWrites_ = n.visibleWrites_.removeWrite(r.path.child(t)) }) } return !0 } return !1 }, c.prototype.getCompleteWriteData = function(t) { return this.visibleWrites_.getCompleteNode(t) }, c.prototype.calcCompleteEventCache = function(e, t, n, r) { if (n || r) { var i = this.visibleWrites_.childCompoundWrite(e); if (!r && i.isEmpty()) return t; if (r || null != t || i.hasCompleteWrite(Br.Empty)) { var o = c.layerTree_(this.allWrites_, function(t) { return (t.visible || r) && (!n || !~n.indexOf(t.writeId)) && (t.path.contains(e) || e.contains(t.path)) }, e);
                        u = t || ji.EMPTY_NODE; return o.apply(u) } return null } var a = this.visibleWrites_.getCompleteNode(e); if (null != a) return a; var s = this.visibleWrites_.childCompoundWrite(e); if (s.isEmpty()) return t; if (null != t || s.hasCompleteWrite(Br.Empty)) { var u = t || ji.EMPTY_NODE; return s.apply(u) } return null }, c.prototype.calcCompleteEventChildren = function(t, e) { var r = ji.EMPTY_NODE,
                    n = this.visibleWrites_.getCompleteNode(t); if (n) return n.isLeafNode() || n.forEachChild(ki, function(t, e) { r = r.updateImmediateChild(t, e) }), r; if (e) { var i = this.visibleWrites_.childCompoundWrite(t); return e.forEachChild(ki, function(t, e) { var n = i.childCompoundWrite(new Br(t)).apply(e);
                        r = r.updateImmediateChild(t, n) }), i.getCompleteChildren().forEach(function(t) { r = r.updateImmediateChild(t.name, t.node) }), r } return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function(t) { r = r.updateImmediateChild(t.name, t.node) }), r }, c.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n, r) { dn(n || r, "Either existingEventSnap or existingServerSnap must exist"); var i = t.child(e); if (this.visibleWrites_.hasCompleteWrite(i)) return null; var o = this.visibleWrites_.childCompoundWrite(i); return o.isEmpty() ? r.getChild(e) : o.apply(r.getChild(e)) }, c.prototype.calcCompleteChild = function(t, e, n) { var r = t.child(e),
                    i = this.visibleWrites_.getCompleteNode(r); return null != i ? i : n.isCompleteForChild(e) ? this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)) : null }, c.prototype.shadowingWrite = function(t) { return this.visibleWrites_.getCompleteNode(t) }, c.prototype.calcIndexedSlice = function(t, e, n, r, i, o) { var a, s = this.visibleWrites_.childCompoundWrite(t),
                    u = s.getCompleteNode(Br.Empty); if (null != u) a = u;
                else { if (null == e) return [];
                    a = s.apply(e) } if ((a = a.withIndex(o)).isEmpty() || a.isLeafNode()) return []; for (var c = [], h = o.getCompare(), l = i ? a.getReverseIteratorFrom(n, o) : a.getIteratorFrom(n, o), f = l.getNext(); f && c.length < r;) 0 !== h(f, n) && c.push(f), f = l.getNext(); return c }, c.prototype.recordContainsPath_ = function(n, r) { return n.snap ? n.path.contains(r) : !!Vn(n.children, function(t, e) { return n.path.child(e).contains(r) }) }, c.prototype.resetTree_ = function() { this.visibleWrites_ = c.layerTree_(this.allWrites_, c.DefaultFilter_, Br.Empty), 0 < this.allWrites_.length ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1 }, c.DefaultFilter_ = function(t) { return t.visible }, c.layerTree_ = function(t, e, n) { for (var r = Do.Empty, i = 0; i < t.length; ++i) { var o = t[i]; if (e(o)) { var a = o.path,
                            s = void 0; if (o.snap) n.contains(a) ? (s = Br.relativePath(n, a), r = r.addWrite(s, o.snap)) : a.contains(n) && (s = Br.relativePath(a, n), r = r.addWrite(Br.Empty, o.snap.getChild(s)));
                        else { if (!o.children) throw yn("WriteRecord should have .snap or .children"); if (n.contains(a)) s = Br.relativePath(n, a), r = r.addWrites(s, o.children);
                            else if (a.contains(n))
                                if ((s = Br.relativePath(a, n)).isEmpty()) r = r.addWrites(Br.Empty, o.children);
                                else { var u = Mn(o.children, s.getFront()); if (u) { var c = u.getChild(s.popFront());
                                        r = r.addWrite(Br.Empty, c) } } } } } return r }, c }(),
        ko = function() {
            function e(t, e) { this.treePath_ = t, this.writeTree_ = e } return e.prototype.calcCompleteEventCache = function(t, e, n) { return this.writeTree_.calcCompleteEventCache(this.treePath_, t, e, n) }, e.prototype.calcCompleteEventChildren = function(t) { return this.writeTree_.calcCompleteEventChildren(this.treePath_, t) }, e.prototype.calcEventCacheAfterServerOverwrite = function(t, e, n) { return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, t, e, n) }, e.prototype.shadowingWrite = function(t) { return this.writeTree_.shadowingWrite(this.treePath_.child(t)) }, e.prototype.calcIndexedSlice = function(t, e, n, r, i) { return this.writeTree_.calcIndexedSlice(this.treePath_, t, e, n, r, i) }, e.prototype.calcCompleteChild = function(t, e) { return this.writeTree_.calcCompleteChild(this.treePath_, t, e) }, e.prototype.child = function(t) { return new e(this.treePath_.child(t), this.writeTree_) }, e }(),
        Ro = function() {
            function g(t) { this.listenProvider_ = t, this.syncPointTree_ = lo.Empty, this.pendingWriteTree_ = new Ao, this.tagToQueryMap_ = {}, this.queryToTagMap_ = {} } return g.prototype.applyUserOverwrite = function(t, e, n, r) { return this.pendingWriteTree_.addOverwrite(t, e, n, r), r ? this.applyOperationToSyncPoints_(new po(co.User, t, e)) : [] }, g.prototype.applyUserMerge = function(t, e, n) { this.pendingWriteTree_.addMerge(t, e, n); var r = lo.fromObject(e); return this.applyOperationToSyncPoints_(new yo(co.User, t, r)) }, g.prototype.ackUserWrite = function(t, e) { void 0 === e && (e = !1); var n = this.pendingWriteTree_.getWrite(t); if (this.pendingWriteTree_.removeWrite(t)) { var r = lo.Empty; return null != n.snap ? r = r.set(Br.Empty, !0) : Ln(n.children, function(t, e) { r = r.set(new Br(t), e) }), this.applyOperationToSyncPoints_(new ho(n.path, r, e)) } return [] }, g.prototype.applyServerOverwrite = function(t, e) { return this.applyOperationToSyncPoints_(new po(co.Server, t, e)) }, g.prototype.applyServerMerge = function(t, e) { var n = lo.fromObject(e); return this.applyOperationToSyncPoints_(new yo(co.Server, t, n)) }, g.prototype.applyListenComplete = function(t) { return this.applyOperationToSyncPoints_(new fo(co.Server, t)) }, g.prototype.applyTaggedQueryOverwrite = function(t, e, n) { var r = this.queryKeyForTag_(n); if (null == r) return []; var i = g.parseQueryKey_(r),
                    o = i.path,
                    a = i.queryId,
                    s = Br.relativePath(o, t),
                    u = new po(co.forServerTaggedQuery(a), s, e); return this.applyTaggedOperation_(o, u) }, g.prototype.applyTaggedQueryMerge = function(t, e, n) { var r = this.queryKeyForTag_(n); if (r) { var i = g.parseQueryKey_(r),
                        o = i.path,
                        a = i.queryId,
                        s = Br.relativePath(o, t),
                        u = lo.fromObject(e),
                        c = new yo(co.forServerTaggedQuery(a), s, u); return this.applyTaggedOperation_(o, c) } return [] }, g.prototype.applyTaggedListenComplete = function(t, e) { var n = this.queryKeyForTag_(e); if (n) { var r = g.parseQueryKey_(n),
                        i = r.path,
                        o = r.queryId,
                        a = Br.relativePath(i, t),
                        s = new fo(co.forServerTaggedQuery(o), a); return this.applyTaggedOperation_(i, s) } return [] }, g.prototype.addEventRegistration = function(t, e) { var r = t.path,
                    i = null,
                    o = !1;
                this.syncPointTree_.foreachOnPath(r, function(t, e) { var n = Br.relativePath(t, r);
                    i = i || e.getCompleteServerCache(n), o = o || e.hasCompleteView() }); var n, a = this.syncPointTree_.get(r);
                (a ? (o = o || a.hasCompleteView(), i = i || a.getCompleteServerCache(Br.Empty)) : (a = new No, this.syncPointTree_ = this.syncPointTree_.set(r, a)), null != i) ? n = !0: (n = !1, i = ji.EMPTY_NODE, this.syncPointTree_.subtree(r).foreachChild(function(t, e) { var n = e.getCompleteServerCache(Br.Empty);
                    n && (i = i.updateImmediateChild(t, n)) })); var s = a.viewExistsForQuery(t); if (!s && !t.getQueryParams().loadsAllData()) { var u = g.makeQueryKey_(t);
                    dn(!(u in this.queryToTagMap_), "View does not exist, but we have a tag"); var c = g.getNextQueryTag_();
                    this.queryToTagMap_[u] = c, this.tagToQueryMap_["_" + c] = u } var h = this.pendingWriteTree_.childWrites(r),
                    l = a.addEventRegistration(t, e, h, i, n); if (!s && !o) { var f = a.viewForQuery(t);
                    l = l.concat(this.setupListener_(t, f)) } return l }, g.prototype.removeEventRegistration = function(t, e, n) { var r = this,
                    i = t.path,
                    o = this.syncPointTree_.get(i),
                    a = []; if (o && ("default" === t.queryIdentifier() || o.viewExistsForQuery(t))) { var s = o.removeEventRegistration(t, e, n);
                    o.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(i)); var u = s.removed;
                    a = s.events; var c = -1 !== u.findIndex(function(t) { return t.getQueryParams().loadsAllData() }),
                        h = this.syncPointTree_.findOnPath(i, function(t, e) { return e.hasCompleteView() }); if (c && !h) { var l = this.syncPointTree_.subtree(i); if (!l.isEmpty())
                            for (var f = this.collectDistinctViewsForSubTree_(l), p = 0; p < f.length; ++p) { var d = f[p],
                                    y = d.getQuery(),
                                    m = this.createListenerForView_(d);
                                this.listenProvider_.startListening(g.queryForListening_(y), this.tagForQuery_(y), m.hashFn, m.onComplete) } } if (!h && 0 < u.length && !n)
                        if (c) { this.listenProvider_.stopListening(g.queryForListening_(t), null) } else u.forEach(function(t) { var e = r.queryToTagMap_[g.makeQueryKey_(t)];
                            r.listenProvider_.stopListening(g.queryForListening_(t), e) });
                    this.removeTags_(u) } return a }, g.prototype.calcCompleteEventCache = function(i, t) { var e = this.pendingWriteTree_,
                    n = this.syncPointTree_.findOnPath(i, function(t, e) { var n = Br.relativePath(t, i),
                            r = e.getCompleteServerCache(n); if (r) return r }); return e.calcCompleteEventCache(i, n, t, !0) }, g.prototype.collectDistinctViewsForSubTree_ = function(t) { return t.fold(function(t, e, n) { if (e && e.hasCompleteView()) return [e.getCompleteView()]; var r = []; return e && (r = e.getQueryViews()), Ln(n, function(t, e) { r = r.concat(e) }), r }) }, g.prototype.removeTags_ = function(t) { for (var e = 0; e < t.length; ++e) { var n = t[e]; if (!n.getQueryParams().loadsAllData()) { var r = g.makeQueryKey_(n),
                            i = this.queryToTagMap_[r];
                        delete this.queryToTagMap_[r], delete this.tagToQueryMap_["_" + i] } } }, g.queryForListening_ = function(t) { return t.getQueryParams().loadsAllData() && !t.getQueryParams().isDefault() ? t.getRef() : t }, g.prototype.setupListener_ = function(t, e) { var n = t.path,
                    r = this.tagForQuery_(t),
                    i = this.createListenerForView_(e),
                    o = this.listenProvider_.startListening(g.queryForListening_(t), r, i.hashFn, i.onComplete),
                    a = this.syncPointTree_.subtree(n); if (r) dn(!a.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
                else
                    for (var s = a.fold(function(t, e, n) { if (!t.isEmpty() && e && e.hasCompleteView()) return [e.getCompleteView().getQuery()]; var r = []; return e && (r = r.concat(e.getQueryViews().map(function(t) { return t.getQuery() }))), Ln(n, function(t, e) { r = r.concat(e) }), r }), u = 0; u < s.length; ++u) { var c = s[u];
                        this.listenProvider_.stopListening(g.queryForListening_(c), this.tagForQuery_(c)) }
                return o }, g.prototype.createListenerForView_ = function(t) { var n = this,
                    r = t.getQuery(),
                    i = this.tagForQuery_(r); return { hashFn: function() { return (t.getServerCache() || ji.EMPTY_NODE).hash() }, onComplete: function(t) { if ("ok" === t) return i ? n.applyTaggedListenComplete(r.path, i) : n.applyListenComplete(r.path); var e = function(t, e) { var n = "Unknown Error"; "too_big" === t ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == t ? n = "Client doesn't have permission to access the desired data." : "unavailable" == t && (n = "The service is unavailable"); var r = new Error(t + " at " + e.path.toString() + ": " + n); return r.code = t.toUpperCase(), r }(t, r); return n.removeEventRegistration(r, null, e) } } }, g.makeQueryKey_ = function(t) { return t.path.toString() + "$" + t.queryIdentifier() }, g.parseQueryKey_ = function(t) { var e = t.indexOf("$"); return dn(-1 !== e && e < t.length - 1, "Bad queryKey."), { queryId: t.substr(e + 1), path: new Br(t.substr(0, e)) } }, g.prototype.queryKeyForTag_ = function(t) { return this.tagToQueryMap_["_" + t] }, g.prototype.tagForQuery_ = function(t) { var e = g.makeQueryKey_(t); return Mn(this.queryToTagMap_, e) }, g.getNextQueryTag_ = function() { return g.nextQueryTag_++ }, g.prototype.applyTaggedOperation_ = function(t, e) { var n = this.syncPointTree_.get(t);
                dn(n, "Missing sync point for query tag that we're tracking"); var r = this.pendingWriteTree_.childWrites(t); return n.applyOperation(e, r, null) }, g.prototype.applyOperationToSyncPoints_ = function(t) { return this.applyOperationHelper_(t, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(Br.Empty)) }, g.prototype.applyOperationHelper_ = function(t, e, n, r) { if (t.path.isEmpty()) return this.applyOperationDescendantsHelper_(t, e, n, r); var i = e.get(Br.Empty);
                null == n && null != i && (n = i.getCompleteServerCache(Br.Empty)); var o = [],
                    a = t.path.getFront(),
                    s = t.operationForChild(a),
                    u = e.children.get(a); if (u && s) { var c = n ? n.getImmediateChild(a) : null,
                        h = r.child(a);
                    o = o.concat(this.applyOperationHelper_(s, u, c, h)) } return i && (o = o.concat(i.applyOperation(t, r, n))), o }, g.prototype.applyOperationDescendantsHelper_ = function(o, t, a, s) { var u = this,
                    e = t.get(Br.Empty);
                null == a && null != e && (a = e.getCompleteServerCache(Br.Empty)); var c = []; return t.children.inorderTraversal(function(t, e) { var n = a ? a.getImmediateChild(t) : null,
                        r = s.child(t),
                        i = o.operationForChild(t);
                    i && (c = c.concat(u.applyOperationDescendantsHelper_(i, e, n, r))) }), e && (c = c.concat(e.applyOperation(o, s, a))), c }, g.nextQueryTag_ = 1, g }(),
        Oo = function() {
            function t() { this.rootNode_ = ji.EMPTY_NODE } return t.prototype.getNode = function(t) { return this.rootNode_.getChild(t) }, t.prototype.updateSnapshot = function(t, e) { this.rootNode_ = this.rootNode_.updateChild(t, e) }, t }(),
        Po = function() {
            function t(t) { this.app_ = t } return t.prototype.getToken = function(t) { return this.app_.INTERNAL.getToken(t).then(null, function(t) { return t && "auth/token-not-initialized" === t.code ? (Er("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(t) }) }, t.prototype.addTokenChangeListener = function(t) { this.app_.INTERNAL.addAuthTokenListener(t) }, t.prototype.removeTokenChangeListener = function(t) { this.app_.INTERNAL.removeAuthTokenListener(t) }, t.prototype.notifyForInvalidToken = function() { var t = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. '; "credential" in this.app_.options ? t += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? t += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : t += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', Ir(t) }, t }(),
        Mo = function() {
            function t() { this.counters_ = {} } return t.prototype.incrementCounter = function(t, e) { void 0 === e && (e = 1), Pn(this.counters_, t) || (this.counters_[t] = 0), this.counters_[t] += e }, t.prototype.get = function() { return bn(this.counters_) }, t }(),
        Lo = function() {
            function t() {} return t.getCollection = function(t) { var e = t.toString(); return this.collections_[e] || (this.collections_[e] = new Mo), this.collections_[e] }, t.getOrCreateReporter = function(t, e) { var n = t.toString(); return this.reporters_[n] || (this.reporters_[n] = e()), this.reporters_[n] }, t.collections_ = {}, t.reporters_ = {}, t }(),
        xo = function() {
            function t(t) { this.collection_ = t, this.last_ = null } return t.prototype.get = function() { var t = this.collection_.get(),
                    n = xn(t); return this.last_ && Ln(this.last_, function(t, e) { n[t] = n[t] - e }), this.last_ = t, n }, t }(),
        Fo = function() {
            function t(t, e) { this.server_ = e, this.statsToReport_ = {}, this.statsListener_ = new xo(t); var n = 1e4 + 2e4 * Math.random();
                Vr(this.reportStats_.bind(this), Math.floor(n)) } return t.prototype.includeStat = function(t) { this.statsToReport_[t] = !0 }, t.prototype.reportStats_ = function() { var n = this,
                    t = this.statsListener_.get(),
                    r = {},
                    i = !1;
                Ln(t, function(t, e) { 0 < e && Pn(n.statsToReport_, t) && (r[t] = e, i = !0) }), i && this.server_.reportStats(r), Vr(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5)) }, t }(),
        Uo = function() {
            function t() { this.eventLists_ = [], this.recursionDepth_ = 0 } return t.prototype.queueEvents = function(t) { for (var e = null, n = 0; n < t.length; n++) { var r = t[n],
                        i = r.getPath();
                    null === e || i.equals(e.getPath()) || (this.eventLists_.push(e), e = null), null === e && (e = new qo(i)), e.add(r) }
                e && this.eventLists_.push(e) }, t.prototype.raiseEventsAtPath = function(e, t) { this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) { return t.equals(e) }) }, t.prototype.raiseEventsForChangedPath = function(e, t) { this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function(t) { return t.contains(e) || e.contains(t) }) }, t.prototype.raiseQueuedEventsMatchingPredicate_ = function(t) { this.recursionDepth_++; for (var e = !0, n = 0; n < this.eventLists_.length; n++) { var r = this.eventLists_[n]; if (r) t(r.getPath()) ? (this.eventLists_[n].raise(), this.eventLists_[n] = null) : e = !1 }
                e && (this.eventLists_ = []), this.recursionDepth_-- }, t }(),
        qo = function() {
            function t(t) { this.path_ = t, this.events_ = [] } return t.prototype.add = function(t) { this.events_.push(t) }, t.prototype.raise = function() { for (var t = 0; t < this.events_.length; t++) { var e = this.events_[t]; if (null !== e) { this.events_[t] = null; var n = e.getEventRunner();
                        br && Er("event: " + e.toString()), qr(n) } } }, t.prototype.getPath = function() { return this.path_ }, t }(),
        Vo = function() {
            function t(t) { this.allowedEvents_ = t, this.listeners_ = {}, dn(Array.isArray(t) && 0 < t.length, "Requires a non-empty array") } return t.prototype.trigger = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; if (Array.isArray(this.listeners_[t]))
                    for (var r = this.listeners_[t].slice(), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, e) }, t.prototype.on = function(t, e, n) { this.validateEventType_(t), this.listeners_[t] = this.listeners_[t] || [], this.listeners_[t].push({ callback: e, context: n }); var r = this.getInitialEvent(t);
                r && e.apply(n, r) }, t.prototype.off = function(t, e, n) { this.validateEventType_(t); for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                    if (r[i].callback === e && (!n || n === r[i].context)) return void r.splice(i, 1) }, t.prototype.validateEventType_ = function(e) { dn(this.allowedEvents_.find(function(t) { return t === e }), "Unknown event: " + e) }, t }(),
        Bo = function(r) {
            function t() { var e, t, n = r.call(this, ["visible"]) || this; return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), n.visible_ = !0, t && document.addEventListener(t, function() { var t = !document[e];
                    t !== n.visible_ && (n.visible_ = t, n.trigger("visible", t)) }, !1), n } return an(t, r), t.getInstance = function() { return new t }, t.prototype.getInitialEvent = function(t) { return dn("visible" === t, "Unknown event type: " + t), [this.visible_] }, t }(Vo),
        jo = function(e) {
            function t() { var t = e.call(this, ["online"]) || this; return t.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || Tn() || (window.addEventListener("online", function() { t.online_ || (t.online_ = !0, t.trigger("online", !0)) }, !1), window.addEventListener("offline", function() { t.online_ && (t.online_ = !1, t.trigger("online", !1)) }, !1)), t } return an(t, e), t.getInstance = function() { return new t }, t.prototype.getInitialEvent = function(t) { return dn("online" === t, "Unknown event type: " + t), [this.online_] }, t.prototype.currentlyOnline = function() { return this.online_ }, t }(Vo),
        Wo = function() {
            function t(t) { this.onMessage_ = t, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null } return t.prototype.closeAfter = function(t, e) { this.closeAfterResponse = t, this.onClose = e, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null) }, t.prototype.handleResponse = function(t, e) { var r = this;
                this.pendingResponses[t] = e; for (var n = function() { var e = i.pendingResponses[i.currentResponseNum];
                        delete i.pendingResponses[i.currentResponseNum]; for (var t = function(t) { e[t] && qr(function() { r.onMessage_(e[t]) }) }, n = 0; n < e.length; ++n) t(n); if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
                        i.currentResponseNum++ }, i = this; this.pendingResponses[this.currentResponseNum];) { if ("break" === n()) break } }, t }(),
        Ko = function() {
            function t(t, e, n, r) { this.connId = t, this.repoInfo = e, this.transportSessionId = n, this.lastSessionId = r, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = Tr(t), this.stats_ = Lo.getCollection(e), this.urlFn = function(t) { return e.connectionURL(Qr, t) } } return t.prototype.open = function(t, e) { var o = this;
                this.curSegmentNum = 0, this.onDisconnect_ = e, this.myPacketOrderer = new Wo(t), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function() { o.log_("Timed out trying to connect."), o.onClosed_(), o.connectTimeoutTimer_ = null }, Math.floor(3e4)),
                    function(t) { if (Cn() || "complete" === document.readyState) t();
                        else { var e = !1,
                                n = function() { document.body ? e || (e = !0, t()) : setTimeout(n, Math.floor(10)) };
                            document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() { "complete" === document.readyState && n() }), window.attachEvent("onload", n)) } }(function() { if (!o.isClosed_) { o.scriptTagHolder = new Qo(function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = t[0],
                                    r = t[1],
                                    i = t[2]; if (o.incrementIncomingBytes_(t), o.scriptTagHolder)
                                    if (o.connectTimeoutTimer_ && (clearTimeout(o.connectTimeoutTimer_), o.connectTimeoutTimer_ = null), o.everConnected_ = !0, "start" == n) o.id = r, o.password = i;
                                    else { if ("close" !== n) throw new Error("Unrecognized command received: " + n);
                                        r ? (o.scriptTagHolder.sendNewPolls = !1, o.myPacketOrderer.closeAfter(r, function() { o.onClosed_() })) : o.onClosed_() } }, function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = t[0],
                                    r = t[1];
                                o.incrementIncomingBytes_(t), o.myPacketOrderer.handleResponse(n, r) }, function() { o.onClosed_() }, o.urlFn); var t = { start: "t" };
                            t.ser = Math.floor(1e8 * Math.random()), o.scriptTagHolder.uniqueCallbackIdentifier && (t.cb = o.scriptTagHolder.uniqueCallbackIdentifier), t.v = "5", o.transportSessionId && (t.s = o.transportSessionId), o.lastSessionId && (t.ls = o.lastSessionId), !Cn() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(Wr) && (t.r = "f"); var e = o.urlFn(t);
                            o.log_("Connecting via long-poll to " + e), o.scriptTagHolder.addTag(e, function() {}) } }) }, t.prototype.start = function() { this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password) }, t.forceAllow = function() { t.forceAllow_ = !0 }, t.forceDisallow = function() { t.forceDisallow_ = !0 }, t.isAvailable = function() { return t.forceAllow_ || !t.forceDisallow_ && "undefined" != typeof document && null != document.createElement && !("object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href)) && !("object" == typeof Windows && "object" == typeof Windows.UI) && !Cn() }, t.prototype.markConnectionHealthy = function() {}, t.prototype.shutdown_ = function() { this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null) }, t.prototype.onClosed_ = function() { this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null)) }, t.prototype.close = function() { this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_()) }, t.prototype.send = function(t) { var e = Rn(t);
                this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length); for (var n, r = (n = mn(e), gn.encodeByteArray(n, !0)), i = Mr(r, 1840), o = 0; o < i.length; o++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]), this.curSegmentNum++ }, t.prototype.addDisconnectPingFrame = function(t, e) { if (!Cn()) { this.myDisconnFrame = document.createElement("iframe"); var n = { dframe: "t" };
                    n.id = t, n.pw = e, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame) } }, t.prototype.incrementIncomingBytes_ = function(t) { var e = Rn(t).length;
                this.bytesReceived += e, this.stats_.incrementCounter("bytes_received", e) }, t }(),
        Qo = function() {
            function a(t, e, n, r) { if (this.onDisconnect = n, this.urlFn = r, this.outstandingRequests = new ro, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, Cn()) this.commandCB = t, this.onMessageCB = e;
                else { this.uniqueCallbackIdentifier = mr(), window["pLPCommand" + this.uniqueCallbackIdentifier] = t, window["pRTLPCB" + this.uniqueCallbackIdentifier] = e, this.myIFrame = a.createIFrame_(); var i = ""; if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) i = '<script>document.domain="' + document.domain + '";<\/script>'; var o = "<html><body>" + i + "</body></html>"; try { this.myIFrame.doc.open(), this.myIFrame.doc.write(o), this.myIFrame.doc.close() } catch (t) { Er("frame writing exception"), t.stack && Er(t.stack), Er(t) } } } return a.createIFrame_ = function() { var e = document.createElement("iframe"); if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                document.body.appendChild(e); try { e.contentWindow.document || Er("No IE domain setting required") } catch (t) { var n = document.domain;
                    e.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())" } return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e }, a.prototype.close = function() { var t = this; if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function() { null !== t.myIFrame && (document.body.removeChild(t.myIFrame), t.myIFrame = null) }, Math.floor(0))), Cn() && this.myID) { var e = { disconn: "t" };
                    e.id = this.myID, e.pw = this.myPW; var n = this.urlFn(e);
                    a.nodeRestRequest(n) } var r = this.onDisconnect;
                r && (this.onDisconnect = null, r()) }, a.prototype.startLongPoll = function(t, e) { for (this.myID = t, this.myPW = e, this.alive = !0; this.newRequest_();); }, a.prototype.newRequest_ = function() { if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (0 < this.pendingSegs.length ? 2 : 1)) { this.currentSerial++; var t = {};
                    t.id = this.myID, t.pw = this.myPW, t.ser = this.currentSerial; for (var e = this.urlFn(t), n = "", r = 0; 0 < this.pendingSegs.length;) { if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break; var i = this.pendingSegs.shift();
                        n = n + "&seg" + r + "=" + i.seg + "&ts" + r + "=" + i.ts + "&d" + r + "=" + i.d, r++ } return e += n, this.addLongPollTag_(e, this.currentSerial), !0 } return !1 }, a.prototype.enqueueSegment = function(t, e, n) { this.pendingSegs.push({ seg: t, ts: e, d: n }), this.alive && this.newRequest_() }, a.prototype.addLongPollTag_ = function(t, e) { var n = this;
                this.outstandingRequests.add(e, 1); var r = function() { n.outstandingRequests.remove(e), n.newRequest_() },
                    i = setTimeout(r, Math.floor(25e3));
                this.addTag(t, function() { clearTimeout(i), r() }) }, a.prototype.addTag = function(t, n) { var r = this;
                Cn() ? this.doNodeLongPoll(t, n) : setTimeout(function() { try { if (!r.sendNewPolls) return; var e = r.myIFrame.doc.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = t, e.onload = e.onreadystatechange = function() { var t = e.readyState;
                            t && "loaded" !== t && "complete" !== t || (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), n()) }, e.onerror = function() { Er("Long-poll script failed to load: " + t), r.sendNewPolls = !1, r.close() }, r.myIFrame.doc.body.appendChild(e) } catch (t) {} }, Math.floor(1)) }, a }(),
        Ho = null; "undefined" != typeof MozWebSocket ? Ho = MozWebSocket : "undefined" != typeof WebSocket && (Ho = WebSocket); var zo = function() {
            function i(t, e, n, r) { this.connId = t, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = Tr(this.connId), this.stats_ = Lo.getCollection(e), this.connURL = i.connectionURL_(e, n, r) } return i.connectionURL_ = function(t, e, n) { var r = { v: "5" }; return !Cn() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(Wr) && (r.r = "f"), e && (r.s = e), n && (r.ls = n), t.connectionURL(Kr, r) }, i.prototype.open = function(t, e) { var n = this;
                this.onDisconnect = e, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, pr.set("previous_websocket_failure", !0); try { if (Cn()) { var r = { headers: { "User-Agent": "Firebase/5/" + Mh.SDK_VERSION + "/" + process.platform + "/Node" } },
                            i = process.env,
                            o = 0 == this.connURL.indexOf("wss://") ? i.HTTPS_PROXY || i.https_proxy : i.HTTP_PROXY || i.http_proxy;
                        o && (r.proxy = { origin: o }), this.mySock = new Ho(this.connURL, [], r) } else this.mySock = new Ho(this.connURL) } catch (t) { this.log_("Error instantiating WebSocket."); var a = t.message || t.data; return a && this.log_(a), void this.onClosed_() }
                this.mySock.onopen = function() { n.log_("Websocket connected."), n.everConnected_ = !0 }, this.mySock.onclose = function() { n.log_("Websocket connection was disconnected."), n.mySock = null, n.onClosed_() }, this.mySock.onmessage = function(t) { n.handleIncomingFrame(t) }, this.mySock.onerror = function(t) { n.log_("WebSocket error.  Closing connection."); var e = t.message || t.data;
                    e && n.log_(e), n.onClosed_() } }, i.prototype.start = function() {}, i.forceDisallow = function() { i.forceDisallow_ = !0 }, i.isAvailable = function() { var t = !1; if ("undefined" != typeof navigator && navigator.userAgent) { var e = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
                    e && 1 < e.length && parseFloat(e[1]) < 4.4 && (t = !0) } return !t && null !== Ho && !i.forceDisallow_ }, i.previouslyFailed = function() { return pr.isInMemoryStorage || !0 === pr.get("previous_websocket_failure") }, i.prototype.markConnectionHealthy = function() { pr.remove("previous_websocket_failure") }, i.prototype.appendFrame_ = function(t) { if (this.frames.push(t), this.frames.length == this.totalFrames) { var e = this.frames.join("");
                    this.frames = null; var n = kn(e);
                    this.onMessage(n) } }, i.prototype.handleNewFrameCount_ = function(t) { this.totalFrames = t, this.frames = [] }, i.prototype.extractFrameCount_ = function(t) { if (dn(null === this.frames, "We already have a frame buffer"), t.length <= 6) { var e = Number(t); if (!isNaN(e)) return this.handleNewFrameCount_(e), null } return this.handleNewFrameCount_(1), t }, i.prototype.handleIncomingFrame = function(t) { if (null !== this.mySock) { var e = t.data; if (this.bytesReceived += e.length, this.stats_.incrementCounter("bytes_received", e.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(e);
                    else { var n = this.extractFrameCount_(e);
                        null !== n && this.appendFrame_(n) } } }, i.prototype.send = function(t) { this.resetKeepAlive(); var e = Rn(t);
                this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length); var n = Mr(e, 16384);
                1 < n.length && this.sendString_(String(n.length)); for (var r = 0; r < n.length; r++) this.sendString_(n[r]) }, i.prototype.shutdown_ = function() { this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null) }, i.prototype.onClosed_ = function() { this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null)) }, i.prototype.close = function() { this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_()) }, i.prototype.resetKeepAlive = function() { var t = this;
                clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function() { t.mySock && t.sendString_("0"), t.resetKeepAlive() }, Math.floor(45e3)) }, i.prototype.sendString_ = function(t) { try { this.mySock.send(t) } catch (t) { this.log_("Exception thrown from WebSocket.send():", t.message || t.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0) } }, i.responsesRequiredToBeHealthy = 2, i.healthyTimeout = 3e4, i }(),
        Go = function() {
            function i(t) { this.initTransports_(t) } return Object.defineProperty(i, "ALL_TRANSPORTS", { get: function() { return [Ko, zo] }, enumerable: !0, configurable: !0 }), i.prototype.initTransports_ = function(t) { var e = zo && zo.isAvailable(),
                    n = e && !zo.previouslyFailed(); if (t.webSocketOnly && (e || Ir("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), n = !0), n) this.transports_ = [zo];
                else { var r = this.transports_ = [];
                    Lr(i.ALL_TRANSPORTS, function(t, e) { e && e.isAvailable() && r.push(e) }) } }, i.prototype.initialTransport = function() { if (0 < this.transports_.length) return this.transports_[0]; throw new Error("No transports available") }, i.prototype.upgradeTransport = function() { return 1 < this.transports_.length ? this.transports_[1] : null }, i }(),
        Yo = function() {
            function t(t, e, n, r, i, o, a) { this.id = t, this.repoInfo_ = e, this.onMessage_ = n, this.onReady_ = r, this.onDisconnect_ = i, this.onKill_ = o, this.lastSessionId = a, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = Tr("c:" + this.id + ":"), this.transportManager_ = new Go(e), this.log_("Connection created"), this.start_() } return t.prototype.start_ = function() { var t = this,
                    e = this.transportManager_.initialTransport();
                this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, void 0, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0; var n = this.connReceiver_(this.conn_),
                    r = this.disconnReceiver_(this.conn_);
                this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function() { t.conn_ && t.conn_.open(n, r) }, Math.floor(0)); var i = e.healthyTimeout || 0;
                0 < i && (this.healthyTimeout_ = Vr(function() { t.healthyTimeout_ = null, t.isHealthy_ || (t.conn_ && 102400 < t.conn_.bytesReceived ? (t.log_("Connection exceeded healthy timeout but has received " + t.conn_.bytesReceived + " bytes.  Marking connection healthy."), t.isHealthy_ = !0, t.conn_.markConnectionHealthy()) : t.conn_ && 10240 < t.conn_.bytesSent ? t.log_("Connection exceeded healthy timeout but has sent " + t.conn_.bytesSent + " bytes.  Leaving connection alive.") : (t.log_("Closing unhealthy connection after timeout."), t.close())) }, Math.floor(i))) }, t.prototype.nextTransportId_ = function() { return "c:" + this.id + ":" + this.connectionCount++ }, t.prototype.disconnReceiver_ = function(e) { var n = this; return function(t) { e === n.conn_ ? n.onConnectionLost_(t) : e === n.secondaryConn_ ? (n.log_("Secondary connection lost."), n.onSecondaryConnectionLost_()) : n.log_("closing an old connection") } }, t.prototype.connReceiver_ = function(e) { var n = this; return function(t) { 2 != n.state_ && (e === n.rx_ ? n.onPrimaryMessageReceived_(t) : e === n.secondaryConn_ ? n.onSecondaryMessageReceived_(t) : n.log_("message on old connection")) } }, t.prototype.sendRequest = function(t) { var e = { t: "d", d: t };
                this.sendData_(e) }, t.prototype.tryCleanupConnection = function() { this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null) }, t.prototype.onSecondaryControl_ = function(t) { if ("t" in t) { var e = t.t; "a" === e ? this.upgradeIfSecondaryHealthy_() : "r" === e ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === e && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_()) } }, t.prototype.onSecondaryMessageReceived_ = function(t) { var e = Or("t", t),
                    n = Or("d", t); if ("c" == e) this.onSecondaryControl_(n);
                else { if ("d" != e) throw new Error("Unknown protocol layer: " + e);
                    this.pendingDataMessages.push(n) } }, t.prototype.upgradeIfSecondaryHealthy_ = function() { this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } })) }, t.prototype.proceedWithUpgrade_ = function() { this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }), this.log_("Ending transmission on primary"), this.conn_.send({ t: "c", d: { t: "n", d: {} } }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection() }, t.prototype.onPrimaryMessageReceived_ = function(t) { var e = Or("t", t),
                    n = Or("d", t); "c" == e ? this.onControl_(n) : "d" == e && this.onDataMessage_(n) }, t.prototype.onDataMessage_ = function(t) { this.onPrimaryResponse_(), this.onMessage_(t) }, t.prototype.onPrimaryResponse_ = function() { this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy())) }, t.prototype.onControl_ = function(t) { var e = Or("t", t); if ("d" in t) { var n = t.d; if ("h" === e) this.onHandshake_(n);
                    else if ("n" === e) { this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_; for (var r = 0; r < this.pendingDataMessages.length; ++r) this.onDataMessage_(this.pendingDataMessages[r]);
                        this.pendingDataMessages = [], this.tryCleanupConnection() } else "s" === e ? this.onConnectionShutdown_(n) : "r" === e ? this.onReset_(n) : "e" === e ? Sr("Server Error: " + n) : "o" === e ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : Sr("Unknown control packet command: " + e) } }, t.prototype.onHandshake_ = function(t) { var e = t.ts,
                    n = t.v,
                    r = t.h;
                this.sessionId = t.s, this.repoInfo_.updateHost(r), 0 == this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, e), "5" !== n && Ir("Protocol version mismatch detected"), this.tryStartUpgrade_()) }, t.prototype.tryStartUpgrade_ = function() { var t = this.transportManager_.upgradeTransport();
                t && this.startUpgrade_(t) }, t.prototype.startUpgrade_ = function(t) { var e = this;
                this.secondaryConn_ = new t(this.nextTransportId_(), this.repoInfo_, this.sessionId), this.secondaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0; var n = this.connReceiver_(this.secondaryConn_),
                    r = this.disconnReceiver_(this.secondaryConn_);
                this.secondaryConn_.open(n, r), Vr(function() { e.secondaryConn_ && (e.log_("Timed out trying to upgrade."), e.secondaryConn_.close()) }, Math.floor(6e4)) }, t.prototype.onReset_ = function(t) { this.log_("Reset packet received.  New host: " + t), this.repoInfo_.updateHost(t), 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_()) }, t.prototype.onConnectionEstablished_ = function(t, e) { var n = this;
                this.log_("Realtime connection established."), this.conn_ = t, this.state_ = 1, this.onReady_ && (this.onReady_(e, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Vr(function() { n.sendPingOnPrimaryIfNecessary_() }, Math.floor(5e3)) }, t.prototype.sendPingOnPrimaryIfNecessary_ = function() { this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({ t: "c", d: { t: "p", d: {} } })) }, t.prototype.onSecondaryConnectionLost_ = function() { var t = this.secondaryConn_;
                this.secondaryConn_ = null, this.tx_ !== t && this.rx_ !== t || this.close() }, t.prototype.onConnectionLost_ = function(t) { this.conn_ = null, t || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (pr.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close() }, t.prototype.onConnectionShutdown_ = function(t) { this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(t), this.onKill_ = null), this.onDisconnect_ = null, this.close() }, t.prototype.sendData_ = function(t) { if (1 !== this.state_) throw "Connection is not connected";
                this.tx_.send(t) }, t.prototype.close = function() { 2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null)) }, t.prototype.closeConnections_ = function() { this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null) }, t }(),
        Xo = function() {
            function t() {} return t.prototype.put = function(t, e, n, r) {}, t.prototype.merge = function(t, e, n, r) {}, t.prototype.refreshAuthToken = function(t) {}, t.prototype.onDisconnectPut = function(t, e, n) {}, t.prototype.onDisconnectMerge = function(t, e, n) {}, t.prototype.onDisconnectCancel = function(t, e) {}, t.prototype.reportStats = function(t) {}, t }(),
        Jo = function(s) {
            function h(t, e, n, r, i, o) { var a = s.call(this) || this; if (a.repoInfo_ = t, a.onDataUpdate_ = e, a.onConnectStatus_ = n, a.onServerInfoUpdate_ = r, a.authTokenProvider_ = i, a.authOverride_ = o, a.id = h.nextPersistentConnectionId_++, a.log_ = Tr("p:" + a.id + ":"), a.interruptReasons_ = {}, a.listens_ = {}, a.outstandingPuts_ = [], a.outstandingPutCount_ = 0, a.onDisconnectRequestQueue_ = [], a.connected_ = !1, a.reconnectDelay_ = 1e3, a.maxReconnectDelay_ = 3e5, a.securityDebugCallback_ = null, a.lastSessionId = null, a.establishConnectionTimer_ = null, a.visible_ = !1, a.requestCBHash_ = {}, a.requestNumber_ = 0, a.realtime_ = null, a.authToken_ = null, a.forceTokenRefresh_ = !1, a.invalidAuthTokenCount_ = 0, a.firstConnection_ = !0, a.lastConnectionAttemptTime_ = null, a.lastConnectionEstablishedTime_ = null, o && !Cn()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms"); return a.scheduleConnect_(0), Bo.getInstance().on("visible", a.onVisible_, a), -1 === t.host.indexOf("fblocal") && jo.getInstance().on("online", a.onOnline_, a), a } return an(h, s), h.prototype.sendRequest = function(t, e, n) { var r = ++this.requestNumber_,
                    i = { r: r, a: t, b: e };
                this.log_(Rn(i)), dn(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n) }, h.prototype.listen = function(t, e, n, r) { var i = t.queryIdentifier(),
                    o = t.path.toString();
                this.log_("Listen called for " + o + " " + i), this.listens_[o] = this.listens_[o] || {}, dn(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), dn(!this.listens_[o][i], "listen() called twice for same path/queryId."); var a = { onComplete: r, hashFn: e, query: t, tag: n };
                this.listens_[o][i] = a, this.connected_ && this.sendListen_(a) }, h.prototype.sendListen_ = function(r) { var i = this,
                    o = r.query,
                    a = o.path.toString(),
                    s = o.queryIdentifier();
                this.log_("Listen on " + a + " for " + s); var t = { p: a };
                r.tag && (t.q = o.queryObject(), t.t = r.tag), t.h = r.hashFn(), this.sendRequest("q", t, function(t) { var e = t.d,
                        n = t.s;
                    h.warnOnListenWarnings_(e, o), (i.listens_[a] && i.listens_[a][s]) === r && (i.log_("listen response", t), "ok" !== n && i.removeListen_(a, s), r.onComplete && r.onComplete(n, e)) }) }, h.warnOnListenWarnings_ = function(t, e) { if (t && "object" == typeof t && Pn(t, "w")) { var n = Mn(t, "w"); if (Array.isArray(n) && ~n.indexOf("no_index")) { var r = '".indexOn": "' + e.getQueryParams().getIndex().toString() + '"',
                            i = e.path.toString();
                        Ir("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.") } } }, h.prototype.refreshAuthToken = function(t) { this.authToken_ = t, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function() {}), this.reduceReconnectDelayIfAdminCredential_(t) }, h.prototype.reduceReconnectDelayIfAdminCredential_ = function(t) { var e;
                (t && 40 === t.length || "object" == typeof(e = On(t).claims) && !0 === e.admin) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4) }, h.prototype.tryAuth = function() { var t, r = this; if (this.connected_ && this.authToken_) { var i = this.authToken_,
                        e = (t = On(i).claims) && "object" == typeof t && t.hasOwnProperty("iat") ? "auth" : "gauth",
                        n = { cred: i };
                    null === this.authOverride_ ? n.noauth = !0 : "object" == typeof this.authOverride_ && (n.authvar = this.authOverride_), this.sendRequest(e, n, function(t) { var e = t.s,
                            n = t.d || "error";
                        r.authToken_ === i && ("ok" === e ? r.invalidAuthTokenCount_ = 0 : r.onAuthRevoked_(e, n)) }) } }, h.prototype.unlisten = function(t, e) { var n = t.path.toString(),
                    r = t.queryIdentifier();
                this.log_("Unlisten called for " + n + " " + r), dn(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, t.queryObject(), e) }, h.prototype.sendUnlisten_ = function(t, e, n, r) { this.log_("Unlisten on " + t + " for " + e); var i = { p: t };
                r && (i.q = n, i.t = r), this.sendRequest("n", i) }, h.prototype.onDisconnectPut = function(t, e, n) { this.connected_ ? this.sendOnDisconnect_("o", t, e, n) : this.onDisconnectRequestQueue_.push({ pathString: t, action: "o", data: e, onComplete: n }) }, h.prototype.onDisconnectMerge = function(t, e, n) { this.connected_ ? this.sendOnDisconnect_("om", t, e, n) : this.onDisconnectRequestQueue_.push({ pathString: t, action: "om", data: e, onComplete: n }) }, h.prototype.onDisconnectCancel = function(t, e) { this.connected_ ? this.sendOnDisconnect_("oc", t, null, e) : this.onDisconnectRequestQueue_.push({ pathString: t, action: "oc", data: null, onComplete: e }) }, h.prototype.sendOnDisconnect_ = function(t, e, n, r) { var i = { p: e, d: n };
                this.log_("onDisconnect " + t, i), this.sendRequest(t, i, function(t) { r && setTimeout(function() { r(t.s, t.d) }, Math.floor(0)) }) }, h.prototype.put = function(t, e, n, r) { this.putInternal("p", t, e, n, r) }, h.prototype.merge = function(t, e, n, r) { this.putInternal("m", t, e, n, r) }, h.prototype.putInternal = function(t, e, n, r, i) { var o = { p: e, d: n };
                void 0 !== i && (o.h = i), this.outstandingPuts_.push({ action: t, request: o, onComplete: r }), this.outstandingPutCount_++; var a = this.outstandingPuts_.length - 1;
                this.connected_ ? this.sendPut_(a) : this.log_("Buffering put: " + e) }, h.prototype.sendPut_ = function(e) { var n = this,
                    r = this.outstandingPuts_[e].action,
                    t = this.outstandingPuts_[e].request,
                    i = this.outstandingPuts_[e].onComplete;
                this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(r, t, function(t) { n.log_(r + " response", t), delete n.outstandingPuts_[e], n.outstandingPutCount_--, 0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []), i && i(t.s, t.d) }) }, h.prototype.reportStats = function(t) { var n = this; if (this.connected_) { var e = { c: t };
                    this.log_("reportStats", e), this.sendRequest("s", e, function(t) { if ("ok" !== t.s) { var e = t.d;
                            n.log_("reportStats", "Error sending stats: " + e) } }) } }, h.prototype.onDataMessage_ = function(t) { if ("r" in t) { this.log_("from server: " + Rn(t)); var e = t.r,
                        n = this.requestCBHash_[e];
                    n && (delete this.requestCBHash_[e], n(t.b)) } else { if ("error" in t) throw "A server-side error has occurred: " + t.error; "a" in t && this.onDataPush_(t.a, t.b) } }, h.prototype.onDataPush_ = function(t, e) { this.log_("handleServerMessage", t, e), "d" === t ? this.onDataUpdate_(e.p, e.d, !1, e.t) : "m" === t ? this.onDataUpdate_(e.p, e.d, !0, e.t) : "c" === t ? this.onListenRevoked_(e.p, e.q) : "ac" === t ? this.onAuthRevoked_(e.s, e.d) : "sd" === t ? this.onSecurityDebugPacket_(e) : Sr("Unrecognized action received from server: " + Rn(t) + "\nAre you using the latest client?") }, h.prototype.onReady_ = function(t, e) { this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(t), this.lastSessionId = e, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0) }, h.prototype.scheduleConnect_ = function(t) { var e = this;
                dn(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function() { e.establishConnectionTimer_ = null, e.establishConnection_() }, Math.floor(t)) }, h.prototype.onVisible_ = function(t) { t && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = t }, h.prototype.onOnline_ = function(t) { t ? (this.log_("Browser went online."), this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close()) }, h.prototype.onRealtimeDisconnect_ = function() { if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) { if (this.visible_) { if (this.lastConnectionEstablishedTime_) { 3e4 < (new Date).getTime() - this.lastConnectionEstablishedTime_ && (this.reconnectDelay_ = 1e3), this.lastConnectionEstablishedTime_ = null } } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime(); var t = (new Date).getTime() - this.lastConnectionAttemptTime_,
                        e = Math.max(0, this.reconnectDelay_ - t);
                    e = Math.random() * e, this.log_("Trying to reconnect in " + e + "ms"), this.scheduleConnect_(e), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_) }
                this.onConnectStatus_(!1) }, h.prototype.establishConnection_ = function() { if (this.shouldReconnect_()) { this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null; var e = this.onDataMessage_.bind(this),
                        n = this.onReady_.bind(this),
                        r = this.onRealtimeDisconnect_.bind(this),
                        i = this.id + ":" + h.nextConnectionId_++,
                        o = this,
                        a = this.lastSessionId,
                        s = !1,
                        u = null,
                        c = function() { u ? u.close() : (s = !0, r()) };
                    this.realtime_ = { close: c, sendRequest: function(t) { dn(u, "sendRequest call when we're not connected not allowed."), u.sendRequest(t) } }; var t = this.forceTokenRefresh_;
                    this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(t).then(function(t) { s ? Er("getToken() completed but was canceled") : (Er("getToken() completed. Creating connection."), o.authToken_ = t && t.accessToken, u = new Yo(i, o.repoInfo_, e, n, r, function(t) { Ir(t + " (" + o.repoInfo_.toString() + ")"), o.interrupt("server_kill") }, a)) }).then(null, function(t) { o.log_("Failed to get token: " + t), s || c() }) } }, h.prototype.interrupt = function(t) { Er("Interrupting connection for reason: " + t), this.interruptReasons_[t] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_()) }, h.prototype.resume = function(t) { Er("Resuming connection for reason: " + t), delete this.interruptReasons_[t], Fn(this.interruptReasons_) && (this.reconnectDelay_ = 1e3, this.realtime_ || this.scheduleConnect_(0)) }, h.prototype.handleTimestamp_ = function(t) { var e = t - (new Date).getTime();
                this.onServerInfoUpdate_({ serverTimeOffset: e }) }, h.prototype.cancelSentTransactions_ = function() { for (var t = 0; t < this.outstandingPuts_.length; t++) { var e = this.outstandingPuts_[t];
                    e && "h" in e.request && e.queued && (e.onComplete && e.onComplete("disconnect"), delete this.outstandingPuts_[t], this.outstandingPutCount_--) }
                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []) }, h.prototype.onListenRevoked_ = function(t, e) { var n;
                n = e ? e.map(function(t) { return Pr(t) }).join("$") : "default"; var r = this.removeListen_(t, n);
                r && r.onComplete && r.onComplete("permission_denied") }, h.prototype.removeListen_ = function(t, e) { var n, r = new Br(t).toString(); return void 0 !== this.listens_[r] ? (n = this.listens_[r][e], delete this.listens_[r][e], 0 === Un(this.listens_[r]) && delete this.listens_[r]) : n = void 0, n }, h.prototype.onAuthRevoked_ = function(t, e) { Er("Auth token revoked: " + t + "/" + e), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== t && "permission_denied" !== t || (this.invalidAuthTokenCount_++, 3 <= this.invalidAuthTokenCount_ && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken())) }, h.prototype.onSecurityDebugPacket_ = function(t) { this.securityDebugCallback_ ? this.securityDebugCallback_(t) : "msg" in t && console.log("FIREBASE: " + t.msg.replace("\n", "\nFIREBASE: ")) }, h.prototype.restoreState_ = function() { var n = this;
                this.tryAuth(), Ln(this.listens_, function(t, e) { Ln(e, function(t, e) { n.sendListen_(e) }) }); for (var t = 0; t < this.outstandingPuts_.length; t++) this.outstandingPuts_[t] && this.sendPut_(t); for (; this.onDisconnectRequestQueue_.length;) { var e = this.onDisconnectRequestQueue_.shift();
                    this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete) } }, h.prototype.sendConnectStats_ = function() { var t = {};
                t["sdk.js." + Mh.SDK_VERSION.replace(/\./g, "-")] = 1, Tn() ? t["framework.cordova"] = 1 : Sn() && (t["framework.reactnative"] = 1), this.reportStats(t) }, h.prototype.shouldReconnect_ = function() { var t = jo.getInstance().currentlyOnline(); return Fn(this.interruptReasons_) && t }, h.nextPersistentConnectionId_ = 0, h.nextConnectionId_ = 0, h }(Xo),
        $o = function(i) {
            function c(t, e, n) { var r = i.call(this) || this; return r.repoInfo_ = t, r.onDataUpdate_ = e, r.authTokenProvider_ = n, r.log_ = Tr("p:rest:"), r.listens_ = {}, r } return an(c, i), c.prototype.reportStats = function(t) { throw new Error("Method not implemented.") }, c.getListenId_ = function(t, e) { return void 0 !== e ? "tag$" + e : (dn(t.getQueryParams().isDefault(), "should have a tag if it's not a default query."), t.path.toString()) }, c.prototype.listen = function(t, e, r, i) { var o = this,
                    a = t.path.toString();
                this.log_("Listen called for " + a + " " + t.queryIdentifier()); var s = c.getListenId_(t, r),
                    u = {};
                this.listens_[s] = u; var n = t.getQueryParams().toRestQueryStringParameters();
                this.restRequest_(a + ".json", n, function(t, e) { var n = e;
                    (404 === t && (t = n = null), null === t && o.onDataUpdate_(a, n, !1, r), Mn(o.listens_, s) === u) && i(t ? 401 == t ? "permission_denied" : "rest_error:" + t : "ok", null) }) }, c.prototype.unlisten = function(t, e) { var n = c.getListenId_(t, e);
                delete this.listens_[n] }, c.prototype.refreshAuthToken = function(t) {}, c.prototype.restRequest_ = function(o, a, s) { var u = this;
                void 0 === a && (a = {}), a.format = "export", this.authTokenProvider_.getToken(!1).then(function(t) { var e = t && t.accessToken;
                    e && (a.auth = e); var n, r = (u.repoInfo_.secure ? "https://" : "http://") + u.repoInfo_.host + o + "?ns=" + u.repoInfo_.namespace + (n = [], Ln(a, function(e, t) { Array.isArray(t) ? t.forEach(function(t) { n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t)) }) : n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t)) }), n.length ? "&" + n.join("&") : "");
                    u.log_("Sending REST request for " + r); var i = new XMLHttpRequest;
                    i.onreadystatechange = function() { if (s && 4 === i.readyState) { u.log_("REST Response for " + r + " received. status:", i.status, "response:", i.responseText); var t = null; if (200 <= i.status && i.status < 300) { try { t = kn(i.responseText) } catch (t) { Ir("Failed to parse JSON response for " + r + ": " + i.responseText) }
                                s(null, t) } else 401 !== i.status && 404 !== i.status && Ir("Got unsuccessful REST response for " + r + " Status: " + i.status), s(i.status);
                            s = null } }, i.open("GET", r, !0), i.send() }) }, c }(Xo),
        Zo = "repo_interrupt",
        ta = function() {
            function t(t, e, n) { var a = this;
                this.repoInfo_ = t, this.app = n, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new Uo, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = new io, this.persistentConnection_ = null; var r = new Po(n); if (this.stats_ = Lo.getCollection(t), e || 0 <= ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) this.server_ = new $o(this.repoInfo_, this.onDataUpdate_.bind(this), r), setTimeout(this.onConnectStatus_.bind(this, !0), 0);
                else { var i = n.options.databaseAuthVariableOverride; if (null != i) { if ("object" != typeof i) throw new Error("Only objects are supported for option databaseAuthVariableOverride"); try { Rn(i) } catch (t) { throw new Error("Invalid authOverride provided: " + t) } }
                    this.persistentConnection_ = new Jo(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), r, i), this.server_ = this.persistentConnection_ }
                r.addTokenChangeListener(function(t) { a.server_.refreshAuthToken(t) }), this.statsReporter_ = Lo.getOrCreateReporter(t, function() { return new Fo(a.stats_, a.server_) }), this.transactions_init_(), this.infoData_ = new Oo, this.infoSyncTree_ = new Ro({ startListening: function(t, e, n, r) { var i = [],
                            o = a.infoData_.getNode(t.path); return o.isEmpty() || (i = a.infoSyncTree_.applyServerOverwrite(t.path, o), setTimeout(function() { r("ok") }, 0)), i }, stopListening: function() {} }), this.updateInfo_("connected", !1), this.serverSyncTree_ = new Ro({ startListening: function(r, t, e, i) { return a.server_.listen(r, e, t, function(t, e) { var n = i(t, e);
                            a.eventQueue_.raiseEventsForChangedPath(r.path, n) }), [] }, stopListening: function(t, e) { a.server_.unlisten(t, e) } }) } return t.prototype.toString = function() { return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host }, t.prototype.name = function() { return this.repoInfo_.namespace }, t.prototype.serverTime = function() { var t = this.infoData_.getNode(new Br(".info/serverTimeOffset")).val() || 0; return (new Date).getTime() + t }, t.prototype.generateServerValues = function() { return (t = (t = { timestamp: this.serverTime() }) || {}).timestamp = t.timestamp || (new Date).getTime(), t; var t }, t.prototype.onDataUpdate_ = function(t, e, n, r) { this.dataUpdateCount++; var i = new Br(t);
                e = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(t, e) : e; var o = []; if (r)
                    if (n) { var a = qn(e, function(t) { return Qi(t) });
                        o = this.serverSyncTree_.applyTaggedQueryMerge(i, a, r) } else { var s = Qi(e);
                        o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, s, r) }
                else if (n) { var u = qn(e, function(t) { return Qi(t) });
                    o = this.serverSyncTree_.applyServerMerge(i, u) } else { var c = Qi(e);
                    o = this.serverSyncTree_.applyServerOverwrite(i, c) } var h = i;
                0 < o.length && (h = this.rerunTransactions_(i)), this.eventQueue_.raiseEventsForChangedPath(h, o) }, t.prototype.interceptServerData_ = function(t) { this.interceptServerDataCallback_ = t }, t.prototype.onConnectStatus_ = function(t) { this.updateInfo_("connected", t), !1 === t && this.runOnDisconnectEvents_() }, t.prototype.onServerInfoUpdate_ = function(t) { var n = this;
                Lr(t, function(t, e) { n.updateInfo_(e, t) }) }, t.prototype.updateInfo_ = function(t, e) { var n = new Br("/.info/" + t),
                    r = Qi(e);
                this.infoData_.updateSnapshot(n, r); var i = this.infoSyncTree_.applyServerOverwrite(n, r);
                this.eventQueue_.raiseEventsForChangedPath(n, i) }, t.prototype.getNextWriteId_ = function() { return this.nextWriteId_++ }, t.prototype.setWithPriority = function(i, t, e, o) { var a = this;
                this.log_("set", { path: i.toString(), value: t, priority: e }); var n = this.generateServerValues(),
                    r = Qi(t, e),
                    s = ao(r, n),
                    u = this.getNextWriteId_(),
                    c = this.serverSyncTree_.applyUserOverwrite(i, s, u, !0);
                this.eventQueue_.queueEvents(c), this.server_.put(i.toString(), r.val(!0), function(t, e) { var n = "ok" === t;
                    n || Ir("set at " + i + " failed: " + t); var r = a.serverSyncTree_.ackUserWrite(u, !n);
                    a.eventQueue_.raiseEventsForChangedPath(i, r), a.callOnCompleteCallback(o, t, e) }); var h = this.abortTransactions_(i);
                this.rerunTransactions_(h), this.eventQueue_.raiseEventsForChangedPath(h, []) }, t.prototype.update = function(o, t, a) { var s = this;
                this.log_("update", { path: o.toString(), value: t }); var r = !0,
                    i = this.generateServerValues(),
                    u = {}; if (Ln(t, function(t, e) { r = !1; var n = Qi(e);
                        u[t] = ao(n, i) }), r) Er("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(a, "ok");
                else { var c = this.getNextWriteId_(),
                        e = this.serverSyncTree_.applyUserMerge(o, u, c);
                    this.eventQueue_.queueEvents(e), this.server_.merge(o.toString(), t, function(t, e) { var n = "ok" === t;
                        n || Ir("update at " + o + " failed: " + t); var r = s.serverSyncTree_.ackUserWrite(c, !n),
                            i = 0 < r.length ? s.rerunTransactions_(o) : o;
                        s.eventQueue_.raiseEventsForChangedPath(i, r), s.callOnCompleteCallback(a, t, e) }), Ln(t, function(t) { var e = s.abortTransactions_(o.child(t));
                        s.rerunTransactions_(e) }), this.eventQueue_.raiseEventsForChangedPath(o, []) } }, t.prototype.runOnDisconnectEvents_ = function() { var r = this;
                this.log_("onDisconnectEvents"); var t, n, i, e = this.generateServerValues(),
                    o = (t = this.onDisconnect_, n = e, i = new io, t.forEachTree(new Br(""), function(t, e) { i.remember(t, ao(e, n)) }), i),
                    a = [];
                o.forEachTree(Br.Empty, function(t, e) { a = a.concat(r.serverSyncTree_.applyServerOverwrite(t, e)); var n = r.abortTransactions_(t);
                    r.rerunTransactions_(n) }), this.onDisconnect_ = new io, this.eventQueue_.raiseEventsForChangedPath(Br.Empty, a) }, t.prototype.onDisconnectCancel = function(n, r) { var i = this;
                this.server_.onDisconnectCancel(n.toString(), function(t, e) { "ok" === t && i.onDisconnect_.forget(n), i.callOnCompleteCallback(r, t, e) }) }, t.prototype.onDisconnectSet = function(n, t, r) { var i = this,
                    o = Qi(t);
                this.server_.onDisconnectPut(n.toString(), o.val(!0), function(t, e) { "ok" === t && i.onDisconnect_.remember(n, o), i.callOnCompleteCallback(r, t, e) }) }, t.prototype.onDisconnectSetWithPriority = function(n, t, e, r) { var i = this,
                    o = Qi(t, e);
                this.server_.onDisconnectPut(n.toString(), o.val(!0), function(t, e) { "ok" === t && i.onDisconnect_.remember(n, o), i.callOnCompleteCallback(r, t, e) }) }, t.prototype.onDisconnectUpdate = function(r, n, i) { var o = this; if (Fn(n)) return Er("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(i, "ok");
                this.server_.onDisconnectMerge(r.toString(), n, function(t, e) { "ok" === t && Ln(n, function(t, e) { var n = Qi(e);
                        o.onDisconnect_.remember(r.child(t), n) }), o.callOnCompleteCallback(i, t, e) }) }, t.prototype.addEventCallbackForQuery = function(t, e) { var n;
                n = ".info" === t.path.getFront() ? this.infoSyncTree_.addEventRegistration(t, e) : this.serverSyncTree_.addEventRegistration(t, e), this.eventQueue_.raiseEventsAtPath(t.path, n) }, t.prototype.removeEventCallbackForQuery = function(t, e) { var n;
                n = ".info" === t.path.getFront() ? this.infoSyncTree_.removeEventRegistration(t, e) : this.serverSyncTree_.removeEventRegistration(t, e), this.eventQueue_.raiseEventsAtPath(t.path, n) }, t.prototype.interrupt = function() { this.persistentConnection_ && this.persistentConnection_.interrupt(Zo) }, t.prototype.resume = function() { this.persistentConnection_ && this.persistentConnection_.resume(Zo) }, t.prototype.stats = function(t) { if (void 0 === t && (t = !1), "undefined" != typeof console) { var e;
                    e = t ? (this.statsListener_ || (this.statsListener_ = new xo(this.stats_)), this.statsListener_.get()) : this.stats_.get(); var r = Object.keys(e).reduce(function(t, e) { return Math.max(e.length, t) }, 0);
                    Ln(e, function(t, e) { for (var n = t.length; n < r + 2; n++) t += " ";
                        console.log(t + e) }) } }, t.prototype.statsIncrementCounter = function(t) { this.stats_.incrementCounter(t), this.statsReporter_.includeStat(t) }, t.prototype.log_ = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = "";
                this.persistentConnection_ && (n = this.persistentConnection_.id + ":"), Er.apply(void 0, [n].concat(t)) }, t.prototype.callOnCompleteCallback = function(r, i, o) { r && qr(function() { if ("ok" == i) r(null);
                    else { var t = (i || "error").toUpperCase(),
                            e = t;
                        o && (e += ": " + o); var n = new Error(e);
                        n.code = t, r(n) } }) }, Object.defineProperty(t.prototype, "database", { get: function() { return this.__database || (this.__database = new fa(this)) }, enumerable: !0, configurable: !0 }), t }(),
        ea = function() {
            function e(t) { this.indexedFilter_ = new bo(t.getIndex()), this.index_ = t.getIndex(), this.startPost_ = e.getStartPost_(t), this.endPost_ = e.getEndPost_(t) } return e.prototype.getStartPost = function() { return this.startPost_ }, e.prototype.getEndPost = function() { return this.endPost_ }, e.prototype.matches = function(t) { return this.index_.compare(this.getStartPost(), t) <= 0 && this.index_.compare(t, this.getEndPost()) <= 0 }, e.prototype.updateChild = function(t, e, n, r, i, o) { return this.matches(new vi(e, n)) || (n = ji.EMPTY_NODE), this.indexedFilter_.updateChild(t, e, n, r, i, o) }, e.prototype.updateFullNode = function(t, e, n) { e.isLeafNode() && (e = ji.EMPTY_NODE); var r = e.withIndex(this.index_);
                r = r.updatePriority(ji.EMPTY_NODE); var i = this; return e.forEachChild(ki, function(t, e) { i.matches(new vi(t, e)) || (r = r.updateImmediateChild(t, ji.EMPTY_NODE)) }), this.indexedFilter_.updateFullNode(t, r, n) }, e.prototype.updatePriority = function(t, e) { return t }, e.prototype.filtersNodes = function() { return !0 }, e.prototype.getIndexedFilter = function() { return this.indexedFilter_ }, e.prototype.getIndex = function() { return this.index_ }, e.getStartPost_ = function(t) { if (t.hasStart()) { var e = t.getIndexStartName(); return t.getIndex().makePost(t.getIndexStartValue(), e) } return t.getIndex().minPost() }, e.getEndPost_ = function(t) { if (t.hasEnd()) { var e = t.getIndexEndName(); return t.getIndex().makePost(t.getIndexEndValue(), e) } return t.getIndex().maxPost() }, e }(),
        na = function() {
            function t(t) { this.rangedFilter_ = new ea(t), this.index_ = t.getIndex(), this.limit_ = t.getLimit(), this.reverse_ = !t.isViewFromLeft() } return t.prototype.updateChild = function(t, e, n, r, i, o) { return this.rangedFilter_.matches(new vi(e, n)) || (n = ji.EMPTY_NODE), t.getImmediateChild(e).equals(n) ? t : t.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(t, e, n, r, i, o) : this.fullLimitUpdateChild_(t, e, n, i, o) }, t.prototype.updateFullNode = function(t, e, n) { var r; if (e.isLeafNode() || e.isEmpty()) r = ji.EMPTY_NODE.withIndex(this.index_);
                else if (2 * this.limit_ < e.numChildren() && e.isIndexed(this.index_)) { r = ji.EMPTY_NODE.withIndex(this.index_); var i = void 0;
                    i = this.reverse_ ? e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : e.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_); for (var o = 0; i.hasNext() && o < this.limit_;) { var a = i.getNext(); if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), a) <= 0 : this.index_.compare(a, this.rangedFilter_.getEndPost()) <= 0)) break;
                        r = r.updateImmediateChild(a.name, a.node), o++ } } else { r = (r = e.withIndex(this.index_)).updatePriority(ji.EMPTY_NODE); var s = void 0,
                        u = void 0,
                        c = void 0;
                    i = void 0; if (this.reverse_) { i = r.getReverseIterator(this.index_), s = this.rangedFilter_.getEndPost(), u = this.rangedFilter_.getStartPost(); var h = this.index_.getCompare();
                        c = function(t, e) { return h(e, t) } } else i = r.getIterator(this.index_), s = this.rangedFilter_.getStartPost(), u = this.rangedFilter_.getEndPost(), c = this.index_.getCompare();
                    o = 0; for (var l = !1; i.hasNext();) { a = i.getNext();!l && c(s, a) <= 0 && (l = !0), l && o < this.limit_ && c(a, u) <= 0 ? o++ : r = r.updateImmediateChild(a.name, ji.EMPTY_NODE) } } return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n) }, t.prototype.updatePriority = function(t, e) { return t }, t.prototype.filtersNodes = function() { return !0 }, t.prototype.getIndexedFilter = function() { return this.rangedFilter_.getIndexedFilter() }, t.prototype.getIndex = function() { return this.index_ }, t.prototype.fullLimitUpdateChild_ = function(t, e, n, r, i) { var o; if (this.reverse_) { var a = this.index_.getCompare();
                    o = function(t, e) { return a(e, t) } } else o = this.index_.getCompare(); var s = t;
                dn(s.numChildren() == this.limit_, ""); var u = new vi(e, n),
                    c = this.reverse_ ? s.getFirstChild(this.index_) : s.getLastChild(this.index_),
                    h = this.rangedFilter_.matches(u); if (s.hasChild(e)) { for (var l = s.getImmediateChild(e), f = r.getChildAfterChild(this.index_, c, this.reverse_); null != f && (f.name == e || s.hasChild(f.name));) f = r.getChildAfterChild(this.index_, f, this.reverse_); var p = null == f ? 1 : o(f, u); if (h && !n.isEmpty() && 0 <= p) return null != i && i.trackChildChange(vo.childChangedChange(e, n, l)), s.updateImmediateChild(e, n);
                    null != i && i.trackChildChange(vo.childRemovedChange(e, l)); var d = s.updateImmediateChild(e, ji.EMPTY_NODE); return null != f && this.rangedFilter_.matches(f) ? (null != i && i.trackChildChange(vo.childAddedChange(f.name, f.node)), d.updateImmediateChild(f.name, f.node)) : d } return n.isEmpty() ? t : h && 0 <= o(c, u) ? (null != i && (i.trackChildChange(vo.childRemovedChange(c.name, c.node)), i.trackChildChange(vo.childAddedChange(e, n))), s.updateImmediateChild(e, n).updateImmediateChild(c.name, ji.EMPTY_NODE)) : t }, t }(),
        ra = function() {
            function r() { this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = ki } return r.prototype.hasStart = function() { return this.startSet_ }, r.prototype.isViewFromLeft = function() { return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT }, r.prototype.getIndexStartValue = function() { return dn(this.startSet_, "Only valid if start has been set"), this.indexStartValue_ }, r.prototype.getIndexStartName = function() { return dn(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Dr }, r.prototype.hasEnd = function() { return this.endSet_ }, r.prototype.getIndexEndValue = function() { return dn(this.endSet_, "Only valid if end has been set"), this.indexEndValue_ }, r.prototype.getIndexEndName = function() { return dn(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : Ar }, r.prototype.hasLimit = function() { return this.limitSet_ }, r.prototype.hasAnchoredLimit = function() { return this.limitSet_ && "" !== this.viewFrom_ }, r.prototype.getLimit = function() { return dn(this.limitSet_, "Only valid if limit has been set"), this.limit_ }, r.prototype.getIndex = function() { return this.index_ }, r.prototype.copy_ = function() { var t = new r; return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_, t.startSet_ = this.startSet_, t.indexStartValue_ = this.indexStartValue_, t.startNameSet_ = this.startNameSet_, t.indexStartName_ = this.indexStartName_, t.endSet_ = this.endSet_, t.indexEndValue_ = this.indexEndValue_, t.endNameSet_ = this.endNameSet_, t.indexEndName_ = this.indexEndName_, t.index_ = this.index_, t.viewFrom_ = this.viewFrom_, t }, r.prototype.limit = function(t) { var e = this.copy_(); return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = "", e }, r.prototype.limitToFirst = function(t) { var e = this.copy_(); return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT, e }, r.prototype.limitToLast = function(t) { var e = this.copy_(); return e.limitSet_ = !0, e.limit_ = t, e.viewFrom_ = r.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT, e }, r.prototype.startAt = function(t, e) { var n = this.copy_(); return n.startSet_ = !0, void 0 === t && (t = null), n.indexStartValue_ = t, n.indexStartName_ = null != e ? (n.startNameSet_ = !0, e) : (n.startNameSet_ = !1, ""), n }, r.prototype.endAt = function(t, e) { var n = this.copy_(); return n.endSet_ = !0, void 0 === t && (t = null), n.indexEndValue_ = t, n.indexEndName_ = void 0 !== e ? (n.endNameSet_ = !0, e) : (n.endNameSet_ = !1, ""), n }, r.prototype.orderBy = function(t) { var e = this.copy_(); return e.index_ = t, e }, r.prototype.getQueryObject = function() { var t = r.WIRE_PROTOCOL_CONSTANTS_,
                    e = {}; if (this.startSet_ && (e[t.INDEX_START_VALUE] = this.indexStartValue_, this.startNameSet_ && (e[t.INDEX_START_NAME] = this.indexStartName_)), this.endSet_ && (e[t.INDEX_END_VALUE] = this.indexEndValue_, this.endNameSet_ && (e[t.INDEX_END_NAME] = this.indexEndName_)), this.limitSet_) { e[t.LIMIT] = this.limit_; var n = this.viewFrom_; "" === n && (n = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), e[t.VIEW_FROM] = n } return this.index_ !== ki && (e[t.INDEX] = this.index_.toString()), e }, r.prototype.loadsAllData = function() { return !(this.startSet_ || this.endSet_ || this.limitSet_) }, r.prototype.isDefault = function() { return this.loadsAllData() && this.index_ == ki }, r.prototype.getNodeFilter = function() { return this.loadsAllData() ? new bo(this.getIndex()) : this.hasLimit() ? new na(this) : new ea(this) }, r.prototype.toRestQueryStringParameters = function() { var t, e = r.REST_QUERY_CONSTANTS_,
                    n = {}; return this.isDefault() || (t = this.index_ === ki ? e.PRIORITY_INDEX : this.index_ === Yi ? e.VALUE_INDEX : this.index_ === wi ? e.KEY_INDEX : (dn(this.index_ instanceof Xi, "Unrecognized index type!"), this.index_.toString()), n[e.ORDER_BY] = Rn(t), this.startSet_ && (n[e.START_AT] = Rn(this.indexStartValue_), this.startNameSet_ && (n[e.START_AT] += "," + Rn(this.indexStartName_))), this.endSet_ && (n[e.END_AT] = Rn(this.indexEndValue_), this.endNameSet_ && (n[e.END_AT] += "," + Rn(this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ? n[e.LIMIT_TO_FIRST] = this.limit_ : n[e.LIMIT_TO_LAST] = this.limit_)), n }, r.WIRE_PROTOCOL_CONSTANTS_ = { INDEX_START_VALUE: "sp", INDEX_START_NAME: "sn", INDEX_END_VALUE: "ep", INDEX_END_NAME: "en", LIMIT: "l", VIEW_FROM: "vf", VIEW_FROM_LEFT: "l", VIEW_FROM_RIGHT: "r", INDEX: "i" }, r.REST_QUERY_CONSTANTS_ = { ORDER_BY: "orderBy", PRIORITY_INDEX: "$priority", VALUE_INDEX: "$value", KEY_INDEX: "$key", START_AT: "startAt", END_AT: "endAt", LIMIT_TO_FIRST: "limitToFirst", LIMIT_TO_LAST: "limitToLast" }, r.DEFAULT = new r, r }(),
        ia = function(n) {
            function o(t, e) { if (!(t instanceof ta)) throw new Error("new Reference() no longer supported - use app.database()."); return n.call(this, t, e, ra.DEFAULT, !1) || this } return an(o, n), o.prototype.getKey = function() { return Hn("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack() }, o.prototype.child = function(t) { var e, n, r, i; return Hn("Reference.child", 1, 1, arguments.length), "number" == typeof t ? t = String(t) : t instanceof Br || (null === this.path.getFront() ? (e = "Reference.child", i = !(n = 1), (r = t) && (r = r.replace(/^\/*\.info(\/|$)/, "/")), fi(e, n, r, i)) : fi("Reference.child", 1, t, !1)), new o(this.repo, this.path.child(t)) }, o.prototype.getParent = function() { Hn("Reference.parent", 0, 0, arguments.length); var t = this.path.parent(); return null === t ? null : new o(this.repo, t) }, o.prototype.getRoot = function() { Hn("Reference.root", 0, 0, arguments.length); for (var t = this; null !== t.getParent();) t = t.getParent(); return t }, o.prototype.databaseProp = function() { return this.repo.database }, o.prototype.set = function(t, e) { Hn("Reference.set", 1, 2, arguments.length), pi("Reference.set", this.path), ai("Reference.set", 1, t, this.path, !1), Gn("Reference.set", 2, e, !0); var n = new En; return this.repo.setWithPriority(this.path, t, null, n.wrapCallback(e)), n.promise }, o.prototype.update = function(t, e) { if (Hn("Reference.update", 1, 2, arguments.length), pi("Reference.update", this.path), Array.isArray(t)) { for (var n = {}, r = 0; r < t.length; ++r) n["" + r] = t[r];
                    t = n, Ir("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.") }
                ui("Reference.update", 1, t, this.path, !1), Gn("Reference.update", 2, e, !0); var i = new En; return this.repo.update(this.path, t, i.wrapCallback(e)), i.promise }, o.prototype.setWithPriority = function(t, e, n) { if (Hn("Reference.setWithPriority", 2, 3, arguments.length), pi("Reference.setWithPriority", this.path), ai("Reference.setWithPriority", 1, t, this.path, !1), ci("Reference.setWithPriority", 2, e, !1), Gn("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object."; var r = new En; return this.repo.setWithPriority(this.path, t, e, r.wrapCallback(n)), r.promise }, o.prototype.remove = function(t) { return Hn("Reference.remove", 0, 1, arguments.length), pi("Reference.remove", this.path), Gn("Reference.remove", 1, t, !0), this.set(null, t) }, o.prototype.transaction = function(t, r, e) { if (Hn("Reference.transaction", 1, 3, arguments.length), pi("Reference.transaction", this.path), Gn("Reference.transaction", 1, t, !1), Gn("Reference.transaction", 2, r, !0), function(t, e, n, r) { if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(zn(t, e, r) + "must be a boolean.") }("Reference.transaction", 3, e, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
                void 0 === e && (e = !0); var i = new En; "function" == typeof r && i.promise.catch(function() {}); return this.repo.startTransaction(this.path, t, function(t, e, n) { t ? i.reject(t) : i.resolve(new mi(e, n)), "function" == typeof r && r(t, e, n) }, e), i.promise }, o.prototype.setPriority = function(t, e) { Hn("Reference.setPriority", 1, 2, arguments.length), pi("Reference.setPriority", this.path), ci("Reference.setPriority", 1, t, !1), Gn("Reference.setPriority", 2, e, !0); var n = new En; return this.repo.setWithPriority(this.path.child(".priority"), t, null, n.wrapCallback(e)), n.promise }, o.prototype.push = function(t, e) { Hn("Reference.push", 0, 2, arguments.length), pi("Reference.push", this.path), ai("Reference.push", 1, t, this.path, !0), Gn("Reference.push", 2, e, !0); var n, r = this.repo.serverTime(),
                    i = gi(r),
                    o = this.child(i),
                    a = this.child(i); return n = null != t ? o.set(t, e).then(function() { return a }) : Promise.resolve(a), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof e && n.catch(function() {}), o }, o.prototype.onDisconnect = function() { return pi("Reference.onDisconnect", this.path), new yi(this.repo, this.path) }, Object.defineProperty(o.prototype, "database", { get: function() { return this.databaseProp() }, enumerable: !0, configurable: !0 }), Object.defineProperty(o.prototype, "key", { get: function() { return this.getKey() }, enumerable: !0, configurable: !0 }), Object.defineProperty(o.prototype, "parent", { get: function() { return this.getParent() }, enumerable: !0, configurable: !0 }), Object.defineProperty(o.prototype, "root", { get: function() { return this.getRoot() }, enumerable: !0, configurable: !0 }), o }(no);
    no.__referenceConstructor = ia, No.__referenceConstructor = ia; var oa, aa, sa = function() { this.children = {}, this.childCount = 0, this.value = null },
        ua = function() {
            function i(t, e, n) { void 0 === t && (t = ""), void 0 === e && (e = null), void 0 === n && (n = new sa), this.name_ = t, this.parent_ = e, this.node_ = n } return i.prototype.subTree = function(t) { for (var e, n = t instanceof Br ? t : new Br(t), r = this; null !== (e = n.getFront());) { r = new i(e, r, Mn(r.node_.children, e) || new sa), n = n.popFront() } return r }, i.prototype.getValue = function() { return this.node_.value }, i.prototype.setValue = function(t) { dn(void 0 !== t, "Cannot set value to undefined"), this.node_.value = t, this.updateParents_() }, i.prototype.clear = function() { this.node_.value = null, this.node_.children = {}, this.node_.childCount = 0, this.updateParents_() }, i.prototype.hasChildren = function() { return 0 < this.node_.childCount }, i.prototype.isEmpty = function() { return null === this.getValue() && !this.hasChildren() }, i.prototype.forEachChild = function(n) { var r = this;
                Ln(this.node_.children, function(t, e) { n(new i(t, r, e)) }) }, i.prototype.forEachDescendant = function(e, t, n) { t && !n && e(this), this.forEachChild(function(t) { t.forEachDescendant(e, !0, n) }), t && n && e(this) }, i.prototype.forEachAncestor = function(t, e) { for (var n = e ? this : this.parent(); null !== n;) { if (t(n)) return !0;
                    n = n.parent() } return !1 }, i.prototype.forEachImmediateDescendantWithValue = function(e) { this.forEachChild(function(t) { null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e) }) }, i.prototype.path = function() { return new Br(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_) }, i.prototype.name = function() { return this.name_ }, i.prototype.parent = function() { return this.parent_ }, i.prototype.updateParents_ = function() { null !== this.parent_ && this.parent_.updateChild_(this.name_, this) }, i.prototype.updateChild_ = function(t, e) { var n = e.isEmpty(),
                    r = Pn(this.node_.children, t);
                n && r ? (delete this.node_.children[t], this.node_.childCount--, this.updateParents_()) : n || r || (this.node_.children[t] = e.node_, this.node_.childCount++, this.updateParents_()) }, i }();
    (aa = oa || (oa = {}))[aa.RUN = 0] = "RUN", aa[aa.SENT = 1] = "SENT", aa[aa.COMPLETED = 2] = "COMPLETED", aa[aa.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", aa[aa.NEEDS_ABORT = 4] = "NEEDS_ABORT", ta.MAX_TRANSACTION_RETRIES_ = 25, ta.prototype.transactions_init_ = function() { this.transactionQueueTree_ = new ua }, ta.prototype.startTransaction = function(t, e, n, r) { this.log_("transaction on " + t); var i = function() {},
            o = new ia(this, t);
        o.on("value", i); var a = { path: t, update: e, onComplete: n, status: null, order: mr(), applyLocally: r, retryCount: 0, unwatcher: function() { o.off("value", i) }, abortReason: null, currentWriteId: null, currentInputSnapshot: null, currentOutputSnapshotRaw: null, currentOutputSnapshotResolved: null },
            s = this.getLatestState_(t);
        a.currentInputSnapshot = s; var u = a.update(s.val()); if (void 0 === u) { if (a.unwatcher(), a.currentOutputSnapshotRaw = null, a.currentOutputSnapshotResolved = null, a.onComplete) { var c = new Ji(a.currentInputSnapshot, new ia(this, a.path), ki);
                a.onComplete(null, !1, c) } } else { si("transaction failed: Data returned ", u, a.path), a.status = oa.RUN; var h = this.transactionQueueTree_.subTree(t),
                l = h.getValue() || [];
            l.push(a), h.setValue(l); var f = void 0; if ("object" == typeof u && null !== u && Pn(u, ".priority")) f = Mn(u, ".priority"), dn(oi(f), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
            else f = (this.serverSyncTree_.calcCompleteEventCache(t) || ji.EMPTY_NODE).getPriority().val();
            f = f; var p = this.generateServerValues(),
                d = Qi(u, f),
                y = ao(d, p);
            a.currentOutputSnapshotRaw = d, a.currentOutputSnapshotResolved = y, a.currentWriteId = this.getNextWriteId_(); var m = this.serverSyncTree_.applyUserOverwrite(t, y, a.currentWriteId, a.applyLocally);
            this.eventQueue_.raiseEventsForChangedPath(t, m), this.sendReadyTransactions_() } }, ta.prototype.getLatestState_ = function(t, e) { return this.serverSyncTree_.calcCompleteEventCache(t, e) || ji.EMPTY_NODE }, ta.prototype.sendReadyTransactions_ = function(t) { var e = this; if (void 0 === t && (t = this.transactionQueueTree_), t || this.pruneCompletedTransactionsBelowNode_(t), null !== t.getValue()) { var n = this.buildTransactionQueue_(t);
            dn(0 < n.length, "Sending zero length transaction queue"), n.every(function(t) { return t.status === oa.RUN }) && this.sendTransactionQueue_(t.path(), n) } else t.hasChildren() && t.forEachChild(function(t) { e.sendReadyTransactions_(t) }) }, ta.prototype.sendTransactionQueue_ = function(s, u) { for (var c = this, t = u.map(function(t) { return t.currentWriteId }), e = this.getLatestState_(s, t), n = e, r = e.hash(), i = 0; i < u.length; i++) { var o = u[i];
            dn(o.status === oa.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), o.status = oa.SENT, o.retryCount++; var a = Br.relativePath(s, o.path);
            n = n.updateChild(a, o.currentOutputSnapshotRaw) } var h = n.val(!0),
            l = s;
        this.server_.put(l.toString(), h, function(t) { c.log_("transaction put response", { path: l.toString(), status: t }); var e = []; if ("ok" === t) { for (var n = [], r = 0; r < u.length; r++) { if (u[r].status = oa.COMPLETED, e = e.concat(c.serverSyncTree_.ackUserWrite(u[r].currentWriteId)), u[r].onComplete) { var i = u[r].currentOutputSnapshotResolved,
                            o = new ia(c, u[r].path),
                            a = new Ji(i, o, ki);
                        n.push(u[r].onComplete.bind(null, null, !0, a)) }
                    u[r].unwatcher() }
                c.pruneCompletedTransactionsBelowNode_(c.transactionQueueTree_.subTree(s)), c.sendReadyTransactions_(), c.eventQueue_.raiseEventsForChangedPath(s, e); for (r = 0; r < n.length; r++) qr(n[r]) } else { if ("datastale" === t)
                    for (r = 0; r < u.length; r++) u[r].status === oa.SENT_NEEDS_ABORT ? u[r].status = oa.NEEDS_ABORT : u[r].status = oa.RUN;
                else { Ir("transaction at " + l.toString() + " failed: " + t); for (r = 0; r < u.length; r++) u[r].status = oa.NEEDS_ABORT, u[r].abortReason = t }
                c.rerunTransactions_(s) } }, r) }, ta.prototype.rerunTransactions_ = function(t) { var e = this.getAncestorTransactionNode_(t),
            n = e.path(),
            r = this.buildTransactionQueue_(e); return this.rerunTransactionQueue_(r, n), n }, ta.prototype.rerunTransactionQueue_ = function(t, e) { if (0 !== t.length) { for (var n, r = [], i = [], o = t.filter(function(t) { return t.status === oa.RUN }).map(function(t) { return t.currentWriteId }), a = 0; a < t.length; a++) { var s = t[a],
                    u = Br.relativePath(e, s.path),
                    c = !1,
                    h = void 0; if (dn(null !== u, "rerunTransactionsUnderNode_: relativePath should not be null."), s.status === oa.NEEDS_ABORT) c = !0, h = s.abortReason, i = i.concat(this.serverSyncTree_.ackUserWrite(s.currentWriteId, !0));
                else if (s.status === oa.RUN)
                    if (s.retryCount >= ta.MAX_TRANSACTION_RETRIES_) c = !0, h = "maxretry", i = i.concat(this.serverSyncTree_.ackUserWrite(s.currentWriteId, !0));
                    else { var l = this.getLatestState_(s.path, o);
                        s.currentInputSnapshot = l; var f = t[a].update(l.val()); if (void 0 !== f) { si("transaction failed: Data returned ", f, s.path); var p = Qi(f); "object" == typeof f && null != f && Pn(f, ".priority") || (p = p.updatePriority(l.getPriority())); var d = s.currentWriteId,
                                y = this.generateServerValues(),
                                m = ao(p, y);
                            s.currentOutputSnapshotRaw = p, s.currentOutputSnapshotResolved = m, s.currentWriteId = this.getNextWriteId_(), o.splice(o.indexOf(d), 1), i = (i = i.concat(this.serverSyncTree_.applyUserOverwrite(s.path, m, s.currentWriteId, s.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(d, !0)) } else c = !0, h = "nodata", i = i.concat(this.serverSyncTree_.ackUserWrite(s.currentWriteId, !0)) }
                if (this.eventQueue_.raiseEventsForChangedPath(e, i), i = [], c && (t[a].status = oa.COMPLETED, n = t[a].unwatcher, setTimeout(n, Math.floor(0)), t[a].onComplete))
                    if ("nodata" === h) { var g = new ia(this, t[a].path),
                            v = t[a].currentInputSnapshot,
                            b = new Ji(v, g, ki);
                        r.push(t[a].onComplete.bind(null, null, !1, b)) } else r.push(t[a].onComplete.bind(null, new Error(h), !1, null)) }
            this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_); for (a = 0; a < r.length; a++) qr(r[a]);
            this.sendReadyTransactions_() } }, ta.prototype.getAncestorTransactionNode_ = function(t) { for (var e, n = this.transactionQueueTree_; null !== (e = t.getFront()) && null === n.getValue();) n = n.subTree(e), t = t.popFront(); return n }, ta.prototype.buildTransactionQueue_ = function(t) { var e = []; return this.aggregateTransactionQueuesForNode_(t, e), e.sort(function(t, e) { return t.order - e.order }), e }, ta.prototype.aggregateTransactionQueuesForNode_ = function(t, e) { var n = this,
            r = t.getValue(); if (null !== r)
            for (var i = 0; i < r.length; i++) e.push(r[i]);
        t.forEachChild(function(t) { n.aggregateTransactionQueuesForNode_(t, e) }) }, ta.prototype.pruneCompletedTransactionsBelowNode_ = function(t) { var e = this,
            n = t.getValue(); if (n) { for (var r = 0, i = 0; i < n.length; i++) n[i].status !== oa.COMPLETED && (n[r] = n[i], r++);
            n.length = r, t.setValue(0 < n.length ? n : null) }
        t.forEachChild(function(t) { e.pruneCompletedTransactionsBelowNode_(t) }) }, ta.prototype.abortTransactions_ = function(t) { var e = this,
            n = this.getAncestorTransactionNode_(t).path(),
            r = this.transactionQueueTree_.subTree(t); return r.forEachAncestor(function(t) { e.abortTransactionsOnNode_(t) }), this.abortTransactionsOnNode_(r), r.forEachDescendant(function(t) { e.abortTransactionsOnNode_(t) }), n }, ta.prototype.abortTransactionsOnNode_ = function(t) { var e = t.getValue(); if (null !== e) { for (var n = [], r = [], i = -1, o = 0; o < e.length; o++)
                if (e[o].status === oa.SENT_NEEDS_ABORT);
                else if (e[o].status === oa.SENT) dn(i === o - 1, "All SENT items should be at beginning of queue."), e[i = o].status = oa.SENT_NEEDS_ABORT, e[o].abortReason = "set";
            else if (dn(e[o].status === oa.RUN, "Unexpected transaction status in abort"), e[o].unwatcher(), r = r.concat(this.serverSyncTree_.ackUserWrite(e[o].currentWriteId, !0)), e[o].onComplete) { n.push(e[o].onComplete.bind(null, new Error("set"), !1, null)) } - 1 === i ? t.setValue(null) : e.length = i + 1, this.eventQueue_.raiseEventsForChangedPath(t.path(), r); for (o = 0; o < n.length; o++) qr(n[o]) } }; var ca, ha = "databaseURL",
        la = function() {
            function t() { this.repos_ = {}, this.useRestClient_ = !1 } return t.getInstance = function() { return ca || (ca = new t), ca }, t.prototype.interrupt = function() { for (var t in this.repos_)
                    for (var e in this.repos_[t]) this.repos_[t][e].interrupt() }, t.prototype.resume = function() { for (var t in this.repos_)
                    for (var e in this.repos_[t]) this.repos_[t][e].resume() }, t.prototype.databaseFromApp = function(t, e) { var n = e || t.options[ha];
                void 0 === n && Cr("Can't determine Firebase Database URL.  Be sure to include " + ha + " option when calling firebase.initializeApp()."); var r = $r(n),
                    i = r.repoInfo; return di("Invalid Firebase Database URL", 1, r), r.path.isEmpty() || Cr("Database URL must point to the root of a Firebase Database (not including a child path)."), this.createRepo(i, t).database }, t.prototype.deleteRepo = function(t) { var e = Mn(this.repos_, t.app.name);
                e && Mn(e, t.repoInfo_.toURLString()) === t || Cr("Database " + t.app.name + "(" + t.repoInfo_ + ") has already been deleted."), t.interrupt(), delete e[t.repoInfo_.toURLString()] }, t.prototype.createRepo = function(t, e) { var n = Mn(this.repos_, e.name);
                n || (n = {}, this.repos_[e.name] = n); var r = Mn(n, t.toURLString()); return r && Cr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), r = new ta(t, this.useRestClient_, e), n[t.toURLString()] = r }, t.prototype.forceRestClient = function(t) { this.useRestClient_ = t }, t }(),
        fa = function() {
            function t(t) {
                (this.repo_ = t) instanceof ta || Cr("Don't call new Database() directly - please use firebase.database()."), this.root_ = new ia(t, Br.Empty), this.INTERNAL = new pa(this) } return Object.defineProperty(t.prototype, "app", { get: function() { return this.repo_.app }, enumerable: !0, configurable: !0 }), t.prototype.ref = function(t) { return this.checkDeleted_("ref"), Hn("database.ref", 0, 1, arguments.length), t instanceof ia ? this.refFromURL(t.toString()) : void 0 !== t ? this.root_.child(t) : this.root_ }, t.prototype.refFromURL = function(t) { var e = "database.refFromURL";
                this.checkDeleted_(e), Hn(e, 1, 1, arguments.length); var n = $r(t);
                di(e, 1, n); var r = n.repoInfo; return r.host !== this.repo_.repoInfo_.host && Cr(e + ": Host name does not match the current database: (found " + r.host + " but expected " + this.repo_.repoInfo_.host + ")"), this.ref(n.path.toString()) }, t.prototype.checkDeleted_ = function(t) { null === this.repo_ && Cr("Cannot call " + t + " on a deleted database.") }, t.prototype.goOffline = function() { Hn("database.goOffline", 0, 0, arguments.length), this.checkDeleted_("goOffline"), this.repo_.interrupt() }, t.prototype.goOnline = function() { Hn("database.goOnline", 0, 0, arguments.length), this.checkDeleted_("goOnline"), this.repo_.resume() }, t.ServerValue = { TIMESTAMP: { ".sv": "timestamp" } }, t }(),
        pa = function() {
            function t(t) { this.database = t } return t.prototype.delete = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { return this.database.checkDeleted_("delete"), la.getInstance().deleteRepo(this.database.repo_), this.database.repo_ = null, this.database.root_ = null, this.database.INTERNAL = null, this.database = null, [2] }) }) }, t }(),
        da = Object.freeze({ forceLongPolling: function() { zo.forceDisallow(), Ko.forceAllow() }, forceWebSockets: function() { Ko.forceDisallow() }, isWebSocketsAvailable: function() { return zo.isAvailable() }, setSecurityDebugCallback: function(t, e) { t.repo.persistentConnection_.securityDebugCallback_ = e }, stats: function(t, e) { t.repo.stats(e) }, statsIncrementCounter: function(t, e) { t.repo.statsIncrementCounter(e) }, dataUpdateCount: function(t) { return t.repo.dataUpdateCount }, interceptServerData: function(t, e) { return t.repo.interceptServerData_(e) } }),
        ya = Jo;
    Jo.prototype.simpleListen = function(t, e) { this.sendRequest("q", { p: t }, e) }, Jo.prototype.echo = function(t, e) { this.sendRequest("echo", { d: t }, e) }; var ma, ga = Yo,
        va = Hr,
        ba = Object.freeze({ DataConnection: ya, RealTimeConnection: ga, hijackHash: function(i) { var o = Jo.prototype.put; return Jo.prototype.put = function(t, e, n, r) { void 0 !== r && (r = i()), o.call(this, t, e, n, r) },
                    function() { Jo.prototype.put = o } }, ConnectionTarget: va, queryIdentifier: function(t) { return t.queryIdentifier() }, listens: function(t) { return t.repo.persistentConnection_.listens_ }, forceRestClient: function(t) { la.getInstance().forceRestClient(t) } }),
        _a = fa.ServerValue;
    ma = Mh.INTERNAL.registerService("database", function(t, e, n) { return la.getInstance().databaseFromApp(t, n) }, { Reference: ia, Query: no, Database: fa, enableLogging: wr, INTERNAL: da, ServerValue: _a, TEST_ACCESS: ba }, null, !0), Cn() && (module.exports = ma); var wa, Ea = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        Ta = Ta || {},
        Sa = Ea;

    function Ca(t) { return "string" == typeof t }

    function Ia(t, e) { t = t.split("."), e = e || Sa; for (var n = 0; n < t.length; n++)
            if (null == (e = e[t[n]])) return null;
        return e }

    function Na() {}

    function Da(t) { var e = typeof t; if ("object" == e) { if (!t) return "null"; if (t instanceof Array) return "array"; if (t instanceof Object) return e; var n = Object.prototype.toString.call(t); if ("[object Window]" == n) return "object"; if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function" } else if ("function" == e && void 0 === t.call) return "object"; return e }

    function Aa(t) { return "array" == Da(t) }

    function ka(t) { var e = Da(t); return "array" == e || "object" == e && "number" == typeof t.length }

    function Ra(t) { var e = typeof t; return "object" == e && null != t || "function" == e } var Oa = "closure_uid_" + (1e9 * Math.random() >>> 0),
        Pa = 0;

    function Ma(t, e, n) { return t.call.apply(t.bind, arguments) }

    function La(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var r = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, r), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

    function xa(t, e, n) { return (xa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ma : La).apply(null, arguments) }

    function Fa(e, t) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } } var Ua = Date.now || function() { return +new Date };

    function qa(t, o) {
        function e() {}
        e.prototype = o.prototype, t.S = o.prototype, t.prototype = new e, (t.prototype.constructor = t).re = function(t, e, n) { for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return o.prototype[e].apply(t, r) } }

    function Va() { this.i = this.i, this.j = this.j }
    Va.prototype.i = !1, Va.prototype.La = function() { if (!this.i && (this.i = !0, this.G(), 0)) this[Oa] || (this[Oa] = ++Pa) }, Va.prototype.G = function() { if (this.j)
            for (; this.j.length;) this.j.shift()() }; var Ba = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) { if (Ca(t)) return Ca(e) && 1 == e.length ? t.indexOf(e, 0) : -1; for (var n = 0; n < t.length; n++)
                if (n in t && t[n] === e) return n;
            return -1 },
        ja = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var r = t.length, i = Ca(t) ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t) };

    function Wa(t) { return Array.prototype.concat.apply([], arguments) }

    function Ka(t) { var e = t.length; if (0 < e) { for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r]; return n } return [] }

    function Qa(t) { return /^[\s\xa0]*$/.test(t) } var Ha, za = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] };

    function Ga(t, e) { return -1 != t.indexOf(e) }

    function Ya(t, e) { return t < e ? -1 : e < t ? 1 : 0 }
    t: { var Xa = Sa.navigator; if (Xa) { var Ja = Xa.userAgent; if (Ja) { Ha = Ja; break t } }
        Ha = "" }

    function $a(t, e, n) { for (var r in t) e.call(n, t[r], r, t) }

    function Za(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n } var ts = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function es(t, e) { for (var n, r, i = 1; i < arguments.length; i++) { for (n in r = arguments[i]) t[n] = r[n]; for (var o = 0; o < ts.length; o++) n = ts[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]) } }

    function ns(t) { return ns[" "](t), t }
    ns[" "] = Na; var rs, is, os = Ga(Ha, "Opera"),
        as = Ga(Ha, "Trident") || Ga(Ha, "MSIE"),
        ss = Ga(Ha, "Edge"),
        us = ss || as,
        cs = Ga(Ha, "Gecko") && !(Ga(Ha.toLowerCase(), "webkit") && !Ga(Ha, "Edge")) && !(Ga(Ha, "Trident") || Ga(Ha, "MSIE")) && !Ga(Ha, "Edge"),
        hs = Ga(Ha.toLowerCase(), "webkit") && !Ga(Ha, "Edge");

    function ls() { var t = Sa.document; return t ? t.documentMode : void 0 }
    t: { var fs = "",
            ps = (is = Ha, cs ? /rv:([^\);]+)(\)|;)/.exec(is) : ss ? /Edge\/([\d\.]+)/.exec(is) : as ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(is) : hs ? /WebKit\/(\S+)/.exec(is) : os ? /(?:Version)[ \/]?(\S+)/.exec(is) : void 0); if (ps && (fs = ps ? ps[1] : ""), as) { var ds = ls(); if (null != ds && ds > parseFloat(fs)) { rs = String(ds); break t } }
        rs = fs }
    var ys, ms = {};

    function gs(s) { return t = s, e = function() { for (var t = 0, e = za(String(rs)).split("."), n = za(String(s)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) { var o = e[i] || "",
                    a = n[i] || "";
                do { if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                    t = Ya(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || Ya(0 == o[2].length, 0 == a[2].length) || Ya(o[2], a[2]), o = o[3], a = a[3] } while (0 == t) } return 0 <= t }, n = ms, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t); var t, e, n } var vs = Sa.document;
    ys = vs && as ? ls() || ("CSS1Compat" == vs.compatMode ? parseInt(rs, 10) : 5) : void 0; var bs = !as || 9 <= Number(ys),
        _s = as && !gs("9"),
        ws = function() { if (!Sa.addEventListener || !Object.defineProperty) return !1; var t = !1,
                e = Object.defineProperty({}, "passive", { get: function() { t = !0 } }); try { Sa.addEventListener("test", Na, e), Sa.removeEventListener("test", Na, e) } catch (t) {} return t }();

    function Es(t, e) { this.type = t, this.a = this.target = e, this.b = !1, this.hc = !0 }

    function Ts(t, e) { Es.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.f = null, t && this.g(t, e) }
    Es.prototype.c = function() { this.hc = !1 }, qa(Ts, Es); var Ss = { 2: "touch", 3: "pen", 4: "mouse" };
    Ts.prototype.g = function(t, e) { var n = this.type = t.type,
            r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null; if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) { if (cs) { t: { try { ns(e.nodeName); var i = !0; break t } catch (t) {}
                    i = !1 }
                i || (e = null) } } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
        this.relatedTarget = e, this.screenY = r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = Ca(t.pointerType) ? t.pointerType : Ss[t.pointerType] || "", (this.f = t).defaultPrevented && this.c() }, Ts.prototype.c = function() { Ts.S.c.call(this); var t = this.f; if (t.preventDefault) t.preventDefault();
        else if (t.returnValue = !1, _s) try {
            (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1) } catch (t) {} }; var Cs = "closure_listenable_" + (1e6 * Math.random() | 0),
        Is = 0;

    function Ns(t, e, n, r, i) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.ya = i, this.key = ++Is, this.ja = this.oa = !1 }

    function Ds(t) { this.src = t, this.a = {}, this.b = 0 }

    function As(t, e, n, r) { for (var i = 0; i < t.length; ++i) { var o = t[i]; if (!o.ja && o.listener == e && o.capture == !!n && o.ya == r) return i } return -1 }
    Ns.prototype.a = function() { this.ja = !0, this.ya = this.src = this.proxy = this.listener = null }, (wa = Ds.prototype).add = function(t, e, n, r, i) { var o = t.toString();
        (t = this.a[o]) || (t = this.a[o] = [], this.b++); var a = As(t, e, r, i); return -1 < a ? (e = t[a], n || (e.oa = !1)) : ((e = new Ns(e, this.src, o, !!r, i)).oa = n, t.push(e)), e }, wa.Sc = function(t, e, n, r) { if ((t = t.toString()) in this.a) { var i = this.a[t]; - 1 < (e = As(i, e, n, r)) && (i[e].a(), Array.prototype.splice.call(i, e, 1), 0 == i.length && (delete this.a[t], this.b--)) } }, wa.fc = function(t) { var e = t.type; if (e in this.a) { var n, r = this.a[e],
                i = Ba(r, t);
            (n = 0 <= i) && Array.prototype.splice.call(r, i, 1), n && (t.a(), 0 == this.a[e].length && (delete this.a[e], this.b--)) } }, wa.Tc = function() { var t; for (t in this.a) { for (var e = this.a[t], n = 0; n < e.length; n++) e[n].a();
            delete this.a[t], this.b-- } }, wa.Rc = function(t, e, n, r) { var i = -1; return (t = this.a[t.toString()]) && (i = As(t, e, n, r)), -1 < i ? t[i] : null }; var ks = "closure_lm_" + (1e6 * Math.random() | 0),
        Rs = {};

    function Os(t, e, n, r, i) { if (r && r.once) return function t(e, n, r, i, o) { if (Aa(n)) { for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o); return null }
            r = Vs(r); return e && e[Cs] ? e.Mb(n, r, Ra(i) ? !!i.capture : !!i, o) : Ps(e, n, r, !0, i, o) }(t, e, n, r, i); if (Aa(e)) { for (var o = 0; o < e.length; o++) Os(t, e[o], n, r, i); return null } return n = Vs(n), t && t[Cs] ? t.Lb(e, n, Ra(r) ? !!r.capture : !!r, i) : Ps(t, e, n, !1, r, i) }

    function Ps(t, e, n, r, i, o) { if (!e) throw Error("Invalid event type"); var a = Ra(i) ? !!i.capture : !!i; if (a && !bs) return null; var s, u, c = Us(t); if (c || (t[ks] = c = new Ds(t)), (n = c.add(e, n, r, a, o)).proxy) return n; if (s = Fs, r = u = bs ? function(t) { return s.call(u.src, u.listener, t) } : function(t) { if (!(t = s.call(u.src, u.listener, t))) return t }, (n.proxy = r).src = t, r.listener = n, t.addEventListener) ws || (i = a), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
        else if (t.attachEvent) t.attachEvent(Ls(e.toString()), r);
        else { if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
            t.addListener(r) } return n }

    function Ms(t) { if ("number" != typeof t && t && !t.ja) { var e = t.src; if (e && e[Cs]) e.nc(t);
            else { var n = t.type,
                    r = t.proxy;
                e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(Ls(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Us(e)) ? (n.fc(t), 0 == n.b && (n.src = null, e[ks] = null)) : t.a() } } }

    function Ls(t) { return t in Rs ? Rs[t] : Rs[t] = "on" + t }

    function xs(t, e) { var n = t.listener,
            r = t.ya || t.src; return t.oa && Ms(t), n.call(r, e) }

    function Fs(t, e) { return !!t.ja || (bs ? xs(t, new Ts(e, this)) : xs(t, e = new Ts(e || Ia("window.event"), this))) }

    function Us(t) { return (t = t[ks]) instanceof Ds ? t : null } var qs = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

    function Vs(e) { return "function" == Da(e) ? e : (e[qs] || (e[qs] = function(t) { return e.handleEvent(t) }), e[qs]) }

    function Bs() { Va.call(this), this.c = new Ds(this), (this.K = this).F = null }
    qa(Bs, Va), Bs.prototype[Cs] = !0, (wa = Bs.prototype).addEventListener = function(t, e, n, r) { Os(this, t, e, n, r) }, wa.removeEventListener = function(t, e, n, r) {! function t(e, n, r, i, o) { if (Aa(n))
                for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o);
            else i = Ra(i) ? !!i.capture : !!i, r = Vs(r), e && e[Cs] ? e.Qc(n, r, i, o) : e && (e = Us(e)) && (n = e.Rc(n, r, i, o)) && Ms(n) }(this, t, e, n, r) }, wa.dispatchEvent = function(t) { var e, n = this.F; if (n)
            for (e = []; n; n = n.F) e.push(n);
        n = this.K; var r = t.type || t; if (Ca(t)) t = new Es(t, n);
        else if (t instanceof Es) t.target = t.target || n;
        else { var i = t;
            es(t = new Es(r, n), i) } if (i = !0, e)
            for (var o = e.length - 1; !t.b && 0 <= o; o--) { var a = t.a = e[o];
                i = a.ua(r, !0, t) && i }
        if (t.b || (i = (a = t.a = n).ua(r, !0, t) && i, t.b || (i = a.ua(r, !1, t) && i)), e)
            for (o = 0; !t.b && o < e.length; o++) i = (a = t.a = e[o]).ua(r, !1, t) && i; return i }, wa.G = function() { Bs.S.G.call(this), this.Id(), this.F = null }, wa.Lb = function(t, e, n, r) { return this.c.add(String(t), e, !1, n, r) }, wa.Mb = function(t, e, n, r) { return this.c.add(String(t), e, !0, n, r) }, wa.Qc = function(t, e, n, r) { this.c.Sc(String(t), e, n, r) }, wa.nc = function(t) { this.c.fc(t) }, wa.Id = function() { this.c && this.c.Tc() }, wa.ua = function(t, e, n) { if (!(t = this.c.a[String(t)])) return !0;
        t = t.concat(); for (var r = !0, i = 0; i < t.length; ++i) { var o = t[i]; if (o && !o.ja && o.capture == e) { var a = o.listener,
                    s = o.ya || o.src;
                o.oa && this.nc(o), r = !1 !== a.call(s, n) && r } } return r && 0 != n.hc }; var js = Sa.JSON.stringify;

    function Ws(t, e) { this.g = 100, this.c = t, this.h = e, this.b = 0, this.a = null }

    function Ks() { this.b = this.a = null }
    Ws.prototype.get = function() { if (0 < this.b) { this.b--; var t = this.a;
            this.a = t.next, t.next = null } else t = this.c(); return t }, Ws.prototype.f = function(t) { this.h(t), this.b < this.g && (this.b++, t.next = this.a, this.a = t) }; var Qs, Hs = new Ws(function() { return new zs }, function(t) { t.reset() });

    function zs() { this.next = this.b = this.a = null }

    function Gs(t) { Sa.setTimeout(function() { throw t }, 0) }
    Ks.prototype.add = function(t, e) { var n = this.c();
        n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n }, Ks.prototype.f = function() { var t = null; return this.a && (t = this.a, this.a = this.a.next, this.a || (this.b = null), t.next = null), t }, Ks.prototype.g = function(t) { Hs.f(t) }, Ks.prototype.c = function() { return Hs.get() }, zs.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null }; var Ys = !(zs.prototype.reset = function() { this.next = this.b = this.a = null }),
        Xs = new Ks;

    function Js() { for (var t; t = Xs.f();) { try { t.a.call(t.b) } catch (t) { Gs(t) }
            Xs.g(t) }
        Ys = !1 }

    function $s(t, e) { Bs.call(this), this.b = t || 1, this.a = e || Sa, this.f = xa(this.$d, this), this.g = Ua() }

    function Zs(t, e, n) { if ("function" == Da(t)) n && (t = xa(t, n));
        else { if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
            t = xa(t.handleEvent, t) } return 2147483647 < Number(e) ? -1 : Sa.setTimeout(t, e || 0) }

    function tu(t, e, n) { Va.call(this), this.f = null != n ? xa(t, n) : t, this.c = e, this.b = xa(this.Cd, this), this.a = [] }

    function eu(t) { Va.call(this), this.b = t, this.a = {} }
    qa($s, Bs), (wa = $s.prototype).wa = !1, wa.P = null, wa.$d = function() { if (this.wa) { var t = Ua() - this.g;
            0 < t && t < .8 * this.b ? this.P = this.a.setTimeout(this.f, this.b - t) : (this.P && (this.a.clearTimeout(this.P), this.P = null), this.Gc(), this.wa && (this.Na(), this.start())) } }, wa.Gc = function() { this.dispatchEvent("tick") }, wa.start = function() { this.wa = !0, this.P || (this.P = this.a.setTimeout(this.f, this.b), this.g = Ua()) }, wa.Na = function() { this.wa = !1, this.P && (this.a.clearTimeout(this.P), this.P = null) }, wa.G = function() { $s.S.G.call(this), this.Na(), delete this.a }, qa(tu, Va), (wa = tu.prototype).Ca = !1, wa.ec = 0, wa.ba = null, wa.Hc = function(t) { this.a = arguments, this.ba || this.ec ? this.Ca = !0 : this.yb() }, wa.Pc = function() { this.ba && (Sa.clearTimeout(this.ba), this.ba = null, this.Ca = !1, this.a = []) }, wa.G = function() { tu.S.G.call(this), this.Pc() }, wa.Cd = function() { this.ba = null, this.Ca && !this.ec && (this.Ca = !1, this.yb()) }, wa.yb = function() { this.ba = Zs(this.b, this.c), this.f.apply(null, this.a) }, qa(eu, Va); var nu = [];

    function ru() {}(wa = eu.prototype).Jb = function(t, e, n) { this.wd(t, e, n) }, wa.wd = function(t, e, n) { Aa(e) || (e && (nu[0] = e.toString()), e = nu); for (var r = 0; r < e.length; r++) { var i = Os(t, e[r], n || this.handleEvent, !1, this.b || this); if (!i) break;
            this.a[i.key] = i } }, wa.Kb = function() { $a(this.a, function(t, e) { this.a.hasOwnProperty(e) && Ms(t) }, this), this.a = {} }, wa.G = function() { eu.S.G.call(this), this.Kb() }, wa.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented") }; var iu = new Bs;

    function ou(t) { Es.call(this, "serverreachability", t) }

    function au(t) { iu.dispatchEvent(new ou(iu, t)) }

    function su(t) { Es.call(this, "statevent", t) }

    function uu(t) { iu.dispatchEvent(new su(iu, t)) }

    function cu(t) { Es.call(this, "timingevent", t) }

    function hu(t, e) { if ("function" != Da(t)) throw Error("Fn must not be null and must be a function"); return Sa.setTimeout(function() { t() }, e) }
    qa(ou, Es), qa(su, Es), qa(cu, Es); var lu = { NO_ERROR: 0, ae: 1, he: 2, ge: 3, de: 4, fe: 5, ie: 6, qc: 7, TIMEOUT: 8, le: 9 },
        fu = { ce: "complete", pe: "success", rc: "error", qc: "abort", ne: "ready", oe: "readystatechange", TIMEOUT: "timeout", je: "incrementaldata", me: "progress", ee: "downloadprogress", qe: "uploadprogress" };

    function pu() {}

    function du() {}
    pu.prototype.a = null, pu.prototype.c = function() { return this.a || (this.a = {}) }; var yu, mu = { OPEN: "a", be: "b", rc: "c", ke: "d" };

    function gu() { Es.call(this, "d") }

    function vu() { Es.call(this, "c") }

    function bu() {}

    function _u(t, e, n) { this.g = t, this.da = e, this.ca = n || 1, this.I = new eu(this), this.L = 45e3, t = us ? 125 : void 0, this.T = new $s(t), this.J = null, this.b = !1, this.i = this.C = this.f = this.F = this.u = this.U = this.h = null, this.j = [], this.a = null, this.A = 0, this.c = this.v = null, this.o = -1, this.l = !1, this.K = 0, this.B = null, this.s = this.Y = this.H = !1 }
    qa(gu, Es), qa(vu, Es), qa(bu, pu), bu.prototype.b = function() { return new XMLHttpRequest }, yu = new bu; var wu = {},
        Eu = {};

    function Tu(t, e) { if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
        else if (ka(t) || Ca(t)) ja(t, e, void 0);
        else { if (t.O && "function" == typeof t.O) var n = t.O();
            else if (t.D && "function" == typeof t.D) n = void 0;
            else if (ka(t) || Ca(t)) { n = []; for (var r = t.length, i = 0; i < r; i++) n.push(i) } else
                for (i in n = [], r = 0, t) n[r++] = i;
            i = (r = function(t) { if (t.D && "function" == typeof t.D) return t.D(); if (Ca(t)) return t.split(""); if (ka(t)) { for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]); return e } for (r in e = [], n = 0, t) e[n++] = t[r]; return e }(t)).length; for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t) } }

    function Su(t, e) { this.b = {}, this.a = [], this.c = 0; var n = arguments.length; if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]) } else t && this.fd(t) }

    function Cu(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }(wa = _u.prototype).ha = function(t) { this.J = t }, wa.setTimeout = function(t) { this.L = t }, wa.Xc = function(t) { this.K = t }, wa.Qd = function(t) { this.j = t }, wa.cb = function(t, e) { this.F = 1, this.f = t.N().za(), this.i = e, this.H = !0, this.ic(null) }, wa.bb = function(t, e, n) { this.F = 1, this.f = t.N().za(), this.i = null, this.H = e, this.ic(n) }, wa.ic = function(t) { this.u = Ua(), this.fa(), this.C = this.f.N(), this.C.Aa("t", this.ca), this.A = 0, this.a = this.g.sa(this.g.Da() ? t : null), 0 < this.K && (this.B = new tu(xa(this.oc, this, this.a), this.K)), this.I.Jb(this.a, "readystatechange", this.Hd), t = this.J ? Za(this.J) : {}, this.i ? (this.v || (this.v = "POST"), t["Content-Type"] = "application/x-www-form-urlencoded", this.a.xa(this.C, this.v, this.i, t)) : (this.v = "GET", this.a.xa(this.C, this.v, null, t)), au(1) }, wa.Hd = function(t) { t = t.target; var e = this.B;
        e && 3 == t.W() ? e.Hc() : this.oc(t) }, wa.oc = function(t) { try { t == this.a && this.Ed() } catch (t) {} }, wa.Ed = function() { var t = this.a.W(),
            e = this.a.Db(),
            n = this.a.aa(); if (!(t < 3 || 3 == t && !us && !this.a.va()))
            if (this.l || 4 != t || 7 == e || au(8 == e || n <= 0 ? 3 : 2), this.pa(), this.o = n = this.a.aa(), e = this.a.va(), this.b = 200 == n) { if (this.Td()) { if (!(n = this.Kc())) return this.b = !1, this.c = 3, uu(12), this.Z(), void this.ta();
                    this.s = !0, this.Wa(n) }
                this.H ? (this.vb(t, e), us && this.b && 3 == t && this.Yd()) : this.Wa(e), 4 == t && this.Z(), this.b && !this.l && (4 == t ? this.g.Va(this) : (this.b = !1, this.fa())) } else 400 == n && 0 < e.indexOf("Unknown SID") ? (this.c = 3, uu(12)) : (this.c = 0, uu(13)), this.Z(), this.ta() }, wa.Td = function() { return this.Y && !this.s }, wa.Kc = function() { if (this.a) { var t = this.a.ga("X-HTTP-Initial-Response"); if (t && !Qa(t)) return t } return null }, wa.Md = function() { this.Y = !0 }, wa.vb = function(t, e) { for (var n = !0; !this.l && this.A < e.length;) { var r = this.Lc(e); if (r == Eu) { 4 == t && (this.c = 4, uu(14), n = !1); break } if (r == wu) { this.c = 4, uu(15), n = !1; break }
            this.Wa(r) }
        4 == t && 0 == e.length && (this.c = 1, uu(16), n = !1), this.b = this.b && n, n || (this.Z(), this.ta()) }, wa.Gd = function() { if (this.a) { var t = this.a.W(),
                e = this.a.va();
            this.A < e.length && (this.pa(), this.vb(t, e), this.b && 4 != t && this.fa()) } }, wa.Yd = function() { this.I.Jb(this.T, "tick", this.Gd), this.T.start() }, wa.Lc = function(t) { var e = this.A,
            n = t.indexOf("\n", e); return -1 == n ? Eu : (e = Number(t.substring(e, n)), isNaN(e) ? wu : (n += 1) + e > t.length ? Eu : (t = t.substr(n, e), this.A = n + e, t)) }, wa.Ld = function(t) { this.F = 2, this.f = t.N().za(), t = !1, Sa.navigator && Sa.navigator.sendBeacon && (t = Sa.navigator.sendBeacon(this.f.toString(), "")), !t && Sa.Image && ((new Image).src = this.f, t = !0), t || (this.a = this.g.sa(null), this.a.xa(this.f)), this.u = Ua(), this.fa() }, wa.cancel = function() { this.l = !0, this.Z() }, wa.Kd = function(t) { t && this.setTimeout(t), this.h && (this.pa(), this.fa()) }, wa.fa = function() { this.U = Ua() + this.L, this.mc(this.L) }, wa.mc = function(t) { if (null != this.h) throw Error("WatchDog timer not null");
        this.h = hu(xa(this.Dd, this), t) }, wa.pa = function() { this.h && (Sa.clearTimeout(this.h), this.h = null) }, wa.Dd = function() { this.h = null; var t = Ua();
        0 <= t - this.U ? this.md() : this.mc(this.U - t) }, wa.md = function() { 2 != this.F && (au(3), uu(17)), this.Z(), this.c = 2, this.ta() }, wa.ta = function() { this.g.Tb() || this.l || this.g.Va(this) }, wa.Z = function() { this.pa(); var t = this.B;
        t && "function" == typeof t.La && t.La(), this.B = null, this.T.Na(), this.I.Kb(), this.a && (t = this.a, this.a = null, t.abort(), t.La()) }, wa.Wa = function(t) { try { this.g.bc(this, t), au(4) } catch (t) {} }, (wa = Su.prototype).D = function() { this.Ka(); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, wa.O = function() { return this.Ka(), this.a.concat() }, wa.Ra = function(t) { return Cu(this.b, t) }, wa.hd = function() { return 0 == this.c }, wa.gd = function() { this.b = {}, this.c = this.a.length = 0 }, wa.Qb = function(t) { Cu(this.b, t) && (delete this.b[t], this.c--, this.a.length > 2 * this.c && this.Ka()) }, wa.Ka = function() { if (this.c != this.a.length) { for (var t = 0, e = 0; t < this.a.length;) { var n = this.a[t];
                Cu(this.b, n) && (this.a[e++] = n), t++ }
            this.a.length = e } if (this.c != this.a.length) { var r = {}; for (e = t = 0; t < this.a.length;) Cu(r, n = this.a[t]) || (r[this.a[e++] = n] = 1), t++;
            this.a.length = e } }, wa.get = function(t, e) { return Cu(this.b, t) ? this.b[t] : e }, wa.set = function(t, e) { Cu(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, wa.fd = function(t) { if (t instanceof Su)
            for (var e = t.O(), n = 0; n < e.length; n++) this.set(e[n], t.get(e[n]));
        else
            for (e in t) this.set(e, t[e]) }, wa.forEach = function(t, e) { for (var n = this.O(), r = 0; r < n.length; r++) { var i = n[r],
                o = this.get(i);
            t.call(e, o, i, this) } }, wa.Pb = function() { return new Su(this) }; var Iu = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Nu(t, e) { var n;
        this.c = this.i = this.b = "", this.h = null, this.j = this.g = "", this.f = this.l = !1, t instanceof Nu ? (this.f = void 0 !== e ? e : t.f, this.ma(t.b), this.$a(t.i), this.ka(t.c), this.la(t.h), this.Ba(t.g), this.Za(t.a.Gb()), this.Ya(t.j)) : t && (n = String(t).match(Iu)) ? (this.f = !!e, this.ma(n[1] || "", !0), this.$a(n[2] || "", !0), this.ka(n[3] || "", !0), this.la(n[4]), this.Ba(n[5] || "", !0), this.Za(n[6] || "", !0), this.Ya(n[7] || "", !0)) : (this.f = !!e, this.a = new xu(null, this.f)) }

    function Du(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

    function Au(t, e, n) { return Ca(t) ? (t = encodeURI(t).replace(e, ku), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null }

    function ku(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) }(wa = Nu.prototype).toString = function() { var t = [],
            e = this.b;
        e && t.push(Au(e, Ru, !0), ":"); var n = this.c; return (n || "file" == e) && (t.push("//"), (e = this.i) && t.push(Au(e, Ru, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.h) && t.push(":", String(n))), (n = this.g) && (this.Sa() && "/" != n.charAt(0) && t.push("/"), t.push(Au(n, "/" == n.charAt(0) ? Pu : Ou, !0))), (n = this.Ic()) && t.push("?", n), (n = this.j) && t.push("#", Au(n, Lu)), t.join("") }, wa.resolve = function(t) { var e = this.N(),
            n = t.qd();
        n ? e.ma(t.b) : n = t.rd(), n ? e.$a(t.i) : n = t.Sa(), n ? e.ka(t.c) : n = t.od(); var r = t.g; if (n) e.la(t.h);
        else if (n = t.Sb()) { if ("/" != r.charAt(0))
                if (this.Sa() && !this.Sb()) r = "/" + r;
                else { var i = e.g.lastIndexOf("/"); - 1 != i && (r = e.g.substr(0, i + 1) + r) }
            if (".." == (i = r) || "." == i) r = "";
            else if (Ga(i, "./") || Ga(i, "/.")) { r = 0 == i.lastIndexOf("/", 0), i = i.split("/"); for (var o = [], a = 0; a < i.length;) { var s = i[a++]; "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(s), r = !0) }
                r = o.join("/") } else r = i } return n ? e.Ba(r) : n = t.pd(), n ? e.Za(t.a.Gb()) : n = t.nd(), n && e.Ya(t.j), e }, wa.N = function() { return new Nu(this) }, wa.ma = function(t, e) { this.M(), (this.b = e ? Du(t, !0) : t) && (this.b = this.b.replace(/:$/, "")) }, wa.qd = function() { return !!this.b }, wa.$a = function(t, e) { this.M(), this.i = e ? Du(t) : t }, wa.rd = function() { return !!this.i }, wa.ka = function(t, e) { this.M(), this.c = e ? Du(t, !0) : t }, wa.Sa = function() { return !!this.c }, wa.la = function(t) { if (this.M(), t) { if (t = Number(t), isNaN(t) || t < 0) throw Error("Bad port number " + t);
            this.h = t } else this.h = null }, wa.od = function() { return null != this.h }, wa.Ba = function(t, e) { this.M(), this.g = e ? Du(t, !0) : t }, wa.Sb = function() { return !!this.g }, wa.pd = function() { return "" !== this.a.toString() }, wa.Za = function(t, e) { this.M(), t instanceof xu ? (this.a = t, this.a.Oc(this.f)) : (e || (t = Au(t, Mu)), this.a = new xu(t, this.f)) }, wa.Ic = function() { return this.a.toString() }, wa.m = function(t, e) { this.M(), this.a.set(t, e) }, wa.Aa = function(t, e) { this.M(), Aa(e) || (e = [String(e)]), this.a.lc(t, e) }, wa.Ya = function(t, e) { this.M(), this.j = e ? Du(t) : t }, wa.nd = function() { return !!this.j }, wa.za = function() { return this.M(), this.m("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ua()).toString(36)), this }, wa.M = function() { if (this.l) throw Error("Tried to modify a read-only Uri") }; var Ru = /[#\/\?@]/g,
        Ou = /[#\?:]/g,
        Pu = /[#\?]/g,
        Mu = /[#\?@]/g,
        Lu = /#/g;

    function xu(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

    function Fu(t) { this.a = t, this.b = this.h = null, this.g = !1, this.i = null, this.c = -1, this.l = this.f = null }

    function Uu() { this.a = this.b = null }

    function qu() { this.a = new Su }

    function Vu(t) { var e = typeof t; return "object" == e && t || "function" == e ? "o" + (t[Oa] || (t[Oa] = ++Pa)) : e.charAt(0) + t }

    function Bu(t, e) { this.a = t, this.b = e }

    function ju(t) { this.g = t || Wu, t = Sa.PerformanceNavigationTiming ? 0 < (t = Sa.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(Sa.Ja && Sa.Ja.Vb && Sa.Ja.Vb() && Sa.Ja.Vb().te), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new qu), this.b = null, this.c = [] }(wa = xu.prototype).V = function() { if (!this.a && (this.a = new Su, this.b = 0, this.c)) { var n = this;! function(t, e) { if (t) { t = t.split("&"); for (var n = 0; n < t.length; n++) { var r = t[n].indexOf("="),
                            i = null; if (0 <= r) { var o = t[n].substring(0, r);
                            i = t[n].substring(r + 1) } else o = t[n];
                        e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "") } } }(this.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) }) } }, wa.add = function(t, e) { this.V(), this.ia(), t = this.$(t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, wa.Ib = function(t) { this.V(), t = this.$(t), this.a.Ra(t) && (this.ia(), this.b -= this.a.get(t).length, this.a.Qb(t)) }, wa.Hb = function(t) { return this.V(), t = this.$(t), this.a.Ra(t) }, wa.forEach = function(n, r) { this.V(), this.a.forEach(function(t, e) { ja(t, function(t) { n.call(r, t, e, this) }, this) }, this) }, wa.O = function() { this.V(); for (var t = this.a.D(), e = this.a.O(), n = [], r = 0; r < e.length; r++)
            for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]); return n }, wa.D = function(t) { this.V(); var e = []; if (Ca(t)) this.Hb(t) && (e = Wa(e, this.a.get(this.$(t))));
        else { t = this.a.D(); for (var n = 0; n < t.length; n++) e = Wa(e, t[n]) } return e }, wa.set = function(t, e) { return this.V(), this.ia(), t = this.$(t), this.Hb(t) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, wa.get = function(t, e) { return t && 0 < (t = this.D(t)).length ? String(t[0]) : e }, wa.lc = function(t, e) { this.Ib(t), 0 < e.length && (this.ia(), this.a.set(this.$(t), Ka(e)), this.b += e.length) }, wa.toString = function() { if (this.c) return this.c; if (!this.a) return ""; for (var t = [], e = this.a.O(), n = 0; n < e.length; n++) { var r = e[n],
                i = encodeURIComponent(String(r));
            r = this.D(r); for (var o = 0; o < r.length; o++) { var a = i; "" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), t.push(a) } } return this.c = t.join("&") }, wa.ia = function() { this.c = null }, wa.Gb = function() { var t = new xu; return t.c = this.c, this.a && (t.a = this.a.Pb(), t.b = this.b), t }, wa.$ = function(t) { return t = String(t), this.f && (t = t.toLowerCase()), t }, wa.Oc = function(t) { t && !this.f && (this.V(), this.ia(), this.a.forEach(function(t, e) { var n = e.toLowerCase();
            e != n && (this.Ib(e), this.lc(n, t)) }, this)), this.f = t }, qa(function() {}, function() {}), (wa = Fu.prototype).R = null, wa.Wc = function(t) { this.h = t }, wa.Vc = function(t) { this.i = t, t = this.a.Cb(this.i), uu(3); var e = this.a.H.b;
        null != e ? (this.f = this.a.Oa(e[0]), this.R = 1, this.rb()) : (t.Aa("MODE", "init"), !this.a.o && this.a.j && t.Aa("X-HTTP-Session-Id", this.a.j), this.b = new _u(this, void 0, void 0), this.b.ha(this.h), this.b.bb(t, !1, null), this.R = 0) }, wa.rb = function() { var t = this.a.H.a; if (null != t) uu(4), t ? (uu(10), this.a.na(this, !1)) : (uu(11), this.a.na(this, !0));
        else { this.b = new _u(this, void 0, void 0), this.b.ha(this.h), t = this.a.Bb(this.f, this.i), uu(4), t.Aa("TYPE", "xmlhttp"); var e = this.a.j,
                n = this.a.Fa;
            e && n && t.m(e, n), this.b.bb(t, !1, this.f) } }, wa.sa = function(t) { return this.a.sa(t) }, wa.abort = function() { this.b && (this.b.cancel(), this.b = null), this.c = -1 }, wa.Tb = function() { return !1 }, wa.bc = function(t, e) { if (this.c = t.o, 0 == this.R)
            if (this.Uc(t), e) { try { var n = this.a.U.a(e) } catch (t) { return void this.a.ab(this) }
                this.f = this.a.Oa(n[0]) } else this.a.ab(this);
        else 1 == this.R && (this.g ? uu(6) : "11111" == e ? (uu(5), this.g = !0, this.Ac() && (this.c = 200, this.b.cancel(), uu(11), this.a.na(this, !0))) : (uu(7), this.g = !1)) }, wa.Va = function() { this.c = this.b.o, this.b.b ? 0 == this.R ? (this.R = 1, this.rb()) : 1 == this.R && (this.g ? (uu(11), this.a.na(this, !0)) : (uu(10), this.a.na(this, !1))) : (0 == this.R ? uu(8) : 1 == this.R && uu(9), this.a.ab(this)) }, wa.Uc = function(t) { if (!this.a.o && (t = t.a)) { var e = t.ga("X-Client-Wire-Protocol");
            this.l = e || null, this.a.j && (t = t.ga("X-HTTP-Session-Id")) && this.a.kc(t) } }, wa.Da = function() { return this.a.Da() }, wa.Pa = function() { return this.a.Pa() }, wa.Ac = function() { return !as || 10 <= Number(ys) }, (wa = qu.prototype).add = function(t) { this.a.set(Vu(t), t) }, wa.ed = function(t) { this.a.Qb(Vu(t)) }, wa.jd = function() { this.a.gd() }, wa.Rb = function() { return this.a.hd() }, wa.Ob = function(t) { return this.a.Ra(Vu(t)) }, wa.D = function() { return this.a.D() }; var Wu = 10;

    function Ku() { this.b = this.a = void 0 }

    function Qu() { this.f = new Ku }

    function Hu(t, e, n, r, i) { try { e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r) } catch (t) {} }(wa = ju.prototype).kb = function(t) {!this.a && (Ga(t, "spdy") || Ga(t, "quic") || Ga(t, "h2")) && (this.f = this.g, this.a = new qu, this.b && (this.Ha(this.b), this.b = null)) }, wa.Ub = function() { return !!this.b || !!this.a && this.a.a.c >= this.f }, wa.Mc = function() { return this.b ? 1 : this.a ? this.a.a.c : 0 }, wa.Ta = function(t) { return this.b ? this.b == t : !!this.a && this.a.Ob(t) }, wa.Ha = function(t) { this.a ? this.a.add(t) : this.b = t }, wa.gc = function(t) { this.b && this.b == t ? this.b = null : this.a && this.a.Ob(t) && this.a.ed(t) }, wa.cancel = function() { this.c = this.Xb(), this.b ? (this.b.cancel(), this.b = null) : this.a && !this.a.Rb() && (ja(this.a.D(), function(t) { t.cancel() }), this.a.jd()) }, wa.Xb = function() { if (null != this.b) return this.c.concat(this.b.j); if (null == this.a || this.a.Rb()) return Ka(this.c); var e = this.c; return ja(this.a.D(), function(t) { e = e.concat(t.j) }), e }, wa.wc = function(t) { this.c = this.c.concat(t) }, wa.Bc = function() { this.c.length = 0 }, Ku.prototype.stringify = function(t) { return Sa.JSON.stringify(t, this.a) }, Ku.prototype.parse = function(t) { return Sa.JSON.parse(t, this.b) }, Qu.prototype.b = function(t, r, e) { var i = e || ""; try { Tu(t, function(t, e) { var n = t;
                Ra(t) && (n = js(t)), r.push(i + e + "=" + encodeURIComponent(n)) }) } catch (t) { throw r.push(i + "type=" + encodeURIComponent("_badmap")), t } }, Qu.prototype.c = function(t, e, n) { for (var r = -1;;) { var i = ["count=" + e]; - 1 == r ? 0 < e ? (r = t[0].a, i.push("ofs=" + r)) : r = 0 : i.push("ofs=" + r); for (var o = !0, a = 0; a < e; a++) { var s = t[a].a,
                    u = t[a].b; if ((s -= r) < 0) r = Math.max(0, t[a].a - 100), o = !1;
                else try { this.b(u, i, "req" + s + "_") } catch (t) { n && n(u) } } if (o) return i.join("&") } }, Qu.prototype.a = function(t) { return this.f.parse(t) }; var zu = Sa.JSON.parse;

    function Gu(t) { Bs.call(this), this.headers = new Su, this.l = t || null, this.b = !1, this.v = this.a = null, this.C = "", this.h = 0, this.f = "", this.g = this.B = this.o = this.A = !1, this.u = 0, this.s = null, this.J = Yu, this.H = this.L = this.I = !1 }
    qa(Gu, Bs); var Yu = "",
        Xu = /^https?$/i,
        Ju = ["POST", "PUT"];

    function $u(t) { return "content-type" == t.toLowerCase() }

    function Zu(t, e) { return { type: e, lengthComputable: t.lengthComputable, loaded: t.loaded, total: t.total } }

    function tc(t, e, n) { t: { for (r in n) { var r = !1; break t }
            r = !0 } if (r) return t; var i; if (i = "", $a(n, function(t, e) { i += e, i += ":", i += t, i += "\r\n" }), n = i, Ca(t)) { if (e = encodeURIComponent(String(e)), e += n = null != n ? "=" + encodeURIComponent(String(n)) : "") { if ((n = t.indexOf("#")) < 0 && (n = t.length), (r = t.indexOf("?")) < 0 || n < r) { r = n; var o = "" } else o = t.substring(r + 1, n);
                n = (t = [t.substr(0, r), o, t.substr(n)])[1], t[1] = e ? n ? n + "&" + e : e : n, t = t[0] + (t[1] ? "?" + t[1] : "") + t[2] } return t } return t.m(e, n), t }

    function ec(t) { this.gb = 22, this.g = [], this.H = new Uu, this.da = this.fb = this.C = this.Ea = this.a = this.Fa = this.j = this.ca = this.f = this.J = this.h = null, this.sc = !0, this.zc = this.L = 0, this.uc = !!Ia("internalChannelParams.failFast", t), this.Ga = this.v = this.s = this.l = this.i = this.b = null, this.eb = !0, this.B = this.jb = this.K = -1, this.Y = this.u = this.A = 0, this.tc = Ia("internalChannelParams.baseRetryDelayMs", t) || 5e3, this.Fc = Ia("internalChannelParams.retryDelaySeedMs", t) || 1e4, this.pc = Ia("internalChannelParams.forwardChannelMaxRetries", t) || 2, this.ib = Ia("internalChannelParams.forwardChannelRequestTimeoutMs", t) || 2e4, this.xc = t && t.ue || void 0, this.F = void 0, this.vc = 0, this.T = t && t.supportsCrossDomainXhr || !1, this.I = "", this.c = new ju(t && t.concurrentRequestLimit), this.U = new Qu, this.o = !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest, (this.hb = t && t.fastHandshake || !1) && !this.o && (this.o = !0), t && t.se && (this.eb = !1) }

    function nc() {}

    function rc() { if (as && !(10 <= Number(ys))) throw Error("Environmental error: no available transport.") }

    function ic(t, e) { Bs.call(this), this.a = new ec(e), this.g = t, this.o = e && e.testUrl ? e.testUrl : function(t) { for (var e = t, n = 1; n < arguments.length; n++) { var r, i = arguments[n];
                0 == i.lastIndexOf("/", 0) ? e = i : ((r = "" == e) || (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r), e += r ? i : "/" + i) } return e }(this.g, "test"), this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = { "X-Client-Protocol": "webchannel" }), this.a.cd(t), t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = { "X-WebChannel-Content-Type": e.messageContentType }), e && e.tb && (t ? t["X-WebChannel-Client-Profile"] = e.tb : t = { "X-WebChannel-Client-Profile": e.tb }), this.a.Pd(t), (t = e && e.httpHeadersOverwriteParam) && !Qa(t) && this.a.Nd(t), this.l = e && e.supportsCrossDomainXhr || !1, this.h = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !Qa(e) && (this.a.Od(e), null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new sc(this) }

    function oc(t) { gu.call(this); var e = t.__sm__; if (e) { t: { for (var n in e) { t = n; break t }
                t = void 0 }(this.f = t) ? (t = this.f, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e }
        else this.data = t }

    function ac() { vu.call(this), this.status = 1 }

    function sc(t) { this.a = t }(wa = Gu.prototype).Sd = function(t) { this.I = t }, wa.xa = function(t, e, n, r) { if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.C + "; newUri=" + t);
        e = e ? e.toUpperCase() : "GET", this.C = t, this.f = "", this.h = 0, this.A = !1, this.b = !0, this.a = this.Ec(), this.v = this.l ? this.l.c() : yu.c(), this.a.onreadystatechange = xa(this.ac, this), this.L && "onprogress" in this.a && (this.a.onprogress = xa(function(t) { this.Zb(t, !0) }, this), this.a.upload && (this.a.upload.onprogress = xa(this.Zb, this))); try { this.B = !0, this.a.open(e, String(t), !0), this.B = !1 } catch (t) { return void this.Ab(t) }
        t = n || ""; var i, o = this.headers.Pb();
        r && Tu(r, function(t, e) { o.set(e, t) }), r = function(t) { t: { for (var e = $u, n = t.length, r = Ca(t) ? t.split("") : t, i = 0; i < n; i++)
                    if (i in r && e.call(void 0, r[i], i, t)) { e = i; break t }
                e = -1 } return e < 0 ? null : Ca(t) ? t.charAt(e) : t[e] }(o.O()), n = Sa.FormData && t instanceof Sa.FormData, !(0 <= Ba(Ju, e)) || r || n || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, this), this.J && (this.a.responseType = this.J), "withCredentials" in this.a && this.a.withCredentials !== this.I && (this.a.withCredentials = this.I); try { this.sb(), 0 < this.u && ((this.H = (i = this.a, as && gs(9) && "number" == typeof i.timeout && void 0 !== i.ontimeout)) ? (this.a.timeout = this.u, this.a.ontimeout = xa(this.Nb, this)) : this.s = Zs(this.Nb, this.u, this)), this.o = !0, this.a.send(t), this.o = !1 } catch (t) { this.Ab(t) } }, wa.Ec = function() { return this.l ? this.l.b() : yu.b() }, wa.Nb = function() { void 0 !== Ta && this.a && (this.f = "Timed out after " + this.u + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)) }, wa.Ab = function(t) { this.b = !1, this.a && (this.g = !0, this.a.abort(), this.g = !1), this.f = t, this.h = 5, this.xb(), this.qa() }, wa.xb = function() { this.A || (this.A = !0, this.dispatchEvent("complete"), this.dispatchEvent("error")) }, wa.abort = function(t) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.qa()) }, wa.G = function() { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), this.qa(!0)), Gu.S.G.call(this) }, wa.ac = function() { this.i || (this.B || this.o || this.g ? this.$b() : this.Bd()) }, wa.Bd = function() { this.$b() }, wa.$b = function() { if (this.b && void 0 !== Ta && (!this.v[1] || 4 != this.W() || 2 != this.aa()))
            if (this.o && 4 == this.W()) Zs(this.ac, 0, this);
            else if (this.dispatchEvent("readystatechange"), this.td()) { this.b = !1; try { this.vd() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.h = 6, this.f = this.Fb() + " [" + this.aa() + "]", this.xb()) } finally { this.qa() } } }, wa.Zb = function(t, e) { this.dispatchEvent(Zu(t, "progress")), this.dispatchEvent(Zu(t, e ? "downloadprogress" : "uploadprogress")) }, wa.qa = function(t) { if (this.a) { this.sb(); var e = this.a,
                n = this.v[0] ? Na : null;
            this.v = this.a = null, t || this.dispatchEvent("ready"); try { e.onreadystatechange = n } catch (t) {} } }, wa.sb = function() { this.a && this.H && (this.a.ontimeout = null), this.s && (Sa.clearTimeout(this.s), this.s = null) }, wa.td = function() { return 4 == this.W() }, wa.vd = function() { var t = this.aa();
        t: switch (t) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var e = !0; break t;
            default:
                e = !1 }
        return e || 0 === t && !this.ud() }, wa.ud = function() { var t = String(this.C).match(Iu)[1] || null; return !t && Sa.self && Sa.self.location && (t = (t = Sa.self.location.protocol).substr(0, t.length - 1)), Xu.test(t ? t.toLowerCase() : "") }, wa.W = function() { return this.a ? this.a.readyState : 0 }, wa.aa = function() { try { return 2 < this.W() ? this.a.status : -1 } catch (t) { return -1 } }, wa.Fb = function() { try { return 2 < this.W() ? this.a.statusText : "" } catch (t) { return "" } }, wa.va = function() { try { return this.a ? this.a.responseText : "" } catch (t) { return "" } }, wa.Nc = function(t) { if (this.a) { var e = this.a.responseText; return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), zu(e) } }, wa.ga = function(t) { return this.a ? this.a.getResponseHeader(t) : null }, wa.Db = function() { return this.h }, wa.dd = function() { return Ca(this.f) ? this.f : String(this.f) }, (wa = ec.prototype).qb = 8, wa.w = 1, wa.bd = function(t, e, n) { uu(0), this.Ea = e, this.ca = n || {}, this.o && (this.H.b = [], this.H.a = !1), this.Dc(t) }, wa.Qa = function() { if (this.lb(), 3 == this.w) { var t = this.L++,
                e = this.C.N();
            e.m("SID", this.I), e.m("RID", t), e.m("TYPE", "terminate"), this.ea(e), new _u(this, t, void 0).Ld(e) }
        this.Yb() }, wa.Dc = function(t) { this.v = new Fu(this), null === this.f && this.v.Wc(this.h); var e = t;
        this.f && this.h && (e = tc(t, this.f, this.h)), this.v.Vc(e) }, wa.Cc = function() { this.C = this.Cb(this.Ea), this.Ma() }, wa.lb = function() { this.v && (this.v.abort(), this.v = null), this.a && (this.a.cancel(), this.a = null), this.l && (Sa.clearTimeout(this.l), this.l = null), this.ra(), this.c.cancel(), this.i && (Sa.clearTimeout(this.i), this.i = null) }, wa.cd = function(t) { this.h = t }, wa.Pd = function(t) { this.J = t }, wa.Nd = function(t) { this.f = t }, wa.Od = function(t) { this.j = t }, wa.kc = function(t) { this.Fa = t }, wa.Rd = function() { this.T = !0 }, wa.jc = function(t) { this.b = t }, wa.sd = function() { return !this.Ga }, wa.Xa = function(t) { this.g.push(new Bu(this.zc++, t)), 3 == this.w && this.Ma() }, wa.Jc = function() { return this.uc ? 0 : this.pc }, wa.Tb = function() { return 0 == this.w }, wa.Ma = function() { this.c.Ub() || this.i || (this.i = hu(xa(this.dc, this), 0), this.A = 0) }, wa.xd = function(t) { return !(this.c.Mc() >= this.c.f - (this.i ? 1 : 0)) && (this.i ? (this.g = t.j.concat(this.g), !0) : !(1 == this.w || 2 == this.w || this.A >= this.Jc()) && (this.i = hu(xa(this.dc, this, t), this.Eb(this.A)), this.A++, !0)) }, wa.dc = function(t) { this.i = null, this.Xd(t) }, wa.Xd = function(t) { 1 == this.w ? t || (this.Fd(), this.w = 2) : 3 == this.w && (t ? this.Wb(t) : 0 == this.g.length || this.c.Ub() || this.Wb()) }, wa.Fd = function() { this.L = Math.floor(1e5 * Math.random()); var t = this.L++,
            e = new _u(this, t, void 0),
            n = this.h;
        this.J && (n ? es(n = Za(n), this.J) : n = this.J), null === this.f && e.ha(n); var r = this.wb(e),
            i = this.C.N();
        i.m("RID", t), 0 < this.gb && i.m("CVER", this.gb), this.o && this.j && i.m("X-HTTP-Session-Id", this.j), this.ea(i), this.f && n && tc(i, this.f, n), this.c.Ha(e), this.hb ? (i.m("$req", r), i.m("SID", "null"), e.Md(), e.cb(i, null)) : e.cb(i, r) }, wa.Wb = function(t) { var e;
        e = t ? t.da : this.L++; var n = this.C.N();
        n.m("SID", this.I), n.m("RID", e), n.m("AID", this.K), this.ea(n), this.f && this.h && tc(n, this.f, this.h), e = new _u(this, e, this.A + 1), null === this.f && e.ha(this.h), t && this.Jd(t), t = this.wb(e), e.setTimeout(Math.round(.5 * this.ib) + Math.round(.5 * this.ib * Math.random())), this.c.Ha(e), e.cb(n, t) }, wa.ea = function(n) { this.b && Tu({}, function(t, e) { n.m(e, t) }) }, wa.wb = function(t) { var e = Math.min(this.g.length, 1e3),
            n = this.b ? xa(this.b.yc, this.b, this) : null; return n = this.U.c(this.g, e, n), t.Qd(this.g.splice(0, e)), n }, wa.Jd = function(t) { this.g = t.j.concat(this.g) }, wa.zb = function() { if (!this.a && !this.l) { this.Y = 1; var t = this.cc;
            Qs || (e = Sa.Promise.resolve(void 0), Qs = function() { e.then(Js) }), Ys || (Qs(), Ys = !0), Xs.add(t, this), this.u = 0 } var e }, wa.Ua = function() { return !(this.a || this.l || 3 <= this.u) && (this.Y++, this.l = hu(xa(this.cc, this), this.Eb(this.u)), this.u++, !0) }, wa.cc = function() { this.l = null, this.Vd() }, wa.Vd = function() { this.a = new _u(this, "rpc", this.Y), null === this.f && this.a.ha(this.h), this.a.Xc(this.vc); var t = this.fb.N();
        t.m("RID", "rpc"), t.m("SID", this.I), t.m("CI", this.Ga ? "0" : "1"), t.m("AID", this.K), this.ea(t), t.m("TYPE", "xmlhttp"), this.f && this.h && tc(t, this.f, this.h), this.F && this.a.setTimeout(this.F), this.a.bb(t, !0, this.da) }, wa.na = function(t, e) { var n = t.l;
        n && this.c.kb(n), this.Ga = this.eb && e, this.B = t.c, this.Cc() }, wa.ab = function(t) { this.B = t.c, this.X(2) }, wa.bc = function(t, e) { if (0 != this.w && (this.a == t || this.c.Ta(t)))
            if (this.B = t.o, !t.s && this.c.Ta(t) && 3 == this.w) { try { var n = this.U.a(e) } catch (t) { n = null }
                Aa(n) && 3 == n.length ? this.ld(n, t) : this.X(11) } else(t.s || this.a == t) && this.ra(), Qa(e) || (n = this.U.a(e), this.Ad(n, t)) }, wa.ld = function(t, e) { 0 == t[0] ? this.kd(e) : (this.jb = t[1], 0 < this.jb - this.K && this.Ud(t[2]) && !this.s && (this.s = hu(xa(this.yd, this), 6e3))) }, wa.kd = function(t) { if (!this.l) { if (this.a) { if (!(this.a.u + 3e3 < t.u)) return;
                this.ra(), this.a.cancel(), this.a = null }
            this.Ua(), uu(18) } }, wa.Ud = function(t) { return t < 37500 && !this.sd() && 0 == this.u }, wa.Oa = function(t) { return this.sc ? this.b ? this.b.$c(t) : t : null }, wa.yd = function() { null != this.s && (this.s = null, this.a.cancel(), this.a = null, this.Ua(), uu(19)) }, wa.ra = function() { null != this.s && (Sa.clearTimeout(this.s), this.s = null) }, wa.Va = function(t) { var e = null; if (this.a == t) { this.ra(), this.a = null; var n = 2 } else { if (!this.c.Ta(t)) return;
            e = t.j, this.c.gc(t), n = 1 } if (this.B = t.o, 0 != this.w)
            if (t.b) 1 == n ? (n = Ua() - t.u, iu.dispatchEvent(new cu(iu, t.i ? t.i.length : 0, n, this.A)), this.Ma()) : this.zb();
            else { var r = t.c; if (3 == r || 0 == r && 0 < this.B || !(1 == n && this.xd(t) || 2 == n && this.Ua())) switch (e && 0 < e.length && this.c.wc(e), r) {
                    case 1:
                        this.X(5); break;
                    case 4:
                        this.X(10); break;
                    case 3:
                        this.X(6); break;
                    default:
                        this.X(2) } } }, wa.Eb = function(t) { var e = this.tc + Math.floor(Math.random() * this.Fc); return this.Pa() || (e *= 2), e * t }, wa.ad = function(t) { if (this.o && (t = t.a)) { var e = t.ga("X-Client-Wire-Protocol");
            e && this.c.kb(e), this.j && (t = t.ga("X-HTTP-Session-Id")) && (this.kc(t), this.C.m(this.j, t)) } }, wa.Ad = function(t, e) { for (var n = this.b && this.b.Ia ? [] : null, r = 0; r < t.length; r++) { var i = t[r]; if (this.K = i[0], i = i[1], 2 == this.w)
                if ("c" == i[0]) { this.I = i[1], this.da = this.Oa(i[2]); var o = i[3];
                    null != o && (this.qb = o), null != (i = i[5]) && "number" == typeof i && 0 < i && (this.F = 1.5 * i), this.ad(e), this.w = 3, this.b && this.b.pb(), this.Wd(e) } else "stop" != i[0] && "close" != i[0] || this.X(7);
            else 3 == this.w && ("stop" == i[0] || "close" == i[0] ? (n && 0 != n.length && (this.b.Ia(this, n), n.length = 0), "stop" == i[0] ? this.X(7) : this.Qa()) : "noop" != i[0] && (n ? n.push(i) : this.b && this.b.ob(i)), this.u = 0) }
        n && 0 != n.length && this.b.Ia(this, n) }, wa.Wd = function(t) { this.fb = this.Bb(this.da, this.Ea), t.s ? (this.c.gc(t), t.Kd(this.F), this.a = t) : this.zb() }, wa.X = function(t) { if (2 == t) { var e = null;
            this.b && (e = null); var n = xa(this.Zd, this);
            e || (e = new Nu("//www.google.com/images/cleardot.gif"), Sa.location && "http" == Sa.location.protocol || e.ma("https"), e.za()), r = e.toString(), i = n, o = new ru, (a = new Image).onload = Fa(Hu, o, a, "TestLoadImage: loaded", !0, i), a.onerror = Fa(Hu, o, a, "TestLoadImage: error", !1, i), a.onabort = Fa(Hu, o, a, "TestLoadImage: abort", !1, i), a.ontimeout = Fa(Hu, o, a, "TestLoadImage: timeout", !1, i), Sa.setTimeout(function() { a.ontimeout && a.ontimeout() }, 1e4), a.src = r } else uu(2); var r, i, o, a;
        this.zd(t) }, wa.Zd = function(t) { uu(t ? 2 : 1) }, wa.zd = function(t) { this.w = 0, this.b && this.b.nb(t), this.Yb(), this.lb() }, wa.Yb = function() { this.w = 0, this.B = -1, this.b && (0 == this.c.Xb().length && 0 == this.g.length || (this.c.Bc(), Ka(this.g), this.g.length = 0), this.b.mb()) }, wa.Cb = function(t) { return this.ub(null, t) }, wa.Bb = function(t, e) { return this.ub(this.Da() ? t : null, e) }, wa.ub = function(t, e) { var n, r, i, o, a, s, u = (n = e) instanceof Nu ? n.N() : new Nu(n, void 0); if ("" != u.c) t && u.ka(t + "." + u.c), u.la(u.h);
        else { var c, h = Sa.location;
            c = t ? t + "." + h.hostname : h.hostname, r = h.protocol, i = c, o = +h.port, a = e, s = new Nu(null, void 0), r && s.ma(r), i && s.ka(i), o && s.la(o), a && s.Ba(a), u = s } return this.ca && $a(this.ca, function(t, e) { u.m(e, t) }), t = this.j, e = this.Fa, t && e && u.m(t, e), u.m("VER", this.qb), this.ea(u), u }, wa.sa = function(t) { if (t && !this.T) throw Error("Can't create secondary domain capable XhrIo object."); return (t = new Gu(this.xc)).Sd(this.T), t }, wa.Pa = function() { return !!this.b && !0 }, wa.Da = function() { return this.T }, (wa = nc.prototype).Ia = null, wa.pb = function() {}, wa.ob = function() {}, wa.nb = function() {}, wa.mb = function() {}, wa.yc = function() {}, wa.$c = function(t) { return t }, rc.prototype.a = function(t, e) { return new ic(t, e) }, qa(ic, Bs), (wa = ic.prototype).addEventListener = function(t, e, n, r) { ic.S.addEventListener.call(this, t, e, n, r) }, wa.removeEventListener = function(t, e, n, r) { ic.S.removeEventListener.call(this, t, e, n, r) }, wa.Yc = function() { this.a.jc(this.f), this.l && this.a.Rd(), this.a.bd(this.o, this.g, this.b || void 0) }, wa.close = function() { this.a.Qa() }, wa.Zc = function(t) { if (Ca(t)) { var e = {};
            e.__data__ = t, this.a.Xa(e) } else this.h ? ((e = {}).__data__ = js(t), this.a.Xa(e)) : this.a.Xa(t) }, wa.G = function() { this.a.jc(null), delete this.f, this.a.Qa(), delete this.a, ic.S.G.call(this) }, qa(oc, gu), qa(ac, vu), qa(sc, nc), sc.prototype.pb = function() { this.a.dispatchEvent("a") }, sc.prototype.ob = function(t) { this.a.dispatchEvent(new oc(t)) }, sc.prototype.nb = function(t) { this.a.dispatchEvent(new ac(t)) }, sc.prototype.mb = function() { this.a.dispatchEvent("b") }; var uc = Fa(function(t, e) {
        function n() {}
        n.prototype = t.prototype; var r = new n; return t.apply(r, Array.prototype.slice.call(arguments, 1)), r }, rc);
    rc.prototype.createWebChannel = rc.prototype.a, ic.prototype.send = ic.prototype.Zc, ic.prototype.open = ic.prototype.Yc, ic.prototype.close = ic.prototype.close, lu.NO_ERROR = 0, lu.TIMEOUT = 8, lu.HTTP_ERROR = 6, fu.COMPLETE = "complete", (du.EventType = mu).OPEN = "a", mu.CLOSE = "b", mu.ERROR = "c", mu.MESSAGE = "d", Bs.prototype.listen = Bs.prototype.Lb, Gu.prototype.listenOnce = Gu.prototype.Mb, Gu.prototype.getLastError = Gu.prototype.dd, Gu.prototype.getLastErrorCode = Gu.prototype.Db, Gu.prototype.getStatus = Gu.prototype.aa, Gu.prototype.getStatusText = Gu.prototype.Fb, Gu.prototype.getResponseJson = Gu.prototype.Nc, Gu.prototype.getResponseText = Gu.prototype.va, Gu.prototype.send = Gu.prototype.xa; var cc, hc, lc = { createWebChannelTransport: uc, ErrorCode: lu, EventType: fu, WebChannel: du, XhrIo: Gu },
        fc = lc.createWebChannelTransport,
        pc = lc.ErrorCode,
        dc = lc.EventType,
        yc = lc.WebChannel,
        mc = lc.XhrIo,
        gc = Mh.SDK_VERSION,
        vc = new cr("@firebase/firestore");

    function bc() { return vc.logLevel === ir.DEBUG ? cc.DEBUG : vc.logLevel === ir.SILENT ? cc.SILENT : cc.ERROR }

    function _c(t) { switch (t) {
            case cc.DEBUG:
                vc.logLevel = ir.DEBUG; break;
            case cc.ERROR:
                vc.logLevel = ir.ERROR; break;
            case cc.SILENT:
                vc.logLevel = ir.SILENT; break;
            default:
                vc.error("Firestore (" + gc + "): Invalid value passed to `setLogLevel`") } }

    function wc(t, e) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; if (vc.logLevel <= ir.DEBUG) { var i = n.map(Tc);
            vc.debug.apply(vc, ["Firestore (" + gc + ") [" + t + "]: " + e].concat(i)) } }

    function Ec(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; if (vc.logLevel <= ir.ERROR) { var r = e.map(Tc);
            vc.error.apply(vc, ["Firestore (" + gc + "): " + t].concat(r)) } }

    function Tc(e) { if ("string" == typeof e) return e; var t = Ic.getPlatform(); try { return t.formatJSON(e) } catch (t) { return e } }

    function Sc(t) { var e = "FIRESTORE (" + gc + ") INTERNAL ASSERTION FAILED: " + t; throw Ec(e), new Error(e) }

    function Cc(t, e) { t || Sc(e) }(hc = cc || (cc = {}))[hc.DEBUG = 0] = "DEBUG", hc[hc.ERROR = 1] = "ERROR", hc[hc.SILENT = 2] = "SILENT"; var Ic = function() {
        function e() {} return e.setPlatform = function(t) { e.platform && Sc("Platform already defined"), e.platform = t }, e.getPlatform = function() { return e.platform || Sc("Platform not set"), e.platform }, e }();

    function Nc() { return Ic.getPlatform().emptyByteString } var Dc = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" },
        Ac = function(r) {
            function t(t, e) { var n = r.call(this, e) || this; return n.code = t, n.message = e, n.name = "FirebaseError", n.toString = function() { return n.name + ": [code=" + n.code + "]: " + n.message }, n } return an(t, r), t }(Error);

    function kc(t, e) {
        function n() { var t = "This constructor is private."; throw e && (t += " ", t += e), new Ac(Dc.INVALID_ARGUMENT, t) } for (var r in n.prototype = t.prototype, t) t.hasOwnProperty(r) && (n[r] = t[r]); return n }

    function Rc(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

    function Oc(t, e) { return void 0 !== t ? t : e }

    function Pc(t, e) { for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) { var r = Number(n);
                isNaN(r) || e(r, t[n]) } }

    function Mc(t, e) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]) }

    function Lc(t) { for (var e in Cc(null != t && "object" == typeof t, "isEmpty() expects object parameter."), t)
            if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0 }

    function xc(t, e, n) { if (e.length !== n) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires " + $c(n, "argument") + ", but was called with " + $c(e.length, "argument") + ".") }

    function Fc(t, e, n) { if (e.length < n) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires at least " + $c(n, "argument") + ", but was called with " + $c(e.length, "argument") + ".") }

    function Uc(t, e, n, r) { if (e.length < n || e.length > r) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + $c(e.length, "argument") + ".") }

    function qc(t, e, n, r) { Qc(t, e, Jc(n) + " argument", r) }

    function Vc(t, e, n, r) { void 0 !== r && qc(t, e, n, r) }

    function Bc(t, e, n, r) { Qc(t, e, n + " option", r) }

    function jc(t, e, n, r) { void 0 !== r && Bc(t, e, n, r) }

    function Wc(t, e, n, r, i) { void 0 !== r && function(t, e, n, r, i) { if (!(r instanceof Array)) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + zc(r)); for (var o = 0; o < r.length; ++o)
                if (!i(r[o])) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + zc(r[o])) }(t, e, n, r, i) }

    function Kc(t, e, n, r, i) { void 0 !== r && function(t, e, n, r, i) { for (var o = [], a = 0, s = i; a < s.length; a++) { var u = s[a]; if (u === r) return;
                o.push(zc(u)) } var c = zc(r); throw new Ac(Dc.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", ")) }(t, 0, n, r, i) }

    function Qc(t, e, n, r) { if (!("object" === e ? Hc(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) { var i = zc(r); throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i) } }

    function Hc(t) { return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t)) }

    function zc(t) { if (void 0 === t) return "undefined"; if (null === t) return "null"; if ("string" == typeof t) return 20 < t.length && (t = t.substring(0, 20) + "..."), JSON.stringify(t); if ("number" == typeof t || "boolean" == typeof t) return "" + t; if ("object" != typeof t) return "function" == typeof t ? "a function" : Sc("Unknown wrong type: " + typeof t); if (t instanceof Array) return "an array"; var e = function(t) { if (t.constructor) { var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString()); if (e && 1 < e.length) return e[1] } return null }(t); return e ? "a custom " + e + " object" : "an object" }

    function Gc(t, e, n) { if (void 0 === n) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Jc(e) + " argument, but it was undefined.") }

    function Yc(n, t, r) { Mc(t, function(t, e) { if (r.indexOf(t) < 0) throw new Ac(Dc.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + n + "(). Available options: " + r.join(", ")) }) }

    function Xc(t, e, n, r) { var i = zc(r); return new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires its " + Jc(n) + " argument to be a " + e + ", but it was: " + i) }

    function Jc(t) { switch (t) {
            case 1:
                return "first";
            case 2:
                return "second";
            case 3:
                return "third";
            default:
                return t + "th" } }

    function $c(t, e) { return t + " " + e + (1 === t ? "" : "s") } var Zc = function() {
        function t() {} return t.newId = function() { for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length)); return Cc(20 === e.length, "Invalid auto ID: " + e), e }, t }();

    function th(t, e) { return t < e ? -1 : e < t ? 1 : 0 }

    function eh(t, e) { if (t.length !== e.length) return !1; for (var n = 0; n < t.length; n++)
            if (!t[n].isEqual(e[n])) return !1;
        return !0 }

    function nh() { if ("undefined" == typeof Uint8Array) throw new Ac(Dc.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.") }

    function rh() { if (!Ic.getPlatform().base64Available) throw new Ac(Dc.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.") } var ih, oh, ah, sh, uh = function() {
            function e(t) { rh(), this._binaryString = t } return e.fromBase64String = function(t) { xc("Blob.fromBase64String", arguments, 1), qc("Blob.fromBase64String", "string", 1, t), rh(); try { return new e(Ic.getPlatform().atob(t)) } catch (t) { throw new Ac(Dc.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t) } }, e.fromUint8Array = function(t) { if (xc("Blob.fromUint8Array", arguments, 1), nh(), !(t instanceof Uint8Array)) throw Xc("Blob.fromUint8Array", "Uint8Array", 1, t); return new e(Array.prototype.map.call(t, function(t) { return String.fromCharCode(t) }).join("")) }, e.prototype.toBase64 = function() { return xc("Blob.toBase64", arguments, 0), rh(), Ic.getPlatform().btoa(this._binaryString) }, e.prototype.toUint8Array = function() { xc("Blob.toUint8Array", arguments, 0), nh(); for (var t = new Uint8Array(this._binaryString.length), e = 0; e < this._binaryString.length; e++) t[e] = this._binaryString.charCodeAt(e); return t }, e.prototype.toString = function() { return "Blob(base64: " + this.toBase64() + ")" }, e.prototype.isEqual = function(t) { return this._binaryString === t._binaryString }, e.prototype._compareTo = function(t) { return th(this._binaryString, t._binaryString) }, e }(),
        ch = kc(uh, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
        hh = function() {
            function t(t, e) { if (xc("GeoPoint", arguments, 2), qc("GeoPoint", "number", 1, t), qc("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || 90 < t) throw new Ac(Dc.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t); if (!isFinite(e) || e < -180 || 180 < e) throw new Ac(Dc.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                this._lat = t, this._long = e } return Object.defineProperty(t.prototype, "latitude", { get: function() { return this._lat }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "longitude", { get: function() { return this._long }, enumerable: !0, configurable: !0 }), t.prototype.isEqual = function(t) { return this._lat === t._lat && this._long === t._long }, t.prototype._compareTo = function(t) { return th(this._lat, t._lat) || th(this._long, t._long) }, t }(),
        lh = function() {
            function n(t, e) { if (this.seconds = t, (this.nanoseconds = e) < 0) throw new Ac(Dc.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (1e9 <= e) throw new Ac(Dc.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (t < -62135596800) throw new Ac(Dc.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); if (253402300800 <= t) throw new Ac(Dc.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t) } return n.now = function() { return n.fromMillis(Date.now()) }, n.fromDate = function(t) { return n.fromMillis(t.getTime()) }, n.fromMillis = function(t) { var e = Math.floor(t / 1e3); return new n(e, 1e6 * (t - 1e3 * e)) }, n.prototype.toDate = function() { return new Date(this.toMillis()) }, n.prototype.toMillis = function() { return 1e3 * this.seconds + this.nanoseconds / 1e6 }, n.prototype._compareTo = function(t) { return this.seconds === t.seconds ? th(this.nanoseconds, t.nanoseconds) : th(this.seconds, t.seconds) }, n.prototype.isEqual = function(t) { return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds }, n.prototype.toString = function() { return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")" }, n }(),
        fh = function(t, e, n, r) { this.databaseId = t, this.persistenceKey = e, this.host = n, this.ssl = r },
        ph = "(default)",
        dh = function() {
            function e(t, e) { this.projectId = t, this.database = e || ph } return Object.defineProperty(e.prototype, "isDefaultDatabase", { get: function() { return this.database === ph }, enumerable: !0, configurable: !0 }), e.prototype.isEqual = function(t) { return t instanceof e && t.projectId === this.projectId && t.database === this.database }, e.prototype.compareTo = function(t) { return th(this.projectId, t.projectId) || th(this.database, t.database) }, e }(),
        yh = "__name__",
        mh = function() {
            function n(t, e, n) { this.init(t, e, n) } return n.prototype.init = function(t, e, n) { void 0 === e ? e = 0 : e > t.length && Sc("offset " + e + " out of range " + t.length), void 0 === n ? n = t.length - e : n > t.length - e && Sc("length " + n + " out of range " + (t.length - e)), this.segments = t, this.offset = e, this.len = n }, n.prototype.construct = function(t, e, n) { var r = Object.create(Object.getPrototypeOf(this)); return r.init(t, e, n), r }, Object.defineProperty(n.prototype, "length", { get: function() { return this.len }, enumerable: !0, configurable: !0 }), n.prototype.isEqual = function(t) { return 0 === n.comparator(this, t) }, n.prototype.child = function(t) { var e = this.segments.slice(this.offset, this.limit()); return t instanceof n ? t.forEach(function(t) { e.push(t) }) : "string" == typeof t ? e.push(t) : Sc("Unknown parameter type for Path.child(): " + t), this.construct(e) }, n.prototype.limit = function() { return this.offset + this.length }, n.prototype.popFirst = function(t) { return t = void 0 === t ? 1 : t, Cc(this.length >= t, "Can't call popFirst() with less segments"), this.construct(this.segments, this.offset + t, this.length - t) }, n.prototype.popLast = function() { return Cc(!this.isEmpty(), "Can't call popLast() on empty path"), this.construct(this.segments, this.offset, this.length - 1) }, n.prototype.firstSegment = function() { return Cc(!this.isEmpty(), "Can't call firstSegment() on empty path"), this.segments[this.offset] }, n.prototype.lastSegment = function() { return Cc(!this.isEmpty(), "Can't call lastSegment() on empty path"), this.segments[this.limit() - 1] }, n.prototype.get = function(t) { return Cc(t < this.length, "Index out of range"), this.segments[this.offset + t] }, n.prototype.isEmpty = function() { return 0 === this.length }, n.prototype.isPrefixOf = function(t) { if (t.length < this.length) return !1; for (var e = 0; e < this.length; e++)
                    if (this.get(e) !== t.get(e)) return !1;
                return !0 }, n.prototype.isImmediateParentOf = function(t) { if (this.length + 1 !== t.length) return !1; for (var e = 0; e < this.length; e++)
                    if (this.get(e) !== t.get(e)) return !1;
                return !0 }, n.prototype.forEach = function(t) { for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]) }, n.prototype.toArray = function() { return this.segments.slice(this.offset, this.limit()) }, n.comparator = function(t, e) { for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) { var i = t.get(r),
                        o = e.get(r); if (i < o) return -1; if (o < i) return 1 } return t.length < e.length ? -1 : t.length > e.length ? 1 : 0 }, n }(),
        gh = function(t) {
            function e() { return null !== t && t.apply(this, arguments) || this } return an(e, t), e.prototype.canonicalString = function() { return this.toArray().join("/") }, e.prototype.toString = function() { return this.canonicalString() }, e.fromString = function(t) { if (0 <= t.indexOf("//")) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them."); return new e(t.split("/").filter(function(t) { return 0 < t.length })) }, e.EMPTY_PATH = new e([]), e }(mh),
        vh = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        bh = function(t) {
            function u() { return null !== t && t.apply(this, arguments) || this } return an(u, t), u.isValidIdentifier = function(t) { return vh.test(t) }, u.prototype.canonicalString = function() { return this.toArray().map(function(t) { return t = t.replace("\\", "\\\\").replace("`", "\\`"), u.isValidIdentifier(t) || (t = "`" + t + "`"), t }).join(".") }, u.prototype.toString = function() { return this.canonicalString() }, u.prototype.isKeyField = function() { return 1 === this.length && this.get(0) === yh }, u.keyField = function() { return new u([yh]) }, u.fromServerFormat = function(t) { for (var e = [], n = "", r = 0, i = function() { if (0 === n.length) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                        e.push(n), n = "" }, o = !1; r < t.length;) { var a = t[r]; if ("\\" === a) { if (r + 1 === t.length) throw new Ac(Dc.INVALID_ARGUMENT, "Path has trailing escape character: " + t); var s = t[r + 1]; if ("\\" !== s && "." !== s && "`" !== s) throw new Ac(Dc.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                        n += s, r += 2 } else "`" === a ? o = !o : "." !== a || o ? n += a : i(), r++ } if (i(), o) throw new Ac(Dc.INVALID_ARGUMENT, "Unterminated ` in path: " + t); return new u(e) }, u.EMPTY_PATH = new u([]), u }(mh),
        _h = function() {
            function e(t) { this.path = t, Cc(e.isDocumentKey(t), "Invalid DocumentKey with an odd number of segments: " + t.toArray().join("/")) } return e.prototype.isEqual = function(t) { return null !== t && 0 === gh.comparator(this.path, t.path) }, e.prototype.toString = function() { return this.path.toString() }, e.comparator = function(t, e) { return gh.comparator(t.path, e.path) }, e.isDocumentKey = function(t) { return t.length % 2 == 0 }, e.fromSegments = function(t) { return new e(new gh(t.slice())) }, e.fromPathString = function(t) { return new e(gh.fromString(t)) }, e.EMPTY = new e(new gh([])), e }(),
        wh = function() {
            function t(t, e) { this.key = t, this.version = e } return t.compareByKey = function(t, e) { return _h.comparator(t.key, e.key) }, t }(),
        Eh = function(a) {
            function e(t, e, n, r, i) { var o = a.call(this, t, e) || this; return o.data = n, o.proto = i, o.hasLocalMutations = !!r.hasLocalMutations, o.hasCommittedMutations = !!r.hasCommittedMutations, o } return an(e, a), e.prototype.field = function(t) { return this.data.field(t) }, e.prototype.fieldValue = function(t) { var e = this.field(t); return e ? e.value() : void 0 }, e.prototype.value = function() { return this.data.value() }, e.prototype.isEqual = function(t) { return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.data.isEqual(t.data) && this.hasLocalMutations === t.hasLocalMutations && this.hasCommittedMutations === t.hasCommittedMutations }, e.prototype.toString = function() { return "Document(" + this.key + ", " + this.version + ", " + this.data.toString() + ", {hasLocalMutations: " + this.hasLocalMutations + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})" }, Object.defineProperty(e.prototype, "hasPendingWrites", { get: function() { return this.hasLocalMutations || this.hasCommittedMutations }, enumerable: !0, configurable: !0 }), e.compareByField = function(t, e, n) { var r = e.field(t),
                    i = n.field(t); return void 0 !== r && void 0 !== i ? r.compareTo(i) : Sc("Trying to compare documents on fields that don't exist") }, e }(wh),
        Th = function(i) {
            function e(t, e, n) { var r = i.call(this, t, e) || this; return r.hasCommittedMutations = !(!n || !n.hasCommittedMutations), r } return an(e, i), e.prototype.toString = function() { return "NoDocument(" + this.key + ", " + this.version + ")" }, Object.defineProperty(e.prototype, "hasPendingWrites", { get: function() { return this.hasCommittedMutations }, enumerable: !0, configurable: !0 }), e.prototype.isEqual = function(t) { return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key) }, e }(wh),
        Sh = function(n) {
            function e(t, e) { return n.call(this, t, e) || this } return an(e, n), e.prototype.toString = function() { return "UnknownDocument(" + this.key + ", " + this.version + ")" }, Object.defineProperty(e.prototype, "hasPendingWrites", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), e.prototype.isEqual = function(t) { return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key) }, e }(wh),
        Ch = function() {
            function n(t, e) { this.comparator = t, this.root = e || Nh.EMPTY } return n.prototype.insert = function(t, e) { return new n(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, Nh.BLACK, null, null)) }, n.prototype.remove = function(t) { return new n(this.comparator, this.root.remove(t, this.comparator).copy(null, null, Nh.BLACK, null, null)) }, n.prototype.get = function(t) { for (var e = this.root; !e.isEmpty();) { var n = this.comparator(t, e.key); if (0 === n) return e.value;
                    n < 0 ? e = e.left : 0 < n && (e = e.right) } return null }, n.prototype.indexOf = function(t) { for (var e = 0, n = this.root; !n.isEmpty();) { var r = this.comparator(t, n.key); if (0 === r) return e + n.left.size;
                    n = r < 0 ? n.left : (e += n.left.size + 1, n.right) } return -1 }, n.prototype.isEmpty = function() { return this.root.isEmpty() }, Object.defineProperty(n.prototype, "size", { get: function() { return this.root.size }, enumerable: !0, configurable: !0 }), n.prototype.minKey = function() { return this.root.minKey() }, n.prototype.maxKey = function() { return this.root.maxKey() }, n.prototype.inorderTraversal = function(t) { return this.root.inorderTraversal(t) }, n.prototype.forEach = function(n) { this.inorderTraversal(function(t, e) { return n(t, e), !1 }) }, n.prototype.reverseTraversal = function(t) { return this.root.reverseTraversal(t) }, n.prototype.getIterator = function() { return new Ih(this.root, null, this.comparator, !1) }, n.prototype.getIteratorFrom = function(t) { return new Ih(this.root, t, this.comparator, !1) }, n.prototype.getReverseIterator = function() { return new Ih(this.root, null, this.comparator, !0) }, n.prototype.getReverseIteratorFrom = function(t) { return new Ih(this.root, t, this.comparator, !0) }, n }(),
        Ih = function() {
            function t(t, e, n, r) { this.isReverse = r, this.nodeStack = []; for (var i = 1; !t.isEmpty();)
                    if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                    else { if (0 === i) { this.nodeStack.push(t); break }
                        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left } } return t.prototype.getNext = function() { Cc(0 < this.nodeStack.length, "getNext() called on iterator when hasNext() is false."); var t = this.nodeStack.pop(),
                    e = { key: t.key, value: t.value }; if (this.isReverse)
                    for (t = t.left; !t.isEmpty();) this.nodeStack.push(t), t = t.right;
                else
                    for (t = t.right; !t.isEmpty();) this.nodeStack.push(t), t = t.left; return e }, t.prototype.hasNext = function() { return 0 < this.nodeStack.length }, t.prototype.peek = function() { if (0 === this.nodeStack.length) return null; var t = this.nodeStack[this.nodeStack.length - 1]; return { key: t.key, value: t.value } }, t }(),
        Nh = function() {
            function o(t, e, n, r, i) { this.key = t, this.value = e, this.color = null != n ? n : o.RED, this.left = null != r ? r : o.EMPTY, this.right = null != i ? i : o.EMPTY, this.size = this.left.size + 1 + this.right.size } return o.prototype.copy = function(t, e, n, r, i) { return new o(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right) }, o.prototype.isEmpty = function() { return !1 }, o.prototype.inorderTraversal = function(t) { return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t) }, o.prototype.reverseTraversal = function(t) { return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t) }, o.prototype.min = function() { return this.left.isEmpty() ? this : this.left.min() }, o.prototype.minKey = function() { return this.min().key }, o.prototype.maxKey = function() { return this.right.isEmpty() ? this.key : this.right.maxKey() }, o.prototype.insert = function(t, e, n) { var r = this,
                    i = n(t, r.key); return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp() }, o.prototype.removeMin = function() { if (this.left.isEmpty()) return o.EMPTY; var t = this; return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp() }, o.prototype.remove = function(t, e) { var n, r = this; if (e(t, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(t, e), null);
                else { if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === e(t, r.key)) { if (r.right.isEmpty()) return o.EMPTY;
                        n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin()) }
                    r = r.copy(null, null, null, null, r.right.remove(t, e)) } return r.fixUp() }, o.prototype.isRed = function() { return this.color }, o.prototype.fixUp = function() { var t = this; return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t }, o.prototype.moveRedLeft = function() { var t = this.colorFlip(); return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), t }, o.prototype.moveRedRight = function() { var t = this.colorFlip(); return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t }, o.prototype.rotateLeft = function() { var t = this.copy(null, null, o.RED, null, this.right.left); return this.right.copy(null, null, this.color, t, null) }, o.prototype.rotateRight = function() { var t = this.copy(null, null, o.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, t) }, o.prototype.colorFlip = function() { var t = this.left.copy(null, null, !this.left.color, null, null),
                    e = this.right.copy(null, null, !this.right.color, null, null); return this.copy(null, null, !this.color, t, e) }, o.prototype.checkMaxDepth = function() { var t = this.check(); return Math.pow(2, t) <= this.size + 1 }, o.prototype.check = function() { if (this.isRed() && this.left.isRed()) throw Sc("Red node has red child(" + this.key + "," + this.value + ")"); if (this.right.isRed()) throw Sc("Right child of (" + this.key + "," + this.value + ") is red"); var t = this.left.check(); if (t !== this.right.check()) throw Sc("Black depths differ"); return t + (this.isRed() ? 0 : 1) }, o.EMPTY = null, o.RED = !0, o.BLACK = !1, o }(),
        Dh = function() {
            function t() { this.size = 0 } return t.prototype.copy = function(t, e, n, r, i) { return this }, t.prototype.insert = function(t, e, n) { return new Nh(t, e) }, t.prototype.remove = function(t, e) { return this }, t.prototype.isEmpty = function() { return !0 }, t.prototype.inorderTraversal = function(t) { return !1 }, t.prototype.reverseTraversal = function(t) { return !1 }, t.prototype.minKey = function() { return null }, t.prototype.maxKey = function() { return null }, t.prototype.isRed = function() { return !1 }, t.prototype.checkMaxDepth = function() { return !0 }, t.prototype.check = function() { return 0 }, t }();
    Nh.EMPTY = new Dh, (oh = ih || (ih = {}))[oh.NullValue = 0] = "NullValue", oh[oh.BooleanValue = 1] = "BooleanValue", oh[oh.NumberValue = 2] = "NumberValue", oh[oh.TimestampValue = 3] = "TimestampValue", oh[oh.StringValue = 4] = "StringValue", oh[oh.BlobValue = 5] = "BlobValue", oh[oh.RefValue = 6] = "RefValue", oh[oh.GeoPointValue = 7] = "GeoPointValue", oh[oh.ArrayValue = 8] = "ArrayValue", oh[oh.ObjectValue = 9] = "ObjectValue", (sh = ah || (ah = {}))[sh.Default = 0] = "Default", sh[sh.Estimate = 1] = "Estimate", sh[sh.Previous = 2] = "Previous"; var Ah = function() {
            function n(t, e) { this.serverTimestampBehavior = t, this.timestampsInSnapshots = e } return n.fromSnapshotOptions = function(t, e) { switch (t.serverTimestamps) {
                    case "estimate":
                        return new n(ah.Estimate, e);
                    case "previous":
                        return new n(ah.Previous, e);
                    case "none":
                    case void 0:
                        return new n(ah.Default, e);
                    default:
                        return Sc("fromSnapshotOptions() called with invalid options.") } }, n }(),
        kh = function() {
            function t() {} return t.prototype.toString = function() { var t = this.value(); return null === t ? "null" : t.toString() }, t.prototype.defaultCompareTo = function(t) { return Cc(this.typeOrder !== t.typeOrder, "Default compareTo should not be used for values of same type."), th(this.typeOrder, t.typeOrder) }, t }(),
        Rh = function(e) {
            function n() { var t = e.call(this) || this; return t.typeOrder = ih.NullValue, t.internalValue = null, t } return an(n, e), n.prototype.value = function(t) { return null }, n.prototype.isEqual = function(t) { return t instanceof n }, n.prototype.compareTo = function(t) { return t instanceof n ? 0 : this.defaultCompareTo(t) }, n.INSTANCE = new n, n }(kh),
        Oh = function(n) {
            function e(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.BooleanValue, e } return an(e, n), e.prototype.value = function(t) { return this.internalValue }, e.prototype.isEqual = function(t) { return t instanceof e && this.internalValue === t.internalValue }, e.prototype.compareTo = function(t) { return t instanceof e ? th(this, t) : this.defaultCompareTo(t) }, e.of = function(t) { return t ? e.TRUE : e.FALSE }, e.TRUE = new e(!0), e.FALSE = new e(!1), e }(kh),
        Ph = function(n) {
            function r(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.NumberValue, e } return an(r, n), r.prototype.value = function(t) { return this.internalValue }, r.prototype.compareTo = function(t) { return t instanceof r ? (e = this.internalValue, n = t.internalValue, e < n ? -1 : n < e ? 1 : e === n ? 0 : isNaN(e) ? isNaN(n) ? 0 : -1 : 1) : this.defaultCompareTo(t); var e, n }, r }(kh);

    function Lh(t, e) { return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e } var xh = function(e) {
            function n(t) { return e.call(this, t) || this } return an(n, e), n.prototype.isEqual = function(t) { return t instanceof n && Lh(this.internalValue, t.internalValue) }, n }(Ph),
        Fh = function(n) {
            function e(t) { var e = n.call(this, t) || this; return e.internalValue = t, e } return an(e, n), e.prototype.isEqual = function(t) { return t instanceof e && Lh(this.internalValue, t.internalValue) }, e.NAN = new e(NaN), e.POSITIVE_INFINITY = new e(1 / 0), e.NEGATIVE_INFINITY = new e(-1 / 0), e }(Ph),
        Uh = function(n) {
            function e(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.StringValue, e } return an(e, n), e.prototype.value = function(t) { return this.internalValue }, e.prototype.isEqual = function(t) { return t instanceof e && this.internalValue === t.internalValue }, e.prototype.compareTo = function(t) { return t instanceof e ? th(this.internalValue, t.internalValue) : this.defaultCompareTo(t) }, e }(kh),
        qh = function(n) {
            function e(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.TimestampValue, e } return an(e, n), e.prototype.value = function(t) { return !t || t.timestampsInSnapshots ? this.internalValue : this.internalValue.toDate() }, e.prototype.isEqual = function(t) { return t instanceof e && this.internalValue.isEqual(t.internalValue) }, e.prototype.compareTo = function(t) { return t instanceof e ? this.internalValue._compareTo(t.internalValue) : t instanceof Vh ? -1 : this.defaultCompareTo(t) }, e }(kh),
        Vh = function(r) {
            function e(t, e) { var n = r.call(this) || this; return n.localWriteTime = t, n.previousValue = e, n.typeOrder = ih.TimestampValue, n } return an(e, r), e.prototype.value = function(t) { return t && t.serverTimestampBehavior === ah.Estimate ? new qh(this.localWriteTime).value(t) : t && t.serverTimestampBehavior === ah.Previous && this.previousValue ? this.previousValue.value(t) : null }, e.prototype.isEqual = function(t) { return t instanceof e && this.localWriteTime.isEqual(t.localWriteTime) }, e.prototype.compareTo = function(t) { return t instanceof e ? this.localWriteTime._compareTo(t.localWriteTime) : t instanceof qh ? 1 : this.defaultCompareTo(t) }, e.prototype.toString = function() { return "<ServerTimestamp localTime=" + this.localWriteTime.toString() + ">" }, e }(kh),
        Bh = function(n) {
            function e(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.BlobValue, e } return an(e, n), e.prototype.value = function(t) { return this.internalValue }, e.prototype.isEqual = function(t) { return t instanceof e && this.internalValue.isEqual(t.internalValue) }, e.prototype.compareTo = function(t) { return t instanceof e ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t) }, e }(kh),
        jh = function(r) {
            function n(t, e) { var n = r.call(this) || this; return n.databaseId = t, n.key = e, n.typeOrder = ih.RefValue, n } return an(n, r), n.prototype.value = function(t) { return this.key }, n.prototype.isEqual = function(t) { return t instanceof n && (this.key.isEqual(t.key) && this.databaseId.isEqual(t.databaseId)) }, n.prototype.compareTo = function(t) { if (t instanceof n) { var e = this.databaseId.compareTo(t.databaseId); return 0 !== e ? e : _h.comparator(this.key, t.key) } return this.defaultCompareTo(t) }, n }(kh),
        Wh = function(n) {
            function e(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.GeoPointValue, e } return an(e, n), e.prototype.value = function(t) { return this.internalValue }, e.prototype.isEqual = function(t) { return t instanceof e && this.internalValue.isEqual(t.internalValue) }, e.prototype.compareTo = function(t) { return t instanceof e ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t) }, e }(kh),
        Kh = function(n) {
            function a(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.ObjectValue, e } return an(a, n), a.prototype.value = function(n) { var r = {}; return this.internalValue.inorderTraversal(function(t, e) { r[t] = e.value(n) }), r }, a.prototype.forEach = function(t) { this.internalValue.inorderTraversal(t) }, a.prototype.isEqual = function(t) { if (t instanceof a) { for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) { var r = e.getNext(),
                            i = n.getNext(); if (r.key !== i.key || !r.value.isEqual(i.value)) return !1 } return !e.hasNext() && !n.hasNext() } return !1 }, a.prototype.compareTo = function(t) { if (t instanceof a) { for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) { var r = e.getNext(),
                            i = n.getNext(),
                            o = th(r.key, i.key) || r.value.compareTo(i.value); if (o) return o } return th(e.hasNext(), n.hasNext()) } return this.defaultCompareTo(t) }, a.prototype.set = function(t, e) { if (Cc(!t.isEmpty(), "Cannot set field for empty path on ObjectValue"), 1 === t.length) return this.setChild(t.firstSegment(), e); var n = this.child(t.firstSegment());
                n instanceof a || (n = a.EMPTY); var r = n.set(t.popFirst(), e); return this.setChild(t.firstSegment(), r) }, a.prototype.delete = function(t) { if (Cc(!t.isEmpty(), "Cannot delete field for empty path on ObjectValue"), 1 === t.length) return new a(this.internalValue.remove(t.firstSegment())); var e = this.child(t.firstSegment()); if (e instanceof a) { var n = e.delete(t.popFirst()); return new a(this.internalValue.insert(t.firstSegment(), n)) } return this }, a.prototype.contains = function(t) { return void 0 !== this.field(t) }, a.prototype.field = function(t) { Cc(!t.isEmpty(), "Can't get field of empty path"); var e = this; return t.forEach(function(t) { e = e instanceof a && e.internalValue.get(t) || void 0 }), e }, a.prototype.toString = function() { return JSON.stringify(this.value()) }, a.prototype.child = function(t) { return this.internalValue.get(t) || void 0 }, a.prototype.setChild = function(t, e) { return new a(this.internalValue.insert(t, e)) }, a.EMPTY = new a(new Ch(th)), a }(kh),
        Qh = function(n) {
            function i(t) { var e = n.call(this) || this; return e.internalValue = t, e.typeOrder = ih.ArrayValue, e } return an(i, n), i.prototype.value = function(e) { return this.internalValue.map(function(t) { return t.value(e) }) }, i.prototype.forEach = function(t) { this.internalValue.forEach(t) }, i.prototype.isEqual = function(t) { if (t instanceof i) { if (this.internalValue.length !== t.internalValue.length) return !1; for (var e = 0; e < this.internalValue.length; e++)
                        if (!this.internalValue[e].isEqual(t.internalValue[e])) return !1;
                    return !0 } return !1 }, i.prototype.compareTo = function(t) { if (t instanceof i) { for (var e = Math.min(this.internalValue.length, t.internalValue.length), n = 0; n < e; n++) { var r = this.internalValue[n].compareTo(t.internalValue[n]); if (r) return r } return th(this.internalValue.length, t.internalValue.length) } return this.defaultCompareTo(t) }, i.prototype.toString = function() { return JSON.stringify(this.value()) }, i }(kh),
        Hh = Number,
        zh = Hh.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1),
        Gh = Hh.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
        Yh = Hh.isInteger || function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t };

    function Xh(t) { return null == t }

    function Jh(t) { return Yh(t) && t <= Gh && zh <= t } var $h, Zh, tl = function() {
            function n(t, e, n, r, i, o) { void 0 === e && (e = []), void 0 === n && (n = []), void 0 === r && (r = null), void 0 === i && (i = null), void 0 === o && (o = null), this.path = t, this.explicitOrderBy = e, this.filters = n, this.limit = r, this.startAt = i, this.endAt = o, this.memoizedCanonicalId = null, this.memoizedOrderBy = null, this.startAt && this.assertValidBound(this.startAt), this.endAt && this.assertValidBound(this.endAt) } return n.atPath = function(t) { return new n(t) }, Object.defineProperty(n.prototype, "orderBy", { get: function() { if (null === this.memoizedOrderBy) { var t = this.getInequalityFilterField(),
                            e = this.getFirstOrderByField(); if (null !== t && null === e) t.isKeyField() ? this.memoizedOrderBy = [cl] : this.memoizedOrderBy = [new ul(t), cl];
                        else { Cc(null === t || null !== e && t.isEqual(e), "First orderBy should match inequality field."); for (var n = !(this.memoizedOrderBy = []), r = 0, i = this.explicitOrderBy; r < i.length; r++) { var o = i[r];
                                this.memoizedOrderBy.push(o), o.field.isKeyField() && (n = !0) } if (!n) { var a = 0 < this.explicitOrderBy.length ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir : al.ASCENDING;
                                this.memoizedOrderBy.push(a === al.ASCENDING ? cl : hl) } } } return this.memoizedOrderBy }, enumerable: !0, configurable: !0 }), n.prototype.addFilter = function(t) { Cc(null == this.getInequalityFilterField() || !(t instanceof rl) || !t.isInequality() || t.field.isEqual(this.getInequalityFilterField()), "Query must only have one inequality field."), Cc(!_h.isDocumentKey(this.path), "No filtering allowed for document query"); var e = this.filters.concat([t]); return new n(this.path, this.explicitOrderBy.slice(), e, this.limit, this.startAt, this.endAt) }, n.prototype.addOrderBy = function(t) { Cc(!_h.isDocumentKey(this.path), "No ordering allowed for document query"), Cc(!this.startAt && !this.endAt, "Bounds must be set after orderBy"); var e = this.explicitOrderBy.concat([t]); return new n(this.path, e, this.filters.slice(), this.limit, this.startAt, this.endAt) }, n.prototype.withLimit = function(t) { return new n(this.path, this.explicitOrderBy.slice(), this.filters.slice(), t, this.startAt, this.endAt) }, n.prototype.withStartAt = function(t) { return new n(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, t, this.endAt) }, n.prototype.withEndAt = function(t) { return new n(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, t) }, n.prototype.canonicalId = function() { if (null === this.memoizedCanonicalId) { var t = this.path.canonicalString();
                    t += "|f:"; for (var e = 0, n = this.filters; e < n.length; e++) { t += n[e].canonicalId(), t += "," }
                    t += "|ob:"; for (var r = 0, i = this.orderBy; r < i.length; r++) { t += i[r].canonicalId(), t += "," }
                    Xh(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.memoizedCanonicalId = t } return this.memoizedCanonicalId }, n.prototype.toString = function() { var t = "Query(" + this.path.canonicalString(); return 0 < this.filters.length && (t += ", filters: [" + this.filters.join(", ") + "]"), Xh(this.limit) || (t += ", limit: " + this.limit), 0 < this.explicitOrderBy.length && (t += ", orderBy: [" + this.explicitOrderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), t + ")" }, n.prototype.isEqual = function(t) { if (this.limit !== t.limit) return !1; if (this.orderBy.length !== t.orderBy.length) return !1; for (var e = 0; e < this.orderBy.length; e++)
                    if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
                if (this.filters.length !== t.filters.length) return !1; for (e = 0; e < this.filters.length; e++)
                    if (!this.filters[e].isEqual(t.filters[e])) return !1;
                return !!this.path.isEqual(t.path) && (!(null !== this.startAt ? !this.startAt.isEqual(t.startAt) : null !== t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)) }, n.prototype.docComparator = function(t, e) { for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) { var o = i[r],
                        a = o.compare(t, e); if (0 !== a) return a;
                    n = n || o.field.isKeyField() } return Cc(n, "orderBy used that doesn't compare on key field"), 0 }, n.prototype.matches = function(t) { return this.matchesAncestor(t) && this.matchesOrderBy(t) && this.matchesFilters(t) && this.matchesBounds(t) }, n.prototype.hasLimit = function() { return !Xh(this.limit) }, n.prototype.getFirstOrderByField = function() { return 0 < this.explicitOrderBy.length ? this.explicitOrderBy[0].field : null }, n.prototype.getInequalityFilterField = function() { for (var t = 0, e = this.filters; t < e.length; t++) { var n = e[t]; if (n instanceof rl && n.isInequality()) return n.field } return null }, n.prototype.hasArrayContainsFilter = function() { return void 0 !== this.filters.find(function(t) { return t instanceof rl && t.op === nl.ARRAY_CONTAINS }) }, n.prototype.isDocumentQuery = function() { return _h.isDocumentKey(this.path) && 0 === this.filters.length }, n.prototype.matchesAncestor = function(t) { var e = t.key.path; return _h.isDocumentKey(this.path) ? this.path.isEqual(e) : this.path.isPrefixOf(e) && this.path.length === e.length - 1 }, n.prototype.matchesOrderBy = function(t) { for (var e = 0, n = this.explicitOrderBy; e < n.length; e++) { var r = n[e]; if (!r.field.isKeyField() && void 0 === t.field(r.field)) return !1 } return !0 }, n.prototype.matchesFilters = function(t) { for (var e = 0, n = this.filters; e < n.length; e++) { if (!n[e].matches(t)) return !1 } return !0 }, n.prototype.matchesBounds = function(t) { return !(this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, t)) && (!this.endAt || !this.endAt.sortsBeforeDocument(this.orderBy, t)) }, n.prototype.assertValidBound = function(t) { Cc(t.position.length <= this.orderBy.length, "Bound is longer than orderBy") }, n }(),
        el = function() {
            function t() {} return t.create = function(t, e, n) { if (n.isEqual(Rh.INSTANCE)) { if (e !== nl.EQUAL) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on null."); return new il(t) } if (n.isEqual(Fh.NAN)) { if (e !== nl.EQUAL) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on NaN."); return new ol(t) } return new rl(t, e, n) }, t }(),
        nl = function() {
            function e(t) { this.name = t } return e.fromString = function(t) { switch (t) {
                    case "<":
                        return e.LESS_THAN;
                    case "<=":
                        return e.LESS_THAN_OR_EQUAL;
                    case "==":
                        return e.EQUAL;
                    case ">=":
                        return e.GREATER_THAN_OR_EQUAL;
                    case ">":
                        return e.GREATER_THAN;
                    case "array-contains":
                        return e.ARRAY_CONTAINS;
                    default:
                        return Sc("Unknown relation: " + t) } }, e.prototype.toString = function() { return this.name }, e.prototype.isEqual = function(t) { return this.name === t.name }, e.LESS_THAN = new e("<"), e.LESS_THAN_OR_EQUAL = new e("<="), e.EQUAL = new e("=="), e.GREATER_THAN = new e(">"), e.GREATER_THAN_OR_EQUAL = new e(">="), e.ARRAY_CONTAINS = new e("array-contains"), e }(),
        rl = function(i) {
            function e(t, e, n) { var r = i.call(this) || this; return r.field = t, r.op = e, r.value = n, r } return an(e, i), e.prototype.matches = function(t) { if (this.field.isKeyField()) { Cc(this.value instanceof jh, "Comparing on key, but filter value not a RefValue"), Cc(this.op !== nl.ARRAY_CONTAINS, "array-contains queries don't make sense on document keys."); var e = this.value,
                        n = _h.comparator(t.key, e.key); return this.matchesComparison(n) } var r = t.field(this.field); return void 0 !== r && this.matchesValue(r) }, e.prototype.matchesValue = function(t) { var e = this; return this.op === nl.ARRAY_CONTAINS ? t instanceof Qh && void 0 !== t.internalValue.find(function(t) { return t.isEqual(e.value) }) : this.value.typeOrder === t.typeOrder && this.matchesComparison(t.compareTo(this.value)) }, e.prototype.matchesComparison = function(t) { switch (this.op) {
                    case nl.LESS_THAN:
                        return t < 0;
                    case nl.LESS_THAN_OR_EQUAL:
                        return t <= 0;
                    case nl.EQUAL:
                        return 0 === t;
                    case nl.GREATER_THAN:
                        return 0 < t;
                    case nl.GREATER_THAN_OR_EQUAL:
                        return 0 <= t;
                    default:
                        return Sc("Unknown relation op" + this.op) } }, e.prototype.isInequality = function() { return this.op !== nl.EQUAL && this.op !== nl.ARRAY_CONTAINS }, e.prototype.canonicalId = function() { return this.field.canonicalString() + this.op.toString() + this.value.toString() }, e.prototype.isEqual = function(t) { return t instanceof e && (this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value)) }, e.prototype.toString = function() { return this.field.canonicalString() + " " + this.op + " " + this.value.value() }, e }(el),
        il = function(n) {
            function e(t) { var e = n.call(this) || this; return e.field = t, e } return an(e, n), e.prototype.matches = function(t) { var e = t.field(this.field); return void 0 !== e && null === e.value() }, e.prototype.canonicalId = function() { return this.field.canonicalString() + " IS null" }, e.prototype.toString = function() { return this.field.canonicalString() + " IS null" }, e.prototype.isEqual = function(t) { return t instanceof e && this.field.isEqual(t.field) }, e }(el),
        ol = function(n) {
            function e(t) { var e = n.call(this) || this; return e.field = t, e } return an(e, n), e.prototype.matches = function(t) { var e = t.field(this.field),
                    n = e && e.value(); return "number" == typeof n && isNaN(n) }, e.prototype.canonicalId = function() { return this.field.canonicalString() + " IS NaN" }, e.prototype.toString = function() { return this.field.canonicalString() + " IS NaN" }, e.prototype.isEqual = function(t) { return t instanceof e && this.field.isEqual(t.field) }, e }(el),
        al = function() {
            function t(t) { this.name = t } return t.prototype.toString = function() { return this.name }, t.ASCENDING = new t("asc"), t.DESCENDING = new t("desc"), t }(),
        sl = function() {
            function t(t, e) { this.position = t, this.before = e } return t.prototype.canonicalId = function() { for (var t = this.before ? "b:" : "a:", e = 0, n = this.position; e < n.length; e++) { t += n[e].toString() } return t }, t.prototype.sortsBeforeDocument = function(t, e) { Cc(this.position.length <= t.length, "Bound has more components than query's orderBy"); for (var n = 0, r = 0; r < this.position.length; r++) { var i = t[r],
                        o = this.position[r]; if (i.field.isKeyField()) Cc(o instanceof jh, "Bound has a non-key value where the key path is being used."), n = _h.comparator(o.key, e.key);
                    else { var a = e.field(i.field);
                        Cc(void 0 !== a, "Field should exist since document matched the orderBy already."), n = o.compareTo(a) } if (i.dir === al.DESCENDING && (n *= -1), 0 !== n) break } return this.before ? n <= 0 : n < 0 }, t.prototype.isEqual = function(t) { if (null === t) return !1; if (this.before !== t.before || this.position.length !== t.position.length) return !1; for (var e = 0; e < this.position.length; e++) { var n = this.position[e],
                        r = t.position[e]; return n.isEqual(r) } return !0 }, t }(),
        ul = function() {
            function t(t, e) { this.field = t, void 0 === e && (e = al.ASCENDING), this.dir = e, this.isKeyOrderBy = t.isKeyField() } return t.prototype.compare = function(t, e) { var n = this.isKeyOrderBy ? Eh.compareByKey(t, e) : Eh.compareByField(this.field, t, e); switch (this.dir) {
                    case al.ASCENDING:
                        return n;
                    case al.DESCENDING:
                        return -1 * n;
                    default:
                        return Sc("Unknown direction: " + this.dir) } }, t.prototype.canonicalId = function() { return this.field.canonicalString() + this.dir.toString() }, t.prototype.toString = function() { return this.field.canonicalString() + " (" + this.dir + ")" }, t.prototype.isEqual = function(t) { return this.dir === t.dir && this.field.isEqual(t.field) }, t }(),
        cl = new ul(bh.keyField(), al.ASCENDING),
        hl = new ul(bh.keyField(), al.DESCENDING),
        ll = function() {
            function n(t) { this.timestamp = t } return n.fromMicroseconds = function(t) { var e = Math.floor(t / 1e6); return new n(new lh(e, t % 1e6 * 1e3)) }, n.fromTimestamp = function(t) { return new n(t) }, n.forDeletedDoc = function() { return n.MIN }, n.prototype.compareTo = function(t) { return this.timestamp._compareTo(t.timestamp) }, n.prototype.isEqual = function(t) { return this.timestamp.isEqual(t.timestamp) }, n.prototype.toMicroseconds = function() { return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3 }, n.prototype.toString = function() { return "SnapshotVersion(" + this.timestamp.toString() + ")" }, n.prototype.toTimestamp = function() { return this.timestamp }, n.MIN = new n(new lh(0, 0)), n }();
    (Zh = $h || ($h = {}))[Zh.Listen = 0] = "Listen", Zh[Zh.ExistenceFilterMismatch = 1] = "ExistenceFilterMismatch", Zh[Zh.LimboResolution = 2] = "LimboResolution"; var fl, pl, dl = function() {
            function e(t, e, n, r, i, o) { void 0 === i && (i = ll.MIN), void 0 === o && (o = Nc()), this.query = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.resumeToken = o } return e.prototype.copy = function(t) { return new e(this.query, this.targetId, this.purpose, void 0 === t.sequenceNumber ? this.sequenceNumber : t.sequenceNumber, void 0 === t.snapshotVersion ? this.snapshotVersion : t.snapshotVersion, void 0 === t.resumeToken ? this.resumeToken : t.resumeToken) }, e.prototype.isEqual = function(t) { return this.targetId === t.targetId && this.purpose === t.purpose && this.sequenceNumber === t.sequenceNumber && this.snapshotVersion.isEqual(t.snapshotVersion) && this.resumeToken === t.resumeToken && this.query.isEqual(t.query) }, e }(),
        yl = function() {
            function o(t) { this.comparator = t, this.data = new Ch(this.comparator) } return o.fromMapKeys = function(t) { var e = new o(t.comparator); return t.forEach(function(t) { e = e.add(t) }), e }, o.prototype.has = function(t) { return null !== this.data.get(t) }, o.prototype.first = function() { return this.data.minKey() }, o.prototype.last = function() { return this.data.maxKey() }, Object.defineProperty(o.prototype, "size", { get: function() { return this.data.size }, enumerable: !0, configurable: !0 }), o.prototype.indexOf = function(t) { return this.data.indexOf(t) }, o.prototype.forEach = function(n) { this.data.inorderTraversal(function(t, e) { return n(t), !1 }) }, o.prototype.forEachInRange = function(t, e) { for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) { var r = n.getNext(); if (0 <= this.comparator(r.key, t[1])) return;
                    e(r.key) } }, o.prototype.forEachWhile = function(t, e) { var n; for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();) { if (!t(n.getNext().key)) return } }, o.prototype.firstAfterOrEqual = function(t) { var e = this.data.getIteratorFrom(t); return e.hasNext() ? e.getNext().key : null }, o.prototype.getIterator = function() { return new ml(this.data.getIterator()) }, o.prototype.getIteratorFrom = function(t) { return new ml(this.data.getIteratorFrom(t)) }, o.prototype.add = function(t) { return this.copy(this.data.remove(t).insert(t, !0)) }, o.prototype.delete = function(t) { return this.has(t) ? this.copy(this.data.remove(t)) : this }, o.prototype.isEmpty = function() { return this.data.isEmpty() }, o.prototype.unionWith = function(t) { var e = this; return t.forEach(function(t) { e = e.add(t) }), e }, o.prototype.isEqual = function(t) { if (!(t instanceof o)) return !1; if (this.size !== t.size) return !1; for (var e = this.data.getIterator(), n = t.data.getIterator(); e.hasNext();) { var r = e.getNext().key,
                        i = n.getNext().key; if (0 !== this.comparator(r, i)) return !1 } return !0 }, o.prototype.toArray = function() { var e = []; return this.forEach(function(t) { e.push(t) }), e }, o.prototype.toString = function() { var e = []; return this.forEach(function(t) { return e.push(t) }), "SortedSet(" + e.toString() + ")" }, o.prototype.copy = function(t) { var e = new o(this.comparator); return e.data = t, e }, o }(),
        ml = function() {
            function t(t) { this.iter = t } return t.prototype.getNext = function() { return this.iter.getNext().key }, t.prototype.hasNext = function() { return this.iter.hasNext() }, t }(),
        gl = function() {
            function n(t) { this.fields = t } return n.fromSet = function(t) { return new n(t) }, n.fromArray = function(t) { var e = new yl(bh.comparator); return t.forEach(function(t) { return e = e.add(t) }), new n(e) }, n.prototype.covers = function(e) { var n = !1; return this.fields.forEach(function(t) { t.isPrefixOf(e) && (n = !0) }), n }, n.prototype.isEqual = function(t) { return this.fields.isEqual(t.fields) }, n }(),
        vl = function() {
            function t(t, e) { this.field = t, this.transform = e } return t.prototype.isEqual = function(t) { return this.field.isEqual(t.field) && this.transform.isEqual(t.transform) }, t }(),
        bl = function(t, e) { this.version = t, this.transformResults = e };
    (pl = fl || (fl = {}))[pl.Set = 0] = "Set", pl[pl.Patch = 1] = "Patch", pl[pl.Transform = 2] = "Transform", pl[pl.Delete = 3] = "Delete"; var _l = function() {
            function e(t, e) { this.updateTime = t, this.exists = e, Cc(void 0 === t || void 0 === e, 'Precondition can specify "exists" or "updateTime" but not both') } return e.exists = function(t) { return new e(void 0, t) }, e.updateTime = function(t) { return new e(t) }, Object.defineProperty(e.prototype, "isNone", { get: function() { return void 0 === this.updateTime && void 0 === this.exists }, enumerable: !0, configurable: !0 }), e.prototype.isValidFor = function(t) { return void 0 !== this.updateTime ? t instanceof Eh && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof Eh : (Cc(this.isNone, "Precondition should be empty"), !0) }, e.prototype.isEqual = function(t) { return e = this.updateTime, n = t.updateTime, (null != e ? !(!n || !e.isEqual(n)) : e === n) && this.exists === t.exists; var e, n }, e.NONE = new e, e }(),
        wl = function() {
            function t() {} return t.prototype.verifyKeyMatches = function(t) { null != t && Cc(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key") }, t.getPostMutationVersion = function(t) { return t instanceof Eh ? t.version : ll.MIN }, t }(),
        El = function(i) {
            function e(t, e, n) { var r = i.call(this) || this; return r.key = t, r.value = e, r.precondition = n, r.type = fl.Set, r } return an(e, i), e.prototype.applyToRemoteDocument = function(t, e) { this.verifyKeyMatches(t), Cc(null == e.transformResults, "Transform results received by SetMutation."); var n = e.version; return new Eh(this.key, n, this.value, { hasCommittedMutations: !0 }) }, e.prototype.applyToLocalView = function(t, e, n) { if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t; var r = wl.getPostMutationVersion(t); return new Eh(this.key, r, this.value, { hasLocalMutations: !0 }) }, e.prototype.isEqual = function(t) { return t instanceof e && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.precondition.isEqual(t.precondition) }, e }(wl),
        Tl = function(o) {
            function e(t, e, n, r) { var i = o.call(this) || this; return i.key = t, i.data = e, i.fieldMask = n, i.precondition = r, i.type = fl.Patch, i } return an(e, o), e.prototype.applyToRemoteDocument = function(t, e) { if (this.verifyKeyMatches(t), Cc(null == e.transformResults, "Transform results received by PatchMutation."), !this.precondition.isValidFor(t)) return new Sh(this.key, e.version); var n = this.patchDocument(t); return new Eh(this.key, e.version, n, { hasCommittedMutations: !0 }) }, e.prototype.applyToLocalView = function(t, e, n) { if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t; var r = wl.getPostMutationVersion(t),
                    i = this.patchDocument(t); return new Eh(this.key, r, i, { hasLocalMutations: !0 }) }, e.prototype.isEqual = function(t) { return t instanceof e && this.key.isEqual(t.key) && this.fieldMask.isEqual(t.fieldMask) && this.precondition.isEqual(t.precondition) }, e.prototype.patchDocument = function(t) { var e; return e = t instanceof Eh ? t.data : Kh.EMPTY, this.patchObject(e) }, e.prototype.patchObject = function(n) { var r = this; return this.fieldMask.fields.forEach(function(t) { if (!t.isEmpty()) { var e = r.data.field(t);
                        n = void 0 !== e ? n.set(t, e) : n.delete(t) } }), n }, e }(wl),
        Sl = function(r) {
            function e(t, e) { var n = r.call(this) || this; return n.key = t, n.fieldTransforms = e, n.type = fl.Transform, n.precondition = _l.exists(!0), n } return an(e, r), e.prototype.applyToRemoteDocument = function(t, e) { if (this.verifyKeyMatches(t), Cc(null != e.transformResults, "Transform results missing for TransformMutation."), !this.precondition.isValidFor(t)) return new Sh(this.key, e.version); var n = this.requireDocument(t),
                    r = this.serverTransformResults(t, e.transformResults),
                    i = e.version,
                    o = this.transformObject(n.data, r); return new Eh(this.key, i, o, { hasCommittedMutations: !0 }) }, e.prototype.applyToLocalView = function(t, e, n) { if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t; var r = this.requireDocument(t),
                    i = this.localTransformResults(n, e),
                    o = this.transformObject(r.data, i); return new Eh(this.key, r.version, o, { hasLocalMutations: !0 }) }, e.prototype.isEqual = function(t) { return t instanceof e && this.key.isEqual(t.key) && eh(this.fieldTransforms, t.fieldTransforms) && this.precondition.isEqual(t.precondition) }, e.prototype.requireDocument = function(t) { Cc(t instanceof Eh, "Unknown MaybeDocument type " + t); var e = t; return Cc(e.key.isEqual(this.key), "Can only transform a document with the same key"), e }, e.prototype.serverTransformResults = function(t, e) { var n = [];
                Cc(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")"); for (var r = 0; r < e.length; r++) { var i = this.fieldTransforms[r],
                        o = i.transform,
                        a = null;
                    t instanceof Eh && (a = t.field(i.field) || null), n.push(o.applyToRemoteDocument(a, e[r])) } return n }, e.prototype.localTransformResults = function(t, e) { for (var n = [], r = 0, i = this.fieldTransforms; r < i.length; r++) { var o = i[r],
                        a = o.transform,
                        s = null;
                    e instanceof Eh && (s = e.field(o.field) || null), n.push(a.applyToLocalView(s, t)) } return n }, e.prototype.transformObject = function(t, e) { Cc(e.length === this.fieldTransforms.length, "TransformResults length mismatch."); for (var n = 0; n < this.fieldTransforms.length; n++) { var r = this.fieldTransforms[n].field;
                    t = t.set(r, e[n]) } return t }, e }(wl),
        Cl = function(r) {
            function e(t, e) { var n = r.call(this) || this; return n.key = t, n.precondition = e, n.type = fl.Delete, n } return an(e, r), e.prototype.applyToRemoteDocument = function(t, e) { return this.verifyKeyMatches(t), Cc(null == e.transformResults, "Transform results received by DeleteMutation."), new Th(this.key, e.version, { hasCommittedMutations: !0 }) }, e.prototype.applyToLocalView = function(t, e, n) { return this.verifyKeyMatches(t), this.precondition.isValidFor(t) ? (t && Cc(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), new Th(this.key, ll.forDeletedDoc())) : t }, e.prototype.isEqual = function(t) { return t instanceof e && this.key.isEqual(t.key) && this.precondition.isEqual(t.precondition) }, e }(wl),
        Il = function() {
            function e() {} return e.prototype.applyToLocalView = function(t, e) { return new Vh(e, t) }, e.prototype.applyToRemoteDocument = function(t, e) { return e }, e.prototype.isEqual = function(t) { return t instanceof e }, e.instance = new e, e }(),
        Nl = function() {
            function e(t) { this.elements = t } return e.prototype.applyToLocalView = function(t, e) { return this.apply(t) }, e.prototype.applyToRemoteDocument = function(t, e) { return this.apply(t) }, e.prototype.apply = function(t) { for (var n = Al(t), e = function(e) { n.find(function(t) { return t.isEqual(e) }) || n.push(e) }, r = 0, i = this.elements; r < i.length; r++) { e(i[r]) } return new Qh(n) }, e.prototype.isEqual = function(t) { return t instanceof e && eh(t.elements, this.elements) }, e }(),
        Dl = function() {
            function e(t) { this.elements = t } return e.prototype.applyToLocalView = function(t, e) { return this.apply(t) }, e.prototype.applyToRemoteDocument = function(t, e) { return this.apply(t) }, e.prototype.apply = function(t) { for (var n = Al(t), e = function(e) { n = n.filter(function(t) { return !t.isEqual(e) }) }, r = 0, i = this.elements; r < i.length; r++) { e(i[r]) } return new Qh(n) }, e.prototype.isEqual = function(t) { return t instanceof e && eh(t.elements, this.elements) }, e }();

    function Al(t) { return t instanceof Qh ? t.internalValue.slice() : [] } var kl, Rl, Ol = function() {
        function t(t) { this.count = t } return t.prototype.isEqual = function(t) { return t && t.count === this.count }, t }();

    function Pl(t) { switch (t) {
            case Dc.OK:
                return Sc("Treated status OK as error");
            case Dc.CANCELLED:
            case Dc.UNKNOWN:
            case Dc.DEADLINE_EXCEEDED:
            case Dc.RESOURCE_EXHAUSTED:
            case Dc.INTERNAL:
            case Dc.UNAVAILABLE:
            case Dc.UNAUTHENTICATED:
                return !1;
            case Dc.INVALID_ARGUMENT:
            case Dc.NOT_FOUND:
            case Dc.ALREADY_EXISTS:
            case Dc.PERMISSION_DENIED:
            case Dc.FAILED_PRECONDITION:
            case Dc.ABORTED:
            case Dc.OUT_OF_RANGE:
            case Dc.UNIMPLEMENTED:
            case Dc.DATA_LOSS:
                return !0;
            default:
                return Sc("Unknown status code: " + t) } }

    function Ml(t) { if (void 0 === t) return Ec("GRPC error has no .code"), Dc.UNKNOWN; switch (t) {
            case kl.OK:
                return Dc.OK;
            case kl.CANCELLED:
                return Dc.CANCELLED;
            case kl.UNKNOWN:
                return Dc.UNKNOWN;
            case kl.DEADLINE_EXCEEDED:
                return Dc.DEADLINE_EXCEEDED;
            case kl.RESOURCE_EXHAUSTED:
                return Dc.RESOURCE_EXHAUSTED;
            case kl.INTERNAL:
                return Dc.INTERNAL;
            case kl.UNAVAILABLE:
                return Dc.UNAVAILABLE;
            case kl.UNAUTHENTICATED:
                return Dc.UNAUTHENTICATED;
            case kl.INVALID_ARGUMENT:
                return Dc.INVALID_ARGUMENT;
            case kl.NOT_FOUND:
                return Dc.NOT_FOUND;
            case kl.ALREADY_EXISTS:
                return Dc.ALREADY_EXISTS;
            case kl.PERMISSION_DENIED:
                return Dc.PERMISSION_DENIED;
            case kl.FAILED_PRECONDITION:
                return Dc.FAILED_PRECONDITION;
            case kl.ABORTED:
                return Dc.ABORTED;
            case kl.OUT_OF_RANGE:
                return Dc.OUT_OF_RANGE;
            case kl.UNIMPLEMENTED:
                return Dc.UNIMPLEMENTED;
            case kl.DATA_LOSS:
                return Dc.DATA_LOSS;
            default:
                return Sc("Unknown status code: " + t) } }(Rl = kl || (kl = {}))[Rl.OK = 0] = "OK", Rl[Rl.CANCELLED = 1] = "CANCELLED", Rl[Rl.UNKNOWN = 2] = "UNKNOWN", Rl[Rl.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Rl[Rl.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Rl[Rl.NOT_FOUND = 5] = "NOT_FOUND", Rl[Rl.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Rl[Rl.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Rl[Rl.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Rl[Rl.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Rl[Rl.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Rl[Rl.ABORTED = 10] = "ABORTED", Rl[Rl.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Rl[Rl.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Rl[Rl.INTERNAL = 13] = "INTERNAL", Rl[Rl.UNAVAILABLE = 14] = "UNAVAILABLE", Rl[Rl.DATA_LOSS = 15] = "DATA_LOSS"; var Ll = new Ch(_h.comparator);

    function xl() { return Ll }

    function Fl() { return xl() } var Ul = new Ch(_h.comparator);

    function ql() { return Ul } var Vl = new Ch(_h.comparator);

    function Bl() { return Vl } var jl = new yl(_h.comparator);

    function Wl() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; for (var n = jl, r = 0, i = t; r < i.length; r++) { var o = i[r];
            n = n.add(o) } return n } var Kl = new yl(th);

    function Ql() { return Kl } var Hl, zl, Gl, Yl, Xl = function() {
        function o(n) { this.comparator = n ? function(t, e) { return n(t, e) || _h.comparator(t.key, e.key) } : function(t, e) { return _h.comparator(t.key, e.key) }, this.keyedMap = ql(), this.sortedSet = new Ch(this.comparator) } return o.emptySet = function(t) { return new o(t.comparator) }, o.prototype.has = function(t) { return null != this.keyedMap.get(t) }, o.prototype.get = function(t) { return this.keyedMap.get(t) }, o.prototype.first = function() { return this.sortedSet.minKey() }, o.prototype.last = function() { return this.sortedSet.maxKey() }, o.prototype.isEmpty = function() { return this.sortedSet.isEmpty() }, o.prototype.indexOf = function(t) { var e = this.keyedMap.get(t); return e ? this.sortedSet.indexOf(e) : -1 }, Object.defineProperty(o.prototype, "size", { get: function() { return this.sortedSet.size }, enumerable: !0, configurable: !0 }), o.prototype.forEach = function(n) { this.sortedSet.inorderTraversal(function(t, e) { return n(t), !1 }) }, o.prototype.add = function(t) { var e = this.delete(t.key); return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null)) }, o.prototype.delete = function(t) { var e = this.get(t); return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this }, o.prototype.isEqual = function(t) { if (!(t instanceof o)) return !1; if (this.size !== t.size) return !1; for (var e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator(); e.hasNext();) { var r = e.getNext().key,
                    i = n.getNext().key; if (!r.isEqual(i)) return !1 } return !0 }, o.prototype.toString = function() { var e = []; return this.forEach(function(t) { e.push(t.toString()) }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)" }, o.prototype.copy = function(t, e) { var n = new o; return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n }, o }();
    (zl = Hl || (Hl = {}))[zl.Added = 0] = "Added", zl[zl.Removed = 1] = "Removed", zl[zl.Modified = 2] = "Modified", zl[zl.Metadata = 3] = "Metadata", (Yl = Gl || (Gl = {}))[Yl.Local = 0] = "Local", Yl[Yl.Synced = 1] = "Synced"; var Jl, $l, Zl = function() {
            function t() { this.changeMap = new Ch(_h.comparator) } return t.prototype.track = function(t) { var e = t.doc.key,
                    n = this.changeMap.get(e);
                n ? t.type !== Hl.Added && n.type === Hl.Metadata ? this.changeMap = this.changeMap.insert(e, t) : t.type === Hl.Metadata && n.type !== Hl.Removed ? this.changeMap = this.changeMap.insert(e, { type: n.type, doc: t.doc }) : t.type === Hl.Modified && n.type === Hl.Modified ? this.changeMap = this.changeMap.insert(e, { type: Hl.Modified, doc: t.doc }) : t.type === Hl.Modified && n.type === Hl.Added ? this.changeMap = this.changeMap.insert(e, { type: Hl.Added, doc: t.doc }) : t.type === Hl.Removed && n.type === Hl.Added ? this.changeMap = this.changeMap.remove(e) : t.type === Hl.Removed && n.type === Hl.Modified ? this.changeMap = this.changeMap.insert(e, { type: Hl.Removed, doc: n.doc }) : t.type === Hl.Added && n.type === Hl.Removed ? this.changeMap = this.changeMap.insert(e, { type: Hl.Modified, doc: t.doc }) : Sc("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.changeMap = this.changeMap.insert(e, t) }, t.prototype.getChanges = function() { var n = []; return this.changeMap.inorderTraversal(function(t, e) { n.push(e) }), n }, t }(),
        tf = function() {
            function o(t, e, n, r, i, o, a, s) { this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = a, this.excludesMetadataChanges = s } return o.fromInitialDocuments = function(t, e, n, r) { var i = []; return e.forEach(function(t) { i.push({ type: Hl.Added, doc: t }) }), new o(t, e, Xl.emptySet(e), i, n, r, !0, !1) }, Object.defineProperty(o.prototype, "hasPendingWrites", { get: function() { return !this.mutatedKeys.isEmpty() }, enumerable: !0, configurable: !0 }), o.prototype.isEqual = function(t) { if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1; var e = this.docChanges,
                    n = t.docChanges; if (e.length !== n.length) return !1; for (var r = 0; r < e.length; r++)
                    if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                return !0 }, o }(),
        ef = function() {
            function i(t, e, n, r, i) { this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i } return i.createSynthesizedRemoteEventForCurrentChange = function(t, e) { var n, r = ((n = {})[t] = nf.createSynthesizedTargetChangeForCurrentChange(t, e), n); return new i(ll.MIN, r, Ql(), xl(), Wl()) }, i }(),
        nf = function() {
            function n(t, e, n, r, i) { this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i } return n.createSynthesizedTargetChangeForCurrentChange = function(t, e) { return new n(Nc(), e, Wl(), Wl(), Wl()) }, n }(),
        rf = function(t, e, n, r) { this.updatedTargetIds = t, this.removedTargetIds = e, this.key = n, this.newDoc = r },
        of = function(t, e) { this.targetId = t, this.existenceFilter = e };
    ($l = Jl || (Jl = {}))[$l.NoChange = 0] = "NoChange", $l[$l.Added = 1] = "Added", $l[$l.Removed = 2] = "Removed", $l[$l.Current = 3] = "Current", $l[$l.Reset = 4] = "Reset"; var af = function(t, e, n, r) { void 0 === n && (n = Nc()), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r },
        sf = function() {
            function t() { this.pendingResponses = 0, this.documentChanges = hf(), this._resumeToken = Nc(), this._current = !1, this._hasPendingChanges = !0 } return Object.defineProperty(t.prototype, "current", { get: function() { return this._current }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "resumeToken", { get: function() { return this._resumeToken }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "isPending", { get: function() { return 0 !== this.pendingResponses }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "hasPendingChanges", { get: function() { return this._hasPendingChanges }, enumerable: !0, configurable: !0 }), t.prototype.updateResumeToken = function(t) { 0 < t.length && (this._hasPendingChanges = !0, this._resumeToken = t) }, t.prototype.toTargetChange = function() { var n = Wl(),
                    r = Wl(),
                    i = Wl(); return this.documentChanges.forEach(function(t, e) { switch (e) {
                        case Hl.Added:
                            n = n.add(t); break;
                        case Hl.Modified:
                            r = r.add(t); break;
                        case Hl.Removed:
                            i = i.add(t); break;
                        default:
                            Sc("Encountered invalid change type: " + e) } }), new nf(this._resumeToken, this._current, n, r, i) }, t.prototype.clearPendingChanges = function() { this._hasPendingChanges = !1, this.documentChanges = hf() }, t.prototype.addDocumentChange = function(t, e) { this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.insert(t, e) }, t.prototype.removeDocumentChange = function(t) { this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.remove(t) }, t.prototype.recordPendingTargetRequest = function() { this.pendingResponses += 1 }, t.prototype.recordTargetResponse = function() { this.pendingResponses -= 1 }, t.prototype.markCurrent = function() { this._hasPendingChanges = !0, this._current = !0 }, t }(),
        uf = function() {
            function t(t) { this.metadataProvider = t, this.targetStates = {}, this.pendingDocumentUpdates = xl(), this.pendingDocumentTargetMapping = cf(), this.pendingTargetResets = new yl(th) } return t.prototype.handleDocumentChange = function(t) { for (var e = 0, n = t.updatedTargetIds; e < n.length; e++) { var r = n[e];
                    t.newDoc instanceof Eh ? this.addDocumentToTarget(r, t.newDoc) : t.newDoc instanceof Th && this.removeDocumentFromTarget(r, t.key, t.newDoc) } for (var i = 0, o = t.removedTargetIds; i < o.length; i++) { r = o[i];
                    this.removeDocumentFromTarget(r, t.key, t.newDoc) } }, t.prototype.handleTargetChange = function(n) { var r = this;
                this.forEachTarget(n, function(t) { var e = r.ensureTargetState(t); switch (n.state) {
                        case Jl.NoChange:
                            r.isActiveTarget(t) && e.updateResumeToken(n.resumeToken); break;
                        case Jl.Added:
                            e.recordTargetResponse(), e.isPending || e.clearPendingChanges(), e.updateResumeToken(n.resumeToken); break;
                        case Jl.Removed:
                            e.recordTargetResponse(), e.isPending || r.removeTarget(t), Cc(!n.cause, "WatchChangeAggregator does not handle errored targets"); break;
                        case Jl.Current:
                            r.isActiveTarget(t) && (e.markCurrent(), e.updateResumeToken(n.resumeToken)); break;
                        case Jl.Reset:
                            r.isActiveTarget(t) && (r.resetTarget(t), e.updateResumeToken(n.resumeToken)); break;
                        default:
                            Sc("Unknown target watch change state: " + n.state) } }) }, t.prototype.forEachTarget = function(t, e) { 0 < t.targetIds.length ? t.targetIds.forEach(e) : Pc(this.targetStates, e) }, t.prototype.handleExistenceFilter = function(t) { var e = t.targetId,
                    n = t.existenceFilter.count,
                    r = this.queryDataForActiveTarget(e); if (r) { var i = r.query; if (i.isDocumentQuery())
                        if (0 === n) { var o = new _h(i.path);
                            this.removeDocumentFromTarget(e, o, new Th(o, ll.forDeletedDoc())) } else Cc(1 === n, "Single document existence filter with count: " + n);
                    else this.getCurrentDocumentCountForTarget(e) !== n && (this.resetTarget(e), this.pendingTargetResets = this.pendingTargetResets.add(e)) } }, t.prototype.createRemoteEvent = function(i) { var o = this,
                    a = {};
                Pc(this.targetStates, function(t, e) { var n = o.queryDataForActiveTarget(t); if (n) { if (e.current && n.query.isDocumentQuery()) { var r = new _h(n.query.path);
                            null !== o.pendingDocumentUpdates.get(r) || o.targetContainsDocument(t, r) || o.removeDocumentFromTarget(t, r, new Th(r, i)) }
                        e.hasPendingChanges && (a[t] = e.toTargetChange(), e.clearPendingChanges()) } }); var r = Wl();
                this.pendingDocumentTargetMapping.forEach(function(t, e) { var n = !0;
                    e.forEachWhile(function(t) { var e = o.queryDataForActiveTarget(t); return !e || e.purpose === $h.LimboResolution || (n = !1) }), n && (r = r.add(t)) }); var t = new ef(i, a, this.pendingTargetResets, this.pendingDocumentUpdates, r); return this.pendingDocumentUpdates = xl(), this.pendingDocumentTargetMapping = cf(), this.pendingTargetResets = new yl(th), t }, t.prototype.addDocumentToTarget = function(t, e) { if (this.isActiveTarget(t)) { var n = this.targetContainsDocument(t, e.key) ? Hl.Modified : Hl.Added;
                    this.ensureTargetState(t).addDocumentChange(e.key, n), this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e.key, e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e.key, this.ensureDocumentTargetMapping(e.key).add(t)) } }, t.prototype.removeDocumentFromTarget = function(t, e, n) { if (this.isActiveTarget(t)) { var r = this.ensureTargetState(t);
                    this.targetContainsDocument(t, e) ? r.addDocumentChange(e, Hl.Removed) : r.removeDocumentChange(e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e, this.ensureDocumentTargetMapping(e).delete(t)), n && (this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e, n)) } }, t.prototype.removeTarget = function(t) { delete this.targetStates[t] }, t.prototype.getCurrentDocumentCountForTarget = function(t) { var e = this.ensureTargetState(t).toTargetChange(); return this.metadataProvider.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size }, t.prototype.recordPendingTargetRequest = function(t) { this.ensureTargetState(t).recordPendingTargetRequest() }, t.prototype.ensureTargetState = function(t) { return this.targetStates[t] || (this.targetStates[t] = new sf), this.targetStates[t] }, t.prototype.ensureDocumentTargetMapping = function(t) { var e = this.pendingDocumentTargetMapping.get(t); return e || (e = new yl(th), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(t, e)), e }, t.prototype.isActiveTarget = function(t) { return null !== this.queryDataForActiveTarget(t) }, t.prototype.queryDataForActiveTarget = function(t) { var e = this.targetStates[t]; return e && e.isPending ? null : this.metadataProvider.getQueryDataForTarget(t) }, t.prototype.resetTarget = function(e) { var n = this;
                Cc(!this.targetStates[e].isPending, "Should only reset active targets"), this.targetStates[e] = new sf, this.metadataProvider.getRemoteKeysForTarget(e).forEach(function(t) { n.removeDocumentFromTarget(e, t, null) }) }, t.prototype.targetContainsDocument = function(t, e) { return this.metadataProvider.getRemoteKeysForTarget(t).has(e) }, t }();

    function cf() { return new Ch(_h.comparator) }

    function hf() { return new Ch(_h.comparator) } var lf, ff, pf = ((lf = {})[al.ASCENDING.name] = "ASCENDING", lf[al.DESCENDING.name] = "DESCENDING", lf),
        df = ((ff = {})[nl.LESS_THAN.name] = "LESS_THAN", ff[nl.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", ff[nl.GREATER_THAN.name] = "GREATER_THAN", ff[nl.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", ff[nl.EQUAL.name] = "EQUAL", ff[nl.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", ff),
        yf = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

    function mf(t, e) { Cc(!Xh(t), e + " is missing") }

    function gf(t) { return "number" == typeof t ? t : "string" == typeof t ? Number(t) : Sc("can't parse " + t) } var vf = function() {
        function t(t, e) { this.databaseId = t, this.options = e } return t.prototype.emptyByteString = function() { return this.options.useProto3Json ? "" : new Uint8Array(0) }, t.prototype.unsafeCastProtoByteString = function(t) { return t }, t.prototype.fromRpcStatus = function(t) { var e = void 0 === t.code ? Dc.UNKNOWN : Ml(t.code); return new Ac(e, t.message || "") }, t.prototype.toInt32Value = function(t) { return Xh(t) ? void 0 : { value: t } }, t.prototype.fromInt32Value = function(t) { var e; return Xh(e = "object" == typeof t ? t.value : t) ? null : e }, t.prototype.toTimestamp = function(t) { return { seconds: t.seconds, nanos: t.nanoseconds } }, t.prototype.fromTimestamp = function(t) { if ("string" == typeof t) return this.fromIso8601String(t);
            Cc(!!t, "Cannot deserialize null or undefined timestamp."); var e = gf(t.seconds || "0"),
                n = t.nanos || 0; return new lh(e, n) }, t.prototype.fromIso8601String = function(t) { var e = 0,
                n = yf.exec(t); if (Cc(!!n, "invalid timestamp: " + t), n[1]) { var r = n[1];
                r = (r + "000000000").substr(0, 9), e = Number(r) } var i = new Date(t),
                o = Math.floor(i.getTime() / 1e3); return new lh(o, e) }, t.prototype.toBytes = function(t) { return this.options.useProto3Json ? t.toBase64() : this.unsafeCastProtoByteString(t.toUint8Array()) }, t.prototype.fromBlob = function(t) { return "string" == typeof t ? (Cc(this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), uh.fromBase64String(t)) : (Cc(!this.options.useProto3Json, "Expected bytes to be passed in as string, but got something else instead."), uh.fromUint8Array(t)) }, t.prototype.toVersion = function(t) { return this.toTimestamp(t.toTimestamp()) }, t.prototype.fromVersion = function(t) { return Cc(!!t, "Trying to deserialize version that isn't set"), ll.fromTimestamp(this.fromTimestamp(t)) }, t.prototype.toResourceName = function(t, e) { return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString() }, t.prototype.fromResourceName = function(t) { var e = gh.fromString(t); return Cc(this.isValidResourceName(e), "Tried to deserialize invalid key " + e.toString()), e }, t.prototype.toName = function(t) { return this.toResourceName(this.databaseId, t.path) }, t.prototype.fromName = function(t) { var e = this.fromResourceName(t); return Cc(e.get(1) === this.databaseId.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.databaseId.projectId), Cc(!e.get(3) && !this.databaseId.database || e.get(3) === this.databaseId.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.databaseId.database), new _h(this.extractLocalPathFromResourceName(e)) }, t.prototype.toQueryPath = function(t) { return this.toResourceName(this.databaseId, t) }, t.prototype.fromQueryPath = function(t) { var e = this.fromResourceName(t); return 4 === e.length ? gh.EMPTY_PATH : this.extractLocalPathFromResourceName(e) }, Object.defineProperty(t.prototype, "encodedDatabaseId", { get: function() { return new gh(["projects", this.databaseId.projectId, "databases", this.databaseId.database]).canonicalString() }, enumerable: !0, configurable: !0 }), t.prototype.fullyQualifiedPrefixPath = function(t) { return new gh(["projects", t.projectId, "databases", t.database]) }, t.prototype.extractLocalPathFromResourceName = function(t) { return Cc(4 < t.length && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), t.popFirst(5) }, t.prototype.isValidResourceName = function(t) { return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2) }, t.prototype.toValue = function(t) { if (t instanceof Rh) return { nullValue: "NULL_VALUE" }; if (t instanceof Oh) return { booleanValue: t.value() }; if (t instanceof xh) return { integerValue: "" + t.value() }; if (t instanceof Fh) { var e = t.value(); if (this.options.useProto3Json) { if (isNaN(e)) return { doubleValue: "NaN" }; if (e === 1 / 0) return { doubleValue: "Infinity" }; if (e === -1 / 0) return { doubleValue: "-Infinity" } } return { doubleValue: t.value() } } return t instanceof Uh ? { stringValue: t.value() } : t instanceof Kh ? { mapValue: this.toMapValue(t) } : t instanceof Qh ? { arrayValue: this.toArrayValue(t) } : t instanceof qh ? { timestampValue: this.toTimestamp(t.internalValue) } : t instanceof Wh ? { geoPointValue: { latitude: t.value().latitude, longitude: t.value().longitude } } : t instanceof Bh ? { bytesValue: this.toBytes(t.value()) } : t instanceof jh ? { referenceValue: this.toResourceName(t.databaseId, t.key.path) } : Sc("Unknown FieldValue " + JSON.stringify(t)) }, t.prototype.fromValue = function(t) { var e = this,
                n = t.value_type; if (bf(t, n, "nullValue")) return Rh.INSTANCE; if (bf(t, n, "booleanValue")) return Oh.of(t.booleanValue); if (bf(t, n, "integerValue")) return new xh(gf(t.integerValue)); if (bf(t, n, "doubleValue")) { if (this.options.useProto3Json) { if ("NaN" === t.doubleValue) return Fh.NAN; if ("Infinity" === t.doubleValue) return Fh.POSITIVE_INFINITY; if ("-Infinity" === t.doubleValue) return Fh.NEGATIVE_INFINITY } return new Fh(t.doubleValue) } if (bf(t, n, "stringValue")) return new Uh(t.stringValue); if (bf(t, n, "mapValue")) return this.fromFields(t.mapValue.fields || {}); if (bf(t, n, "arrayValue")) { mf(t.arrayValue, "arrayValue"); var r = t.arrayValue.values || []; return new Qh(r.map(function(t) { return e.fromValue(t) })) } if (bf(t, n, "timestampValue")) return mf(t.timestampValue, "timestampValue"), new qh(this.fromTimestamp(t.timestampValue)); if (bf(t, n, "geoPointValue")) { mf(t.geoPointValue, "geoPointValue"); var i = t.geoPointValue.latitude || 0,
                    o = t.geoPointValue.longitude || 0; return new Wh(new hh(i, o)) } if (bf(t, n, "bytesValue")) { mf(t.bytesValue, "bytesValue"); var a = this.fromBlob(t.bytesValue); return new Bh(a) } if (bf(t, n, "referenceValue")) { mf(t.referenceValue, "referenceValue"); var s = this.fromResourceName(t.referenceValue),
                    u = new dh(s.get(1), s.get(3)),
                    c = new _h(this.extractLocalPathFromResourceName(s)); return new jh(u, c) } return Sc("Unknown Value proto " + JSON.stringify(t)) }, t.prototype.toMutationDocument = function(t, e) { return { name: this.toName(t), fields: this.toFields(e) } }, t.prototype.toDocument = function(t) { return Cc(!t.hasLocalMutations, "Can't serialize documents with mutations."), { name: this.toName(t.key), fields: this.toFields(t.data), updateTime: this.toTimestamp(t.version.toTimestamp()) } }, t.prototype.fromDocument = function(t, e) { return new Eh(this.fromName(t.name), this.fromVersion(t.updateTime), this.fromFields(t.fields || {}), { hasCommittedMutations: !!e }) }, t.prototype.toFields = function(t) { var n = this,
                r = {}; return t.forEach(function(t, e) { r[t] = n.toValue(e) }), r }, t.prototype.fromFields = function(t) { var n = this,
                e = t,
                r = Kh.EMPTY; return Mc(e, function(t, e) { r = r.set(new bh([t]), n.fromValue(e)) }), r }, t.prototype.toMapValue = function(t) { return { fields: this.toFields(t) } }, t.prototype.toArrayValue = function(t) { var e = this,
                n = []; return t.forEach(function(t) { n.push(e.toValue(t)) }), { values: n } }, t.prototype.fromFound = function(t) { Cc(!!t.found, "Tried to deserialize a found document from a missing document."), mf(t.found.name, "doc.found.name"), mf(t.found.updateTime, "doc.found.updateTime"); var e = this.fromName(t.found.name),
                n = this.fromVersion(t.found.updateTime),
                r = this.fromFields(t.found.fields || {}); return new Eh(e, n, r, {}, t.found) }, t.prototype.fromMissing = function(t) { Cc(!!t.missing, "Tried to deserialize a missing document from a found document."), Cc(!!t.readTime, "Tried to deserialize a missing document without a read time."); var e = this.fromName(t.missing),
                n = this.fromVersion(t.readTime); return new Th(e, n) }, t.prototype.fromMaybeDocument = function(t) { var e = t.result; return bf(t, e, "found") ? this.fromFound(t) : bf(t, e, "missing") ? this.fromMissing(t) : Sc("invalid batch get response: " + JSON.stringify(t)) }, t.prototype.toWatchTargetChangeState = function(t) { switch (t) {
                case Jl.Added:
                    return "ADD";
                case Jl.Current:
                    return "CURRENT";
                case Jl.NoChange:
                    return "NO_CHANGE";
                case Jl.Removed:
                    return "REMOVE";
                case Jl.Reset:
                    return "RESET";
                default:
                    return Sc("Unknown WatchTargetChangeState: " + t) } }, t.prototype.toTestWatchChange = function(t) { if (t instanceof of) return { filter: { count: t.existenceFilter.count, targetId: t.targetId } }; if (t instanceof rf) { if (t.newDoc instanceof Eh) { var e = t.newDoc; return { documentChange: { document: { name: this.toName(e.key), fields: this.toFields(e.data), updateTime: this.toVersion(e.version) }, targetIds: t.updatedTargetIds, removedTargetIds: t.removedTargetIds } } } if (t.newDoc instanceof Th) { e = t.newDoc; return { documentDelete: { document: this.toName(e.key), readTime: this.toVersion(e.version), removedTargetIds: t.removedTargetIds } } } if (null === t.newDoc) return { documentRemove: { document: this.toName(t.key), removedTargetIds: t.removedTargetIds } } } if (t instanceof af) { var n = void 0; return t.cause && (n = { code: function(t) { if (void 0 === t) return kl.OK; switch (t) {
                            case Dc.OK:
                                return kl.OK;
                            case Dc.CANCELLED:
                                return kl.CANCELLED;
                            case Dc.UNKNOWN:
                                return kl.UNKNOWN;
                            case Dc.DEADLINE_EXCEEDED:
                                return kl.DEADLINE_EXCEEDED;
                            case Dc.RESOURCE_EXHAUSTED:
                                return kl.RESOURCE_EXHAUSTED;
                            case Dc.INTERNAL:
                                return kl.INTERNAL;
                            case Dc.UNAVAILABLE:
                                return kl.UNAVAILABLE;
                            case Dc.UNAUTHENTICATED:
                                return kl.UNAUTHENTICATED;
                            case Dc.INVALID_ARGUMENT:
                                return kl.INVALID_ARGUMENT;
                            case Dc.NOT_FOUND:
                                return kl.NOT_FOUND;
                            case Dc.ALREADY_EXISTS:
                                return kl.ALREADY_EXISTS;
                            case Dc.PERMISSION_DENIED:
                                return kl.PERMISSION_DENIED;
                            case Dc.FAILED_PRECONDITION:
                                return kl.FAILED_PRECONDITION;
                            case Dc.ABORTED:
                                return kl.ABORTED;
                            case Dc.OUT_OF_RANGE:
                                return kl.OUT_OF_RANGE;
                            case Dc.UNIMPLEMENTED:
                                return kl.UNIMPLEMENTED;
                            case Dc.DATA_LOSS:
                                return kl.DATA_LOSS;
                            default:
                                return Sc("Unknown status code: " + t) } }(t.cause.code), message: t.cause.message }), { targetChange: { targetChangeType: this.toWatchTargetChangeState(t.state), targetIds: t.targetIds, resumeToken: this.unsafeCastProtoByteString(t.resumeToken), cause: n } } } return Sc("Unrecognized watch change: " + JSON.stringify(t)) }, t.prototype.fromWatchChange = function(t) { var e, n = t.response_type; if (bf(t, n, "targetChange")) { mf(t.targetChange, "targetChange"); var r = this.fromWatchTargetChangeState(t.targetChange.targetChangeType || "NO_CHANGE"),
                    i = t.targetChange.targetIds || [],
                    o = t.targetChange.resumeToken || this.emptyByteString(),
                    a = t.targetChange.cause,
                    s = a && this.fromRpcStatus(a);
                e = new af(r, i, o, s || null) } else if (bf(t, n, "documentChange")) { mf(t.documentChange, "documentChange"), mf(t.documentChange.document, "documentChange.name"), mf(t.documentChange.document.name, "documentChange.document.name"), mf(t.documentChange.document.updateTime, "documentChange.document.updateTime"); var u = t.documentChange,
                    c = this.fromName(u.document.name),
                    h = this.fromVersion(u.document.updateTime),
                    l = this.fromFields(u.document.fields || {}),
                    f = new Eh(c, h, l, {}, u.document),
                    p = u.targetIds || [],
                    d = u.removedTargetIds || [];
                e = new rf(p, d, f.key, f) } else if (bf(t, n, "documentDelete")) { mf(t.documentDelete, "documentDelete"), mf(t.documentDelete.document, "documentDelete.document"); var y = t.documentDelete;
                c = this.fromName(y.document), h = y.readTime ? this.fromVersion(y.readTime) : ll.forDeletedDoc(), f = new Th(c, h), d = y.removedTargetIds || [];
                e = new rf([], d, f.key, f) } else if (bf(t, n, "documentRemove")) { mf(t.documentRemove, "documentRemove"), mf(t.documentRemove.document, "documentRemove"); var m = t.documentRemove;
                c = this.fromName(m.document), d = m.removedTargetIds || [];
                e = new rf([], d, c, null) } else { if (!bf(t, n, "filter")) return Sc("Unknown change type " + JSON.stringify(t));
                mf(t.filter, "filter"), mf(t.filter.targetId, "filter.targetId"); var g = t.filter,
                    v = g.count || 0,
                    b = new Ol(v),
                    _ = g.targetId;
                e = new of(_, b) } return e }, t.prototype.fromWatchTargetChangeState = function(t) { return "NO_CHANGE" === t ? Jl.NoChange : "ADD" === t ? Jl.Added : "REMOVE" === t ? Jl.Removed : "CURRENT" === t ? Jl.Current : "RESET" === t ? Jl.Reset : Sc("Got unexpected TargetChange.state: " + t) }, t.prototype.versionFromListenResponse = function(t) { if (!bf(t, t.response_type, "targetChange")) return ll.MIN; var e = t.targetChange; return e.targetIds && e.targetIds.length ? ll.MIN : e.readTime ? this.fromVersion(e.readTime) : ll.MIN }, t.prototype.toMutation = function(t) { var e, n = this; if (t instanceof El) e = { update: this.toMutationDocument(t.key, t.value) };
            else if (t instanceof Cl) e = { delete: this.toName(t.key) };
            else if (t instanceof Tl) e = { update: this.toMutationDocument(t.key, t.data), updateMask: this.toDocumentMask(t.fieldMask) };
            else { if (!(t instanceof Sl)) return Sc("Unknown mutation type " + t.type);
                e = { transform: { document: this.toName(t.key), fieldTransforms: t.fieldTransforms.map(function(t) { return n.toFieldTransform(t) }) } } } return t.precondition.isNone || (e.currentDocument = this.toPrecondition(t.precondition)), e }, t.prototype.fromMutation = function(t) { var e = this,
                n = t.currentDocument ? this.fromPrecondition(t.currentDocument) : _l.NONE; if (t.update) { mf(t.update.name, "name"); var r = this.fromName(t.update.name),
                    i = this.fromFields(t.update.fields || {}); if (t.updateMask) { var o = this.fromDocumentMask(t.updateMask); return new Tl(r, i, o, n) } return new El(r, i, n) } if (t.delete) { r = this.fromName(t.delete); return new Cl(r, n) } if (t.transform) { r = this.fromName(t.transform.document); var a = t.transform.fieldTransforms.map(function(t) { return e.fromFieldTransform(t) }); return Cc(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new Sl(r, a) } return Sc("unknown mutation proto: " + JSON.stringify(t)) }, t.prototype.toPrecondition = function(t) { return Cc(!t.isNone, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? { updateTime: this.toVersion(t.updateTime) } : void 0 !== t.exists ? { exists: t.exists } : Sc("Unknown precondition") }, t.prototype.fromPrecondition = function(t) { return void 0 !== t.updateTime ? _l.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? _l.exists(t.exists) : _l.NONE }, t.prototype.fromWriteResult = function(t, e) { var n = this,
                r = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e),
                i = null; return t.transformResults && 0 < t.transformResults.length && (i = t.transformResults.map(function(t) { return n.fromValue(t) })), new bl(r, i) }, t.prototype.fromWriteResults = function(t, e) { var n = this; return t && 0 < t.length ? (Cc(void 0 !== e, "Received a write result without a commit time"), t.map(function(t) { return n.fromWriteResult(t, e) })) : [] }, t.prototype.toFieldTransform = function(t) { var e = this,
                n = t.transform; if (n instanceof Il) return { fieldPath: t.field.canonicalString(), setToServerValue: "REQUEST_TIME" }; if (n instanceof Nl) return { fieldPath: t.field.canonicalString(), appendMissingElements: { values: n.elements.map(function(t) { return e.toValue(t) }) } }; if (n instanceof Dl) return { fieldPath: t.field.canonicalString(), removeAllFromArray: { values: n.elements.map(function(t) { return e.toValue(t) }) } }; throw Sc("Unknown transform: " + t.transform) }, t.prototype.fromFieldTransform = function(t) { var e = this,
                n = t.transform_type,
                r = null; if (bf(t, n, "setToServerValue")) Cc("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), r = Il.instance;
            else if (bf(t, n, "appendMissingElements")) { var i = t.appendMissingElements.values || [];
                r = new Nl(i.map(function(t) { return e.fromValue(t) })) } else if (bf(t, n, "removeAllFromArray")) { i = t.removeAllFromArray.values || [];
                r = new Dl(i.map(function(t) { return e.fromValue(t) })) } else Sc("Unknown transform proto: " + JSON.stringify(t)); var o = bh.fromServerFormat(t.fieldPath); return new vl(o, r) }, t.prototype.toDocumentsTarget = function(t) { return { documents: [this.toQueryPath(t.path)] } }, t.prototype.fromDocumentsTarget = function(t) { var e = t.documents.length;
            Cc(1 === e, "DocumentsTarget contained other than 1 document: " + e); var n = t.documents[0]; return tl.atPath(this.fromQueryPath(n)) }, t.prototype.toQueryTarget = function(t) { var e = { structuredQuery: {} }; if (t.path.isEmpty()) e.parent = this.toQueryPath(gh.EMPTY_PATH);
            else { var n = t.path;
                Cc(n.length % 2 != 0, "Document queries with filters are not supported."), e.parent = this.toQueryPath(n.popLast()), e.structuredQuery.from = [{ collectionId: n.lastSegment() }] } var r = this.toFilter(t.filters);
            r && (e.structuredQuery.where = r); var i = this.toOrder(t.orderBy);
            i && (e.structuredQuery.orderBy = i); var o = this.toInt32Value(t.limit); return void 0 !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.toCursor(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.toCursor(t.endAt)), e }, t.prototype.fromQueryTarget = function(t) { var e = this.fromQueryPath(t.parent),
                n = t.structuredQuery,
                r = n.from ? n.from.length : 0; if (0 < r) { Cc(1 === r, "StructuredQuery.from with more than one collection is not supported."); var i = n.from[0];
                e = e.child(i.collectionId) } var o = [];
            n.where && (o = this.fromFilter(n.where)); var a = [];
            n.orderBy && (a = this.fromOrder(n.orderBy)); var s = null;
            n.limit && (s = this.fromInt32Value(n.limit)); var u = null;
            n.startAt && (u = this.fromCursor(n.startAt)); var c = null; return n.endAt && (c = this.fromCursor(n.endAt)), new tl(e, a, o, s, u, c) }, t.prototype.toListenRequestLabels = function(t) { var e = this.toLabel(t.purpose); return null == e ? null : { "goog-listen-tags": e } }, t.prototype.toLabel = function(t) { switch (t) {
                case $h.Listen:
                    return null;
                case $h.ExistenceFilterMismatch:
                    return "existence-filter-mismatch";
                case $h.LimboResolution:
                    return "limbo-document";
                default:
                    return Sc("Unrecognized query purpose: " + t) } }, t.prototype.toTarget = function(t) { var e, n = t.query; return (e = n.isDocumentQuery() ? { documents: this.toDocumentsTarget(n) } : { query: this.toQueryTarget(n) }).targetId = t.targetId, 0 < t.resumeToken.length && (e.resumeToken = this.unsafeCastProtoByteString(t.resumeToken)), e }, t.prototype.toFilter = function(t) { var e = this; if (0 !== t.length) { var n = t.map(function(t) { return t instanceof rl ? e.toRelationFilter(t) : e.toUnaryFilter(t) }); return 1 === n.length ? n[0] : { compositeFilter: { op: "AND", filters: n } } } }, t.prototype.fromFilter = function(t) { var e = this; return t ? void 0 !== t.unaryFilter ? [this.fromUnaryFilter(t)] : void 0 !== t.fieldFilter ? [this.fromRelationFilter(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) { return e.fromFilter(t) }).reduce(function(t, e) { return t.concat(e) }) : Sc("Unknown filter: " + JSON.stringify(t)) : [] }, t.prototype.toOrder = function(t) { var e = this; if (0 !== t.length) return t.map(function(t) { return e.toPropertyOrder(t) }) }, t.prototype.fromOrder = function(t) { var e = this; return t.map(function(t) { return e.fromPropertyOrder(t) }) }, t.prototype.toCursor = function(t) { var e = this; return { before: t.before, values: t.position.map(function(t) { return e.toValue(t) }) } }, t.prototype.fromCursor = function(t) { var e = this,
                n = !!t.before,
                r = t.values.map(function(t) { return e.fromValue(t) }); return new sl(r, n) }, t.prototype.toDirection = function(t) { return pf[t.name] }, t.prototype.fromDirection = function(t) { switch (t) {
                case "ASCENDING":
                    return al.ASCENDING;
                case "DESCENDING":
                    return al.DESCENDING;
                default:
                    return } }, t.prototype.toOperatorName = function(t) { return df[t.name] }, t.prototype.fromOperatorName = function(t) { switch (t) {
                case "EQUAL":
                    return nl.EQUAL;
                case "GREATER_THAN":
                    return nl.GREATER_THAN;
                case "GREATER_THAN_OR_EQUAL":
                    return nl.GREATER_THAN_OR_EQUAL;
                case "LESS_THAN":
                    return nl.LESS_THAN;
                case "LESS_THAN_OR_EQUAL":
                    return nl.LESS_THAN_OR_EQUAL;
                case "ARRAY_CONTAINS":
                    return nl.ARRAY_CONTAINS;
                case "OPERATOR_UNSPECIFIED":
                    return Sc("Unspecified relation");
                default:
                    return Sc("Unknown relation") } }, t.prototype.toFieldPathReference = function(t) { return { fieldPath: t.canonicalString() } }, t.prototype.fromFieldPathReference = function(t) { return bh.fromServerFormat(t.fieldPath) }, t.prototype.toPropertyOrder = function(t) { return { field: this.toFieldPathReference(t.field), direction: this.toDirection(t.dir) } }, t.prototype.fromPropertyOrder = function(t) { return new ul(this.fromFieldPathReference(t.field), this.fromDirection(t.direction)) }, t.prototype.toRelationFilter = function(t) { return t instanceof rl ? { fieldFilter: { field: this.toFieldPathReference(t.field), op: this.toOperatorName(t.op), value: this.toValue(t.value) } } : Sc("Unrecognized filter: " + JSON.stringify(t)) }, t.prototype.fromRelationFilter = function(t) { return new rl(this.fromFieldPathReference(t.fieldFilter.field), this.fromOperatorName(t.fieldFilter.op), this.fromValue(t.fieldFilter.value)) }, t.prototype.toUnaryFilter = function(t) { return t instanceof ol ? { unaryFilter: { field: this.toFieldPathReference(t.field), op: "IS_NAN" } } : t instanceof il ? { unaryFilter: { field: this.toFieldPathReference(t.field), op: "IS_NULL" } } : Sc("Unrecognized filter: " + JSON.stringify(t)) }, t.prototype.fromUnaryFilter = function(t) { switch (t.unaryFilter.op) {
                case "IS_NAN":
                    var e = this.fromFieldPathReference(t.unaryFilter.field); return new ol(e);
                case "IS_NULL":
                    var n = this.fromFieldPathReference(t.unaryFilter.field); return new il(n);
                case "OPERATOR_UNSPECIFIED":
                    return Sc("Unspecified filter");
                default:
                    return Sc("Unknown filter") } }, t.prototype.toDocumentMask = function(t) { var e = []; return t.fields.forEach(function(t) { return e.push(t.canonicalString()) }), { fieldPaths: e } }, t.prototype.fromDocumentMask = function(t) { var e = (t.fieldPaths || []).map(function(t) { return bh.fromServerFormat(t) }); return gl.fromArray(e) }, t }();

    function bf(t, e, n) { return e === n || !e && n in t } var _f = function() {
            function t(t) { this.sendFn = t.sendFn, this.closeFn = t.closeFn } return t.prototype.onOpen = function(t) { Cc(!this.wrappedOnOpen, "Called onOpen on stream twice!"), this.wrappedOnOpen = t }, t.prototype.onClose = function(t) { Cc(!this.wrappedOnClose, "Called onClose on stream twice!"), this.wrappedOnClose = t }, t.prototype.onMessage = function(t) { Cc(!this.wrappedOnMessage, "Called onMessage on stream twice!"), this.wrappedOnMessage = t }, t.prototype.close = function() { this.closeFn() }, t.prototype.send = function(t) { this.sendFn(t) }, t.prototype.callOnOpen = function() { Cc(void 0 !== this.wrappedOnOpen, "Cannot call onOpen because no callback was set"), this.wrappedOnOpen() }, t.prototype.callOnClose = function(t) { Cc(void 0 !== this.wrappedOnClose, "Cannot call onClose because no callback was set"), this.wrappedOnClose(t) }, t.prototype.callOnMessage = function(t) { Cc(void 0 !== this.wrappedOnMessage, "Cannot call onMessage because no callback was set"), this.wrappedOnMessage(t) }, t }(),
        wf = "Connection",
        Ef = { BatchGetDocuments: "batchGet", Commit: "commit" },
        Tf = "gl-js/ fire/" + gc,
        Sf = function() {
            function t(t) { this.databaseId = t.databaseId; var e = t.ssl ? "https" : "http";
                this.baseUrl = e + "://" + t.host } return t.prototype.modifyHeadersForRequest = function(t, e) { if (e)
                    for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
                t["X-Goog-Api-Client"] = Tf }, t.prototype.invokeRPC = function(o, a, s) { var u = this,
                    c = this.makeUrl(o); return new Promise(function(n, r) { var i = new mc;
                    i.listenOnce(dc.COMPLETE, function() { try { switch (i.getLastErrorCode()) {
                                case pc.NO_ERROR:
                                    var t = i.getResponseJson();
                                    wc(wf, "XHR received:", JSON.stringify(t)), n(t); break;
                                case pc.TIMEOUT:
                                    wc(wf, 'RPC "' + o + '" timed out'), r(new Ac(Dc.DEADLINE_EXCEEDED, "Request time out")); break;
                                case pc.HTTP_ERROR:
                                    var e = i.getStatus();
                                    wc(wf, 'RPC "' + o + '" failed with status:', e, "response text:", i.getResponseText()), 0 < e ? r(new Ac(function(t) { switch (t) {
                                            case 200:
                                                return Dc.OK;
                                            case 400:
                                                return Dc.INVALID_ARGUMENT;
                                            case 401:
                                                return Dc.UNAUTHENTICATED;
                                            case 403:
                                                return Dc.PERMISSION_DENIED;
                                            case 404:
                                                return Dc.NOT_FOUND;
                                            case 409:
                                                return Dc.ABORTED;
                                            case 416:
                                                return Dc.OUT_OF_RANGE;
                                            case 429:
                                                return Dc.RESOURCE_EXHAUSTED;
                                            case 499:
                                                return Dc.CANCELLED;
                                            case 500:
                                                return Dc.UNKNOWN;
                                            case 501:
                                                return Dc.UNIMPLEMENTED;
                                            case 503:
                                                return Dc.UNAVAILABLE;
                                            case 504:
                                                return Dc.DEADLINE_EXCEEDED;
                                            default:
                                                return 200 <= t && t < 300 ? Dc.OK : 400 <= t && t < 500 ? Dc.FAILED_PRECONDITION : 500 <= t && t < 600 ? Dc.INTERNAL : Dc.UNKNOWN } }(e), "Server responded with status " + i.getStatusText())) : (wc(wf, 'RPC "' + o + '" failed'), r(new Ac(Dc.UNAVAILABLE, "Connection failed."))); break;
                                default:
                                    Sc('RPC "' + o + '" failed with unanticipated webchannel error ' + i.getLastErrorCode() + ": " + i.getLastError() + ", giving up.") } } finally { wc(wf, 'RPC "' + o + '" completed.') } }); var t = JSON.stringify(a);
                    wc(wf, "XHR sending: ", c + " " + t); var e = { "Content-Type": "text/plain" };
                    u.modifyHeadersForRequest(e, s), i.send(c, "POST", t, e, 15) }) }, t.prototype.invokeStreamingRPC = function(t, e, n) { return this.invokeRPC(t, e, n) }, t.prototype.openStream = function(t, e) { var n = [this.baseUrl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                    r = fc(),
                    i = { backgroundChannelTest: !0, httpSessionIdParam: "gsessionid", initMessageHeaders: {}, messageUrlParams: { database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database }, sendRawJson: !0, supportsCrossDomainXhr: !0 };
                this.modifyHeadersForRequest(i.initMessageHeaders, e), Sn() || (i.httpHeadersOverwriteParam = "$httpHeaders"); var o = n.join("");
                wc(wf, "Creating WebChannel: " + o + " " + i); var a = r.createWebChannel(o, i),
                    s = !1,
                    u = !1,
                    c = new _f({ sendFn: function(t) { u ? wc(wf, "Not sending because WebChannel is closed:", t) : (s || (wc(wf, "Opening WebChannel transport."), a.open(), s = !0), wc(wf, "WebChannel sending:", t), a.send(t)) }, closeFn: function() { return a.close() } }),
                    h = function(t, e) { a.listen(t, function(t) { try { e(t) } catch (t) { setTimeout(function() { throw t }, 0) } }) }; return h(yc.EventType.OPEN, function() { u || wc(wf, "WebChannel transport opened.") }), h(yc.EventType.CLOSE, function() { u || (u = !0, wc(wf, "WebChannel transport closed"), c.callOnClose()) }), h(yc.EventType.ERROR, function(t) { u || (u = !0, wc(wf, "WebChannel transport errored:", t), c.callOnClose(new Ac(Dc.UNAVAILABLE, "The operation could not be completed"))) }), h(yc.EventType.MESSAGE, function(t) { if (!u) { var e = t.data[0];
                        Cc(!!e, "Got a webchannel message without data."); var n = e.error || e[0] && e[0].error; if (n) { wc(wf, "WebChannel received error:", n); var r = n.status,
                                i = function(t) { var e = kl[t]; if (void 0 !== e) return Ml(e) }(r),
                                o = n.message;
                            void 0 === i && (i = Dc.INTERNAL, o = "Unknown error status: " + r + " with message " + n.message), u = !0, c.callOnClose(new Ac(i, o)), a.close() } else wc(wf, "WebChannel received:", e), c.callOnMessage(e) } }), setTimeout(function() { c.callOnOpen() }, 0), c }, t.prototype.makeUrl = function(t) { var e = Ef[t];
                Cc(void 0 !== e, "Unknown REST mapping for: " + t); var n = [this.baseUrl, "/", "v1"]; return n.push("/projects/"), n.push(this.databaseId.projectId), n.push("/databases/"), n.push(this.databaseId.database), n.push("/documents"), n.push(":"), n.push(e), n.join("") }, t }(),
        Cf = function() {
            function t() { this.emptyByteString = "", this.base64Available = "undefined" != typeof atob } return Object.defineProperty(t.prototype, "document", { get: function() { return "undefined" != typeof document ? document : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "window", { get: function() { return "undefined" != typeof window ? window : null }, enumerable: !0, configurable: !0 }), t.prototype.loadConnection = function(t) { return Promise.resolve(new Sf(t)) }, t.prototype.newSerializer = function(t) { return new vf(t, { useProto3Json: !0 }) }, t.prototype.formatJSON = function(t) { return JSON.stringify(t) }, t.prototype.atob = function(t) { return atob(t) }, t.prototype.btoa = function(t) { return btoa(t) }, t }();
    Ic.setPlatform(new Cf); var If, Nf, Df = function() {
            function t(t, e) { var n = this;
                this.previousValue = t, e && (e.sequenceNumberHandler = function(t) { return n.setPreviousValue(t) }, this.writeNewSequenceNumber = function(t) { return e.writeSequenceNumber(t) }) } return t.prototype.setPreviousValue = function(t) { return this.previousValue = Math.max(t, this.previousValue), this.previousValue }, t.prototype.next = function() { var t = ++this.previousValue; return this.writeNewSequenceNumber && this.writeNewSequenceNumber(t), t }, t.INVALID = -1, t }(),
        Af = function() { var n = this;
            this.promise = new Promise(function(t, e) { n.resolve = t, n.reject = e }) };
    (Nf = If || (If = {})).All = "all", Nf.ListenStreamIdle = "listen_stream_idle", Nf.ListenStreamConnectionBackoff = "listen_stream_connection_backoff", Nf.WriteStreamIdle = "write_stream_idle", Nf.WriteStreamConnectionBackoff = "write_stream_connection_backoff", Nf.OnlineStateTimeout = "online_state_timeout", Nf.ClientMetadataRefresh = "client_metadata_refresh", Nf.LruGarbageCollection = "lru_garbage_collection"; var kf = function() {
            function a(t, e, n, r, i) { this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new Af, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.catch = this.deferred.promise.catch.bind(this.deferred.promise), this.deferred.promise.catch(function(t) {}) } return a.createAndSchedule = function(t, e, n, r, i) { var o = new a(t, e, Date.now() + n, r, i); return o.start(n), o }, a.prototype.start = function(t) { var e = this;
                this.timerHandle = setTimeout(function() { return e.handleDelayElapsed() }, t) }, a.prototype.skipDelay = function() { return this.handleDelayElapsed() }, a.prototype.cancel = function(t) { null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new Ac(Dc.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")))) }, a.prototype.handleDelayElapsed = function() { var e = this;
                this.asyncQueue.enqueueAndForget(function() { return null !== e.timerHandle ? (e.clearTimeout(), e.op().then(function(t) { return e.deferred.resolve(t) })) : Promise.resolve() }) }, a.prototype.clearTimeout = function() { null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null) }, a }(),
        Rf = function() {
            function t() { this.tail = Promise.resolve(), this.delayedOperations = [], this.operationInProgress = !1 } return t.prototype.enqueueAndForget = function(t) { this.enqueue(t) }, t.prototype.enqueue = function(t) { var n = this;
                this.verifyNotFailed(); var e = this.tail.then(function() { return n.operationInProgress = !0, t().catch(function(t) { n.failure = t, n.operationInProgress = !1; var e = t.stack || t.message || ""; throw Ec("INTERNAL UNHANDLED ERROR: ", e), e.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function() { throw t }, 0), t }).then(function(t) { return n.operationInProgress = !1, t }) }); return this.tail = e }, t.prototype.enqueueAfterDelay = function(t, e, n) { var r = this;
                this.verifyNotFailed(), Cc(0 <= e, "Attempted to schedule an operation with a negative delay of " + e), Cc(!this.containsDelayedOperation(t), "Attempted to schedule multiple operations with timer id " + t + "."); var i = kf.createAndSchedule(this, t, e, n, function(t) { return r.removeDelayedOperation(t) }); return this.delayedOperations.push(i), i }, t.prototype.verifyNotFailed = function() { this.failure && Sc("AsyncQueue is already failed: " + (this.failure.stack || this.failure.message)) }, t.prototype.verifyOperationInProgress = function() { Cc(this.operationInProgress, "verifyOpInProgress() called when no op in progress on this queue.") }, t.prototype.drain = function() { return this.enqueue(function() { return Promise.resolve() }) }, t.prototype.containsDelayedOperation = function(t) { for (var e = 0, n = this.delayedOperations; e < n.length; e++) { if (n[e].timerId === t) return !0 } return !1 }, t.prototype.runDelayedOperationsEarly = function(r) { var i = this; return this.drain().then(function() { Cc(r === If.All || i.containsDelayedOperation(r), "Attempted to drain to missing operation " + r), i.delayedOperations.sort(function(t, e) { return t.targetTimeMs - e.targetTimeMs }); for (var t = 0, e = i.delayedOperations; t < e.length; t++) { var n = e[t]; if (n.skipDelay(), r !== If.All && n.timerId === r) break } return i.drain() }) }, t.prototype.removeDelayedOperation = function(t) { var e = this.delayedOperations.indexOf(t);
                Cc(0 <= e, "Delayed operation not found."), this.delayedOperations.splice(e, 1) }, t }(),
        Of = "",
        Pf = "",
        Mf = "",
        Lf = "";

    function xf(t) { for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = Uf(e)), e = Ff(t.get(n), e); return Uf(e) }

    function Ff(t, e) { for (var n = e, r = t.length, i = 0; i < r; i++) { var o = t.charAt(i); switch (o) {
                case "\0":
                    n += Of + Mf; break;
                case Of:
                    n += Of + Lf; break;
                default:
                    n += o } } return n }

    function Uf(t) { return t + Of + Pf }

    function qf(t) { var e = t.length; if (Cc(2 <= e, "Invalid path " + t), 2 === e) return Cc(t.charAt(0) === Of && t.charAt(1) === Pf, "Non-empty path " + t + " had length 2"), gh.EMPTY_PATH; for (var n = e - 2, r = [], i = "", o = 0; o < e;) { var a = t.indexOf(Of, o); switch ((a < 0 || n < a) && Sc('Invalid encoded resource path: "' + t + '"'), t.charAt(a + 1)) {
                case Pf:
                    var s = t.substring(o, a),
                        u = void 0;
                    0 === i.length ? u = s : (u = i += s, i = ""), r.push(u); break;
                case Mf:
                    i += t.substring(o, a), i += "\0"; break;
                case Lf:
                    i += t.substring(o, a + 1); break;
                default:
                    Sc('Invalid encoded resource path: "' + t + '"') }
            o = a + 2 } return new gh(r) } var Vf, Bf, jf = function() {
            function t(t, e, n) { this.batchId = t, this.localWriteTime = e, Cc(0 < (this.mutations = n).length, "Cannot create an empty mutation batch") } return t.prototype.applyToRemoteDocument = function(t, e, n) { e && Cc(e.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + e.key); var r = n.mutationResults;
                Cc(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ")."); for (var i = 0; i < this.mutations.length; i++) { var o = this.mutations[i]; if (o.key.isEqual(t)) { var a = r[i];
                        e = o.applyToRemoteDocument(e, a) } } return e }, t.prototype.applyToLocalView = function(t, e) { e && Cc(e.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + e.key); for (var n = e, r = 0; r < this.mutations.length; r++) { var i = this.mutations[r];
                    i.key.isEqual(t) && (e = i.applyToLocalView(e, n, this.localWriteTime)) } return e }, t.prototype.keys = function() { for (var t = Wl(), e = 0, n = this.mutations; e < n.length; e++) { var r = n[e];
                    t = t.add(r.key) } return t }, t.prototype.isEqual = function(t) { return this.batchId === t.batchId && eh(this.mutations, t.mutations) }, t }(),
        Wf = function() {
            function s(t, e, n, r, i) { this.batch = t, this.commitVersion = e, this.mutationResults = n, this.streamToken = r, this.docVersions = i } return s.from = function(t, e, n, r) { Cc(t.mutations.length === n.length, "Mutations sent " + t.mutations.length + " must equal results received " + n.length); for (var i = Bl(), o = t.mutations, a = 0; a < o.length; a++) i = i.insert(o[a].key, n[a].version); return new s(t, e, n, r, i) }, s }();
    (Bf = Vf || (Vf = {}))[Bf.QueryCache = 0] = "QueryCache", Bf[Bf.SyncEngine = 1] = "SyncEngine"; var Kf = function() {
            function t(t, e) { Cc((1 & (this.generatorId = t)) === t, "Generator ID " + t + " contains more than 1 reserved bits"), this.seek(void 0 !== e ? e : this.generatorId) } return t.prototype.next = function() { var t = this.nextId; return this.nextId += 2, t }, t.prototype.after = function(t) { return this.seek(t + 2), this.next() }, t.prototype.seek = function(t) { Cc((1 & t) === this.generatorId, "Cannot supply target ID from different generator ID"), this.nextId = t }, t.forQueryCache = function() { return new t(Vf.QueryCache, 2) }, t.forSyncEngine = function() { return new t(Vf.SyncEngine) }, t }(),
        Qf = function() {
            function a(t) { var e = this;
                this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(function(t) { e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t) }, function(t) { e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t) }) } return a.prototype.catch = function(t) { return this.next(void 0, t) }, a.prototype.next = function(r, i) { var o = this; return this.callbackAttached && Sc("Called next() or catch() twice for PersistencePromise"), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(i, this.error) : this.wrapSuccess(r, this.result) : new a(function(e, n) { o.nextCallback = function(t) { o.wrapSuccess(r, t).next(e, n) }, o.catchCallback = function(t) { o.wrapFailure(i, t).next(e, n) } }) }, a.prototype.toPromise = function() { var n = this; return new Promise(function(t, e) { n.next(t, e) }) }, a.prototype.wrapUserFunction = function(t) { try { var e = t(); return e instanceof a ? e : a.resolve(e) } catch (t) { return a.reject(t) } }, a.prototype.wrapSuccess = function(t, e) { return t ? this.wrapUserFunction(function() { return t(e) }) : a.resolve(e) }, a.prototype.wrapFailure = function(t, e) { return t ? this.wrapUserFunction(function() { return t(e) }) : a.reject(e) }, a.resolve = function(n) { return new a(function(t, e) { t(n) }) }, a.reject = function(n) { return new a(function(t, e) { e(n) }) }, a.waitFor = function(t) { return new a(function(e, n) { var r = 0,
                        i = 0,
                        o = !1;
                    t.forEach(function(t) {++r, t.next(function() {++i, o && i === r && e() }, function(t) { return n(t) }) }), o = !0, i === r && e() }) }, a.or = function(t) { for (var n = a.resolve(!1), e = function(e) { n = n.next(function(t) { return t ? a.resolve(t) : e() }) }, r = 0, i = t; r < i.length; r++) { e(i[r]) } return n }, a.forEach = function(t, n) { var r = this,
                    i = []; return t.forEach(function(t, e) { i.push(n.call(r, t, e)) }), this.waitFor(i) }, a }(),
        Hf = "SimpleDb",
        zf = function() {
            function s(t) { this.db = t } return s.openOrCreate = function(o, t, a) { return Cc(s.isAvailable(), "IndexedDB not supported in current environment."), wc(Hf, "Opening database:", o), new Qf(function(n, r) { var i = window.indexedDB.open(o, t);
                    i.onsuccess = function(t) { var e = t.target.result;
                        n(new s(e)) }, i.onblocked = function() { r(new Ac(Dc.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.")) }, i.onerror = function(t) { var e = t.target.error; "VersionError" === e.name ? r(new Ac(Dc.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(e) }, i.onupgradeneeded = function(t) { wc(Hf, 'Database "' + o + '" requires upgrade from version:', t.oldVersion); var e = t.target.result,
                            n = new Yf(i.transaction);
                        a.createOrUpgrade(e, n, t.oldVersion, pp).next(function() { wc(Hf, "Database upgrade to version " + pp + " complete") }) } }).toPromise() }, s.delete = function(t) { return wc(Hf, "Removing database:", t), Jf(window.indexedDB.deleteDatabase(t)).toPromise() }, s.isAvailable = function() { if ("undefined" == typeof window || null == window.indexedDB) return !1; if (void 0 === window.navigator) return "YES" === process.env.USE_MOCK_PERSISTENCE; var t = window.navigator.userAgent; return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/")) }, s.getStore = function(t, e) { return t.store(e) }, s.prototype.runTransaction = function(t, e, n) { var r = Yf.open(this.db, t, e),
                    i = n(r).catch(function(t) { return r.abort(t), Qf.reject(t) }).toPromise(); return i.catch(function() {}), r.completionPromise.then(function() { return i }) }, s.prototype.close = function() { this.db.close() }, s }(),
        Gf = function() {
            function t(t) { this.dbCursor = t, this.shouldStop = !1, this.nextKey = null } return Object.defineProperty(t.prototype, "isDone", { get: function() { return this.shouldStop }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "skipToKey", { get: function() { return this.nextKey }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "cursor", { set: function(t) { this.dbCursor = t }, enumerable: !0, configurable: !0 }), t.prototype.done = function() { this.shouldStop = !0 }, t.prototype.skip = function(t) { this.nextKey = t }, t.prototype.delete = function() { return Jf(this.dbCursor.delete()) }, t }(),
        Yf = function() {
            function r(t) { var e = this;
                this.transaction = t, this.aborted = !1, this.completionDeferred = new Af, this.transaction.oncomplete = function() { e.completionDeferred.resolve() }, this.transaction.onabort = function() { t.error ? e.completionDeferred.reject(t.error) : e.completionDeferred.resolve() }, this.transaction.onerror = function(t) { e.completionDeferred.reject(t.target.error) } } return r.open = function(t, e, n) { return new r(t.transaction(n, e)) }, Object.defineProperty(r.prototype, "completionPromise", { get: function() { return this.completionDeferred.promise }, enumerable: !0, configurable: !0 }), r.prototype.abort = function(t) { t && this.completionDeferred.reject(t), this.aborted || (wc(Hf, "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort()) }, r.prototype.store = function(t) { var e = this.transaction.objectStore(t); return Cc(!!e, "Object store not part of transaction: " + t), new Xf(e) }, r }(),
        Xf = function() {
            function t(t) { this.store = t } return t.prototype.put = function(t, e) { return Jf(void 0 !== e ? (wc(Hf, "PUT", this.store.name, t, e), this.store.put(e, t)) : (wc(Hf, "PUT", this.store.name, "<auto-key>", t), this.store.put(t))) }, t.prototype.add = function(t) { return wc(Hf, "ADD", this.store.name, t, t), Jf(this.store.add(t)) }, t.prototype.get = function(e) { var n = this; return Jf(this.store.get(e)).next(function(t) { return void 0 === t && (t = null), wc(Hf, "GET", n.store.name, e, t), t }) }, t.prototype.delete = function(t) { return wc(Hf, "DELETE", this.store.name, t), Jf(this.store.delete(t)) }, t.prototype.count = function() { return wc(Hf, "COUNT", this.store.name), Jf(this.store.count()) }, t.prototype.loadAll = function(t, e) { var n = this.cursor(this.options(t, e)),
                    r = []; return this.iterateCursor(n, function(t, e) { r.push(e) }).next(function() { return r }) }, t.prototype.deleteAll = function(t, e) { wc(Hf, "DELETE ALL", this.store.name); var n = this.options(t, e);
                n.keysOnly = !1; var r = this.cursor(n); return this.iterateCursor(r, function(t, e, n) { return n.delete() }) }, t.prototype.iterate = function(t, e) { var n;
                e ? n = t : (n = {}, e = t); var r = this.cursor(n); return this.iterateCursor(r, e) }, t.prototype.iterateSerial = function(r) { var t = this.cursor({}); return new Qf(function(n, e) { t.onerror = function(t) { e(t.target.error) }, t.onsuccess = function(t) { var e = t.target.result;
                        e ? r(e.primaryKey, e.value).next(function(t) { t ? e.continue() : n() }) : n() } }) }, t.prototype.iterateCursor = function(t, a) { var s = []; return new Qf(function(o, e) { t.onerror = function(t) { e(t.target.error) }, t.onsuccess = function(t) { var e = t.target.result; if (e) { var n = new Gf(e),
                                r = a(e.primaryKey, e.value, n); if (r instanceof Qf) { var i = r.catch(function(t) { return n.done(), Qf.reject(t) });
                                s.push(i) }
                            n.isDone ? o() : null === n.skipToKey ? e.continue() : e.continue(n.skipToKey) } else o() } }).next(function() { return Qf.waitFor(s) }) }, t.prototype.options = function(t, e) { var n = void 0; return void 0 !== t && ("string" == typeof t ? n = t : (Cc(void 0 === e, "3rd argument must not be defined if 2nd is a range."), e = t)), { index: n, range: e } }, t.prototype.cursor = function(t) { var e = "next"; if (t.reverse && (e = "prev"), t.index) { var n = this.store.index(t.index); return t.keysOnly ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e) } return this.store.openCursor(t.range, e) }, t }();

    function Jf(t) { return new Qf(function(n, e) { t.onsuccess = function(t) { var e = t.target.result;
                n(e) }, t.onerror = function(t) { e(t.target.error) } }) } var $f = function() {
        function t(t, e) { this.referenceDelegate = t, this.serializer = e, this.targetIdGenerator = Kf.forQueryCache() } return t.prototype.allocateTargetId = function(e) { var n = this; return this.retrieveMetadata(e).next(function(t) { return t.highestTargetId = n.targetIdGenerator.after(t.highestTargetId), n.saveMetadata(e, t).next(function() { return t.highestTargetId }) }) }, t.prototype.getLastRemoteSnapshotVersion = function(t) { return this.retrieveMetadata(t).next(function(t) { return ll.fromTimestamp(new lh(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds)) }) }, t.prototype.getHighestSequenceNumber = function(t) { return ep(t.simpleDbTransaction) }, t.prototype.setTargetsMetadata = function(e, n, r) { var i = this; return this.retrieveMetadata(e).next(function(t) { return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.toTimestamp()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.saveMetadata(e, t) }) }, t.prototype.addQueryData = function(e, n) { var r = this; return this.saveQueryData(e, n).next(function() { return r.retrieveMetadata(e).next(function(t) { return t.targetCount += 1, r.updateMetadataFromQueryData(n, t), r.saveMetadata(e, t) }) }) }, t.prototype.updateQueryData = function(t, e) { return this.saveQueryData(t, e) }, t.prototype.removeQueryData = function(e, t) { var n = this; return this.removeMatchingKeysForTargetId(e, t.targetId).next(function() { return Zf(e).delete(t.targetId) }).next(function() { return n.retrieveMetadata(e) }).next(function(t) { return Cc(0 < t.targetCount, "Removing from an empty query cache"), t.targetCount -= 1, n.saveMetadata(e, t) }) }, t.prototype.removeTargets = function(r, i, o) { var a = this,
                s = 0,
                u = []; return Zf(r).iterate(function(t, e) { var n = a.serializer.fromDbTarget(e);
                n.sequenceNumber <= i && void 0 === o[n.targetId] && (s++, u.push(a.removeQueryData(r, n))) }).next(function() { return Qf.waitFor(u) }).next(function() { return s }) }, t.prototype.forEachTarget = function(t, r) { var i = this; return Zf(t).iterate(function(t, e) { var n = i.serializer.fromDbTarget(e);
                r(n) }) }, t.prototype.retrieveMetadata = function(t) { return tp(t.simpleDbTransaction) }, t.prototype.saveMetadata = function(t, e) { return (n = t, Yp.getStore(n, Ip.store)).put(Ip.key, e); var n }, t.prototype.saveQueryData = function(t, e) { return Zf(t).put(this.serializer.toDbTarget(e)) }, t.prototype.updateMetadataFromQueryData = function(t, e) { var n = !1; return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n }, t.prototype.getQueryCount = function(t) { return this.retrieveMetadata(t).next(function(t) { return t.targetCount }) }, t.prototype.getQueryData = function(t, i) { var o = this,
                e = i.canonicalId(),
                n = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                a = null; return Zf(t).iterate({ range: n, index: Sp.queryTargetsIndexName }, function(t, e, n) { var r = o.serializer.fromDbTarget(e);
                i.isEqual(r.query) && (a = r, n.done()) }).next(function() { return a }) }, t.prototype.addMatchingKeys = function(n, t, r) { var i = this,
                o = [],
                a = np(n); return t.forEach(function(t) { var e = xf(t.path);
                o.push(a.put(new Cp(r, e))), o.push(i.referenceDelegate.addReference(n, t)) }), Qf.waitFor(o) }, t.prototype.removeMatchingKeys = function(n, t, r) { var i = this,
                o = np(n); return Qf.forEach(t, function(t) { var e = xf(t.path); return Qf.waitFor([o.delete([r, e]), i.referenceDelegate.removeReference(n, t)]) }) }, t.prototype.removeMatchingKeysForTargetId = function(t, e) { var n = np(t),
                r = IDBKeyRange.bound([e], [e + 1], !1, !0); return n.delete(r) }, t.prototype.getMatchingKeysForTargetId = function(t, e) { var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                r = np(t),
                o = Wl(); return r.iterate({ range: n, keysOnly: !0 }, function(t, e, n) { var r = qf(t[1]),
                    i = new _h(r);
                o = o.add(i) }).next(function() { return o }) }, t.prototype.containsKey = function(t, e) { var n, r = xf(e.path),
                i = IDBKeyRange.bound([r], [(n = r, n + "\0")], !1, !0),
                o = 0; return np(t).iterate({ index: Cp.documentTargetsIndex, keysOnly: !0, range: i }, function(t, e, n) { var r = t[0];
                t[1];
                0 !== r && (o++, n.done()) }).next(function() { return 0 < o }) }, t.prototype.getQueryDataForTarget = function(t, e) { var n = this; return Zf(t).get(e).next(function(t) { return t ? n.serializer.fromDbTarget(t) : null }) }, t }();

    function Zf(t) { return Yp.getStore(t, Sp.store) }

    function tp(t) { return zf.getStore(t, Ip.store).get(Ip.key).next(function(t) { return Cc(null !== t, "Missing metadata row."), t }) }

    function ep(t) { return tp(t).next(function(t) { return t.highestListenSequenceNumber }) }

    function np(t) { return Yp.getStore(t, Cp.store) } var rp = function() {
            function t(t) { this.mapKeyFn = t, this.inner = {} } return t.prototype.get = function(t) { var e = this.mapKeyFn(t),
                    n = this.inner[e]; if (void 0 !== n)
                    for (var r = 0, i = n; r < i.length; r++) { var o = i[r],
                            a = o[0],
                            s = o[1]; if (a.isEqual(t)) return s } }, t.prototype.has = function(t) { return void 0 !== this.get(t) }, t.prototype.set = function(t, e) { var n = this.mapKeyFn(t),
                    r = this.inner[n]; if (void 0 !== r) { for (var i = 0; i < r.length; i++)
                        if (r[i][0].isEqual(t)) return void(r[i] = [t, e]);
                    r.push([t, e]) } else this.inner[n] = [
                    [t, e]
                ] }, t.prototype.delete = function(t) { var e = this.mapKeyFn(t),
                    n = this.inner[e]; if (void 0 === n) return !1; for (var r = 0; r < n.length; r++)
                    if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                return !1 }, t.prototype.forEach = function(s) { Mc(this.inner, function(t, e) { for (var n = 0, r = e; n < r.length; n++) { var i = r[n],
                            o = i[0],
                            a = i[1];
                        s(o, a) } }) }, t.prototype.isEmpty = function() { return Lc(this.inner) }, t }(),
        ip = function() {
            function t() { this.changes = xl(), this.documentSizes = new rp(function(t) { return t.toString() }) } return t.prototype.addEntry = function(t) { var e = this.assertChanges();
                this.changes = e.insert(t.key, t) }, t.prototype.getEntry = function(t, e) { var n = this,
                    r = this.assertChanges().get(e); return r ? Qf.resolve(r) : this.getFromCache(t, e).next(function(t) { return null === t ? (n.documentSizes.set(e, 0), null) : (n.documentSizes.set(e, t.size), t.maybeDocument) }) }, t.prototype.getEntries = function(t, e) { var n = this; return this.getAllFromCache(t, e).next(function(t) { var e = t.maybeDocuments; return t.sizeMap.forEach(function(t, e) { n.documentSizes.set(t, e) }), e }) }, t.prototype.apply = function(t) { var e = this.applyChanges(t); return this.changes = null, e }, t.prototype.assertChanges = function() { return Cc(null !== this.changes, "Changes have already been applied."), this.changes }, t }(),
        op = "The remote document changelog no longer contains all changes for all local query views. It may be necessary to rebuild these views.",
        ap = function() {
            function t(t, e) { this.serializer = t, this.keepDocumentChangeLog = e, this._lastProcessedDocumentChangeId = 0 } return Object.defineProperty(t.prototype, "lastProcessedDocumentChangeId", { get: function() { return this._lastProcessedDocumentChangeId }, enumerable: !0, configurable: !0 }), t.prototype.start = function(t) { var e = zf.getStore(t, Dp.store); return this.synchronizeLastDocumentChangeId(e) }, t.prototype.addEntries = function(t, e, n) { var r = []; if (0 < e.length) { for (var i = cp(t), o = Wl(), a = 0, s = e; a < s.length; a++) { var u = s[a],
                            c = u.key,
                            h = u.doc;
                        r.push(i.put(lp(c), h)), o = o.add(c) }
                    this.keepDocumentChangeLog && r.push(hp(t).put({ changes: this.serializer.toDbResourcePaths(o) })), r.push(this.updateSize(t, n)) } return Qf.waitFor(r) }, t.prototype.removeEntry = function(t, e) { var n = cp(t),
                    r = lp(e); return n.get(r).next(function(t) { return t ? n.delete(r).next(function() { return fp(t) }) : Qf.resolve(0) }) }, t.prototype.getEntry = function(t, e) { var n = this; return cp(t).get(lp(e)).next(function(t) { return t ? n.serializer.fromDbRemoteDocument(t) : null }) }, t.prototype.getSizedEntry = function(t, e) { var n = this; return cp(t).get(lp(e)).next(function(t) { return t ? { maybeDocument: n.serializer.fromDbRemoteDocument(t), size: fp(t) } : null }) }, t.prototype.getEntries = function(t, e) { var n = this,
                    r = Fl(); return this.forEachDbEntry(t, e, function(t, e) { r = e ? r.insert(t, n.serializer.fromDbRemoteDocument(e)) : r.insert(t, null) }).next(function() { return r }) }, t.prototype.getSizedEntries = function(t, e) { var n = this,
                    r = Fl(),
                    i = new Ch(_h.comparator); return this.forEachDbEntry(t, e, function(t, e) { i = e ? (r = r.insert(t, n.serializer.fromDbRemoteDocument(e)), i.insert(t, fp(e))) : (r = r.insert(t, null), i.insert(t, 0)) }).next(function() { return { maybeDocuments: r, sizeMap: i } }) }, t.prototype.forEachDbEntry = function(t, e, i) { if (e.isEmpty()) return Qf.resolve(); var n = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
                    o = e.getIterator(),
                    a = o.getNext(); return cp(t).iterate({ range: n }, function(t, e, n) { for (var r = _h.fromSegments(t); a && _h.comparator(a, r) < 0;) i(a, null), a = o.getNext();
                    a && a.isEqual(r) && (i(a, e), a = o.hasNext() ? o.getNext() : null), a ? n.skip(a.path.toArray()) : n.done() }).next(function() { for (; a;) i(a, null), a = o.hasNext() ? o.getNext() : null }) }, t.prototype.getDocumentsMatchingQuery = function(t, i) { var o = this,
                    a = ql(),
                    s = i.path.length + 1,
                    e = i.path.toArray(),
                    n = IDBKeyRange.lowerBound(e); return cp(t).iterate({ range: n }, function(t, e, n) { if (t.length === s) { var r = o.serializer.fromDbRemoteDocument(e);
                        i.path.isPrefixOf(r.key.path) ? r instanceof Eh && i.matches(r) && (a = a.insert(r.key, r)) : n.done() } }).next(function() { return a }) }, t.prototype.getNewDocumentChanges = function(e) { var r = this;
                Cc(this.keepDocumentChangeLog, "Can only call getNewDocumentChanges() when document change log is enabled"); var n = Wl(),
                    i = xl(),
                    t = IDBKeyRange.lowerBound(this._lastProcessedDocumentChangeId + 1),
                    o = !0,
                    a = hp(e); return a.iterate({ range: t }, function(t, e) { if (o && (o = !1, r._lastProcessedDocumentChangeId + 1 !== e.id)) return r.synchronizeLastDocumentChangeId(a).next(function() { return Qf.reject(new Ac(Dc.DATA_LOSS, op)) });
                    n = n.unionWith(r.serializer.fromDbResourcePaths(e.changes)), r._lastProcessedDocumentChangeId = e.id }).next(function() { var t = []; return n.forEach(function(n) { t.push(r.getEntry(e, n).next(function(t) { var e = t || new Th(n, ll.forDeletedDoc());
                            i = i.insert(n, e) })) }), Qf.waitFor(t) }).next(function() { return i }) }, t.prototype.removeDocumentChangesThroughChangeId = function(t, e) { var n = IDBKeyRange.upperBound(e); return hp(t).delete(n) }, t.prototype.synchronizeLastDocumentChangeId = function(t) { var r = this; return this._lastProcessedDocumentChangeId = 0, t.iterate({ keysOnly: !0, reverse: !0 }, function(t, e, n) { r._lastProcessedDocumentChangeId = t, n.done() }) }, t.prototype.newChangeBuffer = function() { return new up(this) }, t.prototype.getSize = function(t) { return this.getMetadata(t).next(function(t) { return t.byteSize }) }, t.prototype.getMetadata = function(t) { return sp(t).get(Tp.key).next(function(t) { return Cc(!!t, "Missing document cache metadata"), t }) }, t.prototype.setMetadata = function(t, e) { return sp(t).put(Tp.key, e) }, t.prototype.updateSize = function(e, n) { var r = this; return this.getMetadata(e).next(function(t) { return t.byteSize += n, r.setMetadata(e, t) }) }, t }();

    function sp(t) { return Yp.getStore(t, Tp.store) } var up = function(n) {
        function t(t) { var e = n.call(this) || this; return e.documentCache = t, e } return an(t, n), t.prototype.applyChanges = function(t) { var o = this,
                e = this.assertChanges(),
                a = 0,
                s = []; return e.forEach(function(t, e) { var n = o.documentCache.serializer.toDbRemoteDocument(e),
                    r = o.documentSizes.get(t);
                Cc(void 0 !== r, "Attempting to change document " + t.toString() + " without having read it first"); var i = fp(n);
                a += i - r, s.push({ key: t, doc: n }) }), this.documentCache.addEntries(t, s, a) }, t.prototype.getFromCache = function(t, e) { return this.documentCache.getSizedEntry(t, e) }, t.prototype.getAllFromCache = function(t, e) { return this.documentCache.getSizedEntries(t, e) }, t }(ip);

    function cp(t) { return Yp.getStore(t, Ep.store) }

    function hp(t) { return Yp.getStore(t, Dp.store) }

    function lp(t) { return t.path.toArray() }

    function fp(t) { var e; if (t.document) e = t.document;
        else if (t.unknownDocument) e = t.unknownDocument;
        else { if (!t.noDocument) throw Sc("Unknown remote document type");
            e = t.noDocument } return JSON.stringify(e).length } var pp = 7,
        dp = function() {
            function t(t) { this.serializer = t } return t.prototype.createOrUpgrade = function(t, n, e, r) { var i, o = this;
                Cc(e < r && 0 <= e && r <= pp, "Unexpected schema upgrade from v" + e + " to v{toVersion}."), e < 1 && 1 <= r && (t.createObjectStore(mp.store), (i = t).createObjectStore(gp.store, { keyPath: gp.keyPath }), i.createObjectStore(vp.store, { keyPath: vp.keyPath, autoIncrement: !0 }).createIndex(vp.userMutationsIndex, vp.userMutationsKeyPath, { unique: !0 }), i.createObjectStore(bp.store), Np(t), t.createObjectStore(Ep.store)); var a, s = Qf.resolve(); return e < 3 && 3 <= r && (0 !== e && ((a = t).deleteObjectStore(Cp.store), a.deleteObjectStore(Sp.store), a.deleteObjectStore(Ip.store), Np(t)), s = s.next(function() { return t = n.store(Ip.store), e = new Ip(0, 0, ll.MIN.toTimestamp(), 0), t.put(Ip.key, e); var t, e })), e < 4 && 4 <= r && (0 !== e && (s = s.next(function() { return i = t, (o = n).store(vp.store).loadAll().next(function(t) { i.deleteObjectStore(vp.store); var e = i.createObjectStore(vp.store, { keyPath: vp.keyPath, autoIncrement: !0 });
                        e.createIndex(vp.userMutationsIndex, vp.userMutationsKeyPath, { unique: !0 }); var n = o.store(vp.store),
                            r = t.map(function(t) { return n.put(t) }); return Qf.waitFor(r) }); var i, o })), s = s.next(function() { t.createObjectStore(Ap.store, { keyPath: Ap.keyPath }), t.createObjectStore(Dp.store, { keyPath: "id", autoIncrement: !0 }) })), e < 5 && 5 <= r && (s = s.next(function() { return o.removeAcknowledgedMutations(n) })), e < 6 && 6 <= r && (s = s.next(function() { return t.createObjectStore(Tp.store), o.addDocumentGlobal(n) })), e < 7 && 7 <= r && (s = s.next(function() { return o.ensureSequenceNumbers(n) })), s }, t.prototype.addDocumentGlobal = function(e) { var n = 0; return e.store(Ep.store).iterate(function(t, e) { n += fp(e) }).next(function() { var t = new Tp(n); return e.store(Tp.store).put(Tp.key, t) }) }, t.prototype.removeAcknowledgedMutations = function(r) { var i = this,
                    t = r.store(gp.store),
                    e = r.store(vp.store); return t.loadAll().next(function(t) { return Qf.forEach(t, function(n) { var t = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]); return e.loadAll(vp.userMutationsIndex, t).next(function(t) { return Qf.forEach(t, function(t) { Cc(t.userId === n.userId, "Cannot process batch " + t.batchId + " from unexpected user"); var e = i.serializer.fromDbMutationBatch(t); return Pp(r, n.userId, e).next(function() {}) }) }) }) }) }, t.prototype.ensureSequenceNumbers = function(t) { var a = t.store(Cp.store),
                    e = t.store(Ep.store); return ep(t).next(function(i) { var o = []; return e.iterate(function(t, e) { var n = new gh(t),
                            r = [0, xf(n)];
                        o.push(a.get(r).next(function(t) { return t ? Qf.resolve() : (e = n, a.put(new Cp(0, xf(e), i))); var e })) }).next(function() { return Qf.waitFor(o) }) }) }, t }(); var yp = function(t, e) { this.seconds = t, this.nanoseconds = e },
        mp = function() {
            function t(t, e, n) { this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n } return t.store = "owner", t.key = "owner", t }(); var gp = function() {
            function t(t, e, n) { this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n } return t.store = "mutationQueues", t.keyPath = "userId", t }(),
        vp = function() {
            function t(t, e, n, r) { this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.mutations = r } return t.store = "mutations", t.keyPath = "batchId", t.userMutationsIndex = "userMutationsIndex", t.userMutationsKeyPath = ["userId", "batchId"], t }(); var bp = function() {
        function t() {} return t.prefixForUser = function(t) { return [t] }, t.prefixForPath = function(t, e) { return [t, xf(e)] }, t.key = function(t, e, n) { return [t, xf(e), n] }, t.store = "documentMutations", t.PLACEHOLDER = new t, t }(); var _p = function(t, e) { this.path = t, this.readTime = e },
        wp = function(t, e) { this.path = t, this.version = e },
        Ep = function() {
            function t(t, e, n, r) { this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r } return t.store = "remoteDocuments", t }(),
        Tp = function() {
            function t(t) { this.byteSize = t } return t.store = "remoteDocumentGlobal", t.key = "remoteDocumentGlobalKey", t }(); var Sp = function() {
            function t(t, e, n, r, i, o) { this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.query = o } return t.store = "targets", t.keyPath = "targetId", t.queryTargetsIndexName = "queryTargetsIndex", t.queryTargetsKeyPath = ["canonicalId", "targetId"], t }(),
        Cp = function() {
            function t(t, e, n) { this.targetId = t, this.path = e, Cc(0 === t == (void 0 !== (this.sequenceNumber = n)), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number") } return t.store = "targetDocuments", t.keyPath = ["targetId", "path"], t.documentTargetsIndex = "documentTargetsIndex", t.documentTargetsKeyPath = ["path", "targetId"], t }(),
        Ip = function() {
            function t(t, e, n, r) { this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r } return t.key = "targetGlobalKey", t.store = "targetGlobal", t }();

    function Np(t) { t.createObjectStore(Cp.store, { keyPath: Cp.keyPath }).createIndex(Cp.documentTargetsIndex, Cp.documentTargetsKeyPath, { unique: !0 }), t.createObjectStore(Sp.store, { keyPath: Sp.keyPath }).createIndex(Sp.queryTargetsIndexName, Sp.queryTargetsKeyPath, { unique: !0 }), t.createObjectStore(Ip.store) } var Dp = function() {
        function t(t) { this.changes = t } return t.store = "remoteDocumentChanges", t.keyPath = "id", t }(); var Ap = function() {
        function t(t, e, n, r, i) { this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r, this.lastProcessedDocumentChangeId = i } return t.store = "clientMetadata", t.keyPath = "clientId", t }(); var kp = [gp.store, vp.store, bp.store, Ep.store, Sp.store, mp.store, Ip.store, Cp.store].concat([Ap.store, Dp.store]).concat([Tp.store]),
        Rp = function() {
            function r(t, e, n) { this.userId = t, this.serializer = e, this.referenceDelegate = n, this.documentKeysByBatchId = {} } return r.forUser = function(t, e, n) { return Cc("" !== t.uid, "UserID must not be an empty string."), new r(t.isAuthenticated() ? t.uid : "", e, n) }, r.prototype.checkEmpty = function(t) { var r = !0,
                    e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]); return Lp(t).iterate({ index: vp.userMutationsIndex, range: e }, function(t, e, n) { r = !1, n.done() }).next(function() { return r }) }, r.prototype.acknowledgeBatch = function(e, t, n) { return this.getMutationQueueMetadata(e).next(function(t) { return t.lastStreamToken = Mp(n), Fp(e).put(t) }) }, r.prototype.getLastStreamToken = function(t) { return this.getMutationQueueMetadata(t).next(function(t) { return t.lastStreamToken }) }, r.prototype.setLastStreamToken = function(e, n) { return this.getMutationQueueMetadata(e).next(function(t) { return t.lastStreamToken = Mp(n), Fp(e).put(t) }) }, r.prototype.addMutationBatch = function(t, u, c) { var h = this,
                    l = xp(t),
                    f = Lp(t); return f.add({}).next(function(t) { Cc("number" == typeof t, "Auto-generated key is not a number"); var e = new jf(t, u, c),
                        n = h.serializer.toDbMutationBatch(h.userId, e);
                    h.documentKeysByBatchId[t] = e.keys(); for (var r = [], i = 0, o = c; i < o.length; i++) { var a = o[i],
                            s = bp.key(h.userId, a.key.path, t);
                        r.push(f.put(n)), r.push(l.put(s, bp.PLACEHOLDER)) } return Qf.waitFor(r).next(function() { return e }) }) }, r.prototype.lookupMutationBatch = function(t, e) { var n = this; return Lp(t).get(e).next(function(t) { return t ? (Cc(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), n.serializer.fromDbMutationBatch(t)) : null }) }, r.prototype.lookupMutationKeys = function(t, n) { var r = this; return this.documentKeysByBatchId[n] ? Qf.resolve(this.documentKeysByBatchId[n]) : this.lookupMutationBatch(t, n).next(function(t) { if (t) { var e = t.keys(); return r.documentKeysByBatchId[n] = e } return null }) }, r.prototype.getNextMutationBatchAfterBatchId = function(n, o) { var a = this; return this.getMutationQueueMetadata(n).next(function(t) { var r = o + 1,
                        e = IDBKeyRange.lowerBound([a.userId, r]),
                        i = null; return Lp(n).iterate({ index: vp.userMutationsIndex, range: e }, function(t, e, n) { e.userId === a.userId && (Cc(e.batchId >= r, "Should have found mutation after " + r), i = a.serializer.fromDbMutationBatch(e)), n.done() }).next(function() { return i }) }) }, r.prototype.getAllMutationBatches = function(t) { var e = this,
                    n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]); return Lp(t).loadAll(vp.userMutationsIndex, n).next(function(t) { return t.map(function(t) { return e.serializer.fromDbMutationBatch(t) }) }) }, r.prototype.getAllMutationBatchesAffectingDocumentKey = function(s, u) { var c = this,
                    t = bp.prefixForPath(this.userId, u.path),
                    e = IDBKeyRange.lowerBound(t),
                    h = []; return xp(s).iterate({ range: e }, function(e, t, n) { var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = qf(i); if (r === c.userId && u.path.isEqual(a)) return Lp(s).get(o).next(function(t) { if (!t) throw Sc("Dangling document-mutation reference found: " + e + " which points to " + o);
                        Cc(t.userId === c.userId, "Unexpected user '" + t.userId + "' for mutation batch " + o), h.push(c.serializer.fromDbMutationBatch(t)) });
                    n.done() }).next(function() { return h }) }, r.prototype.getAllMutationBatchesAffectingDocumentKeys = function(r, t) { var u = this,
                    c = new yl(th),
                    i = []; return t.forEach(function(s) { var t = bp.prefixForPath(u.userId, s.path),
                        e = IDBKeyRange.lowerBound(t),
                        n = xp(r).iterate({ range: e }, function(t, e, n) { var r = t[0],
                                i = t[1],
                                o = t[2],
                                a = qf(i);
                            r === u.userId && s.path.isEqual(a) ? c = c.add(o) : n.done() });
                    i.push(n) }), Qf.waitFor(i).next(function() { return u.lookupMutationBatches(r, c) }) }, r.prototype.getAllMutationBatchesAffectingQuery = function(t, e) { var s = this;
                Cc(!e.isDocumentQuery(), "Document queries shouldn't go down this path"); var u = e.path,
                    c = u.length + 1,
                    n = bp.prefixForPath(this.userId, u),
                    r = IDBKeyRange.lowerBound(n),
                    h = new yl(th); return xp(t).iterate({ range: r }, function(t, e, n) { var r = t[0],
                        i = t[1],
                        o = t[2],
                        a = qf(i);
                    r === s.userId && u.isPrefixOf(a) ? a.length === c && (h = h.add(o)) : n.done() }).next(function() { return s.lookupMutationBatches(t, h) }) }, r.prototype.lookupMutationBatches = function(t, e) { var n = this,
                    r = [],
                    i = []; return e.forEach(function(e) { i.push(Lp(t).get(e).next(function(t) { if (null === t) throw Sc("Dangling document-mutation reference found, which points to " + e);
                        Cc(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), r.push(n.serializer.fromDbMutationBatch(t)) })) }), Qf.waitFor(i).next(function() { return r }) }, r.prototype.removeMutationBatch = function(e, n) { var r = this; return Pp(e.simpleDbTransaction, this.userId, n).next(function(t) { return r.removeCachedMutationKeys(n.batchId), Qf.forEach(t, function(t) { return r.referenceDelegate.removeMutationReference(e, t) }) }) }, r.prototype.removeCachedMutationKeys = function(t) { delete this.documentKeysByBatchId[t] }, r.prototype.performConsistencyCheck = function(n) { var o = this; return this.checkEmpty(n).next(function(t) { if (!t) return Qf.resolve(); var e = IDBKeyRange.lowerBound(bp.prefixForUser(o.userId)),
                        i = []; return xp(n).iterate({ range: e }, function(t, e, n) { if (t[0] === o.userId) { var r = qf(t[1]);
                            i.push(r) } else n.done() }).next(function() { Cc(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map(function(t) { return t.canonicalString() })) }) }) }, r.prototype.containsKey = function(t, e) { return Op(t, this.userId, e) }, r.prototype.getMutationQueueMetadata = function(t) { var e = this; return Fp(t).get(this.userId).next(function(t) { return t || new gp(e.userId, -1, "") }) }, r }();

    function Op(t, o, e) { var n = bp.prefixForPath(o, e.path),
            a = n[1],
            r = IDBKeyRange.lowerBound(n),
            s = !1; return xp(t).iterate({ range: r, keysOnly: !0 }, function(t, e, n) { var r = t[0],
                i = t[1];
            t[2];
            r === o && i === a && (s = !0), n.done() }).next(function() { return s }) }

    function Pp(t, e, n) { var r = t.store(vp.store),
            i = t.store(bp.store),
            o = [],
            a = IDBKeyRange.only(n.batchId),
            s = 0,
            u = r.iterate({ range: a }, function(t, e, n) { return s++, n.delete() });
        o.push(u.next(function() { Cc(1 === s, "Dangling document-mutation reference found: Missing batch " + n.batchId) })); for (var c = [], h = 0, l = n.mutations; h < l.length; h++) { var f = l[h],
                p = bp.key(e, f.key.path, n.batchId);
            o.push(i.delete(p)), c.push(f.key) } return Qf.waitFor(o).next(function() { return c }) }

    function Mp(t) { return t instanceof Uint8Array ? (Cc("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence."), t.toString()) : t }

    function Lp(t) { return Yp.getStore(t, vp.store) }

    function xp(t) { return Yp.getStore(t, bp.store) }

    function Fp(t) { return Yp.getStore(t, gp.store) } var Up = function() {
        function t(t) { this.remoteSerializer = t } return t.prototype.fromDbRemoteDocument = function(t) { if (t.document) return this.remoteSerializer.fromDocument(t.document, !!t.hasCommittedMutations); if (t.noDocument) { var e = _h.fromSegments(t.noDocument.path),
                    n = this.fromDbTimestamp(t.noDocument.readTime); return new Th(e, n, { hasCommittedMutations: !!t.hasCommittedMutations }) } if (t.unknownDocument) { e = _h.fromSegments(t.unknownDocument.path), n = this.fromDbTimestamp(t.unknownDocument.version); return new Sh(e, n) } return Sc("Unexpected DbRemoteDocument") }, t.prototype.toDbRemoteDocument = function(t) { if (t instanceof Eh) { var e = t.proto ? t.proto : this.remoteSerializer.toDocument(t),
                    n = t.hasCommittedMutations; return new Ep(null, null, e, n) } if (t instanceof Th) { var r = t.key.path.toArray(),
                    i = this.toDbTimestamp(t.version);
                n = t.hasCommittedMutations; return new Ep(null, new _p(r, i), null, n) } if (t instanceof Sh) { r = t.key.path.toArray(), i = this.toDbTimestamp(t.version); return new Ep(new wp(r, i), null, null, !0) } return Sc("Unexpected MaybeDocumment") }, t.prototype.toDbTimestamp = function(t) { var e = t.toTimestamp(); return new yp(e.seconds, e.nanoseconds) }, t.prototype.fromDbTimestamp = function(t) { var e = new lh(t.seconds, t.nanoseconds); return ll.fromTimestamp(e) }, t.prototype.toDbMutationBatch = function(t, e) { var n = this,
                r = e.mutations.map(function(t) { return n.remoteSerializer.toMutation(t) }); return new vp(t, e.batchId, e.localWriteTime.toMillis(), r) }, t.prototype.fromDbMutationBatch = function(t) { var e = this,
                n = t.mutations.map(function(t) { return e.remoteSerializer.fromMutation(t) }),
                r = lh.fromMillis(t.localWriteTimeMs); return new jf(t.batchId, r, n) }, t.prototype.toDbResourcePaths = function(t) { var e = []; return t.forEach(function(t) { e.push(xf(t.path)) }), e }, t.prototype.fromDbResourcePaths = function(t) { for (var e = Wl(), n = 0, r = t; n < r.length; n++) { var i = r[n];
                e = e.add(new _h(qf(i))) } return e }, t.prototype.fromDbTarget = function(t) { var e, n = this.fromDbTimestamp(t.readTime); return e = void 0 !== t.query.documents ? this.remoteSerializer.fromDocumentsTarget(t.query) : this.remoteSerializer.fromQueryTarget(t.query), new dl(e, t.targetId, $h.Listen, t.lastListenSequenceNumber, n, t.resumeToken) }, t.prototype.toDbTarget = function(t) { Cc($h.Listen === t.purpose, "Only queries with purpose " + $h.Listen + " may be stored, got " + t.purpose); var e, n, r = this.toDbTimestamp(t.snapshotVersion); return e = t.query.isDocumentQuery() ? this.remoteSerializer.toDocumentsTarget(t.query) : this.remoteSerializer.toQueryTarget(t.query), n = t.resumeToken instanceof Uint8Array ? (Cc("YES" === process.env.USE_MOCK_PERSISTENCE, "Persisting non-string stream tokens is only supported with mock persistence ."), t.resumeToken.toString()) : t.resumeToken, new Sp(t.targetId, t.query.canonicalId(), r, n, t.sequenceNumber, e) }, t }();

    function qp(t, e) { var n = t[0],
            r = t[1],
            i = e[0],
            o = e[1],
            a = th(n, i); return 0 === a ? th(r, o) : a } var Vp = function() {
            function t(t) { this.maxElements = t, this.buffer = new yl(qp), this.previousIndex = 0 } return t.prototype.nextIndex = function() { return ++this.previousIndex }, t.prototype.addElement = function(t) { var e = [t, this.nextIndex()]; if (this.buffer.size < this.maxElements) this.buffer = this.buffer.add(e);
                else { var n = this.buffer.last();
                    qp(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e)) } }, Object.defineProperty(t.prototype, "maxValue", { get: function() { return this.buffer.last()[0] }, enumerable: !0, configurable: !0 }), t }(),
        Bp = { didRun: !1, sequenceNumbersCollected: 0, targetsRemoved: 0, documentsRemoved: 0 },
        jp = function() {
            function e(t, e, n) { this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n } return e.withCacheSize = function(t) { return new e(t, e.DEFAULT_COLLECTION_PERCENTILE, e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT) }, e.COLLECTION_DISABLED = -1, e.MINIMUM_CACHE_SIZE_BYTES = 1048576, e.DEFAULT = new e(e.DEFAULT_CACHE_SIZE_BYTES = 41943040, e.DEFAULT_COLLECTION_PERCENTILE = 10, e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3), e.DISABLED = new e(e.COLLECTION_DISABLED, 0, 0), e }(),
        Wp = function() {
            function t(t, e, n) { this.garbageCollector = t, this.asyncQueue = e, this.localStore = n, this.gcTask = null } return t.prototype.start = function() { Cc(null === this.gcTask, "Cannot start an already started LruScheduler"), this.garbageCollector.params.cacheSizeCollectionThreshold !== jp.COLLECTION_DISABLED && this.scheduleGC() }, t.prototype.stop = function() { this.gcTask && (this.gcTask.cancel(), this.gcTask = null) }, Object.defineProperty(t.prototype, "started", { get: function() { return null !== this.gcTask }, enumerable: !0, configurable: !0 }), t.prototype.scheduleGC = function() { var t = this;
                Cc(null === this.gcTask, "Cannot schedule GC while a task is pending"); var e = this.hasRun ? 3e5 : 6e4;
                wc("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.gcTask = this.asyncQueue.enqueueAfterDelay(If.LruGarbageCollection, e, function() { return t.gcTask = null, t.hasRun = !0, t.localStore.collectGarbage(t.garbageCollector).then(function() { return t.scheduleGC() }).catch(Xp) }) }, t }(),
        Kp = function() {
            function t(t, e) { this.delegate = t, this.params = e } return t.prototype.calculateTargetCount = function(t, e) { return this.delegate.getSequenceNumberCount(t).next(function(t) { return Math.floor(e / 100 * t) }) }, t.prototype.nthSequenceNumber = function(t, e) { var n = this; if (0 === e) return Qf.resolve(Df.INVALID); var r = new Vp(e); return this.delegate.forEachTarget(t, function(t) { return r.addElement(t.sequenceNumber) }).next(function() { return n.delegate.forEachOrphanedDocumentSequenceNumber(t, function(t) { return r.addElement(t) }) }).next(function() { return r.maxValue }) }, t.prototype.removeTargets = function(t, e, n) { return this.delegate.removeTargets(t, e, n) }, t.prototype.removeOrphanedDocuments = function(t, e) { return this.delegate.removeOrphanedDocuments(t, e) }, t.prototype.collect = function(e, n) { var r = this; return this.params.cacheSizeCollectionThreshold === jp.COLLECTION_DISABLED ? (wc("LruGarbageCollector", "Garbage collection skipped; disabled"), Qf.resolve(Bp)) : this.getCacheSize(e).next(function(t) { return t < r.params.cacheSizeCollectionThreshold ? (wc("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.params.cacheSizeCollectionThreshold), Bp) : r.runGarbageCollection(e, n) }) }, t.prototype.getCacheSize = function(t) { return this.delegate.getCacheSize(t) }, t.prototype.runGarbageCollection = function(e, n) { var r, i, o, a, s, u, c, h, l = this; return a = Date.now(), this.calculateTargetCount(e, this.params.percentileToCollect).next(function(t) { return i = t > l.params.maximumSequenceNumbersToCollect ? (wc("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + l.params.maximumSequenceNumbersToCollect + " from " + t), l.params.maximumSequenceNumbersToCollect) : t, s = Date.now(), l.nthSequenceNumber(e, i) }).next(function(t) { return r = t, u = Date.now(), l.removeTargets(e, r, n) }).next(function(t) { return o = t, c = Date.now(), l.removeOrphanedDocuments(e, r) }).next(function(t) {
                    (h = Date.now(), bc() <= cc.DEBUG) && wc("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - a) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (c - u) + "ms\n\tRemoved " + t + " documents in " + (h - c) + "ms\nTotal Duration: " + (h - a) + "ms"); return Qf.resolve({ didRun: !0, sequenceNumbersCollected: i, targetsRemoved: o, documentsRemoved: t }) }) }, t }(),
        Qp = "IndexedDbPersistence",
        Hp = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
        zp = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `experimentalTabSynchronization:true` in all tabs.",
        Gp = function(r) {
            function t(t, e) { var n = r.call(this) || this; return n.simpleDbTransaction = t, n.currentSequenceNumber = e, n } return an(t, r), t }(function() {}),
        Yp = function() {
            function c(t, e, n, r, i, o, a) { if (this.persistenceKey = t, this.clientId = e, this.queue = r, this.multiClientParams = a, this._started = !1, this.isPrimary = !1, this.networkEnabled = !0, this.inForeground = !1, this.lastGarbageCollectionTime = Number.NEGATIVE_INFINITY, this.primaryStateListener = function(t) { return Promise.resolve() }, !c.isAvailable()) throw new Ac(Dc.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."); if (this.referenceDelegate = new Zp(this, o), this.dbName = t + c.MAIN_DATABASE, this.serializer = new Up(i), this.document = n.document, this.allowTabSynchronization = void 0 !== a, this.queryCache = new $f(this.referenceDelegate, this.serializer), this.remoteDocumentCache = new ap(this.serializer, this.allowTabSynchronization), !n.window || !n.window.localStorage) throw new Ac(Dc.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                this.window = n.window, this.webStorage = this.window.localStorage } return c.getStore = function(t, e) { if (t instanceof Gp) return zf.getStore(t.simpleDbTransaction, e); throw Sc("IndexedDbPersistence must use instances of IndexedDbTransaction") }, c.createIndexedDbPersistence = function(n, r, i, o, a, s) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, (e = new c(n, r, i, o, a, s)).start()];
                            case 1:
                                return t.sent(), [2, e] } }) }) }, c.createMultiClientIndexedDbPersistence = function(n, r, i, o, a, s, u) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, (e = new c(n, r, i, o, a, s, u)).start()];
                            case 1:
                                return t.sent(), [2, e] } }) }) }, c.prototype.start = function() { var n = this; return Cc(!this.started, "IndexedDbPersistence double-started!"), Cc(null !== this.window, "Expected 'window' to be defined"), zf.openOrCreate(this.dbName, pp, new dp(this.serializer)).then(function(t) { return n.simpleDb = t, n.updateClientMetadataAndTryBecomePrimary() }).then(function() { return n.attachVisibilityHandler(), n.attachWindowUnloadHook(), n.scheduleClientMetadataAndPrimaryLeaseRefreshes(), n.startRemoteDocumentCache() }).then(function() { return n.simpleDb.runTransaction("readonly", [Ip.store], function(t) { return ep(t).next(function(t) { var e = n.multiClientParams ? n.multiClientParams.sequenceNumberSyncer : void 0;
                            n.listenSequence = new Df(t, e) }) }) }).then(function() { n._started = !0 }).catch(function(t) { return n.simpleDb && n.simpleDb.close(), Promise.reject(t) }) }, c.prototype.startRemoteDocumentCache = function() { var e = this; return this.simpleDb.runTransaction("readonly", kp, function(t) { return e.remoteDocumentCache.start(t) }) }, c.prototype.setPrimaryStateListener = function(n) { var t = this; return this.primaryStateListener = function(e) { return un(t, void 0, void 0, function() { return cn(this, function(t) { return this.started ? [2, n(e)] : [2] }) }) }, n(this.isPrimary) }, c.prototype.setNetworkEnabled = function(t) { var e = this;
                this.networkEnabled !== t && (this.networkEnabled = t, this.queue.enqueueAndForget(function() { return un(e, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.started ? [4, this.updateClientMetadataAndTryBecomePrimary()] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2] } }) }) })) }, c.prototype.updateClientMetadataAndTryBecomePrimary = function() { var r = this; return this.simpleDb.runTransaction("readwrite", kp, function(n) { return $p(n).put(new Ap(r.clientId, Date.now(), r.networkEnabled, r.inForeground, r.remoteDocumentCache.lastProcessedDocumentChangeId)).next(function() { if (r.isPrimary) return r.verifyPrimaryLease(n).next(function(t) { t || (r.isPrimary = !1, r.queue.enqueueAndForget(function() { return r.primaryStateListener(!1) })) }) }).next(function() { return r.canActAsPrimary(n) }).next(function(t) { var e = r.isPrimary; return r.isPrimary = t, e !== r.isPrimary && r.queue.enqueueAndForget(function() { return r.primaryStateListener(r.isPrimary) }), e && !r.isPrimary ? r.releasePrimaryLeaseIfHeld(n) : r.isPrimary ? r.acquireOrExtendPrimaryLease(n) : void 0 }) }) }, c.prototype.verifyPrimaryLease = function(t) { var e = this; return Jp(t).get(mp.key).next(function(t) { return Qf.resolve(e.isLocalClient(t)) }) }, c.prototype.removeClientMetadata = function(t) { return $p(t).delete(this.clientId) }, c.prototype.maybeGarbageCollectMultiClientState = function() { return un(this, void 0, void 0, function() { var r, i, o = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return !this.isPrimary || this.isWithinAge(this.lastGarbageCollectionTime, 18e5) ? [3, 2] : (this.lastGarbageCollectionTime = Date.now(), i = [], [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(n) { var e = c.getStore(n, Ap.store); return e.loadAll().next(function(t) { r = o.filterActiveClients(t, 18e5), i = t.filter(function(t) { return -1 === r.indexOf(t) }) }).next(function() { return Qf.forEach(i, function(t) { return e.delete(t.clientId) }) }).next(function() { if (0 < (r = r.filter(function(t) { return t.clientId !== o.clientId })).length) { var t = r.map(function(t) { return t.lastProcessedDocumentChangeId || 0 }),
                                                e = Math.min.apply(Math, t); return o.remoteDocumentCache.removeDocumentChangesThroughChangeId(n, e) } }) })]);
                            case 1:
                                t.sent(), i.forEach(function(t) { o.window.localStorage.removeItem(o.zombiedClientLocalStorageKey(t.clientId)) }), t.label = 2;
                            case 2:
                                return [2] } }) }) }, c.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes = function() { var t = this;
                this.clientMetadataRefresher = this.queue.enqueueAfterDelay(If.ClientMetadataRefresh, 4e3, function() { return t.updateClientMetadataAndTryBecomePrimary().then(function() { return t.maybeGarbageCollectMultiClientState() }).then(function() { return t.scheduleClientMetadataAndPrimaryLeaseRefreshes() }) }) }, c.prototype.isLocalClient = function(t) { return !!t && t.ownerId === this.clientId }, c.prototype.canActAsPrimary = function(e) { var i = this; return Jp(e).get(mp.key).next(function(t) { if (null !== t && i.isWithinAge(t.leaseTimestampMs, 5e3) && !i.isClientZombied(t.ownerId)) { if (i.isLocalClient(t) && i.networkEnabled) return !0; if (!i.isLocalClient(t)) { if (!t.allowTabSynchronization) throw new Ac(Dc.FAILED_PRECONDITION, zp); return !1 } } return !(!i.networkEnabled || !i.inForeground) || $p(e).loadAll().next(function(t) { return void 0 === i.filterActiveClients(t, 5e3).find(function(t) { if (i.clientId !== t.clientId) { var e = !i.networkEnabled && t.networkEnabled,
                                    n = !i.inForeground && t.inForeground,
                                    r = i.networkEnabled === t.networkEnabled; if (e || n && r) return !0 } return !1 }) }) }).next(function(t) { return i.isPrimary !== t && wc(Qp, "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t }) }, c.prototype.shutdown = function(n) { return un(this, void 0, void 0, function() { var e = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this._started = !1, this.markClientZombied(), this.clientMetadataRefresher && this.clientMetadataRefresher.cancel(), this.detachVisibilityHandler(), this.detachWindowUnloadHook(), [4, this.simpleDb.runTransaction("readwrite", [mp.store, Ap.store], function(t) { return e.releasePrimaryLeaseIfHeld(t).next(function() { return e.removeClientMetadata(t) }) })];
                            case 1:
                                return t.sent(), this.simpleDb.close(), this.removeClientZombiedEntry(), n ? [4, zf.delete(this.dbName)] : [3, 3];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [2] } }) }) }, c.prototype.filterActiveClients = function(t, e) { var n = this; return t.filter(function(t) { return n.isWithinAge(t.updateTimeMs, e) && !n.isClientZombied(t.clientId) }) }, c.prototype.getActiveClients = function() { var e = this; return this.simpleDb.runTransaction("readonly", [Ap.store], function(t) { return $p(t).loadAll().next(function(t) { return e.filterActiveClients(t, 18e5).map(function(t) { return t.clientId }) }) }) }, Object.defineProperty(c.prototype, "started", { get: function() { return this._started }, enumerable: !0, configurable: !0 }), c.prototype.getMutationQueue = function(t) { return Cc(this.started, "Cannot initialize MutationQueue before persistence is started."), Rp.forUser(t, this.serializer, this.referenceDelegate) }, c.prototype.getQueryCache = function() { return Cc(this.started, "Cannot initialize QueryCache before persistence is started."), this.queryCache }, c.prototype.getRemoteDocumentCache = function() { return Cc(this.started, "Cannot initialize RemoteDocumentCache before persistence is started."), this.remoteDocumentCache }, c.prototype.runTransaction = function(n, t, r) { var i = this; return wc(Qp, "Starting transaction:", n), this.simpleDb.runTransaction("readonly" === t ? "readonly" : "readwrite", kp, function(e) { return "readwrite-primary" === t ? i.verifyPrimaryLease(e).next(function(t) { if (!t) throw Ec("Failed to obtain primary lease for action '" + n + "'."), i.isPrimary = !1, i.queue.enqueueAndForget(function() { return i.primaryStateListener(!1) }), new Ac(Dc.FAILED_PRECONDITION, Hp); return r(new Gp(e, i.listenSequence.next())) }).next(function(t) { return i.acquireOrExtendPrimaryLease(e).next(function() { return t }) }) : i.verifyAllowTabSynchronization(e).next(function() { return r(new Gp(e, i.listenSequence.next())) }) }) }, c.prototype.verifyAllowTabSynchronization = function(t) { var e = this; return Jp(t).get(mp.key).next(function(t) { if (null !== t && e.isWithinAge(t.leaseTimestampMs, 5e3) && !e.isClientZombied(t.ownerId) && !e.isLocalClient(t) && !t.allowTabSynchronization) throw new Ac(Dc.FAILED_PRECONDITION, zp) }) }, c.prototype.acquireOrExtendPrimaryLease = function(t) { var e = new mp(this.clientId, this.allowTabSynchronization, Date.now()); return Jp(t).put(mp.key, e) }, c.isAvailable = function() { return zf.isAvailable() }, c.buildStoragePrefix = function(t) { var e = t.databaseId.projectId; return t.databaseId.isDefaultDatabase || (e += "." + t.databaseId.database), "firestore/" + t.persistenceKey + "/" + e + "/" }, c.prototype.releasePrimaryLeaseIfHeld = function(t) { var e = this,
                    n = Jp(t); return n.get(mp.key).next(function(t) { return e.isLocalClient(t) ? (wc(Qp, "Releasing primary lease."), n.delete(mp.key)) : Qf.resolve() }) }, c.prototype.isWithinAge = function(t, e) { var n = Date.now(); return !(t < n - e) && (!(n < t) || (Ec("Detected an update time that is in the future: " + t + " > " + n), !1)) }, c.prototype.attachVisibilityHandler = function() { var t = this;
                null !== this.document && "function" == typeof this.document.addEventListener && (this.documentVisibilityHandler = function() { t.queue.enqueueAndForget(function() { return t.inForeground = "visible" === t.document.visibilityState, t.updateClientMetadataAndTryBecomePrimary() }) }, this.document.addEventListener("visibilitychange", this.documentVisibilityHandler), this.inForeground = "visible" === this.document.visibilityState) }, c.prototype.detachVisibilityHandler = function() { this.documentVisibilityHandler && (Cc(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), this.document.removeEventListener("visibilitychange", this.documentVisibilityHandler), this.documentVisibilityHandler = null) }, c.prototype.attachWindowUnloadHook = function() { var t = this; "function" == typeof this.window.addEventListener && (this.windowUnloadHandler = function() { t.markClientZombied(), t.queue.enqueueAndForget(function() { return t.shutdown() }) }, this.window.addEventListener("unload", this.windowUnloadHandler)) }, c.prototype.detachWindowUnloadHook = function() { this.windowUnloadHandler && (Cc("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), this.window.removeEventListener("unload", this.windowUnloadHandler), this.windowUnloadHandler = null) }, c.prototype.isClientZombied = function(t) { try { var e = null !== this.webStorage.getItem(this.zombiedClientLocalStorageKey(t)); return wc(Qp, "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e } catch (t) { return Ec(Qp, "Failed to get zombied client id.", t), !1 } }, c.prototype.markClientZombied = function() { try { this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId), String(Date.now())) } catch (t) { Ec("Failed to set zombie client id.", t) } }, c.prototype.removeClientZombiedEntry = function() { try { this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId)) } catch (t) {} }, c.prototype.zombiedClientLocalStorageKey = function(t) { return "firestore_zombie_" + this.persistenceKey + "_" + t }, c.MAIN_DATABASE = "main", c }();

    function Xp(n) { return un(this, void 0, void 0, function() { return cn(this, function(t) { if ((e = n).code !== Dc.FAILED_PRECONDITION || e.message !== Hp) throw n; var e; return wc(Qp, "Unexpectedly lost primary lease"), [2] }) }) }

    function Jp(t) { return t.store(mp.store) }

    function $p(t) { return t.store(Ap.store) } var Zp = function() {
        function t(t, e) { this.db = t, this.garbageCollector = new Kp(this, e) } return t.prototype.getSequenceNumberCount = function(t) { var n = this.orphanedDocmentCount(t); return this.db.getQueryCache().getQueryCount(t).next(function(e) { return n.next(function(t) { return e + t }) }) }, t.prototype.orphanedDocmentCount = function(t) { var e = 0; return this.forEachOrphanedDocumentSequenceNumber(t, function(t) { e++ }).next(function() { return e }) }, t.prototype.forEachTarget = function(t, e) { return this.db.getQueryCache().forEachTarget(t, e) }, t.prototype.forEachOrphanedDocumentSequenceNumber = function(t, n) { return this.forEachOrphanedDocument(t, function(t, e) { return n(e) }) }, t.prototype.setInMemoryPins = function(t) { this.inMemoryPins = t }, t.prototype.addReference = function(t, e) { return td(t, e) }, t.prototype.removeReference = function(t, e) { return td(t, e) }, t.prototype.removeTargets = function(t, e, n) { return this.db.getQueryCache().removeTargets(t, e, n) }, t.prototype.removeMutationReference = function(t, e) { return td(t, e) }, t.prototype.isPinned = function(t, e) { return this.inMemoryPins.containsKey(e) ? Qf.resolve(!0) : (r = e, i = !1, Fp(n = t).iterateSerial(function(t) { return Op(n, t, r).next(function(t) { return t && (i = !0), Qf.resolve(!t) }) }).next(function() { return i })); var n, r, i }, t.prototype.removeOrphanedDocuments = function(r, i) { var o = this,
                a = 0,
                s = 0,
                u = []; return this.forEachOrphanedDocument(r, function(e, t) { if (t <= i) { var n = o.isPinned(r, e).next(function(t) { if (!t) return a++, o.removeOrphanedDocument(r, e).next(function(t) { s += t }) });
                    u.push(n) } }).next(function() { return Qf.waitFor(u) }).next(function() { return o.db.getRemoteDocumentCache().updateSize(r, -s) }).next(function() { return a }) }, t.prototype.removeOrphanedDocument = function(t, e) { var n, r = 0,
                i = this.db.getRemoteDocumentCache(); return Qf.waitFor([np(t).delete((n = e, [0, xf(n.path)])), i.removeEntry(t, e).next(function(t) { r += t })]).next(function() { return r }) }, t.prototype.removeTarget = function(t, e) { var n = e.copy({ sequenceNumber: t.currentSequenceNumber }); return this.db.getQueryCache().updateQueryData(t, n) }, t.prototype.updateLimboDocument = function(t, e) { return td(t, e) }, t.prototype.forEachOrphanedDocument = function(t, o) { var a, e = np(t),
                s = Df.INVALID; return e.iterate({ index: Cp.documentTargetsIndex }, function(t, e) { var n = t[0],
                    r = (t[1], e.path),
                    i = e.sequenceNumber;
                0 === n ? (s !== Df.INVALID && o(new _h(qf(a)), s), s = i, a = r) : s = Df.INVALID }).next(function() { s !== Df.INVALID && o(new _h(qf(a)), s) }) }, t.prototype.getCacheSize = function(t) { return this.db.getRemoteDocumentCache().getSize(t) }, t }();

    function td(t, e) { return np(t).put((n = e, r = t.currentSequenceNumber, new Cp(0, xf(n.path), r))); var n, r } var ed = function() {
            function t(t, e) { this.remoteDocumentCache = t, this.mutationQueue = e } return t.prototype.getDocument = function(e, n) { var r = this; return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(e, n).next(function(t) { return r.getDocumentInternal(e, n, t) }) }, t.prototype.getDocumentInternal = function(t, r, i) { return this.remoteDocumentCache.getEntry(t, r).next(function(t) { for (var e = 0, n = i; e < n.length; e++) { t = n[e].applyToLocalView(r, t) } return t }) }, t.prototype.applyLocalMutationsToDocuments = function(t, e, i) { var o = Fl(); return e.forEach(function(t, e) { for (var n = 0, r = i; n < r.length; n++) { e = r[n].applyToLocalView(t, e) }
                    o = o.insert(t, e) }), o }, t.prototype.getDocuments = function(e, t) { var n = this; return this.remoteDocumentCache.getEntries(e, t).next(function(t) { return n.getLocalViewOfDocuments(e, t) }) }, t.prototype.getLocalViewOfDocuments = function(r, i) { var o = this; return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(r, i).next(function(t) { var e = o.applyLocalMutationsToDocuments(r, i, t),
                        n = xl(); return e.forEach(function(t, e) { e || (e = new Th(t, ll.forDeletedDoc())), n = n.insert(t, e) }), n }) }, t.prototype.getDocumentsMatchingQuery = function(t, e) { return _h.isDocumentKey(e.path) ? this.getDocumentsMatchingDocumentQuery(t, e.path) : this.getDocumentsMatchingCollectionQuery(t, e) }, t.prototype.getDocumentsMatchingDocumentQuery = function(t, e) { return this.getDocument(t, new _h(e)).next(function(t) { var e = ql(); return t instanceof Eh && (e = e.insert(t.key, t)), e }) }, t.prototype.getDocumentsMatchingCollectionQuery = function(e, h) { var l, n = this; return this.remoteDocumentCache.getDocumentsMatchingQuery(e, h).next(function(t) { return l = t, n.mutationQueue.getAllMutationBatchesAffectingQuery(e, h) }).next(function(t) { for (var e = 0, n = t; e < n.length; e++)
                        for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) { var a = o[i],
                                s = a.key; if (h.path.isImmediateParentOf(s.path)) { var u = l.get(s),
                                    c = a.applyToLocalView(u, u, r.localWriteTime);
                                l = c instanceof Eh ? l.insert(s, c) : l.remove(s) } } }).next(function() { return l.forEach(function(t, e) { h.matches(e) || (l = l.remove(t)) }), l }) }, t }(),
        nd = function() {
            function t() { this.refsByKey = new yl(rd.compareByKey), this.refsByTarget = new yl(rd.compareByTargetId) } return t.prototype.isEmpty = function() { return this.refsByKey.isEmpty() }, t.prototype.addReference = function(t, e) { var n = new rd(t, e);
                this.refsByKey = this.refsByKey.add(n), this.refsByTarget = this.refsByTarget.add(n) }, t.prototype.addReferences = function(t, e) { var n = this;
                t.forEach(function(t) { return n.addReference(t, e) }) }, t.prototype.removeReference = function(t, e) { this.removeRef(new rd(t, e)) }, t.prototype.removeReferences = function(t, e) { var n = this;
                t.forEach(function(t) { return n.removeReference(t, e) }) }, t.prototype.removeReferencesForId = function(t) { var e = this,
                    n = _h.EMPTY,
                    r = new rd(n, t),
                    i = new rd(n, t + 1),
                    o = []; return this.refsByTarget.forEachInRange([r, i], function(t) { e.removeRef(t), o.push(t.key) }), o }, t.prototype.removeAllReferences = function() { var e = this;
                this.refsByKey.forEach(function(t) { return e.removeRef(t) }) }, t.prototype.removeRef = function(t) { this.refsByKey = this.refsByKey.delete(t), this.refsByTarget = this.refsByTarget.delete(t) }, t.prototype.referencesForId = function(t) { var e = _h.EMPTY,
                    n = new rd(e, t),
                    r = new rd(e, t + 1),
                    i = Wl(); return this.refsByTarget.forEachInRange([n, r], function(t) { i = i.add(t.key) }), i }, t.prototype.containsKey = function(t) { var e = new rd(t, 0),
                    n = this.refsByKey.firstAfterOrEqual(e); return null !== n && t.isEqual(n.key) }, t }(),
        rd = function() {
            function t(t, e) { this.key = t, this.targetOrBatchId = e } return t.compareByKey = function(t, e) { return _h.comparator(t.key, e.key) || th(t.targetOrBatchId, e.targetOrBatchId) }, t.compareByTargetId = function(t, e) { return th(t.targetOrBatchId, e.targetOrBatchId) || _h.comparator(t.key, e.key) }, t }(),
        id = function() {
            function l(t, e) { this.persistence = t, this.localViewReferences = new nd, this.queryDataByTarget = {}, Cc(t.started, "LocalStore was passed an unstarted persistence implementation"), this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences), this.mutationQueue = t.getMutationQueue(e), this.remoteDocuments = t.getRemoteDocumentCache(), this.queryCache = t.getQueryCache(), this.localDocuments = new ed(this.remoteDocuments, this.mutationQueue) } return l.prototype.handleUserChange = function(e) { var m = this; return this.persistence.runTransaction("Handle user change", "readonly", function(d) { var y; return m.mutationQueue.getAllMutationBatches(d).next(function(t) { return y = t, m.mutationQueue = m.persistence.getMutationQueue(e), m.localDocuments = new ed(m.remoteDocuments, m.mutationQueue), m.mutationQueue.getAllMutationBatches(d) }).next(function(t) { for (var e = [], n = [], r = Wl(), i = 0, o = y; i < o.length; i++) { var a = o[i];
                            e.push(a.batchId); for (var s = 0, u = a.mutations; s < u.length; s++) { var c = u[s];
                                r = r.add(c.key) } } for (var h = 0, l = t; h < l.length; h++) { a = l[h];
                            n.push(a.batchId); for (var f = 0, p = a.mutations; f < p.length; f++) { c = p[f];
                                r = r.add(c.key) } } return m.localDocuments.getDocuments(d, r).next(function(t) { return { affectedDocuments: t, removedBatchIds: e, addedBatchIds: n } }) }) }) }, l.prototype.localWrite = function(e) { var i = this; return this.persistence.runTransaction("Locally write mutations", "readwrite", function(n) { var r, t = lh.now(); return i.mutationQueue.addMutationBatch(n, t, e).next(function(t) { var e = (r = t).keys(); return i.localDocuments.getDocuments(n, e) }).next(function(t) { return { batchId: r.batchId, changes: t } }) }) }, l.prototype.lookupMutationDocuments = function(t) { var n = this; return this.persistence.runTransaction("Lookup mutation documents", "readonly", function(e) { return n.mutationQueue.lookupMutationKeys(e, t).next(function(t) { return t ? n.localDocuments.getDocuments(e, t) : Qf.resolve(null) }) }) }, l.prototype.acknowledgeBatch = function(r) { var i = this; return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t) { var e = r.batch.keys(),
                        n = i.remoteDocuments.newChangeBuffer(); return i.mutationQueue.acknowledgeBatch(t, r.batch, r.streamToken).next(function() { return i.applyWriteToRemoteDocuments(t, r, n) }).next(function() { return n.apply(t) }).next(function() { return i.mutationQueue.performConsistencyCheck(t) }).next(function() { return i.localDocuments.getDocuments(t, e) }) }) }, l.prototype.rejectBatch = function(t) { var r = this; return this.persistence.runTransaction("Reject batch", "readwrite-primary", function(e) { var n; return r.mutationQueue.lookupMutationBatch(e, t).next(function(t) { return Cc(null !== t, "Attempt to reject nonexistent batch!"), n = t.keys(), r.mutationQueue.removeMutationBatch(e, t) }).next(function() { return r.mutationQueue.performConsistencyCheck(e) }).next(function() { return r.localDocuments.getDocuments(e, n) }) }) }, l.prototype.getLastStreamToken = function() { var e = this; return this.persistence.runTransaction("Get last stream token", "readonly", function(t) { return e.mutationQueue.getLastStreamToken(t) }) }, l.prototype.setLastStreamToken = function(e) { var n = this; return this.persistence.runTransaction("Set last stream token", "readwrite-primary", function(t) { return n.mutationQueue.setLastStreamToken(t, e) }) }, l.prototype.getLastRemoteSnapshotVersion = function() { var e = this; return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t) { return e.queryCache.getLastRemoteSnapshotVersion(t) }) }, l.prototype.applyRemoteEvent = function(u) { var c = this,
                    h = this.remoteDocuments.newChangeBuffer(); return this.persistence.runTransaction("Apply remote event", "readwrite-primary", function(o) { var a = [],
                        s = Wl();
                    Pc(u.targetChanges, function(t, e) { var n = c.queryDataByTarget[t]; if (n) { e.addedDocuments.forEach(function(t) { s = s.add(t) }), e.modifiedDocuments.forEach(function(t) { s = s.add(t) }), a.push(c.queryCache.removeMatchingKeys(o, e.removedDocuments, t).next(function() { return c.queryCache.addMatchingKeys(o, e.addedDocuments, t) })); var r = e.resumeToken; if (0 < r.length) { var i = n;
                                n = n.copy({ resumeToken: r, snapshotVersion: u.snapshotVersion }), c.queryDataByTarget[t] = n, l.shouldPersistQueryData(i, n, e) && a.push(c.queryCache.updateQueryData(o, n)) } } }); var i = xl(),
                        n = Wl();
                    u.documentUpdates.forEach(function(t, e) { n = n.add(t) }), a.push(h.getEntries(o, n).next(function(r) { u.documentUpdates.forEach(function(t, e) { var n = r.get(t);
                            null == n || e.version.isEqual(ll.MIN) || s.has(e.key) && !n.hasPendingWrites || 0 <= e.version.compareTo(n.version) ? (h.addEntry(e), i = i.insert(t, e)) : wc("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version), u.resolvedLimboDocuments.has(t) && a.push(c.persistence.referenceDelegate.updateLimboDocument(o, t)) }) })); var e = u.snapshotVersion; if (!e.isEqual(ll.MIN)) { var t = c.queryCache.getLastRemoteSnapshotVersion(o).next(function(t) { return Cc(0 <= e.compareTo(t), "Watch stream reverted to previous snapshot?? " + e + " < " + t), c.queryCache.setTargetsMetadata(o, o.currentSequenceNumber, e) });
                        a.push(t) } return Qf.waitFor(a).next(function() { return h.apply(o) }).next(function() { return c.localDocuments.getLocalViewOfDocuments(o, i) }) }) }, l.shouldPersistQueryData = function(t, e, n) { return 0 !== e.resumeToken.length && (0 === t.resumeToken.length || (e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= this.RESUME_TOKEN_MAX_AGE_MICROS || 0 < n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size)) }, l.prototype.notifyLocalViewChanges = function(t) { var n = this; return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(e) { return Qf.forEach(t, function(t) { return n.localViewReferences.addReferences(t.addedKeys, t.targetId), n.localViewReferences.removeReferences(t.removedKeys, t.targetId), Qf.forEach(t.removedKeys, function(t) { return n.persistence.referenceDelegate.removeReference(e, t) }) }) }) }, l.prototype.nextMutationBatch = function(e) { var n = this; return this.persistence.runTransaction("Get next mutation batch", "readonly", function(t) { return void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t, e) }) }, l.prototype.readDocument = function(e) { var n = this; return this.persistence.runTransaction("read document", "readonly", function(t) { return n.localDocuments.getDocument(t, e) }) }, l.prototype.allocateQuery = function(r) { var i = this; return this.persistence.runTransaction("Allocate query", "readwrite", function(e) { var n; return i.queryCache.getQueryData(e, r).next(function(t) { return t ? (n = t, Qf.resolve()) : i.queryCache.allocateTargetId(e).next(function(t) { return n = new dl(r, t, $h.Listen, e.currentSequenceNumber), i.queryCache.addQueryData(e, n) }) }).next(function() { return Cc(!i.queryDataByTarget[n.targetId], "Tried to allocate an already allocated query: " + r), i.queryDataByTarget[n.targetId] = n }) }) }, l.prototype.releaseQuery = function(o, a) { var s = this,
                    t = a ? "readwrite" : "readwrite-primary"; return this.persistence.runTransaction("Release query", t, function(i) { return s.queryCache.getQueryData(i, o).next(function(t) { Cc(null != t, "Tried to release nonexistent query: " + o); var e = t.targetId,
                            n = s.queryDataByTarget[e],
                            r = s.localViewReferences.removeReferencesForId(e); return delete s.queryDataByTarget[e], a ? Qf.resolve() : Qf.forEach(r, function(t) { return s.persistence.referenceDelegate.removeReference(i, t) }).next(function() { return s.persistence.referenceDelegate.removeTarget(i, n) }) }) }) }, l.prototype.executeQuery = function(e) { var n = this; return this.persistence.runTransaction("Execute query", "readonly", function(t) { return n.localDocuments.getDocumentsMatchingQuery(t, e) }) }, l.prototype.remoteDocumentKeys = function(e) { var n = this; return this.persistence.runTransaction("Remote document keys", "readonly", function(t) { return n.queryCache.getMatchingKeysForTargetId(t, e) }) }, l.prototype.getActiveClients = function() { return this.persistence.getActiveClients() }, l.prototype.removeCachedMutationBatchMetadata = function(t) { this.mutationQueue.removeCachedMutationKeys(t) }, l.prototype.setNetworkEnabled = function(t) { this.persistence.setNetworkEnabled(t) }, l.prototype.applyWriteToRemoteDocuments = function(t, i, o) { var e = this,
                    a = i.batch,
                    n = a.keys(),
                    s = Qf.resolve(); return n.forEach(function(r) { s = s.next(function() { return o.getEntry(t, r) }).next(function(t) { var e = t,
                            n = i.docVersions.get(r);
                        Cc(null !== n, "ackVersions should contain every doc in the write."), (!e || e.version.compareTo(n) < 0) && ((e = a.applyToRemoteDocument(r, e, i)) ? o.addEntry(e) : Cc(!t, "Mutation batch " + a + " applied to document " + t + " resulted in null")) }) }), s.next(function() { return e.mutationQueue.removeMutationBatch(t, a) }) }, l.prototype.collectGarbage = function(e) { var n = this; return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(t) { return e.collect(t, n.queryDataByTarget) }) }, l.prototype.getQueryForTarget = function(e) { var n = this; return this.queryDataByTarget[e] ? Promise.resolve(this.queryDataByTarget[e].query) : this.persistence.runTransaction("Get query data", "readonly", function(t) { return n.queryCache.getQueryDataForTarget(t, e).next(function(t) { return t ? t.query : null }) }) }, l.prototype.getNewDocumentChanges = function() { var e = this; return this.persistence.runTransaction("Get new document changes", "readonly", function(t) { return e.remoteDocuments.getNewDocumentChanges(t) }) }, l.RESUME_TOKEN_MAX_AGE_MICROS = 3e8, l }(),
        od = function() {
            function t(t) { this.referenceDelegate = t, this.mutationQueue = [], this.nextBatchId = 1, this.lastStreamToken = Nc(), this.batchesByDocumentKey = new yl(rd.compareByKey) } return t.prototype.checkEmpty = function(t) { return Qf.resolve(0 === this.mutationQueue.length) }, t.prototype.acknowledgeBatch = function(t, e, n) { var r = e.batchId,
                    i = this.indexOfExistingBatchId(r, "acknowledged");
                Cc(0 === i, "Can only acknowledge the first batch in the mutation queue"); var o = this.mutationQueue[i]; return Cc(r === o.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + o.batchId), this.lastStreamToken = n, Qf.resolve() }, t.prototype.getLastStreamToken = function(t) { return Qf.resolve(this.lastStreamToken) }, t.prototype.setLastStreamToken = function(t, e) { return this.lastStreamToken = e, Qf.resolve() }, t.prototype.addMutationBatch = function(t, e, n) { Cc(0 !== n.length, "Mutation batches should not be empty"); var r = this.nextBatchId;
                (this.nextBatchId++, 0 < this.mutationQueue.length) && Cc(this.mutationQueue[this.mutationQueue.length - 1].batchId < r, "Mutation batchIDs must be monotonically increasing order"); var i = new jf(r, e, n);
                this.mutationQueue.push(i); for (var o = 0, a = n; o < a.length; o++) { var s = a[o];
                    this.batchesByDocumentKey = this.batchesByDocumentKey.add(new rd(s.key, r)) } return Qf.resolve(i) }, t.prototype.lookupMutationBatch = function(t, e) { return Qf.resolve(this.findMutationBatch(e)) }, t.prototype.lookupMutationKeys = function(t, e) { var n = this.findMutationBatch(e); return Cc(null != n, "Failed to find local mutation batch."), Qf.resolve(n.keys()) }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) { var n = e + 1,
                    r = this.indexOfBatchId(n),
                    i = r < 0 ? 0 : r; return Qf.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null) }, t.prototype.getAllMutationBatches = function(t) { return Qf.resolve(this.mutationQueue.slice()) }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, n) { var r = this,
                    e = new rd(n, 0),
                    i = new rd(n, Number.POSITIVE_INFINITY),
                    o = []; return this.batchesByDocumentKey.forEachInRange([e, i], function(t) { Cc(n.isEqual(t.key), "Should only iterate over a single key's batches"); var e = r.findMutationBatch(t.targetOrBatchId);
                    Cc(null !== e, "Batches in the index must exist in the main table"), o.push(e) }), Qf.resolve(o) }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) { var r = this,
                    i = new yl(th); return e.forEach(function(e) { var t = new rd(e, 0),
                        n = new rd(e, Number.POSITIVE_INFINITY);
                    r.batchesByDocumentKey.forEachInRange([t, n], function(t) { Cc(e.isEqual(t.key), "For each key, should only iterate over a single key's batches"), i = i.add(t.targetOrBatchId) }) }), Qf.resolve(this.findMutationBatches(i)) }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) { var n = e.path,
                    r = n.length + 1,
                    i = n;
                _h.isDocumentKey(i) || (i = i.child("")); var o = new rd(new _h(i), 0),
                    a = new yl(th); return this.batchesByDocumentKey.forEachWhile(function(t) { var e = t.key.path; return !!n.isPrefixOf(e) && (e.length === r && (a = a.add(t.targetOrBatchId)), !0) }, o), Qf.resolve(this.findMutationBatches(a)) }, t.prototype.findMutationBatches = function(t) { var n = this,
                    r = []; return t.forEach(function(t) { var e = n.findMutationBatch(t);
                    null !== e && r.push(e) }), r }, t.prototype.removeMutationBatch = function(n, r) { var i = this;
                Cc(0 === this.indexOfExistingBatchId(r.batchId, "removed"), "Can only remove the first entry of the mutation queue"), this.mutationQueue.shift(); var o = this.batchesByDocumentKey; return Qf.forEach(r.mutations, function(t) { var e = new rd(t.key, r.batchId); return o = o.delete(e), i.referenceDelegate.removeMutationReference(n, t.key) }).next(function() { i.batchesByDocumentKey = o }) }, t.prototype.removeCachedMutationKeys = function(t) {}, t.prototype.containsKey = function(t, e) { var n = new rd(e, 0),
                    r = this.batchesByDocumentKey.firstAfterOrEqual(n); return Qf.resolve(e.isEqual(r && r.key)) }, t.prototype.performConsistencyCheck = function(t) { return 0 === this.mutationQueue.length && Cc(this.batchesByDocumentKey.isEmpty(), "Document leak -- detected dangling mutation references when queue is empty."), Qf.resolve() }, t.prototype.indexOfExistingBatchId = function(t, e) { var n = this.indexOfBatchId(t); return Cc(0 <= n && n < this.mutationQueue.length, "Batches must exist to be " + e), n }, t.prototype.indexOfBatchId = function(t) { return 0 === this.mutationQueue.length ? 0 : t - this.mutationQueue[0].batchId }, t.prototype.findMutationBatch = function(t) { var e = this.indexOfBatchId(t); if (e < 0 || e >= this.mutationQueue.length) return null; var n = this.mutationQueue[e]; return Cc(n.batchId === t, "If found batch must match"), n }, t }(),
        ad = function() {
            function t(t) { this.persistence = t, this.queries = new rp(function(t) { return t.canonicalId() }), this.lastRemoteSnapshotVersion = ll.MIN, this.highestTargetId = 0, this.highestSequenceNumber = 0, this.references = new nd, this.targetCount = 0, this.targetIdGenerator = Kf.forQueryCache() } return t.prototype.getTargetCount = function(t) { return Qf.resolve(this.targetCount) }, t.prototype.forEachTarget = function(t, n) { return this.queries.forEach(function(t, e) { return n(e) }), Qf.resolve() }, t.prototype.getLastRemoteSnapshotVersion = function(t) { return Qf.resolve(this.lastRemoteSnapshotVersion) }, t.prototype.getHighestSequenceNumber = function(t) { return Qf.resolve(this.highestSequenceNumber) }, t.prototype.allocateTargetId = function(t) { var e = this.targetIdGenerator.after(this.highestTargetId); return this.highestTargetId = e, Qf.resolve(e) }, t.prototype.setTargetsMetadata = function(t, e, n) { return n && (this.lastRemoteSnapshotVersion = n), e > this.highestSequenceNumber && (this.highestSequenceNumber = e), Qf.resolve() }, t.prototype.saveQueryData = function(t) { this.queries.set(t.query, t); var e = t.targetId;
                e > this.highestTargetId && (this.highestTargetId = e), t.sequenceNumber > this.highestSequenceNumber && (this.highestSequenceNumber = t.sequenceNumber) }, t.prototype.addQueryData = function(t, e) { return Cc(!this.queries.has(e.query), "Adding a query that already exists"), this.saveQueryData(e), this.targetCount += 1, Qf.resolve() }, t.prototype.updateQueryData = function(t, e) { return Cc(this.queries.has(e.query), "Updating a non-existent query"), this.saveQueryData(e), Qf.resolve() }, t.prototype.removeQueryData = function(t, e) { return Cc(0 < this.targetCount, "Removing a target from an empty cache"), Cc(this.queries.has(e.query), "Removing a non-existent target from the cache"), this.queries.delete(e.query), this.references.removeReferencesForId(e.targetId), this.targetCount -= 1, Qf.resolve() }, t.prototype.removeTargets = function(n, r, i) { var o = this,
                    a = 0,
                    s = []; return this.queries.forEach(function(t, e) { e.sequenceNumber <= r && !i[e.targetId] && (o.queries.delete(t), s.push(o.removeMatchingKeysForTargetId(n, e.targetId)), a++) }), Qf.waitFor(s).next(function() { return a }) }, t.prototype.getQueryCount = function(t) { return Qf.resolve(this.targetCount) }, t.prototype.getQueryData = function(t, e) { var n = this.queries.get(e) || null; return Qf.resolve(n) }, t.prototype.getQueryDataForTarget = function(t, e) { return Sc("Not yet implemented.") }, t.prototype.addMatchingKeys = function(e, t, n) { this.references.addReferences(t, n); var r = this.persistence.referenceDelegate,
                    i = []; return r && t.forEach(function(t) { i.push(r.addReference(e, t)) }), Qf.waitFor(i) }, t.prototype.removeMatchingKeys = function(e, t, n) { this.references.removeReferences(t, n); var r = this.persistence.referenceDelegate,
                    i = []; return r && t.forEach(function(t) { i.push(r.removeReference(e, t)) }), Qf.waitFor(i) }, t.prototype.removeMatchingKeysForTargetId = function(t, e) { return this.references.removeReferencesForId(e), Qf.resolve() }, t.prototype.getMatchingKeysForTargetId = function(t, e) { var n = this.references.referencesForId(e); return Qf.resolve(n) }, t.prototype.containsKey = function(t, e) { return Qf.resolve(this.references.containsKey(e)) }, t }(); var sd, ud, cd = function() {
            function t(t) { this.sizer = t, this.docs = new Ch(_h.comparator), this.newDocumentChanges = Wl(), this.size = 0 } return t.prototype.addEntries = function(t, e, n) { for (var r = 0, i = e; r < i.length; r++) { var o = i[r],
                        a = o.maybeDocument.key;
                    this.docs = this.docs.insert(a, o), this.newDocumentChanges = this.newDocumentChanges.add(a) } return this.size += n, Qf.resolve() }, t.prototype.removeEntry = function(t, e) { var n = this.docs.get(e); return n ? (this.docs = this.docs.remove(e), this.size -= n.size, Qf.resolve(n.size)) : Qf.resolve(0) }, t.prototype.getEntry = function(t, e) { var n = this.docs.get(e); return Qf.resolve(n ? n.maybeDocument : null) }, t.prototype.getSizedEntry = function(t, e) { return Qf.resolve(this.docs.get(e)) }, t.prototype.getEntries = function(t, e) { var n = this,
                    r = Fl(); return e.forEach(function(t) { var e = n.docs.get(t);
                    r = r.insert(t, e ? e.maybeDocument : null) }), Qf.resolve(r) }, t.prototype.getSizedEntries = function(t, e) { var n = this,
                    r = Fl(),
                    i = new Ch(_h.comparator); return e.forEach(function(t) { var e = n.docs.get(t);
                    r = r.insert(t, e ? e.maybeDocument : null), i = i.insert(t, e ? e.size : 0) }), Qf.resolve({ maybeDocuments: r, sizeMap: i }) }, t.prototype.getDocumentsMatchingQuery = function(t, e) { for (var n = ql(), r = new _h(e.path.child("")), i = this.docs.getIteratorFrom(r); i.hasNext();) { var o = i.getNext(),
                        a = o.key,
                        s = o.value.maybeDocument; if (!e.path.isPrefixOf(a.path)) break;
                    s instanceof Eh && e.matches(s) && (n = n.insert(s.key, s)) } return Qf.resolve(n) }, t.prototype.forEachDocumentKey = function(t, e) { return Qf.forEach(this.docs, function(t) { return e(t) }) }, t.prototype.getNewDocumentChanges = function(t) { var r = this,
                    i = xl(); return this.newDocumentChanges.forEach(function(t) { var e = r.docs.get(t),
                        n = e ? e.maybeDocument : new Th(t, ll.forDeletedDoc());
                    i = i.insert(t, n) }), this.newDocumentChanges = Wl(), Qf.resolve(i) }, t.prototype.newChangeBuffer = function() { return new hd(this.sizer, this) }, t.prototype.getSize = function(t) { return Qf.resolve(this.size) }, t }(),
        hd = function(r) {
            function t(t, e) { var n = r.call(this) || this; return n.sizer = t, n.documentCache = e, n } return an(t, r), t.prototype.applyChanges = function(t) { var i = this,
                    e = this.assertChanges(),
                    o = 0,
                    a = []; return e.forEach(function(t, e) { var n = i.documentSizes.get(t);
                    Cc(void 0 !== n, "Attempting to change document " + t.toString() + " without having read it first"); var r = i.sizer(e);
                    o += r - n, a.push({ maybeDocument: e, size: r }) }), this.documentCache.addEntries(t, a, o) }, t.prototype.getFromCache = function(t, e) { return this.documentCache.getSizedEntry(t, e) }, t.prototype.getAllFromCache = function(t, e) { return this.documentCache.getSizedEntries(t, e) }, t }(ip),
        ld = function() {
            function r(t, e) { var n = this;
                this.clientId = t, this.mutationQueues = {}, this.listenSequence = new Df(0), this._started = !1, this._started = !0, this.referenceDelegate = e(this), this.queryCache = new ad(this);
                this.remoteDocumentCache = new cd(function(t) { return n.referenceDelegate.documentSize(t) }) } return r.createLruPersistence = function(t, e, n) { return new r(t, function(t) { return new dd(t, new Up(e), n) }) }, r.createEagerPersistence = function(t) { return new r(t, function(t) { return new pd(t) }) }, r.prototype.shutdown = function(t) { return this._started = !1, Promise.resolve() }, Object.defineProperty(r.prototype, "started", { get: function() { return this._started }, enumerable: !0, configurable: !0 }), r.prototype.getActiveClients = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { return [2, [this.clientId]] }) }) }, r.prototype.setPrimaryStateListener = function(t) { return t(!0) }, r.prototype.setNetworkEnabled = function(t) {}, r.prototype.getMutationQueue = function(t) { var e = this.mutationQueues[t.toKey()]; return e || (e = new od(this.referenceDelegate), this.mutationQueues[t.toKey()] = e), e }, r.prototype.getQueryCache = function() { return this.queryCache }, r.prototype.getRemoteDocumentCache = function() { return this.remoteDocumentCache }, r.prototype.runTransaction = function(t, e, n) { var r = this;
                wc("MemoryPersistence", "Starting transaction:", t); var i = new fd(this.listenSequence.next()); return this.referenceDelegate.onTransactionStarted(), n(i).next(function(t) { return r.referenceDelegate.onTransactionCommitted(i).next(function() { return t }) }).toPromise() }, r.prototype.mutationQueuesContainKey = function(e, n) { return Qf.or((t = this.mutationQueues, r = [], Mc(t, function(t, e) { return r.push(e) }), r).map(function(t) { return function() { return t.containsKey(e, n) } })); var t, r }, r }(),
        fd = function(t) { this.currentSequenceNumber = t },
        pd = function() {
            function t(t) { this.persistence = t } return t.prototype.setInMemoryPins = function(t) { this.inMemoryPins = t }, t.prototype.addReference = function(t, e) { return this.orphanedDocuments.delete(e), Qf.resolve() }, t.prototype.removeReference = function(t, e) { return this.orphanedDocuments.add(e), Qf.resolve() }, t.prototype.removeMutationReference = function(t, e) { return this.orphanedDocuments.add(e), Qf.resolve() }, t.prototype.removeTarget = function(t, e) { var n = this,
                    r = this.persistence.getQueryCache(); return r.getMatchingKeysForTargetId(t, e.targetId).next(function(t) { t.forEach(function(t) { return n.orphanedDocuments.add(t) }) }).next(function() { return r.removeQueryData(t, e) }) }, t.prototype.onTransactionStarted = function() { this.orphanedDocuments = new Set }, t.prototype.onTransactionCommitted = function(n) { var t = this,
                    r = this.persistence.getRemoteDocumentCache(); return Qf.forEach(this.orphanedDocuments, function(e) { return t.isReferenced(n, e).next(function(t) { return t ? Qf.resolve() : r.removeEntry(n, e).next(function() {}) }) }) }, t.prototype.updateLimboDocument = function(t, e) { var n = this; return this.isReferenced(t, e).next(function(t) { t ? n.orphanedDocuments.delete(e) : n.orphanedDocuments.add(e) }) }, t.prototype.documentSize = function(t) { return 0 }, t.prototype.isReferenced = function(t, e) { var n = this; return Qf.or([function() { return n.persistence.getQueryCache().containsKey(t, e) }, function() { return n.persistence.mutationQueuesContainKey(t, e) }, function() { return Qf.resolve(n.inMemoryPins.containsKey(e)) }]) }, t }(),
        dd = function() {
            function t(t, e, n) { this.persistence = t, this.serializer = e, this.orphanedSequenceNumbers = new rp(function(t) { return xf(t.path) }), this.garbageCollector = new Kp(this, n) } return t.prototype.onTransactionStarted = function() {}, t.prototype.onTransactionCommitted = function(t) { return Qf.resolve() }, t.prototype.forEachTarget = function(t, e) { return this.persistence.getQueryCache().forEachTarget(t, e) }, t.prototype.getSequenceNumberCount = function(t) { var n = this.orphanedDocumentCount(t); return this.persistence.getQueryCache().getTargetCount(t).next(function(e) { return n.next(function(t) { return e + t }) }) }, t.prototype.orphanedDocumentCount = function(t) { var e = 0; return this.forEachOrphanedDocumentSequenceNumber(t, function(t) { e++ }).next(function() { return e }) }, t.prototype.forEachOrphanedDocumentSequenceNumber = function(n, r) { var i = this; return Qf.forEach(this.orphanedSequenceNumbers, function(t, e) { return i.isPinned(n, t, e).next(function(t) { return t ? Qf.resolve() : r(e) }) }) }, t.prototype.setInMemoryPins = function(t) { this.inMemoryPins = t }, t.prototype.removeTargets = function(t, e, n) { return this.persistence.getQueryCache().removeTargets(t, e, n) }, t.prototype.removeOrphanedDocuments = function(n, t) { var r = this,
                    i = 0,
                    o = this.persistence.getRemoteDocumentCache(); return o.forEachDocumentKey(n, function(e) { return r.isPinned(n, e, t).next(function(t) { return t ? Qf.resolve() : (i++, o.removeEntry(n, e).next()) }) }).next(function() { return i }) }, t.prototype.removeMutationReference = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Qf.resolve() }, t.prototype.removeTarget = function(t, e) { var n = e.copy({ sequenceNumber: t.currentSequenceNumber }); return this.persistence.getQueryCache().updateQueryData(t, n) }, t.prototype.addReference = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Qf.resolve() }, t.prototype.removeReference = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Qf.resolve() }, t.prototype.updateLimboDocument = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Qf.resolve() }, t.prototype.documentSize = function(t) { var e, n = this.serializer.toDbRemoteDocument(t); if (n.document) e = n.document;
                else if (n.unknownDocument) e = n.unknownDocument;
                else { if (!n.noDocument) throw Sc("Unknown remote document type");
                    e = n.noDocument } return JSON.stringify(e).length }, t.prototype.isPinned = function(t, e, n) { var r = this; return Qf.or([function() { return r.persistence.mutationQueuesContainKey(t, e) }, function() { return Qf.resolve(r.inMemoryPins.containsKey(e)) }, function() { return r.persistence.getQueryCache().containsKey(t, e) }, function() { var t = r.orphanedSequenceNumbers.get(e); return Qf.resolve(void 0 !== t && n < t) }]) }, t.prototype.getCacheSize = function(t) { return this.persistence.getRemoteDocumentCache().getSize(t) }, t }(),
        yd = function() {
            function t(t, e, n, r, i) { this.queue = t, this.timerId = e, this.initialDelayMs = n, this.backoffFactor = r, this.maxDelayMs = i, this.timerPromise = null, this.lastAttemptTime = Date.now(), this.reset() } return t.prototype.reset = function() { this.currentBaseMs = 0 }, t.prototype.resetToMax = function() { this.currentBaseMs = this.maxDelayMs }, t.prototype.backoffAndRun = function(t) { var e = this;
                this.cancel(); var n = Math.floor(this.currentBaseMs + this.jitterDelayMs()),
                    r = Math.max(0, Date.now() - this.lastAttemptTime),
                    i = Math.max(0, n - r);
                0 < this.currentBaseMs && wc("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.currentBaseMs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, i, function() { return e.lastAttemptTime = Date.now(), t() }), this.currentBaseMs *= this.backoffFactor, this.currentBaseMs < this.initialDelayMs && (this.currentBaseMs = this.initialDelayMs), this.currentBaseMs > this.maxDelayMs && (this.currentBaseMs = this.maxDelayMs) }, t.prototype.cancel = function() { null !== this.timerPromise && (this.timerPromise.cancel(), this.timerPromise = null) }, t.prototype.jitterDelayMs = function() { return (Math.random() - .5) * this.currentBaseMs }, t }(),
        md = "PersistentStream";
    (ud = sd || (sd = {}))[ud.Initial = 0] = "Initial", ud[ud.Starting = 1] = "Starting", ud[ud.Open = 2] = "Open", ud[ud.Error = 3] = "Error", ud[ud.Backoff = 4] = "Backoff"; var gd, vd, bd, _d, wd = function() {
            function t(t, e, n, r, i, o) { this.queue = t, this.idleTimerId = n, this.connection = r, this.credentialsProvider = i, this.listener = o, this.state = sd.Initial, this.closeCount = 0, this.idleTimer = null, this.stream = null, this.backoff = new yd(t, e, 1e3, 1.5, 6e4) } return t.prototype.isStarted = function() { return this.state === sd.Starting || this.state === sd.Open || this.state === sd.Backoff }, t.prototype.isOpen = function() { return this.state === sd.Open }, t.prototype.start = function() { this.state !== sd.Error ? (Cc(this.state === sd.Initial, "Already started"), this.auth()) : this.performBackoff() }, t.prototype.stop = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.isStarted() ? [4, this.close(sd.Initial)] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2] } }) }) }, t.prototype.inhibitBackoff = function() { Cc(!this.isStarted(), "Can only inhibit backoff in a stopped state"), this.state = sd.Initial, this.backoff.reset() }, t.prototype.markIdle = function() { var t = this;
                this.isOpen() && null === this.idleTimer && (this.idleTimer = this.queue.enqueueAfterDelay(this.idleTimerId, 6e4, function() { return t.handleIdleCloseTimer() })) }, t.prototype.sendRequest = function(t) { this.cancelIdleCheck(), this.stream.send(t) }, t.prototype.handleIdleCloseTimer = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { return this.isOpen() ? [2, this.close(sd.Initial)] : [2] }) }) }, t.prototype.cancelIdleCheck = function() { this.idleTimer && (this.idleTimer.cancel(), this.idleTimer = null) }, t.prototype.close = function(e, n) { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return Cc(this.isStarted(), "Only started streams should be closed."), Cc(e === sd.Error || Xh(n), "Can't provide an error when not in an error state."), this.cancelIdleCheck(), this.backoff.cancel(), this.closeCount++, e !== sd.Error ? this.backoff.reset() : n && n.code === Dc.RESOURCE_EXHAUSTED ? (Ec(n.toString()), Ec("Using maximum backoff delay to prevent overloading the backend."), this.backoff.resetToMax()) : n && n.code === Dc.UNAUTHENTICATED && this.credentialsProvider.invalidateToken(), null !== this.stream && (this.tearDown(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.onClose(n)];
                            case 1:
                                return t.sent(), [2] } }) }) }, t.prototype.tearDown = function() {}, t.prototype.auth = function() { var n = this;
                Cc(this.state === sd.Initial, "Must be in initial state to auth"), this.state = sd.Starting; var t = this.getCloseGuardedDispatcher(this.closeCount),
                    e = this.closeCount;
                this.credentialsProvider.getToken().then(function(t) { n.closeCount === e && n.startStream(t) }, function(e) { t(function() { var t = new Ac(Dc.UNKNOWN, "Fetching auth token failed: " + e.message); return n.handleStreamClose(t) }) }) }, t.prototype.startStream = function(t) { var e = this;
                Cc(this.state === sd.Starting, "Trying to start stream in a non-starting state"); var n = this.getCloseGuardedDispatcher(this.closeCount);
                this.stream = this.startRpc(t), this.stream.onOpen(function() { n(function() { return Cc(e.state === sd.Starting, "Expected stream to be in state Starting, but was " + e.state), e.state = sd.Open, e.listener.onOpen() }) }), this.stream.onClose(function(t) { n(function() { return e.handleStreamClose(t) }) }), this.stream.onMessage(function(t) { n(function() { return e.onMessage(t) }) }) }, t.prototype.performBackoff = function() { var t = this;
                Cc(this.state === sd.Error, "Should only perform backoff when in Error state"), this.state = sd.Backoff, this.backoff.backoffAndRun(function() { return un(t, void 0, void 0, function() { return cn(this, function(t) { return Cc(this.state === sd.Backoff, "Backoff elapsed but state is now: " + this.state), this.state = sd.Initial, this.start(), Cc(this.isStarted(), "PersistentStream should have started"), [2] }) }) }) }, t.prototype.handleStreamClose = function(t) { return Cc(this.isStarted(), "Can't handle server close on non-started stream"), wc(md, "close with error: " + t), this.stream = null, this.close(sd.Error, t) }, t.prototype.getCloseGuardedDispatcher = function(e) { var n = this; return function(t) { n.queue.enqueueAndForget(function() { return n.closeCount === e ? t() : (wc(md, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()) }) } }, t }(),
        Ed = function(a) {
            function t(t, e, n, r, i) { var o = a.call(this, t, If.ListenStreamConnectionBackoff, If.ListenStreamIdle, e, n, i) || this; return o.serializer = r, o } return an(t, a), t.prototype.startRpc = function(t) { return this.connection.openStream("Listen", t) }, t.prototype.onMessage = function(t) { this.backoff.reset(); var e = this.serializer.fromWatchChange(t),
                    n = this.serializer.versionFromListenResponse(t); return this.listener.onWatchChange(e, n) }, t.prototype.watch = function(t) { var e = {};
                e.database = this.serializer.encodedDatabaseId, e.addTarget = this.serializer.toTarget(t); var n = this.serializer.toListenRequestLabels(t);
                n && (e.labels = n), this.sendRequest(e) }, t.prototype.unwatch = function(t) { var e = {};
                e.database = this.serializer.encodedDatabaseId, e.removeTarget = t, this.sendRequest(e) }, t }(wd),
        Td = function(a) {
            function t(t, e, n, r, i) { var o = a.call(this, t, If.WriteStreamConnectionBackoff, If.WriteStreamIdle, e, n, i) || this; return o.serializer = r, o.handshakeComplete_ = !1, o } return an(t, a), Object.defineProperty(t.prototype, "handshakeComplete", { get: function() { return this.handshakeComplete_ }, enumerable: !0, configurable: !0 }), t.prototype.start = function() { this.handshakeComplete_ = !1, a.prototype.start.call(this) }, t.prototype.tearDown = function() { this.handshakeComplete_ && this.writeMutations([]) }, t.prototype.startRpc = function(t) { return this.connection.openStream("Write", t) }, t.prototype.onMessage = function(t) { if (Cc(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = t.streamToken, this.handshakeComplete_) { this.backoff.reset(); var e = this.serializer.fromWriteResults(t.writeResults, t.commitTime),
                        n = this.serializer.fromVersion(t.commitTime); return this.listener.onMutationResult(n, e) } return Cc(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), this.handshakeComplete_ = !0, this.listener.onHandshakeComplete() }, t.prototype.writeHandshake = function() { Cc(this.isOpen(), "Writing handshake requires an opened stream"), Cc(!this.handshakeComplete_, "Handshake already completed"); var t = {};
                t.database = this.serializer.encodedDatabaseId, this.sendRequest(t) }, t.prototype.writeMutations = function(t) { var e = this;
                Cc(this.isOpen(), "Writing mutations requires an opened stream"), Cc(this.handshakeComplete_, "Handshake must be complete before writing mutations"), Cc(0 < this.lastStreamToken.length, "Trying to write mutation without a token"); var n = { streamToken: this.lastStreamToken, writes: t.map(function(t) { return e.serializer.toMutation(t) }) };
                this.sendRequest(n) }, t }(wd),
        Sd = function() {
            function t(t, e, n, r) { this.queue = t, this.connection = e, this.credentials = n, this.serializer = r } return t.prototype.newPersistentWriteStream = function(t) { return new Td(this.queue, this.connection, this.credentials, this.serializer, t) }, t.prototype.newPersistentWatchStream = function(t) { return new Ed(this.queue, this.connection, this.credentials, this.serializer, t) }, t.prototype.commit = function(t) { var e = this,
                    n = { database: this.serializer.encodedDatabaseId, writes: t.map(function(t) { return e.serializer.toMutation(t) }) }; return this.invokeRPC("Commit", n).then(function(t) { return e.serializer.fromWriteResults(t.writeResults, t.commitTime) }) }, t.prototype.lookup = function(e) { var i = this,
                    t = { database: this.serializer.encodedDatabaseId, documents: e.map(function(t) { return i.serializer.toName(t) }) }; return this.invokeStreamingRPC("BatchGetDocuments", t).then(function(t) { var n = xl();
                    t.forEach(function(t) { var e = i.serializer.fromMaybeDocument(t);
                        n = n.insert(e.key, e) }); var r = []; return e.forEach(function(t) { var e = n.get(t);
                        Cc(!!e, "Missing entity in write response for " + t), r.push(e) }), r }) }, t.prototype.invokeRPC = function(e, n) { var r = this; return this.credentials.getToken().then(function(t) { return r.connection.invokeRPC(e, n, t) }).catch(function(t) { throw t.code === Dc.UNAUTHENTICATED && r.credentials.invalidateToken(), t }) }, t.prototype.invokeStreamingRPC = function(e, n) { var r = this; return this.credentials.getToken().then(function(t) { return r.connection.invokeStreamingRPC(e, n, t) }).catch(function(t) { throw t.code === Dc.UNAUTHENTICATED && r.credentials.invalidateToken(), t }) }, t }(),
        Cd = function() {
            function t(t) { this.datastore = t, this.readVersions = Bl(), this.mutations = [], this.committed = !1 } return t.prototype.recordVersion = function(t) { var e; if (t instanceof Eh) e = t.version;
                else { if (!(t instanceof Th)) throw Sc("Document in a transaction was a " + t.constructor.name);
                    e = ll.forDeletedDoc() } var n = this.readVersions.get(t.key); if (null !== n) { if (!e.isEqual(n)) throw new Ac(Dc.ABORTED, "Document version changed between two reads.") } else this.readVersions = this.readVersions.insert(t.key, e) }, t.prototype.lookup = function(t) { var e = this; return this.committed ? Promise.reject("Transaction has already completed.") : 0 < this.mutations.length ? Promise.reject("Transactions lookups are invalid after writes.") : this.datastore.lookup(t).then(function(t) { return t.forEach(function(t) { t instanceof Th || t instanceof Eh ? e.recordVersion(t) : Sc("Document in a transaction was a " + t.constructor.name) }), t }) }, t.prototype.write = function(t) { if (this.committed) throw new Ac(Dc.FAILED_PRECONDITION, "Transaction has already completed.");
                this.mutations = this.mutations.concat(t) }, t.prototype.precondition = function(t) { var e = this.readVersions.get(t); return e ? _l.updateTime(e) : _l.NONE }, t.prototype.preconditionForUpdate = function(t) { var e = this.readVersions.get(t); if (e && e.isEqual(ll.forDeletedDoc())) throw new Ac(Dc.FAILED_PRECONDITION, "Can't update a document that doesn't exist."); return e ? _l.updateTime(e) : _l.exists(!0) }, t.prototype.set = function(t, e) { this.write(e.toMutations(t, this.precondition(t))) }, t.prototype.update = function(t, e) { this.write(e.toMutations(t, this.preconditionForUpdate(t))) }, t.prototype.delete = function(t) { this.write([new Cl(t, this.precondition(t))]), this.readVersions = this.readVersions.insert(t, ll.forDeletedDoc()) }, t.prototype.commit = function() { var t = this,
                    e = this.readVersions; return this.mutations.forEach(function(t) { e = e.remove(t.key) }), e.isEmpty() ? this.datastore.commit(this.mutations).then(function() { t.committed = !0 }) : Promise.reject(Error("Every document read in a transaction must also be written.")) }, t }();
    (vd = gd || (gd = {}))[vd.Unknown = 0] = "Unknown", vd[vd.Online = 1] = "Online", vd[vd.Offline = 2] = "Offline", (_d = bd || (bd = {}))[_d.RemoteStore = 0] = "RemoteStore", _d[_d.SharedClientState = 1] = "SharedClientState"; var Id = function() {
            function t(t, e) { this.asyncQueue = t, this.onlineStateHandler = e, this.state = gd.Unknown, this.watchStreamFailures = 0, this.onlineStateTimer = null, this.shouldWarnClientIsOffline = !0 } return t.prototype.handleWatchStreamStart = function() { var t = this;
                0 === this.watchStreamFailures && (this.setAndBroadcast(gd.Unknown), Cc(null === this.onlineStateTimer, "onlineStateTimer shouldn't be started yet"), this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay(If.OnlineStateTimeout, 1e4, function() { return t.onlineStateTimer = null, Cc(t.state === gd.Unknown, "Timer should be canceled if we transitioned to a different state."), t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."), t.setAndBroadcast(gd.Offline), Promise.resolve() })) }, t.prototype.handleWatchStreamFailure = function(t) { this.state === gd.Online ? (this.setAndBroadcast(gd.Unknown), Cc(0 === this.watchStreamFailures, "watchStreamFailures must be 0"), Cc(null === this.onlineStateTimer, "onlineStateTimer must be null")) : (this.watchStreamFailures++, 1 <= this.watchStreamFailures && (this.clearOnlineStateTimer(), this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: " + t.toString()), this.setAndBroadcast(gd.Offline))) }, t.prototype.set = function(t) { this.clearOnlineStateTimer(), this.watchStreamFailures = 0, t === gd.Online && (this.shouldWarnClientIsOffline = !1), this.setAndBroadcast(t) }, t.prototype.setAndBroadcast = function(t) { t !== this.state && (this.state = t, this.onlineStateHandler(t)) }, t.prototype.logClientOfflineWarningIfNecessary = function(t) { var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                this.shouldWarnClientIsOffline ? (Ec(e), this.shouldWarnClientIsOffline = !1) : wc("OnlineStateTracker", e) }, t.prototype.clearOnlineStateTimer = function() { null !== this.onlineStateTimer && (this.onlineStateTimer.cancel(), this.onlineStateTimer = null) }, t }(),
        Nd = "RemoteStore",
        Dd = function() {
            function t(t, e, n, r) { this.localStore = t, this.datastore = e, this.writePipeline = [], this.listenTargets = {}, this.watchChangeAggregator = null, this.networkEnabled = !1, this.isPrimary = !1, this.onlineStateTracker = new Id(n, r), this.watchStream = this.datastore.newPersistentWatchStream({ onOpen: this.onWatchStreamOpen.bind(this), onClose: this.onWatchStreamClose.bind(this), onWatchChange: this.onWatchStreamChange.bind(this) }), this.writeStream = this.datastore.newPersistentWriteStream({ onOpen: this.onWriteStreamOpen.bind(this), onClose: this.onWriteStreamClose.bind(this), onHandshakeComplete: this.onWriteHandshakeComplete.bind(this), onMutationResult: this.onMutationResult.bind(this) }) } return t.prototype.start = function() { return this.enableNetwork() }, t.prototype.enableNetwork = function() { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.networkEnabled = !0, this.canUseNetwork() ? (e = this.writeStream, [4, this.localStore.getLastStreamToken()]) : [3, 3];
                            case 1:
                                return e.lastStreamToken = t.sent(), this.shouldStartWatchStream() ? this.startWatchStream() : this.onlineStateTracker.set(gd.Unknown), [4, this.fillWritePipeline()];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [2] } }) }) }, t.prototype.disableNetwork = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                            case 1:
                                return t.sent(), this.onlineStateTracker.set(gd.Offline), [2] } }) }) }, t.prototype.disableNetworkInternal = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, this.writeStream.stop()];
                            case 1:
                                return t.sent(), [4, this.watchStream.stop()];
                            case 2:
                                return t.sent(), 0 < this.writePipeline.length && (wc(Nd, "Stopping write stream with " + this.writePipeline.length + " pending writes"), this.writePipeline = []), this.cleanUpWatchStreamState(), [2] } }) }) }, t.prototype.shutdown = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return wc(Nd, "RemoteStore shutting down."), this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                            case 1:
                                return t.sent(), this.onlineStateTracker.set(gd.Unknown), [2] } }) }) }, t.prototype.listen = function(t) { Cc(!Rc(this.listenTargets, t.targetId), "listen called with duplicate targetId!"), this.listenTargets[t.targetId] = t, this.shouldStartWatchStream() ? this.startWatchStream() : this.watchStream.isOpen() && this.sendWatchRequest(t) }, t.prototype.unlisten = function(t) { Cc(Rc(this.listenTargets, t), "unlisten called without assigned target ID!"), delete this.listenTargets[t], this.watchStream.isOpen() && this.sendUnwatchRequest(t), Lc(this.listenTargets) && (this.watchStream.isOpen() ? this.watchStream.markIdle() : this.canUseNetwork() && this.onlineStateTracker.set(gd.Unknown)) }, t.prototype.getQueryDataForTarget = function(t) { return this.listenTargets[t] || null }, t.prototype.getRemoteKeysForTarget = function(t) { return this.syncEngine.getRemoteKeysForTarget(t) }, t.prototype.sendWatchRequest = function(t) { this.watchChangeAggregator.recordPendingTargetRequest(t.targetId), this.watchStream.watch(t) }, t.prototype.sendUnwatchRequest = function(t) { this.watchChangeAggregator.recordPendingTargetRequest(t), this.watchStream.unwatch(t) }, t.prototype.startWatchStream = function() { Cc(this.shouldStartWatchStream(), "startWatchStream() called when shouldStartWatchStream() is false."), this.watchChangeAggregator = new uf(this), this.watchStream.start(), this.onlineStateTracker.handleWatchStreamStart() }, t.prototype.shouldStartWatchStream = function() { return this.canUseNetwork() && !this.watchStream.isStarted() && !Lc(this.listenTargets) }, t.prototype.canUseNetwork = function() { return this.isPrimary && this.networkEnabled }, t.prototype.cleanUpWatchStreamState = function() { this.watchChangeAggregator = null }, t.prototype.onWatchStreamOpen = function() { return un(this, void 0, void 0, function() { var n = this; return cn(this, function(t) { return Pc(this.listenTargets, function(t, e) { n.sendWatchRequest(e) }), [2] }) }) }, t.prototype.onWatchStreamClose = function(e) { return un(this, void 0, void 0, function() { return cn(this, function(t) { return void 0 === e && Cc(!this.shouldStartWatchStream(), "Watch stream was stopped gracefully while still needed."), this.cleanUpWatchStreamState(), this.shouldStartWatchStream() ? (this.onlineStateTracker.handleWatchStreamFailure(e), this.startWatchStream()) : this.onlineStateTracker.set(gd.Unknown), [2] }) }) }, t.prototype.onWatchStreamChange = function(n, r) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.onlineStateTracker.set(gd.Online), n instanceof af && n.state === Jl.Removed && n.cause ? [2, this.handleTargetError(n)] : (n instanceof rf ? this.watchChangeAggregator.handleDocumentChange(n) : n instanceof of ? this.watchChangeAggregator.handleExistenceFilter(n) : (Cc(n instanceof af, "Expected watchChange to be an instance of WatchTargetChange"), this.watchChangeAggregator.handleTargetChange(n)), r.isEqual(ll.MIN) ? [3, 3] : [4, this.localStore.getLastRemoteSnapshotVersion()]);
                            case 1:
                                return e = t.sent(), 0 <= r.compareTo(e) ? [4, this.raiseWatchSnapshot(r)] : [3, 3];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [2] } }) }) }, t.prototype.raiseWatchSnapshot = function(r) { var i = this;
                Cc(!r.isEqual(ll.MIN), "Can't raise event for unknown SnapshotVersion"); var t = this.watchChangeAggregator.createRemoteEvent(r); return Pc(t.targetChanges, function(t, e) { if (0 < e.resumeToken.length) { var n = i.listenTargets[t];
                        n && (i.listenTargets[t] = n.copy({ resumeToken: e.resumeToken, snapshotVersion: r })) } }), t.targetMismatches.forEach(function(t) { var e = i.listenTargets[t]; if (e) { i.listenTargets[t] = e.copy({ resumeToken: Nc() }), i.sendUnwatchRequest(t); var n = new dl(e.query, t, $h.ExistenceFilterMismatch, e.sequenceNumber);
                        i.sendWatchRequest(n) } }), this.syncEngine.applyRemoteEvent(t) }, t.prototype.handleTargetError = function(t) { var n = this;
                Cc(!!t.cause, "Handling target error without a cause"); var r = t.cause,
                    i = Promise.resolve(); return t.targetIds.forEach(function(e) { i = i.then(function() { return un(n, void 0, void 0, function() { return cn(this, function(t) { return Rc(this.listenTargets, e) ? (delete this.listenTargets[e], this.watchChangeAggregator.removeTarget(e), [2, this.syncEngine.rejectListen(e, r)]) : [2] }) }) }) }), i }, t.prototype.fillWritePipeline = function() { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.canAddToWritePipeline() ? (e = 0 < this.writePipeline.length ? this.writePipeline[this.writePipeline.length - 1].batchId : -1, [4, this.localStore.nextMutationBatch(e)]) : [3, 4];
                            case 1:
                                return null !== (n = t.sent()) ? [3, 2] : (0 === this.writePipeline.length && this.writeStream.markIdle(), [3, 4]);
                            case 2:
                                return this.addToWritePipeline(n), [4, this.fillWritePipeline()];
                            case 3:
                                t.sent(), t.label = 4;
                            case 4:
                                return this.shouldStartWriteStream() && this.startWriteStream(), [2] } }) }) }, t.prototype.canAddToWritePipeline = function() { return this.canUseNetwork() && this.writePipeline.length < 10 }, t.prototype.outstandingWrites = function() { return this.writePipeline.length }, t.prototype.addToWritePipeline = function(t) { Cc(this.canAddToWritePipeline(), "addToWritePipeline called when pipeline is full"), this.writePipeline.push(t), this.writeStream.isOpen() && this.writeStream.handshakeComplete && this.writeStream.writeMutations(t.mutations) }, t.prototype.shouldStartWriteStream = function() { return this.canUseNetwork() && !this.writeStream.isStarted() && 0 < this.writePipeline.length }, t.prototype.startWriteStream = function() { Cc(this.shouldStartWriteStream(), "startWriteStream() called when shouldStartWriteStream() is false."), this.writeStream.start() }, t.prototype.onWriteStreamOpen = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { return this.writeStream.writeHandshake(), [2] }) }) }, t.prototype.onWriteHandshakeComplete = function() { var r = this; return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function() { for (var t = 0, e = r.writePipeline; t < e.length; t++) { var n = e[t];
                        r.writeStream.writeMutations(n.mutations) } }).catch(Xp) }, t.prototype.onMutationResult = function(t, e) { var n = this;
                Cc(0 < this.writePipeline.length, "Got result for empty write pipeline"); var r = this.writePipeline.shift(),
                    i = Wf.from(r, t, e, this.writeStream.lastStreamToken); return this.syncEngine.applySuccessfulWrite(i).then(function() { return n.fillWritePipeline() }) }, t.prototype.onWriteStreamClose = function(n) { return un(this, void 0, void 0, function() { var e = this; return cn(this, function(t) { return void 0 === n && Cc(!this.shouldStartWriteStream(), "Write stream was stopped gracefully while still needed."), n && 0 < this.writePipeline.length ? (void 0, [2, (this.writeStream.handshakeComplete ? this.handleWriteError(n) : this.handleHandshakeError(n)).then(function() { e.shouldStartWriteStream() && e.startWriteStream() })]) : [2] }) }) }, t.prototype.handleHandshakeError = function(e) { return un(this, void 0, void 0, function() { return cn(this, function(t) { return Pl(e.code) ? (wc(Nd, "RemoteStore error before completed handshake; resetting stream token: ", this.writeStream.lastStreamToken), this.writeStream.lastStreamToken = Nc(), [2, this.localStore.setLastStreamToken(Nc()).catch(Xp)]) : [2] }) }) }, t.prototype.handleWriteError = function(i) { return un(this, void 0, void 0, function() { var n, r = this; return cn(this, function(t) { return Pl(e = i.code) && e !== Dc.ABORTED ? (n = this.writePipeline.shift(), this.writeStream.inhibitBackoff(), [2, this.syncEngine.rejectFailedWrite(n.batchId, i).then(function() { return r.fillWritePipeline() })]) : [2]; var e }) }) }, t.prototype.createTransaction = function() { return new Cd(this.datastore) }, t.prototype.handleCredentialChange = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.canUseNetwork() ? (wc(Nd, "RemoteStore restarting streams for new credential"), this.networkEnabled = !1, [4, this.disableNetworkInternal()]) : [3, 3];
                            case 1:
                                return t.sent(), this.onlineStateTracker.set(gd.Unknown), [4, this.enableNetwork()];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [2] } }) }) }, t.prototype.applyPrimaryState = function(e) { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return (this.isPrimary = e) && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                            case 1:
                                return t.sent(), [3, 4];
                            case 2:
                                return e ? [3, 4] : [4, this.disableNetworkInternal()];
                            case 3:
                                t.sent(), this.onlineStateTracker.set(gd.Unknown), t.label = 4;
                            case 4:
                                return [2] } }) }) }, t }(),
        Ad = function() { this.listeners = [] },
        kd = function() {
            function t(t) { this.syncEngine = t, this.queries = new rp(function(t) { return t.canonicalId() }), this.onlineState = gd.Unknown, this.syncEngine.subscribe(this) } return t.prototype.listen = function(t) { var e = t.query,
                    n = !1,
                    r = this.queries.get(e); return r || (n = !0, r = new Ad, this.queries.set(e, r)), r.listeners.push(t), t.applyOnlineStateChange(this.onlineState), r.viewSnap && t.onViewSnapshot(r.viewSnap), n ? this.syncEngine.listen(e).then(function(t) { return r.targetId = t }) : Promise.resolve(r.targetId) }, t.prototype.unlisten = function(o) { return un(this, void 0, void 0, function() { var e, n, r, i; return cn(this, function(t) { return e = o.query, n = !1, (r = this.queries.get(e)) && 0 <= (i = r.listeners.indexOf(o)) && (r.listeners.splice(i, 1), n = 0 === r.listeners.length), n ? (this.queries.delete(e), [2, this.syncEngine.unlisten(e)]) : [2] }) }) }, t.prototype.onWatchChange = function(t) { for (var e = 0, n = t; e < n.length; e++) { var r = n[e],
                        i = r.query,
                        o = this.queries.get(i); if (o) { for (var a = 0, s = o.listeners; a < s.length; a++) { s[a].onViewSnapshot(r) }
                        o.viewSnap = r } } }, t.prototype.onWatchError = function(t, e) { var n = this.queries.get(t); if (n)
                    for (var r = 0, i = n.listeners; r < i.length; r++) { i[r].onError(e) }
                this.queries.delete(t) }, t.prototype.onOnlineStateChange = function(i) { this.onlineState = i, this.queries.forEach(function(t, e) { for (var n = 0, r = e.listeners; n < r.length; n++) { r[n].applyOnlineStateChange(i) } }) }, t }(),
        Rd = function() {
            function t(t, e, n) { this.query = t, this.queryObserver = e, this.raisedInitialEvent = !1, this.onlineState = gd.Unknown, this.options = n || {} } return t.prototype.onViewSnapshot = function(t) { if (Cc(0 < t.docChanges.length || t.syncStateChanged, "We got a new snapshot with no changes?"), !this.options.includeMetadataChanges) { for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) { var i = r[n];
                        i.type !== Hl.Metadata && e.push(i) }
                    t = new tf(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0) }
                this.raisedInitialEvent ? this.shouldRaiseEvent(t) && this.queryObserver.next(t) : this.shouldRaiseInitialEvent(t, this.onlineState) && this.raiseInitialEvent(t), this.snap = t }, t.prototype.onError = function(t) { this.queryObserver.error(t) }, t.prototype.applyOnlineStateChange = function(t) { this.onlineState = t, this.snap && !this.raisedInitialEvent && this.shouldRaiseInitialEvent(this.snap, t) && this.raiseInitialEvent(this.snap) }, t.prototype.shouldRaiseInitialEvent = function(t, e) { if (Cc(!this.raisedInitialEvent, "Determining whether to raise first event but already had first event"), !t.fromCache) return !0; var n = e !== gd.Offline; return this.options.waitForSyncWhenOnline && n ? (Cc(t.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !t.docs.isEmpty() || e === gd.Offline }, t.prototype.shouldRaiseEvent = function(t) { if (0 < t.docChanges.length) return !0; var e = this.snap && this.snap.hasPendingWrites !== t.hasPendingWrites; return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges }, t.prototype.raiseInitialEvent = function(t) { Cc(!this.raisedInitialEvent, "Trying to raise initial events for second time"), t = tf.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.raisedInitialEvent = !0, this.queryObserver.next(t) }, t }(),
        Od = function() {
            function s(t, e, n) { this.targetId = t, this.addedKeys = e, this.removedKeys = n } return s.fromSnapshot = function(t, e) { for (var n = Wl(), r = Wl(), i = 0, o = e.docChanges; i < o.length; i++) { var a = o[i]; switch (a.type) {
                        case Hl.Added:
                            n = n.add(a.doc.key); break;
                        case Hl.Removed:
                            r = r.add(a.doc.key) } } return new s(t, n, r) }, s }(),
        Pd = function(t) { this.key = t },
        Md = function(t) { this.key = t },
        Ld = function() {
            function t(t, e) { this.query = t, this._syncedDocuments = e, this.syncState = null, this.current = !1, this.limboDocuments = Wl(), this.mutatedKeys = Wl(), this.documentSet = new Xl(t.docComparator.bind(t)) } return Object.defineProperty(t.prototype, "syncedDocuments", { get: function() { return this._syncedDocuments }, enumerable: !0, configurable: !0 }), t.prototype.computeDocChanges = function(t, e) { var s = this,
                    u = e ? e.changeSet : new Zl,
                    c = e ? e.documentSet : this.documentSet,
                    h = e ? e.mutatedKeys : this.mutatedKeys,
                    l = c,
                    f = !1,
                    p = this.query.hasLimit() && c.size === this.query.limit ? c.last() : null; if (t.inorderTraversal(function(t, e) { var n = c.get(t),
                            r = e instanceof Eh ? e : null;
                        r && (Cc(t.isEqual(r.key), "Mismatching keys found in document changes: " + t + " != " + r.key), r = s.query.matches(r) ? r : null); var i = !!n && s.mutatedKeys.has(n.key),
                            o = !!r && (r.hasLocalMutations || s.mutatedKeys.has(r.key) && r.hasCommittedMutations),
                            a = !1;
                        n && r ? n.data.isEqual(r.data) ? i !== o && (u.track({ type: Hl.Metadata, doc: r }), a = !0) : s.shouldWaitForSyncedDocument(n, r) || (u.track({ type: Hl.Modified, doc: r }), a = !0, p && 0 < s.query.docComparator(r, p) && (f = !0)) : !n && r ? (u.track({ type: Hl.Added, doc: r }), a = !0) : n && !r && (u.track({ type: Hl.Removed, doc: n }), a = !0, p && (f = !0));
                        a && (h = r ? (l = l.add(r), o ? h.add(t) : h.delete(t)) : (l = l.delete(t), h.delete(t))) }), this.query.hasLimit())
                    for (; l.size > this.query.limit;) { var n = l.last();
                        l = l.delete(n.key), h = h.delete(n.key), u.track({ type: Hl.Removed, doc: n }) }
                return Cc(!f || !e, "View was refilled using docs that themselves needed refilling."), { documentSet: l, changeSet: u, needsRefill: f, mutatedKeys: h } }, t.prototype.shouldWaitForSyncedDocument = function(t, e) { return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations }, t.prototype.applyChanges = function(t, e, n) { var o = this;
                Cc(!t.needsRefill, "Cannot apply changes that need a refill"); var r = this.documentSet;
                this.documentSet = t.documentSet, this.mutatedKeys = t.mutatedKeys; var i = t.changeSet.getChanges();
                i.sort(function(t, e) { return n = t.type, r = e.type, (i = function(t) { switch (t) {
                            case Hl.Added:
                                return 1;
                            case Hl.Modified:
                            case Hl.Metadata:
                                return 2;
                            case Hl.Removed:
                                return 0;
                            default:
                                return Sc("Unknown ChangeType: " + t) } })(n) - i(r) || o.query.docComparator(t.doc, e.doc); var n, r, i }), this.applyTargetChange(n); var a = e ? this.updateLimboDocuments() : [],
                    s = 0 === this.limboDocuments.size && this.current ? Gl.Synced : Gl.Local,
                    u = s !== this.syncState; return this.syncState = s, 0 !== i.length || u ? { snapshot: new tf(this.query, t.documentSet, r, i, t.mutatedKeys, s === Gl.Local, u, !1), limboChanges: a } : { limboChanges: a } }, t.prototype.applyOnlineStateChange = function(t) { return this.current && t === gd.Offline ? (this.current = !1, this.applyChanges({ documentSet: this.documentSet, changeSet: new Zl, mutatedKeys: this.mutatedKeys, needsRefill: !1 }, !1)) : { limboChanges: [] } }, t.prototype.shouldBeInLimbo = function(t) { return !this._syncedDocuments.has(t) && (!!this.documentSet.has(t) && !this.documentSet.get(t).hasLocalMutations) }, t.prototype.applyTargetChange = function(t) { var e = this;
                t && (t.addedDocuments.forEach(function(t) { return e._syncedDocuments = e._syncedDocuments.add(t) }), t.modifiedDocuments.forEach(function(t) { return Cc(e._syncedDocuments.has(t), "Modified document " + t + " not found in view.") }), t.removedDocuments.forEach(function(t) { return e._syncedDocuments = e._syncedDocuments.delete(t) }), this.current = t.current) }, t.prototype.updateLimboDocuments = function() { var e = this; if (!this.current) return []; var n = this.limboDocuments;
                this.limboDocuments = Wl(), this.documentSet.forEach(function(t) { e.shouldBeInLimbo(t.key) && (e.limboDocuments = e.limboDocuments.add(t.key)) }); var r = []; return n.forEach(function(t) { e.limboDocuments.has(t) || r.push(new Md(t)) }), this.limboDocuments.forEach(function(t) { n.has(t) || r.push(new Pd(t)) }), r }, t.prototype.synchronizeWithPersistedState = function(t, e) { this._syncedDocuments = e, this.limboDocuments = Wl(); var n = this.computeDocChanges(t); return this.applyChanges(n, !0) }, t.prototype.computeInitialSnapshot = function() { return tf.fromInitialDocuments(this.query, this.documentSet, this.mutatedKeys, this.syncState === Gl.Local) }, t }(); var xd = "SyncEngine",
        Fd = function(t, e, n) { this.query = t, this.targetId = e, this.view = n },
        Ud = function(t) { this.key = t },
        qd = function() {
            function t(t, e, n, r) { this.localStore = t, this.remoteStore = e, this.sharedClientState = n, this.currentUser = r, this.syncEngineListener = null, this.queryViewsByQuery = new rp(function(t) { return t.canonicalId() }), this.queryViewsByTarget = {}, this.limboTargetsByKey = new Ch(_h.comparator), this.limboResolutionsByTarget = {}, this.limboDocumentRefs = new nd, this.mutationUserCallbacks = {}, this.limboTargetIdGenerator = Kf.forSyncEngine(), this.isPrimary = void 0, this.onlineState = gd.Unknown } return Object.defineProperty(t.prototype, "isPrimaryClient", { get: function() { return !0 === this.isPrimary }, enumerable: !0, configurable: !0 }), t.prototype.subscribe = function(t) { Cc(null !== t, "SyncEngine listener cannot be null"), Cc(null === this.syncEngineListener, "SyncEngine already has a subscriber."), this.syncEngineListener = t }, t.prototype.listen = function(a) { return un(this, void 0, void 0, function() { var e, n, r, i, o; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.assertSubscribed("listen()"), (r = this.queryViewsByQuery.get(a)) ? (e = r.targetId, this.sharedClientState.addLocalQueryTarget(e), n = r.view.computeInitialSnapshot(), [3, 4]) : [3, 1];
                            case 1:
                                return [4, this.localStore.allocateQuery(a)];
                            case 2:
                                return i = t.sent(), o = this.sharedClientState.addLocalQueryTarget(i.targetId), e = i.targetId, [4, this.initializeViewAndComputeSnapshot(i, "current" === o)];
                            case 3:
                                n = t.sent(), this.isPrimary && this.remoteStore.listen(i), t.label = 4;
                            case 4:
                                return this.syncEngineListener.onWatchChange([n]), [2, e] } }) }) }, t.prototype.initializeViewAndComputeSnapshot = function(s, u) { var c = this,
                    h = s.query; return this.localStore.executeQuery(h).then(function(a) { return c.localStore.remoteDocumentKeys(s.targetId).then(function(t) { var e = new Ld(h, t),
                            n = e.computeDocChanges(a),
                            r = nf.createSynthesizedTargetChangeForCurrentChange(s.targetId, u && c.onlineState !== gd.Offline),
                            i = e.applyChanges(n, !0 === c.isPrimary, r);
                        Cc(0 === i.limboChanges.length, "View returned limbo docs before target ack from the server."), Cc(!!i.snapshot, "applyChanges for new view should always return a snapshot"); var o = new Fd(h, s.targetId, e); return c.queryViewsByQuery.set(h, o), c.queryViewsByTarget[s.targetId] = o, i.snapshot }) }) }, t.prototype.synchronizeViewAndComputeSnapshot = function(i) { var t = this; return this.localStore.executeQuery(i.query).then(function(r) { return t.localStore.remoteDocumentKeys(i.targetId).then(function(n) { return un(t, void 0, void 0, function() { var e; return cn(this, function(t) { return e = i.view.synchronizeWithPersistedState(r, n), this.isPrimary && this.updateTrackedLimbos(i.targetId, e.limboChanges), [2, e] }) }) }) }) }, t.prototype.unlisten = function(r) { return un(this, void 0, void 0, function() { var e, n = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.assertSubscribed("unlisten()"), Cc(!!(e = this.queryViewsByQuery.get(r)), "Trying to unlisten on query not found:" + r), this.isPrimary ? (this.sharedClientState.removeLocalQueryTarget(e.targetId), this.sharedClientState.isActiveQueryTarget(e.targetId) ? [3, 2] : [4, this.localStore.releaseQuery(r, !1).then(function() { n.sharedClientState.clearQueryState(e.targetId), n.remoteStore.unlisten(e.targetId), n.removeAndCleanupQuery(e) }).catch(Xp)]) : [3, 3];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [3, 5];
                            case 3:
                                return this.removeAndCleanupQuery(e), [4, this.localStore.releaseQuery(r, !0)];
                            case 4:
                                t.sent(), t.label = 5;
                            case 5:
                                return [2] } }) }) }, t.prototype.write = function(t, e) { var n = this; return this.assertSubscribed("write()"), this.localStore.localWrite(t).then(function(t) { return n.sharedClientState.addPendingMutation(t.batchId), n.addMutationCallback(t.batchId, e), n.emitNewSnapsAndNotifyLocalStore(t.changes) }).then(function() { return n.remoteStore.fillWritePipeline() }) }, t.prototype.wrapUpdateFunctionError = function(t) { return t }, t.prototype.runTransaction = function(e, n) { var r = this;
                void 0 === n && (n = 5), Cc(0 <= n, "Got negative number of retries for transaction."); var i = this.remoteStore.createTransaction(); return function() { try { var t = e(i); return !Xh(t) && t.catch && t.then ? t.catch(function(t) { return Promise.reject(r.wrapUpdateFunctionError(t)) }) : Promise.reject(Error("Transaction callback must return a Promise")) } catch (t) { return Promise.reject(r.wrapUpdateFunctionError(t)) } }().then(function(t) { return i.commit().then(function() { return t }).catch(function(t) { return 0 === n ? Promise.reject(t) : r.runTransaction(e, n - 1) }) }) }, t.prototype.applyRemoteEvent = function(e) { var r = this; return this.assertSubscribed("applyRemoteEvent()"), this.localStore.applyRemoteEvent(e).then(function(t) { return Mc(e.targetChanges, function(t, e) { var n = r.limboResolutionsByTarget[t];
                        n && (Cc(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1, "Limbo resolution for single document contains multiple changes."), 0 < e.addedDocuments.size ? n.receivedDocument = !0 : 0 < e.modifiedDocuments.size ? Cc(n.receivedDocument, "Received change for limbo target document without add.") : 0 < e.removedDocuments.size && (Cc(n.receivedDocument, "Received remove for limbo target document without add."), n.receivedDocument = !1)) }), r.emitNewSnapsAndNotifyLocalStore(t, e) }).catch(Xp) }, t.prototype.applyOnlineStateChange = function(r, t) { if (this.isPrimary && t === bd.RemoteStore || !this.isPrimary && t === bd.SharedClientState) { var i = [];
                    this.queryViewsByQuery.forEach(function(t, e) { var n = e.view.applyOnlineStateChange(r);
                        Cc(0 === n.limboChanges.length, "OnlineState should not affect limbo documents."), n.snapshot && i.push(n.snapshot) }), this.syncEngineListener.onOnlineStateChange(r), this.syncEngineListener.onWatchChange(i), this.onlineState = r, this.isPrimary && this.sharedClientState.setOnlineState(r) } }, t.prototype.rejectListen = function(u, c) { return un(this, void 0, void 0, function() { var e, n, r, i, o, a, s = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.assertSubscribed("rejectListens()"), this.sharedClientState.updateQueryState(u, "rejected", c), e = this.limboResolutionsByTarget[u], (n = e && e.key) ? (this.limboTargetsByKey = this.limboTargetsByKey.remove(n), delete this.limboResolutionsByTarget[u], r = (r = new Ch(_h.comparator)).insert(n, new Th(n, ll.forDeletedDoc())), i = Wl().add(n), o = new ef(ll.MIN, {}, new yl(th), r, i), [2, this.applyRemoteEvent(o)]) : [3, 1];
                            case 1:
                                return Cc(!!(a = this.queryViewsByTarget[u]), "Unknown targetId: " + u), [4, this.localStore.releaseQuery(a.query, !1).then(function() { return s.removeAndCleanupQuery(a) }).catch(Xp)];
                            case 2:
                                t.sent(), this.syncEngineListener.onWatchError(a.query, c), t.label = 3;
                            case 3:
                                return [2] } }) }) }, t.prototype.applyBatchState = function(n, r, i) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return this.assertSubscribed("applyBatchState()"), [4, this.localStore.lookupMutationDocuments(n)];
                            case 1:
                                return null === (e = t.sent()) ? (wc(xd, "Cannot apply mutation batch with id: " + n), [2]) : "pending" !== r ? [3, 3] : [4, this.remoteStore.fillWritePipeline()];
                            case 2:
                                return t.sent(), [3, 4];
                            case 3:
                                "acknowledged" === r || "rejected" === r ? (this.processUserCallback(n, i || null), this.localStore.removeCachedMutationBatchMetadata(n)) : Sc("Unknown batchState: " + r), t.label = 4;
                            case 4:
                                return [4, this.emitNewSnapsAndNotifyLocalStore(e)];
                            case 5:
                                return t.sent(), [2] } }) }) }, t.prototype.applySuccessfulWrite = function(t) { var e = this;
                this.assertSubscribed("applySuccessfulWrite()"); var n = t.batch.batchId; return this.processUserCallback(n, null), this.localStore.acknowledgeBatch(t).then(function(t) { return e.sharedClientState.updateMutationState(n, "acknowledged"), e.emitNewSnapsAndNotifyLocalStore(t) }).catch(Xp) }, t.prototype.rejectFailedWrite = function(e, n) { var r = this; return this.assertSubscribed("rejectFailedWrite()"), this.processUserCallback(e, n), this.localStore.rejectBatch(e).then(function(t) { return r.sharedClientState.updateMutationState(e, "rejected", n), r.emitNewSnapsAndNotifyLocalStore(t) }).catch(Xp) }, t.prototype.addMutationCallback = function(t, e) { var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                n || (n = new Ch(th)), n = n.insert(t, e), this.mutationUserCallbacks[this.currentUser.toKey()] = n }, t.prototype.processUserCallback = function(t, e) { var n = this.mutationUserCallbacks[this.currentUser.toKey()]; if (n) { var r = n.get(t);
                    r && (Cc(t === n.minKey(), "Mutation callbacks processed out-of-order?"), e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.mutationUserCallbacks[this.currentUser.toKey()] = n } }, t.prototype.removeAndCleanupQuery = function(t) { var e = this; if (this.sharedClientState.removeLocalQueryTarget(t.targetId), this.queryViewsByQuery.delete(t.query), delete this.queryViewsByTarget[t.targetId], this.isPrimary) { var n = this.limboDocumentRefs.referencesForId(t.targetId);
                    this.limboDocumentRefs.removeReferencesForId(t.targetId), n.forEach(function(t) { e.limboDocumentRefs.containsKey(t) || e.removeLimboTarget(t) }) } }, t.prototype.removeLimboTarget = function(t) { var e = this.limboTargetsByKey.get(t);
                null !== e && (this.remoteStore.unlisten(e), this.limboTargetsByKey = this.limboTargetsByKey.remove(t), delete this.limboResolutionsByTarget[e]) }, t.prototype.updateTrackedLimbos = function(t, e) { for (var n = 0, r = e; n < r.length; n++) { var i = r[n]; if (i instanceof Pd) this.limboDocumentRefs.addReference(i.key, t), this.trackLimboChange(i);
                    else if (i instanceof Md) { wc(xd, "Document no longer in limbo: " + i.key), this.limboDocumentRefs.removeReference(i.key, t), this.limboDocumentRefs.containsKey(i.key) || this.removeLimboTarget(i.key) } else Sc("Unknown limbo change: " + JSON.stringify(i)) } }, t.prototype.trackLimboChange = function(t) { var e = t.key; if (!this.limboTargetsByKey.get(e)) { wc(xd, "New document in limbo: " + e); var n = this.limboTargetIdGenerator.next(),
                        r = tl.atPath(e.path);
                    this.limboResolutionsByTarget[n] = new Ud(e), this.remoteStore.listen(new dl(r, n, $h.LimboResolution, Df.INVALID)), this.limboTargetsByKey = this.limboTargetsByKey.insert(e, n) } }, t.prototype.currentLimboDocs = function() { return this.limboTargetsByKey }, t.prototype.emitNewSnapsAndNotifyLocalStore = function(n, u) { return un(this, void 0, void 0, function() { var o, a, e, s = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return o = [], a = [], e = [], this.queryViewsByQuery.forEach(function(t, i) { e.push(Promise.resolve().then(function() { var e = i.view.computeDocChanges(n); return e.needsRefill ? s.localStore.executeQuery(i.query).then(function(t) { return i.view.computeDocChanges(t, e) }) : e }).then(function(t) { var e = u && u.targetChanges[i.targetId],
                                            n = i.view.applyChanges(t, !0 === s.isPrimary, e); if (s.updateTrackedLimbos(i.targetId, n.limboChanges), n.snapshot) { s.isPrimary && s.sharedClientState.updateQueryState(i.targetId, n.snapshot.fromCache ? "not-current" : "current"), o.push(n.snapshot); var r = Od.fromSnapshot(i.targetId, n.snapshot);
                                            a.push(r) } })) }), [4, Promise.all(e)];
                            case 1:
                                return t.sent(), this.syncEngineListener.onWatchChange(o), [4, this.localStore.notifyLocalViewChanges(a)];
                            case 2:
                                return t.sent(), [2] } }) }) }, t.prototype.assertSubscribed = function(t) { Cc(null !== this.syncEngineListener, "Trying to call " + t + " before calling subscribe().") }, t.prototype.handleCredentialChange = function(r) { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return e = !this.currentUser.isEqual(r), this.currentUser = r, e ? [4, this.localStore.handleUserChange(r)] : [3, 3];
                            case 1:
                                return n = t.sent(), this.sharedClientState.handleUserChange(r, n.removedBatchIds, n.addedBatchIds), [4, this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)];
                            case 2:
                                t.sent(), t.label = 3;
                            case 3:
                                return [4, this.remoteStore.handleCredentialChange()];
                            case 4:
                                return t.sent(), [2] } }) }) }, t.prototype.applyPrimaryState = function(c) { return un(this, void 0, void 0, function() { var e, n, r, i, o, a, s, u = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return !0 !== c || !0 === this.isPrimary ? [3, 3] : (this.isPrimary = !0, [4, this.remoteStore.applyPrimaryState(!0)]);
                            case 1:
                                return t.sent(), e = this.sharedClientState.getAllActiveQueryTargets(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())];
                            case 2:
                                for (n = t.sent(), r = 0, i = n; r < i.length; r++) o = i[r], this.remoteStore.listen(o); return [3, 7];
                            case 3:
                                return !1 !== c || !1 === this.isPrimary ? [3, 7] : (this.isPrimary = !1, a = [], s = Promise.resolve(), Pc(this.queryViewsByTarget, function(t, e) { u.sharedClientState.isLocalQueryTarget(t) ? a.push(t) : s = s.then(function() { return u.unlisten(e.query) }), u.remoteStore.unlisten(e.targetId) }), [4, s]);
                            case 4:
                                return t.sent(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(a)];
                            case 5:
                                return t.sent(), this.resetLimboDocuments(), [4, this.remoteStore.applyPrimaryState(!1)];
                            case 6:
                                t.sent(), t.label = 7;
                            case 7:
                                return [2] } }) }) }, t.prototype.resetLimboDocuments = function() { var e = this;
                Pc(this.limboResolutionsByTarget, function(t) { e.remoteStore.unlisten(t) }), this.limboDocumentRefs.removeAllReferences(), this.limboResolutionsByTarget = [], this.limboTargetsByKey = new Ch(_h.comparator) }, t.prototype.synchronizeQueryViewsAndRaiseSnapshots = function(t) { for (var e = this, n = Promise.resolve(), a = [], s = [], r = function(o) { n = n.then(function() { return un(e, void 0, void 0, function() { var e, n, r, i; return cn(this, function(t) { switch (t.label) {
                                        case 0:
                                            return (n = this.queryViewsByTarget[o]) ? [4, this.localStore.releaseQuery(n.query, !0)] : [3, 4];
                                        case 1:
                                            return t.sent(), [4, this.localStore.allocateQuery(n.query)];
                                        case 2:
                                            return e = t.sent(), [4, this.synchronizeViewAndComputeSnapshot(n)];
                                        case 3:
                                            return (r = t.sent()).snapshot && s.push(r.snapshot), [3, 8];
                                        case 4:
                                            return Cc(!0 === this.isPrimary, "A secondary tab should never have an active query without an active view."), [4, this.localStore.getQueryForTarget(o)];
                                        case 5:
                                            return Cc(!!(i = t.sent()), "Query data for target " + o + " not found"), [4, this.localStore.allocateQuery(i)];
                                        case 6:
                                            return e = t.sent(), [4, this.initializeViewAndComputeSnapshot(e, !1)];
                                        case 7:
                                            t.sent(), t.label = 8;
                                        case 8:
                                            return a.push(e), [2] } }) }) }) }, i = 0, o = t; i < o.length; i++) { r(o[i]) } return n.then(function() { return e.syncEngineListener.onWatchChange(s), a }) }, t.prototype.getActiveClients = function() { return this.localStore.getActiveClients() }, t.prototype.applyTargetState = function(r, o, n) { return un(this, void 0, void 0, function() { var e, i = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                if (this.isPrimary) return wc(xd, "Ignoring unexpected query state notification."), [2]; if (!this.queryViewsByTarget[r]) return [3, 5]; switch (o) {
                                    case "current":
                                    case "not-current":
                                        return [3, 1];
                                    case "rejected":
                                        return [3, 2] } return [3, 4];
                            case 1:
                                return [2, this.localStore.getNewDocumentChanges().then(function(n) { return un(i, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                                                case 0:
                                                    return e = ef.createSynthesizedRemoteEventForCurrentChange(r, "current" === o), [4, this.emitNewSnapsAndNotifyLocalStore(n, e)];
                                                case 1:
                                                    return t.sent(), [2] } }) }) }, function(r) { return un(i, void 0, void 0, function() { var n; return cn(this, function(t) { switch (t.label) {
                                                case 0:
                                                    return (e = r).code !== Dc.DATA_LOSS || e.message !== op ? [3, 2] : (n = [], Pc(this.queryViewsByTarget, function(t) { return n.push(t) }), [4, this.synchronizeQueryViewsAndRaiseSnapshots(n)]);
                                                case 1:
                                                    return t.sent(), [3, 3];
                                                case 2:
                                                    throw r;
                                                case 3:
                                                    return [2] } var e }) }) })];
                            case 2:
                                return e = this.queryViewsByTarget[r], this.removeAndCleanupQuery(e), [4, this.localStore.releaseQuery(e.query, !0)];
                            case 3:
                                return t.sent(), this.syncEngineListener.onWatchError(e.query, n), [3, 5];
                            case 4:
                                Sc("Unexpected target state: " + o), t.label = 5;
                            case 5:
                                return [2] } }) }) }, t.prototype.applyActiveTargetsChange = function(l, f) { return un(this, void 0, void 0, function() { var e, n, r, i, o, a, s, u, c, h = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                if (!this.isPrimary) return [2];
                                e = 0, n = l, t.label = 1;
                            case 1:
                                return e < n.length ? (c = n[e], Cc(!this.queryViewsByTarget[c], "Trying to add an already active target"), [4, this.localStore.getQueryForTarget(c)]) : [3, 6];
                            case 2:
                                return Cc(!!(r = t.sent()), "Query data for active target " + c + " not found"), [4, this.localStore.allocateQuery(r)];
                            case 3:
                                return i = t.sent(), [4, this.initializeViewAndComputeSnapshot(i, !1)];
                            case 4:
                                t.sent(), this.remoteStore.listen(i), t.label = 5;
                            case 5:
                                return e++, [3, 1];
                            case 6:
                                o = function(e) { var n; return cn(this, function(t) { switch (t.label) {
                                            case 0:
                                                return (n = a.queryViewsByTarget[e]) ? [4, a.localStore.releaseQuery(n.query, !1).then(function() { h.remoteStore.unlisten(e), h.removeAndCleanupQuery(n) }).catch(Xp)] : [3, 2];
                                            case 1:
                                                t.sent(), t.label = 2;
                                            case 2:
                                                return [2] } }) }, a = this, s = 0, u = f, t.label = 7;
                            case 7:
                                return s < u.length ? (c = u[s], [5, o(c)]) : [3, 10];
                            case 8:
                                t.sent(), t.label = 9;
                            case 9:
                                return s++, [3, 7];
                            case 10:
                                return [2] } }) }) }, t.prototype.enableNetwork = function() { return this.localStore.setNetworkEnabled(!0), this.remoteStore.enableNetwork() }, t.prototype.disableNetwork = function() { return this.localStore.setNetworkEnabled(!1), this.remoteStore.disableNetwork() }, t.prototype.getRemoteKeysForTarget = function(t) { var e = this.limboResolutionsByTarget[t]; return e && e.receivedDocument ? Wl().add(e.key) : this.queryViewsByTarget[t] ? this.queryViewsByTarget[t].view.syncedDocuments : Wl() }, t }(),
        Vd = function() {
            function t(t) { this.uid = t } return t.prototype.isAuthenticated = function() { return null != this.uid }, t.prototype.toKey = function() { return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user" }, t.prototype.isEqual = function(t) { return t.uid === this.uid }, t.UNAUTHENTICATED = new t(null), t.GOOGLE_CREDENTIALS = new t("google-credentials-uid"), t.FIRST_PARTY = new t("first-party-uid"), t }(),
        Bd = "SharedClientState",
        jd = "firestore_clients",
        Wd = "firestore_mutations",
        Kd = "firestore_targets",
        Qd = function() {
            function a(t, e, n, r) { this.user = t, this.batchId = e, this.state = n, Cc(void 0 !== (this.error = r) == ("rejected" === n), "MutationMetadata must contain an error iff state is 'rejected'") } return a.fromWebStorageEntry = function(t, e, n) { var r = JSON.parse(n),
                    i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                    o = void 0; return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new Ac(r.error.code, r.error.message)), i ? new a(t, e, r.state, o) : (Ec(Bd, "Failed to parse mutation state for ID '" + e + "': " + n), null) }, a.prototype.toWebStorageJSON = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, a }(),
        Hd = function() {
            function o(t, e, n) { this.targetId = t, this.state = e, Cc(void 0 !== (this.error = n) == ("rejected" === e), "QueryTargetMetadata must contain an error iff state is 'rejected'") } return o.fromWebStorageEntry = function(t, e) { var n = JSON.parse(e),
                    r = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error),
                    i = void 0; return r && n.error && (r = "string" == typeof n.error.message && "string" == typeof n.error.code) && (i = new Ac(n.error.code, n.error.message)), r ? new o(t, n.state, i) : (Ec(Bd, "Failed to parse target state for ID '" + t + "': " + e), null) }, o.prototype.toWebStorageJSON = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, o }(),
        zd = function() {
            function a(t, e) { this.clientId = t, this.activeTargetIds = e } return a.fromWebStorageEntry = function(t, e) { for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = Ql(), o = 0; r && o < n.activeTargetIds.length; ++o) r = Jh(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]); return r ? new a(t, i) : (Ec(Bd, "Failed to parse client data for instance '" + t + "': " + e), null) }, a }(),
        Gd = function() {
            function n(t, e) { this.clientId = t, this.onlineState = e } return n.fromWebStorageEntry = function(t) { var e = JSON.parse(t); return "object" == typeof e && void 0 !== gd[e.onlineState] && "string" == typeof e.clientId ? new n(e.clientId, gd[e.onlineState]) : (Ec(Bd, "Failed to parse online state: " + t), null) }, n }(),
        Yd = function() {
            function t() { this.activeTargetIds = Ql() } return t.prototype.addQueryTarget = function(t) { Cc(!this.activeTargetIds.has(t), "Target with ID '" + t + "' already active."), this.activeTargetIds = this.activeTargetIds.add(t) }, t.prototype.removeQueryTarget = function(t) { this.activeTargetIds = this.activeTargetIds.delete(t) }, t.prototype.toWebStorageJSON = function() { var t = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() }; return JSON.stringify(t) }, t }(),
        Xd = function() {
            function a(t, e, n, r, i) { if (this.queue = t, this.platform = e, this.persistenceKey = n, this.localClientId = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.activeClients = {}, this.storageListener = this.handleWebStorageEvent.bind(this), this.started = !1, this.earlyEvents = [], !a.isAvailable(this.platform)) throw new Ac(Dc.UNIMPLEMENTED, "LocalStorage is not available on this platform."); var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                this.storage = this.platform.window.localStorage, this.currentUser = i, this.localClientStorageKey = this.toWebStorageClientStateKey(this.localClientId), this.sequenceNumberKey = "firestore_sequence_number_" + n, this.activeClients[this.localClientId] = new Yd, this.clientStateKeyRe = new RegExp("^" + jd + "_" + o + "_([^_]*)$"), this.mutationBatchKeyRe = new RegExp("^" + Wd + "_" + o + "_(\\d+)(?:_(.*))?$"), this.queryTargetKeyRe = new RegExp("^" + Kd + "_" + o + "_(\\d+)$"), this.onlineStateKey = "firestore_online_state_" + n, this.platform.window.addEventListener("storage", this.storageListener) } return a.isAvailable = function(t) { return !(!t.window || null == t.window.localStorage) }, a.prototype.start = function() { return un(this, void 0, void 0, function() { var e, n, r, i, o, a, s, u, c, h, l, f = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return Cc(!this.started, "WebStorageSharedClientState already started"), Cc(null !== this.syncEngine, "syncEngine property must be set before calling start()"), Cc(null !== this.onlineStateHandler, "onlineStateHandler property must be set before calling start()"), [4, this.syncEngine.getActiveClients()];
                            case 1:
                                for (e = t.sent(), n = 0, r = e; n < r.length; n++)(i = r[n]) !== this.localClientId && (o = this.getItem(this.toWebStorageClientStateKey(i))) && (a = zd.fromWebStorageEntry(i, o)) && (this.activeClients[a.clientId] = a); for (this.persistClientState(), (s = this.storage.getItem(this.onlineStateKey)) && (u = this.fromWebStorageOnlineState(s)) && this.handleOnlineStateEvent(u), c = 0, h = this.earlyEvents; c < h.length; c++) l = h[c], this.handleWebStorageEvent(l); return this.earlyEvents = [], this.platform.window.addEventListener("unload", function() { return f.shutdown() }), this.started = !0, [2] } }) }) }, a.prototype.writeSequenceNumber = function(t) { this.setItem(this.sequenceNumberKey, JSON.stringify(t)) }, a.prototype.getAllActiveQueryTargets = function() { var n = Ql(); return Mc(this.activeClients, function(t, e) { n = n.unionWith(e.activeTargetIds) }), n }, a.prototype.isActiveQueryTarget = function(t) { for (var e in this.activeClients)
                    if (this.activeClients.hasOwnProperty(e) && this.activeClients[e].activeTargetIds.has(t)) return !0;
                return !1 }, a.prototype.addPendingMutation = function(t) { this.persistMutationState(t, "pending") }, a.prototype.updateMutationState = function(t, e, n) { this.persistMutationState(t, e, n), this.removeMutationState(t) }, a.prototype.addLocalQueryTarget = function(t) { var e = "not-current"; if (this.isActiveQueryTarget(t)) { var n = this.storage.getItem(this.toWebStorageQueryTargetMetadataKey(t)); if (n) { var r = Hd.fromWebStorageEntry(t, n);
                        r && (e = r.state) } } return this.localClientState.addQueryTarget(t), this.persistClientState(), e }, a.prototype.removeLocalQueryTarget = function(t) { this.localClientState.removeQueryTarget(t), this.persistClientState() }, a.prototype.isLocalQueryTarget = function(t) { return this.localClientState.activeTargetIds.has(t) }, a.prototype.clearQueryState = function(t) { this.removeItem(this.toWebStorageQueryTargetMetadataKey(t)) }, a.prototype.updateQueryState = function(t, e, n) { this.persistQueryTargetState(t, e, n) }, a.prototype.handleUserChange = function(t, e, n) { var r = this;
                e.forEach(function(t) { r.removeMutationState(t) }), this.currentUser = t, n.forEach(function(t) { r.addPendingMutation(t) }) }, a.prototype.setOnlineState = function(t) { this.persistOnlineState(t) }, a.prototype.shutdown = function() { this.started && (this.platform.window.removeEventListener("storage", this.storageListener), this.removeItem(this.localClientStorageKey), this.started = !1) }, a.prototype.getItem = function(t) { var e = this.storage.getItem(t); return wc(Bd, "READ", t, e), e }, a.prototype.setItem = function(t, e) { wc(Bd, "SET", t, e), this.storage.setItem(t, e) }, a.prototype.removeItem = function(t) { wc(Bd, "REMOVE", t), this.storage.removeItem(t) }, a.prototype.handleWebStorageEvent = function(s) { var t = this; if (s.storageArea === this.storage) { if (wc(Bd, "EVENT", s.key, s.newValue), s.key === this.localClientStorageKey) return void Ec("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                    this.queue.enqueueAndForget(function() { return un(t, void 0, void 0, function() { var e, n, r, i, o, a; return cn(this, function(t) { if (!this.started) return this.earlyEvents.push(s), [2]; if (null === s.key) return [2]; if (this.clientStateKeyRe.test(s.key)) { if (null == s.newValue) return n = this.fromWebStorageClientStateKey(s.key), [2, this.handleClientStateEvent(n, null)]; if (e = this.fromWebStorageClientState(s.key, s.newValue)) return [2, this.handleClientStateEvent(e.clientId, e)] } else if (this.mutationBatchKeyRe.test(s.key)) { if (null !== s.newValue && (r = this.fromWebStorageMutationMetadata(s.key, s.newValue))) return [2, this.handleMutationBatchEvent(r)] } else if (this.queryTargetKeyRe.test(s.key)) { if (null !== s.newValue && (i = this.fromWebStorageQueryTargetMetadata(s.key, s.newValue))) return [2, this.handleQueryTargetEvent(i)] } else if (s.key === this.onlineStateKey) { if (null !== s.newValue && (o = this.fromWebStorageOnlineState(s.newValue))) return [2, this.handleOnlineStateEvent(o)] } else s.key === this.sequenceNumberKey && (Cc(!!this.sequenceNumberHandler, "Missing sequenceNumberHandler"), (a = function(t) { var e = Df.INVALID; if (null != t) try { var n = JSON.parse(t);
                                        Cc("number" == typeof n, "Found non-numeric sequence number"), e = n } catch (t) { Ec(Bd, "Failed to read sequence number from WebStorage", t) }
                                    return e }(s.newValue)) !== Df.INVALID && this.sequenceNumberHandler(a)); return [2] }) }) }) } }, Object.defineProperty(a.prototype, "localClientState", { get: function() { return this.activeClients[this.localClientId] }, enumerable: !0, configurable: !0 }), a.prototype.persistClientState = function() { this.setItem(this.localClientStorageKey, this.localClientState.toWebStorageJSON()) }, a.prototype.persistMutationState = function(t, e, n) { var r = new Qd(this.currentUser, t, e, n),
                    i = this.toWebStorageMutationBatchKey(t);
                this.setItem(i, r.toWebStorageJSON()) }, a.prototype.removeMutationState = function(t) { var e = this.toWebStorageMutationBatchKey(t);
                this.removeItem(e) }, a.prototype.persistOnlineState = function(t) { var e = { clientId: this.localClientId, onlineState: gd[t] };
                this.storage.setItem(this.onlineStateKey, JSON.stringify(e)) }, a.prototype.persistQueryTargetState = function(t, e, n) { var r = this.toWebStorageQueryTargetMetadataKey(t),
                    i = new Hd(t, e, n);
                this.setItem(r, i.toWebStorageJSON()) }, a.prototype.toWebStorageClientStateKey = function(t) { return Cc(-1 === t.indexOf("_"), "Client key cannot contain '_', but was '" + t + "'"), jd + "_" + this.persistenceKey + "_" + t }, a.prototype.toWebStorageQueryTargetMetadataKey = function(t) { return Kd + "_" + this.persistenceKey + "_" + t }, a.prototype.toWebStorageMutationBatchKey = function(t) { var e = Wd + "_" + this.persistenceKey + "_" + t; return this.currentUser.isAuthenticated() && (e += "_" + this.currentUser.uid), e }, a.prototype.fromWebStorageClientStateKey = function(t) { var e = this.clientStateKeyRe.exec(t); return e ? e[1] : null }, a.prototype.fromWebStorageClientState = function(t, e) { var n = this.fromWebStorageClientStateKey(t); return Cc(null !== n, "Cannot parse client state key '" + t + "'"), zd.fromWebStorageEntry(n, e) }, a.prototype.fromWebStorageMutationMetadata = function(t, e) { var n = this.mutationBatchKeyRe.exec(t);
                Cc(null !== n, "Cannot parse mutation batch key '" + t + "'"); var r = Number(n[1]),
                    i = void 0 !== n[2] ? n[2] : null; return Qd.fromWebStorageEntry(new Vd(i), r, e) }, a.prototype.fromWebStorageQueryTargetMetadata = function(t, e) { var n = this.queryTargetKeyRe.exec(t);
                Cc(null !== n, "Cannot parse query target key '" + t + "'"); var r = Number(n[1]); return Hd.fromWebStorageEntry(r, e) }, a.prototype.fromWebStorageOnlineState = function(t) { return Gd.fromWebStorageEntry(t) }, a.prototype.handleMutationBatchEvent = function(e) { return un(this, void 0, void 0, function() { return cn(this, function(t) { return e.user.uid !== this.currentUser.uid ? (wc(Bd, "Ignoring mutation for non-active user " + e.user.uid), [2]) : [2, this.syncEngine.applyBatchState(e.batchId, e.state, e.error)] }) }) }, a.prototype.handleQueryTargetEvent = function(t) { return this.syncEngine.applyTargetState(t.targetId, t.state, t.error) }, a.prototype.handleClientStateEvent = function(t, e) { var n = this,
                    r = this.getAllActiveQueryTargets();
                e ? this.activeClients[t] = e : delete this.activeClients[t]; var i = this.getAllActiveQueryTargets(),
                    o = [],
                    a = []; return i.forEach(function(e) { return un(n, void 0, void 0, function() { return cn(this, function(t) { return r.has(e) || o.push(e), [2] }) }) }), r.forEach(function(e) { return un(n, void 0, void 0, function() { return cn(this, function(t) { return i.has(e) || a.push(e), [2] }) }) }), this.syncEngine.applyActiveTargetsChange(o, a) }, a.prototype.handleOnlineStateEvent = function(t) { this.activeClients[t.clientId] && this.onlineStateHandler(t.onlineState) }, a }(); var Jd = function() {
            function t() { this.localState = new Yd, this.queryState = {}, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null } return t.prototype.addPendingMutation = function(t) {}, t.prototype.updateMutationState = function(t, e, n) {}, t.prototype.addLocalQueryTarget = function(t) { return this.localState.addQueryTarget(t), this.queryState[t] || "not-current" }, t.prototype.updateQueryState = function(t, e, n) { this.queryState[t] = e }, t.prototype.removeLocalQueryTarget = function(t) { this.localState.removeQueryTarget(t) }, t.prototype.isLocalQueryTarget = function(t) { return this.localState.activeTargetIds.has(t) }, t.prototype.clearQueryState = function(t) { delete this.queryState[t] }, t.prototype.getAllActiveQueryTargets = function() { return this.localState.activeTargetIds }, t.prototype.isActiveQueryTarget = function(t) { return this.localState.activeTargetIds.has(t) }, t.prototype.start = function() { return this.localState = new Yd, Promise.resolve() }, t.prototype.handleUserChange = function(t, e, n) {}, t.prototype.setOnlineState = function(t) {}, t.prototype.shutdown = function() {}, t.prototype.writeSequenceNumber = function(t) {}, t }(),
        $d = "FirestoreClient",
        Zd = function() {
            function t(t, e) { this.cacheSizeBytes = t, this.experimentalTabSynchronization = e } return t.prototype.lruParams = function() { return jp.withCacheSize(this.cacheSizeBytes) }, t }(),
        ty = function() {},
        ey = function() {
            function t(t, e, n, r) { this.platform = t, this.databaseInfo = e, this.credentials = n, this.asyncQueue = r, this.clientId = Zc.newId() } return t.prototype.start = function(t) { var n = this,
                    r = new Af,
                    i = new Af,
                    o = !1; return this.credentials.setChangeListener(function(e) { o ? n.asyncQueue.enqueueAndForget(function() { return n.handleCredentialChange(e) }) : (o = !0, n.initializePersistence(t, i, e).then(function(t) { return n.initializeRest(e, t) }).then(r.resolve, r.reject)) }), this.asyncQueue.enqueueAndForget(function() { return r.promise }), i.promise }, t.prototype.enableNetwork = function() { var t = this; return this.asyncQueue.enqueue(function() { return t.syncEngine.enableNetwork() }) }, t.prototype.initializePersistence = function(t, e, n) { var r = this; return t instanceof Zd ? this.startIndexedDbPersistence(n, t).then(function(t) { return e.resolve(), t }).catch(function(t) { if (e.reject(t), !r.canFallback(t)) throw t; return console.warn("Error enabling offline storage. Falling back to storage disabled: " + t), r.startMemoryPersistence() }) : (e.resolve(), this.startMemoryPersistence()) }, t.prototype.canFallback = function(t) { return t instanceof Ac ? t.code === Dc.FAILED_PRECONDITION || t.code === Dc.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code) }, t.prototype.startIndexedDbPersistence = function(r, i) { var t = this,
                    o = Yp.buildStoragePrefix(this.databaseInfo),
                    a = new vf(this.databaseInfo.databaseId, { useProto3Json: !0 }); return Promise.resolve().then(function() { return un(t, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                                case 0:
                                    if (i.experimentalTabSynchronization && !Xd.isAvailable(this.platform)) throw new Ac(Dc.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage."); return n = i.lruParams(), i.experimentalTabSynchronization ? (this.sharedClientState = new Xd(this.asyncQueue, this.platform, o, this.clientId, r), [4, Yp.createMultiClientIndexedDbPersistence(o, this.clientId, this.platform, this.asyncQueue, a, n, { sequenceNumberSyncer: this.sharedClientState })]) : [3, 2];
                                case 1:
                                    return e = t.sent(), [3, 4];
                                case 2:
                                    return this.sharedClientState = new Jd, [4, Yp.createIndexedDbPersistence(o, this.clientId, this.platform, this.asyncQueue, a, n)];
                                case 3:
                                    e = t.sent(), t.label = 4;
                                case 4:
                                    return [2, (this.persistence = e).referenceDelegate.garbageCollector] } }) }) }) }, t.prototype.startMemoryPersistence = function() { return this.persistence = ld.createEagerPersistence(this.clientId), this.sharedClientState = new Jd, Promise.resolve(null) }, t.prototype.initializeRest = function(s, u) { var t = this; return wc($d, "Initializing. user=", s.uid), this.platform.loadConnection(this.databaseInfo).then(function(a) { return un(t, void 0, void 0, function() { var e, n, r, i, o = this; return cn(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.localStore = new id(this.persistence, s), u && (this.lruScheduler = new Wp(u, this.asyncQueue, this.localStore)), e = this.platform.newSerializer(this.databaseInfo.databaseId), n = new Sd(this.asyncQueue, a, this.credentials, e), r = function(t) { return o.syncEngine.applyOnlineStateChange(t, bd.RemoteStore) }, i = function(t) { return o.syncEngine.applyOnlineStateChange(t, bd.SharedClientState) }, this.remoteStore = new Dd(this.localStore, n, this.asyncQueue, r), this.syncEngine = new qd(this.localStore, this.remoteStore, this.sharedClientState, s), this.sharedClientState.onlineStateHandler = i, this.remoteStore.syncEngine = this.syncEngine, this.sharedClientState.syncEngine = this.syncEngine, this.eventMgr = new kd(this.syncEngine), [4, this.sharedClientState.start()];
                                case 1:
                                    return t.sent(), [4, this.remoteStore.start()];
                                case 2:
                                    return t.sent(), [4, this.persistence.setPrimaryStateListener(function(e) { return un(o, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                                                    case 0:
                                                        return [4, this.syncEngine.applyPrimaryState(e)];
                                                    case 1:
                                                        return t.sent(), this.lruScheduler && (e && !this.lruScheduler.started ? this.lruScheduler.start() : e || this.lruScheduler.stop()), [2] } }) }) })];
                                case 3:
                                    return t.sent(), [2] } }) }) }) }, t.prototype.handleCredentialChange = function(t) { return this.asyncQueue.verifyOperationInProgress(), wc($d, "Credential Changed. Current user: " + t.uid), this.syncEngine.handleCredentialChange(t) }, t.prototype.disableNetwork = function() { var t = this; return this.asyncQueue.enqueue(function() { return t.syncEngine.disableNetwork() }) }, t.prototype.shutdown = function(e) { var t = this; return this.asyncQueue.enqueue(function() { return un(t, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.lruScheduler && this.lruScheduler.stop(), [4, this.remoteStore.shutdown()];
                                case 1:
                                    return t.sent(), [4, this.sharedClientState.shutdown()];
                                case 2:
                                    return t.sent(), [4, this.persistence.shutdown(e && e.purgePersistenceWithDataLoss)];
                                case 3:
                                    return t.sent(), this.credentials.removeChangeListener(), [2] } }) }) }) }, t.prototype.listen = function(t, e, n) { var r = this,
                    i = new Rd(t, e, n); return this.asyncQueue.enqueueAndForget(function() { return r.eventMgr.listen(i) }), i }, t.prototype.unlisten = function(t) { var e = this;
                this.asyncQueue.enqueueAndForget(function() { return e.eventMgr.unlisten(t) }) }, t.prototype.getDocumentFromLocalCache = function(t) { var e = this; return this.asyncQueue.enqueue(function() { return e.localStore.readDocument(t) }).then(function(t) { if (t instanceof Eh) return t; if (t instanceof Th) return null; throw new Ac(Dc.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)") }) }, t.prototype.getDocumentsFromLocalCache = function(i) { var t = this; return this.asyncQueue.enqueue(function() { return t.localStore.executeQuery(i) }).then(function(t) { var e = Wl(),
                        n = new Ld(i, e),
                        r = n.computeDocChanges(t); return n.applyChanges(r, !1).snapshot }) }, t.prototype.write = function(t) { var e = this,
                    n = new Af; return this.asyncQueue.enqueueAndForget(function() { return e.syncEngine.write(t, n) }), n.promise }, t.prototype.databaseId = function() { return this.databaseInfo.databaseId }, t.prototype.transaction = function(t) { var e = this; return this.asyncQueue.enqueue(function() { return un(e, void 0, void 0, function() { return cn(this, function(t) { return [2] }) }) }).then(function() { return e.syncEngine.runTransaction(t) }) }, t }(),
        ny = function() {
            function t(t) { this.observer = t, this.muted = !1 } return t.prototype.next = function(t) { this.scheduleEvent(this.observer.next, t) }, t.prototype.error = function(t) { this.scheduleEvent(this.observer.error, t) }, t.prototype.mute = function() { this.muted = !0 }, t.prototype.scheduleEvent = function(t, e) { var n = this;
                this.muted || setTimeout(function() { n.muted || t(e) }, 0) }, t }(),
        ry = function() {
            function e() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];! function(t, e, n, r) { if (!(e instanceof Array) || e.length < r) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " argument to be an array with at least " + $c(r, "element") + ".") }("FieldPath", t, "fieldNames", 1); for (var n = 0; n < t.length; ++n)
                    if (qc("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                this._internalPath = new bh(t) } return e.documentId = function() { return e._DOCUMENT_ID }, e.prototype.isEqual = function(t) { if (!(t instanceof e)) throw Xc("isEqual", "FieldPath", 1, t); return this._internalPath.isEqual(t._internalPath) }, e._DOCUMENT_ID = new e(bh.keyField().canonicalString()), e }(),
        iy = new RegExp("[~\\*/\\[\\]]"); var oy = function(t, e) { this.user = e, this.type = "OAuth", this.authHeaders = { Authorization: "Bearer " + t } },
        ay = function() {
            function t() { this.changeListener = null } return t.prototype.getToken = function() { return Promise.resolve(null) }, t.prototype.invalidateToken = function() {}, t.prototype.setChangeListener = function(t) { Cc(!this.changeListener, "Can only call setChangeListener() once."), (this.changeListener = t)(Vd.UNAUTHENTICATED) }, t.prototype.removeChangeListener = function() { Cc(null !== this.changeListener, "removeChangeListener() when no listener registered"), this.changeListener = null }, t }(),
        sy = function() {
            function t(t) { var e = this;
                this.app = t, this.tokenListener = null, this.tokenCounter = 0, this.changeListener = null, this.forceRefresh = !1, this.tokenListener = function() { e.tokenCounter++, e.currentUser = e.getUser(), e.changeListener && e.changeListener(e.currentUser) }, this.tokenCounter = 0, this.app.INTERNAL.addAuthTokenListener(this.tokenListener) } return t.prototype.getToken = function() { var e = this;
                Cc(null != this.tokenListener, "getToken cannot be called after listener removed."); var n = this.tokenCounter,
                    t = this.forceRefresh; return this.forceRefresh = !1, this.app.INTERNAL.getToken(t).then(function(t) { if (e.tokenCounter !== n) throw new Ac(Dc.ABORTED, "getToken aborted due to token change."); return t ? (Cc("string" == typeof t.accessToken, "Invalid tokenData returned from getToken():" + t), new oy(t.accessToken, e.currentUser)) : null }) }, t.prototype.invalidateToken = function() { this.forceRefresh = !0 }, t.prototype.setChangeListener = function(t) { Cc(!this.changeListener, "Can only call setChangeListener() once."), this.changeListener = t, this.currentUser && t(this.currentUser) }, t.prototype.removeChangeListener = function() { Cc(null != this.tokenListener, "removeChangeListener() called twice"), Cc(null !== this.changeListener, "removeChangeListener() called when no listener registered"), this.app.INTERNAL.removeAuthTokenListener(this.tokenListener), this.tokenListener = null, this.changeListener = null }, t.prototype.getUser = function() { var t = this.app.INTERNAL.getUid(); return Cc(null === t || "string" == typeof t, "Received invalid UID: " + t), new Vd(t) }, t }(),
        uy = function() {
            function t(t, e) { this.gapi = t, this.sessionIndex = e, this.type = "FirstParty", this.user = Vd.FIRST_PARTY, Cc(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface") } return Object.defineProperty(t.prototype, "authHeaders", { get: function() { return { Authorization: this.gapi.auth.getAuthHeaderValueForFirstParty([]), "X-Goog-AuthUser": this.sessionIndex } }, enumerable: !0, configurable: !0 }), t }(),
        cy = function() {
            function t(t, e) { this.gapi = t, this.sessionIndex = e, Cc(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface") } return t.prototype.getToken = function() { return Promise.resolve(new uy(this.gapi, this.sessionIndex)) }, t.prototype.setChangeListener = function(t) { t(Vd.FIRST_PARTY) }, t.prototype.removeChangeListener = function() {}, t.prototype.invalidateToken = function() {}, t }();

    function hy(t) { return function(t, e) { if ("object" != typeof t || null === t) return !1; for (var n = t, r = 0, i = e; r < i.length; r++) { var o = i[r]; if (o in n && "function" == typeof n[o]) return !0 } return !1 }(t, ["next", "error", "complete"]) } var ly, fy, py = function() {
            function t(t) { this._methodName = t } return t.delete = function() { return dy.instance }, t.serverTimestamp = function() { return yy.instance }, t.arrayUnion = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return Fc("FieldValue.arrayUnion", arguments, 1), new my(t) }, t.arrayRemove = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return Fc("FieldValue.arrayRemove", arguments, 1), new gy(t) }, t.prototype.isEqual = function(t) { return this === t }, t }(),
        dy = function(t) {
            function e() { return t.call(this, "FieldValue.delete") || this } return an(e, t), e.instance = new e, e }(py),
        yy = function(t) {
            function e() { return t.call(this, "FieldValue.serverTimestamp") || this } return an(e, t), e.instance = new e, e }(py),
        my = function(n) {
            function t(t) { var e = n.call(this, "FieldValue.arrayUnion") || this; return e._elements = t, e } return an(t, n), t }(py),
        gy = function(n) {
            function t(t) { var e = n.call(this, "FieldValue.arrayRemove") || this; return e._elements = t, e } return an(t, n), t }(py),
        vy = kc(py, "Use FieldValue.<field>() instead."),
        by = /^__.*__$/,
        _y = function() {
            function t(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n } return t.prototype.toMutations = function(t, e) { var n = []; return null !== this.fieldMask ? n.push(new Tl(t, this.data, this.fieldMask, e)) : n.push(new El(t, this.data, e)), 0 < this.fieldTransforms.length && n.push(new Sl(t, this.fieldTransforms)), n }, t }(),
        wy = function() {
            function t(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n } return t.prototype.toMutations = function(t, e) { var n = [new Tl(t, this.data, this.fieldMask, e)]; return 0 < this.fieldTransforms.length && n.push(new Sl(t, this.fieldTransforms)), n }, t }();

    function Ey(t) { switch (t) {
            case ly.Set:
            case ly.MergeSet:
            case ly.Update:
                return !0;
            case ly.Argument:
                return !1;
            default:
                throw Sc("Unexpected case for UserDataSource: " + t) } }(fy = ly || (ly = {}))[fy.Set = 0] = "Set", fy[fy.Update = 1] = "Update", fy[fy.MergeSet = 2] = "MergeSet", fy[fy.Argument = 3] = "Argument"; var Ty = function() {
            function r(t, e, n, r, i, o) { this.dataSource = t, this.methodName = e, this.path = n, this.arrayElement = r, void 0 === i && this.validatePath(), this.arrayElement = void 0 !== r && r, this.fieldTransforms = i || [], this.fieldMask = o || [] } return r.prototype.childContextForField = function(t) { var e = null == this.path ? null : this.path.child(t),
                    n = new r(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask); return n.validatePathSegment(t), n }, r.prototype.childContextForFieldPath = function(t) { var e = null == this.path ? null : this.path.child(t),
                    n = new r(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask); return n.validatePath(), n }, r.prototype.childContextForArray = function(t) { return new r(this.dataSource, this.methodName, null, !0, this.fieldTransforms, this.fieldMask) }, r.prototype.createError = function(t) { var e = null === this.path || this.path.isEmpty() ? "" : " (found in field " + this.path.toString() + ")"; return new Ac(Dc.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e) }, r.prototype.contains = function(e) { return void 0 !== this.fieldMask.find(function(t) { return e.isPrefixOf(t) }) || void 0 !== this.fieldTransforms.find(function(t) { return e.isPrefixOf(t.field) }) }, r.prototype.validatePath = function() { if (null !== this.path)
                    for (var t = 0; t < this.path.length; t++) this.validatePathSegment(this.path.get(t)) }, r.prototype.validatePathSegment = function(t) { if (Ey(this.dataSource) && by.test(t)) throw this.createError("Document fields cannot begin and end with __") }, r }(),
        Sy = function(t, e) { this.databaseId = t, this.key = e },
        Cy = function() {
            function t(t) { this.preConverter = t } return t.prototype.parseSetData = function(t, e) { var n = new Ty(ly.Set, t, bh.EMPTY_PATH);
                Ny("Data must be an object, but it was:", n, e); var r = this.parseData(e, n); return new _y(r, null, n.fieldTransforms) }, t.prototype.parseMergeData = function(t, e, n) { var r = new Ty(ly.MergeSet, t, bh.EMPTY_PATH);
                Ny("Data must be an object, but it was:", r, e); var i, o, a = this.parseData(e, r); if (n) { for (var s = new yl(bh.comparator), u = 0, c = n; u < c.length; u++) { var h = c[u],
                            l = void 0; if (h instanceof ry) l = h._internalPath;
                        else { if ("string" != typeof h) throw Sc("Expected stringOrFieldPath to be a string or a FieldPath");
                            l = Ay(t, h) } if (!r.contains(l)) throw new Ac(Dc.INVALID_ARGUMENT, "Field '" + l + "' is specified in your field mask but missing from your input data.");
                        s = s.add(l) }
                    i = gl.fromSet(s), o = r.fieldTransforms.filter(function(t) { return i.covers(t.field) }) } else i = gl.fromArray(r.fieldMask), o = r.fieldTransforms; return new _y(a, i, o) }, t.prototype.parseUpdateData = function(o, t) { var a = this,
                    s = new Ty(ly.Update, o, bh.EMPTY_PATH);
                Ny("Data must be an object, but it was:", s, t); var u = new yl(bh.comparator),
                    c = Kh.EMPTY;
                Mc(t, function(t, e) { var n = Ay(o, t),
                        r = s.childContextForFieldPath(n); if ((e = a.runPreConverter(e, r)) instanceof dy) u = u.add(n);
                    else { var i = a.parseData(e, r);
                        null != i && (u = u.add(n), c = c.set(n, i)) } }); var e = gl.fromSet(u); return new wy(c, e, s.fieldTransforms) }, t.prototype.parseUpdateVarargs = function(t, e, n, r) { var i = new Ty(ly.Update, t, bh.EMPTY_PATH),
                    o = [Dy(t, e)],
                    a = [n]; if (r.length % 2 != 0) throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values."); for (var s = 0; s < r.length; s += 2) o.push(Dy(t, r[s])), a.push(r[s + 1]); var u = new yl(bh.comparator),
                    c = Kh.EMPTY; for (s = 0; s < o.length; ++s) { var h = o[s],
                        l = i.childContextForFieldPath(h),
                        f = this.runPreConverter(a[s], l); if (f instanceof dy) u = u.add(h);
                    else { var p = this.parseData(f, l);
                        null != p && (u = u.add(h), c = c.set(h, p)) } } var d = gl.fromSet(u); return new wy(c, d, i.fieldTransforms) }, t.prototype.parseQueryValue = function(t, e) { var n = new Ty(ly.Argument, t, bh.EMPTY_PATH),
                    r = this.parseData(e, n); return Cc(null != r, "Parsed data should not be null."), Cc(0 === n.fieldTransforms.length, "Field transforms should have been disallowed."), r }, t.prototype.runPreConverter = function(t, e) { try { return this.preConverter(t) } catch (t) { var n = ky(t); throw e.createError(n) } }, t.prototype.parseData = function(t, e) { if (Iy(t = this.runPreConverter(t, e))) return Ny("Unsupported field value:", e, t), this.parseObject(t, e); if (t instanceof py) return this.parseSentinelFieldValue(t, e), null; if (e.path && e.fieldMask.push(e.path), t instanceof Array) { if (e.arrayElement) throw e.createError("Nested arrays are not supported"); return this.parseArray(t, e) } return this.parseScalarValue(t, e) }, t.prototype.parseObject = function(t, r) { var i = this,
                    o = new Ch(th); return Lc(t) ? r.path && 0 < r.path.length && r.fieldMask.push(r.path) : Mc(t, function(t, e) { var n = i.parseData(e, r.childContextForField(t));
                    null != n && (o = o.insert(t, n)) }), new Kh(o) }, t.prototype.parseArray = function(t, e) { for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) { var a = o[i],
                        s = this.parseData(a, e.childContextForArray(r));
                    null == s && (s = Rh.INSTANCE), n.push(s), r++ } return new Qh(n) }, t.prototype.parseSentinelFieldValue = function(t, e) { if (!Ey(e.dataSource)) throw e.createError(t._methodName + "() can only be used with update() and set()"); if (null === e.path) throw e.createError(t._methodName + "() is not currently supported inside arrays"); if (t instanceof dy) { if (e.dataSource !== ly.MergeSet) throw e.dataSource === ly.Update ? (Cc(0 < e.path.length, "FieldValue.delete() at the top level should have already been handled."), e.createError("FieldValue.delete() can only appear at the top level of your update data")) : e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                    e.fieldMask.push(e.path) } else if (t instanceof yy) e.fieldTransforms.push(new vl(e.path, Il.instance));
                else if (t instanceof my) { var n = this.parseArrayTransformElements(t._methodName, t._elements),
                        r = new Nl(n);
                    e.fieldTransforms.push(new vl(e.path, r)) } else if (t instanceof gy) { n = this.parseArrayTransformElements(t._methodName, t._elements); var i = new Dl(n);
                    e.fieldTransforms.push(new vl(e.path, i)) } else Sc("Unknown FieldValue type: " + t) }, t.prototype.parseScalarValue = function(t, e) { if (null === t) return Rh.INSTANCE; if ("number" == typeof t) return Jh(t) ? new xh(t) : new Fh(t); if ("boolean" == typeof t) return Oh.of(t); if ("string" == typeof t) return new Uh(t); if (t instanceof Date) return new qh(lh.fromDate(t)); if (t instanceof lh) return new qh(new lh(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))); if (t instanceof hh) return new Wh(t); if (t instanceof uh) return new Bh(t); if (t instanceof Sy) return new jh(t.databaseId, t.key); throw e.createError("Unsupported field value: " + zc(t)) }, t.prototype.parseArrayTransformElements = function(r, t) { var i = this; return t.map(function(t, e) { var n = new Ty(ly.Argument, r, bh.EMPTY_PATH); return i.parseData(t, n.childContextForArray(e)) }) }, t }();

    function Iy(t) { return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof lh || t instanceof hh || t instanceof uh || t instanceof Sy || t instanceof py) }

    function Ny(t, e, n) { if (!Iy(n) || !Hc(n)) { var r = zc(n); throw "an object" === r ? e.createError(t + " a custom object") : e.createError(t + " " + r) } }

    function Dy(t, e) { if (e instanceof ry) return e._internalPath; if ("string" == typeof e) return Ay(t, e); throw new Ac(Dc.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.") }

    function Ay(e, t) { try { return function(e) { if (0 <= e.search(iy)) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'"); try { return new(ry.bind.apply(ry, [void 0].concat(e.split(".")))) } catch (t) { throw new Ac(Dc.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'") } }(t)._internalPath } catch (t) { var n = ky(t); throw new Ac(Dc.INVALID_ARGUMENT, "Function " + e + "() called with invalid data. " + n) } }

    function ky(t) { return t instanceof Error ? t.message : t.toString() } var Ry = jp.COLLECTION_DISABLED,
        Oy = function() {
            function t(t) { if (void 0 === t.host) { if (void 0 !== t.ssl) throw new Ac(Dc.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                    this.host = "firestore.googleapis.com", this.ssl = !0 } else Bc("settings", "non-empty string", "host", t.host), this.host = t.host, jc("settings", "boolean", "ssl", t.ssl), this.ssl = Oc(t.ssl, !0); if (Yc("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes"]), jc("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, jc("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), !0 === t.timestampsInSnapshots ? Ec("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && Ec("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), this.timestampsInSnapshots = Oc(t.timestampsInSnapshots, !0), jc("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = jp.DEFAULT_CACHE_SIZE_BYTES;
                else { if (t.cacheSizeBytes !== Ry && t.cacheSizeBytes < jp.MINIMUM_CACHE_SIZE_BYTES) throw new Ac(Dc.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + jp.MINIMUM_CACHE_SIZE_BYTES);
                    this.cacheSizeBytes = t.cacheSizeBytes } } return t.prototype.isEqual = function(t) { return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes }, t }(),
        Py = function() {},
        My = function() {
            function o(t) { var n = this;
                this._queue = new Rf, this.INTERNAL = { delete: function(e) { return un(n, void 0, void 0, function() { return cn(this, function(t) { return this._firestoreClient ? [2, this._firestoreClient.shutdown(e)] : [2] }) }) } }; var e = new Py; if ("object" == typeof t.options) { var r = t;
                    e.firebaseApp = r, e.databaseId = o.databaseIdFromApp(r), e.persistenceKey = e.firebaseApp.name, e.credentials = new sy(r) } else { var i = t; if (!i.projectId) throw new Ac(Dc.INVALID_ARGUMENT, "Must provide projectId");
                    e.databaseId = new dh(i.projectId, i.database), e.persistenceKey = "[DEFAULT]", e.credentials = new ay }
                e.settings = new Oy({}), this._config = e, this._databaseId = e.databaseId } return o.prototype.settings = function(t) { if (xc("Firestore.settings", arguments, 1), qc("Firestore.settings", "object", 1, t), Rc(t, "persistence")) throw new Ac(Dc.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().'); var e = new Oy(t); if (this._firestoreClient && !this._config.settings.isEqual(e)) throw new Ac(Dc.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                void 0 !== (this._config.settings = e).credentials && (this._config.credentials = function(t) { if (!t) return new ay; switch (t.type) {
                        case "gapi":
                            return new cy(t.client, t.sessionIndex || "0");
                        case "provider":
                            return t.client;
                        default:
                            throw new Ac(Dc.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type") } }(e.credentials)) }, o.prototype.enableNetwork = function() { return this.ensureClientConfigured(), this._firestoreClient.enableNetwork() }, o.prototype.disableNetwork = function() { return this.ensureClientConfigured(), this._firestoreClient.disableNetwork() }, o.prototype.enablePersistence = function(t) { if (this._firestoreClient) throw new Ac(Dc.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object."); return this.configureClient(new Zd(this._config.settings.cacheSizeBytes, void 0 !== t && Oc(t.experimentalTabSynchronization, !1))) }, o.prototype.ensureClientConfigured = function() { return this._firestoreClient || this.configureClient(new ty), this._firestoreClient }, o.prototype.configureClient = function(t) { var r = this;
                Cc(!!this._config.settings.host, "FirestoreSettings.host cannot be falsey"), Cc(!this._firestoreClient, "configureClient() called multiple times"); var e = new fh(this._config.databaseId, this._config.persistenceKey, this._config.settings.host, this._config.settings.ssl); return this._dataConverter = new Cy(function(t) { if (t instanceof Fy) { var e = r._config.databaseId,
                            n = t.firestore._config.databaseId; if (!n.isEqual(e)) throw new Ac(Dc.INVALID_ARGUMENT, "Document reference is for database " + n.projectId + "/" + n.database + " but should be for database " + e.projectId + "/" + e.database); return new Sy(r._config.databaseId, t._key) } return t }), this._firestoreClient = new ey(Ic.getPlatform(), e, this._config.credentials, this._queue), this._firestoreClient.start(t) }, o.databaseIdFromApp = function(t) { var e = t.options; if (!Rc(e, "projectId")) throw new Ac(Dc.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.'); var n = e.projectId; if (!n || "string" != typeof n) throw new Ac(Dc.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options"); return new dh(n) }, Object.defineProperty(o.prototype, "app", { get: function() { if (!this._config.firebaseApp) throw new Ac(Dc.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available"); return this._config.firebaseApp }, enumerable: !0, configurable: !0 }), o.prototype.collection = function(t) { if (xc("Firestore.collection", arguments, 1), qc("Firestore.collection", "non-empty string", 1, t), !t) throw new Ac(Dc.INVALID_ARGUMENT, "Must provide a non-empty collection path to collection()"); return this.ensureClientConfigured(), new Wy(gh.fromString(t), this) }, o.prototype.doc = function(t) { if (xc("Firestore.doc", arguments, 1), qc("Firestore.doc", "non-empty string", 1, t), !t) throw new Ac(Dc.INVALID_ARGUMENT, "Must provide a non-empty document path to doc()"); return this.ensureClientConfigured(), Fy.forPath(gh.fromString(t), this) }, o.prototype.runTransaction = function(e) { var n = this; return xc("Firestore.runTransaction", arguments, 1), qc("Firestore.runTransaction", "function", 1, e), this.ensureClientConfigured().transaction(function(t) { return e(new Ly(n, t)) }) }, o.prototype.batch = function() { return this.ensureClientConfigured(), new xy(this) }, Object.defineProperty(o, "logLevel", { get: function() { switch (bc()) {
                        case cc.DEBUG:
                            return "debug";
                        case cc.ERROR:
                            return "error";
                        case cc.SILENT:
                            return "silent";
                        default:
                            return Sc("Unknown log level: " + bc()) } }, enumerable: !0, configurable: !0 }), o.setLogLevel = function(t) { switch (xc("Firestore.setLogLevel", arguments, 1), qc("Firestore.setLogLevel", "non-empty string", 1, t), t) {
                    case "debug":
                        _c(cc.DEBUG); break;
                    case "error":
                        _c(cc.ERROR); break;
                    case "silent":
                        _c(cc.SILENT); break;
                    default:
                        throw new Ac(Dc.INVALID_ARGUMENT, "Invalid log level: " + t) } }, o.prototype._areTimestampsInSnapshotsEnabled = function() { return this._config.settings.timestampsInSnapshots }, o }(),
        Ly = function() {
            function t(t, e) { this._firestore = t, this._transaction = e } return t.prototype.get = function(t) { var n = this;
                xc("Transaction.get", arguments, 1); var r = zy("Transaction.get", t, this._firestore); return this._transaction.lookup([r._key]).then(function(t) { if (!t || 1 !== t.length) return Sc("Mismatch in docs returned from document lookup."); var e = t[0]; if (e instanceof Th) return new qy(n._firestore, r._key, null, !1, !1); if (e instanceof Eh) return new qy(n._firestore, r._key, e, !1, !1); throw Sc("BatchGetDocumentsRequest returned unexpected document type: " + e.constructor.name) }) }, t.prototype.set = function(t, e, n) { Uc("Transaction.set", arguments, 2, 3); var r = zy("Transaction.set", t, this._firestore),
                    i = (n = Ky("Transaction.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("Transaction.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("Transaction.set", e); return this._transaction.set(r._key, i), this }, t.prototype.update = function(t, e, n) { for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a]; return i = "string" == typeof e || e instanceof ry ? (Fc("Transaction.update", arguments, 3), r = zy("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("Transaction.update", e, n, o)) : (xc("Transaction.update", arguments, 2), r = zy("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("Transaction.update", e)), this._transaction.update(r._key, i), this }, t.prototype.delete = function(t) { xc("Transaction.delete", arguments, 1); var e = zy("Transaction.delete", t, this._firestore); return this._transaction.delete(e._key), this }, t }(),
        xy = function() {
            function t(t) { this._firestore = t, this._mutations = [], this._committed = !1 } return t.prototype.set = function(t, e, n) { Uc("WriteBatch.set", arguments, 2, 3), this.verifyNotCommitted(); var r = zy("WriteBatch.set", t, this._firestore),
                    i = (n = Ky("WriteBatch.set", n)).merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData("WriteBatch.set", e, n.mergeFields) : this._firestore._dataConverter.parseSetData("WriteBatch.set", e); return this._mutations = this._mutations.concat(i.toMutations(r._key, _l.NONE)), this }, t.prototype.update = function(t, e, n) { for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a]; return this.verifyNotCommitted(), i = "string" == typeof e || e instanceof ry ? (Fc("WriteBatch.update", arguments, 3), r = zy("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update", e, n, o)) : (xc("WriteBatch.update", arguments, 2), r = zy("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("WriteBatch.update", e)), this._mutations = this._mutations.concat(i.toMutations(r._key, _l.exists(!0))), this }, t.prototype.delete = function(t) { xc("WriteBatch.delete", arguments, 1), this.verifyNotCommitted(); var e = zy("WriteBatch.delete", t, this._firestore); return this._mutations = this._mutations.concat(new Cl(e._key, _l.NONE)), this }, t.prototype.commit = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { return this.verifyNotCommitted(), this._committed = !0, 0 < this._mutations.length ? [2, this._firestore.ensureClientConfigured().write(this._mutations)] : [2] }) }) }, t.prototype.verifyNotCommitted = function() { if (this._committed) throw new Ac(Dc.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.") }, t }(),
        Fy = function() {
            function n(t, e) { this._key = t, this.firestore = e, this._firestoreClient = this.firestore.ensureClientConfigured() } return n.forPath = function(t, e) { if (t.length % 2 != 0) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length); return new n(new _h(t), e) }, Object.defineProperty(n.prototype, "id", { get: function() { return this._key.path.lastSegment() }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "parent", { get: function() { return new Wy(this._key.path.popLast(), this.firestore) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "path", { get: function() { return this._key.path.canonicalString() }, enumerable: !0, configurable: !0 }), n.prototype.collection = function(t) { if (xc("DocumentReference.collection", arguments, 1), qc("DocumentReference.collection", "non-empty string", 1, t), !t) throw new Ac(Dc.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()"); var e = gh.fromString(t); return new Wy(this._key.path.child(e), this.firestore) }, n.prototype.isEqual = function(t) { if (!(t instanceof n)) throw Xc("isEqual", "DocumentReference", 1, t); return this.firestore === t.firestore && this._key.isEqual(t._key) }, n.prototype.set = function(t, e) { Uc("DocumentReference.set", arguments, 1, 2); var n = (e = Ky("DocumentReference.set", e)).merge || e.mergeFields ? this.firestore._dataConverter.parseMergeData("DocumentReference.set", t, e.mergeFields) : this.firestore._dataConverter.parseSetData("DocumentReference.set", t); return this._firestoreClient.write(n.toMutations(this._key, _l.NONE)) }, n.prototype.update = function(t, e) { for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return n = "string" == typeof t || t instanceof ry ? (Fc("DocumentReference.update", arguments, 2), this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update", t, e, r)) : (xc("DocumentReference.update", arguments, 1), this.firestore._dataConverter.parseUpdateData("DocumentReference.update", t)), this._firestoreClient.write(n.toMutations(this._key, _l.exists(!0))) }, n.prototype.delete = function() { return xc("DocumentReference.delete", arguments, 0), this._firestoreClient.write([new Cl(this._key, _l.NONE)]) }, n.prototype.onSnapshot = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                Uc("DocumentReference.onSnapshot", arguments, 1, 4); var n, r = { includeMetadataChanges: !1 },
                    i = 0; "object" != typeof t[i] || hy(t[i]) || (Yc("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), jc("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++); var o = { includeMetadataChanges: r.includeMetadataChanges }; return n = hy(t[i]) ? t[i] : (qc("DocumentReference.onSnapshot", "function", i, t[i]), Vc("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), Vc("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), { next: t[i], error: t[i + 1], complete: t[i + 2] }), this.onSnapshotInternal(o, n) }, n.prototype.onSnapshotInternal = function(t, n) { var r = this,
                    e = function(t) { console.error("Uncaught Error in onSnapshot:", t) };
                n.error && (e = n.error.bind(n)); var i = new ny({ next: function(t) { if (n.next) { Cc(t.docs.size <= 1, "Too many documents returned on a document query"); var e = t.docs.get(r._key);
                                n.next(new qy(r.firestore, r._key, e, t.fromCache, t.hasPendingWrites)) } }, error: e }),
                    o = this._firestoreClient.listen(tl.atPath(this._key.path), i, t); return function() { i.mute(), r._firestoreClient.unlisten(o) } }, n.prototype.get = function(n) { var r = this; return Uc("DocumentReference.get", arguments, 0, 1), Hy("DocumentReference.get", n), new Promise(function(e, t) { n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentFromLocalCache(r._key).then(function(t) { e(new qy(r.firestore, r._key, t, !0, t instanceof Eh && t.hasLocalMutations)) }, t) : r.getViaSnapshotListener(e, t, n) }) }, n.prototype.getViaSnapshotListener = function(e, n, r) { var i = this.onSnapshotInternal({ includeMetadataChanges: !0, waitForSyncWhenOnline: !0 }, { next: function(t) { i(), !t.exists && t.metadata.fromCache ? n(new Ac(Dc.UNAVAILABLE, "Failed to get document because the client is offline.")) : t.exists && t.metadata.fromCache && r && "server" === r.source ? n(new Ac(Dc.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : e(t) }, error: n }) }, n }(),
        Uy = function() {
            function t(t, e) { this.hasPendingWrites = t, this.fromCache = e } return t.prototype.isEqual = function(t) { return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache }, t }(),
        qy = function() {
            function e(t, e, n, r, i) { this._firestore = t, this._key = e, this._document = n, this._fromCache = r, this._hasPendingWrites = i } return e.prototype.data = function(t) { return Uc("DocumentSnapshot.data", arguments, 0, 1), t = Qy("DocumentSnapshot.data", t), this._document ? this.convertObject(this._document.data, Ah.fromSnapshotOptions(t, this._firestore._areTimestampsInSnapshotsEnabled())) : void 0 }, e.prototype.get = function(t, e) { if (Uc("DocumentSnapshot.get", arguments, 1, 2), e = Qy("DocumentSnapshot.get", e), this._document) { var n = this._document.data.field(Dy("DocumentSnapshot.get", t)); if (void 0 !== n) return this.convertValue(n, Ah.fromSnapshotOptions(e, this._firestore._areTimestampsInSnapshotsEnabled())) } }, Object.defineProperty(e.prototype, "id", { get: function() { return this._key.path.lastSegment() }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "ref", { get: function() { return new Fy(this._key, this._firestore) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "exists", { get: function() { return null !== this._document }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "metadata", { get: function() { return new Uy(this._hasPendingWrites, this._fromCache) }, enumerable: !0, configurable: !0 }), e.prototype.isEqual = function(t) { if (!(t instanceof e)) throw Xc("isEqual", "DocumentSnapshot", 1, t); return this._firestore === t._firestore && this._fromCache === t._fromCache && this._key.isEqual(t._key) && (null === this._document ? null === t._document : this._document.isEqual(t._document)) }, e.prototype.convertObject = function(t, n) { var r = this,
                    i = {}; return t.forEach(function(t, e) { i[t] = r.convertValue(e, n) }), i }, e.prototype.convertValue = function(t, e) { if (t instanceof Kh) return this.convertObject(t, e); if (t instanceof Qh) return this.convertArray(t, e); if (t instanceof jh) { var n = t.value(e),
                        r = this._firestore.ensureClientConfigured().databaseId(); return t.databaseId.isEqual(r) || Ec("Document " + this._key.path + " contains a document reference within a different database (" + t.databaseId.projectId + "/" + t.databaseId.database + ") which is not supported. It will be treated as a reference in the current database (" + r.projectId + "/" + r.database + ") instead."), new Fy(n, this._firestore) } return t.value(e) }, e.prototype.convertArray = function(t, e) { var n = this; return t.internalValue.map(function(t) { return n.convertValue(t, e) }) }, e }(),
        Vy = function(o) {
            function t(t, e, n, r, i) { return o.call(this, t, e, n, r, i) || this } return an(t, o), t.prototype.data = function(t) { var e = o.prototype.data.call(this, t); return Cc("object" == typeof e, "Document in a QueryDocumentSnapshot should exist"), e }, t }(qy),
        By = function() {
            function c(t, e) { this._query = t, this.firestore = e } return c.prototype.where = function(t, e, n) { var r;
                xc("Query.where", arguments, 3), qc("Query.where", "non-empty string", 2, e), Gc("Query.where", 3, n); var i = Dy("Query.where", t),
                    o = nl.fromString(e); if (i.isKeyField()) { if (o === nl.ARRAY_CONTAINS) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid Query. You can't perform array-contains queries on FieldPath.documentId() since document IDs are not arrays."); if ("string" == typeof n) { if (-1 !== n.indexOf("/")) throw new Ac(Dc.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it contains a slash."); if ("" === n) throw new Ac(Dc.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it was an empty string."); var a = this._query.path.child(new gh([n]));
                        Cc(a.length % 2 == 0, "Path should be a document key"), r = new jh(this.firestore._databaseId, new _h(a)) } else { if (!(n instanceof Fy)) throw new Ac(Dc.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a string or a DocumentReference if the first parameter is FieldPath.documentId(), but it was: " + zc(n) + "."); var s = n;
                        r = new jh(this.firestore._databaseId, s._key) } } else r = this.firestore._dataConverter.parseQueryValue("Query.where", n); var u = el.create(i, o, r); return this.validateNewFilter(u), new c(this._query.addFilter(u), this.firestore) }, c.prototype.orderBy = function(t, e) { var n; if (Uc("Query.orderBy", arguments, 1, 2), Vc("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e) n = al.ASCENDING;
                else { if ("desc" !== e) throw new Ac(Dc.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
                    n = al.DESCENDING } if (null !== this._query.startAt) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy()."); if (null !== this._query.endAt) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy()."); var r = Dy("Query.orderBy", t),
                    i = new ul(r, n); return this.validateNewOrderBy(i), new c(this._query.addOrderBy(i), this.firestore) }, c.prototype.limit = function(t) { if (xc("Query.limit", arguments, 1), qc("Query.limit", "number", 1, t), t <= 0) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid Query. Query limit (" + t + ") is invalid. Limit must be positive."); return new c(this._query.withLimit(t), this.firestore) }, c.prototype.startAt = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                Fc("Query.startAt", arguments, 1); var r = this.boundFromDocOrFields("Query.startAt", t, e, !0); return new c(this._query.withStartAt(r), this.firestore) }, c.prototype.startAfter = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                Fc("Query.startAfter", arguments, 1); var r = this.boundFromDocOrFields("Query.startAfter", t, e, !1); return new c(this._query.withStartAt(r), this.firestore) }, c.prototype.endBefore = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                Fc("Query.endBefore", arguments, 1); var r = this.boundFromDocOrFields("Query.endBefore", t, e, !0); return new c(this._query.withEndAt(r), this.firestore) }, c.prototype.endAt = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                Fc("Query.endAt", arguments, 1); var r = this.boundFromDocOrFields("Query.endAt", t, e, !1); return new c(this._query.withEndAt(r), this.firestore) }, c.prototype.isEqual = function(t) { if (!(t instanceof c)) throw Xc("isEqual", "Query", 1, t); return this.firestore === t.firestore && this._query.isEqual(t._query) }, c.prototype.boundFromDocOrFields = function(t, e, n, r) { if (Gc(t, 1, e), e instanceof qy) { if (0 < n.length) throw new Ac(Dc.INVALID_ARGUMENT, "Too many arguments provided to " + t + "()."); var i = e; if (!i.exists) throw new Ac(Dc.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "()."); return this.boundFromDocument(t, i._document, r) } var o = [e].concat(n); return this.boundFromFields(t, o, r) }, c.prototype.boundFromDocument = function(t, e, n) { for (var r = [], i = 0, o = this._query.orderBy; i < o.length; i++) { var a = o[i]; if (a.field.isKeyField()) r.push(new jh(this.firestore._databaseId, e.key));
                    else { var s = e.field(a.field); if (s instanceof Vh) throw new Ac(Dc.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'); if (void 0 === s) { var u = a.field.canonicalString(); throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.") }
                        r.push(s) } } return new sl(r, n) }, c.prototype.boundFromFields = function(t, e, n) { var r = this._query.explicitOrderBy; if (e.length > r.length) throw new Ac(Dc.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses"); for (var i = [], o = 0; o < e.length; o++) { var a = e[o]; if (r[o].field.isKeyField()) { if ("string" != typeof a) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof a); if (-1 !== a.indexOf("/")) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. Document ID '" + a + "' contains a slash in " + t + "()"); var s = new _h(this._query.path.child(a));
                        i.push(new jh(this.firestore._databaseId, s)) } else { var u = this.firestore._dataConverter.parseQueryValue(t, a);
                        i.push(u) } } return new sl(i, n) }, c.prototype.onSnapshot = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                Uc("Query.onSnapshot", arguments, 1, 4); var n, r = {},
                    i = 0; return "object" != typeof t[i] || hy(t[i]) || (Yc("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), jc("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), n = hy(t[i]) ? t[i] : (qc("Query.onSnapshot", "function", i, t[i]), Vc("Query.onSnapshot", "function", i + 1, t[i + 1]), Vc("Query.onSnapshot", "function", i + 2, t[i + 2]), { next: t[i], error: t[i + 1], complete: t[i + 2] }), this.onSnapshotInternal(r, n) }, c.prototype.onSnapshotInternal = function(t, e) { var n = this,
                    r = function(t) { console.error("Uncaught Error in onSnapshot:", t) };
                e.error && (r = e.error.bind(e)); var i = new ny({ next: function(t) { e.next && e.next(new jy(n.firestore, n._query, t)) }, error: r }),
                    o = this.firestore.ensureClientConfigured(),
                    a = o.listen(this._query, i, t); return function() { i.mute(), o.unlisten(a) } }, c.prototype.get = function(n) { var r = this; return Uc("Query.get", arguments, 0, 1), Hy("Query.get", n), new Promise(function(e, t) { n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentsFromLocalCache(r._query).then(function(t) { e(new jy(r.firestore, r._query, t)) }, t) : r.getViaSnapshotListener(e, t, n) }) }, c.prototype.getViaSnapshotListener = function(e, n, r) { var i = this.onSnapshotInternal({ includeMetadataChanges: !0, waitForSyncWhenOnline: !0 }, { next: function(t) { i(), t.metadata.fromCache && r && "server" === r.source ? n(new Ac(Dc.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : e(t) }, error: n }) }, c.prototype.validateNewFilter = function(t) { if (t instanceof rl)
                    if (t.isInequality()) { var e = this._query.getInequalityFilterField(); if (null !== e && !e.isEqual(t.field)) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + e.toString() + "' and '" + t.field.toString() + "'"); var n = this._query.getFirstOrderByField();
                        null !== n && this.validateOrderByAndInequalityMatch(t.field, n) } else if (t.op === nl.ARRAY_CONTAINS && this._query.hasArrayContainsFilter()) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. Queries only support a single array-contains filter.") }, c.prototype.validateNewOrderBy = function(t) { if (null === this._query.getFirstOrderByField()) { var e = this._query.getInequalityFilterField();
                    null !== e && this.validateOrderByAndInequalityMatch(e, t.field) } }, c.prototype.validateOrderByAndInequalityMatch = function(t, e) { if (!e.isEqual(t)) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.") }, c }(),
        jy = function() {
            function e(t, e, n) { this._firestore = t, this._originalQuery = e, this._snapshot = n, this._cachedChanges = null, this._cachedChangesIncludeMetadataChanges = null, this.metadata = new Uy(n.hasPendingWrites, n.fromCache) } return Object.defineProperty(e.prototype, "docs", { get: function() { var e = []; return this.forEach(function(t) { return e.push(t) }), e }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "empty", { get: function() { return this._snapshot.docs.isEmpty() }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "size", { get: function() { return this._snapshot.docs.size }, enumerable: !0, configurable: !0 }), e.prototype.forEach = function(e, n) { var r = this;
                Uc("QuerySnapshot.forEach", arguments, 1, 2), qc("QuerySnapshot.forEach", "function", 1, e), this._snapshot.docs.forEach(function(t) { e.call(n, r.convertToDocumentImpl(t)) }) }, Object.defineProperty(e.prototype, "query", { get: function() { return new By(this._originalQuery, this._firestore) }, enumerable: !0, configurable: !0 }), e.prototype.docChanges = function(t) { t && (Yc("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), jc("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges)); var e = !(!t || !t.includeMetadataChanges); if (e && this._snapshot.excludesMetadataChanges) throw new Ac(Dc.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."); return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(i, e, o) {
                    { if (o.oldDocs.isEmpty()) { var n, r = 0; return o.docChanges.map(function(t) { var e = new Vy(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key)); return Cc(t.type === Hl.Added, "Invalid event type for first snapshot"), Cc(!n || o.query.docComparator(n, t.doc) < 0, "Got added events in wrong order"), n = t.doc, { type: "added", doc: e, oldIndex: -1, newIndex: r++ } }) } var a = o.oldDocs; return o.docChanges.filter(function(t) { return e || t.type !== Hl.Metadata }).map(function(t) { var e = new Vy(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key)),
                                n = -1,
                                r = -1; return t.type !== Hl.Added && (Cc(0 <= (n = a.indexOf(t.doc.key)), "Index for document not found"), a = a.delete(t.doc.key)), t.type !== Hl.Removed && (a = a.add(t.doc), r = a.indexOf(t.doc.key)), { type: function(t) { switch (t) {
                                        case Hl.Added:
                                            return "added";
                                        case Hl.Modified:
                                        case Hl.Metadata:
                                            return "modified";
                                        case Hl.Removed:
                                            return "removed";
                                        default:
                                            return Sc("Unknown change type: " + t) } }(t.type), doc: e, oldIndex: n, newIndex: r } }) } }(this._firestore, e, this._snapshot), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges }, e.prototype.isEqual = function(t) { if (!(t instanceof e)) throw Xc("isEqual", "QuerySnapshot", 1, t); return this._firestore === t._firestore && this._originalQuery.isEqual(t._originalQuery) && this._snapshot.isEqual(t._snapshot) }, e.prototype.convertToDocumentImpl = function(t) { return new Vy(this._firestore, t.key, t, this.metadata.fromCache, this._snapshot.mutatedKeys.has(t.key)) }, e }();
    ["length", "forEach", "map"].concat("undefined" != typeof Symbol ? [Symbol.iterator] : []).forEach(function(t) { try { Object.defineProperty(jy.prototype.docChanges, t, { get: function() { return function() { throw new Ac(Dc.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"') }() } }) } catch (t) {} }); var Wy = function(r) {
        function t(t, e) { var n = r.call(this, tl.atPath(t), e) || this; if (t.length % 2 != 1) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.canonicalString() + " has " + t.length); return n } return an(t, r), Object.defineProperty(t.prototype, "id", { get: function() { return this._query.path.lastSegment() }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parent", { get: function() { var t = this._query.path.popLast(); return t.isEmpty() ? null : new Fy(new _h(t), this.firestore) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "path", { get: function() { return this._query.path.canonicalString() }, enumerable: !0, configurable: !0 }), t.prototype.doc = function(t) { if (Uc("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = Zc.newId()), qc("CollectionReference.doc", "non-empty string", 1, t), "" === t) throw new Ac(Dc.INVALID_ARGUMENT, "Document path must be a non-empty string"); var e = gh.fromString(t); return Fy.forPath(this._query.path.child(e), this.firestore) }, t.prototype.add = function(t) { xc("CollectionReference.add", arguments, 1), qc("CollectionReference.add", "object", 1, t); var e = this.doc(); return e.set(t).then(function() { return e }) }, t }(By);

    function Ky(t, e) { if (void 0 === e) return { merge: !1 }; if (Yc(t, e, ["merge", "mergeFields"]), jc(t, "boolean", "merge", e.merge), Wc(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function(t) { return "string" == typeof t || t instanceof ry }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new Ac(Dc.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".'); return e }

    function Qy(t, e) { return void 0 === e ? {} : (Yc(t, e, ["serverTimestamps"]), Kc(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e) }

    function Hy(t, e) { Vc(t, "object", 1, e), e && (Yc(t, e, ["source"]), Kc(t, 0, "source", e.source, ["default", "server", "cache"])) }

    function zy(t, e, n) { if (e instanceof Fy) { if (e.firestore !== n) throw new Ac(Dc.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance."); return e } throw Xc(t, "DocumentReference", 1, e) } var Gy = kc(My, "Use firebase.firestore() instead."),
        Yy = kc(Ly, "Use firebase.firestore().runTransaction() instead."),
        Xy = kc(xy, "Use firebase.firestore().batch() instead."),
        Jy = kc(Fy, "Use firebase.firestore().doc() instead."),
        $y = kc(qy),
        Zy = kc(Vy),
        tm = kc(By),
        em = kc(jy),
        nm = kc(Wy, "Use firebase.firestore().collection() instead."),
        rm = { Firestore: Gy, GeoPoint: hh, Timestamp: lh, Blob: ch, Transaction: Yy, WriteBatch: Xy, DocumentReference: Jy, DocumentSnapshot: $y, Query: tm, QueryDocumentSnapshot: Zy, QuerySnapshot: em, CollectionReference: nm, FieldPath: ry, FieldValue: vy, setLogLevel: My.setLogLevel, CACHE_SIZE_UNLIMITED: Ry };

    function im(t) { t.INTERNAL.registerService("firestore", function(t) { return new My(t) }, function(t) { Cc(t && "object" == typeof t, "shallowCopy() expects object parameter."); var e = {}; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }(rm)) }
    im(Mh); var om = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" },
        am = function(i) {
            function o(t, e, n) { var r = i.call(this, e) || this; return Object.setPrototypeOf(r, o.prototype), r.code = t, r.details = n, r } return an(o, i), o }(Error); var sm = function() {
        function t(t) { this.app = t } return t.prototype.getAuthToken = function() { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]), [4, this.app.INTERNAL.getToken()];
                        case 1:
                            return (e = t.sent()) ? [2, e.accessToken] : [2, void 0];
                        case 2:
                            return t.sent(), [2, void 0];
                        case 3:
                            return [2] } }) }) }, t.prototype.getInstanceIdToken = function() { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return t.trys.push([0, 2, , 3]), this.app.messaging ? [4, this.app.messaging().getToken()] : [2, void 0];
                        case 1:
                            return (e = t.sent()) ? [2, e] : [2, void 0];
                        case 2:
                            return t.sent(), [2, void 0];
                        case 3:
                            return [2] } }) }) }, t.prototype.getContext = function() { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return [4, this.getAuthToken()];
                        case 1:
                            return e = t.sent(), [4, this.getInstanceIdToken()];
                        case 2:
                            return n = t.sent(), [2, { authToken: e, instanceIdToken: n }] } }) }) }, t }();

    function um(t, e) { var n = {}; for (var r in t) t.hasOwnProperty(r) && (n[r] = e(t[r])); return n } var cm = function() {
        function t() {} return t.prototype.encode = function(t) { var e = this; if (null == t) return null; if (t instanceof Number && (t = t.valueOf()), "number" == typeof t && isFinite(t)) return t; if (!0 === t || !1 === t) return t; if ("[object String]" === Object.prototype.toString.call(t)) return t; if (Array.isArray(t)) return t.map(function(t) { return e.encode(t) }); if ("function" == typeof t || "object" == typeof t) return um(t, function(t) { return e.encode(t) }); throw new Error("Data cannot be encoded in JSON: " + t) }, t.prototype.decode = function(t) { var e = this; if (null === t) return t; if (t["@type"]) switch (t["@type"]) {
                case "type.googleapis.com/google.protobuf.Int64Value":
                case "type.googleapis.com/google.protobuf.UInt64Value":
                    var n = parseFloat(t.value); if (isNaN(n)) throw new Error("Data cannot be decoded from JSON: " + t); return n;
                default:
                    throw new Error("Data cannot be decoded from JSON: " + t) }
            return Array.isArray(t) ? t.map(function(t) { return e.decode(t) }) : "function" == typeof t || "object" == typeof t ? um(t, function(t) { return e.decode(t) }) : t }, t }(); var hm, lm, fm = function() {
        function t(t, e) { void 0 === e && (e = "us-central1"), this.app_ = t, this.region_ = e, this.serializer = new cm, this.emulatorOrigin = null, this.contextProvider = new sm(t) } return Object.defineProperty(t.prototype, "app", { get: function() { return this.app_ }, enumerable: !0, configurable: !0 }), t.prototype._url = function(t) { var e = this.app_.options.projectId,
                n = this.region_; return null === this.emulatorOrigin ? "https://" + n + "-" + e + ".cloudfunctions.net/" + t : this.emulatorOrigin + "/" + e + "/" + n + "/" + t }, t.prototype.useFunctionsEmulator = function(t) { this.emulatorOrigin = t }, t.prototype.httpsCallable = function(e, n) { var r = this; return function(t) { return r.call(e, t, n || {}) } }, t.prototype.postJSON = function(r, i, o) { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            o.append("Content-Type", "application/json"), t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, fetch(r, { method: "POST", body: JSON.stringify(i), headers: o })];
                        case 2:
                            return e = t.sent(), [3, 4];
                        case 3:
                            return t.sent(), [2, { status: 0, json: null }];
                        case 4:
                            n = null, t.label = 5;
                        case 5:
                            return t.trys.push([5, 7, , 8]), [4, e.json()];
                        case 6:
                            return n = t.sent(), [3, 8];
                        case 7:
                            return t.sent(), [3, 8];
                        case 8:
                            return [2, { status: e.status, json: n }] } }) }) }, t.prototype.call = function(h, l, f) { return un(this, void 0, void 0, function() { var e, r, i, o, a, s, u, c; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return e = this._url(h), l = this.serializer.encode(l), r = { data: l }, i = new Headers, [4, this.contextProvider.getContext()];
                        case 1:
                            return (o = t.sent()).authToken && i.append("Authorization", "Bearer " + o.authToken), o.instanceIdToken && i.append("Firebase-Instance-ID-Token", o.instanceIdToken), a = f.timeout || 7e4, [4, Promise.race([this.postJSON(e, r, i), (n = a, new Promise(function(t, e) { setTimeout(function() { e(new am("deadline-exceeded", "deadline-exceeded")) }, n) }))])];
                        case 2:
                            if (s = t.sent(), u = function(t, e, n) { var r = function(t) { if (200 <= t && t < 300) return "ok"; switch (t) {
                                                case 0:
                                                    return "internal";
                                                case 400:
                                                    return "invalid-argument";
                                                case 401:
                                                    return "unauthenticated";
                                                case 403:
                                                    return "permission-denied";
                                                case 404:
                                                    return "not-found";
                                                case 409:
                                                    return "aborted";
                                                case 429:
                                                    return "resource-exhausted";
                                                case 499:
                                                    return "cancelled";
                                                case 500:
                                                    return "internal";
                                                case 501:
                                                    return "unimplemented";
                                                case 503:
                                                    return "unavailable";
                                                case 504:
                                                    return "deadline-exceeded" } return "unknown" }(t),
                                        i = r,
                                        o = void 0; try { var a = e.error; if (a) { var s = a.status; if ("string" == typeof s) { if (!om[s]) return new am("internal", "internal");
                                                r = om[s] }
                                            i = s; var u = a.message; "string" == typeof u && (i = u), void 0 !== (o = a.details) && (o = n.decode(o)) } } catch (t) {} return "ok" === r ? null : new am(r, i, o) }(s.status, s.json, this.serializer)) throw u; if (!s.json) throw new am("internal", "Response is not valid JSON object."); if (void 0 === (c = s.json.data) && (c = s.json.result), void 0 === c) throw new am("internal", "Response is missing data field."); return [2, { data: this.serializer.decode(c) }] } var n }) }) }, t }();

    function pm(t, e, n) { return new fm(t, n) }
    hm = { Functions: fm }, Mh.INTERNAL.registerService("functions", pm, hm, void 0, !0); var dm, ym, mm, gm, vm = "only-available-in-window",
        bm = "only-available-in-sw",
        _m = "should-be-overriden",
        wm = "bad-sender-id",
        Em = "incorrect-gcm-sender-id",
        Tm = "permission-default",
        Sm = "permission-blocked",
        Cm = "unsupported-browser",
        Im = "notifications-blocked",
        Nm = "failed-serviceworker-registration",
        Dm = "sw-registration-expected",
        Am = "get-subscription-failed",
        km = "invalid-saved-token",
        Rm = "sw-reg-redundant",
        Om = "token-subscribe-failed",
        Pm = "token-subscribe-no-token",
        Mm = "token-subscribe-no-push-set",
        Lm = "token-unsubscribe-failed",
        xm = "token-update-failed",
        Fm = "token-update-no-token",
        Um = "use-sw-before-get-token",
        qm = "invalid-delete-token",
        Vm = "delete-token-not-found",
        Bm = "delete-scope-not-found",
        jm = "bg-handler-function-expected",
        Wm = "no-window-client-to-msg",
        Km = "unable-to-resubscribe",
        Qm = "no-fcm-token-for-resubscribe",
        Hm = "failed-to-delete-token",
        zm = "no-sw-in-reg",
        Gm = "bad-scope",
        Ym = "bad-vapid-key",
        Xm = "bad-subscription",
        Jm = "bad-token",
        $m = "bad-push-set",
        Zm = "failed-delete-vapid-key",
        tg = "invalid-public-vapid-key",
        eg = "use-public-key-before-get-token",
        ng = "public-vapid-key-decryption-failed",
        rg = ((lm = {})[vm] = "This method is available in a Window context.", lm[bm] = "This method is available in a service worker context.", lm[_m] = "This method should be overriden by extended classes.", lm[wm] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", lm[Tm] = "The required permissions were not granted and dismissed instead.", lm[Sm] = "The required permissions were not granted and blocked instead.", lm[Cm] = "This browser doesn't support the API's required to use the firebase SDK.", lm[Im] = "Notifications have been blocked.", lm[Nm] = "We are unable to register the default service worker. {$browserErrorMessage}", lm[Dm] = "A service worker registration was the expected input.", lm[Am] = "There was an error when trying to get any existing Push Subscriptions.", lm[km] = "Unable to access details of the saved token.", lm[Rm] = "The service worker being used for push was made redundant.", lm[Om] = "A problem occured while subscribing the user to FCM: {$message}", lm[Pm] = "FCM returned no token when subscribing the user to push.", lm[Mm] = "FCM returned an invalid response when getting an FCM token.", lm[Lm] = "A problem occured while unsubscribing the user from FCM: {$message}", lm[xm] = "A problem occured while updating the user from FCM: {$message}", lm[Fm] = "FCM returned no token when updating the user to push.", lm[Um] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.", lm[qm] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", lm[Vm] = "The deletion attempt for token could not be performed as the token was not found.", lm[Bm] = "The deletion attempt for service worker scope could not be performed as the scope was not found.", lm[jm] = "The input to setBackgroundMessageHandler() must be a function.", lm[Wm] = "An attempt was made to message a non-existant window client.", lm[Km] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}", lm[Qm] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", lm[Hm] = "Unable to delete the currently saved token.", lm[zm] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", lm[Em] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", lm[Gm] = "The service worker scope must be a string with at least one character.", lm[Ym] = "The public VAPID key is not a Uint8Array with 65 bytes.", lm[Xm] = "The subscription must be a valid PushSubscription.", lm[Jm] = "The FCM Token used for storage / lookup was not a valid token string.", lm[$m] = "The FCM push set used for storage / lookup was not not a valid push set string.", lm[Zm] = "The VAPID key could not be deleted.", lm[tg] = "The public VAPID key must be a string.", lm[ng] = "The public VAPID key did not equal 65 bytes when decrypted.", lm),
        ig = new An("messaging", "Messaging", rg),
        og = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]),
        ag = "https://fcm.googleapis.com";

    function sg(t, e) { if (null == t || null == e) return !1; if (t === e) return !0; if (t.byteLength !== e.byteLength) return !1; for (var n = new DataView(t), r = new DataView(e), i = 0; i < t.byteLength; i++)
            if (n.getUint8(i) !== r.getUint8(i)) return !1;
        return !0 }

    function ug(t) { var e = new Uint8Array(t); return btoa(String.fromCharCode.apply(String, function() { for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(hn(arguments[e])); return t }(e))) }

    function cg(t) { return ug(t).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_") }(ym = dm || (dm = {})).TYPE_OF_MSG = "firebase-messaging-msg-type", ym.DATA = "firebase-messaging-msg-data", (gm = mm || (mm = {})).PUSH_MSG_RECEIVED = "push-msg-received", gm.NOTIFICATION_CLICKED = "notification-clicked"; var hg = function() {
        function t() {} return t.prototype.getToken = function(c, h, l) { return un(this, void 0, void 0, function() { var e, n, r, i, o, a, s, u; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            e = cg(h.getKey("p256dh")), n = cg(h.getKey("auth")), r = "authorized_entity=" + c + "&endpoint=" + h.endpoint + "&encryption_key=" + e + "&encryption_auth=" + n, sg(l.buffer, og.buffer) || (i = cg(l), r += "&application_pub_key=" + i), (o = new Headers).append("Content-Type", "application/x-www-form-urlencoded"), a = { method: "POST", headers: o, body: r }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, fetch(ag + "/fcm/connect/subscribe", a)];
                        case 2:
                            return [4, t.sent().json()];
                        case 3:
                            return s = t.sent(), [3, 5];
                        case 4:
                            throw t.sent(), ig.create(Om);
                        case 5:
                            if (s.error) throw u = s.error.message, ig.create(Om, { message: u }); if (!s.token) throw ig.create(Pm); if (!s.pushSet) throw ig.create(Mm); return [2, { token: s.token, pushSet: s.pushSet }] } }) }) }, t.prototype.updateToken = function(c, h, l, f, p) { return un(this, void 0, void 0, function() { var e, n, r, i, o, a, s, u; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            e = cg(f.getKey("p256dh")), n = cg(f.getKey("auth")), r = "push_set=" + l + "&token=" + h + "&authorized_entity=" + c + "&endpoint=" + f.endpoint + "&encryption_key=" + e + "&encryption_auth=" + n, sg(p.buffer, og.buffer) || (i = cg(p), r += "&application_pub_key=" + i), (o = new Headers).append("Content-Type", "application/x-www-form-urlencoded"), a = { method: "POST", headers: o, body: r }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, fetch(ag + "/fcm/connect/subscribe", a)];
                        case 2:
                            return [4, t.sent().json()];
                        case 3:
                            return s = t.sent(), [3, 5];
                        case 4:
                            throw t.sent(), ig.create(xm);
                        case 5:
                            if (s.error) throw u = s.error.message, ig.create(xm, { message: u }); if (!s.token) throw ig.create(Fm); return [2, s.token] } }) }) }, t.prototype.deleteToken = function(a, s, u) { return un(this, void 0, void 0, function() { var e, n, r, i, o; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            e = "authorized_entity=" + a + "&token=" + s + "&pushSet=" + u, (n = new Headers).append("Content-Type", "application/x-www-form-urlencoded"), r = { method: "POST", headers: n, body: e }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, fetch(ag + "/fcm/connect/unsubscribe", r)];
                        case 2:
                            return [4, t.sent().json()];
                        case 3:
                            if ((i = t.sent()).error) throw o = i.error.message, ig.create(Lm, { message: o }); return [3, 5];
                        case 4:
                            throw t.sent(), ig.create(Lm);
                        case 5:
                            return [2] } }) }) }, t }();

    function lg(t) { for (var e = (t + "=".repeat((4 - t.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(e), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i); return r } var fg = "undefined",
        pg = "fcm_token_object_Store";

    function dg() { var e = indexedDB.open(fg);
        e.onerror = function(t) {}, e.onsuccess = function(t) {! function(n) { if (n.objectStoreNames.contains(pg)) { var t = n.transaction(pg).objectStore(pg),
                        r = new hg,
                        i = t.openCursor();
                    i.onerror = function(t) { console.warn("Unable to cleanup old IDB.", t) }, i.onsuccess = function() { var t = i.result; if (t) { var e = t.value;
                            r.deleteToken(e.fcmSenderId, e.fcmToken, e.fcmPushSet), t.continue() } else n.close(), indexedDB.deleteDatabase(fg) } } }(e.result) } } var yg = function() {
        function t() { this.dbPromise = null } return t.prototype.get = function(e) { return this.createTransaction(function(t) { return t.get(e) }) }, t.prototype.getIndex = function(e, n) { return this.createTransaction(function(t) { return t.index(e).get(n) }) }, t.prototype.put = function(e) { return this.createTransaction(function(t) { return t.put(e) }, "readwrite") }, t.prototype.delete = function(e) { return this.createTransaction(function(t) { return t.delete(e) }, "readwrite") }, t.prototype.closeDatabase = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return this.dbPromise ? [4, this.dbPromise] : [3, 2];
                        case 1:
                            t.sent().close(), this.dbPromise = null, t.label = 2;
                        case 2:
                            return [2] } }) }) }, t.prototype.createTransaction = function(a, s) { return void 0 === s && (s = "readonly"), un(this, void 0, void 0, function() { var e, r, i, o; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return [4, this.getDb()];
                        case 1:
                            return e = t.sent(), r = e.transaction(this.objectStoreName, s), i = r.objectStore(this.objectStoreName), [4, (n = a(i), new Promise(function(t, e) { n.onsuccess = function() { t(n.result) }, n.onerror = function() { e(n.error) } }))];
                        case 2:
                            return o = t.sent(), [2, new Promise(function(t, e) { r.oncomplete = function() { t(o) }, r.onerror = function() { e(r.error) } })] } var n }) }) }, t.prototype.getDb = function() { var r = this; return this.dbPromise || (this.dbPromise = new Promise(function(t, e) { var n = indexedDB.open(r.dbName, r.dbVersion);
                n.onsuccess = function() { t(n.result) }, n.onerror = function() { r.dbPromise = null, e(n.error) }, n.onupgradeneeded = function(t) { return r.onDbUpgrade(n, t) } })), this.dbPromise }, t }(); var mg = function(e) {
        function t() { var t = null !== e && e.apply(this, arguments) || this; return t.dbName = "fcm_token_details_db", t.dbVersion = 3, t.objectStoreName = "fcm_token_object_Store", t } return an(t, e), t.prototype.onDbUpgrade = function(t, e) { var n = t.result; switch (e.oldVersion) {
                case 0:
                    (r = n.createObjectStore(this.objectStoreName, { keyPath: "swScope" })).createIndex("fcmSenderId", "fcmSenderId", { unique: !1 }), r.createIndex("fcmToken", "fcmToken", { unique: !0 });
                case 1:
                    dg();
                case 2:
                    var r, i = (r = t.transaction.objectStore(this.objectStoreName)).openCursor();
                    i.onsuccess = function() { var t = i.result; if (t) { var e = t.value,
                                n = sn({}, e);
                            e.createTime || (n.createTime = Date.now()), "string" == typeof e.vapidKey && (n.vapidKey = lg(e.vapidKey)), "string" == typeof e.auth && (n.auth = lg(e.auth).buffer), "string" == typeof e.auth && (n.p256dh = lg(e.p256dh).buffer), t.update(n), t.continue() } } } }, t.prototype.getTokenDetailsFromToken = function(e) { return un(this, void 0, void 0, function() { return cn(this, function(t) { if (!e) throw ig.create(Jm); return gg({ fcmToken: e }), [2, this.getIndex("fcmToken", e)] }) }) }, t.prototype.getTokenDetailsFromSWScope = function(e) { return un(this, void 0, void 0, function() { return cn(this, function(t) { if (!e) throw ig.create(Gm); return gg({ swScope: e }), [2, this.get(e)] }) }) }, t.prototype.saveTokenDetails = function(e) { return un(this, void 0, void 0, function() { return cn(this, function(t) { if (!e.swScope) throw ig.create(Gm); if (!e.vapidKey) throw ig.create(Ym); if (!e.endpoint || !e.auth || !e.p256dh) throw ig.create(Xm); if (!e.fcmSenderId) throw ig.create(wm); if (!e.fcmToken) throw ig.create(Jm); if (!e.fcmPushSet) throw ig.create($m); return gg(e), [2, this.put(e)] }) }) }, t.prototype.deleteToken = function(n) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return "string" != typeof n || 0 === n.length ? [2, Promise.reject(ig.create(qm))] : [4, this.getTokenDetailsFromToken(n)];
                        case 1:
                            if (!(e = t.sent())) throw ig.create(Vm); return [4, this.delete(e.swScope)];
                        case 2:
                            return t.sent(), [2, e] } }) }) }, t }(yg);

    function gg(t) { if (t.fcmToken && ("string" != typeof t.fcmToken || 0 === t.fcmToken.length)) throw ig.create(Jm); if (t.swScope && ("string" != typeof t.swScope || 0 === t.swScope.length)) throw ig.create(Gm); if (t.vapidKey && (!(t.vapidKey instanceof Uint8Array) || 65 !== t.vapidKey.length)) throw ig.create(Ym); if (t.endpoint && ("string" != typeof t.endpoint || 0 === t.endpoint.length)) throw ig.create(Xm); if (t.auth && !(t.auth instanceof ArrayBuffer)) throw ig.create(Xm); if (t.p256dh && !(t.p256dh instanceof ArrayBuffer)) throw ig.create(Xm); if (t.fcmSenderId && ("string" != typeof t.fcmSenderId || 0 === t.fcmSenderId.length)) throw ig.create(wm); if (t.fcmPushSet && ("string" != typeof t.fcmPushSet || 0 === t.fcmPushSet.length)) throw ig.create($m) } var vg = function(e) {
            function t() { var t = null !== e && e.apply(this, arguments) || this; return t.dbName = "fcm_vapid_details_db", t.dbVersion = 1, t.objectStoreName = "fcm_vapid_object_Store", t } return an(t, e), t.prototype.onDbUpgrade = function(t) { t.result.createObjectStore(this.objectStoreName, { keyPath: "swScope" }) }, t.prototype.getVapidFromSWScope = function(n) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                if ("string" != typeof n || 0 === n.length) throw ig.create(Gm); return [4, this.get(n)];
                            case 1:
                                return [2, (e = t.sent()) ? e.vapidKey : void 0] } }) }) }, t.prototype.saveVapidDetails = function(n, r) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { if ("string" != typeof n || 0 === n.length) throw ig.create(Gm); if (null === r || 65 !== r.length) throw ig.create(Ym); return e = { swScope: n, vapidKey: r }, [2, this.put(e)] }) }) }, t.prototype.deleteVapidDetails = function(n) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, this.getVapidFromSWScope(n)];
                            case 1:
                                if (!(e = t.sent())) throw ig.create(Bm); return [4, this.delete(n)];
                            case 2:
                                return t.sent(), [2, e] } }) }) }, t }(yg),
        bg = "messagingSenderId",
        _g = function() {
            function t(t) { var e = this; if (!t.options[bg] || "string" != typeof t.options[bg]) throw ig.create(wm);
                this.messagingSenderId = t.options[bg], this.tokenDetailsModel = new mg, this.vapidDetailsModel = new vg, this.iidModel = new hg, this.app = t, this.INTERNAL = { delete: function() { return e.delete() } } } return t.prototype.getToken = function() { return un(this, void 0, void 0, function() { var e, n, r, i, o; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                if ("denied" === (e = this.getNotificationPermission_())) throw ig.create(Im); return "granted" !== e ? [2, null] : [4, this.getSWRegistration_()];
                            case 1:
                                return n = t.sent(), [4, this.getPublicVapidKey_()];
                            case 2:
                                return r = t.sent(), [4, this.getPushSubscription(n, r)];
                            case 3:
                                return i = t.sent(), [4, this.tokenDetailsModel.getTokenDetailsFromSWScope(n.scope)];
                            case 4:
                                return (o = t.sent()) ? [2, this.manageExistingToken(n, i, r, o)] : [2, this.getNewToken(n, i, r)] } }) }) }, t.prototype.manageExistingToken = function(e, n, r, i) { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return function(t, e, n) { if (!n.vapidKey || !sg(e.buffer, n.vapidKey.buffer)) return !1; var r = t.endpoint === n.endpoint,
                                        i = sg(t.getKey("auth"), n.auth),
                                        o = sg(t.getKey("p256dh"), n.p256dh); return r && i && o }(n, r, i) ? Date.now() < i.createTime + 6048e5 ? [2, i.fcmToken] : [2, this.updateToken(e, n, r, i)] : [4, this.deleteTokenFromDB(i.fcmToken)];
                            case 1:
                                return t.sent(), [2, this.getNewToken(e, n, r)] } }) }) }, t.prototype.updateToken = function(i, o, a, s) { return un(this, void 0, void 0, function() { var e, n, r; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return t.trys.push([0, 4, , 6]), [4, this.iidModel.updateToken(this.messagingSenderId, s.fcmToken, s.fcmPushSet, o, a)];
                            case 1:
                                return e = t.sent(), n = { swScope: i.scope, vapidKey: a, fcmSenderId: this.messagingSenderId, fcmToken: e, fcmPushSet: s.fcmPushSet, createTime: Date.now(), endpoint: o.endpoint, auth: o.getKey("auth"), p256dh: o.getKey("p256dh") }, [4, this.tokenDetailsModel.saveTokenDetails(n)];
                            case 2:
                                return t.sent(), [4, this.vapidDetailsModel.saveVapidDetails(i.scope, a)];
                            case 3:
                                return t.sent(), [2, e];
                            case 4:
                                return r = t.sent(), [4, this.deleteToken(s.fcmToken)];
                            case 5:
                                throw t.sent(), r;
                            case 6:
                                return [2] } }) }) }, t.prototype.getNewToken = function(r, i, o) { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, this.iidModel.getToken(this.messagingSenderId, i, o)];
                            case 1:
                                return e = t.sent(), n = { swScope: r.scope, vapidKey: o, fcmSenderId: this.messagingSenderId, fcmToken: e.token, fcmPushSet: e.pushSet, createTime: Date.now(), endpoint: i.endpoint, auth: i.getKey("auth"), p256dh: i.getKey("p256dh") }, [4, this.tokenDetailsModel.saveTokenDetails(n)];
                            case 2:
                                return t.sent(), [4, this.vapidDetailsModel.saveVapidDetails(r.scope, o)];
                            case 3:
                                return t.sent(), [2, e.token] } }) }) }, t.prototype.deleteToken = function(r) { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, this.deleteTokenFromDB(r)];
                            case 1:
                                return t.sent(), [4, this.getSWRegistration_()];
                            case 2:
                                return (e = t.sent()) ? [4, e.pushManager.getSubscription()] : [3, 4];
                            case 3:
                                if (n = t.sent()) return [2, n.unsubscribe()];
                                t.label = 4;
                            case 4:
                                return [2, !0] } }) }) }, t.prototype.deleteTokenFromDB = function(n) { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, this.tokenDetailsModel.deleteToken(n)];
                            case 1:
                                return e = t.sent(), [4, this.iidModel.deleteToken(e.fcmSenderId, e.fcmToken, e.fcmPushSet)];
                            case 2:
                                return t.sent(), [2] } }) }) }, t.prototype.getPushSubscription = function(e, n) { return e.pushManager.getSubscription().then(function(t) { return t || e.pushManager.subscribe({ userVisibleOnly: !0, applicationServerKey: n }) }) }, t.prototype.requestPermission = function() { throw ig.create(vm) }, t.prototype.useServiceWorker = function(t) { throw ig.create(vm) }, t.prototype.usePublicVapidKey = function(t) { throw ig.create(vm) }, t.prototype.onMessage = function(t, e, n) { throw ig.create(vm) }, t.prototype.onTokenRefresh = function(t, e, n) { throw ig.create(vm) }, t.prototype.setBackgroundMessageHandler = function(t) { throw ig.create(bm) }, t.prototype.delete = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, Promise.all([this.tokenDetailsModel.closeDatabase(), this.vapidDetailsModel.closeDatabase()])];
                            case 1:
                                return t.sent(), [2] } }) }) }, t.prototype.getNotificationPermission_ = function() { return Notification.permission }, t.prototype.getTokenDetailsModel = function() { return this.tokenDetailsModel }, t.prototype.getVapidDetailsModel = function() { return this.vapidDetailsModel }, t.prototype.getIidModel = function() { return this.iidModel }, t }(); var wg = "FCM_MSG",
        Eg = function(n) {
            function t(t) { var e = n.call(this, t) || this; return e.bgMessageHandler = null, self.addEventListener("push", function(t) { e.onPush(t) }), self.addEventListener("pushsubscriptionchange", function(t) { e.onSubChange(t) }), self.addEventListener("notificationclick", function(t) { e.onNotificationClick(t) }), e } return an(t, n), t.prototype.onPush = function(t) { t.waitUntil(this.onPush_(t)) }, t.prototype.onSubChange = function(t) { t.waitUntil(this.onSubChange_(t)) }, t.prototype.onNotificationClick = function(t) { t.waitUntil(this.onNotificationClick_(t)) }, t.prototype.onPush_ = function(s) { return un(this, void 0, void 0, function() { var e, n, r, i, o, a; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                if (!s.data) return [2]; try { e = s.data.json() } catch (t) { return [2] } return [4, this.hasVisibleClients_()];
                            case 1:
                                return t.sent() ? [2, this.sendMessageToWindowClients_(e)] : (n = this.getNotificationData_(e)) ? (r = n.title || "", [4, this.getSWRegistration_()]) : [3, 3];
                            case 2:
                                return i = t.sent(), o = n.actions, a = Notification.maxActions, o && a && o.length > a && console.warn("This browser only supports " + a + " actions.The remaining actions will not be displayed."), [2, i.showNotification(r, n)];
                            case 3:
                                return this.bgMessageHandler ? [4, this.bgMessageHandler(e)] : [3, 5];
                            case 4:
                                return t.sent(), [2];
                            case 5:
                                return [2] } }) }) }, t.prototype.onSubChange_ = function(t) { return un(this, void 0, void 0, function() { var e, n, r, i; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]), [4, this.getSWRegistration_()];
                            case 1:
                                return e = t.sent(), [3, 3];
                            case 2:
                                throw n = t.sent(), ig.create(Km, { message: n });
                            case 3:
                                return t.trys.push([3, 5, , 8]), [4, e.pushManager.getSubscription()];
                            case 4:
                                return t.sent(), [3, 8];
                            case 5:
                                return r = t.sent(), [4, this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];
                            case 6:
                                if (!(i = t.sent())) throw r; return [4, this.deleteToken(i.fcmToken)];
                            case 7:
                                throw t.sent(), r;
                            case 8:
                                return [2] } }) }) }, t.prototype.onNotificationClick_ = function(o) { return un(this, void 0, void 0, function() { var e, n, r, i; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return o.notification && o.notification.data && o.notification.data[wg] ? o.action ? [2] : (o.stopImmediatePropagation(), o.notification.close(), (e = o.notification.data[wg]).notification && (n = e.fcmOptions && e.fcmOptions.link || e.notification.click_action) ? [4, this.getWindowClient_(n)] : [2]) : [2];
                            case 1:
                                return (r = t.sent()) ? [3, 3] : [4, self.clients.openWindow(n)];
                            case 2:
                                return r = t.sent(), [3, 5];
                            case 3:
                                return [4, r.focus()];
                            case 4:
                                r = t.sent(), t.label = 5;
                            case 5:
                                return r ? (delete e.notification, delete e.fcmOptions, i = Sg(mm.NOTIFICATION_CLICKED, e), [2, this.attemptToMessageClient_(r, i)]) : [2] } }) }) }, t.prototype.getNotificationData_ = function(t) { var e; if (t && "object" == typeof t.notification) { var n = sn({}, t.notification); return n.data = sn({}, t.notification.data, ((e = {})[wg] = t, e)), n } }, t.prototype.setBackgroundMessageHandler = function(t) { if (!t || "function" != typeof t) throw ig.create(jm);
                this.bgMessageHandler = t }, t.prototype.getWindowClient_ = function(o) { return un(this, void 0, void 0, function() { var e, n, r, i; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return e = new URL(o, self.location.href).href, [4, Tg()];
                            case 1:
                                for (n = t.sent(), r = null, i = 0; i < n.length; i++)
                                    if (new URL(n[i].url, self.location.href).href === e) { r = n[i]; break }
                                return [2, r] } }) }) }, t.prototype.attemptToMessageClient_ = function(e, n) { return un(this, void 0, void 0, function() { return cn(this, function(t) { if (!e) throw ig.create(Wm); return e.postMessage(n), [2] }) }) }, t.prototype.hasVisibleClients_ = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, Tg()];
                            case 1:
                                return [2, t.sent().some(function(t) { return "visible" === t.visibilityState })] } }) }) }, t.prototype.sendMessageToWindowClients_ = function(i) { return un(this, void 0, void 0, function() { var e, n, r = this; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, Tg()];
                            case 1:
                                return e = t.sent(), n = Sg(mm.PUSH_MSG_RECEIVED, i), [4, Promise.all(e.map(function(t) { return r.attemptToMessageClient_(t, n) }))];
                            case 2:
                                return t.sent(), [2] } }) }) }, t.prototype.getSWRegistration_ = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { return [2, self.registration] }) }) }, t.prototype.getPublicVapidKey_ = function() { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                            case 0:
                                return [4, this.getSWRegistration_()];
                            case 1:
                                if (!(e = t.sent())) throw ig.create(Dm); return [4, this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];
                            case 2:
                                return null == (n = t.sent()) ? [2, og] : [2, n] } }) }) }, t }(_g);

    function Tg() { return self.clients.matchAll({ type: "window", includeUncontrolled: !0 }) }

    function Sg(t, e) { var n; return (n = {})[dm.TYPE_OF_MSG] = t, n[dm.DATA] = e, n } var Cg, Ig = function(n) {
        function t(t) { var e = n.call(this, t) || this; return e.registrationToUse = null, e.publicVapidKeyToUse = null, e.manifestCheckPromise = null, e.messageObserver = null, e.tokenRefreshObserver = null, e.onMessageInternal = Wn(function(t) { e.messageObserver = t }), e.onTokenRefreshInternal = Wn(function(t) { e.tokenRefreshObserver = t }), e.setupSWMessageListener_(), e } return an(t, n), t.prototype.getToken = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return this.manifestCheckPromise || (this.manifestCheckPromise = function() { return un(this, void 0, void 0, function() { var e, n; return cn(this, function(t) { switch (t.label) {
                                            case 0:
                                                if (!(e = document.querySelector('link[rel="manifest"]'))) return [2];
                                                t.label = 1;
                                            case 1:
                                                return t.trys.push([1, 4, , 5]), [4, fetch(e.href)];
                                            case 2:
                                                return [4, t.sent().json()];
                                            case 3:
                                                return n = t.sent(), [3, 5];
                                            case 4:
                                                return t.sent(), [2];
                                            case 5:
                                                if (!n || !n.gcm_sender_id) return [2]; if ("103953800507" !== n.gcm_sender_id) throw ig.create(Em); return [2] } }) }) }()), [4, this.manifestCheckPromise];
                        case 1:
                            return t.sent(), [2, n.prototype.getToken.call(this)] } }) }) }, t.prototype.requestPermission = function() { return un(this, void 0, void 0, function() { var e; return cn(this, function(t) { switch (t.label) {
                        case 0:
                            return "granted" === this.getNotificationPermission_() ? [2] : [4, Notification.requestPermission()];
                        case 1:
                            if ("granted" === (e = t.sent())) return [2]; throw "denied" === e ? ig.create(Sm) : ig.create(Tm) } }) }) }, t.prototype.useServiceWorker = function(t) { if (!(t instanceof ServiceWorkerRegistration)) throw ig.create(Dm); if (null != this.registrationToUse) throw ig.create(Um);
            this.registrationToUse = t }, t.prototype.usePublicVapidKey = function(t) { if ("string" != typeof t) throw ig.create(tg); if (null != this.publicVapidKeyToUse) throw ig.create(eg); var e = lg(t); if (65 !== e.length) throw ig.create(ng);
            this.publicVapidKeyToUse = e }, t.prototype.onMessage = function(t, e, n) { return "function" == typeof t ? this.onMessageInternal(t, e, n) : this.onMessageInternal(t) }, t.prototype.onTokenRefresh = function(t, e, n) { return "function" == typeof t ? this.onTokenRefreshInternal(t, e, n) : this.onTokenRefreshInternal(t) }, t.prototype.waitForRegistrationToActivate_ = function(r) { var i = r.installing || r.waiting || r.active; return new Promise(function(t, e) { if (i)
                    if ("activated" !== i.state)
                        if ("redundant" !== i.state) { var n = function() { if ("activated" === i.state) t(r);
                                else { if ("redundant" !== i.state) return;
                                    e(ig.create(Rm)) }
                                i.removeEventListener("statechange", n) };
                            i.addEventListener("statechange", n) } else e(ig.create(Rm));
                else t(r);
                else e(ig.create(zm)) }) }, t.prototype.getSWRegistration_ = function() { var e = this; return this.registrationToUse ? this.waitForRegistrationToActivate_(this.registrationToUse) : (this.registrationToUse = null, navigator.serviceWorker.register("/firebase-messaging-sw.js", { scope: "/firebase-cloud-messaging-push-scope" }).catch(function(t) { throw ig.create(Nm, { browserErrorMessage: t.message }) }).then(function(t) { return e.waitForRegistrationToActivate_(t).then(function() { return (e.registrationToUse = t).update(), t }) })) }, t.prototype.getPublicVapidKey_ = function() { return un(this, void 0, void 0, function() { return cn(this, function(t) { return this.publicVapidKeyToUse ? [2, this.publicVapidKeyToUse] : [2, og] }) }) }, t.prototype.setupSWMessageListener_ = function() { var r = this;
            navigator.serviceWorker.addEventListener("message", function(t) { if (t.data && t.data[dm.TYPE_OF_MSG]) { var e = t.data; switch (e[dm.TYPE_OF_MSG]) {
                        case mm.PUSH_MSG_RECEIVED:
                        case mm.NOTIFICATION_CLICKED:
                            var n = e[dm.DATA];
                            r.messageObserver && r.messageObserver.next(n) } } }, !1) }, t }(_g);

    function Ng() { return self && "ServiceWorkerGlobalScope" in self ? "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") : navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") }
    Cg = { isSupported: Ng }, Mh.INTERNAL.registerService("messaging", function(t) { if (!Ng()) throw ig.create(Cm); return self && "ServiceWorkerGlobalScope" in self ? new Eg(t) : new Ig(t) }, Cg); var Dg = "https://firebasestorage.googleapis.com",
        Ag = "https://firebasestorage.googleapis.com",
        kg = "/v0",
        Rg = "/v0",
        Og = function() {
            function t(t, e) { this.code_ = Mg(t), this.message_ = "Firebase Storage: " + e, this.serverResponse_ = null, this.name_ = "FirebaseError" } return t.prototype.codeProp = function() { return this.code }, t.prototype.codeEquals = function(t) { return Mg(t) === this.codeProp() }, t.prototype.serverResponseProp = function() { return this.serverResponse_ }, t.prototype.setServerResponseProp = function(t) { this.serverResponse_ = t }, Object.defineProperty(t.prototype, "name", { get: function() { return this.name_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "code", { get: function() { return this.code_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "message", { get: function() { return this.message_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "serverResponse", { get: function() { return this.serverResponse_ }, enumerable: !0, configurable: !0 }), t }(),
        Pg = { UNKNOWN: "unknown", OBJECT_NOT_FOUND: "object-not-found", BUCKET_NOT_FOUND: "bucket-not-found", PROJECT_NOT_FOUND: "project-not-found", QUOTA_EXCEEDED: "quota-exceeded", UNAUTHENTICATED: "unauthenticated", UNAUTHORIZED: "unauthorized", RETRY_LIMIT_EXCEEDED: "retry-limit-exceeded", INVALID_CHECKSUM: "invalid-checksum", CANCELED: "canceled", INVALID_EVENT_NAME: "invalid-event-name", INVALID_URL: "invalid-url", INVALID_DEFAULT_BUCKET: "invalid-default-bucket", NO_DEFAULT_BUCKET: "no-default-bucket", CANNOT_SLICE_BLOB: "cannot-slice-blob", SERVER_FILE_WRONG_SIZE: "server-file-wrong-size", NO_DOWNLOAD_URL: "no-download-url", INVALID_ARGUMENT: "invalid-argument", INVALID_ARGUMENT_COUNT: "invalid-argument-count", APP_DELETED: "app-deleted", INVALID_ROOT_OPERATION: "invalid-root-operation", INVALID_FORMAT: "invalid-format", INTERNAL_ERROR: "internal-error" };

    function Mg(t) { return "storage/" + t }

    function Lg() { return new Og(Pg.UNKNOWN, "An unknown error occurred, please check the error payload for server response.") }

    function xg() { return new Og(Pg.CANCELED, "User canceled the upload/download.") }

    function Fg() { return new Og(Pg.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.") }

    function Ug(t, e, n) { return new Og(Pg.INVALID_ARGUMENT, "Invalid argument in `" + e + "` at index " + t + ": " + n) }

    function qg() { return new Og(Pg.APP_DELETED, "The Firebase app was deleted.") }

    function Vg(t, e) { return new Og(Pg.INVALID_FORMAT, "String does not match format '" + t + "': " + e) }

    function Bg(t) { throw new Og(Pg.INTERNAL_ERROR, "Internal error: " + t) } var jg = { RAW: "raw", BASE64: "base64", BASE64URL: "base64url", DATA_URL: "data_url" };

    function Wg(t) { switch (t) {
            case jg.RAW:
            case jg.BASE64:
            case jg.BASE64URL:
            case jg.DATA_URL:
                return;
            default:
                throw "Expected one of the event types: [" + jg.RAW + ", " + jg.BASE64 + ", " + jg.BASE64URL + ", " + jg.DATA_URL + "]." } } var Kg = function(t, e) { this.data = t, this.contentType = e || null };

    function Qg(t, e) { switch (t) {
            case jg.RAW:
                return new Kg(Hg(e));
            case jg.BASE64:
            case jg.BASE64URL:
                return new Kg(zg(t, e));
            case jg.DATA_URL:
                return new Kg((n = new Gg(e)).base64 ? zg(jg.BASE64, n.rest) : function(t) { var e; try { e = decodeURIComponent(t) } catch (t) { throw Vg(jg.DATA_URL, "Malformed data URL.") } return Hg(e) }(n.rest), new Gg(e).contentType) } var n; throw Lg() }

    function Hg(t) { for (var e = [], n = 0; n < t.length; n++) { var r = t.charCodeAt(n); if (r <= 127) e.push(r);
            else if (r <= 2047) e.push(192 | r >> 6, 128 | 63 & r);
            else if (55296 == (64512 & r))
                if (n < t.length - 1 && 56320 == (64512 & t.charCodeAt(n + 1))) r = 65536 | (1023 & r) << 10 | 1023 & t.charCodeAt(++n), e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r);
                else e.push(239, 191, 189);
            else 56320 == (64512 & r) ? e.push(239, 191, 189) : e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) } return new Uint8Array(e) }

    function zg(e, t) { switch (e) {
            case jg.BASE64:
                var n = -1 !== t.indexOf("-"),
                    r = -1 !== t.indexOf("_"); if (n || r) throw Vg(e, "Invalid character '" + (n ? "-" : "_") + "' found: is it base64url encoded?"); break;
            case jg.BASE64URL:
                var i = -1 !== t.indexOf("+"),
                    o = -1 !== t.indexOf("/"); if (i || o) throw Vg(e, "Invalid character '" + (i ? "+" : "/") + "' found: is it base64 encoded?");
                t = t.replace(/-/g, "+").replace(/_/g, "/") } var a; try { a = atob(t) } catch (t) { throw Vg(e, "Invalid character found") } for (var s = new Uint8Array(a.length), u = 0; u < a.length; u++) s[u] = a.charCodeAt(u); return s } var Gg = function(t) { this.base64 = !1, this.contentType = null; var e = t.match(/^data:([^,]+)?,/); if (null === e) throw Vg(jg.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>"); var n, r, i = e[1] || null;
        null != i && (this.base64 = (r = ";base64", (n = i).length >= r.length && n.substring(n.length - r.length) === r), this.contentType = this.base64 ? i.substring(0, i.length - ";base64".length) : i), this.rest = t.substring(t.indexOf(",") + 1) }; var Yg, Xg, Jg = { STATE_CHANGED: "state_changed" },
        $g = "running",
        Zg = "pausing",
        tv = "paused",
        ev = "success",
        nv = "canceling",
        rv = "canceled",
        iv = "error",
        ov = { RUNNING: "running", PAUSED: "paused", SUCCESS: "success", CANCELED: "canceled", ERROR: "error" };

    function av(t) { switch (t) {
            case $g:
            case Zg:
            case nv:
                return ov.RUNNING;
            case tv:
                return ov.PAUSED;
            case ev:
                return ov.SUCCESS;
            case rv:
                return ov.CANCELED;
            case iv:
            default:
                return ov.ERROR } }

    function sv(t, e) { for (var n in t) r = t, i = n, Object.prototype.hasOwnProperty.call(r, i) && e(n, t[n]); var r, i }

    function uv(t) { if (null == t) return {}; var n = {}; return sv(t, function(t, e) { n[t] = e }), n }

    function cv(t) { return new Promise(t) }

    function hv(t) { return Promise.resolve(t) }

    function lv(t) { return null != t }

    function fv(t) { return void 0 !== t }

    function pv(t) { return "function" == typeof t }

    function dv(t) { return "object" == typeof t }

    function yv(t) { return "string" == typeof t || t instanceof String }

    function mv(t) { return gv() && t instanceof Blob }

    function gv() { return "undefined" != typeof Blob }(Xg = Yg || (Yg = {}))[Xg.NO_ERROR = 0] = "NO_ERROR", Xg[Xg.NETWORK_ERROR = 1] = "NETWORK_ERROR", Xg[Xg.ABORT = 2] = "ABORT"; var vv = function() {
            function t() { var n = this;
                this.sent_ = !1, this.xhr_ = new XMLHttpRequest, this.errorCode_ = Yg.NO_ERROR, this.sendPromise_ = cv(function(e, t) { n.xhr_.addEventListener("abort", function(t) { n.errorCode_ = Yg.ABORT, e(n) }), n.xhr_.addEventListener("error", function(t) { n.errorCode_ = Yg.NETWORK_ERROR, e(n) }), n.xhr_.addEventListener("load", function(t) { e(n) }) }) } return t.prototype.send = function(t, e, n, r) { var i = this; if (this.sent_) throw Bg("cannot .send() more than once");
                (this.sent_ = !0, this.xhr_.open(e, t, !0), lv(r)) && sv(r, function(t, e) { i.xhr_.setRequestHeader(t, e.toString()) }); return lv(n) ? this.xhr_.send(n) : this.xhr_.send(), this.sendPromise_ }, t.prototype.getErrorCode = function() { if (!this.sent_) throw Bg("cannot .getErrorCode() before sending"); return this.errorCode_ }, t.prototype.getStatus = function() { if (!this.sent_) throw Bg("cannot .getStatus() before sending"); try { return this.xhr_.status } catch (t) { return -1 } }, t.prototype.getResponseText = function() { if (!this.sent_) throw Bg("cannot .getResponseText() before sending"); return this.xhr_.responseText }, t.prototype.abort = function() { this.xhr_.abort() }, t.prototype.getResponseHeader = function(t) { return this.xhr_.getResponseHeader(t) }, t.prototype.addUploadProgressListener = function(t) { lv(this.xhr_.upload) && this.xhr_.upload.addEventListener("progress", t) }, t.prototype.removeUploadProgressListener = function(t) { lv(this.xhr_.upload) && this.xhr_.upload.removeEventListener("progress", t) }, t }(),
        bv = function() {
            function t() {} return t.prototype.createXhrIo = function() { return new vv }, t }();

    function _v(t) { var e, n; try { e = JSON.parse(t) } catch (t) { return null } return dv(n = e) && !Array.isArray(n) ? e : null } var wv = function() {
        function h(t, e) { this.bucket = t, this.path_ = e } return Object.defineProperty(h.prototype, "path", { get: function() { return this.path_ }, enumerable: !0, configurable: !0 }), h.prototype.fullServerUrl = function() { var t = encodeURIComponent; return "/b/" + t(this.bucket) + "/o/" + t(this.path) }, h.prototype.bucketOnlyServerUrl = function() { return "/b/" + encodeURIComponent(this.bucket) + "/o" }, h.makeFromBucketSpec = function(e) { var t, n; try { t = h.makeFromUrl(e) } catch (t) { return new h(e, "") } if ("" === t.path) return t; throw n = e, new Og(Pg.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + n + "'.") }, h.makeFromUrl = function(t) { var e = null,
                n = "([A-Za-z0-9.\\-_]+)"; for (var r, i = [{ regex: new RegExp("^gs://" + n + "(/(.*))?$", "i"), indices: { bucket: 1, path: 3 }, postModify: function(t) { "/" === t.path.charAt(t.path.length - 1) && (t.path_ = t.path_.slice(0, -1)) } }, { regex: new RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/" + n + "/o(/([^?#]*).*)?$", "i"), indices: { bucket: 1, path: 3 }, postModify: function(t) { t.path_ = decodeURIComponent(t.path) } }], o = 0; o < i.length; o++) { var a = i[o],
                    s = a.regex.exec(t); if (s) { var u = s[a.indices.bucket],
                        c = s[a.indices.path];
                    c || (c = ""), e = new h(u, c), a.postModify(e); break } } if (null == e) throw r = t, new Og(Pg.INVALID_URL, "Invalid URL '" + r + "'."); return e }, h }();

    function Ev(t) { var e = t.lastIndexOf("/", t.length - 2); return -1 === e ? t : t.slice(e + 1) }

    function Tv(t) { return Dg + kg + t }

    function Sv(t) { return Dg + Rg + t }

    function Cv(t) { var r = encodeURIComponent,
            i = "?"; return sv(t, function(t, e) { var n = r(t) + "=" + r(e);
            i = i + n + "&" }), i = i.slice(0, -1) }

    function Iv(t, e) { return e } var Nv = function(t, e, n, r) { this.server = t, this.local = e || t, this.writable = !!n, this.xform = r || Iv },
        Dv = null;

    function Av() { if (Dv) return Dv; var t = [];
        t.push(new Nv("bucket")), t.push(new Nv("generation")), t.push(new Nv("metageneration")), t.push(new Nv("name", "fullPath", !0)); var e = new Nv("name");
        e.xform = function(t, e) { return !yv(n = e) || n.length < 2 ? n : Ev(n = n); var n }, t.push(e); var n = new Nv("size"); return n.xform = function(t, e) { return lv(e) ? +e : e }, t.push(n), t.push(new Nv("timeCreated")), t.push(new Nv("updated")), t.push(new Nv("md5Hash", null, !0)), t.push(new Nv("cacheControl", null, !0)), t.push(new Nv("contentDisposition", null, !0)), t.push(new Nv("contentEncoding", null, !0)), t.push(new Nv("contentLanguage", null, !0)), t.push(new Nv("contentType", null, !0)), t.push(new Nv("metadata", "customMetadata", !0)), Dv = t }

    function kv(t, e, n) { for (var r, i, o = { type: "file" }, a = n.length, s = 0; s < a; s++) { var u = n[s];
            o[u.local] = u.xform(o, e[u.server]) } return r = o, i = t, Object.defineProperty(r, "ref", { get: function() { var t = r.bucket,
                    e = r.fullPath,
                    n = new wv(t, e); return i.makeStorageReference(n) } }), o }

    function Rv(t, e, n) { var r = _v(e); return null === r ? null : kv(t, r, n) }

    function Ov(i, t) { var e = _v(t); if (null === e) return null; if (!yv(e.downloadTokens)) return null; var n = e.downloadTokens; if (0 === n.length) return null; var o = encodeURIComponent; return n.split(",").map(function(t) { var e = i.bucket,
                n = i.fullPath,
                r = "/b/" + o(e) + "/o/" + o(n); return Ag + kg + r + Cv({ alt: "media", token: t }) })[0] }

    function Pv(t, e) { for (var n = {}, r = e.length, i = 0; i < r; i++) { var o = e[i];
            o.writable && (n[o.server] = t[o.local]) } return JSON.stringify(n) }

    function Mv(t) { var e; if (!(t && dv(t))) throw "Expected Metadata object."; for (var n in t) { var r = t[n]; if ("customMetadata" === n) { if (!dv(r)) throw "Expected object for 'customMetadata' mapping." } else if (dv(e = r) && null !== e) throw "Mapping for '" + n + "' cannot be an object." } }

    function Lv(e, t, n) { for (var r = t.length, i = t.length, o = 0; o < t.length; o++)
            if (t[o].optional) { r = o; break }
        var a, s, u, c, h, l; if (!(r <= n.length && n.length <= i)) throw a = r, s = i, u = e, c = n.length, l = a === s ? 1 === (h = a) ? "argument" : "arguments" : (h = "between " + a + " and " + s, "arguments"), new Og(Pg.INVALID_ARGUMENT_COUNT, "Invalid argument count in `" + u + "`: Expected " + h + " " + l + ", received " + c + "."); for (o = 0; o < n.length; o++) try { t[o].validator(n[o]) } catch (t) { throw t instanceof Error ? Ug(o, e, t.message) : Ug(o, e, t) } } var xv = function(e, t) { var n = this;
        this.validator = function(t) { n.optional && !fv(t) || e(t) }, this.optional = !!t };

    function Fv(t, e) {
        function n(t) { if (!yv(t)) throw "Expected string." } var r, i, o; return r = t ? (i = n, o = t, function(t) { i(t), o(t) }) : n, new xv(r, e) }

    function Uv(t) { return new xv(Mv, t) }

    function qv() { return new xv(function(t) { var e; if (!(("number" == typeof(e = t) || e instanceof Number) && 0 <= t)) throw "Expected a number 0 or greater." }) }

    function Vv(e, t) { return new xv(function(t) { if (!(null === t || lv(t) && t instanceof Object)) throw "Expected an Object.";
            null != e && e(t) }, t) }

    function Bv(t) { return new xv(function(t) { if (null !== t && !pv(t)) throw "Expected a Function." }, t) }

    function jv() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; var n = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : void 0; if (void 0 !== n) { for (var r = new n, i = 0; i < t.length; i++) r.append(t[i]); return r.getBlob() } if (gv()) return new Blob(t); throw Error("This browser doesn't seem to support creating Blobs") } var Wv = function() {
        function s(t, e) { var n = 0,
                r = "";
            mv(t) ? (n = (this.data_ = t).size, r = t.type) : t instanceof ArrayBuffer ? (e ? this.data_ = new Uint8Array(t) : (this.data_ = new Uint8Array(t.byteLength), this.data_.set(new Uint8Array(t))), n = this.data_.length) : t instanceof Uint8Array && (e ? this.data_ = t : (this.data_ = new Uint8Array(t.length), this.data_.set(t)), n = t.length), this.size_ = n, this.type_ = r } return s.prototype.size = function() { return this.size_ }, s.prototype.type = function() { return this.type_ }, s.prototype.slice = function(t, e) { if (mv(this.data_)) { var n = this.data_,
                    r = (o = t, a = e, (i = n).webkitSlice ? i.webkitSlice(o, a) : i.mozSlice ? i.mozSlice(o, a) : i.slice ? i.slice(o, a) : null); return null === r ? null : new s(r) } var i, o, a; return new s(new Uint8Array(this.data_.buffer, t, e - t), !0) }, s.getBlob = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; if (gv()) { var n = t.map(function(t) { return t instanceof s ? t.data_ : t }); return new s(jv.apply(null, n)) } var r = t.map(function(t) { return yv(t) ? Qg(jg.RAW, t).data : t.data_ }),
                i = 0;
            r.forEach(function(t) { i += t.byteLength }); var o = new Uint8Array(i),
                a = 0; return r.forEach(function(t) { for (var e = 0; e < t.length; e++) o[a++] = t[e] }), new s(o, !0) }, s.prototype.uploadData = function() { return this.data_ }, s }();

    function Kv(t, e) { return -1 !== t.indexOf(e) } var Qv = function(t, e, n, r) { this.url = t, this.method = e, this.handler = n, this.timeout = r, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = [] };

    function Hv(t) { if (!t) throw Lg() }

    function zv(r, i) { return function(t, e) { var n = Rv(r, e, i); return Hv(null !== n), n } }

    function Gv(o) { return function(t, e) { var n, r, i; return (n = 401 === t.getStatus() ? new Og(Pg.UNAUTHENTICATED, "User is not authenticated, please authenticate using Firebase Authentication and try again.") : 402 === t.getStatus() ? (i = o.bucket, new Og(Pg.QUOTA_EXCEEDED, "Quota for bucket '" + i + "' exceeded, please view quota on https://firebase.google.com/pricing/.")) : 403 === t.getStatus() ? (r = o.path, new Og(Pg.UNAUTHORIZED, "User does not have permission to access '" + r + "'.")) : e).setServerResponseProp(e.serverResponseProp()), n } }

    function Yv(i) { var o = Gv(i); return function(t, e) { var n, r = o(t, e); return 404 === t.getStatus() && (n = i.path, r = new Og(Pg.OBJECT_NOT_FOUND, "Object '" + n + "' does not exist.")), r.setServerResponseProp(e.serverResponseProp()), r } }

    function Xv(t, e, n) { var r = Tv(e.fullServerUrl()),
            i = t.maxOperationRetryTime(),
            o = new Qv(r, "GET", zv(t, n), i); return o.errorHandler = Yv(e), o }

    function Jv(t, e, n) { var r, i, o = Tv(e.fullServerUrl()),
            a = t.maxOperationRetryTime(),
            s = new Qv(o, "GET", (r = t, i = n, function(t, e) { var n = Rv(r, e, i); return Hv(null !== n), Ov(n, e) }), a); return s.errorHandler = Yv(e), s }

    function $v(t, e, n) { var r, i, o = uv(n); return o.fullPath = t.path, o.size = e.size(), o.contentType || (o.contentType = (i = e, (r = null) && r.contentType || i && i.type() || "application/octet-stream")), o } var Zv = function(t, e, n, r) { this.current = t, this.total = e, this.finalized = !!n, this.metadata = r || null };

    function tb(t, e) { var n; try { n = t.getResponseHeader("X-Goog-Upload-Status") } catch (t) { Hv(!1) } return Hv(Kv(e || ["active"], n)), n }

    function eb(t, a, e, s, n, u, r, i) { var c = new Zv(0, 0); if (c.total = r ? (c.current = r.current, r.total) : (c.current = 0, s.size()), s.size() !== c.total) throw new Og(Pg.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload."); var o = c.total - c.current,
            h = o;
        0 < n && (h = Math.min(h, n)); var l = c.current,
            f = l + h,
            p = { "X-Goog-Upload-Command": h === o ? "upload, finalize" : "upload", "X-Goog-Upload-Offset": c.current },
            d = s.slice(l, f); if (null === d) throw Fg(); var y = a.maxUploadRetryTime(),
            m = new Qv(e, "POST", function(t, e) { var n, r = tb(t, ["active", "final"]),
                    i = c.current + h,
                    o = s.size(); return n = "final" === r ? zv(a, u)(t, e) : null, new Zv(i, o, "final" === r, n) }, y); return m.headers = p, m.body = d.uploadData(), m.progressCallback = i || null, m.errorHandler = Gv(t), m } var nb = function(t, e, n) { if (pv(t) || lv(e) || lv(n)) this.next = t, this.error = e || null, this.complete = n || null;
            else { var r = t;
                this.next = r.next || null, this.error = r.error || null, this.complete = r.complete || null } },
        rb = function(t, e, n, r, i, o) { this.bytesTransferred = t, this.totalBytes = e, this.state = n, this.metadata = r, this.task = i, this.ref = o };

    function ib(n) { return function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            hv(!0).then(function() { n.apply(null, t) }) } } var ob = function() {
            function t(t, e, n, r, i, o) { void 0 === o && (o = null); var a = this;
                this.transferred_ = 0, this.needToFetchStatus_ = !1, this.needToFetchMetadata_ = !1, this.observers_ = [], this.error_ = null, this.uploadUrl_ = null, this.request_ = null, this.chunkMultiplier_ = 1, this.resolve_ = null, this.reject_ = null, this.ref_ = t, this.authWrapper_ = e, this.location_ = n, this.blob_ = i, this.metadata_ = o, this.mappings_ = r, this.resumable_ = this.shouldDoResumable_(this.blob_), this.state_ = $g, this.errorHandler_ = function(t) { a.request_ = null, a.chunkMultiplier_ = 1, t.codeEquals(Pg.CANCELED) ? (a.needToFetchStatus_ = !0, a.completeTransitions_()) : (a.error_ = t, a.transition_(iv)) }, this.metadataErrorHandler_ = function(t) { a.request_ = null, t.codeEquals(Pg.CANCELED) ? a.completeTransitions_() : (a.error_ = t, a.transition_(iv)) }, this.promise_ = cv(function(t, e) { a.resolve_ = t, a.reject_ = e, a.start_() }), this.promise_.then(null, function() {}) } return t.prototype.makeProgressCallback_ = function() { var n = this,
                    r = this.transferred_; return function(t, e) { n.updateProgress_(r + t) } }, t.prototype.shouldDoResumable_ = function(t) { return 262144 < t.size() }, t.prototype.start_ = function() { this.state_ === $g && null === this.request_ && (this.resumable_ ? null === this.uploadUrl_ ? this.createResumable_() : this.needToFetchStatus_ ? this.fetchStatus_() : this.needToFetchMetadata_ ? this.fetchMetadata_() : this.continueUpload_() : this.oneShotUpload_()) }, t.prototype.resolveToken_ = function(e) { var n = this;
                this.authWrapper_.getAuthToken().then(function(t) { switch (n.state_) {
                        case $g:
                            e(t); break;
                        case nv:
                            n.transition_(rv); break;
                        case Zg:
                            n.transition_(tv) } }) }, t.prototype.createResumable_ = function() { var m = this;
                this.resolveToken_(function(t) { var e, n, r, i, o, a, s, u, c, h, l, f, p, d = (e = m.authWrapper_, n = m.location_, r = m.mappings_, i = m.blob_, o = m.metadata_, a = n.bucketOnlyServerUrl(), s = $v(n, i, o), u = { name: s.fullPath }, c = Sv(a), h = { "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": i.size(), "X-Goog-Upload-Header-Content-Type": s.contentType, "Content-Type": "application/json; charset=utf-8" }, l = Pv(s, r), f = e.maxUploadRetryTime(), (p = new Qv(c, "POST", function(t, e) { var n;
                            tb(t); try { n = t.getResponseHeader("X-Goog-Upload-URL") } catch (t) { Hv(!1) } return Hv(yv(n)), n }, f)).urlParams = u, p.headers = h, p.body = l, p.errorHandler = Gv(n), p),
                        y = m.authWrapper_.makeRequest(d, t);
                    (m.request_ = y).getPromise().then(function(t) { m.request_ = null, m.uploadUrl_ = t, m.needToFetchStatus_ = !1, m.completeTransitions_() }, m.errorHandler_) }) }, t.prototype.fetchStatus_ = function() { var c = this,
                    h = this.uploadUrl_;
                this.resolveToken_(function(t) { var e, n, r, o, i, a, s = (e = c.authWrapper_, n = c.location_, r = h, o = c.blob_, i = e.maxUploadRetryTime(), (a = new Qv(r, "POST", function(t, e) { var n, r = tb(t, ["active", "final"]); try { n = t.getResponseHeader("X-Goog-Upload-Size-Received") } catch (t) { Hv(!1) } var i = parseInt(n, 10); return Hv(!isNaN(i)), new Zv(i, o.size(), "final" === r) }, i)).headers = { "X-Goog-Upload-Command": "query" }, a.errorHandler = Gv(n), a),
                        u = c.authWrapper_.makeRequest(s, t);
                    (c.request_ = u).getPromise().then(function(t) { t = t, c.request_ = null, c.updateProgress_(t.current), c.needToFetchStatus_ = !1, t.finalized && (c.needToFetchMetadata_ = !0), c.completeTransitions_() }, c.errorHandler_) }) }, t.prototype.continueUpload_ = function() { var r = this,
                    i = 262144 * this.chunkMultiplier_,
                    o = new Zv(this.transferred_, this.blob_.size()),
                    a = this.uploadUrl_;
                this.resolveToken_(function(t) { var e; try { e = eb(r.location_, r.authWrapper_, a, r.blob_, i, r.mappings_, o, r.makeProgressCallback_()) } catch (t) { return r.error_ = t, void r.transition_(iv) } var n = r.authWrapper_.makeRequest(e, t);
                    (r.request_ = n).getPromise().then(function(t) { r.increaseMultiplier_(), r.request_ = null, r.updateProgress_(t.current), t.finalized ? (r.metadata_ = t.metadata, r.transition_(ev)) : r.completeTransitions_() }, r.errorHandler_) }) }, t.prototype.increaseMultiplier_ = function() { 262144 * this.chunkMultiplier_ < 33554432 && (this.chunkMultiplier_ *= 2) }, t.prototype.fetchMetadata_ = function() { var r = this;
                this.resolveToken_(function(t) { var e = Xv(r.authWrapper_, r.location_, r.mappings_),
                        n = r.authWrapper_.makeRequest(e, t);
                    (r.request_ = n).getPromise().then(function(t) { r.request_ = null, r.metadata_ = t, r.transition_(ev) }, r.metadataErrorHandler_) }) }, t.prototype.oneShotUpload_ = function() { var r = this;
                this.resolveToken_(function(t) { var e = function(t, e, n, r, i) { var o = e.bucketOnlyServerUrl(),
                                a = { "X-Goog-Upload-Protocol": "multipart" },
                                s = function() { for (var t = "", e = 0; e < 2; e++) t += Math.random().toString().slice(2); return t }();
                            a["Content-Type"] = "multipart/related; boundary=" + s; var u = $v(e, r, i),
                                c = "--" + s + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + Pv(u, n) + "\r\n--" + s + "\r\nContent-Type: " + u.contentType + "\r\n\r\n",
                                h = "\r\n--" + s + "--",
                                l = Wv.getBlob(c, r, h); if (null === l) throw Fg(); var f = { name: u.fullPath },
                                p = Sv(o),
                                d = t.maxUploadRetryTime(),
                                y = new Qv(p, "POST", zv(t, n), d); return y.urlParams = f, y.headers = a, y.body = l.uploadData(), y.errorHandler = Gv(e), y }(r.authWrapper_, r.location_, r.mappings_, r.blob_, r.metadata_),
                        n = r.authWrapper_.makeRequest(e, t);
                    (r.request_ = n).getPromise().then(function(t) { r.request_ = null, r.metadata_ = t, r.updateProgress_(r.blob_.size()), r.transition_(ev) }, r.errorHandler_) }) }, t.prototype.updateProgress_ = function(t) { var e = this.transferred_;
                this.transferred_ = t, this.transferred_ !== e && this.notifyObservers_() }, t.prototype.transition_ = function(t) { if (this.state_ !== t) switch (t) {
                    case nv:
                    case Zg:
                        this.state_ = t, null !== this.request_ && this.request_.cancel(); break;
                    case $g:
                        var e = this.state_ === tv;
                        this.state_ = t, e && (this.notifyObservers_(), this.start_()); break;
                    case tv:
                        this.state_ = t, this.notifyObservers_(); break;
                    case rv:
                        this.error_ = xg(), this.state_ = t, this.notifyObservers_(); break;
                    case iv:
                    case ev:
                        this.state_ = t, this.notifyObservers_() } }, t.prototype.completeTransitions_ = function() { switch (this.state_) {
                    case Zg:
                        this.transition_(tv); break;
                    case nv:
                        this.transition_(rv); break;
                    case $g:
                        this.start_() } }, Object.defineProperty(t.prototype, "snapshot", { get: function() { var t = av(this.state_); return new rb(this.transferred_, this.blob_.size(), t, this.metadata_, this, this.ref_) }, enumerable: !0, configurable: !0 }), t.prototype.on = function(e, t, n, o) { void 0 === t && (t = void 0), void 0 === n && (n = void 0), void 0 === o && (o = void 0); var r = "Expected a function or an Object with one of `next`, `error`, `complete` properties.",
                    i = Bv(!0).validator,
                    a = Vv(null, !0).validator;

                function s(t) { try { return void i(t) } catch (t) {} try { if (a(t), !(fv(t.next) || fv(t.error) || fv(t.complete))) throw ""; return } catch (t) { throw r } }
                Lv("on", [Fv(function(t) { if (e !== Jg.STATE_CHANGED) throw "Expected one of the event types: [" + Jg.STATE_CHANGED + "]." }), Vv(s, !0), Bv(!0), Bv(!0)], arguments); var u = this;

                function c(i) { return function(t, e, n) { null !== i && Lv("on", i, arguments); var r = new nb(t, e, o); return u.addObserver_(r),
                            function() { u.removeObserver_(r) } } } var h = [Vv(function(t) { if (null === t) throw r;
                    s(t) }), Bv(!0), Bv(!0)]; return !(fv(t) || fv(n) || fv(o)) ? c(h) : c(null)(t, n, o) }, t.prototype.then = function(t, e) { return this.promise_.then(t, e) }, t.prototype.catch = function(t) { return this.then(null, t) }, t.prototype.addObserver_ = function(t) { this.observers_.push(t), this.notifyObserver_(t) }, t.prototype.removeObserver_ = function(t) { var e, n, r;
                e = this.observers_, n = t, -1 !== (r = e.indexOf(n)) && e.splice(r, 1) }, t.prototype.notifyObservers_ = function() { var t, e = this;
                this.finishPromise_(), (t = this.observers_, Array.prototype.slice.call(t)).forEach(function(t) { e.notifyObserver_(t) }) }, t.prototype.finishPromise_ = function() { if (null !== this.resolve_) { var t = !0; switch (av(this.state_)) {
                        case ov.SUCCESS:
                            ib(this.resolve_.bind(null, this.snapshot))(); break;
                        case ov.CANCELED:
                        case ov.ERROR:
                            ib(this.reject_.bind(null, this.error_))(); break;
                        default:
                            t = !1 }
                    t && (this.resolve_ = null, this.reject_ = null) } }, t.prototype.notifyObserver_ = function(t) { switch (av(this.state_)) {
                    case ov.RUNNING:
                    case ov.PAUSED:
                        null !== t.next && ib(t.next.bind(t, this.snapshot))(); break;
                    case ov.SUCCESS:
                        null !== t.complete && ib(t.complete.bind(t))(); break;
                    case ov.CANCELED:
                    case ov.ERROR:
                        null !== t.error && ib(t.error.bind(t, this.error_))(); break;
                    default:
                        null !== t.error && ib(t.error.bind(t, this.error_))() } }, t.prototype.resume = function() { Lv("resume", [], arguments); var t = this.state_ === tv || this.state_ === Zg; return t && this.transition_($g), t }, t.prototype.pause = function() { Lv("pause", [], arguments); var t = this.state_ === $g; return t && this.transition_(Zg), t }, t.prototype.cancel = function() { Lv("cancel", [], arguments); var t = this.state_ === $g || this.state_ === Zg; return t && this.transition_(nv), t }, t }(),
        ab = function() {
            function n(t, e) { this.authWrapper = t, this.location = e instanceof wv ? e : wv.makeFromUrl(e) } return n.prototype.toString = function() { return Lv("toString", [], arguments), "gs://" + this.location.bucket + "/" + this.location.path }, n.prototype.newRef = function(t, e) { return new n(t, e) }, n.prototype.mappings = function() { return Av() }, n.prototype.child = function(t) { Lv("child", [Fv()], arguments); var e, n, r = (e = this.location.path, n = t.split("/").filter(function(t) { return 0 < t.length }).join("/"), 0 === e.length ? n : e + "/" + n),
                    i = new wv(this.location.bucket, r); return this.newRef(this.authWrapper, i) }, Object.defineProperty(n.prototype, "parent", { get: function() { var t = function(t) { if (0 == t.length) return null; var e = t.lastIndexOf("/"); return -1 === e ? "" : t.slice(0, e) }(this.location.path); if (null === t) return null; var e = new wv(this.location.bucket, t); return this.newRef(this.authWrapper, e) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "root", { get: function() { var t = new wv(this.location.bucket, ""); return this.newRef(this.authWrapper, t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "bucket", { get: function() { return this.location.bucket }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "fullPath", { get: function() { return this.location.path }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "name", { get: function() { return Ev(this.location.path) }, enumerable: !0, configurable: !0 }), Object.defineProperty(n.prototype, "storage", { get: function() { return this.authWrapper.service() }, enumerable: !0, configurable: !0 }), n.prototype.put = function(t, e) { return void 0 === e && (e = null), Lv("put", [new xv(function(t) { if (!(t instanceof Uint8Array || t instanceof ArrayBuffer || gv() && t instanceof Blob)) throw "Expected Blob or File." }), Uv(!0)], arguments), this.throwIfRoot_("put"), new ob(this, this.authWrapper, this.location, this.mappings(), new Wv(t), e) }, n.prototype.putString = function(t, e, n) { void 0 === e && (e = jg.RAW), Lv("putString", [Fv(), Fv(Wg, !0), Uv(!0)], arguments), this.throwIfRoot_("putString"); var r = Qg(e, t),
                    i = uv(n); return !lv(i.contentType) && lv(r.contentType) && (i.contentType = r.contentType), new ob(this, this.authWrapper, this.location, this.mappings(), new Wv(r.data, !0), i) }, n.prototype.delete = function() { Lv("delete", [], arguments), this.throwIfRoot_("delete"); var s = this; return this.authWrapper.getAuthToken().then(function(t) { var e, n, r, i, o, a = (e = s.authWrapper, n = s.location, r = Tv(n.fullServerUrl()), i = e.maxOperationRetryTime(), (o = new Qv(r, "DELETE", function(t, e) {}, i)).successCodes = [200, 204], o.errorHandler = Yv(n), o); return s.authWrapper.makeRequest(a, t).getPromise() }) }, n.prototype.getMetadata = function() { Lv("getMetadata", [], arguments), this.throwIfRoot_("getMetadata"); var n = this; return this.authWrapper.getAuthToken().then(function(t) { var e = Xv(n.authWrapper, n.location, n.mappings()); return n.authWrapper.makeRequest(e, t).getPromise() }) }, n.prototype.updateMetadata = function(h) { Lv("updateMetadata", [Uv()], arguments), this.throwIfRoot_("updateMetadata"); var l = this; return this.authWrapper.getAuthToken().then(function(t) { var e, n, r, i, o, a, s, u, c = (e = l.authWrapper, n = l.location, r = h, i = l.mappings(), o = Tv(n.fullServerUrl()), a = Pv(r, i), s = e.maxOperationRetryTime(), (u = new Qv(o, "PATCH", zv(e, i), s)).headers = { "Content-Type": "application/json; charset=utf-8" }, u.body = a, u.errorHandler = Yv(n), u); return l.authWrapper.makeRequest(c, t).getPromise() }) }, n.prototype.getDownloadURL = function() { Lv("getDownloadURL", [], arguments), this.throwIfRoot_("getDownloadURL"); var n = this; return this.authWrapper.getAuthToken().then(function(t) { var e = Jv(n.authWrapper, n.location, n.mappings()); return n.authWrapper.makeRequest(e, t).getPromise().then(function(t) { if (null === t) throw new Og(Pg.NO_DOWNLOAD_URL, "The given file does not have any download URLs."); return t }) }) }, n.prototype.throwIfRoot_ = function(t) { if ("" === this.location.path) throw e = t, new Og(Pg.INVALID_ROOT_OPERATION, "The operation '" + e + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."); var e }, n }(),
        sb = function() {
            function t(t) { var e;
                this.promise_ = (e = t, Promise.reject(e)) } return t.prototype.getPromise = function() { return this.promise_ }, t.prototype.cancel = function(t) { void 0 === t && (t = !1) }, t }(),
        ub = function() {
            function t() { this.map_ = {}, this.id_ = -9007199254740991 } return t.prototype.addRequest = function(t) { var e = this.id_;
                this.id_++, this.map_[e] = t; var n = this;

                function r() { delete n.map_[e] }
                t.getPromise().then(r, r) }, t.prototype.clear = function() { sv(this.map_, function(t, e) { e && e.cancel(!0) }), this.map_ = {} }, t }(),
        cb = function() {
            function a(t, e, n, r, i) { if (this.bucket_ = null, this.deleted_ = !1, this.app_ = t, null !== this.app_) { var o = this.app_.options;
                    lv(o) && (this.bucket_ = a.extractBucket_(o)) }
                this.storageRefMaker_ = e, this.requestMaker_ = n, this.pool_ = i, this.service_ = r, this.maxOperationRetryTime_ = 12e4, this.maxUploadRetryTime_ = 6e4, this.requestMap_ = new ub } return a.extractBucket_ = function(t) { var e = t.storageBucket || null; return null == e ? null : wv.makeFromBucketSpec(e).bucket }, a.prototype.getAuthToken = function() { return null !== this.app_ && lv(this.app_.INTERNAL) && lv(this.app_.INTERNAL.getToken) ? this.app_.INTERNAL.getToken().then(function(t) { return null !== t ? t.accessToken : null }, function(t) { return null }) : hv(null) }, a.prototype.bucket = function() { if (this.deleted_) throw qg(); return this.bucket_ }, a.prototype.service = function() { return this.service_ }, a.prototype.makeStorageReference = function(t) { return this.storageRefMaker_(this, t) }, a.prototype.makeRequest = function(t, e) { if (this.deleted_) return new sb(qg()); var n = this.requestMaker_(t, e, this.pool_); return this.requestMap_.addRequest(n), n }, a.prototype.deleteApp = function() { this.deleted_ = !0, this.app_ = null, this.requestMap_.clear() }, a.prototype.maxUploadRetryTime = function() { return this.maxUploadRetryTime_ }, a.prototype.setMaxUploadRetryTime = function(t) { this.maxUploadRetryTime_ = t }, a.prototype.maxOperationRetryTime = function() { return this.maxOperationRetryTime_ }, a.prototype.setMaxOperationRetryTime = function(t) { this.maxOperationRetryTime_ = t }, a }(); var hb = function() {
            function t(t, e, n, r, i, o, a, s, u, c, h) { this.pendingXhr_ = null, this.backoffId_ = null, this.resolve_ = null, this.reject_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.url_ = t, this.method_ = e, this.headers_ = n, this.body_ = r, this.successCodes_ = i.slice(), this.additionalRetryCodes_ = o.slice(), this.callback_ = a, this.errorCallback_ = s, this.progressCallback_ = c, this.timeout_ = u, this.pool_ = h; var l = this;
                this.promise_ = cv(function(t, e) { l.resolve_ = t, l.reject_ = e, l.start_() }) } return t.prototype.start_ = function() { var s = this;

                function t(t, e) { var n, r = s.resolve_,
                        i = s.reject_,
                        o = e.xhr; if (e.wasSuccessCode) try { var a = s.callback_(o, o.getResponseText());
                        fv(a) ? r(a) : r() } catch (t) { i(t) } else null !== o ? ((n = Lg()).setServerResponseProp(o.getResponseText()), s.errorCallback_ ? i(s.errorCallback_(o, n)) : i(n)) : e.canceled ? i(n = s.appDelete_ ? qg() : xg()) : i(n = new Og(Pg.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.")) }
                this.canceled_ ? t(0, new lb(!1, null, !0)) : this.backoffId_ = function(e, t, n) { var r = 1,
                        i = null,
                        o = !1,
                        a = 0;

                    function s() { return 2 === a } var u = !1;

                    function c() { u || (u = !0, t.apply(null, arguments)) }

                    function h(t) { i = setTimeout(function() { i = null, e(l, s()) }, t) }

                    function l(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        u || (t ? c.apply(null, arguments) : s() || o ? c.apply(null, arguments) : (r < 64 && (r *= 2), h(1 === a ? (a = 2, 0) : 1e3 * (r + Math.random())))) } var f = !1;

                    function p(t) { f || (f = !0, u || (null !== i ? (t || (a = 2), clearTimeout(i), h(0)) : t || (a = 1))) } return h(0), setTimeout(function() { p(o = !0) }, n), p }(function(o, t) { if (t) o(!1, new lb(!1, null, !0));
                    else { var e = s.pool_.createXhrIo();
                        s.pendingXhr_ = e, null !== s.progressCallback_ && e.addUploadProgressListener(a), e.send(s.url_, s.method_, s.body_, s.headers_).then(function(t) { null !== s.progressCallback_ && t.removeUploadProgressListener(a), s.pendingXhr_ = null; var e = (t = t).getErrorCode() === Yg.NO_ERROR,
                                n = t.getStatus(); if (e && !s.isRetryStatusCode_(n)) { var r = Kv(s.successCodes_, n);
                                o(!0, new lb(r, t)) } else { var i = t.getErrorCode() === Yg.ABORT;
                                o(!1, new lb(!1, null, i)) } }) }

                    function a(t) { var e = t.loaded,
                            n = t.lengthComputable ? t.total : -1;
                        null !== s.progressCallback_ && s.progressCallback_(e, n) } }, t, this.timeout_) }, t.prototype.getPromise = function() { return this.promise_ }, t.prototype.cancel = function(t) { this.canceled_ = !0, this.appDelete_ = t || !1, null !== this.backoffId_ && (0, this.backoffId_)(!1), null !== this.pendingXhr_ && this.pendingXhr_.abort() }, t.prototype.isRetryStatusCode_ = function(t) { var e = 500 <= t && t < 600,
                    n = Kv([408, 429], t),
                    r = Kv(this.additionalRetryCodes_, t); return e || n || r }, t }(),
        lb = function(t, e, n) { this.wasSuccessCode = t, this.xhr = e, this.canceled = !!n };

    function fb(t, e, n) { var r, i, o, a, s = Cv(t.urlParams),
            u = t.url + s,
            c = uv(t.headers); return r = c, null !== (i = e) && 0 < i.length && (r.Authorization = "Firebase " + i), o = c, a = void 0 !== Mh ? Mh.SDK_VERSION : "AppManager", o["X-Firebase-Storage-Version"] = "webjs/" + a, new hb(u, t.method, c, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, n) } var pb, db = function() {
            function t(t, e, n) { if (this.bucket_ = null, this.authWrapper_ = new cb(t, function(t, e) { return new ab(t, e) }, fb, this, e), this.app_ = t, null != n) this.bucket_ = wv.makeFromBucketSpec(n);
                else { var r = this.authWrapper_.bucket();
                    null != r && (this.bucket_ = new wv(r, "")) }
                this.internals_ = new yb(this) } return t.prototype.ref = function(t) { if (Lv("ref", [Fv(function(t) { if (/^[A-Za-z]+:\/\//.test(t)) throw "Expected child path but got a URL, use refFromURL instead." }, !0)], arguments), null == this.bucket_) throw new Error("No Storage Bucket defined in Firebase Options."); var e = new ab(this.authWrapper_, this.bucket_); return null != t ? e.child(t) : e }, t.prototype.refFromURL = function(t) { return Lv("refFromURL", [Fv(function(t) { if (!/^[A-Za-z]+:\/\//.test(t)) throw "Expected full URL but got a child path, use ref instead."; try { wv.makeFromUrl(t) } catch (t) { throw "Expected valid full URL but got an invalid one." } }, !1)], arguments), new ab(this.authWrapper_, t) }, Object.defineProperty(t.prototype, "maxUploadRetryTime", { get: function() { return this.authWrapper_.maxUploadRetryTime() }, enumerable: !0, configurable: !0 }), t.prototype.setMaxUploadRetryTime = function(t) { Lv("setMaxUploadRetryTime", [qv()], arguments), this.authWrapper_.setMaxUploadRetryTime(t) }, Object.defineProperty(t.prototype, "maxOperationRetryTime", { get: function() { return this.authWrapper_.maxOperationRetryTime() }, enumerable: !0, configurable: !0 }), t.prototype.setMaxOperationRetryTime = function(t) { Lv("setMaxOperationRetryTime", [qv()], arguments), this.authWrapper_.setMaxOperationRetryTime(t) }, Object.defineProperty(t.prototype, "app", { get: function() { return this.app_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "INTERNAL", { get: function() { return this.internals_ }, enumerable: !0, configurable: !0 }), t }(),
        yb = function() {
            function t(t) { this.service_ = t } return t.prototype.delete = function() { return this.service_.authWrapper_.deleteApp(), hv(void 0) }, t }();

    function mb(t, e, n) { return new db(t, new bv, n) } return pb = { TaskState: ov, TaskEvent: Jg, StringFormat: jg, Storage: db, Reference: ab }, Mh.INTERNAL.registerService("storage", mb, pb, void 0, !0), console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the CDN builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nhttps://www.gstatic.com/firebasejs/5.0.0/firebase-<PACKAGE>.js\n"), Mh });