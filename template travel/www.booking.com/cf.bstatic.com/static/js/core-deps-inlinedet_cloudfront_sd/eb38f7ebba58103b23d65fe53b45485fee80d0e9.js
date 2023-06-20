booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.core_deps = {
        loaded: !0,
        run: !1
    }),
    function() {
        /**
         * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
         * Available via the MIT or new BSD license.
         * see: http://github.com/jrburke/almond for details
         */
        var e, t, i;
        ! function(p) {
            var o, a, d, h, v = {},
                _ = {},
                m = {},
                g = {},
                n = Object.prototype.hasOwnProperty,
                r = [].slice,
                y = /\.js$/;

            function w(e, t) {
                var n, r = B.env && B.env.b_dev_server,
                    i = (n = B.reportError) && "[object Function]" === {}.toString.call(n) && B.reportError.bind(B);
                if (r || !i) throw new Error(e);
                i({
                    message: e
                }, t)
            }

            function b(e, t) {
                return n.call(e, t)
            }

            function u(e, t) {
                var n, r, i, o, a, u, s, c, f, l, p, d = t && t.split("/"),
                    h = m.map,
                    v = h && h["*"] || {};
                if (e && "." === e.charAt(0))
                    if (t) {
                        for (d = d.slice(0, d.length - 1), a = (e = e.split("/")).length - 1, m.nodeIdCompat && y.test(e[a]) && (e[a] = e[a].replace(y, "")), e = d.concat(e), f = 0; f < e.length; f += 1)
                            if ("." === (p = e[f])) e.splice(f, 1), f -= 1;
                            else if (".." === p) {
                            if (1 === f && (".." === e[2] || ".." === e[0])) break;
                            0 < f && (e.splice(f - 1, 2), f -= 2)
                        }
                        e = e.join("/")
                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                if ((d || v) && h) {
                    for (f = (n = e.split("/")).length; 0 < f; f -= 1) {
                        if (r = n.slice(0, f).join("/"), d)
                            for (l = d.length; 0 < l; l -= 1)
                                if ((i = h[d.slice(0, l).join("/")]) && (i = i[r])) {
                                    o = i, u = f;
                                    break
                                }
                        if (o) break;
                        !s && v && v[r] && (s = v[r], c = f)
                    }!o && s && (o = s, u = c), o && (n.splice(0, u, o), e = n.join("/"))
                }
                return e
            }

            function k(t, n) {
                return function() {
                    var e = r.call(arguments, 0);
                    return "string" != typeof e[0] && 1 === e.length && e.push(null), a.apply(p, e.concat([t, n]))
                }
            }

            function E(t) {
                return function(e) {
                    v[t] = e
                }
            }

            function T(e) {
                if (b(_, e)) {
                    var t = _[e];
                    delete _[e], g[e] = !0, o.apply(p, t)
                }
                return b(v, e) || b(g, e) || w("No " + e, "almond"), v[e]
            }

            function s(e) {
                var t, n = e ? e.indexOf("!") : -1;
                return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }
            d = function(e, t) {
                var n, r, i = s(e),
                    o = i[0];
                return e = i[1], o && (n = T(o = u(o, t))), o ? e = n && n.normalize ? n.normalize(e, (r = t, function(e) {
                    return u(e, r)
                })) : u(e, t) : (o = (i = s(e = u(e, t)))[0], e = i[1], o && (n = T(o))), {
                    f: o ? o + "!" + e : e,
                    n: e,
                    pr: o,
                    p: n
                }
            }, h = {
                require: function(e) {
                    return k(e)
                },
                exports: function(e) {
                    var t = v[e];
                    return void 0 !== t ? t : v[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: v[e],
                        config: (t = e, function() {
                            return m && m.config && m.config[t] || {}
                        })
                    };
                    var t
                }
            }, o = function(e, t, n, r) {
                var i, o, a, u, s, c, f = [],
                    l = typeof n;
                if (r = r || e, "undefined" === l || "function" === l) {
                    for (t = !t.length && n.length ? ["require", "exports", "module"] : t, s = 0; s < t.length; s += 1) "require" === (o = (u = d(t[s], r)).f) ? f[s] = h.require(e) : "exports" === o ? (f[s] = h.exports(e), c = !0) : "module" === o ? i = f[s] = h.module(e) : b(v, o) || b(_, o) || b(g, o) ? f[s] = T(o) : u.p ? (u.p.load(u.n, k(r, !0), E(o), {}), f[s] = v[o]) : w(e + " missing " + o, "almond");
                    a = n ? n.apply(v[e], f) : void 0, e && (i && i.exports !== p && i.exports !== v[e] ? v[e] = i.exports : a === p && c || (v[e] = a))
                } else e && (v[e] = n)
            }, e = t = a = function(e, t, n, r, i) {
                if ("string" == typeof e) {
                    if (h[e]) return h[e](t);
                    return T(d(e, t).f)
                }
                if (!e.splice) {
                    if ((m = e).deps && a(m.deps, m.callback), !t) return;
                    t.splice ? (e = t, t = n, n = null) : e = p
                }
                return t = t || function() {}, "function" == typeof n && (n = r, r = i), r ? o(p, e, t, n) : setTimeout(function() {
                    o(p, e, t, n)
                }, 4), a
            }, a.config = function(e) {
                return a(e)
            }, e._defined = v, (i = function(e, t, n) {
                t.splice || (n = t, t = []), b(v, e) || b(_, e) || (_[e] = [e, t, n])
            }).amd = {
                jQuery: !0
            }
        }(), B.define = i, B.require = t, B.requirejs = e
    }(), "function" != typeof Function.prototype.bind && (Function.prototype.bind = function(e) {
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            r = function() {},
            i = function() {
                return n.apply(this instanceof r ? this : e || {}, t.concat(Array.prototype.slice.call(arguments)))
            };
        return r.prototype = this.prototype || {}, i.prototype = new r, i
    }), "function" != typeof Object.assign && (Object.assign = function(e) {
        "use strict";
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (null != r)
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }), "function" != typeof Object.values && (Object.values = function(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && e.propertyIsEnumerable(n) && t.push(e[n]);
        return t
    }), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.bhc = {
        loaded: !0,
        run: !1
    }),
    function(n, r) {
        "use strict";
        if (r.jstmpl) return;
        var i, a, u, o, e, t, s, c, f, l, p, d, h, v, _, m, g, y, w, b, k, E, T, A, N = [];
        o = function(e, t) {
            this.closure = e, this.name = t
        }, e = function(e) {
            var t = [];
            return f(t, e, 0), 1 === t.length ? t[0] : t.join("")
        }, s = function(e, t, n) {
            if (/^[0-9]+$/.test(e)) return e;
            if ("" === e) return null;
            return A("Attempting to use non-numeric value '" + e + "' for translation tag '" + n + "'"), 0
        }, A = function(e, t) {
            e = e || "BHCJS runtime issue", r && r.env && r.env.b_dev_server ? (t && console.warn("Template: " + t), console.error(e)) : i.error_out && n.onerror && n.onerror("JSTMPL:: " + e, t || "jstmpl", 0)
        }, c = function(e) {
            if ("string" != typeof e || -1 === e.indexOf("{")) return e;
            var t = [];
            return p(t, e, 0), 1 === t.length ? t[0] : t.join("")
        }, d = new Array(42), p = function(e, t, n) {
            var r = 0;
            for (t.length;;) {
                var i = t.indexOf("{", r);
                if (-1 === i) {
                    0 === r ? e.push(t) : e.push(t.substring(r));
                    break
                }
                i !== r && (e.push(t.substring(r, i)), r = i);
                var o = t.indexOf("}", i + 1);
                if (o === i + 1) {
                    e.push("{}"), r = o + 1;
                    continue
                }
                if (-1 === o) {
                    e.push(t.substring(r));
                    break
                }
                for (var a = i + 1; a < o; ++a) {
                    var u = t.charAt(a).toLowerCase();
                    if (!("0" <= u && u <= "9" || "a" <= u && u <= "z" || "_" == u || "/" == u || "-" == u)) break
                }
                a === o ? (f(e, t.substring(i + 1, o), n + 1), r = o + 1) : (e.push(t.substring(i, a)), r = a)
            }
        }, f = function(e, t, n) {
            if (0 < n) {
                if (42 <= n) return console.warn("Detected excessive recursion in tag sequence: %s, returning '%s'", interpolate_tags.slice(1, 42).join(" "), value), void e.push(t);
                if (t === d[n - 1]) return console.warn("Detected self-referential tag '%s', returning '%s'", value, value), void e.push(t)
            }
            d[n] = t;
            for (var r = 0, i = a.length; r < i; ++r)
                if (t in a[r]) {
                    var o = a[r][t];
                    return void("string" == typeof o && -1 !== o.indexOf("{") ? p(e, o, n + 1) : e.push(o))
                }
            if (u && t in u) return void("string" == typeof(o = u[t]) && -1 !== o.indexOf("{") ? p(e, o, n + 1) : e.push(o));
            e.push("")
        }, k = function(e) {
            for (var t = e.split(/\s/), n = 0, r = t.length; n < r; ++n) t[n] = b(t[n]);
            return t.join(" ")
        }, E = {}, o.prototype = {
            render: function(e, t) {
                e = e || {};
                var n = "";
                N.push(a), a = [{}, e];
                try {
                    n = this.closure(a)
                } catch (e) {
                    A(e, this.name)
                }
                return a = N.pop(), n
            },
            fn: {
                FILTERS: T = {},
                F: T,
                GET_VAR: e,
                GET_V: l = function(e) {
                    for (var t = 0, n = a.length; t < n; ++t)
                        if (e in a[t]) return a[t][e];
                    return ""
                },
                GET_IF_VAR: h = function(e) {
                    for (var t = 0, n = a.length; t < n; ++t)
                        if (e in a[t]) {
                            var r = a[t][e];
                            return r instanceof Array ? r.length : "0" === r ? 0 : r
                        }
                    if (u && e in u) return u[e];
                    return !1
                },
                INTERPOLATE: c,
                GET_TRANS: v = function(e, t, n, r) {
                    A("to use TMPL_TRANS/TMPL_TRANSLIST, pass 'get_trans' to setup()")
                },
                SET_VAR: _ = function(e, t) {
                    a[a.length - 2][e] = t
                },
                GET_TEXT: t = function(e, t, n) {
                    A("to use TMPL_TEXT, pass 'get_text' to setup()")
                },
                PERL_BOOL: m = function(e) {
                    return "0" === e ? "" : e ? 1 : ""
                },
                PERL_NOT: g = function(e) {
                    return "0" === e ? 1 : e ? "" : 1
                },
                PARSE_FLOAT: y = function(e) {
                    var t = parseFloat(e);
                    return isFinite(t) ? t : 0
                },
                REPEAT_ARRAY: w = function(e, t) {
                    for (var n = [], r = 0; r < t; ++r)
                        for (var i = 0, o = e.length; i < o; ++i) n.push(e[i]);
                    return n
                },
                STATIC_HOSTNAME: function(e, t, n, r) {
                    A("to use TMPL_STATIC_URL/TMPL_SCRIPT_URL, pass 'get_static_hostname' to setup()")
                },
                IS_EMPTY_OBJECT: function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                },
                MB: e,
                MC: l,
                MD: h,
                ME: v,
                MF: t,
                MG: c,
                MI: y,
                MJ: m,
                MK: g,
                ML: w,
                MN: _,
                MO: s,
                VP: function(e, t) {
                    A("to use TMPL_VAR, with N attribute, pass 'get_var_plural' to setup()")
                },
                SV: function(e) {
                    return a = e
                },
                seq: function(e, t, n) {
                    var r = [];
                    if (e = e || 0, t = t || 0, n = Math.abs(n || 1), "string" != typeof e || isNaN(e) || (e = Number(e)), "string" != typeof t || isNaN(t) || (t = Number(t)), /^[A-Za-z]$/.exec(e) || /^[A-Za-z]$/.exec(t))
                        if ((1 !== e.length || 1 !== t.length || /[a-z]/.exec(e) && !/[a-z]/.exec(t) || /[A-Z]/.exec(e) && !/[A-Z]/.exec(t)) && A("Invalid range '" + e + "'-'" + t + "' in seq()"), (e = e.charCodeAt(0)) <= (t = t.charCodeAt(0)))
                            for (; e <= t;) r.push({
                                value: String.fromCharCode(e)
                            }), e += n;
                        else
                            for (; t <= e;) r.push({
                                value: String.fromCharCode(e)
                            }), e -= n;
                    else if (e <= t)
                        for (; e <= t;) r.push({
                            value: e
                        }), e += n;
                    else
                        for (; t <= e;) r.push({
                            value: e
                        }), e -= n;
                    return r
                },
                defined: function(e) {
                    return void 0 !== e ? 1 : 0
                },
                substr: function(e, t, n) {
                    return e.substr(t, n)
                },
                sprintf: function() {
                    for (var e, t = [].slice.apply(arguments), n = t.splice(0, 1)[0]; e = t.splice(0, 1)[0];) n = n.replace(/%\w/, e);
                    return n
                },
                ucfirst: b = function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                },
                lcfirst: function(e) {
                    return e.charAt(0).toLowerCase() + e.substr(1)
                },
                ucfirstword: k,
                rand: function(e) {
                    return void 0 === e ? Math.random() : Math.random() * e
                },
                time: function() {
                    return +new Date / 1e3
                },
                in_array: function(e) {
                    for (var t = e.toString(), n = 1, r = arguments.length; n < r; ++n)
                        if (arguments[n].toString() === t) return 1;
                    return 0
                }
            }
        }, (i = function(e, t) {
            if (void 0 === t) return e in E ? E[e] : E.__no_op__;
            var n = new o(t, e);
            return E[e] = n
        }).setup = function(e) {
            var t = function(e, t) {
                if (!t) return;
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            t(o.prototype.fn, e.fn), t(o.prototype.fn.FILTERS, e.filters), "get_trans" in e && (o.prototype.fn.GET_TRANS = o.prototype.fn.ME = e.get_trans), "get_text" in e && (o.prototype.fn.GET_TEXT = o.prototype.fn.MF = e.get_text), "get_var_plural" in e && (o.prototype.fn.GET_VAR_PLURAL = o.prototype.fn.VP = e.get_var_plural), "get_static_hostname" in e && (o.prototype.fn.STATIC_HOSTNAME = e.get_static_hostname), "get_csrf_token" in e && (o.prototype.fn.CSRF_TOKEN = e.get_csrf_token), "get_date" in e && (o.prototype.fn.DATE = e.get_date), "get_helper" in e && (o.prototype.fn.HELPER = e.get_helper), "translations" in e && (u = e.translations)
        }, i.fn = o.prototype.fn, i("__no_op__", function() {
            return A("JSTMPL -> TMPL not found") || ""
        }), r.jstmpl = i
    }(window, window.booking || {}),
    function() {
        var e;
        e = function() {
            return booking.env.b_csrf_token || ""
        }, booking.jstmpl.setup({
            get_csrf_token: e
        })
    }(),
    function(i) {
        if (i.jstmpl = i.jstmpl || {
                setup: function() {
                    console.error("This is a mocked method. It's needed for client BHC templates to work, and doesn't need to work while we don't use them")
                }
            }, i.jstmpl.translations) return;
        var o, r = i.jstmpl,
            s = i.env,
            a = function(e, t, n, r) {
                var i = 0,
                    o = !(0 !== r && !r);
                if (o) {
                    if (/^[0-9]+$/.test(r)) i = parseInt(r, 10);
                    else {
                        var a = t(r);
                        /^[0-9]+$/.test(a) ? i = a : console.warn("Trying to use a non-numeric template var for exception tool on copy '%s'", e)
                    }
                    n("num", i)
                }
                if (s && s.global_translation_tags)
                    for (var u in s.global_translation_tags) t(u) || n(u, s.global_translation_tags[u]);
                return d(e, t, n, i, o)
            },
            d = function(e, t, n, r, i) {
                var o, a = e.split("/");
                ("" === a[0] && a.shift(), 1 == a.length) && ("{" === (c = a[0]).charAt(0) && "}" === c.charAt(c.length - 1) && (c = c.substr(1, c.length - 2)), a = ["private", c, "name"]);
                for (var u = 0, s = a.length; u < s; ++u) {
                    "[" === (c = a[u]).charAt(0) && "]" === c.charAt(c.length - 1) && (a[u] = t(c.substr(1, c.length - 2)) + "")
                }
                for (u = 0, s = a.length; u < s; ++u) {
                    var c;
                    "{" === (c = a[u]).charAt(0) && "}" === c.charAt(c.length - 1) && (a[u] = t(c.substr(1, c.length - 2)))
                }
                if (o = h(a[0], a[1], a[2]), i && (o = v(a, r) || o), o) {
                    var f = o.match(/{.*?}/g);
                    if (!f) return o;
                    for (u = 0, s = f.length; u < s; ++u) {
                        var l, p = f[u];
                        l = -1 === p.indexOf("/") ? t(p.substr(1, p.length - 2)) : d(p.substr(1, p.length - 2), t, n, r, i), o = o.split(p).join(l)
                    }
                }
                return o || ""
            },
            h = function(e, t, n) {
                if ("private" === e) {
                    var r = (o && o.private || {})[t];
                    return r && "string" != typeof r && r.experiment_hash && r.value && (i.et && i.et.stage(r.experiment_hash, 1), i.et && i.et.stage(r.experiment_hash, 2), r = r.value), r
                }
                return ((o && o[e] || {})[t] || {})[n || "name"]
            },
            v = function(e, t) {
                var n = "",
                    r = "language_exception_" + e[1] + "_";
                "private" !== e[0] && (n = "_" + e[2]);
                var i = [t];
                if (100 <= t) {
                    var o = t % 100;
                    o < 10 && i.push("*0"), i.push("*" + o)
                }
                10 <= t && i.push("*" + t % 10);
                for (var a = 0, u = i.length; a < u; ++a) {
                    var s = h(e[0], r + i[a] + n, e[2]);
                    if (s) return s
                }
                return ""
            },
            e = function(e, t, n) {
                if (n) throw "Can't use TMPL_TEXT on client-side templates";
                return a(e, r.fn.GET_VAR, r.fn.SET_VAR, t)
            };
        r.setup({
            get_trans: a,
            get_var_plural: e,
            get_text: e
        });
        r.translations = function(e, t, n) {
            var r = function(n) {
                n = n || {};
                return {
                    gv: function(e) {
                        return void 0 !== n[e] ? n[e] : ""
                    },
                    sv: function(e, t) {
                        n[e] = t
                    }
                }
            }(n);
            return a(e, r.gv, r.sv, t)
        }, r.translations.set = function(e) {
            return e && (o = e, r.setup({
                translations: e.private || {}
            })), o
        }
    }(window.booking || {}),
    function() {
        if (booking.jstmpl.fn.track_experiment) return;
        var e, t, n, r;
        e = function(e) {
            return booking.et.track(e)
        }, n = function(e, t) {
            return booking.et.stage(e, t)
        }, t = function(e) {
            return booking.et.track(e)
        }, r = function(e, t) {
            return booking.et.customGoal(e, t)
        }, booking.jstmpl.setup({
            fn: {
                track_experiment: e,
                track_experiment_stage: n,
                experiment_variant: t,
                track_custom_goal: r
            }
        })
    }(),
    function(t) {
        "use strict";
        if (!t.jstmpl) return;
        var n, r, i, o, a, u, e, s, c, f, l, p, d, h, v, _, m, g, y, w, b, k, E, T = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
            },
            A = {
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "'": "\\'",
                '"': '\\"',
                "<": "\\u003c",
                ">": "\\u003e",
                "\\": "\\\\",
                "&#39;": "&#39;",
                "&quot;": "&quot;"
            },
            N = {
                ">": "\\u003e",
                "<": "\\u003c"
            };
        r = function(e) {
            return T[e]
        }, n = function(e) {
            return String(e).replace(/&(?!amp;|lt;|gt;|quot;|#39;|#47;)/g, "&amp;").replace(/[<>"'\/]/g, r)
        }, o = function(e, t) {
            return "\n<br />" + (t ? "\n<br />" : "")
        }, i = function(e) {
            return e.replace(/(?:\r?\n)((?:\r?\n)*)/, o)
        }, u = function(e, t) {
            return t ? "</p>\n<p>" : "\n<br />"
        }, a = function(e) {
            return e.replace(/(?:\r?\n)((?:\r?\n)*)/, u)
        }, s = function(e) {
            return i(g(e))
        }, e = function(e) {
            return i(n(e))
        }, c = function(e) {
            return "<p>" + a(n(e)) + "</p>"
        }, f = function(e) {
            return "<p>" + a(String(e)) + "</p>"
        }, p = function(e) {
            return A[e]
        }, l = function(e) {
            return String(e).replace(/([\b\f\n\r\t'"\\<>]|&quot;|&#39;)/g, p)
        }, d = function(e) {
            return t.jstmpl.fn.PERL_BOOL(e) ? "true" : "false"
        }, h = function(e) {
            return null == e ? "" : "'" + l(e) + "'"
        }, v = function(e) {
            return encodeURIComponent(e).replace(/[!'()]/g, escape).replace(/\*/g, "%2A")
        }, _ = function(e) {
            return String(e).replace(/ /g, "")
        }, m = function(e) {
            return String(e).replace(/\n/g, "<br />")
        }, b = function(e) {
            return e in T ? T[e] : "&#" + e.charCodeAt(0) + ";"
        }, g = function(e) {
            return String(e).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f&<>"'\/\u00A0-\u9999<>]/g, b)
        }, k = function(e) {
            return String(e).replace(/^\s+|\s+$/g, "")
        }, w = function(e) {
            return N[e]
        }, y = function(e) {
            return JSON.stringify(e).replace(/[<>]/g, w)
        }, E = function(e) {
            return e
        }, t.jstmpl.setup({
            filters: {
                html: n,
                text2entities: s,
                text2html: e,
                text2para: c,
                html2para: f,
                js: l,
                jsbool: d,
                jsstr: h,
                url: v,
                nospace: _,
                br: m,
                entities: g,
                json: y,
                trim: k,
                maybexss: E
            }
        })
    }(window.booking || {}),
    function(s) {
        "use strict";
        if (!s.jstmpl) return;
        var c, e, t, n, r, i, o, a, u, f, l;
        c = function(e) {
            var t, n, r = 0;
            if (!e || 0 === e.length) return r;
            for (t = 0, n = e.length; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
            return r
        }, e = function(e, t, n, r) {
            var i = "",
                o = n ? "" : document.location.protocol;
            if (e && !/https?:/.test(e.toString()))
                if (s && s.env && s.env.static_hostnames && s.env.static_hostnames.length)
                    if (1 === s.env.static_hostnames.length) i = s.env.static_hostnames[0];
                    else {
                        var a = c(e.toString()),
                            u = Math.abs(a) % s.env.static_hostnames.length;
                        i = s.env.static_hostnames[u]
                    }
            else i = o + "//q.bstatic.com";
            return n && (i = i.replace(/^https?:/, "")), i + e
        }, i = function(e) {
            return Array.isArray(e) ? e.length : 0
        }, t = function(e, t, n, r, i) {
            var o = B.require("utils/string-interpolate"),
                a = B.require("formatting/date").locale_format;
            if (!e) return ""; - 1 != e.indexOf("T") && 3 == e.split(":").length && (e = e.substr(0, e.lastIndexOf(":")).replace("T", " "));
            var u = e.split(" ").slice(0, 2),
                s = (i || "").split(" ").slice(0, 2);
            return o(a({
                date: u[0],
                time: u[1],
                date_until: s[0],
                time_until: s[1],
                format: t
            }), {
                begin_marker: n,
                end_marker: r
            })
        }, o = function(e) {
            return s.jstmpl.fn && s.jstmpl.fn.FILTERS && s.jstmpl.fn.FILTERS.html ? s.jstmpl.fn.FILTERS.html(e) : ""
        }, a = function(e) {
            return s.jstmpl.fn && s.jstmpl.fn.FILTERS && s.jstmpl.fn.FILTERS.entities ? s.jstmpl.fn.FILTERS.entities(e) : ""
        }, r = function(e, t, n) {
            if ("string" == typeof e && "string" == typeof t) return e.indexOf(t, n || 0);
            return -1
        }, u = function(e, n) {
            var t = n.height,
                r = n.width,
                i = n.class,
                o = n.size,
                a = e.replace(/\//g, "-"),
                u = document.querySelector(".bk-icon.-" + a);
            if (!e || !n || !u) return "";
            if (i = "bk-icon -" + a + (i ? " " + i : ""), "IMG" === u.tagName) return '<img src="' + u.src + '" class="' + i + ' -fallback" />';
            o && (t = r = {
                largest: 32,
                larger: 24,
                large: 20,
                medium: 16,
                small: 14,
                smaller: 12
            }[o]);
            var s = u.getAttribute("viewBox");
            s || (s = document.getElementById("icon-" + a).getAttribute("viewBox"));
            var c = s.split(" "),
                f = parseInt(c[2] - c[0], 10),
                l = parseInt(c[3] - c[1], 10);
            t && !r ? r = Math.floor(t / (l / f)) : r && !t && (t = Math.floor(r / (f / l))), Object.assign(n, {
                width: r || f,
                height: t || l,
                viewBox: s,
                class: i
            });
            var p = {
                    color: "fill"
                },
                d = Object.keys(n).reduce(function(e, t) {
                    return e + " " + (p[t] || t) + '="' + n[t] + '"'
                }, ""),
                h = u.innerHTML;
            if (!h && void 0 !== typeof XMLSerializer) {
                var v = new XMLSerializer;
                h = "";
                for (var _ = u.childNodes, m = 0; m < _.length; m++) h += v.serializeToString(_[m])
            }
            return "<svg " + d + ">" + h + "</svg>"
        }, f = function(e, t, n, r) {
            try {
                return u(e, {
                    width: t,
                    height: n,
                    class: r
                })
            } catch (e) {
                if (window.B && B.env.b_dev_server) throw e;
                return ""
            }
        }, n = function(e, t) {
            switch (e) {
                case "icon":
                    var n = t.name;
                    return delete t.name, u(n, t);
                default:
                    throw new Error("unkown TMPL_HELPER " + e)
            }
        }, l = function() {
            return B.env.is_rooms_table_splitter
        };
        var p = function(e) {
            if (!Array.isArray) return "[object Array]" === Object.prototype.toString.call(e);
            return Array.isArray(e)
        };
        s.jstmpl.setup({
            get_static_hostname: e,
            get_date: t,
            get_helper: n,
            fn: {
                escape_html: o,
                escape_entities: a,
                array_length: i,
                index: r,
                icon: f,
                is_rooms_table_splitter: l,
                floor: function(e) {
                    return Math.floor(e)
                },
                is_arrayref: p,
                is_hashref: function(e) {
                    return "object" == typeof e && !p(e) && !!e
                }
            }
        })
    }(window.booking),
    function(e) {
        if (!e.jstmpl) return;
        e.jstmpl.error_out = 1
    }(window.booking), window.booking && booking.define && booking.jstmpl && (booking.define("jstmpl", function() {
        return booking.jstmpl
    }), booking.define("jstmpl-translations", function() {
        return booking.require("jstmpl").translations
    })), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.bhc.run = !0),
    function(e, t) {
        e("tmpl_data", [], function() {
            "use strict";
            var u = {};

            function s(e, t, n) {
                void 0 === u[e] ? u[e] = t : (u.b_dev_server && console.warn("SERVER::Trying to override " + e + " with value: " + t), n && (u[e] = t))
            }

            function e(e, t) {
                if (t) s(e, t);
                else {
                    if ("string" == typeof e) return u[e];
                    if ("object" != typeof e) return Object.keys(u).reduce(function(e, t) {
                        return e[t] = u[t], e
                    }, {});
                    if (e.slice) {
                        for (var n, r = {}, i = 0, o = e.length; i < o; ++i) r[n = e[i]] = u[n];
                        return r
                    }
                    for (var a in e) e.hasOwnProperty(a) && s(a, e[a])
                }
            }
            return e.reset = function(e) {
                for (var t in e) e.hasOwnProperty(t) && s(t, e[t], !0)
            }, e
        })
    }(B.define, B.require),
    function(e, t) {
        e("request_info", [], function() {
            "use strict";
            var n, r = {},
                i = "";

            function t() {
                var e, t = i;
                i = Object.keys(r).join(","), (n || (n = document.getElementById("req_info"))) && (n.innerHTML !== t && (e = n.innerHTML, r = e.split(",").reduce(function(e, t) {
                    return e[t] = !0, e
                }, r), i = Object.keys(r).join(",")), n.innerHTML = i)
            }

            function o(e) {
                r[e] = !0
            }
            return {
                populate: function(e) {
                    o(e), "string" == typeof e ? (o(e), t()) : e instanceof Array && (e.forEach(o), t())
                }
            }
        })
    }(B.define, B.require),
    function() {
        var e, n;
        B.define("et", function() {
            return B.et
        }), e = B.define, n = B.require, e("et_debug", [], function() {
            var t, r = B.env.b_dev_server && B.env.et_debug_level ? parseInt(B.env.et_debug_level, 10) : 0;

            function i() {
                try {
                    if (!t) {
                        var e = n("event-emitter");
                        t = new e("et", {
                            async: !0
                        })
                    }
                    return t
                } catch (e) {
                    return r && console.log("Error when trying to init et event emitter", "error:", e), null
                }
            }
            return {
                level: r,
                events: {
                    UNABLE_TO_STRINGIFY: "unable_to_stringify",
                    INIT_BEACON: "init_beacon",
                    DEFER_BEACON: "defer_beacon",
                    SEND_BEACON: "send_beacon",
                    BEACON_SENT: "beacon_sent",
                    TRACK_UNKNOWN_ITEM: "track_unknown_item",
                    SHOULD_TRACK: "should_track",
                    TRACKING_ATTEMPT: "tracking_attempt",
                    NOT_TRACKING_WAS_TRACKED: "not_tracking_was_tracked",
                    NOT_TRACKING_FULLON: "not_tracking_fullon",
                    NOT_TRACKING_NOT_RUNNING: "not_tracking_not_running",
                    ADD_EVENT_LISTENER: "add_event_listener",
                    NOT_EXISTING_ELEMENT_WONT_ADD_LISTENER: "not_existing_element_wont_add_listener",
                    ADD_DEBOUNCED_VIEW_HANDLER: "add_view_handler",
                    ATTACH_VIEW_LISTENER: "attach_view_listener",
                    DETACH_VIEW_LISTENER: "detach_view_listener",
                    CHECK_IF_VISIBLE: "check_if_visible",
                    ONVIEW_TRACKING_TRIGGERED: "onview_tracking_triggered",
                    VISIBLE_CHECK_FINISHED: "visible_check_finished",
                    WONT_ATTACH_EVENT_TRACKING: "wont_attach_event_tracking"
                },
                report: function(t, n) {
                    try {
                        var e = i();
                        e.trigger.apply(e, [].slice.call(arguments))
                    } catch (e) {
                        r && console.log("Error when trying to report et event", t, n, "error:", e)
                    }
                },
                getEventEmitter: i
            }
        }), B.require(["et", "et_debug"], function(e, t) {
            e.registerDebug(t)
        })
    }(), B.define("env", function(e, t, n) {
        var r = "benv/env.js is deprecated, use server-data instead";
        if (B.reportError({
                message: r
            }, "benv"), B.env && B.env.b_dev_server) throw new Error(r);
        return B.env
    }), B.define("server-data", function(e, t, n) {
        return B.env
    }), B.define("utils/string-interpolate", function(e, t, n) {
        n.exports = function(e, r) {
            return e.replace(/{([^{}]*)}/g, function(e, t) {
                var n = r[t];
                return "string" == typeof n || "number" == typeof n ? n : e
            })
        }
    }), B.define("utils/string-pad", function(e, t, n) {
        function r(e, t, n, r) {
            var i = (t || 2) - e.toString().length + 1;
            if (i <= 0) return e;
            var o = new Array(i).join(n || "0");
            return r ? e + o : o + e
        }(r.left = r).right = function(e, t, n) {
            return r(e, t, n, !0)
        }, n.exports = r
    }), B.define("formatting/date", function(e, a, t) {
        var f = B.env.b_date_format,
            l = B.env.b_month_for_formatted_date,
            p = B.env.b_weekday_formatted_date,
            d = B.require("utils/string-interpolate");

        function c(e) {
            return (e < 10 ? "0" : "") + e
        }
        p[0] = p[7], a.format = function(e, t) {
            if (!e || void 0 === e.year || void 0 === e.month || void 0 === e.day) throw new Error("formatting/date: invalid date provided");
            if (!t) throw new Error("formatting/date: invalid format provided");
            if (e.year = +e.year, e.month = +e.month, e.day = +e.day, isNaN(e.year) || isNaN(e.month) || isNaN(e.day)) throw new Error("formatting/date: invalid date provided");
            var n = f[t] || t,
                r = new Date(Date.UTC(e.year, e.month, e.day, e.hours || 0, e.minutes || 0)),
                i = r.getUTCMonth() + 1,
                o = r.getUTCDate(),
                a = l[i],
                u = p[r.getUTCDay()],
                s = {
                    weekday: u.name,
                    short_weekday: u.short,
                    day_of_month: o,
                    zero_padded_day_of_month: c(o),
                    month: i,
                    month_name_with_year_only: a.name_with_year_only,
                    zero_padded_month: c(i),
                    month_name: a.name,
                    short_month_name: a.short_name,
                    full_year: r.getUTCFullYear(),
                    time: c(r.getUTCHours()) + ":" + c(r.getUTCMinutes())
                };
            return d(n, s)
        }, a.compat = function(e, t) {
            var n;
            if (e instanceof Date) n = e;
            else if (e && e.indexOf && -1 === e.indexOf(":") && (e += " 00:00"), (n = !isNaN(Date.parse(e)) && new Date(e)) || null == e || (e = e.replace(/-/g, "/"), n = !isNaN(Date.parse(e)) && new Date(e)), !n) return !1;
            t = t || "short_date", e = a.breakdown(n);
            try {
                return a.format(e, t)
            } catch (e) {
                return !1
            }
        };
        var h = /^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}).*/;
        a.locale_format = function(e) {
            var t = "object" == typeof e ? e.date : e,
                n = e.time,
                o = e.date_until,
                r = e.time_until;
            if (!t) throw new Error("formatting/date: no date provided");
            if (!(t = t.replace(h, function(e, t) {
                    return t
                })).match(h)) throw new Error("formatting/date: invalid date provided — " + t);
            if (o && !(o = o.replace(h, function(e, t) {
                    return t
                })).match(h)) throw new Error("formatting/date: invalid date_until provided — " + o);
            var i = e.format || "short_date";
            if (!f[i]) return "";
            var a = t.split(/-0*/),
                u = o ? o.split(/-0*/) : void 0,
                s = {};
            if (n) {
                var c = B.require("formatting/time").locale_format;
                s.time = n ? c(n) : "", s.time_until = r ? c(r) : ""
            }
            return [a].concat(o ? [u] : []).forEach(function(n, r) {
                var e = (r ? o : t).split(/-0*/),
                    i = {
                        month_name: l[parseInt(n[1], 10)],
                        weekday: p[new Date(Date.UTC(+e[0], +e[1] - 1, +e[2], 0, 0, 0, 0)).getUTCDay()]
                    };
                ["full_year", "month", "day_of_month"].forEach(function(e, t) {
                    s[e + (r ? "_until" : "")] = n[t]
                }), ["%", "%_nom", "%_in", "%_from", "%_to", "short_%"].forEach(function(t) {
                    Object.keys(i).forEach(function(e) {
                        s[(t + (r ? "_until" : "")).replace("%", e)] = i[e]["%" === t[0] || "month_name" === e ? t.replace("%", "name").replace(/_nom$/, "_only") : "short"]
                    })
                }), r || (s.month_name_with_year_only = l[parseInt(n[1], 10)].name_with_year_only)
            }), d(f[i], s)
        }, a.add_days = function(e, t, n) {
            if (!e || isNaN(t)) return e;
            var r = new Date(e),
                i = new Date(r.setDate(r.getDate() + t)),
                o = n || "{full_year}-{zero_padded_month}-{zero_padded_day_of_month}";
            return a.format(a.breakdown(i), o)
        }, a.breakdown = function(e) {
            return {
                year: e.getFullYear(),
                month: e.getMonth(),
                day: e.getDate(),
                hours: e.getHours(),
                minutes: e.getMinutes()
            }
        }, a.stringify = function(e) {
            return a.format(a.breakdown(e), "{full_year}-{zero_padded_month}-{zero_padded_day_of_month} {time}")
        }
    }), B.define("formatting/time", function(e, t, n) {
        var r = B.env.b_time_format,
            i = B.require("utils/string-interpolate"),
            o = B.require("utils/string-pad");
        return {
            locale_format: function(e) {
                var t, n = {};
                if (!(e = "object" != typeof e ? {
                        time: e
                    } : e).time) throw new Error("formatting/time: no time provided");
                if (e.until = e.until || !1, e.no_html = e.no_html || !0, e.time.match(/^(?:([0-2]?[0-9])[.: -]?([0-5]?[0-9]))$/).slice(1).forEach(function(e, t) {
                        n[t ? "minutes" : "hour"] = e.replace(/^0/, "") || 0
                    }), 12 < Math.abs(n.hour - 12) || 30 < Math.abs(n.minutes - 30)) throw new Error("formatting/time: invalid time provided — " + e.time);
                return n.hour = n.hour % 24, n.hour_24h_no0 = n.hour, n.hour_24h = o(n.hour), n.hour_24h_show24_no0 = n.minutes || n.hour ? n.hour_24h_no0 : 24, n.hour_24h_show24 = o(n.hour_24h_show24_no0), n.hour_24h_until24_no0 = n[e.until ? "hour_24h_show24_no0" : "hour_24h_no0"], n.hour_24h_until24 = o(n.hour_24h_until24_no0), n.hour_12h_no0 = n.hour % 12 || 12, n.hour_12h = o(n.hour_12h_no0), n.minutes_no0 = n.minutes, n.minutes = o(n.minutes_no0), n.AM_PM = r[(n.hour < 12 ? "AM" : "PM") + "_symbol"].name, t = i(r.time.name, n).trim(), e.no_html ? t.replace(/\s/g, "&nbsp;") : t
            }
        }
    }), B.define("event-emitter", function(e, t, r) {
        (function() {
            var l = Array.prototype.slice,
                o = "function" == typeof setImmediate,
                n = 0;

            function a(e) {
                e || (e = {});
                var t = this._events = {
                    events: {},
                    listening: [],
                    context: e.context,
                    count: 0,
                    name: e.name || ++n
                };
                if (e.debug && (t.debug = !0, t.last = {
                        time: 0,
                        eventCount: 0
                    }), e.strict && (t.strict = !0, t.strictKeys = e.events, !e.events)) throw new Error("No events defined for emitter " + t.name);
                e.async && (this.emitSync = this.emit, this.emit = this.emitNext, t.async = !0)
            }

            function p(e, t, n) {
                var r = e._events;
                if (r.strict && r.strictKeys.hasOwnProperty(n)) return;
                var i = new Error(t + "(): event '" + n + "' has not been registered for emitter " + r.name);
                throw i.emitter = e, i
            }
            a.prototype.addListener = function(e, t, n) {
                var r = this._events;
                if (null == e) throw new Error("addListener(name, fn, context): name cant be " + e);
                return r.strict && p(this, "addListener", e), (r.events[e] || (r.events[e] = [])).push(n ? {
                    fn: t,
                    context: n
                } : t), this
            }, a.prototype.once = function(t, n) {
                this._events.strict && p(this, "once", t);
                var r = this,
                    i = !1;
                return this.addListener(t, function e() {
                    i || (i = !0, n.apply(this, arguments), r.removeListener(t, e))
                })
            }, a.prototype.removeListener = function(e, t) {
                (a = this._events).strict && p(this, "removeListener", e);
                var n = this._events.events[e];
                if ("*" === e)
                    if (t)
                        for (var r in a.events) a.events.hasOwnProperty(r) && this.removeListener(r, t);
                    else a.events = {};
                else if (t && n) {
                    for (var i = l.call(n, 0), o = 0; o < i.length; o++) {
                        var a = a;
                        !i[o] || i[o] !== t && i[o].fn !== t || n.splice(o, 1)
                    }
                    0 === n.length && delete a.events[e]
                } else delete a.events[e];
                return this
            }, a.prototype.emit = function(e) {
                var t = this._events;
                if (null == e) throw new Error("emit(name): name cant be " + e);
                t.strict && p(this, "emit", e), t.debug && this.tick();
                var n = t.events[e];
                if (!n) return this;
                n = l.call(n, 0);
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.context || t._context || this,
                        a = i.fn || i,
                        u = arguments.length;
                    if (this.emitCallAsJQ) {
                        var s = arguments[1] instanceof Array ? [0].concat(arguments[1]) : arguments;
                        switch (u = s.length) {
                            case 1:
                                a.call(o);
                                break;
                            case 2:
                                a.call(o, null, s[1]);
                                break;
                            case 3:
                                a.call(o, null, s[1], s[2]);
                                break;
                            default:
                                (f = new Array(u))[0] = null;
                                for (var c = 1; c < u; c++) f[c] = s[c];
                                a.apply(o, f)
                        }
                    } else switch (u) {
                        case 1:
                            a.call(o);
                            break;
                        case 2:
                            a.call(o, arguments[1]);
                            break;
                        case 3:
                            a.call(o, arguments[1], arguments[2]);
                            break;
                        default:
                            var f = new Array(u - 1);
                            for (c = 1; c < u; c++) f[c - 1] = arguments[c];
                            a.apply(o, f)
                    }
                }
                return this
            }, a.prototype.emitNext = function(e) {
                this._events.strict && p(this, "emitNext", e);
                var t, n, r, i = (t = a.prototype.emit, n = this, r = arguments, function() {
                    return t.apply(n, r)
                });
                return o ? setImmediate(i) : setTimeout(i, 0)
            }, a.prototype.tick = function() {
                var e = this._events,
                    t = +new Date,
                    n = e.last;
                e.count++, 5e3 < t - n.time && (e.rate = Math.floor((e.count - n.count) / (t - n.time) / 1e3), e.last = {
                    time: t,
                    count: e.count
                })
            }, a.prototype.proxy = function(t, n) {
                var r = this;
                return function() {
                    var e = l.call(arguments, 0);
                    "function" == typeof n && (e = n.apply(null, e)), e.unshift(t), r.emit.apply(r, e)
                }
            }, a.extend = function(e, t) {
                a.call(e, t);
                var n = a.prototype;
                for (var r in n) {
                    if (!n.hasOwnProperty(r)) continue;
                    e[r] = n[r]
                }
                return e
            }, a.create = function(e) {
                return new a(e)
            };
            var e = {
                on: "addListener",
                off: "removeListener",
                trigger: "emit",
                one: "once",
                bind: "addListener",
                unbind: "removeListener",
                triggerHandler: "emit"
            };
            for (var t in e) {
                if (!e.hasOwnProperty(t)) continue;
                a.prototype[t] = a.prototype[e[t]]
            }
            void 0 !== r && r.exports ? r.exports = a : "function" == typeof define ? define("Evy", function() {
                return a
            }) : this.Evy = a
        }).call(this)
    }), B.define("events", function(e, t, n) {
        var r = e("event-emitter"),
            i = new r;
        return i.Emitter = r, i
    }), B.define("jquery", function() {
        return window.jQuery || window.$
    }), B.define("promise", function(e, t, l) {
        "undefined" == typeof Promise ? function(e) {
            var t = o.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
                setTimeout(e, 1)
            };

            function n(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            var r = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };

            function o(e) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = null, this._value = null, this._deferreds = [], f(e, n(i, this), n(u, this))
            }

            function a(n) {
                var r = this;
                if (null === this._state) return void this._deferreds.push(n);
                t(function() {
                    var e, t = r._state ? n.onFulfilled : n.onRejected;
                    if (null === t) return void(r._state ? n.resolve : n.reject)(r._value);
                    try {
                        e = t(r._value)
                    } catch (e) {
                        return void n.reject(e)
                    }
                    n.resolve(e)
                })
            }

            function i(e) {
                try {
                    if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var t = e.then;
                        if ("function" == typeof t) return void f(n(t, e), n(i, this), n(u, this))
                    }
                    this._state = !0, this._value = e, s.call(this)
                } catch (e) {
                    u.call(this, e)
                }
            }

            function u(e) {
                this._state = !1, this._value = e, s.call(this)
            }

            function s() {
                for (var e = 0, t = this._deferreds.length; e < t; e++) a.call(this, this._deferreds[e]);
                this._deferreds = null
            }

            function c(e, t, n, r) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
            }

            function f(e, t, n) {
                var r = !1;
                try {
                    e(function(e) {
                        if (r) return;
                        r = !0, t(e)
                    }, function(e) {
                        if (r) return;
                        r = !0, n(e)
                    })
                } catch (e) {
                    if (r) return;
                    r = !0, n(e)
                }
            }
            o.prototype.catch = function(e) {
                return this.then(null, e)
            }, o.prototype.then = function(n, r) {
                var i = this;
                return new o(function(e, t) {
                    a.call(i, new c(n, r, e, t))
                })
            }, o.all = function() {
                var u = Array.prototype.slice.call(1 === arguments.length && r(arguments[0]) ? arguments[0] : arguments);
                return new o(function(r, i) {
                    if (0 === u.length) return r([]);
                    var o = u.length;

                    function a(t, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n) return void n.call(e, function(e) {
                                    a(t, e)
                                }, i)
                            }
                            u[t] = e, 0 == --o && r(u)
                        } catch (e) {
                            i(e)
                        }
                    }
                    for (var e = 0; e < u.length; e++) a(e, u[e])
                })
            }, o.resolve = function(t) {
                if (t && "object" == typeof t && t.constructor === o) return t;
                return new o(function(e) {
                    e(t)
                })
            }, o.reject = function(n) {
                return new o(function(e, t) {
                    t(n)
                })
            }, o.race = function(i) {
                return new o(function(e, t) {
                    for (var n = 0, r = i.length; n < r; n++) i[n].then(e, t)
                })
            }, void 0 !== l && l.exports ? l.exports = o : e.Promise || (e.Promise = o)
        }(this) : l.exports = Promise
    }), B.define("when/core", function(p, e, t) {
        var d = p("promise"),
            h = {};

        function n(e) {
            if ("object" != typeof e) throw new Error("B.when: expecting an object as argument");
            var n, r, i, o, a, u, s, c, f = {
                    conditions: {}
                },
                t = (n = e, r = f, i = [], o = [], Object.keys(n).map(function(e) {
                    var t = h[e];
                    if (!t || "function" != typeof t.handler) throw new Error("B.when: " + e + " is not a valid condition");
                    !0 === t.defer ? o.push({
                        key: e,
                        value: n[e]
                    }) : i.push(t.handler.call(null, n[e], r)), r.conditions[e] = n[e]
                }), {
                    resolved: i,
                    deferred: o
                }),
                l = d.all(t.resolved).then(function(e) {
                    if (!e.every(Boolean)) return s && s.call(f);
                    if (!t.deferred.map(function(e) {
                            return h[e.key].handler.call(null, e.value, f)
                        }).every(Boolean)) return s && s.call(f);
                    "function" == typeof a && B.require(u || ["require"], a.bind(f))
                }).catch(function(e) {
                    if ("function" == typeof s) return s.call(f, e);
                    setTimeout(function() {
                        throw e
                    }, 0)
                });
            return l.run = function(e, t) {
                "function" == typeof a ? c = e : a = e || function() {}, s = t
            }, l.load = function(t) {
                return a = function() {
                    var e = p("async-loader").load(t);
                    "function" == typeof c && e.then(function() {
                        B.require([], c.bind(f))
                    }, function() {})
                }, {
                    run: l.run
                }
            }, l.require = function(e, t, n) {
                a = t, u = e, s = n
            }, l
        }
        n.add = function(e, t) {
            if ("string" == typeof e) h[e] = {
                name: e,
                handler: t
            };
            else {
                var n = e;
                h[n.name] = n
            }
        }, t.exports = n
    }),
    function() {
        var a = !1,
            u = !1,
            s = B.require("events"),
            c = B.require("jquery");
        c(window).on("load", function() {
            a = !0, s.trigger("load")
        }), c(function() {
            u = !0, s.trigger("ready")
        }), B.define("when/events", function(e, t, n) {
            var i = e("promise"),
                o = e("when/events-view");
            n.exports = {
                name: "events",
                handler: function(e) {
                    var n, r = function(e) {
                        var t, n, r, i, o, a = "string" == typeof e ? [e] : e,
                            u = [];
                        for (i = 0, r = a.length; i < r; ++i) t = !1, -1 < (o = (n = a[i]).indexOf(" ")) && (t = n.slice(o + 1), n = n.slice(0, o)), u.push({
                            evt: n,
                            node: t
                        });
                        return u
                    }(e);
                    return new i(function(e) {
                        function t() {
                            e(!0)
                        }
                        for (; r.length;) switch (n = r.pop(), !0) {
                            case "view" === n.evt && !!n.node:
                                o(n.node, t);
                                break;
                            case !!n.node:
                                c(n.node).one(n.evt, t);
                                break;
                            case "ready" === n.evt && u:
                            case "load" === n.evt && a:
                                t();
                                break;
                            default:
                                s.on(n.evt, t)
                        }
                    })
                }
            }
        })
    }(), B.define("when/events-view", function(e, t, n) {
        var o = e("jquery"),
            r = 100,
            a = 20,
            u = [],
            s = o(window),
            c = !1,
            i = !1;

        function f(e) {
            var t = s.scrollTop(),
                n = e[0],
                r = s.height(),
                i = n.offset(),
                o = e[3] || a;
            if (i && t + r > i.top + o && n.is(":visible")) return e[1].call(e[2], n), !1;
            return !0
        }

        function l() {
            if (i) return;
            i = !0, (u = u.filter(f)).length || (s.off("scroll", l), s.off("resize", l), c = !1), setTimeout(function() {
                i = !1
            }, r)
        }
        n.exports = function(e, t, n, r) {
            var i;
            if (!o(e).length || "function" != typeof t) return;
            f(i = [o(e), t, n || this, r]) && u.push(i), !c && u.length && (s.on("scroll", l), s.on("resize", l), c = !0)
        }
    }), B.define("when/click", function(e, t, n) {
        var r = e("promise"),
            i = e("jquery");
        n.exports = {
            name: "click",
            handler: function(t) {
                return new r(function(e) {
                    i(function() {
                        i(t).on("click", e)
                    })
                })
            }
        }
    }), B.define("when/hover", function(e, t, n) {
        var r = e("promise"),
            a = e("jquery");
        n.exports = {
            name: "hover",
            handler: function(o) {
                var e, t;
                return t = (e = o).match(/^(\d+)(\w+)?\s(.*)/), o = {
                    delay: t ? "s" === t[2] ? 1e3 * t[1] : t[1] : 0,
                    selector: t ? t[3] : e
                }, new r(function(i) {
                    a(o.selector).each(function() {
                        var e = a(this),
                            t = null,
                            n = function() {
                                t = setTimeout(function() {
                                    e.unbind("mouseenter", n), e.unbind("mouseleave", r), i(!0)
                                }, +o.delay)
                            },
                            r = function() {
                                clearTimeout(t)
                            };
                        e.bind("mouseenter.when-hover", n), e.bind("mouseleave.when-hover", r)
                    })
                })
            }
        }
    }), B.define("when/ready", function(e, t, n) {
        var r = e("jquery"),
            i = e("events"),
            o = !1;
        r(function() {
            o = !0, i.trigger("when:ready")
        }), n.exports = {
            name: "ready",
            handler: function() {
                return o || new Promise(function(e) {
                    i.on("when:ready", e)
                })
            }
        }
    }), B.define("when/load", function(e, t, n) {
        var r = e("promise"),
            i = e("events"),
            o = e("jquery"),
            a = "complete" === document.readyState;
        o(window).on("load", function() {
            a = !0, i.trigger("when:load")
        }), n.exports = {
            name: "load",
            handler: function() {
                return a || new r(function(e) {
                    event.on("when:load", e)
                })
            }
        }
    }), B.define("when/action", function(e, t, n) {
        n.exports = {
            name: "action",
            handler: function(e) {
                if (e instanceof Array) return -1 < e.indexOf(B.env.b_action);
                return B.env.b_action === e
            }
        }
    }), B.define("when/condition", function(e, t, n) {
        var r = e("server-data");
        n.exports = {
            name: "condition",
            handler: function(e) {
                return "function" == typeof e ? e.call(null, r) : e
            }
        }
    }), B.define("when/experiment", function(e, t, n) {
        var r = e("et");
        n.exports = {
            name: "experiment",
            handler: function(e, t) {
                return t.hash = e, t.variant = function() {
                    return r.track(e)
                }, 0 < r.track(e)
            },
            defer: !0
        }
    }), B.define("when/stage", function(e, t, n) {
        var r = e("et");
        n.exports = {
            name: "stage",
            handler: function(e, t) {
                if (!t.conditions.experiment) throw new Error('when: "stage" must come after "experiment" condition');
                return t.stage = e, r.stage(t.hash, e), !0
            },
            defer: !0
        }
    }), B.define("when/language", function(e, t, n) {
        n.exports = {
            name: "language",
            handler: function(e) {
                if ("string" != typeof e || "function" != typeof e.split) return !1;
                var t = e.split(",").map(function(e) {
                    return e.trim()
                });
                if (1 === t.length && "cjk" === t[0]) return Boolean(B.env.b_lang_is_cjk);
                return -1 < t.indexOf(B.env.b_lang)
            }
        }
    }), B.define("when", function(e, t, n) {
        for (var r = e("when/core"), i = ["when/events", "when/click", "when/hover", "when/ready", "when/load", "when/action", "when/condition", "when/experiment", "when/stage", "when/language"], o = 0; o < i.length; o++) {
            var a = i[o];
            r.add(e(a))
        }
        return r
    }), window.B && (B.when = B.require("when")), window.jQuery.cookie = function(e, t, n) {
        if (void 0 === t) {
            var r = null;
            if (document.cookie && "" != document.cookie)
                for (var i = document.cookie.split(";"), o = 0; o < i.length; o++) {
                    var a = i[o].trim();
                    if (a.substring(0, e.length + 1) == e + "=") {
                        r = decodeURIComponent(a.substring(e.length + 1));
                        break
                    }
                }
            return r
        }
        n = n || {}, null === t && (t = "", (n = $.extend({}, n)).expires = -1);
        var u, s = "";
        n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (u = new Date).setTime(u.getTime() + 24 * n.expires * 60 * 60 * 1e3) : u = n.expires, s = "; expires=" + u.toUTCString());
        var c = n.path ? "; path=" + n.path : "",
            f = n.domain ? "; domain=" + n.domain : "",
            l = n.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), s, c, f, l].join("")
    }, B.define("utils/on-next-tick", function(e, t, n) {
        n.exports = function(e) {
            setTimeout(e, 0)
        }
    }), B.define("ga-events-tracker", function(t, e, n) {
        var r = t("ga-tracker"),
            o = t("promise"),
            a = t("when/events-view");

        function i(n) {
            this.events[n].forEach(function(t) {
                o.all(function e(t) {
                    if (!Array.isArray(t)) return e.call(this, [t]);
                    return t.map(function(i) {
                        return new o(function(t) {
                            if ("boolean" == typeof i) return void(i && t(!0));
                            var e = i.split(/\s+/),
                                n = e.shift(),
                                r = e.join(" ");
                            switch (n) {
                                case "ready":
                                    $(function() {
                                        t(!0)
                                    });
                                    break;
                                case "presence":
                                    0 < $(r).length && t(!0);
                                    break;
                                case "view":
                                    a(r, function() {
                                        t(!0)
                                    });
                                    break;
                                case "hover":
                                    n = "mouseenter";
                                case "click":
                                case "mousedown":
                                case "mouseup":
                                case "focus":
                                case "change":
                                case "input":
                                case "submit":
                                    $("body").one(n, r, function() {
                                        t(!0)
                                    });
                                    break;
                                case "event":
                                    this.emitter.one(r, function(e) {
                                        t(e)
                                    })
                            }
                        }.bind(this))
                    }.bind(this))
                }.call(this, t.trigger)).then(function() {
                    var e = null;
                    "function" == typeof t.value && (e = t.value()), "number" == typeof t.value && (e = t.value), r.trackEvent(this.categoryName, n, t.label, e)
                }.bind(this))
            }.bind(this))
        }

        function u(e) {
            if (!e.categoryName) throw Error("ga-events-tracker: you must define a categoryName");
            if (!e.eventsMap) throw Error("ga-events-tracker: you must define an eventsMap");
            this.emitter = e.emitter || t("events"), this.events = e.eventsMap, this.categoryName = e.categoryName, Object.keys(this.events).forEach(i.bind(this))
        }
        var s = {
            setup: function(e) {
                return new u(e)
            }
        };
        n.exports = s
    }), B.define("component/csir-ga-tracking", function(e) {
        "use strict";
        var t = e("component"),
            o = e("ga-tracker"),
            a = e("utils/on-next-tick");
        return t.extend({
            init: function() {
                var e = this.$el.data("csGaTrack").split("|"),
                    t = this.$el.data("csGaOnchange"),
                    n = e[0],
                    r = e[1],
                    i = e[2];
                t ? this.$el.on("change", function(e) {
                    o.trackEvent(n, r, i + e.target.value)
                }) : this.$el.on("click", "a", function(e) {
                    e.preventDefault(), o.trackEvent(n, r, i), a(function() {
                        window.location.href = e.target.href
                    })
                })
            }
        })
    }), B.define("ga4-tracker-utils", function() {
        var n = ["booking", "env"],
            r = ["booking", "ga4Cache"];

        function i(e) {
            return null != e
        }

        function o() {
            return "undefined" != typeof window && null !== window
        }

        function a() {
            return "undefined" != typeof document && null !== document
        }

        function u() {
            if (!o()) return !1;
            if (!i(window[n[0]])) return !1;
            return i(window[n[0]][n[1]])
        }
        return {
            isDefinedAndNotNull: i,
            isWindowDefined: o,
            isDocDefined: a,
            isDataLayerDefined: function() {
                if (!o()) return !1;
                return i(window.dataLayer)
            },
            generateTimestamp: function() {
                if (i(Date) && "function" == typeof Date.now) return Date.now();
                return "0"
            },
            readPropFromEnv: function(e) {
                if (!u() || !i(e)) return "";
                var t = window[n[0]][n[1]][e];
                return i(t) ? t : ""
            },
            getSearchParamValueFromUrl: function(e) {
                if (i(e)) return "-1";
                if ("undefined" == typeof window || void 0 === window.location) return "-1";
                if (!i(window.location.href)) return "-1";
                var t = new URL(window.location.href).searchParams.get(e);
                if (null === t) return "-1";
                return t
            },
            readPropFromGa4Cache: function(e) {
                if (!u() || ! function() {
                        if (!u()) return !1;
                        if (!i(window[r[0]])) return !1;
                        if (!i(window[r[0]][r[1]])) return !1;
                        return !0
                    }()) return "";
                if (!i(e)) return "";
                var t = window[r[0]][r[1]][e];
                return i(t) ? t : ""
            },
            attachHandler: function(e, t, n) {
                if (!o() || !a()) return;
                var r = document.querySelector(e);
                if (null == r) return;
                r.removeEventListener(t, n), r.addEventListener(t, n)
            }
        }
    }), B.define("ga4-tracker", function(e) {
        var n = e("ga4-tracker-utils");
        if (null == n) return;
        var r = "_ga",
            i = {};
        return {
            trackEventGA: function(e, t) {
                if (! function() {
                        if (!n.isWindowDefined() || !n.isDocDefined()) return !1;
                        if (!n.isDefinedAndNotNull(document.cookie)) return !1;
                        return !!document.cookie.split("; ").find(function(e) {
                            return e.startsWith(r)
                        })
                    }()) return;
                if (!n.isDefinedAndNotNull(e) || !n.isDefinedAndNotNull(t)) return;
                ! function(e) {
                    if (!n.isDefinedAndNotNull(e)) return;
                    if (!n.isDataLayerDefined()) return;
                    "function" == typeof window.dataLayer.push && window.dataLayer.push(e)
                }(function(e, t) {
                    if (!n.isDefinedAndNotNull(e) || !n.isDefinedAndNotNull(t)) return i;
                    if ("function" == typeof Object.assign) return Object.assign({
                        event: e,
                        tsmp: n.generateTimestamp()
                    }, t);
                    if ("object" == typeof t && null !== t) return t.event = e, t.tsmp = n.generateTimestamp(), t;
                    return {
                        event: e,
                        tsmp: n.generateTimestamp(),
                        payloadAsString: JSON.stringify(t)
                    }
                }(e, t))
            }
        }
    }), B.define("ga4-tracker-events", function(e) {
        var o = e("ga4-tracker"),
            a = e("ga4-tracker-utils");
        if (null == o) return;
        if (null == a) return;
        var t = "55_qa_ready_change_selection_checkout_your_details",
            u = "55_qa_ready_add_payment_info",
            n = "55_qa_ready_newsletter_sign_up",
            r = "55_qa_ready_app_download",
            i = "55_qa_ready_open_app",
            s = '[data-ga4-track="change_selection"]',
            c = '[data-ga4-track="newsletter_sign_up"]',
            f = '[data-ga4-track="app_download_header"]',
            l = '[data-ga4-track="app_download_footer"]',
            p = '[data-ga4-track="open_app_header"]',
            d = '[data-ga4-track="open_app_footer"]',
            h = "click",
            v = "submit";
        return {
            changeSelectionCheckout: function() {
                if ("book" !== a.readPropFromEnv("b_action")) return;
                if (2 !== a.readPropFromEnv("b_book_stage")) return;
                a.attachHandler(s, h, function() {
                    o.trackEventGA(t, {})
                })
            },
            processPaymentInfoCheckout: function() {
                if ("book" !== a.readPropFromEnv("b_action")) return;
                if (3 !== a.readPropFromEnv("b_book_stage")) return;
                var e = "",
                    t = "-1",
                    n = a.readPropFromGa4Cache("internal_page_view_checkout_prop_card");
                a.isDefinedAndNotNull(n) && a.isDefinedAndNotNull(n.propertyDetails) && (a.isDefinedAndNotNull(n.propertyDetails.location) && (e = n.propertyDetails.location.formattedAddress), a.isDefinedAndNotNull(n.propertyDetails.starRating) && (t = n.propertyDetails.starRating.value));
                var r = {
                        items: []
                    },
                    i = {
                        item_id: a.readPropFromEnv("b_hotel_id"),
                        item_name: a.readPropFromEnv("b_destination_name"),
                        affiliation: a.readPropFromEnv("b_aid"),
                        index: -1,
                        item_brand: a.readPropFromEnv("b_acc_type"),
                        item_category: "accommodations",
                        item_category2: a.readPropFromEnv("b_countrycode"),
                        item_category3: a.readPropFromEnv("b_url_city"),
                        item_category4: a.readPropFromEnv("b_ufi"),
                        item_category5: "hotel",
                        item_list_name: e,
                        item_variant: t,
                        price: a.getSearchParamValueFromUrl("final_booking_price") || a.getSearchParamValueFromUrl("total_cost"),
                        quantity: 1
                    };
                r.items.push(i), o.trackEventGA(u, r)
            },
            newsletterSignUp: function() {
                a.attachHandler(c, v, function(e) {
                    if (!a.isDefinedAndNotNull(e)) return;
                    o.trackEventGA(n, {
                        is_subscribed_to_newsletter: !0
                    })
                })
            },
            appDownload: function() {
                function e() {
                    o.trackEventGA(r, {})
                }
                a.attachHandler(f, h, e), a.attachHandler(l, h, e)
            },
            openApp: function() {
                function e() {
                    o.trackEventGA(i, {})
                }
                a.attachHandler(p, h, e), a.attachHandler(d, h, e)
            }
        }
    }), B.when({
        action: ["index", "searchresults", "hotel"],
        events: "ready"
    }).run(function(e) {
        if ("1" !== e("server-data").fe_enable_GA4_TRACKING_ON_LEGACY) return;
        var t = e("ga4-tracker-events");
        t.newsletterSignUp(), t.appDownload(), t.openApp()
    }), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.core_deps.run = !0);