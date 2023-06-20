/*! For license information please see 880.060089dc.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe"] = self["b-index-lp-web-mfe"] || []).push([
    [880], {
        59006: function(e, n, t) {
            "use strict";
            t.d(n, {
                V: function() {
                    return o
                }
            });
            var i = t(66022),
                a = t(82497),
                r = t(14222),
                o = function() {
                    function e(e, n) {
                        this.isMounted = !1, this.previousOptions = {}, this.context = {}, this.options = {}, this.options = e || {}, this.context = n || {}
                    }
                    return e.prototype.getOptions = function() {
                        return this.options
                    }, e.prototype.setOptions = function(e, n) {
                        void 0 === n && (n = !1), n && !(0, a.D)(this.options, e) && (this.previousOptions = this.options), this.options = e
                    }, e.prototype.unmount = function() {
                        this.isMounted = !1
                    }, e.prototype.refreshClient = function() {
                        var e = this.options && this.options.client || this.context && this.context.client;
                        __DEV__ ? (0, i.kG)(!!e, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : (0, i.kG)(!!e, 29);
                        var n = !1;
                        return e !== this.client && (n = !0, this.client = e, this.cleanup()), {
                            client: this.client,
                            isNew: n
                        }
                    }, e.prototype.verifyDocumentType = function(e, n) {
                        var t = (0, r.E2)(e),
                            a = (0, r.mw)(n),
                            o = (0, r.mw)(t.type);
                        __DEV__ ? (0, i.kG)(t.type === n, "Running a " + a + " requires a graphql " + a + ", but a " + o + " was used instead.") : (0, i.kG)(t.type === n, 30)
                    }, e
                }()
        },
        13260: function(e, n, t) {
            "use strict";
            t.d(n, {
                a: function() {
                    return a
                }
            });
            var i = t(51099);

            function a(e, n) {
                return (0, i.r)(e, n, !1)
            }
        },
        51099: function(e, n, t) {
            "use strict";
            t.d(n, {
                r: function() {
                    return c
                }
            });
            var i = t(31191),
                a = (t(66022), t(32735)),
                r = t(82497),
                o = t(24605),
                d = t(6637),
                l = t(14222),
                s = function(e) {
                    function n(n) {
                        var t = n.options,
                            i = n.context,
                            a = n.onNewData,
                            r = e.call(this, t, i) || this;
                        return r.runLazy = !1, r.previous = Object.create(null), r.runLazyQuery = function(e) {
                            r.cleanup(), r.runLazy = !0, r.lazyOptions = e, r.onNewData()
                        }, r.obsRefetch = function(e) {
                            var n;
                            return null === (n = r.currentObservable) || void 0 === n ? void 0 : n.refetch(e)
                        }, r.obsFetchMore = function(e) {
                            var n;
                            return null === (n = r.currentObservable) || void 0 === n ? void 0 : n.fetchMore(e)
                        }, r.obsUpdateQuery = function(e) {
                            var n;
                            return null === (n = r.currentObservable) || void 0 === n ? void 0 : n.updateQuery(e)
                        }, r.obsStartPolling = function(e) {
                            var n;
                            null === (n = r.currentObservable) || void 0 === n || n.startPolling(e)
                        }, r.obsStopPolling = function() {
                            var e;
                            null === (e = r.currentObservable) || void 0 === e || e.stopPolling()
                        }, r.obsSubscribeToMore = function(e) {
                            var n;
                            return null === (n = r.currentObservable) || void 0 === n ? void 0 : n.subscribeToMore(e)
                        }, r.onNewData = a, r
                    }
                    return (0, i.ZT)(n, e), n.prototype.execute = function() {
                        this.refreshClient();
                        var e = this.getOptions(),
                            n = e.skip,
                            t = e.query;
                        return (n || t !== this.previous.query) && (this.removeQuerySubscription(), this.removeObservable(!n), this.previous.query = t), this.updateObservableQuery(), this.getExecuteSsrResult() || this.getExecuteResult()
                    }, n.prototype.executeLazy = function() {
                        return this.runLazy ? [this.runLazyQuery, this.execute()] : [this.runLazyQuery, {
                            loading: !1,
                            networkStatus: d.I.ready,
                            called: !1,
                            data: void 0
                        }]
                    }, n.prototype.fetchData = function() {
                        var e = this,
                            n = this.getOptions();
                        return !n.skip && !1 !== n.ssr && new Promise((function(n) {
                            return e.startQuerySubscription(n)
                        }))
                    }, n.prototype.afterExecute = function(e) {
                        var n = (void 0 === e ? {} : e).lazy,
                            t = void 0 !== n && n;
                        this.isMounted = !0;
                        var i = this.getOptions();
                        return this.currentObservable && !this.ssrInitiated() && this.startQuerySubscription(), t && !this.runLazy || this.handleErrorOrCompleted(), this.previousOptions = i, this.unmount.bind(this)
                    }, n.prototype.cleanup = function() {
                        this.removeQuerySubscription(), this.removeObservable(!0), delete this.previous.result
                    }, n.prototype.getOptions = function() {
                        var n = e.prototype.getOptions.call(this);
                        return this.lazyOptions && (n.variables = (0, i.pi)((0, i.pi)({}, n.variables), this.lazyOptions.variables), n.context = (0, i.pi)((0, i.pi)({}, n.context), this.lazyOptions.context)), this.runLazy && delete n.skip, n
                    }, n.prototype.ssrInitiated = function() {
                        return this.context && this.context.renderPromises
                    }, n.prototype.getExecuteSsrResult = function() {
                        var e = this.getOptions(),
                            n = e.ssr,
                            t = e.skip,
                            a = !1 === n,
                            r = this.refreshClient().client.disableNetworkFetches,
                            o = (0, i.pi)({
                                loading: !0,
                                networkStatus: d.I.loading,
                                called: !0,
                                data: void 0,
                                stale: !1,
                                client: this.client
                            }, this.observableQueryFields());
                        if (a && (this.ssrInitiated() || r)) return this.previous.result = o, o;
                        if (this.ssrInitiated()) {
                            var l = this.getExecuteResult() || o;
                            return l.loading && !t && this.context.renderPromises.addQueryPromise(this, (function() {
                                return null
                            })), l
                        }
                    }, n.prototype.prepareObservableQueryOptions = function() {
                        var e = this.getOptions();
                        this.verifyDocumentType(e.query, l.n_.Query);
                        var n = e.displayName || "Query";
                        return !this.ssrInitiated() || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e.fetchPolicy = "cache-first"), (0, i.pi)((0, i.pi)({}, e), {
                            displayName: n,
                            context: e.context
                        })
                    }, n.prototype.initializeObservableQuery = function() {
                        if (this.ssrInitiated() && (this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions())), !this.currentObservable) {
                            var e = this.prepareObservableQueryOptions();
                            this.previous.observableQueryOptions = (0, i.pi)((0, i.pi)({}, e), {
                                children: void 0
                            }), this.currentObservable = this.refreshClient().client.watchQuery((0, i.pi)({}, e)), this.ssrInitiated() && this.context.renderPromises.registerSSRObservable(this.currentObservable, e)
                        }
                    }, n.prototype.updateObservableQuery = function() {
                        if (this.currentObservable) {
                            var e = (0, i.pi)((0, i.pi)({}, this.prepareObservableQueryOptions()), {
                                children: void 0
                            });
                            this.getOptions().skip ? this.previous.observableQueryOptions = e : (0, r.D)(e, this.previous.observableQueryOptions) || (this.previous.observableQueryOptions = e, this.currentObservable.setOptions(e).catch((function() {})))
                        } else this.initializeObservableQuery()
                    }, n.prototype.startQuerySubscription = function(e) {
                        var n = this;
                        void 0 === e && (e = this.onNewData), this.currentSubscription || this.getOptions().skip || (this.currentSubscription = this.currentObservable.subscribe({
                            next: function(t) {
                                var i = t.loading,
                                    a = t.networkStatus,
                                    o = t.data,
                                    d = n.previous.result;
                                d && d.loading === i && d.networkStatus === a && (0, r.D)(d.data, o) || e()
                            },
                            error: function(t) {
                                if (n.resubscribeToQuery(), !t.hasOwnProperty("graphQLErrors")) throw t;
                                var i = n.previous.result;
                                (i && i.loading || !(0, r.D)(t, n.previous.error)) && (n.previous.error = t, e())
                            }
                        }))
                    }, n.prototype.resubscribeToQuery = function() {
                        this.removeQuerySubscription();
                        var e = this.currentObservable;
                        if (e) {
                            var n = e.last;
                            try {
                                e.resetLastResults(), this.startQuerySubscription()
                            } finally {
                                e.last = n
                            }
                        }
                    }, n.prototype.getExecuteResult = function() {
                        var e = this.observableQueryFields(),
                            n = this.getOptions();
                        if (n.skip) e = (0, i.pi)((0, i.pi)({}, e), {
                            data: void 0,
                            error: void 0,
                            loading: !1,
                            networkStatus: d.I.ready,
                            called: !0
                        });
                        else if (this.currentObservable) {
                            var t = this.currentObservable.getCurrentResult(),
                                a = t.data,
                                r = t.loading,
                                l = t.partial,
                                s = t.networkStatus,
                                u = t.errors,
                                c = t.error;
                            if (u && u.length > 0 && (c = new o.c({
                                    graphQLErrors: u
                                })), e = (0, i.pi)((0, i.pi)({}, e), {
                                    data: a,
                                    loading: r,
                                    networkStatus: s,
                                    error: c,
                                    called: !0
                                }), r);
                            else if (c) Object.assign(e, {
                                data: (this.currentObservable.getLastResult() || {}).data
                            });
                            else {
                                var m = this.currentObservable.options.fetchPolicy;
                                if (n.partialRefetch && l && (!a || 0 === Object.keys(a).length) && "cache-only" !== m) return Object.assign(e, {
                                    loading: !0,
                                    networkStatus: d.I.loading
                                }), e.refetch(), e
                            }
                        }
                        e.client = this.client, this.setOptions(n, !0);
                        var v = this.previous.result;
                        return this.previous.loading = v && v.loading || !1, e.previousData = v && (v.data || v.previousData), this.previous.result = e, this.currentObservable && this.currentObservable.resetQueryStoreErrors(), e
                    }, n.prototype.handleErrorOrCompleted = function() {
                        if (this.currentObservable && this.previous.result) {
                            var e = this.previous.result,
                                n = e.data,
                                t = e.loading,
                                i = e.error;
                            if (!t) {
                                var a = this.getOptions(),
                                    o = a.query,
                                    d = a.variables,
                                    l = a.onCompleted,
                                    s = a.onError,
                                    u = a.skip;
                                if (this.previousOptions && !this.previous.loading && (0, r.D)(this.previousOptions.query, o) && (0, r.D)(this.previousOptions.variables, d)) return;
                                !l || i || u ? s && i && s(i) : l(n)
                            }
                        }
                    }, n.prototype.removeQuerySubscription = function() {
                        this.currentSubscription && (this.currentSubscription.unsubscribe(), delete this.currentSubscription)
                    }, n.prototype.removeObservable = function(e) {
                        this.currentObservable && (this.currentObservable.tearDownQuery(), e && delete this.currentObservable)
                    }, n.prototype.observableQueryFields = function() {
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
                    }, n
                }(t(59006).V);
            var u = t(55261);

            function c(e, n, t) {
                void 0 === t && (t = !1);
                var o = (0, a.useContext)((0, u.K)()),
                    d = (0, a.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    l = d[0],
                    c = d[1],
                    m = n ? (0, i.pi)((0, i.pi)({}, n), {
                        query: e
                    }) : {
                        query: e
                    },
                    v = (0, a.useRef)(),
                    k = v.current || (v.current = new s({
                        options: m,
                        context: o,
                        onNewData: function() {
                            k.ssrInitiated() ? c() : Promise.resolve().then((function() {
                                return v.current && v.current.isMounted && c()
                            }))
                        }
                    }));
                k.setOptions(m), k.context = o;
                var g = function(e, n) {
                        var t = (0, a.useRef)();
                        return t.current && (0, r.D)(n, t.current.key) || (t.current = {
                            key: n,
                            value: e()
                        }), t.current.value
                    }((function() {
                        return t ? k.executeLazy() : k.execute()
                    }), {
                        options: (0, i.pi)((0, i.pi)({}, m), {
                            onError: void 0,
                            onCompleted: void 0
                        }),
                        context: o,
                        tick: l
                    }),
                    p = t ? g[1] : g;
                return __DEV__ && function(e) {
                    if (__DEV__) {
                        var n = (0, a.useRef)(!1);
                        (0, a.useEffect)((function() {
                            return function() {
                                n.current = !0
                            }
                        }), []), (0, a.useEffect)((function() {
                            !0 === n.current && (n.current = !1, e())
                        }), [])
                    }
                }(c), (0, a.useEffect)((function() {
                    return function() {
                        k.cleanup(), v.current = void 0
                    }
                }), []), (0, a.useEffect)((function() {
                    return k.afterExecute({
                        lazy: t
                    })
                }), [p.loading, p.networkStatus, p.error, p.data, k.currentObservable]), g
            }
        },
        14222: function(e, n, t) {
            "use strict";
            t.d(n, {
                E2: function() {
                    return d
                },
                mw: function() {
                    return o
                },
                n_: function() {
                    return i
                }
            });
            var i, a = t(66022);
            ! function(e) {
                e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
            }(i || (i = {}));
            var r = new Map;

            function o(e) {
                var n;
                switch (e) {
                    case i.Query:
                        n = "Query";
                        break;
                    case i.Mutation:
                        n = "Mutation";
                        break;
                    case i.Subscription:
                        n = "Subscription"
                }
                return n
            }

            function d(e) {
                var n, t, o = r.get(e);
                if (o) return o;
                __DEV__ ? (0, a.kG)(!!e && !!e.kind, "Argument of " + e + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, a.kG)(!!e && !!e.kind, 34);
                var d = e.definitions.filter((function(e) {
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
                __DEV__ ? (0, a.kG)(!d.length || l.length || s.length || u.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, a.kG)(!d.length || l.length || s.length || u.length, 35), __DEV__ ? (0, a.kG)(l.length + s.length + u.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + e + " had " + l.length + " queries, " + u.length + " subscriptions and " + s.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0, a.kG)(l.length + s.length + u.length <= 1, 36), t = l.length ? i.Query : i.Mutation, l.length || s.length || (t = i.Subscription);
                var c = l.length ? l : s.length ? s : u;
                __DEV__ ? (0, a.kG)(1 === c.length, "react-apollo only supports one definition per HOC. " + e + " had " + c.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0, a.kG)(1 === c.length, 37);
                var m = c[0];
                n = m.variableDefinitions || [];
                var v = {
                    name: m.name && "Name" === m.name.kind ? m.name.value : "data",
                    type: t,
                    variables: n
                };
                return r.set(e, v), v
            }
        },
        33148: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var i = t(32735),
                a = t(22208),
                r = t(53281),
                o = function() {
                    var e = (0, r.Z)((function(e, n) {
                        var t = n.error,
                            i = n.loading;
                        return t || i ? [] : (0, a.ff)(e)
                    }), !1);
                    return i.createElement(a.Lp, {
                        globalAlertsConfig: e,
                        regionId: "IndexPage"
                    })
                }
        },
        53281: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return f
                }
            });
            var i = t(47169),
                a = t(13260),
                r = t(79399),
                o = t(42015),
                d = t(22208),
                l = {
                    kind: "Document",
                    definitions: function(e) {
                        var n = {};
                        return e.filter((function(e) {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            var t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
                        }))
                    }([{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "MerchComponentsQuery"
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
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchComponentsInput"
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
                                    value: "merchComponents"
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
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "components"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "HeroBannerFragment"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "MerchCarouselFragment"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "SecondaryBannerFragment"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "MerchComponentFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }].concat({
                        kind: "Document",
                        definitions: function(e) {
                            var n = {};
                            return e.filter((function(e) {
                                if ("FragmentDefinition" !== e.kind) return !0;
                                var t = e.name.value;
                                return !n[t] && (n[t] = !0, !0)
                            }))
                        }([{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "HeroBannerFragment"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HeroBanner"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "heroCampaignId"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "designVariant"
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
                                                    value: "DesktopHeroIllustration"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleFirstLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleSecondLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "subtitle"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroCTAFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "caption"
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
                                                                    value: "HeroTextCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text"
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
                                                                    value: "HeroCountdownCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "campaignEnd"
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
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "illustration"
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
                                                            alias: {
                                                                kind: "Name",
                                                                value: "imageUrl"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "url"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "300"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "300"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "colorScheme"
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
                                                    value: "DesktopHeroFullImage"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleFirstLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleSecondLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "subtitle"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroCTAFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "caption"
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
                                                                    value: "HeroTextCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text"
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
                                                                    value: "HeroCountdownCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "campaignEnd"
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
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "backgroundImage"
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
                                                            alias: {
                                                                kind: "Name",
                                                                value: "smallImageUrl"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "url"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "720"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "217"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            alias: {
                                                                kind: "Name",
                                                                value: "bigImageUrl"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "url"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "2880"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "868"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "colorScheme"
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
                                                    value: "DesktopHeroSolidBg"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleFirstLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleSecondLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "subtitle"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroCTAFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "caption"
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
                                                                    value: "HeroTextCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text"
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
                                                                    value: "HeroCountdownCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "campaignEnd"
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
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "colorScheme"
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
                                                    value: "MdotHeroIllustration"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleFirstLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroCTAFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "caption"
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
                                                                    value: "HeroTextCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text"
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
                                                                    value: "HeroCountdownCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "campaignEnd"
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
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "illustration"
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
                                                            alias: {
                                                                kind: "Name",
                                                                value: "smallImageUrl"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "url"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "300"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "300"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "colorScheme"
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
                                                    value: "MdotHeroImageFullAlignTop"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleFirstLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroCTAFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "caption"
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
                                                                    value: "HeroTextCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text"
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
                                                                    value: "HeroCountdownCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "campaignEnd"
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
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "backgroundImage"
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
                                                            alias: {
                                                                kind: "Name",
                                                                value: "smallImageUrl"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "url"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "900"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "900"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "colorScheme"
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
                                                    value: "MdotHeroImageFullAlignBottom"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleFirstLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroCTAFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "caption"
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
                                                                    value: "HeroTextCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text"
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
                                                                    value: "HeroCountdownCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "campaignEnd"
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
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "backgroundImage"
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
                                                            alias: {
                                                                kind: "Name",
                                                                value: "smallImageUrl"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "url"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "900"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "900"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "colorScheme"
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
                                                    value: "MdotHeroImageFullAlignLeft"
                                                }
                                            },
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "titleFirstLine"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cta"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "FragmentSpread",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroCTAFragment"
                                                            },
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "caption"
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
                                                                    value: "HeroTextCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text"
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
                                                                    value: "HeroCountdownCaption"
                                                                }
                                                            },
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "campaignEnd"
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
                                                        value: "signature"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "backgroundImage"
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
                                                            alias: {
                                                                kind: "Name",
                                                                value: "smallImageUrl"
                                                            },
                                                            name: {
                                                                kind: "Name",
                                                                value: "url"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "900"
                                                                }
                                                            }, {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "900"
                                                                }
                                                            }],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "alt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "colorScheme"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }].concat({
                            kind: "Document",
                            definitions: [{
                                kind: "FragmentDefinition",
                                name: {
                                    kind: "Name",
                                    value: "HeroCTAFragment"
                                },
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "HeroCTA"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ariaLabel"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "text"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "targetLanding"
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
                                                        value: "DirectLinkLanding"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "urlPath"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "queryParams"
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
                                                                    value: "value"
                                                                },
                                                                arguments: [],
                                                                directives: []
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
                                                        value: "LoginLanding"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "stub"
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
                                                        value: "DeeplinkLanding"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "urlPath"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "queryParams"
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
                                                                    value: "value"
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
                                end: 381,
                                source: {
                                    body: "\n  fragment HeroCTAFragment on HeroCTA {\n    ariaLabel\n    text\n    targetLanding {\n      ... on DirectLinkLanding {\n        urlPath\n        queryParams {\n          name\n          value\n        }\n      }\n      ... on LoginLanding {\n        stub\n      }\n      ... on DeeplinkLanding {\n        urlPath\n        queryParams {\n          name\n          value\n        }\n      }\n    }\n  }\n",
                                    name: "GraphQL request",
                                    locationOffset: {
                                        line: 1,
                                        column: 1
                                    }
                                }
                            }
                        }.definitions)),
                        loc: {
                            start: 0,
                            end: 3269,
                            source: {
                                body: "\n  fragment HeroBannerFragment on HeroBanner {\n    heroCampaignId\n    designVariant {\n      ... on DesktopHeroIllustration {\n        titleFirstLine\n        titleSecondLine\n        subtitle\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        illustration {\n          id\n          imageUrl: url(width: 300, height: 300)\n          alt\n        }\n        colorScheme\n      }\n      ... on DesktopHeroFullImage {\n        titleFirstLine\n        titleSecondLine\n        subtitle\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          smallImageUrl: url(width: 720, height: 217)\n          bigImageUrl: url(width: 2880, height: 868)\n          alt\n        }\n        colorScheme\n      }\n      ... on DesktopHeroSolidBg {\n        titleFirstLine\n        titleSecondLine\n        subtitle\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        colorScheme\n      }\n      ... on MdotHeroIllustration {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        illustration {\n          id\n          smallImageUrl: url(width: 300, height: 300)\n          alt\n        }\n        colorScheme\n      }\n      ... on MdotHeroImageFullAlignTop {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          smallImageUrl: url(width: 900, height: 900)\n          alt\n        }\n        colorScheme\n      }\n      ... on MdotHeroImageFullAlignBottom {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          smallImageUrl: url(width: 900, height: 900)\n          alt\n        }\n        colorScheme\n      }\n      ... on MdotHeroImageFullAlignLeft {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          smallImageUrl: url(width: 900, height: 900)\n          alt\n        }\n        colorScheme\n      }\n    }\n  }\n\n  \n",
                                name: "GraphQL request",
                                locationOffset: {
                                    line: 1,
                                    column: 1
                                }
                            }
                        }
                    }.definitions, {
                        kind: "Document",
                        definitions: [{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "MerchCarouselFragment"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchCarousel"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "carouselCampaignId"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }],
                        loc: {
                            start: 0,
                            end: 80,
                            source: {
                                body: "\n  fragment MerchCarouselFragment on MerchCarousel {\n    carouselCampaignId\n  }\n",
                                name: "GraphQL request",
                                locationOffset: {
                                    line: 1,
                                    column: 1
                                }
                            }
                        }
                    }.definitions, {
                        kind: "Document",
                        definitions: function(e) {
                            var n = {};
                            return e.filter((function(e) {
                                if ("FragmentDefinition" !== e.kind) return !0;
                                var t = e.name.value;
                                return !n[t] && (n[t] = !0, !0)
                            }))
                        }([{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "SecondaryBannerFragment"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "SecondaryBannersCarousel"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "secondaryBanners"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "secondaryBannerCampaignId"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "designVariant"
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
                                                            value: "DesktopSecondaryBannerFullImage"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "backgroundImage"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "714"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "colorScheme"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "signature"
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
                                                            value: "DesktopSecondaryBannerPartialImageRight"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "colorScheme"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "signature"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "image"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "500"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "500"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
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
                                                            value: "DesktopSecondaryBannerIllustrationRight"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "colorScheme"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "signature"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "illustration"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "500"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "500"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
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
                                                            value: "DesktopSecondaryBannerIllustrationLeft"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "illustration"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "500"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "500"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "colorScheme"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "signature"
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
                                                            value: "MdotSecondaryBannerFullImage"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "backgroundImage"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "714"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "signature"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "colorScheme"
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
                                                            value: "MdotSecondaryBannerPartialImageRight"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "image"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "signature"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "colorScheme"
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
                                                            value: "MdotSecondaryBannerIllustrationRight"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "illustration"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "signature"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "colorScheme"
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
                                                            value: "MdotSecondaryBannerLegacy"
                                                        }
                                                    },
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
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
                                                                value: "subtitle"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "caption"
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
                                                                            value: "SecondaryBannerTextCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "text"
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
                                                                            value: "SecondaryBannerCountdownCaption"
                                                                        }
                                                                    },
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "campaignEnd"
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
                                                                value: "cta"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SecondaryBannerCTAFragment"
                                                                    },
                                                                    directives: []
                                                                }]
                                                            }
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "illustration"
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
                                                                        value: "url"
                                                                    },
                                                                    arguments: [{
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "width"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "300"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "alt"
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
                        }].concat({
                            kind: "Document",
                            definitions: [{
                                kind: "FragmentDefinition",
                                name: {
                                    kind: "Name",
                                    value: "SecondaryBannerCTAFragment"
                                },
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SecondaryBannerCTA"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ariaLabel"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "text"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "targetLanding"
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
                                                        value: "DirectLinkLanding"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "urlPath"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "queryParams"
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
                                                                    value: "value"
                                                                },
                                                                arguments: [],
                                                                directives: []
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
                                                        value: "LoginLanding"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "stub"
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
                                                        value: "DeeplinkLanding"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "urlPath"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "queryParams"
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
                                                                    value: "value"
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
                                end: 403,
                                source: {
                                    body: "\n  fragment SecondaryBannerCTAFragment on SecondaryBannerCTA {\n    ariaLabel\n    text\n    targetLanding {\n      ... on DirectLinkLanding {\n        urlPath\n        queryParams {\n          name\n          value\n        }\n      }\n      ... on LoginLanding {\n        stub\n      }\n      ... on DeeplinkLanding {\n        urlPath\n        queryParams {\n          name\n          value\n        }\n      }\n    }\n  }\n",
                                    name: "GraphQL request",
                                    locationOffset: {
                                        line: 1,
                                        column: 1
                                    }
                                }
                            }
                        }.definitions)),
                        loc: {
                            start: 0,
                            end: 4307,
                            source: {
                                body: "\n  fragment SecondaryBannerFragment on SecondaryBannersCarousel {\n    secondaryBanners {\n      secondaryBannerCampaignId\n      designVariant {\n        ... on DesktopSecondaryBannerFullImage {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          backgroundImage {\n            id\n            url(width: 714, height: 300)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on DesktopSecondaryBannerPartialImageRight {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          colorScheme\n          signature\n          image {\n            id\n            url(width: 500, height: 500)\n            alt\n          }\n        }\n        ... on DesktopSecondaryBannerIllustrationRight {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          colorScheme\n          signature\n          illustration {\n            id\n            url(width: 500, height: 500)\n            alt\n          }\n        }\n        ... on DesktopSecondaryBannerIllustrationLeft {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          illustration {\n            id\n            url(width: 500, height: 500)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on MdotSecondaryBannerFullImage {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          backgroundImage {\n            id\n            url(width: 714, height: 300)\n            alt\n          }\n          signature\n          colorScheme\n        }\n        ... on MdotSecondaryBannerPartialImageRight {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          image {\n            id\n            url(width: 300, height: 300)\n            alt\n          }\n          signature\n          colorScheme\n        }\n        ... on MdotSecondaryBannerIllustrationRight {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          illustration {\n            id\n            url(width: 300, height: 300)\n            alt\n          }\n          signature\n          colorScheme\n        }\n        ... on MdotSecondaryBannerLegacy {\n          title\n          subtitle\n          caption {\n            ... on SecondaryBannerTextCaption {\n              text\n            }\n            ... on SecondaryBannerCountdownCaption {\n              campaignEnd\n            }\n          }\n          cta {\n            ...SecondaryBannerCTAFragment\n          }\n          illustration {\n            id\n            url(width: 300, height: 300)\n            alt\n          }\n        }\n      }\n    }\n  }\n\n  \n",
                                name: "GraphQL request",
                                locationOffset: {
                                    line: 1,
                                    column: 1
                                }
                            }
                        }
                    }.definitions, d.s_.definitions)),
                    loc: {
                        start: 0,
                        end: 297,
                        source: {
                            body: "\n  query MerchComponentsQuery($input: MerchComponentsInput) {\n    merchComponents(input: $input) {\n      components {\n        __typename\n        ...HeroBannerFragment\n        ...MerchCarouselFragment\n        ...SecondaryBannerFragment\n      }\n      ...MerchComponentFragment\n    }\n  }\n  \n  \n  \n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                s = t(64494),
                u = t(96306),
                c = t(84674),
                m = t(27055),
                v = function(e) {
                    return 0 === Object.keys(e).length || "prod" === (0, m.d)() ? {} : {
                        "X-Booking-Dev-Service-Override": JSON.stringify(e)
                    }
                },
                k = function(e) {
                    var n = {};
                    return s.gh.forEach((function(t) {
                        var i = e.get("dev_".concat(t));
                        i && (n[t] = i)
                    })), n
                };

            function g(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? g(Object(t), !0).forEach((function(n) {
                        (0, i.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function f(e, n) {
                var t, i, d = (0, r.T)(),
                    m = d.getBasePageUrl(),
                    g = m.toString(),
                    f = m.searchParams,
                    h = f.getAll(s.nh),
                    S = k(f),
                    y = {
                        input: {
                            regionsIds: ["index_global_alerts", "index_main"],
                            testCampaignIds: h
                        }
                    };
                n || (0, u.z)("Calling Merch Platform with variables ", {
                    queryVariables: y
                });
                var N = (0, a.a)(l, {
                        skip: n,
                        context: {
                            headers: p(p({}, (0, c.l)(!0)), v(S))
                        },
                        variables: y
                    }),
                    F = N.error,
                    b = N.loading,
                    C = N.data;
                return n || (0, u.z)("Response from Merch Platform ", {
                    error: F,
                    loading: b,
                    data: C
                }), n || b || "MerchComponentsResult" === (null === C || void 0 === C || null === (t = C.merchComponents) || void 0 === t ? void 0 : t.__typename) || (0, o.bf)("No result from merch platform", {
                    requestUrl: g
                }), F && (0, o.eK)(F), "MerchComponentsResult" === (null === C || void 0 === C || null === (i = C.merchComponents) || void 0 === i ? void 0 : i.__typename) ? e(C.merchComponents, {
                    requestContext: d,
                    loading: b,
                    error: F
                }) : e(void 0, {
                    requestContext: d,
                    loading: b,
                    error: F
                })
            }
        },
        27055: function(e, n, t) {
            "use strict";
            t.d(n, {
                I: function() {
                    return c
                },
                d: function() {
                    return u
                }
            });
            var i = t(79399),
                a = t(24094),
                r = {
                    ar: 1,
                    bg: 1,
                    en: 1,
                    "en-gb": 1,
                    "en-us": 1,
                    "es-mx": 1,
                    he: 1,
                    ja: 1,
                    ko: 1,
                    ms: 1,
                    th: 1,
                    tl: 1,
                    zh: 1,
                    "zh-cn": 1,
                    "zh-tw": 1
                },
                o = {
                    bg: 1,
                    cs: 1,
                    et: 1,
                    fi: 1,
                    fr: 1,
                    hu: 1,
                    lv: 1,
                    lt: 1,
                    no: 1,
                    pl: 1,
                    "pt-pt": 1,
                    ru: 1,
                    sk: 1,
                    sr: 1,
                    sv: 1,
                    uk: 1
                },
                d = /(\d)(?=(\d{3})+(?!\d))/g;

            function l(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (isNaN(e)) return "";
                var i = n in r,
                    a = i ? "." : ",",
                    l = i ? "," : ".";
                n in o && (l = " ");
                var s = Math.pow(10, t),
                    u = (Math.round(e * s) / s).toFixed(t),
                    c = u.split(".")[0],
                    m = u.split(".")[1];
                return c.replace(d, "$1".concat(l)) + (m ? a + m : "")
            }
            var s = function(e) {
                    for (var n = 0, t = [{
                            from: null,
                            to: 3,
                            copy: (0, a.t)("review_adj_very_poor")
                        }, {
                            from: 3,
                            to: 4,
                            copy: (0, a.t)("review_adj_poor")
                        }, {
                            from: 4,
                            to: 5,
                            copy: (0, a.t)("review_adj_disappointing")
                        }, {
                            from: 5,
                            to: 5.6,
                            copy: (0, a.t)("review_adj_average")
                        }, {
                            from: 5.6,
                            to: 6,
                            copy: (0, a.t)("review_adj_above_average")
                        }, {
                            from: 6,
                            to: 7,
                            copy: (0, a.t)("review_adj_pleasant")
                        }, {
                            from: 7,
                            to: 8,
                            copy: (0, a.t)("review_adj_good")
                        }, {
                            from: 8,
                            to: 8.6,
                            copy: (0, a.t)("review_adj_very_good")
                        }, {
                            from: 8.6,
                            to: 9,
                            copy: (0, a.t)("review_adj_fabulous")
                        }, {
                            from: 9,
                            to: 9.5,
                            copy: (0, a.t)("review_adj_superb")
                        }, {
                            from: 9.5,
                            to: null,
                            copy: (0, a.t)("review_adj_exceptional")
                        }]; n < t.length; n++) {
                        var i = t[n];
                        if (!(i.from && i.from > e) && !(i.to && i.to <= e)) return {
                            ratingAdjective: i.copy
                        }
                    }
                    throw new Error("score range is missed")
                },
                u = function() {
                    var e = (0, i.T)().getBPlatformEnvironment();
                    return e && "dev" !== e && "dqs" !== e ? "prod" : "dqs"
                },
                c = function(e, n, t) {
                    if (void 0 !== n && void 0 !== t) return {
                        score: n.toFixed(1),
                        rating: e.trans(s(n).ratingAdjective),
                        reviewCount: e.trans((0, a.t)("num_reviews_sr_page", {
                            variables: {
                                num_reviews: l(t, e.language),
                                num_exception: t || ""
                            }
                        }))
                    }
                }
        },
        64494: function(e, n, t) {
            "use strict";
            t.d(n, {
                Hu: function() {
                    return a
                },
                gh: function() {
                    return r
                },
                nh: function() {
                    return i
                }
            });
            var i = "b_merch_test_campaign_id",
                a = "b_wcu_debug_context",
                r = ["b-webcore-transactional-content-service", "b-merch-platform-campaign-serving-api"]
        },
        96306: function(e, n, t) {
            "use strict";
            t.d(n, {
                z: function() {
                    return a
                }
            });
            var i = t(79399),
                a = function() {
                    var e = (0, i.T)(),
                        n = e.getBPlatformEnvironment(),
                        t = e.getBasePageUrl(),
                        a = e.isInternalUser() && "1" === t.searchParams.get("debug");
                    if ((!n || "dev" === n || "dqs" === n) && a) {
                        for (var r = arguments.length, o = new Array(r), d = 0; d < r; d++) o[d] = arguments[d];
                        console.log(o)
                    }
                }
        },
        84674: function(e, n, t) {
            "use strict";
            t.d(n, {
                l: function() {
                    return i
                }
            });
            var i = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 800 : 1500;
                return {
                    "X-Booking-Timeout-Ms": e,
                    "X-Envoy-Expected-Rq-Timeout-Ms": e
                }
            }
        },
        79142: function(e, n, t) {
            "use strict";
            var i = t(8821),
                a = t(85169),
                r = t(72975),
                o = t.n(r);

            function d(e, n, t, i) {
                return new(t || (t = Promise))((function(a, r) {
                    function o(e) {
                        try {
                            l(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }

                    function d(e) {
                        try {
                            l(i.throw(e))
                        } catch (n) {
                            r(n)
                        }
                    }

                    function l(e) {
                        var n;
                        e.done ? a(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                            e(n)
                        }))).then(o, d)
                    }
                    l((i = i.apply(e, n || [])).next())
                }))
            }
            Object.create;
            Object.create;
            var l = function() {
                    function e(n) {
                        (0, i.Z)(this, e), this.config = n, this.headers = this.config.API.HEADERS
                    }
                    return (0, a.Z)(e, [{
                        key: "get",
                        value: function(e, n) {
                            var t = this;
                            return new Promise((function(i, a) {
                                return d(t, void 0, void 0, o().mark((function t() {
                                    var r, d;
                                    return o().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, fetch(e, {
                                                    method: "GET",
                                                    headers: (null === n || void 0 === n ? void 0 : n.withHeaders) ? this.headers : void 0,
                                                    credentials: !1 === (null === n || void 0 === n ? void 0 : n.withCredentials) ? "omit" : "include"
                                                });
                                            case 3:
                                                return r = t.sent, t.next = 6, r.text();
                                            case 6:
                                                d = t.sent, i(d ? JSON.parse(d) : null), t.next = 13;
                                                break;
                                            case 10:
                                                return t.prev = 10, t.t0 = t.catch(0), t.abrupt("return", a(t.t0));
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this, [
                                        [0, 10]
                                    ])
                                })))
                            }))
                        }
                    }, {
                        key: "post",
                        value: function(e, n, t) {
                            var i = this,
                                a = this.getEnrichedData(n);
                            return new Promise((function(n, r) {
                                return d(i, void 0, void 0, o().mark((function i() {
                                    var d, l;
                                    return o().wrap((function(i) {
                                        for (;;) switch (i.prev = i.next) {
                                            case 0:
                                                return i.prev = 0, i.next = 3, fetch(e, {
                                                    method: "POST",
                                                    headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                                    credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include",
                                                    body: JSON.stringify(a)
                                                });
                                            case 3:
                                                return d = i.sent, i.next = 6, d.text();
                                            case 6:
                                                l = i.sent, n(l ? JSON.parse(l) : null), i.next = 13;
                                                break;
                                            case 10:
                                                return i.prev = 10, i.t0 = i.catch(0), i.abrupt("return", r(i.t0));
                                            case 13:
                                            case "end":
                                                return i.stop()
                                        }
                                    }), i, this, [
                                        [0, 10]
                                    ])
                                })))
                            }))
                        }
                    }, {
                        key: "getEnrichedData",
                        value: function(e) {
                            var n = {
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
                                context: n,
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
                        (0, i.Z)(this, e)
                    }
                    return (0, a.Z)(e, [{
                        key: "init",
                        value: function(e) {
                            this.client = new l(e)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return d(this, void 0, void 0, o().mark((function n() {
                                return o().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.abrupt("return", this.client.get(e));
                                        case 1:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, this)
                            })))
                        }
                    }, {
                        key: "post",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return d(this, void 0, void 0, o().mark((function i() {
                                return o().wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            return i.abrupt("return", this.client.post(e, n, t));
                                        case 1:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i, this)
                            })))
                        }
                    }]), e
                }(),
                u = new s,
                c = function(e) {
                    var n = void 0;
                    return "mdot" == e.platform && (n = 2), "ddot" != e.platform && "www" != e.platform || (n = 1), {
                        "Content-Type": "application/json",
                        "X-Booking-Platform": e.platform,
                        "X-Booking-SiteType-Id": n,
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
                        (0, i.Z)(this, e)
                    }
                    return (0, a.Z)(e, [{
                        key: "init",
                        value: function(e) {
                            this.c360Config = function(e) {
                                var n = e.hostname || (e.isDev ? "app.dqs.booking.com" : "www.booking.com");
                                return {
                                    IS_DEV: Boolean(e.isDev),
                                    API: {
                                        HEADERS: c(e)
                                    },
                                    TRACK_BASE_URL: "https://".concat(n, "/c360/v1/track"),
                                    language: e.lang,
                                    currency: e.currency
                                }
                            }(e), this.httpClient = u, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, u.init(this.c360Config)
                        }
                    }, {
                        key: "sendEvent",
                        value: function(e) {
                            return d(this, void 0, void 0, o().mark((function n() {
                                var t = this;
                                return o().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            this.httpClient.post(this.c360url, e, {
                                                withHeaders: !0
                                            }).catch((function(e) {
                                                t.props.onErrorCallback && t.props.onErrorCallback(new Error(e))
                                            }));
                                        case 1:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, this)
                            })))
                        }
                    }]), e
                }());
            n.Z = m
        },
        33376: function(e, n, t) {
            "use strict";
            t.d(n, {
                Oq: function() {
                    return d
                },
                _g: function() {
                    return l
                },
                ge: function() {
                    return o
                },
                mT: function() {
                    return r
                }
            });
            var i, a = t(47169),
                r = "nflt",
                o = ";",
                d = {
                    FILTER_CLASS: "class",
                    FILTER_HOTEL_TYPE: "ht_id",
                    FILTER_24HR_RECEPTION: "hr_24",
                    FILTER_FACILITIES: "hotelfacility",
                    FILTER_ROOM_FACILITIES: "roomfacility",
                    FILTER_DISTRICT: "di",
                    FILTER_CHAINS: "chaincode",
                    FILTER_CHAIN: "chain",
                    FILTER_DEALS: "any_deal",
                    FILTER_FREE_CANCELLATION: "fc",
                    FILTER_PAYMENT_METHOD: "pmt",
                    FILTER_MEALPLAN: "mealplan",
                    FILTER_PRICE_BUCKETS: "pri",
                    FILTER_PRICE_SLIDER: "price",
                    FILTER_HT_BEACH: "ht_beach",
                    FILTER_TWIN_DOUBLE: "tdb",
                    FILTER_POPULAR_ACTIVITIES: "popular_activities",
                    FILTER_REVIEW_SCORE: "review_score",
                    FILTER_FAMILY_FRIENDLY_PROPERTY: "family_friendly_property",
                    FILTER_OUT_OF_STOCK: "oos",
                    FILTER_PRIVATE_BRAND: "ibr",
                    FILTER_ACCESSIBLE_FACILITIES: "accessible_facilities",
                    FILTER_ACCESSIBLE_ROOM_FACILITIES: "accessible_room_facilities",
                    FILTER_DISTANCE_TO_SKI_LIFT_FILTER: "distanceToSkiliftFilter",
                    FILTER_MIN_BATHROOMS: "min_bathrooms",
                    FILTER_UFI: "uf",
                    FILTER_POPULAR_NEARBY_LANDMARKS: "popular_nearby_landmarks",
                    FILTER_DISTANCE: "distance",
                    FILTER_SEO_THEME: "sth",
                    FILTER_HEALTH_AND_HYGIENE: "health_and_hygiene",
                    FILTER_NUM_BEDS: "num_beds",
                    FILTER_TOP_DESTINATIONS: "top_destinations",
                    FILTER_POPULAR: "popular",
                    FILTER_POPULAR_STICKY: "popular_sticky",
                    FILTER_NO_DORMS: "rpt",
                    FILTER_PRIVACY_TYPE: "privacy_type",
                    FILTER_GENIUS_BENEFITS: "genius_benefits",
                    FILTER_PREVIOUSLY_USED: "used_filters",
                    FILTER_BEACH_ACCESS_FACILITY: "BeachAccessFacilityFilter",
                    FILTER_SUSTAINABLE_PROPERTY: "SustainablePropertyFilter",
                    FILTER_THAI_PASS: "thai_pass",
                    FILTER_UNIT_CONFIG: "unit_config",
                    FILTER_TYPES_OF_PLACES: "types_of_places"
                },
                l = ["offset", "activeTab", "sb", "src_elem"];
            i = {}, (0, a.Z)(i, d.FILTER_PRICE_BUCKETS, [d.FILTER_PRICE_SLIDER]), (0, a.Z)(i, d.FILTER_PRICE_SLIDER, [d.FILTER_PRICE_BUCKETS]), (0, a.Z)(i, d.FILTER_HOTEL_TYPE, [d.FILTER_TYPES_OF_PLACES]), (0, a.Z)(i, d.FILTER_TYPES_OF_PLACES, [d.FILTER_HOTEL_TYPE])
        },
        94114: function(e, n, t) {
            "use strict";
            t.d(n, {
                d: function() {
                    return d
                }
            });
            var i = t(79399),
                a = t(80827),
                r = t(33376),
                o = t(79155);

            function d(e) {
                var n = e.ucfac,
                    t = e.ucfgff,
                    d = e.ffsau,
                    l = e.highlightedPropertyId,
                    s = e.tripThemeId,
                    u = e.destType,
                    c = e.destId,
                    m = e.latitude,
                    v = e.longitude,
                    k = e.travelPurpose,
                    g = e.sorter,
                    p = e.selectedFilters,
                    f = e.checkin,
                    h = e.checkout,
                    S = e.nbAdults,
                    y = e.nbChildren,
                    N = e.childrenAges,
                    F = e.nbRooms,
                    b = e.postcard,
                    C = e.sleepingRoomMatch,
                    _ = e.showApartHotels,
                    I = e.loginRedirect,
                    T = (0, i.T)().getLanguage(),
                    L = (0, a.K)({
                        pathname: "/searchresults".concat("en-us" === T ? "" : "." + T, ".html")
                    }),
                    E = L.searchParams;
                if (f && h && (E.set("checkin", f), E.set("checkout", h)), c && u && (E.set("dest_id", String(c)), E.set("dest_type", String(u).toLowerCase())), "undefined" !== typeof m && "undefined" !== typeof v && (E.set("latitude", String(m)), E.set("longitude", String(v))), "undefined" !== typeof k) {
                    var O = (0, o.DT)(parseInt(String(k), 10));
                    O && E.set(o.w3, O)
                }
                return p && E.set(r.mT, p), g && E.set("order", g), "undefined" !== typeof S && (E.set("group_adults", String(S)), E.set("req_adults", String(S))), "undefined" !== typeof F && E.set("no_rooms", String(F)), "undefined" !== typeof y && (E.set("group_children", String(y)), E.set("req_children", String(y))), N && N.forEach((function(e) {
                    E.append("age", String(e)), E.append("req_age", String(e))
                })), l && E.set("highlighted_hotels", String(l)), s && E.set("trip_theme", String(s)), n && E.set("ucfac", n), t && E.set("ucfgff", t), d && E.set("ffsau", d), b && E.set("postcard", b), C && E.set("slp_r_match_to", C), _ && E.set("shw_aparth", _), I && E.set("login_redirect", I), L
            }
        },
        79155: function(e, n, t) {
            "use strict";
            t.d(n, {
                C3: function() {
                    return l
                },
                DT: function() {
                    return u
                },
                H: function() {
                    return i
                },
                iX: function() {
                    return s
                },
                w3: function() {
                    return r
                }
            });
            var i = "business",
                a = "leisure",
                r = "sb_travel_purpose",
                o = 1,
                d = 2;

            function l(e) {
                return e.get(r) === i
            }

            function s(e) {
                return l(e) ? o : d
            }

            function u(e) {
                return e === o ? i : e === d ? a : void 0
            }
        },
        20720: function(e, n, t) {
            "use strict";
            var i, a, r, o;
            t.d(n, {
                    Eb: function() {
                        return r
                    },
                    jv: function() {
                        return a
                    }
                }),
                function(e) {
                    e.AIRPORT = "AIRPORT", e.BOUNDING_BOX = "BOUNDING_BOX", e.CHAIN = "CHAIN", e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.DISTRICT = "DISTRICT", e.HOTEL = "HOTEL", e.IATA = "IATA", e.LANDMARK = "LANDMARK", e.LATLONG = "LATLONG", e.NO_DEST_TYPE = "NO_DEST_TYPE", e.REGION = "REGION", e.SUB_REGION = "SUB_REGION", e.UNRECOGNIZED = "UNRECOGNIZED"
                }(i || (i = {})),
                function(e) {
                    e.GLOBAL_EVENT = "GLOBAL_EVENT", e.REGIONAL_EVENT = "REGIONAL_EVENT"
                }(a || (a = {})),
                function(e) {
                    e.DISRUPTIVE = "DISRUPTIVE", e.NORMAL = "NORMAL"
                }(r || (r = {})),
                function(e) {
                    e.ACCOMMODATIONS = "ACCOMMODATIONS", e.AIRPORT_TAXIS = "AIRPORT_TAXIS", e.ATTRACTIONS = "ATTRACTIONS", e.CARS = "CARS", e.FLIGHTS = "FLIGHTS", e.PACKAGES = "PACKAGES"
                }(o || (o = {}))
        },
        72197: function(e, n, t) {
            "use strict";
            t.d(n, {
                CK: function() {
                    return L
                },
                Gc: function() {
                    return T
                },
                H: function() {
                    return I
                },
                SQ: function() {
                    return O
                },
                Us: function() {
                    return p
                },
                Vh: function() {
                    return y
                },
                fv: function() {
                    return w
                },
                gM: function() {
                    return h
                },
                hL: function() {
                    return C
                },
                mk: function() {
                    return _
                },
                w0: function() {
                    return E
                },
                yo: function() {
                    return f
                }
            });
            var i, a = t(47169),
                r = t(79142),
                o = t(62691),
                d = t(75928),
                l = t(87703),
                s = t(2446),
                u = t(79399),
                c = t(33782),
                m = t(20720);

            function v(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function k(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? v(Object(t), !0).forEach((function(n) {
                        (0, a.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var g, p, f, h;
            ! function(e) {
                e[e["Suggested for you"] = 0] = "Suggested for you", e[e.All = 1] = "All"
            }(g || (g = {})),
            function(e) {
                e.Vertical = "vertical", e.Other = "other action", e.Option = "option in other action"
            }(p || (p = {})),
            function(e) {
                e.Currency = "Select your currency", e.Language = "Select your language", e.Logo = "Logo", e.CS = "Contact Customer Service", e.Profile = "Profile Menu", e.Social = "Follow Us on Wechat", e.ListProperty = "List Your Property", e.Notification = "Notification", e.SignIn = "Sign In", e.SignUp = "Sign Up"
            }(f || (f = {})),
            function(e) {
                e.Expand = "Expand", e.Collapse = "Collapse", e.CTA = "CTA"
            }(h || (h = {}));
            var S = (i = {}, (0, a.Z)(i, l.KC.HEADER, {
                    component_served: "2.0.0",
                    component_action_clicked: "1.0.0",
                    component_scrolled: "1.0.0"
                }), (0, a.Z)(i, l.KC.FOOTER, {}), (0, a.Z)(i, l.KC.GLOBAL_ALERT, {
                    component_served: "2.0.0",
                    component_viewed: "2.0.0",
                    component_action_clicked: "2.0.0"
                }), i),
                y = function() {
                    var e = (0, s.B)(),
                        n = e.siteType,
                        t = e.language,
                        i = e.currency,
                        a = e.affiliate,
                        o = e.pageviewId,
                        d = (0, u.T)(),
                        l = {
                            aid: String(null === a || void 0 === a ? void 0 : a.id),
                            pageviewId: o,
                            platform: n,
                            lang: t,
                            currency: i,
                            isDev: (0, c.Vo)(d)
                        };
                    l.isDev && console.log("[web-shell] C360 is initialized using config: ", l), r.Z.init(l)
                },
                N = function(e, n) {
                    var t = e.toLocaleLowerCase();
                    return {
                        action_name: "".concat("webcoreux", ".").concat(t, "_").concat(n),
                        action_version: S[e][n]
                    }
                },
                F = function(e, n) {
                    return e.reduce((function(e, t, i) {
                        return e.push({
                            item_type: t.id,
                            item_position: i + 1,
                            is_item_preselected: +(t.id === n)
                        }), e
                    }), [])
                },
                b = function(e, n) {
                    var t = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.KC.HEADER;
                        return {
                            served: N(e, "component_served"),
                            viewed: N(e, "component_viewed"),
                            clicked: N(e, "component_action_clicked"),
                            scrolled: N(e, "component_scrolled")
                        }
                    }(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.KC.HEADER)[e];
                    return k(k({}, t), {}, {
                        content: n
                    })
                },
                C = function(e, n, t, i, a, l) {
                    var s = function() {
                            var e, n = (0, o.Sj)(),
                                t = n.isLarge,
                                i = n.isMedium;
                            switch (!0) {
                                case !0 === t:
                                    e = "large";
                                    break;
                                case !0 === i:
                                    e = "medium";
                                    break;
                                default:
                                    e = "small"
                            }
                            return e
                        }(),
                        c = [];
                    a && c.push({
                        action_type: "currency",
                        option_text: a
                    }), l && c.push({
                        action_type: "language",
                        option_text: l
                    }), (0, d.Z)((function() {
                        var a = (0, u.T)().getAffiliate() || {},
                            o = a.id,
                            d = a.label;
                        r.Z.sendEvent(b("served", {
                            product_verticals_loaded: F(e, n),
                            product_vertical_selected: n,
                            headertype: t,
                            viewport: s,
                            option_preselected: c,
                            is_loggedin: Number(Boolean(i)),
                            aid: String(null !== o && void 0 !== o ? o : 0),
                            label: d,
                            genius_level: String(null !== i && void 0 !== i ? i : 0)
                        }))
                    }), [])
                },
                _ = function(e, n) {
                    var t = {
                        clicked_text_copy_tag: n
                    };
                    r.Z.sendEvent(b("clicked", k({
                        action_type: e
                    }, t)))
                },
                I = function(e, n, t) {
                    var i = {
                        clicked_text_copy_tag: n
                    };
                    t && Object.assign(i, {
                        action_text_copy_tag: t.option_name,
                        option_category: g[t.option_index]
                    }), r.Z.sendEvent(b("clicked", k({
                        action_type: e
                    }, i)))
                },
                T = function() {
                    var e = function(e) {
                        var n, t = [];
                        return function(i) {
                            clearTimeout(n), t.push(i), n = setTimeout((function() {
                                r.Z.sendEvent(b("scrolled", {
                                    product_verticals_seen: t
                                })), t = []
                            }), e)
                        }
                    }(300);
                    (0, l.OR)(l.FP.TAB_EXPOSED, (function(n) {
                        var t = n.detail.id;
                        t && e(t)
                    }))
                },
                L = function() {
                    return (0, l.OR)(l.FP.SOCIAL_ENTRY_CLICKED, (function() {
                        I(p.Other, f.Social)
                    }))
                },
                E = function(e, n) {
                    (0, d.Z)((function() {
                        r.Z.sendEvent(b("served", {
                            global_alert_card: null === n || void 0 === n ? void 0 : n.map((function(e) {
                                return {
                                    campaign_id: e.id,
                                    category: e.category === m.jv.GLOBAL_EVENT ? "Global" : "Regional",
                                    expanded: e.expanded,
                                    theme: "normal" === e.severity ? "Normal" : "Callout"
                                }
                            })),
                            page_region: e,
                            vertical: "ABU"
                        }, l.KC.GLOBAL_ALERT))
                    }), [])
                },
                O = function(e) {
                    r.Z.sendEvent(b("viewed", {
                        campaign_id: e
                    }, l.KC.GLOBAL_ALERT))
                },
                w = function(e, n, t) {
                    r.Z.sendEvent(b("clicked", {
                        campaign_id: n,
                        action: k({
                            type: e
                        }, t)
                    }, l.KC.GLOBAL_ALERT))
                }
        },
        17345: function(e, n, t) {
            "use strict";
            t.d(n, {
                l: function() {
                    return a
                }
            });
            var i = t(33782),
                a = function(e, n) {
                    return (0, i.H0)(e) ? {
                        "X-Booking-Timeout-Ms": n,
                        "X-Envoy-Expected-Rq-Timeout-Ms": n
                    } : {}
                }
        },
        33782: function(e, n, t) {
            "use strict";
            t.d(n, {
                H0: function() {
                    return i
                },
                Vo: function() {
                    return a
                }
            });
            var i = function(e) {
                    return "prod" === e.getBPlatformEnvironment()
                },
                a = function(e) {
                    return !i(e)
                }
        },
        99236: function(e, n, t) {
            "use strict";
            t.d(n, {
                f: function() {
                    return i
                }
            });
            var i = function(e) {
                return !!e
            }
        },
        66049: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var i = function(e) {
                this.name = e
            };

            function a(e) {
                var n;
                return n = Array.isArray(e) ? e[0] : "object" === typeof e && Array.isArray(e.raw) ? e.raw[0] : e, new i(n)
            }
        },
        26662: function(e, n, t) {
            "use strict";

            function i(e) {
                return window.__caplaChunkMetadataStore.isFeatureRunning(e.name)
            }
            t.d(n, {
                Z: function() {
                    return i
                }
            })
        },
        2446: function(e, n, t) {
            "use strict";
            t.d(n, {
                B: function() {
                    return a
                }
            });
            var i = t(79399);

            function a() {
                var e = (0, i.T)();
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
        80827: function(e, n, t) {
            "use strict";
            t.d(n, {
                K: function() {
                    return _
                }
            });
            var i, a, r = t(79399),
                o = t(98178);
            ! function(e) {
                e.admin = "admin", e.app = "app", e.book = "book", e.join = "join"
            }(i || (i = {}));
            var d, l, s, u, c = ((a = {
                    DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
                })[o.N.EXTRANET] = ["hotel_id", "lang", "ses"], a),
                m = {
                    PRODUCTION: (d = {}, d[i.admin] = "admin", d[i.app] = "www", d[i.book] = "secure", d[i.join] = "join", d),
                    STAGING: (l = {}, l[i.admin] = "a", l[i.app] = "w", l[i.book] = "b", l[i.join] = "j", l),
                    KVM: (s = {}, s[i.admin] = ["adm", "devadmin"], s[i.app] = ["app", "devapp"], s[i.book] = ["book", "devbook"], s[i.join] = ["joinapp", "devjoinapp"], s),
                    DQS: (u = {}, u[i.admin] = "admin", u[i.app] = "app", u[i.book] = "book", u[i.join] = "join", u)
                },
                v = "booking.com",
                k = F(m.PRODUCTION),
                g = F(m.STAGING),
                p = F(m.KVM),
                f = F(m.DQS),
                h = new RegExp("^(.*?)\\.?(" + v + "|booking.cn)$"),
                S = new RegExp("^(?:" + g.join("|") + ")(\\d+)$"),
                y = new RegExp("^(\\w+)-(" + p.join("|") + ").*?\\.dev$"),
                N = new RegExp("(?:" + f.join("|") + ")\\.dqs$");

            function F(e) {
                return Object.values(e).flat()
            }

            function b(e, n) {
                var t = new Set;
                null == n || n.forEach((function(n, i) {
                    t.has(i) ? e.append(i, n) : (e.set(i, n), t.add(i))
                }))
            }

            function C(e) {
                return Array.isArray(e) ? e[0] : e
            }

            function _(e) {
                return function() {
                    var e = (0, r.T)(),
                        n = e.getBasePageUrl();
                    if (!n) throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                    var t = function(e, n, t, i) {
                        var a = new URLSearchParams,
                            r = n && c.hasOwnProperty(n) ? n : "DEFAULT";
                        return c[r].forEach((function(n) {
                            var t = e.searchParams.get(n);
                            t && a.set(n, t)
                        })), "number" === typeof(null == t ? void 0 : t.id) && a.set("aid", t.id.toString()), (null == t ? void 0 : t.label) && a.set("label", t.label.toString()), i && e.searchParams.forEach((function(e, n) {
                            var t;
                            (0 === (t = n).indexOf("exp_") || 0 === t.indexOf("b_feature_running_") || "exp_all" === t || "hotel_account_id" === t || "i_am_from" === t || "my_ip" === t) && a.set(n, e)
                        })), a
                    }(n, e.getSiteType(), e.getAffiliate(), e.isInternalIp());
                    return function(i) {
                        var a = new URL("" + n.origin + n.pathname),
                            r = i.host ? function(e, n) {
                                var t = e.host.match(h);
                                if (!t) return e;
                                var i = t[1],
                                    a = t[2];
                                if ("" === i || k.includes(i)) {
                                    var r = C(m.PRODUCTION[n]);
                                    e.host = r + "." + a
                                } else if (y.test(i)) {
                                    var o = C(m.KVM[n]);
                                    e.host = i.replace(y, "$1-" + o + ".dev." + v)
                                } else if (N.test(i)) {
                                    var d = C(m.DQS[n]);
                                    e.host = d + ".dqs." + v
                                } else if (S.test(i)) {
                                    var l = C(m.STAGING[n]);
                                    e.host = i.replace(S, l + "$1." + v)
                                }
                                return e
                            }(a, i.host) : a;
                        return i.pathname && (r.pathname = i.pathname), r.hash = i.hash || "", e.isRobotRequest() || (b(r.searchParams, t), b(r.searchParams, i.searchParams)), r
                    }
                }()(e)
            }
        },
        22208: function(e, n, t) {
            "use strict";
            t.d(n, {
                Lp: function() {
                    return he
                },
                s_: function() {
                    return q
                },
                ff: function() {
                    return le
                }
            });
            var i, a, r, o, d = t(20011),
                l = t(13613),
                s = t(47169),
                u = t(92577),
                c = t(62691),
                m = t(98178),
                v = t(79399),
                k = t(62950),
                g = t(32735),
                p = {
                    trigger: "fc2f2c0da8",
                    header: "d840541ba4",
                    content: "ae9536be5d",
                    "section-expand": "f522a8d44b",
                    description: "dc625444ef"
                },
                f = function() {
                    return f = Object.assign || function(e) {
                        for (var n, t = 1, i = arguments.length; t < i; t++)
                            for (var a in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        return e
                    }, f.apply(this, arguments)
                },
                h = {
                    "flag-ua": "Ua",
                    "flag-tr": "Tr"
                },
                S = {
                    default: k.InfoSignIcon
                },
                y = f(f({}, h), S),
                N = Object.keys(y),
                F = function(e) {
                    var n = e.icon,
                        t = void 0 === n ? "default" : n;
                    return "string" !== typeof t ? t : t.includes("flag-") ? g.createElement(c.Ee, {
                        asset: {
                            setName: "images-flags",
                            assetName: h[t]
                        },
                        attributes: {
                            "data-testid": "global-alert-decoration-flag"
                        }
                    }) : g.createElement(c.JO, {
                        svg: S[t],
                        color: "callout",
                        size: "large",
                        attributes: {
                            "data-testid": "global-alert-decoration-icon"
                        }
                    })
                },
                b = function() {
                    return b = Object.assign || function(e) {
                        for (var n, t = 1, i = arguments.length; t < i; t++)
                            for (var a in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        return e
                    }, b.apply(this, arguments)
                },
                C = function(e) {
                    var n = e.description,
                        t = e.links,
                        i = e.onToggle,
                        a = e.icon,
                        r = e.title,
                        o = e.expanded,
                        d = n || (null === t || void 0 === t ? void 0 : t.length),
                        l = !n && 1 === (null === t || void 0 === t ? void 0 : t.length),
                        s = function(e) {
                            e.url && window.open(e.url), e.onClick && e.onClick()
                        },
                        u = g.createElement(c.Kq, {
                            direction: "row",
                            gap: 2,
                            alignItems: "center",
                            className: p.header
                        }, g.createElement(F, {
                            icon: a
                        }), r && g.createElement(c.Kq.Item, {
                            grow: !0
                        }, g.createElement(c.xv, {
                            variant: "strong_2",
                            attributes: {
                                "data-testid": "global-alert-title"
                            }
                        }, r)), d && !l && g.createElement(c.JO, {
                            size: "large",
                            svg: o ? k.ArrowNavUpIcon : k.ArrowNavDownIcon,
                            attributes: {
                                "data-testid": "global-alert-icon-expand"
                            }
                        }), l && g.createElement(c.sR, {
                            onClick: function() {
                                return s(t[0])
                            },
                            attributes: {
                                "data-testid": "global-alert-icon-link"
                            }
                        }, g.createElement(c.JO, {
                            size: "large",
                            svg: k.ArrowNavRightIcon
                        })));
                    return g.createElement(c.xu, {
                        padding: 2,
                        borderRadius: 200,
                        borderColor: "disruptive" === e.severity ? "callout" : "neutral_alt",
                        backgroundColor: "disruptive" === e.severity ? "callout_alt" : "elevation_one",
                        attributes: {
                            "data-testid": "web-shell-global-alert"
                        }
                    }, d || l ? g.createElement(c.sR, {
                        onClick: function() {
                            d ? null === i || void 0 === i || i() : l && s(t[0])
                        },
                        tagName: "div",
                        className: p.trigger,
                        attributes: {
                            "data-testid": "global-alert-interactive-title"
                        }
                    }, u) : u, !d || l || !o && r ? null : g.createElement(c.Kq, {
                        className: p["section-expand"],
                        gap: 2
                    }, g.createElement(c.xv, {
                        variant: "body_2",
                        className: p.description,
                        attributes: {
                            "data-testid": "global-alert-content"
                        }
                    }, e.description), !l && (null === t || void 0 === t ? void 0 : t.length) ? g.createElement(c.Kq, {
                        gap: 3,
                        direction: "row",
                        attributes: {
                            "data-testid": "global-alert-links"
                        }
                    }, t.map((function(e) {
                        return g.createElement(c.rU, {
                            key: e.name,
                            className: p.link,
                            text: e.name,
                            href: e.url,
                            onClick: e.onClick,
                            attributes: b(b({}, e.attributes), {
                                "data-testid": "global-alert-link"
                            })
                        })
                    }))) : g.createElement(g.Fragment, null)))
                },
                _ = t(2419),
                I = t(72197),
                T = t(21930),
                L = t(13260),
                E = t(42015),
                O = t(39476),
                w = t(13736),
                A = (t(93354), t(44393), t(24094)),
                P = t(20720),
                R = t(26662),
                x = t(66049),
                D = [388087, 1446757, 1446758],
                B = function(e) {
                    return !(811872 !== e || !(0, R.Z)((0, x.Z)(i || (i = (0, w.Z)(["IeZXXDNFVFKOUYLLFJYbCceMNPVbPSUabSccETKe"]))))) || (0, R.Z)((0, x.Z)(a || (a = (0, w.Z)(["EBDIbIbXDeBGGTcZJFfHbeMPET"])))) && (0, R.Z)((0, x.Z)(r || (r = (0, w.Z)(["IePFbJMFVFKOUYLLHNOVRe"])))) && D.includes(e)
                },
                j = {
                    TURKEY_DEFAULT: {
                        id: "LOCAL_TURKEY_DEFAULT",
                        icon: "flag-tr",
                        severity: "normal",
                        title: (0, A.t)("webcore_shell_global_alert_turkey_title"),
                        description: (0, A.t)("webcore_shell_global_alert_turkey_body"),
                        category: P.jv.REGIONAL_EVENT
                    },
                    UKRAINE_DEFAULT: {
                        id: "LOCAL_UKRAINE_DEFAULT",
                        title: (0, A.t)("webcore_shell_global_alert_ukraine_title"),
                        description: (0, A.t)("webcore_shell_global_alert_ukraine_body_1"),
                        category: P.jv.REGIONAL_EVENT
                    },
                    UKRAINE_FROM_RUSSIA_BELARUS: {
                        id: "LOCAL_UKRAINE_FROM_RUSSIA_BELARUS",
                        title: (0, A.t)("webcore_shell_global_alert_ukraine_title"),
                        description: (0, A.t)("webcore_shell_global_alert_ukraine_body_2"),
                        category: P.jv.REGIONAL_EVENT
                    }
                },
                M = {
                    isWWW: function(e) {
                        return e.getSiteType() === m.N.WWW
                    },
                    isUkraineDestination: function(e, n) {
                        return "ua" === (null === n || void 0 === n ? void 0 : n.destination)
                    },
                    isTurkeyWhiteListed: function(e) {
                        var n, t = null === (n = e.getAffiliate()) || void 0 === n ? void 0 : n.id;
                        return !!t && B(t)
                    },
                    isTurkeyRedirect: function(e) {
                        var n = e.getBasePageUrl();
                        return !!n && function(e) {
                            var n;
                            return Boolean(null === (n = e.searchParams) || void 0 === n ? void 0 : n.get("tr_redirected"))
                        }(n)
                    },
                    isUkraineHotel: function(e) {
                        var n, t, i = null !== (n = null === (t = e.getBasePageUrl()) || void 0 === t ? void 0 : t.pathname) && void 0 !== n ? n : "";
                        return /^\/hotel\/ua\//.test(i)
                    },
                    isTurkey: function(e) {
                        return "tr" === e.getVisitorCountry()
                    },
                    isGermany: function(e) {
                        return "de" === e.getVisitorCountry()
                    },
                    isRussia: function(e) {
                        return "ru" === e.getVisitorCountry()
                    },
                    isBelarus: function(e) {
                        return "by" === e.getVisitorCountry()
                    },
                    isCrimea: function(e) {
                        return "xc" === e.getVisitorCountry()
                    }
                },
                V = function(e) {
                    return function(n) {
                        return !e(n)
                    }
                },
                H = (V(M.isTurkeyWhiteListed), V(M.isTurkeyRedirect), V(M.isTurkeyWhiteListed), []),
                U = (o = {}, (0, s.Z)(o, P.Eb.DISRUPTIVE, "disruptive"), (0, s.Z)(o, P.Eb.NORMAL, "normal"), o),
                q = {
                    kind: "Document",
                    definitions: [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "MerchComponentFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "MerchComponentsResult"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "regions"
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
                                            value: "components"
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
                                                        value: "GlobalAlerts"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alerts"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alertCampaignId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "designVariant"
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
                                                                                value: "DesktopAlertDefault"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "firstParagraph"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "secondParagraph"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "thirdParagraph"
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
                                                                                    value: "category"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "severity"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "expanded"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "firstCta"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "ariaLabel"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "text"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "targetLanding"
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
                                                                                                        value: "SearchResultsLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destType"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkin"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkout"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrAdults"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrChildren"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "childrenAges"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrRooms"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "filters"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DirectLinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DeeplinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "LoginLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "stub"
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
                                                                                    value: "secondCta"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "ariaLabel"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "text"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "targetLanding"
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
                                                                                                        value: "SearchResultsLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destType"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkin"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkout"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrAdults"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrChildren"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "childrenAges"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrRooms"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "filters"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DirectLinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DeeplinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "LoginLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "stub"
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
                                                                                    value: "thirdCta"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "ariaLabel"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "text"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "targetLanding"
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
                                                                                                        value: "SearchResultsLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destType"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkin"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkout"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrAdults"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrChildren"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "childrenAges"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrRooms"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "filters"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DirectLinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DeeplinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "LoginLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "stub"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "MdotAlertDefault"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "firstParagraph"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "secondParagraph"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "thirdParagraph"
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
                                                                                    value: "category"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "severity"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "expanded"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "firstCta"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "ariaLabel"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "text"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "targetLanding"
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
                                                                                                        value: "SearchResultsLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destType"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkin"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkout"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrAdults"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrChildren"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "childrenAges"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrRooms"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "filters"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DirectLinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DeeplinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "LoginLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "stub"
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
                                                                                    value: "secondCta"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "ariaLabel"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "text"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "targetLanding"
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
                                                                                                        value: "SearchResultsLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destType"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkin"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkout"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrAdults"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrChildren"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "childrenAges"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrRooms"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "filters"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DirectLinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DeeplinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "LoginLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "stub"
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
                                                                                    value: "thirdCta"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "ariaLabel"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "text"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "targetLanding"
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
                                                                                                        value: "SearchResultsLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destType"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "destId"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkin"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkout"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrAdults"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrChildren"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "childrenAges"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nrRooms"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "filters"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DirectLinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "DeeplinkLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "urlPath"
                                                                                                        },
                                                                                                        arguments: [],
                                                                                                        directives: []
                                                                                                    }, {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "queryParams"
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
                                                                                                                    value: "value"
                                                                                                                },
                                                                                                                arguments: [],
                                                                                                                directives: []
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
                                                                                                        value: "LoginLanding"
                                                                                                    }
                                                                                                },
                                                                                                directives: [],
                                                                                                selectionSet: {
                                                                                                    kind: "SelectionSet",
                                                                                                    selections: [{
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "stub"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 7476,
                        source: {
                            body: "\n  fragment MerchComponentFragment on MerchComponentsResult {\n    regions {\n      id\n      components {\n        ... on GlobalAlerts {\n          alerts {\n            alertCampaignId\n            designVariant {\n              ... on DesktopAlertDefault {\n                title\n                firstParagraph\n                secondParagraph\n                thirdParagraph\n                icon\n                category\n                severity\n                expanded\n                firstCta {\n                  ariaLabel\n                  text\n                  targetLanding {\n                    ... on SearchResultsLanding {\n                      destType\n                      destId\n                      checkin\n                      checkout\n                      nrAdults\n                      nrChildren\n                      childrenAges\n                      nrRooms\n                      filters {\n                        name\n                        value\n                      }\n                    }\n                    ... on DirectLinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on DeeplinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on LoginLanding {\n                      stub\n                    }\n                  }\n                }\n                secondCta {\n                  ariaLabel\n                  text\n                  targetLanding {\n                    ... on SearchResultsLanding {\n                      destType\n                      destId\n                      checkin\n                      checkout\n                      nrAdults\n                      nrChildren\n                      childrenAges\n                      nrRooms\n                      filters {\n                        name\n                        value\n                      }\n                    }\n                    ... on DirectLinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on DeeplinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on LoginLanding {\n                      stub\n                    }\n                  }\n                }\n                thirdCta {\n                  ariaLabel\n                  text\n                  targetLanding {\n                    ... on SearchResultsLanding {\n                      destType\n                      destId\n                      checkin\n                      checkout\n                      nrAdults\n                      nrChildren\n                      childrenAges\n                      nrRooms\n                      filters {\n                        name\n                        value\n                      }\n                    }\n                    ... on DirectLinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on DeeplinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on LoginLanding {\n                      stub\n                    }\n                  }\n                }\n              }\n              ... on MdotAlertDefault {\n                title\n                firstParagraph\n                secondParagraph\n                thirdParagraph\n                icon\n                category\n                severity\n                expanded\n                firstCta {\n                  ariaLabel\n                  text\n                  targetLanding {\n                    ... on SearchResultsLanding {\n                      destType\n                      destId\n                      checkin\n                      checkout\n                      nrAdults\n                      nrChildren\n                      childrenAges\n                      nrRooms\n                      filters {\n                        name\n                        value\n                      }\n                    }\n                    ... on DirectLinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on DeeplinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on LoginLanding {\n                      stub\n                    }\n                  }\n                }\n                secondCta {\n                  ariaLabel\n                  text\n                  targetLanding {\n                    ... on SearchResultsLanding {\n                      destType\n                      destId\n                      checkin\n                      checkout\n                      nrAdults\n                      nrChildren\n                      childrenAges\n                      nrRooms\n                      filters {\n                        name\n                        value\n                      }\n                    }\n                    ... on DirectLinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on DeeplinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on LoginLanding {\n                      stub\n                    }\n                  }\n                }\n                thirdCta {\n                  ariaLabel\n                  text\n                  targetLanding {\n                    ... on SearchResultsLanding {\n                      destType\n                      destId\n                      checkin\n                      checkout\n                      nrAdults\n                      nrChildren\n                      childrenAges\n                      nrRooms\n                      filters {\n                        name\n                        value\n                      }\n                    }\n                    ... on DirectLinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on DeeplinkLanding {\n                      urlPath\n                      queryParams {\n                        name\n                        value\n                      }\n                    }\n                    ... on LoginLanding {\n                      stub\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                G = {
                    kind: "Document",
                    definitions: function(e) {
                        var n = {};
                        return e.filter((function(e) {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            var t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
                        }))
                    }([{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "GlobalAlertConfigs"
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
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchComponentsInput"
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
                                    value: "merchComponents"
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
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "MerchComponentFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }].concat(q.definitions)),
                    loc: {
                        start: 0,
                        end: 142,
                        source: {
                            body: "\n  query GlobalAlertConfigs($input: MerchComponentsInput) {\n    merchComponents(input: $input) {\n      ...MerchComponentFragment\n    }\n  }\n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                Z = t(17345),
                K = t(80827),
                Q = t(99236),
                Y = t(94114);

            function z(e, n) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, n) {
                            if (!e) return;
                            if ("string" === typeof e) return W(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return W(e, n)
                        }(e)) || n && e && "number" === typeof e.length) {
                        t && (e = t);
                        var i = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: a
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    d = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        d = !0, r = e
                    },
                    f: function() {
                        try {
                            o || null == t.return || t.return()
                        } finally {
                            if (d) throw r
                        }
                    }
                }
            }

            function W(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
                return i
            }

            function X(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function $(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? X(Object(t), !0).forEach((function(n) {
                        (0, s.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var J = function(e) {
                    switch (e.__typename) {
                        case "DeeplinkLanding":
                            return te(e);
                        case "DirectLinkLanding":
                            return ie(e);
                        case "LoginLanding":
                            return ne(e);
                        case "SearchResultsLanding":
                            return ee(e);
                        default:
                            return void(0, E.c1)("[mapCallToActionUrl] Unknown typename for targetLanding for CTA - ".concat(e.__typename))
                    }
                },
                ee = function(e) {
                    var n;
                    return (0, Y.d)($($({}, e), {}, {
                        nbAdults: e.nrAdults,
                        nbChildren: e.nrChildren,
                        nbRooms: e.nrRooms,
                        selectedFilters: e.filters && (null === (n = e.filters[0]) || void 0 === n ? void 0 : n.value)
                    })).toString()
                },
                ne = function(e) {
                    var n, t = null === (n = (0, v.T)().getBasePageUrl()) || void 0 === n ? void 0 : n.toString();
                    if (t) {
                        var i = (0, K.K)({
                            pathname: "index.html"
                        });
                        return i.searchParams.set("login_redirect", t), i.toString()
                    }(0, E.c1)("[mapLoginLandingUrl] No redirect URL is passed")
                },
                te = function(e) {
                    var n = e.urlPath,
                        t = e.queryParams;
                    try {
                        var i, a = new URL(n),
                            r = z(null !== t && void 0 !== t ? t : []);
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var o = i.value;
                                a.searchParams.set(o.name, o.value)
                            }
                        } catch (d) {
                            r.e(d)
                        } finally {
                            r.f()
                        }
                        return a.toString()
                    } catch (l) {
                        return void(0, E.c1)("[mapDeeplinkLanding] Invaild URL ".concat(n))
                    }
                },
                ie = function(e) {
                    var n = e.urlPath,
                        t = e.queryParams;
                    try {
                        var i, a = new URLSearchParams,
                            r = z(null !== t && void 0 !== t ? t : []);
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var o = i.value;
                                a.set(o.name, o.value)
                            }
                        } catch (d) {
                            r.e(d)
                        } finally {
                            r.f()
                        }
                        return (0, K.K)({
                            pathname: n,
                            searchParams: a
                        }).toString()
                    } catch (l) {
                        return void(0, E.c1)("[mapDirectLinkLanding] Invaild URL ".concat(n))
                    }
                };

            function ae(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function re(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? ae(Object(t), !0).forEach((function(n) {
                        (0, s.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ae(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var oe = [
                    ["disruptive", !0],
                    ["disruptive", !1],
                    ["normal", !0],
                    ["normal", !1]
                ],
                de = function(e) {
                    return oe.findIndex((function(n) {
                        var t, i;
                        return n[0] === (null !== (t = e.severity) && void 0 !== t ? t : "normal") && n[1] === (null !== (i = e.expanded) && void 0 !== i && i)
                    }))
                },
                le = function(e) {
                    var n, t;
                    return (null !== (n = null === e || void 0 === e || null === (t = e.regions) || void 0 === t ? void 0 : t.reduce((function(e, n) {
                        var t, i;
                        return [].concat((0, T.Z)(e), (0, T.Z)(null !== (t = null === (i = n.components) || void 0 === i ? void 0 : i.filter((function(e) {
                            return "GlobalAlerts" === e.__typename
                        })).flatMap((function(e) {
                            var n;
                            return null === (n = e.alerts) || void 0 === n ? void 0 : n.filter((function(e) {
                                return "AppShellGlobalAlertDefault" !== (null === e || void 0 === e ? void 0 : e.designVariant.__typename)
                            })).map((function(e) {
                                var n;
                                return null !== (n = re(re({}, null === e || void 0 === e ? void 0 : e.designVariant), {}, {
                                    id: null === e || void 0 === e ? void 0 : e.alertCampaignId
                                })) && void 0 !== n ? n : []
                            }))
                        })).filter(Boolean)) && void 0 !== t ? t : []))
                    }), [])) && void 0 !== n ? n : []).map((function(e) {
                        return {
                            id: e.id,
                            icon: e.icon && N.includes(e.icon) ? e.icon : void 0,
                            title: e.title,
                            severity: U[e.severity],
                            category: e.category,
                            description: [e.firstParagraph, e.secondParagraph, e.thirdParagraph].filter(Boolean).join("\n"),
                            expanded: e.expanded,
                            links: [e.firstCta, e.secondCta, e.thirdCta].filter(Q.f).filter((function(e) {
                                return Boolean(e.text)
                            })).map((function(e) {
                                var n;
                                return {
                                    name: e.text,
                                    url: null !== (n = J(null === e || void 0 === e ? void 0 : e.targetLanding)) && void 0 !== n ? n : "",
                                    attributes: {
                                        target: "_blank",
                                        "aria-label": e.ariaLabel
                                    }
                                }
                            })).filter((function(e) {
                                return Boolean(e.url)
                            }))
                        }
                    }))
                },
                se = function(e, n) {
                    var t;
                    return re(re({}, e), {}, {
                        links: null === (t = e.links) || void 0 === t ? void 0 : t.map((function(t) {
                            return re(re({}, t), {}, {
                                onClick: n ? function() {
                                    return n(e.id)
                                } : void 0
                            })
                        }))
                    })
                },
                ue = {
                    IndexPage: "index_global_alerts",
                    SearchResultPage: "sr_global_alerts",
                    HotelPage: "hp_global_alerts"
                },
                ce = function(e, n) {
                    var t, i = n.requestContext,
                        a = n.extraInfo,
                        r = n.onLinkClick,
                        o = (0, O.QT)(),
                        d = (0, g.useState)((null !== (t = function(e) {
                            var n = e.requestContext,
                                t = e.pageRegionId,
                                i = e.globalAlertsConfigs,
                                a = e.pageRegionsGlobalAlertsRel,
                                r = e.extraInfo;
                            return a.filter((function(e) {
                                return e.pageRegionId === t
                            })).filter((function(e) {
                                return e.rules.every((function(e) {
                                    return e(n, r)
                                }))
                            })).filter((function(e) {
                                var n = e.globalAlertId;
                                return Boolean(i[n])
                            })).map((function(e) {
                                var n = e.globalAlertId,
                                    t = e.expanded,
                                    a = e.severity,
                                    r = i[n];
                                return re(re({}, r), {}, {
                                    expanded: t,
                                    severity: a || r.severity,
                                    links: r.links ? r.links.map((function(e) {
                                        return re(re({}, e), {}, {
                                            url: (0, K.K)({
                                                pathname: e.url
                                            }).toString()
                                        })
                                    })) : void 0
                                })
                            }))
                        }({
                            requestContext: i,
                            pageRegionId: e,
                            globalAlertsConfigs: j,
                            pageRegionsGlobalAlertsRel: H,
                            extraInfo: a
                        })) && void 0 !== t ? t : []).map((function(e) {
                            var n, t;
                            return {
                                id: e.id,
                                title: e.title ? o.trans(e.title) : void 0,
                                description: function(e) {
                                    if (e) return Array.isArray(e) ? e.map(o.trans).join("\n") : o.trans(e)
                                }(e.description),
                                category: null !== (n = e.category) && void 0 !== n ? n : P.jv.GLOBAL_EVENT,
                                severity: e.severity,
                                expanded: e.expanded,
                                icon: e.icon,
                                links: null === (t = e.links) || void 0 === t ? void 0 : t.map((function(n) {
                                    var t;
                                    return {
                                        name: n.name ? o.trans(n.name) : "",
                                        url: n.url,
                                        onClick: r ? function() {
                                            return r(e.id)
                                        } : void 0,
                                        attributes: {
                                            target: "_blank",
                                            "aria-label": null !== (t = n.attributes) && void 0 !== t && t.ariaLabel ? o.trans(n.attributes.ariaLabel) : void 0
                                        }
                                    }
                                }))
                            }
                        })));
                    return (0, u.Z)(d, 1)[0]
                },
                me = function(e, n) {
                    var t, i = n.outsideData ? n.outsideData.map((function(e) {
                        return se(e, n.onLinkClick)
                    })) : [];
                    return t = [].concat((0, T.Z)(ce(e, n)), (0, T.Z)(function(e, n) {
                        var t = n.requestContext,
                            i = n.onLinkClick,
                            a = n.outsideData,
                            r = (0, L.a)(G, {
                                context: {
                                    headers: (0, Z.l)(t, 1500)
                                },
                                variables: {
                                    input: {
                                        regionsIds: [e]
                                    }
                                },
                                skip: Boolean(a) || !e
                            }),
                            o = r.data,
                            d = r.error;
                        return d && (0, E.eK)(d), le(null === o || void 0 === o ? void 0 : o.merchComponents).map((function(e) {
                            return se(e, i)
                        }))
                    }(ue[e], n)), (0, T.Z)(i)), t.sort((function(e, n) {
                        return de(e) - de(n)
                    }))
                },
                ve = new Map([
                    ["".concat(m.N.WWW, "-IndexPage"), ["0 0 30px", "0 6px"]],
                    ["".concat(m.N.WWW, "-SearchResultPage"), ["8px 0", "0 6px"]],
                    ["".concat(m.N.WWW, "-HotelPage"), ["0 0 16px", "0 5px"]],
                    ["".concat(m.N.MDOT, "-IndexPage"), ["0 0 16px", "0 16px"]],
                    ["".concat(m.N.MDOT, "-SearchResultPage"), ["0", "8px 4px"]],
                    ["".concat(m.N.MDOT, "-HotelPage"), ["16px 0 0", "0 16px"]]
                ]),
                ke = function(e) {
                    var n, t = e.siteType,
                        i = e.regionId,
                        a = e.children,
                        r = "".concat(t, "-").concat(i),
                        o = null !== (n = ve.get(r)) && void 0 !== n ? n : ["0", "0"],
                        d = (0, u.Z)(o, 2),
                        l = d[0],
                        s = d[1];
                    return g.createElement("div", {
                        style: {
                            margin: l,
                            padding: s
                        }
                    }, a)
                },
                ge = ["id"];

            function pe(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function fe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? pe(Object(t), !0).forEach((function(n) {
                        (0, s.Z)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pe(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
            var he = function(e) {
                var n, t = e.globalAlertsConfig,
                    i = e.regionId,
                    a = e.extraInfo,
                    r = (0, v.T)(),
                    o = me(null !== i && void 0 !== i ? i : "", {
                        requestContext: r,
                        extraInfo: a,
                        outsideData: t,
                        onLinkClick: function(e) {
                            (0, I.fv)(I.gM.CTA, e)
                        }
                    }),
                    k = null !== (n = r.getSiteType()) && void 0 !== n ? n : m.N.WWW,
                    p = (0, g.useState)(o.filter((function(e) {
                        return Boolean(e.description)
                    })).reduce((function(e, n) {
                        var t;
                        return fe(fe({}, e), {}, (0, s.Z)({}, n.id, null !== (t = n.expanded) && void 0 !== t && t))
                    }), {})),
                    f = (0, u.Z)(p, 2),
                    h = f[0],
                    S = f[1];
                return (0, I.Vh)(), (0, I.w0)(i, o), o.length > 0 ? g.createElement(ke, {
                    siteType: k,
                    regionId: i
                }, g.createElement(c.Kq, {
                    gap: 3
                }, o.map((function(e) {
                    var n = e.id,
                        t = (0, l.Z)(e, ge);
                    return g.createElement(_.df, {
                        key: n,
                        onChange: function() {
                            return (0, I.SQ)(n)
                        }
                    }, g.createElement(C, (0, d.Z)({}, t, {
                        expanded: h[n],
                        onToggle: function() {
                            return function(e) {
                                S((function(n) {
                                    return (0, I.fv)(n[e] ? I.gM.Collapse : I.gM.Expand, e), fe(fe({}, n), {}, (0, s.Z)({}, e, !n[e]))
                                }))
                            }(n)
                        }
                    })))
                })))) : null
            }
        },
        87703: function(e, n, t) {
            "use strict";
            t.d(n, {
                FP: function() {
                    return a
                },
                KC: function() {
                    return i
                },
                Nu: function() {
                    return d
                },
                OR: function() {
                    return l
                }
            });
            var i, a, r = t(75928);
            ! function(e) {
                e.HEADER = "header", e.FOOTER = "footer", e.GLOBAL_ALERT = "global_alert"
            }(i || (i = {})),
            function(e) {
                e.LOGO_CLICKED = "logo_clicked", e.SOCIAL_ENTRY_CLICKED = "social-entrypoint_clicked", e.HELP_CENTER_CLICKED = "help-center_clicked", e.LIST_PROPERTY_CLICKED = "list-property_clicked", e.SIGN_UP_CLICKED = "sign-up_clicked", e.SIGN_IN_CLICKED = "sign-in_clicked", e.PROFILE_CLICKED = "profile_clicked", e.PROFILE_OPTION_CHOSEN = "profile-option_chosen", e.NOTIF_CLICKED = "notification_clicked", e.PICKER_CLICKED = "picker_clicked", e.PICKER_OPTION_CHOSEN = "picker-option_chosen", e.TAB_EXPOSED = "xpb-tab_exposed", e.TAB_CLICKED = "xpb-tab_clicked", e.MOBILE_MENU_OPEN = "mobile_menu_open", e.MOBILE_MENU_CLOSE = "mobile_menu_close", e.ASSISTANT_CLICKED = "assistant_clicked", e.CURRENCY_PICKER_OPEN = "currency-picker_open", e.CURRENCY_PICKER_CLOSE = "currency-picker_close"
            }(a || (a = {}));
            var o = function(e, n) {
                    return void 0 === n && (n = i.HEADER), "".concat("WEB_SHELL_UX", "_").concat(n, "_").concat(e)
                },
                d = function(e, n) {
                    if (window) {
                        var t = function(e, n) {
                            return new CustomEvent(o(e), {
                                detail: n
                            })
                        }(e, n);
                        window.dispatchEvent(t)
                    }
                },
                l = function(e, n) {
                    (0, r.Z)((function() {
                        return window.addEventListener(o(e), n),
                            function() {
                                window.removeEventListener(o(e), n)
                            }
                    }), [e, n])
                }
        },
        2419: function(e, n, t) {
            "use strict";
            t.d(n, {
                YD: function() {
                    return g
                },
                df: function() {
                    return k
                }
            });
            var i = t(32735);

            function a() {
                return a = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function r(e, n) {
                return r = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                }, r(e, n)
            }
            var o = new Map,
                d = new WeakMap,
                l = 0,
                s = void 0;

            function u(e) {
                return Object.keys(e).sort().filter((function(n) {
                    return void 0 !== e[n]
                })).map((function(n) {
                    return n + "_" + ("root" === n ? (t = e.root) ? (d.has(t) || (l += 1, d.set(t, l.toString())), d.get(t)) : "0" : e[n]);
                    var t
                })).toString()
            }

            function c(e, n, t, i) {
                if (void 0 === t && (t = {}), void 0 === i && (i = s), "undefined" === typeof window.IntersectionObserver && void 0 !== i) {
                    var a = e.getBoundingClientRect();
                    return n(i, {
                            isIntersecting: i,
                            target: e,
                            intersectionRatio: "number" === typeof t.threshold ? t.threshold : 0,
                            time: 0,
                            boundingClientRect: a,
                            intersectionRect: a,
                            rootBounds: a
                        }),
                        function() {}
                }
                var r = function(e) {
                        var n = u(e),
                            t = o.get(n);
                        if (!t) {
                            var i, a = new Map,
                                r = new IntersectionObserver((function(n) {
                                    n.forEach((function(n) {
                                        var t, r = n.isIntersecting && i.some((function(e) {
                                            return n.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && "undefined" === typeof n.isVisible && (n.isVisible = r), null == (t = a.get(n.target)) || t.forEach((function(e) {
                                            e(r, n)
                                        }))
                                    }))
                                }), e);
                            i = r.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), t = {
                                id: n,
                                observer: r,
                                elements: a
                            }, o.set(n, t)
                        }
                        return t
                    }(t),
                    d = r.id,
                    l = r.observer,
                    c = r.elements,
                    m = c.get(e) || [];
                return c.has(e) || c.set(e, m), m.push(n), l.observe(e),
                    function() {
                        m.splice(m.indexOf(n), 1), 0 === m.length && (c.delete(e), l.unobserve(e)), 0 === c.size && (l.disconnect(), o.delete(d))
                    }
            }
            var m = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function v(e) {
                return "function" !== typeof e.children
            }
            var k = function(e) {
                var n, t;

                function o(n) {
                    var t;
                    return (t = e.call(this, n) || this).node = null, t._unobserveCb = null, t.handleNode = function(e) {
                        t.node && (t.unobserve(), e || t.props.triggerOnce || t.props.skip || t.setState({
                            inView: !!t.props.initialInView,
                            entry: void 0
                        })), t.node = e || null, t.observeNode()
                    }, t.handleChange = function(e, n) {
                        e && t.props.triggerOnce && t.unobserve(), v(t.props) || t.setState({
                            inView: e,
                            entry: n
                        }), t.props.onChange && t.props.onChange(e, n)
                    }, t.state = {
                        inView: !!n.initialInView,
                        entry: void 0
                    }, t
                }
                t = e, (n = o).prototype = Object.create(t.prototype), n.prototype.constructor = n, r(n, t);
                var d = o.prototype;
                return d.componentDidUpdate = function(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, d.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, d.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var e = this.props,
                            n = e.threshold,
                            t = e.root,
                            i = e.rootMargin,
                            a = e.trackVisibility,
                            r = e.delay,
                            o = e.fallbackInView;
                        this._unobserveCb = c(this.node, this.handleChange, {
                            threshold: n,
                            root: t,
                            rootMargin: i,
                            trackVisibility: a,
                            delay: r
                        }, o)
                    }
                }, d.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, d.render = function() {
                    if (!v(this.props)) {
                        var e = this.state,
                            n = e.inView,
                            t = e.entry;
                        return this.props.children({
                            inView: n,
                            entry: t,
                            ref: this.handleNode
                        })
                    }
                    var r = this.props,
                        o = r.children,
                        d = r.as,
                        l = function(e, n) {
                            if (null == e) return {};
                            var t, i, a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) t = r[i], n.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a
                        }(r, m);
                    return i.createElement(d || "div", a({
                        ref: this.handleNode
                    }, l), o)
                }, o
            }(i.Component);

            function g(e) {
                var n = void 0 === e ? {} : e,
                    t = n.threshold,
                    a = n.delay,
                    r = n.trackVisibility,
                    o = n.rootMargin,
                    d = n.root,
                    l = n.triggerOnce,
                    s = n.skip,
                    u = n.initialInView,
                    m = n.fallbackInView,
                    v = i.useRef(),
                    k = i.useState({
                        inView: !!u
                    }),
                    g = k[0],
                    p = k[1],
                    f = i.useCallback((function(e) {
                        void 0 !== v.current && (v.current(), v.current = void 0), s || e && (v.current = c(e, (function(e, n) {
                            p({
                                inView: e,
                                entry: n
                            }), n.isIntersecting && l && v.current && (v.current(), v.current = void 0)
                        }), {
                            root: d,
                            rootMargin: o,
                            threshold: t,
                            trackVisibility: r,
                            delay: a
                        }, m))
                    }), [Array.isArray(t) ? t.toString() : t, d, o, l, s, r, m, a]);
                (0, i.useEffect)((function() {
                    v.current || !g.entry || l || s || p({
                        inView: !!u
                    })
                }));
                var h = [f, g.inView, g.entry];
                return h.ref = h[0], h.inView = h[1], h.entry = h[2], h
            }
            k.displayName = "InView", k.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
        },
        39649: function(e, n, t) {
            var i = t(8114).default;

            function a() {
                "use strict";
                e.exports = a = function() {
                    return n
                }, e.exports.__esModule = !0, e.exports.default = e.exports;
                var n = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    o = Object.defineProperty || function(e, n, t) {
                        e[n] = t.value
                    },
                    d = "function" == typeof Symbol ? Symbol : {},
                    l = d.iterator || "@@iterator",
                    s = d.asyncIterator || "@@asyncIterator",
                    u = d.toStringTag || "@@toStringTag";

                function c(e, n, t) {
                    return Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[n]
                }
                try {
                    c({}, "")
                } catch (w) {
                    c = function(e, n, t) {
                        return e[n] = t
                    }
                }

                function m(e, n, t, i) {
                    var a = n && n.prototype instanceof g ? n : g,
                        r = Object.create(a.prototype),
                        d = new L(i || []);
                    return o(r, "_invoke", {
                        value: C(e, t, d)
                    }), r
                }

                function v(e, n, t) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(n, t)
                        }
                    } catch (w) {
                        return {
                            type: "throw",
                            arg: w
                        }
                    }
                }
                n.wrap = m;
                var k = {};

                function g() {}

                function p() {}

                function f() {}
                var h = {};
                c(h, l, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    y = S && S(S(E([])));
                y && y !== t && r.call(y, l) && (h = y);
                var N = f.prototype = g.prototype = Object.create(h);

                function F(e) {
                    ["next", "throw", "return"].forEach((function(n) {
                        c(e, n, (function(e) {
                            return this._invoke(n, e)
                        }))
                    }))
                }

                function b(e, n) {
                    function t(a, o, d, l) {
                        var s = v(e[a], e, o);
                        if ("throw" !== s.type) {
                            var u = s.arg,
                                c = u.value;
                            return c && "object" == i(c) && r.call(c, "__await") ? n.resolve(c.__await).then((function(e) {
                                t("next", e, d, l)
                            }), (function(e) {
                                t("throw", e, d, l)
                            })) : n.resolve(c).then((function(e) {
                                u.value = e, d(u)
                            }), (function(e) {
                                return t("throw", e, d, l)
                            }))
                        }
                        l(s.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(e, i) {
                            function r() {
                                return new n((function(n, a) {
                                    t(e, i, n, a)
                                }))
                            }
                            return a = a ? a.then(r, r) : r()
                        }
                    })
                }

                function C(e, n, t) {
                    var i = "suspendedStart";
                    return function(a, r) {
                        if ("executing" === i) throw new Error("Generator is already running");
                        if ("completed" === i) {
                            if ("throw" === a) throw r;
                            return O()
                        }
                        for (t.method = a, t.arg = r;;) {
                            var o = t.delegate;
                            if (o) {
                                var d = _(o, t);
                                if (d) {
                                    if (d === k) continue;
                                    return d
                                }
                            }
                            if ("next" === t.method) t.sent = t._sent = t.arg;
                            else if ("throw" === t.method) {
                                if ("suspendedStart" === i) throw i = "completed", t.arg;
                                t.dispatchException(t.arg)
                            } else "return" === t.method && t.abrupt("return", t.arg);
                            i = "executing";
                            var l = v(e, n, t);
                            if ("normal" === l.type) {
                                if (i = t.done ? "completed" : "suspendedYield", l.arg === k) continue;
                                return {
                                    value: l.arg,
                                    done: t.done
                                }
                            }
                            "throw" === l.type && (i = "completed", t.method = "throw", t.arg = l.arg)
                        }
                    }
                }

                function _(e, n) {
                    var t = e.iterator[n.method];
                    if (void 0 === t) {
                        if (n.delegate = null, "throw" === n.method) {
                            if (e.iterator.return && (n.method = "return", n.arg = void 0, _(e, n), "throw" === n.method)) return k;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return k
                    }
                    var i = v(t, e.iterator, n.arg);
                    if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, k;
                    var a = i.arg;
                    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, k) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, k)
                }

                function I(e) {
                    var n = {
                        tryLoc: e[0]
                    };
                    1 in e && (n.catchLoc = e[1]), 2 in e && (n.finallyLoc = e[2], n.afterLoc = e[3]), this.tryEntries.push(n)
                }

                function T(e) {
                    var n = e.completion || {};
                    n.type = "normal", delete n.arg, e.completion = n
                }

                function L(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(I, this), this.reset(!0)
                }

                function E(e) {
                    if (e) {
                        var n = e[l];
                        if (n) return n.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var t = -1,
                                i = function n() {
                                    for (; ++t < e.length;)
                                        if (r.call(e, t)) return n.value = e[t], n.done = !1, n;
                                    return n.value = void 0, n.done = !0, n
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = f, o(N, "constructor", {
                    value: f,
                    configurable: !0
                }), o(f, "constructor", {
                    value: p,
                    configurable: !0
                }), p.displayName = c(f, u, "GeneratorFunction"), n.isGeneratorFunction = function(e) {
                    var n = "function" == typeof e && e.constructor;
                    return !!n && (n === p || "GeneratorFunction" === (n.displayName || n.name))
                }, n.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, c(e, u, "GeneratorFunction")), e.prototype = Object.create(N), e
                }, n.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, F(b.prototype), c(b.prototype, s, (function() {
                    return this
                })), n.AsyncIterator = b, n.async = function(e, t, i, a, r) {
                    void 0 === r && (r = Promise);
                    var o = new b(m(e, t, i, a), r);
                    return n.isGeneratorFunction(t) ? o : o.next().then((function(e) {
                        return e.done ? e.value : o.next()
                    }))
                }, F(N), c(N, u, "Generator"), c(N, l, (function() {
                    return this
                })), c(N, "toString", (function() {
                    return "[object Generator]"
                })), n.keys = function(e) {
                    var n = Object(e),
                        t = [];
                    for (var i in n) t.push(i);
                    return t.reverse(),
                        function e() {
                            for (; t.length;) {
                                var i = t.pop();
                                if (i in n) return e.value = i, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, n.values = E, L.prototype = {
                    constructor: L,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;

                        function t(t, i) {
                            return o.type = "throw", o.arg = e, n.next = t, i && (n.method = "next", n.arg = void 0), !!i
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                o = a.completion;
                            if ("root" === a.tryLoc) return t("end");
                            if (a.tryLoc <= this.prev) {
                                var d = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (d && l) {
                                    if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return t(a.finallyLoc)
                                } else if (d) {
                                    if (this.prev < a.catchLoc) return t(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return t(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, n) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var a = i;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= n && n <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = e, o.arg = n, a ? (this.method = "next", this.next = a.finallyLoc, k) : this.complete(o)
                    },
                    complete: function(e, n) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && n && (this.next = n), k
                    },
                    finish: function(e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var t = this.tryEntries[n];
                            if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), T(t), k
                        }
                    },
                    catch: function(e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var t = this.tryEntries[n];
                            if (t.tryLoc === e) {
                                var i = t.completion;
                                if ("throw" === i.type) {
                                    var a = i.arg;
                                    T(t)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, t) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: n,
                            nextLoc: t
                        }, "next" === this.method && (this.arg = void 0), k
                    }
                }, n
            }
            e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        8114: function(e) {
            function n(t) {
                return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
            }
            e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
        },
        72975: function(e, n, t) {
            var i = t(39649)();
            e.exports = i;
            try {
                regeneratorRuntime = i
            } catch (a) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = i : Function("r", "regeneratorRuntime = r")(i)
            }
        },
        8821: function(e, n, t) {
            "use strict";

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(n, {
                Z: function() {
                    return i
                }
            })
        },
        85169: function(e, n, t) {
            "use strict";

            function i(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function a(e, n, t) {
                return n && i(e.prototype, n), t && i(e, t), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            t.d(n, {
                Z: function() {
                    return a
                }
            })
        },
        13613: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var i = t(66017);

            function a(e, n) {
                if (null == e) return {};
                var t, a, r = (0, i.Z)(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < o.length; a++) t = o[a], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                }
                return r
            }
        },
        13736: function(e, n, t) {
            "use strict";

            function i(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }
            t.d(n, {
                Z: function() {
                    return i
                }
            })
        },
        21930: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            var i = t(37017);
            var a = t(49139);

            function r(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, i.Z)(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || (0, a.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    }
]);
//# sourceMappingURL=https://s3-main-01.booking.com/internal-static/capla/static/js/880.060089dc.chunk.js.map