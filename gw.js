function redirect(e) {
	top.location = window.config.fb_canvas_url + e
}
function timeoutExtendFunction(e, t) {
	var n = null;
	return function() {
		n && clearTimeout(n), n = setTimeout(e, t)
	}
}
function nameFunction(e) {
	window.named_functions || (window.named_functions = {});
	var t = "",
		n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (var r = 0; r < 20; r++) t += n.charAt(Math.floor(Math.random() * n.length));
	return window[t] = e, t
}
function replaceLocationHash(e) {
	var t = window.location.href.split("#")[0] + "#" + e;
	window.location.replace(t)
}(function(e, t) {
	function n(e) {
		return B.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
	}
	function r(e) {
		if (!mn[e]) {
			var t = D.body,
				n = B("<" + e + ">").appendTo(t),
				r = n.css("display");
			n.remove();
			if (r === "none" || r === "") {
				gn || (gn = D.createElement("iframe"), gn.frameBorder = gn.width = gn.height = 0), t.appendChild(gn);
				if (!yn || !gn.createElement) yn = (gn.contentWindow || gn.contentDocument).document, yn.write((D.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), yn.close();
				n = yn.createElement(e), yn.body.appendChild(n), r = B.css(n, "display"), t.removeChild(gn)
			}
			mn[e] = r
		}
		return mn[e]
	}
	function i(e, t) {
		var n = {};
		return B.each(Sn.concat.apply([], Sn.slice(0, t)), function() {
			n[this] = e
		}), n
	}
	function s() {
		xn = t
	}
	function o() {
		return setTimeout(s, 0), xn = B.now()
	}
	function u() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	function a() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function f(e, n) {
		e.dataFilter && (n = e.dataFilter(n, e.dataType));
		var r = e.dataTypes,
			i = {},
			s, o, u = r.length,
			a, f = r[0],
			l, c, h, p, d;
		for (s = 1; s < u; s++) {
			if (s === 1) for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
			l = f, f = r[s];
			if (f === "*") f = l;
			else if (l !== "*" && l !== f) {
				c = l + " " + f, h = i[c] || i["* " + f];
				if (!h) {
					d = t;
					for (p in i) {
						a = p.split(" ");
						if (a[0] === l || a[0] === "*") {
							d = i[a[1] + " " + f];
							if (d) {
								p = i[p], p === !0 ? h = d : d === !0 && (h = p);
								break
							}
						}
					}
				}!h && !d && B.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)))
			}
		}
		return n
	}
	function l(e, n, r) {
		var i = e.contents,
			s = e.dataTypes,
			o = e.responseFields,
			u, a, f, l;
		for (a in o) a in r && (n[o[a]] = r[a]);
		while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
		if (u) for (a in i) if (i[a] && i[a].test(u)) {
			s.unshift(a);
			break
		}
		if (s[0] in r) f = s[0];
		else {
			for (a in r) {
				if (!s[0] || e.converters[a + " " + s[0]]) {
					f = a;
					break
				}
				l || (l = a)
			}
			f = f || l
		}
		if (f) return f !== s[0] && s.unshift(f), r[f]
	}
	function c(e, t, n, r) {
		if (B.isArray(t)) B.each(t, function(t, i) {
			n || zt.test(e) ? r(e, i) : c(e + "[" + (typeof i == "object" || B.isArray(i) ? t : "") + "]", i, n, r)
		});
		else if (!n && t != null && typeof t == "object") for (var i in t) c(e + "[" + i + "]", t[i], n, r);
		else r(e, t)
	}
	function h(e, n) {
		var r, i, s = B.ajaxSettings.flatOptions || {};
		for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
		i && B.extend(!0, e, i)
	}
	function p(e, n, r, i, s, o) {
		s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
		var u = e[s],
			a = 0,
			f = u ? u.length : 0,
			l = e === sn,
			c;
		for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = p(e, n, r, i, c, o)));
		return (l || !c) && !o["*"] && (c = p(e, n, r, i, "*", o)), c
	}
	function d(e) {
		return function(t, n) {
			typeof t != "string" && (n = t, t = "*");
			if (B.isFunction(n)) {
				var r = t.toLowerCase().split(en),
					i = 0,
					s = r.length,
					o, u, a;
				for (; i < s; i++) o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n)
			}
		}
	}
	function v(e, t, n) {
		var r = t === "width" ? e.offsetWidth : e.offsetHeight,
			i = t === "width" ? jt : Ft,
			s = 0,
			o = i.length;
		if (r > 0) {
			if (n !== "border") for (; s < o; s++) n || (r -= parseFloat(B.css(e, "padding" + i[s])) || 0), n === "margin" ? r += parseFloat(B.css(e, n + i[s])) || 0 : r -= parseFloat(B.css(e, "border" + i[s] + "Width")) || 0;
			return r + "px"
		}
		r = It(e, t, t);
		if (r < 0 || r == null) r = e.style[t] || 0;
		r = parseFloat(r) || 0;
		if (n) for (; s < o; s++) r += parseFloat(B.css(e, "padding" + i[s])) || 0, n !== "padding" && (r += parseFloat(B.css(e, "border" + i[s] + "Width")) || 0), n === "margin" && (r += parseFloat(B.css(e, n + i[s])) || 0);
		return r + "px"
	}
	function m(e, t) {
		t.src ? B.ajax({
			url: t.src,
			async: !1,
			dataType: "script"
		}) : B.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
	}
	function g(e) {
		var t = D.createElement("div");
		return At.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
	}
	function y(e) {
		var t = (e.nodeName || "").toLowerCase();
		t === "input" ? b(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && B.grep(e.getElementsByTagName("input"), b)
	}
	function b(e) {
		if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
	}
	function w(e) {
		return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
	}
	function E(e, t) {
		var n;
		if (t.nodeType === 1) {
			t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase();
			if (n === "object") t.outerHTML = e.outerHTML;
			else if (n !== "input" || e.type !== "checkbox" && e.type !== "radio") {
				if (n === "option") t.selected = e.defaultSelected;
				else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
			} else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
			t.removeAttribute(B.expando)
		}
	}
	function S(e, t) {
		if (t.nodeType === 1 && !! B.hasData(e)) {
			var n, r, i, s = B._data(e),
				o = B._data(t, s),
				u = s.events;
			if (u) {
				delete o.handle, o.events = {};
				for (n in u) for (r = 0, i = u[n].length; r < i; r++) B.event.add(t, n + (u[n][r].namespace ? "." : "") + u[n][r].namespace, u[n][r], u[n][r].data)
			}
			o.data && (o.data = B.extend({}, o.data))
		}
	}
	function x(e, t) {
		return B.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function T(e) {
		var t = vt.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) while (t.length) n.createElement(t.pop());
		return n
	}
	function N(e, t, n) {
		t = t || 0;
		if (B.isFunction(t)) return B.grep(e, function(e, r) {
			var i = !! t.call(e, r, e);
			return i === n
		});
		if (t.nodeType) return B.grep(e, function(e, r) {
			return e === t === n
		});
		if (typeof t == "string") {
			var r = B.grep(e, function(e) {
				return e.nodeType === 1
			});
			if (ct.test(t)) return B.filter(t, r, !n);
			t = B.filter(t, r)
		}
		return B.grep(e, function(e, r) {
			return B.inArray(e, t) >= 0 === n
		})
	}
	function C(e) {
		return !e || !e.parentNode || e.parentNode.nodeType === 11
	}
	function k() {
		return !0
	}
	function L() {
		return !1
	}
	function A(e, t, n) {
		var r = t + "defer",
			i = t + "queue",
			s = t + "mark",
			o = B._data(e, r);
		o && (n === "queue" || !B._data(e, i)) && (n === "mark" || !B._data(e, s)) && setTimeout(function() {
			!B._data(e, i) && !B._data(e, s) && (B.removeData(e, r, !0), o.fire())
		}, 0)
	}
	function O(e) {
		for (var t in e) {
			if (t === "data" && B.isEmptyObject(e[t])) continue;
			if (t !== "toJSON") return !1
		}
		return !0
	}
	function M(e, n, r) {
		if (r === t && e.nodeType === 1) {
			var i = "data-" + n.replace(q, "-$1").toLowerCase();
			r = e.getAttribute(i);
			if (typeof r == "string") {
				try {
					r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : B.isNumeric(r) ? parseFloat(r) : I.test(r) ? B.parseJSON(r) : r
				} catch (s) {}
				B.data(e, n, r)
			} else r = t
		}
		return r
	}
	function _(e) {
		var t = j[e] = {},
			n, r;
		e = e.split(/\s+/);
		for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
		return t
	}
	var D = e.document,
		P = e.navigator,
		H = e.location,
		B = function() {
			function n() {
				if (!r.isReady) {
					try {
						D.documentElement.doScroll("left")
					} catch (e) {
						setTimeout(n, 1);
						return
					}
					r.ready()
				}
			}
			var r = function(e, t) {
					return new r.fn.init(e, t, o)
				},
				i = e.jQuery,
				s = e.$,
				o, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				a = /\S/,
				f = /^\s+/,
				l = /\s+$/,
				c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				h = /^[\],:{}\s]*$/,
				p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				v = /(?:^|:|,)(?:\s*\[)+/g,
				m = /(webkit)[ \/]([\w.]+)/,
				g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				y = /(msie) ([\w.]+)/,
				b = /(mozilla)(?:.*? rv:([\w.]+))?/,
				w = /-([a-z]|[0-9])/ig,
				E = /^-ms-/,
				S = function(e, t) {
					return (t + "").toUpperCase()
				},
				x = P.userAgent,
				T, N, C, k = Object.prototype.toString,
				L = Object.prototype.hasOwnProperty,
				A = Array.prototype.push,
				O = Array.prototype.slice,
				M = String.prototype.trim,
				_ = Array.prototype.indexOf,
				H = {};
			return r.fn = r.prototype = {
				constructor: r,
				init: function(e, n, i) {
					var s, o, a, f;
					if (!e) return this;
					if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
					if (e === "body" && !n && D.body) return this.context = D, this[0] = D.body, this.selector = e, this.length = 1, this;
					if (typeof e == "string") {
						e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? s = u.exec(e) : s = [null, e, null];
						if (s && (s[1] || !n)) {
							if (s[1]) return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : D, a = c.exec(e), a ? r.isPlainObject(n) ? (e = [D.createElement(a[1])], r.fn.attr.call(e, n, !0)) : e = [f.createElement(a[1])] : (a = r.buildFragment([s[1]], [f]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
							o = D.getElementById(s[2]);
							if (o && o.parentNode) {
								if (o.id !== s[2]) return i.find(e);
								this.length = 1, this[0] = o
							}
							return this.context = D, this.selector = e, this
						}
						return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
					}
					return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), r.makeArray(e, this))
				},
				selector: "",
				jquery: "1.7.1",
				length: 0,
				size: function() {
					return this.length
				},
				toArray: function() {
					return O.call(this, 0)
				},
				get: function(e) {
					return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
				},
				pushStack: function(e, t, n) {
					var i = this.constructor();
					return r.isArray(e) ? A.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
				},
				each: function(e, t) {
					return r.each(this, e, t)
				},
				ready: function(e) {
					return r.bindReady(), N.add(e), this
				},
				eq: function(e) {
					return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
				},
				first: function() {
					return this.eq(0)
				},
				last: function() {
					return this.eq(-1)
				},
				slice: function() {
					return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","))
				},
				map: function(e) {
					return this.pushStack(r.map(this, function(t, n) {
						return e.call(t, n, t)
					}))
				},
				end: function() {
					return this.prevObject || this.constructor(null)
				},
				push: A,
				sort: [].sort,
				splice: [].splice
			}, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function() {
				var e, n, i, s, o, u, a = arguments[0] || {},
					f = 1,
					l = arguments.length,
					c = !1;
				typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
				for (; f < l; f++) if ((e = arguments[f]) != null) for (n in e) {
					i = a[n], s = e[n];
					if (a === s) continue;
					c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s)
				}
				return a
			}, r.extend({
				noConflict: function(t) {
					return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r
				},
				isReady: !1,
				readyWait: 1,
				holdReady: function(e) {
					e ? r.readyWait++ : r.ready(!0)
				},
				ready: function(e) {
					if (e === !0 && !--r.readyWait || e !== !0 && !r.isReady) {
						if (!D.body) return setTimeout(r.ready, 1);
						r.isReady = !0;
						if (e !== !0 && --r.readyWait > 0) return;
						N.fireWith(D, [r]), r.fn.trigger && r(D).trigger("ready").off("ready")
					}
				},
				bindReady: function() {
					if (!N) {
						N = r.Callbacks("once memory");
						if (D.readyState === "complete") return setTimeout(r.ready, 1);
						if (D.addEventListener) D.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1);
						else if (D.attachEvent) {
							D.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
							var t = !1;
							try {
								t = e.frameElement == null
							} catch (i) {}
							D.documentElement.doScroll && t && n()
						}
					}
				},
				isFunction: function(e) {
					return r.type(e) === "function"
				},
				isArray: Array.isArray ||
				function(e) {
					return r.type(e) === "array"
				},
				isWindow: function(e) {
					return e && typeof e == "object" && "setInterval" in e
				},
				isNumeric: function(e) {
					return !isNaN(parseFloat(e)) && isFinite(e)
				},
				type: function(e) {
					return e == null ? String(e) : H[k.call(e)] || "object"
				},
				isPlainObject: function(e) {
					if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
					try {
						if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) return !1
					} catch (n) {
						return !1
					}
					var i;
					for (i in e);
					return i === t || L.call(e, i)
				},
				isEmptyObject: function(e) {
					for (var t in e) return !1;
					return !0
				},
				error: function(e) {
					throw new Error(e)
				},
				parseJSON: function(t) {
					if (typeof t != "string" || !t) return null;
					t = r.trim(t);
					if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
					if (h.test(t.replace(p, "@").replace(d, "]").replace(v, ""))) return (new Function("return " + t))();
					r.error("Invalid JSON: " + t)
				},
				parseXML: function(n) {
					var i, s;
					try {
						e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
					} catch (o) {
						i = t
					}
					return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i
				},
				noop: function() {},
				globalEval: function(t) {
					t && a.test(t) && (e.execScript ||
					function(t) {
						e.eval.call(e, t)
					})(t)
				},
				camelCase: function(e) {
					return e.replace(E, "ms-").replace(w, S)
				},
				nodeName: function(e, t) {
					return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
				},
				each: function(e, n, i) {
					var s, o = 0,
						u = e.length,
						a = u === t || r.isFunction(e);
					if (i) {
						if (a) {
							for (s in e) if (n.apply(e[s], i) === !1) break
						} else for (; o < u;) if (n.apply(e[o++], i) === !1) break
					} else if (a) {
						for (s in e) if (n.call(e[s], s, e[s]) === !1) break
					} else for (; o < u;) if (n.call(e[o], o, e[o++]) === !1) break;
					return e
				},
				trim: M ?
				function(e) {
					return e == null ? "" : M.call(e)
				} : function(e) {
					return e == null ? "" : (e + "").replace(f, "").replace(l, "")
				},
				makeArray: function(e, t) {
					var n = t || [];
					if (e != null) {
						var i = r.type(e);
						e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e)
					}
					return n
				},
				inArray: function(e, t, n) {
					var r;
					if (t) {
						if (_) return _.call(t, e, n);
						r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
						for (; n < r; n++) if (n in t && t[n] === e) return n
					}
					return -1
				},
				merge: function(e, n) {
					var r = e.length,
						i = 0;
					if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i];
					else while (n[i] !== t) e[r++] = n[i++];
					return e.length = r, e
				},
				grep: function(e, t, n) {
					var r = [],
						i;
					n = !! n;
					for (var s = 0, o = e.length; s < o; s++) i = !! t(e[s], s), n !== i && r.push(e[s]);
					return r
				},
				map: function(e, n, i) {
					var s, o, u = [],
						a = 0,
						f = e.length,
						l = e instanceof r || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
					if (l) for (; a < f; a++) s = n(e[a], a, i), s != null && (u[u.length] = s);
					else for (o in e) s = n(e[o], o, i), s != null && (u[u.length] = s);
					return u.concat.apply([], u)
				},
				guid: 1,
				proxy: function(e, n) {
					if (typeof n == "string") {
						var i = e[n];
						n = e, e = i
					}
					if (!r.isFunction(e)) return t;
					var s = O.call(arguments, 2),
						o = function() {
							return e.apply(n, s.concat(O.call(arguments)))
						};
					return o.guid = e.guid = e.guid || o.guid || r.guid++, o
				},
				access: function(e, n, i, s, o, u) {
					var a = e.length;
					if (typeof n == "object") {
						for (var f in n) r.access(e, f, n[f], s, o, i);
						return e
					}
					if (i !== t) {
						s = !u && s && r.isFunction(i);
						for (var l = 0; l < a; l++) o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
						return e
					}
					return a ? o(e[0], n) : t
				},
				now: function() {
					return (new Date).getTime()
				},
				uaMatch: function(e) {
					e = e.toLowerCase();
					var t = m.exec(e) || g.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
					return {
						browser: t[1] || "",
						version: t[2] || "0"
					}
				},
				sub: function() {
					function e(t, n) {
						return new e.fn.init(t, n)
					}
					r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
						return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t)
					}, e.fn.init.prototype = e.fn;
					var t = e(D);
					return e
				},
				browser: {}
			}), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
				H["[object " + t + "]"] = t.toLowerCase()
			}), T = r.uaMatch(x), T.browser && (r.browser[T.browser] = !0, r.browser.version = T.version), r.browser.webkit && (r.browser.safari = !0), a.test("Â ") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(D), D.addEventListener ? C = function() {
				D.removeEventListener("DOMContentLoaded", C, !1), r.ready()
			} : D.attachEvent && (C = function() {
				D.readyState === "complete" && (D.detachEvent("onreadystatechange", C), r.ready())
			}), r
		}(),
		j = {};
	B.Callbacks = function(e) {
		e = e ? j[e] || _(e) : {};
		var n = [],
			r = [],
			i, s, o, u, a, f = function(t) {
				var r, i, s, o, u;
				for (r = 0, i = t.length; r < i; r++) s = t[r], o = B.type(s), o === "array" ? f(s) : o === "function" && (!e.unique || !c.has(s)) && n.push(s)
			},
			l = function(t, f) {
				f = f || [], i = !e.memory || [t, f], s = !0, a = o || 0, o = 0, u = n.length;
				for (; n && a < u; a++) if (n[a].apply(t, f) === !1 && e.stopOnFalse) {
					i = !0;
					break
				}
				s = !1, n && (e.once ? i === !0 ? c.disable() : n = [] : r && r.length && (i = r.shift(), c.fireWith(i[0], i[1])))
			},
			c = {
				add: function() {
					if (n) {
						var e = n.length;
						f(arguments), s ? u = n.length : i && i !== !0 && (o = e, l(i[0], i[1]))
					}
					return this
				},
				remove: function() {
					if (n) {
						var t = arguments,
							r = 0,
							i = t.length;
						for (; r < i; r++) for (var o = 0; o < n.length; o++) if (t[r] === n[o]) {
							s && o <= u && (u--, o <= a && a--), n.splice(o--, 1);
							if (e.unique) break
						}
					}
					return this
				},
				has: function(e) {
					if (n) {
						var t = 0,
							r = n.length;
						for (; t < r; t++) if (e === n[t]) return !0
					}
					return !1
				},
				empty: function() {
					return n = [], this
				},
				disable: function() {
					return n = r = i = t, this
				},
				disabled: function() {
					return !n
				},
				lock: function() {
					return r = t, (!i || i === !0) && c.disable(), this
				},
				locked: function() {
					return !r
				},
				fireWith: function(t, n) {
					return r && (s ? e.once || r.push([t, n]) : (!e.once || !i) && l(t, n)), this
				},
				fire: function() {
					return c.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return c
	};
	var F = [].slice;
	B.extend({
		Deferred: function(e) {
			var t = B.Callbacks("once memory"),
				n = B.Callbacks("once memory"),
				r = B.Callbacks("memory"),
				i = "pending",
				s = {
					resolve: t,
					reject: n,
					notify: r
				},
				o = {
					done: t.add,
					fail: n.add,
					progress: r.add,
					state: function() {
						return i
					},
					isResolved: t.fired,
					isRejected: n.fired,
					then: function(e, t, n) {
						return u.done(e).fail(t).progress(n), this
					},
					always: function() {
						return u.done.apply(u, arguments).fail.apply(u, arguments), this
					},
					pipe: function(e, t, n) {
						return B.Deferred(function(r) {
							B.each({
								done: [e, "resolve"],
								fail: [t, "reject"],
								progress: [n, "notify"]
							}, function(e, t) {
								var n = t[0],
									i = t[1],
									s;
								B.isFunction(n) ? u[e](function() {
									s = n.apply(this, arguments), s && B.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [s])
								}) : u[e](r[i])
							})
						}).promise()
					},
					promise: function(e) {
						if (e == null) e = o;
						else for (var t in o) e[t] = o[t];
						return e
					}
				},
				u = o.promise({}),
				a;
			for (a in s) u[a] = s[a].fire, u[a + "With"] = s[a].fireWith;
			return u.done(function() {
				i = "resolved"
			}, n.disable, r.lock).fail(function() {
				i = "rejected"
			}, t.disable, r.lock), e && e.call(u, u), u
		},
		when: function(e) {
			function t(e) {
				return function(t) {
					o[e] = arguments.length > 1 ? F.call(arguments, 0) : t, f.notifyWith(l, o)
				}
			}
			function n(e) {
				return function(t) {
					r[e] = arguments.length > 1 ? F.call(arguments, 0) : t, --u || f.resolveWith(f, r)
				}
			}
			var r = F.call(arguments, 0),
				i = 0,
				s = r.length,
				o = Array(s),
				u = s,
				a = s,
				f = s <= 1 && e && B.isFunction(e.promise) ? e : B.Deferred(),
				l = f.promise();
			if (s > 1) {
				for (; i < s; i++) r[i] && r[i].promise && B.isFunction(r[i].promise) ? r[i].promise().then(n(i), f.reject, t(i)) : --u;
				u || f.resolveWith(f, r)
			} else f !== e && f.resolveWith(f, s ? [e] : []);
			return l
		}
	}), B.support = function() {
		var t, n, r, i, s, o, u, a, f, l, c, h, p, d = D.createElement("div"),
			v = D.documentElement;
		d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0];
		if (!n || !n.length || !r) return {};
		i = D.createElement("select"), s = i.appendChild(D.createElement("option")), o = d.getElementsByTagName("input")[0], t = {
			leadingWhitespace: d.firstChild.nodeType === 3,
			tbody: !d.getElementsByTagName("tbody").length,
			htmlSerialize: !! d.getElementsByTagName("link").length,
			style: /top/.test(r.getAttribute("style")),
			hrefNormalized: r.getAttribute("href") === "/a",
			opacity: /^0.55/.test(r.style.opacity),
			cssFloat: !! r.style.cssFloat,
			checkOn: o.value === "on",
			optSelected: s.selected,
			getSetAttribute: d.className !== "t",
			enctype: !! D.createElement("form").enctype,
			html5Clone: D.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0
		}, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
		try {
			delete d.test
		} catch (m) {
			t.deleteExpando = !1
		}!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).fireEvent("onclick")), o = D.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), d.appendChild(o), a = D.createDocumentFragment(), a.appendChild(d.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, a.removeChild(o), a.appendChild(d), d.innerHTML = "", e.getComputedStyle && (u = D.createElement("div"), u.style.width = "0", u.style.marginRight = "0", d.style.width = "2px", d.appendChild(u), t.reliableMarginRight = (parseInt((e.getComputedStyle(u, null) || {
			marginRight: 0
		}).marginRight, 10) || 0) === 0);
		if (d.attachEvent) for (h in {
			submit: 1,
			change: 1,
			focusin: 1
		}) c = "on" + h, p = c in d, p || (d.setAttribute(c, "return;"), p = typeof d[c] == "function"), t[h + "Bubbles"] = p;
		return a.removeChild(d), a = i = s = u = d = o = null, B(function() {
			var e, n, r, i, s, o, u, a, l, c, h, v = D.getElementsByTagName("body")[0];
			!v || (u = 1, a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", c = "style='" + a + "border:5px solid #000;padding:0;'", h = "<div " + c + "><div></div></div>" + "<table " + c + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", e = D.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + u + "px", v.insertBefore(e, v.firstChild), d = D.createElement("div"), e.appendChild(d), d.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), p = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", t.reliableHiddenOffsets = p && f[0].offsetHeight === 0, d.innerHTML = "", d.style.width = d.style.paddingLeft = "1px", B.boxModel = t.boxModel = d.offsetWidth === 2, typeof d.style.zoom != "undefined" && (d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = d.offsetWidth === 2, d.style.display = "", d.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = d.offsetWidth !== 2), d.style.cssText = a + l, d.innerHTML = h, n = d.firstChild, r = n.firstChild, s = n.nextSibling.firstChild.firstChild, o = {
				doesNotAddBorder: r.offsetTop !== 5,
				doesAddBorderForTableAndCells: s.offsetTop === 5
			}, r.style.position = "fixed", r.style.top = "20px", o.fixedPosition = r.offsetTop === 20 || r.offsetTop === 15, r.style.position = r.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", o.subtractsBorderForOverflowNotVisible = r.offsetTop === -5, o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== u, v.removeChild(e), d = e = null, B.extend(t, o))
		}), t
	}();
	var I = /^(?:\{.*\}|\[.*\])$/,
		q = /([A-Z])/g;
	B.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			return e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando], !! e && !O(e)
		},
		data: function(e, n, r, i) {
			if ( !! B.acceptData(e)) {
				var s, o, u, a = B.expando,
					f = typeof n == "string",
					l = e.nodeType,
					c = l ? B.cache : e,
					h = l ? e[a] : e[a] && a,
					p = n === "events";
				if ((!h || !c[h] || !p && !i && !c[h].data) && f && r === t) return;
				h || (l ? e[a] = h = ++B.uuid : h = a), c[h] || (c[h] = {}, l || (c[h].toJSON = B.noop));
				if (typeof n == "object" || typeof n == "function") i ? c[h] = B.extend(c[h], n) : c[h].data = B.extend(c[h].data, n);
				return s = o = c[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[B.camelCase(n)] = r), p && !o[n] ? s.events : (f ? (u = o[n], u == null && (u = o[B.camelCase(n)])) : u = o, u)
			}
		},
		removeData: function(e, t, n) {
			if ( !! B.acceptData(e)) {
				var r, i, s, o = B.expando,
					u = e.nodeType,
					a = u ? B.cache : e,
					f = u ? e[o] : o;
				if (!a[f]) return;
				if (t) {
					r = n ? a[f] : a[f].data;
					if (r) {
						B.isArray(t) || (t in r ? t = [t] : (t = B.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
						for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
						if (!(n ? O : B.isEmptyObject)(r)) return
					}
				}
				if (!n) {
					delete a[f].data;
					if (!O(a[f])) return
				}
				B.support.deleteExpando || !a.setInterval ? delete a[f] : a[f] = null, u && (B.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null)
			}
		},
		_data: function(e, t, n) {
			return B.data(e, t, n, !0)
		},
		acceptData: function(e) {
			if (e.nodeName) {
				var t = B.noData[e.nodeName.toLowerCase()];
				if (t) return t !== !0 && e.getAttribute("classid") === t
			}
			return !0
		}
	}), B.fn.extend({
		data: function(e, n) {
			var r, i, s, o = null;
			if (typeof e == "undefined") {
				if (this.length) {
					o = B.data(this[0]);
					if (this[0].nodeType === 1 && !B._data(this[0], "parsedAttrs")) {
						i = this[0].attributes;
						for (var u = 0, a = i.length; u < a; u++) s = i[u].name, s.indexOf("data-") === 0 && (s = B.camelCase(s.substring(5)), M(this[0], s, o[s]));
						B._data(this[0], "parsedAttrs", !0)
					}
				}
				return o
			}
			return typeof e == "object" ? this.each(function() {
				B.data(this, e)
			}) : (r = e.split("."), r[1] = r[1] ? "." + r[1] : "", n === t ? (o = this.triggerHandler("getData" + r[1] + "!", [r[0]]), o === t && this.length && (o = B.data(this[0], e), o = M(this[0], e, o)), o === t && r[1] ? this.data(r[0]) : o) : this.each(function() {
				var t = B(this),
					i = [r[0], n];
				t.triggerHandler("setData" + r[1] + "!", i), B.data(this, e, n), t.triggerHandler("changeData" + r[1] + "!", i)
			}))
		},
		removeData: function(e) {
			return this.each(function() {
				B.removeData(this, e)
			})
		}
	}), B.extend({
		_mark: function(e, t) {
			e && (t = (t || "fx") + "mark", B._data(e, t, (B._data(e, t) || 0) + 1))
		},
		_unmark: function(e, t, n) {
			e !== !0 && (n = t, t = e, e = !1);
			if (t) {
				n = n || "fx";
				var r = n + "mark",
					i = e ? 0 : (B._data(t, r) || 1) - 1;
				i ? B._data(t, r, i) : (B.removeData(t, r, !0), A(t, n, "mark"))
			}
		},
		queue: function(e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = B._data(e, t), n && (!r || B.isArray(n) ? r = B._data(e, t, B.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = B.queue(e, t),
				r = n.shift(),
				i = {};
			r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), B._data(e, t + ".run", i), r.call(e, function() {
				B.dequeue(e, t)
			}, i)), n.length || (B.removeData(e, t + "queue " + t + ".run", !0), A(e, t, "queue"))
		}
	}), B.fn.extend({
		queue: function(e, n) {
			return typeof e != "string" && (n = e, e = "fx"), n === t ? B.queue(this[0], e) : this.each(function() {
				var t = B.queue(this, e, n);
				e === "fx" && t[0] !== "inprogress" && B.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				B.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = B.fx ? B.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			function r() {
				--u || i.resolveWith(s, [s])
			}
			typeof e != "string" && (n = e, e = t), e = e || "fx";
			var i = B.Deferred(),
				s = this,
				o = s.length,
				u = 1,
				a = e + "defer",
				f = e + "queue",
				l = e + "mark",
				c;
			while (o--) if (c = B.data(s[o], a, t, !0) || (B.data(s[o], f, t, !0) || B.data(s[o], l, t, !0)) && B.data(s[o], a, B.Callbacks("once memory"), !0)) u++, c.add(r);
			return r(), i.promise()
		}
	});
	var R = /[\n\t\r]/g,
		U = /\s+/,
		z = /\r/g,
		W = /^(?:button|input)$/i,
		X = /^(?:button|input|object|select|textarea)$/i,
		V = /^a(?:rea)?$/i,
		$ = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		J = B.support.getSetAttribute,
		K, Q, G;
	B.fn.extend({
		attr: function(e, t) {
			return B.access(this, e, t, !0, B.attr)
		},
		removeAttr: function(e) {
			return this.each(function() {
				B.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return B.access(this, e, t, !0, B.prop)
		},
		removeProp: function(e) {
			return e = B.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, s, o, u;
			if (B.isFunction(e)) return this.each(function(t) {
				B(this).addClass(e.call(this, t, this.className))
			});
			if (e && typeof e == "string") {
				t = e.split(U);
				for (n = 0, r = this.length; n < r; n++) {
					i = this[n];
					if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
					else {
						s = " " + i.className + " ";
						for (o = 0, u = t.length; o < u; o++)~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
						i.className = B.trim(s)
					}
				}
			}
			return this
		},
		removeClass: function(e) {
			var n, r, i, s, o, u, a;
			if (B.isFunction(e)) return this.each(function(t) {
				B(this).removeClass(e.call(this, t, this.className))
			});
			if (e && typeof e == "string" || e === t) {
				n = (e || "").split(U);
				for (r = 0, i = this.length; r < i; r++) {
					s = this[r];
					if (s.nodeType === 1 && s.className) if (e) {
						o = (" " + s.className + " ").replace(R, " ");
						for (u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
						s.className = B.trim(o)
					} else s.className = ""
				}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = typeof t == "boolean";
			return B.isFunction(e) ? this.each(function(n) {
				B(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if (n === "string") {
					var i, s = 0,
						o = B(this),
						u = t,
						a = e.split(U);
					while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
				} else if (n === "undefined" || n === "boolean") this.className && B._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : B._data(this, "__className__") || ""
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, s = this[0];
			if ( !! arguments.length) return i = B.isFunction(e), this.each(function(r) {
				var s = B(this),
					o;
				if (this.nodeType === 1) {
					i ? o = e.call(this, r, s.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : B.isArray(o) && (o = B.map(o, function(e) {
						return e == null ? "" : e + ""
					})), n = B.valHooks[this.nodeName.toLowerCase()] || B.valHooks[this.type];
					if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o
				}
			});
			if (s) return n = B.valHooks[s.nodeName.toLowerCase()] || B.valHooks[s.type], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(z, "") : r == null ? "" : r)
		}
	}), B.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i, s = e.selectedIndex,
						o = [],
						u = e.options,
						a = e.type === "select-one";
					if (s < 0) return null;
					n = a ? s : 0, r = a ? s + 1 : u.length;
					for (; n < r; n++) {
						i = u[n];
						if (i.selected && (B.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !B.nodeName(i.parentNode, "optgroup"))) {
							t = B(i).val();
							if (a) return t;
							o.push(t)
						}
					}
					return a && !o.length && u.length ? B(u[s]).val() : o
				},
				set: function(e, t) {
					var n = B.makeArray(t);
					return B(e).find("option").each(function() {
						this.selected = B.inArray(B(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1), n
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(e, n, r, i) {
			var s, o, u, a = e.nodeType;
			if ( !! e && a !== 3 && a !== 8 && a !== 2) {
				if (i && n in B.attrFn) return B(e)[n](r);
				if (typeof e.getAttribute == "undefined") return B.prop(e, n, r);
				u = a !== 1 || !B.isXMLDoc(e), u && (n = n.toLowerCase(), o = B.attrHooks[n] || ($.test(n) ? Q : K));
				if (r !== t) {
					if (r === null) {
						B.removeAttr(e, n);
						return
					}
					return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
				}
				return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
			}
		},
		removeAttr: function(e, t) {
			var n, r, i, s, o = 0;
			if (t && e.nodeType === 1) {
				r = t.toLowerCase().split(U), s = r.length;
				for (; o < s; o++) i = r[o], i && (n = B.propFix[i] || i, B.attr(e, i, ""), e.removeAttribute(J ? i : n), $.test(i) && n in e && (e[n] = !1))
			}
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (W.test(e.nodeName) && e.parentNode) B.error("type property can't be changed");
					else if (!B.support.radioValue && t === "radio" && B.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			},
			value: {
				get: function(e, t) {
					return K && B.nodeName(e, "button") ? K.get(e, t) : t in e ? e.value : null
				},
				set: function(e, t, n) {
					if (K && B.nodeName(e, "button")) return K.set(e, t, n);
					e.value = t
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, r) {
			var i, s, o, u = e.nodeType;
			if ( !! e && u !== 3 && u !== 8 && u !== 2) return o = u !== 1 || !B.isXMLDoc(e), o && (n = B.propFix[n] || n, s = B.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}), B.attrHooks.tabindex = B.propHooks.tabIndex, Q = {
		get: function(e, n) {
			var r, i = B.prop(e, n);
			return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			var r;
			return t === !1 ? B.removeAttr(e, n) : (r = B.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
		}
	}, J || (G = {
		name: !0,
		id: !0
	}, K = B.valHooks.button = {
		get: function(e, n) {
			var r;
			return r = e.getAttributeNode(n), r && (G[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
		},
		set: function(e, t, n) {
			var r = e.getAttributeNode(n);
			return r || (r = D.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
		}
	}, B.attrHooks.tabindex.set = K.set, B.each(["width", "height"], function(e, t) {
		B.attrHooks[t] = B.extend(B.attrHooks[t], {
			set: function(e, n) {
				if (n === "") return e.setAttribute(t, "auto"), n
			}
		})
	}), B.attrHooks.contenteditable = {
		get: K.get,
		set: function(e, t, n) {
			t === "" && (t = "false"), K.set(e, t, n)
		}
	}), B.support.hrefNormalized || B.each(["href", "src", "width", "height"], function(e, n) {
		B.attrHooks[n] = B.extend(B.attrHooks[n], {
			get: function(e) {
				var r = e.getAttribute(n, 2);
				return r === null ? t : r
			}
		})
	}), B.support.style || (B.attrHooks.style = {
		get: function(e) {
			return e.style.cssText.toLowerCase() || t
		},
		set: function(e, t) {
			return e.style.cssText = "" + t
		}
	}), B.support.optSelected || (B.propHooks.selected = B.extend(B.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	})), B.support.enctype || (B.propFix.enctype = "encoding"), B.support.checkOn || B.each(["radio", "checkbox"], function() {
		B.valHooks[this] = {
			get: function(e) {
				return e.getAttribute("value") === null ? "on" : e.value
			}
		}
	}), B.each(["radio", "checkbox"], function() {
		B.valHooks[this] = B.extend(B.valHooks[this], {
			set: function(e, t) {
				if (B.isArray(t)) return e.checked = B.inArray(B(e).val(), t) >= 0
			}
		})
	});
	var Y = /^(?:textarea|input|select)$/i,
		Z = /^([^\.]*)?(?:\.(.+))?$/,
		et = /\bhover(\.\S+)?\b/,
		tt = /^key/,
		nt = /^(?:mouse|contextmenu)|click/,
		rt = /^(?:focusinfocus|focusoutblur)$/,
		it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		st = function(e) {
			var t = it.exec(e);
			return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
		},
		ot = function(e, t) {
			var n = e.attributes || {};
			return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
		},
		ut = function(e) {
			return B.event.special.hover ? e : e.replace(et, "mouseenter$1 mouseleave$1")
		};
	B.event = {
		add: function(e, n, r, i, s) {
			var o, u, a, f, l, c, h, p, d, v, m, g;
			if (!(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = B._data(e)))) {
				r.handler && (d = r, r = d.handler), r.guid || (r.guid = B.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
					return typeof B == "undefined" || !! e && B.event.triggered === e.type ? t : B.event.dispatch.apply(u.elem, arguments)
				}, u.elem = e), n = B.trim(ut(n)).split(" ");
				for (f = 0; f < n.length; f++) {
					l = Z.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = B.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = B.event.special[c] || {}, p = B.extend({
						type: c,
						origType: l[1],
						data: i,
						handler: r,
						guid: r.guid,
						selector: s,
						quick: st(s),
						namespace: h.join(".")
					}, d), m = a[c];
					if (!m) {
						m = a[c] = [], m.delegateCount = 0;
						if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
					}
					g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), B.event.global[c] = !0
				}
				e = null
			}
		},
		global: {},
		remove: function(e, t, n, r, i) {
			var s = B.hasData(e) && B._data(e),
				o, u, a, f, l, c, h, p, d, v, m, g;
			if ( !! s && !! (p = s.events)) {
				t = B.trim(ut(t || "")).split(" ");
				for (o = 0; o < t.length; o++) {
					u = Z.exec(t[o]) || [], a = f = u[1], l = u[2];
					if (!a) {
						for (a in p) B.event.remove(e, a + t[o], n, r, !0);
						continue
					}
					d = B.event.special[a] || {}, a = (r ? d.delegateType : d.bindType) || a, m = p[a] || [], c = m.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
					for (h = 0; h < m.length; h++) g = m[h], (i || f === g.origType) && (!n || n.guid === g.guid) && (!l || l.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
					m.length === 0 && c !== m.length && ((!d.teardown || d.teardown.call(e, l) === !1) && B.removeEvent(e, a, s.handle), delete p[a])
				}
				B.isEmptyObject(p) && (v = s.handle, v && (v.elem = null), B.removeData(e, ["events", "handle"], !0))
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(n, r, i, s) {
			if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
				var o = n.type || n,
					u = [],
					a, f, l, c, h, p, d, v, m, g;
				if (rt.test(o + B.event.triggered)) return;
				o.indexOf("!") >= 0 && (o = o.slice(0, -1), f = !0), o.indexOf(".") >= 0 && (u = o.split("."), o = u.shift(), u.sort());
				if ((!i || B.event.customEvent[o]) && !B.event.global[o]) return;
				n = typeof n == "object" ? n[B.expando] ? n : new B.Event(o, n) : new B.Event(o), n.type = o, n.isTrigger = !0, n.exclusive = f, n.namespace = u.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, p = o.indexOf(":") < 0 ? "on" + o : "";
				if (!i) {
					a = B.cache;
					for (l in a) a[l].events && a[l].events[o] && B.event.trigger(n, r, a[l].handle.elem, !0);
					return
				}
				n.result = t, n.target || (n.target = i), r = r != null ? B.makeArray(r) : [], r.unshift(n), d = B.event.special[o] || {};
				if (d.trigger && d.trigger.apply(i, r) === !1) return;
				m = [
					[i, d.bindType || o]
				];
				if (!s && !d.noBubble && !B.isWindow(i)) {
					g = d.delegateType || o, c = rt.test(g + o) ? i : i.parentNode, h = null;
					for (; c; c = c.parentNode) m.push([c, g]), h = c;
					h && h === i.ownerDocument && m.push([h.defaultView || h.parentWindow || e, g])
				}
				for (l = 0; l < m.length && !n.isPropagationStopped(); l++) c = m[l][0], n.type = m[l][1], v = (B._data(c, "events") || {})[n.type] && B._data(c, "handle"), v && v.apply(c, r), v = p && c[p], v && B.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
				return n.type = o, !s && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && (o !== "click" || !B.nodeName(i, "a")) && B.acceptData(i) && p && i[o] && (o !== "focus" && o !== "blur" || n.target.offsetWidth !== 0) && !B.isWindow(i) && (h = i[p], h && (i[p] = null), B.event.triggered = o, i[o](), B.event.triggered = t, h && (i[p] = h)), n.result
			}
		},
		dispatch: function(n) {
			n = B.event.fix(n || e.event);
			var r = (B._data(this, "events") || {})[n.type] || [],
				i = r.delegateCount,
				s = [].slice.call(arguments, 0),
				o = !n.exclusive && !n.namespace,
				u = [],
				a, f, l, c, h, p, d, v, m, g, y;
			s[0] = n, n.delegateTarget = this;
			if (i && !n.target.disabled && (!n.button || n.type !== "click")) {
				c = B(this), c.context = this.ownerDocument || this;
				for (l = n.target; l != this; l = l.parentNode || this) {
					p = {}, v = [], c[0] = l;
					for (a = 0; a < i; a++) m = r[a], g = m.selector, p[g] === t && (p[g] = m.quick ? ot(l, m.quick) : c.is(g)), p[g] && v.push(m);
					v.length && u.push({
						elem: l,
						matches: v
					})
				}
			}
			r.length > i && u.push({
				elem: this,
				matches: r.slice(i)
			});
			for (a = 0; a < u.length && !n.isPropagationStopped(); a++) {
				d = u[a], n.currentTarget = d.elem;
				for (f = 0; f < d.matches.length && !n.isImmediatePropagationStopped(); f++) {
					m = d.matches[f];
					if (o || !n.namespace && !m.namespace || n.namespace_re && n.namespace_re.test(m.namespace)) n.data = m.data, n.handleObj = m, h = ((B.event.special[m.origType] || {}).handle || m.handler).apply(d.elem, s), h !== t && (n.result = h, h === !1 && (n.preventDefault(), n.stopPropagation()))
				}
			}
			return n.result
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, s, o = n.button,
					u = n.fromElement;
				return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || D, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[B.expando]) return e;
			var n, r, i = e,
				s = B.event.fixHooks[e.type] || {},
				o = s.props ? this.props.concat(s.props) : this.props;
			e = B.Event(i);
			for (n = o.length; n;) r = o[--n], e[r] = i[r];
			return e.target || (e.target = i.srcElement || D), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e
		},
		special: {
			ready: {
				setup: B.bindReady
			},
			load: {
				noBubble: !0
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function(e, t, n) {
					B.isWindow(this) && (this.onbeforeunload = n)
				},
				teardown: function(e, t) {
					this.onbeforeunload === t && (this.onbeforeunload = null)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = B.extend(new B.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? B.event.trigger(i, null, t) : B.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, B.event.handle = B.event.dispatch, B.removeEvent = D.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		e.detachEvent && e.detachEvent("on" + t, n)
	}, B.Event = function(e, t) {
		if (!(this instanceof B.Event)) return new B.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? k : L) : this.type = e, t && B.extend(this, t), this.timeStamp = e && e.timeStamp || B.now(), this[B.expando] = !0
	}, B.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = k;
			var e = this.originalEvent;
			!e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = k;
			var e = this.originalEvent;
			!e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = k, this.stopPropagation()
		},
		isDefaultPrevented: L,
		isPropagationStopped: L,
		isImmediatePropagationStopped: L
	}, B.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		B.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n = this,
					r = e.relatedTarget,
					i = e.handleObj,
					s = i.selector,
					o;
				if (!r || r !== n && !B.contains(n, r)) e.type = i.origType, o = i.handler.apply(this, arguments), e.type = t;
				return o
			}
		}
	}), B.support.submitBubbles || (B.event.special.submit = {
		setup: function() {
			if (B.nodeName(this, "form")) return !1;
			B.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = B.nodeName(n, "input") || B.nodeName(n, "button") ? n.form : t;
				r && !r._submit_attached && (B.event.add(r, "submit._submit", function(e) {
					this.parentNode && !e.isTrigger && B.event.simulate("submit", this.parentNode, e, !0)
				}), r._submit_attached = !0)
			})
		},
		teardown: function() {
			if (B.nodeName(this, "form")) return !1;
			B.event.remove(this, "._submit")
		}
	}), B.support.changeBubbles || (B.event.special.change = {
		setup: function() {
			if (Y.test(this.nodeName)) {
				if (this.type === "checkbox" || this.type === "radio") B.event.add(this, "propertychange._change", function(e) {
					e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
				}), B.event.add(this, "click._change", function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1, B.event.simulate("change", this, e, !0))
				});
				return !1
			}
			B.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Y.test(t.nodeName) && !t._change_attached && (B.event.add(t, "change._change", function(e) {
					this.parentNode && !e.isSimulated && !e.isTrigger && B.event.simulate("change", this.parentNode, e, !0)
				}), t._change_attached = !0)
			})
		},
		handle: function(e) {
			var t = e.target;
			if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return B.event.remove(this, "._change"), Y.test(this.nodeName)
		}
	}), B.support.focusinBubbles || B.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				B.event.simulate(t, e.target, B.event.fix(e), !0)
			};
		B.event.special[t] = {
			setup: function() {
				n++ === 0 && D.addEventListener(e, r, !0)
			},
			teardown: function() {
				--n === 0 && D.removeEventListener(e, r, !0)
			}
		}
	}), B.fn.extend({
		on: function(e, n, r, i, s) {
			var o, u;
			if (typeof e == "object") {
				typeof n != "string" && (r = n, n = t);
				for (u in e) this.on(u, n, r, e[u], s);
				return this
			}
			r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
			if (i === !1) i = L;
			else if (!i) return this;
			return s === 1 && (o = i, i = function(e) {
				return B().off(e), o.apply(this, arguments)
			}, i.guid = o.guid || (o.guid = B.guid++)), this.each(function() {
				B.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on.call(this, e, t, n, r, 1)
		},
		off: function(e, n, r) {
			if (e && e.preventDefault && e.handleObj) {
				var i = e.handleObj;
				return B(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
			}
			if (typeof e == "object") {
				for (var s in e) this.off(s, n, e[s]);
				return this
			}
			if (n === !1 || typeof n == "function") r = n, n = t;
			return r === !1 && (r = L), this.each(function() {
				B.event.remove(this, e, r, n)
			})
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		live: function(e, t, n) {
			return B(this.context).on(e, this.selector, t, n), this
		},
		die: function(e, t) {
			return B(this.context).off(e, this.selector || "**", t), this
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
		},
		trigger: function(e, t) {
			return this.each(function() {
				B.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			if (this[0]) return B.event.trigger(e, t, this[0], !0)
		},
		toggle: function(e) {
			var t = arguments,
				n = e.guid || B.guid++,
				r = 0,
				i = function(n) {
					var i = (B._data(this, "lastToggle" + e.guid) || 0) % r;
					return B._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
				};
			i.guid = n;
			while (r < t.length) t[r++].guid = n;
			return this.click(i)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), B.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		B.fn[t] = function(e, n) {
			return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}, B.attrFn && (B.attrFn[t] = !0), tt.test(t) && (B.event.fixHooks[t] = B.event.keyHooks), nt.test(t) && (B.event.fixHooks[t] = B.event.mouseHooks)
	}), function() {
		function e(e, t, n, r, s, o) {
			for (var u = 0, a = r.length; u < a; u++) {
				var f = r[u];
				if (f) {
					var l = !1;
					f = f[e];
					while (f) {
						if (f[i] === n) {
							l = r[f.sizset];
							break
						}
						if (f.nodeType === 1) {
							o || (f[i] = n, f.sizset = u);
							if (typeof t != "string") {
								if (f === t) {
									l = !0;
									break
								}
							} else if (h.filter(t, [f]).length > 0) {
								l = f;
								break
							}
						}
						f = f[e]
					}
					r[u] = l
				}
			}
		}
		function n(e, t, n, r, s, o) {
			for (var u = 0, a = r.length; u < a; u++) {
				var f = r[u];
				if (f) {
					var l = !1;
					f = f[e];
					while (f) {
						if (f[i] === n) {
							l = r[f.sizset];
							break
						}
						f.nodeType === 1 && !o && (f[i] = n, f.sizset = u);
						if (f.nodeName.toLowerCase() === t) {
							l = f;
							break
						}
						f = f[e]
					}
					r[u] = l
				}
			}
		}
		var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			i = "sizcache" + (Math.random() + "").replace(".", ""),
			s = 0,
			o = Object.prototype.toString,
			u = !1,
			a = !0,
			f = /\\/g,
			l = /\r\n/g,
			c = /\W/;
		[0, 0].sort(function() {
			return a = !1, 0
		});
		var h = function(e, t, n, i) {
				n = n || [], t = t || D;
				var s = t;
				if (t.nodeType !== 1 && t.nodeType !== 9) return [];
				if (!e || typeof e != "string") return n;
				var u, a, f, l, c, p, m, g, b = !0,
					w = h.isXML(t),
					E = [],
					x = e;
				do {
					r.exec(""), u = r.exec(x);
					if (u) {
						x = u[3], E.push(u[1]);
						if (u[2]) {
							l = u[3];
							break
						}
					}
				} while (u);
				if (E.length > 1 && v.exec(e)) if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i);
				else {
					a = d.relative[E[0]] ? [t] : h(E.shift(), t);
					while (E.length) e = E.shift(), d.relative[e] && (e += E.shift()), a = S(e, a, i)
				} else {
					!i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && (c = h.find(E.shift(), t, w), t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]);
					if (t) {
						c = i ? {
							expr: E.pop(),
							set: y(i)
						} : h.find(E.pop(), E.length !== 1 || E[0] !== "~" && E[0] !== "+" || !t.parentNode ? t : t.parentNode, w), a = c.expr ? h.filter(c.expr, c.set) : c.set, E.length > 0 ? f = y(a) : b = !1;
						while (E.length) p = E.pop(), m = p, d.relative[p] ? m = E.pop() : p = "", m == null && (m = t), d.relative[p](f, m, w)
					} else f = E = []
				}
				f || (f = a), f || h.error(p || e);
				if (o.call(f) === "[object Array]") if (!b) n.push.apply(n, f);
				else if (t && t.nodeType === 1) for (g = 0; f[g] != null; g++) f[g] && (f[g] === !0 || f[g].nodeType === 1 && h.contains(t, f[g])) && n.push(a[g]);
				else for (g = 0; f[g] != null; g++) f[g] && f[g].nodeType === 1 && n.push(a[g]);
				else y(f, n);
				return l && (h(l, s, n, i), h.uniqueSort(n)), n
			};
		h.uniqueSort = function(e) {
			if (w) {
				u = a, e.sort(w);
				if (u) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
			}
			return e
		}, h.matches = function(e, t) {
			return h(e, null, null, t)
		}, h.matchesSelector = function(e, t) {
			return h(t, null, null, [e]).length > 0
		}, h.find = function(e, t, n) {
			var r, i, s, o, u, a;
			if (!e) return [];
			for (i = 0, s = d.order.length; i < s; i++) {
				u = d.order[i];
				if (o = d.leftMatch[u].exec(e)) {
					a = o[1], o.splice(1, 1);
					if (a.substr(a.length - 1) !== "\\") {
						o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
						if (r != null) {
							e = e.replace(d.match[u], "");
							break
						}
					}
				}
			}
			return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
				set: r,
				expr: e
			}
		}, h.filter = function(e, n, r, i) {
			var s, o, u, a, f, l, c, p, v, m = e,
				g = [],
				y = n,
				b = n && n[0] && h.isXML(n[0]);
			while (e && n.length) {
				for (u in d.filter) if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
					l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
					if (c.substr(c.length - 1) === "\\") continue;
					y === g && (g = []);
					if (d.preFilter[u]) {
						s = d.preFilter[u](s, y, r, g, i, b);
						if (!s) o = a = !0;
						else if (s === !0) continue
					}
					if (s) for (p = 0;
					(f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
					if (a !== t) {
						r || (y = g), e = e.replace(d.match[u], "");
						if (!o) return [];
						break
					}
				}
				if (e === m) {
					if (o != null) break;
					h.error(e)
				}
				m = e
			}
			return y
		}, h.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		};
		var p = h.getText = function(e) {
				var t, n, r = e.nodeType,
					i = "";
				if (r) {
					if (r === 1 || r === 9) {
						if (typeof e.textContent == "string") return e.textContent;
						if (typeof e.innerText == "string") return e.innerText.replace(l, "");
						for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
					} else if (r === 3 || r === 4) return e.nodeValue
				} else for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
				return i
			},
			d = h.selectors = {
				order: ["ID", "NAME", "TAG"],
				match: {
					ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
					NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
					ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
					TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
					CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
					POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
					PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
				},
				leftMatch: {},
				attrMap: {
					"class": "className",
					"for": "htmlFor"
				},
				attrHandle: {
					href: function(e) {
						return e.getAttribute("href")
					},
					type: function(e) {
						return e.getAttribute("type")
					}
				},
				relative: {
					"+": function(e, t) {
						var n = typeof t == "string",
							r = n && !c.test(t),
							i = n && !r;
						r && (t = t.toLowerCase());
						for (var s = 0, o = e.length, u; s < o; s++) if (u = e[s]) {
							while ((u = u.previousSibling) && u.nodeType !== 1);
							e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
						}
						i && h.filter(t, e, !0)
					},
					">": function(e, t) {
						var n, r = typeof t == "string",
							i = 0,
							s = e.length;
						if (r && !c.test(t)) {
							t = t.toLowerCase();
							for (; i < s; i++) {
								n = e[i];
								if (n) {
									var o = n.parentNode;
									e[i] = o.nodeName.toLowerCase() === t ? o : !1
								}
							}
						} else {
							for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
							r && h.filter(t, e, !0)
						}
					},
					"": function(t, r, i) {
						var o, u = s++,
							a = e;
						typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("parentNode", r, u, t, o, i)
					},
					"~": function(t, r, i) {
						var o, u = s++,
							a = e;
						typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("previousSibling", r, u, t, o, i)
					}
				},
				find: {
					ID: function(e, t, n) {
						if (typeof t.getElementById != "undefined" && !n) {
							var r = t.getElementById(e[1]);
							return r && r.parentNode ? [r] : []
						}
					},
					NAME: function(e, t) {
						if (typeof t.getElementsByName != "undefined") {
							var n = [],
								r = t.getElementsByName(e[1]);
							for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
							return n.length === 0 ? null : n
						}
					},
					TAG: function(e, t) {
						if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
					}
				},
				preFilter: {
					CLASS: function(e, t, n, r, i, s) {
						e = " " + e[1].replace(f, "") + " ";
						if (s) return e;
						for (var o = 0, u;
						(u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
						return !1
					},
					ID: function(e) {
						return e[1].replace(f, "")
					},
					TAG: function(e, t) {
						return e[1].replace(f, "").toLowerCase()
					},
					CHILD: function(e) {
						if (e[1] === "nth") {
							e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
							var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
							e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
						} else e[2] && h.error(e[0]);
						return e[0] = s++, e
					},
					ATTR: function(e, t, n, r, i, s) {
						var o = e[1] = e[1].replace(f, "");
						return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
					},
					PSEUDO: function(e, t, n, i, s) {
						if (e[1] === "not") {
							if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
								var o = h.filter(e[3], t, n, !0 ^ s);
								return n || i.push.apply(i, o), !1
							}
							e[3] = h(e[3], null, null, t)
						} else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
						return e
					},
					POS: function(e) {
						return e.unshift(!0), e
					}
				},
				filters: {
					enabled: function(e) {
						return e.disabled === !1 && e.type !== "hidden"
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						return e.checked === !0
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					parent: function(e) {
						return !!e.firstChild
					},
					empty: function(e) {
						return !e.firstChild
					},
					has: function(e, t, n) {
						return !!h(n[3], e).length
					},
					header: function(e) {
						return /h\d/i.test(e.nodeName)
					},
					text: function(e) {
						var t = e.getAttribute("type"),
							n = e.type;
						return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
					},
					radio: function(e) {
						return e.nodeName.toLowerCase() === "input" && "radio" === e.type
					},
					checkbox: function(e) {
						return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
					},
					file: function(e) {
						return e.nodeName.toLowerCase() === "input" && "file" === e.type
					},
					password: function(e) {
						return e.nodeName.toLowerCase() === "input" && "password" === e.type
					},
					submit: function(e) {
						var t = e.nodeName.toLowerCase();
						return (t === "input" || t === "button") && "submit" === e.type
					},
					image: function(e) {
						return e.nodeName.toLowerCase() === "input" && "image" === e.type
					},
					reset: function(e) {
						var t = e.nodeName.toLowerCase();
						return (t === "input" || t === "button") && "reset" === e.type
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return t === "input" && "button" === e.type || t === "button"
					},
					input: function(e) {
						return /input|select|textarea|button/i.test(e.nodeName)
					},
					focus: function(e) {
						return e === e.ownerDocument.activeElement
					}
				},
				setFilters: {
					first: function(e, t) {
						return t === 0
					},
					last: function(e, t, n, r) {
						return t === r.length - 1
					},
					even: function(e, t) {
						return t % 2 === 0
					},
					odd: function(e, t) {
						return t % 2 === 1
					},
					lt: function(e, t, n) {
						return t < n[3] - 0
					},
					gt: function(e, t, n) {
						return t > n[3] - 0
					},
					nth: function(e, t, n) {
						return n[3] - 0 === t
					},
					eq: function(e, t, n) {
						return n[3] - 0 === t
					}
				},
				filter: {
					PSEUDO: function(e, t, n, r) {
						var i = t[1],
							s = d.filters[i];
						if (s) return s(e, n, t, r);
						if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
						if (i === "not") {
							var o = t[3];
							for (var u = 0, a = o.length; u < a; u++) if (o[u] === e) return !1;
							return !0
						}
						h.error(i)
					},
					CHILD: function(e, t) {
						var n, r, s, o, u, a, f, l = t[1],
							c = e;
						switch (l) {
						case "only":
						case "first":
							while (c = c.previousSibling) if (c.nodeType === 1) return !1;
							if (l === "first") return !0;
							c = e;
						case "last":
							while (c = c.nextSibling) if (c.nodeType === 1) return !1;
							return !0;
						case "nth":
							n = t[2], r = t[3];
							if (n === 1 && r === 0) return !0;
							s = t[0], o = e.parentNode;
							if (o && (o[i] !== s || !e.nodeIndex)) {
								a = 0;
								for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
								o[i] = s
							}
							return f = e.nodeIndex - r, n === 0 ? f === 0 : f % n === 0 && f / n >= 0
						}
					},
					ID: function(e, t) {
						return e.nodeType === 1 && e.getAttribute("id") === t
					},
					TAG: function(e, t) {
						return t === "*" && e.nodeType === 1 || !! e.nodeName && e.nodeName.toLowerCase() === t
					},
					CLASS: function(e, t) {
						return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
					},
					ATTR: function(e, t) {
						var n = t[1],
							r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
							i = r + "",
							s = t[2],
							o = t[4];
						return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
					},
					POS: function(e, t, n, r) {
						var i = t[2],
							s = d.setFilters[i];
						if (s) return s(e, n, t, r)
					}
				}
			},
			v = d.match.POS,
			m = function(e, t) {
				return "\\" + (t - 0 + 1)
			};
		for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
		var y = function(e, t) {
				return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
			};
		try {
			Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType
		} catch (b) {
			y = function(e, t) {
				var n = 0,
					r = t || [];
				if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
				else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]);
				else for (; e[n]; n++) r.push(e[n]);
				return r
			}
		}
		var w, E;
		D.documentElement.compareDocumentPosition ? w = function(e, t) {
			return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
		} : (w = function(e, t) {
			if (e === t) return u = !0, 0;
			if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
			var n, r, i = [],
				s = [],
				o = e.parentNode,
				a = t.parentNode,
				f = o;
			if (o === a) return E(e, t);
			if (!o) return -1;
			if (!a) return 1;
			while (f) i.unshift(f), f = f.parentNode;
			f = a;
			while (f) s.unshift(f), f = f.parentNode;
			n = i.length, r = s.length;
			for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return E(i[l], s[l]);
			return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
		}, E = function(e, t, n) {
			if (e === t) return n;
			var r = e.nextSibling;
			while (r) {
				if (r === t) return -1;
				r = r.nextSibling
			}
			return 1
		}), function() {
			var e = D.createElement("div"),
				n = "script" + (new Date).getTime(),
				r = D.documentElement;
			e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), D.getElementById(n) && (d.find.ID = function(e, n, r) {
				if (typeof n.getElementById != "undefined" && !r) {
					var i = n.getElementById(e[1]);
					return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
				}
			}, d.filter.ID = function(e, t) {
				var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
				return e.nodeType === 1 && n && n.nodeValue === t
			}), r.removeChild(e), r = e = null
		}(), function() {
			var e = D.createElement("div");
			e.appendChild(D.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function(e, t) {
				var n = t.getElementsByTagName(e[1]);
				if (e[1] === "*") {
					var r = [];
					for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
					n = r
				}
				return n
			}), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function(e) {
				return e.getAttribute("href", 2)
			}), e = null
		}(), D.querySelectorAll &&
		function() {
			var e = h,
				t = D.createElement("div"),
				n = "__sizzle__";
			t.innerHTML = "<p class='TEST'></p>";
			if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
				h = function(t, r, i, s) {
					r = r || D;
					if (!s && !h.isXML(r)) {
						var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
						if (o && (r.nodeType === 1 || r.nodeType === 9)) {
							if (o[1]) return y(r.getElementsByTagName(t), i);
							if (o[2] && d.find.CLASS && r.getElementsByClassName) return y(r.getElementsByClassName(o[2]), i)
						}
						if (r.nodeType === 9) {
							if (t === "body" && r.body) return y([r.body], i);
							if (o && o[3]) {
								var u = r.getElementById(o[3]);
								if (!u || !u.parentNode) return y([], i);
								if (u.id === o[3]) return y([u], i)
							}
							try {
								return y(r.querySelectorAll(t), i)
							} catch (a) {}
						} else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
							var f = r,
								l = r.getAttribute("id"),
								c = l || n,
								p = r.parentNode,
								v = /^\s*[+~]/.test(t);
							l ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), v && p && (r = r.parentNode);
							try {
								if (!v || p) return y(r.querySelectorAll("[id='" + c + "'] " + t), i)
							} catch (m) {} finally {
								l || f.removeAttribute("id")
							}
						}
					}
					return e(t, r, i, s)
				};
				for (var r in e) h[r] = e[r];
				t = null
			}
		}(), function() {
			var e = D.documentElement,
				t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
			if (t) {
				var n = !t.call(D.createElement("div"), "div"),
					r = !1;
				try {
					t.call(D.documentElement, "[test!='']:sizzle")
				} catch (i) {
					r = !0
				}
				h.matchesSelector = function(e, i) {
					i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!h.isXML(e)) try {
						if (r || !d.match.PSEUDO.test(i) && !/!=/.test(i)) {
							var s = t.call(e, i);
							if (s || !n || e.document && e.document.nodeType !== 11) return s
						}
					} catch (o) {}
					return h(i, null, null, [e]).length > 0
				}
			}
		}(), function() {
			var e = D.createElement("div");
			e.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if ( !! e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
				e.lastChild.className = "e";
				if (e.getElementsByClassName("e").length === 1) return;
				d.order.splice(1, 0, "CLASS"), d.find.CLASS = function(e, t, n) {
					if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
				}, e = null
			}
		}(), D.documentElement.contains ? h.contains = function(e, t) {
			return e !== t && (e.contains ? e.contains(t) : !0)
		} : D.documentElement.compareDocumentPosition ? h.contains = function(e, t) {
			return !!(e.compareDocumentPosition(t) & 16)
		} : h.contains = function() {
			return !1
		}, h.isXML = function(e) {
			var t = (e ? e.ownerDocument || e : 0).documentElement;
			return t ? t.nodeName !== "HTML" : !1
		};
		var S = function(e, t, n) {
				var r, i = [],
					s = "",
					o = t.nodeType ? [t] : t;
				while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
				e = d.relative[e] ? e + "*" : e;
				for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
				return h.filter(s, i)
			};
		h.attr = B.attr, h.selectors.attrMap = {}, B.find = h, B.expr = h.selectors, B.expr[":"] = B.expr.filters, B.unique = h.uniqueSort, B.text = h.getText, B.isXMLDoc = h.isXML, B.contains = h.contains
	}();
	var at = /Until$/,
		ft = /^(?:parents|prevUntil|prevAll)/,
		lt = /,/,
		ct = /^.[^:#\[\.,]*$/,
		ht = Array.prototype.slice,
		pt = B.expr.match.POS,
		dt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	B.fn.extend({
		find: function(e) {
			var t = this,
				n, r;
			if (typeof e != "string") return B(e).filter(function() {
				for (n = 0, r = t.length; n < r; n++) if (B.contains(t[n], this)) return !0
			});
			var i = this.pushStack("", "find", e),
				s, o, u;
			for (n = 0, r = this.length; n < r; n++) {
				s = i.length, B.find(e, this[n], i);
				if (n > 0) for (o = s; o < i.length; o++) for (u = 0; u < s; u++) if (i[u] === i[o]) {
					i.splice(o--, 1);
					break
				}
			}
			return i
		},
		has: function(e) {
			var t = B(e);
			return this.filter(function() {
				for (var e = 0, n = t.length; e < n; e++) if (B.contains(this, t[e])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(N(this, e, !1), "not", e)
		},
		filter: function(e) {
			return this.pushStack(N(this, e, !0), "filter", e)
		},
		is: function(e) {
			return !!e && (typeof e == "string" ? pt.test(e) ? B(e, this.context).index(this[0]) >= 0 : B.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			var n = [],
				r, i, s = this[0];
			if (B.isArray(e)) {
				var o = 1;
				while (s && s.ownerDocument && s !== t) {
					for (r = 0; r < e.length; r++) B(s).is(e[r]) && n.push({
						selector: e[r],
						elem: s,
						level: o
					});
					s = s.parentNode, o++
				}
				return n
			}
			var u = pt.test(e) || typeof e != "string" ? B(e, t || this.context) : 0;
			for (r = 0, i = this.length; r < i; r++) {
				s = this[r];
				while (s) {
					if (u ? u.index(s) > -1 : B.find.matchesSelector(s, e)) {
						n.push(s);
						break
					}
					s = s.parentNode;
					if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break
				}
			}
			return n = n.length > 1 ? B.unique(n) : n, this.pushStack(n, "closest", e)
		},
		index: function(e) {
			return e ? typeof e == "string" ? B.inArray(this[0], B(e)) : B.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(e, t) {
			var n = typeof e == "string" ? B(e, t) : B.makeArray(e && e.nodeType ? [e] : e),
				r = B.merge(this.get(), n);
			return this.pushStack(C(n[0]) || C(r[0]) ? r : B.unique(r))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), B.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && t.nodeType !== 11 ? t : null
		},
		parents: function(e) {
			return B.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return B.dir(e, "parentNode", n)
		},
		next: function(e) {
			return B.nth(e, 2, "nextSibling")
		},
		prev: function(e) {
			return B.nth(e, 2, "previousSibling")
		},
		nextAll: function(e) {
			return B.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return B.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return B.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return B.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return B.sibling(e.parentNode.firstChild, e)
		},
		children: function(e) {
			return B.sibling(e.firstChild)
		},
		contents: function(e) {
			return B.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : B.makeArray(e.childNodes)
		}
	}, function(e, t) {
		B.fn[e] = function(n, r) {
			var i = B.map(this, t, n);
			return at.test(e) || (r = n), r && typeof r == "string" && (i = B.filter(r, i)), i = this.length > 1 && !dt[e] ? B.unique(i) : i, (this.length > 1 || lt.test(r)) && ft.test(e) && (i = i.reverse()), this.pushStack(i, e, ht.call(arguments).join(","))
		}
	}), B.extend({
		filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"), t.length === 1 ? B.find.matchesSelector(t[0], e) ? [t[0]] : [] : B.find.matches(e, t)
		},
		dir: function(e, n, r) {
			var i = [],
				s = e[n];
			while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !B(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
			return i
		},
		nth: function(e, t, n, r) {
			t = t || 1;
			var i = 0;
			for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
			return e
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n
		}
	});
	var vt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		mt = / jQuery\d+="(?:\d+|null)"/g,
		gt = /^\s+/,
		yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		bt = /<([\w:]+)/,
		wt = /<tbody/i,
		Et = /<|&#?\w+;/,
		St = /<(?:script|style)/i,
		xt = /<(?:script|object|embed|option|style)/i,
		Tt = new RegExp("<(?:" + vt + ")", "i"),
		Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ct = /\/(java|ecma)script/i,
		kt = /^\s*<!(?:\[CDATA\[|\-\-)/,
		Lt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		At = T(D);
	Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, B.support.htmlSerialize || (Lt._default = [1, "div<div>", "</div>"]), B.fn.extend({
		text: function(e) {
			return B.isFunction(e) ? this.each(function(t) {
				var n = B(this);
				n.text(e.call(this, t, n.text()))
			}) : typeof e != "object" && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(e)) : B.text(this)
		},
		wrapAll: function(e) {
			if (B.isFunction(e)) return this.each(function(t) {
				B(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return B.isFunction(e) ? this.each(function(t) {
				B(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = B(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = B.isFunction(e);
			return this.each(function(n) {
				B(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				B.nodeName(this, "body") || B(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(e) {
				this.nodeType === 1 && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(e) {
				this.nodeType === 1 && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
				this.parentNode.insertBefore(e, this)
			});
			if (arguments.length) {
				var e = B.clean(arguments);
				return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
				this.parentNode.insertBefore(e, this.nextSibling)
			});
			if (arguments.length) {
				var e = this.pushStack(this, "after", arguments);
				return e.push.apply(e, B.clean(arguments)), e
			}
		},
		remove: function(e, t) {
			for (var n = 0, r;
			(r = this[n]) != null; n++) if (!e || B.filter(e, [r]).length)!t && r.nodeType === 1 && (B.cleanData(r.getElementsByTagName("*")), B.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
			return this
		},
		empty: function() {
			for (var e = 0, t;
			(t = this[e]) != null; e++) {
				t.nodeType === 1 && B.cleanData(t.getElementsByTagName("*"));
				while (t.firstChild) t.removeChild(t.firstChild)
			}
			return this
		},
		clone: function(e, t) {
			return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
				return B.clone(this, e, t)
			})
		},
		html: function(e) {
			if (e === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(mt, "") : null;
			if (typeof e == "string" && !St.test(e) && (B.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
				e = e.replace(yt, "<$1></$2>");
				try {
					for (var n = 0, r = this.length; n < r; n++) this[n].nodeType === 1 && (B.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
				} catch (i) {
					this.empty().append(e)
				}
			} else B.isFunction(e) ? this.each(function(t) {
				var n = B(this);
				n.html(e.call(this, t, n.html()))
			}) : this.empty().append(e);
			return this
		},
		replaceWith: function(e) {
			return this[0] && this[0].parentNode ? B.isFunction(e) ? this.each(function(t) {
				var n = B(this),
					r = n.html();
				n.replaceWith(e.call(this, t, r))
			}) : (typeof e != "string" && (e = B(e).detach()), this.each(function() {
				var t = this.nextSibling,
					n = this.parentNode;
				B(this).remove(), t ? B(t).before(e) : B(n).append(e)
			})) : this.length ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e) : this
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, r) {
			var i, s, o, u, a = e[0],
				f = [];
			if (!B.support.checkClone && arguments.length === 3 && typeof a == "string" && Nt.test(a)) return this.each(function() {
				B(this).domManip(e, n, r, !0)
			});
			if (B.isFunction(a)) return this.each(function(i) {
				var s = B(this);
				e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
			});
			if (this[0]) {
				u = a && a.parentNode, B.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {
					fragment: u
				} : i = B.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
				if (s) {
					n = n && B.nodeName(s, "tr");
					for (var l = 0, c = this.length, h = c - 1; l < c; l++) r.call(n ? x(this[l], s) : this[l], i.cacheable || c > 1 && l < h ? B.clone(o, !0, !0) : o)
				}
				f.length && B.each(f, m)
			}
			return this
		}
	}), B.buildFragment = function(e, t, n) {
		var r, i, s, o, u = e[0];
		return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = D), e.length === 1 && typeof u == "string" && u.length < 512 && o === D && u.charAt(0) === "<" && !xt.test(u) && (B.support.checkClone || !Nt.test(u)) && (B.support.html5Clone || !Tt.test(u)) && (i = !0, s = B.fragments[u], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), B.clean(e, o, r, n)), i && (B.fragments[u] = s ? r : 1), {
			fragment: r,
			cacheable: i
		}
	}, B.fragments = {}, B.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		B.fn[e] = function(n) {
			var r = [],
				i = B(n),
				s = this.length === 1 && this[0].parentNode;
			if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
			for (var o = 0, u = i.length; o < u; o++) {
				var a = (o > 0 ? this.clone(!0) : this).get();
				B(i[o])[t](a), r = r.concat(a)
			}
			return this.pushStack(r, e, i.selector)
		}
	}), B.extend({
		clone: function(e, t, n) {
			var r, i, s, o = B.support.html5Clone || !Tt.test("<" + e.nodeName) ? e.cloneNode(!0) : g(e);
			if ((!B.support.noCloneEvent || !B.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !B.isXMLDoc(e)) {
				E(e, o), r = w(e), i = w(o);
				for (s = 0; r[s]; ++s) i[s] && E(r[s], i[s])
			}
			if (t) {
				S(e, o);
				if (n) {
					r = w(e), i = w(o);
					for (s = 0; r[s]; ++s) S(r[s], i[s])
				}
			}
			return r = i = null, o
		},
		clean: function(e, t, n, r) {
			var i;
			t = t || D, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || D);
			var s = [],
				o;
			for (var u = 0, a;
			(a = e[u]) != null; u++) {
				typeof a == "number" && (a += "");
				if (!a) continue;
				if (typeof a == "string") if (!Et.test(a)) a = t.createTextNode(a);
				else {
					a = a.replace(yt, "<$1></$2>");
					var f = (bt.exec(a) || ["", ""])[1].toLowerCase(),
						l = Lt[f] || Lt._default,
						c = l[0],
						h = t.createElement("div");
					t === D ? At.appendChild(h) : T(t).appendChild(h), h.innerHTML = l[1] + a + l[2];
					while (c--) h = h.lastChild;
					if (!B.support.tbody) {
						var p = wt.test(a),
							d = f === "table" && !p ? h.firstChild && h.firstChild.childNodes : l[1] === "<table>" && !p ? h.childNodes : [];
						for (o = d.length - 1; o >= 0; --o) B.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o])
					}!B.support.leadingWhitespace && gt.test(a) && h.insertBefore(t.createTextNode(gt.exec(a)[0]), h.firstChild), a = h.childNodes
				}
				var v;
				if (!B.support.appendChecked) if (a[0] && typeof(v = a.length) == "number") for (o = 0; o < v; o++) y(a[o]);
				else y(a);
				a.nodeType ? s.push(a) : s = B.merge(s, a)
			}
			if (n) {
				i = function(e) {
					return !e.type || Ct.test(e.type)
				};
				for (u = 0; s[u]; u++) if (r && B.nodeName(s[u], "script") && (!s[u].type || s[u].type.toLowerCase() === "text/javascript")) r.push(s[u].parentNode ? s[u].parentNode.removeChild(s[u]) : s[u]);
				else {
					if (s[u].nodeType === 1) {
						var m = B.grep(s[u].getElementsByTagName("script"), i);
						s.splice.apply(s, [u + 1, 0].concat(m))
					}
					n.appendChild(s[u])
				}
			}
			return s
		},
		cleanData: function(e) {
			var t, n, r = B.cache,
				i = B.event.special,
				s = B.support.deleteExpando;
			for (var o = 0, u;
			(u = e[o]) != null; o++) {
				if (u.nodeName && B.noData[u.nodeName.toLowerCase()]) continue;
				n = u[B.expando];
				if (n) {
					t = r[n];
					if (t && t.events) {
						for (var a in t.events) i[a] ? B.event.remove(u, a) : B.removeEvent(u, a, t.handle);
						t.handle && (t.handle.elem = null)
					}
					s ? delete u[B.expando] : u.removeAttribute && u.removeAttribute(B.expando), delete r[n]
				}
			}
		}
	});
	var Ot = /alpha\([^)]*\)/i,
		Mt = /opacity=([^)]*)/,
		_t = /([A-Z]|^ms)/g,
		Dt = /^-?\d+(?:px)?$/i,
		Pt = /^-?\d/,
		Ht = /^([\-+])=([\-+.\de]+)/,
		Bt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		jt = ["Left", "Right"],
		Ft = ["Top", "Bottom"],
		It, qt, Rt;
	B.fn.css = function(e, n) {
		return arguments.length === 2 && n === t ? this : B.access(this, e, n, !0, function(e, n, r) {
			return r !== t ? B.style(e, n, r) : B.css(e, n)
		})
	}, B.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = It(e, "opacity", "opacity");
						return n === "" ? "1" : n
					}
					return e.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": B.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if ( !! e && e.nodeType !== 3 && e.nodeType !== 8 && !! e.style) {
				var s, o, u = B.camelCase(n),
					a = e.style,
					f = B.cssHooks[u];
				n = B.cssProps[u] || u;
				if (r === t) return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
				o = typeof r, o === "string" && (s = Ht.exec(r)) && (r = +(s[1] + 1) * +s[2] + parseFloat(B.css(e, n)), o = "number");
				if (r == null || o === "number" && isNaN(r)) return;
				o === "number" && !B.cssNumber[u] && (r += "px");
				if (!f || !("set" in f) || (r = f.set(e, r)) !== t) try {
					a[n] = r
				} catch (l) {}
			}
		},
		css: function(e, n, r) {
			var i, s;
			n = B.camelCase(n), s = B.cssHooks[n], n = B.cssProps[n] || n, n === "cssFloat" && (n = "float");
			if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
			if (It) return It(e, n)
		},
		swap: function(e, t, n) {
			var r = {};
			for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
			n.call(e);
			for (i in t) e.style[i] = r[i]
		}
	}), B.curCSS = B.css, B.each(["height", "width"], function(e, t) {
		B.cssHooks[t] = {
			get: function(e, n, r) {
				var i;
				if (n) return e.offsetWidth !== 0 ? v(e, t, r) : (B.swap(e, Bt, function() {
					i = v(e, t, r)
				}), i)
			},
			set: function(e, t) {
				if (!Dt.test(t)) return t;
				t = parseFloat(t);
				if (t >= 0) return t + "px"
			}
		}
	}), B.support.opacity || (B.cssHooks.opacity = {
		get: function(e, t) {
			return Mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = B.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
				s = r && r.filter || n.filter || "";
			n.zoom = 1;
			if (t >= 1 && B.trim(s.replace(Ot, "")) === "") {
				n.removeAttribute("filter");
				if (r && !r.filter) return
			}
			n.filter = Ot.test(s) ? s.replace(Ot, i) : s + " " + i
		}
	}), B(function() {
		B.support.reliableMarginRight || (B.cssHooks.marginRight = {
			get: function(e, t) {
				var n;
				return B.swap(e, {
					display: "inline-block"
				}, function() {
					t ? n = It(e, "margin-right", "marginRight") : n = e.style.marginRight
				}), n
			}
		})
	}), D.defaultView && D.defaultView.getComputedStyle && (qt = function(e, t) {
		var n, r, i;
		return t = t.replace(_t, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !B.contains(e.ownerDocument.documentElement, e) && (n = B.style(e, t))), n
	}), D.documentElement.currentStyle && (Rt = function(e, t) {
		var n, r, i, s = e.currentStyle && e.currentStyle[t],
			o = e.style;
		return s === null && o && (i = o[t]) && (s = i), !Dt.test(s) && Pt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s || 0, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s
	}), It = qt || Rt, B.expr && B.expr.filters && (B.expr.filters.hidden = function(e) {
		var t = e.offsetWidth,
			n = e.offsetHeight;
		return t === 0 && n === 0 || !B.support.reliableHiddenOffsets && (e.style && e.style.display || B.css(e, "display")) === "none"
	}, B.expr.filters.visible = function(e) {
		return !B.expr.filters.hidden(e)
	});
	var Ut = /%20/g,
		zt = /\[\]$/,
		Wt = /\r?\n/g,
		Xt = /#.*$/,
		Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		$t = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Jt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		Kt = /^(?:GET|HEAD)$/,
		Qt = /^\/\//,
		Gt = /\?/,
		Yt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Zt = /^(?:select|textarea)/i,
		en = /\s+/,
		tn = /([?&])_=[^&]*/,
		nn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		rn = B.fn.load,
		sn = {},
		on = {},
		un, an, fn = ["*/"] + ["*"];
	try {
		un = H.href
	} catch (ln) {
		un = D.createElement("a"), un.href = "", un = un.href
	}
	an = nn.exec(un.toLowerCase()) || [], B.fn.extend({
		load: function(e, n, r) {
			if (typeof e != "string" && rn) return rn.apply(this, arguments);
			if (!this.length) return this;
			var i = e.indexOf(" ");
			if (i >= 0) {
				var s = e.slice(i, e.length);
				e = e.slice(0, i)
			}
			var o = "GET";
			n && (B.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = B.param(n, B.ajaxSettings.traditional), o = "POST"));
			var u = this;
			return B.ajax({
				url: e,
				type: o,
				dataType: "html",
				data: n,
				complete: function(e, t, n) {
					n = e.responseText, e.isResolved() && (e.done(function(e) {
						n = e
					}), u.html(s ? B("<div>").append(n.replace(Yt, "")).find(s) : n)), r && u.each(r, [n, t, e])
				}
			}), this
		},
		serialize: function() {
			return B.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? B.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Zt.test(this.nodeName) || $t.test(this.type))
			}).map(function(e, t) {
				var n = B(this).val();
				return n == null ? null : B.isArray(n) ? B.map(n, function(e, n) {
					return {
						name: t.name,
						value: e.replace(Wt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Wt, "\r\n")
				}
			}).get()
		}
	}), B.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
		B.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), B.each(["get", "post"], function(e, n) {
		B[n] = function(e, r, i, s) {
			return B.isFunction(r) && (s = s || i, i = r, r = t), B.ajax({
				type: n,
				url: e,
				data: r,
				success: i,
				dataType: s
			})
		}
	}), B.extend({
		getScript: function(e, n) {
			return B.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return B.get(e, t, n, "json")
		},
		ajaxSetup: function(e, t) {
			return t ? h(e, B.ajaxSettings) : (t = e, e = B.ajaxSettings), h(e, t), e
		},
		ajaxSettings: {
			url: un,
			isLocal: Jt.test(an[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": fn
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": B.parseJSON,
				"text xml": B.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: d(sn),
		ajaxTransport: d(on),
		ajax: function(e, n) {
			function r(e, n, r, p) {
				if (E !== 2) {
					E = 2, b && clearTimeout(b), y = t, m = p || "", T.readyState = e > 0 ? 4 : 0;
					var d, v, g, w = n,
						x = r ? l(i, T, r) : t,
						N, C;
					if (e >= 200 && e < 300 || e === 304) {
						if (i.ifModified) {
							if (N = T.getResponseHeader("Last-Modified")) B.lastModified[h] = N;
							if (C = T.getResponseHeader("Etag")) B.etag[h] = C
						}
						if (e === 304) w = "notmodified", d = !0;
						else try {
							v = f(i, x), w = "success", d = !0
						} catch (k) {
							w = "parsererror", g = k
						}
					} else {
						g = w;
						if (!w || e) w = "error", e < 0 && (e = 0)
					}
					T.status = e, T.statusText = "" + (n || w), d ? u.resolveWith(s, [v, w, T]) : u.rejectWith(s, [T, w, g]), T.statusCode(c), c = t, S && o.trigger("ajax" + (d ? "Success" : "Error"), [T, i, d ? v : g]), a.fireWith(s, [T, w]), S && (o.trigger("ajaxComplete", [T, i]), --B.active || B.event.trigger("ajaxStop"))
				}
			}
			typeof e == "object" && (n = e, e = t), n = n || {};
			var i = B.ajaxSetup({}, n),
				s = i.context || i,
				o = s !== i && (s.nodeType || s instanceof B) ? B(s) : B.event,
				u = B.Deferred(),
				a = B.Callbacks("once memory"),
				c = i.statusCode || {},
				h, d = {},
				v = {},
				m, g, y, b, w, E = 0,
				S, x, T = {
					readyState: 0,
					setRequestHeader: function(e, t) {
						if (!E) {
							var n = e.toLowerCase();
							e = v[n] = v[n] || e, d[e] = t
						}
						return this
					},
					getAllResponseHeaders: function() {
						return E === 2 ? m : null
					},
					getResponseHeader: function(e) {
						var n;
						if (E === 2) {
							if (!g) {
								g = {};
								while (n = Vt.exec(m)) g[n[1].toLowerCase()] = n[2]
							}
							n = g[e.toLowerCase()]
						}
						return n === t ? null : n
					},
					overrideMimeType: function(e) {
						return E || (i.mimeType = e), this
					},
					abort: function(e) {
						return e = e || "abort", y && y.abort(e), r(0, e), this
					}
				};
			u.promise(T), T.success = T.done, T.error = T.fail, T.complete = a.add, T.statusCode = function(e) {
				if (e) {
					var t;
					if (E < 2) for (t in e) c[t] = [c[t], e[t]];
					else t = e[T.status], T.then(t, t)
				}
				return this
			}, i.url = ((e || i.url) + "").replace(Xt, "").replace(Qt, an[1] + "//"), i.dataTypes = B.trim(i.dataType || "*").toLowerCase().split(en), i.crossDomain == null && (w = nn.exec(i.url.toLowerCase()), i.crossDomain = !(!w || w[1] == an[1] && w[2] == an[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (an[3] || (an[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = B.param(i.data, i.traditional)), p(sn, i, n, T);
			if (E === 2) return !1;
			S = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Kt.test(i.type), S && B.active++ === 0 && B.event.trigger("ajaxStart");
			if (!i.hasContent) {
				i.data && (i.url += (Gt.test(i.url) ? "&" : "?") + i.data, delete i.data), h = i.url;
				if (i.cache === !1) {
					var N = B.now(),
						C = i.url.replace(tn, "$1_=" + N);
					i.url = C + (C === i.url ? (Gt.test(i.url) ? "&" : "?") + "_=" + N : "")
				}
			}(i.data && i.hasContent && i.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", i.contentType), i.ifModified && (h = h || i.url, B.lastModified[h] && T.setRequestHeader("If-Modified-Since", B.lastModified[h]), B.etag[h] && T.setRequestHeader("If-None-Match", B.etag[h])), T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + fn + "; q=0.01" : "") : i.accepts["*"]);
			for (x in i.headers) T.setRequestHeader(x, i.headers[x]);
			if (!i.beforeSend || i.beforeSend.call(s, T, i) !== !1 && E !== 2) {
				for (x in {
					success: 1,
					error: 1,
					complete: 1
				}) T[x](i[x]);
				y = p(on, i, n, T);
				if (!y) r(-1, "No Transport");
				else {
					T.readyState = 1, S && o.trigger("ajaxSend", [T, i]), i.async && i.timeout > 0 && (b = setTimeout(function() {
						T.abort("timeout")
					}, i.timeout));
					try {
						E = 1, y.send(d, r)
					} catch (k) {
						if (!(E < 2)) throw k;
						r(-1, k)
					}
				}
				return T
			}
			return T.abort(), !1
		},
		param: function(e, n) {
			var r = [],
				i = function(e, t) {
					t = B.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			n === t && (n = B.ajaxSettings.traditional);
			if (B.isArray(e) || e.jquery && !B.isPlainObject(e)) B.each(e, function() {
				i(this.name, this.value)
			});
			else for (var s in e) c(s, e[s], n, i);
			return r.join("&").replace(Ut, "+")
		}
	}), B.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var cn = B.now(),
		hn = /(\=)\?(&|$)|\?\?/i;
	B.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return B.expando + "_" + cn++
		}
	}), B.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
		if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (hn.test(t.url) || i && hn.test(t.data))) {
			var s, o = t.jsonpCallback = B.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
				u = e[o],
				a = t.url,
				f = t.data,
				l = "$1" + o + "$2";
			return t.jsonp !== !1 && (a = a.replace(hn, l), t.url === a && (i && (f = f.replace(hn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function(e) {
				s = [e]
			}, r.always(function() {
				e[o] = u, s && B.isFunction(u) && e[o](s[0])
			}), t.converters["script json"] = function() {
				return s || B.error(o + " was not called"), s[0]
			}, t.dataTypes[0] = "json", "script"
		}
	}), B.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(e) {
				return B.globalEval(e), e
			}
		}
	}), B.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), B.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
			return {
				send: function(i, s) {
					n = D.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
						if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success")
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(0, 1)
				}
			}
		}
	});
	var pn = e.ActiveXObject ?
	function() {
		for (var e in vn) vn[e](0, 1)
	} : !1, dn = 0, vn;
	B.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return !this.isLocal && a() || u()
	} : a, function(e) {
		B.extend(B.support, {
			ajax: !! e,
			cors: !! e && "withCredentials" in e
		})
	}(B.ajaxSettings.xhr()), B.support.ajax && B.ajaxTransport(function(n) {
		if (!n.crossDomain || B.support.cors) {
			var r;
			return {
				send: function(i, s) {
					var o = n.xhr(),
						u, a;
					n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
					if (n.xhrFields) for (a in n.xhrFields) o[a] = n.xhrFields[a];
					n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (a in i) o.setRequestHeader(a, i[a])
					} catch (f) {}
					o.send(n.hasContent && n.data || null), r = function(e, i) {
						var a, f, l, c, h;
						try {
							if (r && (i || o.readyState === 4)) {
								r = t, u && (o.onreadystatechange = B.noop, pn && delete vn[u]);
								if (i) o.readyState !== 4 && o.abort();
								else {
									a = o.status, l = o.getAllResponseHeaders(), c = {}, h = o.responseXML, h && h.documentElement && (c.xml = h), c.text = o.responseText;
									try {
										f = o.statusText
									} catch (p) {
										f = ""
									}!a && n.isLocal && !n.crossDomain ? a = c.text ? 200 : 404 : a === 1223 && (a = 204)
								}
							}
						} catch (d) {
							i || s(-1, d)
						}
						c && s(a, f, c, l)
					}, !n.async || o.readyState === 4 ? r() : (u = ++dn, pn && (vn || (vn = {}, B(e).unload(pn)), vn[u] = r), o.onreadystatechange = r)
				},
				abort: function() {
					r && r(0, 1)
				}
			}
		}
	});
	var mn = {},
		gn, yn, bn = /^(?:toggle|show|hide)$/,
		wn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		En, Sn = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		xn;
	B.fn.extend({
		show: function(e, t, n) {
			var s, o;
			if (e || e === 0) return this.animate(i("show", 3), e, t, n);
			for (var u = 0, a = this.length; u < a; u++) s = this[u], s.style && (o = s.style.display, !B._data(s, "olddisplay") && o === "none" && (o = s.style.display = ""), o === "" && B.css(s, "display") === "none" && B._data(s, "olddisplay", r(s.nodeName)));
			for (u = 0; u < a; u++) {
				s = this[u];
				if (s.style) {
					o = s.style.display;
					if (o === "" || o === "none") s.style.display = B._data(s, "olddisplay") || ""
				}
			}
			return this
		},
		hide: function(e, t, n) {
			if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
			var r, s, o = 0,
				u = this.length;
			for (; o < u; o++) r = this[o], r.style && (s = B.css(r, "display"), s !== "none" && !B._data(r, "olddisplay") && B._data(r, "olddisplay", s));
			for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
			return this
		},
		_toggle: B.fn.toggle,
		toggle: function(e, t, n) {
			var r = typeof e == "boolean";
			return B.isFunction(e) && B.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function() {
				var t = r ? e : B(this).is(":hidden");
				B(this)[t ? "show" : "hide"]()
			}) : this.animate(i("toggle", 3), e, t, n), this
		},
		fadeTo: function(e, t, n, r) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, i) {
			function s() {
				o.queue === !1 && B._mark(this);
				var t = B.extend({}, o),
					n = this.nodeType === 1,
					i = n && B(this).is(":hidden"),
					s, u, a, f, l, c, h, p, d;
				t.animatedProperties = {};
				for (a in e) {
					s = B.camelCase(a), a !== s && (e[s] = e[a], delete e[a]), u = e[s], B.isArray(u) ? (t.animatedProperties[s] = u[1], u = e[s] = u[0]) : t.animatedProperties[s] = t.specialEasing && t.specialEasing[s] || t.easing || "swing";
					if (u === "hide" && i || u === "show" && !i) return t.complete.call(this);
					n && (s === "height" || s === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], B.css(this, "display") === "inline" && B.css(this, "float") === "none" && (!B.support.inlineBlockNeedsLayout || r(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
				}
				t.overflow != null && (this.style.overflow = "hidden");
				for (a in e) f = new B.fx(this, t, a), u = e[a], bn.test(u) ? (d = B._data(this, "toggle" + a) || (u === "toggle" ? i ? "show" : "hide" : 0), d ? (B._data(this, "toggle" + a, d === "show" ? "hide" : "show"), f[d]()) : f[u]()) : (l = wn.exec(u), c = f.cur(), l ? (h = parseFloat(l[2]), p = l[3] || (B.cssNumber[a] ? "" : "px"), p !== "px" && (B.style(this, a, (h || 1) + p), c = (h || 1) / f.cur() * c, B.style(this, a, c + p)), l[1] && (h = (l[1] === "-=" ? -1 : 1) * h + c), f.custom(c, h, p)) : f.custom(c, u, ""));
				return !0
			}
			var o = B.speed(t, n, i);
			return B.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = B.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s))
		},
		stop: function(e, n, r) {
			return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				function t(e, t, n) {
					var i = t[n];
					B.removeData(e, n, !0), i.stop(r)
				}
				var n, i = !1,
					s = B.timers,
					o = B._data(this);
				r || B._unmark(!0, this);
				if (e == null) for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n);
				else o[n = e + ".run"] && o[n].stop && t(this, o, n);
				for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), i = !0, s.splice(n, 1));
				(!r || !i) && B.dequeue(this, e)
			})
		}
	}), B.each({
		slideDown: i("show", 1),
		slideUp: i("hide", 1),
		slideToggle: i("toggle", 1),
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
		B.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), B.extend({
		speed: function(e, t, n) {
			var r = e && typeof e == "object" ? B.extend({}, e) : {
				complete: n || !n && t || B.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !B.isFunction(t) && t
			};
			r.duration = B.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in B.fx.speeds ? B.fx.speeds[r.duration] : B.fx.speeds._default;
			if (r.queue == null || r.queue === !0) r.queue = "fx";
			return r.old = r.complete, r.complete = function(e) {
				B.isFunction(r.old) && r.old.call(this), r.queue ? B.dequeue(this, r.queue) : e !== !1 && B._unmark(this)
			}, r
		},
		easing: {
			linear: function(e, t, n, r) {
				return n + r * e
			},
			swing: function(e, t, n, r) {
				return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
			}
		},
		timers: [],
		fx: function(e, t, n) {
			this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
		}
	}), B.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (B.fx.step[this.prop] || B.fx.step._default)(this)
		},
		cur: function() {
			if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
				var e, t = B.css(this.elem, this.prop);
				return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
			}
			return this.elem[this.prop]
		},
		custom: function(e, n, r) {
			function i(e) {
				return s.step(e)
			}
			var s = this,
				u = B.fx;
			this.startTime = xn || o(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (B.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function() {
				s.options.hide && B._data(s.elem, "fxshow" + s.prop) === t && B._data(s.elem, "fxshow" + s.prop, s.start)
			}, i() && B.timers.push(i) && !En && (En = setInterval(u.tick, u.interval))
		},
		show: function() {
			var e = B._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = e || B.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), B(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = B._data(this.elem, "fxshow" + this.prop) || B.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(e) {
			var t, n, r, i = xn || o(),
				s = !0,
				u = this.elem,
				a = this.options;
			if (e || i >= a.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
				for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (s = !1);
				if (s) {
					a.overflow != null && !B.support.shrinkWrapBlocks && B.each(["", "X", "Y"], function(e, t) {
						u.style["overflow" + t] = a.overflow[e]
					}), a.hide && B(u).hide();
					if (a.hide || a.show) for (t in a.animatedProperties) B.style(u, t, a.orig[t]), B.removeData(u, "fxshow" + t, !0), B.removeData(u, "toggle" + t, !0);
					r = a.complete, r && (a.complete = !1, r.call(u))
				}
				return !1
			}
			return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = B.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
		}
	}, B.extend(B.fx, {
		tick: function() {
			var e, t = B.timers,
				n = 0;
			for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
			t.length || B.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(En), En = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(e) {
				B.style(e.elem, "opacity", e.now)
			},
			_default: function(e) {
				e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
			}
		}
	}), B.each(["width", "height"], function(e, t) {
		B.fx.step[t] = function(e) {
			B.style(e.elem, t, Math.max(0, e.now) + e.unit)
		}
	}), B.expr && B.expr.filters && (B.expr.filters.animated = function(e) {
		return B.grep(B.timers, function(t) {
			return e === t.elem
		}).length
	});
	var Tn = /^t(?:able|d|h)$/i,
		Nn = /^(?:body|html)$/i;
	"getBoundingClientRect" in D.documentElement ? B.fn.offset = function(e) {
		var t = this[0],
			r;
		if (e) return this.each(function(t) {
			B.offset.setOffset(this, e, t)
		});
		if (!t || !t.ownerDocument) return null;
		if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
		try {
			r = t.getBoundingClientRect()
		} catch (i) {}
		var s = t.ownerDocument,
			o = s.documentElement;
		if (!r || !B.contains(o, t)) return r ? {
			top: r.top,
			left: r.left
		} : {
			top: 0,
			left: 0
		};
		var u = s.body,
			a = n(s),
			f = o.clientTop || u.clientTop || 0,
			l = o.clientLeft || u.clientLeft || 0,
			c = a.pageYOffset || B.support.boxModel && o.scrollTop || u.scrollTop,
			h = a.pageXOffset || B.support.boxModel && o.scrollLeft || u.scrollLeft,
			p = r.top + c - f,
			d = r.left + h - l;
		return {
			top: p,
			left: d
		}
	} : B.fn.offset = function(e) {
		var t = this[0];
		if (e) return this.each(function(t) {
			B.offset.setOffset(this, e, t)
		});
		if (!t || !t.ownerDocument) return null;
		if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
		var n, r = t.offsetParent,
			i = t,
			s = t.ownerDocument,
			o = s.documentElement,
			u = s.body,
			a = s.defaultView,
			f = a ? a.getComputedStyle(t, null) : t.currentStyle,
			l = t.offsetTop,
			c = t.offsetLeft;
		while ((t = t.parentNode) && t !== u && t !== o) {
			if (B.support.fixedPosition && f.position === "fixed") break;
			n = a ? a.getComputedStyle(t, null) : t.currentStyle, l -= t.scrollTop, c -= t.scrollLeft, t === r && (l += t.offsetTop, c += t.offsetLeft, B.support.doesNotAddBorder && (!B.support.doesAddBorderForTableAndCells || !Tn.test(t.nodeName)) && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), i = r, r = t.offsetParent), B.support.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), f = n
		}
		if (f.position === "relative" || f.position === "static") l += u.offsetTop, c += u.offsetLeft;
		return B.support.fixedPosition && f.position === "fixed" && (l += Math.max(o.scrollTop, u.scrollTop), c += Math.max(o.scrollLeft, u.scrollLeft)), {
			top: l,
			left: c
		}
	}, B.offset = {
		bodyOffset: function(e) {
			var t = e.offsetTop,
				n = e.offsetLeft;
			return B.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(B.css(e, "marginTop")) || 0, n += parseFloat(B.css(e, "marginLeft")) || 0), {
				top: t,
				left: n
			}
		},
		setOffset: function(e, t, n) {
			var r = B.css(e, "position");
			r === "static" && (e.style.position = "relative");
			var i = B(e),
				s = i.offset(),
				o = B.css(e, "top"),
				u = B.css(e, "left"),
				a = (r === "absolute" || r === "fixed") && B.inArray("auto", [o, u]) > -1,
				f = {},
				l = {},
				c, h;
			a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), B.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
		}
	}, B.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var e = this[0],
				t = this.offsetParent(),
				n = this.offset(),
				r = Nn.test(t[0].nodeName) ? {
					top: 0,
					left: 0
				} : t.offset();
			return n.top -= parseFloat(B.css(e, "marginTop")) || 0, n.left -= parseFloat(B.css(e, "marginLeft")) || 0, r.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0, {
				top: n.top - r.top,
				left: n.left - r.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || D.body;
				while (e && !Nn.test(e.nodeName) && B.css(e, "position") === "static") e = e.offsetParent;
				return e
			})
		}
	}), B.each(["Left", "Top"], function(e, r) {
		var i = "scroll" + r;
		B.fn[i] = function(r) {
			var s, o;
			return r === t ? (s = this[0], s ? (o = n(s), o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : B.support.boxModel && o.document.documentElement[i] || o.document.body[i] : s[i]) : null) : this.each(function() {
				o = n(this), o ? o.scrollTo(e ? B(o).scrollLeft() : r, e ? r : B(o).scrollTop()) : this[i] = r
			})
		}
	}), B.each(["Height", "Width"], function(e, n) {
		var r = n.toLowerCase();
		B.fn["inner" + n] = function() {
			var e = this[0];
			return e ? e.style ? parseFloat(B.css(e, r, "padding")) : this[r]() : null
		}, B.fn["outer" + n] = function(e) {
			var t = this[0];
			return t ? t.style ? parseFloat(B.css(t, r, e ? "margin" : "border")) : this[r]() : null
		}, B.fn[r] = function(e) {
			var i = this[0];
			if (!i) return e == null ? null : this;
			if (B.isFunction(e)) return this.each(function(t) {
				var n = B(this);
				n[r](e.call(this, t, n[r]()))
			});
			if (B.isWindow(i)) {
				var s = i.document.documentElement["client" + n],
					o = i.document.body;
				return i.document.compatMode === "CSS1Compat" && s || o && o["client" + n] || s
			}
			if (i.nodeType === 9) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
			if (e === t) {
				var u = B.css(i, r),
					a = parseFloat(u);
				return B.isNumeric(a) ? a : u
			}
			return this.css(r, typeof e == "string" ? e : e + "px")
		}
	}), e.jQuery = e.$ = B, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return B
	})
})(window), function(e) {
	function t(t) {
		var n = t.handler,
			r = (t.namespace || "").toLowerCase().split(" ");
		if ($(this).attr("ignoreJqueryHotkeys") == "true") return;
		if (r.length === 1 && r[0] === "") return;
		t.handler = function(t) {
			if (!(this === t.target || !/textarea|select/i.test(t.target.nodeName) && t.target.type !== "text" && $(t.target).prop("contenteditable") != "true")) return;
			var i = t.type !== "keypress" && e.hotkeys.specialKeys[t.which],
				s = String.fromCharCode(t.which).toLowerCase(),
				o, u = "",
				a = {};
			t.altKey && i !== "alt" && (u += "alt_"), t.ctrlKey && i !== "ctrl" && (u += "ctrl_"), t.metaKey && !t.ctrlKey && i !== "meta" && (u += "meta_"), t.shiftKey && i !== "shift" && (u += "shift_"), i ? a[u + i] = !0 : (a[u + s] = !0, a[u + e.hotkeys.shiftNums[s]] = !0, u === "shift_" && (a[e.hotkeys.shiftNums[s]] = !0));
			for (var f = 0, l = r.length; f < l; f++) if (a[r[f]]) return n.apply(this, arguments)
		}
	}
	e.hotkeys = {
		version: "0.8+",
		specialKeys: {
			8: "backspace",
			9: "tab",
			13: "return",
			16: "shift",
			17: "ctrl",
			18: "alt",
			19: "pause",
			20: "capslock",
			27: "esc",
			32: "space",
			33: "pageup",
			34: "pagedown",
			35: "end",
			36: "home",
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			45: "insert",
			46: "del",
			96: "0",
			97: "1",
			98: "2",
			99: "3",
			100: "4",
			101: "5",
			102: "6",
			103: "7",
			104: "8",
			105: "9",
			106: "*",
			107: "+",
			109: "-",
			110: ".",
			111: "/",
			112: "f1",
			113: "f2",
			114: "f3",
			115: "f4",
			116: "f5",
			117: "f6",
			118: "f7",
			119: "f8",
			120: "f9",
			121: "f10",
			122: "f11",
			123: "f12",
			144: "numlock",
			145: "scroll",
			188: ",",
			190: ".",
			191: "/",
			224: "meta"
		},
		shiftNums: {
			"`": "~",
			1: "!",
			2: "@",
			3: "#",
			4: "$",
			5: "%",
			6: "^",
			7: "&",
			8: "*",
			9: "(",
			0: ")",
			"-": "_",
			"=": "+",
			";": ": ",
			"'": '"',
			",": "<",
			".": ">",
			"/": "?",
			"\\": "|"
		}
	}, e.each(["keydown", "keyup", "keypress"], function() {
		e.event.special[this] = {
			add: t
		}
	})
}(jQuery), function(e) {
	function r(t) {
		var n = t || window.event,
			r = [].slice.call(arguments, 1),
			i = 0,
			s = !0,
			o = 0,
			u = 0;
		return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle).apply(this, r)
	}
	var t = ["DOMMouseScroll", "mousewheel"];
	if (e.event.fixHooks) for (var n = t.length; n;) e.event.fixHooks[t[--n]] = e.event.mouseHooks;
	e.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var e = t.length; e;) this.addEventListener(t[--e], r, !1);
			else this.onmousewheel = r
		},
		teardown: function() {
			if (this.removeEventListener) for (var e = t.length; e;) this.removeEventListener(t[--e], r, !1);
			else this.onmousewheel = null
		}
	}, e.fn.extend({
		mousewheel: function(e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel: function(e) {
			return this.unbind("mousewheel", e)
		}
	})
}(jQuery), function() {
	function C(e, t, n) {
		if (e === t) return e !== 0 || 1 / e == 1 / t;
		if (e == null || t == null) return e === t;
		e._chain && (e = e._wrapped), t._chain && (t = t._wrapped);
		if (e.isEqual && S.isFunction(e.isEqual)) return e.isEqual(t);
		if (t.isEqual && S.isFunction(t.isEqual)) return t.isEqual(e);
		var r = a.call(e);
		if (r != a.call(t)) return !1;
		switch (r) {
		case "[object String]":
			return e == String(t);
		case "[object Number]":
			return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
		case "[object Date]":
		case "[object Boolean]":
			return +e == +t;
		case "[object RegExp]":
			return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
		}
		if (typeof e != "object" || typeof t != "object") return !1;
		var i = n.length;
		while (i--) if (n[i] == e) return !0;
		n.push(e);
		var s = 0,
			o = !0;
		if (r == "[object Array]") {
			s = e.length, o = s == t.length;
			if (o) while (s--) if (!(o = s in e == s in t && C(e[s], t[s], n))) break
		} else {
			if ("constructor" in e != "constructor" in t || e.constructor != t.constructor) return !1;
			for (var u in e) if (S.has(e, u)) {
				s++;
				if (!(o = S.has(t, u) && C(e[u], t[u], n))) break
			}
			if (o) {
				for (u in t) if (S.has(t, u) && !(s--)) break;
				o = !s
			}
		}
		return n.pop(), o
	}
	var e = this,
		t = e._,
		n = {},
		r = Array.prototype,
		i = Object.prototype,
		s = Function.prototype,
		o = r.slice,
		u = r.unshift,
		a = i.toString,
		f = i.hasOwnProperty,
		l = r.forEach,
		c = r.map,
		h = r.reduce,
		p = r.reduceRight,
		d = r.filter,
		v = r.every,
		m = r.some,
		g = r.indexOf,
		y = r.lastIndexOf,
		b = Array.isArray,
		w = Object.keys,
		E = s.bind,
		S = function(e) {
			return new P(e)
		};
	typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = S), exports._ = S) : e._ = S, S.VERSION = "1.3.3";
	var x = S.each = S.forEach = function(e, t, r) {
			if (e == null) return;
			if (l && e.forEach === l) e.forEach(t, r);
			else if (e.length === +e.length) {
				for (var i = 0, s = e.length; i < s; i++) if (
				i in e && t.call(r, e[i], i, e) === n) return
			} else for (var o in e) if (S.has(e, o) && t.call(r, e[o], o, e) === n) return
		};
	S.map = S.collect = function(e, t, n) {
		var r = [];
		return e == null ? r : c && e.map === c ? e.map(t, n) : (x(e, function(e, i, s) {
			r[r.length] = t.call(n, e, i, s)
		}), e.length === +e.length && (r.length = e.length), r)
	}, S.reduce = S.foldl = S.inject = function(e, t, n, r) {
		var i = arguments.length > 2;
		e == null && (e = []);
		if (h && e.reduce === h) return r && (t = S.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
		x(e, function(e, s, o) {
			i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
		});
		if (!i) throw new TypeError("Reduce of empty array with no initial value");
		return n
	}, S.reduceRight = S.foldr = function(e, t, n, r) {
		var i = arguments.length > 2;
		e == null && (e = []);
		if (p && e.reduceRight === p) return r && (t = S.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
		var s = S.toArray(e).reverse();
		return r && !i && (t = S.bind(t, r)), i ? S.reduce(s, t, n, r) : S.reduce(s, t)
	}, S.find = S.detect = function(e, t, n) {
		var r;
		return T(e, function(e, i, s) {
			if (t.call(n, e, i, s)) return r = e, !0
		}), r
	}, S.filter = S.select = function(e, t, n) {
		var r = [];
		return e == null ? r : d && e.filter === d ? e.filter(t, n) : (x(e, function(e, i, s) {
			t.call(n, e, i, s) && (r[r.length] = e)
		}), r)
	}, S.reject = function(e, t, n) {
		var r = [];
		return e == null ? r : (x(e, function(e, i, s) {
			t.call(n, e, i, s) || (r[r.length] = e)
		}), r)
	}, S.every = S.all = function(e, t, r) {
		var i = !0;
		return e == null ? i : v && e.every === v ? e.every(t, r) : (x(e, function(e, s, o) {
			if (!(i = i && t.call(r, e, s, o))) return n
		}), !! i)
	};
	var T = S.some = S.any = function(e, t, r) {
			t || (t = S.identity);
			var i = !1;
			return e == null ? i : m && e.some === m ? e.some(t, r) : (x(e, function(e, s, o) {
				if (i || (i = t.call(r, e, s, o))) return n
			}), !! i)
		};
	S.include = S.contains = function(e, t) {
		var n = !1;
		return e == null ? n : g && e.indexOf === g ? e.indexOf(t) != -1 : (n = T(e, function(e) {
			return e === t
		}), n)
	}, S.invoke = function(e, t) {
		var n = o.call(arguments, 2);
		return S.map(e, function(e) {
			return (S.isFunction(t) ? t || e : e[t]).apply(e, n)
		})
	}, S.pluck = function(e, t) {
		return S.map(e, function(e) {
			return e[t]
		})
	}, S.max = function(e, t, n) {
		if (!t && S.isArray(e) && e[0] === +e[0]) return Math.max.apply(Math, e);
		if (!t && S.isEmpty(e)) return -Infinity;
		var r = {
			computed: -Infinity
		};
		return x(e, function(e, i, s) {
			var o = t ? t.call(n, e, i, s) : e;
			o >= r.computed && (r = {
				value: e,
				computed: o
			})
		}), r.value
	}, S.min = function(e, t, n) {
		if (!t && S.isArray(e) && e[0] === +e[0]) return Math.min.apply(Math, e);
		if (!t && S.isEmpty(e)) return Infinity;
		var r = {
			computed: Infinity
		};
		return x(e, function(e, i, s) {
			var o = t ? t.call(n, e, i, s) : e;
			o < r.computed && (r = {
				value: e,
				computed: o
			})
		}), r.value
	}, S.shuffle = function(e) {
		var t = [],
			n;
		return x(e, function(e, r, i) {
			n = Math.floor(Math.random() * (r + 1)), t[r] = t[n], t[n] = e
		}), t
	}, S.sortBy = function(e, t, n) {
		var r = S.isFunction(t) ? t : function(e) {
				return e[t]
			};
		return S.pluck(S.map(e, function(e, t, i) {
			return {
				value: e,
				criteria: r.call(n, e, t, i)
			}
		}).sort(function(e, t) {
			var n = e.criteria,
				r = t.criteria;
			return n === void 0 ? 1 : r === void 0 ? -1 : n < r ? -1 : n > r ? 1 : 0
		}), "value")
	}, S.groupBy = function(e, t) {
		var n = {},
			r = S.isFunction(t) ? t : function(e) {
				return e[t]
			};
		return x(e, function(e, t) {
			var i = r(e, t);
			(n[i] || (n[i] = [])).push(e)
		}), n
	}, S.sortedIndex = function(e, t, n) {
		n || (n = S.identity);
		var r = 0,
			i = e.length;
		while (r < i) {
			var s = r + i >> 1;
			n(e[s]) < n(t) ? r = s + 1 : i = s
		}
		return r
	}, S.toArray = function(e) {
		return e ? S.isArray(e) ? o.call(e) : S.isArguments(e) ? o.call(e) : e.toArray && S.isFunction(e.toArray) ? e.toArray() : S.values(e) : []
	}, S.size = function(e) {
		return S.isArray(e) ? e.length : S.keys(e).length
	}, S.first = S.head = S.take = function(e, t, n) {
		return t != null && !n ? o.call(e, 0, t) : e[0]
	}, S.initial = function(e, t, n) {
		return o.call(e, 0, e.length - (t == null || n ? 1 : t))
	}, S.last = function(e, t, n) {
		return t != null && !n ? o.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
	}, S.rest = S.tail = function(e, t, n) {
		return o.call(e, t == null || n ? 1 : t)
	}, S.compact = function(e) {
		return S.filter(e, function(e) {
			return !!e
		})
	}, S.flatten = function(e, t) {
		return S.reduce(e, function(e, n) {
			return S.isArray(n) ? e.concat(t ? n : S.flatten(n)) : (e[e.length] = n, e)
		}, [])
	}, S.without = function(e) {
		return S.difference(e, o.call(arguments, 1))
	}, S.uniq = S.unique = function(e, t, n) {
		var r = n ? S.map(e, n) : e,
			i = [];
		return e.length < 3 && (t = !0), S.reduce(r, function(n, r, s) {
			if (t ? S.last(n) !== r || !n.length : !S.include(n, r)) n.push(r), i.push(e[s]);
			return n
		}, []), i
	}, S.union = function() {
		return S.uniq(S.flatten(arguments, !0))
	}, S.intersection = S.intersect = function(e) {
		var t = o.call(arguments, 1);
		return S.filter(S.uniq(e), function(e) {
			return S.every(t, function(t) {
				return S.indexOf(t, e) >= 0
			})
		})
	}, S.difference = function(e) {
		var t = S.flatten(o.call(arguments, 1), !0);
		return S.filter(e, function(e) {
			return !S.include(t, e)
		})
	}, S.zip = function() {
		var e = o.call(arguments),
			t = S.max(S.pluck(e, "length")),
			n = new Array(t);
		for (var r = 0; r < t; r++) n[r] = S.pluck(e, "" + r);
		return n
	}, S.indexOf = function(e, t, n) {
		if (e == null) return -1;
		var r, i;
		if (n) return r = S.sortedIndex(e, t), e[r] === t ? r : -1;
		if (g && e.indexOf === g) return e.indexOf(t);
		for (r = 0, i = e.length; r < i; r++) if (r in e && e[r] === t) return r;
		return -1
	}, S.lastIndexOf = function(e, t) {
		if (e == null) return -1;
		if (y && e.lastIndexOf === y) return e.lastIndexOf(t);
		var n = e.length;
		while (n--) if (n in e && e[n] === t) return n;
		return -1
	}, S.range = function(e, t, n) {
		arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
		var r = Math.max(Math.ceil((t - e) / n), 0),
			i = 0,
			s = new Array(r);
		while (i < r) s[i++] = e, e += n;
		return s
	};
	var N = function() {};
	S.bind = function(t, n) {
		var r, i;
		if (t.bind === E && E) return E.apply(t, o.call(arguments, 1));
		if (!S.isFunction(t)) throw new TypeError;
		return i = o.call(arguments, 2), r = function() {
			if (this instanceof r) {
				N.prototype = t.prototype;
				var e = new N,
					s = t.apply(e, i.concat(o.call(arguments)));
				return Object(s) === s ? s : e
			}
			return t.apply(n, i.concat(o.call(arguments)))
		}
	}, S.bindAll = function(e) {
		var t = o.call(arguments, 1);
		return t.length == 0 && (t = S.functions(e)), x(t, function(t) {
			e[t] = S.bind(e[t], e)
		}), e
	}, S.memoize = function(e, t) {
		var n = {};
		return t || (t = S.identity), function() {
			var r = t.apply(this, arguments);
			return S.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
		}
	}, S.delay = function(e, t) {
		var n = o.call(arguments, 2);
		return setTimeout(function() {
			return e.apply(null, n)
		}, t)
	}, S.defer = function(e) {
		return S.delay.apply(S, [e, 1].concat(o.call(arguments, 1)))
	}, S.throttle = function(e, t) {
		var n, r, i, s, o, u, a = S.debounce(function() {
			o = s = !1
		}, t);
		return function() {
			n = this, r = arguments;
			var f = function() {
					i = null, o && e.apply(n, r), a()
				};
			return i || (i = setTimeout(f, t)), s ? o = !0 : u = e.apply(n, r), a(), s = !0, u
		}
	}, S.debounce = function(e, t, n) {
		var r;
		return function() {
			var i = this,
				s = arguments,
				o = function() {
					r = null, n || e.apply(i, s)
				};
			n && !r && e.apply(i, s), clearTimeout(r), r = setTimeout(o, t)
		}
	}, S.once = function(e) {
		var t = !1,
			n;
		return function() {
			return t ? n : (t = !0, n = e.apply(this, arguments))
		}
	}, S.wrap = function(e, t) {
		return function() {
			var n = [e].concat(o.call(arguments, 0));
			return t.apply(this, n)
		}
	}, S.compose = function() {
		var e = arguments;
		return function() {
			var t = arguments;
			for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
			return t[0]
		}
	}, S.after = function(e, t) {
		return e <= 0 ? t() : function() {
			if (--e < 1) return t.apply(this, arguments)
		}
	}, S.keys = w ||
	function(e) {
		if (e !== Object(e)) throw new TypeError("Invalid object");
		var t = [];
		for (var n in e) S.has(e, n) && (t[t.length] = n);
		return t
	}, S.values = function(e) {
		return S.map(e, S.identity)
	}, S.functions = S.methods = function(e) {
		var t = [];
		for (var n in e) S.isFunction(e[n]) && t.push(n);
		return t.sort()
	}, S.extend = function(e) {
		return x(o.call(arguments, 1), function(t) {
			for (var n in t) e[n] = t[n]
		}), e
	}, S.pick = function(e) {
		var t = {};
		return x(S.flatten(o.call(arguments, 1)), function(n) {
			n in e && (t[n] = e[n])
		}), t
	}, S.defaults = function(e) {
		return x(o.call(arguments, 1), function(t) {
			for (var n in t) e[n] == null && (e[n] = t[n])
		}), e
	}, S.clone = function(e) {
		return S.isObject(e) ? S.isArray(e) ? e.slice() : S.extend({}, e) : e
	}, S.tap = function(e, t) {
		return t(e), e
	}, S.isEqual = function(e, t) {
		return C(e, t, [])
	}, S.isEmpty = function(e) {
		if (e == null) return !0;
		if (S.isArray(e) || S.isString(e)) return e.length === 0;
		for (var t in e) if (S.has(e, t)) return !1;
		return !0
	}, S.isElement = function(e) {
		return !!e && e.nodeType == 1
	}, S.isArray = b ||
	function(e) {
		return a.call(e) == "[object Array]"
	}, S.isObject = function(e) {
		return e === Object(e)
	}, S.isArguments = function(e) {
		return a.call(e) == "[object Arguments]"
	}, S.isArguments(arguments) || (S.isArguments = function(e) {
		return !!e && !! S.has(e, "callee")
	}), S.isFunction = function(e) {
		return a.call(e) == "[object Function]"
	}, S.isString = function(e) {
		return a.call(e) == "[object String]"
	}, S.isNumber = function(e) {
		return a.call(e) == "[object Number]"
	}, S.isFinite = function(e) {
		return S.isNumber(e) && isFinite(e)
	}, S.isNaN = function(e) {
		return e !== e
	}, S.isBoolean = function(e) {
		return e === !0 || e === !1 || a.call(e) == "[object Boolean]"
	}, S.isDate = function(e) {
		return a.call(e) == "[object Date]"
	}, S.isRegExp = function(e) {
		return a.call(e) == "[object RegExp]"
	}, S.isNull = function(e) {
		return e === null
	}, S.isUndefined = function(e) {
		return e === void 0
	}, S.has = function(e, t) {
		return f.call(e, t)
	}, S.noConflict = function() {
		return e._ = t, this
	}, S.identity = function(e) {
		return e
	}, S.times = function(e, t, n) {
		for (var r = 0; r < e; r++) t.call(n, r)
	}, S.escape = function(e) {
		return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
	}, S.result = function(e, t) {
		if (e == null) return null;
		var n = e[t];
		return S.isFunction(n) ? n.call(e) : n
	}, S.mixin = function(e) {
		x(S.functions(e), function(t) {
			B(t, S[t] = e[t])
		})
	};
	var k = 0;
	S.uniqueId = function(e) {
		var t = k++;
		return e ? e + t : t
	}, S.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var L = /.^/,
		A = {
			"\\": "\\",
			"'": "'",
			r: "\r",
			n: "\n",
			t: "	",
			u2028: "\u2028",
			u2029: "\u2029"
		};
	for (var O in A) A[A[O]] = O;
	var M = /\\|'|\r|\n|\t|\u2028|\u2029/g,
		_ = /\\(\\|'|r|n|t|u2028|u2029)/g,
		D = function(e) {
			return e.replace(_, function(e, t) {
				return A[t]
			})
		};
	S.template = function(e, t, n) {
		n = S.defaults(n || {}, S.templateSettings);
		var r = "__p+='" + e.replace(M, function(e) {
			return "\\" + A[e]
		}).replace(n.escape || L, function(e, t) {
			return "'+\n_.escape(" + D(t) + ")+\n'"
		}).replace(n.interpolate || L, function(e, t) {
			return "'+\n(" + D(t) + ")+\n'"
		}).replace(n.evaluate || L, function(e, t) {
			return "';\n" + D(t) + "\n;__p+='"
		}) + "';\n";
		n.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + r + "return __p;\n";
		var i = new Function(n.variable || "obj", "_", r);
		if (t) return i(t, S);
		var s = function(e) {
				return i.call(this, e, S)
			};
		return s.source = "function(" + (n.variable || "obj") + "){\n" + r + "}", s
	}, S.chain = function(e) {
		return S(e).chain()
	};
	var P = function(e) {
			this._wrapped = e
		};
	S.prototype = P.prototype;
	var H = function(e, t) {
			return t ? S(e).chain() : e
		},
		B = function(e, t) {
			P.prototype[e] = function() {
				var e = o.call(arguments);
				return u.call(e, this._wrapped), H(t.apply(S, e), this._chain)
			}
		};
	S.mixin(S), x(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
		var t = r[e];
		P.prototype[e] = function() {
			var n = this._wrapped;
			t.apply(n, arguments);
			var r = n.length;
			return (e == "shift" || e == "splice") && r === 0 && delete n[0], H(n, this._chain)
		}
	}), x(["concat", "join", "slice"], function(e) {
		var t = r[e];
		P.prototype[e] = function() {
			return H(t.apply(this._wrapped, arguments), this._chain)
		}
	}), P.prototype.chain = function() {
		return this._chain = !0, this
	}, P.prototype.value = function() {
		return this._wrapped
	}
}.call(this), _.mixin({
	run: function(e) {
		e()
	},
	runAll: function(e) {
		_.each(e, _.run)
	}
}), _.mixin({
	wrapAsync: function(e) {
		return function() {
			var t = _(arguments).toArray(),
				n = t.pop(),
				r = e.apply(null, t);
			n(null, r)
		}
	},
	partial: function(e) {
		var t = Array.prototype.slice,
			n = t.call(arguments, 1);
		return function() {
			var r = [],
				i = t.call(arguments),
				s = 0;
			for (; s < n.length; s++) r[s] = n[s] === _.__ ? i.shift() : n[s];
			return e.apply(this, r.concat(i))
		}
	},
	partialAsync: function() {
		var e = _(arguments).toArray(),
			t = e.shift();
		return e.unshift(_.wrapAsync(callback)), _.partial.apply(null, e)
	},
	__: {}
}), window.objectImageUrl = function(e, t) {
	return "http://" + window.config.s3_images_bucket + ".s3.amazonaws.com/" + e + "_" + t + ".png"
}, window.attachSounds = function(e) {
	soundManager.onready(function() {
		soundManager.createSound({
			id: "dropObject",
			url: "/static/sounds/dropObject.mp3",
			autoLoad: !0,
			autoPlay: !1,
			onload: function() {}
		})
	}), e.nodePropertySignals.isMoving.add(function(e) {
		e.isMoving || soundManager.play("dropObject")
	})
}, window.attachOpenGraphActions = function(e) {
	var t = JSON.parse(localStorage.getItem("publishedObjectTypeIds")) || [];
	e.nodePropertySignals.isGhost.add(function(e) {
		if (!e.drawing) return;
		var n = e.drawing;
		if (_.include(t, n.id)) return;
		if (!e.isGhost) {
			t.push(n.id), localStorage.setItem("publishedObjectTypeIds", JSON.stringify(t));
			var r = config.fb_canvas_url + "/object_types/show?id=" + n.id;
			FB.api("/me/" + window.config.fb_app_namespace + ":place?item=" + encodeURIComponent(r), "post", function(e) {
				!e || e.error ? console.log("Error", e) : console.log("Success", e)
			})
		}
	})
}, window.attachAnalytics = function(e) {
	e.nodePropertySignals.isGhost.add(function(e) {
		e.isGhost || (increment("added object"), mixpanel.track("added object"))
	}), e.plotClaimed.add(function() {
		increment("claimed plot"), mixpanel.track("claimed plot", {
			worldId: e.worldId
		})
	}), e.plotSubmitted.add(function() {
		increment("submitted plot"), mixpanel.track("submitted plot", {
			worldId: e.worldId
		})
	})
}, window.increment = function(e) {
	$.post("/increment", {
		name: e
	})
}, window.viewportSize = function() {
	var e = {};
	return e.waitable = TMT.Waitables.create(), e.width = e.height = 0, $(document).ready(function() {
		e.changed = new signals.Signal;
		var t = function(t, n) {
				if (e.width != t || e.height != n) e.width = t, e.height = n, e.changed.dispatch()
			};
		window.isInFBCanvas() || (t = _.wrap(t, function(e) {
			e($(window).width(), $(window).height())
		}), t(), e.waitable.go(), $(window).on("resize", function() {
			t()
		})), window.isInFBCanvas() && wait("script:fb", function() {
			t = _.wrap(t, function(e, t) {
				e($(window).width(), t.clientHeight - t.offsetTop)
			}), FB.Canvas.getPageInfo(function(n) {
				t(n), e.waitable.go()
			}), $(window).resize(function() {
				FB.Canvas.getPageInfo(function(e) {
					t(e)
				})
			})
		})
	}), e
}(), $(document).ready(function() {
	var e = function(e) {
			window.user ? redirect(e) : ($.openDOMWindow({
				overlayOpacity: 50,
				windowSource: "iframe",
				windowSourceURL: window.services_url + "/accounts/embedded_login_or_register" + "?next_url=" + encodeURI(window.server_url + e)
			}), $iframe = $("#DOMWindowIframe"), $iframe.load(function() {
				$iframe.contents().bind("loggedIn", function() {
					redirect(e)
				})
			}))
		};
	$(".show_user").click(function() {
		return e("/users/show?id=" + $(this).attr("user_id")), !1
	}), $(".new_starter").click(function() {
		return e("/starters/new"), !1
	}), $(".show_starter").click(function() {
		return e("/submissions/new?starter_id=" + $(this).attr("starter_id")), !1
	}), $(".new_submission").click(function() {
		return e("/submissions/new?starter_id=" + $(this).attr("starter_id")), !1
	}), $(".show_submission").click(function() {
		return redirect("/submissions/show?id=" + $(this).attr("submission_id")), !1
	}), $(".show_profile").click(function() {
		var e = $(this).attr("user_id");
		return redirect(e ? "/profile?user_id=" + e : "/profile"), !1
	}), $(".show_home").click(function() {
		return redirect("/"), !1
	}), $(".do_logout").click(function() {
		return top.location = services_url + "/accounts/logout?next=" + server_url, !1
	})
}), $(document).ready(function() {
	$("button").on("click", function() {
		var e = $(this).attr("href"),
			t = $(this).attr("target");
		if (e) switch (t) {
		case "_blank":
			window.open(e);
			break;
		case "_top":
			top.location = e;
			break;
		case "_self":
		default:
			window.location = e
		}
	})
}), $(document).ready(function() {
	var e = function(e) {
			$(e).attr("disabled", "disabled").css("background-color", "gray"), $(e).find("img").attr("src", "/static/images/thumbsup-dark.png")
		};
	$(".js-vote").on("click", function() {
		e(this), $.ajax({
			url: "/vote",
			type: "POST",
			data: {
				id: $(this).attr("entity_id"),
				type: $(this).attr("entity_type"),
				value: $(this).attr("value")
			}
		}).done(function() {
			console.log("up voted"), mixpanel.track("voted", {
				id: $(this).attr("entity_id"),
				type: $(this).attr("entity_type")
			})
		}).fail(function() {
			alert("Couldn't upvote :(")
		})
	}), window.votes && (console.log("yay"), _.each(window.votes, function(t) {
		$(".js-vote[entity_id=" + t.id + "][entity_type=" + t.type + "][value=" + t.value + "]").each(function(t, n) {
			e(n)
		})
	}))
}), $(document).ready(function() {
	$(".js-update-starter-or-submission").on("click", function() {
		var e = $(this),
			t = {
				entity_id: e.attr("entity_id"),
				entity_type: e.attr("entity_type")
			};
		_.each(["is_nsfw", "is_hidden"], function(n) {
			var r = e.attr(n);
			r !== undefined && (t[n] = r)
		}), $.ajax({
			url: "/starters_or_submissions/update",
			data: t
		}).done(function() {
			alert("Change saved")
		}).fail(function() {
			alert("Failed to make change")
		})
	})
}), $(document).ready(function() {
	$("#bbcode textarea").focus(function() {
		$this = $(this), $this.select(), $this.mouseup(function() {
			return $this.unbind("mouseup"), !1
		})
	})
}), function(e) {
	var t = /([^&=]+)=?([^&]*)/g,
		n = /\+/g,
		r = function(e) {
			return decodeURIComponent(e.replace(n, " "))
		};
	e.parseParams = function(e) {
		var n = {},
			i;
		while (i = t.exec(e)) n[r(i[1])] = r(i[2]);
		return n
	}
}(jQuery), function($) {
	$.fn.extend({
		limit: function(limit, element) {
			var interval, f, self = $(this);
			$(this).focus(function() {
				interval = window.setInterval(substring, 100)
			}), $(this).blur(function() {
				clearInterval(interval), substring()
			}), substringFunction = "function substring(){ var val = $(self).val();var length = val.length;if(length > limit){$(self).val($(self).val().substring(0,limit));}", typeof element != "undefined" && (substringFunction += "if($(element).html() != limit-length){$(element).html((limit-length<=0)?'0':limit-length);}"), substringFunction += "}", eval(substringFunction), substring()
		}
	})
}(jQuery), typeof Object.create != "function" && (Object.create = function(e) {
	function t() {}
	if (arguments.length > 1) throw Error("second argument is not supported");
	return t.prototype = e, new t
}), function() {
	var e = 0,
		t = ["ms", "moz", "webkit", "o"];
	for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
		var r = (new Date).getTime(),
			i = Math.max(0, 16 - (r - e)),
			s = window.setTimeout(function() {
				t(r + i)
			}, i);
		return e = r + i, s
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
		clearTimeout(e)
	})
}(), function(e) {
	function n(e, t, n, r, i) {
		this._listener = t, this._isOnce = n, this.context = r, this._signal = e, this._priority = i || 0
	}
	function r(e, t) {
		if (typeof e != "function") throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", t))
	}
	var t = {
		VERSION: "0.7.4"
	};
	n.prototype = {
		active: !0,
		params: null,
		execute: function(e) {
			var t, n;
			return this.active && !! this._listener && (n = this.params ? this.params.concat(e) : e, t = this._listener.apply(this.context, n), this._isOnce && this.detach()), t
		},
		detach: function() {
			return this.isBound() ? this._signal.remove(this._listener, this.context) : null
		},
		isBound: function() {
			return !!this._signal && !! this._listener
		},
		getListener: function() {
			return this._listener
		},
		_destroy: function() {
			delete this._signal, delete this._listener, delete this.context
		},
		isOnce: function() {
			return this._isOnce
		},
		toString: function() {
			return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
		}
	}, t.Signal = function() {
		this._bindings = [], this._prevParams = null
	}, t.Signal.prototype = {
		memorize: !1,
		_shouldPropagate: !0,
		active: !0,
		_registerListener: function(e, t, r, i) {
			var s = this._indexOfListener(e, r),
				o;
			if (s !== -1) {
				o = this._bindings[s];
				if (o.isOnce() !== t) throw new Error("You cannot add" + (t ? "" : "Once") + "() then add" + (t ? "Once" : "") + "() the same listener without removing the relationship first.")
			} else o = new n(this, e, t, r, i), this._addBinding(o);
			return this.memorize && this._prevParams && o.execute(this._prevParams), o
		},
		_addBinding: function(e) {
			var t = this._bindings.length;
			do--t;
			while (this._bindings[t] && e._priority <= this._bindings[t]._priority);
			this._bindings.splice(t + 1, 0, e)
		},
		_indexOfListener: function(e, t) {
			var n = this._bindings.length,
				r;
			while (n--) {
				r = this._bindings[n];
				if (r._listener === e && r.context === t) return n
			}
			return -1
		},
		has: function(e, t) {
			return this._indexOfListener(e, t) !== -1
		},
		add: function(e, t, n) {
			return r(e, "add"), this._registerListener(e, !1, t, n)
		},
		addOnce: function(e, t, n) {
			return r(e, "addOnce"), this._registerListener(e, !0, t, n)
		},
		remove: function(e, t) {
			r(e, "remove");
			var n = this._indexOfListener(e, t);
			return n !== -1 && (this._bindings[n]._destroy(), this._bindings.splice(n, 1)), e
		},
		removeAll: function() {
			var e = this._bindings.length;
			while (e--) this._bindings[e]._destroy();
			this._bindings.length = 0
		},
		getNumListeners: function() {
			return this._bindings.length
		},
		halt: function() {
			this._shouldPropagate = !1
		},
		dispatch: function(e) {
			if (!this.active) return;
			var t = Array.prototype.slice.call(arguments),
				n = this._bindings.length,
				r;
			this.memorize && (this._prevParams = t);
			if (!n) return;
			r = this._bindings.slice(), this._shouldPropagate = !0;
			do n--;
			while (r[n] && this._shouldPropagate && r[n].execute(t) !== !1)
		},
		forget: function() {
			this._prevParams = null
		},
		dispose: function() {
			this.removeAll(), delete this._bindings, delete this._prevParams
		},
		toString: function() {
			return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
		}
	}, typeof define == "function" && define.amd ? define(t) : typeof module != "undefined" && module.exports ? module.exports = t : e.signals = t
}(this), function(e) {
	e("hasher", ["signals"], function(e) {
		var t = function(t) {
				function w(e) {
					if (!e) return "";
					var t = new RegExp("^\\" + u.prependHash + "|\\" + u.appendHash + "$", "g");
					return e.replace(t, "")
				}
				function E() {
					var e = p.exec(u.getURL());
					return e && e[1] ? decodeURIComponent(e[1]) : ""
				}
				function S() {
					return c ? c.contentWindow.frameHash : null
				}
				function x() {
					c = r.createElement("iframe"), c.src = "about:blank", c.style.display = "none", r.body.appendChild(c)
				}
				function T() {
					if (c && a !== S()) {
						var e = c.contentWindow.document;
						e.open(), e.write("<html><head><title>" + r.title + '</title><script type="text/javascript">var frameHash="' + a + '";</script></head><body>&nbsp;</body></html>'), e.close()
					}
				}
				function N(e, t) {
					e = decodeURIComponent(e);
					if (a !== e) {
						var n = a;
						a = e, y && (t ? c.contentWindow.frameHash = e : T()), u.changed.dispatch(w(e), w(n))
					}
				}
				function C(e, t, n) {
					e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
				}
				function k(e, t, n) {
					e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
				}
				function L(e) {
					e = Array.prototype.slice.call(arguments);
					var t = e.join(u.separator);
					return t = t ? u.prependHash + t.replace(v, "") + u.appendHash : t, m && b && (t = t.replace(/\?/, "%3F")), t
				}
				var n = 25,
					r = t.document,
					i = t.location,
					s = t.history,
					o = e.Signal,
					u, a, f, l, c, h, p = /#(.*)$/,
					d = /(\?.*)|(\#.*)/,
					v = /^\#/,
					m = !1,
					g = "onhashchange" in t,
					y = m && !g,
					b = i.protocol === "file:";
				return y ? h = function() {
					var e = E(),
						t = S();
					t !== a && t !== e ? u.setHash(w(t)) : e !== a && N(e)
				} : h = function() {
					var e = E();
					e !== a && N(e)
				}, u = {
					VERSION: "1.1.0",
					appendHash: "",
					prependHash: "/",
					separator: "/",
					changed: new o,
					stopped: new o,
					initialized: new o,
					init: function() {
						if (l) return;
						a = E(), g ? C(t, "hashchange", h) : (y && (c || x(), T()), f = setInterval(h, n)), l = !0, u.initialized.dispatch(w(a))
					},
					stop: function() {
						if (!l) return;
						g ? k(t, "hashchange", h) : (clearInterval(f), f = null), l = !1, u.stopped.dispatch(w(a))
					},
					isActive: function() {
						return l
					},
					getURL: function() {
						return i.href
					},
					getBaseURL: function() {
						return u.getURL().replace(d, "")
					},
					setHash: function(e) {
						e = L.apply(null, arguments), e !== a && (N(e), i.hash = "#" + encodeURI(e))
					},
					replaceHash: function(e) {
						e = L.apply(null, arguments), e !== a && (N(e, !0), i.replace("#" + encodeURI(e)))
					},
					getHash: function() {
						return w(a)
					},
					getHashAsArray: function() {
						return u.getHash().split(u.separator)
					},
					dispose: function() {
						u.stop(), u.initialized.dispose(), u.stopped.dispose(), u.changed.dispose(), c = u = t.hasher = null
					},
					toString: function() {
						return '[hasher version="' + u.VERSION + '" hash="' + u.getHash() + '"]'
					}
				}, u.initialized.memorize = !0, u
			}(window);
		return t
	})
}(typeof define == "function" && define.amd ? define : function(e, t, n) {
	window[e] = n(window[t[0]])
});
var RollingAverage = function(e) {
		this.maxValues = e, this.values = []
	};
_.extend(RollingAverage.prototype, {
	add: function(e) {
		this.values.unshift(e);
		while (this.values.length > this.maxValues) this.values.pop()
	},
	average: function(e) {
		var t = function(e) {
				return _.reduce(e, function(e, t) {
					return e + t
				}, 0)
			};
		return t(this.values) / this.values.length
	}
});
var Vector3 = function(e, t, n) {
		this.x = e, this.y = t, this.z = n
	};
Vector3.prototype.multiply = function(e) {
	return new Vector3(this.x * e, this.y * e, this.z * e)
}, Vector3.prototype.add = function(e) {
	return new Vector3(this.x + e.x, this.y + e.y, this.z + e.z)
}, Vector3.prototype.subtract = function(e) {
	return this.add(e.multiply(-1))
}, Vector3.prototype.toString = function() {
	return "<" + this.x + "," + this.y + "," + this.z + ">"
}, Vector3.prototype.equals = function(e) {
	return this.x == e.x && this.y == e.y && this.z == e.z
}, Vector3.prototype.clone = function(e) {
	return new Vector3(this.x, this.y, this.z)
}, Vector3.prototype.set = function(e, t, n) {
	e !== undefined && t !== undefined && t !== undefined ? (this.x = e, this.y = t, this.z = n) : (this.x = e.x, this.y = e.y, this.y = e.z), this.signal && this.signal.dispatch(this)
}, Vector3.prototype.getSignal = function() {
	return this.signal = this.signal || new signals.Signal, this.signal
}, Vector3.prototype.length = function() {
	return Math.sqrt(Vector3.dot(this, this))
}, Vector3.prototype.normalized = function() {
	return this.multiply(1 / this.length())
}, Vector3.distance = function(e, t) {
	return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2) + Math.pow(e.z - t.z, 2))
}, Vector3.dot = function(e, t) {
	return e.x * t.x + e.y * t.y + e.z * t.z
}, Vector3.dot = function(e, t) {
	return e.x * t.x + e.y * t.y + e.z * t.z
}, Vector3.average = function(e) {
	var t = function(e) {
			return _.reduce(e, function(e, t) {
				return e + t
			}, 0)
		};
	return new Vector3(t(_.pluck(e, "x")) / e.length, t(_.pluck(e, "y")) / e.length, t(_.pluck(e, "z")) / e.length)
};
var Vector2 = function(e, t) {
		this.x = e, this.y = t
	};
