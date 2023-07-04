var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(_) {
        return _
    };
B.define("with-capla", function(_, i, e) {
    _i_("edd:cabb24f6");
    var n = _("promise"),
        t = {},
        r = {};

    function a(_) {
        return _i_("edd:4d350593"), _r_(_.slice(0, -8))
    }

    function d(i) {
        return _i_("edd:dcecff49"), t[i] || (t[i] = new n(function(_) {
            _i_("edd:e000dba4"), r[i] = _, _r_()
        })), _r_({
            promise: t[i],
            resolve: r[i]
        })
    }
    window.B.__caplaInitialised && Object.keys(window.B.__caplaInitialised).forEach(function(_) {
        _i_("edd:1d620442"), d(a(_)).resolve(window.B.__caplaInitialised[_]), _r_()
    }), document.addEventListener("booking-capla-initialized", function(_) {
        _i_("edd:bf4fa97b"), d(a(_.detail.namespace)).resolve(_.detail), _r_()
    }), e.exports = function(_, i, n) {
        return _i_("edd:edf87387"), _r_(function() {
            _i_("edd:e42d11f1");
            var e = arguments;
            d("b-" + _ + "-" + i).promise.then(function(_) {
                _i_("edd:7774fbc2");
                var i = [].slice.call(e);
                i.unshift(_), n.apply(n, i), _r_()
            }), _r_()
        })
    }, _r_()
}), B.define("component/genius-vip/const", function(_, i, e) {
    _i_("edd:9c374cd9");
    e.exports = {
        CAMPAIGN: {
            SpendAndUnlock: "gnsSpun",
            BookAndUnlock: "gnsBkun",
            InstantCredit: "gnsInsCrd",
            InstantDiscount: "gnsInsDisc",
            FreeRoomUpgrade: "gnsFrup",
            OneOffVoucher: "gnsOnbe"
        },
        MFE_EVENT: {
            CAPLA_EVENT_genius_vip_BANNER_VIEW: "bannerView",
            CAPLA_EVENT_genius_vip_BANNER_CTA_CLICK: "bannerCtaClick",
            CAPLA_EVENT_genius_vip_BANNER_DISMISS: "bannerDismiss",
            CAPLA_EVENT_genius_vip_MODAL_VIEW: "modalView",
            CAPLA_EVENT_genius_vip_MODAL_CTA_CLICK: "modalCtaClick",
            CAPLA_EVENT_genius_vip_MODAL_DISMISS: "modalDismiss",
            CAPLA_EVENT_genius_vip_REMINDER_MODAL_VIEW: "reminderModalView",
            CAPLA_EVENT_genius_vip_REMINDER_MODAL_CTA_CLICK: "reminderModalCtaClick",
            CAPLA_EVENT_genius_vip_REMINDER_MODAL_DISMISS: "reminderModalDismiss",
            CAPLA_EVENT_genius_vip_LOGIN_MODAL_VIEW: "loginModalView",
            CAPLA_EVENT_genius_vip_LOGIN_MODAL_CTA_CLICK: "loginModalCtaClick",
            CAPLA_EVENT_genius_vip_LP_VIEW: "lpView",
            CAPLA_EVENT_genius_vip_PROGRESS_CTA_CLICK: "progressCtaClick"
        },
        ACTION: {
            index: "index",
            searchresults: "sr",
            hotel: "hp",
            book: "bk",
            book2: "bk2",
            confirmation: "confirm",
            myreservations: "bkd",
            mybooking: "bkd",
            rewards_and_wallet: "wallet",
            genius_vip_campaigns: "lp"
        }
    }, _r_()
}), B.define("component/genius-vip/tracking", function(_, i, e) {
    _i_("edd:42fc0560");
    var n = _("component"),
        d = _("with-capla"),
        s = _("./const"),
        t = B.env.genius_vip_squeaks || {},
        o = function(_, i, e) {
            if (_i_("edd:05ad6432"), !s.CAMPAIGN[_] || !s.MFE_EVENT[i] || !s.ACTION[e]) return _r_();
            var n = s.CAMPAIGN[_] + "_" + s.MFE_EVENT[i] + "_" + s.ACTION[e];
            t[n] && B.squeak(t[n]), _r_()
        },
        r = n.extend({
            init: function() {
                if (_i_("edd:37530ec1"), !+this.getAttr("data-tracking-enabled")) return _r_();
                var n = !1,
                    t = this.getAttr("data-capla-project-name"),
                    r = this.getAttr("data-service-name"),
                    a = !1;

                function i(_) {
                    if (_i_("edd:0b048c3a"), n) return _r_();
                    n = !0;
                    var i = _.eventBus;
                    for (var e in s.MFE_EVENT) Object.prototype.hasOwnProperty.call(s.MFE_EVENT, e) && function(e) {
                        _i_("edd:93296bda"), i.subscribe(e, function(_, i) {
                            if (_i_("edd:96bdd4c7"), "search-web" === t && "searchresults" === r && "CAPLA_EVENT_genius_vip_BANNER_VIEW" === e) {
                                if (a) return _r_();
                                a = !0
                            }
                            o(i.campaign, e, i.actionName), _r_()
                        }), _r_()
                    }(e);
                    _r_()
                }
                document.addEventListener("booking-capla-initialized", function(_) {
                    _i_("edd:c878d6f6"), i({
                        eventBus: _.detail.eventBus
                    }), _r_()
                }), d(t, r, i)(), _r_()
            },
            getAttr: function(_) {
                return _i_("edd:fe9eb4eb"), _r_(this.$el.attr(_) || "")
            }
        });
    e.exports = r, _r_()
});