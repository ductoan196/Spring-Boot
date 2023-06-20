/*! For license information please see 93.fbca0145.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe"] = self["b-index-lp-web-mfe"] || []).push([
    [93], {
        59006: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return a
                }
            });
            var r = n(66022),
                i = n(82497),
                o = n(14222),
                a = function() {
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
                        var n = (0, o.E2)(e),
                            i = (0, o.mw)(t),
                            a = (0, o.mw)(n.type);
                        __DEV__ ? (0, r.kG)(n.type === t, "Running a " + i + " requires a graphql " + i + ", but a " + a + " was used instead.") : (0, r.kG)(n.type === t, 30)
                    }, e
                }()
        },
        13260: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return i
                }
            });
            var r = n(51099);

            function i(e, t) {
                return (0, r.r)(e, t, !1)
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
                o = n(82497),
                a = n(24605),
                c = n(6637),
                l = n(14222),
                u = function(e) {
                    function t(t) {
                        var n = t.options,
                            r = t.context,
                            i = t.onNewData,
                            o = e.call(this, n, r) || this;
                        return o.runLazy = !1, o.previous = Object.create(null), o.runLazyQuery = function(e) {
                            o.cleanup(), o.runLazy = !0, o.lazyOptions = e, o.onNewData()
                        }, o.obsRefetch = function(e) {
                            var t;
                            return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.refetch(e)
                        }, o.obsFetchMore = function(e) {
                            var t;
                            return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.fetchMore(e)
                        }, o.obsUpdateQuery = function(e) {
                            var t;
                            return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.updateQuery(e)
                        }, o.obsStartPolling = function(e) {
                            var t;
                            null === (t = o.currentObservable) || void 0 === t || t.startPolling(e)
                        }, o.obsStopPolling = function() {
                            var e;
                            null === (e = o.currentObservable) || void 0 === e || e.stopPolling()
                        }, o.obsSubscribeToMore = function(e) {
                            var t;
                            return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.subscribeToMore(e)
                        }, o.onNewData = i, o
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
                            o = this.refreshClient().client.disableNetworkFetches,
                            a = (0, r.pi)({
                                loading: !0,
                                networkStatus: c.I.loading,
                                called: !0,
                                data: void 0,
                                stale: !1,
                                client: this.client
                            }, this.observableQueryFields());
                        if (i && (this.ssrInitiated() || o)) return this.previous.result = a, a;
                        if (this.ssrInitiated()) {
                            var l = this.getExecuteResult() || a;
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
                            this.getOptions().skip ? this.previous.observableQueryOptions = e : (0, o.D)(e, this.previous.observableQueryOptions) || (this.previous.observableQueryOptions = e, this.currentObservable.setOptions(e).catch((function() {})))
                        } else this.initializeObservableQuery()
                    }, t.prototype.startQuerySubscription = function(e) {
                        var t = this;
                        void 0 === e && (e = this.onNewData), this.currentSubscription || this.getOptions().skip || (this.currentSubscription = this.currentObservable.subscribe({
                            next: function(n) {
                                var r = n.loading,
                                    i = n.networkStatus,
                                    a = n.data,
                                    c = t.previous.result;
                                c && c.loading === r && c.networkStatus === i && (0, o.D)(c.data, a) || e()
                            },
                            error: function(n) {
                                if (t.resubscribeToQuery(), !n.hasOwnProperty("graphQLErrors")) throw n;
                                var r = t.previous.result;
                                (r && r.loading || !(0, o.D)(n, t.previous.error)) && (t.previous.error = n, e())
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
                                o = n.loading,
                                l = n.partial,
                                u = n.networkStatus,
                                s = n.errors,
                                d = n.error;
                            if (s && s.length > 0 && (d = new a.c({
                                    graphQLErrors: s
                                })), e = (0, r.pi)((0, r.pi)({}, e), {
                                    data: i,
                                    loading: o,
                                    networkStatus: u,
                                    error: d,
                                    called: !0
                                }), o);
                            else if (d) Object.assign(e, {
                                data: (this.currentObservable.getLastResult() || {}).data
                            });
                            else {
                                var f = this.currentObservable.options.fetchPolicy;
                                if (t.partialRefetch && l && (!i || 0 === Object.keys(i).length) && "cache-only" !== f) return Object.assign(e, {
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
                                    a = i.query,
                                    c = i.variables,
                                    l = i.onCompleted,
                                    u = i.onError,
                                    s = i.skip;
                                if (this.previousOptions && !this.previous.loading && (0, o.D)(this.previousOptions.query, a) && (0, o.D)(this.previousOptions.variables, c)) return;
                                !l || r || s ? u && r && u(r) : l(t)
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
            var s = n(55261);

            function d(e, t, n) {
                void 0 === n && (n = !1);
                var a = (0, i.useContext)((0, s.K)()),
                    c = (0, i.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    l = c[0],
                    d = c[1],
                    f = t ? (0, r.pi)((0, r.pi)({}, t), {
                        query: e
                    }) : {
                        query: e
                    },
                    p = (0, i.useRef)(),
                    v = p.current || (p.current = new u({
                        options: f,
                        context: a,
                        onNewData: function() {
                            v.ssrInitiated() ? d() : Promise.resolve().then((function() {
                                return p.current && p.current.isMounted && d()
                            }))
                        }
                    }));
                v.setOptions(f), v.context = a;
                var m = function(e, t) {
                        var n = (0, i.useRef)();
                        return n.current && (0, o.D)(t, n.current.key) || (n.current = {
                            key: t,
                            value: e()
                        }), n.current.value
                    }((function() {
                        return n ? v.executeLazy() : v.execute()
                    }), {
                        options: (0, r.pi)((0, r.pi)({}, f), {
                            onError: void 0,
                            onCompleted: void 0
                        }),
                        context: a,
                        tick: l
                    }),
                    g = n ? m[1] : m;
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
                }), [g.loading, g.networkStatus, g.error, g.data, v.currentObservable]), m
            }
        },
        14222: function(e, t, n) {
            "use strict";
            n.d(t, {
                E2: function() {
                    return c
                },
                mw: function() {
                    return a
                },
                n_: function() {
                    return r
                }
            });
            var r, i = n(66022);
            ! function(e) {
                e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
            }(r || (r = {}));
            var o = new Map;

            function a(e) {
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
                var t, n, a = o.get(e);
                if (a) return a;
                __DEV__ ? (0, i.kG)(!!e && !!e.kind, "Argument of " + e + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, i.kG)(!!e && !!e.kind, 34);
                var c = e.definitions.filter((function(e) {
                        return "FragmentDefinition" === e.kind
                    })),
                    l = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "query" === e.operation
                    })),
                    u = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "mutation" === e.operation
                    })),
                    s = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "subscription" === e.operation
                    }));
                __DEV__ ? (0, i.kG)(!c.length || l.length || u.length || s.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, i.kG)(!c.length || l.length || u.length || s.length, 35), __DEV__ ? (0, i.kG)(l.length + u.length + s.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + e + " had " + l.length + " queries, " + s.length + " subscriptions and " + u.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(l.length + u.length + s.length <= 1, 36), n = l.length ? r.Query : r.Mutation, l.length || u.length || (n = r.Subscription);
                var d = l.length ? l : u.length ? u : s;
                __DEV__ ? (0, i.kG)(1 === d.length, "react-apollo only supports one definition per HOC. " + e + " had " + d.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(1 === d.length, 37);
                var f = d[0];
                t = f.variableDefinitions || [];
                var p = {
                    name: f.name && "Name" === f.name.kind ? f.name.value : "data",
                    type: n,
                    variables: t
                };
                return o.set(e, p), p
            }
        },
        79142: function(e, t, n) {
            "use strict";
            var r = n(8821),
                i = n(85169),
                o = n(72975),
                a = n.n(o);

            function c(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            l(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(e) {
                        try {
                            l(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, c)
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
                                return c(n, void 0, void 0, a().mark((function n() {
                                    var o, c;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 3, fetch(e, {
                                                    method: "GET",
                                                    headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                                    credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include"
                                                });
                                            case 3:
                                                return o = n.sent, n.next = 6, o.text();
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
                            return new Promise((function(t, o) {
                                return c(r, void 0, void 0, a().mark((function r() {
                                    var c, l;
                                    return a().wrap((function(r) {
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
                                                return r.prev = 10, r.t0 = r.catch(0), r.abrupt("return", o(r.t0));
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
                u = function() {
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
                            return c(this, void 0, void 0, a().mark((function t() {
                                return a().wrap((function(t) {
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
                            return c(this, void 0, void 0, a().mark((function r() {
                                return a().wrap((function(r) {
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
                s = new u,
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
                f = new(function() {
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
                            }(e), this.httpClient = s, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, s.init(this.c360Config)
                        }
                    }, {
                        key: "sendEvent",
                        value: function(e) {
                            return c(this, void 0, void 0, a().mark((function t() {
                                var n = this;
                                return a().wrap((function(t) {
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
            t.Z = f
        },
        11378: function(e, t, n) {
            "use strict";
            n.d(t, {
                Kg: function() {
                    return He
                },
                _N: function() {
                    return Ve
                },
                w7: function() {
                    return yn
                }
            });
            var r, i = n(47169),
                o = n(36655);

            function a(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
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
                var o, a = !0,
                    l = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        l = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var l = "no payload is provided as argument",
                u = "publisher argument is not provided",
                s = "event name argument is not provided",
                d = "arguments missing to attachHandler function",
                f = "error while trying to add event listener",
                p = "window object is not defined",
                v = "document object is not defined",
                m = "window and document objects are not defined",
                g = "window.dataLayer is not defined",
                _ = "payload wrong type, should be of type object",
                h = "payload failed validation",
                b = "publisher of unknown type",
                y = "default case in publisher switch reached, check type of publisher used.",
                E = "encountered error while publishing event",
                O = "skip publishing for no-op event",
                w = "encountered error while publishing to datalayer",
                k = "default processor function was selected",
                S = "unable to generate timestamp",
                C = "payload items array is empty or does not exist",
                I = "default switch case was triggered in getEventFromStore func",
                A = "unable to build property item payload",
                T = "unable to calculate difference between two dates",
                P = "unable to create partition date from date string",
                N = "no item present in search result incoming payload",
                L = "no propertyDetails payload in begin checkout processing func",
                R = "validation failed: payload property not found",
                x = "validation failed: payload property wrong type",
                D = "no payload to log in logger",
                j = "unable to initialize library",
                U = "default case was run in attachHandler function",
                F = "elem is null in attach handler",
                M = "current page is not searchresults, skipping searchresults handlers",
                H = "current page is not hotel (property), skipping hotel page handlers",
                V = "click on element that is not a gallery item",
                Z = "encountered error while handling photo click",
                G = "unable to track wishlish save, no dataset on element",
                B = "encountered error while saving to wishlist",
                K = "encountered error while submitting search change details on prop page",
                q = "encountered error while submitting add_to_cart event on prop page",
                z = "no window.booking object defined",
                Y = "no window.booking.env object defined",
                W = "window.booking is not ready or does not exit",
                X = "affiliate id value is not found in window.booking object",
                Q = "ufi id value is not found in window.booking object",
                J = "user_id value is not found in window.booking object",
                $ = "page action is not found in window.booking object",
                ee = "genius level is not found in window.booking object",
                te = "user logged in data is not found in window.booking object",
                ne = "user country is not found in window.booking object",
                re = "dest country is not found in window.booking object",
                ie = "destination name is not found in window.booking object",
                oe = "checkin date not found in window.booking.env object",
                ae = "checkout date not found in window.booking.env object",
                ce = "city name not found in window.booking.env object",
                le = "children number not found in window.booking.env object",
                ue = "adults number not found in window.booking.env object",
                se = "rooms number not found in window.booking.env object",
                de = "travel purpose not found in window.booking.env object",
                fe = "accommodation type id is not found",
                pe = "unable to read values from search prop payload",
                ve = "unable to read value of the current page name",
                me = "unable to read hotel class/stars rating from env",
                ge = "unable to read hotel id from env",
                _e = "unable to read rooms_available_and_soldout from env",
                he = "unable to read hotel room price and rate conditions on property page",
                be = "price was not found in env on checkout page",
                ye = "payment_by_booking value was not found on confirmation page",
                Ee = "property is not found in window booking env",
                Oe = "unable to create cache store for ga4 tracker in window.booking",
                we = "no key argument is supplied to store in cache",
                ke = "no key argument is supplied to read from cache",
                Se = "store is not ready and cannot be instantiated",
                Ce = "consent was not granted by the user",
                Ie = "b_feature_running_GA4_TRACKING_ON",
                Ae = "b_feature_running_GA4_TRACKING_LOG_ON",
                Te = "1",
                Pe = !1,
                Ne = !1;

            function Le() {
                return new URLSearchParams("undefined" === typeof window || null === window || "object" !== (0, o.Z)(window.location) ? "" : window.location.href)
            }

            function Re(e) {
                return Le().get(e)
            }

            function xe(e) {
                return Le().has(e)
            }

            function De() {
                ! function() {
                    if (Ne) return Pe;
                    if (!xe(Ie)) return Pe;
                    var e = Re(Ie);
                    Pe = e === Te
                }(), Ne = !0
            }
            var je = !!xe(Ae) && "1" === Re(Ae) || !1,
                Ue = "GA4_LOGGER: ";

            function Fe(e) {
                je && ("undefined" !== typeof e ? console.log("".concat(Ue).concat(e)) : Me(D))
            }

            function Me(e) {
                je && ("undefined" !== typeof e ? console.warn("".concat(Ue).concat(e)) : Me(D))
            }
            var He, Ve, Ze = "library init complete",
                Ge = "store init complete",
                Be = "handlers init complete",
                Ke = "_ga cookies are present",
                qe = "map_full_overlay__close",
                ze = "hp_address_subtitle",
                Ye = "bh-photo-grid",
                We = "bh-photo-grid-item",
                Xe = "wl-entrypoint",
                Qe = 'form[data-sb-id="main"]',
                Je = 'form[id="hprt-form"]',
                $e = "[data-total-price]",
                et = "[data-city-tax-value]",
                tt = "[data-vat-value]",
                nt = "[data-payment-method]";
            ! function(e) {
                e.NO_OP = "no_op_event", e.DEFAULT_EVENT_NAME = "55_qa_ready_default_event_name", e.FILTERS_APPLIED = "55_qa_ready_filters_applied", e.SORT_APPLIED = "55_qa_ready_sort_applied", e.SELECT_ITEM = "55_qa_ready_select_item", e.VIEW_ITEM_LIST = "55_qa_ready_view_item_list", e.PAGE_VIEW_INDEX = "55_qa_ready_page_view_index", e.PAGE_VIEW_SEARCH = "55_qa_ready_page_view_search", e.PAGE_VIEW_PROPERTY = "55_qa_ready_page_view_property", e.PAGE_VIEW_CHECKOUT = "55_qa_ready_page_view_checkout", e.PAGE_VIEW_CONFIRMATION = "55_qa_ready_page_view_confirmation", e.NAVIGATION_BAR_INTERACTION = "55_qa_ready_navigation_bar_interaction", e.SEARCH = "55_qa_ready_search", e.SEARCH_ERROR = "55_qa_ready_search_error", e.MAP_OPEN = "55_qa_ready_map_open", e.MAP_CLOSE = "55_qa_ready_map_close", e.VIEW_ITEM = "55_qa_ready_view_item", e.PHOTO_CLICK = "55_qa_ready_photo_click", e.REVIEWS_CLICK = "55_qa_ready_reviews_click", e.WISHLIST_SAVE = "55_qa_ready_wishlist_save", e.SOCIAL_SHARE = "55_qa_ready_social_share", e.SEARCH_CHANGE_DETAILS = "55_qa_ready_search_change_details", e.ADD_TO_CART = "55_qa_ready_add_to_cart", e.BEGIN_CHECKOUT = "55_qa_ready_begin_checkout", e.CHANGE_SELECTION_CHECKOUT = "55_qa_ready_change_selection_checkout_your_details", e.ADD_PAYMENT_INFO = "55_qa_ready_add_payment_info", e.PURCHASE = "55_qa_ready_purchase", e.CANCELLATION = "55_qa_ready_cancellation", e.NEWSLETTER_SIGN_UP = "55_qa_ready_newsletter_sign_up", e.APP_DOWNLOAD = "55_qa_ready_app_download", e.OPEN_APP = "55_qa_ready_open_app", e.PAGE_VIEW_CHECKOUT_PROPERTY_CARD = "internal_page_view_checkout_prop_card"
            }(He || (He = {})),
            function(e) {
                e.DATA_LAYER = "data_layer"
            }(Ve || (Ve = {}));
            var rt = [
                ["event", "string"],
                ["tsmp", "string"]
            ];
            var it, ot, at, ct, lt, ut = "ga4Cache";

            function st() {
                if ("undefined" === typeof window) return Me(p), !1;
                if ("undefined" === typeof window.booking) return Me(z), !1;
                if ("undefined" === typeof window.booking[ut] && !("undefined" === typeof window ? (Me(p), !1) : "undefined" === typeof window.booking ? (Me(z), !1) : ("undefined" === typeof window.booking[ut] && (window.booking[ut] = {}), !0))) return Me(Oe), !1;
                return !0
            }

            function dt(e, t) {
                if ("undefined" === typeof e) return Me(we), !1;
                if ("undefined" === typeof t) return Me(l), !1;
                if (!st()) return Me(Se), !1;
                try {
                    window.booking[ut][e] = t
                } catch (n) {
                    return Me("".concat(n)), !1
                }
                return !0
            }

            function ft(e) {
                return st() ? "undefined" === typeof e ? (Me(ke), {}) : window.booking[ut][e] : (Me(Se), {})
            }

            function pt(e) {
                if ("undefined" !== typeof window)
                    if ("undefined" !== typeof window.dataLayer) {
                        var t = function(e) {
                            var t = !0;
                            if ("undefined" === typeof e || null === e) return Me(l), !1;
                            if ("object" !== (0, o.Z)(e)) return Me(_), !1;
                            for (var n = 0; n < rt.length; n++) {
                                var r = rt[n][0],
                                    i = rt[n][1];
                                if (!e.hasOwnProperty(r)) {
                                    t = !1, Me(R);
                                    break
                                }
                                if ((0, o.Z)(e[r]) !== i) {
                                    t = !1, Me(x);
                                    break
                                }
                            }
                            return t
                        }(e);
                        if (t) try {
                            window.dataLayer.push(e), dt(e.event, e)
                        } catch (n) {
                            Me(n.toString()), Me(w)
                        } else Me(h)
                    } else Me(g);
                else Me(p)
            }

            function vt(e) {
                return "string" === typeof e || "number" === typeof e ? e < 10 ? "0".concat(e) : "".concat(e) : ""
            }

            function mt() {
                try {
                    return "".concat(Date.now())
                } catch (e) {
                    Me(S)
                }
                return "0"
            }

            function gt(e, t) {
                var n, r, i = 0;
                if ("undefined" === typeof e || null === e) return i;
                if ("undefined" === typeof t || null === t) return i;
                try {
                    n = "string" === typeof e ? new Date(e) : e, r = "string" === typeof t ? new Date(t) : t, i = Math.round((r - n) / 864e5)
                } catch (o) {
                    Me(o.toString()), Me(T)
                }
                return i
            }

            function _t(e) {
                var t, n;
                return "undefined" === typeof e || null === e ? (Me(P), "") : "string" === typeof e ? e.split("T")[0] : "object" === (0, o.Z)(e) && e instanceof Date ? (t = vt(e.getMonth() + 1), n = vt(e.getDate()), "".concat(e.getFullYear(), "-").concat(t, "-").concat(n)) : ""
            }

            function ht(e) {
                return "undefined" !== typeof e && null !== e
            }

            function bt(e) {
                var t = !1;
                return "undefined" === typeof e || null === e || "undefined" === typeof window || "undefined" === typeof window.location || new URL(window.location.href).pathname.indexOf(e) >= 0 && (t = !0), t
            }

            function yt(e) {
                var t, n = "";
                if (!ht(e)) return n;
                if ("undefined" === typeof window || "undefined" === typeof window.location) return n;
                try {
                    var r = new URL(window.location.href).searchParams.get(e);
                    if (null === r) return n;
                    n = r
                } catch (i) {
                    t = i.toString(), je && ("undefined" !== typeof t ? console.error("".concat(Ue).concat(t)) : Me(D))
                }
                return n
            }! function(e) {
                e.B_COM = "Booking.com"
            }(it || (it = {})),
            function(e) {
                e.STAYS = "stays", e.FLIGHTS = "flights", e.PACKAGES = "packages", e.CAR_RENTALS = "car_rentals", e.ATTRACTIONS = "attractions", e.AIRPORT_TAXI = "airport_taxi"
            }(ot || (ot = {})),
            function(e) {
                e.FLIGHTS = "/flights/", e.ATTRACTIONS = "/attractions/", e.CARS = "/cars/", e.AIRPORT_TAXI = "/taxi/"
            }(at || (at = {})),
            function(e) {
                e.INDEX = "index", e.SEARCH = "searchresults", e.PROPERTY = "hotel", e.CHECKOUT = "book", e.CONFIRMATION = "confirmation"
            }(ct || (ct = {})),
            function(e) {
                e[e.YOUR_SELECTION = 1] = "YOUR_SELECTION", e[e.YOUR_DETAILS = 2] = "YOUR_DETAILS", e[e.FINAL_STEP = 3] = "FINAL_STEP"
            }(lt || (lt = {}));
            var Et, Ot, wt = "booking",
                kt = "env",
                St = "utag_data";

            function Ct() {
                return "undefined" === typeof window ? (Me(p), !1) : "undefined" === typeof window[wt] ? (Me(z), !1) : "undefined" !== typeof window[wt][kt] || (Me(Y), !1)
            }

            function It() {
                var e = ["b_action"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(ve), t)
            }

            function At() {
                var e = ["aid", "b_aid"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : "undefined" !== typeof n[e[1]] ? t = n[e[1]] : (Me(X), t)
            }

            function Tt() {
                var e = ["b_ufi", "b_map_dest_id"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : "undefined" !== typeof n[e[1]] ? t = n[e[1]] : (Me(Q), t)
            }

            function Pt() {
                var e = ["b_acc_type"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(fe), t)
            }

            function Nt() {
                var e = ["b_user_genius_status"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                if ("undefined" !== typeof n[e[0]]) {
                    var r = n[e[0]].b_user_id;
                    return "undefined" !== typeof r && (t = "".concat(r)), t
                }
                return Me(J), t
            }

            function Lt() {
                var e = ["b_user_genius_status"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                if ("undefined" !== typeof n[e[0]]) {
                    var r = n[e[0]].b_is_genius;
                    return "undefined" !== typeof r && 1 === r && (t = "".concat(n[e[0]].b_genius_level)), t
                }
                return Me(ee), t
            }

            function Rt() {
                var e = ["b_action"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me($), t)
            }

            function xt() {
                var e = ["b_user_auth_level_is_low_or_high", "b_user_auth_level_is_none"],
                    t = "false";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? (1 === n[e[0]] && (t = "true"), t) : (Me(te), t)
            }

            function Dt() {
                var e = ["b_locale", "b_selected_language", "b_lang", "browser_lang"],
                    t = "";
                if (!Ct()) return Me(W), t;
                for (var n = window[wt][kt], r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ("undefined" !== typeof n[i] && n[i].length > 0) {
                        t = n[i];
                        break
                    }
                }
                return t
            }

            function jt() {
                var e = ["ip_country", "b_guest_country"],
                    t = "";
                if (!Ct()) return Me(W), t;
                for (var n = window[wt][kt], r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ("undefined" !== typeof n[i]) {
                        t = n[i];
                        break
                    }
                }
                return "" === t && Me(ne), t
            }

            function Ut() {
                var e = ["b_action"],
                    t = "";
                if (!Ct()) return Me(W), t;
                for (var n = window[wt][kt], r = 0; r < e.length; r++) {
                    var i = e[r];
                    if ("undefined" !== typeof n[i]) {
                        t = n[i];
                        break
                    }
                }
                return "index" === t ? ot.STAYS : "cars" === t ? ot.CAR_RENTALS : "taxi" === t ? ot.AIRPORT_TAXI : bt(at.FLIGHTS) ? ot.FLIGHTS : bt(at.ATTRACTIONS) ? ot.ATTRACTIONS : t
            }

            function Ft() {
                var e = ["b_destination_fullname", "b_hotel_name"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] && null !== n[e[0]] ? t = n[e[0]] : "undefined" !== typeof n[e[1]] && null !== n[e[1]] ? t = n[e[1]] : (Me(ie), t)
            }

            function Mt() {
                var e = ["b_occupancy"],
                    t = -1;
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]].adults : (Me(ue), t)
            }

            function Ht() {
                var e = ["b_occupancy"],
                    t = -1;
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]].children : (Me(le), t)
            }

            function Vt() {
                var e = ["b_urlcity", "city_name_en", "b_destination_fullname"],
                    t = "";
                if (!Ct()) return Me(W), t;
                for (var n = window[wt][kt], r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (ht(n[i]) && "" !== n[i]) {
                        t = n[i];
                        break
                    }
                }
                return "" === t && Me(ce), t
            }

            function Zt() {
                var e = ["b_countrycode"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(re), t)
            }

            function Gt() {
                var e = ["b_checkin_date"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(oe), t)
            }

            function Bt() {
                var e = ["b_checkout_date"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(ae), t)
            }

            function Kt() {
                var e = ["b_checkin_checkout_interval", "b_map_nights"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(ae), t)
            }

            function qt() {
                var e = ["b_search_config", "b_group_rooms_wanted"],
                    t = -1;
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]].b_nr_rooms_needed : "undefined" !== typeof n[e[1]] ? t = n[e[1]] : (Me(se), t)
            }

            function zt() {
                var e = ["fe_pers_purpose"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(de), t)
            }

            function Yt() {
                var e = ["b_hotel_class"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(me), t)
            }

            function Wt() {
                var e = ["b_hotel_id"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(ge), t)
            }

            function Xt() {
                var e, t = ["b_rooms_available_and_soldout"],
                    n = {
                        rate_conditions: [],
                        price: "-1"
                    };
                if (!Ct()) return Me(W), n;
                var r = window[wt][kt];
                if (!ht(r[t[0]])) return Me(_e), n;
                try {
                    if ((e = r[t[0]]).length && 0 === e.length) return Me(_e), n;
                    var i, o = e[0];
                    null !== o.b_has_room_inventory && o.b_has_room_inventory > 0 && null !== (i = o.b_blocks && o.b_blocks.length > 0 ? o.b_blocks[0] : null) && (n.price = i.b_raw_price, n.rate_conditions = ["".concat(i.b_cancellation_type), "".concat(i.b_mealplan_included_name)])
                } catch (a) {
                    Me(he)
                }
                return n
            }

            function Qt() {
                var e = ["b_alt_payment_user_amount"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(be), t)
            }

            function Jt(e) {
                var t = "";
                return "undefined" !== typeof window && null !== window && "undefined" !== typeof window[St] && null !== window[St] && ht(e) ? (ht(window[St][e]) && (t = window[St][e]), t) : t
            }

            function $t() {
                var e = ["fe_booknumber"],
                    t = "";
                if (!Ct()) return Me(W), t;
                var n = window[wt][kt];
                return "undefined" !== typeof n[e[0]] ? t = n[e[0]] : (Me(de), t)
            }

            function en() {
                var e = ["fe_c360_reservation_detail"];
                if (!Ct()) return Me(W), false;
                var t = window[wt][kt];
                return ht(t[e[0]]) ? 1 === t[e[0]].payment_by_booking : (Me(ye), false)
            }

            function tn(e) {
                var t = "";
                if (!Ct()) return Me(W), t;
                if (!ht(e)) return t;
                var n = window[wt][kt];
                return ht(n[e]) ? t = n[e] : (Me(Ee), t)
            }! function(e) {
                e.ACCOMMODATIONS = "accommodations", e.FLIGHTS = "flights", e.PACKAGES = "packages", e.CARS = "cars", e.ATTRACTIONS = "attractions", e.AIRPORT_TAXIS = "airport_taxis"
            }(Et || (Et = {})),
            function(e) {
                e.HOTEL = "hotel"
            }(Ot || (Ot = {}));
            var nn, rn, on = "value_not_set";

            function an() {
                return "undefined" !== typeof window && null !== window
            }

            function cn() {
                return "undefined" !== typeof document && null !== document
            }

            function ln() {
                var e = "";
                if (!an()) return Me(p), e;
                if (!cn()) return Me(v), e;
                try {
                    var t = document.getElementsByClassName(ze);
                    ht(t[0]) && (e = t[0].innerText)
                } catch (n) {
                    Me(n.toString())
                }
                return e
            }

            function un() {
                var e = 0;
                try {
                    [et, tt].map((function(t) {
                        var n = document.querySelector(t);
                        if (ht(n) && ht(n.dataset)) {
                            var r = t === et ? "cityTaxValue" : "vatValue";
                            if (ht(n.dataset[r])) {
                                var i = Number(n.dataset[r]);
                                i > 0 && (e += i)
                            }
                        }
                    }))
                } catch (t) {
                    Me(t.toString())
                }
                return "".concat(e)
            }

            function sn() {
                var e = 0;
                try {
                    [$e].map((function(t) {
                        var n = document.querySelector(t);
                        if (ht(n) && ht(n.dataset)) {
                            var r = "totalPrice";
                            if (ht(n.dataset[r])) {
                                var i = Number(n.dataset[r]);
                                i > 0 && (e += i)
                            }
                        }
                    }))
                } catch (t) {
                    Me(t.toString())
                }
                return "".concat(e)
            }

            function dn() {
                var e = "";
                try {
                    var t = document.querySelector(nt);
                    if (ht(t) && ht(t.dataset)) {
                        var n = "paymentMethod";
                        ht(t.dataset[n]) && (e = t.dataset[n])
                    }
                } catch (r) {
                    Me(r.toString())
                }
                return e
            }! function(e) {
                e.BUSINESS = "business", e.LEISURE = "leisure"
            }(nn || (nn = {})),
            function(e) {
                e.TRAVEL_PURPOSE = "sb_travel_purpose", e.CHECKOUT_INTERESTED_IN_TAXI = "interested_taxi", e.CHECKOUT_INTERESTED_IN_CAR = "interested_car_rentals"
            }(rn || (rn = {}));
            var fn = (r = {}, (0, i.Z)(r, He.DEFAULT_EVENT_NAME, vn), (0, i.Z)(r, He.FILTERS_APPLIED, (function(e) {
                return {
                    event: He.FILTERS_APPLIED,
                    tsmp: mt(),
                    filters: e,
                    sort_option: pn(He.SORT_APPLIED)
                }
            })), (0, i.Z)(r, He.SORT_APPLIED, (function(e) {
                return {
                    event: He.SORT_APPLIED,
                    sort_option: e,
                    tsmp: mt()
                }
            })), (0, i.Z)(r, He.SELECT_ITEM, (function(e) {
                var t = {};
                try {
                    t = function(e) {
                        var t = e.item,
                            n = e.index,
                            r = -1,
                            i = -1,
                            o = "",
                            a = "",
                            c = "",
                            l = "",
                            u = "",
                            s = "",
                            d = "",
                            f = "";
                        try {
                            if (r = ht(n) ? n : r, ht(t)) {
                                var p = t.displayName,
                                    v = t.basicPropertyData,
                                    m = t.location,
                                    g = t.priceDisplayInfo;
                                ht(p) && (o = p.text), ht(v) && (i = v.id, a = "".concat(v.accommodationTypeId), u = "".concat(v.ufi), ht(v.location) && (c = v.location.countryCode, l = v.location.city), ht(v.starRating) && (d = "".concat(v.starRating.value))), ht(m) && (s = m.displayLocation), ht(g) && (f = "".concat(g.displayPrice.amountPerStay.amountUnformatted))
                            } else Me(N)
                        } catch (_) {
                            Me(_.toString()), Me(pe)
                        }
                        return {
                            item_id: i,
                            item_name: o,
                            affiliation: At(),
                            index: r,
                            item_brand: a,
                            item_category: Et.ACCOMMODATIONS,
                            item_category2: c,
                            item_category3: l,
                            item_category4: u,
                            item_category5: Ot.HOTEL,
                            item_list_name: s,
                            item_variant: d,
                            price: f,
                            quantity: 1
                        }
                    }(e)
                } catch (n) {
                    Me(n.toString()), Me(A)
                }
                return {
                    event: He.SELECT_ITEM,
                    tsmp: mt(),
                    items: [t],
                    sort_option: pn(He.SORT_APPLIED),
                    filters: pn(He.FILTERS_APPLIED)
                }
            })), (0, i.Z)(r, He.VIEW_ITEM_LIST, (function(e) {
                var t = e.items,
                    n = e.sorters,
                    r = e.pagination,
                    i = e.searchMeta,
                    o = e.destinationFullName,
                    a = e.status;
                if (ht(a) && "complete" !== a) return {
                    event: He.NO_OP,
                    tsmp: mt()
                };
                var c = [],
                    l = -1,
                    u = -1;
                try {
                    "undefined" !== typeof t && t.length > 0 ? (l = "undefined" !== typeof i && null !== i ? i.destId : l, c = t.map((function(e, t) {
                        return function(e, t, n, r) {
                            var i = e.id,
                                o = e.header,
                                a = e.location,
                                c = e.countryCode,
                                l = e.availability,
                                u = e.accommodationTypeId,
                                s = "",
                                d = "",
                                f = "",
                                p = "",
                                v = "",
                                m = "";
                            try {
                                s = "undefined" !== typeof o && null !== o ? o.propertyName : s, d = "undefined" !== typeof a && null !== a ? a.address : d, f = "undefined" !== typeof n ? n : f, "undefined" !== typeof o && null !== o && "undefined" !== typeof o.rating && null !== o.rating && (p = "".concat(o.rating.value)), "undefined" !== typeof l.priceDisplayInfo && null !== l.priceDisplayInfo ? v = "number" === typeof(v = l.priceDisplayInfo.priceBreakdown.headlinePrice.userAmount.rawAmount) ? v.toFixed(2) : v : ("undefined" !== typeof l.rateInformation && null !== l.rateInformation && (v = (m = l.rateInformation.ratePrice).split(/\s/)[1]), "undefined" === typeof v && (v = m))
                            } catch (g) {
                                Me(g.toString()), Me(pe)
                            }
                            return {
                                item_id: i,
                                item_name: s,
                                affiliation: At(),
                                index: t,
                                item_brand: "".concat(u),
                                item_category: Et.ACCOMMODATIONS,
                                item_category2: c,
                                item_category3: r,
                                item_category4: "".concat(f),
                                item_category5: Ot.HOTEL,
                                item_list_name: d,
                                item_variant: p,
                                price: "".concat(v),
                                quantity: 1
                            }
                        }(e, t, l, o)
                    }))) : Me(C)
                } catch (d) {
                    Me(d.toString()), Me(A)
                }
                var s = n.find((function(e) {
                    return e.isSelected
                }));
                "undefined" !== typeof r && null !== r && (u = r.currentPageNumber ? r.currentPageNumber : u);
                return {
                    event: He.VIEW_ITEM_LIST,
                    tsmp: mt(),
                    items: c,
                    search_page_number: u,
                    sort_option: s ? s.value : "",
                    filters: pn(He.FILTERS_APPLIED)
                }
            })), (0, i.Z)(r, He.PAGE_VIEW_INDEX, (function() {
                return {
                    event: He.PAGE_VIEW_INDEX,
                    tsmp: mt(),
                    ai: At(),
                    action: Rt(),
                    ui: Nt(),
                    glev: Lt(),
                    logged_in: xt(),
                    language: Dt(),
                    user_location: jt(),
                    is_subscribed_to_newsletter: "false",
                    site_section: Ut()
                }
            })), (0, i.Z)(r, He.PAGE_VIEW_SEARCH, (function(e) {
                var t = yt(rn.TRAVEL_PURPOSE),
                    n = "" !== t ? t : zt(),
                    r = Gt(),
                    i = -1;
                ht(r) && "" !== r && (i = gt(new Date, r));
                var o = e.pagination,
                    a = -1,
                    c = -1;
                ht(o) && (a = o.nbAvailablePages, c = o.currentPageNumber);
                return {
                    event: He.PAGE_VIEW_SEARCH,
                    tsmp: mt(),
                    dest_name: Ft(),
                    adults: Mt(),
                    book_window: i,
                    children: Ht(),
                    city_name: Vt(),
                    country_name: Zt(),
                    date_in: r,
                    date_out: Bt(),
                    dest_cc: Zt(),
                    dest_ufi: Tt(),
                    nights: Kt(),
                    rooms: qt(),
                    travelling_for_work: n === nn.BUSINESS,
                    total_search_pages: a,
                    search_page_number: c
                }
            })), (0, i.Z)(r, He.PAGE_VIEW_PROPERTY, (function() {
                var e = Xt(),
                    t = -1,
                    n = Gt();
                ht(n) && "" !== n && (t = gt(new Date, n));
                return {
                    event: He.PAGE_VIEW_PROPERTY,
                    tsmp: mt(),
                    dest_name: Ft(),
                    adults: Mt(),
                    book_window: t,
                    children: Ht(),
                    city_name: Vt(),
                    country_name: Zt(),
                    date_in: Gt(),
                    date_out: Bt(),
                    dest_cc: Zt(),
                    dest_ufi: Tt(),
                    nights: Kt(),
                    rooms: qt(),
                    price: e.price,
                    rate_condition: e.rate_conditions
                }
            })), (0, i.Z)(r, He.PAGE_VIEW_CHECKOUT, (function() {
                var e = yt(rn.CHECKOUT_INTERESTED_IN_TAXI),
                    t = yt(rn.CHECKOUT_INTERESTED_IN_CAR);
                return {
                    event: He.PAGE_VIEW_CHECKOUT,
                    tsmp: mt(),
                    add_shuttle: e,
                    rent_car: t
                }
            })), (0, i.Z)(r, He.PAGE_VIEW_CONFIRMATION, (function() {
                if (Rt() !== ct.CONFIRMATION) return {
                    event: He.NO_OP,
                    tsmp: mt()
                };
                return {
                    event: He.PAGE_VIEW_CONFIRMATION,
                    tsmp: mt(),
                    payment_option: en() ? "payment_by_booking" : "",
                    payment_method: dn()
                }
            })), (0, i.Z)(r, He.NAVIGATION_BAR_INTERACTION, (function(e) {
                var t = e.navigation_element,
                    n = "undefined" !== typeof t ? t : on;
                return {
                    event: He.NAVIGATION_BAR_INTERACTION,
                    tsmp: mt(),
                    navigation_element: n
                }
            })), (0, i.Z)(r, He.SEARCH, mn), (0, i.Z)(r, He.SEARCH_ERROR, (function(e) {
                var t = "",
                    n = 0,
                    r = e.errors,
                    i = e.state;
                "undefined" !== typeof r && null !== r && (t = "object" === (0, o.Z)(r) ? Object.keys(r)[0] : r);
                if ("undefined" === typeof i || null === i) return {
                    event: He.SEARCH_ERROR,
                    tsmp: mt(),
                    error_type: t
                };
                var a = mn(e);
                return n = "undefined" !== typeof i.date && null !== i.date ? i.date.maxLOS : n, Object.assign(a, {
                    event: He.SEARCH_ERROR,
                    tsmp: mt(),
                    error_type: t,
                    max_length_of_stay: n
                })
            })), (0, i.Z)(r, He.MAP_OPEN, (function() {
                return {
                    event: He.MAP_OPEN,
                    tsmp: mt(),
                    display_method: "map"
                }
            })), (0, i.Z)(r, He.MAP_CLOSE, (function() {
                return {
                    event: He.MAP_CLOSE,
                    tsmp: mt(),
                    display_method: "map"
                }
            })), (0, i.Z)(r, He.VIEW_ITEM, (function() {
                var e = Xt();
                return {
                    event: He.VIEW_ITEM,
                    tsmp: mt(),
                    items: [{
                        item_id: Wt(),
                        item_name: Ft(),
                        affiliation: At(),
                        index: -1,
                        item_brand: Pt(),
                        item_category: Et.ACCOMMODATIONS,
                        item_category2: Zt(),
                        item_category3: Vt(),
                        item_category4: Tt(),
                        item_category5: Ot.HOTEL,
                        item_list_name: ln(),
                        item_variant: Yt(),
                        price: e.price,
                        quantity: 1
                    }]
                }
            })), (0, i.Z)(r, He.PHOTO_CLICK, (function() {
                return {
                    event: He.PHOTO_CLICK,
                    tsmp: mt()
                }
            })), (0, i.Z)(r, He.REVIEWS_CLICK, (function(e) {
                var t = e.raw,
                    n = e.formatted,
                    r = -1,
                    i = "-1";
                return i = ht(n) ? n.score : i, r = ht(t) ? t.count : r, {
                    event: He.REVIEWS_CLICK,
                    tsmp: mt(),
                    review_number: r,
                    review_score: i
                }
            })), (0, i.Z)(r, He.WISHLIST_SAVE, (function() {
                return {
                    event: He.WISHLIST_SAVE,
                    tsmp: mt()
                }
            })), (0, i.Z)(r, He.SOCIAL_SHARE, (function(e) {
                var t = e.channel;
                return {
                    event: He.SOCIAL_SHARE,
                    tsmp: mt(),
                    social_media_name: ht(t) ? (n = t, ht(n) ? "" === n ? "" : n.charAt(0).toUpperCase() + n.slice(1) : "") : ""
                };
                var n
            })), (0, i.Z)(r, He.SEARCH_CHANGE_DETAILS, (function(e) {
                var t, n, r, i, o, a, c, l = e.checkin_year,
                    u = e.checkin_month,
                    s = e.checkin_monthday,
                    d = e.checkout_year,
                    f = e.checkout_monthday,
                    p = e.checkout_month,
                    v = e.group_adults,
                    m = e.group_children,
                    g = e.no_rooms,
                    _ = "",
                    h = "",
                    b = "",
                    y = "",
                    E = -1;
                try {
                    h = "" !== (_ = yt(rn.TRAVEL_PURPOSE)) ? _ : zt(), t = vt(u), n = vt(p), r = vt(s), i = vt(f), b = "".concat(l, "-").concat(t, "-").concat(r), y = "".concat(d, "-").concat(n, "-").concat(i), o = "".concat(b, "T00:00:00"), a = "".concat(y, "T00:00:00"), E = gt(c = Date.parse(o), Date.parse(a))
                } catch (O) {
                    Me(O.toString())
                }
                return {
                    event: He.SEARCH_CHANGE_DETAILS,
                    tsmp: mt(),
                    dest_name: Ft(),
                    adults: v,
                    book_window: gt(new Date, c),
                    children: m,
                    city_name: Vt(),
                    country_name: Zt(),
                    date_in: b,
                    date_out: y,
                    dest_cc: Zt(),
                    dest_ufi: Tt(),
                    nights: E,
                    rooms: g,
                    travelling_for_work: h
                }
            })), (0, i.Z)(r, He.ADD_TO_CART, (function(e) {
                var t = e.rt_pos_final,
                    n = e.rt_pos_selected,
                    r = -1,
                    i = 0;
                if (ht(n)) try {
                    r = n.split("_").length, t.split(",").map((function(e) {
                        i += parseFloat(function(e) {
                            var t, n = ["b_rooms_available_and_soldout"],
                                r = "-1";
                            if (!ht(e) || "" === e) return r;
                            if (!Ct()) return Me(W), r;
                            var i = window[wt][kt];
                            if (!ht(i[n[0]])) return Me(_e), r;
                            try {
                                if ((t = i[n[0]]).length && 0 === t.length) return Me(_e), r;
                                var o = e.split(".").map((function(e) {
                                        return e - 1
                                    })),
                                    a = t[o[0]].b_blocks[o[1]];
                                ht(a) && (r = a.b_raw_price)
                            } catch (c) {
                                Me(he)
                            }
                            return r
                        }(e))
                    })), i = i.toFixed(2)
                } catch (o) {
                    Me(q), Me(o.toString)
                }
                return {
                    event: He.ADD_TO_CART,
                    tsmp: mt(),
                    items: [{
                        item_id: Wt(),
                        item_name: Ft(),
                        affiliation: At(),
                        index: -1,
                        item_brand: Pt(),
                        item_category: Et.ACCOMMODATIONS,
                        item_category2: Zt(),
                        item_category3: Vt(),
                        item_category4: Tt(),
                        item_category5: Ot.HOTEL,
                        item_list_name: ln(),
                        item_variant: Yt(),
                        price: i,
                        quantity: r
                    }]
                }
            })), (0, i.Z)(r, He.BEGIN_CHECKOUT, (function(e) {
                var t = e.propertyDetails;
                if (!ht(t)) return Me(L), {
                    event: He.NO_OP,
                    tsmp: mt()
                };
                var n = t.id,
                    r = t.name,
                    i = t.location,
                    o = t.accommodationType,
                    a = t.starRating;
                return {
                    event: He.BEGIN_CHECKOUT,
                    tsmp: mt(),
                    items: [{
                        item_id: n,
                        item_name: r,
                        affiliation: At(),
                        index: -1,
                        item_brand: (null === o || void 0 === o ? void 0 : o.id) || "",
                        item_category: Et.ACCOMMODATIONS,
                        item_category2: null === i || void 0 === i ? void 0 : i.countryCode,
                        item_category3: Vt(),
                        item_category4: Tt(),
                        item_category5: (null === o || void 0 === o ? void 0 : o.type) || "",
                        item_list_name: (null === i || void 0 === i ? void 0 : i.formattedAddress) || "",
                        item_variant: (null === a || void 0 === a ? void 0 : a.value) || "",
                        price: Qt(),
                        quantity: 1
                    }]
                }
            })), (0, i.Z)(r, He.CHANGE_SELECTION_CHECKOUT, (function() {
                return {
                    event: He.CHANGE_SELECTION_CHECKOUT,
                    tsmp: mt()
                }
            })), (0, i.Z)(r, He.ADD_PAYMENT_INFO, (function() {
                return {
                    event: He.ADD_PAYMENT_INFO,
                    tsmp: mt()
                }
            })), (0, i.Z)(r, He.PURCHASE, (function() {
                var e = At();
                return {
                    event: He.PURCHASE,
                    tsmp: mt(),
                    rid: $t() || Jt("rid"),
                    ttv: Jt("ttv") || tn("fe_trans_total_price_euro"),
                    ai: e,
                    tax: un() || "-1",
                    items: [{
                        item_id: Wt(),
                        item_name: Ft(),
                        affiliation: e,
                        index: -1,
                        item_brand: Pt(),
                        item_category: Et.ACCOMMODATIONS,
                        item_category2: Zt(),
                        item_category3: Vt(),
                        item_category4: Tt(),
                        item_category5: Ot.HOTEL,
                        item_list_name: Jt("destination_name"),
                        item_variant: "-1",
                        price: sn() || tn("fe_trans_total_price_euro"),
                        quantity: 1
                    }]
                }
            })), (0, i.Z)(r, He.CANCELLATION, (function() {
                return {
                    event: He.CANCELLATION,
                    tsmp: mt(),
                    cancellation_hotel_name: Jt("hotel_name") || Wt(),
                    cancellation_dest_name: Vt() || Jt("city_name")
                }
            })), (0, i.Z)(r, He.NEWSLETTER_SIGN_UP, (function() {
                return {
                    event: He.NEWSLETTER_SIGN_UP,
                    tsmp: mt(),
                    is_subscribed_to_newsletter: Jt("is_subscribed_to_newsletter")
                }
            })), (0, i.Z)(r, He.APP_DOWNLOAD, (function() {
                return {
                    event: He.APP_DOWNLOAD,
                    tsmp: mt()
                }
            })), (0, i.Z)(r, He.OPEN_APP, (function() {
                return {
                    event: He.OPEN_APP,
                    tsmp: mt()
                }
            })), (0, i.Z)(r, He.PAGE_VIEW_CHECKOUT_PROPERTY_CARD, (function(e) {
                ht(e) && dt(He.PAGE_VIEW_CHECKOUT_PROPERTY_CARD, e);
                return {
                    event: He.NO_OP,
                    tsmp: mt()
                }
            })), r);

            function pn(e) {
                var t = {};
                switch (e) {
                    case He.SORT_APPLIED:
                        var n = ft(He.SORT_APPLIED);
                        t = n ? n.sort_option : {};
                        break;
                    case He.FILTERS_APPLIED:
                        var r = ft(He.FILTERS_APPLIED);
                        t = r ? r.filters : {};
                        break;
                    case He.PAGE_VIEW_INDEX:
                        t = ft(He.PAGE_VIEW_INDEX);
                        break;
                    default:
                        return Me(I), t
                }
                return "undefined" === typeof t && (t = {}), t
            }

            function vn(e) {
                return Me(k), {
                    event: He.DEFAULT_EVENT_NAME,
                    tsmp: mt(),
                    payloadAsString: "undefined" === typeof e ? l : JSON.stringify(e)
                }
            }

            function mn(e) {
                var t = e.state;
                if ("undefined" === typeof t || null === t) return {
                    event: He.SEARCH,
                    tsmp: mt()
                };
                var n, r, i, o, a = t.destination,
                    c = t.occupancy,
                    l = t.date,
                    u = t.travelPurpose,
                    s = "",
                    d = "",
                    f = 0,
                    p = 0,
                    v = 0,
                    m = "",
                    g = "";
                return ht(l) && (s = ht(l.start) ? l.start.date : s, d = ht(l.end) ? l.end.date : d), ht(c) && (f = "undefined" !== typeof c.adults && null !== c.adults ? c.adults.value : f, p = "undefined" !== typeof c.kids && null !== c.kids ? c.kids.value : p, v = "undefined" !== typeof c.rooms && null !== c.rooms ? c.rooms.value : v), ht(u) && (m = u.checked), ht(a) && (g = "undefined" !== typeof a.option && null !== a.option ? a.option.destId : g), n = gt(s, d), r = gt(new Date, s), i = _t(s), o = _t(d), {
                    event: He.SEARCH,
                    tsmp: mt(),
                    search_term: a.value,
                    adults: f,
                    book_window: r,
                    children: p,
                    city_name: a.value,
                    country_name: Zt(),
                    date_in: i,
                    date_out: o,
                    dest_cc: Zt(),
                    dest_ufi: g,
                    nights: n,
                    rooms: v,
                    travelling_for_work: m
                }
            }
            var gn, _n, hn = "_ga";

            function bn() {
                if (!an() || !cn()) return !1;
                try {
                    return function() {
                        if (!an() || !cn()) return !1;
                        if (!ht(document.cookie)) return !1;
                        var e = !1;
                        try {
                            document.cookie.split("; ").find((function(e) {
                                return e.startsWith(hn)
                            })) && (e = !0)
                        } catch (t) {
                            Me(t.toString())
                        }
                        return Fe("".concat(Ke, ": ").concat(e)), e
                    }()
                } catch (e) {
                    Me(e.toString())
                }
                return !1
            }

            function yn(e, t, n) {
                if (bn())
                    if ("undefined" !== typeof e)
                        if ("undefined" !== typeof t)
                            if ("undefined" !== typeof n) try {
                                var r = function(e) {
                                    return "undefined" !== typeof fn[e] ? fn[e] : vn
                                }(t);
                                ! function(e, t) {
                                    "undefined" !== typeof e && null !== e ? "undefined" !== typeof t ? t.event !== He.NO_OP ? e === Ve.DATA_LAYER ? pt(t) : Me(y) : Fe(O) : Me(l) : Me(b)
                                }(e, r(n))
                            } catch (i) {
                                Me(i.toString()), Me(E)
                            } else Me(l);
                            else Me(s);
                else Me(u)
            }

            function En(e, t, n, r) {
                var i = null;
                if (an() && cn())
                    if (ht(e))
                        if (ht(t))
                            if (ht(n))
                                if (ht(r)) {
                                    switch (e) {
                                        case gn.CLASS:
                                            var o = document.getElementsByClassName(t);
                                            i = ht(o[0]) ? o[0] : i;
                                            break;
                                        case gn.ID:
                                            i = document.getElementById(t);
                                            break;
                                        case gn.ATTRIBUTE:
                                            i = document.querySelector(t);
                                            break;
                                        default:
                                            Me(U)
                                    }
                                    if ("undefined" !== typeof i && null !== i) try {
                                        i.removeEventListener(n, r), i.addEventListener(n, r)
                                    } catch (a) {
                                        Me(a.toString()), Me(f)
                                    } else Me(F)
                                } else Me("".concat(d, ": handler func"));
                else Me("".concat(d, ": handler func type"));
                else Me("".concat(d, ": element identifier"));
                else Me("".concat(d, ": element identifier type"));
                else Me(m)
            }

            function On() {
                It() === ct.SEARCH ? En(gn.CLASS, qe, _n.CLICK, (function() {
                    yn(Ve.DATA_LAYER, He.MAP_CLOSE, {})
                })) : Fe(M)
            }

            function wn() {
                It() === ct.PROPERTY ? (En(gn.CLASS, Ye, _n.CLICK, (function(e) {
                    try {
                        var t = e.target;
                        if (ht(t)) {
                            var n = t;
                            n.classList && n.classList.contains(We) ? yn(Ve.DATA_LAYER, He.PHOTO_CLICK, {}) : Fe(V)
                        }
                    } catch (e) {
                        Me(Z), Me(e.toString())
                    }
                })), En(gn.CLASS, Xe, _n.CLICK, (function(e) {
                    try {
                        var t = e.target;
                        if (ht(t)) {
                            var n = t;
                            ht(n.dataset) ? !ht(n.dataset.wlHotelSaved) || "false" !== n.dataset.wlHotelSaved && "0" !== n.dataset.wlHotelSaved || yn(Ve.DATA_LAYER, He.WISHLIST_SAVE, {}) : Fe(G)
                        }
                    } catch (e) {
                        Me(B), Me(e.toString())
                    }
                })), En(gn.ATTRIBUTE, Qe, _n.SUBMIT, (function(e) {
                    var t, n, r = e.target;
                    if (ht(r)) try {
                        t = new FormData(r), n = Object.fromEntries(t), yn(Ve.DATA_LAYER, He.SEARCH_CHANGE_DETAILS, n)
                    } catch (e) {
                        Me(K), Me(e.toString())
                    }
                })), En(gn.ATTRIBUTE, Je, _n.SUBMIT, (function(e) {
                    var t, n, r = e.target;
                    if (ht(r)) try {
                        t = new FormData(r), n = Object.fromEntries(t), yn(Ve.DATA_LAYER, He.ADD_TO_CART, n)
                    } catch (e) {
                        Me(q), Me(e.toString())
                    }
                }))) : Fe(H)
            }

            function kn() {
                if (st()) {
                    var e, t = a(Object.keys(fn));
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            dt(e.value, {})
                        }
                    } catch (n) {
                        t.e(n)
                    } finally {
                        t.f()
                    }
                    Fe(Ge)
                } else Me(Se)
            }! function(e) {
                e.CLASS = "class", e.ID = "id", e.ATTRIBUTE = "attribute"
            }(gn || (gn = {})),
            function(e) {
                e.CLICK = "click", e.SUBMIT = "submit"
            }(_n || (_n = {})),
            function() {
                try {
                    if (De(), !bn()) return void Fe(Ce);
                    kn(), an() && cn() ? (On(), wn(), Fe(Be)) : Me(m), Fe(Ze)
                } catch (e) {
                    Me(e.toString()), Me(j)
                }
            }()
        },
        20720: function(e, t, n) {
            "use strict";
            var r, i, o, a;
            n.d(t, {
                    Eb: function() {
                        return o
                    },
                    jv: function() {
                        return i
                    }
                }),
                function(e) {
                    e.AIRPORT = "AIRPORT", e.BOUNDING_BOX = "BOUNDING_BOX", e.CHAIN = "CHAIN", e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.DISTRICT = "DISTRICT", e.HOTEL = "HOTEL", e.IATA = "IATA", e.LANDMARK = "LANDMARK", e.LATLONG = "LATLONG", e.NO_DEST_TYPE = "NO_DEST_TYPE", e.REGION = "REGION", e.SUB_REGION = "SUB_REGION", e.UNRECOGNIZED = "UNRECOGNIZED"
                }(r || (r = {})),
                function(e) {
                    e.GLOBAL_EVENT = "GLOBAL_EVENT", e.REGIONAL_EVENT = "REGIONAL_EVENT"
                }(i || (i = {})),
                function(e) {
                    e.DISRUPTIVE = "DISRUPTIVE", e.NORMAL = "NORMAL"
                }(o || (o = {})),
                function(e) {
                    e.ACCOMMODATIONS = "ACCOMMODATIONS", e.AIRPORT_TAXIS = "AIRPORT_TAXIS", e.ATTRACTIONS = "ATTRACTIONS", e.CARS = "CARS", e.FLIGHTS = "FLIGHTS", e.PACKAGES = "PACKAGES"
                }(a || (a = {}))
        },
        72197: function(e, t, n) {
            "use strict";
            n.d(t, {
                CK: function() {
                    return A
                },
                Gc: function() {
                    return I
                },
                H: function() {
                    return C
                },
                SQ: function() {
                    return P
                },
                Us: function() {
                    return g
                },
                Vh: function() {
                    return y
                },
                fv: function() {
                    return N
                },
                gM: function() {
                    return h
                },
                hL: function() {
                    return k
                },
                mk: function() {
                    return S
                },
                w0: function() {
                    return T
                },
                yo: function() {
                    return _
                }
            });
            var r, i = n(47169),
                o = n(79142),
                a = n(62691),
                c = n(75928),
                l = n(87703),
                u = n(2446),
                s = n(79399),
                d = n(33782),
                f = n(20720);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m, g, _, h;
            ! function(e) {
                e[e["Suggested for you"] = 0] = "Suggested for you", e[e.All = 1] = "All"
            }(m || (m = {})),
            function(e) {
                e.Vertical = "vertical", e.Other = "other action", e.Option = "option in other action"
            }(g || (g = {})),
            function(e) {
                e.Currency = "Select your currency", e.Language = "Select your language", e.Logo = "Logo", e.CS = "Contact Customer Service", e.Profile = "Profile Menu", e.Social = "Follow Us on Wechat", e.ListProperty = "List Your Property", e.Notification = "Notification", e.SignIn = "Sign In", e.SignUp = "Sign Up"
            }(_ || (_ = {})),
            function(e) {
                e.Expand = "Expand", e.Collapse = "Collapse", e.CTA = "CTA"
            }(h || (h = {}));
            var b = (r = {}, (0, i.Z)(r, l.KC.HEADER, {
                    component_served: "2.0.0",
                    component_action_clicked: "1.0.0",
                    component_scrolled: "1.0.0"
                }), (0, i.Z)(r, l.KC.FOOTER, {}), (0, i.Z)(r, l.KC.GLOBAL_ALERT, {
                    component_served: "2.0.0",
                    component_viewed: "2.0.0",
                    component_action_clicked: "2.0.0"
                }), r),
                y = function() {
                    var e = (0, u.B)(),
                        t = e.siteType,
                        n = e.language,
                        r = e.currency,
                        i = e.affiliate,
                        a = e.pageviewId,
                        c = (0, s.T)(),
                        l = {
                            aid: String(null === i || void 0 === i ? void 0 : i.id),
                            pageviewId: a,
                            platform: t,
                            lang: n,
                            currency: r,
                            isDev: (0, d.Vo)(c)
                        };
                    l.isDev && console.log("[web-shell] C360 is initialized using config: ", l), o.Z.init(l)
                },
                E = function(e, t) {
                    var n = e.toLocaleLowerCase();
                    return {
                        action_name: "".concat("webcoreux", ".").concat(n, "_").concat(t),
                        action_version: b[e][t]
                    }
                },
                O = function(e, t) {
                    return e.reduce((function(e, n, r) {
                        return e.push({
                            item_type: n.id,
                            item_position: r + 1,
                            is_item_preselected: +(n.id === t)
                        }), e
                    }), [])
                },
                w = function(e, t) {
                    var n = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.KC.HEADER;
                        return {
                            served: E(e, "component_served"),
                            viewed: E(e, "component_viewed"),
                            clicked: E(e, "component_action_clicked"),
                            scrolled: E(e, "component_scrolled")
                        }
                    }(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.KC.HEADER)[e];
                    return v(v({}, n), {}, {
                        content: t
                    })
                },
                k = function(e, t, n, r, i, l) {
                    var u = function() {
                            var e, t = (0, a.Sj)(),
                                n = t.isLarge,
                                r = t.isMedium;
                            switch (!0) {
                                case !0 === n:
                                    e = "large";
                                    break;
                                case !0 === r:
                                    e = "medium";
                                    break;
                                default:
                                    e = "small"
                            }
                            return e
                        }(),
                        d = [];
                    i && d.push({
                        action_type: "currency",
                        option_text: i
                    }), l && d.push({
                        action_type: "language",
                        option_text: l
                    }), (0, c.Z)((function() {
                        var i = (0, s.T)().getAffiliate() || {},
                            a = i.id,
                            c = i.label;
                        o.Z.sendEvent(w("served", {
                            product_verticals_loaded: O(e, t),
                            product_vertical_selected: t,
                            headertype: n,
                            viewport: u,
                            option_preselected: d,
                            is_loggedin: Number(Boolean(r)),
                            aid: String(null !== a && void 0 !== a ? a : 0),
                            label: c,
                            genius_level: String(null !== r && void 0 !== r ? r : 0)
                        }))
                    }), [])
                },
                S = function(e, t) {
                    var n = {
                        clicked_text_copy_tag: t
                    };
                    o.Z.sendEvent(w("clicked", v({
                        action_type: e
                    }, n)))
                },
                C = function(e, t, n) {
                    var r = {
                        clicked_text_copy_tag: t
                    };
                    n && Object.assign(r, {
                        action_text_copy_tag: n.option_name,
                        option_category: m[n.option_index]
                    }), o.Z.sendEvent(w("clicked", v({
                        action_type: e
                    }, r)))
                },
                I = function() {
                    var e = function(e) {
                        var t, n = [];
                        return function(r) {
                            clearTimeout(t), n.push(r), t = setTimeout((function() {
                                o.Z.sendEvent(w("scrolled", {
                                    product_verticals_seen: n
                                })), n = []
                            }), e)
                        }
                    }(300);
                    (0, l.OR)(l.FP.TAB_EXPOSED, (function(t) {
                        var n = t.detail.id;
                        n && e(n)
                    }))
                },
                A = function() {
                    return (0, l.OR)(l.FP.SOCIAL_ENTRY_CLICKED, (function() {
                        C(g.Other, _.Social)
                    }))
                },
                T = function(e, t) {
                    (0, c.Z)((function() {
                        o.Z.sendEvent(w("served", {
                            global_alert_card: null === t || void 0 === t ? void 0 : t.map((function(e) {
                                return {
                                    campaign_id: e.id,
                                    category: e.category === f.jv.GLOBAL_EVENT ? "Global" : "Regional",
                                    expanded: e.expanded,
                                    theme: "normal" === e.severity ? "Normal" : "Callout"
                                }
                            })),
                            page_region: e,
                            vertical: "ABU"
                        }, l.KC.GLOBAL_ALERT))
                    }), [])
                },
                P = function(e) {
                    o.Z.sendEvent(w("viewed", {
                        campaign_id: e
                    }, l.KC.GLOBAL_ALERT))
                },
                N = function(e, t, n) {
                    o.Z.sendEvent(w("clicked", {
                        campaign_id: t,
                        action: v({
                            type: e
                        }, n)
                    }, l.KC.GLOBAL_ALERT))
                }
        },
        17345: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return i
                }
            });
            var r = n(33782),
                i = function(e, t) {
                    return (0, r.H0)(e) ? {
                        "X-Booking-Timeout-Ms": t,
                        "X-Envoy-Expected-Rq-Timeout-Ms": t
                    } : {}
                }
        },
        33782: function(e, t, n) {
            "use strict";
            n.d(t, {
                H0: function() {
                    return r
                },
                Vo: function() {
                    return i
                }
            });
            var r = function(e) {
                    return "prod" === e.getBPlatformEnvironment()
                },
                i = function(e) {
                    return !r(e)
                }
        },
        99236: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return r
                }
            });
            var r = function(e) {
                return !!e
            }
        },
        23673: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return a
                }
            });
            var r = n(32735),
                i = n(2419),
                o = n(93354);

            function a(e) {
                var t = e.experimentTag,
                    n = e.tag,
                    a = e.stage,
                    c = e.customGoal,
                    l = e.goalName,
                    u = e.value,
                    s = (0, i.YD)({
                        threshold: 0,
                        triggerOnce: !0
                    }),
                    d = s[0],
                    f = s[1],
                    p = n || t;
                return (0, r.useEffect)((function() {
                    if (f) {
                        if (p) {
                            if (a) return void(0, o.ti)(p, a);
                            if (c) return void(0, o.pj)(p, c)
                        } else if (l) return u ? void(0, o.uf)(l, u) : void(0, o.r9)(l);
                        0
                    }
                }), [f]), r.createElement("div", {
                    ref: d
                })
            }
        },
        6959: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return i
                }
            });
            var r = n(12958),
                i = n.n(r)()
        },
        66049: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = function(e) {
                this.name = e
            };

            function i(e) {
                var t;
                return t = Array.isArray(e) ? e[0] : "object" === typeof e && Array.isArray(e.raw) ? e.raw[0] : e, new r(t)
            }
        },
        26662: function(e, t, n) {
            "use strict";

            function r(e) {
                return window.__caplaChunkMetadataStore.isFeatureRunning(e.name)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        2446: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return i
                }
            });
            var r = n(79399);

            function i() {
                var e = (0, r.T)();
                return {
                    get acceptHeader() {
                        return e.getAcceptHeader()
                    },
                    get actionName() {
                        return e.getActionName()
                    },
                    get affiliate() {
                        return e.getAffiliate()
                    },
                    get basePageUrl() {
                        return e.getBasePageUrl()
                    },
                    get body() {
                        return e.getBody()
                    },
                    get bPlatformEnvironment() {
                        return e.getBPlatformEnvironment()
                    },
                    get CDNOrigin() {
                        return e.getCDNOrigin()
                    },
                    get CSPNonce() {
                        return e.getCSPNonce()
                    },
                    get CSRFToken() {
                        return e.getCSRFToken()
                    },
                    get currency() {
                        return e.getCurrency()
                    },
                    get encryptedCommonOauthState() {
                        return e.getEncryptedCommonOauthState()
                    },
                    get ETSerializedState() {
                        return e.getETSerializedState()
                    },
                    get isInternalIp() {
                        return e.isInternalIp()
                    },
                    get isInternalUser() {
                        return e.isInternalUser()
                    },
                    get isLanding() {
                        return e.isLanding()
                    },
                    get isNormalRequest() {
                        return e.isNormalRequest()
                    },
                    get isRobotRequest() {
                        return e.isRobotRequest()
                    },
                    get language() {
                        return e.getLanguage()
                    },
                    get pageviewId() {
                        return e.getPageviewId()
                    },
                    get partnerIdentity() {
                        return e.getPartnerIdentity()
                    },
                    get publicPath() {
                        return e.getPublicPath()
                    },
                    get sessions() {
                        return e.getSessions()
                    },
                    get siteId() {
                        return e.getSiteId()
                    },
                    get siteType() {
                        return e.getSiteType()
                    },
                    get staffIdentity() {
                        return e.getStaffIdentity()
                    },
                    get userAgent() {
                        return e.getUserAgent()
                    },
                    get userIdentity() {
                        return e.getUserIdentity()
                    },
                    get visitorCountry() {
                        return e.getVisitorCountry()
                    },
                    get visitorCountryRegion() {
                        return e.getVisitorCountryRegion()
                    },
                    get visitorIP() {
                        return e.getVisitorIP()
                    },
                    get visitorUfi() {
                        return e.getVisitorUfi()
                    }
                }
            }
        },
        80827: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return S
                }
            });
            var r, i, o = n(79399),
                a = n(98178);
            ! function(e) {
                e.admin = "admin", e.app = "app", e.book = "book", e.join = "join"
            }(r || (r = {}));
            var c, l, u, s, d = ((i = {
                    DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
                })[a.N.EXTRANET] = ["hotel_id", "lang", "ses"], i),
                f = {
                    PRODUCTION: (c = {}, c[r.admin] = "admin", c[r.app] = "www", c[r.book] = "secure", c[r.join] = "join", c),
                    STAGING: (l = {}, l[r.admin] = "a", l[r.app] = "w", l[r.book] = "b", l[r.join] = "j", l),
                    KVM: (u = {}, u[r.admin] = ["adm", "devadmin"], u[r.app] = ["app", "devapp"], u[r.book] = ["book", "devbook"], u[r.join] = ["joinapp", "devjoinapp"], u),
                    DQS: (s = {}, s[r.admin] = "admin", s[r.app] = "app", s[r.book] = "book", s[r.join] = "join", s)
                },
                p = "booking.com",
                v = O(f.PRODUCTION),
                m = O(f.STAGING),
                g = O(f.KVM),
                _ = O(f.DQS),
                h = new RegExp("^(.*?)\\.?(" + p + "|booking.cn)$"),
                b = new RegExp("^(?:" + m.join("|") + ")(\\d+)$"),
                y = new RegExp("^(\\w+)-(" + g.join("|") + ").*?\\.dev$"),
                E = new RegExp("(?:" + _.join("|") + ")\\.dqs$");

            function O(e) {
                return Object.values(e).flat()
            }

            function w(e, t) {
                var n = new Set;
                null == t || t.forEach((function(t, r) {
                    n.has(r) ? e.append(r, t) : (e.set(r, t), n.add(r))
                }))
            }

            function k(e) {
                return Array.isArray(e) ? e[0] : e
            }

            function S(e) {
                return function() {
                    var e = (0, o.T)(),
                        t = e.getBasePageUrl();
                    if (!t) throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                    var n = function(e, t, n, r) {
                        var i = new URLSearchParams,
                            o = t && d.hasOwnProperty(t) ? t : "DEFAULT";
                        return d[o].forEach((function(t) {
                            var n = e.searchParams.get(t);
                            n && i.set(t, n)
                        })), "number" === typeof(null == n ? void 0 : n.id) && i.set("aid", n.id.toString()), (null == n ? void 0 : n.label) && i.set("label", n.label.toString()), r && e.searchParams.forEach((function(e, t) {
                            var n;
                            (0 === (n = t).indexOf("exp_") || 0 === n.indexOf("b_feature_running_") || "exp_all" === n || "hotel_account_id" === n || "i_am_from" === n || "my_ip" === n) && i.set(t, e)
                        })), i
                    }(t, e.getSiteType(), e.getAffiliate(), e.isInternalIp());
                    return function(r) {
                        var i = new URL("" + t.origin + t.pathname),
                            o = r.host ? function(e, t) {
                                var n = e.host.match(h);
                                if (!n) return e;
                                var r = n[1],
                                    i = n[2];
                                if ("" === r || v.includes(r)) {
                                    var o = k(f.PRODUCTION[t]);
                                    e.host = o + "." + i
                                } else if (y.test(r)) {
                                    var a = k(f.KVM[t]);
                                    e.host = r.replace(y, "$1-" + a + ".dev." + p)
                                } else if (E.test(r)) {
                                    var c = k(f.DQS[t]);
                                    e.host = c + ".dqs." + p
                                } else if (b.test(r)) {
                                    var l = k(f.STAGING[t]);
                                    e.host = r.replace(b, l + "$1." + p)
                                }
                                return e
                            }(i, r.host) : i;
                        return r.pathname && (o.pathname = r.pathname), o.hash = r.hash || "", e.isRobotRequest() || (w(o.searchParams, n), w(o.searchParams, r.searchParams)), o
                    }
                }()(e)
            }
        },
        72335: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return r
                }
            });
            var r = function(e) {
                var t = e.encryptedCommonOauthState,
                    n = "prod" === e.environment,
                    r = e.affiliateId,
                    i = e.language,
                    o = e.actionName,
                    a = n ? "vO1Kblk7xX9tUn2cpZLS" : "b_test_fe",
                    c = "https://".concat(function(e) {
                        return e ? "account.booking.com" : "account.dqs.booking.com"
                    }(n), "/auth/oauth2"),
                    l = "https://".concat(function(e) {
                        return e ? "secure.booking.com" : "book.dqs.booking.com"
                    }(n), "/login.html?op=oauth_return"),
                    u = new URL(c);
                if (u.searchParams.set("client_id", a), u.searchParams.set("redirect_uri", l), u.searchParams.set("response_type", e.anon ? "anon_session" : "code"), i && u.searchParams.set("lang", i), r && u.searchParams.set("aid", r), o && u.searchParams.set("bkng_action", o), t) {
                    e.encryptedCommonOauthState, e.environment;
                    var s = function(e, t) {
                        try {
                            var n = void 0,
                                r = JSON.stringify(t);
                            return n = btoa(r), "".concat(e, "*").concat(n)
                        } catch (i) {
                            return "".concat(e, "*")
                        }
                    }(t, function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                        }
                        return n
                    }(e, ["encryptedCommonOauthState", "environment"]));
                    s && u.searchParams.set("state", s)
                }
                return u.toString()
            }
        },
        14994: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return tr
                }
            });
            var r = n(32735),
                i = n(47169),
                o = n(42015),
                a = n(79399),
                c = n(13260),
                l = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ProductShell"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "productShellInput"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ProductShellInput"
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
                                    value: "productShell"
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
                                            value: "productShellInput"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "products"
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
                                                    value: "label"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
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
                                            value: "links"
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
                                                    value: "label"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subLabel"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "attributes"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "callback"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "clientId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "csrfToken"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "redirectUri"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
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
                                            value: "languages"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "all"
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
                                                            value: "code"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "countryFlag"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "popular"
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
                                                            value: "code"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "countryFlag"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "selectedLanguage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "currencies"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "all"
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
                                                            value: "code"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "encodedSymbol"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "symbol"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "top"
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
                                                            value: "code"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "encodedSymbol"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "symbol"
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
                                            value: "guestAccount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "userLabel"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "initials"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "geniusStatus"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "level"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "label"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "avatar"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sizedUrls"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "square64"
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
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "affiliateSettings"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "productType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isUserLoginAllowed"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cobrand"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cobrandImageURL"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cobrandImageHref"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cobrandLogoPreamble"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cobrandPreambleCaps"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cobrandPreambleColor"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cobrandPreambleStyle"
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
                        end: 1330,
                        source: {
                            body: "\n  query ProductShell($productShellInput: ProductShellInput!) {\n    productShell(input: $productShellInput) {\n      products {\n        id\n        label\n        url\n        icon\n      }\n      links {\n        id\n        label\n        subLabel\n        url\n        icon\n        attributes {\n          callback\n          clientId\n          csrfToken\n          redirectUri\n          state\n        }\n      }\n      languages {\n        all {\n          name\n          code\n          countryFlag\n        }\n        popular {\n          name\n          code\n          countryFlag\n        }\n        selectedLanguage\n      }\n      currencies {\n        all {\n          name\n          code\n          encodedSymbol\n          symbol\n        }\n        top {\n          name\n          code\n          encodedSymbol\n          symbol\n        }\n      }\n      guestAccount {\n        userLabel\n        initials\n        geniusStatus {\n          level\n          label\n        }\n        avatar {\n          sizedUrls {\n            square64\n          }\n        }\n      }\n      affiliateSettings {\n        productType\n        isUserLoginAllowed\n        cobrand {\n          cobrandImageURL\n          cobrandImageHref\n          cobrandLogoPreamble\n          cobrandPreambleCaps\n          cobrandPreambleColor\n          cobrandPreambleStyle\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                u = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ProductShellLinks"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "productShellInput"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ProductShellInput"
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
                                    value: "productShell"
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
                                            value: "productShellInput"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "links"
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
                                                    value: "label"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subLabel"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "attributes"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "callback"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "clientId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "csrfToken"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "redirectUri"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
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
                        end: 341,
                        source: {
                            body: "\n  query ProductShellLinks($productShellInput: ProductShellInput!) {\n    productShell(input: $productShellInput) {\n      links {\n        id\n        label\n        subLabel\n        url\n        icon\n        attributes {\n          callback\n          clientId\n          csrfToken\n          redirectUri\n          state\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                s = n(33782),
                d = n(17345);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = 8e3;

            function m(e) {
                var t;
                return -1 !== (null === (t = e.getBasePageUrl()) || void 0 === t ? void 0 : t.search.indexOf("__mockGuestData=1"))
            }

            function g(e, t) {
                if ("attractions" === t) {
                    var n, r, i = null === (n = e.getBasePageUrl()) || void 0 === n || null === (r = n.searchParams) || void 0 === r ? void 0 : r.get("url_code");
                    return i ? {
                        urlCode: i
                    } : {}
                }
                return {}
            }
            var _, h, b, y, E, O, w, k = n(92577),
                S = n(13736),
                C = n(6959),
                I = n(39476),
                A = "CAPLA_EVENT_web-shell_header-mfe_HEADER_READY",
                T = "CAPLA_EVENT_web-shell_header-mfe_TABNAV_OPENED",
                P = "CAPLA_EVENT_web-shell_header-mfe_TABNAV_RESET",
                N = "CAPLA_EVENT_web-shell_header-mfe_POPOVER_CLOSE",
                L = "CAPLA_EVENT_web-shell_header-mfe_POPOVER_OPEN",
                R = "CAPLA_EVENT_web-shell_header-mfe_UPDATE_COUNTER",
                x = "CAPLA_EVENT_web-shell_header-mfe_UPDATE_LIST",
                D = "CAPLA_EVENT_web-shell_header-mfe_ASSISTANT_UPDATE_STATE",
                j = n(72197),
                U = n(44393),
                F = n(93354),
                M = n(2446),
                H = n(98178),
                V = (0, U.Z)(_ || (_ = (0, S.Z)(["YTTHbXeeVJWcSMQZbIYUbHTXSfVSCKdVO"]))),
                Z = (0, U.Z)(h || (h = (0, S.Z)(["YTTHbXeeVJWcSMQZbIYUbHTXSfVSCKBFO"]))),
                G = (0, U.Z)(b || (b = (0, S.Z)(["YTTHbXeeVJWcSMQZbIYUbHTXSfVSCKVBC"]))),
                B = (0, U.Z)(y || (y = (0, S.Z)(["YTTHbXeeVJWcSMQZbIYUbHTXSfVSCKOXKe"])));

            function K(e) {
                var t = e.source;
                if ("accommodations" === e.currentProduct) switch (t) {
                    case O.ListProperty:
                        (0, F.pj)(G, 1);
                        break;
                    case O.Notification:
                        (0, F.pj)(G, 2);
                        break;
                    case O.HelpCenter:
                        (0, F.pj)(G, 3);
                        break;
                    case O.ProfileAvatar:
                        (0, F.pj)(G, 4);
                        break;
                    case O.Language:
                        (0, F.pj)(B, 1);
                        break;
                    case O.Currency:
                        (0, F.pj)(B, 2);
                        break;
                    default:
                        (0, o.c1)("Unknown source ".concat(t, " in trackPlatformAgnosticEvent"))
                }
            }

            function q(e) {
                var t = e.source,
                    n = e.siteType;
                if ("accommodations" === e.currentProduct) switch (t) {
                    case E.Login:
                        (0, F.pj)(Z, 2), n === H.N.WWW ? (0, F.pj)(Z, 3) : (0, F.pj)(Z, 4);
                        break;
                    case E.DdotRegister:
                        if (n !== H.N.WWW) return;
                        (0, F.pj)(Z, 5);
                        break;
                    case E.MdotMenu:
                        if (n === H.N.WWW) return;
                        (0, F.pj)(G, 5);
                        break;
                    default:
                        (0, o.c1)("Unknown source ".concat(t, " in trackPlatformSpecificEvent"))
                }
            }! function(e) {
                e.Login = "Login", e.DdotRegister = "DdotRegister", e.MdotMenu = "MdotMenu"
            }(E || (E = {})),
            function(e) {
                e.ListProperty = "ListProperty", e.Notification = "Notification", e.HelpCenter = "HelpCenter", e.ProfileAvatar = "ProfileAvatar", e.Language = "Language", e.Currency = "Currency"
            }(O || (O = {}));
            var z = (0, U.Z)(w || (w = (0, S.Z)(["YTTHbXeeVJWcWJSJPaXfNCDWOOC"]))),
                Y = function(e) {
                    var t = (0, M.B)(),
                        n = t.siteType,
                        i = t.userIdentity,
                        o = t.actionName,
                        a = t.affiliate,
                        c = (0, F.zm)(z),
                        l = "MDOT" === n && ("index" === o || "searchresults" === o || "searchresults_irene" === o) && (null === i || void 0 === i ? void 0 : i.authLevel);
                    l && ((0, F.ti)(z, 1), null !== a && void 0 !== a && a.isBookingBranded && (0, F.ti)(z, 2), null !== a && void 0 !== a && a.isCobrand && (0, F.ti)(z, 3));
                    var u = (0, r.useState)(0),
                        s = (0, k.Z)(u, 2),
                        d = s[0],
                        f = s[1],
                        p = (0, r.useState)(void 0),
                        v = (0, k.Z)(p, 2),
                        m = v[0],
                        g = v[1],
                        _ = (0, I.T_)().translate,
                        h = _("a11y_travheader_view_notifications"),
                        b = _("android_preferences_notifications_forweb");
                    return (0, r.useEffect)((function() {
                        if (!l || c) {
                            var e = C.Y.subscribe(R, (function(e, t) {
                                    f(t.count)
                                })),
                                t = C.Y.subscribe(x, (function(e, t) {
                                    var n = r.createElement("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: t.list
                                        }
                                    });
                                    g(n)
                                }));
                            return function() {
                                C.Y.unsubscribe(e), C.Y.unsubscribe(t)
                            }
                        }
                    }), [l, c]), {
                        title: b,
                        count: d,
                        content: m,
                        onClose: function() {
                            C.Y.publish(N)
                        },
                        onOpen: function() {
                            C.Y.publish(L), (0, j.H)(j.Us.Other, j.yo.Notification), K({
                                source: O.Notification,
                                currentProduct: e
                            })
                        },
                        hint: h
                    }
                };

            function W(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return X(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
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
                var o, a = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var Q = [{
                    project: "post-booking-web",
                    service: "mfe",
                    action: ["confirmation", "mybooking", "myreservations"]
                }, {
                    project: "checkout",
                    service: "bp-accommodation",
                    action: ["book"]
                }, {
                    project: "tpi",
                    service: "tpi-bp-mfe",
                    action: ["tpi_book"]
                }],
                J = function() {
                    var e = (0, r.useState)(!1),
                        t = (0, k.Z)(e, 2),
                        n = t[0],
                        i = t[1],
                        o = (0, r.useState)(0),
                        a = (0, k.Z)(o, 2),
                        c = a[0],
                        l = a[1],
                        u = (0, r.useState)(""),
                        s = (0, k.Z)(u, 2),
                        d = s[0],
                        f = s[1],
                        p = (0, M.B)(),
                        v = p.actionName,
                        m = p.basePageUrl,
                        g = function(e) {
                            if (!e) return null;
                            var t, n = W(Q);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    if (r.action.includes(e)) return "CAPLA_EVENT_".concat(r.project, "-").concat(r.service, "_OPEN_ASSISTANT")
                                }
                            } catch (i) {
                                n.e(i)
                            } finally {
                                n.f()
                            }
                            return null
                        }(v),
                        _ = (0, I.T_)().translate,
                        h = _("a11y_travheader_msg"),
                        b = _("msg_lc_alt_messaging_platform", {
                            variables: {
                                number: c
                            },
                            num_exception: c
                        });
                    return (0, r.useEffect)((function() {
                        var e = C.Y.subscribe(D, (function(e, t) {
                            n || i(!0), "number" === typeof t.unreadCount && l(t.unreadCount), t.url && f(t.url)
                        }));
                        return function() {
                            C.Y.unsubscribe(e)
                        }
                    }), [n]), {
                        enabled: n,
                        hint: h,
                        hasUnread: c,
                        label: b,
                        onClick: function() {
                            if (d) {
                                var e = new URL(/(https|http):\/\//.test(d) ? d : m.origin + d);
                                c && e.searchParams.append("unread", "1"), C.Y.publish(g, {
                                    url: e.toString()
                                })
                            } else {
                                var t, n, r = null === (t = window) || void 0 === t || null === (n = t.B) || void 0 === n ? void 0 : n.env;
                                r && r.fe_ba_link_capla && (window.location.href = r.fe_ba_link_capla)
                            }
                        }
                    }
                },
                $ = n(8821),
                ee = n(85169),
                te = n(93173),
                ne = n(82248),
                re = n(54693),
                ie = n(2312);

            function oe(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, ie.Z)(e);
                    if (t) {
                        var i = (0, ie.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return (0, re.Z)(this, n)
                }
            }
            var ae = function(e) {
                    (0, ne.Z)(n, e);
                    var t = oe(n);

                    function n() {
                        var e;
                        (0, $.Z)(this, n);
                        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(o)), (0, i.Z)((0, te.Z)(e), "state", {
                            hasError: !1,
                            errorMessage: null
                        }), e
                    }
                    return (0, ee.Z)(n, [{
                        key: "componentDidCatch",
                        value: function(e) {
                            (0, o.eK)(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.state.hasError) {
                                var e = this.props,
                                    t = e.fallbackComponent,
                                    n = e.currentProduct,
                                    i = (0, a.T)();
                                return r.createElement(r.Fragment, null, r.createElement(t, {
                                    currentProduct: n
                                }), (0, s.Vo)(i) && this.state.errorMessage && r.createElement("pre", null, this.state.errorMessage))
                            }
                            return this.props.children
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function(e) {
                            return {
                                hasError: !0,
                                errorMessage: e ? String(e) : "Unknown error"
                            }
                        }
                    }]), n
                }(r.Component),
                ce = n(20011),
                le = n(87703),
                ue = n(62691),
                se = n(62950),
                de = n(3657),
                fe = function(e) {
                    var t = e.condition,
                        n = e.wrapper,
                        i = e.children;
                    return r.createElement(r.Fragment, null, t ? n(i) : i)
                },
                pe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return e.reduce((function(e, t) {
                        return t ? "".concat(e, " ").concat(t) : e
                    }), "")
                },
                ve = "b4ea8459d6",
                me = "ddd5130c85",
                ge = "c20fd9b542",
                _e = "f61b048379",
                he = "f9966e6860",
                be = "a945757098",
                ye = n(73842),
                Ee = n(75928),
                Oe = function() {
                    return Oe = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Oe.apply(this, arguments)
                },
                we = {
                    threshold: .5
                },
                ke = function(e) {
                    var t = e.tabs,
                        n = (0, ye._)();
                    return function(e, t, n) {
                        var i = (0, r.useRef)([]),
                            o = (0, r.useCallback)((function(e, t) {
                                e.forEach((function(e) {
                                    var n = i.current.find((function(t) {
                                        return t.ref === e.target
                                    }));
                                    if (e.isIntersecting && n && !n.exposed) {
                                        var r = i.current.find((function(t) {
                                            return t.ref === e.target
                                        }));
                                        (0, le.Nu)(le.FP.TAB_EXPOSED, null === r || void 0 === r ? void 0 : r.tab), n.exposed = !0, t.unobserve(e.target)
                                    }
                                }))
                            }), []);
                        (0, Ee.Z)((function() {
                            var e = function() {
                                i.current && i.current.length && i.current.forEach((function(e) {
                                    e.exposed || ((0, le.Nu)(le.FP.TAB_EXPOSED, null === e || void 0 === e ? void 0 : e.tab), Object.assign(e, {
                                        exposed: !0
                                    }))
                                }))
                            };
                            return n.current && n.current.addEventListener("click", e),
                                function() {
                                    n.current && n.current.removeEventListener("click", e)
                                }
                        }), [n, i]), (0, Ee.Z)((function() {
                            var n;
                            if (window && window.IntersectionObserver) {
                                var r = (e.current || []).map((function(e, n) {
                                    var r, o, a;
                                    return {
                                        ref: e,
                                        tab: t[n],
                                        exposed: null !== (a = null === (o = null === (r = i.current) || void 0 === r ? void 0 : r[n]) || void 0 === o ? void 0 : o.exposed) && void 0 !== a && a
                                    }
                                }));
                                i.current = r, n = new IntersectionObserver(o, we), i.current && i.current.length && i.current.forEach((function(e) {
                                    e.exposed || n.observe(e.ref)
                                }))
                            }
                            return function() {
                                n && n.disconnect()
                            }
                        }), [o, e, t])
                    }(n.buttonRefs, t, n.moreRef), r.createElement(ue.OK.TriggerList, null, t.map((function(e) {
                        return r.createElement(ue.OK.Trigger, Oe({
                            key: e.id,
                            native: !0
                        }, e, {
                            linkAttributes: {
                                role: "tab",
                                id: e.id
                            }
                        }))
                    })))
                },
                Se = function() {
                    return Se = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Se.apply(this, arguments)
                },
                Ce = function(e, t, n) {
                    var i = "action_".concat(t);
                    return t < n.length - 1 ? e : r.createElement(ue.zx.Aligner, {
                        alignment: "end",
                        key: i
                    }, e)
                },
                Ie = function(e) {
                    var t = e.actions,
                        n = e.activeTabId,
                        i = e.className,
                        o = e.defaultActiveTabId,
                        a = e.logo,
                        c = e.onTabChange,
                        l = e.tabs,
                        u = e.tabsMoreLabel,
                        s = e.tabsIntroLabel,
                        d = e.variant,
                        f = pe(ve, i, "transparent-light" === (void 0 === d ? "default" : d) && me),
                        p = n ? {
                            activeTabId: n,
                            "aria-selected": !0
                        } : {
                            defaultActiveTabId: o
                        },
                        v = (0, r.useMemo)((function() {
                            var e;
                            return {
                                "data-testid": "header-xpb",
                                "aria-label": s,
                                "aria-owns": null === (e = null === l || void 0 === l ? void 0 : l.map((function(e) {
                                    return e.id
                                }))) || void 0 === e ? void 0 : e.join(" ")
                            }
                        }), [s, l]);
                    return r.createElement("header", {
                        className: f
                    }, r.createElement("nav", {
                        className: ge
                    }, r.createElement("div", {
                        className: he
                    }, r.createElement("div", {
                        className: be
                    }, a)), r.createElement(ue.Kq, {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: 2
                    }, t && t.map(Ce))), l && !!l.length && r.createElement(ue.OK, Se({
                        color: "inherit",
                        className: _e,
                        onTabChange: c,
                        moreLabel: u,
                        variant: "rounded",
                        attributes: v
                    }, p), r.createElement(ke, {
                        tabs: l
                    })))
                },
                Ae = function() {
                    return Ae = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Ae.apply(this, arguments)
                },
                Te = function(e) {
                    var t = e.helpCenter,
                        n = e.triggerAriaLabel;
                    return r.createElement(ue.u, {
                        text: t.title,
                        position: "bottom",
                        hideArrow: !0
                    }, (function(e) {
                        return r.createElement(ue.zx, {
                            variant: "tertiary-inherit",
                            size: "large",
                            href: t.href,
                            onClick: t.onClick,
                            attributes: Ae(Ae({}, e), {
                                "aria-label": n || t.title,
                                "data-testid": "header-help-center"
                            }),
                            icon: se.QuestionMarkCircleIcon,
                            preventDefault: t.preventDefault
                        })
                    }))
                },
                Pe = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                Ne = function(e, t) {
                    for (var n = e.all, r = 0; r < n.items.length; r += 1) {
                        var i = n.items[r];
                        if (i.id === t) return i
                    }
                    return null
                },
                Le = function(e, t, n) {
                    return n ? e.filter((function(e) {
                        return e.id !== t
                    })) : Pe([], e, !0).sort((function(e) {
                        return e.id === t ? -1 : 1
                    }))
                },
                Re = function(e) {
                    for (var t = [], n = 0; n < e.length; n += 4) t.push(e.slice(n, n + 4));
                    return t
                },
                xe = {
                    "mobile-content": "bd4974e1a6",
                    "selection-list": "a448481077",
                    "selection-text": "cf67405157",
                    "selection-trigger": "ec2bd543aa",
                    "menu-title": "be6d88fee8"
                },
                De = function() {
                    return De = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, De.apply(this, arguments)
                };
            var je = function(e) {
                    var t = e.children,
                        n = e.selection,
                        i = e.selectedId,
                        o = e.renderSign,
                        a = e.renderSelectedSign,
                        c = e.multilineItems,
                        l = e.attributes,
                        u = e.triggerAttributes,
                        s = e.onOpen,
                        d = e.onClose,
                        f = Ne(n, i),
                        p = r.useState(!1),
                        v = p[0],
                        m = p[1],
                        g = (0, r.useMemo)((function() {
                            return {
                                "data-testid": "selection-modal-close"
                            }
                        }), []);
                    if (!f) return null;
                    var _ = function() {
                            n.onOpen && n.onOpen(), s && s(), m(!0)
                        },
                        h = function() {
                            d && d(), m(!1)
                        },
                        b = function(e) {
                            var t = e.sectionIndex,
                                a = e.section,
                                l = e.isTitleVisible,
                                u = e.shouldExcludeSelected,
                                s = (0, r.useMemo)((function() {
                                    return Le(a.items, i, u)
                                }), [a.items, u]),
                                d = (0, r.useMemo)((function() {
                                    return Re(s)
                                }), [s]);
                            return s.length ? r.createElement(ue.Kq, {
                                gap: 2,
                                attributes: {
                                    "data-testid": a.title
                                }
                            }, l && r.createElement(ue.xv, {
                                variant: "strong_2",
                                tagName: "h3"
                            }, a.title), r.createElement("div", {
                                className: xe["selection-list"]
                            }, r.createElement(ue.Kq, {
                                gap: 2
                            }, d.map((function(e, a) {
                                return r.createElement(ue.rj, {
                                    size: "small",
                                    tagName: "ul",
                                    key: e.length ? e[0].id : a
                                }, e.map((function(e) {
                                    var a = i === e.id ? r.createElement(ue.JO, {
                                        svg: se.CheckmarkIcon,
                                        size: "medium"
                                    }) : null;
                                    return r.createElement(ue.rj.Column, {
                                        size: 3,
                                        key: e.id,
                                        tagName: "li"
                                    }, r.createElement(ue.HC, {
                                        roundedCorners: !0,
                                        key: e.id,
                                        startSlot: !c && o(e),
                                        endSlot: a,
                                        active: i === e.id,
                                        href: e.href,
                                        spacing: "small",
                                        attributes: {
                                            "data-testid": "selection-item"
                                        },
                                        onClick: function() {
                                            return function(e, t) {
                                                n.onChoose(e, t), h()
                                            }(e, t)
                                        }
                                    }, r.createElement("span", {
                                        className: xe["selection-text"]
                                    }, e.title, c && o(e))))
                                })))
                            }))))) : null
                        },
                        y = n.popular && r.createElement(b, {
                            sectionIndex: 0,
                            section: n.popular,
                            isTitleVisible: !0,
                            shouldExcludeSelected: !0
                        });
                    return r.createElement(r.Fragment, null, r.createElement(ue.u, {
                        text: n.title,
                        position: "bottom",
                        hideArrow: !0
                    }, (function(e) {
                        return r.createElement(ue.zx, {
                            variant: "tertiary-inherit",
                            size: "large",
                            onClick: _,
                            attributes: De(De({}, e), u)
                        }, t || (a ? a(f) : o(f)))
                    })), r.createElement(ue.br, {
                        arrowNavigation: !0,
                        position: "center",
                        size: 960,
                        title: n.title,
                        ariaLabel: n.title,
                        closeAriaLabel: n.closeAriaLabel,
                        active: v,
                        attributes: De({
                            "data-testid": "selection-modal"
                        }, l),
                        closeAttributes: g,
                        onCloseTrigger: h
                    }, r.createElement(ue.Kq, {
                        gap: 4
                    }, n.disclaimer, y, r.createElement(b, {
                        sectionIndex: 1,
                        section: n.all,
                        isTitleVisible: !!y
                    }))))
                },
                Ue = "ea1163d21f",
                Fe = "bc6c5feac2",
                Me = "e8e856c3e0",
                He = function(e) {
                    var t = e.active,
                        n = e.text,
                        i = e.mobile,
                        o = pe(Ue, i && Fe, t && Me);
                    return r.createElement("div", {
                        className: o
                    }, n)
                },
                Ve = function(e) {
                    var t = e.children,
                        n = e.currencySelection,
                        i = e.selectedCurrencyId,
                        o = e.attributes,
                        a = e.triggerAttributes,
                        c = e.onOpen,
                        l = e.onClose;
                    return r.createElement(je, {
                        multilineItems: !0,
                        selection: n,
                        selectedId: i,
                        attributes: o,
                        triggerAttributes: a,
                        renderSign: function(e) {
                            var t = e.id === i;
                            return r.createElement(He, {
                                text: e.sign,
                                active: t
                            })
                        },
                        renderSelectedSign: function(e) {
                            return e.sign
                        },
                        onOpen: c,
                        onClose: l
                    }, t)
                };

            function Ze(e) {
                var t = e.children,
                    n = e.shouldDisplaySelectionTitle,
                    i = e.selection,
                    o = e.selected,
                    a = e.attributes,
                    c = e.renderSign,
                    l = e.renderSelectedSign,
                    u = e.onClick;
                return n ? r.createElement(ue.HC, {
                    spacing: "large",
                    attributes: a,
                    className: xe["selection-trigger"],
                    startSlot: l ? l(o) : c(o),
                    onClick: u
                }, t || r.createElement(r.Fragment, null, r.createElement(ue.nn, null, i.title), o.title)) : r.createElement(ue.zx, {
                    variant: "tertiary-inherit",
                    attributes: a,
                    onClick: u
                }, t || r.createElement(ue.Kq, {
                    direction: "row",
                    alignItems: "center",
                    tagName: "span",
                    gap: 0
                }, l ? l(o) : c(o), r.createElement(ue.nn, null, i.title)))
            }
            var Ge = function(e) {
                    var t = e.children,
                        n = e.selection,
                        i = e.selectedId,
                        o = e.shouldDisplaySelectionTitle,
                        a = void 0 === o || o,
                        c = e.triggerAttributes,
                        l = e.attributes,
                        u = e.renderSign,
                        s = e.renderSelectedSign,
                        d = e.onOpen,
                        f = e.onClose,
                        p = n.all,
                        v = n.popular,
                        m = Ne(n, i),
                        g = r.useState(!1),
                        _ = g[0],
                        h = g[1];
                    if (!m) return null;
                    var b = function() {
                        h(!1), f && f()
                    };
                    return r.createElement(r.Fragment, null, r.createElement(Ze, {
                        shouldDisplaySelectionTitle: a,
                        selection: n,
                        selected: m,
                        attributes: c,
                        onClick: function() {
                            h(!0), n.onOpen && n.onOpen(), d && d()
                        },
                        renderSign: u,
                        renderSelectedSign: s
                    }, t), r.createElement(ue.br, {
                        fill: !0,
                        position: "fullScreen",
                        arrowNavigation: !0,
                        ariaLabel: n.title,
                        active: _,
                        closeAriaLabel: n.closeAriaLabel,
                        attributes: l,
                        onCloseTrigger: b
                    }, r.createElement("div", {
                        className: xe["mobile-content"]
                    }, r.createElement(ue.xu, {
                        padding: 6
                    }, r.createElement(ue.xv, {
                        variant: "headline_2",
                        tagName: "h2"
                    }, n.title), n.disclaimer), [v, p].map((function(e, t) {
                        if (!e) return null;
                        var o = Le(e.items, i, !t);
                        return o.length ? r.createElement("div", {
                            key: e.title,
                            "data-testid": e.title
                        }, !!v && r.createElement(ue.xv, {
                            variant: "strong_2",
                            tagName: "h3",
                            className: xe["menu-title"]
                        }, e.title), r.createElement("ul", null, o.map((function(e) {
                            var o = e.id === i,
                                a = o && r.createElement(ue.JO, {
                                    svg: se.CheckmarkIcon,
                                    size: "large"
                                });
                            return r.createElement("li", {
                                key: e.id
                            }, r.createElement(ue.HC, {
                                startSlot: u(e),
                                endSlot: a,
                                spacing: "large",
                                onClick: function() {
                                    return function(e, t) {
                                        n.onChoose(e, t), b()
                                    }(e, t)
                                },
                                active: o,
                                href: e.href,
                                attributes: {
                                    "data-testid": "selection-item"
                                }
                            }, r.createElement("span", {
                                className: xe["selection-text"]
                            }, e.title)))
                        })))) : null
                    })))))
                },
                Be = function(e) {
                    var t = e.children,
                        n = e.currencySelection,
                        i = e.selectedCurrencyId,
                        o = e.shouldDisplaySelectionTitle,
                        a = e.attributes,
                        c = e.triggerAttributes,
                        l = e.onOpen,
                        u = e.onClose;
                    return r.createElement(Ge, {
                        selection: n,
                        selectedId: i,
                        shouldDisplaySelectionTitle: o,
                        attributes: a,
                        triggerAttributes: c,
                        renderSign: function(e) {
                            var t = e.id === i;
                            return r.createElement(He, {
                                text: e.sign,
                                active: t,
                                mobile: !0
                            })
                        },
                        onOpen: l,
                        onClose: u
                    }, t)
                },
                Ke = function() {
                    return Ke = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Ke.apply(this, arguments)
                },
                qe = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                ze = function(e) {
                    var t = e.variant,
                        n = e.onClose,
                        i = e.onOpen,
                        o = qe(e, ["variant", "onClose", "onOpen"]),
                        a = Ke(Ke({}, o), {
                            onOpen: function() {
                                i && i(), (0, le.Nu)(le.FP.CURRENCY_PICKER_OPEN)
                            },
                            onClose: function() {
                                n && n(), (0, le.Nu)(le.FP.CURRENCY_PICKER_CLOSE)
                            }
                        });
                    return "desktop" === t ? r.createElement(Ve, Ke({}, a)) : r.createElement(Be, Ke({}, a))
                },
                Ye = "c1d3f059d6",
                We = function(e) {
                    var t = e.children,
                        n = e.languageSelection,
                        i = e.selectedLanguageId,
                        o = e.selectedFlagUrl,
                        a = e.attributes,
                        c = e.triggerAttributes,
                        l = e.onOpen,
                        u = e.onClose,
                        s = function(e, t) {
                            return r.createElement(ue.qE, {
                                className: t ? "" : Ye,
                                src: e.flagUrl,
                                backgroundSize: e.backgroundSize,
                                backgroundPosition: e.backgroundPosition,
                                size: "small"
                            })
                        };
                    return r.createElement(je, {
                        selection: n,
                        selectedId: i,
                        attributes: a,
                        triggerAttributes: c,
                        renderSign: s,
                        renderSelectedSign: function(e) {
                            return o ? r.createElement(ue.qE, {
                                src: o,
                                size: "small"
                            }) : s(e, !0)
                        },
                        onOpen: l,
                        onClose: u
                    }, t)
                },
                Xe = function(e) {
                    var t = e.children,
                        n = e.languageSelection,
                        i = e.selectedLanguageId,
                        o = e.selectedFlagUrl,
                        a = e.shouldDisplaySelectionTitle,
                        c = e.attributes,
                        l = e.triggerAttributes,
                        u = e.onOpen,
                        s = e.onClose,
                        d = function(e) {
                            return r.createElement(ue.qE, {
                                className: Ye,
                                src: e.flagUrl,
                                backgroundSize: e.backgroundSize,
                                backgroundPosition: e.backgroundPosition,
                                size: "small"
                            })
                        };
                    return r.createElement(Ge, {
                        selection: n,
                        selectedId: i,
                        shouldDisplaySelectionTitle: a,
                        attributes: c,
                        triggerAttributes: l,
                        renderSign: d,
                        renderSelectedSign: function(e) {
                            return o ? r.createElement(ue.qE, {
                                className: Ye,
                                src: o,
                                size: "small"
                            }) : d(e)
                        },
                        onOpen: u,
                        onClose: s
                    }, t)
                },
                Qe = function() {
                    return Qe = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Qe.apply(this, arguments)
                },
                Je = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                $e = function(e) {
                    var t = e.variant,
                        n = Je(e, ["variant"]);
                    return "desktop" === t ? r.createElement(We, Qe({}, n)) : r.createElement(Xe, Qe({}, n))
                },
                et = "e56c827729",
                tt = "dc6e98b2f4",
                nt = "f10427ad2c",
                rt = function() {
                    return rt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, rt.apply(this, arguments)
                },
                it = function(e) {
                    var t = e.profile,
                        n = e.mobile,
                        i = e.avatarTitle,
                        o = e.avatarSubtitle,
                        a = e.triggerAriaLabel,
                        c = e.closeAriaLabel,
                        l = t.onOpen,
                        u = t.onClose,
                        s = r.useState(!1),
                        d = s[0],
                        f = s[1],
                        p = {
                            src: (0, r.useMemo)((function() {
                                return t.avatarUrl ? t.avatarUrl : t.initials ? void 0 : t.avatarFallbackUrl || "https://q-xx.bstatic.com/backend_static/common/img/header/avatar.png"
                            }), [t.avatarUrl, t.initials, t.avatarFallbackUrl]),
                            color: t.genius ? "accent" : void 0,
                            outline: t.genius ? "accent" : "white",
                            text: t.initials
                        },
                        v = t.menu.map((function(e) {
                            return rt(rt({}, e), {
                                items: e.items.map((function(e) {
                                    return rt(rt({}, e), {
                                        preventDefault: void 0 !== e.preventDefault ? e.preventDefault : !!e.onChoose
                                    })
                                }))
                            })
                        })),
                        m = function(e, t) {
                            return r.createElement(ue.HC, {
                                key: "string" === typeof e.text ? e.text : t,
                                spacing: "large",
                                icon: e.icon,
                                onClick: e.onChoose && function() {
                                    e.onChoose && e.onChoose(e, t)
                                },
                                href: e.href,
                                attributes: e.attributes,
                                preventDefault: e.preventDefault
                            }, e.text)
                        },
                        g = function(e) {
                            return r.createElement(ue.zx, {
                                size: n ? "large" : void 0,
                                variant: "tertiary-inherit",
                                className: nt,
                                attributes: rt(rt({}, e), {
                                    "aria-label": a || t.name,
                                    "data-testid": "header-profile"
                                })
                            }, n ? r.createElement(ue.qE, rt({}, p, {
                                size: "small",
                                attributes: {
                                    "data-testid": "header-profile-mobile-avatar"
                                }
                            })) : r.createElement(ue.q0, {
                                title: i || t.name,
                                subtitle: o ? r.createElement(ue.xv, {
                                    tagName: "span",
                                    variant: "small_1"
                                }, o) : t.genius && t.geniusLabel && r.createElement(ue.xv, {
                                    tagName: "span",
                                    color: "brand_genius_secondary",
                                    variant: "small_1"
                                }, t.geniusLabel),
                                color: "inherit",
                                avatar: rt(rt({}, p), {
                                    attributes: {
                                        "data-testid": "header-profile-avatar"
                                    }
                                }),
                                attributes: {
                                    "aria-label": a
                                }
                            }))
                        },
                        _ = (0, r.useMemo)((function() {
                            return {
                                attributes: {
                                    "data-testid": "header-mobile-profile-modal"
                                },
                                closeAttributes: {
                                    "data-testid": "header-mobile-profile-modal-close"
                                }
                            }
                        }), []),
                        h = (0, r.useMemo)((function() {
                            return {
                                attributes: {
                                    "data-testid": "header-profile-menu"
                                }
                            }
                        }), []);
                    return n ? r.createElement(r.Fragment, null, g({
                        onClick: function() {
                            f(!0), null === l || void 0 === l || l()
                        }
                    }), r.createElement(ue.br, rt({
                        position: "fullScreen",
                        fill: !0,
                        arrowNavigation: !0,
                        closeAriaLabel: c || t.closeAriaLabel,
                        active: d,
                        onCloseTrigger: function() {
                            f(!1), null === u || void 0 === u || u()
                        }
                    }, _), r.createElement("div", {
                        className: et
                    }, r.createElement(ue.xu, {
                        padding: 6
                    }, r.createElement(ue.q0, {
                        size: "large",
                        title: t.name,
                        subtitle: t.genius && t.geniusLabel && r.createElement("span", {
                            className: tt
                        }, t.geniusLabel),
                        avatar: p
                    })), t.menu.map((function(e, t) {
                        return r.createElement(r.Fragment, {
                            key: "string" === typeof e.items[0].text ? e.items[0].text : t
                        }, t > 0 && r.createElement(ue.iz, null), e.items.map(m))
                    }))))) : r.createElement(ue.h_, rt({
                        sections: v,
                        position: "bottom-end",
                        navigationMode: "tab-and-arrows",
                        onOpen: l,
                        onClose: u
                    }, h), g)
                },
                ot = function() {
                    return ot = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, ot.apply(this, arguments)
                },
                at = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                ct = function(e) {
                    var t = e.hasUnread,
                        n = e.size,
                        i = void 0 === n ? "large" : n,
                        o = e.variant,
                        a = void 0 === o ? "tertiary-inherit" : o,
                        c = e.label,
                        l = at(e, ["hasUnread", "size", "variant", "label"]);
                    return r.createElement(ue.zx, ot({
                        size: i,
                        variant: a
                    }, l, {
                        attributes: ot(ot({}, l.attributes), {
                            "aria-label": c
                        }),
                        onClick: function(e) {
                            var t;
                            null === (t = null === l || void 0 === l ? void 0 : l.onClick) || void 0 === t || t.call(l, e), (0, le.Nu)(le.FP.ASSISTANT_CLICKED)
                        }
                    }), t ? r.createElement(ue.vC, {
                        value: t,
                        attributes: {
                            "data-testid": "header-assistant-entry-bubble"
                        }
                    }, r.createElement(ue.JO, {
                        size: "large",
                        svg: se.SpeechBubbleIcon
                    })) : r.createElement(ue.JO, {
                        size: "large",
                        svg: se.SpeechBubbleIcon
                    }))
                },
                lt = function(e) {
                    var t = e.enabled,
                        n = e.hint,
                        i = at(e, ["enabled", "hint"]);
                    return t ? r.createElement(ue.u, {
                        text: n,
                        position: "bottom",
                        hideArrow: !0,
                        zIndex: 1
                    }, (function(e) {
                        return r.createElement(ct, ot({
                            attributes: e
                        }, i))
                    })) : null
                },
                ut = {
                    "mobile-content": "feb14e4dac",
                    "menu-title": "ee2024cdb7",
                    "social-entrypoint--we-chat": "c55c36cfa7"
                };

            function st(e, t) {
                if (e) return "object" === typeof e ? e[t ? "mobile" : "general"] : e
            }
            var dt = function() {
                    return dt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, dt.apply(this, arguments)
                },
                ft = function(e) {
                    var t = e.menu,
                        n = e.currencySelection,
                        i = e.languageSelection,
                        o = e.selectedLanguageId,
                        a = e.selectedFlagUrl,
                        c = e.selectedCurrencyId,
                        l = e.ariaLabels,
                        u = r.useState(!1),
                        s = u[0],
                        d = u[1],
                        f = r.useState(!1),
                        p = f[0],
                        v = f[1],
                        m = function() {
                            d(!1), (0, le.Nu)(le.FP.MOBILE_MENU_CLOSE)
                        },
                        g = function() {
                            return v(!0)
                        },
                        _ = function() {
                            return v(!1)
                        },
                        h = (0, r.useMemo)((function() {
                            return {
                                attributes: {
                                    "data-testid": "header-mobile-menu-modal",
                                    role: "dialog",
                                    "aria-modal": !0
                                },
                                closeAttributes: {
                                    "data-testid": "header-mobile-menu-modal-close"
                                }
                            }
                        }), []),
                        b = (0, r.useMemo)((function() {
                            return {
                                attributes: {
                                    "data-testid": "header-mobile-menu-currency-picker-modal"
                                },
                                triggerAttributes: {
                                    "data-testid": "header-mobile-menu-currency-picker-menu-item",
                                    "aria-label": st(null === l || void 0 === l ? void 0 : l.currencyTrigger, !0)
                                }
                            }
                        }), [l]),
                        y = (0, r.useMemo)((function() {
                            return {
                                attributes: {
                                    "data-testid": "header-mobile-menu-language-picker-modal"
                                },
                                triggerAttributes: {
                                    "data-testid": "header-mobile-menu-language-picker-menu-item",
                                    "aria-label": st(null === l || void 0 === l ? void 0 : l.languageTrigger, !0)
                                }
                            }
                        }), [l]),
                        E = function(e, t) {
                            return r.createElement("li", {
                                key: "string" === typeof e.text ? e.text : t
                            }, r.createElement(ue.HC, {
                                roundedCorners: !0,
                                startSlot: e.icon && r.createElement(ue.JO, {
                                    display: "block",
                                    svg: e.icon,
                                    size: "large"
                                }),
                                spacing: "large",
                                onClick: function() {
                                    e.onChoose && e.onChoose(e, t), m()
                                },
                                preventDefault: void 0 !== e.preventDefault ? e.preventDefault : !!e.onChoose,
                                href: e.href,
                                attributes: e.attributes
                            }, e.text))
                        };
                    return r.createElement(r.Fragment, null, r.createElement(ue.zx, {
                        variant: "tertiary-inherit",
                        size: "large",
                        icon: se.LinesHorizontalIcon,
                        onClick: function() {
                            d(!0), (0, le.Nu)(le.FP.MOBILE_MENU_OPEN)
                        },
                        attributes: {
                            "aria-label": st(null === l || void 0 === l ? void 0 : l.menuTrigger, !0) || t.title,
                            "data-testid": "header-mobile-menu-button"
                        }
                    }), r.createElement(ue.br, dt({
                        position: "fullScreen",
                        fill: !0,
                        arrowNavigation: !0,
                        closeAriaLabel: st(null === l || void 0 === l ? void 0 : l.menuClose, !0) || t.closeAriaLabel,
                        active: s,
                        onCloseTrigger: m,
                        lockClose: p
                    }, h), r.createElement("div", {
                        className: ut["mobile-content"]
                    }, r.createElement(ue.xu, {
                        padding: 6
                    }, r.createElement(ue.xv, {
                        variant: "headline_2",
                        tagName: "h2"
                    }, t.title)), r.createElement(ue.Kq, {
                        gap: 0
                    }, n && c && r.createElement(ze, dt({
                        variant: "mobile",
                        currencySelection: n,
                        selectedCurrencyId: c,
                        onOpen: g,
                        onClose: _
                    }, b)), i && o && r.createElement($e, dt({
                        variant: "mobile",
                        languageSelection: i,
                        selectedLanguageId: o,
                        selectedFlagUrl: a,
                        onOpen: g,
                        onClose: _
                    }, y)), t.sections && t.sections.map((function(e, t) {
                        return r.createElement(r.Fragment, {
                            key: e.title || ("string" === typeof e.items[0].text ? e.items[0].text : t)
                        }, e.title && r.createElement(ue.xv, {
                            variant: "strong_2",
                            className: ut["menu-title"],
                            attributes: {
                                role: "heading",
                                "aria-level": "3"
                            }
                        }, e.title), r.createElement("ul", null, e.items.map(E)))
                    }))))))
                },
                pt = n(33889),
                vt = function() {
                    return vt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, vt.apply(this, arguments)
                };

            function mt(e) {
                var t = function() {
                    (0, le.Nu)(le.FP.SOCIAL_ENTRY_CLICKED)
                };
                return r.createElement(ue.J2, {
                    position: "bottom",
                    triggerType: "hover",
                    size: "auto",
                    hideClose: !0,
                    hideArrow: !0
                }, r.createElement(ue.J2.Trigger, null, (function(n) {
                    return r.createElement(ue.zx, {
                        attributes: vt(vt({}, n), {
                            "aria-label": e.entrypointAriaLabel,
                            "data-testid": "header-social-entrypoint",
                            "data-social-type": e.type
                        }),
                        onClick: t,
                        variant: "tertiary-inherit",
                        size: "large",
                        icon: pt.ZX
                    })
                })), r.createElement(ue.J2.Content, null, r.createElement(ue.Kq, {
                    direction: "column",
                    alignItems: "center",
                    gap: 0,
                    className: ut["social-entrypoint--we-chat"]
                }, e.title, r.createElement("img", {
                    src: e.qrCodeUrl,
                    alt: e.qrCodeAlt
                }), e.subtitle)))
            }
            var gt = function(e) {
                    return "wechat" === e.type ? r.createElement(mt, vt({}, e)) : null
                },
                _t = function() {
                    return _t = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, _t.apply(this, arguments)
                },
                ht = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                bt = function(e) {
                    var t = e.count,
                        n = e.size,
                        i = void 0 === n ? "large" : n,
                        o = e.variant,
                        a = void 0 === o ? "tertiary-inherit" : o,
                        c = ht(e, ["count", "size", "variant"]);
                    return r.createElement(ue.zx, _t({
                        size: i,
                        variant: a
                    }, c), t ? r.createElement(ue.vC, {
                        value: t
                    }, r.createElement(ue.JO, {
                        size: "large",
                        svg: se.BellNormalIcon
                    })) : r.createElement(ue.JO, {
                        size: "large",
                        svg: se.BellNormalIcon
                    }))
                },
                yt = function() {
                    return yt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, yt.apply(this, arguments)
                },
                Et = function(e) {
                    var t = e.count,
                        n = e.hint,
                        i = e.content,
                        o = e.onClose,
                        a = e.onOpen;
                    return i ? r.createElement(ue.u, {
                        text: n,
                        position: "bottom",
                        hideArrow: !0,
                        zIndex: 1
                    }, (function(e) {
                        return r.createElement(ue.J2, {
                            hideClose: !0,
                            size: "stretch",
                            fill: !0,
                            onClose: o,
                            onOpen: a,
                            zIndex: 10
                        }, r.createElement(ue.J2.Trigger, null, (function(n) {
                            var i = yt(yt({}, e), n);
                            return r.createElement(bt, {
                                attributes: i,
                                count: t
                            })
                        })), r.createElement(ue.J2.Content, null, i))
                    })) : null
                },
                Ot = "dc194628dd",
                wt = function(e) {
                    var t = e.title,
                        n = e.count,
                        i = e.content,
                        o = e.closeAriaLabel,
                        a = e.onClose,
                        c = e.onOpen,
                        l = (0, r.useState)(!1),
                        u = l[0],
                        s = l[1];
                    return i ? r.createElement(r.Fragment, null, r.createElement(bt, {
                        count: n,
                        onClick: function() {
                            null === c || void 0 === c || c(), s(!0)
                        }
                    }), r.createElement(ue.br, {
                        position: "fullScreen",
                        fill: !0,
                        active: u,
                        closeAriaLabel: o || "",
                        onCloseTrigger: function() {
                            null === a || void 0 === a || a(), s(!1)
                        }
                    }, r.createElement("div", {
                        className: "".concat(Ot, " js-uc-notifications-content")
                    }, t ? r.createElement(ue.xu, {
                        padding: 6
                    }, r.createElement(ue.xv, {
                        variant: "headline_2"
                    }, t)) : null, i))) : null
                },
                kt = function() {
                    return kt = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, kt.apply(this, arguments)
                },
                St = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                Ct = function(e) {
                    var t = e.variant,
                        n = void 0 === t ? "desktop" : t,
                        i = St(e, ["variant"]);
                    return "desktop" === n ? r.createElement(Et, kt({}, i)) : r.createElement(wt, kt({}, i))
                },
                It = function() {
                    return It = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, It.apply(this, arguments)
                },
                At = function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                },
                Tt = function(e) {
                    var t = (0, ue.Sj)().isLarge,
                        n = e.currencySelection,
                        i = e.helpCenter,
                        o = e.languageSelection,
                        a = e.mobileMenu,
                        c = e.mobileSignIn,
                        l = e.profile,
                        u = e.selectedCurrencyId,
                        s = e.selectedFlagUrl,
                        d = e.selectedLanguageId,
                        f = e.ariaLabels,
                        p = e.cta,
                        v = e.signIn,
                        m = e.signUp,
                        g = e.socialEntrypoint,
                        _ = e.notification,
                        h = e.assistant,
                        b = [];
                    if (n && u && t && b.push(r.createElement(ze, {
                            key: "currencySelection",
                            variant: "desktop",
                            triggerAttributes: {
                                "data-testid": "header-currency-picker-trigger",
                                "aria-label": st(null === f || void 0 === f ? void 0 : f.currencyTrigger)
                            },
                            currencySelection: n,
                            selectedCurrencyId: u
                        })), o && d && t && b.push(r.createElement($e, {
                            key: "languageSelection",
                            variant: "desktop",
                            languageSelection: o,
                            selectedLanguageId: d,
                            selectedFlagUrl: s,
                            triggerAttributes: {
                                "data-testid": "header-language-picker-trigger",
                                "aria-label": st(null === f || void 0 === f ? void 0 : f.languageTrigger)
                            }
                        })), g && t && b.push(r.createElement(gt, It({}, g, {
                            key: "socialEntrypoint"
                        }))), i && t && b.push(r.createElement(Te, {
                            helpCenter: i,
                            key: "helpCenter",
                            triggerAriaLabel: st(null === f || void 0 === f ? void 0 : f.customerSupport)
                        })), h && b.push(r.createElement(lt, It({
                            key: "assistant"
                        }, h))), l && _ && t && b.push(r.createElement(Ct, It({
                            key: "notification"
                        }, _))), t && p && b.push(r.createElement(ue.zx, It({
                            variant: "tertiary-inherit",
                            size: "large"
                        }, p, {
                            key: "cta",
                            attributes: {
                                "data-testid": "header-custom-action-button",
                                "aria-label": st(null === f || void 0 === f ? void 0 : f.cta)
                            }
                        }))), l && _ && !t && b.push(r.createElement(Ct, It({
                            key: "notification",
                            variant: "mobile"
                        }, _))), l) {
                        var y = r.createElement(it, {
                            profile: l,
                            mobile: !t,
                            key: "profile",
                            triggerAriaLabel: st(null === f || void 0 === f ? void 0 : f.profileTrigger, !t),
                            closeAriaLabel: st(null === f || void 0 === f ? void 0 : f.profileClose, !t)
                        });
                        b.push(y)
                    }
                    if (t && m && !l && b.push(r.createElement(ue.zx, It({
                            variant: "secondary"
                        }, m, {
                            key: "signUp",
                            attributes: {
                                "data-testid": "header-sign-up-button",
                                "aria-label": st(null === f || void 0 === f ? void 0 : f.signUp, !t)
                            }
                        }))), t && v && !l && b.push(r.createElement(ue.zx, It({
                            variant: "secondary"
                        }, v, {
                            key: "signIn",
                            attributes: {
                                "data-testid": "header-sign-in-button",
                                "aria-label": st(null === f || void 0 === f ? void 0 : f.signIn, !t)
                            }
                        }))), !t && c && !l) {
                        var E = c.text,
                            O = c.showIndicator,
                            w = At(c, ["text", "showIndicator"]),
                            k = r.createElement(ue.u, {
                                text: E,
                                position: "bottom",
                                hideArrow: !0,
                                key: "mobileSignIn"
                            }, (function(e) {
                                return r.createElement(ue.zx, It({
                                    variant: "tertiary-inherit",
                                    size: "large"
                                }, w, {
                                    attributes: It(It(It({}, c.attributes), e), {
                                        "aria-label": st(null === f || void 0 === f ? void 0 : f.signIn, !t) || c.text,
                                        "data-testid": "header-small-sign-in-button"
                                    })
                                }), O ? r.createElement(ue.vC, {
                                    value: !0
                                }, r.createElement(ue.JO, {
                                    size: "large",
                                    svg: se.AccountUserIcon
                                })) : r.createElement(ue.JO, {
                                    size: "large",
                                    svg: se.AccountUserIcon
                                }))
                            }));
                        b.push(k)
                    }
                    if (!t && a) {
                        var S = r.createElement(ft, {
                            key: "mobileMenu",
                            menu: a,
                            currencySelection: n,
                            selectedCurrencyId: u,
                            languageSelection: o,
                            selectedLanguageId: d,
                            selectedFlagUrl: s,
                            ariaLabels: f
                        });
                        b.push(S)
                    }
                    var C = e.tabs && {
                        tabs: e.tabs,
                        tabsMoreLabel: e.tabsMoreLabel,
                        defaultActiveTabId: e.defaultActiveTabId,
                        activeTabId: e.activeTabId,
                        onTabChange: e.onTabChange
                    };
                    return r.createElement(Ie, It({
                        logo: r.createElement(fe, {
                            condition: e.logoUrl,
                            wrapper: function(t) {
                                return r.createElement("a", {
                                    href: e.logoUrl,
                                    "aria-label": st(null === f || void 0 === f ? void 0 : f.logoUrl),
                                    "data-testid": "header-logo-url"
                                }, t)
                            }
                        }, r.createElement("span", {
                            "data-testid": "header-logo"
                        }, e.logo || r.createElement(de.Wj, null))),
                        variant: e.variant,
                        actions: b,
                        tabsIntroLabel: st(null === f || void 0 === f ? void 0 : f.tabBar, !t)
                    }, C))
                };

            function Pt(e) {
                return r.createElement(ue.sR, {
                    href: e.url,
                    onClick: function() {
                        return (0, j.H)(j.Us.Other, j.yo.Logo)
                    },
                    attributes: {
                        "data-testid": "header-booking-logo",
                        "aria-label": e.label
                    }
                }, r.createElement(de.Wj, null))
            }
            var Nt = n(80827);

            function Lt(e) {
                switch (e) {
                    case "accommodations":
                    default:
                        return se.BedIcon;
                    case "attractions":
                        return se.AttractionsIcon;
                    case "cars":
                        return se.TransportCarIcon;
                    case "airport_taxis":
                        return se.TaxiSignIcon;
                    case "flights":
                        return se.TransportAirplaneIcon;
                    case "packages":
                        return se.TravelLuggageAltIcon
                }
            }
            var Rt, xt = function(e) {
                    return {
                        icon: Lt(e.id),
                        text: e.label || "",
                        id: e.id,
                        href: e.url,
                        attributes: {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }
                },
                Dt = {
                    airport_taxis: !0
                };
            var jt = {
                    webshellux_header_mfe_on_stays_lower_funnel: {
                        tag: (0, U.Z)(Rt || (Rt = (0, S.Z)(["YTTHbXeeVJWcWPaDMWOMHTccTBLWCAWdPZKe"]))),
                        customGoals: ["language_picker_clicked", "currency_picker_clicked", "help_center_clicked", "profile_menu_clicked", "list_your_property_clicked"]
                    }
                },
                Ut = function(e) {
                    var t, n, r = {};
                    return null === (t = jt[e]) || void 0 === t || null === (n = t.customGoals) || void 0 === n || n.forEach((function(t, n) {
                        Object.assign(r, (0, i.Z)({}, t, (function() {
                            return (0, F.pj)(jt[e].tag, n + 1)
                        })))
                    })), {
                        trackExperiment: function() {
                            return (0, F.zm)((0, U.Z)(e))
                        },
                        trackStage: function(t) {
                            return (0, F.ti)((0, U.Z)(e), t)
                        },
                        customGoals: r
                    }
                },
                Ft = Ut("webshellux_header_mfe_on_stays_lower_funnel"),
                Mt = "selected_currency",
                Ht = "currency";
            var Vt = function() {
                    Ft.customGoals.language_picker_clicked(), (0, j.H)(j.Us.Other, j.yo.Language)
                },
                Zt = function() {
                    Ft.customGoals.currency_picker_clicked(), (0, j.H)(j.Us.Other, j.yo.Currency)
                };

            function Gt(e, t) {
                return (0, r.useCallback)((function(n, r) {
                    ! function(e, t) {
                        (0, F.uf)("js_attr_language_selector_used", 1);
                        var n = new URL(window.location.href);
                        n.pathname = n.pathname.replace(/(\.[a-z\-]{2,5})?\.html$/, (function() {
                            return "en-us" !== e.id || t ? ".".concat(e.id, ".html") : ".html"
                        })), n.searchParams.set("lang", e.id), n.searchParams.set("soz", "1"), n.searchParams.set("lang_changed", "1"), window.location.href = n.toString()
                    }(n, function(e) {
                        return "airport_taxis" === e
                    }(e)), (0, j.H)(j.Us.Option, j.yo.Language, {
                        option_name: "language",
                        option_index: r
                    }), "header" === t && K({
                        source: O.Language,
                        currentProduct: e
                    })
                }), [e, t])
            }

            function Bt(e, t) {
                return (0, r.useCallback)((function(n, r) {
                    var i;
                    ! function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mt;
                        (0, F.uf)("js_attr_currency_selector_used", 1);
                        var n = new URLSearchParams(window.location.search);
                        n.set(t, e.id), window.location.search = n.toString()
                    }(n, (i = e, "airport_taxis" === i ? Ht : Mt)), (0, j.H)(j.Us.Option, j.yo.Currency, {
                        option_name: "currency",
                        option_index: r
                    }), "header" === t && K({
                        source: O.Currency,
                        currentProduct: e
                    })
                }), [e, t])
            }
            Object.values({
                support: ["covid19_info", "manage_your_trips", "help_center", "trust_and_safety"],
                discover: ["genius_loyalty", "deals_index", "travel_articles", "booking_business", "traveller_awards", "car_hire", "flight_finder", "restaurant_reservations", "travel_agents"],
                legalAndSettings: ["manage_privacy_settings", "privacy", "terms_and_conditions", "dispute_resolution", "do_not_sell_my_info", "compliance_and_ethics", "legal_footer", "pipl_personalization"],
                partners: ["extranet_login_footer", "partner_help_footer", "list_your_property_footer", "become_affiliate", "become_partner"],
                about: ["about", "how_we_work", "sustainability", "press_center", "careers", "investor_relations", "corp_contact"]
            }).flat();
            var Kt, qt, zt, Yt, Wt, Xt, Qt, Jt, $t = "https://account.booking.com",
                en = "en-gb",
                tn = ["BOOKING_BRANDED", "COBRAND", "HYBRID"],
                nn = function(e) {
                    var t = e.isAuthSyncEnabled ? "csrf_token" : "bhc_csrf_token";
                    return r.createElement("form", {
                        action: e.url,
                        method: "POST",
                        id: e.formId,
                        hidden: !0
                    }, r.createElement("input", {
                        type: "hidden",
                        name: "client_id",
                        value: e.clientId
                    }), r.createElement("input", {
                        type: "hidden",
                        name: "redirect_uri",
                        value: e.callback
                    }), r.createElement("input", {
                        type: "hidden",
                        name: t,
                        value: e.csrfToken
                    }), r.createElement("input", {
                        type: "hidden",
                        name: "state",
                        value: e.state
                    }))
                },
                rn = n(20547),
                on = n(24094),
                an = n(99236),
                cn = function(e) {
                    Ft.customGoals.help_center_clicked(), K({
                        source: O.HelpCenter,
                        currentProduct: e
                    }), (0, j.H)(j.Us.Other, j.yo.CS)
                },
                ln = function(e, t, n, i) {
                    var o = (0, I.QT)(),
                        a = (0, r.useCallback)((function(e) {
                            return o.trans((0, on.t)(e))
                        }), [o]),
                        c = (0, r.useMemo)((function() {
                            return un(e, t, n, a)
                        }), [e, t, a, n]);
                    return {
                        closeAriaLabel: a("a11y_traveller_header_close_menu"),
                        title: a("traveller_header_account_more"),
                        sections: "accommodations" === t && "book" === i ? [] : c
                    }
                },
                un = function(e, t, n, i) {
                    var o = {
                        title: i("traveller_header_account_more_header_settings"),
                        items: [{
                            text: e.about.label,
                            href: e.about.url,
                            icon: r.createElement(se.InfoSignIcon, null)
                        }, {
                            text: e.careers.label,
                            href: e.careers.url,
                            icon: r.createElement(se.JobSearchProfileIcon, null)
                        }, function() {
                            if ("accommodations" === t) {
                                var n = e.become_affiliate;
                                if (n) return {
                                    text: n.label,
                                    href: n.url,
                                    icon: r.createElement(se.PropertyPreferredIcon, null)
                                }
                            }
                        }(), {
                            text: e.press_center.label,
                            href: e.press_center.url,
                            icon: r.createElement(se.NewspapersIcon, null)
                        }, {
                            text: e.privacy.label,
                            href: e.privacy.url,
                            icon: r.createElement(se.FoodCookieIcon, null)
                        }, {
                            text: e.terms_and_conditions.label,
                            href: e.terms_and_conditions.url,
                            icon: r.createElement(se.FileInfoIcon, null)
                        }, {
                            text: e.legal.label,
                            href: e.legal.url,
                            icon: r.createElement(se.ComparisonIcon, null)
                        }].filter(an.f)
                    };
                    if ("accommodations" === t) {
                        var a = e;
                        return [{
                            items: [function() {
                                if (n.allowAppDownload) {
                                    var t = e.app_download;
                                    return t && {
                                        text: t.label,
                                        href: t.url,
                                        icon: r.createElement(se.MobilePhoneIcon, null)
                                    }
                                }
                            }(), function() {
                                if (n.allowGeniusProgram) {
                                    var t = e.genius_loyalty;
                                    return t && {
                                        text: t.label,
                                        href: t.url,
                                        icon: r.createElement(rn.Wn, null)
                                    }
                                }
                            }(), {
                                text: a.list_your_property_footer.label,
                                href: a.list_your_property_footer.url,
                                icon: r.createElement(se.PropertyAddIcon, null),
                                preventDefault: !1,
                                onChoose: function() {
                                    Ft.customGoals.list_your_property_clicked(), (0, j.H)(j.Us.Other, j.yo.ListProperty), K({
                                        source: O.ListProperty,
                                        currentProduct: t
                                    })
                                }
                            }].filter(an.f)
                        }, {
                            title: i("traveller_header_account_header_help"),
                            items: [{
                                text: a.help_center.label,
                                href: a.help_center.url,
                                preventDefault: !1,
                                onChoose: function() {
                                    cn(t)
                                },
                                icon: r.createElement(se.QuestionMarkCircleIcon, null)
                            }, {
                                text: a.dispute_resolution.label,
                                href: a.dispute_resolution.url,
                                icon: r.createElement(se.HandshakeIcon, null)
                            }]
                        }, {
                            title: i("traveller_header_account_more_header_discover"),
                            items: [{
                                text: a.deals_index.label,
                                href: a.deals_index.url,
                                icon: r.createElement(se.PercentageCircleIcon, null)
                            }, a.travel_articles && {
                                text: a.travel_articles.label,
                                href: a.travel_articles.url,
                                icon: r.createElement(se.BookIcon, null)
                            }].filter(an.f)
                        }, o]
                    }
                    return [n.allowAppDownload && e.app_download && {
                        items: [{
                            text: e.app_download.label,
                            href: e.app_download.url,
                            icon: r.createElement(se.MobilePhoneIcon, null)
                        }]
                    }, {
                        title: i("traveller_header_account_header_help"),
                        items: [{
                            text: e.help_center.label,
                            href: e.help_center.url,
                            preventDefault: !1,
                            onChoose: function() {
                                return cn(t)
                            },
                            icon: r.createElement(se.QuestionMarkCircleIcon, null)
                        }]
                    }, {
                        title: i("traveller_header_account_more_header_discover"),
                        items: [e.travel_articles && {
                            text: e.travel_articles.label,
                            href: e.travel_articles.url,
                            icon: r.createElement(se.BookIcon, null)
                        }].filter(an.f)
                    }, o].filter(an.f)
                },
                sn = n(21930),
                dn = "header-mfe-sign-out",
                fn = function(e, t, n) {
                    var i = (0, I.T_)().translate;
                    if (n) return {
                        name: n.userLabel,
                        initials: n.initials || "",
                        avatarUrl: n.avatarUrl,
                        genius: n.geniusLevel > 0,
                        geniusLabel: n.geniusLabel,
                        closeAriaLabel: i("a11y_traveller_header_close_profile_menu"),
                        onOpen: function() {
                            var t;
                            t = e, Ft.customGoals.profile_menu_clicked(), (0, j.H)(j.Us.Other, j.yo.Profile), K({
                                source: O.ProfileAvatar,
                                currentProduct: t
                            })
                        },
                        menu: [{
                            items: [].concat((0, sn.Z)(pn(e, t)), [{
                                text: i("traveller_header_account_sign_out"),
                                attributes: {
                                    form: dn,
                                    type: "submit"
                                },
                                icon: r.createElement(se.SignOutIcon, null)
                            }])
                        }]
                    }
                },
                pn = function(e, t) {
                    return "accommodations" === e ? mn(t) : vn(t)
                },
                vn = function(e) {
                    return [{
                        text: e.settings.label,
                        href: e.settings.url,
                        icon: r.createElement(se.PersonHalfIcon, null)
                    }, {
                        text: e.bookings.label,
                        href: e.bookings.url,
                        icon: r.createElement(se.SuitcaseIcon, null)
                    }, {
                        text: e.rewards_wallet.label,
                        href: e.rewards_wallet.url,
                        icon: r.createElement(pt.H, null)
                    }]
                },
                mn = function(e) {
                    return [{
                        text: e.settings.label,
                        href: e.settings.url,
                        icon: r.createElement(se.PersonHalfIcon, null)
                    }, {
                        text: e.bookings.label,
                        href: e.bookings.url,
                        icon: r.createElement(se.SuitcaseIcon, null)
                    }, {
                        text: e.genius_loyalty.label,
                        href: e.genius_loyalty.url,
                        icon: r.createElement(rn.Wn, null)
                    }, {
                        text: e.rewards_wallet.label,
                        href: e.rewards_wallet.url,
                        icon: r.createElement(pt.H, null)
                    }, {
                        text: e.my_reviews.label,
                        href: e.my_reviews.url,
                        icon: r.createElement(se.PersonChatBubbleIcon, null)
                    }, {
                        text: e.my_wishlist.label,
                        href: e.my_wishlist.url,
                        icon: r.createElement(se.HeartOutlineIcon, null)
                    }]
                },
                gn = function(e, t) {
                    return (0, r.useMemo)((function() {
                        var n, r, i = "";
                        if ("accommodations" === t) {
                            var o = e.list_your_property_footer;
                            if (o) {
                                var a = new URL(o.url);
                                a.searchParams.set("utm_source", "topbar"), n = a.toString(), i = o.label, r = function() {
                                    Ft.customGoals.list_your_property_clicked(), (0, j.H)(j.Us.Other, j.yo.ListProperty), K({
                                        source: O.ListProperty,
                                        currentProduct: t
                                    })
                                }
                            }
                        }
                        if ("airport_taxis" === t) {
                            var c = e;
                            c.cta && (n = c.cta.url, i = c.cta.label)
                        }
                        if (n) return r ? {
                            text: i,
                            href: n,
                            onClick: r
                        } : {
                            text: i,
                            href: n
                        }
                    }), [e, t])
                },
                _n = function(e) {
                    if (tn.includes(e)) return e
                },
                hn = function(e) {
                    return !_n(e)
                },
                bn = function(e, t) {
                    return !!(e && t && t.length) && !!t.includes(e)
                },
                yn = (0, r.createContext)({
                    isHidden: !1
                }),
                En = function(e) {
                    var t = e.children,
                        n = function() {
                            var e = (0, r.useState)(!1),
                                t = (0, k.Z)(e, 2),
                                n = t[0],
                                i = t[1];
                            return (0, r.useEffect)((function() {
                                var e = C.Y.subscribe(T, (function(e, t) {
                                        "sr_map" === t.target || "htMap" === t.target ? i(!0) : i(!1)
                                    })),
                                    t = C.Y.subscribe(P, (function(e) {
                                        i(!1)
                                    }));
                                return function() {
                                    C.Y.unsubscribe(e), C.Y.unsubscribe(t)
                                }
                            }), []), n
                        }();
                    return (0, r.useEffect)((function() {
                        var e, t;
                        C.Y.publish(A);
                        var n = null === (e = window) || void 0 === e || null === (t = e.B) || void 0 === t ? void 0 : t.env;
                        n && (n.__headerInitialized = !0)
                    }), []), r.createElement(yn.Provider, {
                        value: {
                            isHidden: n
                        }
                    }, t)
                },
                On = function() {
                    return (0, r.useContext)(yn)
                },
                wn = n(26662),
                kn = n(66049),
                Sn = n(11378),
                Cn = n(72335);

            function In(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function An(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? In(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Tn(e) {
                var t, n, r, i, o = e.url;
                if ("accommodations" !== e.currentProduct) return o;
                var c = (0, a.T)(),
                    l = (null === (t = c.getUserIdentity()) || void 0 === t ? void 0 : t.authLevel) || 0;
                if (l < 2) {
                    (0, F.ti)((0, U.Z)(Kt || (Kt = (0, S.Z)(["TDXbdeRRYJWcFVbCDVCBOPFHe"]))), 1);
                    var u = "MDOT" !== c.getSiteType() ? 6 : 7;
                    (0, F.ti)((0, U.Z)(qt || (qt = (0, S.Z)(["TDXbdeRRYJWcFVbCDVCBOPFHe"]))), u)
                }
                if (0 === l) {
                    var s = "MDOT" !== c.getSiteType() ? 2 : 3;
                    (0, F.ti)((0, U.Z)(zt || (zt = (0, S.Z)(["TDXbdeRRYJWcFVbCDVCBOPFHe"]))), s)
                } else if (1 === (null === (n = c.getUserIdentity()) || void 0 === n ? void 0 : n.authLevel)) {
                    var d = "MDOT" !== c.getSiteType() ? 4 : 5;
                    (0, F.ti)((0, U.Z)(Yt || (Yt = (0, S.Z)(["TDXbdeRRYJWcFVbCDVCBOPFHe"]))), d)
                }
                return 0 === (0, F.zm)((0, U.Z)(Wt || (Wt = (0, S.Z)(["TDXbdeRRYJWcFVbCDVCBOPFHe"])))) ? o : (0, Cn.w)({
                    encryptedCommonOauthState: c.getEncryptedCommonOauthState(),
                    environment: c.getBPlatformEnvironment(),
                    affiliateId: (null === (r = c.getAffiliate()) || void 0 === r || null === (i = r.id) || void 0 === i ? void 0 : i.toString()) || "",
                    language: c.getLanguage(),
                    actionName: c.getActionName() || "",
                    componentId: "traveller_header",
                    webview: !1,
                    prompt: "sign-in",
                    anon: !1
                })
            }
            var Pn = function(e) {
                var t = (0, I.T_)().translate,
                    n = e.geniusLevelLabels,
                    i = e.languages,
                    o = e.selectedLanguageId,
                    a = e.currencies,
                    c = e.selectedCurrencyId,
                    l = e.guestData,
                    u = a.find((function(e) {
                        return e.id === c
                    })),
                    s = (0, r.useCallback)((function(e, r) {
                        return e ? t("a11y_webshell_header_tools_account_menu_genius", {
                            variables: {
                                user_name: r,
                                genius_level: n[e]
                            }
                        }) : t("a11y_webshell_header_tools_account_menu_no_genius", {
                            variables: {
                                user_name: r
                            }
                        })
                    }), [t, n]);
                return (0, r.useMemo)((function() {
                    var e;
                    return {
                        signIn: {
                            general: t("a11y_webshell_header_tools_sign_in"),
                            mobile: t("a11y_webshell_logged_out_account")
                        },
                        signUp: {
                            general: t("a11y_webshell_header_tools_register"),
                            mobile: t("a11y_webshell_logged_out_account")
                        },
                        customerSupport: t("a11y_webshell_header_tools_support"),
                        menuTrigger: t("a11y_webshell_logged_in_menu"),
                        menuClose: t("a11y_webshell_close_menu"),
                        tabBar: t("a11y_webshell_tab_bar_intro"),
                        languageTrigger: t("a11y_webshell_header_tools_language", {
                            variables: {
                                selected_lang: null === (e = i.find((function(e) {
                                    return e.id === o
                                }))) || void 0 === e ? void 0 : e.title
                            }
                        }),
                        currencyTrigger: u ? t("a11y_webshell_header_tools_currency", {
                            variables: {
                                selected_currency: u.title
                            }
                        }) : "",
                        profileTrigger: {
                            general: l && s(l.geniusLevel, l.userLabel) || "",
                            mobile: t("a11y_webshell_logged_in_my_account")
                        },
                        profileClose: t("a11y_webshell_close_account_menu")
                    }
                }), [t, s, i, o, l, u])
            };

            function Nn(e) {
                var t, n, i, a, c = (0, I.T_)().translate,
                    l = (0, r.useRef)(null),
                    u = (0, r.useState)(null),
                    s = (0, k.Z)(u, 2),
                    d = s[0],
                    f = s[1],
                    p = e.linksCollection,
                    v = e.currencies,
                    m = e.selectedCurrencyId,
                    g = e.selectedLanguageId,
                    _ = e.popularCurrencies,
                    h = e.popularLanguages,
                    b = e.languages,
                    y = e.products,
                    O = e.guestData,
                    w = e.currentProduct,
                    C = e.withoutXPB,
                    A = e.notification,
                    T = e.assistant,
                    P = e.affiliateType,
                    N = e.isUserLoginAllowed,
                    L = void 0 === N || N,
                    R = (0, M.B)(),
                    x = R.siteType,
                    D = R.actionName,
                    K = Bt(w, "header"),
                    z = Gt(w, "header"),
                    Y = {
                        1: c("a11y_traveller_header_account_genius_lev1"),
                        2: c("a11y_traveller_header_account_genius_lev2"),
                        3: c("a11y_traveller_header_account_genius_lev3")
                    },
                    W = Pn({
                        geniusLevelLabels: Y,
                        languages: b,
                        currencies: v,
                        guestData: O,
                        selectedCurrencyId: m,
                        selectedLanguageId: g
                    }),
                    X = function(e) {
                        return !!Dt[e]
                    }(w),
                    Q = (0, U.Z)(Qt || (Qt = (0, S.Z)(["dDfPJKSCYDTLUeXKbEfPYBBVYYT"]))),
                    J = fn(w, p, O),
                    $ = !J && "accommodations" === w,
                    ee = $ && !(0, F.zm)(Q);
                (0, F.ti)(Q, 1), (0, F.ti)(Q, $ ? 2 : 3);
                var te = function(e, t, n, i, a) {
                        var c = (0, r.useState)((function() {
                                return Tn({
                                    currentProduct: n,
                                    url: e.sign_in.url
                                })
                            })),
                            l = (0, k.Z)(c, 2),
                            u = l[0],
                            s = l[1],
                            d = (0, r.useState)((function() {
                                return Tn({
                                    currentProduct: n,
                                    url: e.register.url
                                })
                            })),
                            f = (0, k.Z)(d, 2),
                            p = f[0],
                            v = f[1],
                            m = (0, M.B)(),
                            g = m.siteType,
                            _ = m.actionName;
                        return (0, r.useEffect)((function() {
                            try {
                                new URL(u), new URL(p)
                            } catch (e) {
                                (0, o.c1)("Auth placeholder(s) should have been replaced with actual links - SignIn: ".concat(u, ", SignUp: ").concat(p)), s($t), v($t)
                            }
                        }), [u, p]), (0, r.useMemo)((function() {
                            try {
                                var r = new URL(u);
                                !i && t && r.searchParams.set("redirect_uri", t);
                                var c = new URL(p);
                                !i && t && c.searchParams.set("redirect_uri", t), (0, wn.Z)((0, kn.Z)(Xt || (Xt = (0, S.Z)(["dDfPSSaPXZWUfScTTSTEUbCBMeOC"])))) && (r.searchParams.set("variant", a ? "3" : "4"), c.searchParams.set("variant", a ? "3" : "4")), s(r.toString()), v(c.toString())
                            } catch (d) {
                                var l = /^{[A-Z_]+}(&[a-z]+=[a-z]+)*$/g;
                                i && u.match(l) && p.match(l) || ((0, o.c1)("Invalid placeholder(s). signInURL: ".concat(u, ", signUpURL: ").concat(p, ". Falling back to default Auth URLs")), s($t), v($t))
                            }
                            return {
                                signIn: {
                                    text: e.sign_in.label,
                                    onClick: function() {
                                        (0, j.H)(j.Us.Other, j.yo.SignIn), q({
                                            source: E.Login,
                                            siteType: g,
                                            currentProduct: n
                                        })
                                    },
                                    href: u,
                                    className: "js-header-login-link"
                                },
                                signUp: {
                                    text: e.register.label,
                                    onClick: function() {
                                        (0, j.H)(j.Us.Other, j.yo.SignUp), q({
                                            source: E.DdotRegister,
                                            siteType: g,
                                            currentProduct: n
                                        })
                                    },
                                    href: p,
                                    className: "js-header-login-link"
                                }
                            }
                        }), [u, p, t, e.sign_in.label, e.register.label, i, g, _, n, a])
                    }(p, d, w, X, ee),
                    ne = te.signIn,
                    re = te.signUp,
                    ie = On().isHidden ? {
                        display: "none"
                    } : void 0,
                    oe = {
                        title: p.help_center.label,
                        href: p.help_center.url,
                        onClick: function() {
                            cn(w)
                        }
                    },
                    ae = {
                        onOpen: Vt,
                        title: c("traveller_header_account_select_language"),
                        closeAriaLabel: c("a11y_webshell_close_language_selector"),
                        onChoose: z,
                        popular: {
                            title: c("traveller_header_account_lang_most_often"),
                            items: h
                        },
                        all: {
                            title: c("traveller_header_account_lang_all"),
                            items: b
                        }
                    },
                    ue = {
                        onOpen: Zt,
                        title: c("traveller_header_account_select_your_currency"),
                        closeAriaLabel: c("a11y_webshell_close_currency_selector"),
                        onChoose: K,
                        popular: {
                            title: c("traveller_header_account_currency_most_often"),
                            items: _
                        },
                        all: {
                            title: c("traveller_header_account_currency_all"),
                            items: v
                        }
                    },
                    se = p.sign_out,
                    de = null === se || void 0 === se ? void 0 : se.attributes,
                    fe = (0, r.useCallback)((function(e) {
                        return function(e, t) {
                            var n = e.find((function(e) {
                                return e.id === t
                            }));
                            if (n && n.href) {
                                (0, F.r9)("xpb_total_clicks"), (0, j.mk)(j.Us.Vertical, n.id);
                                var r = function(e) {
                                    switch (e) {
                                        case "accommodations":
                                            return "xpb_accommodation";
                                        case "attractions":
                                            return "xpb_attractions";
                                        case "cars":
                                            return "xpb_rentalcars";
                                        case "airport_taxis":
                                            return "xpb_rideways";
                                        case "flights":
                                            return "xpb_flights";
                                        case "packages":
                                            return "xpb_packages";
                                        default:
                                            return
                                    }
                                }(t);
                                r && (0, F.r9)(r), (0, wn.Z)((0, kn.Z)(Jt || (Jt = (0, S.Z)(["cZbRAPPeEfWe"])))) && (0, Sn.w7)(Sn._N.DATA_LAYER, Sn.Kg.NAVIGATION_BAR_INTERACTION, {
                                    navigation_element: n.id
                                }), window.location.href = n.href
                            }
                        }(y, e)
                    }), [y]),
                    pe = function(e) {
                        var t = e.wechat_qr;
                        if (t) return function(e) {
                            var t, n = e.label,
                                r = null !== (t = e.subLabel) && void 0 !== t ? t : "";
                            return {
                                type: "wechat",
                                entrypointAriaLabel: n,
                                qrCodeUrl: e.url,
                                qrCodeAlt: n,
                                title: n,
                                subtitle: r
                            }
                        }(t)
                    }(p),
                    ve = ln(p, e.currentProduct, {
                        allowAppDownload: hn(P),
                        allowGeniusProgram: L
                    }, D),
                    me = gn(p, e.currentProduct);
                (0, r.useEffect)((function() {
                    var e = l.current;
                    if (e) {
                        var t = function() {
                            return f(window.location.href)
                        };
                        return e.addEventListener("shell__navigate", t),
                            function() {
                                e.removeEventListener("shell__navigate", t)
                            }
                    }(0, o.c1)("Wrong root ref for Header MFE")
                }), []),
                function(e) {
                    var t = e.isUserLoggedIn,
                        n = e.currentProduct,
                        i = (0, M.B)(),
                        o = i.siteType,
                        a = i.actionName;
                    (0, r.useEffect)((function() {
                        "accommodations" === n && ([V, Z, G, B].forEach((function(e) {
                            (0, F.zm)(e), (0, F.ti)(e, 1), "index" === a ? (0, F.ti)(e, 2) : "searchresults" === a || "searchresults_irene" === a ? (0, F.ti)(e, 3) : "hotel" === a && (0, F.ti)(e, 4)
                        })), (0, F.pj)(V, 1), t ? o === H.N.WWW ? (0, F.pj)(V, 2) : (0, F.pj)(V, 3) : o === H.N.WWW ? (0, F.pj)(V, 4) : (0, F.pj)(V, 5))
                    }), [t, o, a, n])
                }({
                    isUserLoggedIn: Boolean(J),
                    currentProduct: e.currentProduct
                }), (0, le.OR)(le.FP.MOBILE_MENU_OPEN, (function() {
                    q({
                        source: E.MdotMenu,
                        siteType: x,
                        currentProduct: w
                    })
                })), (0, j.hL)(C ? [] : y, w, "full", null === O || void 0 === O ? void 0 : O.geniusLevel, m, g), (0, j.Gc)(), (0, j.CK)();
                var ge = e.logo || r.createElement(Pt, {
                        url: hn(P) || bn(P, ["BOOKING_BRANDED", "COBRAND"]) ? p.logo.url : void 0,
                        label: p.logo.label
                    }),
                    _e = L ? {
                        signIn: ne,
                        signUp: re,
                        profile: J,
                        mobileSignIn: An({
                            showIndicator: ee
                        }, ne)
                    } : {};
                e.hideTaxiSignIn && (_e = J ? {
                    profile: J
                } : {});
                var he = e.withoutXPB ? {} : {
                    tabsMoreLabel: c("traveller_header_xbar_more"),
                    tabs: y,
                    activeTabId: null === (t = y.find((function(e) {
                        return e.id === w
                    }))) || void 0 === t ? void 0 : t.id,
                    onTabChange: fe
                };
                return r.createElement("div", {
                    ref: l,
                    className: "web-shell-header-mfe",
                    "data-testid": "web-shell-header-mfe",
                    style: ie
                }, r.createElement(Tt, (0, ce.Z)({
                    logo: ge,
                    helpCenter: oe,
                    ariaLabels: W,
                    cta: me,
                    mobileMenu: ve,
                    selectedCurrencyId: m,
                    selectedLanguageId: g,
                    currencySelection: ue,
                    languageSelection: ae,
                    socialEntrypoint: pe,
                    notification: A,
                    assistant: T
                }, _e, he)), L && J && de && r.createElement(nn, {
                    formId: dn,
                    url: se.url,
                    clientId: de.clientId,
                    callback: null !== (n = de.callback) && void 0 !== n ? n : void 0,
                    csrfToken: null !== (i = de.csrfToken) && void 0 !== i ? i : void 0,
                    state: null !== (a = de.state) && void 0 !== a ? a : void 0,
                    isAuthSyncEnabled: X
                }))
            }

            function Ln(e) {
                var t = (0, I.T_)().translate,
                    n = (0, Nt.K)({
                        pathname: "/help.".concat(e.lang, ".html")
                    }).toString(),
                    i = {
                        title: t("header_menu_cs_help"),
                        href: n,
                        onClick: cn
                    };
                (0, j.hL)([], e.currentProduct, "fallback"),
                function(e) {
                    var t = e.currentProduct;
                    (0, r.useEffect)((function() {
                        "accommodations" === t && (0, F.pj)(Z, 1)
                    }), [t])
                }({
                    currentProduct: e.currentProduct
                });
                var o = (0, Nt.K)({
                    host: "app",
                    pathname: "/"
                });
                return r.createElement("div", {
                    className: "web-shell-header-mfe",
                    "data-testid": "web-shell-header-mfe"
                }, r.createElement(Tt, {
                    logo: r.createElement(Pt, {
                        url: o.toString()
                    }),
                    helpCenter: i,
                    mobileMenu: {
                        closeAriaLabel: t("a11y_traveller_header_close_menu"),
                        title: t("traveller_header_account_more"),
                        sections: [{
                            title: t("traveller_header_account_header_help"),
                            items: [{
                                text: i.title,
                                href: i.href,
                                onChoose: function() {
                                    return cn()
                                },
                                icon: r.createElement(se.QuestionMarkCircleIcon, null)
                            }]
                        }]
                    }
                }))
            }

            function Rn(e) {
                var t, n, i = e.linksCollection,
                    o = e.currentProduct;
                return (0, j.hL)([], o, "minimal"), r.createElement("div", {
                    className: "web-shell-header-mfe",
                    "data-testid": "web-shell-header-mfe"
                }, r.createElement(Tt, {
                    logo: r.createElement(Pt, {
                        url: null === i || void 0 === i || null === (t = i.logo) || void 0 === t ? void 0 : t.url,
                        label: null === i || void 0 === i || null === (n = i.logo) || void 0 === n ? void 0 : n.label
                    })
                }))
            }
            var xn, Dn, jn, Un, Fn = "c44fb04555",
                Mn = function() {
                    return Mn = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, Mn.apply(this, arguments)
                },
                Hn = function(e) {
                    var t = e.imageAlt,
                        n = e.imageUrl,
                        i = e.imageHref,
                        o = e.preamble,
                        a = e.preambleCaps,
                        c = e.preambleColor,
                        l = e.preambleStyle,
                        u = e.onClickLink,
                        s = (0, r.useMemo)((function() {
                            return Mn(Mn(Mn({
                                color: c
                            }, a ? {
                                textTransform: "uppercase"
                            } : {}), "ITALIC" === l ? {
                                fontStyle: "italic"
                            } : {}), "BOLD" === l ? {
                                fontWeight: "bold"
                            } : {})
                        }), [a, c, l]),
                        d = function(e) {
                            var t, n, r, i = (0, ue.Sj)(),
                                o = i.isSmall,
                                a = i.isMedium,
                                c = i.isLarge;
                            return o ? e.small : a ? null !== (t = e.medium) && void 0 !== t ? t : e.small : c && null !== (r = null !== (n = e.large) && void 0 !== n ? n : e.medium) && void 0 !== r ? r : e.small
                        }({
                            small: 30,
                            large: 50
                        }),
                        f = {
                            "data-testid": "header-partner-branding"
                        };
                    return (0, ue.Sj)().isSmall ? r.createElement(ue.xu, {
                        padding: 1,
                        className: Fn,
                        attributes: f
                    }, r.createElement(ue.Kq, {
                        alignItems: "center"
                    }, r.createElement(ue.sR, {
                        href: i,
                        attributes: i ? {
                            target: "_blank"
                        } : {},
                        onClick: u
                    }, r.createElement(ue.Ee, {
                        alt: t,
                        src: n,
                        height: d
                    })))) : r.createElement(ue.xu, {
                        padding: 2,
                        className: Fn,
                        attributes: f
                    }, r.createElement(ue.Kq, {
                        direction: "column",
                        gap: 0,
                        alignItems: "center"
                    }, r.createElement(ue.Kq.Item, null, r.createElement(ue.xv, {
                        variant: "emphasized_2",
                        attributes: {
                            style: s
                        }
                    }, o)), r.createElement(ue.Kq.Item, null, r.createElement(ue.sR, {
                        href: i,
                        attributes: i ? {
                            target: "_blank"
                        } : {},
                        onClick: u
                    }, r.createElement(ue.Ee, {
                        alt: t,
                        src: n,
                        height: d
                    })))))
                },
                Vn = n(23673),
                Zn = function(e) {
                    var t = e.cobrandImageHref,
                        n = e.cobrandImageURL,
                        i = e.cobrandLogoPreamble,
                        o = e.cobrandPreambleCaps,
                        a = e.cobrandPreambleColor,
                        c = e.cobrandPreambleStyle,
                        l = (0, I.T_)().translate,
                        u = (0, r.useMemo)((function() {
                            return l("IN_COOPERATION_WITH" === i ? "in_cooperation_with" : "sp_partnership_with_another_company")
                        }), [i, l]),
                        s = (0, r.useMemo)((function() {
                            return c && ["ITALIC", "BOLD"].includes(c) ? c : "NORMAL"
                        }), [c]);
                    return n ? r.createElement(r.Fragment, null, r.createElement(Vn.v, {
                        tag: (0, U.Z)(jn || (jn = (0, S.Z)(["YTTHbXeeAeJINUFJUAcWMHTcfaNKe"]))),
                        customGoal: 1
                    }), r.createElement(Vn.v, {
                        tag: (0, U.Z)(Un || (Un = (0, S.Z)(["YTTHbXeeVLDKZeVAZNdAYbQIdReLJWcC"]))),
                        customGoal: 1
                    }), r.createElement(Hn, {
                        imageUrl: n,
                        imageHref: null !== t && void 0 !== t ? t : void 0,
                        imageAlt: l("sp_funnel_trusted_affiliate"),
                        preamble: u,
                        preambleCaps: null !== o && void 0 !== o && o,
                        preambleColor: null !== a && void 0 !== a ? a : void 0,
                        preambleStyle: s,
                        onClickLink: function() {
                            (0, F.pj)((0, U.Z)(xn || (xn = (0, S.Z)(["YTTHbXeeAeJINUFJUAcWMHTcfaNKe"]))), 2), (0, F.pj)((0, U.Z)(Dn || (Dn = (0, S.Z)(["YTTHbXeeVLDKZeVAZNdAYbQIdReLJWcC"]))), 2)
                        }
                    })) : null
                };
            var Gn = n(17166);

            function Bn(e) {
                return (e || []).reduce((function(e, t) {
                    return e[t.id] = t, e
                }), {})
            }
            var Kn = function(e) {
                return function(t) {
                    var n;
                    return null !== (n = null === t || void 0 === t ? void 0 : t.map(e)) && void 0 !== n ? n : []
                }
            };

            function qn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function zn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qn(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Yn(e) {
                return (0, j.Vh)(), r.createElement(ae, {
                    fallbackComponent: Wn,
                    currentProduct: e.currentProduct
                }, r.createElement(En, null, r.createElement(Xn, e)))
            }

            function Wn(e) {
                var t = e.currentProduct,
                    n = (0, a.T)().getLanguage();
                return r.createElement(Ln, {
                    currentProduct: t,
                    lang: n
                })
            }

            function Xn(e) {
                return "minimal" === e.variant ? r.createElement(Qn, e) : r.createElement(er, e)
            }

            function Qn(e) {
                var t = e.currentProduct,
                    n = function(e, t) {
                        var n = (0, s.Vo)(e) ? {
                            debugParams: {
                                mockUserData: m(e)
                            }
                        } : {};
                        return (0, c.a)(u, {
                            context: {
                                headers: (0, d.l)(e, v)
                            },
                            variables: {
                                productShellInput: p(p({
                                    product: t.toUpperCase()
                                }, g(e, t)), n)
                            }
                        })
                    }((0, a.T)(), t),
                    i = n.data,
                    o = Bn((null === i || void 0 === i ? void 0 : i.productShell.links) || []);
                return r.createElement(Rn, {
                    linksCollection: o,
                    currentProduct: t
                })
            }
            var Jn = Kn((function(e) {
                    var t, n = e.countryFlag,
                        r = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase(),
                        i = null !== (t = (0, Gn.hX)({
                            setName: "images-flags",
                            assetName: r,
                            density: 3
                        })) && void 0 !== t ? t : "";
                    return {
                        id: e.code.toLowerCase(),
                        title: e.name,
                        flagUrl: i
                    }
                })),
                $n = Kn((function(e) {
                    var t = e.code,
                        n = e.name;
                    return {
                        id: t,
                        sign: "hotel_currency" === t ? e.symbol : e.code,
                        title: n
                    }
                }));

            function er(e) {
                var t, n, i, u, f, _, h, b, y, E, O, w, k = e.currentProduct,
                    S = (0, a.T)(),
                    C = S.getCurrency() || "EUR",
                    I = Y(k),
                    A = J(),
                    T = function(e, t) {
                        var n = (0, s.Vo)(e) ? {
                            debugParams: {
                                mockUserData: m(e)
                            }
                        } : {};
                        return (0, c.a)(l, {
                            context: {
                                headers: (0, d.l)(e, v)
                            },
                            variables: {
                                productShellInput: p(p({
                                    product: t.toUpperCase()
                                }, g(e, t)), n)
                            }
                        })
                    }(S, k),
                    P = T.loading,
                    N = T.data,
                    L = T.error;
                if (P) return r.createElement("div", null);
                var R = (null === N || void 0 === N || null === (t = N.productShell) || void 0 === t ? void 0 : t.links) && (null === N || void 0 === N || null === (n = N.productShell) || void 0 === n ? void 0 : n.products),
                    x = R ? void 0 : new Error("Empty answer from Shell API"),
                    D = null !== L && void 0 !== L ? L : x;
                if (D && (0, o.eK)(D), !R) return r.createElement(Wn, {
                    currentProduct: k
                });
                var j = N.productShell,
                    U = null !== (i = null === (u = j.languages) || void 0 === u ? void 0 : u.selectedLanguage) && void 0 !== i ? i : en,
                    F = Bn(j.links || []),
                    M = j.products || [],
                    H = j.guestAccount ? function(e) {
                        var t, n, r, i, o, a, c;
                        return {
                            userLabel: e.userLabel,
                            initials: null !== (t = e.initials) && void 0 !== t ? t : void 0,
                            avatarUrl: null === (n = e.avatar) || void 0 === n || null === (r = n.sizedUrls) || void 0 === r ? void 0 : r.square64,
                            geniusLevel: null !== (i = null === (o = e.geniusStatus) || void 0 === o ? void 0 : o.level) && void 0 !== i ? i : 0,
                            geniusLabel: null !== (a = null === (c = e.geniusStatus) || void 0 === c ? void 0 : c.label) && void 0 !== a ? a : ""
                        }
                    }(j.guestAccount) : void 0,
                    V = null === (f = null === (_ = j.affiliateSettings) || void 0 === _ ? void 0 : _.isUserLoginAllowed) || void 0 === f || f,
                    Z = null === (h = j.affiliateSettings) || void 0 === h ? void 0 : h.cobrand,
                    G = zn(zn({}, A), {}, {
                        enabled: A.enabled && V
                    }),
                    B = "airport_taxis" === k && "1" !== S.getBasePageUrl().searchParams.get("__taxis_show_signin");
                return r.createElement(r.Fragment, null, r.createElement(Nn, {
                    currencies: $n(null === (b = j.currencies) || void 0 === b ? void 0 : b.all),
                    popularCurrencies: $n(null === (y = j.currencies) || void 0 === y ? void 0 : y.top),
                    languages: Jn(null === (E = j.languages) || void 0 === E ? void 0 : E.all),
                    popularLanguages: Jn(null === (O = j.languages) || void 0 === O ? void 0 : O.popular),
                    products: M.map(xt),
                    linksCollection: F,
                    selectedLanguageId: U,
                    selectedCurrencyId: C,
                    guestData: H,
                    logo: e.logo,
                    currentProduct: k,
                    withoutXPB: e.withoutXPB,
                    notification: I,
                    assistant: G,
                    affiliateType: _n(null === (w = j.affiliateSettings) || void 0 === w ? void 0 : w.productType),
                    isUserLoginAllowed: V,
                    hideTaxiSignIn: B
                }), Z && r.createElement(Zn, Z))
            }
            var tr = function() {
                return r.createElement(Yn, {
                    currentProduct: "accommodations"
                })
            }
        },
        87703: function(e, t, n) {
            "use strict";
            n.d(t, {
                FP: function() {
                    return i
                },
                KC: function() {
                    return r
                },
                Nu: function() {
                    return c
                },
                OR: function() {
                    return l
                }
            });
            var r, i, o = n(75928);
            ! function(e) {
                e.HEADER = "header", e.FOOTER = "footer", e.GLOBAL_ALERT = "global_alert"
            }(r || (r = {})),
            function(e) {
                e.LOGO_CLICKED = "logo_clicked", e.SOCIAL_ENTRY_CLICKED = "social-entrypoint_clicked", e.HELP_CENTER_CLICKED = "help-center_clicked", e.LIST_PROPERTY_CLICKED = "list-property_clicked", e.SIGN_UP_CLICKED = "sign-up_clicked", e.SIGN_IN_CLICKED = "sign-in_clicked", e.PROFILE_CLICKED = "profile_clicked", e.PROFILE_OPTION_CHOSEN = "profile-option_chosen", e.NOTIF_CLICKED = "notification_clicked", e.PICKER_CLICKED = "picker_clicked", e.PICKER_OPTION_CHOSEN = "picker-option_chosen", e.TAB_EXPOSED = "xpb-tab_exposed", e.TAB_CLICKED = "xpb-tab_clicked", e.MOBILE_MENU_OPEN = "mobile_menu_open", e.MOBILE_MENU_CLOSE = "mobile_menu_close", e.ASSISTANT_CLICKED = "assistant_clicked", e.CURRENCY_PICKER_OPEN = "currency-picker_open", e.CURRENCY_PICKER_CLOSE = "currency-picker_close"
            }(i || (i = {}));
            var a = function(e, t) {
                    return void 0 === t && (t = r.HEADER), "".concat("WEB_SHELL_UX", "_").concat(t, "_").concat(e)
                },
                c = function(e, t) {
                    if (window) {
                        var n = function(e, t) {
                            return new CustomEvent(a(e), {
                                detail: t
                            })
                        }(e, t);
                        window.dispatchEvent(n)
                    }
                },
                l = function(e, t) {
                    (0, o.Z)((function() {
                        return window.addEventListener(a(e), t),
                            function() {
                                window.removeEventListener(a(e), t)
                            }
                    }), [e, t])
                }
        },
        2419: function(e, t, n) {
            "use strict";
            n.d(t, {
                YD: function() {
                    return m
                },
                df: function() {
                    return v
                }
            });
            var r = n(32735);

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i.apply(this, arguments)
            }

            function o(e, t) {
                return o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, o(e, t)
            }
            var a = new Map,
                c = new WeakMap,
                l = 0,
                u = void 0;

            function s(e) {
                return Object.keys(e).sort().filter((function(t) {
                    return void 0 !== e[t]
                })).map((function(t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (c.has(n) || (l += 1, c.set(n, l.toString())), c.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function d(e, t, n, r) {
                if (void 0 === n && (n = {}), void 0 === r && (r = u), "undefined" === typeof window.IntersectionObserver && void 0 !== r) {
                    var i = e.getBoundingClientRect();
                    return t(r, {
                            isIntersecting: r,
                            target: e,
                            intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                            time: 0,
                            boundingClientRect: i,
                            intersectionRect: i,
                            rootBounds: i
                        }),
                        function() {}
                }
                var o = function(e) {
                        var t = s(e),
                            n = a.get(t);
                        if (!n) {
                            var r, i = new Map,
                                o = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        var n, o = t.isIntersecting && r.some((function(e) {
                                            return t.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((function(e) {
                                            e(o, t)
                                        }))
                                    }))
                                }), e);
                            r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                id: t,
                                observer: o,
                                elements: i
                            }, a.set(t, n)
                        }
                        return n
                    }(n),
                    c = o.id,
                    l = o.observer,
                    d = o.elements,
                    f = d.get(e) || [];
                return d.has(e) || d.set(e, f), f.push(t), l.observe(e),
                    function() {
                        f.splice(f.indexOf(t), 1), 0 === f.length && (d.delete(e), l.unobserve(e)), 0 === d.size && (l.disconnect(), a.delete(c))
                    }
            }
            var f = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function p(e) {
                return "function" !== typeof e.children
            }
            var v = function(e) {
                var t, n;

                function a(t) {
                    var n;
                    return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(e) {
                        n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
                            inView: !!n.props.initialInView,
                            entry: void 0
                        })), n.node = e || null, n.observeNode()
                    }, n.handleChange = function(e, t) {
                        e && n.props.triggerOnce && n.unobserve(), p(n.props) || n.setState({
                            inView: e,
                            entry: t
                        }), n.props.onChange && n.props.onChange(e, t)
                    }, n.state = {
                        inView: !!t.initialInView,
                        entry: void 0
                    }, n
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
                var c = a.prototype;
                return c.componentDidUpdate = function(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, c.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, c.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            r = e.rootMargin,
                            i = e.trackVisibility,
                            o = e.delay,
                            a = e.fallbackInView;
                        this._unobserveCb = d(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r,
                            trackVisibility: i,
                            delay: o
                        }, a)
                    }
                }, c.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, c.render = function() {
                    if (!p(this.props)) {
                        var e = this.state,
                            t = e.inView,
                            n = e.entry;
                        return this.props.children({
                            inView: t,
                            entry: n,
                            ref: this.handleNode
                        })
                    }
                    var o = this.props,
                        a = o.children,
                        c = o.as,
                        l = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(o, f);
                    return r.createElement(c || "div", i({
                        ref: this.handleNode
                    }, l), a)
                }, a
            }(r.Component);

            function m(e) {
                var t = void 0 === e ? {} : e,
                    n = t.threshold,
                    i = t.delay,
                    o = t.trackVisibility,
                    a = t.rootMargin,
                    c = t.root,
                    l = t.triggerOnce,
                    u = t.skip,
                    s = t.initialInView,
                    f = t.fallbackInView,
                    p = r.useRef(),
                    v = r.useState({
                        inView: !!s
                    }),
                    m = v[0],
                    g = v[1],
                    _ = r.useCallback((function(e) {
                        void 0 !== p.current && (p.current(), p.current = void 0), u || e && (p.current = d(e, (function(e, t) {
                            g({
                                inView: e,
                                entry: t
                            }), t.isIntersecting && l && p.current && (p.current(), p.current = void 0)
                        }), {
                            root: c,
                            rootMargin: a,
                            threshold: n,
                            trackVisibility: o,
                            delay: i
                        }, f))
                    }), [Array.isArray(n) ? n.toString() : n, c, a, l, u, o, f, i]);
                (0, r.useEffect)((function() {
                    p.current || !m.entry || l || u || g({
                        inView: !!s
                    })
                }));
                var h = [_, m.inView, m.entry];
                return h.ref = h[0], h.inView = h[1], h.entry = h[2], h
            }
            v.displayName = "InView", v.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
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
                    o = n.hasOwnProperty,
                    a = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    c = "function" == typeof Symbol ? Symbol : {},
                    l = c.iterator || "@@iterator",
                    u = c.asyncIterator || "@@asyncIterator",
                    s = c.toStringTag || "@@toStringTag";

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
                } catch (N) {
                    d = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function f(e, t, n, r) {
                    var i = t && t.prototype instanceof m ? t : m,
                        o = Object.create(i.prototype),
                        c = new A(r || []);
                    return a(o, "_invoke", {
                        value: k(e, n, c)
                    }), o
                }

                function p(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = f;
                var v = {};

                function m() {}

                function g() {}

                function _() {}
                var h = {};
                d(h, l, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    y = b && b(b(T([])));
                y && y !== n && o.call(y, l) && (h = y);
                var E = _.prototype = m.prototype = Object.create(h);

                function O(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        d(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    function n(i, a, c, l) {
                        var u = p(e[i], e, a);
                        if ("throw" !== u.type) {
                            var s = u.arg,
                                d = s.value;
                            return d && "object" == r(d) && o.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                n("next", e, c, l)
                            }), (function(e) {
                                n("throw", e, c, l)
                            })) : t.resolve(d).then((function(e) {
                                s.value = e, c(s)
                            }), (function(e) {
                                return n("throw", e, c, l)
                            }))
                        }
                        l(u.arg)
                    }
                    var i;
                    a(this, "_invoke", {
                        value: function(e, r) {
                            function o() {
                                return new t((function(t, i) {
                                    n(e, r, t, i)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function k(e, t, n) {
                    var r = "suspendedStart";
                    return function(i, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw o;
                            return P()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var c = S(a, n);
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

                function S(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return v;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return v
                    }
                    var r = p(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, v;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, v) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, v)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function I(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function A(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function T(e) {
                    if (e) {
                        var t = e[l];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return g.prototype = _, a(E, "constructor", {
                    value: _,
                    configurable: !0
                }), a(_, "constructor", {
                    value: g,
                    configurable: !0
                }), g.displayName = d(_, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _, d(e, s, "GeneratorFunction")), e.prototype = Object.create(E), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, O(w.prototype), d(w.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = w, t.async = function(e, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new w(f(e, n, r, i), o);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, O(E), d(E, s, "Generator"), d(E, l, (function() {
                    return this
                })), d(E, "toString", (function() {
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
                }, t.values = T, A.prototype = {
                    constructor: A,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
                            for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var c = o.call(i, "catchLoc"),
                                    l = o.call(i, "finallyLoc");
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
                            if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), v
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    I(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: T(e),
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
        2312: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, r(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        82248: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(45901);

            function i(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && (0, r.Z)(e, t)
            }
        },
        54693: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(36655),
                i = n(93173);

            function o(e, t) {
                if (t && ("object" === (0, r.Z)(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, i.Z)(e)
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
                    return o
                }
            });
            var r = n(37017);
            var i = n(49139);

            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, r.Z)(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || (0, i.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        36655: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);
//# sourceMappingURL=https://s3-main-01.booking.com/internal-static/capla/static/js/93.fbca0145.chunk.js.map