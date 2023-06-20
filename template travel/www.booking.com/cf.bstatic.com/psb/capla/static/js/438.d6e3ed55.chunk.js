/*! For license information please see 438.d6e3ed55.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe"] = self["b-index-lp-web-mfe"] || []).push([
    [438], {
        59006: function(E, _, N) {
            "use strict";
            N.d(_, {
                V: function() {
                    return e
                }
            });
            var O = N(66022),
                A = N(82497),
                t = N(14222),
                e = function() {
                    function E(E, _) {
                        this.isMounted = !1, this.previousOptions = {}, this.context = {}, this.options = {}, this.options = E || {}, this.context = _ || {}
                    }
                    return E.prototype.getOptions = function() {
                        return this.options
                    }, E.prototype.setOptions = function(E, _) {
                        void 0 === _ && (_ = !1), _ && !(0, A.D)(this.options, E) && (this.previousOptions = this.options), this.options = E
                    }, E.prototype.unmount = function() {
                        this.isMounted = !1
                    }, E.prototype.refreshClient = function() {
                        var E = this.options && this.options.client || this.context && this.context.client;
                        __DEV__ ? (0, O.kG)(!!E, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : (0, O.kG)(!!E, 29);
                        var _ = !1;
                        return E !== this.client && (_ = !0, this.client = E, this.cleanup()), {
                            client: this.client,
                            isNew: _
                        }
                    }, E.prototype.verifyDocumentType = function(E, _) {
                        var N = (0, t.E2)(E),
                            A = (0, t.mw)(_),
                            e = (0, t.mw)(N.type);
                        __DEV__ ? (0, O.kG)(N.type === _, "Running a " + A + " requires a graphql " + A + ", but a " + e + " was used instead.") : (0, O.kG)(N.type === _, 30)
                    }, E
                }()
        },
        13260: function(E, _, N) {
            "use strict";
            N.d(_, {
                a: function() {
                    return A
                }
            });
            var O = N(51099);

            function A(E, _) {
                return (0, O.r)(E, _, !1)
            }
        },
        51099: function(E, _, N) {
            "use strict";
            N.d(_, {
                r: function() {
                    return i
                }
            });
            var O = N(31191),
                A = (N(66022), N(32735)),
                t = N(82497),
                e = N(24605),
                T = N(6637),
                n = N(14222),
                I = function(E) {
                    function _(_) {
                        var N = _.options,
                            O = _.context,
                            A = _.onNewData,
                            t = E.call(this, N, O) || this;
                        return t.runLazy = !1, t.previous = Object.create(null), t.runLazyQuery = function(E) {
                            t.cleanup(), t.runLazy = !0, t.lazyOptions = E, t.onNewData()
                        }, t.obsRefetch = function(E) {
                            var _;
                            return null === (_ = t.currentObservable) || void 0 === _ ? void 0 : _.refetch(E)
                        }, t.obsFetchMore = function(E) {
                            var _;
                            return null === (_ = t.currentObservable) || void 0 === _ ? void 0 : _.fetchMore(E)
                        }, t.obsUpdateQuery = function(E) {
                            var _;
                            return null === (_ = t.currentObservable) || void 0 === _ ? void 0 : _.updateQuery(E)
                        }, t.obsStartPolling = function(E) {
                            var _;
                            null === (_ = t.currentObservable) || void 0 === _ || _.startPolling(E)
                        }, t.obsStopPolling = function() {
                            var E;
                            null === (E = t.currentObservable) || void 0 === E || E.stopPolling()
                        }, t.obsSubscribeToMore = function(E) {
                            var _;
                            return null === (_ = t.currentObservable) || void 0 === _ ? void 0 : _.subscribeToMore(E)
                        }, t.onNewData = A, t
                    }
                    return (0, O.ZT)(_, E), _.prototype.execute = function() {
                        this.refreshClient();
                        var E = this.getOptions(),
                            _ = E.skip,
                            N = E.query;
                        return (_ || N !== this.previous.query) && (this.removeQuerySubscription(), this.removeObservable(!_), this.previous.query = N), this.updateObservableQuery(), this.getExecuteSsrResult() || this.getExecuteResult()
                    }, _.prototype.executeLazy = function() {
                        return this.runLazy ? [this.runLazyQuery, this.execute()] : [this.runLazyQuery, {
                            loading: !1,
                            networkStatus: T.I.ready,
                            called: !1,
                            data: void 0
                        }]
                    }, _.prototype.fetchData = function() {
                        var E = this,
                            _ = this.getOptions();
                        return !_.skip && !1 !== _.ssr && new Promise((function(_) {
                            return E.startQuerySubscription(_)
                        }))
                    }, _.prototype.afterExecute = function(E) {
                        var _ = (void 0 === E ? {} : E).lazy,
                            N = void 0 !== _ && _;
                        this.isMounted = !0;
                        var O = this.getOptions();
                        return this.currentObservable && !this.ssrInitiated() && this.startQuerySubscription(), N && !this.runLazy || this.handleErrorOrCompleted(), this.previousOptions = O, this.unmount.bind(this)
                    }, _.prototype.cleanup = function() {
                        this.removeQuerySubscription(), this.removeObservable(!0), delete this.previous.result
                    }, _.prototype.getOptions = function() {
                        var _ = E.prototype.getOptions.call(this);
                        return this.lazyOptions && (_.variables = (0, O.pi)((0, O.pi)({}, _.variables), this.lazyOptions.variables), _.context = (0, O.pi)((0, O.pi)({}, _.context), this.lazyOptions.context)), this.runLazy && delete _.skip, _
                    }, _.prototype.ssrInitiated = function() {
                        return this.context && this.context.renderPromises
                    }, _.prototype.getExecuteSsrResult = function() {
                        var E = this.getOptions(),
                            _ = E.ssr,
                            N = E.skip,
                            A = !1 === _,
                            t = this.refreshClient().client.disableNetworkFetches,
                            e = (0, O.pi)({
                                loading: !0,
                                networkStatus: T.I.loading,
                                called: !0,
                                data: void 0,
                                stale: !1,
                                client: this.client
                            }, this.observableQueryFields());
                        if (A && (this.ssrInitiated() || t)) return this.previous.result = e, e;
                        if (this.ssrInitiated()) {
                            var n = this.getExecuteResult() || e;
                            return n.loading && !N && this.context.renderPromises.addQueryPromise(this, (function() {
                                return null
                            })), n
                        }
                    }, _.prototype.prepareObservableQueryOptions = function() {
                        var E = this.getOptions();
                        this.verifyDocumentType(E.query, n.n_.Query);
                        var _ = E.displayName || "Query";
                        return !this.ssrInitiated() || "network-only" !== E.fetchPolicy && "cache-and-network" !== E.fetchPolicy || (E.fetchPolicy = "cache-first"), (0, O.pi)((0, O.pi)({}, E), {
                            displayName: _,
                            context: E.context
                        })
                    }, _.prototype.initializeObservableQuery = function() {
                        if (this.ssrInitiated() && (this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions())), !this.currentObservable) {
                            var E = this.prepareObservableQueryOptions();
                            this.previous.observableQueryOptions = (0, O.pi)((0, O.pi)({}, E), {
                                children: void 0
                            }), this.currentObservable = this.refreshClient().client.watchQuery((0, O.pi)({}, E)), this.ssrInitiated() && this.context.renderPromises.registerSSRObservable(this.currentObservable, E)
                        }
                    }, _.prototype.updateObservableQuery = function() {
                        if (this.currentObservable) {
                            var E = (0, O.pi)((0, O.pi)({}, this.prepareObservableQueryOptions()), {
                                children: void 0
                            });
                            this.getOptions().skip ? this.previous.observableQueryOptions = E : (0, t.D)(E, this.previous.observableQueryOptions) || (this.previous.observableQueryOptions = E, this.currentObservable.setOptions(E).catch((function() {})))
                        } else this.initializeObservableQuery()
                    }, _.prototype.startQuerySubscription = function(E) {
                        var _ = this;
                        void 0 === E && (E = this.onNewData), this.currentSubscription || this.getOptions().skip || (this.currentSubscription = this.currentObservable.subscribe({
                            next: function(N) {
                                var O = N.loading,
                                    A = N.networkStatus,
                                    e = N.data,
                                    T = _.previous.result;
                                T && T.loading === O && T.networkStatus === A && (0, t.D)(T.data, e) || E()
                            },
                            error: function(N) {
                                if (_.resubscribeToQuery(), !N.hasOwnProperty("graphQLErrors")) throw N;
                                var O = _.previous.result;
                                (O && O.loading || !(0, t.D)(N, _.previous.error)) && (_.previous.error = N, E())
                            }
                        }))
                    }, _.prototype.resubscribeToQuery = function() {
                        this.removeQuerySubscription();
                        var E = this.currentObservable;
                        if (E) {
                            var _ = E.last;
                            try {
                                E.resetLastResults(), this.startQuerySubscription()
                            } finally {
                                E.last = _
                            }
                        }
                    }, _.prototype.getExecuteResult = function() {
                        var E = this.observableQueryFields(),
                            _ = this.getOptions();
                        if (_.skip) E = (0, O.pi)((0, O.pi)({}, E), {
                            data: void 0,
                            error: void 0,
                            loading: !1,
                            networkStatus: T.I.ready,
                            called: !0
                        });
                        else if (this.currentObservable) {
                            var N = this.currentObservable.getCurrentResult(),
                                A = N.data,
                                t = N.loading,
                                n = N.partial,
                                I = N.networkStatus,
                                R = N.errors,
                                i = N.error;
                            if (R && R.length > 0 && (i = new e.c({
                                    graphQLErrors: R
                                })), E = (0, O.pi)((0, O.pi)({}, E), {
                                    data: A,
                                    loading: t,
                                    networkStatus: I,
                                    error: i,
                                    called: !0
                                }), t);
                            else if (i) Object.assign(E, {
                                data: (this.currentObservable.getLastResult() || {}).data
                            });
                            else {
                                var r = this.currentObservable.options.fetchPolicy;
                                if (_.partialRefetch && n && (!A || 0 === Object.keys(A).length) && "cache-only" !== r) return Object.assign(E, {
                                    loading: !0,
                                    networkStatus: T.I.loading
                                }), E.refetch(), E
                            }
                        }
                        E.client = this.client, this.setOptions(_, !0);
                        var S = this.previous.result;
                        return this.previous.loading = S && S.loading || !1, E.previousData = S && (S.data || S.previousData), this.previous.result = E, this.currentObservable && this.currentObservable.resetQueryStoreErrors(), E
                    }, _.prototype.handleErrorOrCompleted = function() {
                        if (this.currentObservable && this.previous.result) {
                            var E = this.previous.result,
                                _ = E.data,
                                N = E.loading,
                                O = E.error;
                            if (!N) {
                                var A = this.getOptions(),
                                    e = A.query,
                                    T = A.variables,
                                    n = A.onCompleted,
                                    I = A.onError,
                                    R = A.skip;
                                if (this.previousOptions && !this.previous.loading && (0, t.D)(this.previousOptions.query, e) && (0, t.D)(this.previousOptions.variables, T)) return;
                                !n || O || R ? I && O && I(O) : n(_)
                            }
                        }
                    }, _.prototype.removeQuerySubscription = function() {
                        this.currentSubscription && (this.currentSubscription.unsubscribe(), delete this.currentSubscription)
                    }, _.prototype.removeObservable = function(E) {
                        this.currentObservable && (this.currentObservable.tearDownQuery(), E && delete this.currentObservable)
                    }, _.prototype.observableQueryFields = function() {
                        var E;
                        return {
                            variables: null === (E = this.currentObservable) || void 0 === E ? void 0 : E.variables,
                            refetch: this.obsRefetch,
                            fetchMore: this.obsFetchMore,
                            updateQuery: this.obsUpdateQuery,
                            startPolling: this.obsStartPolling,
                            stopPolling: this.obsStopPolling,
                            subscribeToMore: this.obsSubscribeToMore
                        }
                    }, _
                }(N(59006).V);
            var R = N(55261);

            function i(E, _, N) {
                void 0 === N && (N = !1);
                var e = (0, A.useContext)((0, R.K)()),
                    T = (0, A.useReducer)((function(E) {
                        return E + 1
                    }), 0),
                    n = T[0],
                    i = T[1],
                    r = _ ? (0, O.pi)((0, O.pi)({}, _), {
                        query: E
                    }) : {
                        query: E
                    },
                    S = (0, A.useRef)(),
                    o = S.current || (S.current = new I({
                        options: r,
                        context: e,
                        onNewData: function() {
                            o.ssrInitiated() ? i() : Promise.resolve().then((function() {
                                return S.current && S.current.isMounted && i()
                            }))
                        }
                    }));
                o.setOptions(r), o.context = e;
                var L = function(E, _) {
                        var N = (0, A.useRef)();
                        return N.current && (0, t.D)(_, N.current.key) || (N.current = {
                            key: _,
                            value: E()
                        }), N.current.value
                    }((function() {
                        return N ? o.executeLazy() : o.execute()
                    }), {
                        options: (0, O.pi)((0, O.pi)({}, r), {
                            onError: void 0,
                            onCompleted: void 0
                        }),
                        context: e,
                        tick: n
                    }),
                    D = N ? L[1] : L;
                return __DEV__ && function(E) {
                    if (__DEV__) {
                        var _ = (0, A.useRef)(!1);
                        (0, A.useEffect)((function() {
                            return function() {
                                _.current = !0
                            }
                        }), []), (0, A.useEffect)((function() {
                            !0 === _.current && (_.current = !1, E())
                        }), [])
                    }
                }(i), (0, A.useEffect)((function() {
                    return function() {
                        o.cleanup(), S.current = void 0
                    }
                }), []), (0, A.useEffect)((function() {
                    return o.afterExecute({
                        lazy: N
                    })
                }), [D.loading, D.networkStatus, D.error, D.data, o.currentObservable]), L
            }
        },
        14222: function(E, _, N) {
            "use strict";
            N.d(_, {
                E2: function() {
                    return T
                },
                mw: function() {
                    return e
                },
                n_: function() {
                    return O
                }
            });
            var O, A = N(66022);
            ! function(E) {
                E[E.Query = 0] = "Query", E[E.Mutation = 1] = "Mutation", E[E.Subscription = 2] = "Subscription"
            }(O || (O = {}));
            var t = new Map;

            function e(E) {
                var _;
                switch (E) {
                    case O.Query:
                        _ = "Query";
                        break;
                    case O.Mutation:
                        _ = "Mutation";
                        break;
                    case O.Subscription:
                        _ = "Subscription"
                }
                return _
            }

            function T(E) {
                var _, N, e = t.get(E);
                if (e) return e;
                __DEV__ ? (0, A.kG)(!!E && !!E.kind, "Argument of " + E + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, A.kG)(!!E && !!E.kind, 34);
                var T = E.definitions.filter((function(E) {
                        return "FragmentDefinition" === E.kind
                    })),
                    n = E.definitions.filter((function(E) {
                        return "OperationDefinition" === E.kind && "query" === E.operation
                    })),
                    I = E.definitions.filter((function(E) {
                        return "OperationDefinition" === E.kind && "mutation" === E.operation
                    })),
                    R = E.definitions.filter((function(E) {
                        return "OperationDefinition" === E.kind && "subscription" === E.operation
                    }));
                __DEV__ ? (0, A.kG)(!T.length || n.length || I.length || R.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, A.kG)(!T.length || n.length || I.length || R.length, 35), __DEV__ ? (0, A.kG)(n.length + I.length + R.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + E + " had " + n.length + " queries, " + R.length + " subscriptions and " + I.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0, A.kG)(n.length + I.length + R.length <= 1, 36), N = n.length ? O.Query : O.Mutation, n.length || I.length || (N = O.Subscription);
                var i = n.length ? n : I.length ? I : R;
                __DEV__ ? (0, A.kG)(1 === i.length, "react-apollo only supports one definition per HOC. " + E + " had " + i.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0, A.kG)(1 === i.length, 37);
                var r = i[0];
                _ = r.variableDefinitions || [];
                var S = {
                    name: r.name && "Name" === r.name.kind ? r.name.value : "data",
                    type: N,
                    variables: _
                };
                return t.set(E, S), S
            }
        },
        21141: function(E, _, N) {
            "use strict";
            var O = N(60633);
            _.Z = O.Z
        },
        47354: function(E, _, N) {
            "use strict";
            N.d(_, {
                Z: function() {
                    return R
                }
            });
            var O = N(32735),
                A = N(92577),
                t = N(72594),
                e = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,
                T = /(?:\r\n|\r|\n)/g;

            function n(E, _) {
                var N = E.replace(T, "").split(e);
                if (1 === N.length) return E;
                var R = [],
                    i = N.shift();
                i && R.push(i);
                for (var r = 0, S = 0, o = I(N); S < o.length; S++) {
                    var L = (0, A.Z)(o[S], 3),
                        D = L[0],
                        C = L[1],
                        u = L[2];
                    if (_ && _[D]) {
                        r += 1;
                        var P = _[D];
                        if ((0, t.isElement)(P)) R.push((0, O.cloneElement)(P, {
                            key: r
                        }, C ? n(C, _) : P.props.children));
                        else {
                            if (!(0, t.isValidElementType)(P)) {
                                R.push("\ud83d\udca2");
                                continue
                            }
                            R.push((0, O.createElement)(P, {
                                key: r
                            }, C && n(C, _)))
                        }
                    } else R.push("\ud83d\udca2");
                    u && R.push(u)
                }
                return R
            }

            function I(E) {
                if (!E.length) return [];
                var _ = E.slice(0, 4),
                    N = (0, A.Z)(_, 4),
                    O = N[0],
                    t = N[1],
                    e = N[2],
                    T = N[3];
                return [
                    [parseInt(O || e, 10), t || "", T]
                ].concat(I(E.slice(4, E.length)))
            }
            var R = function(E) {
                var _ = E.text,
                    N = E.variables,
                    A = E.components,
                    t = function(E, _) {
                        if (!_) return E;
                        return Object.keys(_).reduce((function(E, N) {
                            return E.split("[".concat(N, "]")).join(_[N] + "")
                        }), E)
                    }(_, N);
                return O.createElement(O.Fragment, null, n(t, A))
            }
        },
        46447: function(E, _, N) {
            "use strict";
            var O, A, t, e, T, n, I, R, i, r, S, o, L, D, C, u, P, a, s, c, U, M, l, f, G, F, p, H, Y, B, d, V, K, v, h, b, W, g, m, y, k, X, w, Q, Z, j, x, J, q, z, $, EE, _E, NE, OE, AE, tE, eE, TE, nE, IE, RE, iE, rE, SE, oE, LE, DE, CE, uE, PE, aE, sE, cE, UE, ME, lE, fE, GE, FE, pE, HE, YE, BE, dE, VE, KE, vE, hE, bE, WE, gE, mE, yE, kE, XE, wE, QE, ZE, jE, xE, JE, qE, zE, $E, E_, __, N_, O_, A_, t_, e_, T_, n_, I_, R_, i_, r_, S_, o_, L_, D_, C_, u_, P_, a_, s_, c_, U_, M_, l_, f_, G_, F_, p_, H_, Y_, B_, d_, V_, K_, v_, h_, b_, W_, g_, m_, y_, k_, X_, w_, Q_, Z_, j_, x_, J_, q_, z_, $_, EN, _N, NN, ON, AN, tN, eN, TN, nN, IN, RN, iN, rN, SN, oN, LN, DN, CN, uN, PN, aN, sN, cN, UN, MN, lN, fN, GN, FN, pN, HN, YN, BN, dN, VN, KN, vN, hN, bN, WN, gN, mN, yN, kN, XN, wN, QN, ZN, jN, xN, JN, qN, zN, $N, EO, _O, NO, OO, AO, tO, eO, TO, nO, IO, RO, iO, rO, SO, oO, LO, DO, CO, uO, PO, aO, sO, cO, UO, MO, lO, fO, GO, FO, pO, HO, YO, BO, dO, VO, KO, vO, hO, bO, WO, gO, mO, yO, kO, XO, wO, QO, ZO, jO, xO, JO, qO, zO, $O, EA, _A, NA, OA, AA, tA, eA, TA, nA, IA, RA, iA, rA, SA, oA, LA, DA, CA, uA, PA, aA, sA, cA, UA, MA, lA, fA, GA, FA, pA, HA, YA, BA, dA, VA, KA, vA, hA, bA, WA, gA, mA, yA, kA, XA, wA, QA, ZA, jA, xA, JA;
            N.d(_, {
                    afO: function() {
                        return eN
                    },
                    xsH: function() {
                        return AO
                    }
                }),
                function(E) {
                    E.READ_ONLY = "READ_ONLY", E.READ_WRITE = "READ_WRITE"
                }(O || (O = {})),
                function(E) {
                    E.APARTHOTEL = "APARTHOTEL", E.APARTMENT = "APARTMENT", E.BED_AND_BREAKFAST = "BED_AND_BREAKFAST", E.BOAT = "BOAT", E.CAMPING = "CAMPING", E.CAPSULE_HOTEL = "CAPSULE_HOTEL", E.CHALET = "CHALET", E.CONDO = "CONDO", E.COTTAGE = "COTTAGE", E.COUNTRY_HOUSE = "COUNTRY_HOUSE", E.CRUISE = "CRUISE", E.FARM_STAY = "FARM_STAY", E.GITE = "GITE", E.GUEST_ACCOMMODATION = "GUEST_ACCOMMODATION", E.GUEST_HOUSE = "GUEST_HOUSE", E.HOLIDAY_HOME = "HOLIDAY_HOME", E.HOLIDAY_PARK = "HOLIDAY_PARK", E.HOMESTAY = "HOMESTAY", E.HOSTEL = "HOSTEL", E.HOTEL = "HOTEL", E.INN = "INN", E.JAPANESE_STYLE_BUSINESS_HOTEL = "JAPANESE_STYLE_BUSINESS_HOTEL", E.LODGE = "LODGE", E.LOVE_HOTEL = "LOVE_HOTEL", E.MOTEL = "MOTEL", E.NO_ACCOMMODATION_TYPE = "NO_ACCOMMODATION_TYPE", E.RESIDENCE = "RESIDENCE", E.RESORT = "RESORT", E.RIAD = "RIAD", E.RYOKAN = "RYOKAN", E.SANATORIUM = "SANATORIUM", E.STUDENT_ACCOMMODATION = "STUDENT_ACCOMMODATION", E.TENTED_CAMP = "TENTED_CAMP", E.UNCERTAIN = "UNCERTAIN", E.VILLA = "VILLA"
                }(A || (A = {})),
                function(E) {
                    E.BRONZE = "BRONZE", E.GOLD = "GOLD", E.SILVER = "SILVER", E.UNKNOWN = "UNKNOWN"
                }(t || (t = {})),
                function(E) {
                    E.EXTRA_INFO_REQUIRED = "EXTRA_INFO_REQUIRED", E.NOT_REGISTERED = "NOT_REGISTERED", E.PENDING = "PENDING", E.RESTRICTED_SOON = "RESTRICTED_SOON", E.UNEXPECTED_STATE = "UNEXPECTED_STATE", E.VERIFICATION_FAILED = "VERIFICATION_FAILED", E.VERIFIED_ENABLED = "VERIFIED_ENABLED"
                }(e || (e = {})),
                function(E) {
                    E.CALLOUT = "CALLOUT", E.ERROR = "ERROR"
                }(T || (T = {})),
                function(E) {
                    E.CHANGE_PAYMENT_INSTRUMENT = "CHANGE_PAYMENT_INSTRUMENT", E.PAY_NOW = "PAY_NOW"
                }(n || (n = {})),
                function(E) {
                    E.GUEST = "GUEST", E.PARTNER = "PARTNER"
                }(I || (I = {})),
                function(E) {
                    E.AFFNET = "AFFNET", E.AIRLINE = "AIRLINE", E.BIZDEV = "BIZDEV", E.CHANNEL_DEAD = "CHANNEL_DEAD", E.CHANNEL_DIRECT = "CHANNEL_DIRECT", E.CHANNEL_PAID = "CHANNEL_PAID", E.CHANNEL_PAID_BRAND = "CHANNEL_PAID_BRAND", E.CHANNEL_SEO = "CHANNEL_SEO", E.CHANNEL_SEO_BRAND = "CHANNEL_SEO_BRAND", E.CORPTRAVEL = "CORPTRAVEL", E.LONGTAIL = "LONGTAIL", E.LONGTAIL_AFFNET = "LONGTAIL_AFFNET", E.META = "META", E.OTA = "OTA", E.SILVER = "SILVER", E.TRANSPORT = "TRANSPORT"
                }(R || (R = {})),
                function(E) {
                    E.ADULTS_ONLY = "ADULTS_ONLY", E.ALL_AGES = "ALL_AGES", E.KIDS_ONLY = "KIDS_ONLY", E.UNKNOWN_AGE_RESTRICTION = "UNKNOWN_AGE_RESTRICTION"
                }(i || (i = {})),
                function(E) {
                    E.OVERRIDE_CITY = "OVERRIDE_CITY", E.OVERRIDE_NONE = "OVERRIDE_NONE", E.OVERRIDE_REGION = "OVERRIDE_REGION", E.OVERRIDE_REGION_OR_CITY = "OVERRIDE_REGION_OR_CITY"
                }(r || (r = {})),
                function(E) {
                    E.MINUTES = "MINUTES", E.NEVER = "NEVER", E.SESSION = "SESSION"
                }(S || (S = {})),
                function(E) {
                    E.SQUARE_FEET = "SQUARE_FEET", E.SQUARE_METER = "SQUARE_METER"
                }(o || (o = {})),
                function(E) {
                    E.squaredFeet = "squaredFeet", E.squaredMeters = "squaredMeters"
                }(L || (L = {})),
                function(E) {
                    E.AUTO = "AUTO", E.FORCE_OFF = "FORCE_OFF", E.FORCE_ON = "FORCE_ON", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(D || (D = {})),
                function(E) {
                    E.ALL_SEASON = "ALL_SEASON", E.SEASONAL = "SEASONAL", E.UNKNOWN_AVAILABILITY = "UNKNOWN_AVAILABILITY"
                }(C || (C = {})),
                function(E) {
                    E.FREE = "FREE", E.PAID = "PAID"
                }(u || (u = {})),
                function(E) {
                    E.BRAND_PRIMARY_BACKGROUND = "BRAND_PRIMARY_BACKGROUND", E.WHITE = "WHITE"
                }(P || (P = {})),
                function(E) {
                    E.free_cancellation = "free_cancellation", E.genius = "genius"
                }(a || (a = {})),
                function(E) {
                    E.failed = "failed", E.ongoing = "ongoing", E.successful = "successful"
                }(s || (s = {})),
                function(E) {
                    E.FULL = "FULL", E.MEDIUM = "MEDIUM", E.SMALL = "SMALL", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(c || (c = {})),
                function(E) {
                    E.CRITICAL = "CRITICAL", E.LOW = "LOW", E.MAJOR = "MAJOR", E.MINOR = "MINOR", E.VERY_LOW = "VERY_LOW"
                }(U || (U = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION", E.FLIGHT = "FLIGHT", E.INSURANCE = "INSURANCE"
                }(M || (M = {})),
                function(E) {
                    E.DOWN_THE_HALL = "DOWN_THE_HALL", E.ENSUITE = "ENSUITE", E.INSIDE_OR_ATTACHED_TO_BEDROOM = "INSIDE_OR_ATTACHED_TO_BEDROOM", E.INSIDE_THE_APARTMENT = "INSIDE_THE_APARTMENT", E.INSIDE_THE_ROOM = "INSIDE_THE_ROOM", E.IN_THE_HALLWAY = "IN_THE_HALLWAY", E.NEXT_DOOR = "NEXT_DOOR", E.OPPOSITE_THE_ROOM = "OPPOSITE_THE_ROOM", E.OTHER = "OTHER", E.UNKNOWN_LOCATION = "UNKNOWN_LOCATION"
                }(l || (l = {})),
                function(E) {
                    E.PRIVATE = "PRIVATE", E.SHARED = "SHARED", E.UNKNOWN_TYPE = "UNKNOWN_TYPE"
                }(f || (f = {})),
                function(E) {
                    E.DOUBLE = "DOUBLE", E.EXTRA_CRIB = "EXTRA_CRIB", E.INVALID = "INVALID", E.OUBLE = "OUBLE", E.SINGLE = "SINGLE", E.TWIN = "TWIN"
                }(G || (G = {})),
                function(E) {
                    E.CREDIT = "CREDIT", E.DISCOUNT = "DISCOUNT"
                }(F || (F = {})),
                function(E) {
                    E.WINDOW_0_1 = "WINDOW_0_1", E.WINDOW_2_3 = "WINDOW_2_3", E.WINDOW_4_7 = "WINDOW_4_7", E.WINDOW_8_14 = "WINDOW_8_14", E.WINDOW_15_30 = "WINDOW_15_30", E.WINDOW_31_60 = "WINDOW_31_60", E.WINDOW_61_90 = "WINDOW_61_90", E.WINDOW_91_PLUS = "WINDOW_91_PLUS"
                }(p || (p = {})),
                function(E) {
                    E.COMPETITIVE_SET = "COMPETITIVE_SET", E.MARKET = "MARKET", E.NONE = "NONE", E.PEER_GROUP = "PEER_GROUP", E.YEAR_OVER_YEAR = "YEAR_OVER_YEAR"
                }(H || (H = {})),
                function(E) {
                    E.DAYS7 = "DAYS7", E.DAYS14 = "DAYS14", E.DAYS30 = "DAYS30", E.DAYS60 = "DAYS60", E.DAYS90 = "DAYS90", E.DAYS365 = "DAYS365"
                }(Y || (Y = {})),
                function(E) {
                    E.AVERAGE_DAILY_RATE = "AVERAGE_DAILY_RATE", E.CANCELLATION_RATE = "CANCELLATION_RATE", E.LENGTH_OF_STAY = "LENGTH_OF_STAY", E.RESERVATIONS = "RESERVATIONS", E.ROOM_RESERVATIONS = "ROOM_RESERVATIONS"
                }(B || (B = {})),
                function(E) {
                    E.AVERAGE_PRICE = "AVERAGE_PRICE", E.AVERAGE_VALUE = "AVERAGE_VALUE", E.PERCENTAGE = "PERCENTAGE"
                }(d || (d = {})),
                function(E) {
                    E.MAX_DAYS = "MAX_DAYS", E.MIN_DAYS = "MIN_DAYS", E.NONE = "NONE"
                }(V || (V = {})),
                function(E) {
                    E.COMPETITIVE_SET = "COMPETITIVE_SET", E.MARKET = "MARKET", E.NONE = "NONE", E.PEER_GROUP = "PEER_GROUP", E.YEAR_OVER_YEAR = "YEAR_OVER_YEAR"
                }(K || (K = {})),
                function(E) {
                    E.DAYS7 = "DAYS7", E.DAYS14 = "DAYS14", E.DAYS30 = "DAYS30", E.DAYS60 = "DAYS60", E.DAYS90 = "DAYS90", E.DAYS365 = "DAYS365"
                }(v || (v = {})),
                function(E) {
                    E.COUNTRY = "COUNTRY", E.DEVICE = "DEVICE", E.PURPOSE = "PURPOSE"
                }(h || (h = {})),
                function(E) {
                    E.GENIUS_BOOKING = "GENIUS_BOOKING", E.NON_GENIUS_BOOKING = "NON_GENIUS_BOOKING"
                }(b || (b = {})),
                function(E) {
                    E.MARKERS_ON_MAP = "MARKERS_ON_MAP", E.SMART_AV = "SMART_AV", E.UNKNOWN = "UNKNOWN"
                }(W || (W = {})),
                function(E) {
                    E.AMERICAN_BREAKFAST = "AMERICAN_BREAKFAST", E.BREAKFAST = "BREAKFAST", E.BUFFET_BREAKFAST = "BUFFET_BREAKFAST", E.CONTINENTAL_BREAKFAST = "CONTINENTAL_BREAKFAST", E.FULL_ENGLISH_BREAKFAST = "FULL_ENGLISH_BREAKFAST", E.UNKNOWN = "UNKNOWN"
                }(g || (g = {})),
                function(E) {
                    E.ECONOMY = "ECONOMY"
                }(m || (m = {})),
                function(E) {
                    E.BLACK_FRIDAY_DEALS = "BLACK_FRIDAY_DEALS", E.LATE_ESCAPE_DEALS = "LATE_ESCAPE_DEALS"
                }(y || (y = {})),
                function(E) {
                    E.FREE = "FREE", E.FREE_CANCELLATION_NO_PREPAYMENT = "FREE_CANCELLATION_NO_PREPAYMENT", E.INVALID = "INVALID", E.LAST_MINUTE_FREE_CANCELLATION = "LAST_MINUTE_FREE_CANCELLATION", E.NON_FREE = "NON_FREE", E.NON_REFUNDABLE = "NON_REFUNDABLE", E.NO_CC_REQUIRED = "NO_CC_REQUIRED", E.NO_PREPAYMENT = "NO_PREPAYMENT"
                }(k || (k = {})),
                function(E) {
                    E.CARD_CUSTOM = "CARD_CUSTOM", E.CARD_DESTINATION = "CARD_DESTINATION", E.CARD_PROPERTY = "CARD_PROPERTY"
                }(X || (X = {})),
                function(E) {
                    E.ACID = "ACID", E.DEFAULT = "DEFAULT", E.DESTINATIONS_COMPSET = "DESTINATIONS_COMPSET", E.PREVIEW_CARD = "PREVIEW_CARD", E.THEME_CAROUSEL = "THEME_CAROUSEL"
                }(w || (w = {})),
                function(E) {
                    E.DESKTOP_LARGE = "DESKTOP_LARGE", E.DESKTOP_MEDIUM = "DESKTOP_MEDIUM", E.DESKTOP_SMALL = "DESKTOP_SMALL", E.MDOT_LARGE = "MDOT_LARGE", E.MDOT_MEDIUM = "MDOT_MEDIUM", E.MDOT_SMALL = "MDOT_SMALL"
                }(Q || (Q = {})),
                function(E) {
                    E.ms_all_data = "ms_all_data", E.pms_db_data = "pms_db_data", E.pms_rtm_data = "pms_rtm_data"
                }(Z || (Z = {})),
                function(E) {
                    E.CONDITIONAL = "CONDITIONAL", E.CONDITIONAL_INCLUDED = "CONDITIONAL_INCLUDED", E.EXCLUDED = "EXCLUDED", E.INCLUDED = "INCLUDED", E.NON_MANDATORY = "NON_MANDATORY", E.UNDEF = "UNDEF"
                }(j || (j = {})),
                function(E) {
                    E.CONDITIONAL = "CONDITIONAL", E.CONDITIONAL_INCLUDED = "CONDITIONAL_INCLUDED", E.EXCLUDED = "EXCLUDED", E.INCLUDED = "INCLUDED", E.NON_MANDATORY = "NON_MANDATORY", E.UNDEF = "UNDEF"
                }(x || (x = {})),
                function(E) {
                    E.CONDITIONAL = "CONDITIONAL", E.CONDITIONAL_INCLUDED = "CONDITIONAL_INCLUDED", E.EXCLUDED = "EXCLUDED", E.INCLUDED = "INCLUDED", E.NON_MANDATORY = "NON_MANDATORY", E.UNDEF = "UNDEF"
                }(J || (J = {})),
                function(E) {
                    E.INCALCULABLE = "INCALCULABLE", E.NOT_APPLICABLE = "NOT_APPLICABLE", E.PERCENTAGE = "PERCENTAGE", E.PERCENTAGE_WITH_CEIL = "PERCENTAGE_WITH_CEIL", E.PER_ITEM = "PER_ITEM", E.PER_ITEM_PER_PERIOD = "PER_ITEM_PER_PERIOD", E.PER_NIGHT = "PER_NIGHT", E.PER_PERSON_PER_NIGHT = "PER_PERSON_PER_NIGHT", E.PER_PERSON_PER_NIGHT_RESTRICTED = "PER_PERSON_PER_NIGHT_RESTRICTED", E.PER_PERSON_PER_STAY = "PER_PERSON_PER_STAY", E.PER_STAY = "PER_STAY", E.VARIABLE_AMOUNT = "VARIABLE_AMOUNT"
                }(q || (q = {})),
                function(E) {
                    E.INCALCULABLE = "INCALCULABLE", E.NOT_APPLICABLE = "NOT_APPLICABLE", E.PERCENTAGE = "PERCENTAGE", E.PERCENTAGE_WITH_CEIL = "PERCENTAGE_WITH_CEIL", E.PER_ITEM = "PER_ITEM", E.PER_ITEM_PER_PERIOD = "PER_ITEM_PER_PERIOD", E.PER_NIGHT = "PER_NIGHT", E.PER_PERSON_PER_NIGHT = "PER_PERSON_PER_NIGHT", E.PER_PERSON_PER_NIGHT_RESTRICTED = "PER_PERSON_PER_NIGHT_RESTRICTED", E.PER_PERSON_PER_STAY = "PER_PERSON_PER_STAY", E.PER_STAY = "PER_STAY", E.VARIABLE_AMOUNT = "VARIABLE_AMOUNT"
                }(z || (z = {})),
                function(E) {
                    E.INCALCULABLE = "INCALCULABLE", E.NOT_APPLICABLE = "NOT_APPLICABLE", E.PERCENTAGE = "PERCENTAGE", E.PERCENTAGE_WITH_CEIL = "PERCENTAGE_WITH_CEIL", E.PER_ITEM = "PER_ITEM", E.PER_ITEM_PER_PERIOD = "PER_ITEM_PER_PERIOD", E.PER_NIGHT = "PER_NIGHT", E.PER_PERSON_PER_NIGHT = "PER_PERSON_PER_NIGHT", E.PER_PERSON_PER_NIGHT_RESTRICTED = "PER_PERSON_PER_NIGHT_RESTRICTED", E.PER_PERSON_PER_STAY = "PER_PERSON_PER_STAY", E.PER_STAY = "PER_STAY", E.VARIABLE_AMOUNT = "VARIABLE_AMOUNT"
                }($ || ($ = {})),
                function(E) {
                    E.CHARGES_MAY_APPLY = "CHARGES_MAY_APPLY", E.FREE = "FREE", E.NOT_APPLICABLE = "NOT_APPLICABLE", E.UNKNOWN_CHARGE_MODE = "UNKNOWN_CHARGE_MODE"
                }(EE || (EE = {})),
                function(E) {
                    E.READ_ONLY = "READ_ONLY", E.READ_WRITE = "READ_WRITE"
                }(_E || (_E = {})),
                function(E) {
                    E.GUEST = "GUEST", E.HOTEL = "HOTEL"
                }(NE || (NE = {})),
                function(E) {
                    E.GUEST_PARTNER_CHAT = "GUEST_PARTNER_CHAT"
                }(OE || (OE = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION"
                }(AE || (AE = {})),
                function(E) {
                    E.Failure = "Failure", E.Success = "Success"
                }(tE || (tE = {})),
                function(E) {
                    E.FIVE = "FIVE", E.FOUR = "FOUR", E.NO_PREFERENCE = "NO_PREFERENCE", E.ONE = "ONE", E.THREE = "THREE", E.TWO = "TWO", E.UNRATED = "UNRATED"
                }(eE || (eE = {})),
                function(E) {
                    E.EXTRANET = "EXTRANET", E.PULSE = "PULSE"
                }(TE || (TE = {})),
                function(E) {
                    E.APPROVED = "APPROVED", E.PENDING = "PENDING", E.REJECTED = "REJECTED", E.UNSUBMITTED = "UNSUBMITTED"
                }(nE || (nE = {})),
                function(E) {
                    E.BUSINESS_LICENSE = "BUSINESS_LICENSE", E.CATERING_SERVICE_LICENSE = "CATERING_SERVICE_LICENSE", E.FIRE_INSPECTION_CERTIFICATE = "FIRE_INSPECTION_CERTIFICATE", E.HYGIENE_LICENSE = "HYGIENE_LICENSE", E.MANAGEMENT_RIGHT_PROOF = "MANAGEMENT_RIGHT_PROOF", E.OTHERS = "OTHERS", E.SPECIAL_TRADE_LICENSE = "SPECIAL_TRADE_LICENSE", E.TAX_REGISTRATION_CERTIFICATE = "TAX_REGISTRATION_CERTIFICATE"
                }(IE || (IE = {})),
                function(E) {
                    E.DARK = "DARK", E.LIGHT = "LIGHT"
                }(RE || (RE = {})),
                function(E) {
                    E.HTML = "HTML", E.JSON = "JSON"
                }(iE || (iE = {})),
                function(E) {
                    E.CAROUSEL = "CAROUSEL", E.CONTAINED_LIST = "CONTAINED_LIST", E.GRID = "GRID", E.LIST = "LIST", E.LIST_INSET_MARGINS = "LIST_INSET_MARGINS", E.NONE = "NONE", E.WIDE_LIST = "WIDE_LIST"
                }(rE || (rE = {})),
                function(E) {
                    E.BUTTON = "BUTTON", E.CARD = "CARD", E.CONNECTOR = "CONNECTOR", E.DATA_CONTAINER = "DATA_CONTAINER", E.HORIZONTAL_CARD = "HORIZONTAL_CARD", E.ILLUSTRATED_CARD = "ILLUSTRATED_CARD", E.INLINE_BANNER = "INLINE_BANNER", E.PRODUCT = "PRODUCT", E.TOP_VERTICAL_CARD = "TOP_VERTICAL_CARD", E.VALUE_MERCHANDISE = "VALUE_MERCHANDISE"
                }(SE || (SE = {})),
                function(E) {
                    E.ACCOMMODATION_CARD = "ACCOMMODATION_CARD", E.BUTTON = "BUTTON", E.CONTENT_CENTER = "CONTENT_CENTER", E.DEFAULT = "DEFAULT", E.DEFAULT_VERTICAL = "DEFAULT_VERTICAL", E.LARGE_RIGHT = "LARGE_RIGHT", E.MODAL = "MODAL", E.NONE = "NONE", E.PRODUCT = "PRODUCT", E.PRODUCT_HORIZONTAL = "PRODUCT_HORIZONTAL", E.SMALL = "SMALL", E.SUPPLY = "SUPPLY", E.TAGLINE = "TAGLINE"
                }(oE || (oE = {})),
                function(E) {
                    E.COMPETITIVE = "COMPETITIVE", E.MARKET = "MARKET", E.PEER_GROUP = "PEER_GROUP"
                }(LE || (LE = {})),
                function(E) {
                    E.DEEPLINK = "DEEPLINK", E.DIALOG = "DIALOG"
                }(DE || (DE = {})),
                function(E) {
                    E.INDEX_UPCOMING_TRIP = "INDEX_UPCOMING_TRIP", E.MY_TRIPS_TIMELINE = "MY_TRIPS_TIMELINE"
                }(CE || (CE = {})),
                function(E) {
                    E.ACCOMMODATION_POB = "ACCOMMODATION_POB", E.ADD_ARRIVAL_TIME = "ADD_ARRIVAL_TIME", E.ADD_REVIEW = "ADD_REVIEW", E.ALERT_COVID_19 = "ALERT_COVID_19", E.APP_MANAGE_RESERVATION = "APP_MANAGE_RESERVATION", E.ATTRACTION_VOUCHER = "ATTRACTION_VOUCHER", E.ATTR_FIND_THINGS_TO_DO = "ATTR_FIND_THINGS_TO_DO", E.BASIC_TRIP = "BASIC_TRIP", E.BOOK_AGAIN = "BOOK_AGAIN", E.CANCEL_BOOKING = "CANCEL_BOOKING", E.CAR_VOUCHER = "CAR_VOUCHER", E.CONTACT_HELP_CENTER = "CONTACT_HELP_CENTER", E.DEALS_UNLOCKED = "DEALS_UNLOCKED", E.EARLY_CHECK_IN = "EARLY_CHECK_IN", E.EMERGENCY_MESSAGE_CONNECTOR = "EMERGENCY_MESSAGE_CONNECTOR", E.FLIGHT_ONLINE_CHECK_IN = "FLIGHT_ONLINE_CHECK_IN", E.GET_DIRECTION = "GET_DIRECTION", E.GET_TO_THE_PROPERTY = "GET_TO_THE_PROPERTY", E.GUEST_DATE_CHANGE = "GUEST_DATE_CHANGE", E.HELP_CENTER = "HELP_CENTER", E.INVALID_PAYMENT = "INVALID_PAYMENT", E.KEY_COLLECTION_INFO = "KEY_COLLECTION_INFO", E.LATE_CHECK_IN = "LATE_CHECK_IN", E.LATE_CHECK_IN_SURVEY = "LATE_CHECK_IN_SURVEY", E.MENU_ITEM_ADD_REVIEW = "MENU_ITEM_ADD_REVIEW", E.MENU_ITEM_CANCEL_RESERVATION = "MENU_ITEM_CANCEL_RESERVATION", E.MENU_ITEM_GET_DIRECTION = "MENU_ITEM_GET_DIRECTION", E.MENU_ITEM_HC_LINK = "MENU_ITEM_HC_LINK", E.MENU_ITEM_HIDE_RESERVATION = "MENU_ITEM_HIDE_RESERVATION", E.MENU_ITEM_INVALID_PAYMENT = "MENU_ITEM_INVALID_PAYMENT", E.MENU_ITEM_MANAGE_RESERVATION = "MENU_ITEM_MANAGE_RESERVATION", E.MENU_ITEM_MODIFY_DATE_RESERVATION = "MENU_ITEM_MODIFY_DATE_RESERVATION", E.MENU_ITEM_MODIFY_DATE_RESERVATION_APPROVAL = "MENU_ITEM_MODIFY_DATE_RESERVATION_APPROVAL", E.MENU_ITEM_MSG_TO_RESERVATION = "MENU_ITEM_MSG_TO_RESERVATION", E.MENU_ITEM_RECOVER_RESERVATION = "MENU_ITEM_RECOVER_RESERVATION", E.MENU_ITEM_SHARE_RESERVATION = "MENU_ITEM_SHARE_RESERVATION", E.MENU_ITEM_USER_CHANGE_DATE = "MENU_ITEM_USER_CHANGE_DATE", E.MENU_ITEM_USER_REQUEST_DATE_CHANGE = "MENU_ITEM_USER_REQUEST_DATE_CHANGE", E.MENU_ITEM_VIEW_CANCEL_POLICY = "MENU_ITEM_VIEW_CANCEL_POLICY", E.MENU_ITEM_VIEW_RESERVATION = "MENU_ITEM_VIEW_RESERVATION", E.MESSAGE_PROPERTY = "MESSAGE_PROPERTY", E.PARTNER_DATE_CHANGE = "PARTNER_DATE_CHANGE", E.TAXI_COMPANION = "TAXI_COMPANION", E.UPGRADE_ROOM = "UPGRADE_ROOM", E.VIEW_RESERVATION = "VIEW_RESERVATION"
                }(uE || (uE = {})),
                function(E) {
                    E.BASIC = "BASIC", E.MENU_ITEM = "MENU_ITEM"
                }(PE || (PE = {})),
                function(E) {
                    E.android = "android", E.ddot = "ddot", E.email = "email", E.emk = "emk", E.ios = "ios", E.mdot = "mdot", E.www = "www"
                }(aE || (aE = {})),
                function(E) {
                    E.DATA_CONTEXT = "DATA_CONTEXT", E.HUMAN_CONTEXT = "HUMAN_CONTEXT"
                }(sE || (sE = {})),
                function(E) {
                    E.BOOKINGS = "BOOKINGS", E.BRAZIL = "BRAZIL", E.JAPAN = "JAPAN", E.NO_CONTRACT = "NO_CONTRACT", E.TEST = "TEST", E.UNKNOWN = "UNKNOWN"
                }(cE || (cE = {})),
                function(E) {
                    E.GUEST = "GUEST"
                }(UE || (UE = {})),
                function(E) {
                    E.ALWAYS = "ALWAYS", E.BLOCK_DATES = "BLOCK_DATES", E.STAY_DATE_RANGE = "STAY_DATE_RANGE"
                }(ME || (ME = {})),
                function(E) {
                    E.ALL_ROOMS = "ALL_ROOMS", E.BUSINESS_CENTER = "BUSINESS_CENTER", E.ENTIRE_PROPERTY = "ENTIRE_PROPERTY", E.PUBLIC_AREAS = "PUBLIC_AREAS", E.SOME_ROOMS = "SOME_ROOMS", E.UNKNOWN_COVERAGE = "UNKNOWN_COVERAGE"
                }(lE || (lE = {})),
                function(E) {
                    E.EMPTY = "EMPTY", E.SAFE = "SAFE", E.VOID = "VOID", E.WARNING = "WARNING"
                }(fE || (fE = {})),
                function(E) {
                    E.COLLEAGUES = "COLLEAGUES", E.COUPLE = "COUPLE", E.EXTENDED_GROUP = "EXTENDED_GROUP", E.FAMILY = "FAMILY", E.FAMILY_WITH_OLDER_CHILDREN = "FAMILY_WITH_OLDER_CHILDREN", E.FAMILY_WITH_YOUNG_CHILDREN = "FAMILY_WITH_YOUNG_CHILDREN", E.GROUP = "GROUP", E.MATURE_COUPLE = "MATURE_COUPLE", E.SOLO_TRAVELLER = "SOLO_TRAVELLER", E.TOTAL = "TOTAL", E.WITH_FRIENDS = "WITH_FRIENDS", E.YOUNG_COUPLE = "YOUNG_COUPLE"
                }(GE || (GE = {})),
                function(E) {
                    E.ELIGIBLE = "ELIGIBLE", E.NOT_ELIGIBLE_CURRENCY_COUNTRY_NOT_SUPPORTED = "NOT_ELIGIBLE_CURRENCY_COUNTRY_NOT_SUPPORTED", E.NOT_ELIGIBLE_NOT_BH19 = "NOT_ELIGIBLE_NOT_BH19", E.NOT_ELIGIBLE_NOT_EXCLUSIVE_PAYMENTS = "NOT_ELIGIBLE_NOT_EXCLUSIVE_PAYMENTS", E.NOT_ELIGIBLE_PAYOUT_METHOD_NOT_SUPPORTED = "NOT_ELIGIBLE_PAYOUT_METHOD_NOT_SUPPORTED"
                }(FE || (FE = {})),
                function(E) {
                    E.BULK_UPLOAD = "BULK_UPLOAD", E.FIFTEEN_MIN_FLOW = "FIFTEEN_MIN_FLOW", E.FIFTEEN_MIN_FLOW_PULSE = "FIFTEEN_MIN_FLOW_PULSE", E.SELF_BUILD = "SELF_BUILD", E.UNKNOWN = "UNKNOWN", E.XML_FEED = "XML_FEED", E.XML_SPO_FLOW = "XML_SPO_FLOW"
                }(pE || (pE = {})),
                function(E) {
                    E.FRIDAY = "FRIDAY", E.MONDAY = "MONDAY", E.SATURDAY = "SATURDAY", E.SUNDAY = "SUNDAY", E.THURSDAY = "THURSDAY", E.TUESDAY = "TUESDAY", E.UNKNOWN_DAY = "UNKNOWN_DAY", E.WEDNESDAY = "WEDNESDAY"
                }(HE || (HE = {})),
                function(E) {
                    E.ALL_DEALS = "ALL_DEALS", E.BUSINESS_RATE = "BUSINESS_RATE", E.GENIUS = "GENIUS", E.GETAWAY_2019 = "GETAWAY_2019", E.INVALID = "INVALID", E.LATE = "LATE", E.PARTNER_RATE = "PARTNER_RATE", E.SECRET = "SECRET", E.SMART = "SMART"
                }(YE || (YE = {})),
                function(E) {
                    E.los = "los", E.policy = "policy", E.rank = "rank"
                }(BE || (BE = {})),
                function(E) {
                    E.AIRPORT = "AIRPORT", E.BOUNDING_BOX = "BOUNDING_BOX", E.CHAIN = "CHAIN", E.CITY = "CITY", E.COUNTRY = "COUNTRY", E.DISTRICT = "DISTRICT", E.HOTEL = "HOTEL", E.IATA = "IATA", E.LANDMARK = "LANDMARK", E.LATLONG = "LATLONG", E.NO_DEST_TYPE = "NO_DEST_TYPE", E.REGION = "REGION", E.SUB_REGION = "SUB_REGION", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(dE || (dE = {})),
                function(E) {
                    E.BEACH_PILOT_UFI = "BEACH_PILOT_UFI", E.BEACH_UFI = "BEACH_UFI", E.SKI_UFI = "SKI_UFI"
                }(VE || (VE = {})),
                function(E) {
                    E.PULSE_ANDROID = "PULSE_ANDROID", E.PULSE_IOS = "PULSE_IOS"
                }(KE || (KE = {})),
                function(E) {
                    E.ACCESS_DENIED = "ACCESS_DENIED", E.ACCESS_GRANTED = "ACCESS_GRANTED", E.BLACKLISTED = "BLACKLISTED", E.PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION"
                }(vE || (vE = {})),
                function(E) {
                    E.ACCESS_REVOKED = "ACCESS_REVOKED", E.ACCESS_REVOKE_REQUESTED = "ACCESS_REVOKE_REQUESTED", E.APP_DELETED = "APP_DELETED", E.APP_DELETED_ = "APP_DELETED_", E.APP_OK = "APP_OK", E.BROKEN_TOKEN = "BROKEN_TOKEN", E.LOGOUT = "LOGOUT", E.MANUALLY_DEACTIVATED = "MANUALLY_DEACTIVATED"
                }(hE || (hE = {})),
                function(E) {
                    E.BUID = "BUID", E.BUID_AND_DEVICE_ID = "BUID_AND_DEVICE_ID", E.BUID_OR_DEVICE_ID = "BUID_OR_DEVICE_ID", E.DEVICE_ID = "DEVICE_ID"
                }(bE || (bE = {})),
                function(E) {
                    E.AIRPORT = "AIRPORT", E.CITY = "CITY", E.LANDMARK = "LANDMARK", E.UNKNOWN = "UNKNOWN"
                }(WE || (WE = {})),
                function(E) {
                    E.CAR_DISTANCE = "CAR_DISTANCE", E.HAV_DISTANCE = "HAV_DISTANCE"
                }(gE || (gE = {})),
                function(E) {
                    E.IMPERIAL = "IMPERIAL", E.METRIC = "METRIC"
                }(mE || (mE = {})),
                function(E) {
                    E.OK = "OK", E.OTP_FAILED = "OTP_FAILED", E.RECAPTCHA_FAILED = "RECAPTCHA_FAILED", E.REQUEST_ALREADY_EXISTS = "REQUEST_ALREADY_EXISTS", E.RESERVATION_VERIFICATION_FAILED = "RESERVATION_VERIFICATION_FAILED", E.SERVER_ERROR = "SERVER_ERROR"
                }(yE || (yE = {})),
                function(E) {
                    E.OK = "OK", E.SERVER_ERROR = "SERVER_ERROR"
                }(kE || (kE = {})),
                function(E) {
                    E.OK = "OK", E.RECAPTCHA_FAILED = "RECAPTCHA_FAILED", E.SERVER_ERROR = "SERVER_ERROR", E.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(XE || (XE = {})),
                function(E) {
                    E.apartments = "apartments", E.entireApartment = "entireApartment", E.entireHome = "entireHome", E.homes = "homes"
                }(wE || (wE = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION"
                }(QE || (QE = {})),
                function(E) {
                    E.EDIT = "EDIT", E.NO = "NO"
                }(ZE || (ZE = {})),
                function(E) {
                    E.LITE = "LITE", E.PLUS = "PLUS", E.UNKNOWN = "UNKNOWN", E.UNKNOWN_VERSION = "UNKNOWN_VERSION"
                }(jE || (jE = {})),
                function(E) {
                    E.IMAGE = "IMAGE", E.TEXT = "TEXT"
                }(xE || (xE = {})),
                function(E) {
                    E.Default = "Default", E.Mobile = "Mobile"
                }(JE || (JE = {})),
                function(E) {
                    E.property = "property", E.room = "room"
                }(qE || (qE = {})),
                function(E) {
                    E.Property = "Property", E.Unit = "Unit"
                }(zE || (zE = {})),
                function(E) {
                    E.CURRENT_VIEW = "CURRENT_VIEW", E.FEATURE = "FEATURE", E.GENERAL = "GENERAL"
                }($E || ($E = {})),
                function(E) {
                    E.PILLS = "PILLS", E.PLAIN = "PLAIN", E.UNKNOWN = "UNKNOWN"
                }(E_ || (E_ = {})),
                function(E) {
                    E.BUTTON = "BUTTON", E.CHECKBOX = "CHECKBOX", E.SLIDER = "SLIDER", E.STEPPER = "STEPPER", E.SWITCH = "SWITCH", E.TEXTBOX = "TEXTBOX"
                }(__ || (__ = {})),
                function(E) {
                    E.BEACH = "BEACH", E.CITY = "CITY", E.FOOD = "FOOD", E.HIDDEN_GEMS = "HIDDEN_GEMS", E.NATURE_ACTIVE = "NATURE_ACTIVE", E.NATURE_RELAX = "NATURE_RELAX", E.ROMANCE = "ROMANCE", E.SKI = "SKI"
                }(N_ || (N_ = {})),
                function(E) {
                    E.AIRPORT = "AIRPORT", E.CITY = "CITY"
                }(O_ || (O_ = {})),
                function(E) {
                    E.PER_DAY = "PER_DAY", E.PER_HALF_HOUR = "PER_HALF_HOUR", E.PER_HOUR = "PER_HOUR", E.PER_MINUTE = "PER_MINUTE", E.PER_STAY = "PER_STAY", E.PER_WEEK = "PER_WEEK", E.UNKNOWN_FREQUENCY = "UNKNOWN_FREQUENCY"
                }(A_ || (A_ = {})),
                function(E) {
                    E.FULL = "FULL", E.SIMPLE = "SIMPLE"
                }(t_ || (t_ = {})),
                function(E) {
                    E.ELIGIBLE = "ELIGIBLE", E.INELIGIBLE = "INELIGIBLE"
                }(e_ || (e_ = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION", E.FLIGHT = "FLIGHT"
                }(T_ || (T_ = {})),
                function(E) {
                    E.CONVERSION_FAILED = "CONVERSION_FAILED", E.CONVERSION_STARTED = "CONVERSION_STARTED", E.CONVERTED = "CONVERTED", E.EXPIRED = "EXPIRED", E.LIVE = "LIVE", E.PAYMENT_PENDING = "PAYMENT_PENDING"
                }(n_ || (n_ = {})),
                function(E) {
                    E.FEMALE = "FEMALE", E.MALE = "MALE", E.MIXED = "MIXED", E.UNKNOWN_GENDER = "UNKNOWN_GENDER"
                }(I_ || (I_ = {})),
                function(E) {
                    E.MEALPLAN = "MEALPLAN", E.PRICE = "PRICE", E.ROOM = "ROOM"
                }(R_ || (R_ = {})),
                function(E) {
                    E.EMPTY = "EMPTY", E.LOCKED = "LOCKED", E.UNLOCKED = "UNLOCKED"
                }(i_ || (i_ = {})),
                function(E) {
                    E.GENIUS_DISCOUNT_10 = "GENIUS_DISCOUNT_10", E.GENIUS_DISCOUNT_10_15 = "GENIUS_DISCOUNT_10_15", E.GENIUS_DISCOUNT_10_15_20 = "GENIUS_DISCOUNT_10_15_20", E.GENIUS_DISCOUNT_15 = "GENIUS_DISCOUNT_15", E.GENIUS_DISCOUNT_20 = "GENIUS_DISCOUNT_20", E.GENIUS_FREE_BREAKFAST = "GENIUS_FREE_BREAKFAST", E.GENIUS_FREE_ROOM_UPGRADE = "GENIUS_FREE_ROOM_UPGRADE", E.GENIUS_PRIORITY_CS = "GENIUS_PRIORITY_CS", E.GENIUS_STAY_TUNED = "GENIUS_STAY_TUNED"
                }(r_ || (r_ = {})),
                function(E) {
                    E.LEVEL_ONE = "LEVEL_ONE", E.LEVEL_THREE = "LEVEL_THREE", E.LEVEL_TWO = "LEVEL_TWO"
                }(S_ || (S_ = {})),
                function(E) {
                    E.DYNAMIC_DISCOUNT = "DYNAMIC_DISCOUNT", E.FREE_BREAKFAST = "FREE_BREAKFAST", E.FREE_ROOM_UPGRADE = "FREE_ROOM_UPGRADE", E.PERCENT_10 = "PERCENT_10", E.PERCENT_15 = "PERCENT_15", E.PERCENT_20 = "PERCENT_20"
                }(o_ || (o_ = {})),
                function(E) {
                    E.CREDITS = "CREDITS", E.SAVINGS = "SAVINGS", E.STAYS = "STAYS", E.VOUCHERS = "VOUCHERS"
                }(L_ || (L_ = {})),
                function(E) {
                    E.FREE_BREAKFAST = "FREE_BREAKFAST", E.FREE_ROOM_UPGRADE = "FREE_ROOM_UPGRADE"
                }(D_ || (D_ = {})),
                function(E) {
                    E.BUTTON = "BUTTON", E.LINK = "LINK"
                }(C_ || (C_ = {})),
                function(E) {
                    E.GLOBAL_EVENT = "GLOBAL_EVENT", E.REGIONAL_EVENT = "REGIONAL_EVENT"
                }(u_ || (u_ = {})),
                function(E) {
                    E.DISRUPTIVE = "DISRUPTIVE", E.NORMAL = "NORMAL"
                }(P_ || (P_ = {})),
                function(E) {
                    E.COVID = "COVID", E.HELP = "HELP", E.PROPERTY = "PROPERTY", E.PROPERTY_SURROUNDINGS = "PROPERTY_SURROUNDINGS", E.ROOM = "ROOM", E.ROOM_LIST = "ROOM_LIST"
                }(a_ || (a_ = {})),
                function(E) {
                    E.PROPERTY_ADDRESS = "PROPERTY_ADDRESS", E.PROPERTY_ID = "PROPERTY_ID", E.PROPERTY_NAME = "PROPERTY_NAME", E.PROPERTY_STATUS = "PROPERTY_STATUS"
                }(s_ || (s_ = {})),
                function(E) {
                    E.READ_ONLY = "READ_ONLY", E.READ_WRITE = "READ_WRITE"
                }(c_ || (c_ = {})),
                function(E) {
                    E.ACTION_REQUIRED = "ACTION_REQUIRED", E.CANCELLED = "CANCELLED", E.CONFIRMED = "CONFIRMED", E.PENDING = "PENDING", E.UNKNOWN = "UNKNOWN"
                }(U_ || (U_ = {})),
                function(E) {
                    E.EMAIL = "EMAIL", E.IMAGE = "IMAGE", E.LOCATION = "LOCATION", E.PDF = "PDF"
                }(M_ || (M_ = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.ARCHIVED = "ARCHIVED"
                }(l_ || (l_ = {})),
                function(E) {
                    E.GUEST_TO_PARTNER_INBOX_LIST = "GUEST_TO_PARTNER_INBOX_LIST"
                }(f_ || (f_ = {})),
                function(E) {
                    E.POST_BOOKING = "POST_BOOKING"
                }(G_ || (G_ = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION"
                }(F_ || (F_ = {})),
                function(E) {
                    E.GENIUS = "GENIUS", E.NON_GENIUS = "NON_GENIUS"
                }(p_ || (p_ = {})),
                function(E) {
                    E.freeAirportShuttle = "freeAirportShuttle", E.freeParking = "freeParking", E.freeShuttle = "freeShuttle", E.freeWifi = "freeWifi", E.parkingOnSite = "parkingOnSite", E.petsAllowed = "petsAllowed", E.unknown = "unknown"
                }(H_ || (H_ = {})),
                function(E) {
                    E.needsProfile = "needsProfile", E.popularity = "popularity", E.propertyStrip = "propertyStrip"
                }(Y_ || (Y_ = {})),
                function(E) {
                    E.facility = "facility", E.policy = "policy"
                }(B_ || (B_ = {})),
                function(E) {
                    E.INVALID = "INVALID", E.TwentyFourHourReception = "TwentyFourHourReception"
                }(d_ || (d_ = {})),
                function(E) {
                    E.NO_ALIASES = "NO_ALIASES", E.UNKNOWN = "UNKNOWN", E.USE_ALIASES = "USE_ALIASES", E.VIA_ALIASES_AND_GUEST_REQUESTS_INTERNALLY_ONLY = "VIA_ALIASES_AND_GUEST_REQUESTS_INTERNALLY_ONLY"
                }(V_ || (V_ = {})),
                function(E) {
                    E.Fallback = "Fallback", E.Streamline = "Streamline"
                }(K_ || (K_ = {})),
                function(E) {
                    E.ACCESSIBLE_FACILITY = "ACCESSIBLE_FACILITY", E.ACCESSIBLE_ROOM_FACILITY = "ACCESSIBLE_ROOM_FACILITY", E.BRANDS = "BRANDS", E.COUNTRY = "COUNTRY", E.DISTANCE_TO_BEACH = "DISTANCE_TO_BEACH", E.DISTANCE_TO_SKI_LIFT = "DISTANCE_TO_SKI_LIFT", E.DISTRICT = "DISTRICT", E.EXCLUDE_HOTELS = "EXCLUDE_HOTELS", E.GENIUS = "GENIUS", E.HOSTEL_LOCATION = "HOSTEL_LOCATION", E.HOSTEL_PRIVACY = "HOSTEL_PRIVACY", E.HOTEL_FACILITIES = "HOTEL_FACILITIES", E.PAYMENT_METHOD = "PAYMENT_METHOD", E.POPULAR_NEARBY_LANDMARKS = "POPULAR_NEARBY_LANDMARKS", E.PRIVATE_BRANDS = "PRIVATE_BRANDS", E.PROPERTY_CLUSTERS = "PROPERTY_CLUSTERS", E.REVIEW_SCORE = "REVIEW_SCORE", E.ROOM_FACILITIES = "ROOM_FACILITIES", E.ROOM_TYPE = "ROOM_TYPE", E.SEO_THEMES = "SEO_THEMES", E.UFI = "UFI"
                }(v_ || (v_ = {})),
                function(E) {
                    E.INJECTION_DEAL_OF_THE_DAY = "INJECTION_DEAL_OF_THE_DAY", E.INJECTION_NONE = "INJECTION_NONE", E.INJECTION_SOLDOUT = "INJECTION_SOLDOUT"
                }(h_ || (h_ = {})),
                function(E) {
                    E.GENERIC_REASON = "GENERIC_REASON", E.NOT_ENOUGH_PROPERTIES = "NOT_ENOUGH_PROPERTIES"
                }(b_ || (b_ = {})),
                function(E) {
                    E.FREECANCELLATION = "FREECANCELLATION", E.NONREFUNDABLE = "NONREFUNDABLE", E.REFUNDABLE = "REFUNDABLE", E.UNKNOWN_CANCELLATION_TYPE = "UNKNOWN_CANCELLATION_TYPE"
                }(W_ || (W_ = {})),
                function(E) {
                    E.CERTIFICATE = "CERTIFICATE", E.DIPAD = "DIPAD", E.IPID = "IPID", E.POLICY_WORDING = "POLICY_WORDING", E.UNKNOWN_DOCUMENT_TYPE = "UNKNOWN_DOCUMENT_TYPE", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(g_ || (g_ = {})),
                function(E) {
                    E.CANCELLED = "CANCELLED", E.ISSUED = "ISSUED", E.PROCESSING = "PROCESSING", E.PROCESSING_CANCELLATION = "PROCESSING_CANCELLATION", E.UNKNOWN_POLICY_STATUS = "UNKNOWN_POLICY_STATUS"
                }(m_ || (m_ = {})),
                function(E) {
                    E.ACCOMMODATIONS = "ACCOMMODATIONS", E.ATTRACTIONS = "ATTRACTIONS", E.CARS = "CARS", E.FLIGHTS = "FLIGHTS"
                }(y_ || (y_ = {})),
                function(E) {
                    E.CARD = "CARD", E.FAQ = "FAQ", E.HEADER = "HEADER", E.ICON = "ICON", E.PROGRESS = "PROGRESS", E.TEXT = "TEXT"
                }(k_ || (k_ = {})),
                function(E) {
                    E.BRAZIL = "BRAZIL", E.CALIFORNIA = "CALIFORNIA", E.CHINA = "CHINA", E.EUROPE = "EUROPE", E.NEW_ZEALAND = "NEW_ZEALAND", E.SOUTH_KOREA = "SOUTH_KOREA", E.VIRGINIA = "VIRGINIA"
                }(X_ || (X_ = {})),
                function(E) {
                    E.EXTERNAL = "EXTERNAL", E.INTERNAL = "INTERNAL"
                }(w_ || (w_ = {})),
                function(E) {
                    E.BENEFIT = "BENEFIT", E.CHILDREN = "CHILDREN", E.DISCOUNT = "DISCOUNT", E.FLEXIBILITY_PREMIUM = "FLEXIBILITY_PREMIUM", E.INSURANCE = "INSURANCE", E.NO_TYPE = "NO_TYPE", E.POLICY_UPGRADE = "POLICY_UPGRADE", E.REWARD = "REWARD", E.WAIVED_CHARGES = "WAIVED_CHARGES"
                }(Q_ || (Q_ = {})),
                function(E) {
                    E.ANDROID = "ANDROID", E.IOS = "IOS", E.WEB = "WEB"
                }(Z_ || (Z_ = {})),
                function(E) {
                    E.DISMISSED = "DISMISSED", E.VISIBLE = "VISIBLE"
                }(j_ || (j_ = {})),
                function(E) {
                    E.BREAKFAST = "BREAKFAST", E.DINNER = "DINNER", E.LUNCH = "LUNCH"
                }(x_ || (x_ = {})),
                function(E) {
                    E.ALL_INCLUSIVE = "ALL_INCLUSIVE", E.BREAKFAST_AND_DINNER = "BREAKFAST_AND_DINNER", E.BREAKFAST_AND_LUNCH = "BREAKFAST_AND_LUNCH", E.BREAKFAST_AVAILABLE = "BREAKFAST_AVAILABLE", E.BREAKFAST_AVAILABLE_FOR_PRICE = "BREAKFAST_AVAILABLE_FOR_PRICE", E.BREAKFAST_EXCLUDED = "BREAKFAST_EXCLUDED", E.BREAKFAST_INCLUDED = "BREAKFAST_INCLUDED", E.BUFFET_BREAKFAST = "BUFFET_BREAKFAST", E.FULL_BOARD = "FULL_BOARD", E.HALF_BOARD = "HALF_BOARD", E.INVALID = "INVALID", E.SELF_CATERING = "SELF_CATERING", E.VEGETARIAN_BREAKFAST = "VEGETARIAN_BREAKFAST"
                }(J_ || (J_ = {})),
                function(E) {
                    E.MP_EXCLUDED = "MP_EXCLUDED", E.MP_INCLUDED = "MP_INCLUDED", E.MP_NOT_APPLICABLE = "MP_NOT_APPLICABLE", E.MP_RESERVED = "MP_RESERVED"
                }(q_ || (q_ = {})),
                function(E) {
                    E.DEFAULT_MEALPLAN = "DEFAULT_MEALPLAN", E.GENIUS_BREAKFAST = "GENIUS_BREAKFAST", E.MEALPLAN = "MEALPLAN", E.MEAL_PLAN = "MEAL_PLAN", E.UNKNOWN = "UNKNOWN"
                }(z_ || (z_ = {})),
                function(E) {
                    E.HOTEL_FACILITY = "HOTEL_FACILITY", E.ROOM_FACILITY = "ROOM_FACILITY", E.UNKNOWN_MEASURE_TYPE = "UNKNOWN_MEASURE_TYPE"
                }($_ || ($_ = {})),
                function(E) {
                    E.IMPERIAL_GB = "IMPERIAL_GB", E.IMPERIAL_US = "IMPERIAL_US", E.METRIC = "METRIC"
                }(EN || (EN = {})),
                function(E) {
                    E.IMPERIAL = "IMPERIAL", E.METRIC = "METRIC", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(_N || (_N = {})),
                function(E) {
                    E.BRAND_PRIMARY = "BRAND_PRIMARY", E.PRIMARY = "PRIMARY"
                }(NN || (NN = {})),
                function(E) {
                    E.ADDRESS = "ADDRESS", E.DISTANCE = "DISTANCE", E.LAST_SEEN = "LAST_SEEN", E.PROPERTY_HIGHLIGHT = "PROPERTY_HIGHLIGHT"
                }(ON || (ON = {})),
                function(E) {
                    E.FREE_CANCELLATION = "FREE_CANCELLATION", E.PAY_AT_PROPERTY = "PAY_AT_PROPERTY", E.PAY_WITH_WALLET = "PAY_WITH_WALLET", E.TAX_CHARGE_INCLUDED = "TAX_CHARGE_INCLUDED"
                }(AN || (AN = {})),
                function(E) {
                    E.DOTS = "DOTS", E.NONE = "NONE", E.STARS = "STARS"
                }(tN || (tN = {})),
                function(E) {
                    E.BEACH = "BEACH", E.CITY = "CITY", E.FOOD = "FOOD", E.HIDDEN_GEMS = "HIDDEN_GEMS", E.NATURE_ACTIVE = "NATURE_ACTIVE", E.NATURE_RELAX = "NATURE_RELAX", E.ROMANCE = "ROMANCE", E.SKI = "SKI"
                }(eN || (eN = {})),
                function(E) {
                    E.InstantDiscount = "InstantDiscount"
                }(TN || (TN = {})),
                function(E) {
                    E.Expired = "Expired", E.Running = "Running"
                }(nN || (nN = {})),
                function(E) {
                    E.Discount = "Discount"
                }(IN || (IN = {})),
                function(E) {
                    E.CHARGES_MAY_APPLY = "CHARGES_MAY_APPLY", E.FREE = "FREE", E.PAID = "PAID", E.UNKNOWN_CHARGE_MODE = "UNKNOWN_CHARGE_MODE"
                }(RN || (RN = {})),
                function(E) {
                    E.APR = "APR", E.AUG = "AUG", E.DEC = "DEC", E.FEB = "FEB", E.JAN = "JAN", E.JULY = "JULY", E.JUNE = "JUNE", E.MAR = "MAR", E.MAY = "MAY", E.NOV = "NOV", E.OCT = "OCT", E.SEPT = "SEPT"
                }(iN || (iN = {})),
                function(E) {
                    E.CITY = "CITY", E.COUNTRY = "COUNTRY", E.FLIGHT = "FLIGHT", E.HOTEL = "HOTEL", E.NEIGHBORHOOD = "NEIGHBORHOOD", E.REGION = "REGION", E.STATE = "STATE"
                }(rN || (rN = {})),
                function(E) {
                    E.DMO_MULTI_PROMOTED = "DMO_MULTI_PROMOTED", E.DMO_SINGLE_PROMOTED = "DMO_SINGLE_PROMOTED", E.UNKNOWN = "UNKNOWN"
                }(SN || (SN = {})),
                function(E) {
                    E.METER = "METER", E.MINUTE = "MINUTE"
                }(oN || (oN = {})),
                function(E) {
                    E.NO_CC_AUTOMATIC = "NO_CC_AUTOMATIC", E.NO_CC_DISABLED = "NO_CC_DISABLED", E.NO_CC_ENABLED = "NO_CC_ENABLED", E.UNKNOWN = "UNKNOWN"
                }(LN || (LN = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION", E.ATTRACTION = "ATTRACTION", E.BUS = "BUS", E.CAR = "CAR", E.CHECKMARK_SELECTED = "CHECKMARK_SELECTED", E.DISCOUNT = "DISCOUNT", E.FLIGHT = "FLIGHT", E.FREE = "FREE", E.GENIUS = "GENIUS", E.INFORMATION = "INFORMATION", E.METRO = "METRO", E.TAXI = "TAXI", E.TRAIN = "TRAIN", E.TRAM = "TRAM"
                }(DN || (DN = {})),
                function(E) {
                    E.NUM_TIMES_DISMISSED = "NUM_TIMES_DISMISSED", E.NUM_TIMES_RENDERED = "NUM_TIMES_RENDERED"
                }(CN || (CN = {})),
                function(E) {
                    E.BOTTOM = "BOTTOM", E.TOP = "TOP"
                }(uN || (uN = {})),
                function(E) {
                    E.CALLOUT = "CALLOUT", E.HINT = "HINT", E.NEUTRAL = "NEUTRAL"
                }(PN || (PN = {})),
                function(E) {
                    E.ACTION_FAIL = "ACTION_FAIL", E.ACTION_SUCCESS = "ACTION_SUCCESS"
                }(aN || (aN = {})),
                function(E) {
                    E.OBP_CLASSIC = "OBP_CLASSIC", E.OBP_DISABLED = "OBP_DISABLED", E.OBP_RLO3 = "OBP_RLO3", E.UNKNOWN = "UNKNOWN"
                }(sN || (sN = {})),
                function(E) {
                    E.NONE = "NONE", E.RATE_ONLY = "RATE_ONLY", E.RATE_PREFERRED = "RATE_PREFERRED", E.ROOM_PREFERRED = "ROOM_PREFERRED"
                }(cN || (cN = {})),
                function(E) {
                    E.COMPLETED = "COMPLETED", E.DISMISSED = "DISMISSED", E.INTERESTED = "INTERESTED", E.NEW = "NEW", E.POSTPONED = "POSTPONED", E.RETURNED_FROM_POSTPONED = "RETURNED_FROM_POSTPONED", E.SEEN = "SEEN", E.UNKNOWN = "UNKNOWN"
                }(UN || (UN = {})),
                function(E) {
                    E.DO_NOT_SELL = "DO_NOT_SELL", E.DO_NOT_SHARE = "DO_NOT_SHARE", E.NO_PROFILING = "NO_PROFILING", E.NO_TARGETED_ADS = "NO_TARGETED_ADS"
                }(MN || (MN = {})),
                function(E) {
                    E.Default = "Default", E.MostPopularFacilities = "MostPopularFacilities"
                }(lN || (lN = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION", E.ACCOMMODATION_INSURANCE = "ACCOMMODATION_INSURANCE", E.ATTRACTION = "ATTRACTION", E.BOOKING_BASIC = "BOOKING_BASIC", E.FLIGHT = "FLIGHT", E.PREBOOK_TAXIS = "PREBOOK_TAXIS", E.RENTAL_CAR = "RENTAL_CAR", E.TRANSPORT = "TRANSPORT"
                }(fN || (fN = {})),
                function(E) {
                    E.BLACK_GRADIENT = "BLACK_GRADIENT", E.COLOR_AWARE_GRADIENT = "COLOR_AWARE_GRADIENT"
                }(GN || (GN = {})),
                function(E) {
                    E.COMPETITIVE_SET = "COMPETITIVE_SET", E.MARKET = "MARKET", E.NONE = "NONE", E.PEER_GROUP = "PEER_GROUP", E.YEAR_OVER_YEAR = "YEAR_OVER_YEAR", E.YEAR_OVER_YEAR_3_YEARS_AGO = "YEAR_OVER_YEAR_3_YEARS_AGO"
                }(FN || (FN = {})),
                function(E) {
                    E.DAILY = "DAILY", E.MONTHLY = "MONTHLY", E.WEEKLY = "WEEKLY"
                }(pN || (pN = {})),
                function(E) {
                    E.DAYS7 = "DAYS7", E.DAYS14 = "DAYS14", E.DAYS30 = "DAYS30", E.DAYS60 = "DAYS60", E.DAYS90 = "DAYS90", E.DAYS365 = "DAYS365"
                }(HN || (HN = {})),
                function(E) {
                    E.ACCOMMODATION__BOOK_DONE_PROCESSING = "ACCOMMODATION__BOOK_DONE_PROCESSING", E.ACCOMMODATION__BP1 = "ACCOMMODATION__BP1", E.ACCOMMODATION__BP2 = "ACCOMMODATION__BP2", E.ACCOMMODATION__BP3 = "ACCOMMODATION__BP3", E.ACCOMMODATION__CANCEL_PAGE = "ACCOMMODATION__CANCEL_PAGE", E.ACCOMMODATION__PROPERTY = "ACCOMMODATION__PROPERTY", E.ACCOMMODATION__ROOMDETAILS = "ACCOMMODATION__ROOMDETAILS", E.ACCOMMODATION__SEARCH = "ACCOMMODATION__SEARCH", E.BOOKING_HOTEL_BOOKING_DETAIL = "BOOKING_HOTEL_BOOKING_DETAIL", E.BOOKING_HOTEL_CONFIRMATION = "BOOKING_HOTEL_CONFIRMATION", E.BOOKING_HOTEL_INDEX = "BOOKING_HOTEL_INDEX", E.BOOKING_HOTEL_MANAGE_BOOKING = "BOOKING_HOTEL_MANAGE_BOOKING", E.BOOKING_HOTEL_PROPERTY = "BOOKING_HOTEL_PROPERTY", E.BOOKING_LIST = "BOOKING_LIST", E.CAR__CONFIRMATION = "CAR__CONFIRMATION", E.CAR__MANAGE_BOOKING = "CAR__MANAGE_BOOKING", E.DUMMY_PAGE = "DUMMY_PAGE", E.EMK_CT_EMAIL = "EMK_CT_EMAIL", E.EMK_PRE_TRIP = "EMK_PRE_TRIP", E.FLIGHT__CHECKOUT = "FLIGHT__CHECKOUT", E.FLIGHT__CHECKOUT2 = "FLIGHT__CHECKOUT2", E.FLIGHT__CHECKOUT3 = "FLIGHT__CHECKOUT3", E.FLIGHT__CHECKOUT_TICKET_TYPE = "FLIGHT__CHECKOUT_TICKET_TYPE", E.FLIGHT__CONFIRMATION = "FLIGHT__CONFIRMATION", E.FLIGHT__CONFIRMATION_EMAIL = "FLIGHT__CONFIRMATION_EMAIL", E.FLIGHT__FLIGHTDETAILS = "FLIGHT__FLIGHTDETAILS", E.FLIGHT__MANAGE_BOOKING = "FLIGHT__MANAGE_BOOKING", E.FLIGHT__SEARCHRESULTS = "FLIGHT__SEARCHRESULTS", E.MYTRIPS = "MYTRIPS", E.PROPERTY_PAGE = "PROPERTY_PAGE", E.SEARCH_RESULTS_PAGE = "SEARCH_RESULTS_PAGE", E.UNKNOWN_PAGE = "UNKNOWN_PAGE"
                }(YN || (YN = {})),
                function(E) {
                    E.BOOK_PROCESS1 = "BOOK_PROCESS1", E.BOOK_PROCESS2 = "BOOK_PROCESS2", E.HOME_PAGE = "HOME_PAGE", E.PROPERTY_PAGE = "PROPERTY_PAGE", E.SEARCH_RESULTS = "SEARCH_RESULTS"
                }(BN || (BN = {})),
                function(E) {
                    E.PT_DEFAULT = "PT_DEFAULT", E.PT_LAST_MINUTE = "PT_LAST_MINUTE", E.PT_LOS = "PT_LOS", E.PT_OBP = "PT_OBP"
                }(dN || (dN = {})),
                function(E) {
                    E.CREDIT_NOTE = "CREDIT_NOTE", E.DIRECT_INVOICING = "DIRECT_INVOICING"
                }(VN || (VN = {})),
                function(E) {
                    E.PAY_NOW = "PAY_NOW", E.UPDATE_CC = "UPDATE_CC"
                }(KN || (KN = {})),
                function(E) {
                    E.PAY_LATER = "PAY_LATER", E.PAY_LATER_NO_CC = "PAY_LATER_NO_CC", E.PAY_NOW = "PAY_NOW", E.PAY_TO_PROPERTY = "PAY_TO_PROPERTY"
                }(vN || (vN = {})),
                function(E) {
                    E.STRIPE_PAYOUT = "STRIPE_PAYOUT", E.WITHDRAW_UUID = "WITHDRAW_UUID"
                }(hN || (hN = {})),
                function(E) {
                    E.RESERVATIONS = "RESERVATIONS", E.REVENUE = "REVENUE", E.ROOM_NIGHTS = "ROOM_NIGHTS"
                }(bN || (bN = {})),
                function(E) {
                    E.ALL_INCLUSIVE = "ALL_INCLUSIVE", E.BREAKFAST = "BREAKFAST", E.DINNER = "DINNER", E.LUNCH = "LUNCH"
                }(WN || (WN = {})),
                function(E) {
                    E.NO = "NO", E.UNKNOWN = "UNKNOWN", E.UPON_REQUEST = "UPON_REQUEST", E.YES = "YES"
                }(gN || (gN = {})),
                function(E) {
                    E.GOOGLE = "GOOGLE", E.HERE = "HERE"
                }(mN || (mN = {})),
                function(E) {
                    E.CANCEL_INFO = "CANCEL_INFO", E.CONFIRMATION_MODAL = "CONFIRMATION_MODAL", E.DUMMY_PLACEMENT = "DUMMY_PLACEMENT", E.GET_TO_THE_PROPERTY = "GET_TO_THE_PROPERTY", E.GET_TO_THE_PROPERTY_MODAL = "GET_TO_THE_PROPERTY_MODAL", E.HOTEL_PAGE_TOP_INFO = "HOTEL_PAGE_TOP_INFO", E.HP_PLACEMENT = "HP_PLACEMENT", E.LIST_INLINE_BANNER = "LIST_INLINE_BANNER", E.MAIN_COLUMN = "MAIN_COLUMN", E.MODAL = "MODAL", E.PAGE_INFO = "PAGE_INFO", E.PLAN_AHEAD = "PLAN_AHEAD", E.PLAN_AHEAD_MODAL = "PLAN_AHEAD_MODAL", E.PLAN_AHEAD_TAGLINE = "PLAN_AHEAD_TAGLINE", E.SIDE_COLUMN = "SIDE_COLUMN", E.TRIP_DIFFERENT_PRODUCT = "TRIP_DIFFERENT_PRODUCT", E.TRIP_NEXT_STEP = "TRIP_NEXT_STEP", E.UPCOMING_TRIP = "UPCOMING_TRIP", E.VALUE_BANNER = "VALUE_BANNER", E.raw_output = "raw_output", E.under_booking = "under_booking"
                }(yN || (yN = {})),
                function(E) {
                    E.ANDROID = "ANDROID", E.IOS = "IOS", E.MDOT = "MDOT", E.WWW = "WWW"
                }(kN || (kN = {})),
                function(E) {
                    E.BEING_CONVERTED = "BEING_CONVERTED", E.CLASSIC_POLICY = "CLASSIC_POLICY", E.PAYMENTS_CONVERTED = "PAYMENTS_CONVERTED", E.SELF_MANAGED = "SELF_MANAGED", E.SELF_MANAGED_LITE = "SELF_MANAGED_LITE", E.THREE = "THREE", E.UNKNOWN = "UNKNOWN"
                }(XN || (XN = {})),
                function(E) {
                    E.CANCELLATION = "CANCELLATION"
                }(wN || (wN = {})),
                function(E) {
                    E.INDOOR = "INDOOR", E.INDOOR_AND_OUTDOOR = "INDOOR_AND_OUTDOOR", E.OUTDOOR = "OUTDOOR", E.UNKNOWN_LOCATION = "UNKNOWN_LOCATION"
                }(QN || (QN = {})),
                function(E) {
                    E.BY_COUNTRY = "BY_COUNTRY", E.BY_REGION = "BY_REGION"
                }(ZN || (ZN = {})),
                function(E) {
                    E.APARTMENT_LIKE = "APARTMENT_LIKE", E.HOTELS_AND_OTHERS = "HOTELS_AND_OTHERS", E.HOUSE_LIKE = "HOUSE_LIKE"
                }(jN || (jN = {})),
                function(E) {
                    E.FREE_CANCELLATION = "FREE_CANCELLATION", E.MIX = "MIX", E.NON_REFUNDABLE = "NON_REFUNDABLE", E.SPECIAL_CONDITION = "SPECIAL_CONDITION"
                }(xN || (xN = {})),
                function(E) {
                    E.CANCELLED_BY_GUEST = "CANCELLED_BY_GUEST", E.CANCELLED_BY_HOTEL = "CANCELLED_BY_HOTEL", E.FRAUDULENT = "FRAUDULENT"
                }(JN || (JN = {})),
                function(E) {
                    E.CURRENT_BOOKING = "CURRENT_BOOKING", E.PAST_BOOKING = "PAST_BOOKING", E.UPCOMING_BOOKING = "UPCOMING_BOOKING"
                }(qN || (qN = {})),
                function(E) {
                    E.CANCELLED = "CANCELLED", E.CONFIRMED = "CONFIRMED"
                }(zN || (zN = {})),
                function(E) {
                    E.BUSINESS = "BUSINESS", E.LEISURE = "LEISURE", E.UNKNOWN = "UNKNOWN"
                }($N || ($N = {})),
                function(E) {
                    E.NONE = "NONE", E.PREFERRED = "PREFERRED", E.PREFERRED_PLUS = "PREFERRED_PLUS"
                }(EO || (EO = {})),
                function(E) {
                    E.PER_NIGHT = "PER_NIGHT", E.PER_STAY = "PER_STAY"
                }(_O || (_O = {})),
                function(E) {
                    E.DETAILED = "DETAILED", E.FIXED = "FIXED", E.FREE = "FREE", E.PERCENTAGE = "PERCENTAGE", E.PT_DEFAULT = "PT_DEFAULT", E.PT_IHG = "PT_IHG", E.PT_LAST_MINUTE = "PT_LAST_MINUTE", E.PT_LENGTH_OF_STAY = "PT_LENGTH_OF_STAY", E.PT_OCCUPANCY_BASED_PRICING = "PT_OCCUPANCY_BASED_PRICING", E.PT_UNKNOWN = "PT_UNKNOWN"
                }(NO || (NO = {})),
                function(E) {
                    E.NO_PRIVACY_LEVEL = "NO_PRIVACY_LEVEL", E.PRIVACY_LEVEL_0 = "PRIVACY_LEVEL_0", E.PRIVACY_LEVEL_1 = "PRIVACY_LEVEL_1", E.PRIVACY_LEVEL_2 = "PRIVACY_LEVEL_2", E.PRIVACY_LEVEL_3 = "PRIVACY_LEVEL_3", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(OO || (OO = {})),
                function(E) {
                    E.ACCOMMODATIONS = "ACCOMMODATIONS", E.AIRPORT_TAXIS = "AIRPORT_TAXIS", E.ATTRACTIONS = "ATTRACTIONS", E.CARS = "CARS", E.FLIGHTS = "FLIGHTS", E.PACKAGES = "PACKAGES"
                }(AO || (AO = {})),
                function(E) {
                    E.INSURANCE = "INSURANCE"
                }(tO || (tO = {})),
                function(E) {
                    E.BookAndUnlock = "BookAndUnlock", E.FreeRoomUpgrade = "FreeRoomUpgrade", E.InstantCredit = "InstantCredit", E.InstantDiscount = "InstantDiscount", E.InstantVoucher = "InstantVoucher", E.OneOffVoucher = "OneOffVoucher", E.SpendAndUnlock = "SpendAndUnlock"
                }(eO || (eO = {})),
                function(E) {
                    E.COUNTRY_RATE = "COUNTRY_RATE", E.EARLY_BOOKER_DEAL = "EARLY_BOOKER_DEAL", E.FREE_NIGHTS_DEAL = "FREE_NIGHTS_DEAL", E.LAST_MINUTE_DEAL = "LAST_MINUTE_DEAL", E.LIMITED_TIME_DEAL = "LIMITED_TIME_DEAL", E.MOBILE_RATE = "MOBILE_RATE"
                }(TO || (TO = {})),
                function(E) {
                    E.CREATED = "CREATED", E.DEACTIVATED = "DEACTIVATED", E.NOOP = "NOOP", E.UPDATED = "UPDATED"
                }(nO || (nO = {})),
                function(E) {
                    E.UNITED_STATES = "UNITED_STATES"
                }(IO || (IO = {})),
                function(E) {
                    E.ACTIVE = "ACTIVE", E.DELETE = "DELETE", E.INACTIVE = "INACTIVE"
                }(RO || (RO = {})),
                function(E) {
                    E.PROPERTY = "PROPERTY", E.ROOM = "ROOM", E.UNKNOWN = "UNKNOWN"
                }(iO || (iO = {})),
                function(E) {
                    E.AREA = "AREA", E.FACILITY = "FACILITY", E.ICON = "ICON", E.OCCUPANCY = "OCCUPANCY", E.TEXT = "TEXT"
                }(rO || (rO = {})),
                function(E) {
                    E.BEACH_FRONT = "BEACH_FRONT", E.HAS_BEACH = "HAS_BEACH", E.HAS_FREE_PRIVATE_BEACH = "HAS_FREE_PRIVATE_BEACH", E.HAS_PAID_PRIVATE_BEACH = "HAS_PAID_PRIVATE_BEACH", E.HAS_PRIVATE_BEACH = "HAS_PRIVATE_BEACH", E.SKI_TO_DOOR = "SKI_TO_DOOR"
                }(SO || (SO = {})),
                function(E) {
                    E.AVAILABLE = "AVAILABLE", E.FANTASTIC = "FANTASTIC", E.GOOD = "GOOD", E.GREAT = "GREAT", E.NONE = "NONE", E.PERFECT = "PERFECT", E.VERY_GOOD = "VERY_GOOD"
                }(oO || (oO = {})),
                function(E) {
                    E.BATHROOM = "BATHROOM", E.KITCHEN = "KITCHEN", E.VIEW = "VIEW"
                }(LO || (LO = {})),
                function(E) {
                    E.ALL_INCLUSIVE = "ALL_INCLUSIVE", E.BREAKFAST = "BREAKFAST", E.BREAKFAST_DINNER = "BREAKFAST_DINNER", E.BREAKFAST_LUNCH = "BREAKFAST_LUNCH", E.BREAKFAST_LUNCH_DINNER = "BREAKFAST_LUNCH_DINNER", E.DINNER = "DINNER", E.LUNCH = "LUNCH", E.LUNCH_DINNER = "LUNCH_DINNER", E.NONE = "NONE"
                }(DO || (DO = {})),
                function(E) {
                    E.C = "C", E.L0 = "L0", E.L1 = "L1", E.L2 = "L2", E.L3 = "L3"
                }(CO || (CO = {})),
                function(E) {
                    E.COMMUNITY = "COMMUNITY", E.ECOSYSTEM = "ECOSYSTEM", E.GREENHOUSE = "GREENHOUSE", E.NONE = "NONE", E.WASTE = "WASTE", E.WATER = "WATER"
                }(uO || (uO = {})),
                function(E) {
                    E.BRONZE = "BRONZE", E.GOLD = "GOLD", E.NONE = "NONE", E.SILVER = "SILVER"
                }(PO || (PO = {})),
                function(E) {
                    E.ALL_BOOKING_HOME = "ALL_BOOKING_HOME", E.SAME_ACCOMMODATION_TYPE = "SAME_ACCOMMODATION_TYPE", E.SAME_BOOKING_HOME_GROUP = "SAME_BOOKING_HOME_GROUP"
                }(aO || (aO = {})),
                function(E) {
                    E.PULSE_ANDROID = "PULSE_ANDROID", E.PULSE_IOS = "PULSE_IOS"
                }(sO || (sO = {})),
                function(E) {
                    E.ACCESS_DENIED = "ACCESS_DENIED", E.ACCESS_GRANTED = "ACCESS_GRANTED", E.BLACKLISTED = "BLACKLISTED", E.PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION"
                }(cO || (cO = {})),
                function(E) {
                    E.ACCESS_REVOKED = "ACCESS_REVOKED", E.ACCESS_REVOKE_REQUESTED = "ACCESS_REVOKE_REQUESTED", E.APP_DELETED = "APP_DELETED", E.APP_OK = "APP_OK", E.BROKEN_TOKEN = "BROKEN_TOKEN", E.LOGOUT = "LOGOUT", E.MANUALLY_DEACTIVATED = "MANUALLY_DEACTIVATED"
                }(UO || (UO = {})),
                function(E) {
                    E.BUSINESS = "BUSINESS", E.LEISURE = "LEISURE", E.OTHER = "OTHER"
                }(MO || (MO = {})),
                function(E) {
                    E.AVAILABLE = "AVAILABLE", E.FANTASTIC = "FANTASTIC", E.GOOD = "GOOD", E.GREAT = "GREAT", E.NONE = "NONE", E.PERFECT = "PERFECT", E.VERY_GOOD = "VERY_GOOD"
                }(lO || (lO = {})),
                function(E) {
                    E.BATHROOM = "BATHROOM", E.BATHROOM_GROUP = "BATHROOM_GROUP", E.BATHROOM_PRIVATE = "BATHROOM_PRIVATE", E.BATHROOM_SHARED = "BATHROOM_SHARED", E.KITCHEN = "KITCHEN", E.KITCHENETTE = "KITCHENETTE", E.OTHER = "OTHER", E.UNKNOWN = "UNKNOWN", E.UNRECOGNIZED = "UNRECOGNIZED", E.VIEW = "VIEW"
                }(fO || (fO = {})),
                function(E) {
                    E.ALL_INCLUSIVE = "ALL_INCLUSIVE", E.BREAKFAST = "BREAKFAST", E.BREAKFAST_DINNER = "BREAKFAST_DINNER", E.BREAKFAST_LUNCH = "BREAKFAST_LUNCH", E.BREAKFAST_LUNCH_DINNER = "BREAKFAST_LUNCH_DINNER", E.DINNER = "DINNER", E.LUNCH = "LUNCH", E.LUNCH_DINNER = "LUNCH_DINNER", E.NONE = "NONE"
                }(GO || (GO = {})),
                function(E) {
                    E.PER_NIGHT = "PER_NIGHT", E.PER_STAY = "PER_STAY"
                }(FO || (FO = {})),
                function(E) {
                    E.DETAILED = "DETAILED", E.FIXED = "FIXED", E.FREE = "FREE", E.PERCENTAGE = "PERCENTAGE"
                }(pO || (pO = {})),
                function(E) {
                    E.CRIB = "CRIB", E.EXISTING_BED = "EXISTING_BED", E.EXTRA_BED = "EXTRA_BED"
                }(HO || (HO = {})),
                function(E) {
                    E.FREE_CANCELLATION = "FREE_CANCELLATION", E.FULL_PREPAYMENT = "FULL_PREPAYMENT", E.NON_REFUNDABLE = "NON_REFUNDABLE", E.NON_REFUNDABLE_ANY_MORE = "NON_REFUNDABLE_ANY_MORE", E.NO_PREPAYMENT = "NO_PREPAYMENT", E.PARTIALLY_REFUNDABLE = "PARTIALLY_REFUNDABLE", E.PARTIAL_PREPAYMENT = "PARTIAL_PREPAYMENT", E.UNKNOWN_POLICY = "UNKNOWN_POLICY"
                }(YO || (YO = {})),
                function(E) {
                    E.DOTS = "DOTS", E.NONE = "NONE", E.STARS = "STARS", E.TILES = "TILES"
                }(BO || (BO = {})),
                function(E) {
                    E.DISAMBIGUATION_FAILED = "DISAMBIGUATION_FAILED", E.ROBOT_TO_LANDING_PAGE = "ROBOT_TO_LANDING_PAGE", E.UNKNOWN = "UNKNOWN", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(dO || (dO = {})),
                function(E) {
                    E.AIRPORT = "AIRPORT", E.BUS_STATION = "BUS_STATION", E.DEFAULT = "DEFAULT", E.FERRY_PORT = "FERRY_PORT", E.HOTEL_DELIVERY = "HOTEL_DELIVERY", E.TRAIN_STATION = "TRAIN_STATION"
                }(VO || (VO = {})),
                function(E) {
                    E.REQUEST_IS_DONE = "REQUEST_IS_DONE", E.REQUEST_IS_NEW = "REQUEST_IS_NEW", E.REQUEST_TO_BE_DELETED = "REQUEST_TO_BE_DELETED"
                }(KO || (KO = {})),
                function(E) {
                    E.CORRECT = "CORRECT", E.DISCLOSE = "DISCLOSE", E.FORGET = "FORGET", E.REVOKE = "REVOKE", E.UNSHARE = "UNSHARE", E.UNSUBSCRIBE = "UNSUBSCRIBE"
                }(vO || (vO = {})),
                function(E) {
                    E.NEEDED = "NEEDED", E.NOT_NEEDED = "NOT_NEEDED", E.NOT_POSSIBLE = "NOT_POSSIBLE", E.UNKNOWN_RESERVATION = "UNKNOWN_RESERVATION"
                }(hO || (hO = {})),
                function(E) {
                    E.ACTION_REQUIRED = "ACTION_REQUIRED", E.CANCELLED = "CANCELLED", E.CONFIRMED = "CONFIRMED", E.PENDING = "PENDING", E.UNKNOWN = "UNKNOWN"
                }(bO || (bO = {})),
                function(E) {
                    E.BOOK = "BOOK", E.STAY = "STAY"
                }(WO || (WO = {})),
                function(E) {
                    E.NEGATIVE_TEXT = "NEGATIVE_TEXT", E.POSITIVE_TEXT = "POSITIVE_TEXT", E.TITLE = "TITLE"
                }(gO || (gO = {})),
                function(E) {
                    E.BUSINESS_TRAVELLER = "BUSINESS_TRAVELLER", E.COUPLE = "COUPLE", E.FAMILY_WITH_CHILDREN = "FAMILY_WITH_CHILDREN", E.REVIEW_CATEGORY_GROUP_OF_FRIENDS = "REVIEW_CATEGORY_GROUP_OF_FRIENDS", E.SOLO_TRAVELLER = "SOLO_TRAVELLER", E.TOTAL = "TOTAL"
                }(mO || (mO = {})),
                function(E) {
                    E.DESTINATION = "DESTINATION", E.PROPERTY = "PROPERTY"
                }(yO || (yO = {})),
                function(E) {
                    E.ALL = "ALL", E.REVIEW_ADJ_AVERAGE_PASSABLE = "REVIEW_ADJ_AVERAGE_PASSABLE", E.REVIEW_ADJ_GOOD = "REVIEW_ADJ_GOOD", E.REVIEW_ADJ_POOR = "REVIEW_ADJ_POOR", E.REVIEW_ADJ_SUPERB = "REVIEW_ADJ_SUPERB", E.REVIEW_ADJ_VERY_POOR = "REVIEW_ADJ_VERY_POOR"
                }(kO || (kO = {})),
                function(E) {
                    E.PHOTO_STREAM_HELPFUL = "PHOTO_STREAM_HELPFUL", E.PROPERTY_REVIEW_HELPFUL = "PROPERTY_REVIEW_HELPFUL", E.PROPERTY_REVIEW_NOT_HELPFUL = "PROPERTY_REVIEW_NOT_HELPFUL"
                }(XO || (XO = {})),
                function(E) {
                    E.PARTNERSHIP_REWARDS = "PARTNERSHIP_REWARDS", E.REWARDS = "REWARDS"
                }(wO || (wO = {})),
                function(E) {
                    E.PARTNERSHIP_REWARDS = "PARTNERSHIP_REWARDS", E.REWARDS = "REWARDS"
                }(QO || (QO = {})),
                function(E) {
                    E.GENIUS_ROOM_UPGRADE = "GENIUS_ROOM_UPGRADE", E.MEAL_PLAN = "MEAL_PLAN", E.VACATION_RENTAL_PROMO = "VACATION_RENTAL_PROMO"
                }(ZO || (ZO = {})),
                function(E) {
                    E.COMPLETED = "COMPLETED", E.FAILED = "FAILED", E.LOADING = "LOADING"
                }(jO || (jO = {})),
                function(E) {
                    E.DISCOUNT = "DISCOUNT", E.REWARD = "REWARD"
                }(xO || (xO = {})),
                function(E) {
                    E.FACILITY = "FACILITY", E.PRIVACY = "PRIVACY", E.ROOM_SIZE = "ROOM_SIZE", E.WIFI = "WIFI"
                }(JO || (JO = {})),
                function(E) {
                    E.FL_CREDITCARD_REQUIRED = "FL_CREDITCARD_REQUIRED", E.FL_IMPLICIT_GENIUS = "FL_IMPLICIT_GENIUS", E.FL_NO_CREDITCARD_REQUIRED = "FL_NO_CREDITCARD_REQUIRED", E.FL_NO_CREDITCARD_REQUIRED_DOMESTIC = "FL_NO_CREDITCARD_REQUIRED_DOMESTIC", E.FL_OCCUPANCY_BASED_PRICING = "FL_OCCUPANCY_BASED_PRICING", E.FL_UNKNOWN = "FL_UNKNOWN"
                }(qO || (qO = {})),
                function(E) {
                    E.CHECK_IN_HOURS_NOT_VALID = "CHECK_IN_HOURS_NOT_VALID", E.DATES_NOT_AVAILABLE = "DATES_NOT_AVAILABLE", E.MISSING_INFORMATION = "MISSING_INFORMATION", E.NOT_COMFORTABLE = "NOT_COMFORTABLE", E.NOT_FIT_NEEDS = "NOT_FIT_NEEDS"
                }(zO || (zO = {})),
                function(E) {
                    E.EMAIL_SENDING_ERROR = "EMAIL_SENDING_ERROR", E.ENERGY_SERVICE_FAILED = "ENERGY_SERVICE_FAILED", E.FIN_API_SERVICE_FAILED = "FIN_API_SERVICE_FAILED", E.GET_PENDING_REQUESTS_COUNT_FAILED = "GET_PENDING_REQUESTS_COUNT_FAILED", E.GUEST_COMMENT_RESTRICTED_PATTERN = "GUEST_COMMENT_RESTRICTED_PATTERN", E.INVALID_JSON_OBJECT = "INVALID_JSON_OBJECT", E.LOGGING_ERROR = "LOGGING_ERROR", E.MISSING_PARAMETER = "MISSING_PARAMETER", E.NOTIFICATION_ERROR = "NOTIFICATION_ERROR", E.NO_AVAILABILITY = "NO_AVAILABILITY", E.NO_AVAILABILITY_FOR_BLOCK_ID_MISMATCH = "NO_AVAILABILITY_FOR_BLOCK_ID_MISMATCH", E.PRICE_IS_NOT_VALID = "PRICE_IS_NOT_VALID", E.PROPERTY_NOT_FOUND = "PROPERTY_NOT_FOUND", E.PROPERTY_PAGE_PARAMETERS_NOT_VALID = "PROPERTY_PAGE_PARAMETERS_NOT_VALID", E.PROPERTY_PAGE_SERVICE_FAILED = "PROPERTY_PAGE_SERVICE_FAILED", E.PROPERTY_REQUEST_NOTIFICATION_DETAIL_ERROR = "PROPERTY_REQUEST_NOTIFICATION_DETAIL_ERROR", E.REQUEST_BOOK_WINDOW_LESS_THAN_TWO_DAYS = "REQUEST_BOOK_WINDOW_LESS_THAN_TWO_DAYS", E.REQUEST_IS_NOT_VALID = "REQUEST_IS_NOT_VALID", E.RTB_REQUEST_IS_BOOKED = "RTB_REQUEST_IS_BOOKED", E.RTB_REQUEST_IS_EXPIRED = "RTB_REQUEST_IS_EXPIRED", E.RTB_REQUEST_NOT_FOUND = "RTB_REQUEST_NOT_FOUND", E.RTB_STATUS_CAN_NOT_CHANGE = "RTB_STATUS_CAN_NOT_CHANGE", E.SOYLENT_SERVICE_FAILED = "SOYLENT_SERVICE_FAILED", E.STAFF_NOT_AUTHORIZED_BEFORE_UPDATING_STATUS = "STAFF_NOT_AUTHORIZED_BEFORE_UPDATING_STATUS", E.TRANSLATION_SERVICE_FAILED = "TRANSLATION_SERVICE_FAILED", E.UAS_SERVICE_FAILED = "UAS_SERVICE_FAILED", E.UNHANDLED_EXCEPTION = "UNHANDLED_EXCEPTION", E.USER_ID_IS_NOT_VALID = "USER_ID_IS_NOT_VALID", E.USER_NOT_LOGGED_IN = "USER_NOT_LOGGED_IN"
                }($O || ($O = {})),
                function(E) {
                    E.APPROVED = "APPROVED", E.BOOKED = "BOOKED", E.CANCELLED_BY_GUEST = "CANCELLED_BY_GUEST", E.CANCELLED_BY_PARTNER = "CANCELLED_BY_PARTNER", E.CREATED = "CREATED", E.EXPIRED_AFTER_APPROVAL = "EXPIRED_AFTER_APPROVAL", E.EXPIRED_PENDING_APPROVAL = "EXPIRED_PENDING_APPROVAL", E.PENDING_APPROVAL = "PENDING_APPROVAL", E.REJECTED = "REJECTED"
                }(EA || (EA = {})),
                function(E) {
                    E.CRIB = "CRIB", E.EXISTING_BED = "EXISTING_BED", E.EXTRA_BED = "EXTRA_BED", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(_A || (_A = {})),
                function(E) {
                    E.COMPETITIVE_SET = "COMPETITIVE_SET", E.MARKET = "MARKET", E.NONE = "NONE", E.PEER_GROUP = "PEER_GROUP", E.YEAR_OVER_YEAR = "YEAR_OVER_YEAR"
                }(NA || (NA = {})),
                function(E) {
                    E.DAILY = "DAILY", E.MONTHLY = "MONTHLY", E.WEEKLY = "WEEKLY"
                }(OA || (OA = {})),
                function(E) {
                    E.BOOKED = "BOOKED", E.STAYED = "STAYED"
                }(AA || (AA = {})),
                function(E) {
                    E.AIRPORT = "AIRPORT", E.CHAIN = "CHAIN", E.CITY = "CITY", E.COUNTRY = "COUNTRY", E.DISTRICT = "DISTRICT", E.HOTEL = "HOTEL", E.IATA = "IATA", E.LANDMARK = "LANDMARK", E.LATLONG = "LATLONG", E.NO_DEST_TYPE = "NO_DEST_TYPE", E.REGION = "REGION", E.SUB_REGION = "SUB_REGION", E.UNRECOGNIZED = "UNRECOGNIZED"
                }(tA || (tA = {})),
                function(E) {
                    E.AGGREGATED_ROOM_STATUS = "AGGREGATED_ROOM_STATUS", E.AMOUNT_INVOICED_OR_ROOM_PRICE_SUM = "AMOUNT_INVOICED_OR_ROOM_PRICE_SUM", E.BOOKER_FIRSTNAME = "BOOKER_FIRSTNAME", E.BOOKER_LASTNAME = "BOOKER_LASTNAME", E.COMMISSION_AMOUNT = "COMMISSION_AMOUNT", E.COMMUNICATION = "COMMUNICATION", E.CREATED_AT = "CREATED_AT", E.HOTEL_ID = "HOTEL_ID", E.ID = "ID", E.MAX_CHECKOUT = "MAX_CHECKOUT", E.MIN_CHECKIN = "MIN_CHECKIN", E.PHISHING_GUEST_FRAUDULENTLY_CHARGED = "PHISHING_GUEST_FRAUDULENTLY_CHARGED", E.PHISHING_INCIDENT_CREATED = "PHISHING_INCIDENT_CREATED", E.ROOM_IDS = "ROOM_IDS", E.SPECIAL_REQUESTS = "SPECIAL_REQUESTS"
                }(eA || (eA = {})),
                function(E) {
                    E.BARE = "BARE", E.LIST = "LIST", E.LIST_INSET_MARGINS = "LIST_INSET_MARGINS", E.NONE = "NONE"
                }(TA || (TA = {})),
                function(E) {
                    E.SMS_24H = "SMS_24H", E.SMS_48H = "SMS_48H", E.SMS_72H = "SMS_72H", E.SMS_ALL = "SMS_ALL", E.SMS_DISABLED = "SMS_DISABLED", E.UNKNOWN = "UNKNOWN"
                }(nA || (nA = {})),
                function(E) {
                    E.FRIDAY = "FRIDAY", E.FRIDAY_ALL_ROOMS = "FRIDAY_ALL_ROOMS", E.HOURLY = "HOURLY", E.HOURLY_ALL_ROOMS = "HOURLY_ALL_ROOMS", E.MONDAY = "MONDAY", E.MONDAY_ALL_ROOMS = "MONDAY_ALL_ROOMS", E.NEXT_DAY = "NEXT_DAY", E.NEXT_DAY_ALL_ROOMS = "NEXT_DAY_ALL_ROOMS", E.NEXT_HOUR = "NEXT_HOUR", E.NEXT_HOUR_ALL_ROOMS = "NEXT_HOUR_ALL_ROOMS", E.SATURDAY = "SATURDAY", E.SATURDAY_ALL_ROOMS = "SATURDAY_ALL_ROOMS", E.SUNDAY = "SUNDAY", E.SUNDAY_ALL_ROOMS = "SUNDAY_ALL_ROOMS", E.THURSDAY = "THURSDAY", E.THURSDAY_ALL_ROOMS = "THURSDAY_ALL_ROOMS", E.TUESDAY = "TUESDAY", E.TUESDAY_ALL_ROOMS = "TUESDAY_ALL_ROOMS", E.UNKNOWN = "UNKNOWN", E.WEDNESDAY = "WEDNESDAY", E.WEDNESDAY_ALL_ROOMS = "WEDNESDAY_ALL_ROOMS"
                }(IA || (IA = {})),
                function(E) {
                    E.ASC = "ASC", E.DESC = "DESC"
                }(RA || (RA = {})),
                function(E) {
                    E.MOST_RELEVANT = "MOST_RELEVANT", E.NEWEST_FIRST = "NEWEST_FIRST", E.OLDEST_FIRST = "OLDEST_FIRST", E.SCORE_ASC = "SCORE_ASC", E.SCORE_DESC = "SCORE_DESC"
                }(iA || (iA = {})),
                function(E) {
                    E.BOOKING_DETAIL = "BOOKING_DETAIL", E.BOOKING_PROCESS_1 = "BOOKING_PROCESS_1", E.BOOKING_PROCESS_2 = "BOOKING_PROCESS_2", E.CONFIRMATION_PAGE = "CONFIRMATION_PAGE", E.INDEX = "INDEX", E.LANDING_PAGE = "LANDING_PAGE", E.PROPERTY_PAGE = "PROPERTY_PAGE", E.ROOM_DETAIL = "ROOM_DETAIL", E.SEARCH_RESULTS = "SEARCH_RESULTS", E.WALLET = "WALLET"
                }(rA || (rA = {})),
                function(E) {
                    E.C = "C", E.L0 = "L0", E.L1 = "L1", E.L2 = "L2", E.L3 = "L3"
                }(SA || (SA = {})),
                function(E) {
                    E.BRONZE = "BRONZE", E.GOLD = "GOLD", E.NONE = "NONE", E.SILVER = "SILVER"
                }(oA || (oA = {})),
                function(E) {
                    E.CANDIDATE = "CANDIDATE", E.CLOSED = "CLOSED", E.OPEN = "OPEN", E.UNKNOWN_STATUS = "UNKNOWN_STATUS"
                }(LA || (LA = {})),
                function(E) {
                    E.CANCELLED = "CANCELLED", E.PAID = "PAID", E.PAYMENT_FAILED = "PAYMENT_FAILED", E.REFUND = "REFUND", E.REFUNDED = "REFUNDED", E.REFUND_FAILED = "REFUND_FAILED", E.SCHEDULED = "SCHEDULED", E.SCHEDULED_NO_CC = "SCHEDULED_NO_CC", E.STORED = "STORED"
                }(DA || (DA = {})),
                function(E) {
                    E.ADDITIVE = "ADDITIVE", E.DEFAULT = "DEFAULT"
                }(CA || (CA = {})),
                function(E) {
                    E.ADDONS = "ADDONS", E.TOP_PAGE = "TOP_PAGE", E.TRIP_INCLUDE = "TRIP_INCLUDE"
                }(uA || (uA = {})),
                function(E) {
                    E.American = "American", E.Asian = "Asian", E.Barbecue = "Barbecue", E.Burgers = "Burgers", E.Chinese = "Chinese", E.Diners = "Diners", E.FastFood = "FastFood", E.FoodCourts = "FoodCourts", E.FoodTrucks = "FoodTrucks", E.French = "French", E.Indian = "Indian", E.International = "International", E.Italian = "Italian", E.Japanese = "Japanese", E.Korean = "Korean", E.Local = "Local", E.Mexican = "Mexican", E.MiddleEastern = "MiddleEastern", E.Pizza = "Pizza", E.Seafood = "Seafood", E.Steakhouses = "Steakhouses", E.Thai = "Thai"
                }(PA || (PA = {})),
                function(E) {
                    E.BEACHFRONT = "BEACHFRONT", E.FAMILY_FRIENDLY = "FAMILY_FRIENDLY", E.INCENTIVES_PAY_NOW = "INCENTIVES_PAY_NOW", E.OUT_OF_STOCK = "OUT_OF_STOCK"
                }(aA || (aA = {})),
                function(E) {
                    E.INSTANT = "INSTANT", E.TWO_WEEKS_AFTER_CHECKOUT = "TWO_WEEKS_AFTER_CHECKOUT", E.UNKNOWN = "UNKNOWN"
                }(sA || (sA = {})),
                function(E) {
                    E.INSTANT = "INSTANT", E.TWO_WEEKS_AFTER_CHECKOUT = "TWO_WEEKS_AFTER_CHECKOUT", E.TWO_WEEKS_AFTER_CHECKOUT_3_MONTHS = "TWO_WEEKS_AFTER_CHECKOUT_3_MONTHS", E.TWO_WEEKS_AFTER_CHECKOUT_VOUCHER = "TWO_WEEKS_AFTER_CHECKOUT_VOUCHER", E.UNKNOWN = "UNKNOWN"
                }(cA || (cA = {})),
                function(E) {
                    E.INSTANT = "INSTANT", E.TWO_WEEKS_AFTER_CHECKOUT = "TWO_WEEKS_AFTER_CHECKOUT", E.TWO_WEEKS_AFTER_CHECKOUT_3_MONTHS = "TWO_WEEKS_AFTER_CHECKOUT_3_MONTHS", E.TWO_WEEKS_AFTER_CHECKOUT_VOUCHER = "TWO_WEEKS_AFTER_CHECKOUT_VOUCHER", E.UNKNOWN = "UNKNOWN"
                }(UA || (UA = {})),
                function(E) {
                    E.NORMAL = "NORMAL", E.URGENT = "URGENT"
                }(MA || (MA = {})),
                function(E) {
                    E.ALL = "ALL", E._03_05 = "_03_05", E._06_08 = "_06_08", E._09_11 = "_09_11", E._12_02 = "_12_02"
                }(lA || (lA = {})),
                function(E) {
                    E.TP_BUSINESS = "TP_BUSINESS", E.TP_LEISURE = "TP_LEISURE", E.TP_UNKNOWN = "TP_UNKNOWN"
                }(fA || (fA = {})),
                function(E) {
                    E.ACCOMMODATION_ARRIVAL = "ACCOMMODATION_ARRIVAL", E.ACCOMMODATION_INSTAY = "ACCOMMODATION_INSTAY", E.ACCOMMODATION_PRETRIPS = "ACCOMMODATION_PRETRIPS", E.ATTRACTION_ARRIVAL = "ATTRACTION_ARRIVAL", E.BHOME_ARRIVAL = "BHOME_ARRIVAL", E.CAR_ARRIVAL = "CAR_ARRIVAL", E.CAR_INTRIP = "CAR_INTRIP", E.POST_TRIP = "POST_TRIP", E.TAXI_ARRIVAL = "TAXI_ARRIVAL"
                }(GA || (GA = {})),
                function(E) {
                    E.CONNECTOR = "CONNECTOR", E.EXPERIENCE = "EXPERIENCE", E.RESERVATION = "RESERVATION"
                }(FA || (FA = {})),
                function(E) {
                    E.CURRENT = "CURRENT", E.PAST = "PAST", E.UPCOMING = "UPCOMING"
                }(pA || (pA = {})),
                function(E) {
                    E.MULTILEG = "MULTILEG", E.ONEWAY = "ONEWAY", E.ROUNDTRIP = "ROUNDTRIP"
                }(HA || (HA = {})),
                function(E) {
                    E.DONE = "DONE", E.FAILED = "FAILED", E.PENDING = "PENDING"
                }(YA || (YA = {})),
                function(E) {
                    E.PRIVATE = "PRIVATE", E.PUBLIC = "PUBLIC", E.UNKNOWN_TYPE = "UNKNOWN_TYPE"
                }(BA || (BA = {})),
                function(E) {
                    E.UNKNOWN_CONNECTION_TYPE = "UNKNOWN_CONNECTION_TYPE", E.WIFI = "WIFI", E.WIRED = "WIRED"
                }(dA || (dA = {})),
                function(E) {
                    E.ARRIVAL = "ARRIVAL", E.BOOKING = "BOOKING", E.DEPARTURE = "DEPARTURE"
                }(VA || (VA = {})),
                function(E) {
                    E.COUNTRY_RATES = "COUNTRY_RATES", E.GENIUS = "GENIUS", E.MOBILE_RATES = "MOBILE_RATES"
                }(KA || (KA = {})),
                function(E) {
                    E.BANNER = "BANNER", E.HISTORY_MODAL = "HISTORY_MODAL", E.INFO_MODAL = "INFO_MODAL", E.LANDING_CARD = "LANDING_CARD", E.LANDING_PAGE = "LANDING_PAGE", E.TIMELINE_MODAL = "TIMELINE_MODAL"
                }(vA || (vA = {})),
                function(E) {
                    E.EXPRESSED = "EXPRESSED", E.PREDICTED = "PREDICTED"
                }(hA || (hA = {})),
                function(E) {
                    E.ANDROID = "ANDROID", E.DESKTOP = "DESKTOP", E.IOS = "IOS", E.MOBILE = "MOBILE", E.TABLET = "TABLET"
                }(bA || (bA = {})),
                function(E) {
                    E.device = "device", E.email = "email", E.frontend = "frontend", E.unknown = "unknown"
                }(WA || (WA = {})),
                function(E) {
                    E.INVALID = "INVALID", E.VALID = "VALID", E.WARNING = "WARNING"
                }(gA || (gA = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION", E.CAR = "CAR", E.TAXI = "TAXI"
                }(mA || (mA = {})),
                function(E) {
                    E.ATTRACTION = "ATTRACTION", E.CAR = "CAR", E.FLIGHT = "FLIGHT", E.PUBLIC_TRANSPORT = "PUBLIC_TRANSPORT", E.TAXI = "TAXI"
                }(yA || (yA = {})),
                function(E) {
                    E.GENERIC_ERROR = "GENERIC_ERROR", E.NOT_ELIGIBLE = "NOT_ELIGIBLE", E.OK = "OK", E.UNKNOWN_RESPONSE_STATUS = "UNKNOWN_RESPONSE_STATUS", E.VERTICAL_ERROR = "VERTICAL_ERROR", E.ZERO_RESULTS = "ZERO_RESULTS"
                }(kA || (kA = {})),
                function(E) {
                    E.ACCOMMODATION = "ACCOMMODATION", E.ATTRACTION = "ATTRACTION", E.BASIC = "BASIC", E.CAR = "CAR", E.FLIGHT = "FLIGHT", E.PREBOOK_TAXI = "PREBOOK_TAXI", E.PUBLIC_TRANSPORT = "PUBLIC_TRANSPORT", E.ROCKET_MILES = "ROCKET_MILES", E.SINGLE_TRIP_INSURANCE = "SINGLE_TRIP_INSURANCE"
                }(XA || (XA = {})),
                function(E) {
                    E.accommodations = "accommodations", E.attractions = "attractions", E.cars = "cars", E.flights = "flights", E.taxi = "taxi"
                }(wA || (wA = {})),
                function(E) {
                    E.MULTI_PROPERTY = "MULTI_PROPERTY", E.SINGLE_PROPERTY = "SINGLE_PROPERTY"
                }(QA || (QA = {})),
                function(E) {
                    E.HELPFUL = "HELPFUL", E.UNHELPFUL = "UNHELPFUL"
                }(ZA || (ZA = {})),
                function(E) {
                    E.IMAGE = "IMAGE", E.TAG = "TAG", E.TEXT = "TEXT"
                }(jA || (jA = {})),
                function(E) {
                    E.XEP_EDITABLE_ON_EXTRANET = "XEP_EDITABLE_ON_EXTRANET", E.XEP_EDITABLE_ON_EXTRANET_AND_API = "XEP_EDITABLE_ON_EXTRANET_AND_API", E.XEP_EDITABLE_ON_EXTRANET_VIEW_API = "XEP_EDITABLE_ON_EXTRANET_VIEW_API", E.XEP_UNKNOWN = "XEP_UNKNOWN"
                }(xA || (xA = {})),
                function(E) {
                    E.AV_BLOCKED_OUT = "AV_BLOCKED_OUT", E.NO_AV_FILTERS_APPLIED = "NO_AV_FILTERS_APPLIED", E.NO_AV_FILTERS_NOT_APPLIED = "NO_AV_FILTERS_NOT_APPLIED", E.UNKNOWN = "UNKNOWN"
                }(JA || (JA = {}))
        },
        73298: function(E, _, N) {
            "use strict";
            N.r(_), N.d(_, {
                default: function() {
                    return z
                }
            });
            var O = N(47169),
                A = N(21930),
                t = N(13736),
                e = N(32735),
                T = N(20011),
                n = N(13613),
                I = N(62950),
                R = N(62691),
                i = N(39476),
                r = N(24094),
                S = N(40841),
                o = N.n(S),
                L = N(21141),
                D = N(47354),
                C = ["action"],
                u = function(E) {
                    var _ = E.action,
                        N = (0, n.Z)(E, C);
                    return e.createElement(R.Kq, {
                        gap: 4
                    }, e.createElement(R.Kq.Item, null, e.createElement(R.lr, N)), _ && e.createElement(R.Kq.Item, null, e.createElement(R.zx, _)))
                },
                P = ["children"],
                a = function(E) {
                    var _ = E.children,
                        N = (0, n.Z)(E, P),
                        O = (0, R.Sj)().isSmall;
                    if (!_) return null;
                    var A = O ? u : R.lr;
                    return e.createElement(A, (0, T.Z)({}, N, {
                        "data-testid": "root"
                    }), _)
                },
                s = "c31adedcf5",
                c = "c6f3be06a3",
                U = "d18f0ef9c5",
                M = "bfade95179",
                l = "a539f8374d",
                f = ["onClick", "attributes", "href"],
                G = ["onHover", "tooltip"];

            function F(E, _) {
                var N = Object.keys(E);
                if (Object.getOwnPropertySymbols) {
                    var O = Object.getOwnPropertySymbols(E);
                    _ && (O = O.filter((function(_) {
                        return Object.getOwnPropertyDescriptor(E, _).enumerable
                    }))), N.push.apply(N, O)
                }
                return N
            }

            function p(E) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var N = null != arguments[_] ? arguments[_] : {};
                    _ % 2 ? F(Object(N), !0).forEach((function(_) {
                        (0, O.Z)(E, _, N[_])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(N)) : F(Object(N)).forEach((function(_) {
                        Object.defineProperty(E, _, Object.getOwnPropertyDescriptor(N, _))
                    }))
                }
                return E
            }
            var H = {
                    GENIUS_DISCOUNT_10: I.PercentageCircleIcon,
                    GENIUS_DISCOUNT_10_15: I.PercentageCircleIcon,
                    GENIUS_DISCOUNT_10_15_20: I.PercentageCircleIcon,
                    GENIUS_FREE_BREAKFAST: I.FoodCoffeeIcon,
                    GENIUS_FREE_ROOM_UPGRADE: I.HotelSingleBedUploadIcon,
                    GENIUS_PRIORITY_CS: I.VipCSOnIcon
                },
                Y = function(E) {
                    var _, N = E.onClick,
                        A = E.attributes,
                        t = E.href,
                        T = (0, n.Z)(E, f),
                        i = T.subtitle,
                        r = T.status,
                        S = T.title,
                        L = T.type,
                        D = "LOCKED" === r ? I.LockClosedIcon : H[L],
                        C = void 0 !== t ? "a" : void 0,
                        u = N && function() {
                            N(T)
                        };
                    return e.createElement(R.xu, {
                        attributes: p(p({}, A), {}, {
                            onClick: u,
                            href: t
                        }),
                        className: o()((_ = {}, (0, O.Z)(_, l, "UNLOCKED" === r), (0, O.Z)(_, U, "LOCKED" === r), (0, O.Z)(_, c, !0), _)),
                        tagName: C,
                        padding: 4
                    }, e.createElement(R.Kq, null, e.createElement(R.Kq, {
                        direction: "row",
                        justifyContent: "space-between"
                    }, e.createElement(R.Kq.Item, {
                        grow: !0
                    }, e.createElement(R.xv, {
                        variant: "strong_2",
                        color: "inherit"
                    }, S)), D && e.createElement(R.JO, {
                        attributes: {
                            role: "presentation"
                        },
                        className: M,
                        size: "medium",
                        svg: D
                    })), e.createElement(R.xv, {
                        variant: "body_2",
                        color: "inherit"
                    }, i)))
                },
                B = function(E) {
                    var _ = E.title,
                        N = E.href;
                    return e.createElement(R.xu, {
                        tagName: "a",
                        padding: 4,
                        attributes: {
                            href: N
                        },
                        className: c
                    }, e.createElement(R.Kq, null, e.createElement(R.Kq.Item, null, e.createElement(L.Z, {
                        inverted: !0
                    })), e.createElement(R.xv, {
                        variant: "body_2",
                        color: "white"
                    }, e.createElement(D.Z, {
                        text: _,
                        variables: {
                            start_bold: "<0>",
                            end_bold: "</0>"
                        },
                        components: [e.createElement("strong", {
                            key: "0"
                        })]
                    }))))
                },
                d = function(E) {
                    var _ = E.onHover,
                        N = E.tooltip,
                        O = (0, n.Z)(E, G),
                        A = (0, R.Sj)().isSmall;
                    return N && !A ? e.createElement(R.J2, {
                        triggerType: "hover",
                        position: "bottom",
                        onOpen: _,
                        size: "medium"
                    }, e.createElement(R.J2.Trigger, {
                        display: "block"
                    }, (function(E) {
                        return e.createElement(Y, p(p({}, O), {}, {
                            attributes: E
                        }))
                    })), e.createElement(R.J2.Content, null, N.map((function(E) {
                        return e.createElement("p", {
                            key: E
                        }, e.createElement(D.Z, {
                            text: E,
                            variables: {
                                start_bold: "<0>",
                                end_bold: "</0>"
                            },
                            components: [e.createElement("strong", {
                                key: "0"
                            })]
                        }))
                    })))) : e.createElement(Y, O)
                },
                V = function(E) {
                    var _ = E.items,
                        N = E.title,
                        O = E.subtitle,
                        A = E.className,
                        t = E.onAfterNavigate,
                        n = E.action,
                        I = (0, i.QT)(),
                        S = (0, R.Sj)().isSmall;
                    if (null === _ || void 0 === _ || !_.length) return null;
                    var o = S ? "large" : "medium",
                        L = _.map((function(E) {
                            return "PROMOTIONAL" === E.type ? e.createElement(B, (0, T.Z)({}, E, {
                                key: E.title
                            })) : e.createElement(d, (0, T.Z)({}, E, {
                                key: E.title
                            }))
                        })),
                        D = I.trans((0, r.t)("a11y_aria_label_carousel_previous")),
                        C = I.trans((0, r.t)("a11y_aria_label_carousel_next_previous"));
                    return e.createElement("section", {
                        "data-testid": "root",
                        className: A
                    }, e.createElement(a, {
                        size: o,
                        title: e.createElement(R.Dx, {
                            title: N,
                            subtitle: O,
                            titleTagName: "h2",
                            variant: "headline_3"
                        }),
                        className: s,
                        previousButtonAriaLabel: D,
                        nextButtonAriaLabel: C,
                        attributes: {
                            "data-testid": "root-carousel"
                        },
                        onAfterNavigate: t,
                        action: n
                    }, L))
                },
                K = N(98178),
                v = N(2446),
                h = N(44393),
                b = N(23673),
                W = N(80827),
                g = N(46447),
                m = N(13260);

            function y(E, _) {
                var N = Object.keys(E);
                if (Object.getOwnPropertySymbols) {
                    var O = Object.getOwnPropertySymbols(E);
                    _ && (O = O.filter((function(_) {
                        return Object.getOwnPropertyDescriptor(E, _).enumerable
                    }))), N.push.apply(N, O)
                }
                return N
            }

            function k(E) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var N = null != arguments[_] ? arguments[_] : {};
                    _ % 2 ? y(Object(N), !0).forEach((function(_) {
                        (0, O.Z)(E, _, N[_])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(N)) : y(Object(N)).forEach((function(_) {
                        Object.defineProperty(E, _, Object.getOwnPropertyDescriptor(N, _))
                    }))
                }
                return E
            }
            var X = {},
                w = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "GeniusBenefitsCarousel"
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
                                            value: "benefitsCarousel"
                                        },
                                        arguments: [],
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
                                                    value: "items"
                                                },
                                                arguments: [],
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
                                                            value: "tooltip"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "type"
                                                        },
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
                                                            value: "status"
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
                        end: 394,
                        source: {
                            body: "\n  query GeniusBenefitsCarousel($input: ProductShellInput!) {\n    productShell(input: $input) {\n      guestAccount {\n        geniusStatus {\n          level\n        }\n      }\n    }\n    geniusGuestData {\n      benefitsCarousel {\n        title\n        subtitle\n        items {\n          title\n          subtitle\n          tooltip\n          type: label\n          status\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var Q, Z, j = N(93354);

            function x(E, _) {
                var N = Object.keys(E);
                if (Object.getOwnPropertySymbols) {
                    var O = Object.getOwnPropertySymbols(E);
                    _ && (O = O.filter((function(_) {
                        return Object.getOwnPropertyDescriptor(E, _).enumerable
                    }))), N.push.apply(N, O)
                }
                return N
            }

            function J(E) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var N = null != arguments[_] ? arguments[_] : {};
                    _ % 2 ? x(Object(N), !0).forEach((function(_) {
                        (0, O.Z)(E, _, N[_])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(N)) : x(Object(N)).forEach((function(_) {
                        Object.defineProperty(E, _, Object.getOwnPropertyDescriptor(N, _))
                    }))
                }
                return E
            }
            var q = function(E) {
                    return {
                        type: "PROMOTIONAL",
                        title: E.subtitle || "",
                        subtitle: "",
                        status: "UNLOCKED"
                    }
                },
                z = function() {
                    var E, _, N, O, T = (0, v.B)(),
                        n = T.siteType,
                        I = T.userIdentity,
                        R = (0, i.QT)(),
                        S = n === K.N.WWW ? 7 : 1006,
                        o = (null !== (E = null === I || void 0 === I ? void 0 : I.authLevel) && void 0 !== E ? E : 0) > 0,
                        L = (O = (0, h.Z)(Q || (Q = (0, t.Z)(["TWULDEZREHDWNZTLZBeMcQYIMdUAZdJAINRe"]))), {
                            isVariant: (0, j.zm)(O) > 0,
                            trackStage: function(E) {
                                return (0, j.ti)(O, E)
                            }
                        }),
                        D = function(E) {
                            var _ = k(k({}, X), E);
                            return m.a(w, _)
                        }({
                            variables: {
                                input: {
                                    product: g.xsH.ACCOMMODATIONS
                                }
                            },
                            ssr: !1
                        }).data;
                    if (!D || !D.geniusGuestData.benefitsCarousel || null === D.geniusGuestData.benefitsCarousel) return null;
                    var C = q(D.geniusGuestData.benefitsCarousel),
                        u = (0, W.K)({
                            searchParams: new URLSearchParams({
                                genius_redirect: "1"
                            })
                        }).href,
                        P = L.isVariant ? {
                            href: u,
                            text: R.trans((0, r.t)("gta_web_homepage_genius_carousel_cta_1")),
                            variant: "tertiary"
                        } : void 0,
                        a = null === (_ = D.productShell.guestAccount) || void 0 === _ || null === (N = _.geniusStatus) || void 0 === N ? void 0 : N.level;
                    o && L.trackStage(1), 1 === a ? L.trackStage(3) : 2 !== a && 3 !== a || L.trackStage(4);
                    var s = {
                        title: D.geniusGuestData.benefitsCarousel.title,
                        items: [C].concat((0, A.Z)(D.geniusGuestData.benefitsCarousel.items)).map((function(E) {
                            return J(J({}, E), {}, {
                                href: u
                            })
                        })),
                        action: P
                    };
                    return e.createElement("div", {
                        "data-qmab-component-id": S
                    }, e.createElement(b.v, {
                        tag: (0, h.Z)(Z || (Z = (0, t.Z)(["TWULDEZREHDWNZTLZBeMcQYIMdUAZdJAINRe"]))),
                        stage: 2
                    }), e.createElement(V, s))
                }
        },
        602: function(E, _, N) {
            "use strict";
            N.d(_, {
                p: function() {
                    return O
                }
            });
            var O = "Booking.com"
        },
        60633: function(E, _, N) {
            "use strict";
            var O = N(20011),
                A = N(47169),
                t = N(13613),
                e = N(20547),
                T = N(62691),
                n = N(24094),
                I = N(39476),
                R = N(32735),
                i = N(602),
                r = ["inverted", "ariaLabel", "size"];

            function S(E, _) {
                var N = Object.keys(E);
                if (Object.getOwnPropertySymbols) {
                    var O = Object.getOwnPropertySymbols(E);
                    _ && (O = O.filter((function(_) {
                        return Object.getOwnPropertyDescriptor(E, _).enumerable
                    }))), N.push.apply(N, O)
                }
                return N
            }
            _.Z = function(E) {
                var _ = E.inverted,
                    N = void 0 !== _ && _,
                    o = E.ariaLabel,
                    L = E.size,
                    D = (0, t.Z)(E, r),
                    C = (0, I.QT)().trans;
                return R.createElement(T.JO, (0, O.Z)({}, function(E) {
                    for (var _ = 1; _ < arguments.length; _++) {
                        var N = null != arguments[_] ? arguments[_] : {};
                        _ % 2 ? S(Object(N), !0).forEach((function(_) {
                            (0, A.Z)(E, _, N[_])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(N)) : S(Object(N)).forEach((function(_) {
                            Object.defineProperty(E, _, Object.getOwnPropertyDescriptor(N, _))
                        }))
                    }
                    return E
                }({
                    ariaLabel: o || C((0, n.t)("www_ge_screenreader_generic_logo", {
                        variables: {
                            b_companyname: i.p
                        }
                    })),
                    size: L || "small"
                }, D), {
                    svg: N ? e.ob : e.YU
                }))
            }
        },
        23673: function(E, _, N) {
            "use strict";
            N.d(_, {
                v: function() {
                    return e
                }
            });
            var O = N(32735),
                A = N(2419),
                t = N(93354);

            function e(E) {
                var _ = E.experimentTag,
                    N = E.tag,
                    e = E.stage,
                    T = E.customGoal,
                    n = E.goalName,
                    I = E.value,
                    R = (0, A.YD)({
                        threshold: 0,
                        triggerOnce: !0
                    }),
                    i = R[0],
                    r = R[1],
                    S = N || _;
                return (0, O.useEffect)((function() {
                    if (r) {
                        if (S) {
                            if (e) return void(0, t.ti)(S, e);
                            if (T) return void(0, t.pj)(S, T)
                        } else if (n) return I ? void(0, t.uf)(n, I) : void(0, t.r9)(n);
                        0
                    }
                }), [r]), O.createElement("div", {
                    ref: i
                })
            }
        },
        2446: function(E, _, N) {
            "use strict";
            N.d(_, {
                B: function() {
                    return A
                }
            });
            var O = N(79399);

            function A() {
                var E = (0, O.T)();
                return {
                    get acceptHeader() {
                        return E.getAcceptHeader()
                    },
                    get actionName() {
                        return E.getActionName()
                    },
                    get affiliate() {
                        return E.getAffiliate()
                    },
                    get basePageUrl() {
                        return E.getBasePageUrl()
                    },
                    get body() {
                        return E.getBody()
                    },
                    get bPlatformEnvironment() {
                        return E.getBPlatformEnvironment()
                    },
                    get CDNOrigin() {
                        return E.getCDNOrigin()
                    },
                    get CSPNonce() {
                        return E.getCSPNonce()
                    },
                    get CSRFToken() {
                        return E.getCSRFToken()
                    },
                    get currency() {
                        return E.getCurrency()
                    },
                    get encryptedCommonOauthState() {
                        return E.getEncryptedCommonOauthState()
                    },
                    get ETSerializedState() {
                        return E.getETSerializedState()
                    },
                    get isInternalIp() {
                        return E.isInternalIp()
                    },
                    get isInternalUser() {
                        return E.isInternalUser()
                    },
                    get isLanding() {
                        return E.isLanding()
                    },
                    get isNormalRequest() {
                        return E.isNormalRequest()
                    },
                    get isRobotRequest() {
                        return E.isRobotRequest()
                    },
                    get language() {
                        return E.getLanguage()
                    },
                    get pageviewId() {
                        return E.getPageviewId()
                    },
                    get partnerIdentity() {
                        return E.getPartnerIdentity()
                    },
                    get publicPath() {
                        return E.getPublicPath()
                    },
                    get sessions() {
                        return E.getSessions()
                    },
                    get siteId() {
                        return E.getSiteId()
                    },
                    get siteType() {
                        return E.getSiteType()
                    },
                    get staffIdentity() {
                        return E.getStaffIdentity()
                    },
                    get userAgent() {
                        return E.getUserAgent()
                    },
                    get userIdentity() {
                        return E.getUserIdentity()
                    },
                    get visitorCountry() {
                        return E.getVisitorCountry()
                    },
                    get visitorCountryRegion() {
                        return E.getVisitorCountryRegion()
                    },
                    get visitorIP() {
                        return E.getVisitorIP()
                    },
                    get visitorUfi() {
                        return E.getVisitorUfi()
                    }
                }
            }
        },
        80827: function(E, _, N) {
            "use strict";
            N.d(_, {
                K: function() {
                    return l
                }
            });
            var O, A, t = N(79399),
                e = N(98178);
            ! function(E) {
                E.admin = "admin", E.app = "app", E.book = "book", E.join = "join"
            }(O || (O = {}));
            var T, n, I, R, i = ((A = {
                    DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
                })[e.N.EXTRANET] = ["hotel_id", "lang", "ses"], A),
                r = {
                    PRODUCTION: (T = {}, T[O.admin] = "admin", T[O.app] = "www", T[O.book] = "secure", T[O.join] = "join", T),
                    STAGING: (n = {}, n[O.admin] = "a", n[O.app] = "w", n[O.book] = "b", n[O.join] = "j", n),
                    KVM: (I = {}, I[O.admin] = ["adm", "devadmin"], I[O.app] = ["app", "devapp"], I[O.book] = ["book", "devbook"], I[O.join] = ["joinapp", "devjoinapp"], I),
                    DQS: (R = {}, R[O.admin] = "admin", R[O.app] = "app", R[O.book] = "book", R[O.join] = "join", R)
                },
                S = "booking.com",
                o = c(r.PRODUCTION),
                L = c(r.STAGING),
                D = c(r.KVM),
                C = c(r.DQS),
                u = new RegExp("^(.*?)\\.?(" + S + "|booking.cn)$"),
                P = new RegExp("^(?:" + L.join("|") + ")(\\d+)$"),
                a = new RegExp("^(\\w+)-(" + D.join("|") + ").*?\\.dev$"),
                s = new RegExp("(?:" + C.join("|") + ")\\.dqs$");

            function c(E) {
                return Object.values(E).flat()
            }

            function U(E, _) {
                var N = new Set;
                null == _ || _.forEach((function(_, O) {
                    N.has(O) ? E.append(O, _) : (E.set(O, _), N.add(O))
                }))
            }

            function M(E) {
                return Array.isArray(E) ? E[0] : E
            }

            function l(E) {
                return function() {
                    var E = (0, t.T)(),
                        _ = E.getBasePageUrl();
                    if (!_) throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                    var N = function(E, _, N, O) {
                        var A = new URLSearchParams,
                            t = _ && i.hasOwnProperty(_) ? _ : "DEFAULT";
                        return i[t].forEach((function(_) {
                            var N = E.searchParams.get(_);
                            N && A.set(_, N)
                        })), "number" === typeof(null == N ? void 0 : N.id) && A.set("aid", N.id.toString()), (null == N ? void 0 : N.label) && A.set("label", N.label.toString()), O && E.searchParams.forEach((function(E, _) {
                            var N;
                            (0 === (N = _).indexOf("exp_") || 0 === N.indexOf("b_feature_running_") || "exp_all" === N || "hotel_account_id" === N || "i_am_from" === N || "my_ip" === N) && A.set(_, E)
                        })), A
                    }(_, E.getSiteType(), E.getAffiliate(), E.isInternalIp());
                    return function(O) {
                        var A = new URL("" + _.origin + _.pathname),
                            t = O.host ? function(E, _) {
                                var N = E.host.match(u);
                                if (!N) return E;
                                var O = N[1],
                                    A = N[2];
                                if ("" === O || o.includes(O)) {
                                    var t = M(r.PRODUCTION[_]);
                                    E.host = t + "." + A
                                } else if (a.test(O)) {
                                    var e = M(r.KVM[_]);
                                    E.host = O.replace(a, "$1-" + e + ".dev." + S)
                                } else if (s.test(O)) {
                                    var T = M(r.DQS[_]);
                                    E.host = T + ".dqs." + S
                                } else if (P.test(O)) {
                                    var n = M(r.STAGING[_]);
                                    E.host = O.replace(P, n + "$1." + S)
                                }
                                return E
                            }(A, O.host) : A;
                        return O.pathname && (t.pathname = O.pathname), t.hash = O.hash || "", E.isRobotRequest() || (U(t.searchParams, N), U(t.searchParams, O.searchParams)), t
                    }
                }()(E)
            }
        },
        40841: function(E, _) {
            var N;
            ! function() {
                "use strict";
                var O = {}.hasOwnProperty;

                function A() {
                    for (var E = [], _ = 0; _ < arguments.length; _++) {
                        var N = arguments[_];
                        if (N) {
                            var t = typeof N;
                            if ("string" === t || "number" === t) E.push(N);
                            else if (Array.isArray(N) && N.length) {
                                var e = A.apply(null, N);
                                e && E.push(e)
                            } else if ("object" === t)
                                for (var T in N) O.call(N, T) && N[T] && E.push(T)
                        }
                    }
                    return E.join(" ")
                }
                E.exports ? (A.default = A, E.exports = A) : void 0 === (N = function() {
                    return A
                }.apply(_, [])) || (E.exports = N)
            }()
        },
        2419: function(E, _, N) {
            "use strict";
            N.d(_, {
                YD: function() {
                    return L
                },
                df: function() {
                    return o
                }
            });
            var O = N(32735);

            function A() {
                return A = Object.assign || function(E) {
                    for (var _ = 1; _ < arguments.length; _++) {
                        var N = arguments[_];
                        for (var O in N) Object.prototype.hasOwnProperty.call(N, O) && (E[O] = N[O])
                    }
                    return E
                }, A.apply(this, arguments)
            }

            function t(E, _) {
                return t = Object.setPrototypeOf || function(E, _) {
                    return E.__proto__ = _, E
                }, t(E, _)
            }
            var e = new Map,
                T = new WeakMap,
                n = 0,
                I = void 0;

            function R(E) {
                return Object.keys(E).sort().filter((function(_) {
                    return void 0 !== E[_]
                })).map((function(_) {
                    return _ + "_" + ("root" === _ ? (N = E.root) ? (T.has(N) || (n += 1, T.set(N, n.toString())), T.get(N)) : "0" : E[_]);
                    var N
                })).toString()
            }

            function i(E, _, N, O) {
                if (void 0 === N && (N = {}), void 0 === O && (O = I), "undefined" === typeof window.IntersectionObserver && void 0 !== O) {
                    var A = E.getBoundingClientRect();
                    return _(O, {
                            isIntersecting: O,
                            target: E,
                            intersectionRatio: "number" === typeof N.threshold ? N.threshold : 0,
                            time: 0,
                            boundingClientRect: A,
                            intersectionRect: A,
                            rootBounds: A
                        }),
                        function() {}
                }
                var t = function(E) {
                        var _ = R(E),
                            N = e.get(_);
                        if (!N) {
                            var O, A = new Map,
                                t = new IntersectionObserver((function(_) {
                                    _.forEach((function(_) {
                                        var N, t = _.isIntersecting && O.some((function(E) {
                                            return _.intersectionRatio >= E
                                        }));
                                        E.trackVisibility && "undefined" === typeof _.isVisible && (_.isVisible = t), null == (N = A.get(_.target)) || N.forEach((function(E) {
                                            E(t, _)
                                        }))
                                    }))
                                }), E);
                            O = t.thresholds || (Array.isArray(E.threshold) ? E.threshold : [E.threshold || 0]), N = {
                                id: _,
                                observer: t,
                                elements: A
                            }, e.set(_, N)
                        }
                        return N
                    }(N),
                    T = t.id,
                    n = t.observer,
                    i = t.elements,
                    r = i.get(E) || [];
                return i.has(E) || i.set(E, r), r.push(_), n.observe(E),
                    function() {
                        r.splice(r.indexOf(_), 1), 0 === r.length && (i.delete(E), n.unobserve(E)), 0 === i.size && (n.disconnect(), e.delete(T))
                    }
            }
            var r = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function S(E) {
                return "function" !== typeof E.children
            }
            var o = function(E) {
                var _, N;

                function e(_) {
                    var N;
                    return (N = E.call(this, _) || this).node = null, N._unobserveCb = null, N.handleNode = function(E) {
                        N.node && (N.unobserve(), E || N.props.triggerOnce || N.props.skip || N.setState({
                            inView: !!N.props.initialInView,
                            entry: void 0
                        })), N.node = E || null, N.observeNode()
                    }, N.handleChange = function(E, _) {
                        E && N.props.triggerOnce && N.unobserve(), S(N.props) || N.setState({
                            inView: E,
                            entry: _
                        }), N.props.onChange && N.props.onChange(E, _)
                    }, N.state = {
                        inView: !!_.initialInView,
                        entry: void 0
                    }, N
                }
                N = E, (_ = e).prototype = Object.create(N.prototype), _.prototype.constructor = _, t(_, N);
                var T = e.prototype;
                return T.componentDidUpdate = function(E) {
                    E.rootMargin === this.props.rootMargin && E.root === this.props.root && E.threshold === this.props.threshold && E.skip === this.props.skip && E.trackVisibility === this.props.trackVisibility && E.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }, T.componentWillUnmount = function() {
                    this.unobserve(), this.node = null
                }, T.observeNode = function() {
                    if (this.node && !this.props.skip) {
                        var E = this.props,
                            _ = E.threshold,
                            N = E.root,
                            O = E.rootMargin,
                            A = E.trackVisibility,
                            t = E.delay,
                            e = E.fallbackInView;
                        this._unobserveCb = i(this.node, this.handleChange, {
                            threshold: _,
                            root: N,
                            rootMargin: O,
                            trackVisibility: A,
                            delay: t
                        }, e)
                    }
                }, T.unobserve = function() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }, T.render = function() {
                    if (!S(this.props)) {
                        var E = this.state,
                            _ = E.inView,
                            N = E.entry;
                        return this.props.children({
                            inView: _,
                            entry: N,
                            ref: this.handleNode
                        })
                    }
                    var t = this.props,
                        e = t.children,
                        T = t.as,
                        n = function(E, _) {
                            if (null == E) return {};
                            var N, O, A = {},
                                t = Object.keys(E);
                            for (O = 0; O < t.length; O++) N = t[O], _.indexOf(N) >= 0 || (A[N] = E[N]);
                            return A
                        }(t, r);
                    return O.createElement(T || "div", A({
                        ref: this.handleNode
                    }, n), e)
                }, e
            }(O.Component);

            function L(E) {
                var _ = void 0 === E ? {} : E,
                    N = _.threshold,
                    A = _.delay,
                    t = _.trackVisibility,
                    e = _.rootMargin,
                    T = _.root,
                    n = _.triggerOnce,
                    I = _.skip,
                    R = _.initialInView,
                    r = _.fallbackInView,
                    S = O.useRef(),
                    o = O.useState({
                        inView: !!R
                    }),
                    L = o[0],
                    D = o[1],
                    C = O.useCallback((function(E) {
                        void 0 !== S.current && (S.current(), S.current = void 0), I || E && (S.current = i(E, (function(E, _) {
                            D({
                                inView: E,
                                entry: _
                            }), _.isIntersecting && n && S.current && (S.current(), S.current = void 0)
                        }), {
                            root: T,
                            rootMargin: e,
                            threshold: N,
                            trackVisibility: t,
                            delay: A
                        }, r))
                    }), [Array.isArray(N) ? N.toString() : N, T, e, n, I, t, r, A]);
                (0, O.useEffect)((function() {
                    S.current || !L.entry || n || I || D({
                        inView: !!R
                    })
                }));
                var u = [C, L.inView, L.entry];
                return u.ref = u[0], u.inView = u[1], u.entry = u[2], u
            }
            o.displayName = "InView", o.defaultProps = {
                threshold: 0,
                triggerOnce: !1,
                initialInView: !1
            }
        },
        13613: function(E, _, N) {
            "use strict";
            N.d(_, {
                Z: function() {
                    return A
                }
            });
            var O = N(66017);

            function A(E, _) {
                if (null == E) return {};
                var N, A, t = (0, O.Z)(E, _);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(E);
                    for (A = 0; A < e.length; A++) N = e[A], _.indexOf(N) >= 0 || Object.prototype.propertyIsEnumerable.call(E, N) && (t[N] = E[N])
                }
                return t
            }
        },
        13736: function(E, _, N) {
            "use strict";

            function O(E, _) {
                return _ || (_ = E.slice(0)), Object.freeze(Object.defineProperties(E, {
                    raw: {
                        value: Object.freeze(_)
                    }
                }))
            }
            N.d(_, {
                Z: function() {
                    return O
                }
            })
        },
        21930: function(E, _, N) {
            "use strict";
            N.d(_, {
                Z: function() {
                    return t
                }
            });
            var O = N(37017);
            var A = N(49139);

            function t(E) {
                return function(E) {
                    if (Array.isArray(E)) return (0, O.Z)(E)
                }(E) || function(E) {
                    if ("undefined" !== typeof Symbol && null != E[Symbol.iterator] || null != E["@@iterator"]) return Array.from(E)
                }(E) || (0, A.Z)(E) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    }
]);
//# sourceMappingURL=https://s3-main-01.booking.com/internal-static/capla/static/js/438.d6e3ed55.chunk.js.map