Vector2.prototype.multiply = function(e) {
	return new Vector2(this.x * e, this.y * e)
}, Vector2.prototype.add = function(e) {
	return new Vector2(this.x + e.x, this.y + e.y)
}, Vector2.prototype.subtract = function(e) {
	return this.add(e.multiply(-1))
}, Vector2.prototype.shift = function(e) {
	this.x += e.x, this.y += e.y
}, Vector2.prototype.equals = function(e) {
	return this.x == e.x && this.y == e.y
}, Vector2.prototype.set = function(e, t) {
	e !== undefined && t !== undefined ? (this.x = e, this.y = t) : (this.x = e.x, this.y = e.y), this.signal && this.signal.dispatch(this)
}, Vector2.prototype.getSignal = function() {
	return this.signal = this.signal || new signals.Signal, this.signal
}, Vector2.prototype.clone = function() {
	return new Vector2(this.x, this.y)
}, Vector2.prototype.toString = function() {
	return "<" + this.x + "," + this.y + ">"
}, Vector2.prototype.normalized = function() {
	return this.multiply(1 / this.length())
}, Vector2.prototype.length = function() {
	return Math.sqrt(Vector2.dot(this, this))
}, Vector2.distance = function(e, t) {
	return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
}, Vector2.dot = function(e, t) {
	return e.x * t.x + e.y * t.y
};
var Rect2 = function(e, t, n, r) {
		this.xmin = e, this.xmax = t, this.ymin = n, this.ymax = r
	};
