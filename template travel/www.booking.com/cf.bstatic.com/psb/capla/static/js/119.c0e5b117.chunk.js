/*! For license information please see 119.c0e5b117.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe"] = self["b-index-lp-web-mfe"] || []).push([
    [119], {
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
                    return p
                }
            });
            var r = n(31191),
                i = (n(66022), n(32735)),
                o = n(82497),
                a = n(24605),
                s = n(6637),
                c = n(14222),
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
                            networkStatus: s.I.ready,
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
                                networkStatus: s.I.loading,
                                called: !0,
                                data: void 0,
                                stale: !1,
                                client: this.client
                            }, this.observableQueryFields());
                        if (i && (this.ssrInitiated() || o)) return this.previous.result = a, a;
                        if (this.ssrInitiated()) {
                            var c = this.getExecuteResult() || a;
                            return c.loading && !n && this.context.renderPromises.addQueryPromise(this, (function() {
                                return null
                            })), c
                        }
                    }, t.prototype.prepareObservableQueryOptions = function() {
                        var e = this.getOptions();
                        this.verifyDocumentType(e.query, c.n_.Query);
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
                                    s = t.previous.result;
                                s && s.loading === r && s.networkStatus === i && (0, o.D)(s.data, a) || e()
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
                            networkStatus: s.I.ready,
                            called: !0
                        });
                        else if (this.currentObservable) {
                            var n = this.currentObservable.getCurrentResult(),
                                i = n.data,
                                o = n.loading,
                                c = n.partial,
                                u = n.networkStatus,
                                l = n.errors,
                                p = n.error;
                            if (l && l.length > 0 && (p = new a.c({
                                    graphQLErrors: l
                                })), e = (0, r.pi)((0, r.pi)({}, e), {
                                    data: i,
                                    loading: o,
                                    networkStatus: u,
                                    error: p,
                                    called: !0
                                }), o);
                            else if (p) Object.assign(e, {
                                data: (this.currentObservable.getLastResult() || {}).data
                            });
                            else {
                                var h = this.currentObservable.options.fetchPolicy;
                                if (t.partialRefetch && c && (!i || 0 === Object.keys(i).length) && "cache-only" !== h) return Object.assign(e, {
                                    loading: !0,
                                    networkStatus: s.I.loading
                                }), e.refetch(), e
                            }
                        }
                        e.client = this.client, this.setOptions(t, !0);
                        var d = this.previous.result;
                        return this.previous.loading = d && d.loading || !1, e.previousData = d && (d.data || d.previousData), this.previous.result = e, this.currentObservable && this.currentObservable.resetQueryStoreErrors(), e
                    }, t.prototype.handleErrorOrCompleted = function() {
                        if (this.currentObservable && this.previous.result) {
                            var e = this.previous.result,
                                t = e.data,
                                n = e.loading,
                                r = e.error;
                            if (!n) {
                                var i = this.getOptions(),
                                    a = i.query,
                                    s = i.variables,
                                    c = i.onCompleted,
                                    u = i.onError,
                                    l = i.skip;
                                if (this.previousOptions && !this.previous.loading && (0, o.D)(this.previousOptions.query, a) && (0, o.D)(this.previousOptions.variables, s)) return;
                                !c || r || l ? u && r && u(r) : c(t)
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
            var l = n(55261);

            function p(e, t, n) {
                void 0 === n && (n = !1);
                var a = (0, i.useContext)((0, l.K)()),
                    s = (0, i.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    c = s[0],
                    p = s[1],
                    h = t ? (0, r.pi)((0, r.pi)({}, t), {
                        query: e
                    }) : {
                        query: e
                    },
                    d = (0, i.useRef)(),
                    f = d.current || (d.current = new u({
                        options: h,
                        context: a,
                        onNewData: function() {
                            f.ssrInitiated() ? p() : Promise.resolve().then((function() {
                                return d.current && d.current.isMounted && p()
                            }))
                        }
                    }));
                f.setOptions(h), f.context = a;
                var v = function(e, t) {
                        var n = (0, i.useRef)();
                        return n.current && (0, o.D)(t, n.current.key) || (n.current = {
                            key: t,
                            value: e()
                        }), n.current.value
                    }((function() {
                        return n ? f.executeLazy() : f.execute()
                    }), {
                        options: (0, r.pi)((0, r.pi)({}, h), {
                            onError: void 0,
                            onCompleted: void 0
                        }),
                        context: a,
                        tick: c
                    }),
                    b = n ? v[1] : v;
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
                }(p), (0, i.useEffect)((function() {
                    return function() {
                        f.cleanup(), d.current = void 0
                    }
                }), []), (0, i.useEffect)((function() {
                    return f.afterExecute({
                        lazy: n
                    })
                }), [b.loading, b.networkStatus, b.error, b.data, f.currentObservable]), v
            }
        },
        14222: function(e, t, n) {
            "use strict";
            n.d(t, {
                E2: function() {
                    return s
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

            function s(e) {
                var t, n, a = o.get(e);
                if (a) return a;
                __DEV__ ? (0, i.kG)(!!e && !!e.kind, "Argument of " + e + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, i.kG)(!!e && !!e.kind, 34);
                var s = e.definitions.filter((function(e) {
                        return "FragmentDefinition" === e.kind
                    })),
                    c = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "query" === e.operation
                    })),
                    u = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "mutation" === e.operation
                    })),
                    l = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "subscription" === e.operation
                    }));
                __DEV__ ? (0, i.kG)(!s.length || c.length || u.length || l.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, i.kG)(!s.length || c.length || u.length || l.length, 35), __DEV__ ? (0, i.kG)(c.length + u.length + l.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + e + " had " + c.length + " queries, " + l.length + " subscriptions and " + u.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(c.length + u.length + l.length <= 1, 36), n = c.length ? r.Query : r.Mutation, c.length || u.length || (n = r.Subscription);
                var p = c.length ? c : u.length ? u : l;
                __DEV__ ? (0, i.kG)(1 === p.length, "react-apollo only supports one definition per HOC. " + e + " had " + p.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(1 === p.length, 37);
                var h = p[0];
                t = h.variableDefinitions || [];
                var d = {
                    name: h.name && "Name" === h.name.kind ? h.name.value : "data",
                    type: n,
                    variables: t
                };
                return o.set(e, d), d
            }
        },
        60461: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            });
            var r = n(32735),
                i = n(62691),
                o = n(98178),
                a = n(79399),
                s = n(80827),
                c = n(2419),
                u = n(47169),
                l = n(13260),
                p = n(42015),
                h = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "GeniusGuestDataQuery"
                        },
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "geniusGuestData"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "userInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "firstname"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 107,
                        source: {
                            body: "\n  query GeniusGuestDataQuery {\n    geniusGuestData {\n      userInfo {\n        firstname\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                d = n(64494),
                f = n(96306),
                v = n(84674);

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = n(49975),
                y = "bc4e2c467a",
                _ = "b8e920e088",
                w = "d39c27f89b",
                E = "d875fc0c4c",
                O = "bb44aa69aa",
                k = "de7f9979e1",
                x = "ccbae5d425",
                S = "a0670806ef",
                N = "c3e28461aa",
                C = "d42c9579d2",
                P = "ce1adcb018",
                D = "fdc0eaa3a7",
                j = "faef87fb98",
                I = "d442102055",
                L = "c3a580d951",
                R = "a2172b8d6f",
                Q = "db46cc1a0a",
                T = "fc7d18e9e4",
                V = n(39476),
                G = "wcu_bh_banner-desktop",
                M = "wcu_bh_banner_desktop--content",
                A = "wcu_bh_banner_desktop--button",
                q = "wcu_bh_banner-mobile",
                z = "wcu_bh_banner_mobile--content",
                F = "wcu_bh_banner_mobile--button",
                B = r.createElement("div", {
                    className: k
                }, r.createElement("ul", {
                    className: R
                }, r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_villas"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_aparthotels"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_holiday_homes"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_cottages"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_homes"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))))),
                U = function(e) {
                    var t = e.userFirstName;
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        className: w
                    }), r.createElement("div", {
                        className: E
                    }, r.createElement(i.xv, {
                        variant: "headline_2",
                        className: O,
                        attributes: {
                            "data-testid": M
                        }
                    }, t ? r.createElement(V.cC, {
                        tag: "bh_awareness_2_campaign_index_banner_name",
                        variables: {
                            first_name: t,
                            begin: "<0><1>",
                            end: "</1>",
                            property_types: "</1><2></2></0><1>"
                        },
                        components: ["div", "span", B]
                    }) : r.createElement(V.cC, {
                        tag: "bh_awareness_2_campaign_index_banner",
                        variables: {
                            begin: "<0><1>",
                            end: "</1>",
                            property_types: "</1><2></2></0><1>"
                        },
                        components: ["div", "span", B]
                    })), r.createElement(i.zx, {
                        variant: "secondary",
                        className: x,
                        attributes: {
                            "data-testid": A
                        }
                    }, r.createElement(V.cC, {
                        tag: "bh_awareness_2_campaign_index_banner_cta"
                    }))), r.createElement("div", {
                        className: S
                    }, r.createElement(i.Ee, {
                        src: n(72423)
                    })))
                },
                Z = r.createElement("div", {
                    className: L
                }, r.createElement("ul", {
                    className: R
                }, r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_villas"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_aparthotels"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_holiday_homes"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_cottages"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_homes"
                }))), r.createElement("li", {
                    className: Q
                }, r.createElement("span", {
                    className: T
                }, r.createElement(V.cC, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))))),
                X = function(e) {
                    var t = e.userFirstName;
                    return r.createElement(r.Fragment, null, r.createElement(i.Ee, {
                        src: n(72423),
                        className: P
                    }), r.createElement("div", {
                        className: D
                    }, r.createElement(i.xv, {
                        variant: "strong_1",
                        className: j,
                        attributes: {
                            "data-testid": z
                        }
                    }, t ? r.createElement(V.cC, {
                        tag: "bh_awareness_2_campaign_index_banner_name",
                        variables: {
                            first_name: t,
                            begin: "<0>",
                            end: "</1>",
                            property_types: " </0><2></2><1>"
                        },
                        components: ["div", "div", Z]
                    }) : r.createElement(V.cC, {
                        tag: "bh_awareness_2_campaign_index_banner",
                        variables: {
                            begin: "<0>",
                            end: "</1>",
                            property_types: " </0><2></2><1>"
                        },
                        components: ["div", "div", Z]
                    })), r.createElement(i.zx, {
                        variant: "secondary",
                        className: I,
                        size: "medium",
                        attributes: {
                            "data-testid": F
                        }
                    }, r.createElement(V.cC, {
                        tag: "bh_awareness_2_campaign_index_banner_cta"
                    }))))
                },
                H = n(93354),
                K = n(26943),
                Y = function() {
                    var e = "booking_home",
                        t = (0, a.T)().getSiteType() === o.N.MDOT,
                        n = (0, a.T)().getLanguage(),
                        u = (0, s.K)({
                            pathname: "/booking-home/index.".concat(n, ".html")
                        }).toString(),
                        b = function() {
                            var e, t, n, r, i = (0, a.T)(),
                                o = !(null !== (e = i.getUserIdentity()) && void 0 !== e && e.isGenius),
                                s = null === (t = i.getBasePageUrl()) || void 0 === t || null === (n = t.searchParams) || void 0 === n ? void 0 : n.get(d.Hu),
                                c = (0, l.a)(h, {
                                    skip: o,
                                    context: {
                                        headers: g({}, (0, v.l)(!0))
                                    }
                                }),
                                u = c.error,
                                b = c.loading,
                                m = c.data;
                            return (0, f.z)("Response for genius guest data query ", {
                                error: u,
                                loading: b,
                                data: m
                            }), s && console.log("Response for genius user name query ", JSON.stringify({
                                error: u,
                                loading: b,
                                data: m
                            })), b || m || o || (0, p.c1)("No result for genius guest data query"), u && (0, p.eK)(u), null === m || void 0 === m || null === (r = m.geniusGuestData.userInfo) || void 0 === r ? void 0 : r.firstname
                        }();
                    return (0, m.d)(), (0, r.useEffect)((function() {
                        ! function(e, t) {
                            (0, f.z)("Generic Banner on render", {
                                campaignId: e
                            });
                            var n = {
                                campaign_id: e,
                                design_variant: e,
                                banner_action: [{
                                    action_index: 0,
                                    action_url: t,
                                    action_text: "Discover Homes",
                                    action_type: "CTA_redirect"
                                }]
                            };
                            (0, K.jv)(n)
                        }(e, u)
                    }), [u]), r.createElement(c.df, {
                        triggerOnce: !0,
                        onChange: function(t) {
                            return t && (n = e, (0, f.z)("Generic Banner on view", {
                                campaignId: n
                            }), void(0, K.n)(n));
                            var n
                        }
                    }, r.createElement(i.Zb, {
                        className: t ? N : y,
                        fill: !0,
                        attributes: {
                            "data-testid": t ? q : G
                        }
                    }, r.createElement(i.sR, {
                        className: t ? C : _,
                        href: u,
                        attributes: {
                            target: "_isblank"
                        },
                        onClick: function() {
                            return n = e, r = t, (0, f.z)("Generic Banner body click", {
                                campaignId: n
                            }), r ? (0, H.r9)("mdot_discover_home_banner_click") : (0, H.r9)("www_discover_home_banner_click"), void(0, K.XM)(n, 0);
                            var n, r
                        }
                    }, t ? r.createElement(X, {
                        userFirstName: b
                    }) : r.createElement(U, {
                        userFirstName: b
                    }))))
                }
        },
        64494: function(e, t, n) {
            "use strict";
            n.d(t, {
                Hu: function() {
                    return i
                },
                gh: function() {
                    return o
                },
                nh: function() {
                    return r
                }
            });
            var r = "b_merch_test_campaign_id",
                i = "b_wcu_debug_context",
                o = ["b-webcore-transactional-content-service", "b-merch-platform-campaign-serving-api"]
        },
        96306: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(79399),
                i = function() {
                    var e = (0, r.T)(),
                        t = e.getBPlatformEnvironment(),
                        n = e.getBasePageUrl(),
                        i = e.isInternalUser() && "1" === n.searchParams.get("debug");
                    if ((!t || "dev" === t || "dqs" === t) && i) {
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        console.log(a)
                    }
                }
        },
        84674: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return r
                }
            });
            var r = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 800 : 1500;
                return {
                    "X-Booking-Timeout-Ms": e,
                    "X-Envoy-Expected-Rq-Timeout-Ms": e
                }
            }
        },
        49975: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return o
                }
            });
            var r = n(79142),
                i = n(79399),
                o = function() {
                    var e;
                    if ("undefined" !== typeof window) {
                        var t = (0, i.T)(),
                            n = t.getBPlatformEnvironment(),
                            o = String(null === (e = t.getAffiliate()) || void 0 === e ? void 0 : e.id),
                            a = {
                                lang: t.getLanguage(),
                                aid: isNaN(Number(o)) ? void 0 : o,
                                isDev: !n || "dev" === n || "dqs" === n,
                                pageviewId: t.getPageviewId()
                            };
                        r.Z.init(a)
                    }
                }
        },
        26943: function(e, t, n) {
            "use strict";
            n.d(t, {
                XM: function() {
                    return a
                },
                jv: function() {
                    return i
                },
                n: function() {
                    return o
                }
            });
            var r = n(79142),
                i = function(e) {
                    r.Z.sendEvent({
                        action_name: "webcoreux.generic_banner_served",
                        action_version: "1.0.0",
                        content: e
                    })
                },
                o = function(e) {
                    r.Z.sendEvent({
                        action_name: "webcoreux.generic_banner_viewed",
                        action_version: "1.0.0",
                        content: {
                            campaign_id: e
                        }
                    })
                },
                a = function(e, t) {
                    r.Z.sendEvent({
                        action_name: "webcoreux.generic_banner_action_clicked",
                        action_version: "1.0.0",
                        content: {
                            campaign_id: e,
                            action_index: t
                        }
                    })
                }
        },
        79142: function(e, t, n) {
            "use strict";
            var r = n(8821),
                i = n(85169),
                o = n(72975),
                a = n.n(o);

            function s(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            }
            Object.create;
            Object.create;
            var c = function() {
                    function e(t) {
                        (0, r.Z)(this, e), this.config = t, this.headers = this.config.API.HEADERS
                    }
                    return (0, i.Z)(e, [{
                        key: "get",
                        value: function(e, t) {
                            var n = this;
                            return new Promise((function(r, i) {
                                return s(n, void 0, void 0, a().mark((function n() {
                                    var o, s;
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
                                                s = n.sent, r(s ? JSON.parse(s) : null), n.next = 13;
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
                                return s(r, void 0, void 0, a().mark((function r() {
                                    var s, c;
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
                                                return s = r.sent, r.next = 6, s.text();
                                            case 6:
                                                c = r.sent, t(c ? JSON.parse(c) : null), r.next = 13;
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
                            this.client = new c(e)
                        }
                    }, {
                        key: "get",
                        value: function(e) {
                            return s(this, void 0, void 0, a().mark((function t() {
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
                            return s(this, void 0, void 0, a().mark((function r() {
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
                l = new u,
                p = function(e) {
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
                h = new(function() {
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
                                        HEADERS: p(e)
                                    },
                                    TRACK_BASE_URL: "https://".concat(t, "/c360/v1/track"),
                                    language: e.lang,
                                    currency: e.currency
                                }
                            }(e), this.httpClient = l, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, l.init(this.c360Config)
                        }
                    }, {
                        key: "sendEvent",
                        value: function(e) {
                            return s(this, void 0, void 0, a().mark((function t() {
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
            t.Z = h
        },
        80827: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return x
                }
            });
            var r, i, o = n(79399),
                a = n(98178);
            ! function(e) {
                e.admin = "admin", e.app = "app", e.book = "book", e.join = "join"
            }(r || (r = {}));
            var s, c, u, l, p = ((i = {
                    DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
                })[a.N.EXTRANET] = ["hotel_id", "lang", "ses"], i),
                h = {
                    PRODUCTION: (s = {}, s[r.admin] = "admin", s[r.app] = "www", s[r.book] = "secure", s[r.join] = "join", s),
                    STAGING: (c = {}, c[r.admin] = "a", c[r.app] = "w", c[r.book] = "b", c[r.join] = "j", c),
                    KVM: (u = {}, u[r.admin] = ["adm", "devadmin"], u[r.app] = ["app", "devapp"], u[r.book] = ["book", "devbook"], u[r.join] = ["joinapp", "devjoinapp"], u),
                    DQS: (l = {}, l[r.admin] = "admin", l[r.app] = "app", l[r.book] = "book", l[r.join] = "join", l)
                },
                d = "booking.com",
                f = E(h.PRODUCTION),
                v = E(h.STAGING),
                b = E(h.KVM),
                g = E(h.DQS),
                m = new RegExp("^(.*?)\\.?(" + d + "|booking.cn)$"),
                y = new RegExp("^(?:" + v.join("|") + ")(\\d+)$"),
                _ = new RegExp("^(\\w+)-(" + b.join("|") + ").*?\\.dev$"),
                w = new RegExp("(?:" + g.join("|") + ")\\.dqs$");

            function E(e) {
                return Object.values(e).flat()
            }

            function O(e, t) {
                var n = new Set;
                null == t || t.forEach((function(t, r) {
                    n.has(r) ? e.append(r, t) : (e.set(r, t), n.add(r))
                }))
            }

            function k(e) {
                return Array.isArray(e) ? e[0] : e
            }

            function x(e) {
                return function() {
                    var e = (0, o.T)(),
                        t = e.getBasePageUrl();
                    if (!t) throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                    var n = function(e, t, n, r) {
                        var i = new URLSearchParams,
                            o = t && p.hasOwnProperty(t) ? t : "DEFAULT";
                        return p[o].forEach((function(t) {
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
                                var n = e.host.match(m);
                                if (!n) return e;
                                var r = n[1],
                                    i = n[2];
                                if ("" === r || f.includes(r)) {
                                    var o = k(h.PRODUCTION[t]);
                                    e.host = o + "." + i
                                } else if (_.test(r)) {
                                    var a = k(h.KVM[t]);
                                    e.host = r.replace(_, "$1-" + a + ".dev." + d)
                                } else if (w.test(r)) {
                                    var s = k(h.DQS[t]);
                                    e.host = s + ".dqs." + d
                                } else if (y.test(r)) {
                                    var c = k(h.STAGING[t]);
                                    e.host = r.replace(y, c + "$1." + d)
                                }
                                return e
                            }(i, r.host) : i;
                        return r.pathname && (o.pathname = r.pathname), o.hash = r.hash || "", e.isRobotRequest() || (O(o.searchParams, n), O(o.searchParams, r.searchParams)), o
                    }
                }()(e)
            }
        },
        2419: function(e, t, n) {
            "use strict";
            n.d(t, {
                YD: function() {
                    return v
                },
                df: function() {
                    return f
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
                s = new WeakMap,
                c = 0,
                u = void 0;

            function l(e) {
                return Object.keys(e).sort().filter((function(t) {
                    return void 0 !== e[t]
                })).map((function(t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (s.has(n) || (c += 1, s.set(n, c.toString())), s.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function p(e, t, n, r) {
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
                        var t = l(e),
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
                    s = o.id,
                    c = o.observer,
                    p = o.elements,
                    h = p.get(e) || [];
                return p.has(e) || p.set(e, h), h.push(t), c.observe(e),
                    function() {
                        h.splice(h.indexOf(t), 1), 0 === h.length && (p.delete(e), c.unobserve(e)), 0 === p.size && (c.disconnect(), a.delete(s))
                    }
            }
            var h = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function d(e) {
                return "function" !== typeof e.children
            }
            var f = function(e) {
                var t, n;

                function a(t) {
                    var n;
                    return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(e) {
                        n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
                            inView: !!n.props.initialInView,
                            entry: void 0
                        })), n.node = e || null, n.observeNode()
                    }, n.handleChange = function(e, t) {
                        e && n.props.triggerOnce && n.unobserve(), d(n.props) || n.setState({
                            inView: e,
                            entry: t
                        }), n.props.onChange && n.props.onChange(e, t)
                    }, n.state = {
                        inView: !!t.initialInView,
                        entry: void 0
                    }, n
                }
                n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
                var s = a.prototype;
                return s.componentDidUpdate = function(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, s.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, s.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            r = e.rootMargin,
                            i = e.trackVisibility,
                            o = e.delay,
                            a = e.fallbackInView;
                        this._unobserveCb = p(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r,
                            trackVisibility: i,
                            delay: o
                        }, a)
                    }
                }, s.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, s.render = function() {
                    if (!d(this.props)) {
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
                        s = o.as,
                        c = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(o, h);
                    return r.createElement(s || "div", i({
                        ref: this.handleNode
                    }, c), a)
                }, a
            }(r.Component);

            function v(e) {
                var t = void 0 === e ? {} : e,
                    n = t.threshold,
                    i = t.delay,
                    o = t.trackVisibility,
                    a = t.rootMargin,
                    s = t.root,
                    c = t.triggerOnce,
                    u = t.skip,
                    l = t.initialInView,
                    h = t.fallbackInView,
                    d = r.useRef(),
                    f = r.useState({
                        inView: !!l
                    }),
                    v = f[0],
                    b = f[1],
                    g = r.useCallback((function(e) {
                        void 0 !== d.current && (d.current(), d.current = void 0), u || e && (d.current = p(e, (function(e, t) {
                            b({
                                inView: e,
                                entry: t
                            }), t.isIntersecting && c && d.current && (d.current(), d.current = void 0)
                        }), {
                            root: s,
                            rootMargin: a,
                            threshold: n,
                            trackVisibility: o,
                            delay: i
                        }, h))
                    }), [Array.isArray(n) ? n.toString() : n, s, a, c, u, o, h, i]);
                (0, r.useEffect)((function() {
                    d.current || !v.entry || c || u || b({
                        inView: !!l
                    })
                }));
                var m = [g, v.inView, v.entry];
                return m.ref = m[0], m.inView = m[1], m.entry = m[2], m
            }
            f.displayName = "InView", f.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
        },
        72423: function(e, t, n) {
            "use strict";
            e.exports = n.p + "static/media/bh_aw_cpg_main_image.b4347622.png"
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
                    s = "function" == typeof Symbol ? Symbol : {},
                    c = s.iterator || "@@iterator",
                    u = s.asyncIterator || "@@asyncIterator",
                    l = s.toStringTag || "@@toStringTag";

                function p(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    p({}, "")
                } catch (j) {
                    p = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function h(e, t, n, r) {
                    var i = t && t.prototype instanceof v ? t : v,
                        o = Object.create(i.prototype),
                        s = new C(r || []);
                    return a(o, "_invoke", {
                        value: k(e, n, s)
                    }), o
                }

                function d(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (j) {
                        return {
                            type: "throw",
                            arg: j
                        }
                    }
                }
                t.wrap = h;
                var f = {};

                function v() {}

                function b() {}

                function g() {}
                var m = {};
                p(m, c, (function() {
                    return this
                }));
                var y = Object.getPrototypeOf,
                    _ = y && y(y(P([])));
                _ && _ !== n && o.call(_, c) && (m = _);
                var w = g.prototype = v.prototype = Object.create(m);

                function E(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        p(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function O(e, t) {
                    function n(i, a, s, c) {
                        var u = d(e[i], e, a);
                        if ("throw" !== u.type) {
                            var l = u.arg,
                                p = l.value;
                            return p && "object" == r(p) && o.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                n("next", e, s, c)
                            }), (function(e) {
                                n("throw", e, s, c)
                            })) : t.resolve(p).then((function(e) {
                                l.value = e, s(l)
                            }), (function(e) {
                                return n("throw", e, s, c)
                            }))
                        }
                        c(u.arg)
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
                            return D()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = x(a, n);
                                if (s) {
                                    if (s === f) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var c = d(e, t, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }

                function x(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return f;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var r = d(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, f;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                }

                function S(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function N(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(S, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var t = e[c];
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
                        next: D
                    }
                }

                function D() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return b.prototype = g, a(w, "constructor", {
                    value: g,
                    configurable: !0
                }), a(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = p(g, l, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, p(e, l, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, E(O.prototype), p(O.prototype, u, (function() {
                    return this
                })), t.AsyncIterator = O, t.async = function(e, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new O(h(e, n, r, i), o);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, E(w), p(w, l, "Generator"), p(w, c, (function() {
                    return this
                })), p(w, "toString", (function() {
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
                }, t.values = P, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
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
                                var s = o.call(i, "catchLoc"),
                                    c = o.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
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
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, f) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), f
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    N(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), f
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
        }
    }
]);
//# sourceMappingURL=https://s3-main-01.booking.com/internal-static/capla/static/js/119.c0e5b117.chunk.js.map