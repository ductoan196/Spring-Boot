var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(e) {
        return e
    };

function ImageLazyLoader() {
    _i_("796:a3c4e208"), this.highResQueue = [], this.shouldLoadHighRes = !1, this.viewPortExtendedHeight = null, this.isWatchingForNewImages = !1, this.supportsIntersectionObserver = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in IntersectionObserverEntry.prototype && "isIntersecting" in IntersectionObserverEntry.prototype, _r_()
}
ImageLazyLoader.prototype = {
    SCREEN_HEIGHT_COEFFICIENT: 1.4,
    SCREEN_SIDE_COEFFICIENT: 1.33,
    LAZY_IMAGE_CLASS: ".js-lazy-image",
    init: function() {
        if (_i_("796:ba3462d7"), this.watcher = this.getWatcher(), !this.supportsIntersectionObserver) {
            var e = function() {
                _i_("796:8f1a9933"), this.viewPortExtendedHeight = (window.innerHeight || document.documentElement.clientHeight) * this.SCREEN_HEIGHT_COEFFICIENT, _r_()
            }.bind(this);
            window.addEventListener("resize", e), window.addEventListener("orientationchange", e), e()
        }
        document.addEventListener("readystatechange", this.enableHighResImagesLoading.bind(this)), window.lzimg && window.lzimg.state && this.documentLoadingStateChanged(window.lzimg.state), window.lzimg = this.documentLoadingStateChanged.bind(this), _r_()
    },
    enableHighResImagesLoading: function() {
        if (_i_("796:46d830b4"), "complete" !== document.readyState) return _r_();
        document.removeEventListener("readystatechange", this.enableHighResImagesLoading.bind(this)), this.shouldLoadHighRes = !0, this.highResQueue.forEach(function(e) {
            _i_("796:f46f9eb4"), this.watcher.add(e), _r_()
        }.bind(this)), this.highResQueue = [], _r_()
    },
    loadLazyImage: function(e) {
        _i_("796:ae30e95f");
        var t = this.parseDataSrc(e);
        this.shouldLoadHighRes && 2 === t.length ? this.loadImageAndInsert(t[1], e) : this.loadImageAndInsert(t[0], e), this.shouldLoadHighRes || 2 !== t.length || this.highResQueue.push(e), _r_()
    },
    observeMutations: function() {
        (_i_("796:70f082ad"), "MutationObserver" in window) && (this.isWatchingForNewImages = !0, new MutationObserver(function(e) {
            _i_("796:cc78a360"), e.forEach(function(e) {
                _i_("796:e1cb745c"), Array.prototype.forEach.call(e.addedNodes, function(e) {
                    if (_i_("796:5a5bc3cd"), 1 !== e.nodeType) return _r_();
                    this.addToWatch(e), _r_()
                }.bind(this)), _r_()
            }.bind(this)), _r_()
        }.bind(this)).observe(document.body, {
            childList: !0,
            subtree: !0,
            characterData: !1
        }));
        _r_()
    },
    documentLoadingStateChanged: function(e) {
        _i_("796:a5f421de"), this.isWatchingForNewImages || (this.observeMutations(), this.addToWatch(document.body), this.isWatchingForNewImages || "ready" !== e || (this.addToWatch(document.body), this.listenMutationEvents(), this.isWatchingForNewImages = !0)), _r_()
    },
    addToWatch: function(e) {
        _i_("796:e6c4a23a"), this.isValidLazyImage(e) && this.watcher.add(e);
        for (var t = e.querySelectorAll(this.LAZY_IMAGE_CLASS), i = 0; i < t.length; i++) {
            var n = t[i];
            this.isValidLazyImage(n) && this.watcher.add(n)
        }
        _r_()
    },
    isValidLazyImage: function(e) {
        return _i_("796:118f6465"), _r_(e.getAttribute("data-src") && !e.getAttribute("data-lazy") && e.classList.contains("js-lazy-image"))
    },
    parseDataSrc: function(e) {
        _i_("796:01345d7a");
        for (var t = e.getAttribute("data-src").split(","), i = 0; i < t.length; i++) t[i] = t[i].trim();
        return _r_(t)
    },
    loadImageAndInsert: function(e, t) {
        _i_("796:b22bd860");
        var i = new Image,
            n = encodeURI(e);
        i.onload = function() {
            _i_("796:58293110"), "IMG" === t.tagName ? t.src = n : t.style.backgroundImage = 'url("' + n + '")', _r_()
        }, i.src = n, _r_()
    },
    listenMutationEvents: function() {
        _i_("796:c900e2c2"), "MutationEvent" in window && document.body.addEventListener("DOMNodeInserted", function(e) {
            _i_("796:bd38436b");
            var t = e.target;
            if (1 !== t.nodeType) return _r_();
            this.addToWatch(t), _r_()
        }.bind(this)), _r_()
    },
    getWatcher: function() {
        return _i_("796:5c408f0e"), this.supportsIntersectionObserver ? _r_(this.intersectionObserverWatcher()) : _r_(this.vanillaJSWatcher())
    },
    intersectionObserverWatcher: function() {
        _i_("796:5c2054d8");
        var e = function(e) {
                _i_("796:57a9386d"), e.forEach(function(e) {
                    _i_("796:c33ac790"), e.isIntersecting && (this.loadLazyImage(e.target), i.unobserve(e.target)), _r_()
                }.bind(this)), _r_()
            }.bind(this),
            t = {
                rootMargin: "0% " + (100 * this.SCREEN_SIDE_COEFFICIENT - 100) + "% " + (100 * this.SCREEN_HEIGHT_COEFFICIENT - 100) + "% " + (100 * this.SCREEN_SIDE_COEFFICIENT - 100) + "%"
            },
            i = new IntersectionObserver(e, t);
        return _r_({
            add: function(e) {
                _i_("796:16f7172d"), e.setAttribute("data-lazy", 1), i.observe(e), _r_()
            },
            remove: function(e) {
                _i_("796:659d5da7"), i.unobserve(e), _r_()
            }
        })
    },
    vanillaJSWatcher: function() {
        var e, i;
        _i_("796:101327c9");
        var n = !1,
            r = [],
            a = function(e) {
                _i_("796:72f76997");
                var t = e.getBoundingClientRect();
                return _r_(0 <= t.top && 0 <= t.left && t.top <= this.viewPortExtendedHeight)
            }.bind(this),
            s = function(i, n) {
                _i_("796:9b664c06");
                var r = null,
                    a = 0,
                    s = function() {
                        _i_("796:be67ad1f"), a = Date.now(), r = null, i.call(), _r_()
                    };
                return _r_(function() {
                    _i_("796:722f9056");
                    var e = Date.now(),
                        t = n - (e - a);
                    t <= 0 || n < t ? (r && (clearTimeout(r), r = null), a = e, i.call()) : r || (r = setTimeout(s, t)), _r_()
                })
            }(function() {
                _i_("796:60ad6391");
                for (var e = 0; e < r.length; e++) {
                    var t = r[e];
                    a(t) && (i(t), this.loadLazyImage(t))
                }
                _r_()
            }.bind(this), 50);
        return e = function(e) {
            _i_("796:714449b7"), e.setAttribute("data-lazy", 1), a(e) ? this.loadLazyImage(e) : (r.push(e), n || (_i_("796:d4c997d6"), n = !0, window.addEventListener("scroll", s), window.addEventListener("resize", s), window.addEventListener("orientationchange", s), window.removeEventListener("readystatechange", s), _r_())), _r_()
        }.bind(this), _r_({
            add: e,
            remove: i = function(e) {
                _i_("796:d5a4a5ba");
                var t = r.indexOf(e); - 1 < t && (r.splice(t, 1), 0 === r.length && (_i_("796:b0319949"), n = !1, window.removeEventListener("scroll", s), window.removeEventListener("resize", s), window.removeEventListener("orientationchange", s), window.removeEventListener("readystatechange", s), _r_())), _r_()
            }
        })
    }
}, ImageLazyLoader.prototype.SCREEN_HEIGHT_COEFFICIENT = 1.45, (new ImageLazyLoader).init();