Rect2.fromPoints = function(e, t) {
	return new Rect2(Math.min(e.x, t.x), Math.max(e.x, t.x), Math.min(e.y, t.y), Math.max(e.y, t.y))
}, Rect2.fromPointAndSize = function(e, t) {
	return new Rect2(e.x, e.x + t.x, e.y, e.y + t.y)
}, Rect2.prototype.equals = function(e) {
	return this.xmin === e.xmin && this.xmax === e.xmax && this.ymin === e.ymin && this.ymax === e.ymax
}, Rect2.prototype.area = function() {
	return (this.xmax - this.xmin) * (this.ymax - this.ymin)
}, Rect2.prototype.min = function() {
	return new Vector2(this.xmin, this.ymin)
}, Rect2.prototype.xsize = function() {
	return this.xmax - this.xmin
}, Rect2.prototype.ysize = function() {
	return this.ymax - this.ymin
}, Rect2.prototype.size = function() {
	return new Vector2(this.xmax - this.xmin, this.ymax - this.ymin)
}, Rect2.prototype.inflate = function(e) {
	return this.xmin -= e.x / 2, this.ymin -= e.y / 2, this.xmax += e.x / 2, this.ymax += e.y / 2, this
}, Rect2.prototype.contains = function(e) {
	return this.xmin <= e.xmin && this.xmax >= e.xmax && this.ymin <= e.ymin && this.ymax >= e.ymax
}, Rect2.prototype.clone = function() {
	return new Rect2(this.xmin, this.xmax, this.ymin, this.ymax)
}, Rect2.prototype.transform = function(e) {
	var t = e(new Vector2(this.xmin, this.ymin)),
		n = e(new Vector2(this.xmax, this.ymax));
	return Rect2.fromPoints(t, n)
}, Rect2.prototype.shift = function(e) {
	return this.xmin += e.x, this.xmax += e.x, this.ymin += e.y, this.ymax += e.y, this
}, Rect2.intersects = function(e, t) {
	return !(e.xmax <= t.xmin || t.xmax <= e.xmin) && !(e.ymax <= t.ymin || t.ymax <= e.ymin)
}, Rect2.touches = function(e, t) {
	return !(e.xmax < t.xmin || t.xmax < e.xmin) && !(e.ymax < t.ymin || t.ymax < e.ymin)
}, Rect2.union = function(e, t) {
	return new Rect2(Math.min(e.xmin, t.xmin), Math.max(e.xmax, t.xmax), Math.min(e.ymin, t.ymin), Math.max(e.ymax, t.ymax))
};
var Rect3 = function(e, t, n, r, i, s) {
		this.xmin = e, this.xmax = t, this.ymin = n, this.ymax = r, this.zmin = i, this.zmax = s
	};
