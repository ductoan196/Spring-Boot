/*! For license information please see 323.7b1c1074.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe"] = self["b-index-lp-web-mfe"] || []).push([
    [323], {
        59006: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return o
                }
            });
            var r = n(66022),
                i = n(82497),
                a = n(14222),
                o = function() {
                    function e(e, t) {
                        this.isMounted = !1, this.previousOptions = {}, this.context = {}, this.options = {}, this.options = e || {}, this.context = t || {}
                    }
                    return e.prototype.getOptions = function() {
                        return this.options
                    }, e.prototype.setOptions = function(e, t) {
                        void 0 === t && (t = !1), t && !(0, i.D)(this.options, e) && (this.previousOptions = this.options), this.options = e
                    }, e.prototype.unmount = function() {
                        this.isMounted = !1
                    }, e.prototype.refreshClient = function() {
                        var e = this.options && this.options.client || this.context && this.context.client;
                        __DEV__ ? (0, r.kG)(!!e, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : (0, r.kG)(!!e, 29);
                        var t = !1;
                        return e !== this.client && (t = !0, this.client = e, this.cleanup()), {
                            client: this.client,
                            isNew: t
                        }
                    }, e.prototype.verifyDocumentType = function(e, t) {
                        var n = (0, a.E2)(e),
                            i = (0, a.mw)(t),
                            o = (0, a.mw)(n.type);
                        __DEV__ ? (0, r.kG)(n.type === t, "Running a " + i + " requires a graphql " + i + ", but a " + o + " was used instead.") : (0, r.kG)(n.type === t, 30)
                    }, e
                }()
        },
        31121: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return i
                }
            });
            var r = n(51099);

            function i(e, t) {
                return (0, r.r)(e, t, !0)
            }
        },
        51099: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return d
                }
            });
            var r = n(31191),
                i = (n(66022), n(32735)),
                a = n(82497),
                o = n(24605),
                c = n(6637),
                l = n(14222),
                s = function(e) {
                    function t(t) {
                        var n = t.options,
                            r = t.context,
                            i = t.onNewData,
                            a = e.call(this, n, r) || this;
                        return a.runLazy = !1, a.previous = Object.create(null), a.runLazyQuery = function(e) {
                            a.cleanup(), a.runLazy = !0, a.lazyOptions = e, a.onNewData()
                        }, a.obsRefetch = function(e) {
                            var t;
                            return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.refetch(e)
                        }, a.obsFetchMore = function(e) {
                            var t;
                            return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.fetchMore(e)
                        }, a.obsUpdateQuery = function(e) {
                            var t;
                            return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.updateQuery(e)
                        }, a.obsStartPolling = function(e) {
                            var t;
                            null === (t = a.currentObservable) || void 0 === t || t.startPolling(e)
                        }, a.obsStopPolling = function() {
                            var e;
                            null === (e = a.currentObservable) || void 0 === e || e.stopPolling()
                        }, a.obsSubscribeToMore = function(e) {
                            var t;
                            return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.subscribeToMore(e)
                        }, a.onNewData = i, a
                    }
                    return (0, r.ZT)(t, e), t.prototype.execute = function() {
                        this.refreshClient();
                        var e = this.getOptions(),
                            t = e.skip,
                            n = e.query;
                        return (t || n !== this.previous.query) && (this.removeQuerySubscription(), this.removeObservable(!t), this.previous.query = n), this.updateObservableQuery(), this.getExecuteSsrResult() || this.getExecuteResult()
                    }, t.prototype.executeLazy = function() {
                        return this.runLazy ? [this.runLazyQuery, this.execute()] : [this.runLazyQuery, {
                            loading: !1,
                            networkStatus: c.I.ready,
                            called: !1,
                            data: void 0
                        }]
                    }, t.prototype.fetchData = function() {
                        var e = this,
                            t = this.getOptions();
                        return !t.skip && !1 !== t.ssr && new Promise((function(t) {
                            return e.startQuerySubscription(t)
                        }))
                    }, t.prototype.afterExecute = function(e) {
                        var t = (void 0 === e ? {} : e).lazy,
                            n = void 0 !== t && t;
                        this.isMounted = !0;
                        var r = this.getOptions();
                        return this.currentObservable && !this.ssrInitiated() && this.startQuerySubscription(), n && !this.runLazy || this.handleErrorOrCompleted(), this.previousOptions = r, this.unmount.bind(this)
                    }, t.prototype.cleanup = function() {
                        this.removeQuerySubscription(), this.removeObservable(!0), delete this.previous.result
                    }, t.prototype.getOptions = function() {
                        var t = e.prototype.getOptions.call(this);
                        return this.lazyOptions && (t.variables = (0, r.pi)((0, r.pi)({}, t.variables), this.lazyOptions.variables), t.context = (0, r.pi)((0, r.pi)({}, t.context), this.lazyOptions.context)), this.runLazy && delete t.skip, t
                    }, t.prototype.ssrInitiated = function() {
                        return this.context && this.context.renderPromises
                    }, t.prototype.getExecuteSsrResult = function() {
                        var e = this.getOptions(),
                            t = e.ssr,
                            n = e.skip,
                            i = !1 === t,
                            a = this.refreshClient().client.disableNetworkFetches,
                            o = (0, r.pi)({
                                loading: !0,
                                networkStatus: c.I.loading,
                                called: !0,
                                data: void 0,
                                stale: !1,
                                client: this.client
                            }, this.observableQueryFields());
                        if (i && (this.ssrInitiated() || a)) return this.previous.result = o, o;
                        if (this.ssrInitiated()) {
                            var l = this.getExecuteResult() || o;
                            return l.loading && !n && this.context.renderPromises.addQueryPromise(this, (function() {
                                return null
                            })), l
                        }
                    }, t.prototype.prepareObservableQueryOptions = function() {
                        var e = this.getOptions();
                        this.verifyDocumentType(e.query, l.n_.Query);
                        var t = e.displayName || "Query";
                        return !this.ssrInitiated() || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e.fetchPolicy = "cache-first"), (0, r.pi)((0, r.pi)({}, e), {
                            displayName: t,
                            context: e.context
                        })
                    }, t.prototype.initializeObservableQuery = function() {
                        if (this.ssrInitiated() && (this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions())), !this.currentObservable) {
                            var e = this.prepareObservableQueryOptions();
                            this.previous.observableQueryOptions = (0, r.pi)((0, r.pi)({}, e), {
                                children: void 0
                            }), this.currentObservable = this.refreshClient().client.watchQuery((0, r.pi)({}, e)), this.ssrInitiated() && this.context.renderPromises.registerSSRObservable(this.currentObservable, e)
                        }
                    }, t.prototype.updateObservableQuery = function() {
                        if (this.currentObservable) {
                            var e = (0, r.pi)((0, r.pi)({}, this.prepareObservableQueryOptions()), {
                                children: void 0
                            });
                            this.getOptions().skip ? this.previous.observableQueryOptions = e : (0, a.D)(e, this.previous.observableQueryOptions) || (this.previous.observableQueryOptions = e, this.currentObservable.setOptions(e).catch((function() {})))
                        } else this.initializeObservableQuery()
                    }, t.prototype.startQuerySubscription = function(e) {
                        var t = this;
                        void 0 === e && (e = this.onNewData), this.currentSubscription || this.getOptions().skip || (this.currentSubscription = this.currentObservable.subscribe({
                            next: function(n) {
                                var r = n.loading,
                                    i = n.networkStatus,
                                    o = n.data,
                                    c = t.previous.result;
                                c && c.loading === r && c.networkStatus === i && (0, a.D)(c.data, o) || e()
                            },
                            error: function(n) {
                                if (t.resubscribeToQuery(), !n.hasOwnProperty("graphQLErrors")) throw n;
                                var r = t.previous.result;
                                (r && r.loading || !(0, a.D)(n, t.previous.error)) && (t.previous.error = n, e())
                            }
                        }))
                    }, t.prototype.resubscribeToQuery = function() {
                        this.removeQuerySubscription();
                        var e = this.currentObservable;
                        if (e) {
                            var t = e.last;
                            try {
                                e.resetLastResults(), this.startQuerySubscription()
                            } finally {
                                e.last = t
                            }
                        }
                    }, t.prototype.getExecuteResult = function() {
                        var e = this.observableQueryFields(),
                            t = this.getOptions();
                        if (t.skip) e = (0, r.pi)((0, r.pi)({}, e), {
                            data: void 0,
                            error: void 0,
                            loading: !1,
                            networkStatus: c.I.ready,
                            called: !0
                        });
                        else if (this.currentObservable) {
                            var n = this.currentObservable.getCurrentResult(),
                                i = n.data,
                                a = n.loading,
                                l = n.partial,
                                s = n.networkStatus,
                                u = n.errors,
                                d = n.error;
                            if (u && u.length > 0 && (d = new o.c({
                                    graphQLErrors: u
                                })), e = (0, r.pi)((0, r.pi)({}, e), {
                                    data: i,
                                    loading: a,
                                    networkStatus: s,
                                    error: d,
                                    called: !0
                                }), a);
                            else if (d) Object.assign(e, {
                                data: (this.currentObservable.getLastResult() || {}).data
                            });
                            else {
                                var m = this.currentObservable.options.fetchPolicy;
                                if (t.partialRefetch && l && (!i || 0 === Object.keys(i).length) && "cache-only" !== m) return Object.assign(e, {
                                    loading: !0,
                                    networkStatus: c.I.loading
                                }), e.refetch(), e
                            }
                        }
                        e.client = this.client, this.setOptions(t, !0);
                        var p = this.previous.result;
                        return this.previous.loading = p && p.loading || !1, e.previousData = p && (p.data || p.previousData), this.previous.result = e, this.currentObservable && this.currentObservable.resetQueryStoreErrors(), e
                    }, t.prototype.handleErrorOrCompleted = function() {
                        if (this.currentObservable && this.previous.result) {
                            var e = this.previous.result,
                                t = e.data,
                                n = e.loading,
                                r = e.error;
                            if (!n) {
                                var i = this.getOptions(),
                                    o = i.query,
                                    c = i.variables,
                                    l = i.onCompleted,
                                    s = i.onError,
                                    u = i.skip;
                                if (this.previousOptions && !this.previous.loading && (0, a.D)(this.previousOptions.query, o) && (0, a.D)(this.previousOptions.variables, c)) return;
                                !l || r || u ? s && r && s(r) : l(t)
                            }
                        }
                    }, t.prototype.removeQuerySubscription = function() {
                        this.currentSubscription && (this.currentSubscription.unsubscribe(), delete this.currentSubscription)
                    }, t.prototype.removeObservable = function(e) {
                        this.currentObservable && (this.currentObservable.tearDownQuery(), e && delete this.currentObservable)
                    }, t.prototype.observableQueryFields = function() {
                        var e;
                        return {
                            variables: null === (e = this.currentObservable) || void 0 === e ? void 0 : e.variables,
                            refetch: this.obsRefetch,
                            fetchMore: this.obsFetchMore,
                            updateQuery: this.obsUpdateQuery,
                            startPolling: this.obsStartPolling,
                            stopPolling: this.obsStopPolling,
                            subscribeToMore: this.obsSubscribeToMore
                        }
                    }, t
                }(n(59006).V);
            var u = n(55261);

            function d(e, t, n) {
                void 0 === n && (n = !1);
                var o = (0, i.useContext)((0, u.K)()),
                    c = (0, i.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    l = c[0],
                    d = c[1],
                    m = t ? (0, r.pi)((0, r.pi)({}, t), {
                        query: e
                    }) : {
                        query: e
                    },
                    p = (0, i.useRef)(),
                    v = p.current || (p.current = new s({
                        options: m,
                        context: o,
                        onNewData: function() {
                            v.ssrInitiated() ? d() : Promise.resolve().then((function() {
                                return p.current && p.current.isMounted && d()
                            }))
                        }
                    }));
                v.setOptions(m), v.context = o;
                var f = function(e, t) {
                        var n = (0, i.useRef)();
                        return n.current && (0, a.D)(t, n.current.key) || (n.current = {
                            key: t,
                            value: e()
                        }), n.current.value
                    }((function() {
                        return n ? v.executeLazy() : v.execute()
                    }), {
                        options: (0, r.pi)((0, r.pi)({}, m), {
                            onError: void 0,
                            onCompleted: void 0
                        }),
                        context: o,
                        tick: l
                    }),
                    _ = n ? f[1] : f;
                return __DEV__ && function(e) {
                    if (__DEV__) {
                        var t = (0, i.useRef)(!1);
                        (0, i.useEffect)((function() {
                            return function() {
                                t.current = !0
                            }
                        }), []), (0, i.useEffect)((function() {
                            !0 === t.current && (t.current = !1, e())
                        }), [])
                    }
                }(d), (0, i.useEffect)((function() {
                    return function() {
                        v.cleanup(), p.current = void 0
                    }
                }), []), (0, i.useEffect)((function() {
                    return v.afterExecute({
                        lazy: n
                    })
                }), [_.loading, _.networkStatus, _.error, _.data, v.currentObservable]), f
            }
        },
        14222: function(e, t, n) {
            "use strict";
            n.d(t, {
                E2: function() {
                    return c
                },
                mw: function() {
                    return o
                },
                n_: function() {
                    return r
                }
            });
            var r, i = n(66022);
            ! function(e) {
                e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
            }(r || (r = {}));
            var a = new Map;

            function o(e) {
                var t;
                switch (e) {
                    case r.Query:
                        t = "Query";
                        break;
                    case r.Mutation:
                        t = "Mutation";
                        break;
                    case r.Subscription:
                        t = "Subscription"
                }
                return t
            }

            function c(e) {
                var t, n, o = a.get(e);
                if (o) return o;
                __DEV__ ? (0, i.kG)(!!e && !!e.kind, "Argument of " + e + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, i.kG)(!!e && !!e.kind, 34);
                var c = e.definitions.filter((function(e) {
                        return "FragmentDefinition" === e.kind
                    })),
                    l = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "query" === e.operation
                    })),
                    s = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "mutation" === e.operation
                    })),
                    u = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "subscription" === e.operation
                    }));
                __DEV__ ? (0, i.kG)(!c.length || l.length || s.length || u.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, i.kG)(!c.length || l.length || s.length || u.length, 35), __DEV__ ? (0, i.kG)(l.length + s.length + u.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + e + " had " + l.length + " queries, " + u.length + " subscriptions and " + s.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(l.length + s.length + u.length <= 1, 36), n = l.length ? r.Query : r.Mutation, l.length || s.length || (n = r.Subscription);
                var d = l.length ? l : s.length ? s : u;
                __DEV__ ? (0, i.kG)(1 === d.length, "react-apollo only supports one definition per HOC. " + e + " had " + d.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(1 === d.length, 37);
                var m = d[0];
                t = m.variableDefinitions || [];
                var p = {
                    name: m.name && "Name" === m.name.kind ? m.name.value : "data",
                    type: n,
                    variables: t
                };
                return a.set(e, p), p
            }
        },
        79142: function(e, t, n) {
            "use strict";
            var r = n(8821),
                i = n(85169),
                a = n(72975),
                o = n.n(a);

            function c(e, t, n, r) {
                return new(n || (n = Promise))((function(i, a) {
                    function o(e) {
                        try {
                            l(r.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function c(e) {
                        try {
                            l(r.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(o, c)
                    }
                    l((r = r.apply(e, t || [])).next())
                }))
            }
            Object.create;
            Object.create;
            var l = function() {
                    function e(t) {
                        (0, r.Z)(this, e), this.config = t, this.headers = this.config.API.HEADERS
                    }
                    return (0, i.Z)(e, [{
                        key: "get",
                        value: function(e, t) {
                            var n = this;
                            return new Promise((function(r, i) {
                                return c(n, void 0, void 0, o().mark((function n() {
                                    var a, c;
                                    return o().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 3, fetch(e, {
                                                    method: "GET",
                                                    headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                                    credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include"
                                                });
                                            case 3:
                                                return a = n.sent, n.next = 6, a.text();
                                            case 6:
                                                c = n.sent, r(c ? JSON.parse(c) : null), n.next = 13;
                                                break;
                                            case 10:
                                                return n.prev = 10, n.t0 = n.catch(0), n.abrupt("return", i(n.t0));
                                            case 13:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, this, [
                                        [0, 10]
                                    ])
                                })))
                            }))
                        }
                    }, {
                        key: "post",
                        value: function(e, t, n) {
                            var r = this,
                                i = this.getEnrichedData(t);
                            return new Promise((function(t, a) {
                                return c(r, void 0, void 0, o().mark((function r() {
                                    var c, l;
                                    return o().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.prev = 0, r.next = 3, fetch(e, {
                                                    method: "POST",
                                                    headers: (null === n || void 0 === n ? void 0 : n.withHeaders) ? this.headers : void 0,
                                                    credentials: !1 === (null === n || void 0 === n ? void 0 : n.withCredentials) ? "omit" : "include",
                                                    body: JSON.stringify(i)
                                                });
                                            case 3:
                                                return c = r.sent, r.next = 6, c.text();
                                            case 6:
                                                l = r.sent, t(l ? JSON.parse(l) : null), r.next = 13;
                                                break;
                                            case 10:
                                                return r.prev = 10, r.t0 = r.catch(0), r.abrupt("return", a(r.t0));
                                            case 13:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, this, [
                                        [0, 10]
                                    ])
                                })))
                            }))
                        }
                    }, {
                        key: "getEnrichedData",
                        value: function(e) {
                            var t = {
                                page: {
                                    page_referrer: document.referrer,
                                    page_url: window.location.href,
                                    page_title: document.title
                                },
                                web: {
                                    browser_language: window.navigator.language
                                },
                                local: {
                                    currency: this.config.currency,
                                    language: this.config.language
                                }
                            };
                            return Object.assign(Object.assign({}, e), {
                                context: t,
                                tracker: {
                                    tracker_name: "C360ReactTracker",
                                    tracker_type: "Client",
                                    tracker_version: "0.1.0"
                                }
                            })
                        }
                    }]), e
                }(),
                s = function() {
                    function e() {
                        (0, r.Z)(this, e)
                    }
                    return (0, i.Z)(e, [{
                        key: "init",
                        value: function(e) {
                            this.client = new l(e)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return c(this, void 0, void 0, o().mark((function t() {
                                return o().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", this.client.get(e));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }, {
                        key: "post",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return c(this, void 0, void 0, o().mark((function r() {
                                return o().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.abrupt("return", this.client.post(e, t, n));
                                        case 1:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, this)
                            })))
                        }
                    }]), e
                }(),
                u = new s,
                d = function(e) {
                    var t = void 0;
                    return "mdot" == e.platform && (t = 2), "ddot" != e.platform && "www" != e.platform || (t = 1), {
                        "Content-Type": "application/json",
                        "X-Booking-Platform": e.platform,
                        "X-Booking-SiteType-Id": t,
                        "X-Booking-Pageview-Id": e.pageviewId,
                        "X-Booking-Session-Id": e.sessionId,
                        "X-Booking-ET-Seed": e.etSeed,
                        "X-Booking-AID": e.aid,
                        "X-Booking-Label": e.label,
                        "X-Booking-CSRF": e.csrfToken,
                        "X-Booking-Language-Code": e.lang
                    }
                },
                m = new(function() {
                    function e() {
                        (0, r.Z)(this, e)
                    }
                    return (0, i.Z)(e, [{
                        key: "init",
                        value: function(e) {
                            this.c360Config = function(e) {
                                var t = e.hostname || (e.isDev ? "app.dqs.booking.com" : "www.booking.com");
                                return {
                                    IS_DEV: Boolean(e.isDev),
                                    API: {
                                        HEADERS: d(e)
                                    },
                                    TRACK_BASE_URL: "https://".concat(t, "/c360/v1/track"),
                                    language: e.lang,
                                    currency: e.currency
                                }
                            }(e), this.httpClient = u, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, u.init(this.c360Config)
                        }
                    }, {
                        key: "sendEvent",
                        value: function(e) {
                            return c(this, void 0, void 0, o().mark((function t() {
                                var n = this;
                                return o().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            this.httpClient.post(this.c360url, e, {
                                                withHeaders: !0
                                            }).catch((function(e) {
                                                n.props.onErrorCallback && n.props.onErrorCallback(new Error(e))
                                            }));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })))
                        }
                    }]), e
                }());
            t.Z = m
        },
        23360: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Na
                }
            });
            var r, i = n(20011),
                a = n(32735),
                o = n(24094),
                c = n(39476),
                l = n(62691),
                s = n(79142),
                u = {
                    base: "f660aace8b",
                    color_black: "a572c0f1bd",
                    color_white: "eac45a62e8",
                    color_foreground: "cf9cb434aa",
                    color_foreground_alt: "e19a187e4f",
                    color_accent_foreground: "f09d1b0ec2",
                    color_action_foreground: "c4230b593f",
                    color_callout_foreground: "e1cca92934",
                    color_foreground_disabled: "f95696771b",
                    color_foreground_inverted: "b25cf70fcd",
                    color_destructive_foreground: "eb93dcccc5",
                    color_constructive_foreground: "af3557d5b7",
                    color_foreground_disabled_alt: "e81320a49d",
                    color_brand_primary_foreground: "e6d0fb1333",
                    color_action_foreground_inverted: "fbdfe8d9e8",
                    color_brand_genius_secondary_foreground: "c319eb61eb",
                    color_highlighted: "e29093c67f",
                    color_action_focus: "dd40197ed9",
                    color_cta_highlighted: "cac534c7d4",
                    color_highlighted_alt: "beb452ad9c",
                    color_destructive_focus: "c521ceec04",
                    color_action_highlighted: "c0570724c1",
                    color_action_highlighted_alt: "f1ac337c15",
                    color_destructive_highlighted: "f197da1e66",
                    color_destructive_highlighted_alt: "d9872739a0",
                    bg_black: "e21515b918",
                    bg_white: "b03236a6b3",
                    bg_background: "d0f36402be",
                    bg_transparent: "babe9d5c16",
                    bg_background_alt: "cd48aeabfb",
                    bg_cta_background: "f83e14d64b",
                    bg_background_base: "c00f6b2ba0",
                    bg_black_with_alpha: "cb730c8813",
                    bg_accent_background: "cc107074bc",
                    bg_action_background: "dac3a574c6",
                    bg_callout_background: "de09ff74b5",
                    bg_background_base_alt: "ff5ee9c17d",
                    bg_background_disabled: "adac698020",
                    bg_background_inverted: "b8314ea2ab",
                    bg_accent_background_alt: "f9772ff0fe",
                    bg_action_background_alt: "bd8bee018a",
                    bg_callout_background_alt: "c5101a2775",
                    bg_destructive_background: "c49bf2a8b3",
                    bg_background_disabled_alt: "f53d823f0d",
                    bg_constructive_background: "fe65b83bfd",
                    bg_brand_primary_background: "dd2bc01213",
                    bg_destructive_background_alt: "b4e3ae7e55",
                    bg_constructive_background_alt: "d4b670b7ac",
                    bg_brand_genius_primary_background: "fe8c7a50a0",
                    bg_on_background: "deffdd9219",
                    bg_on_cta_background: "d183579195",
                    bg_on_accent_background: "a55525727f",
                    bg_on_action_background: "e0291a7ea9",
                    bg_on_callout_background: "c8a91b3606",
                    bg_on_destructive_background: "c55d570400",
                    bg_on_constructive_background: "dcbd7a0369",
                    bg_on_brand_primary_background: "cb24b39ec7",
                    bg_on_brand_genius_primary_background: "bcecf52067",
                    bg_background_elevation_one: "d4b01ae5c8",
                    bg_background_elevation_two: "a1eddbfd8f",
                    bg_accent_background_dynamic: "e2b0b233d9",
                    bg_callout_background_dynamic: "b3d5a12dbb",
                    bg_destructive_background_dynamic: "e21468da4c",
                    bg_constructive_background_dynamic: "fa51c1c52f",
                    bg_brand_primary_background_dynamic: "ba0c9f804d",
                    bg_on_accent_background_dynamic: "e6499d3c45",
                    bg_on_callout_background_dynamic: "ad22176c4c",
                    bg_on_destructive_background_dynamic: "b9d3e2e52b",
                    bg_on_constructive_background_dynamic: "dbc035efd1",
                    bg_on_brand_primary_background_dynamic: "c120f9409a",
                    m_half: "df1139dfbc",
                    m_1x: "b917851211",
                    m_2x: "eb9c30813d",
                    m_3x: "e43cc358fb",
                    m_4x: "fcce1c8e2f",
                    m_6x: "e89ef56254",
                    m_8x: "ab10955fe3",
                    m_12x: "d18d689395",
                    m_16x: "f65e4f693d",
                    m_24x: "b42a82fa4e",
                    mt_half: "d67c3f3d87",
                    mt_1x: "a3d4674485",
                    mt_2x: "fc726c92df",
                    mt_3x: "fca475d420",
                    mt_4x: "a907a0adbd",
                    mt_6x: "edbd921459",
                    mt_8x: "a3e555ff36",
                    mt_12x: "ed2ee1f576",
                    mt_16x: "f847085118",
                    mt_24x: "a62f680186",
                    mb_half: "db51bc39b2",
                    mb_1x: "a1b688d65c",
                    mb_2x: "dd07aecffe",
                    mb_3x: "b7945ef169",
                    mb_4x: "ed06f501d8",
                    mb_6x: "d1758a4cac",
                    mb_8x: "a9506ea41f",
                    mb_12x: "ad1fe95bdd",
                    mb_16x: "c2885f9ce9",
                    mb_24x: "a0b240a059",
                    ml_half: "f150d5fc21",
                    ml_1x: "d2504c5283",
                    ml_2x: "ca7c412386",
                    ml_3x: "a0ccf3a18a",
                    ml_4x: "f65d2e1984",
                    ml_6x: "e3d5ab80ca",
                    ml_8x: "cecf0308df",
                    ml_12x: "adba01db88",
                    ml_16x: "cc942101db",
                    ml_24x: "a4d9943d8e",
                    mr_half: "fe0aacff8f",
                    mr_1x: "e61f091572",
                    mr_2x: "cda958ae0e",
                    mr_3x: "ac4f808585",
                    mr_4x: "d05a52e8e1",
                    mr_6x: "bb878a8119",
                    mr_8x: "d7765fc1c4",
                    mr_12x: "e3cfe43037",
                    mr_16x: "b537390929",
                    mr_24x: "a9c384cdc0",
                    my_half: "e3a860054c",
                    my_1x: "e2b7a1da6b",
                    my_2x: "af8bd933a4",
                    my_3x: "d01131d603",
                    my_4x: "afee14c901",
                    my_6x: "a0caa4d113",
                    my_8x: "ea13175f5c",
                    my_12x: "aa0c5477e5",
                    my_16x: "b63b022fd2",
                    my_24x: "b1a8a8816f",
                    mx_half: "cd517ccf1d",
                    mx_1x: "e129b3d94a",
                    mx_2x: "ed571647d3",
                    mx_3x: "a6732c0e55",
                    mx_4x: "d0f5fa65e9",
                    mx_6x: "dea97a805a",
                    mx_8x: "c08945acd3",
                    mx_12x: "db42e8ceb3",
                    mx_16x: "a9a0adbc91",
                    mx_24x: "a7941feee2",
                    p_half: "c550f08b43",
                    p_1x: "e55c3a2e2a",
                    p_2x: "eeec137a27",
                    p_3x: "b7f49ecdcf",
                    p_4x: "fbc79bfc01",
                    p_6x: "ec64794359",
                    p_8x: "c39b17a972",
                    p_12x: "b7d4aa1658",
                    p_16x: "a1890ded61",
                    p_24x: "e2d06863ea",
                    pt_half: "d495d75432",
                    pt_1x: "f8308e9ed3",
                    pt_2x: "f9e344ac55",
                    pt_3x: "f2bc00ad30",
                    pt_4x: "c7e4699150",
                    pt_6x: "aaf38690fb",
                    pt_8x: "f2e7e7b0d1",
                    pt_12x: "e2f4dbc269",
                    pt_16x: "dfc962be90",
                    pt_24x: "fc752de0c1",
                    pb_half: "ba01d6fe41",
                    pb_1x: "eef2b81316",
                    pb_2x: "d3684b56b4",
                    pb_3x: "e232cb4a57",
                    pb_4x: "e0f4a71eb0",
                    pb_6x: "dd68017dfc",
                    pb_8x: "eec3a1e555",
                    pb_12x: "cbd78d9aec",
                    pb_16x: "f318e4a2f4",
                    pb_24x: "a3441534fc",
                    pl_half: "ec36f7a095",
                    pl_1x: "e74f15c3de",
                    pl_2x: "f46495fbbf",
                    pl_3x: "ae5aef1f44",
                    pl_4x: "e1928d83ad",
                    pl_6x: "ddad062952",
                    pl_8x: "f706587704",
                    pl_12x: "b2a0dd1dc4",
                    pl_16x: "d00040d702",
                    pl_24x: "b7ee6f7dd0",
                    pr_half: "b57faaf788",
                    pr_1x: "b99efe54ef",
                    pr_2x: "fa24dab45b",
                    pr_3x: "ee938a8eae",
                    pr_4x: "b2b580c7a7",
                    pr_6x: "e5bfb859f1",
                    pr_8x: "f73e6dda6e",
                    pr_12x: "d74e6c5e37",
                    pr_16x: "dc98a56024",
                    pr_24x: "d8b3828d59",
                    py_half: "f1ba878da8",
                    py_1x: "a146cfaa49",
                    py_2x: "e7612c386f",
                    py_3x: "dca9859ff9",
                    py_4x: "ea75f045b8",
                    py_6x: "b0467ebaa0",
                    py_8x: "f57d639950",
                    py_12x: "bdb254bfce",
                    py_16x: "c55a0af4ab",
                    py_24x: "aa22d0ad61",
                    px_half: "ca159fdf0a",
                    px_1x: "f2a11b77a3",
                    px_2x: "ce096e784c",
                    px_3x: "b33a2c3ea9",
                    px_4x: "e97d9475d5",
                    px_6x: "b311c92da8",
                    px_8x: "c9d31da06a",
                    px_12x: "fba50121d4",
                    px_16x: "a9bc237ef9",
                    px_24x: "b4f510261f",
                    radius_100: "f281db9239",
                    radius_200: "c6e3f46cd3",
                    radius_300: "b79c1387f4"
                },
                d = function() {
                    return d = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, d.apply(this, arguments)
                },
                m = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                p = a.memo((function(e) {
                    var t = e.as,
                        n = e.tagName,
                        r = e.color,
                        i = e.bg,
                        o = e.backgroundColor,
                        c = e.m,
                        s = e.margin,
                        p = e.mt,
                        v = e.marginTop,
                        f = e.mb,
                        _ = e.marginBottom,
                        g = e.ml,
                        h = e.marginLeft,
                        b = e.mr,
                        E = e.marginRight,
                        y = e.mx,
                        k = e.marginX,
                        C = e.my,
                        O = e.marginY,
                        N = e.p,
                        I = e.padding,
                        T = e.pt,
                        S = e.paddingTop,
                        A = e.pb,
                        R = e.paddingBottom,
                        x = e.pl,
                        D = e.paddingLeft,
                        P = e.pr,
                        w = e.paddingRight,
                        L = e.py,
                        M = e.paddingY,
                        j = e.px,
                        U = e.paddingX,
                        F = e.borderRadius,
                        Z = e.variant,
                        V = e.className,
                        H = e.children,
                        G = e.testId,
                        B = m(e, ["as", "tagName", "color", "bg", "backgroundColor", "m", "margin", "mt", "marginTop", "mb", "marginBottom", "ml", "marginLeft", "mr", "marginRight", "mx", "marginX", "my", "marginY", "p", "padding", "pt", "paddingTop", "pb", "paddingBottom", "pl", "paddingLeft", "pr", "paddingRight", "py", "paddingY", "px", "paddingX", "borderRadius", "variant", "className", "children", "testId"]),
                        K = t || n || "div",
                        z = [u.base],
                        Y = G ? {
                            "data-testid": G
                        } : {};
                    return r && z.push(u["color_".concat(r)]), (i || o) && z.push(u["bg_".concat(i || o)]), (c || s) && z.push(u["m_".concat(c || s)]), (p || v) && z.push(u["mt_".concat(p || v)]), (f || _) && z.push(u["mb_".concat(f || _)]), (g || h) && z.push(u["ml_".concat(g || h)]), (b || E) && z.push(u["mr_".concat(b || E)]), (C || O) && z.push(u["my_".concat(C || O)]), (y || k) && z.push(u["mx_".concat(y || k)]), (N || I) && z.push(u["p_".concat(N || I)]), (T || S) && z.push(u["pt_".concat(T || S)]), (A || R) && z.push(u["pb_".concat(A || R)]), (x || D) && z.push(u["pl_".concat(x || D)]), (P || w) && z.push(u["pr_".concat(P || w)]), (L || M) && z.push(u["py_".concat(L || M)]), (j || U) && z.push(u["px_".concat(j || U)]), F && z.push(u["radius_".concat(F)]), V && z.push(V), Z ? a.createElement(l.xv, d({}, B, {
                        tagName: t || n,
                        className: z.join(" "),
                        variant: Z,
                        attributes: Y
                    }), H) : a.createElement(K, d({}, B, Y, {
                        className: z.join(" ")
                    }), H)
                })),
                v = n(93354),
                f = n(79399),
                _ = n(13613),
                g = n(13736),
                h = n(21930),
                b = n(62950),
                E = "be6cb813b9",
                y = function(e) {
                    return void 0 === e && (e = "medium"), "large" === e ? "body_1" : "body_2"
                },
                k = function() {
                    return k = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, k.apply(this, arguments)
                },
                C = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                O = (0, a.memo)((function(e) {
                    var t = e.heading,
                        n = e.showDivider,
                        r = void 0 !== n && n,
                        i = e.headingTagName,
                        o = void 0 === i ? "h2" : i,
                        c = e.children,
                        s = e.size,
                        u = void 0 === s ? "medium" : s,
                        d = C(e, ["heading", "showDivider", "headingTagName", "children", "size"]);
                    return a.createElement(p, k({
                        variant: y(u)
                    }, d), t && a.createElement(p, {
                        as: o,
                        variant: "headline_3",
                        mb: "4x"
                    }, t), c, r && a.createElement(l.iz, {
                        className: E
                    }))
                })),
                N = "a615141c06",
                I = function() {
                    return I = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, I.apply(this, arguments)
                },
                T = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                S = a.memo((function(e) {
                    var t = e.children,
                        n = e.noDepth,
                        r = void 0 !== n && n,
                        i = e.className,
                        o = T(e, ["children", "noDepth", "className"]),
                        c = (0, l.Sj)().isLarge,
                        s = r ? [] : [N];
                    return i && s.push(i), a.createElement(O, I({
                        className: s.join(" "),
                        p: c ? "6x" : "4x"
                    }, o), t)
                })),
                A = "e8eebe7e52",
                R = "d4dd38cb75",
                x = "b5d84789f7",
                D = "b29f11fdcf",
                P = "b4db632bbc",
                w = "ef5b9df724",
                L = "a914c714f2",
                M = "f921422f6c",
                j = "c85fce95d8",
                U = "d9dca2fa01",
                F = "be3699fc03",
                Z = "f798167eda",
                V = "c422e24bae";
            ! function(e) {
                e[e.large = 80] = "large", e[e.medium = 64] = "medium", e[e.small = 48] = "small"
            }(r || (r = {}));
            var H, G = function() {
                    return G = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, G.apply(this, arguments)
                },
                B = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                K = function(e) {
                    return {
                        width: e
                    }
                },
                z = function(e) {
                    var t = e.dates,
                        n = e.heading,
                        r = e.headingTagName,
                        i = void 0 === r ? "h3" : r,
                        o = e.status,
                        c = e.subtitle,
                        l = e.additionalContent,
                        s = a.useContext(ke).isPast;
                    return a.createElement(p, {
                        className: "".concat(M, " ").concat(U)
                    }, a.createElement(p, {
                        as: i,
                        variant: "strong_2",
                        className: Z
                    }, n), c && a.createElement(p, null, c), (t || o) && a.createElement(p, {
                        className: L
                    }, t && a.createElement("span", null, t), o && a.createElement(Oe.Status, {
                        useColor: !s,
                        status: o
                    })), l)
                },
                Y = function(e) {
                    var t = e.badge,
                        n = e.dates,
                        r = e.extraInfo,
                        i = e.heading,
                        o = e.headingTagName,
                        c = void 0 === o ? "h3" : o,
                        s = e.price,
                        u = e.size,
                        d = e.status,
                        m = e.subtitle,
                        v = e.additionalContent,
                        f = e.inlineStatus,
                        _ = (0, l.Sj)().isLarge,
                        g = a.useContext(ke).isPast,
                        h = (Array.isArray(r) ? r : [r]).map((function(e) {
                            return "string" === typeof e ? a.createElement("span", {
                                key: e
                            }, e) : a.createElement(a.Fragment, {
                                key: e
                            }, e)
                        })),
                        b = d && f,
                        E = a.createElement(Oe.Status, {
                            useColor: !g,
                            status: d
                        }),
                        y = _ ? a.createElement(p, {
                            className: L
                        }, a.createElement("span", null, n), r && h, b && E) : a.createElement(a.Fragment, null, (n || s) && a.createElement(p, {
                            className: L
                        }, n && a.createElement("span", null, n), s && a.createElement("span", null, s)), b && E, r && a.createElement(p, {
                            className: L
                        }, h), t);
                    return a.createElement(p, {
                        className: M
                    }, a.createElement(p, {
                        as: c,
                        className: Z,
                        variant: _ || "large" === u ? "strong_1" : "strong_2"
                    }, i), m && a.createElement(p, null, m), y, !b && E, v)
                },
                Q = a.memo((function(e) {
                    var t = e.badge,
                        n = (e.dates, e.extraInfo, e.heading, e.headingTagName, e.image),
                        i = e.price,
                        o = (e.size, e.status, e.subtitle, e.imageSize),
                        c = (e.additionalContent, e.endSlot),
                        s = e.endSlotAlign,
                        u = void 0 === s ? "start" : s,
                        d = (e.inlineStatus, B(e, ["badge", "dates", "extraInfo", "heading", "headingTagName", "image", "price", "size", "status", "subtitle", "imageSize", "additionalContent", "endSlot", "endSlotAlign", "inlineStatus"])),
                        m = (0, l.Sj)().isLarge,
                        v = a.useContext(ke).compact,
                        f = o ? r[o] : function(e, t) {
                            return void 0 === e && (e = !1), void 0 === t && (t = !1), t ? r.small : e ? r.large : r.medium
                        }(m, v),
                        _ = a.useMemo((function() {
                            return {
                                alignItems: u
                            }
                        }), [u]);
                    return a.createElement(p, G({
                        className: x
                    }, d), "string" === typeof n ? a.createElement(l.Ee, {
                        src: n,
                        contentMode: "fit",
                        borderRadius: "200",
                        width: f,
                        height: f,
                        className: w
                    }) : a.createElement(p, {
                        className: w,
                        style: K(f)
                    }, n), v ? a.createElement(z, G({}, e)) : a.createElement(Y, G({}, e)), m && !v && a.createElement(p, {
                        className: j
                    }, i && a.createElement(p, {
                        variant: "headline_3"
                    }, i), t), c && a.createElement(p, {
                        className: V,
                        style: _
                    }, c))
                })),
                W = function() {
                    return W = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, W.apply(this, arguments)
                },
                X = function(e) {
                    var t = e.vertical,
                        n = e.copyTags,
                        r = e.translations,
                        i = void 0 === r ? {} : r;
                    return t && "undefined" === typeof n[t] || !t ? W(W({}, n.default), i) : W(W(W({}, n.default), n[t]), i)
                },
                q = function(e) {
                    for (var t in e) e[t] || (console.error("Missing copy tag for ".concat(t)), e[t] = "\ud83d\udca2");
                    return !0
                };
            ! function(e) {
                e.ACTION_REQUIRED = "ACTION_REQUIRED", e.CANCELLED = "CANCELLED", e.CANCELLED_BY_BOOKING = "CANCELLED_BY_BOOKING", e.COMPLETE = "COMPLETE", e.CONFIRMED = "CONFIRMED", e.PAYMENT_PENDING = "PAYMENT_PENDING", e.PENDING = "PENDING", e.PRE_ORDER = "PRE_ORDER", e.UNCONFIRMED = "UNCONFIRMED", e.UNKNOWN = "UNKNOWN"
            }(H || (H = {}));
            var J = function() {
                return J = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, J.apply(this, arguments)
            };

            function $(e) {
                var t = e.vertical,
                    n = e.translations;
                try {
                    var r = (0, c.QT)(),
                        i = {
                            default: {
                                statusText: function(e) {
                                    switch (e) {
                                        case H.CONFIRMED:
                                            return r.trans((0, o.t)("my_trips_confirmed_status"));
                                        case H.UNCONFIRMED:
                                        case H.PENDING:
                                            return r.trans((0, o.t)("my_trips_await_conf_status"));
                                        case H.CANCELLED:
                                            return r.trans((0, o.t)("my_trips_cancelled_status"));
                                        case H.COMPLETE:
                                            return r.trans((0, o.t)("my_trips_completed_status"));
                                        case H.ACTION_REQUIRED:
                                        case H.PAYMENT_PENDING:
                                        case H.PRE_ORDER:
                                        case H.UNKNOWN:
                                            return r.trans((0, o.t)("my_trips_action_required_status"));
                                        default:
                                            return ""
                                    }
                                },
                                contextButton: r.trans((0, o.t)("trip_mngmt_screenread_more_option_button"))
                            }
                        };
                    return X({
                        copyTags: i,
                        vertical: t,
                        translations: n
                    })
                } catch (l) {
                    var a = J({
                        statusText: "",
                        contextButton: ""
                    }, n);
                    return q(a), a
                }
            }
            var ee, te, ne, re, ie, ae, oe, ce, le, se, ue, de, me, pe, ve, fe = function(e) {
                    return e.stopPropagation()
                },
                _e = a.memo((function(e) {
                    var t = e.content,
                        n = $({
                            translations: a.useContext(ke).translations
                        }).contextButton,
                        r = a.useState(!1),
                        i = r[0],
                        o = r[1];
                    return a.createElement(p, {
                        onClick: fe
                    }, a.createElement(l.zx, {
                        className: F,
                        variant: "tertiary-neutral",
                        size: "large",
                        attributes: {
                            "aria-label": n
                        },
                        onClick: function(e) {
                            e.preventDefault(), o(!i)
                        }
                    }, a.createElement(l.JO, {
                        svg: b.DotsVerticalIcon,
                        size: "large"
                    })), a.cloneElement(t, {
                        active: i,
                        onCloseTrigger: function() {
                            o(!1)
                        }
                    }))
                })),
                ge = function() {
                    return ge = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, ge.apply(this, arguments)
                },
                he = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                be = a.memo((function(e) {
                    var t, n = e.useColor,
                        r = void 0 === n || n,
                        i = e.status,
                        o = he(e, ["useColor", "status"]),
                        c = $({
                            translations: a.useContext(ke).translations
                        }).statusText,
                        l = i && ("string" === typeof c ? c : c(i));
                    return a.createElement(p, ge({
                        color: i && r ? (t = i, {
                            CONFIRMED: "constructive_foreground",
                            UNCONFIRMED: "callout_foreground",
                            PENDING: "callout_foreground",
                            PRE_ORDER: "callout_foreground",
                            CANCELLED: "foreground_alt",
                            CANCELLED_BY_BOOKING: "foreground_alt",
                            COMPLETE: "foreground_alt",
                            ACTION_REQUIRED: "destructive_foreground",
                            PAYMENT_PENDING: "destructive_foreground",
                            UNKNOWN: "destructive_foreground"
                        }[t]) : void 0
                    }, o), l)
                })),
                Ee = function() {
                    return Ee = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Ee.apply(this, arguments)
                },
                ye = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                ke = a.createContext({}),
                Ce = function(e) {
                    var t = e.linkAttributes,
                        n = e.linkUrl,
                        r = e.onClick,
                        i = e.children;
                    return n || r ? a.createElement("a", Ee({
                        className: A,
                        href: n || "#",
                        onClick: r
                    }, t), i) : a.createElement(a.Fragment, null, i)
                },
                Oe = Object.assign(a.memo((function(e) {
                    var t = e.children,
                        n = e.compact,
                        r = e.isPast,
                        i = e.linkAttributes,
                        o = e.linkUrl,
                        c = e.menu,
                        l = e.onClick,
                        s = e.className,
                        u = e.translations,
                        d = ye(e, ["children", "compact", "isPast", "linkAttributes", "linkUrl", "menu", "onClick", "className", "translations"]),
                        m = [R, x, s];
                    r && m.push(P);
                    var v = n ? {
                        p: "4x"
                    } : {};
                    return a.createElement(ke.Provider, {
                        value: {
                            compact: n,
                            isPast: r,
                            translations: u
                        }
                    }, a.createElement(Ce, Ee({}, {
                        linkAttributes: i,
                        linkUrl: o,
                        onClick: l
                    }), a.createElement(S, Ee({
                        className: m.join(" ")
                    }, v, d), a.createElement(p, {
                        className: D
                    }, t), c)))
                })), {
                    Content: Q,
                    Menu: _e,
                    Status: be
                });

            function Ne(e) {
                var t = e.className;
                return a.createElement("svg", {
                    className: t,
                    viewBox: "0 0 1188 93",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, a.createElement("path", {
                    d: "M0 83.5619C0 87.8929 3.43929 91.3322 7.89762 91.3322C12.2286 91.3322 15.6679 87.8929 15.6679 83.5619V59.6143H35.4119L57.0667 87.256C58.85 89.6762 61.1429 91.3322 64.7095 91.3322C68.531 91.3322 72.225 88.4024 72.225 84.0715C72.225 81.6512 71.206 79.9953 69.6774 78.0846L52.6084 56.5572C64.5822 52.8631 72.8619 44.2012 72.8619 29.9345V29.6798C72.8619 21.9095 70.1869 15.2857 65.4738 10.4452C59.7417 4.84048 50.9524 1.52857 39.7429 1.52857H7.89762C3.43929 1.52857 0 4.96786 0 9.42619V83.5619ZM15.6679 45.7298V15.7952H38.4691C50.0607 15.7952 56.9393 21.0179 56.9393 30.5714V30.8262C56.9393 39.8703 49.806 45.7298 38.5964 45.7298H15.6679Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M142.241 92.2238C169.628 92.2238 188.99 71.206 188.99 46.1119V45.8572C188.99 20.7631 169.882 0 142.496 0C115.109 0 95.7467 21.0179 95.7467 46.1119V46.3667C95.7467 71.4607 114.854 92.2238 142.241 92.2238ZM142.496 77.7024C124.79 77.7024 112.179 63.4357 112.179 46.1119V45.8572C112.179 28.5333 124.535 14.394 142.241 14.394C159.947 14.394 172.557 28.7881 172.557 46.1119V46.3667C172.557 63.6905 160.202 77.7024 142.496 77.7024Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M256.961 92.2238C271.355 92.2238 280.909 87.6381 289.316 80.25C290.717 78.9762 291.864 77.0655 291.864 74.6453C291.864 70.6965 288.424 67.3845 284.476 67.3845C282.565 67.3845 280.909 68.1488 279.763 69.1679C273.266 74.6453 266.897 77.7024 257.471 77.7024C240.402 77.7024 228.046 63.5631 228.046 46.1119V45.8572C228.046 28.406 240.529 14.394 257.471 14.394C266.005 14.394 272.629 17.4512 278.743 22.4191C279.763 23.1833 281.291 23.9476 283.457 23.9476C287.788 23.9476 291.227 20.6357 291.227 16.3048C291.227 13.5024 289.826 11.3369 288.17 10.0631C280.399 4.07619 271.355 0 257.598 0C230.593 0 211.614 20.7631 211.614 46.1119V46.3667C211.614 71.9703 230.976 92.2238 256.961 92.2238Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M317.248 83.5619C317.248 87.8929 320.688 91.3322 325.146 91.3322C329.477 91.3322 332.916 87.8929 332.916 83.5619V65.0917L347.438 51.0798L376.098 87.6381C377.754 89.8036 379.665 91.3322 382.722 91.3322C387.181 91.3322 390.62 88.0203 390.62 83.6893C390.62 81.2691 389.728 79.7405 388.454 78.0846L358.392 40.7619L386.161 14.0119C387.945 12.356 388.964 10.5726 388.964 8.15239C388.964 4.33095 386.034 0.891663 381.703 0.891663C378.901 0.891663 376.99 1.91071 375.207 3.82143L332.916 46.3667V8.6619C332.916 4.33095 329.477 0.891663 325.146 0.891663C320.688 0.891663 317.248 4.33095 317.248 8.6619V83.5619Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M423.598 90.6953H476.079C479.9 90.6953 483.084 87.6381 483.084 83.6893C483.084 79.8679 479.9 76.6834 476.079 76.6834H431.368V52.7357H469.709C473.531 52.7357 476.715 49.6786 476.715 45.8572C476.715 41.9084 473.531 38.7238 469.709 38.7238H431.368V15.5405H475.442C479.263 15.5405 482.448 12.4833 482.448 8.53452C482.448 4.7131 479.263 1.52857 475.442 1.52857H423.598C419.139 1.52857 415.7 4.96786 415.7 9.42619V82.7977C415.7 87.256 419.139 90.6953 423.598 90.6953Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M530.588 83.5619C530.588 87.8929 534.154 91.3322 538.485 91.3322C542.816 91.3322 546.383 87.8929 546.383 83.5619V16.05H568.165C572.114 16.05 575.298 12.7381 575.298 8.78929C575.298 4.84048 572.114 1.52857 568.165 1.52857H508.933C504.857 1.52857 501.672 4.84048 501.672 8.78929C501.672 12.7381 504.857 16.05 508.933 16.05H530.588V83.5619Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M666.661 83.5619C666.661 87.8929 670.228 91.3322 674.559 91.3322C678.89 91.3322 682.457 87.8929 682.457 83.5619V16.05H704.239C708.188 16.05 711.372 12.7381 711.372 8.78929C711.372 4.84048 708.188 1.52857 704.239 1.52857H645.007C640.93 1.52857 637.746 4.84048 637.746 8.78929C637.746 12.7381 640.93 16.05 645.007 16.05H666.661V83.5619Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M734.993 83.5619C734.993 87.8929 738.433 91.3322 742.891 91.3322C747.222 91.3322 750.661 87.8929 750.661 83.5619V59.6143H770.405L792.06 87.256C793.843 89.6762 796.136 91.3322 799.703 91.3322C803.524 91.3322 807.218 88.4024 807.218 84.0715C807.218 81.6512 806.199 79.9953 804.671 78.0846L787.602 56.5572C799.575 52.8631 807.855 44.2012 807.855 29.9345V29.6798C807.855 21.9095 805.18 15.2857 800.467 10.4452C794.735 4.84048 785.946 1.52857 774.736 1.52857H742.891C738.433 1.52857 734.993 4.96786 734.993 9.42619V83.5619ZM750.661 45.7298V15.7952H773.462C785.054 15.7952 791.933 21.0179 791.933 30.5714V30.8262C791.933 39.8703 784.799 45.7298 773.59 45.7298H750.661Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M828.575 84.0715C828.575 88.1477 831.759 91.3322 835.835 91.3322C839.147 91.3322 841.822 89.5488 843.096 86.3643L850.611 69.1679H893.921L901.182 85.8548C902.583 89.1667 905.131 91.3322 908.825 91.3322C913.028 91.3322 916.213 88.0203 916.213 83.8167C916.213 82.7976 915.958 81.6512 915.321 80.5048L882.202 6.62381C880.419 2.675 877.361 0.254759 872.903 0.254759H872.139C867.68 0.254759 864.496 2.675 862.713 6.62381L829.594 80.5048C828.957 81.7786 828.575 82.925 828.575 84.0715ZM856.598 55.2834L872.266 19.2345L887.934 55.2834H856.598Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M965.552 91.9691H966.444C970.902 91.9691 973.832 89.5488 975.488 85.6L1006.82 11.7191C1007.21 10.8274 1007.59 9.55357 1007.59 8.40714C1007.59 4.20357 1004.15 0.891663 999.817 0.891663C996.123 0.891663 993.321 3.3119 992.302 5.98691L966.189 70.8238L940.458 6.49643C939.184 3.18452 936.509 0.891663 932.433 0.891663C927.975 0.891663 924.535 4.33095 924.535 8.53452C924.535 9.93572 924.917 11.0821 925.427 12.2286L956.635 85.6C958.291 89.5488 961.221 91.9691 965.552 91.9691Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M1039.74 90.6953H1092.22C1096.04 90.6953 1099.23 87.6381 1099.23 83.6893C1099.23 79.8679 1096.04 76.6834 1092.22 76.6834H1047.51V52.7357H1085.85C1089.67 52.7357 1092.86 49.6786 1092.86 45.8572C1092.86 41.9084 1089.67 38.7238 1085.85 38.7238H1047.51V15.5405H1091.58C1095.4 15.5405 1098.59 12.4833 1098.59 8.53452C1098.59 4.7131 1095.4 1.52857 1091.58 1.52857H1039.74C1035.28 1.52857 1031.84 4.96786 1031.84 9.42619V82.7977C1031.84 87.256 1035.28 90.6953 1039.74 90.6953Z",
                    fill: "#2B2D36"
                }), a.createElement("path", {
                    d: "M1124.82 82.7977C1124.82 87.256 1128.26 90.6953 1132.72 90.6953H1180.87C1184.82 90.6953 1188 87.5107 1188 83.5619C1188 79.6131 1184.82 76.4286 1180.87 76.4286H1140.49V8.6619C1140.49 4.33095 1137.05 0.891663 1132.72 0.891663C1128.26 0.891663 1124.82 4.33095 1124.82 8.6619V82.7977Z",
                    fill: "#2B2D36"
                }))
            }

            function Ie(e) {
                return "AccommodationReservation" === e.__typename || "BookingBasicReservation" === e.__typename || "RocketMilesReservation" === e.__typename
            }

            function Te(e) {
                return e.verticalType === ve.BASIC
            }

            function Se(e) {
                return "AttractionReservation" === e.__typename
            }

            function Ae(e) {
                return "CarReservation" === e.__typename
            }

            function Re(e) {
                return "FlightReservation" === e.__typename
            }

            function xe(e) {
                return "PrebookTaxiReservation" === e.__typename
            }

            function De(e) {
                return "PublicTransportReservation" === e.__typename
            }

            function Pe(e) {
                return "SingleTripInsuranceReservation" === e.__typename
            }

            function we(e) {
                return new Date(e.startDateTime) > new Date
            }

            function Le(e) {
                var t = new Date(e.endDateTime.split("T")[0]),
                    n = new Date;
                return n.setHours(0, 0, 0, 0), t < n
            }

            function Me(e) {
                return e.reservationStatus === se.CANCELLED
            }

            function je(e) {
                return Le(e) || Me(e)
            }! function(e) {
                e.CLICKED_ON_ACCOM_ADD_REVIEW = "mytrips_clicked_on_accom_add_review", e.CLICKED_ON_ACCOM_CANCEL_BOOKING = "mytrips_clicked_on_accom_cancel_booking", e.CLICKED_ON_ACCOM_GUEST_DATE_CHANGE = "mytrips_clicked_on_accom_guest_date_change", e.CLICKED_ON_ACCOM_HELP_CENTRE = "mytrips_clicked_on_accom_help_centre", e.CLICKED_ON_ACCOM_INVALID_CREDIT_CARD = "mytrips_clicked_on_accom_invalid_credit_card", e.CLICKED_ON_ACCOM_MESSAGE_PROPERTY = "mytrips_clicked_on_accom_message_property", e.CLICKED_ON_ACCOM_PARTNER_DATE_CHANGE = "mytrips_clicked_on_accom_partner_date_change", e.CLICKED_ON_BOOKING_CARD = "mytrips_clicked_on_booking_card", e.CLICKED_ON_CONNECTOR = "mytrips_clicked_on_connector", e.CLICKED_ON_CONTEXTUAL_MENU = "mytrips_clicked_on_contextual_menu", e.CLICKED_ON_PAST_AND_CANCELLED_TRIPS = "mytrips_clicked_on_past_and_cancelled_trips", e.CLICKED_ON_RESERVATION_CONNECTOR = "mytrips_clicked_on_reservation_connector", e.CLICKED_ON_TRIP_CONNECTOR = "mytrips_clicked_on_trip_connector", e.IMPORTED_BOOKING_SUCCESS = "mytrips_imported_booking_success", e.INTERACTED_WITH_CONTEXTUAL_MENU = "mytrips_interacted_with_contextual_menu", e.INTERACTION = "mytrips_interaction", e.LANDED_ON_PAST_TRIPS_PAGE = "mytrips_landed_on_past_trips_page", e.LANDED_ON_TRIPS_PAGE = "mytrips_landed_on_trips_page"
            }(ee || (ee = {})),
            function(e) {
                e.MyTrips = "MyTrips", e.UpcomingTrip = "UpcomingTrip", e.PreviewMode = "PreviewMode"
            }(te || (te = {})),
            function(e) {
                e.Loading = "Loading", e.Success = "Success", e.Error = "Error"
            }(ne || (ne = {})),
            function(e) {
                e.CRITICAL = "CRITICAL", e.LOW = "LOW", e.MAJOR = "MAJOR", e.MINOR = "MINOR", e.VERY_LOW = "VERY_LOW"
            }(re || (re = {})),
            function(e) {
                e.DEEPLINK = "DEEPLINK", e.DIALOG = "DIALOG"
            }(ie || (ie = {})),
            function(e) {
                e.INDEX_UPCOMING_TRIP = "INDEX_UPCOMING_TRIP", e.MY_TRIPS_TIMELINE = "MY_TRIPS_TIMELINE"
            }(ae || (ae = {})),
            function(e) {
                e.ACCOMMODATION_POB = "ACCOMMODATION_POB", e.ADD_ARRIVAL_TIME = "ADD_ARRIVAL_TIME", e.ADD_REVIEW = "ADD_REVIEW", e.ALERT_COVID_19 = "ALERT_COVID_19", e.APP_MANAGE_RESERVATION = "APP_MANAGE_RESERVATION", e.ATTRACTION_VOUCHER = "ATTRACTION_VOUCHER", e.ATTR_FIND_THINGS_TO_DO = "ATTR_FIND_THINGS_TO_DO", e.BASIC_TRIP = "BASIC_TRIP", e.BOOK_AGAIN = "BOOK_AGAIN", e.CANCEL_BOOKING = "CANCEL_BOOKING", e.CAR_VOUCHER = "CAR_VOUCHER", e.CONTACT_HELP_CENTER = "CONTACT_HELP_CENTER", e.DEALS_UNLOCKED = "DEALS_UNLOCKED", e.EARLY_CHECK_IN = "EARLY_CHECK_IN", e.EMERGENCY_MESSAGE_CONNECTOR = "EMERGENCY_MESSAGE_CONNECTOR", e.FLIGHT_ONLINE_CHECK_IN = "FLIGHT_ONLINE_CHECK_IN", e.GET_DIRECTION = "GET_DIRECTION", e.GET_TO_THE_PROPERTY = "GET_TO_THE_PROPERTY", e.GUEST_DATE_CHANGE = "GUEST_DATE_CHANGE", e.HELP_CENTER = "HELP_CENTER", e.INVALID_PAYMENT = "INVALID_PAYMENT", e.KEY_COLLECTION_INFO = "KEY_COLLECTION_INFO", e.LATE_CHECK_IN = "LATE_CHECK_IN", e.LATE_CHECK_IN_SURVEY = "LATE_CHECK_IN_SURVEY", e.MENU_ITEM_ADD_REVIEW = "MENU_ITEM_ADD_REVIEW", e.MENU_ITEM_CANCEL_RESERVATION = "MENU_ITEM_CANCEL_RESERVATION", e.MENU_ITEM_GET_DIRECTION = "MENU_ITEM_GET_DIRECTION", e.MENU_ITEM_HC_LINK = "MENU_ITEM_HC_LINK", e.MENU_ITEM_HIDE_RESERVATION = "MENU_ITEM_HIDE_RESERVATION", e.MENU_ITEM_INVALID_PAYMENT = "MENU_ITEM_INVALID_PAYMENT", e.MENU_ITEM_MANAGE_RESERVATION = "MENU_ITEM_MANAGE_RESERVATION", e.MENU_ITEM_MODIFY_DATE_RESERVATION = "MENU_ITEM_MODIFY_DATE_RESERVATION", e.MENU_ITEM_MODIFY_DATE_RESERVATION_APPROVAL = "MENU_ITEM_MODIFY_DATE_RESERVATION_APPROVAL", e.MENU_ITEM_MSG_TO_RESERVATION = "MENU_ITEM_MSG_TO_RESERVATION", e.MENU_ITEM_RECOVER_RESERVATION = "MENU_ITEM_RECOVER_RESERVATION", e.MENU_ITEM_SHARE_RESERVATION = "MENU_ITEM_SHARE_RESERVATION", e.MENU_ITEM_USER_CHANGE_DATE = "MENU_ITEM_USER_CHANGE_DATE", e.MENU_ITEM_USER_REQUEST_DATE_CHANGE = "MENU_ITEM_USER_REQUEST_DATE_CHANGE", e.MENU_ITEM_VIEW_CANCEL_POLICY = "MENU_ITEM_VIEW_CANCEL_POLICY", e.MENU_ITEM_VIEW_RESERVATION = "MENU_ITEM_VIEW_RESERVATION", e.MESSAGE_PROPERTY = "MESSAGE_PROPERTY", e.PARTNER_DATE_CHANGE = "PARTNER_DATE_CHANGE", e.TAXI_COMPANION = "TAXI_COMPANION", e.UPGRADE_ROOM = "UPGRADE_ROOM", e.VIEW_RESERVATION = "VIEW_RESERVATION"
            }(oe || (oe = {})),
            function(e) {
                e.FRIDAY = "FRIDAY", e.MONDAY = "MONDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY", e.THURSDAY = "THURSDAY", e.TUESDAY = "TUESDAY", e.UNKNOWN_DAY = "UNKNOWN_DAY", e.WEDNESDAY = "WEDNESDAY"
            }(ce || (ce = {})),
            function(e) {
                e.CANCELLATION = "CANCELLATION"
            }(le || (le = {})),
            function(e) {
                e.ACTION_REQUIRED = "ACTION_REQUIRED", e.CANCELLED = "CANCELLED", e.CONFIRMED = "CONFIRMED", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
            }(se || (se = {})),
            function(e) {
                e.ACCOMMODATION_ARRIVAL = "ACCOMMODATION_ARRIVAL", e.ACCOMMODATION_INSTAY = "ACCOMMODATION_INSTAY", e.ACCOMMODATION_PRETRIPS = "ACCOMMODATION_PRETRIPS", e.ATTRACTION_ARRIVAL = "ATTRACTION_ARRIVAL", e.BHOME_ARRIVAL = "BHOME_ARRIVAL", e.CAR_ARRIVAL = "CAR_ARRIVAL", e.CAR_INTRIP = "CAR_INTRIP", e.POST_TRIP = "POST_TRIP", e.TAXI_ARRIVAL = "TAXI_ARRIVAL"
            }(ue || (ue = {})),
            function(e) {
                e.CONNECTOR = "CONNECTOR", e.EXPERIENCE = "EXPERIENCE", e.RESERVATION = "RESERVATION"
            }(de || (de = {})),
            function(e) {
                e.CURRENT = "CURRENT", e.PAST = "PAST", e.UPCOMING = "UPCOMING"
            }(me || (me = {})),
            function(e) {
                e.DONE = "DONE", e.FAILED = "FAILED", e.PENDING = "PENDING"
            }(pe || (pe = {})),
            function(e) {
                e.ACCOMMODATION = "ACCOMMODATION", e.ATTRACTION = "ATTRACTION", e.BASIC = "BASIC", e.CAR = "CAR", e.FLIGHT = "FLIGHT", e.PREBOOK_TAXI = "PREBOOK_TAXI", e.PUBLIC_TRANSPORT = "PUBLIC_TRANSPORT", e.ROCKET_MILES = "ROCKET_MILES", e.SINGLE_TRIP_INSURANCE = "SINGLE_TRIP_INSURANCE"
            }(ve || (ve = {}));
            var Ue = function(e) {
                    var t = e.reservationStatus;
                    return function(e) {
                        return !we(e) && !Le(e)
                    }(e) || we(e) || t === se.CONFIRMED || je(e)
                },
                Fe = function(e) {
                    if (Ue(e)) return Le(e) ? "COMPLETE" : e.reservationStatus
                };

            function Ze(e) {
                return e.replace(/&nbsp;/g, " ")
            }

            function Ve(e) {
                if ("undefined" !== typeof DOMParser) try {
                    var t;
                    return null !== (t = (new DOMParser).parseFromString(e, "text/html").textContent) && void 0 !== t ? t : Ze(e)
                } catch (n) {
                    return Ze(e)
                }
                return Ze(e)
            }
            var He, Ge, Be = n(44393),
                Ke = n(98178);

            function ze() {
                return (0, f.T)().getSiteType() === Ke.N.MDOT
            }
            var Ye = (0, Be.Z)(He || (He = (0, g.Z)(["OOIBTBJePXIZNEdZAGBfTaePLSIRLT"]))),
                Qe = (0, Be.Z)(Ge || (Ge = (0, g.Z)(["ABVYUNAeJXAScHZFGLYJUWeDfBAKae"])));

            function We() {
                return ze() ? Ye : Qe
            }
            var Xe, qe, Je = (0, Be.Z)(Xe || (Xe = (0, g.Z)(["OOIBTKBOMDZIBNDRMET"]))),
                $e = (0, Be.Z)(qe || (qe = (0, g.Z)(["ABVYUIYBdOFVNZOXEHe"])));

            function et() {
                return ze() ? Je : $e
            }
            var tt, nt, rt, it, at, ot = (0, Be.Z)(tt || (tt = (0, g.Z)(["YNaXTbIVFGWfdTDPdJaEHOaT"]))),
                ct = (0, Be.Z)(nt || (nt = (0, g.Z)(["OOIBTBBLXOLScXQOVZeVTNVQJKDKaT"]))),
                lt = (0, Be.Z)(rt || (rt = (0, g.Z)(["ABVYUYNaXTfTLKGBfSUaecfbVCMIRe"])));

            function st() {
                return ze() ? ct : lt
            }

            function ut() {
                return ze() ? (0, Be.Z)(it || (it = (0, g.Z)(["OOIBTBBLXOQRTKeeWe"]))) : (0, Be.Z)(at || (at = (0, g.Z)(["ABVYUYNaXTbXUCeeC"])))
            }
            var dt, mt = 2,
                pt = 3,
                vt = 4,
                ft = 5,
                _t = 6,
                gt = 7;
            ! function(e) {
                e[e.mytrips_click_load_more = 1] = "mytrips_click_load_more", e[e.mytrips_error_on_load_more = 2] = "mytrips_error_on_load_more", e[e.mytrips_click_cant_find_booking = 3] = "mytrips_click_cant_find_booking", e[e.mytrips_error_cant_find_booking = 4] = "mytrips_error_cant_find_booking"
            }(dt || (dt = {}));
            var ht, bt = n(47169);

            function Et(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Et(Object(n), !0).forEach((function(t) {
                        (0, bt.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Et(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var kt, Ct, Ot = function() {
                    return (0, Be.Z)(ht || (ht = (0, g.Z)(["YNaXTbXALKFTCWTUTZALSIWe"])))
                },
                Nt = 1,
                It = 2,
                Tt = 3,
                St = 4,
                At = function() {
                    (0, v.ti)(Ot(), St)
                },
                Rt = (0, Be.Z)(kt || (kt = (0, g.Z)(["OOIBTBcPOeFaXTbGNXKFKe"]))),
                xt = (0, Be.Z)(Ct || (Ct = (0, g.Z)(["ABVYUNQJTeERXUFQcXCEC"])));

            function Dt() {
                return ze() ? Rt : xt
            }
            var Pt = {
                allUsersWithUpcomingTrips: 1,
                usersWith1UpcomingTrip: 2,
                usersWith2UpcomingTrips: 3,
                usersWith3UpcomingTrips: 4,
                usersWith4OrMoreUpcomingTrips: 5
            };

            function wt(e) {
                var t = Dt();
                (0, v.ti)(t, e)
            }
            var Lt = {
                clickOnReservationCard: 1,
                clickOnFirstCard: 2,
                clickOnSecondCard: 3,
                clickOnThirdCard: 4,
                clickOnArrowsOfTheCarousel: 5
            };

            function Mt() {
                var e = Dt();
                (0, v.pj)(e, Lt.clickOnArrowsOfTheCarousel)
            }

            function jt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? jt(Object(n), !0).forEach((function(t) {
                        (0, bt.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ft, Zt = function() {
                    var e = new Date;
                    return e.setHours(0, 0, 0, 0), e
                }(),
                Vt = function(e) {
                    return ("string" === typeof e ? e : e.toISOString()).split(/(\+|Z)/)[0]
                },
                Ht = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = new Date(t.skipTZ ? Vt(e) : e);
                    try {
                        var r = new Intl.DateTimeFormat(t.locale, {
                            hour: "2-digit",
                            minute: "2-digit"
                        }).format(n);
                        return {
                            day: new Intl.DateTimeFormat(t.locale, {
                                weekday: "short",
                                day: "2-digit",
                                month: "short"
                            }).format(n),
                            time: r
                        }
                    } catch (i) {
                        return
                    }
                },
                Gt = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Date(n.skipTZ ? Vt(e) : e),
                        i = (new Date).getFullYear(),
                        a = r.getFullYear() === i ? {
                            day: "numeric",
                            month: "short"
                        } : {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        },
                        o = {
                            locales: null !== (t = n.locale) && void 0 !== t ? t : "en-gb",
                            options: Ut(Ut({}, a), null === n || void 0 === n ? void 0 : n.options)
                        },
                        c = o.locales,
                        l = o.options;
                    try {
                        return Intl.DateTimeFormat(c, l).format(r)
                    } catch (s) {
                        return
                    }
                },
                Bt = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = new Date(n.skipTZ ? Vt(e) : e),
                        i = {
                            locales: null !== (t = n.locale) && void 0 !== t ? t : "en-gb",
                            options: Ut(Ut({}, {
                                hour: "2-digit",
                                minute: "2-digit"
                            }), null === n || void 0 === n ? void 0 : n.options)
                        },
                        a = i.locales,
                        o = i.options;
                    try {
                        return Intl.DateTimeFormat(a, o).format(r)
                    } catch (c) {
                        return
                    }
                };

            function Kt(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return zt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zt(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function zt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Yt(e) {
                return "ReservationTripItem" === (null === e || void 0 === e ? void 0 : e.__typename)
            }

            function Qt(e) {
                return "ExperienceTripItem" === (null === e || void 0 === e ? void 0 : e.__typename)
            }

            function Wt(e) {
                if (function(e) {
                        return Qt(e) && e.code === ue.ACCOMMODATION_INSTAY
                    }(e)) return e.additionalData
            }

            function Xt(e) {
                return e.connectors.filter(qt)
            }

            function qt(e) {
                return "BasicConnectorContent" === e.content.__typename
            }

            function Jt(e) {
                return "MenuItemConnectorContent" === e.content.__typename
            }

            function $t(e) {
                return "DeeplinkAction" === (null === e || void 0 === e ? void 0 : e.__typename)
            }

            function en(e) {
                return "DialogAction" === (null === e || void 0 === e ? void 0 : e.__typename)
            }

            function tn(e) {
                return $t(e) ? e : void 0
            }

            function nn(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return rn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rn(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function rn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var an, on = (0, Be.Z)(Ft || (Ft = (0, g.Z)(["YTBYNJXCcaWMGZCeNUSPFVWe"]))),
                cn = function(e, t) {
                    var n = e - (t || Zt);
                    return Math.floor(n / 1e3 / 60 / 60 / 24)
                },
                ln = function(e) {
                    var t, n = e.associatedReservations;
                    (0, v.pj)(on, 1);
                    var r = null === n || void 0 === n || null === (t = n[0]) || void 0 === t ? void 0 : t.publicFacingIdentifier;
                    if (r && an) {
                        var i = function(e) {
                            var t, n = nn(an);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r, i = t.value,
                                        a = nn(i.timelineGroups);
                                    try {
                                        for (a.s(); !(r = a.n()).done;) {
                                            var o, c = nn(r.value.tripItems);
                                            try {
                                                for (c.s(); !(o = c.n()).done;) {
                                                    var l = o.value;
                                                    if (Yt(l) && l.reservation.identifiers.publicFacingIdentifier === e) return i.trip
                                                }
                                            } catch (s) {
                                                c.e(s)
                                            } finally {
                                                c.f()
                                            }
                                        }
                                    } catch (s) {
                                        a.e(s)
                                    } finally {
                                        a.f()
                                    }
                                }
                            } catch (s) {
                                n.e(s)
                            } finally {
                                n.f()
                            }
                            return null
                        }(r);
                        if (i) {
                            var a = new Date(i.startDateTime.split("T")[0]),
                                o = cn(a);
                            o > 14 && (0, v.pj)(on, 2), o <= 14 && o >= 4 && (0, v.pj)(on, 3), o <= 3 && o >= 0 && (0, v.pj)(on, 4), o < 0 && (0, v.pj)(on, 5)
                        }
                    }
                },
                sn = n(92577),
                un = n(80827),
                dn = {
                    "en-gb": "en-gb",
                    "en-us": "en-us",
                    "es-ar": "es-es",
                    "es-mx": "es-mx",
                    "pt-br": "pt-br",
                    "pt-pt": "pt-pt",
                    "zh-cn": "zh-cn",
                    "zh-tw": "zh-cn",
                    ar: "ar-sa",
                    bg: "bg-bg",
                    ca: "ca-es",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    es: "es-es",
                    et: "et-ee",
                    fi: "fi-fi",
                    fr: "fr-fr",
                    he: "he-il",
                    hi: "hi-in",
                    hr: "hr-hr",
                    hu: "hu-hu",
                    id: "id-id",
                    is: "is-is",
                    it: "it-it",
                    ja: "ja-jp",
                    ka: "ka-ge",
                    ko: "ko-kr",
                    lt: "lt-lt",
                    lv: "lv-lv",
                    ms: "ms-my",
                    nl: "nl-nl",
                    no: "no-no",
                    pl: "pl-pl",
                    ro: "ro-ro",
                    ru: "ru-ru",
                    sk: "sk-sk",
                    sl: "sl-si",
                    sr: "sr-rs",
                    sv: "sv-se",
                    th: "th-th",
                    tl: "tl-ph",
                    tr: "tr-tr",
                    uk: "uk-ua",
                    vi: "vi-vn"
                };

            function mn(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return pn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pn(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function pn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var vn, fn = /[\\?&;]([^&;#=]*)=([^&;#]*)/g,
                _n = function(e) {
                    var t = e.split("?"),
                        n = (0, sn.Z)(t, 2),
                        r = n[0],
                        i = n[1],
                        a = function(e) {
                            for (var t, n = new URLSearchParams; null !== (t = fn.exec(e));) n.append(t[1], t[2]);
                            return n
                        }("?".concat(i));
                    return {
                        pathname: r,
                        searchParams: a
                    }
                },
                gn = function(e, t, n) {
                    if (0 !== (null === e || void 0 === e ? void 0 : e.indexOf("/"))) return e || "";
                    var r = _n(e),
                        i = r.pathname,
                        a = r.searchParams;
                    if (t) {
                        var o, c = mn(t.entries());
                        try {
                            for (c.s(); !(o = c.n()).done;) {
                                var l = (0, sn.Z)(o.value, 2),
                                    s = l[0],
                                    u = l[1];
                                a.set(s, u)
                            }
                        } catch (d) {
                            c.e(d)
                        } finally {
                            c.f()
                        }
                    }
                    return (0, un.K)({
                        host: "book",
                        pathname: i,
                        searchParams: a,
                        hash: n
                    }).toString()
                },
                hn = function(e, t) {
                    var n;
                    if (!e || !t) return "";
                    var r = _n(e),
                        i = r.pathname,
                        a = r.searchParams,
                        o = /\.booking\.com\/(.*?)\//,
                        c = null === (n = i.match(o)) || void 0 === n ? void 0 : n[1],
                        l = c ? dn[c] : void 0;
                    i = l ? i.replace(o, ".booking.com/".concat(l, "/")) : i, a.set("emailAddress", t);
                    var s = ze() ? "mdot" : "www",
                        u = "".concat(s, "-mytrips-my_trip_item-taxi-card-list-trip");
                    return a.set("adplat", u), "".concat(i, "?").concat(a.toString())
                },
                bn = function() {
                    return bn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, bn.apply(this, arguments)
                },
                En = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                yn = a.memo((function(e) {
                    var t = e.size,
                        n = e.onClose,
                        r = e.actions,
                        i = e.children,
                        o = En(e, ["size", "onClose", "actions", "children"]),
                        c = a.createElement(a.Fragment, null, a.createElement(p, {
                            variant: y(t),
                            marginBottom: "2x"
                        }, i), function(e) {
                            var t = e.actions,
                                n = void 0 === t ? [] : t,
                                r = e.size,
                                i = void 0 === r ? "medium" : r,
                                o = n.map((function(e, t) {
                                    var n = "dialog-btn-".concat(t),
                                        r = "boolean" === typeof e.wide ? {
                                            s: e.wide,
                                            l: !1
                                        } : e.wide || {
                                            s: !0,
                                            l: !1
                                        };
                                    return 0 !== t || r ? a.createElement(l.Kq.Item, {
                                        key: n
                                    }, a.createElement(l.zx, bn({
                                        variant: "tertiary",
                                        size: i,
                                        wide: r
                                    }, e))) : a.createElement(l.zx.Aligner, {
                                        alignment: "start",
                                        key: n
                                    }, a.createElement(l.zx, bn({
                                        variant: "tertiary",
                                        size: i,
                                        wide: r
                                    }, e)))
                                }));
                            return a.createElement(l.Kq, {
                                direction: {
                                    s: "column",
                                    l: "row"
                                }
                            }, o)
                        }({
                            actions: r,
                            size: t
                        }));
                    return a.createElement(l.br, bn({}, o, {
                        onCloseTrigger: n,
                        position: {
                            s: "bottom",
                            l: "center"
                        }
                    }), c)
                })),
                kn = "c31ecb9e02",
                Cn = "cfd9029c40",
                On = "ab68bbae66",
                Nn = "b9e6e47b61",
                In = "ecb6bcdb83",
                Tn = "bde5a6a988",
                Sn = "f76b5e25dc",
                An = "f87fbd6113",
                Rn = "d8175232f5",
                xn = function() {
                    return xn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, xn.apply(this, arguments)
                },
                Dn = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                };
            ! function(e) {
                e.CRITICAL = "CRITICAL", e.LOW = "LOW", e.MAJOR = "MAJOR", e.MINOR = "MINOR", e.VERY_LOW = "VERY_LOW"
            }(vn || (vn = {}));
            var Pn, wn = function(e) {
                    var t = e.linkUrl,
                        n = e.onClick,
                        r = e.openDetails,
                        i = e.children;
                    return r ? a.createElement("button", {
                        className: kn,
                        onClick: function(e) {
                            r(e), n && n(e)
                        }
                    }, i) : t ? a.createElement("a", {
                        className: kn,
                        rel: "noreferrer",
                        target: "_blank",
                        href: t,
                        onClick: n
                    }, i) : n ? a.createElement("div", {
                        onClick: n
                    }, i) : a.createElement(a.Fragment, null, i)
                },
                Ln = function(e, t) {
                    var n = [Cn];
                    return e === vn.CRITICAL ? n.push(An) : e === vn.MAJOR && n.push(Rn), t && n.push(t), n.join(" ")
                },
                Mn = a.memo((function(e) {
                    var t = e.icon,
                        n = void 0 === t ? b.WarningIcon : t,
                        r = e.headline,
                        i = e.headlineShort,
                        o = e.severity,
                        c = e.onClick,
                        s = e.actions,
                        u = e.closeAriaLabel,
                        d = void 0 === u ? "" : u,
                        m = e.details,
                        v = e.dismissable,
                        f = e.dismissHandler,
                        _ = e.size,
                        g = void 0 === _ ? "medium" : _,
                        h = e.className,
                        E = Dn(e, ["icon", "headline", "headlineShort", "severity", "onClick", "actions", "closeAriaLabel", "details", "dismissable", "dismissHandler", "size", "className"]),
                        y = (0, l.Sj)().isSmall,
                        k = a.useState(!1),
                        C = k[0],
                        N = k[1],
                        I = a.useState(!1),
                        T = I[0],
                        S = I[1],
                        A = (null === s || void 0 === s ? void 0 : s.length) && !m ? s[0].href : void 0,
                        R = y && i ? i : r;
                    return T ? null : a.createElement(a.Fragment, null, a.createElement(wn, {
                        linkUrl: A,
                        onClick: c,
                        openDetails: m ? function(e) {
                            e.preventDefault(), N(!0)
                        } : void 0
                    }, a.createElement(O, xn({
                        className: Ln(o, h),
                        size: g
                    }, E), a.createElement(l.JO, {
                        className: On,
                        size: g,
                        svg: n
                    }), a.createElement(p, {
                        className: Nn
                    }, R), v && a.createElement(l.zx, {
                        className: "large" === g ? Sn : Tn,
                        attributes: {
                            "aria-label": d
                        },
                        onClick: function(e) {
                            e.preventDefault(), f && f(e), S(!0)
                        },
                        icon: b.CloseIcon,
                        variant: "tertiary-neutral",
                        size: g
                    }), !v && (A || m) && a.createElement(l.JO, {
                        className: In,
                        size: g,
                        svg: b.ArrowNavRightIcon
                    }))), m && a.createElement(yn, {
                        active: C,
                        title: m.title,
                        actions: s,
                        closeAriaLabel: d,
                        onClose: function() {
                            return N(!1)
                        }
                    }, m.body, m.children))
                })),
                jn = {
                    grid: "b2250313ee",
                    "grid-small": "e62fa0b3d5",
                    "grid-medium": "b5d7981610",
                    "grid-large": "b68b35503a",
                    logo: "d53d7e2f04"
                };
            ! function(e) {
                e.large = "large", e.medium = "medium", e.small = "small"
            }(Pn || (Pn = {}));
            var Un, Fn = a.memo((function(e) {
                    var t = e.logos,
                        n = e.size,
                        r = void 0 === n ? "medium" : n,
                        i = jn["grid-".concat(r)],
                        o = function(e) {
                            switch (e) {
                                case "small":
                                    return {
                                        width: 22,
                                        height: 22
                                    };
                                case "large":
                                    return {
                                        width: 32,
                                        height: 32
                                    };
                                default:
                                    return {
                                        width: 24,
                                        height: 24
                                    }
                            }
                        }(r),
                        c = o.width,
                        s = o.height;
                    return a.createElement(p, {
                        className: [jn.grid, i].join(" ")
                    }, t.map((function(e) {
                        return a.createElement(l.Ee, {
                            width: c,
                            height: s,
                            contentMode: "fit",
                            src: e,
                            className: jn.logo,
                            key: e
                        })
                    })))
                })),
                Zn = "aeeb8a0418",
                Vn = "ef70cf669a",
                Hn = function() {
                    return Hn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Hn.apply(this, arguments)
                },
                Gn = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                Bn = a.memo((function(e) {
                    var t = e.elevated,
                        n = e.children,
                        r = Gn(e, ["elevated", "children"]),
                        i = [Zn];
                    return t && i.push(Vn), a.createElement(p, Hn({}, r, {
                        className: i.join(" ")
                    }), n)
                })),
                Kn = {
                    hour: "2-digit",
                    minute: "2-digit"
                },
                zn = {
                    day: "2-digit",
                    month: "short"
                },
                Yn = function(e, t, n, r) {
                    return Ae(t) ? function(e, t, n, r) {
                        var i, c, s, u, d, m = new Date(e.startDateTime.slice(0, 19)),
                            p = t === oe.EARLY_CHECK_IN ? "tripxp_connector_modal_booking_go_pick_up_time_early_checkin" : "tripxp_connector_modal_booking_go_pick_up_time_late_checkin",
                            f = n.trans((0, o.t)(p, {
                                num_exception: m ? m.getHours() : 0,
                                variables: {
                                    time: m.toLocaleString(r, Kn),
                                    short_date: m.toLocaleString(r, zn)
                                }
                            })),
                            _ = et();
                        return {
                            image: null === (i = e.product) || void 0 === i || null === (c = i.photos) || void 0 === c || null === (s = c[0]) || void 0 === s ? void 0 : s.absoluteUrl,
                            heading: n.trans((0, o.t)("my_trips_parity_car_type_or_similar", {
                                variables: {
                                    car_type: null !== (u = null === (d = e.product) || void 0 === d ? void 0 : d.name) && void 0 !== u ? u : ""
                                }
                            })),
                            dates: t === oe.LATE_CHECK_IN && (0, v.zm)(_) ? void 0 : f,
                            additionalContent: t === oe.LATE_CHECK_IN && (0, v.zm)(_) ? a.createElement(l.xv, {
                                color: "callout"
                            }, f) : void 0
                        }
                    }(t, e, n, r) : xe(t) ? function(e, t, n, r) {
                        var i, c, s, u, d = null === (i = e.prebookTaxiComponents) || void 0 === i ? void 0 : i[0],
                            m = new Date(null === d || void 0 === d ? void 0 : d.start.datetime.slice(0, 19)),
                            p = t === oe.EARLY_CHECK_IN ? "tripxp_connector_modal_taxi_pick_up_time_early_checkin" : "tripxp_connector_modal_taxi_pick_up_time_late_checkin",
                            f = n.trans((0, o.t)(p, {
                                num_exception: m ? m.getHours() : 0,
                                variables: {
                                    time: m.toLocaleString(r, Kn),
                                    short_date: m.toLocaleString(r, zn)
                                }
                            })),
                            _ = et();
                        return {
                            image: null === d || void 0 === d || null === (c = d.product) || void 0 === c ? void 0 : c.icon,
                            heading: null !== (s = null === d || void 0 === d || null === (u = d.product) || void 0 === u ? void 0 : u.vehicleTypeText) && void 0 !== s ? s : "",
                            dates: t === oe.LATE_CHECK_IN && (0, v.zm)(_) ? void 0 : f,
                            additionalContent: t === oe.LATE_CHECK_IN && (0, v.zm)(_) ? a.createElement(l.xv, {
                                color: "callout"
                            }, f) : void 0
                        }
                    }(t, e, n, r) : Re(t) ? function(e, t, n, r) {
                        var i, c, s, u, d = e.flightComponents ? e.flightComponents[0].parts.map((function(e) {
                                var t, n;
                                return null === (t = e.marketingCarrier) || void 0 === t || null === (n = t.logo) || void 0 === n ? void 0 : n.absoluteUrl
                            })).filter((function(e) {
                                return e
                            })) : [],
                            m = 1 === (null === (i = e.flightComponents) || void 0 === i ? void 0 : i[0].parts.length) ? d[0] : a.createElement(Fn, {
                                logos: d,
                                size: "small"
                            }),
                            p = new Date(null === (c = e.flightComponents) || void 0 === c ? void 0 : c[0].parts[0].endDateTime.slice(0, 19)),
                            f = t === oe.EARLY_CHECK_IN ? "mytrips_tconnect_modal_early_check_arrival_time" : "mytrips_tconnect_modal_late_check_arrival_time",
                            _ = null === e || void 0 === e || null === (s = e.flightComponents) || void 0 === s || null === (u = s[0].parts.slice(-1)[0]) || void 0 === u ? void 0 : u.endLocation,
                            g = (null === _ || void 0 === _ ? void 0 : _.location) && (null === _ || void 0 === _ ? void 0 : _.location.city) || (null === _ || void 0 === _ ? void 0 : _.iata),
                            h = n.trans((0, o.t)(f, {
                                num_exception: 0,
                                variables: {
                                    time: p.toLocaleString(r, Kn),
                                    short_date: p.toLocaleString(r, zn)
                                }
                            })),
                            b = et();
                        return {
                            image: m,
                            heading: n.trans((0, o.t)("my_trips_card_index_title_flight_to", {
                                variables: {
                                    city_name: g || ""
                                }
                            })),
                            dates: t === oe.LATE_CHECK_IN && (0, v.zm)(b) ? void 0 : h,
                            additionalContent: t === oe.LATE_CHECK_IN && (0, v.zm)(b) ? a.createElement(l.xv, {
                                color: "callout"
                            }, h) : void 0
                        }
                    }(t, e, n, r) : Ie(t) ? function(e, t, n, r) {
                        var i, c, s, u, d, m, p = new Date(e.checkIn.start.slice(0, 19)),
                            f = new Date(e.checkIn.end.slice(0, 19)),
                            _ = null !== (i = null === (c = e.propertyData) || void 0 === c ? void 0 : c.name) && void 0 !== i ? i : "",
                            g = t === oe.EARLY_CHECK_IN ? "mytrips_tconnect_modal_early_check_time" : "mytrips_tconnect_modal_late_check_time",
                            h = n.trans((0, o.t)(g, {
                                num_exception: 0,
                                variables: {
                                    start_time: p.toLocaleString(r, Kn),
                                    end_time: f.toLocaleString(r, Kn),
                                    short_date: p.toLocaleString(r, zn)
                                }
                            })),
                            E = et();
                        return {
                            image: a.createElement(l.Ee, {
                                alt: _,
                                src: null !== (s = null === (u = e.propertyData) || void 0 === u || null === (d = u.photos) || void 0 === d || null === (m = d[0]) || void 0 === m ? void 0 : m.absoluteUrl) && void 0 !== s ? s : "",
                                contentMode: "fill",
                                height: "48px",
                                width: "48px",
                                fallback: "icon",
                                fallbackIcon: b.HotelIcon
                            }),
                            heading: _,
                            dates: t === oe.LATE_CHECK_IN && (0, v.zm)(E) ? void 0 : h,
                            additionalContent: t === oe.LATE_CHECK_IN && (0, v.zm)(E) ? a.createElement(l.xv, {
                                color: "callout"
                            }, h) : void 0
                        }
                    }(t, e, n, r) : void 0
                },
                Qn = function(e) {
                    var t = e.connectorCode,
                        n = e.reservations,
                        r = (0, c.QT)(),
                        o = (0, f.T)().getLanguage();
                    return n.length ? a.createElement(Bn, {
                        mt: "2x"
                    }, n.map((function(e) {
                        var n = Yn(t, e, r, o);
                        return n ? a.createElement(Oe, {
                            compact: !0,
                            noDepth: !0,
                            key: n.heading
                        }, a.createElement(Oe.Content, (0, i.Z)({
                            headingTagName: "h4"
                        }, n))) : null
                    }))) : null
                },
                Wn = {
                    Calendar: b.CalendarIcon,
                    ChatBubbles: b.ChatBubblesIcon,
                    Close: b.CloseIcon,
                    InfoSign: b.InfoSignIcon,
                    List: b.ListIcon,
                    MinusCircle: b.MinusCircleIcon,
                    QuestionMarkCircle: b.QuestionMarkCircleIcon,
                    Share: b.ShareIcon,
                    Update: b.UpdateIcon,
                    Directions: b.DirectionsIcon,
                    Edit: b.EditIcon,
                    StarOutline: b.StarOutlineIcon,
                    HotelSingleBedUpload: b.HotelSingleBedUploadIcon,
                    PhoneActionNavigationPin: b.PhoneActionNavigationPinIcon,
                    ticket: b.TicketIcon
                },
                Xn = (Un = {}, (0, bt.Z)(Un, oe.ADD_ARRIVAL_TIME, b.CheckInIcon), (0, bt.Z)(Un, oe.ADD_REVIEW, b.StarOutlineIcon), (0, bt.Z)(Un, oe.ATTRACTION_VOUCHER, b.TicketIcon), (0, bt.Z)(Un, oe.BOOK_AGAIN, b.EarthRefreshIcon), (0, bt.Z)(Un, oe.BOOK_AGAIN, b.UpdateIcon), (0, bt.Z)(Un, oe.CANCEL_BOOKING, b.CloseIcon), (0, bt.Z)(Un, oe.CAR_VOUCHER, b.TicketIcon), (0, bt.Z)(Un, oe.CONTACT_HELP_CENTER, b.QuestionMarkCircleIcon), (0, bt.Z)(Un, oe.FLIGHT_ONLINE_CHECK_IN, b.CheckInDeskIcon), (0, bt.Z)(Un, oe.GET_DIRECTION, b.DirectionsIcon), (0, bt.Z)(Un, oe.GUEST_DATE_CHANGE, b.CalendarIcon), (0, bt.Z)(Un, oe.HELP_CENTER, b.QuestionMarkCircleIcon), (0, bt.Z)(Un, oe.KEY_COLLECTION_INFO, b.KeyIcon), (0, bt.Z)(Un, oe.LATE_CHECK_IN_SURVEY, b.PersonChatBubbleIcon), (0, bt.Z)(Un, oe.MENU_ITEM_HIDE_RESERVATION, b.MinusCircleIcon), (0, bt.Z)(Un, oe.MESSAGE_PROPERTY, b.ChatBubblesIcon), (0, bt.Z)(Un, oe.TAXI_COMPANION, b.PhoneActionNavigationPinIcon), (0, bt.Z)(Un, oe.UPGRADE_ROOM, b.HotelSingleBedUploadIcon), (0, bt.Z)(Un, oe.VIEW_RESERVATION, b.EditIcon), (0, bt.Z)(Un, oe.ATTR_FIND_THINGS_TO_DO, b.AttractionsIcon), Un),
                qn = function(e) {
                    var t;
                    return null !== (t = Wn[e]) && void 0 !== t ? t : null
                },
                Jn = function(e) {
                    var t, n = e.content.icon ? Wn[e.content.icon] : void 0,
                        r = e.code ? Xn[e.code] : void 0;
                    return null !== (t = n || r) && void 0 !== t ? t : b.WarningIcon
                };

            function $n() {
                return "undefined" !== typeof window && window.localStorage
            }

            function er() {
                return "WWW" === (0, f.T)().getSiteType()
            }
            var tr = {
                ACCOMMODATION: "accommodation",
                BASIC: "accommodation",
                ROCKET_MILES: "accommodation",
                ATTRACTION: "attraction",
                CAR: "car",
                FLIGHT: "flight",
                PREBOOK_TAXI: "prebook_taxi",
                PUBLIC_TRANSPORT: "transport",
                SINGLE_TRIP_INSURANCE: "insurance"
            };

            function nr(e) {
                var t = new Date,
                    n = new Date(e.startDateTime),
                    r = new Date(e.endDateTime);
                return e.reservationStatus === se.CANCELLED ? "cancelled" : t < n ? "upcoming" : t >= n && t < r ? "current" : t > r ? "past" : "unknown"
            }

            function rr(e, t) {
                var n, r, i, a;
                return {
                    trip_item_ids: {
                        trip_id: e + "",
                        pfi: null !== (n = t.identifiers.publicFacingIdentifier) && void 0 !== n ? n : void 0,
                        booking_ref_id: null !== (r = t.identifiers.publicId) && void 0 !== r ? r : void 0,
                        order_id: null !== (i = t.identifiers.reserveOrderId) && void 0 !== i ? i : void 0,
                        reservation_id: ("AccommodationReservation" === t.__typename || "BookingBasicReservation" === t.__typename || "RocketMilesReservation" === t.__typename) && null !== (a = t.identifiers.hotelReservationId) && void 0 !== a ? a : void 0
                    },
                    vertical: tr[t.verticalType],
                    status: nr(t),
                    vertical_start_time: Date.parse(t.startDateTime),
                    vertical_end_time: Date.parse(t.endDateTime)
                }
            }
            var ir, ar, or, cr, lr = n(85169),
                sr = n(8821),
                ur = n(69770),
                dr = n.n(ur),
                mr = n(42791),
                pr = n.n(mr);

            function vr(e) {
                switch (e) {
                    case cr.TRIP_DETAILS_SERVED:
                        return {
                            trip_items: [],
                            page_items: [],
                            connectors: []
                        };
                    case cr.TRIP_ITEM_CLICKED:
                        return {
                            page: "trip_details",
                            trip_item: {},
                            trip_item_ux_component: null
                        };
                    case cr.PAGE_ITEM_CLICKED:
                        return {
                            page: "trip_details",
                            page_item: null,
                            page_item_ux_component: null
                        };
                    case cr.CONNECTOR_CLICKED:
                        return {
                            page: "trip_details",
                            connector: {},
                            connector_ux_component: null
                        };
                    default:
                        return {
                            interaction: null,
                            parent_event: null,
                            page: "mytrips",
                            trip_items: [],
                            page_items: []
                        }
                }
            }

            function fr(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cr.TRIP_ITEM_CLICKED,
                    r = (t = {}, (0, bt.Z)(t, cr.TRIP_ITEM_CLICKED, "0.4.0"), (0, bt.Z)(t, cr.TRIP_DETAILS_SERVED, "1.0.0"), (0, bt.Z)(t, cr.PAGE_ITEM_CLICKED, "0.1.0"), (0, bt.Z)(t, cr.CONNECTOR_CLICKED, "1.0.0"), t),
                    i = (0, f.T)().getBPlatformEnvironment(),
                    a = {
                        action_name: "trips_book_to_stay__".concat(n),
                        action_version: r[n] || "0.1.0",
                        content: e
                    };
                "prod" === i || "dqs" === i ? s.Z.sendEvent(a).catch(console.error) : console.log("Skipping C360 tracking on DEV", a)
            }! function(e) {
                e.EVENT_TYPE = "event_type", e.ITEM_ROLE = "interaction.item_role"
            }(ir || (ir = {})),
            function(e) {
                e[e.SHORT = 200] = "SHORT", e[e.LONG = 800] = "LONG"
            }(ar || (ar = {})),
            function(e) {
                e.PAGE_INTERACTION = "page_interaction", e.PAGE_LOAD = "page_load", e.PAGE_VIEW = "page_view"
            }(or || (or = {})),
            function(e) {
                e.CONNECTOR_CLICKED = "connector_clicked", e.PAGE_ITEM_CLICKED = "page_item_clicked", e.TRIP_DETAILS_SERVED = "trip_details_served", e.TRIP_ITEM_CLICKED = "trip_item_clicked"
            }(cr || (cr = {}));
            var _r = new((0, lr.Z)((function e() {
                    var t = this;
                    (0, sr.Z)(this, e), (0, bt.Z)(this, "event_data", {}), (0, bt.Z)(this, "event_sink", {}), (0, bt.Z)(this, "push", (function(e, n, r) {
                        var i;
                        Object.prototype.hasOwnProperty.call(t.event_data, n) || (t.event_data[n] = new Set), null === (i = t.event_data[n]) || void 0 === i || i.add(e), t.requestFlush(n, r)
                    })), (0, bt.Z)(this, "requestFlush", (function(e, n) {
                        var r, i;
                        Object.prototype.hasOwnProperty.call(t.event_sink, e) || (t.event_sink[e] = dr()(t.flush, n)), null === (r = (i = t.event_sink)[e]) || void 0 === r || r.call(i, e)
                    })), (0, bt.Z)(this, "flush", (function(e) {
                        var n, r = function(e, t) {
                            return pr().apply(void 0, [vr(t)].concat((0, h.Z)(e), [function(e, t) {
                                if (e instanceof Array && t instanceof Array) return (0, h.Z)(new Set([].concat((0, h.Z)(e), (0, h.Z)(t))))
                            }]))
                        }(t.event_data[e], e);
                        fr(r, e), null === (n = t.event_data[e]) || void 0 === n || n.clear()
                    }))
                }))),
                gr = function() {
                    var e, t, n;
                    return null === (e = window) || void 0 === e || null === (t = e.B) || void 0 === t || null === (n = t.require) || void 0 === n ? void 0 : n.call(t, "assistant/utils")
                },
                hr = "ad149bd794";

            function br(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? br(Object(n), !0).forEach((function(t) {
                        (0, bt.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : br(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function yr(e) {
                var t;
                return Ie(e) ? e.identifiers.hotelReservationId : null !== (t = e.identifiers.publicId) && void 0 !== t ? t : null
            }

            function kr(e, t, n) {
                var r = t.code;
                switch (oe.ACCOMMODATION_POB === r || oe.ALERT_COVID_19 === r ? (0, v.r9)(ee.CLICKED_ON_TRIP_CONNECTOR) : (0, v.r9)(ee.CLICKED_ON_RESERVATION_CONNECTOR), r) {
                    case oe.INVALID_PAYMENT:
                        (0, v.r9)(ee.CLICKED_ON_ACCOM_INVALID_CREDIT_CARD);
                        break;
                    case oe.PARTNER_DATE_CHANGE:
                        (0, v.r9)(ee.CLICKED_ON_ACCOM_PARTNER_DATE_CHANGE);
                        break;
                    case oe.ADD_REVIEW:
                        (0, v.r9)(ee.CLICKED_ON_ACCOM_ADD_REVIEW);
                        break;
                    case oe.MESSAGE_PROPERTY:
                        var i = We();
                        if ((0, v.pj)(i, 3), ze() || (0, v.r9)(ee.CLICKED_ON_ACCOM_MESSAGE_PROPERTY), er()) {
                            var a = gr();
                            if (a && null !== n && void 0 !== n && n.length) {
                                e.preventDefault();
                                var o = {
                                    urlParams: {
                                        bn: yr(n[0]),
                                        channel: "partner_chat",
                                        entrypoint: "Trip Management - Message Property"
                                    }
                                };
                                a.openAssistant(o)
                            }
                        }
                        break;
                    case oe.ALERT_COVID_19:
                        (0, v.pj)(st(), 1);
                        break;
                    case oe.LATE_CHECK_IN:
                        var c = et();
                        (0, v.pj)(c, 1);
                        break;
                    case oe.ATTRACTION_VOUCHER:
                        (0, v.pj)(ot, 2);
                        break;
                    case oe.ADD_ARRIVAL_TIME:
                        var l = We();
                        (0, v.pj)(l, 1);
                        break;
                    case oe.GET_DIRECTION:
                        var s = We();
                        (0, v.pj)(s, 2);
                        break;
                    case oe.VIEW_RESERVATION:
                        var u = We();
                        (0, v.pj)(u, 4), (0, v.pj)(Ot(), 2), At();
                        break;
                    case oe.ATTR_FIND_THINGS_TO_DO:
                        ln(t)
                }
            }

            function Cr(e, t, n, r) {
                var i = function(e, t, n, r) {
                    if (e.code === oe.MESSAGE_PROPERTY) {
                        var i, c, s = [a.createElement(l.rU, {
                            key: "menu-item-phone-msg-to-reservation",
                            className: "mtr-reservation__card-menu-item",
                            href: t,
                            onClick: function() {
                                (0, v.r9)(ee.CLICKED_ON_ACCOM_MESSAGE_PROPERTY)
                            },
                            attributes: {
                                target: "_blank",
                                rel: "noreferrer"
                            },
                            text: n.trans((0, o.t)("trip_mgmt_msg_property_cta")),
                            preventDefault: !1
                        })];
                        if (r && Ie(r) && null !== (i = r.propertyData) && void 0 !== i && null !== (c = i.phoneNumbers) && void 0 !== c && c.length) {
                            var u = r.propertyData.phoneNumbers[0],
                                d = n.trans((0, o.t)("trip_mgmt_call_property_with_phone_num_web_only", {
                                    variables: {
                                        property_phone_number: "(" + u + ")"
                                    }
                                }));
                            return s.push(a.createElement(l.rU, {
                                key: "menu-item-phone-number",
                                className: "mtr-reservation__card-menu-item",
                                href: "tel:" + u,
                                text: d,
                                preventDefault: !1
                            })), {
                                id: yr(r),
                                menuLinks: s
                            }
                        }
                    }
                }(e, t, n, r);
                return i ? a.createElement(a.Fragment, null, a.Children.map(i.menuLinks, (function(e, t) {
                    return a.createElement(a.Fragment, {
                        key: e.type
                    }, e, t < a.Children.count(i.menuLinks) - 1 ? a.createElement(l.iz, null) : null)
                }))) : null
            }
            var Or, Nr, Ir = function(e) {
                    var t, n = e.children,
                        r = e.connector,
                        i = e.reservations,
                        l = e.trackingInfo,
                        s = (0, c.QT)(),
                        u = (0, a.useState)(!1),
                        d = (0, sn.Z)(u, 2),
                        m = d[0],
                        p = d[1],
                        f = r.code,
                        _ = r.content.action,
                        g = oe.ADD_REVIEW === f || oe.ATTR_FIND_THINGS_TO_DO === f,
                        h = function(e) {
                            var t, n, r = null !== (t = null === (n = e.associatedReservations) || void 0 === n ? void 0 : n.reduce((function(e, t) {
                                return e + "_" + t.publicId
                            }), "")) && void 0 !== t ? t : "";
                            return r ? "".concat(e.code).concat(r, "_hide") : ""
                        }(r),
                        b = (0, a.useState)("true" === function(e) {
                            if ($n()) return window.localStorage.getItem(e)
                        }(h)),
                        E = (0, sn.Z)(b, 2),
                        y = E[0],
                        k = E[1];
                    if ((0, a.useEffect)((function() {
                            y || _r.push({
                                connectors: [l]
                            }, cr.TRIP_DETAILS_SERVED, ar.SHORT)
                        }), [y, l]), y) return null;
                    var C = function(e) {
                            var t, n;
                            e.preventDefault(), t = h, n = "true", $n() && localStorage.setItem(t, n), fr({
                                page: "trip_details",
                                connector: l,
                                connector_ux_component: "".concat(l.connector_type, "-remove")
                            }, cr.CONNECTOR_CLICKED)
                        },
                        O = function(e, t, n, r) {
                            var i = e.code,
                                o = e.content.action;
                            if (!o) return null;
                            if (i === oe.ACCOMMODATION_POB && er()) return null;
                            var c = "";
                            if (en(o) && null !== o && void 0 !== o && o.title ? c = o.title : qt(e) && (c = e.content.headline || e.content.headlineLong), i === oe.MESSAGE_PROPERTY && ze()) return {
                                title: c,
                                children: Cr(e, t, n, null === r || void 0 === r ? void 0 : r[0])
                            };
                            if (en(o)) {
                                var l = null;
                                return i !== oe.EARLY_CHECK_IN && i !== oe.LATE_CHECK_IN || (l = a.createElement(Qn, {
                                    connectorCode: i,
                                    reservations: null !== r && void 0 !== r && r.length ? r : []
                                })), {
                                    title: c,
                                    body: o.description,
                                    children: l
                                }
                            }
                        }(r, $t(_) ? gn(null !== (t = null === _ || void 0 === _ ? void 0 : _.url) && void 0 !== t ? t : "") : "", s, i),
                        N = function(e, t, n) {
                            var r = e.code,
                                i = e.content.action,
                                a = [],
                                c = et();
                            if (ze() && r === oe.MESSAGE_PROPERTY) return [];
                            var l, s = null;
                            return i && $t(i) ? s = i : i && en(i) && (s = i.primaryAction), s && a.push({
                                href: gn(null !== (l = s.url) && void 0 !== l ? l : ""),
                                text: s.cta,
                                variant: "primary",
                                wide: !1,
                                attributes: {
                                    target: "_blank",
                                    rel: "noreferrer"
                                },
                                preventDefault: !1,
                                onClick: function() {
                                    if (r === oe.LATE_CHECK_IN) {
                                        var e = et();
                                        (0, v.pj)(e, 2)
                                    }
                                }
                            }), r === oe.LATE_CHECK_IN && (0, v.zm)(c) && a.push({
                                text: n.trans((0, o.t)("mytrips_tconnect_modal_late_check_dismiss")),
                                variant: "tertiary",
                                destructive: !0,
                                wide: !1,
                                onClick: t
                            }), a
                        }(r, (function(e) {
                            p(!1);
                            var t = et();
                            (0, v.pj)(t, 3), setTimeout((function() {
                                C(e), k(!0)
                            }), 250)
                        }), s),
                        I = {
                            icon: Jn(r),
                            onClick: function(e) {
                                (0, v.r9)(ee.INTERACTION), (0, v.r9)(ee.CLICKED_ON_CONNECTOR), kr(e, r, i), fr({
                                    page: "trip_details",
                                    connector: l,
                                    connector_ux_component: "".concat(l.connector_type)
                                }, cr.CONNECTOR_CLICKED), p(!0)
                            },
                            className: r.code === oe.LATE_CHECK_IN ? hr : void 0,
                            actions: r.code === oe.LATE_CHECK_IN ? void 0 : N,
                            details: r.code !== oe.LATE_CHECK_IN ? O : void 0,
                            closeAriaLabel: O ? s.trans((0, o.t)("web_navigation_drawer_close")) : s.trans((0, o.t)("web_trip_eng_bookings_aria_label_dismiss")),
                            dismissable: $n() && g,
                            dismissHandler: g ? C : void 0
                        },
                        T = qt(r) ? n(Er(Er({}, I), {}, {
                            severity: r.content.severity,
                            headline: r.content.headlineLong || r.content.headline || "",
                            headlineShort: r.content.headline
                        })) : n(I);
                    return a.createElement(a.Fragment, null, T, r.code === oe.LATE_CHECK_IN && (null === O || void 0 === O ? void 0 : O.children) && a.createElement(yn, {
                        active: m,
                        title: O.title,
                        actions: N,
                        closeAriaLabel: s.trans((0, o.t)("web_trip_eng_bookings_aria_label_dismiss")),
                        onClose: function() {
                            return p(!1)
                        }
                    }, O.body, O.children))
                },
                Tr = function(e) {
                    var t = e.connector,
                        n = e.reservations,
                        r = Boolean((0, v.zm)(st()));
                    if (t.code === oe.ALERT_COVID_19 && r) return null;
                    if (!ze() && t.code === oe.EARLY_CHECK_IN) return null;
                    if (t.code === oe.BOOK_AGAIN) return null;
                    if (t.code === oe.LATE_CHECK_IN && !ze() && !(0, v.zm)((0, Be.Z)(Or || (Or = (0, g.Z)(["ABVYUIYBdOFVNZOXEHe"]))))) return null;
                    var o = null === n || void 0 === n ? void 0 : n[0];
                    if (t.code === oe.ATTRACTION_VOUCHER && o && Se(o) && (function(e) {
                            if ((0, f.T)().getUserIdentity() && ((0, v.ti)(ot, 1), e.startDateTime)) {
                                var t = new Date(e.startDateTime),
                                    n = new Date;
                                t.toDateString() === n.toDateString() && (0, v.ti)(ot, 3), t.setDate(t.getDate() - 1), n < t && (0, v.ti)(ot, 2)
                            }
                        }(o), 0 === (0, v.zm)(ot))) return null;
                    if (t.code === oe.ATTR_FIND_THINGS_TO_DO && ((0, v.ti)(on, 1), (0, v.ti)(on, ze() ? 5 : 6), !(0, v.zm)(on))) return null;
                    var c = function(e, t) {
                        return {
                            connector_type: e.code.toLowerCase(),
                            trip_items: t ? [rr(e.associatedTripID, t)] : []
                        }
                    }(t, null === n || void 0 === n ? void 0 : n[0]);
                    return a.createElement(Ir, {
                        connector: t,
                        reservations: n,
                        trackingInfo: c
                    }, (function(e) {
                        if (t.code === oe.VIEW_RESERVATION) {
                            var n = function(e) {
                                var t = Ot(),
                                    n = (0, v.zm)(t);
                                if ((0, v.ti)(t, Nt), (0, v.ti)(t, ze() ? It : Tt), (0, v.pj)(t, 1), n) {
                                    var r, i, a = null === (r = e.actions) || void 0 === r ? void 0 : r[0],
                                        o = yt(yt({}, a), {}, {
                                            href: null === a || void 0 === a || null === (i = a.href) || void 0 === i ? void 0 : i.replace("/myreservations", "/confirmation")
                                        });
                                    return yt(yt({}, e), {}, {
                                        actions: a ? [o] : []
                                    })
                                }
                                return e
                            }(e);
                            return n ? a.createElement(Mn, (0, i.Z)({}, n, {
                                size: ze() ? "medium" : "large"
                            })) : null
                        }
                        return a.createElement(Mn, (0, i.Z)({}, e, {
                            size: ze() ? "medium" : "large"
                        }))
                    }))
                };
            ! function(e) {
                e.ATTRACTIONS = "ATTRACTIONS", e.BASIC = "BASIC", e.BOOKING_HOTEL = "BOOKING_HOTEL", e.CARS = "CARS", e.CRUISES = "CRUISES", e.FLIGHTS = "FLIGHTS", e.FOOD = "FOOD", e.PREBOOK_TAXIS = "PREBOOK_TAXIS", e.PUBLIC_TRANSPORT = "PUBLIC_TRANSPORT", e.ROCKET_MILES = "ROCKET_MILES", e.TAXIS = "TAXIS"
            }(Nr || (Nr = {}));
            var Sr = function() {
                return Sr = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, Sr.apply(this, arguments)
            };
            var Ar, Rr = "cffc957f79",
                xr = function() {
                    return xr = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, xr.apply(this, arguments)
                },
                Dr = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                Pr = a.memo((function(e) {
                    var t = e.vertical,
                        n = void 0 === t ? Nr.BOOKING_HOTEL : t,
                        r = e.items,
                        i = e.children,
                        s = e.translations,
                        u = Dr(e, ["vertical", "items", "children", "translations"]),
                        d = function(e) {
                            var t, n = e.vertical,
                                r = e.translations;
                            try {
                                var i = (0, c.QT)(),
                                    a = function(e) {
                                        return i.trans((0, o.t)("my_trips_contextual_menu_header", {
                                            variables: {
                                                vertical: e
                                            }
                                        }))
                                    },
                                    l = ((t = {
                                        default: {
                                            title: a(i.trans((0, o.t)("my_trips_contextual_menu_accommodation_title")))
                                        }
                                    })[Nr.ATTRACTIONS] = {
                                        title: a(i.trans((0, o.t)("my_trips_contextual_menu_attraction_title")))
                                    }, t[Nr.CARS] = {
                                        title: a(i.trans((0, o.t)("my_trips_contextual_menu_car_title")))
                                    }, t[Nr.FLIGHTS] = {
                                        title: a(i.trans((0, o.t)("my_trips_contextual_menu_flight_title")))
                                    }, t[Nr.PREBOOK_TAXIS] = {
                                        title: a(i.trans((0, o.t)("my_trips_contextual_menu_prebook_taxi_title")))
                                    }, t[Nr.PUBLIC_TRANSPORT] = {
                                        title: a(i.trans((0, o.t)("my_trips_contextual_menu_public_transport_title")))
                                    }, t);
                                return X({
                                    copyTags: l,
                                    vertical: n,
                                    translations: r
                                })
                            } catch (u) {
                                var s = Sr({
                                    title: ""
                                }, r);
                                return q(s), s
                            }
                        }({
                            vertical: n,
                            translations: s
                        }).title;
                    return a.createElement(l.br, xr({
                        title: d,
                        closeAriaLabel: "close"
                    }, u), i && a.createElement(p, {
                        mb: "3x"
                    }, i), r.map((function(e, t) {
                        return a.createElement(a.Fragment, {
                            key: "item-".concat(e.text)
                        }, t > 0 && a.createElement(l.iz, null), a.createElement(l.rU, xr({
                            className: Rr,
                            iconProps: {
                                size: "large"
                            },
                            variant: "secondary",
                            preventDefault: !1
                        }, e)))
                    })))
                })),
                wr = n(33354);
            ! function(e) {
                e.HideReservation = "HideReservation"
            }(Ar || (Ar = {}));
            var Lr = (0, wr.QS)(null),
                Mr = ((0, wr.QS)(null), function(e, t) {
                    return e.find((function(e) {
                        return e.code === t
                    }))
                }),
                jr = function(e, t, n) {
                    var r = (0, c.QT)(),
                        i = function(e) {
                            fr({
                                trip_item: n,
                                page: "trip_details",
                                trip_item_ux_component: e
                            })
                        },
                        a = function(e, t, n, r) {
                            var i, a, c = je(r);
                            if (Ie(r) && c) return {
                                text: t.trans((0, o.t)("my_trips_book_again_cta")),
                                attributes: {
                                    target: "_blank",
                                    rel: "noreferrer"
                                },
                                icon: "Update",
                                href: null !== (i = null === (a = r.propertyData) || void 0 === a ? void 0 : a.url) && void 0 !== i ? i : void 0,
                                onClick: function() {
                                    n("contextual_menu_change_book_again")
                                }
                            }
                        }(0, r, i, e),
                        l = function(e, t, n, r) {
                            var i, a = e && tn(e.content.action);
                            if (Ie(r) && a) return {
                                text: t.trans((0, o.t)("trip_mgnt_change_dates")),
                                attributes: {
                                    target: "_blank",
                                    rel: "noreferrer"
                                },
                                icon: e.content.icon || "Calendar",
                                href: null !== (i = a.url) && void 0 !== i ? i : void 0,
                                onClick: function() {
                                    n("contextual_menu_change_dates"), (0, v.r9)(ee.CLICKED_ON_ACCOM_GUEST_DATE_CHANGE)
                                }
                            }
                        }(Mr(t, oe.MENU_ITEM_USER_CHANGE_DATE), r, i, e),
                        s = function(e, t, n, r) {
                            var i, a = e && tn(e.content.action);
                            if (Ie(r) && a) return {
                                text: t.trans((0, o.t)("trip_mgnt_request_date_change")),
                                attributes: {
                                    target: "_blank",
                                    rel: "noreferrer"
                                },
                                icon: e.content.icon || "Calendar",
                                href: null !== (i = a.url) && void 0 !== i ? i : void 0,
                                onClick: function() {
                                    n("contextual_menu_change_dates_request"), (0, v.r9)(ee.CLICKED_ON_ACCOM_GUEST_DATE_CHANGE)
                                }
                            }
                        }(Mr(t, oe.MENU_ITEM_USER_REQUEST_DATE_CHANGE), r, i, e),
                        u = function(e, t, n, r) {
                            var i, a = e && tn(e.content.action);
                            if (Ie(r) && a) return {
                                text: t.trans((0, o.t)("trip_mgmt_msg_property_cta")),
                                attributes: {
                                    target: "_blank",
                                    rel: "noreferrer"
                                },
                                icon: e.content.icon || "ChatBubbles",
                                href: er() ? void 0 : null !== (i = a.url) && void 0 !== i ? i : void 0,
                                onClick: function() {
                                    if ((0, v.r9)(ee.CLICKED_ON_ACCOM_MESSAGE_PROPERTY), n("contextual_menu_message_property"), er()) {
                                        var e = gr();
                                        if (e) {
                                            var t = {
                                                urlParams: {
                                                    bn: r.identifiers.publicId,
                                                    channel: "partner_chat",
                                                    entrypoint: "Trip Management - Message Property"
                                                }
                                            };
                                            e.openAssistant(t)
                                        } else {
                                            var i;
                                            window.open(null !== (i = a.url) && void 0 !== i ? i : void 0, "_blank", "noreferrer")
                                        }
                                    }
                                },
                                name: "msg_to_reservation"
                            }
                        }(Mr(t, oe.MENU_ITEM_MSG_TO_RESERVATION), r, i, e),
                        d = function(e, t, n, r) {
                            var i, a = e && tn(e.content.action);
                            if ((Ie(r) || Ae(r) || xe(r) || Pe(r)) && a) return {
                                text: t.trans((0, o.t)("hc_my_trips_menu_entry_contact_cs")),
                                attributes: {
                                    target: "_blank",
                                    rel: "noreferrer"
                                },
                                icon: e.content.icon || "QuestionMarkCircle",
                                href: null !== (i = a.url) && void 0 !== i ? i : void 0,
                                onClick: function() {
                                    n("contextual_menu_help_center_link"), (0, v.r9)(ee.CLICKED_ON_ACCOM_HELP_CENTRE)
                                }
                            }
                        }(Mr(t, oe.MENU_ITEM_HC_LINK), r, i, e),
                        m = function(e, t, n, r, i) {
                            if (je(r)) return {
                                text: t.trans((0, o.t)("my_trips_parity_remove_booking_cta")),
                                icon: (null === e || void 0 === e ? void 0 : e.content.icon) || "MinusCircle",
                                onClick: function(e) {
                                    function t() {
                                        return e.apply(this, arguments)
                                    }
                                    return t.toString = function() {
                                        return e.toString()
                                    }, t
                                }((function() {
                                    n("contextual_menu_remove_booking"), null === i || void 0 === i || i()
                                }))
                            }
                        }(Mr(t, oe.MENU_ITEM_HIDE_RESERVATION), r, i, e, (function() {
                            Lr({
                                modalType: Ar.HideReservation,
                                modalData: {
                                    reservation: e,
                                    tripItemC360: n
                                }
                            })
                        })),
                        p = [];
                    return [a, l, s, u, d, m].forEach((function(e) {
                        e && p.push(e)
                    })), p
                },
                Ur = {
                    "mtr-reservation-card__list": "da0f22c4be",
                    "mtr-reservation-thumb": "ac2ccbf552",
                    "mtr-reservation-thumb--photo": "f5259f5122",
                    "mytrips-card": "af51f5f601",
                    "mtr-reservation-thumb--smaller": "c6f8cac751",
                    "mtr-reservation-thumb--photo--cover": "da9ab0339e",
                    "mtr-reservation-thumb--bui-icon": "fa574905dd",
                    "thumb-grid": "ab0c864819",
                    "thumb-grid-2": "d715bbb77e",
                    "mtr-reservation-thumb--flight": "d038d93186",
                    "mtr-reservation-thumb--constructive": "cd15af3f17",
                    "mtr-reservation-thumb--cancelled": "b6e86c44ab",
                    "mtr-reservation-thumb--flight-icon": "aa7d7f2d8c",
                    "mtr-reservation-thumb__number": "eb5f168bec",
                    "mtr-reservation-additionalContent": "f1dd211952",
                    "mtr-reservation-context-button": "ec8f3f32f8",
                    "mtr-reservation-context-item": "c6040c5571",
                    "mtr-reservation__cancellation-policy": "cd1c3f1a1e",
                    "mtr-reservation__basic-badge": "e75364db93",
                    "mtr-reservation__rocketmiles-badge": "f438f0b32c",
                    card: "cda33bf625",
                    round: "d9b65d5f29",
                    content: "f2e5bb1deb"
                },
                Fr = {
                    menu__item: "d84eaa9d10"
                };

            function Zr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zr(Object(n), !0).forEach((function(t) {
                        (0, bt.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Hr = function(e) {
                    var t = e.reservation,
                        n = e.menuItemConnectors,
                        r = e.tripItemC360,
                        i = (0, c.QT)(),
                        s = (0, a.useMemo)(ze, []),
                        u = jr(t, n, r).map((function(e) {
                            var t, n, r = function() {
                                    var t;
                                    (0, v.r9)(ee.INTERACTION), (0, v.r9)(ee.INTERACTED_WITH_CONTEXTUAL_MENU), null === (t = e.onClick) || void 0 === t || t.call(e)
                                },
                                i = null !== (t = e.href) && void 0 !== t ? t : void 0;
                            return {
                                className: Fr.menu__item,
                                text: e.text,
                                onChoose: r,
                                onClick: r,
                                href: i,
                                icon: s ? null !== (n = qn(e.icon)) && void 0 !== n ? n : a.createElement(b.InfoSignIcon, null) : void 0,
                                attributes: e.href ? {
                                    target: "_blank",
                                    rel: "noreferrer"
                                } : void 0,
                                preventDefault: !1
                            }
                        })),
                        d = function() {
                            fr({
                                trip_item: r,
                                page: "trip_details",
                                trip_item_ux_component: "contextual_menu"
                            }), (0, v.r9)(ee.CLICKED_ON_CONTEXTUAL_MENU)
                        };
                    return 0 === u.length ? null : s ? a.createElement(Oe.Menu, {
                        content: a.createElement(Pr, {
                            items: u,
                            vertical: tr[t.verticalType],
                            onOpen: d,
                            onClose: function() {
                                return fr({
                                    trip_item: r,
                                    page: "trip_details",
                                    trip_item_ux_component: "contextual_menu_close_x"
                                })
                            }
                        }, a.createElement(ma, {
                            variant: te.PreviewMode,
                            reservation: t
                        }))
                    }) : a.createElement(p, {
                        onClick: function(e) {
                            return e.stopPropagation()
                        }
                    }, a.createElement(l.h_, {
                        items: u,
                        position: "bottom-end",
                        onOpen: d
                    }, (function(e) {
                        return a.createElement(l.zx, {
                            className: Ur["mtr-reservation-context-button"],
                            size: "large",
                            variant: "tertiary-neutral",
                            preventDefault: !0,
                            attributes: Vr({
                                "aria-label": i.trans((0, o.t)("trip_mngmt_screenread_more_option_button"))
                            }, e)
                        }, a.createElement(l.JO, {
                            size: "larger",
                            svg: b.DotsVerticalIcon
                        }))
                    })))
                },
                Gr = n(40841),
                Br = n.n(Gr),
                Kr = function(e) {
                    var t = e.heading,
                        n = e.photo,
                        r = e.icon,
                        i = e.iconColor,
                        o = void 0 === i ? "neutral_alt" : i,
                        c = e.backgroundColor,
                        s = void 0 === c ? "neutral_alt" : c;
                    return n ? a.createElement(l.Ee, {
                        alt: t,
                        src: null !== n && void 0 !== n ? n : void 0,
                        contentMode: "fit",
                        className: Ur["mtr-reservation-thumb--photo"]
                    }) : a.createElement("div", {
                        className: Br()(Ur["mtr-reservation-thumb"], Ur["mtr-reservation-thumb--bui-icon"], (0, bt.Z)({}, Ur["mtr-reservation-thumb--constructive"], "constructive" === s))
                    }, a.createElement(l.JO, {
                        svg: r,
                        size: "largest",
                        color: o
                    }))
                };

            function zr(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return Yr(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yr(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function Yr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Qr = 864e5,
                Wr = 7 * Qr;

            function Xr(e, t, n) {
                var r = t < n ? [t, n] : [n, t],
                    i = (0, sn.Z)(r, 2),
                    a = i[0],
                    o = i[1];
                return "formatRange" in e ? e.formatRange(a, o) : "".concat(e.format(a), " - ").concat(e.format(o))
            }

            function qr(e, t) {
                var n = new Date;
                n.setHours(e.from.hours), n.setMinutes(e.from.minutes);
                var r = new Date;
                return r.setHours(e.to.hours), r.setMinutes(e.to.minutes), Xr(function(e) {
                    var t = e.locales;
                    return Intl.DateTimeFormat(t, {
                        hour: "numeric",
                        minute: "numeric"
                    })
                }(t), n, r)
            }

            function Jr(e, t) {
                return e.reduce((function(e, n) {
                    var r = qr(n, t),
                        i = e.get(r),
                        a = function(e) {
                            switch (e) {
                                case ce.MONDAY:
                                    return 1;
                                case ce.TUESDAY:
                                    return 2;
                                case ce.WEDNESDAY:
                                    return 3;
                                case ce.THURSDAY:
                                    return 4;
                                case ce.FRIDAY:
                                    return 5;
                                case ce.SATURDAY:
                                    return 6;
                                case ce.SUNDAY:
                                    return 7;
                                default:
                                    return
                            }
                        }(n.dayOfWeek);
                    return a && (i ? i.push(a) : e.set(r, [a])), e
                }), new Map)
            }
            var $r = function() {
                for (var e = 0 + 4 * Qr, t = new Map, n = 1; n <= 7; n++) t.set(n, new Date(e)), e += Qr;
                return t
            }();

            function ei(e) {
                var t, n = [],
                    r = zr((0, h.Z)(e).sort((function(e, t) {
                        return e - t
                    })));
                try {
                    for (r.s(); !(t = r.n()).done;) {
                        var i = t.value,
                            a = n.at(-1);
                        if ($r.get(i)) {
                            var o = null === a || void 0 === a ? void 0 : a.at(-1);
                            a && o === i - 1 ? a.push(i) : n.push([i])
                        }
                    }
                } catch (u) {
                    r.e(u)
                } finally {
                    r.f()
                }
                var c = n.at(-1),
                    l = n.at(0);
                if (l && c && n.length > 1) {
                    var s = [l.at(0), c.at(-1)];
                    1 === s[0] && 7 === s[1] && (n[0] = [].concat((0, h.Z)(c), (0, h.Z)(l)), n.pop())
                }
                return n
            }

            function ti(e) {
                return $r.get(e)
            }

            function ni(e, t) {
                var n = function(e) {
                    var t = e.locales;
                    return Intl.DateTimeFormat(t, {
                        weekday: "short"
                    })
                }(t);
                if (e.length < 3) return e.map((function(e) {
                    var t = ti(e);
                    return n.format(t)
                })).join(", ");
                var r = [e[0], e[e.length - 1]].map(ti),
                    i = (0, sn.Z)(r, 2),
                    a = i[0],
                    o = i[1];
                return a && o ? Xr(n, a, a > o ? new Date(o.getTime() + Wr) : o) : ""
            }

            function ri(e, t) {
                return function(e, t) {
                    var n, r = new Map,
                        i = zr(e.entries());
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            var a = (0, sn.Z)(n.value, 2),
                                o = a[0],
                                c = ei(a[1]).map((function(e) {
                                    return ni(e, t)
                                })).join(", ");
                            r.set(c, o)
                        }
                    } catch (l) {
                        i.e(l)
                    } finally {
                        i.f()
                    }
                    return r
                }(Jr(e, t), t)
            }

            function ii(e) {
                var t = ri(e.breakfastScheduleList, {
                    locales: (0, f.T)().getLanguage()
                });
                if (0 === t.size) return null;
                if (1 === t.size) {
                    var n = (0, sn.Z)((0, h.Z)(t.entries())[0], 2)[1];
                    return a.createElement(c.cC, {
                        tag: "tripsxp_apps_instay_breakfast_w_time",
                        variables: {
                            time_interval: n
                        }
                    })
                }
                return a.createElement(c.cC, {
                    tag: "tripsxp_apps_instay_breakfast_w_time",
                    variables: {
                        time_interval: (0, h.Z)(t.entries()).map((function(e) {
                            var t = (0, sn.Z)(e, 2),
                                n = t[0],
                                r = t[1];
                            return "".concat(n, ": ").concat(r)
                        })).join(" \xb7 ")
                    }
                })
            }

            function ai(e) {
                var t, n = e.reservation,
                    r = e.additionalData,
                    i = e.locale,
                    l = null === (t = r.breakfastSchedule) || void 0 === t ? void 0 : t.reduce((function(e, t) {
                        return t ? [].concat((0, h.Z)(e), [t]) : e
                    }), []),
                    s = (0, c.QT)(),
                    u = Ht(n.checkOut.end, {
                        locale: i
                    });
                return a.createElement(a.Fragment, null, l && l.length > 0 && a.createElement(p, null, a.createElement(ii, {
                    breakfastScheduleList: l
                })), u && a.createElement(p, null, s.trans((0, o.t)("web_trip_mgmt_checkout_time_full_time", {
                    num_exception: 0,
                    variables: {
                        short_date_with_weekday_without_year: u.day,
                        checkout_time: u.time
                    }
                }))))
            }
            var oi = function(e) {
                    var t, n, r, i, s, u = e.reservation,
                        d = e.locale;
                    (0, v.ti)(ut(), gt);
                    var m = (0, c.QT)(),
                        p = Ht(u.checkIn.start, {
                            locale: d,
                            skipTZ: !0
                        }),
                        f = Ht(u.checkIn.end, {
                            locale: d,
                            skipTZ: !0
                        }),
                        _ = Ht(u.checkOut.end, {
                            locale: d,
                            skipTZ: !0
                        }),
                        g = null !== (t = null === p || void 0 === p ? void 0 : p.day) && void 0 !== t ? t : "",
                        h = null !== (n = null === p || void 0 === p ? void 0 : p.time) && void 0 !== n ? n : "",
                        b = null !== (r = null === f || void 0 === f ? void 0 : f.time) && void 0 !== r ? r : "",
                        E = null !== (i = null === _ || void 0 === _ ? void 0 : _.day) && void 0 !== i ? i : "",
                        y = null !== (s = null === _ || void 0 === _ ? void 0 : _.time) && void 0 !== s ? s : "",
                        k = We();
                    return a.createElement(l.aV, {
                        variant: "unordered",
                        items: [{
                            content: (0, v.zm)(k) ? m.trans((0, o.t)("tripxp_trips_booking_check_in_time_range", {
                                num_exception: 0,
                                variables: {
                                    short_date_with_weekday_without_year: g,
                                    check_in_time_from: h,
                                    check_in_time_until: b
                                }
                            })) : m.trans((0, o.t)("web_trip_mgmt_check_in_time_full_time", {
                                num_exception: 0,
                                variables: {
                                    short_date_with_weekday_without_year: g,
                                    checkin_time: h
                                }
                            }))
                        }, {
                            content: m.trans((0, o.t)("web_trip_mgmt_checkout_time_full_time", {
                                num_exception: 0,
                                variables: {
                                    short_date_with_weekday_without_year: E,
                                    checkout_time: y
                                }
                            }))
                        }]
                    })
                },
                ci = {
                    "reservation-card-image": "a19f77ce18",
                    "reservation-card-wrapper": "c10063d60b",
                    "reservation-card": "b5159626dc",
                    "reservation-card-status": "c58d5d06dc",
                    "reservation-card-title": "b1dd321ea8",
                    "reservation-card-thumbnail-icon": "e5a22d0357",
                    constructive: "a3390bea40"
                };

            function li(e) {
                return e.reservationStatus !== se.CONFIRMED || je(e) ? "neutral_alt" : "constructive"
            }

            function si(e) {
                switch (e.status) {
                    case se.CONFIRMED:
                        return a.createElement(c.cC, {
                            tag: "my_trips_confirmed_status"
                        });
                    case se.CANCELLED:
                        return a.createElement(c.cC, {
                            tag: "my_trips_cancelled_status"
                        });
                    case se.PENDING:
                        return a.createElement(c.cC, {
                            tag: "my_trips_await_conf_status"
                        });
                    case se.UNKNOWN:
                    case se.ACTION_REQUIRED:
                        return a.createElement(c.cC, {
                            tag: "my_trips_action_required_status"
                        });
                    default:
                        return a.createElement(a.Fragment, null)
                }
            }

            function ui(e) {
                var t = e.status,
                    n = function(e) {
                        switch (e) {
                            case se.CONFIRMED:
                                return "constructive";
                            case se.ACTION_REQUIRED:
                                return "destructive";
                            case se.CANCELLED:
                            case se.PENDING:
                            case se.UNKNOWN:
                                return "neutral_alt";
                            default:
                                return "neutral"
                        }
                    }(t);
                return a.createElement(l.xv, {
                    variant: "body_1",
                    tagName: "span",
                    color: n,
                    className: ci["reservation-card-status"]
                }, a.createElement(si, {
                    status: t
                }))
            }
            var di, mi, pi = function(e) {
                    var t = e.heading,
                        n = e.photo,
                        r = e.icon,
                        i = e.iconColor,
                        o = void 0 === i ? "neutral_alt" : i,
                        c = e.backgroundColor,
                        s = void 0 === c ? "neutral_alt" : c,
                        u = e.rounded,
                        d = void 0 === u || u;
                    return n ? a.createElement(l.Ee, {
                        alt: t,
                        contentMode: "fit",
                        width: 64,
                        height: 64,
                        src: n,
                        fallback: "icon",
                        fallbackIcon: r,
                        className: d ? ci["reservation-card-image"] : void 0
                    }) : a.createElement("div", {
                        className: Br()(ci["reservation-card-thumbnail-icon"], (0, bt.Z)({}, ci.constructive, "constructive" === s))
                    }, a.createElement(l.JO, {
                        svg: r,
                        size: "largest",
                        color: o
                    }))
                },
                vi = function(e) {
                    var t = e.heading,
                        n = e.headingSubtitle,
                        r = e.dates,
                        i = e.image,
                        o = e.reservationStatus,
                        c = e.reservationUrl,
                        s = e.onClick;
                    return a.createElement(l.sR, {
                        onClick: s,
                        href: gn(c),
                        className: ci["reservation-card-wrapper"]
                    }, a.createElement(l.Zb, {
                        className: ci["reservation-card"]
                    }, a.createElement(l.Kq, {
                        direction: "row",
                        alignItems: "center"
                    }, a.createElement(l.Kq.Item, {
                        grow: !0,
                        alignSelf: "center"
                    }, a.createElement(l.Kq, {
                        direction: "column",
                        gap: 1
                    }, a.createElement(l.Kq.Item, null, a.createElement(l.Dx, {
                        variant: "strong_1",
                        title: t,
                        subtitle: n,
                        titleClassName: ci["reservation-card-title"]
                    })), a.createElement(l.Kq.Item, null, a.createElement(l.xv, {
                        variant: "body_1",
                        tagName: "span"
                    }, r), o && a.createElement(ui, {
                        status: o
                    })))), a.createElement(l.Kq.Item, null, i))))
                },
                fi = ["reservation", "variant"],
                _i = function(e) {
                    var t = e.heading,
                        n = e.dates,
                        r = e.photo,
                        i = e.reservation,
                        o = e.cardLinkAttributes,
                        c = e.onClick;
                    if ((0, v.zm)(Dt())) {
                        var l = li(i);
                        return a.createElement(vi, {
                            heading: t,
                            dates: n,
                            reservationStatus: i.reservationStatus,
                            onClick: c,
                            reservationUrl: i.bookingUrl,
                            image: a.createElement(pi, {
                                heading: t,
                                photo: r,
                                icon: a.createElement(b.AccommodationsIcon, null),
                                iconColor: l,
                                backgroundColor: l
                            })
                        })
                    }
                    return a.createElement(Oe, {
                        compact: !0,
                        marginY: "2x",
                        linkUrl: gn(i.bookingUrl),
                        linkAttributes: o,
                        className: "".concat(Ur.card, " ").concat(Ur.round),
                        onClick: c
                    }, a.createElement(Oe.Content, {
                        className: Ur.content,
                        imageSize: "medium",
                        headingTagName: "h4",
                        heading: t,
                        dates: n,
                        status: i.reservationStatus,
                        image: a.createElement(Kr, {
                            heading: t,
                            photo: r,
                            icon: a.createElement(b.AccommodationsIcon, null)
                        })
                    }))
                },
                gi = function(e) {
                    var t, n, r, o = e.reservation,
                        s = e.tripItemC360,
                        u = e.basicConnectors,
                        d = e.experiences,
                        m = e.menuItems,
                        p = e.heading,
                        _ = e.photo,
                        E = e.dates,
                        y = e.onClick,
                        k = e.isMDOT,
                        C = e.cardLinkAttributes,
                        O = e.locale,
                        N = o.bookingUrl,
                        I = d[ue.ACCOMMODATION_ARRIVAL] || d[ue.BHOME_ARRIVAL],
                        T = I ? Xt(I) : [],
                        S = d[ue.ACCOMMODATION_INSTAY],
                        A = S ? Xt(S) : [],
                        R = Wt(S),
                        x = [].concat((0, h.Z)(T), (0, h.Z)(A), (0, h.Z)(u)),
                        D = R ? {
                            extraInfoStatus: a.createElement(Oe.Status, {
                                style: {
                                    display: "inline"
                                },
                                status: Fe(o)
                            }),
                            status: void 0
                        } : {
                            extraInfoStatus: void 0,
                            status: Fe(o)
                        },
                        P = D.extraInfoStatus,
                        w = D.status;
                    var L = null === o || void 0 === o || null === (t = o.propertyData) || void 0 === t || null === (n = t.location) || void 0 === n ? void 0 : n.city,
                        M = null === o || void 0 === o ? void 0 : o.numOfRooms;
                    return a.createElement(a.Fragment, null, a.createElement(Oe, {
                        className: Ur["mytrips-card"],
                        linkAttributes: C,
                        linkUrl: gn(N),
                        onClick: function() {
                            I && At(), null === y || void 0 === y || y()
                        },
                        isPast: je(o),
                        noDepth: !0,
                        menu: a.createElement(Hr, {
                            reservation: o,
                            menuItemConnectors: m,
                            tripItemC360: s
                        })
                    }, a.createElement(Oe.Content, {
                        image: a.createElement(Kr, {
                            heading: p,
                            photo: _,
                            icon: a.createElement(b.AccommodationsIcon, null)
                        }),
                        heading: p,
                        dates: E,
                        extraInfo: a.createElement(a.Fragment, null, M && M > 1 && a.createElement("span", null, a.createElement(c.cC, {
                            tag: "my_trips_parity_rooms",
                            num_exception: M,
                            variables: {
                                num_rooms: M
                            }
                        })), !k && L && a.createElement("span", null, L), function() {
                            if (o.reservationStatus === se.ACTION_REQUIRED) return null;
                            var e = o.policy;
                            if (!e) return null;
                            var t = e.name;
                            return a.createElement(l.u, {
                                text: e.message,
                                position: "bottom"
                            }, (function(e) {
                                return a.createElement("span", (0, i.Z)({
                                    className: Ur["mtr-reservation__cancellation-policy"]
                                }, e), t)
                            }))
                        }(), P && a.createElement("span", null, P)),
                        status: w,
                        price: k || null === (r = o.userPriceWeb) || void 0 === r ? void 0 : r.userCurrencyPrice,
                        badge: function() {
                            var e, t, n = (0, f.T)(),
                                r = er() ? (0, Be.Z)(di || (di = (0, g.Z)(["PPXGFRURURYaGYZYbcZTTEATZdSGWC"]))) : (0, Be.Z)(mi || (mi = (0, g.Z)(["PPXGWPHDDHRQPSHSQFUUHGeFZBQIO"]))),
                                i = !1;
                            return Te(o) && (i = "us" === n.getVisitorCountry() && "us" === (null === (e = o.propertyData) || void 0 === e || null === (t = e.location) || void 0 === t ? void 0 : t.countryCode) && Boolean((0, v.zm)(r)), (0, v.ti)(r, 5)), Te(o) && !i ? a.createElement(l.Ct, {
                                text: a.createElement(c.cC, {
                                    tag: "tpi_partner_offer_badge"
                                }),
                                variant: "brand-primary",
                                alternative: !0,
                                className: Ur["mtr-reservation__basic-badge"]
                            }) : function(e) {
                                return e.verticalType === ve.ROCKET_MILES
                            }(o) ? a.createElement(Ne, {
                                className: Ur["mtr-reservation__rocketmiles-badge"]
                            }) : null
                        }(),
                        additionalContent: R ? a.createElement(ai, {
                            reservation: o,
                            additionalData: R,
                            locale: O
                        }) : null
                    }), I && a.createElement("div", null, a.createElement(oi, {
                        reservation: o,
                        locale: O
                    }))), x.map((function(e) {
                        return a.createElement(Tr, {
                            key: e.code,
                            connector: e,
                            reservations: [o]
                        })
                    })))
                },
                hi = function(e) {
                    var t, n, r, o, c, l, s = e.reservation,
                        u = e.variant,
                        d = (0, _.Z)(e, fi),
                        m = {
                            heading: null !== (t = null === (n = s.propertyData) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : "",
                            photo: null !== (r = null === (o = s.propertyData) || void 0 === o || null === (c = o.photos) || void 0 === c || null === (l = c[0]) || void 0 === l ? void 0 : l.absoluteUrl) && void 0 !== r ? r : void 0,
                            dates: Ve(s.localisedDatetimeRange)
                        };
                    return u === te.PreviewMode ? a.createElement(Oe, {
                        isPast: je(s)
                    }, a.createElement(Oe.Content, {
                        image: a.createElement(Kr, {
                            heading: m.heading,
                            photo: m.photo,
                            icon: a.createElement(b.AccommodationsIcon, null)
                        }),
                        imageSize: "large",
                        heading: m.heading,
                        headingTagName: "h4",
                        dates: m.dates,
                        status: d.isMDOT ? void 0 : Fe(s)
                    })) : u === te.MyTrips && Ie(s) ? a.createElement(gi, (0, i.Z)({
                        reservation: s
                    }, m, d)) : u === te.UpcomingTrip && Ie(s) ? a.createElement(_i, (0, i.Z)({
                        reservation: s
                    }, m, d)) : null
                },
                bi = ", 00:00",
                Ei = function(e) {
                    var t = e.localisedDatetimeRange,
                        n = function(e) {
                            var t = e.startDateTime,
                                n = e.endDateTime,
                                r = e.localisedDatetimeRange;
                            return t === n && Ve(r).includes(bi)
                        }(e),
                        r = Ve(t);
                    return n ? r.split(bi)[0] : r
                },
                yi = ["reservation", "variant"],
                ki = function(e) {
                    var t = e.reservation,
                        n = e.cardLinkAttributes,
                        r = e.onClick,
                        i = e.heading,
                        o = e.photo,
                        c = e.dates;
                    if ((0, v.zm)(Dt())) {
                        var l = li(t);
                        return a.createElement(vi, {
                            heading: i,
                            reservationUrl: gn(t.bookingUrl),
                            onClick: r,
                            dates: c,
                            reservationStatus: t.reservationStatus,
                            image: a.createElement(pi, {
                                heading: i,
                                photo: o,
                                icon: a.createElement(b.AttractionsIcon, null),
                                iconColor: l,
                                backgroundColor: l
                            })
                        })
                    }
                    return a.createElement(Oe, {
                        compact: !0,
                        marginY: "2x",
                        linkUrl: gn(t.bookingUrl),
                        linkAttributes: n,
                        className: "".concat(Ur.card, " ").concat(Ur.round),
                        onClick: function() {
                            return null === r || void 0 === r ? void 0 : r()
                        }
                    }, a.createElement(Oe.Content, {
                        imageSize: "medium",
                        headingTagName: "h4",
                        heading: i,
                        dates: c,
                        status: t.reservationStatus,
                        image: a.createElement(Kr, {
                            heading: i,
                            photo: o,
                            icon: a.createElement(b.AttractionsIcon, null)
                        }),
                        className: Ur.content
                    }))
                },
                Ci = function(e) {
                    var t, n, r, i, o = e.onClick,
                        l = e.reservation,
                        s = e.tripItemC360,
                        u = e.basicConnectors,
                        d = e.experiences,
                        m = e.menuItems,
                        p = e.heading,
                        f = e.photo,
                        _ = e.dates,
                        g = e.isMDOT,
                        E = e.cardLinkAttributes,
                        y = d[ue.ATTRACTION_ARRIVAL],
                        k = y ? Xt(y) : [],
                        C = [].concat((0, h.Z)(k), (0, h.Z)(u)),
                        O = null === (t = l.product) || void 0 === t || null === (n = t.location) || void 0 === n ? void 0 : n.city;
                    return a.createElement(a.Fragment, null, a.createElement(Oe, {
                        className: Ur["mytrips-card"],
                        linkAttributes: E,
                        linkUrl: gn(l.bookingUrl),
                        onClick: function() {
                            (0, v.pj)(ot, 1), null === o || void 0 === o || o()
                        },
                        isPast: je(l),
                        noDepth: !0,
                        menu: a.createElement(Hr, {
                            menuItemConnectors: m,
                            reservation: l,
                            tripItemC360: s
                        })
                    }, a.createElement(Oe.Content, {
                        image: a.createElement(Kr, {
                            heading: p,
                            photo: f,
                            icon: a.createElement(b.AttractionsIcon, null)
                        }),
                        imageSize: "large",
                        heading: null === (r = l.product) || void 0 === r ? void 0 : r.name,
                        dates: _,
                        extraInfo: a.createElement(a.Fragment, null, O && a.createElement("span", null, O), a.createElement("span", null, a.createElement(c.cC, {
                            tag: "my_trips_parity_attractions_tickets",
                            num_exception: l.ticketCount,
                            variables: {
                                num: String(l.ticketCount)
                            }
                        }))),
                        status: Fe(l),
                        price: g || null === (i = l.userPriceWeb) || void 0 === i ? void 0 : i.userCurrencyPrice
                    })), C.map((function(e) {
                        return a.createElement(Tr, {
                            key: e.code,
                            connector: e,
                            reservations: [l]
                        })
                    })))
                },
                Oi = function(e) {
                    var t, n, r, o, c, l, s = e.reservation,
                        u = e.variant,
                        d = (0, _.Z)(e, yi),
                        m = {
                            heading: null !== (t = null === (n = s.product) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : "",
                            photo: null !== (r = null === (o = s.product) || void 0 === o || null === (c = o.photos) || void 0 === c || null === (l = c[0]) || void 0 === l ? void 0 : l.absoluteUrl) && void 0 !== r ? r : void 0,
                            dates: Ei(s)
                        };
                    return u === te.PreviewMode ? a.createElement(Oe, {
                        isPast: je(s)
                    }, a.createElement(Oe.Content, {
                        image: a.createElement(Kr, {
                            heading: m.heading,
                            photo: m.photo,
                            icon: a.createElement(b.AttractionsIcon, null)
                        }),
                        heading: m.heading,
                        headingTagName: "h4",
                        dates: m.dates,
                        status: d.isMDOT ? void 0 : Fe(s)
                    })) : u === te.MyTrips && Se(s) ? a.createElement(Ci, (0, i.Z)({
                        reservation: s
                    }, m, d)) : u === te.UpcomingTrip && Se(s) ? a.createElement(ki, (0, i.Z)({
                        reservation: s
                    }, m, d)) : null
                },
                Ni = function(e) {
                    var t = e.isArrival,
                        n = e.isMDOT,
                        r = e.reservation,
                        i = Bt(r.startDateTime, {
                            skipTZ: !0
                        }),
                        o = Bt(r.endDateTime, {
                            skipTZ: !0
                        }),
                        s = t && i ? a.createElement(c.cC, {
                            tag: "trip_xp_res_comp_cars_pickup_off_time",
                            variables: {
                                time: i
                            }
                        }) : null,
                        u = a.createElement(c.cC, {
                            tag: "trip_xp_res_comp_cars_drop_off_time",
                            variables: {
                                time: o
                            }
                        }),
                        d = [{
                            content: u
                        }];
                    return s && d.unshift({
                        content: s
                    }), n ? a.createElement(l.aV, {
                        className: Ur["mtr-reservation-card__list"],
                        variant: "unordered",
                        items: d
                    }) : a.createElement("div", {
                        className: Ur["mtr-reservation-additionalContent"]
                    }, s && a.createElement("span", null, s), a.createElement("span", null, u))
                },
                Ii = ["reservation", "variant", "onClick"],
                Ti = function(e) {
                    var t = e.heading,
                        n = e.photo,
                        r = e.dates,
                        i = e.reservation,
                        o = e.onClick,
                        c = e.cardLinkAttributes;
                    if ((0, v.zm)(Dt())) {
                        var l = li(i);
                        return a.createElement(vi, {
                            reservationUrl: gn(i.bookingUrl),
                            onClick: o,
                            heading: t,
                            dates: r,
                            image: a.createElement(pi, {
                                heading: t,
                                photo: n,
                                icon: a.createElement(b.TransportCarIcon, null),
                                iconColor: l,
                                backgroundColor: l
                            })
                        })
                    }
                    return a.createElement(a.Fragment, null, a.createElement(Oe, {
                        compact: !0,
                        marginY: "2x",
                        linkAttributes: c,
                        linkUrl: gn(i.bookingUrl),
                        className: "".concat(Ur.card, " ").concat(Ur.round),
                        onClick: o
                    }, a.createElement(Oe.Content, {
                        imageSize: "medium",
                        headingTagName: "h4",
                        heading: t,
                        dates: r,
                        image: a.createElement(Kr, {
                            heading: t,
                            photo: n,
                            icon: a.createElement(b.TransportCarIcon, null),
                            iconColor: "constructive"
                        }),
                        className: Ur.content
                    })))
                },
                Si = function(e) {
                    var t, n, r, i = e.reservation,
                        o = e.onClick,
                        c = e.tripItemC360,
                        l = e.basicConnectors,
                        s = e.experiences,
                        u = e.menuItems,
                        d = e.heading,
                        m = e.photo,
                        p = e.dates,
                        v = e.isMDOT,
                        f = e.cardLinkAttributes,
                        _ = s[ue.CAR_ARRIVAL] || s[ue.CAR_INTRIP],
                        g = _ ? Xt(_) : [],
                        E = [].concat((0, h.Z)(g), (0, h.Z)(l)),
                        y = _ ? a.createElement(Ni, {
                            isArrival: _.code === ue.CAR_ARRIVAL,
                            isMDOT: v,
                            reservation: i
                        }) : null;
                    return a.createElement(a.Fragment, null, a.createElement(Oe, {
                        className: Ur["mytrips-card"],
                        onClick: o,
                        isPast: je(i),
                        linkUrl: gn(i.bookingUrl),
                        linkAttributes: f,
                        noDepth: !0,
                        menu: a.createElement(Hr, {
                            menuItemConnectors: u,
                            reservation: i,
                            tripItemC360: c
                        })
                    }, a.createElement(Oe.Content, {
                        image: a.createElement(Kr, {
                            heading: d,
                            photo: m,
                            icon: a.createElement(b.TransportCarFrontIcon, null)
                        }),
                        imageSize: "large",
                        heading: d,
                        dates: p,
                        extraInfo: [null === (t = i.pickUpLocation) || void 0 === t ? void 0 : t.city, null === (n = i.product) || void 0 === n ? void 0 : n.supplier],
                        additionalContent: v ? null : y,
                        status: Fe(i),
                        price: v || null === (r = i.userPriceWeb) || void 0 === r ? void 0 : r.userCurrencyPrice
                    }), v ? y : null), E.map((function(e) {
                        return a.createElement(Tr, {
                            key: e.code,
                            connector: e,
                            reservations: [i]
                        })
                    })))
                },
                Ai = (0, a.forwardRef)((function(e, t) {
                    var n = e.reservation,
                        r = (0, f.T)();
                    return a.createElement("form", {
                        method: "post",
                        target: "_blank",
                        action: "https://cars.booking.com/MyRes.do?preflang=".concat(r.getLanguage() || "en-gb"),
                        ref: t
                    }, a.createElement("input", {
                        type: "hidden",
                        name: "booking.contact.email",
                        value: "".concat(n.bookerEmail)
                    }), a.createElement("input", {
                        type: "hidden",
                        name: "booking.reference",
                        value: n.id
                    }), a.createElement("input", {
                        type: "hidden",
                        name: "serverName",
                        value: "cars.booking.com"
                    }), a.createElement("input", {
                        type: "hidden",
                        name: "affiliateCode",
                        value: "booking-cars"
                    }))
                }));
            Ai.displayName = "ViewCarForm";
            var Ri = function(e) {
                    var t, n, r, l, s, u, d = (0, c.QT)(),
                        m = (0, a.useRef)(null),
                        p = e.reservation,
                        v = e.variant,
                        f = e.onClick,
                        g = (0, _.Z)(e, Ii),
                        h = {
                            heading: d.trans((0, o.t)("my_trips_parity_car_type_or_similar", {
                                variables: {
                                    car_type: null !== (t = null === (n = p.product) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : ""
                                }
                            })),
                            photo: null !== (r = null === (l = p.product) || void 0 === l || null === (s = l.photos) || void 0 === s || null === (u = s[0]) || void 0 === u ? void 0 : u.absoluteUrl) && void 0 !== r ? r : void 0,
                            dates: Ve(p.localisedDatetimeRange)
                        },
                        E = function(e) {
                            e.preventDefault(), null === f || void 0 === f || f(), m.current && m.current.submit()
                        };
                    return v === te.PreviewMode ? a.createElement(Oe, {
                        isPast: je(p)
                    }, a.createElement(Oe.Content, {
                        image: a.createElement(Kr, {
                            heading: h.heading,
                            photo: h.photo,
                            icon: a.createElement(b.TransportCarFrontIcon, null)
                        }),
                        heading: h.heading,
                        headingTagName: "h4",
                        dates: h.dates,
                        status: g.isMDOT ? void 0 : Fe(p)
                    })) : v === te.MyTrips && Ae(p) ? a.createElement(a.Fragment, null, a.createElement(Si, (0, i.Z)({
                        reservation: p,
                        onClick: E
                    }, h, g)), a.createElement(Ai, {
                        ref: m,
                        reservation: p
                    })) : v === te.UpcomingTrip && Ae(p) ? a.createElement(a.Fragment, null, a.createElement(Ti, (0, i.Z)({
                        reservation: p,
                        onClick: E
                    }, h, g)), a.createElement(Ai, {
                        ref: m,
                        reservation: p
                    })) : null
                },
                xi = n(9300),
                Di = ["reservation", "variant"];

            function Pi(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function wi(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Pi(Object(n), !0).forEach((function(t) {
                        (0, bt.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pi(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Li, Mi, ji = function(e) {
                    var t, n, r, i, a, o, c, l, s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        u = e.parts.slice(0),
                        d = u.length - 1,
                        m = u[0],
                        p = u[u.length - 1],
                        v = "".concat(null === (t = m.startLocation) || void 0 === t ? void 0 : t.iata, "-").concat(null === (n = p.startLocation) || void 0 === n ? void 0 : n.iata),
                        f = Object.values(u.reduce((function(e, t) {
                            var n = t.marketingCarrier;
                            return null !== n && void 0 !== n && n.name ? wi(wi({}, e), {}, (0, bt.Z)({}, n.name, n)) : e
                        }), {})),
                        _ = "".concat(null === (r = m.startLocation) || void 0 === r || null === (i = r.location) || void 0 === i ? void 0 : i.city, " (").concat(null === (a = m.startLocation) || void 0 === a ? void 0 : a.iata, ") ").concat(s ? "\u2190" : "\u2192", " ").concat(null === (o = p.endLocation) || void 0 === o || null === (c = o.location) || void 0 === c ? void 0 : c.city, " (").concat(null === (l = p.endLocation) || void 0 === l ? void 0 : l.iata, ")");
                    return {
                        stopsCount: d,
                        keyValue: v,
                        carriers: f,
                        localizedDate: Ve(e.localisedDatetimeRange),
                        heading: _
                    }
                },
                Ui = function(e) {
                    var t = e.reservation,
                        n = e.onClick,
                        r = e.cardLinkAttributes,
                        i = (0, c.QT)();

                    function l() {
                        var e, n, r = null === t || void 0 === t || null === (e = t.flightComponents) || void 0 === e || null === (n = e[0].parts.slice(-1)[0]) || void 0 === n ? void 0 : n.endLocation,
                            a = (null === r || void 0 === r ? void 0 : r.location) && (null === r || void 0 === r ? void 0 : r.location.city) || (null === r || void 0 === r ? void 0 : r.iata);
                        return a ? i.trans((0, o.t)("my_trips_card_index_title_flight_to", {
                            variables: {
                                city_name: a
                            }
                        })) : ""
                    }

                    function s() {
                        var e, n, r = null === t || void 0 === t ? void 0 : t.flightComponents,
                            a = null === r || void 0 === r || null === (e = r[0].parts[0]) || void 0 === e ? void 0 : e.startLocation,
                            c = null === r || void 0 === r ? void 0 : r.slice(-1)[0].parts.slice(-1)[0].endLocation,
                            l = null !== (n = null === r || void 0 === r ? void 0 : r.length) && void 0 !== n ? n : 0,
                            s = c && c.location && c.location.city || (null === c || void 0 === c ? void 0 : c.iata);
                        if (1 === l) return i.trans((0, o.t)("my_trips_card_index_flight_one_way_trip"));
                        if (2 === l) {
                            if ((null === a || void 0 === a ? void 0 : a.iata) === (null === c || void 0 === c ? void 0 : c.iata)) return i.trans((0, o.t)("my_trips_card_index_return_flight"));
                            if (s) return i.trans((0, o.t)("my_trips_card_index_flight_to_other_city", {
                                variables: {
                                    city_name: s
                                }
                            }))
                        }
                        var u = l - 1;
                        return i.trans((0, o.t)("my_trips_card_index_flight_to_other_cities", {
                            variables: {
                                number_of_cities: u
                            },
                            num_exception: u
                        }))
                    }

                    function u() {
                        var e, n, r, i, o, c = {};
                        return null === (e = t.flightComponents) || void 0 === e || e.forEach((function(e) {
                            e.parts.forEach((function(e) {
                                var t = e.marketingCarrier;
                                null !== t && void 0 !== t && t.name && (c[t.name] = t)
                            }))
                        })), Object.keys(c).length > 1 ? {
                            logo: a.createElement(Fn, {
                                logos: Object.values(c).map((function(e) {
                                    var t, n = e.logo;
                                    return null !== (t = null === n || void 0 === n ? void 0 : n.absoluteUrl) && void 0 !== t ? t : ""
                                })),
                                size: "medium"
                            })
                        } : {
                            photo: null !== (n = null === (r = t.flightComponents) || void 0 === r || null === (i = r[0].parts[0].marketingCarrier) || void 0 === i || null === (o = i.logo) || void 0 === o ? void 0 : o.absoluteUrl) && void 0 !== n ? n : void 0
                        }
                    }
                    if ((0, v.zm)(Dt())) {
                        var d = li(t),
                            m = u(),
                            p = m.photo,
                            f = m.logo;
                        return a.createElement(vi, {
                            reservationUrl: gn(t.bookingUrl),
                            onClick: n,
                            heading: l(),
                            headingSubtitle: s(),
                            image: null !== f && void 0 !== f ? f : a.createElement(pi, {
                                heading: l(),
                                icon: a.createElement(b.PlaneTripIcon, null),
                                photo: p,
                                iconColor: d,
                                backgroundColor: d,
                                rounded: !1
                            })
                        })
                    }
                    return a.createElement(Oe, {
                        compact: !0,
                        marginY: "2x",
                        linkAttributes: r,
                        linkUrl: gn(t.bookingUrl),
                        className: "".concat(Ur.card, " ").concat(Ur.round),
                        onClick: n
                    }, a.createElement(Oe.Content, {
                        imageSize: "medium",
                        headingTagName: "h4",
                        heading: l(),
                        subtitle: s(),
                        image: function() {
                            var e = u(),
                                t = e.photo,
                                n = e.logo;
                            return n || a.createElement(Kr, {
                                heading: l(),
                                photo: t,
                                icon: a.createElement(b.PlaneTripIcon, null),
                                iconColor: "constructive"
                            })
                        }(),
                        className: Ur.content
                    }))
                },
                Fi = function(e, t, n) {
                    var r, i, o;
                    return e.length > 1 ? a.createElement(Fn, {
                        logos: e.map((function(e) {
                            var t, n;
                            return null !== (t = null === (n = e.logo) || void 0 === n ? void 0 : n.absoluteUrl) && void 0 !== t ? t : ""
                        })),
                        size: n ? "medium" : "large"
                    }) : a.createElement(Kr, {
                        heading: t,
                        photo: null !== (r = null === (i = e[0]) || void 0 === i || null === (o = i.logo) || void 0 === o ? void 0 : o.absoluteUrl) && void 0 !== r ? r : void 0,
                        icon: a.createElement(b.PlaneTripIcon, null)
                    })
                },
                Zi = function(e) {
                    var t, n = e.reservation,
                        r = e.onClick,
                        i = e.tripItemC360,
                        o = e.menuItems,
                        l = e.isMDOT,
                        s = e.cardLinkAttributes,
                        u = Fe(n),
                        d = n.bookingUrl;

                    function m(e, t) {
                        var n = 0 === e,
                            r = 1 === t.length ? t[0].name : a.createElement(c.cC, {
                                tag: "my_trips_parity_flight_airlines",
                                num_exception: t.length,
                                variables: {
                                    num_airlines: t.length
                                }
                            });
                        return a.createElement(a.Fragment, null, a.createElement("span", null, n ? a.createElement(c.cC, {
                            tag: "my_trips_parity_flight_direct"
                        }) : a.createElement(c.cC, {
                            tag: "my_trips_parity_flight_stops",
                            num_exception: e,
                            variables: {
                                num_stops: e
                            }
                        })), a.createElement("span", null, r))
                    }
                    return a.createElement(Oe, {
                        linkAttributes: s,
                        linkUrl: gn(d),
                        onClick: r,
                        isPast: je(n),
                        noDepth: !0,
                        menu: a.createElement(Hr, {
                            menuItemConnectors: o,
                            reservation: n,
                            tripItemC360: i
                        })
                    }, null === (t = n.flightComponents) || void 0 === t ? void 0 : t.map((function(e, t) {
                        var r, i = ji(e, (0, xi.Z)()),
                            o = i.stopsCount,
                            c = i.keyValue,
                            s = i.carriers,
                            u = i.localizedDate,
                            d = i.heading;
                        return a.createElement(Oe.Content, {
                            className: "".concat(Ur["mytrips-card"], " ").concat(Ur.content),
                            key: c,
                            image: Fi(s, d, l),
                            heading: d,
                            dates: u,
                            extraInfo: m(o, s),
                            price: l || 0 !== t || null === (r = n.userPriceWeb) || void 0 === r ? void 0 : r.userCurrencyPrice
                        })
                    })), a.createElement(p, {
                        style: {
                            marginLeft: "104px"
                        }
                    }, u && a.createElement(Oe.Status, {
                        status: u
                    })))
                },
                Vi = function(e) {
                    var t, n = e.reservation,
                        r = e.variant,
                        o = (0, _.Z)(e, Di);
                    return r === te.PreviewMode ? a.createElement(Oe, {
                        isPast: je(n)
                    }, null === n || void 0 === n || null === (t = n.flightComponents) || void 0 === t ? void 0 : t.map((function(e) {
                        var t = ji(e, (0, xi.Z)()),
                            n = t.keyValue,
                            r = t.carriers,
                            i = t.localizedDate,
                            o = t.heading;
                        return a.createElement(Oe.Content, {
                            key: n,
                            image: Fi(r, o, !0),
                            heading: o,
                            headingTagName: "h4",
                            dates: i,
                            className: Ur.content
                        })
                    }))) : r === te.MyTrips && Re(n) ? a.createElement(Zi, (0, i.Z)({
                        reservation: n
                    }, o)) : r === te.UpcomingTrip && Re(n) ? a.createElement(Ui, (0, i.Z)({
                        reservation: n
                    }, o)) : null
                },
                Hi = n.p + "static/media/taxi-icon.6ac024b4.png",
                Gi = ["reservation", "variant"],
                Bi = function(e) {
                    var t, n, r, i, o = e.reservation,
                        c = e.onClick,
                        l = e.getHeading,
                        s = e.cardLinkAttributes,
                        u = l(null !== (t = null === (n = o.product) || void 0 === n ? void 0 : n.vehicleTypeText) && void 0 !== t ? t : "");
                    if ((0, v.zm)(Dt())) {
                        var d, m, p = li(o);
                        return a.createElement(vi, {
                            reservationUrl: hn(o.bookingUrl, o.bookerEmail),
                            onClick: c,
                            heading: u,
                            dates: Ve(o.localisedDatetimeRange),
                            reservationStatus: o.reservationStatus,
                            image: a.createElement(pi, {
                                heading: u,
                                icon: a.createElement(b.TaxiSignIcon, null),
                                photo: null !== (d = null === (m = o.product) || void 0 === m ? void 0 : m.icon) && void 0 !== d ? d : void 0,
                                iconColor: p,
                                backgroundColor: p
                            })
                        })
                    }
                    return a.createElement(Oe, {
                        compact: !0,
                        marginY: "2x",
                        linkUrl: hn(o.bookingUrl, o.bookerEmail),
                        linkAttributes: s,
                        className: "".concat(Ur.card, " ").concat(Ur.round),
                        onClick: c
                    }, a.createElement(Oe.Content, {
                        imageSize: "medium",
                        headingTagName: "h4",
                        heading: u,
                        dates: Ve(o.localisedDatetimeRange),
                        status: o.reservationStatus,
                        image: a.createElement(Kr, {
                            heading: u,
                            photo: null !== (r = null === (i = o.product) || void 0 === i ? void 0 : i.icon) && void 0 !== r ? r : "",
                            icon: a.createElement(b.TaxiSignIcon, null),
                            iconColor: "constructive"
                        }),
                        className: Ur.content
                    }))
                },
                Ki = function() {
                    return a.createElement("div", {
                        className: Br()(Ur["mtr-reservation-thumb"], Ur["mtr-reservation-thumb--photo"]),
                        style: {
                            backgroundImage: 'url("'.concat(Hi, '")')
                        }
                    })
                },
                zi = function(e) {
                    var t, n = e.basicConnectors,
                        r = e.cardLinkAttributes,
                        i = e.experiences,
                        o = e.getHeading,
                        c = e.isMDOT,
                        l = e.locale,
                        s = e.menuItems,
                        u = e.onClick,
                        d = e.reservation,
                        m = e.tripItemC360,
                        p = i[ue.TAXI_ARRIVAL],
                        v = p ? Xt(p) : [],
                        f = [].concat((0, h.Z)(v), (0, h.Z)(n));
                    return a.createElement(a.Fragment, null, a.createElement(Oe, {
                        className: Ur["mytrips-card"],
                        linkAttributes: r,
                        linkUrl: hn(d.bookingUrl, d.bookerEmail),
                        onClick: function() {
                            return null === u || void 0 === u ? void 0 : u()
                        },
                        isPast: je(d),
                        noDepth: !0,
                        menu: a.createElement(Hr, {
                            menuItemConnectors: s,
                            reservation: d,
                            tripItemC360: m
                        })
                    }, null === (t = d.prebookTaxiComponents) || void 0 === t ? void 0 : t.map((function(e) {
                        var t, n, r, i = e.start,
                            s = e.end,
                            u = e.status,
                            d = e.userPriceWeb,
                            m = e.product;
                        return a.createElement(Oe.Content, {
                            key: "".concat(i.datetime).concat(s.datetime),
                            image: a.createElement(Ki, null),
                            heading: o(null !== (t = null === m || void 0 === m ? void 0 : m.vehicleTypeText) && void 0 !== t ? t : ""),
                            dates: Gt(i.datetime, {
                                locale: l,
                                options: {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                },
                                skipTZ: !0
                            }),
                            extraInfo: (null === (n = i.location) || void 0 === n ? void 0 : n.airportName) || (null === (r = i.location) || void 0 === r ? void 0 : r.city),
                            status: u,
                            price: c || null === d || void 0 === d ? void 0 : d.userCurrencyPrice
                        })
                    }))), f.map((function(e) {
                        return a.createElement(Tr, {
                            key: e.code,
                            connector: e,
                            reservations: [d]
                        })
                    })))
                },
                Yi = function(e) {
                    var t, n = (0, c.QT)(),
                        r = e.reservation,
                        l = e.variant,
                        s = (0, _.Z)(e, Gi),
                        u = {
                            getHeading: function(e) {
                                return e ? n.trans((0, o.t)("my_trips_card_booking_fallback_taxi_type", {
                                    variables: {
                                        vehicle_type: e
                                    }
                                })) : n.trans((0, o.t)("my_trips_card_booking_transfer_missing_type"))
                            }
                        };
                    return l === te.PreviewMode ? a.createElement(Oe, {
                        isPast: je(r)
                    }, null === (t = r.prebookTaxiComponents) || void 0 === t ? void 0 : t.map((function(e) {
                        var t, n = e.start,
                            i = e.end,
                            o = e.status,
                            c = e.product;
                        return a.createElement(Oe.Content, {
                            key: "".concat(n.datetime).concat(i.datetime),
                            image: a.createElement(Ki, null),
                            heading: u.getHeading(null !== (t = null === c || void 0 === c ? void 0 : c.vehicleTypeText) && void 0 !== t ? t : ""),
                            headingTagName: "h4",
                            dates: Ve(r.localisedDatetimeRange),
                            status: s.isMDOT ? void 0 : o
                        })
                    }))) : l === te.MyTrips && xe(r) ? a.createElement(zi, (0, i.Z)({
                        reservation: r
                    }, u, s)) : l === te.UpcomingTrip && xe(r) ? a.createElement(Bi, (0, i.Z)({
                        reservation: r
                    }, u, s)) : null
                },
                Qi = n.p + "static/media/public-transport-icon.e1adbe49.png",
                Wi = ["reservation", "variant"],
                Xi = function(e) {
                    var t, n, r, i, l = e.reservation,
                        s = e.onClick,
                        u = e.cardLinkAttributes,
                        d = (0, c.QT)();

                    function m() {
                        var e;
                        return null !== (e = l.parts[0].displayText) && void 0 !== e ? e : ""
                    }

                    function p() {
                        return 1 === l.parts.length ? d.trans((0, o.t)("my_trips_card_index_flight_one_way_trip")) : 2 === l.parts.length ? d.trans((0, o.t)("my_trips_return_ticket")) : ""
                    }
                    var f = null === (t = l.parts) || void 0 === t || null === (n = t[0]) || void 0 === n || null === (r = n.icons) || void 0 === r || null === (i = r[0]) || void 0 === i ? void 0 : i.absoluteUrl,
                        _ = f && !f.startsWith("http://") ? f : Qi;
                    if ((0, v.zm)(Dt())) {
                        var g = li(l);
                        return a.createElement(vi, {
                            reservationUrl: gn(l.ticketUrl),
                            onClick: s,
                            heading: m(),
                            headingSubtitle: p(),
                            dates: Ve(l.localisedDatetimeRange),
                            image: a.createElement(pi, {
                                heading: m(),
                                photo: _,
                                icon: a.createElement(b.TransportBusFrontIcon, null),
                                iconColor: g,
                                backgroundColor: g
                            })
                        })
                    }
                    return a.createElement(Oe, {
                        compact: !0,
                        marginY: "2x",
                        linkUrl: gn(l.ticketUrl),
                        linkAttributes: u,
                        className: "".concat(Ur.card, " ").concat(Ur.round),
                        onClick: s
                    }, a.createElement(Oe.Content, {
                        imageSize: "medium",
                        headingTagName: "h4",
                        heading: m(),
                        subtitle: p(),
                        dates: Ve(l.localisedDatetimeRange),
                        image: function() {
                            var e, t, n, r, i = null === (e = l.parts) || void 0 === e || null === (t = e[0]) || void 0 === t || null === (n = t.icons) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.absoluteUrl,
                                o = i && !i.startsWith("http://") ? i : Qi;
                            return a.createElement(Kr, {
                                heading: m(),
                                photo: o,
                                icon: a.createElement(b.TransportBusFrontIcon, null),
                                iconColor: "constructive"
                            })
                        }(),
                        className: Ur.content
                    }))
                },
                qi = function(e) {
                    var t = e.hasMultipleRides;
                    return a.createElement("div", {
                        className: Br()(Ur["mtr-reservation-thumb"], Ur["mtr-reservation-thumb--photo"], (0, bt.Z)({}, Ur["mtr-reservation-thumb--smaller"], t)),
                        style: {
                            backgroundImage: 'url("'.concat(Qi, '")')
                        }
                    })
                },
                Ji = function(e, t) {
                    return null !== e && void 0 !== e && e.start ? Gt(e.start, {
                        locale: t,
                        options: {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    }) : ""
                },
                $i = function(e) {
                    var t, n, r, i = e.onClick,
                        l = e.reservation,
                        s = e.tripItemC360,
                        u = e.menuItems,
                        d = e.isMDOT,
                        m = e.locale,
                        v = e.cardLinkAttributes,
                        f = (0, c.QT)(),
                        _ = !je(l),
                        g = Fe(l),
                        h = null === l || void 0 === l ? void 0 : l.parts,
                        b = (null !== (t = null === h || void 0 === h ? void 0 : h.length) && void 0 !== t ? t : 0) > 1;
                    return a.createElement(Oe, {
                        className: Ur["mytrips-card"],
                        linkAttributes: v,
                        linkUrl: gn(l.ticketUrl),
                        onClick: i,
                        isPast: !_,
                        noDepth: !0,
                        menu: a.createElement(Hr, {
                            menuItemConnectors: u,
                            reservation: l,
                            tripItemC360: s
                        })
                    }, null === l || void 0 === l || null === (n = l.parts) || void 0 === n || null === (r = n.map) || void 0 === r ? void 0 : r.call(n, (function(e, t) {
                        var n, r, i = "".concat(l.identifiers.publicId, "-").concat(t);
                        return a.createElement(Oe.Content, {
                            key: i,
                            image: a.createElement(qi, {
                                hasMultipleRides: b
                            }),
                            heading: null !== (n = e.displayText) && void 0 !== n ? n : "",
                            dates: Ji(e.validityPeriod, m),
                            price: d || 0 !== t || null === (r = l.userPriceWeb) || void 0 === r ? void 0 : r.userCurrencyPrice,
                            extraInfo: e.numberOfTickets ? f.trans((0, o.t)("mytrips_trip_overview_num_passengers", {
                                num_exception: e.numberOfTickets,
                                variables: {
                                    num: e.numberOfTickets
                                }
                            })) : void 0,
                            status: b ? void 0 : g
                        })
                    })), b && g && a.createElement(p, {
                        style: {
                            marginLeft: "104px"
                        }
                    }, g && a.createElement(Oe.Status, {
                        status: g
                    })))
                },
                ea = function(e) {
                    var t = e.reservation,
                        n = e.variant,
                        r = (0, _.Z)(e, Wi);
                    if (n === te.PreviewMode) {
                        var o, c, l, s = null === t || void 0 === t ? void 0 : t.parts,
                            u = (null !== (o = null === s || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0) > 1;
                        return a.createElement(Oe, {
                            isPast: je(t)
                        }, null === t || void 0 === t || null === (c = t.parts) || void 0 === c || null === (l = c.map) || void 0 === l ? void 0 : l.call(c, (function(e, n) {
                            var i, o = "".concat(t.identifiers.publicId, "-").concat(n);
                            return a.createElement(Oe.Content, {
                                key: o,
                                image: a.createElement(qi, {
                                    hasMultipleRides: u
                                }),
                                heading: null !== (i = e.displayText) && void 0 !== i ? i : "",
                                dates: Ji(e.validityPeriod, r.locale)
                            })
                        })))
                    }
                    return n === te.MyTrips && De(t) ? a.createElement($i, (0, i.Z)({
                        reservation: t
                    }, r)) : n === te.UpcomingTrip && De(t) ? a.createElement(Xi, (0, i.Z)({
                        reservation: t
                    }, r)) : null
                },
                ta = ["reservation", "variant"],
                na = function(e) {
                    var t = e.reservation,
                        n = e.onClick,
                        r = e.heading,
                        i = e.dates,
                        o = e.image,
                        c = e.cardLinkAttributes;
                    if ((0, v.zm)(Dt())) {
                        var l = li(t);
                        return a.createElement(vi, {
                            reservationUrl: gn(t.bookingUrl),
                            onClick: n,
                            heading: r,
                            dates: i,
                            image: a.createElement(pi, {
                                heading: r,
                                icon: a.createElement(b.CheckInsuranceIcon, null),
                                iconColor: l,
                                backgroundColor: l
                            })
                        })
                    }
                    return a.createElement(Oe, {
                        compact: !0,
                        marginY: "2x",
                        linkUrl: gn(t.bookingUrl),
                        linkAttributes: c,
                        className: "".concat(Ur.card, " ").concat(Ur.round),
                        onClick: n
                    }, a.createElement(Oe.Content, {
                        imageSize: "medium",
                        headingTagName: "h4",
                        heading: r,
                        dates: i,
                        image: o,
                        className: Ur.content
                    }))
                },
                ra = function(e) {
                    var t, n = e.onClick,
                        r = e.reservation,
                        i = e.tripItemC360,
                        o = e.menuItems,
                        c = e.heading,
                        l = e.dates,
                        s = e.image,
                        u = e.isMDOT,
                        d = e.cardLinkAttributes;
                    return a.createElement(Oe, {
                        className: Ur["mytrips-card"],
                        noDepth: !0,
                        linkAttributes: d,
                        linkUrl: gn(r.bookingUrl),
                        onClick: n,
                        isPast: je(r),
                        menu: a.createElement(Hr, {
                            menuItemConnectors: o,
                            reservation: r,
                            tripItemC360: i
                        })
                    }, a.createElement(Oe.Content, {
                        price: u || null === (t = r.userPriceWeb) || void 0 === t ? void 0 : t.userCurrencyPrice,
                        image: s,
                        heading: c,
                        dates: l,
                        status: Fe(r)
                    }))
                },
                ia = function(e) {
                    var t = (0, c.QT)(),
                        n = e.reservation,
                        r = e.variant,
                        l = (0, _.Z)(e, ta),
                        s = t.trans((0, o.t)("mytrips_travel_insurance_header")),
                        u = li(n),
                        d = {
                            heading: s,
                            dates: Ve(n.localisedDatetimeRange),
                            image: a.createElement(Kr, {
                                heading: s,
                                icon: a.createElement(b.CheckInsuranceIcon, null),
                                iconColor: u,
                                backgroundColor: u
                            })
                        };
                    return r === te.PreviewMode ? a.createElement(Oe, {
                        isPast: je(n)
                    }, a.createElement(Oe.Content, (0, i.Z)({}, d, {
                        status: l.isMDOT ? void 0 : Fe(n)
                    }))) : r === te.MyTrips && Pe(n) ? a.createElement(ra, (0, i.Z)({
                        reservation: n
                    }, d, l)) : r === te.UpcomingTrip && Pe(n) ? a.createElement(na, (0, i.Z)({
                        reservation: n
                    }, d, l)) : null
                },
                aa = function(e, t) {
                    var n = (0, a.useRef)(e);
                    (0, a.useEffect)((function() {
                        n.current = e
                    }), [e]), (0, a.useEffect)((function() {
                        if (t || 0 === t) {
                            var e = setInterval((function() {
                                return n.current()
                            }), t);
                            return function() {
                                return clearInterval(e)
                            }
                        }
                    }), [t])
                },
                oa = "Started",
                ca = "Stopped",
                la = (0, Be.Z)(Li || (Li = (0, g.Z)(["aWQOcABVYUbJfEDTYVOVZMYCBBLXORe"]))),
                sa = (0, Be.Z)(Mi || (Mi = (0, g.Z)(["aWQOcOOIBTAPVFfSUICJdDBKSOGXCHT"]))),
                ua = function() {
                    return ze() ? sa : la
                },
                da = function(e, t) {
                    var n = (0, a.useRef)(0),
                        r = (0, a.useState)(oa),
                        i = (0, sn.Z)(r, 2),
                        o = i[0],
                        c = i[1],
                        l = (0, a.useState)(!1),
                        s = (0, sn.Z)(l, 2),
                        u = s[0],
                        d = s[1];
                    aa((function() {
                        n.current < 15 ? n.current += 1 : c(ca)
                    }), o === oa ? 1e3 : null), (0, a.useEffect)((function() {
                        var e = function() {
                            var e;
                            (e = n).current > 14 ? (0, v.pj)(ua(), 4) : e.current > 7 ? (0, v.pj)(ua(), 3) : (0, v.pj)(ua(), 2)
                        };
                        return window.addEventListener("beforeunload", e),
                            function() {
                                window.removeEventListener("beforeunload", e)
                            }
                    }), []), (0, a.useEffect)((function() {
                        !u && e && ((0, v.pj)(ua(), 1), d(!0))
                    }), [e, u]), (0, a.useEffect)((function() {
                        if (t) {
                            var e = null === t || void 0 === t ? void 0 : t.tripItems.some((function(e) {
                                    return Re(e.reservation)
                                })),
                                n = null === t || void 0 === t ? void 0 : t.tripItems.some((function(e) {
                                    return Ie(e.reservation)
                                }));
                            e && ((0, v.ti)(ua(), 1), n && (0, v.ti)(ua(), 2))
                        }
                    }), [t])
                },
                ma = function(e) {
                    var t, n, r = e.containingGroup,
                        o = void 0 === r ? [] : r,
                        c = e.reservation,
                        l = e.tripId,
                        s = void 0 === l ? "" : l,
                        u = e.variant,
                        d = e.onClick,
                        m = ze(),
                        p = (0, a.useMemo)((function() {
                            return function(e) {
                                var t, n = [],
                                    r = [],
                                    i = {},
                                    a = Kt(e);
                                try {
                                    for (a.s(); !(t = a.n()).done;) {
                                        var o, c, l, s = t.value;
                                        if ("ConnectorTripItem" === s.__typename && null !== (o = s.connector) && void 0 !== o && null !== (c = o.associatedReservations) && void 0 !== c && c.some((function(e) {
                                                return e.publicId
                                            }))) {
                                            var u = s.connector;
                                            Jt(u) ? r.push(u) : qt(u) && n.push(u)
                                        }
                                        Qt(s) && null !== (l = s.connectors) && void 0 !== l && l.some((function(e) {
                                            var t;
                                            return null === e || void 0 === e || null === (t = e.associatedReservations) || void 0 === t ? void 0 : t.some((function(e) {
                                                return e.publicId
                                            }))
                                        })) && (i[s.code] = s)
                                    }
                                } catch (d) {
                                    a.e(d)
                                } finally {
                                    a.f()
                                }
                                return {
                                    basicConnectors: n,
                                    menuItems: r,
                                    experiences: i
                                }
                            }(o)
                        }), [o]),
                        _ = p.basicConnectors,
                        g = p.menuItems,
                        h = p.experiences,
                        b = (0, a.useMemo)((function() {
                            return (0, f.T)().getLanguage()
                        }), []),
                        E = {
                            basicConnectors: _,
                            experiences: h,
                            menuItems: g,
                            tripId: s,
                            tripItemC360: rr(s, c),
                            onClick: d,
                            variant: u,
                            isMDOT: m,
                            locale: b,
                            cardLinkAttributes: m ? void 0 : {
                                target: "_blank"
                            }
                        };
                    if (we(c) && (0, v.ti)(st(), 1), u === te.UpcomingTrip ? E.onClick = function() {
                            null === d || void 0 === d || d(), (0, v.pj)(ua(), 5), m && (0, v.r9)("www_upcoming_booking_click"), fr({
                                trip_item: E.tripItemC360,
                                page: "index_page",
                                trip_item_ux_component: "booking_card"
                            })
                        } : u === te.MyTrips && (t = ut(), (n = c.verticalType) === ve.ACCOMMODATION || n === ve.BASIC || n === ve.ROCKET_MILES ? (0, v.ti)(t, mt) : n === ve.FLIGHT ? (0, v.ti)(t, pt) : n === ve.CAR ? (0, v.ti)(t, vt) : n === ve.PREBOOK_TAXI ? (0, v.ti)(t, ft) : (0, v.ti)(t, _t), E.onClick = function() {
                            null === d || void 0 === d || d(), (0, v.r9)(ee.INTERACTION), (0, v.r9)(ee.CLICKED_ON_BOOKING_CARD), fr({
                                trip_item: E.tripItemC360,
                                page: "trip_details",
                                trip_item_ux_component: "booking_card"
                            })
                        }), (0, a.useEffect)((function() {
                            u === te.MyTrips && _r.push({
                                trip_items: [E.tripItemC360]
                            }, cr.TRIP_DETAILS_SERVED, ar.SHORT)
                        }), [E.tripItemC360, u]), Ie(c)) return a.createElement(hi, (0, i.Z)({
                        reservation: c
                    }, E));
                    if (Se(c)) return a.createElement(Oi, (0, i.Z)({
                        reservation: c
                    }, E));
                    if (Ae(c)) return a.createElement(Ri, (0, i.Z)({
                        reservation: c
                    }, E));
                    if (Re(c)) return a.createElement(Vi, (0, i.Z)({
                        reservation: c
                    }, E));
                    if (xe(c)) return a.createElement(Yi, (0, i.Z)({
                        reservation: c
                    }, E));
                    if (De(c)) return a.createElement(ea, (0, i.Z)({
                        reservation: c
                    }, E));
                    if (Pe(c)) return a.createElement(ia, (0, i.Z)({
                        reservation: c
                    }, E));
                    throw new Error("MYTRIPS - ".concat(u, " - Unknown bookingType: ").concat(c.verticalType))
                };
            var pa = n(31121),
                va = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "UpcomingTrip"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "TripsListInput"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tripsQueries"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tripList"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "input"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "input"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "TripsList"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "backfillStatus"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "timelines"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "trip"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "id"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "title"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "startDateTime"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "endDateTime"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "localizedTripDateRange"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "timelineGroups"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "tripItems"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "InlineFragment",
                                                                                typeCondition: {
                                                                                    kind: "NamedType",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "ReservationTripItem"
                                                                                    }
                                                                                },
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "reservation"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "identifiers"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "publicFacingIdentifier"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "publicId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "reserveOrderId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "InlineFragment",
                                                                                                        typeCondition: {
                                                                                                            kind: "NamedType",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "AccommodationReservationIdentifiers"
                                                                                                            }
                                                                                                        },
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "hotelReservationId"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "startDateTime"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "endDateTime"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "localisedDatetimeRange"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "verticalType"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "reservationStatus"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "bookingUrl"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "price"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "amount"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "currency"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "AccommodationReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkIn"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "start"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "end"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkOut"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "start"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "end"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "propertyData"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "InlineFragment",
                                                                                                                typeCondition: {
                                                                                                                    kind: "NamedType",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "ReservationPropertyData"
                                                                                                                    }
                                                                                                                },
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "name"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "photos"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "absoluteUrl"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "isBookingHome"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "BookingBasicReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkIn"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "start"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "end"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkOut"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "start"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "end"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "propertyData"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "InlineFragment",
                                                                                                                typeCondition: {
                                                                                                                    kind: "NamedType",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "ReservationPropertyData"
                                                                                                                    }
                                                                                                                },
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "name"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "photos"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "absoluteUrl"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "isBookingHome"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "RocketMilesReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkIn"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "start"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "end"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkOut"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "start"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "end"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "propertyData"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "InlineFragment",
                                                                                                                typeCondition: {
                                                                                                                    kind: "NamedType",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "ReservationPropertyData"
                                                                                                                    }
                                                                                                                },
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "name"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "photos"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "absoluteUrl"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "isBookingHome"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "AttractionReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "product"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "name"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "photos"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "absoluteUrl"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "CarReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "id"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "bookerEmail"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "product"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "name"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "photos"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "absoluteUrl"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "FlightReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "flightComponents"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "localisedDatetimeRange"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "parts"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "startDateTime"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "endDateTime"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "startLocation"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "iata"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "location"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: [],
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [{
                                                                                                                                        kind: "Field",
                                                                                                                                        name: {
                                                                                                                                            kind: "Name",
                                                                                                                                            value: "city"
                                                                                                                                        },
                                                                                                                                        arguments: [],
                                                                                                                                        directives: []
                                                                                                                                    }, {
                                                                                                                                        kind: "Field",
                                                                                                                                        name: {
                                                                                                                                            kind: "Name",
                                                                                                                                            value: "countryCode"
                                                                                                                                        },
                                                                                                                                        arguments: [],
                                                                                                                                        directives: []
                                                                                                                                    }]
                                                                                                                                }
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "endLocation"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "iata"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "location"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: [],
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [{
                                                                                                                                        kind: "Field",
                                                                                                                                        name: {
                                                                                                                                            kind: "Name",
                                                                                                                                            value: "city"
                                                                                                                                        },
                                                                                                                                        arguments: [],
                                                                                                                                        directives: []
                                                                                                                                    }, {
                                                                                                                                        kind: "Field",
                                                                                                                                        name: {
                                                                                                                                            kind: "Name",
                                                                                                                                            value: "countryCode"
                                                                                                                                        },
                                                                                                                                        arguments: [],
                                                                                                                                        directives: []
                                                                                                                                    }]
                                                                                                                                }
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "marketingCarrier"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "code"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "name"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "logo"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: [],
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [{
                                                                                                                                        kind: "Field",
                                                                                                                                        name: {
                                                                                                                                            kind: "Name",
                                                                                                                                            value: "absoluteUrl"
                                                                                                                                        },
                                                                                                                                        arguments: [],
                                                                                                                                        directives: []
                                                                                                                                    }]
                                                                                                                                }
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "flightNumber"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "PrebookTaxiReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "identifiers"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "publicFacingIdentifier"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "publicId"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "reserveOrderId"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "InlineFragment",
                                                                                                                typeCondition: {
                                                                                                                    kind: "NamedType",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "AccommodationReservationIdentifiers"
                                                                                                                    }
                                                                                                                },
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "hotelReservationId"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "bookerEmail"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "bookingRef"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "product"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "providerName"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "vehicleTypeText"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "icon"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }]
                                                                                                        }
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "prebookTaxiComponents"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "status"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "start"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "datetime"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "location"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "city"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "countryCode"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "latitude"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "longitude"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "airportCode"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "airportId"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "airportName"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "ufi"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }]
                                                                                                                }
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "end"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "datetime"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "location"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: [],
                                                                                                                        selectionSet: {
                                                                                                                            kind: "SelectionSet",
                                                                                                                            selections: [{
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "city"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "countryCode"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "latitude"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "longitude"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }, {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "ufi"
                                                                                                                                },
                                                                                                                                arguments: [],
                                                                                                                                directives: []
                                                                                                                            }]
                                                                                                                        }
                                                                                                                    }]
                                                                                                                }
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "product"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "providerName"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "vehicleTypeText"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "icon"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "price"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "amount"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "currency"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }, {
                                                                                                kind: "InlineFragment",
                                                                                                typeCondition: {
                                                                                                    kind: "NamedType",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "PublicTransportReservation"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "ticketUrl"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "parts"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: [],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [{
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "icons"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "id"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }, {
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "absoluteUrl"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "displayText"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
                                                                                                            }, {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "validityPeriod"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: [],
                                                                                                                selectionSet: {
                                                                                                                    kind: "SelectionSet",
                                                                                                                    selections: [{
                                                                                                                        kind: "Field",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "start"
                                                                                                                        },
                                                                                                                        arguments: [],
                                                                                                                        directives: []
                                                                                                                    }]
                                                                                                                }
                                                                                                            }]
                                                                                                        }
                                                                                                    }]
                                                                                                }
                                                                                            }]
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            }]
                                                                        }
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "TripsListError"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "statusCode"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "response"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 7065,
                        source: {
                            body: "\n  query UpcomingTrip($input: TripsListInput!) {\n    tripsQueries {\n      tripList(input: $input) {\n        ... on TripsList {\n          backfillStatus\n          timelines {\n            trip {\n              id\n              title\n              startDateTime\n              endDateTime\n              localizedTripDateRange\n            }\n            timelineGroups {\n              tripItems {\n                type\n                ... on ReservationTripItem {\n                  reservation {\n                    identifiers {\n                      publicFacingIdentifier\n                      publicId\n                      reserveOrderId\n                      ... on AccommodationReservationIdentifiers {\n                        hotelReservationId\n                      }\n                    }\n                    startDateTime\n                    endDateTime\n                    localisedDatetimeRange\n                    verticalType\n                    reservationStatus\n                    bookingUrl\n                    price {\n                      amount\n                      currency\n                    }\n                    ... on AccommodationReservation {\n                      checkIn {\n                        start\n                        end\n                      }\n                      checkOut {\n                        start\n                        end\n                      }\n                      propertyData {\n                        ... on ReservationPropertyData {\n                          name\n                          photos {\n                            absoluteUrl\n                          }\n                          isBookingHome\n                        }\n                      }\n                    }\n                    ... on BookingBasicReservation {\n                      checkIn {\n                        start\n                        end\n                      }\n                      checkOut {\n                        start\n                        end\n                      }\n                      propertyData {\n                        ... on ReservationPropertyData {\n                          name\n                          photos {\n                            absoluteUrl\n                          }\n                          isBookingHome\n                        }\n                      }\n                    }\n                    ... on RocketMilesReservation {\n                      checkIn {\n                        start\n                        end\n                      }\n                      checkOut {\n                        start\n                        end\n                      }\n                      propertyData {\n                        ... on ReservationPropertyData {\n                          name\n                          photos {\n                            absoluteUrl\n                          }\n                          isBookingHome\n                        }\n                      }\n                    }\n                    ... on AttractionReservation {\n                      product {\n                        name\n                        photos {\n                          absoluteUrl\n                        }\n                      }\n                    }\n                    ... on CarReservation {\n                      id\n                      bookerEmail\n                      product {\n                        name\n                        photos {\n                          absoluteUrl\n                        }\n                      }\n                    }\n                    ... on FlightReservation {\n                      flightComponents {\n                        localisedDatetimeRange\n                        parts {\n                          startDateTime\n                          endDateTime\n                          startLocation {\n                            iata\n                            location {\n                              city\n                              countryCode\n                            }\n                          }\n                          endLocation {\n                            iata\n                            location {\n                              city\n                              countryCode\n                            }\n                          }\n                          marketingCarrier {\n                            code\n                            name\n                            logo {\n                              absoluteUrl\n                            }\n                          }\n                          flightNumber\n                        }\n                      }\n                    }\n                    ... on PrebookTaxiReservation {\n                      identifiers {\n                        publicFacingIdentifier\n                        publicId\n                        reserveOrderId\n                        ... on AccommodationReservationIdentifiers {\n                          hotelReservationId\n                        }\n                      }\n                      bookerEmail\n                      bookingRef\n                      product {\n                        providerName\n                        vehicleTypeText\n                        icon\n                      }\n                      prebookTaxiComponents {\n                        status\n                        start {\n                          datetime\n                          location {\n                            city\n                            countryCode\n                            latitude\n                            longitude\n                            airportCode\n                            airportId\n                            airportName\n                            ufi\n                          }\n                        }\n                        end {\n                          datetime\n                          location {\n                            city\n                            countryCode\n                            latitude\n                            longitude\n                            ufi\n                          }\n                        }\n                        product {\n                          providerName\n                          vehicleTypeText\n                          icon\n                        }\n                        price {\n                          amount\n                          currency\n                        }\n                      }\n                    }\n                    ... on PublicTransportReservation {\n                      ticketUrl\n                      parts {\n                        icons {\n                          id\n                          absoluteUrl\n                        }\n                        displayText\n                        validityPeriod {\n                          start\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n        ... on TripsListError {\n          statusCode\n          response\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                fa = function() {
                    var e = (0, f.T)().getBPlatformEnvironment();
                    return !e || "dev" === e
                },
                _a = n(42015);
            var ga = function(e, t, n) {
                var r, i;
                if (n) {
                    var a = new Error("MYTRIPS - ".concat(e, " - No data retreived, ").concat(n.message));
                    a.extraInfo = {
                        errorGroup: "MYTRIPS"
                    }, (0, _a.eK)(a), (0, _a.bf)("MYTRIPS - ".concat(e, " - No data retreived"), {
                        error: n
                    })
                }
                if ("TripsListError" === (null === t || void 0 === t || null === (r = t.tripsQueries.tripList) || void 0 === r ? void 0 : r.__typename)) {
                    var o = new Error("MYTRIPS - ".concat(e, " - Query error type: ").concat(t.tripsQueries.tripList.statusCode));
                    o.extraInfo = {
                        errorGroup: "MYTRIPS"
                    }, (0, _a.eK)(o)
                }
                if ("TripsList" === (null === t || void 0 === t || null === (i = t.tripsQueries.tripList) || void 0 === i ? void 0 : i.__typename) && t.tripsQueries.tripList.backfillStatus === pe.FAILED) {
                    var c = new Error("MYTRIPS - ".concat(e, " - FAILED backfill status"));
                    c.extraInfo = {
                        errorGroup: "MYTRIPS"
                    }, (0, _a.eK)(c)
                }
            };

            function ha() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = (0, pa.t)(va, {
                        variables: {
                            input: {
                                stages: [me.CURRENT, me.UPCOMING],
                                thumbnailSize: n ? {
                                    width: 672,
                                    height: 378
                                } : {
                                    width: 2192,
                                    height: 548
                                },
                                selectConnectorChannels: [ae.INDEX_UPCOMING_TRIP],
                                extraParameters: {
                                    injectFakeReservationsForPrebookTaxi: !0
                                }
                            }
                        },
                        ssr: !fa(),
                        notifyOnNetworkStatusChange: !0
                    }),
                    i = (0, sn.Z)(r, 2),
                    o = i[0],
                    c = i[1],
                    l = c.data,
                    s = c.error,
                    u = c.loading,
                    d = c.called,
                    m = c.refetch;
                if ((0, a.useEffect)((function() {
                        o()
                    }), [o]), ga(te.UpcomingTrip, l, s), "TripsList" === (null === l || void 0 === l || null === (e = l.tripsQueries.tripList) || void 0 === e ? void 0 : e.__typename) && l.tripsQueries.tripList.backfillStatus !== pe.DONE || s) return null === m || void 0 === m || m(), {
                    data: void 0,
                    loading: !0,
                    called: !0,
                    error: void 0
                };
                if (l) {
                    var p, v = l.tripsQueries.tripList,
                        f = "TripsList" === (null === v || void 0 === v ? void 0 : v.__typename) ? v.timelines[0] : void 0;
                    if (!f) return {
                        data: void 0,
                        loading: u,
                        called: d,
                        error: s
                    };
                    var _ = f.timelineGroups.reduce((function(e, t) {
                        return [].concat((0, h.Z)(e), (0, h.Z)(t.tripItems))
                    }), []).filter((function(e) {
                        if (e.type !== de.RESERVATION) return !1;
                        var t = new Date(e.reservation.endDateTime),
                            n = Me(e.reservation);
                        return t > Zt && !n
                    }));
                    t = {
                        title: f.trip.title,
                        startDate: f.trip.startDateTime,
                        endDate: f.trip.endDateTime,
                        tripItems: _,
                        localizedTripDateRange: null !== (p = f.trip.localizedTripDateRange) && void 0 !== p ? p : void 0,
                        tripId: f.trip.id
                    }
                }
                return {
                    data: t,
                    loading: u,
                    called: d,
                    error: s
                }
            }
            var ba = {
                carousel: "c5db8bf0a5",
                loader: "e7cfdf1d49",
                loader_wrapper: "e196e5d460",
                carousel_box: "b2c4caa8fa",
                card: "a32f93f4f7",
                upcoming_trips_title: "da7aae788d",
                upcoming_trips_subtitle: "f9aa8eda4b"
            };

            function Ea(e) {
                var t = ze() ? "headline_3" : "headline_2";
                return a.createElement(l.Dx, (0, i.Z)({
                    variant: t
                }, e))
            }

            function ya(e) {
                var t = e.title,
                    n = e.subtitle;
                return a.createElement(l.Dx, {
                    titleTagName: "h2",
                    title: t,
                    subtitle: n,
                    titleClassName: ba.upcoming_trips_title,
                    subtitleClassName: ba.upcoming_trips_subtitle
                })
            }

            function ka(e) {
                var t = ze() ? "larger" : "large";
                return a.createElement(l.lr, (0, i.Z)({
                    size: t
                }, e))
            }

            function Ca(e) {
                var t = e.children;
                return ze() ? a.createElement(l.Zb, {
                    className: ba.card
                }, t) : a.createElement(p, {
                    className: ba.carousel_box,
                    mb: "4x"
                }, t)
            }

            function Oa(e) {
                var t = e.children;
                return ze() ? a.createElement(l.Zb, null, t) : a.createElement("div", {
                    className: ba.loader_wrapper
                }, t)
            }
            var Na = function() {
                var e = (0, c.QT)(),
                    t = ha(ze()),
                    n = t.data,
                    r = (t.error, t.loading),
                    i = t.called,
                    u = (0, a.useRef)(null),
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = (0, a.useState)(!1),
                            i = (0, sn.Z)(r, 2),
                            o = i[0],
                            c = i[1],
                            l = (0, a.useRef)();
                        return (0, a.useEffect)((function() {
                            l.current = new IntersectionObserver((function(e) {
                                var t = (0, sn.Z)(e, 1)[0];
                                return c(t.isIntersecting)
                            }), n)
                        }), [n]), (0, a.useEffect)((function() {
                            if (l.current && e.current) return l.current.observe(e.current),
                                function() {
                                    var e;
                                    null === (e = l.current) || void 0 === e || e.disconnect()
                                }
                        }), [e].concat((0, h.Z)(t))), o
                    }(u, [], {
                        threshold: .75
                    });
                if (da(d, n), r || !i) return a.createElement(Oa, null, a.createElement(l.gi, {
                    variant: "two-lines",
                    width: "300px"
                }), a.createElement("div", {
                    className: ba.loader
                }, a.createElement(l.lr, {
                    nextButtonAriaLabel: "Next content",
                    previousButtonAriaLabel: "Previous content"
                }, a.createElement(l.gi, {
                    variant: "box",
                    width: "350px",
                    aspectRatio: "7:2"
                }), a.createElement(l.gi, {
                    variant: "box",
                    width: "350px",
                    aspectRatio: "7:2"
                }))));
                if (!n || !n.tripItems.length) return null;
                n.tripItems.length >= 1 && (! function(e) {
                    var t = Dt();
                    switch ((0, v.ti)(t, Pt.allUsersWithUpcomingTrips), e) {
                        case 1:
                            wt(Pt.usersWith1UpcomingTrip);
                            break;
                        case 2:
                            wt(Pt.usersWith2UpcomingTrips);
                            break;
                        case 3:
                            wt(Pt.usersWith3UpcomingTrips);
                            break;
                        default:
                            wt(Pt.usersWith4OrMoreUpcomingTrips)
                    }
                }(n.tripItems.length), s.Z.sendEvent({
                    action_name: "trips_book_to_stay__index_page_served",
                    action_version: "0.1.0",
                    content: {
                        connectors: [],
                        trip_items: n.tripItems.map((function(e) {
                            return rr(n.tripId, e.reservation)
                        }))
                    }
                }));
                var m = (0, v.zm)(Dt());
                return a.createElement(Ca, null, a.createElement(ka, {
                    onAfterNavigate: Mt,
                    title: m ? a.createElement(ya, {
                        title: e.trans((0, o.t)("trip_engagement_pb_your_upcoming_trip_head")),
                        subtitle: "".concat(null === n || void 0 === n ? void 0 : n.title, " - ").concat(null === n || void 0 === n ? void 0 : n.localizedTripDateRange)
                    }) : a.createElement(Ea, {
                        title: e.trans((0, o.t)("trip_engagement_pb_your_upcoming_trip_head")),
                        titleTagName: "h2",
                        subtitle: "".concat(null === n || void 0 === n ? void 0 : n.title, " - ").concat(null === n || void 0 === n ? void 0 : n.localizedTripDateRange)
                    }),
                    nextButtonAriaLabel: "Next content",
                    previousButtonAriaLabel: "Previous content",
                    ariaLabel: e.trans((0, o.t)("trip_engagement_pb_your_upcoming_trip_head")),
                    className: ba.carousel,
                    attributes: {
                        ref: u
                    }
                }, n.tripItems.map((function(e, t) {
                    return a.createElement(ma, {
                        variant: te.UpcomingTrip,
                        reservation: e.reservation,
                        tripId: n.tripId,
                        key: e.reservation.identifiers.publicId || void 0,
                        onClick: function() {
                            return function(e) {
                                var t = Dt();
                                switch ((0, v.pj)(t, Lt.clickOnReservationCard), e) {
                                    case 0:
                                        (0, v.pj)(t, Lt.clickOnFirstCard);
                                        break;
                                    case 1:
                                        (0, v.pj)(t, Lt.clickOnSecondCard);
                                        break;
                                    case 2:
                                        (0, v.pj)(t, Lt.clickOnThirdCard)
                                }
                            }(t)
                        }
                    })
                }))))
            }
        },
        22623: function(e, t, n) {
            var r = n(61122),
                i = n(79112),
                a = n(52466),
                o = n(64633),
                c = n(61289);

            function l(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = c, e.exports = l
        },
        51904: function(e, t, n) {
            var r = n(16701),
                i = n(9042),
                a = n(56037),
                o = n(76795),
                c = n(82217);

            function l(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = c, e.exports = l
        },
        66152: function(e, t, n) {
            var r = n(29708)(n(8806), "Map");
            e.exports = r
        },
        44802: function(e, t, n) {
            var r = n(3048),
                i = n(53427),
                a = n(24868),
                o = n(31635),
                c = n(75090);

            function l(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = c, e.exports = l
        },
        94851: function(e, t, n) {
            var r = n(51904),
                i = n(65550),
                a = n(41639),
                o = n(64931),
                c = n(34951),
                l = n(5178);

            function s(e) {
                var t = this.__data__ = new r(e);
                this.size = t.size
            }
            s.prototype.clear = i, s.prototype.delete = a, s.prototype.get = o, s.prototype.has = c, s.prototype.set = l, e.exports = s
        },
        99775: function(e, t, n) {
            var r = n(8806).Symbol;
            e.exports = r
        },
        2650: function(e, t, n) {
            var r = n(8806).Uint8Array;
            e.exports = r
        },
        50952: function(e) {
            e.exports = function(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
        },
        41455: function(e, t, n) {
            var r = n(8448),
                i = n(91332),
                a = n(83322),
                o = n(13035),
                c = n(46268),
                l = n(41756),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    u = !n && i(e),
                    d = !n && !u && o(e),
                    m = !n && !u && !d && l(e),
                    p = n || u || d || m,
                    v = p ? r(e.length, String) : [],
                    f = v.length;
                for (var _ in e) !t && !s.call(e, _) || p && ("length" == _ || d && ("offset" == _ || "parent" == _) || m && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || c(_, f)) || v.push(_);
                return v
            }
        },
        84991: function(e, t, n) {
            var r = n(57803),
                i = n(72378);
            e.exports = function(e, t, n) {
                (void 0 !== n && !i(e[t], n) || void 0 === n && !(t in e)) && r(e, t, n)
            }
        },
        33650: function(e, t, n) {
            var r = n(57803),
                i = n(72378),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n) {
                var o = e[t];
                a.call(e, t) && i(o, n) && (void 0 !== n || t in e) || r(e, t, n)
            }
        },
        72110: function(e, t, n) {
            var r = n(72378);
            e.exports = function(e, t) {
                for (var n = e.length; n--;)
                    if (r(e[n][0], t)) return n;
                return -1
            }
        },
        57803: function(e, t, n) {
            var r = n(34631);
            e.exports = function(e, t, n) {
                "__proto__" == t && r ? r(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
            }
        },
        17995: function(e, t, n) {
            var r = n(4802),
                i = Object.create,
                a = function() {
                    function e() {}
                    return function(t) {
                        if (!r(t)) return {};
                        if (i) return i(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();
            e.exports = a
        },
        22882: function(e, t, n) {
            var r = n(42270)();
            e.exports = r
        },
        61598: function(e, t, n) {
            var r = n(99775),
                i = n(94291),
                a = n(67237),
                o = "[object Null]",
                c = "[object Undefined]",
                l = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? c : o : l && l in Object(e) ? i(e) : a(e)
            }
        },
        56007: function(e, t, n) {
            var r = n(61598),
                i = n(29842),
                a = "[object Arguments]";
            e.exports = function(e) {
                return i(e) && r(e) == a
            }
        },
        82451: function(e, t, n) {
            var r = n(88639),
                i = n(64731),
                a = n(4802),
                o = n(71063),
                c = /^\[object .+?Constructor\]$/,
                l = Function.prototype,
                s = Object.prototype,
                u = l.toString,
                d = s.hasOwnProperty,
                m = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!a(e) || i(e)) && (r(e) ? m : c).test(o(e))
            }
        },
        87306: function(e, t, n) {
            var r = n(61598),
                i = n(57282),
                a = n(29842),
                o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function(e) {
                return a(e) && i(e.length) && !!o[r(e)]
            }
        },
        58545: function(e, t, n) {
            var r = n(4802),
                i = n(31383),
                a = n(96729),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return a(e);
                var t = i(e),
                    n = [];
                for (var c in e)("constructor" != c || !t && o.call(e, c)) && n.push(c);
                return n
            }
        },
        97822: function(e, t, n) {
            var r = n(94851),
                i = n(84991),
                a = n(22882),
                o = n(84117),
                c = n(4802),
                l = n(7167),
                s = n(90956);
            e.exports = function e(t, n, u, d, m) {
                t !== n && a(n, (function(a, l) {
                    if (m || (m = new r), c(a)) o(t, n, l, u, e, d, m);
                    else {
                        var p = d ? d(s(t, l), a, l + "", t, n, m) : void 0;
                        void 0 === p && (p = a), i(t, l, p)
                    }
                }), l)
            }
        },
        84117: function(e, t, n) {
            var r = n(84991),
                i = n(61638),
                a = n(92734),
                o = n(69737),
                c = n(1050),
                l = n(91332),
                s = n(83322),
                u = n(71498),
                d = n(13035),
                m = n(88639),
                p = n(4802),
                v = n(47008),
                f = n(41756),
                _ = n(90956),
                g = n(19833);
            e.exports = function(e, t, n, h, b, E, y) {
                var k = _(e, n),
                    C = _(t, n),
                    O = y.get(C);
                if (O) r(e, n, O);
                else {
                    var N = E ? E(k, C, n + "", e, t, y) : void 0,
                        I = void 0 === N;
                    if (I) {
                        var T = s(C),
                            S = !T && d(C),
                            A = !T && !S && f(C);
                        N = C, T || S || A ? s(k) ? N = k : u(k) ? N = o(k) : S ? (I = !1, N = i(C, !0)) : A ? (I = !1, N = a(C, !0)) : N = [] : v(C) || l(C) ? (N = k, l(k) ? N = g(k) : p(k) && !m(k) || (N = c(C))) : I = !1
                    }
                    I && (y.set(C, N), b(N, C, h, E, y), y.delete(C)), r(e, n, N)
                }
            }
        },
        67651: function(e, t, n) {
            var r = n(23466),
                i = n(98463),
                a = n(35637);
            e.exports = function(e, t) {
                return a(i(e, t, r), e + "")
            }
        },
        5582: function(e, t, n) {
            var r = n(8829),
                i = n(34631),
                a = n(23466),
                o = i ? function(e, t) {
                    return i(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(t),
                        writable: !0
                    })
                } : a;
            e.exports = o
        },
        8448: function(e) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        59862: function(e, t, n) {
            var r = n(21671),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, r(e) + 1).replace(i, "") : e
            }
        },
        59196: function(e) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        45727: function(e, t, n) {
            var r = n(2650);
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new r(t).set(new r(e)), t
            }
        },
        61638: function(e, t, n) {
            e = n.nmd(e);
            var r = n(8806),
                i = t && !t.nodeType && t,
                a = i && e && !e.nodeType && e,
                o = a && a.exports === i ? r.Buffer : void 0,
                c = o ? o.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var n = e.length,
                    r = c ? c(n) : new e.constructor(n);
                return e.copy(r), r
            }
        },
        92734: function(e, t, n) {
            var r = n(45727);
            e.exports = function(e, t) {
                var n = t ? r(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.length)
            }
        },
        69737: function(e) {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                return t
            }
        },
        44572: function(e, t, n) {
            var r = n(33650),
                i = n(57803);
            e.exports = function(e, t, n, a) {
                var o = !n;
                n || (n = {});
                for (var c = -1, l = t.length; ++c < l;) {
                    var s = t[c],
                        u = a ? a(n[s], e[s], s, n, e) : void 0;
                    void 0 === u && (u = e[s]), o ? i(n, s, u) : r(n, s, u)
                }
                return n
            }
        },
        83500: function(e, t, n) {
            var r = n(8806)["__core-js_shared__"];
            e.exports = r
        },
        80357: function(e, t, n) {
            var r = n(67651),
                i = n(51453);
            e.exports = function(e) {
                return r((function(t, n) {
                    var r = -1,
                        a = n.length,
                        o = a > 1 ? n[a - 1] : void 0,
                        c = a > 2 ? n[2] : void 0;
                    for (o = e.length > 3 && "function" == typeof o ? (a--, o) : void 0, c && i(n[0], n[1], c) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a;) {
                        var l = n[r];
                        l && e(t, l, r, o)
                    }
                    return t
                }))
            }
        },
        42270: function(e) {
            e.exports = function(e) {
                return function(t, n, r) {
                    for (var i = -1, a = Object(t), o = r(t), c = o.length; c--;) {
                        var l = o[e ? c : ++i];
                        if (!1 === n(a[l], l, a)) break
                    }
                    return t
                }
            }
        },
        34631: function(e, t, n) {
            var r = n(29708),
                i = function() {
                    try {
                        var e = r(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (t) {}
                }();
            e.exports = i
        },
        35694: function(e, t, n) {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = r
        },
        75031: function(e, t, n) {
            var r = n(57415);
            e.exports = function(e, t) {
                var n = e.__data__;
                return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }
        },
        29708: function(e, t, n) {
            var r = n(82451),
                i = n(57867);
            e.exports = function(e, t) {
                var n = i(e, t);
                return r(n) ? n : void 0
            }
        },
        34965: function(e, t, n) {
            var r = n(37418)(Object.getPrototypeOf, Object);
            e.exports = r
        },
        94291: function(e, t, n) {
            var r = n(99775),
                i = Object.prototype,
                a = i.hasOwnProperty,
                o = i.toString,
                c = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = a.call(e, c),
                    n = e[c];
                try {
                    e[c] = void 0;
                    var r = !0
                } catch (l) {}
                var i = o.call(e);
                return r && (t ? e[c] = n : delete e[c]), i
            }
        },
        57867: function(e) {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        61122: function(e, t, n) {
            var r = n(16688);
            e.exports = function() {
                this.__data__ = r ? r(null) : {}, this.size = 0
            }
        },
        79112: function(e) {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
        },
        52466: function(e, t, n) {
            var r = n(16688),
                i = "__lodash_hash_undefined__",
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (r) {
                    var n = t[e];
                    return n === i ? void 0 : n
                }
                return a.call(t, e) ? t[e] : void 0
            }
        },
        64633: function(e, t, n) {
            var r = n(16688),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return r ? void 0 !== t[e] : i.call(t, e)
            }
        },
        61289: function(e, t, n) {
            var r = n(16688),
                i = "__lodash_hash_undefined__";
            e.exports = function(e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
            }
        },
        1050: function(e, t, n) {
            var r = n(17995),
                i = n(34965),
                a = n(31383);
            e.exports = function(e) {
                return "function" != typeof e.constructor || a(e) ? {} : r(i(e))
            }
        },
        46268: function(e) {
            var t = 9007199254740991,
                n = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, r) {
                var i = typeof e;
                return !!(r = null == r ? t : r) && ("number" == i || "symbol" != i && n.test(e)) && e > -1 && e % 1 == 0 && e < r
            }
        },
        51453: function(e, t, n) {
            var r = n(72378),
                i = n(59411),
                a = n(46268),
                o = n(4802);
            e.exports = function(e, t, n) {
                if (!o(n)) return !1;
                var c = typeof t;
                return !!("number" == c ? i(n) && a(t, n.length) : "string" == c && t in n) && r(n[t], e)
            }
        },
        57415: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        },
        64731: function(e, t, n) {
            var r = n(83500),
                i = function() {
                    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!i && i in e
            }
        },
        31383: function(e) {
            var t = Object.prototype;
            e.exports = function(e) {
                var n = e && e.constructor;
                return e === ("function" == typeof n && n.prototype || t)
            }
        },
        16701: function(e) {
            e.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        9042: function(e, t, n) {
            var r = n(72110),
                i = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
            }
        },
        56037: function(e, t, n) {
            var r = n(72110);
            e.exports = function(e) {
                var t = this.__data__,
                    n = r(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
        },
        76795: function(e, t, n) {
            var r = n(72110);
            e.exports = function(e) {
                return r(this.__data__, e) > -1
            }
        },
        82217: function(e, t, n) {
            var r = n(72110);
            e.exports = function(e, t) {
                var n = this.__data__,
                    i = r(n, e);
                return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
            }
        },
        3048: function(e, t, n) {
            var r = n(22623),
                i = n(51904),
                a = n(66152);
            e.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new r,
                    map: new(a || i),
                    string: new r
                }
            }
        },
        53427: function(e, t, n) {
            var r = n(75031);
            e.exports = function(e) {
                var t = r(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
        },
        24868: function(e, t, n) {
            var r = n(75031);
            e.exports = function(e) {
                return r(this, e).get(e)
            }
        },
        31635: function(e, t, n) {
            var r = n(75031);
            e.exports = function(e) {
                return r(this, e).has(e)
            }
        },
        75090: function(e, t, n) {
            var r = n(75031);
            e.exports = function(e, t) {
                var n = r(this, e),
                    i = n.size;
                return n.set(e, t), this.size += n.size == i ? 0 : 1, this
            }
        },
        16688: function(e, t, n) {
            var r = n(29708)(Object, "create");
            e.exports = r
        },
        96729: function(e) {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e)) t.push(n);
                return t
            }
        },
        6127: function(e, t, n) {
            e = n.nmd(e);
            var r = n(35694),
                i = t && !t.nodeType && t,
                a = i && e && !e.nodeType && e,
                o = a && a.exports === i && r.process,
                c = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        return e || o && o.binding && o.binding("util")
                    } catch (t) {}
                }();
            e.exports = c
        },
        67237: function(e) {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        37418: function(e) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        98463: function(e, t, n) {
            var r = n(50952),
                i = Math.max;
            e.exports = function(e, t, n) {
                return t = i(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var a = arguments, o = -1, c = i(a.length - t, 0), l = Array(c); ++o < c;) l[o] = a[t + o];
                        o = -1;
                        for (var s = Array(t + 1); ++o < t;) s[o] = a[o];
                        return s[t] = n(l), r(e, this, s)
                    }
            }
        },
        8806: function(e, t, n) {
            var r = n(35694),
                i = "object" == typeof self && self && self.Object === Object && self,
                a = r || i || Function("return this")();
            e.exports = a
        },
        90956: function(e) {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
            }
        },
        35637: function(e, t, n) {
            var r = n(5582),
                i = n(68077)(r);
            e.exports = i
        },
        68077: function(e) {
            var t = 800,
                n = 16,
                r = Date.now;
            e.exports = function(e) {
                var i = 0,
                    a = 0;
                return function() {
                    var o = r(),
                        c = n - (o - a);
                    if (a = o, c > 0) {
                        if (++i >= t) return arguments[0]
                    } else i = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        65550: function(e, t, n) {
            var r = n(51904);
            e.exports = function() {
                this.__data__ = new r, this.size = 0
            }
        },
        41639: function(e) {
            e.exports = function(e) {
                var t = this.__data__,
                    n = t.delete(e);
                return this.size = t.size, n
            }
        },
        64931: function(e) {
            e.exports = function(e) {
                return this.__data__.get(e)
            }
        },
        34951: function(e) {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        5178: function(e, t, n) {
            var r = n(51904),
                i = n(66152),
                a = n(44802),
                o = 200;
            e.exports = function(e, t) {
                var n = this.__data__;
                if (n instanceof r) {
                    var c = n.__data__;
                    if (!i || c.length < o - 1) return c.push([e, t]), this.size = ++n.size, this;
                    n = this.__data__ = new a(c)
                }
                return n.set(e, t), this.size = n.size, this
            }
        },
        71063: function(e) {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (n) {}
                    try {
                        return e + ""
                    } catch (n) {}
                }
                return ""
            }
        },
        21671: function(e) {
            var t = /\s/;
            e.exports = function(e) {
                for (var n = e.length; n-- && t.test(e.charAt(n)););
                return n
            }
        },
        8829: function(e) {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        69770: function(e, t, n) {
            var r = n(4802),
                i = n(69085),
                a = n(25619),
                o = "Expected a function",
                c = Math.max,
                l = Math.min;
            e.exports = function(e, t, n) {
                var s, u, d, m, p, v, f = 0,
                    _ = !1,
                    g = !1,
                    h = !0;
                if ("function" != typeof e) throw new TypeError(o);

                function b(t) {
                    var n = s,
                        r = u;
                    return s = u = void 0, f = t, m = e.apply(r, n)
                }

                function E(e) {
                    var n = e - v;
                    return void 0 === v || n >= t || n < 0 || g && e - f >= d
                }

                function y() {
                    var e = i();
                    if (E(e)) return k(e);
                    p = setTimeout(y, function(e) {
                        var n = t - (e - v);
                        return g ? l(n, d - (e - f)) : n
                    }(e))
                }

                function k(e) {
                    return p = void 0, h && s ? b(e) : (s = u = void 0, m)
                }

                function C() {
                    var e = i(),
                        n = E(e);
                    if (s = arguments, u = this, v = e, n) {
                        if (void 0 === p) return function(e) {
                            return f = e, p = setTimeout(y, t), _ ? b(e) : m
                        }(v);
                        if (g) return clearTimeout(p), p = setTimeout(y, t), b(v)
                    }
                    return void 0 === p && (p = setTimeout(y, t)), m
                }
                return t = a(t) || 0, r(n) && (_ = !!n.leading, d = (g = "maxWait" in n) ? c(a(n.maxWait) || 0, t) : d, h = "trailing" in n ? !!n.trailing : h), C.cancel = function() {
                    void 0 !== p && clearTimeout(p), f = 0, s = v = u = p = void 0
                }, C.flush = function() {
                    return void 0 === p ? m : k(i())
                }, C
            }
        },
        72378: function(e) {
            e.exports = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        23466: function(e) {
            e.exports = function(e) {
                return e
            }
        },
        91332: function(e, t, n) {
            var r = n(56007),
                i = n(29842),
                a = Object.prototype,
                o = a.hasOwnProperty,
                c = a.propertyIsEnumerable,
                l = r(function() {
                    return arguments
                }()) ? r : function(e) {
                    return i(e) && o.call(e, "callee") && !c.call(e, "callee")
                };
            e.exports = l
        },
        83322: function(e) {
            var t = Array.isArray;
            e.exports = t
        },
        59411: function(e, t, n) {
            var r = n(88639),
                i = n(57282);
            e.exports = function(e) {
                return null != e && i(e.length) && !r(e)
            }
        },
        71498: function(e, t, n) {
            var r = n(59411),
                i = n(29842);
            e.exports = function(e) {
                return i(e) && r(e)
            }
        },
        13035: function(e, t, n) {
            e = n.nmd(e);
            var r = n(8806),
                i = n(80374),
                a = t && !t.nodeType && t,
                o = a && e && !e.nodeType && e,
                c = o && o.exports === a ? r.Buffer : void 0,
                l = (c ? c.isBuffer : void 0) || i;
            e.exports = l
        },
        88639: function(e, t, n) {
            var r = n(61598),
                i = n(4802),
                a = "[object AsyncFunction]",
                o = "[object Function]",
                c = "[object GeneratorFunction]",
                l = "[object Proxy]";
            e.exports = function(e) {
                if (!i(e)) return !1;
                var t = r(e);
                return t == o || t == c || t == a || t == l
            }
        },
        57282: function(e) {
            var t = 9007199254740991;
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= t
            }
        },
        4802: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        29842: function(e) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        47008: function(e, t, n) {
            var r = n(61598),
                i = n(34965),
                a = n(29842),
                o = "[object Object]",
                c = Function.prototype,
                l = Object.prototype,
                s = c.toString,
                u = l.hasOwnProperty,
                d = s.call(Object);
            e.exports = function(e) {
                if (!a(e) || r(e) != o) return !1;
                var t = i(e);
                if (null === t) return !0;
                var n = u.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && s.call(n) == d
            }
        },
        18745: function(e, t, n) {
            var r = n(61598),
                i = n(29842),
                a = "[object Symbol]";
            e.exports = function(e) {
                return "symbol" == typeof e || i(e) && r(e) == a
            }
        },
        41756: function(e, t, n) {
            var r = n(87306),
                i = n(59196),
                a = n(6127),
                o = a && a.isTypedArray,
                c = o ? i(o) : r;
            e.exports = c
        },
        7167: function(e, t, n) {
            var r = n(41455),
                i = n(58545),
                a = n(59411);
            e.exports = function(e) {
                return a(e) ? r(e, !0) : i(e)
            }
        },
        42791: function(e, t, n) {
            var r = n(97822),
                i = n(80357)((function(e, t, n, i) {
                    r(e, t, n, i)
                }));
            e.exports = i
        },
        69085: function(e, t, n) {
            var r = n(8806);
            e.exports = function() {
                return r.Date.now()
            }
        },
        80374: function(e) {
            e.exports = function() {
                return !1
            }
        },
        25619: function(e, t, n) {
            var r = n(59862),
                i = n(4802),
                a = n(18745),
                o = NaN,
                c = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                u = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return o;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = r(e);
                var n = l.test(e);
                return n || s.test(e) ? u(e.slice(2), n ? 2 : 8) : c.test(e) ? o : +e
            }
        },
        19833: function(e, t, n) {
            var r = n(44572),
                i = n(7167);
            e.exports = function(e) {
                return r(e, i(e))
            }
        },
        80827: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return N
                }
            });
            var r, i, a = n(79399),
                o = n(98178);
            ! function(e) {
                e.admin = "admin", e.app = "app", e.book = "book", e.join = "join"
            }(r || (r = {}));
            var c, l, s, u, d = ((i = {
                    DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
                })[o.N.EXTRANET] = ["hotel_id", "lang", "ses"], i),
                m = {
                    PRODUCTION: (c = {}, c[r.admin] = "admin", c[r.app] = "www", c[r.book] = "secure", c[r.join] = "join", c),
                    STAGING: (l = {}, l[r.admin] = "a", l[r.app] = "w", l[r.book] = "b", l[r.join] = "j", l),
                    KVM: (s = {}, s[r.admin] = ["adm", "devadmin"], s[r.app] = ["app", "devapp"], s[r.book] = ["book", "devbook"], s[r.join] = ["joinapp", "devjoinapp"], s),
                    DQS: (u = {}, u[r.admin] = "admin", u[r.app] = "app", u[r.book] = "book", u[r.join] = "join", u)
                },
                p = "booking.com",
                v = k(m.PRODUCTION),
                f = k(m.STAGING),
                _ = k(m.KVM),
                g = k(m.DQS),
                h = new RegExp("^(.*?)\\.?(" + p + "|booking.cn)$"),
                b = new RegExp("^(?:" + f.join("|") + ")(\\d+)$"),
                E = new RegExp("^(\\w+)-(" + _.join("|") + ").*?\\.dev$"),
                y = new RegExp("(?:" + g.join("|") + ")\\.dqs$");

            function k(e) {
                return Object.values(e).flat()
            }

            function C(e, t) {
                var n = new Set;
                null == t || t.forEach((function(t, r) {
                    n.has(r) ? e.append(r, t) : (e.set(r, t), n.add(r))
                }))
            }

            function O(e) {
                return Array.isArray(e) ? e[0] : e
            }

            function N(e) {
                return function() {
                    var e = (0, a.T)(),
                        t = e.getBasePageUrl();
                    if (!t) throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                    var n = function(e, t, n, r) {
                        var i = new URLSearchParams,
                            a = t && d.hasOwnProperty(t) ? t : "DEFAULT";
                        return d[a].forEach((function(t) {
                            var n = e.searchParams.get(t);
                            n && i.set(t, n)
                        })), "number" === typeof(null == n ? void 0 : n.id) && i.set("aid", n.id.toString()), (null == n ? void 0 : n.label) && i.set("label", n.label.toString()), r && e.searchParams.forEach((function(e, t) {
                            var n;
                            (0 === (n = t).indexOf("exp_") || 0 === n.indexOf("b_feature_running_") || "exp_all" === n || "hotel_account_id" === n || "i_am_from" === n || "my_ip" === n) && i.set(t, e)
                        })), i
                    }(t, e.getSiteType(), e.getAffiliate(), e.isInternalIp());
                    return function(r) {
                        var i = new URL("" + t.origin + t.pathname),
                            a = r.host ? function(e, t) {
                                var n = e.host.match(h);
                                if (!n) return e;
                                var r = n[1],
                                    i = n[2];
                                if ("" === r || v.includes(r)) {
                                    var a = O(m.PRODUCTION[t]);
                                    e.host = a + "." + i
                                } else if (E.test(r)) {
                                    var o = O(m.KVM[t]);
                                    e.host = r.replace(E, "$1-" + o + ".dev." + p)
                                } else if (y.test(r)) {
                                    var c = O(m.DQS[t]);
                                    e.host = c + ".dqs." + p
                                } else if (b.test(r)) {
                                    var l = O(m.STAGING[t]);
                                    e.host = r.replace(b, l + "$1." + p)
                                }
                                return e
                            }(i, r.host) : i;
                        return r.pathname && (a.pathname = r.pathname), a.hash = r.hash || "", e.isRobotRequest() || (C(a.searchParams, n), C(a.searchParams, r.searchParams)), a
                    }
                }()(e)
            }
        },
        40841: function(e, t) {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var a = typeof n;
                            if ("string" === a || "number" === a) e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var o = i.apply(null, n);
                                o && e.push(o)
                            } else if ("object" === a)
                                for (var c in n) r.call(n, c) && n[c] && e.push(c)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                    return i
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        39649: function(e, t, n) {
            var r = n(8114).default;

            function i() {
                "use strict";
                e.exports = i = function() {
                    return t
                }, e.exports.__esModule = !0, e.exports.default = e.exports;
                var t = {},
                    n = Object.prototype,
                    a = n.hasOwnProperty,
                    o = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    c = "function" == typeof Symbol ? Symbol : {},
                    l = c.iterator || "@@iterator",
                    s = c.asyncIterator || "@@asyncIterator",
                    u = c.toStringTag || "@@toStringTag";

                function d(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    d({}, "")
                } catch (x) {
                    d = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function m(e, t, n, r) {
                    var i = t && t.prototype instanceof f ? t : f,
                        a = Object.create(i.prototype),
                        c = new S(r || []);
                    return o(a, "_invoke", {
                        value: O(e, n, c)
                    }), a
                }

                function p(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (x) {
                        return {
                            type: "throw",
                            arg: x
                        }
                    }
                }
                t.wrap = m;
                var v = {};

                function f() {}

                function _() {}

                function g() {}
                var h = {};
                d(h, l, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    E = b && b(b(A([])));
                E && E !== n && a.call(E, l) && (h = E);
                var y = g.prototype = f.prototype = Object.create(h);

                function k(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        d(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function C(e, t) {
                    function n(i, o, c, l) {
                        var s = p(e[i], e, o);
                        if ("throw" !== s.type) {
                            var u = s.arg,
                                d = u.value;
                            return d && "object" == r(d) && a.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                n("next", e, c, l)
                            }), (function(e) {
                                n("throw", e, c, l)
                            })) : t.resolve(d).then((function(e) {
                                u.value = e, c(u)
                            }), (function(e) {
                                return n("throw", e, c, l)
                            }))
                        }
                        l(s.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(e, r) {
                            function a() {
                                return new t((function(t, i) {
                                    n(e, r, t, i)
                                }))
                            }
                            return i = i ? i.then(a, a) : a()
                        }
                    })
                }

                function O(e, t, n) {
                    var r = "suspendedStart";
                    return function(i, a) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw a;
                            return R()
                        }
                        for (n.method = i, n.arg = a;;) {
                            var o = n.delegate;
                            if (o) {
                                var c = N(o, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var l = p(e, t, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? "completed" : "suspendedYield", l.arg === v) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function N(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, N(e, t), "throw" === t.method)) return v;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return v
                    }
                    var r = p(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, v;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, v) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, v)
                }

                function I(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function T(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function S(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(I, this), this.reset(!0)
                }

                function A(e) {
                    if (e) {
                        var t = e[l];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: R
                    }
                }

                function R() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return _.prototype = g, o(y, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = d(g, u, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, d(e, u, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, k(C.prototype), d(C.prototype, s, (function() {
                    return this
                })), t.AsyncIterator = C, t.async = function(e, n, r, i, a) {
                    void 0 === a && (a = Promise);
                    var o = new C(m(e, n, r, i), a);
                    return t.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, k(y), d(y, u, "Generator"), d(y, l, (function() {
                    return this
                })), d(y, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = A, S.prototype = {
                    constructor: S,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function n(n, r) {
                            return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = a.call(i, "catchLoc"),
                                    l = a.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), v
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    T(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), v
                    }
                }, t
            }
            e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        8114: function(e) {
            function t(n) {
                return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
            }
            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        72975: function(e, t, n) {
            var r = n(39649)();
            e.exports = r;
            try {
                regeneratorRuntime = r
            } catch (i) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
            }
        },
        8821: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        85169: function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            })
        },
        13613: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(66017);

            function i(e, t) {
                if (null == e) return {};
                var n, i, a = (0, r.Z)(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }
        },
        13736: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        21930: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(37017);
            var i = n(49139);

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, r.Z)(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || (0, i.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    }
]);
//# sourceMappingURL=https://s3-main-01.booking.com/internal-static/capla/static/js/323.7b1c1074.chunk.js.map