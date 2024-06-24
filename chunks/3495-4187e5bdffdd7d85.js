"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3495], {
    5364: function(t, e, i) {
        i.d(e, {
            p: function() {
                return n
            }
        });
        let n = (0,
        i(7294).createContext)({})
    },
    240: function(t, e, i) {
        i.d(e, {
            O: function() {
                return n
            }
        });
        let n = (0,
        i(7294).createContext)(null)
    },
    2074: function(t, e, i) {
        i.d(e, {
            Pn: function() {
                return a
            },
            Wi: function() {
                return o
            },
            frameData: function() {
                return l
            },
            S6: function() {
                return u
            }
        });
        var n = i(1662);
        class r {
            constructor() {
                this.order = [],
                this.scheduled = new Set
            }
            add(t) {
                if (!this.scheduled.has(t))
                    return this.scheduled.add(t),
                    this.order.push(t),
                    !0
            }
            remove(t) {
                let e = this.order.indexOf(t);
                -1 !== e && (this.order.splice(e, 1),
                this.scheduled.delete(t))
            }
            clear() {
                this.order.length = 0,
                this.scheduled.clear()
            }
        }
        let s = ["prepare", "read", "update", "preRender", "render", "postRender"]
          , {schedule: o, cancel: a, state: l, steps: u} = function(t, e) {
            let i = !1
              , n = !0
              , o = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , a = s.reduce((t,e)=>(t[e] = function(t) {
                let e = new r
                  , i = new r
                  , n = 0
                  , s = !1
                  , o = !1
                  , a = new WeakSet
                  , l = {
                    schedule: (t,r=!1,o=!1)=>{
                        let l = o && s
                          , u = l ? e : i;
                        return r && a.add(t),
                        u.add(t) && l && s && (n = e.order.length),
                        t
                    }
                    ,
                    cancel: t=>{
                        i.remove(t),
                        a.delete(t)
                    }
                    ,
                    process: r=>{
                        if (s) {
                            o = !0;
                            return
                        }
                        if (s = !0,
                        [e,i] = [i, e],
                        i.clear(),
                        n = e.order.length)
                            for (let i = 0; i < n; i++) {
                                let n = e.order[i];
                                n(r),
                                a.has(n) && (l.schedule(n),
                                t())
                            }
                        s = !1,
                        o && (o = !1,
                        l.process(r))
                    }
                };
                return l
            }(()=>i = !0),
            t), {})
              , l = t=>a[t].process(o)
              , u = ()=>{
                let r = performance.now();
                i = !1,
                o.delta = n ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1),
                o.timestamp = r,
                o.isProcessing = !0,
                s.forEach(l),
                o.isProcessing = !1,
                i && e && (n = !1,
                t(u))
            }
              , h = ()=>{
                i = !0,
                n = !0,
                o.isProcessing || t(u)
            }
            ;
            return {
                schedule: s.reduce((t,e)=>{
                    let n = a[e];
                    return t[e] = (t,e=!1,r=!1)=>(i || h(),
                    n.schedule(t, e, r)),
                    t
                }
                , {}),
                cancel: t=>s.forEach(e=>a[e].cancel(t)),
                state: o,
                steps: a
            }
        }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
    },
    3495: function(t, e, i) {
        let n;
        i.d(e, {
            E: function() {
                return rz
            }
        });
        var r, s, o = i(7294);
        let a = (0,
        o.createContext)({
            transformPagePoint: t=>t,
            isStatic: !1,
            reducedMotion: "never"
        })
          , l = (0,
        o.createContext)({});
        var u = i(240)
          , h = i(8868);
        let c = (0,
        o.createContext)({
            strict: !1
        })
          , d = t=>t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
          , p = "data-" + d("framerAppearId");
        function m(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function f(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function g(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        let v = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , y = ["initial", ...v];
        function x(t) {
            return g(t.animate) || y.some(e=>f(t[e]))
        }
        function P(t) {
            return !!(x(t) || t.variants)
        }
        function b(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let w = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , T = {};
        for (let t in w)
            T[t] = {
                isEnabled: e=>w[t].some(t=>!!e[t])
            };
        var A = i(1741)
          , S = i(5364);
        let V = (0,
        o.createContext)({})
          , E = Symbol.for("motionComponentSymbol")
          , C = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function M(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (C.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        let D = {}
          , k = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , R = new Set(k);
        function L(t, {layout: e, layoutId: i}) {
            return R.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!D[t] || "opacity" === t)
        }
        let j = t=>!!(t && t.getVelocity)
          , F = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , B = k.length
          , O = t=>e=>"string" == typeof e && e.startsWith(t)
          , U = O("--")
          , W = O("var(--")
          , I = (t,e)=>e && "number" == typeof t ? e.transform(t) : t
          , N = (t,e,i)=>Math.min(Math.max(i, t), e)
          , $ = {
            test: t=>"number" == typeof t,
            parse: parseFloat,
            transform: t=>t
        }
          , H = {
            ...$,
            transform: t=>N(0, 1, t)
        }
          , Z = {
            ...$,
            default: 1
        }
          , z = t=>Math.round(1e5 * t) / 1e5
          , Y = /(-)?([\d]*\.?[\d])+/g
          , X = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , G = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function q(t) {
            return "string" == typeof t
        }
        let K = t=>({
            test: e=>q(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e=>`${e}${t}`
        })
          , _ = K("deg")
          , J = K("%")
          , Q = K("px")
          , tt = K("vh")
          , te = K("vw")
          , ti = {
            ...J,
            parse: t=>J.parse(t) / 100,
            transform: t=>J.transform(100 * t)
        }
          , tn = {
            ...$,
            transform: Math.round
        }
          , tr = {
            borderWidth: Q,
            borderTopWidth: Q,
            borderRightWidth: Q,
            borderBottomWidth: Q,
            borderLeftWidth: Q,
            borderRadius: Q,
            radius: Q,
            borderTopLeftRadius: Q,
            borderTopRightRadius: Q,
            borderBottomRightRadius: Q,
            borderBottomLeftRadius: Q,
            width: Q,
            maxWidth: Q,
            height: Q,
            maxHeight: Q,
            size: Q,
            top: Q,
            right: Q,
            bottom: Q,
            left: Q,
            padding: Q,
            paddingTop: Q,
            paddingRight: Q,
            paddingBottom: Q,
            paddingLeft: Q,
            margin: Q,
            marginTop: Q,
            marginRight: Q,
            marginBottom: Q,
            marginLeft: Q,
            rotate: _,
            rotateX: _,
            rotateY: _,
            rotateZ: _,
            scale: Z,
            scaleX: Z,
            scaleY: Z,
            scaleZ: Z,
            skew: _,
            skewX: _,
            skewY: _,
            distance: Q,
            translateX: Q,
            translateY: Q,
            translateZ: Q,
            x: Q,
            y: Q,
            z: Q,
            perspective: Q,
            transformPerspective: Q,
            opacity: H,
            originX: ti,
            originY: ti,
            originZ: Q,
            zIndex: tn,
            fillOpacity: H,
            strokeOpacity: H,
            numOctaves: tn
        };
        function ts(t, e, i, n) {
            let {style: r, vars: s, transform: o, transformOrigin: a} = t
              , l = !1
              , u = !1
              , h = !0;
            for (let t in e) {
                let i = e[t];
                if (U(t)) {
                    s[t] = i;
                    continue
                }
                let n = tr[t]
                  , c = I(i, n);
                if (R.has(t)) {
                    if (l = !0,
                    o[t] = c,
                    !h)
                        continue;
                    i !== (n.default || 0) && (h = !1)
                } else
                    t.startsWith("origin") ? (u = !0,
                    a[t] = c) : r[t] = c
            }
            if (!e.transform && (l || n ? r.transform = function(t, {enableHardwareAcceleration: e=!0, allowTransformNone: i=!0}, n, r) {
                let s = "";
                for (let e = 0; e < B; e++) {
                    let i = k[e];
                    if (void 0 !== t[i]) {
                        let e = F[i] || i;
                        s += `${e}(${t[i]}) `
                    }
                }
                return e && !t.z && (s += "translateZ(0)"),
                s = s.trim(),
                r ? s = r(t, n ? "" : s) : i && n && (s = "none"),
                s
            }(t.transform, i, h, n) : r.transform && (r.transform = "none")),
            u) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = a;
                r.transformOrigin = `${t} ${e} ${i}`
            }
        }
        let to = ()=>({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function ta(t, e, i) {
            for (let n in e)
                j(e[n]) || L(n, i) || (t[n] = e[n])
        }
        let tl = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function tu(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tl.has(t)
        }
        let th = t=>!tu(t);
        try {
            (r = require("@emotion/is-prop-valid").default) && (th = t=>t.startsWith("on") ? !tu(t) : r(t))
        } catch (t) {}
        function tc(t, e, i) {
            return "string" == typeof t ? t : Q.transform(e + i * t)
        }
        let td = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , tp = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function tm(t, {attrX: e, attrY: i, attrScale: n, originX: r, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, c, d) {
            if (ts(t, u, h, d),
            c) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: p, style: m, dimensions: f} = t;
            p.transform && (f && (m.transform = p.transform),
            delete p.transform),
            f && (void 0 !== r || void 0 !== s || m.transform) && (m.transformOrigin = function(t, e, i) {
                let n = tc(e, t.x, t.width)
                  , r = tc(i, t.y, t.height);
                return `${n} ${r}`
            }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (p.x = e),
            void 0 !== i && (p.y = i),
            void 0 !== n && (p.scale = n),
            void 0 !== o && function(t, e, i=1, n=0, r=!0) {
                t.pathLength = 1;
                let s = r ? td : tp;
                t[s.offset] = Q.transform(-n);
                let o = Q.transform(e)
                  , a = Q.transform(i);
                t[s.array] = `${o} ${a}`
            }(p, o, a, l, !1)
        }
        let tf = ()=>({
            ...to(),
            attrs: {}
        })
          , tg = t=>"string" == typeof t && "svg" === t.toLowerCase();
        function tv(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(s, i[s])
        }
        let ty = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function tx(t, e, i, n) {
            for (let i in tv(t, e, void 0, n),
            e.attrs)
                t.setAttribute(ty.has(i) ? i : d(i), e.attrs[i])
        }
        function tP(t, e) {
            let {style: i} = t
              , n = {};
            for (let r in i)
                (j(i[r]) || e.style && j(e.style[r]) || L(r, t)) && (n[r] = i[r]);
            return n
        }
        function tb(t, e) {
            let i = tP(t, e);
            for (let n in t)
                (j(t[n]) || j(e[n])) && (i[-1 !== k.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
            return i
        }
        function tw(t, e, i, n={}, r={}) {
            return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
            e
        }
        var tT = i(6681);
        let tA = t=>Array.isArray(t)
          , tS = t=>!!(t && "object" == typeof t && t.mix && t.toValue)
          , tV = t=>tA(t) ? t[t.length - 1] || 0 : t;
        function tE(t) {
            let e = j(t) ? t.get() : t;
            return tS(e) ? e.toValue() : e
        }
        let tC = t=>(e,i)=>{
            let n = (0,
            o.useContext)(l)
              , r = (0,
            o.useContext)(u.O)
              , s = ()=>(function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: i}, n, r, s) {
                let o = {
                    latestValues: function(t, e, i, n) {
                        let r = {}
                          , s = n(t, {});
                        for (let t in s)
                            r[t] = tE(s[t]);
                        let {initial: o, animate: a} = t
                          , l = x(t)
                          , u = P(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial),
                        void 0 === a && (a = e.animate));
                        let h = !!i && !1 === i.initial
                          , c = (h = h || !1 === o) ? a : o;
                        return c && "boolean" != typeof c && !g(c) && (Array.isArray(c) ? c : [c]).forEach(e=>{
                            let i = tw(t, e);
                            if (!i)
                                return;
                            let {transitionEnd: n, transition: s, ...o} = i;
                            for (let t in o) {
                                let e = o[t];
                                if (Array.isArray(e)) {
                                    let t = h ? e.length - 1 : 0;
                                    e = e[t]
                                }
                                null !== e && (r[t] = e)
                            }
                            for (let t in n)
                                r[t] = n[t]
                        }
                        ),
                        r
                    }(n, r, s, t),
                    renderState: e()
                };
                return i && (o.mount = t=>i(n, t, o)),
                o
            }
            )(t, e, n, r);
            return i ? s() : (0,
            tT.h)(s)
        }
        ;
        var tM = i(2074);
        let tD = {
            useVisualState: tC({
                scrapeMotionValuesFromProps: tb,
                createRenderState: tf,
                onMount: (t,e,{renderState: i, latestValues: n})=>{
                    tM.Wi.read(()=>{
                        try {
                            i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            i.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    tM.Wi.render(()=>{
                        tm(i, n, {
                            enableHardwareAcceleration: !1
                        }, tg(e.tagName), t.transformTemplate),
                        tx(e, i)
                    }
                    )
                }
            })
        }
          , tk = {
            useVisualState: tC({
                scrapeMotionValuesFromProps: tP,
                createRenderState: to
            })
        };
        function tR(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            ()=>t.removeEventListener(e, i)
        }
        let tL = t=>"mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function tj(t, e="page") {
            return {
                point: {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }
        }
        let tF = t=>e=>tL(e) && t(e, tj(e));
        function tB(t, e, i, n) {
            return tR(t, e, tF(i), n)
        }
        let tO = (t,e)=>i=>e(t(i))
          , tU = (...t)=>t.reduce(tO);
        function tW(t) {
            let e = null;
            return ()=>null === e && (e = t,
            ()=>{
                e = null
            }
            )
        }
        let tI = tW("dragHorizontal")
          , tN = tW("dragVertical");
        function t$(t) {
            let e = !1;
            if ("y" === t)
                e = tN();
            else if ("x" === t)
                e = tI();
            else {
                let t = tI()
                  , i = tN();
                t && i ? e = ()=>{
                    t(),
                    i()
                }
                : (t && t(),
                i && i())
            }
            return e
        }
        function tH() {
            let t = t$(!0);
            return !t || (t(),
            !1)
        }
        class tZ {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        function tz(t, e) {
            let i = "onHover" + (e ? "Start" : "End");
            return tB(t.current, "pointer" + (e ? "enter" : "leave"), (n,r)=>{
                if ("touch" === n.pointerType || tH())
                    return;
                let s = t.getProps();
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", e),
                s[i] && tM.Wi.update(()=>s[i](n, r))
            }
            , {
                passive: !t.getProps()[i]
            })
        }
        class tY extends tZ {
            mount() {
                this.unmount = tU(tz(this.node, !0), tz(this.node, !1))
            }
            unmount() {}
        }
        class tX extends tZ {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = tU(tR(this.node.current, "focus", ()=>this.onFocus()), tR(this.node.current, "blur", ()=>this.onBlur()))
            }
            unmount() {}
        }
        let tG = (t,e)=>!!e && (t === e || tG(t, e.parentElement));
        var tq = i(1662);
        function tK(t, e) {
            if (!e)
                return;
            let i = new PointerEvent("pointer" + t);
            e(i, tj(i))
        }
        class t_ extends tZ {
            constructor() {
                super(...arguments),
                this.removeStartListeners = tq.Z,
                this.removeEndListeners = tq.Z,
                this.removeAccessibleListeners = tq.Z,
                this.startPointerPress = (t,e)=>{
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    let i = this.node.getProps()
                      , n = tB(window, "pointerup", (t,e)=>{
                        if (!this.checkPressEnd())
                            return;
                        let {onTap: i, onTapCancel: n, globalTapTarget: r} = this.node.getProps();
                        tM.Wi.update(()=>{
                            r || tG(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                        }
                        )
                    }
                    , {
                        passive: !(i.onTap || i.onPointerUp)
                    })
                      , r = tB(window, "pointercancel", (t,e)=>this.cancelPress(t, e), {
                        passive: !(i.onTapCancel || i.onPointerCancel)
                    });
                    this.removeEndListeners = tU(n, r),
                    this.startPress(t, e)
                }
                ,
                this.startAccessiblePress = ()=>{
                    let t = tR(this.node.current, "keydown", t=>{
                        "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                        this.removeEndListeners = tR(this.node.current, "keyup", t=>{
                            "Enter" === t.key && this.checkPressEnd() && tK("up", (t,e)=>{
                                let {onTap: i} = this.node.getProps();
                                i && tM.Wi.update(()=>i(t, e))
                            }
                            )
                        }
                        ),
                        tK("down", (t,e)=>{
                            this.startPress(t, e)
                        }
                        ))
                    }
                    )
                      , e = tR(this.node.current, "blur", ()=>{
                        this.isPressing && tK("cancel", (t,e)=>this.cancelPress(t, e))
                    }
                    );
                    this.removeAccessibleListeners = tU(t, e)
                }
            }
            startPress(t, e) {
                this.isPressing = !0;
                let {onTapStart: i, whileTap: n} = this.node.getProps();
                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                i && tM.Wi.update(()=>i(t, e))
            }
            checkPressEnd() {
                return this.removeEndListeners(),
                this.isPressing = !1,
                this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !tH()
            }
            cancelPress(t, e) {
                if (!this.checkPressEnd())
                    return;
                let {onTapCancel: i} = this.node.getProps();
                i && tM.Wi.update(()=>i(t, e))
            }
            mount() {
                let t = this.node.getProps()
                  , e = tB(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                })
                  , i = tR(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tU(e, i)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
        }
        let tJ = new WeakMap
          , tQ = new WeakMap
          , t0 = t=>{
            let e = tJ.get(t.target);
            e && e(t)
        }
          , t1 = t=>{
            t.forEach(t0)
        }
          , t5 = {
            some: 0,
            all: 1
        };
        class t2 extends tZ {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: n="some", once: r} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : t5[n]
                };
                return function(t, e, i) {
                    let n = function({root: t, ...e}) {
                        let i = t || document;
                        tQ.has(i) || tQ.set(i, {});
                        let n = tQ.get(i)
                          , r = JSON.stringify(e);
                        return n[r] || (n[r] = new IntersectionObserver(t1,{
                            root: t,
                            ...e
                        })),
                        n[r]
                    }(e);
                    return tJ.set(t, i),
                    n.observe(t),
                    ()=>{
                        tJ.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, s, t=>{
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    r && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                      , s = e ? i : n;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i=>t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        function t3(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function t6(t, e, i) {
            let n = t.getProps();
            return tw(n, e, void 0 !== i ? i : n.custom, function(t) {
                let e = {};
                return t.values.forEach((t,i)=>e[i] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach((t,i)=>e[i] = t.getVelocity()),
                e
            }(t))
        }
        var t4 = i(5487);
        let t9 = t=>1e3 * t
          , t8 = t=>t / 1e3
          , t7 = {
            current: !1
        }
          , et = t=>Array.isArray(t) && "number" == typeof t[0]
          , ee = ([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , ei = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: ee([0, .65, .55, 1]),
            circOut: ee([.55, 0, 1, .45]),
            backIn: ee([.31, .01, .66, -.59]),
            backOut: ee([.33, 1.53, .69, .99])
        }
          , en = (t,e,i)=>(((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function er(t, e, i, n) {
            if (t === e && i === n)
                return tq.Z;
            let r = e=>(function(t, e, i, n, r) {
                let s, o;
                let a = 0;
                do
                    (s = en(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t=>0 === t || 1 === t ? t : en(r(t), e, n)
        }
        let es = er(.42, 0, 1, 1)
          , eo = er(0, 0, .58, 1)
          , ea = er(.42, 0, .58, 1)
          , el = t=>Array.isArray(t) && "number" != typeof t[0]
          , eu = t=>e=>e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , eh = t=>e=>1 - t(1 - e)
          , ec = t=>1 - Math.sin(Math.acos(t))
          , ed = eh(ec)
          , ep = eu(ec)
          , em = er(.33, 1.53, .69, .99)
          , ef = eh(em)
          , eg = eu(ef)
          , ev = {
            linear: tq.Z,
            easeIn: es,
            easeInOut: ea,
            easeOut: eo,
            circIn: ec,
            circInOut: ep,
            circOut: ed,
            backIn: ef,
            backInOut: eg,
            backOut: em,
            anticipate: t=>(t *= 2) < 1 ? .5 * ef(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , ey = t=>{
            if (Array.isArray(t)) {
                (0,
                t4.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,r] = t;
                return er(e, i, n, r)
            }
            return "string" == typeof t ? ((0,
            t4.k)(void 0 !== ev[t], `Invalid easing type '${t}'`),
            ev[t]) : t
        }
          , ex = (t,e)=>i=>!!(q(i) && G.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e))
          , eP = (t,e,i)=>n=>{
            if (!q(n))
                return n;
            let[r,s,o,a] = n.match(Y);
            return {
                [t]: parseFloat(r),
                [e]: parseFloat(s),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , eb = t=>N(0, 255, t)
          , ew = {
            ...$,
            transform: t=>Math.round(eb(t))
        }
          , eT = {
            test: ex("rgb", "red"),
            parse: eP("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1})=>"rgba(" + ew.transform(t) + ", " + ew.transform(e) + ", " + ew.transform(i) + ", " + z(H.transform(n)) + ")"
        }
          , eA = {
            test: ex("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: eT.transform
        }
          , eS = {
            test: ex("hsl", "hue"),
            parse: eP("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: n=1})=>"hsla(" + Math.round(t) + ", " + J.transform(z(e)) + ", " + J.transform(z(i)) + ", " + z(H.transform(n)) + ")"
        }
          , eV = {
            test: t=>eT.test(t) || eA.test(t) || eS.test(t),
            parse: t=>eT.test(t) ? eT.parse(t) : eS.test(t) ? eS.parse(t) : eA.parse(t),
            transform: t=>q(t) ? t : t.hasOwnProperty("red") ? eT.transform(t) : eS.transform(t)
        }
          , eE = (t,e,i)=>-i * t + i * e + t;
        function eC(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        let eM = (t,e,i)=>{
            let n = t * t;
            return Math.sqrt(Math.max(0, i * (e * e - n) + n))
        }
          , eD = [eA, eT, eS]
          , ek = t=>eD.find(e=>e.test(t));
        function eR(t) {
            let e = ek(t);
            (0,
            t4.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let i = e.parse(t);
            return e === eS && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let r = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - n;
                    r = eC(a, n, t + 1 / 3),
                    s = eC(a, n, t),
                    o = eC(a, n, t - 1 / 3)
                } else
                    r = s = o = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(i)),
            i
        }
        let eL = (t,e)=>{
            let i = eR(t)
              , n = eR(e)
              , r = {
                ...i
            };
            return t=>(r.red = eM(i.red, n.red, t),
            r.green = eM(i.green, n.green, t),
            r.blue = eM(i.blue, n.blue, t),
            r.alpha = eE(i.alpha, n.alpha, t),
            eT.transform(r))
        }
          , ej = {
            regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
            countKey: "Vars",
            token: "${v}",
            parse: tq.Z
        }
          , eF = {
            regex: X,
            countKey: "Colors",
            token: "${c}",
            parse: eV.parse
        }
          , eB = {
            regex: Y,
            countKey: "Numbers",
            token: "${n}",
            parse: $.parse
        };
        function eO(t, {regex: e, countKey: i, token: n, parse: r}) {
            let s = t.tokenised.match(e);
            s && (t["num" + i] = s.length,
            t.tokenised = t.tokenised.replace(e, n),
            t.values.push(...s.map(r)))
        }
        function eU(t) {
            let e = t.toString()
              , i = {
                value: e,
                tokenised: e,
                values: [],
                numVars: 0,
                numColors: 0,
                numNumbers: 0
            };
            return i.value.includes("var(--") && eO(i, ej),
            eO(i, eF),
            eO(i, eB),
            i
        }
        function eW(t) {
            return eU(t).values
        }
        function eI(t) {
            let {values: e, numColors: i, numVars: n, tokenised: r} = eU(t)
              , s = e.length;
            return t=>{
                let e = r;
                for (let r = 0; r < s; r++)
                    e = r < n ? e.replace(ej.token, t[r]) : r < n + i ? e.replace(eF.token, eV.transform(t[r])) : e.replace(eB.token, z(t[r]));
                return e
            }
        }
        let eN = t=>"number" == typeof t ? 0 : t
          , e$ = {
            test: function(t) {
                var e, i;
                return isNaN(t) && q(t) && ((null === (e = t.match(Y)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(X)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: eW,
            createTransformer: eI,
            getAnimatableNone: function(t) {
                let e = eW(t);
                return eI(t)(e.map(eN))
            }
        }
          , eH = (t,e)=>i=>`${i > 0 ? e : t}`;
        function eZ(t, e) {
            return "number" == typeof t ? i=>eE(t, e, i) : eV.test(t) ? eL(t, e) : t.startsWith("var(") ? eH(t, e) : eX(t, e)
        }
        let ez = (t,e)=>{
            let i = [...t]
              , n = i.length
              , r = t.map((t,i)=>eZ(t, e[i]));
            return t=>{
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
          , eY = (t,e)=>{
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = eZ(t[r], e[r]));
            return t=>{
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
          , eX = (t,e)=>{
            let i = e$.createTransformer(e)
              , n = eU(t)
              , r = eU(e);
            return n.numVars === r.numVars && n.numColors === r.numColors && n.numNumbers >= r.numNumbers ? tU(ez(n.values, r.values), i) : ((0,
            t4.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            eH(t, e))
        }
          , eG = (t,e,i)=>{
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
          , eq = (t,e)=>i=>eE(t, e, i);
        function eK(t, e, {clamp: i=!0, ease: n, mixer: r}={}) {
            let s = t.length;
            if ((0,
            t4.k)(s === e.length, "Both input and output ranges must be the same length"),
            1 === s)
                return ()=>e[0];
            t[0] > t[s - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let o = function(t, e, i) {
                let n = []
                  , r = i || function(t) {
                    if ("number" == typeof t)
                        ;
                    else if ("string" == typeof t)
                        return eV.test(t) ? eL : eX;
                    else if (Array.isArray(t))
                        return ez;
                    else if ("object" == typeof t)
                        return eY;
                    return eq
                }(t[0])
                  , s = t.length - 1;
                for (let i = 0; i < s; i++) {
                    let s = r(t[i], t[i + 1]);
                    e && (s = tU(Array.isArray(e) ? e[i] || tq.Z : e, s)),
                    n.push(s)
                }
                return n
            }(e, n, r)
              , a = o.length
              , l = e=>{
                let i = 0;
                if (a > 1)
                    for (; i < t.length - 2 && !(e < t[i + 1]); i++)
                        ;
                let n = eG(t[i], t[i + 1], e);
                return o[i](n)
            }
            ;
            return i ? e=>l(N(t[0], t[s - 1], e)) : l
        }
        function e_({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let r = el(n) ? n.map(ey) : ey(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = eK((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let r = eG(0, e, n);
                        t.push(eE(i, 1, r))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e=>e * t), e, {
                ease: Array.isArray(r) ? r : e.map(()=>r || ea).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e=>(s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        function eJ(t, e, i) {
            var n, r;
            let s = Math.max(e - 5, 0);
            return n = i - t(s),
            (r = e - s) ? 1e3 / r * n : 0
        }
        function eQ(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let e0 = ["duration", "bounce"]
          , e1 = ["stiffness", "damping", "mass"];
        function e5(t, e) {
            return e.some(e=>void 0 !== t[e])
        }
        function e2({keyframes: t, restDelta: e, restSpeed: i, ...n}) {
            let r;
            let s = t[0]
              , o = t[t.length - 1]
              , a = {
                done: !1,
                value: s
            }
              , {stiffness: l, damping: u, mass: h, duration: c, velocity: d, isResolvedFromDuration: p} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!e5(t, e1) && e5(t, e0)) {
                    let i = function({duration: t=800, bounce: e=.25, velocity: i=0, mass: n=1}) {
                        let r, s;
                        (0,
                        t4.K)(t <= t9(10), "Spring duration must be 10 seconds or less");
                        let o = 1 - e;
                        o = N(.05, 1, o),
                        t = N(.01, 10, t8(t)),
                        o < 1 ? (r = e=>{
                            let n = e * o
                              , r = n * t;
                            return .001 - (n - i) / eQ(e, o) * Math.exp(-r)
                        }
                        ,
                        s = e=>{
                            let n = e * o * t
                              , s = Math.pow(o, 2) * Math.pow(e, 2) * t
                              , a = eQ(Math.pow(e, 2), o);
                            return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                        }
                        ) : (r = e=>-.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                        s = e=>t * t * (i - e) * Math.exp(-e * t));
                        let a = function(t, e, i) {
                            let n = i;
                            for (let i = 1; i < 12; i++)
                                n -= t(n) / e(n);
                            return n
                        }(r, s, 5 / t);
                        if (t = t9(t),
                        isNaN(a))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(a, 2) * n;
                            return {
                                stiffness: e,
                                damping: 2 * o * Math.sqrt(n * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...i,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }({
                ...n,
                velocity: -t8(n.velocity || 0)
            })
              , m = d || 0
              , f = u / (2 * Math.sqrt(l * h))
              , g = o - s
              , v = t8(Math.sqrt(l / h))
              , y = 5 > Math.abs(g);
            if (i || (i = y ? .01 : 2),
            e || (e = y ? .005 : .5),
            f < 1) {
                let t = eQ(v, f);
                r = e=>o - Math.exp(-f * v * e) * ((m + f * v * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
            } else if (1 === f)
                r = t=>o - Math.exp(-v * t) * (g + (m + v * g) * t);
            else {
                let t = v * Math.sqrt(f * f - 1);
                r = e=>{
                    let i = Math.exp(-f * v * e)
                      , n = Math.min(t * e, 300);
                    return o - i * ((m + f * v * g) * Math.sinh(n) + t * g * Math.cosh(n)) / t
                }
            }
            return {
                calculatedDuration: p && c || null,
                next: t=>{
                    let n = r(t);
                    if (p)
                        a.done = t >= c;
                    else {
                        let s = m;
                        0 !== t && (s = f < 1 ? eJ(r, t, n) : 0);
                        let l = Math.abs(s) <= i
                          , u = Math.abs(o - n) <= e;
                        a.done = l && u
                    }
                    return a.value = a.done ? o : n,
                    a
                }
            }
        }
        function e3({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: r=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let c, d;
            let p = t[0]
              , m = {
                done: !1,
                value: p
            }
              , f = t=>void 0 !== a && t < a || void 0 !== l && t > l
              , g = t=>void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , v = i * e
              , y = p + v
              , x = void 0 === o ? y : o(y);
            x !== y && (v = x - p);
            let P = t=>-v * Math.exp(-t / n)
              , b = t=>x + P(t)
              , w = t=>{
                let e = P(t)
                  , i = b(t);
                m.done = Math.abs(e) <= u,
                m.value = m.done ? x : i
            }
              , T = t=>{
                f(m.value) && (c = t,
                d = e2({
                    keyframes: [m.value, g(m.value)],
                    velocity: eJ(b, t, m.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return T(0),
            {
                calculatedDuration: null,
                next: t=>{
                    let e = !1;
                    return (d || void 0 !== c || (e = !0,
                    w(t),
                    T(t)),
                    void 0 !== c && t > c) ? d.next(t - c) : (e || w(t),
                    m)
                }
            }
        }
        let e6 = t=>{
            let e = ({timestamp: e})=>t(e);
            return {
                start: ()=>tM.Wi.update(e, !0),
                stop: ()=>(0,
                tM.Pn)(e),
                now: ()=>tM.frameData.isProcessing ? tM.frameData.timestamp : performance.now()
            }
        }
        ;
        function e4(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < 2e4; )
                e += 50,
                i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        let e9 = {
            decay: e3,
            inertia: e3,
            tween: e_,
            keyframes: e_,
            spring: e2
        };
        function e8({autoplay: t=!0, delay: e=0, driver: i=e6, keyframes: n, type: r="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: a="loop", onPlay: l, onStop: u, onComplete: h, onUpdate: c, ...d}) {
            let p, m, f, g, v, y = 1, x = !1, P = ()=>{
                m = new Promise(t=>{
                    p = t
                }
                )
            }
            ;
            P();
            let b = e9[r] || e_;
            b !== e_ && "number" != typeof n[0] && (g = eK([0, 100], n, {
                clamp: !1
            }),
            n = [0, 100]);
            let w = b({
                ...d,
                keyframes: n
            });
            "mirror" === a && (v = b({
                ...d,
                keyframes: [...n].reverse(),
                velocity: -(d.velocity || 0)
            }));
            let T = "idle"
              , A = null
              , S = null
              , V = null;
            null === w.calculatedDuration && s && (w.calculatedDuration = e4(w));
            let {calculatedDuration: E} = w
              , C = 1 / 0
              , M = 1 / 0;
            null !== E && (M = (C = E + o) * (s + 1) - o);
            let D = 0
              , k = t=>{
                if (null === S)
                    return;
                y > 0 && (S = Math.min(S, t)),
                y < 0 && (S = Math.min(t - M / y, S));
                let i = (D = null !== A ? A : Math.round(t - S) * y) - e * (y >= 0 ? 1 : -1)
                  , r = y >= 0 ? i < 0 : i > M;
                D = Math.max(i, 0),
                "finished" === T && null === A && (D = M);
                let l = D
                  , u = w;
                if (s) {
                    let t = Math.min(D, M) / C
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, s + 1)) % 2 && ("reverse" === a ? (i = 1 - i,
                    o && (i -= o / C)) : "mirror" === a && (u = v)),
                    l = N(0, 1, i) * C
                }
                let h = r ? {
                    done: !1,
                    value: n[0]
                } : u.next(l);
                g && (h.value = g(h.value));
                let {done: d} = h;
                r || null === E || (d = y >= 0 ? D >= M : D <= 0);
                let p = null === A && ("finished" === T || "running" === T && d);
                return c && c(h.value),
                p && j(),
                h
            }
              , R = ()=>{
                f && f.stop(),
                f = void 0
            }
              , L = ()=>{
                T = "idle",
                R(),
                p(),
                P(),
                S = V = null
            }
              , j = ()=>{
                T = "finished",
                h && h(),
                R(),
                p()
            }
              , F = ()=>{
                if (x)
                    return;
                f || (f = i(k));
                let t = f.now();
                l && l(),
                null !== A ? S = t - A : S && "finished" !== T || (S = t),
                "finished" === T && P(),
                V = S,
                A = null,
                T = "running",
                f.start()
            }
            ;
            t && F();
            let B = {
                then: (t,e)=>m.then(t, e),
                get time() {
                    return t8(D)
                },
                set time(newTime) {
                    D = newTime = t9(newTime),
                    null === A && f && 0 !== y ? S = f.now() - newTime / y : A = newTime
                },
                get duration() {
                    return t8(null === w.calculatedDuration ? e4(w) : w.calculatedDuration)
                },
                get speed() {
                    return y
                },
                set speed(newSpeed) {
                    if (newSpeed === y || !f)
                        return;
                    y = newSpeed,
                    B.time = t8(D)
                },
                get state() {
                    return T
                },
                play: F,
                pause: ()=>{
                    T = "paused",
                    A = D
                }
                ,
                stop: ()=>{
                    x = !0,
                    "idle" !== T && (T = "idle",
                    u && u(),
                    L())
                }
                ,
                cancel: ()=>{
                    null !== V && k(V),
                    L()
                }
                ,
                complete: ()=>{
                    T = "finished"
                }
                ,
                sample: t=>(S = 0,
                k(t))
            };
            return B
        }
        let e7 = (s = ()=>Object.hasOwnProperty.call(Element.prototype, "animate"),
        ()=>(void 0 === n && (n = s()),
        n))
          , it = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
          , ie = (t,e)=>"spring" === e.type || "backgroundColor" === t || !function t(e) {
            return !!(!e || "string" == typeof e && ei[e] || et(e) || Array.isArray(e) && e.every(t))
        }(e.ease)
          , ii = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , ir = t=>({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , is = {
            type: "keyframes",
            duration: .8
        }
          , io = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , ia = (t,{keyframes: e})=>e.length > 2 ? is : R.has(t) ? t.startsWith("scale") ? ir(e[1]) : ii : io
          , il = (t,e)=>"zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (e$.test(e) || "0" === e) && !e.startsWith("url("))
          , iu = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function ih(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(Y) || [];
            if (!n)
                return t;
            let r = i.replace(n, "")
              , s = iu.has(e) ? 1 : 0;
            return n !== i && (s *= 100),
            e + "(" + s + r + ")"
        }
        let ic = /([a-z-]*)\(.*?\)/g
          , id = {
            ...e$,
            getAnimatableNone: t=>{
                let e = t.match(ic);
                return e ? e.map(ih).join(" ") : t
            }
        }
          , ip = {
            ...tr,
            color: eV,
            backgroundColor: eV,
            outlineColor: eV,
            fill: eV,
            stroke: eV,
            borderColor: eV,
            borderTopColor: eV,
            borderRightColor: eV,
            borderBottomColor: eV,
            borderLeftColor: eV,
            filter: id,
            WebkitFilter: id
        }
          , im = t=>ip[t];
        function ig(t, e) {
            let i = im(t);
            return i !== id && (i = e$),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let iv = t=>/^0[^.\s]+$/.test(t);
        function iy(t, e) {
            return t[e] || t.default || t
        }
        let ix = {
            skipAnimations: !1
        }
          , iP = (t,e,i,n={})=>r=>{
            let s = iy(n, t) || {}
              , o = s.delay || n.delay || 0
              , {elapsed: a=0} = n;
            a -= t9(o);
            let l = function(t, e, i, n) {
                let r, s;
                let o = il(e, i);
                r = Array.isArray(i) ? [...i] : [null, i];
                let a = void 0 !== n.from ? n.from : t.get()
                  , l = [];
                for (let t = 0; t < r.length; t++) {
                    var u;
                    null === r[t] && (r[t] = 0 === t ? a : r[t - 1]),
                    ("number" == typeof (u = r[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || iv(u) : void 0) && l.push(t),
                    "string" == typeof r[t] && "none" !== r[t] && "0" !== r[t] && (s = r[t])
                }
                if (o && l.length && s)
                    for (let t = 0; t < l.length; t++)
                        r[l[t]] = ig(e, s);
                return r
            }(e, t, i, s)
              , u = l[0]
              , h = l[l.length - 1]
              , c = il(t, u)
              , d = il(t, h);
            (0,
            t4.K)(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
            let p = {
                keyframes: l,
                velocity: e.getVelocity(),
                ease: "easeOut",
                ...s,
                delay: -a,
                onUpdate: t=>{
                    e.set(t),
                    s.onUpdate && s.onUpdate(t)
                }
                ,
                onComplete: ()=>{
                    r(),
                    s.onComplete && s.onComplete()
                }
            };
            if (!function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(s) && (p = {
                ...p,
                ...ia(t, p)
            }),
            p.duration && (p.duration = t9(p.duration)),
            p.repeatDelay && (p.repeatDelay = t9(p.repeatDelay)),
            !c || !d || t7.current || !1 === s.type || ix.skipAnimations)
                return function({keyframes: t, delay: e, onUpdate: i, onComplete: n}) {
                    let r = ()=>(i && i(t[t.length - 1]),
                    n && n(),
                    {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: tq.Z,
                        pause: tq.Z,
                        stop: tq.Z,
                        then: t=>(t(),
                        Promise.resolve()),
                        cancel: tq.Z,
                        complete: tq.Z
                    });
                    return e ? e8({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: r
                    }) : r()
                }(t7.current ? {
                    ...p,
                    delay: 0
                } : p);
            if (!n.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                let i = function(t, e, {onUpdate: i, onComplete: n, ...r}) {
                    let s, o;
                    if (!(e7() && it.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type))
                        return !1;
                    let a = !1
                      , l = !1
                      , u = ()=>{
                        o = new Promise(t=>{
                            s = t
                        }
                        )
                    }
                    ;
                    u();
                    let {keyframes: h, duration: c=300, ease: d, times: p} = r;
                    if (ie(e, r)) {
                        let t = e8({
                            ...r,
                            repeat: 0,
                            delay: 0
                        })
                          , e = {
                            done: !1,
                            value: h[0]
                        }
                          , i = []
                          , n = 0;
                        for (; !e.done && n < 2e4; )
                            e = t.sample(n),
                            i.push(e.value),
                            n += 10;
                        p = void 0,
                        h = i,
                        c = n - 10,
                        d = "linear"
                    }
                    let m = function(t, e, i, {delay: n=0, duration: r, repeat: s=0, repeatType: o="loop", ease: a, times: l}={}) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let h = function t(e) {
                            if (e)
                                return et(e) ? ee(e) : Array.isArray(e) ? e.map(t) : ei[e]
                        }(a);
                        return Array.isArray(h) && (u.easing = h),
                        t.animate(u, {
                            delay: n,
                            duration: r,
                            easing: Array.isArray(h) ? "linear" : h,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, h, {
                        ...r,
                        duration: c,
                        ease: d,
                        times: p
                    })
                      , f = ()=>{
                        l = !1,
                        m.cancel()
                    }
                      , g = ()=>{
                        l = !0,
                        tM.Wi.update(f),
                        s(),
                        u()
                    }
                    ;
                    return m.onfinish = ()=>{
                        l || (t.set(function(t, {repeat: e, repeatType: i="loop"}) {
                            let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                            return t[n]
                        }(h, r)),
                        n && n(),
                        g())
                    }
                    ,
                    {
                        then: (t,e)=>o.then(t, e),
                        attachTimeline: t=>(m.timeline = t,
                        m.onfinish = null,
                        tq.Z),
                        get time() {
                            return t8(m.currentTime || 0)
                        },
                        set time(newTime) {
                            m.currentTime = t9(newTime)
                        },
                        get speed() {
                            return m.playbackRate
                        },
                        set speed(newSpeed) {
                            m.playbackRate = newSpeed
                        },
                        get duration() {
                            return t8(c)
                        },
                        play: ()=>{
                            a || (m.play(),
                            (0,
                            tM.Pn)(f))
                        }
                        ,
                        pause: ()=>m.pause(),
                        stop: ()=>{
                            if (a = !0,
                            "idle" === m.playState)
                                return;
                            let {currentTime: e} = m;
                            if (e) {
                                let i = e8({
                                    ...r,
                                    autoplay: !1
                                });
                                t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                            }
                            g()
                        }
                        ,
                        complete: ()=>{
                            l || m.finish()
                        }
                        ,
                        cancel: g
                    }
                }(e, t, p);
                if (i)
                    return i
            }
            return e8(p)
        }
        ;
        function ib(t) {
            return !!(j(t) && t.add)
        }
        let iw = t=>/^\-?\d*\.?\d+$/.test(t);
        function iT(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function iA(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        class iS {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return iT(this.subscriptions, t),
                ()=>iA(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let iV = t=>!isNaN(parseFloat(t))
          , iE = {
            current: void 0
        };
        class iC {
            constructor(t, e={}) {
                this.version = "10.18.0",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t,e=!0)=>{
                    this.prev = this.current,
                    this.current = t;
                    let {delta: i, timestamp: n} = tM.frameData;
                    this.lastUpdated !== n && (this.timeDelta = i,
                    this.lastUpdated = n,
                    tM.Wi.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.scheduleVelocityCheck = ()=>tM.Wi.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: t})=>{
                    t !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = iV(this.current),
                this.owner = e.owner
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new iS);
                let i = this.events[t].add(e);
                return "change" === t ? ()=>{
                    i(),
                    tM.Wi.read(()=>{
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = t,
                this.timeDelta = i
            }
            jump(t) {
                this.updateAndNotify(t),
                this.prev = t,
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return iE.current && iE.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t, e;
                return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev),
                (e = this.timeDelta) ? 1e3 / e * t : 0) : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e=>{
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then(()=>{
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function iM(t, e) {
            return new iC(t,e)
        }
        let iD = t=>e=>e.test(t)
          , ik = [$, Q, J, _, te, tt, {
            test: t=>"auto" === t,
            parse: t=>t
        }]
          , iR = t=>ik.find(iD(t))
          , iL = [...ik, eV, e$]
          , ij = t=>iL.find(iD(t));
        function iF(t, e, {delay: i=0, transitionOverride: n, type: r}={}) {
            let {transition: s=t.getDefaultTransition(), transitionEnd: o, ...a} = t.makeTargetAnimatable(e)
              , l = t.getValue("willChange");
            n && (s = n);
            let u = []
              , h = r && t.animationState && t.animationState.getState()[r];
            for (let e in a) {
                let n = t.getValue(e)
                  , r = a[e];
                if (!n || void 0 === r || h && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(h, e))
                    continue;
                let o = {
                    delay: i,
                    elapsed: 0,
                    ...iy(s || {}, e)
                };
                if (window.HandoffAppearAnimations) {
                    let i = t.getProps()[p];
                    if (i) {
                        let t = window.HandoffAppearAnimations(i, e, n, tM.Wi);
                        null !== t && (o.elapsed = t,
                        o.isHandoff = !0)
                    }
                }
                let c = !o.isHandoff && !function(t, e) {
                    let i = t.get();
                    if (!Array.isArray(e))
                        return i !== e;
                    for (let t = 0; t < e.length; t++)
                        if (e[t] !== i)
                            return !0
                }(n, r);
                if ("spring" === o.type && (n.getVelocity() || o.velocity) && (c = !1),
                n.animation && (c = !1),
                c)
                    continue;
                n.start(iP(e, n, r, t.shouldReduceMotion && R.has(e) ? {
                    type: !1
                } : o));
                let d = n.animation;
                ib(l) && (l.add(e),
                d.then(()=>l.remove(e))),
                u.push(d)
            }
            return o && Promise.all(u).then(()=>{
                o && function(t, e) {
                    let i = t6(t, e)
                      , {transitionEnd: n={}, transition: r={}, ...s} = i ? t.makeTargetAnimatable(i, !1) : {};
                    for (let e in s = {
                        ...s,
                        ...n
                    }) {
                        let i = tV(s[e]);
                        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, iM(i))
                    }
                }(t, o)
            }
            ),
            u
        }
        function iB(t, e, i={}) {
            let n = t6(t, e, i.custom)
              , {transition: r=t.getDefaultTransition() || {}} = n || {};
            i.transitionOverride && (r = i.transitionOverride);
            let s = n ? ()=>Promise.all(iF(t, n, i)) : ()=>Promise.resolve()
              , o = t.variantChildren && t.variantChildren.size ? (n=0)=>{
                let {delayChildren: s=0, staggerChildren: o, staggerDirection: a} = r;
                return function(t, e, i=0, n=0, r=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === r ? (t=0)=>t * n : (t=0)=>a - t * n;
                    return Array.from(t.variantChildren).sort(iO).forEach((t,n)=>{
                        t.notify("AnimationStart", e),
                        o.push(iB(t, e, {
                            ...s,
                            delay: i + l(n)
                        }).then(()=>t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, s + n, o, a, i)
            }
            : ()=>Promise.resolve()
              , {when: a} = r;
            if (!a)
                return Promise.all([s(), o(i.delay)]);
            {
                let[t,e] = "beforeChildren" === a ? [s, o] : [o, s];
                return t().then(()=>e())
            }
        }
        function iO(t, e) {
            return t.sortNodePosition(e)
        }
        let iU = [...v].reverse()
          , iW = v.length;
        function iI(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        class iN extends tZ {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e=>Promise.all(e.map(({animation: e, options: i})=>(function(t, e, i={}) {
                        let n;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            n = Promise.all(e.map(e=>iB(t, e, i)));
                        else if ("string" == typeof e)
                            n = iB(t, e, i);
                        else {
                            let r = "function" == typeof e ? t6(t, e, i.custom) : e;
                            n = Promise.all(iF(t, r, i))
                        }
                        return n.then(()=>t.notify("AnimationComplete", e))
                    }
                    )(t, e, i)))
                      , i = {
                        animate: iI(!0),
                        whileInView: iI(),
                        whileHover: iI(),
                        whileTap: iI(),
                        whileDrag: iI(),
                        whileFocus: iI(),
                        exit: iI()
                    }
                      , n = !0
                      , r = (e,i)=>{
                        let n = t6(t, i);
                        if (n) {
                            let {transition: t, transitionEnd: i, ...r} = n;
                            e = {
                                ...e,
                                ...r,
                                ...i
                            }
                        }
                        return e
                    }
                    ;
                    function s(s, o) {
                        let a = t.getProps()
                          , l = t.getVariantContext(!0) || {}
                          , u = []
                          , h = new Set
                          , c = {}
                          , d = 1 / 0;
                        for (let e = 0; e < iW; e++) {
                            var p;
                            let m = iU[e]
                              , v = i[m]
                              , y = void 0 !== a[m] ? a[m] : l[m]
                              , x = f(y)
                              , P = m === o ? v.isActive : null;
                            !1 === P && (d = e);
                            let b = y === l[m] && y !== a[m] && x;
                            if (b && n && t.manuallyAnimateOnMount && (b = !1),
                            v.protectedKeys = {
                                ...c
                            },
                            !v.isActive && null === P || !y && !v.prevProp || g(y) || "boolean" == typeof y)
                                continue;
                            let w = (p = v.prevProp,
                            ("string" == typeof y ? y !== p : !!Array.isArray(y) && !t3(y, p)) || m === o && v.isActive && !b && x || e > d && x)
                              , T = !1
                              , A = Array.isArray(y) ? y : [y]
                              , S = A.reduce(r, {});
                            !1 === P && (S = {});
                            let {prevResolvedValues: V={}} = v
                              , E = {
                                ...V,
                                ...S
                            }
                              , C = t=>{
                                w = !0,
                                h.has(t) && (T = !0,
                                h.delete(t)),
                                v.needsAnimating[t] = !0
                            }
                            ;
                            for (let t in E) {
                                let e = S[t]
                                  , i = V[t];
                                if (!c.hasOwnProperty(t))
                                    (tA(e) && tA(i) ? t3(e, i) : e === i) ? void 0 !== e && h.has(t) ? C(t) : v.protectedKeys[t] = !0 : void 0 !== e ? C(t) : h.add(t)
                            }
                            v.prevProp = y,
                            v.prevResolvedValues = S,
                            v.isActive && (c = {
                                ...c,
                                ...S
                            }),
                            n && t.blockInitialAnimation && (w = !1),
                            w && (!b || T) && u.push(...A.map(t=>({
                                animation: t,
                                options: {
                                    type: m,
                                    ...s
                                }
                            })))
                        }
                        if (h.size) {
                            let e = {};
                            h.forEach(i=>{
                                let n = t.getBaseTarget(i);
                                void 0 !== n && (e[i] = n)
                            }
                            ),
                            u.push({
                                animation: e
                            })
                        }
                        let m = !!u.length;
                        return n && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (m = !1),
                        n = !1,
                        m ? e(u) : Promise.resolve()
                    }
                    return {
                        animateChanges: s,
                        setActive: function(e, n, r) {
                            var o;
                            if (i[e].isActive === n)
                                return Promise.resolve();
                            null === (o = t.variantChildren) || void 0 === o || o.forEach(t=>{
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }
                            ),
                            i[e].isActive = n;
                            let a = s(r, e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return a
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: ()=>i
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                this.unmount(),
                g(t) && (this.unmount = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {}
        }
        let i$ = 0;
        class iH extends tZ {
            constructor() {
                super(...arguments),
                this.id = i$++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e, custom: i} = this.node.presenceContext
                  , {isPresent: n} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n)
                    return;
                let r = this.node.animationState.setActive("exit", !t, {
                    custom: null != i ? i : this.node.getProps().custom
                });
                e && !t && r.then(()=>e(this.id))
            }
            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        let iZ = (t,e)=>Math.abs(t - e);
        class iz {
            constructor(t, e, {transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = ()=>{
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let i = iG(this.lastMoveEventInfo, this.history)
                      , n = null !== this.startEvent
                      , r = (t = i.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(iZ(t.x, e.x) ** 2 + iZ(t.y, e.y) ** 2) >= 3);
                    if (!n && !r)
                        return;
                    let {point: s} = i
                      , {timestamp: o} = tM.frameData;
                    this.history.push({
                        ...s,
                        timestamp: o
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    n || (a && a(this.lastMoveEvent, i),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, i)
                }
                ,
                this.handlePointerMove = (t,e)=>{
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = iY(e, this.transformPagePoint),
                    tM.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t,e)=>{
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = iG("pointercancel" === t.type ? this.lastMoveEventInfo : iY(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    n && n(t, s)
                }
                ,
                !tL(t))
                    return;
                this.dragSnapToOrigin = r,
                this.handlers = e,
                this.transformPagePoint = i,
                this.contextWindow = n || window;
                let s = iY(tj(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: a} = tM.frameData;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, iG(s, this.history)),
                this.removeListeners = tU(tB(this.contextWindow, "pointermove", this.handlePointerMove), tB(this.contextWindow, "pointerup", this.handlePointerUp), tB(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                tM.Pn)(this.updatePoint)
            }
        }
        function iY(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function iX(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function iG({point: t}, e) {
            return {
                point: t,
                delta: iX(t, iq(e)),
                offset: iX(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , r = iq(t);
                    for (; i >= 0 && (n = t[i],
                    !(r.timestamp - n.timestamp > t9(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = t8(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function iq(t) {
            return t[t.length - 1]
        }
        function iK(t) {
            return t.max - t.min
        }
        function i_(t, e=0, i=.01) {
            return Math.abs(t - e) <= i
        }
        function iJ(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = eE(e.min, e.max, t.origin),
            t.scale = iK(i) / iK(e),
            (i_(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = eE(i.min, i.max, t.origin) - t.originPoint,
            (i_(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function iQ(t, e, i, n) {
            iJ(t.x, e.x, i.x, n ? n.originX : void 0),
            iJ(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function i0(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + iK(e)
        }
        function i1(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + iK(e)
        }
        function i5(t, e, i) {
            i1(t.x, e.x, i.x),
            i1(t.y, e.y, i.y)
        }
        function i2(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function i3(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function i6(t, e, i) {
            return {
                min: i4(t, e),
                max: i4(t, i)
            }
        }
        function i4(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let i9 = ()=>({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , i8 = ()=>({
            x: i9(),
            y: i9()
        })
          , i7 = ()=>({
            min: 0,
            max: 0
        })
          , nt = ()=>({
            x: i7(),
            y: i7()
        });
        function ne(t) {
            return [t("x"), t("y")]
        }
        function ni({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function nn(t) {
            return void 0 === t || 1 === t
        }
        function nr({scale: t, scaleX: e, scaleY: i}) {
            return !nn(t) || !nn(e) || !nn(i)
        }
        function ns(t) {
            return nr(t) || no(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function no(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function na(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
            n + i * (t - n) + e
        }
        function nl(t, e=0, i=1, n, r) {
            t.min = na(t.min, e, i, n, r),
            t.max = na(t.max, e, i, n, r)
        }
        function nu(t, {x: e, y: i}) {
            nl(t.x, e.translate, e.scale, e.originPoint),
            nl(t.y, i.translate, i.scale, i.originPoint)
        }
        function nh(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function nc(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function nd(t, e, [i,n,r]) {
            let s = void 0 !== e[r] ? e[r] : .5
              , o = eE(t.min, t.max, s);
            nl(t, e[i], e[n], o, e.scale)
        }
        let np = ["x", "scaleX", "originX"]
          , nm = ["y", "scaleY", "originY"];
        function nf(t, e) {
            nd(t.x, e, np),
            nd(t.y, e, nm)
        }
        function ng(t, e) {
            return ni(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let nv = ({current: t})=>t ? t.ownerDocument.defaultView : null
          , ny = new WeakMap;
        class nx {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = nt(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new iz(t,{
                    onSessionStart: t=>{
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(tj(t, "page").point)
                    }
                    ,
                    onStart: (t,e)=>{
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = t$(i),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        ne(t=>{
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (J.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    if (n) {
                                        let t = iK(n);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && tM.Wi.update(()=>r(t, e), !1, !0);
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t,e)=>{
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openGlobalLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t,e)=>this.stop(t, e),
                    resumeAnimation: ()=>ne(t=>{
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: nv(this.visualElement)
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && tM.Wi.update(()=>r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !nP(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? eE(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? eE(i, t, n.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , r = this.constraints;
                e && m(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {top: e, left: i, bottom: n, right: r}) {
                    return {
                        x: i2(t.x, i, r),
                        y: i2(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: i6(t, "left", "right"),
                        y: i6(t, "top", "bottom")
                    }
                }(i),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ne(t=>{
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !m(e))
                    return !1;
                let n = e.current;
                (0,
                t4.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = function(t, e, i) {
                    let n = ng(t, i)
                      , {scroll: r} = e;
                    return r && (nc(n.x, r.offset.x),
                    nc(n.y, r.offset.y)),
                    n
                }(n, r.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: i3((t = r.layout.layoutBox).x, s.x),
                    y: i3(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = ni(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(ne(o=>{
                    if (!nP(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return i.start(iP(t, i, 0, e))
            }
            stopAnimation() {
                ne(t=>this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                ne(t=>{
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = "_drag" + t.toUpperCase()
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                ne(e=>{
                    let {drag: i} = this.getProps();
                    if (!nP(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - eE(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!m(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                ne(t=>{
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = iK(t)
                              , r = iK(e);
                            return r > n ? i = eG(e.min, e.max - n, t.min) : n > r && (i = eG(t.min, t.max - r, e.min)),
                            N(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                ne(e=>{
                    if (!nP(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    i.set(eE(r, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                ny.set(this.visualElement, this);
                let t = tB(this.visualElement.current, "pointerdown", t=>{
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = ()=>{
                    let {dragConstraints: t} = this.getProps();
                    m(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                e();
                let r = tR(window, "resize", ()=>this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e})=>{
                    this.isDragging && e && (ne(e=>{
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return ()=>{
                    r(),
                    t(),
                    n(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function nP(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class nb extends tZ {
            constructor(t) {
                super(t),
                this.removeGroupControls = tq.Z,
                this.removeListeners = tq.Z,
                this.controls = new nx(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || tq.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let nw = t=>(e,i)=>{
            t && tM.Wi.update(()=>t(e, i))
        }
        ;
        class nT extends tZ {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = tq.Z
            }
            onPointerDown(t) {
                this.session = new iz(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: nv(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: nw(t),
                    onStart: nw(e),
                    onMove: i,
                    onEnd: (t,e)=>{
                        delete this.session,
                        n && tM.Wi.update(()=>n(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = tB(this.node.current, "pointerdown", t=>this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        let nA = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function nS(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let nV = {
            correct: (t,e)=>{
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!Q.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = nS(t, e.target.x)
                  , n = nS(t, e.target.y);
                return `${i}% ${n}%`
            }
        };
        class nE extends o.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: r} = t;
                Object.assign(D, nM),
                r && (e.group && e.group.add(r),
                i && i.register && n && i.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", ()=>{
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: ()=>this.safeToRemove()
                })),
                nA.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props
                  , s = i.projection;
                return s && (s.isPresent = r,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? s.promote() : s.relegate() || tM.Wi.postRender(()=>{
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                queueMicrotask(()=>{
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function nC(t) {
            let[e,i] = function() {
                let t = (0,
                o.useContext)(u.O);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: i, register: n} = t
                  , r = (0,
                o.useId)();
                return (0,
                o.useEffect)(()=>n(r), []),
                !e && i ? [!1, ()=>i && i(r)] : [!0]
            }()
              , n = (0,
            o.useContext)(S.p);
            return o.createElement(nE, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                o.useContext)(V),
                isPresent: e,
                safeToRemove: i
            })
        }
        let nM = {
            borderRadius: {
                ...nV,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: nV,
            borderTopRightRadius: nV,
            borderBottomLeftRadius: nV,
            borderBottomRightRadius: nV,
            boxShadow: {
                correct: (t,{treeScale: e, projectionDelta: i})=>{
                    let n = e$.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = e$.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    n[0 + s] /= o,
                    n[1 + s] /= a;
                    let l = eE(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    r(n)
                }
            }
        }
          , nD = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , nk = nD.length
          , nR = t=>"string" == typeof t ? parseFloat(t) : t
          , nL = t=>"number" == typeof t || Q.test(t);
        function nj(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let nF = nO(0, .5, ed)
          , nB = nO(.5, .95, tq.Z);
        function nO(t, e, i) {
            return n=>n < t ? 0 : n > e ? 1 : i(eG(t, e, n))
        }
        function nU(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function nW(t, e) {
            nU(t.x, e.x),
            nU(t.y, e.y)
        }
        function nI(t, e, i, n, r) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== r && (t = n + 1 / r * (t - n)),
            t
        }
        function nN(t, e, [i,n,r], s, o) {
            !function(t, e=0, i=1, n=.5, r, s=t, o=t) {
                if (J.test(e) && (e = parseFloat(e),
                e = eE(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = eE(s.min, s.max, n);
                t === s && (a -= e),
                t.min = nI(t.min, e, i, a, r),
                t.max = nI(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }
        let n$ = ["x", "scaleX", "originX"]
          , nH = ["y", "scaleY", "originY"];
        function nZ(t, e, i, n) {
            nN(t.x, e, n$, i ? i.x : void 0, n ? n.x : void 0),
            nN(t.y, e, nH, i ? i.y : void 0, n ? n.y : void 0)
        }
        function nz(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function nY(t) {
            return nz(t.x) && nz(t.y)
        }
        function nX(t, e) {
            return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
        }
        function nG(t) {
            return iK(t.x) / iK(t.y)
        }
        class nq {
            constructor() {
                this.members = []
            }
            add(t) {
                iT(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (iA(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e=>t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t=>{
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t=>{
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function nK(t, e, i) {
            let n = ""
              , r = t.x.translate / e.x
              , s = t.y.translate / e.y;
            if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `),
            (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
            i) {
                let {rotate: t, rotateX: e, rotateY: r} = i;
                t && (n += `rotate(${t}deg) `),
                e && (n += `rotateX(${e}deg) `),
                r && (n += `rotateY(${r}deg) `)
            }
            let o = t.x.scale * e.x
              , a = t.y.scale * e.y;
            return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`),
            n || "none"
        }
        let n_ = (t,e)=>t.depth - e.depth;
        class nJ {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                iT(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                iA(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(n_),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        let nQ = ["", "X", "Y", "Z"]
          , n0 = {
            visibility: "hidden"
        }
          , n1 = 0
          , n5 = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function n2({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = n1++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = ()=>{
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = ()=>{
                        this.projectionUpdateScheduled = !1,
                        n5.totalNodes = n5.resolvedTargetDeltas = n5.recalculatedProjection = 0,
                        this.nodes.forEach(n4),
                        this.nodes.forEach(rn),
                        this.nodes.forEach(rr),
                        this.nodes.forEach(n9),
                        window.MotionDebug && window.MotionDebug.record(n5)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nJ)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new iS),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (r || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let n = ()=>this.root.updateBlockedByResize = !1;
                        t(e, ()=>{
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = performance.now()
                                  , n = ({timestamp: e})=>{
                                    let r = e - i;
                                    r >= 250 && ((0,
                                    tM.Pn)(n),
                                    t(r - 250))
                                }
                                ;
                                return tM.Wi.read(n, !0),
                                ()=>(0,
                                tM.Pn)(n)
                            }(n, 0),
                            nA.hasAnimatedSinceResize && (nA.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(ri))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: n})=>{
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || rh
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !nX(this.targetLayout, n) || i
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...iy(r, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || ri(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    tM.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(rs),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(n7);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(rt),
                    this.isUpdating = !1,
                    this.nodes.forEach(re),
                    this.nodes.forEach(n3),
                    this.nodes.forEach(n6),
                    this.clearAllSnapshots();
                    let t = performance.now();
                    tM.frameData.delta = N(0, 1e3 / 60, t - tM.frameData.timestamp),
                    tM.frameData.timestamp = t,
                    tM.frameData.isProcessing = !0,
                    tM.S6.update.process(tM.frameData),
                    tM.S6.preRender.process(tM.frameData),
                    tM.S6.render.process(tM.frameData),
                    tM.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    queueMicrotask(()=>this.update()))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(n8),
                    this.sharedNodes.forEach(ro)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    tM.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    tM.Wi.postRender(()=>{
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = nt(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: n(this.instance),
                        offset: i(this.instance)
                    })
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform
                      , e = this.projectionDelta && !nY(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || ns(this.latestValues) || s) && (r(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    rp((e = n).x),
                    rp(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return nt();
                    let e = t.measureViewportBox()
                      , {scroll: i} = this.root;
                    return i && (nc(e.x, i.offset.x),
                    nc(e.y, i.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = nt();
                    nW(e, t);
                    for (let i = 0; i < this.path.length; i++) {
                        let n = this.path[i]
                          , {scroll: r, options: s} = n;
                        if (n !== this.root && r && s.layoutScroll) {
                            if (r.isRoot) {
                                nW(e, t);
                                let {scroll: i} = this.root;
                                i && (nc(e.x, -i.offset.x),
                                nc(e.y, -i.offset.y))
                            }
                            nc(e.x, r.offset.x),
                            nc(e.y, r.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let i = nt();
                    nW(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && nf(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        ns(n.latestValues) && nf(i, n.latestValues)
                    }
                    return ns(this.latestValues) && nf(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = nt();
                    nW(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !ns(i.latestValues))
                            continue;
                        nr(i.latestValues) && i.updateSnapshot();
                        let n = nt();
                        nW(n, i.measurePageBox()),
                        nZ(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return ns(this.latestValues) && nZ(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tM.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = tM.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = nt(),
                            this.relativeTargetOrigin = nt(),
                            i5(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            nW(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = nt(),
                            this.targetWithTransforms = nt()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            r = this.relativeParent.target,
                            i0(i.x, n.x, r.x),
                            i0(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nW(this.target, this.layout.layoutBox),
                            nu(this.target, this.targetDelta)) : nW(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = nt(),
                                this.relativeTargetOrigin = nt(),
                                i5(this.relativeTargetOrigin, this.target, t.target),
                                nW(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            n5.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || nr(this.parent.latestValues) || no(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === tM.frameData.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(r || s))
                        return;
                    nW(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let o = r.instance;
                                (!o || !o.style || "contents" !== o.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && nf(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                nu(t, s)),
                                n && ns(r.latestValues) && nf(t, r.latestValues))
                            }
                            e.x = nh(e.x),
                            e.y = nh(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                    let {target: l} = e;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = i8(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = i8(),
                    this.projectionDeltaWithTransform = i8());
                    let u = this.projectionTransform;
                    iQ(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = nK(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    n5.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , r = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = i8();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = nt()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(ru));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e=>{
                        let n = e / 1e3;
                        if (ra(o.x, t.x, n),
                        ra(o.y, t.y, n),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, d, p, m;
                            i5(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            rl(p.x, m.x, a.x, n),
                            rl(p.y, m.y, a.y, n),
                            i && (u = this.relativeTarget,
                            d = i,
                            u.x.min === d.x.min && u.x.max === d.x.max && u.y.min === d.y.min && u.y.max === d.y.max) && (this.isProjectionDirty = !1),
                            i || (i = nt()),
                            nW(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, n, r, s) {
                            r ? (t.opacity = eE(0, void 0 !== i.opacity ? i.opacity : 1, nF(n)),
                            t.opacityExit = eE(void 0 !== e.opacity ? e.opacity : 1, 0, nB(n))) : s && (t.opacity = eE(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < nk; r++) {
                                let s = `border${nD[r]}Radius`
                                  , o = nj(e, s)
                                  , a = nj(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || nL(o) === nL(a) ? (t[s] = Math.max(eE(nR(o), nR(a), n), 0),
                                (J.test(a) || J.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = eE(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, c, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    tM.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = tM.Wi.update(()=>{
                        nA.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, i) {
                            let n = j(0) ? 0 : iM(0);
                            return n.start(iP("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e=>{
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: ()=>{
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && rm(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || nt();
                            let e = iK(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = iK(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        nW(e, i),
                        nf(e, r),
                        iQ(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new nq),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    for (let e = 0; e < nQ.length; e++) {
                        let r = "rotate" + nQ[e];
                        i[r] && (n[r] = i[r],
                        t.setStaticValue(r, 0))
                    }
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return n0;
                    let n = {
                        visibility: ""
                    }
                      , r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = tE(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = r ? r(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tE(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !ns(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = nK(this.projectionDeltaWithTransform, this.treeScale, o),
                    r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    D) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i} = D[t]
                          , r = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = r
                        } else
                            n[t] = r
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? tE(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t=>{
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(n7),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function n3(t) {
            t.updateLayout()
        }
        function n6(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , s = i.source !== t.layout.source;
                "size" === r ? ne(t=>{
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                      , r = iK(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : rm(r, i.layoutBox, e) && ne(n=>{
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                      , o = iK(e[n]);
                    r.max = r.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = i8();
                iQ(o, e, i.layoutBox);
                let a = i8();
                s ? iQ(a, t.applyTransform(n, !0), i.measuredBox) : iQ(a, e, i.layoutBox);
                let l = !nY(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = nt();
                            i5(o, i.layoutBox, r.layoutBox);
                            let a = nt();
                            i5(a, e, s.layoutBox),
                            nX(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function n4(t) {
            n5.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function n9(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function n8(t) {
            t.clearSnapshot()
        }
        function n7(t) {
            t.clearMeasurements()
        }
        function rt(t) {
            t.isLayoutDirty = !1
        }
        function re(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function ri(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function rn(t) {
            t.resolveTargetDelta()
        }
        function rr(t) {
            t.calcProjection()
        }
        function rs(t) {
            t.resetRotation()
        }
        function ro(t) {
            t.removeLeadSnapshot()
        }
        function ra(t, e, i) {
            t.translate = eE(e.translate, 0, i),
            t.scale = eE(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function rl(t, e, i, n) {
            t.min = eE(e.min, i.min, n),
            t.max = eE(e.max, i.max, n)
        }
        function ru(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let rh = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , rc = t=>"undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t)
          , rd = rc("applewebkit/") && !rc("chrome/") ? Math.round : tq.Z;
        function rp(t) {
            t.min = rd(t.min),
            t.max = rd(t.max)
        }
        function rm(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !i_(nG(e), nG(i), .2)
        }
        let rf = n2({
            attachResizeListener: (t,e)=>tR(t, "resize", e),
            measureScroll: ()=>({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: ()=>!0
        })
          , rg = {
            current: void 0
        }
          , rv = n2({
            measureScroll: t=>({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: ()=>{
                if (!rg.current) {
                    let t = new rf({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    rg.current = t
                }
                return rg.current
            }
            ,
            resetTransform: (t,e)=>{
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t=>"fixed" === window.getComputedStyle(t).position
        })
          , ry = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function rx(t, e, i=1) {
            (0,
            t4.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let[n,r] = function(t) {
                let e = ry.exec(t);
                if (!e)
                    return [, ];
                let[,i,n] = e;
                return [i, n]
            }(t);
            if (!n)
                return;
            let s = window.getComputedStyle(e).getPropertyValue(n);
            if (s) {
                let t = s.trim();
                return iw(t) ? parseFloat(t) : t
            }
            return W(r) ? rx(r, e, i + 1) : r
        }
        let rP = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , rb = t=>rP.has(t)
          , rw = t=>Object.keys(t).some(rb)
          , rT = t=>t === $ || t === Q
          , rA = (t,e)=>parseFloat(t.split(", ")[e])
          , rS = (t,e)=>(i,{transform: n})=>{
            if ("none" === n || !n)
                return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r)
                return rA(r[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/);
                return e ? rA(e[1], t) : 0
            }
        }
          , rV = new Set(["x", "y", "z"])
          , rE = k.filter(t=>!rV.has(t))
          , rC = {
            width: ({x: t},{paddingLeft: e="0", paddingRight: i="0"})=>t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t},{paddingTop: e="0", paddingBottom: i="0"})=>t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t,{top: e})=>parseFloat(e),
            left: (t,{left: e})=>parseFloat(e),
            bottom: ({y: t},{top: e})=>parseFloat(e) + (t.max - t.min),
            right: ({x: t},{left: e})=>parseFloat(e) + (t.max - t.min),
            x: rS(4, 13),
            y: rS(5, 14)
        };
        rC.translateX = rC.x,
        rC.translateY = rC.y;
        let rM = (t,e,i)=>{
            let n = e.measureViewportBox()
              , r = getComputedStyle(e.current)
              , {display: s} = r
              , o = {};
            "none" === s && e.setStaticValue("display", t.display || "block"),
            i.forEach(t=>{
                o[t] = rC[t](n, r)
            }
            ),
            e.render();
            let a = e.measureViewportBox();
            return i.forEach(i=>{
                let n = e.getValue(i);
                n && n.jump(o[i]),
                t[i] = rC[i](a, r)
            }
            ),
            t
        }
          , rD = (t,e,i={},n={})=>{
            e = {
                ...e
            },
            n = {
                ...n
            };
            let r = Object.keys(e).filter(rb)
              , s = []
              , o = !1
              , a = [];
            if (r.forEach(r=>{
                let l;
                let u = t.getValue(r);
                if (!t.hasValue(r))
                    return;
                let h = i[r]
                  , c = iR(h)
                  , d = e[r];
                if (tA(d)) {
                    let t = d.length
                      , e = null === d[0] ? 1 : 0;
                    c = iR(h = d[e]);
                    for (let i = e; i < t && null !== d[i]; i++)
                        l ? (0,
                        t4.k)(iR(d[i]) === l, "All keyframes must be of the same type") : (l = iR(d[i]),
                        (0,
                        t4.k)(l === c || rT(c) && rT(l), "Keyframes must be of the same dimension as the current value"))
                } else
                    l = iR(d);
                if (c !== l) {
                    if (rT(c) && rT(l)) {
                        let t = u.get();
                        "string" == typeof t && u.set(parseFloat(t)),
                        "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === Q && (e[r] = d.map(parseFloat))
                    } else
                        (null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (o || (s = function(t) {
                            let e = [];
                            return rE.forEach(i=>{
                                let n = t.getValue(i);
                                void 0 !== n && (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0))
                            }
                            ),
                            e.length && t.render(),
                            e
                        }(t),
                        o = !0),
                        a.push(r),
                        n[r] = void 0 !== n[r] ? n[r] : e[r],
                        u.jump(d))
                }
            }
            ),
            !a.length)
                return {
                    target: e,
                    transitionEnd: n
                };
            {
                let i = a.indexOf("height") >= 0 ? window.pageYOffset : null
                  , r = rM(e, t, a);
                return s.length && s.forEach(([e,i])=>{
                    t.getValue(e).set(i)
                }
                ),
                t.render(),
                A.j && null !== i && window.scrollTo({
                    top: i
                }),
                {
                    target: r,
                    transitionEnd: n
                }
            }
        }
          , rk = (t,e,i,n)=>{
            var r, s;
            let o = function(t, {...e}, i) {
                let n = t.current;
                if (!(n instanceof Element))
                    return {
                        target: e,
                        transitionEnd: i
                    };
                for (let r in i && (i = {
                    ...i
                }),
                t.values.forEach(t=>{
                    let e = t.get();
                    if (!W(e))
                        return;
                    let i = rx(e, n);
                    i && t.set(i)
                }
                ),
                e) {
                    let t = e[r];
                    if (!W(t))
                        continue;
                    let s = rx(t, n);
                    s && (e[r] = s,
                    i || (i = {}),
                    void 0 === i[r] && (i[r] = t))
                }
                return {
                    target: e,
                    transitionEnd: i
                }
            }(t, e, n);
            return e = o.target,
            n = o.transitionEnd,
            r = e,
            s = n,
            rw(r) ? rD(t, r, i, s) : {
                target: r,
                transitionEnd: s
            }
        }
          , rR = {
            current: null
        }
          , rL = {
            current: !1
        }
          , rj = new WeakMap
          , rF = Object.keys(T)
          , rB = rF.length
          , rO = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , rU = y.length;
        class rW {
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, visualState: r}, s={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
                this.render = ()=>{
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = ()=>tM.Wi.render(this.render, !1, !0);
                let {latestValues: o, renderState: a} = r;
                this.latestValues = o,
                this.baseTarget = {
                    ...o
                },
                this.initialValues = e.initial ? {
                    ...o
                } : {},
                this.renderState = a,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = s,
                this.isControllingVariants = x(e),
                this.isVariantNode = P(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: l, ...u} = this.scrapeMotionValuesFromProps(e, {});
                for (let t in u) {
                    let e = u[t];
                    void 0 !== o[t] && j(e) && (e.set(o[t], !1),
                    ib(l) && l.add(t))
                }
            }
            scrapeMotionValuesFromProps(t, e) {
                return {}
            }
            mount(t) {
                this.current = t,
                rj.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach((t,e)=>this.bindToMotionValue(e, t)),
                rL.current || function() {
                    if (rL.current = !0,
                    A.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = ()=>rR.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            rR.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rR.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in rj.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                tM.Pn)(this.notifyUpdate),
                (0,
                tM.Pn)(this.render),
                this.valueSubscriptions.forEach(t=>t()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features)
                    this.features[t].unmount();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i = R.has(t)
                  , n = e.on("change", e=>{
                    this.latestValues[t] = e,
                    this.props.onUpdate && tM.Wi.update(this.notifyUpdate, !1, !0),
                    i && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , r = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, ()=>{
                    n(),
                    r()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures({children: t, ...e}, i, n, r) {
                let s, o;
                for (let t = 0; t < rB; t++) {
                    let i = rF[t]
                      , {isEnabled: n, Feature: r, ProjectionNode: a, MeasureLayout: l} = T[i];
                    a && (s = a),
                    n(e) && (!this.features[i] && r && (this.features[i] = new r(this)),
                    l && (o = l))
                }
                if (("html" === this.type || "svg" === this.type) && !this.projection && s) {
                    this.projection = new s(this.latestValues,this.parent && this.parent.projection);
                    let {layoutId: t, layout: i, drag: n, dragConstraints: o, layoutScroll: a, layoutRoot: l} = e;
                    this.projection.setOptions({
                        layoutId: t,
                        layout: i,
                        alwaysMeasureLayout: !!n || o && m(o),
                        visualElement: this,
                        scheduleRender: ()=>this.scheduleRender(),
                        animationType: "string" == typeof i ? i : "both",
                        initialPromotionConfig: r,
                        layoutScroll: a,
                        layoutRoot: l
                    })
                }
                return o
            }
            updateFeatures() {
                for (let t in this.features) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(),
                    e.isMounted = !0)
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : nt()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            makeTargetAnimatable(t, e=!0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < rO.length; e++) {
                    let i = rO[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    let {willChange: n} = e;
                    for (let r in e) {
                        let s = e[r]
                          , o = i[r];
                        if (j(s))
                            t.addValue(r, s),
                            ib(n) && n.add(r);
                        else if (j(o))
                            t.addValue(r, iM(s, {
                                owner: t
                            })),
                            ib(n) && n.remove(r);
                        else if (o !== s) {
                            if (t.hasValue(r)) {
                                let e = t.getValue(r);
                                e.hasAnimated || e.set(s)
                            } else {
                                let e = t.getStaticValue(r);
                                t.addValue(r, iM(void 0 !== e ? e : s, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(t=!1) {
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let e = {};
                for (let t = 0; t < rU; t++) {
                    let i = y[t]
                      , n = this.props[i];
                    (f(n) || !1 === n) && (e[i] = n)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    ()=>e.variantChildren.delete(t)
            }
            addValue(t, e) {
                e !== this.values.get(t) && (this.removeValue(t),
                this.bindToMotionValue(t, e)),
                this.values.set(t, e),
                this.latestValues[t] = e.get()
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = iM(e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t) {
                var e;
                return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let {initial: i} = this.props
                  , n = "string" == typeof i || "object" == typeof i ? null === (e = tw(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                if (i && void 0 !== n)
                    return n;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || j(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new iS),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class rI extends rW {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...i}, {transformValues: n}, r) {
                let s = function(t, e, i) {
                    let n = {};
                    for (let r in t) {
                        let t = function(t, e) {
                            if (e)
                                return (e[t] || e.default || e).from
                        }(r, e);
                        if (void 0 !== t)
                            n[r] = t;
                        else {
                            let t = i.getValue(r);
                            t && (n[r] = t.get())
                        }
                    }
                    return n
                }(i, t || {}, this);
                if (n && (e && (e = n(e)),
                i && (i = n(i)),
                s && (s = n(s))),
                r) {
                    !function(t, e, i) {
                        var n, r;
                        let s = Object.keys(e).filter(e=>!t.hasValue(e))
                          , o = s.length;
                        if (o)
                            for (let a = 0; a < o; a++) {
                                let o = s[a]
                                  , l = e[o]
                                  , u = null;
                                Array.isArray(l) && (u = l[0]),
                                null === u && (u = null !== (r = null !== (n = i[o]) && void 0 !== n ? n : t.readValue(o)) && void 0 !== r ? r : e[o]),
                                null != u && ("string" == typeof u && (iw(u) || iv(u)) ? u = parseFloat(u) : !ij(u) && e$.test(l) && (u = ig(o, l)),
                                t.addValue(o, iM(u, {
                                    owner: t
                                })),
                                void 0 === i[o] && (i[o] = u),
                                null !== u && t.setBaseTarget(o, u))
                            }
                    }(this, i, s);
                    let t = rk(this, i, s, e);
                    e = t.transitionEnd,
                    i = t.target
                }
                return {
                    transition: t,
                    transitionEnd: e,
                    ...i
                }
            }
        }
        class rN extends rI {
            constructor() {
                super(...arguments),
                this.type = "html"
            }
            readValueFromInstance(t, e) {
                if (R.has(e)) {
                    let t = im(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = (U(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return ng(t, e)
            }
            build(t, e, i, n) {
                ts(t, e, i, n.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e) {
                return tP(t, e)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                j(t) && (this.childSubscription = t.on("change", t=>{
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
            renderInstance(t, e, i, n) {
                tv(t, e, i, n)
            }
        }
        class r$ extends rI {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (R.has(e)) {
                    let t = im(e);
                    return t && t.default || 0
                }
                return e = ty.has(e) ? e : d(e),
                t.getAttribute(e)
            }
            measureInstanceViewportBox() {
                return nt()
            }
            scrapeMotionValuesFromProps(t, e) {
                return tb(t, e)
            }
            build(t, e, i, n) {
                tm(t, e, i, this.isSVGTag, n.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                tx(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = tg(t.tagName),
                super.mount(t)
            }
        }
        let rH = (t,e)=>M(t) ? new r$(e,{
            enableHardwareAcceleration: !1
        }) : new rN(e,{
            enableHardwareAcceleration: !0
        })
          , rZ = {
            animation: {
                Feature: iN
            },
            exit: {
                Feature: iH
            },
            inView: {
                Feature: t2
            },
            tap: {
                Feature: t_
            },
            focus: {
                Feature: tX
            },
            hover: {
                Feature: tY
            },
            pan: {
                Feature: nT
            },
            drag: {
                Feature: nb,
                ProjectionNode: rv,
                MeasureLayout: nC
            },
            layout: {
                ProjectionNode: rv,
                MeasureLayout: nC
            }
        }
          , rz = function(t) {
            function e(e, i={}) {
                return function({preloadedFeatures: t, createVisualElement: e, useRender: i, useVisualState: n, Component: r}) {
                    t && function(t) {
                        for (let e in t)
                            T[e] = {
                                ...T[e],
                                ...t[e]
                            }
                    }(t);
                    let s = (0,
                    o.forwardRef)(function(s, d) {
                        var g;
                        let v;
                        let y = {
                            ...(0,
                            o.useContext)(a),
                            ...s,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                o.useContext)(S.p).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(s)
                        }
                          , {isStatic: P} = y
                          , w = function(t) {
                            let {initial: e, animate: i} = function(t, e) {
                                if (x(t)) {
                                    let {initial: e, animate: i} = t;
                                    return {
                                        initial: !1 === e || f(e) ? e : void 0,
                                        animate: f(i) ? i : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            o.useContext)(l));
                            return (0,
                            o.useMemo)(()=>({
                                initial: e,
                                animate: i
                            }), [b(e), b(i)])
                        }(s)
                          , T = n(s, P);
                        if (!P && A.j) {
                            w.visualElement = function(t, e, i, n) {
                                let {visualElement: r} = (0,
                                o.useContext)(l)
                                  , s = (0,
                                o.useContext)(c)
                                  , d = (0,
                                o.useContext)(u.O)
                                  , m = (0,
                                o.useContext)(a).reducedMotion
                                  , f = (0,
                                o.useRef)();
                                n = n || s.renderer,
                                !f.current && n && (f.current = n(t, {
                                    visualState: e,
                                    parent: r,
                                    props: i,
                                    presenceContext: d,
                                    blockInitialAnimation: !!d && !1 === d.initial,
                                    reducedMotionConfig: m
                                }));
                                let g = f.current;
                                (0,
                                o.useInsertionEffect)(()=>{
                                    g && g.update(i, d)
                                }
                                );
                                let v = (0,
                                o.useRef)(!!(i[p] && !window.HandoffComplete));
                                return (0,
                                h.L)(()=>{
                                    g && (g.render(),
                                    v.current && g.animationState && g.animationState.animateChanges())
                                }
                                ),
                                (0,
                                o.useEffect)(()=>{
                                    g && (g.updateFeatures(),
                                    !v.current && g.animationState && g.animationState.animateChanges(),
                                    v.current && (v.current = !1,
                                    window.HandoffComplete = !0))
                                }
                                ),
                                g
                            }(r, T, y, e);
                            let i = (0,
                            o.useContext)(V)
                              , n = (0,
                            o.useContext)(c).strict;
                            w.visualElement && (v = w.visualElement.loadFeatures(y, n, t, i))
                        }
                        return o.createElement(l.Provider, {
                            value: w
                        }, v && w.visualElement ? o.createElement(v, {
                            visualElement: w.visualElement,
                            ...y
                        }) : null, i(r, s, (g = w.visualElement,
                        (0,
                        o.useCallback)(t=>{
                            t && T.mount && T.mount(t),
                            g && (t ? g.mount(t) : g.unmount()),
                            d && ("function" == typeof d ? d(t) : m(d) && (d.current = t))
                        }
                        , [g])), T, P, w.visualElement))
                    });
                    return s[E] = r,
                    s
                }(t(e, i))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let i = new Map;
            return new Proxy(e,{
                get: (t,n)=>(i.has(n) || i.set(n, e(n)),
                i.get(n))
            })
        }((t,e)=>(function(t, {forwardMotionProps: e=!1}, i, n) {
            return {
                ...M(t) ? tD : tk,
                preloadedFeatures: i,
                useRender: function(t=!1) {
                    return (e,i,n,{latestValues: r},s)=>{
                        let a = (M(e) ? function(t, e, i, n) {
                            let r = (0,
                            o.useMemo)(()=>{
                                let i = tf();
                                return tm(i, e, {
                                    enableHardwareAcceleration: !1
                                }, tg(n), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                ta(e, t.style, t),
                                r.style = {
                                    ...e,
                                    ...r.style
                                }
                            }
                            return r
                        }
                        : function(t, e, i) {
                            let n = {}
                              , r = function(t, e, i) {
                                let n = t.style || {}
                                  , r = {};
                                return ta(r, n, t),
                                Object.assign(r, function({transformTemplate: t}, e, i) {
                                    return (0,
                                    o.useMemo)(()=>{
                                        let n = to();
                                        return ts(n, e, {
                                            enableHardwareAcceleration: !i
                                        }, t),
                                        Object.assign({}, n.vars, n.style)
                                    }
                                    , [e])
                                }(t, e, i)),
                                t.transformValues ? t.transformValues(r) : r
                            }(t, e, i);
                            return t.drag && !1 !== t.dragListener && (n.draggable = !1,
                            r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
                            r.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
                            n.style = r,
                            n
                        }
                        )(i, r, s, e)
                          , l = {
                            ...function(t, e, i) {
                                let n = {};
                                for (let r in t)
                                    ("values" !== r || "object" != typeof t.values) && (th(r) || !0 === i && tu(r) || !e && !tu(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                return n
                            }(i, "string" == typeof e, t),
                            ...a,
                            ref: n
                        }
                          , {children: u} = i
                          , h = (0,
                        o.useMemo)(()=>j(u) ? u.get() : u, [u]);
                        return (0,
                        o.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: n,
                Component: t
            }
        }
        )(t, e, rZ, rH))
    },
    5487: function(t, e, i) {
        i.d(e, {
            K: function() {
                return r
            },
            k: function() {
                return s
            }
        });
        var n = i(1662);
        let r = n.Z
          , s = n.Z
    },
    1741: function(t, e, i) {
        i.d(e, {
            j: function() {
                return n
            }
        });
        let n = "undefined" != typeof document
    },
    1662: function(t, e, i) {
        i.d(e, {
            Z: function() {
                return n
            }
        });
        let n = t=>t
    },
    6681: function(t, e, i) {
        i.d(e, {
            h: function() {
                return r
            }
        });
        var n = i(7294);
        function r(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    8868: function(t, e, i) {
        i.d(e, {
            L: function() {
                return r
            }
        });
        var n = i(7294);
        let r = i(1741).j ? n.useLayoutEffect : n.useEffect
    }
}]);