Rect3.fromPoints = function(e, t) {
	this.xmin = Math.min(e.x, t.x), this.xmax = Math.max(e.x, t.x), this.ymin = Math.min(e.y, t.y), this.ymax = Math.max(e.y, t.y), this.zmin = Math.min(e.z, t.z), this.zmax = Math.max(e.z, t.z)
}, Rect3.fromPointAndSize = function(e, t) {
	return new Rect3(e.x, e.x + t.x, e.y, e.y + t.y, e.z, e.z + t.z)
}, Rect3.fromObject = function(e) {
	return new Rect3(e.xmin, e.xmax, e.ymin, e.ymax, e.zmin, e.zmax)
}, Rect3.intersects = function(e, t) {
	return !(e.xmax <= t.xmin || t.xmax <= e.xmin) && !(e.ymax <= t.ymin || t.ymax <= e.ymin) && !(e.zmax <= t.zmin || t.zmax <= e.zmin)
}, Rect3.adjoins = function(e, t) {
	return !Rect3.intersects(e, t) && !(e.xmax < t.xmin || t.xmax < e.xmin) && !(e.ymax < t.ymin || t.ymax < e.ymin) && !(e.zmax < t.zmin || t.zmax < e.zmin)
}, Rect3.touches = function(e, t, n) {
	if (e.ymin !== t.ymax && e.ymax !== t.ymin || !Rect2.touches(e.yRect(), t.yRect())) {
		if (n) {
			if (!(e.xmin !== t.xmax && e.xmax !== t.xmin || !Rect2.touches(e.xRect(), t.xRect()))) return !0;
			if ((e.zmin === t.zmax || e.zmax === t.zmin) && Rect2.touches(e.zRect(), t.zRect())) return !0
		}
		return !1
	}
	return !0
}, Rect3.prototype.moveTo = function(e) {
	var t = this.xmax - this.xmin,
		n = this.ymax - this.ymin,
		r = this.zmax - this.zmin;
	return this.xmin = e.x, this.ymin = e.y, this.zmin = e.z, this.xmax = e.x + t, this.ymax = e.y + n, this.zmax = e.z + r, this
}, Rect3.prototype.shift = function(e) {
	return this.xmin += e.x, this.xmax += e.x, this.ymin += e.y, this.ymax += e.y, this.zmin += e.z, this.zmax += e.z, this
}, Rect3.prototype.inflate = function(e) {
	return this.xmin -= e.x / 2, this.ymin -= e.y / 2, this.zmin -= e.z / 2, this.xmax += e.x / 2, this.ymax += e.y / 2, this.zmax += e.z / 2, this
}, Rect3.prototype.contains = function(e) {
	return this.xmin <= e.xmin && this.xmax >= e.xmax && this.ymin <= e.ymin && this.ymax >= e.ymax && this.zmin <= e.zmin && this.zmax >= e.zmax
}, Rect3.prototype.clone = function() {
	return new Rect3(this.xmin, this.xmax, this.ymin, this.ymax, this.zmin, this.zmax)
}, Rect3.prototype.toString = function() {
	return "<" + this.xmin + "," + this.xmax + "," + this.ymin + "," + this.ymax + "," + this.zmin + "," + this.zmax + ">"
}, Rect3.prototype.vertex = function(e, t, n) {
	return new Vector3(e ? this.xmax : this.xmin, t ? this.ymax : this.ymin, n ? this.zmax : this.zmin)
}, Rect3.prototype.xRect = function() {
	return new Rect2(this.ymin, this.ymax, this.zmin, this.zmax)
}, Rect3.prototype.yRect = function() {
	return new Rect2(this.xmin, this.xmax, this.zmin, this.zmax)
}, Rect3.prototype.zRect = function() {
	return new Rect2(this.xmin, this.xmax, this.ymin, this.ymax)
}, Rect3.prototype.vertices = function() {
	return [new Vector3(this.xmin, this.ymin, this.zmin), new Vector3(this.xmax, this.ymin, this.zmin), new Vector3(this.xmin, this.ymax, this.zmin), new Vector3(this.xmin, this.ymin, this.zmax), new Vector3(this.xmax, this.ymax, this.zmin), new Vector3(this.xmin, this.ymax, this.zmax), new Vector3(this.xmax, this.ymin, this.zmax), new Vector3(this.xmax, this.ymax, this.zmax)]
}, Rect3.prototype.centerOfBase = function() {
	return Vector3.average(this.yMinSide)
}, Rect3.prototype.xzRect = function() {
	return new Rect2(this.xmin, this.xmax, this.zmin, this.zmax)
}, Object.defineProperties(Rect3.prototype, {
	min: {
		get: function() {
			return new Vector3(this.xmin, this.ymin, this.zmin)
		}
	},
	xsize: {
		get: function() {
			return this.xmax - this.xmin
		}
	},
	ysize: {
		get: function() {
			return this.ymax - this.ymin
		}
	},
	zsize: {
		get: function() {
			return this.zmax - this.zmin
		}
	},
	size: {
		get: function() {
			return new Vector3(this.xsize, this.ysize, this.zsize)
		}
	},
	center: {
		get: function() {
			return new Vector3((this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2, (this.zmin + this.zmax) / 2)
		}
	},
	xMinSide: {
		get: function() {
			return [new Vector3(this.xmin, this.ymin, this.zmin), new Vector3(this.xmin, this.ymin, this.zmax), new Vector3(this.xmin, this.ymax, this.zmax), new Vector3(this.xmin, this.ymax, this.zmin)]
		}
	},
	zMinSide: {
		get: function() {
			return [new Vector3(this.xmin, this.ymin, this.zmin), new Vector3(this.xmax, this.ymin, this.zmin), new Vector3(this.xmax, this.ymax, this.zmin), new Vector3(this.xmin, this.ymax, this.zmin)]
		}
	},
	yMaxSide: {
		get: function() {
			return [new Vector3(this.xmin, this.ymax, this.zmin), new Vector3(this.xmax, this.ymax, this.zmin), new Vector3(this.xmax, this.ymax, this.zmax), new Vector3(this.xmin, this.ymax, this.zmax)]
		}
	},
	yMinSide: {
		get: function() {
			return [new Vector3(this.xmin, this.ymin, this.zmin), new Vector3(this.xmax, this.ymin, this.zmin), new Vector3(this.xmax, this.ymin, this.zmax), new Vector3(this.xmin, this.ymin, this.zmax)]
		}
	}
});
var DirectedGraph = function() {
		this.outgoing = {}, this.incoming = {}
	};
_.extend(DirectedGraph.prototype, {
	addArc: function(e, t) {
		var n = this.outgoing[e.uid];
		n || (n = this.outgoing[e.uid] = {}), n[t.uid] = !0, n = this.incoming[t.uid], n || (n = this.incoming[t.uid] = {}), n[e.uid] = !0
	},
	removeNode: function(e) {
		var t, n = this.outgoing[e.uid],
			r = this.incoming[e.uid];
		if (n) for (t in n) delete this.incoming[t][e.uid];
		if (r) for (t in r) delete this.outgoing[t][e.uid];
		delete this.outgoing[e.uid], delete this.incoming[e.uid]
	}
});
var PosetSorter = function(e, t) {
		this.getComparableNodes = e, this.isGreaterThan = t, this.graph = new DirectedGraph, this.dirtyNodes = {}
	};
PosetSorter.prototype = {
	add: function(e) {
		this.dirtyNodes[e.uid] = !0
	},
	remove: function(e) {
		delete this.dirtyNodes[e], this.graph.removeNode(e)
	},
	update: function(e) {
		this.remove(e), this.add(e)
	},
	sort: function(e) {
		var t = this;
		this.updateGraph(e);
		var n = {},
			r = [],
			i, s, o = function(i) {
				n[i.uid] = !0;
				for (s in t.graph.outgoing[i.uid]) {
					var u = e[s];
					u && !n[s] && o(u)
				}
				r.push(i)
			};
		for (s in e) {
			var i = e[s];
			n[s] || o(i)
		}
		return r
	},
	updateGraph: function(e) {
		var t, n, r;
		for (r in e) {
			t = e[r];
			if (!this.dirtyNodes[t.uid]) continue;
			this.
			graph.removeNode(t);
			var i = this.getComparableNodes(t);
			for (r in i) {
				n = i[r];
				if (t === n) continue;
				this.isGreaterThan(n, t) ? this.isGreaterThan(t, n) || this.graph.addArc(n, t) : this.graph.addArc(t, n)
			}
			delete this.dirtyNodes[t.uid]
		}
	}
};
var GridSpatialIndex = function(e) {
		this.squareSize = e, this.grid = {}, this.nodes = {}, this.rects = {}
	};
GridSpatialIndex.prototype = {
	_ctos: function(e) {
		return e > 0 ? e += this.squareSize : e < 0 && (e -= this.squareSize), (e - e % this.squareSize) / this.squareSize
	},
	_toSquares: function(e) {
		var t = this._ctos(e.xmin),
			n = this._ctos(e.xmax),
			r = this._ctos(e.ymin),
			i = this._ctos(e.ymax),
			s = [];
		for (; t <= n; t++) for (var o = r; o <= i; o++) s.push(t + ":" + o);
		return s
	},
	add: function(e, t) {
		this.rects[e.uid] = t, this.nodes[e.uid] = e;
		var n = this._toSquares(t);
		for (var r in n) {
			var i = this.grid[n[r]];
			i || (i = this.grid[n[r]] = {}), i[e.uid] = !0
		}
	},
	remove: function(e) {
		if (!this.contains(e)) return;
		var t = this._toSquares(this.rects[e.uid]);
		for (i in t) {
			var n = this.grid[t[i]];
			n && delete n[e.uid]
		}
		delete this.nodes[e.uid], delete this.rects[e.uid]
	},
	contains: function(e) {
		return e.uid in this.nodes
	},
	query: function(e) {
		var t = {},
			n = this._toSquares(e);
		for (var r in n) {
			var i = this.grid[n[r]];
			if (!i) continue;
			for (var s in i) {
				var o = this.rects[s];
				e.xmax <= o.xmin || e.xmin >= o.xmax || e.ymax <= o.ymin || e.ymin >= o.ymax || (t[s] = this.nodes[s])
			}
		}
		return t
	},
	queryPoint: function(e) {
		return this.query({
			xmin: e.x,
			xmax: e.x,
			ymin: e.y,
			ymax: e.y
		})
	},
	queryByNode: function(e) {
		return this.query(this.rects[e.uid])
	}
};
var RenderContext = function(e) {
		this.canvas = e, this.context = this.canvas.getContext("2d")
	};
_.extend(RenderContext.prototype, {
	setSize: function(e) {
		this.canvas.width = e.x, this.canvas.height = e.y
	},
	clear: function(e) {
		this.context.clearRect(e.xmin, e.ymin, e.xmax - e.xmin, e.ymax - e.ymin)
	},
	clip: function(e) {
		var t = this.context;
		t.save(), t.beginPath(), t.rect(e.xmin, e.ymin, e.xmax - e.xmin, e.ymax - e.ymin), t.clip(), t.closePath()
	},
	unclip: function(e) {
		this.context.restore()
	},
	drawImage: function(e, t, n, r, i, s) {
		s !== 1 && (this.context.save(), this.context.globalAlpha = s), i ? (this.context.save(), this.context.scale(-1, 1), this.context.translate(-e.width * r, 0), this.context.drawImage(e, -(t | t), n | n, e.width * r, e.height * r), this.context.restore()) : this.context.drawImage(e, t | t, n | n, e.width * r, e.height * r), s !== 1 && this.context.restore()
	},
	drawPolygon: function(e, t, n, r, i) {
		var s = this.context;
		s.save(), s.globalAlpha = r, s.strokeStyle = t, n !== undefined && (s.fillStyle = n), i !== undefined && (s.lineWidth = i), ptLast = e[e.length - 1], s.beginPath(), s.moveTo(ptLast.x, ptLast.y), _.each(e, function(e) {
			s.lineTo(e.x, e.y)
		}), n !== undefined && s.fill(), s.stroke(), s.closePath(), s.restore()
	},
	drawLine: function(e, t, n) {
		var r = this.context;
		r.strokeStyle = n, r.beginPath(), r.moveTo(e.x, e.y), r.lineTo(t.x, t.y), r.closePath(), r.stroke()
	},
	drawRect: function(e, t, n) {
		var r = this.context;
		r.save(), r.globalAlpha = n, r.strokeWidth = 1, r.strokeStyle = t, r.strokeRect(e.xmin, e.ymin, e.xmax - e.xmin, e.ymax - e.ymin), r.restore()
	},
	screenshot: function(e) {
		var t;
		t = document.createElement("canvas"), t.width = e.xsize(), t.height = e.ysize();
		var n = t.getContext("2d");
		return n.fillStyle = $(this.canvas).css("background-color"), n.fillRect(0, 0, e.xsize(), e.ysize()), n.drawImage(this.canvas, e.xmin, e.ymin, e.xsize(), e.ysize(), 0, 0, e.xsize(), e.ysize()), t.toDataURL()
	}
});
var ImageCollection = function(e, t) {
		this.buildImageURL = e, this.images = {}, this.flippedImages = {}, this.maxLoadingCount = t === undefined ? 10 : t, this.loadingCount = 0, this.stack = []
	};
_.extend(ImageCollection.prototype, {
	getByIdAndScale: function(e, t, n, r) {
		n === undefined && (n = !1);
		var i = this.images[e],
			s = i && this.images[e][t];
		if (s) return s;
		s === undefined && this.loadImage(e, t, r);
		if (!n && i) return i[.25] || i[1 / 8] || i[1 / 16] || i[1 / 32]
	},
	loadImage: function(e, t, n) {
		var r = this.images[e];
		if (r && t in r) return;
		this.stack.push({
			url: this.buildImageURL(e, t),
			id: e,
			scale: t,
			callback: n
		}), e in this.images || (this.images[e] = {}), this.images[e][t] = null, this._process()
	},
	_process: function() {
		var e = this;
		while (e.stack.length && e.loadingCount <= e.maxLoadingCount)(function() {
			var t = e.stack.pop(),
				n = document.createElement("img");
			n.crossOrigin = "Anonymous", n.src = t.url, e.loadingCount++, n.onerror = function() {
				console.log("error loading img", t.id, t.scale), e.loadingCount--, e._process()
			}, n.onload = function() {
				e.images[t.id][t.scale] = n, e.loadingCount--, t.callback !== undefined && t.callback(t.id, t.scale), e._process()
			}
		})();
		_.last(this.stack, e.maxLoadingCount - e.loadingCount, function(e) {})
	}
});
var GraffitiWorldStorage = function(e, t) {
		var n = this;
		this.scene = e, this.chunkSize = t, this.chunks = {}, this.drawings = {}, this.plots = {}, this.scene.nodeRemoved.add(function(e) {
			e.isGhost || n._remove(e)
		}), this.scene.nodeAdded.add(function(e) {
			!e.isOnServer && !e.isGhost && n._add(e)
		}), this.scene.nodePropertySignals.isGhost.add(function(e) {
			e.isGhost || n._add(e)
		}), this.scene.nodePropertySignals.isMoving.add(function(e) {
			e.lastMoved = Date.now(), e.isOnServer && !e.isMoving && n._move(e)
		}), this.scene.nodePropertySignals.isFlipped.add(function(e) {
			e.isOnServer && !e.isMoving && n._move(e)
		})
	};
_.extend(GraffitiWorldStorage, {
	drawingFromJSON: function(e) {
		return e.size = new Vector2(e.width, e.height), e.originOffset = new Vector2(e.origin_offset_x, e.origin_offset_y), e.flippedOriginOffset = e.originOffset.clone(), e.flippedOriginOffset.x = e.width - e.originOffset.x, e.diagonal = new Vector3(e.bbox_width, e.bbox_height, e.bbox_depth), e.flippedDiagonal = new Vector3(e.bbox_depth, e.bbox_height, e.bbox_width), e.solidity = Math.max(e.solidity, 1), e.isSolid = e.solidity === GraffitiWorldScene.SOLIDITY.SOLID, e
	}
}), _.extend(GraffitiWorldStorage.prototype, {
	loadRect: function(e) {
		var t = this,
			n = Math.floor(e.xmin / this.chunkSize) * this.chunkSize,
			r = e.xmax,
			i = Math.floor(e.ymin / this.chunkSize) * this.chunkSize,
			s = e.ymax;
		for (var o = n; o < r; o += this.chunkSize) for (var u = i; u < s; u += this.chunkSize) {
			var a = o + ":" + u;
			if (a in this.chunks) continue;
			this.chunks[a] = !0, $.getJSON(window.config.server_url + "/chunk", {
				world_id: this.scene.worldId,
				x: o,
				y: u
			}, _.bind(t._handleChunk, t))
		}
	},
	_handleChunk: function(e) {
		var t = this;
		_.each(e.Drawing25D || [], function(e) {
			if (e.id in t.drawings) return;
			t.drawings[e.id] = GraffitiWorldStorage.drawingFromJSON(e)
		}), _.each(e.players || [], function(e) {
			t.scene.players[e.id] = t.scene.players[e.id] || e
		});
		var n = e.PlotNode || [];
		_.each(n, function(e) {
			if (e.id in t.plots) return;
			e.type = "plot", e.isOnServer = !0, e.box = Rect3.fromObject(e.box), t.plots[e.id] = e, e.plot = e, t.scene.plot = e, t.scene.add(e)
		});
		var r = [],
			i = e.ObjectNode || [],
			s = r.concat(i),
			o = Date.now();
		_.each(s, function(e) {
			e.isOnServer = !0, e.lastMoved = o, e.isTerrain || (e.type = "object"), e.isFlipped = e.is_flipped, delete e.is_flipped;
			var n = e.drawing = t.drawings[e.drawing_id];
			delete n.drawing_id, e.solidity = n.solidity, e.isSolid = n.isSolid, delete e.plot_id;
			var r = n[e.isFlipped ? "flippedDiagonal" : "diagonal"];
			e.box = Rect3.fromPointAndSize(e, r), e.serverSidePosition = e.box.min, delete e.x, delete e.y, delete e.z, t.scene.add(e)
		})
	},
	_add: function(e) {
		var t = this;
		if (e.type !== "object") return;
		console.log("Adding", e.id, e), $.ajax({
			url: "/objects/add",
			type: "POST",
			data: {
				world_id: t.scene.worldId,
				plot_id: e.plot.id,
				drawing_id: e.drawing.id,
				is_flipped: e.isFlipped ? 1 : 0,
				x: e.box.xmin,
				y: e.box.ymin,
				z: e.box.zmin
			}
		}).done(function(t) {
			e.id = t.object_id, e.isOnServer = !0, e.serverSidePosition = e.box.min
		}).fail(function() {
			console.log("add failed for", e)
		})
	},
	_remove: function(e) {
		console.log("Removing", e.id, e), e.isOnServer = !1;
		var t = this;
		$.ajax({
			url: "/objects/remove",
			type: "POST",
			data: {
				world_id: t.scene.worldId,
				node_id: e.id,
				x: e.box.xmin,
				y: e.box.ymin,
				z: e.box.zmin
			}
		}).fail(function() {
			console.log("remove failed for", e)
		})
	},
	_move: function(e) {
		console.log("Moving", e.id, e);
		var t = this;
		$.ajax({
			url: "/objects/move",
			type: "POST",
			data: {
				world_id: t.scene.worldId,
				plot_id: e.plot.id,
				is_flipped: e.isFlipped ? 1 : 0,
				node_id: e.id,
				old_x: e.serverSidePosition.x,
				old_y: e.serverSidePosition.y,
				old_z: e.serverSidePosition.z,
				new_x: e.box.xmin,
				new_y: e.box.ymin,
				new_z: e.box.zmin
			}
		}).done(function() {
			e.serverSidePosition = e.box.min
		}).fail(function() {
			console.log("move failed for", e)
		})
	}
});
var GraffitiWorldView = function(e, t, n, r, i, s) {
		this.scene = e, this.player = t, this.element = n, this.element.onselectstart = function() {
			return !1
		}, this._canvas = document.createElement("canvas"), this.element.style.position = "relative", this._canvas.style.position = "absolute", this.element.appendChild(this._canvas), this.renderContext = new RenderContext(this._canvas), this.setSize(r), this.imageCollection = new ImageCollection(i), this.index = new s(2e4), this.depthSorter = new PosetSorter(_.bind(this.getOverlappers, this), this.isInFront), this.scene.nodeAdded.add(this._addNode, this), this.scene.nodeRemoved.add(this._removeNode, this), this.scene.nodePropertySignals.box.add(this._updateNode, this), this.scene.nodePropertySignals.isFlipped.add(this._updateNode, this), this.scene.nodePropertySignals.isSelected.add(this._updateNode, this), this.scene.nodePropertySignals.isMoving.add(this._updateNode, this), this.scene.nodePropertySignals.isGhost.add(this._updateNode, this), this.scene.plotClaimed.add(this._updateNode, this), this.scene.nodeActivated.add(this._updateNode, this), this.scene.nodeDeactivated.add(this._updateNode, this), this.sprites = {}, this.dirtySprites = {}, this.dirtyRects = [], this.startedUpdate = new signals.Signal, this.finishedUpdate = new signals.Signal, this.rectChanged = new signals.Signal, this._scale = 1 / 8, this._center = new Vector2(0, 0), this.stats = {
			updateTimes: new RollingAverage(60),
			renderTimes: new RollingAverage(60)
		}, _.each(e.nodes, _.bind(this._addNode, this)), this.requestUpdate()
	};
GraffitiWorldView.normal = new Vector3(-1, 0, -1), GraffitiWorldView.prototype = {
	world3ToWorld2: function(e) {
		return new Vector2(e.x - e.z, -e.y - (e.x + e.z) / 2)
	},
	world2ToView: function(e) {
		return new Vector2((e.x - this._center.x) * this._scale + this._size.x / 2, (e.y - this._center.y) * this._scale + this._size.y / 2)
	},
	viewToCanvas: function(e) {
		return e.subtract(this._canvasOffset)
	},
	world3ToView: function(e) {
		return this.world2ToView(this.world3ToWorld2(e))
	},
	world2ToCanvas: function(e) {
		return this.viewToCanvas(this.world2ToView(e))
	},
	world3ToCanvas: function(e) {
		return this.viewToCanvas(this.world3ToView(e))
	},
	viewToWorld2: function(e) {
		return new Vector2(this._center.x + (e.x - this._size.x / 2) / this._scale, this._center.y + (e.y - this._size.y / 2) / this._scale)
	},
	world2ToWorld3: function(e, t, n, r) {
		if (t !== undefined) return new Vector3(t, (-2 * e.y + e.x - 2 * t) / 2, t - e.x);
		if (n !== undefined) return new Vector3((e.x - 2 * e.y - 2 * n) / 2, n, -(2 * e.y + 2 * n + e.x) / 2);
		if (r !== undefined) return new Vector3(e.x + r, -e.y - e.x / 2 - r, r)
	},
	viewToWorld3: function(e, t, n, r) {
		return this.world2ToWorld3(this.viewToWorld2(e), t, n, r)
	},
	getSize: function() {
		return this._size.clone()
	},
	setSize: function(e) {
		this._size = e.clone(), this._canvasSize = this._size.multiply(1.5), this.renderContext.setSize(this._canvasSize), this.requestUpdate()
	},
	getRect: function() {
		return Rect2.fromPoints(this.viewToWorld2(new Vector2(0, 0)), this.viewToWorld2(this._size))
	},
	getCenter: function() {
		return this._center.clone()
	},
	setCenter: function(e) {
		if (!this._center || !this._center.equals(e)) this._center = e, this.requestUpdate(), this.rectChanged.dispatch(this.getRect())
	},
	getCenter3: function() {
		return this.world2ToWorld3(this._center, undefined, 0, undefined)
	},
	setCenter3: function(e) {
		this.setCenter(this.world3ToWorld2(e))
	},
	getScale: function() {
		return this._scale
	},
	setScale: function(e) {
		this._scale != e && (this._scale = e, this.requestUpdate(), this.rectChanged.dispatch(this.getRect()))
	},
	_centerCanvas: function() {
		this._canvasOffset = this._size.subtract(this._canvasSize).multiply(.5), this._applyCanvasOffset()
	},
	_applyCanvasOffset: function() {
		this._canvas.style.left = Math.round(this._canvasOffset.x) + "px", this._canvas.style.top = Math.round(this._canvasOffset.y) + "px"
	},
	zoom: function(e, t) {
		t = t || this.world2ToView(this._center);
		var n = this.viewToWorld2(t);
		this.setScale(Math.max(1 / 32, Math.min(this._scale * e, .25)));
		var r = this.viewToWorld2(t);
		this.setCenter(this._center.add(n.subtract(r)))
	},
	getOverlappers: function(e) {
		return this.index.queryByNode(e)
	},
	_updateEmphasizedPlot: function() {
		this.emphasizedPlot != this.lastEmphasizedPlot && (this.emphasizedPlot && this._updateNode(this.emphasizedPlot), this.lastEmphasizedPlot && this._updateNode(this.lastEmphasizedPlot)), this.lastEmphasizedPlot = this.emphasizedPlot
	},
	setEmphasizedPlot: function(e) {
		this.emphasizedPlot = e, this._boundUpdateEmphasizedPlot = this._boundUpdateEmphasizedPlot || _.bind(this._updateEmphasizedPlot, this), this.startedUpdate.addOnce(this._boundUpdateEmphasizedPlot), this.requestUpdate()
	},
	isInFront: function(e, t) {
		if (e.layer !== t.layer) return e.layer > t.layer;
		var n = e.box,
			r = t.box,
			i = n.ymin != r.ymin || n.ymin != n.ymax || r.ymin != r.ymax,
			s = n.xmin != r.xmin || n.xmin != n.xmax || r.xmin != n.xmax,
			o = n.zmin != r.zmin || n.zmin != n.zmax || r.zmin != n.zmax;
		if (i && n.ymin >= r.ymax || s && n.xmax <= r.xmin || o && n.zmax <= r.zmin) return !0;
		if (i && n.ymax <= r.ymin || s && n.xmin >= r.xmax || o && n.zmin >= r.zmax) return !1;
		if (!i) return t.node.type === "shadow" || e.node.lastMoved > t.node.lastMoved;
		var u = new Vector3((n.xmax + n.xmin) / 2, n.ymin, (n.zmax + n.zmin) / 2),
			a = new Vector3((r.xmax + r.xmin) / 2, r.ymin, (r.zmax + r.zmin) / 2),
			f = GraffitiWorldView.normal,
			l = f.x * u.x + f.y * u.y + f.z * u.z,
			c = f.x * a.x + f.y * a.y + f.z * a.z;
		return l != c ? l > c : e.node.lastMoved > t.node.lastMoved
	},
	_addNode: function(e) {
		if (e.type == "surface") return;
		var t = {
			uid: e.uid,
			node: e,
			layer: e.type == "terrain" || e.type == "ground" ? -1 : 0
		};
		this.sprites[t.uid] = t, this._updateNode(e, !0)
	},
	_removeNode: function(e) {
		this.dirtyRectByNode(e);
		var t = this.sprites[e.uid];
		delete this.sprites[t.uid], delete this.dirtySprites[t.uid], this.index.remove(t), this.depthSorter.remove(t), this.requestUpdate()
	},
	_updateNode: function(e) {
		var t = this.sprites[e.uid];
		t && (this.dirtySprites[t.uid] = t), this.requestUpdate()
	},
	update: function() {
		var e = this;
		e.startedUpdate.dispatch();
		var t = this._lastRect,
			n = this.getRect();
		t || (this._lastRect = t = this.getRect(), this.dirtyRects.push(n));
		if (!n.equals(t)) if (n.size().equals(t.size())) {
			var r = this.world2ToCanvas(t.min()),
				i = this.world2ToCanvas(n.min());
			this._canvasOffset.shift(r.subtract(i)), this._applyCanvasOffset();
			var s = n.transform(_.bind(this.world2ToCanvas, this));
			(new Rect2(0, this._canvasSize.x, 0, this._canvasSize.y)).contains(s) ? (n.xmin < t.xmin && this.dirtyRects.push(new Rect2(n.xmin, t.xmin, n.ymin, n.ymax)), n.xmax > t.xmax && this.dirtyRects.push(new Rect2(t.xmax, n.xmax, n.ymin, n.ymax)), n.ymin < t.ymin && this.dirtyRects.push(new Rect2(n.xmin, n.xmax, n.ymin, t.ymin)), n.ymax > t.ymax && this.dirtyRects.push(new Rect2(n.xmin, n.xmax, t.ymax, n.ymax))) : this.dirtyRects.push(n)
		} else this.dirtyRects.push(n);
		_.each(this.dirtySprites, function(t) {
			t.rect && e.dirtyRects.push(t.rect);
			var n = t.node;
			t.box = n.box, n.type == "plot" && (t.box = n.box.clone(), t.box.ymax = t.box.ymin), t.mouseEnabled = n.type == "plot" || n.type == "object", t.rect = null;
			if (!n.drawing || e.emphasizedNode === n || n.isMoving) {
				var r = _.map(t.box.vertices(), e.world3ToWorld2),
					i = _.pluck(r, "y"),
					s = _.pluck(r, "x");
				t.rect = (new Rect2(_.min(s), _.max(s), _.min(i), _.max(i))).inflate(new Vector2(2 / e._scale, 2 / e._scale))
			}
			if (n.drawing) {
				var o = n.drawing,
					u = t.node.isFlipped ? o.flippedOriginOffset : o.originOffset;
				t.topLeft = e.world3ToWorld2(new Vector3(t.box.xmin, t.box.ymin, t.box.zmin)).subtract(u);
				var a = Rect2.fromPointAndSize(t.topLeft, o.size);
				t.rect = t.rect ? Rect2.union(t.rect, a) : a
			}
			e.dirtyRects.push(t.rect)
		}), _.each(e.dirtySprites, function(t) {
			e.index.remove(t)
		}), _.each(e.dirtySprites, function(t) {
			e.index.add(t, t.rect)
		}), _.each(e.dirtySprites, function(t) {
			e.depthSorter.update(t)
		}), e.dirtySprites = {};
		var o = e.getRect();
		this.dirtyRects = _.filter(this.dirtyRects, function(e) {
			return Rect2.intersects(o, e)
		});
		if (this.dirtyRects.length > 200) console.log("more than 200 dirty rects"), this.dirtyRects = [n];
		else {
			var u = function() {
					for (var t = 0, n = e.dirtyRects.length; t < n; t++) {
						var r = e.dirtyRects[t];
						if (!r) continue;
						for (var i = t + 1; i < n; i++) {
							var s = e.dirtyRects[i];
							if (!s) continue;
							var o = Rect2.union(r, s);
							if (o.area() < (r.area() + s.area()) * 2) return e.dirtyRects[t] = o, e.dirtyRects[i] = null, !0
						}
					}
					return !1
				};
			while (u());
			this.dirtyRects = _.compact(this.dirtyRects)
		}
		this.dirtyRects.length === 1 && this.dirtyRects[0].contains(n) ? (this._centerCanvas(), this.dirtyRects = [n]) : this._canvasOffset || this._centerCanvas(), _.each(this.dirtyRects, function(t) {
			e._render(t)
		}), this.dirtyRects = [], this._lastRect = n, e.finishedUpdate.dispatch()
	},
	_render: function(e) {
		var t = this,
			n = Date.now(),
			r, i = Rect2.fromPoints(this.world2ToCanvas(new Vector2(e.xmin, e.ymin)), this.world2ToCanvas(new Vector2(e.xmax, e.ymax)));
		i.xmin = Math.round(i.xmin), i.xmax = Math.round(i.xmax), i.ymin = Math.round(i.ymin), i.ymax = Math.round(i.ymax);
		var s = this.index.queryByRect(e);
		s = this.depthSorter.sort(s), r = Date.now(), this.renderContext.clear(i), this.renderContext.clip(i);
		var e = this.getRect(),
			o = function() {
				t.dirtyRects.push(e), t.requestUpdate()
			},
			u = this._center.x,
			a = this._center.y,
			f = this._size.x / 2,
			l = this._size.y / 2,
			c = this._scale;
		for (var h in s) {
			var p = s[h],
				d = p.node;
			if (d.type == "shadow") {
				var v = d,
					m = "rgba(253, 190, 28, 1)",
					g = "rgba(253, 190, 28, 0.5)",
					y = _.bind(this.world3ToCanvas, this),
					b = v.box;
				this.renderContext.drawPolygon(_.map(b.yMinSide, y), m, g, 1), v.isMin.x && v.isMin.z && this.renderContext.drawLine(y(b.vertex(0, 0, 0)), y(b.vertex(0, 1, 0)), m), v.isMax.x && v.isMin.z && this.renderContext.drawLine(y(b.vertex(1, 0, 0)), y(b.vertex(1, 1, 0)), m), v.isMin.x && v.isMax.z && this.renderContext.drawLine(y(b.vertex(0, 0, 1)), y(b.vertex(0, 1, 1)), m), v.isMax.x && v.isMax.z && this.renderContext.drawLine(y(b.vertex(1, 0, 1)), y(b.vertex(1, 1, 1)), m);
				continue
			}
			if (d.type == "jumpHighlight") {
				_.each(this.boxToSidePolygons(p.box), function(e) {
					t.renderContext.drawPolygon(e, "#000000", "#FFFFFF", .25)
				});
				continue
			}
			if (d.type == "plot") {
				var y = _.bind(this.world3ToCanvas, this),
					w = _.map(p.box.yMinSide, y);
				d.userId || t.renderContext.drawPolygon(w, "#000000", "#000000", .1), d.userId === t.player.userId && t.renderContext.drawPolygon(w, "#191970", undefined, .5, .5), d === t.emphasizedPlot && t.renderContext.drawPolygon(w, "#FDD017", undefined, .5, 1.5);
				continue
			}
			if (d.type == "surface") continue;
			if (!d.drawing) {
				console.log("don't know how to draw node:", d);
				continue
			}
			var E = this.imageCollection.getByIdAndScale(d.drawing.id, c, !1, o);
			if (!E) continue;
			var S = d.drawing.width / (E.width / c);
			this.renderContext.drawImage(E, (p.topLeft.x - u) * c - this._canvasOffset.x + f, (p.topLeft.y - a) * c - this._canvasOffset.y + l, S, d.isFlipped, d.isGhost ? .9 : 1);
			if (d === t.emphasizedNode || d.isMoving) {
				var x = this.boxToSidePolygons(p.box),
					m = "rgba(0, 0, 0, 1)",
					g = "rgba(0, 0, 0, 0.5)";
				d.isMoving && !d.mover.can.placeNode(d) && (g = "#FF0000"), _.each(x, function(e) {
					t.renderContext.drawPolygon(e, m, g, p.node.isMoving ? .4 : .2)
				})
			}
		}
		this.renderContext.unclip();
		var T = Date.now();
		t.stats.renderTimes.add(T - r), t.stats.updateTimes.add(T - n)
	},
	dirtyRectByNode: function(e) {
		this.dirtyRects.push(this.sprites[e.uid].rect), this.requestUpdate()
	},
	requestUpdate: function() {
		var e = this;
		e.requestedUpdate || (window.requestAnimationFrame(function() {
			e.update(), e.requestedUpdate = !1
		}), e.requestedUpdate = !0)
	},
	hitTestSprite: function(e, t) {
		if (!e.mouseEnabled) return !1;
		var n = this.world2ToView(e.topLeft),
			r = t.subtract(n),
			i = this.imageCollection.getByIdAndScale(e.node.drawing.id, this._scale, !0);
		return i ? (e.node.isFlipped && (r.x = i.width - r.x), GW.image.pixelAt(i, r)[3]) : null
	},
	spritesAtPoint: function(e) {
		var t = this.index.queryByPoint(this.viewToWorld2(e));
		return this.depthSorter.sort(t).reverse()
	},
	nodeAtPoint: function(e, t, n) {
		var r = this,
			i = this.spritesAtPoint(e),
			s = _.find(this.spritesAtPoint(e), function(i) {
				if (i.node === t) return !1;
				if (n && i.node.type !== n) return !1;
				if (i.node.drawing && r.hitTestSprite(i, e)) return !0
			});
		if (s) return s.node
	},
	surfaceAtPoint: function(e, t, n, r) {
		var i = this,
			s = _.bind(this.world3ToView, this),
			o, u, a = this.spritesAtPoint(e),
			f;
		while (f = a.shift()) {
			if (f.node === t) continue;
			if (r && f.node.type !== r) continue;
			if (f.node.isGhost) continue;
			if (f.node.drawing && !i.hitTestSprite(f, e)) continue;
			var l = f.box,
				c;
			c = _.map(l.yMaxSide, s);
			if (GW.geometry.isPointInPolygon(c, e)) {
				o = i.viewToWorld3(e, undefined, l.ymax, undefined), u = new Vector3(0, 1, 0);
				break
			}
			if (!n || f.node.drawing && !f.node.drawing.isSolid) continue;
			c = _.map(l.xMinSide, s);
			if (GW.geometry.isPointInPolygon(c, e)) {
				o = i.viewToWorld3(e, l.xmin, undefined, undefined), u = new Vector3(1, 0, 0);
				break
			}
			c = _.map(l.zMinSide, s);
			if (GW.geometry.isPointInPolygon(c, e)) {
				o = i.viewToWorld3(e, undefined, undefined, l.zmin), u = new Vector3(0, 0, 1);
				break
			}
		}
		return f ? {
			point: o,
			normal: u,
			node: f.node
		} : {
			point: i.viewToWorld3(e, undefined, 0, undefined),
			normal: new Vector3(0, 1, 0),
			node: undefined
		}
	},
	boxToSidePolygons: function(e) {
		var t = _.bind(this.world3ToCanvas, this);
		return [_.map(e.yMaxSide, t), _.map(e.xMinSide, t), _.map(e.zMinSide, t)]
	},
	screenshot: function(e) {
		return e = e.transform(_.bind(this.viewToCanvas, this)), _.each(["xmin", "xmax", "ymin", "ymax"], function(t) {
			e[t] = Math.round(e[t])
		}), this.renderContext.screenshot(e)
	}
};
var GraffitiWorldScene = function(e, t) {
		var n = this;
		this.uid = 0, this.worldId = e, this.nodes = {}, this.nodesByType = {}, this.players = {}, this.index = new GridSpatialIndex(t * 40), this.nodeAdded = new signals.Signal, this.nodeRemoved = new signals.Signal, this.nodeActivated = new signals.Signal, this.nodeDeactivated = new signals.Signal, this.plotSelected = new signals.Signal, this.plotDeselected = new signals.Signal, this.plotClaimed = new signals.Signal, this.plotSubmitted = new signals.Signal;
		var r = ["box", "isMoving", "isFlipped", "isGhost", "isSelected"];
		this.nodePropertySignals = {}, _.each(r, function(e) {
			n.nodePropertySignals[e] = new signals.Signal
		}), n.nodeAdded.add(function(e) {
			n.index.add(e, e.box.xzRect())
		}), n.nodeRemoved.add(function(e) {
			n.index.remove(e)
		}), n.nodePropertySignals.box.add(function(e) {
			n.index.remove(e), n.index.add(e, e.box.xzRect())
		});
		var i = function(e) {
				if (e.type !== "object") return;
				e.plot = _.find(n.nodesByType.plot, function(t) {
					return t.box.contains(e.box)
				})
			};
		n.nodePropertySignals.box.add(i), n.nodeAdded.add(i)
	};
GraffitiWorldScene.SOLIDITY = {
	NONSOLID: 0,
	SEMISOLID: 1,
	SOLID: 2
}, GraffitiWorldScene.prototype = {
	add: function(e) {
		e.uid === undefined && (e.uid = ++this.uid), this.contains(e) || (this.nodes[e.uid] = e, e.type && (this.nodesByType[e.type] = this.nodesByType[e.type] || {}, this.nodesByType[e.type][e.uid] = e), this.nodeAdded.dispatch(e))
	},
	remove: function(e) {
		this.contains(e) && (delete this.nodes[e.uid], e.type && delete this.nodesByType[e.type][e.uid], this.nodeRemoved.dispatch(e))
	},
	contains: function(e) {
		return e.uid in this.nodes
	},
	notifyOfPropertyChange: function(e, t) {
		e.uid in this.nodes && this.nodePropertySignals[t].dispatch(e)
	},
	plotNearPoint: function(e, t) {
		return t = t ||
		function() {
			return !0
		}, _.min(_.filter(this.nodesByType.plot, t), function(t) {
			return Vector3.distance(t.box.centerOfBase(), e)
		})
	},
	isInValidPosition: function(e) {
		var t = this;
		return e.plot && e.plot.userId === e.mover.userId
	},
	findUnsubmittedPlotByUserId: function(e) {
		return _.find(this.nodesByType.plot, function(t) {
			return t.userId === e && !t.isSubmitted
		})
	},
	findColliders: function(e, t, n) {
		return _.filter(this.index.query(e.xzRect()), function(r) {
			return r.solidity !== undefined && r.solidity + n >= 3 && r !== t && Rect3.intersects(r.box, e)
		})
	},
	findAvailableBox: function(e, t, n, r, i, s, o) {
		var u = this,
			a = {},
			f = e.clone();
		f.inflate(new Vector3(r ? n * 8 : 0, i ? n * 16 : 0, s ? n * 8 : 0));
		var l = f.clone();
		l.inflate(e.size);
		var c = this.findColliders(l, t, t.drawing.solidity),
			h = _.pluck(c, "box"),
			p = e.size,
			d = 0,
			v = [],
			m = function(e) {
				d++;
				var t = e.toString();
				if (a[t]) return;
				a[t] = !0;
				if (!Rect3.intersects(f, e)) return;
				var n = _.find(h, function(t) {
					return Rect3.intersects(t, e)
				});
				if (!n) v.push(e);
				else {
					var o = e.size;
					if (r) {
						var u = new Vector3(n.xmax, e.ymin, e.zmin),
							l = new Vector3(n.xmin - o.x, e.ymin, e.zmin);
						m(Rect3.fromPointAndSize(u, o)), m(Rect3.fromPointAndSize(l, o))
					}
					if (i) {
						var u = new Vector3(e.xmin, n.ymax, e.zmin),
							l = new Vector3(e.xmin, n.ymin - o.y, e.zmin);
						m(Rect3.fromPointAndSize(u, o)), m(Rect3.fromPointAndSize(l, o))
					}
					if (s) {
						var u = new Vector3(e.xmin, e.ymin, n.zmax),
							l = new Vector3(e.xmin, e.ymin, n.zmin - o.z);
						m(Rect3.fromPointAndSize(u, o)), m(Rect3.fromPointAndSize(l, o))
					}
				}
			};
		return m(e), o && (v = _.filter(v, function(e) {
			return o(e)
		})), v.length ? _.min(v, function(t) {
			return Vector3.distance(e.center, t.center)
		}) : e
	}
};
var ShadowManager = function(e, t, n) {
		var r = this;
		this.scene = e, this.caster = t, this.shadow_size = n, r.shadows = {};
		var i = function(e) {
				e === t && r.update()
			},
			s = function(e) {
				e === t && (r._removeShadows(), r.update())
			};
		this.scene.nodePropertySignals.box.add(i), this.scene.nodePropertySignals.isFlipped.add(s), this.remove = function() {
			r.scene.nodePropertySignals.box.remove(i), r.scene.nodePropertySignals.isFlipped.remove(s), r._removeShadows()
		}, r.update()
	};
_.extend(ShadowManager.prototype, {
	update: function() {
		var e = this.caster.box.clone();
		e.ymin = 0, e.ymax = this.caster.box.ymin;
		var t = this.scene.findColliders(e, this.caster, GraffitiWorldScene.SOLIDITY.SEMISOLID),
			n = _.pluck(t, "box"),
			r = this.caster.box;
		for (var i = r.xmin; i < r.xmax; i += this.shadow_size) for (var s = r.zmin; s < r.zmax; s += this.shadow_size) {
			var o = i - r.xmin + ":" + (s - r.zmin),
				u = this.shadows[o];
			u || (u = this.shadows[o] = {
				type: "shadow",
				isGhost: !0,
				isMin: {
					x: i == r.xmin,
					z: s == r.zmin
				},
				isMax: {
					x: i == r.xmax - this.shadow_size,
					z: s == r.zmax - this.shadow_size
				}
			}), u.box = new Rect3(i, i + this.shadow_size, 0, r.ymin, s, s + this.shadow_size), u.box.ymin = _.max(_.pluck(_.filter(n, function(e) {
				return Rect3.intersects(e, u.box)
			}), "ymax")), u.box.ymin = Math.min(Math.max(0, u.box.ymin), r.ymin), this.scene.contains(u) || this.scene.add(u), this.scene.notifyOfPropertyChange(u, "box")
		}
	},
	_removeShadows: function() {
		_.each(this.shadows, _.bind(this.scene.remove, this.scene)), this.shadows = {}
	}
});
var GW = GW || {};
GW.services = GW.services || {}, GW.account = {
	login: function(e, t) {
		return $.ajax({
			url: window.services_url + "/accounts/login",
			data: {
				username_or_email: e,
				password: t
			},
			dataType: "jsonp"
		}).fail(function() {
			alert("Login failed :(")
		})
	},
	logout: function() {
		return $.ajax({
			url: window.services_url + "/accounts/logout",
			dataType: "jsonp"
		}).fail(function() {
			alert("Login failed :(")
		})
	},
	register: function(e, t, n) {
		return $.ajax({
			url: window.services_url + "/accounts/register",
			data: {
				username: e,
				email: t,
				password: n
			},
			dataType: "jsonp"
		}).fail(function() {
			alert("Registration failed :(")
		})
	},
	forgot: function(e, t) {
		return $.ajax({
			url: window.services_url + "/accounts/send_retrieval_email",
			data: {
				email: e,
				next_url: t
			},
			dataType: "jsonp"
		}).fail(function() {
			alert("Account retrieval failed :(")
		})
	}
}, GW.services.uploadScreenshot = function(e) {
	return $.ajax({
		url: window.services_url + "/screenshots/upload",
		type: "POST",
		data: {
			dataurl: e
		}
	}).fail(function() {
		console.log("screenshot upload failed")
	})
}, GW.keyboard = function() {
	var e = {
		isShiftDown: !1
	};
	return $(document).on("keyup keydown", function(t) {
		e.isShiftDown = t.shiftKey
	}), e
}(), GW.mouse = function() {
	var e = {
		pagePoint: new Vector2,
		target: undefined,
		isIn: function(t) {
			return e.target === t || !! $(t).has(e.target).length
		}
	};
	return $(document).on("mousemove", function(t) {
		e.pagePoint.set(t.pageX, t.pageY), e.target = t.target
	}), e
}(), GW.geometry = function() {
	var e = function(e, t) {
			var n = e % t;
			return e + (n < t / 2 ? -n : t - n)
		};
	return {
		snapPointToGrid: function(t, n) {
			return t.x = e(t.x, n), t.y = e(t.y, n), t.z = e(t.z, n), t
		},
		isPointInPolygon: function(e, t) {
			for (var n = !1, r = -1, i = e.length, s = i - 1; ++r < i; s = r)(e[r].y <= t.y && t.y < e[s].y || e[s].y <= t.y && t.y < e[r].y) && t.x < (e[s].x - e[r].x) * (t.y - e[r].y) / (e[s].y - e[r].y) + e[r].x && (n = !n);
			return n
		}
	}
}(), GW.image = function() {
	var e = document.createElement("canvas");
	return e.width = 1, e.height = 1, ctx = e.getContext("2d"), {
		pixelAt: function(e, t) {
			return ctx.clearRect(0, 0, 1, 1), ctx.drawImage(e, t.x, t.y, 1, 1, 0, 0, 1, 1), ctx.getImageData(0, 0, 1, 1).data
		}
	}
}(), GW.positioning = GW.positioning || {}, GW.positioning.flip = function(e, t) {
	e.isFlipped = !e.isFlipped, e.box = Rect3.fromPointAndSize(e.box.min, e.isFlipped ? e.drawing.flippedDiagonal : e.drawing.diagonal), t.notifyOfPropertyChange(e, "isFlipped"), t.notifyOfPropertyChange(e, "box")
}, GW.positioning.jumpToSurface = function(e, t, n, r, i) {
	var s = t.surfaceAtPoint(t.mouseScreenPoint, e, !0);
	if (!s) return console.log("No surface to jump to"), {
		box: undefined,
		surface: undefined
	};
	var o = s.point.clone(),
		u = e.box.size.multiply(.5);
	u.x *= s.normal.x ? 2 : 1, u.y *= s.normal.y ? 0 : 1, u.z *= s.normal.z ? 2 : 1, o = o.subtract(u);
	var o = GW.geometry.snapPointToGrid(o, n),
		a = e.box.clone().moveTo(o);
	if (r) {
		var f = function(e) {
				return !0
			};
		newBox = t.scene.findAvailableBox(a, e, n, !s.normal.x, !s.normal.y, !s.normal.z, f)
	} else newBox = a;
	return i || (e.box = newBox, t.scene.notifyOfPropertyChange(e, "box")), {
		box: newBox,
		surface: s
	}
}, GW.positioning.absolute = function(e, t, n) {
	var r, i, s = function() {
			i = e.box.clone(), r = t.viewToWorld2(GW.mouse.pagePoint)
		},
		o = function(t) {
			t === e && (i = Rect3.fromPointAndSize(i.min, e.box.size))
		};
	t.scene.nodePropertySignals.isFlipped.add(o);
	var u, a, f, l, c = function() {
			s(), l = !0, u = !0, a = !1, f = !0
		},
		h = function() {
			s(), l = !1, u = !1, a = !0, f = !1
		};
	c();
	var p = function(e) {
			var t = e.size;
			e.ymin = Math.max(0, e.ymin), e.ymax = e.ymin + t.y
		},
		d = function() {
			l && GW.keyboard.isShiftDown && h(), !l && !GW.keyboard.isShiftDown && c();
			var s = t.viewToWorld2(GW.mouse.pagePoint);
			if (l) var o = t.world2ToWorld3(s.subtract(r), undefined, 0, undefined);
			else var o = new Vector3(0, r.y - s.y, 0);
			var d = i.clone().shift(o),
				v = function(e) {
					return e.ymin >= 0
				};
			p(d), newBox = t.scene.findAvailableBox(d, e, n, u, a, f, v), newBox.moveTo(GW.geometry.snapPointToGrid(newBox.min, n)), p(newBox), e.box = newBox, t.scene.notifyOfPropertyChange(e, "box")
		};
	return $(document).on("mousemove.move", d), d(), $(document).on("keydown.space", function() {
		var r = GW.positioning.jumpToSurface(e, t, n, !0, !1);
		return r && s(), !1
	}), function() {
		$(document).off("mousemove.move"), $(document).off("keydown.space"), t.scene.nodePropertySignals.isFlipped.remove(o)
	}
}, GW.positioning.slide = function() {
	var e = [],
		t = [-1, 0, 1];
	return _.each(t, function(n) {
		_.each(t, function(r) {
			_.each(t, function(t) {
				(n || r || t) && e.push(new Vector3(n, r, t))
			})
		})
	}), function(t, n, r, i, s) {
		t.box.moveTo(GW.geometry.snapPointToGrid(t.box.min, r));
		var o, u = function() {
				o = n.mouseWorld2Point.subtract(n.world3ToWorld2(t.box.min))
			};
		u();
		var a, f = function() {
				for (;;) {
					var i = n.mouseWorld2Point.subtract(n.world3ToWorld2(t.box.min)).subtract(o);
					if (i.length() <= r / 2) break;
					var s = t.box.clone().inflate((new Vector3(1, 1, 1)).multiply(r * 2)),
						f = n.scene.findColliders(s, t, t.drawing.solidity),
						l = [function(e) {
							return e.box.ymin >= 0
						}, function(e) {
							return !_.any(f, function(t) {
								return Rect3.intersects(t.box, e.box)
							})
						}, function(e) {
							return e.box.ymin == 0 || _.any(f, function(t) {
								return Rect3.touches(t.box, e.box, t.isSolid)
							})
						}],
						c = i.normalized(),
						h = e.map(function(e) {
							var s = n.world3ToWorld2(e),
								o = Math.acos(Vector2.dot(s.normalized(), i.normalized())),
								u = t.box.clone().shift(e.multiply(r)),
								a = Vector2.dot(i, s.normalized());
							return {
								direction: e,
								angle: o,
								box: u,
								scalarMouseProjection: a
							}
						});
					h = h.sort(function(e, t) {
						return e.angle < t.angle ? -1 : t.angle < e.angle ? 1 : e.direction.length() !== 1 || e.direction.x !== 1 && e.direction.y !== -1 && e.direction.z !== 1 ? t.direction.length() !== 1 || t.direction.x !== 1 && t.direction.y !== -1 && t.direction.z !== 1 ? e.direction.y === 1 ? 1 : t.direction.y === 1 ? -1 : e.direction.x + e.direction.z > t.direction.x + t.direction.z ? 1 : t.direction.x + t.direction.z > e.direction.x + e.direction.z ? -1 : 0 : 1 : -1
					});
					var p = _.find(h, function(e) {
						return _.all(l, function(t) {
							return t(e)
						})
					});
					if (!p) break;
					var d = n.world3ToWorld2(p.direction.multiply(r)).length();
					if (p.scalarMouseProjection <= d / 2) break;
					if (a && a.add(p.direction).length() == 0) {
						console.log("breaking to prevent jitter");
						break
					}
					t.box = p.box, n.scene.notifyOfPropertyChange(t, "box"), a = p.direction
				}
				if (i.length() > r * 2) {
					var v = GW.positioning.jumpToSurface(t, n, r, !0, !0);
					if (v.box) {
						var m = Vector3.distance(v.box.min, t.box.min);
						if (i.length() / m > .15) {
							console.log("Jumping"), t.box = v.box, n.scene.notifyOfPropertyChange(t, "box"), u();
							return
						}
					}
				}
				a = undefined
			},
			l = {
				type: "jumpHighlight",
				isGhost: !0
			},
			c = function() {
				n.scene.remove(l);
				if (n.nodeAtPoint(n.mouseScreenPoint) === t) {
					i(!1);
					return
				}
				var e = GW.positioning.jumpToSurface(t, n, r, !0, !0),
					s = e.surface;
				if (!e.box) {
					i(!1);
					return
				}
				if (s.normal.y && t.box.ymin == s.point.y) {
					i(!1);
					return
				}
				if (s.normal.x && t.box.xmax == s.point.x) {
					i(!1);
					return
				}
				if (s.normal.z && t.box.zmax == s.point.z) {
					i(!1);
					return
				}
				var o = Vector2.distance(e.box.min, t.box.min);
				if (t.box.size.length() * 1.5 > o && s.normal.y !== 1) {
					console.log("Not showing jump due to distance"), i(!1);
					return
				}
				var u = e.box.clone();
				u.xmin = e.surface.normal.x ? u.xmax : u.xmin, u.ymax = e.surface.normal.y ? u.ymin : u.ymax, u.zmin = e.surface.normal.z ? u.zmax : u.zmin, l.box = u, n.scene.add(l), i(n.world3ToView(u.center))
			};
		return $(document).on("mousemove.slide", function() {
			n.startedUpdate.addOnce(f), n.requestUpdate()
		}), f(), $(document).on("mousemove.slide", function() {
			n.startedUpdate.addOnce(c), n.requestUpdate()
		}), $(document).on("keydown.space", function() {
			var e = GW.positioning.jumpToSurface(t, n, r, !0, !1);
			return e && (c(), u()), !1
		}), function() {
			$(document).off("mousemove.slide"), $(document).off("keydown.space"), n.startedUpdate.remove(c), n.scene.remove(l), i(!1)
		}
	}
}(), GW.views = GW.views || {}, GW.views.tpl = function(e, t) {
	return t = t || {}, $(_.template(document.getElementById(e).innerHTML, t))
}, GW.views.popup = function(e, t) {
	console.log("popup!");
	var n = $("<div>").css("position", "absolute").append(e).appendTo("body");
	return console.log(window.viewportSize), console.log($(e).outerWidth(), $(e).outerHeight()), t = _.defaults(t || {}, {
		left: (window.viewportSize.width - $(e).outerWidth()) / 2,
		top: (window.viewportSize.height - $(e).outerHeight()) / 2
	}), n.css("position", "absolute").css("left", t.left).css("top", t.top), function() {
		n.remove()
	}
}, GW.views.fullPopup = function(e, t) {
	return t === undefined && (t = "body"), $(e).css({
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%"
	}).appendTo(t), function() {
		$(e).remove()
	}
}, GW.views.createLoginPrompt = function(e, t) {
	t === undefined && (t = !1);
	var n = new signals.Signal,
		r = new signals.Signal,
		i = new signals.Signal,
		s = GW.views.tpl("loginPromptTemplate", {
			title: e,
			isCloseable: t
		}),
		o = function(e) {
			return s.find(e)
		},
		u = function() {
			o("input:visible").first().focus()
		};
	return o(".close").click(function() {
		return i.dispatch(), !1
	}), o("#is_new_radio, #has_account_radio").on("change", function() {
		o("form.login input[name=password]:visible").attr("disabled", o("#is_new_radio").is(":checked"))
	}), o("form.login").on("submit", function(e) {
		var t = o("#is_new_radio").is(":checked"),
			r = o("form.login input[name=username_or_email]").val();
		return password = o("form.login input[type=password]").val(), t ? (o("form.login").hide(), o("form.registration").fadeIn(), o("form.registration input[name=email]").val($("form.login input[name=username_or_email]").val()), u()) : n.dispatch(r, password), !1
	}), o("form.registration").on("submit", function(e) {
		var t = $(this),
			n = t.find("input[name=username]").val(),
			i = t.find("input[name=email]").val(),
			s = t.find("input[name=password]").val();
		return r.dispatch(n, i, s), !1
	}), o(".forgot").click(function() {
		var e = prompt("Enter the email you used to sign up:");
		return GW.account.forgot(e, top.location.href).done(function() {
			alert("Check your email for a link to set a new password")
		}), !1
	}), {
		$element: s,
		element: s.get(0),
		focus: u,
		loginAttempted: n,
		registrationAttempted: r,
		closeInitiated: i
	}
}, GW.views.createCamera = function() {
	var e, t = GW.views.tpl("cameraTemplate"),
		n = new signals.Signal,
		r = new signals.Signal,
		i = function(e) {
			return t.find(e)
		};
	i(".take").on("click", function() {
		n.dispatch()
	}), i(".cancel").on("click", function() {
		r.dispatch()
	});
	var s = function() {
			var t = e;
			i(".shroud.top").css({
				left: 0,
				top: 0,
				height: t.ymin,
				width: "100%"
			}), i(".shroud.left").css({
				left: 0,
				top: t.ymin,
				height: "100%",
				width: t.xmin
			}), i(".shroud.bottom").css({
				left: t.xmin,
				top: t.ymax,
				height: "100%",
				width: "100%"
			}), i(".shroud.right").css({
				left: t.xmax,
				top: t.ymin,
				height: t.ymax - t.ymin,
				width: "100%"
			}), i(".border").css({
				left: t.xmin,
				top: t.ymin
			}).width(t.xsize()).height(t.ysize()), i(".outer-toolbar-container.top").css({
				left: t.xmin,
				top: t.ymin
			}), i(".outer-toolbar-container.bottom").css({
				left: t.xmax,
				top: t.ymax
			})
		};
	return {
		$element: t,
		element: t.get(0),
		screenshotInitiated: n,
		cancelInitiated: r,
		setViewRect: function(t) {
			e = t, s()
		},
		getViewRect: function() {
			return e
		},
		setTopToolbarElement: function(e) {
			i(".top .inner-toolbar-container").html(e)
		},
		setBottomToolbarElement: function(e) {
			i(".bottom .inner-toolbar-container").html(e)
		},
		showSpinner: function() {
			i(".border img").attr("src", "/static/images/spinner-50.gif")
		}
	}
}, GW.views.createShareScreenshotPrompt = function(e) {
	var t = GW.views.tpl("shareScreenshotPromptTemplate", e);
	t.find("textarea").focus(function() {
		$this = $(this), $this.select(), $this.mouseup(function() {
			return $this.unbind("mouseup"), !1
		})
	});
	var n = new signals.Signal;
	return t.find(".close").click(function() {
		n.dispatch()
	}), {
		$element: t,
		element: t.get(0),
		closeInitiated: n
	}
}, GW.views.createMenu = function(e) {
	var t = $("<div>").addClass("menu").attr("unselectable", "true"),
		n = new signals.Signal;
	return _.each(e, function(e) {
		var n = $("<div>").addClass("item").appendTo(t).on("click", function() {
			e.callback && e.callback()
		}).text(e.label)
	}), t.one("mouseleave", function() {
		n.dispatch()
	}), {
		element: t.get(0),
		closeInitiated: n,
		itemHeight: function() {
			return t.children(":first").outerHeight()
		}
	}
}, GW.views.createPlotToolbar = function(e, t) {
	var n = t.players[e.userId],
		r = new signals.Signal,
		i = GW.views.tpl("plotInformationTemplate", {
			plotOwner: n,
			plot: e
		});
	i.find(".like_button").on("dragstart", function(e) {
		e.preventDefault()
	}), i.find(".like_button").on("click", function() {
		r.dispatch(e)
	});
	var s = function() {
			i.find(".likeCount").text(e.likeCount)
		};
	return s(), {
		$element: i,
		element: i.get(0),
		likeInitiated: r,
		update: s
	}
}, GW.views.createObjectLibrary = function() {}, GW.views.createWorld = function() {};
var createStateMachine = function() {
		var e;
		return function(t) {
			e && e(), e = t()
		}
	},
	createExit = function() {
		var e = [],
			t = function() {
				_.each(e, function(e) {
					e()
				})
			};
		return t.add = function(t) {
			if (!_.isFunction(t)) throw "function required";
			e.push(t)
		}, t.addBinding = function(e) {
			this.add(_.bind(e.detach, e))
		}, t
	},
	setState = createStateMachine(),
	copyNode = function(e, t) {
		var n = _.clone(t);
		delete n.uid, delete n.id, n.isGhost = !0, n.isOnServer = !1, n.box = t.box.clone(), GW.positioning.jumpToSurface(n, e, window.config.square_length, !0, !1), e.scene.add(n), setState(_.partial(moveNodeMode, e, n, function() {
			n.isGhost = !1, e.scene.notifyOfPropertyChange(n, "isGhost")
		}))
	},
	placeNewObject = function(e, t) {
		var n = GraffitiWorldStorage.drawingFromJSON(t),
			r = _.any(e.scene.nodesByType.plot, function(t) {
				return t.userId === e.player.id
			});
		if (!r) {
			alert("Please claim a plot to place objects on!");
			return
		}
		var i = {
			type: "object",
			isGhost: !0,
			drawing: n,
			isSolid: n.isSolid,
			solidity: n.solidity,
			box: Rect3.fromPointAndSize(new Vector3(0, 0, 0), n.diagonal)
		};
		GW.positioning.jumpToSurface(i, e, window.config.square_length, !0, !1), e.scene.add(i), setState(_.partial(moveNodeMode, e, i, function() {
			i.isGhost = !1, e.scene.notifyOfPropertyChange(i, "isGhost")
		}))
	},
	objectActions = function(e, t) {
		var n = _.partial(setState, _.partial(moveNodeMode, e, t)),
			r = _.partial(copyNode, e, t),
			i = function() {
				GW.positioning.flip(t, e.scene), setState(_.partial(mainMode, e))
			},
			s = function() {
				e.scene.remove(t), setState(_.partial(mainMode, e))
			},
			o = function() {
				window.objectLibrary.showDetails(t.drawing.id), setState(_.partial(objectLibraryMode, e))
			},
			u = [],
			a = e.player.can;
		return a.modifyNode(t) && u.push({
			label: "Move",
			callback: n,
			key: "keydown.e"
		}), a.copyNode(t) && u.push({
			label: "Copy",
			callback: r,
			key: "keyup.c"
		}), a.modifyNode(t) && u.push({
			label: "Flip",
			callback: i,
			key: "keydown.f"
		}), a.modifyNode(t) && u.push({
			label: "Remove",
			callback: s,
			key: "keydown.r"
		}), u.push({
			label: "Object Info",
			callback: o,
			key: "i"
		}), u
	},
	mainMode = function(e) {
		var t = function() {
				return GW.mouse.isIn(e.element) && e.nodeAtPoint(e.mouseScreenPoint, null, "object")
			},
			n = t();
		if (n) return selectNodeMode(e, n);
		var r = createExit();
		return r.add(navigateMode(e)), r.addBinding(e.mouseScreenPoint.getSignal().add(function() {
			var n = t();
			n && setState(_.partial(selectNodeMode, e, n))
		})), r.add(emphasizePlotUnderMouseMode(e)), r.add(showToolbarForPlotUnderMouse(e)), r.add($eventMode(document, {
			"keydown.o": _.partial(setState, _.partial(objectLibraryMode, e))
		})), r
	},
	selectNodeMode = function(e, t) {
		var n = createExit();
		n.add(navigateMode(e)), n.add(emphasizeNodeMode(e, t)), n.add(emphasizePlotUnderMouseMode(e)), n.add(showToolbarForPlotUnderMouse(e)), n.add(nodeOptionHotkeyMode(e, t)), n.add($eventMode(document, {
			"keydown.o": _.partial(setState, _.partial(objectLibraryMode, e))
		})), n.addBinding(e.mouseScreenPoint.getSignal().add(function(n) {
			var r = e.nodeAtPoint(n, null, "object");
			(r !== t || !GW.mouse.isIn(e.element)) && setState(_.partial(mainMode, e))
		}));
		var r = function() {};
		return t.isPlotClaimer ? r = function() {
			window.plotClaimInitiated.dispatch(t.plot)
		} : r = _.partial(setState, _.partial(nodeMenuMode, e, t)), n.add($eventMode(document, {
			clickinplace: r
		})), n
	},
	nodeOptionHotkeyMode = function(e, t) {
		var n = {};
		return _.each(objectActions(e, t), function(e) {
			n[e.key] = e.callback
		}), $eventMode(document, n)
	},
	nodeMenuMode = function(e, t) {
		var n = createExit();
		n.add(emphasizeNodeMode(e, t)), n.add(emphasizePlotMode(e, t.plot)), n.add(nodeOptionHotkeyMode(e, t));
		var r = GW.views.createMenu(objectActions(e, t));
		return $(r.element).appendTo("body").css("left", GW.mouse.pagePoint.x - $(r.element).outerWidth() / 2).css("top", GW.mouse.pagePoint.y - r.itemHeight() / 2), n.add(function() {
			$(r.element).remove()
		}), n.addBinding(r.closeInitiated.add(function() {
			setState(_.partial(mainMode, e))
		})), n.addBinding(r.closeInitiated.add(function() {
			setState(_.partial(mainMode, e))
		})), n
	};
window.objectLibraryOpened = new signals.Signal;
var objectLibraryMode = function(e) {
		window.objectLibraryOpened.dispatch();
		var t = createExit(),
			n = _.partial(setState, _.partial(mainMode, e));
		return t.add($showMode(window.objectLibrary.element)), t.add($eventMode(e.element, {
			"click.outside": n
		})), t.addBinding(objectLibrary.closeInitiated.add(n)), t.addBinding(objectLibrary.selectedObjectType.add(function(t) {
			placeNewObject(e, t)
		})), objectLibrary.focus(), $("body").css("overflow-y", "auto"), t.add(function() {
			$("body").css("overflow-y", "hidden")
		}), t
	},
	loginMode = function(e) {
		_.defaults(e, {
			title: "Login",
			isCloseable: !0,
			loginCallback: function() {
				top.location.reload(!0)
			},
			cancelCallback: function() {
				throw "cancelCallback needs to be set"
			}
		});
		var t = createExit(),
			n = GW.views.createLoginPrompt(e.title, e.isCloseable);
		return t.addBinding(n.closeInitiated.add(e.cancelCallback)), t.addBinding(n.loginAttempted.add(function(t, n) {
			GW.account.login(t, n).done(function(t) {
				t.success ? e.loginCallback() : alert("Wrong username or password :(")
			})
		})), t.addBinding(n.registrationAttempted.add(function(t, n, r) {
			GW.account.register(t, n, r).done(function(t) {
				t.success ? e.loginCallback() : alert("Registration failed: " + t.reason)
			})
		})), t.add(GW.views.popup(n.element)), n.focus(), t
	},
	moveNodeMode = function(e, t, n, r, i) {
		n = n ||
		function() {}, r = r ||
		function() {
			e.scene.remove(t)
		}, i = i ||
		function() {
			alert("Can't place that object there-- that's not your land!")
		};
		var s = createExit();
		s.add(navigateMode(e, t)), s.add(emphasizePlotUnderMouseMode(e)), s.add(positionNodeMode(e, t));
		var o = function() {
				e.player.can.placeNode(t) ? setState(_.partial(mainMode, e)) : i()
			};
		return s.add($eventMode(document, {
			"keydown.r": function() {
				e.scene.remove(t), setState(_.partial(mainMode, e))
			},
			"keyup.c": _.partial(copyNode, e, t),
			"keydown.f": _.partial(GW.positioning.flip, t, e.scene),
			"keydown.e keydown.m": o
		})), s.add($eventMode(document, {
			clickinplace: o
		})), s.add(function() {
			if (!e.scene.contains(t)) return;
			e.player.can.placeNode(t) ? n() : r()
		}), s
	},
	composeScreenshotMode = function(e) {
		var t = createExit(),
			n = GW.views.createCamera(),
			r = e.getSize().multiply(.5),
			i = (new Rect2(r.x, r.x, r.y, r.y)).inflate(new Vector2(700, 450));
		return n.setViewRect(i), t.addBinding(n.screenshotInitiated.add(function() {
			var t = e.screenshot(i);
			GW.services.uploadScreenshot(t).done(function(t) {
				t.rect = i, setState(_.partial(shareScreenshotMode, e, t))
			}), setState(_.partial(uploadingScreenshotMode, e, n))
		})), t.addBinding(n.cancelInitiated.add(_.partial(setState, _.partial(mainMode, e)))), t.add(GW.views.fullPopup(n.element, e.element)), t.add(navigateMode(e, !1)), t
	},
	uploadingScreenshotMode = function(e, t) {
		return t.showSpinner(), GW.views.fullPopup(t.element, e.element)
	},
	shareScreenshotMode = function(e, t) {
		var n = GW.views.createShareScreenshotPrompt({
			screenshotUrl: t.url,
			screenshotSize: t.rect.size().multiply(.5),
			shareUrl: top.location,
			user: {}
		}),
			r = createExit();
		return r.add(GW.views.popup(n.element)), r.addBinding(n.closeInitiated.add(_.partial(setState, _.partial(mainMode, e)))), r
	},
	positionNodeMode = function(e, t) {
		var n = createExit();
		n.add(cursorMode("move")), n.add($eventMode(document, {
			"keydown.space": function() {
				return !1
			}
		})), n.add(emphasizeNodeMode(e, t));
		var r = new ShadowManager(e.scene, t, window.config.square_length);
		n.add(_.bind(r.remove, r)), t.mover = e.player, n.add(function() {
			delete t.mover
		}), t.isMoving = !0, n.add(function() {
			t.isMoving = !1, e.scene.notifyOfPropertyChange(t, "isMoving")
		});
		var i = createStateMachine();
		n.add(_.partial(i, function() {}));
		var s = _.partial(GW.positioning.absolute, t, e, window.config.square_length),
			o = function() {
				var n = function(t) {
						var n = $(e.element).find("#jump-tip");
						t === !1 ? n.hide() : n.css({
							left: t.x,
							top: t.y
						}).show()
					},
					r = GW.positioning.slide(t, e, window.config.square_length, n, e.player);
				return $(document).one("keydown.shift", _.partial(i, s)), function() {
					r(), $(document).off("keydown.shift")
				}
			};
		return i(o), n
	},
	emphasizeNodeMode = function(e, t) {
		return e.emphasizedNode = t, e._updateNode(t), function() {
			delete e.emphasizedNode, e._updateNode(t)
		}
	},
	emphasizePlotMode = function(e, t) {
		return e.setEmphasizedPlot(t), function() {
			e.setEmphasizedPlot(null)
		}
	},
	applyModeToPlotUnderMouse = function(e, t) {
		var n = createExit(),
			r = createStateMachine();
		n.add(_.partial(r, function() {}));
		var i = function() {
				var t = e.surfaceAtPoint(e.mouseScreenPoint, null, !0);
				return t && t.node && t.node.plot
			},
			s = function() {
				var t = createExit();
				return t.addBinding(e.mouseScreenPoint.getSignal().add(function() {
					var e = i();
					e && r(_.partial(o, e))
				})), t
			},
			o = function(n) {
				var o = createExit();
				return o.add(t(e, n)), o.addBinding(e.mouseScreenPoint.getSignal().add(function() {
					i() !== n && r(s)
				})), o
			},
			u = i();
		return r(u ? _.partial(o, u) : s), n
	},
	emphasizePlotUnderMouseMode = function(e) {
		return applyModeToPlotUnderMouse(e, emphasizePlotMode)
	},
	showToolbarForPlotUnderMouse = function(e) {
		return applyModeToPlotUnderMouse(e, plotToolbarMode)
	},
	plotToolbarMode = function(e, t) {
		var n = createExit(),
			r = GW.views.createPlotToolbar(t, e.scene);
		return n.add(pinToWorldViewMode(e, r.element, t.box.min)), n.addBinding(r.likeInitiated.addOnce(function() {
			if (!e.player.isLoggedIn) return setState(_.partial(loginMode, {
				title: "Log in to thumbs up plots",
				cancelCallback: _.partial(setState, _.partial(mainMode, e))
			})), !1;
			t.likeCount++, r.update(), $.post("/plots/like", {
				plot_id: t.id
			}, function(e) {
				t.likeCount = e.likeCount, r.update(), mixpanel.track("liked", {
					plot_id: t.id,
					success: e.success
				})
			})
		})), n
	},
	pinToWorldViewMode = function(e, t, n) {
		var r = createExit();
		$("body").append(t), r.add(function() {
			$(t).remove()
		});
		var i = function() {
				var r = e.world3ToView(n);
				$(t).css({
					left: r.x,
					top: r.y
				})
			},
			s;
		return r.addBinding(e.rectChanged.add(function() {
			s = e.startedUpdate.addOnce(i)
		})), r.add(function() {
			s && s.detach()
		}), i(), r
	},
	zoomMode = function(e, t) {
		t === undefined && (t = !1);
		var n = createExit(),
			r = 0;
		return n.add($eventMode(document, {
			"mousewheel.zoom": function(n, i) {
				return r += i, Math.abs(r) > .1 && (e.zoom(i > 0 ? 2 : .5, t ? undefined : e.mouseScreenPoint), r = 0), !1
			}
		})), n.add($eventMode(".zoom-button", {
			"click.zoom": function() {
				e.zoom($(this).attr("direction") === "in" ? 2 : .5)
			}
		})), n.add($eventMode(document, {
			"keydown.z": function(n) {
				e.zoom(2, t ? undefined : e.mouseScreenPoint)
			},
			"keydown.x": function(n) {
				e.zoom(.5, t ? undefined : e.mouseScreenPoint)
			}
		})), n
	},
	panMode = function(e) {
		return $(e.element).on("mousedown.pan", function(t) {
			var n = new Vector2(t.clientX, t.clientY),
				r = e.getCenter();
			$(document).on("mousemove.pan", function(t) {
				var i = new Vector2(t.clientX, t.clientY),
					s = i.subtract(n),
					o = s.multiply(1 / e.getScale());
				e.setCenter(r.subtract(o))
			}), $(document).one("mouseup.pan", function() {
				$(document).off("mousemove.pan")
			})
		}), function() {
			$(e.element).off(".pan"), $(document).off(".pan")
		}
	},
	navigateMode = function(e, t) {
		var n = createExit();
		return n.add(zoomMode(e, t)), n.add(panMode(e)), n
	},
	cursorMode = function(e) {
		return $(document).css("cursor", e), function() {
			$(document).css("cursor", "default")
		}
	},
	$showMode = function(e) {
		return $(e).show(), function() {
			$(e).hide()
		}
	},
	$eventMode = function(e, t) {
		return $(e).on(t), function() {
			$(e).off(t)
		}
	},
	setUrlByWorldViewCenterMode = function(e) {
		var t = e.rectChanged.add(_.debounce(function() {
			var t = e.getCenter3();
			hasher.replaceHash($.param({
				x: t.x,
				y: t.y,
				z: t.z,
				s: 1 / e.getScale()
			}))
		}, 100));
		return _.bind(t.detach, t)
	},
	addPlotClaimersMode = function(e, t) {
		return e.nodeAdded.add(function(n) {
			if (n.type !== "plot" || n.userId) return;
			var r = t.diagonal,
				i = Rect3.fromPointAndSize(n.box.centerOfBase().subtract(new Vector3(r.x / 2, 0, r.z / 2)), r),
				s = {
					type: "object",
					isPlotClaimer: !0,
					isGhost: !0,
					drawing: t,
					box: i,
					plot: n
				};
			n.claimer = s, e.add(s)
		}), e.plotClaimed.add(function(t) {
			e.remove(t.claimer)
		}), function() {
			throw "unimplemented exit"
		}
	},
	addPlotTerrainMode = function(e, t) {
		return e.nodeAdded.add(function(n) {
			if (n.type !== "plot") return;
			var r = t.diagonal;
			for (var i = n.box.xmin; i < n.box.xmax; i += r.x) for (var s = n.box.zmin; s < n.box.zmax; s += r.z) e.add({
				type: "terrain",
				drawing: t,
				box: Rect3.fromPointAndSize(new Vector3(i, n.box.ymin, s), r),
				plot: n
			})
		}), function() {
			throw "unimplemented exit"
		}
	};
