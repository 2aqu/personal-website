(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7620], {
    3454: function(e, t, r) {
        "use strict";
        var n, o;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (o = r.g.process) ? void 0 : o.env) ? r.g.process : r(7663)
    },
    7663: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, o = e.exports = {};
                    function i() {
                        throw Error("setTimeout has not been defined")
                    }
                    function l() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === i || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (r) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : i
                        } catch (e) {
                            t = i
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : l
                        } catch (e) {
                            r = l
                        }
                    }();
                    var s = []
                      , c = !1
                      , u = -1;
                    function d() {
                        c && n && (c = !1,
                        n.length ? s = n.concat(s) : u = -1,
                        s.length && f())
                    }
                    function f() {
                        if (!c) {
                            var e = a(d);
                            c = !0;
                            for (var t = s.length; t; ) {
                                for (n = s,
                                s = []; ++u < t; )
                                    n && n[u].run();
                                u = -1,
                                t = s.length
                            }
                            n = null,
                            c = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === l || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function p(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function m() {}
                    o.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        s.push(new p(e,t)),
                        1 !== s.length || c || a(f)
                    }
                    ,
                    p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    o.title = "browser",
                    o.browser = !0,
                    o.env = {},
                    o.argv = [],
                    o.version = "",
                    o.versions = {},
                    o.on = m,
                    o.addListener = m,
                    o.once = m,
                    o.off = m,
                    o.removeListener = m,
                    o.removeAllListeners = m,
                    o.emit = m,
                    o.prependListener = m,
                    o.prependOnceListener = m,
                    o.listeners = function(e) {
                        return []
                    }
                    ,
                    o.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    o.cwd = function() {
                        return "/"
                    }
                    ,
                    o.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    o.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var o = r[e];
                if (void 0 !== o)
                    return o.exports;
                var i = r[e] = {
                    exports: {}
                }
                  , l = !0;
                try {
                    t[e](i, i.exports, n),
                    l = !1
                } finally {
                    l && delete r[e]
                }
                return i.exports
            }
            n.ab = "//";
            var o = n(229);
            e.exports = o
        }()
    },
    7620: function(e, t, r) {
        "use strict";
        let n;
        r.d(t, {
            e: function() {
                return t3
            }
        });
        var o, i = r(7294);
        function l(e, t=-1 / 0, r=1 / 0) {
            return Math.min(Math.max(e, t), r)
        }
        let a = {}
          , s = 0
          , c = !1
          , u = null
          , d = null
          , f = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        }
          , p = i.createContext(f)
          , m = i.createContext(!1)
          , b = !!("undefined" != typeof window && window.document && window.document.createElement)
          , g = new WeakMap
          , h = "function" == typeof i.useId ? function(e) {
            let t = i.useId()
              , [r] = (0,
            i.useState)(x())
              , n = r ? "react-aria" : `react-aria${f.prefix}`;
            return e || `${n}-${t}`
        }
        : function(e) {
            let t = (0,
            i.useContext)(p);
            t !== f || b || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
            let r = function(e=!1) {
                let t = (0,
                i.useContext)(p)
                  , r = (0,
                i.useRef)(null);
                if (null === r.current && !e) {
                    var n, o;
                    let e = null === (o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o ? void 0 : null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
                    if (e) {
                        let r = g.get(e);
                        null == r ? g.set(e, {
                            id: t.current,
                            state: e.memoizedState
                        }) : e.memoizedState !== r.state && (t.current = r.id,
                        g.delete(e))
                    }
                    r.current = ++t.current
                }
                return r.current
            }(!!e)
              , n = `react-aria${t.prefix}`;
            return e || `${n}-${r}`
        }
        ;
        function v() {
            return !1
        }
        function y() {
            return !0
        }
        function w(e) {
            return ()=>{}
        }
        function x() {
            return "function" == typeof i.useSyncExternalStore ? i.useSyncExternalStore(w, v, y) : (0,
            i.useContext)(m)
        }
        var E = function() {
            for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
                (e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (r = 0; r < i; r++)
                                t[r] && (n = e(t[r])) && (o && (o += " "),
                                o += n)
                        } else
                            for (n in t)
                                t[n] && (o && (o += " "),
                                o += n)
                    }
                    return o
                }(e)) && (n && (n += " "),
                n += t);
            return n
        };
        let k = "undefined" != typeof document ? i.useLayoutEffect : ()=>{}
        ;
        function T(e) {
            let t = (0,
            i.useRef)(null);
            return k(()=>{
                t.current = e
            }
            , [e]),
            (0,
            i.useCallback)((...e)=>(0,
            t.current)(...e), [])
        }
        let C = !!("undefined" != typeof window && window.document && window.document.createElement)
          , P = new Map
          , L = e=>{
            var t;
            return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        }
        ;
        function M(...e) {
            let t = {
                ...e[0]
            };
            for (let r = 1; r < e.length; r++) {
                let n = e[r];
                for (let e in n) {
                    let r = t[e]
                      , o = n[e];
                    "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = function(...e) {
                        return (...t)=>{
                            for (let r of e)
                                "function" == typeof r && r(...t)
                        }
                    }(r, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof r && "string" == typeof o ? t[e] = E(r, o) : "id" === e && r && o ? t.id = function(e, t) {
                        if (e === t)
                            return e;
                        let r = P.get(e);
                        if (r)
                            return r(t),
                            t;
                        let n = P.get(t);
                        return n ? (n(e),
                        e) : t
                    }(r, o) : t[e] = void 0 !== o ? o : r
                }
            }
            return t
        }
        let O = new Set(["id"])
          , S = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"])
          , z = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"])
          , R = /^(data-.*)$/;
        function j(e) {
            if (function() {
                if (null == A) {
                    A = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return A = !0,
                                !0
                            }
                        })
                    } catch (e) {}
                }
                return A
            }())
                e.focus({
                    preventScroll: !0
                });
            else {
                let t = function(e) {
                    for (var t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement; t instanceof HTMLElement && t !== n; )
                        (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
                            element: t,
                            scrollTop: t.scrollTop,
                            scrollLeft: t.scrollLeft
                        }),
                        t = t.parentNode;
                    return n instanceof HTMLElement && r.push({
                        element: n,
                        scrollTop: n.scrollTop,
                        scrollLeft: n.scrollLeft
                    }),
                    r
                }(e);
                e.focus(),
                function(e) {
                    for (let {element: t, scrollTop: r, scrollLeft: n} of e)
                        t.scrollTop = r,
                        t.scrollLeft = n
                }(t)
            }
        }
        let A = null
          , N = new Map
          , D = new Set;
        function I() {
            if ("undefined" == typeof window)
                return;
            let e = t=>{
                let r = N.get(t.target);
                if (r && (r.delete(t.propertyName),
                0 === r.size && (t.target.removeEventListener("transitioncancel", e),
                N.delete(t.target)),
                0 === N.size)) {
                    for (let e of D)
                        e();
                    D.clear()
                }
            }
            ;
            document.body.addEventListener("transitionrun", t=>{
                let r = N.get(t.target);
                r || (r = new Set,
                N.set(t.target, r),
                t.target.addEventListener("transitioncancel", e)),
                r.add(t.propertyName)
            }
            ),
            document.body.addEventListener("transitionend", e)
        }
        "undefined" != typeof document && ("loading" !== document.readyState ? I() : document.addEventListener("DOMContentLoaded", I)),
        "undefined" != typeof document && window.visualViewport,
        new WeakMap,
        i.createContext({
            register: ()=>{}
        }).displayName = "PressResponderContext";
        Symbol("linkClicked");
        let H = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
        class _ {
            isDefaultPrevented() {
                return this.nativeEvent.defaultPrevented
            }
            preventDefault() {
                this.defaultPrevented = !0,
                this.nativeEvent.preventDefault()
            }
            stopPropagation() {
                this.nativeEvent.stopPropagation(),
                this.isPropagationStopped = ()=>!0
            }
            isPropagationStopped() {
                return !1
            }
            persist() {}
            constructor(e, t) {
                this.nativeEvent = t,
                this.target = t.target,
                this.currentTarget = t.currentTarget,
                this.relatedTarget = t.relatedTarget,
                this.bubbles = t.bubbles,
                this.cancelable = t.cancelable,
                this.defaultPrevented = t.defaultPrevented,
                this.eventPhase = t.eventPhase,
                this.isTrusted = t.isTrusted,
                this.timeStamp = t.timeStamp,
                this.type = e
            }
        }
        function $(e) {
            let t = (0,
            i.useRef)({
                isFocused: !1,
                observer: null
            });
            k(()=>{
                let e = t.current;
                return ()=>{
                    e.observer && (e.observer.disconnect(),
                    e.observer = null)
                }
            }
            , []);
            let r = T(t=>{
                null == e || e(t)
            }
            );
            return (0,
            i.useCallback)(e=>{
                if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                    t.current.isFocused = !0;
                    let n = e.target;
                    n.addEventListener("focusout", e=>{
                        t.current.isFocused = !1,
                        n.disabled && r(new _("blur",e)),
                        t.current.observer && (t.current.observer.disconnect(),
                        t.current.observer = null)
                    }
                    , {
                        once: !0
                    }),
                    t.current.observer = new MutationObserver(()=>{
                        if (t.current.isFocused && n.disabled) {
                            var e;
                            null === (e = t.current.observer) || void 0 === e || e.disconnect();
                            let r = n === document.activeElement ? null : document.activeElement;
                            n.dispatchEvent(new FocusEvent("blur",{
                                relatedTarget: r
                            })),
                            n.dispatchEvent(new FocusEvent("focusout",{
                                bubbles: !0,
                                relatedTarget: r
                            }))
                        }
                    }
                    ),
                    t.current.observer.observe(n, {
                        attributes: !0,
                        attributeFilter: ["disabled"]
                    })
                }
            }
            , [r])
        }
        let W = null
          , F = new Set
          , B = !1
          , V = !1
          , G = !1;
        function U(e, t) {
            for (let r of F)
                r(e, t)
        }
        function Y(e) {
            var t, r;
            V = !0,
            e.metaKey || (t = /^Mac/i,
            !("undefined" != typeof window && null != window.navigator && t.test((null === (r = window.navigator.userAgentData) || void 0 === r ? void 0 : r.platform) || window.navigator.platform)) && e.altKey) || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (W = "keyboard",
            U("keyboard", e))
        }
        function K(e) {
            W = "pointer",
            ("mousedown" === e.type || "pointerdown" === e.type) && (V = !0,
            U("pointer", e))
        }
        function X(e) {
            var t, r;
            (0 === e.mozInputSource && e.isTrusted || ((t = /Android/i,
            "undefined" != typeof window && null != window.navigator && ((null === (r = window.navigator.userAgentData) || void 0 === r ? void 0 : r.brands.some(e=>t.test(e.brand))) || t.test(window.navigator.userAgent)) && e.pointerType) ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)) && (V = !0,
            W = "virtual")
        }
        function q(e) {
            e.target !== window && e.target !== document && (V || G || (W = "virtual",
            U("virtual", e)),
            V = !1,
            G = !1)
        }
        function J() {
            V = !1,
            G = !0
        }
        function Q() {
            if ("undefined" == typeof window || B)
                return;
            let e = HTMLElement.prototype.focus;
            HTMLElement.prototype.focus = function() {
                V = !0,
                e.apply(this, arguments)
            }
            ,
            document.addEventListener("keydown", Y, !0),
            document.addEventListener("keyup", Y, !0),
            document.addEventListener("click", X, !0),
            window.addEventListener("focus", q, !0),
            window.addEventListener("blur", J, !1),
            "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", K, !0),
            document.addEventListener("pointermove", K, !0),
            document.addEventListener("pointerup", K, !0)) : (document.addEventListener("mousedown", K, !0),
            document.addEventListener("mousemove", K, !0),
            document.addEventListener("mouseup", K, !0)),
            B = !0
        }
        "undefined" != typeof document && ("loading" !== document.readyState ? Q() : document.addEventListener("DOMContentLoaded", Q));
        let Z = !1
          , ee = 0;
        function et() {
            Z = !0,
            setTimeout(()=>{
                Z = !1
            }
            , 50)
        }
        function er(e) {
            "touch" === e.pointerType && et()
        }
        function en() {
            if ("undefined" != typeof document)
                return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", er) : document.addEventListener("touchend", et),
                ee++,
                ()=>{
                    --ee > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", er) : document.removeEventListener("touchend", et))
                }
        }
        function eo(e) {
            let {onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o} = e
              , [l,a] = (0,
            i.useState)(!1)
              , s = (0,
            i.useRef)({
                isHovered: !1,
                ignoreEmulatedMouseEvents: !1,
                pointerType: "",
                target: null
            }).current;
            (0,
            i.useEffect)(en, []);
            let {hoverProps: c, triggerHoverEnd: u} = (0,
            i.useMemo)(()=>{
                let e = (e,n)=>{
                    if (s.pointerType = n,
                    o || "touch" === n || s.isHovered || !e.currentTarget.contains(e.target))
                        return;
                    s.isHovered = !0;
                    let i = e.currentTarget;
                    s.target = i,
                    t && t({
                        type: "hoverstart",
                        target: i,
                        pointerType: n
                    }),
                    r && r(!0),
                    a(!0)
                }
                  , i = (e,t)=>{
                    if (s.pointerType = "",
                    s.target = null,
                    "touch" === t || !s.isHovered)
                        return;
                    s.isHovered = !1;
                    let o = e.currentTarget;
                    n && n({
                        type: "hoverend",
                        target: o,
                        pointerType: t
                    }),
                    r && r(!1),
                    a(!1)
                }
                  , l = {};
                return "undefined" != typeof PointerEvent ? (l.onPointerEnter = t=>{
                    Z && "mouse" === t.pointerType || e(t, t.pointerType)
                }
                ,
                l.onPointerLeave = e=>{
                    !o && e.currentTarget.contains(e.target) && i(e, e.pointerType)
                }
                ) : (l.onTouchStart = ()=>{
                    s.ignoreEmulatedMouseEvents = !0
                }
                ,
                l.onMouseEnter = t=>{
                    s.ignoreEmulatedMouseEvents || Z || e(t, "mouse"),
                    s.ignoreEmulatedMouseEvents = !1
                }
                ,
                l.onMouseLeave = e=>{
                    !o && e.currentTarget.contains(e.target) && i(e, "mouse")
                }
                ),
                {
                    hoverProps: l,
                    triggerHoverEnd: i
                }
            }
            , [t, r, n, o, s]);
            return (0,
            i.useEffect)(()=>{
                o && u({
                    currentTarget: s.target
                }, s.pointerType)
            }
            , [o]),
            {
                hoverProps: c,
                isHovered: l
            }
        }
        function ei(e, t) {
            if (e.button > 0)
                return !1;
            if (e.target) {
                let t = e.target.ownerDocument;
                if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]"))
                    return !1
            }
            return t.current && !t.current.contains(e.target)
        }
        function el(e) {
            if (!e)
                return;
            let t = !0;
            return r=>{
                e({
                    ...r,
                    preventDefault() {
                        r.preventDefault()
                    },
                    isDefaultPrevented: ()=>r.isDefaultPrevented(),
                    stopPropagation() {
                        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
                    },
                    continuePropagation() {
                        t = !1
                    }
                }),
                t && r.stopPropagation()
            }
        }
        let ea = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"];
        function es(e, t) {
            return !!e && !!t && t.some(t=>t.contains(e))
        }
        ea.join(":not([hidden]),"),
        ea.push('[tabindex]:not([tabindex="-1"]):not([disabled])'),
        ea.join(':not([hidden]):not([tabindex="-1"]),');
        class ec {
            get size() {
                return this.fastMap.size
            }
            getTreeNode(e) {
                return this.fastMap.get(e)
            }
            addTreeNode(e, t, r) {
                let n = this.fastMap.get(null != t ? t : null);
                if (!n)
                    return;
                let o = new eu({
                    scopeRef: e
                });
                n.addChild(o),
                o.parent = n,
                this.fastMap.set(e, o),
                r && (o.nodeToRestore = r)
            }
            addNode(e) {
                this.fastMap.set(e.scopeRef, e)
            }
            removeTreeNode(e) {
                if (null === e)
                    return;
                let t = this.fastMap.get(e);
                if (!t)
                    return;
                let r = t.parent;
                for (let e of this.traverse())
                    e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && es(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
                let n = t.children;
                r && (r.removeChild(t),
                n.size > 0 && n.forEach(e=>r && r.addChild(e))),
                this.fastMap.delete(t.scopeRef)
            }
            *traverse(e=this.root) {
                if (null != e.scopeRef && (yield e),
                e.children.size > 0)
                    for (let t of e.children)
                        yield*this.traverse(t)
            }
            clone() {
                var e, t;
                let r = new ec;
                for (let n of this.traverse())
                    r.addTreeNode(n.scopeRef, null !== (t = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, n.nodeToRestore);
                return r
            }
            constructor() {
                this.fastMap = new Map,
                this.root = new eu({
                    scopeRef: null
                }),
                this.fastMap.set(null, this.root)
            }
        }
        class eu {
            addChild(e) {
                this.children.add(e),
                e.parent = this
            }
            removeChild(e) {
                this.children.delete(e),
                e.parent = void 0
            }
            constructor(e) {
                this.children = new Set,
                this.contain = !1,
                this.scopeRef = e.scopeRef
            }
        }
        let ed = new ec
          , ef = i.createContext(null)
          , ep = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"])
          , em = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"])
          , eb = Symbol.for("react-aria.i18n.locale");
        function eg() {
            let e = "undefined" != typeof window && window[eb] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
            try {
                Intl.DateTimeFormat.supportedLocalesOf([e])
            } catch (t) {
                e = "en-US"
            }
            return {
                locale: e,
                direction: !function(e) {
                    if (Intl.Locale) {
                        let t = new Intl.Locale(e).maximize()
                          , r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
                        if (r)
                            return "rtl" === r.direction;
                        if (t.script)
                            return ep.has(t.script)
                    }
                    let t = e.split("-")[0];
                    return em.has(t)
                }(e) ? "ltr" : "rtl"
            }
        }
        let eh = eg()
          , ev = new Set;
        function ey() {
            for (let e of (eh = eg(),
            ev))
                e(eh)
        }
        let ew = i.createContext(null);
        new WeakMap;
        var ex = r(3935);
        let eE = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        }
          , ek = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }
          , eT = {
            top: "left",
            left: "top"
        }
          , eC = {
            top: "height",
            left: "width"
        }
          , eP = {
            width: "totalWidth",
            height: "totalHeight"
        }
          , eL = {}
          , eM = "undefined" != typeof document && window.visualViewport;
        function eO(e) {
            let t = 0
              , r = 0
              , n = 0
              , o = 0
              , i = 0
              , l = 0
              , a = {};
            if ("BODY" === e.tagName) {
                var s, c;
                let i = document.documentElement;
                n = i.clientWidth,
                o = i.clientHeight,
                t = null !== (s = null == eM ? void 0 : eM.width) && void 0 !== s ? s : n,
                r = null !== (c = null == eM ? void 0 : eM.height) && void 0 !== c ? c : o,
                a.top = i.scrollTop || e.scrollTop,
                a.left = i.scrollLeft || e.scrollLeft
            } else
                ({width: t, height: r, top: i, left: l} = eA(e)),
                a.top = e.scrollTop,
                a.left = e.scrollLeft,
                n = t,
                o = r;
            return {
                width: t,
                height: r,
                totalWidth: n,
                totalHeight: o,
                scroll: a,
                top: i,
                left: l
            }
        }
        function eS(e, t, r, n, o, i) {
            let l = o.scroll[e]
              , a = n[eC[e]]
              , s = t - i - l
              , c = t + i - l + r;
            return s < 0 ? -s : c > a ? Math.max(a - c, -s) : 0
        }
        function ez(e) {
            if (eL[e])
                return eL[e];
            let[t,r] = e.split(" ")
              , n = eE[t] || "right"
              , o = eT[n];
            eE[r] || (r = "center");
            let i = eC[n]
              , l = eC[o];
            return eL[e] = {
                placement: t,
                crossPlacement: r,
                axis: n,
                crossAxis: o,
                size: i,
                crossSize: l
            },
            eL[e]
        }
        function eR(e, t, r, n, o, i, a, s, c, u) {
            let {placement: d, crossPlacement: f, axis: p, crossAxis: m, size: b, crossSize: g} = n
              , h = {};
            h[m] = e[m],
            "center" === f ? h[m] += (e[g] - r[g]) / 2 : f !== m && (h[m] += e[g] - r[g]),
            h[m] += i;
            let v = e[m] - r[g] + c + u
              , y = e[m] + e[g] - c - u;
            if (h[m] = l(h[m], v, y),
            d === p) {
                let r = s ? a[b] : t[eP[b]];
                h[ek[p]] = Math.floor(r - e[p] + o)
            } else
                h[p] = Math.floor(e[p] + e[b] + o);
            return h
        }
        function ej(e, t, r, n, o, i) {
            let {placement: l, axis: a, size: s} = i;
            return l === a ? Math.max(0, r[a] - e[a] - e.scroll[a] + t[a] - n[a] - n[ek[a]] - o) : Math.max(0, e[s] + e[a] + e.scroll[a] - t[a] - r[a] - r[s] - n[a] - n[ek[a]] - o)
        }
        function eA(e) {
            let {top: t, left: r, width: n, height: o} = e.getBoundingClientRect()
              , {scrollTop: i, scrollLeft: l, clientTop: a, clientLeft: s} = document.documentElement;
            return {
                top: t + i - a,
                left: r + l - s,
                width: n,
                height: o
            }
        }
        function eN(e, t) {
            let r, n = window.getComputedStyle(e);
            if ("fixed" === n.position) {
                let {top: t, left: n, width: o, height: i} = e.getBoundingClientRect();
                r = {
                    top: t,
                    left: n,
                    width: o,
                    height: i
                }
            } else {
                r = eA(e);
                let n = eA(t)
                  , o = window.getComputedStyle(t);
                n.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop,
                n.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft,
                r.top -= n.top,
                r.left -= n.left
            }
            return r.top -= parseInt(n.marginTop, 10) || 0,
            r.left -= parseInt(n.marginLeft, 10) || 0,
            r
        }
        function eD(e) {
            let t = window.getComputedStyle(e);
            return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter"in t && "none" !== t.backdropFilter || "WebkitBackdropFilter"in t && "none" !== t.WebkitBackdropFilter
        }
        let eI = new WeakMap
          , eH = "undefined" != typeof document && window.visualViewport
          , e_ = [];
        "undefined" != typeof document && window.visualViewport;
        let e$ = i.createContext(null);
        function eW(e) {
            let {children: t} = e
              , r = (0,
            i.useContext)(e$)
              , [n,o] = (0,
            i.useState)(0)
              , l = (0,
            i.useMemo)(()=>({
                parent: r,
                modalCount: n,
                addModal() {
                    o(e=>e + 1),
                    r && r.addModal()
                },
                removeModal() {
                    o(e=>e - 1),
                    r && r.removeModal()
                }
            }), [r, n]);
            return i.createElement(e$.Provider, {
                value: l
            }, t)
        }
        function eF(e) {
            let t;
            let {modalProviderProps: r} = {
                modalProviderProps: {
                    "aria-hidden": !!(t = (0,
                    i.useContext)(e$)) && t.modalCount > 0 || null
                }
            };
            return i.createElement("div", {
                "data-overlay-container": !0,
                ...e,
                ...r
            })
        }
        function eB(e) {
            return i.createElement(eW, null, i.createElement(eF, e))
        }
        function eV(e) {
            let t = x()
              , {portalContainer: r=t ? null : document.body, ...n} = e;
            if (i.useEffect(()=>{
                if (null == r ? void 0 : r.closest("[data-overlay-container]"))
                    throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
            }
            , [r]),
            !r)
                return null;
            let o = i.createElement(eB, n);
            return ex.createPortal(o, r)
        }
        new WeakMap;
        var eG = (e,t,r=!0)=>{
            if (!t)
                return [e, {}];
            let n = t.reduce((t,r)=>r in e ? {
                ...t,
                [r]: e[r]
            } : t, {});
            return r ? [Object.keys(e).filter(e=>!t.includes(e)).reduce((t,r)=>({
                ...t,
                [r]: e[r]
            }), {}), n] : [e, n]
        }
          , eU = ["0", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl", "1", "2", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"].map(e=>`unit-${e}`)
          , eY = e=>"boolean" == typeof e ? `${e}` : 0 === e ? "0" : e
          , eK = e=>!e || "object" != typeof e || 0 === Object.keys(e).length
          , eX = (e,t)=>JSON.stringify(e) === JSON.stringify(t);
        function eq(e) {
            let t = [];
            return function e(t, r) {
                t.forEach(function(t) {
                    Array.isArray(t) ? e(t, r) : r.push(t)
                })
            }(e, t),
            t
        }
        var eJ = (...e)=>eq(e).filter(Boolean)
          , eQ = (e,t)=>{
            let r = {}
              , n = Object.keys(e)
              , o = Object.keys(t);
            for (let i of n)
                if (o.includes(i)) {
                    let n = e[i]
                      , o = t[i];
                    "object" == typeof n && "object" == typeof o ? r[i] = eQ(n, o) : r[i] = o + " " + n
                } else
                    r[i] = e[i];
            for (let e of o)
                n.includes(e) || (r[e] = t[e]);
            return r
        }
          , eZ = e=>e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e
          , e0 = /^\[(.+)\]$/;
        function e1(e, t) {
            var r = e;
            return t.split("-").forEach(function(e) {
                r.nextPart.has(e) || r.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                r = r.nextPart.get(e)
            }),
            r
        }
        var e5 = /\s+/;
        function e2() {
            for (var e, t, r = 0, n = ""; r < arguments.length; )
                (e = arguments[r++]) && (t = function e(t) {
                    if ("string" == typeof t)
                        return t;
                    for (var r, n = "", o = 0; o < t.length; o++)
                        t[o] && (r = e(t[o])) && (n && (n += " "),
                        n += r);
                    return n
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
        function e4() {
            for (var e, t, r, n = arguments.length, o = Array(n), i = 0; i < n; i++)
                o[i] = arguments[i];
            var l = function(n) {
                var i = o[0];
                return t = (e = function(e) {
                    var t, r, n, o, i, l, a, s, c, u, d;
                    return {
                        cache: function(e) {
                            if (e < 1)
                                return {
                                    get: function() {},
                                    set: function() {}
                                };
                            var t = 0
                              , r = new Map
                              , n = new Map;
                            function o(o, i) {
                                r.set(o, i),
                                ++t > e && (t = 0,
                                n = r,
                                r = new Map)
                            }
                            return {
                                get: function(e) {
                                    var t = r.get(e);
                                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t),
                                    t) : void 0
                                },
                                set: function(e, t) {
                                    r.has(e) ? r.set(e, t) : o(e, t)
                                }
                            }
                        }(e.cacheSize),
                        splitModifiers: (r = 1 === (t = e.separator || ":").length,
                        n = t[0],
                        o = t.length,
                        function(e) {
                            for (var i, l = [], a = 0, s = 0, c = 0; c < e.length; c++) {
                                var u = e[c];
                                if (0 === a) {
                                    if (u === n && (r || e.slice(c, c + o) === t)) {
                                        l.push(e.slice(s, c)),
                                        s = c + o;
                                        continue
                                    }
                                    if ("/" === u) {
                                        i = c;
                                        continue
                                    }
                                }
                                "[" === u ? a++ : "]" === u && a--
                            }
                            var d = 0 === l.length ? e : e.substring(s)
                              , f = d.startsWith("!")
                              , p = f ? d.substring(1) : d;
                            return {
                                modifiers: l,
                                hasImportantModifier: f,
                                baseClassName: p,
                                maybePostfixModifierPosition: i && i > s ? i - s : void 0
                            }
                        }
                        ),
                        ...(s = e.theme,
                        c = e.prefix,
                        u = {
                            nextPart: new Map,
                            validators: []
                        },
                        (d = Object.entries(e.classGroups),
                        c ? d.map(function(e) {
                            return [e[0], e[1].map(function(e) {
                                return "string" == typeof e ? c + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(function(e) {
                                    return [c + e[0], e[1]]
                                })) : e
                            })]
                        }) : d).forEach(function(e) {
                            var t = e[0];
                            (function e(t, r, n, o) {
                                t.forEach(function(t) {
                                    if ("string" == typeof t) {
                                        ("" === t ? r : e1(r, t)).classGroupId = n;
                                        return
                                    }
                                    if ("function" == typeof t) {
                                        if (t.isThemeGetter) {
                                            e(t(o), r, n, o);
                                            return
                                        }
                                        r.validators.push({
                                            validator: t,
                                            classGroupId: n
                                        });
                                        return
                                    }
                                    Object.entries(t).forEach(function(t) {
                                        var i = t[0];
                                        e(t[1], e1(r, i), n, o)
                                    })
                                })
                            }
                            )(e[1], u, t, s)
                        }),
                        i = e.conflictingClassGroups,
                        a = void 0 === (l = e.conflictingClassGroupModifiers) ? {} : l,
                        {
                            getClassGroupId: function(e) {
                                var t = e.split("-");
                                return "" === t[0] && 1 !== t.length && t.shift(),
                                function e(t, r) {
                                    if (0 === t.length)
                                        return r.classGroupId;
                                    var n = t[0]
                                      , o = r.nextPart.get(n)
                                      , i = o ? e(t.slice(1), o) : void 0;
                                    if (i)
                                        return i;
                                    if (0 !== r.validators.length) {
                                        var l = t.join("-");
                                        return r.validators.find(function(e) {
                                            return (0,
                                            e.validator)(l)
                                        })?.classGroupId
                                    }
                                }(t, u) || function(e) {
                                    if (e0.test(e)) {
                                        var t = e0.exec(e)[1]
                                          , r = t?.substring(0, t.indexOf(":"));
                                        if (r)
                                            return "arbitrary.." + r
                                    }
                                }(e)
                            },
                            getConflictingClassGroupIds: function(e, t) {
                                var r = i[e] || [];
                                return t && a[e] ? [].concat(r, a[e]) : r
                            }
                        })
                    }
                }(o.slice(1).reduce(function(e, t) {
                    return t(e)
                }, i()))).cache.get,
                r = e.cache.set,
                l = a,
                a(n)
            };
            function a(n) {
                var o, i, l, a, s, c = t(n);
                if (c)
                    return c;
                var u = (i = (o = e).splitModifiers,
                l = o.getClassGroupId,
                a = o.getConflictingClassGroupIds,
                s = new Set,
                n.trim().split(e5).map(function(e) {
                    var t = i(e)
                      , r = t.modifiers
                      , n = t.hasImportantModifier
                      , o = t.baseClassName
                      , a = t.maybePostfixModifierPosition
                      , s = l(a ? o.substring(0, a) : o)
                      , c = !!a;
                    if (!s) {
                        if (!a || !(s = l(o)))
                            return {
                                isTailwindClass: !1,
                                originalClassName: e
                            };
                        c = !1
                    }
                    var u = (function(e) {
                        if (e.length <= 1)
                            return e;
                        var t = []
                          , r = [];
                        return e.forEach(function(e) {
                            "[" === e[0] ? (t.push.apply(t, r.sort().concat([e])),
                            r = []) : r.push(e)
                        }),
                        t.push.apply(t, r.sort()),
                        t
                    }
                    )(r).join(":");
                    return {
                        isTailwindClass: !0,
                        modifierId: n ? u + "!" : u,
                        classGroupId: s,
                        originalClassName: e,
                        hasPostfixModifier: c
                    }
                }).reverse().filter(function(e) {
                    if (!e.isTailwindClass)
                        return !0;
                    var t = e.modifierId
                      , r = e.classGroupId
                      , n = e.hasPostfixModifier
                      , o = t + r;
                    return !s.has(o) && (s.add(o),
                    a(r, n).forEach(function(e) {
                        return s.add(t + e)
                    }),
                    !0)
                }).reverse().map(function(e) {
                    return e.originalClassName
                }).join(" "));
                return r(n, u),
                u
            }
            return function() {
                return l(e2.apply(null, arguments))
            }
        }
        function e3(e) {
            var t = function(t) {
                return t[e] || []
            };
            return t.isThemeGetter = !0,
            t
        }
        var e6 = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , e7 = /^\d+\/\d+$/
          , e8 = new Set(["px", "full", "screen"])
          , e9 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , te = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , tt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
        function tr(e) {
            return ts(e) || e8.has(e) || e7.test(e) || tn(e)
        }
        function tn(e) {
            return tb(e, "length", tg)
        }
        function to(e) {
            return tb(e, "size", th)
        }
        function ti(e) {
            return tb(e, "position", th)
        }
        function tl(e) {
            return tb(e, "url", tv)
        }
        function ta(e) {
            return tb(e, "number", ts)
        }
        function ts(e) {
            return !Number.isNaN(Number(e))
        }
        function tc(e) {
            return e.endsWith("%") && ts(e.slice(0, -1))
        }
        function tu(e) {
            return ty(e) || tb(e, "number", ty)
        }
        function td(e) {
            return e6.test(e)
        }
        function tf() {
            return !0
        }
        function tp(e) {
            return e9.test(e)
        }
        function tm(e) {
            return tb(e, "", tw)
        }
        function tb(e, t, r) {
            var n = e6.exec(e);
            return !!n && (n[1] ? n[1] === t : r(n[2]))
        }
        function tg(e) {
            return te.test(e)
        }
        function th() {
            return !1
        }
        function tv(e) {
            return e.startsWith("url(")
        }
        function ty(e) {
            return Number.isInteger(Number(e))
        }
        function tw(e) {
            return tt.test(e)
        }
        function tx() {
            var e = e3("colors")
              , t = e3("spacing")
              , r = e3("blur")
              , n = e3("brightness")
              , o = e3("borderColor")
              , i = e3("borderRadius")
              , l = e3("borderSpacing")
              , a = e3("borderWidth")
              , s = e3("contrast")
              , c = e3("grayscale")
              , u = e3("hueRotate")
              , d = e3("invert")
              , f = e3("gap")
              , p = e3("gradientColorStops")
              , m = e3("gradientColorStopPositions")
              , b = e3("inset")
              , g = e3("margin")
              , h = e3("opacity")
              , v = e3("padding")
              , y = e3("saturate")
              , w = e3("scale")
              , x = e3("sepia")
              , E = e3("skew")
              , k = e3("space")
              , T = e3("translate")
              , C = function() {
                return ["auto", "contain", "none"]
            }
              , P = function() {
                return ["auto", "hidden", "clip", "visible", "scroll"]
            }
              , L = function() {
                return ["auto", td, t]
            }
              , M = function() {
                return [td, t]
            }
              , O = function() {
                return ["", tr]
            }
              , S = function() {
                return ["auto", ts, td]
            }
              , z = function() {
                return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
            }
              , R = function() {
                return ["solid", "dashed", "dotted", "double", "none"]
            }
              , j = function() {
                return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
            }
              , A = function() {
                return ["start", "end", "center", "between", "around", "evenly", "stretch"]
            }
              , N = function() {
                return ["", "0", td]
            }
              , D = function() {
                return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }
              , I = function() {
                return [ts, ta]
            }
              , H = function() {
                return [ts, td]
            };
            return {
                cacheSize: 500,
                theme: {
                    colors: [tf],
                    spacing: [tr],
                    blur: ["none", "", tp, td],
                    brightness: I(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", tp, td],
                    borderSpacing: M(),
                    borderWidth: O(),
                    contrast: I(),
                    grayscale: N(),
                    hueRotate: H(),
                    invert: N(),
                    gap: M(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [tc, tn],
                    inset: L(),
                    margin: L(),
                    opacity: I(),
                    padding: M(),
                    saturate: I(),
                    scale: I(),
                    sepia: N(),
                    skew: H(),
                    space: M(),
                    translate: M()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", td]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [tp]
                    }],
                    "break-after": [{
                        "break-after": D()
                    }],
                    "break-before": [{
                        "break-before": D()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [].concat(z(), [td])
                    }],
                    overflow: [{
                        overflow: P()
                    }],
                    "overflow-x": [{
                        "overflow-x": P()
                    }],
                    "overflow-y": [{
                        "overflow-y": P()
                    }],
                    overscroll: [{
                        overscroll: C()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": C()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": C()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [b]
                    }],
                    "inset-x": [{
                        "inset-x": [b]
                    }],
                    "inset-y": [{
                        "inset-y": [b]
                    }],
                    start: [{
                        start: [b]
                    }],
                    end: [{
                        end: [b]
                    }],
                    top: [{
                        top: [b]
                    }],
                    right: [{
                        right: [b]
                    }],
                    bottom: [{
                        bottom: [b]
                    }],
                    left: [{
                        left: [b]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", tu]
                    }],
                    basis: [{
                        basis: L()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", td]
                    }],
                    grow: [{
                        grow: N()
                    }],
                    shrink: [{
                        shrink: N()
                    }],
                    order: [{
                        order: ["first", "last", "none", tu]
                    }],
                    "grid-cols": [{
                        "grid-cols": [tf]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", tu]
                        }, td]
                    }],
                    "col-start": [{
                        "col-start": S()
                    }],
                    "col-end": [{
                        "col-end": S()
                    }],
                    "grid-rows": [{
                        "grid-rows": [tf]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [tu]
                        }, td]
                    }],
                    "row-start": [{
                        "row-start": S()
                    }],
                    "row-end": [{
                        "row-end": S()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", td]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", td]
                    }],
                    gap: [{
                        gap: [f]
                    }],
                    "gap-x": [{
                        "gap-x": [f]
                    }],
                    "gap-y": [{
                        "gap-y": [f]
                    }],
                    "justify-content": [{
                        justify: ["normal"].concat(A())
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal"].concat(A(), ["baseline"])
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [].concat(A(), ["baseline"])
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [v]
                    }],
                    px: [{
                        px: [v]
                    }],
                    py: [{
                        py: [v]
                    }],
                    ps: [{
                        ps: [v]
                    }],
                    pe: [{
                        pe: [v]
                    }],
                    pt: [{
                        pt: [v]
                    }],
                    pr: [{
                        pr: [v]
                    }],
                    pb: [{
                        pb: [v]
                    }],
                    pl: [{
                        pl: [v]
                    }],
                    m: [{
                        m: [g]
                    }],
                    mx: [{
                        mx: [g]
                    }],
                    my: [{
                        my: [g]
                    }],
                    ms: [{
                        ms: [g]
                    }],
                    me: [{
                        me: [g]
                    }],
                    mt: [{
                        mt: [g]
                    }],
                    mr: [{
                        mr: [g]
                    }],
                    mb: [{
                        mb: [g]
                    }],
                    ml: [{
                        ml: [g]
                    }],
                    "space-x": [{
                        "space-x": [k]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [k]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", td, t]
                    }],
                    "min-w": [{
                        "min-w": ["min", "max", "fit", td, tr]
                    }],
                    "max-w": [{
                        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                            screen: [tp]
                        }, tp, td]
                    }],
                    h: [{
                        h: [td, t, "auto", "min", "max", "fit"]
                    }],
                    "min-h": [{
                        "min-h": ["min", "max", "fit", td, tr]
                    }],
                    "max-h": [{
                        "max-h": [td, t, "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", tp, tn]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ta]
                    }],
                    "font-family": [{
                        font: [tf]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", td]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", ts, ta]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", td, tr]
                    }],
                    "list-image": [{
                        "list-image": ["none", td]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", td]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [h]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [h]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [].concat(R(), ["wavy"])
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", tr]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", td, tr]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    indent: [{
                        indent: M()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", td]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", td]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [h]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [].concat(z(), [ti])
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", to]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, tl]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [m]
                    }],
                    "gradient-via-pos": [{
                        via: [m]
                    }],
                    "gradient-to-pos": [{
                        to: [m]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [i]
                    }],
                    "rounded-s": [{
                        "rounded-s": [i]
                    }],
                    "rounded-e": [{
                        "rounded-e": [i]
                    }],
                    "rounded-t": [{
                        "rounded-t": [i]
                    }],
                    "rounded-r": [{
                        "rounded-r": [i]
                    }],
                    "rounded-b": [{
                        "rounded-b": [i]
                    }],
                    "rounded-l": [{
                        "rounded-l": [i]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [i]
                    }],
                    "rounded-se": [{
                        "rounded-se": [i]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [i]
                    }],
                    "rounded-es": [{
                        "rounded-es": [i]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [i]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [i]
                    }],
                    "rounded-br": [{
                        "rounded-br": [i]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [i]
                    }],
                    "border-w": [{
                        border: [a]
                    }],
                    "border-w-x": [{
                        "border-x": [a]
                    }],
                    "border-w-y": [{
                        "border-y": [a]
                    }],
                    "border-w-s": [{
                        "border-s": [a]
                    }],
                    "border-w-e": [{
                        "border-e": [a]
                    }],
                    "border-w-t": [{
                        "border-t": [a]
                    }],
                    "border-w-r": [{
                        "border-r": [a]
                    }],
                    "border-w-b": [{
                        "border-b": [a]
                    }],
                    "border-w-l": [{
                        "border-l": [a]
                    }],
                    "border-opacity": [{
                        "border-opacity": [h]
                    }],
                    "border-style": [{
                        border: [].concat(R(), ["hidden"])
                    }],
                    "divide-x": [{
                        "divide-x": [a]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [a]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [h]
                    }],
                    "divide-style": [{
                        divide: R()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: [""].concat(R())
                    }],
                    "outline-offset": [{
                        "outline-offset": [td, tr]
                    }],
                    "outline-w": [{
                        outline: [tr]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: O()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [h]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [tr]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", tp, tm]
                    }],
                    "shadow-color": [{
                        shadow: [tf]
                    }],
                    opacity: [{
                        opacity: [h]
                    }],
                    "mix-blend": [{
                        "mix-blend": j()
                    }],
                    "bg-blend": [{
                        "bg-blend": j()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [n]
                    }],
                    contrast: [{
                        contrast: [s]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", tp, td]
                    }],
                    grayscale: [{
                        grayscale: [c]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [u]
                    }],
                    invert: [{
                        invert: [d]
                    }],
                    saturate: [{
                        saturate: [y]
                    }],
                    sepia: [{
                        sepia: [x]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [n]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [s]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [c]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [u]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [d]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [h]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [y]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [x]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [l]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [l]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [l]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", td]
                    }],
                    duration: [{
                        duration: H()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", td]
                    }],
                    delay: [{
                        delay: H()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", td]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [w]
                    }],
                    "scale-x": [{
                        "scale-x": [w]
                    }],
                    "scale-y": [{
                        "scale-y": [w]
                    }],
                    rotate: [{
                        rotate: [tu, td]
                    }],
                    "translate-x": [{
                        "translate-x": [T]
                    }],
                    "translate-y": [{
                        "translate-y": [T]
                    }],
                    "skew-x": [{
                        "skew-x": [E]
                    }],
                    "skew-y": [{
                        "skew-y": [E]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", td]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: ["appearance-none"],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", td]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": M()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": M()
                    }],
                    "scroll-my": [{
                        "scroll-my": M()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": M()
                    }],
                    "scroll-me": [{
                        "scroll-me": M()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": M()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": M()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": M()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": M()
                    }],
                    "scroll-p": [{
                        "scroll-p": M()
                    }],
                    "scroll-px": [{
                        "scroll-px": M()
                    }],
                    "scroll-py": [{
                        "scroll-py": M()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": M()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": M()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": M()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": M()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": M()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": M()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "pinch-zoom", "manipulation", {
                            pan: ["x", "left", "right", "y", "up", "down"]
                        }]
                    }],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", td]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [tr, ta]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        var tE = e4(tx)
          , tk = Object.prototype.hasOwnProperty
          , tT = new Set(["string", "number", "boolean"])
          , tC = {
            twMerge: !0,
            twMergeConfig: {},
            responsiveVariants: !1
        }
          , tP = e=>e || void 0
          , tL = (...e)=>tP(eq(e).filter(Boolean).join(" "))
          , tM = null
          , tO = {}
          , tS = !1
          , tz = (...e)=>t=>t.twMerge ? ((!tM || tS) && (tS = !1,
        tM = eK(tO) ? tE : function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
            return "function" == typeof e ? e4.apply(void 0, [tx, e].concat(r)) : e4.apply(void 0, [function() {
                return function(e, t) {
                    for (var r in t)
                        (function e(t, r, n) {
                            if (!tk.call(t, r) || tT.has(typeof n) || null === n) {
                                t[r] = n;
                                return
                            }
                            if (Array.isArray(n) && Array.isArray(t[r])) {
                                t[r] = t[r].concat(n);
                                return
                            }
                            if ("object" == typeof n && "object" == typeof t[r]) {
                                if (null === t[r]) {
                                    t[r] = n;
                                    return
                                }
                                for (var o in n)
                                    e(t[r], o, n[o])
                            }
                        }
                        )(e, r, t[r]);
                    return e
                }(tx(), e)
            }
            ].concat(r))
        }(tO)),
        tP(tM(tL(e)))) : tL(e)
          , tR = (e,t)=>{
            for (let r in t)
                e.hasOwnProperty(r) ? e[r] = tL(e[r], t[r]) : e[r] = t[r];
            return e
        }
          , tj = (e,t)=>{
            let {extend: r=null, slots: n={}, variants: o={}, compoundVariants: i=[], compoundSlots: l=[], defaultVariants: a={}} = e
              , s = {
                ...tC,
                ...t
            }
              , c = null != r && r.base ? tL(r.base, null == e ? void 0 : e.base) : null == e ? void 0 : e.base
              , u = null != r && r.variants && !eK(r.variants) ? eQ(o, r.variants) : o
              , d = null != r && r.defaultVariants && !eK(r.defaultVariants) ? {
                ...r.defaultVariants,
                ...a
            } : a;
            eK(s.twMergeConfig) || eX(s.twMergeConfig, tO) || (tS = !0,
            tO = s.twMergeConfig);
            let f = eK(n) ? {} : {
                base: null == e ? void 0 : e.base,
                ...n
            }
              , p = eK(null == r ? void 0 : r.slots) ? f : tR({
                ...null == r ? void 0 : r.slots
            }, eK(f) ? {
                base: null == e ? void 0 : e.base
            } : f)
              , m = e=>{
                if (eK(u) && eK(n) && eK(null == r ? void 0 : r.slots))
                    return tz(c, null == e ? void 0 : e.class, null == e ? void 0 : e.className)(s);
                if (i && !Array.isArray(i))
                    throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
                if (l && !Array.isArray(l))
                    throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
                let t = (e,t,r=[],n)=>{
                    let o = r;
                    if ("string" == typeof t)
                        o = o.concat(eZ(t).split(" ").map(t=>`${e}:${t}`));
                    else if (Array.isArray(t))
                        o = o.concat(t.reduce((t,r)=>t.concat(`${e}:${r}`), []));
                    else if ("object" == typeof t && "string" == typeof n) {
                        for (let r in t)
                            if (t.hasOwnProperty(r) && r === n) {
                                let i = t[r];
                                if (i && "string" == typeof i) {
                                    let t = eZ(i);
                                    o[n] ? o[n] = o[n].concat(t.split(" ").map(t=>`${e}:${t}`)) : o[n] = t.split(" ").map(t=>`${e}:${t}`)
                                } else
                                    Array.isArray(i) && i.length > 0 && (o[n] = i.reduce((t,r)=>t.concat(`${e}:${r}`), []))
                            }
                    }
                    return o
                }
                  , o = (r,n=u,o=null,i=null)=>{
                    var l;
                    let a = n[r];
                    if (!a || eK(a))
                        return null;
                    let c = null != (l = null == i ? void 0 : i[r]) ? l : null == e ? void 0 : e[r];
                    if (null === c)
                        return null;
                    let f = eY(c)
                      , p = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || !0 === s.responsiveVariants
                      , m = null == d ? void 0 : d[r]
                      , b = [];
                    if ("object" == typeof f && p)
                        for (let[e,r] of Object.entries(f)) {
                            let n = a[r];
                            if ("initial" === e) {
                                m = r;
                                continue
                            }
                            Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(e) || (b = t(e, n, b, o))
                        }
                    let g = a[f] || a[eY(m)];
                    return "object" == typeof b && "string" == typeof o && b[o] ? tR(b, g) : b.length > 0 ? (b.push(g),
                    b) : g
                }
                  , a = (e,t)=>{
                    if (!u || "object" != typeof u)
                        return null;
                    let r = [];
                    for (let n in u) {
                        let i = o(n, u, e, t)
                          , l = "base" === e && "string" == typeof i ? i : i && i[e];
                        l && (r[r.length] = l)
                    }
                    return r
                }
                  , f = {};
                for (let t in e)
                    void 0 !== e[t] && (f[t] = e[t]);
                let m = (t,r)=>{
                    var n;
                    let o = "object" == typeof (null == e ? void 0 : e[t]) ? {
                        [t]: null == (n = e[t]) ? void 0 : n.initial
                    } : {};
                    return {
                        ...d,
                        ...f,
                        ...o,
                        ...r
                    }
                }
                  , b = (e=[],t)=>{
                    let r = [];
                    for (let {class: n, className: o, ...i} of e) {
                        let e = !0;
                        for (let[r,n] of Object.entries(i)) {
                            let o = m(r, t);
                            if (Array.isArray(n)) {
                                if (!n.includes(o[r])) {
                                    e = !1;
                                    break
                                }
                            } else if (o[r] !== n) {
                                e = !1;
                                break
                            }
                        }
                        e && (n && r.push(n),
                        o && r.push(o))
                    }
                    return r
                }
                  , g = e=>{
                    let t = b(i, e);
                    return eJ(b(null == r ? void 0 : r.compoundVariants, e), t)
                }
                  , h = e=>{
                    let t = g(e);
                    if (!Array.isArray(t))
                        return t;
                    let r = {};
                    for (let e of t)
                        if ("string" == typeof e && (r.base = tz(r.base, e)(s)),
                        "object" == typeof e)
                            for (let[t,n] of Object.entries(e))
                                r[t] = tz(r[t], n)(s);
                    return r
                }
                  , v = e=>{
                    if (l.length < 1)
                        return null;
                    let t = {};
                    for (let {slots: r=[], class: n, className: o, ...i} of l) {
                        if (!eK(i)) {
                            let t = !0;
                            for (let r of Object.keys(i)) {
                                let n = m(r, e)[r];
                                if (void 0 === n || (Array.isArray(i[r]) ? !i[r].includes(n) : i[r] !== n)) {
                                    t = !1;
                                    break
                                }
                            }
                            if (!t)
                                continue
                        }
                        for (let e of r)
                            t[e] = t[e] || [],
                            t[e].push([n, o])
                    }
                    return t
                }
                ;
                if (!eK(n) || !eK(null == r ? void 0 : r.slots)) {
                    let e = {};
                    if ("object" == typeof p && !eK(p))
                        for (let t of Object.keys(p))
                            e[t] = e=>{
                                var r, n;
                                return tz(p[t], a(t, e), (null != (r = h(e)) ? r : [])[t], (null != (n = v(e)) ? n : [])[t], null == e ? void 0 : e.class, null == e ? void 0 : e.className)(s)
                            }
                            ;
                    return e
                }
                return tz(c, u ? Object.keys(u).map(e=>o(e, u)) : null, g(), null == e ? void 0 : e.class, null == e ? void 0 : e.className)(s)
            }
            ;
            return m.variantKeys = (()=>{
                if (!(!u || "object" != typeof u))
                    return Object.keys(u)
            }
            )(),
            m.extend = r,
            m.base = c,
            m.slots = p,
            m.variants = u,
            m.defaultVariants = d,
            m.compoundSlots = l,
            m.compoundVariants = i,
            m
        }
          , tA = ["small", "medium", "large"]
          , tN = (n = {
            twMerge: !0,
            twMergeConfig: {
                theme: {
                    opacity: ["disabled"],
                    spacing: ["divider", "unit", ...eU],
                    borderWidth: tA,
                    borderRadius: tA
                },
                classGroups: {
                    shadow: [{
                        shadow: tA
                    }],
                    "font-size": [{
                        text: ["tiny", ...tA]
                    }],
                    "bg-image": ["bg-stripe-gradient"],
                    "min-w": [{
                        "min-w": ["unit", ...eU]
                    }],
                    "min-h": [{
                        "min-h": ["unit", ...eU]
                    }]
                }
            }
        },
        (e,t)=>tj(e, t ? eQ(n, t) : n))({
            slots: {
                base: ["z-0", "relative", "bg-transparent", "before:content-['']", "before:hidden", "before:z-[-1]", "before:absolute", "before:rotate-45", "before:w-2.5", "before:h-2.5", "before:rounded-sm", "data-[arrow=true]:before:block", "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=top]:before:left-1/2", "data-[placement=top]:before:-translate-x-1/2", "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=top-start]:before:left-3", "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=top-end]:before:right-3", "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=bottom]:before:left-1/2", "data-[placement=bottom]:before:-translate-x-1/2", "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=bottom-start]:before:left-3", "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]", "data-[placement=bottom-end]:before:right-3", "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]", "data-[placement=left]:before:top-1/2", "data-[placement=left]:before:-translate-y-1/2", "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=left-start]:before:top-1/4", "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=left-end]:before:bottom-1/4", "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]", "data-[placement=right]:before:top-1/2", "data-[placement=right]:before:-translate-y-1/2", "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=right-start]:before:top-1/4", "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]", "data-[placement=right-end]:before:bottom-1/4", "outline-none", "data-[focus-visible=true]:z-10", "data-[focus-visible=true]:outline-2", "data-[focus-visible=true]:outline-focus", "data-[focus-visible=true]:outline-offset-2"],
                content: ["z-10", "px-2.5", "py-1", "w-full", "inline-flex", "flex-col", "items-center", "justify-center", "box-border", "subpixel-antialiased", "outline-none", "box-border"],
                trigger: ["z-10"],
                backdrop: ["hidden"],
                arrow: []
            },
            variants: {
                size: {
                    sm: {
                        content: "text-tiny"
                    },
                    md: {
                        content: "text-small"
                    },
                    lg: {
                        content: "text-medium"
                    }
                },
                color: {
                    default: {
                        base: "before:bg-content1 before:shadow-small",
                        content: "bg-content1"
                    },
                    foreground: {
                        base: "before:bg-foreground",
                        content: "bg-foreground text-background"
                    },
                    primary: {
                        base: "before:bg-primary",
                        content: "bg-primary text-primary-foreground"
                    },
                    secondary: {
                        base: "before:bg-secondary",
                        content: "bg-secondary text-secondary-foreground"
                    },
                    success: {
                        base: "before:bg-success",
                        content: "bg-success text-success-foreground"
                    },
                    warning: {
                        base: "before:bg-warning",
                        content: "bg-warning text-warning-foreground"
                    },
                    danger: {
                        base: "before:bg-danger",
                        content: "bg-danger text-danger-foreground"
                    }
                },
                radius: {
                    none: {
                        content: "rounded-none"
                    },
                    sm: {
                        content: "rounded-small"
                    },
                    md: {
                        content: "rounded-medium"
                    },
                    lg: {
                        content: "rounded-large"
                    },
                    full: {
                        content: "rounded-full"
                    }
                },
                shadow: {
                    sm: {
                        content: "shadow-small"
                    },
                    md: {
                        content: "shadow-medium"
                    },
                    lg: {
                        content: "shadow-large"
                    }
                },
                backdrop: {
                    transparent: {},
                    opaque: {
                        backdrop: "bg-overlay/50 backdrop-opacity-disabled"
                    },
                    blur: {
                        backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
                    }
                },
                triggerScaleOnOpen: {
                    true: {
                        trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
                    },
                    false: {}
                },
                disableAnimation: {
                    true: {
                        base: "animate-none"
                    }
                }
            },
            defaultVariants: {
                color: "default",
                radius: "lg",
                size: "md",
                shadow: "md",
                backdrop: "transparent",
                disableAnimation: !1,
                triggerScaleOnOpen: !0
            },
            compoundVariants: [{
                backdrop: ["opaque", "blur"],
                class: {
                    backdrop: "block w-full h-full fixed inset-0 -z-30"
                }
            }]
        })
          , tD = e=>e ? "true" : void 0;
        "undefined" != typeof window && window.document && window.document.createElement;
        var tI = e=>{
            let t = {
                top: {
                    originY: 1
                },
                bottom: {
                    originY: 0
                },
                left: {
                    originX: 1
                },
                right: {
                    originX: 0
                },
                "top-start": {
                    originX: 0,
                    originY: 1
                },
                "top-end": {
                    originX: 1,
                    originY: 1
                },
                "bottom-start": {
                    originX: 0,
                    originY: 0
                },
                "bottom-end": {
                    originX: 1,
                    originY: 0
                },
                "right-start": {
                    originX: 0,
                    originY: 0
                },
                "right-end": {
                    originX: 0,
                    originY: 1
                },
                "left-start": {
                    originX: 1,
                    originY: 0
                },
                "left-end": {
                    originX: 1,
                    originY: 1
                }
            };
            return (null == t ? void 0 : t[e]) || {}
        }
          , tH = e=>({
            top: "top",
            bottom: "bottom",
            left: "left",
            right: "right",
            "top-start": "top start",
            "top-end": "top end",
            "bottom-start": "bottom start",
            "bottom-end": "bottom end",
            "left-start": "left top",
            "left-end": "left bottom",
            "right-start": "right top",
            "right-end": "right bottom"
        })[e]
          , t_ = (e,t)=>{
            if (t.includes("-")) {
                let[,r] = t.split("-");
                return `${e}-${r}`
            }
            return e
        }
          , t$ = r(3495)
          , tW = r(8868);
        function tF() {
            let e = (0,
            i.useRef)(!1);
            return (0,
            tW.L)(()=>(e.current = !0,
            ()=>{
                e.current = !1
            }
            ), []),
            e
        }
        var tB = r(2074)
          , tV = r(240)
          , tG = r(6681);
        class tU extends i.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                    let e = this.props.sizeRef.current;
                    e.height = t.offsetHeight || 0,
                    e.width = t.offsetWidth || 0,
                    e.top = t.offsetTop,
                    e.left = t.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function tY({children: e, isPresent: t}) {
            let r = (0,
            i.useId)()
              , n = (0,
            i.useRef)(null)
              , o = (0,
            i.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            });
            return (0,
            i.useInsertionEffect)(()=>{
                let {width: e, height: i, top: l, left: a} = o.current;
                if (t || !n.current || !e || !i)
                    return;
                n.current.dataset.motionPopId = r;
                let s = document.createElement("style");
                return document.head.appendChild(s),
                s.sheet && s.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
                ()=>{
                    document.head.removeChild(s)
                }
            }
            , [t]),
            i.createElement(tU, {
                isPresent: t,
                childRef: n,
                sizeRef: o
            }, i.cloneElement(e, {
                ref: n
            }))
        }
        let tK = ({children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: l, mode: a})=>{
            let s = (0,
            tG.h)(tX)
              , c = (0,
            i.useId)()
              , u = (0,
            i.useMemo)(()=>({
                id: c,
                initial: t,
                isPresent: r,
                custom: o,
                onExitComplete: e=>{
                    for (let t of (s.set(e, !0),
                    s.values()))
                        if (!t)
                            return;
                    n && n()
                }
                ,
                register: e=>(s.set(e, !1),
                ()=>s.delete(e))
            }), l ? void 0 : [r]);
            return (0,
            i.useMemo)(()=>{
                s.forEach((e,t)=>s.set(t, !1))
            }
            , [r]),
            i.useEffect(()=>{
                r || s.size || !n || n()
            }
            , [r]),
            "popLayout" === a && (e = i.createElement(tY, {
                isPresent: r
            }, e)),
            i.createElement(tV.O.Provider, {
                value: u
            }, e)
        }
        ;
        function tX() {
            return new Map
        }
        var tq = r(5364)
          , tJ = r(5487);
        let tQ = e=>e.key || ""
          , tZ = ({children: e, custom: t, initial: r=!0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: l=!0, mode: a="sync"})=>{
            var s;
            (0,
            tJ.k)(!o, "Replace exitBeforeEnter with mode='wait'");
            let c = (0,
            i.useContext)(tq.p).forceRender || function() {
                let e = tF()
                  , [t,r] = (0,
                i.useState)(0)
                  , n = (0,
                i.useCallback)(()=>{
                    e.current && r(t + 1)
                }
                , [t]);
                return [(0,
                i.useCallback)(()=>tB.Wi.postRender(n), [n]), t]
            }()[0]
              , u = tF()
              , d = function(e) {
                let t = [];
                return i.Children.forEach(e, e=>{
                    (0,
                    i.isValidElement)(e) && t.push(e)
                }
                ),
                t
            }(e)
              , f = d
              , p = (0,
            i.useRef)(new Map).current
              , m = (0,
            i.useRef)(f)
              , b = (0,
            i.useRef)(new Map).current
              , g = (0,
            i.useRef)(!0);
            if ((0,
            tW.L)(()=>{
                g.current = !1,
                function(e, t) {
                    e.forEach(e=>{
                        let r = tQ(e);
                        t.set(r, e)
                    }
                    )
                }(d, b),
                m.current = f
            }
            ),
            s = ()=>{
                g.current = !0,
                b.clear(),
                p.clear()
            }
            ,
            (0,
            i.useEffect)(()=>()=>s(), []),
            g.current)
                return i.createElement(i.Fragment, null, f.map(e=>i.createElement(tK, {
                    key: tQ(e),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: l,
                    mode: a
                }, e)));
            f = [...f];
            let h = m.current.map(tQ)
              , v = d.map(tQ)
              , y = h.length;
            for (let e = 0; e < y; e++) {
                let t = h[e];
                -1 !== v.indexOf(t) || p.has(t) || p.set(t, void 0)
            }
            return "wait" === a && p.size && (f = []),
            p.forEach((e,r)=>{
                if (-1 !== v.indexOf(r))
                    return;
                let o = b.get(r);
                if (!o)
                    return;
                let s = h.indexOf(r)
                  , g = e;
                g || (g = i.createElement(tK, {
                    key: tQ(o),
                    isPresent: !1,
                    onExitComplete: ()=>{
                        p.delete(r);
                        let e = Array.from(b.keys()).filter(e=>!v.includes(e));
                        if (e.forEach(e=>b.delete(e)),
                        m.current = d.filter(t=>{
                            let n = tQ(t);
                            return n === r || e.includes(n)
                        }
                        ),
                        !p.size) {
                            if (!1 === u.current)
                                return;
                            c(),
                            n && n()
                        }
                    }
                    ,
                    custom: t,
                    presenceAffectsLayout: l,
                    mode: a
                }, o),
                p.set(r, g)),
                f.splice(s, 0, g)
            }
            ),
            f = f.map(e=>{
                let t = e.key;
                return p.has(t) ? e : i.createElement(tK, {
                    key: tQ(e),
                    isPresent: !0,
                    presenceAffectsLayout: l,
                    mode: a
                }, e)
            }
            ),
            i.createElement(i.Fragment, null, p.size ? f : f.map(e=>(0,
            i.cloneElement)(e)))
        }
        ;
        var t0 = {
            enter: {
                transform: "scale(1)",
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0,
                    duration: .3
                }
            },
            exit: {
                transform: "scale(0.6)",
                opacity: 0,
                transition: {
                    type: "easeOut",
                    duration: .2
                }
            }
        }
          , t1 = r(3454)
          , t5 = {}
          , t2 = r(5893)
          , t4 = (o = (e,t)=>{
            let r;
            let {Component: n, children: o, content: f, isOpen: p, portalContainer: m, placement: b, disableAnimation: g, motionProps: v, getTriggerProps: y, getTooltipProps: w, getTooltipContentProps: E} = function(e) {
                let[t,r] = eG(e, tN.variantKeys)
                  , {ref: n, as: o, isOpen: f, content: p, children: m, defaultOpen: b, onOpenChange: g, isDisabled: v, trigger: y, shouldFlip: w=!0, containerPadding: E=12, placement: A="top", delay: I=0, closeDelay: H=500, showArrow: _=!1, offset: F=7, crossOffset: B=0, isDismissable: V, shouldCloseOnBlur: G=!0, portalContainer: U, isKeyboardDismissDisabled: Y=!1, updatePositionDeps: K=[], shouldCloseOnInteractOutside: X, className: q, onClose: J, motionProps: Q, classNames: Z, ...ee} = t
                  , et = function(e={}) {
                    let {delay: t=1500, closeDelay: r=500} = e
                      , {isOpen: n, open: o, close: l} = function(e) {
                        let[t,r] = function(e, t, r) {
                            let[n,o] = (0,
                            i.useState)(e || t)
                              , l = (0,
                            i.useRef)(void 0 !== e)
                              , a = void 0 !== e;
                            (0,
                            i.useEffect)(()=>{
                                let e = l.current;
                                e !== a && console.warn(`WARN: A component changed from ${e ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}.`),
                                l.current = a
                            }
                            , [a]);
                            let s = a ? e : n
                              , c = (0,
                            i.useCallback)((e,...t)=>{
                                let n = (e,...t)=>{
                                    r && !Object.is(s, e) && r(e, ...t),
                                    a || (s = e)
                                }
                                ;
                                "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),
                                o((r,...o)=>{
                                    let i = e(a ? s : r, ...o);
                                    return (n(i, ...t),
                                    a) ? r : i
                                }
                                )) : (a || o(e),
                                n(e, ...t))
                            }
                            , [a, s, r]);
                            return [s, c]
                        }(e.isOpen, e.defaultOpen || !1, e.onOpenChange)
                          , n = (0,
                        i.useCallback)(()=>{
                            r(!0)
                        }
                        , [r])
                          , o = (0,
                        i.useCallback)(()=>{
                            r(!1)
                        }
                        , [r])
                          , l = (0,
                        i.useCallback)(()=>{
                            r(!t)
                        }
                        , [r, t]);
                        return {
                            isOpen: t,
                            setOpen: r,
                            open: n,
                            close: o,
                            toggle: l
                        }
                    }(e)
                      , f = (0,
                    i.useMemo)(()=>`${++s}`, [])
                      , p = (0,
                    i.useRef)()
                      , m = ()=>{
                        a[f] = h
                    }
                      , b = ()=>{
                        for (let e in a)
                            e !== f && (a[e](!0),
                            delete a[e])
                    }
                      , g = ()=>{
                        clearTimeout(p.current),
                        p.current = null,
                        b(),
                        m(),
                        c = !0,
                        o(),
                        u && (clearTimeout(u),
                        u = null),
                        d && (clearTimeout(d),
                        d = null)
                    }
                      , h = e=>{
                        e || r <= 0 ? (clearTimeout(p.current),
                        p.current = null,
                        l()) : p.current || (p.current = setTimeout(()=>{
                            p.current = null,
                            l()
                        }
                        , r)),
                        u && (clearTimeout(u),
                        u = null),
                        c && (d && clearTimeout(d),
                        d = setTimeout(()=>{
                            delete a[f],
                            d = null,
                            c = !1
                        }
                        , Math.max(500, r)))
                    }
                      , v = ()=>{
                        b(),
                        m(),
                        n || u || c ? n || g() : u = setTimeout(()=>{
                            u = null,
                            c = !0,
                            g()
                        }
                        , t)
                    }
                    ;
                    return (0,
                    i.useEffect)(()=>()=>{
                        clearTimeout(p.current),
                        a[f] && delete a[f]
                    }
                    , [f]),
                    {
                        isOpen: n,
                        open: e=>{
                            e || !(t > 0) || p.current ? g() : v()
                        }
                        ,
                        close: h
                    }
                }({
                    delay: I,
                    closeDelay: H,
                    isDisabled: v,
                    defaultOpen: b,
                    isOpen: f,
                    onOpenChange: e=>{
                        null == g || g(e),
                        e || null == J || J()
                    }
                })
                  , er = (0,
                i.useRef)(null)
                  , en = (0,
                i.useRef)(null)
                  , ea = (0,
                i.useId)()
                  , ec = et.isOpen && !v;
                (0,
                i.useImperativeHandle)(n, ()=>({
                    UNSAFE_getDOMNode: ()=>en.current
                }));
                let {triggerProps: eu, tooltipProps: ep} = function(e, t, r) {
                    let {isDisabled: n, trigger: o} = e
                      , l = function(e) {
                        let[t,r] = (0,
                        i.useState)(void 0)
                          , n = (0,
                        i.useRef)(null)
                          , o = h(t)
                          , l = (0,
                        i.useCallback)(e=>{
                            n.current = e
                        }
                        , []);
                        return C && P.set(o, l),
                        k(()=>()=>{
                            P.delete(o)
                        }
                        , [o]),
                        (0,
                        i.useEffect)(()=>{
                            let e = n.current;
                            e && (n.current = null,
                            r(e))
                        }
                        ),
                        o
                    }()
                      , a = (0,
                    i.useRef)(!1)
                      , s = (0,
                    i.useRef)(!1)
                      , c = ()=>{
                        (a.current || s.current) && t.open(s.current)
                    }
                      , u = e=>{
                        a.current || s.current || t.close(e)
                    }
                    ;
                    (0,
                    i.useEffect)(()=>{
                        let e = e=>{
                            r && r.current && "Escape" === e.key && (e.stopPropagation(),
                            t.close(!0))
                        }
                        ;
                        if (t.isOpen)
                            return document.addEventListener("keydown", e, !0),
                            ()=>{
                                document.removeEventListener("keydown", e, !0)
                            }
                    }
                    , [r, t]);
                    let d = ()=>{
                        s.current = !1,
                        a.current = !1,
                        u(!0)
                    }
                      , {hoverProps: f} = eo({
                        isDisabled: n,
                        onHoverStart: ()=>{
                            "focus" !== o && ("pointer" === W ? a.current = !0 : a.current = !1,
                            c())
                        }
                        ,
                        onHoverEnd: ()=>{
                            "focus" !== o && (s.current = !1,
                            a.current = !1,
                            u())
                        }
                    })
                      , {focusableProps: p} = function(e, t) {
                        let {focusProps: r} = function(e) {
                            let {isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o} = e
                              , l = (0,
                            i.useCallback)(e=>{
                                if (e.target === e.currentTarget)
                                    return n && n(e),
                                    o && o(!1),
                                    !0
                            }
                            , [n, o])
                              , a = $(l)
                              , s = (0,
                            i.useCallback)(e=>{
                                e.target === e.currentTarget && document.activeElement === e.target && (r && r(e),
                                o && o(!0),
                                a(e))
                            }
                            , [o, r, a]);
                            return {
                                focusProps: {
                                    onFocus: !t && (r || o || n) ? s : void 0,
                                    onBlur: !t && (n || o) ? l : void 0
                                }
                            }
                        }(e)
                          , {keyboardProps: n} = {
                            keyboardProps: e.isDisabled ? {} : {
                                onKeyDown: el(e.onKeyDown),
                                onKeyUp: el(e.onKeyUp)
                            }
                        }
                          , o = M(r, n)
                          , l = function(e) {
                            let t = (0,
                            i.useContext)(ef) || {};
                            k(()=>{
                                if (t && t.ref && e)
                                    return t.ref.current = e.current,
                                    ()=>{
                                        t.ref.current = null
                                    }
                            }
                            );
                            let {ref: r, ...n} = t;
                            return n
                        }(t)
                          , a = e.isDisabled ? {} : l
                          , s = (0,
                        i.useRef)(e.autoFocus);
                        return (0,
                        i.useEffect)(()=>{
                            s.current && t.current && function(e) {
                                let t = L(e);
                                if ("virtual" === W) {
                                    var r;
                                    let n = t.activeElement;
                                    r = ()=>{
                                        t.activeElement === n && e.isConnected && j(e)
                                    }
                                    ,
                                    requestAnimationFrame(()=>{
                                        0 === N.size ? r() : D.add(r)
                                    }
                                    )
                                } else
                                    j(e)
                            }(t.current),
                            s.current = !1
                        }
                        , [t]),
                        {
                            focusableProps: M({
                                ...o,
                                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
                            }, a)
                        }
                    }({
                        isDisabled: n,
                        onFocus: ()=>{
                            "pointer" !== W && (s.current = !0,
                            c())
                        }
                        ,
                        onBlur: ()=>{
                            s.current = !1,
                            a.current = !1,
                            u(!0)
                        }
                    }, r);
                    return {
                        triggerProps: {
                            "aria-describedby": t.isOpen ? l : void 0,
                            ...M(p, f, {
                                onPointerDown: d,
                                onKeyDown: d
                            })
                        },
                        tooltipProps: {
                            id: l
                        }
                    }
                }({
                    isDisabled: v,
                    trigger: y
                }, et, er)
                  , {tooltipProps: em} = function(e, t) {
                    let r = function(e, t={}) {
                        let {labelable: r, isLink: n, propNames: o} = t
                          , i = {};
                        for (let t in e)
                            Object.prototype.hasOwnProperty.call(e, t) && (O.has(t) || r && S.has(t) || n && z.has(t) || (null == o ? void 0 : o.has(t)) || R.test(t)) && (i[t] = e[t]);
                        return i
                    }(e, {
                        labelable: !0
                    })
                      , {hoverProps: n} = eo({
                        onHoverStart: ()=>null == t ? void 0 : t.open(!0),
                        onHoverEnd: ()=>null == t ? void 0 : t.close()
                    });
                    return {
                        tooltipProps: M(r, n, {
                            role: "tooltip"
                        })
                    }
                }({
                    isOpen: ec,
                    ...M(t, ep)
                }, et)
                  , {overlayProps: eb, placement: eg, updatePosition: ex} = function(e) {
                    var t;
                    let r;
                    let {direction: n} = (r = function() {
                        let e = x()
                          , [t,r] = (0,
                        i.useState)(eh);
                        return ((0,
                        i.useEffect)(()=>(0 === ev.size && window.addEventListener("languagechange", ey),
                        ev.add(r),
                        ()=>{
                            ev.delete(r),
                            0 === ev.size && window.removeEventListener("languagechange", ey)
                        }
                        ), []),
                        e) ? {
                            locale: "en-US",
                            direction: "ltr"
                        } : t
                    }(),
                    (0,
                    i.useContext)(ew) || r)
                      , {arrowSize: o=0, targetRef: a, overlayRef: s, scrollRef: c=s, placement: u="bottom", containerPadding: d=12, shouldFlip: f=!0, boundaryElement: p="undefined" != typeof document ? document.body : null, offset: m=0, crossOffset: b=0, shouldUpdatePosition: g=!0, isOpen: h=!0, onClose: v, maxHeight: y, arrowBoundaryOffset: w=0} = e
                      , [E,T] = (0,
                    i.useState)({
                        position: {},
                        arrowOffsetLeft: void 0,
                        arrowOffsetTop: void 0,
                        maxHeight: void 0,
                        placement: void 0
                    })
                      , C = [g, u, s.current, a.current, c.current, d, f, p, m, b, h, n, y, w, o]
                      , P = (0,
                    i.useCallback)(()=>{
                        if (!1 === g || !h || !s.current || !a.current || !c.current || !p)
                            return;
                        let e = function(e) {
                            let t, {placement: r, targetNode: n, overlayNode: o, scrollNode: i, padding: a, shouldFlip: s, boundaryElement: c, offset: u, crossOffset: d, maxHeight: f, arrowSize: p=0, arrowBoundaryOffset: m=0} = e, b = o instanceof HTMLElement ? function(e) {
                                let t = e.offsetParent;
                                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !eD(t) && (t = document.documentElement),
                                null == t)
                                    for (t = e.parentElement; t && !eD(t); )
                                        t = t.parentElement;
                                return t || document.documentElement
                            }(o) : document.documentElement, g = b === document.documentElement, h = window.getComputedStyle(b).position, v = g ? eA(n) : eN(n, b);
                            if (!g) {
                                let {marginTop: e, marginLeft: t} = window.getComputedStyle(n);
                                v.top += parseInt(e, 10) || 0,
                                v.left += parseInt(t, 10) || 0
                            }
                            let y = eA(o)
                              , w = {
                                top: parseInt((t = window.getComputedStyle(o)).marginTop, 10) || 0,
                                bottom: parseInt(t.marginBottom, 10) || 0,
                                left: parseInt(t.marginLeft, 10) || 0,
                                right: parseInt(t.marginRight, 10) || 0
                            };
                            return y.width += w.left + w.right,
                            y.height += w.top + w.bottom,
                            function(e, t, r, n, o, i, a, s, c, u, d, f, p, m, b, g) {
                                var h;
                                let v = ez(e)
                                  , {size: y, crossAxis: w, crossSize: x, placement: E, crossPlacement: k} = v
                                  , T = eR(t, s, r, v, d, f, u, p, b, g)
                                  , C = d
                                  , P = ej(s, u, t, o, i + d, v);
                                if (a && n[y] > P) {
                                    let e = ez(`${ek[E]} ${k}`)
                                      , n = eR(t, s, r, e, d, f, u, p, b, g);
                                    ej(s, u, t, o, i + d, e) > P && (v = e,
                                    T = n,
                                    C = d)
                                }
                                let L = eS(w, T[w], r[x], s, c, i);
                                T[w] += L;
                                let M = null != (h = T).top ? Math.max(0, s.height + s.top + s.scroll.top - (u.top + h.top) - (o.top + o.bottom + i)) : Math.max(0, t.top + u.top - (s.top + s.scroll.top) - (o.top + o.bottom + i));
                                m && m < M && (M = m),
                                r.height = Math.min(r.height, M),
                                L = eS(w, (T = eR(t, s, r, v, C, f, u, p, b, g))[w], r[x], s, c, i),
                                T[w] += L;
                                let O = {}
                                  , S = t[w] + .5 * t[x] - r[w]
                                  , z = b / 2 + g
                                  , R = r[x] - b / 2 - g
                                  , j = l(S, t[w] - r[w] + b / 2, t[w] + t[x] - r[w] - b / 2);
                                return O[w] = l(j, z, R),
                                {
                                    position: T,
                                    maxHeight: M,
                                    arrowOffsetLeft: O.left,
                                    arrowOffsetTop: O.top,
                                    placement: v.placement
                                }
                            }(r, v, y, {
                                top: i.scrollTop,
                                left: i.scrollLeft,
                                width: i.scrollWidth,
                                height: i.scrollHeight
                            }, w, a, s, eO(c), eO(b), "BODY" === c.tagName ? eA(b) : eN(b, c), u, d, !!h && "static" !== h, f, p, m)
                        }({
                            placement: "rtl" === n ? u.replace("start", "right").replace("end", "left") : u.replace("start", "left").replace("end", "right"),
                            overlayNode: s.current,
                            targetNode: a.current,
                            scrollNode: c.current,
                            padding: d,
                            shouldFlip: f,
                            boundaryElement: p,
                            offset: m,
                            crossOffset: b,
                            maxHeight: y,
                            arrowSize: o,
                            arrowBoundaryOffset: w
                        });
                        Object.keys(e.position).forEach(t=>s.current.style[t] = e.position[t] + "px"),
                        s.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + "px" : void 0,
                        T(e)
                    }
                    , C);
                    k(P, C),
                    k(()=>(window.addEventListener("resize", t, !1),
                    ()=>{
                        window.removeEventListener("resize", t, !1)
                    }
                    ), [t = P]),
                    function(e) {
                        let {ref: t, onResize: r} = e;
                        (0,
                        i.useEffect)(()=>{
                            let e = null == t ? void 0 : t.current;
                            if (e) {
                                if (!(void 0 !== window.ResizeObserver))
                                    return window.addEventListener("resize", r, !1),
                                    ()=>{
                                        window.removeEventListener("resize", r, !1)
                                    }
                                    ;
                                {
                                    let t = new window.ResizeObserver(e=>{
                                        e.length && r()
                                    }
                                    );
                                    return t.observe(e),
                                    ()=>{
                                        e && t.unobserve(e)
                                    }
                                }
                            }
                        }
                        , [r, t])
                    }({
                        ref: s,
                        onResize: P
                    });
                    let L = (0,
                    i.useRef)(!1);
                    k(()=>{
                        let e;
                        let t = ()=>{
                            L.current = !0,
                            clearTimeout(e),
                            e = setTimeout(()=>{
                                L.current = !1
                            }
                            , 500),
                            P()
                        }
                        ;
                        return null == eH || eH.addEventListener("resize", t),
                        null == eH || eH.addEventListener("scroll", t),
                        ()=>{
                            null == eH || eH.removeEventListener("resize", t),
                            null == eH || eH.removeEventListener("scroll", t)
                        }
                    }
                    , [P]);
                    let M = (0,
                    i.useCallback)(()=>{
                        L.current || v()
                    }
                    , [v, L]);
                    return function(e) {
                        let {triggerRef: t, isOpen: r, onClose: n} = e;
                        (0,
                        i.useEffect)(()=>{
                            if (!r || null === n)
                                return;
                            let e = e=>{
                                let r = e.target;
                                if (!t.current || r instanceof Node && !r.contains(t.current))
                                    return;
                                let o = n || eI.get(t.current);
                                o && o()
                            }
                            ;
                            return window.addEventListener("scroll", e, !0),
                            ()=>{
                                window.removeEventListener("scroll", e, !0)
                            }
                        }
                        , [r, n, t])
                    }({
                        triggerRef: a,
                        isOpen: h,
                        onClose: v && M
                    }),
                    {
                        overlayProps: {
                            style: {
                                position: "absolute",
                                zIndex: 1e5,
                                ...E.position,
                                maxHeight: E.maxHeight
                            }
                        },
                        placement: E.placement,
                        arrowProps: {
                            "aria-hidden": "true",
                            role: "presentation",
                            style: {
                                left: E.arrowOffsetLeft,
                                top: E.arrowOffsetTop
                            }
                        },
                        updatePosition: P
                    }
                }({
                    isOpen: ec,
                    targetRef: er,
                    placement: tH(A),
                    overlayRef: en,
                    offset: _ ? F + 3 : F,
                    crossOffset: B,
                    shouldFlip: w,
                    containerPadding: E
                });
                (0,
                i.useLayoutEffect)(()=>{
                    K.length && ex()
                }
                , K);
                let {overlayProps: eE} = function(e, t) {
                    let {onClose: r, shouldCloseOnBlur: n, isOpen: o, isDismissable: l=!1, isKeyboardDismissDisabled: a=!1, shouldCloseOnInteractOutside: s} = e;
                    (0,
                    i.useEffect)(()=>(o && e_.push(t),
                    ()=>{
                        let e = e_.indexOf(t);
                        e >= 0 && e_.splice(e, 1)
                    }
                    ), [o, t]);
                    let c = ()=>{
                        e_[e_.length - 1] === t && r && r()
                    }
                    ;
                    !function(e) {
                        let {ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o} = e
                          , l = (0,
                        i.useRef)({
                            isPointerDown: !1,
                            ignoreEmulatedMouseEvents: !1
                        })
                          , a = T(e=>{
                            r && ei(e, t) && (o && o(e),
                            l.current.isPointerDown = !0)
                        }
                        )
                          , s = T(e=>{
                            r && r(e)
                        }
                        );
                        (0,
                        i.useEffect)(()=>{
                            let e = l.current;
                            if (n)
                                return;
                            let r = L(t.current);
                            if ("undefined" != typeof PointerEvent) {
                                let n = r=>{
                                    e.isPointerDown && ei(r, t) && s(r),
                                    e.isPointerDown = !1
                                }
                                ;
                                return r.addEventListener("pointerdown", a, !0),
                                r.addEventListener("pointerup", n, !0),
                                ()=>{
                                    r.removeEventListener("pointerdown", a, !0),
                                    r.removeEventListener("pointerup", n, !0)
                                }
                            }
                            {
                                let n = r=>{
                                    e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && ei(r, t) && s(r),
                                    e.isPointerDown = !1
                                }
                                  , o = r=>{
                                    e.ignoreEmulatedMouseEvents = !0,
                                    e.isPointerDown && ei(r, t) && s(r),
                                    e.isPointerDown = !1
                                }
                                ;
                                return r.addEventListener("mousedown", a, !0),
                                r.addEventListener("mouseup", n, !0),
                                r.addEventListener("touchstart", a, !0),
                                r.addEventListener("touchend", o, !0),
                                ()=>{
                                    r.removeEventListener("mousedown", a, !0),
                                    r.removeEventListener("mouseup", n, !0),
                                    r.removeEventListener("touchstart", a, !0),
                                    r.removeEventListener("touchend", o, !0)
                                }
                            }
                        }
                        , [t, n, a, s])
                    }({
                        ref: t,
                        onInteractOutside: l && o ? e=>{
                            (!s || s(e.target)) && (e_[e_.length - 1] === t && (e.stopPropagation(),
                            e.preventDefault()),
                            c())
                        }
                        : null,
                        onInteractOutsideStart: e=>{
                            (!s || s(e.target)) && e_[e_.length - 1] === t && (e.stopPropagation(),
                            e.preventDefault())
                        }
                    });
                    let {focusWithinProps: u} = function(e) {
                        let {isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o} = e
                          , l = (0,
                        i.useRef)({
                            isFocusWithin: !1
                        })
                          , a = (0,
                        i.useCallback)(e=>{
                            l.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (l.current.isFocusWithin = !1,
                            r && r(e),
                            o && o(!1))
                        }
                        , [r, o, l])
                          , s = $(a)
                          , c = (0,
                        i.useCallback)(e=>{
                            l.current.isFocusWithin || document.activeElement !== e.target || (n && n(e),
                            o && o(!0),
                            l.current.isFocusWithin = !0,
                            s(e))
                        }
                        , [n, o, s]);
                        return t ? {
                            focusWithinProps: {
                                onFocus: void 0,
                                onBlur: void 0
                            }
                        } : {
                            focusWithinProps: {
                                onFocus: c,
                                onBlur: a
                            }
                        }
                    }({
                        isDisabled: !n,
                        onBlurWithin: e=>{
                            !(!e.relatedTarget || function(e, t=null) {
                                if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
                                    return !0;
                                for (let {scopeRef: r} of ed.traverse(ed.getTreeNode(t)))
                                    if (r && es(e, r.current))
                                        return !0;
                                return !1
                            }(e.relatedTarget, null)) && (!s || s(e.relatedTarget)) && r()
                        }
                    });
                    return {
                        overlayProps: {
                            onKeyDown: e=>{
                                "Escape" !== e.key || a || (e.stopPropagation(),
                                e.preventDefault(),
                                c())
                            }
                            ,
                            ...u
                        },
                        underlayProps: {
                            onPointerDown: e=>{
                                e.target === e.currentTarget && e.preventDefault()
                            }
                        }
                    }
                }({
                    isOpen: ec,
                    onClose: et.close,
                    isDismissable: V,
                    shouldCloseOnBlur: G,
                    isKeyboardDismissDisabled: Y,
                    shouldCloseOnInteractOutside: X
                }, en)
                  , eT = (0,
                i.useMemo)(()=>{
                    var t, n, o;
                    return tN({
                        ...r,
                        radius: null != (t = null == e ? void 0 : e.radius) ? t : "md",
                        size: null != (n = null == e ? void 0 : e.size) ? n : "md",
                        shadow: null != (o = null == e ? void 0 : e.shadow) ? o : "sm"
                    })
                }
                , [...Object.values(r), null == e ? void 0 : e.radius, null == e ? void 0 : e.size, null == e ? void 0 : e.shadow])
                  , eC = (0,
                i.useCallback)((e={},t=null)=>({
                    ...M(eu, e),
                    ref: function(...e) {
                        return t=>{
                            e.forEach(e=>(function(e, t) {
                                if (null != e) {
                                    if ("function" == typeof e) {
                                        e(t);
                                        return
                                    }
                                    try {
                                        e.current = t
                                    } catch (r) {
                                        throw Error(`Cannot assign value '${t}' to ref '${e}'`)
                                    }
                                }
                            }
                            )(e, t))
                        }
                    }(t, er),
                    "aria-describedby": ec ? ea : void 0
                }), [eu, ec, ea, et])
                  , eP = (0,
                i.useCallback)(()=>({
                    ref: en,
                    "data-slot": "base",
                    "data-open": tD(ec),
                    "data-arrow": tD(_),
                    "data-disabled": tD(v),
                    "data-placement": t_(eg, A),
                    ...M(em, eE, ee),
                    style: M(eb.style, ee.style, t.style),
                    className: eT.base({
                        class: null == Z ? void 0 : Z.base
                    }),
                    id: ea
                }), [eT, ec, _, v, eg, A, em, eE, ee, eb, t, ea])
                  , eL = (0,
                i.useCallback)(()=>({
                    "data-slot": "content",
                    "data-open": tD(ec),
                    "data-arrow": tD(_),
                    "data-disabled": tD(v),
                    "data-placement": t_(eg, A),
                    className: eT.content({
                        class: function(...e) {
                            for (var t, r, n = 0, o = ""; n < e.length; )
                                (t = e[n++]) && (r = function e(t) {
                                    var r, n, o = "";
                                    if ("string" == typeof t || "number" == typeof t)
                                        o += t;
                                    else if ("object" == typeof t) {
                                        if (Array.isArray(t))
                                            for (r = 0; r < t.length; r++)
                                                t[r] && (n = e(t[r])) && (o && (o += " "),
                                                o += n);
                                        else
                                            for (r in t)
                                                t[r] && (o && (o += " "),
                                                o += r)
                                    }
                                    return o
                                }(t)) && (o && (o += " "),
                                o += r);
                            return o
                        }(null == Z ? void 0 : Z.content, q)
                    })
                }), [eT, ec, _, v, eg, A, Z]);
                return {
                    Component: o || "div",
                    content: p,
                    children: m,
                    isOpen: ec,
                    triggerRef: er,
                    showArrow: _,
                    portalContainer: U,
                    placement: A,
                    disableAnimation: null == e ? void 0 : e.disableAnimation,
                    isDisabled: v,
                    motionProps: Q,
                    getTooltipContentProps: eL,
                    getTriggerProps: eC,
                    getTooltipProps: eP
                }
            }({
                ...e,
                ref: t
            });
            try {
                let e = i.Children.only(o);
                r = (0,
                i.cloneElement)(e, y(e.props, e.ref))
            } catch (e) {
                r = (0,
                t2.jsx)("span", {}),
                function(e, t, ...r) {
                    var n;
                    let o = `[Next UI] : ${e}`;
                    "undefined" == typeof console || t5[o] || (t5[o] = !0,
                    (null == (n = null == t1 ? void 0 : t1.env) ? void 0 : n.NODE_ENV) === "production") || console.warn(o, r)
                }("Tooltip must have only one child node. Please, check your code.")
            }
            let {ref: A, id: I, style: H, ..._} = w()
              , F = (0,
            t2.jsx)("div", {
                ref: A,
                id: I,
                style: H,
                children: (0,
                t2.jsx)(t$.E.div, {
                    animate: "enter",
                    exit: "exit",
                    initial: "exit",
                    variants: t0,
                    ...M(v, _),
                    style: {
                        ...tI(b)
                    },
                    children: (0,
                    t2.jsx)(n, {
                        ...E(),
                        children: f
                    })
                })
            });
            return (0,
            t2.jsxs)(t2.Fragment, {
                children: [r, g && p ? (0,
                t2.jsx)(eV, {
                    portalContainer: m,
                    children: (0,
                    t2.jsx)("div", {
                        ref: A,
                        id: I,
                        style: H,
                        ..._,
                        children: (0,
                        t2.jsx)(n, {
                            ...E(),
                            children: f
                        })
                    })
                }) : (0,
                t2.jsx)(tZ, {
                    children: p ? (0,
                    t2.jsx)(eV, {
                        portalContainer: m,
                        children: F
                    }) : null
                })]
            })
        }
        ,
        (0,
        i.forwardRef)(o));
        t4.displayName = "NextUI.Tooltip";
        var t3 = t4
    }
}]);
