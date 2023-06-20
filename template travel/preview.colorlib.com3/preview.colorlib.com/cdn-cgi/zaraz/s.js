(function(w, d) {
    zaraz.debug = (cH = "") => {
        document.cookie = `zarazDebug=${cH}; path=/`;
        location.reload()
    };
    window.zaraz._al = function(bW, bX, bY) {
        w.zaraz.listeners.push({
            item: bW,
            type: bX,
            callback: bY
        });
        bW.addEventListener(bX, bY)
    };
    zaraz.preview = (bZ = "") => {
        document.cookie = `zarazPreview=${bZ}; path=/`;
        location.reload()
    };
    zaraz.i = function(cy) {
        const cz = d.createElement("div");
        cz.innerHTML = unescape(cy);
        const cA = cz.querySelectorAll("script");
        for (let cB = 0; cB < cA.length; cB++) {
            const cC = d.createElement("script");
            cA[cB].innerHTML && (cC.innerHTML = cA[cB].innerHTML);
            for (const cD of cA[cB].attributes) cC.setAttribute(cD.name, cD.value);
            d.head.appendChild(cC);
            cA[cB].remove()
        }
        d.body.appendChild(cz)
    };
    zaraz.f = async function(cE, cF) {
        const cG = {
            credentials: "include",
            keepalive: !0,
            mode: "no-cors"
        };
        if (cF) {
            cG.method = "POST";
            cG.body = new URLSearchParams(cF);
            cG.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        return await fetch(cE, cG)
    };
    ! function(cI, cJ, cK, cL, cM, cN) {
        function cO(cQ, cR) {
            cN ? cL(cQ, cR || 32) : cM.push(cQ, cR)
        }

        function cP(cS, cT, cU, cV) {
            return cT && cJ.getElementById(cT) || (cV = cJ.createElement(cS || "SCRIPT"), cT && (cV.id = cT), cU && (cV.onload = cU), cJ.head.appendChild(cV)), cV || {}
        }
        cN = /p/.test(cJ.readyState), cI.addEventListener("on" + cK in cI ? cK : "load", (function() {
            for (cN = 1; cM[0];) cO(cM.shift(), cM.shift())
        })), cO._ = cP, cI.defer = cO, cI.deferscript = function(cW, cX, cY, cZ) {
            cO((function() {
                cP("", cX, cZ).src = cW
            }), cY)
        }
    }(this, d, "pageshow", setTimeout, []);
    defer((function() {
        for (; zaraz.deferred.length;) zaraz.deferred.pop()();
        Object.defineProperty(zaraz.deferred, "push", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(...c_) {
                let da = Array.prototype.push.apply(this, c_);
                for (; zaraz.deferred.length;) zaraz.deferred.pop()();
                return da
            }
        })
    }), 5500);
    addEventListener("visibilitychange", (function() {
        for (; zaraz.deferred.length;) zaraz.deferred.pop()()
    }));
    window.zaraz._p = async W => new Promise((X => {
        if (W) {
            W.e && W.e.forEach((Y => {
                try {
                    new Function(Y)()
                } catch (Z) {
                    console.error(`Error executing script: ${Y}\n`, Z)
                }
            }));
            Promise.allSettled((W.f || []).map((_ => fetch(_[0], _[1]))))
        }
        X()
    }));
    zaraz.pageVariables = {};
    zaraz.__zcl = {};
    zaraz.track = async function(cc, cd, ce) {
        return new Promise(((cf, cg) => {
            const ch = {
                name: cc,
                data: {}
            };
            for (const ci of [localStorage, sessionStorage]) Object.keys(ci || {}).filter((ck => ck.startsWith("_zaraz_"))).forEach((cj => {
                try {
                    ch.data[cj.slice(7)] = JSON.parse(ci.getItem(cj))
                } catch {
                    ch.data[cj.slice(7)] = ci.getItem(cj)
                }
            }));
            Object.keys(zaraz.pageVariables).forEach((cl => ch.data[cl] = JSON.parse(zaraz.pageVariables[cl])));
            Object.keys(zaraz.__zcl).forEach((cm => ch.data[`__zcl_${cm}`] = zaraz.__zcl[cm]));
            ch.data.__zarazMCListeners = zaraz.__zarazMCListeners;
            //
            ch.data = { ...ch.data,
                ...cd
            };
            ch.zarazData = zarazData;
            fetch("/cdn-cgi/zaraz/t", {
                credentials: "include",
                keepalive: !0,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ch)
            }).catch((() => {
                //
                return fetch("/cdn-cgi/zaraz/t", {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(ch)
                })
            })).then((function(co) {
                zarazData._let = (new Date).getTime();
                co.ok || cg();
                return 204 !== co.status && co.json()
            })).then((async cn => {
                await zaraz._p(cn);
                "function" == typeof ce && ce()
            })).finally((() => cf()))
        }))
    };
    zaraz.set = function(cp, cq, cr) {
        try {
            cq = JSON.stringify(cq)
        } catch (cs) {
            return
        }
        prefixedKey = "_zaraz_" + cp;
        sessionStorage && sessionStorage.removeItem(prefixedKey);
        localStorage && localStorage.removeItem(prefixedKey);
        delete zaraz.pageVariables[cp];
        if (void 0 !== cq) {
            cr && "session" == cr.scope ? sessionStorage && sessionStorage.setItem(prefixedKey, cq) : cr && "page" == cr.scope ? zaraz.pageVariables[cp] = cq : localStorage && localStorage.setItem(prefixedKey, cq);
            zaraz.__watchVar = {
                key: cp,
                value: cq
            }
        }
    };
    for (const {
            m: ct,
            a: cu
        } of zarazData.q.filter((({
            m: cv
        }) => ["debug", "set"].includes(cv)))) zaraz[ct](...cu);
    for (const {
            m: cw,
            a: cx
        } of zaraz.q) zaraz[cw](...cx);
    delete zaraz.q;
    delete zarazData.q;
    zaraz.fulfilTrigger = function(bv, bw, bx, by) {
        zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
        zaraz.__zarazTriggerMap[bv] || (zaraz.__zarazTriggerMap[bv] = "");
        zaraz.__zarazTriggerMap[bv] += "*" + bw + "*";
        zaraz.track("__zarazEmpty", { ...bx,
            __zarazClientTriggers: zaraz.__zarazTriggerMap[bv]
        }, by)
    };
    window.dataLayer = w.dataLayer || [];
    zaraz._processDataLayer = de => {
        for (const df of Object.entries(de)) zaraz.set(df[0], df[1], {
            scope: "page"
        });
        if (de.event) {
            if (zarazData.dataLayerIgnore && zarazData.dataLayerIgnore.includes(de.event)) return;
            let dg = {};
            for (let dh of dataLayer.slice(0, dataLayer.indexOf(de) + 1)) dg = { ...dg,
                ...dh
            };
            delete dg.event;
            de.event.startsWith("gtm.") || zaraz.track(de.event, dg)
        }
    };
    const dd = w.dataLayer.push;
    Object.defineProperty(w.dataLayer, "push", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: function(...di) {
            let dj = dd.apply(this, di);
            zaraz._processDataLayer(di[0]);
            return dj
        }
    });
    dataLayer.forEach((dk => zaraz._processDataLayer(dk)));
    zaraz._cts = () => {
        zaraz._timeouts && zaraz._timeouts.forEach((U => clearTimeout(U)));
        zaraz._timeouts = []
    };
    zaraz._rl = function() {
        w.zaraz.listeners && w.zaraz.listeners.forEach((V => V.item.removeEventListener(V.type, V.callback)));
        window.zaraz.listeners = []
    };
    history.pushState = function() {
        try {
            zaraz._rl();
            zaraz._cts && zaraz._cts()
        } finally {
            History.prototype.pushState.apply(history, arguments);
            setTimeout((() => {
                zarazData.l = d.location.href;
                zarazData.t = d.title;
                zaraz.pageVariables = {};
                zaraz.__zarazMCListeners = {};
                zaraz.track("__zarazSPA")
            }), 100)
        }
    };
    history.replaceState = function() {
        try {
            zaraz._rl();
            zaraz._cts && zaraz._cts()
        } finally {
            History.prototype.replaceState.apply(history, arguments);
            setTimeout((() => {
                zarazData.l = d.location.href;
                zarazData.t = d.title;
                zaraz.pageVariables = {};
                zaraz.track("__zarazSPA")
            }), 100)
        }
    };
    zaraz._c = eR => {
        const {
            event: eS,
            ...eT
        } = eR;
        zaraz.track(eS, { ...eT,
            __zarazClientEvent: !0
        })
    };
    zaraz._syncedAttributes = ["altKey", "clientX", "clientY", "pageX", "pageY", "button"];
    zaraz.__zcl.track = !0;
    d.addEventListener("visibilitychange", (ed => {
        zaraz._c({
            event: "visibilityChange",
            visibilityChange: [{
                state: d.visibilityState,
                timestamp: (new Date).getTime()
            }]
        }, 1)
    }));
    zaraz.__zcl.visibilityChange = !0;
    zaraz.__zarazMCListeners = {
        "google-analytics_v4_20ac": ["visibilityChange"]
    };
    zaraz._p({
        "e": ["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)"],
        "f": [
            ["https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=a9493252-68e6-453c-a6bb-fbe95d2a8d59&_u=KGDAAEADQAAAAC%7E&z=697509035", {}]
        ]
    })
})(window, document);