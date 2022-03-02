"use strict";
this.default_tr = this.default_tr || {};
(function (_) {
    var window = this;
    try {
        _.ma("sy1");

        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        _.Qg = function () {
            return _.t("Firefox") || _.t("FxiOS")
        };
        _.Rg = function () {
            return (_.t("Chrome") || _.t("CriOS")) && !_.t("Edge") || _.t("Silk")
        };
        _.Sg = function () {
            return _.t("Safari") && !(_.Rg() || _.t("Coast") || _.t("Opera") || _.t("Edge") || _.t("Edg/") || _.t("OPR") || _.Qg() || _.t("Silk") || _.t("Android"))
        };
        _.Tg = function () {
            return _.t("Android") && !(_.Rg() || _.Qg() || _.t("Opera") || _.t("Silk"))
        };
        _.Ug = _.Qg();
        _.Vg = _.Da() || _.t("iPod");
        _.Wg = _.t("iPad");
        _.Xg = _.Tg();
        _.Yg = _.Rg();
        _.Zg = _.Sg() && !_.Ea();

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("sy0");

        var ah, bh, fh, gh, kh, lh, jh, hh, ih, ph, qh, vh, zh;
        ah = function (a, b) {
            Object.isFrozen(a) || ($g ? a[$g] |= b : void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            }))
        };
        bh = function (a) {
            var b;
            $g ? b = a[$g] : b = a.g;
            return null == b ? 0 : b
        };
        _.ch = function (a) {
            ah(a, 1);
            return a
        };
        _.dh = function (a) {
            return Array.isArray(a) ? !!(bh(a) & 2) : !1
        };
        _.eh = function (a) {
            if (!Array.isArray(a)) throw Error("ba");
            ah(a, 2)
        };
        fh = function (a) {
            return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
        };
        gh = function (a) {
            return {
                value: a,
                configurable: !1,
                writable: !1,
                enumerable: !1
            }
        };
        kh = function (a) {
            var b = hh;
            b = void 0 === b ? ih : b;
            return jh(a, b)
        };
        lh = function (a, b) {
            if (null != a) {
                if (Array.isArray(a)) a = jh(a, b);
                else if (fh(a)) {
                    var c = {},
                        d;
                    for (d in a) c[d] = lh(a[d], b);
                    a = c
                } else a = b(a);
                return a
            }
        };
        jh = function (a, b) {
            for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = lh(c[d], b);
            Array.isArray(a) && bh(a) & 1 && _.ch(c);
            return c
        };
        hh = function (a) {
            if (a && "object" == typeof a && a.toJSON) return a.toJSON();
            a: switch (typeof a) {
            case "number":
                a = isFinite(a) ? a : String(a);
                break a;
            case "object":
                if (a && !Array.isArray(a) && mh && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    _.nh();
                    b = oh[b];
                    for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                        var g = a[e],
                            k = a[e + 1],
                            l = a[e + 2],
                            m = b[g >> 2];
                        g = b[(g & 3) << 4 | k >> 4];
                        k = b[(k & 15) << 2 | l >> 6];
                        l = b[l & 63];
                        c[f++] = m + g + k + l
                    }
                    m = 0;
                    l = d;
                    switch (a.length - e) {
                    case 2:
                        m = a[e + 1], l = b[(m & 15) << 2] || d;
                    case 1:
                        a =
                            a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
                    }
                    a = c.join("")
                }
            }
            return Array.isArray(a) ? kh(a) : a
        };
        ih = function (a) {
            return mh && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
        };
        ph = {};
        qh = {};
        _.rh = function (a, b) {
            this.g = a === ph && b || "";
            this.h = qh
        };
        _.rh.prototype.qb = !0;
        _.rh.prototype.Xa = function () {
            return this.g
        };
        _.sh = function (a) {
            return new _.rh(ph, a)
        };
        _.th = function (a, b) {
            return _.ed(a.U, b)
        };
        _.uh = function (a) {
            return a instanceof _.rh && a.constructor === _.rh && a.h === qh ? a.g : "type_error:Const"
        };
        vh = /^[\w+/_-]+[=]{0,2}$/;
        _.wh = function (a, b) {
            b = (b || _.p).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && vh.test(a) ? a : "" : ""
        };
        _.xh = function (a) {
            return _.wh("script[nonce]", a)
        };
        _.yh = function (a) {
            return String(a).replace(/\-([a-z])/g, function (b, c) {
                return c.toUpperCase()
            })
        };
        zh = function (a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
                return c + d.toUpperCase()
            })
        };
        _.Ah = function (a) {
            if (a instanceof _.ne) return a;
            var b = new _.ne(_.v);
            _.me(b, 2, a);
            return b
        };
        _.Bh = function (a, b, c, d, e, f, g) {
            var k = new _.lg;
            _.og.push(k);
            b && k.D("complete", b);
            k.Vb("ready", k.aa);
            f && (k.s = Math.max(0, f));
            g && (k.W = g);
            k.send(a, c, d, e)
        };
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var oh;
        oh = {};
        _.Ch = null;
        _.Dh = _.C || _.D || !_.Zg && !_.B && "function" == typeof _.p.atob;
        _.nh = function () {
            if (!_.Ch) {
                _.Ch = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    oh[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === _.Ch[f] && (_.Ch[f] = e)
                    }
                }
            }
        };
        var mh = "function" === typeof Uint8Array;
        var $g = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
        var Gh;
        _.Eh = Object.freeze(_.ch([]));
        _.Fh = function (a) {
            if (_.dh(a.Ha)) throw Error("ca");
        };
        Gh = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;
        _.Hh = function (a, b, c) {
            return -1 === b ? null : b >= a.l ? a.h ? a.h[b] : void 0 : (void 0 === c ? 0 : c) && a.h && (c = a.h[b], null != c) ? c : a.Ha[b + a.j]
        };
        _.Ih = function (a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || _.Fh(a);
            b < a.l && !d ? a.Ha[b + a.j] = c : (a.h || (a.h = a.Ha[a.l + a.j] = {}))[b] = c;
            return a
        };
        _.Jh = function (a, b, c) {
            var d = void 0 === d ? !1 : d;
            _.Fh(a);
            a.g || (a.g = {});
            var e = c ? c.Ha : c;
            a.g[b] = c;
            return _.Ih(a, b, e, d)
        };
        var Lh = function (a, b, c) {
            var d = _.Kh;
            _.Kh = null;
            a || (a = d);
            d = this.constructor.h;
            a || (a = d ? [d] : []);
            this.j = (d ? 0 : -1) - (this.constructor.g || 0);
            this.g = void 0;
            this.Ha = a;
            a: {
                d = this.Ha.length;
                a = d - 1;
                if (d && (d = this.Ha[a], fh(d))) {
                    this.l = a - this.j;
                    this.h = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.h = void 0) : this.l = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++)
                    if (a = c[b], a < this.l) a += this.j, (d = this.Ha[a]) ? Array.isArray(d) && _.ch(d) : this.Ha[a] = _.Eh;
                    else {
                        d = this.h || (this.h = this.Ha[this.l + this.j] = {});
                        var e = d[a];
                        e ? Array.isArray(e) && _.ch(e) : d[a] = _.Eh
                    }
        };
        Lh.prototype.toJSON = function () {
            return kh(this.Ha)
        };
        Lh.prototype.toString = function () {
            return this.Ha.toString()
        };
        var Mh = function () {
            Lh.apply(this, arguments)
        };
        _.u(Mh, Lh);
        var Nh = function () {
            var a = {};
            Object.defineProperties(Mh, (a[Symbol.hasInstance] = gh(function () {
                throw Error("ea");
            }), a))
        };
        Gh && Nh();
        _.Oh = function () {
            Mh.apply(this, arguments)
        };
        _.u(_.Oh, Mh);
        var Ph = function () {
            var a = {};
            Object.defineProperties(_.Oh, (a[Symbol.hasInstance] = gh(Object[Symbol.hasInstance]), a))
        };
        Gh && Ph();
        var Rh;
        _.L = function (a, b, c) {
            if ("string" === typeof b)(b = _.Qh(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = _.Qh(c, d);
                    f && (c.style[f] = e)
                }
        };
        Rh = {};
        _.Qh = function (a, b) {
            var c = Rh[b];
            if (!c) {
                var d = _.yh(b);
                c = d;
                void 0 === a.style[d] && (d = (_.D ? "Webkit" : _.C ? "Moz" : _.B ? "ms" : null) + zh(d), void 0 !== a.style[d] && (c = d));
                Rh[b] = c
            }
            return c
        };
        _.Sh = _.C ? "MozUserSelect" : _.D || _.dc ? "WebkitUserSelect" : null;

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("sy3");

        var Xh;
        _.Th = {};
        _.Uh = function (a) {
            return a instanceof _.Cc && a.constructor === _.Cc ? a.g : "type_error:SafeUrl"
        };
        _.Vh = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        _.Wh = function (a) {
            if (a instanceof _.Cc) return a;
            a = "object" == typeof a && a.qb ? a.Xa() : String(a);
            _.Vh.test(a) || (a = "about:invalid#zClosurez");
            return _.Dc(a)
        };
        Xh = {};
        _.Yh = function (a, b) {
            this.g = b === Xh ? a : "";
            this.qb = !0
        };
        _.Yh.prototype.Xa = function () {
            return this.g
        };
        _.Yh.prototype.toString = function () {
            return this.g.toString()
        };
        _.Zh = {};
        _.If = function () {
            throw Error("O");
        };
        _.If.prototype.Md = null;
        _.If.prototype.wa = function () {
            return this.g
        };
        _.If.prototype.toString = function () {
            return this.g
        };
        var $h = function () {
            _.If.call(this)
        };
        _.x($h, _.If);
        $h.prototype.Fb = _.Zh;
        var ai = function () {
            _.If.call(this)
        };
        _.x(ai, _.If);
        ai.prototype.Fb = _.Th;
        ai.prototype.Md = 1;
        ai.prototype.h = function () {
            return new _.Yh(this.toString(), Xh)
        };
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        _.bi = function (a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function (c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Md = d);
                return c
            }
        }($h);
        _.ci = function (a) {
            function b(c) {
                this.g = c
            }
            b.prototype = a.prototype;
            return function (c) {
                return new b(String(c))
            }
        }(ai);

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.ma("sy2");

        var di, ei, fi, gi, hi, ii, ji, li, ni, pi, ri, si, ui, wi, xi, Ii, Hi, Ji, Mi, Oi, Pi, Ui, N, Vi, Xi, Yi, $i, aj, bj, cj, dj, ej, fj, gj, hj, ij, jj, kj, lj, mj, nj, oi, qi, Ci, pj, qj, sj, uj, wj, xj, yj, Aj, Bj, Cj, Ej, Fj, Gj, Hj, Ij, Jj, Lj, Mj, Nj, Oj, Pj, Rj, Sj, Tj, Uj, Vj, Xj, Yj, Zj, ak, bk, ck, dk, ek, fk, gk, hk, ik, yi, ti, zk, Ak, Bk, Ck, Dk, Ei, Gk, Hk, Ik, Kk, Lk, Mk, Ok, Pk, Qk, Rk, Sk, Tk, Vk, Wk, Xk, Zk, $k, al, bl, cl, dl, el, hl, jl, kl, ll, ml, nl, pl, ql, rl, tl, vl, xl, zl;
        di = function (a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
            _.aa.call(this, c + a[d])
        };
        ei = function (a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        };
        fi = function (a, b, c, d) {
            Array.prototype.splice.apply(a, ei(arguments, 1))
        };
        gi = function (a) {
            var b = {};
            a.forEach(function (c) {
                b[c[0]] = c[1]
            });
            return function (c) {
                return b[c.find(function (d) {
                    return d in b
                })] || ""
            }
        };
        hi = function (a) {
            var b = _.Ba();
            if ("Internet Explorer" === a) {
                if (_.Ca())
                    if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
                    else {
                        a = "";
                        var c = /MSIE +([\d\.]+)/.exec(b);
                        if (c && c[1])
                            if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == c[1])
                                if (b && b[1]) switch (b[1]) {
                                case "4.0":
                                    a = "8.0";
                                    break;
                                case "5.0":
                                    a = "9.0";
                                    break;
                                case "6.0":
                                    a = "10.0";
                                    break;
                                case "7.0":
                                    a = "11.0"
                                } else a = "7.0";
                                else a = c[1];
                        b = a
                    } else b = "";
                return b
            }
            var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
            c = [];
            for (var e; e = d.exec(b);) c.push([e[1], e[2], e[3] || void 0]);
            b = gi(c);
            switch (a) {
            case "Opera":
                if (_.t("Opera")) return b(["Version", "Opera"]);
                if (_.t("OPR")) return b(["OPR"]);
                break;
            case "Microsoft Edge":
                if (_.t("Edge")) return b(["Edge"]);
                if (_.t("Edg/")) return b(["Edg"]);
                break;
            case "Chromium":
                if (_.Rg()) return b(["Chrome", "CriOS", "HeadlessChrome"])
            }
            return "Firefox" === a && _.Qg() || "Safari" === a && _.Sg() || "Android Browser" === a && _.Tg() || "Silk" === a && _.t("Silk") ? (b = c[2]) && b[1] || "" : ""
        };
        ii = function (a) {
            a = hi(a);
            if ("" === a) return NaN;
            a = a.split(".");
            return 0 === a.length ? NaN : Number(a[0])
        };
        ji = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        };
        li = function () {
            var a = ki,
                b;
            for (b in a) return !1;
            return !0
        };
        _.mi = function (a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        };
        ni = function (a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        };
        pi = function (a) {
            return a.replace(_.Jc, function (b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function (g, k, l) {
                    f = k;
                    return l
                });
                b = (oi(d) || _.Ec).Xa();
                return c + f + b + f + e
            })
        };
        ri = function (a) {
            if (a instanceof _.Cc) return 'url("' + _.Uh(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof _.rh) a = _.uh(a);
            else {
                a = String(a);
                var b = a.replace(_.Kc, "$1").replace(_.Kc, "$1").replace(_.Jc, "url");
                if (_.Ic.test(b)) {
                    if (b = !qi.test(a)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && ni(a)
                    }
                    a = b ? pi(a) : "zClosurez"
                } else a = "zClosurez"
            } if (/[{;}]/.test(a)) throw new di("Value does not allow [{;}], got: %s.", [a]);
            return a
        };
        si = function () {
            var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
            return null !== a && void 0 !== a ? a : null
        };
        ui = function (a) {
            if (a instanceof ti) return a.g;
            throw Error("w");
        };
        _.vi = function (a) {
            var b;
            a = _.La(a);
            return (null === (b = si()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
        };
        wi = function (a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        };
        xi = function (a) {
            var b = {
                nonce: _.xh()
            };
            b = void 0 === b ? {} : b;
            var c, d = _.Qa(a);
            a = (null === (c = si()) || void 0 === c ? 0 : c.isScript(d)) ? TrustedScript.prototype.toString.apply(d) : d;
            c = "<script";
            b.id && (c += ' id="' + wi(b.id) + '"');
            b.nonce && (c += ' nonce="' + wi(b.nonce) + '"');
            b.type && (c += ' type="' + wi(b.type) + '"');
            var e;
            b = c + (">" + a + "\x3c/script>");
            a = null === (e = _.Ma()) || void 0 === e ? void 0 : e.createHTML(b);
            return new ti(null !== a && void 0 !== a ? a : b, _.Oa)
        };
        _.zi = function (a) {
            return a instanceof yi ? ui(a) : _.Nc(a)
        };
        _.Ai = function (a) {
            if (null !== a && void 0 !== a.tagName) {
                if ("script" === a.tagName.toLowerCase()) throw Error("J");
                if ("style" === a.tagName.toLowerCase()) throw Error("K");
            }
        };
        _.Di = function (a) {
            return _.ya(a) ? a instanceof _.If ? _.Bi(a) : Ci("zSoyz") : Ci(String(a))
        };
        _.Gi = function (a, b) {
            b = a(b || Ei, void 0);
            a = _.th(_.F(), "DIV");
            b = _.Di(b);
            _.Fi(a, b);
            1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
            return a
        };
        Ii = function (a, b) {
            var c = a[b - 1];
            if (null == c || Hi(c)) a = a[a.length - 1], Hi(a) && (c = a[b]);
            return c
        };
        Hi = function (a) {
            return _.ya(a) && !_.da(a)
        };
        Ji = function (a, b, c, d) {
            for (var e = 0; 0 < b; --b, ++a) null != c[a] && (d[a + 1] = c[a], delete c[a], e++);
            return e
        };
        Mi = function (a, b, c) {
            var d = Array.prototype.slice.call(arguments);
            d.splice(0, 2);
            d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
            _.Ki ? _.Ki.push(d) : _.Li(d)
        };
        Oi = function () {
            var a = new Ni([null, null, null, null, null, '(function(){/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar d="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var g;a:{var k={a:!0},l={};try{l.__proto__=k;g=l.a;break a}catch(a){}g=!1}f=g?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=f,n=this||self,p=function(a){return a};/*\n\n SPDX-License-Identifier: Apache-2.0\n*/\nvar q={};var r;var t=function(a,b){if(b!==q)throw Error("Bad secret");this.g=a},u=function(){};t.prototype=d(u.prototype);t.prototype.constructor=t;if(m)m(t,u);else for(var v in u)if("prototype"!=v)if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(u,v);w&&Object.defineProperty(t,v,w)}else t[v]=u[v];t.prototype.toString=function(){return this.g.toString()};function x(a){if(void 0===r){var b=null;var c=n.trustedTypes;if(c&&c.createPolicy)try{b=c.createPolicy("goog#html",{createHTML:p,createScript:p,createScriptURL:p})}catch(e){n.console&&n.console.error(e.message)}r=b}b=r;b=null===b||void 0===b?void 0:b.createScriptURL(a);return new t(null!==b&&void 0!==b?b:a,q)};if(!function(){if(self.origin)return"null"===self.origin;if(""!==location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}())throw Error("sandboxing error");\nwindow.addEventListener("message",function(a){var b=a.ports[0];a=a.data;var c=a.callbackName.split("."),e=window;"window"===c[0]&&c.unshift();for(var h=0;h<c.length-1;h++)e[c[h]]={},e=e[c[h]];e[c[c.length-1]]=function(y){b.postMessage(JSON.stringify(y))};c=document.createElement("script");a=x(a.url);if(a instanceof t)a=a.g;else throw Error("Unexpected type when unwrapping TrustedResourceUrl");c.src=a;document.body.appendChild(c)},!0);}).call(this);\n']);
            if (!a) return null;
            a = _.Hh(a, 6);
            var b;
            null === a || void 0 === a ? b = null : b = _.Pa(a);
            return b
        };
        Pi = function (a) {
            _.M.call(this);
            a = a || {};
            this.id = a.id || this.jb();
            this.vf = a.vf || "";
            this.ee = a.ee || null;
            this.fe = a.fe || null;
            this.Id = a.Id || !1;
            this.className = a.className || null;
            this.B = null
        };
        _.Ti = function () {
            for (var a in Object.prototype) {
                _.Ac = function (d, e, f) {
                    for (var g in d) d[g] !== Object.prototype[g] && e.call(f, d[g], g, d)
                };
                break
            }
            var b = _.vb(),
                c = Qi(Ri);
            c && "function" == typeof c && (1 == _.Si ? c() : function e() {
                var f = document.readyState;
                "undefined" == _.ob(f) || "complete" == f || "interactive" == f || 2E4 <= _.vb() - b ? c() : window.setTimeout(e, 500)
            }())
        };
        Ui = function (a, b) {
            a.hb ? b() : (a.ta || (a.ta = []), a.ta.push(b))
        };
        N = function (a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        };
        N.prototype.ceil = function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        N.prototype.floor = function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        N.prototype.round = function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        N.prototype.translate = function (a, b) {
            a instanceof N ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
            return this
        };
        Vi = function (a) {
            return new N(a.x, a.y)
        };
        _.Wi = function (a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.ta(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        };
        Xi = function (a, b) {
            var c = b || document;
            if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.Wi(c, "*", a, b)[0] || null
            }
            return a || null
        };
        Yi = function (a) {
            return a.scrollingElement ? a.scrollingElement : !_.D && _.bd(a) ? a.documentElement : a.body || a.documentElement
        };
        _.Zi = function (a) {
            var b = Yi(a);
            a = a.parentWindow || a.defaultView;
            return _.B && _.vc("10") && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft, b.scrollTop) : new N(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        };
        $i = function (a) {
            a.h = {};
            a.g.length = 0;
            a.size = 0;
            a.j = 0
        };
        aj = function (a) {
            if (a.kb && "function" == typeof a.kb) return a.kb();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (_.da(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return _.Ga(a)
        };
        bj = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
        cj = function (a, b) {
            return _.Oc(a, b || null)
        };
        _.Bi = function (a) {
            if (a.Fb !== _.Zh) throw Error("P");
            return cj(a.toString(), a.Md)
        };
        dj = function (a) {
            a.kc = void 0;
            a.ea = function () {
                return a.kc ? a.kc : a.kc = new a
            }
        };
        ej = {};
        _.x(di, _.aa);
        di.prototype.name = "AssertionError";
        fj = /&/g;
        gj = /</g;
        hj = />/g;
        ij = /"/g;
        jj = /'/g;
        kj = /\x00/g;
        lj = /[\x00&<>"']/;
        mj = function (a, b) {
            if (b) a = a.replace(fj, "&amp;").replace(gj, "&lt;").replace(hj, "&gt;").replace(ij, "&quot;").replace(jj, "&#39;").replace(kj, "&#0;");
            else {
                if (!lj.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(fj, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(gj, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(hj, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ij, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(jj, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(kj, "&#0;"))
            }
            return a
        };
        nj = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };
        oi = function (a) {
            if (a instanceof _.Cc) return a;
            a = "object" == typeof a && a.qb ? a.Xa() : String(a);
            _.Vh.test(a) ? a = _.Dc(a) : (a = String(a), a = a.replace(/(%0A|%0D)/g, ""), a = a.match(bj) ? _.Dc(a) : null);
            return a
        };
        _.oj = function (a) {
            return a instanceof _.Gc && a.constructor === _.Gc ? a.g : "type_error:SafeStyle"
        };
        qi = /\/\*/;
        Ci = function (a) {
            if (a instanceof _.Mc) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.qf && (c = a.$b());
            return _.Oc(mj(b && a.qb ? a.Xa() : String(a)), c)
        };
        pj = /^[a-zA-Z0-9-]+$/;
        qj = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
        _.rj = function (a) {
            if (!pj.test(a)) throw Error("w");
            if (a.toUpperCase() in qj) throw Error("w");
        };
        sj = function (a) {
            var b = Ci(_.Qc),
                c = b.$b(),
                d = [],
                e = function (f) {
                    Array.isArray(f) ? f.forEach(e) : (f = Ci(f), d.push(_.Nc(f).toString()), f = f.$b(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            a.forEach(e);
            return _.Oc(d.join(_.Nc(b).toString()), c)
        };
        _.tj = function (a) {
            return sj(Array.prototype.slice.call(arguments))
        };
        uj = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        };
        _.vj = function (a) {
            var b = "";
            if (a)
                for (var c in a)
                    if (Object.prototype.hasOwnProperty.call(a, c)) {
                        if (!pj.test(c)) throw Error("w");
                        var d = a[c];
                        if (null != d) {
                            var e = c;
                            if (d instanceof _.rh) d = _.uh(d);
                            else if ("style" == e.toLowerCase()) {
                                var f = d;
                                if (!_.ya(f)) throw Error("w");
                                if (!(f instanceof _.Gc)) {
                                    d = void 0;
                                    var g = "";
                                    for (d in f)
                                        if (Object.prototype.hasOwnProperty.call(f, d)) {
                                            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("v`" + d);
                                            var k = f[d];
                                            null != k && (k = Array.isArray(k) ? k.map(ri).join(" ") : ri(k), g += d + ":" + k + ";")
                                        }
                                    f = g ? new _.Gc(g,
                                        _.Fc) : _.Hc
                                }
                                d = _.oj(f)
                            } else {
                                if (/^on/i.test(e)) throw Error("w");
                                if (e.toLowerCase() in uj)
                                    if (d instanceof _.Gb) d = _.Sa(d).toString();
                                    else if (d instanceof _.Cc) d = _.Uh(d);
                                else if ("string" === typeof d) d = (oi(d) || _.Ec).Xa();
                                else throw Error("w");
                            }
                            d.qb && (d = d.Xa());
                            e = e + '="' + mj(String(d)) + '"';
                            b += " " + e
                        }
                    }
            return b
        };
        wj = function (a, b, c) {
            _.rj(String(a));
            a = String(a);
            var d = c,
                e = null;
            c = "<" + a + _.vj(b);
            null == d ? d = [] : Array.isArray(d) || (d = [d]);
            !0 === nj[a.toLowerCase()] ? c += ">" : (e = _.tj(d), c += ">" + _.Nc(e).toString() + "</" + a + ">", e = e.$b());
            (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? e = 0 : e = null);
            return _.Oc(c, e)
        };
        _.Fi = function (a, b) {
            if ((0, _.Sc)())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = _.Nc(b)
        };
        xj = function (a, b) {
            b = b instanceof _.Cc ? b : _.Wh(b);
            a.action = _.Uh(b)
        };
        yj = function (a, b) {
            return new N(a.x - b.x, a.y - b.y)
        };
        _.zj = function (a) {
            return a.replace(/\xa0|[ \t]+/g, " ")
        };
        Aj = function (a) {
            return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        };
        Bj = function (a) {
            return a.replace(/^[\s\xa0]+/, "")
        };
        Cj = function (a) {
            return a.replace(/[\s\xa0]+$/, "")
        };
        _.Dj = function (a) {
            return a = mj(a, void 0)
        };
        Ej = function (a) {
            return a.replace(/&([^;]+);/g, function (b, c) {
                switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        };
        Fj = /&([^;\s<&]+);?/g;
        Gj = function (a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = _.p.document.createElement("div");
            return a.replace(Fj, function (d, e) {
                var f = b[d];
                if (f) return f;
                "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (f = String.fromCharCode(e)));
                f || (f = cj(d + " "), _.Fi(c, f), f = c.firstChild.nodeValue.slice(0, -1));
                return b[d] = f
            })
        };
        Hj = function (a) {
            return -1 != a.indexOf("&") ? "document" in _.p ? Gj(a) : Ej(a) : a
        };
        Ij = function (a, b) {
            return (b || document).getElementsByTagName(String(a))
        };
        Jj = function () {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".alt-edited") : _.Wi(document, "*", "alt-edited", void 0)
        };
        _.Kj = function (a, b, c) {
            return _.gd(document, arguments)
        };
        Lj = function () {
            var a = wj("WBR"),
                b = document;
            var c = _.ed(b, "DIV");
            _.B ? (a = _.tj(_.Rc, a), _.Fi(c, a), c.removeChild(c.firstChild)) : _.Fi(c, a);
            if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
            else {
                for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
                c = b
            }
            return c
        };
        Mj = function (a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
            }
            return !0
        };
        Nj = function (a, b) {
            _.fd(_.E(a), a, arguments, 1)
        };
        Oj = function (a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b)
        };
        Pj = function (a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        };
        _.Qj = function (a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        Rj = function (a) {
            return _.ya(a) && 1 == a.nodeType
        };
        Sj = function (a, b) {
            for (; b = b.previousSibling;)
                if (b == a) return -1;
            return 1
        };
        Tj = function (a, b) {
            var c = a.parentNode;
            if (c == b) return -1;
            for (; b.parentNode != c;) b = b.parentNode;
            return Sj(b, a)
        };
        Uj = function (a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (_.B && !(9 <= Number(_.yc))) {
                if (9 == a.nodeType) return -1;
                if (9 == b.nodeType) return 1
            }
            if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
                var c = 1 == a.nodeType,
                    d = 1 == b.nodeType;
                if (c && d) return a.sourceIndex - b.sourceIndex;
                var e = a.parentNode,
                    f = b.parentNode;
                return e == f ? Sj(a, b) : !c && _.ld(e, b) ? -1 * Tj(a, b) : !d && _.ld(f, a) ? Tj(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
            }
            d = _.E(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            a = d.createRange();
            a.selectNode(b);
            a.collapse(!0);
            return c.compareBoundaryPoints(_.p.Range.START_TO_END, a)
        };
        Vj = function (a) {
            var b, c = arguments.length;
            if (!c) return null;
            if (1 == c) return arguments[0];
            var d = [],
                e = Infinity;
            for (b = 0; b < c; b++) {
                for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
                d.push(f);
                e = Math.min(e, f.length)
            }
            f = null;
            for (b = 0; b < e; b++) {
                g = d[0][b];
                for (var k = 1; k < c; k++)
                    if (g != d[k][b]) return f;
                f = g
            }
            return f
        };
        _.Wj = function (a) {
            return a.contentDocument || a.contentWindow.document
        };
        Xj = function (a) {
            return a.hasAttribute("tabindex")
        };
        Yj = function (a) {
            a = a.tabIndex;
            return "number" === typeof a && 0 <= a && 32768 > a
        };
        Zj = function (a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        };
        ak = function (a) {
            var b = [];
            _.pd(a, b, !1);
            return b.join("")
        };
        bk = {
            rc: "mousedown",
            sc: "mouseup",
            Sc: "mousecancel",
            Pk: "mousemove",
            Rk: "mouseover",
            Qk: "mouseout",
            Nk: "mouseenter",
            Ok: "mouseleave"
        };
        ck = function (a, b) {
            if (!a) return 0;
            if (_.zd(a)) return a.ib ? _.Gd(a.ib, b) : 0;
            a = _.Nd(a);
            if (!a) return 0;
            var c = 0;
            b = b && b.toString();
            for (var d in a.g)
                if (!b || d == b)
                    for (var e = a.g[d].concat(), f = 0; f < e.length; ++f) _.Sd(e[f]) && ++c;
            return c
        };
        dk = function (a, b, c) {
            this.promise = a;
            this.resolve = b;
            this.reject = c
        };
        ek = function () {
            var a, b, c = new _.ne(function (d, e) {
                a = d;
                b = e
            });
            return new dk(c, a, b)
        };
        fk = function (a) {
            if (a instanceof _.ef) return a;
            if ("function" == typeof a.Ia) return a.Ia(!1);
            if (_.da(a)) {
                var b = 0,
                    c = new _.ef;
                c.next = function () {
                    for (;;) {
                        if (b >= a.length) return _.ff;
                        if (b in a) return _.gf(a[b++]);
                        b++
                    }
                };
                var d = c.next;
                c.Ra = function () {
                    return _.hf(d.call(c))
                };
                return c
            }
            throw Error("F");
        };
        gk = function (a, b, c) {
            for (a = fk(a);;) {
                var d = void 0;
                try {
                    d = a.Ra()
                } catch (e) {
                    if (e === _.df) break;
                    throw e;
                }
                try {
                    if (!b.call(c, d, void 0, a)) break
                } catch (e) {
                    if (e === _.df) throw Error("E");
                    throw e;
                }
            }
        };
        hk = function (a) {
            if (a.Ub && "function" == typeof a.Ub) return a.Ub();
            if (!a.kb || "function" != typeof a.kb) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (_.da(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return ji(a)
                }
            }
        };
        ik = function (a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (_.da(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
            else
                for (var d = hk(a), e = aj(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        };
        yi = function () {};
        ti = function (a) {
            this.g = a
        };
        _.u(ti, yi);
        ti.prototype.toString = function () {
            return this.g.toString()
        };
        var jk = function (a, b) {
                this.h = this.g = null;
                this.j = a || null;
                this.l = !!b
            },
            kk = function (a) {
                a.g || (a.g = new Map, a.h = 0, a.j && _.Ff(a.j, function (b, c) {
                    a.add(_.Wc(b), c)
                }))
            };
        jk.prototype.add = function (a, b) {
            kk(this);
            this.j = null;
            a = lk(this, a);
            var c = this.g.get(a);
            c || this.g.set(a, c = []);
            c.push(b);
            this.h += 1;
            return this
        };
        jk.prototype.remove = function (a) {
            kk(this);
            a = lk(this, a);
            return this.g.has(a) ? (this.j = null, this.h -= this.g.get(a).length, this.g.delete(a)) : !1
        };
        var mk = function (a, b) {
            kk(a);
            b = lk(a, b);
            return a.g.has(b)
        };
        _.h = jk.prototype;
        _.h.forEach = function (a, b) {
            kk(this);
            this.g.forEach(function (c, d) {
                c.forEach(function (e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        };
        _.h.Ub = function () {
            kk(this);
            for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        _.h.kb = function (a) {
            kk(this);
            var b = [];
            if ("string" === typeof a) mk(this, a) && (b = b.concat(this.g.get(lk(this, a))));
            else {
                a = Array.from(this.g.values());
                for (var c = 0; c < a.length; c++) b = b.concat(a[c])
            }
            return b
        };
        _.h.set = function (a, b) {
            kk(this);
            this.j = null;
            a = lk(this, a);
            mk(this, a) && (this.h -= this.g.get(a).length);
            this.g.set(a, [b]);
            this.h += 1;
            return this
        };
        _.h.get = function (a, b) {
            if (!a) return b;
            a = this.kb(a);
            return 0 < a.length ? String(a[0]) : b
        };
        var nk = function (a, b, c) {
            a.remove(b);
            0 < c.length && (a.j = null, a.g.set(lk(a, b), _.wa(c)), a.h += c.length)
        };
        jk.prototype.toString = function () {
            if (this.j) return this.j;
            if (!this.g) return "";
            for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = _.Vc(d);
                d = this.kb(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + _.Vc(d[f]));
                    a.push(g)
                }
            }
            return this.j = a.join("&")
        };
        var ok = function (a) {
                var b = new jk;
                b.j = a.j;
                a.g && (b.g = new Map(a.g), b.h = a.h);
                return b
            },
            lk = function (a, b) {
                b = String(b);
                a.l && (b = b.toLowerCase());
                return b
            },
            pk = function (a, b) {
                b && !a.l && (kk(a), a.j = null, a.g.forEach(function (c, d) {
                    var e = d.toLowerCase();
                    d != e && (this.remove(d), nk(this, e, c))
                }, a));
                a.l = b
            };
        jk.prototype.o = function (a) {
            for (var b = 0; b < arguments.length; b++) ik(arguments[b], function (c, d) {
                this.add(d, c)
            }, this)
        };
        var qk = /[#\/\?@]/g,
            rk = /[#\?]/g,
            sk = /[#\?:]/g,
            tk = /#/g,
            uk = function (a, b) {
                return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
            },
            vk = /[#\?@]/g,
            wk = function (a) {
                a = a.charCodeAt(0);
                return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
            },
            xk = function (a, b, c) {
                return "string" === typeof a ? (a = encodeURI(a).replace(b, wk), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
            },
            yk = function (a) {
                this.j = this.C = this.l = "";
                this.B = null;
                this.s = this.h = "";
                this.o = !1;
                var b;
                a instanceof yk ? (this.o = a.o, zk(this, a.l), this.C =
                    a.C, this.j = a.j, Ak(this, a.B), this.h = a.h, Bk(this, ok(a.g)), this.s = a.s) : a && (b = String(a).match(_.Df)) ? (this.o = !1, zk(this, b[1] || "", !0), this.C = uk(b[2] || ""), this.j = uk(b[3] || "", !0), Ak(this, b[4]), this.h = uk(b[5] || "", !0), Bk(this, b[6] || "", !0), this.s = uk(b[7] || "")) : (this.o = !1, this.g = new jk(null, this.o))
            };
        yk.prototype.toString = function () {
            var a = [],
                b = this.l;
            b && a.push(xk(b, qk, !0), ":");
            var c = this.j;
            if (c || "file" == b) a.push("//"), (b = this.C) && a.push(xk(b, qk, !0), "@"), a.push(_.Vc(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, null != c && a.push(":", String(c));
            if (c = this.h) this.j && "/" != c.charAt(0) && a.push("/"), a.push(xk(c, "/" == c.charAt(0) ? rk : sk, !0));
            (c = this.g.toString()) && a.push("?", c);
            (c = this.s) && a.push("#", xk(c, tk));
            return a.join("")
        };
        yk.prototype.resolve = function (a) {
            var b = new yk(this),
                c = !!a.l;
            c ? zk(b, a.l) : c = !!a.C;
            c ? b.C = a.C : c = !!a.j;
            c ? b.j = a.j : c = null != a.B;
            var d = a.h;
            if (c) Ak(b, a.B);
            else if (c = !!a.h) {
                if ("/" != d.charAt(0))
                    if (this.j && !this.h) d = "/" + d;
                    else {
                        var e = b.h.lastIndexOf("/"); - 1 != e && (d = b.h.substr(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e) d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length;) {
                        var k = e[g++];
                        "." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length &&
                            "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                    }
                    d = f.join("/")
                } else d = e
            }
            c ? b.h = d : c = "" !== a.g.toString();
            c ? Bk(b, ok(a.g)) : c = !!a.s;
            c && (b.s = a.s);
            return b
        };
        zk = function (a, b, c) {
            a.l = c ? uk(b, !0) : b;
            a.l && (a.l = a.l.replace(/:$/, ""))
        };
        Ak = function (a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("L`" + b);
                a.B = b
            } else a.B = null
        };
        Bk = function (a, b, c) {
            b instanceof jk ? (a.g = b, pk(a.g, a.o)) : (c || (b = xk(b, vk)), a.g = new jk(b, a.o))
        };
        Ck = function (a) {
            var b = hk(a);
            if ("undefined" == typeof b) throw Error("N");
            var c = new jk(null, void 0);
            a = aj(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = a[d];
                Array.isArray(f) ? nk(c, e, f) : c.add(e, f)
            }
            return c
        };
        Dk = {};
        _.Ek = {};
        Ei = {};
        _.Fk = function (a) {
            (0, _.$f)();
            return _.Oc(a, null)
        };
        Gk = function (a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? !1 : d;
            var e = _.Hh(a, b, d);
            null == e && (e = _.Eh);
            if (_.dh(a.Ha)) c && (_.eh(e), Object.freeze(e));
            else if (e === _.Eh || _.dh(e)) e = _.ch(e.slice()), _.Ih(a, b, e, d);
            return e
        };
        Hk = function (a, b, c) {
            var d = void 0 === d ? !1 : d;
            _.Fh(a);
            a.g || (a.g = {});
            var e = _.dh(a.Ha);
            var f = a.g[b];
            if (!f) {
                d = Gk(a, b, !0, void 0 === d ? !1 : d);
                f = [];
                e = e || _.dh(d);
                for (var g = 0; g < d.length; g++) f[g] = new c(d[g]), e && _.eh(f[g].Ha);
                e && (_.eh(f), Object.freeze(f));
                a.g[b] = f
            }
            c = new c;
            a = Gk(a, b);
            f.push(c);
            a.push(c.Ha);
            return c
        };
        Ik = function (a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        };
        _.h = Ik.prototype;
        _.h.contains = function (a) {
            return this && a ? a instanceof Ik ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
        };
        _.h.ceil = function () {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        };
        _.h.floor = function () {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        };
        _.h.round = function () {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        };
        _.h.translate = function (a, b) {
            a instanceof N ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
            return this
        };
        var Jk = function (a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        };
        _.h = Jk.prototype;
        _.h.contains = function (a) {
            return a instanceof N ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
        };
        _.h.ceil = function () {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        _.h.floor = function () {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        _.h.round = function () {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        _.h.translate = function (a, b) {
            a instanceof N ? (this.left += a.x, this.top += a.y) : (this.left += a, "number" === typeof b && (this.top += b));
            return this
        };
        Kk = function (a, b) {
            var c = _.E(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        };
        Lk = function (a, b) {
            return Kk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        };
        Mk = function (a) {
            "number" == typeof a && (a += "px");
            return a
        };
        _.Nk = function (a, b, c) {
            if (b instanceof N) {
                var d = b.x;
                b = b.y
            } else d = b, b = c;
            a.style.left = Mk(d);
            a.style.top = Mk(b)
        };
        Ok = function (a) {
            a = a ? _.E(a) : document;
            return !_.B || 9 <= Number(_.yc) || _.bd(_.F(a).U) ? a.documentElement : a.body
        };
        Pk = function (a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        };
        Qk = function (a) {
            if (_.B && !(8 <= Number(_.yc))) return a.offsetParent;
            var b = _.E(a),
                c = Lk(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = Lk(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        };
        Rk = function (a) {
            var b = _.E(a),
                c = new N(0, 0),
                d = Ok(b);
            if (a == d) return c;
            a = Pk(a);
            b = _.Zi(_.F(b).U);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        };
        Sk = function (a) {
            for (var b = new Ik(0, Infinity, Infinity, 0), c = _.F(a), d = c.U.body, e = c.U.documentElement, f = Yi(c.U); a = Qk(a);)
                if (!(_.B && 0 == a.clientWidth || _.D && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Lk(a, "overflow")) {
                    var g = Rk(a),
                        k = new N(a.clientLeft, a.clientTop);
                    g.x += k.x;
                    g.y += k.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top,
                f);
            c = _.cd(_.rd(c) || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        };
        Tk = function (a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = _.D && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = Pk(a), new _.Tc(a.right - a.left, a.bottom - a.top)) : new _.Tc(b, c)
        };
        _.Uk = function (a, b) {
            var c = new N(0, 0),
                d = _.dd(_.E(a));
            if (!_.ac(d, "parent")) return c;
            do {
                if (d == b) var e = Rk(a);
                else e = Pk(a), e = new N(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        };
        Vk = function (a) {
            if ("none" != Lk(a, "display")) return Tk(a);
            var b = a.style,
                c = b.display,
                d = b.visibility,
                e = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            a = Tk(a);
            b.display = c;
            b.position = e;
            b.visibility = d;
            return a
        };
        _.O = function (a, b) {
            a.style.display = b ? "" : "none"
        };
        Wk = function (a) {
            return "rtl" == Lk(a, "direction")
        };
        Xk = function (a, b, c) {
            c = c ? null : a.getElementsByTagName("*");
            if (_.Sh) {
                if (b = b ? "none" : "", a.style && (a.style[_.Sh] = b), c) {
                    a = 0;
                    for (var d; d = c[a]; a++) d.style && (d.style[_.Sh] = b)
                }
            } else if (_.B && (b = b ? "on" : "", a.setAttribute("unselectable", b), c))
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
        };
        _.Yk = function (a) {
            return new _.Tc(a.offsetWidth, a.offsetHeight)
        };
        Zk = function (a, b, c) {
            a = a.style;
            _.C ? a.MozBoxSizing = c : _.D ? a.WebkitBoxSizing = c : a.boxSizing = c;
            a.width = Math.max(b.width, 0) + "px";
            a.height = Math.max(b.height, 0) + "px"
        };
        $k = function (a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var e = a.style[c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return +b
        };
        al = function (a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? $k(a, b, "left", "pixelLeft") : 0
        };
        bl = function (a) {
            if (_.B) {
                var b = al(a, "paddingLeft"),
                    c = al(a, "paddingRight"),
                    d = al(a, "paddingTop");
                a = al(a, "paddingBottom");
                return new Ik(d, c, a, b)
            }
            b = Kk(a, "paddingLeft");
            c = Kk(a, "paddingRight");
            d = Kk(a, "paddingTop");
            a = Kk(a, "paddingBottom");
            return new Ik(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
        cl = {
            thin: 2,
            medium: 4,
            thick: 6
        };
        dl = function (a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in cl ? cl[b] : $k(a, b, "left", "pixelLeft")
        };
        el = function (a) {
            if (_.B && !(9 <= Number(_.yc))) {
                var b = dl(a, "borderLeft"),
                    c = dl(a, "borderRight"),
                    d = dl(a, "borderTop");
                a = dl(a, "borderBottom");
                return new Ik(d, c, a, b)
            }
            b = Kk(a, "borderLeftWidth");
            c = Kk(a, "borderRightWidth");
            d = Kk(a, "borderTopWidth");
            a = Kk(a, "borderBottomWidth");
            return new Ik(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
        _.fl = function (a, b) {
            var c = _.bd(_.F(_.E(a)).U);
            if (!_.B || _.vc("10") || c) Zk(a, b, "content-box");
            else {
                var d = a.style;
                c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = bl(a), a = el(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
            }
        };
        _.gl = function (a, b) {
            return null != a && a.Fb === b
        };
        hl = function (a) {
            if (null != a) switch (a.Md) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
            return null
        };
        _.il = function (a, b) {
            return a && b && a.kj && b.kj ? a.Fb !== b.Fb ? !1 : a.toString() === b.toString() : a instanceof _.If && b instanceof _.If ? a.Fb != b.Fb ? !1 : a.toString() == b.toString() : a == b
        };
        jl = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
        kl = /</g;
        ll = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        };
        ml = function (a) {
            return ll[a]
        };
        nl = {
            "\x00": "\\0 ",
            "\b": "\\8 ",
            "\t": "\\9 ",
            "\n": "\\a ",
            "\v": "\\b ",
            "\f": "\\c ",
            "\r": "\\d ",
            '"': "\\22 ",
            "&": "\\26 ",
            "'": "\\27 ",
            "(": "\\28 ",
            ")": "\\29 ",
            "*": "\\2a ",
            "/": "\\2f ",
            ":": "\\3a ",
            ";": "\\3b ",
            "<": "\\3c ",
            "=": "\\3d ",
            ">": "\\3e ",
            "@": "\\40 ",
            "\\": "\\5c ",
            "{": "\\7b ",
            "}": "\\7d ",
            "\u0085": "\\85 ",
            "\u00a0": "\\a0 ",
            "\u2028": "\\2028 ",
            "\u2029": "\\2029 "
        };
        _.ol = function (a) {
            return nl[a]
        };
        pl = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        };
        ql = function (a) {
            return pl[a]
        };
        rl = /[\x00\x22\x26\x27\x3c\x3e]/g;
        _.sl = function (a) {
            if (_.gl(a, _.Zh)) var b = a;
            else if (a instanceof _.Mc) b = (0, _.bi)(_.Nc(a).toString(), a.$b());
            else if (a instanceof yi) {
                var c = ui(a);
                a = (null === (b = si()) || void 0 === b ? 0 : b.isHTML(c)) ? TrustedHTML.prototype.toString.apply(c) : c;
                b = (0, _.bi)(a)
            } else b = (0, _.bi)(String(String(a)).replace(rl, ml), hl(a));
            return b
        };
        tl = /[\x00\x22\x27\x3c\x3e]/g;
        _.P = function (a) {
            if (_.gl(a, _.Zh)) {
                var b = String;
                a = String(a.wa()).replace(jl, "").replace(kl, "&lt;");
                b = b(a).replace(tl, ml)
            } else b = String(a).replace(rl, ml);
            return b
        };
        _.ul = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
        vl = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
        _.wl = function (a) {
            return String(a).replace(vl, ql)
        };
        xl = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i;
        _.yl = function (a) {
            _.gl(a, Dk) || _.gl(a, _.Ek) ? a = _.wl(a) : a instanceof _.Cc ? a = _.wl(_.Uh(a)) : a instanceof _.Gb ? a = _.wl(_.Sa(a).toString()) : "function" == typeof _.Ra && a instanceof _.Ra ? a = _.wl(_.vi(a)) : (a = String(a), a = xl.test(a) ? a.replace(vl, ql) : "about:invalid#zSoyz");
            return a
        };
        zl = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
        _.Al = function (a) {
            _.gl(a, Dk) || _.gl(a, _.Ek) ? a = _.wl(a) : a instanceof _.Cc ? a = _.wl(_.Uh(a)) : a instanceof _.Gb ? a = _.wl(_.Sa(a).toString()) : "function" == typeof _.Ra && a instanceof _.Ra ? a = _.wl(_.vi(a)) : (a = String(a), a = zl.test(a) ? a.replace(vl, ql) : "about:invalid#zSoyz");
            return a
        };
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var Bl, Cl, Dl, El, Fl, Hl;
        Bl = function (a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        };
        Cl = function (a) {
            return a.classList ? a.classList : Bl(a).match(/\S+/g) || []
        };
        Dl = function (a, b) {
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        };
        El = function (a, b) {
            return a.classList ? a.classList.contains(b) : _.ta(Cl(a), b)
        };
        _.R = function (a, b) {
            if (a.classList) a.classList.add(b);
            else if (!El(a, b)) {
                var c = Bl(a);
                Dl(a, c + (0 < c.length ? " " + b : b))
            }
        };
        Fl = function (a, b) {
            if (a.classList) Array.prototype.forEach.call(b, function (e) {
                _.R(a, e)
            });
            else {
                var c = {};
                Array.prototype.forEach.call(Cl(a), function (e) {
                    c[e] = !0
                });
                Array.prototype.forEach.call(b, function (e) {
                    c[e] = !0
                });
                b = "";
                for (var d in c) b += 0 < b.length ? " " + d : d;
                Dl(a, b)
            }
        };
        _.Gl = function (a, b) {
            a.classList ? a.classList.remove(b) : El(a, b) && Dl(a, Array.prototype.filter.call(Cl(a), function (c) {
                return c != b
            }).join(" "))
        };
        Hl = function (a, b) {
            a.classList ? Array.prototype.forEach.call(b, function (c) {
                _.Gl(a, c)
            }) : Dl(a, Array.prototype.filter.call(Cl(a), function (c) {
                return !_.ta(b, c)
            }).join(" "))
        };
        var Il = function () {};
        Il.prototype.h = function () {};
        var Jl = function () {
            if (_.hc) {
                var a = /Windows NT ([0-9.]+)/;
                return (a = a.exec(_.Ba())) ? a[1] : "0"
            }
            return _.gc ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(_.Ba())) ? a[0].replace(/_/g, ".") : "10") : _.ic ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.Ba())) ? a[1] : "") : _.jc || _.kc || _.lc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.Ba())) ? a[1].replace(/_/g, ".") : "") : ""
        }();
        var Kl = function (a) {
                return (a = a.exec(_.Ba())) ? a[1] : ""
            },
            Ll = function () {
                if (_.Ug) return Kl(/Firefox\/([0-9.]+)/);
                if (_.B || _.dc || _.cc) return _.tc;
                if (_.Yg) {
                    if (_.Ea() || _.t("Macintosh")) {
                        var a = Kl(/CriOS\/([0-9.]+)/);
                        if (a) return a
                    }
                    return Kl(/Chrome\/([0-9.]+)/)
                }
                if (_.Zg && !_.Ea()) return Kl(/Version\/([0-9.]+)/);
                if (_.Vg || _.Wg) {
                    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ba())) return a[1] + "." + a[2]
                } else if (_.Xg) return (a = Kl(/Android\s+([0-9.]+)/)) ? a : Kl(/Version\/([0-9.]+)/);
                return ""
            }();
        var Pl = function (a, b, c, d, e, f, g, k, l) {
                var m = Ml(c);
                var n = Rk(a);
                var q = Vk(a);
                n = new Jk(n.x, n.y, q.width, q.height);
                if (q = Sk(a)) {
                    var r = new Jk(q.left, q.top, q.right - q.left, q.bottom - q.top);
                    q = Math.max(n.left, r.left);
                    var z = Math.min(n.left + n.width, r.left + r.width);
                    if (q <= z) {
                        var G = Math.max(n.top, r.top);
                        r = Math.min(n.top + n.height, r.top + r.height);
                        G <= r && (n.left = q, n.top = G, n.width = z - q, n.height = r - G)
                    }
                }
                q = _.F(a);
                G = _.F(c);
                q.U != G.U && (z = q.U.body, G = _.Uk(z, _.rd(G)), G = yj(G, Rk(z)), !_.B || 9 <= Number(_.yc) || _.bd(q.U) || (G = yj(G, _.Zi(q.U))),
                    n.left += G.x, n.top += G.y);
                a = Nl(a, b);
                b = n.left;
                a & 4 ? b += n.width : a & 2 && (b += n.width / 2);
                b = new N(b, n.top + (a & 1 ? n.height : 0));
                b = yj(b, m);
                e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
                if (g)
                    if (l) var Q = l;
                    else if (Q = Sk(c)) Q.top -= m.y, Q.right -= m.x, Q.bottom -= m.y, Q.left -= m.x;
                return Ol(b, c, d, f, Q, g, k)
            },
            Ml = function (a) {
                if (a = a.offsetParent) {
                    var b = "HTML" == a.tagName || "BODY" == a.tagName;
                    if (!b || "static" != Lk(a, "position")) {
                        var c = Rk(a);
                        if (!b) {
                            b = Wk(a);
                            var d;
                            if (d = b) {
                                d = _.Zg && 0 <= _.Zb(Ll, 10);
                                var e;
                                if (e = _.nc) e = 0 <= _.Zb(Jl, 10);
                                var f = _.Yg && 0 <=
                                    _.Zb(Ll, 85);
                                d = _.C || d || e || f
                            }
                            b = d ? -a.scrollLeft : b && !_.ec && "visible" != Lk(a, "overflowX") ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft;
                            c = yj(c, new N(b, a.scrollTop))
                        }
                    }
                }
                return c || new N
            },
            Ol = function (a, b, c, d, e, f, g) {
                a = Vi(a);
                var k = Nl(b, c);
                c = Vk(b);
                g = g ? new _.Tc(g.width, g.height) : new _.Tc(c.width, c.height);
                a = Vi(a);
                g = new _.Tc(g.width, g.height);
                var l = 0;
                if (d || 0 != k) k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
                if (f) {
                    if (e) {
                        d = a;
                        k = g;
                        l = 0;
                        65 ==
                            (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                        132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                        d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                        if (f & 16) {
                            var m = d.x;
                            d.x < e.left && (d.x = e.left, l |= 4);
                            d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
                        }
                        d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                        f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                        d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                        f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom &&
                            (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                        d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                        f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                        e = l
                    } else e = 256;
                    l = e
                }
                f = new Jk(0, 0, 0, 0);
                f.left = a.x;
                f.top = a.y;
                f.width = g.width;
                f.height = g.height;
                e = l;
                if (e & 496) return e;
                _.Nk(b, new N(f.left, f.top));
                g = new _.Tc(f.width, f.height);
                _.Uc(c, g) || (c = g, a = _.bd(_.F(_.E(b)).U), !_.B || _.vc("10") || a ? Zk(b, c, "border-box") : (g = b.style, a ? (a = bl(b), b = el(b), g.pixelWidth =
                    c.width - b.left - a.left - a.right - b.right, g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width, g.pixelHeight = c.height)));
                return e
            },
            Nl = function (a, b) {
                return (b & 8 && Wk(a) ? b ^ 4 : b) & -9
            };
        var Ql;
        var Rl = function (a, b) {
                b ? a.setAttribute("role", b) : a.removeAttribute("role")
            },
            Sl = function (a, b, c) {
                Array.isArray(c) && (c = c.join(" "));
                var d = "aria-" + b;
                "" === c || void 0 == c ? (Ql || (Ql = {
                    atomic: !1,
                    autocomplete: "none",
                    dropeffect: "none",
                    haspopup: !1,
                    live: "off",
                    multiline: !1,
                    multiselectable: !1,
                    orientation: "vertical",
                    readonly: !1,
                    relevant: "additions text",
                    required: !1,
                    sort: "none",
                    busy: !1,
                    disabled: !1,
                    hidden: !1,
                    invalid: "false"
                }), c = Ql, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
            };
        var Tl = function (a, b, c) {
            _.y.call(this);
            this.h = a;
            this.l = b || 0;
            this.j = c;
            this.g = (0, _.w)(this.Mh, this)
        };
        _.x(Tl, _.y);
        _.h = Tl.prototype;
        _.h.nc = 0;
        _.h.L = function () {
            Tl.G.L.call(this);
            this.stop();
            delete this.h;
            delete this.j
        };
        _.h.start = function (a) {
            this.stop();
            this.nc = _.jg(this.g, void 0 !== a ? a : this.l)
        };
        _.h.stop = function () {
            0 != this.nc && _.kg(this.nc);
            this.nc = 0
        };
        _.h.Mh = function () {
            this.nc = 0;
            this.h && this.h.call(this.j)
        };
        var Ul = function (a) {
            var b = "kc";
            if (a.kc && a.hasOwnProperty(b)) return a.kc;
            b = new a;
            return a.kc = b
        };
        var Wl = function (a) {
                if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
                if (Vl(a.keyCode)) return !0;
                switch (a.keyCode) {
                case 18:
                case 20:
                case 93:
                case 17:
                case 40:
                case 35:
                case 27:
                case 36:
                case 45:
                case 37:
                case 224:
                case 91:
                case 144:
                case 12:
                case 34:
                case 33:
                case 19:
                case 255:
                case 44:
                case 39:
                case 145:
                case 16:
                case 38:
                case 252:
                case 224:
                case 92:
                    return !1;
                case 0:
                    return !_.C;
                default:
                    return 166 > a.keyCode || 183 < a.keyCode
                }
            },
            Yl = function (a, b, c, d, e, f) {
                if (_.gc && e) return Vl(a);
                if (e && !d) return !1;
                if (!_.C) {
                    "number" ===
                    typeof b && (b = Xl(b));
                    var g = 17 == b || 18 == b || _.gc && 91 == b;
                    if ((!c || _.gc) && g || _.gc && 16 == b && (d || f)) return !1
                }
                if ((_.D || _.dc) && d && c) switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
                }
                if (_.B && d && b == a) return !1;
                switch (a) {
                case 13:
                    return _.C ? f || e ? !1 : !(c && d) : !0;
                case 27:
                    return !(_.D || _.dc || _.C)
                }
                return _.C && (d || e || f) ? !1 : Vl(a)
            },
            Vl = function (a) {
                if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (_.D || _.dc) && 0 == a) return !0;
                switch (a) {
                case 32:
                case 43:
                case 63:
                case 64:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                case 163:
                case 58:
                    return !0;
                case 173:
                    return _.C;
                default:
                    return !1
                }
            },
            Xl = function (a) {
                if (_.C) a = Zl(a);
                else if (_.gc && _.D) switch (a) {
                case 93:
                    a = 91
                }
                return a
            },
            Zl = function (a) {
                switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
                }
            };
        var $l = function (a, b, c, d) {
            _.xd.call(this, d);
            this.type = "key";
            this.keyCode = a;
            this.charCode = b;
            this.repeat = c
        };
        _.x($l, _.xd);
        var am = function (a, b) {
            _.I.call(this);
            a && this.attach(a, b)
        };
        _.x(am, _.I);
        _.h = am.prototype;
        _.h.I = null;
        _.h.ce = null;
        _.h.tf = null;
        _.h.de = null;
        _.h.Za = -1;
        _.h.Ib = -1;
        _.h.Ne = !1;
        var bm = {
                3: 13,
                12: 144,
                63232: 38,
                63233: 40,
                63234: 37,
                63235: 39,
                63236: 112,
                63237: 113,
                63238: 114,
                63239: 115,
                63240: 116,
                63241: 117,
                63242: 118,
                63243: 119,
                63244: 120,
                63245: 121,
                63246: 122,
                63247: 123,
                63248: 44,
                63272: 46,
                63273: 36,
                63275: 35,
                63276: 33,
                63277: 34,
                63289: 144,
                63302: 45
            },
            cm = {
                Up: 38,
                Down: 40,
                Left: 37,
                Right: 39,
                Enter: 13,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                "U+007F": 46,
                Home: 36,
                End: 35,
                PageUp: 33,
                PageDown: 34,
                Insert: 45
            },
            dm = _.gc && _.C;
        _.h = am.prototype;
        _.h.Pi = function (a) {
            if (_.D || _.dc)
                if (17 == this.Za && !a.ctrlKey || 18 == this.Za && !a.altKey || _.gc && 91 == this.Za && !a.metaKey) this.Ib = this.Za = -1; - 1 == this.Za && (a.ctrlKey && 17 != a.keyCode ? this.Za = 17 : a.altKey && 18 != a.keyCode ? this.Za = 18 : a.metaKey && 91 != a.keyCode && (this.Za = 91));
            Yl(a.keyCode, this.Za, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.Ib = Xl(a.keyCode), dm && (this.Ne = a.altKey)) : this.handleEvent(a)
        };
        _.h.Qi = function (a) {
            this.Ib = this.Za = -1;
            this.Ne = a.altKey
        };
        _.h.handleEvent = function (a) {
            var b = a.g,
                c = b.altKey;
            if (_.B && "keypress" == a.type) {
                var d = this.Ib;
                var e = 13 != d && 27 != d ? b.keyCode : 0
            } else(_.D || _.dc) && "keypress" == a.type ? (d = this.Ib, e = 0 <= b.charCode && 63232 > b.charCode && Vl(d) ? b.charCode : 0) : ("keypress" == a.type ? (dm && (c = this.Ne), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.Ib, e = b.charCode) : (d = b.keyCode || this.Ib, e = b.charCode || 0)) : (d = b.keyCode || this.Ib, e = b.charCode || 0), _.gc && 63 == e && 224 == d && (d = 191));
            var f = d = Xl(d);
            d ? 63232 <= d && d in bm ? f = bm[d] : 25 == d && a.shiftKey &&
                (f = 9) : b.keyIdentifier && b.keyIdentifier in cm && (f = cm[b.keyIdentifier]);
            if (!_.C || "keypress" != a.type || Yl(f, this.Za, a.shiftKey, a.ctrlKey, c, a.metaKey)) a = f == this.Za, this.Za = f, b = new $l(f, e, a, b), b.altKey = c, this.dispatchEvent(b)
        };
        _.h.A = function () {
            return this.I
        };
        _.h.attach = function (a, b) {
            this.de && em(this);
            this.I = a;
            this.ce = _.H(this.I, "keypress", this, b);
            this.tf = _.H(this.I, "keydown", this.Pi, b, this);
            this.de = _.H(this.I, "keyup", this.Qi, b, this)
        };
        var em = function (a) {
            a.ce && (_.Sd(a.ce), _.Sd(a.tf), _.Sd(a.de), a.ce = null, a.tf = null, a.de = null);
            a.I = null;
            a.Za = -1;
            a.Ib = -1
        };
        am.prototype.L = function () {
            am.G.L.call(this);
            em(this)
        };
        var fm = function () {};
        dj(fm);
        fm.prototype.g = 0;
        var nm;
        _.M = function (a) {
            _.I.call(this);
            this.g = a || _.F();
            this.Na = gm;
            this.Z = null;
            this.ia = !1;
            this.I = null;
            this.W = void 0;
            this.M = this.C = this.K = this.ob = null;
            this.Sb = !1
        };
        _.x(_.M, _.I);
        _.M.prototype.uc = fm.ea();
        var gm = null,
            hm = function (a, b) {
                switch (a) {
                case 1:
                    return b ? "disable" : "enable";
                case 2:
                    return b ? "highlight" : "unhighlight";
                case 4:
                    return b ? "activate" : "deactivate";
                case 8:
                    return b ? "select" : "unselect";
                case 16:
                    return b ? "check" : "uncheck";
                case 32:
                    return b ? "focus" : "blur";
                case 64:
                    return b ? "open" : "close"
                }
                throw Error("fa");
            };
        _.M.prototype.jb = function () {
            return this.Z || (this.Z = ":" + (this.uc.g++).toString(36))
        };
        var im = function (a, b) {
            if (a.K && a.K.M) {
                var c = a.K.M,
                    d = a.Z;
                d in c && delete c[d];
                c = a.K.M;
                if (null !== c && b in c) throw Error("t`" + b);
                c[b] = a
            }
            a.Z = b
        };
        _.M.prototype.A = function () {
            return this.I
        };
        var jm = function (a, b) {
                return a.I ? Xi(b, a.I || a.g.U) : null
            },
            S = function (a) {
                a.W || (a.W = new _.J(a));
                return a.W
            },
            lm = function (a, b) {
                if (a == b) throw Error("ga");
                if (b && a.K && a.Z && km(a.K, a.Z) && a.K != b) throw Error("ga");
                a.K = b;
                _.M.G.me.call(a, b)
            };
        _.M.prototype.T = function () {
            return this.K
        };
        _.M.prototype.me = function (a) {
            if (this.K && this.K != a) throw Error("ha");
            _.M.G.me.call(this, a)
        };
        _.M.prototype.N = function () {
            this.I = _.th(this.g, "DIV")
        };
        _.M.prototype.ja = function (a) {
            _.mm(this, a)
        };
        _.mm = function (a, b, c) {
            if (a.ia) throw Error("ia");
            a.I || a.N();
            b ? b.insertBefore(a.I, c || null) : a.g.U.body.appendChild(a.I);
            a.K && !a.K.ia || a.Y()
        };
        nm = function (a, b) {
            if (a.ia) throw Error("ia");
            if (b && a.ve(b)) {
                a.Sb = !0;
                var c = _.E(b);
                a.g && a.g.U == c || (a.g = _.F(b));
                a.da(b);
                a.Y()
            } else throw Error("ja");
        };
        _.h = _.M.prototype;
        _.h.ve = function () {
            return !0
        };
        _.h.da = function (a) {
            this.I = a
        };
        _.h.Y = function () {
            this.ia = !0;
            om(this, function (a) {
                !a.ia && a.A() && a.Y()
            })
        };
        _.h.ca = function () {
            om(this, function (a) {
                a.ia && a.ca()
            });
            this.W && _.Zf(this.W);
            this.ia = !1
        };
        _.h.L = function () {
            this.ia && this.ca();
            this.W && (this.W.R(), delete this.W);
            om(this, function (a) {
                a.R()
            });
            !this.Sb && this.I && _.Qj(this.I);
            this.K = this.ob = this.I = this.M = this.C = null;
            _.M.G.L.call(this)
        };
        _.T = function (a, b) {
            return a.jb() + "." + b
        };
        _.M.prototype.Uc = function (a, b) {
            this.Ke(a, pm(this), b)
        };
        _.M.prototype.Ke = function (a, b, c) {
            if (a.ia && (c || !this.ia)) throw Error("ia");
            if (0 > b || b > pm(this)) throw Error("ka");
            this.M && this.C || (this.M = {}, this.C = []);
            if (a.T() == this) {
                var d = a.jb();
                this.M[d] = a;
                _.va(this.C, a)
            } else {
                d = this.M;
                var e = a.jb();
                if (null !== d && e in d) throw Error("t`" + e);
                d[e] = a
            }
            lm(a, this);
            fi(this.C, b, 0, a);
            a.ia && this.ia && a.T() == this ? (c = this.rd(), (c.childNodes[b] || null) != a.A() && (a.A().parentElement == c && c.removeChild(a.A()), b = c.childNodes[b] || null, c.insertBefore(a.A(), b))) : c ? (this.I || this.N(), b = qm(this,
                b + 1), _.mm(a, this.rd(), b ? b.I : null)) : this.ia && !a.ia && a.I && a.I.parentNode && 1 == a.I.parentNode.nodeType && a.Y()
        };
        _.M.prototype.rd = function () {
            return this.I
        };
        var rm = function (a) {
                null == a.Na && (a.Na = Wk(a.ia ? a.I : a.g.U.body));
                return a.Na
            },
            pm = function (a) {
                return a.C ? a.C.length : 0
            },
            km = function (a, b) {
                a.M && b ? (a = a.M, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
                return b
            },
            qm = function (a, b) {
                return a.C ? a.C[b] || null : null
            },
            om = function (a, b, c) {
                a.C && a.C.forEach(b, c)
            },
            sm = function (a, b) {
                return a.C && b ? a.C.indexOf(b) : -1
            };
        _.M.prototype.we = function (a, b) {
            if (a) {
                var c = "string" === typeof a ? a : a.jb();
                a = km(this, c);
                if (c && a) {
                    var d = this.M;
                    c in d && delete d[c];
                    _.va(this.C, a);
                    b && (a.ca(), a.I && _.Qj(a.I));
                    lm(a, null)
                }
            }
            if (!a) throw Error("la");
            return a
        };
        _.M.prototype.ld = function (a) {
            for (var b = []; this.C && 0 != this.C.length;) {
                var c = b,
                    d = c.push;
                var e = this.we(qm(this, 0), a);
                d.call(c, e)
            }
            return b
        };
        var tm = function () {},
            um;
        dj(tm);
        var vm = {
            button: "pressed",
            checkbox: "checked",
            menuitem: "selected",
            menuitemcheckbox: "checked",
            menuitemradio: "checked",
            radio: "checked",
            tab: "selected",
            treeitem: "selected"
        };
        _.h = tm.prototype;
        _.h.oc = function () {};
        _.h.N = function (a) {
            return a.g.N("DIV", wm(this, a).join(" "), a.wa())
        };
        _.h.Pb = function (a) {
            return a
        };
        _.h.sd = function () {
            return !0
        };
        _.h.eb = function (a, b) {
            b.id && im(a, b.id);
            var c = this.Pb(b);
            c && c.firstChild ? xm(a, c.firstChild.nextSibling ? _.wa(c.childNodes) : c.firstChild) : a.ac = null;
            var d = 0,
                e = this.ua(),
                f = this.ua(),
                g = !1,
                k = !1,
                l = _.wa(Cl(b));
            l.forEach(function (m) {
                g || m != e ? k || m != f ? d |= this.j(m) : k = !0 : (g = !0, f == e && (k = !0));
                1 == this.j(m) && Xj(c) && Yj(c) && Zj(c, !1)
            }, this);
            a.ka = d;
            g || (l.push(e), f == e && (k = !0));
            k || l.push(f);
            (a = a.$e) && l.push.apply(l, a);
            g && k && !a || Dl(b, l.join(" "));
            return b
        };
        _.h.hg = function (a) {
            rm(a) && this.ye(a.A(), !0);
            a.isEnabled() && this.pc(a, a.isVisible())
        };
        var ym = function (a, b, c) {
                if (a = c || a.oc()) c = b.getAttribute("role") || null, a != c && Rl(b, a)
            },
            zm = function (a, b, c) {
                b.isVisible() || Sl(c, "hidden", !b.isVisible());
                b.isEnabled() || a.sb(c, 1, !b.isEnabled());
                b.ra & 8 && a.sb(c, 8, !!(b.ka & 8));
                b.ra & 16 && a.sb(c, 16, !!(b.ka & 16));
                b.ra & 64 && a.sb(c, 64, !!(b.ka & 64))
            };
        _.h = tm.prototype;
        _.h.td = function (a, b) {
            Xk(a, !b, !_.B)
        };
        _.h.ye = function (a, b) {
            var c = this.ua() + "-SIsrTd";
            (a = a.A ? a.A() : a) && (b ? Fl : Hl)(a, [c])
        };
        _.h.xe = function (a) {
            var b;
            return a.ra & 32 && (b = a.A()) ? Xj(b) && Yj(b) : !1
        };
        _.h.pc = function (a, b) {
            var c;
            if (a.ra & 32 && (c = a.A())) {
                if (!b && a.ka & 32) {
                    try {
                        c.blur()
                    } catch (d) {}
                    a.ka & 32 && a.ig(null)
                }(Xj(c) && Yj(c)) != b && Zj(c, b)
            }
        };
        _.h.S = function (a, b) {
            _.O(a, b);
            a && Sl(a, "hidden", !b)
        };
        _.h.Nc = function (a, b, c) {
            var d = a.A();
            if (d) {
                var e = this.g(b);
                e && (a = a.A ? a.A() : a) && (c ? Fl : Hl)(a, [e]);
                this.sb(d, b, c)
            }
        };
        _.h.sb = function (a, b, c) {
            um || (um = {
                1: "disabled",
                8: "selected",
                16: "checked",
                64: "expanded"
            });
            b = um[b];
            var d = a.getAttribute("role") || null;
            d && (d = vm[d] || b, b = "checked" == b || "selected" == b ? d : b);
            b && Sl(a, b, c)
        };
        _.h.Mc = function (a, b) {
            var c = this.Pb(a);
            c && (_.hd(c), b && ("string" === typeof b ? _.md(c, b) : (a = function (d) {
                if (d) {
                    var e = _.E(c);
                    c.appendChild("string" === typeof d ? e.createTextNode(d) : d)
                }
            }, Array.isArray(b) ? b.forEach(a) : !_.da(b) || "nodeType" in b ? a(b) : _.wa(b).forEach(a))))
        };
        _.h.ua = function () {
            return "VIpgJd-bMcfAe"
        };
        var wm = function (a, b) {
            var c = a.ua(),
                d = [c],
                e = a.ua();
            e != c && d.push(e);
            c = b.ka;
            for (e = []; c;) {
                var f = c & -c;
                e.push(a.g(f));
                c &= ~f
            }
            d.push.apply(d, e);
            (a = b.$e) && d.push.apply(d, a);
            return d
        };
        tm.prototype.g = function (a) {
            this.h || Am(this);
            return this.h[a]
        };
        tm.prototype.j = function (a) {
            if (!this.o) {
                this.h || Am(this);
                var b = this.h,
                    c = {},
                    d;
                for (d in b) c[b[d]] = d;
                this.o = c
            }
            a = parseInt(this.o[a], 10);
            return isNaN(a) ? 0 : a
        };
        var Am = function (a) {
            var b = a.ua();
            a.h = {
                1: b + "-OWB6Me",
                2: b + "-ZmdkE",
                4: b + "-auswjd",
                8: b + "-gk6SMd",
                16: b + "-barxie",
                32: b + "-XpnDCe",
                64: b + "-FNFY6c"
            }
        };
        var Bm = function () {};
        _.x(Bm, tm);
        dj(Bm);
        _.h = Bm.prototype;
        _.h.oc = function () {
            return "button"
        };
        _.h.sb = function (a, b, c) {
            switch (b) {
            case 8:
            case 16:
                Sl(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                Bm.G.sb.call(this, a, b, c)
            }
        };
        _.h.N = function (a) {
            var b = Bm.G.N.call(this, a);
            this.ne(b, a.ma());
            var c = a.Qa();
            c && this.Ma(b, c);
            a.ra & 16 && this.sb(b, 16, !!(a.ka & 16));
            return b
        };
        _.h.eb = function (a, b) {
            b = Bm.G.eb.call(this, a, b);
            var c = this.Qa(b);
            a.l = c;
            a.X = this.ma(b);
            a.ra & 16 && this.sb(b, 16, !!(a.ka & 16));
            return b
        };
        _.h.Qa = _.v;
        _.h.Ma = _.v;
        _.h.ma = function (a) {
            return a.title
        };
        _.h.ne = function (a, b) {
            a && (b ? a.title = b : a.removeAttribute("title"))
        };
        _.h.ua = function () {
            return "VIpgJd-LgbsSe"
        };
        var Dm = function (a, b) {
                if (!a) throw Error("ma`" + a);
                if ("function" !== typeof b) throw Error("na`" + b);
                Cm[a] = b
            },
            Em = {},
            Cm = {};
        var U = function (a, b, c) {
            _.M.call(this, c);
            if (!b) {
                for (b = this.constructor; b;) {
                    var d = _.za(b);
                    if (d = Em[d]) break;
                    b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
                }
                b = d ? "function" === typeof d.ea ? d.ea() : new d : null
            }
            this.h = b;
            this.ac = void 0 !== a ? a : null
        };
        _.x(U, _.M);
        _.h = U.prototype;
        _.h.ac = null;
        _.h.ka = 0;
        _.h.ra = 39;
        _.h.Qe = 255;
        _.h.qd = 0;
        _.h.za = !0;
        _.h.$e = null;
        _.h.mf = !0;
        _.h.Fd = !1;
        var Gm = function (a, b) {
            a.ia && b != a.mf && Fm(a, b);
            a.mf = b
        };
        _.h = U.prototype;
        _.h.N = function () {
            var a = this.h.N(this);
            this.I = a;
            ym(this.h, a, this.gd());
            this.Fd || this.h.td(a, !1);
            this.isVisible() || this.h.S(a, !1)
        };
        _.h.gd = function () {
            return null
        };
        _.h.rd = function () {
            return this.h.Pb(this.A())
        };
        _.h.ve = function (a) {
            return this.h.sd(a)
        };
        _.h.da = function (a) {
            this.I = a = this.h.eb(this, a);
            ym(this.h, a, this.gd());
            this.Fd || this.h.td(a, !1);
            this.za = "none" != a.style.display
        };
        _.h.Y = function () {
            U.G.Y.call(this);
            zm(this.h, this, this.I);
            this.h.hg(this);
            if (this.ra & -2 && (this.mf && Fm(this, !0), this.ra & 32)) {
                var a = this.A();
                if (a) {
                    var b = this.s || (this.s = new am);
                    b.attach(a);
                    S(this).D(b, "key", this.bb).D(a, "focus", this.Nh).D(a, "blur", this.ig)
                }
            }
        };
        var Fm = function (a, b) {
            var c = S(a),
                d = a.A();
            b ? (c.D(d, bk.rc, a.Pc).D(d, [bk.sc, bk.Sc], a.Cc).D(d, "mouseover", a.V).D(d, "mouseout", a.ba), a.B != _.v && c.D(d, "contextmenu", a.B), _.B && (_.vc(9) || c.D(d, "dblclick", a.Mg), a.J || (a.J = new Hm(a), Ui(a, _.ub(_.ca, a.J))))) : (c.sa(d, bk.rc, a.Pc).sa(d, [bk.sc, bk.Sc], a.Cc).sa(d, "mouseover", a.V).sa(d, "mouseout", a.ba), a.B != _.v && c.sa(d, "contextmenu", a.B), _.B && (_.vc(9) || c.sa(d, "dblclick", a.Mg), _.ca(a.J), a.J = null))
        };
        U.prototype.ca = function () {
            U.G.ca.call(this);
            this.s && em(this.s);
            this.isVisible() && this.isEnabled() && this.h.pc(this, !1)
        };
        U.prototype.L = function () {
            U.G.L.call(this);
            this.s && (this.s.R(), delete this.s);
            delete this.h;
            this.J = this.$e = this.ac = null
        };
        U.prototype.wa = function () {
            return this.ac
        };
        U.prototype.j = function (a) {
            this.h.Mc(this.A(), a);
            this.ac = a
        };
        var xm = function (a, b) {
            a.ac = b
        };
        _.h = U.prototype;
        _.h.xb = function () {
            var a = this.wa();
            if (!a) return "";
            a = "string" === typeof a ? a : Array.isArray(a) ? a.map(ak).join("") : _.qd(a);
            return Aj(a)
        };
        _.h.wh = function (a) {
            this.j(a)
        };
        _.h.isVisible = function () {
            return this.za
        };
        _.h.S = function (a, b) {
            return b || this.za != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.A()) && this.h.S(b, a), this.isEnabled() && this.h.pc(this, a), this.za = a, !0) : !1
        };
        _.h.isEnabled = function () {
            return !(this.ka & 1)
        };
        _.h.qa = function (a) {
            var b = this.T();
            b && "function" == typeof b.isEnabled && !b.isEnabled() || !Im(this, 1, !a) || (a || (Jm(this, !1), Km(this, !1)), this.isVisible() && this.h.pc(this, a), Lm(this, 1, !a, !0))
        };
        var Km = function (a, b) {
                Im(a, 2, b) && Lm(a, 2, b)
            },
            Jm = function (a, b) {
                Im(a, 4, b) && Lm(a, 4, b)
            },
            Mm = function (a, b) {
                Im(a, 64, b) && Lm(a, 64, b)
            },
            Lm = function (a, b, c, d) {
                d || 1 != b ? a.ra & b && c != !!(a.ka & b) && (a.h.Nc(a, b, c), a.ka = c ? a.ka | b : a.ka & ~b) : a.qa(!c)
            };
        U.prototype.Ga = function (a, b) {
            if (this.ia && this.ka & a && !b) throw Error("ia");
            !b && this.ka & a && Lm(this, a, !1);
            this.ra = b ? this.ra | a : this.ra & ~a
        };
        var Nm = function (a, b) {
                return !!(a.Qe & b) && !!(a.ra & b)
            },
            Om = function (a) {
                a.Qe &= -256
            },
            Im = function (a, b, c) {
                return !!(a.ra & b) && !!(a.ka & b) != c && (!(a.qd & b) || a.dispatchEvent(hm(b, c))) && !a.Db()
            };
        U.prototype.V = function (a) {
            !Pm(a, this.A()) && this.dispatchEvent("enter") && this.isEnabled() && Nm(this, 2) && Km(this, !0)
        };
        U.prototype.ba = function (a) {
            !Pm(a, this.A()) && this.dispatchEvent("leave") && (Nm(this, 4) && Jm(this, !1), Nm(this, 2) && Km(this, !1))
        };
        U.prototype.B = _.v;
        var Pm = function (a, b) {
            return !!a.relatedTarget && _.ld(b, a.relatedTarget)
        };
        _.h = U.prototype;
        _.h.Pc = function (a) {
            this.isEnabled() && (Nm(this, 2) && Km(this, !0), 0 != a.g.button || _.gc && a.ctrlKey || (Nm(this, 4) && Jm(this, !0), this.h && this.h.xe(this) && this.A().focus()));
            this.Fd || 0 != a.g.button || _.gc && a.ctrlKey || a.preventDefault()
        };
        _.h.Cc = function (a) {
            this.isEnabled() && (Nm(this, 2) && Km(this, !0), this.ka & 4 && this.Ic(a) && Nm(this, 4) && Jm(this, !1))
        };
        _.h.Mg = function (a) {
            this.isEnabled() && this.Ic(a)
        };
        _.h.Ic = function (a) {
            if (Nm(this, 16)) {
                var b = !(this.ka & 16);
                Im(this, 16, b) && Lm(this, 16, b)
            }
            Nm(this, 8) && Im(this, 8, !0) && Lm(this, 8, !0);
            Nm(this, 64) && Mm(this, !(this.ka & 64));
            b = new _.td("action", this);
            a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.j = a.j);
            return this.dispatchEvent(b)
        };
        _.h.Nh = function () {
            Nm(this, 32) && Im(this, 32, !0) && Lm(this, 32, !0)
        };
        _.h.ig = function () {
            Nm(this, 4) && Jm(this, !1);
            Nm(this, 32) && Im(this, 32, !1) && Lm(this, 32, !1)
        };
        _.h.bb = function (a) {
            return this.isVisible() && this.isEnabled() && this.Oc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
        };
        _.h.Oc = function (a) {
            return 13 == a.keyCode && this.Ic(a)
        };
        if ("function" !== typeof U) throw Error("oa`" + U);
        if ("function" !== typeof tm) throw Error("pa`" + tm);
        var Qm = _.za(U);
        Em[Qm] = tm;
        Dm("VIpgJd-bMcfAe", function () {
            return new U(null)
        });
        var Hm = function (a) {
            _.y.call(this);
            this.h = a;
            this.g = !1;
            this.j = new _.J(this);
            Ui(this, _.ub(_.ca, this.j));
            a = this.h.I;
            this.j.D(a, bk.rc, this.o).D(a, bk.sc, this.s).D(a, "click", this.l)
        };
        _.x(Hm, _.y);
        var Rm = !_.B || 9 <= Number(_.yc);
        Hm.prototype.o = function () {
            this.g = !1
        };
        Hm.prototype.s = function () {
            this.g = !0
        };
        var Sm = function (a, b) {
            if (!Rm) return a.button = 0, a.type = b, a;
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
            return c
        };
        Hm.prototype.l = function (a) {
            if (this.g) this.g = !1;
            else {
                var b = a.g,
                    c = b.button,
                    d = b.type,
                    e = Sm(b, "mousedown");
                this.h.Pc(new _.xd(e, a.currentTarget));
                e = Sm(b, "mouseup");
                this.h.Cc(new _.xd(e, a.currentTarget));
                Rm || (b.button = c, b.type = d)
            }
        };
        Hm.prototype.L = function () {
            this.h = null;
            Hm.G.L.call(this)
        };
        var Tm = function () {};
        _.x(Tm, Bm);
        dj(Tm);
        _.h = Tm.prototype;
        _.h.oc = function () {};
        _.h.N = function (a) {
            Gm(a, !1);
            Om(a);
            a.Ga(32, !1);
            return a.g.N("BUTTON", {
                "class": wm(this, a).join(" "),
                disabled: !a.isEnabled(),
                title: a.ma() || "",
                value: a.Qa() || ""
            }, a.xb() || "")
        };
        _.h.sd = function (a) {
            return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
        };
        _.h.eb = function (a, b) {
            Gm(a, !1);
            Om(a);
            a.Ga(32, !1);
            if (b.disabled) {
                var c = this.g(1);
                _.R(b, c)
            }
            return Tm.G.eb.call(this, a, b)
        };
        _.h.hg = function (a) {
            S(a).D(a.A(), "click", a.Ic)
        };
        _.h.td = _.v;
        _.h.ye = _.v;
        _.h.xe = function (a) {
            return a.isEnabled()
        };
        _.h.pc = _.v;
        _.h.Nc = function (a, b, c) {
            Tm.G.Nc.call(this, a, b, c);
            (a = a.A()) && 1 == b && (a.disabled = c)
        };
        _.h.Qa = function (a) {
            return a.value
        };
        _.h.Ma = function (a, b) {
            a && (a.value = b)
        };
        _.h.sb = _.v;
        var Um = function (a, b, c) {
            U.call(this, a, b || Tm.ea(), c)
        };
        _.x(Um, U);
        _.h = Um.prototype;
        _.h.Qa = function () {
            return this.l
        };
        _.h.Ma = function (a) {
            this.l = a;
            this.h.Ma(this.A(), a)
        };
        _.h.ma = function () {
            return this.X
        };
        _.h.ne = function (a) {
            this.X = a;
            this.h.ne(this.A(), a)
        };
        _.h.L = function () {
            Um.G.L.call(this);
            delete this.l;
            delete this.X
        };
        _.h.Y = function () {
            Um.G.Y.call(this);
            if (this.ra & 32) {
                var a = this.A();
                a && S(this).D(a, "keyup", this.Oc)
            }
        };
        _.h.Oc = function (a) {
            return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ic(a) : 32 == a.keyCode
        };
        Dm("VIpgJd-LgbsSe", function () {
            return new Um(null)
        });
        var Vm = function () {};
        _.x(Vm, Bm);
        dj(Vm);
        Vm.prototype.N = function (a) {
            var b = wm(this, a);
            b = a.g.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + b.join(" "), Wm(this, a.wa(), a.g));
            this.ne(b, a.ma());
            return b
        };
        Vm.prototype.oc = function () {
            return "button"
        };
        Vm.prototype.Pb = function (a) {
            return a && a.firstChild && a.firstChild.firstChild
        };
        var Wm = function (a, b, c) {
            return c.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + (a.ua() + "-n0tgWb-Q4BLdf"), c.N("DIV", "VIpgJd-TzA9Ye-eEGnhe " + (a.ua() + "-SmKAyb-Q4BLdf"), b))
        };
        Vm.prototype.sd = function (a) {
            return "DIV" == a.tagName
        };
        Vm.prototype.eb = function (a, b) {
            Xm(b, !0);
            Xm(b, !1);
            a: {
                var c = a.g.Ig(b);
                var d = this.ua() + "-n0tgWb-Q4BLdf";
                if (c && El(c, d) && (c = a.g.Ig(c), d = this.ua() + "-SmKAyb-Q4BLdf", c && El(c, d))) {
                    c = !0;
                    break a
                }
                c = !1
            }
            c || b.appendChild(Wm(this, b.childNodes, a.g));
            Fl(b, ["VIpgJd-TzA9Ye-eEGnhe", this.ua()]);
            return Vm.G.eb.call(this, a, b)
        };
        Vm.prototype.ua = function () {
            return "goog-custom-button"
        };
        var Xm = function (a, b) {
            if (a)
                for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
                    d = b ? c.nextSibling : c.previousSibling;
                    if (3 == c.nodeType) {
                        var e = c.nodeValue;
                        if ("" == (0, _.Xb)(e)) a.removeChild(c);
                        else {
                            c.nodeValue = b ? Bj(e) : Cj(e);
                            break
                        }
                    } else break;
                    c = d
                }
        };
        var Ym = function (a, b, c) {
            Um.call(this, a, b || Vm.ea(), c);
            this.Ga(16, !0)
        };
        _.x(Ym, Um);
        Dm("VIpgJd-ornU0b-LgbsSe", function () {
            return new Ym(null)
        });
        var Zm = function () {
            _.B || 25 <= ii("Chromium") || 8 <= ii("Internet Explorer") || _.dc || ii("Firefox")
        };
        Zm.ea = function () {
            return Ul(Zm)
        };
        var $m = function () {
                this.h = [];
                this.g = {};
                this.l = !1;
                this.M = 1;
                this.s = {};
                this.j = null;
                this.o = "";
                _.H(window, "beforeunload", this.K, !1, this)
            },
            an = function (a, b, c) {
                if (null == b) return "1";
                switch (_.ob(b)) {
                case "string":
                    return a = b, 64 < a.length && (null == c || !c) && (a = a.substr(0, 64)), _.Vc(a);
                case "number":
                    return "" + b;
                case "boolean":
                    return b ? "1" : "0";
                case "array":
                    var d = [],
                        e;
                    for (e in b) d.push(an(a, b[e], c));
                    return d.join(",");
                case "object":
                    d = [];
                    for (e in b) d.push(bn(a, e, b[e], c));
                    return d.join(",");
                default:
                    return ""
                }
            },
            bn = function (a,
                b, c, d) {
                return [_.Vc(b), an(a, c, d || "smtalt" == b)].join("=")
            };
        $m.prototype.log = function (a, b) {
            this.h.push([a, b]);
            this.l || (this.l = !0, _.jg(this.C, 0, this))
        };
        $m.prototype.C = function () {
            for (var a = 0; a < this.h.length; a++) {
                var b = this.h[a];
                cn(this, b[0], b[1])
            }
            this.h = [];
            this.l = !1
        };
        var cn = function (a, b, c) {
                dn(a, a.o + "/gen204?" + (a.j ? ["client=", a.j, "&"].join("") : "") + bn(a, b, c))
            },
            dn = function (a, b) {
                var c = new Image,
                    d = a.M++;
                a.s[d] = c;
                c.onload = c.onerror = function () {
                    delete $m.ea().s[d]
                };
                c.src = b;
                c = null
            },
            fn = function (a, b) {
                var c = 0,
                    d = null;
                b in a.g && (d = a.g[b], c = d[0], d = d[1]);
                if ("object" == _.ob(1)) {
                    "object" != _.ob(d) && (d = {});
                    for (var e in 1) d[e] = en(e in d ? d[e] : null, 1[e])
                } else d = en(d, 1);
                a.g[b] = [c, d];
                _.kg(a.g[b][0]);
                c = _.jg((0, _.w)(a.B, a, b), 2E3);
                a.g[b][0] = c
            };
        $m.prototype.B = function (a) {
            cn(this, a, this.g[a][1]);
            a in this.g && (_.kg(this.g[a][0]), delete this.g[a])
        };
        var en = function (a, b) {
            null == b && (b = 1);
            isNaN(a) && (a = parseInt(a, 10));
            isNaN(b) && (b = parseInt(b, 10));
            return a + b
        };
        $m.prototype.K = function () {
            this.C();
            for (var a in this.g) 0 != this.g[a] && this.B(a)
        };
        $m.ea = function () {
            return Ul($m)
        };
        var gn = function (a) {
            _.Oh.call(this, a)
        };
        _.u(gn, _.Oh);
        var jn = function (a) {
            _.Oh.call(this, a, -1, hn)
        };
        _.u(jn, _.Oh);
        var hn = [5, 3, 4];
        var ln = function (a) {
            _.Oh.call(this, a, -1, kn)
        };
        _.u(ln, _.Oh);
        ln.prototype.ef = function () {
            return _.Hh(this, 1)
        };
        var kn = [3];
        var nn = function (a) {
            _.Oh.call(this, a, -1, mn)
        };
        _.u(nn, _.Oh);
        var mn = [2];
        var pn = function (a) {
            _.Oh.call(this, a, -1, on)
        };
        _.u(pn, _.Oh);
        _.h = pn.prototype;
        _.h.Wa = function () {
            return _.Hh(this, 16)
        };
        _.h.Lb = function (a) {
            _.Ih(this, 16, a)
        };
        _.h.ga = function () {
            return _.Hh(this, 1)
        };
        _.h.oa = function (a) {
            _.Ih(this, 1, a)
        };
        _.h.ef = function () {
            return _.Hh(this, 53)
        };
        var on = [26, 80];
        var qn = function () {
            this.P = this.h = "";
            Zm.ea()
        };
        qn.prototype.Lb = function (a) {
            this.h = a
        };
        qn.prototype.oa = function (a) {
            this.P = a
        };
        qn.prototype.store = function (a) {
            _.Ih(a, 65, 0);
            a.Lb(this.h);
            _.Ih(a, 14, "");
            a.oa(this.P);
            _.Ih(a, 50, "");
            _.Ih(a, 52, "");
            _.Ih(a, 32, 0)
        };
        qn.ea = function () {
            return Ul(qn)
        };
        var sn = function (a, b) {
                return a === b ? !0 : _.Vb(a, function (c, d) {
                    if (Hi(c)) {
                        d = c;
                        for (var e in d)
                            if (c = d[e], !rn(c, Ii(b, +e))) return !1;
                        return !0
                    }
                    return rn(c, Ii(b, d + 1))
                }) && _.Vb(b, function (c, d) {
                    if (Hi(c)) {
                        for (var e in c)
                            if (null == Ii(a, +e)) return !1;
                        return !0
                    }
                    return null == c == (null == Ii(a, d + 1))
                })
            },
            rn = function (a, b) {
                return a === b || null == a && null == b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b) ? !0 : Array.isArray(a) && Array.isArray(b) ? sn(a, b) : !1
            };
        var tn = function () {};
        tn.prototype.initialize = function (a, b, c, d) {
            this.g = a = a || [];
            if (a.length) {
                c = a.length - 1;
                var e = Hi(a[c]);
                c = e ? a[c] : {};
                e && a.length--;
                e = 0;
                for (var f in c) {
                    var g = +f;
                    g <= b ? (a[g - 1] = c[f], delete c[f]) : e++
                }
                for (g = f = 0; d && g < d.length;) {
                    f += d[g++];
                    var k = d[g++];
                    e += Ji(f, k, a, c);
                    f += k
                }
                a.length > b && (e += Ji(b, a.length - b, a, c), a.length = b);
                e && (a[b] = c)
            }
        };
        var un = function (a, b, c) {
                a = a.g[b];
                return null != a ? a : c
            },
            vn = function (a, b) {
                return !!un(a, b, void 0)
            },
            wn = function (a, b) {
                return +un(a, b, 0)
            },
            xn = function (a, b) {
                return un(a, b, "")
            },
            yn = function (a, b, c) {
                a = a.g;
                a[b] || (a[b] = []);
                return a[b][c]
            },
            V = function (a, b) {
                return (a = a.g[b]) ? a.length : 0
            };
        new Uint8Array(0);
        var zn = function () {
            _.y.call(this);
            this.g = qn.ea()
        };
        _.u(zn, _.y);
        zn.prototype.h = function () {
            An(this, 25)
        };
        var An = function (a, b) {
            var c = new pn;
            a.g.store(c);
            _.Ih(c, 31, b);
            return c
        };
        zn.ea = function () {
            return Ul(zn)
        };
        _.Cn = function (a, b, c, d, e) {
            this.C = !!b;
            this.node = null;
            this.g = 0;
            this.se = !1;
            this.B = !c;
            a && Bn(this, a, d);
            this.depth = void 0 != e ? e : this.g || 0;
            this.C && (this.depth *= -1)
        };
        _.x(_.Cn, _.ef);
        var Bn = function (a, b, c, d) {
            if (a.node = b) a.g = "number" === typeof c ? c : 1 != a.node.nodeType ? 0 : a.C ? -1 : 1;
            "number" === typeof d && (a.depth = d)
        };
        _.Cn.prototype.Mb = function () {
            var a = this.C ? -1 : 1;
            this.g == a && (this.g = -1 * a, this.depth += this.g * (this.C ? -1 : 1))
        };
        _.Cn.prototype.next = function () {
            if (this.se) {
                if (!this.node || this.B && 0 == this.depth) return _.ff;
                var a = this.node;
                var b = this.C ? -1 : 1;
                if (this.g == b) {
                    var c = this.C ? a.lastChild : a.firstChild;
                    c ? Bn(this, c) : Bn(this, a, -1 * b)
                } else(c = this.C ? a.previousSibling : a.nextSibling) ? Bn(this, c) : Bn(this, a.parentNode, -1 * b);
                this.depth += this.g * (this.C ? -1 : 1)
            } else this.se = !0;
            return (a = this.node) ? _.gf(a) : _.ff
        };
        _.Cn.prototype.Ra = function () {
            return _.hf(_.Cn.prototype.next.call(this))
        };
        var Dn = function () {},
            En = function (a) {
                for (var b = [], c = 0, d = a.hd(); c < d; c++) b.push(a.Ac(c));
                return b
            },
            Fn = function (a) {
                return a.sf() ? a.fb() : a.ub()
            };
        Dn.prototype.sf = function () {
            return !1
        };
        var Gn = function (a, b) {
            _.Cn.call(this, a, b, !0)
        };
        _.x(Gn, _.Cn);
        var Hn = function (a, b, c, d, e) {
            this.j = this.h = null;
            this.o = this.s = 0;
            this.l = !!e;
            if (a) {
                this.h = a;
                this.s = b;
                this.j = c;
                this.o = d;
                if (1 == a.nodeType && "BR" != a.tagName)
                    if (a = a.childNodes, b = a[b]) this.h = b, this.s = 0;
                    else {
                        a.length && (this.h = _.ra(a));
                        var f = !0
                    }
                1 == c.nodeType && ((this.j = c.childNodes[d]) ? this.o = 0 : this.j = c)
            }
            _.Cn.call(this, this.l ? this.j : this.h, this.l, !0);
            if (f) try {
                this.Ra()
            } catch (g) {
                if (g != _.df) throw g;
            }
        };
        _.x(Hn, Gn);
        _.h = Hn.prototype;
        _.h.Wg = !1;
        _.h.xd = function () {
            return this.h
        };
        _.h.kd = function () {
            return this.se && (this.node != (this.l ? this.h : this.j) ? !1 : this.l ? this.s ? -1 != this.g : 1 == this.g : !this.o || 1 != this.g)
        };
        _.h.next = function () {
            if (this.kd() || this.Wg) return _.ff;
            try {
                return _.gf(Hn.G.Ra.call(this))
            } catch (a) {
                if (a === _.df) return _.ff;
                throw a;
            }
        };
        _.h.Ra = function () {
            return _.hf(Hn.prototype.next.call(this))
        };
        _.h.Mb = function () {
            Hn.G.Mb.apply(this);
            _.ld(this.node, this.l ? this.h : this.j) && (this.Wg = !0)
        };
        var In = function () {};
        In.prototype.Ia = function () {
            return new Hn(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset)
        };
        var Jn = function (a) {
            this.g = a
        };
        _.x(Jn, In);
        var Kn = function (a) {
                var b = _.E(a).createRange();
                if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
                else if (Mj(a) || 3 == a.nodeType) {
                    for (var c, d = a;
                        (c = d.firstChild) && (Mj(c) || 3 == c.nodeType);) d = c;
                    b.setStart(d, 0);
                    for (d = a;
                        (c = d.lastChild) && (Mj(c) || 3 == c.nodeType);) d = c;
                    b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
                } else c = a.parentNode, a = Array.prototype.indexOf.call(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
                return b
            },
            Ln = function (a, b, c, d) {
                var e = _.E(a).createRange();
                e.setStart(a, b);
                e.setEnd(c, d);
                return e
            };
        Jn.prototype.select = function (a) {
            this.h(_.dd(_.E(this.g.startContainer)).getSelection(), a)
        };
        Jn.prototype.h = function (a) {
            a.removeAllRanges();
            a.addRange(this.g)
        };
        var Mn = function (a) {
            this.g = a
        };
        _.x(Mn, Jn);
        Mn.prototype.h = function (a, b) {
            !b || this.g.collapsed ? Mn.G.h.call(this, a, b) : (a.collapse(this.g.endContainer, this.g.endOffset), a.extend(this.g.startContainer, this.g.startOffset))
        };
        var Nn = function (a) {
            this.g = a
        };
        _.x(Nn, Jn);
        Nn.prototype.h = function (a, b) {
            b ? a.setBaseAndExtent(this.g.endContainer, this.g.endOffset, this.g.startContainer, this.g.startOffset) : a.setBaseAndExtent(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset)
        };
        var On = function (a) {
                return _.D ? new Nn(a) : _.C ? new Mn(a) : new Jn(a)
            },
            Pn = function (a) {
                return _.D ? new Nn(Kn(a)) : _.C ? new Mn(Kn(a)) : new Jn(Kn(a))
            };
        var Qn = function () {
            this.o = this.j = this.s = this.h = this.g = null;
            this.l = !1
        };
        _.x(Qn, Dn);
        var Rn = function (a, b) {
            var c = new Qn;
            c.g = a;
            c.l = !!b;
            return c
        };
        Qn.prototype.bf = function () {
            return Sn(this).g
        };
        Qn.prototype.hd = function () {
            return 1
        };
        Qn.prototype.Ac = function () {
            return this
        };
        var Sn = function (a) {
            var b;
            if (!(b = a.g)) {
                b = a.fb();
                var c = a.gb(),
                    d = a.ub(),
                    e = a.vb();
                b = _.D ? new Nn(Ln(b, c, d, e)) : _.C ? new Mn(Ln(b, c, d, e)) : new Jn(Ln(b, c, d, e));
                b = a.g = b
            }
            return b
        };
        _.h = Qn.prototype;
        _.h.ud = function () {
            return Sn(this).g.commonAncestorContainer
        };
        _.h.fb = function () {
            return this.h || (this.h = Sn(this).g.startContainer)
        };
        _.h.gb = function () {
            return null != this.s ? this.s : this.s = Sn(this).g.startOffset
        };
        _.h.ub = function () {
            return this.j || (this.j = Sn(this).g.endContainer)
        };
        _.h.vb = function () {
            return null != this.o ? this.o : this.o = Sn(this).g.endOffset
        };
        _.h.sf = function () {
            return this.l
        };
        _.h.wd = function () {
            return Sn(this).g.collapsed
        };
        _.h.vd = function () {
            return Sn(this).g.toString()
        };
        _.h.Ia = function () {
            return new Hn(this.fb(), this.gb(), this.ub(), this.vb())
        };
        _.h.select = function () {
            Sn(this).select(this.l)
        };
        var Tn = function () {};
        _.x(Tn, Dn);
        var Un = function () {
            this.j = this.h = this.g = null
        };
        _.x(Un, Tn);
        _.h = Un.prototype;
        _.h.bf = function () {
            return this.g || document.body.createControlRange()
        };
        _.h.hd = function () {
            return this.g ? this.g.length : 0
        };
        _.h.Ac = function (a) {
            a = this.g.item(a);
            return Rn(Pn(a), void 0)
        };
        _.h.ud = function () {
            return Vj.apply(null, this.df())
        };
        _.h.fb = function () {
            return Vn(this)[0]
        };
        _.h.gb = function () {
            return 0
        };
        _.h.ub = function () {
            var a = Vn(this),
                b = _.ra(a);
            return a.find(function (c) {
                return _.ld(c, b)
            })
        };
        _.h.vb = function () {
            return this.ub().childNodes.length
        };
        _.h.df = function () {
            if (!this.h && (this.h = [], this.g))
                for (var a = 0; a < this.g.length; a++) this.h.push(this.g.item(a));
            return this.h
        };
        var Vn = function (a) {
            a.j || (a.j = a.df().concat(), a.j.sort(function (b, c) {
                return b.sourceIndex - c.sourceIndex
            }));
            return a.j
        };
        Un.prototype.wd = function () {
            return !this.g || !this.g.length
        };
        Un.prototype.vd = function () {
            return ""
        };
        Un.prototype.Ia = function () {
            return new Wn(this)
        };
        Un.prototype.select = function () {
            this.g && this.g.select()
        };
        var Wn = function (a) {
            this.l = this.j = this.h = null;
            a && (this.l = Vn(a), this.h = this.l.shift(), this.j = _.ra(this.l) || this.h);
            _.Cn.call(this, this.h, !1, !0)
        };
        _.x(Wn, Gn);
        Wn.prototype.xd = function () {
            return this.h
        };
        Wn.prototype.kd = function () {
            return !this.depth && !this.l.length
        };
        Wn.prototype.next = function () {
            if (this.kd()) return _.ff;
            if (!this.depth) {
                var a = this.l.shift();
                Bn(this, a, 1, 1);
                return _.gf(a)
            }
            return Wn.G.next.call(this)
        };
        Wn.prototype.Ra = function () {
            return _.hf(Wn.prototype.next.call(this))
        };
        var Xn = function () {
            this.g = [];
            this.l = [];
            this.j = this.h = null
        };
        _.x(Xn, Tn);
        Xn.prototype.bf = function () {
            return this.g[0]
        };
        Xn.prototype.hd = function () {
            return this.g.length
        };
        Xn.prototype.Ac = function (a) {
            this.l[a] || (this.l[a] = Rn(On(this.g[a]), void 0));
            return this.l[a]
        };
        Xn.prototype.ud = function () {
            if (!this.j) {
                for (var a = [], b = 0, c = this.hd(); b < c; b++) a.push(this.Ac(b).ud());
                this.j = Vj.apply(null, a)
            }
            return this.j
        };
        var Zn = function (a) {
            a.h || (a.h = En(a), a.h.sort(function (b, c) {
                var d = b.fb();
                b = b.gb();
                var e = c.fb();
                c = c.gb();
                return d == e && b == c ? 0 : Yn(d, b, e, c) ? 1 : -1
            }));
            return a.h
        };
        _.h = Xn.prototype;
        _.h.fb = function () {
            return Zn(this)[0].fb()
        };
        _.h.gb = function () {
            return Zn(this)[0].gb()
        };
        _.h.ub = function () {
            return _.ra(Zn(this)).ub()
        };
        _.h.vb = function () {
            return _.ra(Zn(this)).vb()
        };
        _.h.wd = function () {
            return 0 == this.g.length || 1 == this.g.length && this.Ac(0).wd()
        };
        _.h.vd = function () {
            return En(this).map(function (a) {
                return a.vd()
            }).join("")
        };
        _.h.Ia = function () {
            return new $n(this)
        };
        _.h.select = function () {
            var a = _.dd(_.E(_.B ? this.ud() : this.fb())).getSelection();
            a.removeAllRanges();
            for (var b = 0, c = this.hd(); b < c; b++) a.addRange(this.Ac(b).bf())
        };
        var $n = function (a) {
            this.h = null;
            this.j = 0;
            a && (this.h = Zn(a).map(function (b) {
                return fk(b)
            }));
            _.Cn.call(this, a ? this.xd() : null, !1, !0)
        };
        _.x($n, Gn);
        $n.prototype.xd = function () {
            return this.h[0].xd()
        };
        $n.prototype.kd = function () {
            return this.h[this.j].kd()
        };
        $n.prototype.next = function () {
            try {
                var a = this.h[this.j],
                    b = a.Ra();
                Bn(this, a.node, a.g, a.depth);
                return _.gf(b)
            } catch (c) {
                if (c !== _.df || this.h.length - 1 == this.j) throw c;
                this.j++;
                return this.next()
            }
        };
        $n.prototype.Ra = function () {
            return _.hf($n.prototype.next.call(this))
        };
        var bo = function () {
                var a = window.getSelection();
                return a && ao(a)
            },
            ao = function (a) {
                var b = !1;
                if (a.createRange) try {
                        var c = a.createRange()
                    } catch (e) {
                        return null
                    } else if (a.rangeCount) {
                        if (1 < a.rangeCount) {
                            b = new Xn;
                            c = 0;
                            for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c));
                            return b
                        }
                        c = a.getRangeAt(0);
                        b = Yn(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
                    } else return null;
                    (a = c) && a.addElement ? (b = new Un, b.g = a, a = b) : a = Rn(On(a), b);
                return a
            },
            Yn = function (a, b, c, d) {
                if (a == c) return d < b;
                var e;
                if (1 == a.nodeType && b)
                    if (e =
                        a.childNodes[b]) a = e, b = 0;
                    else if (_.ld(a, c)) return !0;
                if (1 == c.nodeType && d)
                    if (e = c.childNodes[d]) c = e, d = 0;
                    else if (_.ld(c, a)) return !1;
                return 0 < (Uj(a, c) || b - d)
            };
        var co = function () {
            var a = bo();
            return null != a && !a.wd() && 0 < a.vd().length
        };
        var eo = function (a) {
                return function () {
                    return a
                }
            },
            fo = function (a, b) {
                for (var c = 0; c < b.length - 2; c += 3) {
                    var d = b.charAt(c + 2);
                    d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                    d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                    a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
                }
                return a
            },
            go = function (a, b) {
                var c = b.split(".");
                b = Number(c[0]) || 0;
                for (var d = [], e = 0, f = 0; f < a.length; f++) {
                    var g = a.charCodeAt(f);
                    128 > g ? d[e++] = g : (2048 > g ? d[e++] = g >> 6 | 192 : (55296 == (g & 64512) && f + 1 < a.length && 56320 == (a.charCodeAt(f + 1) & 64512) ? (g = 65536 + ((g & 1023) << 10) + (a.charCodeAt(++f) & 1023),
                        d[e++] = g >> 18 | 240, d[e++] = g >> 12 & 63 | 128) : d[e++] = g >> 12 | 224, d[e++] = g >> 6 & 63 | 128), d[e++] = g & 63 | 128)
                }
                a = b;
                for (e = 0; e < d.length; e++) a += d[e], a = fo(a, "+-a^+6");
                a = fo(a, "+-3^+b+-f");
                a ^= Number(c[1]) || 0;
                0 > a && (a = (a & 2147483647) + 2147483648);
                c = a % 1E6;
                return c.toString() + "." + (c ^ b)
            },
            ho = null,
            io = function () {
                var a = eo(String.fromCharCode(116)),
                    b = eo(String.fromCharCode(107));
                a = [a(), a()];
                a[1] = b();
                return a.join("")
            };
        var jo = function (a) {
            this.initialize(a, 6)
        };
        _.x(jo, tn);
        var ko = function (a) {
            this.initialize(a, 2)
        };
        _.x(ko, tn);
        var lo = function (a) {
            this.initialize(a, 8)
        };
        _.x(lo, tn);
        var mo = function (a, b) {
            return new jo(yn(a, 2, b))
        };
        var no = function (a) {
            this.initialize(a, 9)
        };
        _.x(no, tn);
        var oo = function (a) {
            this.initialize(a, 21)
        };
        _.x(oo, tn);
        var po = function (a, b) {
            return new lo(yn(a, 5, b))
        };
        var qo = function () {
                this.g = 0;
                this.h = zn.ea()
            },
            ro = function (a) {
                a = a.kb("q").join("");
                if (null !== ho) var b = ho;
                else {
                    var c = eo(String.fromCharCode(84));
                    b = eo(String.fromCharCode(75));
                    c = [c(), c()];
                    c[1] = b();
                    b = (ho = window[c.join(b())] || "") || ""
                }
                return "&" + io() + "=" + go(a, b)
            },
            so = function (a, b, c, d, e) {
                c = c.toString();
                c += ro(d);
                d = d.toString();
                var f = "POST";
                b += "?" + c;
                2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
                ++a.g;
                _.Bh(b, function (g) {
                    --a.g;
                    e(g)
                }, f, d, void 0, void 0)
            };
        qo.prototype.j = function (a, b, c) {
            c = c.target;
            !_.wg(c) || "[" != _.xg(c)[0] && "{" != _.xg(c)[0] ? (to(this, c), b && b(_.vg(c))) : (b = uo(c, "handleSingleResult_"), Array.isArray(b) && (b = new oo(b)), a(b))
        };
        qo.prototype.l = function (a, b, c) {
            c = c.target;
            if (_.wg(c)) {
                c = uo(c, "handleTextResult_");
                var d = [];
                if (a) d.push(Array.isArray(c) ? c[0] : c);
                else if (Array.isArray(c))
                    for (a = 0; a < c.length; ++a) d.push(Array.isArray(c[a]) ? c[a][0] : c[a]);
                b(d)
            } else to(this, c), b(null, c.j)
        };
        var uo = function (a, b) {
                var c = _.xg(a);
                a = {
                    "class": "trans.common.TranslationAPI",
                    func: b,
                    url: String(a.o)
                };
                try {
                    var d = JSON.parse(c)
                } catch (e) {
                    throw d = $m.ea(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
                }
                return d
            },
            to = function (a, b) {
                var c = b.j;
                c = c in vo ? vo[c] : 0;
                a = An(a.h, 148);
                var d = new gn;
                d = _.Ih(d, 1, 156);
                c && _.Ih(d, 5, c);
                _.Jh(a, 63, d);
                c = $m.ea();
                a = String(b.o);
                b = _.xg(b);
                c.log("invalidResponse", {
                    q: a.substring(0, 500),
                    ql: a.length,
                    r: b.substring(0, 500),
                    rl: b.length
                })
            },
            wo = {},
            vo = (wo[1] = 15, wo[2] = 16, wo[3] = 17, wo[4] = 18,
                wo[5] = 19, wo[6] = 20, wo[7] = 21, wo[8] = 22, wo[9] = 23, wo);
        var xo = function (a) {
            switch (a) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5;
            case 4:
                return 6;
            case 11:
                return 7;
            case 5:
                return 8;
            case 6:
                return 9;
            case 7:
                return 10;
            case 8:
                return 11;
            case 9:
                return 12;
            default:
                return 0
            }
        };
        _.yo = function () {
            return ""
        };
        var zo = window.google && google.translate && google.translate._const,
            Ao, Ri, Fo, Go, Ko, Oo;
        zo || (zo = {
            _cac: "",
            _cam: "",
            _cest: new Date,
            _cjlc: "",
            _cl: "",
            _cuc: "",
            _cnad: !1,
            _cnal: {},
            nl: "",
            _pah: "",
            _pas: "",
            _pbi: "",
            _pci: "",
            _phf: "",
            _pli: "",
            _plla: "",
            _pmi: "",
            _ps: "",
            _pta: "",
            _puh: ""
        });
        Ao = window.google && window.google.translate && window.google.translate.v || "";
        _.W = zo._cl || "en";
        Ri = zo._cuc;
        _.Bo = zo._cnad;
        _.Co = zo._cest;
        _.Do = zo._cnal || {};
        _.Si = "lib" == zo._cam ? 1 : 0;
        _.Eo = (zo._cac || "te") + (1 == _.Si ? "_lib" : "");
        Fo = function () {
            function a(d) {
                return function () {
                    return d
                }
            }
            var b = String.fromCharCode(107),
                c = a(String.fromCharCode(116));
            b = a(b);
            c = [c(), c()];
            c[1] = b();
            return zo["_c" + c.join(b())] || ""
        }();
        Go = zo._pah || "";
        _.Ho = zo._pas || "https://";
        _.Io = zo._pbi || "";
        _.Jo = zo._pci || "";
        Ko = zo._plla || "";
        _.Lo = zo._pli || "";
        _.Mo = zo._pmi || "";
        _.No = zo._ps || "";
        Oo = zo._puh || "";
        _.Po = "//" + Oo + "/translate_suggestion?client=" + _.Eo + _.yo();
        _.Qo = "https://www.google.cn/support/translate" + ("en" == _.W ? "" : "#googtrans/en/" + _.W);
        var To, $o, ap, bp, cp;
        _.Ro = function (a) {
            for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
            return b
        };
        _.So = function (a) {
            this.h = a ? [a] : [];
            this.g = [0];
            this.j = !1
        };
        _.So.prototype.register = function (a) {
            if (this.j) return a || function () {};
            this.g.push(0);
            var b = this.g.length - 1;
            return (0, _.w)(function () {
                this.g[b]++;
                a && a.apply(null, arguments);
                To(this)
            }, this)
        };
        _.So.prototype.delay = function (a) {
            return this.j ? a : (0, _.w)(function () {
                if (this.j) a.apply(null, arguments);
                else {
                    var b = arguments;
                    this.h.push(function () {
                        a.apply(null, b)
                    })
                }
            }, this)
        };
        _.So.prototype.finish = function () {
            this.g[0] = 1;
            To(this)
        };
        To = function (a) {
            for (var b = 0; b < a.g.length; ++b)
                if (0 == a.g[b]) return;
            a.j = !0;
            for (b = 0; b < a.h.length; ++b) {
                var c = a.h[b];
                a.h[b] = null;
                c.call()
            }
            a.h = [];
            a.g = []
        };
        _.Uo = function (a) {
            this.j = a;
            this.h = this.g = !1
        };
        _.Vo = function (a, b) {
            return (0, _.w)(function () {
                b && b.apply(null, arguments);
                this.h ? this.g || (this.j.call(), this.g = !0) : this.g = !0
            }, a)
        };
        _.Uo.prototype.finish = function () {
            this.h || (this.h = !0, this.g && this.j.call())
        };
        var Wo = function (a, b, c) {
                this.g = b;
                this.C = a;
                this.s = c || 0;
                this.j = this.h = !1
            },
            Xo = function (a) {
                a.h || a.o()
            };
        Wo.prototype.o = function () {
            (this.h = (this.j = !!this.C.call()) || 0 >= --this.s) ? (this.g.call(null, this.j), this.l = 0) : this.l = window.setTimeout((0, _.w)(this.o, this), 30)
        };
        Wo.prototype.cancel = function () {
            this.l && window.clearTimeout(this.l);
            this.h = !0;
            this.g.call(null, this.j)
        };
        _.Yo = function (a, b) {
            return function () {
                a.dispatchEvent(b)
            }
        };
        _.Zo = function (a) {
            a = (0, _.Xb)(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a) return "zh-CN";
            if ("zh-tw" == a) return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        };
        $o = function (a) {
            var b = [],
                c;
            for (c in a)
                if (a[c] !== Object.prototype[c]) {
                    var d = _.Vc(c);
                    if ("array" == _.ob(a[c]))
                        for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + _.Vc(a[c][e]));
                    else b.push(d + "=" + _.Vc(a[c]))
                }
            return b.join("&")
        };
        _.Li = function (a, b) {
            b = b || {};
            b.nca = a;
            b.client = _.Eo;
            Ao && (b.logld = "v" + Ao);
            var c = new Image;
            c.src = "//" + Oo + "/gen204?" + $o(b);
            c.onload = function () {
                c.onload = null
            }
        };
        ap = function () {
            var a = {};
            try {
                for (var b in Object.prototype) {
                    var c = Object.prototype[b];
                    delete Object.prototype[b];
                    a[b] = c
                }
            } catch (d) {
                return {}
            }
            return a
        };
        bp = function (a) {
            for (var b in a) Object.prototype[b] = a[b]
        };
        cp = function (a) {
            for (var b in a)
                if (a[b] !== Object.prototype[b]) return !1;
            return !0
        };
        var dp;
        _.Ki = null;
        dp = function () {};
        dp.prototype.attach = function (a, b, c) {
            for (var d in c) c[d] !== Object.prototype[d] && (b[d] = "function" === typeof c[d] ? c[d] : _.ub(Mi, a, Number(c[d])))
        };
        _.ep = new dp;
        var Ni = function (a) {
            _.Oh.call(this, a)
        };
        _.u(Ni, _.Oh);
        /*

 SPDX-License-Identifier: Apache-2.0
*/
        var fp = function (a) {
                this.url = a;
                this.timeout = -1;
                this.j = this.h = "callback";
                this.g = this.fc = null
            },
            jp = function (a, b) {
                b = void 0 === b ? {} : b;
                a.g = ek();
                var c = new yk(a.url),
                    d = new Map;
                a.j && d.set(a.j, a.h);
                c.g.o(Ck(b), d);
                gp(a).then(function () {
                    hp(a, c.toString())
                }).then(function () {
                    return a.g.promise
                }).then(function () {
                    ip(a)
                }, function () {
                    ip(a)
                });
                0 < a.timeout && (a.l = setTimeout(function () {
                    a.g.reject("Timeout!")
                }, a.timeout));
                return a.g.promise
            },
            hp = function (a, b) {
                var c = new MessageChannel;
                a.fc.contentWindow.postMessage({
                        url: b,
                        callbackName: a.h
                    },
                    "*", [c.port2]);
                c.port1.onmessage = function (d) {
                    var e = {};
                    void 0 !== a.l && (clearTimeout(a.l), a.l = void 0);
                    void 0 === d.data && a.g.reject("Callback called, but no data received");
                    "string" !== typeof d.data && a.g.reject("Exploitation attempt! Data is not a string!");
                    try {
                        e = JSON.parse(d.data)
                    } catch (f) {
                        a.g.reject("Invalid Data received: " + f.message)
                    }
                    a.g.resolve(e)
                }
            },
            gp = function (a) {
                var b = ek(),
                    c = _.ed(document, "IFRAME");
                if (!c.sandbox) throw Error("qa");
                c.sandbox.value = "allow-scripts";
                c.style.display = "none";
                a.fc = c;
                a = Oi();
                a = _.tj(_.Pc, wj("body", {}, cj(_.zi(xi(a)).toString())));
                c.srcdoc = _.Nc(a);
                a = _.Ib("data:text/html;charset=UTF-8;base64," + btoa(_.Nc(a).toString()));
                c.src = _.Sa(a).toString();
                c.addEventListener("load", function () {
                    return b.resolve(c)
                }, !1);
                c.addEventListener("error", function (d) {
                    b.reject(d)
                }, !1);
                document.documentElement.appendChild(c);
                return b.promise
            },
            ip = function (a) {
                null !== a.fc && (document.documentElement.removeChild(a.fc), a.fc = null)
            };
        var kp = function (a, b) {
            _.y.call(this);
            this.g = new yk(a);
            if (b)
                for (var c in b) b[c] !== Object.prototype[c] && this.g.g.set(c, b[c])
        };
        _.u(kp, _.y);
        kp.prototype.j = function () {
            return !0
        };
        kp.prototype.Ka = function () {
            return this.j()
        };
        kp.prototype.send = function () {
            return null
        };
        kp.prototype.cancel = function () {};
        var lp = function (a, b, c, d) {
            kp.call(this, a, b);
            this.l = null == d || !!d;
            a = this.h = new fp(this.g);
            a.h = "callback";
            a.j = void 0 === c ? "callback" : c
        };
        _.u(lp, kp);
        lp.prototype.j = function () {
            return this.l
        };
        lp.prototype.send = function (a, b) {
            a = jp(this.h, a);
            a.then(b);
            return a
        };
        lp.prototype.cancel = function (a) {
            a.cancel()
        };
        var mp = function (a, b) {
            kp.call(this, a, b);
            this.l = {};
            this.h = this.o = 0;
            window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && (this.h = 1);
            !this.h && window.XDomainRequest && "file:" != window.location.protocol && (this.h = 2, this.g.g.set("u", window.location.href))
        };
        _.u(mp, kp);
        mp.prototype.j = function () {
            return !!this.h
        };
        mp.prototype.send = function (a, b) {
            var c = ap(),
                d = ++this.o,
                e = {},
                f = {};
            "q" in a && (f.q = a.q, delete a.q);
            a.mode = this.h;
            1 == this.h ? (e.Nb = new _.lg, _.H(e.Nb, "complete", (0, _.w)(function () {
                e.Wc || (_.wg(e.Nb) ? b(_.xg(e.Nb)) : (this.eh(), b(null, _.xg(e.Nb) || null)), np(this, d))
            }, this)), _.H(e.Nb, "timeout", (0, _.w)(function () {
                e.Wc || (this.fh(), np(this, d))
            }, this)), e.Nb.send(this.g.toString() + "&" + $o(a), "POST", $o(f), {
                "Content-Type": "application/x-www-form-urlencoded"
            })) : (e.tb = new XDomainRequest, e.tb.timeout = 2E4, e.tb.onload = (0, _.w)(function () {
                e.Wc ||
                    (b(e.tb.responseText), np(this, d))
            }, this), e.tb.onerror = (0, _.w)(function () {
                e.Wc || (this.eh(), b(null), np(this, d))
            }, this), e.tb.ontimeout = (0, _.w)(function () {
                e.Wc || (this.fh(), b(null), np(this, d))
            }, this), e.tb.open("POST", this.g.toString() + "&" + $o(a)), e.tb.send($o(f)));
            this.l[d] = e;
            bp(c);
            return d
        };
        mp.prototype.cancel = function (a) {
            var b = this.l[a];
            b && (b.Wc = !0, b.tb && b.tb.abort(), np(this, a))
        };
        var np = function (a, b) {
            var c = a.l[b];
            c && (c.Nb ? (c.Nb.R(), c.Nb = null) : c.tb && (c.tb = null), delete a.l[b])
        };
        mp.prototype.L = function () {
            kp.prototype.L.call(this);
            for (var a in this.l) this.cancel(a)
        };
        _.ep.attach(17170, mp.prototype, {
            fh: 1,
            eh: 2
        });
        var op = function (a, b, c) {
            kp.call(this, a, c);
            this.l = b.proxyIsSupported;
            this.o = b.proxySend;
            this.h = b.proxyCancel
        };
        _.u(op, kp);
        op.prototype.j = function () {
            return this.l()
        };
        op.prototype.send = function (a, b) {
            return this.o(this.g.toString(), a, b)
        };
        op.prototype.cancel = function (a) {
            this.h(a)
        };
        _.pp = function (a, b) {
            b && (a.hl = b);
            return a
        };
        _.qp = function () {
            return !0
        };
        _.rp = function (a) {
            return a
        };
        var sp = function (a, b) {
            _.y.call(this);
            this.j = !0;
            this.h = a;
            this.g = b ? b : null
        };
        _.u(sp, _.y);
        var tp = function (a, b) {
            if (!a.j) return b;
            if ("array" != _.ob(b)) a = [
                [b, 200]
            ];
            else if (2 == b.length && "array" != _.ob(b[0]) && "array" != _.ob(b[1])) a = [
                [b[0], 200, b[1]],
                [b[1], 200, b[1]]
            ];
            else {
                a = [];
                for (var c = 0; c < b.length; ++c) a[c] = "array" != _.ob(b[c]) ? [b[c], 200] : [b[c][0], 200, b[c][1]]
            }
            return a
        };
        sp.prototype.o = function (a) {
            var b = this;
            return function (c) {
                if (c) try {
                    var d = c.indexOf("\x00");
                    0 <= d && (c = c.substr(0, d));
                    var e = JSON.parse(c)
                } catch (f) {
                    e = null, b.pj()
                }
                e ? a(tp(b, e), 200) : a([], 500)
            }
        };
        sp.prototype.l = function (a) {
            var b = this;
            return function (c) {
                c ? a(tp(b, c), 200) : a([], 500)
            }
        };
        sp.prototype.L = function () {
            _.y.prototype.L.call(this)
        };
        _.ep.attach(47504, sp.prototype, {
            pj: function () {
                _.Li("te_afbr")
            }
        });
        _.up = {
            0: "NO_ERROR",
            1: "UNKNOWN_ERROR",
            2: "JWT_TOKEN_CANNOT_PARSE",
            3: "JWT_TOKEN_MISS_PARAM",
            4: "JWT_TOKEN_INVALID_ISS",
            5: "JWT_TOKEN_INVALID",
            6: "INTERNAL_SERVER_ERROR",
            7: "OUT_OF_QUOTA",
            8: "INTERNAL_SERVER_ERROR"
        };
        _.wp = function (a, b, c, d, e, f) {
            _.y.call(this);
            var g;
            b ? g = {
                client: b
            } : g = {
                anno: 3,
                client: _.Eo,
                format: "html",
                v: "1.0"
            };
            c && (g.sp = c);
            g.key = a;
            Ao && (g.logld = "v" + Ao);
            this.s = d || null;
            this.mc = e || null;
            this.g = null;
            this.j = {
                Xc: (0, _.w)(this.K, this),
                zf: 300
            };
            a = this.o = new sp(g, f);
            b = _.Ho + Ko;
            this.l = a.g ? new op(b, a.g, {
                client: _.Eo
            }) : new lp(b, {
                client: _.Eo
            }, _.qp() ? "cb" : void 0);
            a = this.o;
            if (a.g) {
                if (!a.g) throw Error("ra");
                a = [{
                    Da: new op(_.Ho + Go + "/translate_a/t", a.g, a.h),
                    Xc: (0, _.w)(a.l, a),
                    he: 1900,
                    Af: 4294967295,
                    yf: -1,
                    Rf: 0,
                    Qd: !1
                }]
            } else b =
                _.Ho + Go, a = [{
                    Da: new mp(b + "/translate_a/t", a.h),
                    Xc: (0, _.w)(a.o, a),
                    he: 30720,
                    Af: 4294967295,
                    yf: -1,
                    Rf: 0,
                    Qd: !1
                }, {
                    Da: new lp(b + "/translate_a/t", a.h, "cb", _.B && 7 >= _.tc),
                    Xc: (0, _.w)(a.l, a),
                    he: 1900,
                    Af: 4294967295,
                    yf: -1,
                    Rf: 3,
                    Qd: !0
                }];
            this.C = new vp(a);
            this.h = !1;
            for (b = 0; b < a.length; ++b) this.h = this.h || a[b].Da.j();
            this.h || this.qj()
        };
        _.u(_.wp, _.y);
        _.wp.prototype.K = function (a) {
            return function (b) {
                if (b) try {
                    var c = JSON.parse(b)
                } catch (d) {
                    c = null
                }
                a(c && c[1] || void 0)
            }
        };
        _.wp.prototype.initialize = function (a) {
            this.B || (this.B = !0, this.C.start((0, _.w)(function (b) {
                b && (this.g = b, this.j.Da = b.Da);
                a()
            }, this)))
        };
        _.wp.prototype.Ka = function () {
            return null !== this.g && null !== this.g.Da && this.g.Da.Ka()
        };
        _.xp = function (a, b, c) {
            b = a.j.Xc(b);
            a.j.Da.send({
                q: c.substring(0, a.j.zf),
                sl: "auto",
                tl: "en"
            }, b)
        };
        _.wp.prototype.translate = function (a, b, c, d, e, f, g, k) {
            var l = this,
                m = this.g.Xc(a),
                n = {
                    q: b,
                    sl: c,
                    tl: d
                };
            n.tc = e;
            f && (n.ctt = 1);
            g && (n.dom = 1);
            k && (n.sr = 1);
            n[io()] = go(b.join(""), Fo);
            return this.s ? this.s.h().then(function (q) {
                null != q && (n.jwtt = q, n.rurl = location.hostname);
                return l.g.Da.send(n, (0, _.w)(yp(m), l))
            }, function (q) {
                q && l.mc && l.mc(q)
            }) : this.g.Da.send(n, m)
        };
        var yp = function (a) {
                return function (b, c) {
                    if (c && this.mc) {
                        try {
                            var d = JSON.parse(c).error_code
                        } catch (e) {
                            d = null
                        }
                        c = _.up[1];
                        this.mc(null == d ? c : _.up[d] || c)
                    }
                    a(b)
                }
            },
            zp = function (a, b) {
                b instanceof _.ne ? b.then(function (c) {
                    a.g.Da.cancel(c)
                }) : a.g.Da.cancel(b)
            },
            Ap = function (a) {
                return a.g.Qd ? a.g.he - (new yk(a.g.Da.g)).toString().length : a.g.he
            };
        _.wp.prototype.L = function () {
            _.y.prototype.L.call(this);
            this.g && (this.g.Da.R(), this.g.Da = null);
            this.j.Da = null;
            this.l.R();
            this.l = null
        };
        _.ep.attach(7361, _.wp.prototype, {
            qj: function () {
                _.Li("te_au")
            }
        });
        var vp = function (a) {
            this.h = a
        };
        vp.prototype.start = function (a) {
            this.g = a;
            this.j = 0;
            Bp(this)
        };
        var Bp = function (a) {
            if (a.j >= a.h.length) a.g(null);
            else {
                var b = a.h[a.j++];
                b.Oj ? Xo(new Wo((0, _.w)(b.Da.Ka, b.Da), (0, _.w)(function (c) {
                    c ? this.g(b) : Bp(this)
                }, a), b.Oj)) : b.Da.Ka() ? a.g(b) : Bp(a)
            }
        };
        var Cp = function () {
            this.g = []
        };
        Cp.prototype.add = function (a) {
            this.g.push(a)
        };
        var Dp = function () {
            this.g = []
        };
        _.u(Dp, Cp);
        Dp.prototype.add = function (a) {
            if (a)
                for (; a(););
        };
        Dp.ea = function () {
            return Ul(Dp)
        };
        _.Fp = function (a) {
            this.g = [];
            this.h = .5;
            Ep(this, a);
            this.l = 0;
            this.j = !0;
            this.o = (0, _.w)(this.s, this)
        };
        _.u(_.Fp, Cp);
        var Ep = function (a, b) {
            1 < b ? a.h = 1 : .001 > b ? a.h = .001 : b && (a.h = b)
        };
        _.Fp.prototype.add = function (a) {
            Cp.prototype.add.call(this, a);
            this.j && Gp(this)
        };
        var Gp = function (a) {
            a.j = !1;
            window.setTimeout(a.o, Math.min(a.l, 5E3))
        };
        _.Fp.prototype.s = function () {
            var a = (new Date).getTime();
            do {
                this.g.length && (this.g[0] && this.g[0]() || this.g.shift());
                var b = !!this.g.length;
                var c = 95 * this.h + 5;
                var d = (new Date).getTime() - a
            } while (b && d < c);
            this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
            b ? Gp(this) : this.j = !0
        };
        var Hp = _.Ro("A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR".split(" ")),
            Ip = _.Ro("APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE".split(" ")),
            Jp = _.Ro("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")),
            Kp = _.Ro(["submit", "button"]);
        var Mp = function (a, b) {
                this.j = _.B ? [] : null;
                this.h = [];
                this.done = !1;
                for (this.g = new _.Cn(a, !1, b, 3 === a.nodeType ? 0 : 1, 1); a = a.parentNode;) Lp(this, a, !0);
                this.h.push(!1);
                this.h.reverse();
                for (a = 1; a < this.h.length; ++a) null == this.h[a] && (this.h[a] = this.h[a - 1])
            },
            Lp = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
                "pre" === d || !d && "PRE" === b.tagName ? a.h.push(!0) : d && "pre" !== d ? a.h.push(!1) : c ? a.h.push(null) : a.h.push(a.h[a.h.length - 1])
            },
            Np = function (a) {
                return !!a.h[a.h.length - 1]
            };
        Mp.prototype.node = function () {
            return this.g.node
        };
        Mp.prototype.depth = function () {
            return this.g.depth
        };
        Mp.prototype.next = function () {
            try {
                this.j && 0 < this.j.length && -1 === this.g.g && this.j.length--, -1 === this.g.g && this.h.length--, this.j && 0 < this.j.length && 1 !== this.g.g && !this.g.node.nextSibling ? Bn(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1) : (this.g.Ra(), this.j && 1 === this.g.g && this.j.push(this.g.node)), 1 === this.g.g && this.g.se && Lp(this, this.g.node)
            } catch (a) {
                a !== _.df && this.wj(a), this.done = !0
            }
        };
        _.ep.attach(52754, Mp.prototype, {
            wj: 1
        });
        var Op;
        Op = function () {
            return "[msg_undefined]"
        };
        _.X = {};
        (function () {
            var a = function (b) {
                return function () {
                    return b
                }
            };
            _.X = {
                Ie: a(0),
                ue: a(1),
                cg: a(2),
                Tk: a(3),
                fi: a(4),
                dg: a(5),
                Yh: a(45),
                Zh: a(6),
                ng: a(7),
                Tc: a(8),
                hi: a(9),
                il: a(10),
                li: a(11),
                og: a(12),
                el: a(13),
                di: a(14),
                dl: a(15),
                pg: a(16),
                kl: a(17),
                ii: a(18),
                nk: a(19),
                Sk: a(20),
                Kh: a(21),
                ei: a(22),
                Zk: a(23),
                Yk: a(24),
                bi: a(25),
                jl: a(26),
                gi: a(27),
                ci: a(28),
                $h: a(29),
                ji: a(30),
                mk: a(32),
                lk: a(33),
                ki: a(34),
                zk: a(35),
                tk: a(36),
                yk: a(37),
                qg: a(38),
                Kk: a(39),
                bg: a(40),
                ai: a(41),
                mg: a(46)
            }
        })();
        _.Pp = function () {
            var a = Qi("google.translate.m");
            if (a)
                for (var b in _.X)
                    if (_.X[b] !== Object.prototype[_.X[b]] && _.X[b]) {
                        var c = _.X[b]();
                        _.X[b] = a[c] ? a[c] : Op
                    }
        };
        var Qp = function () {
            _.I.call(this);
            this.g = 0;
            this.endTime = this.startTime = null
        };
        _.x(Qp, _.I);
        Qp.prototype.j = function () {
            this.h("begin")
        };
        Qp.prototype.l = function () {
            this.h("end")
        };
        Qp.prototype.Wb = function () {
            this.h("stop")
        };
        Qp.prototype.h = function (a) {
            this.dispatchEvent(a)
        };
        var Rp = function (a, b) {
                Array.isArray(b) || (b = [b]);
                b = b.map(function (c) {
                    return "string" === typeof c ? c : c.Al + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
                });
                _.L(a, "transition", b.join(","))
            },
            Sp = _.Ab(function () {
                if (_.B) return _.vc("10.0");
                var a = _.ed(document, "DIV"),
                    b = _.D ? "-webkit" : _.C ? "-moz" : _.B ? "-ms" : null,
                    c = {
                        transition: "opacity 1s linear"
                    };
                b && (c[b + "-transition"] = "opacity 1s linear");
                b = wj("div", {
                    style: c
                });
                _.Fi(a, b);
                a = a.firstChild;
                b = a.style[_.yh("transition")];
                return "" != ("undefined" !== typeof b ? b : a.style[_.Qh(a,
                    "transition")] || "")
            });
        var Tp = function (a, b, c, d, e) {
            Qp.call(this);
            this.I = a;
            this.C = b;
            this.B = c;
            this.o = d;
            this.K = Array.isArray(e) ? e : [e]
        };
        _.x(Tp, Qp);
        _.h = Tp.prototype;
        _.h.play = function () {
            if (1 == this.g) return !1;
            this.j();
            this.h("play");
            this.startTime = _.vb();
            this.g = 1;
            if (Sp()) return _.L(this.I, this.B), this.s = _.jg(this.Nj, void 0, this), !0;
            this.ze(!1);
            return !1
        };
        _.h.Nj = function () {
            Vk(this.I);
            Rp(this.I, this.K);
            _.L(this.I, this.o);
            this.s = _.jg((0, _.w)(this.ze, this, !1), 1E3 * this.C)
        };
        _.h.stop = function () {
            1 == this.g && this.ze(!0)
        };
        _.h.ze = function (a) {
            _.L(this.I, "transition", "");
            _.kg(this.s);
            _.L(this.I, this.o);
            this.endTime = _.vb();
            this.g = 0;
            a ? this.Wb() : this.h("finish");
            this.l()
        };
        _.h.L = function () {
            this.stop();
            Tp.G.L.call(this)
        };
        var Up = function (a, b) {
            _.I.call(this);
            this.o = new _.J(this);
            this.qc(a || null);
            b && (this.Lc = b)
        };
        _.x(Up, _.I);
        _.h = Up.prototype;
        _.h.I = null;
        _.h.Vc = !0;
        _.h.tg = null;
        _.h.bc = !1;
        _.h.uf = -1;
        _.h.Lc = "toggle_display";
        _.h.A = function () {
            return this.I
        };
        _.h.qc = function (a) {
            if (this.bc) throw Error("sa");
            this.I = a
        };
        _.h.nd = function (a) {
            if (this.bc) throw Error("sa");
            this.Vc = a
        };
        _.h.isVisible = function () {
            return this.bc
        };
        _.h.S = function (a) {
            this.xa && this.xa.stop();
            this.la && this.la.stop();
            if (a) {
                if (!this.bc && this.Ae()) {
                    if (!this.I) throw Error("ta");
                    this.Ab();
                    a = _.E(this.I);
                    if (this.Vc)
                        if (this.o.D(a, "mousedown", this.Ef, !0), _.B) {
                            try {
                                var b = a.activeElement
                            } catch (d) {}
                            for (; b && "IFRAME" == b.nodeName;) {
                                try {
                                    var c = _.Wj(b)
                                } catch (d) {
                                    break
                                }
                                a = c;
                                b = a.activeElement
                            }
                            this.o.D(a, "mousedown", this.Ef, !0);
                            this.o.D(a, "deactivate", this.lh)
                        } else this.o.D(a, "blur", this.lh);
                        "toggle_display" == this.Lc ? (this.I.style.visibility = "visible", _.O(this.I, !0)) :
                        "move_offscreen" == this.Lc && this.Ab();
                    this.bc = !0;
                    this.uf = Date.now();
                    this.xa ? (_.Kd(this.xa, "end", this.mh, !1, this), this.xa.play()) : this.mh()
                }
            } else Vp(this)
        };
        _.h.Ab = _.v;
        var Vp = function (a, b) {
            a.bc && a.dispatchEvent({
                type: "beforehide",
                target: b
            }) && (a.o && _.Zf(a.o), a.bc = !1, a.la ? (_.Kd(a.la, "end", _.ub(a.wg, b), !1, a), a.la.play()) : a.wg(b))
        };
        _.h = Up.prototype;
        _.h.wg = function (a) {
            "toggle_display" == this.Lc ? this.hj() : "move_offscreen" == this.Lc && (this.I.style.top = "-10000px");
            this.Gf(a)
        };
        _.h.hj = function () {
            this.I.style.visibility = "hidden";
            _.O(this.I, !1)
        };
        _.h.Ae = function () {
            return this.dispatchEvent("beforeshow")
        };
        _.h.mh = function () {
            this.dispatchEvent("show")
        };
        _.h.Gf = function (a) {
            this.dispatchEvent({
                type: "hide",
                target: a
            })
        };
        _.h.Ef = function (a) {
            a = a.target;
            _.ld(this.I, a) || Wp(this, a) || 150 > Date.now() - this.uf || Vp(this, a)
        };
        _.h.lh = function (a) {
            var b = _.E(this.I);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || _.ld(this.I, a) || "BODY" == a.tagName || Wp(this, a)) return
            } else if (a.target != b) return;
            150 > Date.now() - this.uf || Vp(this)
        };
        var Wp = function (a, b) {
            return _.Ub(a.tg || [], function (c) {
                return b === c || _.ld(c, b)
            })
        };
        Up.prototype.L = function () {
            Up.G.L.call(this);
            this.o.R();
            _.ca(this.xa);
            _.ca(this.la);
            delete this.I;
            delete this.o;
            delete this.tg
        };
        var Xp = function (a, b) {
            this.s = b || void 0;
            Up.call(this, a)
        };
        _.x(Xp, Up);
        Xp.prototype.Ab = function () {
            if (this.s) {
                var a = !this.isVisible() && "move_offscreen" != this.Lc,
                    b = this.A();
                a && (b.style.visibility = "hidden", _.O(b, !0));
                this.s.h(b, 8, this.xf);
                a && _.O(b, !1)
            }
        };
        var Yp = function (a, b) {
            Xp.call(this, a);
            this.j = b;
            this.g = 0;
            this.h = null;
            this.l = 0;
            this.S(!0);
            this.S(!1);
            _.R(this.A(), "round-trip-popup");
            _.R(this.j, "round-trip-content")
        };
        _.u(Yp, Xp);
        Yp.prototype.K = function () {
            _.kg(this.l);
            1 == this.g ? _.Kd(this.h, "finish", (0, _.w)(this.K, this)) : 0 == this.g && (this.l = _.jg((0, _.w)(this.B, this, -1), 200))
        };
        Yp.prototype.B = function (a) {
            if (this.g != a && (0 != this.g || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
                var b = this.isVisible();
                this.S(!0);
                var c = -Math.ceil(Vk(this.j).width);
                Wk(this.A()) && (c = -c);
                var d = 1 == a ? c : 0;
                c = 1 == a ? 0 : c;
                this.S(b);
                if (Sp()) {
                    b = .2;
                    if (0 != this.g) {
                        var e = parseInt(Kk(this.j, "left"), 10);
                        this.C();
                        b *= (c - e) / (c - d);
                        d = e
                    }
                    this.g = a;
                    this.h = new Tp(this.j, b, {
                        left: d + "px"
                    }, {
                        left: c + "px"
                    }, "left " + b + "s");
                    this.h.play();
                    _.Kd(this.h, "finish", (0, _.w)(this.C, this)); - 1 == a ? _.Kd(this.h, "finish", (0, _.w)(this.S, this, !1)) : this.S(!0)
                } else _.L(this.j, "left", c + "px"), this.S(1 == a ? !0 : !1)
            }
        };
        Yp.prototype.C = function () {
            0 != this.g && (this.h.stop(), _.jg((0, _.w)(ck, this, this.h)), this.g = 0, this.h = null)
        };
        var $p = function () {
            this.I = null;
            this.g = _.Kj("DIV", "gt-hl-layer", document.createTextNode(""));
            this.h = null;
            this.I && (Oj(this.g, this.I), Zp(this))
        };
        $p.prototype.attach = function (a) {
            this.h = a
        };
        var bq = function (a, b, c, d, e) {
                var f = d || "gt-hl-text";
                d = a.I && (a.I.value || _.qd(a.I));
                Zp(a);
                _.hd(a.g);
                if (b != c || e) {
                    if (0 < b) {
                        var g = d.substring(0, b);
                        aq(a.g, g, 0, e)
                    }
                    b < c && (g = d.substring(b, c), f = _.Kj("SPAN", f), aq(f, g, b, e), a.g.appendChild(f));
                    c < d.length && (g = d.substring(c), aq(a.g, g, c, e))
                }
            },
            Zp = function (a) {
                var b = a.I;
                var c = _.E(b),
                    d = _.B && b.currentStyle;
                d && _.bd(_.F(c).U) && "auto" != d.width && "auto" != d.height && !d.boxSizing ? (c = $k(b, d.width, "width", "pixelWidth"), b = $k(b, d.height, "height", "pixelHeight"), b = new _.Tc(c, b)) : (d = _.Yk(b),
                    c = bl(b), b = el(b), b = new _.Tc(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
                _.fl(a.g, b);
                c = Rk(a.I);
                b = a.g;
                d = c.x;
                c = c.y;
                var e = Rk(b);
                d instanceof N && (c = d.y, d = d.x);
                _.Nk(b, b.offsetLeft + (d - e.x), b.offsetTop + (Number(c) - e.y));
                b = bl(a.I);
                _.L(a.g, "paddingLeft", b.left + "px");
                _.L(a.g, "paddingRight", b.right + "px");
                a.g.dir = a.I.dir
            },
            aq = function (a, b, c, d) {
                d = d || [];
                for (var e = 0, f; f = d[e]; e++)
                    if (!(0 > f.cd - c)) {
                        if (f.cd - c >= b.length) break;
                        if (0 < f.cd - c) {
                            var g = b.substring(0, f.cd - c);
                            cq(a, g)
                        }
                        var k = f.className ||
                            "gt-hl-text";
                        g = b.substring(f.cd - c, f.Zf - c);
                        var l = _.Kj("SPAN");
                        Dl(l, k);
                        cq(l, g);
                        a.appendChild(l);
                        b = b.substring(f.Zf - c);
                        c = f.Zf
                    }
                b && cq(a, b)
            },
            cq = function (a, b) {
                b = b.replace(/(\r\n|\r|\n)/g, "\n").split("\n");
                for (var c = 0, d = b.length; c < d; c++) {
                    if (0 < c) {
                        var e = _.Kj("BR");
                        a.appendChild(e)
                    }
                    a.appendChild(document.createTextNode(String(b[c])))
                }
            };
        var dq = function (a) {
            _.I.call(this);
            this.I = a;
            a = _.B ? "focusout" : "blur";
            this.g = _.H(this.I, _.B ? "focusin" : "focus", this, !_.B);
            this.h = _.H(this.I, a, this, !_.B)
        };
        _.x(dq, _.I);
        dq.prototype.handleEvent = function (a) {
            var b = new _.xd(a.g);
            b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
            this.dispatchEvent(b)
        };
        dq.prototype.L = function () {
            dq.G.L.call(this);
            _.Sd(this.g);
            _.Sd(this.h);
            delete this.I
        };
        var eq = function (a, b, c) {
            this.element = a;
            this.j = b;
            this.C = c
        };
        _.x(eq, Il);
        eq.prototype.h = function (a, b, c) {
            Pl(this.element, this.j, a, b, void 0, c, this.C)
        };
        var fq = function (a, b) {
            this.g = a instanceof N ? a : new N(a, b)
        };
        _.x(fq, Il);
        fq.prototype.h = function (a, b, c) {
            Pl(Ok(a), 0, a, b, this.g, c, null, void 0)
        };
        var Y = function (a, b, c) {
            this.V = c || (a ? _.F(_.Zc(document, a)) : _.F());
            Xp.call(this, this.V.N("DIV", {
                style: "position:absolute;display:none;"
            }));
            this.Sb = new N(1, 1);
            this.C = new _.tf;
            this.K = null;
            a && this.attach(a);
            null != b && this.mb(b)
        };
        _.x(Y, Xp);
        var gq = [];
        _.h = Y.prototype;
        _.h.Oa = null;
        _.h.className = "VIpgJd-suEOdc";
        _.h.zh = 500;
        _.h.Xg = 0;
        _.h.attach = function (a) {
            a = _.Zc(document, a);
            this.C.add(a);
            _.H(a, "mouseover", this.Be, !1, this);
            _.H(a, "mouseout", this.Bc, !1, this);
            _.H(a, "mousemove", this.zg, !1, this);
            _.H(a, "focus", this.uc, !1, this);
            _.H(a, "blur", this.Bc, !1, this)
        };
        var iq = function (a, b) {
                if (b) b = _.Zc(document, b), hq(a, b), a.C.remove(b);
                else {
                    for (var c = a.C.kb(), d = 0; b = c[d]; d++) hq(a, b);
                    a = a.C;
                    $i(a.g);
                    a.size = 0
                }
            },
            hq = function (a, b) {
                _.Rd(b, "mouseover", a.Be, !1, a);
                _.Rd(b, "mouseout", a.Bc, !1, a);
                _.Rd(b, "mousemove", a.zg, !1, a);
                _.Rd(b, "focus", a.uc, !1, a);
                _.Rd(b, "blur", a.Bc, !1, a)
            };
        Y.prototype.mb = function (a) {
            _.md(this.A(), a)
        };
        Y.prototype.qc = function (a) {
            var b = this.A();
            b && _.Qj(b);
            Y.G.qc.call(this, a);
            a ? (b = this.V.U.body, b.insertBefore(a, b.lastChild), _.ca(this.K), this.K = new dq(this.A()), Ui(this, _.ub(_.ca, this.K)), _.H(this.K, "focusin", this.O, void 0, this), _.H(this.K, "focusout", this.Ua, void 0, this)) : (_.ca(this.K), this.K = null)
        };
        Y.prototype.Qc = function () {
            return _.qd(this.A())
        };
        var jq = function (a) {
            return a.W ? a.isVisible() ? 4 : 1 : a.ba ? 3 : a.isVisible() ? 2 : 0
        };
        _.h = Y.prototype;
        _.h.Ae = function () {
            if (!Up.prototype.Ae.call(this)) return !1;
            if (this.g)
                for (var a, b = 0; a = gq[b]; b++) _.ld(a.A(), this.g) || a.S(!1);
            _.ua(gq, this);
            a = this.A();
            a.className = this.className;
            this.O();
            _.H(a, "mouseover", this.Zd, !1, this);
            _.H(a, "mouseout", this.Yd, !1, this);
            kq(this);
            return !0
        };
        _.h.Gf = function () {
            _.va(gq, this);
            for (var a = this.A(), b, c = 0; b = gq[c]; c++) b.g && _.ld(a, b.g) && b.S(!1);
            this.Dg && this.Dg.Ua();
            _.Rd(a, "mouseover", this.Zd, !1, this);
            _.Rd(a, "mouseout", this.Yd, !1, this);
            this.g = void 0;
            0 == jq(this) && (this.Ta = !1);
            Up.prototype.Gf.call(this)
        };
        _.h.Bf = function (a, b) {
            this.g == a && this.C.contains(this.g) && (this.Ta || !this.wl ? (this.S(!1), this.isVisible() || (this.g = a, this.s = b || new lq(Vi(this.Sb)), this.isVisible() && this.Ab(), this.S(!0))) : this.g = void 0);
            this.W = void 0
        };
        _.h.df = function () {
            return this.C
        };
        _.h.zj = function (a) {
            this.ba = void 0;
            if (a == this.g) {
                a = this.V;
                var b = a.U;
                try {
                    var c = b && b.activeElement;
                    var d = c && c.nodeName ? c : null
                } catch (e) {
                    d = null
                }
                d = d && this.A() && a.contains(this.A(), d);
                null != this.Oa && (this.Oa == this.A() || this.C.contains(this.Oa)) || d || this.xc && this.xc.Oa || this.S(!1)
            }
        };
        var mq = function (a, b) {
            var c = _.Zi(a.V.U);
            a.Sb.x = b.clientX + c.x;
            a.Sb.y = b.clientY + c.y
        };
        Y.prototype.Be = function (a) {
            var b = nq(this, a.target);
            this.Oa = b;
            this.O();
            b != this.g && (this.g = b, oq(this, b), pq(this), mq(this, a))
        };
        var nq = function (a, b) {
            try {
                for (; b && !a.C.contains(b);) b = b.parentNode;
                return b
            } catch (c) {
                return null
            }
        };
        Y.prototype.zg = function (a) {
            mq(this, a);
            this.Ta = !0
        };
        Y.prototype.uc = function (a) {
            this.Oa = a = nq(this, a.target);
            this.Ta = !0;
            if (this.g != a) {
                this.g = a;
                var b = new qq(this.Oa);
                this.O();
                oq(this, a, b);
                pq(this)
            }
        };
        var pq = function (a) {
            if (a.g)
                for (var b, c = 0; b = gq[c]; c++) _.ld(b.A(), a.g) && (b.xc = a, a.Dg = b)
        };
        Y.prototype.Bc = function (a) {
            var b = nq(this, a.target),
                c = nq(this, a.relatedTarget);
            b != c && (b == this.Oa && (this.Oa = null), kq(this), this.Ta = !1, !this.isVisible() || a.relatedTarget && _.ld(this.A(), a.relatedTarget) ? this.g = void 0 : this.Ua())
        };
        Y.prototype.Zd = function () {
            var a = this.A();
            this.Oa != a && (this.O(), this.Oa = a)
        };
        Y.prototype.Yd = function (a) {
            var b = this.A();
            this.Oa != b || a.relatedTarget && _.ld(b, a.relatedTarget) || (this.Oa = null, this.Ua())
        };
        var oq = function (a, b, c) {
                a.W || (a.W = _.jg((0, _.w)(a.Bf, a, b, c), a.zh))
            },
            kq = function (a) {
                a.W && (_.kg(a.W), a.W = void 0)
            };
        Y.prototype.Ua = function () {
            2 == jq(this) && (this.ba = _.jg((0, _.w)(this.zj, this, this.g), this.Xg))
        };
        Y.prototype.O = function () {
            this.ba && (_.kg(this.ba), this.ba = void 0)
        };
        Y.prototype.L = function () {
            this.S(!1);
            kq(this);
            iq(this);
            this.A() && _.Qj(this.A());
            this.Oa = null;
            delete this.V;
            Y.G.L.call(this)
        };
        var lq = function (a, b) {
            fq.call(this, a, b)
        };
        _.x(lq, fq);
        lq.prototype.h = function (a, b, c) {
            b = Ok(a);
            b = Sk(b);
            c = c ? new Ik(c.top + 10, c.right, c.bottom, c.left + 10) : new Ik(10, 0, 0, 10);
            Ol(this.g, a, 8, c, b, 9) & 496 && Ol(this.g, a, 8, c, b, 5)
        };
        var qq = function (a) {
            eq.call(this, a, 5)
        };
        _.x(qq, eq);
        qq.prototype.h = function (a, b, c) {
            var d = new N(10, 0);
            Pl(this.element, this.j, a, b, d, c, 9) & 496 && Pl(this.element, 4, a, 1, d, c, 5)
        };
        var rq = function () {
            this.l = []
        };
        _.x(rq, tm);
        dj(rq);
        var sq = function (a, b) {
            var c = a.l[b];
            if (!c) {
                switch (b) {
                case 0:
                    c = a.ua() + "-sn54Q";
                    break;
                case 1:
                    c = a.ua() + "-MPu53c";
                    break;
                case 2:
                    c = a.ua() + "-bN97Pc"
                }
                a.l[b] = c
            }
            return c
        };
        _.h = rq.prototype;
        _.h.oc = function () {
            return "menuitem"
        };
        _.h.N = function (a) {
            var b = a.g.N("DIV", wm(this, a).join(" "), tq(this, a.wa(), a.g));
            uq(this, a, b, !!(a.ra & 8) || !!(a.ra & 16));
            return b
        };
        _.h.Pb = function (a) {
            return a && a.firstChild
        };
        _.h.eb = function (a, b) {
            var c = _.kd(b),
                d = sq(this, 2);
            c && El(c, d) || b.appendChild(tq(this, b.childNodes, a.g));
            El(b, "VIpgJd-wQNmvb") && (a.le(!0), this.le(a, b, !0));
            return rq.G.eb.call(this, a, b)
        };
        _.h.Mc = function (a, b) {
            var c = this.Pb(a),
                d = vq(this, a) ? c.firstChild : null;
            rq.G.Mc.call(this, a, b);
            d && !vq(this, a) && c.insertBefore(d, c.firstChild || null)
        };
        var tq = function (a, b, c) {
            a = sq(a, 2);
            return c.N("DIV", a, b)
        };
        rq.prototype.yh = function (a, b, c) {
            a && b && uq(this, a, b, c)
        };
        rq.prototype.le = function (a, b, c) {
            a && b && uq(this, a, b, c)
        };
        var vq = function (a, b) {
                return (b = a.Pb(b)) ? (b = b.firstChild, a = sq(a, 1), !!b && Rj(b) && El(b, a)) : !1
            },
            uq = function (a, b, c, d) {
                ym(a, c, b.gd());
                zm(a, b, c);
                d != vq(a, c) && (d ? _.R(c, "VIpgJd-wQNmvb") : _.Gl(c, "VIpgJd-wQNmvb"), c = a.Pb(c), d ? (a = sq(a, 1), c.insertBefore(b.g.N("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
            };
        rq.prototype.g = function (a) {
            switch (a) {
            case 2:
                return sq(this, 0);
            case 16:
            case 8:
                return "VIpgJd-wQNmvb-gk6SMd";
            default:
                return rq.G.g.call(this, a)
            }
        };
        rq.prototype.j = function (a) {
            var b = sq(this, 0);
            switch (a) {
            case "VIpgJd-wQNmvb-gk6SMd":
                return 16;
            case b:
                return 2;
            default:
                return rq.G.j.call(this, a)
            }
        };
        rq.prototype.ua = function () {
            return "VIpgJd-j7LFlb"
        };
        var wq = function (a, b, c, d) {
            U.call(this, a, d || rq.ea(), c);
            this.Ma(b)
        };
        _.x(wq, U);
        _.h = wq.prototype;
        _.h.Qa = function () {
            var a = this.ob;
            return null != a ? a : this.xb()
        };
        _.h.Ma = function (a) {
            this.ob = a
        };
        _.h.Ga = function (a, b) {
            wq.G.Ga.call(this, a, b);
            switch (a) {
            case 8:
                this.ka & 16 && !b && Im(this, 16, !1) && Lm(this, 16, !1);
                (a = this.A()) && this.h.yh(this, a, b);
                break;
            case 16:
                (a = this.A()) && this.h.le(this, a, b)
            }
        };
        _.h.yh = function (a) {
            this.Ga(8, a)
        };
        _.h.le = function (a) {
            this.Ga(16, a)
        };
        _.h.xb = function () {
            var a = this.wa();
            return Array.isArray(a) ? (a = _.Sb(a, function (b) {
                return Rj(b) && (El(b, "VIpgJd-j7LFlb-x29Bmf") || El(b, "VIpgJd-j7LFlb-PQTlnb-hgDUwe")) ? "" : ak(b)
            }).join(""), Aj(a)) : wq.G.xb.call(this)
        };
        _.h.Cc = function (a) {
            var b = this.T();
            if (b) {
                var c = b.la;
                b.la = null;
                if (b = c && "number" === typeof a.clientX) b = new N(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
                if (b) return
            }
            wq.G.Cc.call(this, a)
        };
        _.h.Oc = function (a) {
            return a.keyCode == this.ih && this.Ic(a) ? !0 : wq.G.Oc.call(this, a)
        };
        _.h.Ci = function () {
            return this.ih
        };
        Dm("VIpgJd-j7LFlb", function () {
            return new wq(null)
        });
        wq.prototype.gd = function () {
            return this.ra & 16 ? "menuitemcheckbox" : this.ra & 8 ? "menuitemradio" : wq.G.gd.call(this)
        };
        wq.prototype.T = function () {
            return U.prototype.T.call(this)
        };
        wq.prototype.Sd = function () {
            return U.prototype.Sd.call(this)
        };
        var xq = function (a) {
            this.g = a
        };
        dj(xq);
        var yq = function (a, b) {
            a && (a.tabIndex = b ? 0 : -1)
        };
        xq.prototype.N = function (a) {
            var b = a.g,
                c = b.N,
                d = this.yd(),
                e = [d, "horizontal" == a.Xb ? d + "-DKlKme" : d + "-BvBYQ"];
            a.isEnabled() || e.push(d + "-OWB6Me");
            return c.call(b, "DIV", e.join(" "))
        };
        xq.prototype.Ce = function (a) {
            return "DIV" == a.tagName
        };
        var Aq = function (a, b, c) {
                c.id && im(b, c.id);
                var d = a.yd(),
                    e = !1,
                    f = Cl(c);
                f && Array.prototype.forEach.call(f, function (g) {
                    if (g == d) e = !0;
                    else if (g)
                        if (g == d + "-OWB6Me") b.qa(!1);
                        else if (g == d + "-DKlKme") {
                        if (b.A()) throw Error("ia");
                        b.Xb = "horizontal"
                    } else if (g == d + "-BvBYQ") {
                        if (b.A()) throw Error("ia");
                        b.Xb = "vertical"
                    }
                }, a);
                e || _.R(c, d);
                zq(a, b, c);
                return c
            },
            zq = function (a, b, c) {
                if (c)
                    for (var d = c.firstChild, e; d && d.parentNode == c;) {
                        e = d.nextSibling;
                        if (1 == d.nodeType) {
                            var f = a.cf(d);
                            f && (f.I = d, b.isEnabled() || f.qa(!1), b.Uc(f), nm(f, d))
                        } else d.nodeValue &&
                            "" != (0, _.Xb)(d.nodeValue) || c.removeChild(d);
                        d = e
                    }
            };
        xq.prototype.cf = function (a) {
            a: {
                a = Cl(a);
                for (var b = 0, c = a.length; b < c; b++) {
                    var d = a[b];
                    if (d = d in Cm ? Cm[d]() : null) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            return a
        };
        xq.prototype.De = function (a) {
            a = a.A();
            Xk(a, !0, _.C);
            _.B && (a.hideFocus = !0);
            var b = this.g;
            b && Rl(a, b)
        };
        xq.prototype.yd = function () {
            return "VIpgJd-haAclf"
        };
        var Bq = function () {};
        _.x(Bq, tm);
        dj(Bq);
        Bq.prototype.N = function (a) {
            return a.g.N("DIV", this.ua())
        };
        Bq.prototype.eb = function (a, b) {
            b.id && im(a, b.id);
            if ("HR" == b.tagName) {
                var c = b;
                b = this.N(a);
                Oj(b, c);
                _.Qj(c)
            } else _.R(b, this.ua());
            return b
        };
        Bq.prototype.Mc = function () {};
        Bq.prototype.ua = function () {
            return "VIpgJd-gqMrKb"
        };
        var Cq = function (a, b) {
            U.call(this, null, a || Bq.ea(), b);
            this.Ga(1, !1);
            this.Ga(2, !1);
            this.Ga(4, !1);
            this.Ga(32, !1);
            this.ka = 1
        };
        _.x(Cq, U);
        Cq.prototype.Y = function () {
            Cq.G.Y.call(this);
            var a = this.A();
            Rl(a, "separator")
        };
        Dm("VIpgJd-gqMrKb", function () {
            return new Cq
        });
        var Dq = function (a) {
            this.g = a || "menu"
        };
        _.x(Dq, xq);
        dj(Dq);
        _.h = Dq.prototype;
        _.h.Ce = function (a) {
            return "UL" == a.tagName || Dq.G.Ce.call(this, a)
        };
        _.h.cf = function (a) {
            return "HR" == a.tagName ? new Cq : Dq.G.cf.call(this, a)
        };
        _.h.Yc = function (a, b) {
            return _.ld(a.A(), b)
        };
        _.h.yd = function () {
            return "VIpgJd-xl07Ob"
        };
        _.h.De = function (a) {
            Dq.G.De.call(this, a);
            a = a.A();
            Sl(a, "haspopup", "true")
        };
        var Eq = function (a, b, c, d) {
            eq.call(this, a, b);
            this.s = c ? 5 : 0;
            this.l = d || void 0
        };
        _.x(Eq, eq);
        Eq.prototype.o = function (a) {
            this.s = a
        };
        Eq.prototype.h = function (a, b, c) {
            var d = Pl(this.element, this.j, a, b, null, c, 10, void 0, this.l);
            if (d & 496) {
                var e = Fq(d, this.j);
                b = Fq(d, b);
                d = Pl(this.element, e, a, b, null, c, 10, void 0, this.l);
                d & 496 && (e = Fq(d, e), b = Fq(d, b), Pl(this.element, e, a, b, null, c, this.s, void 0, this.l))
            }
        };
        var Fq = function (a, b) {
            a & 48 && (b ^= 4);
            a & 192 && (b ^= 1);
            return b
        };
        var Gq = function (a, b) {
            this.g = a instanceof N ? a : new N(a, b)
        };
        _.x(Gq, Il);
        Gq.prototype.h = function (a, b, c) {
            var d = _.E(a);
            var e = d.body;
            d = d.documentElement;
            d = new N(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
            e = this.g.x + d.x;
            d = this.g.y + d.y;
            var f = Ml(a);
            e -= f.x;
            d -= f.y;
            Ol(new N(e, d), a, b, c, null, null, void 0)
        };
        var Hq = function (a, b) {
            Gq.call(this, a, b)
        };
        _.x(Hq, Gq);
        Hq.prototype.j = 0;
        Hq.prototype.o = function (a) {
            this.j = a
        };
        Hq.prototype.h = function (a, b, c) {
            var d = Ok(a);
            d = Sk(d);
            var e = Yi(_.F(a).U);
            e = new N(this.g.x + e.scrollLeft, this.g.y + e.scrollTop);
            var f = b,
                g = Ol(e, a, f, c, d, 10, void 0);
            if (0 != (g & 496)) {
                if (g & 16 || g & 32) f ^= 4;
                if (g & 64 || g & 128) f ^= 1;
                g = Ol(e, a, f, c, d, 10, void 0);
                0 != (g & 496) && Ol(e, a, b, c, d, this.j, void 0)
            }
        };
        var Iq = function (a, b, c) {
            _.M.call(this, c);
            this.Rb = b || xq.ea();
            this.Xb = a || "vertical"
        };
        _.x(Iq, _.M);
        _.h = Iq.prototype;
        _.h.Fc = null;
        _.h.Rc = null;
        _.h.Rb = null;
        _.h.Xb = null;
        _.h.za = !0;
        _.h.Qb = !0;
        _.h.ec = !0;
        _.h.Aa = -1;
        _.h.Fa = null;
        _.h.Gc = !1;
        _.h.Eb = null;
        var Jq = function (a) {
                return a.Fc || a.A()
            },
            Mq = function (a, b) {
                if (a.ec) {
                    var c = Jq(a),
                        d = a.ia;
                    a.Fc = b;
                    var e = Jq(a);
                    d && (a.Fc = c, Kq(a, !1), a.Fc = b, Lq(a).attach(e), Kq(a, !0))
                } else throw Error("ua");
            },
            Lq = function (a) {
                return a.Rc || (a.Rc = new am(Jq(a)))
            };
        _.h = Iq.prototype;
        _.h.N = function () {
            this.I = this.Rb.N(this)
        };
        _.h.rd = function () {
            return this.A()
        };
        _.h.ve = function (a) {
            return this.Rb.Ce(a)
        };
        _.h.da = function (a) {
            this.I = Aq(this.Rb, this, a);
            "none" == a.style.display && (this.za = !1)
        };
        _.h.Y = function () {
            Iq.G.Y.call(this);
            om(this, function (b) {
                b.ia && Nq(this, b)
            }, this);
            var a = this.A();
            this.Rb.De(this);
            this.S(this.za, !0);
            S(this).D(this, "enter", this.hf).D(this, "highlight", this.jd).D(this, "unhighlight", this.nf).D(this, "open", this.Ti).D(this, "close", this.Ki).D(a, bk.rc, this.Oh).D(_.E(a), [bk.sc, bk.Sc], this.Li).D(a, [bk.rc, bk.sc, bk.Sc, "mouseover", "mouseout", "contextmenu"], this.Ii);
            this.ec && Kq(this, !0)
        };
        var Kq = function (a, b) {
            var c = S(a),
                d = Jq(a);
            b ? c.D(d, "focus", a.jg).D(d, "blur", a.zd).D(Lq(a), "key", a.bb) : c.sa(d, "focus", a.jg).sa(d, "blur", a.zd).sa(Lq(a), "key", a.bb)
        };
        _.h = Iq.prototype;
        _.h.ca = function () {
            this.Yb(-1);
            this.Fa && Mm(this.Fa, !1);
            this.Gc = !1;
            Iq.G.ca.call(this)
        };
        _.h.L = function () {
            Iq.G.L.call(this);
            this.Rc && (this.Rc.R(), this.Rc = null);
            this.Rb = this.Fa = this.Eb = this.Fc = null
        };
        _.h.hf = function () {
            return !0
        };
        _.h.jd = function (a) {
            var b = sm(this, a.target);
            if (-1 < b && b != this.Aa) {
                var c = Oq(this);
                c && Km(c, !1);
                this.Aa = b;
                c = Oq(this);
                this.Gc && Jm(c, !0);
                this.Fa && c != this.Fa && (c.ra & 64 ? Mm(c, !0) : Mm(this.Fa, !1))
            }
            b = this.A();
            null != a.target.A() && Sl(b, "activedescendant", a.target.A().id)
        };
        _.h.nf = function (a) {
            a.target == Oq(this) && (this.Aa = -1);
            this.A().removeAttribute("aria-activedescendant")
        };
        _.h.Ti = function (a) {
            (a = a.target) && a != this.Fa && a.T() == this && (this.Fa && Mm(this.Fa, !1), this.Fa = a)
        };
        _.h.Ki = function (a) {
            a.target == this.Fa && (this.Fa = null);
            var b = this.A(),
                c = a.target.A();
            b && a.target.ka & 2 && c && (a = "", c && (a = c.id), Sl(b, "activedescendant", a))
        };
        _.h.Oh = function (a) {
            this.Qb && (this.Gc = !0);
            var b = Jq(this);
            b && Xj(b) && Yj(b) ? b.focus() : a.preventDefault()
        };
        _.h.Li = function () {
            this.Gc = !1
        };
        _.h.Ii = function (a) {
            a: {
                var b = a.target;
                if (this.Eb)
                    for (var c = this.A(); b && b !== c;) {
                        var d = b.id;
                        if (d in this.Eb) {
                            b = this.Eb[d];
                            break a
                        }
                        b = b.parentNode
                    }
                b = null
            }
            if (b) switch (a.type) {
            case bk.rc:
                b.Pc(a);
                break;
            case bk.sc:
            case bk.Sc:
                b.Cc(a);
                break;
            case "mouseover":
                b.V(a);
                break;
            case "mouseout":
                b.ba(a);
                break;
            case "contextmenu":
                b.B(a)
            }
        };
        _.h.jg = function () {};
        _.h.zd = function () {
            this.Yb(-1);
            this.Gc = !1;
            this.Fa && Mm(this.Fa, !1)
        };
        _.h.bb = function (a) {
            return this.isEnabled() && this.isVisible() && (0 != pm(this) || this.Fc) && this.Ee(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
        };
        _.h.Ee = function (a) {
            var b = Oq(this);
            if (b && "function" == typeof b.bb && b.bb(a) || this.Fa && this.Fa != b && "function" == typeof this.Fa.bb && this.Fa.bb(a)) return !0;
            if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
            switch (a.keyCode) {
            case 27:
                if (this.ec) Jq(this).blur();
                else return !1;
                break;
            case 36:
                Pq(this);
                break;
            case 35:
                Qq(this);
                break;
            case 38:
                if ("vertical" == this.Xb) Rq(this);
                else return !1;
                break;
            case 37:
                if ("horizontal" == this.Xb) rm(this) ? Sq(this) : Rq(this);
                else return !1;
                break;
            case 40:
                if ("vertical" == this.Xb) Sq(this);
                else return !1;
                break;
            case 39:
                if ("horizontal" == this.Xb) rm(this) ? Rq(this) : Sq(this);
                else return !1;
                break;
            default:
                return !1
            }
            return !0
        };
        var Nq = function (a, b) {
            var c = b.A();
            c = c.id || (c.id = b.jb());
            a.Eb || (a.Eb = {});
            a.Eb[c] = b
        };
        _.h = Iq.prototype;
        _.h.Uc = function (a, b) {
            Iq.G.Uc.call(this, a, b)
        };
        _.h.Ke = function (a, b, c) {
            a.qd |= 2;
            a.qd |= 64;
            a.Ga(32, !1);
            Gm(a, !1);
            var d = a.T() == this ? sm(this, a) : -1;
            Iq.G.Ke.call(this, a, b, c);
            a.ia && this.ia && Nq(this, a);
            a = d; - 1 == a && (a = pm(this));
            a == this.Aa ? this.Aa = Math.min(pm(this) - 1, b) : a > this.Aa && b <= this.Aa ? this.Aa++ : a < this.Aa && b > this.Aa && this.Aa--
        };
        _.h.we = function (a, b) {
            if (a = "string" === typeof a ? km(this, a) : a) {
                var c = sm(this, a); - 1 != c && (c == this.Aa ? (Km(a, !1), this.Aa = -1) : c < this.Aa && this.Aa--);
                var d = a.A();
                d && d.id && this.Eb && (c = this.Eb, d = d.id, d in c && delete c[d])
            }
            a = Iq.G.we.call(this, a, b);
            Gm(a, !0);
            return a
        };
        _.h.isVisible = function () {
            return this.za
        };
        _.h.S = function (a, b) {
            if (b || this.za != a && this.dispatchEvent(a ? "show" : "hide")) {
                this.za = a;
                var c = this.A();
                c && (_.O(c, a), this.ec && yq(Jq(this), this.Qb && this.za), b || this.dispatchEvent(this.za ? "aftershow" : "afterhide"));
                return !0
            }
            return !1
        };
        _.h.isEnabled = function () {
            return this.Qb
        };
        _.h.qa = function (a) {
            this.Qb != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Qb = !0, om(this, function (b) {
                b.Jh ? delete b.Jh : b.qa(!0)
            })) : (om(this, function (b) {
                b.isEnabled() ? b.qa(!1) : b.Jh = !0
            }), this.Gc = this.Qb = !1), this.ec && yq(Jq(this), a && this.za))
        };
        var Tq = function (a, b) {
            b != a.ec && a.ia && Kq(a, b);
            a.ec = b;
            a.Qb && a.za && yq(Jq(a), b)
        };
        Iq.prototype.Yb = function (a) {
            (a = qm(this, a)) ? Km(a, !0): -1 < this.Aa && Km(Oq(this), !1)
        };
        var Oq = function (a) {
                return qm(a, a.Aa)
            },
            Pq = function (a) {
                Uq(a, function (b, c) {
                    return (b + 1) % c
                }, pm(a) - 1)
            },
            Qq = function (a) {
                Uq(a, function (b, c) {
                    b--;
                    return 0 > b ? c - 1 : b
                }, 0)
            },
            Sq = function (a) {
                Uq(a, function (b, c) {
                    return (b + 1) % c
                }, a.Aa)
            },
            Rq = function (a) {
                Uq(a, function (b, c) {
                    b--;
                    return 0 > b ? c - 1 : b
                }, a.Aa)
            },
            Uq = function (a, b, c) {
                c = 0 > c ? sm(a, a.Fa) : c;
                var d = pm(a);
                c = b.call(a, c, d);
                for (var e = 0; e <= d;) {
                    var f = qm(a, c);
                    if (f && a.ug(f)) {
                        a.Yb(c);
                        break
                    }
                    e++;
                    c = b.call(a, c, d)
                }
            };
        Iq.prototype.ug = function (a) {
            return a.isVisible() && a.isEnabled() && !!(a.ra & 2)
        };
        var Vq = function () {};
        _.x(Vq, tm);
        dj(Vq);
        Vq.prototype.ua = function () {
            return "VIpgJd-wckcKc"
        };
        var Wq = function (a, b, c) {
            U.call(this, a, c || Vq.ea(), b);
            this.Ga(1, !1);
            this.Ga(2, !1);
            this.Ga(4, !1);
            this.Ga(32, !1);
            this.ka = 1
        };
        _.x(Wq, U);
        Dm("VIpgJd-wckcKc", function () {
            return new Wq(null)
        });
        Dm("VIpgJd-gqMrKb", function () {
            return new Cq
        });
        var Xq = function (a, b) {
            Iq.call(this, "vertical", b || Dq.ea(), a);
            Tq(this, !1)
        };
        _.x(Xq, Iq);
        _.h = Xq.prototype;
        _.h.Le = !0;
        _.h.Yc = function (a) {
            if (this.Rb.Yc(this, a)) return !0;
            for (var b = 0, c = pm(this); b < c; b++) {
                var d = qm(this, b);
                if ("function" == typeof d.Yc && d.Yc(a)) return !0
            }
            return !1
        };
        _.h.S = function (a, b, c) {
            (b = Xq.G.S.call(this, a, b)) && a && this.ia && this.Le && Jq(this).focus();
            a && c && "number" === typeof c.clientX ? this.la = new N(c.clientX, c.clientY) : this.la = null;
            return b
        };
        _.h.hf = function (a) {
            this.Le && Jq(this).focus();
            return Xq.G.hf.call(this, a)
        };
        _.h.ug = function (a) {
            return a.isEnabled() && a.isVisible() && !!(a.ra & 2)
        };
        _.h.da = function (a) {
            for (var b = this.Rb, c = _.Wi(this.g.U, "DIV", b.yd() + "-bN97Pc", a), d = c.length, e = 0; e < d; e++) zq(b, this, c[e]);
            Xq.G.da.call(this, a)
        };
        _.h.Ee = function (a) {
            var b = Xq.G.Ee.call(this, a);
            b || om(this, function (c) {
                !b && c.Ci && c.ih == a.keyCode && (this.isEnabled() && this.Yb(sm(this, c)), b = c.bb(a))
            }, this);
            return b
        };
        _.h.Yb = function (a) {
            Xq.G.Yb.call(this, a);
            if (a = qm(this, a)) {
                var b = a.A();
                a = this.A() || Yi(document);
                var c = a || Yi(document);
                var d = Rk(b),
                    e = Rk(c),
                    f = el(c);
                if (c == Yi(document)) {
                    var g = d.x - c.scrollLeft;
                    d = d.y - c.scrollTop;
                    !_.B || 10 <= Number(_.yc) || (g += f.left, d += f.top)
                } else g = d.x - e.x - f.left, d = d.y - e.y - f.top;
                b = Tk(b);
                f = c.clientHeight - b.height;
                e = c.scrollLeft;
                var k = c.scrollTop;
                e += Math.min(g, Math.max(g - (c.clientWidth - b.width), 0));
                k += Math.min(d, Math.max(d - f, 0));
                c = new N(e, k);
                a.scrollLeft = c.x;
                a.scrollTop = c.y
            }
        };
        var Yq = function (a, b) {
            Xq.call(this, a, b);
            this.Le = !0;
            Tq(this, !0);
            this.S(!1, !0);
            this.h = new _.pf
        };
        _.x(Yq, Xq);
        _.h = Yq.prototype;
        _.h.Hh = !1;
        _.h.bh = 0;
        _.h.Va = null;
        _.h.da = function (a) {
            Yq.G.da.call(this, a);
            (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.g.A(a), 1)
        };
        _.h.Y = function () {
            Yq.G.Y.call(this);
            this.h.forEach(this.Gd, this);
            var a = S(this);
            a.D(this, "action", this.Df);
            a.D(this.g.U, "mousedown", this.wb, !0)
        };
        _.h.attach = function (a, b, c, d, e) {
            a && _.rf(this.h, _.za(a)) || (b = this.Te(a, b, c, d, e), this.ia && this.Gd(b), a = _.ub(this.Dj, a), this.A() && S(this).D(this.A(), "keydown", a))
        };
        _.h.Dj = function (a, b) {
            if (27 == b.keyCode) a.focus();
            else if (a = qm(this, this.Aa)) {
                var c = a.A();
                a = new _.xd(b.g, c);
                a.target = c;
                if (32 == b.keyCode || 13 == b.keyCode)
                    if (_.zd(c)) _.Vd(c, "keydown", !1, a);
                    else if (c = _.Nd(c))
                    if (c = c.g["keydown".toString()]) {
                        c = c.concat();
                        for (var d = 0; d < c.length; d++) {
                            var e = c[d];
                            e && 0 == e.capture && !e.Kc && _.Td(e, a)
                        }
                    }
                32 == b.keyCode && this.Bb()
            }
        };
        _.h.Te = function (a, b, c, d, e) {
            if (!a) return null;
            b = {
                I: a,
                Eh: b,
                Aj: c,
                bd: d ? "contextmenu" : "mousedown",
                xf: e
            };
            this.h.set(_.za(a), b);
            return b
        };
        _.h.Gd = function (a) {
            S(this).D(a.I, a.bd, this.ke);
            "contextmenu" != a.bd && S(this).D(a.I, "keydown", this.Fj)
        };
        _.h.Pd = function () {
            if (this.ia)
                for (var a = this.h.Ub(), b = 0; b < a.length; b++) this.We(this.h.get(a[b]));
            $i(this.h)
        };
        _.h.We = function (a) {
            S(this).sa(a.I, a.bd, this.ke)
        };
        _.h.Ad = function (a, b, c) {
            b = void 0 !== a.Eh ? new Eq(a.I, a.Eh, !0) : new Hq(b, c);
            b.o && b.o(5);
            var d = a.Aj;
            c = a.xf;
            var e = a.I;
            a = this.isVisible();
            (this.isVisible() || 150 > Date.now() - this.bh) && this.Hh ? this.Bb() : (this.Va = e || null, this.dispatchEvent("beforeshow") && (d = "undefined" != typeof d ? d : 8, a || (this.A().style.visibility = "hidden"), _.O(this.A(), !0), b.h(this.A(), d, c), a || (this.A().style.visibility = "visible"), this.Yb(-1), this.S(!0)))
        };
        _.h.Bb = function () {
            this.isVisible() && (this.S(!1), this.isVisible() || (this.bh = Date.now(), this.Va = null))
        };
        _.h.Df = function () {
            this.Bb()
        };
        _.h.ke = function (a) {
            Zq(this, a)
        };
        _.h.Fj = function (a) {
            32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Zq(this, a);
            40 == a.keyCode && Pq(this)
        };
        var Zq = function (a, b) {
            for (var c = a.h.Ub(), d = 0; d < c.length; d++) {
                var e = a.h.get(c[d]);
                if (e.I == b.currentTarget) {
                    a.Ad(e, b.clientX, b.clientY);
                    b.preventDefault();
                    b.stopPropagation();
                    break
                }
            }
        };
        Yq.prototype.wb = function (a) {
            this.isVisible() && !this.Yc(a.target) && this.Bb()
        };
        Yq.prototype.zd = function (a) {
            Yq.G.zd.call(this, a);
            this.Bb()
        };
        Yq.prototype.L = function () {
            Yq.G.L.call(this);
            this.h && ($i(this.h), delete this.h)
        };
        var Z = function (a, b, c) {
            Yq.call(this, b, c);
            this.s = new _.pf;
            this.l = a || 5;
            this.B = null;
            this.J = !1;
            this.o = Array(this.l);
            this.aa = Array(this.l);
            this.O = $m.ea();
            this.V = zn.ea();
            this.ba = null;
            this.Hh = !0
        };
        _.x(Z, Yq);
        var $q = "";
        Z.prototype.N = function () {
            Z.G.N.call(this);
            for (var a = 0; a < this.l; ++a) this.Uc(new wq(""), !0)
        };
        Z.prototype.ja = function (a) {
            Z.G.ja.call(this, a);
            _.R(this.A(), "alt-menu")
        };
        Z.prototype.Vf = function (a) {
            a = this.s.get(_.za(a));
            for (var b = 0; b < V(a, 2) && b < this.l; ++b) {
                var c = qm(this, b);
                c.j(xn(mo(a, b), 0));
                c.Ma(b);
                c.S(!0, !0)
            }
            for (; b < this.l; ++b) qm(this, b).S(!1)
        };
        var ar = function (a, b, c) {
            a.s.set(_.za(b), c);
            a.attach(b, 9, 8, !1, new Ik(-2, 1, -2, 1))
        };
        _.h = Z.prototype;
        _.h.Pd = function () {
            Z.G.Pd.call(this);
            $i(this.s)
        };
        _.h.S = function (a, b) {
            var c = this.Va;
            this.ba = c;
            a && null != c ? (br(this, c), fn(this.O, "altshow"), An(this.V, 207)) : null != this.B && bq(this.B, 0, 0);
            null != c && (a ? this.Ue(c) : this.Re(c));
            b = Z.G.S.call(this, a, b);
            a && null != this.A() && Xk(this.A(), !1);
            return b
        };
        _.h.xb = function () {
            if (null != this.ba) {
                var a = _.qd(this.ba);
                if (null != a) return a
            }
            return ""
        };
        _.h.Bb = function () {
            Z.G.Bb.call(this);
            if (this.J)
                for (var a = 0; a < this.o.length; a++) {
                    var b = this.o[a];
                    _.kg(b.l);
                    b.C();
                    b.B(-1);
                    b.C();
                    b.S(!1)
                }
        };
        _.h.Ue = function (a) {
            _.R(a, "trans-target");
            a.title = ""
        };
        _.h.Re = function (a) {
            _.Gl(a, "trans-target");
            a.title = $q
        };
        _.h.bb = function (a) {
            if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
            var b = Z.G.bb.call(this, a);
            if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
                var c = Wk(this.Va.parentNode.parentNode),
                    d = null;
                if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
                if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
                if (this.Me(d) && (c = this.Va, (c = d ? void 0 !== c.nextElementSibling ? c.nextElementSibling : _.jd(c.nextSibling, !0) : void 0 !== c.previousElementSibling ? c.previousElementSibling : _.jd(c.previousSibling, !1)) && c != this.Va)) return this.Bb(),
                    this.xh(d), this.Ad(c ? this.h.get(_.za(c)) : null, 0, 0), cr(this), a.preventDefault(), a.stopPropagation(), !0
            }
            return b
        };
        _.h.Ad = function (a, b, c) {
            Wk((a.I || this.Va).parentNode.parentNode) ? _.L(this.A(), "direction", "rtl") : _.L(this.A(), "direction", "");
            if (this.J)
                for (var d = 0; d < this.o.length; d++) dr(this, d), _.md(this.o[d].j, "...");
            this.Vf(a.I);
            Z.G.Ad.call(this, a, b, c)
        };
        var er = function (a, b, c) {
                !a.J || b >= a.l || "" == c || (_.md(a.o[b].j, c), dr(a, b))
            },
            dr = function (a, b) {
                var c = a.o[b];
                Pl(qm(a, b).A(), 12, c.A(), 8, new N(1, 0))
            };
        _.h = Z.prototype;
        _.h.jd = function (a) {
            Z.G.jd.call(this, a);
            var b = this.Va;
            null != b && (fn(this.O, "altmenuhl"), An(this.V, 209), br(this, b), a = this.Td(a.target), -1 != a && a != this.l && (_.kg(this.aa[a]), this.aa[a] = _.jg(this.yj, 300, this), this.J && (b = this.o[a], Wk(this.Va.parentNode.parentNode) ? (_.R(b.A(), "rtl"), _.L(b.A(), "direction", "rtl")) : (_.Gl(b.A(), "rtl"), _.L(b.A(), "direction", "")), dr(this, a), _.kg(b.l), 0 == b.g ? b.l = _.jg((0, _.w)(b.B, b, 1), 300) : b.B(1))))
        };
        _.h.yj = function () {
            fn(this.O, "altmenuhold");
            An(this.V, 208)
        };
        _.h.nf = function (a) {
            Z.G.nf.call(this, a);
            a = this.Td(a.target); - 1 != a && a != this.l && (_.kg(this.aa[a]), this.J && this.o[a].K())
        };
        _.h.Td = function (a) {
            return sm(this, a)
        };
        _.h.Me = function () {
            return !0
        };
        _.h.xh = function () {};
        _.h.Te = function (a, b, c, d, e) {
            (a = Z.G.Te.call(this, a, b, c, d, e)) && "mousedown" == a.bd && (a.bd = "click");
            return a
        };
        _.h.Gd = function (a) {
            Z.G.Gd.call(this, a);
            S(this).D(a.I, "mouseover", this.ab);
            S(this).D(a.I, "mouseout", this.X);
            S(this).D(a.I, "contextmenu", this.Ta);
            S(this).D(a.I, "mousemove", this.Ua)
        };
        _.h.We = function (a) {
            Z.G.We.call(this, a);
            S(this).sa(a.I, "mouseover", this.ab);
            S(this).sa(a.I, "mouseout", this.X);
            S(this).sa(a.I, "contextmenu", this.Ta);
            S(this).sa(a.I, "mousemove", this.Ua)
        };
        var br = function (a, b) {
                if (null != a.B && (b = a.s.get(_.za(b))) && (a = a.B, a.h))
                    for (var c = a.I && (a.I.value || _.qd(a.I)), d = -1, e = -1, f = !1, g = 0; g < V(a.h, 5); g++) {
                        var k = po(a.h, g);
                        if (0 != V(k, 2) && (0 == wn(k, 5) && (f = c.indexOf(xn(k, 4), e + 1), 0 <= f ? (d = f, e = d + xn(k, 4).length, f = !0) : f = !1), po(a.h, g).g == b.g)) {
                            if (f) {
                                c = [];
                                for (e = 0; e < V(b, 3); ++e) c.push({
                                    cd: d + wn(new ko(yn(b, 3, e)), 0),
                                    Zf: d + wn(new ko(yn(b, 3, e)), 1)
                                });
                                bq(a, 0, 0, void 0, c)
                            } else d = c.indexOf(xn(b, 0)), 0 <= d && bq(a, d, d + xn(b, 0).length);
                            break
                        }
                    }
            },
            fr = function (a, b) {
                b ? gk(a.h.Ia(!1), function (c) {
                    "" ==
                    this.g.fg(c.I) && (_.R(c.I, "trans-target-empty"), this.g.nb(c.I, "_"));
                    return !0
                }, a) : gk(a.h.Ia(!1), function (c) {
                    El(c.I, "trans-target-empty") && (_.Gl(c.I, "trans-target-empty"), this.g.nb(c.I, ""));
                    return !0
                }, a)
            };
        Z.prototype.ab = function (a) {
            !co() && this.isEnabled() && (_.R(a.target, "trans-target-highlight"), br(this, a.target), fr(this, !0), fn(this.O, "althighlight"), An(this.V, 206))
        };
        Z.prototype.X = function (a) {
            _.Gl(a.target, "trans-target-highlight");
            null == this.B || this.isVisible() || bq(this.B, 0, 0);
            fr(this, !1)
        };
        Z.prototype.Ua = function (a) {
            co() && this.X(a)
        };
        Z.prototype.Ta = function (a) {
            co() || (this.X(a), Rn(Pn(a.target), void 0).select())
        };
        var cr = function (a) {
            gk(a.h.Ia(!1), function (b) {
                _.Gl(b.I, "trans-target-highlight");
                return !0
            }, a)
        };
        Z.prototype.Df = function (a) {
            a && a.currentTarget && a.currentTarget.Va && (a.l = a.currentTarget.Va);
            Z.G.Df.call(this, a)
        };
        Z.prototype.ke = function (a) {
            co() ? cr(this) : this.Qb && Z.G.ke.call(this, a)
        };
        var gr = function (a, b, c) {
            this.xa = this.j = null;
            Z.call(this, a, b, c)
        };
        _.x(gr, Z);
        _.h = gr.prototype;
        _.h.xh = function (a) {
            this.j = a
        };
        _.h.S = function (a, b) {
            b = gr.G.S.call(this, a, b);
            this.j = null;
            a ? this.xa = this.xb() : null != this.xa && this.xa != this.xb() && this.dispatchEvent(new _.td("action", this));
            return b
        };
        _.h.Ue = function (a) {
            gr.G.Ue.call(this, a);
            _.R(a, "trans-edit");
            a.contentEditable = !0;
            Mq(this, a);
            Jq(this).focus();
            Zj(Jq(this), !0);
            S(this).D(a, "keydown", this.Ng);
            S(this).D(a, "mouseout", this.Xd);
            S(this).D(a, "mouseover", this.Xd);
            if (null != this.j) {
                a = Rn(Pn(a), void 0);
                var b = this.j ? a.gb() : a.vb(),
                    c = Fn(a);
                a = c;
                var d = b,
                    e = new Qn;
                e.l = Yn(a, d, c, b);
                if (Rj(a) && !Mj(a)) {
                    var f = a.parentNode;
                    d = Array.prototype.indexOf.call(f.childNodes, a);
                    a = f
                }
                Rj(c) && !Mj(c) && (f = c.parentNode, b = Array.prototype.indexOf.call(f.childNodes, c), c = f);
                e.l ?
                    (e.h = c, e.s = b, e.j = a, e.o = d) : (e.h = a, e.s = d, e.j = c, e.o = b);
                e.select()
            }
        };
        _.h.Re = function (a) {
            gr.G.Re.call(this, a);
            _.Gl(a, "trans-edit");
            a.contentEditable = !1;
            Jq(this) && Zj(Jq(this), !1);
            S(this).sa(a, "keydown", this.Ng);
            S(this).sa(a, "mouseout", this.Xd);
            S(this).sa(a, "mouseover", this.Xd)
        };
        _.h.Xd = function () {
            var a = bo();
            null == a || a.fb() == a.ub() && a.gb() == a.vb() || this.S(a.fb() == a.ub())
        };
        _.h.Ng = function (a) {
            for (var b = 0; b < this.l; ++b) qm(this, b).S(!1);
            if (13 == a.keyCode || 3 == a.keyCode) return null === Oq(this) ? (this.Bb(), a.stopPropagation(), a.preventDefault(), !0) : !1;
            null === Oq(this) || !Wl(a) && 37 != a.keyCode && 39 != a.keyCode || (this.Va.focus(), this.Yb(sm(this, null)));
            return !1
        };
        _.h.Me = function (a) {
            var b = bo();
            if (b.fb() == b.ub() && b.gb() == b.vb()) {
                var c = b.sf() ? b.gb() : b.vb();
                b = Rn(Pn(Fn(b)), void 0);
                if (!a && c == b.gb() || a && c == b.vb()) return !0
            }
            return !1
        };
        var hr = function (a, b, c) {
            Z.call(this, a, b, c);
            this.j = null
        };
        _.u(hr, Z);
        _.h = hr.prototype;
        _.h.ja = function (a) {
            Z.prototype.ja.call(this, a);
            this.j = new ir("");
            this.Uc(this.j, !0)
        };
        _.h.Vf = function (a) {
            Z.prototype.Vf.call(this, a);
            this.j.Gb().value = this.g.fg(a)
        };
        _.h.S = function (a, b) {
            b = Z.prototype.S.call(this, a, b);
            a && null != this.A() && (Jq(this) == this.j.Gb() || Jq(this) == this.j.dd()) && Km(this.j, !0);
            return b
        };
        _.h.jd = function (a) {
            Z.prototype.jd.call(this, a);
            a.target == this.j ? Mq(this, this.j.Gb()) : Mq(this, this.A());
            Jq(this).focus();
            Jq(this).tabIndex = 0
        };
        _.h.Td = function (a) {
            return a == this.j ? -1 : Z.prototype.Td.call(this, a)
        };
        _.h.bb = function (a) {
            return 9 == a.keyCode ? (this.j.ka & 2 ? (Jq(this) == this.j.Gb() ? Mq(this, this.j.dd()) : Mq(this, this.j.Gb()), Jq(this).focus(), Jq(this).tabIndex = 0) : Km(this.j, !0), a.preventDefault(), a.stopPropagation(), !0) : Z.prototype.bb.call(this, a)
        };
        _.h.Me = function () {
            return null === Oq(this) || !(Oq(this) instanceof ir)
        };
        var ir = function (a, b, c) {
            U.call(this, a, c || jr.ea(), b);
            this.Ga(4, !1)
        };
        _.u(ir, U);
        _.h = ir.prototype;
        _.h.Pc = function (a) {
            a.target == this.dd() && this.dispatchEvent("action")
        };
        _.h.Y = function () {
            U.prototype.Y.call(this);
            S(this).D(this.Gb(), "keydown", function (a) {
                32 == a.keyCode && a.stopPropagation()
            })
        };
        _.h.Gb = function () {
            return this.h.Gb(this.A())
        };
        _.h.dd = function () {
            return this.h.dd(this.A())
        };
        _.h.xb = function () {
            return this.Gb().value
        };
        var jr = function () {};
        _.u(jr, tm);
        jr.prototype.N = function (a) {
            var b = a.g.N("INPUT", {
                    value: a.wa(),
                    id: "alt-input-text",
                    type: "text"
                }),
                c = a.g.N("INPUT", {
                    value: kr,
                    id: "alt-input-submit",
                    "class": lr,
                    type: "button"
                });
            return a.g.N("DIV", {
                id: "alt-input"
            }, b, c)
        };
        jr.prototype.Gb = function (a) {
            return a.firstChild
        };
        jr.prototype.dd = function (a) {
            return a.firstChild.nextSibling
        };
        jr.ea = function () {
            return Ul(jr)
        };
        var kr = "",
            lr = "";
        var mr = function () {};
        _.x(mr, tm);
        dj(mr);
        _.h = mr.prototype;
        _.h.oc = function () {};
        _.h.eb = function (a, b) {
            Gm(a, !1);
            Om(a);
            a.Ga(32, !1);
            mr.G.eb.call(this, a, b);
            a.j(b.value);
            return b
        };
        _.h.N = function (a) {
            Gm(a, !1);
            Om(a);
            a.Ga(32, !1);
            return a.g.N("TEXTAREA", {
                "class": wm(this, a).join(" "),
                disabled: !a.isEnabled()
            }, a.wa() || "")
        };
        _.h.sd = function (a) {
            return "TEXTAREA" == a.tagName
        };
        _.h.ye = _.v;
        _.h.xe = function (a) {
            return a.isEnabled()
        };
        _.h.pc = _.v;
        _.h.Nc = function (a, b, c) {
            mr.G.Nc.call(this, a, b, c);
            (a = a.A()) && 1 == b && (a.disabled = c)
        };
        _.h.sb = _.v;
        _.h.Mc = function (a, b) {
            a && (a.value = b)
        };
        _.h.ua = function () {
            return "VIpgJd-B7I4Od"
        };
        var nr = function (a, b, c) {
            U.call(this, a, b || mr.ea(), c);
            Gm(this, !1);
            this.Fd = !0;
            (b = this.A()) && this.h.td(b, !0);
            this.Dc = "" != a;
            a || (this.ac = "")
        };
        _.x(nr, U);
        var or = !(_.B && !(11 <= Number(_.yc)));
        _.h = nr.prototype;
        _.h.Ec = !1;
        _.h.ae = !1;
        _.h.Dc = !1;
        _.h.Hb = 0;
        _.h.hh = 0;
        _.h.Cf = 0;
        _.h.Vg = !1;
        _.h.ie = !1;
        _.h.Qf = !1;
        _.h.Pf = !1;
        _.h.Jc = "";
        var pr = function (a) {
                return a.o.top + a.o.bottom + a.aa.top + a.aa.bottom
            },
            qr = function (a) {
                var b = a.Cf,
                    c = a.A();
                b && c && a.ie && (b -= pr(a));
                return b
            },
            sr = function (a) {
                a.Cf = 50;
                rr(a)
            },
            tr = function (a) {
                a.hh = 50;
                rr(a)
            };
        nr.prototype.Ma = function (a) {
            this.j(String(a))
        };
        nr.prototype.Qa = function () {
            return this.A().value != this.Jc || ur(this) || this.Dc ? this.A().value : ""
        };
        nr.prototype.j = function (a) {
            nr.G.j.call(this, a);
            this.Dc = "" != a;
            rr(this)
        };
        nr.prototype.qa = function (a) {
            nr.G.qa.call(this, a);
            this.A().disabled = !a
        };
        var rr = function (a) {
                a.A() && a.O()
            },
            ur = function (a) {
                return "placeholder" in a.A()
            },
            vr = function (a) {
                a.Jc && (ur(a) ? a.A().placeholder = a.Jc : !a.A() || a.Dc || a.ae || (_.R(a.A(), "B7I4Od-LwH6nd-YPqjbf"), a.A().value = a.Jc))
            };
        nr.prototype.Y = function () {
            nr.G.Y.call(this);
            var a = this.A();
            _.L(a, {
                overflowY: "hidden",
                overflowX: "auto",
                boxSizing: "border-box",
                MsBoxSizing: "border-box",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box"
            });
            this.o = bl(a);
            this.aa = el(a);
            S(this).D(a, "scroll", this.O).D(a, "focus", this.O).D(a, "keyup", this.O).D(a, "mouseup", this.xa).D(a, "blur", this.la);
            vr(this);
            rr(this)
        };
        var wr = function (a) {
                if (!a.Vg) {
                    var b = a.A().cloneNode(!1);
                    _.L(b, {
                        position: "absolute",
                        height: "auto",
                        top: "-9999px",
                        margin: "0",
                        padding: "1px",
                        border: "1px solid #000",
                        overflow: "hidden"
                    });
                    a.g.U.body.appendChild(b);
                    var c = b.scrollHeight;
                    b.style.padding = "10px";
                    var d = b.scrollHeight;
                    a.Qf = d > c;
                    b.style.borderWidth = "10px";
                    a.Pf = b.scrollHeight > d;
                    b.style.height = "100px";
                    100 != b.offsetHeight && (a.ie = !0);
                    _.Qj(b);
                    a.Vg = !0
                }
                b = a.A();
                isNaN(a.o.top) && (a.o = bl(b), a.aa = el(b));
                c = a.A().scrollHeight;
                var e = a.A();
                d = e.offsetHeight - e.clientHeight;
                if (!a.Qf) {
                    var f = a.o;
                    d -= f.top + f.bottom
                }
                a.Pf || (e = el(e), d -= e.top + e.bottom);
                c += 0 < d ? d : 0;
                a.ie ? c -= pr(a) : (a.Qf || (d = a.o, c += d.top + d.bottom), a.Pf || (a = el(b), c += a.top + a.bottom));
                return c
            },
            xr = function (a, b) {
                a.Hb != b && (a.Hb = b, a.A().style.height = b + "px")
            },
            yr = function (a) {
                var b = a.A();
                b.style.height = "auto";
                var c = b.value.match(/\n/g) || [];
                b.rows = c.length + 1;
                a.Hb = 0
            };
        nr.prototype.la = function () {
            ur(this) || (this.ae = !1, "" == this.A().value && (this.Dc = !1, vr(this)))
        };
        nr.prototype.O = function (a) {
            if (!this.Ec) {
                var b = this.A();
                !ur(this) && a && "focus" == a.type && (b.value == this.Jc && this.Jc && !this.ae && (_.Gl(b, "B7I4Od-LwH6nd-YPqjbf"), b.value = ""), this.ae = !0, this.Dc = "" != b.value);
                var c = !1;
                this.Ec = !0;
                a = this.Hb;
                if (b.scrollHeight) {
                    var d = !1,
                        e = !1,
                        f = wr(this),
                        g = b.offsetHeight,
                        k = qr(this);
                    var l = this.hh;
                    var m = this.A();
                    l && m && this.ie && (l -= pr(this));
                    k && f < k ? (xr(this, k), d = !0) : l && f > l ? (xr(this, l), b.style.overflowY = "", e = !0) : g != f ? xr(this, f) : this.Hb || (this.Hb = f);
                    d || e || !or || (c = !0)
                } else yr(this);
                this.Ec = !1;
                c && (b = this.A(), this.Ec || (this.Ec = !0, (e = b.scrollHeight) ? (f = wr(this), c = qr(this), c && f <= c || (d = this.o, b.style.paddingTop = d.top + 1 + "px", wr(this) == f && (b.style.paddingTop = d.top + e + "px", b.scrollTop = 0, e = wr(this) - e, e >= c ? xr(this, e) : xr(this, c)), b.style.paddingTop = d.top + "px")) : yr(this), this.Ec = !1));
                a != this.Hb && this.dispatchEvent("resize")
            }
        };
        nr.prototype.xa = function () {
            var a = this.A(),
                b = a.offsetHeight;
            a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
            b != this.Hb && (this.Hb = this.Cf = b)
        };
        var zr = function (a, b) {
                this.h = b;
                for (var c = [], d = !0, e = a.length - 1; 0 <= e; e--) {
                    var f = a[e] | 0;
                    d && f == b || (c[e] = f, d = !1)
                }
                this.g = c
            },
            Ar = {},
            Br = function (a) {
                return -128 <= a && 128 > a ? _.bc(Ar, a, function (b) {
                    return new zr([b | 0], 0 > b ? -1 : 0)
                }) : new zr([a | 0], 0 > a ? -1 : 0)
            },
            Er = function (a) {
                if (isNaN(a) || !isFinite(a)) return Cr;
                if (0 > a) return Dr(Er(-a));
                for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
                return new zr(b, 0)
            },
            Cr = Br(0),
            Fr = Br(1),
            Gr = Br(16777216),
            Ir = function (a) {
                if (Hr(a)) return -Ir(Dr(a));
                for (var b = 0, c = 1, d = 0; d < a.g.length; d++) {
                    var e =
                        Jr(a, d);
                    b += (0 <= e ? e : 4294967296 + e) * c;
                    c *= 4294967296
                }
                return b
            };
        zr.prototype.toString = function (a) {
            a = a || 10;
            if (2 > a || 36 < a) throw Error("va`" + a);
            if (Kr(this)) return "0";
            if (Hr(this)) return "-" + Dr(this).toString(a);
            for (var b = Er(Math.pow(a, 6)), c = this, d = "";;) {
                var e = Lr(c, b).g;
                c = Mr(c, Nr(e, b));
                var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
                c = e;
                if (Kr(c)) return f + d;
                for (; 6 > f.length;) f = "0" + f;
                d = f + d
            }
        };
        var Jr = function (a, b) {
                return 0 > b ? 0 : b < a.g.length ? a.g[b] : a.h
            },
            Kr = function (a) {
                if (0 != a.h) return !1;
                for (var b = 0; b < a.g.length; b++)
                    if (0 != a.g[b]) return !1;
                return !0
            },
            Hr = function (a) {
                return -1 == a.h
            },
            Or = function (a, b) {
                a = Mr(a, b);
                return Hr(a) ? -1 : Kr(a) ? 0 : 1
            },
            Dr = function (a) {
                for (var b = a.g.length, c = [], d = 0; d < b; d++) c[d] = ~a.g[d];
                return (new zr(c, ~a.h)).add(Fr)
            };
        zr.prototype.abs = function () {
            return Hr(this) ? Dr(this) : this
        };
        zr.prototype.add = function (a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b; e++) {
                var f = d + (Jr(this, e) & 65535) + (Jr(a, e) & 65535),
                    g = (f >>> 16) + (Jr(this, e) >>> 16) + (Jr(a, e) >>> 16);
                d = g >>> 16;
                f &= 65535;
                g &= 65535;
                c[e] = g << 16 | f
            }
            return new zr(c, c[c.length - 1] & -2147483648 ? -1 : 0)
        };
        var Mr = function (a, b) {
                return a.add(Dr(b))
            },
            Nr = function (a, b) {
                if (Kr(a) || Kr(b)) return Cr;
                if (Hr(a)) return Hr(b) ? Nr(Dr(a), Dr(b)) : Dr(Nr(Dr(a), b));
                if (Hr(b)) return Dr(Nr(a, Dr(b)));
                if (0 > Or(a, Gr) && 0 > Or(b, Gr)) return Er(Ir(a) * Ir(b));
                for (var c = a.g.length + b.g.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
                for (e = 0; e < a.g.length; e++)
                    for (var f = 0; f < b.g.length; f++) {
                        var g = Jr(a, e) >>> 16,
                            k = Jr(a, e) & 65535,
                            l = Jr(b, f) >>> 16,
                            m = Jr(b, f) & 65535;
                        d[2 * e + 2 * f] += k * m;
                        Pr(d, 2 * e + 2 * f);
                        d[2 * e + 2 * f + 1] += g * m;
                        Pr(d, 2 * e + 2 * f + 1);
                        d[2 * e + 2 * f + 1] += k * l;
                        Pr(d, 2 * e + 2 * f + 1);
                        d[2 *
                            e + 2 * f + 2] += g * l;
                        Pr(d, 2 * e + 2 * f + 2)
                    }
                for (e = 0; e < c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
                for (e = c; e < 2 * c; e++) d[e] = 0;
                return new zr(d, 0)
            },
            Pr = function (a, b) {
                for (;
                    (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
            },
            Qr = function (a, b) {
                this.g = a;
                this.h = b
            },
            Lr = function (a, b) {
                if (Kr(b)) throw Error("xa");
                if (Kr(a)) return new Qr(Cr, Cr);
                if (Hr(a)) return b = Lr(Dr(a), b), new Qr(Dr(b.g), Dr(b.h));
                if (Hr(b)) return b = Lr(a, Dr(b)), new Qr(Dr(b.g), b.h);
                if (30 < a.g.length) {
                    if (Hr(a) || Hr(b)) throw Error("wa");
                    for (var c = Fr, d = b; 0 >= Or(d, a);) c = c.shiftLeft(1),
                        d = d.shiftLeft(1);
                    var e = Rr(c, 1),
                        f = Rr(d, 1);
                    d = Rr(d, 2);
                    for (c = Rr(c, 2); !Kr(d);) {
                        var g = f.add(d);
                        0 >= Or(g, a) && (e = e.add(c), f = g);
                        d = Rr(d, 1);
                        c = Rr(c, 1)
                    }
                    b = Mr(a, Nr(e, b));
                    return new Qr(e, b)
                }
                for (e = Cr; 0 <= Or(a, b);) {
                    c = Math.max(1, Math.floor(Ir(a) / Ir(b)));
                    d = Math.ceil(Math.log(c) / Math.LN2);
                    d = 48 >= d ? 1 : Math.pow(2, d - 48);
                    f = Er(c);
                    for (g = Nr(f, b); Hr(g) || 0 < Or(g, a);) c -= d, f = Er(c), g = Nr(f, b);
                    Kr(f) && (f = Fr);
                    e = e.add(f);
                    a = Mr(a, g)
                }
                return new Qr(e, a)
            };
        zr.prototype.and = function (a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Jr(this, d) & Jr(a, d);
            return new zr(c, this.h & a.h)
        };
        zr.prototype.or = function (a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Jr(this, d) | Jr(a, d);
            return new zr(c, this.h | a.h)
        };
        zr.prototype.xor = function (a) {
            for (var b = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b; d++) c[d] = Jr(this, d) ^ Jr(a, d);
            return new zr(c, this.h ^ a.h)
        };
        zr.prototype.shiftLeft = function (a) {
            var b = a >> 5;
            a %= 32;
            for (var c = this.g.length + b + (0 < a ? 1 : 0), d = [], e = 0; e < c; e++) d[e] = 0 < a ? Jr(this, e - b) << a | Jr(this, e - b - 1) >>> 32 - a : Jr(this, e - b);
            return new zr(d, this.h)
        };
        var Rr = function (a, b) {
            var c = b >> 5;
            b %= 32;
            for (var d = a.g.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? Jr(a, f + c) >>> b | Jr(a, f + c + 1) << 32 - b : Jr(a, f + c);
            return new zr(e, a.h)
        };
        Mr(Fr.shiftLeft(32), Fr);
        Mr(Fr.shiftLeft(128), Fr);
        var Sr = _.B || _.D || _.dc || !1;
        var Tr = function (a, b, c, d, e, f, g, k, l) {
            _.M.call(this, a);
            this.j = g || null;
            null != this.j && this.j.C((0, _.w)(this.Mi, this));
            this.s = null;
            this.h = "auto";
            this.Ta = this.P = "";
            this.Ob = new qo;
            this.xc = !!b && Sr && !_.B;
            this.aa = null != e ? e : 0;
            this.l = this.xc ? new gr : new hr;
            l && this.l.qa(!1);
            if (0 < this.aa)
                for (a = this.l, a.J = !0, b = 0; b < a.l; b++) g = _.Kj("DIV", "goog-menu", ""), e = _.Kj("DIV", null, g), g = new Yp(e, g), a.o[b] = g, document.body.appendChild(e);
            this.l.ja(c);
            this.o = k || null;
            this.wb = null != d ? d : -1;
            this.X = $m.ea();
            this.J = new _.pf;
            this.V = null;
            this.ab = "t";
            this.ba = this.la = null;
            this.B = f || null;
            this.Ua = !1;
            null != this.B && (this.B.l((0, _.w)(this.wc, this)), this.B.j((0, _.w)(this.Ji, this)));
            this.xa = null;
            this.O = zn.ea()
        };
        _.u(Tr, _.M);
        var Ur = function (a, b) {
                a.xa = b;
                a.l.B = b
            },
            Vr = function (a) {
                a.V = "https://translate.google.com";
                a.l.O.o = a.V || ""
            },
            Xr = function (a) {
                var b = Wr;
                a.X.j = b;
                a.ab = b
            },
            fs = function (a, b) {
                null != a.B && a.B.h();
                b && (a.s = new oo(b), a.ba = null);
                Yr(a) && (a.j.h(), null != a.o && a.o.g(!1));
                if (a.s) {
                    b = 0 != Jj().length;
                    a.g.ld(a.A());
                    a.l.Pd();
                    a.xa && a.xa.attach(a.s);
                    for (var c = "", d = 0, e = 0; e < V(a.s, 5); e++) Zr(a.s, e) && (c += " "), c += $r(a.s, e), d += V(po(a.s, e), 2);
                    if (0 != d) {
                        c = [];
                        d = !1;
                        e = a.s;
                        for (var f = "", g = 0; g < V(e, 5); g++) {
                            var k = po(e, g);
                            null != k.g[4] && 0 < xn(k, 4).length ?
                                f = xn(k, 4) : (new lo(k.g)).g[4] = f
                        }
                        for (e = 0; e < V(a.s, 5); e++) {
                            f = po(a.s, e);
                            g = mo(f, 0);
                            if (Zr(a.s, e)) a.g.appendChild(a.A(), a.g.U.createTextNode(" "));
                            else if ("km" == a.P || "lo" == a.P) {
                                k = a.g;
                                var l = k.appendChild,
                                    m = a.A();
                                var n = _.D ? Lj() : _.cc ? document.createTextNode("&shy;") : _.B ? document.createTextNode("&#8203;") : Lj();
                                l.call(k, m, n)
                            }
                            null != f.g[4] && 0 < xn(f, 4).length && 0 == wn(f, 5) && c.push(xn(f, 4));
                            var q;
                            k = $r(a.s, e);
                            /^[\s\xa0]*$/.test(k) ? 0 == k.length || (q = as(k)) : (q = a.g.N("SPAN", null, k), g = wn(g, 1), 0 <= a.wb && g < a.wb && _.R(q, "alt-low-conf"),
                                a.J.has(a.h + "." + a.P + "." + xn(f, 0)) && (g = a.J.get(a.h + "." + a.P + "." + xn(f, 0)), g != bs(f, 0) && (a.g.nb(q, g), _.R(q, "alt-edited"), d = !0, cs(a, !0))), q.title = $q, ar(a.l, q, f));
                            q && a.g.appendChild(a.A(), q)
                        }
                        if (null != a.j) {
                            q = a.h + "." + a.P;
                            for (e = 0; e < c.length; ++e) q += "." + c[e];
                            a.J.has(q) && (ds(a, !1), d = !0, es(a, a.J.get(q)), null != a.o && a.o.g(!1), cs(a, !0))
                        }
                        d || (cs(a, !1), ds(a, !1));
                        (d || b) && a.dispatchEvent("action")
                    }
                } else cs(a, !1), ds(a, !1)
            },
            as = function (a) {
                a = _.Dj(a).replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
                var b = document.createDocumentFragment(),
                    c = 0;
                _.Rb(a, function (d) {
                    0 != c && b.appendChild(_.Kj("BR"));
                    c++;
                    "" != d && b.appendChild(document.createTextNode(String(Hj(d))))
                });
                return b
            },
            gs = function (a, b) {
                if (Yr(a)) return a.j.g();
                var c = [];
                if (a.A() && a.A().childNodes)
                    for (var d = 0; d < a.A().childNodes.length; ++d) {
                        var e = a.A().childNodes[d];
                        c[d] = b && "BR" == e.tagName ? "\n" : _.qd(e)
                    }
                return c.join("")
            },
            is = function (a, b, c) {
                if (a)
                    for (var d = 0; d < V(a, 5); d++) {
                        var e = po(a, d);
                        if ((e = e && e) && sn(b.g, e.g)) {
                            e = -1;
                            b = V(a, 5);
                            for (var f = d; 0 <= f; f--)
                                if (0 == wn(po(a, f), 5)) {
                                    e = f;
                                    break
                                }
                            for (f = d + 1; f <=
                                V(a, 5); f++)
                                if (0 == wn(po(a, f), 5)) {
                                    b = f;
                                    break
                                }
                            if (c) d = hs(a, e, b);
                            else if (c = a, a = e, c) {
                                e = d + 1;
                                f = d;
                                for (d = $r(c, d).length; 64 > d && (e != b || f != a);) e < b && (d += $r(c, e++).length + 1), 64 > d && f > a && (d += $r(c, --f).length + 1);
                                d = hs(c, f, e)
                            } else d = "";
                            return d
                        }
                    }
                return ""
            },
            hs = function (a, b, c) {
                var d = [];
                d.push($r(a, b));
                for (b += 1; b < c; b++) Zr(a, b) && d.push(" "), d.push($r(a, b));
                return d.join("")
            },
            Zr = function (a, b) {
                if (0 == b) return !1;
                var c = po(a, b),
                    d = po(a, b - 1);
                return vn(mo(c, 0), 2) && !vn(mo(d, 0), 3) && !_.Wb($r(a, b - 1), "\n")
            };
        _.h = Tr.prototype;
        _.h.Wa = function () {
            return this.h
        };
        _.h.ga = function () {
            return this.P
        };
        _.h.N = function () {
            this.da(_.th(this.g, "span"))
        };
        _.h.da = function (a) {
            _.M.prototype.da.call(this, a);
            fs(this)
        };
        _.h.Y = function () {
            _.M.prototype.Y.call(this);
            S(this).D(this.l, "action", this.Wi);
            null != this.o && null != this.o.h && (S(this).D(this.o.h, "click", this.cj), _.Xf(S(this), this.o.h, "click", this.O.h, this.O));
            S(this).D(this.l, "show", this.Vi);
            this.A() && S(this).D(this.A(), "keydown", function (a) {
                32 == a.keyCode && a.stopPropagation()
            }, !0)
        };
        _.h.L = function () {
            _.M.prototype.L.call(this);
            this.l.R()
        };
        _.h.Mi = function () {
            this.B.qa(this.j.j());
            cs(this, this.j.j())
        };
        _.h.Wi = function (a) {
            if ("hide" != a.type || a.target == this.l)
                if (null == a.target && null != this.j) this.X.log("editpopupclk"), An(this.O, 233), null != this.o && this.o.g(!0), this.j.l(gs(this)), this.Ua = "none" != this.B.A().style.display, this.B.reset(), null != this.o ? this.B.qa("none" != this.o.h.style.display) : this.B.qa(!1), cs(this, !1);
                else {
                    var b = a.l;
                    null == b && null != a.currentTarget && (b = a.currentTarget.Va);
                    var c = a.target.xb();
                    if (null != b && null != a.target) {
                        var d = b,
                            e = this.l.s.get(_.za(d));
                        this.g.nb(d, c);
                        c == bs(e, 0) ? (_.Gl(d, "alt-edited"),
                            0 == Jj().length && (cs(this, !1), ds(this, !1))) : (_.R(d, "alt-edited"), cs(this, !0), ds(this, !0));
                        null != this.J && this.J.set(this.h + "." + this.P + "." + xn(e, 0), c);
                        e = this.l.s.get(_.za(b));
                        null != this.J && this.J.set(this.h + "." + this.P + "." + xn(e, 0), c);
                        d = bs(e, 0);
                        b = sm(this.l, a.target);
                        d = {
                            sl: this.h,
                            tl: this.P,
                            utrans: c,
                            gtrans: d,
                            index: b,
                            ophrase: xn(e, 0),
                            osentence: xn(e, 4),
                            tsentence: is(this.s, e)
                        };
                        0 < V(e, 2) && (d.confidence = wn(mo(e, 0), 1));
                        if (a.target instanceof ir || -1 == b) d.manual = 1, An(this.O, 240);
                        else {
                            a = An(this.O, 239);
                            e = new nn;
                            var f =
                                Hk(Hk(e, 2, ln), 3, jn);
                            _.Ih(f, 1, b);
                            _.Jh(a, 27, e)
                        }
                        for (var g in d) "string" === typeof d[g] && 64 < d[g].length && (d.tr = 1, d[g] = d[g].substr(0, 64));
                        this.X.log("usealt", d, this.V);
                        g = new _.td("usealt");
                        g.text = c;
                        this.dispatchEvent(g);
                        this.dispatchEvent("action")
                    }
                }
        };
        var es = function (a, b) {
            if (a.A()) {
                null == a.la && (a.ba = _.wa(a.g.Bi(a.A())));
                a.la = b;
                var c;
                if (c = a.A().childNodes && 0 < a.A().childNodes.length) c = (c = a.A().childNodes[0]) ? _.rf(a.l.h, _.za(c)) : !1;
                if (c) a.g.ld(a.A()), a.l.Pd(), b = a.g.N("SPAN", "alt-edited", a.la), a.g.appendChild(a.A(), b), ar(a.l, b, new lo);
                else {
                    _.hd(a.A());
                    a = a.A();
                    c = _.Dj(b);
                    b = _.Kj("DIV");
                    c = c.replace(/(\r\n|\r|\n)/g, "<br>").split("<br>");
                    for (var d = 0; d < c.length; ++d) {
                        var e = c[d];
                        e.length && (e = _.Kj("SPAN", "alt-edited", e), b.appendChild(e));
                        d != c.length - 1 && (e = _.Kj("BR"),
                            b.appendChild(e))
                    }
                    a.appendChild(b)
                }
            }
        };
        _.h = Tr.prototype;
        _.h.cj = function () {
            null != this.j && Yr(this) ? this.j.s() : js(this);
            this.X.log("clkundo", void 0, this.V)
        };
        _.h.Ji = function () {
            Yr(this) && (this.j.j() && (es(this, this.j.g()), this.Ua = !0), this.j.h(), null != this.o && this.o.g(!1), this.j.j() && cs(this, !0), this.B.qa(!0), _.O(this.B.A(), this.Ua), this.dispatchEvent("action"));
            An(this.O, 215);
            this.X.log("clkcancel", void 0, this.V)
        };
        _.h.Vi = function () {
            var a = this.l.s.get(_.za(this.l.Va));
            if (a) {
                if (0 < this.aa) {
                    var b = new jk("source=baf");
                    if (1 == this.aa) {
                        for (var c = [], d = 0, e = V(a, 2); d < e; d++) c.push(bs(a, d));
                        d = this.Ob;
                        var f = this.P,
                            g = this.h,
                            k = ks(this),
                            l = (0, _.w)(this.Xj, this);
                        e = new jk;
                        var m = new jk;
                        e.set("client", "mt");
                        e.set("sl", f);
                        e.set("tl", g);
                        e.set("hl", k);
                        e.set("v", "1.0");
                        b && e.o(b);
                        (b = !Array.isArray(c) || Array.isArray(c) && 1 == c.length) ? m.set("q", c): nk(m, "q", c);
                        b = (0, _.w)(d.l, d, b, l);
                        so(d, "/translate_a/t", e, m, b)
                    } else
                        for (d = 0, e = V(a, 2); d < e; d++) {
                            g =
                                bs(a, d);
                            c = this.Ob;
                            m = this.P;
                            l = this.h;
                            f = ks(this);
                            k = (0, _.w)(this.Yj, this, d);
                            var n = b,
                                q = new jk,
                                r = new jk;
                            q.set("client", "mt");
                            q.set("sl", m);
                            q.set("tl", l);
                            q.set("hl", f);
                            nk(q, "dt", ["at", "t"]);
                            n && q.o(n);
                            r.set("q", g);
                            so(c, "/translate_a/single", q, r, (0, _.w)(c.j, c, k, void 0))
                        }
                }
                b = new _.td("click");
                b.text = this.l.xb();
                b.o = V(this.s, 5);
                this.dispatchEvent(b);
                b = {};
                b.confidence = wn(mo(a, 0), 1);
                this.h && this.P && this.Ta && (b.segments = V(this.s, 5), b.sl = this.h, b.tl = this.P, b.hl = this.Ta);
                An(this.O, 238);
                this.X.log("phrsclk", b, this.V)
            }
        };
        _.h.Yj = function (a, b) {
            if (1 == this.aa || 1 < V(b, 5)) {
                var c = xn(new no(yn(b, 0, 0)), 0);
                var d = 1;
                for (var e = V(b, 0); d < e; d++) c += " " + xn(new no(yn(b, 0, d)), 0);
                d = c
            } else if (1 == V(b, 5)) {
                c = [];
                b = po(b, 0);
                d = 0;
                for (e = Math.min(this.aa, V(b, 2)); d < e; d++) c.push(bs(b, d));
                d = c.join(", ")
            } else d = "...";
            er(this.l, a, d)
        };
        _.h.Xj = function (a) {
            for (var b = 0; b < a.length; b++) er(this.l, b, a[b])
        };
        var js = function (a) {
                Yr(a) && (null != a.o && a.o.g(!1), a.j.h());
                $i(a.J);
                a.la = null;
                fs(a);
                a.dispatchEvent("action")
            },
            cs = function (a, b) {
                null != a.o && null != a.o.h && _.O(a.o.h, b)
            },
            ds = function (a, b) {
                null != a.B && (b && a.B.reset(), _.O(a.B.A(), b))
            };
        Tr.prototype.wc = function () {
            An(this.O, 374);
            var a = [],
                b;
            null != this.ba ? b = this.ba : b = _.id(this.A());
            for (var c = {
                segment: []
            }, d = null, e = 0, f = 0; f < b.length; f++) {
                var g = po(this.s, f);
                if (null != g) {
                    var k = _.qd(b[f]);
                    a: {
                        var l = k;
                        var m = g;
                        if (0 == V(m, 2)) l = 0;
                        else {
                            for (var n = 0; n < V(m, 2); ++n)
                                if (l == bs(m, n)) {
                                    l = n;
                                    break a
                                }
                            l = -1
                        }
                    }
                    m = (0, _.Xb)(xn(g, 4));
                    n = is(this.s, g, !0);
                    if (0 != m.length) {
                        if (0 == a.length || m != a[a.length - 1]) a.push(m), e = a.length - 1, d = null, e < V(this.s, 0) && (d = un(new no(yn(this.s, 0, e)), 4, 0)), d = xo(d), e = 0, d = {
                            source: m,
                            original_target: n,
                            segment_source: d,
                            phrase_correction: []
                        }, c.segment.push(d);
                        if (0 != l)
                            for (m = bs(g, 0).length, l = {
                                alternative_index: l,
                                edited_phrase: k,
                                source_span: [],
                                target_span: [{
                                    start: e,
                                    end: e + m
                                }]
                            }, d.phrase_correction.push(l), m = 0; m < V(g, 3); ++m) n = new ko(yn(g, 3, m)), l.source_span.push({
                                start: wn(n, 0),
                                end: wn(n, 1)
                            });
                        e += k.length;
                        vn(mo(g, 0), 2) && e++
                    }
                }
            }
            if (Yr(this)) {
                this.dispatchEvent("action");
                this.j.h();
                null != this.o && this.o.g(!1);
                cs(this, !0);
                this.j.g() != gs(this) && es(this, this.j.g());
                b = this.h + "." + this.P;
                for (f = 0; f < a.length; ++f) b += "." +
                    a[f];
                a = this.j.g();
                this.J.set(b, a);
                c.contains_full_edit = !0
            }
            c.edited_target = gs(this, !0);
            a = new jk;
            a.set("ue", JSON.stringify(c));
            a.set("sl", this.h);
            a.set("tl", this.P);
            _.Bh("/translate_suggestion?client=" + this.ab, void 0, "POST", a.toString(), void 0, 1E4)
        };
        var Yr = function (a) {
                return null != a.j && a.j.o()
            },
            $r = function (a, b) {
                a = po(a, b);
                return 0 == V(a, 2) ? xn(a, 0) : bs(a, 0)
            },
            bs = function (a, b) {
                return xn(mo(a, b), 0)
            },
            ks = function (a) {
                a = a.Ta;
                0 === a.length && null != _.Zc(document, "hl") && (a = _.Zc(document, "hl").value);
                return a
            };
        var ms, ns, os, ps;
        _.ls = function (a) {
            var b = a.ge,
                c = a.gh;
            a.Zg ? b = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + String(b).replace(_.ul, _.ol) + "',sizingMethod='scale');\"></span>" : (a = _.X.Tc, b = '<img src="' + _.P(_.Al(b)) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + _.P(a) + '">');
            a = _.X.Tc;
            return (0, _.bi)('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + _.P(_.yl(c)) + '" target="_blank">' + b +
                _.sl(a) + "</a></span>")
        };
        ms = function (a) {
            var b = a.ge,
                c = _.X.Tc,
                d = _.X.ai;
            return (0, _.bi)('<div id="goog-gt-tt" class="skiptranslate" dir="' + _.P(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + _.P(_.Al(b)) + '" width="20" height="20" alt="Google ' + _.P(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + _.sl(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
        };
        ns = function (a) {
            var b = a.method,
                c = a.zi,
                d = a.dir,
                e = _.X.ei,
                f = _.X.ue;
            a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + _.P(_.yl(a.mi)) + '" method="' + _.P(b) + '"><div class="form-buttons" style="text-align:' + (_.il(d, "rtl") ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + _.P(e) + '"><input class="activity-cancel" type="button" value="' + _.P(f) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
            b = c.length;
            for (d = 0; d < b; d++) a += '<input type="hidden" name="' + _.P(c[d]) + '"/>';
            return (0, _.bi)(a + "</div></form></div>")
        };
        os = function () {
            return (0, _.bi)('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
        };
        ps = function (a) {
            return (0, _.bi)('<div><span class="alt-translated-text"></span><div class="alt-helper-text">' + _.sl(a.gj) + '</div><div class="activity-form-container"></div></div>')
        };
        _.x(Pi, _.M);
        _.h = Pi.prototype;
        _.h.Hc = function (a) {
            this.B = a
        };
        _.h.cc = function () {
            if (!this.ia) throw Error("ya");
            if (!this.B) throw Error("za");
        };
        _.h.Wb = function () {};
        _.h.R = function () {
            this.Db() || (Pi.G.R.call(this), delete this.fe)
        };
        _.h.ma = function () {
            return this.B
        };
        var ss = function () {
                _.I.call(this);
                this.l = "closure_frame" + qs++;
                this.j = [];
                rs[this.l] = this
            },
            ts;
        _.x(ss, _.I);
        var rs = {},
            qs = 0,
            us = function (a, b) {
                var c = _.F(a);
                ik(b, function (d, e) {
                    Array.isArray(d) || (d = [d]);
                    _.Rb(d, function (f) {
                        f = c.N("INPUT", {
                            type: "hidden",
                            name: e,
                            value: f
                        });
                        a.appendChild(f)
                    })
                })
            };
        _.h = ss.prototype;
        _.h.na = null;
        _.h.Ea = null;
        _.h.ic = null;
        _.h.Cj = 0;
        _.h.Cb = !1;
        _.h.hc = null;
        _.h.send = function (a, b, c, d) {
            if (this.Cb) throw Error("Aa");
            a = new yk(a);
            b = b ? b.toUpperCase() : "GET";
            c && (c = _.Xc(), a.g.set("zx", c));
            ts || (ts = _.Kj("FORM"), ts.acceptCharset = "utf-8", c = ts.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(ts));
            this.na = ts;
            "GET" == b && us(this.na, a.g);
            d && us(this.na, d);
            d = this.na;
            a = a.toString();
            (0, _.$f)();
            xj(d, _.Dc(a));
            this.na.method = b;
            vs(this);
            ws(this)
        };
        var xs = function (a, b) {
            if (a.Cb) throw Error("Aa");
            var c = new yk(b.action);
            a.na = b;
            xj(a.na, c.toString());
            vs(a)
        };
        ss.prototype.abort = function () {
            if (this.Cb) {
                var a = ys(this);
                ck(a);
                this.Cb = !1;
                this.dispatchEvent("abort");
                zs(this)
            }
        };
        ss.prototype.L = function () {
            this.Cb && this.abort();
            ss.G.L.call(this);
            this.Ea && As(this);
            ws(this);
            delete this.C;
            this.na = null;
            delete rs[this.l]
        };
        var vs = function (a) {
            a.Cb = !0;
            a.ic = a.l + "_" + (a.Cj++).toString(36);
            a.Ea = _.F(a.na).N("IFRAME", {
                name: a.ic,
                id: a.ic
            });
            _.B && 7 > Number(_.tc) && xj(a.Ea, _.Dc(_.uh(_.sh('javascript:""'))));
            var b = a.Ea.style;
            b.visibility = "hidden";
            b.width = b.height = "10px";
            b.display = "none";
            _.D ? b.marginTop = b.marginLeft = "-10px" : (b.position = "absolute", b.top = b.left = "-10px");
            if (_.B && !_.vc("11")) {
                a.na.target = a.ic || "";
                _.F(a.na).U.body.appendChild(a.Ea);
                _.H(a.Ea, "readystatechange", a.o, !1, a);
                try {
                    a.h = !1, a.na.submit()
                } catch (r) {
                    _.Rd(a.Ea, "readystatechange",
                        a.o, !1, a), Bs(a)
                }
            } else {
                _.F(a.na).U.body.appendChild(a.Ea);
                b = a.ic + "_inner";
                var c = _.Wj(a.Ea);
                if (document.baseURI) {
                    var d = _.Dj(b);
                    d = cj('<head><base href="' + _.Dj(document.baseURI) + '"></head><body><iframe id="' + d + '" name="' + d + '"></iframe>')
                } else d = _.Dj(b), d = cj('<body><iframe id="' + d + '" name="' + d + '"></iframe>');
                c.write(_.Nc(d));
                _.H(c.getElementById(b), "load", a.g, !1, a);
                d = Ij("TEXTAREA", a.na);
                for (var e = 0, f = d.length; e < f; e++) {
                    var g = d[e].value;
                    ak(d[e]) != g && (_.md(d[e], g), d[e].value = g)
                }
                d = c.importNode(a.na, !0);
                d.target =
                    b;
                d.action = a.na.action;
                c.body.appendChild(d);
                e = Ij("SELECT", a.na);
                f = Ij("SELECT", d);
                g = 0;
                for (var k = e.length; g < k; g++)
                    for (var l = Ij("OPTION", e[g]), m = Ij("OPTION", f[g]), n = 0, q = l.length; n < q; n++) m[n].selected = l[n].selected;
                e = Ij("INPUT", a.na);
                f = Ij("INPUT", d);
                g = 0;
                for (k = e.length; g < k; g++)
                    if ("file" == e[g].type && e[g].value != f[g].value) {
                        a.na.target = b;
                        d = a.na;
                        break
                    }
                try {
                    a.h = !1, d.submit(), c.close(), _.C && _.jg(a.B, 250, a)
                } catch (r) {
                    _.Rd(c.getElementById(b), "load", a.g, !1, a), c.close(), Bs(a)
                }
            }
        };
        ss.prototype.o = function () {
            if ("complete" == this.Ea.readyState) {
                _.Rd(this.Ea, "readystatechange", this.o, !1, this);
                try {
                    var a = _.Wj(this.Ea);
                    if (_.B && "about:blank" == a.location && !navigator.onLine) {
                        Bs(this);
                        return
                    }
                } catch (b) {
                    Bs(this);
                    return
                }
                Cs(this, a)
            }
        };
        ss.prototype.g = function () {
            _.Rd(ys(this), "load", this.g, !1, this);
            try {
                Cs(this, this.Ea ? _.Wj(ys(this)) : null)
            } catch (a) {
                Bs(this)
            }
        };
        var Cs = function (a, b) {
                a.Cb = !1;
                var c;
                c || "function" != typeof a.C || (b = a.C(b)) && (c = 4);
                c ? Bs(a) : (a.dispatchEvent("complete"), a.dispatchEvent("success"), zs(a))
            },
            Bs = function (a) {
                a.h || (a.Cb = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), zs(a), a.h = !0)
            },
            zs = function (a) {
                As(a);
                ws(a);
                a.na = null;
                a.dispatchEvent("ready")
            },
            As = function (a) {
                var b = a.Ea;
                b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.j.push(b));
                a.hc && (_.kg(a.hc), a.hc = null);
                _.C ? a.hc = _.jg(a.s, 2E3, a) : a.s();
                a.Ea = null;
                a.ic = null
            };
        ss.prototype.s = function () {
            this.hc && (_.kg(this.hc), this.hc = null);
            for (; 0 != this.j.length;) {
                var a = this.j.pop();
                _.Qj(a)
            }
        };
        var ws = function (a) {
                a.na && a.na == ts && _.hd(a.na)
            },
            ys = function (a) {
                return a.Ea ? _.B && !_.vc("11") ? a.Ea : _.Wj(a.Ea).getElementById(a.ic + "_inner") : null
            };
        ss.prototype.B = function () {
            if (this.Cb) {
                var a = this.Ea ? _.Wj(ys(this)) : null;
                a && !_.ac(a, "documentUri") ? (_.Rd(ys(this), "load", this.g, !1, this), Bs(this)) : _.jg(this.B, 250, this)
            }
        };
        var Ds = function (a, b) {
            _.M.call(this);
            this.B = a || "";
            this.j = null;
            this.o = [];
            this.h = null;
            this.J = b || "GET";
            this.l = this.s = null
        };
        _.u(Ds, _.M);
        Ds.prototype.N = function () {
            var a = {
                mi: this.B,
                method: this.J,
                zi: this.o,
                dir: _.Eb.test(_.W) ? "rtl" : "ltr"
            };
            this.da(_.Gi(ns, a))
        };
        Ds.prototype.da = function (a) {
            this.I = a;
            this.h = jm(this, "activity-form");
            a = jm(this, "activity-submit");
            this.l = new Um("");
            nm(this.l, a);
            a = jm(this, "activity-cancel");
            this.j = new Um("");
            nm(this.j, a)
        };
        Ds.prototype.Y = function () {
            var a = S(this);
            a.D(this.l, "action", (0, _.w)(this.O, this));
            a.D(this.j, "action", this.dispatchEvent.bind(this, "cancelled"))
        };
        Ds.prototype.O = function () {
            var a = !0;
            this.s && (a = this.s());
            a && (a = new ss, _.H(a, "success", function () {
                this.dispatchEvent("successful")
            }), _.H(a, "error", function () {
                this.dispatchEvent("failed")
            }), xs(a, this.h));
            this.dispatchEvent("submitted")
        };
        var Es = function (a, b) {
                for (var c in b) a.h[c] && (a.h[c].value = b[c])
            },
            Fs = function (a, b) {
                return a.h[b] ? a.h[b].value : ""
            };
        Ds.prototype.L = function () {
            this.l = this.h = this.j = null;
            _.M.prototype.L.call(this)
        };
        var Gs = function (a, b) {
            a.s = b
        };
        var Hs = function (a, b) {
            Pi.call(this, a);
            this.j = null;
            this.J = b || {};
            this.o = new $p;
            this.s = this.h = null;
            this.l = new _.wp((a || {}).apiKey || "", Wr);
            this.l.o.j = !1
        };
        _.u(Hs, Pi);
        _.h = Hs.prototype;
        _.h.Hc = function (a) {
            Pi.prototype.Hc.call(this, a);
            this.l.initialize((0, _.w)(this.cc, this))
        };
        _.h.cc = function () {
            Pi.prototype.cc.call(this);
            var a = this.ma().Z,
                b = this.ma().B;
            if (a && b) {
                _.md(this.s, a);
                var c = this.o;
                c.I = b;
                Oj(c.g, c.I);
                Zp(c);
                _.O(this.o.g, !0);
                b = this.ma().Wa();
                c = this.ma().ga();
                if (this.l.Ka() && b && c) {
                    var d = this.ma().Qc(),
                        e = (0, _.w)(this.Ej, this);
                    this.l && this.l.translate(e, [d], b, c, 0, !1);
                    Es(this.h, {
                        gtrans: a,
                        text: this.ma().Qc(),
                        hl: _.W,
                        langpair: b + "|" + c
                    });
                    Es(this.h, this.J);
                    Es(this.h, {
                        client: Wr
                    })
                }
                this.dispatchEvent("ready")
            }
        };
        _.h.N = function () {
            this.da(_.Gi(ps, {
                gj: _.X.bg
            }))
        };
        _.h.da = function (a) {
            this.I = a;
            this.s = jm(this, "alt-translated-text");
            var b = jm(this, "activity-form-container");
            this.h = new Ds(_.Po, "POST");
            this.h.o = ji(this.J);
            Gs(this.h, (0, _.w)(function () {
                Es(this.h, {
                    utrans: gs(this.j)
                });
                return Fs(this.h, "utrans") != Fs(this.h, "gtrans")
            }, this));
            this.h.ja(b);
            kr = _.X.ki;
            $q = _.X.bg;
            this.j = new Tr(void 0, !0, a);
            Ur(this.j, this.o);
            Vr(this.j);
            Xr(this.j);
            nm(this.j, this.s)
        };
        _.h.Y = function () {
            Pi.prototype.Y.call(this);
            var a = S(this);
            a.D(this.h, "cancelled", (0, _.w)(function () {
                js(this.j);
                this.dispatchEvent("cancelled")
            }, this));
            a.D(this.h, "submitted", (0, _.w)(function () {
                var b = gs(this.j);
                this.ma().Z = b && (0, _.Xb)(b);
                this.dispatchEvent("submitted");
                b = _.X.qg;
                _.md(this.ma().l.A(), b)
            }, this))
        };
        _.h.Ej = function (a) {
            a && fs(this.j, a)
        };
        _.h.Wb = function () {
            _.O(this.o.g, !1)
        };
        _.h.L = function () {
            this.j && this.j.R();
            this.s = this.o = this.j = null;
            this.l && this.l.R();
            this.l = null;
            this.h && this.h.R();
            this.h = null;
            Pi.prototype.L.call(this)
        };
        var Wr = _.Eo.replace("_", "-") + "-alt";
        var Is = function (a, b) {
            Pi.call(this, a);
            this.o = !1;
            this.l = b || {};
            this.j = null
        };
        _.u(Is, Pi);
        _.h = Is.prototype;
        _.h.Hc = function (a) {
            Pi.prototype.Hc.call(this, a);
            S(this).D(this.j.A(), "keydown", (0, _.w)(this.ma().nd, this.ma(), !1));
            this.o = this.ma().Vc;
            this.cc()
        };
        _.h.cc = function () {
            Pi.prototype.cc.call(this);
            this.j.j(this.ma().Z);
            var a = this.ma().Wa(),
                b = this.ma().ga();
            a && b && (Es(this.h, {
                gtrans: this.ma().Z,
                text: this.ma().Qc(),
                hl: _.W,
                langpair: a + "|" + b
            }), Es(this.h, this.l));
            this.dispatchEvent("ready");
            this.j.A().focus()
        };
        _.h.Wb = function () {
            this.ma().nd(this.o)
        };
        _.h.N = function () {
            this.da(_.Gi(os))
        };
        _.h.da = function (a) {
            this.I = a;
            a = jm(this, "contribute-original-text");
            this.j = new nr("");
            nm(this.j, a);
            tr(this.j);
            sr(this.j);
            a = jm(this, "activity-form-container");
            this.h = new Ds(_.Po, "POST");
            this.h.o = ji(this.l);
            Gs(this.h, (0, _.w)(function () {
                Es(this.h, {
                    utrans: (0, _.Xb)(this.j.Qa())
                });
                return Fs(this.h, "utrans") != Fs(this.h, "gtrans")
            }, this));
            this.h.ja(a)
        };
        _.h.Y = function () {
            Pi.prototype.Y.call(this);
            var a = S(this);
            a.D(this.h, "cancelled", (0, _.w)(function () {
                this.dispatchEvent("cancelled")
            }, this));
            a.D(this.h, "submitted", (0, _.w)(function () {
                var b = this.j.Qa();
                this.ma().Z = b && (0, _.Xb)(b);
                this.dispatchEvent("submitted");
                b = _.X.qg;
                _.md(this.ma().l.A(), b)
            }, this))
        };
        _.h.L = function () {
            this.j && this.j.R();
            this.j = null;
            this.h && this.h.R();
            this.h = null;
            Pi.prototype.L.call(this)
        };
        var Js = function (a) {
            _.I.call(this);
            this.ya = a;
            this.j = {};
            this.H = new _.J(this);
            this.h = null
        };
        _.u(Js, _.I);
        Js.prototype.attach = function () {};
        Js.prototype.kg = function () {};
        Js.prototype.L = function () {
            this.H.R();
            this.H = null
        };
        var Ks = function (a, b, c) {
            if (b = a.ya.h[b]) {
                c = c || "undefined" == typeof c;
                for (var d = 0; d < b.Sa.length; ++d) b.Sa[d] && a.Yg(b.Sa[d], c)
            }
        };
        Js.prototype.Yg = function (a, b) {
            _.L(a, "backgroundColor", b ? "#E6ECF9" : "");
            _.L(a, "color", b ? "#000" : "")
        };
        var ki = {},
            Ls = null,
            Ms = function (a) {
                a = _.za(a);
                delete ki[a];
                li() && Ls && Ls.stop()
            },
            Os = function () {
                Ls || (Ls = new Tl(function () {
                    Ns()
                }, 20));
                var a = Ls;
                0 != a.nc || a.start()
            },
            Ns = function () {
                var a = _.vb();
                _.Ac(ki, function (b) {
                    Ps(b, a)
                });
                li() || Os()
            };
        var Qs = function (a, b, c, d) {
            Qp.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Ba");
            if (a.length != b.length) throw Error("Ca");
            this.o = a;
            this.M = b;
            this.duration = c;
            this.K = d;
            this.coords = [];
            this.progress = 0
        };
        _.x(Qs, Qp);
        Qs.prototype.play = function (a) {
            if (a || 0 == this.g) this.progress = 0, this.coords = this.o;
            else if (1 == this.g) return !1;
            Ms(this);
            this.startTime = a = _.vb(); - 1 == this.g && (this.startTime -= this.duration * this.progress);
            this.endTime = this.startTime + this.duration;
            this.progress || this.j();
            this.h("play"); - 1 == this.g && this.h("resume");
            this.g = 1;
            var b = _.za(this);
            b in ki || (ki[b] = this);
            Os();
            Ps(this, a);
            return !0
        };
        Qs.prototype.stop = function (a) {
            Ms(this);
            this.g = 0;
            a && (this.progress = 1);
            Rs(this, this.progress);
            this.Wb();
            this.l()
        };
        Qs.prototype.Uf = function (a) {
            this.progress = a;
            1 == this.g && (this.startTime = _.vb() - this.duration * this.progress, this.endTime = this.startTime + this.duration)
        };
        Qs.prototype.L = function () {
            0 == this.g || this.stop(!1);
            this.h("destroy");
            Qs.G.L.call(this)
        };
        var Ps = function (a, b) {
                b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
                a.progress = (b - a.startTime) / (a.endTime - a.startTime);
                1 < a.progress && (a.progress = 1);
                Rs(a, a.progress);
                1 == a.progress ? (a.g = 0, Ms(a), a.h("finish"), a.l()) : 1 == a.g && a.B()
            },
            Rs = function (a, b) {
                "function" === typeof a.K && (b = a.K(b));
                a.coords = Array(a.o.length);
                for (var c = 0; c < a.o.length; c++) a.coords[c] = (a.M[c] - a.o[c]) * b + a.o[c]
            };
        Qs.prototype.B = function () {
            this.h("animate")
        };
        Qs.prototype.h = function (a) {
            this.dispatchEvent(new Ss(a, this))
        };
        var Ss = function (a, b) {
            _.td.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.state = b.g
        };
        _.x(Ss, _.td);
        var Ts = function (a, b, c, d, e) {
            Qs.call(this, b, c, d, e);
            this.element = a
        };
        _.x(Ts, Qs);
        Ts.prototype.C = _.v;
        Ts.prototype.B = function () {
            this.C();
            Ts.G.B.call(this)
        };
        Ts.prototype.l = function () {
            this.C();
            Ts.G.l.call(this)
        };
        Ts.prototype.j = function () {
            this.C();
            Ts.G.j.call(this)
        };
        var Us = function (a, b, c, d, e) {
            "number" === typeof b && (b = [b]);
            "number" === typeof c && (c = [c]);
            Ts.call(this, a, b, c, d, e);
            if (1 != b.length || 1 != c.length) throw Error("Da");
            this.s = -1
        };
        _.x(Us, Ts);
        var Vs = 1 / 1024;
        Us.prototype.C = function () {
            var a = this.coords[0];
            if (Math.abs(a - this.s) >= Vs) {
                var b = this.element.style;
                "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
                this.s = a
            }
        };
        Us.prototype.j = function () {
            this.s = -1;
            Us.G.j.call(this)
        };
        Us.prototype.l = function () {
            this.s = -1;
            Us.G.l.call(this)
        };
        var Ws = function (a, b, c) {
            Us.call(this, a, 1, 0, b, c)
        };
        _.x(Ws, Us);
        Ws.prototype.j = function () {
            this.element.style.display = "";
            Ws.G.j.call(this)
        };
        Ws.prototype.l = function () {
            this.element.style.display = "none";
            Ws.G.l.call(this)
        };
        var Xs = function (a, b, c) {
            Us.call(this, a, 0, 1, b, c)
        };
        _.x(Xs, Us);
        Xs.prototype.j = function () {
            this.element.style.display = "";
            Xs.G.j.call(this)
        };
        var Ys = function () {
            _.M.call(this);
            this.h = null
        };
        _.u(Ys, _.M);
        Ys.prototype.N = function () {
            this.da(this.g.N("DIV", {
                "class": "status-message"
            }))
        };
        Ys.prototype.da = function (a) {
            this.I = a;
            a.style.display = "none"
        };
        var $s = function (a) {
                var b = c;
                var c = (0, _.w)(function () {
                    _.md(this.A(), "");
                    b && b()
                }, a);
                c = (0, _.w)(a.j, a, 750, c);
                Zs(a, c)
            },
            at = function (a) {
                a.h && (a.h.stop(!0), a.h = null);
                _.md(a.A(), "");
                a.S(!1)
            },
            Zs = function (a, b) {
                a.h = new Xs(a.A(), 750);
                S(a).Vb(a.h, "begin", (0, _.w)(function () {
                    this.A().style.display = "block"
                }, a));
                S(a).Vb(a.h, "finish", (0, _.w)(function () {
                    this.h = null;
                    window.setTimeout(b, 2E3)
                }, a));
                a.h.play()
            };
        Ys.prototype.j = function (a, b) {
            this.isVisible() && (this.h = new Ws(this.A(), a), S(this).Vb(this.h, "finish", (0, _.w)(function () {
                b && b()
            }, this)), this.h.play())
        };
        Ys.prototype.S = function (a) {
            this.A().style.display = a ? "block" : "none";
            this.A().style.opacity = a ? "1" : "0"
        };
        Ys.prototype.isVisible = function () {
            return "none" !== this.A().style.display && "0" !== this.A().style.opacity
        };
        var bt = function () {
            Y.call(this);
            this.X = {};
            this.wb = {};
            this.J = null;
            this.wc = !1;
            this.Ob = this.j = this.T = null;
            this.aa = {};
            this.H = new _.J(this);
            this.B = this.P = this.l = this.ob = this.h = this.Z = this.Na = null;
            this.M = !0;
            this.ab = []
        };
        _.u(bt, Y);
        _.h = bt.prototype;
        _.h.ja = function () {
            this.M = !1;
            var a = _.Eb.test(_.W) ? "rtl" : "ltr";
            this.qc(_.Gi(ms, {
                ge: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
                ul: "https://www.google.cn/images/cleardot.gif",
                yl: _.Jo,
                dir: a
            }));
            this.className += " skiptranslate";
            this.A() && this.J && this.ob && this.l.A() && this.T && this.B && (this.H.D(window, "resize", (0, _.w)(this.Ab, this)), this.H.D(this, "hide", (0, _.w)(this.Hj, this)), this.ab.length && (this.Je.apply(this, this.ab), this.ab = []))
        };
        _.h.Je = function (a) {
            for (var b = [], c = 0; c < arguments.length; ++c) {
                var d = arguments[c];
                if (d)
                    if (this.J || d.fe) {
                        var e = d;
                        var f = _.Kj("SPAN", {
                            "class": e.className || "activity-link"
                        });
                        _.md(f, e.vf || "");
                        e = f;
                        b.push(e);
                        Nj(d.fe || this.J, e);
                        d.Hc && d.Wb && (f = (0, _.w)(this.Di, this, d), this.H.D(e, "click", f), d.ee && this.H.D(this.T, d.ee, f));
                        d.id = d.id || d.jb();
                        this.X[d.id] && this.th(d);
                        this.X[d.id] = d;
                        this.wb[d.id] = e
                    } else this.ab.push(d)
            }
            return b
        };
        _.h.th = function (a) {
            for (var b = 0; b < arguments.length; ++b) {
                var c = "string" === typeof arguments[b] || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                    d = this.X[c],
                    e = this.wb[c];
                d && e && (this.j && this.j.id === c && this.Se(), this.H.sa(d, ["submitted", "cancelled"]), d.R(), this.aa[c] && delete this.aa[c], delete this.X[c], delete this.wb[c], _.Qj(e))
            }
        };
        _.h.Di = function (a) {
            if (this.T) {
                a != this.j && this.j && (at(this.l), this.j.Wb.call(this.j), this.j.A() && (this.j.A().style.display = "none"), ct(this, !1), this.j = null);
                ct(this, !0);
                at(this.l);
                this.j = a;
                if (this.aa[a.id]) {
                    var b = this.aa[a.id];
                    var c = a.cc
                } else a.ja(), b = a.A(), c = a.Hc, this.H.D(a, ["submitted", "cancelled"], (0, _.w)(this.Se, this)), a.Id && (this.aa[a.id] = b);
                Nj(this.T, b);
                c.call(a, this);
                a = new Xs(b, 100);
                this.H.Vb(a, "finish", (0, _.w)(this.Ab, this, !0, !0));
                a.play()
            }
        };
        _.h.Se = function () {
            if (this.j)
                if (at(this.l), this.j.Wb.call(this.j), this.j.A()) {
                    var a = new Ws(this.j.A(), 100);
                    this.H.Vb(a, "finish", (0, _.w)(function () {
                        _.Qj(this.j.A());
                        this.j = null;
                        ct(this, !1);
                        _.qd(this.l.A()) && ($s(this.l), this.Ab(!0, !0))
                    }, this));
                    a.play()
                } else ct(this, !1), this.j = null
        };
        _.h.Bf = function (a, b) {
            this.Ob = a;
            Y.prototype.Bf.call(this, a, b);
            this.A().style.display = "block"
        };
        _.h.Be = function (a) {
            if (!this.M) {
                var b = nq(this, a.target);
                this.Oa = b;
                this.O();
                b != this.g ? (this.g = b, oq(this, b), pq(this), mq(this, a)) : oq(this, b)
            }
        };
        _.h.Hj = function () {
            at(this.l);
            this.wc && this.Se()
        };
        _.h.L = function () {
            for (var a in this.X) this.th(a);
            this.H && this.H.R();
            this.H = null;
            this.l && this.l.R();
            this.B = this.ob = this.Ob = this.T = this.J = this.l = null;
            Y.prototype.L.call(this)
        };
        var ct = function (a, b) {
            a.wc = b;
            a.M = b;
            if (a.M) {
                var c = a.A();
                a.Na = new N(c.offsetLeft, c.offsetTop)
            } else a.Na && (null != (a.s || null) && ((a.s || null).g = a.Na), _.Nk(a.A(), a.Na), a.Na = null);
            a.J.style.display = b ? "none" : "inline-block";
            a.ob.style.display = b ? "inline-block" : "none"
        };
        _.h = bt.prototype;
        _.h.nd = function (a) {
            if (this.isVisible()) {
                a = (this.Vc = a) ? this.o.D : this.o.sa;
                var b = _.E(this.A());
                a.call(this.o, b, "mousedown", this.Ef, !0)
            } else Y.prototype.nd.call(this, a)
        };
        _.h.qc = function (a) {
            Y.prototype.qc.call(this, a);
            if (a) {
                this.J = Xi("activity-links", a);
                var b = Xi("status-message", a);
                b && (this.l = new Ys, nm(this.l, b));
                this.ob = Xi("started-activity-container", a);
                this.T = Xi("activity-root", a);
                this.B = Xi("original-text", a)
            }
        };
        _.h.Ab = function (a, b) {
            var c = Rk(document.body).y;
            if (this.s) {
                (this.s || null).g.y += c;
                Y.prototype.Ab.call(this);
                var d = parseInt(this.A().style.left, 10);
                a = parseInt(this.A().style.top, 10) - (a ? 0 : c);
                b && (b = this.xf || {}, a -= b.top || 10, d -= b.left || 10);
                a -= c;
                (this.s || null).g.y = a;
                (this.s || null).g.x = d;
                c = new N(d, a);
                _.Nk(this.A(), c)
            }
        };
        _.h.S = function (a) {
            Y.prototype.S.call(this, a)
        };
        _.h.Lb = function (a) {
            this.h = a
        };
        _.h.oa = function (a) {
            this.P = a
        };
        _.h.mb = function (a) {
            a = a ? (0, _.Xb)(a) : "";
            this.B ? _.md(this.B, a) : Y.prototype.mb.call(this, a)
        };
        _.h.Wa = function () {
            return this.h
        };
        _.h.ga = function () {
            return this.P
        };
        _.h.Qc = function () {
            return this.B ? _.qd(this.B) : Y.prototype.Qc.call(this)
        };
        _.h.Bc = function (a) {
            this.M || Y.prototype.Bc.call(this, a)
        };
        _.h.Zd = function (a) {
            this.M || Y.prototype.Zd.call(this, a)
        };
        _.h.Yd = function (a) {
            this.M || Y.prototype.Yd.call(this, a)
        };
        var dt = {
            set: function (a, b) {
                a.className = b
            }, get: function (a) {
                a = a.className;
                return "string" === typeof a && a.match(/\S+/g) || []
            }, add: function (a, b) {
                var c = dt.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = c.length + d.length;
                dt.rg(c, d);
                dt.set(a, c.join(" "));
                return c.length == e
            }, remove: function (a, b) {
                var c = dt.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = dt.Hg(c, d);
                dt.set(a, e.join(" "));
                return e.length == c.length - d.length
            }, rg: function (a, b) {
                for (var c = 0; c < b.length; c++) _.ta(a, b[c]) || a.push(b[c])
            }, Hg: function (a,
                b) {
                return a.filter(function (c) {
                    return !_.ta(b, c)
                })
            }, El: function (a, b, c) {
                for (var d = dt.get(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);
                e && (d.push(c), dt.set(a, d.join(" ")));
                return e
            }, ol: function (a, b, c) {
                var d = dt.get(a);
                "string" === typeof b ? _.va(d, b) : Array.isArray(b) && (d = dt.Hg(d, b));
                "string" !== typeof c || _.ta(d, c) ? Array.isArray(c) && dt.rg(d, c) : d.push(c);
                dt.set(a, d.join(" "))
            }, has: function (a, b) {
                return _.ta(dt.get(a), b)
            }, enable: function (a, b, c) {
                c ? dt.add(a, b) : dt.remove(a, b)
            }, toggle: function (a, b) {
                var c = !dt.has(a, b);
                dt.enable(a, b, c);
                return c
            }
        };
        var et = function (a, b) {
            Js.call(this, a);
            b = b || {};
            this.F = {
                apiKey: b.apiKey || "",
                Tb: b.Tb || 1
            };
            this.g = null
        };
        _.u(et, Js);
        _.h = et.prototype;
        _.h.attach = function (a, b) {
            b && (b.g = a, this.g.attach(b))
        };
        _.h.kg = function (a) {
            a && iq(this.g, a)
        };
        _.h.Qh = function () {
            var a = this.g.Ob;
            if (a && void 0 !== a.g) {
                var b = a.g;
                a = this.ya.h[b];
                Ks(this, this.h, !1);
                this.h = b;
                Ks(this, b);
                this.g.Lb(a.ck);
                this.g.oa(a.fk);
                b = a.ha;
                this.g.Z = b && (0, _.Xb)(b);
                this.g.mb(a.text)
            }
        };
        _.h.Ph = function () {
            Ks(this, this.h, !1)
        };
        _.h.nh = function () {
            this.ya.h[this.h].wi.dispatchEvent("updating")
        };
        _.h.L = function () {
            this.g.R();
            this.g = null;
            Js.prototype.L.call(this)
        };
        _.h.Yg = function (a, b) {
            dt[b ? "add" : "remove"](a, "goog-text-highlight")
        };
        /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
        var ft = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var gt = function (a) {
            this.s = a;
            this.l = this.h = this.o = this.j = -1;
            this.g = !1;
            this.B = 0;
            this.K = "";
            this.M = 0
        };
        gt.prototype.start = function () {
            if (!this.g) {
                this.g = !0;
                var a = [],
                    b;
                var c = 62;
                for (b = 0; 15 > b; b++) a[b] = ft[0 | Math.random() * c];
                this.K = a.join("");
                this.B = 0;
                this.l = this.h = this.o = this.j = -1;
                this.M = _.vb();
                _.jg(this.C, 1E4, this)
            }
        };
        gt.prototype.stop = function () {
            this.g && (this.g = !1, ht(this))
        };
        gt.prototype.C = function () {
            this.g && (ht(this), _.jg(this.C, 1E3, this))
        };
        var ht = function (a) {
            var b = a.s.l,
                c = a.s.s,
                d = a.s.j,
                e = a.s.o;
            if (a.j != b || a.o != c || a.h != d || a.l != e) {
                var f = {};
                f.ct = b;
                f.cv = c;
                f.cts = d;
                f.cvs = e;
                f.sid = a.K;
                f.seq = a.B++;
                f.tat = _.vb() - a.M;
                if (0 <= a.j || 0 <= a.o || 0 <= a.h || 0 <= a.l) f.pt = a.j, f.pv = a.o, f.pts = a.h, f.pvs = a.l;
                _.Li("te_v", f);
                a.j = b;
                a.o = c;
                a.h = d;
                a.l = e
            }
        };
        var it = function () {
            this.o = this.j = this.s = this.l = 0;
            this.g = [];
            this.h = null != _.p.IntersectionObserver ? new IntersectionObserver((0, _.w)(this.C, this)) : null
        };
        it.prototype.attach = function (a, b) {
            this.j += b;
            var c = this.g.length;
            this.g.push(b);
            for (b = 0; b < a.length; ++b) {
                var d = a[b];
                Rj(d) ? (d[jt] = c, this.l += _.qd(d).length, this.h && this.h.observe(d)) : this.dh(d.nodeType)
            }
        };
        it.prototype.reset = function () {
            this.o = this.j = this.s = this.l = 0;
            this.g = []
        };
        it.prototype.C = function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (0 < c.intersectionRatio && null != c.target[jt]) {
                    this.s += _.qd(c.target).length;
                    var d = c.target[jt];
                    this.o += this.g[d];
                    this.g[d] = 0;
                    c.target[jt] = void 0
                }
            }
        };
        _.ep.attach(36546, it.prototype, {
            dh: 1
        });
        var jt = "_gt_" + Math.random().toString(36).substr(2);
        _.kt = function (a, b) {
            _.y.call(this);
            a = a || {};
            this.F = _.mi(a);
            this.F.Tb = a.Tb;
            this.F.pe = !!a.pe;
            this.F.ri = parseInt(a.ri, 10) || 300;
            this.F.Pj = a.Pj;
            this.F.trackVisibility = a.trackVisibility || !1;
            this.o = 0;
            this.h = {};
            this.H = new _.J(this);
            this.j = new et(this, this.F);
            b && (this.j.j = b || {});
            a = this.j;
            a.g = new bt({
                ak: a.F.ak
            });
            a.g.Xg = 300;
            a.g.zh = 1E3;
            a.g.nd(!0);
            a.H.D(a.g, "show", (0, _.w)(a.Qh, a));
            a.H.D(a.g, "hide", (0, _.w)(a.Ph, a));
            b = new Hs({
                apiKey: a.F.apiKey,
                id: "alternate",
                vf: _.X.Kh,
                Id: !0
            }, a.j);
            a.g.Je(b);
            a.H.D(b, "submitted", (0, _.w)(a.nh,
                a));
            a.F.Tb && (b = new Is({
                id: "contribute",
                ee: "dblclick",
                Id: !0
            }, a.j), a.g.Je(b), a.H.D(b, "submitted", (0, _.w)(a.nh, a)));
            // a.g.ja();
            this.l = this.g = null;
            this.F.trackVisibility && null != _.p.IntersectionObserver && (this.g = new it, this.l = new gt(this.g))
        };
        _.u(_.kt, _.y);
        var lt = function (a) {
            a.l && a.l.stop();
            for (var b in a.h) {
                var c = a,
                    d = b,
                    e = c.h[d];
                if (e) {
                    if (c.g)
                        for (var f = c.g, g = e.Sa, k = 0; k < g.length; ++k) {
                            var l = f,
                                m = g[k];
                            Rj(m) ? (m[jt] = void 0, l.h && l.h.unobserve(m)) : l.dh(m.nodeType)
                        }
                    for (f = 0; f < e.Sa.length; ++f) e.Sa[f] && c.j.kg(e.Sa[f]);
                    delete c.h[d]
                }
            }
            a.g && a.g.reset()
        };
        _.kt.prototype.L = function () {
            lt(this);
            this.H.R();
            this.H = null;
            this.j.R();
            this.j = null
        };
        var mt = function (a) {
                for (var b = 0; b < a.length; ++b)
                    if (a[b] && a[b].node) return a[b].node;
                return null
            },
            qt = function (a) {
                var b = mt(a);
                if (!b) return null;
                var c = [],
                    d = [],
                    e = [];
                b = new Mp(b, !0);
                var f = a[a.length - 1].node,
                    g = 0,
                    k = !1;
                do {
                    b.next();
                    var l = b.node();
                    if (!l) break;
                    var m = b.g.g,
                        n = b.depth();
                    for (1 == m && --n; g < a.length && !a[g].node;)++g;
                    l == a[g].node || !k && 1 == m && (null != l && null == l.previousSibling ? 0 : !nt(ot(l))) ? (m = pt(l), d.push({
                        node: m,
                        mb: function () {}
                    }), e[d.length - 1] = n, Oj(m, l), l == a[g].node && (c[g++] = d.length - 1, k = !0)) : k = !1
                } while (l !=
                    f);
                return {
                    ag: e,
                    Lj: c,
                    ij: d
                }
            },
            nt = function (a) {
                return null != a && Jp[a.tagName]
            },
            ot = function (a) {
                if (null == a) return null;
                for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == (0, _.Xb)(_.qd(a));) a = a.previousSibling;
                return a
            },
            tt = function (a, b, c, d, e, f, g) {
                _.I.call(this);
                this.g = [];
                for (var k = 0; k < a.length; ++k) this.g.push("nodeType" in a[k] ? rt(a[k]) : a[k]), st(a[k].node);
                this.j = b;
                this.M = d || 0;
                this.Z = e || 0;
                this.C = c;
                this.ya = f || null;
                this.vc = g || "transparent";
                this.T = this.K = this.O = !1;
                this.o = [];
                this.s = [];
                this.h = [];
                this.W = [];
                this.H = new _.J(this);
                this.l = this.J = !1
            },
            rt, st, Bt, zt, pt;
        _.u(tt, _.I);
        var wt = function (a) {
                if (!a) return !1;
                if (3 != a.nodeType || !_.B) return ut in a && !!a[ut];
                if (!a.parentNode) return !0;
                if (!(vt in a.parentNode)) return !1;
                var b = a.parentNode[vt];
                if (!b || !b[a.nodeValue]) return !1;
                b = b[a.nodeValue];
                for (var c = 0; c < b.length; ++c)
                    if (b[c] == a) return !0;
                return !1
            },
            xt = function (a, b) {
                if (!a) return "";
                if ("TITLE" == a.tagName) return String(document.title);
                3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
                return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : "string" === typeof a[b] ? String(a[b]) : ""
            };
        tt.prototype.wa = function () {
            return this.j
        };
        var yt = function (a, b, c) {
                b = {
                    oh: b,
                    Hf: c,
                    pa: []
                };
                a.h.push(b);
                return b
            },
            At = function (a) {
                if (!a.l && a.O && !a.K && !a.T) {
                    a.K = !0;
                    var b;
                    if (b = zt(a.g)) {
                        b = a.g;
                        var c = a.h;
                        if (1 == b.length && b[0] && b[0].$f) {
                            for (var d = [], e = 0; e < c.length; ++e)
                                for (var f = 0; f < c[e].pa.length; ++f) d.push(c[e].pa[f].ha);
                            b[0].mb(d.join(" "), b[0].node);
                            b = !0
                        } else b = !1;
                        b = !b
                    }
                    if (b && (b = qt(a.g))) {
                        a.s = b.Lj;
                        a.o = b.ij;
                        d = a.g;
                        e = a.s;
                        f = a.o;
                        var g = b.ag;
                        c = [];
                        for (var k = 0; k < d.length; ++k)
                            if (c[k] = [], d[k].node && void 0 !== e[k])
                                for (var l = 0; l < f.length; ++l)
                                    if (!(g[l] > g[e[k]])) {
                                        if (g[l] ==
                                            g[e[k]]) {
                                            if (f[l].node.parentNode != f[e[k]].node.parentNode) continue
                                        } else {
                                            for (var m = g[e[k]] - g[l], n = f[e[k]].node.parentNode; m-- && n && n != f[l].node.parentNode;) n = n.parentNode;
                                            if (n != f[l].node.parentNode) continue
                                        }
                                        c[k].push(l)
                                    }
                        d = a.g;
                        e = a.h;
                        f = -1;
                        for (g = e.length - 1; 0 <= g; --g)
                            for (k = e[g], l = k.pa.length - 1; 0 <= l; --l)
                                if (m = k.pa[l], !(0 > m.fa) && d[m.fa] && d[m.fa].node)
                                    if (0 > f) m.be = _.Ro(c[m.fa]), f = c[m.fa][c[m.fa].length - 1];
                                    else
                                        for (n = c[m.fa].length - 1; 0 <= n; --n)
                                            if (c[m.fa][n] <= f) {
                                                m.be = _.Ro(c[m.fa].slice(0, n + 1));
                                                f = c[m.fa][n];
                                                break
                                            }
                        for (c =
                            e = 0; c < a.h.length; ++c) {
                            d = a.h[c];
                            f = a.g;
                            g = d;
                            k = b.ag;
                            l = a.s;
                            m = "";
                            for (n = 0; n < g.pa.length; ++n) {
                                var q = g.pa[n];
                                m += q.ha;
                                if (0 > q.fa) {
                                    var r = -1,
                                        z = -1,
                                        G = l[g.pa[n - 1].fa];
                                    void 0 !== G && (r = k[G]);
                                    n < g.pa.length - 1 && (G = l[g.pa[n + 1].fa], void 0 !== G && (z = k[G]));
                                    if (0 <= r || 0 <= z) a: if (z = (0 > r || z < r) && n < g.pa.length - 1, r = g.pa[z ? n + 1 : n - 1], !(r.fa >= f.length || null == f[r.fa].node)) {
                                        G = q.ha;
                                        q.ha = "";
                                        if (/^ +$/.test(G) && (q = z ? r.ha.charCodeAt(0) : r.ha.charCodeAt(r.ha.length - 1), 3584 <= q && 3711 >= q || 12288 <= q && 12351 >= q || 12352 <= q && 12543 >= q || 12784 <= q && 12799 >= q ||
                                            19968 <= q && 40959 >= q || 65280 <= q && 65519 >= q)) break a;
                                        r.ha = z ? G + r.ha : r.ha + G
                                    }
                                }
                            }
                            f = m;
                            g = a.g;
                            k = d;
                            l = a.o;
                            m = b.ag;
                            n = a.s;
                            q = [];
                            for (r = 0; r < k.pa.length && !(e >= l.length); ++r)
                                if (z = k.pa[r], z.be && !(0 > z.fa) && g[z.fa].node && z.ha)
                                    if (e == n[z.fa] || e in z.be && (!(e + 1 in z.be) || e + 1 != n[z.fa])) {
                                        if (l[e] && l[e].node) {
                                            G = pt(l[e].node);
                                            q.push(G);
                                            for (var Q = l[e].node, vd = m[n[z.fa]] - m[e], mc = G, rb = g[z.fa].node.parentNode, lf = mc; rb && vd--;) lf = rb.cloneNode(!1), lf.appendChild(mc), rb = rb.parentNode, mc = lf;
                                            Q.appendChild(lf);
                                            Q = g[z.fa].node;
                                            g[z.fa].te ? g[z.fa].$g ||
                                                G.appendChild(Q) : (Q = g[z.fa].node.cloneNode(!1), Q.id && (Q.id = ""), G.appendChild(Q));
                                            g[z.fa].mb(z.ha, Q)
                                        }
                                    } else ++e, --r;
                            g = q;
                            q = a.g;
                            k = a.C;
                            if (d.oh) k = d.oh;
                            else {
                                l = q.length;
                                m = -1;
                                for (n = 0; n < d.pa.length; ++n) r = d.pa[n].fa, 0 <= r && q[r] && q[r].node && (m = Math.max(m, r), l = Math.min(l, r));
                                q = "";
                                for (n = l; n <= m; ++n) k[n] && (q += k[n]);
                                k = q
                            }
                            m = g;
                            n = k;
                            if (a.ya) {
                                if (3 != a.ya.F.Tb) {
                                    g = a.W;
                                    k = g.push;
                                    l = a.ya;
                                    d = d.Hf;
                                    q = a;
                                    d = l.h[++l.o] = {
                                        id: l.o.toString(),
                                        wi: q,
                                        text: n,
                                        Dl: d || n,
                                        ha: f,
                                        ck: l.s,
                                        fk: l.C,
                                        Sa: m
                                    };
                                    for (f = 0; f < m.length; ++f) m[f] && l.j.attach(d.id, m[f]);
                                    l.g &&
                                        l.g.attach(m, n.length);
                                    l.l && l.l.start();
                                    k.call(g, d.id)
                                }
                            } else
                                for (d = 0; d < m.length; ++d) m[d].title = n
                        }
                        b = a.g;
                        for (c = 0; c < b.length; ++c) b[c].node && !b[c].te && _.Qj(b[c].node);
                        b = a.g;
                        c = a.o;
                        a = a.s;
                        for (e = d = 0; e < c.length; ++e)
                            if (f = c[e].node) {
                                for (; d < b.length && e > a[d];) d++;
                                (d >= b.length || e != a[d]) && !f.firstChild && (_.Qj(f), c[e].node = null)
                            }
                    }
                }
            };
        tt.prototype.restore = function () {
            if (this.K)
                if (this.K = !1, this.ya && lt(this.ya), this.W = [], zt(this.o), 1 == this.g.length && this.g[0].$f) this.g[0].mb(this.C[0], this.g[0].node);
                else {
                    for (var a = 0, b = 0; b < this.o.length; ++b) {
                        var c = this.o[b].node;
                        if (c) {
                            for (; a < this.g.length && b > this.s[a];) {
                                var d = a++;
                                this.g[d].node && (Bt(this.g[d].node), this.g[d].node = null)
                            }
                            if (a < this.g.length && b == this.s[a] && this.g[a].node) {
                                this.g[a].$g || (_.hd(c), c.appendChild(this.g[a].node));
                                this.g[a].mb(this.C[a], this.g[a].node);
                                a++;
                                d = c;
                                var e = d.parentNode;
                                if (e && 11 != e.nodeType)
                                    if (d.removeNode) d.removeNode(!1);
                                    else {
                                        for (; c = d.firstChild;) e.insertBefore(c, d);
                                        _.Qj(d)
                                    }
                            } else _.Qj(c)
                        }
                    }
                    this.o = []
                }
        };
        tt.prototype.L = function () {
            _.I.prototype.L.call(this);
            this.restore();
            for (var a = 0; a < this.g.length; ++a) this.g[a].node && Bt(this.g[a].node);
            this.g = null
        };
        st = function (a) {
            if (a)
                if (3 == a.nodeType && _.B) {
                    vt in a.parentNode && a.parentNode[vt] || (a.parentNode[vt] = {});
                    var b = a.parentNode[vt];
                    b[a.nodeValue] || (b[a.nodeValue] = []);
                    b = b[a.nodeValue];
                    for (var c = 0; c < b.length; ++c)
                        if (b[c] == a) return;
                    b.push(a)
                } else a[ut] = 1
        };
        Bt = function (a) {
            if (!a || 3 == a.nodeType && _.B) {
                var b = a.parentNode;
                if (b && vt in b) {
                    var c = b[vt];
                    if (c && a && c[a.nodeValue]) {
                        var d = c[a.nodeValue];
                        if (d)
                            for (var e = 0; e < d.length; ++e)
                                if (d[e] == a) {
                                    d.splice(e, 1);
                                    break
                                }
                        0 == d.length && delete c[a.nodeValue]
                    }
                    if (c && cp(c)) try {
                        delete b[vt]
                    } catch (f) {
                        b[vt] = ""
                    }
                }
            } else if (ut in a) try {
                delete a[ut]
            } catch (f) {
                a[ut] = ""
            }
        };
        zt = function (a) {
            for (var b = 0; b < a.length; ++b) try {
                a[b].node && !a[b].node.parentNode && (a[b].node = null)
            } catch (c) {
                a[b].node = null
            }
            for (b = a.length - 1; 0 <= b && !a[b].node; --b);
            a.length = b + 1;
            return a.length
        };
        pt = function (a) {
            a = a.ownerDocument ? a.ownerDocument.createElement("font") : _.ed(document, "font");
            st(a);
            a.style.verticalAlign = "inherit";
            return a
        };
        _.Ct = function () {
            this.h = {};
            this.g = {}
        };
        _.Ct.prototype.has = function (a, b) {
            return null != this.h[a] || null != this.g[a] || b && (a in this.h || a in this.g)
        };
        _.Ct.prototype.write = function (a, b) {
            this.g[a] = b
        };
        _.Ct.prototype.remove = function (a) {
            delete this.g[a];
            delete this.h[a]
        };
        var ut = "_gt_" + Math.random().toString(36).substr(2),
            vt = "_gtn_" + Math.random().toString(36).substr(2);
        (function () {
            function a(c) {
                document.title = c
            }
            var b = {};
            rt = function (c, d) {
                if ("TITLE" == c.tagName) return {
                    node: c,
                    mb: a,
                    te: !0,
                    $g: !0,
                    $f: !0
                };
                if (3 == c.nodeType) return {
                    node: c,
                    mb: function (e, f) {
                        _.md(f, e)
                    }
                };
                d || (d = "value");
                b[d] || (b[d] = function (e, f) {
                    f.setAttribute && f.setAttribute(d, e);
                    "string" === typeof e && (f[d] = e)
                });
                c = {
                    node: c,
                    mb: b[d],
                    te: !0
                };
                "value" != d && (c.$f = !0);
                return c
            }
        })();
        var Dt = function (a, b, c, d) {
                d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : _.qd(d);
                d = {
                    fa: c,
                    ha: Hj(d)
                };
                a.push(d);
                b[c] ? b[c].end = d : b[c] = {
                    start: d,
                    end: d
                };
                return d
            },
            Et = function (a) {
                for (var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? Oj(c, a) : Pj(c, a), Et(c))
            };
        var Ft = function (a, b) {
                this.K = a || null;
                this.T = b || Dp.ea();
                this.C = this.s = this.J = null;
                this.l = this.j = !1;
                this.o = null;
                this.g = [];
                this.h = 0
            },
            Gt = function (a, b) {
                a.j || (a.J = b)
            },
            Ht = function (a, b, c) {
                a.s = c ? (0, _.w)(b, c) : b
            },
            It = function (a, b, c) {
                a.C = c ? (0, _.w)(b, c) : b
            },
            Jt = function (a, b) {
                a.j || (a.j = !0, a.M = b, a.h++, a.o = a.J, a.B())
            };
        Ft.prototype.stop = function () {
            this.h++;
            this.j = !1;
            this.g = []
        };
        var Kt = function (a) {
                if (!a.j) return null;
                for (var b = !1, c = 0; c < a.g.length; ++c)
                    if (a.g[c].target === a) {
                        a.g[c].ready = !1;
                        a.g[c].Ih = a.h + 1;
                        b = !0;
                        break
                    }
                b || a.g.push({
                    target: a,
                    ready: !1,
                    Ih: a.h + 1
                });
                return (0, _.w)(a.B, a, a, a.h + 1)
            },
            Lt = function (a) {
                if (!a.j) return !0;
                for (var b = 0; b < a.g.length; ++b)
                    if (a.g[b].target === a && a.g[b].Ih == a.h) return a.g[b].ready;
                return !0
            };
        Ft.prototype.B = function (a, b) {
            if (this.j) {
                if (a)
                    for (var c = 0; c < this.g.length; ++c)
                        if (this.g[c].target === a) {
                            this.g[c].ready = !0;
                            break
                        }
                this.l || this.T.add((0, _.w)(this.O, this, b || this.h))
            }
        };
        Ft.prototype.O = function (a) {
            if (this.h != a) return !1;
            a = this.o;
            if (a == Mt) return this.stop(), this.s && this.s.call(this.K, this, this.M), !1;
            this.l = !0;
            try {
                var b = a.call(this.K, this, this.M);
                if (!b) throw Error();
            } catch (c) {
                this.stop();
                a = c;
                if (this.C) this.C.call(this.K, a, this, this.M);
                else throw a;
                return !1
            } finally {
                this.l = !1
            }
            b != Nt && (this.o = b, this.h++, this.B());
            return !1
        };
        var Nt = function () {},
            Mt = function () {};
        var Pt = function (a, b, c, d, e) {
                b = b || {};
                this.O = e || [];
                this.s = [];
                this.M = [];
                Ot(this, a || document.documentElement, void 0 === b.uh || !!b.uh);
                this.B = c || tt;
                this.K = b.oj;
                this.j = this.g = this.o = this.ad = null;
                this.C = !!b.jk;
                this.ta = !!b.ik;
                this.W = this.C ? 27 : 13;
                this.T = !0;
                this.J = [];
                this.l = new Ft(this, d)
            },
            Qt = function (a, b, c, d) {
                a.l.j || (b = {
                    Gh: b,
                    Ah: c,
                    Sa: [],
                    ph: [],
                    dc: [],
                    textLength: 0,
                    size: 0,
                    continuous: !0
                }, a.ad = null, Gt(a.l, a.h), Ht(a.l, d), It(a.l, (0, _.w)(function (e) {
                    this.vj(e);
                    d()
                }, a)), Jt(a.l, b))
            },
            Rt = function (a, b) {
                return 0 < a.Sa.length ?
                    new b(a.Sa, a.dc.join(""), a.ph, a.textLength, a.size) : null
            },
            St = function (a, b) {
                if (!a.j) return a.ad = Rt(b, a.B), !0;
                if (!b.continuous && 0 < b.Sa.length) return a.ad = Rt(b, a.B), !0;
                b.continuous = a.j.kh;
                a: {
                    var c = a.j;
                    var d = a.W;
                    if (b.size > b.Ah || b.textLength > b.Gh) c = !1;
                    else {
                        var e = c.size,
                            f = c.text.length;
                        if (0 != b.Sa.length && (e += 1 == b.Sa.length ? b.size + d + d : b.size + d, f += b.textLength, e > b.Ah || f > b.Gh)) {
                            c = !1;
                            break a
                        }
                        b.size = e;
                        b.textLength = f;
                        b.Sa.push(c.node);
                        b.ph.push(c.text);
                        d = b.Sa.length - 1;
                        0 == d ? b.dc.push(c.Ze) : (1 == d && (b.dc[0] = "<a i=0>" +
                            b.dc[0] + "</a>"), b.dc.push("<a i=" + d + ">"), b.dc.push(c.Ze), b.dc.push("</a>"));
                        c = !0
                    }
                }
                if (c) return a.j = null, !1;
                a.ad = Rt(b, a.B);
                return !0
            },
            Tt = function (a, b, c) {
                var d = xt(b, c);
                d && (0, _.Xb)(_.zj(d)) && a.J.push({
                    node: b,
                    oi: c,
                    text: d
                })
            },
            au, Yt, Vt, Xt, Ot, Zt, Wt, Ut;
        Pt.prototype.h = function (a, b) {
            var c = this;
            if (this.j && St(this, b)) return Mt;
            if (!this.g) {
                this.T = !!this.s.length;
                if (!this.s.length && (a = this.J.shift())) return this.j = {
                    kh: !1,
                    node: rt(a.node, a.oi),
                    text: a.text,
                    Ze: _.Dj(a.text),
                    size: this.C ? _.Vc(a.text).length : a.text.length
                }, b.continuous = !1, St(this, b), Mt;
                a = this.s.shift() || this.M.shift();
                if (!a) return this.j = null, St(this, b), Mt;
                this.o = [a.hk];
                this.g = new Mp(a.root)
            }
            this.g.next();
            if (this.g.done) return this.g = null, b.continuous = !1, this.h;
            a = this.g.node();
            var d = this.g.g.g;
            if (-1 == d) return Ut(this), Vt(a) || (b.continuous = !1), this.h;
            Wt(this, a);
            d = 1 == d;
            var e = Xt(a);
            if ((e || d) && this.T && !Yt(a)) return Ot(this, a, Zt(this), !0), this.g.g.Mb(), Ut(this), this.h;
            if (d && Zt(this) && (this.ta && Tt(this, a, "title"), Tt(this, a, "alt"), Tt(this, a, "placeholder"), Tt(this, a, "aria-label"), Tt(this, a, "aria-placeholder"), Tt(this, a, "aria-roledescription"), Tt(this, a, "aria-valuetext"), Np(this.g)))
                for (var f = a.firstChild; f;) {
                    if (3 == f.nodeType) {
                        var g = f.nodeValue.split("\n");
                        if (2 < g.length || 2 == g.length && "" != (0, _.Xb)(g[0]) &&
                            "" != (0, _.Xb)(g[1])) {
                            f.nodeValue = g[0];
                            for (var k = 1; k < g.length; ++k) {
                                var l = _.E(a).createElement("font");
                                this.O.push(l);
                                Pj(l, f);
                                f = l;
                                Pj(_.E(a).createTextNode("\n" + g[k]), f);
                                f = f.nextSibling
                            }
                        }
                    }
                    f = f.nextSibling
                }
            a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function (n) {
                Ot(c, n, Zt(c))
            });
            if (e) {
                this.g.g.Mb();
                if (Zt(this)) {
                    var m = xt(a);
                    if ((0, _.Xb)(_.zj(m)) && (this.j = {
                        kh: !0,
                        node: rt(a),
                        text: m,
                        Ze: _.Dj(m),
                        size: this.C ? _.Vc(m).length : m.length
                    }, St(this, b))) return Ut(this), Mt
                }
                Ut(this);
                return this.h
            }
            if (d) {
                if (_.$t(a) ||
                    !a.firstChild && "IFRAME" != a.tagName) return b.continuous = b.continuous && !!Jp[a.tagName], this.g.g.Mb(), Ut(this), this.h;
                if ("IFRAME" == a.tagName) {
                    try {
                        a.src.match(/https?:\/\//) && _.Ef(a.src.match(_.Df)[3] || null) != window.location.hostname || (m = _.Wj(a).documentElement) && Ot(this, m, Zt(this))
                    } catch (n) {}
                    b.continuous = !1;
                    this.g.g.Mb();
                    Ut(this);
                    return this.h
                }
                Zt(this) && Vt(a) ? this.K && "A" == a.tagName && a.href && this.K(a) : b.continuous = !1;
                return this.h
            }
            this.g.g.Mb();
            Ut(this);
            return this.h
        };
        _.$t = function (a) {
            return wt(a) || 3 != a.nodeType && (!a.tagName || Ip[a.tagName] || Jp[a.tagName] || El(a, "skiptranslate"))
        };
        au = function (a) {
            var b = _.E(a);
            return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle
        };
        Yt = function (a) {
            return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = au(a), !!a && "none" != a.display && "hidden" != a.visibility)
        };
        Vt = function (a) {
            if (3 == a.nodeType) return !0;
            if (1 != a.nodeType) return !1;
            var b = au(a);
            return !!Hp[a.tagName] && (!b || !b.display || "inline" == b.display)
        };
        Xt = function (a) {
            return !!a && (3 == a.nodeType && "string" === typeof a.nodeValue || "TITLE" == a.tagName && "string" === typeof a.value || "TEXTAREA" == a.tagName && El(a, "translate") || "INPUT" == a.tagName && (Kp[a.type] || El(a, "translate")))
        };
        Ot = function (a, b, c, d) {
            (d ? a.M : a.s).push({
                root: b,
                hk: void 0 === c || c
            })
        };
        Zt = function (a) {
            return a.o[a.o.length - 1]
        };
        Wt = function (a, b) {
            b = !wt(b) && (b.nodeType == ej && Zt(a) || !(El(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (El(b, "translate") || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || Zt(a)));
            a.o.push(b)
        };
        Ut = function (a) {
            a.o.pop()
        };
        _.ep.attach(5762, Pt.prototype, {
            vj: 1
        });
        var bu = function () {
            _.y.call(this);
            this.g = []
        };
        _.u(bu, _.y);
        bu.prototype.restore = function () {
            _.jg(this.h, 0, this)
        };
        bu.prototype.h = function () {
            for (var a = 0; a < this.g.length; ++a) _.Qj(this.g[a]);
            this.g = []
        };
        bu.prototype.L = function () {
            _.y.prototype.L.call(this);
            this.restore()
        };
        var cu = function (a) {
            var b = new _.tf;
            ik(a, function (c) {
                if (Rj(c)) b.add(c);
                else {
                    a: {
                        var d;
                        if (_.zc && !(_.B && _.vc("9") && !_.vc("10") && _.p.SVGElement && c instanceof _.p.SVGElement) && (d = c.parentElement)) {
                            c = d;
                            break a
                        }
                        d = c.parentNode;
                        c = Rj(d) ? d : null
                    }
                    null != c && b.add(c)
                }
            });
            return b
        };
        var du = function (a) {
            this.h = !0;
            this.l = a;
            this.j = !1;
            this.g = []
        };
        du.prototype.wa = function () {
            return this.g.join("")
        };
        var eu = function (a, b) {
                this.o = a;
                this.l = !0;
                this.j = b;
                this.g = null;
                this.h = 0
            },
            fu = function (a, b) {
                return a.l ? (b((0, _.w)(a.s, a), a.o, a.j ? "en" : ""), !0) : !1
            };
        eu.prototype.s = function (a, b, c) {
            this.g = b;
            this.h = c;
            a()
        };
        var gu = function (a, b) {
                this.l = a;
                this.K = !!b;
                this.g = this.B = 0;
                this.o = this.j = -1;
                this.s = this.C = this.h = 0
            },
            ju = function (a, b, c) {
                a.K && (b -= 9);
                for (var d = "", e = 0, f = a.B; f < a.l.length; ++f) {
                    var g = a.l.charAt(f),
                        k = g.charCodeAt(0);
                    e++;
                    a.h += a.K ? 127 >= k ? 32 >= k || hu[k] ? 3 : 1 : 2047 >= k || 55296 <= k && 56319 >= k || 56320 <= k && 57343 >= k ? 6 : 9 : 1;
                    k = a.h >= b;
                    iu[g] ? (a.o = f, a.C = a.h, k = k || e > c) : " " == g && (a.j = f, a.s = a.h, k = k || e > c);
                    if (k) return 0 <= a.o ? (d = a.l.substring(a.g, a.o + 1), a.h -= a.C, a.g = a.o + 1, a.o >= a.j ? (a.j = -1, a.s = 0) : a.s -= a.C, a.o = -1, a.C = 0) : 0 <= a.j ? (d = a.l.substring(a.g,
                        a.j + 1), a.h -= a.s, a.g = a.j + 1, a.j = -1, a.s = 0) : (d = a.l.substring(a.g, f + 1), a.h = 0, a.g = f + 1, a.o = a.j = -1, a.s = a.C = 0), a.B = f + 1, d
                }
                a.g < a.l.length && (d = a.l.substring(a.g), a.g = a.l.length);
                return d
            },
            iu = _.Ro(". , ; : \\? !".split(" ")),
            hu = _.Ro([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
        var ku = function (a, b, c, d, e, f) {
                this.C = d || function () {};
                this.Db = f || function () {};
                this.W = !!e;
                this.j = a.g.Af;
                this.l = 0;
                this.T = function () {};
                this.K = c;
                this.M = this.h = this.o = 0;
                this.g = null;
                this.O = 0;
                this.ba = !1;
                this.aa = a.g.yf;
                this.ta = [];
                this.X = 0;
                this.Z = a.g.Qd;
                this.s = Ap(a);
                this.Na = this.W ? 1 : 6;
                this.xa = a.g.Rf;
                this.V = b;
                this.B = [];
                this.hb = a
            },
            lu = function (a, b) {
                var c = 0;
                a.T = (0, _.w)(function () {
                    ++c == this.B.length && b()
                }, a)
            },
            mu = function (a, b, c) {
                a.C = function () {};
                a.V = b;
                a.g = null;
                a.X = 0;
                a.B = [];
                a.T = function () {};
                a.K = c
            },
            nu = function (a, b,
                c) {
                if (0 == a.h && (a.h = b ? 860 : a.s, !c || c <= a.s)) {
                    a.o = a.h;
                    return
                }
                do b = a.h, a.h < a.s && (a.h *= a.Na, a.h > a.s && (a.h = a.s)); while (b != a.h && c && a.h < c);
                a.o = a.h
            },
            ou = function (a, b) {
                var c = null != b,
                    d = !c && !a.ba;
                (d || c) && a.C(100, d, b)
            },
            pu = function (a) {
                return a.Z ? a.g.Z : a.g.wa().length
            },
            qu = function (a, b, c, d, e) {
                return new Pt(a.V.shift(), {
                    jk: a.Z,
                    oj: b,
                    uh: !0,
                    ik: !!c
                }, function () {
                    var f = Array.prototype.slice.call(arguments);
                    return new tt(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d)
                }, a.K, e)
            },
            tu = function (a, b, c) {
                if (0 < a.aa && ru(b) >= a.aa) return !0;
                if (pu(a) > a.h) {
                    if (0 < ru(b)) return !0;
                    nu(a, c, pu(a));
                    for (var d = a.g.wa(), e = new gu(d, a.Z), f; f = ju(e, a.h, a.j);)
                        if (b.l.push(new eu([f], !1)), a.l += f.length, a.j -= f.length, 0 >= a.j) {
                            b.K = d.substring(e.g);
                            break
                        } else nu(a, c);
                    su(b, a.g, !0);
                    a.g = null;
                    return !0
                }
                if (pu(a) > a.o) return !0;
                su(b, a.g, !0);
                a.o -= pu(a) + a.xa;
                a.l += a.g.M;
                a.j -= a.g.M;
                a.g = null;
                return !1
            };
        var uu = function (a, b) {
            _.y.call(this);
            this.l = b;
            this.j = {
                rootMargin: a
            };
            this.g = new IntersectionObserver((0, _.w)(this.h, this), this.j)
        };
        _.u(uu, _.y);
        uu.prototype.L = function () {
            _.y.prototype.L.call(this);
            this.g = null
        };
        uu.prototype.h = function (a) {
            for (var b = 0; b < a.length; b++)
                if (0 < a[b].intersectionRatio) {
                    this.l();
                    break
                }
        };
        var vu = function (a, b, c, d, e, f, g, k) {
                this.l = a;
                this.g = b;
                this.C = [];
                this.K = null;
                this.j = c;
                this.h = d;
                this.P = e;
                this.O = f;
                this.W = g;
                this.B = this.o = null;
                this.s = k || null;
                this.T = this.J = !1;
                this.M = {}
            },
            wu = function (a) {
                for (var b = new _.tf, c = 0; c < a.length; c++) {
                    for (var d = a[c], e = new _.tf, f = 0; f < d.g.length; f++) {
                        var g = d.g[f].node;
                        null != g && e.add(g)
                    }
                    d = b;
                    e = aj(e);
                    f = e.length;
                    for (g = 0; g < f; g++) d.add(e[g]);
                    d.size = d.g.size
                }
                return b
            };
        vu.prototype.trackVisibility = function (a) {
            a = this.o = new uu("200px", (0, _.w)(this.Z, this, a));
            var b = cu(wu([].concat(this.g, this.C)));
            ik(b, (0, _.w)(a.g.observe, a.g));
            a = this.B = new uu("0px", (0, _.w)(this.V, this));
            b = cu(wu([].concat(this.g, this.C)));
            ik(b, (0, _.w)(a.g.observe, a.g))
        };
        vu.prototype.Z = function (a) {
            this.o && (this.o.g.disconnect(), this.o = null);
            a()
        };
        vu.prototype.V = function () {
            this.J = !0;
            xu(this);
            !this.T && this.s && this.s.l()
        };
        var xu = function (a) {
            a.B && (a.B.g.disconnect(), a.B = null)
        };
        vu.prototype.ta = function () {
            this.J && !this.T && this.s && this.s.j();
            this.o && (this.o.g.disconnect(), this.o = null);
            xu(this)
        };
        var su = function (a, b, c) {
                c ? (a.g.push(b), a.M[b.wa()] = !0) : a.C.push(b)
            },
            ru = function (a) {
                return a.g.length + a.C.length
            },
            yu = function (a) {
                if (0 == a.l.length) {
                    for (var b = [], c = 0; c < a.g.length; ++c) b.push(a.g[c].wa());
                    a.l.push(new eu(b, !1))
                }
            };
        vu.prototype.translate = function (a) {
            function b() {
                d++;
                d == c && e()
            }
            yu(this);
            for (var c = 0, d = 0, e = function () {}, f = this.j, g = this.h, k = this.P, l = this.O, m = this.W, n = 0; n < this.l.length; ++n) fu(this.l[n], function (q, r, z) {
                q = f.hb.translate(_.ub(q, b), r, z || g, k, ++f.X, l, m, f.W);
                f.ta.push(q);
                return q
            }) && c++;
            0 != c && (e = Kt(a));
            return c
        };
        var zu = function (a, b) {
            _.y.call(this);
            this.g = [];
            this.j = [];
            this.h = a;
            this.P = b
        };
        _.u(zu, _.y);
        zu.prototype.l = function (a) {
            var b = (0, _.Xb)(a.href);
            0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.j.push(a.href), this.g.push(a), a.href = b + "#googtrans/" + this.h + "/" + this.P)
        };
        zu.prototype.L = function () {
            _.y.prototype.L.call(this);
            this.restore()
        };
        zu.prototype.restore = function () {
            if (this.g.length) {
                for (var a = 0; a < this.g.length; ++a) this.g[a].href = this.j[a];
                this.g = [];
                this.j = []
            }
        };
        var Au = function (a, b) {
            _.y.call(this);
            this.g = a;
            this.h = _.Eb.test(b) ? "translated-rtl" : "translated-ltr";
            a = [].concat(this.g);
            for (b = 0; b < a.length; ++b) Rj(a[b]) && _.R(a[b], this.h)
        };
        _.u(Au, _.y);
        Au.prototype.L = function () {
            _.y.prototype.L.call(this);
            this.restore()
        };
        Au.prototype.restore = function () {
            for (var a = [].concat(this.g), b = 0; b < a.length; ++b) Rj(a[b]) && _.Gl(a[b], this.h)
        };
        _.Bu = function (a, b, c, d, e, f, g, k, l, m) {
            _.y.call(this);
            this.C = a;
            this.wb = b;
            this.ya = c || null;
            this.aa = m || null;
            this.J = null;
            this.Ta = !!d;
            this.Sb = e || "transparent";
            this.Ob = !!f;
            this.K = [];
            this.ba = this.M = this.g = !1;
            this.j = k || new _.Ct;
            this.xc = !k;
            this.X = g || Dp.ea();
            this.Ua = new bu;
            this.Na = this.la = this.T = !1;
            this.ob = this.l = .5;
            this.ab = .01;
            this.B = new _.Fp(this.l);
            this.Z = (this.s = this.V = !!l) ? new MutationObserver((0, _.w)(this.Si, this)) : null;
            this.P = this.h = null;
            _.H(window, "blur", this.Tg, !0, this);
            _.H(window, "focus", this.Ug, !0, this)
        };
        _.u(_.Bu, _.y);
        _.h = _.Bu.prototype;
        _.h.Wa = function () {
            return this.h ? this.h : ""
        };
        _.h.ga = function () {
            return this.P ? this.P : ""
        };
        _.h.ti = function (a) {
            this.rj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.Cg = function (a) {
            this.sj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.ui = function (a) {
            this.tj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.vi = function (a) {
            this.uj.apply(this, arguments);
            this.o && this.o(0, !1, 1)
        };
        _.h.translate = function (a, b, c, d, e) {
            if (d || a != this.h || b != this.P) Cu(this), this.xc && (this.j = new _.Ct);
            else if (this.g) return;
            this.o = c;
            this.uc = e;
            this.s = this.V;
            this.Z && this.Z.observe(document.body, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            });
            this.g = !0;
            this.h = a;
            this.P = b;
            this.Ta && (this.J = new zu(a, b));
            this.Na = "auto" == this.h;
            this.ya && (c = this.ya, a && (c.s = a), b && (c.C = b));
            this.xa = new Au(this.C, this.P);
            this.O = Du(this);
            (a = this.C instanceof Node ? this.C : null) && Eu(a, this.P)
        };
        var Du = function (a) {
            var b = new Ft(a, a.X);
            Gt(b, a.Sg);
            It(b, (0, _.w)(a.ti, a));
            Jt(b, new ku(a.wb, [].concat(a.C), a.X, a.o, a.s, a.uc));
            return b
        };
        _.Bu.prototype.restore = function () {
            Cu(this);
            this.Ua.restore();
            var a = this.C instanceof Node ? this.C : null;
            a && Eu(a, this.Wa())
        };
        _.Bu.prototype.L = function () {
            _.y.prototype.L.call(this);
            this.restore();
            _.Rd(window, "blur", this.Tg, !0, this);
            _.Rd(window, "focus", this.Ug, !0, this)
        };
        var Fu = function (a, b, c, d) {
            var e = cp(a.j.h),
                f = new Ft(a, b.K);
            b.B.push(f);
            Ht(f, b.T);
            nu(b, e);
            Gt(f, d || a.Og);
            b = c || new vu([], [], b, a.Wa(), a.ga(), a.ba, a.M, a.aa);
            It(f, a.aj, a);
            a.s && Ht(f, b.ta, b);
            Jt(f, b)
        };
        _.h = _.Bu.prototype;
        _.h.aj = function (a, b, c) {
            c.ta();
            this.M ? this.vi(a) : this.ui(a);
            c.j.T()
        };
        _.h.Ug = function () {
            this.T = !1;
            this.W = 0;
            Ep(this.B, this.l)
        };
        _.h.Tg = function (a) {
            a.target == window && (this.T = !0, this.W = 0, Ep(this.B, .01))
        };
        _.h.Si = function (a) {
            if (this.g && this.s) {
                for (var b = 0; b < a.length; b++)
                    if (a[b].target && a[b].target.className && "string" === typeof a[b].target.className && (0 <= a[b].target.className.indexOf("translate") || 0 == a[b].target.className.indexOf("goog-"))) return;
                this.X.add((0, _.w)(this.Sj, this))
            }
        };
        _.h.Sj = function () {
            this.M = !0;
            this.O.stop();
            this.O = Du(this);
            return !1
        };
        _.h.Sg = function (a, b) {
            lu(b, Kt(a));
            Fu(this, b);
            return this.ej
        };
        _.h.ej = function (a, b) {
            if (!this.g) return Mt;
            if (!Lt(a)) return Nt;
            if (!this.s)
                for (a = 0; a < this.K.length; ++a) {
                    var c = (0, _.w)(this.sg, this, b, this.K[a]);
                    b.K.add(c)
                }
            return this.dj
        };
        _.h.Lg = function (a, b) {
            if (this.W && !this.T) {
                a = (new Date).getTime() - this.W;
                var c = this.l;
                900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
                this.l = c;
                this.la ? this.ab = .01 : this.ob = this.l
            }
            this.M = this.g = !0;
            this.W = (new Date).getTime();
            this.wc != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.wc = a, a = !0) : a = !1;
            a ? (this.la = !1, this.l = this.ob, this.T || Ep(this.B, this.l), mu(b, [].concat(this.C), this.B), a = new Ft(this, this.B), Gt(a, this.Sg), It(a, (0, _.w)(this.Cg, this)),
                Jt(a, b), this.O = a) : (this.la = !0, this.l = this.ab, this.T || Ep(this.B, this.l), a = new Ft(this, this.B), Gt(a, this.Lg), It(a, (0, _.w)(this.Cg, this)), Jt(a, b), this.O = a);
            return Mt
        };
        _.h.dj = function (a, b) {
            if (!this.g) return Mt;
            this.M = this.g = !1;
            this.Na ? ou(b, !0) : (ou(b), b.Db(b.l));
            if (this.Ob) return this.Lg;
            for (a = 0; a < b.B.length; ++a) b.B[a].stop();
            for (a = 0; a < b.ta.length; ++a) zp(b.hb, b.ta[a]);
            return Mt
        };
        var Hu = function (a, b, c) {
                a: {
                    var d = Gu(a),
                        e = a.ya,
                        f = a.Sb,
                        g = a.Ua.g;
                    b = Kt(b);
                    if (!c.J) {
                        if (0 == c.V.length) {
                            0 == c.l && 0 == c.X && c.C(0, !0);
                            c = !1;
                            break a
                        }
                        c.J = qu(c, d, e, f, g)
                    }
                    c.la = !0;
                    Qt(c.J, c.j, c.h, b);
                    c = !0
                }
                return c ? a.Og : a.Wd
            },
            Gu = function (a) {
                return a.Ta ? (0, _.w)(a.J.l, a.J) : function () {}
            };
        _.h = _.Bu.prototype;
        _.h.Og = function (a, b) {
            if (!this.g) return Mt;
            var c = b.j;
            if (null == c.g) {
                if (!c.la) return Hu(this, a, b.j);
                if (!Lt(a)) return Nt;
                c.la = !1;
                c.g = c.J.ad || null;
                var d = c.g ? c.g : c.J = null;
                if (!d) return Hu(this, a, b.j);
                this.K.push(d);
                var e = d.wa();
                if (this.j.has(e, !this.s) || null != b.M[e] && b.M[e]) return e = c.g.M, c.l += e, c.j -= e, c.g = null, this.s && su(b, d, !1), Hu(this, a, b.j);
                this.j.g[d.wa()] = null
            }
            0 < ru(b) && Ep(this.B, .5);
            return tu(c, b, cp(this.j.h)) ? this.Wd : Hu(this, a, b.j)
        };
        _.h.Wd = function (a, b) {
            if (!this.g || 0 == ru(b)) return Mt;
            Fu(this, b.j);
            return this.s ? (b.trackVisibility(Kt(a)), this.fj) : 0 == b.translate(a) ? Mt : this.Qg
        };
        _.h.fj = function (a, b) {
            return this.g ? Lt(a) ? 0 == b.translate(a) ? Mt : this.Qg : Nt : Mt
        };
        _.h.sg = function (a, b) {
            b.l && this.j.remove(b.j);
            if (!this.g) return !1;
            if (this.j.has(b.wa(), !1)) {
                var c = this.j;
                if (c.has(b.j, !1)) {
                    var d = b.j,
                        e = c.g[d];
                    e || (e = c.h[d], c.g[d] = e);
                    b.h = e;
                    b.O = !0
                } else c.remove(b.j), b.l = !0;
                At(b)
            } else if (c = this.j, b.l) c.remove(b.j);
            else if (b.B) {
                d = b.B.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
                b.O = !0;
                delete b.B;
                b.B = null;
                b.h = [];
                e = _.ed(document, "div");
                _.O(e, !1);
                d = _.Fk(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
                void 0 !== e.tagName && _.Ai(e);
                e.innerHTML = _.zi(d);
                document.body.appendChild(e);
                d = [];
                var f;
                for (f = e.firstChild; f; f = f.nextSibling)
                    if ("I" == f.tagName) var g = yt(b, _.qd(f), f.innerHTML);
                    else if ("B" == f.tagName) {
                    g || (g = yt(b, "", ""));
                    if (1 == b.g.length) Dt(g.pa, d, 0, f);
                    else {
                        var k = d;
                        var l = f;
                        var m = b.g;
                        g = g.pa;
                        for (var n = [], q = l.firstChild; q; q = r) {
                            var r = q.nextSibling;
                            Et(q)
                        }
                        for (r = l.firstChild; r; r = r.nextSibling) r.attributes && r.attributes.i ? (l = parseInt(r.attributes.i.nodeValue, 10), !isNaN(l) && 0 <= l && l < m.length && (m[l].te && n[l] ? n[l].ha += r.firstChild && 3 == r.firstChild.nodeType ? r.firstChild.nodeValue : _.qd(r) :
                            n[l] = Dt(g, k, l, r))) : 3 == r.nodeType && g.push({
                            fa: -1,
                            ha: Hj(r.nodeValue)
                        });
                        null != g && 0 < g.length && -1 == g[0].fa && (1 == g.length ? g[0].fa = 0 : (g[1].ha = g[0].ha + g[1].ha, g.shift()))
                    }
                    g = void 0
                }
                f = b.h;
                for (k = 0; k < f.length - 1; ++k) m = f[k], g = Cj(m.pa[m.pa.length - 1].ha), g = g.charCodeAt(g.length - 1), 12288 <= g && 12351 >= g || 65280 <= g && 65519 >= g || (m.pa[m.pa.length - 1].ha += " ");
                _.Qj(e);
                for (e = 0; e < b.g.length; ++e) e < d.length && e < b.C.length && null != d[e] && (f = b.C[e], k = d[e].start, null != k && (m = f.substring(0, f.length - Bj(f).length), " " == m && (m = ""), m && (k.ha =
                    m + Bj(k.ha))), k = d[e].end, null != k && (f = f.substring(Cj(f).length), " " == f && (f = ""), f && (k.ha = Cj(k.ha) + f)));
                1 != b.h.length || b.h[0].Hf || (b.h[0].Hf = b.j);
                c.write(b.j, b.h);
                At(b)
            }
            b.J || (this.Na = !1);
            c = b.l ? !0 : void 0;
            a.O += b.M;
            null != c && (a.ba = !0);
            b = Math.min(Math.floor(100 * a.O / a.l), 100);
            if (a.M != b || c) a.M = b, a.W ? (a.C(a.M, !0, c), a.Db(a.O)) : a.C(a.M, !1, c);
            return !1
        };
        _.h.Qg = function (a, b) {
            if (!this.g) return Mt;
            if (!Lt(a)) return Nt;
            if (1 < ru(b)) {
                a = b.l[0];
                var c = b.g;
                if (a.j || 0 == c.length || null == a.g || 0 == a.g.length) a = null;
                else {
                    for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
                        var g = a.g[f];
                        g && g[0] && 200 == g[1] || (e.push(c[f]), d.push(a.o[f]))
                    }
                    a = 0 < e.length ? {
                        Tj: new eu(d, !0),
                        Uj: e
                    } : null
                }
                a = a ? new vu([a.Tj], a.Uj, b.j, b.h, b.P, b.O, b.W, b.s) : null;
                null != a && Fu(this, b.j, a, this.Wd)
            } else {
                a = !1;
                for (c = 0; c < b.l.length; ++c) d = b.l[c], d.j || 200 == d.h && d.g && d.g[0] ? d = d.l = !1 : (d.j = !0, d = d.l = !0), a = d || a;
                if (a) return this.Wd
            }
            d =
                this.Wa();
            a = this.ga();
            if (1 < b.g.length)
                if (c = b.l[0], e = "auto" == d, d = b.g, 200 == c.h)
                    for (f = 0; f < c.g.length && f < d.length; ++f)
                        if ((g = c.g[f]) && 200 == g[1]) {
                            var k = g[2],
                                l = d[f],
                                m = l,
                                n = null != k && k == a;
                            m.B = g[0];
                            void 0 !== n && (m.T = n);
                            l.J = e && null == k
                        } else d[f].l = !0;
            else
                for (a = 0; a < d.length; ++a) d[a].l = !0;
            else {
                c = new du("auto" == d);
                for (d = 0; d < b.l.length; ++d) g = b.l[d], e = a, f = c, 200 == g.h && g.g && g.g[0] ? (g = g.g[0], f.g.push(g[0]), g = g[2], f.h = f.h && null != g && g == e, null != g && (f.l = !1)) : 500 != g.h && (f.j = !0);
                null != b.K && (c.g.push(b.K), b.K = null);
                if (a = b.g[0]) d =
                    c.h, a.B = c.wa(), void 0 !== d && (a.T = d), a.J = c.l, a.l = c.j
            } if (this.s) {
                a = (0, _.w)(this.sg, this);
                for (c = 0; c < b.g.length; c++) a(b.j, b.g[c]);
                for (c = 0; c < b.C.length; c++) a(b.j, b.C[c]);
                xu(b);
                b.T = !0;
                b.J && b.s && b.s.j()
            }
            return Mt
        };
        var Cu = function (a) {
                a.Z && a.Z.disconnect();
                a.aa && a.aa.reset();
                a.g && (a.O.stop(), a.g = !1, a.M = !1);
                if (a.K.length) {
                    for (var b = 0; b < a.K.length; ++b) a.K[b].R();
                    a.K = []
                }
                null != a.J && (a.J.restore(), a.J = null);
                null != a.xa && (a.xa.restore(), a.xa = null)
            },
            Eu = function (a, b) {
                a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
                a.getAttribute("lang") && a.setAttribute("lang", b)
            };
        _.ep.attach(3046, _.Bu.prototype, {
            rj: 1,
            tj: 2,
            sj: 3,
            uj: 4
        });
        var Qi = function (a) {
            if (a && (a = String(a), a = a.split("."), a.length)) {
                for (var b = window, c = 0; c < a.length; ++c) {
                    var d = a[c];
                    if (!(d && d in b)) return;
                    b = b[d]
                }
                return b
            }
        };

        var Iu = function (a) {
            var b = {};
            a = _.$a(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[c.language] = c.name;
            return b
        };
        _.pp = function (a, b) {
            return {
                display_language: b,
                key: "AIzaSyBwiZMnpJaVvcWHlTAcFdNmtrJb_P4aLXc"
            }
        };
        _.qp = function () {
            return !1
        };
        _.rp = function (a) {
            var b = a.targetLanguages || [];
            return {
                sl: Iu(a.sourceLanguages || []),
                tl: Iu(b)
            }
        };

        _.yo = function () {
            return "&ue=boq"
        };

        _.oa();

    } catch (e) {
        _._DumpException(e)
    }
    //========================
    try {
        _.ma("el_main");

        var Ju = function (a, b) {
                function c(l) {
                    for (; d < a.length;) {
                        var m = a.charAt(d++),
                            n = _.Ch[m];
                        if (null != n) return n;
                        if (!/^[\s\xa0]*$/.test(m)) throw Error("aa`" + m);
                    }
                    return l
                }
                _.nh();
                for (var d = 0;;) {
                    var e = c(-1),
                        f = c(0),
                        g = c(64),
                        k = c(64);
                    if (64 === k && -1 === e) break;
                    b(e << 2 | f >> 4);
                    64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
                }
            },
            Ku = null,
            Lu = function () {
                Ku && (_.Sd(Ku), Ku = null);
                _.Ki && _.Ki.length && _.Li(_.Ki.join(""));
                _.Ki = null
            },
            Mu = function () {
                _.Ki && Lu();
                _.Ki = [];
                Ku = _.H(window, "pagehide", function () {
                    Lu()
                })
            },
            Ou = function (a, b) {
                b = Nu(b || {},
                    a.j ? a.j.g() : {});
                a.h(null, b.Fb);
                return b.h()
            },
            Pu = function (a) {
                return a instanceof _.Yh && a.constructor === _.Yh ? a.g : "type_error:SafeStyleSheet"
            },
            Qu = function (a) {
                try {
                    return a.contentWindow || (a.contentDocument ? _.dd(a.contentDocument) : null)
                } catch (b) {}
                return null
            },
            Ru = function () {
                var a = _.up[5];
                return new _.ne(function (b, c) {
                    c(a)
                })
            },
            Su = function (a) {
                if (_.Dh) return _.p.atob(a);
                var b = "";
                Ju(a, function (c) {
                    b += String.fromCharCode(c)
                });
                return b
            },
            Tu = function (a, b) {
                b = Pu(b);
                _.B && void 0 !== a.cssText ? a.cssText = b : _.p.trustedTypes ?
                    _.md(a, b) : a.innerHTML = b
            },
            Uu = function (a, b) {
                b = _.F(b);
                var c = b.U;
                if (_.B && c.createStyleSheet) b = c.createStyleSheet(), Tu(b, a);
                else {
                    c = _.Wi(b.U, "HEAD", void 0, void 0)[0];
                    if (!c) {
                        var d = _.Wi(b.U, "BODY", void 0, void 0)[0];
                        c = b.N("HEAD");
                        d.parentNode.insertBefore(c, d)
                    }
                    d = b.N("STYLE");
                    var e;
                    (e = _.wh('style[nonce],link[rel="stylesheet"][nonce]', void 0)) && d.setAttribute("nonce", e);
                    Tu(d, a);
                    b.appendChild(c, d)
                }
            },
            Vu = function (a) {
                return a instanceof _.If ? !!a.wa() : !!a
            },
            Wu = function (a) {
                return a.replace(/<\//g, "<\\/").replace(/\]\]>/g,
                    "]]\\>")
            },
            Xu = function (a) {
                return _.gl(a, _.Ek) ? a.wa() : a instanceof _.Gb ? _.Sa(a).toString() : "function" == typeof _.Ra && a instanceof _.Ra ? _.wl(_.vi(a)) : "about:invalid#zSoyz"
            },
            Yu = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
            Zu = function (a) {
                _.gl(a, _.Th) ? a = Wu(a.wa()) : null == a ? a = "" : a instanceof _.Gc ? a = Wu(_.oj(a)) :
                    a instanceof _.Yh ? a = Wu(Pu(a)) : (a = String(a), a = Yu.test(a) ? a : "zSoyz");
                return a
            },
            $u, av = function (a, b) {
                if ((_.B || _.cc) && window.location.hostname != document.domain) {
                    $u = $u ? $u + 1 : 1;
                    var c = "f" + $u + "_" + _.vb().toString(36);
                    window[c] = function () {
                        window[c] = void 0;
                        a.src = "javascript:void(0)";
                        b && window.setTimeout(function () {
                            b()
                        }, 0)
                    };
                    a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" + c + "']();\x3c/script>\"))"
                } else b && b()
            },
            bv = function (a, b) {
                return "auto" != a && "zh-CN" != a && a == b
            },
            cv =
            function () {
                var a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/);
                return a && a[1] ? a[1] : null
            },
            dv = function () {};
        dv.prototype.h = function () {};
        var ev = function (a) {
                a = a.split(".");
                if (3 !== a.length) return !1;
                a = JSON.parse(Su(a[1]));
                return null == a || !a.exp || 1E3 * a.exp < _.vb() ? !1 : !0
            },
            fv = function (a) {
                this.g = a
            };
        _.u(fv, dv);
        fv.prototype.h = function () {
            return ev(this.g) ? _.Ah(this.g) : Ru()
        };
        var gv = function (a) {
            this.g = null;
            this.j = a
        };
        _.u(gv, dv);
        gv.prototype.h = function () {
            if (null != this.g && ev(this.g)) return _.Ah(this.g);
            this.g = null;
            return new _.ne(function (a, b) {
                var c = this;
                this.j(function (d) {
                    c.g = d;
                    ev(c.g) ? a(d) : b(_.up[5])
                }, b)
            }, this)
        };
        var hv = function (a) {
                return (0, _.bi)('<span id="' + _.P(a.id) + '"></span>')
            },
            iv = function (a) {
                var b = a.id,
                    c = a.qh;
                return (0, _.bi)(_.sl(a.rh) + '<div id="' + _.P(b) + '"></div>' + _.sl(c))
            },
            Nu = function (a) {
                var b = a.id,
                    c = a.top,
                    d = a.left,
                    e = a.bottom,
                    f = a.right;
                return (0, _.ci)("." + Zu(a.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (Vu(c) || _.il(c, 0) ? "top:" + Zu(c) + "px; _top:expression((" + Zu(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (Vu(d) ||
                    _.il(d, 0) ? "left:" + Zu(d) + "px; _left:expression((" + Zu(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (Vu(e) || _.il(e, 0) ? "bottom:" + Zu(e) + "px; _top:expression((-" + Zu(e) + "-document.getElementById('" + String(b).replace(_.ul, _.ol) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (Vu(f) || _.il(f, 0) ? "right:" + Zu(f) + "px; _left:expression((-" +
                    Zu(f) + "-document.getElementById('" + String(b).replace(_.ul, _.ol) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}")
            },
            jv = function () {
                return (0, _.bi)('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
            },
            kv = function () {
                _.M.call(this)
            };
        _.u(kv, _.M);
        kv.prototype.N = function () {
            this.da(_.Gi(jv))
        };
        kv.prototype.da = function (a) {
            this.I = a
        };
        var lv = function (a) {
                _.Gl(a.A(), "goog-te-spinner-pos-show");
                _.Gl(a.A().firstChild, "goog-te-spinner-animation-show")
            },
            mv = function () {
                this.g = new kv;
                this.g.N();
                this.g.ja();
                this.h = 0
            };
        mv.prototype.reset = function () {
            this.h = 0;
            lv(this.g)
        };
        mv.prototype.l = function () {
            if (0 == this.h++) {
                var a = this.g;
                _.R(a.A(), "goog-te-spinner-pos-show");
                _.R(a.A().firstChild, "goog-te-spinner-animation-show")
            }
        };
        mv.prototype.j = function () {
            0 == --this.h && lv(this.g)
        };
        var nv = function (a, b, c, d, e, f, g, k, l, m, n) {
            _.y.call(this);
            this.ya = b || null;
            this.T = !!c;
            this.vc = d || "transparent";
            this.K = f || "";
            b = g || {
                fetchStart: 0,
                vl: 0
            };
            a = b.fetchStart || 0;
            b = b.fetchEnd || 0;
            this.M = a && b ? b - a : 0;
            this.O = Date.now() - _.Co;
            this.o = !1;
            this.g = new _.wp(e || "", void 0, f, l, m, n);
            this.J = new _.Fp(1);
            this.s = new _.Ct;
            this.j = null;
            this.C = !0;
            this.l = null != _.p.IntersectionObserver;
            this.B = k || null;
            this.H = new _.J(this);
            e = new _.So;
            f = new _.Uo((0, _.w)(this.g.initialize, this.g, e.register()));
            this.Cd = _.Vo(f, e.delay((0, _.w)(this.Cd,
                this)));
            this.Bd = _.Vo(f, e.delay((0, _.w)(this.Bd, this)));
            this.Dd = _.Vo(f, e.delay((0, _.w)(this.Dd, this)));
            this.restore = _.Vo(f, e.delay((0, _.w)(this.restore, this)));
            f.finish();
            e.finish()
        };
        _.x(nv, _.y);
        _.ep.attach(14097, nv.prototype, {
            wf: function () {
                _.Li(this.g.h ? "te_afas" : "te_afau")
            }
        });
        _.h = nv.prototype;
        _.h.Wj = function (a) {
            this.l = a
        };
        _.h.Ka = function () {
            return this.g.h
        };
        _.h.Cd = function (a, b) {
            if (this.g.Ka()) {
                var c = this.g,
                    d = {
                        alpha: !0
                    };
                d = _.pp(d, b);
                c.l.send(d, a)
            } else this.wf(), a(null)
        };
        _.h.Bd = function (a) {
            var b = document.documentElement.lang;
            if (b) a(b);
            else if (this.g.Ka()) {
                b = new _.Cn(document.body, !1, !1, 1, 1);
                for (var c = [], d = 0, e = this.g.j.zf; c.length + d < e;) {
                    var f = b.next();
                    if (f.done) break;
                    f = f.value;
                    1 == b.g && _.$t(f) ? b.Mb() : 3 == f.nodeType && (f = (0, _.Xb)(_.zj(f.nodeValue))) && (c.push(f), d += f.length)
                }
                _.xp(this.g, a, c.join(" "))
            } else this.wf(), a(null, !0)
        };
        _.h.Dd = function (a, b, c, d, e) {
            var f = Date.now();
            Mu();
            if (!a || bv(a, b)) a = "auto";
            if (e || a != this.h || b != this.P) this.s = new _.Ct;
            this.h = a;
            this.P = b;
            this.g.Ka() ? (d = d || document.documentElement, this.j && this.j.R(), this.B.reset(), this.j = new _.Bu(d, this.g, this.ya, this.T, this.vc, !0, this.J, this.s, this.l, this.B), this.j.ba = this.o, this.C = !0, this.j.translate(a, b, c, e, (0, _.w)(this.xj, this, f, a, b))) : (this.wf(), c(0, !1, !0))
        };
        _.h.Rh = function () {
            return !!this.j && this.j.g
        };
        _.h.lg = function (a) {
            this.o = a
        };
        _.h.restore = function () {
            Mu();
            this.g.Ka() && this.j && this.j.restore()
        };
        _.h.L = function () {
            Lu();
            nv.G.L.call(this);
            this.g.R();
            this.j = this.g = null;
            this.s = new _.Ct
        };
        _.h.xj = function (a, b, c, d) {
            this.C && (this.C = !1, b = {
                sl: b,
                tl: c,
                textlen: d
            }, this.o && (b.ctt = "1"), "" != this.K && (b.sp = this.K), b.ttt = Date.now() - a, b.ttl = this.O, this.M && (b.ttf = this.M), this.l && (b.sr = 1), _.Li("te_time", b))
        };
        var ov = function (a) {
            _.M.call(this, a);
            this.H = new _.J(this)
        };
        _.u(ov, _.M);
        ov.prototype.N = function () {
            var a = _.th(this.g, "select");
            a.className = "goog-te-combo";
            a.setAttribute("aria-label", _.X.mg);
            this.da(a)
        };
        ov.prototype.Y = function () {
            _.M.prototype.Y.call(this);
            this.Ag()
        };
        ov.prototype.Ag = function () {
            _.H(this.A(), "change", _.Yo(this, "change"));
            this.dispatchEvent("load")
        };
        ov.prototype.ca = function () {
            _.M.prototype.ca.call(this);
            this.H.R();
            this.H = null
        };
        var pv = function (a, b) {
            a.A().parentNode != b && (a.A().parentNode.removeChild(a.A()), b.appendChild(a.A()))
        };
        _.h = ov.prototype;
        _.h.od = function (a) {
            this.g.ld(this.A());
            for (var b in a)
                if (a[b] !== Object.prototype[b]) {
                    var c = this.g.N("OPTION", {
                        value: b
                    });
                    this.g.nb(c, a[b]);
                    this.A().appendChild(c)
                }
            this.A().selectedIndex = 0
        };
        _.h.Qa = function () {
            return this.A().value
        };
        _.h.Ma = function (a) {
            if (this.A().value != a)
                for (var b = 0, c; c = this.A().options.item(b); ++b)
                    if (c.value == a) {
                        this.A().selectedIndex = b;
                        break
                    }
        };
        _.h.Ed = function (a) {
            if ("undefined" == _.ob(a)) return this.A().options.item(this.A().selectedIndex).text;
            for (var b = 0, c; c = this.A().options.item(b); ++b)
                if (c.value == a) return c.text
        };
        _.h.qa = function (a) {
            this.A().disabled = !a
        };
        var qv = function (a) {
            ov.call(this, a)
        };
        _.u(qv, ov);
        qv.prototype.pd = function (a) {
            this.od.call(this, a)
        };
        var rv = function (a, b) {
            ov.call(this, b);
            this.F = a && _.mi(a) || {};
            this.F.Of = this.F.Of || 11;
            this.F.qe = 0 != this.F.qe;
            this.F.rb || (this.F.rb = _.No)
        };
        _.u(rv, ov);
        _.h = rv.prototype;
        _.h.Od = function () {
            throw Error("Ea");
        };
        _.h.N = function () {
            this.Od();
            this.s = this.A();
            this.j = _.Kj("IFRAME", {
                frameBorder: 0,
                "class": "goog-te-menu-frame skiptranslate",
                title: _.X.mg
            });
            this.j.style.visibility = "visible";
            _.O(this.j, !1);
            document.body.appendChild(this.j)
        };
        _.h.Ag = function () {
            var a = _.Eb.test(_.W) ? "rtl" : "ltr",
                b = _.ag(this.F.rb),
                c = _.T(this, "menuBody");
            this.H.D(this.j, "load", this.Sh);
            av(this.j, (0, _.w)(function () {
                var d = _.Wj(this.j);
                var e = (0, _.bi)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.P(Xu(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + _.P(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + _.P(c) + '" class="goog-te-menu"></div></body>');
                e = _.Bi(e);
                d.write(_.zi(e));
                d.close()
            }, this))
        };
        _.h.Sh = function () {
            this.h = new _.Yc(_.Wj(this.j));
            this.O = this.h.A(_.T(this, "menuBody"));
            this.H.D(this.s, "click", this.jf);
            _.B ? this.H.D(this.j, "blur", this.Vd) : this.H.D(Qu(this.j), "blur", this.Vd);
            this.dispatchEvent("load")
        };
        _.h.ca = function () {
            ov.prototype.ca.call(this);
            _.Qj(this.j);
            this.s = this.X = this.o = this.O = this.h = this.j = null
        };
        _.h.Pg = function (a) {
            this.l != a.currentTarget.value && (this.Ma(a.currentTarget.value), this.dispatchEvent("change"));
            this.Vd()
        };

        _.h.Auto = function (a) {
            a.Ma("zh-CN");
            a.dispatchEvent("change")
        };

        _.h.jf = function () {
            sv(this);
            Qu(this.j).focus();
            this.aa = !0
        };
        _.h.Vd = function () {
            this.aa && (this.aa = !1, sv(this, !1), _.dd(_.E(this.s)).focus())
        };
        _.h.Lf = function () {};
        _.h.Mf = function () {};
        var sv = function (a, b) {
            if ("undefined" == typeof b || b) {
                a.Mf();
                b = _.Uk(a.s, window);
                var c = b.y + a.s.offsetHeight,
                    d = b.y - a.B.height,
                    e = b.x,
                    f = b.x + a.s.offsetWidth - a.B.width;
                if (_.B && !_.vc("7.0")) {
                    var g = document.body;
                    c -= g.offsetTop;
                    d -= g.offsetTop;
                    e -= g.offsetLeft;
                    f -= g.offsetLeft
                } else g = _.Zi(document), c -= g.y, d -= g.y, e -= g.x, f -= g.x;
                g = _.cd(window);
                b.y = b.y <= g.height - a.B.height ? c : d;
                b.y > g.height - a.B.height && (b.y = g.height - a.B.height);
                0 > b.y && (b.y = 0);
                _.Eb.test(_.W) ? b.x = 0 <= f ? f : e : b.x = e <= g.width - a.B.width ? e : f;
                b.x > g.width - a.B.width &&
                    (b.x = g.width - a.B.width);
                0 > b.x && (b.x = 0);
                _.Nk(a.j, b);
                _.O(a.j, !0);
                tv(a)
            } else a.Lf(), _.O(a.j, !1)
        };
        _.h = rv.prototype;
        _.h.Qa = function () {
            return this.l
        };
        _.h.od = function (a) {
            this.h.ld(this.O);
            _.O(this.j, !0);
            this.ba = a;
            
            this.o = [];
            for (var b in a)
                if (a[b] !== Object.prototype[b])
                    if ("---" == a[b]) {
                        var c = {
                            link: this.h.N("DIV", {
                                className: "goog-te-menu2-separator",
                                value: b
                            }),
                            lj: !0
                        };
                        this.o.push(c)
                    } else {
                        c = {
                            link: this.h.N("A", {
                                className: "goog-te-menu2-item-selected",
                                href: "javascript:void(0)",
                                value: b
                            })
                        };
                        this.o.push(c);
                        var d = this.h.N("DIV", {
                            style: "white-space:nowrap"
                        });
                        this.h.appendChild(c.link, d);
                        this.F.qe && this.h.appendChild(d, this.h.N("SPAN", {
                            className: "indicator"
                        }, "\u203a"));
                        this.h.appendChild(d, this.h.N("SPAN", {
                            className: "text"
                        }, a[b]));
                        this.H.D(c.link, "click", this.Pg)
                    }
            a = this.o.length - 1;
            a = Math.round((a - a % this.F.Of) / this.F.Of) + 1;
            this.X = this.h.N("TABLE", {
                cellspacing: 0,
                cellpadding: 0,
                border: 0
            });
            c = this.h.N("TBODY");
            b = this.h.N("TR", {
                valign: "top"
            });
            this.O.className = "goog-te-menu2";
            this.h.appendChild(this.O, this.X);
            this.h.appendChild(this.X, c);
            this.h.appendChild(c, b);
            for (d = c = 0; c < a; ++c) {
                var e = this.h.N("TD");
                this.h.appendChild(b, e);
                for (var f = 0; 11 > f && d < this.o.length; ++f, ++d) this.h.appendChild(e,
                    this.o[d].link);
                c != a - 1 && (e = this.h.N("TD", {
                    "class": "goog-te-menu2-colpad"
                }, "\u00a0"), this.h.appendChild(b, e))
            }
            this.l = null;
            this.Ma(this.o[0].link.value);
            tv(this);
            _.O(this.j, !1)

            // _.wb("google.translate.firstTranslateObject", this);
            window.firstTranslateObject = this;
        };
        _.h.Ed = function (a) {
            return this.ba["undefined" == _.ob(a) ? this.l : a]
        };
        _.h.Nf = function () {};
        _.h.Ma = function (a) {
            if (this.l != a) {
                this.Ed(a) && (this.l = a, this.Nf());
                for (var b = 0; b < this.o.length; ++b) {
                    var c = this.o[b];
                    c.lj || (c.link.className = c.link.value == a && this.F.qe ? "goog-te-menu2-item-selected" : "goog-te-menu2-item")
                }
            }
        };
        var tv = function (a) {
                _.fl(a.O, _.Yk(a.X));
                _.fl(a.j, _.Yk(a.O));
                a.B = _.Yk(a.j)
            },
            uv = function (a, b) {
                rv.call(this, a, b)
            };
        _.u(uv, rv);
        _.h = uv.prototype;
        _.h.Od = function () {
            var a = this.g.N("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.J = this.g.N("SPAN");
            a.appendChild(this.J);
            this.V = this.g.N("IMG", {
                src: "https://www.google.cn/images/cleardot.gif",
                alt: "",
                style: "background-image:url(" + _.Jo + ");background-position:-14px 0px;border:none",
                width: 14,
                height: 14
            });
            a.appendChild(this.V);
            this.da(a)
        };
        _.h.Lf = function () {
            _.L(this.V, "backgroundPosition", "-14px 0px")
        };
        _.h.Mf = function () {
            _.L(this.V, "backgroundPosition", "0px 0px")
        };
        _.h.ca = function () {
            rv.prototype.ca.call(this);
            this.V = this.J = null
        };
        _.h.Nf = function () {
            this.g.nb(this.J, this.Ed(this.l) || "")
        };
        _.h.pd = function (a) {
            this.od.call(this, a)
        };
        var vv = function (a, b) {
            rv.call(this, a, b)
        };
        _.u(vv, rv);
        _.h = vv.prototype;
        _.h.Od = function () {
            var a = this.g.N("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.J = this.g.N("SPAN");
            a.appendChild(this.J);
            a.appendChild(this.g.N("IMG", {
                src: "https://www.google.cn/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            a.appendChild(this.g.N("SPAN", {
                style: "border-left:1px solid #bbb"
            }, "\u200b"));
            a.appendChild(this.g.N("IMG", {
                src: "https://www.google.cn/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            this.V = this.g.N("span", {
                style: "color:#767676",
                "aria-hidden": "true"
            }, "\u25bc");
            a.appendChild(this.V);
            this.da(a)
        };
        _.h.Lf = function () {
            _.L(this.V, "color", "#9b9b9b")
        };
        _.h.Mf = function () {
            _.L(this.V, "color", "#d5d5d5")
        };
        _.h.ca = function () {
            rv.prototype.ca.call(this);
            this.V = this.J = null
        };
        _.h.Nf = function () {
            this.g.nb(this.J, this.Ed(this.l) || "")
        };
        _.h.pd = function (a) {
            this.od.call(this, a)
        };
        var wv = function (a, b) {
            rv.call(this, a, b);
            this.F.qe = !1
        };
        _.u(wv, rv);
        wv.prototype.Od = function () {
            var a = _.th(this.g, "div");
            a.className = "goog-te-button";
            var b = this.g.N("DIV", {
                style: "background: url(" + _.Io + ") repeat-x 0 -39px"
            });
            a.appendChild(b);
            this.J = _.th(this.g, "button");
            b.appendChild(this.J);
            this.da(a)
        };
        wv.prototype.wh = function (a) {
            _.hd(this.J);
            this.J.appendChild(this.g.U.createTextNode(String(a + "\u00a0\u25bc")))
        };
        wv.prototype.ca = function () {
            rv.prototype.ca.call(this);
            this.J = null
        };
        wv.prototype.Pg = function (a) {
            this.Ma(a.currentTarget.value);
            this.dispatchEvent("change");
            this.Vd()
        };


        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var xv = function () {
            this.h = {};
            this.g = 0
        };
        xv.prototype.j = function (a, b) {
            a = this.h[b];
            if (!a) return b;
            b = "";
            a.Yf && (b += "<" + a.Yf + a.attributes + ">");
            a.pf && (b += a.pf);
            a.Ye && (b += "</" + a.Ye + ">");
            return b
        };
        xv.prototype.Yf = function (a, b) {
            _.rj(a);
            return yv(this, {
                Yf: a,
                attributes: _.vj(b)
            })
        };
        xv.prototype.Ye = function (a) {
            _.rj(a);
            return yv(this, {
                Ye: a
            })
        };
        xv.prototype.text = function (a) {
            return yv(this, {
                pf: _.Dj(a)
            })
        };
        var yv = function (a, b) {
            a.g++;
            var c = "{SafeHtmlFormatter:" + a.g + "_" + _.Xc() + "}";
            a.h[_.Dj(c)] = b;
            return c
        };
        var zv = function (a, b) {
            _.M.call(this, b);
            this.F = a && _.mi(a) || {};
            this.H = new _.J(this)
        };
        _.x(zv, _.M);
        var Av = {
            ll: 0,
            Hk: 1,
            al: 2
        };
        _.h = zv.prototype;
        _.h.N = function () {
            var a = _.th(this.g, "div");
            _.R(a, "skiptranslate");
            _.R(a, "goog-te-gadget");
            a.dir = _.Eb.test(_.W) ? "rtl" : "ltr";
            _.O(a, !1);
            if (2 == this.F.lc) {
                var b = iv({
                    id: _.T(this, "targetLanguage"),
                    rh: "",
                    qh: ""
                });
                _.Fi(a, _.Di(b))
            } else {
                b = new xv;
                var c = _.ls({
                        Zg: _.B && !_.vc("7.0"),
                        ge: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
                        gh: "https://translate.google.com"
                    }),
                    d = _.X,
                    e = d.ng;
                c = _.Bi(c);
                c = yv(b, {
                    pf: _.Nc(c).toString()
                });
                d = e.call(d, c);
                e = _.Dj("SafeHtmlFormatter:");
                b = _.Dj(d).replace(new RegExp("\\{" +
                    e + "[\\w&#;]+\\}", "g"), (0, _.w)(b.j, b, []));
                b = _.Oc(b, null);
                b = iv({
                    id: _.T(this, "targetLanguage"),
                    rh: "",
                    qh: 1 == this.F.lc ? _.tj("\u00a0", "\u00a0", b) : b
                });
                _.Fi(a, _.Di(b))
            }
            this.da(a)
        };
        _.h.Y = function () {
            zv.G.Y.call(this);
            this.j = 2 == this.F.lc ? new vv(null, this.g) : new qv(this.g);
            this.H.D(this.j, "change", _.Yo(this, "chg_tgt_lang"));
            this.H.D(this.j, "load", this.Th);
            var a = this.g.A(_.T(this, "targetLanguage"));
            if (2 == this.F.lc) {
                var b = this.g.N("IMG", {
                    src: "https://www.google.cn/images/cleardot.gif",
                    "class": "goog-te-gadget-icon",
                    alt: ""
                });
                b.style.backgroundImage = "url(" + _.Jo + ")";
                b.style.backgroundPosition = "-65px 0px";
                var c = this.g.N("SPAN", {
                    style: "vertical-align: middle"
                });
                a.appendChild(b);
                a.appendChild(c);
                this.j.ja(c);
                a.style.whiteSpace = "nowrap";
                a.className = "goog-te-gadget-simple"
            } else this.j.ja(a), 1 == this.F.lc && (a.style.display = "inline")
        };
        _.h.Th = function () {
            if (2 == this.F.lc) {
                var a = this.j,
                    b = this.g.A(_.T(this, "targetLanguage"));
                a.H.sa(a.s, "click", a.jf);
                a.s = b;
                a.H.D(a.s, "click", a.jf)
            }
            this.dispatchEvent("load")
        };
        _.h.ca = function () {
            zv.G.ca.call(this);
            this.H.R();
            this.H = null;
            this.j.R();
            this.j = null
        };
        _.h.ga = function () {
            return this.j.Qa()
        };
        _.h.zb = function (a) {
            this.j.pd(a)
        };
        _.h.oa = function (a) {
            "" == a ? this.J && this.zb(this.J) : this.B && this.zb(this.B);
            this.j.Ma(a)
        };
        _.h.S = function (a) {
            _.O(this.A(), a)
        };
        _.h.qa = function (a) {
            this.j.qa(a)
        };
        _.h.Wf = function (a, b) {
            this.J = a;
            this.B = b
        };
        var Bv = function (a, b) {
            _.M.call(this, b);
            this.F = a && _.mi(a) || {};
            this.F.rb || (this.F.rb = _.No);
            this.H = new _.J(this)
        };
        _.x(Bv, _.M);
        var Cv = {
            fl: 1,
            gl: 2,
            rk: 3,
            qk: 4
        };
        _.h = Bv.prototype;
        _.h.N = function () {
            var a = _.th(this.g, "div");
            this.za = !1;
            _.O(a, !1);
            var b = _.T(this, "container");
            b = (0, _.bi)('<iframe id="' + _.P(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
            _.Fi(a, _.Di(b));
            this.da(a)
        };
        _.h.Y = function () {
            Bv.G.Y.call(this);
            var a = _.Eb.test(_.W) ? "rtl" : "ltr",
                b = _.ag(this.F.rb),
                c = _.T(this, "translate");
            this.A().id = _.T(this, "floatContainer");
            var d = {
                id: this.A().id,
                className: "goog-te-ftab-float"
            };
            this.A().className += " goog-te-ftab-float";
            switch (this.F.Rd) {
            case 2:
                var e = "goog-float-top";
                d.top = 0;
                d.right = 20;
                break;
            case 3:
                e = "goog-float-bottom";
                d.bottom = 0;
                d.right = 20;
                break;
            case 4:
                e = "goog-float-bottom";
                d.bottom = 0;
                d.left = 20;
                break;
            default:
                e = "goog-float-top", d.top = 0, d.left = 20
            }
            Uu(Ou(new _.Hf, d), this.A());
            this.o = this.g.A(_.T(this, "container"));
            this.H.D(this.o, "load", this.Uh);
            av(this.o, (0, _.w)(function () {
                var f = _.Wj(this.o);
                var g = e;
                var k = _.X.Ie;
                g = (0, _.bi)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.P(Xu(b)) + '"></head><body class="goog-te-ftab ' + _.P(g) + '" scroll="no" style="overflow:hidden" dir="' + _.P(a) + '"><a id="' + _.P(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + _.P(_.Al("https://www.google.cn/images/cleardot.gif")) +
                    '" style="background-image:url(' + _.P(_.Al(_.Jo)) + ');background-position:-65px 0px"><span>' + _.sl(k) + "</span></a></body>");
                g = _.Bi(g);
                f.write(_.zi(g));
                f.close()
            }, this))
        };
        _.h.Uh = function () {
            this.h = (new _.Yc(_.Wj(this.o))).A(_.T(this, "translate"));
            this.H.D(this.h, "click", _.Yo(this, "clk_trans"));
            _.O(this.A(), !0);
            var a = _.Yk(this.h);
            _.O(this.A(), !1);
            _.fl(this.o, a);
            _.fl(this.A(), a);
            this.dispatchEvent("load")
        };
        _.h.ca = function () {
            Bv.G.ca.call(this);
            this.H.R();
            this.H = null;
            _.Qj(this.o);
            this.h = this.o = null
        };
        _.h.isVisible = function () {
            return this.za
        };
        _.h.S = function (a) {
            this.za = a;
            _.O(this.A(), a)
        };
        var Dv = function (a, b) {
            _.M.call(this, b);
            this.H = new _.J(this);
            this.F = a && _.mi(a) || {};
            this.F.rb || (this.F.rb = _.No);
            this.F.Xf = !1;
            _.L(this.g.U.body, "position", "relative");
            _.Xg || _.L(this.g.U.body, "minHeight", "100%");
            _.L(this.g.U.documentElement, "height", "100%");
            _.L(this.g.U.body, "top", "0px");
            _.B && (window._bannerquirkfixleft = -parseInt("0" + this.g.U.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.g.U.body.topMargin, 10) - 40)
        };
        _.x(Dv, _.M);
        _.h = Dv.prototype;
        _.h.ja = function () {
            var a = this.g.U.body.firstChild;
            _.mm(this, a.parentNode, a)
        };
        _.h.N = function () {
            var a = _.th(this.g, "div");
            this.za = !1;
            _.O(a, !1);
            _.R(a, "skiptranslate");
            var b = _.T(this, "container");
            b = (0, _.bi)('<iframe id="' + _.P(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
            _.Fi(a, _.Di(b));
            this.da(a)
        };
        _.h.Y = function () {
            Dv.G.Y.call(this);
            var a = _.Eb.test(_.W) ? "rtl" : "ltr",
                b = _.ag(this.F.rb),
                c = _.T(this, "promptSection"),
                d = _.T(this, "confirm"),
                e = _.T(this, "progressSection"),
                f = _.T(this, "progressValue"),
                g = _.T(this, "cancel"),
                k = _.T(this, "finishSection"),
                l = _.T(this, "restore"),
                m = _.T(this, "errorSection"),
                n = _.T(this, "errorContent"),
                q = _.T(this, "close"),
                r = _.T(this, "noAutoPopup"),
                z, G = [];
            this.F.Xf && G.push(hv({
                id: _.T(this, "promptSourceLang")
            }));
            G.push(hv({
                id: _.T(this, "promptTargetLang")
            }));
            var Q = _.Fk(_.X.li.apply(null,
                G));
            G = [];
            this.F.Xf && G.push(hv({
                id: _.T(this, "finishSourceLang")
            }));
            G.push(hv({
                id: _.T(this, "finishTargetLang")
            }));
            var vd = _.Fk(_.X.fi.apply(null, G));
            this.F.Dh && (z = this.F.Dh);
            this.o = this.g.A(_.T(this, "container"));
            this.H.D(this.o, "load", this.Vh);
            av(this.o, (0, _.w)(function () {
                var mc = _.Wj(this.o);
                var rb = z;
                var lf = _.X.Tc,
                    ax = _.X.Ie,
                    bx = _.X.hi,
                    cx = _.X.ue,
                    dx = _.X.og,
                    ex = _.X.cg,
                    fx = _.X.cg;
                rb = (0, _.bi)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
                    _.P(Xu(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + _.P(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + _.P(_.yl("https://translate.google.com")) + '" class="goog-logo-link" target="_blank"><img src="' + _.P(_.Al("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) + '" alt="Google ' + _.P(lf) + '"></a></td>' + (rb ? '<td width=1><img src="' + _.P(_.Al("https://www.google.cn/images/cleardot.gif")) +
                        '" width="9" height="15" title="' + _.P(rb) + '" alt="' + _.P(rb) + '" style="background-image:url(' + _.P(_.Al(_.Jo)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + _.P(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + _.sl(Q) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(d) + '"><b>' +
                    _.sl(ax) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(r) + '"></button></div></div></td></tr><tr id="' + _.P(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + _.sl(bx) + '&nbsp;<span dir="ltr">(<b id="' + _.P(f) + '"></b>%)</span>&nbsp;<img src="' + _.P(_.Al(_.Lo)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(g) + '">' + _.sl(cx) +
                    '</button></div></div></td></tr><tr id="' + _.P(k) + '" style="display:none"><td><span class="goog-te-banner-content">' + _.sl(vd) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.P(l) + '">' + _.sl(dx) + '</button></div></div></td></tr><tr id="' + _.P(m) + '" style="display:none" valign=middle><td><span id="' + _.P(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' +
                    _.P(q) + '" class="goog-close-link" href="javascript:void(0)" title="' + _.P(ex) + '"><img src="' + _.P(_.Al("https://www.google.cn/images/cleardot.gif")) + '" width="15" height="15" alt="' + _.P(fx) + '" style="background-image:url(' + _.P(_.Al(_.Jo)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
                rb = _.Bi(rb);
                mc.write(_.zi(rb));
                mc.close()
            }, this))
        };
        _.h.Vh = function () {
            this.h = new _.Yc(_.Wj(this.o));
            Ev(this, _.X.dg);
            if (this.F.rb == _.No) {
                var a = "url(" + _.Io + ")";
                _.L(this.h.U.body, "backgroundImage", a);
                for (var b = this.h.U.getElementsByTagName("button"), c = 0; c < b.length; ++c) {
                    var d = b[c].parentNode;
                    _.L(d, "backgroundImage", a);
                    _.L(d, "backgroundRepeat", "repeat-x");
                    _.L(d, "backgroundPosition", "0 -39px")
                }
            }
            this.F.Xf && (this.l = new uv(this.F, this.h));
            this.j = new uv(this.F, this.h);
            this.s = new wv(this.F, this.h);
            this.H.D(this.h.A(_.T(this, "confirm")), "click", _.Yo(this, "clk_confirm"));
            this.H.D(this.h.A(_.T(this, "cancel")), "click", _.Yo(this, "clk_cancel"));
            this.H.D(this.h.A(_.T(this, "restore")), "click", _.Yo(this, "clk_restore"));
            this.H.D(this.h.A(_.T(this, "close")), "click", _.Yo(this, "clk_close"));
            this.O = this.h.A(_.T(this, "noAutoPopup"));
            this.H.D(this.O, "click", _.Yo(this, "clk_no_ap"));
            this.l && this.H.D(this.l, "change", _.Yo(this, "chg_src_lang"));
            this.H.D(this.j, "change", _.Yo(this, "chg_tgt_lang"));
            this.H.D(this.s, "change", this.Ui);
            a = new _.So((0, _.w)(this.Wh, this));
            this.l && this.H.D(this.l,
                "load", a.register());
            this.H.D(this.j, "load", a.register());
            this.H.D(this.s, "load", a.register());
            a.finish();
            this.l && this.l.ja(this.h.A(_.T(this, "promptSourceLang")));
            this.j.ja(this.h.A(_.T(this, "promptTargetLang")));
            this.s.ja(this.h.A("options"))
        };
        _.h.Wh = function () {
            this.s.wh(_.X.$h);
            this.s.od({
                turn_off_site: _.X.ji,
                s1: "---",
                learn_more: _.X.Zh
            });
            this.dispatchEvent("load")
        };
        _.h.Ui = function () {
            switch (this.s.Qa()) {
            case "learn_more":
                window.open(_.Qo, "_blank");
                break;
            case "turn_off_site":
                this.dispatchEvent("clk_no_ap_site")
            }
        };
        _.h.ca = function () {
            this.S(!1);
            Dv.G.ca.call(this);
            this.H.R();
            this.H = null;
            this.l && (this.l.R(), this.l = null);
            this.j.R();
            this.j = null;
            this.s.R();
            this.s = null;
            _.Qj(this.o);
            this.$c = this.h = null
        };
        _.h.Wa = function () {
            return this.l ? this.l.Qa() : ""
        };
        _.h.ga = function () {
            return this.j.Qa()
        };
        _.h.zb = function (a) {
            this.j.pd(a)
        };
        _.h.Lb = function (a) {
            this.l && this.l.Ma(a);
            this.V && this.V[a] && this.h.nb(this.O, _.X.ii(this.V[a]))
        };
        _.h.oa = function (a) {
            this.j.Ma(a)
        };
        var Fv = function (a, b, c, d) {
            if (a.$c != b) {
                a.$c = b;
                if (0 == b) {
                    a.l && pv(a.l, a.h.A(_.T(a, "promptSourceLang")));
                    if (a.J) {
                        var e = a.ga();
                        a.zb(a.J);
                        a.oa(e)
                    }
                    pv(a.j, a.h.A(_.T(a, "promptTargetLang")))
                } else 2 == b && (a.l && pv(a.l, a.h.A(_.T(a, "finishSourceLang"))), a.B && (e = a.ga(), a.zb(a.B), a.oa(e)), pv(a.j, a.h.A(_.T(a, "finishTargetLang"))));
                e = {};
                e[-1] = a.h.A(_.T(a, "errorSection"));
                e[0] = a.h.A(_.T(a, "promptSection"));
                e[1] = a.h.A(_.T(a, "progressSection"));
                e[2] = a.h.A(_.T(a, "finishSection"));
                for (var f in e) e[f] !== Object.prototype[f] &&
                    _.O(e[f], f == b)
            }
            c && a.S(!0);
            a.O.parentNode.parentNode.style.display = d ? "block" : "none"
        };
        Dv.prototype.isVisible = function () {
            return this.za
        };
        Dv.prototype.S = function (a) {
            // if (this.za != a) {
            //     this.za = a;
            //     if (_.B) var b = parseInt("0" + this.g.U.body.leftMargin, 10),
            //         c = parseInt("0" + this.g.U.body.topMargin, 10);
            //     var d = "BackCompat" == this.g.U.compatMode;
            //     a ? (_.L(this.g.U.body, "top", "40px"), _.O(this.A(), !0), _.B && (_.vc("7.0") ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.g.U.body.topMargin = c + 40)) : d ? (this.g.U.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) :
            //         (_.L(this.g.U.body, "top", "0px"), _.O(this.A(), !1), d && 40 <= c && (this.g.U.body.topMargin = c - 40))
            // }
        };
        Dv.prototype.Uf = function (a) {
            this.h.nb(this.h.A(_.T(this, "progressValue")), a)
        };
        var Ev = function (a, b) {
            a.h.nb(a.h.A(_.T(a, "errorContent")), b)
        };
        Dv.prototype.Wf = function (a, b) {
            this.J = a;
            this.B = b;
            this.zb(a)
        };
        var Gv = function (a, b) {
            _.y.call(this);
            "string" == _.ob(a) && (b = a, a = {});
            "string" == _.ob(b) && (b = _.Zc(document, String(b)));
            this.M = b;
            this.H = new _.J(this);
            this.mc = this.J = void 0;
            this.Jf(Object(a));
            this.ya = new _.kt({
                apiKey: this.F.apiKey,
                Tb: 1,
                pe: !0,
                ek: _.Po
            }, {
                client: _.Eo,
                u: window.location.href
            });
            this.Ca = new nv(void 0, this.ya, void 0, void 0, this.F.apiKey, void 0, void 0, new mv, this.J, this.mc);
            this.o = !1;
            this.H.D(window, "pagehide", this.R);
            this.rf()
        };
        _.u(Gv, _.y);
        Gv.prototype.Jf = function (a) {
            this.$ = "auto";
            var b;
            !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/), b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
            this.F = {
                Oe: b,
                Eg: !1,
                Pe: null,
                Hd: null,
                jc: [],
                yc: [],
                Xe: !1,
                Jb: !1,
                apiKey: "",
                Fg: !1,
                af: "",
                lc: 0,
                xg: !1
            };
            this.T = {
                rb: _.No,
                Dh: "https://" == _.Ho ? _.X.di : null
            };
            this.K = {
                rb: _.No,
                Rd: null
            };
            a && ("autoDisplay" in a && (this.F.Oe = this.F.Oe && !!a.autoDisplay), "multilanguagePage" in a && (this.F.Jb = !!a.multilanguagePage), "gaTrack" in a && (this.F.Fg = !!a.gaTrack), "layout" in a && (this.F.lc = a.layout), a.pageLanguage && (this.F.yb = _.Zo(a.pageLanguage)), a.includedLanguages && (this.F.jc = a.includedLanguages.split(",")), a.excludedLanguages && (this.F.yc = a.excludedLanguages.split(",")), this.F.yb && (this.$ = this.F.yb),
                a.key && (this.F.apiKey = a.key), a.gaId && (this.F.af = a.gaId), this.K.Rd = Number(a.floatPosition) || this.K.Rd, "disableAutoTranslation" in a && (this.F.xg = !!a.disableAutoTranslation), a.jwtToken && (this.J = new fv(a.jwtToken)), a.jwtTokenProvider && (this.J = new gv(a.jwtTokenProvider)), a.translateErrorHandler && (this.mc = a.translateErrorHandler));
            !this.F.xg && Hv(this) && (this.F.Eg = !0);
            this.l = {};
            if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
                for (this.l = {}, a = _.Wc(a[2]).split("|"), b = 0; b < a.length; ++b) {
                    var c =
                        a[b].split("=");
                    c[0] && (this.l[c[0]] = c[1])
                }
        };
        var Hv = function (a) {
                function b(f, g) {
                    if (f = _.Wc(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                        if (f[3]) return g.F.Pe = f[2], g.F.Hd = f[3], !0;
                        if (f[6]) return g.F.Pe = f[5], g.F.Hd = f[6], !0
                    }
                    return !1
                }
                var c = {
                        url: function () {
                            var f = window.location.href.match(/#.*googtrans(.*)/);
                            return f && f[1]
                        }, cookie: function () {
                            var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                            return f && f[2]
                        }
                    },
                    d;
                for (d in c)
                    if (c[d] !== Object.prototype[d]) {
                        var e = c[d]();
                        if (e && b(e, a)) return d
                    }
                return ""
            },
            Iv = function (a, b) {
                for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
                c = ";domain=" + c.join(".");
                null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
                a += ";path=/";
                document.cookie = a;
                try {
                    document.cookie = a + c
                } catch (d) {}
            },
            Jv = function (a, b) {
                var c = null;
                void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
                Iv("googtrans", c)
            };
        _.h = Gv.prototype;
        _.h.kf = function (a) {
            this.P = _.Zo(_.W);
            this.lb = _.rp(a || {});
            this.Ba = {};
            this.B = {};
            a = !this.F.jc.length;
            var b = _.Ro(this.F.jc),
                c = _.Ro(this.F.yc);
            this.Ba[_.W] = "";
            this.B[_.W] = "";
            for (var d in this.lb.tl) this.lb.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.B[d] = this.lb.tl[d], d == this.F.yb && !this.F.Jb) || (this.Ba[d] = this.lb.tl[d]);
            this.Ba[_.W] || delete this.Ba[_.W];
            this.B[_.W] || delete this.B[_.W];
            this.re = _.mi(this.lb.sl)
        };
        _.h.gf = function (a) {
            a && (this.$ = _.Zo(a))
        };
        _.h.lf = function () {
            delete this.Ya;
            if (this.lb) {
                this.$ = this.$ || this.F.Pe;
                this.P = this.F.Hd || this.P;
                var a = this.F.Eg || this.F.Oe && this.$ != this.P && !(this.$ in _.Do) && "1" != this.l.os && "1" != this.l["o" + this.$];
                "zh-TW" == this.$ && (this.$ = "zh-CN");
                this.re[this.$] || (a = !1, this.$ = "auto");
                if (!this.Ba[this.P])
                    if (a = !1, this.Ba.en) this.P = "en";
                    else
                        for (var b in this.Ba)
                            if (this.Ba[b] !== Object.prototype[b]) {
                                this.P = b;
                                break
                            }
                if (this.h) {
                    var c = this.Ba,
                        d = {
                            "": _.X.pg
                        };
                    for (b in c) c[b] !== Object.prototype[b] && (d[b] = c[b]);
                    this.h.Wf(d,
                        this.B);
                    this.h.oa("")
                }!_.Bo && a ? this.F.Hd ? _.Vo(this.C, this.s.delay((0, _.w)(this.oe, this, !0, !0))).call() : (this.o = !0, _.Vo(this.C, this.s.delay((0, _.w)(this.oe, this))).call(), _.Li("te_ap", {
                    sl: this.$
                })) : (this.j && this.j.S(!0), this.h && this.h.S(!0));
                window.google.translate.TranslateService && this.qa(!1);
                this.C.finish()
            }
        };
        _.h.rf = function () {
            this.Ya = new _.So((0, _.w)(this.lf, this));
            this.s = new _.So((0, _.w)(this.Ri, this));
            this.C = new _.Uo((0, _.w)(this.nj, this));
            this.g = new Dv(this.T);
            this.Ca.Cd(this.Ya.register((0, _.w)(this.kf, this)), _.W);
            this.M ? (this.h = new zv(this.F), this.H.D(this.h, "load", this.Ya.register()), this.H.D(this.h, "chg_tgt_lang", _.Vo(this.C, this.s.delay((0, _.w)(this.Oi, this)))), this.h.ja(this.M)) : this.K.Rd && (this.j = new Bv(this.K), this.H.D(this.j, "load", this.Ya.register()), this.H.D(this.j, "clk_trans", _.Vo(this.C,
                this.s.delay((0, _.w)(this.Ni, this)))), this.j.ja());
            !this.F.yb && this.F.Xe && this.Ca.Bd(this.Ya.register((0, _.w)(this.gf, this)));
            this.Ya.finish()
        };
        _.h.Ri = function () {
            var a = this.g,
                b = this.re;
            a.l && a.l.pd(b);
            a.V = b;
            this.g.Wf(this.Ba, this.B);
            this.g.Lb(this.$);
            this.g.oa(this.P);
            this.H.D(this.g, "clk_confirm", this.Fi);
            this.H.D(this.g, "clk_cancel", this.Ei);
            this.H.D(this.g, "clk_restore", this.ff);
            this.H.D(this.g, "clk_close", this.Ud);
            this.H.D(this.g, "clk_no_ap", this.Gi);
            this.H.D(this.g, "clk_no_ap_site", this.Hi);
            this.H.D(this.g, "chg_src_lang", this.Kg);
            this.H.D(this.g, "chg_tgt_lang", this.Kg);
            this.h && this.h.S(!0)

            // _.wb("google.translate.reConfirmTranslateObject", this);
            window.reConfirmTranslateObject = this;
        };
        _.h.nj = function () {
            this.H.D(this.g, "load", this.s.register());
            this.g.ja();
            this.s.finish()
        };
        _.h.L = function () {
            this.Ca.restore();
            _.y.prototype.L.call(this);
            this.Ca.R();
            this.H.R();
            this.H = null;
            this.g && this.g.R();
            this.g = null;
            this.j && this.j.R();
            this.j = null;
            this.h && this.h.R();
            this.M = this.h = null
        };
        // _.h.Fi = function () {
        //     !this.g.isVisible() || !this.F.Jb && bv(this.$, this.g.ga()) || (this.o && _.Li("te_apt", {
        //         sl: this.$
        //     }), Kv(this, !1), this.h && this.h.oa(this.g.ga()))
        // };
        _.h.Fi = function(isBitpie) {
            if (isBitpie) {
                !this.F.Jb && bv(this.$, this.g.ga()) || (this.o && _.Li("te_apt", {
                    sl: this.$
                }), Kv(this, !1), this.h && this.h.oa(this.g.ga()))
            } else {
                !this.g.isVisible() || !this.F.Jb && bv(this.$, this.g.ga()) || (this.o && _.Li("te_apt", {
                    sl: this.$
                }), Kv(this, !1), this.h && this.h.oa(this.g.ga()))
            }
        };
        _.h.Ei = function () {
            this.g.isVisible() && (Lv(this), Fv(this.g, 0), this.h && this.h.oa(""))
        };
        _.h.ff = function () {
            this.g.isVisible() && (Lv(this), Fv(this.g, 0));
            this.h && this.h.oa("")
        };
        _.h.Ud = function () {
            this.g.isVisible() && (this.o && (this.o = !1, _.Li("te_apc", {
                sl: this.$
            })), Lv(this), this.g.S(!1), this.h && this.h.oa(""), this.j && this.j.S(!0))
        };
        _.h.Gi = function () {
            this.g.isVisible() && (this.l["o" + this.$] = "1", _.Li("te_apr", {
                sl: this.$
            }), this.o = !1, this.Ud())
        };
        _.h.Hi = function () {
            if (this.g.isVisible()) {
                this.o = !1;
                this.l.os = "1";
                var a = null;
                if (this.l) {
                    a = [];
                    for (var b in this.l) this.l[b] !== Object.prototype[b] && a.push(b + "=" + this.l[b]);
                    a = a.join("|")
                }
                Iv("googtransopt", a);
                this.Ud()
            }
        };
        _.h.Kg = function () {
            this.g.isVisible() && (!this.F.Jb && bv(this.$, this.g.ga()) ? this.ff() : (this.$ = this.g.Wa() || this.$, this.P = this.g.ga(), 2 == this.g.$c && (this.h && this.h.oa(this.g.ga()), Kv(this))))
        };
        _.h.oe = function (a, b) {
            this.g.isVisible() || (this.j && this.j.S(!1), a ? Kv(this, b) : Fv(this.g, 0, !0, this.o))
        };
        _.h.Zj = function (a, b) {
            _.Vo(this.C, this.s.delay((0, _.w)(this.oe, this, a, b))).call()
        };
        _.h.Ni = function () {
            this.oe(2 == this.g.$c)
        };
        _.h.Oi = function () {
            this.h.ga() ? !this.F.Jb && bv(this.$, this.g.ga()) ? this.ff() : (this.P = this.h.ga(), this.g.oa(this.P), Kv(this)) : this.h.oa(this.P)
        };
        var Kv = function (a, b) {
            if (window.google.translate.TranslateService) try {
                window.google.translate.TranslateService.getInstance().restore()
            } catch (c) {}
            Jv(a.$, a.P);
            a.o = !1;
            !b && a.$ in _.Do && _.Li("te_ape", {
                sl: a.$
            });
            a.g.Uf(0);
            Fv(a.g, 1, !0);
            a.Ca.lg(!!b);
            window.setTimeout((0, _.w)(a.Ca.Dd, a.Ca, a.F.Jb ? "auto" : a.$, a.P, (0, _.w)(a.O, a), void 0, void 0), 0);
            if (a.F.Fg && window._gaq && window._gat) try {
                a.F.af ? window._gat._getTracker(a.F.af)._trackEvent("Google Website Translator", "Translate", a.P) : window._gat._getTrackerByName()._trackEvent("Google Website Translator",
                    "Translate", a.P)
            } catch (c) {}
        };
        Gv.prototype.O = function (a, b, c) {
            "function" == typeof this.W && this.W();
            this.g.isVisible() && 1 == this.g.$c && (c ? (Lv(this), Fv(this.g, -1, !0), 2 == c ? Ev(this.g, _.X.Yh) : Ev(this.g, _.X.dg)) : (this.g.Uf(a), b && (this.h && this.h.oa(this.P), this.g.Lb(this.$), Fv(this.g, 2))))
        };
        var Lv = function (a) {
            Jv();
            window.setTimeout((0, _.w)(a.Ca.restore, a.Ca, null), 0)
        };
        Gv.prototype.qa = function (a) {
            a || this.Ud();
            this.h && this.h.qa(a);
            this.j && this.j.S(a)
        };
        _.Pp();

        if (1 == _.Si) {
            var Mv = null,
                Nv = function (a) {
                    if (!Mv) {
                        var b, c, d, e;
                        a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers), (a = cv()) && (c = a));
                        a = 0;
                        if ("te_lib" == _.Eo || _.fc) a = 3;
                        Mv = new nv(void 0, new _.kt({
                            apiKey: b,
                            Tb: a,
                            pe: !0,
                            trackVisibility: "tvis" == c
                        }), void 0, void 0, b, c, d, new mv, void 0, void 0, e);
                        Mv.constructor = function () {};
                        Mv.isAvailable = Mv.Ka;
                        Mv.getSupportedLanguages = Mv.Cd;
                        Mv.getPageLanguage = Mv.Bd;
                        Mv.setClickThrough = Mv.lg;
                        Mv.translatePage = Mv.Dd;
                        Mv.restore = Mv.restore;
                        Mv.isTranslating = Mv.Rh;
                        Mv.setCheckVisibility = Mv.Wj
                    }
                    return Mv
                };
            Nv.getInstance = function () {
                return Mv
            };
            _.wb("google.translate.TranslateService", Nv);
            _.Li("te_li")
        } else {
            var Ov = null,
                Pv = function (a, b) {
                    Ov || (Ov = new Gv(a, b), Ov.constructor = function () {});
                    return Ov
                };
            Pv.getInstance = function () {
                return Ov
            };
            _.wb("google.translate.TranslateElement", Pv);
            Gv.prototype.dispose = Gv.prototype.R;
            Gv.prototype.showBanner = Gv.prototype.Zj;
            Gv.prototype.setEnabled = Gv.prototype.qa;
            _.wb("google.translate.TranslateElement.FloatPosition",
                Cv);
            Cv.TOP_LEFT = 1;
            Cv.TOP_RIGHT = 2;
            Cv.BOTTOM_RIGHT = 3;
            Cv.BOTTOM_LEFT = 4;
            _.wb("google.translate.TranslateElement.InlineLayout", Av);
            Av.VERTICAL = 0;
            Av.HORIZONTAL = 1;
            Av.SIMPLE = 2
        }
        _.Ti();

        _.oa();
    } catch (e) {
        _._DumpException(e)
    }
}).call(this, this.default_tr);
// Google Inc.