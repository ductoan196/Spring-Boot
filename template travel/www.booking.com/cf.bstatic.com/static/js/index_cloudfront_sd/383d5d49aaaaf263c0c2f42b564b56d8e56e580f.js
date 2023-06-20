var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(e) {
        return e
    };
if (_i_("e4e:59768525"), B.when({
        events: "ready",
        condition: B.env.b_personalized_layout_id
    }).run(function(e) {
        _i_("e4e:712489dd"), setTimeout(function() {
            _i_("e4e:dca24cc5"),
                function(e) {
                    _i_("e4e:36b5fd66");
                    var t = e("utils/throttled"),
                        i = e("utils/inviewport"),
                        n = e("et"),
                        a = $("[data-qmab-component-id]").toArray().map(function(e) {
                            return _i_("e4e:c14f039d"), _r_({
                                el: $(e),
                                id: Number(e.getAttribute("data-qmab-component-id"))
                            })
                        }),
                        s = [].map(function(e) {
                            return _i_("e4e:2f942a3a"), _r_({
                                el: $(e.selector),
                                id: e.id
                            })
                        }).concat(a);
                    s.forEach(function(e) {
                        _i_("e4e:9c651222"), e.el.click(function() {
                            _i_("e4e:d486362c"), r(B.env.b_personalized_layout_id, "click", e.id, B.env.b_index_personalized_layout_exp_name, B.env.b_index_personalized_layout_exp_variant), n.customGoal("cCGaYSddOEGcHNAdUDUCRPQFAeJQFRURURNcHe", 1), _r_()
                        }), _r_()
                    });
                    var _ = t(function() {
                        _i_("e4e:fef16651");
                        var t = [];
                        s.forEach(function(e) {
                            _i_("e4e:ccaf30e9"), i(e.el) ? r(B.env.b_personalized_layout_id, "view", e.id, B.env.b_index_personalized_layout_exp_name, B.env.b_index_personalized_layout_exp_variant) : t.push(e), _r_()
                        }), s.length ? s = t : $(window).off("scroll", _), _r_()
                    }, 10);

                    function r(e, t, i, n, a) {
                        _i_("e4e:a1954383"), $.ajax({
                            type: "post",
                            dataType: "json",
                            url: "/sendlayoutevents",
                            data: {
                                layout: e,
                                action: t,
                                widget: i,
                                exp_name: n,
                                exp_variant: a,
                                has_open_bookings: B.env.fe_pers_upcoming
                            }
                        }), _r_()
                    }
                    _(), $(window).scroll(_), _r_()
                }(e), _r_()
        }, 5e3), _r_()
    }), _r_(), B.define("c360Tracker", function() {
        _i_("e4e:caa1143c");
        var a = "GfCDATBaFOeBfIcDZDWcDLfMRRKe",
            s = B.et && B.et.track && B.et.track(a) || 0,
            n = {},
            _ = !1,
            r = "C360JSTracker";
        _i_("e4e:3a0d520e"), n = {
            page: {
                page_referrer: document.referrer,
                page_url: window.location.href,
                page_title: document.title
            },
            local: {
                currency: B.env.b_selected_currency
            }
        }, _r_();
        var o = {
            type: "object",
            properties: {
                action_name: {
                    type: "string",
                    description: "action name (ex. element viewed)"
                },
                action_version: {
                    type: "string",
                    description: "action version"
                },
                content: {
                    type: "object",
                    description: "content defined by the registered producer scheme"
                }
            }
        };

        function c(e, t) {
            _i_("e4e:e5ccc3d2"), this.success = e, this.message = t, _r_()
        }
        return _r_({
            track: function(e) {
                if (_i_("e4e:30978345"), null == e) return _r_("event object is null or empty");
                var t, i = new c(!0);
                if (_ && (i = function(e) {
                        _i_("e4e:c55e1d6c");
                        var t = function e(t, i) {
                            if (_i_("e4e:88aae161"), null != i.properties)
                                for (var n = Object.getOwnPropertyNames(i.properties), a = 0; a < n.length; a++) {
                                    var s = n[a];
                                    if (null == t[s]) return _r_(new c(!1, "property " + s + " is not defined"));
                                    if ("object" == i.properties[s].type) {
                                        var _ = e(t[s], i.properties[s]);
                                        if (!1 === _.success) return _r_(_)
                                    }
                                }
                            return _r_(new c(!0))
                        }(e, o);
                        return _r_(t)
                    }(e)), !i.success) return _r_(i.message);
                t = e, _i_("e4e:1d8b821c"), t.context = n, t.tracker = {
                    tracker_name: r,
                    tracker_type: "Client",
                    tracker_version: "0.1.0"
                }, _r_($.ajax({
                    url: "/c360/v1/track",
                    type: "POST",
                    data: JSON.stringify(t)
                }).fail(function(e, t, i) {
                    if (_i_("e4e:0e4edbce"), B.et && B.et.stage && B.et.stage(a, 1), s) {
                        var n = r + " tracking failure: (" + i + ") [Response " + e.status + ": " + e.responseText + "]";
                        B.reportError && B.reportError(i, n)
                    }
                    _r_()
                })), _r_()
            }
        })
    }), B.when({
        events: "ready",
        condition: B.env.fe_new_level_comms_block_displayed
    }).run(function(e) {
        _i_("e4e:cd83bfac");
        var c = B.require("jquery"),
            t = B.require("ga-tracker");
        if (!t || !c) return _r_();
        var i = {},
            n = c("[data-ga-track-genius]").map(function(e, t) {
                _i_("e4e:722ade42");
                var i = c(t).data("ga-track-genius"),
                    n = i.split("|"),
                    a = n[0],
                    s = n[1],
                    _ = n[2] || "Action",
                    r = n[3] || "Label",
                    o = parseInt(n[4], 10) || 1;
                if ("load" === a) return _r_({
                    hash: i,
                    category: s,
                    action: _,
                    label: r,
                    value: o
                });
                _r_()
            }).get().reduce(function(e, t) {
                if (_i_("e4e:bc517d62"), i[t.hash]) return _r_(e);
                return i[t.hash] = 1, e.push(t), _r_(e)
            }, []);
        t.pageviewIsTracked().then(function() {
            _i_("e4e:c9073661"), n.map(function(e) {
                _i_("e4e:e2be2af9"), t.trackEvent(e.category, e.action, e.label, e.value), _r_()
            }), _r_()
        }), _r_()
    }), B.define("component/genius/genius-wombat/benefits_block_upsort_cta", function(e, t, i) {
        "use strict";
        _i_("e4e:bacb2d5e");
        var n = e("component"),
            a = B.require("window-scroller"),
            s = e("jquery");
        i.exports = n.extend({
            init: function() {
                _i_("e4e:56ef74ab"), this.$frmEl = s("#frm"), this.$hiddenInput = s("<input>").attr({
                    type: "hidden",
                    id: "ge_genius_rate",
                    name: "genius_rate",
                    value: 1,
                    checked: "checked"
                }), this.scrollTarget = ".js-ds-layout-events-search-form", this.topScrollGap = 50, this.scrollToDuration = 300, this.addEventListeners(), _r_()
            },
            addEventListeners: function() {
                _i_("e4e:73f503bb"), this.$el.on("click", this.onClick.bind(this)), _r_()
            },
            onClick: function() {
                _i_("e4e:4086d1a7"), this.$hiddenInput.appendTo(this.$frmEl), a.scrollToBlock(this.scrollTarget, !0, this.scrollToDuration, this.topScrollGap), _r_()
            },
            reset: function() {
                _i_("e4e:57dd9727"), this.el.reset(), _r_()
            }
        }), _r_()
    }), B.define("component/campaign-countdown", function(e, t, i) {
        "use strict";
        _i_("e4e:fd065f6b");
        var n = e("component");
        i.exports = n.extend({
            init: function() {
                _i_("e4e:e480e2f8"), this.timeInterval = null, this.finalTimestamp = 1e3 * +this.$el.data("final-timestamp") - 3e3, this.isGeniusUser = this.$el.data("is-genius") || !1, this.timesLeft = {}, this.elements = {
                    days: this.getElement("days"),
                    hours: this.getElement("hours"),
                    minutes: this.getElement("minutes"),
                    seconds: this.getElement("seconds")
                }, this.copyTags = {
                    days: "deals_countdown_singlesday19_days",
                    hours: "deals_countdown_singlesday19_hours",
                    minutes: "deals_countdown_singlesday19_minutes",
                    seconds: "deals_countdown_singlesday19_seconds"
                }, this.isShortComponent = "short" === this.$el.data("format"), this.startCountdown(), _r_()
            },
            getElement: function(e) {
                _i_("e4e:5150be92");
                var t = this.$el.find(".js-countdown-" + e);
                return _r_({
                    root: t,
                    num: t.find(".js-countdown-" + e + "__num"),
                    copy: t.find(".js-countdown-" + e + "__copy")
                })
            },
            startCountdown: function() {
                _i_("e4e:3a30b7cb"), this.updateCountdown(), this.timeInterval = setInterval(this.updateCountdown.bind(this), 1e3), _r_()
            },
            stopTimer: function() {
                _i_("e4e:71dbded2"), clearInterval(this.timeInterval), this.timeInterval = null, _r_()
            },
            updateCountdown: function() {
                _i_("e4e:fdda80b5"), !this.timesLeft || this.timesLeft.total <= 0 ? (this.stopTimer(), this.updateTime(!0)) : this.updateTime();
                var i = !1;
                ["days", "hours", "minutes", "seconds"].forEach(function(e) {
                    if (_i_("e4e:9693159e"), this.isShortComponent && i) return _r_();
                    if (!this.isShortComponent || this.timesLeft[e]) {
                        var t = this.elements[e].root;
                        t.fadeIn(), this.isShortComponent && (t.siblings(":not(.js-countdown-progress)").fadeOut(), i = !0)
                    }
                    this.updateElement(e), _r_()
                }.bind(this)), this.isGeniusUser && this.highlightDays(), _r_()
            },
            updateTime: function(e) {
                _i_("e4e:69d68b57");
                var t = e ? 0 : this.finalTimestamp - Date.now();
                return t < 0 && (t = 0), this.timesLeft = {
                    total: t,
                    days: Math.floor(t / 864e5),
                    hours: Math.floor(t / 36e5 % 24),
                    minutes: Math.floor(t / 1e3 / 60 % 60),
                    seconds: Math.floor(t / 1e3 % 60)
                }, _r_(this.timesLeft)
            },
            updateElement: function(e) {
                _i_("e4e:084b981c");
                var t = this.elements[e],
                    i = this.timesLeft[e];
                if ("" !== t.num.text() && +t.num.text() == i) return _r_();
                t.num.text(this.padLeft(i));
                var n = this.getUpdatedCopy(e, i);
                t.copy.text() !== n && t.copy.text(n), _r_()
            },
            getUpdatedCopy: function(e, t) {
                return _i_("e4e:374a29d8"), _r_(B.jstmpl.translations(this.copyTags[e], t))
            },
            highlightDays: function() {
                _i_("e4e:864569de"), this.elements.days.root.addClass("campaign-countdown__item--genius"), this.elements.hours.num.addClass("campaign-countdown__item--genius"), this.elements.minutes.num.addClass("campaign-countdown__item--genius"), this.elements.seconds.num.addClass("campaign-countdown__item--genius"), _r_()
            },
            padLeft: function(e) {
                if (_i_("e4e:60c1c38f"), e < 10) return _r_("0" + e);
                return _r_(e)
            }
        }), _r_()
    }), B.require(["jquery"], function(e) {
        _i_("e4e:6fcc3aa3"), e("#yielding_free_cancellation_addon_banner").on("click", ".bui-banner__close", function() {
            _i_("e4e:999ba99c"), e.get("/dismiss_yielding_free_cancellation_addon_banner"), _r_()
        }), _r_()
    }), B.define("component/bh/awareness-campaign/dismissible-component", ["jquery", "server-data", "component", "browser-storage-handler", "module"], function(a, s, e, _, t) {
        _i_("e4e:9b4ddd38");

        function i(n) {
            return _i_("e4e:52ff4715"), _r_(function(e) {
                var t, i;
                _i_("e4e:6e86f14d"), e.stopPropagation(), n.closeElements.off("click", n.closeCallback), _.addPermanentValue(n.cookieKey, JSON.stringify(!0)), t = n.$el, _i_("e4e:018e5afa"), t.css("display", "none"), _r_(), i = n.variant, _i_("e4e:2a7fdd32"), a.ajax({
                    method: "POST",
                    dataType: "json",
                    url: "/bh_awareness_campaign_record_banner_closed",
                    data: {
                        action: s.b_action,
                        variant: i
                    },
                    complete: function(e) {
                        _i_("e4e:3c882d71");
                        var t = e.responseJSON;
                        t && "should_show_campaign" in t && (s.fe_bh_awareness_campaign_enabled = t.should_show_campaign ? 1 : 0), _r_()
                    }
                }), _r_(), _r_()
            })
        }
        t.exports = e.extend({
            init: function() {
                if (_i_("e4e:80ca71a9"), this.$el.css("display", "none"), this.cookieKey = function(e) {
                        _i_("e4e:ffe0d106");
                        var t = e.$el.data("dismissible-component-cookie-key");
                        return _r_(t || "bh_aw_cpg_cmp")
                    }(this), !s || ["index", "searchresults"].indexOf(s.b_action) < 0) return _r_();
                if (JSON.parse(_.getPermanentValue(this.cookieKey) || "false")) return _r_();
                var e;
                this.variant = (e = this, _i_("e4e:2ac1aca5"), _r_(e.$el.data("dismissible-component-exp-variant") || 0)), this.closeElements = function(e) {
                    _i_("e4e:be0b8ff1");
                    var t = e.$el.data("dismissible-component-selector");
                    return _r_(a(t).length ? a(t) : [])
                }(this), this.closeCallback = i(this), this.closeElements.on("click", this.closeCallback), this.$el.css("display", "block"), _r_()
            }
        }), _r_()
    }), function() {
        "use strict";
        _i_("e4e:67206bab"), B.when({
            action: "index",
            events: "ready"
        }).run(function(e) {
            _i_("e4e:200defb0");
            var t = e("jquery");
            t(".d-bh-promotion--image-container").on("click", function() {
                _i_("e4e:4764ae11");
                var e = t(this).data("url");
                window.open(e), _r_()
            }), _r_()
        }), _r_()
    }(), B.et.stage("GfCDATBfNJcDZDWcWabePJdDBKWHC", 1)) {
    var c360Tracker = B.require("c360Tracker"),
        trackingData = {
            action_name: "c360_test.index_page_viewed_completeness_experiment",
            action_version: "1.0.0",
            content: {
                mesage: "from js"
            }
        };
    c360Tracker.track(trackingData)
}
B.define("component/tvalue/flights", function(e, t, i) {
    _i_("e4e:ac29d15e");
    var n = e("component"),
        a = e("ga-tracker"),
        s = B.env.b_url_start || B.env.b_domain_for_app || window.location.origin,
        _ = {
            eligibility: s + "/xps/get",
            modalVisible: s + "/xps/view",
            modalDismissed: s + "/xps/dismiss"
        };
    i.exports = n.extend({
        init: function() {
            _i_("e4e:e9aeed65"), this.fetchData(), this.attachEvents(), _r_()
        },
        bindEvent: function(e, t, i, n) {
            _i_("e4e:e3c87ab1");
            var a = this;
            e.on(i, t, function(e) {
                _i_("e4e:797ef862"), n && n.call(this, a, e), _r_()
            }), _r_()
        },
        attachEvents: function() {
            _i_("e4e:556600cd"), this.bindEvent($(document), "#flight-awareness-billy", "click", this.onModalClicked), _r_()
        },
        fetchData: function() {
            _i_("e4e:a510fb93");
            var t = this;
            $.ajax({
                url: _.eligibility,
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                xhrFields: {
                    withCredentials: !0
                },
                data: this.getRequestData(),
                success: function(e) {
                    _i_("e4e:c67bdeb2"), t.checkEligibility(e), _r_()
                },
                error: function(e) {}
            }), _r_()
        },
        getRequestData: function() {
            return _i_("e4e:a3c322d6"), _r_(JSON.stringify({
                placement_names: ["modal"],
                page: "booking_com_" + B.env.b_action,
                language_code: B.env.b_lang || "en",
                dest_id: B.env.b_dest_id || null,
                hotel_id: B.env.b_hotel_id || null,
                affiliate_id: B.env.b_aid || null,
                label: B.env.b_label || null,
                checkin_date: B.env.b_checkin_date || null,
                checkout_date: B.env.b_checkout_date || null,
                guest_details: B.env.b_group || null,
                visitor_country: B.env.b_guest_country || null,
                utm_campaign: {
                    utm_campaign: "ddot-booking_com_" + B.env.b_action + "-modal-flight-awareness_modal",
                    utm_medium: "intra",
                    utm_source: "flight_awareness_modal"
                }
            }))
        },
        checkEligibility: function(e) {
            _i_("e4e:c5f5ff7b");
            var t = ((e || {}).shelves_placements || {}).modal,
                i = null,
                n = null;
            Array.isArray(t) && (i = (((n = (t[0] || {}).properties) || {}).cta || {}).action, this.cta = i && i.target, this.showFlightModal(n)), _r_()
        },
        setFlightImages: function(e) {
            if (_i_("e4e:ab7fe9e6"), !e) return _r_(!1);
            var t = e.company_logo_url,
                i = e.image_url;
            $("#tv-flight-awareness-logo").attr("src", t), $("#tv-flight-awareness-img").attr("src", i), _r_()
        },
        showFlightModal: function(e) {
            if (_i_("e4e:f3772f04"), !window.BUI) return _r_(!1);
            var t = this,
                i = window.BUI.createInstance("Modal", null, {
                    id: "flight-awareness-billy",
                    onAfterClose: function() {
                        _i_("e4e:0defac03"), t.onModalClose(event), _r_()
                    },
                    onAfterOpen: function() {
                        _i_("e4e:10cfe821"), t.paintFlightsModal(e), t.onModalOpen(), _r_()
                    }
                });
            i.mount(), i.open(), this.mobileModalFix(i), $(i.contentWrapper).loadComponents(), _r_()
        },
        mobileModalFix: function(e) {
            if (_i_("e4e:79ab54f3"), !e.getModalRoot && "mdot" !== B.env.b_site_type) return _r_(!1);
            var t = ((e || {}).overlayInstance || {}).overlayEl;
            t && $(t).addClass("mdot-flights-awareness-modal"), _r_()
        },
        paintFlightsModal: function(e) {
            _i_("e4e:70fe886c"), this.setFlightImages(e), this.setFlightsText(e), this.setFlightsURL(e), _r_()
        },
        setFlightsText: function(e) {
            _i_("e4e:f9514a87");
            var t = e.title,
                i = e.description,
                n = ((e || {}).cta || {}).title,
                a = "";
            $("#tv-flight-awareness-title").html(t), $("#tv-flight-awareness-desc").html(i), $("#tv-flight-awareness-cts").html(n), Array.isArray(e.USP) && (e.USP.forEach(function(e) {
                _i_("e4e:d3e9cda9"), a += B.jstmpl("b_flight_awareness_benefits").render({
                    b_flight_awareness_benefit: e
                }), _r_()
            }), $("#tv-flight-awareness-benfits-list").append(a)), _r_()
        },
        setFlightsURL: function() {
            _i_("e4e:f4bdd42c"), $(".flight-cta-flaw")[0].href = this.cta, _r_()
        },
        onModalOpen: function() {
            _i_("e4e:e6977c70"), this.trackImpressions(), this.setBEViewTracking(), _r_()
        },
        onModalClicked: function(e, t) {
            _i_("e4e:19caeab0"), t.stopPropagation(), _r_()
        },
        trackImpressions: function() {
            _i_("e4e:242b8021"), a.ecommerceAddPromo("flights", "flights_awareness_modal", "modal", "0"), _r_()
        },
        onModalClose: function(e) {
            _i_("e4e:150eea7a");
            var t = $(e.currentTarget);
            if (t && t.is(".flight-cta-flaw")) return _r_(!1);
            this.setBEDismissTracking(), _r_()
        },
        setBEViewTracking: function() {
            _i_("e4e:9bc72b4e"), $.ajax({
                url: _.modalVisible,
                method: "POST"
            }), _r_()
        },
        setBEDismissTracking: function() {
            _i_("e4e:d123bb9d"), $.ajax({
                url: _.modalDismissed,
                method: "POST"
            }), _r_()
        }
    }), _r_()
}), B.define("component/surveygizmo_survey_www", function(e, t, i) {
    _i_("e4e:3fd331ec");
    var n, a = e("component"),
        s = e("jquery"),
        _ = e("jstmpl"),
        r = [],
        o = {};
    try {
        o = JSON.parse(window.localStorage.getItem("survey_history")) || {}
    } catch (e) {
        o = {}
    }
    i.exports = a.extend({
        init: function() {
            _i_("e4e:f21b5ce4"), this.title = this.$el.data("survey-title"), this.description = this.$el.data("survey-description"), this.agree_btn = this.$el.data("survey-agree-btn"), this.cancel_btn = this.$el.data("survey-cancel-btn"), this.survey_url = this.$el.data("survey-url") || "", this.survey_url_base = this.survey_url.split("?")[0], o[this.survey_url_base] || r.push(this), _i_("e4e:075f90b4"), n && clearTimeout(n), n = setTimeout(function() {
                if (_i_("e4e:329ffc49"), 0 < r.length) {
                    var e = Math.floor(1e3 * Math.random()) % r.length;
                    r[e].runSurvey()
                }
                _r_()
            }, 500), _r_(), _r_()
        },
        runSurvey: function() {
            _i_("e4e:5ad58437");
            var e = this,
                t = this.$el;
            ! function(e) {
                _i_("e4e:e1d5a86c");
                try {
                    o[e] = 1, window.localStorage.setItem("survey_history", JSON.stringify(o))
                } catch (e) {}
                _r_()
            }(this.survey_url_base);
            var i = s(_("surveygizmo_survey_invite_www").render({
                title: e.title,
                description: e.description,
                agree_btn: e.agree_btn,
                cancel_btn: e.cancel_btn,
                survey_url: e.survey_url
            }));
            t.append(i), i.on("click", ".js-surveygizmo-survey-cancel", function() {
                return _i_("e4e:9c5b56bd"), i.addClass("surveygizmo-survey-invite--hidden"), setTimeout(function() {
                    _i_("e4e:fa934b29"), i.remove(), _r_()
                }, 200), _r_(!1)
            }), i.on("click", ".js-surveygizmo-survey-ok", function() {
                return _i_("e4e:ce551b46"), i.remove(), window.open(t.data("survey-url"), "_blank"), _r_(!1)
            }), setTimeout(function() {
                _i_("e4e:c3625f0c"), i.removeClass("surveygizmo-survey-invite--hidden"), _r_()
            }, 10), _r_()
        }
    }), _r_()
}), booking.jstmpl("surveygizmo_survey_invite_www", function() {
    _i_("e4e:73644f8f");
    var n = ['\n    <div class="surveygizmo-survey-invite surveygizmo-survey-invite--hidden">\n        <div class="surveygizmo-survey-invite__title">', '</div>\n        <div class="surveygizmo-survey-invite__description">', '</div>\n        <div class="surveygizmo-survey-invite__buttons-wrapper">\n            <a class="surveygizmo-survey-invite__button js-surveygizmo-survey-cancel">\n                ', '\n            </a>\n            <a class="surveygizmo-survey-invite__button surveygizmo-survey-invite__button--primary js-surveygizmo-survey-ok">\n                ', "\n            </a>\n        </div>\n    </div>\n"],
        a = ["title", "description", "cancel_btn", "agree_btn"];
    return _r_(function(e) {
        _i_("e4e:2dc4dd8e");
        var t = "",
            i = this.fn;
        return t += [n[0], i.MC(a[0]), n[1], i.MC(a[1]), n[2], i.MC(a[2]), n[3], i.MC(a[3]), n[4]].join(""), _r_(t)
    })
}()), B.define("component/communities/external/desktop-communities-recommendations_820", function(e, t, i) {
    _i_("e4e:deff26d5");
    var n = e("ga-tracker"),
        a = e("component");
    i.exports = a.extend({
        init: function() {
            _i_("e4e:07d1d1a1"), n.trackEvent(n.communityTracker, "index_entry_experiment"), this.$el.on("click", this.clickEventHandler.bind(this)), _r_()
        },
        clickEventHandler: function() {
            _i_("e4e:33ff7388"), n.trackEvent(n.communityTracker, "index_entry_experiment-click"), _r_()
        }
    }), _r_()
}), B.when({
    action: "index",
    events: "ready",
    condition: B.env.b_user_auth_level == B.env.auth_level_high
}).run(function(e) {
    _i_("e4e:8e9540d6");
    var a = e("jquery"),
        i = e("c360Tracker");

    function n(e, t) {
        return _i_("e4e:c54b782d"), _r_({
            trip_item_ids: {
                trip_id: e + "",
                pfi: t.pfi ? t.pfi + "" : void 0,
                booking_ref_id: t.publicId,
                order_id: t.orderId,
                reservation_id: t.id ? t.id + "" : void 0
            },
            vertical: t.type,
            status: function(e) {
                if (_i_("e4e:14d03b97"), e.cancelled) return _r_("cancelled");
                if (e.upcoming) return _r_("upcoming");
                if (e.current) return _r_("current");
                if (e.past) return _r_("past");
                _r_()
            }(t),
            vertical_start_time: Date.parse(t.startIso),
            vertical_end_time: Date.parse(t.endIso)
        })
    }
    if (a(".mytrips-car-reservation-link").on("click", function(e) {
            _i_("e4e:7c461e78"), e.preventDefault();
            var t = a(this);
            ! function(e, t) {
                _i_("e4e:67e842b2");
                var i = window.B && window.B.env && window.B.env.b_lang_for_url || "en-gb",
                    n = a('<form method="post" target="_blank" action="https://cars.booking.com/MyRes.do?preflang=' + i + '"><input type="hidden" name="booking.contact.email" value="' + (t || B.env.b_user_auth_username) + '"><input type="hidden" name="booking.reference" value="' + e + '"><input type="hidden" name="serverName" value="cars.booking.com"><input type="hidden" name="affiliateCode" value="booking-cars"></form>');
                a("body").append(n), n.submit(), n.remove(), _r_()
            }(t.data("reservation-id"), t.data("user-email")), _r_()
        }), a(".js-mtr-upcoming-trip").length) {
        var t = {
                connectors: [],
                trip_items: []
            },
            s = a(".js-mtr-upcoming-trip").data("id");
        a(".js-mtr-upcoming-reservation").each(function() {
            _i_("e4e:5f20b147");
            var e = a(this).data();
            t.trip_items.push(n(s, e)), _r_()
        }), i.track({
            action_name: "trips_book_to_stay__index_page_served",
            action_version: "0.1.0",
            content: t
        }), a(".js-mtr-upcoming-reservation").on("click", "a.js-mtr-index-upcoming__trip-item", function(e) {
            _i_("e4e:5a7120d3");
            var t = a(e.delegateTarget).data();
            i.track({
                action_name: "trips_book_to_stay__trip_item_clicked",
                action_version: "0.4.0",
                content: {
                    trip_item: n(s, t),
                    page: "index_page",
                    trip_item_ux_component: "booking_card"
                }
            }), _r_()
        })
    }
    _r_()
}), B.define("component/gta/modal", function(e, t, i) {
    _i_("e4e:88611454");
    var n = e("component"),
        c = e("jquery"),
        l = e("gta/sms-widget"),
        d = e("gta/impression-tracking");
    i.exports = n.extend({
        init: function() {
            _i_("e4e:8fedfab7");
            var o = window.BUI.createInstance("Modal", this.el, {
                onAfterOpen: function() {
                    _i_("e4e:4dc50281");
                    var e = c(o.modalEl),
                        t = e.find(".gta-sms-widget");
                    t && 0 < t.length && new l(t);
                    var i = e.find(".gta-qr-code-placeholder"),
                        n = i.data("placement"),
                        a = new Image;
                    a.onload = function() {
                        _i_("e4e:eadf324b"), i.empty().append(a), d.trackImpression(n, "qr"), B.et.stage("dLYHMRFeRQLOLOLOdQZXDOXSGDMWTabSIbLO", 1), "desktop-confirmation-qr" === n && B.et.stage("dLYHMRFeRQLOLOLOOPRAFTUDdHeaGVbWRC", 2), _r_()
                    }, a.src = i.data("url"), B.et.stage("dLYHMRFeRLeMXFZdTYMIbXDOXFLECC", 1), B.env.gta_confirmation_modal_title_stage2 || B.et.stage("dLYHMRFeRLeMXFZdTYMIbXDOXFLECC", 3);
                    var s = document.getElementById("gta-confirmation-preview");
                    s && s.classList.add("--open");
                    var _ = new Date,
                        r = document.getElementById("gta-modal-preview-time");
                    r && (r.innerHTML = _.toLocaleTimeString().substring(0, 5), setInterval(function() {
                        _i_("e4e:2cc7300b"), _ = new Date, r.innerHTML = _.toLocaleTimeString().substring(0, 5), _r_()
                    }, 6e4)), _r_()
                },
                onAfterClose: function() {
                    _i_("e4e:0d81a70d"), B.et.customGoal("dLYHMRFeRLeMXFZdTYMIbXDOXFLECC", 1), B.et.customGoal("dLYHMRFeRLPYKDcdSOZdTYMIbXDOXDeLZBIQNNC", 1), _r_()
                }
            });
            o.mount(), _r_()
        }
    }), _r_()
}), B.when({
    action: "index",
    events: "ready",
    experiment: "cCHObTVXBUPACQVZMYCdKNKNKZQWe"
}).run(function(e) {
    "use strict";
    _i_("e4e:32169ef1");
    var _ = e("et"),
        t = e("utils/throttled"),
        i = this.variant();
    var n = document.querySelector("header"),
        r = document.querySelector(".js--sb-searchbox__outer"),
        o = document.querySelector(".js--content__hero");
    if (!r || !o || !n) return _r_();
    var a = function() {
            if (_i_("e4e:ecce4c57"), !o) return _r_(0);
            return _r_(o.offsetHeight)
        },
        s = document.body.offsetHeight - 1.5 * window.innerHeight,
        c = t(function() {
            _i_("e4e:f0d74f55"), window.scrollY >= s && (_.customGoal("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 5), document.addEventListener("scroll", c, !0)), _r_()
        }, 300);
    document.addEventListener("scroll", c, !0);
    var l = document.querySelector(".aff--cobrand_header_wrapper");
    if (1 === i) {
        ! function(i, n, a) {
            _i_("e4e:34ba1a46");
            var s = void 0,
                e = document.querySelector(".js--sb-searchbox button[type=submit]");
            e && e.addEventListener("click", function() {
                _i_("e4e:22958f1e"), s && _.customGoal("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 2), _r_()
            }, !0);
            var t = function() {
                _i_("e4e:58452ef9");
                var e = i(),
                    t = (_i_("e4e:139110d4"), _r_(900 < window.innerWidth) && e);
                if (t === s) return _r_();
                (s = t) ? (r.style.top = n() + "px", r.classList.add("wcu-searchbox--sticky-header"), o.classList.add("wcu-searchbox--sticky-header-active"), o.style.top = a() + "px") : (r.style.top = "auto", r.classList.remove("wcu-searchbox--sticky-header", "wcu-searchbox--sticky-header-transitionend"), o.classList.remove("wcu-searchbox--sticky-header-active"), o.style.top = "auto"), _r_()
            };
            window.addEventListener("scroll", t, !0), window.addEventListener("resize", t, !0), window.addEventListener("load", t, !0), $(r).on("transitionend", ".xp__travel-purpose, .xp__entire-place, .xp__results-on-map", function() {
                _i_("e4e:f33bfc6a"), s && r.classList.add("wcu-searchbox--sticky-header-transitionend"), _r_()
            }), _r_()
        }(function() {
            return _i_("e4e:4e97d86a"), _r_(window.scrollY >= function() {
                if (_i_("e4e:b36f1a13"), !n) return _r_(0);
                return _r_(n.getBoundingClientRect().height)
            }() + a() + function() {
                if (_i_("e4e:da9f26e0"), B.env.b_site_info.is_cobrand && l) return _r_(l.offsetHeight);
                return _r_(0)
            }() - 30 - 74)
        }, function() {
            return _i_("e4e:dfc7c394"), _r_(48)
        }, function() {
            return _i_("e4e:3a8a8a52"), _r_(-1 * (a() - 30 - 74))
        })
    }
    _r_()
}), booking.jstmpl("destination_collection", function() {
    _i_("e4e:228e1eb9");
    var r, o = ["\n    ", '<div role="region" data-bui-component="Carousel" class="', "bui-carousel bui-carousel--medium bui-u-bleed@small ", "bui-carousel--www", ' " ><ul class="bui-carousel__inner" data-bui-ref="carousel-container">', '<li class="bui-carousel__item" data-bui-ref="carousel-item"><a href="', '" target="_blank" class="bui-card bui-card--media bui-card--transparent" ', ' data-et-click="', '" ', ' ><div class="bui-card__image-container bh-carousel--new__photo" style="background-image: url(', ')" ></div><div class="bui-card__content bh-carousel--new__content"><div class="bui-title bui-card__title bui-title--strong_1"><span class="bui-card__title">', '</span><span class="bui-title__subtitle">', "/private/ss_carousel_popular_nearby_dest_num_properties/name", '</span></div><p class="bh-carousel--new__price bui-f-font-body">', '<strong class="bui_color_black">', "</strong>", "", "/private/bh_index_carousel_starting_from/name", "</p></div></a></li>", "</ul>", '<div class="bui-carousel__nav bh-promotion-carousel-nav"><button type="button" class="bui-carousel__button" data-bui-ref="carousel-prev" aria-label="', "/private/bh_awareness_carousel_previous_property/name", '" >', "bui-carousel__prev", "iconset/navarrow_left", "presentation", "32", '</button><button type="button" class="bui-carousel__button" data-bui-ref="carousel-next" aria-label="', "/private/bh_awareness_carousel_next_property/name", " >", "bui-carousel__next", "iconset/navarrow_right", "</button></div>", "</div>", "\n"],
        c = ["b_site_type", "bh_cards", "card_click_track", "fe_destination_card_starting_price", "next_nav_btn_track"];
    return _r_(function(e) {
        _i_("e4e:378f9b8b");
        var t = "",
            i = this.fn;
        t += o[0], t += o[1], t += o[2], i.MJ(i.MC(c[0]) + "" == "www") && (t += o[3]), t += o[4];
        var n = i.MC(c[1]) || [];
        e.unshift({
            destination_card: null
        });
        for (var a, s = 1, _ = n.length; s <= _; s++) e[0].destination_card = a = n[s - 1], t += [o[5], i.F.entities((a || {}).b_url), o[6]].join(""), i.MD(c[2]) && (t += [o[7], i.F.entities(i.MC(c[2])), o[8]].join("")), t += [o[9], i.STATIC_HOSTNAME(a.b_photo_url, 0, 0, 0, 0), o[10], i.F.entities((a || {}).b_city_name), o[11], i.F.entities((a || {}).b_country_name), o[11], (e.unshift({
            num_properties: i.MG((a || {}).b_num_properties_formatted)
        }), r = i.ME(o[12], i.MB, i.MN, i.MO((a || {}).b_num_properties, null, o[12])), e.shift(), r), o[13]].join(""), i.MN(c[3], [o[14], i.F.entities((a || {}).b_starting_price), o[15]].join("")), t += [o[16], (e.unshift({
            price_property: i.MB(c[3])
        }), r = i.ME(o[17], i.MB, i.MN, null), e.shift(), r), o[18]].join("");
        return e.shift(), t += o[19], i.MJ(i.MC(c[0]) + "" == "www") && (t += [o[20], i.ME(o[21], i.MB, i.MN, null), o[22], (e.unshift({
            class: o[23],
            name: o[24],
            role: o[25],
            width: o[26]
        }), r = i.HELPER("icon", e[0]), e.shift(), r), o[27], i.ME(o[28], i.MB, i.MN, null), o[8]].join(""), i.MD(c[4]) && (t += [o[7], i.F.entities(i.MC(c[4])), o[8]].join("")), t += [o[29], (e.unshift({
            class: o[30],
            name: o[31],
            role: o[25],
            width: o[26]
        }), r = i.HELPER("icon", e[0]), e.shift(), r), o[32]].join("")), t += o[33], t += o[34], _r_(t)
    })
}()), B.define("component/async-collection", function(e, t, i) {
    _i_("e4e:17c95486");
    var n = e("component"),
        a = e("utils/throttled"),
        s = e("jquery"),
        _ = e("jstmpl"),
        r = e("server-data"),
        o = "mdot" === r.site_type && e("event-bus");

    function c(e) {
        _i_("e4e:ea4ba05a");
        var n = [];
        return e.split(" ").forEach(function(e) {
            _i_("e4e:64f16888");
            var i = {
                    hash: "",
                    goals: [],
                    stages: []
                },
                t = e.split(":");
            1 < t.length && (i.hash = t.shift(), t.forEach(function(e) {
                _i_("e4e:45812681");
                var t = e.split("=");
                "cg" === t[0] && t[1] && (i.goals = t[1].split(",")), "st" === t[0] && t[1] && (i.stages = t[1].split(",")), _r_()
            }), (i.goals.length || i.stages.length) && n.push(i)), _r_()
        }), _r_(n)
    }

    function l(e) {
        _i_("e4e:89b35374"), e.forEach(function(t) {
            _i_("e4e:181ea13c"), t.goals && t.goals.length && t.goals.forEach(function(e) {
                _i_("e4e:45a0f60f"), window.B.et.customGoal(t.hash, e), _r_()
            }), t.stages && t.stages.length && t.stages.forEach(function(e) {
                _i_("e4e:33d1c3dc"), window.B.et.stage(t.hash, e), _r_()
            }), _r_()
        }), _r_()
    }
    i.exports = n.extend({
        exps: {
            onAjaxFail: [],
            onCarouselScroll: []
        },
        COLLECTION_EVENTS: {
            LIGHT_ACTION_FAILED: "LIGHT_ACTION_FAILED",
            CAROUSEL_SCROLLED: "CAROUSEL_SCROLLED"
        },
        init: function() {
            if (_i_("e4e:1d012a48"), this.shouldHideOnSearch = this.$el.data("hide-on-search"), "function" == typeof this.initialize && !this.initialize()) return _r_();
            if (!this.url || !this.templateName) return _r_();
            this.expStrings = {
                onAjaxFail: this.$el.data("exps-ajax-fail"),
                onCarouselScroll: this.$el.data("exps-carousel-scroll")
            }, this.expStrings && (this.expStrings.onAjaxFail && (this.exps.onAjaxFail = c(this.expStrings.onAjaxFail)), this.expStrings.onCarouselScroll && (this.exps.onCarouselScroll = c(this.expStrings.onCarouselScroll))), this.$el.on(this.COLLECTION_EVENTS.LIGHT_ACTION_FAILED, function(e, t) {
                _i_("e4e:a726ac70"), this._onLightActionFail(t), _r_()
            }.bind(this)), this.$el.on(this.COLLECTION_EVENTS.CAROUSEL_SCROLLED, this._onCarouselScroll.bind(this)), this.$el.data("load-on-scroll") ? this._loadOnScroll() : this._load(), _r_()
        },
        _onLightActionFail: function(e) {
            _i_("e4e:7daeaeca"), l(this.exps.onAjaxFail), "function" == typeof B.squeak && B.squeak("Error loading async-collection: " + this.url + " at [carousel ID: " + this.carouselType + "] [" + r.b_site_type + "] [" + r.b_action + "]: " + (e ? e.msg : "")), _r_()
        },
        _onCarouselScroll: function() {
            _i_("e4e:4ae65bdf"), l(this.exps.onCarouselScroll), _r_()
        },
        _load: function() {
            if (_i_("e4e:4780628f"), this.loaded) return _r_();
            this.loaded = !0;
            var e = {};
            "function" == typeof this.requestParams && (e = this.requestParams()), s.post(this.url, e).then(function(e) {
                _i_("e4e:d66471cb"), this._initComponents(e), _r_()
            }.bind(this)).fail(function() {
                _i_("e4e:feb3e9dc"), this.$el.trigger(this.COLLECTION_EVENTS.LIGHT_ACTION_FAILED, {
                    msg: "error, maybe connection"
                }), _r_()
            }.bind(this)), _r_()
        },
        _loadOnScroll: function() {
            var t;
            _i_("e4e:1854bf48");
            var e = this.$el.offset();
            if (e && e.top) {
                var i = Math.round(e.top / 2),
                    n = s(window);
                n.on("scroll", t = a(function() {
                    _i_("e4e:69e66474");
                    var e = n.scrollTop();
                    i < e && (this._load(), n.off("scroll", t)), _r_()
                }.bind(this), 100)), t()
            }
            _r_()
        },
        _initComponents: function(e) {
            var t;
            if (_i_("e4e:1a6cf760"), "function" == typeof this.buildTemplateData && (t = this.buildTemplateData(e || {})), !t) return this.$el.trigger(this.COLLECTION_EVENTS.LIGHT_ACTION_FAILED, {
                msg: "error, maybe bad response"
            }), _r_();
            if (this.$el.data("is-not-rendered")) return _r_();
            this.template = _(this.templateName);
            var i = s(this.template.render(t));
            if (this.showMoreCardTemplateName) {
                var n = _(this.showMoreCardTemplateName).render(t);
                n && i.find(".js-acid-collection-carousel").append(n)
            }
            this.$el.empty().append(i), this.$el.show(), window.BUI.initComponents(this.$el.get(0)), this.$el.loadComponents();
            var a = window.BUI.getInstance(this.$el.find(".bui-carousel").get(0));
            a && a.props && (a.props.onAfterNavigate = function() {
                _i_("e4e:125dab12"), this.$el.trigger(this.COLLECTION_EVENTS.CAROUSEL_SCROLLED), _r_()
            }.bind(this)), this._initHandlers(), _r_()
        },
        _initHandlers: function() {
            _i_("e4e:df3573bd"), o && this.shouldHideOnSearch && o.on(o.EVENTS.SR_AJAX_LOADING, function(e, t) {
                _i_("e4e:e5f76655"), "FILTER_VIEW_FILTER_CHANGE" !== t.id && "FILTER_VIEW_SORT_CHANGE" !== t.id && "SORT_CHANGE" !== t.id || this.$el.remove(), _r_()
            }.bind(this)), _r_()
        }
    }), _r_()
}), booking.jstmpl("bh_collection", function() {
    _i_("e4e:f34a2f3c");
    var l, d = ["\n    ", '<div class="bui-banner bui-u-bleed@small" data-bui-component="Banner"><div class="bui-banner__content"><div class="bui-title bui-title--strong_1">', '<span class="bui-title__text bui-spacer--small">', "</span>", "", '<span class="bui-title__subtitle bui-spacer--medium">', '</div><div role="region" data-bui-component="Carousel" class="', "bui-carousel bui-u-bleed@small ", "bui-carousel--www", '"><ul class="bui-carousel__inner" data-bui-ref="carousel-container">', '<li class="bui-carousel__item" data-bui-ref="carousel-item"><a href="', '" target="_blank" class="bui-card bui-card--media bui-card--transparent" ', ' data-et-click="', '" ', ' ><div class="bui-card__image-container"><img class="bui-card__image" src="', '"></div><div class="bui-card__content"><div class="bui-title__subtitle">', '</div><div class="bh-collection__name bui-f-font-emphasized">', "</div>", "\n", "\n\n\n", '\n    <span class="c-accommodation-classification-rating">\n    ', "\n        ", "\n\n    ", '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8zM56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M114 64A57 57 0 1157 7a57 57 0 0 1 57 57z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M57 7a57 57 0 1 0 57 57A57 57 0 0 0 57 7zm0 106.88V14.12a49.88 49.88 0 0 1 0 99.76z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" role="img">\n                <path d="M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M126.76 45.92a11.75 11.75 0 0 0-10.93-7.6H85.77L74.93 7.58A11.67 11.67 0 0 0 64 0H63.18c-.23 0-.45 0-.68.07s-.28 0-.42.06l-.72.15L61 .4c-.36.1-.71.21-1.07.34a11.65 11.65 0 0 0-6.83 6.84L42.25 38.31H12.18a11.67 11.67 0 0 0-11.13 8.18A11.39 11.39 0 0 0 .52 50a11.65 11.65 0 0 0 4.19 9l25.71 21.24-10.81 32.41A11.68 11.68 0 0 0 27 127.4c.4.13.81.23 1.21.32l.31.06a9.31 9.31 0 0 0 1.18.17h1.59a11.37 11.37 0 0 0 1.16-.11h.06a9.56 9.56 0 0 0 1.18-.26l.31-.08a11.68 11.68 0 0 0 1.13-.4q.55-.24 1.11-.54l.26-.15a11.9 11.9 0 0 0 1.06-.68L64 106.35l26.43 19.38a11.56 11.56 0 0 0 6.88 2.27 11.85 11.85 0 0 0 1.78-.13 11.66 11.66 0 0 0 9.31-15.22L97.59 80.22l25.8-21.39a11.7 11.7 0 0 0 3.37-12.91zm-8.52 6.79l-26.52 22a6.59 6.59 0 0 0-2 7.11l11.12 33.37a3.66 3.66 0 0 1-2.95 4.81 3.58 3.58 0 0 1-2.72-.68l-27.29-20-.14-.08a6.78 6.78 0 0 0-.76-.47c-.16-.08-.33-.14-.49-.21s-.3-.13-.46-.18-.39-.1-.58-.15L64.06 8a3.61 3.61 0 0 1 3.35 2.3l11.15 31.63a6.58 6.58 0 0 0 6.19 4.38h31.07a3.7 3.7 0 0 1 3.44 2.39 3.66 3.66 0 0 1-1.02 4.01z" data-name="8x"></path>\n            </svg>\n        ', "\n            ", "\n                ", "\n                    ", '\n                        <p>\n                            <a href="', '" class="bui-link" target="_blank">\n                                ', "\n                            </a>\n                        </p>\n                    ", "\n                        <p>", "</p>\n                    ", "<p>", "</p>", '\n\n    <span\n        class="', "c-accommodation-classification-rating__badge c-accommodation-classification-rating__badge--", " ", "c-accommodation-classification-rating__badge--with-tooltip", '"\n        ', '\n            data-component="accommodation-classification-rating"\n            title="', '\n    >\n        <span class="bui-rating bui-rating--', '" role="img" aria-label="', ' out of 5">\n            ', '\n                <span aria-hidden="true" class="bui-icon bui-rating__item bui-icon--medium" role="presentation">\n                    ', "\n                </span>\n            ", "\n        </span>\n\n        ", '\n            <span class="c-accommodation-classification-rating__additional-info-icon">\n                ', "streamline/question_mark_circle", "\n            </span>\n        ", "\n    </span>\n", "\n\n", '<i class="no_rating">&nbsp;</i>', '<div class="bui-card__subtitle">', "&nbsp;", "/private/bh_mdot_carousel_starting_from/name", "</div></div></a></li>", "</ul>", '<div class="bui-carousel__nav"><button type="button" class="bui-carousel__button" data-bui-ref="carousel-prev" aria-label="">', "bui-carousel__prev", "iconset/navarrow_left", "presentation", "32", '</button><button type="button" class="bui-carousel__button" data-bui-ref="carousel-next" aria-label="">', "bui-carousel__next", "iconset/navarrow_right", "</button></div>", "</div></div></div>"],
        u = ["title", "subtitle", "b_site_type", "bh_cards", "b_home_url", "card_click_track", "b_home_photo_uri", "b_home_country_name", "b_home_name", "fe_rating", "fe_rating_int", "fe_icon", "fe_type", "fe_icon_half", "fe_explanation_processed", "fe_explanation", "url", "content", "fe_site_type", "fe_show_tooltip", "fe_size", "fe_rating_has_half", "fe_show_additional_info_icon", "fe_rating_data", "fe_is_tdot_traffic_on_mdot_experiment", "fe_is_tdot", "b_accommodation_classification_rating_data", "show_class", "b_home_review_score", "b_home_review_score_word", "b_price_selected_currency"];
    return _r_(function(o) {
        _i_("e4e:d7af8fb7");
        var e = "",
            c = this.fn;

        function t(e) {
            if (_i_("e4e:b0e21465"), e += [d[18], "", d[19]].join(""), e += d[19], c.MJ(c.MB(u[23])) && c.MK(c.MC(u[23]).should_not_render) && c.MJ(c.MC(u[23]).rating) && c.MJ(0 < c.MC(u[23]).rating) && c.MJ(c.MC(u[23]).rating <= 5) || c.MJ(c.MB(u[9])) && c.MJ(0 < c.MB(u[9])) && c.MJ(c.MB(u[9]) <= 5)) {
                e += d[20];
                var t = {
                        fe_explanation: c.MB(u[23]) ? c.MC(u[23]).explanation : c.MB(u[15]),
                        fe_is_tdot_traffic_on_mdot_experiment: c.MB(u[24]),
                        fe_rating: c.MB(u[23]) ? c.MC(u[23]).rating : c.MB(u[9]),
                        fe_show_additional_info_icon: c.MB(u[23]) ? c.MC(u[23]).show_additional_info_icon : c.MB(u[22]),
                        fe_site_type: c.MB(u[18]),
                        fe_size: c.MB(u[20]) || "smaller",
                        fe_type: (c.MB(u[23]) ? c.MC(u[23]).type : c.MB(u[12])) || "stars"
                    },
                    i = o;
                (o = c.SV([{}, {}])).unshift(t), e = function(e) {
                    if (_i_("e4e:55a3d8bb"), e += d[0], c.MN("fe_rating_int", c.floor(c.MB(u[9]))), e += d[0], c.MJ(c.MB(u[10]) != c.MB(u[9])) && (e += d[21], c.MN("fe_rating_has_half", 1), e += d[0]), e += d[22], c.MJ(c.MB(u[12]) + "" == "tiles") ? (e += d[21], c.MN(u[11], d[23]), e += d[0]) : c.MJ(c.MB(u[12]) + "" == "dots") ? (e += d[21], c.MN(u[11], d[24]), e += d[21], c.MN(u[13], d[25]), e += d[0]) : c.MJ(c.MB(u[12]) + "" == "stars") && (e += d[21], c.MN(u[11], d[26]), e += d[21], c.MN(u[13], d[27]), e += d[0]), e += d[22], c.MD(u[15])) {
                        if (e += d[21], c.MJ(c.is_arrayref(c.MB(u[15])))) {
                            e += d[28];
                            var t = "";
                            t += d[29];
                            var i = _,
                                n = s,
                                a = r,
                                s = c.MC(u[15]) || [];
                            o.unshift(null);
                            for (var _ = 1, r = s.length; _ <= r; _++) o[0] = s[_ - 1], t += d[30], c.MD(u[16]) ? t += [d[31], c.F.entities(c.MC(u[16])), d[32], c.MC(u[17]), d[33]].join("") : t += [d[34], c.MC(u[17]), d[35]].join(""), t += d[29];
                            o.shift(), _ = i, s = n, r = a, t += d[28], c.MN(u[14], t), e += d[21]
                        } else e += d[28], c.MN(u[14], [d[36], c.MC(u[15]), d[37]].join("")), e += d[21];
                        e += d[0]
                    }
                    for (e += d[22], c.MN("fe_show_tooltip", c.MB(u[14]) && c.MB(u[18]) && c.MJ(c.MB(u[18]) + "" == "www")), e += d[38], e += [d[39], c.F.entities(c.MC(u[12])), d[40]].join(""), c.MJ(c.MB(u[19])) && (e += d[41]), e += d[42], c.MJ(c.MB(u[19])) && (e += [d[43], c.F.entities(c.MC(u[14])), d[42]].join("")), e += [d[44], c.F.entities(c.MC(u[20])), d[45], c.F.entities(c.MC(u[9])), d[46]].join(""), i = _, n = s, a = r, s = c.seq(1, c.MB(u[10])) || [], o.unshift(null), _ = 1, r = s.length; _ <= r; _++) o[0] = s[_ - 1], e += [d[47], c.MC(u[11]), d[48]].join("");
                    return o.shift(), _ = i, s = n, r = a, e += d[28], c.MJ(c.MB(u[21])) && c.MJ(c.MB(u[13])) && (e += [d[47], c.MC(u[13]), d[48]].join("")), e += d[49], c.MJ(c.MB(u[19])) && c.MJ(c.MB(u[22])) && (e += [d[50], (o.unshift({
                        color: "#6B6B6B",
                        name: d[51],
                        size: c.MB(u[20])
                    }), l = c.HELPER("icon", o[0]), o.shift(), l), d[52]].join("")), e += d[53], _r_(e)
                }(e), o = c.SV(i), e += d[53]
            }
            return e += [d[54], "", d[18]].join(""), _r_(e)
        }
        e += d[0], e += d[1], c.MD(u[0]) && (e += [d[2], c.F.entities(c.MC(u[0])), d[3]].join("")), e += d[4], c.MD(u[1]) && (e += [d[5], c.F.entities(c.MC(u[1])), d[3]].join("")), e += d[6], e += d[7], c.MJ(c.MC(u[2]) + "" == "www") && (e += d[8]), e += d[9];
        var i = c.MC(u[3]) || [];
        o.unshift(null);
        for (var n = 1, a = i.length; n <= a; n++) {
            if (o[0] = i[n - 1], e += [d[10], c.F.entities(c.MC(u[4])), d[11]].join(""), c.MD(u[5]) && (e += [d[12], c.F.entities(c.MC(u[5])), d[13]].join("")), e += [d[14], c.STATIC_HOSTNAME(c.MC(u[6]), 0, 0, 0, 0), d[15], c.F.entities(c.MC(u[7])), d[16], c.F.entities(c.MC(u[8])), d[17]].join(""), c.MD(u[27])) {
                if (e += d[4], c.MJ(c.MC(u[26]))) {
                    e += d[4];
                    var s = {
                            fe_is_tdot_traffic_on_mdot_experiment: c.MB(u[25]),
                            fe_rating_data: c.MC(u[26]),
                            fe_site_type: c.MC(u[2])
                        },
                        _ = o;
                    (o = c.SV([{}, {}])).unshift(s), e = t(e), o = c.SV(_), e += d[4]
                } else e += d[55];
                e += d[4]
            }
            e += d[56], c.MD(u[28]) && (e += [d[36], c.F.entities(c.MC(u[28])), d[57], c.F.entities(c.MC(u[29])), d[37]].join("")), e += d[4], c.MD(u[30]) && (e += [d[36], (o.unshift({
                price_property: c.MC(u[30])
            }), l = c.ME(d[58], c.MB, c.MN, null), o.shift(), l), d[37]].join("")), e += d[59]
        }
        return o.shift(), e += d[60], c.MJ(c.MC(u[2]) + "" == "www") && (e += [d[61], (o.unshift({
            class: d[62],
            name: d[63],
            role: d[64],
            width: d[65]
        }), l = c.HELPER("icon", o[0]), o.shift(), l), d[66], (o.unshift({
            class: d[67],
            name: d[68],
            role: d[64],
            width: d[65]
        }), l = c.HELPER("icon", o[0]), o.shift(), l), d[69]].join("")), e += d[70], e += d[18], _r_(e)
    })
}()), booking.jstmpl("bh_collection_simple", function() {
    _i_("e4e:596a4255");
    var d, u = ["\n    ", '<div class="bui-banner bui-u-bleed@small" data-bui-component="Banner"><div class="bui-banner__content"><div class="bui-title bui-title--strong_1">', '<span class="bui-title__text bui-spacer--small">', "</span>", "", '<span class="bui-title__subtitle bui-spacer--medium">', '</div><div role="region" data-bui-component="Carousel" class="', "bui-carousel bui-u-bleed@small ", "bui-carousel--www", '"><ul class="bui-carousel__inner" data-bui-ref="carousel-container">', '<li class="bui-carousel__item" data-bui-ref="carousel-item"><a href="', '" target="_blank" class="bui-card bui-card--media bui-card--transparent" ', ' data-et-click="', '" ', ' ><div class="bui-card__image-container"><img class="bui-card__image" src="', '"></div><div class="bui-card__content"><div class="bui-title__subtitle">', '</div><div class="bh-collection__name bui-f-font-emphasized">', "</div>", "\n", "\n\n\n", '\n    <span class="c-accommodation-classification-rating">\n    ', "\n        ", "\n\n    ", '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M96 8H16A16 16 0 0 0 0 24v96h96a16 16 0 0 0 16-16V24A16 16 0 0 0 96 8zM56 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M114 64A57 57 0 1157 7a57 57 0 0 1 57 57z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M57 7a57 57 0 1 0 57 57A57 57 0 0 0 57 7zm0 106.88V14.12a49.88 49.88 0 0 1 0 99.76z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" aria-hidden="true" role="img">\n                <path d="M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z"></path>\n            </svg>\n        ', '\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" focusable="false" aria-hidden="true" role="img">\n                <path d="M126.76 45.92a11.75 11.75 0 0 0-10.93-7.6H85.77L74.93 7.58A11.67 11.67 0 0 0 64 0H63.18c-.23 0-.45 0-.68.07s-.28 0-.42.06l-.72.15L61 .4c-.36.1-.71.21-1.07.34a11.65 11.65 0 0 0-6.83 6.84L42.25 38.31H12.18a11.67 11.67 0 0 0-11.13 8.18A11.39 11.39 0 0 0 .52 50a11.65 11.65 0 0 0 4.19 9l25.71 21.24-10.81 32.41A11.68 11.68 0 0 0 27 127.4c.4.13.81.23 1.21.32l.31.06a9.31 9.31 0 0 0 1.18.17h1.59a11.37 11.37 0 0 0 1.16-.11h.06a9.56 9.56 0 0 0 1.18-.26l.31-.08a11.68 11.68 0 0 0 1.13-.4q.55-.24 1.11-.54l.26-.15a11.9 11.9 0 0 0 1.06-.68L64 106.35l26.43 19.38a11.56 11.56 0 0 0 6.88 2.27 11.85 11.85 0 0 0 1.78-.13 11.66 11.66 0 0 0 9.31-15.22L97.59 80.22l25.8-21.39a11.7 11.7 0 0 0 3.37-12.91zm-8.52 6.79l-26.52 22a6.59 6.59 0 0 0-2 7.11l11.12 33.37a3.66 3.66 0 0 1-2.95 4.81 3.58 3.58 0 0 1-2.72-.68l-27.29-20-.14-.08a6.78 6.78 0 0 0-.76-.47c-.16-.08-.33-.14-.49-.21s-.3-.13-.46-.18-.39-.1-.58-.15L64.06 8a3.61 3.61 0 0 1 3.35 2.3l11.15 31.63a6.58 6.58 0 0 0 6.19 4.38h31.07a3.7 3.7 0 0 1 3.44 2.39 3.66 3.66 0 0 1-1.02 4.01z" data-name="8x"></path>\n            </svg>\n        ', "\n            ", "\n                ", "\n                    ", '\n                        <p>\n                            <a href="', '" class="bui-link" target="_blank">\n                                ', "\n                            </a>\n                        </p>\n                    ", "\n                        <p>", "</p>\n                    ", "<p>", "</p>", '\n\n    <span\n        class="', "c-accommodation-classification-rating__badge c-accommodation-classification-rating__badge--", " ", "c-accommodation-classification-rating__badge--with-tooltip", '"\n        ', '\n            data-component="accommodation-classification-rating"\n            title="', '\n    >\n        <span class="bui-rating bui-rating--', '" role="img" aria-label="', ' out of 5">\n            ', '\n                <span aria-hidden="true" class="bui-icon bui-rating__item bui-icon--medium" role="presentation">\n                    ', "\n                </span>\n            ", "\n        </span>\n\n        ", '\n            <span class="c-accommodation-classification-rating__additional-info-icon">\n                ', "streamline/question_mark_circle", "\n            </span>\n        ", "\n    </span>\n", "\n\n", '<i class="no_rating">&nbsp;</i>', '<div class="bui-card__subtitle">', "/private/review_adj_bad/name", "/private/review_adj_very_poor/name", "/private/review_adj_poor/name", "/private/review_adj_disappointing/name", "/private/review_adj_average_passable/name", "/private/review_adj_pleasant/name", "/private/review_adj_good/name", "/private/review_adj_very_good/name", "/private/review_adj_fabulous/name", "/private/review_adj_superb/name", "/private/review_adj_exceptional/name", "/private/comp_fd_lp_header_rs/name", "&nbsp;", "/private/bh_mdot_carousel_starting_from/name", "</div></div></a></li>", "</ul>", '<div class="bui-carousel__nav"><button type="button" class="bui-carousel__button" data-bui-ref="carousel-prev" aria-label="">', "bui-carousel__prev", "iconset/navarrow_left", "presentation", "32", '</button><button type="button" class="bui-carousel__button" data-bui-ref="carousel-next" aria-label="">', "bui-carousel__next", "iconset/navarrow_right", "</button></div>", "</div></div></div>"],
        f = ["title", "subtitle", "b_site_type", "bh_cards", "b_url", "card_click_track", "b_image_url", "b_countryname", "b_name", "fe_rating", "fe_rating_int", "fe_icon", "fe_type", "fe_icon_half", "fe_explanation_processed", "fe_explanation", "url", "content", "fe_site_type", "fe_show_tooltip", "fe_size", "fe_rating_has_half", "fe_show_additional_info_icon", "fe_rating_data", "fe_is_tdot_traffic_on_mdot_experiment", "fe_is_tdot", "b_accommodation_classification_rating_data", "show_class", "fe_adjective_text", "fe_adjective", "fe_score", "fe_hide_low_adjectives", "b_review_score", "b_minrate"];
    return _r_(function(o) {
        _i_("e4e:4b15f58d");
        var e = "",
            c = this.fn;

        function t(e) {
            if (_i_("e4e:bd634d45"), c.MD(f[30])) {
                var t = "";
                c.MJ(1 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 2) && (t += c.ME(u[57], c.MB, c.MN, null)), c.MJ(2 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 3) && (t += c.ME(u[58], c.MB, c.MN, null)), c.MJ(3 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 4) && (t += c.ME(u[59], c.MB, c.MN, null)), c.MJ(4 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 5) && (t += c.ME(u[60], c.MB, c.MN, null)), c.MJ(5 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 6) && (t += c.ME(u[61], c.MB, c.MN, null)), c.MJ(6 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 7) && (t += c.ME(u[62], c.MB, c.MN, null)), c.MJ(7 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 8) && (t += c.ME(u[63], c.MB, c.MN, null)), c.MJ(8 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 8.6) && (t += c.ME(u[64], c.MB, c.MN, null)), c.MJ(8.6 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 9) && (t += c.ME(u[65], c.MB, c.MN, null)), c.MJ(9 <= c.MB(f[30])) && c.MJ(c.MB(f[30]) < 9.5) && (t += c.ME(u[66], c.MB, c.MN, null)), c.MJ(9.5 <= c.MB(f[30])) && (t += c.ME(u[67], c.MB, c.MN, null)), c.MN(f[29], t), c.MJ(c.MB(f[31])) && c.MJ(c.MB(f[30]) < 7) && c.MN(f[29], c.ME(u[68], c.MB, c.MN, null)), e += [c.MC(f[29]), u[4]].join("")
            }
            return c.MN("fe_adjective", 0), c.MN("fe_hide_low_adjectives", 0), c.MN("fe_score", 0), e += u[18], _r_(e)
        }

        function i(e) {
            if (_i_("e4e:b0e214651"), e += [u[18], "", u[19]].join(""), e += u[19], c.MJ(c.MB(f[23])) && c.MK(c.MC(f[23]).should_not_render) && c.MJ(c.MC(f[23]).rating) && c.MJ(0 < c.MC(f[23]).rating) && c.MJ(c.MC(f[23]).rating <= 5) || c.MJ(c.MB(f[9])) && c.MJ(0 < c.MB(f[9])) && c.MJ(c.MB(f[9]) <= 5)) {
                e += u[20];
                var t = {
                        fe_explanation: c.MB(f[23]) ? c.MC(f[23]).explanation : c.MB(f[15]),
                        fe_is_tdot_traffic_on_mdot_experiment: c.MB(f[24]),
                        fe_rating: c.MB(f[23]) ? c.MC(f[23]).rating : c.MB(f[9]),
                        fe_show_additional_info_icon: c.MB(f[23]) ? c.MC(f[23]).show_additional_info_icon : c.MB(f[22]),
                        fe_site_type: c.MB(f[18]),
                        fe_size: c.MB(f[20]) || "smaller",
                        fe_type: (c.MB(f[23]) ? c.MC(f[23]).type : c.MB(f[12])) || "stars"
                    },
                    i = o;
                (o = c.SV([{}, {}])).unshift(t), e = function(e) {
                    if (_i_("e4e:55a3d8bb1"), e += u[0], c.MN("fe_rating_int", c.floor(c.MB(f[9]))), e += u[0], c.MJ(c.MB(f[10]) != c.MB(f[9])) && (e += u[21], c.MN("fe_rating_has_half", 1), e += u[0]), e += u[22], c.MJ(c.MB(f[12]) + "" == "tiles") ? (e += u[21], c.MN(f[11], u[23]), e += u[0]) : c.MJ(c.MB(f[12]) + "" == "dots") ? (e += u[21], c.MN(f[11], u[24]), e += u[21], c.MN(f[13], u[25]), e += u[0]) : c.MJ(c.MB(f[12]) + "" == "stars") && (e += u[21], c.MN(f[11], u[26]), e += u[21], c.MN(f[13], u[27]), e += u[0]), e += u[22], c.MD(f[15])) {
                        if (e += u[21], c.MJ(c.is_arrayref(c.MB(f[15])))) {
                            e += u[28];
                            var t = "";
                            t += u[29];
                            var i = _,
                                n = s,
                                a = r,
                                s = c.MC(f[15]) || [];
                            o.unshift(null);
                            for (var _ = 1, r = s.length; _ <= r; _++) o[0] = s[_ - 1], t += u[30], c.MD(f[16]) ? t += [u[31], c.F.entities(c.MC(f[16])), u[32], c.MC(f[17]), u[33]].join("") : t += [u[34], c.MC(f[17]), u[35]].join(""), t += u[29];
                            o.shift(), _ = i, s = n, r = a, t += u[28], c.MN(f[14], t), e += u[21]
                        } else e += u[28], c.MN(f[14], [u[36], c.MC(f[15]), u[37]].join("")), e += u[21];
                        e += u[0]
                    }
                    for (e += u[22], c.MN("fe_show_tooltip", c.MB(f[14]) && c.MB(f[18]) && c.MJ(c.MB(f[18]) + "" == "www")), e += u[38], e += [u[39], c.F.entities(c.MC(f[12])), u[40]].join(""), c.MJ(c.MB(f[19])) && (e += u[41]), e += u[42], c.MJ(c.MB(f[19])) && (e += [u[43], c.F.entities(c.MC(f[14])), u[42]].join("")), e += [u[44], c.F.entities(c.MC(f[20])), u[45], c.F.entities(c.MC(f[9])), u[46]].join(""), i = _, n = s, a = r, s = c.seq(1, c.MB(f[10])) || [], o.unshift(null), _ = 1, r = s.length; _ <= r; _++) o[0] = s[_ - 1], e += [u[47], c.MC(f[11]), u[48]].join("");
                    return o.shift(), _ = i, s = n, r = a, e += u[28], c.MJ(c.MB(f[21])) && c.MJ(c.MB(f[13])) && (e += [u[47], c.MC(f[13]), u[48]].join("")), e += u[49], c.MJ(c.MB(f[19])) && c.MJ(c.MB(f[22])) && (e += [u[50], (o.unshift({
                        color: "#6B6B6B",
                        name: u[51],
                        size: c.MB(f[20])
                    }), d = c.HELPER("icon", o[0]), o.shift(), d), u[52]].join("")), e += u[53], _r_(e)
                }(e), o = c.SV(i), e += u[53]
            }
            return e += [u[54], "", u[18]].join(""), _r_(e)
        }
        e += u[0], e += u[1], c.MD(f[0]) && (e += [u[2], c.F.entities(c.MC(f[0])), u[3]].join("")), e += u[4], c.MD(f[1]) && (e += [u[5], c.F.entities(c.MC(f[1])), u[3]].join("")), e += u[6], e += u[7], c.MJ(c.MC(f[2]) + "" == "www") && (e += u[8]), e += u[9];
        var n = c.MC(f[3]) || [];
        o.unshift(null);
        for (var a = 1, s = n.length; a <= s; a++) {
            if (o[0] = n[a - 1], e += [u[10], c.F.entities(c.MC(f[4])), u[11]].join(""), c.MD(f[5]) && (e += [u[12], c.F.entities(c.MC(f[5])), u[13]].join("")), e += [u[14], c.STATIC_HOSTNAME(c.MC(f[6]), 0, 0, 0, 0), u[15], c.F.entities(c.MC(f[7])), u[16], c.F.entities(c.MC(f[8])), u[17]].join(""), c.MD(f[27])) {
                if (e += u[4], c.MJ(c.MC(f[26]))) {
                    e += u[4];
                    var _ = {
                            fe_is_tdot_traffic_on_mdot_experiment: c.MB(f[25]),
                            fe_rating_data: c.MC(f[26]),
                            fe_site_type: c.MC(f[2])
                        },
                        r = o;
                    (o = c.SV([{}, {}])).unshift(_), e = i(e), o = c.SV(r), e += u[4]
                } else e += u[55];
                e += u[4]
            }
            e += u[56];
            var l = "";
            o.unshift({
                fe_hide_low_adjectives: 0,
                fe_score: c.MC(f[32])
            }), l = t(l), o.shift(), c.MN(f[28], l), e += u[4], c.MD(f[32]) && (e += [u[36], c.F.entities(c.MC(f[32])), u[69], c.F.entities(c.MC(f[28])), u[37]].join("")), e += u[4], c.MN("fe_adjective_text", 0), e += u[4], c.MD(f[33]) && (e += [u[36], (o.unshift({
                price_property: c.MC(f[33])
            }), d = c.ME(u[70], c.MB, c.MN, null), o.shift(), d), u[37]].join("")), e += u[71]
        }
        return o.shift(), e += u[72], c.MJ(c.MC(f[2]) + "" == "www") && (e += [u[73], (o.unshift({
            class: u[74],
            name: u[75],
            role: u[76],
            width: u[77]
        }), d = c.HELPER("icon", o[0]), o.shift(), d), u[78], (o.unshift({
            class: u[79],
            name: u[80],
            role: u[76],
            width: u[77]
        }), d = c.HELPER("icon", o[0]), o.shift(), d), u[81]].join("")), e += u[82], e += u[18], _r_(e)
    })
}()), B.define("component/bh-collection", function(e, t, i) {
    _i_("e4e:8b066cb4");
    var n = e("component"),
        a = e("component/async-collection"),
        s = e("server-data");
    i.exports = n.extend({
        initialize: function() {
            if (_i_("e4e:1bea7510"), this.url = this.$el.data("url"), this.urlParams = this.$el.data("url-params"), this.templateName = this.$el.data("template-name") || "bh_collection", this.maxItems = this.$el.data("max-items") || 10, this.useQC = this.$el.data("show-class"), this.title = this.$el.data("collection-title"), this.subtitle = this.$el.data("collection-subtitle"), this.viewTrack = this.$el.data("view-track"), this.cardClickTrack = this.$el.data("card-click-track"), this.nextNavBtnTrack = this.$el.data("next-nav-click-track"), this.iAmFrom = this.$el.data("i-am-from"), !this.url) return _r_(!1);
            return this.$el.on(this.COLLECTION_EVENTS.LIGHT_ACTION_FAILED, function() {
                _i_("e4e:c236952c"), this.$el.parent(".js-bh-carousel-wrapper").remove(), _r_()
            }.bind(this)), _r_(!0)
        },
        requestParams: function() {
            _i_("e4e:089dd597");
            var i = {
                currency: s.b_selected_currency,
                max_entries: this.maxItems,
                use_qc: this.useQC
            };
            return this.iAmFrom && (i.i_am_from = this.iAmFrom), this.urlParams && this.urlParams.split(";").forEach(function(e) {
                _i_("e4e:a2795f6f");
                var t = e.split("=");
                i[t[0]] = t[1], _r_()
            }), _r_(i)
        },
        buildTemplateData: function(e) {
            if (_i_("e4e:80a5df5e"), !e.result) return _r_(null);
            return _r_({
                bh_cards: e.result,
                title: this.title,
                subtitle: this.subtitle,
                view_track: this.viewTrack,
                card_click_track: this.cardClickTrack,
                next_nav_btn_track: this.nextNavBtnTrack,
                b_query_params_delimiter: s.b_query_params_delimiter,
                b_query_params_with_lang: s.b_query_params_with_lang,
                b_site_type: s.b_site_type,
                fe_is_tdot: s.fe_is_tdot,
                nonsecure_hostname: s.nonsecure_hostname
            })
        }
    }, a), _r_()
}), B.define("component/index-postcards", function(i, e, t) {
    "use strict";
    _i_("e4e:be88592a");
    var n = i("async-loader"),
        a = i("component"),
        s = i("et"),
        _ = a.extend({
            init: function() {
                _i_("e4e:b1f0ad2b");
                var e = this.$el;
                n.load({
                    js: "async_index_postcards_c360_js"
                }).then(function() {
                    _i_("e4e:37919551"), i("index_postcards_c360_tracker").start(e), _r_()
                });
                var t = window.BUI.getInstance(e[0]);
                t && (t.props.onAfterNavigate = function() {
                    _i_("e4e:ae824467"), s.customGoal("cCHObTULHfAFFQZcbIAZdJAINQLOLOLMO", 3), _r_()
                }), _r_()
            }
        });
    t.exports = _, _r_()
}), B.when({
    action: "index",
    events: "ready"
}).run(function(e) {
    "use strict";
    _i_("e4e:59e9e6d8");
    var t = e("et"),
        i = e("server-data");
    t.stage("cCHObONdPbIZFbYSfDcfFdHMbNXGDJdLOLOLMO", 4), t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 1), t.stage("cCHObONdPbIZFbYSfDcVIZdRJcCcCcCC", 2), t.stage("cCHObVZMYCAFFQZcEAC", 1), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 1), t.stage("cCHObVZMYCAFFQZcNKNMC", 1), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 1), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 1), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 1), t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 1), t.stage("cCHObVZMYCONdPbABJRXTcbNXGDJae", 1), t.stage("cCHObVBEQBOJAZdJAINLRJAXaaO", 1), t.stage("cCHObIFfESfdQfQQDVCUBPSEbFZVGAZfTLKGBfC", 8), t.stage("cCHObOOYKYYaDcOdJeaILYDdKNKNKWe", 1), t.stage("cCHObTULHfAFFQZcbIAZdJAINQLOLOLMO", 7), "1" === i.fe_bh_awareness_campaign_enabled && t.stage("cCHObdRdJSfdQaRNFOSeDCJWMddKNKNKWe", 1), i.fe_recent_search_cond && t.stage("cCHObXKeNJfOEJcCcCcCC", 1), t.stage("cCHObXKeNJAbINFPIWBccCcCcCC", 4), t.stage("cCHObIULDcFUHZESEETWBZEWaSddKNKNKWe", 9), 1 === i.b_returning_status ? (t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 2), t.stage("cCHObVZMYCAFFQZcEAC", 2), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 2), t.stage("cCHObVZMYCAFFQZcNKNMC", 2), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 2), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 2), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 2), t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 7), t.stage("cCHObVBEQBOJAZdJAINLRJAXaaO", 3), t.stage("cCHObOOYKYYaDcOdJeaILYDdKNKNKWe", 3), i.fe_recent_search_cond && t.stage("cCHObXKeNJfOEJcCcCcCC", 3), "1" === i.fe_bh_awareness_campaign_enabled && t.stage("cCHObdRdJSfdQaRNFOSeDCJWMddKNKNKWe", 3)) : 2 === i.b_returning_status && (t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 3), t.stage("cCHObVZMYCAFFQZcEAC", 3), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 3), t.stage("cCHObVZMYCAFFQZcNKNMC", 3), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 3), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 3), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 3), t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 8), t.stage("cCHObVBEQBOJAZdJAINLRJAXaaO", 2), t.stage("cCHObOOYKYYaDcOdJeaILYDdKNKNKWe", 4), i.fe_recent_search_cond && t.stage("cCHObXKeNJfOEJcCcCcCC", 2), "1" === i.fe_bh_awareness_campaign_enabled && t.stage("cCHObdRdJSfdQaRNFOSeDCJWMddKNKNKWe", 4)), i.b_user_auth_level_is_none && (t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 4), t.stage("cCHObVZMYCAFFQZcEAC", 4), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 4), t.stage("cCHObVZMYCAFFQZcNKNMC", 4), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 4), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 4), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 4), t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 2), t.stage("cCHObVBEQBOJAZdJAINLRJAXaaO", 4), i.fe_recent_search_cond && t.stage("cCHObXKeNJfOEJcCcCcCC", 4), "1" === i.fe_bh_awareness_campaign_enabled && t.stage("cCHObdRdJSfdQaRNFOSeDCJWMddKNKNKWe", 6)), i.b_reg_user_is_genius && (t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 5), t.stage("cCHObVZMYCAFFQZcEAC", 5), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 5), t.stage("cCHObVZMYCAFFQZcNKNMC", 5), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 5), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 5), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 5), t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 3), t.stage("cCHObVBEQBOJAZdJAINLRJAXaaO", 5), i.fe_recent_search_cond && t.stage("cCHObXKeNJfOEJcCcCcCC", 5), "1" === i.fe_bh_awareness_campaign_enabled && t.stage("cCHObdRdJSfdQaRNFOSeDCJWMddKNKNKWe", 5)), "us" === i.ip_country && t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 4), i.b_user_has_upcoming_bookings ? (t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 6), t.stage("cCHObVZMYCAFFQZcEAC", 6), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 6), t.stage("cCHObVZMYCAFFQZcNKNMC", 6), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 6), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 6), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 6), t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 5)) : (t.stage("cCHObVZMYCAFFQZcEAC", 7), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 7), t.stage("cCHObVZMYCAFFQZcNKNMC", 7), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 7), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 7), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 7), t.stage("cCHObIUaATFFPVKKMadMUPfIVXBPKAUFRURURHe", 6)), window.innerHeight < 768 && (t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 7), t.stage("cCHObVBEQBOJAZdJAINLRJAXaaO", 6), i.fe_recent_search_cond && t.stage("cCHObXKeNJfOEJcCcCcCC", 6)), i.b_has_valid_dates_not_in_past && (t.stage("cCHObVZMYCAFFQZcEAC", 8), t.stage("cCHObVZMYCAFFQZccWRBfBFXBeVYWe", 8), t.stage("cCHObVZMYCAFFQZcNKNMC", 8), t.stage("cCHObVZMYCAFFQZcbNXGDJEbOMNMTbYIPfZET", 8), t.stage("cCHObVZMYCAFFQZcacYPNAWBLULECC", 8), t.stage("cCHObVZMYCAFFQZccGBXFGZJae", 8)), i.b_is_high_value_customer && (t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 8), t.stage("cCHObVBEQBOJAZdJAINLRJAXaaO", 7), i.fe_recent_search_cond && t.stage("cCHObXKeNJfOEJcCcCcCC", 7)), i.b_is_potential_high_value_customer && t.stage("cCHObTVXBUPACQVZMYCdKNKNKZQWe", 9);
    var n = document.querySelector(".desktop-communities-recommendations .bui-carousel");
    if (n) {
        var a = window.BUI.getInstance(n);
        a && (a.props.onAfterNavigate = function() {
            _i_("e4e:dc2f39b4"), t.customGoal("cCHObONdPbIZFbYSfDcVIZdRJcCcCcCC", 3), _r_()
        })
    }
    var s = document.querySelector(".recent_searches__section .bui-carousel");
    if (s) {
        var _ = 0,
            r = window.BUI.getInstance(s);
        r && (r.props.onAfterNavigate = function(e) {
            _i_("e4e:885dcc73"), e.index > _ && t.customGoal("cCHObXKeNJAbINFPIWBccCcCcCC", 4), _ = e.index, _r_()
        })
    }
    t.on("view", ".recent_searches__section .bui-carousel ul li:last-child").customGoal("cCHObXKeNJAbINFPIWBccCcCcCC", 3), _r_()
}), B.define("component/seo-index-destinations-tabs", function(e, t, i) {
    "use strict";
    _i_("e4e:d27c76a8");
    var n = e("component").extend({
        _tabInstance: void 0,
        _citiesCarouselEl: void 0,
        init: function() {
            _i_("e4e:42e372f2");
            var i = this;
            this._tabInstance = window.BUI.createInstance("Tab", this.$el.get(0), {
                onAfterTabChange: function(e) {
                    if (_i_("e4e:18e8bf00"), 1 == e.id) {
                        var t = i.getCitiesCarousel();
                        t && t.update()
                    }
                    _r_()
                }
            }), this._tabInstance.mount(), _r_()
        },
        getCitiesCarousel: function() {
            if (_i_("e4e:008c081b"), !this._citiesCarouselEl) {
                var e = document.querySelector("#wcu-seo-cities-carousel");
                null !== e && (this._citiesCarouselEl = window.BUI.createInstance("Carousel", e), this._citiesCarouselEl.mount())
            }
            return _r_(this._citiesCarouselEl)
        }
    });
    return _r_(n)
}), B.when({
    action: ["beach_holidays", "beach_holidays_continent", "beach_holidays_country", "beach_holidays_results"],
    events: "ready"
}).run(function(e) {
    _i_("e4e:dc4ad137");
    var t = e("events"),
        i = e("squeak"),
        n = e("component/beach-quiz/events"),
        a = e("server-data"),
        s = a.trip_types_squeaks,
        _ = a.b_action,
        r = $(".beach-panel__error-message"),
        o = B.debug("beach-squeaks");

    function c(e) {
        _i_("e4e:0ff79224");
        var t = s[e][_] || "";
        o.log("type, action, hash :", e, _, t), i && i(t), _r_()
    }
    t.on(n.QUIZ_OPENED, function() {
        _i_("e4e:7a1e3439"), c("quiz_open"), _r_()
    }), t.on(n.SUBMIT_FORM, function() {
        _i_("e4e:cda8a1f9"), c("quiz_submit"), _r_()
    }), t.on(n.QUIZ_DATA_FAILED, function() {
        _i_("e4e:e46cd9b4"), c("quiz_data_failed"), _r_()
    }), t.on("SLIDE_OUT:OPEN", function() {
        _i_("e4e:3d95157a"), c("overlay_open"), _r_()
    }), t.on("SLIDE_OUT:CLOSE", function() {
        _i_("e4e:ee6ec459"), c("overlay_close"), _r_()
    }), t.on("SLIDE_OUT:OPEN", function() {
        _i_("e4e:e19454f8"), r && r.length && c("overlay_data_failed"), _r_()
    }), _r_()
}), B.define("component/arp-searchbox-horizontal-index", function(e, t, i) {
    _i_("e4e:f99efee6");
    var n = e("component"),
        a = e("et"),
        s = n.extend({
            init: function() {
                _i_("e4e:1bc6cc69"), this.$el.children().first().text() || a.customGoal("HZUaQJdDBKFfHET", 1), _r_()
            }
        });
    i.exports = s, _r_()
}), B.when({}).run(function(e) {
    _i_("e4e:144375df");
    var t = e("with-capla"),
        i = e("server-data"),
        n = e("et"),
        a = i.b_action,
        s = i.b_site_type,
        _ = {
            index: {
                project: "index",
                service: "lp-web-mfe"
            },
            searchresults: {
                project: "search",
                service: "web-searchresults"
            }
        }[a];
    if (!_) return _r_();
    var r = "CAPLA_EVENT_app_banner_will_be_displayed";
    t(_.project, _.service, function(e) {
        if (_i_("e4e:1416797b"), e.eventBus.subscribe(r, function(e, t) {
                _i_("e4e:7d6fde8b");
                var i = 1 === B.env.fe_show_gta_header,
                    n = void 0 === B.env.fe_show_gta_header;
                t.resolve(n && i), _r_()
            }), "searchresults" === a) {
            var t = {
                EXPERIMENT_VARIANT: "CAPLA_EVENT_genius_sign_in_sheet_sr_variant",
                DISPATCH_TRACK_CLOSE_CUSTOM_GOAL: "CAPLA_EVENT_genius_sign_in_sheet_sr_track_close",
                DISPATCH_TRACK_ON_SHEET_SHOWN_STAGE: "CAPLA_EVENT_genius_sign_in_sheet_sr_track_on_sheet_shown"
            };
            e.eventBus.subscribe(t.EXPERIMENT_VARIANT, function(e, t) {
                _i_("e4e:b38324e7"), t.resolve(n.track("TDXbdLOLOLOCcTaJBHKZYQNTREWaEO")), _r_()
            }), e.eventBus.subscribe(t.DISPATCH_TRACK_CLOSE_CUSTOM_GOAL, function() {
                _i_("e4e:7d235e31"), n.customGoal("TDXbdLOLOLOCcTaJBHKZYQNTREWaEO", 1), _r_()
            }), e.eventBus.subscribe(t.DISPATCH_TRACK_ON_SHEET_SHOWN_STAGE, function() {
                _i_("e4e:0558a944"), n.stage("TDXbdLOLOLOCcTaJBHKZYQNTREWaEO", 2), _r_()
            })
        }
        "index" === a && "mdot" === s && (t = {
            EXPERIMENT_VARIANT: "CAPLA_EVENT_genius_sign_in_sheet_index_variant",
            DISPATCH_TRACK_CLOSE_CUSTOM_GOAL: "CAPLA_EVENT_genius_sign_in_sheet_index_track_close",
            DISPATCH_TRACK_ON_SHEET_SHOWN_STAGE: "CAPLA_EVENT_genius_sign_in_sheet_index_track_on_sheet_shown"
        }, e.eventBus.subscribe(t.EXPERIMENT_VARIANT, function(e, t) {
            _i_("e4e:4c4a5998"), t.resolve(n.track("TDXbEBBVYUfFdHMTaJBHKZYQNTREWaEO")), _r_()
        }), e.eventBus.subscribe(t.DISPATCH_TRACK_CLOSE_CUSTOM_GOAL, function() {
            _i_("e4e:0fee43d4"), n.customGoal("TDXbEBBVYUfFdHMTaJBHKZYQNTREWaEO", 1), _r_()
        }), e.eventBus.subscribe(t.DISPATCH_TRACK_ON_SHEET_SHOWN_STAGE, function() {
            _i_("e4e:31b7ec3b"), n.stage("TDXbEBBVYUfFdHMTaJBHKZYQNTREWaEO", 2), _r_()
        }));
        _r_()
    })(), _r_()
});