! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n)
                } catch (i) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = J,
            n = $e[e];
        return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Ie.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)
            if (t = Ge[i] + n, t in e) return t;
        return r
    }

    function N(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = _e(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function() {
            Qe = void 0
        }), Qe = Z.now()
    }

    function A(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
            p = {},
            d = e.style,
            h = e.nodeType && Ce(e),
            g = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Ke.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0,
            s = tt.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Qe || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qe || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)
            if (r = tt[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function(t, i) {
            n || kt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function B(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var I = [],
        _ = I.slice,
        z = I.concat,
        X = I.push,
        U = I.indexOf,
        V = {},
        Y = V.toString,
        G = V.hasOwnProperty,
        Q = {},
        J = e.document,
        K = "2.1.1",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: I.sort,
        splice: I.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (a)
                for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a)
                for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (O && !r) {
                if (i = ye.exec(e))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [B, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    v = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : m(v, p, e, a, u),
                    x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? te.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : Z.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                return e === t
            }, s, !0), l = d(function(e) {
                return te.call(t, e) > -1
            }, s, !0), c = [
                function(e, n, r) {
                    return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }
            ]; i > a; a++)
                if (n = T.relative[e[a].type]) c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = j,
                        x = r || o && T.find.TAG("*", l),
                        b = B += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0; p = e[f++];)
                                if (p(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, v, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                            v = m(v)
                        }
                        Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = b, j = y), g
                };
            return i ? r(s) : s
        }
        var b, w, T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date,
            $ = e.document,
            B = 0,
            I = 0,
            _ = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = "undefined",
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            K = Q.push,
            Z = Q.push,
            ee = Q.slice,
            te = Q.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            pe = new RegExp(ae),
            de = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            Te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = ee.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : $,
                r = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return H.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
            }, P = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = ve.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), R = t || ve.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, n) : q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [B, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
                            else
                                for (;
                                    (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(ue, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in T.filter)!(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = Z.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ce.prototype = Z.fn, ue = Z(J);
    var fe = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var de = /\S+/g,
        he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function(t, n) {
                                var r = Z.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = _.call(arguments),
                s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : Z.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, Z.ready.promise();
    var me = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(Z(e), n)
        })), t))
            for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        be = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                s = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = ["Top", "Right", "Bottom", "Left"],
        Ce = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Ne = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
        Se = /^(?:mouse|pointer|contextmenu)|click/,
        je = /^(?:focusinfocus|focusoutblur)$/,
        De = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                    return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(de) || [""], l = t.length; l--;) a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--;)
                    if (a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J],
                d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, je.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [],
                a = _.call(arguments),
                u = (ve.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Le = /<([\w:]+)/,
        qe = /<|&#?\w+;/,
        He = /<(?:script|style|link)/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^$|\/(?:java|ecma)script/i,
        Pe = /^true\/(.*)/,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (qe.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = e[0],
                g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Me, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, $e = {},
        Be = /^margin/,
        Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        _e = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }
        }))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = new RegExp("^(" + we + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + we + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && _e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Be.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = j, j.prototype = {
        constructor: j,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = j.prototype.init, Z.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [q],
        nt = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Ze.exec(t),
                        o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                        s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                        a = 1,
                        u = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], i = i || [], s = +r || 1;
                        do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                    }
                    return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    Z.Animation = Z.extend(O, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    s = function() {
                        var t = O(this, Z.extend({}, e), o);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        s = ve.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Qe = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Je), Je = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
        }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now(),
        ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ft, pt, dt = /#.*$/,
        ht = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vt = /^(?:GET|HEAD)$/,
        yt = /^\/\//,
        xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bt = {},
        wt = {},
        Tt = "*/".concat("*");
    try {
        pt = location.href
    } catch (Ct) {
        pt = J.createElement("a"), pt.href = "", pt = pt.href
    }
    ft = xt.exec(pt.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt,
            type: "GET",
            isLocal: mt.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(bt),
        ajaxTransport: F(wt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                h = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(dt, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
            l = f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = ht.test(i) ? i.replace(ht, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) w[c](f[c]);
            if (r = P(wt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Nt = /%20/g,
        kt = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(Nt, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dt = 0,
        At = {},
        Lt = {
            0: 200,
            1223: 204
        },
        qt = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function() {
        for (var e in At) At[e]()
    }), Q.cors = !!qt && "withCredentials" in qt, Q.ajax = qt = !!qt, Z.ajaxTransport(function(e) {
        var t;
        return Q.cors || qt && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++Dt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete At[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Lt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = At[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = se.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Ft = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Pt = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"),
                f = Z(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Pt
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return me(this, function(t, i, o) {
                var s = B(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Mt = e.jQuery,
        Rt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Mt), Z
    }, typeof t === ke && (e.jQuery = e.$ = Z), Z
});

function easeOutBouncefunc(t) {
    var e = 0,
        i = 1,
        n = 1;
    return (t /= n) < 1 / 2.75 ? result = i * (7.5625 * t * t) + e : t < 2 / 2.75 ? result = i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? result = i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : result = i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e, result
}

function integerize(t, e) {
    return Math.round(t / e * litetween_precision)
}

function easeFunc(t, e, i, n, r, s, a) {
    var o = 0;
    switch (t) {
        case 0:
            o = n * e / r + i;
            break;
        case 1:
            o = n * (e /= r) * e + i;
            break;
        case 2:
            o = -n * (e /= r) * (e - 2) + i;
            break;
        case 3:
            o = (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i;
            break;
        case 4:
            o = n * (e /= r) * e * e + i;
            break;
        case 5:
            o = n * ((e = e / r - 1) * e * e + 1) + i;
            break;
        case 6:
            o = (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i;
            break;
        case 7:
            o = n * (e /= r) * e * e * e + i;
            break;
        case 8:
            o = -n * ((e = e / r - 1) * e * e * e - 1) + i;
            break;
        case 9:
            o = (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i;
            break;
        case 10:
            o = n * (e /= r) * e * e * e * e + i;
            break;
        case 11:
            o = n * ((e = e / r - 1) * e * e * e * e + 1) + i;
            break;
        case 12:
            o = (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i;
            break;
        case 13:
            o = a.optimized ? easeInCircle[integerize(e, r)] : -(Math.sqrt(1 - e * e) - 1);
            break;
        case 14:
            o = a.optimized ? easeOutCircle[integerize(e, r)] : Math.sqrt(1 - (e - 1) * (e - 1));
            break;
        case 15:
            o = a.optimized ? easeInOutCircle[integerize(e, r)] : (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i;
            break;
        case 16:
            if (a.optimized) o = easeInBack[integerize(e, r)];
            else {
                var h = a.s;
                o = n * (e /= r) * e * ((h + 1) * e - h) + i
            }
            break;
        case 17:
            if (a.optimized) o = easeOutBack[integerize(e, r)];
            else {
                var h = a.s;
                o = n * ((e = e / r - 1) * e * ((h + 1) * e + h) + 1) + i
            }
            break;
        case 18:
            if (a.optimized) o = easeInOutBack[integerize(e, r)];
            else {
                var h = a.s;
                o = (e /= r / 2) < 1 ? n / 2 * (e * e * (((h *= 1.525) + 1) * e - h)) + i : n / 2 * ((e -= 2) * e * (((h *= 1.525) + 1) * e + h) + 2) + i
            }
            break;
        case 19:
            if (a.optimized) o = easeInElasticArray[integerize(e, r)];
            else {
                var c = a.a,
                    l = a.p,
                    h = 0;
                if (0 == e && (o = i), 1 == (e /= r) && (o = i + n), 0 == l && (l = .3 * r), 0 == c || c < Math.abs(n)) c = n, h = l / 4;
                else var h = l / (2 * Math.PI) * Math.asin(n / c);
                o = -(c * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - h) * (2 * Math.PI) / l)) + i
            }
            break;
        case 20:
            if (a.optimized) o = easeOutElasticArray[integerize(e, r)];
            else {
                var c = a.a,
                    l = a.p,
                    h = 0;
                if (0 == e && (o = i), 1 == (e /= r) && (o = i + n), 0 == l && (l = .3 * r), 0 == c || c < Math.abs(n)) {
                    c = n;
                    var h = l / 4
                } else var h = l / (2 * Math.PI) * Math.asin(n / c);
                o = c * Math.pow(2, -10 * e) * Math.sin((e * r - h) * (2 * Math.PI) / l) + n + i
            }
            break;
        case 21:
            if (a.optimized) o = easeInOutElasticArray[integerize(e, r)];
            else {
                var c = a.a,
                    l = a.p,
                    h = 0;
                if (0 == e && (o = i), 2 == (e /= r / 2) && (o = i + n), 0 == l && (l = r * (.3 * 1.5)), 0 == c || c < Math.abs(n)) {
                    c = n;
                    var h = l / 4
                } else var h = l / (2 * Math.PI) * Math.asin(n / c);
                o = e < 1 ? -.5 * (c * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - h) * (2 * Math.PI) / l)) + i : c * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - h) * (2 * Math.PI) / l) * .5 + n + i
            }
            break;
        case 22:
            o = a.optimized ? n - easeOutBounceArray[integerize(r - e, r)] + i : n - easeOutBouncefunc(r - e / r) + i;
            break;
        case 23:
            o = a.optimized ? easeOutBounceArray[integerize(e, r)] : easeOutBouncefunc(e / r);
            break;
        case 24:
            o = a.optimized ? e < r / 2 ? .5 * (n - easeOutBounceArray[integerize(r - 2 * e, r)] + i) + i : .5 * easeOutBounceArray[integerize(2 * e - r, r)] + .5 * n + i : e < r / 2 ? .5 * (n - easeOutBouncefunc(r - 2 * e) + i) + i : .5 * easeOutBouncefunc((2 * e - r) / r) + .5 * n + i;
            break;
        case 25:
            var u = e / r / 2;
            o = 2 * (u * u * (3 - 2 * u));
            break;
        case 26:
            var u = (e / r + 1) / 2;
            o = 2 * (u * u * (3 - 2 * u)) - 1;
            break;
        case 27:
            var u = e / r;
            o = u * u * (3 - 2 * u)
    }
    return s ? n - i - o : o
}

function trim(t) {
    return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
var cr = {};
cr.plugins_ = {}, cr.behaviors = {}, "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(t) {
        return t.__proto__
    } : Object.getPrototypeOf = function(t) {
        return t.constructor.prototype
    }),
    function() {
        function t(t, e) {
            this.x = t, this.y = e, cr.seal(this)
        }

        function e(t, e, i, n) {
            this.set(t, e, i, n), cr.seal(this)
        }

        function i() {
            this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
        }

        function n(t, e, i, n) {
            t < e ? i < n ? (y = t < i ? t : i, _ = e > n ? e : n) : (y = t < n ? t : n, _ = e > i ? e : i) : i < n ? (y = e < i ? e : i, _ = t > n ? t : n) : (y = e < n ? e : n, _ = t > i ? t : i)
        }

        function r() {
            this.s = null, this.items = null, this.item_count = 0, T && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
        }

        function s(t) {
            A[O++] = t
        }

        function a() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
        }

        function o(t) {
            this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(t), cr.seal(this)
        }

        function h(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function c(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function l(t, e, i) {
            var n;
            return h.prototype.totalCellCount++, C.length ? (n = C.pop(), n.grid = t, n.x = e, n.y = i, n) : new cr.GridCell(t, e, i)
        }

        function u(t) {
            h.prototype.totalCellCount--, t.objects.clear(), C.length < 1e3 && C.push(t)
        }

        function p(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = new cr.ObjectSet
        }

        function d(t, e, i) {
            var n;
            return c.prototype.totalCellCount++, E.length ? (n = E.pop(), n.grid = t, n.x = e, n.y = i, n) : new cr.RenderCell(t, e, i)
        }

        function f(t) {
            c.prototype.totalCellCount--, t.reset(), E.length < 1e3 && E.push(t)
        }

        function g(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = [], this.is_sorted = !0, this.pending_removal = new cr.ObjectSet, this.any_pending_removal = !1
        }

        function m(t, e) {
            return t.zindex - e.zindex
        }
        cr.logexport = function(t) {
            window.console && window.console.log && window.console.log(t)
        }, cr.logerror = function(t) {
            window.console && window.console.error && window.console.error(t)
        }, cr.seal = function(t) {
            return t
        }, cr.freeze = function(t) {
            return t
        }, cr.is_undefined = function(t) {
            return "undefined" == typeof t
        }, cr.is_number = function(t) {
            return "number" == typeof t
        }, cr.is_string = function(t) {
            return "string" == typeof t
        }, cr.isPOT = function(t) {
            return t > 0 && 0 === (t - 1 & t)
        }, cr.nextHighestPowerOfTwo = function(t) {
            --t;
            for (var e = 1; e < 32; e <<= 1) t |= t >> e;
            return t + 1
        }, cr.abs = function(t) {
            return t < 0 ? -t : t
        }, cr.max = function(t, e) {
            return t > e ? t : e
        }, cr.min = function(t, e) {
            return t < e ? t : e
        }, cr.PI = Math.PI, cr.round = function(t) {
            return t + .5 | 0
        }, cr.floor = function(t) {
            return t >= 0 ? 0 | t : (0 | t) - 1
        }, cr.ceil = function(t) {
            var e = 0 | t;
            return e === t ? e : e + 1
        }, t.prototype.offset = function(t, e) {
            return this.x += t, this.y += e, this
        }, t.prototype.mul = function(t, e) {
            return this.x *= t, this.y *= e, this
        }, cr.vector2 = t, cr.segments_intersect = function(t, e, i, n, r, s, a, o) {
            var h, c, l, u, p, d, f, g;
            if (t < i ? (c = t, h = i) : (c = i, h = t), r < a ? (d = r, p = a) : (d = a, p = r), h < d || c > p) return !1;
            if (e < n ? (u = e, l = n) : (u = n, l = e), s < o ? (g = s, f = o) : (g = o, f = s), l < g || u > f) return !1;
            var m = r - t + a - i,
                y = s - e + o - n,
                _ = i - t,
                v = n - e,
                b = a - r,
                w = o - s,
                x = cr.abs(v * b - w * _),
                S = b * y - w * m;
            if (cr.abs(S) > x) return !1;
            var T = _ * y - v * m;
            return cr.abs(T) <= x
        }, e.prototype.set = function(t, e, i, n) {
            this.left = t, this.top = e, this.right = i, this.bottom = n
        }, e.prototype.copy = function(t) {
            this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom
        }, e.prototype.width = function() {
            return this.right - this.left
        }, e.prototype.height = function() {
            return this.bottom - this.top
        }, e.prototype.offset = function(t, e) {
            return this.left += t, this.top += e, this.right += t, this.bottom += e, this
        }, e.prototype.normalize = function() {
            var t = 0;
            this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t)
        }, e.prototype.intersects_rect = function(t) {
            return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
        }, e.prototype.intersects_rect_off = function(t, e, i) {
            return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
        }, e.prototype.contains_pt = function(t, e) {
            return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
        }, e.prototype.equals = function(t) {
            return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
        }, cr.rect = e, i.prototype.set_from_rect = function(t) {
            this.tlx = t.left, this.tly = t.top, this.trx = t.right, this.try_ = t.top, this.brx = t.right, this.bry = t.bottom, this.blx = t.left, this.bly = t.bottom
        }, i.prototype.set_from_rotated_rect = function(t, e) {
            if (0 === e) this.set_from_rect(t);
            else {
                var i = Math.sin(e),
                    n = Math.cos(e),
                    r = t.left * i,
                    s = t.top * i,
                    a = t.right * i,
                    o = t.bottom * i,
                    h = t.left * n,
                    c = t.top * n,
                    l = t.right * n,
                    u = t.bottom * n;
                this.tlx = h - s, this.tly = c + r, this.trx = l - s, this.try_ = c + a, this.brx = l - o, this.bry = u + a, this.blx = h - o, this.bly = u + r
            }
        }, i.prototype.offset = function(t, e) {
            return this.tlx += t, this.tly += e, this.trx += t, this.try_ += e, this.brx += t, this.bry += e, this.blx += t, this.bly += e, this
        };
        var y = 0,
            _ = 0;
        i.prototype.bounding_box = function(t) {
            n(this.tlx, this.trx, this.brx, this.blx), t.left = y, t.right = _, n(this.tly, this.try_, this.bry, this.bly), t.top = y, t.bottom = _
        }, i.prototype.contains_pt = function(t, e) {
            var i = this.tlx,
                n = this.tly,
                r = this.trx - i,
                s = this.try_ - n,
                a = this.brx - i,
                o = this.bry - n,
                h = t - i,
                c = e - n,
                l = r * r + s * s,
                u = r * a + s * o,
                p = r * h + s * c,
                d = a * a + o * o,
                f = a * h + o * c,
                g = 1 / (l * d - u * u),
                m = (d * p - u * f) * g,
                y = (l * f - u * p) * g;
            if (m >= 0 && y > 0 && m + y < 1) return !0;
            r = this.blx - i, s = this.bly - n;
            var l = r * r + s * s,
                u = r * a + s * o,
                p = r * h + s * c;
            return g = 1 / (l * d - u * u), m = (d * p - u * f) * g, y = (l * f - u * p) * g, m >= 0 && y > 0 && m + y < 1
        }, i.prototype.at = function(t, e) {
            if (e) switch (t) {
                case 0:
                    return this.tlx;
                case 1:
                    return this.trx;
                case 2:
                    return this.brx;
                case 3:
                    return this.blx;
                case 4:
                    return this.tlx;
                default:
                    return this.tlx
            } else switch (t) {
                case 0:
                    return this.tly;
                case 1:
                    return this.try_;
                case 2:
                    return this.bry;
                case 3:
                    return this.bly;
                case 4:
                    return this.tly;
                default:
                    return this.tly
            }
        }, i.prototype.midX = function() {
            return (this.tlx + this.trx + this.brx + this.blx) / 4
        }, i.prototype.midY = function() {
            return (this.tly + this.try_ + this.bry + this.bly) / 4
        }, i.prototype.intersects_segment = function(t, e, i, n) {
            if (this.contains_pt(t, e) || this.contains_pt(i, n)) return !0;
            var r, s, a, o, h;
            for (h = 0; h < 4; h++)
                if (r = this.at(h, !0), s = this.at(h, !1), a = this.at(h + 1, !0), o = this.at(h + 1, !1), cr.segments_intersect(t, e, i, n, r, s, a, o)) return !0;
            return !1
        }, i.prototype.intersects_quad = function(t) {
            var e = t.midX(),
                i = t.midY();
            if (this.contains_pt(e, i)) return !0;
            if (e = this.midX(), i = this.midY(), t.contains_pt(e, i)) return !0;
            var n, r, s, a, o, h, c, l, u, p;
            for (u = 0; u < 4; u++)
                for (p = 0; p < 4; p++)
                    if (n = this.at(u, !0), r = this.at(u, !1), s = this.at(u + 1, !0), a = this.at(u + 1, !1), o = t.at(p, !0), h = t.at(p, !1), c = t.at(p + 1, !0), l = t.at(p + 1, !1), cr.segments_intersect(n, r, s, a, o, h, c, l)) return !0;
            return !1
        }, cr.quad = i, cr.RGB = function(t, e, i) {
            return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
        }, cr.GetRValue = function(t) {
            return 255 & t
        }, cr.GetGValue = function(t) {
            return (65280 & t) >> 8
        }, cr.GetBValue = function(t) {
            return (16711680 & t) >> 16
        }, cr.shallowCopy = function(t, e, i) {
            var n;
            for (n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }, cr.arrayRemove = function(t, e) {
            var i, n;
            if (e = cr.floor(e), !(e < 0 || e >= t.length)) {
                for (i = e, n = t.length - 1; i < n; i++) t[i] = t[i + 1];
                cr.truncateArray(t, n)
            }
        }, cr.truncateArray = function(t, e) {
            t.length = e
        }, cr.clearArray = function(t) {
            cr.truncateArray(t, 0)
        }, cr.shallowAssignArray = function(t, e) {
            cr.clearArray(t);
            var i, n;
            for (i = 0, n = e.length; i < n; ++i) t[i] = e[i]
        }, cr.appendArray = function(t, e) {
            t.push.apply(t, e)
        }, cr.fastIndexOf = function(t, e) {
            var i, n;
            for (i = 0, n = t.length; i < n; ++i)
                if (t[i] === e) return i;
            return -1
        }, cr.arrayFindRemove = function(t, e) {
            var i = cr.fastIndexOf(t, e);
            i !== -1 && cr.arrayRemove(t, i)
        }, cr.clamp = function(t, e, i) {
            return t < e ? e : t > i ? i : t
        }, cr.to_radians = function(t) {
            return t / (180 / cr.PI)
        }, cr.to_degrees = function(t) {
            return t * (180 / cr.PI)
        }, cr.clamp_angle_degrees = function(t) {
            return t %= 360, t < 0 && (t += 360), t
        }, cr.clamp_angle = function(t) {
            return t %= 2 * cr.PI, t < 0 && (t += 2 * cr.PI), t
        }, cr.to_clamped_degrees = function(t) {
            return cr.clamp_angle_degrees(cr.to_degrees(t))
        }, cr.to_clamped_radians = function(t) {
            return cr.clamp_angle(cr.to_radians(t))
        }, cr.angleTo = function(t, e, i, n) {
            var r = i - t,
                s = n - e;
            return Math.atan2(s, r)
        }, cr.angleDiff = function(t, e) {
            if (t === e) return 0;
            var i = Math.sin(t),
                n = Math.cos(t),
                r = Math.sin(e),
                s = Math.cos(e),
                a = i * r + n * s;
            return a >= 1 ? 0 : a <= -1 ? cr.PI : Math.acos(a)
        }, cr.angleRotate = function(t, e, i) {
            var n = Math.sin(t),
                r = Math.cos(t),
                s = Math.sin(e),
                a = Math.cos(e);
            return Math.acos(n * s + r * a) > i ? r * s - n * a > 0 ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
        }, cr.angleClockwise = function(t, e) {
            var i = Math.sin(t),
                n = Math.cos(t),
                r = Math.sin(e),
                s = Math.cos(e);
            return n * r - i * s <= 0
        }, cr.rotatePtAround = function(t, e, i, n, r, s) {
            if (0 === i) return s ? t : e;
            var a = Math.sin(i),
                o = Math.cos(i);
            t -= n, e -= r;
            var h = t * a,
                c = e * a,
                l = t * o,
                u = e * o;
            return t = l - c, e = u + h, t += n, e += r, s ? t : e
        }, cr.distanceTo = function(t, e, i, n) {
            var r = i - t,
                s = n - e;
            return Math.sqrt(r * r + s * s)
        }, cr.xor = function(t, e) {
            return !t != !e
        }, cr.lerp = function(t, e, i) {
            return t + (e - t) * i
        }, cr.unlerp = function(t, e, i) {
            return t === e ? 0 : (i - t) / (e - t)
        }, cr.anglelerp = function(t, e, i) {
            var n = cr.angleDiff(t, e);
            return cr.angleClockwise(e, t) ? t + n * i : t - n * i
        }, cr.qarp = function(t, e, i, n) {
            return cr.lerp(cr.lerp(t, e, n), cr.lerp(e, i, n), n)
        }, cr.cubic = function(t, e, i, n, r) {
            return cr.lerp(cr.qarp(t, e, i, r), cr.qarp(e, i, n, r), r)
        }, cr.cosp = function(t, e, i) {
            return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
        }, cr.hasAnyOwnProperty = function(t) {
            var e;
            for (e in t)
                if (t.hasOwnProperty(e)) return !0;
            return !1
        }, cr.wipe = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && delete t[e]
        };
        var v = +new Date;
        cr.performance_now = function() {
            if ("undefined" != typeof window.performance) {
                var t = window.performance;
                if ("undefined" != typeof t.now) return t.now();
                if ("undefined" != typeof t.webkitNow) return t.webkitNow();
                if ("undefined" != typeof t.mozNow) return t.mozNow();
                if ("undefined" != typeof t.msNow) return t.msNow()
            }
            return Date.now() - v
        };
        var b = !1,
            w = !1,
            x = !1,
            S = !1;
        "undefined" != typeof window && (b = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), w = !b && /safari/i.test(navigator.userAgent), x = /(iphone|ipod|ipad)/i.test(navigator.userAgent), S = window.c2ejecta);
        var T = !w && !S && !x && "undefined" != typeof Set && "undefined" != typeof Set.prototype.forEach;
        r.prototype.contains = function(t) {
            return !this.isEmpty() && (T ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
        }, r.prototype.add = function(t) {
            if (T) this.s.has(t) || (this.s.add(t), this.cache_valid = !1);
            else {
                var e = t.toString(),
                    i = this.items;
                i ? i.hasOwnProperty(e) || (i[e] = t, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[e] = t, this.item_count = 1, this.cache_valid = !1)
            }
        }, r.prototype.remove = function(t) {
            if (!this.isEmpty())
                if (T) this.s.has(t) && (this.s["delete"](t), this.cache_valid = !1);
                else if (this.items) {
                var e = t.toString(),
                    i = this.items;
                i.hasOwnProperty(e) && (delete i[e], this.item_count--, this.cache_valid = !1)
            }
        }, r.prototype.clear = function() {
            this.isEmpty() || (T ? this.s.clear() : (this.items = null, this.item_count = 0), cr.clearArray(this.values_cache), this.cache_valid = !0)
        }, r.prototype.isEmpty = function() {
            return 0 === this.count()
        }, r.prototype.count = function() {
            return T ? this.s.size : this.item_count
        };
        var A = null,
            O = 0;
        r.prototype.update_cache = function() {
            if (!this.cache_valid) {
                if (T) cr.clearArray(this.values_cache), A = this.values_cache, O = 0, this.s.forEach(s), A = null, O = 0;
                else {
                    var t = this.values_cache;
                    cr.clearArray(t);
                    var e, i = 0,
                        n = this.items;
                    if (n)
                        for (e in n) n.hasOwnProperty(e) && (t[i++] = n[e])
                }
                this.cache_valid = !0
            }
        }, r.prototype.valuesRef = function() {
            return this.update_cache(), this.values_cache
        }, cr.ObjectSet = r;
        var k = new cr.ObjectSet;
        cr.removeArrayDuplicates = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; ++e) k.add(t[e]);
            cr.shallowAssignArray(t, k.valuesRef()), k.clear()
        }, cr.arrayRemoveAllFromObjectSet = function(t, e) {
            T ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
        }, cr.arrayRemoveAll_set = function(t, e) {
            var i, n, r, s;
            for (i = 0, n = 0, r = t.length; i < r; ++i) s = t[i], e.has(s) || (t[n++] = s);
            cr.truncateArray(t, n)
        }, cr.arrayRemoveAll_arr = function(t, e) {
            var i, n, r, s;
            for (i = 0, n = 0, r = t.length; i < r; ++i) s = t[i], cr.fastIndexOf(e, s) === -1 && (t[n++] = s);
            cr.truncateArray(t, n)
        }, a.prototype.add = function(t) {
            this.y = t - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
        }, a.prototype.reset = function() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0
        }, cr.KahanAdder = a, cr.regexp_escape = function(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, o.prototype.set_pts = function(t) {
            this.pts_array = t, this.pts_count = t.length / 2, this.pts_cache.length = t.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
        }, o.prototype.is_empty = function() {
            return !this.pts_array.length
        }, o.prototype.update_bbox = function() {
            for (var t, e, i, n = this.pts_cache, r = n[0], s = r, a = n[1], o = a, h = 1, c = this.pts_count; h < c; ++h) i = 2 * h, t = n[i], e = n[i + 1], t < r && (r = t), t > s && (s = t), e < a && (a = e), e > o && (o = e);
            this.bboxLeft = r, this.bboxRight = s, this.bboxTop = a, this.bboxBottom = o
        }, o.prototype.set_from_rect = function(t, e, i) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var n = this.pts_cache;
            n[0] = t.left - e, n[1] = t.top - i, n[2] = t.right - e, n[3] = t.top - i, n[4] = t.right - e, n[5] = t.bottom - i, n[6] = t.left - e, n[7] = t.bottom - i, this.cache_width = t.right - t.left, this.cache_height = t.bottom - t.top, this.update_bbox()
        }, o.prototype.set_from_quad = function(t, e, i, n, r) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var s = this.pts_cache;
            s[0] = t.tlx - e, s[1] = t.tly - i, s[2] = t.trx - e, s[3] = t.try_ - i, s[4] = t.brx - e, s[5] = t.bry - i, s[6] = t.blx - e, s[7] = t.bly - i, this.cache_width = n, this.cache_height = r, this.update_bbox()
        }, o.prototype.set_from_poly = function(t) {
            this.pts_count = t.pts_count, cr.shallowAssignArray(this.pts_cache, t.pts_cache), this.bboxLeft = t.bboxLeft, this.bboxTop - t.bboxTop, this.bboxRight = t.bboxRight, this.bboxBottom = t.bboxBottom
        }, o.prototype.cache_poly = function(t, e, i) {
            if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
                this.cache_width = t, this.cache_height = e, this.cache_angle = i;
                var n, r, s, a, o, h, c = 0,
                    l = 1,
                    u = this.pts_array,
                    p = this.pts_cache;
                for (0 !== i && (c = Math.sin(i), l = Math.cos(i)), n = 0, a = this.pts_count; n < a; n++) r = 2 * n, s = r + 1, o = u[r] * t, h = u[s] * e, p[r] = o * l - h * c, p[s] = h * l + o * c;
                this.update_bbox()
            }
        }, o.prototype.contains_pt = function(t, e) {
            var i = this.pts_cache;
            if (t === i[0] && e === i[1]) return !0;
            var n, r, s, a, o, h, c, l = this.pts_count,
                u = this.bboxLeft - 110,
                p = this.bboxTop - 101,
                d = this.bboxRight + 131,
                f = this.bboxBottom + 120,
                g = 0,
                m = 0;
            for (n = 0; n < l; n++) r = 2 * n, s = (n + 1) % l * 2, a = i[r], o = i[r + 1], h = i[s], c = i[s + 1], cr.segments_intersect(u, p, t, e, a, o, h, c) && g++, cr.segments_intersect(d, f, t, e, a, o, h, c) && m++;
            return g % 2 === 1 || m % 2 === 1
        }, o.prototype.intersects_poly = function(t, e, i) {
            var n = t.pts_cache,
                r = this.pts_cache;
            if (this.contains_pt(n[0] + e, n[1] + i)) return !0;
            if (t.contains_pt(r[0] - e, r[1] - i)) return !0;
            var s, a, o, h, c, l, u, p, d, f, g, m, y, _, v, b;
            for (s = 0, h = this.pts_count; s < h; s++)
                for (a = 2 * s, o = (s + 1) % h * 2, d = r[a], f = r[a + 1], g = r[o], m = r[o + 1], c = 0, p = t.pts_count; c < p; c++)
                    if (l = 2 * c, u = (c + 1) % p * 2, y = n[l] + e, _ = n[l + 1] + i, v = n[u] + e, b = n[u + 1] + i, cr.segments_intersect(d, f, g, m, y, _, v, b)) return !0;
            return !1
        }, o.prototype.intersects_segment = function(t, e, i, n, r, s) {
            var a = this.pts_cache;
            if (this.contains_pt(i - t, n - e)) return !0;
            var o, h, c, l, u, p, d, f;
            for (o = 0, h = this.pts_count; o < h; o++)
                if (c = 2 * o, l = (o + 1) % h * 2, u = a[c] + t, p = a[c + 1] + e, d = a[l] + t, f = a[l + 1] + e, cr.segments_intersect(i, n, r, s, u, p, d, f)) return !0;
            return !1
        }, o.prototype.mirror = function(t) {
            var e, i, n;
            for (e = 0, i = this.pts_count; e < i; ++e) n = 2 * e, this.pts_cache[n] = 2 * t - this.pts_cache[n]
        }, o.prototype.flip = function(t) {
            var e, i, n;
            for (e = 0, i = this.pts_count; e < i; ++e) n = 2 * e + 1, this.pts_cache[n] = 2 * t - this.pts_cache[n]
        }, o.prototype.diag = function() {
            var t, e, i, n, r;
            for (t = 0, e = this.pts_count; t < e; ++t) i = 2 * t, n = i + 1, r = this.pts_cache[i], this.pts_cache[i] = this.pts_cache[n], this.pts_cache[n] = r
        }, cr.CollisionPoly = o, h.prototype.totalCellCount = 0, h.prototype.getCell = function(t, e, i) {
            var n, r = this.cells[t];
            return r ? (n = r[e], n ? n : i ? (n = l(this, t, e), this.cells[t][e] = n, n) : null) : i ? (n = l(this, t, e), this.cells[t] = {}, this.cells[t][e] = n, n) : null
        }, h.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, h.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, h.prototype.update = function(t, e, i) {
            var n, r, s, a, o;
            if (e)
                for (n = e.left, r = e.right; n <= r; ++n)
                    for (s = e.top, a = e.bottom; s <= a; ++s) i && i.contains_pt(n, s) || (o = this.getCell(n, s, !1), o && (o.remove(t), o.isEmpty() && (u(o), this.cells[n][s] = null)));
            if (i)
                for (n = i.left, r = i.right; n <= r; ++n)
                    for (s = i.top, a = i.bottom; s <= a; ++s) e && e.contains_pt(n, s) || this.getCell(n, s, !0).insert(t)
        }, h.prototype.queryRange = function(t, e) {
            var i, n, r, s, a, o;
            for (i = this.XToCell(t.left), r = this.YToCell(t.top), n = this.XToCell(t.right), a = this.YToCell(t.bottom); i <= n; ++i)
                for (s = r; s <= a; ++s) o = this.getCell(i, s, !1), o && o.dump(e)
        }, cr.SparseGrid = h, c.prototype.totalCellCount = 0, c.prototype.getCell = function(t, e, i) {
            var n, r = this.cells[t];
            return r ? (n = r[e], n ? n : i ? (n = d(this, t, e), this.cells[t][e] = n, n) : null) : i ? (n = d(this, t, e), this.cells[t] = {}, this.cells[t][e] = n, n) : null
        }, c.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, c.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, c.prototype.update = function(t, e, i) {
            var n, r, s, a, o;
            if (e)
                for (n = e.left, r = e.right; n <= r; ++n)
                    for (s = e.top, a = e.bottom; s <= a; ++s) i && i.contains_pt(n, s) || (o = this.getCell(n, s, !1), o && (o.remove(t), o.isEmpty() && (f(o), this.cells[n][s] = null)));
            if (i)
                for (n = i.left, r = i.right; n <= r; ++n)
                    for (s = i.top, a = i.bottom; s <= a; ++s) e && e.contains_pt(n, s) || this.getCell(n, s, !0).insert(t)
        }, c.prototype.queryRange = function(t, e, i, n, r) {
            var s, a, o, h, c, l;
            for (s = this.XToCell(t), o = this.YToCell(e), a = this.XToCell(i), c = this.YToCell(n); s <= a; ++s)
                for (h = o; h <= c; ++h) l = this.getCell(s, h, !1), l && l.dump(r)
        }, c.prototype.markRangeChanged = function(t) {
            var e, i, n, r, s, a;
            for (e = t.left, n = t.top, i = t.right, s = t.bottom; e <= i; ++e)
                for (r = n; r <= s; ++r) a = this.getCell(e, r, !1), a && (a.is_sorted = !1)
        }, cr.RenderGrid = c;
        var C = [];
        p.prototype.isEmpty = function() {
            return this.objects.isEmpty()
        }, p.prototype.insert = function(t) {
            this.objects.add(t)
        }, p.prototype.remove = function(t) {
            this.objects.remove(t)
        }, p.prototype.dump = function(t) {
            cr.appendArray(t, this.objects.valuesRef())
        }, cr.GridCell = p;
        var E = [];
        g.prototype.isEmpty = function() {
            return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(), !0)
        }, g.prototype.insert = function(t) {
            if (this.pending_removal.contains(t)) return this.pending_removal.remove(t), void(this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
            if (this.objects.length) {
                var e = this.objects[this.objects.length - 1];
                e.get_zindex() > t.get_zindex() && (this.is_sorted = !1), this.objects.push(t)
            } else this.objects.push(t), this.is_sorted = !0
        }, g.prototype.remove = function(t) {
            this.pending_removal.add(t), this.any_pending_removal = !0, this.pending_removal.count() >= 30 && this.flush_pending()
        }, g.prototype.flush_pending = function() {
            if (this.any_pending_removal) {
                if (this.pending_removal.count() === this.objects.length) return void this.reset();
                cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal), this.pending_removal.clear(), this.any_pending_removal = !1
            }
        }, g.prototype.ensure_sorted = function() {
            this.is_sorted || (this.objects.sort(m), this.is_sorted = !0)
        }, g.prototype.reset = function() {
            cr.clearArray(this.objects), this.is_sorted = !0, this.pending_removal.clear(), this.any_pending_removal = !1
        }, g.prototype.dump = function(t) {
            this.flush_pending(), this.ensure_sorted(), this.objects.length && t.push(this.objects)
        }, cr.RenderCell = g;
        var P = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
        cr.effectToCompositeOp = function(t) {
            return t <= 0 || t >= 11 ? "source-over" : P[t - 1]
        }, cr.setGLBlend = function(t, e, i) {
            if (i) switch (t.srcBlend = i.ONE, t.destBlend = i.ONE_MINUS_SRC_ALPHA, e) {
                case 1:
                    t.srcBlend = i.ONE, t.destBlend = i.ONE;
                    break;
                case 2:
                    break;
                case 3:
                    t.srcBlend = i.ONE, t.destBlend = i.ZERO;
                    break;
                case 4:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ONE;
                    break;
                case 5:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 6:
                    t.srcBlend = i.ZERO, t.destBlend = i.SRC_ALPHA;
                    break;
                case 7:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 8:
                    t.srcBlend = i.ZERO, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.SRC_ALPHA
            }
        }, cr.round6dp = function(t) {
            return Math.round(1e6 * t) / 1e6
        }, cr.equals_nocase = function(t, e) {
            return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
        }, cr.isCanvasInputEvent = function(t) {
            var e = t.target;
            return !e || (e === document || e === window || (!(!document || !document.body || e !== document.body) || !!cr.equals_nocase(e.tagName, "canvas")))
        }
    }();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array,
    glMatrixArrayType = MatrixArray,
    vec3 = {},
    mat3 = {},
    mat4 = {},
    quat4 = {};
vec3.create = function(t) {
        var e = new MatrixArray(3);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2]), e
    }, vec3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, vec3.add = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] + e[0], i[1] = t[1] + e[1], i[2] = t[2] + e[2], i) : (t[0] += e[0], t[1] += e[1], t[2] += e[2], t)
    }, vec3.subtract = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2], i) : (t[0] -= e[0], t[1] -= e[1], t[2] -= e[2], t)
    }, vec3.negate = function(t, e) {
        return e || (e = t), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }, vec3.scale = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e, i) : (t[0] *= e, t[1] *= e, t[2] *= e, t)
    }, vec3.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            n = t[1],
            r = t[2],
            s = Math.sqrt(i * i + n * n + r * r);
        return s ? 1 === s ? (e[0] = i, e[1] = n, e[2] = r, e) : (s = 1 / s, e[0] = i * s, e[1] = n * s, e[2] = r * s, e) : (e[0] = 0, e[1] = 0, e[2] = 0, e)
    }, vec3.cross = function(t, e, i) {
        i || (i = t);
        var n = t[0],
            r = t[1],
            t = t[2],
            s = e[0],
            a = e[1],
            e = e[2];
        return i[0] = r * e - t * a, i[1] = t * s - n * e, i[2] = n * a - r * s, i
    }, vec3.length = function(t) {
        var e = t[0],
            i = t[1],
            t = t[2];
        return Math.sqrt(e * e + i * i + t * t)
    }, vec3.dot = function(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, vec3.direction = function(t, e, i) {
        i || (i = t);
        var n = t[0] - e[0],
            r = t[1] - e[1],
            t = t[2] - e[2],
            e = Math.sqrt(n * n + r * r + t * t);
        return e ? (e = 1 / e, i[0] = n * e, i[1] = r * e, i[2] = t * e, i) : (i[0] = 0, i[1] = 0, i[2] = 0, i)
    }, vec3.lerp = function(t, e, i, n) {
        return n || (n = t), n[0] = t[0] + i * (e[0] - t[0]), n[1] = t[1] + i * (e[1] - t[1]), n[2] = t[2] + i * (e[2] - t[2]), n
    }, vec3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
    }, mat3.create = function(t) {
        var e = new MatrixArray(9);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]), e
    }, mat3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, mat3.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, mat3.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                n = t[2],
                r = t[5];
            return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = n, t[7] = r, t
        }
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e
    }, mat3.toMat4 = function(t, e) {
        return e || (e = mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, mat3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
    }, mat4.create = function(t) {
        var e = new MatrixArray(16);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e
    }, mat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, mat4.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, mat4.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                n = t[2],
                r = t[3],
                s = t[6],
                a = t[7],
                o = t[11];
            return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = n, t[9] = s, t[11] = t[14], t[12] = r, t[13] = a, t[14] = o, t
        }
        return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
    }, mat4.determinant = function(t) {
        var e = t[0],
            i = t[1],
            n = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            h = t[7],
            c = t[8],
            l = t[9],
            u = t[10],
            p = t[11],
            d = t[12],
            f = t[13],
            g = t[14],
            t = t[15];
        return d * l * o * r - c * f * o * r - d * a * u * r + s * f * u * r + c * a * g * r - s * l * g * r - d * l * n * h + c * f * n * h + d * i * u * h - e * f * u * h - c * i * g * h + e * l * g * h + d * a * n * p - s * f * n * p - d * i * o * p + e * f * o * p + s * i * g * p - e * a * g * p - c * a * n * t + s * l * n * t + c * i * o * t - e * l * o * t - s * i * u * t + e * a * u * t
    }, mat4.inverse = function(t, e) {
        e || (e = t);
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            a = t[4],
            o = t[5],
            h = t[6],
            c = t[7],
            l = t[8],
            u = t[9],
            p = t[10],
            d = t[11],
            f = t[12],
            g = t[13],
            m = t[14],
            y = t[15],
            _ = i * o - n * a,
            v = i * h - r * a,
            b = i * c - s * a,
            w = n * h - r * o,
            x = n * c - s * o,
            S = r * c - s * h,
            T = l * g - u * f,
            A = l * m - p * f,
            O = l * y - d * f,
            k = u * m - p * g,
            C = u * y - d * g,
            E = p * y - d * m,
            P = 1 / (_ * E - v * C + b * k + w * O - x * A + S * T);
        return e[0] = (o * E - h * C + c * k) * P, e[1] = (-n * E + r * C - s * k) * P, e[2] = (g * S - m * x + y * w) * P, e[3] = (-u * S + p * x - d * w) * P, e[4] = (-a * E + h * O - c * A) * P, e[5] = (i * E - r * O + s * A) * P, e[6] = (-f * S + m * b - y * v) * P, e[7] = (l * S - p * b + d * v) * P, e[8] = (a * C - o * O + c * T) * P, e[9] = (-i * C + n * O - s * T) * P, e[10] = (f * x - g * b + y * _) * P, e[11] = (-l * x + u * b - d * _) * P, e[12] = (-a * k + o * A - h * T) * P, e[13] = (i * k - n * A + r * T) * P, e[14] = (-f * w + g * v - m * _) * P, e[15] = (l * w - u * v + p * _) * P, e
    }, mat4.toRotationMat = function(t, e) {
        return e || (e = mat4.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, mat4.toMat3 = function(t, e) {
        return e || (e = mat3.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }, mat4.toInverseMat3 = function(t, e) {
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[4],
            a = t[5],
            o = t[6],
            h = t[8],
            c = t[9],
            l = t[10],
            u = l * a - o * c,
            p = -l * s + o * h,
            d = c * s - a * h,
            f = i * u + n * p + r * d;
        return f ? (f = 1 / f, e || (e = mat3.create()), e[0] = u * f, e[1] = (-l * n + r * c) * f, e[2] = (o * n - r * a) * f, e[3] = p * f, e[4] = (l * i - r * h) * f, e[5] = (-o * i + r * s) * f, e[6] = d * f, e[7] = (-c * i + n * h) * f, e[8] = (a * i - n * s) * f, e) : null
    }, mat4.multiply = function(t, e, i) {
        i || (i = t);
        var n = t[0],
            r = t[1],
            s = t[2],
            a = t[3],
            o = t[4],
            h = t[5],
            c = t[6],
            l = t[7],
            u = t[8],
            p = t[9],
            d = t[10],
            f = t[11],
            g = t[12],
            m = t[13],
            y = t[14],
            t = t[15],
            _ = e[0],
            v = e[1],
            b = e[2],
            w = e[3],
            x = e[4],
            S = e[5],
            T = e[6],
            A = e[7],
            O = e[8],
            k = e[9],
            C = e[10],
            E = e[11],
            P = e[12],
            I = e[13],
            L = e[14],
            e = e[15];
        return i[0] = _ * n + v * o + b * u + w * g, i[1] = _ * r + v * h + b * p + w * m, i[2] = _ * s + v * c + b * d + w * y, i[3] = _ * a + v * l + b * f + w * t, i[4] = x * n + S * o + T * u + A * g, i[5] = x * r + S * h + T * p + A * m, i[6] = x * s + S * c + T * d + A * y, i[7] = x * a + S * l + T * f + A * t, i[8] = O * n + k * o + C * u + E * g, i[9] = O * r + k * h + C * p + E * m, i[10] = O * s + k * c + C * d + E * y, i[11] = O * a + k * l + C * f + E * t, i[12] = P * n + I * o + L * u + e * g, i[13] = P * r + I * h + L * p + e * m, i[14] = P * s + I * c + L * d + e * y, i[15] = P * a + I * l + L * f + e * t, i
    }, mat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var n = e[0],
            r = e[1],
            e = e[2];
        return i[0] = t[0] * n + t[4] * r + t[8] * e + t[12], i[1] = t[1] * n + t[5] * r + t[9] * e + t[13], i[2] = t[2] * n + t[6] * r + t[10] * e + t[14], i
    }, mat4.multiplyVec4 = function(t, e, i) {
        i || (i = e);
        var n = e[0],
            r = e[1],
            s = e[2],
            e = e[3];
        return i[0] = t[0] * n + t[4] * r + t[8] * s + t[12] * e, i[1] = t[1] * n + t[5] * r + t[9] * s + t[13] * e, i[2] = t[2] * n + t[6] * r + t[10] * s + t[14] * e, i[3] = t[3] * n + t[7] * r + t[11] * s + t[15] * e, i
    }, mat4.translate = function(t, e, i) {
        var n, r, s, a, o, h, c, l, u, p, d, f, g = e[0],
            m = e[1],
            e = e[2];
        return i && t !== i ? (n = t[0], r = t[1], s = t[2], a = t[3], o = t[4], h = t[5], c = t[6], l = t[7], u = t[8], p = t[9], d = t[10], f = t[11], i[0] = n, i[1] = r, i[2] = s, i[3] = a, i[4] = o, i[5] = h, i[6] = c, i[7] = l, i[8] = u, i[9] = p, i[10] = d, i[11] = f, i[12] = n * g + o * m + u * e + t[12], i[13] = r * g + h * m + p * e + t[13], i[14] = s * g + c * m + d * e + t[14], i[15] = a * g + l * m + f * e + t[15], i) : (t[12] = t[0] * g + t[4] * m + t[8] * e + t[12], t[13] = t[1] * g + t[5] * m + t[9] * e + t[13], t[14] = t[2] * g + t[6] * m + t[10] * e + t[14], t[15] = t[3] * g + t[7] * m + t[11] * e + t[15], t)
    }, mat4.scale = function(t, e, i) {
        var n = e[0],
            r = e[1],
            e = e[2];
        return i && t !== i ? (i[0] = t[0] * n, i[1] = t[1] * n, i[2] = t[2] * n, i[3] = t[3] * n, i[4] = t[4] * r, i[5] = t[5] * r, i[6] = t[6] * r, i[7] = t[7] * r, i[8] = t[8] * e, i[9] = t[9] * e, i[10] = t[10] * e, i[11] = t[11] * e, i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15], i) : (t[0] *= n, t[1] *= n, t[2] *= n, t[3] *= n, t[4] *= r, t[5] *= r, t[6] *= r, t[7] *= r, t[8] *= e, t[9] *= e, t[10] *= e, t[11] *= e, t)
    }, mat4.rotate = function(t, e, i, n) {
        var r, s, a, o, h, c, l, u, p, d, f, g, m, y, _, v, b, w, x, S, T = i[0],
            A = i[1],
            i = i[2],
            O = Math.sqrt(T * T + A * A + i * i);
        return O ? (1 !== O && (O = 1 / O, T *= O, A *= O, i *= O), r = Math.sin(e), s = Math.cos(e), a = 1 - s, e = t[0], O = t[1], o = t[2], h = t[3], c = t[4], l = t[5], u = t[6], p = t[7], d = t[8], f = t[9], g = t[10], m = t[11], y = T * T * a + s, _ = A * T * a + i * r, v = i * T * a - A * r, b = T * A * a - i * r, w = A * A * a + s, x = i * A * a + T * r, S = T * i * a + A * r, T = A * i * a - T * r, A = i * i * a + s, n ? t !== n && (n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]) : n = t, n[0] = e * y + c * _ + d * v, n[1] = O * y + l * _ + f * v, n[2] = o * y + u * _ + g * v, n[3] = h * y + p * _ + m * v, n[4] = e * b + c * w + d * x, n[5] = O * b + l * w + f * x, n[6] = o * b + u * w + g * x, n[7] = h * b + p * w + m * x, n[8] = e * S + c * T + d * A, n[9] = O * S + l * T + f * A, n[10] = o * S + u * T + g * A, n[11] = h * S + p * T + m * A, n) : null
    }, mat4.rotateX = function(t, e, i) {
        var n = Math.sin(e),
            e = Math.cos(e),
            r = t[4],
            s = t[5],
            a = t[6],
            o = t[7],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[4] = r * e + h * n, i[5] = s * e + c * n, i[6] = a * e + l * n, i[7] = o * e + u * n, i[8] = r * -n + h * e, i[9] = s * -n + c * e, i[10] = a * -n + l * e, i[11] = o * -n + u * e, i
    }, mat4.rotateY = function(t, e, i) {
        var n = Math.sin(e),
            e = Math.cos(e),
            r = t[0],
            s = t[1],
            a = t[2],
            o = t[3],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = r * e + h * -n, i[1] = s * e + c * -n, i[2] = a * e + l * -n, i[3] = o * e + u * -n, i[8] = r * n + h * e, i[9] = s * n + c * e, i[10] = a * n + l * e, i[11] = o * n + u * e, i
    }, mat4.rotateZ = function(t, e, i) {
        var n = Math.sin(e),
            e = Math.cos(e),
            r = t[0],
            s = t[1],
            a = t[2],
            o = t[3],
            h = t[4],
            c = t[5],
            l = t[6],
            u = t[7];
        return i ? t !== i && (i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = r * e + h * n, i[1] = s * e + c * n, i[2] = a * e + l * n, i[3] = o * e + u * n, i[4] = r * -n + h * e, i[5] = s * -n + c * e, i[6] = a * -n + l * e, i[7] = o * -n + u * e, i
    }, mat4.frustum = function(t, e, i, n, r, s, a) {
        a || (a = mat4.create());
        var o = e - t,
            h = n - i,
            c = s - r;
        return a[0] = 2 * r / o, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * r / h, a[6] = 0, a[7] = 0, a[8] = (e + t) / o, a[9] = (n + i) / h, a[10] = -(s + r) / c,
            a[11] = -1, a[12] = 0, a[13] = 0, a[14] = -(s * r * 2) / c, a[15] = 0, a
    }, mat4.perspective = function(t, e, i, n, r) {
        return t = i * Math.tan(t * Math.PI / 360), e *= t, mat4.frustum(-e, e, -t, t, i, n, r)
    }, mat4.ortho = function(t, e, i, n, r, s, a) {
        a || (a = mat4.create());
        var o = e - t,
            h = n - i,
            c = s - r;
        return a[0] = 2 / o, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 / h, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = -2 / c, a[11] = 0, a[12] = -(t + e) / o, a[13] = -(n + i) / h, a[14] = -(s + r) / c, a[15] = 1, a
    }, mat4.lookAt = function(t, e, i, n) {
        n || (n = mat4.create());
        var r, s, a, o, h, c, l, u, p = t[0],
            d = t[1],
            t = t[2];
        return s = i[0], a = i[1], r = i[2], i = e[1], c = e[2], p === e[0] && d === i && t === c ? mat4.identity(n) : (i = p - e[0], c = d - e[1], l = t - e[2], u = 1 / Math.sqrt(i * i + c * c + l * l), i *= u, c *= u, l *= u, e = a * l - r * c, r = r * i - s * l, s = s * c - a * i, (u = Math.sqrt(e * e + r * r + s * s)) ? (u = 1 / u, e *= u, r *= u, s *= u) : s = r = e = 0, a = c * s - l * r, o = l * e - i * s, h = i * r - c * e, (u = Math.sqrt(a * a + o * o + h * h)) ? (u = 1 / u, a *= u, o *= u, h *= u) : h = o = a = 0, n[0] = e, n[1] = a, n[2] = i, n[3] = 0, n[4] = r, n[5] = o, n[6] = c, n[7] = 0, n[8] = s, n[9] = h, n[10] = l, n[11] = 0, n[12] = -(e * p + r * d + s * t), n[13] = -(a * p + o * d + h * t), n[14] = -(i * p + c * d + l * t), n[15] = 1, n)
    }, mat4.fromRotationTranslation = function(t, e, i) {
        i || (i = mat4.create());
        var n = t[0],
            r = t[1],
            s = t[2],
            a = t[3],
            o = n + n,
            h = r + r,
            c = s + s,
            t = n * o,
            l = n * h;
        n *= c;
        var u = r * h;
        return r *= c, s *= c, o *= a, h *= a, a *= c, i[0] = 1 - (u + s), i[1] = l + a, i[2] = n - h, i[3] = 0, i[4] = l - a, i[5] = 1 - (t + s), i[6] = r + o, i[7] = 0, i[8] = n + h, i[9] = r - o, i[10] = 1 - (t + u), i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i
    }, mat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
    }, quat4.create = function(t) {
        var e = new MatrixArray(4);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3]), e
    }, quat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, quat4.calculateW = function(t, e) {
        var i = t[0],
            n = t[1],
            r = t[2];
        return e && t !== e ? (e[0] = i, e[1] = n, e[2] = r, e[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r)), e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - n * n - r * r)), t)
    }, quat4.inverse = function(t, e) {
        return e && t !== e ? (e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e) : (t[0] *= -1, t[1] *= -1, t[2] *= -1, t)
    }, quat4.length = function(t) {
        var e = t[0],
            i = t[1],
            n = t[2],
            t = t[3];
        return Math.sqrt(e * e + i * i + n * n + t * t)
    }, quat4.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            a = Math.sqrt(i * i + n * n + r * r + s * s);
        return 0 === a ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e) : (a = 1 / a, e[0] = i * a, e[1] = n * a, e[2] = r * a, e[3] = s * a, e)
    }, quat4.multiply = function(t, e, i) {
        i || (i = t);
        var n = t[0],
            r = t[1],
            s = t[2],
            t = t[3],
            a = e[0],
            o = e[1],
            h = e[2],
            e = e[3];
        return i[0] = n * e + t * a + r * h - s * o, i[1] = r * e + t * o + s * a - n * h, i[2] = s * e + t * h + n * o - r * a, i[3] = t * e - n * a - r * o - s * h, i
    }, quat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var n = e[0],
            r = e[1],
            s = e[2],
            e = t[0],
            a = t[1],
            o = t[2],
            t = t[3],
            h = t * n + a * s - o * r,
            c = t * r + o * n - e * s,
            l = t * s + e * r - a * n,
            n = -e * n - a * r - o * s;
        return i[0] = h * t + n * -e + c * -o - l * -a, i[1] = c * t + n * -a + l * -e - h * -o, i[2] = l * t + n * -o + h * -a - c * -e, i
    }, quat4.toMat3 = function(t, e) {
        e || (e = mat3.create());
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            a = i + i,
            o = n + n,
            h = r + r,
            c = i * a,
            l = i * o;
        i *= h;
        var u = n * o;
        return n *= h, r *= h, a *= s, o *= s, s *= h, e[0] = 1 - (u + r), e[1] = l + s, e[2] = i - o, e[3] = l - s, e[4] = 1 - (c + r), e[5] = n + a, e[6] = i + o, e[7] = n - a, e[8] = 1 - (c + u), e
    }, quat4.toMat4 = function(t, e) {
        e || (e = mat4.create());
        var i = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            a = i + i,
            o = n + n,
            h = r + r,
            c = i * a,
            l = i * o;
        i *= h;
        var u = n * o;
        return n *= h, r *= h, a *= s, o *= s, s *= h, e[0] = 1 - (u + r), e[1] = l + s, e[2] = i - o, e[3] = 0, e[4] = l - s, e[5] = 1 - (c + r), e[6] = n + a, e[7] = 0, e[8] = i + o, e[9] = n - a, e[10] = 1 - (c + u), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, quat4.slerp = function(t, e, i, n) {
        n || (n = t);
        var r, s, a = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        return Math.abs(a) >= 1 ? (n !== t && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3]), n) : (r = Math.acos(a), s = Math.sqrt(1 - a * a), Math.abs(s) < .001 ? (n[0] = .5 * t[0] + .5 * e[0], n[1] = .5 * t[1] + .5 * e[1], n[2] = .5 * t[2] + .5 * e[2], n[3] = .5 * t[3] + .5 * e[3], n) : (a = Math.sin((1 - i) * r) / s, i = Math.sin(i * r) / s, n[0] = t[0] * a + e[0] * i, n[1] = t[1] * a + e[1] * i, n[2] = t[2] * a + e[2] * i, n[3] = t[3] * a + e[3] * i, n))
    }, quat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
    },
    function() {
        function t(t, e, i) {
            this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.width = 0, this.height = 0, this.enableFrontToBack = !!i, this.isEarlyZPass = !1, this.isBatchInEarlyZPass = !1, this.currentZ = 0, this.zNear = 1, this.zFar = 1e3, this.zIncrement = (this.zFar - this.zNear) / 32768, this.zA = this.zFar / (this.zFar - this.zNear), this.zB = this.zFar * this.zNear / (this.zNear - this.zFar), this.kzA = 65536 * this.zA, this.kzB = 65536 * this.zB, this.cam = vec3.create([0, 0, 100]), this.look = vec3.create([0, 0, 0]), this.up = vec3.create([0, 1, 0]), this.worldScale = vec3.create([1, 1, 1]), this.enable_mipmaps = !0, this.matP = mat4.create(), this.matMV = mat4.create(), this.lastMV = mat4.create(), this.currentMV = mat4.create(), this.gl = t, this.version = 0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2") ? 2 : 1, this.initState()
        }

        function e(t, e, i) {
            this.gl = t, this.shaderProgram = e, this.name = i, this.locAPos = t.getAttribLocation(e, "aPos"), this.locATex = t.getAttribLocation(e, "aTex"), this.locMatP = t.getUniformLocation(e, "matP"), this.locMatMV = t.getUniformLocation(e, "matMV"), this.locOpacity = t.getUniformLocation(e, "opacity"), this.locColorFill = t.getUniformLocation(e, "colorFill"), this.locSamplerFront = t.getUniformLocation(e, "samplerFront"), this.locSamplerBack = t.getUniformLocation(e, "samplerBack"), this.locDestStart = t.getUniformLocation(e, "destStart"), this.locDestEnd = t.getUniformLocation(e, "destEnd"), this.locSeconds = t.getUniformLocation(e, "seconds"), this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"), this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"), this.locLayerScale = t.getUniformLocation(e, "layerScale"), this.locLayerAngle = t.getUniformLocation(e, "layerAngle"), this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"), this.locScrollPos = t.getUniformLocation(e, "scrollPos"), this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos), this.lpPixelWidth = -999, this.lpPixelHeight = -999, this.lpOpacity = 1, this.lpDestStartX = 0, this.lpDestStartY = 0, this.lpDestEndX = 1, this.lpDestEndY = 1, this.lpLayerScale = 1, this.lpLayerAngle = 0, this.lpViewOriginX = 0, this.lpViewOriginY = 0, this.lpScrollPosX = 0, this.lpScrollPosY = 0, this.lpSeconds = 0, this.lastCustomParams = [], this.lpMatMV = mat4.create(), this.locOpacity && t.uniform1f(this.locOpacity, 1), this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1), this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0), this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1), this.locDestStart && t.uniform2f(this.locDestStart, 0, 0), this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1), this.locLayerScale && t.uniform1f(this.locLayerScale, 1), this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0), this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0), this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0), this.locSeconds && t.uniform1f(this.locSeconds, 0), this.hasCurrentMatMV = !1
        }

        function i(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
        }

        function n(t, e) {
            this.type = t, this.glwrap = e, this.gl = e.gl, this.opacityParam = 0, this.startIndex = 0, this.indexCount = 0, this.texParam = null, this.mat4param = null, this.shaderParams = [], cr.seal(this)
        }
        var r = 8e3,
            s = r / 2 * 3,
            a = 8e3,
            o = 4,
            h = 0,
            c = 1,
            l = 2,
            u = 3,
            p = 4,
            d = 5,
            f = 6,
            g = 7,
            m = 8,
            y = 9,
            _ = 10,
            v = 12,
            b = 13,
            w = 14,
            x = mat4.create();
        t.prototype.initState = function() {
            var t, e, i = this.gl;
            for (this.lastOpacity = 1, this.lastTexture0 = null, this.lastTexture1 = null, this.currentOpacity = 1, i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.enable(i.BLEND), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA), i.disable(i.CULL_FACE), i.disable(i.STENCIL_TEST), i.disable(i.DITHER), this.enableFrontToBack ? (i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL)) : i.disable(i.DEPTH_TEST), this.maxTextureSize = i.getParameter(i.MAX_TEXTURE_SIZE), this.lastSrcBlend = i.ONE, this.lastDestBlend = i.ONE_MINUS_SRC_ALPHA, this.vertexData = new Float32Array(r * (this.enableFrontToBack ? 3 : 2)), this.texcoordData = new Float32Array(2 * r), this.pointData = new Float32Array(4 * a), this.pointBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.pointBuffer), i.bufferData(i.ARRAY_BUFFER, this.pointData.byteLength, i.DYNAMIC_DRAW), this.vertexBuffers = new Array(o), this.texcoordBuffers = new Array(o), t = 0; t < o; t++) this.vertexBuffers[t] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffers[t]), i.bufferData(i.ARRAY_BUFFER, this.vertexData.byteLength, i.DYNAMIC_DRAW), this.texcoordBuffers[t] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.texcoordBuffers[t]), i.bufferData(i.ARRAY_BUFFER, this.texcoordData.byteLength, i.DYNAMIC_DRAW);
            this.curBuffer = 0, this.indexBuffer = i.createBuffer(), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var n = new Uint16Array(s);
            t = 0, e = s;
            for (var h = 0; t < e;) n[t++] = h, n[t++] = h + 1, n[t++] = h + 2, n[t++] = h, n[t++] = h + 2, n[t++] = h + 3, h += 4;
            i.bufferData(i.ELEMENT_ARRAY_BUFFER, n, i.STATIC_DRAW), this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0;
            var c, l;
            this.shaderPrograms = [], c = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, vTex);", "\tgl_FragColor *= opacity;", "}"].join("\n"), l = this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "\tvTex = aTex;", "}"].join("\n") : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tvTex = aTex;", "}"].join("\n");
            var u = this.createShaderProgram({
                src: c
            }, l, "<default>");
            this.shaderPrograms.push(u), c = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);", "\tgl_FragColor *= opacity;", "}"].join("\n");
            var p = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tgl_PointSize = aPos.z;", "\topacity = aPos.w;", "}"].join("\n");
            u = this.createShaderProgram({
                src: c
            }, p, "<point>"), this.shaderPrograms.push(u), c = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tif (texture2D(samplerFront, vTex).a < 1.0)", "\t\tdiscard;", "}"].join("\n");
            var u = this.createShaderProgram({
                src: c
            }, l, "<earlyz>");
            this.shaderPrograms.push(u), c = ["uniform lowp vec4 colorFill;", "void main(void) {", "\tgl_FragColor = colorFill;", "}"].join("\n");
            var u = this.createShaderProgram({
                src: c
            }, l, "<fill>");
            this.shaderPrograms.push(u);
            for (var d in cr.shaders) cr.shaders.hasOwnProperty(d) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[d], l, d));
            i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, null), this.batch = [], this.batchPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.lastProgram = -1, this.currentProgram = -1, this.currentShader = null, this.fbo = i.createFramebuffer(), this.renderToTex = null, this.depthBuffer = null, this.attachedDepthBuffer = !1, this.enableFrontToBack && (this.depthBuffer = i.createRenderbuffer()), this.tmpVec3 = vec3.create([0, 0, 0]);
            var f = i.getParameter(i.ALIASED_POINT_SIZE_RANGE);
            this.minPointSize = f[0], this.maxPointSize = f[1], this.maxPointSize > 2048 && (this.maxPointSize = 2048), this.switchProgram(0), cr.seal(this)
        }, e.prototype.updateMatMV = function(t) {
            i(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV), this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
        }, t.prototype.createShaderProgram = function(t, i, n) {
            var r = this.gl,
                s = r.createShader(r.FRAGMENT_SHADER);
            if (r.shaderSource(s, t.src), r.compileShader(s), !r.getShaderParameter(s, r.COMPILE_STATUS)) return r.deleteShader(s), null;
            var a = r.createShader(r.VERTEX_SHADER);
            if (r.shaderSource(a, i), r.compileShader(a), !r.getShaderParameter(a, r.COMPILE_STATUS)) return r.deleteShader(s), r.deleteShader(a), null;
            var o = r.createProgram();
            if (r.attachShader(o, s), r.attachShader(o, a), r.linkProgram(o), !r.getProgramParameter(o, r.LINK_STATUS)) return r.deleteShader(s), r.deleteShader(a), r.deleteProgram(o), null;
            r.useProgram(o), r.deleteShader(s), r.deleteShader(a);
            var h = new e(r, o, n);
            h.extendBoxHorizontal = t.extendBoxHorizontal || 0, h.extendBoxVertical = t.extendBoxVertical || 0, h.crossSampling = !!t.crossSampling, h.preservesOpaqueness = !!t.preservesOpaqueness, h.animated = !!t.animated, h.parameters = t.parameters || [];
            var c, l;
            for (c = 0, l = h.parameters.length; c < l; c++) h.parameters[c][1] = r.getUniformLocation(o, h.parameters[c][0]), h.lastCustomParams.push(0), r.uniform1f(h.parameters[c][1], 0);
            return cr.seal(h), h
        }, t.prototype.getShaderIndex = function(t) {
            var e, i;
            for (e = 0, i = this.shaderPrograms.length; e < i; e++)
                if (this.shaderPrograms[e].name === t) return e;
            return -1
        }, t.prototype.project = function(t, e, i) {
            var n = this.matMV,
                r = this.matP,
                s = [0, 0, 0, 0, 0, 0, 0, 0];
            s[0] = n[0] * t + n[4] * e + n[12], s[1] = n[1] * t + n[5] * e + n[13], s[2] = n[2] * t + n[6] * e + n[14], s[3] = n[3] * t + n[7] * e + n[15], s[4] = r[0] * s[0] + r[4] * s[1] + r[8] * s[2] + r[12] * s[3], s[5] = r[1] * s[0] + r[5] * s[1] + r[9] * s[2] + r[13] * s[3], s[6] = r[2] * s[0] + r[6] * s[1] + r[10] * s[2] + r[14] * s[3], s[7] = -s[2], 0 !== s[7] && (s[7] = 1 / s[7], s[4] *= s[7], s[5] *= s[7], s[6] *= s[7], i[0] = (.5 * s[4] + .5) * this.width, i[1] = (.5 * s[5] + .5) * this.height)
        }, t.prototype.setSize = function(t, e, i) {
            if (this.width !== t || this.height !== e || i) {
                this.endBatch();
                var n = this.gl;
                if (this.width = t, this.height = e, n.viewport(0, 0, t, e), mat4.lookAt(this.cam, this.look, this.up, this.matMV), this.enableFrontToBack) mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP), this.worldScale[0] = 1, this.worldScale[1] = 1;
                else {
                    mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP);
                    var r = [0, 0],
                        s = [0, 0];
                    this.project(0, 0, r), this.project(1, 1, s), this.worldScale[0] = 1 / (s[0] - r[0]), this.worldScale[1] = -1 / (s[1] - r[1])
                }
                var a, o, h;
                for (a = 0, o = this.shaderPrograms.length; a < o; a++) h = this.shaderPrograms[a], h.hasCurrentMatMV = !1, h.locMatP && (n.useProgram(h.shaderProgram), n.uniformMatrix4fv(h.locMatP, !1, this.matP));
                n.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram), n.bindTexture(n.TEXTURE_2D, null), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, null), n.activeTexture(n.TEXTURE0), this.lastTexture0 = null, this.lastTexture1 = null, this.depthBuffer && (n.bindFramebuffer(n.FRAMEBUFFER, this.fbo), n.bindRenderbuffer(n.RENDERBUFFER, this.depthBuffer), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, this.width, this.height), this.attachedDepthBuffer || (n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, this.depthBuffer), this.attachedDepthBuffer = !0), n.bindRenderbuffer(n.RENDERBUFFER, null), n.bindFramebuffer(n.FRAMEBUFFER, null), this.renderToTex = null)
            }
        }, t.prototype.resetModelView = function() {
            mat4.lookAt(this.cam, this.look, this.up, this.matMV), mat4.scale(this.matMV, this.worldScale)
        }, t.prototype.translate = function(t, e) {
            0 === t && 0 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 0, mat4.translate(this.matMV, this.tmpVec3))
        }, t.prototype.scale = function(t, e) {
            1 === t && 1 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 1, mat4.scale(this.matMV, this.tmpVec3))
        }, t.prototype.rotateZ = function(t) {
            0 !== t && mat4.rotateZ(this.matMV, t)
        }, t.prototype.updateModelView = function() {
            if (!i(this.lastMV, this.matMV)) {
                var t = this.pushBatch();
                t.type = d, t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV), mat4.set(this.matMV, this.lastMV), this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setEarlyZIndex = function(t) {
            this.enableFrontToBack && (t > 32760 && (t = 32760), this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
        }, n.prototype.doSetEarlyZPass = function() {
            var t = this.gl,
                e = this.glwrap;
            0 !== this.startIndex ? (t.depthMask(!0), t.colorMask(!1, !1, !1, !1), t.disable(t.BLEND), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.clear(t.DEPTH_BUFFER_BIT), t.bindFramebuffer(t.FRAMEBUFFER, null), e.isBatchInEarlyZPass = !0) : (t.depthMask(!1), t.colorMask(!0, !0, !0, !0), t.enable(t.BLEND), e.isBatchInEarlyZPass = !1)
        }, n.prototype.doSetTexture = function() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
        }, n.prototype.doSetTexture1 = function() {
            var t = this.gl;
            t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this.texParam), t.activeTexture(t.TEXTURE0)
        }, n.prototype.doSetOpacity = function() {
            var t = this.opacityParam,
                e = this.glwrap;
            e.currentOpacity = t;
            var i = e.currentShader;
            i.locOpacity && i.lpOpacity !== t && (i.lpOpacity = t, this.gl.uniform1f(i.locOpacity, t))
        }, n.prototype.doQuad = function() {
            this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
        }, n.prototype.doSetBlend = function() {
            this.gl.blendFunc(this.startIndex, this.indexCount)
        }, n.prototype.doUpdateModelView = function() {
            var t, e, i, n = this.glwrap.shaderPrograms,
                r = this.glwrap.currentProgram;
            for (t = 0, e = n.length; t < e; t++) i = n[t], t === r && i.locMatMV ? (i.updateMatMV(this.mat4param), i.hasCurrentMatMV = !0) : i.hasCurrentMatMV = !1;
            mat4.set(this.mat4param, this.glwrap.currentMV)
        }, n.prototype.doRenderToTexture = function() {
            var t = this.gl,
                e = this.glwrap;
            this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), e.lastTexture1 = null, t.activeTexture(t.TEXTURE0)), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.bindFramebuffer(t.FRAMEBUFFER, null))
        }, n.prototype.doClear = function() {
            var t = this.gl,
                e = this.startIndex;
            0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST), t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
        }, n.prototype.doSetDepthTestEnabled = function() {
            var t = this.gl,
                e = this.startIndex;
            0 !== e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
        }, n.prototype.doPoints = function() {
            var t = this.gl,
                e = this.glwrap;
            e.enableFrontToBack && t.disable(t.DEPTH_TEST);
            var i = e.shaderPrograms[1];
            t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer), t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0), t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount), i = e.currentShader, t.useProgram(i.shaderProgram), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)), e.enableFrontToBack && t.enable(t.DEPTH_TEST)
        }, n.prototype.doSetProgram = function() {
            var t = this.gl,
                e = this.glwrap,
                i = e.shaderPrograms[this.startIndex];
            e.currentProgram = this.startIndex, e.currentShader = i, t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity, t.uniform1f(i.locOpacity, e.currentOpacity)), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
        }, n.prototype.doSetColor = function() {
            var t = this.glwrap.currentShader,
                e = this.mat4param;
            this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
        }, n.prototype.doSetProgramParameters = function() {
            var t, e, i = this.glwrap.currentShader,
                n = this.gl,
                r = this.mat4param;
            i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, this.texParam), this.glwrap.lastTexture1 = this.texParam, n.activeTexture(n.TEXTURE0));
            var s, a = r[0];
            if (i.locPixelWidth && a !== i.lpPixelWidth && (i.lpPixelWidth = a, n.uniform1f(i.locPixelWidth, a)), a = r[1], i.locPixelHeight && a !== i.lpPixelHeight && (i.lpPixelHeight = a, n.uniform1f(i.locPixelHeight, a)), a = r[2], s = r[3], !i.locDestStart || a === i.lpDestStartX && s === i.lpDestStartY || (i.lpDestStartX = a, i.lpDestStartY = s, n.uniform2f(i.locDestStart, a, s)), a = r[4], s = r[5], !i.locDestEnd || a === i.lpDestEndX && s === i.lpDestEndY || (i.lpDestEndX = a, i.lpDestEndY = s, n.uniform2f(i.locDestEnd, a, s)), a = r[6], i.locLayerScale && a !== i.lpLayerScale && (i.lpLayerScale = a, n.uniform1f(i.locLayerScale, a)), a = r[7], i.locLayerAngle && a !== i.lpLayerAngle && (i.lpLayerAngle = a, n.uniform1f(i.locLayerAngle, a)), a = r[8], s = r[9], !i.locViewOrigin || a === i.lpViewOriginX && s === i.lpViewOriginY || (i.lpViewOriginX = a, i.lpViewOriginY = s, n.uniform2f(i.locViewOrigin, a, s)), a = r[10], s = r[11], !i.locScrollPos || a === i.lpScrollPosX && s === i.lpScrollPosY || (i.lpScrollPosX = a, i.lpScrollPosY = s, n.uniform2f(i.locScrollPos, a, s)), a = r[12], i.locSeconds && a !== i.lpSeconds && (i.lpSeconds = a, n.uniform1f(i.locSeconds, a)), i.parameters.length)
                for (t = 0, e = i.parameters.length; t < e; t++) a = this.shaderParams[t], a !== i.lastCustomParams[t] && (i.lastCustomParams[t] = a, n.uniform1f(i.parameters[t][1], a))
        }, t.prototype.pushBatch = function() {
            return this.batchPtr === this.batch.length && this.batch.push(new n(h, this)), this.batch[this.batchPtr++]
        }, t.prototype.endBatch = function() {
            if (0 !== this.batchPtr && !this.gl.isContextLost()) {
                var t = this.gl;
                if (this.pointPtr > 0 && (t.bindBuffer(t.ARRAY_BUFFER, this.pointBuffer), t.bufferSubData(t.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)), e && e.locAPos >= 0 && "<point>" === e.name && t.vertexAttribPointer(e.locAPos, 4, t.FLOAT, !1, 0, 0)), this.vertexPtr > 0) {
                    var e = this.currentShader;
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)), e && e.locAPos >= 0 && "<point>" !== e.name && t.vertexAttribPointer(e.locAPos, this.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)), e && e.locATex >= 0 && "<point>" !== e.name && t.vertexAttribPointer(e.locATex, 2, t.FLOAT, !1, 0, 0)
                }
                var i, n, r;
                for (i = 0, n = this.batchPtr; i < n; i++) switch (r = this.batch[i], r.type) {
                    case 1:
                        r.doQuad();
                        break;
                    case 2:
                        r.doSetTexture();
                        break;
                    case 3:
                        r.doSetOpacity();
                        break;
                    case 4:
                        r.doSetBlend();
                        break;
                    case 5:
                        r.doUpdateModelView();
                        break;
                    case 6:
                        r.doRenderToTexture();
                        break;
                    case 7:
                        r.doClear();
                        break;
                    case 8:
                        r.doPoints();
                        break;
                    case 9:
                        r.doSetProgram();
                        break;
                    case 10:
                        r.doSetProgramParameters();
                        break;
                    case 11:
                        r.doSetTexture1();
                        break;
                    case 12:
                        r.doSetColor();
                        break;
                    case 13:
                        r.doSetDepthTestEnabled();
                        break;
                    case 14:
                        r.doSetEarlyZPass()
                }
                this.batchPtr = 0, this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isBatchInEarlyZPass = !1, this.curBuffer++, this.curBuffer >= o && (this.curBuffer = 0)
            }
        }, t.prototype.setOpacity = function(t) {
            if (t !== this.lastOpacity && !this.isEarlyZPass) {
                var e = this.pushBatch();
                e.type = u, e.opacityParam = t, this.lastOpacity = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setTexture = function(t) {
            if (t !== this.lastTexture0) {
                var e = this.pushBatch();
                e.type = l, e.texParam = t, this.lastTexture0 = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setBlend = function(t, e) {
            if ((t !== this.lastSrcBlend || e !== this.lastDestBlend) && !this.isEarlyZPass) {
                var i = this.pushBatch();
                i.type = p, i.startIndex = t, i.indexCount = e, this.lastSrcBlend = t, this.lastDestBlend = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.isPremultipliedAlphaBlend = function() {
            return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
        }, t.prototype.setAlphaBlend = function() {
            this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }, t.prototype.setNoPremultiplyAlphaBlend = function() {
            this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
        };
        var S = 2 * r - 8;
        t.prototype.quad = function(t, e, i, n, r, s, a, o) {
            this.vertexPtr >= S && this.endBatch();
            var h = this.vertexPtr,
                l = this.texPtr,
                u = this.vertexData,
                p = this.texcoordData,
                d = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var f = this.pushBatch();
                f.type = c, f.startIndex = this.enableFrontToBack ? h : h / 2 * 3, f.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (u[h++] = t, u[h++] = e, u[h++] = d, u[h++] = i, u[h++] = n, u[h++] = d, u[h++] = r, u[h++] = s, u[h++] = d, u[h++] = a, u[h++] = o, u[h++] = d) : (u[h++] = t, u[h++] = e, u[h++] = i, u[h++] = n, u[h++] = r, u[h++] = s, u[h++] = a, u[h++] = o), p[l++] = 0, p[l++] = 0, p[l++] = 1, p[l++] = 0, p[l++] = 1, p[l++] = 1, p[l++] = 0, p[l++] = 1, this.vertexPtr = h, this.texPtr = l
        }, t.prototype.quadTex = function(t, e, i, n, r, s, a, o, h) {
            this.vertexPtr >= S && this.endBatch();
            var l = this.vertexPtr,
                u = this.texPtr,
                p = this.vertexData,
                d = this.texcoordData,
                f = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var g = this.pushBatch();
                g.type = c, g.startIndex = this.enableFrontToBack ? l : l / 2 * 3, g.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            var m = h.left,
                y = h.top,
                _ = h.right,
                v = h.bottom;
            this.enableFrontToBack ? (p[l++] = t, p[l++] = e, p[l++] = f, p[l++] = i, p[l++] = n, p[l++] = f, p[l++] = r, p[l++] = s, p[l++] = f, p[l++] = a, p[l++] = o, p[l++] = f) : (p[l++] = t, p[l++] = e, p[l++] = i, p[l++] = n, p[l++] = r, p[l++] = s, p[l++] = a, p[l++] = o), d[u++] = m, d[u++] = y, d[u++] = _, d[u++] = y, d[u++] = _, d[u++] = v, d[u++] = m, d[u++] = v, this.vertexPtr = l, this.texPtr = u
        }, t.prototype.quadTexUV = function(t, e, i, n, r, s, a, o, h, l, u, p, d, f, g, m) {
            this.vertexPtr >= S && this.endBatch();
            var y = this.vertexPtr,
                _ = this.texPtr,
                v = this.vertexData,
                b = this.texcoordData,
                w = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var x = this.pushBatch();
                x.type = c, x.startIndex = this.enableFrontToBack ? y : y / 2 * 3, x.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (v[y++] = t, v[y++] = e, v[y++] = w, v[y++] = i, v[y++] = n, v[y++] = w, v[y++] = r, v[y++] = s, v[y++] = w, v[y++] = a, v[y++] = o, v[y++] = w) : (v[y++] = t, v[y++] = e, v[y++] = i, v[y++] = n, v[y++] = r, v[y++] = s, v[y++] = a, v[y++] = o), b[_++] = h, b[_++] = l, b[_++] = u, b[_++] = p, b[_++] = d, b[_++] = f, b[_++] = g, b[_++] = m, this.vertexPtr = y, this.texPtr = _
        }, t.prototype.convexPoly = function(t) {
            var e, i, n, r, s, a, o, h, c = t.length / 2,
                l = c - 2,
                u = l - 1,
                p = t[0],
                d = t[1];
            for (e = 0; e < l; e += 2) i = 2 * e, n = t[i + 2], r = t[i + 3], s = t[i + 4], a = t[i + 5], e === u ? this.quad(p, d, n, r, s, a, s, a) : (o = t[i + 6], h = t[i + 7], this.quad(p, d, n, r, s, a, o, h))
        };
        var T = a - 4;
        t.prototype.point = function(t, e, i, n) {
            this.pointPtr >= T && this.endBatch();
            var r = this.pointPtr,
                s = this.pointData;
            if (this.hasPointBatchTop) this.batch[this.batchPtr - 1].indexCount++;
            else {
                var a = this.pushBatch();
                a.type = m, a.startIndex = r, a.indexCount = 1, this.hasPointBatchTop = !0, this.hasQuadBatchTop = !1
            }
            s[r++] = t, s[r++] = e, s[r++] = i, s[r++] = n, this.pointPtr = r
        }, t.prototype.switchProgram = function(t) {
            if (this.lastProgram !== t) {
                var e = this.shaderPrograms[t];
                if (!e) {
                    if (0 === this.lastProgram) return;
                    t = 0, e = this.shaderPrograms[0]
                }
                var i = this.pushBatch();
                i.type = y, i.startIndex = t, this.lastProgram = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.programUsesDest = function(t) {
            var e = this.shaderPrograms[t];
            return !(!e.locDestStart && !e.locDestEnd)
        }, t.prototype.programUsesCrossSampling = function(t) {
            var e = this.shaderPrograms[t];
            return !!(e.locDestStart || e.locDestEnd || e.crossSampling)
        }, t.prototype.programPreservesOpaqueness = function(t) {
            return this.shaderPrograms[t].preservesOpaqueness
        }, t.prototype.programExtendsBox = function(t) {
            var e = this.shaderPrograms[t];
            return 0 !== e.extendBoxHorizontal || 0 !== e.extendBoxVertical
        }, t.prototype.getProgramBoxExtendHorizontal = function(t) {
            return this.shaderPrograms[t].extendBoxHorizontal
        }, t.prototype.getProgramBoxExtendVertical = function(t) {
            return this.shaderPrograms[t].extendBoxVertical
        }, t.prototype.getProgramParameterType = function(t, e) {
            return this.shaderPrograms[t].parameters[e][2]
        }, t.prototype.programIsAnimated = function(t) {
            return this.shaderPrograms[t].animated
        }, t.prototype.setProgramParameters = function(t, e, i, n, r, s, a, o, h, c, l, u, p, d, f) {
            var g, m, y, v, b, w = this.shaderPrograms[this.lastProgram];
            if (w.hasAnyOptionalUniforms || f.length) {
                if (y = this.pushBatch(), y.type = _, y.mat4param ? mat4.set(this.matMV, y.mat4param) : y.mat4param = mat4.create(), v = y.mat4param, v[0] = e, v[1] = i, v[2] = n, v[3] = r, v[4] = s, v[5] = a, v[6] = o, v[7] = h, v[8] = c, v[9] = l, v[10] = u, v[11] = p, v[12] = d, w.locSamplerBack ? y.texParam = t : y.texParam = null, f.length)
                    for (b = y.shaderParams, b.length = f.length, g = 0, m = f.length; g < m; g++) b[g] = f[g];
                this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clear = function(t, e, i, n) {
            var r = this.pushBatch();
            r.type = g, r.startIndex = 0, r.mat4param || (r.mat4param = mat4.create()), r.mat4param[0] = t, r.mat4param[1] = e, r.mat4param[2] = i, r.mat4param[3] = n, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.clearRect = function(t, e, i, n) {
            if (!(i < 0 || n < 0)) {
                var r = this.pushBatch();
                r.type = g, r.startIndex = 1, r.mat4param || (r.mat4param = mat4.create()), r.mat4param[0] = t, r.mat4param[1] = e, r.mat4param[2] = i, r.mat4param[3] = n, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clearDepth = function() {
            var t = this.pushBatch();
            t.type = g, t.startIndex = 2, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setEarlyZPass = function(t) {
            if (this.enableFrontToBack && (t = !!t, this.isEarlyZPass !== t)) {
                var e = this.pushBatch();
                e.type = w, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isEarlyZPass = t, this.renderToTex = null, this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)
            }
        }, t.prototype.setDepthTestEnabled = function(t) {
            if (this.enableFrontToBack) {
                var e = this.pushBatch();
                e.type = b, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.fullscreenQuad = function() {
            mat4.set(this.lastMV, x), this.resetModelView(), this.updateModelView();
            var t = this.width / 2,
                e = this.height / 2;
            this.quad(-t, e, t, e, t, -e, -t, -e), mat4.set(x, this.matMV), this.updateModelView()
        }, t.prototype.setColorFillMode = function(t, e, i, n) {
            this.switchProgram(3);
            var r = this.pushBatch();
            r.type = v, r.mat4param || (r.mat4param = mat4.create()), r.mat4param[0] = t, r.mat4param[1] = e, r.mat4param[2] = i, r.mat4param[3] = n, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setTextureFillMode = function() {
            this.switchProgram(0)
        }, t.prototype.restoreEarlyZMode = function() {
            this.switchProgram(2)
        }, t.prototype.present = function() {
            this.endBatch(), this.gl.flush()
        };
        var A = [],
            O = {};
        t.prototype.contextLost = function() {
            cr.clearArray(A), O = {}
        };
        var k = 1,
            C = 2,
            E = 3,
            P = 4;
        t.prototype.loadTexture = function(t, e, i, n, r, s) {
            e = !!e, i = !!i;
            var a = t.src + "," + e + "," + i + (e ? "," + r : ""),
                o = null;
            if ("undefined" != typeof t.src && O.hasOwnProperty(a)) return o = O[a], o.c2refcount++, o;
            this.endBatch();
            var h = this.gl,
                c = cr.isPOT(t.width) && cr.isPOT(t.height);
            o = h.createTexture(), h.bindTexture(h.TEXTURE_2D, o), h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var l = h.RGBA,
                u = h.RGBA,
                p = h.UNSIGNED_BYTE;
            if (n && !this.isIE) switch (n) {
                case k:
                    l = h.RGB, u = h.RGB;
                    break;
                case C:
                    p = h.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case E:
                    p = h.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case P:
                    l = h.RGB, u = h.RGB, p = h.UNSIGNED_SHORT_5_6_5
            }
            if (1 === this.version && !c && e) {
                var d = document.createElement("canvas");
                d.width = cr.nextHighestPowerOfTwo(t.width), d.height = cr.nextHighestPowerOfTwo(t.height);
                var f = d.getContext("2d");
                "undefined" != typeof f.imageSmoothingEnabled ? f.imageSmoothingEnabled = i : (f.webkitImageSmoothingEnabled = i, f.mozImageSmoothingEnabled = i, f.msImageSmoothingEnabled = i), f.drawImage(t, 0, 0, t.width, t.height, 0, 0, d.width, d.height), h.texImage2D(h.TEXTURE_2D, 0, l, u, p, d)
            } else h.texImage2D(h.TEXTURE_2D, 0, l, u, p, t);
            return e ? "repeat-x" === r ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)) : "repeat-y" === r ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)), i ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR), (c || this.version >= 2) && this.enable_mipmaps && !s ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR_MIPMAP_LINEAR), h.generateMipmap(h.TEXTURE_2D)) : h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST)),
                h.bindTexture(h.TEXTURE_2D, null), this.lastTexture0 = null, o.c2width = t.width, o.c2height = t.height, o.c2refcount = 1, o.c2texkey = a, A.push(o), O[a] = o, o
        }, t.prototype.createEmptyTexture = function(t, e, i, n, r) {
            this.endBatch();
            var s = this.gl;
            this.isIE && (n = !1);
            var a = s.createTexture();
            return s.bindTexture(s.TEXTURE_2D, a), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, t, e, 0, s.RGBA, n ? s.UNSIGNED_SHORT_4_4_4_4 : s.UNSIGNED_BYTE, null), r ? (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.REPEAT), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.REPEAT)) : (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE)), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, i ? s.LINEAR : s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, i ? s.LINEAR : s.NEAREST), s.bindTexture(s.TEXTURE_2D, null), this.lastTexture0 = null, a.c2width = t, a.c2height = e, A.push(a), a
        }, t.prototype.videoToTexture = function(t, e, i) {
            this.endBatch();
            var n = this.gl;
            this.isIE && (i = !1), n.bindTexture(n.TEXTURE_2D, e), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            try {
                n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, i ? n.UNSIGNED_SHORT_4_4_4_4 : n.UNSIGNED_BYTE, t)
            } catch (r) {
                console && console.error && console.error("Error updating WebGL texture: ", r)
            }
            n.bindTexture(n.TEXTURE_2D, null), this.lastTexture0 = null
        }, t.prototype.deleteTexture = function(t) {
            if (t) {
                if ("undefined" != typeof t.c2refcount && t.c2refcount > 1) return void t.c2refcount--;
                this.endBatch(), t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.lastTexture0 = null), t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture1 = null), cr.arrayFindRemove(A, t), "undefined" != typeof t.c2texkey && delete O[t.c2texkey], this.gl.deleteTexture(t)
            }
        }, t.prototype.estimateVRAM = function() {
            var t, e, i, n = this.width * this.height * 4 * 2;
            for (t = 0, e = A.length; t < e; t++) i = A[t], n += i.c2width * i.c2height * 4;
            return n
        }, t.prototype.textureCount = function() {
            return A.length
        }, t.prototype.setRenderingToTexture = function(t) {
            if (t !== this.renderToTex) {
                var e = this.pushBatch();
                e.type = f, e.texParam = t, this.renderToTex = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, cr.GLWrap = t
    }(),
    function() {
        function t(t) {
            if (t && (t.getContext || t.dc) && !t.c2runtime) {
                t.c2runtime = this;
                var e = this;
                this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" == typeof window.c2isCrosswalk || !window.c2isCrosswalk), this.isCordova = this.isCrosswalk || "undefined" != typeof window.device && ("undefined" != typeof window.device.cordova || "undefined" != typeof window.device.phonegap) || "undefined" != typeof window.c2iscordova && window.c2iscordova, this.isPhoneGap = this.isCordova, this.isDirectCanvas = !!t.dc, this.isAppMobi = "undefined" != typeof window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function() {
                    e.setSuspended(!0)
                }), CocoonJS.App.onActivated.addEventListener(function() {
                    e.setSuspended(!1)
                })), this.isEjecta && (document.addEventListener("pagehide", function() {
                    e.setSuspended(!0)
                }), document.addEventListener("pageshow", function() {
                    e.setSuspended(!1)
                }), document.addEventListener("resize", function() {
                    e.setSize(window.innerWidth, window.innerHeight)
                })), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent), this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge, this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge, this.isWindows = /windows/i.test(navigator.userAgent), this.isNWjs = "undefined" != typeof window.c2nodewebkit || "undefined" != typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.isNodeWebkit = this.isNWjs, this.isArcade = "undefined" != typeof window.is_scirra_arcade, this.isWindows8App = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !("undefined" == typeof window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !("undefined" == typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !("undefined" == typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWindows10 = !!window.cr_windows10, this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10, this.isBlackberry10 = !("undefined" == typeof window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit), this.httpServer = null, this.httpServerUrl = "", this.isWKWebView && (this.httpServer = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null), "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0), this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1, this.canvas = t, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.glUnmaskedRenderer = "(unavailable)", this.enableFrontToBack = !1, this.earlyz_index = 0, this.ctx = null, this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.canvas.onselectstart = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.isDirectCanvas && (window.c2runtime = this), this.isNWjs && (window.ondragover = function(t) {
                    return t.preventDefault(), !1
                }, window.ondrop = function(t) {
                    return t.preventDefault(), !1
                }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()), this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"), this.width = t.width, this.height = t.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.forceCanvasAlpha = !1, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function() {
                    return +new Date
                }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = {}, this.hasPendingInstances = !1, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.isEndingLayout = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null, this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.fireOnCreateAfterLoad = [], this.dt = 0, this.dt1 = 0, this.minimumFramerate = 30, this.logictime = 0, this.cpuutilisation = 0, this.timescale = 1, this.kahanTime = new cr.KahanAdder, this.wallTime = new cr.KahanAdder, this.last_tick_time = 0, this.fps = 0, this.last_fps_time = 0, this.tickcount = 0, this.execcount = 0, this.framecount = 0, this.objectcount = 0, this.changelayout = null, this.destroycallbacks = [], this.event_stack = [], this.event_stack_index = -1, this.localvar_stack = [
                    []
                ], this.localvar_stack_index = 0, this.trigger_depth = 0, this.pushEventStack(null), this.loop_stack = [], this.loop_stack_index = -1, this.next_uid = 0, this.next_puid = 0, this.layout_first_tick = !0, this.family_count = 0, this.suspend_events = [], this.raf_id = -1, this.timeout_id = -1, this.isloading = !0, this.loadingprogress = 0, this.isNodeFullscreen = !1, this.stackLocalCount = 0, this.audioInstance = null, this.had_a_click = !1, this.isInUserInputEvent = !1, this.objects_to_pretick = new cr.ObjectSet, this.objects_to_tick = new cr.ObjectSet, this.objects_to_tick2 = new cr.ObjectSet, this.registered_collisions = [], this.temp_poly = new cr.CollisionPoly([]), this.temp_poly2 = new cr.CollisionPoly([]), this.allGroups = [], this.groups_by_name = {}, this.cndsBySid = {}, this.actsBySid = {}, this.varsBySid = {}, this.blocksBySid = {}, this.running_layout = null, this.layer_canvas = null, this.layer_ctx = null, this.layer_tex = null, this.layout_tex = null, this.layout_canvas = null, this.layout_ctx = null, this.is_WebGL_context_lost = !1, this.uses_background_blending = !1, this.fx_tex = [null, null], this.fullscreen_scaling = 0, this.files_subfolder = "", this.objectsByUid = {}, this.loaderlogos = null, this.snapshotCanvas = null, this.snapshotData = "", this.objectRefTable = [], this.requestProjectData()
            }
        }

        function e(t, e) {
            O && O.width === t && O.height === e || (O = document.createElement("canvas"), O.width = t, O.height = e, k = O.getContext("2d"))
        }

        function i(t, e) {
            return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
        }

        function n() {
            return E.length ? E.pop() : new cr.ObjectSet
        }

        function r(t) {
            t.clear(), E.push(t)
        }

        function s() {
            try {
                return !!window.indexedDB
            } catch (t) {
                return !1
            }
        }

        function a(t) {
            var e = t.target.result;
            e.createObjectStore("saves", {
                keyPath: "slot"
            })
        }

        function o(t, e, i, n) {
            try {
                var r = indexedDB.open("_C2SaveStates");
                r.onupgradeneeded = a, r.onerror = n, r.onsuccess = function(r) {
                    var s = r.target.result;
                    s.onerror = n;
                    var a = s.transaction(["saves"], "readwrite"),
                        o = a.objectStore("saves"),
                        h = o.put({
                            slot: t,
                            data: e
                        });
                    h.onsuccess = i
                }
            } catch (s) {
                n(s)
            }
        }

        function h(t, e, i) {
            try {
                var n = indexedDB.open("_C2SaveStates");
                n.onupgradeneeded = a, n.onerror = i, n.onsuccess = function(n) {
                    var r = n.target.result;
                    r.onerror = i;
                    var s = r.transaction(["saves"]),
                        a = s.objectStore("saves"),
                        o = a.get(t);
                    o.onsuccess = function(t) {
                        e(o.result ? o.result.data : null)
                    }
                }
            } catch (r) {
                i(r)
            }
        }

        function c() {
            cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
        }

        function l(t) {
            var e, i = {};
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    if (t[e] instanceof cr.ObjectSet) continue;
                    if (t[e] && "undefined" != typeof t[e].c2userdata) continue;
                    if ("spriteCreatedDestroyCallback" === e) continue;
                    i[e] = t[e]
                }
            return i
        }
        var u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        t.prototype.requestProjectData = function() {
            var t = this;
            if (this.isWKWebView) return void(this.httpServer ? this.httpServer.startServer({
                port: 0,
                localhost_only: !0
            }, function(e) {
                t.httpServerUrl = e, t.fetchLocalFileViaCordovaAsText("data.js", function(e) {
                    t.loadProject(JSON.parse(e))
                }, function(t) {
                    alert("Error fetching data.js")
                })
            }, function(t) {
                alert("error starting local server: " + t)
            }) : this.fetchLocalFileViaCordovaAsText("data.js", function(e) {
                t.loadProject(JSON.parse(e))
            }, function(t) {
                alert("Error fetching data.js")
            }));
            var e;
            e = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
            var i = "data.js";
            (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (i = "data.json"), e.open("GET", i, !0);
            var n = !1;
            if (!this.isDomFree && "response" in e && "responseType" in e) try {
                e.responseType = "json", n = "json" === e.responseType
            } catch (r) {
                n = !1
            }
            if (!n && "responseType" in e) try {
                e.responseType = "text"
            } catch (r) {}
            if ("overrideMimeType" in e) try {
                e.overrideMimeType("application/json; charset=utf-8")
            } catch (r) {}
            this.isWindowsPhone8 ? e.onreadystatechange = function() {
                4 === e.readyState && t.loadProject(JSON.parse(e.responseText))
            } : (e.onload = function() {
                if (n) t.loadProject(e.response);
                else if (t.isEjecta) {
                    var i = e.responseText;
                    i = i.substr(i.indexOf("{")), t.loadProject(JSON.parse(i))
                } else t.loadProject(JSON.parse(e.responseText))
            }, e.onerror = function(t) {
                cr.logerror("Error requesting " + i + ":"), cr.logerror(t)
            }), e.send()
        }, t.prototype.initRendererAndLoader = function() {
            var t, e, i, n, r, s, a, o, h, c, l = this;
            this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser, 0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1), this.devicePixelRatio = this.isRetina ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1, this.ClearDeathRow();
            var u;
            this.fullscreen_mode > 0 && this.setSize(window.innerWidth, window.innerHeight, !0);
            try {
                this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (u = {
                    alpha: !0,
                    depth: !1,
                    antialias: !1,
                    failIfMajorPerformanceCaveat: !0
                }, this.gl = this.canvas.getContext("webgl2", u) || this.canvas.getContext("webgl", u) || this.canvas.getContext("experimental-webgl", u))
            } catch (p) {}
            if (this.gl) {
                var d = (0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2"), this.gl.getExtension("WEBGL_debug_renderer_info"));
                if (d) {
                    var f = this.gl.getParameter(d.UNMASKED_VENDOR_WEBGL),
                        g = this.gl.getParameter(d.UNMASKED_RENDERER_WEBGL);
                    this.glUnmaskedRenderer = g + " [" + f + "]"
                }
                for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"), this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function(t) {
                    return !1
                }, this.overlay_canvas.onselectstart = function(t) {
                    return !1
                }, this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio), this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio), jQuery(this.overlay_canvas).css({
                    width: this.cssWidth + "px",
                    height: this.cssHeight + "px"
                }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile, this.enableFrontToBack), this.glwrap.setSize(this.canvas.width, this.canvas.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, this.canvas.addEventListener("webglcontextlost", function(t) {
                    t.preventDefault(), l.onContextLost(), cr.logexport("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
                }, !1), this.canvas.addEventListener("webglcontextrestored", function(t) {
                    l.glwrap.initState(), l.glwrap.setSize(l.glwrap.width, l.glwrap.height, !0), l.layer_tex = null, l.layout_tex = null, l.fx_tex[0] = null, l.fx_tex[1] = null, l.onContextRestored(), l.redraw = !0, cr.logexport("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
                }, !1), t = 0, e = this.types_by_index.length; t < e; t++)
                    for (a = this.types_by_index[t], i = 0, n = a.effect_types.length; i < n; i++) o = a.effect_types[i], o.shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(o.shaderindex);
                for (t = 0, e = this.layouts_by_index.length; t < e; t++) {
                    for (h = this.layouts_by_index[t], i = 0, n = h.effect_types.length; i < n; i++) o = h.effect_types[i], o.shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex);
                    for (h.updateActiveEffects(), i = 0, n = h.layers.length; i < n; i++) {
                        for (c = h.layers[i], r = 0, s = c.effect_types.length; r < s; r++) o = c.effect_types[r], o.shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(o.shaderindex);
                        c.updateActiveEffects()
                    }
                }
            } else {
                if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                    this.canvas = null, document.oncontextmenu = function(t) {
                        return !1
                    }, document.onselectstart = function(t) {
                        return !1
                    }, this.ctx = AppMobi.canvas.getContext("2d");
                    try {
                        this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                    } catch (p) {}
                    0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
                }
                this.ctx || (this.isCocoonJs ? (u = {
                    antialias: !!this.linearSampling,
                    alpha: !0
                }, this.ctx = this.canvas.getContext("2d", u)) : (u = {
                    alpha: !0
                }, this.ctx = this.canvas.getContext("2d", u)), this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)), this.overlay_canvas = null, this.overlay_ctx = null
            } if (this.tickFunc = function(t) {
                l.tick(!1, t)
            }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function() {
                window.focus()
            }, !0), document.addEventListener("touchstart", function() {
                window.focus()
            }, !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function() {
                l.setSuspended(!1)
            }), jQuery(window).blur(function() {
                var t = window.parent;
                t && t.document.hasFocus() || l.setSuspended(!0)
            }))), window.addEventListener("blur", function() {
                l.onWindowBlur()
            }), !this.isDomFree) {
                var m = function(t) {
                    if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                        document.activeElement.blur()
                    } catch (t) {}
                };
                "undefined" != typeof PointerEvent ? document.addEventListener("pointerdown", m) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", m) : document.addEventListener("touchstart", m), document.addEventListener("mousedown", m)
            }
            0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
        };
        t.prototype.setSize = function(t, e, i) {
            var n = 0,
                r = 0,
                s = 0,
                a = 0,
                o = 0;
            if (this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
                this.lastWindowWidth = t, this.lastWindowHeight = e;
                var h, c, l = this.fullscreen_mode,
                    u = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
                if (u || 0 !== this.fullscreen_mode || i) {
                    u && this.fullscreen_scaling > 0 && (l = this.fullscreen_scaling);
                    var p = this.devicePixelRatio;
                    l >= 4 ? (h = this.original_width / this.original_height, c = t / e, c > h ? (s = e * h, 5 === l ? (o = s * p / this.original_width, o > 1 ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), s = this.original_width * o / p, a = this.original_height * o / p, n = (t - s) / 2, r = (e - a) / 2, t = s, e = a) : (n = (t - s) / 2, t = s)) : (a = t / h, 5 === l ? (o = a * p / this.original_height, o > 1 ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), s = this.original_width * o / p, a = this.original_height * o / p, n = (t - s) / 2, r = (e - a) / 2, t = s, e = a) : (r = (e - a) / 2, e = a)), u && !this.isNWjs && (n = 0, r = 0)) : this.isNWjs && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (n = Math.floor((t - this.original_width) / 2), r = Math.floor((e - this.original_height) / 2), t = this.original_width, e = this.original_height), l < 2 && (this.aspect_scale = p), this.cssWidth = Math.round(t), this.cssHeight = Math.round(e), this.width = Math.round(t * p), this.height = Math.round(e * p), this.redraw = !0, this.wantFullscreenScalingQuality ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === l ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === l ? (h = this.original_width / this.original_height, c = this.lastWindowWidth / this.lastWindowHeight, c < h ? this.draw_width = this.draw_height * c : c > h && (this.draw_height = this.draw_width / c)) : 3 === l && (h = this.original_width / this.original_height, c = this.lastWindowWidth / this.lastWindowHeight, c > h ? this.draw_width = this.draw_height * c : c < h && (this.draw_height = this.draw_width / c))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px",
                        "margin-left": Math.floor(n) + "px",
                        "margin-top": Math.floor(r) + "px"
                    }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px"
                    })), this.canvas && (this.canvas.width = Math.round(t * p), this.canvas.height = Math.round(e * p), this.isEjecta ? (this.canvas.style.left = Math.floor(n) + "px", this.canvas.style.top = Math.floor(r) + "px", this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px")), this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * p), this.overlay_canvas.height = Math.round(e * p), this.overlay_canvas.style.width = this.cssWidth + "px", this.overlay_canvas.style.height = this.cssHeight + "px"), this.glwrap && this.glwrap.setSize(Math.round(t * p), Math.round(e * p)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t), this.ctx.height = Math.round(e)), this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling), this.tryLockOrientation(), this.isiPhone && !this.isCordova && window.scrollTo(0, 0)
                }
            }
        }, t.prototype.tryLockOrientation = function() {
            if (this.autoLockOrientation && 0 !== this.orientations) {
                var t = "portrait";
                2 === this.orientations && (t = "landscape");
                try {
                    screen.orientation && screen.orientation.lock ? screen.orientation.lock(t)["catch"](function() {}) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
                } catch (e) {
                    console && console.warn && console.warn("Failed to lock orientation: ", e)
                }
            }
        }, t.prototype.onContextLost = function() {
            this.glwrap.contextLost(), this.is_WebGL_context_lost = !0;
            var t, e, i;
            for (t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.onLostWebGLContext && i.onLostWebGLContext()
        }, t.prototype.onContextRestored = function() {
            this.is_WebGL_context_lost = !1;
            var t, e, i;
            for (t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.onRestoreWebGLContext && i.onRestoreWebGLContext()
        }, t.prototype.positionOverlayCanvas = function() {
            if (!this.isDomFree) {
                var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova,
                    e = t ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
                e.position = "absolute", jQuery(this.overlay_canvas).css(e)
            }
        };
        var p = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
        t.prototype.setSuspended = function(t) {
            var e, i;
            if (t && !this.isSuspended)
                for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, this.raf_id !== -1 && p && p(this.raf_id), this.timeout_id !== -1 && clearTimeout(this.timeout_id), e = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!0);
            else if (!t && this.isSuspended) {
                for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, this.logictime = 0, e = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!1);
                this.tick(!1)
            }
        }, t.prototype.addSuspendCallback = function(t) {
            this.suspend_events.push(t)
        }, t.prototype.GetObjectReference = function(t) {
            return this.objectRefTable[t]
        }, t.prototype.loadProject = function(t) {
            t && t.project || cr.logerror("Project model unavailable");
            var e = t.project;
            if (this.name = e[0], this.first_layout = e[1], this.fullscreen_mode = e[12], this.fullscreen_mode_set = e[12], this.original_width = e[10], this.original_height = e[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (e[12] >= 4 || 0 === e[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = e[18], this.loaderstyle = e[19], 0 === this.loaderstyle) {
                var i = new Image;
                i.crossOrigin = "anonymous", this.setImageSrc(i, "loading-logo.png"), this.loaderlogos = {
                    logo: i
                }
            } else if (4 === this.loaderstyle) {
                var n = new Image;
                n.src = "";
                var r = new Image;
                r.src = "";
                var s = new Image;
                s.src = "";
                var a = new Image;
                a.src = "";
                var o = new Image;
                o.src = "";
                var h = new Image;
                h.src = "";
                var c = new Image;
                c.src = "";
                var l = new Image;
                l.src = "";
                var u = new Image;
                u.src = "";
                var p = new Image;
                p.src = "";
                var d = new Image;
                d.src = "";
                var f = new Image;
                f.src = "", this.loaderlogos = {
                    logo: [n, r, s, a],
                    powered: [o, h, c, l],
                    website: [u, p, d, f]
                }
            }
            this.next_uid = e[21], this.objectRefTable = cr.getObjectRefTable(), this.system = new cr.system_object(this);
            var g, m, y, _, v, b, w, x, S, T, A, O, k;
            for (g = 0, m = e[2].length; g < m; g++) w = e[2][g], A = this.GetObjectReference(w[0]), cr.add_common_aces(w, A.prototype), O = new A(this), O.singleglobal = w[1], O.is_world = w[2], O.is_rotatable = w[5], O.must_predraw = w[9], O.onCreate && O.onCreate(), cr.seal(O), this.plugins.push(O);
            for (this.objectRefTable = cr.getObjectRefTable(), g = 0, m = e[3].length; g < m; g++) {
                for (w = e[3][g], k = this.GetObjectReference(w[1]), O = null, y = 0, _ = this.plugins.length; y < _; y++)
                    if (this.plugins[y] instanceof k) {
                        O = this.plugins[y];
                        break
                    }
                var C = new O.Type(O);
                for (C.name = w[0], C.is_family = w[2], C.instvar_sids = w[3].slice(0), C.vars_count = w[3].length, C.behs_count = w[4], C.fx_count = w[5], C.sid = w[11], C.is_family ? (C.members = [], C.family_index = this.family_count++, C.families = null) : (C.members = null, C.family_index = -1, C.families = []), C.family_var_map = null, C.family_beh_map = null, C.family_fx_map = null, C.is_contained = !1, C.container = null, w[6] ? (C.texture_file = w[6][0], C.texture_filesize = w[6][1], C.texture_pixelformat = w[6][2]) : (C.texture_file = null, C.texture_filesize = 0, C.texture_pixelformat = 0), w[7] ? C.animations = w[7] : C.animations = null, C.index = g, C.instances = [], C.deadCache = [], C.solstack = [new cr.selection(C)], C.cur_sol = 0, C.default_instance = null, C.default_layerindex = 0, C.stale_iids = !0, C.updateIIDs = cr.type_updateIIDs, C.getFirstPicked = cr.type_getFirstPicked, C.getPairedInstance = cr.type_getPairedInstance, C.getCurrentSol = cr.type_getCurrentSol, C.pushCleanSol = cr.type_pushCleanSol, C.pushCopySol = cr.type_pushCopySol, C.popSol = cr.type_popSol, C.getBehaviorByName = cr.type_getBehaviorByName, C.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, C.getEffectIndexByName = cr.type_getEffectIndexByName, C.applySolToContainer = cr.type_applySolToContainer, C.getInstanceByIID = cr.type_getInstanceByIID, C.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), C.any_cell_changed = !0, C.any_instance_parallaxed = !1, C.extra = {}, C.toString = cr.type_toString, C.behaviors = [], y = 0, _ = w[8].length; y < _; y++) {
                    x = w[8][y];
                    var E = this.GetObjectReference(x[1]),
                        P = null;
                    for (v = 0, b = this.behaviors.length; v < b; v++)
                        if (this.behaviors[v] instanceof E) {
                            P = this.behaviors[v];
                            break
                        }
                    P || (P = new E(this), P.my_types = [], P.my_instances = new cr.ObjectSet, P.onCreate && P.onCreate(), cr.seal(P), this.behaviors.push(P), cr.behaviors.solid && P instanceof cr.behaviors.solid && (this.solidBehavior = P), cr.behaviors.jumpthru && P instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = P), cr.behaviors.shadowcaster && P instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = P)), P.my_types.indexOf(C) === -1 && P.my_types.push(C);
                    var I = new P.Type(P, C);
                    I.name = x[0], I.sid = x[2], I.onCreate(), cr.seal(I), C.behaviors.push(I)
                }
                for (C.global = w[9], C.isOnLoaderLayout = w[10], C.effect_types = [], y = 0, _ = w[12].length; y < _; y++) C.effect_types.push({
                    id: w[12][y][0],
                    name: w[12][y][1],
                    shaderindex: -1,
                    preservesOpaqueness: !1,
                    active: !0,
                    index: y
                });
                if (C.tile_poly_data = w[13], this.uses_loader_layout && !C.is_family && !C.isOnLoaderLayout && O.is_world || (C.onCreate(), cr.seal(C)), C.name && (this.types[C.name] = C), this.types_by_index.push(C), O.singleglobal) {
                    var L = new O.Instance(C);
                    L.uid = this.next_uid++, L.puid = this.next_puid++, L.iid = 0, L.get_iid = cr.inst_get_iid, L.toString = cr.inst_toString, L.properties = w[14], L.onCreate(), cr.seal(L), C.instances.push(L), this.objectsByUid[L.uid.toString()] = L
                }
            }
            for (g = 0, m = e[4].length; g < m; g++) {
                var R, F = e[4][g],
                    j = this.types_by_index[F[0]];
                for (y = 1, _ = F.length; y < _; y++) R = this.types_by_index[F[y]], R.families.push(j), j.members.push(R)
            }
            for (g = 0, m = e[28].length; g < m; g++) {
                var N = e[28][g],
                    B = [];
                for (y = 0, _ = N.length; y < _; y++) B.push(this.types_by_index[N[y]]);
                for (y = 0, _ = B.length; y < _; y++) B[y].is_contained = !0, B[y].container = B
            }
            if (this.family_count > 0)
                for (g = 0, m = this.types_by_index.length; g < m; g++)
                    if (S = this.types_by_index[g], !S.is_family && S.families.length) {
                        S.family_var_map = new Array(this.family_count), S.family_beh_map = new Array(this.family_count), S.family_fx_map = new Array(this.family_count);
                        var M = [],
                            D = 0,
                            W = 0,
                            V = 0;
                        for (y = 0, _ = S.families.length; y < _; y++)
                            for (T = S.families[y], S.family_var_map[T.family_index] = D, D += T.vars_count, S.family_beh_map[T.family_index] = W, W += T.behs_count, S.family_fx_map[T.family_index] = V, V += T.fx_count, v = 0, b = T.effect_types.length; v < b; v++) M.push(cr.shallowCopy({}, T.effect_types[v]));
                        for (S.effect_types = M.concat(S.effect_types), y = 0, _ = S.effect_types.length; y < _; y++) S.effect_types[y].index = y
                    }
            for (g = 0, m = e[5].length; g < m; g++) {
                w = e[5][g];
                var G = new cr.layout(this, w);
                cr.seal(G), this.layouts[G.name] = G, this.layouts_by_index.push(G)
            }
            for (g = 0, m = e[6].length; g < m; g++) {
                w = e[6][g];
                var z = new cr.eventsheet(this, w);
                cr.seal(z), this.eventsheets[z.name] = z, this.eventsheets_by_index.push(z)
            }
            for (g = 0, m = this.eventsheets_by_index.length; g < m; g++) this.eventsheets_by_index[g].postInit();
            for (g = 0, m = this.eventsheets_by_index.length; g < m; g++) this.eventsheets_by_index[g].updateDeepIncludes();
            for (g = 0, m = this.triggers_to_postinit.length; g < m; g++) this.triggers_to_postinit[g].postInit();
            cr.clearArray(this.triggers_to_postinit), this.audio_to_preload = e[7], this.files_subfolder = e[8], this.pixel_rounding = e[9], this.aspect_scale = 1, this.enableWebGL = e[13], this.linearSampling = e[14], this.clearBackground = e[15], this.versionstr = e[16], this.useHighDpi = e[17], this.orientations = e[20], this.autoLockOrientation = this.orientations > 0, this.pauseOnBlur = e[22], this.wantFullscreenScalingQuality = e[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = e[24], this.preloadSounds = e[25], this.projectName = e[26], this.enableFrontToBack = e[27] && !this.isIE, this.start_time = Date.now(), cr.clearArray(this.objectRefTable), this.initRendererAndLoader()
        };
        var d = !1;
        t.prototype.waitForImageLoad = function(t, e) {
            t.cocoonLazyLoad = !0, t.onerror = function(e) {
                t.c2error = !0, d = !0, console && console.error && console.error("Error loading image '" + t.src + "': ", e)
            }, this.isEjecta ? t.src = e : t.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(e, function(e) {
                t.src = e
            }, function(i) {
                t.c2error = !0, d = !0, console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", i)
            }) : (t.crossOrigin = "anonymous", this.setImageSrc(t, e))), this.wait_for_textures.push(t)
        }, t.prototype.findWaitingTexture = function(t) {
            var e, i;
            for (e = 0, i = this.wait_for_textures.length; e < i; e++)
                if (this.wait_for_textures[e].cr_src === t) return this.wait_for_textures[e];
            return null
        };
        var f = 0,
            g = !1;
        t.prototype.getready = function() {
            this.audioInstance && (f = this.audioInstance.setPreloadList(this.audio_to_preload))
        }, t.prototype.areAllTexturesAndSoundsLoaded = function() {
            var t, e, i, n = f,
                r = 0,
                s = 0,
                a = !0;
            for (t = 0, e = this.wait_for_textures.length; t < e; t++) {
                i = this.wait_for_textures[t];
                var o = i.cr_filesize;
                (!o || o <= 0) && (o = 5e4), n += o, i.src && (i.complete || i.loaded) && !i.c2error ? r += o : a = !1
            }
            return a && this.preloadSounds && this.audioInstance && (g || (this.audioInstance.startPreloads(), g = !0), s = this.audioInstance.getPreloadedSize(), r += s, s < f && (a = !1)), 0 == n ? this.progress = 1 : this.progress = r / n, a
        };
        var m = !1;
        t.prototype.go = function() {
            if (this.ctx || this.glwrap) {
                var t = this.ctx || this.overlay_ctx;
                this.overlay_canvas && this.positionOverlayCanvas();
                var e = window.innerWidth,
                    i = window.innerHeight;
                this.lastWindowWidth === e && this.lastWindowHeight === i || this.setSize(e, i),
                    this.progress = 0, this.last_progress = -1;
                var n = this;
                if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || m)) this.go_loading_finished();
                else {
                    var r = Date.now() - this.start_time;
                    if (t) {
                        var s = this.width,
                            a = this.height,
                            o = this.devicePixelRatio;
                        if (this.loaderstyle < 3 && (this.isCocoonJs || r >= 500 && this.last_progress != this.progress)) {
                            t.clearRect(0, 0, s, a);
                            var h, c = s / 2,
                                l = a / 2,
                                p = 0 === this.loaderstyle && this.loaderlogos.logo.complete,
                                f = 40 * o,
                                g = 0,
                                y = 80 * o;
                            if (p) {
                                var _ = this.loaderlogos.logo;
                                y = _.width * o, h = _.height * o, f = y / 2, g = h / 2, t.drawImage(_, cr.floor(c - f), cr.floor(l - g), y, h)
                            }
                            if (this.loaderstyle <= 1) l += g + (p ? 12 * o : 0), c -= f, c = cr.floor(c) + .5, l = cr.floor(l) + .5, t.fillStyle = d ? "red" : "DodgerBlue", t.fillRect(c, l, Math.floor(y * this.progress), 6 * o), t.strokeStyle = "black", t.strokeRect(c, l, y, 6 * o), t.strokeStyle = "white", t.strokeRect(c - 1 * o, l - 1 * o, y + 2 * o, 8 * o);
                            else if (2 === this.loaderstyle) {
                                t.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", t.fillStyle = d ? "#f00" : "#999", t.textBaseLine = "middle";
                                var v = Math.round(100 * this.progress) + "%",
                                    b = t.measureText ? t.measureText(v) : null,
                                    w = b ? b.width : 0;
                                t.fillText(v, c - w / 2, l)
                            }
                            this.last_progress = this.progress
                        } else if (4 === this.loaderstyle) return this.draw_c2_splash_loader(t), void(u ? u(function() {
                            n.go()
                        }) : setTimeout(function() {
                            n.go()
                        }, 16))
                    }
                    setTimeout(function() {
                        n.go()
                    }, this.isCocoonJs ? 10 : 100)
                }
            }
        };
        var y = -1,
            _ = 300,
            v = 300,
            b = "undefined" == typeof cr_is_preview ? 200 : 0,
            w = !0,
            x = !1,
            S = 0,
            T = 0,
            A = "undefined" == typeof cr_is_preview ? 3e3 : 0,
            O = null,
            k = null,
            C = 0;
        t.prototype.draw_c2_splash_loader = function(t) {
            if (!m) {
                for (var n = Math.ceil(this.width), r = Math.ceil(this.height), s = (this.devicePixelRatio, this.loaderlogos.logo), a = this.loaderlogos.powered, o = this.loaderlogos.website, h = 0; h < 4; ++h)
                    if (!s[h].complete || !a[h].complete || !o[h].complete) return;
                0 === C && (y = Date.now());
                var c, l, u = Date.now(),
                    p = !1,
                    f = t;
                w || x ? (t.clearRect(0, 0, n, r), e(n, r), f = k, p = !0, w && 1 === C && (y = Date.now())) : t.globalAlpha = 1, f.fillStyle = "#333333", f.fillRect(0, 0, n, r), this.cssHeight > 256 ? (c = cr.clamp(.22 * r, 105, .6 * n), l = .25 * c, f.drawImage(i(a, c), .5 * n - c / 2, .2 * r - l / 2, c, l), c = Math.min(.395 * r, .95 * n), l = c, f.drawImage(i(s, c), .5 * n - c / 2, .485 * r - l / 2, c, l), c = cr.clamp(.22 * r, 105, .6 * n), l = .25 * c, f.drawImage(i(o, c), .5 * n - c / 2, .868 * r - l / 2, c, l), f.fillStyle = "#3C3C3C", c = n, l = Math.max(.005 * r, 2), f.fillRect(0, .8 * r - l / 2, c, l), f.fillStyle = d ? "red" : "#E0FF65", c = n * this.progress, f.fillRect(.5 * n - c / 2, .8 * r - l / 2, c, l)) : (c = .55 * r, l = c, f.drawImage(i(s, c), .5 * n - c / 2, .45 * r - l / 2, c, l), f.fillStyle = "#3C3C3C", c = n, l = Math.max(.005 * r, 2), f.fillRect(0, .85 * r - l / 2, c, l), f.fillStyle = d ? "red" : "#E0FF65", c = n * this.progress, f.fillRect(.5 * n - c / 2, .85 * r - l / 2, c, l)), p && (w ? 0 === C ? t.globalAlpha = 0 : t.globalAlpha = Math.min((u - y) / _, 1) : x && (t.globalAlpha = Math.max(1 - (u - T) / v, 0)), t.drawImage(O, 0, 0, n, r)), w && u - y >= _ && C >= 2 && (w = !1, S = u), !w && u - S >= A && !x && this.progress >= 1 && (x = !0, T = u), (x && u - T >= v + b || "undefined" != typeof cr_is_preview && this.progress >= 1 && Date.now() - y < 500) && (m = !0, w = !1, x = !1, O = null, k = null, this.loaderlogos = null), ++C
            }
        }, t.prototype.go_loading_finished = function() {
            this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now();
            var t, e, i;
            if (this.uses_loader_layout)
                for (t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(), cr.seal(i));
            else this.isloading = !1;
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) this.layouts_by_index[t].createGlobalNonWorlds();
            if (this.fullscreen_mode >= 2) {
                var n = this.original_width / this.original_height,
                    r = this.width / this.height;
                2 !== this.fullscreen_mode && r > n || 2 === this.fullscreen_mode && r < n ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
            }
            for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW()), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, e = this.types_by_index.length; t < e; t++) i = this.types_by_index[t], i.onAppBegin && i.onAppBegin();
            document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
        }, t.prototype.tick = function(t, e, i) {
            if (this.running_layout) {
                var n = cr.performance_now(),
                    r = n;
                if (i || !this.isSuspended || t) {
                    t || (u ? this.raf_id = u(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                    var s = e || n,
                        a = this.fullscreen_mode,
                        o = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                    if ((o || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (a = this.fullscreen_scaling), a > 0) {
                        var h = window.innerWidth,
                            c = window.innerHeight;
                        this.lastWindowWidth === h && this.lastWindowHeight === c || this.setSize(h, c)
                    }
                    if (this.isDomFree || (o ? (this.firstInFullscreen || (this.fullscreenOldMarginCss = jQuery(this.canvas).css("margin") || "0", this.firstInFullscreen = !0), this.isChrome || this.isNWjs || jQuery(this.canvas).css({
                        "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                        "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                    })) : this.firstInFullscreen ? (this.isChrome || this.isNWjs || jQuery(this.canvas).css("margin", this.fullscreenOldMarginCss), this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                        var l = this.areAllTexturesAndSoundsLoaded();
                        this.loadingprogress = this.progress, l && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW())
                    }
                    this.logic(s), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || t || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - r
                }
            }
        }, t.prototype.logic = function(t) {
            var e, i, n, r, s, a, o, h, c;
            t - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3, t - this.last_fps_time >= 1e3 && (this.last_fps_time = t), this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0);
            var l = 0;
            if (0 !== this.last_tick_time) {
                var u = t - this.last_tick_time;
                u < 0 && (u = 0), l = u / 1e3, this.dt1 = l, this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
            }
            this.last_tick_time = t, this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt), this.wallTime.add(l);
            var p = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
            if (this.fullscreen_mode >= 2 || p && this.fullscreen_scaling > 0) {
                var d = this.original_width / this.original_height,
                    f = this.width / this.height,
                    g = this.fullscreen_mode;
                p && this.fullscreen_scaling > 0 && (g = this.fullscreen_scaling), 2 !== g && f > d || 2 === g && f < d ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
            } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
            this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
            var m = this.objects_to_pretick.valuesRef();
            for (e = 0, i = m.length; e < i; e++) m[e].pretick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (o = this.types_by_index[e], !o.is_family && (o.behaviors.length || o.families.length))
                    for (n = 0, r = o.instances.length; n < r; n++)
                        for (h = o.instances[n], s = 0, a = h.behavior_insts.length; s < a; s++) h.behavior_insts[s].tick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (o = this.types_by_index[e], !o.is_family && (o.behaviors.length || o.families.length))
                    for (n = 0, r = o.instances.length; n < r; n++)
                        for (h = o.instances[n], s = 0, a = h.behavior_insts.length; s < a; s++) c = h.behavior_insts[s], c.posttick && c.posttick();
            for (m = this.objects_to_tick.valuesRef(), e = 0, i = m.length; e < i; e++) m[e].tick();
            for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
            for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].hasRun = !1;
            for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), cr.clearArray(this.registered_collisions), this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, i = this.types_by_index.length; e < i; e++)
                if (o = this.types_by_index[e], !o.is_family && (o.behaviors.length || o.families.length))
                    for (n = 0, r = o.instances.length; n < r; n++) {
                        var h = o.instances[n];
                        for (s = 0, a = h.behavior_insts.length; s < a; s++) c = h.behavior_insts[s], c.tick2 && c.tick2()
                    }
                for (m = this.objects_to_tick2.valuesRef(), e = 0, i = m.length; e < i; e++) m[e].tick2();
            this.isInOnDestroy--
        }, t.prototype.onWindowBlur = function() {
            var t, e, i, n, r, s, a, o, h;
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (a = this.types_by_index[t], !a.is_family)
                    for (i = 0, n = a.instances.length; i < n; i++)
                        if (o = a.instances[i], o.onWindowBlur && o.onWindowBlur(), o.behavior_insts)
                            for (r = 0, s = o.behavior_insts.length; r < s; r++) h = o.behavior_insts[r], h.onWindowBlur && h.onWindowBlur()
        }, t.prototype.doChangeLayout = function(t) {
            var e = this.running_layout;
            this.running_layout.stopRunning();
            var i, n, r;
            if (this.glwrap)
                for (i = 0, n = this.types_by_index.length; i < n; i++) r = this.types_by_index[i], r.is_family || !r.unloadTextures || r.global && 0 !== r.instances.length || t.initial_types.indexOf(r) !== -1 || r.unloadTextures();
            e == t && cr.clearArray(this.system.waits), cr.clearArray(this.registered_collisions), this.runLayoutChangeMethods(!0), t.startRunning(), this.runLayoutChangeMethods(!1), this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
        }, t.prototype.runLayoutChangeMethods = function(t) {
            var e, i, n, r, s, a, o, h, c, l;
            for (e = 0, i = this.behaviors.length; e < i; e++) n = this.behaviors[e], t ? n.onBeforeLayoutChange && n.onBeforeLayoutChange() : n.onLayoutChange && n.onLayoutChange();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (r = this.types_by_index[e], r.global || r.plugin.singleglobal)
                    for (s = 0, a = r.instances.length; s < a; s++)
                        if (o = r.instances[s], t ? o.onBeforeLayoutChange && o.onBeforeLayoutChange() : o.onLayoutChange && o.onLayoutChange(), o.behavior_insts)
                            for (h = 0, c = o.behavior_insts.length; h < c; h++) l = o.behavior_insts[h], t ? l.onBeforeLayoutChange && l.onBeforeLayoutChange() : l.onLayoutChange && l.onLayoutChange()
        }, t.prototype.pretickMe = function(t) {
            this.objects_to_pretick.add(t)
        }, t.prototype.unpretickMe = function(t) {
            this.objects_to_pretick.remove(t)
        }, t.prototype.tickMe = function(t) {
            this.objects_to_tick.add(t)
        }, t.prototype.untickMe = function(t) {
            this.objects_to_tick.remove(t)
        }, t.prototype.tick2Me = function(t) {
            this.objects_to_tick2.add(t)
        }, t.prototype.untick2Me = function(t) {
            this.objects_to_tick2.remove(t)
        }, t.prototype.getDt = function(t) {
            return t && t.my_timescale !== -1 ? this.dt1 * t.my_timescale : this.dt
        }, t.prototype.draw = function() {
            this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
        }, t.prototype.drawGL = function() {
            this.enableFrontToBack && (this.earlyz_index = 1, this.running_layout.drawGL_earlyZPass(this.glwrap)), this.running_layout.drawGL(this.glwrap), this.glwrap.present()
        }, t.prototype.addDestroyCallback = function(t) {
            t && this.destroycallbacks.push(t)
        }, t.prototype.removeDestroyCallback = function(t) {
            cr.arrayFindRemove(this.destroycallbacks, t)
        }, t.prototype.getObjectByUID = function(t) {
            var e = t.toString();
            return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
        };
        var E = [];
        t.prototype.DestroyInstance = function(t) {
            var e, i, r = t.type,
                s = r.name,
                a = this.deathRow.hasOwnProperty(s),
                o = null;
            if (a) {
                if (o = this.deathRow[s], o.contains(t)) return
            } else o = n(), this.deathRow[s] = o; if (o.add(t), this.hasPendingInstances = !0, t.is_contained)
                for (e = 0, i = t.siblings.length; e < i; e++) this.DestroyInstance(t.siblings[e]);
            this.isInClearDeathRow && o.values_cache.push(t), this.isEndingLayout || (this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t), this.isInOnDestroy--)
        }, t.prototype.ClearDeathRow = function() {
            if (this.hasPendingInstances) {
                var t, e, i, n, r, s;
                for (this.isInClearDeathRow = !0, i = 0, r = this.createRow.length; i < r; ++i)
                    for (t = this.createRow[i], e = t.type, e.instances.push(t), n = 0, s = e.families.length; n < s; ++n) e.families[n].instances.push(t), e.families[n].stale_iids = !0;
                cr.clearArray(this.createRow), this.IterateDeathRow(), cr.wipe(this.deathRow), this.isInClearDeathRow = !1, this.hasPendingInstances = !1
            }
        }, t.prototype.IterateDeathRow = function() {
            for (var t in this.deathRow) this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
        }, t.prototype.ClearDeathRowForType = function(t) {
            var e, i, n, s, a, o, h, c, l = t.valuesRef(),
                u = l[0].type;
            for (cr.arrayRemoveAllFromObjectSet(u.instances, t), u.stale_iids = !0, 0 === u.instances.length && (u.any_instance_parallaxed = !1), e = 0, i = u.families.length; e < i; ++e) o = u.families[e], cr.arrayRemoveAllFromObjectSet(o.instances, t), o.stale_iids = !0;
            for (e = 0, i = this.system.waits.length; e < i; ++e)
                if (a = this.system.waits[e], a.sols.hasOwnProperty(u.index) && cr.arrayRemoveAllFromObjectSet(a.sols[u.index].insts, t), !u.is_family)
                    for (n = 0, s = u.families.length; n < s; ++n) o = u.families[n], a.sols.hasOwnProperty(o.index) && cr.arrayRemoveAllFromObjectSet(a.sols[o.index].insts, t);
            var p = l[0].layer;
            if (p) {
                if (p.useRenderCells)
                    for (h = p.instances, e = 0, i = h.length; e < i; ++e) c = h[e], t.contains(c) && (c.update_bbox(), p.render_grid.update(c, c.rendercells, null), c.rendercells.set(0, 0, -1, -1));
                cr.arrayRemoveAllFromObjectSet(p.instances, t), p.setZIndicesStaleFrom(0)
            }
            for (e = 0; e < l.length; ++e) this.ClearDeathRowForSingleInstance(l[e], u);
            r(t), this.redraw = !0
        }, t.prototype.ClearDeathRowForSingleInstance = function(t, e) {
            var i, n, r;
            for (i = 0, n = this.destroycallbacks.length; i < n; ++i) this.destroycallbacks[i](t);
            t.collcells && e.collision_grid.update(t, t.collcells, null);
            var s = t.layer;
            if (s && s.removeFromInstanceList(t, !0), t.behavior_insts)
                for (i = 0, n = t.behavior_insts.length; i < n; ++i) r = t.behavior_insts[i], r.onDestroy && r.onDestroy(), r.behavior.my_instances.remove(t);
            this.objects_to_pretick.remove(t), this.objects_to_tick.remove(t), this.objects_to_tick2.remove(t), t.onDestroy && t.onDestroy(), this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()], this.objectcount--, e.deadCache.length < 100 && e.deadCache.push(t)
        }, t.prototype.createInstance = function(t, e, i, n) {
            if (t.is_family) {
                var r = cr.floor(Math.random() * t.members.length);
                return this.createInstance(t.members[r], e, i, n)
            }
            return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, n, !1) : null
        };
        var P = [];
        t.prototype.createInstanceFromInit = function(t, e, i, n, r, s) {
            var a, o, h, c, l;
            if (!t) return null;
            var u = this.types_by_index[t[1]],
                p = u.plugin.is_world;
            if (this.isloading && p && !u.isOnLoaderLayout) return null;
            if (p && !this.glwrap && 11 === t[0][11]) return null;
            var d = e;
            p || (e = null);
            var f;
            for (u.deadCache.length ? (f = u.deadCache.pop(), f.recycled = !0, u.plugin.Instance.call(f, u)) : (f = new u.plugin.Instance(u), f.recycled = !1), !i || s || this.objectsByUid.hasOwnProperty(t[2].toString()) ? f.uid = this.next_uid++ : f.uid = t[2], this.objectsByUid[f.uid.toString()] = f, f.puid = this.next_puid++, f.iid = u.instances.length, a = 0, o = this.createRow.length; a < o; ++a) this.createRow[a].type === u && f.iid++;
            f.get_iid = cr.inst_get_iid, f.toString = cr.inst_toString;
            var g = t[3];
            if (f.recycled) cr.wipe(f.extra);
            else {
                if (f.extra = {}, "undefined" != typeof cr_is_preview)
                    for (f.instance_var_names = [], f.instance_var_names.length = g.length, a = 0, o = g.length; a < o; a++) f.instance_var_names[a] = g[a][1];
                f.instance_vars = [], f.instance_vars.length = g.length
            }
            for (a = 0, o = g.length; a < o; a++) f.instance_vars[a] = g[a][0];
            if (p) {
                var m = t[0];
                if (f.x = cr.is_undefined(n) ? m[0] : n, f.y = cr.is_undefined(r) ? m[1] : r, f.z = m[2], f.width = m[3], f.height = m[4], f.depth = m[5], f.angle = m[6], f.opacity = m[7], f.hotspotX = m[8], f.hotspotY = m[9], f.blend_mode = m[10], l = m[11], !this.glwrap && u.effect_types.length && (f.blend_mode = l), f.compositeOp = cr.effectToCompositeOp(f.blend_mode), this.gl && cr.setGLBlend(f, f.blend_mode, this.gl), f.recycled) {
                    for (a = 0, o = m[12].length; a < o; a++)
                        for (h = 0, c = m[12][a].length; h < c; h++) f.effect_params[a][h] = m[12][a][h];
                    f.bbox.set(0, 0, 0, 0), f.collcells.set(0, 0, -1, -1), f.rendercells.set(0, 0, -1, -1), f.bquad.set_from_rect(f.bbox), cr.clearArray(f.bbox_changed_callbacks)
                } else {
                    for (f.effect_params = m[12].slice(0), a = 0, o = f.effect_params.length; a < o; a++) f.effect_params[a] = m[12][a].slice(0);
                    f.active_effect_types = [], f.active_effect_flags = [], f.active_effect_flags.length = u.effect_types.length, f.bbox = new cr.rect(0, 0, 0, 0), f.collcells = new cr.rect(0, 0, (-1), (-1)), f.rendercells = new cr.rect(0, 0, (-1), (-1)), f.bquad = new cr.quad, f.bbox_changed_callbacks = [], f.set_bbox_changed = cr.set_bbox_changed, f.add_bbox_changed_callback = cr.add_bbox_changed_callback, f.contains_pt = cr.inst_contains_pt, f.update_bbox = cr.update_bbox, f.update_render_cell = cr.update_render_cell, f.update_collision_cell = cr.update_collision_cell, f.get_zindex = cr.inst_get_zindex
                }
                for (f.tilemap_exists = !1, f.tilemap_width = 0, f.tilemap_height = 0, f.tilemap_data = null, 14 === m.length && (f.tilemap_exists = !0, f.tilemap_width = m[13][0], f.tilemap_height = m[13][1], f.tilemap_data = m[13][2]), a = 0, o = u.effect_types.length; a < o; a++) f.active_effect_flags[a] = !0;
                f.shaders_preserve_opaqueness = !0, f.updateActiveEffects = cr.inst_updateActiveEffects, f.updateActiveEffects(), f.uses_shaders = !!f.active_effect_types.length, f.bbox_changed = !0, f.cell_changed = !0, u.any_cell_changed = !0, f.visible = !0, f.my_timescale = -1, f.layer = e, f.zindex = e.instances.length, f.earlyz_index = 0, "undefined" == typeof f.collision_poly && (f.collision_poly = null), f.collisionsEnabled = !0, this.redraw = !0
            }
            var y, _;
            for (cr.clearArray(P), a = 0, o = u.families.length; a < o; a++) P.push.apply(P, u.families[a].behaviors);
            if (P.push.apply(P, u.behaviors), f.recycled)
                for (a = 0, o = P.length; a < o; a++) {
                    var v = P[a];
                    for (_ = f.behavior_insts[a], _.recycled = !0, v.behavior.Instance.call(_, v, f), y = t[4][a], h = 0, c = y.length; h < c; h++) _.properties[h] = y[h];
                    _.onCreate(), v.behavior.my_instances.add(f)
                } else
                    for (f.behavior_insts = [], a = 0, o = P.length; a < o; a++) {
                        var v = P[a],
                            _ = new v.behavior.Instance(v, f);
                        _.recycled = !1, _.properties = t[4][a].slice(0), _.onCreate(), cr.seal(_), f.behavior_insts.push(_), v.behavior.my_instances.add(f)
                    }
            if (y = t[5], f.recycled)
                for (a = 0, o = y.length; a < o; a++) f.properties[a] = y[a];
            else f.properties = y.slice(0); if (this.createRow.push(f), this.hasPendingInstances = !0, e && (e.appendToInstanceList(f, !0), 1 === e.parallaxX && 1 === e.parallaxY || (u.any_instance_parallaxed = !0)), this.objectcount++, u.is_contained) {
                if (f.is_contained = !0, f.recycled ? cr.clearArray(f.siblings) : f.siblings = [], !i && !s) {
                    for (a = 0, o = u.container.length; a < o; a++)
                        if (u.container[a] !== u) {
                            if (!u.container[a].default_instance) return null;
                            f.siblings.push(this.createInstanceFromInit(u.container[a].default_instance, d, !1, p ? f.x : n, p ? f.y : r, !0))
                        }
                    for (a = 0, o = f.siblings.length; a < o; a++)
                        for (f.siblings[a].siblings.push(f), h = 0; h < o; h++) a !== h && f.siblings[a].siblings.push(f.siblings[h])
                }
            } else f.is_contained = !1, f.siblings = null;
            for (f.onCreate(), f.recycled || cr.seal(f), a = 0, o = f.behavior_insts.length; a < o; a++) f.behavior_insts[a].postCreate && f.behavior_insts[a].postCreate();
            return f
        }, t.prototype.getLayerByName = function(t) {
            var e, i;
            for (e = 0, i = this.running_layout.layers.length; e < i; e++) {
                var n = this.running_layout.layers[e];
                if (cr.equals_nocase(n.name, t)) return n
            }
            return null
        }, t.prototype.getLayerByNumber = function(t) {
            return t = cr.floor(t), t < 0 && (t = 0), t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1), this.running_layout.layers[t]
        }, t.prototype.getLayer = function(t) {
            return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
        }, t.prototype.clearSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].getCurrentSol().select_all = !0
        }, t.prototype.pushCleanSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCleanSol()
        }, t.prototype.pushCopySol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCopySol()
        }, t.prototype.popSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].popSol()
        }, t.prototype.updateAllCells = function(t) {
            if (t.any_cell_changed) {
                var e, i, n = t.instances;
                for (e = 0, i = n.length; e < i; ++e) n[e].update_collision_cell();
                var r = this.createRow;
                for (e = 0, i = r.length; e < i; ++e) r[e].type === t && r[e].update_collision_cell();
                t.any_cell_changed = !1
            }
        }, t.prototype.getCollisionCandidates = function(t, e, i, n) {
            var r, s, a, o = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
            if (e.is_family)
                for (r = 0, s = e.members.length; r < s; ++r) a = e.members[r], o || a.any_instance_parallaxed ? cr.appendArray(n, a.instances) : (this.updateAllCells(a), a.collision_grid.queryRange(i, n));
            else o || e.any_instance_parallaxed ? cr.appendArray(n, e.instances) : (this.updateAllCells(e), e.collision_grid.queryRange(i, n))
        }, t.prototype.getTypesCollisionCandidates = function(t, e, i, n) {
            var r, s;
            for (r = 0, s = e.length; r < s; ++r) this.getCollisionCandidates(t, e[r], i, n)
        }, t.prototype.getSolidCollisionCandidates = function(t, e, i) {
            var n = this.getSolidBehavior();
            return n ? void this.getTypesCollisionCandidates(t, n.my_types, e, i) : null
        }, t.prototype.getJumpthruCollisionCandidates = function(t, e, i) {
            var n = this.getJumpthruBehavior();
            return n ? void this.getTypesCollisionCandidates(t, n.my_types, e, i) : null
        }, t.prototype.testAndSelectCanvasPointOverlap = function(t, e, i, n) {
            var r, s, a, o, h, c, l, u = t.getCurrentSol(),
                p = this.getCurrentEventStack().current_event.orblock;
            if (u.select_all)
                for (n || (u.select_all = !1, cr.clearArray(u.instances)), r = 0, o = t.instances.length; r < o; r++)
                    if (a = t.instances[r], a.update_bbox(), h = a.layer.canvasToLayer(e, i, !0), c = a.layer.canvasToLayer(e, i, !1), a.contains_pt(h, c)) {
                        if (n) return !1;
                        u.instances.push(a)
                    } else p && u.else_instances.push(a);
            else {
                for (s = 0, l = p ? u.else_instances : u.instances, r = 0, o = l.length; r < o; r++)
                    if (a = l[r], a.update_bbox(), h = a.layer.canvasToLayer(e, i, !0), c = a.layer.canvasToLayer(e, i, !1), a.contains_pt(h, c)) {
                        if (n) return !1;
                        p ? u.instances.push(a) : (u.instances[s] = u.instances[r], s++)
                    }
                n || (l.length = s)
            }
            return t.applySolToContainer(), !!n || u.hasObjects()
        }, t.prototype.testOverlap = function(t, e) {
            if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled)) return !1;
            t.update_bbox(), e.update_bbox();
            var i, n, r, s, a, o, h, c, l, u, p = t.layer,
                d = e.layer,
                f = p !== d && (p.parallaxX !== d.parallaxX || d.parallaxY !== d.parallaxY || p.scale !== d.scale || p.angle !== d.angle || p.zoomRate !== d.zoomRate);
            if (f) {
                for (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly, c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly2, i = 0, n = l.pts_count; i < n; i++) r = 2 * i, s = r + 1, a = l.pts_cache[r], o = l.pts_cache[s], l.pts_cache[r] = p.layerToCanvas(a + t.x, o + t.y, !0), l.pts_cache[s] = p.layerToCanvas(a + t.x, o + t.y, !1);
                for (l.update_bbox(), i = 0, n = u.pts_count; i < n; i++) r = 2 * i, s = r + 1, a = u.pts_cache[r], o = u.pts_cache[s], u.pts_cache[r] = d.layerToCanvas(a + e.x, o + e.y, !0), u.pts_cache[s] = d.layerToCanvas(a + e.x, o + e.y, !1);
                return u.update_bbox(), l.intersects_poly(u, 0, 0)
            }
            return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), !h && !c || (h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), l = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly), c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), u = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly), l.intersects_poly(u, e.x - t.x, e.y - t.y))))))
        };
        var I = new cr.quad,
            L = new cr.rect(0, 0, 0, 0),
            R = [];
        t.prototype.testTilemapOverlap = function(t, e) {
            var i, n, r, s, a = e.bbox,
                o = t.x,
                h = t.y;
            t.getCollisionRectCandidates(a, R);
            var c = R,
                l = e.collision_poly && !e.collision_poly.is_empty();
            for (i = 0, n = c.length; i < n; ++i)
                if (r = c[i], s = r.rc, a.intersects_rect_off(s, o, h) && (I.set_from_rect(s), I.offset(o, h), I.intersects_quad(e.bquad)))
                    if (l) {
                        if (e.collision_poly.cache_poly(e.width, e.height, e.angle), r.poly) {
                            if (r.poly.intersects_poly(e.collision_poly, e.x - (o + s.left), e.y - (h + s.top))) return cr.clearArray(R), !0
                        } else if (this.temp_poly.set_from_quad(I, 0, 0, s.right - s.left, s.bottom - s.top), this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y)) return cr.clearArray(R), !0
                    } else {
                        if (!r.poly) return cr.clearArray(R), !0;
                        if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height), r.poly.intersects_poly(this.temp_poly, -(o + s.left), -(h + s.top))) return cr.clearArray(R), !0
                    }
            return cr.clearArray(R), !1
        }, t.prototype.testRectOverlap = function(t, e) {
            if (!e || !e.collisionsEnabled) return !1;
            e.update_bbox();
            var i;
            e.layer;
            if (!e.bbox.intersects_rect(t)) return !1;
            if (e.tilemap_exists) {
                e.getCollisionRectCandidates(t, R);
                var n, r, s, a, o = R,
                    h = e.x,
                    c = e.y;
                for (n = 0, r = o.length; n < r; ++n)
                    if (s = o[n], a = s.rc, t.intersects_rect_off(a, h, c)) {
                        if (!s.poly) return cr.clearArray(R), !0;
                        if (this.temp_poly.set_from_rect(t, 0, 0), s.poly.intersects_poly(this.temp_poly, -(h + a.left), -(c + a.top))) return cr.clearArray(R), !0
                    }
                return cr.clearArray(R), !1
            }
            return I.set_from_rect(t), !!e.bquad.intersects_quad(I) && (!(i = e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle), I.offset(-t.left, -t.top), this.temp_poly.set_from_quad(I, 0, 0, 1, 1), e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
        }, t.prototype.testSegmentOverlap = function(t, e, i, n, r) {
            if (!r || !r.collisionsEnabled) return !1;
            r.update_bbox();
            var s;
            r.layer;
            if (L.set(cr.min(t, i), cr.min(e, n), cr.max(t, i), cr.max(e, n)), !r.bbox.intersects_rect(L)) return !1;
            if (r.tilemap_exists) {
                r.getCollisionRectCandidates(L, R);
                var a, o, h, c, l = R,
                    u = r.x,
                    p = r.y;
                for (a = 0, o = l.length; a < o; ++a)
                    if (h = l[a], c = h.rc, L.intersects_rect_off(c, u, p) && (I.set_from_rect(c), I.offset(u, p), I.intersects_segment(t, e, i, n))) {
                        if (!h.poly) return cr.clearArray(R), !0;
                        if (h.poly.intersects_segment(u + c.left, p + c.top, t, e, i, n)) return cr.clearArray(R), !0
                    }
                return cr.clearArray(R), !1
            }
            return !!r.bquad.intersects_segment(t, e, i, n) && (!(s = r.collision_poly && !r.collision_poly.is_empty()) || (r.collision_poly.cache_poly(r.width, r.height, r.angle), r.collision_poly.intersects_segment(r.x, r.y, t, e, i, n)))
        }, t.prototype.typeHasBehavior = function(t, e) {
            if (!e) return !1;
            var i, n, r, s, a;
            for (i = 0, n = t.behaviors.length; i < n; i++)
                if (t.behaviors[i].behavior instanceof e) return !0;
            if (!t.is_family)
                for (i = 0, n = t.families.length; i < n; i++)
                    for (a = t.families[i], r = 0, s = a.behaviors.length; r < s; r++)
                        if (a.behaviors[r].behavior instanceof e) return !0;
            return !1
        }, t.prototype.typeHasNoSaveBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.NoSave)
        }, t.prototype.typeHasPersistBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.Persist)
        }, t.prototype.getSolidBehavior = function() {
            return this.solidBehavior
        }, t.prototype.getJumpthruBehavior = function() {
            return this.jumpthruBehavior
        };
        var F = [];
        t.prototype.testOverlapSolid = function(t) {
            var e, i, n;
            for (t.update_bbox(), this.getSolidCollisionCandidates(t.layer, t.bbox, F), e = 0, i = F.length; e < i; ++e)
                if (n = F[e], n.extra.solidEnabled && this.testOverlap(t, n)) return cr.clearArray(F), n;
            return cr.clearArray(F), null
        }, t.prototype.testRectOverlapSolid = function(t) {
            var e, i, n;
            for (this.getSolidCollisionCandidates(null, t, F), e = 0, i = F.length; e < i; ++e)
                if (n = F[e], n.extra.solidEnabled && this.testRectOverlap(t, n)) return cr.clearArray(F), n;
            return cr.clearArray(F), null
        };
        var j = [];
        t.prototype.testOverlapJumpThru = function(t, e) {
            var i = null;
            e && (i = j, cr.clearArray(i)), t.update_bbox(), this.getJumpthruCollisionCandidates(t.layer, t.bbox, F);
            var n, r, s;
            for (n = 0, r = F.length; n < r; ++n)
                if (s = F[n], s.extra.jumpthruEnabled && this.testOverlap(t, s)) {
                    if (!e) return cr.clearArray(F), s;
                    i.push(s)
                }
            return cr.clearArray(F), i
        }, t.prototype.pushOutSolid = function(t, e, i, n, r, s) {
            var a, o = n || 50,
                h = t.x,
                c = t.y,
                l = null,
                u = null;
            for (a = 0; a < o; a++)
                if (t.x = h + e * a, t.y = c + i * a, t.set_bbox_changed(), !this.testOverlap(t, l) && (l = this.testOverlapSolid(t), l && (u = l), !l && (r && (l = s ? this.testOverlap(t, s) ? s : null : this.testOverlapJumpThru(t), l && (u = l)), !l))) return u && this.pushInFractional(t, e, i, u, 16), !0;
            return t.x = h, t.y = c, t.set_bbox_changed(), !1
        }, t.prototype.pushOut = function(t, e, i, n, r) {
            var s, a = n || 50,
                o = t.x,
                h = t.y;
            for (s = 0; s < a; s++)
                if (t.x = o + e * s, t.y = h + i * s, t.set_bbox_changed(), !this.testOverlap(t, r)) return !0;
            return t.x = o, t.y = h, t.set_bbox_changed(), !1
        }, t.prototype.pushInFractional = function(t, e, i, n, r) {
            for (var s, a = 2, o = !1, h = !1, c = t.x, l = t.y; a <= r;) s = 1 / a, a *= 2, t.x += e * s * (o ? 1 : -1), t.y += i * s * (o ? 1 : -1), t.set_bbox_changed(), this.testOverlap(t, n) ? (o = !0, h = !0) : (o = !1, h = !1, c = t.x, l = t.y);
            h && (t.x = c, t.y = l, t.set_bbox_changed())
        }, t.prototype.pushOutSolidNearest = function(t, e) {
            var i = cr.is_undefined(e) ? 100 : e,
                n = 0,
                r = t.x,
                s = t.y,
                a = 0,
                o = 0,
                h = 0,
                c = this.testOverlapSolid(t);
            if (!c) return !0;
            for (; n <= i;) {
                switch (a) {
                    case 0:
                        o = 0, h = -1, n++;
                        break;
                    case 1:
                        o = 1, h = -1;
                        break;
                    case 2:
                        o = 1, h = 0;
                        break;
                    case 3:
                        o = 1, h = 1;
                        break;
                    case 4:
                        o = 0, h = 1;
                        break;
                    case 5:
                        o = -1, h = 1;
                        break;
                    case 6:
                        o = -1, h = 0;
                        break;
                    case 7:
                        o = -1, h = -1
                }
                if (a = (a + 1) % 8, t.x = cr.floor(r + o * n), t.y = cr.floor(s + h * n), t.set_bbox_changed(), !this.testOverlap(t, c) && (c = this.testOverlapSolid(t), !c)) return !0
            }
            return t.x = r, t.y = s, t.set_bbox_changed(), !1
        }, t.prototype.registerCollision = function(t, e) {
            t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
        }, t.prototype.checkRegisteredCollision = function(t, e) {
            var i, n, r;
            for (i = 0, n = this.registered_collisions.length; i < n; i++)
                if (r = this.registered_collisions[i], r[0] == t && r[1] == e || r[0] == e && r[1] == t) return !0;
            return !1
        }, t.prototype.calculateSolidBounceAngle = function(t, e, i, n) {
            var r = t.x,
                s = t.y,
                a = cr.max(10, cr.distanceTo(e, i, r, s)),
                o = cr.angleTo(e, i, r, s),
                h = n || this.testOverlapSolid(t);
            if (!h) return cr.clamp_angle(o + cr.PI);
            var c, l, u, p, d = h,
                f = cr.to_radians(5);
            for (c = 1; c < 36; c++)
                if (l = o - c * f, t.x = e + Math.cos(l) * a, t.y = i + Math.sin(l) * a, t.set_bbox_changed(), !this.testOverlap(t, d) && (d = n ? null : this.testOverlapSolid(t), !d)) {
                    u = l;
                    break
                }
            36 === c && (u = cr.clamp_angle(o + cr.PI));
            var d = h;
            for (c = 1; c < 36; c++)
                if (l = o + c * f, t.x = e + Math.cos(l) * a, t.y = i + Math.sin(l) * a, t.set_bbox_changed(), !this.testOverlap(t, d) && (d = n ? null : this.testOverlapSolid(t), !d)) {
                    p = l;
                    break
                }
            if (36 === c && (p = cr.clamp_angle(o + cr.PI)), t.x = r, t.y = s, t.set_bbox_changed(), p === u) return p;
            var g, m = cr.angleDiff(p, u) / 2;
            g = cr.angleClockwise(p, u) ? cr.clamp_angle(u + m + cr.PI) : cr.clamp_angle(p + m);
            var y = Math.cos(o),
                _ = Math.sin(o),
                v = Math.cos(g),
                b = Math.sin(g),
                w = y * v + _ * b,
                x = y - 2 * w * v,
                S = _ - 2 * w * b;
            return cr.angleTo(0, 0, x, S)
        };
        var N = -1;
        t.prototype.trigger = function(t, e, i) {
            if (!this.running_layout) return !1;
            var n = this.running_layout.event_sheet;
            if (!n) return !1;
            var r, s, a, o = !1;
            N++;
            var h = n.deep_includes;
            for (s = 0, a = h.length; s < a; ++s) r = this.triggerOnSheet(t, e, h[s], i), o = o || r;
            return r = this.triggerOnSheet(t, e, n, i), o = o || r, N--, o
        }, t.prototype.triggerOnSheet = function(t, e, i, n) {
            var r, s, a, o, h = !1;
            if (e)
                for (a = this.triggerOnSheetForTypeName(t, e, e.type.name, i, n), h = h || a, o = e.type.families, r = 0, s = o.length; r < s; ++r) a = this.triggerOnSheetForTypeName(t, e, o[r].name, i, n), h = h || a;
            else a = this.triggerOnSheetForTypeName(t, e, "system", i, n), h = h || a;
            return h
        }, t.prototype.triggerOnSheetForTypeName = function(t, e, i, n, r) {
            var s, a, o, h, c = !1,
                l = !1,
                u = "undefined" != typeof r,
                p = u ? n.fasttriggers : n.triggers,
                d = p[i];
            if (!d) return c;
            var f = null;
            for (s = 0, a = d.length; s < a; ++s)
                if (d[s].method == t) {
                    f = d[s].evs;
                    break
                }
            if (!f) return c;
            var g;
            if (g = u ? f[r] : f, !g) return null;
            for (s = 0, a = g.length; s < a; s++) o = g[s][0], h = g[s][1], l = this.executeSingleTrigger(e, i, o, h), c = c || l;
            return c
        }, t.prototype.executeSingleTrigger = function(t, e, i, n) {
            var r, s, a = !1;
            this.trigger_depth++;
            var o = this.getCurrentEventStack().current_event;
            o && this.pushCleanSol(o.solModifiersIncludingParents);
            var h = this.trigger_depth > 1;
            this.pushCleanSol(i.solModifiersIncludingParents), h && this.pushLocalVarStack();
            var c = this.pushEventStack(i);
            if (c.current_event = i, t) {
                var l = this.types[e].getCurrentSol();
                l.select_all = !1, cr.clearArray(l.instances), l.instances[0] = t, this.types[e].applySolToContainer()
            }
            var u = !0;
            if (i.parent) {
                for (var p = c.temp_parents_arr, d = i.parent; d;) p.push(d), d = d.parent;
                for (p.reverse(), r = 0, s = p.length; r < s; r++)
                    if (!p[r].run_pretrigger()) {
                        u = !1;
                        break
                    }
            }
            return u && (this.execcount++, i.orblock ? i.run_orblocktrigger(n) : i.run(), a = a || c.last_event_true), this.popEventStack(), h && this.popLocalVarStack(), this.popSol(i.solModifiersIncludingParents), o && this.popSol(o.solModifiersIncludingParents), this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === N && !this.isRunningEvents && this.ClearDeathRow(), this.trigger_depth--, a
        }, t.prototype.getCurrentCondition = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.conditions[t.cndindex]
        }, t.prototype.getCurrentConditionObjectType = function() {
            var t = this.getCurrentCondition();
            return t.type
        }, t.prototype.isCurrentConditionFirst = function() {
            var t = this.getCurrentEventStack();
            return 0 === t.cndindex
        }, t.prototype.getCurrentAction = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.actions[t.actindex]
        }, t.prototype.pushLocalVarStack = function() {
            this.localvar_stack_index++, this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
        }, t.prototype.popLocalVarStack = function() {
            this.localvar_stack_index--
        }, t.prototype.getCurrentLocalVarStack = function() {
            return this.localvar_stack[this.localvar_stack_index]
        }, t.prototype.pushEventStack = function(t) {
            this.event_stack_index++, this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
            var e = this.getCurrentEventStack();
            return e.reset(t), e
        }, t.prototype.popEventStack = function() {
            this.event_stack_index--
        }, t.prototype.getCurrentEventStack = function() {
            return this.event_stack[this.event_stack_index]
        }, t.prototype.pushLoopStack = function(t) {
            this.loop_stack_index++, this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
                name: t,
                index: 0,
                stopped: !1
            }));
            var e = this.getCurrentLoop();
            return e.name = t, e.index = 0, e.stopped = !1, e
        }, t.prototype.popLoopStack = function() {
            this.loop_stack_index--
        }, t.prototype.getCurrentLoop = function() {
            return this.loop_stack[this.loop_stack_index]
        }, t.prototype.getEventVariableByName = function(t, e) {
            for (var i, n, r, s, a, o; e;) {
                for (i = 0, n = e.subevents.length; i < n; i++)
                    if (o = e.subevents[i], o instanceof cr.eventvariable && cr.equals_nocase(t, o.name)) return o;
                e = e.parent
            }
            for (i = 0, n = this.eventsheets_by_index.length; i < n; i++)
                for (a = this.eventsheets_by_index[i], r = 0, s = a.events.length; r < s; r++)
                    if (o = a.events[r], o instanceof cr.eventvariable && cr.equals_nocase(t, o.name)) return o;
            return null
        }, t.prototype.getLayoutBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layouts_by_index.length; e < i; e++)
                if (this.layouts_by_index[e].sid === t) return this.layouts_by_index[e];
            return null
        }, t.prototype.getObjectTypeBySid = function(t) {
            var e, i;
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (this.types_by_index[e].sid === t) return this.types_by_index[e];
            return null
        }, t.prototype.getGroupBySid = function(t) {
            var e, i;
            for (e = 0, i = this.allGroups.length; e < i; e++)
                if (this.allGroups[e].sid === t) return this.allGroups[e];
            return null
        }, t.prototype.doCanvasSnapshot = function(t, e) {
            this.snapshotCanvas = [t, e], this.redraw = !0
        }, t.prototype.signalContinuousPreview = function() {
            this.signalledContinuousPreview = !0
        }, t.prototype.handleSaveLoad = function() {
            var t = this,
                e = this.saveToSlot,
                i = this.lastSaveJson,
                n = this.loadFromSlot,
                r = !1;
            if (this.signalledContinuousPreview && (r = !0, e = "__c2_continuouspreview", this.signalledContinuousPreview = !1), e.length) {
                if (this.ClearDeathRow(), i = this.saveToJSONString(), s() && !this.isCocoonJs) o(e, i, function() {
                    cr.logexport("Saved state to IndexedDB storage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", r && c()
                }, function(n) {
                    try {
                        localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", r && c()
                    } catch (s) {
                        cr.logexport("Failed to save game state: " + n + "; " + s), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                    }
                });
                else try {
                    localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", r && c()
                } catch (a) {
                    cr.logexport("Error saving to WebStorage: " + a), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
                this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null
            }
            if (n.length) {
                if (s() && !this.isCocoonJs) h(n, function(e) {
                    e ? (t.loadFromJson = e, cr.logexport("Loaded state from IndexedDB storage (" + t.loadFromJson.length + " bytes)")) : (t.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)")), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }, function(e) {
                    t.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)"), t.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                });
                else {
                    try {
                        this.loadFromJson = localStorage.getItem("__c2save_" + n) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                    } catch (a) {
                        this.loadFromJson = null
                    }
                    this.suspendDrawing = !1, t.loadFromJson || (t.loadFromJson = null, t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }
                this.loadFromSlot = "", this.saveToSlot = ""
            }
            if (null !== this.loadFromJson) {
                this.ClearDeathRow();
                var l = this.loadFromJSONString(this.loadFromJson);
                l ? (this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "") : t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null), this.loadFromJson = null
            }
        }, t.prototype.saveToJSONString = function() {
            var t, e, i, n, r, s, a, o, h, c, u, p, d = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.kahanTime.sum,
                    walltime: this.wallTime.sum,
                    timescale: this.timescale,
                    tickcount: this.tickcount,
                    execcount: this.execcount,
                    next_uid: this.next_uid,
                    running_layout: this.running_layout.sid,
                    start_time_offset: Date.now() - this.start_time
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (r = this.types_by_index[t], !r.is_family && !this.typeHasNoSaveBehavior(r)) {
                    for (a = {
                        instances: []
                    }, cr.hasAnyOwnProperty(r.extra) && (a.ex = l(r.extra)), i = 0, n = r.instances.length; i < n; i++) a.instances.push(this.saveInstanceToJSON(r.instances[i]));
                    d.types[r.sid.toString()] = a
                }
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) s = this.layouts_by_index[t], d.layouts[s.sid.toString()] = s.saveToJSON();
            var f = d.events.groups;
            for (t = 0, e = this.allGroups.length; t < e; t++) o = this.allGroups[t], f[o.sid.toString()] = this.groups_by_name[o.group_name].group_active;
            var g = d.events.cnds;
            for (p in this.cndsBySid) this.cndsBySid.hasOwnProperty(p) && (h = this.cndsBySid[p], cr.hasAnyOwnProperty(h.extra) && (g[p] = {
                ex: l(h.extra)
            }));
            var m = d.events.acts;
            for (p in this.actsBySid) this.actsBySid.hasOwnProperty(p) && (c = this.actsBySid[p], cr.hasAnyOwnProperty(c.extra) && (m[p] = {
                ex: l(c.extra)
            }));
            var y = d.events.vars;
            for (p in this.varsBySid) this.varsBySid.hasOwnProperty(p) && (u = this.varsBySid[p], u.is_constant || u.parent && !u.is_static || (y[p] = u.data));
            return d.system = this.system.saveToJSON(), JSON.stringify(d)
        }, t.prototype.refreshUidMap = function() {
            var t, e, i, n, r, s;
            for (this.objectsByUid = {}, t = 0, e = this.types_by_index.length; t < e; t++)
                if (i = this.types_by_index[t], !i.is_family)
                    for (n = 0, r = i.instances.length; n < r; n++) s = i.instances[n], this.objectsByUid[s.uid.toString()] = s
        }, t.prototype.loadFromJSONString = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (i) {
                return !1
            }
            if (!e.c2save) return !1;
            if (e.version > 1) return !1;
            this.isLoadingState = !0;
            var n = e.rt;
            this.kahanTime.reset(), this.kahanTime.sum = n.time, this.wallTime.reset(), this.wallTime.sum = n.walltime || 0, this.timescale = n.timescale, this.tickcount = n.tickcount, this.execcount = n.execcount, this.start_time = Date.now() - n.start_time_offset;
            var r = n.running_layout;
            if (r !== this.running_layout.sid) {
                var s = this.getLayoutBySid(r);
                if (!s) return;
                this.doChangeLayout(s)
            }
            var a, o, h, c, l, u, p, d, f, g, m, y, _, v, b, w, x, S = e.types;
            for (p in S)
                if (S.hasOwnProperty(p)) {
                    if (d = this.getObjectTypeBySid(parseInt(p, 10)), !d || d.is_family || this.typeHasNoSaveBehavior(d)) continue;
                    for (S[p].ex ? d.extra = S[p].ex : cr.wipe(d.extra), f = d.instances, g = S[p].instances, a = 0, o = cr.min(f.length, g.length); a < o; a++) this.loadInstanceFromJSON(f[a], g[a]);
                    for (a = g.length, o = f.length; a < o; a++) this.DestroyInstance(f[a]);
                    for (a = f.length, o = g.length; a < o; a++) v = null, d.plugin.is_world && !(v = this.running_layout.getLayerBySid(g[a].w.l)) || (m = this.createInstanceFromInit(d.default_instance, v, !1, 0, 0, !0), this.loadInstanceFromJSON(m, g[a]));
                    d.stale_iids = !0
                }
            this.ClearDeathRow(), this.refreshUidMap();
            var T = e.layouts;
            for (p in T)
                if (T.hasOwnProperty(p)) {
                    if (_ = this.getLayoutBySid(parseInt(p, 10)), !_) continue;
                    _.loadFromJSON(T[p])
                }
            var A = e.events.groups;
            for (p in A) A.hasOwnProperty(p) && (b = this.getGroupBySid(parseInt(p, 10)), b && this.groups_by_name[b.group_name] && this.groups_by_name[b.group_name].setGroupActive(A[p]));
            var O = e.events.cnds;
            for (p in this.cndsBySid) this.cndsBySid.hasOwnProperty(p) && (O.hasOwnProperty(p) ? this.cndsBySid[p].extra = O[p].ex : this.cndsBySid[p].extra = {});
            var k = e.events.acts;
            for (p in this.actsBySid) this.actsBySid.hasOwnProperty(p) && (k.hasOwnProperty(p) ? this.actsBySid[p].extra = k[p].ex : this.actsBySid[p].extra = {});
            var C = e.events.vars;
            for (p in C) C.hasOwnProperty(p) && this.varsBySid.hasOwnProperty(p) && (this.varsBySid[p].data = C[p]);
            for (this.next_uid = n.next_uid, this.isLoadingState = !1, a = 0, o = this.fireOnCreateAfterLoad.length; a < o; ++a) m = this.fireOnCreateAfterLoad[a], this.trigger(Object.getPrototypeOf(m.type.plugin).cnds.OnCreated, m);
            for (cr.clearArray(this.fireOnCreateAfterLoad), this.system.loadFromJSON(e.system), a = 0, o = this.types_by_index.length; a < o; a++)
                if (d = this.types_by_index[a], !d.is_family && !this.typeHasNoSaveBehavior(d))
                    for (h = 0, c = d.instances.length; h < c; h++) {
                        if (m = d.instances[h], d.is_contained)
                            for (w = m.get_iid(), cr.clearArray(m.siblings), l = 0, u = d.container.length; l < u; l++) x = d.container[l], d !== x && m.siblings.push(x.instances[w]);
                        if (m.afterLoad && m.afterLoad(), m.behavior_insts)
                            for (l = 0, u = m.behavior_insts.length; l < u; l++) y = m.behavior_insts[l], y.afterLoad && y.afterLoad()
                    }
                return this.redraw = !0, !0
        }, t.prototype.saveInstanceToJSON = function(t, e) {
            var i, n, r, s, a, o = t.type,
                h = o.plugin,
                c = {};
            if (e ? c.c2 = !0 : c.uid = t.uid, cr.hasAnyOwnProperty(t.extra) && (c.ex = l(t.extra)), t.instance_vars && t.instance_vars.length)
                for (c.ivs = {}, i = 0, n = t.instance_vars.length; i < n; i++) c.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
            if (h.is_world) {
                if (r = {
                    x: t.x,
                    y: t.y,
                    w: t.width,
                    h: t.height,
                    l: t.layer.sid,
                    zi: t.get_zindex()
                }, 0 !== t.angle && (r.a = t.angle), 1 !== t.opacity && (r.o = t.opacity), .5 !== t.hotspotX && (r.hX = t.hotspotX), .5 !== t.hotspotY && (r.hY = t.hotspotY), 0 !== t.blend_mode && (r.bm = t.blend_mode), t.visible || (r.v = t.visible), t.collisionsEnabled || (r.ce = t.collisionsEnabled), t.my_timescale !== -1 && (r.mts = t.my_timescale), o.effect_types.length)
                    for (r.fx = [], i = 0, n = o.effect_types.length; i < n; i++) a = o.effect_types[i], r.fx.push({
                        name: a.name,
                        active: t.active_effect_flags[a.index],
                        params: t.effect_params[a.index]
                    });
                c.w = r
            }
            if (t.behavior_insts && t.behavior_insts.length)
                for (c.behs = {}, i = 0, n = t.behavior_insts.length; i < n; i++) s = t.behavior_insts[i], s.saveToJSON && (c.behs[s.type.sid.toString()] = s.saveToJSON());
            return t.saveToJSON && (c.data = t.saveToJSON()), c
        }, t.prototype.getInstanceVarIndexBySid = function(t, e) {
            var i, n;
            for (i = 0, n = t.instvar_sids.length; i < n; i++)
                if (t.instvar_sids[i] === e) return i;
            return -1
        }, t.prototype.getBehaviorIndexBySid = function(t, e) {
            var i, n;
            for (i = 0, n = t.behavior_insts.length; i < n; i++)
                if (t.behavior_insts[i].type.sid === e) return i;
            return -1
        }, t.prototype.loadInstanceFromJSON = function(t, e, i) {
            var n, r, s, a, o, h, c, l, u, p, d = t.type,
                f = d.plugin;
            if (i) {
                if (!e.c2) return
            } else t.uid = e.uid; if (e.ex ? t.extra = e.ex : cr.wipe(t.extra), o = e.ivs)
                for (n in o)
                    if (o.hasOwnProperty(n)) {
                        if (a = this.getInstanceVarIndexBySid(d, parseInt(n, 10)), a < 0 || a >= t.instance_vars.length) continue;
                        t.instance_vars[a] = o[n]
                    }
            if (f.is_world) {
                if (h = e.w, t.layer.sid !== h.l && (p = t.layer, t.layer = this.running_layout.getLayerBySid(h.l), t.layer ? (p.removeFromInstanceList(t, !0), t.layer.appendToInstanceList(t, !0), t.set_bbox_changed(), t.layer.setZIndicesStaleFrom(0)) : (t.layer = p, i || this.DestroyInstance(t))), t.x = h.x, t.y = h.y, t.width = h.w, t.height = h.h, t.zindex = h.zi, t.angle = h.hasOwnProperty("a") ? h.a : 0, t.opacity = h.hasOwnProperty("o") ? h.o : 1, t.hotspotX = h.hasOwnProperty("hX") ? h.hX : .5, t.hotspotY = h.hasOwnProperty("hY") ? h.hY : .5, t.visible = !h.hasOwnProperty("v") || h.v, t.collisionsEnabled = !h.hasOwnProperty("ce") || h.ce, t.my_timescale = h.hasOwnProperty("mts") ? h.mts : -1, t.blend_mode = h.hasOwnProperty("bm") ? h.bm : 0, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.gl && cr.setGLBlend(t, t.blend_mode, this.gl), t.set_bbox_changed(), h.hasOwnProperty("fx"))
                    for (r = 0, s = h.fx.length; r < s; r++) c = d.getEffectIndexByName(h.fx[r].name), c < 0 || (t.active_effect_flags[c] = h.fx[r].active, t.effect_params[c] = h.fx[r].params);
                t.updateActiveEffects()
            }
            if (l = e.behs)
                for (n in l)
                    if (l.hasOwnProperty(n)) {
                        if (u = this.getBehaviorIndexBySid(t, parseInt(n, 10)), u < 0) continue;
                        t.behavior_insts[u].loadFromJSON(l[n])
                    }
            e.data && t.loadFromJSON(e.data)
        }, t.prototype.fetchLocalFileViaCordova = function(t, e, i) {
            var n = cordova.file.applicationDirectory + "www/" + t;
            window.resolveLocalFileSystemURL(n, function(t) {
                t.file(e, i)
            }, i)
        }, t.prototype.fetchLocalFileViaCordovaAsText = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var n = new FileReader;
                n.onload = function(t) {
                    e(t.target.result)
                }, n.onerror = i, n.readAsText(t)
            }, i)
        };
        var B = [],
            M = 0,
            D = 8;
        t.prototype.maybeStartNextArrayBufferRead = function() {
            if (B.length && !(M >= D)) {
                M++;
                var t = B.shift();
                this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)
            }
        }, t.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            var n = this;
            B.push({
                filename: t,
                successCallback: function(t) {
                    M--, n.maybeStartNextArrayBufferRead(), e(t)
                },
                errorCallback: function(t) {
                    M--, n.maybeStartNextArrayBufferRead(), i(t)
                }
            }), this.maybeStartNextArrayBufferRead()
        }, t.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var i = new FileReader;
                i.onload = function(t) {
                    e(t.target.result)
                }, i.readAsArrayBuffer(t)
            }, i)
        }, t.prototype.fetchLocalFileViaCordovaAsURL = function(t, e, i) {
            this.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                var i = new Blob([t]),
                    n = URL.createObjectURL(i);
                e(n)
            }, i)
        }, t.prototype.isAbsoluteUrl = function(t) {
            return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
        }, t.prototype.setImageSrc = function(t, e) {
            this.isWKWebView && !this.isAbsoluteUrl(e) ? this.fetchLocalFileViaCordovaAsURL(e, function(e) {
                t.src = e
            }, function(t) {
                alert("Failed to load image: " + t)
            }) : t.src = e
        }, t.prototype.setCtxImageSmoothingEnabled = function(t, e) {
            "undefined" != typeof t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e)
        }, cr.runtime = t, cr.createRuntime = function(e) {
            return new t(document.getElementById(e))
        }, cr.createDCRuntime = function(e, i) {
            return new t({
                dc: !0,
                width: e,
                height: i
            })
        }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function() {
            window.c2cocoonjs = !0;
            var e = document.createElement("screencanvas") || document.createElement("canvas");
            e.screencanvas = !0, document.body.appendChild(e);
            var i = new t(e);
            return window.c2runtime = i, window.addEventListener("orientationchange", function() {
                window.c2runtime.setSize(window.innerWidth, window.innerHeight)
            }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), i
        }, window.createEjectaRuntime = function() {
            var e = document.getElementById("canvas"),
                i = new t(e);
            return window.c2runtime = i, window.c2runtime.setSize(window.innerWidth, window.innerHeight), i
        }
    }(), window.cr_getC2Runtime = function() {
        var t = document.getElementById("c2canvas");
        return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
    }, window.cr_getSnapshot = function(t, e) {
        var i = window.cr_getC2Runtime();
        i && i.doCanvasSnapshot(t, e)
    }, window.cr_sizeCanvas = function(t, e) {
        if (0 !== t && 0 !== e) {
            var i = window.cr_getC2Runtime();
            i && i.setSize(t, e)
        }
    }, window.cr_setSuspended = function(t) {
        var e = window.cr_getC2Runtime();
        e && e.setSuspended(t)
    },
    function() {
        function t(t, e) {
            this.runtime = t, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = e[0], this.originalWidth = e[1], this.originalHeight = e[2], this.width = e[1], this.height = e[2], this.unbounded_scrolling = e[3], this.sheetname = e[4], this.sid = e[5];
            var i, n, r = e[6];
            for (this.layers = [], this.initial_types = [], i = 0, n = r.length; i < n; i++) {
                var s = new cr.layer(this, r[i]);
                s.number = i, cr.seal(s), this.layers.push(s)
            }
            var a = e[7];
            for (this.initial_nonworld = [], i = 0, n = a.length; i < n; i++) {
                var o = a[i],
                    h = this.runtime.types_by_index[o[1]];
                h.default_instance || (h.default_instance = o), this.initial_nonworld.push(o), this.initial_types.indexOf(h) === -1 && this.initial_types.push(h)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, n = e[8].length; i < n; i++) this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[8][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
        }

        function e(t, e) {
            return t.zindex - e.zindex
        }

        function i(t, e) {
            this.layout = t, this.runtime = t.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.zindices_stale_from = -1, this.clear_earlyz_index = 0, this.name = e[0], this.index = e[1], this.sid = e[2], this.visible = e[3], this.background_color = e[4], this.transparent = e[5], this.parallaxX = e[6], this.parallaxY = e[7], this.opacity = e[8], this.forceOwnTexture = e[9], this.useRenderCells = e[10], this.zoomRate = e[11], this.blend_mode = e[12], this.effect_fallback = e[13], this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_grid = null, this.last_render_list = n(), this.render_list_stale = !0, this.last_render_cells = new cr.rect(0, 0, (-1), (-1)), this.cur_render_cells = new cr.rect(0, 0, (-1), (-1)), this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width, this.runtime.original_height)), this.render_offscreen = !1;
            var i, r, s = e[14];
            for (this.startup_initial_instances = [], this.initial_instances = [], this.created_globals = [], i = 0, r = s.length; i < r; i++) {
                var a = s[i],
                    o = this.runtime.types_by_index[a[1]];
                o.default_instance || (o.default_instance = a, o.default_layerindex = this.index), this.initial_instances.push(a), this.layout.initial_types.indexOf(o) === -1 && this.layout.initial_types.push(o)
            }
            for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances), this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, r = e[15].length; i < r; i++) this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[15][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
        }

        function n() {
            return u.length ? u.pop() : []
        }

        function r(t) {
            cr.clearArray(t), u.push(t)
        }

        function s(t, e, i) {
            var n, r, s = 0,
                a = 0,
                o = 0,
                h = t.length,
                c = e.length;
            for (i.length = h + c; s < h && a < c; ++o) n = t[s], r = e[a], n.zindex < r.zindex ? (i[o] = n, ++s) : (i[o] = r, ++a);
            for (; s < h; ++s, ++o) i[o] = t[s];
            for (; a < c; ++a, ++o) i[o] = e[a]
        }

        function a(t, e) {
            var i, a, o, h, c;
            for (i = 0, a = t.length; i < a - 1; i += 2) o = t[i], h = t[i + 1], c = n(), s(o, h, c), e || (r(o), r(h)), p.push(c);
            a % 2 === 1 && (e ? (o = n(), cr.shallowAssignArray(o, t[a - 1]), p.push(o)) : p.push(t[a - 1])), cr.shallowAssignArray(t, p), cr.clearArray(p)
        }

        function o(t) {
            for (var e = !0; t.length > 1;) a(t, e), e = !1;
            return t[0]
        }
        t.prototype.saveObjectToPersist = function(t) {
            var e = t.type.sid.toString();
            this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []);
            var i = this.persist_data[e];
            i.push(this.runtime.saveInstanceToJSON(t))
        }, t.prototype.hasOpaqueBottomLayer = function() {
            var t = this.layers[0];
            return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
        }, t.prototype.updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
            var t, e, i;
            for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], i.active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, t.prototype.getEffectByName = function(t) {
            var e, i, n;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if (n = this.effect_types[e], n.name === t) return n;
            return null
        };
        var h = [],
            c = !0;
        t.prototype.startRunning = function() {
            this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), this.runtime.running_layout = this, this.width = this.originalWidth, this.height = this.originalHeight, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2;
            var t, i, n, r, s, a, o, l, u, p, d, f, g;
            for (t = 0, n = this.runtime.types_by_index.length; t < n; t++)
                if (s = this.runtime.types_by_index[t], !s.is_family)
                    for (a = s.instances, i = 0, r = a.length; i < r; i++)
                        if (o = a[i], o.layer) {
                            var m = o.layer.number;
                            m >= this.layers.length && (m = this.layers.length - 1), o.layer = this.layers[m], o.layer.instances.indexOf(o) === -1 && o.layer.instances.push(o), o.layer.zindices_stale = !0
                        }
            if (!c)
                for (t = 0, n = this.layers.length; t < n; ++t) this.layers[t].instances.sort(e);
            var g;
            for (cr.clearArray(h), this.boundScrolling(), t = 0, n = this.layers.length; t < n; t++) g = this.layers[t], g.createInitialInstances(), g.updateViewport(null);
            var y = !1;
            if (!this.first_visit) {
                for (d in this.persist_data)
                    if (this.persist_data.hasOwnProperty(d)) {
                        if (s = this.runtime.getObjectTypeBySid(parseInt(d, 10)), !s || s.is_family || !this.runtime.typeHasPersistBehavior(s)) continue;
                        for (f = this.persist_data[d], t = 0, n = f.length; t < n; t++) g = null, s.plugin.is_world && !(g = this.getLayerBySid(f[t].w.l)) || (o = this.runtime.createInstanceFromInit(s.default_instance, g, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(o, f[t]), y = !0, h.push(o));
                        cr.clearArray(f)
                    }
                for (t = 0, n = this.layers.length; t < n; t++) this.layers[t].instances.sort(e), this.layers[t].zindices_stale = !0
            }
            for (y && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), t = 0; t < h.length; t++)
                if (o = h[t], o.type.is_contained)
                    for (l = o.get_iid(), i = 0, r = o.type.container.length; i < r; i++) u = o.type.container[i], o.type !== u && (u.instances.length > l ? o.siblings.push(u.instances[l]) : u.default_instance && (p = this.runtime.createInstanceFromInit(u.default_instance, o.layer, !0, o.x, o.y, !0), this.runtime.ClearDeathRow(), u.updateIIDs(), o.siblings.push(p), h.push(p)));
            for (t = 0, n = this.initial_nonworld.length; t < n; t++) o = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0);
            if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree)
                for (t = 0, n = this.runtime.types_by_index.length; t < n; t++) u = this.runtime.types_by_index[t], !u.is_family && u.instances.length && u.preloadCanvas2D && u.preloadCanvas2D(this.runtime.ctx);
            if (this.runtime.isLoadingState) cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, h);
            else
                for (t = 0, n = h.length; t < n; t++) o = h[t], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
            cr.clearArray(h), this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
        }, t.prototype.createGlobalNonWorlds = function() {
            var t, e, i, n, r, s;
            for (t = 0, e = 0, i = this.initial_nonworld.length; t < i; t++) n = this.initial_nonworld[t], s = this.runtime.types_by_index[n[1]], s.global ? s.is_contained || (r = this.runtime.createInstanceFromInit(n, null, !0)) : (this.initial_nonworld[e] = n, e++);
            cr.truncateArray(this.initial_nonworld, e)
        }, t.prototype.stopRunning = function() {
            this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.isEndingLayout = !0, cr.clearArray(this.runtime.system.waits);
            var t, e, i, n, r, s, a;
            if (!this.first_visit)
                for (t = 0, e = this.layers.length; t < e; t++)
                    for (this.layers[t].updateZIndices(), r = this.layers[t].instances, i = 0, n = r.length; i < n; i++) s = r[i], s.type.global || this.runtime.typeHasPersistBehavior(s.type) && this.saveObjectToPersist(s);
            for (t = 0, e = this.layers.length; t < e; t++) {
                for (r = this.layers[t].instances, i = 0, n = r.length; i < n; i++) s = r[i], s.type.global || this.runtime.DestroyInstance(s);
                this.runtime.ClearDeathRow(), cr.clearArray(r), this.layers[t].zindices_stale = !0
            }
            for (t = 0, e = this.runtime.types_by_index.length; t < e; t++)
                if (a = this.runtime.types_by_index[t], !(a.global || a.plugin.is_world || a.plugin.singleglobal || a.is_family)) {
                    for (i = 0, n = a.instances.length; i < n; i++) this.runtime.DestroyInstance(a.instances[i]);
                    this.runtime.ClearDeathRow()
                }
            c = !1, this.runtime.isEndingLayout = !1
        };
        var l = new cr.rect(0, 0, 0, 0);
        t.prototype.recreateInitialObjects = function(t, e, i, n, r) {
            l.set(e, i, n, r);
            var s, a;
            for (s = 0, a = this.layers.length; s < a; s++) this.layers[s].recreateInitialObjects(t, l)
        }, t.prototype.draw = function(t) {
            var e, i = t,
                n = !1,
                r = !this.runtime.fullscreenScalingQuality;
            r && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), e = this.runtime.layout_canvas, e.width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layout_ctx = e.getContext("2d"), n = !0), e = this.runtime.layout_canvas, i = this.runtime.layout_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, n = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, n = !0), n && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height);
            var s, a, o;
            for (s = 0, a = this.layers.length; s < a; s++) o = this.layers[s], o.visible && o.opacity > 0 && 11 !== o.blend_mode && (o.instances.length || !o.transparent) ? o.draw(i) : o.updateViewport(null);
            r && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
        }, t.prototype.drawGL_earlyZPass = function(t) {
            t.setEarlyZPass(!0), this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height);
            var e, i;
            for (e = this.layers.length - 1; e >= 0; --e) i = this.layers[e], i.visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
            t.setEarlyZPass(!1)
        }, t.prototype.drawGL = function(t) {
            var e = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
            e ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null), t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0);
            var i, n, r;
            for (i = 0, n = this.layers.length; i < n; i++) r = this.layers[i], r.visible && r.opacity > 0 && (r.instances.length || !r.transparent) ? r.drawGL(t) : r.updateViewport(null);
            if (e)
                if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                    if (1 === this.active_effect_types.length) {
                        var s = this.active_effect_types[0].index;
                        t.switchProgram(this.active_effect_types[0].shaderindex), t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[s]), t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                    } else t.switchProgram(0);
                    this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height), t.setRenderingToTexture(null), t.setDepthTestEnabled(!1), t.setOpacity(1), t.setTexture(this.runtime.layout_tex), t.setAlphaBlend(), t.resetModelView(), t.updateModelView();
                    var a = this.runtime.width / 2,
                        o = this.runtime.height / 2;
                    t.quad(-a, o, a, o, a, -o, -a, -o), t.setTexture(null), t.setDepthTestEnabled(!0)
                } else this.renderEffectChain(t, null, null, null)
        }, t.prototype.getRenderTarget = function() {
            return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
        }, t.prototype.getMinLayerScale = function() {
            var t, e, i, n = this.layers[0].getScale();
            for (t = 1, e = this.layers.length; t < e; t++) i = this.layers[t], 0 === i.parallaxX && 0 === i.parallaxY || i.getScale() < n && (n = i.getScale());
            return n
        }, t.prototype.scrollToX = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
                t > this.width - e && (t = this.width - e), t < e && (t = e)
            }
            this.scrollX !== t && (this.scrollX = t, this.runtime.redraw = !0)
        }, t.prototype.scrollToY = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
                t > this.height - e && (t = this.height - e), t < e && (t = e)
            }
            this.scrollY !== t && (this.scrollY = t, this.runtime.redraw = !0)
        }, t.prototype.boundScrolling = function() {
            this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
        }, t.prototype.renderEffectChain = function(t, e, i, n) {
            var r = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types,
                s = 1,
                a = 0,
                o = 0,
                h = 0,
                c = this.runtime.draw_width,
                l = this.runtime.draw_height;
            i ? (s = i.layer.getScale(), a = i.layer.getAngle(), o = i.layer.viewLeft, h = i.layer.viewTop, c = i.layer.viewRight, l = i.layer.viewBottom) : e && (s = e.getScale(), a = e.getAngle(), o = e.viewLeft, h = e.viewTop, c = e.viewRight, l = e.viewBottom);
            var u, p, d, f, g, m, y = this.runtime.fx_tex,
                _ = 0,
                v = 1,
                b = this.runtime.draw_width,
                w = this.runtime.draw_height,
                x = b / 2,
                S = w / 2,
                T = e ? e.rcTex : this.rcTex,
                A = e ? e.rcTex2 : this.rcTex2,
                O = 0,
                k = 0,
                C = 0,
                E = 0,
                P = b,
                I = b,
                L = w,
                R = w,
                F = 0,
                j = 0,
                N = i ? i.layer.getAngle() : 0;
            if (i) {
                for (u = 0, p = r.length; u < p; u++) F += t.getProgramBoxExtendHorizontal(r[u].shaderindex), j += t.getProgramBoxExtendVertical(r[u].shaderindex);
                var B = i.bbox;
                if (O = e.layerToCanvas(B.left, B.top, !0, !0), C = e.layerToCanvas(B.left, B.top, !1, !0), P = e.layerToCanvas(B.right, B.bottom, !0, !0), L = e.layerToCanvas(B.right, B.bottom, !1, !0), 0 !== N) {
                    var M = e.layerToCanvas(B.right, B.top, !0, !0),
                        D = e.layerToCanvas(B.right, B.top, !1, !0),
                        W = e.layerToCanvas(B.left, B.bottom, !0, !0),
                        V = e.layerToCanvas(B.left, B.bottom, !1, !0);
                    f = Math.min(O, P, M, W), P = Math.max(O, P, M, W), O = f, f = Math.min(C, L, D, V), L = Math.max(C, L, D, V), C = f
                }
                O -= F, C -= j, P += F, L += j, A.left = O / b, A.top = 1 - C / w, A.right = P / b, A.bottom = 1 - L / w, k = O = cr.floor(O), E = C = cr.floor(C), I = P = cr.ceil(P), R = L = cr.ceil(L), k -= F, E -= j, I += F, R += j, O < 0 && (O = 0), C < 0 && (C = 0), P > b && (P = b), L > w && (L = w), k < 0 && (k = 0), E < 0 && (E = 0), I > b && (I = b), R > w && (R = w), T.left = O / b, T.top = 1 - C / w, T.right = P / b, T.bottom = 1 - L / w
            } else T.left = A.left = 0, T.top = A.top = 0, T.right = A.right = 1, T.bottom = A.bottom = 1;
            var G = i && (t.programUsesDest(r[0].shaderindex) || 0 !== F || 0 !== j || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
            t.setAlphaBlend(), G && (y[_] || (y[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), y[_].c2width === b && y[_].c2height === w || (t.deleteTexture(y[_]), y[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), t.switchProgram(0), t.setRenderingToTexture(y[_]), m = R - E, g = w - E - m, t.clearRect(k, g, I - k, m), i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex), t.setOpacity(e.opacity), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(O, L, P, L, P, C, O, C, T)), A.left = A.top = 0, A.right = A.bottom = 1, i && (f = T.top, T.top = T.bottom, T.bottom = f), _ = 1, v = 0), t.setOpacity(1);
            var d = r.length - 1,
                z = t.programUsesCrossSampling(r[d].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality,
                U = 0;
            for (u = 0, p = r.length; u < p; u++) {
                if (y[_] || (y[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)),
                    y[_].c2width === b && y[_].c2height === w || (t.deleteTexture(y[_]), y[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), t.switchProgram(r[u].shaderindex), U = r[u].index, t.programIsAnimated(r[u].shaderindex) && (this.runtime.redraw = !0), 0 != u || G) t.setProgramParameters(n, 1 / b, 1 / w, A.left, A.top, A.right, A.bottom, s, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[U] : e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(null), u !== d || z ? (t.setRenderingToTexture(y[_]), m = R - E, g = w - E - m, t.clearRect(k, g, I - k, m)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend), t.setRenderingToTexture(n)), t.setTexture(y[v]), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(O, L, P, L, P, C, O, C, T), u !== d || z || t.setTexture(null);
                else {
                    if (t.setRenderingToTexture(y[_]), m = R - E, g = w - E - m, t.clearRect(k, g, I - k, m), i) {
                        var X, Y;
                        if (i.curFrame && i.curFrame.texture_img) {
                            var H = i.curFrame.texture_img;
                            X = 1 / H.width, Y = 1 / H.height
                        } else X = 1 / i.width, Y = 1 / i.height;
                        t.setProgramParameters(n, X, Y, A.left, A.top, A.right, A.bottom, s, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i.effect_params[U]), i.drawGL(t)
                    } else t.setProgramParameters(n, 1 / b, 1 / w, 0, 0, 1, 1, s, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(O, L, P, L, P, C, O, C, T);
                    A.left = A.top = 0, A.right = A.bottom = 1, i && !z && (f = L, L = C, C = f)
                }
                _ = 0 === _ ? 1 : 0, v = 0 === _ ? 1 : 0
            }
            z && (t.switchProgram(0), i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height), x = this.runtime.width / 2, S = this.runtime.height / 2, O = 0, C = 0, P = this.runtime.width, L = this.runtime.height), t.setRenderingToTexture(n), t.setTexture(y[v]), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), i && 1 === r.length && !G ? t.quadTex(O, C, P, C, P, L, O, L, T) : t.quadTex(O, L, P, L, P, C, O, C, T), t.setTexture(null))
        }, t.prototype.getLayerBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layers.length; e < i; e++)
                if (this.layers[e].sid === t) return this.layers[e];
            return null
        }, t.prototype.saveToJSON = function() {
            var t, e, i, n, r = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.angle,
                w: this.width,
                h: this.height,
                fv: this.first_visit,
                persist: this.persist_data,
                fx: [],
                layers: {}
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) n = this.effect_types[t], r.fx.push({
                name: n.name,
                active: n.active,
                params: this.effect_params[n.index]
            });
            for (t = 0, e = this.layers.length; t < e; t++) i = this.layers[t], r.layers[i.sid.toString()] = i.saveToJSON();
            return r
        }, t.prototype.loadFromJSON = function(t) {
            var e, i, n, r, s;
            this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.angle = t.a, this.width = t.w, this.height = t.h, this.persist_data = t.persist, "undefined" != typeof t.fv && (this.first_visit = t.fv);
            var a = t.fx;
            for (e = 0, i = a.length; e < i; e++) n = this.getEffectByName(a[e].name), n && (n.active = a[e].active, this.effect_params[n.index] = a[e].params);
            this.updateActiveEffects();
            var o = t.layers;
            for (r in o)
                if (o.hasOwnProperty(r)) {
                    if (s = this.getLayerBySid(parseInt(r, 10)), !s) continue;
                    s.loadFromJSON(o[r])
                }
        }, cr.layout = t, i.prototype.updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
            var t, e, i;
            for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], i.active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, i.prototype.getEffectByName = function(t) {
            var e, i, n;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if (n = this.effect_types[e], n.name === t) return n;
            return null
        }, i.prototype.createInitialInstances = function() {
            var t, e, i, n, r, s, a, o;
            for (t = 0, e = 0, i = this.initial_instances.length; t < i; t++) {
                if (r = this.initial_instances[t], s = this.runtime.types_by_index[r[1]], o = this.runtime.typeHasPersistBehavior(s), a = !0, !o || this.layout.first_visit) {
                    if (n = this.runtime.createInstanceFromInit(r, this, !0), !n) continue;
                    h.push(n), n.type.global && (a = !1, this.created_globals.push(n.uid))
                }
                a && (this.initial_instances[e] = this.initial_instances[t], e++)
            }
            this.initial_instances.length = e, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl), this.render_list_stale = !0
        }, i.prototype.recreateInitialObjects = function(t, e) {
            var i, n, r, s, a, o, h, c, l, u, p, d = this.runtime.types_by_index,
                f = t.is_family,
                g = t.members;
            for (i = 0, n = this.initial_instances.length; i < n; ++i)
                if (r = this.initial_instances[i], a = r[0], o = a[0], h = a[1], e.contains_pt(o, h)) {
                    if (s = d[r[1]], s !== t) {
                        if (!f) continue;
                        if (g.indexOf(s) < 0) continue
                    }
                    if (c = this.runtime.createInstanceFromInit(r, this, !1), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(s.plugin).cnds.OnCreated, c), c.is_contained)
                        for (l = 0, u = c.siblings.length; l < u; l++) p = c.siblings[i], this.runtime.trigger(Object.getPrototypeOf(p.type.plugin).cnds.OnCreated, p);
                    this.runtime.isInOnDestroy--
                }
        }, i.prototype.removeFromInstanceList = function(t, e) {
            var i = cr.fastIndexOf(this.instances, t);
            i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(), this.render_grid.update(t, t.rendercells, null), t.rendercells.set(0, 0, -1, -1)), i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i), this.setZIndicesStaleFrom(i)), this.render_list_stale = !0)
        }, i.prototype.appendToInstanceList = function(t, e) {
            t.zindex = this.instances.length, this.instances.push(t), e && this.useRenderCells && t.rendercells && t.set_bbox_changed(), this.render_list_stale = !0
        }, i.prototype.prependToInstanceList = function(t, e) {
            this.instances.unshift(t), this.setZIndicesStaleFrom(0), e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
        }, i.prototype.moveInstanceAdjacent = function(t, e, i) {
            var n = t.get_zindex(),
                r = e.get_zindex();
            cr.arrayRemove(this.instances, n), n < r && r--, i && r++, r === this.instances.length ? this.instances.push(t) : this.instances.splice(r, 0, t), this.setZIndicesStaleFrom(n < r ? n : r)
        }, i.prototype.setZIndicesStaleFrom = function(t) {
            this.zindices_stale_from === -1 ? this.zindices_stale_from = t : t < this.zindices_stale_from && (this.zindices_stale_from = t), this.zindices_stale = !0, this.render_list_stale = !0
        }, i.prototype.updateZIndices = function() {
            if (this.zindices_stale) {
                this.zindices_stale_from === -1 && (this.zindices_stale_from = 0);
                var t, e, i;
                if (this.useRenderCells)
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) i = this.instances[t], i.zindex = t, this.render_grid.markRangeChanged(i.rendercells);
                else
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) this.instances[t].zindex = t;
                this.zindices_stale = !1, this.zindices_stale_from = -1
            }
        }, i.prototype.getScale = function(t) {
            return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
        }, i.prototype.getNormalScale = function() {
            return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
        }, i.prototype.getAngle = function() {
            return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
        };
        var u = [],
            p = [],
            d = [];
        i.prototype.getRenderCellInstancesToDraw = function() {
            if (this.updateZIndices(), this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, d), !d.length) return n();
            if (1 === d.length) {
                var t = n();
                return cr.shallowAssignArray(t, d[0]), cr.clearArray(d), t
            }
            var e = o(d);
            return cr.clearArray(d), e
        }, i.prototype.draw = function(t) {
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
            var e = this.runtime.canvas,
                i = t,
                n = !1;
            this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), e = this.runtime.layer_canvas, e.width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layer_ctx = e.getContext("2d"), n = !0), e = this.runtime.layer_canvas, i = this.runtime.layer_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, n = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, n = !0), n && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling), this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.save(), this.disableAngle = !0;
            var s = this.canvasToLayer(0, 0, !0, !0),
                a = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (s = Math.round(s), a = Math.round(a)), this.rotateViewport(s, a, i);
            var o = this.getScale();
            i.scale(o, o), i.translate(-s, -a);
            var h;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (r(this.last_render_list), h = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : h = this.last_render_list) : h = this.instances;
            var c, l, u, p = null;
            for (c = 0, l = h.length; c < l; ++c) u = h[c], u !== p && (this.drawInstance(u, i), p = u);
            this.useRenderCells && (this.last_render_list = h), i.restore(), this.render_offscreen && (t.globalCompositeOperation = this.compositeOp, t.globalAlpha = this.opacity, t.drawImage(e, 0, 0))
        }, i.prototype.drawInstance = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp, t.draw(e))
            }
        }, i.prototype.updateViewport = function(t) {
            this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, t)
        }, i.prototype.rotateViewport = function(t, e, i) {
            var n = this.getScale();
            this.viewLeft = t, this.viewTop = e, this.viewRight = t + this.runtime.draw_width * (1 / n), this.viewBottom = e + this.runtime.draw_height * (1 / n);
            var r;
            this.viewLeft > this.viewRight && (r = this.viewLeft, this.viewLeft = this.viewRight, this.viewRight = r), this.viewTop > this.viewBottom && (r = this.viewTop, this.viewTop = this.viewBottom, this.viewBottom = r);
            var s = this.getAngle();
            0 !== s && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), i.rotate(-s), i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, s), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
        }, i.prototype.drawGL_earlyZPass = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            this.render_offscreen = this.forceOwnTexture, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex)), this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, null);
            var n = this.getScale();
            t.resetModelView(), t.scale(n, n), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
            var s;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (r(this.last_render_list), s = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : s = this.last_render_list) : s = this.instances;
            var a, o, h = null;
            for (a = s.length - 1; a >= 0; --a) o = s[a], o !== h && (this.drawInstanceGL_earlyZPass(s[a], t), h = o);
            this.useRenderCells && (this.last_render_list = s), this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++, t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(1, 1, 1, 1), t.fullscreenQuad(), t.restoreEarlyZMode())
        }, i.prototype.drawGL = function(t) {
            var e = (this.runtime.draw_width, this.runtime.draw_height, 0),
                i = 0;
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex), this.transparent && t.clear(0, 0, 0, 0)), this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), t.fullscreenQuad(), t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)), this.disableAngle = !0;
            var n = this.canvasToLayer(0, 0, !0, !0),
                s = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (n = Math.round(n), s = Math.round(s)), this.rotateViewport(n, s, null);
            var a = this.getScale();
            t.resetModelView(), t.scale(a, a), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
            var o;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (r(this.last_render_list), o = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : o = this.last_render_list) : o = this.instances;
            var h, c, l, u = null;
            for (h = 0, c = o.length; h < c; ++h) l = o[h], l !== u && (this.drawInstanceGL(o[h], t), u = l);
            if (this.useRenderCells && (this.last_render_list = o), this.render_offscreen)
                if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
                    1 === this.active_effect_types.length ? (t.switchProgram(e), t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, a, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]), t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0), t.setRenderingToTexture(this.layout.getRenderTarget()), t.setOpacity(this.opacity), t.setTexture(this.runtime.layer_tex), t.setBlend(this.srcBlend, this.destBlend), t.resetModelView(), t.updateModelView();
                    var p = this.runtime.draw_width / 2,
                        d = this.runtime.draw_height / 2;
                    t.quad(-p, d, p, d, p, -d, -p, -d), t.setTexture(null)
                } else this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
        }, i.prototype.drawInstanceGL = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index), t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0), e.setBlend(t.srcBlend, t.destBlend), t.drawGL(e)))
            }
        }, i.prototype.drawInstanceGL_earlyZPass = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++, 0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index), t.drawGL_earlyZPass(e)))
            }
        }, i.prototype.drawInstanceWithShadersGL = function(t, e) {
            var i = t.active_effect_types[0].shaderindex,
                n = t.active_effect_types[0].index,
                r = this.getScale();
            if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(r, r), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
            else {
                e.switchProgram(i), e.setBlend(t.srcBlend, t.destBlend), e.programIsAnimated(i) && (this.runtime.redraw = !0);
                var s = 0,
                    a = 0,
                    o = 0,
                    h = 0;
                if (e.programUsesDest(i)) {
                    var c = t.bbox,
                        l = this.layerToCanvas(c.left, c.top, !0, !0),
                        u = this.layerToCanvas(c.left, c.top, !1, !0),
                        p = this.layerToCanvas(c.right, c.bottom, !0, !0),
                        d = this.layerToCanvas(c.right, c.bottom, !1, !0);
                    s = l / windowWidth, a = 1 - u / windowHeight, o = p / windowWidth, h = 1 - d / windowHeight
                }
                var f, g;
                if (t.curFrame && t.curFrame.texture_img) {
                    var m = t.curFrame.texture_img;
                    f = 1 / m.width, g = 1 / m.height
                } else f = 1 / t.width, g = 1 / t.height;
                e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), f, g, s, a, o, h, r, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[n]), t.drawGL(e)
            }
        }, i.prototype.canvasToLayer = function(t, e, i, n) {
            var r = this.runtime.devicePixelRatio;
            this.runtime.isRetina && (t *= r, e *= r);
            var s = this.runtime.parallax_x_origin,
                a = this.runtime.parallax_y_origin,
                o = (this.layout.scrollX - s) * this.parallaxX + s,
                h = (this.layout.scrollY - a) * this.parallaxY + a,
                c = o,
                l = h,
                u = 1 / this.getScale(!n);
            n ? (c -= this.runtime.draw_width * u / 2, l -= this.runtime.draw_height * u / 2) : (c -= this.runtime.width * u / 2, l -= this.runtime.height * u / 2), c += t * u, l += e * u;
            var p = this.getAngle();
            if (0 !== p) {
                c -= o, l -= h;
                var d = Math.cos(p),
                    f = Math.sin(p),
                    g = c * d - l * f;
                l = l * d + c * f, c = g, c += o, l += h
            }
            return i ? c : l
        }, i.prototype.layerToCanvas = function(t, e, i, n) {
            var r = this.runtime.parallax_x_origin,
                s = this.runtime.parallax_y_origin,
                a = (this.layout.scrollX - r) * this.parallaxX + r,
                o = (this.layout.scrollY - s) * this.parallaxY + s,
                h = a,
                c = o,
                l = this.getAngle();
            if (0 !== l) {
                t -= a, e -= o;
                var u = Math.cos(-l),
                    p = Math.sin(-l),
                    d = t * u - e * p;
                e = e * u + t * p, t = d, t += a, e += o
            }
            var f = 1 / this.getScale(!n);
            n ? (h -= this.runtime.draw_width * f / 2, c -= this.runtime.draw_height * f / 2) : (h -= this.runtime.width * f / 2, c -= this.runtime.height * f / 2), h = (t - h) / f, c = (e - c) / f;
            var g = this.runtime.devicePixelRatio;
            return this.runtime.isRetina && !n && (h /= g, c /= g), i ? h : c
        }, i.prototype.rotatePt = function(t, e, i) {
            if (0 === this.getAngle()) return i ? t : e;
            var n = this.layerToCanvas(t, e, !0),
                r = this.layerToCanvas(t, e, !1);
            this.disableAngle = !0;
            var s = this.canvasToLayer(n, r, !0),
                a = this.canvasToLayer(n, r, !0);
            return this.disableAngle = !1, i ? s : a
        }, i.prototype.saveToJSON = function() {
            var t, e, i, n = {
                s: this.scale,
                a: this.angle,
                vl: this.viewLeft,
                vt: this.viewTop,
                vr: this.viewRight,
                vb: this.viewBottom,
                v: this.visible,
                bc: this.background_color,
                t: this.transparent,
                px: this.parallaxX,
                py: this.parallaxY,
                o: this.opacity,
                zr: this.zoomRate,
                fx: [],
                cg: this.created_globals,
                instances: []
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], n.fx.push({
                name: i.name,
                active: i.active,
                params: this.effect_params[i.index]
            });
            return n
        }, i.prototype.loadFromJSON = function(t) {
            var i, n, r, s;
            this.scale = t.s, this.angle = t.a, this.viewLeft = t.vl, this.viewTop = t.vt, this.viewRight = t.vr, this.viewBottom = t.vb, this.visible = t.v, this.background_color = t.bc, this.transparent = t.t, this.parallaxX = t.px, this.parallaxY = t.py, this.opacity = t.o, this.zoomRate = t.zr, this.created_globals = t.cg || [], cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
            var a = new cr.ObjectSet;
            for (i = 0, r = this.created_globals.length; i < r; ++i) a.add(this.created_globals[i]);
            for (i = 0, n = 0, r = this.initial_instances.length; i < r; ++i) a.contains(this.initial_instances[i][2]) || (this.initial_instances[n] = this.initial_instances[i], ++n);
            cr.truncateArray(this.initial_instances, n);
            var o = t.fx;
            for (i = 0, r = o.length; i < r; i++) s = this.getEffectByName(o[i].name), s && (s.active = o[i].active, this.effect_params[s.index] = o[i].params);
            this.updateActiveEffects(), this.instances.sort(e), this.zindices_stale = !0
        }, cr.layer = i
    }(),
    function() {
        function t(t, e) {
            var i, n = t.length;
            switch (n) {
                case 0:
                    return !0;
                case 1:
                    return t[0] === e[0];
                case 2:
                    return t[0] === e[0] && t[1] === e[1];
                default:
                    for (i = 0; i < n; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
            }
        }

        function e(t, e) {
            return t.index - e.index
        }

        function i(i) {
            var n, r, s, a, o;
            for (2 === i.length ? i[0].index > i[1].index && (a = i[0], i[0] = i[1], i[1] = a) : i.length > 2 && i.sort(e), i.length >= m.length && (m.length = i.length + 1), m[i.length] || (m[i.length] = []), o = m[i.length], n = 0, r = o.length; n < r; n++)
                if (s = o[n], t(i, s)) return s;
            return o.push(i), i
        }

        function n(t, e) {
            this.runtime = t, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = e[0];
            var i = e[1];
            this.events = [];
            var n, r;
            for (n = 0, r = i.length; n < r; n++) this.init_event(i[n], null, this.events)
        }

        function r(t) {
            return !(!cr.plugins_.Sprite || t !== cr.plugins_.Sprite.prototype.cnds.OnFrameChanged)
        }

        function s(t) {
            this.type = t, this.instances = [], this.else_instances = [], this.select_all = !0
        }

        function a(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, i[1] && (this.group_name = i[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!i[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = i[2], this.sid = i[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
            var n, r, s = i[5];
            for (n = 0, r = s.length; n < r; n++) {
                var a = new cr.condition(this, s[n]);
                a.index = n, cr.seal(a), this.conditions.push(a), this.addSolModifier(a.type)
            }
            var o = i[6];
            for (n = 0, r = o.length; n < r; n++) {
                var h = new cr.action(this, o[n]);
                h.index = n, cr.seal(h), this.actions.push(h)
            }
            if (8 === i.length) {
                var c = i[7];
                for (n = 0, r = c.length; n < r; n++) this.sheet.init_event(c[n], this, this.subevents)
            }
            this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
        }

        function o(t, e) {
            var i, n, r;
            if (t && (e.indexOf(t) === -1 && e.push(t), t.is_contained))
                for (i = 0, n = t.container.length; i < n; i++) r = t.container[i], t !== r && e.indexOf(r) === -1 && e.push(r)
        }

        function h(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), this.trigger = e[3] > 0, this.fasttrigger = 2 === e[3], this.looping = e[4], this.inverted = e[5], this.isstatic = e[6], this.sid = e[7], this.runtime.cndsBySid[this.sid.toString()] = this, e[0] === -1 ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.isstatic ? this.run = this.run_static : this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === e.length) {
                var i, n, r = e[9];
                for (i = 0, n = r.length; i < n; i++) {
                    var s = new cr.parameter(this, r[i]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = r.length
            }
        }

        function c(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), e[0] === -1 ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = e[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === e.length) {
                var i, n, r = e[5];
                for (i = 0, n = r.length; i < n; i++) {
                    var s = new cr.parameter(this, r[i]);
                    cr.seal(s), this.parameters.push(s)
                }
                this.results.length = r.length
            }
        }

        function l() {
            return _++, y.length === _ && y.push(new cr.expvalue), y[_]
        }

        function u() {
            _--
        }

        function p(t, e) {
            this.owner = t, this.block = t.block, this.sheet = t.sheet, this.runtime = t.runtime, this.type = e[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1;
            var i, n, r;
            switch (e[0]) {
                case 0:
                case 7:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp;
                    break;
                case 1:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp_str;
                    break;
                case 5:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_layer;
                    break;
                case 3:
                case 8:
                    this.combosel = e[1], this.get = this.get_combosel;
                    break;
                case 6:
                    this.layout = this.runtime.layouts[e[1]], this.get = this.get_layout;
                    break;
                case 9:
                    this.key = e[1], this.get = this.get_key;
                    break;
                case 4:
                    this.object = this.runtime.types_by_index[e[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                    break;
                case 10:
                    this.index = e[1], t.type && t.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                    break;
                case 11:
                    this.varname = e[1], this.eventvar = null, this.get = this.get_eventvar;
                    break;
                case 2:
                case 12:
                    this.fileinfo = e[1], this.get = this.get_audiofile;
                    break;
                case 13:
                    for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], i = 1, n = e.length; i < n; i++) r = new cr.parameter(this.owner, e[i]), cr.seal(r), this.subparams.push(r), this.variadicret.push(0)
            }
        }

        function d(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.name = i[1], this.vartype = i[2], this.initial = i[3], this.is_static = !!i[4], this.is_constant = !!i[5], this.sid = i[6], this.runtime.varsBySid[this.sid.toString()] = this, this.data = this.initial, this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
        }

        function f(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = i[1], this.active = !0
        }

        function g() {
            this.temp_parents_arr = [], this.reset(null), cr.seal(this)
        }
        var m = [];
        n.prototype.toString = function() {
            return this.name
        }, n.prototype.init_event = function(t, e, i) {
            switch (t[0]) {
                case 0:
                    var n = new cr.eventblock(this, e, t);
                    if (cr.seal(n), n.orblock) {
                        i.push(n);
                        var r, s;
                        for (r = 0, s = n.conditions.length; r < s; r++) n.conditions[r].trigger && this.init_trigger(n, r)
                    } else n.is_trigger() ? this.init_trigger(n, 0) : i.push(n);
                    break;
                case 1:
                    var a = new cr.eventvariable(this, e, t);
                    cr.seal(a), i.push(a);
                    break;
                case 2:
                    var o = new cr.eventinclude(this, e, t);
                    cr.seal(o), i.push(o)
            }
        }, n.prototype.postInit = function() {
            var t, e;
            for (t = 0, e = this.events.length; t < e; t++) this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
        }, n.prototype.updateDeepIncludes = function() {
            cr.clearArray(this.deep_includes), cr.clearArray(this.already_included_sheets), this.addDeepIncludes(this), cr.clearArray(this.already_included_sheets)
        }, n.prototype.addDeepIncludes = function(t) {
            var e, i, n, r, s = t.deep_includes,
                a = t.already_included_sheets,
                o = this.includes.valuesRef();
            for (e = 0, i = o.length; e < i; ++e) n = o[e], r = n.include_sheet, !n.isActive() || t === r || a.indexOf(r) > -1 || (a.push(r), r.addDeepIncludes(t), s.push(r))
        }, n.prototype.run = function(t) {
            this.runtime.resuming_breakpoint || (this.hasRun = !0, t || (this.runtime.isRunningEvents = !0));
            var e, i;
            for (e = 0, i = this.events.length; e < i; e++) {
                var n = this.events[e];
                n.run(), this.runtime.clearSol(n.solModifiers), this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
            }
            t || (this.runtime.isRunningEvents = !1)
        }, n.prototype.init_trigger = function(t, e) {
            t.orblock || this.runtime.triggers_to_postinit.push(t);
            var i, n, s, a = t.conditions[e];
            s = a.type ? a.type.name : "system";
            var o = a.fasttrigger,
                h = o ? this.fasttriggers : this.triggers;
            h[s] || (h[s] = []);
            var c = h[s],
                l = a.func;
            if (o) {
                if (!a.parameters.length) return;
                var u = a.parameters[0];
                if (1 !== u.type || 2 !== u.expression.type) return;
                var p, i, n, d = u.expression.value.toLowerCase();
                for (i = 0, n = c.length; i < n; i++)
                    if (c[i].method == l) return p = c[i].evs, void(p[d] ? p[d].push([t, e]) : p[d] = [
                        [t, e]
                    ]);
                p = {}, p[d] = [
                    [t, e]
                ], c.push({
                    method: l,
                    evs: p
                })
            } else {
                for (i = 0, n = c.length; i < n; i++)
                    if (c[i].method == l) return void c[i].evs.push([t, e]);
                r(l) ? c.unshift({
                    method: l,
                    evs: [
                        [t, e]
                    ]
                }) : c.push({
                    method: l,
                    evs: [
                        [t, e]
                    ]
                })
            }
        }, cr.eventsheet = n, s.prototype.hasObjects = function() {
            return this.select_all ? this.type.instances.length : this.instances.length
        }, s.prototype.getObjects = function() {
            return this.select_all ? this.type.instances : this.instances
        }, s.prototype.pick_one = function(t) {
            if (t)
                if (t.runtime.getCurrentEventStack().current_event.orblock) {
                    this.select_all && (cr.clearArray(this.instances), cr.shallowAssignArray(this.else_instances, t.type.instances), this.select_all = !1);
                    var e = this.else_instances.indexOf(t);
                    e !== -1 && (this.instances.push(this.else_instances[e]), this.else_instances.splice(e, 1))
                } else this.select_all = !1, cr.clearArray(this.instances), this.instances[0] = t
        }, cr.selection = s, window._c2hh_ = "45F21B0D387BFFBD5CB10598EDB7F2441F3DC4A4", a.prototype.postInit = function(t) {
            var e, n, r = this.parent;
            if (this.group)
                for (this.toplevelgroup = !0; r;) {
                    if (!r.group) {
                        this.toplevelgroup = !1;
                        break
                    }
                    r = r.parent
                }
            for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!t, this.solModifiersIncludingParents = this.solModifiers.slice(0), r = this.parent; r;) {
                for (e = 0, n = r.solModifiers.length; e < n; e++) this.addParentSolModifier(r.solModifiers[e]);
                r = r.parent
            }
            this.solModifiers = i(this.solModifiers), this.solModifiersIncludingParents = i(this.solModifiersIncludingParents);
            var e, n;
            for (e = 0, n = this.conditions.length; e < n; e++) this.conditions[e].postInit();
            for (e = 0, n = this.actions.length; e < n; e++) this.actions[e].postInit();
            for (e = 0, n = this.subevents.length; e < n; e++) this.subevents[e].postInit(e < n - 1 && this.subevents[e + 1].is_else_block)
        }, a.prototype.setGroupActive = function(t) {
            if (this.group_active !== !!t) {
                this.group_active = !!t;
                var e, i;
                for (e = 0, i = this.contained_includes.length; e < i; ++e) this.contained_includes[e].updateActive();
                i > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
            }
        }, a.prototype.addSolModifier = function(t) {
            o(t, this.solModifiers)
        }, a.prototype.addParentSolModifier = function(t) {
            o(t, this.solModifiersIncludingParents)
        }, a.prototype.setSolWriterAfterCnds = function() {
            this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
        }, a.prototype.is_trigger = function() {
            return !!this.conditions.length && this.conditions[0].trigger
        }, a.prototype.run = function() {
            var t, e, i, n = !1,
                r = this.runtime,
                s = this.runtime.getCurrentEventStack();
            s.current_event = this;
            var a = this.conditions;
            if (this.is_else_block || (s.else_branch_ran = !1), this.orblock) {
                for (0 === a.length && (n = !0), s.cndindex = 0, t = a.length; s.cndindex < t; s.cndindex++) e = a[s.cndindex], e.trigger || (i = e.run(), i && (n = !0));
                s.last_event_true = n, n && this.run_actions_and_subevents()
            } else {
                for (s.cndindex = 0, t = a.length; s.cndindex < t; s.cndindex++)
                    if (i = a[s.cndindex].run(), !i) return s.last_event_true = !1, void(this.toplevelevent && r.hasPendingInstances && r.ClearDeathRow());
                s.last_event_true = !0, this.run_actions_and_subevents()
            }
            this.end_run(s)
        }, a.prototype.end_run = function(t) {
            t.last_event_true && this.has_else_block && (t.else_branch_ran = !0), this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }, a.prototype.run_orblocktrigger = function(t) {
            var e = this.runtime.getCurrentEventStack();
            e.current_event = this, this.conditions[t].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
        }, a.prototype.run_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (e.actindex = 0, t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, a.prototype.resume_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, a.prototype.run_subevents = function() {
            if (this.subevents.length) {
                var t, e, i, n, r = this.subevents.length - 1;
                if (this.runtime.pushEventStack(this), this.solWriterAfterCnds)
                    for (t = 0, e = this.subevents.length; t < e; t++) i = this.subevents[t], n = !this.toplevelgroup || !this.group && t < r, n && this.runtime.pushCopySol(i.solModifiers), i.run(), n ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
                else
                    for (t = 0, e = this.subevents.length; t < e; t++) this.subevents[t].run();
                this.runtime.popEventStack()
            }
        }, a.prototype.run_pretrigger = function() {
            var t = this.runtime.getCurrentEventStack();
            t.current_event = this;
            var e, i = !1;
            for (t.cndindex = 0, e = this.conditions.length; t.cndindex < e; t.cndindex++)
                if (this.conditions[t.cndindex].run()) i = !0;
                else if (!this.orblock) return !1;
            return !this.orblock || i
        }, a.prototype.retrigger = function() {
            this.runtime.execcount++;
            var t, e = this.runtime.getCurrentEventStack().cndindex,
                i = this.runtime.pushEventStack(this);
            if (!this.orblock)
                for (i.cndindex = e + 1, t = this.conditions.length; i.cndindex < t; i.cndindex++)
                    if (!this.conditions[i.cndindex].run()) return this.runtime.popEventStack(), !1;
            return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
        }, a.prototype.isFirstConditionOfType = function(t) {
            var e = t.index;
            if (0 === e) return !0;
            for (--e; e >= 0; --e)
                if (this.conditions[e].type === t.type) return !1;
            return !0
        }, cr.eventblock = a, h.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++) i = this.parameters[t], i.postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, h.prototype.run_true = function() {
            return !0
        }, h.prototype.run_system = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
        }, h.prototype.run_static = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
            return this.type.applySolToContainer(), i
        }, h.prototype.run_object = function() {
            var t, e, i, n, r, s, a, o, h, c, l, u, p, d = this.type,
                f = d.getCurrentSol(),
                g = this.block.orblock && !this.trigger,
                m = 0,
                y = d.is_contained,
                _ = d.is_family,
                v = d.family_index,
                b = this.beh_index,
                w = b > -1,
                x = this.anyParamVariesPerInstance,
                S = this.parameters,
                T = this.results,
                A = this.inverted,
                O = this.func;
            if (x)
                for (e = 0, r = S.length; e < r; ++e) s = S[e], s.variesPerInstance || (T[e] = s.get(0));
            else
                for (e = 0, r = S.length; e < r; ++e) T[e] = S[e].get(0); if (f.select_all) {
                for (cr.clearArray(f.instances), cr.clearArray(f.else_instances), u = d.instances, t = 0, n = u.length; t < n; ++t) {
                    if (h = u[t], x)
                        for (e = 0, r = S.length; e < r; ++e) s = S[e], s.variesPerInstance && (T[e] = s.get(t));
                    w ? (m = 0, _ && (m = h.type.family_beh_map[v]), a = O.apply(h.behavior_insts[b + m], T)) : a = O.apply(h, T), o = cr.xor(a, A), o ? f.instances.push(h) : g && f.else_instances.push(h)
                }
                return d.finish && d.finish(!0), f.select_all = !1, d.applySolToContainer(), f.hasObjects()
            }
            i = 0;
            var k = g && !this.block.isFirstConditionOfType(this);
            u = k ? f.else_instances : f.instances;
            var C = !1;
            for (t = 0, n = u.length; t < n; ++t) {
                if (h = u[t], x)
                    for (e = 0, r = S.length; e < r; ++e) s = S[e], s.variesPerInstance && (T[e] = s.get(t));
                if (w ? (m = 0, _ && (m = h.type.family_beh_map[v]), a = O.apply(h.behavior_insts[b + m], T)) : a = O.apply(h, T), cr.xor(a, A))
                    if (C = !0, k) {
                        if (f.instances.push(h), y)
                            for (e = 0, r = h.siblings.length; e < r; e++) c = h.siblings[e], c.type.getCurrentSol().instances.push(c)
                    } else {
                        if (u[i] = h, y)
                            for (e = 0, r = h.siblings.length; e < r; e++) c = h.siblings[e], c.type.getCurrentSol().instances[i] = c;
                        i++
                    } else if (k) {
                    if (u[i] = h, y)
                        for (e = 0, r = h.siblings.length; e < r; e++) c = h.siblings[e], c.type.getCurrentSol().else_instances[i] = c;
                    i++
                } else if (g && (f.else_instances.push(h), y))
                    for (e = 0, r = h.siblings.length; e < r; e++) c = h.siblings[e], c.type.getCurrentSol().else_instances.push(c)
            }
            if (cr.truncateArray(u, i), y)
                for (p = d.container, t = 0, n = p.length; t < n; t++) l = p[t].getCurrentSol(), k ? cr.truncateArray(l.else_instances, i) : cr.truncateArray(l.instances, i);
            var E = C;
            if (k && !C)
                for (t = 0, n = f.instances.length; t < n; t++) {
                    if (h = f.instances[t], x)
                        for (e = 0, r = S.length; e < r; e++) s = S[e], s.variesPerInstance && (T[e] = s.get(t));
                    if (a = w ? O.apply(h.behavior_insts[b], T) : O.apply(h, T), cr.xor(a, A)) {
                        C = !0;
                        break
                    }
                }
            return d.finish && d.finish(E || g), g ? C : f.hasObjects()
        }, cr.condition = h, c.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++) i = this.parameters[t], i.postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, c.prototype.run_system = function() {
            var t, e, i = this.runtime,
                n = this.parameters,
                r = this.results;
            for (t = 0, e = n.length; t < e; ++t) r[t] = n[t].get();
            return this.func.apply(i.system, r)
        }, c.prototype.run_object = function() {
            var t, e, i, n, r, s, a, o = this.type,
                h = this.beh_index,
                c = o.family_index,
                l = this.anyParamVariesPerInstance,
                u = this.parameters,
                p = this.results,
                d = this.func,
                f = o.getCurrentSol().getObjects(),
                g = o.is_family,
                m = h > -1;
            if (l)
                for (e = 0, n = u.length; e < n; ++e) r = u[e], r.variesPerInstance || (p[e] = r.get(0));
            else
                for (e = 0, n = u.length; e < n; ++e) p[e] = u[e].get(0);
            for (t = 0, i = f.length; t < i; ++t) {
                if (s = f[t], l)
                    for (e = 0, n = u.length; e < n; ++e) r = u[e], r.variesPerInstance && (p[e] = r.get(t));
                m ? (a = 0, g && (a = s.type.family_beh_map[c]), d.apply(s.behavior_insts[h + a], p)) : d.apply(s, p)
            }
            return !1
        }, cr.action = c;
        var y = [],
            _ = -1;
        p.prototype.postInit = function() {
            var t, e;
            if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
            else if (13 === this.type)
                for (t = 0, e = this.subparams.length; t < e; t++) this.subparams[t].postInit();
            this.expression && this.expression.postInit()
        }, p.prototype.maybeVaryForType = function(t) {
            if (!this.variesPerInstance && t) return t.plugin.singleglobal ? void 0 : void(this.variesPerInstance = !0)
        }, p.prototype.setVaries = function() {
            this.variesPerInstance = !0
        }, p.prototype.get_exp = function(t) {
            this.solindex = t || 0;
            var e = l();
            return this.expression.get(e), u(), e.data
        }, p.prototype.get_exp_str = function(t) {
            this.solindex = t || 0;
            var e = l();
            return this.expression.get(e), u(), cr.is_string(e.data) ? e.data : ""
        }, p.prototype.get_object = function() {
            return this.object
        }, p.prototype.get_combosel = function() {
            return this.combosel
        }, p.prototype.get_layer = function(t) {
            this.solindex = t || 0;
            var e = l();
            return this.expression.get(e), u(), e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
        }, p.prototype.get_layout = function() {
            return this.layout
        }, p.prototype.get_key = function() {
            return this.key
        }, p.prototype.get_instvar = function() {
            return this.index
        }, p.prototype.get_familyvar = function(t) {
            var e = t || 0,
                i = this.owner.type,
                n = null,
                r = i.getCurrentSol(),
                s = r.getObjects();
            if (s.length) n = s[e % s.length].type;
            else if (r.else_instances.length) n = r.else_instances[e % r.else_instances.length].type;
            else {
                if (!i.instances.length) return 0;
                n = i.instances[e % i.instances.length].type
            }
            return this.index + n.family_var_map[i.family_index]
        }, p.prototype.get_eventvar = function() {
            return this.eventvar
        }, p.prototype.get_audiofile = function() {
            return this.fileinfo
        }, p.prototype.get_variadic = function() {
            var t, e;
            for (t = 0, e = this.subparams.length; t < e; t++) this.variadicret[t] = this.subparams[t].get();
            return this.variadicret
        }, cr.parameter = p, d.prototype.postInit = function() {
            this.solModifiers = i(this.solModifiers)
        }, d.prototype.setValue = function(t) {
            var e = this.runtime.getCurrentLocalVarStack();
            this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1), e[this.localIndex] = t) : this.data = t
        }, d.prototype.getValue = function() {
            var t = this.runtime.getCurrentLocalVarStack();
            return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length ? this.initial : "undefined" == typeof t[this.localIndex] ? this.initial : t[this.localIndex]
        }, d.prototype.run = function() {
            !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
        }, cr.eventvariable = d, f.prototype.toString = function() {
            return "include:" + this.include_sheet.toString()
        }, f.prototype.postInit = function() {
            this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = i(this.solModifiers);
            for (var t = this.parent; t;) t.group && t.contained_includes.push(this), t = t.parent;
            this.updateActive()
        }, f.prototype.run = function() {
            this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
        }, f.prototype.updateActive = function() {
            for (var t = this.parent; t;) {
                if (t.group && !t.group_active) return void(this.active = !1);
                t = t.parent
            }
            this.active = !0
        }, f.prototype.isActive = function() {
            return this.active
        }, cr.eventinclude = f, g.prototype.reset = function(t) {
            this.current_event = t, this.cndindex = 0, this.actindex = 0, cr.clearArray(this.temp_parents_arr), this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
        }, g.prototype.isModifierAfterCnds = function() {
            return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
        }, cr.eventStackFrame = g
    }(),
    function() {
        function t(t, e) {
            this.owner = t, this.runtime = t.runtime, this.type = e[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
            var i = null;
            switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
                case 0:
                case 1:
                case 2:
                    this.value = e[1];
                    break;
                case 3:
                    this.first = new cr.expNode(t, e[1]);
                    break;
                case 18:
                    this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2]), this.third = new cr.expNode(t, e[3]);
                    break;
                case 19:
                    this.func = this.runtime.GetObjectReference(e[1]), this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(), this.results = [], this.parameters = [], 3 === e.length ? (i = e[2], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 20:
                    this.object_type = this.runtime.types_by_index[e[1]], this.beh_index = -1, this.func = this.runtime.GetObjectReference(e[2]), this.return_string = e[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), e[4] ? this.instance_expr = new cr.expNode(t, e[4]) : this.instance_expr = null, this.results = [], this.parameters = [], 6 === e.length ? (i = e[5], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 21:
                    this.object_type = this.runtime.types_by_index[e[1]], this.return_string = e[2], e[3] ? this.instance_expr = new cr.expNode(t, e[3]) : this.instance_expr = null, this.varindex = e[4];
                    break;
                case 22:
                    this.object_type = this.runtime.types_by_index[e[1]], this.behavior_type = this.object_type.getBehaviorByName(e[2]), this.beh_index = this.object_type.getBehaviorIndexByName(e[2]), this.func = this.runtime.GetObjectReference(e[3]), this.return_string = e[4], e[5] ? this.instance_expr = new cr.expNode(t, e[5]) : this.instance_expr = null, this.results = [], this.parameters = [], 7 === e.length ? (i = e[6], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 23:
                    this.varname = e[1], this.eventvar = null
            }
            if (this.owner.maybeVaryForType(this.object_type), this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2])), i) {
                var n, r;
                for (n = 0, r = i.length; n < r; n++) this.parameters.push(new cr.expNode(t, i[n]))
            }
            cr.seal(this)
        }

        function e() {
            return ++a, s.length === a && s.push(new cr.expvalue), s[a]
        }

        function i() {
            --a
        }

        function n(t, e, i) {
            var n, r;
            for (n = 0, r = t.length; n < r; ++n) t[n].get(i), e[n + 1] = i.data
        }

        function r(t, e) {
            this.type = t || cr.exptype.Integer, this.data = e || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
        }
        t.prototype.postInit = function() {
            if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters) {
                var t, e;
                for (t = 0, e = this.parameters.length; t < e; t++) this.parameters[t].postInit()
            }
        };
        var s = [],
            a = -1;
        t.prototype.eval_system_exp = function(t) {
            var r = this.parameters,
                s = this.results;
            s[0] = t;
            var a = e();
            n(r, s, a), i(), this.func.apply(this.runtime.system, s)
        }, t.prototype.eval_object_exp = function(t) {
            var r = this.object_type,
                s = this.results,
                a = this.parameters,
                o = this.instance_expr,
                h = this.func,
                c = this.owner.solindex,
                l = r.getCurrentSol(),
                u = l.getObjects();
            if (!u.length) {
                if (!l.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                u = l.else_instances
            }
            s[0] = t, t.object_class = r;
            var p = e();
            n(a, s, p), o && (o.get(p), p.is_number() && (c = p.data, u = r.instances)), i();
            var d = u.length;
            (c >= d || c <= -d) && (c %= d), c < 0 && (c += d);
            h.apply(u[c], s)
        }, t.prototype.eval_behavior_exp = function(t) {
            var r = this.object_type,
                s = this.results,
                a = this.parameters,
                o = this.instance_expr,
                h = this.beh_index,
                c = this.func,
                l = this.owner.solindex,
                u = r.getCurrentSol(),
                p = u.getObjects();
            if (!p.length) {
                if (!u.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                p = u.else_instances
            }
            s[0] = t, t.object_class = r;
            var d = e();
            n(a, s, d), o && (o.get(d), d.is_number() && (l = d.data, p = r.instances)), i();
            var f = p.length;
            (l >= f || l <= -f) && (l %= f), l < 0 && (l += f);
            var g = p[l],
                m = 0;
            r.is_family && (m = g.type.family_beh_map[r.family_index]);
            c.apply(g.behavior_insts[h + m], s)
        }, t.prototype.eval_instvar_exp = function(t) {
            var n, r = this.instance_expr,
                s = this.object_type,
                a = this.varindex,
                o = this.owner.solindex,
                h = s.getCurrentSol(),
                c = h.getObjects();
            if (!c.length) {
                if (!h.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                c = h.else_instances
            }
            if (r) {
                var l = e();
                if (r.get(l), l.is_number()) {
                    o = l.data;
                    var u = s.instances;
                    0 !== u.length && (o %= u.length, o < 0 && (o += u.length)), n = s.getInstanceByIID(o);
                    var p = n.instance_vars[a];
                    return cr.is_string(p) ? t.set_string(p) : t.set_float(p), void i()
                }
                i()
            }
            var d = c.length;
            (o >= d || o <= -d) && (o %= d), o < 0 && (o += d), n = c[o];
            var f = 0;
            s.is_family && (f = n.type.family_var_map[s.family_index]);
            var p = n.instance_vars[a + f];
            cr.is_string(p) ? t.set_string(p) : t.set_float(p)
        }, t.prototype.eval_int = function(t) {
            t.type = cr.exptype.Integer, t.data = this.value
        }, t.prototype.eval_float = function(t) {
            t.type = cr.exptype.Float, t.data = this.value
        }, t.prototype.eval_string = function(t) {
            t.type = cr.exptype.String, t.data = this.value
        }, t.prototype.eval_unaryminus = function(t) {
            this.first.get(t), t.is_number() && (t.data = -t.data)
        }, t.prototype.eval_add = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.is_number() && n.is_number() && (t.data += n.data, n.is_float() && t.make_float()), i()
        }, t.prototype.eval_subtract = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.is_number() && n.is_number() && (t.data -= n.data, n.is_float() && t.make_float()), i()
        }, t.prototype.eval_multiply = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.is_number() && n.is_number() && (t.data *= n.data, n.is_float() && t.make_float()), i()
        }, t.prototype.eval_divide = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.is_number() && n.is_number() && (t.data /= n.data, t.make_float()), i()
        }, t.prototype.eval_mod = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.is_number() && n.is_number() && (t.data %= n.data, n.is_float() && t.make_float()), i()
        }, t.prototype.eval_power = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.is_number() && n.is_number() && (t.data = Math.pow(t.data, n.data), n.is_float() && t.make_float()), i()
        }, t.prototype.eval_and = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), n.is_string() || t.is_string() ? this.eval_and_stringconcat(t, n) : this.eval_and_logical(t, n), i()
        }, t.prototype.eval_and_stringconcat = function(t, e) {
            t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
        }, t.prototype.eval_and_stringconcat_str_str = function(t, e) {
            t.data += e.data
        }, t.prototype.eval_and_stringconcat_num = function(t, e) {
            t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
        }, t.prototype.eval_and_logical = function(t, e) {
            t.set_int(t.data && e.data ? 1 : 0)
        }, t.prototype.eval_or = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.is_number() && n.is_number() && (t.data || n.data ? t.set_int(1) : t.set_int(0)), i()
        }, t.prototype.eval_conditional = function(t) {
            this.first.get(t), t.data ? this.second.get(t) : this.third.get(t)
        }, t.prototype.eval_equal = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.set_int(t.data === n.data ? 1 : 0), i()
        }, t.prototype.eval_notequal = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.set_int(t.data !== n.data ? 1 : 0), i()
        }, t.prototype.eval_less = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.set_int(t.data < n.data ? 1 : 0), i()
        }, t.prototype.eval_lessequal = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.set_int(t.data <= n.data ? 1 : 0), i()
        }, t.prototype.eval_greater = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.set_int(t.data > n.data ? 1 : 0), i()
        }, t.prototype.eval_greaterequal = function(t) {
            this.first.get(t);
            var n = e();
            this.second.get(n), t.set_int(t.data >= n.data ? 1 : 0), i()
        }, t.prototype.eval_eventvar_exp = function(t) {
            var e = this.eventvar.getValue();
            cr.is_number(e) ? t.set_float(e) : t.set_string(e)
        }, cr.expNode = t, r.prototype.is_int = function() {
            return this.type === cr.exptype.Integer
        }, r.prototype.is_float = function() {
            return this.type === cr.exptype.Float
        }, r.prototype.is_number = function() {
            return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
        }, r.prototype.is_string = function() {
            return this.type === cr.exptype.String
        }, r.prototype.make_int = function() {
            this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
        }, r.prototype.make_float = function() {
            this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
        }, r.prototype.make_string = function() {
            this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
        }, r.prototype.set_int = function(t) {
            this.type = cr.exptype.Integer, this.data = Math.floor(t)
        }, r.prototype.set_float = function(t) {
            this.type = cr.exptype.Float, this.data = t
        }, r.prototype.set_string = function(t) {
            this.type = cr.exptype.String, this.data = t
        }, r.prototype.set_any = function(t) {
            cr.is_number(t) ? (this.type = cr.exptype.Float, this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String, this.data = t.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
        }, cr.expvalue = r, cr.exptype = {
            Integer: 0,
            Float: 1,
            String: 2
        }
    }(), cr.system_object = function(t) {
        this.runtime = t, this.waits = []
    }, cr.system_object.prototype.saveToJSON = function() {
        var t, e, i, n, r, s, a, o, h = {};
        h.waits = [];
        var c, l = h.waits;
        for (t = 0, e = this.waits.length; t < e; t++) {
            for (s = this.waits[t], c = {
                t: s.time,
                st: s.signaltag,
                s: s.signalled,
                ev: s.ev.sid,
                sm: [],
                sols: {}
            }, s.ev.actions[s.actindex] && (c.act = s.ev.actions[s.actindex].sid), i = 0, n = s.solModifiers.length; i < n; i++) c.sm.push(s.solModifiers[i].sid);
            for (r in s.sols)
                if (s.sols.hasOwnProperty(r)) {
                    for (a = this.runtime.types_by_index[parseInt(r, 10)], o = {
                        sa: s.sols[r].sa,
                        insts: []
                    }, i = 0, n = s.sols[r].insts.length; i < n; i++) o.insts.push(s.sols[r].insts[i].uid);
                    c.sols[a.sid.toString()] = o
                }
            l.push(c)
        }
        return h
    }, cr.system_object.prototype.loadFromJSON = function(t) {
        var e, i, n, r, s, a, o, h, c, l, u, p, d, f = t.waits;
        for (cr.clearArray(this.waits), e = 0, i = f.length; e < i; e++)
            if (a = f[e], h = this.runtime.blocksBySid[a.ev.toString()]) {
                for (c = -1, n = 0, r = h.actions.length; n < r; n++)
                    if (h.actions[n].sid === a.act) {
                        c = n;
                        break
                    }
                if (c !== -1) {
                    for (o = {}, o.sols = {}, o.solModifiers = [], o.deleteme = !1, o.time = a.t, o.signaltag = a.st || "", o.signalled = !!a.s, o.ev = h, o.actindex = c, n = 0, r = a.sm.length; n < r; n++) l = this.runtime.getObjectTypeBySid(a.sm[n]), l && o.solModifiers.push(l);
                    for (s in a.sols)
                        if (a.sols.hasOwnProperty(s)) {
                            if (l = this.runtime.getObjectTypeBySid(parseInt(s, 10)), !l) continue;
                            for (u = a.sols[s], p = {
                                sa: u.sa,
                                insts: []
                            }, n = 0, r = u.insts.length; n < r; n++) d = this.runtime.getObjectByUID(u.insts[n]), d && p.insts.push(d);
                            o.sols[l.index.toString()] = p
                        }
                    this.waits.push(o)
                }
            }
    },
    function() {
        function t() {}

        function e(t, e) {
            var i = t.extra.c2_feo_val,
                n = e.extra.c2_feo_val;
            return cr.is_number(i) && cr.is_number(n) ? i - n : (i = "" + i, n = "" + n, i < n ? -1 : i > n ? 1 : 0)
        }

        function i(t, e) {
            return g && t === m && e === y || (g = new RegExp(t, e), m = t, y = e), g.lastIndex = 0, g
        }

        function n() {}

        function r() {
            var t;
            return v.length ? t = v.pop() : (t = {}, t.sols = {}, t.solModifiers = []), t.deleteme = !1, t
        }

        function s(t) {
            cr.wipe(t.sols), cr.clearArray(t.solModifiers), v.push(t)
        }

        function a() {
            var t;
            return b.length ? t = b.pop() : (t = {}, t.insts = []), t.sa = !1, t
        }

        function o(t) {
            cr.clearArray(t.insts), b.push(t)
        }

        function h(t, e) {
            var i = t[0],
                n = e[0],
                r = i - n;
            if (0 !== r) return r;
            var s = t[1],
                a = e[1];
            return s - a
        }

        function c(t, e) {
            return t[1] - e[1]
        }

        function l() {}

        function u(t, e, n) {
            if (t !== x || e !== S || n !== T) {
                var r = i(e, n);
                w = t.match(r), x = t, S = e, T = n
            }
        }
        var p = cr.system_object.prototype;
        t.prototype.EveryTick = function() {
            return !0
        }, t.prototype.OnLayoutStart = function() {
            return !0
        }, t.prototype.OnLayoutEnd = function() {
            return !0
        }, t.prototype.Compare = function(t, e, i) {
            return cr.do_cmp(t, e, i)
        }, t.prototype.CompareTime = function(t, e) {
            var i = this.runtime.kahanTime.sum;
            if (0 === t) {
                var n = this.runtime.getCurrentCondition();
                return !n.extra.CompareTime_executed && i >= e && (n.extra.CompareTime_executed = !0, !0)
            }
            return cr.do_cmp(i, t, e)
        }, t.prototype.LayerVisible = function(t) {
            return !!t && t.visible
        }, t.prototype.LayerEmpty = function(t) {
            return !!t && !t.instances.length
        }, t.prototype.LayerCmpOpacity = function(t, e, i) {
            return !!t && cr.do_cmp(100 * t.opacity, e, i)
        }, t.prototype.Repeat = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                n = i.current_event,
                r = i.isModifierAfterCnds(),
                s = this.runtime.pushLoopStack();
            if (r)
                for (e = 0; e < t && !s.stopped; e++) this.runtime.pushCopySol(n.solModifiers), s.index = e, n.retrigger(), this.runtime.popSol(n.solModifiers);
            else
                for (e = 0; e < t && !s.stopped; e++) s.index = e, n.retrigger();
            return this.runtime.popLoopStack(), !1
        }, t.prototype.While = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                n = i.current_event,
                r = i.isModifierAfterCnds(),
                s = this.runtime.pushLoopStack();
            if (r)
                for (e = 0; !s.stopped; e++) this.runtime.pushCopySol(n.solModifiers), s.index = e, n.retrigger() || (s.stopped = !0), this.runtime.popSol(n.solModifiers);
            else
                for (e = 0; !s.stopped; e++) s.index = e, n.retrigger() || (s.stopped = !0);
            return this.runtime.popLoopStack(), !1
        }, t.prototype.For = function(t, e, i) {
            var n, r = this.runtime.getCurrentEventStack(),
                s = r.current_event,
                a = r.isModifierAfterCnds(),
                o = this.runtime.pushLoopStack(t);
            if (i < e)
                if (a)
                    for (n = e; n >= i && !o.stopped; --n) this.runtime.pushCopySol(s.solModifiers), o.index = n, s.retrigger(), this.runtime.popSol(s.solModifiers);
                else
                    for (n = e; n >= i && !o.stopped; --n) o.index = n, s.retrigger();
            else if (a)
                for (n = e; n <= i && !o.stopped; ++n) this.runtime.pushCopySol(s.solModifiers), o.index = n, s.retrigger(), this.runtime.popSol(s.solModifiers);
            else
                for (n = e; n <= i && !o.stopped; ++n) o.index = n, s.retrigger();
            return this.runtime.popLoopStack(), !1
        };
        var d = [],
            f = -1;
        t.prototype.ForEach = function(t) {
            var e = t.getCurrentSol();
            f++, d.length === f && d.push([]);
            var i = d[f];
            cr.shallowAssignArray(i, e.getObjects());
            var n, r, s, a, o, h, c, l = this.runtime.getCurrentEventStack(),
                u = l.current_event,
                p = l.isModifierAfterCnds(),
                g = this.runtime.pushLoopStack(),
                m = t.is_contained;
            if (p)
                for (n = 0, r = i.length; n < r && !g.stopped; n++) {
                    if (this.runtime.pushCopySol(u.solModifiers), o = i[n], e = t.getCurrentSol(), e.select_all = !1, cr.clearArray(e.instances), e.instances[0] = o, m)
                        for (s = 0, a = o.siblings.length; s < a; s++) h = o.siblings[s], c = h.type.getCurrentSol(), c.select_all = !1, cr.clearArray(c.instances), c.instances[0] = h;
                    g.index = n, u.retrigger(), this.runtime.popSol(u.solModifiers)
                } else
                    for (e.select_all = !1, cr.clearArray(e.instances), n = 0, r = i.length; n < r && !g.stopped; n++) {
                        if (o = i[n], e.instances[0] = o, m)
                            for (s = 0, a = o.siblings.length; s < a; s++) h = o.siblings[s], c = h.type.getCurrentSol(), c.select_all = !1, cr.clearArray(c.instances), c.instances[0] = h;
                        g.index = n, u.retrigger()
                    }
            return cr.clearArray(i), this.runtime.popLoopStack(), f--, !1
        }, t.prototype.ForEachOrdered = function(t, i, n) {
            var r = t.getCurrentSol();
            f++, d.length === f && d.push([]);
            var s = d[f];
            cr.shallowAssignArray(s, r.getObjects());
            var a, o, h, c, l, u, p, g = this.runtime.getCurrentEventStack(),
                m = g.current_event,
                y = this.runtime.getCurrentCondition(),
                _ = g.isModifierAfterCnds(),
                v = this.runtime.pushLoopStack();
            for (a = 0, o = s.length; a < o; a++) s[a].extra.c2_feo_val = y.parameters[1].get(a);
            s.sort(e), 1 === n && s.reverse();
            var b = t.is_contained;
            if (_)
                for (a = 0, o = s.length; a < o && !v.stopped; a++) {
                    if (this.runtime.pushCopySol(m.solModifiers), l = s[a], r = t.getCurrentSol(), r.select_all = !1, cr.clearArray(r.instances), r.instances[0] = l, b)
                        for (h = 0, c = l.siblings.length; h < c; h++) u = l.siblings[h], p = u.type.getCurrentSol(), p.select_all = !1, cr.clearArray(p.instances), p.instances[0] = u;
                    v.index = a, m.retrigger(), this.runtime.popSol(m.solModifiers)
                } else
                    for (r.select_all = !1, cr.clearArray(r.instances), a = 0, o = s.length; a < o && !v.stopped; a++) {
                        if (l = s[a], r.instances[0] = l, b)
                            for (h = 0, c = l.siblings.length; h < c; h++) u = l.siblings[h], p = u.type.getCurrentSol(), p.select_all = !1, cr.clearArray(p.instances), p.instances[0] = u;
                        v.index = a, m.retrigger()
                    }
            return cr.clearArray(s), this.runtime.popLoopStack(), f--, !1
        }, t.prototype.PickByComparison = function(t, e, i, n) {
            var r, s, a, o;
            if (t) {
                f++, d.length === f && d.push([]);
                var h = d[f],
                    c = t.getCurrentSol();
                cr.shallowAssignArray(h, c.getObjects()), c.select_all && cr.clearArray(c.else_instances);
                var l = this.runtime.getCurrentCondition();
                for (r = 0, a = 0, s = h.length; r < s; r++) o = h[r], h[a] = o, e = l.parameters[1].get(r), n = l.parameters[3].get(r), cr.do_cmp(e, i, n) ? a++ : c.else_instances.push(o);
                return cr.truncateArray(h, a), c.select_all = !1, cr.shallowAssignArray(c.instances, h), cr.clearArray(h), f--, t.applySolToContainer(), !!c.instances.length
            }
        }, t.prototype.PickByEvaluate = function(t, e) {
            var i, n, r, s;
            if (t) {
                f++, d.length === f && d.push([]);
                var a = d[f],
                    o = t.getCurrentSol();
                cr.shallowAssignArray(a, o.getObjects()), o.select_all && cr.clearArray(o.else_instances);
                var h = this.runtime.getCurrentCondition();
                for (i = 0, r = 0, n = a.length; i < n; i++) s = a[i], a[r] = s, e = h.parameters[1].get(i), e ? r++ : o.else_instances.push(s);
                return cr.truncateArray(a, r), o.select_all = !1, cr.shallowAssignArray(o.instances, a), cr.clearArray(a), f--, t.applySolToContainer(), !!o.instances.length
            }
        }, t.prototype.TriggerOnce = function() {
            var t = this.runtime.getCurrentCondition().extra;
            "undefined" == typeof t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
            var e = t.TriggerOnce_lastTick,
                i = this.runtime.tickcount;
            return t.TriggerOnce_lastTick = i, this.runtime.layout_first_tick || e !== i - 1
        }, t.prototype.Every = function(t) {
            var e = this.runtime.getCurrentCondition(),
                i = e.extra.Every_lastTime || 0,
                n = this.runtime.kahanTime.sum;
            "undefined" == typeof e.extra.Every_seconds && (e.extra.Every_seconds = t);
            var r = e.extra.Every_seconds;
            return n >= i + r ? (e.extra.Every_lastTime = i + r, n >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = n), e.extra.Every_seconds = t, !0) : (n < i - .1 && (e.extra.Every_lastTime = n), !1)
        }, t.prototype.PickNth = function(t, e) {
            if (!t) return !1;
            var i = t.getCurrentSol(),
                n = i.getObjects();
            if (e = cr.floor(e), e < 0 || e >= n.length) return !1;
            var r = n[e];
            return i.pick_one(r), t.applySolToContainer(), !0
        }, t.prototype.PickRandom = function(t) {
            if (!t) return !1;
            var e = t.getCurrentSol(),
                i = e.getObjects(),
                n = cr.floor(Math.random() * i.length);
            if (n >= i.length) return !1;
            var r = i[n];
            return e.pick_one(r), t.applySolToContainer(), !0
        }, t.prototype.CompareVar = function(t, e, i) {
            return cr.do_cmp(t.getValue(), e, i)
        }, t.prototype.IsGroupActive = function(t) {
            var e = this.runtime.groups_by_name[t.toLowerCase()];
            return e && e.group_active
        }, t.prototype.IsPreview = function() {
            return "undefined" != typeof cr_is_preview
        }, t.prototype.PickAll = function(t) {
            if (!t) return !1;
            if (!t.instances.length) return !1;
            var e = t.getCurrentSol();
            return e.select_all = !0, t.applySolToContainer(), !0
        }, t.prototype.IsMobile = function() {
            return this.runtime.isMobile
        }, t.prototype.CompareBetween = function(t, e, i) {
            return t >= e && t <= i
        }, t.prototype.Else = function() {
            var t = this.runtime.getCurrentEventStack();
            return !t.else_branch_ran && !t.last_event_true
        }, t.prototype.OnLoadFinished = function() {
            return !0
        }, t.prototype.OnCanvasSnapshot = function() {
            return !0
        }, t.prototype.EffectsSupported = function() {
            return !!this.runtime.glwrap
        }, t.prototype.OnSaveComplete = function() {
            return !0
        }, t.prototype.OnSaveFailed = function() {
            return !0
        }, t.prototype.OnLoadComplete = function() {
            return !0
        }, t.prototype.OnLoadFailed = function() {
            return !0
        }, t.prototype.ObjectUIDExists = function(t) {
            return !!this.runtime.getObjectByUID(t)
        }, t.prototype.IsOnPlatform = function(t) {
            var e = this.runtime;
            switch (t) {
                case 0:
                    return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
                case 1:
                    return e.isiOS;
                case 2:
                    return e.isAndroid;
                case 3:
                    return e.isWindows8App;
                case 4:
                    return e.isWindowsPhone8;
                case 5:
                    return e.isBlackberry10;
                case 6:
                    return e.isTizen;
                case 7:
                    return e.isCocoonJs;
                case 8:
                    return e.isCordova;
                case 9:
                    return e.isArcade;
                case 10:
                    return e.isNodeWebkit;
                case 11:
                    return e.isCrosswalk;
                case 12:
                    return e.isAmazonWebApp;
                case 13:
                    return e.isWindows10;
                default:
                    return !1
            }
        };
        var g = null,
            m = "",
            y = "";
        t.prototype.RegexTest = function(t, e, n) {
            var r = i(e, n);
            return r.test(t)
        };
        var _ = [];
        t.prototype.PickOverlappingPoint = function(t, e, i) {
            if (!t) return !1;
            var n, r, s, a, o = t.getCurrentSol(),
                h = o.getObjects(),
                c = this.runtime.getCurrentEventStack().current_event,
                l = c.orblock,
                u = this.runtime.getCurrentCondition();
            for (o.select_all ? (cr.shallowAssignArray(_, h), cr.clearArray(o.else_instances), o.select_all = !1, cr.clearArray(o.instances)) : l ? (cr.shallowAssignArray(_, o.else_instances), cr.clearArray(o.else_instances)) : (cr.shallowAssignArray(_, h), cr.clearArray(o.instances)), n = 0, r = _.length; n < r; ++n) s = _[n], s.update_bbox(), a = cr.xor(s.contains_pt(e, i), u.inverted), a ? o.instances.push(s) : o.else_instances.push(s);
            return t.applySolToContainer(), cr.xor(!!o.instances.length, u.inverted)
        }, t.prototype.IsNaN = function(t) {
            return !!isNaN(t)
        }, t.prototype.AngleWithin = function(t, e, i) {
            return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
        }, t.prototype.IsClockwiseFrom = function(t, e) {
            return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
        }, t.prototype.IsBetweenAngles = function(t, e, i) {
            var n = cr.to_clamped_radians(t),
                r = cr.to_clamped_radians(e),
                s = cr.to_clamped_radians(i),
                a = !cr.angleClockwise(s, r);
            return a ? !(!cr.angleClockwise(n, r) && cr.angleClockwise(n, s)) : cr.angleClockwise(n, r) && !cr.angleClockwise(n, s)
        }, t.prototype.IsValueType = function(t, e) {
            return "number" == typeof t ? 0 === e : 1 === e
        }, p.cnds = new t, n.prototype.GoToLayout = function(t) {
            this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
        }, n.prototype.NextPrevLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
                if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                    var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                    this.runtime.changelayout = i
                }
            }
        }, n.prototype.CreateObject = function(t, e, i, n) {
            if (e && t) {
                var r = this.runtime.createInstance(t, e, i, n);
                if (r) {
                    this.runtime.isInOnDestroy++;
                    var s, a, o;
                    if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, r), r.is_contained)
                        for (s = 0, a = r.siblings.length; s < a; s++) o = r.siblings[s], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                    this.runtime.isInOnDestroy--;
                    var h = t.getCurrentSol();
                    if (h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = r, r.is_contained)
                        for (s = 0, a = r.siblings.length; s < a; s++) o = r.siblings[s], h = o.type.getCurrentSol(), h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = o
                }
            }
        }, n.prototype.SetLayerVisible = function(t, e) {
            t && t.visible !== e && (t.visible = e, this.runtime.redraw = !0)
        }, n.prototype.SetLayerOpacity = function(t, e) {
            t && (e = cr.clamp(e / 100, 0, 1), t.opacity !== e && (t.opacity = e, this.runtime.redraw = !0))
        }, n.prototype.SetLayerScaleRate = function(t, e) {
            t && t.zoomRate !== e && (t.zoomRate = e, this.runtime.redraw = !0)
        }, n.prototype.SetLayerForceOwnTexture = function(t, e) {
            t && (e = !!e, t.forceOwnTexture !== e && (t.forceOwnTexture = e, this.runtime.redraw = !0))
        }, n.prototype.SetLayoutScale = function(t) {
            this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
        }, n.prototype.ScrollX = function(t) {
            this.runtime.running_layout.scrollToX(t)
        }, n.prototype.ScrollY = function(t) {
            this.runtime.running_layout.scrollToY(t)
        }, n.prototype.Scroll = function(t, e) {
            this.runtime.running_layout.scrollToX(t), this.runtime.running_layout.scrollToY(e)
        }, n.prototype.ScrollToObject = function(t) {
            var e = t.getFirstPicked();
            e && (this.runtime.running_layout.scrollToX(e.x), this.runtime.running_layout.scrollToY(e.y))
        }, n.prototype.SetVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
        }, n.prototype.AddVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
        }, n.prototype.SubVar = function(t, e) {
            0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
        }, n.prototype.SetGroupActive = function(t, e) {
            var i = this.runtime.groups_by_name[t.toLowerCase()];
            if (i) switch (e) {
                case 0:
                    i.setGroupActive(!1);
                    break;
                case 1:
                    i.setGroupActive(!0);
                    break;
                case 2:
                    i.setGroupActive(!i.group_active)
            }
        }, n.prototype.SetTimescale = function(t) {
            var e = t;
            e < 0 && (e = 0), this.runtime.timescale = e
        }, n.prototype.SetObjectTimescale = function(t, e) {
            var i = e;
            if (i < 0 && (i = 0), t) {
                var n, r, s = t.getCurrentSol(),
                    a = s.getObjects();
                for (n = 0, r = a.length; n < r; n++) a[n].my_timescale = i
            }
        }, n.prototype.RestoreObjectTimescale = function(t) {
            if (!t) return !1;
            var e, i, n = t.getCurrentSol(),
                r = n.getObjects();
            for (e = 0, i = r.length; e < i; e++) r[e].my_timescale = -1
        };
        var v = [],
            b = [];
        n.prototype.Wait = function(t) {
            if (!(t < 0)) {
                var e, i, n, s, o, h = this.runtime.getCurrentEventStack(),
                    c = r();
                for (c.time = this.runtime.kahanTime.sum + t, c.signaltag = "", c.signalled = !1, c.ev = h.current_event, c.actindex = h.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++) s = this.runtime.types_by_index[e], n = s.getCurrentSol(), n.select_all && h.current_event.solModifiers.indexOf(s) === -1 || (c.solModifiers.push(s), o = a(), o.sa = n.select_all, cr.shallowAssignArray(o.insts, n.instances), c.sols[e.toString()] = o);
                return this.waits.push(c), !0
            }
        }, n.prototype.WaitForSignal = function(t) {
            var e, i, n, s, o, h = this.runtime.getCurrentEventStack(),
                c = r();
            for (c.time = -1, c.signaltag = t.toLowerCase(), c.signalled = !1, c.ev = h.current_event, c.actindex = h.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++) s = this.runtime.types_by_index[e], n = s.getCurrentSol(), n.select_all && h.current_event.solModifiers.indexOf(s) === -1 || (c.solModifiers.push(s), o = a(), o.sa = n.select_all, cr.shallowAssignArray(o.insts, n.instances), c.sols[e.toString()] = o);
            return this.waits.push(c), !0
        }, n.prototype.Signal = function(t) {
            var e, i, n, r = t.toLowerCase();
            for (e = 0, i = this.waits.length; e < i; ++e) n = this.waits[e], n.time === -1 && n.signaltag === r && (n.signalled = !0)
        }, n.prototype.SetLayerScale = function(t, e) {
            t && t.scale !== e && (t.scale = e, this.runtime.redraw = !0)
        }, n.prototype.ResetGlobals = function() {
            var t, e, i;
            for (t = 0, e = this.runtime.all_global_vars.length; t < e; t++) i = this.runtime.all_global_vars[t], i.data = i.initial
        }, n.prototype.SetLayoutAngle = function(t) {
            t = cr.to_radians(t), t = cr.clamp_angle(t), this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t, this.runtime.redraw = !0)
        }, n.prototype.SetLayerAngle = function(t, e) {
            t && (e = cr.to_radians(e), e = cr.clamp_angle(e), t.angle !== e && (t.angle = e, this.runtime.redraw = !0))
        }, n.prototype.SetLayerParallax = function(t, e, i) {
            if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
                if (t.parallaxX = e / 100, t.parallaxY = i / 100, 1 !== t.parallaxX || 1 !== t.parallaxY) {
                    var n, r, s = t.instances;
                    for (n = 0, r = s.length; n < r; ++n) s[n].type.any_instance_parallaxed = !0
                }
                this.runtime.redraw = !0
            }
        }, n.prototype.SetLayerBackground = function(t, e) {
            if (t) {
                var i = cr.GetRValue(e),
                    n = cr.GetGValue(e),
                    r = cr.GetBValue(e);
                t.background_color[0] === i && t.background_color[1] === n && t.background_color[2] === r || (t.background_color[0] = i, t.background_color[1] = n, t.background_color[2] = r, this.runtime.redraw = !0)
            }
        }, n.prototype.SetLayerTransparent = function(t, e) {
            t && !!e != !!t.transparent && (t.transparent = !!e, this.runtime.redraw = !0)
        }, n.prototype.SetLayerBlendMode = function(t, e) {
            t && t.blend_mode !== e && (t.blend_mode = e, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl), this.runtime.redraw = !0)
        }, n.prototype.StopLoop = function() {
            this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
        }, n.prototype.GoToLayoutByName = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e;
                for (e in this.runtime.layouts)
                    if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t)) return void(this.runtime.changelayout = this.runtime.layouts[e])
            }
        }, n.prototype.RestartLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout && this.runtime.running_layout) {
                this.runtime.changelayout = this.runtime.running_layout;
                var e, i, n;
                for (e = 0, i = this.runtime.allGroups.length; e < i; e++) n = this.runtime.allGroups[e], n.setGroupActive(n.initially_activated)
            }
        }, n.prototype.SnapshotCanvas = function(t, e) {
            this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
        }, n.prototype.SetCanvasSize = function(t, e) {
            if (!(t <= 0 || e <= 0)) {
                var i = this.runtime.fullscreen_mode,
                    n = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen;
                n && this.runtime.fullscreen_scaling > 0 && (i = this.runtime.fullscreen_scaling), 0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t, this.runtime.original_height = e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
            }
        }, n.prototype.SetLayoutEffectEnabled = function(t, e) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var i = this.runtime.running_layout.getEffectByName(e);
                if (i) {
                    var n = 1 === t;
                    i.active != n && (i.active = n, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, n.prototype.SetLayerEffectEnabled = function(t, e, i) {
            if (t && this.runtime.glwrap) {
                var n = t.getEffectByName(i);
                if (n) {
                    var r = 1 === e;
                    n.active != r && (n.active = r, t.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, n.prototype.SetLayoutEffectParam = function(t, e, i) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var n = this.runtime.running_layout.getEffectByName(t);
                if (n) {
                    var r = this.runtime.running_layout.effect_params[n.index];
                    e = Math.floor(e), e < 0 || e >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100), r[e] !== i && (r[e] = i, n.active && (this.runtime.redraw = !0)))
                }
            }
        }, n.prototype.SetLayerEffectParam = function(t, e, i, n) {
            if (t && this.runtime.glwrap) {
                var r = t.getEffectByName(e);
                if (r) {
                    var s = t.effect_params[r.index];
                    i = Math.floor(i), i < 0 || i >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, i) && (n /= 100), s[i] !== n && (s[i] = n, r.active && (this.runtime.redraw = !0)))
                }
            }
        }, n.prototype.SaveState = function(t) {
            this.runtime.saveToSlot = t
        }, n.prototype.LoadState = function(t) {
            this.runtime.loadFromSlot = t
        }, n.prototype.LoadStateJSON = function(t) {
            this.runtime.loadFromJson = t
        }, n.prototype.SetHalfFramerateMode = function(t) {
            this.runtime.halfFramerateMode = 0 !== t
        }, n.prototype.SetFullscreenQuality = function(t) {
            var e = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen;
            (e || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }, n.prototype.ResetPersisted = function() {
            var t, e;
            for (t = 0, e = this.runtime.layouts_by_index.length; t < e; ++t) this.runtime.layouts_by_index[t].persist_data = {}, this.runtime.layouts_by_index[t].first_visit = !0
        }, n.prototype.RecreateInitialObjects = function(t, e, i, n, r) {
            t && this.runtime.running_layout.recreateInitialObjects(t, e, i, n, r)
        }, n.prototype.SetPixelRounding = function(t) {
            this.runtime.pixel_rounding = 0 !== t, this.runtime.redraw = !0
        }, n.prototype.SetMinimumFramerate = function(t) {
            t < 1 && (t = 1), t > 120 && (t = 120), this.runtime.minimumFramerate = t
        }, n.prototype.SortZOrderByInstVar = function(t, e) {
            if (t) {
                var i, n, r, s, a, o, l = t.getCurrentSol(),
                    u = l.getObjects(),
                    p = [],
                    d = [],
                    f = this.runtime.running_layout,
                    g = t.is_family,
                    m = t.family_index;
                for (i = 0, n = u.length; i < n; ++i) r = u[i], r.layer && (s = g ? r.instance_vars[e + r.type.family_var_map[m]] : r.instance_vars[e], p.push([r.layer.index, r.get_zindex()]), d.push([r, s]));
                if (p.length)
                    for (p.sort(h), d.sort(c), i = 0, n = p.length; i < n; ++i) r = d[i][0], a = f.layers[p[i][0]], o = p[i][1], a.instances[o] !== r && (a.instances[o] = r, r.layer = a, a.setZIndicesStaleFrom(o))
            }
        }, p.acts = new n, l.prototype["int"] = function(t, e) {
            cr.is_string(e) ? (t.set_int(parseInt(e, 10)), isNaN(t.data) && (t.data = 0)) : t.set_int(e)
        }, l.prototype["float"] = function(t, e) {
            cr.is_string(e) ? (t.set_float(parseFloat(e)), isNaN(t.data) && (t.data = 0)) : t.set_float(e)
        }, l.prototype.str = function(t, e) {
            cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
        }, l.prototype.len = function(t, e) {
            t.set_int(e.length || 0)
        }, l.prototype.random = function(t, e, i) {
            void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
        }, l.prototype.sqrt = function(t, e) {
            t.set_float(Math.sqrt(e))
        }, l.prototype.abs = function(t, e) {
            t.set_float(Math.abs(e))
        }, l.prototype.round = function(t, e) {
            t.set_int(Math.round(e))
        }, l.prototype.floor = function(t, e) {
            t.set_int(Math.floor(e))
        }, l.prototype.ceil = function(t, e) {
            t.set_int(Math.ceil(e))
        }, l.prototype.sin = function(t, e) {
            t.set_float(Math.sin(cr.to_radians(e)))
        }, l.prototype.cos = function(t, e) {
            t.set_float(Math.cos(cr.to_radians(e)))
        }, l.prototype.tan = function(t, e) {
            t.set_float(Math.tan(cr.to_radians(e)))
        }, l.prototype.asin = function(t, e) {
            t.set_float(cr.to_degrees(Math.asin(e)))
        }, l.prototype.acos = function(t, e) {
            t.set_float(cr.to_degrees(Math.acos(e)))
        }, l.prototype.atan = function(t, e) {
            t.set_float(cr.to_degrees(Math.atan(e)))
        }, l.prototype.exp = function(t, e) {
            t.set_float(Math.exp(e))
        }, l.prototype.ln = function(t, e) {
            t.set_float(Math.log(e))
        }, l.prototype.log10 = function(t, e) {
            t.set_float(Math.log(e) / Math.LN10)
        }, l.prototype.max = function(t) {
            var e = arguments[1];
            "number" != typeof e && (e = 0);
            var i, n, r;
            for (i = 2, n = arguments.length; i < n; i++) r = arguments[i], "number" == typeof r && e < r && (e = r);
            t.set_float(e)
        }, l.prototype.min = function(t) {
            var e = arguments[1];
            "number" != typeof e && (e = 0);
            var i, n, r;
            for (i = 2, n = arguments.length; i < n; i++) r = arguments[i], "number" == typeof r && e > r && (e = r);
            t.set_float(e)
        }, l.prototype.dt = function(t) {
            t.set_float(this.runtime.dt)
        }, l.prototype.timescale = function(t) {
            t.set_float(this.runtime.timescale)
        }, l.prototype.wallclocktime = function(t) {
            t.set_float((Date.now() - this.runtime.start_time) / 1e3)
        }, l.prototype.time = function(t) {
            t.set_float(this.runtime.kahanTime.sum)
        }, l.prototype.tickcount = function(t) {
            t.set_int(this.runtime.tickcount)
        }, l.prototype.objectcount = function(t) {
            t.set_int(this.runtime.objectcount)
        }, l.prototype.fps = function(t) {
            t.set_int(this.runtime.fps)
        }, l.prototype.loopindex = function(t, e) {
            var i, n;
            if (!this.runtime.loop_stack.length) return void t.set_int(0);
            if (e) {
                for (n = this.runtime.loop_stack_index; n >= 0; --n)
                    if (i = this.runtime.loop_stack[n], i.name === e) return void t.set_int(i.index);
                t.set_int(0)
            } else i = this.runtime.getCurrentLoop(), t.set_int(i ? i.index : -1)
        }, l.prototype.distance = function(t, e, i, n, r) {
            t.set_float(cr.distanceTo(e, i, n, r))
        }, l.prototype.angle = function(t, e, i, n, r) {
            t.set_float(cr.to_degrees(cr.angleTo(e, i, n, r)))
        }, l.prototype.scrollx = function(t) {
            t.set_float(this.runtime.running_layout.scrollX)
        }, l.prototype.scrolly = function(t) {
            t.set_float(this.runtime.running_layout.scrollY)
        }, l.prototype.newline = function(t) {
            t.set_string("\n")
        }, l.prototype.lerp = function(t, e, i, n) {
            t.set_float(cr.lerp(e, i, n))
        }, l.prototype.qarp = function(t, e, i, n, r) {
            t.set_float(cr.qarp(e, i, n, r))
        }, l.prototype.cubic = function(t, e, i, n, r, s) {
            t.set_float(cr.cubic(e, i, n, r, s))
        }, l.prototype.cosp = function(t, e, i, n) {
            t.set_float(cr.cosp(e, i, n))
        }, l.prototype.windowwidth = function(t) {
            t.set_int(this.runtime.width)
        }, l.prototype.windowheight = function(t) {
            t.set_int(this.runtime.height)
        }, l.prototype.uppercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
        }, l.prototype.lowercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
        }, l.prototype.clamp = function(t, e, i, n) {
            e < i ? t.set_float(i) : e > n ? t.set_float(n) : t.set_float(e)
        }, l.prototype.layerscale = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.scale) : t.set_float(0)
        }, l.prototype.layeropacity = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.opacity) : t.set_float(0)
        }, l.prototype.layerscalerate = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.zoomRate) : t.set_float(0)
        }, l.prototype.layerparallaxx = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
        }, l.prototype.layerparallaxy = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
        }, l.prototype.layerindex = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_int(i.index) : t.set_int(-1)
        }, l.prototype.layoutscale = function(t) {
            this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
        }, l.prototype.layoutangle = function(t) {
            t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
        }, l.prototype.layerangle = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
        }, l.prototype.layoutwidth = function(t) {
            t.set_int(this.runtime.running_layout.width)
        }, l.prototype.layoutheight = function(t) {
            t.set_int(this.runtime.running_layout.height)
        }, l.prototype.find = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), "i"))) : t.set_int(-1)
        }, l.prototype.findcase = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), ""))) : t.set_int(-1)
        }, l.prototype.left = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
        }, l.prototype.right = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
        }, l.prototype.mid = function(t, e, i, n) {
            t.set_string(cr.is_string(e) ? e.substr(i, n) : "")
        }, l.prototype.tokenat = function(t, e, i, n) {
            if (cr.is_string(e) && cr.is_string(n)) {
                var r = e.split(n),
                    s = cr.floor(i);
                s < 0 || s >= r.length ? t.set_string("") : t.set_string(r[s])
            } else t.set_string("")
        }, l.prototype.tokencount = function(t, e, i) {
            cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
        }, l.prototype.replace = function(t, e, i, n) {
            cr.is_string(e) && cr.is_string(i) && cr.is_string(n) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i), "gi"), n)) : t.set_string(cr.is_string(e) ? e : "")
        }, l.prototype.trim = function(t, e) {
            t.set_string(cr.is_string(e) ? e.trim() : "")
        }, l.prototype.pi = function(t) {
            t.set_float(cr.PI)
        }, l.prototype.layoutname = function(t) {
            this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
        }, l.prototype.renderer = function(t) {
            t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
        }, l.prototype.rendererdetail = function(t) {
            t.set_string(this.runtime.glUnmaskedRenderer)
        }, l.prototype.anglediff = function(t, e, i) {
            t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
        }, l.prototype.choose = function(t) {
            var e = cr.floor(Math.random() * (arguments.length - 1));
            t.set_any(arguments[e + 1])
        }, l.prototype.rgb = function(t, e, i, n) {
            t.set_int(cr.RGB(e, i, n))
        }, l.prototype.projectversion = function(t) {
            t.set_string(this.runtime.versionstr)
        }, l.prototype.projectname = function(t) {
            t.set_string(this.runtime.projectName)
        }, l.prototype.anglelerp = function(t, e, i, n) {
            e = cr.to_radians(e), i = cr.to_radians(i);
            var r = cr.angleDiff(e, i);
            cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + r * n)) : t.set_float(cr.to_clamped_degrees(e - r * n))
        }, l.prototype.anglerotate = function(t, e, i, n) {
            e = cr.to_radians(e), i = cr.to_radians(i), n = cr.to_radians(n), t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, n)))
        }, l.prototype.zeropad = function(t, e, i) {
            var n = e < 0 ? "-" : "";
            e < 0 && (e = -e);
            for (var r = i - e.toString().length, s = 0; s < r; s++) n += "0";
            t.set_string(n + e.toString())
        }, l.prototype.cpuutilisation = function(t) {
            t.set_float(this.runtime.cpuutilisation / 1e3)
        }, l.prototype.viewportleft = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewLeft : 0)
        }, l.prototype.viewporttop = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewTop : 0)
        }, l.prototype.viewportright = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewRight : 0)
        }, l.prototype.viewportbottom = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewBottom : 0)
        }, l.prototype.loadingprogress = function(t) {
            t.set_float(this.runtime.loadingprogress)
        }, l.prototype.unlerp = function(t, e, i, n) {
            t.set_float(cr.unlerp(e, i, n))
        }, l.prototype.canvassnapshot = function(t) {
            t.set_string(this.runtime.snapshotData)
        }, l.prototype.urlencode = function(t, e) {
            t.set_string(encodeURIComponent(e))
        }, l.prototype.urldecode = function(t, e) {
            t.set_string(decodeURIComponent(e))
        }, l.prototype.canvastolayerx = function(t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.canvasToLayer(i, n, !0) : 0)
        }, l.prototype.canvastolayery = function(t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.canvasToLayer(i, n, !1) : 0)
        }, l.prototype.layertocanvasx = function(t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.layerToCanvas(i, n, !0) : 0)
        }, l.prototype.layertocanvasy = function(t, e, i, n) {
            var r = this.runtime.getLayer(e);
            t.set_float(r ? r.layerToCanvas(i, n, !1) : 0)
        }, l.prototype.savestatejson = function(t) {
            t.set_string(this.runtime.lastSaveJson)
        }, l.prototype.imagememoryusage = function(t) {
            this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
        }, l.prototype.regexsearch = function(t, e, n, r) {
            var s = i(n, r);
            t.set_int(e ? e.search(s) : -1)
        }, l.prototype.regexreplace = function(t, e, n, r, s) {
            var a = i(n, r);
            t.set_string(e ? e.replace(a, s) : "")
        };
        var w = [],
            x = "",
            S = "",
            T = "";
        l.prototype.regexmatchcount = function(t, e, n, r) {
            i(n, r);
            u(e, n, r), t.set_int(w ? w.length : 0)
        }, l.prototype.regexmatchat = function(t, e, n, r, s) {
            s = Math.floor(s);
            i(n, r);
            u(e, n, r), !w || s < 0 || s >= w.length ? t.set_string("") : t.set_string(w[s])
        }, l.prototype.infinity = function(t) {
            t.set_float(1 / 0)
        }, l.prototype.setbit = function(t, e, i, n) {
            e = 0 | e, i = 0 | i, n = 0 !== n ? 1 : 0, t.set_int(e & ~(1 << i) | n << i)
        }, l.prototype.togglebit = function(t, e, i) {
            e = 0 | e, i = 0 | i, t.set_int(e ^ 1 << i)
        }, l.prototype.getbit = function(t, e, i) {
            e = 0 | e, i = 0 | i, t.set_int(e & 1 << i ? 1 : 0)
        }, l.prototype.originalwindowwidth = function(t) {
            t.set_int(this.runtime.original_width)
        }, l.prototype.originalwindowheight = function(t) {
            t.set_int(this.runtime.original_height)
        }, p.exps = new l, p.runWaits = function() {
            var t, e, i, n, r, a, h, c = this.runtime.getCurrentEventStack();
            for (t = 0, i = this.waits.length; t < i; t++) {
                if (n = this.waits[t], n.time === -1) {
                    if (!n.signalled) continue
                } else if (n.time > this.runtime.kahanTime.sum) continue;
                c.current_event = n.ev, c.actindex = n.actindex, c.cndindex = 0;
                for (r in n.sols) n.sols.hasOwnProperty(r) && (a = this.runtime.types_by_index[parseInt(r, 10)].getCurrentSol(), h = n.sols[r], a.select_all = h.sa, cr.shallowAssignArray(a.instances, h.insts), o(h));
                n.ev.resume_actions_and_subevents(), this.runtime.clearSol(n.solModifiers), n.deleteme = !0
            }
            for (t = 0, e = 0, i = this.waits.length; t < i; t++) n = this.waits[t], this.waits[e] = n, n.deleteme ? s(n) : e++;
            cr.truncateArray(this.waits, e)
        }
    }(),
    function() {
        cr.add_common_aces = function(t, e) {
            var i = t[1],
                n = t[3],
                r = t[4],
                s = t[5],
                a = t[6],
                o = t[7],
                h = t[8];
            e.cnds || (e.cnds = {}), e.acts || (e.acts = {}), e.exps || (e.exps = {});
            var c = e.cnds,
                l = e.acts,
                u = e.exps;
            n && (c.CompareX = function(t, e) {
                return cr.do_cmp(this.x, t, e)
            }, c.CompareY = function(t, e) {
                return cr.do_cmp(this.y, t, e)
            }, c.IsOnScreen = function() {
                var t = this.layer;
                this.update_bbox();
                var e = this.bbox;
                return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
            }, c.IsOutsideLayout = function() {
                this.update_bbox();
                var t = this.bbox,
                    e = this.runtime.running_layout;
                return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
            }, c.PickDistance = function(t, e, i) {
                var n = this.getCurrentSol(),
                    r = n.getObjects();
                if (!r.length) return !1;
                var s, a, o, h = r[0],
                    c = h,
                    l = cr.distanceTo(h.x, h.y, e, i);
                for (s = 1, a = r.length; s < a; s++) h = r[s], o = cr.distanceTo(h.x, h.y, e, i), (0 === t && o < l || 1 === t && o > l) && (l = o, c = h);
                return n.pick_one(c), !0
            }, l.SetX = function(t) {
                this.x !== t && (this.x = t, this.set_bbox_changed())
            }, l.SetY = function(t) {
                this.y !== t && (this.y = t, this.set_bbox_changed())
            }, l.SetPos = function(t, e) {
                this.x === t && this.y === e || (this.x = t, this.y = e, this.set_bbox_changed())
            }, l.SetPosToObject = function(t, e) {
                var i = t.getPairedInstance(this);
                if (i) {
                    var n, r;
                    i.getImagePoint ? (n = i.getImagePoint(e, !0), r = i.getImagePoint(e, !1)) : (n = i.x, r = i.y), this.x === n && this.y === r || (this.x = n, this.y = r, this.set_bbox_changed())
                }
            }, l.MoveForward = function(t) {
                0 !== t && (this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.set_bbox_changed())
            }, l.MoveAtAngle = function(t, e) {
                0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e, this.y += Math.sin(cr.to_radians(t)) * e, this.set_bbox_changed())
            }, u.X = function(t) {
                t.set_float(this.x)
            }, u.Y = function(t) {
                t.set_float(this.y)
            }, u.dt = function(t) {
                t.set_float(this.runtime.getDt(this))
            }), r && (c.CompareWidth = function(t, e) {
                return cr.do_cmp(this.width, t, e)
            }, c.CompareHeight = function(t, e) {
                return cr.do_cmp(this.height, t, e)
            }, l.SetWidth = function(t) {
                this.width !== t && (this.width = t, this.set_bbox_changed())
            }, l.SetHeight = function(t) {
                this.height !== t && (this.height = t, this.set_bbox_changed())
            }, l.SetSize = function(t, e) {
                this.width === t && this.height === e || (this.width = t, this.height = e, this.set_bbox_changed())
            }, u.Width = function(t) {
                t.set_float(this.width)
            }, u.Height = function(t) {
                t.set_float(this.height)
            }, u.BBoxLeft = function(t) {
                this.update_bbox(), t.set_float(this.bbox.left)
            }, u.BBoxTop = function(t) {
                this.update_bbox(), t.set_float(this.bbox.top)
            }, u.BBoxRight = function(t) {
                this.update_bbox(), t.set_float(this.bbox.right)
            }, u.BBoxBottom = function(t) {
                this.update_bbox(), t.set_float(this.bbox.bottom)
            }), s && (c.AngleWithin = function(t, e) {
                return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
            }, c.IsClockwiseFrom = function(t) {
                return cr.angleClockwise(this.angle, cr.to_radians(t))
            }, c.IsBetweenAngles = function(t, e) {
                var i = cr.to_clamped_radians(t),
                    n = cr.to_clamped_radians(e),
                    r = cr.clamp_angle(this.angle),
                    s = !cr.angleClockwise(n, i);
                return s ? !(!cr.angleClockwise(r, i) && cr.angleClockwise(r, n)) : cr.angleClockwise(r, i) && !cr.angleClockwise(r, n)
            }, l.SetAngle = function(t) {
                var e = cr.to_radians(cr.clamp_angle_degrees(t));
                isNaN(e) || this.angle !== e && (this.angle = e, this.set_bbox_changed())
            }, l.RotateClockwise = function(t) {
                0 === t || isNaN(t) || (this.angle += cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateCounterclockwise = function(t) {
                0 === t || isNaN(t) || (this.angle -= cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateTowardAngle = function(t, e) {
                var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
                isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
            }, l.RotateTowardPosition = function(t, e, i) {
                var n = e - this.x,
                    r = i - this.y,
                    s = Math.atan2(r, n),
                    a = cr.angleRotate(this.angle, s, cr.to_radians(t));
                isNaN(a) || this.angle !== a && (this.angle = a, this.set_bbox_changed())
            }, l.SetTowardPosition = function(t, e) {
                var i = t - this.x,
                    n = e - this.y,
                    r = Math.atan2(n, i);
                isNaN(r) || this.angle !== r && (this.angle = r, this.set_bbox_changed())
            }, u.Angle = function(t) {
                t.set_float(cr.to_clamped_degrees(this.angle))
            }), i || (c.CompareInstanceVar = function(t, e, i) {
                return cr.do_cmp(this.instance_vars[t], e, i)
            }, c.IsBoolInstanceVarSet = function(t) {
                return this.instance_vars[t]
            }, c.PickInstVarHiLow = function(t, e) {
                var i = this.getCurrentSol(),
                    n = i.getObjects();
                if (!n.length) return !1;
                var r, s, a, o = n[0],
                    h = o,
                    c = o.instance_vars[e];
                for (r = 1, s = n.length; r < s; r++) o = n[r], a = o.instance_vars[e], (0 === t && a < c || 1 === t && a > c) && (c = a, h = o);
                return i.pick_one(h), !0
            }, c.PickByUID = function(t) {
                var e, i, n, r, s, a, o, h = this.runtime.getCurrentCondition();
                if (h.inverted) {
                    if (o = this.getCurrentSol(), o.select_all) {
                        for (o.select_all = !1, cr.clearArray(o.instances), cr.clearArray(o.else_instances), a = this.instances, e = 0, i = a.length; e < i; e++) r = a[e], r.uid === t ? o.else_instances.push(r) : o.instances.push(r);
                        return this.applySolToContainer(), !!o.instances.length
                    }
                    for (e = 0, n = 0, i = o.instances.length; e < i; e++) r = o.instances[e], o.instances[n] = r, r.uid === t ? o.else_instances.push(r) : n++;
                    return cr.truncateArray(o.instances, n), this.applySolToContainer(), !!o.instances.length
                }
                if (r = this.runtime.getObjectByUID(t), !r) return !1;
                if (o = this.getCurrentSol(), !o.select_all && o.instances.indexOf(r) === -1) return !1;
                if (this.is_family) {
                    for (s = r.type.families, e = 0, i = s.length; e < i; e++)
                        if (s[e] === this) return o.pick_one(r), this.applySolToContainer(), !0
                } else if (r.type === this) return o.pick_one(r), this.applySolToContainer(), !0;
                return !1
            }, c.OnCreated = function() {
                return !0
            }, c.OnDestroyed = function() {
                return !0
            }, l.SetInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
            }, l.AddInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
            }, l.SubInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
            }, l.SetBoolInstanceVar = function(t, e) {
                this.instance_vars[t] = e ? 1 : 0
            }, l.ToggleBoolInstanceVar = function(t) {
                this.instance_vars[t] = 1 - this.instance_vars[t]
            }, l.Destroy = function() {
                this.runtime.DestroyInstance(this)
            }, l.LoadFromJsonString || (l.LoadFromJsonString = function(t) {
                var e, i, n, r;
                try {
                    e = JSON.parse(t)
                } catch (s) {
                    return
                }
                if (this.runtime.loadInstanceFromJSON(this, e, !0), this.afterLoad && this.afterLoad(), this.behavior_insts)
                    for (i = 0, n = this.behavior_insts.length; i < n; ++i) r = this.behavior_insts[i], r.afterLoad && r.afterLoad()
            }), u.Count = function(t) {
                var e, i, n, r = t.object_class.instances.length;
                for (e = 0, i = this.runtime.createRow.length; e < i; e++) n = this.runtime.createRow[e], t.object_class.is_family ? n.type.families.indexOf(t.object_class) >= 0 && r++ : n.type === t.object_class && r++;
                t.set_int(r)
            }, u.PickedCount = function(t) {
                t.set_int(t.object_class.getCurrentSol().getObjects().length)
            }, u.UID = function(t) {
                t.set_int(this.uid)
            }, u.IID = function(t) {
                t.set_int(this.get_iid())
            }, u.AsJSON || (u.AsJSON = function(t) {
                t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
            })), a && (c.IsVisible = function() {
                return this.visible
            }, l.SetVisible = function(t) {
                !t != !this.visible && (this.visible = !!t, this.runtime.redraw = !0)
            }, c.CompareOpacity = function(t, e) {
                return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
            }, l.SetOpacity = function(t) {
                var e = t / 100;
                e < 0 ? e = 0 : e > 1 && (e = 1), e !== this.opacity && (this.opacity = e, this.runtime.redraw = !0)
            }, u.Opacity = function(t) {
                t.set_float(cr.round6dp(100 * this.opacity))
            }), o && (c.IsOnLayer = function(t) {
                return !!t && this.layer === t
            }, c.PickTopBottom = function(t) {
                var e = this.getCurrentSol(),
                    i = e.getObjects();
                if (!i.length) return !1;
                var n, r, s = i[0],
                    a = s;
                for (n = 1, r = i.length; n < r; n++) s = i[n], 0 === t ? (s.layer.index > a.layer.index || s.layer.index === a.layer.index && s.get_zindex() > a.get_zindex()) && (a = s) : (s.layer.index < a.layer.index || s.layer.index === a.layer.index && s.get_zindex() < a.get_zindex()) && (a = s);
                return e.pick_one(a), !0
            }, l.MoveToTop = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1), t.appendToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToBottom = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[0] === this || (t.removeFromInstanceList(this, !1), t.prependToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToLayer = function(t) {
                t && t != this.layer && (this.layer.removeFromInstanceList(this, !0), this.layer = t, t.appendToInstanceList(this, !0), this.runtime.redraw = !0)
            }, l.ZMoveToObject = function(t, e) {
                var i = 0 === t;
                if (e) {
                    var n = e.getFirstPicked(this);
                    n && n.uid !== this.uid && (this.layer.index !== n.layer.index && (this.layer.removeFromInstanceList(this, !0), this.layer = n.layer, n.layer.appendToInstanceList(this, !0)), this.layer.moveInstanceAdjacent(this, n, i), this.runtime.redraw = !0)
                }
            }, u.LayerNumber = function(t) {
                t.set_int(this.layer.number)
            }, u.LayerName = function(t) {
                t.set_string(this.layer.name)
            }, u.ZIndex = function(t) {
                t.set_int(this.get_zindex())
            }), h && (l.SetEffectEnabled = function(t, e) {
                if (this.runtime.glwrap) {
                    var i = this.type.getEffectIndexByName(e);
                    if (!(i < 0)) {
                        var n = 1 === t;
                        this.active_effect_flags[i] !== n && (this.active_effect_flags[i] = n, this.updateActiveEffects(), this.runtime.redraw = !0)
                    }
                }
            }, l.SetEffectParam = function(t, e, i) {
                if (this.runtime.glwrap) {
                    var n = this.type.getEffectIndexByName(t);
                    if (!(n < 0)) {
                        var r = this.type.effect_types[n],
                            s = this.effect_params[n];
                        e = Math.floor(e), e < 0 || e >= s.length || (1 === this.runtime.glwrap.getProgramParameterType(r.shaderindex, e) && (i /= 100), s[e] !== i && (s[e] = i, r.active && (this.runtime.redraw = !0)))
                    }
                }
            })
        }, cr.set_bbox_changed = function() {
            this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
            var t, e, i = this.bbox_changed_callbacks;
            for (t = 0, e = i.length; t < e; ++t) i[t](this);
            this.layer.useRenderCells && this.update_bbox()
        }, cr.add_bbox_changed_callback = function(t) {
            t && this.bbox_changed_callbacks.push(t)
        }, cr.update_bbox = function() {
            if (this.bbox_changed) {
                var t = this.bbox,
                    e = this.bquad;
                t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (t.offset(-this.x, -this.y), e.set_from_rotated_rect(t, this.angle), e.offset(this.x, this.y), e.bounding_box(t)) : e.set_from_rect(t), t.normalize(), this.bbox_changed = !1, this.update_render_cell()
            }
        };
        var t = new cr.rect(0, 0, 0, 0);
        cr.update_render_cell = function() {
            if (this.layer.useRenderCells) {
                var e = this.layer.render_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.rendercells.equals(t) || (this.rendercells.right < this.rendercells.left ? e.update(this, null, t) : e.update(this, this.rendercells, t), this.rendercells.copy(t), this.layer.render_list_stale = !0)
            }
        }, cr.update_collision_cell = function() {
            if (this.cell_changed && this.collisionsEnabled) {
                this.update_bbox();
                var e = this.type.collision_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.collcells.equals(t) || (this.collcells.right < this.collcells.left ? e.update(this, null, t) : e.update(this, this.collcells, t), this.collcells.copy(t), this.cell_changed = !1)
            }
        }, cr.inst_contains_pt = function(t, e) {
            return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (!(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(t - this.x, e - this.y))))
        }, cr.inst_get_iid = function() {
            return this.type.updateIIDs(), this.iid
        }, cr.inst_get_zindex = function() {
            return this.layer.updateZIndices(), this.zindex
        }, cr.inst_updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types);
            var t, e, i, n = !0;
            for (t = 0, e = this.active_effect_flags.length; t < e; t++) this.active_effect_flags[t] && (i = this.type.effect_types[t], this.active_effect_types.push(i), i.preservesOpaqueness || (n = !1));
            this.uses_shaders = !!this.active_effect_types.length, this.shaders_preserve_opaqueness = n
        }, cr.inst_toString = function() {
            return "Inst" + this.puid
        }, cr.type_getFirstPicked = function(t) {
            if (t && t.is_contained && t.type != this) {
                var e, i, n;
                for (e = 0, i = t.siblings.length; e < i; e++)
                    if (n = t.siblings[e], n.type == this) return n
            }
            var r = this.getCurrentSol().getObjects();
            return r.length ? r[0] : null
        }, cr.type_getPairedInstance = function(t) {
            var e = this.getCurrentSol().getObjects();
            return e.length ? e[t.get_iid() % e.length] : null
        }, cr.type_updateIIDs = function() {
            if (this.stale_iids && !this.is_family) {
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].iid = t;
                var i = t,
                    n = this.runtime.createRow;
                for (t = 0, e = n.length; t < e; ++t) n[t].type === this && (n[t].iid = i++);
                this.stale_iids = !1
            }
        }, cr.type_getInstanceByIID = function(t) {
            if (t < this.instances.length) return this.instances[t];
            t -= this.instances.length;
            var e, i, n = this.runtime.createRow;
            for (e = 0, i = n.length; e < i; ++e)
                if (n[e].type === this) {
                    if (0 === t) return n[e];
                    --t
                }
            return null
        }, cr.type_getCurrentSol = function() {
            return this.solstack[this.cur_sol]
        }, cr.type_pushCleanSol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0, cr.clearArray(this.solstack[this.cur_sol].else_instances))
        }, cr.type_pushCopySol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
            var t = this.solstack[this.cur_sol],
                e = this.solstack[this.cur_sol - 1];
            e.select_all ? (t.select_all = !0, cr.clearArray(t.else_instances)) : (t.select_all = !1, cr.shallowAssignArray(t.instances, e.instances), cr.shallowAssignArray(t.else_instances, e.else_instances))
        }, cr.type_popSol = function() {
            this.cur_sol--
        }, cr.type_getBehaviorByName = function(t) {
            var e, i, n, r, s, a = 0;
            if (!this.is_family)
                for (e = 0, i = this.families.length; e < i; e++)
                    for (s = this.families[e], n = 0, r = s.behaviors.length; n < r; n++) {
                        if (t === s.behaviors[n].name) return this.extra.lastBehIndex = a, s.behaviors[n];
                        a++
                    }
            for (e = 0, i = this.behaviors.length; e < i; e++) {
                if (t === this.behaviors[e].name) return this.extra.lastBehIndex = a, this.behaviors[e];
                a++
            }
            return null
        }, cr.type_getBehaviorIndexByName = function(t) {
            var e = this.getBehaviorByName(t);
            return e ? this.extra.lastBehIndex : -1
        }, cr.type_getEffectIndexByName = function(t) {
            var e, i;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if (this.effect_types[e].name === t) return e;
            return -1
        }, cr.type_applySolToContainer = function() {
            if (this.is_contained && !this.is_family) {
                var t, e, i, n, r, s, a;
                this.updateIIDs(), s = this.getCurrentSol();
                var o = s.select_all,
                    h = this.runtime.getCurrentEventStack(),
                    c = h && h.current_event && h.current_event.orblock;
                for (t = 0, e = this.container.length; t < e; t++)
                    if (r = this.container[t], r !== this && (r.updateIIDs(), a = r.getCurrentSol(), a.select_all = o, !o)) {
                        for (cr.clearArray(a.instances), i = 0, n = s.instances.length; i < n; ++i) a.instances[i] = r.getInstanceByIID(s.instances[i].iid);
                        if (c)
                            for (cr.clearArray(a.else_instances), i = 0, n = s.else_instances.length; i < n; ++i) a.else_instances[i] = r.getInstanceByIID(s.else_instances[i].iid)
                    }
            }
        }, cr.type_toString = function() {
            return "Type" + this.sid
        }, cr.do_cmp = function(t, e, i) {
            if ("undefined" == typeof t || "undefined" == typeof i) return !1;
            switch (e) {
                case 0:
                    return t === i;
                case 1:
                    return t !== i;
                case 2:
                    return t < i;
                case 3:
                    return t <= i;
                case 4:
                    return t > i;
                case 5:
                    return t >= i;
                default:
                    return !1
            }
        }
    }(), cr.shaders = {}, cr.plugins_.Arr = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            return c.length ? c.pop() : []
        }

        function e(t) {
            var i, n;
            for (i = 0, n = t.length; i < n; i++) Array.isArray(t[i]) && e(t[i]);
            cr.clearArray(t), c.push(t)
        }

        function i() {}

        function n() {}

        function r(t, e) {
            if (cr.is_number(t) && cr.is_number(e)) return t - e;
            var i = "" + t,
                n = "" + e;
            return i < n ? -1 : i > n ? 1 : 0
        }

        function s() {}
        var a = cr.plugins_.Arr.prototype;
        a.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var o = a.Type.prototype;
        o.onCreate = function() {}, a.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var h = a.Instance.prototype,
            c = [];
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), h.onCreate = function() {
            this.cx = this.properties[0], this.cy = this.properties[1], this.cz = this.properties[2], this.recycled || (this.arr = t());
            var e = this.arr;
            e.length = this.cx;
            var i, n, r;
            for (i = 0; i < this.cx; i++)
                for (e[i] || (e[i] = t()), e[i].length = this.cy, n = 0; n < this.cy; n++)
                    for (e[i][n] || (e[i][n] = t()), e[i][n].length = this.cz, r = 0; r < this.cz; r++) e[i][n][r] = 0;
            this.forX = [], this.forY = [], this.forZ = [], this.forDepth = -1
        }, h.onDestroy = function() {
            var t;
            for (t = 0; t < this.cx; t++) e(this.arr[t]);
            cr.clearArray(this.arr)
        }, h.at = function(t, e, i) {
            return t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 ? 0 : isNaN(e) || e < 0 || e > this.cy - 1 ? 0 : isNaN(i) || i < 0 || i > this.cz - 1 ? 0 : this.arr[t][e][i]
        }, h.set = function(t, e, i, n) {
            t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || t < 0 || t > this.cx - 1 || isNaN(e) || e < 0 || e > this.cy - 1 || isNaN(i) || i < 0 || i > this.cz - 1 || (this.arr[t][e][i] = n)
        }, h.getAsJSON = function() {
            return JSON.stringify({
                c2array: !0,
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            })
        }, h.saveToJSON = function() {
            return {
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            }
        }, h.loadFromJSON = function(t) {
            var e = t.size;
            this.cx = e[0], this.cy = e[1], this.cz = e[2], this.arr = t.data
        }, h.setSize = function(e, i, n) {
            if (e < 0 && (e = 0), i < 0 && (i = 0), n < 0 && (n = 0), this.cx !== e || this.cy !== i || this.cz !== n) {
                this.cx = e, this.cy = i, this.cz = n;
                var r, s, a, o = this.arr;
                for (o.length = e, r = 0; r < this.cx; r++)
                    for (cr.is_undefined(o[r]) && (o[r] = t()), o[r].length = i, s = 0; s < this.cy; s++)
                        for (cr.is_undefined(o[r][s]) && (o[r][s] = t()), o[r][s].length = n, a = 0; a < this.cz; a++) cr.is_undefined(o[r][s][a]) && (o[r][s][a] = 0)
            }
        }, h.getForX = function() {
            return this.forDepth >= 0 && this.forDepth < this.forX.length ? this.forX[this.forDepth] : 0
        }, h.getForY = function() {
            return this.forDepth >= 0 && this.forDepth < this.forY.length ? this.forY[this.forDepth] : 0
        }, h.getForZ = function() {
            return this.forDepth >= 0 && this.forDepth < this.forZ.length ? this.forZ[this.forDepth] : 0
        }, i.prototype.CompareX = function(t, e, i) {
            return cr.do_cmp(this.at(t, 0, 0), e, i)
        }, i.prototype.CompareXY = function(t, e, i, n) {
            return cr.do_cmp(this.at(t, e, 0), i, n)
        }, i.prototype.CompareXYZ = function(t, e, i, n, r) {
            return cr.do_cmp(this.at(t, e, i), n, r)
        }, h.doForEachTrigger = function(t) {
            this.runtime.pushCopySol(t.solModifiers), t.retrigger(), this.runtime.popSol(t.solModifiers)
        }, i.prototype.ArrForEach = function(t) {
            var e = this.runtime.getCurrentEventStack().current_event;
            this.forDepth++;
            var i = this.forDepth;
            switch (i === this.forX.length ? (this.forX.push(0), this.forY.push(0), this.forZ.push(0)) : (this.forX[i] = 0, this.forY[i] = 0, this.forZ[i] = 0), t) {
                case 0:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++)
                            for (this.forZ[i] = 0; this.forZ[i] < this.cz; this.forZ[i]++) this.doForEachTrigger(e);
                    break;
                case 1:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++) this.doForEachTrigger(e);
                    break;
                case 2:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++) this.doForEachTrigger(e)
            }
            return this.forDepth--, !1
        }, i.prototype.CompareCurrent = function(t, e) {
            return cr.do_cmp(this.at(this.getForX(), this.getForY(), this.getForZ()), t, e)
        }, i.prototype.Contains = function(t) {
            var e, i, n;
            for (e = 0; e < this.cx; e++)
                for (i = 0; i < this.cy; i++)
                    for (n = 0; n < this.cz; n++)
                        if (this.arr[e][i][n] === t) return !0;
            return !1
        }, i.prototype.IsEmpty = function() {
            return 0 === this.cx || 0 === this.cy || 0 === this.cz
        }, i.prototype.CompareSize = function(t, e, i) {
            var n = 0;
            switch (t) {
                case 0:
                    n = this.cx;
                    break;
                case 1:
                    n = this.cy;
                    break;
                case 2:
                    n = this.cz
            }
            return cr.do_cmp(n, e, i)
        }, a.cnds = new i, n.prototype.Clear = function() {
            var t, e, i;
            for (t = 0; t < this.cx; t++)
                for (e = 0; e < this.cy; e++)
                    for (i = 0; i < this.cz; i++) this.arr[t][e][i] = 0
        }, n.prototype.SetSize = function(t, e, i) {
            this.setSize(t, e, i)
        }, n.prototype.SetX = function(t, e) {
            this.set(t, 0, 0, e)
        }, n.prototype.SetXY = function(t, e, i) {
            this.set(t, e, 0, i)
        }, n.prototype.SetXYZ = function(t, e, i, n) {
            this.set(t, e, i, n)
        }, n.prototype.Push = function(e, i, n) {
            var r = 0,
                s = 0,
                a = 0,
                o = this.arr;
            switch (n) {
                case 0:
                    for (0 === e ? (r = o.length, o.push(t())) : (r = 0, o.unshift(t())), o[r].length = this.cy; s < this.cy; s++)
                        for (o[r][s] = t(), o[r][s].length = this.cz, a = 0; a < this.cz; a++) o[r][s][a] = i;
                    this.cx++;
                    break;
                case 1:
                    for (; r < this.cx; r++)
                        for (0 === e ? (s = o[r].length, o[r].push(t())) : (s = 0, o[r].unshift(t())), o[r][s].length = this.cz, a = 0; a < this.cz; a++) o[r][s][a] = i;
                    this.cy++;
                    break;
                case 2:
                    for (; r < this.cx; r++)
                        for (s = 0; s < this.cy; s++) 0 === e ? o[r][s].push(i) : o[r][s].unshift(i);
                    this.cz++
            }
        }, n.prototype.Pop = function(t, i) {
            var n = 0,
                r = 0,
                s = this.arr;
            switch (i) {
                case 0:
                    if (0 === this.cx) break;
                    e(0 === t ? s.pop() : s.shift()), this.cx--;
                    break;
                case 1:
                    if (0 === this.cy) break;
                    for (; n < this.cx; n++) e(0 === t ? s[n].pop() : s[n].shift());
                    this.cy--;
                    break;
                case 2:
                    if (0 === this.cz) break;
                    for (; n < this.cx; n++)
                        for (r = 0; r < this.cy; r++) 0 === t ? s[n][r].pop() : s[n][r].shift();
                    this.cz--
            }
        }, n.prototype.Reverse = function(t) {
            var e = 0,
                i = 0,
                n = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    n.reverse();
                    break;
                case 1:
                    for (; e < this.cx; e++) n[e].reverse();
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) n[e][i].reverse();
                    this.cz--
            }
        }, n.prototype.Sort = function(t) {
            var e = 0,
                i = 0,
                n = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    n.sort(function(t, e) {
                        return r(t[0][0], e[0][0])
                    });
                    break;
                case 1:
                    for (; e < this.cx; e++) n[e].sort(function(t, e) {
                        return r(t[0], e[0])
                    });
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) n[e][i].sort(r)
            }
        }, n.prototype.Delete = function(t, i) {
            var n = 0,
                r = 0;
            t = Math.floor(t);
            var s = this.arr;
            if (!(t < 0)) switch (i) {
                case 0:
                    if (t >= this.cx) break;
                    e(s[t]), s.splice(t, 1), this.cx--;
                    break;
                case 1:
                    if (t >= this.cy) break;
                    for (; n < this.cx; n++) e(s[n][t]), s[n].splice(t, 1);
                    this.cy--;
                    break;
                case 2:
                    if (t >= this.cz) break;
                    for (; n < this.cx; n++)
                        for (r = 0; r < this.cy; r++) s[n][r].splice(t, 1);
                    this.cz--
            }
        }, n.prototype.Insert = function(e, i, n) {
            var r = 0,
                s = 0,
                a = 0;
            i = Math.floor(i);
            var o = this.arr;
            if (!(i < 0)) switch (n) {
                case 0:
                    if (i > this.cx) return;
                    for (r = i, o.splice(r, 0, t()), o[r].length = this.cy; s < this.cy; s++)
                        for (o[r][s] = t(), o[r][s].length = this.cz, a = 0; a < this.cz; a++) o[r][s][a] = e;
                    this.cx++;
                    break;
                case 1:
                    if (i > this.cy) return;
                    for (; r < this.cx; r++)
                        for (s = i, o[r].splice(s, 0, t()), o[r][s].length = this.cz, a = 0; a < this.cz; a++) o[r][s][a] = e;
                    this.cy++;
                    break;
                case 2:
                    if (i > this.cz) return;
                    for (; r < this.cx; r++)
                        for (s = 0; s < this.cy; s++) o[r][s].splice(i, 0, e);
                    this.cz++
            }
        }, n.prototype.JSONLoad = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (i) {
                return
            }
            if (e.c2array) {
                var n = e.size;
                this.cx = n[0], this.cy = n[1], this.cz = n[2], this.arr = e.data
            }
        }, n.prototype.JSONDownload = function(t) {
            // var e = document.createElement("a");
            // if ("undefined" == typeof e.download) {
            //     var i = "data:text/html," + encodeURIComponent("<p><a download='" + t + "' href=\"data:application/json," + encodeURIComponent(this.getAsJSON()) + '">Download link</a></p>');
            //     window.open(i)
            // } else {
            //     var n = document.getElementsByTagName("body")[0];
            //     e.textContent = t, e.href = "data:application/json," + encodeURIComponent(this.getAsJSON()), e.download = t, n.appendChild(e);
            //     var r = document.createEvent("MouseEvent");
            //     r.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(r), n.removeChild(e)
            // }
        }, a.acts = new n, s.prototype.At = function(t, e, i, n) {
            var r = i || 0,
                s = n || 0;
            t.set_any(this.at(e, r, s))
        }, s.prototype.Width = function(t) {
            t.set_int(this.cx)
        }, s.prototype.Height = function(t) {
            t.set_int(this.cy)
        }, s.prototype.Depth = function(t) {
            t.set_int(this.cz)
        }, s.prototype.CurX = function(t) {
            t.set_int(this.getForX())
        }, s.prototype.CurY = function(t) {
            t.set_int(this.getForY())
        }, s.prototype.CurZ = function(t) {
            t.set_int(this.getForZ())
        }, s.prototype.CurValue = function(t) {
            t.set_any(this.at(this.getForX(), this.getForY(), this.getForZ()))
        }, s.prototype.Front = function(t) {
            t.set_any(this.at(0, 0, 0))
        }, s.prototype.Back = function(t) {
            t.set_any(this.at(this.cx - 1, 0, 0))
        }, s.prototype.IndexOf = function(t, e) {
            for (var i = 0; i < this.cx; i++)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, s.prototype.LastIndexOf = function(t, e) {
            for (var i = this.cx - 1; i >= 0; i--)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, s.prototype.AsJSON = function(t) {
            t.set_string(this.getAsJSON())
        }, a.exps = new s
    }(), cr.plugins_.Audio = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            var e = i(t);
            return isFinite(e) || (e = 0), e < 0 && (e = 0), e > 1 && (e = 1), e
        }

        function e(t) {
            return t < 0 && (t = 0), t > 1 && (t = 1), n(t)
        }

        function i(t) {
            return Math.pow(10, t / 20)
        }

        function n(t) {
            return Math.log(t) / Math.log(10) * 20
        }

        function r(t) {
            return t = t.toLowerCase(), pt.hasOwnProperty(t) && pt[t].length ? pt[t][0].getInputNode() : X.destination
        }

        function s() {
            return X.createGain ? X.createGain() : X.createGainNode()
        }

        function a(t) {
            return X.createDelay ? X.createDelay(t) : X.createDelayNode(t)
        }

        function o(t, e) {
            t.start ? t.start(e || 0) : t.noteOn(e || 0)
        }

        function h(t, e, i, n) {
            t.start ? t.start(n || 0, e) : t.noteGrainOn(n || 0, e, i - e)
        }

        function c(t) {
            try {
                t.stop ? t.stop(0) : t.noteOff(0)
            } catch (e) {}
        }

        function l(t, e, i, n) {
            if (t) {
                if (t.cancelScheduledValues(0), 0 === n) return void(t.value = e);
                var r = X.currentTime;
                switch (n += r, i) {
                    case 0:
                        t.setValueAtTime(e, n);
                        break;
                    case 1:
                        t.setValueAtTime(t.value, r), t.linearRampToValueAtTime(e, n);
                        break;
                    case 2:
                        t.setValueAtTime(t.value, r), t.exponentialRampToValueAtTime(e, n)
                }
            }
        }

        function u(t, e, i, n, r, a) {
            this.type = "filter", this.params = [t, e, i, n, r, a], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = a, this.dryNode = s(), this.dryNode.gain.value = 1 - a, this.filterNode = X.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = dt[t], this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = i), this.filterNode.Q.value = n, this.filterNode.gain.value = r, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
        }

        function p(t, e, i) {
            this.type = "delay", this.params = [t, e, i], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = i, this.dryNode = s(), this.dryNode.gain.value = 1 - i, this.mainNode = s(), this.delayNode = a(t), this.delayNode.delayTime.value = t, this.delayGainNode = s(), this.delayGainNode.gain.value = e, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
        }

        function d(t, e, i, n) {
            this.type = "convolve", this.params = [e, i, n], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = i, this.dryNode = s(), this.dryNode.gain.value = 1 - i, this.convolveNode = X.createConvolver(), t && (this.convolveNode.normalize = e, this.convolveNode.buffer = t), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
        }

        function f(t, e, i, n, r) {
            this.type = "flanger", this.params = [t, e, i, n, r], this.inputNode = s(), this.dryNode = s(), this.dryNode.gain.value = 1 - r / 2, this.wetNode = s(), this.wetNode.gain.value = r / 2, this.feedbackNode = s(), this.feedbackNode.gain.value = n, this.delayNode = a(t + e), this.delayNode.delayTime.value = t, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = s(), this.oscGainNode.gain.value = e, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), o(this.oscNode)
        }

        function g(t, e, i, n, r, a) {
            this.type = "phaser", this.params = [t, e, i, n, r, a], this.inputNode = s(), this.dryNode = s(), this.dryNode.gain.value = 1 - a / 2, this.wetNode = s(), this.wetNode.gain.value = a / 2, this.filterNode = X.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass", this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = e), this.filterNode.Q.value = i, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = r, this.oscGainNode = s(), this.oscGainNode.gain.value = n, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), o(this.oscNode)
        }

        function m(t) {
            this.type = "gain", this.params = [t], this.node = s(), this.node.gain.value = t
        }

        function y(t, e) {
            this.type = "tremolo", this.params = [t, e], this.node = s(), this.node.gain.value = 1 - e / 2, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = t, this.oscGainNode = s(), this.oscGainNode.gain.value = e / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), o(this.oscNode)
        }

        function _(t, e) {
            this.type = "ringmod", this.params = [t, e], this.inputNode = s(), this.wetNode = s(), this.wetNode.gain.value = e, this.dryNode = s(), this.dryNode.gain.value = 1 - e, this.ringNode = s(), this.ringNode.gain.value = 0, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = t, this.oscNode.connect(this.ringNode.gain), o(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
        }

        function v(t, e, n, r, a) {
            this.type = "distortion", this.params = [t, e, n, r, a], this.inputNode = s(), this.preGain = s(), this.postGain = s(), this.setDrive(n, i(r)), this.wetNode = s(), this.wetNode.gain.value = a, this.dryNode = s(), this.dryNode.gain.value = 1 - a, this.waveShaper = X.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(t, e), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
        }

        function b(t, e) {
            return 1 - Math.exp(-e * t)
        }

        function w(t, e, i, n, r) {
            this.type = "compressor", this.params = [t, e, i, n, r], this.node = X.createDynamicsCompressor();
            try {
                this.node.threshold.value = t, this.node.knee.value = e, this.node.ratio.value = i, this.node.attack.value = n, this.node.release.value = r
            } catch (s) {}
        }

        function x(t, e) {
            this.type = "analyser", this.params = [t, e], this.node = X.createAnalyser(), this.node.fftSize = t, this.node.smoothingTimeConstant = e, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(t), this.peak = 0, this.rms = 0
        }

        function S() {
            this.obj = null, this.loadUid = 0
        }

        function T(t, e) {
            this.src = t, this.myapi = U, this.is_music = e, this.added_end_listener = !1;
            var i = this;
            this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, this.wasEverReady = !1, U === V && e && !ut && (this.myapi = W, this.outNode = s()), this.bufferObject = null, this.audioData = null;
            var n;
            switch (this.myapi) {
                case W:
                    this.bufferObject = new Audio, this.bufferObject.crossOrigin = "anonymous", this.bufferObject.addEventListener("canplaythrough", function() {
                        i.wasEverReady = !0
                    }), U === V && X.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", function() {
                        i.mediaSourceNode || (i.mediaSourceNode = X.createMediaElementSource(i.bufferObject), i.mediaSourceNode.connect(i.outNode))
                    })), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = t;
                    break;
                case V:
                    N.isWKWebView ? N.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                        i.audioData = t, i.decodeAudioBuffer()
                    }, function(t) {
                        i.failedToLoad = !0
                    }) : (n = new XMLHttpRequest, n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = function() {
                        i.audioData = n.response, i.decodeAudioBuffer()
                    }, n.onerror = function() {
                        i.failedToLoad = !0
                    }, n.send());
                    break;
                case G:
                    this.bufferObject = !0;
                    break;
                case z:
                    this.bufferObject = !0
            }
        }

        function A(t, e) {
            var i = this;
            this.tag = e, this.fresh = !0, this.stopped = !0, this.src = t.src, this.buffer = t, this.myapi = U, this.is_music = t.is_music, this.playbackRate = 1, this.hasPlaybackEnded = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.onended_handler = function(t) {
                if (!i.is_paused && !i.resume_me) {
                    var e = this;
                    e || (e = t.target), e === i.active_buffer && (i.hasPlaybackEnded = !0, i.stopped = !0, M = i.tag, N.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, B))
                }
            }, this.active_buffer = null, this.isTimescaled = 1 === K && !this.is_music || 2 === K, this.mutevol = 1, this.startTime = this.isTimescaled ? N.kahanTime.sum : N.wallTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
            var n = !1;
            switch (this.myapi !== V || this.buffer.myapi !== W || this.buffer.supportWebAudioAPI || (this.myapi = W), this.myapi) {
                case W:
                    this.is_music ? (this.instanceObject = t.bufferObject, n = !t.added_end_listener, t.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.crossOrigin = "anonymous", this.instanceObject.autoplay = !1, this.instanceObject.src = t.bufferObject.src, n = !0), n && this.instanceObject.addEventListener("ended", function() {
                        M = i.tag, i.stopped = !0, N.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, B)
                    });
                    break;
                case V:
                    this.gainNode = s(), this.gainNode.connect(r(e)), this.buffer.myapi === V ? t.bufferObject && (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = t.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode), this.buffer.added_end_listener || (this.buffer.added_end_listener = !0, this.buffer.bufferObject.addEventListener("ended", function() {
                        M = i.tag, i.stopped = !0, N.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, B)
                    })));
                    break;
                case G:
                    this.instanceObject = new window.Media(D + this.src, null, null, function(t) {
                        t === window.Media.MEDIA_STOPPED && (i.hasPlaybackEnded = !0, i.stopped = !0, M = i.tag, N.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, B))
                    });
                    break;
                case z:
                    this.instanceObject = !0
            }
        }

        function O(t, e) {
            var i = t.isPlaying() ? 1 : 0,
                n = e.isPlaying() ? 1 : 0;
            return i === n ? 0 : i < n ? 1 : -1
        }

        function k(t, e) {
            if (cr.clearArray(_t), !t.length) return !q || q.hasEnded() ? void 0 : (cr.clearArray(_t), void(_t[0] = q));
            var i, n, r;
            for (i = 0, n = H.length; i < n; i++) r = H[i], cr.equals_nocase(t, r.tag) && _t.push(r);
            e && _t.sort(O)
        }

        function C(t) {
            var e, i, n, r, s = X.destination;
            if (pt.hasOwnProperty(t) && (n = pt[t], n.length))
                for (s = n[0].getInputNode(), e = 0, i = n.length; e < i; e++) r = n[e], e + 1 === i ? r.connectTo(X.destination) : r.connectTo(n[e + 1].getInputNode());
            for (k(t), e = 0, i = _t.length; e < i; e++) _t[e].reconnect(s);
            ot && ht === t && (ot.disconnect(), ot.connect(s))
        }

        function E(t, e) {
            pt.hasOwnProperty(t) ? pt[t].push(e) : pt[t] = [e], C(t)
        }

        function P() {}

        function I() {}

        function L() {}

        function R(t, e) {
            var i = null;
            return pt.hasOwnProperty(t) && (i = pt[t]), i && e >= 0 && e < i.length && i[e].freqBins ? i[e] : null
        }
        var F = cr.plugins_.Audio.prototype;
        F.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var j = F.Type.prototype;
        j.onCreate = function() {};
        var N = null,
            B = null,
            M = "",
            D = "",
            W = 0,
            V = 1,
            G = 2,
            z = 3,
            U = W,
            X = null,
            Y = [],
            H = [],
            q = null,
            J = !1,
            K = 0,
            Z = !1,
            Q = 1,
            $ = 0,
            tt = 0,
            et = !1,
            it = 1,
            nt = 1,
            rt = 10,
            st = 1e4,
            at = 1,
            ot = null,
            ht = "",
            ct = !1,
            lt = [],
            ut = !1,
            pt = {},
            dt = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];
        u.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, u.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, u.prototype.getInputNode = function() {
            return this.inputNode
        }, u.prototype.setParam = function(t, e, i, n) {
            switch (t) {
                case 0:
                    e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n);
                    break;
                case 1:
                    this.params[1] = e, l(this.filterNode.frequency, e, i, n);
                    break;
                case 2:
                    this.params[2] = e, l(this.filterNode.detune, e, i, n);
                    break;
                case 3:
                    this.params[3] = e, l(this.filterNode.Q, e, i, n);
                    break;
                case 4:
                    this.params[4] = e, l(this.filterNode.gain, e, i, n)
            }
        }, p.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, p.prototype.remove = function() {
            this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, p.prototype.getInputNode = function() {
            return this.inputNode
        }, p.prototype.setParam = function(e, i, n, r) {
            switch (e) {
                case 0:
                    i /= 100, i < 0 && (i = 0), i > 1 && (i = 1), this.params[2] = i, l(this.wetNode.gain, i, n, r), l(this.dryNode.gain, 1 - i, n, r);
                    break;
                case 4:
                    this.params[1] = t(i), l(this.delayGainNode.gain, t(i), n, r);
                    break;
                case 5:
                    this.params[0] = i, l(this.delayNode.delayTime, i, n, r)
            }
        }, d.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, d.prototype.remove = function() {
            this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, d.prototype.getInputNode = function() {
            return this.inputNode
        }, d.prototype.setParam = function(t, e, i, n) {
            switch (t) {
                case 0:
                    e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n)
            }
        }, f.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, f.prototype.remove = function() {
            this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
        }, f.prototype.getInputNode = function() {
            return this.inputNode
        }, f.prototype.setParam = function(t, e, i, n) {
            switch (t) {
                case 0:
                    e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, l(this.wetNode.gain, e / 2, i, n), l(this.dryNode.gain, 1 - e / 2, i, n);
                    break;
                case 6:
                    this.params[1] = e / 1e3, l(this.oscGainNode.gain, e / 1e3, i, n);
                    break;
                case 7:
                    this.params[2] = e, l(this.oscNode.frequency, e, i, n);
                    break;
                case 8:
                    this.params[3] = e / 100, l(this.feedbackNode.gain, e / 100, i, n)
            }
        }, g.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, g.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
        }, g.prototype.getInputNode = function() {
            return this.inputNode
        }, g.prototype.setParam = function(t, e, i, n) {
            switch (t) {
                case 0:
                    e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[5] = e, l(this.wetNode.gain, e / 2, i, n), l(this.dryNode.gain, 1 - e / 2, i, n);
                    break;
                case 1:
                    this.params[0] = e, l(this.filterNode.frequency, e, i, n);
                    break;
                case 2:
                    this.params[1] = e, l(this.filterNode.detune, e, i, n);
                    break;
                case 3:
                    this.params[2] = e, l(this.filterNode.Q, e, i, n);
                    break;
                case 6:
                    this.params[3] = e, l(this.oscGainNode.gain, e, i, n);
                    break;
                case 7:
                    this.params[4] = e, l(this.oscNode.frequency, e, i, n)
            }
        }, m.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, m.prototype.remove = function() {
            this.node.disconnect()
        }, m.prototype.getInputNode = function() {
            return this.node
        }, m.prototype.setParam = function(e, i, n, r) {
            switch (e) {
                case 4:
                    this.params[0] = t(i), l(this.node.gain, t(i), n, r)
            }
        }, y.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, y.prototype.remove = function() {
            this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
        }, y.prototype.getInputNode = function() {
            return this.node
        }, y.prototype.setParam = function(t, e, i, n) {
            switch (t) {
                case 0:
                    e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.node.gain.value, 1 - e / 2, i, n), l(this.oscGainNode.gain.value, e / 2, i, n);
                    break;
                case 7:
                    this.params[0] = e, l(this.oscNode.frequency, e, i, n)
            }
        }, _.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, _.prototype.remove = function() {
            this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, _.prototype.getInputNode = function() {
            return this.inputNode
        }, _.prototype.setParam = function(t, e, i, n) {
            switch (t) {
                case 0:
                    e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n);
                    break;
                case 7:
                    this.params[0] = e, l(this.oscNode.frequency, e, i, n)
            }
        }, v.prototype.setDrive = function(t, e) {
            t < .01 && (t = .01), this.preGain.gain.value = t, this.postGain.gain.value = Math.pow(1 / t, .6) * e
        }, v.prototype.shape = function(t, e, i) {
            var n = 1.05 * i * e,
                r = n - e,
                s = t < 0 ? -1 : 1,
                a = t < 0 ? -t : t,
                o = a < e ? a : e + r * b(a - e, 1 / r);
            return o *= s
        }, v.prototype.generateColortouchCurve = function(t, e) {
            for (var n = i(t), r = i(e), s = 65536, a = s / 2, o = 0, h = 0; h < a; ++h) o = h / a, o = this.shape(o, n, r), this.curve[a + h] = o, this.curve[a - h - 1] = -o
        }, v.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, v.prototype.remove = function() {
            this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, v.prototype.getInputNode = function() {
            return this.inputNode
        }, v.prototype.setParam = function(t, e, i, n) {
            switch (t) {
                case 0:
                    e /= 100, e < 0 && (e = 0), e > 1 && (e = 1), this.params[4] = e, l(this.wetNode.gain, e, i, n), l(this.dryNode.gain, 1 - e, i, n)
            }
        }, w.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, w.prototype.remove = function() {
            this.node.disconnect()
        }, w.prototype.getInputNode = function() {
            return this.node
        }, w.prototype.setParam = function(t, e, i, n) {}, x.prototype.tick = function() {
            this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
            var t = this.node.fftSize,
                i = 0;
            this.peak = 0;
            for (var n = 0, r = 0; i < t; i++) r = (this.signal[i] - 128) / 128, r < 0 && (r = -r), this.peak < r && (this.peak = r), n += r * r;
            this.peak = e(this.peak), this.rms = e(Math.sqrt(n / t))
        }, x.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, x.prototype.remove = function() {
            this.node.disconnect()
        }, x.prototype.getInputNode = function() {
            return this.node
        }, x.prototype.setParam = function(t, e, i, n) {}, S.prototype.setObject = function(t) {
            this.obj = t
        }, S.prototype.hasObject = function() {
            return !!this.obj
        }, S.prototype.tick = function(t) {};
        var ft = !1;
        T.prototype.release = function() {
            var t, e, i, n;
            for (t = 0, i = 0, e = H.length; t < e; ++t) n = H[t], H[i] = n, n.buffer === this ? n.stop() : ++i;
            H.length = i, this.bufferObject = null, this.audioData = null
        }, T.prototype.decodeAudioBuffer = function() {
            if (!this.bufferObject && this.audioData) {
                var t = this;
                if (X.decodeAudioData) X.decodeAudioData(this.audioData, function(e) {
                    t.bufferObject = e, t.audioData = null;
                    var i, n, r, s;
                    if (cr.is_undefined(t.playTagWhenReady) || Z) {
                        if (!cr.is_undefined(t.convolveWhenReady)) {
                            var a = t.convolveWhenReady.convolveNode;
                            a.normalize = t.normalizeWhenReady, a.buffer = e
                        }
                    } else if (t.panWhenReady.length) {
                        for (n = 0, r = t.panWhenReady.length; n < r; n++)
                            if (i = t.panWhenReady[n], s = new A(t, i.thistag), s.setPannerEnabled(!0), "undefined" == typeof i.objUid || (i.obj = N.getObjectByUID(i.objUid), i.obj)) {
                                if (i.obj) {
                                    var o = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), $, tt, !0),
                                        h = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), $, tt, !1);
                                    s.setPan(o, h, cr.to_degrees(i.obj.angle - i.obj.layer.getAngle()), i.ia, i.oa, i.og), s.setObject(i.obj)
                                } else s.setPan(i.x, i.y, i.a, i.ia, i.oa, i.og);
                                s.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && s.pause(), H.push(s)
                            }
                        cr.clearArray(t.panWhenReady)
                    } else s = new A(t, t.playTagWhenReady || ""), s.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && s.pause(), H.push(s)
                }, function(e) {
                    t.failedToLoad = !0
                });
                else if (this.bufferObject = X.createBuffer(this.audioData, !1), this.audioData = null, cr.is_undefined(this.playTagWhenReady) || Z) {
                    if (!cr.is_undefined(this.convolveWhenReady)) {
                        var e = this.convolveWhenReady.convolveNode;
                        e.normalize = this.normalizeWhenReady, e.buffer = this.bufferObject
                    }
                } else {
                    var i = new A(this, this.playTagWhenReady);
                    i.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && i.pause(), H.push(i)
                }
            }
        }, T.prototype.isLoaded = function() {
            switch (this.myapi) {
                case W:
                    var t = this.bufferObject.readyState >= 4;
                    return t && (this.wasEverReady = !0), t || this.wasEverReady;
                case V:
                    return !!this.audioData || !!this.bufferObject;
                case G:
                    return !0;
                case z:
                    return !0
            }
            return !1
        }, T.prototype.isLoadedAndDecoded = function() {
            switch (this.myapi) {
                case W:
                    return this.isLoaded();
                case V:
                    return !!this.bufferObject;
                case G:
                    return !0;
                case z:
                    return !0
            }
            return !1
        }, T.prototype.hasFailedToLoad = function() {
            switch (this.myapi) {
                case W:
                    return !!this.bufferObject.error;
                case V:
                    return this.failedToLoad
            }
            return !1
        }, A.prototype.hasEnded = function() {
            switch (this.myapi) {
                case W:
                    return this.instanceObject.ended;
                case V:
                    return this.buffer.myapi === V ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
                case G:
                    return this.hasPlaybackEnded;
                case z:
            }
            return !0
        }, A.prototype.canBeRecycled = function() {
            return !(!this.fresh && !this.stopped) || this.hasEnded()
        }, A.prototype.setPannerEnabled = function(t) {
            if (U === V)
                if (!this.pannerEnabled && t) {
                    if (!this.gainNode) return;
                    this.pannerNode || (this.pannerNode = X.createPanner(), "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = it : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][it], "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = nt : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][nt], this.pannerNode.refDistance = rt, this.pannerNode.maxDistance = st, this.pannerNode.rolloffFactor = at), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(r(this.tag)), this.pannerEnabled = !0
                } else if (this.pannerEnabled && !t) {
                if (!this.gainNode) return;
                this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(r(this.tag)), this.pannerEnabled = !1
            }
        }, A.prototype.setPan = function(t, e, i, n, r, s) {
            this.pannerEnabled && U === V && (this.pannerNode.setPosition(t, e, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0), this.pannerNode.coneInnerAngle = n, this.pannerNode.coneOuterAngle = r, this.pannerNode.coneOuterGain = s, this.panX = t, this.panY = e, this.panAngle = i, this.panConeInner = n,
                this.panConeOuter = r, this.panConeOuterGain = s)
        }, A.prototype.setObject = function(t) {
            this.pannerEnabled && U === V && (this.objectTracker || (this.objectTracker = new S), this.objectTracker.setObject(t))
        }, A.prototype.tick = function(t) {
            if (this.pannerEnabled && U === V && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
                this.objectTracker.tick(t);
                var e = this.objectTracker.obj,
                    i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), $, tt, !0),
                    n = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), $, tt, !1);
                this.pannerNode.setPosition(i, n, 0);
                var r = 0;
                "undefined" != typeof this.objectTracker.obj.angle && (r = e.angle - e.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(r), Math.sin(r), 0))
            }
        }, A.prototype.play = function(t, e, i, n) {
            var r = this.instanceObject;
            this.looping = t, this.volume = e;
            var s = i || 0;
            switch (n = n || 0, this.myapi) {
                case W:
                    if (1 !== r.playbackRate && (r.playbackRate = 1), r.volume !== e * Q && (r.volume = e * Q), r.loop !== t && (r.loop = t), r.muted && (r.muted = !1), r.currentTime !== s) try {
                        r.currentTime = s
                    } catch (a) {}
                    if (this.is_music && ct && !N.isInUserInputEvent) lt.push(this);
                    else try {
                        this.instanceObject.play()
                    } catch (c) {
                        console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", c)
                    }
                    break;
                case V:
                    if (this.muted = !1, this.mutevol = 1, this.buffer.myapi === V) this.gainNode.gain.value = e * Q, this.fresh || (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = t, this.hasPlaybackEnded = !1, 0 === s ? o(this.instanceObject, n) : h(this.instanceObject, s, this.getDuration(), n);
                    else {
                        if (1 !== r.playbackRate && (r.playbackRate = 1), r.loop !== t && (r.loop = t), r.volume = e * Q, r.currentTime !== s) try {
                            r.currentTime = s
                        } catch (a) {}
                        this.is_music && ct && !N.isInUserInputEvent ? lt.push(this) : r.play()
                    }
                    break;
                case G:
                    (!this.fresh && this.stopped || 0 !== s) && r.seekTo(s), r.play(), this.hasPlaybackEnded = !1;
                    break;
                case z:
                    N.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t)
            }
            this.playbackRate = 1, this.startTime = (this.isTimescaled ? N.kahanTime.sum : N.wallTime.sum) - s, this.fresh = !1, this.stopped = !1, this.is_paused = !1
        }, A.prototype.stop = function() {
            switch (this.myapi) {
                case W:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case V:
                    this.buffer.myapi === V ? c(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case G:
                    this.instanceObject.stop();
                    break;
                case z:
                    N.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.stopped = !0, this.is_paused = !1
        }, A.prototype.pause = function() {
            if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
                switch (this.myapi) {
                    case W:
                        this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case V:
                        this.buffer.myapi === V ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), this.is_paused = !0, c(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case G:
                        this.instanceObject.pause();
                        break;
                    case z:
                        N.isDirectCanvas && AppMobi.context.stopSound(this.src)
                }
                this.is_paused = !0
            }
        }, A.prototype.resume = function() {
            if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
                switch (this.myapi) {
                    case W:
                        this.instanceObject.play();
                        break;
                    case V:
                        this.buffer.myapi === V ? (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = Q * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? N.kahanTime.sum : N.wallTime.sum) - this.resume_position / (this.playbackRate || .001), h(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play();
                        break;
                    case G:
                        this.instanceObject.play();
                        break;
                    case z:
                        N.isDirectCanvas && AppMobi.context.resumeSound(this.src)
                }
                this.is_paused = !1
            }
        }, A.prototype.seek = function(t) {
            if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
                case W:
                    try {
                        this.instanceObject.currentTime = t
                    } catch (e) {}
                    break;
                case V:
                    if (this.buffer.myapi === V) this.is_paused ? this.resume_position = t : (this.pause(), this.resume_position = t, this.resume());
                    else try {
                        this.instanceObject.currentTime = t
                    } catch (e) {}
                    break;
                case G:
                    break;
                case z:
                    N.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
            }
        }, A.prototype.reconnect = function(t) {
            this.myapi === V && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(t)) : (this.gainNode.disconnect(), this.gainNode.connect(t)))
        }, A.prototype.getDuration = function(t) {
            var e = 0;
            switch (this.myapi) {
                case W:
                    "undefined" != typeof this.instanceObject.duration && (e = this.instanceObject.duration);
                    break;
                case V:
                    e = this.buffer.bufferObject.duration;
                    break;
                case G:
                    e = this.instanceObject.getDuration();
                    break;
                case z:
                    N.isDirectCanvas && (e = AppMobi.context.getDurationSound(this.src))
            }
            return t && (e /= this.playbackRate || .001), e
        }, A.prototype.getPlaybackTime = function(t) {
            var e = this.getDuration(),
                i = 0;
            switch (this.myapi) {
                case W:
                    "undefined" != typeof this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case V:
                    if (this.buffer.myapi === V) {
                        if (this.is_paused) return this.resume_position;
                        i = (this.isTimescaled ? N.kahanTime.sum : N.wallTime.sum) - this.startTime
                    } else "undefined" != typeof this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case G:
                    break;
                case z:
                    N.isDirectCanvas && (i = AppMobi.context.getPlaybackTimeSound(this.src))
            }
            return t && (i *= this.playbackRate), !this.looping && i > e && (i = e), i
        }, A.prototype.isPlaying = function() {
            return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
        }, A.prototype.shouldSave = function() {
            return !this.fresh && !this.stopped && !this.hasEnded()
        }, A.prototype.setVolume = function(t) {
            this.volume = t, this.updateVolume()
        }, A.prototype.updateVolume = function() {
            var t = this.volume * Q;
            switch (isFinite(t) || (t = 0), this.myapi) {
                case W:
                    "undefined" != typeof this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case V:
                    this.buffer.myapi === V ? this.gainNode.gain.value = t * this.mutevol : "undefined" != typeof this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case G:
                    break;
                case z:
            }
        }, A.prototype.getVolume = function() {
            return this.volume
        }, A.prototype.doSetMuted = function(t) {
            switch (this.myapi) {
                case W:
                    this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case V:
                    this.buffer.myapi === V ? (this.mutevol = t ? 0 : 1, this.gainNode.gain.value = Q * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case G:
                    break;
                case z:
            }
        }, A.prototype.setMuted = function(t) {
            this.is_muted = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, A.prototype.setSilent = function(t) {
            this.is_silent = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, A.prototype.setLooping = function(t) {
            switch (this.looping = t, this.myapi) {
                case W:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case V:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case G:
                    break;
                case z:
                    N.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
            }
        }, A.prototype.setPlaybackRate = function(t) {
            this.playbackRate = t, this.updatePlaybackRate()
        }, A.prototype.updatePlaybackRate = function() {
            var t = this.playbackRate;
            switch (this.isTimescaled && (t *= N.timescale), this.myapi) {
                case W:
                    this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case V:
                    this.buffer.myapi === V ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case G:
                    break;
                case z:
            }
        }, A.prototype.setSuspended = function(t) {
            switch (this.myapi) {
                case W:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(), this.resume_me = !1);
                    break;
                case V:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.buffer.myapi === V ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), c(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === V ? (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = Q * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? N.kahanTime.sum : N.wallTime.sum) - this.resume_position / (this.playbackRate || .001), h(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(), this.resume_me = !1);
                    break;
                case G:
                    t ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1, this.instanceObject.play());
                    break;
                case z:
            }
        }, F.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, N = this.runtime, B = this, this.listenerTracker = null, this.listenerZ = -600, this.runtime.isWKWebView && (ut = !0), !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || ut || (ct = !0), X = null, "undefined" != typeof AudioContext ? (U = V, X = new AudioContext) : "undefined" != typeof webkitAudioContext && (U = V, X = new webkitAudioContext), this.runtime.isiOS && X && (X.close && X.close(), "undefined" != typeof AudioContext ? X = new AudioContext : "undefined" != typeof webkitAudioContext && (X = new webkitAudioContext));
            var e = (this.runtime.isAndroid, function() {
                if (!et && X.createBuffer) {
                    var t = X.createBuffer(1, 220, 22050),
                        e = X.createBufferSource();
                    e.buffer = t, e.connect(X.destination), o(e)
                }
            });
            if (ct) {
                var i = function() {
                    var t, e, i;
                    if (ct) {
                        if (!Z)
                            for (t = 0, e = lt.length; t < e; ++t) i = lt[t], i.stopped || i.is_paused || i.instanceObject.play();
                        cr.clearArray(lt)
                    }
                };
                document.addEventListener("touchend", function() {
                    !ft && X && (e(), ft = !0), i()
                }, !0)
            } else ut && document.addEventListener("touchend", function() {
                !ft && X && (e(), ft = !0)
            }, !0); if (U !== V && (this.runtime.isCordova && "undefined" != typeof window.Media ? U = G : this.runtime.isAppMobi && (U = z)), U === G) {
                D = location.href;
                var n = D.lastIndexOf("/");
                n > -1 && (D = D.substr(0, n + 1)), D = D.replace("file://", "")
            }
            if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this);
            else {
                if (this.runtime.isDirectCanvas) J = this.runtime.isAndroid;
                else try {
                    J = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (r) {
                    J = !1
                }
                switch (U) {
                    case W:
                        break;
                    case V:
                        break;
                    case G:
                        break;
                    case z:
                }
                this.runtime.tickMe(this)
            }
        };
        var gt = F.Instance.prototype;
        gt.onCreate = function() {
            this.runtime.audioInstance = this, K = this.properties[0], this.saveload = this.properties[1], this.playinbackground = 0 !== this.properties[2], this.nextPlayTime = 0, it = this.properties[3], nt = this.properties[4], this.listenerZ = -this.properties[5], rt = this.properties[6], st = this.properties[7], at = this.properties[8], this.listenerTracker = new S;
            var t = this.runtime.draw_width || this.runtime.width,
                e = this.runtime.draw_height || this.runtime.height;
            U === V && (X.listener.setPosition(t / 2, e / 2, this.listenerZ), X.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(t, e) {
                ot && ot.disconnect(), ht = e.toLowerCase(), ot = X.createMediaStreamSource(t), ot.connect(r(ht))
            }), this.runtime.addSuspendCallback(function(t) {
                B.onSuspend(t)
            });
            var i = this;
            this.runtime.addDestroyCallback(function(t) {
                i.onInstanceDestroyed(t)
            })
        }, gt.onInstanceDestroyed = function(t) {
            var e, i, n;
            for (e = 0, i = H.length; e < i; e++) n = H[e], n.objectTracker && n.objectTracker.obj === t && (n.objectTracker.obj = null, n.pannerEnabled && n.isPlaying() && n.looping && n.stop());
            this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
        }, gt.saveToJSON = function() {
            var t, e, i, n, r, s, a, o = {
                    silent: Z,
                    masterVolume: Q,
                    listenerZ: this.listenerZ,
                    listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
                    playing: [],
                    effects: {}
                },
                h = o.playing;
            for (t = 0, e = H.length; t < e; t++) i = H[t], i.shouldSave() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || (i.is_music || 2 !== this.saveload) && (a = i.getPlaybackTime(), i.looping && (a %= i.getDuration()), n = {
                tag: i.tag,
                buffersrc: i.buffer.src,
                is_music: i.is_music,
                playbackTime: a,
                volume: i.volume,
                looping: i.looping,
                muted: i.is_muted,
                playbackRate: i.playbackRate,
                paused: i.is_paused,
                resume_position: i.resume_position
            }, i.pannerEnabled && (n.pan = {}, s = n.pan, i.objectTracker && i.objectTracker.hasObject() ? s.objUid = i.objectTracker.obj.uid : (s.x = i.panX, s.y = i.panY, s.a = i.panAngle), s.ia = i.panConeInner, s.oa = i.panConeOuter, s.og = i.panConeOuterGain), h.push(n)));
            var c, l = o.effects;
            for (r in pt)
                if (pt.hasOwnProperty(r)) {
                    for (c = [], t = 0, e = pt[r].length; t < e; t++) c.push({
                        type: pt[r][t].type,
                        params: pt[r][t].params
                    });
                    l[r] = c
                }
            return o
        };
        var mt = [];
        gt.loadFromJSON = function(t) {
            var e = t.silent;
            Q = t.masterVolume, this.listenerZ = t.listenerZ, this.listenerTracker.setObject(null);
            var i = t.listenerUid;
            i !== -1 && (this.listenerTracker.loadUid = i, mt.push(this.listenerTracker));
            var n, r, s, a, o, h, c, l, b, T, A, O, k, C, P = t.playing;
            if (3 !== this.saveload)
                for (n = 0, r = H.length; n < r; n++) A = H[n], A.is_music && 1 === this.saveload || (A.is_music || 2 !== this.saveload) && A.stop();
            var I, L, R, F;
            for (O in pt)
                if (pt.hasOwnProperty(O))
                    for (n = 0, r = pt[O].length; n < r; n++) pt[O][n].remove();
            cr.wipe(pt);
            for (O in t.effects)
                if (t.effects.hasOwnProperty(O))
                    for (I = t.effects[O], n = 0, r = I.length; n < r; n++) switch (L = I[n].type, R = I[n].params, L) {
                        case "filter":
                            E(O, new u(R[0], R[1], R[2], R[3], R[4], R[5]));
                            break;
                        case "delay":
                            E(O, new p(R[0], R[1], R[2]));
                            break;
                        case "convolve":
                            a = R[2], T = this.getAudioBuffer(a, !1), T.bufferObject ? F = new d(T.bufferObject, R[0], R[1], a) : (F = new d(null, R[0], R[1], a), T.normalizeWhenReady = R[0], T.convolveWhenReady = F), E(O, F);
                            break;
                        case "flanger":
                            E(O, new f(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "phaser":
                            E(O, new g(R[0], R[1], R[2], R[3], R[4], R[5]));
                            break;
                        case "gain":
                            E(O, new m(R[0]));
                            break;
                        case "tremolo":
                            E(O, new y(R[0], R[1]));
                            break;
                        case "ringmod":
                            E(O, new _(R[0], R[1]));
                            break;
                        case "distortion":
                            E(O, new v(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "compressor":
                            E(O, new w(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "analyser":
                            E(O, new x(R[0], R[1]))
                    }
                for (n = 0, r = P.length; n < r; n++) 3 !== this.saveload && (s = P[n], a = s.buffersrc, o = s.is_music, h = s.tag, c = s.playbackTime, l = s.looping, b = s.volume, k = s.pan, C = k && k.hasOwnProperty("objUid") ? k.objUid : -1, o && 1 === this.saveload || (o || 2 !== this.saveload) && (A = this.getAudioInstance(a, h, o, l, b), A ? (A.resume_position = s.resume_position, A.setPannerEnabled(!!k), A.play(l, b, c), A.updatePlaybackRate(), A.updateVolume(), A.doSetMuted(A.is_muted || A.is_silent), s.paused && A.pause(), s.muted && A.setMuted(!0), A.doSetMuted(A.is_muted || A.is_silent), k && (C !== -1 ? (A.objectTracker = A.objectTracker || new S, A.objectTracker.loadUid = C, mt.push(A.objectTracker)) : A.setPan(k.x, k.y, k.a, k.ia, k.oa, k.og))) : (T = this.getAudioBuffer(a, o), T.seekWhenReady = c, T.pauseWhenReady = s.paused, k && (C !== -1 ? T.panWhenReady.push({
                    objUid: C,
                    ia: k.ia,
                    oa: k.oa,
                    og: k.og,
                    thistag: h
                }) : T.panWhenReady.push({
                    x: k.x,
                    y: k.y,
                    a: k.a,
                    ia: k.ia,
                    oa: k.oa,
                    og: k.og,
                    thistag: h
                })))));
            if (e && !Z) {
                for (n = 0, r = H.length; n < r; n++) H[n].setSilent(!0);
                Z = !0
            } else if (!e && Z) {
                for (n = 0, r = H.length; n < r; n++) H[n].setSilent(!1);
                Z = !1
            }
        }, gt.afterLoad = function() {
            var t, e, i, n;
            for (t = 0, e = mt.length; t < e; t++) i = mt[t], n = this.runtime.getObjectByUID(i.loadUid), i.setObject(n), i.loadUid = -1, n && ($ = n.x, tt = n.y);
            cr.clearArray(mt)
        }, gt.onSuspend = function(t) {
            if (!this.playinbackground) {
                !t && X && X.resume && (X.resume(), et = !1);
                var e, i;
                for (e = 0, i = H.length; e < i; e++) H[e].setSuspended(t);
                t && X && X.suspend && (X.suspend(), et = !0)
            }
        }, gt.tick = function() {
            var t, e, i, n = this.runtime.dt;
            for (t = 0, e = H.length; t < e; t++) i = H[t], i.tick(n), 0 !== K && i.updatePlaybackRate();
            var r, s, a;
            for (r in pt)
                if (pt.hasOwnProperty(r))
                    for (s = pt[r], t = 0, e = s.length; t < e; t++) a = s[t], a.tick && a.tick();
            U === V && this.listenerTracker.hasObject() && (this.listenerTracker.tick(n), $ = this.listenerTracker.obj.x, tt = this.listenerTracker.obj.y, X.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
        };
        var yt = [];
        gt.setPreloadList = function(t) {
            var e, i, n, r, s, a, o = 0;
            for (e = 0, i = t.length; e < i; ++e) n = t[e], r = n[0], s = 2 * n[1], a = r.length > 4 && ".ogg" === r.substr(r.length - 4), (a && J || !a && !J) && (yt.push({
                filename: r,
                size: s,
                obj: null
            }), o += s);
            return o
        }, gt.startPreloads = function() {
            var t, e, i, n;
            for (t = 0, e = yt.length; t < e; ++t) i = yt[t], n = this.runtime.files_subfolder + i.filename, i.obj = this.getAudioBuffer(n, !1)
        }, gt.getPreloadedSize = function() {
            var t, e, i, n = 0;
            for (t = 0, e = yt.length; t < e; ++t) i = yt[t], i.obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? n += i.size : i.obj.isLoaded() && (n += Math.floor(i.size / 2));
            return n
        }, gt.releaseAllMusicBuffers = function() {
            var t, e, i, n;
            for (t = 0, i = 0, e = Y.length; t < e; ++t) n = Y[t], Y[i] = n, n.is_music ? n.release() : ++i;
            Y.length = i
        }, gt.getAudioBuffer = function(t, e, i) {
            var n, r, s, a = null;
            for (n = 0, r = Y.length; n < r; n++)
                if (s = Y[n], s.src === t) {
                    a = s;
                    break
                }
            return a || i || (ut && e && this.releaseAllMusicBuffers(), a = new T(t, e), Y.push(a)), a
        }, gt.getAudioInstance = function(t, e, i, n, r) {
            var s, a, o;
            for (s = 0, a = H.length; s < a; s++)
                if (o = H[s], o.src === t && (o.canBeRecycled() || i)) return o.tag = e, o;
            var h = this.getAudioBuffer(t, i);
            return h.bufferObject ? (o = new A(h, e), H.push(o), o) : ("<preload>" !== e && (h.playTagWhenReady = e, h.loopWhenReady = n, h.volumeWhenReady = r), null)
        };
        var _t = [];
        P.prototype.OnEnded = function(t) {
            return cr.equals_nocase(M, t)
        }, P.prototype.PreloadsComplete = function() {
            var t, e;
            for (t = 0, e = Y.length; t < e; t++)
                if (!Y[t].isLoadedAndDecoded() && !Y[t].hasFailedToLoad()) return !1;
            return !0
        }, P.prototype.AdvancedAudioSupported = function() {
            return U === V
        }, P.prototype.IsSilent = function() {
            return Z
        }, P.prototype.IsAnyPlaying = function() {
            var t, e;
            for (t = 0, e = H.length; t < e; t++)
                if (H[t].isPlaying()) return !0;
            return !1
        }, P.prototype.IsTagPlaying = function(t) {
            k(t);
            var e, i;
            for (e = 0, i = _t.length; e < i; e++)
                if (_t[e].isPlaying()) return !0;
            return !1
        }, F.cnds = new P, I.prototype.Play = function(e, i, n, r) {
            if (!Z) {
                var s = t(n),
                    a = e[1],
                    o = this.runtime.files_subfolder + e[0] + (J ? ".ogg" : ".m4a");
                q = this.getAudioInstance(o, r, a, 0 !== i, s), q && (q.setPannerEnabled(!1), q.play(0 !== i, s, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, I.prototype.PlayAtPosition = function(e, i, n, r, s, a, o, h, c, l) {
            if (!Z) {
                var u = t(n),
                    p = e[1],
                    d = this.runtime.files_subfolder + e[0] + (J ? ".ogg" : ".m4a");
                if (q = this.getAudioInstance(d, l, p, 0 !== i, u), !q) {
                    var f = this.getAudioBuffer(d, p);
                    return void f.panWhenReady.push({
                        x: r,
                        y: s,
                        a: a,
                        ia: o,
                        oa: h,
                        og: t(c),
                        thistag: l
                    })
                }
                q.setPannerEnabled(!0), q.setPan(r, s, a, o, h, t(c)), q.play(0 !== i, u, 0, this.nextPlayTime), this.nextPlayTime = 0
            }
        }, I.prototype.PlayAtObject = function(e, i, n, r, s, a, o, h) {
            if (!Z && r) {
                var c = r.getFirstPicked();
                if (c) {
                    var l = t(n),
                        u = e[1],
                        p = this.runtime.files_subfolder + e[0] + (J ? ".ogg" : ".m4a");
                    if (q = this.getAudioInstance(p, h, u, 0 !== i, l), !q) {
                        var d = this.getAudioBuffer(p, u);
                        return void d.panWhenReady.push({
                            obj: c,
                            ia: s,
                            oa: a,
                            og: t(o),
                            thistag: h
                        })
                    }
                    q.setPannerEnabled(!0);
                    var f = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), $, tt, !0),
                        g = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), $, tt, !1);
                    q.setPan(f, g, cr.to_degrees(c.angle - c.layer.getAngle()), s, a, t(o)), q.setObject(c), q.play(0 !== i, l, 0, this.nextPlayTime), this.nextPlayTime = 0
                }
            }
        }, I.prototype.PlayByName = function(e, i, n, r, s) {
            if (!Z) {
                var a = t(r),
                    o = 1 === e,
                    h = this.runtime.files_subfolder + i.toLowerCase() + (J ? ".ogg" : ".m4a");
                q = this.getAudioInstance(h, s, o, 0 !== n, a), q && (q.setPannerEnabled(!1), q.play(0 !== n, a, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, I.prototype.PlayAtPositionByName = function(e, i, n, r, s, a, o, h, c, l, u) {
            if (!Z) {
                var p = t(r),
                    d = 1 === e,
                    f = this.runtime.files_subfolder + i.toLowerCase() + (J ? ".ogg" : ".m4a");
                if (q = this.getAudioInstance(f, u, d, 0 !== n, p), !q) {
                    var g = this.getAudioBuffer(f, d);
                    return void g.panWhenReady.push({
                        x: s,
                        y: a,
                        a: o,
                        ia: h,
                        oa: c,
                        og: t(l),
                        thistag: u
                    })
                }
                q.setPannerEnabled(!0), q.setPan(s, a, o, h, c, t(l)), q.play(0 !== n, p, 0, this.nextPlayTime), this.nextPlayTime = 0
            }
        }, I.prototype.PlayAtObjectByName = function(e, i, n, r, s, a, o, h, c) {
            if (!Z && s) {
                var l = s.getFirstPicked();
                if (l) {
                    var u = t(r),
                        p = 1 === e,
                        d = this.runtime.files_subfolder + i.toLowerCase() + (J ? ".ogg" : ".m4a");
                    if (q = this.getAudioInstance(d, c, p, 0 !== n, u), !q) {
                        var f = this.getAudioBuffer(d, p);
                        return void f.panWhenReady.push({
                            obj: l,
                            ia: a,
                            oa: o,
                            og: t(h),
                            thistag: c
                        })
                    }
                    q.setPannerEnabled(!0);
                    var g = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), $, tt, !0),
                        m = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), $, tt, !1);
                    q.setPan(g, m, cr.to_degrees(l.angle - l.layer.getAngle()), a, o, t(h)), q.setObject(l), q.play(0 !== n, u, 0, this.nextPlayTime), this.nextPlayTime = 0
                }
            }
        }, I.prototype.SetLooping = function(t, e) {
            k(t);
            var i, n;
            for (i = 0, n = _t.length; i < n; i++) _t[i].setLooping(0 === e)
        }, I.prototype.SetMuted = function(t, e) {
            k(t);
            var i, n;
            for (i = 0, n = _t.length; i < n; i++) _t[i].setMuted(0 === e)
        }, I.prototype.SetVolume = function(e, i) {
            k(e);
            var n, r, s = t(i);
            for (n = 0, r = _t.length; n < r; n++) _t[n].setVolume(s)
        }, I.prototype.Preload = function(t) {
            if (!Z) {
                var e = t[1],
                    i = this.runtime.files_subfolder + t[0] + (J ? ".ogg" : ".m4a");
                return U === z ? void(this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)) : void(U !== G && this.getAudioInstance(i, "<preload>", e, !1))
            }
        }, I.prototype.PreloadByName = function(t, e) {
            if (!Z) {
                var i = 1 === t,
                    n = this.runtime.files_subfolder + e.toLowerCase() + (J ? ".ogg" : ".m4a");
                return U === z ? void(this.runtime.isDirectCanvas ? AppMobi.context.loadSound(n) : AppMobi.player.loadSound(n)) : void(U !== G && this.getAudioInstance(n, "<preload>", i, !1))
            }
        }, I.prototype.SetPlaybackRate = function(t, e) {
            k(t), e < 0 && (e = 0);
            var i, n;
            for (i = 0, n = _t.length; i < n; i++) _t[i].setPlaybackRate(e)
        }, I.prototype.Stop = function(t) {
            k(t);
            var e, i;
            for (e = 0, i = _t.length; e < i; e++) _t[e].stop()
        }, I.prototype.StopAll = function() {
            var t, e;
            for (t = 0, e = H.length; t < e; t++) H[t].stop()
        }, I.prototype.SetPaused = function(t, e) {
            k(t);
            var i, n;
            for (i = 0, n = _t.length; i < n; i++) 0 === e ? _t[i].pause() : _t[i].resume()
        }, I.prototype.Seek = function(t, e) {
            k(t);
            var i, n;
            for (i = 0, n = _t.length; i < n; i++) _t[i].seek(e)
        }, I.prototype.SetSilent = function(t) {
            var e, i;
            if (2 === t && (t = Z ? 1 : 0), 0 !== t || Z) {
                if (1 === t && Z) {
                    for (e = 0, i = H.length; e < i; e++) H[e].setSilent(!1);
                    Z = !1
                }
            } else {
                for (e = 0, i = H.length; e < i; e++) H[e].setSilent(!0);
                Z = !0
            }
        }, I.prototype.SetMasterVolume = function(e) {
            Q = t(e);
            var i, n;
            for (i = 0, n = H.length; i < n; i++) H[i].updateVolume()
        }, I.prototype.AddFilterEffect = function(t, e, i, n, r, s, a) {
            U !== V || e < 0 || e >= dt.length || !X.createBiquadFilter || (t = t.toLowerCase(), a /= 100, a < 0 && (a = 0), a > 1 && (a = 1), E(t, new u(e, i, n, r, s, a)))
        }, I.prototype.AddDelayEffect = function(e, i, n, r) {
            U === V && (e = e.toLowerCase(), r /= 100, r < 0 && (r = 0), r > 1 && (r = 1), E(e, new p(i, t(n), r)))
        }, I.prototype.AddFlangerEffect = function(t, e, i, n, r, s) {
            U === V && X.createOscillator && (t = t.toLowerCase(), s /= 100, s < 0 && (s = 0), s > 1 && (s = 1), E(t, new f(e / 1e3, i / 1e3, n, r / 100, s)))
        }, I.prototype.AddPhaserEffect = function(t, e, i, n, r, s, a) {
            U === V && X.createOscillator && (t = t.toLowerCase(), a /= 100, a < 0 && (a = 0), a > 1 && (a = 1), E(t, new g(e, i, n, r, s, a)))
        }, I.prototype.AddConvolutionEffect = function(t, e, i, n) {
            if (U === V && X.createConvolver) {
                var r = 0 === i,
                    s = this.runtime.files_subfolder + e[0] + (J ? ".ogg" : ".m4a"),
                    a = this.getAudioBuffer(s, !1);
                t = t.toLowerCase(), n /= 100, n < 0 && (n = 0), n > 1 && (n = 1);
                var o;
                a.bufferObject ? o = new d(a.bufferObject, r, n, s) : (o = new d(null, r, n, s), a.normalizeWhenReady = r, a.convolveWhenReady = o), E(t, o)
            }
        }, I.prototype.AddGainEffect = function(e, i) {
            U === V && (e = e.toLowerCase(), E(e, new m(t(i))))
        }, I.prototype.AddMuteEffect = function(t) {
            U === V && (t = t.toLowerCase(), E(t, new m(0)))
        }, I.prototype.AddTremoloEffect = function(t, e, i) {
            U === V && X.createOscillator && (t = t.toLowerCase(), i /= 100, i < 0 && (i = 0), i > 1 && (i = 1), E(t, new y(e, i)))
        }, I.prototype.AddRingModEffect = function(t, e, i) {
            U === V && X.createOscillator && (t = t.toLowerCase(), i /= 100, i < 0 && (i = 0), i > 1 && (i = 1), E(t, new _(e, i)))
        }, I.prototype.AddDistortionEffect = function(t, e, i, n, r, s) {
            U === V && X.createWaveShaper && (t = t.toLowerCase(), s /= 100, s < 0 && (s = 0), s > 1 && (s = 1), E(t, new v(e, i, n, r, s)))
        }, I.prototype.AddCompressorEffect = function(t, e, i, n, r, s) {
            U === V && X.createDynamicsCompressor && (t = t.toLowerCase(), E(t, new w(e, i, n, r / 1e3, s / 1e3)))
        }, I.prototype.AddAnalyserEffect = function(t, e, i) {
            U === V && (t = t.toLowerCase(), E(t, new x(e, i)))
        }, I.prototype.RemoveEffects = function(t) {
            if (U === V) {
                t = t.toLowerCase();
                var e, i, n;
                if (pt.hasOwnProperty(t) && (n = pt[t], n.length)) {
                    for (e = 0, i = n.length; e < i; e++) n[e].remove();
                    cr.clearArray(n), C(t)
                }
            }
        }, I.prototype.SetEffectParameter = function(t, e, i, n, r, s) {
            if (U === V) {
                t = t.toLowerCase(), e = Math.floor(e);
                var a;
                pt.hasOwnProperty(t) && (a = pt[t], e < 0 || e >= a.length || a[e].setParam(i, n, r, s))
            }
        }, I.prototype.SetListenerObject = function(t) {
            if (t && U === V) {
                var e = t.getFirstPicked();
                e && (this.listenerTracker.setObject(e), $ = e.x, tt = e.y)
            }
        }, I.prototype.SetListenerZ = function(t) {
            this.listenerZ = t
        }, I.prototype.ScheduleNextPlay = function(t) {
            X && (this.nextPlayTime = t)
        }, I.prototype.UnloadAudio = function(t) {
            var e = t[1],
                i = this.runtime.files_subfolder + t[0] + (J ? ".ogg" : ".m4a"),
                n = this.getAudioBuffer(i, e, !0);
            n && (n.release(), cr.arrayFindRemove(Y, n))
        }, I.prototype.UnloadAudioByName = function(t, e) {
            var i = 1 === t,
                n = this.runtime.files_subfolder + e.toLowerCase() + (J ? ".ogg" : ".m4a"),
                r = this.getAudioBuffer(n, i, !0);
            r && (r.release(), cr.arrayFindRemove(Y, r))
        }, I.prototype.UnloadAll = function() {
            var t, e;
            for (t = 0, e = Y.length; t < e; ++t) Y[t].release();
            cr.clearArray(Y)
        }, F.acts = new I, L.prototype.Duration = function(t, e) {
            k(e, !0), _t.length ? t.set_float(_t[0].getDuration()) : t.set_float(0)
        }, L.prototype.PlaybackTime = function(t, e) {
            k(e, !0), _t.length ? t.set_float(_t[0].getPlaybackTime(!0)) : t.set_float(0)
        }, L.prototype.Volume = function(t, i) {
            if (k(i, !0), _t.length) {
                var n = _t[0].getVolume();
                t.set_float(e(n))
            } else t.set_float(0)
        }, L.prototype.MasterVolume = function(t) {
            t.set_float(e(Q))
        }, L.prototype.EffectCount = function(t, e) {
            e = e.toLowerCase();
            var i = null;
            pt.hasOwnProperty(e) && (i = pt[e]), t.set_int(i ? i.length : 0)
        }, L.prototype.AnalyserFreqBinCount = function(t, e, i) {
            e = e.toLowerCase(), i = Math.floor(i);
            var n = R(e, i);
            t.set_int(n ? n.node.frequencyBinCount : 0)
        }, L.prototype.AnalyserFreqBinAt = function(t, e, i, n) {
            e = e.toLowerCase(), i = Math.floor(i), n = Math.floor(n);
            var r = R(e, i);
            r ? n < 0 || n >= r.node.frequencyBinCount ? t.set_float(0) : t.set_float(r.freqBins[n]) : t.set_float(0)
        }, L.prototype.AnalyserPeakLevel = function(t, e, i) {
            e = e.toLowerCase(), i = Math.floor(i);
            var n = R(e, i);
            n ? t.set_float(n.peak) : t.set_float(0)
        }, L.prototype.AnalyserRMSLevel = function(t, e, i) {
            e = e.toLowerCase(), i = Math.floor(i);
            var n = R(e, i);
            n ? t.set_float(n.rms) : t.set_float(0)
        }, L.prototype.SampleRate = function(t) {
            t.set_int(X ? X.sampleRate : 0)
        }, L.prototype.CurrentTime = function(t) {
            t.set_float(X ? X.currentTime : cr.performance_now())
        }, F.exps = new L
    }(), cr.plugins_.Browser = function(t) {
        this.runtime = t
    },
    function() {
        function checkReady() {
            offlineScriptReady && browserPluginReady && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(t) {
                browserInstance.onSWMessage(t)
            })
        }

        function maybeLoadBatteryManager() {
            if (!loadedBatteryManager && navigator.getBattery) {
                var t = navigator.getBattery();
                loadedBatteryManager = !0, t && t.then(function(t) {
                    batteryManager = t
                })
            }
        }

        function Cnds() {}

        function Acts() {}

        function onFullscreenError(t) {
            console && console.warn && console.warn("Fullscreen request failed: ", t), crruntime.setSize(window.innerWidth, window.innerHeight)
        }

        function Exps() {}
        var pluginProto = cr.plugins_.Browser.prototype;
        pluginProto.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {};
        var offlineScriptReady = !1,
            browserPluginReady = !1;
        document.addEventListener("DOMContentLoaded", function() {
            if (window.C2_RegisterSW && navigator.serviceWorker) {
                var t = document.createElement("script");
                t.onload = function() {
                    offlineScriptReady = !0, checkReady()
                }, t.src = "offlineClient.js", document.head.appendChild(t)
            }
        });
        var browserInstance = null;
        typeProto.onAppBegin = function() {
            browserPluginReady = !0, checkReady()
        }, pluginProto.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var instanceProto = pluginProto.Instance.prototype;
        instanceProto.onCreate = function() {
            var t = this;
            window.addEventListener("resize", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, t)
            }), browserInstance = this, "undefined" != typeof navigator.onLine && (window.addEventListener("online", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, t)
            }), window.addEventListener("offline", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, t)
            })), "undefined" != typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
                t.runtime.loadingprogress = 1, t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), window.applicationCache.addEventListener("progress", function(e) {
                t.runtime.loadingprogress = e.loaded / e.total || 0
            })), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), document.addEventListener("backbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), document.addEventListener("menubutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t)
            }), document.addEventListener("searchbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, t)
            }), document.addEventListener("tizenhwkey", function(e) {
                var i;
                switch (e.keyName) {
                    case "back":
                        i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t), i || window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t), i || e.preventDefault()
                }
            })), this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(e) {
                var i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t);
                i && (e.handled = !0)
            }) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function(e) {
                return !!t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), this.runtime.addSuspendCallback(function(e) {
                e ? t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, t) : t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, t)
            }), this.is_arcade = "undefined" != typeof window.is_scirra_arcade
        }, instanceProto.onSWMessage = function(t) {
            var e = t.data.type;
            "downloading-update" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateFound, this) : "update-ready" === e || "update-pending" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, this) : "offline-ready" === e && this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOfflineReady, this)
        };
        var batteryManager = null,
            loadedBatteryManager = !1;
        Cnds.prototype.CookiesEnabled = function() {
                return !!navigator && navigator.cookieEnabled
            }, Cnds.prototype.IsOnline = function() {
                return !!navigator && navigator.onLine
            }, Cnds.prototype.HasJava = function() {
                return !!navigator && navigator.javaEnabled()
            }, Cnds.prototype.OnOnline = function() {
                return !0
            }, Cnds.prototype.OnOffline = function() {
                return !0
            }, Cnds.prototype.IsDownloadingUpdate = function() {
                return "undefined" != typeof window.applicationCache && window.applicationCache.status === window.applicationCache.DOWNLOADING
            }, Cnds.prototype.OnUpdateReady = function() {
                return !0
            }, Cnds.prototype.PageVisible = function() {
                return !this.runtime.isSuspended
            }, Cnds.prototype.OnPageVisible = function() {
                return !0
            }, Cnds.prototype.OnPageHidden = function() {
                return !0
            }, Cnds.prototype.OnResize = function() {
                return !0
            }, Cnds.prototype.IsFullscreen = function() {
                return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
            }, Cnds.prototype.OnBackButton = function() {
                return !0
            }, Cnds.prototype.OnMenuButton = function() {
                return !0
            }, Cnds.prototype.OnSearchButton = function() {
                return !0
            }, Cnds.prototype.IsMetered = function() {
                var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                return !!t && !!t.metered
            }, Cnds.prototype.IsCharging = function() {
                var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
                return t ? !!t.charging : (maybeLoadBatteryManager(), !batteryManager || !!batteryManager.charging)
            }, Cnds.prototype.IsPortraitLandscape = function(t) {
                var e = window.innerWidth <= window.innerHeight ? 0 : 1;
                return e === t
            }, Cnds.prototype.SupportsFullscreen = function() {
                if (this.runtime.isNodeWebkit) return !0;
                var t = this.runtime.canvasdiv || this.runtime.canvas;
                return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
            }, Cnds.prototype.OnUpdateFound = function() {
                return !0
            }, Cnds.prototype.OnUpdateReady = function() {
                return !0
            }, Cnds.prototype.OnOfflineReady = function() {
                return !0
            }, pluginProto.cnds = new Cnds,
            Acts.prototype.Alert = function(t) {
                this.runtime.isDomFree || alert(t.toString())
            }, Acts.prototype.Close = function() {
                this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
            }, Acts.prototype.Focus = function() {
                if (this.runtime.isNodeWebkit) {
                    var t = window.nwgui.Window.get();
                    t.focus()
                } else this.is_arcade || this.runtime.isDomFree || window.focus()
            }, Acts.prototype.Blur = function() {
                if (this.runtime.isNodeWebkit) {
                    var t = window.nwgui.Window.get();
                    t.blur()
                } else this.is_arcade || this.runtime.isDomFree || window.blur()
            }, Acts.prototype.GoBack = function() {
                navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
            }, Acts.prototype.GoForward = function() {
                this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
            }, Acts.prototype.GoHome = function() {
                this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
            }, Acts.prototype.GoToURL = function(t, e) {
                // this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                //     openExternal: !0
                // }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
            }, Acts.prototype.GoToURLWindow = function(t, e) {
                // this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                //     openExternal: !0
                // }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || windowss.open(t, e)
            }, Acts.prototype.Reload = function() {
                this.is_arcade || this.runtime.isDomFree || window.location.reload()
            };
        var firstRequestFullscreen = !0,
            crruntime = null;
        Acts.prototype.RequestFullScreen = function(t) {
            if (this.runtime.isDomFree) return void cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
            if (t >= 2 && (t += 1), 6 === t && (t = 2), this.runtime.isNodeWebkit) this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = t >= 2 ? t : 0);
            else {
                if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement) return;
                this.runtime.fullscreen_scaling = t >= 2 ? t : 0;
                var e = this.runtime.canvasdiv || this.runtime.canvas;
                firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, e.addEventListener("mozfullscreenerror", onFullscreenError), e.addEventListener("webkitfullscreenerror", onFullscreenError), e.addEventListener("MSFullscreenError", onFullscreenError), e.addEventListener("fullscreenerror", onFullscreenError)), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && "undefined" != typeof Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
            }
        }, Acts.prototype.CancelFullScreen = function() {
            return this.runtime.isDomFree ? void cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : void(this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen())
        }, Acts.prototype.Vibrate = function(t) {
            try {
                var e, i, n = t.split(",");
                for (e = 0, i = n.length; e < i; e++) n[e] = parseInt(n[e], 10);
                navigator.vibrate ? navigator.vibrate(n) : navigator.mozVibrate ? navigator.mozVibrate(n) : navigator.webkitVibrate ? navigator.webkitVibrate(n) : navigator.msVibrate && navigator.msVibrate(n)
            } catch (r) {}
        }, Acts.prototype.InvokeDownload = function(t, e) {
            // var i = document.createElement("a");
            // if ("undefined" == typeof i.download) window.open(t);
            // else {
            //     var n = document.getElementsByTagName("body")[0];
            //     i.textContent = e, i.href = t, i.download = e, n.appendChild(i);
            //     var r = new MouseEvent("click");
            //     i.dispatchEvent(r), n.removeChild(i)
            // }
        }, Acts.prototype.InvokeDownloadString = function(t, e, i) {
            // var n = "data:" + e + "," + encodeURIComponent(t),
            //     r = document.createElement("a");
            // if ("undefined" == typeof r.download) window.open(n);
            // else {
            //     var s = document.getElementsByTagName("body")[0];
            //     r.textContent = i, r.href = n, r.download = i, s.appendChild(r);
            //     var a = new MouseEvent("click");
            //     r.dispatchEvent(a), s.removeChild(r)
            // }
        }, Acts.prototype.ConsoleLog = function(t, e) {
            "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()), 1 === t && console.warn && console.warn(e.toString()), 2 === t && console.error && console.error(e.toString()))
        }, Acts.prototype.ConsoleGroup = function(t) {
            console && console.group && console.group(t)
        }, Acts.prototype.ConsoleGroupEnd = function() {
            console && console.groupEnd && console.groupEnd()
        }, Acts.prototype.ExecJs = function(js_) {
            try {
                eval && eval(js_)
            } catch (e) {
                console && console.error && console.error("Error executing Javascript: ", e)
            }
        };
        var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        Acts.prototype.LockOrientation = function(t) {
            if (t = Math.floor(t), !(t < 0 || t >= orientations.length)) {
                this.runtime.autoLockOrientation = !1;
                var e = orientations[t];
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
            }
        }, Acts.prototype.UnlockOrientation = function() {
            this.runtime.autoLockOrientation = !1, screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        }, pluginProto.acts = new Acts, Exps.prototype.URL = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
        }, Exps.prototype.Protocol = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
        }, Exps.prototype.Domain = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
        }, Exps.prototype.PathName = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
        }, Exps.prototype.Hash = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
        }, Exps.prototype.Referrer = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.referrer)
        }, Exps.prototype.Title = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.title)
        }, Exps.prototype.Name = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
        }, Exps.prototype.Version = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
        }, Exps.prototype.Language = function(t) {
            navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
        }, Exps.prototype.Platform = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
        }, Exps.prototype.Product = function(t) {
            navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
        }, Exps.prototype.Vendor = function(t) {
            navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
        }, Exps.prototype.UserAgent = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
        }, Exps.prototype.QueryString = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.search)
        }, Exps.prototype.QueryParam = function(t, e) {
            if (this.runtime.isDomFree) return void t.set_string("");
            var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
            i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
        }, Exps.prototype.Bandwidth = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? "undefined" != typeof e.bandwidth ? t.set_float(e.bandwidth) : "undefined" != typeof e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
        }, Exps.prototype.ConnectionType = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
        }, Exps.prototype.BatteryLevel = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.level) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
        }, Exps.prototype.BatteryTimeLeft = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
        }, Exps.prototype.ExecJS = function(ret, js_) {
            if (!eval) return void ret.set_any(0);
            var result = 0;
            try {
                result = eval(js_)
            } catch (e) {
                console && console.error && console.error("Error executing Javascript: ", e)
            }
            "number" == typeof result ? ret.set_any(result) : "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
        }, Exps.prototype.ScreenWidth = function(t) {
            t.set_int(screen.width)
        }, Exps.prototype.ScreenHeight = function(t) {
            t.set_int(screen.height)
        }, Exps.prototype.DevicePixelRatio = function(t) {
            t.set_float(this.runtime.devicePixelRatio)
        }, Exps.prototype.WindowInnerWidth = function(t) {
            t.set_int(window.innerWidth)
        }, Exps.prototype.WindowInnerHeight = function(t) {
            t.set_int(window.innerHeight)
        }, Exps.prototype.WindowOuterWidth = function(t) {
            t.set_int(window.outerWidth)
        }, Exps.prototype.WindowOuterHeight = function(t) {
            t.set_int(window.outerHeight)
        }, pluginProto.exps = new Exps
    }(), cr.plugins_.Famobi = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.plugins_.Famobi.prototype;
        n.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {}, s.onDestroy = function() {}, s.saveToJSON = function() {
            return {}
        }, s.loadFromJSON = function(t) {}, s.draw = function(t) {}, s.drawGL = function(t) {}, t.prototype.MyCondition = function(t) {
            return t >= 0
        }, e.prototype.ShowAd = function() {
            try {
                // window.famobi.showAd()
            } catch (t) {
                console.debug(t)
            }
        }, e.prototype.Translate = function(t) {
            var e = "";
            try {
                return e = window.famobi.__(t), e ? e : (console.debug("No translation found for key '" + t + '"'), t)
            } catch (i) {
                console.debug(i)
            }
        }, e.prototype.GetMoreGamesButtonImage = function() {
            try {
                return window.famobi.getMoreGamesButtonImage(!0)
            } catch (t) {
                console.debug(t)
            }
        }, e.prototype.GetMoreGamesLink = function() {
            try {
                // return window.famobi.__("more_games_url")
            } catch (t) {
                console.debug(t)
            }
        }, e.prototype.MoreGamesLink = function() {
            try {
                // window.famobi.moreGamesLink()
            } catch (t) {
                console.debug(t)
            }
        }, e.prototype.trackEventCustom = function(t) {
            // try {
            //     try {
            //         t = JSON.parse(t), "c2dictionary" in t && t.c2dictionary && (t = t.data)
            //     } catch (e) {
            //         return console.warn("Params need to be a valid JSON."), !1
            //     }
            //     window.famobi_analytics.trackEvent("EVENT_CUSTOM", t)
            // } catch (e) {
            //     console.debug(e)
            // }
        }, e.prototype.trackEventLevelFail = function(t, e) {
            var i = ["timeout", "dead", "wrong_answer", "quit", "draw"];
            try {
                // window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
                //     levelName: String(t),
                //     reason: i[e]
                // })
            } catch (n) {
                console.debug(n)
            }
        }, e.prototype.trackEventLevelRestart = function(t) {
            try {
                // window.famobi_analytics.trackEvent("EVENT_LEVELRESTART", {
                //     levelName: String(t)
                // })
            } catch (e) {
                console.debug(e)
            }
        }, e.prototype.trackEventLevelStart = function(t) {
            try {
                // window.famobi_analytics.trackEvent("EVENT_LEVELSTART", {
                //     levelName: String(t)
                // })
            } catch (e) {
                console.debug(e)
            }
        }, e.prototype.trackEventLevelSuccess = function(t) {
            try {
                // window.famobi_analytics.trackEvent("EVENT_LEVELSUCCESS", {
                //     levelName: String(t)
                // })
            } catch (e) {
                console.debug(e)
            }
        }, e.prototype.trackEventLevelScore = function(t, e) {
            try {
                // window.famobi_analytics.trackEvent("EVENT_LEVELSCORE", {
                //     levelName: String(t),
                //     levelScore: e
                // })
            } catch (i) {
                console.debug(i)
            }
        }, e.prototype.trackEventTotalScore = function(t) {
            try {
                // window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {
                //     totalScore: t
                // })
            } catch (e) {
                console.debug(e)
            }
        }, e.prototype.trackEventTutorial = function(t) {
            var e = t ? "EVENT_TUTORIALSKIPPED" : "EVENT_TUTORIALCOMPLETED";
            try {
                // window.famobi_analytics.trackEvent(e)
            } catch (i) {
                console.debug(i)
            }
        }, e.prototype.trackEventVolumeChange = function(t, e) {
            try {
                // window.famobi_analytics.trackEvent("EVENT_VOLUMECHANGE", {
                //     bgmVolume: t,
                //     sfxVolume: e
                // })
            } catch (i) {
                console.debug(i)
            }
        }, e.prototype.trackStats = function(t, e) {
            try {
                try {
                    t = JSON.parse(t), "c2dictionary" in t && t.c2dictionary && (t = t.data)
                } catch (i) {}
                // window.famobi_analytics.trackStats(t, e)
            } catch (i) {
                console.debug(i)
            }
        }, e.prototype.trackScreen = function(t, e) {
            var i = ["SCREEN_OTHER", "SCREEN_BONUS", "SCREEN_CHARACTER", "SCREEN_CREDITS", "SCREEN_GAMERESULT", "SCREEN_HELP", "SCREEN_HOME", "SCREEN_LEVEL", "SCREEN_LEVELINTRO", "SCREEN_LEVELLOADING", "SCREEN_LEVELRESULT", "SCREEN_LEVELSELECT", "SCREEN_PAUSE", "SCREEN_SETTINGS", "SCREEN_SHOP", "SCREEN_SPLASH", "SCREEN_TUTORIAL"];
            // try {
            //     t = i[t], window.famobi_analytics.trackScreen(t, e)
            // } catch (n) {
            //     console.debug(n)
            // }
        }, n.acts = new e, i.prototype.GetMoreGamesButtonImage = function(t) {
            t.set_string(e.prototype.GetMoreGamesButtonImage())
        }, i.prototype.Translate = function(t, i) {
            t.set_string(e.prototype.Translate(i))
        }, i.prototype.GetMoreGamesLink = function(t) {
            t.set_string(e.prototype.GetMoreGamesLink())
        }, n.exps = new i
    }(), cr.plugins_.Function = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            this.name = "", this.retVal = 0, this.params = []
        }

        function e() {
            return p++, p === u.length && u.push(new t), u[p]
        }

        function i() {
            return p < 0 ? null : u[p]
        }

        function n() {
            if (!u.length) return null;
            var t = p + 1;
            return t >= u.length && (t = u.length - 1), u[t]
        }

        function r() {
            p--
        }

        function s() {}

        function a() {}

        function o() {}
        var h = cr.plugins_.Function.prototype;
        h.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var c = h.Type.prototype;
        c.onCreate = function() {}, h.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var l = h.Instance.prototype,
            u = [],
            p = -1,
            d = !1;
        l.onCreate = function() {
            d = "undefined" != typeof cr_is_preview;
            var t = this;
            window.c2_callFunction = function(i, n) {
                var s, a, o, h = e();
                if (h.name = i.toLowerCase(), h.retVal = 0, n)
                    for (h.params.length = n.length, s = 0, a = n.length; s < a; ++s) o = n[s], "number" == typeof o || "string" == typeof o ? h.params[s] = o : "boolean" == typeof o ? h.params[s] = o ? 1 : 0 : h.params[s] = 0;
                else cr.clearArray(h.params);
                return t.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, t, h.name), r(), h.retVal
            }
        }, s.prototype.OnFunction = function(t) {
            var e = i();
            return !!e && cr.equals_nocase(t, e.name)
        }, s.prototype.CompareParam = function(t, e, n) {
            var r = i();
            return !!r && (t = cr.floor(t), !(t < 0 || t >= r.params.length) && cr.do_cmp(r.params[t], e, n))
        }, h.cnds = new s, a.prototype.CallFunction = function(t, i) {
            var n = e();
            n.name = t.toLowerCase(), n.retVal = 0, cr.shallowAssignArray(n.params, i);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, n.name);
            r()
        }, a.prototype.SetReturnValue = function(t) {
            var e = i();
            e && (e.retVal = t)
        }, a.prototype.CallExpression = function(t) {}, h.acts = new a, o.prototype.ReturnValue = function(t) {
            var e = n();
            e ? t.set_any(e.retVal) : t.set_int(0)
        }, o.prototype.ParamCount = function(t) {
            var e = i();
            e ? t.set_int(e.params.length) : t.set_int(0)
        }, o.prototype.Param = function(t, e) {
            e = cr.floor(e);
            var n = i();
            n && e >= 0 && e < n.params.length ? t.set_any(n.params[e]) : t.set_int(0)
        }, o.prototype.Call = function(t, i) {
            var n = e();
            n.name = i.toLowerCase(), n.retVal = 0, cr.clearArray(n.params);
            var s, a;
            for (s = 2, a = arguments.length; s < a; s++) n.params.push(arguments[s]);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, n.name);
            r(), t.set_any(n.retVal)
        }, h.exps = new o
    }();
var localForageInitFailed = !1;
try {
    ! function() {
        var t, e, i, n;
        ! function() {
            var r = {},
                s = {};
            t = function(t, e, i) {
                r[t] = {
                    deps: e,
                    callback: i
                }
            }, n = i = e = function(t) {
                function i(e) {
                    if ("." !== e.charAt(0)) return e;
                    for (var i = e.split("/"), n = t.split("/").slice(0, -1), r = 0, s = i.length; s > r; r++) {
                        var a = i[r];
                        if (".." === a) n.pop();
                        else {
                            if ("." === a) continue;
                            n.push(a)
                        }
                    }
                    return n.join("/")
                }
                if (n._eak_seen = r, s[t]) return s[t];
                if (s[t] = {}, !r[t]) throw new Error("Could not find module " + t);
                for (var a, o = r[t], h = o.deps, c = o.callback, l = [], u = 0, p = h.length; p > u; u++) "exports" === h[u] ? l.push(a = {}) : l.push(e(i(h[u])));
                var d = c.apply(this, l);
                return s[t] = a || d
            }
        }(), t("promise/all", ["./utils", "exports"], function(t, e) {
            "use strict";

            function i(t) {
                var e = this;
                if (!n(t)) throw new TypeError("You must pass an array to all.");
                return new e(function(e, i) {
                    function n(t) {
                        return function(e) {
                            s(t, e)
                        }
                    }

                    function s(t, i) {
                        o[t] = i, 0 === --h && e(o)
                    }
                    var a, o = [],
                        h = t.length;
                    0 === h && e([]);
                    for (var c = 0; c < t.length; c++) a = t[c], a && r(a.then) ? a.then(n(c), i) : s(c, a)
                })
            }
            var n = t.isArray,
                r = t.isFunction;
            e.all = i
        }), t("promise/asap", ["exports"], function(t) {
            "use strict";

            function e() {
                return function() {
                    process.nextTick(r)
                }
            }

            function i() {
                var t = 0,
                    e = new h(r),
                    i = document.createTextNode("");
                return e.observe(i, {
                        characterData: !0
                    }),
                    function() {
                        i.data = t = ++t % 2
                    }
            }

            function n() {
                return function() {
                    c.setTimeout(r, 1)
                }
            }

            function r() {
                for (var t = 0; t < l.length; t++) {
                    var e = l[t],
                        i = e[0],
                        n = e[1];
                    i(n)
                }
                l = []
            }

            function s(t, e) {
                var i = l.push([t, e]);
                1 === i && a()
            }
            var a, o = "undefined" != typeof window ? window : {},
                h = o.MutationObserver || o.WebKitMutationObserver,
                c = "undefined" != typeof global ? global : void 0 === this ? window : this,
                l = [];
            a = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? e() : h ? i() : n(), t.asap = s
        }), t("promise/config", ["exports"], function(t) {
            "use strict";

            function e(t, e) {
                return 2 !== arguments.length ? i[t] : void(i[t] = e)
            }
            var i = {
                instrument: !1
            };
            t.config = i, t.configure = e
        }), t("promise/polyfill", ["./promise", "./utils", "exports"], function(t, e, i) {
            "use strict";

            function n() {
                var t;
                t = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                var e = "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function() {
                    var e;
                    return new t.Promise(function(t) {
                        e = t
                    }), s(e)
                }();
                e || (t.Promise = r)
            }
            var r = t.Promise,
                s = e.isFunction;
            i.polyfill = n
        }), t("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(t, e, i, n, r, s, a, o) {
            "use strict";

            function h(t) {
                if (!w(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof h)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._subscribers = [], c(t, this)
            }

            function c(t, e) {
                function i(t) {
                    f(e, t)
                }

                function n(t) {
                    m(e, t)
                }
                try {
                    t(i, n)
                } catch (r) {
                    n(r)
                }
            }

            function l(t, e, i, n) {
                var r, s, a, o, h = w(i);
                if (h) try {
                    r = i(n), a = !0
                } catch (c) {
                    o = !0, s = c
                } else r = n, a = !0;
                d(e, r) || (h && a ? f(e, r) : o ? m(e, s) : t === E ? f(e, r) : t === P && m(e, r))
            }

            function u(t, e, i, n) {
                var r = t._subscribers,
                    s = r.length;
                r[s] = e, r[s + E] = i, r[s + P] = n
            }

            function p(t, e) {
                for (var i, n, r = t._subscribers, s = t._detail, a = 0; a < r.length; a += 3) i = r[a], n = r[a + e], l(e, i, n, s);
                t._subscribers = null
            }

            function d(t, e) {
                var i, n = null;
                try {
                    if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                    if (b(e) && (n = e.then, w(n))) return n.call(e, function(n) {
                        return !!i || (i = !0, void(e !== n ? f(t, n) : g(t, n)))
                    }, function(e) {
                        return !!i || (i = !0, void m(t, e))
                    }), !0
                } catch (r) {
                    return !!i || (m(t, r), !0)
                }
                return !1
            }

            function f(t, e) {
                t === e ? g(t, e) : d(t, e) || g(t, e)
            }

            function g(t, e) {
                t._state === k && (t._state = C, t._detail = e, v.async(y, t))
            }

            function m(t, e) {
                t._state === k && (t._state = C, t._detail = e, v.async(_, t))
            }

            function y(t) {
                p(t, t._state = E)
            }

            function _(t) {
                p(t, t._state = P)
            }
            var v = t.config,
                b = (t.configure, e.objectOrFunction),
                w = e.isFunction,
                x = (e.now, i.all),
                S = n.race,
                T = r.resolve,
                A = s.reject,
                O = a.asap;
            v.async = O;
            var k = void 0,
                C = 0,
                E = 1,
                P = 2;
            h.prototype = {
                constructor: h,
                _state: void 0,
                _detail: void 0,
                _subscribers: void 0,
                then: function(t, e) {
                    var i = this,
                        n = new this.constructor(function() {});
                    if (this._state) {
                        var r = arguments;
                        v.async(function() {
                            l(i._state, n, r[i._state - 1], i._detail)
                        })
                    } else u(this, n, t, e);
                    return n
                },
                "catch": function(t) {
                    return this.then(null, t)
                }
            }, h.all = x, h.race = S, h.resolve = T, h.reject = A, o.Promise = h
        }), t("promise/race", ["./utils", "exports"], function(t, e) {
            "use strict";

            function i(t) {
                var e = this;
                if (!n(t)) throw new TypeError("You must pass an array to race.");
                return new e(function(e, i) {
                    for (var n, r = 0; r < t.length; r++) n = t[r], n && "function" == typeof n.then ? n.then(e, i) : e(n)
                })
            }
            var n = t.isArray;
            e.race = i
        }), t("promise/reject", ["exports"], function(t) {
            "use strict";

            function e(t) {
                var e = this;
                return new e(function(e, i) {
                    i(t)
                })
            }
            t.reject = e
        }), t("promise/resolve", ["exports"], function(t) {
            "use strict";

            function e(t) {
                if (t && "object" == typeof t && t.constructor === this) return t;
                var e = this;
                return new e(function(e) {
                    e(t)
                })
            }
            t.resolve = e
        }), t("promise/utils", ["exports"], function(t) {
            "use strict";

            function e(t) {
                return i(t) || "object" == typeof t && null !== t
            }

            function i(t) {
                return "function" == typeof t
            }

            function n(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            var r = Date.now || function() {
                return (new Date).getTime()
            };
            t.objectOrFunction = e, t.isFunction = i, t.isArray = n, t.now = r
        }), e("promise/polyfill").polyfill()
    }(),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.localforage = e() : t.localforage = e()
    }(this, function() {
        return function(t) {
            function e(n) {
                if (i[n]) return i[n].exports;
                var r = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "", e(0)
        }([
            function(t, e, i) {
                "use strict";

                function n(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                e.__esModule = !0;
                var r = function(t) {
                    function e(t, e) {
                        t[e] = function() {
                            var i = arguments;
                            return t.ready().then(function() {
                                return t[e].apply(t, i)
                            })
                        }
                    }

                    function r() {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            if (e)
                                for (var i in e) e.hasOwnProperty(i) && (p(e[i]) ? arguments[0][i] = e[i].slice() : arguments[0][i] = e[i])
                        }
                        return arguments[0]
                    }

                    function s(t) {
                        for (var e in o)
                            if (o.hasOwnProperty(e) && o[e] === t) return !0;
                        return !1
                    }
                    var a = {},
                        o = {
                            INDEXEDDB: "asyncStorage",
                            LOCALSTORAGE: "localStorageWrapper",
                            WEBSQL: "webSQLStorage"
                        },
                        h = [o.INDEXEDDB, o.WEBSQL, o.LOCALSTORAGE],
                        c = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                        l = {
                            description: "",
                            driver: h.slice(),
                            name: "localforage",
                            size: 4980736,
                            storeName: "keyvaluepairs",
                            version: 1
                        },
                        u = function(t) {
                            var e = {};
                            return e[o.INDEXEDDB] = !! function() {
                                try {
                                    var e = e || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                                    return !("undefined" != typeof t.openDatabase && t.navigator && t.navigator.userAgent && /Safari/.test(t.navigator.userAgent) && !/Chrome/.test(t.navigator.userAgent)) && (e && "function" == typeof e.open && "undefined" != typeof t.IDBKeyRange)
                                } catch (i) {
                                    return !1
                                }
                            }(), e[o.WEBSQL] = !! function() {
                                try {
                                    return t.openDatabase
                                } catch (e) {
                                    return !1
                                }
                            }(), e[o.LOCALSTORAGE] = !! function() {
                                try {
                                    return t.localStorage && "setItem" in t.localStorage && t.localStorage.setItem
                                } catch (e) {
                                    return !1
                                }
                            }(), e
                        }(t),
                        p = Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        d = function() {
                            function t(e) {
                                n(this, t), this.INDEXEDDB = o.INDEXEDDB, this.LOCALSTORAGE = o.LOCALSTORAGE, this.WEBSQL = o.WEBSQL, this._defaultConfig = r({}, l), this._config = r({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver)
                            }
                            return t.prototype.config = function(t) {
                                if ("object" == typeof t) {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                    for (var e in t) "storeName" === e && (t[e] = t[e].replace(/\W/g, "_")), this._config[e] = t[e];
                                    return "driver" in t && t.driver && this.setDriver(this._config.driver), !0
                                }
                                return "string" == typeof t ? this._config[t] : this._config
                            }, t.prototype.defineDriver = function(t, e, i) {
                                var n = new Promise(function(e, i) {
                                    try {
                                        var n = t._driver,
                                            r = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                            o = new Error("Custom driver name already in use: " + t._driver);
                                        if (!t._driver) return void i(r);
                                        if (s(t._driver)) return void i(o);
                                        for (var h = c.concat("_initStorage"), l = 0; l < h.length; l++) {
                                            var p = h[l];
                                            if (!p || !t[p] || "function" != typeof t[p]) return void i(r)
                                        }
                                        var d = Promise.resolve(!0);
                                        "_support" in t && (d = t._support && "function" == typeof t._support ? t._support() : Promise.resolve(!!t._support)), d.then(function(i) {
                                            u[n] = i, a[n] = t, e()
                                        }, i)
                                    } catch (f) {
                                        i(f)
                                    }
                                });
                                return n.then(e, i), n
                            }, t.prototype.driver = function() {
                                return this._driver || null
                            }, t.prototype.getDriver = function(t, e, n) {
                                var r = this,
                                    o = function() {
                                        if (s(t)) switch (t) {
                                            case r.INDEXEDDB:
                                                return new Promise(function(t, e) {
                                                    t(i(1))
                                                });
                                            case r.LOCALSTORAGE:
                                                return new Promise(function(t, e) {
                                                    t(i(2))
                                                });
                                            case r.WEBSQL:
                                                return new Promise(function(t, e) {
                                                    t(i(4))
                                                })
                                        } else if (a[t]) return Promise.resolve(a[t]);
                                        return Promise.reject(new Error("Driver not found."))
                                    }();
                                return o.then(e, n), o
                            }, t.prototype.getSerializer = function(t) {
                                var e = new Promise(function(t, e) {
                                    t(i(3))
                                });
                                return t && "function" == typeof t && e.then(function(e) {
                                    t(e)
                                }), e
                            }, t.prototype.ready = function(t) {
                                var e = this,
                                    i = e._driverSet.then(function() {
                                        return null === e._ready && (e._ready = e._initDriver()), e._ready
                                    });
                                return i.then(t, t), i
                            }, t.prototype.setDriver = function(t, e, i) {
                                function n() {
                                    s._config.driver = s.driver()
                                }

                                function r(t) {
                                    return function() {
                                        function e() {
                                            for (; i < t.length;) {
                                                var r = t[i];
                                                return i++, s._dbInfo = null, s._ready = null, s.getDriver(r).then(function(t) {
                                                    return s._extend(t), n(), s._ready = s._initStorage(s._config), s._ready
                                                })["catch"](e)
                                            }
                                            n();
                                            var a = new Error("No available storage method found.");
                                            return s._driverSet = Promise.reject(a), s._driverSet
                                        }
                                        var i = 0;
                                        return e()
                                    }
                                }
                                var s = this;
                                p(t) || (t = [t]);
                                var a = this._getSupportedDrivers(t),
                                    o = null !== this._driverSet ? this._driverSet["catch"](function() {
                                        return Promise.resolve()
                                    }) : Promise.resolve();
                                return this._driverSet = o.then(function() {
                                    var t = a[0];
                                    return s._dbInfo = null, s._ready = null, s.getDriver(t).then(function(t) {
                                        s._driver = t._driver, n(), s._wrapLibraryMethodsWithReady(), s._initDriver = r(a)
                                    })
                                })["catch"](function() {
                                    n();
                                    var t = new Error("No available storage method found.");
                                    return s._driverSet = Promise.reject(t), s._driverSet
                                }), this._driverSet.then(e, i), this._driverSet
                            }, t.prototype.supports = function(t) {
                                return !!u[t]
                            }, t.prototype._extend = function(t) {
                                r(this, t)
                            }, t.prototype._getSupportedDrivers = function(t) {
                                for (var e = [], i = 0, n = t.length; n > i; i++) {
                                    var r = t[i];
                                    this.supports(r) && e.push(r)
                                }
                                return e
                            }, t.prototype._wrapLibraryMethodsWithReady = function() {
                                for (var t = 0; t < c.length; t++) e(this, c[t])
                            }, t.prototype.createInstance = function(e) {
                                return new t(e)
                            }, t
                        }();
                    return new d
                }("undefined" != typeof window ? window : self);
                e["default"] = r, t.exports = e["default"]
            },
            function(t, e) {
                "use strict";
                e.__esModule = !0;
                var i = function(t) {
                    function e(e, i) {
                        e = e || [], i = i || {};
                        try {
                            return new Blob(e, i)
                        } catch (n) {
                            if ("TypeError" !== n.name) throw n;
                            for (var r = t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder, s = new r, a = 0; a < e.length; a += 1) s.append(e[a]);
                            return s.getBlob(i.type)
                        }
                    }

                    function i(t) {
                        for (var e = t.length, i = new ArrayBuffer(e), n = new Uint8Array(i), r = 0; e > r; r++) n[r] = t.charCodeAt(r);
                        return i
                    }

                    function n(t) {
                        return new Promise(function(e, i) {
                            var n = new XMLHttpRequest;
                            n.open("GET", t), n.withCredentials = !0, n.responseType = "arraybuffer", n.onreadystatechange = function() {
                                return 4 === n.readyState ? 200 === n.status ? e({
                                    response: n.response,
                                    type: n.getResponseHeader("Content-Type")
                                }) : void i({
                                    status: n.status,
                                    response: n.response
                                }) : void 0
                            }, n.send()
                        })
                    }

                    function r(t) {
                        return new Promise(function(i, r) {
                            var s = e([""], {
                                    type: "image/png"
                                }),
                                a = t.transaction([E], "readwrite");
                            a.objectStore(E).put(s, "key"), a.oncomplete = function() {
                                var e = t.transaction([E], "readwrite"),
                                    s = e.objectStore(E).get("key");
                                s.onerror = r, s.onsuccess = function(t) {
                                    var e = t.target.result,
                                        r = URL.createObjectURL(e);
                                    n(r).then(function(t) {
                                        i(!(!t || "image/png" !== t.type))
                                    }, function() {
                                        i(!1)
                                    }).then(function() {
                                        URL.revokeObjectURL(r)
                                    })
                                }
                            }, a.onerror = a.onabort = r
                        })["catch"](function() {
                            return !1
                        })
                    }

                    function s(t) {
                        return "boolean" == typeof k ? Promise.resolve(k) : r(t).then(function(t) {
                            return k = t
                        })
                    }

                    function a(t) {
                        return new Promise(function(e, i) {
                            var n = new FileReader;
                            n.onerror = i, n.onloadend = function(i) {
                                var n = btoa(i.target.result || "");
                                e({
                                    __local_forage_encoded_blob: !0,
                                    data: n,
                                    type: t.type
                                })
                            }, n.readAsBinaryString(t)
                        })
                    }

                    function o(t) {
                        var n = i(atob(t.data));
                        return e([n], {
                            type: t.type
                        })
                    }

                    function h(t) {
                        return t && t.__local_forage_encoded_blob
                    }

                    function c(t) {
                        var e = this,
                            i = e._initReady().then(function() {
                                var t = C[e._dbInfo.name];
                                return t && t.dbReady ? t.dbReady : void 0
                            });
                        return i.then(t, t), i
                    }

                    function l(t) {
                        var e = C[t.name],
                            i = {};
                        i.promise = new Promise(function(t) {
                            i.resolve = t
                        }), e.deferredOperations.push(i), e.dbReady ? e.dbReady = e.dbReady.then(function() {
                            return i.promise
                        }) : e.dbReady = i.promise
                    }

                    function u(t) {
                        var e = C[t.name],
                            i = e.deferredOperations.pop();
                        i && i.resolve()
                    }

                    function p(t) {
                        function e() {
                            return Promise.resolve()
                        }
                        var i = this,
                            n = {
                                db: null
                            };
                        if (t)
                            for (var r in t) n[r] = t[r];
                        C || (C = {});
                        var s = C[n.name];
                        s || (s = {
                            forages: [],
                            db: null,
                            dbReady: null,
                            deferredOperations: []
                        }, C[n.name] = s), s.forages.push(i), i._initReady || (i._initReady = i.ready, i.ready = c);
                        for (var a = [], o = 0; o < s.forages.length; o++) {
                            var h = s.forages[o];
                            h !== i && a.push(h._initReady()["catch"](e))
                        }
                        var l = s.forages.slice(0);
                        return Promise.all(a).then(function() {
                            return n.db = s.db, d(n)
                        }).then(function(t) {
                            return n.db = t, m(n, i._defaultConfig.version) ? f(n) : t
                        }).then(function(t) {
                            n.db = s.db = t, i._dbInfo = n;
                            for (var e = 0; e < l.length; e++) {
                                var r = l[e];
                                r !== i && (r._dbInfo.db = n.db, r._dbInfo.version = n.version)
                            }
                        })
                    }

                    function d(t) {
                        return g(t, !1)
                    }

                    function f(t) {
                        return g(t, !0)
                    }

                    function g(e, i) {
                        return new Promise(function(n, r) {
                            if (e.db) {
                                if (!i) return n(e.db);
                                l(e), e.db.close()
                            }
                            var s = [e.name];
                            i && s.push(e.version);
                            var a = O.open.apply(O, s);
                            i && (a.onupgradeneeded = function(i) {
                                var n = a.result;
                                try {
                                    n.createObjectStore(e.storeName), i.oldVersion <= 1 && n.createObjectStore(E)
                                } catch (r) {
                                    if ("ConstraintError" !== r.name) throw r;
                                    t.console.warn('The database "' + e.name + '" has been upgraded from version ' + i.oldVersion + " to version " + i.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                                }
                            }), a.onerror = function() {
                                r(a.error)
                            }, a.onsuccess = function() {
                                n(a.result), u(e)
                            }
                        })
                    }

                    function m(e, i) {
                        if (!e.db) return !0;
                        var n = !e.db.objectStoreNames.contains(e.storeName),
                            r = e.version < e.db.version,
                            s = e.version > e.db.version;
                        if (r && (e.version !== i && t.console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), s || n) {
                            if (n) {
                                var a = e.db.version + 1;
                                a > e.version && (e.version = a)
                            }
                            return !0
                        }
                        return !1
                    }

                    function y(e, i) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = new Promise(function(t, i) {
                            n.ready().then(function() {
                                var r = n._dbInfo,
                                    s = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName),
                                    a = s.get(e);
                                a.onsuccess = function() {
                                    var e = a.result;
                                    void 0 === e && (e = null), h(e) && (e = o(e)), t(e)
                                }, a.onerror = function() {
                                    i(a.error)
                                }
                            })["catch"](i)
                        });
                        return A(r, i), r
                    }

                    function _(t, e) {
                        var i = this,
                            n = new Promise(function(e, n) {
                                i.ready().then(function() {
                                    var r = i._dbInfo,
                                        s = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName),
                                        a = s.openCursor(),
                                        c = 1;
                                    a.onsuccess = function() {
                                        var i = a.result;
                                        if (i) {
                                            var n = i.value;
                                            h(n) && (n = o(n));
                                            var r = t(n, i.key, c++);
                                            void 0 !== r ? e(r) : i["continue"]()
                                        } else e()
                                    }, a.onerror = function() {
                                        n(a.error)
                                    }
                                })["catch"](n)
                            });
                        return A(n, e), n
                    }

                    function v(e, i, n) {
                        var r = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var o = new Promise(function(t, n) {
                            var o;
                            r.ready().then(function() {
                                return o = r._dbInfo, i instanceof Blob ? s(o.db).then(function(t) {
                                    return t ? i : a(i)
                                }) : i
                            }).then(function(i) {
                                var r = o.db.transaction(o.storeName, "readwrite"),
                                    s = r.objectStore(o.storeName);
                                null === i && (i = void 0), r.oncomplete = function() {
                                    void 0 === i && (i = null), t(i)
                                }, r.onabort = r.onerror = function() {
                                    var t = a.error ? a.error : a.transaction.error;
                                    n(t)
                                };
                                var a = s.put(i, e)
                            })["catch"](n)
                        });
                        return A(o, n), o
                    }

                    function b(e, i) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = new Promise(function(t, i) {
                            n.ready().then(function() {
                                var r = n._dbInfo,
                                    s = r.db.transaction(r.storeName, "readwrite"),
                                    a = s.objectStore(r.storeName),
                                    o = a["delete"](e);
                                s.oncomplete = function() {
                                    t()
                                }, s.onerror = function() {
                                    i(o.error)
                                }, s.onabort = function() {
                                    var t = o.error ? o.error : o.transaction.error;
                                    i(t)
                                }
                            })["catch"](i)
                        });
                        return A(r, i), r
                    }

                    function w(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var n = e._dbInfo,
                                        r = n.db.transaction(n.storeName, "readwrite"),
                                        s = r.objectStore(n.storeName),
                                        a = s.clear();
                                    r.oncomplete = function() {
                                        t()
                                    }, r.onabort = r.onerror = function() {
                                        var t = a.error ? a.error : a.transaction.error;
                                        i(t)
                                    }
                                })["catch"](i)
                            });
                        return A(i, t), i
                    }

                    function x(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var n = e._dbInfo,
                                        r = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName),
                                        s = r.count();
                                    s.onsuccess = function() {
                                        t(s.result)
                                    }, s.onerror = function() {
                                        i(s.error)
                                    }
                                })["catch"](i)
                            });
                        return A(i, t), i
                    }

                    function S(t, e) {
                        var i = this,
                            n = new Promise(function(e, n) {
                                return 0 > t ? void e(null) : void i.ready().then(function() {
                                    var r = i._dbInfo,
                                        s = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName),
                                        a = !1,
                                        o = s.openCursor();
                                    o.onsuccess = function() {
                                        var i = o.result;
                                        return i ? void(0 === t ? e(i.key) : a ? e(i.key) : (a = !0, i.advance(t))) : void e(null)
                                    }, o.onerror = function() {
                                        n(o.error)
                                    }
                                })["catch"](n)
                            });
                        return A(n, e), n
                    }

                    function T(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var n = e._dbInfo,
                                        r = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName),
                                        s = r.openCursor(),
                                        a = [];
                                    s.onsuccess = function() {
                                        var e = s.result;
                                        return e ? (a.push(e.key), void e["continue"]()) : void t(a)
                                    }, s.onerror = function() {
                                        i(s.error)
                                    }
                                })["catch"](i)
                            });
                        return A(i, t), i
                    }

                    function A(t, e) {
                        e && t.then(function(t) {
                            e(null, t)
                        }, function(t) {
                            e(t)
                        })
                    }
                    var O = O || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                    if (O) {
                        var k, C, E = "local-forage-detect-blob-support",
                            P = {
                                _driver: "asyncStorage",
                                _initStorage: p,
                                iterate: _,
                                getItem: y,
                                setItem: v,
                                removeItem: b,
                                clear: w,
                                length: x,
                                key: S,
                                keys: T
                            };
                        return P
                    }
                }("undefined" != typeof window ? window : self);
                e["default"] = i, t.exports = e["default"]
            },
            function(t, e, i) {
                "use strict";
                e.__esModule = !0;
                var n = function(t) {
                    function e(t) {
                        var e = this,
                            n = {};
                        if (t)
                            for (var r in t) n[r] = t[r];
                        return n.keyPrefix = n.name + "/", n.storeName !== e._defaultConfig.storeName && (n.keyPrefix += n.storeName + "/"), e._dbInfo = n, new Promise(function(t, e) {
                            t(i(3))
                        }).then(function(t) {
                            return n.serializer = t, Promise.resolve()
                        })
                    }

                    function n(t) {
                        var e = this,
                            i = e.ready().then(function() {
                                for (var t = e._dbInfo.keyPrefix, i = p.length - 1; i >= 0; i--) {
                                    var n = p.key(i);
                                    0 === n.indexOf(t) && p.removeItem(n)
                                }
                            });
                        return u(i, t), i
                    }

                    function r(e, i) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = n.ready().then(function() {
                            var t = n._dbInfo,
                                i = p.getItem(t.keyPrefix + e);
                            return i && (i = t.serializer.deserialize(i)), i
                        });
                        return u(r, i), r
                    }

                    function s(t, e) {
                        var i = this,
                            n = i.ready().then(function() {
                                for (var e = i._dbInfo, n = e.keyPrefix, r = n.length, s = p.length, a = 1, o = 0; s > o; o++) {
                                    var h = p.key(o);
                                    if (0 === h.indexOf(n)) {
                                        var c = p.getItem(h);
                                        if (c && (c = e.serializer.deserialize(c)), c = t(c, h.substring(r), a++), void 0 !== c) return c
                                    }
                                }
                            });
                        return u(n, e), n
                    }

                    function a(t, e) {
                        var i = this,
                            n = i.ready().then(function() {
                                var e, n = i._dbInfo;
                                try {
                                    e = p.key(t)
                                } catch (r) {
                                    e = null
                                }
                                return e && (e = e.substring(n.keyPrefix.length)), e
                            });
                        return u(n, e), n
                    }

                    function o(t) {
                        var e = this,
                            i = e.ready().then(function() {
                                for (var t = e._dbInfo, i = p.length, n = [], r = 0; i > r; r++) 0 === p.key(r).indexOf(t.keyPrefix) && n.push(p.key(r).substring(t.keyPrefix.length));
                                return n
                            });
                        return u(i, t), i
                    }

                    function h(t) {
                        var e = this,
                            i = e.keys().then(function(t) {
                                return t.length
                            });
                        return u(i, t), i
                    }

                    function c(e, i) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = n.ready().then(function() {
                            var t = n._dbInfo;
                            p.removeItem(t.keyPrefix + e)
                        });
                        return u(r, i), r
                    }

                    function l(e, i, n) {
                        var r = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var s = r.ready().then(function() {
                            void 0 === i && (i = null);
                            var t = i;
                            return new Promise(function(n, s) {
                                var a = r._dbInfo;
                                a.serializer.serialize(i, function(i, r) {
                                    if (r) s(r);
                                    else try {
                                        p.setItem(a.keyPrefix + e, i), n(t)
                                    } catch (o) {
                                        ("QuotaExceededError" === o.name || "NS_ERROR_DOM_QUOTA_REACHED" === o.name) && s(o), s(o)
                                    }
                                })
                            })
                        });
                        return u(s, n), s
                    }

                    function u(t, e) {
                        e && t.then(function(t) {
                            e(null, t)
                        }, function(t) {
                            e(t)
                        })
                    }
                    var p = null;
                    try {
                        if (!(t.localStorage && "setItem" in t.localStorage)) return;
                        p = t.localStorage
                    } catch (d) {
                        return
                    }
                    var f = {
                        _driver: "localStorageWrapper",
                        _initStorage: e,
                        iterate: s,
                        getItem: r,
                        setItem: l,
                        removeItem: c,
                        clear: n,
                        length: h,
                        key: a,
                        keys: o
                    };
                    return f
                }("undefined" != typeof window ? window : self);
                e["default"] = n, t.exports = e["default"]
            },
            function(t, e) {
                "use strict";
                e.__esModule = !0;
                var i = function(t) {
                    function e(e, i) {
                        e = e || [], i = i || {};
                        try {
                            return new Blob(e, i)
                        } catch (n) {
                            if ("TypeError" !== n.name) throw n;
                            for (var r = t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder, s = new r, a = 0; a < e.length; a += 1) s.append(e[a]);
                            return s.getBlob(i.type)
                        }
                    }

                    function i(t, e) {
                        var i = "";
                        if (t && (i = t.toString()), t && ("[object ArrayBuffer]" === t.toString() || t.buffer && "[object ArrayBuffer]" === t.buffer.toString())) {
                            var n, r = c;
                            t instanceof ArrayBuffer ? (n = t, r += u) : (n = t.buffer, "[object Int8Array]" === i ? r += d : "[object Uint8Array]" === i ? r += f : "[object Uint8ClampedArray]" === i ? r += g : "[object Int16Array]" === i ? r += m : "[object Uint16Array]" === i ? r += _ : "[object Int32Array]" === i ? r += y : "[object Uint32Array]" === i ? r += v : "[object Float32Array]" === i ? r += b : "[object Float64Array]" === i ? r += w : e(new Error("Failed to get type for BinaryArray"))), e(r + s(n))
                        } else if ("[object Blob]" === i) {
                            var a = new FileReader;
                            a.onload = function() {
                                var i = o + t.type + "~" + s(this.result);
                                e(c + p + i)
                            }, a.readAsArrayBuffer(t)
                        } else try {
                            e(JSON.stringify(t))
                        } catch (h) {
                            console.error("Couldn't convert value into a JSON string: ", t), e(null, h)
                        }
                    }

                    function n(t) {
                        if (t.substring(0, l) !== c) return JSON.parse(t);
                        var i, n = t.substring(x),
                            s = t.substring(l, x);
                        if (s === p && h.test(n)) {
                            var a = n.match(h);
                            i = a[1], n = n.substring(a[0].length)
                        }
                        var o = r(n);
                        switch (s) {
                            case u:
                                return o;
                            case p:
                                return e([o], {
                                    type: i
                                });
                            case d:
                                return new Int8Array(o);
                            case f:
                                return new Uint8Array(o);
                            case g:
                                return new Uint8ClampedArray(o);
                            case m:
                                return new Int16Array(o);
                            case _:
                                return new Uint16Array(o);
                            case y:
                                return new Int32Array(o);
                            case v:
                                return new Uint32Array(o);
                            case b:
                                return new Float32Array(o);
                            case w:
                                return new Float64Array(o);
                            default:
                                throw new Error("Unkown type: " + s)
                        }
                    }

                    function r(t) {
                        var e, i, n, r, s, o = .75 * t.length,
                            h = t.length,
                            c = 0;
                        "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
                        var l = new ArrayBuffer(o),
                            u = new Uint8Array(l);
                        for (e = 0; h > e; e += 4) i = a.indexOf(t[e]), n = a.indexOf(t[e + 1]), r = a.indexOf(t[e + 2]), s = a.indexOf(t[e + 3]), u[c++] = i << 2 | n >> 4, u[c++] = (15 & n) << 4 | r >> 2, u[c++] = (3 & r) << 6 | 63 & s;
                        return l
                    }

                    function s(t) {
                        var e, i = new Uint8Array(t),
                            n = "";
                        for (e = 0; e < i.length; e += 3) n += a[i[e] >> 2], n += a[(3 & i[e]) << 4 | i[e + 1] >> 4], n += a[(15 & i[e + 1]) << 2 | i[e + 2] >> 6], n += a[63 & i[e + 2]];
                        return i.length % 3 === 2 ? n = n.substring(0, n.length - 1) + "=" : i.length % 3 === 1 && (n = n.substring(0, n.length - 2) + "=="), n
                    }
                    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        o = "~~local_forage_type~",
                        h = /^~~local_forage_type~([^~]+)~/,
                        c = "__lfsc__:",
                        l = c.length,
                        u = "arbf",
                        p = "blob",
                        d = "si08",
                        f = "ui08",
                        g = "uic8",
                        m = "si16",
                        y = "si32",
                        _ = "ur16",
                        v = "ui32",
                        b = "fl32",
                        w = "fl64",
                        x = l + u.length,
                        S = {
                            serialize: i,
                            deserialize: n,
                            stringToBuffer: r,
                            bufferToString: s
                        };
                    return S
                }("undefined" != typeof window ? window : self);
                e["default"] = i, t.exports = e["default"]
            },
            function(t, e, i) {
                "use strict";
                e.__esModule = !0;
                var n = function(t) {
                    function e(t) {
                        var e = this,
                            n = {
                                db: null
                            };
                        if (t)
                            for (var r in t) n[r] = "string" != typeof t[r] ? t[r].toString() : t[r];
                        var s = new Promise(function(t, i) {
                            try {
                                n.db = p(n.name, String(n.version), n.description, n.size)
                            } catch (r) {
                                return i(r)
                            }
                            n.db.transaction(function(r) {
                                r.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                    e._dbInfo = n, t()
                                }, function(t, e) {
                                    i(e)
                                })
                            })
                        });
                        return new Promise(function(t, e) {
                            t(i(3))
                        }).then(function(t) {
                            return n.serializer = t, s
                        })
                    }

                    function n(e, i) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = new Promise(function(t, i) {
                            n.ready().then(function() {
                                var r = n._dbInfo;
                                r.db.transaction(function(n) {
                                    n.executeSql("SELECT * FROM " + r.storeName + " WHERE key = ? LIMIT 1", [e], function(e, i) {
                                        var n = i.rows.length ? i.rows.item(0).value : null;
                                        n && (n = r.serializer.deserialize(n)), t(n)
                                    }, function(t, e) {
                                        i(e)
                                    })
                                })
                            })["catch"](i)
                        });
                        return u(r, i), r
                    }

                    function r(t, e) {
                        var i = this,
                            n = new Promise(function(e, n) {
                                i.ready().then(function() {
                                    var r = i._dbInfo;
                                    r.db.transaction(function(i) {
                                        i.executeSql("SELECT * FROM " + r.storeName, [], function(i, n) {
                                            for (var s = n.rows, a = s.length, o = 0; a > o; o++) {
                                                var h = s.item(o),
                                                    c = h.value;
                                                if (c && (c = r.serializer.deserialize(c)), c = t(c, h.key, o + 1), void 0 !== c) return void e(c)
                                            }
                                            e()
                                        }, function(t, e) {
                                            n(e)
                                        })
                                    })
                                })["catch"](n)
                            });
                        return u(n, e), n
                    }

                    function s(e, i, n) {
                        var r = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var s = new Promise(function(t, n) {
                            r.ready().then(function() {
                                void 0 === i && (i = null);
                                var s = i,
                                    a = r._dbInfo;
                                a.serializer.serialize(i, function(i, r) {
                                    r ? n(r) : a.db.transaction(function(r) {
                                        r.executeSql("INSERT OR REPLACE INTO " + a.storeName + " (key, value) VALUES (?, ?)", [e, i], function() {
                                            t(s)
                                        }, function(t, e) {
                                            n(e)
                                        })
                                    }, function(t) {
                                        t.code === t.QUOTA_ERR && n(t)
                                    })
                                })
                            })["catch"](n)
                        });
                        return u(s, n), s
                    }

                    function a(e, i) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = new Promise(function(t, i) {
                            n.ready().then(function() {
                                var r = n._dbInfo;
                                r.db.transaction(function(n) {
                                    n.executeSql("DELETE FROM " + r.storeName + " WHERE key = ?", [e], function() {
                                        t()
                                    }, function(t, e) {
                                        i(e)
                                    })
                                })
                            })["catch"](i)
                        });
                        return u(r, i), r
                    }

                    function o(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var n = e._dbInfo;
                                    n.db.transaction(function(e) {
                                        e.executeSql("DELETE FROM " + n.storeName, [], function() {
                                            t()
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                })["catch"](i)
                            });
                        return u(i, t), i
                    }

                    function h(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var n = e._dbInfo;
                                    n.db.transaction(function(e) {
                                        e.executeSql("SELECT COUNT(key) as c FROM " + n.storeName, [], function(e, i) {
                                            var n = i.rows.item(0).c;
                                            t(n)
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                })["catch"](i)
                            });
                        return u(i, t), i
                    }

                    function c(t, e) {
                        var i = this,
                            n = new Promise(function(e, n) {
                                i.ready().then(function() {
                                    var r = i._dbInfo;
                                    r.db.transaction(function(i) {
                                        i.executeSql("SELECT key FROM " + r.storeName + " WHERE id = ? LIMIT 1", [t + 1], function(t, i) {
                                            var n = i.rows.length ? i.rows.item(0).key : null;
                                            e(n)
                                        }, function(t, e) {
                                            n(e)
                                        })
                                    })
                                })["catch"](n)
                            });
                        return u(n, e), n
                    }

                    function l(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var n = e._dbInfo;
                                    n.db.transaction(function(e) {
                                        e.executeSql("SELECT key FROM " + n.storeName, [], function(e, i) {
                                            for (var n = [], r = 0; r < i.rows.length; r++) n.push(i.rows.item(r).key);
                                            t(n)
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                })["catch"](i)
                            });
                        return u(i, t), i
                    }

                    function u(t, e) {
                        e && t.then(function(t) {
                            e(null, t)
                        }, function(t) {
                            e(t)
                        })
                    }
                    var p = t.openDatabase;
                    if (p) {
                        var d = {
                            _driver: "webSQLStorage",
                            _initStorage: e,
                            iterate: r,
                            getItem: n,
                            setItem: s,
                            removeItem: a,
                            clear: o,
                            length: h,
                            key: c,
                            keys: l
                        };
                        return d
                    }
                }("undefined" != typeof window ? window : self);
                e["default"] = n, t.exports = e["default"]
            }
        ])
    })
} catch (e) {
    localForageInitFailed = !0
}
cr.plugins_.LocalStorage = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            return t ? "string" == typeof t ? t : "string" == typeof t.message ? t.message : "string" == typeof t.name ? t.name : "string" == typeof t.data ? t.data : "unknown error" : "unknown error"
        }

        function e(t, e) {
            l = e, t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, t)
        }

        function i(t) {
            return !u || t.substr(0, u.length) === u
        }

        function n(t) {
            return u ? i(t) ? t.substr(u.length) : void 0 : t
        }

        function r() {}

        function s() {}

        function a() {}
        var o = "",
            h = "",
            c = [],
            l = "",
            u = "",
            p = "undefined" != typeof window.is_scirra_arcade;
        p && (u = "sa" + window.scirra_arcade_id + "_");
        var d = cr.plugins_.LocalStorage.prototype;
        d.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var f = d.Type.prototype;
        f.onCreate = function() {}, d.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var g = d.Instance.prototype;
        g.onCreate = function() {
            this.pendingSets = 0, this.pendingGets = 0
        }, g.onDestroy = function() {}, g.saveToJSON = function() {
            return {}
        }, g.loadFromJSON = function(t) {};
        var m = !0;
        r.prototype.OnItemSet = function(t) {
            return o === t
        }, r.prototype.OnAnyItemSet = function() {
            return !0
        }, r.prototype.OnItemGet = function(t) {
            return o === t
        }, r.prototype.OnAnyItemGet = function() {
            return !0
        }, r.prototype.OnItemRemoved = function(t) {
            return o === t
        }, r.prototype.OnAnyItemRemoved = function() {
            return !0
        }, r.prototype.OnCleared = function() {
            return !0
        }, r.prototype.OnAllKeyNamesLoaded = function() {
            return !0
        }, r.prototype.OnError = function() {
            return !0
        }, r.prototype.OnItemExists = function(t) {
            return o === t
        }, r.prototype.OnItemMissing = function(t) {
            return o === t
        }, r.prototype.CompareKey = function(t, e) {
            return cr.do_cmp(o, t, e)
        }, r.prototype.CompareValue = function(t, e) {
            return cr.do_cmp(h, t, e)
        }, r.prototype.IsProcessingSets = function() {
            return this.pendingSets > 0
        }, r.prototype.IsProcessingGets = function() {
            return this.pendingGets > 0
        }, r.prototype.OnAllSetsComplete = function() {
            return !0
        }, r.prototype.OnAllGetsComplete = function() {
            return !0
        }, d.cnds = new r, s.prototype.SetItem = function(i, n) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var r = u + i;
            this.pendingSets++;
            var s = this;
            localforage.setItem(r, n, function(e, n) {
                m = !0, s.pendingSets--, e ? (l = t(e), s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, s)) : (o = i, h = n, s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemSet, s), s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemSet, s), o = "", h = ""), 0 === s.pendingSets && s.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllSetsComplete, s)
            })
        }, s.prototype.GetItem = function(i) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var n = u + i;
            this.pendingGets++;
            var r = this;
            localforage.getItem(n, function(e, n) {
                r.pendingGets--, e ? (l = t(e), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, r)) : (o = i, h = n, "undefined" != typeof h && null !== h || (h = ""), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemGet, r), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, r), o = "", h = ""), 0 === r.pendingGets && r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllGetsComplete, r)
            })
        }, s.prototype.CheckItemExists = function(i) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var n = u + i,
                r = this;
            localforage.getItem(n, function(e, n) {
                e ? (l = t(e), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, r)) : (o = i, null === n ? (h = "", r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, r)) : (h = n, r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, r)), o = "", h = "")
            })
        }, s.prototype.RemoveItem = function(i) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var n = u + i,
                r = this;
            localforage.removeItem(n, function(e) {
                m = !0, e ? (l = t(e), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, r)) : (o = i, h = "", r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemRemoved, r), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemRemoved, r), o = "")
            })
        }, s.prototype.ClearStorage = function() {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            if (!p) {
                var i = this;
                localforage.clear(function(e) {
                    m = !0, e ? (l = t(e), i.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, i)) : (o = "", h = "", cr.clearArray(c), i.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnCleared, i))
                })
            }
        }, s.prototype.GetAllKeyNames = function() {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var r = this;
            localforage.keys(function(e, s) {
                var a, o, h;
                if (e) l = t(e), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, r);
                else {
                    for (cr.clearArray(c), a = 0, o = s.length; a < o; ++a) h = s[a], i(h) && c.push(n(h));
                    r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllKeyNamesLoaded, r)
                }
            })
        }, d.acts = new s, a.prototype.ItemValue = function(t) {
            t.set_any(h)
        }, a.prototype.Key = function(t) {
            t.set_string(o)
        }, a.prototype.KeyCount = function(t) {
            t.set_int(c.length)
        }, a.prototype.KeyAt = function(t, e) {
            return e = Math.floor(e), e < 0 || e >= c.length ? void t.set_string("") : void t.set_string(c[e])
        }, a.prototype.ErrorMessage = function(t) {
            t.set_string(l)
        }, d.exps = new a
    }(), cr.plugins_.NinePatch = function(t) {
        this.runtime = t
    },
    function() {
        function t(t, e, i, n, r, s, a, o, h, c) {
            t.save(), t.fillStyle = e;
            var l = r % i,
                u = s % n;
            l < 0 && (l += i), u < 0 && (u += n), t.translate(l + h, u + c), t.fillRect(r - l - h, s - u - c, a, o), t.restore()
        }

        function e() {}

        function i() {}

        function n() {}
        var r = cr.plugins_.NinePatch.prototype;
        r.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var s = r.Type.prototype;
        s.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.fillPattern = null, this.leftPattern = null, this.rightPattern = null, this.topPattern = null, this.bottomPattern = null, this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, s.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, s.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, s.unloadTextures = function() {
            this.is_family || this.instances.length || this.runtime.glwrap && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.runtime.glwrap.deleteTexture(this.webGL_fillTexture), this.runtime.glwrap.deleteTexture(this.webGL_leftTexture), this.runtime.glwrap.deleteTexture(this.webGL_rightTexture), this.runtime.glwrap.deleteTexture(this.webGL_topTexture), this.runtime.glwrap.deleteTexture(this.webGL_bottomTexture), this.webGL_texture = null, this.webGL_fillTexture = null, this.webGL_leftTexture = null, this.webGL_rightTexture = null, this.webGL_topTexture = null, this.webGL_bottomTexture = null)
        }, s.slicePatch = function(t, e, i, n) {
            var r = document.createElement("canvas"),
                s = i - t,
                a = n - e;
            r.width = s, r.height = a;
            var o = r.getContext("2d");
            return o.drawImage(this.texture_img, t, e, s, a, 0, 0, s, a), r
        }, s.createPatch = function(t, e, i, n) {
            var r = this.texture_img.width,
                s = this.texture_img.height,
                a = r - e,
                o = s - n;
            if (this.runtime.glwrap) {
                if (this.webGL_fillTexture) return;
                var h = this.runtime.glwrap,
                    c = this.runtime.linearSampling,
                    l = this.texture_pixelformat;
                a > t && o > i && (this.webGL_fillTexture = h.loadTexture(this.slicePatch(t, i, a, o), !0, c, l)), t > 0 && o > i && (this.webGL_leftTexture = h.loadTexture(this.slicePatch(0, i, t, o), !0, c, l, "repeat-y")), e > 0 && o > i && (this.webGL_rightTexture = h.loadTexture(this.slicePatch(a, i, r, o), !0, c, l, "repeat-y")), i > 0 && a > t && (this.webGL_topTexture = h.loadTexture(this.slicePatch(t, 0, a, i), !0, c, l, "repeat-x")), n > 0 && a > t && (this.webGL_bottomTexture = h.loadTexture(this.slicePatch(t, o, a, s), !0, c, l, "repeat-x"))
            } else {
                if (this.fillPattern) return;
                var u = this.runtime.ctx;
                a > t && o > i && (this.fillPattern = u.createPattern(this.slicePatch(t, i, a, o), "repeat")), t > 0 && o > i && (this.leftPattern = u.createPattern(this.slicePatch(0, i, t, o), "repeat")), e > 0 && o > i && (this.rightPattern = u.createPattern(this.slicePatch(a, i, r, o), "repeat")), i > 0 && a > t && (this.topPattern = u.createPattern(this.slicePatch(t, 0, a, i), "repeat")), n > 0 && a > t && (this.bottomPattern = u.createPattern(this.slicePatch(t, o, a, s), "repeat"))
            }
        }, r.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var a = r.Instance.prototype;
        a.onCreate = function() {
            this.leftMargin = this.properties[0], this.rightMargin = this.properties[1], this.topMargin = this.properties[2], this.bottomMargin = this.properties[3], this.edges = this.properties[4], this.fill = this.properties[5], this.visible = 0 === this.properties[6], this.seamless = 0 !== this.properties[8], this.recycled ? this.rcTex.set(0, 0, 0, 0) : this.rcTex = new cr.rect(0, 0, 0, 0), this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat))), this.type.createPatch(this.leftMargin, this.rightMargin, this.topMargin, this.bottomMargin)
        }, a.draw = function(e) {
            var i = this.type.texture_img,
                n = this.leftMargin,
                r = this.rightMargin,
                s = this.topMargin,
                a = this.bottomMargin,
                o = i.width,
                h = i.height,
                c = o - r,
                l = h - a;
            e.globalAlpha = this.opacity, e.save();
            var u = this.x,
                p = this.y,
                d = this.width,
                f = this.height;
            this.runtime.pixel_rounding && (u = Math.round(u), p = Math.round(p));
            var g = -(this.hotspotX * this.width),
                m = -(this.hotspotY * this.height),
                y = g % o,
                _ = m % h;
            y < 0 && (y += o), _ < 0 && (_ += h), e.translate(u + y, p + _);
            var v = g - y,
                b = m - _,
                w = this.seamless ? 1 : 0;
            if (n > 0 && s > 0 && e.drawImage(i, 0, 0, n + w, s + w, v, b, n + w, s + w), r > 0 && s > 0 && e.drawImage(i, c - w, 0, r + w, s + w, v + d - r - w, b, r + w, s + w), r > 0 && a > 0 && e.drawImage(i, c - w, l - w, r + w, a + w, v + d - r - w, b + f - a - w, r + w, a + w), n > 0 && a > 0 && e.drawImage(i, 0, l - w, n + w, a + w, v, b + f - a - w, n + w, a + w), 0 === this.edges) {
                var x = 2 === this.fill ? 0 : w;
                n > 0 && l > s && t(e, this.type.leftPattern, n, l - s, v, b + s, n + x, f - s - a, 0, 0), r > 0 && l > s && t(e, this.type.rightPattern, r, l - s, v + d - r - x, b + s, r + x, f - s - a, x, 0), s > 0 && c > n && t(e, this.type.topPattern, c - n, s, v + n, b, d - n - r, s + x, 0, 0), a > 0 && c > n && t(e, this.type.bottomPattern, c - n, a, v + n, b + f - a - x, d - n - r, a + x, 0, x)
            } else 1 === this.edges && (n > 0 && l > s && f - s - a > 0 && e.drawImage(i, 0, s, n, l - s, v, b + s, n, f - s - a), r > 0 && l > s && f - s - a > 0 && e.drawImage(i, c, s, r, l - s, v + d - r, b + s, r, f - s - a), s > 0 && c > n && d - n - r > 0 && e.drawImage(i, n, 0, c - n, s, v + n, b, d - n - r, s), a > 0 && c > n && d - n - r > 0 && e.drawImage(i, n, l, c - n, a, v + n, b + f - a, d - n - r, a));
            l > s && c > n && (0 === this.fill ? t(e, this.type.fillPattern, c - n, l - s, v + n, b + s, d - n - r, f - s - a, 0, 0) : 1 === this.fill && d - n - r > 0 && f - s - a > 0 && e.drawImage(i, n, s, c - n, l - s, v + n, b + s, d - n - r, f - s - a)), e.restore()
        }, a.drawPatch = function(t, e, i, n, r, s, a, o, h, c) {
            t.setTexture(e);
            var l = this.rcTex;
            l.left = i / e.c2width, l.top = n / e.c2height, l.right = (i + r) / e.c2width, l.bottom = (n + s) / e.c2height, t.quadTex(a, o, a + h, o, a + h, o + c, a, o + c, l)
        }, a.tilePatch = function(t, e, i, n, r, s, a, o) {
            t.setTexture(e);
            var h = this.rcTex;
            h.left = -a / e.c2width, h.top = -o / e.c2height, h.right = (r - a) / e.c2width, h.bottom = (s - o) / e.c2height, t.quadTex(i, n, i + r, n, i + r, n + s, i, n + s, h)
        }, a.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, a.drawGL = function(t) {
            var e = this.leftMargin,
                i = this.rightMargin,
                n = this.topMargin,
                r = this.bottomMargin,
                s = this.type.texture_img.width,
                a = this.type.texture_img.height,
                o = s - i,
                h = a - r;
            t.setOpacity(this.opacity);
            var c = (this.rcTex, this.bquad),
                l = c.tlx,
                u = c.tly,
                p = this.width,
                d = this.height;
            this.runtime.pixel_rounding && (l = Math.round(l), u = Math.round(u));
            var f = this.seamless ? 1 : 0;
            if (e > 0 && n > 0 && this.drawPatch(t, this.type.webGL_texture, 0, 0, e + f, n + f, l, u, e + f, n + f), i > 0 && n > 0 && this.drawPatch(t, this.type.webGL_texture, o - f, 0, i + f, n + f, l + p - i - f, u, i + f, n + f), i > 0 && r > 0 && this.drawPatch(t, this.type.webGL_texture, o - f, h - f, i + f, r + f, l + p - i - f, u + d - r - f, i + f, r + f), e > 0 && r > 0 && this.drawPatch(t, this.type.webGL_texture, 0, h - f, e + f, r + f, l, u + d - r - f, e + f, r + f), 0 === this.edges) {
                var g = 2 === this.fill ? 0 : f;
                e > 0 && h > n && this.tilePatch(t, this.type.webGL_leftTexture, l, u + n, e + g, d - n - r, 0, 0), i > 0 && h > n && this.tilePatch(t, this.type.webGL_rightTexture, l + p - i - g, u + n, i + g, d - n - r, g, 0), n > 0 && o > e && this.tilePatch(t, this.type.webGL_topTexture, l + e, u, p - e - i, n + g, 0, 0), r > 0 && o > e && this.tilePatch(t, this.type.webGL_bottomTexture, l + e, u + d - r - g, p - e - i, r + g, 0, g)
            } else 1 === this.edges && (e > 0 && h > n && this.drawPatch(t, this.type.webGL_texture, 0, n, e, h - n, l, u + n, e, d - n - r), i > 0 && h > n && this.drawPatch(t, this.type.webGL_texture, o, n, i, h - n, l + p - i, u + n, i, d - n - r), n > 0 && o > e && this.drawPatch(t, this.type.webGL_texture, e, 0, o - e, n, l + e, u, p - e - i, n), r > 0 && o > e && this.drawPatch(t, this.type.webGL_texture, e, h, o - e, r, l + e, u + d - r, p - e - i, r));
            h > n && o > e && (0 === this.fill ? this.tilePatch(t, this.type.webGL_fillTexture, l + e, u + n, p - e - i, d - n - r, 0, 0) : 1 === this.fill && this.drawPatch(t, this.type.webGL_texture, e, n, o - e, h - n, l + e, u + n, p - e - i, d - n - r))
        }, e.prototype.OnURLLoaded = function() {
            return !0
        }, r.cnds = new e, i.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, r.acts = new i, r.exps = new n
    }(), cr.plugins_.Particles = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            this.owner = t, this.active = !1, this.x = 0, this.y = 0, this.speed = 0, this.angle = 0, this.opacity = 1, this.grow = 0, this.size = 0, this.gs = 0, this.age = 0, cr.seal(this)
        }

        function e() {}

        function i() {}

        function n() {}
        var r = cr.plugins_.Particles.prototype;
        r.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var s = r.Type.prototype;
        s.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.webGL_texture = null, this.runtime.waitForImageLoad(this.texture_img, this.texture_file))
        }, s.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, s.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, s.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, s.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, s.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.prototype.init = function() {
            var t = this.owner;
            this.x = t.x - t.xrandom / 2 + Math.random() * t.xrandom, this.y = t.y - t.yrandom / 2 + Math.random() * t.yrandom, this.speed = t.initspeed - t.speedrandom / 2 + Math.random() * t.speedrandom, this.angle = t.angle - t.spraycone / 2 + Math.random() * t.spraycone, this.opacity = t.initopacity, this.size = t.initsize - t.sizerandom / 2 + Math.random() * t.sizerandom, this.grow = t.growrate - t.growrandom / 2 + Math.random() * t.growrandom, this.gs = 0, this.age = 0
        }, t.prototype.tick = function(t) {
            var e = this.owner;
            return this.x += Math.cos(this.angle) * this.speed * t, this.y += Math.sin(this.angle) * this.speed * t, this.y += this.gs * t, this.speed += e.acc * t, this.size += this.grow * t, this.gs += e.g * t, this.age += t, this.size < 1 ? void(this.active = !1) : (0 !== e.lifeanglerandom && (this.angle += Math.random() * e.lifeanglerandom * t - e.lifeanglerandom * t / 2), 0 !== e.lifespeedrandom && (this.speed += Math.random() * e.lifespeedrandom * t - e.lifespeedrandom * t / 2), 0 !== e.lifeopacityrandom && (this.opacity += Math.random() * e.lifeopacityrandom * t - e.lifeopacityrandom * t / 2, this.opacity < 0 ? this.opacity = 0 : this.opacity > 1 && (this.opacity = 1)), e.destroymode <= 1 && this.age >= e.timeout && (this.active = !1), void(2 === e.destroymode && this.speed <= 0 && (this.active = !1)))
        }, t.prototype.draw = function(t) {
            var e = this.owner.opacity * this.opacity;
            if (0 !== e) {
                0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout), t.globalAlpha = e;
                var i = this.x - this.size / 2,
                    n = this.y - this.size / 2;
                this.owner.runtime.pixel_rounding && (i = i + .5 | 0, n = n + .5 | 0), t.drawImage(this.owner.type.texture_img, i, n, this.size, this.size)
            }
        }, t.prototype.drawGL = function(t) {
            var e = this.owner.opacity * this.opacity;
            0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout);
            var i = this.size,
                n = i * this.owner.particlescale,
                r = this.x - i / 2,
                s = this.y - i / 2;
            this.owner.runtime.pixel_rounding && (r = r + .5 | 0, s = s + .5 | 0), n < 1 || 0 === e || (n < t.minPointSize || n > t.maxPointSize ? (t.setOpacity(e), t.quad(r, s, r + i, s, r + i, s + i, r, s + i)) : t.point(this.x, this.y, n, e))
        }, t.prototype.left = function() {
            return this.x - this.size / 2
        }, t.prototype.right = function() {
            return this.x + this.size / 2
        }, t.prototype.top = function() {
            return this.y - this.size / 2
        }, t.prototype.bottom = function() {
            return this.y + this.size / 2
        }, r.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var a = r.Instance.prototype,
            o = [];
        a.onCreate = function() {
            var t = this.properties;
            if (this.rate = t[0], this.spraycone = cr.to_radians(t[1]), this.spraytype = t[2], this.spraying = !0, this.initspeed = t[3], this.initsize = t[4], this.initopacity = t[5] / 100, this.growrate = t[6], this.xrandom = t[7], this.yrandom = t[8], this.speedrandom = t[9], this.sizerandom = t[10], this.growrandom = t[11], this.acc = t[12], this.g = t[13], this.lifeanglerandom = t[14], this.lifespeedrandom = t[15], this.lifeopacityrandom = t[16], this.destroymode = t[17], this.timeout = t[18], this.particleCreateCounter = 0, this.particlescale = 1, this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, this.add_bbox_changed_callback(function(t) {
                t.bbox.set(t.particleBoxLeft, t.particleBoxTop, t.particleBoxRight, t.particleBoxBottom), t.bquad.set_from_rect(t.bbox), t.bbox_changed = !1, t.update_collision_cell(), t.update_render_cell()
            }), this.recycled || (this.particles = []), this.runtime.tickMe(this), this.type.loadTextures(), 1 === this.spraytype)
                for (var e = 0; e < this.rate; e++) this.allocateParticle().opacity = 0;
            this.first_tick = !0
        }, a.saveToJSON = function() {
            var t, e, i, n = {
                    r: this.rate,
                    sc: this.spraycone,
                    st: this.spraytype,
                    s: this.spraying,
                    isp: this.initspeed,
                    isz: this.initsize,
                    io: this.initopacity,
                    gr: this.growrate,
                    xr: this.xrandom,
                    yr: this.yrandom,
                    spr: this.speedrandom,
                    szr: this.sizerandom,
                    grnd: this.growrandom,
                    acc: this.acc,
                    g: this.g,
                    lar: this.lifeanglerandom,
                    lsr: this.lifespeedrandom,
                    lor: this.lifeopacityrandom,
                    dm: this.destroymode,
                    to: this.timeout,
                    pcc: this.particleCreateCounter,
                    ft: this.first_tick,
                    p: []
                },
                r = n.p;
            for (t = 0, e = this.particles.length; t < e; t++) i = this.particles[t], r.push([i.x, i.y, i.speed, i.angle, i.opacity, i.grow, i.size, i.gs, i.age]);
            return n
        }, a.loadFromJSON = function(t) {
            this.rate = t.r, this.spraycone = t.sc, this.spraytype = t.st, this.spraying = t.s, this.initspeed = t.isp, this.initsize = t.isz, this.initopacity = t.io, this.growrate = t.gr, this.xrandom = t.xr, this.yrandom = t.yr, this.speedrandom = t.spr, this.sizerandom = t.szr, this.growrandom = t.grnd, this.acc = t.acc, this.g = t.g, this.lifeanglerandom = t.lar, this.lifespeedrandom = t.lsr, this.lifeopacityrandom = t.lor, this.destroymode = t.dm, this.timeout = t.to, this.particleCreateCounter = t.pcc, this.first_tick = t.ft, o.push.apply(o, this.particles), cr.clearArray(this.particles);
            var e, i, n, r, s = t.p;
            for (e = 0, i = s.length; e < i; e++) n = this.allocateParticle(), r = s[e], n.x = r[0], n.y = r[1], n.speed = r[2], n.angle = r[3], n.opacity = r[4], n.grow = r[5], n.size = r[6], n.gs = r[7], n.age = r[8]
        }, a.onDestroy = function() {
            o.push.apply(o, this.particles), cr.clearArray(this.particles)
        }, a.allocateParticle = function() {
            var e;
            return o.length ? (e = o.pop(), e.owner = this) : e = new t(this), this.particles.push(e), e.active = !0, e
        }, a.tick = function() {
            var t, e, i, n, r, s = this.runtime.getDt(this);
            if (0 === this.spraytype && this.spraying)
                for (this.particleCreateCounter += s * this.rate, n = cr.floor(this.particleCreateCounter), this.particleCreateCounter -= n, t = 0; t < n; t++) i = this.allocateParticle(), i.init();
            for (this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, t = 0, r = 0, e = this.particles.length; t < e; t++) i = this.particles[t], this.particles[r] = i, this.runtime.redraw = !0, 1 === this.spraytype && this.first_tick && i.init(), i.tick(s), i.active ? (i.left() < this.particleBoxLeft && (this.particleBoxLeft = i.left()), i.right() > this.particleBoxRight && (this.particleBoxRight = i.right()), i.top() < this.particleBoxTop && (this.particleBoxTop = i.top()), i.bottom() > this.particleBoxBottom && (this.particleBoxBottom = i.bottom()), r++) : o.push(i);
            cr.truncateArray(this.particles, r), this.set_bbox_changed(), this.first_tick = !1, 1 === this.spraytype && 0 === this.particles.length && this.runtime.DestroyInstance(this)
        }, a.draw = function(t) {
            var e, i, n, r = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++) n = this.particles[e], n.right() >= r.viewLeft && n.bottom() >= r.viewTop && n.left() <= r.viewRight && n.top() <= r.viewBottom && n.draw(t)
        }, a.drawGL = function(t) {
            this.particlescale = this.layer.getScale(), t.setTexture(this.type.webGL_texture);
            var e, i, n, r = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++) n = this.particles[e], n.right() >= r.viewLeft && n.bottom() >= r.viewTop && n.left() <= r.viewRight && n.top() <= r.viewBottom && n.drawGL(t)
        }, e.prototype.IsSpraying = function() {
            return this.spraying
        }, r.cnds = new e, i.prototype.SetSpraying = function(t) {
            this.spraying = 0 !== t
        }, i.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, i.prototype.SetRate = function(t) {
            this.rate = t;
            var e, i;
            if (1 === this.spraytype && this.first_tick)
                if (t < this.particles.length)
                    for (e = this.particles.length - t, i = 0; i < e; i++) o.push(this.particles.pop());
                else if (t > this.particles.length)
                for (e = t - this.particles.length,
                    i = 0; i < e; i++) this.allocateParticle().opacity = 0
        }, i.prototype.SetSprayCone = function(t) {
            this.spraycone = cr.to_radians(t)
        }, i.prototype.SetInitSpeed = function(t) {
            this.initspeed = t
        }, i.prototype.SetInitSize = function(t) {
            this.initsize = t
        }, i.prototype.SetInitOpacity = function(t) {
            this.initopacity = t / 100
        }, i.prototype.SetGrowRate = function(t) {
            this.growrate = t
        }, i.prototype.SetXRandomiser = function(t) {
            this.xrandom = t
        }, i.prototype.SetYRandomiser = function(t) {
            this.yrandom = t
        }, i.prototype.SetSpeedRandomiser = function(t) {
            this.speedrandom = t
        }, i.prototype.SetSizeRandomiser = function(t) {
            this.sizerandom = t
        }, i.prototype.SetGrowRateRandomiser = function(t) {
            this.growrandom = t
        }, i.prototype.SetParticleAcc = function(t) {
            this.acc = t
        }, i.prototype.SetGravity = function(t) {
            this.g = t
        }, i.prototype.SetAngleRandomiser = function(t) {
            this.lifeanglerandom = t
        }, i.prototype.SetLifeSpeedRandomiser = function(t) {
            this.lifespeedrandom = t
        }, i.prototype.SetOpacityRandomiser = function(t) {
            this.lifeopacityrandom = t
        }, i.prototype.SetTimeout = function(t) {
            this.timeout = t
        }, r.acts = new i, n.prototype.ParticleCount = function(t) {
            t.set_int(this.particles.length)
        }, n.prototype.Rate = function(t) {
            t.set_float(this.rate)
        }, n.prototype.SprayCone = function(t) {
            t.set_float(cr.to_degrees(this.spraycone))
        }, n.prototype.InitSpeed = function(t) {
            t.set_float(this.initspeed)
        }, n.prototype.InitSize = function(t) {
            t.set_float(this.initsize)
        }, n.prototype.InitOpacity = function(t) {
            t.set_float(100 * this.initopacity)
        }, n.prototype.InitGrowRate = function(t) {
            t.set_float(this.growrate)
        }, n.prototype.XRandom = function(t) {
            t.set_float(this.xrandom)
        }, n.prototype.YRandom = function(t) {
            t.set_float(this.yrandom)
        }, n.prototype.InitSpeedRandom = function(t) {
            t.set_float(this.speedrandom)
        }, n.prototype.InitSizeRandom = function(t) {
            t.set_float(this.sizerandom)
        }, n.prototype.InitGrowRandom = function(t) {
            t.set_float(this.growrandom)
        }, n.prototype.ParticleAcceleration = function(t) {
            t.set_float(this.acc)
        }, n.prototype.Gravity = function(t) {
            t.set_float(this.g)
        }, n.prototype.ParticleAngleRandom = function(t) {
            t.set_float(this.lifeanglerandom)
        }, n.prototype.ParticleSpeedRandom = function(t) {
            t.set_float(this.lifespeedrandom)
        }, n.prototype.ParticleOpacityRandom = function(t) {
            t.set_float(this.lifeopacityrandom)
        }, n.prototype.Timeout = function(t) {
            t.set_float(this.timeout)
        }, r.exps = new n
    }(), cr.plugins_.Sprite = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            if (0 === this.datauri.length) {
                var t = document.createElement("canvas");
                t.width = this.width, t.height = this.height;
                var e = t.getContext("2d");
                this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
            }
            return this.datauri
        }

        function e() {}

        function i() {
            return m.length ? m.pop() : [0, 0, 0]
        }

        function n(t) {
            t[0] = 0, t[1] = 0, t[2] = 0, m.push(t)
        }

        function r(t, e) {
            return t < e ? "" + t + "," + e : "" + e + "," + t
        }

        function s(t, e, n, s) {
            var a = e.uid,
                o = n.uid,
                h = r(a, o);
            if (t.hasOwnProperty(h)) return void(t[h][2] = s);
            var c = i();
            c[0] = a, c[1] = o, c[2] = s, t[h] = c
        }

        function a(t, e, i) {
            var s = r(e.uid, i.uid);
            t.hasOwnProperty(s) && (n(t[s]), delete t[s])
        }

        function o(t, e) {
            var i, r, s = e.uid;
            for (i in t) t.hasOwnProperty(i) && (r = t[i], r[0] !== s && r[1] !== s || (n(t[i]), delete t[i]))
        }

        function h(t, e, i) {
            var n = r(e.uid, i.uid);
            return t.hasOwnProperty(n) ? (y = t[n][2], !0) : (y = -2, !1)
        }

        function c(t, e, i) {
            if (!t) return !1;
            var n, r, s, a, o, h, c = 0 !== e || 0 !== i,
                l = !1,
                u = this.runtime.getCurrentCondition(),
                p = u.type,
                d = u.inverted,
                f = t.getCurrentSol(),
                g = this.runtime.getCurrentEventStack().current_event.orblock;
            for (f.select_all ? (this.update_bbox(), S.copy(this.bbox), S.offset(e, i), this.runtime.getCollisionCandidates(this.layer, t, S, x), h = x) : h = g ? this.runtime.isCurrentConditionFirst() && !f.else_instances.length && f.instances.length ? f.instances : f.else_instances : f.instances, v = t, w = p !== t && !d, c && (n = this.x, r = this.y, this.x += e, this.y += i, this.set_bbox_changed()), s = 0, a = h.length; s < a; s++)
                if (o = h[s], this.runtime.testOverlap(this, o)) {
                    if (l = !0, d) break;
                    p !== t && b.add(o)
                }
            return c && (this.x = n, this.y = r, this.set_bbox_changed()), cr.clearArray(x), l
        }

        function l() {}

        function u() {}
        var p = cr.plugins_.Sprite.prototype;
        p.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var d = p.Type.prototype;
        d.onCreate = function() {
            if (!this.is_family) {
                var e, i, n, r, s, a, o, h, c, l;
                for (this.all_frames = [], this.has_loaded_textures = !1, e = 0, i = this.animations.length; e < i; e++) {
                    for (s = this.animations[e], o = {}, o.name = s[0], o.speed = s[1], o.loop = s[2], o.repeatcount = s[3], o.repeatto = s[4], o.pingpong = s[5], o.sid = s[6], o.frames = [], n = 0, r = s[7].length; n < r; n++) a = s[7][n], h = {}, h.texture_file = a[0], h.texture_filesize = a[1], h.offx = a[2], h.offy = a[3], h.width = a[4], h.height = a[5], h.duration = a[6], h.hotspotX = a[7], h.hotspotY = a[8], h.image_points = a[9], h.poly_pts = a[10], h.pixelformat = a[11], h.spritesheeted = 0 !== h.width, h.datauri = "", h.getDataUri = t, l = {}, l.left = 0, l.top = 0, l.right = 1, l.bottom = 1, h.sheetTex = l, h.webGL_texture = null, c = this.runtime.findWaitingTexture(a[0]), c ? h.texture_img = c : (h.texture_img = new Image, h.texture_img.cr_src = a[0], h.texture_img.cr_filesize = a[1], h.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(h.texture_img, a[0])), cr.seal(h), o.frames.push(h), this.all_frames.push(h);
                    cr.seal(o), this.animations[e] = o
                }
            }
        }, d.updateAllCurrentTexture = function() {
            var t, e, i;
            for (t = 0, e = this.instances.length; t < e; t++) i = this.instances[t], i.curWebGLTexture = i.curFrame.webGL_texture
        }, d.onLostWebGLContext = function() {
            if (!this.is_family) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], i.texture_img.c2webGL_texture = null, i.webGL_texture = null;
                this.has_loaded_textures = !1, this.updateAllCurrentTexture()
            }
        }, d.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], i.webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.updateAllCurrentTexture()
            }
        }, d.loadTextures = function() {
            if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], i.webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.has_loaded_textures = !0
            }
        }, d.unloadTextures = function() {
            if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], this.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = null;
                this.has_loaded_textures = !1
            }
        };
        var f = [];
        d.preloadCanvas2D = function(t) {
            var e, i, n;
            for (cr.clearArray(f), e = 0, i = this.all_frames.length; e < i; ++e) n = this.all_frames[e].texture_img, f.indexOf(n) === -1 && (t.drawImage(n, 0, 0), f.push(n))
        }, p.Instance = function(t) {
            this.type = t, this.runtime = t.runtime;
            var e = this.type.animations[0].frames[0].poly_pts;
            this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
        };
        var g = p.Instance.prototype;
        g.onCreate = function() {
            this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
            var t = this.cur_animation.frames[this.cur_frame];
            this.collision_poly.set_pts(t.poly_pts), this.hotspotX = t.hotspotX, this.hotspotY = t.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.cur_anim_repeatto = this.cur_animation.repeatto, 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this), this.isTicking = !0), this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures();
            var e, i, n, r, s, a, o, h;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                for (s = this.type.animations[e], n = 0, r = s.frames.length; n < r; n++) a = s.frames[n], 0 === a.width && (a.width = a.texture_img.width, a.height = a.texture_img.height), a.spritesheeted && (h = a.texture_img, o = a.sheetTex, o.left = a.offx / h.width, o.top = a.offy / h.height, o.right = (a.offx + a.width) / h.width, o.bottom = (a.offy + a.height) / h.height, 0 === a.offx && 0 === a.offy && a.width === h.width && a.height === h.height && (a.spritesheeted = !1));
            this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
        }, g.saveToJSON = function() {
            var t = {
                a: this.cur_animation.sid,
                f: this.cur_frame,
                cas: this.cur_anim_speed,
                fs: this.frameStart,
                ar: this.animRepeats,
                at: this.animTimer.sum,
                rt: this.cur_anim_repeatto
            };
            return this.animPlaying || (t.ap = this.animPlaying), this.animForwards || (t.af = this.animForwards), t
        }, g.loadFromJSON = function(t) {
            var e = this.getAnimationBySid(t.a);
            e && (this.cur_animation = e), this.cur_frame = t.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = t.cas, this.frameStart = t.fs, this.animRepeats = t.ar, this.animTimer.reset(), this.animTimer.sum = t.at, this.animPlaying = !t.hasOwnProperty("ap") || t.ap, this.animForwards = !t.hasOwnProperty("af") || t.af, t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
        }, g.animationFinish = function(t) {
            this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
        }, g.getNowTime = function() {
            return this.animTimer.sum
        }, g.tick = function() {
            this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
            var t, e = this.getNowTime(),
                i = this.cur_animation,
                n = i.frames[this.cur_frame],
                r = n.duration / this.cur_anim_speed;
            this.animPlaying && e >= this.frameStart + r && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += r, this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1, this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1, this.animForwards = !0, i.loop || (this.animRepeats++, this.animRepeats >= i.repeatcount && this.animationFinish(!0))) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1), e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e), t = i.frames[this.cur_frame], this.OnFrameChanged(n, t), this.runtime.redraw = !0)
        }, g.getAnimationByName = function(t) {
            var e, i, n;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if (n = this.type.animations[e], cr.equals_nocase(n.name, t)) return n;
            return null
        }, g.getAnimationBySid = function(t) {
            var e, i, n;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if (n = this.type.animations[e], n.sid === t) return n;
            return null
        }, g.doChangeAnim = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.getAnimationByName(this.changeAnimName);
            this.changeAnimName = "", e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e, this.cur_anim_speed = e.speed, this.cur_anim_repeatto = e.repeatto, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
        }, g.doChangeAnimFrame = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.cur_frame;
            this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
        }, g.OnFrameChanged = function(t, e) {
            var i = t.width,
                n = t.height,
                r = e.width,
                s = e.height;
            i != r && (this.width *= r / i), n != s && (this.height *= s / n), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.collision_poly.set_pts(e.poly_pts), this.set_bbox_changed(), this.curFrame = e, this.curWebGLTexture = e.webGL_texture;
            var a, o, h;
            for (a = 0, o = this.behavior_insts.length; a < o; a++) h = this.behavior_insts[a], h.onSpriteFrameChanged && h.onSpriteFrameChanged(t, e);
            this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
        }, g.draw = function(t) {
            t.globalAlpha = this.opacity;
            var e = this.curFrame,
                i = e.spritesheeted,
                n = e.texture_img,
                r = this.x,
                s = this.y,
                a = this.width,
                o = this.height;
            if (0 === this.angle && a >= 0 && o >= 0) r -= this.hotspotX * a, s -= this.hotspotY * o, this.runtime.pixel_rounding && (r = Math.round(r), s = Math.round(s)), i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, r, s, a, o) : t.drawImage(n, r, s, a, o);
            else {
                this.runtime.pixel_rounding && (r = Math.round(r), s = Math.round(s)), t.save();
                var h = a > 0 ? 1 : -1,
                    c = o > 0 ? 1 : -1;
                t.translate(r, s), 1 === h && 1 === c || t.scale(h, c), t.rotate(this.angle * h * c);
                var l = 0 - this.hotspotX * cr.abs(a),
                    u = 0 - this.hotspotY * cr.abs(o);
                i ? t.drawImage(n, e.offx, e.offy, e.width, e.height, l, u, cr.abs(a), cr.abs(o)) : t.drawImage(n, l, u, cr.abs(a), cr.abs(o)), t.restore()
            }
        }, g.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, g.drawGL = function(t) {
            t.setTexture(this.curWebGLTexture), t.setOpacity(this.opacity);
            var e = this.curFrame,
                i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var n = Math.round(this.x) - this.x,
                    r = Math.round(this.y) - this.y;
                e.spritesheeted ? t.quadTex(i.tlx + n, i.tly + r, i.trx + n, i.try_ + r, i.brx + n, i.bry + r, i.blx + n, i.bly + r, e.sheetTex) : t.quad(i.tlx + n, i.tly + r, i.trx + n, i.try_ + r, i.brx + n, i.bry + r, i.blx + n, i.bly + r)
            } else e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
        }, g.getImagePointIndexByName = function(t) {
            var e, i, n = this.curFrame;
            for (e = 0, i = n.image_points.length; e < i; e++)
                if (cr.equals_nocase(t, n.image_points[e][0])) return e;
            return -1
        }, g.getImagePoint = function(t, e) {
            var i, n = this.curFrame,
                r = n.image_points;
            if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1, i = cr.floor(i), i < 0 || i >= r.length) return e ? this.x : this.y;
            var s = (r[i][1] - n.hotspotX) * this.width,
                a = r[i][2];
            a = (a - n.hotspotY) * this.height;
            var o = Math.cos(this.angle),
                h = Math.sin(this.angle),
                c = s * o - a * h;
            return a = a * o + s * h, s = c, s += this.x, a += this.y, e ? s : a
        };
        var m = [],
            y = -2,
            _ = [];
        e.prototype.OnCollision = function(t) {
            if (!t) return !1;
            var e = this.runtime,
                i = e.getCurrentCondition(),
                n = i.type,
                r = null;
            i.extra.collmemory ? r = i.extra.collmemory : (r = {}, i.extra.collmemory = r), i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0, e.addDestroyCallback(function(t) {
                o(i.extra.collmemory, t)
            }));
            var c, l, u, p, d, f, g, m, v, b = n.getCurrentSol(),
                w = t.getCurrentSol(),
                x = b.getObjects(),
                S = this.runtime.tickcount,
                T = S - 1,
                A = e.getCurrentEventStack().current_event;
            A.orblock;
            for (l = 0; l < x.length; l++) {
                for (u = x[l], w.select_all ? (u.update_bbox(), this.runtime.getCollisionCandidates(u.layer, t, u.bbox, _), c = _) : c = w.getObjects(), p = 0; p < c.length; p++) d = c[p], e.testOverlap(u, d) || e.checkRegisteredCollision(u, d) ? (m = h(r, u, d), v = !m || y < T, s(r, u, d, S), v && (e.pushCopySol(A.solModifiers), f = n.getCurrentSol(), g = t.getCurrentSol(), f.select_all = !1, g.select_all = !1, n === t ? (f.instances.length = 2, f.instances[0] = u, f.instances[1] = d, n.applySolToContainer()) : (f.instances.length = 1, g.instances.length = 1, f.instances[0] = u, g.instances[0] = d, n.applySolToContainer(), t.applySolToContainer()), A.retrigger(), e.popSol(A.solModifiers))) : a(r, u, d);
                cr.clearArray(_)
            }
            return !1
        };
        var v = null,
            b = new cr.ObjectSet,
            w = !1,
            x = [],
            S = new cr.rect(0, 0, 0, 0);
        d.finish = function(t) {
            if (w) {
                if (t) {
                    var e, i, n, r = this.runtime.getCurrentEventStack().current_event.orblock,
                        s = v.getCurrentSol(),
                        a = b.valuesRef();
                    if (s.select_all) {
                        for (s.select_all = !1, cr.clearArray(s.instances), e = 0, i = a.length; e < i; ++e) s.instances[e] = a[e];
                        if (r)
                            for (cr.clearArray(s.else_instances), e = 0, i = v.instances.length; e < i; ++e) n = v.instances[e], b.contains(n) || s.else_instances.push(n)
                    } else if (r) {
                        var o = s.instances.length;
                        for (e = 0, i = a.length; e < i; ++e) s.instances[o + e] = a[e], cr.arrayFindRemove(s.else_instances, a[e])
                    } else cr.shallowAssignArray(s.instances, a);
                    v.applySolToContainer()
                }
                b.clear(), w = !1
            }
        }, e.prototype.IsOverlapping = function(t) {
            return c.call(this, t, 0, 0)
        }, e.prototype.IsOverlappingOffset = function(t, e, i) {
            return c.call(this, t, e, i)
        }, e.prototype.IsAnimPlaying = function(t) {
            return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
        }, e.prototype.CompareFrame = function(t, e) {
            return cr.do_cmp(this.cur_frame, t, e)
        }, e.prototype.CompareAnimSpeed = function(t, e) {
            var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
            return cr.do_cmp(i, t, e)
        }, e.prototype.OnAnimFinished = function(t) {
            return cr.equals_nocase(this.animTriggerName, t)
        }, e.prototype.OnAnyAnimFinished = function() {
            return !0
        }, e.prototype.OnFrameChanged = function() {
            return !0
        }, e.prototype.IsMirrored = function() {
            return this.width < 0
        }, e.prototype.IsFlipped = function() {
            return this.height < 0
        }, e.prototype.OnURLLoaded = function() {
            return !0
        }, e.prototype.IsCollisionEnabled = function() {
            return this.collisionsEnabled
        }, p.cnds = new e, l.prototype.Spawn = function(t, e, i) {
            if (t && e) {
                var n = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
                if (n) {
                    "undefined" != typeof n.angle && (n.angle = this.angle, n.set_bbox_changed()), this.runtime.isInOnDestroy++;
                    var r, s, a;
                    if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n), n.is_contained)
                        for (r = 0, s = n.siblings.length; r < s; r++) a = n.siblings[r], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                    this.runtime.isInOnDestroy--;
                    var o = this.runtime.getCurrentAction(),
                        h = !1;
                    (cr.is_undefined(o.extra.Spawn_LastExec) || o.extra.Spawn_LastExec < this.runtime.execcount) && (h = !0, o.extra.Spawn_LastExec = this.runtime.execcount);
                    var c;
                    if (t != this.type && (c = t.getCurrentSol(), c.select_all = !1, h ? (cr.clearArray(c.instances), c.instances[0] = n) : c.instances.push(n), n.is_contained))
                        for (r = 0, s = n.siblings.length; r < s; r++) a = n.siblings[r], c = a.type.getCurrentSol(), c.select_all = !1, h ? (cr.clearArray(c.instances), c.instances[0] = a) : c.instances.push(a)
                }
            }
        }, l.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, l.prototype.StopAnim = function() {
            this.animPlaying = !1
        }, l.prototype.StartAnim = function(t) {
            this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, l.prototype.SetAnim = function(t, e) {
            this.changeAnimName = t, this.changeAnimFrom = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
        }, l.prototype.SetAnimFrame = function(t) {
            this.changeAnimFrame = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
        }, l.prototype.SetAnimSpeed = function(t) {
            this.cur_anim_speed = cr.abs(t), this.animForwards = t >= 0, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, l.prototype.SetAnimRepeatToFrame = function(t) {
            t = Math.floor(t), t < 0 && (t = 0), t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1), this.cur_anim_repeatto = t
        }, l.prototype.SetMirrored = function(t) {
            var e = cr.abs(this.width) * (0 === t ? -1 : 1);
            this.width !== e && (this.width = e, this.set_bbox_changed())
        }, l.prototype.SetFlipped = function(t) {
            var e = cr.abs(this.height) * (0 === t ? -1 : 1);
            this.height !== e && (this.height = e, this.set_bbox_changed())
        }, l.prototype.SetScale = function(t) {
            var e = this.curFrame,
                i = this.width < 0 ? -1 : 1,
                n = this.height < 0 ? -1 : 1,
                r = e.width * t * i,
                s = e.height * t * n;
            this.width === r && this.height === s || (this.width = r, this.height = s, this.set_bbox_changed())
        }, l.prototype.LoadURL = function(t, e, i) {
            var n = new Image,
                r = this,
                s = this.curFrame;
            n.onload = function() {
                return s.texture_img.src === n.src ? (r.runtime.glwrap && r.curFrame === s && (r.curWebGLTexture = s.webGL_texture), 0 === e && (r.width = n.width, r.height = n.height, r.set_bbox_changed()), r.runtime.redraw = !0, void r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r)) : (s.texture_img = n, s.offx = 0, s.offy = 0, s.width = n.width, s.height = n.height, s.spritesheeted = !1, s.datauri = "", s.pixelformat = 0, r.runtime.glwrap && (s.webGL_texture && r.runtime.glwrap.deleteTexture(s.webGL_texture), s.webGL_texture = r.runtime.glwrap.loadTexture(n, !1, r.runtime.linearSampling), r.curFrame === s && (r.curWebGLTexture = s.webGL_texture), r.type.updateAllCurrentTexture()), 0 === e && (r.width = n.width, r.height = n.height, r.set_bbox_changed()), r.runtime.redraw = !0, void r.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, r))
            }, "data:" !== t.substr(0, 5) && 0 === i && (n.crossOrigin = "anonymous"), this.runtime.setImageSrc(n, t)
        }, l.prototype.SetCollisions = function(t) {
            this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
        }, p.acts = new l, u.prototype.AnimationFrame = function(t) {
            t.set_int(this.cur_frame)
        }, u.prototype.AnimationFrameCount = function(t) {
            t.set_int(this.cur_animation.frames.length)
        }, u.prototype.AnimationName = function(t) {
            t.set_string(this.cur_animation.name)
        }, u.prototype.AnimationSpeed = function(t) {
            t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
        }, u.prototype.ImagePointX = function(t, e) {
            t.set_float(this.getImagePoint(e, !0))
        }, u.prototype.ImagePointY = function(t, e) {
            t.set_float(this.getImagePoint(e, !1))
        }, u.prototype.ImagePointCount = function(t) {
            t.set_int(this.curFrame.image_points.length)
        }, u.prototype.ImageWidth = function(t) {
            t.set_float(this.curFrame.width)
        }, u.prototype.ImageHeight = function(t) {
            t.set_float(this.curFrame.height)
        }, p.exps = new u
    }();
var jText = "";
cr.plugins_.SpriteFontPlus = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            return t.replace(/\s\s*$/, "")
        }

        function e(t, e) {
            return t.length ? t.pop() : new e
        }

        function i(t, e) {
            t.length < v && t.push(e)
        }

        function n(t, e, n) {
            if (n) {
                var r, s;
                for (r = 0, s = e.length; r < s; r++) i(t, e[r]);
                e.length = 0
            } else {
                var a;
                for (a in e) Object.prototype.hasOwnProperty.call(e, a) && (i(t, e[a]), delete e[a])
            }
        }

        function r(e, i, n) {
            var r, a = e.lines;
            n = t(n), i >= a.length && a.push(s()), r = a[i], r.text = n, r.width = e.measureWidth(n), e.textWidth = cr.max(e.textWidth, r.width)
        }

        function s() {
            return e(b, Object)
        }

        function a(t) {
            i(b, t)
        }

        function o(t) {
            n(b, t, !0)
        }

        function h(t, i, n, r, s, a) {
            void 0 === t[i] && (t[i] = e(w, Object)), t[i].x = n, t[i].y = r, t[i].w = s, t[i].h = a
        }

        function c(t) {
            n(w, t, !1)
        }

        function l(t, i, n, r, s, a) {
            void 0 === t[i] && (t[i] = e(x, cr.rect)), t[i].left = n, t[i].top = r, t[i].right = s, t[i].bottom = a
        }

        function u(t) {
            n(x, t, !1)
        }

        function p(t, e, i) {
            var n;
            n = t.tlx * e - t.tly * i, t.tly = t.tly * e + t.tlx * i, t.tlx = n, n = t.trx * e - t.try_ * i, t.try_ = t.try_ * e + t.trx * i, t.trx = n, n = t.blx * e - t.bly * i, t.bly = t.bly * e + t.blx * i, t.blx = n, n = t.brx * e - t.bry * i, t.bry = t.bry * e + t.brx * i, t.brx = n
        }

        function d() {}

        function f() {}

        function g() {}
        var m = cr.plugins_.SpriteFontPlus.prototype;
        m.onCreate = function() {}, m.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var y = m.Type.prototype;
        y.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.idtkLoadDisposed = !0, this.texture_img.src = this.texture_file, this.runtime.wait_for_textures.push(this.texture_img), this.webGL_texture = null)
        }, y.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, y.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat));
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
            }
        }, y.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, y.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, m.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var _ = m.Instance.prototype;
        _.onDestroy = function() {
            o(this.lines), c(this.clipList), u(this.clipUV), cr.wipe(this.characterWidthList)
        }, _.onCreate = function() {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.charWidthJSON = this.properties[12], this.spaceWidth = this.properties[13], console.log(this.charWidthJSON), jText = this.charWidthJSON, this.recycled ? (this.lines.length = 0, cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {});
            try {
                if (this.charWidthJSON)
                    if (this.charWidthJSON.indexOf('""c2array""') !== -1)
                        for (var t = jQuery.parseJSON(this.charWidthJSON.replace(/""/g, '"')), e = t.size[1], i = 0; i < e; i++)
                            for (var n = t.data[1][i][0], r = t.data[0][i][0], s = 0; s < n.length; s++) this.characterWidthList[n.charAt(s)] = r;
                    else
                        for (var t = jQuery.parseJSON(this.charWidthJSON), e = t.length, i = 0; i < e; i++)
                            for (var n = t[i][1], r = t[i][0], s = 0; s < n.length; s++) this.characterWidthList[n.charAt(s)] = r;
                this.spaceWidth !== -1 && (this.characterWidthList[" "] = this.spaceWidth)
            } catch (a) {
                window.console && window.console.log && window.console.log("SpriteFont+ Failure: " + a)
            }
            this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, _.saveToJSON = function() {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, _.loadFromJSON = function(t) {
            this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt;
            for (var e in t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };
        var v = 1e3,
            b = [],
            w = [],
            x = [];
        _.SplitSheet = function() {
            for (var t = this.texture_img, e = t.width, i = t.height, n = this.characterWidth, r = this.characterHeight, s = n / e, a = r / i, o = this.characterSet, c = Math.floor(e / n), u = Math.floor(i / r), p = 0; p < o.length && !(p >= c * u); p++) {
                var d = p % c,
                    f = Math.floor(p / c),
                    g = o.charAt(p);
                this.runtime.glwrap ? l(this.clipUV, g, d * s, f * a, (d + 1) * s, (f + 1) * a) : h(this.clipList, g, d * n, f * r, n, r)
            }
        };
        var S = [];
        m.TokeniseWords = function(t) {
            S.length = 0;
            for (var e, i = "", n = 0; n < t.length;)
                if (e = t.charAt(n), "\n" === e) i.length && (S.push(i), i = ""), S.push("\n"), ++n;
                else if (" " === e || "\t" === e || "-" === e) {
                do i += t.charAt(n), n++; while (n < t.length && (" " === t.charAt(n) || "\t" === t.charAt(n)));
                S.push(i), i = ""
            } else n < t.length && (i += e, n++);
            i.length && S.push(i)
        }, m.WordWrap = function(t) {
            var e = t.text,
                i = t.lines;
            if (!e || !e.length) return void o(i);
            var n = t.width;
            if (n <= 2) return void o(i);
            var r = t.characterWidth,
                a = t.characterScale,
                h = t.characterSpacing;
            if (e.length * (r * a + h) - h <= n && e.indexOf("\n") === -1) {
                var c = t.measureWidth(e);
                if (c <= n) return o(i), i.push(s()), i[0].text = e, i[0].width = c, t.textWidth = c, void(t.textHeight = t.characterHeight * a + t.lineHeight)
            }
            t.wrapbyword;
            this.WrapText(t), t.textHeight = i.length * (t.characterHeight * a + t.lineHeight)
        }, m.WrapText = function(e) {
            var i, n = e.wrapbyword,
                s = e.text,
                o = e.lines,
                h = e.width;
            n ? (this.TokeniseWords(s), i = S) : i = s;
            var c, l, u, p = "",
                d = 0,
                f = !1;
            for (u = 0; u < i.length; u++) "\n" !== i[u] ? (f = !1, c = p, p += i[u], l = e.measureWidth(t(p)), l > h && ("" === c ? (r(e, d, p), p = "", f = !0) : (r(e, d, c), p = i[u]), d++, n || " " !== p || (p = ""))) : (f === !0 ? f = !1 : (r(e, d, p), d++), p = "");
            for (t(p).length && (r(e, d, p), d++), u = d; u < o.length; u++) a(o[u]);
            o.length = d
        }, _.measureWidth = function(t) {
            for (var e = this.characterSpacing, i = t.length, n = 0, r = 0; r < i; r++) n += this.getCharacterWidth(t.charAt(r)) * this.characterScale + e;
            return n -= n > 0 ? e : 0
        }, _.getCharacterWidth = function(t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, _.rebuildText = function() {
            (this.text_changed || this.width !== this.lastwrapwidth) && (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        var T = 1e-5;
        _.draw = function(t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var n = this.x,
                    r = this.y;
                this.runtime.pixel_rounding && (n = n + .5 | 0, r = r + .5 | 0), t.save(), t.translate(n, r), t.rotate(this.angle);
                var s, a = this.halign,
                    o = this.valign,
                    h = this.characterScale,
                    c = this.characterHeight * h,
                    l = this.lineHeight,
                    u = this.characterSpacing,
                    p = this.lines,
                    d = this.textHeight,
                    f = o * cr.max(0, this.height - d),
                    g = -(this.hotspotX * this.width),
                    m = -(this.hotspotY * this.height);
                m += f;
                for (var y, _ = m, v = 0; v < p.length; v++) {
                    var b = p[v].text,
                        w = p[v].width;
                    s = a * cr.max(0, this.width - w), y = g + s, _ += l;
                    for (var x = 0; x < b.length; x++) {
                        var S = b.charAt(x),
                            A = this.clipList[S];
                        if (y + this.getCharacterWidth(S) * h > this.width + T) break;
                        void 0 !== A && t.drawImage(this.texture_img, A.x, A.y, A.w, A.h, Math.round(y), Math.round(_), A.w * h, A.h * h), y += this.getCharacterWidth(S) * h + u
                    }
                    if (_ += c, _ + c + l > this.height) break
                }
                t.restore()
            }
        };
        var A = new cr.quad;
        _.drawGL = function(t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), "" !== this.text) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    n = 0;
                this.runtime.pixel_rounding && (i = (this.x + .5 | 0) - this.x, n = (this.y + .5 | 0) - this.y);
                var r, s, a = this.angle,
                    o = this.halign,
                    h = this.valign,
                    c = this.characterScale,
                    l = this.characterHeight * c,
                    u = this.lineHeight,
                    d = this.characterSpacing,
                    f = this.lines,
                    g = this.textHeight;
                0 !== a && (r = Math.cos(a), s = Math.sin(a));
                for (var m, y, _ = h * cr.max(0, this.height - g), v = e.tlx + i, b = e.tly + n, w = _, x = 0; x < f.length; x++) {
                    var S = f[x].text,
                        O = f[x].width;
                    m = o * cr.max(0, this.width - O), y = m, w += u;
                    for (var k = 0; k < S.length; k++) {
                        var C = S.charAt(k),
                            E = this.clipUV[C];
                        if (y + this.getCharacterWidth(C) * c > this.width + T) break;
                        if (void 0 !== E) {
                            var P = this.characterWidth * c,
                                I = this.characterHeight * c;
                            A.tlx = y, A.tly = w, A.trx = y + P, A.try_ = w, A.blx = y, A.bly = w + I, A.brx = y + P, A.bry = w + I, 0 !== a && p(A, r, s), A.offset(v, b), t.quadTex(A.tlx, A.tly, A.trx, A.try_, A.brx, A.bry, A.blx, A.bly, E)
                        }
                        y += this.getCharacterWidth(C) * c + d
                    }
                    if (w += l, w + l + u > this.height) break
                }
            }
        }, d.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, m.cnds = new d, f.prototype.SetText = function(t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetScale = function(t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetCharacterSpacing = function(t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetLineHeight = function(t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, _.SetCharWidth = function(t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetCharacterWidth = function(t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, f.prototype.SetEffect = function(t) {
            this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, m.acts = new f, g.prototype.CharacterWidth = function(t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, g.prototype.CharacterHeight = function(t) {
            t.set_int(this.characterHeight)
        }, g.prototype.CharacterScale = function(t) {
            t.set_float(this.characterScale)
        }, g.prototype.CharacterSpacing = function(t) {
            t.set_int(this.characterSpacing)
        }, g.prototype.LineHeight = function(t) {
            t.set_int(this.lineHeight)
        }, g.prototype.Text = function(t) {
            t.set_string(this.text)
        }, g.prototype.TextWidth = function(t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, g.prototype.TextHeight = function(t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, m.exps = new g
    }(), cr.plugins_.Spritefont2 = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            return t.replace(/\s\s*$/, "")
        }

        function e(t, e) {
            return t.length ? t.pop() : new e
        }

        function i(t, e) {
            t.length < v && t.push(e)
        }

        function n(t, e, n) {
            if (n) {
                var r, s;
                for (r = 0, s = e.length; r < s; r++) i(t, e[r]);
                cr.clearArray(e)
            } else {
                var a;
                for (a in e) Object.prototype.hasOwnProperty.call(e, a) && (i(t, e[a]), delete e[a])
            }
        }

        function r(e, i, n) {
            var r, a = e.lines;
            n = t(n), i >= a.length && a.push(s()), r = a[i], r.text = n, r.width = e.measureWidth(n), e.textWidth = cr.max(e.textWidth, r.width)
        }

        function s() {
            return e(b, Object)
        }

        function a(t) {
            i(b, t)
        }

        function o(t) {
            n(b, t, !0)
        }

        function h(t, i, n, r, s, a) {
            void 0 === t[i] && (t[i] = e(w, Object)), t[i].x = n, t[i].y = r, t[i].w = s, t[i].h = a
        }

        function c(t) {
            n(w, t, !1)
        }

        function l(t, i, n, r, s, a) {
            void 0 === t[i] && (t[i] = e(x, cr.rect)), t[i].left = n, t[i].top = r, t[i].right = s, t[i].bottom = a
        }

        function u(t) {
            n(x, t, !1)
        }

        function p(t, e, i) {
            var n;
            n = t.tlx * e - t.tly * i, t.tly = t.tly * e + t.tlx * i, t.tlx = n, n = t.trx * e - t.try_ * i, t.try_ = t.try_ * e + t.trx * i, t.trx = n, n = t.blx * e - t.bly * i, t.bly = t.bly * e + t.blx * i, t.blx = n, n = t.brx * e - t.bry * i, t.bry = t.bry * e + t.brx * i, t.brx = n
        }

        function d() {}

        function f() {}

        function g() {}
        var m = cr.plugins_.Spritefont2.prototype;
        m.onCreate = function() {}, m.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var y = m.Type.prototype;
        y.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.webGL_texture = null)
        }, y.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, y.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat));
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
            }
        }, y.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, y.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, m.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var _ = m.Instance.prototype;
        _.onDestroy = function() {
            o(this.lines), c(this.clipList), u(this.clipUV), cr.wipe(this.characterWidthList)
        }, _.onCreate = function() {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.recycled ? (cr.clearArray(this.lines), cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {}), this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, _.saveToJSON = function() {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                ha: this.halign,
                va: this.valign,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, _.loadFromJSON = function(t) {
            this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, t.hasOwnProperty("ha") && (this.halign = t.ha), t.hasOwnProperty("va") && (this.valign = t.va);
            for (var e in t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };
        var v = 1e3,
            b = [],
            w = [],
            x = [];
        _.SplitSheet = function() {
            for (var t = this.texture_img, e = t.width, i = t.height, n = this.characterWidth, r = this.characterHeight, s = n / e, a = r / i, o = this.characterSet, c = Math.floor(e / n), u = Math.floor(i / r), p = 0; p < o.length && !(p >= c * u); p++) {
                var d = p % c,
                    f = Math.floor(p / c),
                    g = o.charAt(p);
                this.runtime.glwrap ? l(this.clipUV, g, d * s, f * a, (d + 1) * s, (f + 1) * a) : h(this.clipList, g, d * n, f * r, n, r)
            }
        };
        var S = [];
        m.TokeniseWords = function(t) {
            cr.clearArray(S);
            for (var e, i = "", n = 0; n < t.length;)
                if (e = t.charAt(n), "\n" === e) i.length && (S.push(i), i = ""), S.push("\n"), ++n;
                else if (" " === e || "\t" === e || "-" === e) {
                do i += t.charAt(n), n++; while (n < t.length && (" " === t.charAt(n) || "\t" === t.charAt(n)));
                S.push(i), i = ""
            } else n < t.length && (i += e, n++);
            i.length && S.push(i)
        }, m.WordWrap = function(t) {
            var e = t.text,
                i = t.lines;
            if (!e || !e.length) return void o(i);
            var n = t.width;
            if (n <= 2) return void o(i);
            var r = t.characterWidth,
                a = t.characterScale,
                h = t.characterSpacing;
            if (e.length * (r * a + h) - h <= n && e.indexOf("\n") === -1) {
                var c = t.measureWidth(e);
                if (c <= n) return o(i), i.push(s()), i[0].text = e, i[0].width = c, t.textWidth = c, void(t.textHeight = t.characterHeight * a + t.lineHeight)
            }
            t.wrapbyword;
            this.WrapText(t), t.textHeight = i.length * (t.characterHeight * a + t.lineHeight)
        }, m.WrapText = function(e) {
            var i, n = e.wrapbyword,
                s = e.text,
                o = e.lines,
                h = e.width;
            n ? (this.TokeniseWords(s), i = S) : i = s;
            var c, l, u, p = "",
                d = 0,
                f = !1;
            for (u = 0; u < i.length; u++) "\n" !== i[u] ? (f = !1, c = p, p += i[u], l = e.measureWidth(t(p)), l > h && ("" === c ? (r(e, d, p), p = "", f = !0) : (r(e, d, c), p = i[u]), d++, n || " " !== p || (p = ""))) : (f === !0 ? f = !1 : (r(e, d, p), d++), p = "");
            for (t(p).length && (r(e, d, p), d++), u = d; u < o.length; u++) a(o[u]);
            o.length = d
        }, _.measureWidth = function(t) {
            for (var e = this.characterSpacing, i = t.length, n = 0, r = 0; r < i; r++) n += this.getCharacterWidth(t.charAt(r)) * this.characterScale + e;
            return n -= n > 0 ? e : 0
        }, _.getCharacterWidth = function(t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, _.rebuildText = function() {
            (this.text_changed || this.width !== this.lastwrapwidth) && (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        var T = 1e-5;
        _.draw = function(t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var n = this.x,
                    r = this.y;
                this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r));
                var s = this.layer.viewLeft,
                    a = this.layer.viewTop,
                    o = this.layer.viewRight,
                    h = this.layer.viewBottom;
                t.save(), t.translate(n, r), t.rotate(this.angle);
                var c, l, u = this.angle,
                    p = this.halign,
                    d = this.valign,
                    f = this.characterScale,
                    g = this.characterHeight * f,
                    m = this.lineHeight,
                    y = this.characterSpacing,
                    _ = this.lines,
                    v = this.textHeight,
                    b = d * cr.max(0, this.height - v),
                    w = -(this.hotspotX * this.width),
                    x = -(this.hotspotY * this.height);
                x += b;
                for (var S, A, O, k = x, C = 0; C < _.length; C++) {
                    var E = _[C].text,
                        P = _[C].width;
                    if (l = p * cr.max(0, this.width - P), S = w + l, k += m, 0 === u && r + k + g < a) k += g;
                    else {
                        for (var I = 0; I < E.length; I++) {
                            var L = E.charAt(I);
                            c = this.getCharacterWidth(L);
                            var R = this.clipList[L];
                            if (0 === u && n + S + c * f + y < s) S += c * f + y;
                            else {
                                if (S + c * f > this.width + T) break;
                                if (void 0 !== R && (A = S, O = k, 0 === u && (A = Math.round(A), O = Math.round(O)), t.drawImage(this.texture_img, R.x, R.y, R.w, R.h, A, O, R.w * f, R.h * f)), S += c * f + y, 0 === u && n + S > o) break
                            }
                        }
                        if (k += g, 0 === u && (k + g + m > this.height || r + k > h)) break
                    }
                }
                t.restore()
            }
        };
        var A = new cr.quad;
        _.drawGL = function(t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), this.text && (this.rebuildText(), !(this.height < this.characterHeight * this.characterScale + this.lineHeight))) {
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    n = 0;
                this.runtime.pixel_rounding && (i = Math.round(this.x) - this.x, n = Math.round(this.y) - this.y);
                var r, s, a, o = this.layer.viewLeft,
                    h = this.layer.viewTop,
                    c = this.layer.viewRight,
                    l = this.layer.viewBottom,
                    u = this.angle,
                    d = this.halign,
                    f = this.valign,
                    g = this.characterScale,
                    m = this.characterHeight * g,
                    y = this.lineHeight,
                    _ = this.characterSpacing,
                    v = this.lines,
                    b = this.textHeight;
                0 !== u && (s = Math.cos(u), a = Math.sin(u));
                for (var w, x, S, O, k = f * cr.max(0, this.height - b), C = e.tlx + i, E = e.tly + n, P = k, I = 0; I < v.length; I++) {
                    var L = v[I].text,
                        R = v[I].width;
                    if (w = d * cr.max(0, this.width - R), x = w, P += y, 0 === u && E + P + m < h) P += m;
                    else {
                        for (var F = 0; F < L.length; F++) {
                            var j = L.charAt(F);
                            r = this.getCharacterWidth(j);
                            var N = this.clipUV[j];
                            if (0 === u && C + x + r * g + _ < o) x += r * g + _;
                            else {
                                if (x + r * g > this.width + T) break;
                                if (void 0 !== N) {
                                    var B = this.characterWidth * g,
                                        M = this.characterHeight * g;
                                    S = x, O = P, 0 === u && (S = Math.round(S), O = Math.round(O)), A.tlx = S, A.tly = O, A.trx = S + B, A.try_ = O, A.blx = S, A.bly = O + M, A.brx = S + B, A.bry = O + M, 0 !== u && p(A, s, a), A.offset(C, E), t.quadTex(A.tlx, A.tly, A.trx, A.try_, A.brx, A.bry, A.blx, A.bly, N)
                                }
                                if (x += r * g + _, 0 === u && C + x > c) break
                            }
                        }
                        if (P += m, 0 === u && (P + m + y > this.height || E + P > l)) break
                    }
                }
            }
        }, d.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, m.cnds = new d, f.prototype.SetText = function(t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetScale = function(t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetCharacterSpacing = function(t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetLineHeight = function(t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, _.SetCharWidth = function(t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetCharacterWidth = function(t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, f.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, f.prototype.SetHAlign = function(t) {
            this.halign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, f.prototype.SetVAlign = function(t) {
            this.valign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, m.acts = new f, g.prototype.CharacterWidth = function(t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, g.prototype.CharacterHeight = function(t) {
            t.set_int(this.characterHeight)
        }, g.prototype.CharacterScale = function(t) {
            t.set_float(this.characterScale)
        }, g.prototype.CharacterSpacing = function(t) {
            t.set_int(this.characterSpacing)
        }, g.prototype.LineHeight = function(t) {
            t.set_int(this.lineHeight)
        }, g.prototype.Text = function(t) {
            t.set_string(this.text)
        }, g.prototype.TextWidth = function(t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, g.prototype.TextHeight = function(t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, m.exps = new g
    }(), cr.plugins_.Spriter = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            if (0 === this.datauri.length) {
                var t = document.createElement("canvas");
                t.width = this.width, t.height = this.height;
                var e = t.getContext("2d");
                this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
            }
            return this.datauri
        }

        function e() {
            this.name = "", this.varDefs = []
        }

        function i() {
            this.name = "", this.animations = [], this.varDefs = []
        }

        function n() {
            this.name = "", this.length = 1, this.looping = "true", this.loopTo = 0, this.mainlineKeys = [], this.timelines = [], this.soundlines = [], this.eventlines = [], this.meta = new F, this.cur_frame = 0, this.localTime = 0, this.l = -25, this.t = -25, this.r = 25, this.b = 25
        }

        function r() {
            this.keys = [], this.name = "", this.c2Object = 0, this.object = 0, this.objectType = "sprite", this.currentObjectState = {}, this.currentMappedState = {}, this.lastTimeSoundCheck = 0, this.meta = new F
        }

        function s() {
            this.bones = [], this.objects = [], this.time = 0, this.spin = 1, this.curveType = "linear", this.c1 = 0, this.c2 = 0, this.c3 = 0, this.c4 = 0
        }

        function a(t, e, i) {
            this.c2Object = t, this.objectName = e, this.setType = i
        }

        function o(t, e, i) {
            return i > e ? e : i < t ? t : i
        }

        function h(t, e) {
            t.hasOwnProperty("time") && void 0 !== e.time && (e.time = t.time), t.hasOwnProperty("spin") && void 0 !== e.spin && (e.spin = t.spin), t.hasOwnProperty("curve_type") && void 0 !== e.curveType && (e.curveType = t.curve_type), t.hasOwnProperty("c1") && void 0 !== e.c1 && (e.c1 = t.c1), t.hasOwnProperty("c2") && void 0 !== e.c2 && (e.c2 = t.c2), t.hasOwnProperty("c3") && void 0 !== e.c3 && (e.c3 = t.c3), t.hasOwnProperty("c4") && void 0 !== e.c4 && (e.c4 = t.c4)
        }

        function c() {
            this.tags = [], this.time = 0
        }

        function l() {
            this.val = 0, this.time = 0, this.spin = 1, this.curveType = "linear", this.c1 = 0, this.c2 = 0, this.c3 = 0, this.c4 = 0
        }

        function u() {
            this.type = "sprite", this.x = 0, this.y = 0, this.angle = 0, this.a = 1, this.xScale = 1, this.yScale = 1, this.pivotX = 0, this.pivotY = 0, this.entity = 0, this.animation = "", this.t = 0, this.defaultPivot = !1, this.frame = 0, this.storedFrame = 0
        }

        function p() {
            this.type = "sound", this.name = "", this.trigger = !0, this.panning = 0, this.volume = 1
        }

        function d() {
            this.time = 0
        }

        function f(t) {
            if (t) {
                var e = new u;
                return e.type = t.type, e.x = t.x, e.y = t.y, e.angle = t.angle, e.a = t.a, e.xScale = t.xScale, e.yScale = t.yScale, e.pivotX = t.pivotX, e.pivotY = t.pivotY, e.entity = t.entity, e.animation = t.animation, e.t = t.t, e.defaultPivot = t.defaultPivot, e.frame = t.frame, e.storedFrame = e.storedFrame, e
            }
            return null
        }

        function g(t, e, i, n) {
            return ((t * n + e) * n + i) * n
        }

        function m(t, e, i, n) {
            return (3 * t * n + 2 * e) * n + i
        }

        function y(t) {
            return 1 / (200 * t)
        }

        function _(t, e, i, n, r, s, a, o) {
            return g(n, r, s, b(t, e, i, a, o))
        }

        function v(t) {
            return t >= 0 ? t : 0 - t
        }

        function b(t, e, i, n, r) {
            var s, a, o, h, c, l;
            for (o = n, l = 0; l < 8; l++) {
                if (h = g(t, e, i, o) - n, v(h) < r) return o;
                if (c = m(t, e, i, o), v(c) < 1e-6) break;
                o -= h / c
            }
            if (s = 0, a = 1, o = n, o < s) return s;
            if (o > a) return a;
            for (; s < a;) {
                if (h = g(t, e, i, o), v(h - n) < r) return o;
                n > h ? s = o : a = o, o = .5 * (a - s) + s
            }
            return o
        }

        function w(t, e, i, n, r, s) {
            var a = 0,
                o = 0,
                h = 0,
                c = 0,
                l = 0,
                u = 0;
            return h = 3 * e, o = 3 * (n - e) - h, a = 1 - h - o, u = 3 * i, l = 3 * (r - i) - u, c = 1 - u - l, _(a, o, h, c, l, u, t, y(s))
        }

        function x(t, e, i) {
            return t === e ? 0 : (i - t) / (e - t)
        }

        function S(t, e, i, n) {
            return cr.lerp(cr.lerp(t, e, n), cr.lerp(e, i, n), n)
        }

        function T(t, e, i, n, r) {
            return cr.lerp(S(t, e, i, r), S(e, i, n, r), r)
        }

        function A(t, e, i, n, r, s) {
            return cr.lerp(T(t, e, i, n, s), T(e, i, n, r, s), s)
        }

        function O(t, e, i, n, r, s, a) {
            return cr.lerp(A(t, e, i, n, r, a), A(e, i, n, r, s, a), a)
        }

        function k(t, e) {
            switch (t.curveType) {
                case "linear":
                    return e;
                case "quadratic":
                    return S(0, t.c1, 1, e);
                case "cubic":
                    return T(0, t.c1, t.c2, 1, e);
                case "quartic":
                    return A(0, t.c1, t.c2, t.c3, 1, e);
                case "quintic":
                    return O(t.c1, t.c2, t.c3, t.c4, e);
                case "bezier":
                    return w(e, t.c1, t.c2, t.c3, t.c4, 1);
                case "instant":
                    return e >= 1 ? 1 : 0
            }
            return 0
        }

        function C(t, e, i, n, r, s) {
            r = "undefined" != typeof r ? r : 1, s = "undefined" != typeof s ? s : 1;
            var a = new u;
            return a.type = t.type, a.x = cr.lerp(t.x, e.x, i), a.y = cr.lerp(t.y, e.y, i), a.angle = D(t.angle, e.angle, i, n), a.a = cr.lerp(t.a, e.a, i), a.xScale = cr.lerp(t.xScale, e.xScale, i), a.yScale = cr.lerp(t.yScale, e.yScale, i), a.pivotX = t.pivotX, a.pivotY = t.pivotY, a.defaultPivot = t.defaultPivot, a.frame = t.frame, a.entity = t.entity, a.animation = t.animation, a.t = cr.lerp(t.t, e.t, i), a.storedFrame = t.storedFrame, a
        }

        function E(t, e, i) {
            var n = new p;
            return n.trigger = t.trigger, n.volume = cr.lerp(t.volume, e.volume, i), n.panning = cr.lerp(t.panning, e.panning, i), n.name = t.name, n
        }

        function P() {
            this.type = "reference", this.timeline = 0, this.key = 0, this.parent = -1
        }

        function I() {
            this.files = []
        }

        function L() {
            this.name = "", this.type = "", this.def = ""
        }

        function R() {
            this.keys = [], this.lastTagIndex = 0, this.currentTags = []
        }

        function F() {
            this.varlines = [], this.tagline = new R
        }

        function j() {
            this.varDef = {}, this.defIndex = 0, this.keys = [], this.lastTagIndex = 0, this.currentVal = 0
        }

        function N() {
            this.name = "", this.keys = [], this.meta = new F
        }

        function B() {
            this.fileName = "", this.pivotX = 0, this.pivotY = 0, this.w = 1, this.h = 1, this.atlasX = 0, this.atlasY = 0, this.atlasXOff = 0, this.atlasYOff = 0, this.atlasW = 0, this.atlasH = 0, this.atlasRotated = !1
        }

        function M(t, e, i) {
            return i && void 0 !== i.appliedMap[e] && (i.appliedMap[e] === -1 ? (t && (t.visible = !1), e = -1) : e = i.appliedMap[e]), t && (t.changeAnimFrame = e, t.isTicking || (t.runtime.tickMe(t), t.isTicking = !0), t.inAnimTrigger || t.doChangeAnimFrame()), e
        }

        function D(t, e, i, n) {
            if (0 === n) return t;
            var r = cr.angleDiff(t, e);
            return n == -1 ? t + r * i : t - r * i
        }

        function W(t, e) {
            for (var i = 0; i < e.length; i++)
                if (e[i] == t) return i;
            return -1
        }

        function V(t, e) {
            if (t === e) return 0;
            for (var i = 3.141592653589793, n = 2 * i; e - t < -i;) t -= n;
            for (; e - t > i;) e -= n;
            return e > t ? -1 : 1
        }

        function G(t, e, i) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r && (r.name === t || r.entityName === i && r.originalName === t)) return n
            }
            return -1
        }

        function z(t, e, i) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r && (r.name === t || r.entityName === i && r.originalName === t)) return r
            }
        }

        function U(t, e, i, n, r) {
            this.name = e, this.fullTypeName = t + "_" + e, this.spriterType = "sprite", this.frames = [], this.pivots = [], this.imageSizes = [], this.atlasInfos = [], this.charMaps = [], this.width = 0, this.height = 0, this.entityName = i, this.originalName = n, this.varDefs = r
        }

        function X() {}

        function Y() {}

        function H() {}
        var q = cr.plugins_.Spriter.prototype;
        q.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var J = q.Type.prototype;
        J.onCreate = function() {
            if (this.scmlFiles = {}, this.scmlReserved = {}, this.scmlInstsToNotify = {}, this.objectArrays = [], this.boneWidthArrays = [], !this.is_family) {
                var e, i, n, r, s, a, o, h, c, l;
                if (this.all_frames = [], this.has_loaded_textures = !1, this.animations)
                    for (e = 0, i = this.animations.length; e < i; e++) {
                        for (s = this.animations[e], o = {}, o.name = s[0], o.speed = s[1], o.loop = s[2], o.repeatcount = s[3], o.repeatto = s[4], o.pingpong = s[5], o.sid = s[6], o.frames = [], n = 0, r = s[7].length; n < r; n++) a = s[7][n], h = {}, h.texture_file = a[0], h.texture_filesize = a[1], h.offx = a[2], h.offy = a[3], h.width = a[4], h.height = a[5], h.duration = a[6], h.hotspotX = a[7], h.hotspotY = a[8], h.image_points = a[9], h.poly_pts = a[10], h.pixelformat = a[11], h.spritesheeted = 0 !== h.width, h.datauri = "", h.getDataUri = t, l = {}, l.left = 0, l.top = 0, l.right = 1, l.bottom = 1, h.sheetTex = l, h.webGL_texture = null, c = this.runtime.findWaitingTexture(a[0]), c ? h.texture_img = c : (h.texture_img = new Image, h.texture_img.cr_src = a[0], h.texture_img.cr_filesize = a[1], h.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(h.texture_img, a[0])), cr.seal(h), o.frames.push(h), this.all_frames.push(h);
                        cr.seal(o), this.animations[e] = o
                    }
            }
        }, q.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.lastData = "", this.progress = 0, this.entity = 0, this.entities = [], this.currentSpriterTime = 0, this.currentAdjustedTime = 0, this.secondTime = 0, this.start_time = cr.performance_now(), this.lastKnownTime = this.getNowTime(), this.drawSelf = !1, this.ignoreGlobalTimeScale = !1
        };
        var K = q.Instance.prototype;
        K.setEntitiesToOtherEntities = function(t) {
            for (var e = t, a = 0, o = 0; o < e.length; o++) {
                var h = e[o];
                a = h;
                var c = new i;
                a = h, c.name = a.name;
                for (var l = h.animations, u = 0; u < l.length; u++) {
                    var p = l[u];
                    a = p;
                    var d = new n;
                    d.name = a.name, d.length = a.length, d.looping = a.looping, d.loopTo = a.loopTo, d.l = a.l, d.t = a.t, d.r = a.r, d.b = a.b, d.meta = a.meta;
                    for (var g = p.mainlineKeys, m = new r, y = g, _ = 0; _ < y.length; _++) {
                        var v = y[_],
                            b = new s;
                        a = v, b.time = a.time, b.curveType = a.curveType, b.c1 = a.c1, b.c2 = a.c2, b.c3 = a.c3, b.c4 = a.c4;
                        var w = v.bones;
                        if (w)
                            for (var x = 0; x < w.length; x++) {
                                var S = w[x];
                                a = S;
                                var T = new P;
                                T.timeline = a.timeline, T.key = a.key, T.parent = a.parent, b.bones.push(T)
                            }
                        var A = v.objects;
                        if (A)
                            for (var x = 0; x < A.length; x++) {
                                var O = A[x];
                                a = O;
                                var k = new P;
                                k.timeline = a.timeline, k.key = a.key, k.parent = a.parent, b.objects.push(k)
                            }
                        d.mainlineKeys.push(b)
                    }
                    d.mainline = m;
                    var C = p.timelines;
                    if (C)
                        for (var E = 0; E < C.length; E++) {
                            var I = C[E],
                                L = new r;
                            L.objectType = I.objectType;
                            var R = I.name;
                            L.name = R, L.meta = I.meta;
                            var y = I.keys;
                            if (y)
                                for (var _ = 0; _ < y.length; _++) {
                                    var v = y[_],
                                        b = new s;
                                    b.time = v.time, b.spin = v.spin, b.curveType = v.curveType, b.c1 = v.c1, b.c2 = v.c2, b.c3 = v.c3, b.c4 = v.c4;
                                    var F = v.objects;
                                    if (F)
                                        for (var x = 0; x < F.length; x++) {
                                            var j = F[x],
                                                N = f(j);
                                            b.objects.push(N)
                                        }
                                    var B = v.bones;
                                    if (B)
                                        for (var x = 0; x < B.length; x++) {
                                            var M = B[x],
                                                D = f(M);
                                            b.bones.push(D)
                                        }
                                    L.keys.push(b)
                                }
                            L.c2Object = this.c2ObjectArray[G(R, this.objectArray, c.name)], L.object = I.object, d.timelines.push(L)
                        }
                    if (C = p.soundlines)
                        for (var E = 0; E < C.length; E++) {
                            var I = C[E],
                                L = new r;
                            L.objectType = I.objectType;
                            var R = I.name;
                            L.name = R, L.meta = I.meta;
                            var y = I.keys;
                            if (y)
                                for (var _ = 0; _ < y.length; _++) {
                                    var v = y[_],
                                        b = new s;
                                    I = v, b.time = I.time, b.curveType = I.curveType, b.c1 = I.c1, b.c2 = I.c2, b.c3 = I.c3, b.c4 = I.c4;
                                    var F = v.objects;
                                    if (F)
                                        for (var x = 0; x < F.length; x++) {
                                            var j = F[x],
                                                N = this.cloneSound(j);
                                            b.objects.push(N)
                                        }
                                    L.keys.push(b)
                                }
                            d.soundlines.push(L)
                        }
                    if (C = p.eventlines)
                        for (var E = 0; E < C.length; E++) {
                            var I = C[E],
                                L = new r;
                            L.objectType = I.objectType;
                            var R = I.name;
                            L.name = R, L.meta = I.meta;
                            var y = I.keys;
                            if (y)
                                for (var _ = 0; _ < y.length; _++) {
                                    var v = y[_],
                                        b = new s;
                                    I = v, b.time = I.time, L.keys.push(b)
                                }
                            d.eventlines.push(L)
                        }
                    c.animations.push(d)
                }
                this.entities.push(c), this.entity && this.properties[1] !== c.name || (this.entity = c)
            }
        }, K.forceCharacterFromPreload = function() {
            this.getCharacterFromPreload()
        }, K.getCharacterFromPreload = function() {
            return this.type.scmlFiles.hasOwnProperty(this.properties[0]) ? (this.setEntitiesToOtherEntities(this.type.scmlFiles[this.properties[0]]), this.type.objectArrays.hasOwnProperty(this.properties[0]) && (this.objectArray = this.type.objectArrays[this.properties[0]], this.boneWidthArray = this.type.boneWidthArrays[this.properties[0]]), this.c2ObjectArray = this.generateTestC2ObjectArray(this.objectArray), this.startingEntName ? this.setEntTo(this.startingEntName) : this.setEntTo(this.properties[1]), this.associateAllTypes(), this.initDOMtoPairedObjects(), this.startingAnimName ? this.setAnimTo(this.startingAnimName) : this.setAnimTo(this.properties[2]), !this.currentAnimation && this.entity && this.entity.animations.length && this.setAnimTo(this.entity.animations[0].name), this.startingLoopType && this.currentAnimation && (this.currentAnimation.looping = startingLoopType), this.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.readyForSetup, this), !0) : !!this.type.scmlReserved.hasOwnProperty(this.properties[0]) && (this.type.scmlInstsToNotify[this.properties[0]] || (this.type.scmlInstsToNotify[this.properties[0]] = []), this.type.scmlInstsToNotify[this.properties[0]].push(this), !0)
        };
        var Z = 0,
            Q = 1,
            $ = 2,
            tt = "0",
            et = "1",
            it = "2",
            nt = "3",
            rt = "4",
            st = "5",
            at = "6",
            ot = "7",
            ht = "8",
            ct = "9",
            lt = "10";
        K.onCreate = function() {
            if (this.nodeStack = [], this.isDestroyed = !1, this.folders = [], this.tagDefs = [], this.currentAnimation = "", this.secondAnimation = "", this.animBlend = 0, this.blendStartTime = 0, this.blendEndTime = 0, this.blendPoseTime = 0, this.lastKnownInstDataAsObj = null, this.lastZ = null, this.c2ObjectArray = [], this.objectArray = [], this.boneWidthArray = {}, this.boneIkOverrides = {}, this.objectOverrides = {}, this.objInfoVarDefs = [], this.animPlaying = !0, this.speedRatio = 1, this.scaleRatio = this.width / 50, this.subEntScaleX = 1, this.subEntScaleY = 1, this.xFlip = !1, this.yFlip = !1, this.playTo = -1, this.changeToStartFrom = 0, this.runtime.tick2Me(this), this.startingEntName = null, this.startingAnimName = null, this.startingLoopType = null, this.leftBuffer = 0, this.rightBuffer = 0, this.topBuffer = 0, this.bottomBuffer = 0, this.pauseWhenOutsideBuffer = Z, this.soundToTrigger = "", this.soundLineToTrigger = {}, this.eventToTrigger = "", this.eventLineToTrigger = {}, this.lastFoundObject = "", this.objectsToSet = [], this.drawSelf = 1 == this.properties[4], this.properties[0] = this.properties[0].toLowerCase(), this.properties[0].lastIndexOf(".scml") > -1 && (this.properties[0] = this.properties[0].replace(".scml", ".scon")), !this.getCharacterFromPreload() && this.properties[0].length > 0) {
                var t = this,
                    e = null,
                    i = function() {},
                    n = function(t) {};
                this.type.scmlReserved[this.properties[0]] = this, e = new XMLHttpRequest;
                this.runtime.isNodeWebkit;
                e.onreadystatechange = function() {
                    4 !== e.readyState || t.isDestroyed || e.status >= 400 || (e.responseText.replace(/\r\n/g, "\n"), t.doRequest(JSON.parse(e.responseText)), t.startingEntName && t.setEntTo(t.startingEntName), t.startingAnimName && t.setAnimTo(t.startingAnimName), t.startingLoopType && t.currentAnimation && (t.currentAnimation.looping = t.startingLoopType))
                }, e.onerror = i, e.ontimeout = i, e.onabort = i, e.onprogress = n, e.open("GET", this.properties[0]), e.send()
            }
            this.force = !1, this.inAnimTrigger = !1, this.changeAnimTo = null, this.opacity = o(0, 1, this.properties[3] / 100)
        }, K.onDestroy = function() {
            this.isDestroyed = !0
        }, K.getVarDefsByName = function(t) {
            for (var e = 0; e < this.objInfoVarDefs.length; e++) {
                var i = this.objInfoVarDefs[e];
                if (i && i.name === t) return i.varDefs
            }
        }, K.getVarDefByName = function(t, e) {
            var i = this.getVarDefsByName(t);
            if (i)
                for (var n = 0; n < objInfo.varDefs.length; n++) {
                    var r = objInfo.varDefs[n];
                    if (r && r.name == e) return r
                }
        }, K.setTimelinesFromJson = function(t, e, i) {
            if (t)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n],
                        o = new r;
                    a.hasOwnProperty("object_type") && (o.objectType = a.object_type);
                    var c = a.name;
                    o.name = c;
                    var l = a.key;
                    if (l)
                        for (var u = 0; u < l.length; u++) {
                            var p = l[u],
                                d = new s;
                            h(p, d);
                            var f = p.object;
                            if (f) {
                                var g = f,
                                    m = this.objectFromTag(g, this.objectArray, c, o.objectType, i.name);
                                d.objects.push(m)
                            }
                            var y = p.bone;
                            if (y) {
                                var _ = y,
                                    v = this.objectFromTag(_, this.objectArray, c, o.objectType, i.name);
                                d.bones.push(v)
                            }
                            o.keys.push(d)
                        }
                    o.c2Object = this.c2ObjectArray[G(c, this.objectArray, i.name)];
                    var b = z(c, this.objectArray, i.name),
                        w = {};
                    b && (w = b.varDefs), o.object = b, this.setMetaDataFromJson(a.meta, o.meta, w), e.push(o)
                }
        }, K.setSoundlinesFromJson = function(t, e, i) {
            if (t)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n],
                        o = new r;
                    o.objectType = "sound";
                    var c = a.name;
                    o.name = c;
                    var l = a.key;
                    if (l)
                        for (var u = 0; u < l.length; u++) {
                            var p = l[u],
                                d = new s;
                            h(p, d);
                            var f = p.object;
                            if (f) {
                                var g = f,
                                    m = this.soundFromTag(g);
                                d.objects.push(m)
                            }
                            o.keys.push(d)
                        }
                    z(o.name, this.objectArray, i);
                    this.setMetaDataFromJson(a.meta, o.meta, this.getVarDefsByName(o.name)), e.push(o)
                }
        }, K.setVarlinesFromJson = function(t, e, i) {
            if (t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        s = new j;
                    s.defIndex = r.def, s.def = i[s.defIndex];
                    var a = r.key;
                    if (a)
                        for (var o = 0; o < a.length; o++) {
                            var c = a[o],
                                u = new l;
                            h(c, u), u.val = c.val, s.keys.push(u)
                        }
                    e.push(s)
                }
        }, K.setEventlinesFromJson = function(t, e, i) {
            if (t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        s = new N;
                    s.name = r.name;
                    var a = r.key;
                    if (a)
                        for (var o = 0; o < a.length; o++) {
                            var c = a[o],
                                l = new d;
                            h(c, l), s.keys.push(l)
                        }
                    this.setMetaDataFromJson(r.meta, s.meta, this.getVarDefsByName(s.name)), e.push(s)
                }
        }, K.setTaglinesFromJson = function(t, e) {
            if (t) {
                var i = t.key;
                if (i)
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n],
                            s = new c;
                        h(r, s);
                        var a = r.tag,
                            o = s.tags;
                        if (a)
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                u && o.push(this.tagDefs[u.t])
                            }
                        e.keys.push(s)
                    }
            }
        }, K.setMetaDataFromJson = function(t, e, i) {
            if (t) {
                var n = t.tagline;
                n && this.setTaglinesFromJson(n, e.tagline), n = t.valline, n && this.setVarlinesFromJson(n, e.varlines, i)
            }
        }, K.isOutsideViewportBox = function() {
            var t = this.layer;
            if (t) {
                if (this.x < t.viewLeft - this.leftBuffer) return !0;
                if (this.x > t.viewRight + this.rightBuffer) return !0;
                if (this.y < t.viewTop - this.topBuffer) return !0;
                if (this.y > t.viewBottom + this.bottomBuffer) return !0
            }
            return !1
        }, K.MoveToLayer = function(t, e) {
            e && e != t.layer && (cr.arrayRemove(t.layer.instances, t.get_zindex()), t.layer.setZIndicesStaleFrom(0), t.layer = e, t.zindex = e.instances.length, e.instances.push(t), t.runtime.redraw = !0)
        }, K.animationFinish = function(t) {
            this.animTriggerName = this.currentAnimation.name;
            this.inAnimTrigger;
            this.inAnimTrigger === !1 && (this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1)
        }, K.clearAnimationState = function() {
            var t = this.currentAnimation;
            if (t)
                for (var e = 0; e < t.timelines.length; e++) t.timelines[e].currentObjectState = {}
        }, K.getNowTime = function() {
            return (cr.performance_now() - this.start_time) / 1e3
        }, K.doAnimChange = function() {
            if (this.currentAnimation) var t = this.currentSpriterTime / this.currentAnimation.length;
            var e = this.changeToStartFrom;
            e < 3 && (this.currentAnimation = this.changeAnimTo, this.changeAnimTo = null, 0 === e ? (this.speedRatio > 0 ? this.currentSpriterTime = 0 : this.currentSpriterTime = this.currentAnimation.length, this.lastKnownTime = this.getNowTime()) : 2 == e && (this.currentSpriterTime = this.currentAnimation.length * t, this.lastKnownTime = this.getNowTime()), this.width = (this.currentAnimation.r - this.currentAnimation.l) * this.scaleRatio, this.height = (this.currentAnimation.b - this.currentAnimation.t) * this.scaleRatio, this.hotspotX = -(this.xFlip ? -this.currentAnimation.r : this.currentAnimation.l) / this.width * this.scaleRatio, this.hotspotY = -(this.yFlip ? -this["this"].currentAnimation.b : this.currentAnimation.t) / this.height * this.scaleRatio, this.set_bbox_changed())
        }, K.endBlendAndSwap = function() {
            this.secondAnimation && (this.blendEndTime = 0, this.blendStartTime = 0, this.animBlend = 0, this.blendPoseTime = 0, this.changeToStartFrom === pt && (this.currentSpriterTime = 0), this.currentSpriterTime = this.secondAnimation.localTime, this.changeAnimTo = null, this.currentAnimation = this.secondAnimation, this.secondAnimation = null, this.changeToStartFrom = 1)
        }, K.tickCurrentAnimationTime = function() {
            var t = this.lastKnownTime,
                e = this.getNowTime();
            this.lastKnownTime = e;
            var i = this.currentSpriterTime,
                n = this.ignoreGlobalTimeScale ? 1 : this.runtime.timescale,
                r = this.currentAnimation;
            this.my_timescale !== -1 && (n = this.my_timescale), this.animPlaying && (this.currentSpriterTime += 1e3 * (this.getNowTime() - t) * this.speedRatio * n);
            var s = this.playTo,
                a = !1;
            for (s >= 0 ? this.animPlaying && (i - s) * (this.currentSpriterTime - s) < 0 && (this.animPlaying = !1, this.currentSpriterTime = this.playTo, this.playTo = -1, a = !0) : this.speedRatio >= 0 ? this.currentSpriterTime >= r.length && (this.changeToStartFrom === pt && this.secondAnimation && this.blendEndTime > 0 || ("false" == r.looping && (this.currentSpriterTime = r.length, this.animPlaying = !1), a = !0)) : this.speedRatio < 0 && this.currentSpriterTime < 0 && (this.changeToStartFrom === pt && this.secondAnimation && this.blendEndTime > 0 || ("false" == r.looping && (this.currentSpriterTime = 0, this.animPlaying = !1), a = !0)), r = this.currentAnimation; this.currentSpriterTime < 0;) this.currentSpriterTime += r.length;
            this.currentSpriterTime !== r.length && (this.currentSpriterTime %= r.length), this.secondAnimation && (this.changeToStartFrom === pt ? this.secondAnimation.localTime = 0 : this.secondAnimation.localTime = cr.lerp(0, this.secondAnimation.length, x(0, this.currentAnimation.length, this.currentSpriterTime)));
            var o = this.blendEndTime;
            return o > 0 && (o <= e ? this.endBlendAndSwap() : this.animBlend = x(this.blendStartTime, o, this.lastKnownTime)), a
        }, K.setMainlineKeyByTime = function(t) {
            if (t = "undefined" != typeof t ? t : this.currentAnimation) {
                var e = 0;
                e = t === this.currentAnimation ? this.changeToStartFrom === pt ? this.blendPoseTime : this.currentSpriterTime : t.localTime;
                var i = t.mainlineKeys;
                t.cur_frame = i.length;
                for (var n = t.length, r = 1; r < i.length; r++)
                    if (e < i[r].time) {
                        n = i[r].time, t.cur_frame = r - 1;
                        break
                    }
                var s = 0;
                t === this.currentAnimation && (this.currentAdjustedTime = e), t.cur_frame < 0 ? t.cur_frame = 0 : t.cur_frame >= t.mainlineKeys.length && (t.cur_frame = t.mainlineKeys.length - 1);
                var a = i[t.cur_frame];
                if (a)
                    if (s = a.time, t === this.currentAnimation) {
                        var o = x(s, n, this.currentSpriterTime);
                        this.currentAdjustedTime = cr.lerp(s, n, k(a, o))
                    } else {
                        var o = x(s, n, t.localTime);
                        this.changeToStartFrom === pt ? t.localTime = 0 : t.localTime = cr.lerp(s, n, k(a, o))
                    }
            }
        }, K.doSecondAnimation = function() {
            return 0 !== this.animBlend && this.secondAnimation
        }, K.tweenBone = function(t, e, i, n, r, s, a, o) {
            var h, c = null,
                l = null,
                u = t.parent;
            if ("reference" == t.type) {
                var p = i.timelines[t.timeline],
                    d = p.name;
                h = t.timeline;
                var g = p.keys[t.key],
                    m = t.key;
                x = g.time;
                var l = null,
                    y = p.keys.length;
                t = g.bones[0], y > 1 && (m + 1 >= y && "true" == i.looping ? (l = p.keys[0], a = l.time, s > x && (a += i.length), c = l.bones[0]) : m + 1 < y && (l = p.keys[m + 1], a = l.time, c = l.bones[0]));
                var _ = 1 == this.xFlip ? -1 : 1,
                    v = 1 == this.yFlip ? -1 : 1,
                    b = 1,
                    w = "";
                if (c && "instant" !== g.curveType) {
                    var x = g.time,
                        S = 0;
                    s < x && (x -= i.length), a > x && (S = (s - x) / (a - x)), S = k(g, S), e[r] = C(t, c, S, g.spin)
                } else e[r] = f(t); if (p.currentMappedState = f(e[r]), i === this.currentAnimation && 0 !== this.animBlend && this.secondAnimation) {
                    var T = this.timelineFromName(p.name, this.secondAnimation);
                    if (T) {
                        var A = T.currentObjectState;
                        if (A) {
                            var O = e[r];
                            e[r] = C(O, A, this.animBlend, V(O.angle, A.angle))
                        }
                    }
                }
                u > -1 ? (i === this.currentAnimation && (b = e[u].xScale * e[u].yScale), w = e[u]) : i === this.currentAnimation && (e[r].x *= _ * this.scaleRatio, e[r].y *= v * this.scaleRatio, e[r].xScale *= _ * this.scaleRatio, e[r].yScale *= v * this.scaleRatio, w = this.objFromInst(this), w.xScale *= this.subEntScaleX, w.yScale *= this.subEntScaleY, b = _ * v), i === this.currentAnimation && (e[r] = this.mapObjToObj(w, e[r], b));
                var E = this.objectOverrides[d];
                if ("undefined" != typeof E)
                    for (var P in E) switch (P) {
                        case tt:
                            e[r].angle = cr.to_radians(E[P]), this.force = !0;
                            break;
                        case et:
                            e[r].x = E[P], this.force = !0;
                            break;
                        case it:
                            e[r].y = E[P], this.force = !0;
                            break;
                        case nt:
                            e[r].xScale = E[P], this.force = !0;
                            break;
                        case rt:
                            e[r].yScale = E[P], this.force = !0
                    }
                var I = this.boneIkOverrides[d];
                if ("undefined" != typeof I) {
                    for (var L = {}, R = {}, F = "", j = r + 1; j < o.bones.length; j++) {
                        var N = o.bones[j];
                        if (R = i.timelines[N.timeline], F = R.name, F === I.childBone) {
                            this.tweenBone(N, e, i, n, j, s, a, o), L = e[j], this.force = !0;
                            break
                        }
                    }
                    R.currentObjectState = this.applyIk(I.targetX, I.targetY, I.additionalLength, e[r], R.currentObjectState, R.currentMappedState, this.boneWidthArray[F], s, a, o), e[j] = R.currentObjectState
                }
                p.currentObjectState = f(e[r])
            }
        }, K.currentTweenedBones = function(t) {
            var e = [];
            t = "undefined" != typeof t ? t : this.currentAnimation;
            var i = t.mainlineKeys[t.cur_frame],
                n = 0,
                r = 0;
            this.clearAnimationState(), r = t === this.currentAnimation ? this.changeToStartFrom === pt ? this.blendPoseTime : this.currentAdjustedTime : t.localTime;
            for (var s = 0; s < i.bones.length; s++) {
                var a = i.bones[s];
                e[s] || this.tweenBone(a, e, t, i.bones, s, r, n, i)
            }
            return e
        }, K.tick = function() {
            this.objectOverrides = {}, this.boneIkOverrides = {}
        }, K.tick2 = function(t) {
            this.secondAnimation === this.currentAnimation && (this.blendStartTime = 0, this.blendEndTime = 0, this.blendPoseTime = 0, this.secondAnimation = null, this.changeAnimTo = 0, this.changeToStartFrom === pt ? this.changeToStartFrom = 0 : this.changeToStartFrom === dt && (this.changeToStartFrom = 1)), this.changeAnimTo && !this.inAnimTrigger && this.doAnimChange();
            var e = this.currentAnimation;
            if (e && !this.inAnimTrigger) {
                var i = null;
                if (!this.animPlaying)
                    if (this.lastKnownInstDataAsObj && this.instsEqual(this.lastKnownInstDataAsObj, this)) {
                        var n = W(this, this.layer.instances);
                        n !== this.lastZ && (i = !0, this.lastZ = n)
                    } else i = !0, this.lastKnownInstDataAsObj = this.objFromInst(this);
                    !i && this.force && (i = !0), this.force = !1;
                var r = !1,
                    s = !1;
                if (this.pauseWhenOutsideBuffer != Z) {
                    var a = this.isOutsideViewportBox();
                    a && (this.pauseWhenOutsideBuffer == Q ? s = !0 : this.pauseWhenOutsideBuffer == $ && (r = !0), this.setAllInvisible())
                }
                if (this.animPlaying || i || t) {
                    if (this.animPlaying && !t) {
                        var o = this.tickCurrentAnimationTime();
                        if (o && (this.animationFinish(this.speedRatio < 0), this.changeAnimTo && !this.inAnimTrigger && !this.animPlaying)) return void this.tick2()
                    }
                    if (!s) {
                        e = this.currentAnimation;
                        this.c2ObjectArray;
                        if (this.setAllCollisionsAndVisibility(!1), this.setMainlineKeyByTime(), this.runtime.redraw = !0, e.mainlineKeys[e.cur_frame]) {
                            if (!r) {
                                if (0 !== this.animBlend && this.secondAnimation) {
                                    this.changeToStartFrom === pt ? this.secondAnimation.localTime = 0 : this.secondAnimation.localTime = this.currentSpriterTime / this.currentAnimation.length * this.secondAnimation.length, this.setMainlineKeyByTime(this.secondAnimation);
                                    var h = this.currentTweenedBones(this.secondAnimation);
                                    this.animateCharacter(h, this.secondAnimation, !1)
                                }
                                var c = this.currentTweenedBones();
                                this.animateCharacter(c)
                            }
                            this.animPlaying && (this.animateSounds(), this.animateEvents(), this.animateMeta(e.meta));
                            for (var l = 0; l < this.objectsToSet.length; l++) {
                                var u = this.objectsToSet[l],
                                    p = this.timelineFromName(u.objectName);
                                if (p && p.currentObjectState) {
                                    var d = u.setType,
                                        f = p.currentObjectState,
                                        g = u.c2Object.getFirstPicked();
                                    g && (0 !== d && 1 !== d || (g.angle = f.angle), 0 !== d && 2 !== d || (g.x = f.x, g.y = f.y), g.set_bbox_changed())
                                }
                            }
                            this.objectsToSet = []
                        }
                    }
                }
            }
        }, K.animateCharacter = function(t, e, i) {
            if (e = "undefined" != typeof e ? e : this.currentAnimation) {
                var n, r, s = (e.cur_frame, null),
                    a = 0,
                    o = 0,
                    h = 0,
                    c = 0,
                    l = this.layer,
                    u = (this.entity, this.get_zindex());
                i = "undefined" == typeof i || i;
                var p, d = e.mainlineKeys[e.cur_frame],
                    g = l.instances,
                    m = 0;
                if (m = e === this.currentAnimation ? this.changeToStartFrom === pt ? this.blendPoseTime : this.currentAdjustedTime : e.localTime, i && !this.drawSelf) {
                    for (var y = 0; y < d.objects.length; y++)
                        if (n = d.objects[y], "reference" == n.type) {
                            var _ = e.timelines[n.timeline],
                                v = _.c2Object;
                            if (v) {
                                var b = v.inst;
                                if (b) {
                                    var w = W(b, g);
                                    w >= 1 && w <= u && (g.splice(w, 1), u--)
                                }
                            }
                        }
                    var x = W(this, g);
                    u != x && (g.splice(x, 1), x < u && u--, g.splice(u, 0, this), l.setZIndicesStaleFrom(0), this.zindex = u)
                }
                for (var S = 0, y = 0; y < d.objects.length; y++) {
                    n = d.objects[y], r = d.objects[y], s = null;
                    var T, A = null;
                    if ("reference" == n.type) {
                        var _ = e.timelines[n.timeline];
                        T = n.timeline, p = _.keys[n.key];
                        var O = n.key;
                        a = p.time;
                        var A = null,
                            E = _.keys.length;
                        n = p.objects[0], E > 1 && (O + 1 >= E && "true" == e.looping ? (A = _.keys[0], o = A.time, m > a && (o += e.length), s = A.objects[0]) : O + 1 < E && (A = _.keys[O + 1], o = A.time, s = A.objects[0]))
                    }
                    h = this.x, c = this.y;
                    var v = _.c2Object;
                    if (v || "point" === _.objectType) {
                        var b;
                        if (b = v ? v.inst : null, b || this.drawSelf || "point" === _.objectType || "entity" === _.objectType) {
                            i && b && (b.collisionsEnabled = !0, b.visible = this.visible, this.MoveToLayer(b, this.layer));
                            var P = null;
                            if (s && "instant" !== d.curveType && "instant" !== p.curveType) {
                                var I = 0;
                                m < a && (a -= e.length), o - a > 0 && (I = (m - a) / (o - a)), I = k(p, I), P = C(n, s, I, p.spin)
                            } else P = f(n); if (i && v && "sprite" == v.spriterType && (P.frame = M(b, n.frame, v)), b) {
                                b.curFrame
                            }
                            var L = 1 == this.xFlip ? -1 : 1,
                                R = 1 == this.yFlip ? -1 : 1,
                                F = r.parent;
                            if (_.currentMappedState = f(P), e === this.currentAnimation && 0 !== this.animBlend && this.secondAnimation) {
                                var j = this.timelineFromName(_.name, this.secondAnimation);
                                if (j) {
                                    var N = j.currentObjectState;
                                    if (N) {
                                        var B = P;
                                        P = C(B, N, this.animBlend, V(B.angle, N.angle)), this.animBlend > .5 && (P.frame = M(b, j.currentObjectState.frame, v))
                                    }
                                }
                            }
                            if (e === this.currentAnimation) {
                                var D = !1;
                                F > -1 ? (P = this.mapObjToObj(t[F], P, t[F].xScale * t[F].yScale), P.xScale *= L, P.yScale *= R, D = t[F].xScale < 0) : (P.x *= L * this.scaleRatio * this.subEntScaleX, P.y *= R * this.scaleRatio * this.subEntScaleY, P.xScale *= this.subEntScaleX, P.yScale *= this.subEntScaleY, P = this.mapObjToObj(this.objFromInst(this), P, L * R), D = L < 0), "point" === _.objectType && D && (P.angle = P.angle - cr.to_radians(180))
                            }
                            var G = !1;
                            if ((b || this.drawSelf) && i && (G = this.applyObjToInst(P, b, F > -1, v, _)), _.currentObjectState = P, this.drawSelf && F == -1 && (_.currentObjectState.xScale *= this.scaleRatio, _.currentObjectState.yScale *= this.scaleRatio), G || (_.currentObjectState.frame = _.currentMappedState.frame), this.drawSelf && P.defaultPivot) {
                                var z = v.obj.pivots[_.currentObjectState.frame];
                                z || (z = v.obj.pivots[0]), z && (_.currentObjectState.pivotX = z.x, _.currentObjectState.pivotY = z.y)
                            }
                            if (this.animateMeta(_.meta), b && i) {
                                var U = u + 1 + S++;
                                if (g[U] !== b) {
                                    var X = W(b, g);
                                    X >= 0 && g.splice(X, 1), g.splice(U, 0, b), b.zorder = U, l.setZIndicesStaleFrom(0)
                                }
                            }
                        }
                    }
                }
            }
        }, K.animateSounds = function(t) {
            if (t = "undefined" != typeof t ? t : this.currentAnimation)
                for (var e = 0; e < t.soundlines.length; e++) {
                    var i = t.soundlines[e];
                    i && this.animateSound(i, t.length)
                }
        }, K.animateMeta = function(t, e) {
            if (e = "undefined" != typeof e ? e : this.currentAnimation) {
                this.animateTag(t.tagline, e.length, e);
                for (var i = 0; i < t.varlines.length; i++) {
                    var n = t.varlines[i];
                    n && this.animateVar(n, e.length, e)
                }
            }
        }, K.animateEvents = function(t) {
            if (t = "undefined" != typeof t ? t : this.currentAnimation)
                for (var e = 0; e < t.eventlines.length; e++) {
                    var i = t.eventlines[e];
                    i && this.animateEvent(i, t.length)
                }
        }, K.animateSound = function(t, e, i) {
            var n, r = t.keys,
                s = r.length,
                a = e,
                o = r[0];
            this.animateMeta(t.meta);
            for (var h = 1; h < r.length; h++)
                if (this.currentAdjustedTime < r[h].time) {
                    a = r[h].time, s = h - 1, o = r[s];
                    break
                }
            o && o.objects && o.objects[0] && (n = o.objects[0]), i = "undefined" != typeof i ? i : this.currentAnimation;
            var c, l, u, p = t.keys.length;
            p > 1 && (s + 1 >= p && "true" == i.looping ? (c = t.keys[0], l = c.time, this.currentSpriterTime > f && (l += i.length), u = c.objects[0]) : s + 1 < p && (c = t.keys[s + 1], l = c.time, u = c.objects[0]));
            var d = this.currentAdjustedTime,
                f = t.lastTimeSoundCheck;
            if (d != f)
                for (var h = 0; h < r.length; h++) {
                    var g = r[h];
                    if (g) {
                        var m = g.objects[0];
                        if (m) {
                            if (d === g.time) {
                                this.playSound(t, m.name);
                                break
                            }
                            var y = -1;
                            d - f > 0 && d - f < f + (i.length - d) || f - d > d + (i.length - f) ? y = d - f > 0 && d - f < f + (i.length - d) ? x(f, d, g.time) : x(f - i.length, d, g.time) : (d - f < 0 || f - d < d + (i.length - f)) && (y = d - f < 0 ? x(d, f, g.time) : x(d - i.length, f, g.time)), y > 0 && y < 1 && this.playSound(t, m.name)
                        }
                    }
                }
            var _;
            if (u) {
                var y = 0,
                    f = o.time;
                this.currentAdjustedTime < f && (f -= i.length);
                var y = x(f, l, this.currentAdjustedTime);
                _ = E(n, u, k(o, y))
            } else _ = this.cloneSound(n);
            this.changeVolume(t, _.volume), this.changePanning(t, _.panning), t.lastTimeSoundCheck = this.currentAdjustedTime, t.currentObjectState = _
        }, K.animateEvent = function(t, e, i) {
            var n, r = t.keys,
                s = r.length,
                a = e,
                o = r[0];
            this.animateMeta(t.meta);
            for (var h = 1; h < r.length; h++)
                if (this.currentAdjustedTime < r[h].time) {
                    a = r[h].time, s = h - 1, o = r[s];
                    break
                }
            o && o.objects && o.objects[0] && (n = o.objects[0]), i = "undefined" != typeof i ? i : this.currentAnimation;
            var c, l, u = t.keys.length;
            u > 1 && (s + 1 >= u && "true" == i.looping ? (c = t.keys[0], l = c.time, this.currentSpriterTime > d && (l += i.length)) : s + 1 < u && (c = t.keys[s + 1], l = c.time));
            var p = this.currentAdjustedTime,
                d = t.lastTimeEventCheck;
            if (p != d)
                for (var h = 0; h < r.length; h++) {
                    var f = r[h];
                    if (f) {
                        if (p === f.time) {
                            this.playEvent(t, t.name);
                            break
                        }
                        var g = -1;
                        p - d > 0 && p - d < d + (i.length - p) || d - p > p + (i.length - d) ? g = p - d > 0 && p - d < d + (i.length - p) ? x(d, p, f.time) : x(d - i.length, p, f.time) : (p - d < 0 || d - p < p + (i.length - d)) && (g = p - d < 0 ? x(p, d, f.time) : x(p - i.length, d, f.time)), g > 0 && g < 1 && this.playEvent(t, t.name)
                    }
                }
            t.lastTimeEventCheck = this.currentAdjustedTime
        }, K.animateVar = function(t, e, i) {
            i = "undefined" != typeof i ? i : this.currentAnimation;
            var n = this.currentAdjustedTime,
                r = t.keys,
                s = -1,
                a = -1,
                o = 0,
                h = 0,
                c = 0,
                l = 0;
            t.lastTagIndex = 0, t.currentVal = t.def.def;
            var u, p = t.def.type;
            if (0 !== r.length) {
                if (!(r.length > 1)) return t.lastTagIndex = 0, void(t.currentVal = r[0].val);
                for (var d = 0; d < r.length; d++) {
                    if (n === r[d].time) return t.lastTagIndex = d, void(t.currentVal = r[d].val);
                    if (n < r[d].time) {
                        if (d > 0) s = d - 1, a = d;
                        else {
                            if ("true" !== i.looping) return;
                            s = r.length - 1, a = 0
                        } if (s > -1) {
                            u = r[s];
                            var f = r[a];
                            o = u.time, h = f.time, c = u.val, l = f.val;
                            break
                        }
                    } else if (d == r.length - 1) {
                        if ("true" !== i.looping) return t.lastTagIndex = d, void(t.currentVal = r[d].val);
                        s = d, a = 0, u = r[s];
                        var f = r[a];
                        o = u.time, h = f.time, c = u.val, l = f.val
                    }
                }
                if (t.lastTagIndex = s, "string" === p) return void(t.currentVal = c);
                o > n && (o -= i.length), h < n && (h += i.length);
                var g = x(o, h, n);
                t.currentVal = cr.lerp(c, l, k(u, g)), "int" === p && (t.currentVal = Math.floor(t.currentVal))
            }
        }, K.animateTag = function(t, e, i) {
            var n = t.keys,
                r = n.length,
                s = e,
                a = n[0];
            a && a.time > this.currentAdjustedTime && "true" == i.looping && (a = n[n.length - 1]);
            for (var o = [], h = 1; h < n.length; h++)
                if (this.currentAdjustedTime < n[h].time) {
                    s = n[h].time, r = h - 1, a = n[r];
                    break
                }
            a && (o = a.tags), t.lastTagIndex = r, t.currentTags = o
        }, K.draw = function(t) {
            if (this.drawSelf) {
                t.globalAlpha = this.opacity;
                var e = this.type.animations[0].frames[0],
                    i = (e.spritesheeted, e.texture_img),
                    n = (this.x, this.y, this.width),
                    r = this.height,
                    s = n > 0 ? 1 : -1,
                    a = r > 0 ? 1 : -1,
                    o = 1 == this.xFlip ? -1 : 1,
                    h = 1 == this.yFlip ? -1 : 1,
                    c = null,
                    l = "undefined" != typeof l ? l : this.currentAnimation,
                    e = l.cur_frame;
                if (this.currentAnimation) {
                    var u = this.currentAnimation.mainlineKeys[this.currentAnimation.cur_frame];
                    if (u)
                        for (var p = 0; p < u.objects.length; p++)
                            if (c = u.objects[p], "reference" == c.type) {
                                var d = l.timelines[c.timeline],
                                    f = d.currentObjectState;
                                if (f && "undefined" != typeof f.frame && f.frame > -1) {
                                    var g = d.object;
                                    if (g) {
                                        var m = g.imageSizes[f.frame],
                                            y = f.angle,
                                            _ = 0,
                                            v = 0;
                                        t.save(), t.translate(f.x, f.y), 1 === s && 1 === a || t.scale(s, a), 1 === o && 1 === h || t.scale(o, h);
                                        var b = f.pivotX * m.w;
                                        if (_ = m.atlasXOff - b, m.atlasRotated) {
                                            var w = (1 - f.pivotY) * m.h,
                                                x = m.h - (m.atlasYOff + m.atlasH);
                                            y -= cr.to_radians(90), v = x - w
                                        } else {
                                            var S = f.pivotY * m.h;
                                            v = m.atlasYOff - S
                                        }
                                        _ *= f.xScale, v *= f.yScale, o * h == -1 && (m.atlasRotated && (y -= cr.to_radians(180)), y *= -1), t.rotate(y * s * a), m.atlasRotated ? t.drawImage(i, m.atlasX, m.atlasY, m.atlasH, m.atlasW, v, _, m.atlasH * this.scaleRatio, m.atlasW * this.scaleRatio) : t.drawImage(i, m.atlasX, m.atlasY, m.atlasW, m.atlasH, _, v, m.atlasW * this.scaleRatio, m.atlasH * this.scaleRatio), t.restore()
                                    }
                                }
                            }
                }
            }
        }, K.drawGL = function(t) {
            if (this.drawSelf) {
                t.setOpacity(this.opacity);
                var e = this.type.animations[0].frames[0],
                    i = e.texture_img,
                    n = this.runtime.glwrap.loadTexture(i, !1, this.runtime.linearSampling, e.pixelformat);
                t.setTexture(n);
                var r = 1 == this.xFlip ? -1 : 1,
                    s = 1 == this.yFlip ? -1 : 1,
                    a = null,
                    o = {};
                o.left = 0, o.top = 0, o.right = 1, o.bottom = 1;
                var h = this.currentAnimation;
                if (h) {
                    var c = h.mainlineKeys[h.cur_frame];
                    if (c)
                        for (var l = 0; l < c.objects.length; l++)
                            if (a = c.objects[l], "reference" == a.type) {
                                var u = h.timelines[a.timeline],
                                    p = u.currentObjectState;
                                if (p && "undefined" != typeof p.frame && p.frame > -1) {
                                    var d = u.object;
                                    if (d) {
                                        var f = d.imageSizes[p.frame],
                                            g = p.angle;
                                        r * s == -1 && (g -= cr.to_radians(180), f.atlasRotated || (g *= -1, g = cr.to_radians(180) - g)), o.left = f.atlasX / i.width, o.top = f.atlasY / i.height;
                                        var m = 0,
                                            y = 0;
                                        if (f.atlasRotated ? (g -= cr.to_radians(90), m += f.atlasH, y += f.atlasW) : (m += f.atlasW, y += f.atlasH), o.right = (f.atlasX + m) / i.width, o.bottom = (f.atlasY + y) / i.height, r == -1) {
                                            var _ = o.left;
                                            o.left = o.right, o.right = _
                                        }
                                        if (s == -1) {
                                            var _ = o.top;
                                            o.top = o.bottom, o.bottom = _
                                        }
                                        var e = this.curFrame,
                                            v = new cr.rect(0, 0, 0, 0),
                                            b = new cr.quad,
                                            w = p.pivotX * f.w * p.xScale,
                                            x = p.xScale * f.atlasXOff,
                                            S = p.pivotY * f.h * p.yScale,
                                            T = p.yScale * f.atlasYOff,
                                            A = (1 - p.pivotX) * f.w * p.xScale,
                                            O = p.xScale * (f.w - (f.atlasXOff + f.atlasW)),
                                            k = (1 - p.pivotY) * f.h * p.yScale,
                                            C = p.yScale * (f.h - (f.atlasYOff + f.atlasH)),
                                            E = 0,
                                            P = 0;
                                        f.atlasRotated ? (v.set(p.x, p.y, p.x + f.atlasH * p.yScale, p.y + f.atlasW * p.xScale), E = r == -1 ? T - S : C - k, P = s == -1 ? O - A : x - w) : (v.set(p.x, p.y, p.x + f.atlasW * p.xScale, p.y + f.atlasH * p.yScale), E = r == -1 ? O - A : x - w, P = s == -1 ? C - k : T - S), v.offset(E, P), v.offset(-p.x, -p.y), b.set_from_rotated_rect(v, g), b.offset(p.x, p.y), b.bounding_box(v), v.normalize();
                                        var I = b;
                                        t.setOpacity(this.opacity * p.a), t.quadTex(I.tlx, I.tly, I.trx, I.try_, I.brx, I.bry, I.blx, I.bly, o)
                                    }
                                }
                            }
                }
            }
        }, K.playSound = function(t, e) {
            this.soundToTrigger = e, this.soundLineToTrigger = t, this.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.OnSoundTriggered, this)
        }, K.playEvent = function(t, e) {
            this.eventToTrigger = e, this.eventLineToTrigger = t, this.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.OnEventTriggered, this)
        }, K.changeVolume = function(t, e) {
            t.currentObjectState.volume != e && (t.currentObjectState.volume = e, this.soundToTrigger = "", this.soundLineToTrigger = t, this.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.OnSoundVolumeChangeTriggered, this))
        }, K.changePanning = function(t, e) {
            t.currentObjectState.panning != e && (t.currentObjectState.panning = e, this.soundToTrigger = "", this.soundLineToTrigger = t, this.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.OnSoundPanningChangeTriggered, this))
        }, K.timelineFromName = function(t, e) {
            if (e = "undefined" != typeof e ? e : this.currentAnimation) {
                for (var i = 0; i < e.timelines.length; i++) {
                    var n = e.timelines[i];
                    if (n && n.name === t) return n
                }
                for (var i = 0; i < e.soundlines.length; i++) {
                    var n = e.soundlines[i];
                    if (n && n.name === t) return n
                }
                for (var i = 0; i < e.eventlines.length; i++) {
                    var n = e.eventlines[i];
                    if (n && n.name === t) return n
                }
            }
        }, K.tagStatus = function(t, e) {
            if (e)
                for (var i = 0; i < e.tagline.currentTags.length; i++) {
                    var n = e.tagline.currentTags[i];
                    if (n && n == t) return !0
                }
            return !1
        }, K.varStatus = function(t, e, i) {
            if (i)
                for (var n = 0; n < i.varlines.length; n++) {
                    var r = i.varlines[n];
                    if (r && r.def.name == e) return void("string" === r.def.type ? t.set_string(r.currentVal) : "int" === r.def.type ? t.set_int(r.currentVal) : t.set_float(r.currentVal))
                }
            t.set_float(0)
        }, K.loadTagDefs = function(t) {
            if (t) {
                var e = t.tag_list;
                if (e)
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        this.tagDefs.push(n.name)
                    }
            }
        }, K.loadVarDefs = function(t, e) {
            if (t)
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (n) {
                        var r = new L;
                        r.name = n.name, r.type = n.type, r.def = n["default"], e.push(r)
                    }
                }
        }, K.findSprites = function(t) {
            if (t) {
                for (var i, n = this.type.name, r = t, s = r.folder, a = 0; a < s.length; a++) {
                    var o = s[a];
                    this.folders.push(new I);
                    for (var h = o.file, c = 0; c < h.length; c++) {
                        var l = h[c];
                        i = l;
                        var u = new B;
                        u.fileName = i.name, l.hasOwnProperty("pivot_x") && (u.pivotX = i.pivot_x), l.hasOwnProperty("pivot_y") && (u.pivotY = 1 - i.pivot_y), l.hasOwnProperty("width") && (u.w = i.width), l.hasOwnProperty("height") && (u.h = i.height), this.drawSelf && (l.hasOwnProperty("ax") && (u.atlasX = i.ax), l.hasOwnProperty("ay") && (u.atlasY = i.ay), l.hasOwnProperty("axoff") && (u.atlasXOff = i.axoff), l.hasOwnProperty("ayoff") && (u.atlasYOff = i.ayoff), l.hasOwnProperty("aw") && (u.atlasW = i.aw), l.hasOwnProperty("ah") && (u.atlasH = i.ah), l.hasOwnProperty("arot") && (u.atlasRotated = "true" == i.arot)), this.folders[a].files.push(u)
                    }
                }
                for (var p = [], d = r.entity, f = 0; f < d.length; f++) {
                    var g = d[f];
                    i = g;
                    var m = g.obj_info,
                        y = g.character_map,
                        _ = i.name;
                    if (m)
                        for (var v = 0; v < m.length; v++) {
                            var b = m[v];
                            if (b) {
                                var w = new e;
                                w.name = b.realname, w.name || (w.name = b.name), this.loadVarDefs(b.var_defs, w.varDefs), this.boneWidthArray[w.name] = b.w, this.objInfoVarDefs.push(w)
                            }
                            if (b && ("sprite" === b.type || "box" === b.type || "entity" === b.type)) {
                                var x = b.name,
                                    S = b.realname,
                                    T = [];
                                b.var_defs && this.loadVarDefs(b.var_defs, T), p.push(new U(n, x, _, S, T));
                                var A = p[p.length - 1];
                                if ("box" === b.type) {
                                    A.width = b.w, A.height = b.h, A.isBox = !0, A.spriterType = "box";
                                    var O = {};
                                    O.w = A.width, O.h = A.height, A.imageSizes.push(O)
                                }
                                if ("entity" === b.type) A.spriterType = "entity";
                                else if ("sprite" === b.type) {
                                    var k = b.frames;
                                    if (k)
                                        for (var c = 0; c < k.length; c++) {
                                            var C = k[c];
                                            if (this.folders[C.folder] && this.folders[C.folder].files[C.file]) {
                                                A.frames.push(this.folders[C.folder].files[C.file].fileName);
                                                var E = {};
                                                E.x = 0, E.y = 0, E.x = this.folders[C.folder].files[C.file].pivotX, E.y = this.folders[C.folder].files[C.file].pivotY, A.pivots.push(E);
                                                var O = {};
                                                O.w = 1, O.h = 1;
                                                var P = this.folders[C.folder].files[C.file];
                                                O.w = P.w, O.h = P.h, this.drawSelf && (O.fileName = P.fileName, O.atlasW = P.atlasW, O.atlasH = P.atlasH, O.atlasX = P.atlasX, O.atlasY = P.atlasY, O.atlasXOff = P.atlasXOff, O.atlasYOff = P.atlasYOff, O.atlasRotated = P.atlasRotated), A.imageSizes.push(O)
                                            }
                                        }
                                    if (y)
                                        for (var L = 0; L < y.length; L++) {
                                            var R = y[L],
                                                F = R.map;
                                            if (F)
                                                for (var j = 0; j < F.length; j++) {
                                                    var N = F[j];
                                                    if ("undefined" != typeof N.folder && "undefined" != typeof N.file && this.folders[N.folder] && this.folders[N.folder].files[N.file]) {
                                                        var M = {};
                                                        M.oldFrame = A.frames.indexOf(this.folders[N.folder].files[N.file].fileName), M.oldFrame > -1 && (M.newFrame = -1, "undefined" != typeof N.target_folder && "undefined" != typeof N.target_file && (M.newFrame = A.frames.indexOf(this.folders[N.target_folder].files[N.target_file].fileName)), A.charMaps[R.name] || (A.charMaps[R.name] = []), A.charMaps[R.name].push(M))
                                                    }
                                                }
                                        }
                                }
                            }
                        }
                }
                return p
            }
        }, K.generateTestC2ObjectArray = function(t) {
            for (var e = [], i = this.runtime.types, n = 0, r = t.length; n < r; n++) {
                var s = {};
                s.type = i[t[n].fullTypeName], s.spriterType = t[n].spriterType, s.inst = null, s.appliedMap = [], s.obj = t[n], e.push(s)
            }
            return e
        }, K.cloneSound = function(t) {
            var e = new p;
            return e.trigger = t.trigger, e.volume = t.volume, e.panning = t.panning, e.name = t.name, e
        }, K.cloneObject = function(t) {
            var e = new u;
            return e.type = t.type, e.frame = t.frame, e.storedFrame = t.storedFrame, e.x = t.x, e.y = -t.y, e.angle = t.angle, e.a = t.a, e.angle = t.angle, e.xScale = t.xScale, e.yScale = t.yScale, e.pivotX = t.pivotX, e.pivotY = t.pivotY, e.entity = t.entity, e.animation = t.animation, e.t = t.t, e.defaultPivot = t.defaultPivot, e
        }, K.objectFromTag = function(t, e, i, n, r) {
            var s = t,
                a = -0,
                o = null,
                h = new u;
            if (h.type = n, "sprite" === n) {
                a = s.folder, o = s.file, d = this.folders[a].files[o];
                var c = e[G(i, e, r)];
                h.frame = c.frames.indexOf(d.fileName), h.storedFrame = h.frame
            }
            if (t.hasOwnProperty("x") && (h.x = s.x), t.hasOwnProperty("y") && (h.y = -s.y), t.hasOwnProperty("angle") && (h.angle = s.angle), t.hasOwnProperty("a") && (h.a = s.a), h.angle = 360 - h.angle, h.angle /= 360, h.angle > .5 && (h.angle -= 1), h.angle *= 6.283185307179586, t.hasOwnProperty("scale_x") && (h.xScale = s.scale_x), t.hasOwnProperty("scale_y") && (h.yScale = s.scale_y), t.hasOwnProperty("entity") && (h.entity = s.entity), t.hasOwnProperty("animation") && (h.animation = s.animation), t.hasOwnProperty("t") && (h.t = s.t), t.hasOwnProperty("pivot_x")) h.pivotX = s.pivot_x;
            else if ("sprite" === n) {
                var l = this.folders,
                    p = l[a];
                if (h.defaultPivot = !0, p) {
                    var d = p.files[o];
                    d && (h.pivotX = d.pivotX)
                }
            }
            if (t.hasOwnProperty("pivot_y")) h.pivotY = 1 - s.pivot_y;
            else if ("sprite" === n) {
                var l = this.folders,
                    p = l[a];
                if (h.defaultPivot = !0, p) {
                    var d = p.files[o];
                    d && (h.pivotY = d.pivotY)
                }
            }
            return h
        }, K.soundFromTag = function(t) {
            var e = new p;
            if (void 0 !== t.folder && void 0 !== t.file) {
                var i = this.folders[t.folder].files[t.file];
                i && (e.name = i.fileName, e.name = e.name.substr(0, e.name.lastIndexOf(".")), e.name = e.name.substr(e.name.lastIndexOf("/") + 1, e.name.length))
            }
            return t.hasOwnProperty("trigger") && (e.trigger = t.trigger), t.hasOwnProperty("panning") && (e.panning = t.panning), t.hasOwnProperty("volume") && (e.volume = t.volume), e
        }, K.initDOMtoPairedObjects = function() {
            for (var t = this.entities, e = 0; e < t.length; e++) {
                var i = t[e];
                if (i) {
                    var n = i.animations;
                    if (n)
                        for (var r = 0; r < n.length; r++) {
                            var s = n[r];
                            if (s) {
                                var a = s.timelines;
                                if (a)
                                    for (var o = 0; o < a.length; o++) {
                                        var h = a[o];
                                        h && (h.c2Object = this.c2ObjectArray[G(h.name, this.objectArray, i.name)])
                                    }
                            }
                        }
                }
            }
        }, K.associateAllTypes = function() {
            for (var t = this.c2ObjectArray, e = this.objectArray, i = 0, n = e.length; i < n; i++) {
                var r = e[i],
                    s = this.siblings;
                if (!(s && s.length > 0)) {
                    var r = e[i],
                        a = t[i],
                        o = a.type;
                    if (o) {
                        r.fullTypeName = o.name, a.type = o;
                        var h = this.get_iid(),
                            c = o.instances[h];
                        a.inst = c;
                        var l = this.entity.animations
                    }
                    break
                }
                for (var u = 0; u < s.length; u++) {
                    var p = s[u];
                    if (p) {
                        var o = p.type;
                        if (o.name === r.fullTypeName) {
                            var a = t[i];
                            a.type = o;
                            var c = p;
                            a.inst = c;
                            for (var l = this.entity.animations, d = r.originalName, f = 0; f < l.length; f++)
                                for (var g = l[f], m = g.timelines, y = 0; y < m.length; y++) {
                                    var _ = m[y];
                                    d == _.name && (_.c2Object = a)
                                }
                            break
                        }
                    }
                }
            }
        }, K.loadSCML = function(t) {
            this.loadTagDefs(t), this.objectArray = this.findSprites(t), this.type.objectArrays[this.properties[0]] || (this.type.objectArrays[this.properties[0]] = this.objectArray, this.type.boneWidthArrays[this.properties[0]] = this.boneWidthArray), this.c2ObjectArray = this.generateTestC2ObjectArray(this.objectArray);
            for (var e, a = (this.type.name, t), o = (a.folder, a.entity), c = 0; c < o.length; c++) {
                var l = o[c];
                e = l;
                var u = new i;
                e = l, u.name = e.name, this.loadVarDefs(l.var_defs, u.varDefs);
                for (var p = l.animation, d = 0; d < p.length; d++) {
                    var f = p[d];
                    e = f;
                    var g = new n;
                    g.name = e.name, g.length = e.length, f.hasOwnProperty("looping") && (g.looping = e.looping), f.hasOwnProperty("loop_to") && (g.loopTo = e.loop_to), f.hasOwnProperty("l") && (g.l = e.l), f.hasOwnProperty("r") && (g.r = e.r), f.hasOwnProperty("t") && (g.t = e.t), f.hasOwnProperty("b") && (g.b = e.b);
                    for (var m = f.mainline, y = new r, _ = m.key, v = 0; v < _.length; v++) {
                        var b = _[v],
                            w = new s;
                        e = b, h(b, w);
                        var x = b.bone_ref;
                        if (x)
                            for (var S = 0; S < x.length; S++) {
                                var T = x[S];
                                e = T;
                                var A = new P;
                                A.timeline = e.timeline, A.key = e.key, T.hasOwnProperty("parent") && (A.parent = e.parent), w.bones.push(A)
                            }
                        var O = b.object_ref;
                        if (O)
                            for (var S = 0; S < O.length; S++) {
                                var k = O[S];
                                e = k;
                                var C = new P;
                                C.timeline = e.timeline, C.key = e.key, k.hasOwnProperty("parent") && (C.parent = e.parent), w.objects.push(C)
                            }
                        g.mainlineKeys.push(w)
                    }
                    g.mainline = y;
                    var E = f.timeline;
                    this.setTimelinesFromJson(E, g.timelines, u), E = f.soundline, this.setSoundlinesFromJson(E, g.soundlines, u.name), E = f.eventline, this.setEventlinesFromJson(E, g.eventlines, u.name), E = f.meta, this.setMetaDataFromJson(E, g.meta, u.varDefs), u.animations.push(g)
                }
                this.entities.push(u), this.entity && this.properties[1] !== u.name || (this.entity = u)
            }
        }, K.setAnimToIndex = function(t) {
            if (this.entity && this.entity.animations.length > t) {
                this.playTo = -1, this.changeAnimTo = this.entity.animations[t], this.changeToStartFrom = 2;
                var e = this.currentAnimation;
                e && (this.animPlaying = !0), this.runtime.tick2Me(this)
            }
        }, K.setAnim = function(t, e, i) {
            if (1 != e && 2 != e || !this.currentAnimation || t != this.currentAnimation.name) {
                if (e > ut && i > 0) {
                    var n = this.getAnimFromEntity(t);
                    if (n === this.secondAnimation && this.blendEndTime > 0) return;
                    if (n === this.currentAnimation) {
                        if (!this.secondAnimation) return this.blendStartTime = 0, this.blendEndTime = 0, this.blendPoseTime = 0, this.secondAnimation = null, this.animBlend = 0, void(this.changeAnimTo = null);
                        this.currentAnimation = this.secondAnimation, this.animBlend = 1 - this.animBlend
                    } else this.animBlend = 0;
                    this.secondAnimation = n, this.blendStartTime = this.getNowTime(), this.blendPoseTime = 0, e === pt && "false" === this.currentAnimation.looping, this.blendEndTime = this.blendStartTime + i / 1e3 / (this.ignoreGlobalTimeScale ? 1 : this.runtime.timescale)
                } else i <= 0 && (e === dt ? e = 2 : e == pt && (e = 0)), this.blendStartTime = 0, this.blendEndTime = 0, this.blendPoseTime = 0, this.secondAnimation = null; if (this.changeToStartFrom = e, e === pt && this.secondAnimation) {
                    this.blendPoseTime = this.currentSpriterTime, this.secondAnimation.localTime = 0, this.setMainlineKeyByTime(this.secondAnimation);
                    var r = this.currentTweenedBones(this.secondAnimation);
                    this.animateCharacter(r, this.secondAnimation, !1)
                }
                this.setAnimTo(t, !1);
                var s = this.animPlaying;
                this.animPlaying = !1, this.tick2(!0), this.animPlaying = s
            }
        }, K.doRequest = function(t, e, i) {
            var n = this;
            try {
                var r = t;
                n.loadSCML(r), n.type.scmlFiles[n.properties[0]] = n.entities, n.runtime.trigger(cr.plugins_.Spriter.prototype.cnds.readyForSetup, n), n.setAnimTo(n.properties[2], !0), !n.currentAnimation && n.entity && n.entity.animations.length && n.setAnimTo(n.entity.animations[0].name, !0);
                for (var s = 0; s < n.type.scmlInstsToNotify[n.properties[0]].length; s++) {
                    var a = n.type.scmlInstsToNotify[n.properties[0]][s];
                    a.forceCharacterFromPreload()
                }
                delete n.type.scmlReserved[n.properties[0]], n.type.scmlInstsToNotify[n.properties[0]] = []
            } catch (o) {}
        }, K.getAnimFromEntity = function(t) {
            if (this.entity && this.entity.animations)
                for (var e = 0, i = this.entity.animations.length; e < i; e++)
                    if (this.entity.animations[e].name == t) return this.entity.animations[e]
        }, K.mapObjToObj = function(t, e, i) {
            var n = new u;
            n.xScale = e.xScale * t.xScale, n.yScale = e.yScale * t.yScale, i < 0 ? n.angle = 6.283185307179586 - e.angle + t.angle : n.angle = e.angle + t.angle;
            var r = e.x * t.xScale,
                s = e.y * t.yScale,
                a = t.angle,
                o = 0,
                h = 1;
            0 != a && (o = Math.sin(a), h = Math.cos(a));
            var c = r * h - s * o,
                l = r * o + s * h;
            return n.a = t.a * e.a, n.pivotX = e.pivotX, n.pivotY = e.pivotY, n.defaultPivot = e.defaultPivot, n.x = c + t.x, n.y = l + t.y, n.entity = e.entity, n.animation = e.animation, n.t = e.t, n
        }, K.instsEqual = function(t, e) {
            return t.x == e.x && t.y == e.y && t.a == e.opacity && t.angle == e.angle
        }, K.objFromInst = function(t) {
            var e = new u;
            return e.pivotX = t.hotspotX, e.pivotY = t.hotspotY, e.defaultPivot = !1, e.x = t.x, e.y = t.y, e.a = t.opacity, e.angle = t.angle, e.frame = t.curFrame, e.storedFrame = t.storedFrame, e
        }, K.currentFrame = function() {
            return this.currentAnimation ? this.currentAnimation.cur_frame : 0
        }, K.applyPivotToInst = function(t, e, i, n, r) {
            var s = -1 * e * n,
                a = -1 * i * r,
                o = t.angle,
                h = 0,
                c = 1;
            0 != o && (h = Math.sin(o), c = Math.cos(o));
            var l = s * c - a * h,
                u = s * h + a * c;
            t.x = l + t.x, t.y = u + t.y
        }, K.distance = function(t, e, i, n) {
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - e, 2))
        }, K.applyIk = function(t, e, i, n, r, s, a) {
            if (n && s) {
                var o = !1,
                    h = this.distance(0, 0, s.x * n.xScale, s.y * n.yScale),
                    c = this.distance(n.x, n.y, t, e),
                    l = v(a * s.xScale * n.xScale) + i,
                    u = n.scaleX * n.scaleY < 0;
                if (c > h + l) {
                    var p = cr.to_radians(270) - Math.atan2(n.x - t, n.y - e);
                    n.scaleX < 0 && (p -= cr.to_radians(180)), this.xFlip && (p -= cr.to_radians(180)), n.angle = p
                } else {
                    var d = n.x - t,
                        f = n.y - e,
                        p = Math.acos((h * h + c * c - l * l) / (2 * h * c)),
                        g = cr.to_radians(270) - Math.atan2(d, f),
                        m = cr.to_radians(270) - Math.atan2(n.x - r.x, n.y - r.y) - n.angle;
                    s.angle > 0 && (o = !0), p = g + p * (o ? -1 : 1) * (u ? -1 : 1), n.scaleX < 0 && (m -= cr.to_radians(180)), p -= m, p != p ? p = n.angle : n.scaleX < 0 && (p -= cr.to_radians(180)), n.angle = p
                }
                r = this.mapObjToObj(n, s, n.xScale * n.yScale);
                var p = cr.to_radians(270) - Math.atan2(r.x - t, r.y - e);
                return r.scaleX < 0 && (p -= cr.to_radians(180)), this.xFlip && (p -= cr.to_radians(180)), u && (p = cr.to_radians(360) - p, p *= -1), r.angle = p, r
            }
        }, K.applyObjToInst = function(t, e, i, n, r) {
            var s = !1,
                a = this.objectOverrides[r.name];
            if ("undefined" != typeof a)
                for (var o in a) switch (o) {
                    case tt:
                        t.angle = cr.to_radians(a[o]), this.force = !0;
                        break;
                    case et:
                        t.x = a[o], this.force = !0;
                        break;
                    case it:
                        t.y = a[o], this.force = !0;
                        break;
                    case nt:
                        t.xScale = a[o], this.force = !0;
                        break;
                    case rt:
                        t.yScale = a[o], this.force = !0;
                        break;
                    case st:
                        t.frame = M(e, a[o], n), s = !0, this.force = !0;
                        break;
                    case at:
                        t.pivotX = a[o], this.force = !0;
                        break;
                    case ot:
                        t.pivotY = a[o], this.force = !0;
                        break;
                    case ht:
                        t.entity = a[o], this.force = !0;
                        break;
                    case ct:
                        t.animation = a[o], this.force = !0;
                        break;
                    case lt:
                        t.t = a[o], this.force = !0
                }
            if (e && n) {
                e.angle = t.angle, e.opacity = t.a;
                e.curFrame;
                e.hotspotX = 0, e.hotspotY = 0, e.x = t.x, e.y = t.y;
                var h = e.width,
                    c = e.height;
                "entity" === n.obj.spriterType && (e.subEntScaleX = t.xScale, e.subEntScaleY = t.yScale, e.setEntToIndex(t.entity), e.entity && (e.setAnimToIndex(t.animation), e.setAnimTime(1, t.t))), n.obj.imageSizes && n.obj.imageSizes.length > e.cur_frame && (h = n.obj.imageSizes[e.cur_frame].w, c = n.obj.imageSizes[e.cur_frame].h);
                var l = 1 == this.xFlip ? -1 : 1,
                    u = 1 == this.yFlip ? -1 : 1,
                    p = (i ? 1 : this.scaleRatio) * h * t.xScale * l,
                    d = (i ? 1 : this.scaleRatio) * c * t.yScale * u;
                e.width === p && e.height === d || (e.width = p, e.height = d);
                var f = t.pivotX,
                    g = t.pivotY;
                if (t.defaultPivot) {
                    var m = n.obj.pivots[e.cur_frame];
                    m || (m = n.obj.pivots[0]), m && (f = m.x, g = m.y)
                }
                this.applyPivotToInst(e, f, g, p, d), e.set_bbox_changed()
            }
            return s
        }, K.setEntTo = function(t) {
            for (var e = this.entities, i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                r && t == r.name && (this.entity = r)
            }!this.entity && this.entities.length && (this.entity = e[0]), this.entity || (this.startingEntName = t)
        }, K.setEntToIndex = function(t) {
            this.entity = this.entities[t], !this.entity && this.entities.length && (this.entity = this.entities[0])
        }, K.setAllCollisionsAndVisibility = function(t) {
            var e = this.c2ObjectArray;
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var n = e[i],
                        r = n.inst;
                    r ? (r.collisionsEnabled = t, r.visible = t) : !this.drawSelf && n.obj && n.obj.frames.length > 0 && (this.associateAllTypes(), r = n.inst)
                }
        }, K.setAllInvisible = function() {
            var t = this.c2ObjectArray;
            if (t)
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = i.inst;
                    n || (this.associateAllTypes(), n = i.inst), n && (n.visible = !1)
                }
        }, K.setAnimTo = function(t, e) {
            e = "undefined" == typeof e || e, this.playTo = -1, this.changeAnimTo = this.getAnimFromEntity(t), this.changeAnimTo || this.currentAnimation || !this.entity || (this.changeAnimTo = this.entity.animations[0]), this.changeAnimTo || (this.startingAnimName = t, this.changeToStartFrom = 0, this.blendStartTime = 0, this.blendEndTime = 0, this.secondAnimation = null, this.blendPoseTime = 0);
            var i = this.currentAnimation;
            i && (this.animPlaying = !0), this.setAllCollisionsAndVisibility(!1), this.runtime.tick2Me(this), e && this.tick2()
        }, K.setAnimTime = function(t, e) {
            var i = this.currentAnimation,
                n = this.currentSpriterTime;
            i && (0 === t ? this.currentSpriterTime = e : 1 == t && (this.currentSpriterTime = e * i.length)), n != this.currentSpriterTime && (this.force = !0)
        }, K.soundlineFromName = function(t) {
            if (this.soundLineToTrigger && this.soundLineToTrigger.name === t) return this.soundLineToTrigger;
            var e = this.currentAnimation;
            if (e)
                for (var i = 0; i < e.soundlines.length; i++) {
                    var n = e.soundlines[i];
                    if (n && n.name === t) return n
                }
        }, X.prototype.readyForSetup = function() {
            return !0
        }, X.prototype.outsidePaddedViewport = function() {
            return this.isOutsideViewportBox()
        }, X.prototype.actionPointExists = function(t) {
            var e = this.timelineFromName(t);
            return !(!e || !e.currentObjectState || void 0 === e.currentObjectState.x)
        }, X.prototype.objectExists = function(t) {
            var e = this.timelineFromName(t);
            return !(!e || !e.currentObjectState || void 0 === e.currentObjectState.x)
        }, X.prototype.OnAnimFinished = function(t) {
            return this.currentAnimation.name.toLowerCase() === t.toLowerCase()
        }, X.prototype.OnSoundTriggered = function() {
            return !0
        }, X.prototype.OnEventTriggered = function(t) {
            if (t === this.eventToTrigger) return !0
        }, X.prototype.tagActive = function(t, e) {
            var i = this.currentAnimation;
            if (i) {
                if (!e) return this.tagStatus(t, i.meta);
                var n = this.timelineFromName(e);
                if (n) return this.tagStatus(t, n.meta)
            }
            return !1
        }, X.prototype.OnSoundVolumeChangeTriggered = function() {
            return !0
        }, X.prototype.OnSoundPanningChangeTriggered = function() {
            return !0
        }, X.prototype.OnAnyAnimFinished = function() {
            return !0
        }, X.prototype.CompareCurrentKey = function(t, e) {
            return cr.do_cmp(this.currentFrame(), t, e)
        }, X.prototype.CompareCurrentTime = function(t, e, i) {
            if (0 === i) return cr.do_cmp(this.currentSpriterTime, t, e);
            var n = this.currentAnimation;
            return !!n && cr.do_cmp(this.currentSpriterTime / this.currentAnimation.length, t, e)
        }, X.prototype.CompareAnimation = function(t) {
            var e = this.secondAnimation;
            if (e && e.name === t && this.blendEndTime > 0) return !0;
            var i = this.currentAnimation;
            return !(!i || i.name !== t)
        }, X.prototype.CompareEntity = function(t) {
            var e = this.entity;
            return !(!e || e.name !== t)
        }, X.prototype.AnimationPaused = function() {
            return !this.animPlaying
        }, X.prototype.AnimationLooping = function() {
            var t = this.currentAnimation;
            return !(!t || "true" !== t.looping)
        }, X.prototype.isMirrored = function() {
            return this.xFlip
        }, X.prototype.isFlipped = function() {
            return this.yFlip
        }, q.cnds = new X, Y.prototype.setPlaybackSpeedRatio = function(t) {
            this.speedRatio = t
        }, Y.prototype.setVisible = function(t) {
            1 === t ? this.visible = !0 : this.visible = !1
        }, Y.prototype.setOpacity = function(t) {
            this.opacity = o(0, 1, t / 100)
        }, Y.prototype.setAutomaticPausing = function(t, e, i, n, r) {
            this.pauseWhenOutsideBuffer = t, this.leftBuffer = e, this.rightBuffer = i, this.topBuffer = n, this.bottomBuffer = r
        }, Y.prototype.setObjectScaleRatio = function(t, e, i) {
            this.scaleRatio = t, this.xFlip = e, this.yFlip = i, this.force = !0
        }, Y.prototype.setObjectXFlip = function(t) {
            this.xFlip = t, this.force = !0
        }, Y.prototype.setIgnoreGlobalTimeScale = function(t) {
            this.ignoreGlobalTimeScale = 1 == t
        }, Y.prototype.findSpriterObject = function(t) {
            if (this.currentAnimation)
                for (var e = this.currentAnimation.timelines, i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (n && n.c2Object && n.c2Object.inst == t.getFirstPicked()) return void(this.lastFoundObject = n.name)
                }
        }, Y.prototype.setObjectYFlip = function(t) {
            this.yFlip = t, this.force = !0
        };
        var ut = 2,
            pt = 3,
            dt = 4;
        Y.prototype.setC2ObjectToSpriterObject = function(t, e, i) {
            this.objectsToSet.push(new a(t, i, e))
        }, Y.prototype.setAnimation = function(t, e, i) {
            this.setAnim(t, e, i)
        }, Y.prototype.setSecondAnim = function(t) {
            this.secondAnimation = this.getAnimFromEntity(t), this.secondAnimation === this.currentAnimation && (this.secondAnimation = null)
        }, Y.prototype.stopSecondAnim = function(t) {
            this.secondAnimation = null, this.animBlend = 0
        }, Y.prototype.setAnimBlendRatio = function(t) {
            this.animBlend = t
        }, Y.prototype.setEnt = function(t, e) {
            var i = e;
            if (!this.entity || !this.currentAnimation || this.entity.name != t || this.currentAnimation.name != e) {
                var n = !1;
                this.currentAnimation && "" === i && (i = this.currentAnimation.name);
                var r = !1;
                i === this.currentAnimation.name && (r = !0), "" === t || this.entity && t == this.entity.name || (this.setEntTo(t), n = !0), "" === i || !n && r || this.setAnimTo(i)
            }
        }, Y.prototype.playAnimTo = function(t, e) {
            if (0 === t) {
                var i = this.currentAnimation.mainlineKeys;
                if (i) {
                    var n = i[e];
                    if (!n) return void(this.playTo = -1);
                    this.playTo = n.time
                }
            } else 1 == t ? this.playTo = e : 2 == t && (this.playTo = e * this.currentAnimation.length); if (this.playTo == this.currentSpriterTime) return void(this.playTo = -1);
            var r = 1;
            if ("true" == this.currentAnimation.looping) {
                var s = 0,
                    a = 0;
                this.playTo > this.currentSpriterTime ? (s = this.playTo - this.currentSpriterTime, a = this.currentAnimation.length - this.playTo + this.currentSpriterTime) : (s = this.playTo + (this.currentAnimation.length - this.currentSpriterTime), a = this.currentSpriterTime - this.playTo), a < s && (r = -1)
            } else this.playTo < this.currentSpriterTime && (r = -1);
            this.speedRatio = Math.abs(this.speedRatio) * r, this.animPlaying = !0, this.tick2()
        }, Y.prototype.associateTypeWithName = function(t, e) {
            for (var i = this.c2ObjectArray, n = this.objectArray, r = 0, s = n.length; r < s; r++) {
                var a = n[r];
                if (e == a.name) {
                    a.fullTypeName = t.name;
                    var o = i[r];
                    if (t && !o.inst) {
                        o.type = t;
                        var h = this.get_iid(),
                            c = t.instances[h];
                        o.inst = c;
                        for (var l = this.entity.animations, u = 0, p = l.length; u < p; u++)
                            for (var d = l[u], f = d.timelines, g = 0, m = f.length; g < m; g++) {
                                var y = f[g];
                                e != y.name && a != y.object || (y.c2Object = o)
                            }
                    }
                    break
                }
            }
        }, Y.prototype.setAnimationLoop = function(t) {
            var e = this.currentAnimation;
            this.changeAnimTo && (e = this.changeAnimTo), e ? 0 === t ? e.looping = "false" : 1 == t && (e.looping = "true") : 0 === t ? this.startingLoopType = "false" : 1 == t && (this.startingLoopType = "true")
        }, Y.prototype.setAnimationTime = function(t, e) {
            this.setAnimTime(t, e)
        }, Y.prototype.pauseAnimation = function() {
            this.animPlaying = !1
        }, Y.prototype.resumeAnimation = function() {
            this.animPlaying === !1 && (this.lastKnownTime = this.getNowTime()), this.animPlaying = !0;
            var t = this.currentAnimation;
            t && (this.speedRatio > 0 ? this.currentSpriterTime == t.length && (this.currentSpriterTime = 0) : 0 === this.currentSpriterTime && (this.currentSpriterTime = this.currentAnimation.length))
        }, Y.prototype.removeAllCharMaps = function() {
            for (var t = this.c2ObjectArray, e = 0; e < t.length; e++) {
                var i = t[e];
                i.appliedMap = []
            }
            this.tick2(!0)
        }, Y.prototype.appendCharMap = function(t) {
            for (var e = this.c2ObjectArray, i = 0; i < e.length; i++) {
                var n = e[i];
                if (n && n.obj) {
                    var r = n.obj.charMaps[t];
                    if (r)
                        for (var s = 0; s < r.length; s++) {
                            var a = r[s];
                            a && (n.appliedMap[a.oldFrame] = a.newFrame)
                        }
                }
            }
            this.tick2(!0)
        }, Y.prototype.overrideObjectComponent = function(t, e, i) {
            var n = this.objectOverrides[t];
            "undefined" == typeof n && (this.objectOverrides[t] = {}, n = this.objectOverrides[t]), n[e] = i
        }, Y.prototype.overrideBonesWithIk = function(t, e, i, n, r) {
            var s = this.boneIkOverrides[t];
            "undefined" == typeof s && (this.boneIkOverrides[t] = {}, s = this.boneIkOverrides[t]), s.targetX = i, s.targetY = n, s.childBone = e, s.additionalLength = r
        }, q.acts = new Y, H.prototype.time = function(t) {
            t.set_int(this.currentSpriterTime)
        }, H.prototype.val = function(t, e, i) {
            var n = this.currentAnimation;
            if (n) {
                if (!i) return void this.varStatus(t, e, n.meta);
                var r = this.timelineFromName(i);
                if (r) return void this.varStatus(t, e, r.meta)
            }
            t.set_float(0)
        }, H.prototype.pointX = function(t, e) {
            var i = this.timelineFromName(e);
            return i && i.currentObjectState && void 0 !== i.currentObjectState.x ? void t.set_float(i.currentObjectState.x) : void t.set_float(0)
        }, H.prototype.pointY = function(t, e) {
            var i = this.timelineFromName(e);
            return i && i.currentObjectState && void 0 !== i.currentObjectState.y ? void t.set_float(i.currentObjectState.y) : void t.set_float(0)
        }, H.prototype.pointAngle = function(t, e) {
            var i = this.timelineFromName(e);
            return i && i.currentObjectState && void 0 !== i.currentObjectState.angle ? void t.set_float(cr.to_degrees(i.currentObjectState.angle)) : void t.set_float(0)
        }, H.prototype.objectX = function(t, e) {
            var i = this.timelineFromName(e);
            return i && i.currentObjectState && void 0 !== i.currentObjectState.x ? void t.set_float(i.currentObjectState.x) : void t.set_float(0)
        }, H.prototype.objectY = function(t, e) {
            var i = this.timelineFromName(e);
            return i && i.currentObjectState && void 0 !== i.currentObjectState.y ? void t.set_float(i.currentObjectState.y) : void t.set_float(0)
        }, H.prototype.objectAngle = function(t, e) {
            var i = this.timelineFromName(e);
            return i && i.currentObjectState && void 0 !== i.currentObjectState.angle ? void t.set_float(cr.to_degrees(i.currentObjectState.angle)) : void t.set_float(0)
        }, H.prototype.timeRatio = function(t) {
            this.currentAnimation ? t.set_float(this.currentSpriterTime / this.currentAnimation.length) : t.set_float(0)
        }, H.prototype.ScaleRatio = function(t) {
            t.set_float(this.scaleRatio)
        }, H.prototype.key = function(t) {
            t.set_int(this.currentFrame())
        }, H.prototype.PlayTo = function(t) {
            t.set_int(this.playTo)
        }, H.prototype.animationName = function(t) {
            this.changeAnimTo ? t.set_string(this.changeAnimTo.name) : this.currentAnimation ? t.set_string(this.currentAnimation.name) : t.set_string("")
        }, H.prototype.animationLength = function(t) {
            this.currentAnimation ? t.set_int(this.currentAnimation.length) : t.set_int(0)
        }, H.prototype.speedRatio = function(t) {
            t.set_float(this.speedRatio)
        }, H.prototype.secondAnimationName = function(t) {
            this.secondAnimation ? t.set_string(this.secondAnimation.name) : t.set_string("")
        }, H.prototype.entityName = function(t) {
            this.entity ? t.set_string(this.entity.name) : t.set_string("")
        }, H.prototype.PlayToTimeLeft = function(t) {
            if (this.playTo < 0) return t.set_float(0);
            if ("true" == this.currentAnimation.looping) {
                return speedRatio >= 0 ? this.playTo > this.currentSpriterTime ? t.set_float(this.playTo - this.currentSpriterTime) : t.set_float(this.playTo + (this.currentAnimation.length - this.currentSpriterTime)) : this.playTo > this.currentSpriterTime ? t.set_float(this.currentAnimation.length - this.playTo + this.currentSpriterTime) : t.set_float(this.currentSpriterTime - this.playTo)
            }
            return t.set_float(Math.abs(this.playTo - this.currentSpriterTime))
        }, H.prototype.triggeredSound = function(t) {
            t.set_string(this.soundToTrigger)
        }, H.prototype.triggeredSoundTag = function(t) {
            return this.soundLineToTrigger ? void t.set_string(this.soundLineToTrigger.name) : void t.set_string("")
        }, H.prototype.soundVolume = function(t, e) {
            var i = this.soundlineFromName(e);
            return i && i.currentObjectState ? void t.set_float(i.currentObjectState.volume) : void t.set_float(0)
        }, H.prototype.soundPanning = function(t, e) {
            var i = this.soundlineFromName(e);
            return i && i.currentObjectState ? void t.set_float(i.currentObjectState.panning) : void t.set_float(0)
        }, H.prototype.blendRatio = function(t) {
            t.set_float(this.animBlend)
        }, H.prototype.Opacity = function(t) {
            t.set_float(100 * this.opacity)
        }, H.prototype.BBoxLeft = function(t) {
            this.update_bbox(), t.set_float(this.bbox.left)
        }, H.prototype.BBoxTop = function(t) {
            this.update_bbox(), t.set_float(this.bbox.top)
        }, H.prototype.BBoxRight = function(t) {
            this.update_bbox(), t.set_float(this.bbox.right)
        }, H.prototype.BBoxBottom = function(t) {
            this.update_bbox(), t.set_float(this.bbox.bottom)
        }, H.prototype.foundObject = function(t) {
            t.set_string(this.lastFoundObject)
        }, q.exps = new H
    }(), cr.plugins_.TiledBg = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.plugins_.TiledBg.prototype;
        n.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.pattern = null, this.webGL_texture = null)
        }, r.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, r.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat));
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
            }
        }, r.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, r.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, r.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, n.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {
            this.visible = 0 === this.properties[0], this.rcTex = new cr.rect(0, 0, 0, 0), this.has_own_texture = !1, this.texture_img = this.type.texture_img, this.runtime.glwrap ? (this.type.loadTextures(), this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")), this.pattern = this.type.pattern)
        }, s.afterLoad = function() {
            this.has_own_texture = !1, this.texture_img = this.type.texture_img
        }, s.onDestroy = function() {
            this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, s.draw = function(t) {
            t.globalAlpha = this.opacity, t.save(), t.fillStyle = this.pattern;
            var e = this.x,
                i = this.y;
            this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i));
            var n = -(this.hotspotX * this.width),
                r = -(this.hotspotY * this.height),
                s = n % this.texture_img.width,
                a = r % this.texture_img.height;
            s < 0 && (s += this.texture_img.width), a < 0 && (a += this.texture_img.height), t.translate(e, i), t.rotate(this.angle), t.translate(s, a), t.fillRect(n - s, r - a, this.width, this.height), t.restore()
        }, s.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, s.drawGL = function(t) {
            t.setTexture(this.webGL_texture), t.setOpacity(this.opacity);
            var e = this.rcTex;
            e.right = this.width / this.texture_img.width, e.bottom = this.height / this.texture_img.height;
            var i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var n = Math.round(this.x) - this.x,
                    r = Math.round(this.y) - this.y;
                t.quadTex(i.tlx + n, i.tly + r, i.trx + n, i.try_ + r, i.brx + n, i.bry + r, i.blx + n, i.bly + r, e)
            } else t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e)
        }, t.prototype.OnURLLoaded = function() {
            return !0
        }, n.cnds = new t, e.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, e.prototype.LoadURL = function(t, e) {
            var i = new Image,
                n = this;
            i.onload = function() {
                n.texture_img = i, n.runtime.glwrap ? (n.has_own_texture && n.webGL_texture && n.runtime.glwrap.deleteTexture(n.webGL_texture), n.webGL_texture = n.runtime.glwrap.loadTexture(i, !0, n.runtime.linearSampling)) : n.pattern = n.runtime.ctx.createPattern(i, "repeat"), n.has_own_texture = !0, n.runtime.redraw = !0, n.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, n)
            }, "data:" !== t.substr(0, 5) && 0 === e && (i.crossOrigin = "anonymous"), this.runtime.setImageSrc(i, t)
        }, n.acts = new e, i.prototype.ImageWidth = function(t) {
            t.set_float(this.texture_img.width)
        }, i.prototype.ImageHeight = function(t) {
            t.set_float(this.texture_img.height)
        }, n.exps = new i
    }(), cr.plugins_.Touch = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            l = t.x, u = t.y, p = t.z
        }

        function e(t, e, i, r) {
            var s;
            return s = f.length ? f.pop() : new n, s.init(t, e, i, r), s
        }

        function i(t) {
            f.length < 100 && f.push(t)
        }

        function n() {
            this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
        }

        function r() {}

        function s() {}
        var a = cr.plugins_.Touch.prototype;
        a.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var o = a.Type.prototype;
        o.onCreate = function() {}, a.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.touches = [], this.mouseDown = !1
        };
        var h = a.Instance.prototype,
            c = {
                left: 0,
                top: 0
            };
        h.findTouch = function(t) {
            var e, i;
            for (e = 0, i = this.touches.length; e < i; e++)
                if (this.touches[e].id === t) return e;
            return -1
        };
        var l = 0,
            u = 0,
            p = 0,
            d = null,
            f = [],
            g = 15,
            m = 500,
            y = 333,
            _ = 25;
        n.prototype.init = function(t, e, i, n) {
            var r = cr.performance_now();
            this.time = r, this.lasttime = r, this.starttime = r, this.startx = t, this.starty = e, this.x = t, this.y = e, this.lastx = t, this.lasty = e, this.width = 0, this.height = 0, this.pressure = 0, this.id = i, this.startindex = n, this.triggeredHold = !1, this.tooFarForHold = !1
        }, n.prototype.update = function(t, e, i, n, r, s) {
            this.lasttime = this.time, this.time = t, this.lastx = this.x, this.lasty = this.y, this.x = e, this.y = i, this.width = n, this.height = r, this.pressure = s, !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= g && (this.tooFarForHold = !0)
        }, n.prototype.maybeTriggerHold = function(t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime >= m && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < g && (this.triggeredHold = !0, t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t), t.getTouchIndex = 0)
            }
        };
        var v = -1e3,
            b = -1e3,
            w = -1e4;
        n.prototype.maybeTriggerTap = function(t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime <= y && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < g && (t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, i - w <= 2 * y && cr.distanceTo(v, b, this.x, this.y) < _ ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t), v = -1e3, b = -1e3, w = -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t), v = this.x, b = this.y, w = i), t.getTouchIndex = 0)
            }
        }, h.onCreate = function() {
            d = this, this.isWindows8 = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.orient_alpha = 0, this.orient_beta = 0, this.orient_gamma = 0, this.acc_g_x = 0, this.acc_g_y = 0, this.acc_g_z = 0, this.acc_x = 0, this.acc_y = 0, this.acc_z = 0, this.curTouchX = 0, this.curTouchY = 0, this.trigger_index = 0, this.trigger_id = 0, this.getTouchIndex = 0, this.useMouseInput = 0 !== this.properties[0];
            var e = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas,
                i = document;
            this.runtime.isDirectCanvas ? i = e = window.Canvas : this.runtime.isCocoonJs && (i = e = window);
            var n = this;
            if ("undefined" != typeof PointerEvent ? (e.addEventListener("pointerdown", function(t) {
                n.onPointerStart(t)
            }, !1), e.addEventListener("pointermove", function(t) {
                n.onPointerMove(t)
            }, !1), i.addEventListener("pointerup", function(t) {
                n.onPointerEnd(t, !1)
            }, !1), i.addEventListener("pointercancel", function(t) {
                n.onPointerEnd(t, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), this.runtime.canvas.addEventListener("gesturehold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("gesturehold", function(t) {
                t.preventDefault()
            }, !1))) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", function(t) {
                n.onPointerStart(t)
            }, !1), e.addEventListener("MSPointerMove", function(t) {
                n.onPointerMove(t)
            }, !1), i.addEventListener("MSPointerUp", function(t) {
                n.onPointerEnd(t, !1)
            }, !1), i.addEventListener("MSPointerCancel", function(t) {
                n.onPointerEnd(t, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1))) : (e.addEventListener("touchstart", function(t) {
                n.onTouchStart(t)
            }, !1), e.addEventListener("touchmove", function(t) {
                n.onTouchMove(t)
            }, !1), i.addEventListener("touchend", function(t) {
                n.onTouchEnd(t, !1)
            }, !1), i.addEventListener("touchcancel", function(t) {
                n.onTouchEnd(t, !0)
            }, !1)), this.isWindows8) {
                var r = function(t) {
                        var e = t.reading;
                        n.acc_x = e.accelerationX, n.acc_y = e.accelerationY, n.acc_z = e.accelerationZ
                    },
                    s = function(t) {
                        var e = t.reading;
                        n.orient_alpha = e.yawDegrees, n.orient_beta = e.pitchDegrees, n.orient_gamma = e.rollDegrees
                    },
                    a = Windows.Devices.Sensors.Accelerometer.getDefault();
                a && (a.reportInterval = Math.max(a.minimumReportInterval, 16), a.addEventListener("readingchanged", r));
                var o = Windows.Devices.Sensors.Inclinometer.getDefault();
                o && (o.reportInterval = Math.max(o.minimumReportInterval, 16), o.addEventListener("readingchanged", s)), document.addEventListener("visibilitychange", function(t) {
                    document.hidden || document.msHidden ? (a && a.removeEventListener("readingchanged", r), o && o.removeEventListener("readingchanged", s)) : (a && a.addEventListener("readingchanged", r), o && o.addEventListener("readingchanged", s))
                }, !1)
            } else window.addEventListener("deviceorientation", function(t) {
                n.orient_alpha = t.alpha || 0, n.orient_beta = t.beta || 0, n.orient_gamma = t.gamma || 0
            }, !1), window.addEventListener("devicemotion", function(t) {
                t.accelerationIncludingGravity && (n.acc_g_x = t.accelerationIncludingGravity.x || 0, n.acc_g_y = t.accelerationIncludingGravity.y || 0, n.acc_g_z = t.accelerationIncludingGravity.z || 0), t.acceleration && (n.acc_x = t.acceleration.x || 0, n.acc_y = t.acceleration.y || 0, n.acc_z = t.acceleration.z || 0)
            }, !1);
            this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function(t) {
                n.onMouseMove(t)
            }), jQuery(document).mousedown(function(t) {
                n.onMouseDown(t)
            }), jQuery(document).mouseup(function(t) {
                n.onMouseUp(t)
            })), !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(t, null, {
                frequency: 40
            }), this.runtime.tick2Me(this)
        }, h.onPointerMove = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && t.preventDefault();
                var e = this.findTouch(t.pointerId),
                    i = cr.performance_now();
                if (e >= 0) {
                    var n = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset(),
                        r = this.touches[e];
                    if (i - r.time < 2) return;
                    r.update(i, t.pageX - n.left, t.pageY - n.top, t.width || 0, t.height || 0, t.pressure || 0)
                }
            }
        }, h.onPointerStart = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var i = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset(),
                    n = t.pageX - i.left,
                    r = t.pageY - i.top;
                cr.performance_now();
                this.trigger_index = this.touches.length, this.trigger_id = t.pointerId, this.touches.push(e(n, r, t.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = n, this.curTouchY = r, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
            }
        }, h.onPointerEnd = function(t, e) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var n = this.findTouch(t.pointerId);
                this.trigger_index = n >= 0 ? this.touches[n].startindex : -1, this.trigger_id = n >= 0 ? this.touches[n].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), n >= 0 && (e || this.touches[n].maybeTriggerTap(this, n), i(this.touches[n]), this.touches.splice(n, 1)), this.runtime.isInUserInputEvent = !1
            }
        }, h.onTouchMove = function(t) {
            t.preventDefault && t.preventDefault();
            var e, i, n, r, s = cr.performance_now();
            for (e = 0, i = t.changedTouches.length; e < i; e++) {
                n = t.changedTouches[e];
                var a = this.findTouch(n.identifier);
                if (a >= 0) {
                    var o = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset();
                    if (r = this.touches[a], s - r.time < 2) continue;
                    var h = 2 * (n.radiusX || n.webkitRadiusX || n.mozRadiusX || n.msRadiusX || 0),
                        l = 2 * (n.radiusY || n.webkitRadiusY || n.mozRadiusY || n.msRadiusY || 0),
                        u = n.force || n.webkitForce || n.mozForce || n.msForce || 0;
                    r.update(s, n.pageX - o.left, n.pageY - o.top, h, l, u)
                }
            }
        }, h.onTouchStart = function(t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var i = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset();
            cr.performance_now();
            this.runtime.isInUserInputEvent = !0;
            var n, r, s, a;
            for (n = 0, r = t.changedTouches.length; n < r; n++)
                if (s = t.changedTouches[n], a = this.findTouch(s.identifier), a === -1) {
                    var o = s.pageX - i.left,
                        h = s.pageY - i.top;
                    this.trigger_index = this.touches.length, this.trigger_id = s.identifier, this.touches.push(e(o, h, s.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = o, this.curTouchY = h, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
                }
            this.runtime.isInUserInputEvent = !1
        }, h.onTouchEnd = function(t, e) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.runtime.isInUserInputEvent = !0;
            var n, r, s, a;
            for (n = 0, r = t.changedTouches.length; n < r; n++) s = t.changedTouches[n], a = this.findTouch(s.identifier), a >= 0 && (this.trigger_index = this.touches[a].startindex, this.trigger_id = this.touches[a].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), e || this.touches[a].maybeTriggerTap(this, a), i(this.touches[a]), this.touches.splice(a, 1));
            this.runtime.isInUserInputEvent = !1
        }, h.getAlpha = function() {
            return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== p ? 90 * p : this.orient_alpha
        }, h.getBeta = function() {
            return this.runtime.isCordova && 0 === this.orient_beta && 0 !== u ? 90 * u : this.orient_beta
        }, h.getGamma = function() {
            return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== l ? 90 * l : this.orient_gamma
        };
        h.onMouseDown = function(t) {
            var e = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                },
                i = {
                    changedTouches: [e]
                };
            this.onTouchStart(i), this.mouseDown = !0
        }, h.onMouseMove = function(t) {
            if (this.mouseDown) {
                var e = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    },
                    i = {
                        changedTouches: [e]
                    };
                this.onTouchMove(i)
            }
        }, h.onMouseUp = function(t) {
            t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0;
            var e = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                },
                i = {
                    changedTouches: [e]
                };
            this.onTouchEnd(i), this.mouseDown = !1
        }, h.tick2 = function() {
            var t, e, i, n = cr.performance_now();
            for (t = 0, e = this.touches.length; t < e; ++t) i = this.touches[t], i.time <= n - 50 && (i.lasttime = n), i.maybeTriggerHold(this, t)
        }, r.prototype.OnTouchStart = function() {
            return !0
        }, r.prototype.OnTouchEnd = function() {
            return !0
        }, r.prototype.IsInTouch = function() {
            return this.touches.length
        }, r.prototype.OnTouchObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        };
        var x = [];
        r.prototype.IsTouchingObject = function(t) {
            if (!t) return !1;
            var e, i, n, r, s, a, o = t.getCurrentSol(),
                h = o.getObjects();
            for (n = 0, r = h.length; n < r; n++) {
                var c = h[n];
                for (c.update_bbox(), s = 0, a = this.touches.length; s < a; s++) {
                    var l = this.touches[s];
                    if (e = c.layer.canvasToLayer(l.x, l.y, !0), i = c.layer.canvasToLayer(l.x, l.y, !1), c.contains_pt(e, i)) {
                        x.push(c);
                        break
                    }
                }
            }
            return !!x.length && (o.select_all = !1, cr.shallowAssignArray(o.instances, x), t.applySolToContainer(), cr.clearArray(x), !0)
        }, r.prototype.CompareTouchSpeed = function(t, e, i) {
            if (t = Math.floor(t), t < 0 || t >= this.touches.length) return !1;
            var n = this.touches[t],
                r = cr.distanceTo(n.x, n.y, n.lastx, n.lasty),
                s = (n.time - n.lasttime) / 1e3,
                a = 0;
            return s > 0 && (a = r / s), cr.do_cmp(a, e, i)
        }, r.prototype.OrientationSupported = function() {
            return "undefined" != typeof window.DeviceOrientationEvent
        }, r.prototype.MotionSupported = function() {
            return "undefined" != typeof window.DeviceMotionEvent
        }, r.prototype.CompareOrientation = function(t, e, i) {
            var n = 0;
            return n = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(), cr.do_cmp(n, e, i)
        }, r.prototype.CompareAcceleration = function(t, e, i) {
            var n = 0;
            return 0 === t ? n = this.acc_g_x : 1 === t ? n = this.acc_g_y : 2 === t ? n = this.acc_g_z : 3 === t ? n = this.acc_x : 4 === t ? n = this.acc_y : 5 === t && (n = this.acc_z), cr.do_cmp(n, e, i)
        }, r.prototype.OnNthTouchStart = function(t) {
            return t = Math.floor(t), t === this.trigger_index
        }, r.prototype.OnNthTouchEnd = function(t) {
            return t = Math.floor(t), t === this.trigger_index
        }, r.prototype.HasNthTouch = function(t) {
            return t = Math.floor(t), this.touches.length >= t + 1
        }, r.prototype.OnHoldGesture = function() {
            return !0
        }, r.prototype.OnTapGesture = function() {
            return !0
        }, r.prototype.OnDoubleTapGesture = function() {
            return !0
        }, r.prototype.OnHoldGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, r.prototype.OnTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, r.prototype.OnDoubleTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, a.cnds = new r, s.prototype.TouchCount = function(t) {
            t.set_int(this.touches.length)
        }, s.prototype.X = function(t, e) {
            var i = this.getTouchIndex;
            if (i < 0 || i >= this.touches.length) return void t.set_float(0);
            var n, r, s, a, o;
            cr.is_undefined(e) ? (n = this.runtime.getLayerByNumber(0), r = n.scale, s = n.zoomRate, a = n.parallaxX, o = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)), n.scale = r, n.zoomRate = s, n.parallaxX = a, n.angle = o) : (n = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e), n ? t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)) : t.set_float(0))
        }, s.prototype.XAt = function(t, e, i) {
            if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
            var n, r, s, a, o;
            cr.is_undefined(i) ? (n = this.runtime.getLayerByNumber(0), r = n.scale, s = n.zoomRate, a = n.parallaxX, o = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)), n.scale = r, n.zoomRate = s, n.parallaxX = a, n.angle = o) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), n ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0))
        }, s.prototype.XForID = function(t, e, i) {
            var n = this.findTouch(e);
            if (n < 0) return void t.set_float(0);
            var r, s, a, o, h, c = this.touches[n];
            cr.is_undefined(i) ? (r = this.runtime.getLayerByNumber(0), s = r.scale, a = r.zoomRate, o = r.parallaxX, h = r.angle, r.scale = 1, r.zoomRate = 1, r.parallaxX = 1, r.angle = 0, t.set_float(r.canvasToLayer(c.x, c.y, !0)), r.scale = s, r.zoomRate = a, r.parallaxX = o, r.angle = h) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), r ? t.set_float(r.canvasToLayer(c.x, c.y, !0)) : t.set_float(0))
        }, s.prototype.Y = function(t, e) {
            var i = this.getTouchIndex;
            if (i < 0 || i >= this.touches.length) return void t.set_float(0);
            var n, r, s, a, o;
            cr.is_undefined(e) ? (n = this.runtime.getLayerByNumber(0), r = n.scale, s = n.zoomRate, a = n.parallaxY, o = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)), n.scale = r, n.zoomRate = s, n.parallaxY = a, n.angle = o) : (n = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e), n ? t.set_float(n.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)) : t.set_float(0))
        }, s.prototype.YAt = function(t, e, i) {
            if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
            var n, r, s, a, o;
            cr.is_undefined(i) ? (n = this.runtime.getLayerByNumber(0), r = n.scale, s = n.zoomRate, a = n.parallaxY, o = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)), n.scale = r, n.zoomRate = s, n.parallaxY = a, n.angle = o) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), n ? t.set_float(n.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0))
        }, s.prototype.YForID = function(t, e, i) {
            var n = this.findTouch(e);
            if (n < 0) return void t.set_float(0);
            var r, s, a, o, h, c = this.touches[n];
            cr.is_undefined(i) ? (r = this.runtime.getLayerByNumber(0), s = r.scale, a = r.zoomRate, o = r.parallaxY, h = r.angle, r.scale = 1, r.zoomRate = 1, r.parallaxY = 1, r.angle = 0, t.set_float(r.canvasToLayer(c.x, c.y, !1)), r.scale = s, r.zoomRate = a, r.parallaxY = o, r.angle = h) : (r = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), r ? t.set_float(r.canvasToLayer(c.x, c.y, !1)) : t.set_float(0))
        }, s.prototype.AbsoluteX = function(t) {
            this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
        }, s.prototype.AbsoluteXAt = function(t, e) {
            return e = Math.floor(e), e < 0 || e >= this.touches.length ? void t.set_float(0) : void t.set_float(this.touches[e].x)
        }, s.prototype.AbsoluteXForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) return void t.set_float(0);
            var n = this.touches[i];
            t.set_float(n.x)
        }, s.prototype.AbsoluteY = function(t) {
            this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
        }, s.prototype.AbsoluteYAt = function(t, e) {
            return e = Math.floor(e), e < 0 || e >= this.touches.length ? void t.set_float(0) : void t.set_float(this.touches[e].y)
        }, s.prototype.AbsoluteYForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) return void t.set_float(0);
            var n = this.touches[i];
            t.set_float(n.y)
        }, s.prototype.SpeedAt = function(t, e) {
            if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
            var i = this.touches[e],
                n = cr.distanceTo(i.x, i.y, i.lastx, i.lasty),
                r = (i.time - i.lasttime) / 1e3;
            0 === r ? t.set_float(0) : t.set_float(n / r)
        }, s.prototype.SpeedForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) return void t.set_float(0);
            var n = this.touches[i],
                r = cr.distanceTo(n.x, n.y, n.lastx, n.lasty),
                s = (n.time - n.lasttime) / 1e3;
            0 === s ? t.set_float(0) : t.set_float(r / s)
        }, s.prototype.AngleAt = function(t, e) {
            if (e = Math.floor(e), e < 0 || e >= this.touches.length) return void t.set_float(0);
            var i = this.touches[e];
            t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
        }, s.prototype.AngleForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) return void t.set_float(0);
            var n = this.touches[i];
            t.set_float(cr.to_degrees(cr.angleTo(n.lastx, n.lasty, n.x, n.y)))
        }, s.prototype.Alpha = function(t) {
            t.set_float(this.getAlpha())
        }, s.prototype.Beta = function(t) {
            t.set_float(this.getBeta())
        }, s.prototype.Gamma = function(t) {
            t.set_float(this.getGamma())
        }, s.prototype.AccelerationXWithG = function(t) {
            t.set_float(this.acc_g_x)
        }, s.prototype.AccelerationYWithG = function(t) {
            t.set_float(this.acc_g_y)
        }, s.prototype.AccelerationZWithG = function(t) {
            t.set_float(this.acc_g_z)
        }, s.prototype.AccelerationX = function(t) {
            t.set_float(this.acc_x)
        }, s.prototype.AccelerationY = function(t) {
            t.set_float(this.acc_y)
        }, s.prototype.AccelerationZ = function(t) {
            t.set_float(this.acc_z)
        }, s.prototype.TouchIndex = function(t) {
            t.set_int(this.trigger_index)
        }, s.prototype.TouchID = function(t) {
            t.set_float(this.trigger_id)
        }, s.prototype.WidthForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) return void t.set_float(0);
            var n = this.touches[i];
            t.set_float(n.width)
        }, s.prototype.HeightForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) return void t.set_float(0);
            var n = this.touches[i];
            t.set_float(n.height)
        }, s.prototype.PressureForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) return void t.set_float(0);
            var n = this.touches[i];
            t.set_float(n.pressure)
        }, a.exps = new s
    }(), cr.behaviors.Anchor = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.behaviors.Anchor.prototype;
        n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {
            this.anch_left = this.properties[0], this.anch_top = this.properties[1], this.anch_right = this.properties[2], this.anch_bottom = this.properties[3], this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = 0 !== this.properties[4]
        }, s.saveToJSON = function() {
            return {
                xleft: this.xleft,
                ytop: this.ytop,
                xright: this.xright,
                ybottom: this.ybottom,
                rdiff: this.rdiff,
                bdiff: this.bdiff,
                enabled: this.enabled
            }
        }, s.loadFromJSON = function(t) {
            this.xleft = t.xleft, this.ytop = t.ytop, this.xright = t.xright, this.ybottom = t.ybottom, this.rdiff = t.rdiff, this.bdiff = t.bdiff, this.enabled = t.enabled
        }, s.tick = function() {
            if (this.enabled) {
                var t, e = this.inst.layer,
                    i = this.inst,
                    n = this.inst.bbox;
                0 === this.anch_left ? (i.update_bbox(), t = e.viewLeft + this.xleft - n.left, 0 !== t && (i.x += t, i.set_bbox_changed())) : 1 === this.anch_left && (i.update_bbox(), t = e.viewRight - this.xright - n.left, 0 !== t && (i.x += t, i.set_bbox_changed())), 0 === this.anch_top ? (i.update_bbox(), t = e.viewTop + this.ytop - n.top, 0 !== t && (i.y += t, i.set_bbox_changed())) : 1 === this.anch_top && (i.update_bbox(), t = e.viewBottom - this.ybottom - n.top, 0 !== t && (i.y += t, i.set_bbox_changed())), 1 === this.anch_right && (i.update_bbox(), t = e.viewRight - this.rdiff - n.right, 0 !== t && (i.width += t, i.width < 0 && (i.width = 0), i.set_bbox_changed())), 1 === this.anch_bottom && (i.update_bbox(), t = e.viewBottom - this.bdiff - n.bottom, 0 !== t && (i.height += t, i.height < 0 && (i.height = 0), i.set_bbox_changed()))
            }
        }, n.cnds = new t, e.prototype.SetEnabled = function(t) {
            this.enabled && 0 === t ? this.enabled = !1 : this.enabled || 0 === t || (this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = !0)
        }, n.acts = new e, n.exps = new i
    }(), cr.behaviors.Fade = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.behaviors.Fade.prototype;
        n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {
            this.activeAtStart = 1 === this.properties[0], this.setMaxOpacity = !1, this.fadeInTime = this.properties[1], this.waitTime = this.properties[2], this.fadeOutTime = this.properties[3], this.destroy = this.properties[4], this.stage = this.activeAtStart ? 0 : 3, this.recycled ? this.stageTime.reset() : this.stageTime = new cr.KahanAdder, this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.activeAtStart && (0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0))
        }, s.saveToJSON = function() {
            return {
                fit: this.fadeInTime,
                wt: this.waitTime,
                fot: this.fadeOutTime,
                s: this.stage,
                st: this.stageTime.sum,
                mo: this.maxOpacity
            }
        }, s.loadFromJSON = function(t) {
            this.fadeInTime = t.fit, this.waitTime = t.wt, this.fadeOutTime = t.fot, this.stage = t.s, this.stageTime.reset(), this.stageTime.sum = t.st, this.maxOpacity = t.mo
        }, s.tick = function() {
            this.stageTime.add(this.runtime.getDt(this.inst)), 0 === this.stage && (this.inst.opacity = this.stageTime.sum / this.fadeInTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity >= this.maxOpacity && (this.inst.opacity = this.maxOpacity, this.stage = 1, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeInEnd, this.inst))), 1 === this.stage && this.stageTime.sum >= this.waitTime && (this.stage = 2, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnWaitEnd, this.inst)), 2 === this.stage && 0 !== this.fadeOutTime && (this.inst.opacity = this.maxOpacity - this.stageTime.sum / this.fadeOutTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity < 0 && (this.inst.opacity = 0, this.stage = 3, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeOutEnd, this.inst), 1 === this.destroy && this.runtime.DestroyInstance(this.inst)))
        }, s.doStart = function() {
            this.stage = 0, this.stageTime.reset(), 0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0)
        }, t.prototype.OnFadeOutEnd = function() {
            return !0
        }, t.prototype.OnFadeInEnd = function() {
            return !0
        }, t.prototype.OnWaitEnd = function() {
            return !0
        }, n.cnds = new t, e.prototype.StartFade = function() {
            this.activeAtStart || this.setMaxOpacity || (this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.setMaxOpacity = !0), 3 === this.stage && this.doStart()
        }, e.prototype.RestartFade = function() {
            this.doStart()
        }, e.prototype.SetFadeInTime = function(t) {
            t < 0 && (t = 0), this.fadeInTime = t
        }, e.prototype.SetWaitTime = function(t) {
            t < 0 && (t = 0), this.waitTime = t
        }, e.prototype.SetFadeOutTime = function(t) {
            t < 0 && (t = 0), this.fadeOutTime = t
        }, n.acts = new e, i.prototype.FadeInTime = function(t) {
            t.set_float(this.fadeInTime)
        }, i.prototype.WaitTime = function(t) {
            t.set_float(this.waitTime)
        }, i.prototype.FadeOutTime = function(t) {
            t.set_float(this.fadeOutTime)
        }, n.exps = new i
    }(), cr.behaviors.Pin = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.behaviors.Pin.prototype;
        n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {
            this.pinObject = null, this.pinObjectUid = -1, this.pinAngle = 0, this.pinDist = 0, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = 0;
            var t = this;
            this.recycled || (this.myDestroyCallback = function(e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, s.saveToJSON = function() {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                pa: this.pinAngle,
                pd: this.pinDist,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, s.loadFromJSON = function(t) {
            this.pinObjectUid = t.uid, this.pinAngle = t.pa, this.pinDist = t.pd, this.myStartAngle = t.msa, this.theirStartAngle = t.tsa, this.lastKnownAngle = t.lka, this.mode = t.m
        }, s.afterLoad = function() {
            this.pinObjectUid === -1 ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, s.onInstanceDestroyed = function(t) {
            this.pinObject == t && (this.pinObject = null)
        }, s.onDestroy = function() {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, s.tick = function() {}, s.tick2 = function() {
            if (this.pinObject) {
                this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                var t = this.inst.x,
                    e = this.inst.y;
                if (3 === this.mode || 4 === this.mode) {
                    var i = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y);
                    if (i > this.pinDist || 4 === this.mode && i < this.pinDist) {
                        var n = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y);
                        t = this.pinObject.x + Math.cos(n) * this.pinDist, e = this.pinObject.y + Math.sin(n) * this.pinDist
                    }
                } else t = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist, e = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist;
                var r = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                this.lastKnownAngle = r, 0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === t && this.inst.y === e || (this.inst.x = t, this.inst.y = e, this.inst.set_bbox_changed()), 0 !== this.mode && 2 !== this.mode || this.inst.angle === r || (this.inst.angle = r, this.inst.set_bbox_changed())
            }
        }, t.prototype.IsPinned = function() {
            return !!this.pinObject
        }, n.cnds = new t, e.prototype.Pin = function(t, e) {
            if (t) {
                var i = t.getFirstPicked(this.inst);
                i && (this.pinObject = i, this.pinAngle = cr.angleTo(i.x, i.y, this.inst.x, this.inst.y) - i.angle, this.pinDist = cr.distanceTo(i.x, i.y, this.inst.x, this.inst.y), this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = i.angle, this.mode = e)
            }
        }, e.prototype.Unpin = function() {
            this.pinObject = null
        }, n.acts = new e, i.prototype.PinnedUID = function(t) {
            t.set_int(this.pinObject ? this.pinObject.uid : -1)
        }, n.exps = new i
    }(), cr.behaviors.Rex_pin2imgpt = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.behaviors.Rex_pin2imgpt.prototype;
        n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {
            cr.plugins_.Sprite ? (this.imgptX_get = cr.plugins_.Sprite.prototype.exps.ImagePointX, this.imgptY_get = cr.plugins_.Sprite.prototype.exps.ImagePointY) : (this.imgptX_get = null, this.imgptY_get = null)
        }, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {
            this.pinObject = null, this.pinObjectUid = -1, this.imgpt = null, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = null;
            var t = this;
            this.recycled || (this.myDestroyCallback = function(e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, s.saveToJSON = function() {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                imgpt: this.imgpt,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, s.loadFromJSON = function(t) {
            this.pinObjectUid = t.uid, this.imgpt = t.imgpt, this.myStartAngle = t.msa, this.theirStartAngle = t.tsa, this.lastKnownAngle = t.lka, this.mode = t.m
        }, s.afterLoad = function() {
            this.pinObjectUid === -1 ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, s.onInstanceDestroyed = function(t) {
            this.pinObject == t && (this.pinObject = null)
        }, s.onDestroy = function() {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, s.tick = function() {};
        var a = {
            value: 0,
            set_any: function(t) {
                this.value = t
            },
            set_int: function(t) {
                this.value = t
            },
            set_float: function(t) {
                this.value = t
            },
            set_string: function(t) {
                this.value = t
            }
        };
        s.imgptX_get = function(t, e) {
            return this.type.imgptX_get.call(t, a, e), a.value
        }, s.imgptY_get = function(t, e) {
            return this.type.imgptY_get.call(t, a, e), a.value
        }, s.tick2 = function() {
            if (this.pinObject && this.type.imgptX_get && this.type.imgptY_get) {
                var t = this.imgptX_get(this.pinObject, this.imgpt),
                    e = this.imgptY_get(this.pinObject, this.imgpt);
                if (this.inst.x === t && this.inst.y === e || (this.inst.x = t, this.inst.y = e, this.inst.set_bbox_changed()), 1 == this.mode) {
                    this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                    var i = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                    this.lastKnownAngle = i
                }
                1 == this.mode && this.inst.angle !== i && (this.inst.angle = i, this.inst.set_bbox_changed())
            }
        }, n.cnds = new t, t.prototype.IsPinned = function() {
            return !!this.pinObject
        }, n.acts = new e, e.prototype.Pin = function(t, e, i) {
            if (t) {
                var n = t.getFirstPicked(this.inst);
                n && (this.pinObject = n, this.imgpt = e, this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = n.angle, this.mode = i)
            }
        }, e.prototype.Unpin = function() {
            this.pinObject = null
        }, n.exps = new i, i.prototype.PinnedUID = function(t) {
            t.set_int(this.pinObject ? this.pinObject.uid : -1)
        }
    }(), cr.behaviors.Rotate = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.behaviors.Rotate.prototype;
        n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {
            this.speed = cr.to_radians(this.properties[0]), this.acc = cr.to_radians(this.properties[1])
        }, s.saveToJSON = function() {
            return {
                speed: this.speed,
                acc: this.acc
            }
        }, s.loadFromJSON = function(t) {
            this.speed = t.speed, this.acc = t.acc
        }, s.tick = function() {
            var t = this.runtime.getDt(this.inst);
            0 !== t && (0 !== this.acc && (this.speed += this.acc * t), 0 !== this.speed && (this.inst.angle = cr.clamp_angle(this.inst.angle + this.speed * t), this.inst.set_bbox_changed()))
        }, n.cnds = new t, e.prototype.SetSpeed = function(t) {
            this.speed = cr.to_radians(t)
        }, e.prototype.SetAcceleration = function(t) {
            this.acc = cr.to_radians(t)
        }, n.acts = new e, i.prototype.Speed = function(t) {
            t.set_float(cr.to_degrees(this.speed))
        }, i.prototype.Acceleration = function(t) {
            t.set_float(cr.to_degrees(this.acc))
        }, n.exps = new i
    }(), cr.behaviors.Sin = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.behaviors.Sin.prototype;
        n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.i = 0
        };
        var s = n.Instance.prototype,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = 3 * Math.PI / 2;
        s.onCreate = function() {
            this.active = 1 === this.properties[0], this.movement = this.properties[1], this.wave = this.properties[2], this.period = this.properties[3], this.period += Math.random() * this.properties[4], 0 === this.period ? this.i = 0 : (this.i = this.properties[5] / this.period * a, this.i += Math.random() * this.properties[6] / this.period * a), this.mag = this.properties[7], this.mag += Math.random() * this.properties[8], this.initialValue = 0, this.initialValue2 = 0, this.ratio = 0, this.init()
        }, s.saveToJSON = function() {
            return {
                i: this.i,
                a: this.active,
                mv: this.movement,
                w: this.wave,
                p: this.period,
                mag: this.mag,
                iv: this.initialValue,
                iv2: this.initialValue2,
                r: this.ratio,
                lkv: this.lastKnownValue,
                lkv2: this.lastKnownValue2
            }
        }, s.loadFromJSON = function(t) {
            this.i = t.i, this.active = t.a, this.movement = t.mv, this.wave = t.w, this.period = t.p, this.mag = t.mag, this.initialValue = t.iv, this.initialValue2 = t.iv2 || 0, this.ratio = t.r, this.lastKnownValue = t.lkv, this.lastKnownValue2 = t.lkv2 || 0
        }, s.init = function() {
            switch (this.movement) {
                case 0:
                    this.initialValue = this.inst.x;
                    break;
                case 1:
                    this.initialValue = this.inst.y;
                    break;
                case 2:
                    this.initialValue = this.inst.width, this.ratio = this.inst.height / this.inst.width;
                    break;
                case 3:
                    this.initialValue = this.inst.width;
                    break;
                case 4:
                    this.initialValue = this.inst.height;
                    break;
                case 5:
                    this.initialValue = this.inst.angle, this.mag = cr.to_radians(this.mag);
                    break;
                case 6:
                    this.initialValue = this.inst.opacity;
                    break;
                case 7:
                    this.initialValue = 0;
                    break;
                case 8:
                    this.initialValue = this.inst.x, this.initialValue2 = this.inst.y
            }
            this.lastKnownValue = this.initialValue, this.lastKnownValue2 = this.initialValue2
        }, s.waveFunc = function(t) {
            switch (t %= a, this.wave) {
                case 0:
                    return Math.sin(t);
                case 1:
                    return t <= o ? t / o : t <= h ? 1 - 2 * (t - o) / Math.PI : (t - h) / o - 1;
                case 2:
                    return 2 * t / a - 1;
                case 3:
                    return -2 * t / a + 1;
                case 4:
                    return t < Math.PI ? -1 : 1
            }
            return 0
        }, s.tick = function() {
            var t = this.runtime.getDt(this.inst);
            this.active && 0 !== t && (0 === this.period ? this.i = 0 : (this.i += t / this.period * a, this.i = this.i % a), this.updateFromPhase())
        }, s.updateFromPhase = function() {
            switch (this.movement) {
                case 0:
                    this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue), this.inst.x = this.initialValue + this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.x;
                    break;
                case 1:
                    this.inst.y !== this.lastKnownValue && (this.initialValue += this.inst.y - this.lastKnownValue), this.inst.y = this.initialValue + this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.y;
                    break;
                case 2:
                    this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag, this.inst.height = this.inst.width * this.ratio;
                    break;
                case 3:
                    this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag;
                    break;
                case 4:
                    this.inst.height = this.initialValue + this.waveFunc(this.i) * this.mag;
                    break;
                case 5:
                    this.inst.angle !== this.lastKnownValue && (this.initialValue = cr.clamp_angle(this.initialValue + (this.inst.angle - this.lastKnownValue))), this.inst.angle = cr.clamp_angle(this.initialValue + this.waveFunc(this.i) * this.mag), this.lastKnownValue = this.inst.angle;
                    break;
                case 6:
                    this.inst.opacity = this.initialValue + this.waveFunc(this.i) * this.mag / 100, this.inst.opacity < 0 ? this.inst.opacity = 0 : this.inst.opacity > 1 && (this.inst.opacity = 1);
                    break;
                case 8:
                    this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue), this.inst.y !== this.lastKnownValue2 && (this.initialValue2 += this.inst.y - this.lastKnownValue2), this.inst.x = this.initialValue + Math.cos(this.inst.angle) * this.waveFunc(this.i) * this.mag, this.inst.y = this.initialValue2 + Math.sin(this.inst.angle) * this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.x, this.lastKnownValue2 = this.inst.y
            }
            this.inst.set_bbox_changed()
        }, s.onSpriteFrameChanged = function(t, e) {
            switch (this.movement) {
                case 2:
                    this.initialValue *= e.width / t.width, this.ratio = e.height / e.width;
                    break;
                case 3:
                    this.initialValue *= e.width / t.width;
                    break;
                case 4:
                    this.initialValue *= e.height / t.height
            }
        }, t.prototype.IsActive = function() {
            return this.active
        }, t.prototype.CompareMovement = function(t) {
            return this.movement === t
        }, t.prototype.ComparePeriod = function(t, e) {
            return cr.do_cmp(this.period, t, e)
        }, t.prototype.CompareMagnitude = function(t, e) {
            return 5 === this.movement ? cr.do_cmp(this.mag, t, cr.to_radians(e)) : cr.do_cmp(this.mag, t, e)
        }, t.prototype.CompareWave = function(t) {
            return this.wave === t
        }, n.cnds = new t, e.prototype.SetActive = function(t) {
            this.active = 1 === t
        }, e.prototype.SetPeriod = function(t) {
            this.period = t
        }, e.prototype.SetMagnitude = function(t) {
            this.mag = t, 5 === this.movement && (this.mag = cr.to_radians(this.mag))
        }, e.prototype.SetMovement = function(t) {
            5 === this.movement && (this.mag = cr.to_degrees(this.mag)), this.movement = t, this.init()
        }, e.prototype.SetWave = function(t) {
            this.wave = t
        }, e.prototype.SetPhase = function(t) {
            this.i = t * a % a, this.updateFromPhase()
        }, e.prototype.UpdateInitialState = function() {
            this.init()
        }, n.acts = new e, i.prototype.CyclePosition = function(t) {
            t.set_float(this.i / a)
        }, i.prototype.Period = function(t) {
            t.set_float(this.period)
        }, i.prototype.Magnitude = function(t) {
            5 === this.movement ? t.set_float(cr.to_degrees(this.mag)) : t.set_float(this.mag)
        }, i.prototype.Value = function(t) {
            t.set_float(this.waveFunc(this.i) * this.mag)
        }, n.exps = new i
    }();
var easeOutBounceArray = [],
    easeInElasticArray = [],
    easeOutElasticArray = [],
    easeInOutElasticArray = [],
    easeInCircle = [],
    easeOutCircle = [],
    easeInOutCircle = [],
    easeInBack = [],
    easeOutBack = [],
    easeInOutBack = [],
    litetween_precision = 1e4,
    updateLimit = 0;
! function() {
    for (var t = 1, e = 0, i = 1, n = 0, r = 0, s = 0, a = 0, o = 0, h = 0; h <= litetween_precision; h++) {
        if (a = h / litetween_precision, n = (a /= t) < 1 / 2.75 ? i * (7.5625 * a * a) + e : a < 2 / 2.75 ? i * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + e : a < 2.5 / 2.75 ? i * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + e : i * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + e, easeOutBounceArray[h] = n, a = h / litetween_precision, r = 0, s = 0, 0 == a && (n = e), 1 == (a /= t) && (n = e + i), 0 == s && (s = .3 * t), 0 == r || r < Math.abs(i)) {
            r = i;
            var o = s / 4
        } else var o = s / (2 * Math.PI) * Math.asin(i / r); if (n = -(r * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * t - o) * (2 * Math.PI) / s)) + e, easeInElasticArray[h] = n, a = h / litetween_precision, r = 0, s = 0, 0 == a && (n = e), 1 == (a /= t) && (n = e + i), 0 == s && (s = .3 * t), 0 == r || r < Math.abs(i)) {
            r = i;
            var o = s / 4
        } else var o = s / (2 * Math.PI) * Math.asin(i / r); if (n = r * Math.pow(2, -10 * a) * Math.sin((a * t - o) * (2 * Math.PI) / s) + i + e, easeOutElasticArray[h] = n, a = h / litetween_precision, r = 0, s = 0, 0 == a && (n = e), 2 == (a /= t / 2) && (n = e + i), 0 == s && (s = t * (.3 * 1.5)), 0 == r || r < Math.abs(i)) {
            r = i;
            var o = s / 4
        } else var o = s / (2 * Math.PI) * Math.asin(i / r);
        n = a < 1 ? -.5 * (r * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * t - o) * (2 * Math.PI) / s)) + e : r * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * t - o) * (2 * Math.PI) / s) * .5 + i + e, easeInOutElasticArray[h] = n, a = h / litetween_precision, easeInCircle[h] = -(Math.sqrt(1 - a * a) - 1), a = h / litetween_precision, easeOutCircle[h] = Math.sqrt(1 - (a - 1) * (a - 1)), a = h / litetween_precision, n = (a /= t / 2) < 1 ? -i / 2 * (Math.sqrt(1 - a * a) - 1) + e : i / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + e, easeInOutCircle[h] = n, a = h / litetween_precision, o = 0, 0 == o && (o = 1.70158), n = i * (a /= t) * a * ((o + 1) * a - o) + e, easeInBack[h] = n, a = h / litetween_precision, o = 0, 0 == o && (o = 1.70158), n = i * ((a = a / t - 1) * a * ((o + 1) * a + o) + 1) + e, easeOutBack[h] = n, a = h / litetween_precision, o = 0, 0 == o && (o = 1.70158), n = (a /= t / 2) < 1 ? i / 2 * (a * a * (((o *= 1.525) + 1) * a - o)) + e : i / 2 * ((a -= 2) * a * (((o *= 1.525) + 1) * a + o) + 2) + e, easeInOutBack[h] = n
    }
}();
var TweenObject = function() {
    var t = function(t, e, i, n, r, s, a) {
        this.name = t, this.value = 0, this.setInitial(n), this.setTarget(r), this.easefunc = i, this.tweened = e, this.duration = s, this.progress = 0, this.state = 0, this.onStart = !1, this.onEnd = !1, this.onReverseStart = !1, this.onReverseEnd = !1, this.lastKnownValue = 0, this.lastKnownValue2 = 0, this.enforce = a, this.pingpong = 1, this.flipEase = !1, this.easingparam = [], this.lastState = 1;
        for (var o = 0; o < 28; o++) this.easingparam[o] = {}, this.easingparam[o].a = 0, this.easingparam[o].p = 0, this.easingparam[o].t = 0, this.easingparam[o].s = 0, this.easingparam[o].optimized = !0
    };
    return t
}();
! function() {
    TweenObject.prototype = {}, TweenObject.prototype.flipTarget = function() {
        var t = this.initialparam1,
            e = this.initialparam2;
        this.initialparam1 = this.targetparam1, this.initialparam2 = this.targetparam2, this.targetparam1 = t, this.targetparam2 = e, this.lastKnownValue = 0, this.lastKnownValue2 = 0
    }, TweenObject.prototype.setInitial = function(t) {
        this.initialparam1 = parseFloat(t.split(",")[0]), this.initialparam2 = parseFloat(t.split(",")[1]), this.lastKnownValue = 0, this.lastKnownValue2 = 0
    }, TweenObject.prototype.setTarget = function(t) {
        this.targetparam1 = parseFloat(t.split(",")[0]), this.targetparam2 = parseFloat(t.split(",")[1]), isNaN(this.targetparam2) && (this.targetparam2 = this.targetparam1)
    }, TweenObject.prototype.OnTick = function(t) {
        if (0 === this.state) return -1;
        if (1 === this.state && (this.progress += t), 2 === this.state && (this.progress -= t), 3 === this.state && (this.state = 0), 4 !== this.state && 6 !== this.state || (this.progress += t * this.pingpong), 5 === this.state && (this.progress += t * this.pingpong), this.progress < 0) return this.progress = 0, 4 === this.state ? this.pingpong = 1 : 6 === this.state ? (this.pingpong = 1, this.flipEase = !1) : this.state = 0, this.onReverseEnd = !0, 0;
        if (this.progress > this.duration) return this.progress = this.duration, 4 === this.state ? this.pingpong = -1 : 6 === this.state ? (this.pingpong = -1, this.flipEase = !0) : 5 === this.state ? this.progress = 0 : this.state = 0, this.onEnd = !0, 1;
        if (this.flipEase) var e = easeFunc(this.easefunc, this.duration - this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]);
        else var e = easeFunc(this.easefunc, this.progress, 0, 1, this.duration, this.flipEase, this.easingparam[this.easefunc]);
        return e
    }
}(), cr.behaviors.lunarray_LiteTween = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.lunarray_LiteTween.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.i = 0
        };
        var i = t.Instance.prototype;
        i.onCreate = function() {
            this.playmode = this.properties[0], this.active = 1 == this.playmode || 2 == this.playmode || 3 == this.playmode || 4 == this.playmode, this.tweened = this.properties[1], this.easing = this.properties[2], this.target = this.properties[3], this.targetmode = this.properties[4], this.useCurrent = !1, 1 === this.targetmode && (this.target = "relative(" + this.target + ")"), this.duration = this.properties[5], this.enforce = 1 === this.properties[6], this.value = 0, this.tween_list = {}, this.addToTweenList("default", this.tweened, this.easing, "current", this.target, this.duration, this.enforce), 1 === this.properties[0] && this.startTween(0), 2 === this.properties[0] && this.startTween(2), 3 === this.properties[0] && this.startTween(3), 4 === this.properties[0] && this.startTween(4)
        }, i.parseCurrent = function(t, e) {
            void 0 === e && (e = "current");
            var i = trim(e);
            e = trim(e);
            var n = this.value;
            if ("current" === e) switch (t) {
                case 0:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 1:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 2:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 3:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 4:
                    i = cr.to_degrees(this.inst.angle) + "," + cr.to_degrees(this.inst.angle);
                    break;
                case 5:
                    i = 100 * this.inst.opacity + "," + 100 * this.inst.opacity;
                    break;
                case 6:
                    i = n + "," + n;
                    break;
                case 7:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 8:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 9:
                    i = void 0 !== this.inst.curFrame ? this.inst.width / this.inst.curFrame.width + "," + this.inst.height / this.inst.curFrame.height : "1,1"
            }
            if ("relative" === e.substring(0, 8)) {
                var r = e.match(/\((.*?)\)/);
                if (r) var s = parseFloat(r[1].split(",")[0]),
                    a = parseFloat(r[1].split(",")[1]);
                switch (isNaN(s) && (s = 0), isNaN(a) && (a = 0), t) {
                    case 0:
                        i = this.inst.x + s + "," + (this.inst.y + a);
                        break;
                    case 1:
                        i = this.inst.width + s + "," + (this.inst.height + a);
                        break;
                    case 2:
                        i = this.inst.width + s + "," + (this.inst.height + a);
                        break;
                    case 3:
                        i = this.inst.width + s + "," + (this.inst.height + a);
                        break;
                    case 4:
                        i = cr.to_degrees(this.inst.angle) + s + "," + (cr.to_degrees(this.inst.angle) + a);
                        break;
                    case 5:
                        i = 100 * this.inst.opacity + s + "," + (100 * this.inst.opacity + a);
                        break;
                    case 6:
                        i = n + s + "," + n + s;
                        break;
                    case 7:
                        i = this.inst.x + s + "," + this.inst.y;
                        break;
                    case 8:
                        i = this.inst.x + "," + (this.inst.y + s);
                        break;
                    case 9:
                        i = s + "," + a
                }
            }
            return i
        }, i.addToTweenList = function(t, e, i, n, r, s, a) {
            n = this.parseCurrent(e, n), r = this.parseCurrent(e, r), void 0 !== this.tween_list[t] && delete this.tween_list[t], this.tween_list[t] = new TweenObject(t, e, i, n, r, s, a), this.tween_list[t].dt = 0
        }, i.saveToJSON = function() {
            JSON.stringify(this.tween_list["default"]);
            return {
                playmode: this.playmode,
                active: this.active,
                tweened: this.tweened,
                easing: this.easing,
                target: this.target,
                targetmode: this.targetmode,
                useCurrent: this.useCurrent,
                duration: this.duration,
                enforce: this.enforce,
                value: this.value,
                tweenlist: JSON.stringify(this.tween_list["default"])
            }
        }, TweenObject.Load = function(t, e, i, n, r, s, a, o) {
            var h = new TweenObject(e, i, n, r, s, a, o);
            for (var c in t) h[c] = t[c];
            return h
        }, i.loadFromJSON = function(t) {
            var e = JSON.parse(t.tweenlist),
                i = TweenObject.Load(e, e.name, e.tweened, e.easefunc, e.initialparam1 + "," + e.initialparam2, e.targetparam1 + "," + e.targetparam2, e.duration, e.enforce);
            this.tween_list["default"] = i, this.playmode = t.playmode, this.active = t.active, this.movement = t.tweened, this.easing = t.easing, this.target = t.target, this.targetmode = t.targetmode, this.useCurrent = t.useCurrent, this.duration = t.duration, this.enforce = t.enforce, this.value = t.value
        }, i.setProgressTo = function(t) {
            t > 1 && (t = 1), t < 0 && (t = 0);
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.state = 3, i.progress = t * i.duration;
                var n = i.OnTick(0);
                this.updateTween(i, n)
            }
        }, i.startTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                if (this.useCurrent) {
                    var n = this.parseCurrent(i.tweened, "current"),
                        r = this.parseCurrent(i.tweened, this.target);
                    i.setInitial(n), i.setTarget(r)
                }
                0 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 1), 1 === t && (i.state = i.lastState), 2 !== t && 4 !== t || (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, 2 == t && (i.state = 4), 4 == t && (i.state = 6)), 3 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 5)
            }
        }, i.stopTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                3 != i.state && 0 != i.state && (i.lastState = i.state), 1 === t && (i.progress = 0), 2 === t && (i.progress = i.duration), i.state = 3;
                var n = i.OnTick(0);
                this.updateTween(i, n)
            }
        }, i.reverseTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                1 === t && (i.progress = i.duration, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onReverseStart = !0), i.state = 2
            }
        }, i.updateTween = function(t, e) {
            if (0 === t.tweened) t.enforce ? (this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e, this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (1 === t.tweened) t.enforce ? (this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e, this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (2 === t.tweened) t.enforce ? this.inst.width = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.width += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (3 === t.tweened) t.enforce ? this.inst.height = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.height += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (4 === t.tweened)
                if (t.enforce) {
                    var i = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e;
                    this.inst.angle = cr.clamp_angle(cr.to_radians(i))
                } else {
                    var i = (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue;
                    this.inst.angle = cr.clamp_angle(this.inst.angle + cr.to_radians(i)), t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e
                } else if (5 === t.tweened) t.enforce ? this.inst.opacity = (t.initialparam1 + (t.targetparam1 - t.initialparam1) * e) / 100 : (this.inst.opacity += ((t.targetparam1 - t.initialparam1) * e - t.lastKnownValue) / 100, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (6 === t.tweened) t.enforce ? this.value = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.value += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (7 === t.tweened) t.enforce ? this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (8 === t.tweened) t.enforce ? this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (9 === t.tweened) {
                var n = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
                    r = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e;
                this.inst.width < 0 && (n = t.initialparam1 + (t.targetparam1 + t.initialparam1) * -e), this.inst.height < 0 && (r = t.initialparam2 + (t.targetparam2 + t.initialparam2) * -e), t.enforce ? (this.inst.width = this.inst.curFrame.width * n, this.inst.height = this.inst.curFrame.height * r) : (this.inst.width < 0 ? (this.inst.width = n * (this.inst.width / (-1 + t.lastKnownValue)), t.lastKnownValue = n + 1) : (this.inst.width = n * (this.inst.width / (1 + t.lastKnownValue)), t.lastKnownValue = n - 1), this.inst.height < 0 ? (this.inst.height = r * (this.inst.height / (-1 + t.lastKnownValue2)), t.lastKnownValue2 = r + 1) : (this.inst.height = r * (this.inst.height / (1 + t.lastKnownValue2)), t.lastKnownValue2 = r - 1))
            }
            this.inst.set_bbox_changed()
        }, i.tick = function() {
            var t = this.runtime.getDt(this.inst),
                e = this.tween_list["default"];
            if (0 !== e.state) {
                e.onStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnStart, this.inst), e.onStart = !1), e.onReverseStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseStart, this.inst), e.onReverseStart = !1), this.active = 1 == e.state || 2 == e.state || 4 == e.state || 5 == e.state || 6 == e.state;
                var i = e.OnTick(t);
                this.updateTween(e, i), e.onEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, this.inst), e.onEnd = !1), e.onReverseEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, this.inst), e.onReverseEnd = !1)
            }
        }, t.cnds = {};
        var n = t.cnds;
        n.IsActive = function() {
            return 0 !== this.tween_list["default"].state
        }, n.IsReversing = function() {
            return 2 == this.tween_list["default"].state
        }, n.CompareProgress = function(t, e) {
            var i = this.tween_list["default"];
            return cr.do_cmp(i.progress / i.duration, t, e)
        }, n.OnThreshold = function(t, e) {
            var i = this.tween_list["default"];
            this.threshold = cr.do_cmp(i.progress / i.duration, t, e);
            var n = this.oldthreshold != this.threshold && this.threshold;
            return n && (this.oldthreshold = this.threshold), n
        }, n.OnStart = function() {
            return void 0 !== this.tween_list["default"] && this.tween_list["default"].onStart
        }, n.OnReverseStart = function() {
            return void 0 !== this.tween_list["default"] && this.tween_list["default"].onReverseStart
        }, n.OnEnd = function() {
            return void 0 !== this.tween_list["default"] && this.tween_list["default"].onEnd
        }, n.OnReverseEnd = function() {
            return void 0 !== this.tween_list["default"] && this.tween_list["default"].onReverseEnd
        }, t.acts = {};
        var r = t.acts;
        r.Start = function(t, e) {
            this.threshold = !1, this.oldthreshold = !1, this.useCurrent = 1 == e, this.startTween(t)
        }, r.Stop = function(t) {
            this.stopTween(t)
        }, r.Reverse = function(t) {
            this.threshold = !1, this.oldthreshold = !1, this.reverseTween(t)
        }, r.ProgressTo = function(t) {
            this.setProgressTo(t)
        }, r.SetDuration = function(t) {
            isNaN(t) || t < 0 || void 0 !== this.tween_list["default"] && (this.tween_list["default"].duration = t)
        }, r.SetEnforce = function(t) {
            void 0 !== this.tween_list["default"] && (this.tween_list["default"].enforce = 1 === t)
        }, r.SetInitial = function(t) {
            if (void 0 !== this.tween_list["default"]) {
                var e = this.parseCurrent(this.tween_list["default"].tweened, t);
                this.tween_list["default"].setInitial(e)
            }
        }, r.SetTarget = function(t, e, i) {
            if (void 0 !== this.tween_list["default"] && !isNaN(i)) {
                var n = this.tween_list["default"],
                    r = i + "";
                this.targetmode = e;
                var s = "",
                    a = "";
                if (1 === e) {
                    switch (this.target = "relative(" + r + ")", t) {
                        case 0:
                            s = this.inst.x + i, a = n.targetparam2;
                            break;
                        case 1:
                            s = n.targetparam1, a = this.inst.y + i;
                            break;
                        case 2:
                            s = "" + cr.to_degrees(this.inst.angle + cr.to_radians(i)), a = s;
                            break;
                        case 3:
                            s = "" + 100 * this.inst.opacity + i, a = s;
                            break;
                        case 4:
                            s = this.inst.width + i, a = n.targetparam2;
                            break;
                        case 5:
                            s = n.targetparam1, a = this.inst.height + i;
                            break;
                        case 6:
                            s = i, a = i
                    }
                    r = s + "," + a
                } else {
                    switch (t) {
                        case 0:
                            s = i, a = n.targetparam2;
                            break;
                        case 1:
                            s = n.targetparam1, a = i;
                            break;
                        case 2:
                            s = i, a = i;
                            break;
                        case 3:
                            s = i, a = i;
                            break;
                        case 4:
                            s = i, a = n.targetparam2;
                            break;
                        case 5:
                            s = n.targetparam1, a = i;
                            break;
                        case 6:
                            s = i, a = i
                    }
                    r = s + "," + a, this.target = r
                }
                var o = this.parseCurrent(this.tween_list["default"].tweened, "current"),
                    h = this.parseCurrent(this.tween_list["default"].tweened, r);
                n.setInitial(o), n.setTarget(h)
            }
        }, r.SetTweenedProperty = function(t) {
            void 0 !== this.tween_list["default"] && (this.tween_list["default"].tweened = t)
        }, r.SetEasing = function(t) {
            void 0 !== this.tween_list["default"] && (this.tween_list["default"].easefunc = t)
        }, r.SetEasingParam = function(t, e, i, n, r) {
            void 0 !== this.tween_list["default"] && (this.tween_list["default"].easingparam[t].optimized = !1, this.tween_list["default"].easingparam[t].a = e, this.tween_list["default"].easingparam[t].p = i, this.tween_list["default"].easingparam[t].t = n, this.tween_list["default"].easingparam[t].s = r)
        }, r.ResetEasingParam = function() {
            void 0 !== this.tween_list["default"] && (this.tween_list["default"].optimized = !0)
        }, r.SetValue = function(t) {
            var e = this.tween_list["default"];
            this.value = t, 6 === e.tweened && e.setInitial(this.parseCurrent(e.tweened, "current"))
        }, r.SetParameter = function(t, e, i, n, r) {
            if (void 0 === this.tween_list["default"]) this.addToTweenList("default", t, e, initial, i, n, r, 0);
            else {
                var s = this.tween_list["default"];
                s.tweened = t, s.easefunc = e, s.setInitial(this.parseCurrent(t, "current")), s.setTarget(this.parseCurrent(t, i)), s.duration = n, s.enforce = 1 === r
            }
        }, t.exps = {};
        var s = t.exps;
        s.State = function(t) {
            var e = "N/A";
            switch (this.tween_list["default"].state) {
                case 0:
                    e = "paused";
                    break;
                case 1:
                    e = "playing";
                    break;
                case 2:
                    e = "reversing";
                    break;
                case 3:
                    e = "seeking"
            }
            t.set_string(e)
        }, s.Progress = function(t) {
            var e = this.tween_list["default"].progress / this.tween_list["default"].duration;
            t.set_float(e)
        }, s.Duration = function(t) {
            t.set_float(this.tween_list["default"].duration)
        }, s.Target = function(t) {
            var e = this.tween_list["default"],
                i = "N/A";
            switch (e.tweened) {
                case 0:
                    i = e.targetparam1;
                    break;
                case 1:
                    i = e.targetparam2;
                    break;
                case 2:
                    i = e.targetparam1;
                    break;
                case 3:
                    i = e.targetparam1;
                    break;
                case 4:
                    i = e.targetparam1;
                    break;
                case 5:
                    i = e.targetparam2;
                    break;
                case 6:
                    i = e.targetparam1
            }
            t.set_float(i)
        }, s.Value = function(t) {
            var e = this.value;
            t.set_float(e)
        }, s.Tween = function(t, e, i, n, r) {
            var s = n > 1 ? 1 : n,
                a = easeFunc(r, s < 0 ? 0 : s, 0, 1, 1, !1, !1);
            t.set_float(e + a * (i - e))
        }
    }(), cr.behaviors.rex_Anchor_mod = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var n = cr.behaviors.rex_Anchor_mod.prototype;
        n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var s = n.Instance.prototype;
        s.onCreate = function() {
            this.anch_left = this.properties[0], this.anch_top = this.properties[1], this.anch_right = this.properties[2], this.anch_bottom = this.properties[3], this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = 0 !== this.properties[4], this.set_once = 1 == this.properties[5], this.update_cnt = 0, this.viewLeft_saved = null, this.viewRight_saved = null, this.viewTop_saved = null, this.viewBottom_saved = null
        }, s.is_layer_size_changed = function() {
            var t = this.inst.layer;
            return this.viewLeft_saved != t.viewLeft || this.viewRight_saved != t.viewRight || this.viewTop_saved != t.viewTop || this.viewBottom_saved != t.viewBottom
        }, s.tick = function() {
            if (this.enabled) {
                if (this.set_once) {
                    if (this.is_layer_size_changed()) {
                        var t = this.inst.layer;
                        this.viewLeft_saved = t.viewLeft, this.viewRight_saved = t.viewRight, this.viewTop_saved = t.viewTop, this.viewBottom_saved = t.viewBottom, this.update_cnt = 2
                    }
                    if (0 == this.update_cnt) return;
                    this.update_cnt -= 1
                }
                var e, t = this.inst.layer,
                    i = this.inst,
                    n = this.inst.bbox;
                0 === this.anch_left ? (i.update_bbox(), e = t.viewLeft + this.xleft - n.left, 0 !== e && (i.x += e, i.set_bbox_changed())) : 1 === this.anch_left && (i.update_bbox(), e = t.viewRight - this.xright - n.left, 0 !== e && (i.x += e, i.set_bbox_changed())), 0 === this.anch_top ? (i.update_bbox(), e = t.viewTop + this.ytop - n.top, 0 !== e && (i.y += e, i.set_bbox_changed())) : 1 === this.anch_top && (i.update_bbox(), e = t.viewBottom - this.ybottom - n.top, 0 !== e && (i.y += e, i.set_bbox_changed())), 1 === this.anch_right && (i.update_bbox(), e = t.viewRight - this.rdiff - n.right, 0 !== e && (i.width += e, i.width < 0 && (i.width = 0), i.set_bbox_changed())), 1 === this.anch_bottom && (i.update_bbox(), e = t.viewBottom - this.bdiff - n.bottom, 0 !== e && (i.height += e, i.height < 0 && (i.height = 0), i.set_bbox_changed())), this.set_once && this.runtime.trigger(cr.behaviors.rex_Anchor_mod.prototype.cnds.OnAnchored, this.inst)
            }
        }, s.saveToJSON = function() {
            return {
                xleft: this.xleft,
                ytop: this.ytop,
                xright: this.xright,
                ybottom: this.ybottom,
                rdiff: this.rdiff,
                bdiff: this.bdiff,
                enabled: this.enabled
            }
        }, s.loadFromJSON = function(t) {
            this.xleft = t.xleft, this.ytop = t.ytop, this.xright = t.xright, this.ybottom = t.ybottom, this.rdiff = t.rdiff, this.bdiff = t.bdiff, this.enabled = t.enabled
        }, n.cnds = new t, t.prototype.OnAnchored = function() {
            return !0
        }, n.acts = new e, e.prototype.SetEnabled = function(t) {
            this.enabled && 0 === t ? this.enabled = !1 : this.enabled || 0 === t || (this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = !0)
        }, n.exps = new i
    }(), cr.behaviors.scrollto = function(t) {
        this.runtime = t, this.shakeMag = 0, this.shakeStart = 0, this.shakeEnd = 0, this.shakeMode = 0
    },
    function() {
        function t(t) {
            var e, i, n;
            for (e = 0, i = t.behavior_insts.length; e < i; ++e)
                if (n = t.behavior_insts[e], n.behavior instanceof cr.behaviors.scrollto) return n;
            return null
        }

        function e() {}
        var i = cr.behaviors.scrollto.prototype;
        i.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = i.Type.prototype;
        n.onCreate = function() {}, i.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = i.Instance.prototype;
        r.onCreate = function() {
            this.enabled = 0 !== this.properties[0]
        }, r.saveToJSON = function() {
            return {
                smg: this.behavior.shakeMag,
                ss: this.behavior.shakeStart,
                se: this.behavior.shakeEnd,
                smd: this.behavior.shakeMode
            }
        }, r.loadFromJSON = function(t) {
            this.behavior.shakeMag = t.smg, this.behavior.shakeStart = t.ss, this.behavior.shakeEnd = t.se, this.behavior.shakeMode = t.smd
        }, r.tick = function() {}, r.tick2 = function() {
            if (this.enabled) {
                var e, i, n, r = this.behavior.my_instances.valuesRef(),
                    s = 0,
                    a = 0,
                    o = 0;
                for (e = 0, i = r.length; e < i; e++) n = t(r[e]), n && n.enabled && (s += r[e].x, a += r[e].y, ++o);
                var h = this.inst.layer.layout,
                    c = this.runtime.kahanTime.sum,
                    l = 0,
                    u = 0;
                if (c >= this.behavior.shakeStart && c < this.behavior.shakeEnd) {
                    var p = this.behavior.shakeMag * Math.min(this.runtime.timescale, 1);
                    0 === this.behavior.shakeMode && (p *= 1 - (c - this.behavior.shakeStart) / (this.behavior.shakeEnd - this.behavior.shakeStart));
                    var d = Math.random() * Math.PI * 2,
                        f = Math.random() * p;
                    l = Math.cos(d) * f, u = Math.sin(d) * f
                }
                h.scrollToX(s / o + l), h.scrollToY(a / o + u)
            }
        }, e.prototype.Shake = function(t, e, i) {
            this.behavior.shakeMag = t, this.behavior.shakeStart = this.runtime.kahanTime.sum, this.behavior.shakeEnd = this.behavior.shakeStart + e, this.behavior.shakeMode = i
        }, e.prototype.SetEnabled = function(t) {
            this.enabled = 0 !== t
        }, i.acts = new e
    }(), cr.getObjectRefTable = function() {
        return [cr.plugins_.NinePatch, cr.plugins_.LocalStorage, cr.plugins_.Particles, cr.plugins_.Spriter, cr.plugins_.Sprite, cr.plugins_.SpriteFontPlus, cr.plugins_.Spritefont2, cr.plugins_.Arr, cr.plugins_.Audio, cr.plugins_.Browser, cr.plugins_.Famobi, cr.plugins_.Function, cr.plugins_.TiledBg, cr.plugins_.Touch, cr.behaviors.Anchor, cr.behaviors.rex_Anchor_mod, cr.behaviors.Rex_pin2imgpt, cr.behaviors.lunarray_LiteTween, cr.behaviors.Fade, cr.behaviors.scrollto, cr.behaviors.Pin, cr.behaviors.Sin, cr.behaviors.Rotate, cr.system_object.prototype.cnds.IsGroupActive, cr.system_object.prototype.cnds.OnLayoutStart, cr.system_object.prototype.acts.SetVar, cr.system_object.prototype.acts.SetLayerVisible, cr.behaviors.Sin.prototype.acts.SetActive, cr.system_object.prototype.acts.SetGroupActive, cr.system_object.prototype.acts.CreateObject, cr.plugins_.TiledBg.prototype.acts.SetInstanceVar, cr.behaviors.Rex_pin2imgpt.prototype.acts.Pin, cr.plugins_.Spriter.prototype.acts.setPlaybackSpeedRatio, cr.plugins_.Famobi.prototype.acts.trackEventLevelStart, cr.plugins_.Spritefont2.prototype.cnds.CompareInstanceVar, cr.plugins_.Spritefont2.prototype.acts.SetText, cr.plugins_.SpriteFontPlus.prototype.cnds.CompareInstanceVar, cr.plugins_.SpriteFontPlus.prototype.acts.SetText, cr.plugins_.Sprite.prototype.cnds.OnCreated, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.system_object.prototype.cnds.CompareVar, cr.system_object.prototype.exps["int"], cr.system_object.prototype.exps.random, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.system_object.prototype.cnds.Else, cr.plugins_.Touch.prototype.cnds.OnTouchStart, cr.plugins_.Touch.prototype.cnds.IsTouchingObject, cr.plugins_.TiledBg.prototype.cnds.CompareInstanceVar, cr.plugins_.Spriter.prototype.acts.setAnimation, cr.plugins_.Audio.prototype.acts.Play, cr.plugins_.TiledBg.prototype.acts.SetHeight, cr.plugins_.TiledBg.prototype.exps.Height, cr.system_object.prototype.cnds.TriggerOnce, cr.plugins_.Audio.prototype.acts.Stop, cr.plugins_.Spriter.prototype.cnds.OnEventTriggered, cr.plugins_.TiledBg.prototype.cnds.CompareHeight, cr.plugins_.Sprite.prototype.cnds.CompareFrame, cr.plugins_.Sprite.prototype.acts.SetCollisions, cr.plugins_.Sprite.prototype.exps.X, cr.plugins_.Sprite.prototype.exps.Y, cr.plugins_.Browser.prototype.cnds.IsPortraitLandscape, cr.plugins_.SpriteFontPlus.prototype.acts.SetPos, cr.behaviors.lunarray_LiteTween.prototype.acts.SetTarget, cr.behaviors.lunarray_LiteTween.prototype.acts.Start, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.plugins_.Sprite.prototype.acts.SetAngle, cr.system_object.prototype.cnds.Compare, cr.plugins_.Sprite.prototype.exps.ImagePointX, cr.plugins_.Sprite.prototype.exps.ImagePointY, cr.plugins_.Function.prototype.acts.CallFunction, cr.plugins_.Function.prototype.cnds.OnFunction, cr.plugins_.Function.prototype.exps.Param, cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, cr.system_object.prototype.acts.AddVar, cr.system_object.prototype.acts.Wait, cr.plugins_.Sprite.prototype.acts.Spawn, cr.plugins_.Sprite.prototype.acts.SetScale, cr.behaviors.Fade.prototype.acts.StartFade, cr.plugins_.Sprite.prototype.cnds.OnCollision, cr.plugins_.Sprite.prototype.acts.Destroy, cr.plugins_.SpriteFontPlus.prototype.acts.SetScale, cr.plugins_.LocalStorage.prototype.acts.SetItem, cr.system_object.prototype.cnds.Every, cr.system_object.prototype.exps.lerp, cr.system_object.prototype.exps.dt, cr.plugins_.Spritefont2.prototype.acts.SetVisible, cr.system_object.prototype.acts.SubVar, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.system_object.prototype.acts.SetTimescale, cr.plugins_.Audio.prototype.acts.SetPaused, cr.plugins_.Famobi.prototype.acts.trackScreen, cr.plugins_.Famobi.prototype.acts.ShowAd, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.system_object.prototype.cnds.PickAll, cr.system_object.prototype.acts.GoToLayout, cr.plugins_.Sprite.prototype.cnds.CompareOpacity, cr.plugins_.Famobi.prototype.acts.MoreGamesLink, cr.plugins_.Audio.prototype.acts.SetSilent, cr.plugins_.Famobi.prototype.acts.trackEventVolumeChange, cr.behaviors.Anchor.prototype.acts.SetEnabled, cr.behaviors.rex_Anchor_mod.prototype.acts.SetEnabled, cr.plugins_.Spritefont2.prototype.acts.SetHAlign, cr.plugins_.Spritefont2.prototype.acts.SetScale, cr.system_object.prototype.acts.SetLayoutAngle, cr.system_object.prototype.acts.SetLayerAngle, cr.plugins_.NinePatch.prototype.acts.SetSize, cr.plugins_.NinePatch.prototype.acts.SetX, cr.plugins_.Sprite.prototype.acts.SetX, cr.plugins_.Sprite.prototype.acts.SetPos, cr.plugins_.Sprite.prototype.acts.MoveToBottom, cr.plugins_.TiledBg.prototype.acts.ZMoveToObject, cr.system_object.prototype.exps.layoutangle, cr.plugins_.Spriter.prototype.acts.SetPos, cr.plugins_.Spriter.prototype.acts.SetAngle, cr.plugins_.Spriter.prototype.acts.setObjectXFlip, cr.plugins_.Sprite.prototype.acts.SetMirrored, cr.plugins_.TiledBg.prototype.acts.SetPos, cr.plugins_.NinePatch.prototype.cnds.CompareInstanceVar, cr.plugins_.NinePatch.prototype.acts.SetY, cr.plugins_.Sprite.prototype.acts.SetY, cr.plugins_.Spritefont2.prototype.acts.SetPos, cr.plugins_.Spritefont2.prototype.acts.SetWidth, cr.system_object.prototype.acts.SetLayoutScale, cr.plugins_.TiledBg.prototype.acts.SetWidth, cr.plugins_.TiledBg.prototype.exps.Width, cr.plugins_.TiledBg.prototype.exps.X, cr.plugins_.TiledBg.prototype.acts.Destroy, cr.plugins_.NinePatch.prototype.acts.SetPos, cr.system_object.prototype.exps.min, cr.system_object.prototype.exps.windowheight, cr.system_object.prototype.exps.windowwidth, cr.plugins_.Spriter.prototype.acts.pauseAnimation, cr.plugins_.Sprite.prototype.acts.SetHeight, cr.plugins_.TiledBg.prototype.exps.Angle, cr.plugins_.Sprite.prototype.acts.SetAnimSpeed, cr.system_object.prototype.exps.choose, cr.behaviors.lunarray_LiteTween.prototype.acts.Reverse, cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, cr.behaviors.lunarray_LiteTween.prototype.acts.ProgressTo, cr.behaviors.lunarray_LiteTween.prototype.acts.SetDuration, cr.plugins_.SpriteFontPlus.prototype.exps.Count, cr.behaviors.scrollto.prototype.acts.Shake, cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, cr.plugins_.Sprite.prototype.cnds.OnDestroyed, cr.plugins_.Audio.prototype.cnds.IsTagPlaying, cr.plugins_.SpriteFontPlus.prototype.acts.SetSize, cr.plugins_.SpriteFontPlus.prototype.acts.SetInstanceVar, cr.plugins_.Sprite.prototype.acts.SetAnim, cr.plugins_.SpriteFontPlus.prototype.acts.Destroy, cr.plugins_.Famobi.prototype.acts.trackEventLevelSuccess, cr.plugins_.Famobi.prototype.acts.trackEventTotalScore, cr.plugins_.Famobi.prototype.acts.trackEventLevelFail, cr.plugins_.Spritefont2.prototype.cnds.OnCreated, cr.plugins_.Arr.prototype.acts.JSONLoad, cr.plugins_.Spritefont2.prototype.acts.SetCharacterWidth, cr.system_object.prototype.cnds.For, cr.plugins_.Arr.prototype.exps.Height, cr.plugins_.Arr.prototype.exps.At, cr.system_object.prototype.exps.loopindex, cr.plugins_.Sprite.prototype.acts.LoadURL, cr.plugins_.Famobi.prototype.exps.GetMoreGamesButtonImage, cr.plugins_.Audio.prototype.acts.Seek, cr.system_object.prototype.cnds.ForEach, cr.plugins_.TiledBg.prototype.acts.SetY, cr.plugins_.TiledBg.prototype.exps.Y, cr.plugins_.NinePatch.prototype.exps.X, cr.plugins_.NinePatch.prototype.exps.Y, cr.behaviors.Pin.prototype.acts.Pin, cr.plugins_.LocalStorage.prototype.acts.CheckItemExists, cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, cr.plugins_.LocalStorage.prototype.acts.GetItem, cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, cr.plugins_.LocalStorage.prototype.exps.ItemValue, cr.plugins_.Browser.prototype.acts.GoToURLWindow, cr.system_object.prototype.exps.viewportbottom, cr.plugins_.Spriter.prototype.cnds.readyForSetup, cr.plugins_.Spriter.prototype.acts.associateTypeWithName]
    };