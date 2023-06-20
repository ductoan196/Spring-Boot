/*! For license information please see 186.d0ec75b4.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe"] = self["b-index-lp-web-mfe"] || []).push([
    [186], {
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
                    return u
                }
            });
            var r = n(31191),
                i = (n(66022), n(32735)),
                a = n(82497),
                o = n(24605),
                s = n(6637),
                l = n(14222),
                c = function(e) {
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
                            a = this.refreshClient().client.disableNetworkFetches,
                            o = (0, r.pi)({
                                loading: !0,
                                networkStatus: s.I.loading,
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
                                    s = t.previous.result;
                                s && s.loading === r && s.networkStatus === i && (0, a.D)(s.data, o) || e()
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
                            networkStatus: s.I.ready,
                            called: !0
                        });
                        else if (this.currentObservable) {
                            var n = this.currentObservable.getCurrentResult(),
                                i = n.data,
                                a = n.loading,
                                l = n.partial,
                                c = n.networkStatus,
                                d = n.errors,
                                u = n.error;
                            if (d && d.length > 0 && (u = new o.c({
                                    graphQLErrors: d
                                })), e = (0, r.pi)((0, r.pi)({}, e), {
                                    data: i,
                                    loading: a,
                                    networkStatus: c,
                                    error: u,
                                    called: !0
                                }), a);
                            else if (u) Object.assign(e, {
                                data: (this.currentObservable.getLastResult() || {}).data
                            });
                            else {
                                var m = this.currentObservable.options.fetchPolicy;
                                if (t.partialRefetch && l && (!i || 0 === Object.keys(i).length) && "cache-only" !== m) return Object.assign(e, {
                                    loading: !0,
                                    networkStatus: s.I.loading
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
                                    s = i.variables,
                                    l = i.onCompleted,
                                    c = i.onError,
                                    d = i.skip;
                                if (this.previousOptions && !this.previous.loading && (0, a.D)(this.previousOptions.query, o) && (0, a.D)(this.previousOptions.variables, s)) return;
                                !l || r || d ? c && r && c(r) : l(t)
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
            var d = n(55261);

            function u(e, t, n) {
                void 0 === n && (n = !1);
                var o = (0, i.useContext)((0, d.K)()),
                    s = (0, i.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    l = s[0],
                    u = s[1],
                    m = t ? (0, r.pi)((0, r.pi)({}, t), {
                        query: e
                    }) : {
                        query: e
                    },
                    p = (0, i.useRef)(),
                    f = p.current || (p.current = new c({
                        options: m,
                        context: o,
                        onNewData: function() {
                            f.ssrInitiated() ? u() : Promise.resolve().then((function() {
                                return p.current && p.current.isMounted && u()
                            }))
                        }
                    }));
                f.setOptions(m), f.context = o;
                var v = function(e, t) {
                        var n = (0, i.useRef)();
                        return n.current && (0, a.D)(t, n.current.key) || (n.current = {
                            key: t,
                            value: e()
                        }), n.current.value
                    }((function() {
                        return n ? f.executeLazy() : f.execute()
                    }), {
                        options: (0, r.pi)((0, r.pi)({}, m), {
                            onError: void 0,
                            onCompleted: void 0
                        }),
                        context: o,
                        tick: l
                    }),
                    g = n ? v[1] : v;
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
                }(u), (0, i.useEffect)((function() {
                    return function() {
                        f.cleanup(), p.current = void 0
                    }
                }), []), (0, i.useEffect)((function() {
                    return f.afterExecute({
                        lazy: n
                    })
                }), [g.loading, g.networkStatus, g.error, g.data, f.currentObservable]), v
            }
        },
        14222: function(e, t, n) {
            "use strict";
            n.d(t, {
                E2: function() {
                    return s
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

            function s(e) {
                var t, n, o = a.get(e);
                if (o) return o;
                __DEV__ ? (0, i.kG)(!!e && !!e.kind, "Argument of " + e + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, i.kG)(!!e && !!e.kind, 34);
                var s = e.definitions.filter((function(e) {
                        return "FragmentDefinition" === e.kind
                    })),
                    l = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "query" === e.operation
                    })),
                    c = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "mutation" === e.operation
                    })),
                    d = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "subscription" === e.operation
                    }));
                __DEV__ ? (0, i.kG)(!s.length || l.length || c.length || d.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, i.kG)(!s.length || l.length || c.length || d.length, 35), __DEV__ ? (0, i.kG)(l.length + c.length + d.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + e + " had " + l.length + " queries, " + d.length + " subscriptions and " + c.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(l.length + c.length + d.length <= 1, 36), n = l.length ? r.Query : r.Mutation, l.length || c.length || (n = r.Subscription);
                var u = l.length ? l : c.length ? c : d;
                __DEV__ ? (0, i.kG)(1 === u.length, "react-apollo only supports one definition per HOC. " + e + " had " + u.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0, i.kG)(1 === u.length, 37);
                var m = u[0];
                t = m.variableDefinitions || [];
                var p = {
                    name: m.name && "Name" === m.name.kind ? m.name.value : "data",
                    type: n,
                    variables: t
                };
                return a.set(e, p), p
            }
        },
        60171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ProgramContext: function() {
                    return Dt
                },
                default: function() {
                    return At
                }
            });
            var r = n(13736),
                i = n(32735),
                a = n(79399),
                o = n(93354),
                s = n(44393),
                l = n(20011),
                c = n(92577),
                d = n(62691),
                u = (0, i.createContext)({});
            var m = function(e) {
                    var t = e.openOnLoad,
                        n = e.isMdot,
                        r = e.onAfterClose,
                        a = e.children,
                        o = e.actionBar,
                        s = e.sheetContainerProps,
                        m = e.closeAriaLabel,
                        p = (0, i.useReducer)((function(e) {
                            return e && r && r(), !e
                        }), "undefined" !== typeof t && t),
                        f = (0, c.Z)(p, 2),
                        v = f[0],
                        g = f[1],
                        h = {
                            active: !0,
                            onCloseTrigger: g,
                            position: n ? "bottom" : "center",
                            closeAriaLabel: m || ""
                        },
                        _ = (0, i.useState)(null),
                        b = (0, c.Z)(_, 2),
                        y = b[0],
                        k = b[1],
                        O = (0, i.useState)(null),
                        S = (0, c.Z)(O, 2),
                        E = S[0],
                        I = S[1];
                    return n && o && Object.assign(h, {
                        footer: o
                    }), s && Object.assign(h, s), i.createElement(u.Provider, {
                        value: {
                            isOpen: v,
                            toggle: g,
                            setContent: function(e) {
                                return !y && k(e)
                            },
                            setHeader: function(e) {
                                return !E && I(e)
                            },
                            resetContent: function(e) {
                                return k(e)
                            }
                        }
                    }, a, v ? i.createElement(d.br, (0, l.Z)({}, E, h), y) : null)
                },
                p = (u.Consumer, m),
                f = n(39476),
                v = n(26662),
                g = n(66049),
                h = n(13260),
                _ = n(42015),
                b = {
                    kind: "Document",
                    definitions: function(e) {
                        var t = {};
                        return e.filter((function(e) {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            var n = e.name.value;
                            return !t[n] && (t[n] = !0, !0)
                        }))
                    }([{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "indexVipBanner"
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
                                    value: "GeniusVipUIsInput"
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
                                    value: "geniusVipEnrolledProgram"
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
                                            value: "__typename"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "GeniusVipNoEnrolledProgram"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "reason"
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
                                                value: "GeniusVipEnrolledProgram"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "metadata"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "programType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "SpendAndUnlockProgramMetadata"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "rewardPercent"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "threshold"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "FragmentSpread",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "PriceFields"
                                                                        },
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "upperLimit"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "FragmentSpread",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "PriceFields"
                                                                        },
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "BookAndUnlockMetadata"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "reward"
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
                                                                value: "SpendAndUnlockReward"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amountTotalUserSpent"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "FragmentSpread",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "PriceFields"
                                                                        },
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "BookAndUnlockReward"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "userProgress"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "UserProgress"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "geniusVipUIs"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "indexBanner"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "IndexUiContent"
                                                                },
                                                                directives: []
                                                            }, {
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ProgressBar"
                                                                },
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "endDate"
                                                                },
                                                                arguments: [],
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
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "indexModal"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "IndexModal"
                                                                },
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "modalCategory"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "uniqueKey"
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
                    }].concat([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "TextWithTranslationTag"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "TextWithTranslationTag"
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
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "BannerImage"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Image"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "url"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "IndexUiContent"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "GeniusVipBanner"
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
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "TextWithTranslationTag"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subtitle"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "TextWithTranslationTag"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "asset"
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
                                            value: "BannerImage"
                                        },
                                        directives: []
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
                                            value: "actionString"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "dismissible"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "ProgressBar"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "GeniusVipBanner"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "progressBar"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "progress"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "indicators"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "formattedValue"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "offset"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "IndexModal"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "GeniusVipInfoModal"
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
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "TextWithTranslationTag"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subtitle"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "TextWithTranslationTag"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "asset"
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
                                            value: "BannerImage"
                                        },
                                        directives: []
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
                                            value: "actionString"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "actionDismiss"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "PriceFields"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Price"
                            }
                        },
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
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "UserProgress"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BookAndUnlockUserProgress"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isOnboarding"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "maxRewardsReached"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "maxBookingsReached"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "rounds"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "index"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bookingsCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "maxCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rewardsSent"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rewardAmount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "PriceFields"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStarted"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "formattedCurrencies"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "rewardAmount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "BookAndUnlockReward"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BookAndUnlockReward"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "amountEarned"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "PriceFields"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "formattedCurrencies"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "amountEarned"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "amountPendingTotal"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }], [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "BookAndUnlockMetadata"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BookAndUnlockProgramMetadata"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "rewardPercent"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "endDate"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bookingsPerRound"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "maxRounds"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }])),
                    loc: {
                        start: 0,
                        end: 1114,
                        source: {
                            body: "\n  query indexVipBanner($input: GeniusVipUIsInput) {\n    geniusVipEnrolledProgram(input: $input) {\n      __typename\n      ... on GeniusVipNoEnrolledProgram {\n        reason\n      }\n      ... on GeniusVipEnrolledProgram {\n        metadata {\n          programType\n          ... on SpendAndUnlockProgramMetadata {\n            rewardPercent\n            threshold {\n              ...PriceFields\n            }\n            upperLimit {\n              ...PriceFields\n            }\n          }\n          ...BookAndUnlockMetadata\n        }\n        reward {\n          ... on SpendAndUnlockReward {\n            amountTotalUserSpent {\n              ...PriceFields\n            }\n          }\n          ...BookAndUnlockReward\n        }\n        userProgress {\n          ...UserProgress\n        }\n        geniusVipUIs {\n          indexBanner {\n            ...IndexUiContent\n            ...ProgressBar\n            endDate {\n              text\n            }\n          }\n          indexModal {\n            ...IndexModal\n            modalCategory\n            uniqueKey\n          }\n        }\n      }\n    }\n  }\n\n  \n  \n  \n  \n  \n  \n  \n  \n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var y = function(e, t) {
                return !!e && t.every((function(t) {
                    return null != e[t]
                }))
            };
            var k, O, S, E = n(89895);
            E.Qv["en-gb"], E.Qv["en-us"], E.Qv.de, E.Qv.es, E.Qv.fr;
            ! function(e) {
                e.BANNER_VIEW = "CAPLA_EVENT_genius_vip_BANNER_VIEW", e.BANNER_CTA_CLICK = "CAPLA_EVENT_genius_vip_BANNER_CTA_CLICK", e.BANNER_DISMISS = "CAPLA_EVENT_genius_vip_BANNER_DISMISS", e.MODAL_VIEW = "CAPLA_EVENT_genius_vip_MODAL_VIEW", e.MODAL_CTA_CLICK = "CAPLA_EVENT_genius_vip_MODAL_CTA_CLICK", e.MODAL_DISMISS = "CAPLA_EVENT_genius_vip_MODAL_DISMISS", e.REMINDER_MODAL_VIEW = "CAPLA_EVENT_genius_vip_REMINDER_MODAL_VIEW", e.REMINDER_MODAL_CTA_CLICK = "CAPLA_EVENT_genius_vip_REMINDER_MODAL_CTA_CLICK", e.REMINDER_MODAL_DISMISS = "CAPLA_EVENT_genius_vip_REMINDER_MODAL_DISMISS", e.LOGIN_MODAL_VIEW = "CAPLA_EVENT_genius_vip_LOGIN_MODAL_VIEW", e.LOGIN_MODAL_CTA_CLICK = "CAPLA_EVENT_genius_vip_LOGIN_MODAL_CTA_CLICK", e.LP_VIEW = "CAPLA_EVENT_genius_vip_LP_VIEW", e.PROGRESS_CTA_CLICK = "CAPLA_EVENT_genius_vip_PROGRESS_CTA_CLICK"
            }(k || (k = {})),
            function(e) {
                e.INDEX = "index", e.SEARCH_RESULTS = "searchresults", e.HOTEL = "hotel", e.BOOK = "book", e.BOOK2 = "book2", e.CONFIRMATION = "confirmation", e.MY_RESERVATIONS = "myreservations", e.MY_BOOKING = "mybooking", e.WALLET = "rewards_and_wallet", e.LP = "genius_vip_campaigns"
            }(O || (O = {})),
            function(e) {
                e.WELCOME = "welcome", e.REMINDING = "reminding", e.LOGIN = "login", e.EXPIRE = "expire"
            }(S || (S = {}));
            var I, x, N = "vip_token",
                P = "vip_campaign",
                w = 1680505199e3;
            ! function(e) {
                e.BookAndUnlock = "BookAndUnlock", e.FreeRoomUpgrade = "FreeRoomUpgrade", e.InstantCredit = "InstantCredit", e.InstantDiscount = "InstantDiscount", e.InstantVoucher = "InstantVoucher", e.OneOffVoucher = "OneOffVoucher", e.SpendAndUnlock = "SpendAndUnlock"
            }(I || (I = {})),
            function(e) {
                e.BOOKING_DETAIL = "BOOKING_DETAIL", e.BOOKING_PROCESS_1 = "BOOKING_PROCESS_1", e.BOOKING_PROCESS_2 = "BOOKING_PROCESS_2", e.CONFIRMATION_PAGE = "CONFIRMATION_PAGE", e.INDEX = "INDEX", e.LANDING_PAGE = "LANDING_PAGE", e.PROPERTY_PAGE = "PROPERTY_PAGE", e.ROOM_DETAIL = "ROOM_DETAIL", e.SEARCH_RESULTS = "SEARCH_RESULTS", e.WALLET = "WALLET"
            }(x || (x = {}));
            var C = n(24094),
                R = n(39777);
            (0, C.qQ)((0, C.t)("date_format", "fakeIndex", "short_date"));
            var D, L = "short_date",
                A = n(31191),
                T = new Map([
                    ["AFA", 0],
                    ["BHD", 3],
                    ["BIF", 0],
                    ["BYR", 0],
                    ["CLP", 0],
                    ["COP", 0],
                    ["DJF", 0],
                    ["ECS", 0],
                    ["GNF", 0],
                    ["HUF", 0],
                    ["IDR", 0],
                    ["IQD", 3],
                    ["ISK", 0],
                    ["JOD", 3],
                    ["JPY", 0],
                    ["KMF", 0],
                    ["KRW", 0],
                    ["KWD", 3],
                    ["LAK", 0],
                    ["LYD", 3],
                    ["MGA", 0],
                    ["MZM", 0],
                    ["OMR", 3],
                    ["PYG", 0],
                    ["RWF", 0],
                    ["TJR", 0],
                    ["TMM", 0],
                    ["TND", 3],
                    ["TWD", 0],
                    ["UGX", 0],
                    ["VND", 0],
                    ["VUV", 0],
                    ["XAF", 0],
                    ["XOF", 0],
                    ["XPF", 0],
                    ["RUB", 0]
                ]),
                F = Object.freeze({
                    CEIL: "CEIL",
                    FLOOR: "FLOOR"
                }),
                M = new Map([
                    ["AFA", F.CEIL],
                    ["BIF", F.FLOOR],
                    ["BYR", F.FLOOR],
                    ["CLP", F.FLOOR],
                    ["DJF", F.FLOOR],
                    ["ECS", F.FLOOR],
                    ["GNF", F.FLOOR],
                    ["IDR", F.FLOOR],
                    ["ISK", F.FLOOR],
                    ["JPY", F.FLOOR],
                    ["KMF", F.FLOOR],
                    ["KRW", F.FLOOR],
                    ["LAK", F.FLOOR],
                    ["MGA", F.FLOOR],
                    ["MZM", F.FLOOR],
                    ["PYG", F.FLOOR],
                    ["RUB", F.FLOOR],
                    ["RWF", F.FLOOR],
                    ["TJR", F.FLOOR],
                    ["TMM", F.FLOOR],
                    ["TWD", F.FLOOR],
                    ["UGX", F.FLOOR],
                    ["VND", F.FLOOR],
                    ["VUV", F.FLOOR],
                    ["XAF", F.FLOOR],
                    ["XOF", F.FLOOR],
                    ["XPF", F.FLOOR]
                ]),
                B = new Map([
                    ["HUF", 5],
                    ["COP", 20]
                ]),
                V = new Map([
                    ["bg", "."],
                    ["es", ","],
                    ["es-mx", "."],
                    ["hu", "."]
                ]),
                j = new Map([
                    ["bg", "\xa0"],
                    ["et", "\xa0"],
                    ["es", "."],
                    ["es-ar", "."],
                    ["es-mx", ","],
                    ["fr", "\xa0"],
                    ["hi", ","],
                    ["ka", "\xa0"],
                    ["lv", "\xa0"],
                    ["pl", "\xa0"],
                    ["pt-br", "."],
                    ["pt-pt", "\xa0"]
                ]),
                U = new Map([
                    ["CNY-zh-cn", ""],
                    ["GBP", ""],
                    ["KRW-ko", ""],
                    ["JPY", ""],
                    ["USD", ""]
                ]),
                Z = new Map([
                    ["ARS", "AR$"],
                    ["ARS-country-ar", "$"],
                    ["BRL", "R$"],
                    ["CLP", "CL$"],
                    ["CLP-country-cl", "$"],
                    ["CNY-zh-cn", "\u5143"],
                    ["CZK", "K\u010d"],
                    ["GBP", "\xa3"],
                    ["EUR", "\u20ac"],
                    ["HKD", "HK$"],
                    ["IDR", "Rp"],
                    ["ILS", "\u20aa"],
                    ["ISK-is", "kr."],
                    ["INR", "Rs."],
                    ["INR-country-in", "\u20b9"],
                    ["JPY", "\xa5"],
                    ["JPY-ja", "\uffe5"],
                    ["KRW-ko", "\u20a9"],
                    ["KWD-ar", "\u062f.\u0643."],
                    ["PHP", "\u20b1"],
                    ["PLN", "z\u0142"],
                    ["RUB-ru", "\u0440\u0443\u0431."],
                    ["RON", "lei"],
                    ["SGD", "S$"],
                    ["USD", "US$"],
                    ["USD-us-en-us", "$"],
                    ["TRY", "TL"],
                    ["XPF", "CFP"]
                ]),
                K = new Map([
                    ["CNY-zh-cn", "after"],
                    ["CZK", "after"],
                    ["ILS-ar", "after"],
                    ["ILS-he", "after"],
                    ["ISK-is", "after"],
                    ["PLN", "after"],
                    ["RON", "after"],
                    ["RUB-ru", "after"]
                ]),
                q = new Map,
                Q = function(e, t, n) {
                    var r = Number.isInteger(t) ? e + "__" + n + "__int" : e + "__" + n;
                    if (!q.has(r)) {
                        var i = {
                                style: "currency",
                                currency: e,
                                currencyDisplay: "code",
                                numberingSystem: "latn",
                                minimumFractionDigits: W(e, t)
                            },
                            a = new Intl.NumberFormat(n, i);
                        q.set(r, a)
                    }
                    return q.get(r)
                };

            function G(e, t, n, r, i) {
                void 0 === i && (i = !0), n = n.toLowerCase();
                var a = (0, A.CR)(n.split("-"), 1)[0];
                if (M.get(e))
                    if (M.get(e) === F.CEIL) {
                        var o = .5;
                        t = Math.ceil(t / o) * o
                    } else {
                        var s = t - .5;
                        t = Number(Math.round((Number.isInteger(s) ? s : t) / 1))
                    }
                else if (B.get(e)) {
                    o = B.get(e) || 1;
                    t = Math[t % o <= .5 ? "floor" : "ceil"](t / o) * o
                }
                var l = Q(e, t, n).formatToParts(t);
                return "he" === a && "literal" === l[0].type && l.shift(), l = function(e, t, n) {
                    if (0 !== W(t, n)) return e;
                    for (var r = e.length - 1; r >= 0; r--)
                        if ("fraction" === e[r].type || "decimal" === e[r].type) e.splice(r, 1);
                        else if ("integer" === e[r].type) return e;
                    return e
                }(l, e, t), l = function(e, t, n) {
                    var r = function(e, t) {
                        var n = (0, A.CR)(e.split("-"), 1),
                            r = n[0];
                        if (K.has(t + "-" + e)) return K.get(t + "-" + e);
                        if (K.has(t + "-" + r)) return K.get(t + "-" + r);
                        if (K.has(t)) return K.get(t);
                        return "before"
                    }(t, n);
                    if ("currency" === e[0].type && "after" === r) {
                        var i = e.shift(),
                            a = e.shift();
                        e.push(a), e.push(i)
                    } else if ("currency" === e[e.length - 1].type && "before" === r) {
                        i = e.pop(), a = e.pop();
                        e.unshift(a), e.unshift(i)
                    }
                    return e
                }(l, n, e), l = function(e, t) {
                    var n = (0, A.CR)(t.split("-"), 1),
                        r = n[0];
                    if (["bg", "es", "et", "hi", "ka", "lv", "pl", "pt"].indexOf(r) < 0) return e;
                    var i = z(t, "\xa0"),
                        a = [],
                        o = [];
                    e = e.filter((function(e) {
                        return "group" !== e.type
                    }));
                    for (;
                        "integer" !== e[0].type;) o.push(e.shift());
                    for (; e.length > 0 && "integer" === e[0].type;) a = a.concat(e[0].value.split("")), e.shift();
                    for (var s = "", l = a.length - 1; l >= 0; l--)(s = a.pop() + s).length % 3 === 0 && (e.unshift({
                        type: "integer",
                        value: s
                    }), a.length > 0 && e.unshift({
                        type: "group",
                        value: i
                    }), s = "");
                    "" !== s && e.unshift({
                        type: "integer",
                        value: s
                    });
                    return e = o.concat(e), e
                }(l, n), l.map((function(t) {
                    var a = t.type,
                        o = t.value;
                    switch (a) {
                        case "group":
                            return z(n, o);
                        case "decimal":
                            return function(e, t) {
                                var n = (0, A.CR)(e.split("-"), 1),
                                    r = n[0];
                                if (V.has(e)) return V.get(e);
                                if (V.has(r)) return V.get(r);
                                return t
                            }(n, o);
                        case "currency":
                            return i ? function(e, t, n) {
                                var r = (0, A.CR)(e.split("-"), 1),
                                    i = r[0];
                                if (Z.has(t + "-" + e)) return Z.get(t + "-" + e);
                                if (n && Z.has(t + "-" + n + "-" + e)) return Z.get(t + "-" + n + "-" + e);
                                if (n && Z.has(t + "-country-" + n)) return Z.get(t + "-country-" + n);
                                if (Z.has(t + "-" + i)) return Z.get(t + "-" + i);
                                if (Z.has(t)) return Z.get(t);
                                return t
                            }(n, o, r) : "";
                        case "literal":
                            return i ? function(e, t, n) {
                                var r = (0, A.CR)(t.split("-"), 1),
                                    i = r[0];
                                if (U.has(e + "-" + t)) return U.get(e + "-" + t);
                                if (U.has(e + "-" + i)) return U.get(e + "-" + i);
                                if (U.has(e)) return U.get(e);
                                return n
                            }(e, n, o) : "";
                        default:
                            return o
                    }
                })).reduce((function(e, t) {
                    return e + t
                }))
            }

            function W(e, t) {
                return Number.isInteger(t) ? 0 : T.get(e)
            }

            function z(e, t) {
                var n = (0, A.CR)(e.split("-"), 1)[0];
                return j.has(e) ? j.get(e) : j.has(n) ? j.get(n) : t
            }
            var X, H, Y = function() {
                    return Date.now() - w > 0 || (0, v.Z)((0, g.Z)(D || (D = (0, r.Z)(["cQYIMdUTNOUbWNHGHbfEGfMKMLdeLSfBUUGXC"]))))
                },
                J = function(e, t) {
                    if (!e) return {
                        indexModal: {},
                        modalCatgory: S.EXPIRE
                    };
                    var n = function(e, t) {
                        if (!e) return null;
                        var n = (0, a.T)().getLanguage(),
                            r = (0, a.T)().getVisitorCountry() || "",
                            i = e.get(N),
                            o = e.get(P),
                            s = G("USD", 25, n, r),
                            l = e.get("vip_signature"),
                            c = e.get("offlineModalShown");
                        if (!i || !o || c || !l) return null;
                        var d = Y(),
                            u = new Date(1680479999e3);
                        return {
                            campaignExpired: d,
                            programType: o,
                            voucherValueFormatted: s,
                            expirationDateFormatted: (0, R.p6)(t, {
                                date: "".concat(u.getUTCFullYear(), "-").concat(u.getUTCMonth() + 1, "-").concat(u.getUTCDate()),
                                form: L
                            })
                        }
                    }(e, t);
                    return n ? n.campaignExpired ? {
                        indexModal: $(t),
                        modalCatgory: S.EXPIRE
                    } : {
                        indexModal: ee(t, n.voucherValueFormatted, n.expirationDateFormatted),
                        modalCatgory: S.LOGIN
                    } : {
                        indexModal: {},
                        modalCatgory: S.EXPIRE
                    }
                },
                $ = function(e) {
                    return {
                        title: e.trans((0, C.t)("vip_offline_oneoff_bottom_sheet_expire_title")),
                        subtitle: e.trans((0, C.t)("vip_offline_oneoff_bottom_sheet_expire_description")),
                        cta: [{
                            text: e.trans((0, C.t)("vip_offline_oneoff_bottom_sheet_expire_cta")),
                            actionDismiss: !0
                        }],
                        asset: "https://bstatic.com/data/mobile/voucherExpired.png",
                        campaignExpired: !0
                    }
                },
                ee = function(e, t, n) {
                    var r = (0, a.T)().getBasePageUrl();
                    return {
                        title: e.trans((0, C.t)("vip_offline_oneoff_bottom_sheet_sign_in_title", {
                            variables: {
                                voucher_value: t
                            }
                        })),
                        subtitle: e.trans((0, C.t)("vip_offline_oneoff_bottom_sheet_sign_in_description", {
                            variables: {
                                exp_date: n
                            }
                        })),
                        cta: [{
                            text: e.trans((0, C.t)("vip_offline_oneoff_bottom_sheet_sign_in_cta")),
                            actionString: "index",
                            actionParams: {
                                login_redirect: r.toString()
                            }
                        }],
                        asset: "https://bstatic.com/data/mobile/voucheractive.png",
                        campaignExpired: !1
                    }
                };
            var te = n(47169),
                ne = {
                    marginBottom1x: "f420f6bbf2",
                    dismissedBannerWrapper: "eea513fff0",
                    bannerWrapper: "c72aded5f7",
                    banner: "c82d14d624",
                    modern: "de712accea",
                    bannerTitle: "e7ce666a86",
                    progrssionBarWrapper: "dccdf01c32",
                    vipHighlight: "d6bedc5a57"
                },
                re = n(36655),
                ie = n(13613),
                ae = ["name", "content", "defaults", "isLoading", "loaderProps"];

            function oe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(Object(n), !0).forEach((function(t) {
                        (0, te.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function le(e) {
                var t = e.name,
                    n = e.onClick,
                    r = e.callback,
                    a = e.href,
                    o = e.newTab,
                    s = e.content,
                    c = e.isLoading,
                    u = e.loaderProps;
                if (c) return i.createElement(d.gi, (0, l.Z)({
                    attributes: {
                        "data-testid": t
                    }
                }, u));
                if (r) {
                    return i.createElement(d.sR, {
                        onClick: function(e) {
                            n ? n(e) : a && (o ? window.open(a, "_blank") : window.location.href = a), r()
                        }
                    }, s)
                }
                return n ? i.createElement(d.sR, {
                    onClick: n
                }, s) : i.createElement(d.sR, {
                    href: a,
                    attributes: o ? {
                        target: "_blank"
                    } : {}
                }, s)
            }

            function ce(e) {
                var t = e.name,
                    n = e.content,
                    r = e.defaults,
                    a = e.isLoading,
                    o = e.loaderProps,
                    s = (0, ie.Z)(e, ae);
                return a ? i.createElement(d.gi, (0, l.Z)({
                    attributes: {
                        "data-testid": t
                    }
                }, o)) : n ? i.createElement(d.xv, (0, l.Z)({}, r, s), n) : null
            }

            function de(e) {
                var t = e.forwardedRef,
                    n = e.headline,
                    r = e.image,
                    a = e.imagePosition,
                    o = e.imageClassName,
                    s = e.imageLoaderProps,
                    c = e.textBlock,
                    u = e.suptitle,
                    m = e.title,
                    p = e.subtitle,
                    f = e.action,
                    v = e.containerProps,
                    g = e.horizontalLayoutProps,
                    h = e.textLayoutProps,
                    _ = e.actionLayoutProps,
                    b = e.ctaLayoutProps,
                    y = e.extraColumnLayoutProps,
                    k = e.dismissibleProps,
                    O = e.extraColumnProps,
                    S = e.headlineGap,
                    E = e.isLoading,
                    I = null;
                f && (I = f instanceof Array ? f.map((function(e) {
                    return i.createElement(le, (0, l.Z)({
                        key: "action",
                        name: "action"
                    }, e, {
                        isLoading: E
                    }))
                })) : i.createElement(le, (0, l.Z)({}, f, {
                    name: "action",
                    isLoading: E
                })));
                var x = c || i.createElement(d.Kq, {
                        gap: 0
                    }, u ? i.createElement(d.Kq.Item, null, i.createElement(ce, (0, l.Z)({
                        name: "suptitle",
                        isLoading: E,
                        loaderProps: null === u || void 0 === u ? void 0 : u.loaderProps,
                        variant: "body_1",
                        content: "object" === (0, re.Z)(u) ? null === u || void 0 === u ? void 0 : u.children : u
                    }, "string" !== typeof u && u))) : null, i.createElement(d.Kq.Item, null, i.createElement(d.Kq, (0, l.Z)({
                        direction: "row"
                    }, y), i.createElement(d.Kq.Item, {
                        grow: !0
                    }, i.createElement(d.Kq, h, i.createElement(d.Kq.Item, null, m ? i.createElement(ce, (0, l.Z)({
                        name: "title",
                        isLoading: E,
                        loaderProps: null === m || void 0 === m ? void 0 : m.loaderProps,
                        variant: "featured_1",
                        content: "object" === (0, re.Z)(m) ? null === m || void 0 === m ? void 0 : m.children : m
                    }, "string" !== typeof m && m)) : null), p ? i.createElement(d.Kq.Item, null, i.createElement(ce, (0, l.Z)({
                        name: "subtitle",
                        isLoading: E,
                        loaderProps: null === p || void 0 === p ? void 0 : p.loaderProps,
                        color: "neutral_alt",
                        content: "object" === (0, re.Z)(p) ? null === p || void 0 === p ? void 0 : p.children : p
                    }, "string" !== typeof p && p))) : null)), O ? i.createElement(d.Kq.Item, O, O.content) : null))),
                    N = k ? d.wW : i.Fragment;
                return v && Object.assign(v, se(se({}, v), {}, {
                    attributes: se(se({}, null === v || void 0 === v ? void 0 : v.attributes), {}, {
                        ref: t
                    })
                })), i.createElement(d.xu, v, i.createElement(N, k, i.createElement(d.Kq, {
                    gap: S
                }, n ? i.createElement(d.Kq.Item, null, i.createElement(ce, (0, l.Z)({
                    name: "headline",
                    isLoading: E,
                    loaderProps: null === n || void 0 === n ? void 0 : n.loaderProps,
                    variant: "headline_2",
                    content: "object" === (0, re.Z)(n) ? null === n || void 0 === n ? void 0 : n.children : n
                }, "string" !== typeof n && n))) : null, i.createElement(d.Kq.Item, null, i.createElement(d.Kq, (0, l.Z)({}, g, {
                    direction: "right" === a ? "row-reverse" : "row"
                }), r ? i.createElement(d.Kq.Item, {
                    className: o
                }, E ? i.createElement(d.gi, (0, l.Z)({
                    attributes: {
                        "data-testid": "image"
                    }
                }, s)) : r) : null, i.createElement(d.Kq.Item, {
                    grow: !0
                }, i.createElement(d.Kq, (0, l.Z)({
                    gap: 6
                }, _), i.createElement(d.Kq.Item, null, x), I ? i.createElement(d.Kq.Item, null, i.createElement(d.Kq, (0, l.Z)({
                    direction: "row"
                }, b), I)) : null)))))))
            }
            var ue = (0, i.forwardRef)((function(e, t) {
                return i.createElement(de, (0, l.Z)({}, e, {
                    forwardedRef: t
                }))
            }));
            ue.displayName = "CampaignBannerWithRef";
            var me = n(6959),
                pe = {
                    progressionBarWrapper: "a213669eee",
                    progressionBar: "bd6e6e573f",
                    "progressionBar--small": "a1f386fa1f",
                    progressionBarFiller: "feea691fa5",
                    filler: "cd9ff090c6",
                    progressionBarIndicator: "cdab232c3e",
                    "progressionBarIndicator--longText": "d463dc7303",
                    progressionBarIndicatorStart: "bb284785b4",
                    progressionBarIndicatorEnd: "beb419b55c",
                    lightup: "c80533ec84"
                },
                fe = n(40841),
                ve = n.n(fe),
                ge = n(9300);

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var _e = function(e) {
                    if (!e.progress || e.indicators.length < 5) return null;
                    var t, n, r, a, o, s = (0, ge.Z)(),
                        l = (t = e.progress, n = e.upperLimit, r = e.threshold, a = e.indicators, o = e.size, t <= r ? "large" === o ? a.slice(2) : a.slice(2, 4) : t > r && t < n - r ? "large" === o ? a.slice(1, 4) : a.slice(1, 3) : t === n - r ? "large" === o ? a.slice(1, 4) : a.slice(2, 4) : "large" === o ? a.slice(0, 3) : a.slice(1, 3)),
                        c = function(t, n, r, i) {
                            var a = {
                                    large: n - 2 * r,
                                    medium: n - r,
                                    small: n - r
                                },
                                o = "large" === e.size && t > a[e.size],
                                l = "large" !== e.size && t >= a[e.size],
                                c = o || l,
                                d = (t - (o ? i[0].value : i[0].value - r)) / (c ? 2 * r : (i.length + 1) * r) * 100 + "%";
                            if ("small" === e.size) return {
                                fillerLengthPercentage: d
                            };
                            var u = c ? .5 : Math.round(1 / (i.length + 1) * 100) / 100,
                                m = o ? 0 : u,
                                p = i.map((function(t, n) {
                                    var r = t.formattedValue.length > 15,
                                        a = s ? 100 * (1 - (m + n * u)) + "%" : 100 * (m + n * u) + "%",
                                        o = "white",
                                        l = "none",
                                        p = "unset",
                                        f = s ? 100 - parseInt(a) : parseInt(a);
                                    f <= parseInt(d) && (o = "#FEBB02", l = "".concat(pe.lightup), p = f ? "".concat(1 / parseInt(d) * f * 1e3 + 100, "ms") : "unset");
                                    var v = {
                                            left: "calc(".concat(a, " - ").concat("5px", ")"),
                                            backgroundColor: o,
                                            animationName: l,
                                            animationDuration: p
                                        },
                                        g = ve()(pe.progressionBarIndicator, r && pe["progressionBarIndicator--longText"]);
                                    return c && (n === i.length - 1 ? (Object.assign(v, s ? {
                                            left: 0,
                                            right: "unset"
                                        } : {
                                            left: "unset",
                                            right: 0
                                        }), g = ve()(pe.progressionBarIndicator, r && pe["progressionBarIndicator--longText"], pe.progressionBarIndicatorEnd)) : "large" === e.size && 0 === n && (Object.assign(v, s ? {
                                            right: 0
                                        } : {
                                            left: 0
                                        }), g = ve()(pe.progressionBarIndicator, r && pe["progressionBarIndicator--longText"], pe.progressionBarIndicatorStart))),
                                        function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? he(Object(n), !0).forEach((function(t) {
                                                    (0, te.Z)(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({
                                            id: "indicator_".concat(n),
                                            style: v,
                                            className: g
                                        }, t)
                                }));
                            return {
                                fillerLengthPercentage: d,
                                indicators: p
                            }
                        }(e.progress, e.upperLimit, e.threshold, l),
                        d = ve()(pe.progressionBar, "small" === e.size && pe["progressionBar--small"]),
                        u = ve()(pe.progressionBarFiller, "small" === e.size && pe["progressionBar--small"]);
                    return i.createElement("div", {
                        className: pe.progressionBarWrapper
                    }, i.createElement("div", {
                        className: d
                    }, i.createElement("div", {
                        className: u,
                        style: {
                            width: c.fillerLengthPercentage
                        }
                    })), c && c.indicators && c.indicators.map((function(e) {
                        return i.createElement("div", {
                            key: e.id,
                            className: e.className,
                            style: e.style,
                            "data-indicator-label": e.formattedValue
                        })
                    })))
                },
                be = {
                    "vip-highlight": "vip-highlight",
                    "vip-link": "vip-link",
                    "vip-bold": "vip-bold",
                    "vip-black-bold": "vip-black-bold",
                    "vip-semi-bold": "vip-semi-bold"
                },
                ye = Object.keys(be),
                ke = new RegExp("(".concat("<", "|").concat("</", ")(").concat(ye.join("|"), ")(-[0-9]+)*>"), "g"),
                Oe = function(e, t, n, r, a) {
                    return a ? i.createElement(t, {
                        key: r,
                        href: a,
                        className: n
                    }, e) : i.createElement(t, {
                        key: r,
                        className: n
                    }, e)
                },
                Se = function(e, t) {
                    if (!e) return "";
                    for (var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "span", i = Object.assign({}, be, t), a = [], o = [], s = 0, l = arguments.length, d = new Array(l > 3 ? l - 3 : 0), u = 3; u < l; u++) d[u - 3] = arguments[u];
                    for (; null !== (n = ke.exec(e));) {
                        var m = n,
                            p = (0, c.Z)(m, 4),
                            f = p[1],
                            v = p[2],
                            g = p[3];
                        switch (f) {
                            case "<":
                                s !== ke.lastIndex && 0 !== ke.lastIndex && (o.length ? o[o.length - 1].temp.push(e.slice(s, n.index)) : a.push(e.slice(s, n.index))), o.push({
                                    rule: v,
                                    temp: []
                                }), s = ke.lastIndex;
                                break;
                            case "</":
                                var h = o.pop();
                                if (h && h.rule === v) {
                                    var b = "vip-link" === v,
                                        y = void 0;
                                    if (b)
                                        if ("string" === typeof g) y = d[+g.substring(1) - 1];
                                        else y = d.shift();
                                    o.length ? (h.temp.push(e.substring(s, n.index)), o[o.length - 1].temp.push(Oe(h.temp, b ? "a" : r, i[v], s, b ? y : ""))) : (s !== n.index && h.temp.push(e.substring(s, n.index)), a.push(Oe(h.temp, b ? "a" : r, i[v], s, b ? y : "")))
                                } else o.length ? o[o.length - 1].temp.push(e.substring(s, n.index)) : a.push(e.substring(s, n.index)), (0, _.c1)("copyTagParser found tags mismatch in [".concat(e, "]"));
                                s = ke.lastIndex
                        }
                    }
                    for (var k = o.pop(); k;) o.length ? o[o.length - 1].temp.push(k.temp) : a.push(k.temp), k = o.pop();
                    return s !== e.length && a.push(e.slice(s, e.length)), a
                },
                Ee = n(80827),
                Ie = {
                    index: "app",
                    searchresults: "app",
                    hotel: "app",
                    genius_vip_campaigns: "app",
                    vip_oneoff_voucher_tnc: "app",
                    book: "book",
                    confirmation: "book",
                    mybooking: "book",
                    myreservations: "book",
                    rewards_and_wallet: "book",
                    "": "app"
                },
                xe = function(e) {
                    return Ne.test(e) ? "app" : Pe.test(e) ? "book" : Ie[e]
                },
                Ne = /^(content\/)(terms|wallet-terms)/,
                Pe = /^(rewards_and_wallet\/)/,
                we = function(e) {
                    return e.indexOf("voucher") > -1 ? {
                        page_type: "legacy"
                    } : {}
                };

            function Ce(e, t, n) {
                var r = (0, a.T)().getLanguage(),
                    i = e.split("#"),
                    o = (0, c.Z)(i, 2),
                    s = o[0],
                    l = o[1],
                    d = xe(s) || void 0,
                    u = new URLSearchParams;
                if (t && u.append("src", t), n)
                    for (var m = 0, p = Object.entries(n); m < p.length; m++) {
                        var f = (0, c.Z)(p[m], 2),
                            v = f[0],
                            g = f[1];
                        u.append(v, g)
                    }
                for (var h = we(s), _ = 0, b = Object.entries(h); _ < b.length; _++) {
                    var y = (0, c.Z)(b[_], 2),
                        k = y[0],
                        O = y[1];
                    u.append(k, O)
                }
                var S = "en-us" === r ? "/".concat(s, ".html") : "/".concat(s, ".").concat(r, ".html"),
                    E = (0, Ee.K)({
                        host: d,
                        pathname: S,
                        searchParams: u
                    });
                return l ? "".concat(E.toString(), "#").concat(l) : E.toString()
            }
            var Re, De, Le = n(2419),
                Ae = function(e) {
                    var t = (0, Le.YD)({
                            threshold: 0,
                            triggerOnce: !0
                        }),
                        n = (0, c.Z)(t, 2),
                        r = n[0],
                        a = n[1];
                    return (0, i.useEffect)((function() {
                        a && e && e()
                    }), [a, e]), r
                },
                Te = function(e, t, n) {
                    var a = (0, i.useRef)(!1);
                    return (0, i.useCallback)((function() {
                        e && t && (a.current || (me.Y.publish("CAPLA_EVENT_genius_vip_BANNER_VIEW", {
                            campaign: t,
                            actionName: e
                        }), "index" === e && (n ? (0, o.pj)((0, s.Z)(Re || (Re = (0, r.Z)(["cCHObVKKMadMUPXPRQdGUKCMeOUDeVREHGWPHDDWe"]))), 5) : (0, o.pj)((0, s.Z)(De || (De = (0, r.Z)(["cCHObVKKMadMUPXPRQdGUKCMeOUDeVREHGFRURURHe"]))), 5)), a.current = !0))
                    }), [e, t])
                },
                Fe = n(21930),
                Me = {
                    sliderContainer: "a5e5f2c30e",
                    innerWrapper: "ec0695d8bb",
                    gappedSlider: "b2a34b3a24",
                    indicatorContainer: "f1d2559f9d",
                    indicator: "c03b4a5a61",
                    "indicator--dot": "cd114cfb51",
                    "indicator--bar": "d1e8980d1e"
                };

            function Be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Be(Object(n), !0).forEach((function(t) {
                        (0, te.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var je = function(e) {
                    var t = e.children,
                        n = e.indicatorStyle,
                        r = e.speed,
                        a = void 0 === r ? 1e3 : r,
                        o = e.transitionSpeed,
                        s = void 0 === o ? 600 : o,
                        l = e.slideWidth,
                        d = e.wrapperClassName,
                        u = e.gap,
                        m = void 0 === u || u,
                        p = i.Children.toArray(t),
                        f = p.length,
                        v = (0, Fe.Z)(p.keys()),
                        g = (0, i.useState)({
                            currentIndex: 0,
                            translateX: 0,
                            transitionStyle: "transform ".concat(s, "ms ease-out"),
                            _slider: p
                        }),
                        h = (0, c.Z)(g, 2),
                        _ = h[0],
                        b = h[1],
                        y = (0, ge.Z)(),
                        k = _.currentIndex,
                        O = _.translateX,
                        S = _.transitionStyle,
                        E = _._slider,
                        I = (0, i.useState)({}),
                        x = (0, c.Z)(I, 2),
                        N = x[0],
                        P = x[1],
                        w = (0, i.useRef)(0),
                        C = (0, i.useRef)(null),
                        R = (0, i.useRef)(0);
                    (0, i.useEffect)((function() {
                        var e;
                        R.current = Math.max((null === (e = C.current) || void 0 === e ? void 0 : e.clientHeight) || 0, R.current), R.current > 0 && P({
                            height: "".concat(R.current, "px")
                        })
                    }), [t]);
                    var D = function() {
                        b(Ve(Ve({}, _), {}, {
                            currentIndex: w.current < f - 1 ? w.current + 1 : 0,
                            translateX: l,
                            transitionStyle: "transform ".concat(s, "ms ease-out")
                        }))
                    };
                    return (0, i.useEffect)((function() {
                        var e;
                        return w.current = k, f >= 2 && (e = window.setInterval(D, a)),
                            function() {
                                e && window.clearInterval(e)
                            }
                    })), i.createElement("div", {
                        className: d,
                        style: {
                            width: "".concat(l, "px")
                        }
                    }, f < 2 ? t : i.createElement(i.Fragment, null, i.createElement("div", {
                        className: Me.sliderContainer,
                        ref: C,
                        style: N
                    }, i.createElement("div", {
                        className: ve()(Me.innerWrapper, m && Me.gappedSlider),
                        style: {
                            transform: y ? "translateX(".concat(O, "px)") : "translateX(-".concat(O, "px)"),
                            transition: "".concat(S)
                        },
                        onTransitionEnd: function() {
                            var e = p.slice(w.current, w.current + 2);
                            f > 1 && e.length < 2 && e.push(p[0]), b(Ve(Ve({}, _), {}, {
                                translateX: 0,
                                transitionStyle: "",
                                _slider: e
                            }))
                        }
                    }, E)), i.createElement("div", {
                        className: Me.indicatorContainer
                    }, v.map((function(e, t) {
                        return i.createElement("div", {
                            key: e,
                            className: ve()(Me.indicator, Me["indicator--".concat(n)]),
                            style: t === k ? {
                                opacity: 1
                            } : {
                                opacity: .3
                            }
                        })
                    })))))
                },
                Ue = {
                    badgeContainer: "ec20d38fa6",
                    medium: "a9db490d31",
                    small: "e7f5203cea",
                    large: "e7446efd24",
                    badgeRingContainer: "d839968fd2",
                    ring: "d6971c0918",
                    blue: "af9f422cee",
                    progress: "d6f8aa6d40",
                    golden: "eed9a75a5b",
                    text: "ccdcfe57e4",
                    badgeCompletedNumber: "a67778fd88",
                    badgeTotalNumber: "b8f0ab5140",
                    badgeNoBookingNumber: "fd56063d48",
                    inner: "e1c4642331",
                    iconImg: "ad1484d069",
                    badgeText: "e3a347e3f9",
                    progressText: "c3de020998",
                    size80: "bbfe2a559f",
                    progressRing: "cc4564610e"
                },
                Ze = function(e) {
                    var t = e.badgeSize,
                        n = e.className,
                        r = e.angle,
                        a = void 0 === r ? 90 : r,
                        o = e.radius,
                        s = void 0 === o ? 55 : o,
                        l = e.strokeWidth,
                        c = void 0 === l ? 10 : l,
                        d = e.gap,
                        u = void 0 === d ? 8 : d,
                        m = e.currentStep,
                        p = void 0 === m ? 3 : m,
                        f = e.totalSteps,
                        v = void 0 === f ? 5 : f,
                        g = e.theme,
                        h = void 0 === g ? "blue" : g,
                        _ = e.children,
                        b = {
                            strokeWidth: t ? 10 : c,
                            gap: t ? 8 : u,
                            radius: t ? 55 : s,
                            angle: t ? 90 : a
                        },
                        y = 2 * b.radius + b.strokeWidth,
                        k = y / 2,
                        O = k - Math.sin(a / 2 / 180 * Math.PI) * b.radius,
                        S = k + Math.sin(a / 2 / 180 * Math.PI) * b.radius,
                        E = k + Math.cos(a / 2 / 180 * Math.PI) * b.radius,
                        I = "M ".concat(O, " ").concat(E, " A ").concat(b.radius, " ").concat(b.radius, " 0 ").concat(+(a < 180), " 1 ").concat(S, " ").concat(E),
                        x = Math.PI * b.radius * (360 - a) / 180,
                        N = (x - b.gap * (v - 1)) / v - b.strokeWidth * (v - 1) / v,
                        P = "".concat(N, "px ").concat(b.gap + b.strokeWidth, "px"),
                        w = p > 0 ? {
                            strokeDasharray: u > 0 ? "".concat((P + " ").repeat(p - 1), " ").concat(N, "px ").concat(x, "px") : "".concat(x * p / v, "px ").concat(x, "px")
                        } : void 0;
                    return i.createElement("div", {
                        className: ve()(n, Ue.badgeContainer, t && Ue[t])
                    }, i.createElement("div", {
                        className: ve()(Ue.badgeRingContainer, Ue[h])
                    }, i.createElement("svg", {
                        viewBox: "0 0 ".concat(y, " ").concat(y),
                        fill: "none"
                    }, i.createElement("g", {
                        transform: "scale(1,1)"
                    }, i.createElement("path", {
                        d: I,
                        className: Ue.ring,
                        strokeWidth: b.strokeWidth || c,
                        strokeDasharray: u > 0 ? P : void 0
                    }), p > 0 ? i.createElement("path", {
                        d: I,
                        style: w,
                        className: ve()(Ue.ring, Ue.progress),
                        strokeWidth: b.strokeWidth || c
                    }) : null)), _ ? i.createElement("div", {
                        className: Ue.inner
                    }, _) : null))
                };
            Ze.Text = function(e) {
                var t = e.badgeSize,
                    n = e.currentStep,
                    r = e.totalSteps,
                    a = e.theme,
                    o = e.className,
                    s = {
                        small: {
                            completedTextSize: "headline_2",
                            totalTextSize: "body_2"
                        },
                        medium: {
                            completedTextSize: "headline_1",
                            totalTextSize: "featured_3"
                        },
                        large: {
                            completedTextSize: "headline_1",
                            totalTextSize: "strong_1"
                        }
                    }[t || "medium"];
                return i.createElement("div", {
                    className: ve()(Ue.badgeText, o, a && Ue[a])
                }, i.createElement(d.xv, {
                    variant: s.completedTextSize,
                    className: ve()(Ue.text, n > 0 ? Ue.badgeCompletedNumber : Ue.badgeNoBookingNumber)
                }, Math.max(0, n)), i.createElement(d.xv, {
                    variant: s.totalTextSize,
                    className: ve()(Ue.text, n > 0 ? Ue.badgeTotalNumber : Ue.badgeNoBookingNumber)
                }, "/", r))
            };
            var Ke, qe = Ze,
                Qe = function(e) {
                    var t = e.size,
                        n = void 0 === t ? "medium" : t,
                        r = e.theme,
                        a = void 0 === r ? "blue" : r,
                        o = e.bookingsCount,
                        s = e.maxCount,
                        c = e.rewardsSent,
                        u = e.isGappedRing,
                        m = void 0 === u || u,
                        p = e.iconSrc,
                        f = e.additionalText,
                        v = c ? "https://bstatic.com/xdata/images/xphoto/max300/155161147.png?k=d70408f26332684fc7ad8476baf145813e2e71a7d8d89a40645bcc97cda6f00e&o=" : "https://bstatic.com/xdata/images/xphoto/max300/155161149.png?k=02a71e2df8269c8f9783c405dcc3854ef4a727b739a7202aed1caa64dae5141a&o=",
                        g = {
                            small: "48px",
                            medium: "64px",
                            large: "70px"
                        }[n],
                        h = {
                            badgeSize: n,
                            theme: a,
                            currentStep: o,
                            totalSteps: s,
                            gap: m ? 8 : 0,
                            radius: 60,
                            angle: 100
                        };
                    return i.createElement(d.Kq, {
                        gap: null === f || void 0 === f ? void 0 : f.gap,
                        alignItems: "center"
                    }, i.createElement(d.Kq.Item, null, i.createElement("div", {
                        className: Ue.progressRing
                    }, i.createElement(qe, h, i.createElement(d.Ee, {
                        src: p || v,
                        fallback: null,
                        width: g,
                        height: g,
                        className: ve()(Ue.iconImg, n)
                    }), i.createElement(qe.Text, (0, l.Z)({}, h, {
                        className: Ue.progressText
                    }))))), null !== f && void 0 !== f && f.content.length ? i.createElement(d.Kq.Item, null, i.createElement(d.xv, f.textProps, f.content)) : null)
                };

            function Ge(e) {
                var t, n = (0, i.useContext)(Dt).programType,
                    a = e.asset,
                    c = e.title,
                    u = e.subtitle,
                    m = e.endDate,
                    p = e.progressBar,
                    f = e.cta,
                    v = e.bookAndUnlockRounds,
                    g = p && p.progress > 0,
                    h = function(e) {
                        return e ? Ce(e || "", "index", {
                            banner: "index"
                        }) : ""
                    },
                    _ = function() {
                        me.Y.publish("CAPLA_EVENT_genius_vip_BANNER_CTA_CLICK", {
                            campaign: n,
                            actionName: "index"
                        }), (0, o.pj)((0, s.Z)(Ke || (Ke = (0, r.Z)(["cCHObVKKMadMUPXPRQdGUKCMeOUDeVREHGFRURURHe"]))), 4)
                    },
                    b = {
                        containerProps: {
                            backgroundColor: "brand_primary",
                            className: ne.banner
                        },
                        horizontalLayoutProps: {
                            alignItems: "center",
                            gap: 8
                        },
                        image: i.createElement(d.Ee, {
                            width: "144px",
                            height: "144px",
                            src: a,
                            fallback: null
                        }),
                        title: {
                            children: Se(c, {
                                "vip-highlight": ne.vipHighlight
                            }),
                            variant: "headline_3",
                            className: g ? ne.bannerTitle : ""
                        },
                        suptitle: {
                            children: m,
                            variant: "body_2",
                            className: g ? "" : ne.marginBottom1x
                        },
                        subtitle: g ? void 0 : {
                            children: u,
                            variant: "body_1",
                            color: "white"
                        },
                        extraColumnProps: {
                            content: p && i.createElement(_e, (0, l.Z)({}, p, {
                                size: "medium"
                            })),
                            className: g ? ne.progrssionBarWrapper : void 0
                        },
                        extraColumnLayoutProps: {
                            alignItems: "end"
                        },
                        action: null === f || void 0 === f ? void 0 : f.map((function(e) {
                            return {
                                content: i.createElement(d.zx, {
                                    text: e.text,
                                    variant: "primary",
                                    size: "medium"
                                }),
                                href: h(e.actionString),
                                callback: _
                            }
                        })),
                        actionLayoutProps: {
                            gap: 4
                        }
                    },
                    y = {
                        containerProps: {
                            backgroundColor: "brand_primary",
                            className: ve()(ne.banner, ne.modern),
                            padding: 4
                        },
                        horizontalLayoutProps: {
                            alignItems: "stretch",
                            gap: 4
                        },
                        imagePosition: "right",
                        image: v ? i.createElement(je, {
                            speed: 4e3,
                            indicatorStyle: "bar",
                            slideWidth: 92
                        }, v.map((function(e) {
                            return i.createElement(Qe, (0, l.Z)({}, e.ringProps, {
                                key: "slider_".concat(e.index)
                            }))
                        }))) : i.createElement(d.Ee, {
                            width: 120,
                            height: 120,
                            src: a,
                            fallback: null
                        }),
                        action: null === f || void 0 === f ? void 0 : f.map((function(e) {
                            return {
                                content: i.createElement(d.zx, {
                                    text: e.text,
                                    variant: "primary",
                                    size: "medium"
                                }),
                                href: h(e.actionString),
                                callback: _
                            }
                        })),
                        actionLayoutProps: {
                            gap: 8,
                            justifyContent: "space-between"
                        },
                        textBlock: i.createElement(d.Kq, {
                            gap: 1
                        }, m ? i.createElement(d.Kq.Item, null, i.createElement(d.xv, {
                            color: "white",
                            variant: "body_2"
                        }, m)) : null, i.createElement(d.Kq.Item, null, i.createElement(d.xv, {
                            color: "white",
                            variant: "headline_3"
                        }, Se(c, {
                            "vip-highlight": ne.vipHighlight
                        }))), u ? i.createElement(d.xv, {
                            color: "white",
                            variant: "body_1"
                        }, u) : null)
                    },
                    k = {
                        containerProps: {
                            backgroundColor: "brand_primary",
                            className: ve()(ne.banner, ne.modern)
                        },
                        imagePosition: "right",
                        horizontalLayoutProps: {
                            alignItems: "center",
                            gap: 8
                        },
                        image: i.createElement(d.Ee, {
                            width: "144px",
                            height: "144px",
                            src: a,
                            fallback: null
                        }),
                        textLayoutProps: {
                            gap: 1
                        },
                        title: {
                            children: Se(c, {
                                "vip-highlight": ne.vipHighlight
                            }),
                            variant: "headline_3",
                            className: ne.bannerTitle
                        },
                        subtitle: {
                            children: Se(u),
                            color: "white",
                            variant: "body_1"
                        },
                        action: null === f || void 0 === f ? void 0 : f.map((function(e) {
                            return {
                                content: i.createElement(d.zx, {
                                    variant: "primary",
                                    text: e.text,
                                    size: "medium"
                                }),
                                href: h(e.actionString),
                                callback: _
                            }
                        })),
                        actionLayoutProps: {
                            gap: 8
                        }
                    },
                    O = (t = {}, (0, te.Z)(t, I.BookAndUnlock, y), (0, te.Z)(t, I.InstantDiscount, k), (0, te.Z)(t, I.SpendAndUnlock, b), (0, te.Z)(t, I.InstantCredit, b), (0, te.Z)(t, I.FreeRoomUpgrade, {}), (0, te.Z)(t, I.OneOffVoucher, {}), (0, te.Z)(t, I.InstantVoucher, b), t),
                    S = Te("index", n, !1),
                    E = Ae(S);
                return i.createElement(ue, (0, l.Z)({}, O[n], {
                    ref: E
                }))
            }
            var We = n(75928),
                ze = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
            for (var Xe = function(e) {
                    return "string" === typeof e && ze.test(e)
                }, He = [], Ye = 0; Ye < 256; ++Ye) He.push((Ye + 256).toString(16).substr(1));
            var Je = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (He[e[t + 0]] + He[e[t + 1]] + He[e[t + 2]] + He[e[t + 3]] + "-" + He[e[t + 4]] + He[e[t + 5]] + "-" + He[e[t + 6]] + He[e[t + 7]] + "-" + He[e[t + 8]] + He[e[t + 9]] + "-" + He[e[t + 10]] + He[e[t + 11]] + He[e[t + 12]] + He[e[t + 13]] + He[e[t + 14]] + He[e[t + 15]]).toLowerCase();
                if (!Xe(n)) throw TypeError("Stringified UUID is invalid");
                return n
            };
            var $e = function(e) {
                if (!Xe(e)) throw TypeError("Invalid UUID");
                var t, n = new Uint8Array(16);
                return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
            };
            var et = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
                tt = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

            function nt(e, t, n, r) {
                switch (e) {
                    case 0:
                        return t & n ^ ~t & r;
                    case 1:
                    case 3:
                        return t ^ n ^ r;
                    case 2:
                        return t & n ^ t & r ^ n & r
                }
            }

            function rt(e, t) {
                return e << t | e >>> 32 - t
            }
            var it = function(e) {
                    var t = [1518500249, 1859775393, 2400959708, 3395469782],
                        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    if ("string" === typeof e) {
                        var r = unescape(encodeURIComponent(e));
                        e = [];
                        for (var i = 0; i < r.length; ++i) e.push(r.charCodeAt(i))
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    for (var a = e.length / 4 + 2, o = Math.ceil(a / 16), s = new Array(o), l = 0; l < o; ++l) {
                        for (var c = new Uint32Array(16), d = 0; d < 16; ++d) c[d] = e[64 * l + 4 * d] << 24 | e[64 * l + 4 * d + 1] << 16 | e[64 * l + 4 * d + 2] << 8 | e[64 * l + 4 * d + 3];
                        s[l] = c
                    }
                    s[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), s[o - 1][14] = Math.floor(s[o - 1][14]), s[o - 1][15] = 8 * (e.length - 1) & 4294967295;
                    for (var u = 0; u < o; ++u) {
                        for (var m = new Uint32Array(80), p = 0; p < 16; ++p) m[p] = s[u][p];
                        for (var f = 16; f < 80; ++f) m[f] = rt(m[f - 3] ^ m[f - 8] ^ m[f - 14] ^ m[f - 16], 1);
                        for (var v = n[0], g = n[1], h = n[2], _ = n[3], b = n[4], y = 0; y < 80; ++y) {
                            var k = Math.floor(y / 20),
                                O = rt(v, 5) + nt(k, g, h, _) + b + t[k] + m[y] >>> 0;
                            b = _, _ = h, h = rt(g, 30) >>> 0, g = v, v = O
                        }
                        n[0] = n[0] + v >>> 0, n[1] = n[1] + g >>> 0, n[2] = n[2] + h >>> 0, n[3] = n[3] + _ >>> 0, n[4] = n[4] + b >>> 0
                    }
                    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
                },
                at = function(e, t, n) {
                    function r(e, r, i, a) {
                        if ("string" === typeof e && (e = function(e) {
                                e = unescape(encodeURIComponent(e));
                                for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                                return t
                            }(e)), "string" === typeof r && (r = $e(r)), 16 !== r.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                        var o = new Uint8Array(16 + e.length);
                        if (o.set(r), o.set(e, r.length), (o = n(o))[6] = 15 & o[6] | t, o[8] = 63 & o[8] | 128, i) {
                            a = a || 0;
                            for (var s = 0; s < 16; ++s) i[a + s] = o[s];
                            return i
                        }
                        return Je(o)
                    }
                    try {
                        r.name = e
                    } catch (i) {}
                    return r.DNS = et, r.URL = tt, r
                }("v5", 80, it),
                ot = at;

            function st(e) {
                return ot(e + "", "78f09b1c-730c-49ff-8e0f-23315c42a5b7")
            }

            function lt(e, t) {
                var n = (0, i.useState)(!0),
                    r = (0, c.Z)(n, 2),
                    a = r[0],
                    o = r[1];
                return (0, We.Z)((function() {
                    var n = window.localStorage.getItem(e);
                    n && t(n) ? o(!0) : o(!1)
                })), [a, o]
            }

            function ct(e) {
                var t, n, r = (0, f.QT)(),
                    o = null === (t = (0, a.T)().getUserIdentity()) || void 0 === t ? void 0 : t.userId,
                    s = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 72e5,
                            n = st(e),
                            r = lt(n, (function(e) {
                                return Date.now() - +e <= t
                            })),
                            i = (0, c.Z)(r, 2),
                            a = i[0],
                            o = i[1];
                        return {
                            closeDismissibleItem: function() {
                                o(!0), window.localStorage.setItem(n, JSON.stringify(Date.now()))
                            },
                            dismissed: a,
                            encryptLocalStorageKey: n
                        }
                    }(o ? o + " banner" : "genius_vip_campaigns_index_banner", 864e5),
                    u = s.dismissed,
                    m = s.closeDismissibleItem,
                    p = (0, i.useContext)(Dt).programType,
                    v = function() {
                        me.Y.publish("CAPLA_EVENT_genius_vip_BANNER_DISMISS", {
                            campaign: p,
                            actionName: "index"
                        }), m()
                    },
                    g = e.asset,
                    h = e.title,
                    _ = e.subtitle,
                    b = e.endDate,
                    y = e.progressBar,
                    k = e.cta,
                    O = e.bookAndUnlockRounds,
                    S = y && y.progress > 0,
                    E = function(e) {
                        return Ce(e || "", "index", {
                            banner: "index"
                        })
                    },
                    x = function() {
                        me.Y.publish("CAPLA_EVENT_genius_vip_BANNER_CTA_CLICK", {
                            campaign: p,
                            actionName: "index"
                        })
                    },
                    N = {
                        containerProps: {
                            backgroundColor: "brand_primary",
                            className: ne.banner
                        },
                        horizontalLayoutProps: {
                            alignItems: "center",
                            gap: 4
                        },
                        image: i.createElement(d.Ee, {
                            width: "96px",
                            height: "96px",
                            src: g,
                            fallback: null
                        }),
                        textBlock: i.createElement(d.Kq, {
                            gap: 2
                        }, i.createElement(d.xv, {
                            variant: "small_1"
                        }, b), i.createElement(d.xv, {
                            variant: "strong_1"
                        }, Se(h, {
                            "vip-highlight": ne.vipHighlight
                        })), S && y && i.createElement(_e, (0, l.Z)({}, y, {
                            size: "small"
                        }))),
                        action: null === k || void 0 === k ? void 0 : k.map((function(e) {
                            return {
                                content: i.createElement(d.zx, {
                                    text: e.text,
                                    variant: "primary",
                                    size: "medium"
                                }),
                                href: E(e.actionString || ""),
                                callback: x
                            }
                        })),
                        dismissibleProps: {
                            buttonColor: "inherit",
                            closeAriaLabel: r.trans((0, C.t)("gc_banner_accessibility_close")),
                            onClose: v
                        },
                        actionLayoutProps: {
                            gap: 4
                        }
                    },
                    P = {
                        containerProps: {
                            backgroundColor: "brand_primary",
                            className: ne.banner
                        },
                        horizontalLayoutProps: {
                            alignItems: "center",
                            gap: 4
                        },
                        imagePosition: "right",
                        image: O ? i.createElement(je, {
                            speed: 4e3,
                            indicatorStyle: "bar",
                            slideWidth: 92
                        }, O.map((function(e) {
                            return i.createElement(Qe, (0, l.Z)({}, e.ringProps, {
                                key: "slider_".concat(e.index)
                            }))
                        }))) : i.createElement(d.Ee, {
                            width: 84,
                            height: 84,
                            src: g,
                            fallback: null
                        }),
                        action: null === k || void 0 === k ? void 0 : k.map((function(e) {
                            return {
                                content: i.createElement(d.zx, {
                                    text: e.text,
                                    variant: "primary",
                                    size: "medium"
                                }),
                                href: E(e.actionString || ""),
                                callback: x
                            }
                        })),
                        actionLayoutProps: {
                            gap: 8
                        },
                        textBlock: i.createElement(d.Kq, {
                            gap: 2
                        }, b ? i.createElement(d.Kq.Item, null, i.createElement(d.xv, {
                            color: "white",
                            variant: "small_1"
                        }, b)) : null, i.createElement(d.Kq.Item, null, i.createElement(d.xv, {
                            color: "white",
                            variant: "strong_1"
                        }, Se(h, {
                            "vip-highlight": ne.vipHighlight
                        }))), _ ? i.createElement(d.xv, {
                            color: "white",
                            variant: "small_1"
                        }, _) : null)
                    },
                    w = {
                        containerProps: {
                            backgroundColor: "brand_primary",
                            className: ne.banner
                        },
                        horizontalLayoutProps: {
                            alignItems: "center",
                            gap: 4
                        },
                        image: i.createElement(d.Ee, {
                            width: "84px",
                            height: "84px",
                            src: g,
                            fallback: null
                        }),
                        textLayoutProps: {
                            gap: 2
                        },
                        title: {
                            children: Se(h, {
                                "vip-highlight": ne.vipHighlight
                            }),
                            variant: "strong_1"
                        },
                        suptitle: {
                            children: Se(b),
                            color: "white",
                            variant: "small_1"
                        },
                        dismissibleProps: {
                            buttonColor: "inherit",
                            closeAriaLabel: r.trans((0, C.t)("gc_banner_accessibility_close")),
                            onClose: v
                        },
                        action: null === k || void 0 === k ? void 0 : k.map((function(e) {
                            return {
                                content: i.createElement(d.zx, {
                                    text: e.text,
                                    variant: "primary",
                                    size: "medium"
                                }),
                                href: E(e.actionString || ""),
                                callback: x
                            }
                        })),
                        actionLayoutProps: {
                            gap: 8
                        }
                    },
                    R = (n = {}, (0, te.Z)(n, I.BookAndUnlock, P), (0, te.Z)(n, I.InstantDiscount, w), (0, te.Z)(n, I.SpendAndUnlock, N), (0, te.Z)(n, I.InstantCredit, N), (0, te.Z)(n, I.FreeRoomUpgrade, {}), (0, te.Z)(n, I.OneOffVoucher, {}), (0, te.Z)(n, I.InstantVoucher, N), n),
                    D = Te("index", p, !0),
                    L = Ae(D);
                return i.createElement("div", {
                    className: u ? ne.dismissedBannerWrapper : ne.bannerWrapper
                }, i.createElement(ue, (0, l.Z)({}, R[p], {
                    ref: L
                })))
            }
            var dt = {
                    TextWithTranslationTag: function(e) {
                        return e.text
                    },
                    Image: function(e) {
                        return e.url
                    },
                    GeniusVipIcon: function(e) {
                        return e.name
                    }
                },
                ut = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t) {
                        if (t.__typename && dt[t.__typename]) return dt[t.__typename](t);
                        if ("object" !== (0, re.Z)(t)) return t;
                        for (var r in t)
                            if (t.hasOwnProperty(r)) {
                                if (!t || "object" !== (0, re.Z)(t)) return t;
                                n[r] = e(t[r], Object.assign(t[r] instanceof Array ? [] : {}, t[r]))
                            }
                        return n
                    }
                };

            function mt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mt(Object(n), !0).forEach((function(t) {
                        (0, te.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ft = function(e, t, n, r, i) {
                    var a, o, s;
                    if (i && i.rounds && n.maxRounds) {
                        var l = n.rewardPercent,
                            c = n.endDate,
                            d = n.bookingsPerRound,
                            u = n.maxRounds,
                            m = i.rounds,
                            p = i.isOnboarding,
                            f = i.maxBookingsReached,
                            v = 5 === l,
                            g = {
                                start_style: "<vip-highlight>",
                                end_style: "</vip-highlight>"
                            },
                            h = (null === (a = r.amountEarned) || void 0 === a ? void 0 : a.amount) || 0,
                            _ = m.reduce((function(e, t) {
                                var n = t.rewardAmount,
                                    r = t.rewardsSent,
                                    i = t.bookingsCount,
                                    a = t.maxCount;
                                return null !== n && void 0 !== n && n.amount && !r && i === a ? e + n.amount : e
                            }), 0),
                            b = (null === (o = r.formattedCurrencies) || void 0 === o ? void 0 : o.amountEarned) || "",
                            y = (null === (s = r.formattedCurrencies) || void 0 === s ? void 0 : s.amountPendingTotal) || "",
                            k = e.trans((0, C.t)("genius_vip_challenge_bnu_end_date", {
                                variables: {
                                    end_date: (0, R.p6)(e, {
                                        date: new Date(c) || "",
                                        form: L
                                    })
                                }
                            })),
                            O = m.filter((function(e) {
                                return e.rewardsSent
                            })).length,
                            S = O === u,
                            E = function(e, t) {
                                return e.map((function(e) {
                                    var n = e.bookingsCount,
                                        r = e.maxCount,
                                        i = e.rewardsSent,
                                        a = e.isStarted,
                                        o = e.index,
                                        s = e.formattedCurrencies,
                                        l = (null === s || void 0 === s ? void 0 : s.rewardAmount) || "";
                                    return {
                                        isStarted: a,
                                        index: o,
                                        ringProps: {
                                            size: "small",
                                            theme: t,
                                            isGappedRing: 2 !== r,
                                            maxCount: r,
                                            bookingsCount: n,
                                            rewardsSent: i
                                        },
                                        rewardAmountFormatted: l,
                                        label: "",
                                        description: ""
                                    }
                                })).sort((function(e, t) {
                                    return e.index - t.index
                                }))
                            }(m, "golden"),
                            I = {
                                cta: [{
                                    text: p ? e.trans((0, C.t)("genius_vip_challenge_bnu_cta_get_details")) : e.trans((0, C.t)("genius_vip_challenge_bnu_cta_check_progress")),
                                    actionString: "genius_vip_campaigns"
                                }]
                            };
                        if (p) Object.assign(I, {
                            title: e.trans((0, C.t)(v ? "genius_vip_challenge_bnu_index_banner_title_onboarding_5_percent" : "genius_vip_challenge_bnu_index_banner_title_onboarding_10_percent", {
                                variables: pt({
                                    num_booking_threshold: d || 5
                                }, g),
                                num_exception: d || 5
                            })),
                            asset: "https://bstatic.com/data/mobile/gneius_vip_logo_with_ripple_v2@LARGE.png"
                        });
                        else if (S) Object.assign(I, {
                            title: e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_title_earned_total", {
                                variables: pt({
                                    amount_earned_total: b
                                }, g)
                            }))
                        });
                        else if (f && O > 0) Object.assign(I, {
                            title: e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_title_complete_stays_to_earn", {
                                variables: pt({
                                    amount_to_earn_total: y
                                }, g)
                            })),
                            subtitle: e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_subtitle_earned_total", {
                                variables: {
                                    amount_earned_total: b
                                }
                            }))
                        });
                        else if (f && !O) Object.assign(I, {
                            title: e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_title_complete_stays_to_earn", {
                                variables: pt({
                                    amount_to_earn_total: y
                                }, g)
                            }))
                        });
                        else {
                            E.filter((function(e) {
                                return e.isStarted
                            })).slice(-2).forEach((function(t, n) {
                                var r = t.ringProps,
                                    i = r.bookingsCount,
                                    a = r.maxCount,
                                    o = r.rewardsSent,
                                    s = a - i;
                                0 === i ? I.subtitle = h && _ && u > 2 ? e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_subtitle_earned_total_and_stay_more", {
                                    variables: {
                                        amount_earned_total: b
                                    }
                                })) : e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_subtitle_make_another_booking")) : i === a ? I.title = o ? e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_title_earned_last", {
                                    variables: pt({
                                        amount_earned_total: b
                                    }, g)
                                })) : e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_title_complete_stays_to_earn", {
                                    variables: pt({
                                        amount_to_earn_total: y
                                    }, g)
                                })) : t.index > O ? I.subtitle = u > 2 && h && 2 === a ? e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_subtitle_earned_total_and_num_booking_to_earn", {
                                    variables: {
                                        amount_earned_total: b
                                    }
                                })) : e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_subtitle_num_booking_to_earn", {
                                    variables: {
                                        num_booking_more: s
                                    },
                                    num_exception: s
                                })) : I.title = e.trans((0, C.t)(v ? "genius_vip_challenge_bnu_index_banner_title_num_booking_to_earn_5_percent" : "genius_vip_challenge_bnu_index_banner_title_num_booking_to_earn_10_percent", {
                                    variables: pt({
                                        num_booking_more: s
                                    }, g),
                                    num_exception: s
                                })), 1 === n && O === t.index && i > 0 && (I.subtitle = e.trans((0, C.t)("genius_vip_challenge_bnu_index_banner_subtitle_earned_total", {
                                    variables: {
                                        amount_earned_total: b
                                    }
                                })))
                            }))
                        }
                        var x = (S ? E.slice(-1) : E.filter((function(e) {
                            return e.isStarted && !e.ringProps.rewardsSent
                        }))).map((function(n) {
                            if (0 === n.index && n.ringProps.bookingsCount < n.ringProps.maxCount) return n;
                            var r = {
                                content: e.trans((0, C.t)("genius_vip_challenge_bnu_round_num", {
                                    variables: {
                                        num_round: n.index + 1
                                    }
                                })),
                                gap: 2,
                                textProps: {
                                    variant: t ? "small_1" : "body_2",
                                    color: "white"
                                }
                            };
                            return pt(pt({}, n), {}, {
                                ringProps: pt(pt({}, n.ringProps), {}, {
                                    additionalText: r
                                })
                            })
                        }));
                        return I.bookAndUnlockRounds = p ? void 0 : x, I.endDate = I.subtitle ? "" : k, I
                    }
                },
                vt = {
                    view: {
                        welcome: k.MODAL_VIEW,
                        reminding: k.REMINDER_MODAL_VIEW,
                        login: k.LOGIN_MODAL_VIEW
                    },
                    click: {
                        welcome: k.MODAL_CTA_CLICK,
                        reminding: k.REMINDER_MODAL_CTA_CLICK,
                        login: k.LOGIN_MODAL_CTA_CLICK
                    },
                    dismiss: {
                        welcome: k.MODAL_DISMISS,
                        reminding: k.REMINDER_MODAL_DISMISS
                    }
                };
            var gt = function(e, t, n, r) {
                var i;
                "click" !== (i = n) && "dismiss" !== i && "view" !== i ? me.Y.publish(n, {
                    campaign: e,
                    actionName: t
                }) : r && vt[n][r] && me.Y.publish(vt[n][r], {
                    campaign: e,
                    actionName: t
                })
            };

            function ht(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ht(Object(n), !0).forEach((function(t) {
                        (0, te.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function bt(e) {
                var t = e.actionArray,
                    n = e.isMdot,
                    r = e.modalCategory,
                    a = e.programType,
                    o = e.actionName,
                    s = e.onCtaClick,
                    c = e.onClose;
                if (!t || !t.length) return null;
                var u = function() {
                        s && s(), a && gt(a, o, "click", r)
                    },
                    m = function() {
                        c && c()
                    },
                    p = t.sort((function(e, t) {
                        return e.actionDismiss && !t.actionDismiss ? 1 : !e.actionDismiss && t.actionDismiss ? -1 : 0
                    })).map((function(e) {
                        return {
                            text: e.text,
                            actionString: e.actionString ? Ce(e.actionString || "", o, _t({
                                modal: o,
                                type: r
                            }, e.actionParams)) : "",
                            actionDismiss: e.actionDismiss
                        }
                    }));
                return i.createElement(i.Fragment, null, p.map((function(e, t) {
                    return i.createElement(d.zx, (0, l.Z)({
                        key: "cta_".concat(e.text)
                    }, function(e, t) {
                        var r = e.actionString,
                            i = (e.actionDismiss, {
                                text: e.text,
                                size: n ? "large" : "medium",
                                wide: n,
                                variant: t ? "tertiary" : "primary"
                            });
                        return _t(_t({}, i), {}, r ? {
                            onClick: u,
                            attributes: {
                                href: r
                            }
                        } : {
                            onClick: m
                        })
                    }(e, t)))
                })))
            }
            var yt, kt, Ot, St, Et = {
                    vipBold: "ccf424a5ad",
                    extraPadding: "d04c5d2f03",
                    doubleExtraPadding: "a91e8e5f9d",
                    mdotActionBar: "cfcd3b7a79",
                    "mdotActionBar--noPaddingBottom": "eafe9db2fe"
                },
                It = function(e) {
                    switch (e) {
                        case I.BookAndUnlock:
                        case I.InstantDiscount:
                            return {
                                width: "248px",
                                height: "228px"
                            };
                        case I.InstantCredit:
                        case I.SpendAndUnlock:
                            return {
                                width: "208px",
                                height: "176px"
                            };
                        case I.OneOffVoucher:
                            return {
                                width: "256px",
                                height: "256px"
                            };
                        default:
                            return {
                                width: "208px",
                                height: "176px"
                            }
                    }
                };
            var xt, Nt, Pt, wt, Ct, Rt = function(e) {
                    var t, n = e.uiData,
                        a = e.isMdot,
                        l = e.programType,
                        c = e.actionName,
                        u = e.modalCategory,
                        m = e.onClose,
                        p = e.etData,
                        f = bt({
                            actionArray: n.cta,
                            isMdot: a,
                            modalCategory: u,
                            programType: l,
                            actionName: c,
                            onClose: m
                        });
                    if (!l || !Object.keys(n).length) return null;
                    var v = It(l),
                        g = 2 === (null === (t = n.cta) || void 0 === t ? void 0 : t.length);
                    return i.createElement(Le.df, {
                        triggerOnce: !0,
                        onChange: function(e) {
                            if (e && gt(l, c, "view", u), l === I.OneOffVoucher && "welcome" === u && p) {
                                var t = Date.now() - p.requestStartTimestamp;
                                (0, o.uf)("js_gvsp_index_modal_latency_ui", t), t <= 2e3 ? (0, o.pj)((0, s.Z)(yt || (yt = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 3) : t <= 4e3 && (0, o.pj)((0, s.Z)(kt || (kt = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 4), a ? (0, o.ti)((0, s.Z)(Ot || (Ot = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 5) : (0, o.ti)((0, s.Z)(St || (St = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 4)
                            }
                        }
                    }, i.createElement(d.xu, {
                        padding: a ? 4 : 6,
                        className: ve()(a && Et.extraPadding, a && g && Et.doubleExtraPadding)
                    }, i.createElement(d.Kq, {
                        gap: 6,
                        alignItems: "center"
                    }, i.createElement(d.Kq.Item, null, i.createElement(d.Ee, {
                        src: n.asset,
                        width: v.width,
                        height: v.height,
                        contentMode: "fit",
                        fallback: null
                    })), i.createElement(d.Kq.Item, null, i.createElement(d.Kq, {
                        gap: 4
                    }, i.createElement(d.Kq.Item, null, i.createElement(d.xv, {
                        variant: "headline_2",
                        align: "center"
                    }, n.title)), i.createElement(d.Kq.Item, null, i.createElement(d.xv, {
                        variant: a ? "body_1" : "featured_3",
                        align: "center"
                    }, Se(n.subtitle, {
                        "vip-bold": Et.vipBold
                    }))))), i.createElement(d.Kq.Item, {
                        className: ve()(a && Et.mdotActionBar, a && g && Et["mdotActionBar--noPaddingBottom"])
                    }, i.createElement(d.Kq, {
                        gap: a ? 0 : 3
                    }, n.cta && f)))))
                },
                Dt = (0, i.createContext)({
                    programType: I.InstantCredit
                });

            function Lt(e) {
                var t = e.bannerData,
                    n = e.modalData,
                    r = e.dismissModal,
                    o = e.dismissed,
                    s = e.modalCategory,
                    l = e.etData,
                    c = "MDOT" === (0, a.T)().getSiteType(),
                    d = (0, i.useContext)(Dt).programType,
                    m = (0, i.useContext)(u),
                    p = m.isOpen,
                    f = m.toggle,
                    v = m.setContent,
                    g = Rt({
                        uiData: n,
                        isMdot: c,
                        programType: d,
                        actionName: "index",
                        modalCategory: s,
                        onClose: f,
                        etData: l
                    });
                return (0, i.useEffect)((function() {
                    !o && n && (v(g), !p && Object.keys(n).length && (f(), r()))
                })), c ? i.createElement(ct, t) : i.createElement(Ge, t)
            }

            function At() {
                var e, t, n, l, d, u, m, k, O = "MDOT" === (0, a.T)().getSiteType(),
                    E = function() {
                        var e, t, n, l = (0, i.useRef)({
                                localStorageKey: "default_key",
                                localStorageValue: Date.now() + "",
                                modalCategory: "",
                                vipIndex: null
                            }),
                            c = null === (e = (0, a.T)().getUserIdentity()) || void 0 === e ? void 0 : e.userId,
                            d = (0, a.T)().getBasePageUrl().searchParams,
                            u = Y(),
                            m = !Boolean(c) || !(!d.get(P) || !u),
                            p = d.get(N),
                            f = {
                                requestStartTimestamp: (0, i.useRef)(Date.now()).current
                            },
                            v = (0, h.a)(b, {
                                variables: {
                                    input: {
                                        enableEnroll: !0,
                                        page: x.INDEX,
                                        isFromEmail: Boolean(p)
                                    }
                                },
                                skip: m
                            }),
                            g = v.loading,
                            k = v.error,
                            O = v.data;
                        if (k || g || m || !O) return k && (0, _.c1)("Genius VIP index query error ".concat(k.message)), l.current;
                        if ("GeniusVipEnrolledProgram" === (null === (t = O.geniusVipEnrolledProgram) || void 0 === t ? void 0 : t.__typename) && (null === (n = O.geniusVipEnrolledProgram.metadata) || void 0 === n ? void 0 : n.programType) === I.OneOffVoucher) {
                            var S = Date.now() - f.requestStartTimestamp;
                            (0, o.uf)("js_gvsp_index_modal_latency_data", S), S <= 500 ? (0, o.pj)((0, s.Z)(X || (X = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 1) : S <= 1e3 && (0, o.pj)((0, s.Z)(H || (H = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 2)
                        }
                        var E = O.geniusVipEnrolledProgram;
                        if (E && "GeniusVipEnrolledProgram" === E.__typename && y(E, ["metadata", "reward", "geniusVipUIs"])) {
                            var w = E.geniusVipUIs.indexModal,
                                C = "";
                            E.metadata.programType === I.OneOffVoucher && "reminding" !== (null === w || void 0 === w ? void 0 : w.modalCategory) && p ? C = p : w && y(w, ["modalCategory", "uniqueKey"]) && (C = w.modalCategory + w.uniqueKey), l.current = {
                                vipIndex: E,
                                localStorageKey: (c || p) + "",
                                localStorageValue: C,
                                modalCategory: w && w.modalCategory || "",
                                etData: f
                            }
                        }
                        return l.current
                    }(),
                    w = E.localStorageKey,
                    C = E.localStorageValue,
                    R = E.vipIndex,
                    D = E.etData,
                    L = E.modalCategory,
                    A = function(e, t) {
                        var n = st(e),
                            r = lt(n, (function(e) {
                                return e === t
                            })),
                            a = (0, c.Z)(r, 2),
                            o = a[0],
                            s = a[1];
                        return {
                            closeDismissibleItem: (0, i.useCallback)((function() {
                                s(!0), window.localStorage.setItem(n, t)
                            }), [n, s, t]),
                            dismissed: o,
                            encryptLocalStorageKey: n
                        }
                    }(w, C),
                    T = A.closeDismissibleItem,
                    F = A.dismissed,
                    M = (0, f.QT)(),
                    B = null === (e = (0, a.T)().getUserIdentity()) || void 0 === e ? void 0 : e.userId,
                    V = (0, a.T)().getBasePageUrl(),
                    j = null === V || void 0 === V ? void 0 : V.searchParams,
                    U = null === R || void 0 === R || null === (t = R.metadata) || void 0 === t ? void 0 : t.programType;
                (0, o.zm)((0, s.Z)(xt || (xt = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"])))), U === I.OneOffVoucher && ((0, o.ti)((0, s.Z)(Nt || (Nt = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 1), O ? (0, o.ti)((0, s.Z)(Pt || (Pt = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 3) : (0, o.ti)((0, s.Z)(wt || (wt = (0, r.Z)(["TWBBeJIFIcbIJfRfPMPSXZXDOXRSCWffPRXe"]))), 2));
                var Z = ut((null === R || void 0 === R || null === (n = R.geniusVipUIs) || void 0 === n ? void 0 : n.indexModal) || {});
                if (!U && !B && j.get(P) === I.OneOffVoucher && (0, v.Z)((0, g.Z)(Ct || (Ct = (0, r.Z)(["cQYIMdUTNOUbWNHGHbfEGfMKMLae"]))))) {
                    var K = J(j, M);
                    Z = K.indexModal, L = K.modalCatgory, U = I.OneOffVoucher
                }
                var q = ut((null === E || void 0 === E || null === (l = E.vipIndex) || void 0 === l || null === (d = l.geniusVipUIs) || void 0 === d ? void 0 : d.indexBanner) || {});
                U === I.BookAndUnlock && R && y(R, ["metadata", "reward", "userProgress"]) && (q = ft(M, O, R.metadata, R.reward, R.userProgress) || {});
                var Q = 0 === Object.keys(Z).length,
                    G = 0 === Object.keys(q).length;
                if ((0, i.useEffect)((function() {
                        U !== I.OneOffVoucher || Q || L !== S.LOGIN && L !== S.EXPIRE || !V || (V.searchParams.set("offlineModalShown", "1"), window.history.pushState({}, "", V))
                    }), [U, Q, V, L]), !U) return null;
                if (G && Q) return null;
                if (U === I.BookAndUnlock && null !== R && void 0 !== R && null !== (u = R.userProgress) && void 0 !== u && u.maxRewardsReached) return null;
                var W = null;
                if ("SpendAndUnlockProgramMetadata" === (null === R || void 0 === R || null === (m = R.metadata) || void 0 === m ? void 0 : m.__typename) && "SpendAndUnlockReward" === (null === (k = R.reward) || void 0 === k ? void 0 : k.__typename)) {
                    var z, $, ee, te, ne = R.metadata,
                        re = null === (z = R.reward.amountTotalUserSpent) || void 0 === z ? void 0 : z.amount,
                        ie = null === ($ = ne.upperLimit) || void 0 === $ ? void 0 : $.amount,
                        ae = null === (ee = ne.threshold) || void 0 === ee ? void 0 : ee.amount;
                    if (re && ie && ae && ne.rewardPercent && null !== (te = q.progressBar) && void 0 !== te && te.indicators) {
                        var oe, se, le = null === (oe = q) || void 0 === oe || null === (se = oe.progressBar) || void 0 === se ? void 0 : se.indicators.map((function(e) {
                            return {
                                value: (null === e || void 0 === e ? void 0 : e.value) || 0,
                                formattedValue: (null === e || void 0 === e ? void 0 : e.formattedValue) || ""
                            }
                        }));
                        W = {
                            progress: re,
                            upperLimit: ie / ((null === ne || void 0 === ne ? void 0 : ne.rewardPercent) / 100),
                            threshold: ae,
                            indicators: le,
                            size: O ? "small" : "medium"
                        }
                    }
                }
                Object.assign(q, {
                    progressBar: W
                });
                var ce = {
                    isMdot: O,
                    openOnLoad: !1,
                    onAfterClose: function() {
                        U && gt(U, "index", "dismiss", L)
                    },
                    sheetContainerProps: {
                        fill: !0
                    }
                };
                return i.createElement(Dt.Provider, {
                    value: {
                        programType: U
                    }
                }, i.createElement(p, ce, i.createElement(Lt, {
                    bannerData: q,
                    modalData: Z,
                    dismissModal: T,
                    dismissed: F,
                    modalCategory: L,
                    etData: D
                })))
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
        80827: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return I
                }
            });
            var r, i, a = n(79399),
                o = n(98178);
            ! function(e) {
                e.admin = "admin", e.app = "app", e.book = "book", e.join = "join"
            }(r || (r = {}));
            var s, l, c, d, u = ((i = {
                    DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
                })[o.N.EXTRANET] = ["hotel_id", "lang", "ses"], i),
                m = {
                    PRODUCTION: (s = {}, s[r.admin] = "admin", s[r.app] = "www", s[r.book] = "secure", s[r.join] = "join", s),
                    STAGING: (l = {}, l[r.admin] = "a", l[r.app] = "w", l[r.book] = "b", l[r.join] = "j", l),
                    KVM: (c = {}, c[r.admin] = ["adm", "devadmin"], c[r.app] = ["app", "devapp"], c[r.book] = ["book", "devbook"], c[r.join] = ["joinapp", "devjoinapp"], c),
                    DQS: (d = {}, d[r.admin] = "admin", d[r.app] = "app", d[r.book] = "book", d[r.join] = "join", d)
                },
                p = "booking.com",
                f = O(m.PRODUCTION),
                v = O(m.STAGING),
                g = O(m.KVM),
                h = O(m.DQS),
                _ = new RegExp("^(.*?)\\.?(" + p + "|booking.cn)$"),
                b = new RegExp("^(?:" + v.join("|") + ")(\\d+)$"),
                y = new RegExp("^(\\w+)-(" + g.join("|") + ").*?\\.dev$"),
                k = new RegExp("(?:" + h.join("|") + ")\\.dqs$");

            function O(e) {
                return Object.values(e).flat()
            }

            function S(e, t) {
                var n = new Set;
                null == t || t.forEach((function(t, r) {
                    n.has(r) ? e.append(r, t) : (e.set(r, t), n.add(r))
                }))
            }

            function E(e) {
                return Array.isArray(e) ? e[0] : e
            }

            function I(e) {
                return function() {
                    var e = (0, a.T)(),
                        t = e.getBasePageUrl();
                    if (!t) throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                    var n = function(e, t, n, r) {
                        var i = new URLSearchParams,
                            a = t && u.hasOwnProperty(t) ? t : "DEFAULT";
                        return u[a].forEach((function(t) {
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
                                var n = e.host.match(_);
                                if (!n) return e;
                                var r = n[1],
                                    i = n[2];
                                if ("" === r || f.includes(r)) {
                                    var a = E(m.PRODUCTION[t]);
                                    e.host = a + "." + i
                                } else if (y.test(r)) {
                                    var o = E(m.KVM[t]);
                                    e.host = r.replace(y, "$1-" + o + ".dev." + p)
                                } else if (k.test(r)) {
                                    var s = E(m.DQS[t]);
                                    e.host = s + ".dqs." + p
                                } else if (b.test(r)) {
                                    var l = E(m.STAGING[t]);
                                    e.host = r.replace(b, l + "$1." + p)
                                }
                                return e
                            }(i, r.host) : i;
                        return r.pathname && (a.pathname = r.pathname), a.hash = r.hash || "", e.isRobotRequest() || (S(a.searchParams, n), S(a.searchParams, r.searchParams)), a
                    }
                }()(e)
            }
        },
        39777: function(e, t, n) {
            "use strict";
            n.d(t, {
                p6: function() {
                    return j
                }
            });
            var r = n(31191),
                i = n(24094);

            function a(e, t, n) {
                void 0 === t && (t = 2), void 0 === n && (n = "0");
                for (var r = (e || "").toString(), i = r.length; i < t;) r = n + r, i++;
                return r
            }

            function o(e) {
                return e instanceof Date && !isNaN(e.getTime())
            }

            function s(e) {
                return {
                    dayOfMonth: e.getDate(),
                    day: (t = e.getDay(), 0 === t ? 7 : t),
                    month: e.getMonth() + 1,
                    year: e.getFullYear(),
                    hours: e.getHours(),
                    minutes: e.getMinutes(),
                    seconds: e.getSeconds()
                };
                var t
            }

            function l(e) {
                return void 0 === e && (e = {}), Object.keys(e).reduce((function(t, n) {
                    var r = e[n];
                    return null !== r && "undefined" !== typeof r && ("string" === typeof r ? t[n] = r : "number" !== typeof r || isNaN(r) || (t[n] = r.toString(10))), t
                }), {})
            }

            function c(e, t) {
                var n;
                if (!e) throw new Error("No i18n object provided");
                var c = function(e) {
                        var t = o(e) ? e : new Date("2019-01-01T" + e);
                        if (o(t)) {
                            var n = s(t);
                            return {
                                hour: n.hours,
                                minutes: n.minutes,
                                seconds: n.seconds
                            }
                        }
                        throw new Error("formatting/time: invalid time provided \u2014 " + e)
                    }(t.time),
                    d = (c.hour < 12 ? "AM" : "PM") + "_symbol",
                    u = (0, r.pi)({
                        AM_PM: e.trans((0, i.t)("time_format", d, "name", {
                            variables: {}
                        }))
                    }, function(e, t) {
                        var n = e.hour,
                            r = t ? n : e.hour,
                            i = 0 === e.hour || 12 === e.hour ? 12 : e.hour % 12;
                        return l({
                            hour_24h_no0: e.hour,
                            hour_24h: a(e.hour),
                            hour_24h_show24: a(n),
                            hour_24h_until24: a(r),
                            hour_12h: a(i),
                            minutes_no0: e.minutes,
                            minutes: a(e.minutes),
                            hour_12h_no0: i,
                            hour_24h_show24_no0: n,
                            hour_24h_until24_no0: r
                        })
                    }(c, null !== (n = t.until) && void 0 !== n && n));
                return e.trans((0, i.t)("time_format", "time", "name", {
                    variables: u
                }))
            }(0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "name"));
            var d = "name";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "genitive_lc"));
            var u = "genitive_lc";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "genitive_uc"));
            var m = "genitive_uc";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "name_only"));
            var p = "name_only";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "name_in"));
            var f = "name_in";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "name_from"));
            var v = "name_from";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "name_to"));
            var g = "name_to";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "name_def_article_lc"));
            var h = "name_def_article_lc";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "in_month_lc"));
            var _ = "in_month_lc";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "name_lc"));
            var b = "name_lc";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "to_month_lc"));
            var y = "to_month_lc";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "short_name"));
            var k = "short_name";
            (0, i.qQ)((0, i.t)("month_for_formatted_date", "fakeIndex", "short_name_uc"));
            var O = "short_name_uc",
                S = n(82621);
            (0, i.qQ)((0, i.t)("weekday_formatted_date", "fakeIndex", "name_on"));
            var E = "name_on";
            (0, i.qQ)((0, i.t)("weekday_formatted_date", "fakeIndex", "name_from"));
            var I = "name_from";
            (0, i.qQ)((0, i.t)("weekday_formatted_date", "fakeIndex", "name_to"));
            var x = "name_to";
            (0, i.qQ)((0, i.t)("weekday_formatted_date", "fakeIndex", "short"));
            var N = "short";
            (0, i.qQ)((0, i.t)("day_for_formatted_date", "fakeIndex", "day_from"));
            var P = "day_from";
            (0, i.qQ)((0, i.t)("day_for_formatted_date", "fakeIndex", "day_on"));
            var w = "day_on";
            (0, i.qQ)((0, i.t)("day_for_formatted_date", "fakeIndex", "day_other"));
            var C = "day_other";
            (0, i.qQ)((0, i.t)("day_for_formatted_date", "fakeIndex", "day_until"));
            var R = "day_until";
            (0, i.qQ)((0, i.t)("day_for_formatted_date", "fakeIndex", "name"));
            var D = "name";
            (0, i.qQ)((0, i.t)("day_for_formatted_date", "fakeIndex", "day_1"));
            var L = "day_1";
            (0, i.qQ)((0, i.t)("day_for_formatted_date", "fakeIndex", "day_2"));
            var A = "day_2";

            function T(e) {
                var t = (0, r.CR)(/^(\d{2}):(\d{2})(:(\d{2}))?/.exec(e) || [], 5),
                    n = t[1],
                    i = t[2],
                    o = t[4],
                    s = void 0 === o ? "0" : o;
                return new Date("2020-01-01T" + a(n) + ":" + a(i) + ":" + a(s))
            }

            function F(e) {
                var t = (0, r.CR)(e.split(/[\sT]/), 2),
                    n = t[0],
                    i = t[1];
                if (n || i) {
                    var o = new Date;
                    if (n && (o = function(e) {
                            var t = (0, r.CR)(/^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(e) || [], 4),
                                n = t[1],
                                i = t[2],
                                o = t[3];
                            return new Date(n + "-" + a(i) + "-" + a(o) + "T00:00")
                        }(n)), i) {
                        var l = T(i),
                            c = s(o),
                            d = c.year,
                            u = c.month,
                            m = c.dayOfMonth,
                            p = s(l),
                            f = p.hours,
                            v = p.minutes,
                            g = p.seconds;
                        o = new Date(d, u - 1, m, f, v, g)
                    }
                    return o
                }
                return null
            }

            function M(e, t) {
                var n = o(e) ? e : F(e),
                    r = t ? o(t) ? t : T(t) : void 0;
                if (!n) throw new Error("No date provided \u2014 '" + e + "' '" + t + "'");
                if (o(r) && o(e)) {
                    var i = s(e),
                        a = i.year,
                        l = i.month,
                        c = i.dayOfMonth,
                        d = s(r),
                        u = d.hours,
                        m = d.minutes,
                        p = d.seconds;
                    n = new Date(a, l - 1, c, u, m, p)
                }
                if (!o(n)) throw new Error("invalid date provided \u2014 '" + e + "' '" + t + "'");
                return n
            }

            function B(e, t, n, r, a) {
                return void 0 === a && (a = {}), Object.keys(a).reduce((function(o, s) {
                    return o[s + t] = e.trans((0, i.t)(n, r.toString(), a[s])), o
                }), {})
            }

            function V(e, t, n) {
                var o, l;
                void 0 === n && (n = "");
                var T = s(t),
                    F = T.month,
                    M = T.year,
                    V = T.dayOfMonth,
                    j = T.day,
                    U = F.toString(),
                    Z = (0, r.pi)((0, r.pi)((0, r.pi)(((o = {})["full_year" + n] = M.toString(), o["month" + n] = U, o["day_of_month" + n] = V.toString(), o["month_name_with_year_only" + n] = e.trans((0, i.t)("month_for_formatted_date", U, "name_with_year_only")), o["time" + n] = c(e, {
                        time: t
                    }), o), B(e, n, "day_for_formatted_date", V, {
                        day_name_from: P,
                        day_name_on: w,
                        day_name_other: C,
                        day_name_till: R,
                        day_name_1: D,
                        day_other: C,
                        day_name: D,
                        day_1: L,
                        day_of_month: D,
                        day_2: A
                    })), B(e, n, "month_for_formatted_date", F, {
                        month_1: d,
                        month_2: d,
                        month_name_1: d,
                        month_name_2: d,
                        month_name: d,
                        month_name_genitive_lc: u,
                        month_name_genitive_uc: m,
                        month_name_nom: p,
                        month_name_in: f,
                        month_name_from: v,
                        month_name_to: g,
                        month_genitive_uc: m,
                        month_name_def_article_lc: h,
                        month_name_genitive: u,
                        month_name_in_lc: _,
                        month_name_lc: b,
                        month_name_to_lc: y,
                        month_name_with_year_only: p,
                        short_month_name: k,
                        short_month_name_uc: O
                    })), B(e, n, "weekday_formatted_date", j, {
                        weekday: S.Z,
                        weekday_nom: E,
                        weekday_from: I,
                        weekday_to: x,
                        short_weekday: N
                    }));
                return (0, r.pi)(((l = {})["year" + n] = Z.full_year, l["day_name_0" + n] = a(Z.day_of_month), l["day_name_1" + n] = Z.day_of_month, l["month_name_0" + n] = a(Z.month), l["month_name_1" + n] = Z.month, l["day_name_from_0" + n] = a(Z["day_name_from" + n]), l["day_name_on_0" + n] = a(Z["day_name_on" + n]), l["day_name_other_0" + n] = a(Z["day_name_other" + n]), l["day_name_till_0" + n] = a(Z["day_name_till" + n]), l), Z)
            }

            function j(e, t) {
                if (!e) throw new Error("No i18n object provided");
                var n = t.time,
                    a = t.timeUntil,
                    o = t.beginMarker,
                    s = void 0 === o ? "(" : o,
                    d = t.endMarker,
                    u = void 0 === d ? ")" : d,
                    m = t.form,
                    p = t.date,
                    f = t.dateUntil,
                    v = (0, r.pi)({
                        begin_marker: s,
                        end_marker: u
                    }, V(e, M(p, n)));
                return f && (v = (0, r.pi)((0, r.pi)({}, v), V(e, M(f, a), "_until"))), n && (v.time = c(e, {
                    time: n
                })), a && (v.time_until = c(e, {
                    time: a
                })), m ? e.trans((0, i.t)("date_format", "1", m, {
                    variables: l(v)
                })) : e.trans((0, i.t)("date_format", "1", "short_date", {
                    variables: l(v)
                }))
            }
        },
        82621: function(e, t, n) {
            "use strict";
            var r = n(24094);
            (0, r.qQ)((0, r.t)("weekday_formatted_date", "fakeIndex", "name")), t.Z = "name"
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
                                for (var s in n) r.call(n, s) && n[s] && e.push(s)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                    return i
                }.apply(t, [])) || (e.exports = n)
            }()
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

            function a(e, t) {
                return a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, a(e, t)
            }
            var o = new Map,
                s = new WeakMap,
                l = 0,
                c = void 0;

            function d(e) {
                return Object.keys(e).sort().filter((function(t) {
                    return void 0 !== e[t]
                })).map((function(t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (s.has(n) || (l += 1, s.set(n, l.toString())), s.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function u(e, t, n, r) {
                if (void 0 === n && (n = {}), void 0 === r && (r = c), "undefined" === typeof window.IntersectionObserver && void 0 !== r) {
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
                var a = function(e) {
                        var t = d(e),
                            n = o.get(t);
                        if (!n) {
                            var r, i = new Map,
                                a = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        var n, a = t.isIntersecting && r.some((function(e) {
                                            return t.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = a), null == (n = i.get(t.target)) || n.forEach((function(e) {
                                            e(a, t)
                                        }))
                                    }))
                                }), e);
                            r = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                id: t,
                                observer: a,
                                elements: i
                            }, o.set(t, n)
                        }
                        return n
                    }(n),
                    s = a.id,
                    l = a.observer,
                    u = a.elements,
                    m = u.get(e) || [];
                return u.has(e) || u.set(e, m), m.push(t), l.observe(e),
                    function() {
                        m.splice(m.indexOf(t), 1), 0 === m.length && (u.delete(e), l.unobserve(e)), 0 === u.size && (l.disconnect(), o.delete(s))
                    }
            }
            var m = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function p(e) {
                return "function" !== typeof e.children
            }
            var f = function(e) {
                var t, n;

                function o(t) {
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
                n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, a(t, n);
                var s = o.prototype;
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
                            a = e.delay,
                            o = e.fallbackInView;
                        this._unobserveCb = u(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r,
                            trackVisibility: i,
                            delay: a
                        }, o)
                    }
                }, s.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, s.render = function() {
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
                    var a = this.props,
                        o = a.children,
                        s = a.as,
                        l = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(a, m);
                    return r.createElement(s || "div", i({
                        ref: this.handleNode
                    }, l), o)
                }, o
            }(r.Component);

            function v(e) {
                var t = void 0 === e ? {} : e,
                    n = t.threshold,
                    i = t.delay,
                    a = t.trackVisibility,
                    o = t.rootMargin,
                    s = t.root,
                    l = t.triggerOnce,
                    c = t.skip,
                    d = t.initialInView,
                    m = t.fallbackInView,
                    p = r.useRef(),
                    f = r.useState({
                        inView: !!d
                    }),
                    v = f[0],
                    g = f[1],
                    h = r.useCallback((function(e) {
                        void 0 !== p.current && (p.current(), p.current = void 0), c || e && (p.current = u(e, (function(e, t) {
                            g({
                                inView: e,
                                entry: t
                            }), t.isIntersecting && l && p.current && (p.current(), p.current = void 0)
                        }), {
                            root: s,
                            rootMargin: o,
                            threshold: n,
                            trackVisibility: a,
                            delay: i
                        }, m))
                    }), [Array.isArray(n) ? n.toString() : n, s, o, l, c, a, m, i]);
                (0, r.useEffect)((function() {
                    p.current || !v.entry || l || c || g({
                        inView: !!d
                    })
                }));
                var _ = [h, v.inView, v.entry];
                return _.ref = _[0], _.inView = _[1], _.entry = _[2], _
            }
            f.displayName = "InView", f.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
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
//# sourceMappingURL=https://s3-main-01.booking.com/internal-static/capla/static/js/186.d0ec75b4.chunk.js.map